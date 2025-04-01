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
    "5bYzXPoHEDruMxhPMxqpfegK6b2QihaoDMnKcjdwKMSpuYd4wbER3xtSnUcVGZqNQ7voyTWp4jns9oyg4Cf7b2sr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tBv1opFJJPzLvs2utjBXhBoR3qJm1LSTyGMp1B3h3bJ9ndn72QZj7JdFM2q4cL39i75bpCF5B8jHF4v2es67Fm4",
  "key1": "5znU5Th6B5JweFLWJZtRfHsWqXb5eA1GPfpGeNB8hJvgY2gYNcBoKxpioWH9xguns5LyyFFy274crf6bfpam3AZq",
  "key2": "5zmin1ZWUYPadALgsJM9bh2PVDfXrJ4XTckZ5xuqXY6xwL78j3ks6e7YBmFnu4WGfgTgqjf32yGp3BFbfvcnGFk9",
  "key3": "5JE1jH65swgUYe8TDCkjfxzTTTgTcAowqBjbUg2ff3j2Kt28a29XT7Le24Agm7JEkmePT3E3aQX1GjbTDxdKf3ZU",
  "key4": "5PoxF8Dgf8VBMsWN2Grw9HwiAiLVSxCJ44zZTfJHP9j2kTQUBJESnMN5EkZrE2VrJHzddGrZ58SbimTquTC2z5jC",
  "key5": "2jhfBv5bCd4zEmQCGEKGcAAfKkfNY2AqygynrDNJdWFHiJcMjCts8hCr6YXBoRbedtZJVvqLbZdLNAfWVU2xj5GE",
  "key6": "4mtrhDe8WhA4m2H21ksN9WcuY9zX3h9VibgY228YwDNPPM6Mzg6xJFFyhxhqMi5FxQFaCXhVCdMKAV3MwMpdHut",
  "key7": "38QLNKKRQzzKR82XpiS9fp33xB8ZnRbvKiszxk5xEv1DaPcM8spF6emwco4R62cCRevtycV2TfL5pystsyV3c3uT",
  "key8": "4yEgC6f8nfverSZoJseMtVuWxiG1G9x7RRaB9BCjvfdpsLWbfJSoQdfhaHBViDHXEmm1sH278TrY6PEkVRz8mcHK",
  "key9": "3ip3XM69QvYjxREjHdFu9g7SAgwVxoXYdNTiZDieq8JoffhsaUg62kkrVDDv3Guf5Jr4pgsP5Toa9w57pzgYweJh",
  "key10": "5R8T223BwwNxo87FdPaTfjiuXkvTD9K6fkgNS1cASRCKHQreM1BJ6FkTfYDgWD7sXaj93CUKqUAoAqWs4yizuCpZ",
  "key11": "36TSorFrSwmp7kbntyZzm7EMomZCQtcRsjywYfc8AtEBs91Y58TjjG3PpFGxatjS1PumZjR8KZ4bCxnX6tArpocm",
  "key12": "5WKZaJUWagbGWHsRZMdxfcpwvhu7WcL6nz8n7KEHWLAYxczuGPFs2JKzRPwDzf1msgkMM6PDDaZapCe3Z4jhkQSt",
  "key13": "2uJpGcQvgdkHqinCnuvcnkM4tEPTANmgmJgrJ6KmqFsgrZNGKLypwnMb8177mvskPntQtfVpc4tnBaqv2LKmufZj",
  "key14": "5awyvDhArJbkMh6d8cbc2iTDu5212R9MRBB5F2mWZjGe68uuc2obj8DSDxpa8FoukLCy5yw9q47bSkqzJspHi9rp",
  "key15": "4sHBR8zAKKQ2dXfn22nLBjLm8PQfcJdudYUTF3M2qG9sSVE2UFVMucu5raVemzqst4dvtKAzLK3h61aMXjLZKGmY",
  "key16": "32EgLVNKXArm3zZzaNj2o6ippJr1T3jTr2db2EcHauFohVw1kgJgcfjLd5nYV3nP2VNTFh9Gs2BUPY7hQneEJAGY",
  "key17": "5nVEqTN41RzaRpneFRf18uyo9npNvVa5uySKxNJ8CTbTGPmG4jKcPzgeyomnLW6AxTGJ7AMf9vVh5Hb6BRvz9FdR",
  "key18": "6qBSaBAmVakn4tvxi8oe3EvEvA1YzRyDN8pqJ4kwV1VoxgKLkxj3y4VKKAk1bkJUkn5Lypu42QxV7ss3xBZJYmF",
  "key19": "2SkzSZhw9u9j3jtqWcDxDhmMRVkHeTtPnikY1ReZTNgSy5DJ37VQaX2CiEFNUyVXM1uGzrXVcB3bvx6rDjanx61x",
  "key20": "5ehuWuE94yAPYkZvrN8xdxk32rsvg6ZrasxY64jfSBLqDXjstwoGQMd2ziTGaCAc5LddcWuTbcUTFwSj2fUvwEec",
  "key21": "5YQmPwJfFVTCX2ih998SwR2uBo8KQWGpqCtS9nwrD7CwQ1soLMeZeLK6FRX62L8fzh9aMEoz9TnigLKHnwx9nAyK",
  "key22": "4M7Xj7Sskwkmj8f9UFoyyp4szB1XEbuiMmF5P5En8EJzMVGPR4pGsKDnmya2DftUmyg9LGDjwKVgMZYgn3CtDjUV",
  "key23": "JbSM7kYr6Ug1i9FmTtXULaknQRkFt6WTcaCBXhMkMogBAgky3GJmF5NnhK34NB5mmXzWMJrbAjNvNZHn8VkXQVg",
  "key24": "5NqEnijqUfQuhbq1dWExfV1Cc3AaFqyT8UwtmNPNp73v1GvKXY4KdzzwpJoFJBWZbXVh7fkF1zgHNbLaPPtJFpvS",
  "key25": "2XrGRDgvMVisd6yEBooJoLCTS1RU11Co7yxVme7pyoq9EAooEr2dnwufiZDc5VTLCPUGEPvN95dcrvNAHN9AEZ2f",
  "key26": "51M7nM44zG4uAc4e4fFnKheohaU82NWsqLeUNrNq4zS89tcFRB1sqaAJ99rxeiUvZPMda8CGu2V2wuhEj1q4HppH",
  "key27": "2P2gsQqwckzXJuZSxucwqF8kd1QQMQVh1gN3csr9zvj8vivq5KmFYDQNxq8PAscqxobuktUst6keLfAFdiZkGHRg",
  "key28": "AwXP3KqtAjPdFAR89a8N13D8gk8SB4DKkr6uBRyjxv1EiVCE3sfVdyNfWdcJnUZsQMqaq2RbGbjnnAwRxUPQEnx",
  "key29": "v6wCfCEQhjvbNwCYqYtNCv7XrSNqBwimyF1iajp9S3Q1kydt98mzcnr2HreRRHTefMWdrrLMz7dMH5h6jaUwrra",
  "key30": "2oR5YrV1d9vEufcmr4zKfFx2ayyCSWPNPfJvy5k8rExzmBVfqX5vTZfY7FQMoGdvzc6KtKjboeSvN2duZZUSYmR8",
  "key31": "FJmXfCyBeSh5KJJbB2otoh3g7WH7NyQmdRiiEJLDw7jYcQB6A1CuKXtarpjB68PtiRY8WbZ484CLfQuheVzJcBk",
  "key32": "4Uhbb4pGJDgTmqPkzdYbJbH2E2hXjr4udt6EWVwyw36fdkpcvymdrNn6x9r1BzM8457d1UtXqnD7UguAzcnht4E7",
  "key33": "3cxK83JYMEDxPEKtCyC5DDp7PaBw2u7PUay5bcY2auhXpZwLtZRwoAGfLep1BuFDFGWWShiKwM6eh5gMF7rTUYZT",
  "key34": "3VbeGRJ62X8sUGaTXiSk9Lm9neUBbmTNtphH56WCCy2dRRmxj8v2QnUHateJrA6TNcAnNbjSHF6GjbrTVUt59tLC",
  "key35": "9f5L1HxW5y8GxQF9zgAV3pLTfWfCsVtgLwuHytowy6xqpamt2oPRPxSCxCDbDsd69uWRMRa2idTf5mG7CivKD9m",
  "key36": "3z5o6aR8DHixZTAm8hcvxUBpizZDv3KaypXWHciJ329TFGPcQJ4XbhZ55NS7rSjR1EVtqYMxeUhPMVxV3AhA9uz3",
  "key37": "3tcGA5b2QE4GwwYxvCEyvCAdMgnAyjgkCJ1GyrMSR8y5kx2sS2wWPKhQXN8u7dwby7Z8PrShYnHkHW9E7KTDpeig",
  "key38": "3QetNTucY7jLaMwWNABn7p8L56vx2vGMDtShHFCbF9DQDRCfqv9ncAGWyxMTPhFG8n6HieW3ENPXcsavcRQ1gsTc",
  "key39": "yaxWeveMc9it9MXNannSkF1q7YAEV4E3jtMYin1hR5zQq634YreC3qxgfAv2wsZh9P5UuXzKEWpUbBGB8u4XSiw",
  "key40": "DmEMMuvFDd9CqrfEGVbny2gNF9DPvSSKZCmpviYziXKVk6Auq9tHGvvGiDsqdeK8qEftpNYVc4msz6Q2SUha1L6",
  "key41": "SaoVRxAm1cuUkvaS5aYgjccxSikR9YdFPmFUvzmnAoLNkunTbJXrtqhBPkFS81eZxbpr8b37sjLnFAZKVsniE5F",
  "key42": "3hM263FAE8Mg3manDFDr964v6wFbHyfWULsdKoz3kY6cqsyTqD1Z8NMB83E99VQmyw2Yp1fvWfznSW31oi6nPtiF",
  "key43": "4ywcsTX3C6sqQx1cieMrs6TxC2tgVKEPbUszb4WBoPzDasDXimSLq4L8RKdBztYqb1rRUfVEo2W3ApL2e8tn95Fg",
  "key44": "674SxeMZU71QH3HPutsawWkP5Lxateai6s9BnGmiVaykxYe4jDDWTvLMXYQhpfQKE6HVmfDvcEzQs2iYByKrxd2g",
  "key45": "kLdKB87DquMTzq3WbrFGSFVPwD3Us45KQEQFSRmwNHLWf8jjAbvLjDvpyHgxbg4h5SPGzgMQSZkeDsUzXa31NXp",
  "key46": "2dA1qeTSx6JmiVGXGg5pPYbo5y9dmW9KyBZiwUGwJJvsXa1bvouqYjtoPebKCkrgSerZpuNkCuGD6iPt8vbn8Dqn",
  "key47": "2b2Zj3ksk33uhe3pms8M6V6otAHV5TCDh442LAETLSBoqPTPiTLXeiyVuMJaCV9rwzSreMA9DQpiar1x42au8BVU",
  "key48": "gg8XqKEhjftnrTT3q1uCFHhoQz2cm2teA6L8mqu6duUKJfV2ED2LbfqP9FqJYj3sBjvaHoUDci7aPt9qQWP1LMt"
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
