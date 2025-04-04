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
    "3GTR3wNbwR2KV1iuRMn84smwq2WztGBvGrKFCqMqNKdwzvZJK5BSBc8VkKuFK6LtmJjKUgQVNWHNoeXFRuNwLPxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c9sjBZq2WjFpa4Bjhnzeb8QPUDihbTYMWWfDH2htJGc66PRL1Z3kobzbbDnf5M5s88fKi79AhmaojwzrngaK1Ws",
  "key1": "kiM4z7Md1bGd1wzPGiiaDZtz6eqz6iBQkuf5jJwA8As4KyMWzPMpCz5HpWJ2QWiYgHzNYkRDLEe4LrkDmNYYRwq",
  "key2": "5GH11JHvL5rgf3kLEu8PcRZw7B9EPZRtFSKoKCG3b5jMPmNH2JNZ5zsWeQqXhJ7QjXyKU4jHsonoBn8c3ME2ffRr",
  "key3": "228nhAEujL4yqumWfqRvNo4XxYE65EtWBq36uZqXD6DFzVGwaxh6WghuvJerXu5wKYfEbH72Uc6ULJ28fUw26A7b",
  "key4": "kDnrBpmBKKsxSbJJ4kuZi2Pcz9hANbwnstTZfYGAexRotevArjFf7UMSmy9gRVhe5LRfxebZRSnFWPhqCAuWpX6",
  "key5": "5cTDv36skaDsiUdRyEk8e6rkskmF1ndPDDL5VeX77DK7wuyyPG415gYB4enXDb3TND75oaZURnCPVdy5t81gcPvw",
  "key6": "2z5DXTKW8MPbVWspmSbqL5Tx34udfSdaHvYgbzBcDnRxJE9hEEUjYKe92jiN2wemgBD4Er1vpNgpf13KHyHSF1sK",
  "key7": "2k2xj8E6aD7gMC57Pp5oiBcNX3KrTe5PU4SganLaJj7VB7n2UWG1ABmtYnCXBzcfQuPowJXicq7NfA7SAXpNkdci",
  "key8": "4ZBscGmfJTM8WPVHG3qVb3pBifFr4GNXYRHmJUkufnNDdWu7hDcT6fU9qRQAShcif9VezQCfxBauZwUSLd8o8PZz",
  "key9": "4XF4hBcE2fQmCw8tuPgouFm3Dh7qd576tSzGpuVHdrieEAnaYHXUcoH4roqhokQmJYVZvsqK1uw5GxFbVjLvjoxk",
  "key10": "4KheLHz5j18LoqoCn1uiVwwxspLAWw1e2YRn2Urk1YeSuBjZNYUtP3qppqmkbdc7MLarJaVpRjazGL9p9uKdHhH",
  "key11": "rXmn42ryuVeLnWBg77Uj4cehFHhuLB4KDR8XQX6ozYNn9DH3VTQ1GR85bpY2VpykmcqpVUfdKC9rccMtqF3Xtev",
  "key12": "Eo1momU2mMN1kFgr92SaXm8nzC4urkEzgVnS76v6jZ2YLpyTwpT9vyQScUm9LnjAUHi7nzMP8BYz3FyAGC1d8No",
  "key13": "3jtDeaeGBuX5M4NrKAvdz8yntC5V8FeeujyqATBZgff7EHGRbAXkG3dZkLYH3cxqQYh1rp6vnQrjJT4NQZB1XEfV",
  "key14": "5RpHurrKbrM1XvtDbFnvmkcg8pwHNpESSkf3UmhXqUzH4Lcn7EesNpdqfwryG1gUjEqd8WePLmXbMohyGQEAwNFY",
  "key15": "2DGPk1g2aEZNngraT6rLHaeGMALrUZhMHyg4hhqqeGEfFzABfqQqAecRR3ueZnxgkMiY9XxjUobffH2MukW8YD9Z",
  "key16": "2YFquRf8cy1oo3B2s9xG5CZMYWUQnpED9mwUSC7Lqw4HNEmjPEsRbCwGC4b4RKXEWhMGsfWrJW6BrWjfHkRSrwzr",
  "key17": "3FLB1dPfnjuibZCCjKMrunwEJhM3DGDAiaMVvCKL6JwGuwoKTRrxcxpi3Tf7diUrUEbae3kiakoZYyzGjVzA8X61",
  "key18": "xkSwjMGz1MGvnJZVYqiT96muJ9FrtSow6EVKsPuxzbR3aZAs7NT6YHRyarsaBBcSVVMbMb6UYGxjGi11teoC2Ye",
  "key19": "3AdXtjkX85eCVRuRqPpN7iMKQdkS31EziwEaFYBciJZLApU6vVURNJeLXvkajZCnsEUszgkun7PLxKrMftyu4Jxc",
  "key20": "y5oSBfkn7CRQeVueyp2Ua5XTPapZGzZiLS6739m7FknLz74dJdtNi6ERi5piMRK9uoQiT9FReEYzdu276k7Y84M",
  "key21": "aeQtpbBXcnMY9Jt6fWonEGXoKHv2sC3bmcDusHyiXgXt7PFx3QtZF5TRq18DcUFaHYimd9QM5LEozCJ1QKUvDjK",
  "key22": "2TDYqko8s5TBJPpoN8gaqmrHBjiBSCC91CWEizgDrfSz65jBXrvUpbYYYyQcabqeYYbQZsnrnQ6iYWgvgk2sL56R",
  "key23": "62uh69XTeNudpo9MmVXDZipwh38ZEKXHGXhS1FG1RJvvNowkBFL1f5QVYZjTppoNPbmrdjy8umevdQFvmYB8BTNN",
  "key24": "629x8d8Xran3Rcac2wQppEcaH5nvNDDaeoQpYSZPV8FbRNb7boDWuahziMuiYtjRUHrdFtejorAX4gYJ1GxcEdJ7",
  "key25": "3U4JeVmNW1MDY7BDG7jDeM8ysKWbHtSHT7jaR6wabKFepTyuhxbupMoWDRMhw2692LJnVRQ4z29SW9AV3hCDyues",
  "key26": "4jwVrtGaaExtkLqMUYiBoDt9pVzW41db7oUBhs21gWhpqz3GDdB8JwvdsuiCbArnqqWtLPSNvjGAfbYyFL4dxoY7",
  "key27": "TcnQwJ9DigMBFfVB99ZniL4qDcPiegPNtvdqv5RGfdEmQ8pXbi1mjRnH5tHTmwhhNMbCKVrRXBnmPtfgNASifxw",
  "key28": "5TswGTxg2RRFsNDi3sKzmzeQ29UEL1SZqCMFBGdGCLQDrAHcBegVPePgt4qLiXT2Ny5No9G4Nstx6muuGmQe4N6R",
  "key29": "67CfU7CkqJrxREFwwEZmkKVqQa5Kn4wikH4ZQwK3zgtTWqfyJbW1aXmBA4bXXkDhxr81Eoc4jj5PcvP1HuvP7pTr",
  "key30": "4YhZnfVUw567xhRxTh21QNTsrShmzXHbN4G9m9faW2EeGS12nEZY32mf6Rv1SzcZR4Jkrzfygq49aFMznFsqT9im",
  "key31": "615RN3M2SqxT3vJB6tjBhrq8a7iHGdt6dqP3DfprYtiNPuq5R9kC1mN1ieN81dpX18vbbEXiq2yjy8qcLct78fP5",
  "key32": "5Jit3nTKtNPKfKH1yGWFQe5dDrUDCHr474aTD39C9HKwgQvgXT6VFeS54dRgTwUUzEz92abWNDfFXAfs8E25Nu3L"
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
