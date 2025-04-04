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
    "3ouGytJitt7hJVMMKZY7MAobEdgd7Nn2vCLbrG1SJpM4aVtHs9cCo4zCsbbn3ZAGsbxBxJBeQxASQE1Kq27JBCkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Aj2GrB9J8bC39wNhAwLmWKqLA6Mgi7XqMrYU3FscA3v41qbeZgSg5fNFjg3aeZKs3qtRmBE87MSqtgyaonmi8K",
  "key1": "2hu68GyRAn1PU3Sy1dtPbtbjaZBmENuW9ijariu3KsbgeRZReMZNRYYF2iW3sav2sMqo3fFHiNVKTX2rLGUTnieH",
  "key2": "4g1w1LRzAHCRP3sEKVhirq1K6im8nadvGM6D8Ye1r6SAVfLeNEyKnoHrq1EdpMhBfe1ELW8PiTg1zAJ5FdGfy7qR",
  "key3": "3KY2F26Y2SQVRtcy4bQXfH4fXhAmJQRRzG3Mkv4ipghm3QKfGZ5sD7aMs491q5juepAB3n3P2fkLCL5FN3a8WASb",
  "key4": "4zPsEoWE6jU6sW8VPiijY8Y3mZLkamZa42DfPCrq2n8wd73kYZKyC5AfqVn6Njtc9MDMCmtv83cEoSwHM5Dw4qqh",
  "key5": "28CrXRfZgZxfBfwbBKPVqymA3GivdSbvznUHLzEnMnhasYh9fguSvNw5Un2kBgAVx7BFXCrn1azsirxhSHEEbKnE",
  "key6": "33NQPeE2478KmnNZtMaPrCpGPsTsoL2244hetTQfQtQEiUdh9sFGSjox86tUsJiu4AiJ4sNJqrrVu7Fkeas3VsKD",
  "key7": "8m45VEdKqxWnXF2d87MbQLJ368uwaN1HwPrxVfuHP1iZw7raZKDdLeZsBct8MvSjVuMCGJ7g4QEfJNTwgiJg5nW",
  "key8": "3mns8R4K6ZtMD24dFKF1avJy3KminWZjr3k5iznzeyzReqBeZxFZJgBB37eGb6CL3Gx7HvGA7QBUUMSSt2N11syJ",
  "key9": "AhthzdafeH7DLUHM51fmB5c28rdJrXRu57wskkh1EchFQCsjtKNmdKh1169sUg6qU3inat8hw3pa6heVrBfNhow",
  "key10": "2EwmnbUFXUexz5kupuJF1JMtyrEPJx8Ngxcvh75qPn3cCGSCVp7Emu8VUiT6VVxBaavpKoHtfVgKE54VEb5vf7QH",
  "key11": "3EC3DUtsqxweAHuS9npE5qAZHh7gLniK5TDQLfgdBjfW4kjse4EqnNNS2U32ndTuWtNA1BhFNah8M9iTqoe4C6pt",
  "key12": "4gYVfueRmQis1bx7wFAvko13rrgTNd5H9qUPZjPrjg4b4gxmRRFvBV4diDm7H7V9cqGigvvLiGxQ3FCzkTLb7ceh",
  "key13": "foHX5vKuYCifcmKpog55zw8fH9ea2phnS6Xs8tNDGP4pXKHdWhhCxsua1KR7kZhLSXdk7NWsGyMsV4LMWGm429x",
  "key14": "2tXAgJFct1YhtRpPSGGC3e5hu6yz6yLRgdMYmxjqwn34w5J1ig8WZ4wAAZRe4dZY6y4AsY4Kom4nn22TZBx5LfjL",
  "key15": "3Y4R2pSp3aPEmv7Tom637gx9XXKJ9AQbCmaz6TNgBQtgr67MHwG2dnNDSbfewauZLbbjRpXskamo7MNs5M47Wh9N",
  "key16": "2KVAGpBSxEu3qeoF88hyEQLmgoRzwoLwHMRdnhpKfCTPrBsyWfBpXonG5YXqesrv5ruendXQw2NWKNHyd6o1db1Z",
  "key17": "215EMMSt36pBfFZoBejL711XpKA9cPxvcFFRh5FhNLmtv8fQVWj8b8CYrdsAPByshXVRHRtWmQ7kaNY3SF4TsR1V",
  "key18": "3YXBwjHENWdb4v2jccyM4gWkhhA6JEtr6HWDuSUn9bQx735QmT7XCreub7uZGUSoZca4fLJDnQwihAF5848bRuri",
  "key19": "2djkdadnyp312XjekXZdc5s6vZYwi3iLBTFhNohnW5J7Sw5QdmsLZiAc7zeAjFieAwYnAupe4EipBLQvMwgnYEvo",
  "key20": "2SVAiTwprsKnMkp8nTP5Dk7H5SWvExgTmfbsnN47TgPcKqYwwbcsb1YTtGsuYGM3RbBRskWMtr19F1QykngXNJg9",
  "key21": "2hStsMZZcMDhhvZMKKsVcQ24GNSYcbNT8XpeNbwQzz4UyyoT4eAWcztPQ5aSWiGfQxCLbhimMcMPU5EygGJ7jns4",
  "key22": "42S1FzpvritT9tRmtSJZbFHF8Rrb2F8Q6MrRZ4oLc4vfPLEQ1ZgsY3zLkJtF4uBYWTzc2Dvuc4EtWFztUipuJVoi",
  "key23": "4xBAZCeeyLJnUMGoTeGPpiuxE6S8PQ1wGVtBF6gx4pmqykv5AMRT3xYDj4QkkqDbkoJ87ZtjSobstJ2mbxTNbK86",
  "key24": "4uPdCNMUZCNXtukBaoPKPrxnPxXQ1zWYTtctguize7HsZZccpYCJumYYXmYpGr3XtWgmt5sWDYhP9giUgEGYpdeY",
  "key25": "2XziJLYr4SnTKBZmSwKFp8xk93Vn4YLvBE1QA98awqBaVtkB9cXzWi82ofeWnFfAxAQcyx4oyUmhv9kjMYaQSoW5"
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
