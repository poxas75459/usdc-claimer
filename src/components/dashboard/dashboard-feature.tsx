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
    "3kV2F6rAqg1AqKpsdnFaC23ckjqm2XBfSaJ6LP2M83rLVdg8jkP1MDouCgcTjFGYxpSxU6RjoZsrCMQhnANeP6N9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55YVhYyew7ZXRkGq6mwGyUW2mUVuwVFpVW9wtnsvS9sbuUPi469MRL7jQ2jorjYy7fXAUkpgaBWTUhTZWZncSeg",
  "key1": "4GxnSroei9xuNWzxbb6cLnU4eDxN3dcSEaP4P7vLGfB2Kug98HCoqjopdtQPZ1472eLULz3EJgjgd43dNBXB9J1g",
  "key2": "2ZBD5PMx2p3FDmmzR51XczJpRvhGxV8YmygDi4cikxqaVUokto5qBMFcPcR8CPHXtX9ABUieQUup5grGqTGh7GcA",
  "key3": "4HeREtSqfqsH3nLLwQYKW9sE1mFjDTMc6i42bqWcYbeorph9kyZKRcehaq4y6XxT2YaiUfoXpbTNi3btHoDjbMNh",
  "key4": "5rm7QS5HbNg6KrbHqY5xDDNukLp7nA1Ye38kj7HdD1KBQ4y69KrMRr8BAJ9k5cy9Db4BSRJgegWyeCfFReaxJ1o4",
  "key5": "4wfYuKXLWbPzUdwX5ZbLhXGzEXwFtU8dzzehGTeTTvmvaouCYgJR1zjBRe44ZG43udSUD6WSTWTdErwJKq231CwN",
  "key6": "2Y7q5SHBAE6vztaQkqK2FXsBejdxASEZQ34WjT4Cr1pMC7vqrtTHtnp21X1MSGLCyRSe5VhxhCsG2UscE1fQDBbS",
  "key7": "4J5AvwvXcbdhbSerxUPM1bsnmdVAtFWjE2c6YTW6zU3MqZUBhacvWNwHFjeYubDX7iGi8AvGKs7Q6LWJ2wT69Gjr",
  "key8": "5kZtxAjbMgo2M5fNGzqa7A1fmEFYoq7jbwJAso6Hth9ADLUihL3etocTk2JUozamzDxpaAntqGSjttKEegP7jH1h",
  "key9": "2g9Q2PSRch6NA12UTq9ZiEDC1RRb38josxNJiEs7CvkEVtPKUcAE292yEvqGXEaQ72CSK6SKTV1cbpnHeZrLukby",
  "key10": "2pGJSD9AE7fRA167qL9c2jLUd2H1uytyfg47GZbiNonzqJiBn3RV1mGnbd6QvHU8gAk6deMTQqNNertwH1o9Nxd9",
  "key11": "ZWjqknHL9oCW5H8gkX5F8RRkkzxP1kgHMmASea7uKmoJUS8uqe7wJK4Ke7uEsDjuiMePSzExxXEc8Lud1sCXm8Z",
  "key12": "2MCmSTXobBSncbmWGwv8XqMZ2unWcf4jriA3FS2cii7f6HqiauPNwnfhPdLr4fASrodfFBSNX7XaYwhUyLSZbzAa",
  "key13": "2FnZV1wFFpfEp9PpDVJtwNgfh7kyQQr7uPEdBCNUZLWaESsA39HyHVgCsDLNxKoCt8VfWH1S3BC1TN9WR2v3iXdk",
  "key14": "44ykufVnUT729VtSJARQ17dCnhzhfL4C47w7KoZEY1ei35hSDT2m7cax4zSrF7P6uJt1mkZ3kTNyYppkYBW2TbGR",
  "key15": "4P9BumFexEhPUQTfPFurPzK4oRXn37kd5KZPdJCf9ZKx7XZifjqW6rABKe8V88Xsnh8dT1wtUf4LXYYhn8i7dJT7",
  "key16": "TcAdwqZEeqvd1Mf1urcDYZ3Ardpafo8Nw4hYhV9RWvAEst6db2AsR6YFnVSgNVCNUtsr71MTa35md9T5JqnMYJL",
  "key17": "3iW2FefFfPmQdyYtu7gwxLuhYVozth9R6rPqd4BrGHt76h5cbm3Ncfs2qS9W48Fy8M7RmXRFWxXCKMa93inZNh97",
  "key18": "2SrbgN3oJf54VyogTSSyKTZMrcDjCpbK1UDiMs5aGbfRoxNxCPc6wct9ni5mzv2TqmnwRJcj38SN3sWhUYb3qCtn",
  "key19": "4qqy8t7kqMXzQsU3PP5w3Mo276u2Cy44hpesRsvJcBeR97C2K4mQMJmEiK34GKui31wXXTY5Lf3HgDTW4nHXRRa6",
  "key20": "42JiR1kdHwYeTJUUmWSEztfdSMy9p1cgvXDnUMRui9rfGSagL9H33tFXSkC2a5TVSCbikNoS1szNo7BpN67b7Rwt",
  "key21": "2aJ7HxZF2B6LKaiitB9E5dBrV3EuaXg1sjodpWoPwTACALyKr643pVrpnYRwTQBdRNF3NPhkez79gGfwizULRfso",
  "key22": "3sYceGxAc1o8CVr6UqcrtA7mM5C3yjoEJSPyTaotSkXAjaUSBDWt2y7AFHzgzkgx8L5JqtvAf2DhazxwMstBbWiN",
  "key23": "5Vz8UxtCBffJutQucWLRMPQ8y1iZ5d7oa5AMFmnDzK6U9g1esdKV69vGLQHhhyCiRBADbkKWBuhgFQz5brvfZPnc",
  "key24": "Y8Dwg61it3AVSQeKzCbiuDDmXKzE5aj2MvFZPdhyUGoo5CYKAP1QzKbFVeTCgRnVVSy3f6uBmPzu7t74eZaQTiN"
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
