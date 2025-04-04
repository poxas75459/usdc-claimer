/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3d1vtyVYRf8hCdkPMHc5fsNYThXCJZdsrFTYnGGvyxytUFmMuFPjbSzGRHZzEWsGcW5zr4QaRG2Fg8WMhcLYMw74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u2MmWV6Ftn16XW8rJ26wp64ZUoMeEzkPioSjVJZjqeLcUHrBWnsWBKxdk6GxEMFTzmHqrGdLamzEM7SkQApRYR9",
  "key1": "4jb7zn9zBwekYrjo1EHRAwXFjZ1r9GBMRp4euT8SX5zjMcuEVsFyHRLvUKMxV1Qefo13XUg4LfswK8DuMyb1ozu9",
  "key2": "4cYo1pn8G6Ukibpw8FuLFdaiXrp9nopZZmnD4JicEUt3YY8fZ4wpK77P9xmKBm69vV6X1KdF8RHhNBtxgAAqQcXg",
  "key3": "3LzWsxFqkJ2zZP3wVaTTx8SGUhhJyJHLXRUeusCiJUzh7h3KpF1v5uAUguRBJPy7nBbEunLzG13TFmNQtzDLCaXj",
  "key4": "5QAVcWZDHetsByU9YGwxaN12UAFLSBJD1H2iQNurrfYuJaZUPKutbbJCHSmCX1NNGTtQY9tfojH8zgyESyzoNw84",
  "key5": "oucAvUtCNQGdorzz3Qge3Zb9Y9hFuM6z1aQqCHNJ5TsifSvQzXFqsnnspyK2esShZSrSEGXB67gjjAHLuuvu9iY",
  "key6": "58vPNidiPfjmh65Efd9woDMub3aDC115uxXiTPKQiuL8M1nCaZhSdw8HvSmT3dRtykTQC77zs366C58jNkm3Jmk4",
  "key7": "3CRsZ1uVLBD5U2LrxKCnj5K34WBndfFVQgaDQBQQiStUidmFW4CVZrEn153xSfMhPR2F7qnWdNKZ3JR1KmaEK2TL",
  "key8": "4f9KRNFbR8zwSkqeEiVqoD8ctqnPPr5A1eUPkAPxhtBAYXh6pgdVPmVow3RpRsn2vZanDmGcfRAUqYKV2ypcKC88",
  "key9": "2YLC16GfztNXbvXEFLbtJcgQQnUn178kM7FhhGaNpvHbfKqcGwkNGz2zVXGc3bLcZeXXp5wd3x9wJEhJcUGHDS2x",
  "key10": "5nh8RTdREnVKnzh741De3tiD6ch5BqdT3FUqWY2ynTVeABUxyKQ77oeNKwTGiPrghBxMTAWqBMVUNjFiheVnXXZk",
  "key11": "3rCtm2YR3gEfJr93ArEN9e7NbMjjGQpAriFy3HmEb4vxtYUqhQ6ChMNEcayTG9abUPPHZMvoDoKpWagCsdx3ozJQ",
  "key12": "36S3KV1KgRaDae3vKycSNX5wNvjteUijhRqtkSosorC49eRh1MuLvSHzVfrD83uxrTkiaVU3HUvy6PPpMP8UUpED",
  "key13": "4fjAqcwCYYgo7SeSQYaTPb2sv3umNwAj9oQ1kex7zVhkdM77R7HFhfKKz9joYyX65Ewuffd6nAz9qC2FDKLyqhxk",
  "key14": "4nh1NG5HejQgTFkSTvmFeL6Y5fquRugbrTM6hgprnLKyTcoefDdSnfdxsdLASNXTX8BiXXawDThXkJmoHFsxSjpw",
  "key15": "7RSoa3dzUMNwEx2pdq1g27hCb9WSTgZ1kt7XpqgLiM7Q5PirSZdwYRG3LbCVRdFnsNix9e8Jwj5ErVocc3XDJ4T",
  "key16": "2sdsgTGS79QnTTC3dMfkgB877PSfDr8xWiScfKzrTiso7WLXY5SvTr9pGJk6cxEkp5KrCzJKg4iTytRz7mGA3ZhK",
  "key17": "3QvENicXnHhrQSyjkH5RTSUFMLX5Q4wJ1Q9KPRSDQJ2VqLEcMM6PrU1xQoXHxv2r3eoeGwgyZ2xZPpeSYpLz2hSx",
  "key18": "aspdSVy4Yehw4W1enJyQWrwJAfku9wtszBAttikcdKDvhUXPDf7fdpH9uPugEAb64Avvo6CbtFA8Gi9dTryYR9m",
  "key19": "uJyytwv3HES4xFiYmhB5dgVNqwE1cBDr9WwZRdujBgZoaGKHgj7BLDEyrRGwSfNU6rFe9Hmwu5vkwao8GSQdbVh",
  "key20": "Y1MKxshCUY7rs5K4gHGHmJw8SKZNd4WmtyiviTAJZ1pxTVBERoqQgadDrm3oKcvCuCQpQhq3fJajanqiY4a1UPB",
  "key21": "4hRuBc6puDaRqnUkRYPvs8YqxkZcMmEPG6PX73T9KdYahdp13652zu2deGLAcbW3m45YJF1TTDo1aYiz8UKtCwsw",
  "key22": "51mhJRCRxpPhZGQRJ3b9z8CGVLQzm9MT3AFp2BsdTVRRce5js7vAFF3SAB5hX77UWNqgFzV7WFWdM1gY8yGEqsF5",
  "key23": "zq45cicRSHsKuqL3pioPxDUWgDpv8kHFz5JAGteB5P4yYGUrVpcm3xMCvop3WzZ9KtX9QPrkznPKdf4ftACvVDA",
  "key24": "4yr5RePHi1ybZGVoofgy8rrH73MDojreeFPtu9kmfbCC6NtkXgMhpvWA6QQdwGGoNYsdCGhDAMEvDRZVqXrEFoHX",
  "key25": "5xvGgmnAgSR926DpyrS7vw4ntqo5fWEwPRZA4zADYeyTNbF4uu6iztA5F8VKA87CLt697udF75Rysrt8JQ7p3ci2",
  "key26": "JcJgBGHRFLe3Fmh7pm3za7ZphYepjpU3fqzqeBQ6TgCrd9nDaBDp3Ke7VEB31x3LPYAkzNYg75wN3TdH5yDTYxH",
  "key27": "21i4L7YPekxNF9234GNcj5SzbzFGC3BphFMkaUFhDYadfYyzJHnV9iAk6LtWMABLUVJVDH4J3MrdfmMALTYNbMN3",
  "key28": "3Wn8oktYk258ap5UbxGF5rzWSSaCRnM1PacqRSfSpx7Ms5tw83ejJCEF1UZixKfeTrxw3Sm8NNE2B5uSiAyt17zS",
  "key29": "5KfKFoEpENXzBTPiUAfdTsT7Lez4udGaaJnHiGnRMesxCsVxgseiJJitYqPMviXLyrJPXwd8Jt1SjfZZFLiDou6j",
  "key30": "91Gs54MycJG9gJ5uVdcNkbTdLiMAm9T7GR9phCE3H1CwdZy1q8w4MopfC1NK7WrutyGF44mmSU2jZZBVS4Vb9KP",
  "key31": "4BVAata24nKdWGUVQGvXVvZoN4SAkdzRYVENYaKdtM3w3dTpE1Av6no6wsTHzQdsMcPTaUZttU3LEi7kVQnVBas7",
  "key32": "4mTSc9u6Cvb49oHvK286JYmgGEX5RP1SnFDTpFowZ1meW122yPjnFwcgyU4AhrueYrRAjkMrisaavETZZ5Gd8imR",
  "key33": "2MBoZdKcMwhFPAgGVcnafTWhCBGpBr6EWTvNscS8xpZjbWoafQMobMGVHDhWSa4aEGyV4saTCNjUVCZcNTXPdJ5R",
  "key34": "38ZgwsDHWsWhteG1VoF2eSmcXvAxCvo8fD7uDG9hqmzx82LfatxvUMSTAPVCSLP5s6jvqcnnov8uD28JG82Goc9j",
  "key35": "2uv6bi6tKNYv1Q9NEPDrUjTX9Nb7Frn7sTUaQ8vpWMHhQHzaJWgEoXCkauHFW85CUWbkQM8qt2ZeUYdgpbh4tSm3",
  "key36": "5Q26TGsBoZdvP4omS2W3KZjF8unBnifg5Eu5qMVNGMp9nEgcx3GRibUhdLQVQXKrGVNB97uaycPNRXn6vYn4FdbQ",
  "key37": "1fw5zY9q7kREoRdyodhY2E4SEVgkEfNdfRxFkpyMmLkaRgauHKGDpMM44vdv8tiumk2tjXahHdcfKtPJYrHS3dy",
  "key38": "3yeLVmauhL3quhWJXqrD25p4aDtwfngxoMMVBVhmbRfvNSv4ij3MTW7UA5wei7UGu1Tos5LXLeC4WobCSuSXTDwE"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
