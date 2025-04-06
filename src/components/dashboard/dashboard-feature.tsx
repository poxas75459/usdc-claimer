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
    "34C1HVRyj9a4BCj2x3sbVScEtmfBzd3sbqD3wFhFqyUu5JNBE5JZ5cXFVgKUH3pFmSTpiZX1g43X8ZRD2FZhikwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sf9dbEDgQjBe4PNsoURXp9mq5pa9mAU5rwwaXdb4LaxAPcmaE39wmrsXFvpPqoVNBmGjn354YXC3C3i1yWyXQuz",
  "key1": "2e5YA5t2WM15LGgzbLAtmoSRufUpZLE6CzKYoNV3cK9djXAY66ZDengZc6mQGbmq4CogkLS342reK2jVSoVGJ6Qt",
  "key2": "2WzehizFd6SdDTHrcEzA7ruLY6aapr63V1jKJ2A3LnZPNZCUTEFYnUZwPvZMTw5uT2RebZbUofko9XXNRWBgDGQP",
  "key3": "pH3Fu1MHh3XWSkJJtQryZy9y3iVP1p92FAygitYisBZymudP2BqBH156j5dbnzZWsnLRaWS7BUkbEVkfxPvQvUM",
  "key4": "4oLuFARwWtqrtTLaKA9azFwdUGuFhGZep55yNVazbCeKgGEYhBWsHFUySir1RZnmmDrQfpP2qGJPsc15MDgE4zcT",
  "key5": "2WW5932AHK1ZqxqHcAdpZryPGeCQ75mWFXkCBxqguKi2FU4aNS6AVj3Teq2zHscvRnxeAfVntggWnns5DqZX6EH3",
  "key6": "593MwHfUvMQtgNcEgS8SyzwRWdsDDcDoitKeZ9waQaNqzUR5nuKz7YfKhL6k3U8ranrxiiP9rZbdK9TRSFL8uDRo",
  "key7": "JjsVcn1Bw9HyPDMC45Uafrjqovo8EYVez8of3Z2QWJvSwGbeC16juaHut5PM6FaUKa4nvHtserVWDqTxsoUyBbo",
  "key8": "4UmEkPULVpMS78vnN6P32xDGuZ7okjeHgc8Es4LM2HRCoZPCAV36Yp6MjmkoYavF6iZ16z6J7yLvVsMWwt2PCoJj",
  "key9": "4kByU1ixDkfivK1u77ssgJMwH93ycBpJNoAfHKmxcHm7hvu4F6CH9TPdouT7DLsH16myBUZxJyY4wyHHbriZGZrM",
  "key10": "WBZKJXWN7KMUgEdGcxgUK2UtLJjYRLbiUNN2hTZPNJesP4tYLxcU7X27g25qmF5TqHP7XdGRG1Qv94GB6TvJYrv",
  "key11": "5HgppWKryvEX72FD6Ky74cGG2JHLktqePsKb36bDbN7BXALeiuoVchsjorkDupLAjB8dxATB1eUPvZ2oGbSv8aNA",
  "key12": "8q4JmoEXpHQrTB6QZgLT4rpyKzQ7QEwxxnz7qwPe6poAS8QaC1EKfHKKKhSjQvigZpa9cZ9kEXFBgJRKi8YS5z6",
  "key13": "2oxtPMZ6hwavDVgpqG3A8EXUkznbgHpTjCu5gvx9ePXbDVjmoFPxsRDjGn3oMtrEMHuJ7o5yidcS1K8bpJg6MFhP",
  "key14": "4Mc5f569qzLxY93qaNf58cYzteGJnmEyZwp9vrsJjTCDGvUL6VPeHeZjZvBZXo4s9rqnMbNAsnwgKo6RzrCvME5m",
  "key15": "2HayE5aVVY4NXnsCDMuSqrgVPta5bQ4mSTK89UPAv7eybHgANykGBJs567QX7TvGMADCqoR3cZY1sYCwywFuuY38",
  "key16": "3c5Bn1Wd3WvbvhT52ZZxH76PnXnbvWyZgWF8yzpMvpnyPbQB44AakxRcS9PH5LV3m3x3pGJgb7W7tVscZMZdxch",
  "key17": "4zPmQCqcxbcNpXQoCvgPcnD5b7U8yzgjXbYc2m9vfNi3MdBhWN5bf7JUM8eVixp4DXUHcBYKWCqubyi59nekkVga",
  "key18": "391GQMqjRs7aArJ1UHHMoX8MGm2E9V87x3sLwuq7os2UxQbuw6mdjuuGeB8hV8CnCzUiUBm5TrzeNHomuYeo6QzK",
  "key19": "24nH1312W6qg15pkHNZ2d4X9DNBF846beda7Bgb6MZWf89NEv41HpuUFZyWxJEdGx5Y7rD61m8frw9PUmACQafS3",
  "key20": "FygXPJT9eufwfhN917NnJaodq9JVZS4Wwvcyzy4kQhRkaE2owCahrDnXhLPFARjapomYSdve354vPudwNB5hePa",
  "key21": "5sVT6kTYHGWmdSBWoyH7RY2MruJDLrzPr3c44dYESVbY6evKkzJiYPKpj3zBtNpxhoDvFdgE8v6EpY2p8Uaetzdz",
  "key22": "VTMzjSuAWyqryNspkx4sGzDTw6LFWEXcKCYZ6TJPrmGSPfkoupvDSziwL9uJKnnuBZQFCt88J1L1Qw3oVSFhuTF",
  "key23": "2yH9DbCsD82pZQbmK14hNgxxXR4dcdKaY2BSXejesYFZUG35tbTxDFgg6cmYktXeiJSAzHvPuZCDCo6NTyJjvwo3",
  "key24": "c5N1GCgoaevtFAZdn26XC4AQMr5DitzbmMmrAtfK3W8zr6TQPb1xrGBgg6WQRfPAAueY42cwdDMt3xKdSitPJGF",
  "key25": "55cmgjKdTKBpo4amFEWRWCwBe6pLrWBwNeXcGfUhR3wYohi8zgZMCh7AKkTf8b1VSNbi5Kz6WK9DtQ4rQ126GihF",
  "key26": "2XKXN4SRxobmFtcz1uvo8Z5nA8FBybJiFTPf52iAnYKtGBQ8ub44iRPGhVrSVDiQStTZvLZfiG45LbQiG2f8RcXw",
  "key27": "36iUSYJX8HXKowpsuLRNTCZQZ2fu3pSc4zdYyTDNixfoh1aPscSyGwg7FYXViXzTiMumgr3v2zzRR9xkVz6csAQD",
  "key28": "3c1Daa5brd8AS6d7zBTxPrsTvDJcCzzV9D1qQMuwcvUjGunSennFpx1YDb1EFQB3hf1jd7gRzrZFWcP2mJ6Wbr9U",
  "key29": "2zVAnwqbAjNxjvMTFi2CUKM1f7AcLkKqc1o55WMdCPsq7NXX5cm71ZjB7fYGexmDnD3atxEbuiNiDDQV2hXg7qGQ",
  "key30": "2FD2JDHuZHg2zZZmG91xCVvRVcvbA28Gug79YoUzr2KCmXxz2e1zovLa6vAqo4unJp8MeqG1Po2q2KxKdxknBhe4",
  "key31": "aWDBTKkSyVn2aUa7ovkNY2mhTWogmRRRe4kKgJwHzRkxcefNff6YxUPaaCJv6kgKkCLRXRJPdVCWtTVz8NMZ2q9",
  "key32": "2GxxEFxRoiT6JZ691MpJ34XyzAimiRCp5QUx1KdExBDCbY73nZfUfVQySq6AfWsJmTtx7MMjNbU2NnuWEzPMw1QX",
  "key33": "3Ryr1dSWyksUxtV4xDysKXd5JeccVA3VQuWMXs7vfDrQBegdizMXSfE93TZuGBXnuaixTfooVtHLBPf1RwReJGWD",
  "key34": "4s8yQz2d3F6dPfp1SMpMSNWKoWQiCSKRdhbQRDb3iVquZtRB5bZAq4Lnf9DwMK9tNPSpR7UmUozWGWczz2zXP33M",
  "key35": "2nYyBTae2k2KJNBLH5AL52M6GALaQjJVdsDvu6JCUMvNZrZWruFCkFxS8TQAU53rW12qzbz16tbHVanCWFERheuH"
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
