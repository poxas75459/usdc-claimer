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
    "2P2Uwpbkwn3WxrajoSSz7cftPtPc38XA3wTC1woaFVXjue1Zo7mvV3AvCVasr8Hvva25o51ipDmUt9mEtcBJyBVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Qg4iYDKxtHiMdnQEPtFdwmW6QRwcDMmF3cfQkJCtm9ZsZcPMxjM3AtVad3DrxBNLLGV4gSBDSukkdp2hdrp8AN",
  "key1": "3RkkR16RRitQ3KCCqACE1K8TvH5pnmrufSmLG5ABA8kVchMkANaaVaNfhWXpV38cXpfGBi5D92dmCjLdPPp77ybr",
  "key2": "4gJEYfGqoBUufpdkcNAx9jfyv6dP6rFzUbrvaYH2QTD6qFxZppUF55iSJXoUHzABaRaEZaV9j9eHNVyAnGDi2k4C",
  "key3": "39a3CKYcHh8WS8qW4NYXJ64ckRVrqzJpJeLSfjVqrUfAB9vmoSsbzecu3H2ZQyz99JXUGYE5hdYrFcKqumCYqema",
  "key4": "3NcUHy3GMLAAAhEREdqgQpDMYq4SqBaQQE9tXhTrjaztG1P9SsaariZyw238APz5CqBYZE2uELmFSftoJmpBt2gp",
  "key5": "5DAgM8NKx8ZzfqfkQbdPA3a2RkdnQitDSvy7GiVmBMXfGze1EoMrtdmfEShY6Cw5QeKBNahYbzme6amUYZLP2G7U",
  "key6": "8EES5veejjRFM4VMcQTWabrwtmXdXhGqh4tn1Js41GoEkJvE4NFtDSQyL4EghuK9zAPF4iu5AkhmQhSeMbYBBco",
  "key7": "zPFNiZSsraeRAcK3GHh4goa2aRbwxJKvDcGTGMdj123bFpaxLe8aNYFXiyBrT5rBMztz7FxL5niXpiqyT2NwxKJ",
  "key8": "127Swuqe9XxmNbgkPmq2p5arfKRwqqRxA2CeMZApqtV8UjaSKceGpi6EpaPgtj9ST51cx7Vtrj4CvQf98CC98RU1",
  "key9": "nFstGtJQd6K1XHfQc3bDAMyjBcgmnQTUpdFfQsBqGfB76DdpnxjbJ2CfPsTHSb1dUt2CwexPGPCkfxGKBjNsn2H",
  "key10": "5B9VGHNKnJhMut5vyoJcjjviuRZNAw6EJWdMeMVU9CvG2Wd5d8NqyyybjeCJP2amrjvCBTepfSEKQ6CabvATGo17",
  "key11": "525Qg8bJhgqBuY6EvF3vdeVzDViMhJd4sB9KAQZxHvfr5635sRQ7JZMgREbLPTtbknEWWyCG8BXTJPvTAY2ELo6F",
  "key12": "4dGSgSbNY24Q8QunH7whikuD9hH6a3GTmVLtoYxKYmycboF7CgoA8oCfor7JhRFSNW14fmdBkGHjeJQqyoeWNmaf",
  "key13": "WhjKrygQkZqjh8iMFmW8Xoib4uhicYpS5twkZfMLK78o343K8QjBjecVfgub2oQguW8eUzyn8T2EzB5EkhryXif",
  "key14": "ny6ARsheHRfziEd4w8zK2gnVZhmTCtEgu9KhSN9hyBDjbQJzyDz9j4xZcRwDo99j3n7Ec6iRKKMNhVxRQDcwqrv",
  "key15": "3rPZmMYARyWLuZ72Eb6Y8xutgaJU5vkEpE3KnGgSu7bMurHAuCkjwaxv1mmp3df61ZDYafk6QDxXUK2J4Gw99LsN",
  "key16": "4xzrvdft3XmcFhqtPotT2Ft6mC5PHviw5WX9BRdDQg2Z2PG9Hkc7kTCCEAy5LLHtYtNf2iiFju6MjJixPaCTsCDZ",
  "key17": "MCnhmsBbmHqMfmmpY66qCRrzre8Rcm9q2qQEuToYsPnGD5JEPA19VtzptJWLAs3Mp5q249Sre3oMp9UTY4xaV5w",
  "key18": "2PNUvd7RH959hE5VKASjFhDLLgRVDxwCmF29ie447NZHMZApoGrv3WwUzZk2TQSuUXUhQ71854npQccBRtsqqS9d",
  "key19": "3HePa4981BmZyJXBWJMXvrphv6Na3wiRcW8H9eKFgQm73YZiebbLbfLi9jjaXuQAFFJHEHNeWTNTVk2mQNvEhNw6",
  "key20": "4dQ5pTGbGsnbaxQtyhUqFMeEVEyZvUEdcrJpLX6ERfeFUsVjb1TfN5oztkPweoVVNtZ2MquRAmb48vHnyERzCemi",
  "key21": "3dVQZ37xUCvzkS3BAuBCjJFN83usxCLGa2evAojVt2SFGjYGeeX1yN6KnKUGHnXFWkmnWB9QS7D5Rasv5NTWC84x",
  "key22": "5P4eoAMznWatFEjCLtyR9NHBtDBJG3hnWnhjWmLZmSTHh2BkA2fHaNZw5jctDcASxPu2YufwUEzhBYoytEiL82Qn",
  "key23": "2iTJKNmq6XYnS5Q3eom1GV7SV88eCg57RojVsMyEMG7xXTrtRf2bF8GuwPcRMMERtJ4kJUzuj8PR3nskq9iYED6o",
  "key24": "5xiRAZcSLFSLr2THcsatN537TLcQJdDD4XAmBsC7v8y3THhJ4SyvGdiQjQ65yEYko6fxrPhW6qFyBen6JCbshXPC",
  "key25": "H7uvbdZcm3G75tqo6SWLNJrt7vtT6rxUjbZLEdVSt65S64iPA8WTQbn5S4tjQUtPHTw17f5tjPBS4z7ySE3xMLP",
  "key26": "3Rf143Y6iRk9f2CCnoJwrAbZqxHBocUJDCi6HYEgpTQVSQXUoX4NwY7E7QAHH2Rbx4soUJFpHS1A8qC6YtuhshUQ",
  "key27": "3FeVf2uPXSqhKncA58xkoxnwuvEK6sh3EUJyo9Yi5WsW9Hpc2GX65sEdAzVNCWXWLmes4EtCU9okL7xrCShHzXw5",
  "key28": "3Ef2eKupjrYXBv7wdYPUorRJRsMqxRTuz8s1p5YSsMnY3rgx27wh5VWZvdQjXMMj7X8bS3EZTeMqjt57iB6Gq3sc"
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
