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
    "5LJJVMajgsuD6iP54PdJebm6HssW5pAbrgW56FzYZz3Ls5QUnsgAkUWXPRkVSDxK25PKAhpBufmpMScNVocdZN6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZQTzYKvaJiGiUFgmR4vWvY2osLxV8FfaVNFQBovQZPEwJBZXxnFrwj52BhBCCLKgQSF8kRF7r9cmEcxrt2dPXa7",
  "key1": "23SBLAKy5SUHVCkD7dRqPGmQZJS5XmPx32LEhq49ZmYuif7fwA6eosJVVLbu8C4dYXzbp888A1Ur4ENGWz56xWzF",
  "key2": "47ydW1rURZfu3TJRMvmLKtwHCnaSfKV99r49xbpcYviFMhgwWy5wgeYZHgRMdaPg7RtzZCkXsAuJMXLVkSsyvsG6",
  "key3": "3JhNW76AFD17MgX5kuayg4vCJByyGdvaXJmqJWVXZTncumUr3b34yoSU9d9kLfxFVgFquAEMSTmS2pG1yAi66BAm",
  "key4": "4r6BAvtAS6F5LCZMoEVALFseZKJ454SHuMqPXwsZaJG7uT8rdKxyYQWNr5NSuHPVAtdwyXHR9dUtzzNx3qCasy21",
  "key5": "2rQkHLJ3LURWjEt3Rj72CXYTbug6hDXpQYwpJVUSu8hStx2n2jZPoKhNmze6jJQeZ3s3FJNseBTVUAB4nTGxBBq8",
  "key6": "mkwjxnmREqJBG8c5ztjX9566ADr6NihHNr5biYHbchwQGXPpMdMHKo7M6Ut47TFK5uqiBk6roUso9C6iCpF5fWR",
  "key7": "2487kLjNMUVY4rFKwmD4Fu2jaDL3rALejqqBL4tZNnPA5ZupiV3T6m5meaKWUsFKLqzuatWq21JMvcYaT75CYqn4",
  "key8": "5h24NEGSVoehCR91fqFroHNGVR7gRZk5gSngjDntAoT4Be4yNNMibJ8fZPtuLBuVW493spyLpetA4zvkSqG3oZnp",
  "key9": "5rD4LKM9RwhX41aWwtuwpk5JRZRqxmM634c3yuv9gmcswkpEbqvN1xEqAwGLTDSQoZw2LbTGgKaazhMvBcstrjVj",
  "key10": "rqHrANkukeyxx4NcGmByHbNkDb2P3TbyB4E9kuC2t2zKsfDmeLC5UBqDg3eMFNj5V2GSGu8o6dT8ty2qvCcdGiW",
  "key11": "2cPcdbQBJwTkRKr4jcTbVmkH264uqZNTkz1m9q9XTLJz3vbVjVYxCnPf8KpgaS7qa4aru5s35qoRmFP7JwbSJgz2",
  "key12": "WtRV4id6FTzizSQLYnYrGd3VZD2avrcdvtPGfpSHaSE1k6Sjg2bAGCSt49SZZ7iRvRqkBs8dr6gk78CqhGiPofH",
  "key13": "3CWqs1VW6wY111ANGxLofTH7iZ38kVo94yXUKLkq5zE5ewjfKs5TJMCTpLxnbttq7LRuszsTeuRr2cLCn17b69JG",
  "key14": "4W8L3zFuSX58yLEJqkrEfkAZabMYVVATW79j7nk7821LWi9GkfPqA1rsaCa9rn9sQQ1HYByJrmoqeXXMtbyvercs",
  "key15": "2PV3NLrFq7evSESdexAV4QXwvnD5PvNZv3mfjNqvHXGjSuPWo1G9CYQPN9ohMTPHcna13vEZRtWNNfTXNm65UbUP",
  "key16": "TcX3dzGTNDe7B9EiJPf7Vg8WLpM5MeQGYV2gFoWp83s7Wokrs72HkSys8PcDb29ykKHwNwocbAYW3AFPVr24WmP",
  "key17": "4STXjbLPpguo4Z14x1MwKpBnbEWoM9LxYSvMZXibX6JirypZhwSLPXKJ4DYB4CvhznQoXwfdqHrP1GjP3B1n2azN",
  "key18": "2o4G7UJB1oBhnemi6sfzK342yNvwN42zEzai2JfdxWvxiydyRE8iRKPs6oXgrAg5mqT1g8tF1FpXUknBuPqnwe5L",
  "key19": "4b1RAuuTYcV3qbbSPkVNU7aYgyAK7Wba5tDcTpnFo9ytyA9rshsG55wCjkas8yV1jd6sncoN226e4PXe64Uuh6wt",
  "key20": "5FaYAg3q8hCW9MNbTTwppj6do5UWHs8BYjVG98ywbj8CT3aQWyBsz6uNbC3WnwWCb3R41CLcRdQ26a6wWDfXB3tT",
  "key21": "nsaxxsKzC9zqdAv6ZetfNm9gPVQYBptSCg9BwxmCFSZtbeeHcL6sxUGVK3CJH1aEsvJx3Y3UMTsTLGRiV71Xmc3",
  "key22": "5aK1VHStqcapD9mGwicSMjMnDbSMwfvS4zHunXqUa7ox846JpNXVD8EsUFdry8qkXLhzuk3qjEPoZpDsE7ZDn2cP",
  "key23": "2w22eWuWYwPTLrb9d4AGPd1YkGGn77XM5vZ1BRMdrD6prPq2yM2hNTXUt2QDp3EvMTijm87hewVsHJrr9XvzdJ8W",
  "key24": "2DA1LX4DCuxf1uwHMjkXnL3392JfpaTHtB4qE9qUyFwMrcNFCogrttVocUfsWjrugWoS4jtjjTRk8JaiAw81PQ1f",
  "key25": "4PgjnK4iXQ3Ma3xUPd6bQZ3xPjQW6Mr3FiPMtKvXC8QusChmDE16RZR9PSMg8P3getzW8SGbT1JWvsSZ7Nc2Amt1",
  "key26": "47P4TrE93DGW9S5vAVofpPD6foyBdbqqbsRg78duYcXPJdyras55v26LzJXQsUSk1Qb4NVSsLxcwtJFZxjFxSfWn",
  "key27": "4F3dav9kNdqjUem876dwFRowAD4WcxufDBELRQ7zYA4HzDMSQiUFqHRzX5HEeAGT9ZQn3nV8ojWSjFtxpTp2PRE1",
  "key28": "5BVJUHadw31EzL92pWL3aPYmG3KwJjMFS8jXJAgK6pXTVQCruqvHqhch3oLXZYzAFGerGWyu2fNLUzRiNcoyU54z",
  "key29": "4j9znFQ5LMZwkn6rPshyYfcHWLDFvzFdKzvSAy7qiwSHm8hR3eu3SLWVGyBVpkV3TkX59cgguHKFnvLEQDSqFVA1",
  "key30": "5EiH4FfpM2KPswQa5qRtPadWr9x11KkWV9FXhdvyb8TqeoMJfPwN6WXb2RWVsiGUR7yQXv7raveBN86HTnQ4pTZe",
  "key31": "53vGjjNwubgXbAy8GuHqY2r7PMhE3faw4YhNiCjViU7BVGnynraNSb3N7o75Vr36tx16epnDagXyNEyjU9tevDX3",
  "key32": "2QiytReuiRCt4ANYAosbrWdaWvWCMJvEExWw6WB2U8XLYRzrUJyVmyq5vEyHAqKSVZfgccfoEg3JCXvygivyTfuM",
  "key33": "6NWhtGVLdM1GDv6TCZqq4pJcwdLEStudyssyBVMmNpU2ujsYj7z6n3gE8GBLBE5557SW1i5rekVA2op2pUfYL3i",
  "key34": "5tSyQEbZHtQkdAnJnk2EQgAYUyiyhmAPsuq1KWs66dN7f6zMKYTkYyA9ew4hcYEEDyfU1dZtr5DqBkkfcySUdq2R",
  "key35": "6iiZzwnmgTpMGdqYHswbYLv5ggqv3CdwNSXGX8iKb93EpMU8csC3QCCFznGfakfZgY4hpFtHE9ydwqJCaDFmqq1",
  "key36": "5cPc9LexW7sujqcE74Qd8r5kyJrXRJK7VpM2LbYo66pKutsirCNXLQVD3UUuJr2VCUuEgsoghzeNgV4ij6FyAtCj"
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
