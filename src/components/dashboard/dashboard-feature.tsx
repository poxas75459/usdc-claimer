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
    "3gEcLs22ub59EyJZamVYsJc6wi1tmXVZHNPzHrNCyTEk6o7Tqsd9MCXqfhjBY1bAcbVKYJ97g5uMpCDkeQdM5neS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yw5Svb3RLofVK3dS3ry167McWnkSG7Z9PAR9Ev8311ysrtfZqBphXmS9j7fHMEmbZCZAe2p2ZpsXipsg4ZWWjrm",
  "key1": "3RkUQ5jp6nNzvGH79J6yimpSL7Dq9PcvEo5UC1Lg6s6sGTrsf7jpFukhrmvSHZD5ZnXoAo6cptrYXTH3tWVVPWyq",
  "key2": "53aLrUBdLYw6HDKUdTCNSuprDL9FXZeXpSfUwz78bRpN6WmKE8RBJhgN83HiCME73uKimsdFjjcGGvfii6qsjD1c",
  "key3": "3KgY6UsQijU2qY4uAJMoKDyXVWu8x21atyvzvDJ7GvygoA3w3P5uMPqPsE9EjSV1gkZ6bJBGqBZLPgRSu9yrnRYD",
  "key4": "2PHiDiUdnwjxLncabvVRjxfMhDHjDTtL1z8mNNx6fX7NzWFensYxfzu66y64AseeRxqfj26xecstPccinrGXjosU",
  "key5": "3fzKkbMmEpc8s91UXLeezbsz8zrT4jPQMmZzZ5yd2SL6pKhUrPDbdmgvPAt7fpxmifVaHJUHJ7f5SHUr5sfjsVzB",
  "key6": "3qcpK69zk9LEXuh8RzYp3tAtRvEN3qdLnnNCcKRAD5T3u8HJfPZ9vzgpPjDr59aXsXr36nsZFmZBxSBEP4qLbDK3",
  "key7": "3xKo9EZnkHp1J7fQL1f4k34jB2Puo5Tn6Prm4NrceFD66759gEmoJUF5cvzSr3cybWQ9vP6AuK9b56DDpSg2BQ3N",
  "key8": "Crk2ughfPFUy6Fxnzx8AiqVstHNkF88rBPgDYTdLm1sQQzLNHi81v3uQHM2CDfWtQZYuWz6cHzSsup5rjSme6hh",
  "key9": "4AEh55ee7ew28FA9E76RUB6yqYXQ1ePctBNSqVDpNgmoGZKBdXdoEF5rDHSnmnNcPjooFYrn6sECTxYitgTbyBm2",
  "key10": "3CB7PpBEyq4py2AzhiAktccYQgxDxSLKv6XakayJsdTPB5Eciksyywm11rtCyWLnvUyCxkeighjFktvWZWLxbxpH",
  "key11": "syg87T41FWN5bCNuRZGnfn1r4ETZ3Eq2nygjjgSQythdVB4Aa7y3mVydnah7PFsQW7fmPLFVekRoCBNbTUzeNvr",
  "key12": "4mGkqiQZ3nWFXk5RpNGLm7kVPaWR7oUHMBu2gxeLy4kBUqPDVP7oXfJTnGZdEdojnqTkPdh9QAvrnzVwvNS93LkN",
  "key13": "ni73QTqjEui76YFr2cTYir4G5c9Gkvwqev8QcjBTCoLaxtGK7tS6yKJdYr4Pcv3KykyrTXByHXsQCuCULH6Xrvc",
  "key14": "5C5QJuKfEm7cTjhus5Vp9Y2mxBV65Fbj7ZjQVL2FmeKeitDaMxTC9o7F9FhbkPbMBf4wLkugVgLX8pXYhP5tQZP5",
  "key15": "4nAL7dN12EAF6nedv26J7dEFKza4MfMyEVX9Ks6p6q1GJiRFoo6wjjTYFqdJAZyKkgwShGEJ6PY4svcJu43jnuGW",
  "key16": "a6acFbA7Rz7VKUmyXXgTNkt5MYsUuiahveybFANJqZfcZ9dRttUT3D7x22R1BGAREFUgkymiExUxJxfDqn48J4D",
  "key17": "3mK8QzTKeZHNNrQteynQBH7F3q2WWfVMn2m3De1y64V1Rccspv71GHAKAwkwF1zaMRGgomDPGqav9uNgeU6aqKjc",
  "key18": "cGBx1MraFb465p1FHSwe1VsAQ1hEgANimVTtnbEF7LfThCbw8NxgQukMF96VZaKKdhhJZCDFW7w3EokKGf2eUgp",
  "key19": "2t7gXkWJJj8Nn22n93QVVFYiZspLR76aBgKnj7p4V2aexmQ6Jnek2v4HCgLjatzWtbVVpe7nfb1EpXecC78XdAnu",
  "key20": "4mdGA2YeaVJGp4eFWo3qw9KGFxwMiMCW3hgbYV7xrAJgyQVnvSeSaq2mTBjevQjRzHVuegAmHrrkcvUY63qongY4",
  "key21": "4nkscCrWmZ2GnJCWqKBgzYbb5VUvtZwpwcDxZrMoASiZnQsFzaYk1wo3HuoUtaP67DSPUTtg3L4QtJG8UUh88NgR",
  "key22": "23LrD84VBrDWBZn5SCuk3jdGZu3A39Z6UaL2BipGHBc9KGviuU76Ru5c3zUcUTf1vKk9cfqKa1TEAZk9AzsZE3Nk",
  "key23": "2WvWXRvax9qh3Syc2svFb2AtVAqGprwLwbdWHhcgtUnGYfph4nRyFSKjmPf2JRx3TUWEFRURh8unz6AvZwFFMony",
  "key24": "4ZA83Ja5RQjeFHXgETaJzBjEsn7kUzMjkWPUJhFtRRgWerKabsJ55p53d1snhZjjrEPBJ4C1XsvmF8nYqxPcnfDC",
  "key25": "3YtRUp7hZpAaCkVUfLqrKTCWpwGvAqc3AnQ24MqUhE85S4upNr7kinXVEtPcEvJDQHSysp66zWhw6NLB4ujS83wz"
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
