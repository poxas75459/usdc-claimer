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
    "5a9jiFRubTe8tqkQiQBcjtkKmqNbJNfzEqeKYHiCGJHWjqZowK31qQqgoQR76UnHVVJHwBphzarChwNJw3Cf3HHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XnyiHJKwmBeNthtrRR1WTkDe47RsMsh1pBfnrXvLevq9sCDnukzBURrkpKpaXqhCfU6qjiLVXLTqiuDWh3JLM4o",
  "key1": "3GnYDL8Nj5EftAowGhjmuKL4118HYXU62Cyr32uTnBQg4VmV8qZYNgEEnoZpiUBeXgkJCLz5efZ4mWe5bzG5uRiJ",
  "key2": "3CSkpRotg3HZAcBTkri3pHZR4yrMY2zbXjvC7edkXxSsRDxnNn2PreZLnTcU8Jowi2XNDz9nJVwzHJAK25jzJCdY",
  "key3": "27RehLm41dfFCStofHpTg9sNVFAHzk7XTJEpjRsWeMokXtB2irFmP1ZXtAx5b2NEdMZ4q5Nvgj5qN6RtYgmteJjK",
  "key4": "41z8mtM8Ft62eUPVfyvL64Z1tLXaQMBYPtR5Cg2mKn2ZYfBAEVmobCkhQE2fAFAePi9B4Jkw7AnsW8jkcEKrAeqG",
  "key5": "jCEcwkJv4rhBSH4ad9xvdXaYAz5J2wfZ1y8K3Cgpdk3GDtgY1HFBLz6NkL6xE5rLDZq6m9koKWKnN9hiYEzL7Mi",
  "key6": "B56vXufjqwLWEVxe3vvNReN2vTqnEDWz2xE3eAgTU8bR2vDZGtxs6ePSXrvCHMhMa9Zu4PXeek8VkSckehvAnMH",
  "key7": "5RjwJfr3tzJdwKFMPbCrZCiarBG9VDD9R4bEeHXhm8bzHo6Z48DbqH98mYkPTePHpGkp7SHu3jKiniMDhzT8BPZs",
  "key8": "3EGcxJRNtHzjz64AZDfGTyq2DRaBQ6Kp79WZFwNFCAcPKv4YgpxGBp3kkmWeZjp8KxgPUfjLarmtWwBhHNFx8MzY",
  "key9": "2zeQaEYPBd3XUMe4Ky8ecCEHKHTkGjBsVq9PuUgn1ks1epRNatzSqfPmrtfSiyrRfK89SxH2jrbMLS8kTnRxhCsi",
  "key10": "3Kyo1PozxPaSQ8QgYna9yPhijdkCBxvTNGBrBQZi2yakD3p8GxWu38ewQXEDHwcf9xc9tasxMTteobNKS5WjfuP",
  "key11": "3pG7YH8inSyrDky2EfgBnA13H9oHoezHnAbnfZamW8yjMjwiMDCh3f1A4tcrLMdMFjfgRHBFcna8At5SxLyFX6Y7",
  "key12": "2QuzzMBZWUD3jV2upaWnSgwZTZYauurZstEZKPi7UvVNneBwF2VGDZvbJhNTe8PcREWedJ3qFJ2EXA1QkgkTMQ5S",
  "key13": "5VsjHUQ4X4cCd5m2Lud5VhhVhCdGYTCgnuBvgr1yZD6SzrHqPsyHpCv5hbukLcrF14MTv9sYvnvSp9QNnR58sWSu",
  "key14": "ETGZrspZhg1kEVCgKkm6pC3AVT8qyZ57TwMiwXmU3WeQNujVsCZqfZMV895CUGV5dkLLgwXDwuBnaYExt5VNmWK",
  "key15": "5Tf8VZs8qodDd7ZYgMD97pG3sF8C6Pf7RYKUdXnEu6NCPhdMHvnQWyaydGtf55yxdUQUJVDf1zVHffTQazMzRvWQ",
  "key16": "5RQNmjJ95oyDsh8kWygcE44EtAPfHYS4fPd2FWSXiLaw8g4VMwsfZN4cEPSZKShHTroSNQkUg5CeF9DcT9puWmnX",
  "key17": "2TWB3KYVzDg2LUAZ9AspkadnQeka3A58eWjCiL2KKK6bAinMyNuAM7SmcHxNyimevfwr4Z2APTiLNHQMQw6s2HQy",
  "key18": "46T8B444GzYfJBUzt7nTVUKjtFbceu2d1hwjAaJgiXdggijeGKWLruaYzDT8oyV7mdKsmjTGMAKZzUsn8qRHCa4d",
  "key19": "2HkhgZ8GdNnew5hiGXPe5YGPAJUyrrVydTZPC39zqA9gVf4yZ9xnGe96jpH4ZTm1B1YcDACoBTp3918zM7CV8Krd",
  "key20": "3wEerYvNuAHmaxa9kQgvZuoG8GRN2HnURuxzBk8sZRMEfX4k4Q5nC4gpB1coz6hsrfAtwbbifMJW4o9SHiFTGm6K",
  "key21": "2kTjst5DJnMvJrZEcv9WGMRfpDRTjvrSMPdKjHLzZSPUgvKxeJKNvxPicFPv29HvxL4cbvY1X9F2SSQs4YF15p3Z",
  "key22": "3MAotr85bebfREjGLRWdwDSfsb5kPJUnUWiQvm2gboaBGdyhHJYsrMxhXBZGrToaFiAytbvaApAZT4mAzsxHh9y3",
  "key23": "4M5pWDYxsVmRKn9WjcWSFv3p1t3K4k3PuCoVD3fsmuMqeLXC9C16QPp4bjxS7fV1JvA6dGnSd3su9Vz6f73DzBbr",
  "key24": "5TTtwCLQWzZFVcBpQC9Nmkxscab6SJ213aoX8kQj76cVhYZdHjk6iPLrtunTvDCcLytoNMpjJhtAtC8YAZud93qa",
  "key25": "658DUfj7sbw5vxFKSjsVE7KGp7Gs1ajY8FxUuU1FouS91V584VJ9cAkAhcANWEKchwqECEuSwCuFFp8UhgD3pVAG",
  "key26": "4F6AamNAz46bHjZ75eFEWhvKYb5zsfU4wwgvGH9kReoHzmdoMvaPYtDh1SGUGyWDqkRVGMQ8HrKsHPcnreMu634T",
  "key27": "3QvL2SpHsTpEKtv1NU4BQzkmXzYdV9jZBTAWMh6DEASdv6ikPt48DEHCyN5YokyBTvC1HGr9X3yTyxMyihRr1EXG",
  "key28": "3HPEJkJ2vf9fBFnsbYSdwVZ6yj1suNgEGZCjNypFWoLSY3ZrRQszwUAHztpCpZsSnqx2nPpZzJCrhQ6Q4o3yxfnd",
  "key29": "3xQbby7b1EkpYw4ZRiuJfGpjyeVaDEV2cZi8GojwoBJDc4auvMoEyne5pz62cuPnEJG4LCzvGTXfF7hZsdmMHckJ",
  "key30": "3iLcfXZeTTc9TbASz6nU3RB78JuYyGcaaJB2cPDzJRoqAZCEDzJiHZABSBLZEs2Hz5eoGxoRjkLUt5Xn92Qc9hxf",
  "key31": "5xyD8UNYkeD33ntm8b4C5yenLjREcgZ6DVhNLGwJfpUxc9wea1ecpmjggWotNp6t1GDgZ2aBiXVbLiYu6wPsxo57",
  "key32": "2Rb9wYgasFP3zRkf9WpLXBD5jZpHvQ4rwWd9rE7w2AcYZj193vrzrDUQy53srV789spX4eg34FaGn92WB9oTduFw",
  "key33": "9vD1zFKNdwDEJPiCN3vzhaB4dt8QswAqWLpVE7iSAvP1jTQ7PY6A5p7dYJRumpG8qCh3UE1sEmiViECkp41sjUq",
  "key34": "yrWxJNbdjBgKfhvAFfNR7XLEtHnQhrkAmfv6DLhUcPBLsw7oPYZuji5nuEWJfFy1SvffwnA9TDtfxyNW5NXFs4d",
  "key35": "57owh9J2zKTpTonFipGG1Lqg6deyxjHd6wSLMnmg4paBR463s38Nc6QXg8ANn8jaJbjonkdQZeTosZ3ZdGHYb2Pq",
  "key36": "3NbtzhAfKFH1QZKobB6vzKLj1UhHjFDfvTEoVZoKvhUXFRXuwF2bwvjcpavj8irDefMaXXT8fwu1ohUo2ujTQvxr",
  "key37": "5PCbjCUfwmHd8F9s2r7tnfoWrmTaaMxcQzaU7GtYpT21mQe5MuNn5J8jE5vXxf7wkvqyNXM8q6BttinqPRi2e5tQ",
  "key38": "tsgyq2zgpR44YCNh9qSqHr9iYDxkscyxYa9WGPXtR8dX7paFvGtsmah2fEbUqyjW7QzsndaP1abhXe7Gf7D55az",
  "key39": "3cCn3AhjhVED7SeAXSrwUAPw7wyneMTBRBKRtV6e9qVR7NT59ZX16sEWoW6d6BkKQnDKBLnrVhrX2hVS8czikAH5",
  "key40": "2MpnHhswthevmLZGxnV5T32mT7UQsxfoeXDMRjXe4frh8BFtXdm5ZboDcgX5cSvuGLLAgWoSgCdji8AG2TPczNu4",
  "key41": "5QvAcJihFCvmCKPMqLeSa1n1nTj5N4UkpGbRjtyoEaNojh2bfKfVyKZrk7NGP9TrqUcA1vPh7UBzdrpmKfhsWVnr",
  "key42": "4HQRps69Gd4zt4qDgK1SHG2LvtcSEbxSfAKkKwKg8Fg8FY9PUNc9QSVwHGEToGGfWithuXLFHkdwUwMYyLfnSpoC",
  "key43": "2F84ZgFfZnMLs4gv5y9ubrkVSnmCkw4y7P3apBHM6aPQumnRTyCN35qEmZ9Y8cRmzJm1xJPNkTAoazh86XcNcFfe",
  "key44": "4QmUB1SuTm7EwPyjmQvDDxDyXfAikqqoNHsk8HT5XMnUJP7TaECGhYTu2EXWNHRxyhzNN27Yatc1uEE6usLsiZGV",
  "key45": "21LgCqAcnvFKacdGkeNjCiSGDWKh2nHhdrLaA9uBstC57iXY4GvbREnShYgmx9jBvY9Dw8MrymVZTMADmJtqzxcF",
  "key46": "WwBMVCDXe32rbQeSBawoQyZ7gRBn1m2HUaGgfUrAUUQjHidp511tVpWhkEBd7y7TJaXNMT9YgssKoR8n8CWx6nV",
  "key47": "4XRKot7FRsa5UAk7CwqMGv19sfdqKFW9uRjWKGHaKyaMMuxGrZj7YpUhEn7Msxq8CP6TRWbsitH1Qe4cHMSgqLzV",
  "key48": "482X2SsJA1ZBvSgs3ucHyR4QA8rkF3irgHepjgu99TNHsEafL2sFEg5czeo68xAt5vdZinb1PQ2uLbDVcwMmhakT"
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
