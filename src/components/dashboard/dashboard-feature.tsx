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
    "4DB9yJ1qwi33NJGnexYQzq9rBbr2zEtx46ZxZ8NfDyZnFY9DQVWoSTiZUi8yVdPEsuFVuVzFFMuJhDADme6VTzjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tYh32t8n2VFnRDEViDVwGJKkHyUgckqSML4cdwjKM5RWwJkTz9uhDeoRYTGTXLSwgpkp4hnqnjUgWoNNLJKVZFS",
  "key1": "GVB8mniUnF8p9p63o2mNiPvVjjZ4yKaQTPYo1mBKyEt8cx27Rr7zUuFv7M7DHyq3j5th5xJw39ArhLfFmJkHWsP",
  "key2": "4A2dA4vzuGSZgXAnzoo9ZwFoYmbXvFdLuHuF2WTartJvStjamWuBsG49KNEAQEi1hxJc8YTJggEV8Hm8hTLSKtdL",
  "key3": "5XYgTH4eBpm6mDCDJLSpKVWv8yEx9ZZY72H8CvA7cnt1HFxF8iG4ui3NFsdGTKFQyAJiS2sUvbQQehbsQmXCHURQ",
  "key4": "367CoGHDbESirhtUKuD9s5rvQenqEAmLLg4Rg1xU8gnbXdPDc4ZUGMGNAQ5GyU8RDhQ8sM714popSASV4rFAVbNB",
  "key5": "5PnwtcdTTMKbR84vB6THQ9zLupJuERPFnUWMFhZ2fG7bxbhS8axh2znTG94kGdtiohtPUDR3JY9vYDVqWtCrJrnJ",
  "key6": "3dGgtkRbBmWX7A3MHGHarrxY84V63QzMjuHHaiddqzZnBeHkXEdY1Aj52Jv7bano6ib41hGMfsizyGnaF9WCFsKZ",
  "key7": "5UrsZjh7jxMPe5LYyCQiUX4RBWaVb8at3KdDfLj79RFULzkndStsFA7qKcoqpkUhXF45Qtf6sXLpMnT6KbtWs8Ud",
  "key8": "5jGgWpfTqzqzNhrLax7vosVs3jecHWoz5G3mVkbrUCG3WHDrh1MZqoPYLx6a5f9JCLyLtaKracTJHq4e5KorpvoM",
  "key9": "2pAwLo57mapzvxarHGdsCTNLYsWAfPARAVTz7ffx5afCoVp8PPFe6bVCrVvscuVHKGK6WYoN3Yho542brDG83tTY",
  "key10": "BqFETbTwBdu87qE9K4cjmnZ5MK548bD2oruDHfCorCcUQqcEsdWc9TLzST8e6KD7nKPBtRC9NCmCnaADGTpVHxo",
  "key11": "2iwbAXUb3sVEsfuNDL8RvWfoNRGgo5N7M4bxSG1GCtvkvuFaz6siyMqTDEwUELA2edhDoEsytoRoYrKVw3ZSprPA",
  "key12": "49YrKKxiabrywn2mQz5CzgnDGjPZcT9jh9ZhjMEd6gj1ZGMPtJhmgdEKYGXJmYLSTC9bQfDFH5pXBdhGJM2xYwUC",
  "key13": "5XUTSB1UdAAEDFnCbGQoySchX9ukLtDCMWWjL2NsqrE61aix9KWi9Q6jMoyvZXcQroq1SS1ifJQj86r9K125dyjn",
  "key14": "5VmG4VDWXqrviNBo1DJWLrDTjgMQJ9WCeqs7idAhbVJQpMZpGKnZt69NV8WjBXTtBRbikiNdmmzejtig7gzjdeY4",
  "key15": "51ABaC8jwdVMVVtZ8juLDJV5zc4Sr2m6TyLG5YpMjDxoHHeFpbA3Z7p3xvp7BCnZWiQM35rcD5C9BLcryRsHqpjp",
  "key16": "5JhcfbPie3eTPhjzBmG1Ucc2qKSuf2rXa2WDtLE3sTAvpPTDtMJKnt6VSrrowiohh2e8DQa4yA8LB4mBBHemkXXg",
  "key17": "ziEoE1j4ty8rgWZjE2Y9mwGMoJNbXihxbGrgCLFZDuCBYnQzsmhU23K52gS2tJfoDnqQm6fcgvPnq8ijUDk6vnN",
  "key18": "QKawn4BhPro5GZUwy5bPjV8jFzUdhBP86QEBKaNHjSNExVfyjCKhw46ymxdSzWqQn5eM35zVTcmzW3GgQEqT5by",
  "key19": "41j73qBzRBSAobA3VzdkTeqUNwLzmiyXmtT3GcfxfTXuWDqKHmyQMHJhfaYkDjHfMLMC8aBQ4CofPNHVJnhp6zGk",
  "key20": "5fVRbSQvxvjZMNaCECUAgir3xUetCRSwr3X7HP4gd2SQQZLTkrKkyJddyDo8Lovx2e36VwXVKu1nLJJNR97qqo53",
  "key21": "23jQUPT7zznKd51oheM5xX3KfcCrie4wG3mr4vgsEyuWVbbFTSgiBAvK9fQzpF73JmKU8VEHxuv6aexMSrtyu87J",
  "key22": "3Nsc9M7WjejN9djiyxUKF6hKsFhpJ3Z64FzCF8Hp8zesSBFU6smNPTfsXPvTVU96SJ7n8hfmZREp4B8nxdtgbH9",
  "key23": "5rt6uMemDSxsyWBPBybSLarZbfTJuLky5zgTGBo4YCaNH7jG2QSWZdHc2shvSb4AA1y5R8SjkUtffDLmsg3LhAiM",
  "key24": "5WogTTFrFCrfdBcpYiCsMEnRbC7GaWK46ysizGWHGfqe7mBWYp2EWhxkezZkehDdY5AZKmQ4AufbDsrp1kvBNMFd",
  "key25": "5JZcqAhZPR3EBut42y1onmVmJsPhMowycy3VQnFySYhc8Ab9vrjC7ttTbFh6NxjkYSw1cpugpxG6roNC5J8E9aAf",
  "key26": "2LxrvNg5pbdJvXjyuQcos4PLevwDesnS3HWV92CuRFrAzBwewUppnZvW9obBiYhYXXuRY3o62wykXDSaeN3j735o",
  "key27": "3HHwnAmUn9XVnkCUnSF3ccaWRnSSzXnvDzXGgA2rX9kmhofS2UjdHw5ScjwAjn5BXW8HVUFFaYqEv6fdyZiVqAFC",
  "key28": "55ihBRzaN33xrBqmLuKC1dp2LYnm7RuNqn8bTYAC2R1k3ui13HBXiCUjksM6TGQWSq36f3N4FWTip3bPZjW3Vj4a",
  "key29": "66R1PkDGMU3kXfUQ1EZrh8tW9tE8Kq1iWjhXhf2NzRST6Q7gqANxaiDWrHUUSWZuXpDuxQft92ZbNvABsAKHnNto",
  "key30": "oTQ7cy8Nr9YC5aoczxBECdG4Q2ub4F7zVuWRTLo7ovBHgTaJa3NwTgbQ1xsP4vLfAMdsqxj1ufMuFtcgvWyhGpf",
  "key31": "KWL5CQjvzaVpC6WfyZEhABmvBhAQ46jJ7KxKR6ZDnrAoYGJ97MBNAyE3KQkwXzS9gggVYsJnZ5MrPSD9Cm65JUe",
  "key32": "65if4Y9etKG2wyuwxK9WAQoyUfNduwLtJe9oY3mEfsX3FrwpFCFYmzNSogkZ8uRsxfa3UrVjBofZagbxjBP9pWKy",
  "key33": "4FFPoKfxbuGyCwdjy544PbSReieNAb3Frp25ReKwTu1BaBiLcD5dqwpTY55YDnvK2EpSy45bv1euzar5Q4eAs6VK",
  "key34": "2S3JGjXZ3VHVtffxTM93ejSC56AMY2unKAHMoQMCvVbpBvMEtRt4Y7UzGsbc61Yw2rwoeqVEprbUo52QB6MAQzch",
  "key35": "4gC4k37wrXa6xdrNvSJ3JsaekEesCV9w6YneFNWXoJPX7PqG9pQWMVmBmhufxHnJL7Nw94T5q2eQGTDsBihHvQHH",
  "key36": "dJGjvie1xkjBZzc4JukVTfcciMygJ7H47ntNrvS6ci3bu8Tp789ZnGS9iwH2bb7unsfcJ9osds6MSRLwLLL7x1A",
  "key37": "2fWXxJNWd18yqaM1RdwQ2s8JKqs4NZ9RuQWApxQ7wmAo7moyme7z1adFpHueSwzSimbcRq1qGN5kAaMA6eFD88ur",
  "key38": "2tVfRYiTk4Kpo1jhacnA6TFusKWAGSuyb6kuEPWebBRyAbgbzd9wHDYQJ6A7WhWwd6HstRALyT9Qx3PmfrKiAEV7",
  "key39": "5X4qzyevZBVPkkLM5n4EjMrqDMrNxArJjc3sAMcXUtnQRFAGiuHRNdV7pGunU6unCRAXQkDbeFko7WnRkbTBHM4Z",
  "key40": "5zznA9JhgtUdjuHEKc7dsR6TeSDSkKJsRZvfTsXjhEfMn2QQ4UAhdg8BnDYYuhBFKZ5gSzhjYMVugmjNNFYQc3Wu",
  "key41": "4WmRBYec7UZvazGJgFt7QLtmYJ1mMCk7Yfk6WWrAUYBcRi1kbzfarPsMjoBkP2YYmSTLmUt4KVFpJV7SUpYeRudA",
  "key42": "5YhKshu8iauxyGEHN17geadpenH93M9uUJE5JBZ9UyiA4QQJrtMCuz1MKew6DkfsqU4BQFRpZyCKU7R6kyJo5JkW",
  "key43": "2MpPagFNwrzmdv6acaBn866Y21WmkdhWpWMPGcybnhrZaE59xt5ui1KE2fxMz1NKXbk9726Yp894JHNiNLPo7Esc",
  "key44": "5vHbvxyGBno9kuZsZME2igaspNFNeG9MnbYVhSCTwCHH4ng8BjcLtw8Qh8JchnH37TsSd79V2vUV5zWj1xdDC6ZM"
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
