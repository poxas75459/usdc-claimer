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
    "5jnDvaRffX6ygkxishaPs9CwmgwNbwDsGhAy56uEVNkkfCL1aHLFsx67hRsjr2Ra7uhuo8bnBXF4ymbYpMpat2kE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X9pDRvcpNSi6i1a5ptXBHGQd2v8YxCKwpBUxkxCYc6xX68p4qQfDiaSMwTKz6915FVM1Hmo5pzAkK3ibByC9M71",
  "key1": "3L17U1RfuTauxhEvhQEiC2Shs3BKf62qPj48L7G2Sk4vnChW54HdHpu4cMe3eZ1ePH5ygrzyBAQS1xVT2cfKniCh",
  "key2": "2kVg3w1nKzX2TnWgfwcLzGGw3C5qdKNwnsJzDbnfoP9XFiAUmFWFrTfYNN93JhiicbwN2rMKrS9Wjj73dmbGMVe8",
  "key3": "PinxE6i7U37wiWnz7gSPhMYXkX1mYYbwYEiRMukexVp2vuG2coK86773LLNhyfbCXEGomFreeQifgxpKKZob8NG",
  "key4": "4RSnpxe2aWu41VNMPzRLpbpSixUhVo4sMc6j4QXqqkm4W1rkChy8uoaC8MLT6WXeV9VXk765egE5vQqoVc431MXh",
  "key5": "3TDyfBktEt4uqshyW6BaEwVRUfciP7aMhUEK9QFmeopxzbsW4Dy8qPFcNXxhsi6HTuiaVQdkNnZq8MadbU5zFR6c",
  "key6": "5nWtwXfMgvVpxiw3iKirWkF7gZ1Gxpf7deGLnnex2s5mWMgH1sF5sVDztp8LfTgvEX2EXezDsSok5Qmys1REgb3s",
  "key7": "5FRpP3WpjX6qVJk8hytAJ5VSjJMCRhF2XYiUZWivtnw4etspcJ4wVnZYtWr1o1ZR6BChVnPiQfLG4oihGupVyFxQ",
  "key8": "4vgJbzB6Z2zDWb4z9v2uTmDt6PkDyRpx7ar7XUbbYujjormPpwKXpX7yqZgmaDR3iRcbjMQi4ZqsDoZoQmxcFDJu",
  "key9": "axZ7XDW1deB4V7e2Bk7FSDvBzbpy3AqUKaB84K7aWmvygjgdnkddzrzR57Ay2BCQnB2QcU7vGxvWJXMMzG4vMvv",
  "key10": "2sBvuqigcj7vCHyUz9G7GjRUej8T5kWhi77gHdPUEcFv9gQcMYNenyui3Kgp8cdBZZfT5ppAbASzQpgkxrgc9LkJ",
  "key11": "2PZGVrfjaTMj4wdMxz3C577JY39VgUiztua8QBUd3NHAGkiyN2bsAPQ784wt6iXVSEGnGbeA9X4LSSwvBRFmpW1o",
  "key12": "2ycChKcCLGzSJQ3T5uLmhVkE3JJZcnHT3YbtfbTChefwP5e8bDE87t63KdQcWCNG1Tk9vgieBVpyoCkZ7XAN26tk",
  "key13": "2NMFHCUmXoK3N7XZj8ehMj66Lzc8uz9GfTR6XjSEkwBy9j8191rWrzaacuyZGLzx7URRANtkqysByQNDkb3XxNB1",
  "key14": "5H7Xpa67CLgsnyjqx8mvgMRnzcprA4skg7VqodpBr88dFgJb8XAU6hoJQiNENVVAzEAVTUSrtoH44WUSeWUExh5j",
  "key15": "2UfwQMWdq6jcMTgkdjA8oH6UmMoN37kG1h1W4NY5Wim9TYDnF1Mt7oWe2oUXr26GHvmRu7ouv7Vh6dNpr1fHiMGH",
  "key16": "3inSiYfWHLitHPJGPm7xiXcrWUPNvmMxeawfcJBm95pQNyvLPxYo4QWZAMdaaMFV786WmC784dSMp4ma4FFkKk2B",
  "key17": "cSGQRCk9G6xA3kDjxepKg6oYp7aMiNZ6ZmBubkSVrd1TWH3don9vPUMWXC9R9NhePTrFEpGJfYF3HmBKkbutXRb",
  "key18": "a6efWqAoUUc8KBKixKBJFVkRXT1wboM9HNECEzVeEr8Gqjasdahb98vnBnqiGUKchpA9t386Gz3U6wbfvdvzhQU",
  "key19": "2BFvuyXmafuc5rPMuVF5tX3RXqPAzbYiB4jQ2TGWwjh5hLFJsn7674gG5MtiK3krLzCGK9eeVuKkC6gDFgj5hcWK",
  "key20": "NJPQ34wFxdfdA5ZbhEcUogxKfxF1ghfFTN3asjqf3K2AuVL75iSwRrvtHuWKSoQd67T7uPaGd9xKWMHVAozEk7E",
  "key21": "49jA8ZcV4usjpefcn9NDULtmvxzVAs4YMDyA28VAbyRz2xbdgt6NuyXkLsfieqm8sfQYB3V5pMFfwf1HUD8x9Zyg",
  "key22": "4wbMEnBzR8VTsHVd38kmS9zW3NbCQzGDbBAcvoRarJgogAcGe5GJdkEukRgayW5TzL4scEHTU8WR653jyL1SUtaf",
  "key23": "4wU6xex49DuTJVJNftiTVmZ1YRPyvMVDQ1gccVPWv7f8qvZdjvV4hxR7wxkRFdhYqrLdpiB3dZzJZvV2gMG7pULb",
  "key24": "2eqHePdhXuyeajDNgXLdM6arprQoLDqm77PVM2SB5sDYgXwCrzEMWRRSE6Z2jmiH3Z75sYecGXEp1SLnSrNDfPS",
  "key25": "3pYzzY96MNhw7274UmRe2RqfmwPg3NfhfiZdMhqqEGFXbaGWM2kpDLyddmcYaQydkyNfCn549J7wsSypgBC6wdcA",
  "key26": "3LqaBnQ4jgZdX1iHXKpwXEjzBPCV6rGg1s1jexReWuZDRCXZ2kgG2AoG2DcuRtHJXahyGdKVj3X8CKBnA9DTvjCF",
  "key27": "3p1stdyUNJ2drYinDLfZsf98j3Pk3EPZvFwT91e757H5BW3wt7nq8exg7V6BaycVLZFxbQjqhpx4EgEHE3Wg95bh",
  "key28": "62T1J1UBYkrVNWWJ7wpPx4ZpbF9X2gMfFfHiJVqzi2ZBY71N3rJBeFusezkx7dRZYogTvocsja5MQrcxRCAkPtFC",
  "key29": "qyaALSRK2JFugmxierptTKkC8uxiMMmpksNV9ucnkiwGCiJ35zJw7ppT5HXaV186nAJ52uAdwjuMrBv1yiU99X5",
  "key30": "23hwULRXP1jfMQNCUPa2MF9Hi9oUKSxFc5kTB9r4LDGktaMvvjC4bY6wUb4CG7nNQamaaLqbJ9d4XkQiCnBj52Pd",
  "key31": "34cqVMe5x68rcqGgESXqzz4hbpZmAJrkHa9ot6GyqdXKERUwM4hYLEYidEtp2dPxfbBTSw917i1wP4jjmSi1Nkw6",
  "key32": "44yan9eH1eef5Mbr1qzaUFXeqSRd8agRem47P6aDYCdGhi6B9ei5iEcLE9NxMffUuWAKRsgYpyhVHvfH17kt1Rhn",
  "key33": "436opMiFGNNSdHUz49H64wAJ9j5rU9seUdm8oFso986NcUgVaMu4jLC6dF1quqy9HnVigaZqN4NEtMw19vmQ5kCu",
  "key34": "4W9gVoUCvaPSHBEgykrAgz3FbraipKB2jw9CiRh6dKZfd9use22EyFpKHwDh196URSNMrUDXWa4fg8Nm6C87L1qs",
  "key35": "55a7nYc9tUWB9erBU5vFSUo3bX1ACB1TD1rnpPips4xW3WCcDagKh3wTnMt1kwkaRy8RrjzDrymBRmddpFSPPSzn",
  "key36": "4JbDoquKs2XkZ2LZXbBWRwv13jD6xFuztJH3KUVZrZ4wPUkWfqFP54Bv31Azj1PztvWezdz94Ln7hEYZFqoqjfU",
  "key37": "2d1GDHoykdyWVb41fREpwTyh1WiFv3Z2vzvedwaafr7VHRjLj3gMTkZUFLmUpkokpj5W2LB7AbXxuJfCTGkw3CZd",
  "key38": "YtR8Wg6nzv19vNXth92xLnwU4U9U6dnmCPj6GbDVyLzyEPhNjwKUddiXPP5xnVGTvGCmgSrhH4owhvLM9EvkjN6",
  "key39": "5F15cXoF2Rxv8Nsp3KbafHwtfvNW6fpoX8fdfBujt6kGwHQAPuRd7ZjWBWTXV2aERXXoU89JNBzErtmkkYzyiuhn",
  "key40": "5fQz6RevQD4hECTj3QdRmyDAdHVJHUnC9kikCyBkX4u8dRJfSd2sTqLuepTTQYzE5QWCk3kP4qvjcQpXieQ8N5gP",
  "key41": "5iJKgfFA4i1kcmRwxtLmaCwoh3d4M2UFD3hcBmYsBafPNGAsaJxZpkjtrQdv2wkX3Y4iXtdauSBTwddER6mtu2sd",
  "key42": "4n72BkVQi5L47sUs29ta78w8R3BxNyYvsRs6yiVGHXg344srWNbHBRpmUCSVzHWpGsRKzAF36p3UxeUiuZ6TjAJg"
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
