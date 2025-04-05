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
    "2GgQk69tPnzRAx5m1W4qHHehLvt8GPigrhMr1qn3YsyF6etcxqNX8oTSjU6epENJfc4YqgEf66GFfgYHSUSrXdFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oc7t6tKRyn1gs8xW9FAmkontQF7KZQ3fbvVqUt5TXJ6SFTGZw44s8GN2Q6o4pDhRu9BJnYETn6TwUJ67cBEkoWL",
  "key1": "5jYc9QBait2azAvBafqijS4x3BtPQBFeJvAybQNb32S2yAHFWZ65prwWD34TqdN4g9sb4GrZRFeEvLvWstqxsZuD",
  "key2": "3MJaPSsaoz87tmMRnttoAWVGaCej2JKDikRdCKKkNNo1VXChqygeAuPu69VgyWioAH4fTfaHJmvx8XqSFq2uFmNs",
  "key3": "5EXZQPmnKo6sXSJYyjLYCcLrMt1KURVtTWYBfazZhSKimMfRRZ5ebAX5EGR9uKWMC9HbEosvx1uBoURsFdd3fzfR",
  "key4": "5AzCKz7zi2VTHsosnpf8a4ZWA1T3Mc6Y9pbLvSmy9991PNedz7KLiLNgPKoLtroDB7gSDwhRtLzwKftcaUptFMhT",
  "key5": "5zG83D4gfpwDtsC39CLWLWioK6LQPMMrBZhoV5RLe6NkVmaLFeNpKBheQZq2kRAh1Jaj5QPWwgWoHR8sWzHEh1q9",
  "key6": "EHFWzggCKu4jwacrPmgQ6SesfDm5ygeJK3ky8MNr4MwtQbD2gYqVN42cQeNG1ZJKUDs7fgXdjvuw9Q3jx9GH2P7",
  "key7": "3nKv6jrfSwC3oppwjqFctntV67eDPxWUwG8C6i98Y9yUDPyGRuGCMMkLAV2Ji9SiFdRDqiYe4yuVJNr2idnyjrvu",
  "key8": "5ezvCZXa3GKc8TQMTxqLTj8HigV21MN8KYBuLGzQLh8knqxbeCvdFaY2cr3EnQL9oXTGQm76w9DLQNbN3See1WPz",
  "key9": "49tHfLLz2ohvDiBUJB9E8uLRTwmv1dyWPEwswhJ5VYv2pE9xfGGb1scU9Gheq3Y3FyQwzc4Xs3ydxBEUANyTBpbX",
  "key10": "4KD7UTw68ohn9ZNqHN4gAJMGpT3hT4fwoh3cV4RTnWnTHUhT3Ks7XaAd8zeJYzjALW5U5rHQLCheFWoq12y9kudr",
  "key11": "4XCg8n8xVxg8Ddfzsj29Nn9jodpZTLCWu6hxDNH79aN25pYBgpcwR2HnrErpFNoWNd6xUc4Jo9RuL5Pmfg9JoKB2",
  "key12": "2bEdthvew36WZ7DS2e5CsNCoDyYvRFnGcNQHYFn74UNsAH9nnsunAtb8RVbTHmLsx4D1rWzYvXtNXZ31uQdd7tb3",
  "key13": "3i1MJde6Na4wDYfWXVAM5ZGv3e7ZCVHqYosRSRxLgi5Uee5qaRR4ZhiNW4C2KcTqr5FwNj4KSNSsRK2dD62WWMTc",
  "key14": "5PDSy7wj7hLSr8rrBF55z7dNdY6fUTMrW9pmCK2bAz3LkdC6WZue9nWjK9r75PJEZSFgtUTNpmRz6DrJzTMLqtVk",
  "key15": "2NAcedKKPfB1sbMeS5aPHWfX7GgKfHdyjb78ojYw1E3LpCnPvfzA1bDLYedywjuLnaojdcKvtPZagRS3td9YB72Y",
  "key16": "NJQ6Zc3UMdV3ZwYUtS3hw85RG7WGjjuQLY8skHy4uYbkuQDWXccNJFYaqjb6E9eTnyS4VuSovQKsLCtTnXvWeFZ",
  "key17": "39mBHn4nscRLUJxpv6xepVfYDvbyK8obGDF8b4CjKpqpyNUjbXw5cz61XxHxbRaRuKApridp6fsqtfyQgTGybpu2",
  "key18": "2udt2uUfD6KsiRd5i2CstwVqM7fdoQA12GHQcfRmY52drAA5nqCufZiVM9kvA7MEbJCQEiHydAqUz5hYGRrs1Zto",
  "key19": "2WmczpP6LZCRMuxQVNtwUa1a3Z61tEMQHP5Xu9djNF6ToVYc7LtKXc1BWUUjGQScTGrEgwm4PKLtykBBNdrt8116",
  "key20": "3jsfgxi2p49s8AWoCxdMUQmGpzn2nhNwSc12oyy6CPPBm8yBQoRgU6qAVWKayDkwLJ536FxzuzYaKk1HS8vdyCyc",
  "key21": "33KmB5QrN1Gs1ExpiMsdibdis2ZGTTiVHukpnEPHDjEzudGVRpSvkpWUTxVK4rothHdhpRPbjiRiqhEZG4HNzCYV",
  "key22": "4oqdDCQTNDHsT8LWxRVXbZ6aTaigsR4PRuhRMuJn9dxZKfc12tnnDwgtQtQiaCxCNLUAjEPNBvWsygRDfyTrrdZJ",
  "key23": "3BjAgnGEVZPViQUHiHQ1dtg2fVBpjwPzM6Zbc2bB4qnTMV393SDxkDW6KnhR3gq7jSL36TVcuWugczwm4RCVVWEC",
  "key24": "2tL3W3Ms3wwQwC5qdAbW4Sg2nMBjrmpc68h9fSgLhnV2bc6dK9GB6Kv6ff9fYVYYBEQ8uF8GqoWqx9CrTELSPVxS",
  "key25": "2546UXYTzcRrW7nT258rqn7rtDL4MEJfjMPXaYLD8VRA7f66bGHXJi8k3Wi2jzrsPsSkFCpXvpHRsb1BhjFMVqGb",
  "key26": "4CPxHvegmhJ17W9MB95V7wMqpFNLYeMVPvfLyUtaqwn9k8J6kRvUmiTmmVUDHcf1UFBvgCnZiByFw6J2YzMjHWop",
  "key27": "4kKmpbweYBRM1Dyb1dBCvTeeuSDPv9HFHGWpPtTy4FBZnjMHSHV2SniBTxwmsuPc9pFiw5EoCkBwtxReN5R6fqSg",
  "key28": "JV4T5uVtNM3j4KHsejrigAVKosRM5fTAXRmXFiUZPVjihHaETGBp8vGM9kSvtZnYZGG3UxedwhoLwWn3i6gmkzF",
  "key29": "2pqGas6JvJLZ11YNr9ipHvFEGysz4uZEBVvFECFRJjucm2wJCeozJTVz5oRQYHXtAngLEvGDzfBKCDdqrtsBaJwp",
  "key30": "39sRA237Y29ihNcBHwz6eswhSzbZPy88bhLBGeYzsZsHWtKZqmLSyzYBz7tPdeFXGnvfgsGzHwNKngc97RCCvX5P"
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
