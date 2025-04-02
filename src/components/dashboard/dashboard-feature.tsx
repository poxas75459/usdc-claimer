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
    "4ejpewA8RaeNUKJUjy3tE5KEndabCHQfPR45NfduBZKrGVrWXycAtEtuu4K1VWCueYFj6eqYrpv7JSFuKqGuFdLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xFfmS4ZGSEq4HarfmfidC5AoZh1xdDK15hvk3xm3TiBsPFbiqeYPc3HJuXMMAHG4F4rWVLmKZr71ciRYWY17DCF",
  "key1": "3kKMkB6F8JBuBvd81JmAhGo7Sj653uYdj6jqoCKqQ79sCwt9BfebYhnuwcfjFFh6X2vZwGPoJDNF2tL9KwdPg1vm",
  "key2": "5cdDRFQJHFSMWeKFsjQGH1tESDtVA6Kp4MX5bqvPhdBaCLLuBTD3KE7iXDW85gEiizdmebN1shMSP8kfZ26HycE9",
  "key3": "3oFdTuNuxa1zb6znTs3RnjDLjmUf1vEHpQUxaBMz9pBLVxCTFex2dJedvQNtLggcNxpQEttQhqY4VaTz1F3sAsAK",
  "key4": "2nTp89UMgJCfN72wRVJRZETfs9qx5WvQyFDUjsCWg88LDPKgnoaeTKic7Y3AkGx2t6R6AKppMVjzjYyJGrnWeajX",
  "key5": "3c8XaSHPrPtJ7GMAonH1caDhoAbTDGdS1kWnNEjentzsGj22a588hGT15zEQVStkSzH3Xd6pB5NVkdqyqjxBzy9E",
  "key6": "2JMYohZ8qcN228eC4FYGtqCtYZboKsdaQrRe5Xfhf16bVBndvf6D6Vu7KZPyuTbDPneQfHAJmes9rxrJ9XfFvHyJ",
  "key7": "5TxdWY7nkA2DZw61UUuNBXzZ92XFNe1Bf9g9rfms7ivMCJcfprvPdntZ7ePsn4R4QLtqv9uktS3mJoQ2Zaxfx52P",
  "key8": "5UkzFuXqF8e3CePZsWLxVjzjJFEBRf6xCuybTTtmqHunMRpirFM8g4Y9irD8nvgUnp6h3qwZeHDZpcyjGJYrL1uH",
  "key9": "23otvnShHU3NNYkMMm1MKK6DRSRA28N4wrthk8eLwZE3zgfUxuXGRbmDHQxGYrxnAtW5qDiY2HFZTGWQPQJnCxVi",
  "key10": "2MAd2FdeW4WtRY4iUaoEhyYt9KGuW5kE87r2EzNWoiadr7vmrz7DuY7BC6Y44jJfA4674LV9vh3umXRHFcgzNHcg",
  "key11": "3UhAy2j7cFwykSqX3WAhXtqyXE4sy97X8kGDBdXeMqwW3vzPvDGV1N6XsCerZ3KY7zrwMbAxt23ierpwpDbhBZka",
  "key12": "2kwjgts8QrPcaQqnG7h2CTDHtRbWuL1oBdv3F7F1yvXF2B7VbbJzbj2ohzHgRVTPacQAPgVCaxBG1Y4gLjFUmzn",
  "key13": "3EQfN4mxnmb6pbC5EgmAGmvsYcoTdGHfYCi3qwjyDtxoNafn5PFrSyaWXk6cWQvBq4S5LKVgPsT2489eHSwskzuD",
  "key14": "4PkV9TVoHmvu6KreRbmkFPfCPBvtXXPpVux5bYpJ2XEuwzyCvKJEjGZJ2GQ4gdtiaxWgiYt7Bh49M5cg9gii33Mh",
  "key15": "2k7Cu4adcYQktrvrAauNx2qCJf1rRXXqnGNYJBhTrGZHYWTayw8zVzDRUQtcnKAprPWKyvwJGApR4n6VEaPdXWJJ",
  "key16": "Jq6HcKQ32g6yMoDVENswWjqSPGH1QjptLs3EdUPr1reskddrwTWk9iXij1KnJcLvuEU7UwPFa3wiAx8UkW2bZXo",
  "key17": "S1Bbc5Ge4RNAbVxHnHE2hB55rGyB1d4Ty98E8z1w9QpHt3LhvnSFDhadVG2EMfQkzfQXirEoRhtTPFVyqSa8aSp",
  "key18": "qt6uskkT1FjgzHqX68aEKQY676RHHvwErm8jkWFd9uMucFeTuXHCUzMjjKXFCLajVmVVP3ypgERYEceU6eUoF48",
  "key19": "4vrxvezzsikavjdwiH2mbMZDSQvP6nU5kUG6seZbcxfHZEwQCbUbGqBmLKrdWBpBHUqJWaqXM7WKodbUwvt1hp8J",
  "key20": "5iwmMEWmhTzdDP1fVd8kjGyEDbhACmmv6PYsuL3CgRQ1Wo8BxtUcev2C6MqiLJVH8UeAzBoP7FrubVjs36WKDce4",
  "key21": "3HiPSLuLDMR1hQM3qX9JxbRD3QCvC7rS3K3hbtry3cRdRk3HhmeuKMBMgDJEaW8gbtBTJocn5Q3FyraDfs1VPxEF",
  "key22": "65sAscG5kEdA29apFwVd7WmWjkRjn9cQmakUbyjDJUSJ8gT3D1w4KdrftN2eJA2m7j4fXa4x7EC9Q37bEbj7hen9",
  "key23": "4CTNJNZWB6gNU7JuhpQ6vxDqkgvLND7tVyAjDcUdD9CVirzcXbJngg5HiMvbJydGuGX98nVhf3QDLJjbMdp5HDj9",
  "key24": "vaZRudh1Q2USEjwpekRRbRwSdqmu12ScfMKDUKUybUhVaRFhJXh3JSCz1BjighRL1EHSM6LK5Qpc13DkFKEwHKe",
  "key25": "X8xUYW1NzceYG1wVtDVb15oh36rKvh8GfQESM1DLZndQ2BuJCosHKPrV4JmxZKjQzGqtW3EcDLWaWZ2oXpVDNNS"
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
