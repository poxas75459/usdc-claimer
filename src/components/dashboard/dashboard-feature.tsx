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
    "4mv6FDBXwmpTvtuD2M6E47ogyYZw5v5EzeairvbsAKs71xioXTDirXG6QmGAtjYzanAm2hcSCRj5TjRXtDia3KaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34kipmvM3u9Hnwv7uyvyQ3TEryNseGdmzk7Fv4jjYmSzSt5AYaqmg3kJ68cx9icCMNDmyhXbWSaDNz6XbcQx3fXH",
  "key1": "3moZR9GapL8q3dvEtBFKo5GB44TecEZzqrn9PU7t9EErAoh9nvgRvpdXQrg7cz4bioW7mbarCSzDftkEixk8v4m9",
  "key2": "5izU2hPRVPZeKxJagtxrtFvixDEQqJj5kB7ZPszMkYLfTGq4jGegpDo33AQgsksSiWwRs18uALULsAnfjU98mYdo",
  "key3": "5XA2guncrxMfGQYS9BjekJqjh6FrNKF6S3tNWntaxVQT6bNb1DwyXUP7ZbKCoNpxrwbcEUQWYDPwWN4fzPbDnAEp",
  "key4": "3GRJgjKTC2392F6EEELMC1cpD9iQ9BW5HtqXpQGA1jdLkCcszZSLhQP4qr61LogH5HuMyrW513HyMJgtiPkoJDMr",
  "key5": "Vb9D1ATJZS79MmjngDg69aQdbdt4YJCz75uqHFeMYeKecTajWi4kkqJs8G1wgY35fAqradGZhfv9GhQgCPjGPtS",
  "key6": "Yjy5CR2hvUEfx9vMRhJPqJfxuMRKJ1cBYLBUBEbA2dYqiggZpf6ZV2ftnN6VJVk4VNBx3nbzuDbcqpcutW7DQj5",
  "key7": "5Gtsg9SbKrR48uKTsHPtsBtRL7biDxGKkBKyXiePBay2H26N3GycbMiKekzfwvXKiJF5LPXzFQmMLmE2wAcD9afo",
  "key8": "3ChXnupEqXsBjj1xrjoTdpovenPKarM4zyYFtcaxofDz4DiatXg3dCJ2jhMARzx7SP8ecuCp2QNwskoTz21rpFxD",
  "key9": "2k6n8QRWQ7q2PBE6Fwv6aX8L5RftxzPvKuCspGTqLdbt5Dfp4BmrSYtQ62ukzn1qGbPLV7AiutjXj7fRes52tAQe",
  "key10": "39NRGyWrnKBKVVLEGNxvTquWbumhYZsdmWE9ARJuG5yf9a9x1oBAkSVgeGQ1namYSB1kDZZv35gBpcWAEuvSmcRG",
  "key11": "2cLBrv33U3A5dcyvwbyxn4G3bx59mQFFiasFTeffLBMcyji4pwAV4AcV3Kiet8YE6bcmGYkZkemHEJzjNtdQRzUA",
  "key12": "3TgYGsVPNiJa8WdgxVbfAk6Zbdc4D92vZoQcuoiBscCy8yTRE5W8y2GnQ5oGkxEkYuYbHiHJXUFTdSSNYs69SXMq",
  "key13": "3s5CZj67SXkNEZLvx4xejnCQK1f1JGNoczEnLhdeiHETtevs5xh5LonMej2TGpGkpqK56A7pRZWCNNAz8zBwSEpL",
  "key14": "26q9rghBS1pCoEKksNRnyEUACPDcgjWafTQgvoZ9AiUewPMuRzCKMeA4sdZUq6Dg3iPEnx5B1fKFTfCvrCUuXqnz",
  "key15": "5LiLXrgwFRVBN1CodLhZZ3arcuMhh21zPNeEQkE3F4sgopBKuCKfcgu4wAJ9w8KJCTJNrnNf5FAbtCkqfcvVcWxh",
  "key16": "44mtJErWqYrY4VpiyyWdGr9VGHvcAJHhzEBDCYXp6RrFDXM1UqWQCmCJQiUZrNosfLDRg8oDC9iixnhyVhzkRVxm",
  "key17": "2qrxU3zgLG54X3fQFb77K257imRMVzC3MDE1f11romzQwar8E2CoeDs3wL41FvaZrepsFLXCZza7dDfRaTNDnk8v",
  "key18": "5Yoq1gWR1HXHLGQxfrVoP4NBbuveYiAKSE6aKNF1LGXXBAWaSvnR3khTCeippezs7Bo6DZUiwBLvieBFuGjtnghA",
  "key19": "3aVwntGwXsi3jBYHFL5KTJeXCnhnReD3es27ywhS8XVAzuQdSDiMhrGhiKsKJDLGZ6BMBwRi9BUkcj7QHFr3P2Tr",
  "key20": "TncWcwj4WsC5v7efkuH7MC9nLb2qGHYWARy4p4JmjkHYT96PWuohGWh5ERAtG6HhuHjgqBQx6Q8ZYxib9r4iHLh",
  "key21": "62SGbZ8BGkL9FW4CQRpy9bXbrYFGe1qHHFG3upqho8AXrh3EHHjZWK8cVcPQEUPbLdssGLFCUb9pSy7ngbU8qcS",
  "key22": "2XF3k5aF6PQx3G5zhP2McuTPDGnNADVhetY2UDyyXUXFAbrAz1oksjnQeVkHH2FcbqzCxbk8FbQQGNv3sDt9YoUB",
  "key23": "27UBrQqruFzWkQimPmUbAm9fMXcKq4aMFVDLvCEC32ioodWxJhGGkR1Ckew1CTb5n2p21xRh4myMfRdzKDmujxxw",
  "key24": "4qFfVs2QToQ6MEgWidFD4D4tFZtSKDH8s47Kp7MFwN4cE6GcZ8oeTwDwJcPzFYLWKKwiGLiUMGCp5HN14N6KVFHM",
  "key25": "4eLtFC4F7WP8dfJxvRUeMnBJGzLftvynUydTkFSkMEvy1WSVeojz8XiMoUXGXJm9ptE2uLZWSKmJ6XHNCRPoDNHz",
  "key26": "5czJUcp7CJSTiP7QrF2xWm2fg8CAGMKwwy8maQV2vsxVo2eHM5ghxB3AmMY7Tdi3qSxV5wnAW7czq98J5ULATXs9",
  "key27": "4dEzhpsPWHPX2GNVuGW5xgUBd8yCP6QwDUXEqxii8rQahfvrdRwbZAUd4jHrXNFBUJzFGDfoXhAasMKKPmnmWS6N",
  "key28": "2XGuFZNEHmUuXdZfUZ8VaEMRwRyoRZXHezt3LLyPvTF4wuhhPQR6NycjX4CWwzC7cW93MVZMtdQXfq9D5wRQeiPq",
  "key29": "3sBXqg5g3C8nBiYqTCbiiuwtn6o9VHfGuz4FwA4gbin8hToofne3QV5krw6wE6s89JeV5RpsGm6wkUBSyeGRnFPX",
  "key30": "2wrkeLuxvJtFg1r4UrWpau5TTAgRQo4n16hxJjaGBpo8XaBmLcFNJjtE5zrgZdvoCUSUwpVh3a3bUBDUxNNWbkzN",
  "key31": "KppvjoxzXcxbUvpr2NzhYQgcHGUcW7EuWKEU1HUCQoC8g7FSDXX9QaYkCNZoxy6AmXUSdGnVPsV9z9ykkaxVqhJ",
  "key32": "3yzUbwXvzpjmEPSjuMdHtGArb5gyU99NceKTFfhwJzv3zpnrHFiNkh3QQ6b49vGk4XX8fAcrWR8geofxM5RqKmVw",
  "key33": "5XGAMZn4HxvR5MxA3w3bAx8f8yYV13zXKacPFKRCDgiKzXcbakMnokXcwoxifyB1NsKZaGbydntcJD8VKZMRRqRz",
  "key34": "3EpePjaAtwJ4EDwgcym9cExSorKmT7bfY3eWCTTJW8gewZPW6qiKcJkGw2pzfGQmdWELRNUaHUa82haya2hm5Jny",
  "key35": "5XrNs4vkG93XaTDYaF4AHGZBafp34KeXMTbeQyHyBkJiMe4dTxRY1HXR37X5c9EJp9UJCuzSfadNaZ7P3t9JyzXP",
  "key36": "RB3HHaYWi4nqCtcVyCoL137naviKDBzPwEuzeTCDzg3JkxJVet2r1j1yoMbe6ypMDqda9ceUQXmhazujVmeQuiD",
  "key37": "3pQmV9MV7FbyBa7ghnZ4HkL3oUKmEjK5sELCHBdtjWFYMvWLjzjPjSWcjEx1ZTkEBh55oVE4uXeS3B4gfZDttq49",
  "key38": "62iX72hnoeNQvKi1bkNkcAYo1KTgx8SRXoSSPcitBpLQStNsBE2yAkFGkPhuFLGpC3zx4RmtVnKoZjSAPJWMUP5c",
  "key39": "rhF9Yjb4dbRdF9kMRkjRNJZcs6eWvGPiGMantqdyNwpebENgCQWp7rUAwjmGxvttVAM1pAZdmUWbdzeuQyfatrh",
  "key40": "4MfRgdpgBvaLkAzqddvoNwMcPKShKxjnnb5MM9ukzkQTSq9hipPsVByvYUhRCyVnvVSEuLpQeGHqgpnpsb7FSA3b",
  "key41": "32ni1SUcg6U1efYXDLzECLAWWdP52M74BesTnv6XnA5mg4m9iLctnXumJnnFmE7tANHfLCosA4QnKyiCs17TRYBJ"
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
