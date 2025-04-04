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
    "5ub6jKywD14joD4Rf3Pv819Mst6myoiqxH8LFVyXzkxer2a1LL45Y4vqjhdzaAjQ3G93viopyyu3HuBhqU8RoW3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eA3MxFbujDiY84D6cWKuA8p1s47BPu6WwWBE36oFBgi2nbzmPxWYij6CWGRjnZwPqbBw2zDrnBeo3q7vHAtpu7G",
  "key1": "3rHyNJUtPMa2xmundKQ6Xg6ZCYxwLXi5Hnm5JnK92LqhdiqMNndztYAJDncaQqoAQ3nJUdy1naMyc4mukfZhZNmL",
  "key2": "FU1uEcxg7gbaoGKF87vbKn9FCmy42E49ca2NK6B3wYNqXSD1Afv9474PWeddcfHQBPgy3w6a4HBQGuz4yfxNSaL",
  "key3": "MRBhCvfDEnTi5DSvyYH94BnLbqXFvSDXzHszDiUjv4u2ApyL4ew1XUsGjCTSYVMfETJE7CDBsFp4zpgLqLG3qGb",
  "key4": "3SRZA3y3XugVYMV79MNNKT63W4JjQ6YzLq9oC9XmGj2JJojmxp89yYm2dVYfM1gpgYd3aBeoRni4YdQRwKNUbgQD",
  "key5": "62EfUepY1PSo8ZsLYVp4KjwFEVnJA3BzTQZvJs5Vhqgbjf7Qs2fLLsq8tmUjEyLKuvPmofeNTUTKFYifU5qt1qxJ",
  "key6": "BwVFJMMT7ew6ykumZX9EczJ3dThe75ikEJGTSFULdNETzaJPxidrhi1uEU9txbFDGWA7hehRjspH47B4YyuP72s",
  "key7": "qWLAzm58qvj9yD2pWqAYp2Q4RoELqu4dCuK8QShK5VzSscPVQJWzo9eENhRRQ4M2hxK4wJH5mnyQAw6p8jcBLkk",
  "key8": "5oc9XgkQhvaj8YbrmtjBjZdcR3XUfbuxSMFvwNFsCua86STc3HZjL5mQQQkBUk6j2ceyX6om9M1wArAeDHsaFTaK",
  "key9": "26EW5WMj5kU9b9ZhbwSopUReHvNLhzbT3MeQX52TUrhZSTuy5jD7jJAMSwqYTf1gRDpyzyNZTdwNSSxqAwPsMFH1",
  "key10": "Leu5riPWkfx1qjEoJN2AjFuKtXL5y7jQzEouQc6E91hGhYv2piyWfE5zLUnZtsEp4eDmksTfkqfoY54CU9kUUvW",
  "key11": "3eBJsXuEDLGQKyGuRw88ye9HKPH7nU7c9fj7aQMqpdkYrG6ub64QzuoFAczPtaGHK7s7EG1eBTEkTFzCtCYjgVfX",
  "key12": "2BAHXuW7jJJrSMjuW7bCGQJUbnUDgjgCWRAt2679hg8dXygXV3pR84Brd6GEF2GtfHc4Zv6wL7ZhRUjhV4sFFERP",
  "key13": "2MsVZMTsGakQeThSPnwFW3d6yQ7XSZgyQdFLPcmSMLTx9FQPM9Je4e8k7XUGnwhWUZEJ5x4aQphwQ6DWcDgq6VFC",
  "key14": "456jDoviBkizMUGcd5tg5TpAExDsH6vFHdmx6wMVXeVXYNeCJwcLbdvAZ5t2yZFysZmh36ojw8f97S32drdoVukw",
  "key15": "4QpnpL781hMWmiubX7uEk9KdCrBzpaa39xzEcwzPx2QqL83Qo8JJJGsFejgi7q655CgNX6aHVk3pMtbAwvF9VVjo",
  "key16": "3UDDxJwA4KTkR5FJ8e2P62nGa9JvZdS4TcSPfFLdJKxszK4vKjmHFTLDLvNySJKdRTuZv1H2eWMi5Ta4nEEWzhKv",
  "key17": "65gz4phX6oUL2oLU6Sb48aCZWiDd4YbyFxe7Fmzg9LSZ28tUKXAm3iAsxhNorN4BJCALomAkz49wtF9nKMaaWLSY",
  "key18": "4bMFtt5HqgN7mA2n1xQ32iZQjuHdgvH1PXFMNQ7Kh9io1FH9bTYwFDffCgQJpoTVJCc39oUAz7XBuNuPcKHzAmL4",
  "key19": "DgBe96PnUy17GrCRxCqD6Ys1qifNYYPNgitDBcyXsTBdbJYA4KDTxAmzvfz7RJZbbjmcaoMaahrF6iGQTE64m4u",
  "key20": "NdSTTYzgJJ2aVriRxXb2xYyEtiiTaEwc2oNyCFLvAPeFfExzjS96bMgHiAqZLCSmbJzKFuzuqCvB2wMTmgsNNmX",
  "key21": "46Q3MSNon9VHGfazF83UzErnUTbm48WbCnsYYNqnzABzNixfzgRxVcqSMuWsxhSu3gKGKcBMCQgrXwsFCUXPqrXk",
  "key22": "59wpRh3sCzRf73poHTXSfkA7CRqqG5MQK89evwbmKusCBaWvYnmG86GBoSyg6eEd8reboAr4Add73P4yEDcux4pA",
  "key23": "2BNoukUpaRAncNgQXBhesTM9Lm4pQPYAuepBXSqmLqYTvUucNmXRawdJDrHe69DWCx6xrVhUge7Enbi1DGr9v9gP",
  "key24": "41Eecxie54wk6w4XyfaakkC6NnpxvjBQxMnoZpDFAe96zWPmpYajcitoHtHMnzPVJKVVwMCjV7wdkDUHQAYc16uX",
  "key25": "5JtMxhYKNSF6NcnEqCkb6QFHFFicnLP7tg9TmtPJd3VBCfgPqjGXfVapJQtpWrwsxafLwbMvx8bPaABpPhhfH4P9",
  "key26": "4TbKiqvc4HibGdx9iBpuwx21oRYa6cdAok6FdDhh1tctfi37SZLYunQBuBsGdcYr7f6HEAoxGv7AFw6Rbrs5VDZq",
  "key27": "4XZ5PKunKz3y71aBbq15ihRHFQja7PVQTjtTQgYYADsi3rgNybSVNDEekE9rb5c9VF6KNPp6D3bBiFfmM9wCBBqg"
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
