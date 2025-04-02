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
    "2xFkNwYjeGeAibszNEWJ6qABJ7ji9guEz2zX2AJqjvDV51MarbENq7NYZvQCAZqcnL71VRRTW7hiCh9RZcYhQoNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47EnP8tRdmRzCY28ZvqDAe7rE79k5EfuTGy7NKGFvcoKzFjL4iEpTEcdamtCRzRhkwCFXC7Zu7rJGBbZWwPiCvET",
  "key1": "4BC4PzQZHAoURKBvzEYD2Sqnni4qwoc88VDZGabukTHexjdsEuP4y8BJKB3N4Srhs8FqFA9BCBkqfujLkfAG88Dr",
  "key2": "4EkSVBE2M5Wi1pxn7Mebzj6RRhYxLEfbFaJtEBvzNrS3zbgNXEXbBX5NA9AQ3bKj7BTaMPyhgsPNk36GxzYobriP",
  "key3": "3z8S1Dy97Ps1yPa7Wuif3tpNJDHq8BqYRgqsbCsEYRfMbstSKFwb88CLXu2TYu9Ar7GTJUUYnWfM8mMBDJe4giLs",
  "key4": "3P1ip6JnPrxP9pHyz33oTDJUsNH53i66xDQpBXuT4v5SHJNL2vNCvNZ5uWK45QoQpvo71RkAgGcyqnokbtiNUc2Z",
  "key5": "4u7wd5hsqXESYiJBupovYVzLhEWNQR4QEQayX7sQmpKPc7z3vzxQ3vVnfpzSsZFkr1NFm2TpoUgqb4MxQmjJihEK",
  "key6": "4AwhHeygM1vJP3Mt6fioVuZ8Bp9DGJqSkNQq8d9YkTnNghsQFecoHD4Yqmi1Yi7LbhVRdoETZZ2LfRxrNDRrahKP",
  "key7": "5UuNsBvk5aK6oJUfMS9ERtbksEof9uGEWHPZ7B77CFCCdqpkrpWEhFSgcY4c1KCYiMM6TfFCgY77aiByVNkTZkkR",
  "key8": "zJhSzWhggERHDcrVMFh1yoQKmSEVi2dchvjW8G2wHVMDojLzzaXknifwmLU2ykmvVk7BNRnKqrSF97f2dMK9M4w",
  "key9": "RhHYv5sFsFm5vAYMEii2rUaduew4SKtuz76Qvs1LjHmopdYSgWVX8esHunzDLZeQA8pLkWkBdq9LXKMtHjQJ1Wc",
  "key10": "3f9p5kp2fJMCvSLBT5VKsEuVbxtHYsacpkDrfjzogJMNXqz91CGEPgWqhKiJSEp3bP43TLMpqv55gvhq7QgT6cRS",
  "key11": "3FvK6dvtoPS4ZuS7aWqF8ZJSg7fTMywyDk2mwmsqHecYoxdaiWSk5TDYZRDaQVSoWKPqL9qDFmrbDK1aPQ4rAqSC",
  "key12": "5u5feskH1YodjTk9xsTp737ooNJb2oDKEsmVHTa4HUbH91XzQXekBZzY5vxPpytSCKTRpbHqQKfaJgiLreGhDpTy",
  "key13": "5FGD5SYUDwDSRhA4po8RhAGgpuYQnhTPcebxiJ9ybZVGBSSLMqDFvQCujixPwyzFbFFpBMwJTJwYgqK5yAVQMLtd",
  "key14": "5UchzezUYRbMVpb588kDtrCZ8dHka2RxJaG3BD8dwkQDfduSafpCNiYNbezCgzVdb8EJms6TYh6u5SWdvXNb95wN",
  "key15": "NcgZ2LCaDNQEsWajqCZqYyoFbUPsAi4ANsozJ4TgSVnzUBMCmJ9GgiWtMjAqLdhJdBVa5hiXDsc2QSL4SFoJ1qN",
  "key16": "oBSy7zuk8sHPdmi94cTVto1V71Jy4fxQK2iSPcXKL4FzHFVHGS5jCrku56S3zXBwxcpMp6eqDB8snm22fsmtsMy",
  "key17": "3PJNFSQtxGKWL146d86cpAbHnseVhUGFwE8YUCUFgi56BiUjuGqJEqzBVgBZeu5ckoJvP2kEos4dtRUqxwW9zEan",
  "key18": "4XQXEf3CKns53SNWVjQ8FbUnegmMciBXy6MYxEjhRuQuK89oGW7sVFBcHZUKHL1gtCxZexg2iJEnYe8GPoiU677u",
  "key19": "5Jsq9CkDBwhBF67EYNZ7cumBjAEb5G4gB1umkstvqejDABWvqoSee15Yh8LnjHJnRZXByVptQrPjLP1eu6TuqiX9",
  "key20": "3xzYinNTjXefZHm8mW8upCqSA9yqi3jzvuA4WijPmmNALKtjneKDnt5kpZmscnmDVN5TtVqUnCfGpaKdbaqbvHJg",
  "key21": "UZWqPU2VuJDuEMPEqSwy7a3hCbTaX63DVgMLwBYMX11iGqUAXqLXi9DuzRyJK5fkQS4ywyjskLynWU23RoVp5gp",
  "key22": "k2Afkifg9rjCA5mdYGJzjBxEVEoGMQjrU93Xxp451RHYPe2wHWm6t6m3JedfoFfzcjrabJTSMzfE9BfBJ3433WR",
  "key23": "539p857kLeS5aeD1kAK8gKrQYESiWiKRgYUguFr8dXNer4bkQ9V5TuDzqULB2NAuGLQCeV9aFQ3iNPmAsovfaiPe",
  "key24": "keyoK99rDzRFHMxvTe63XdH9GdpkZTBE819RMwhU39V8RNqvsHM9iA85rf8A7oBxqR8NRvGekHbmTFtzHbgQa1q",
  "key25": "2oNnoEEiw9iRmqe8Gv7F83b6zAw1aZ8mE9epVdZMCSN41ouGmKZgfP5KPBtJLXXzG8H6Y5g4EPeyhM8GjEungVmr",
  "key26": "26wSwm2PEYJ69ZzsnqndFuAQqTMEMZNtXk2eY6ruuS76qMzZrVcKHGkGq2Eh75YPhVYGVXDXbgPVwwd7f4ZyWeKe",
  "key27": "3BGP1jBvtNBWoHXPCecan32ZyaagnXLZeB5p5fPnesH9aFc72TVxQGSrG5knndrqL2gFk8NHdTbJRgHbpspVtYcd",
  "key28": "4tKonLvZ7GQBnFpwtLtBqD6zTkYJ7ACUzZ9XujZDitYXFXsDb1wYzE1ZbRauurK1KSDB9rzc5GfiGioQYv7Niwst",
  "key29": "3QPmJjj99usfrhPW5zjnQ9BZyfNpFUaPpsX8cGfqXGUMPjvzSPUTeHg8dmcsa7scjAhihXnnCz1jrjLBtiMDmGzm"
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
