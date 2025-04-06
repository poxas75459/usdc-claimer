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
    "7j4NNKLX6B5igEuZ8mAd3uRSj7ww3qyzNn5dGWDd5pmAd4DsggXdGhyPEFc8C6eJRV1xf5G9DWBYLfsjS5o454c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W8eFbMTKNa5bfofqET8SpYdXsvYkwMWLMNkPU4JY5cpS3S297ntdzLeb7kzAFLNFY7pEohS6nxNFNmsuteoPacm",
  "key1": "3XCdQ83QKu3L6q5puxd85HZgjE9uG6MS45dg6izdfr2jF7JfQUUJf7y9jkmzToV5nkTt2D71n6bdGnFyWpioyRSA",
  "key2": "37wdULn1Vj7S5CTJF8aAG5BEtkA7xBxzb46qwRdsYDzVdiYVz5u7owpoiUYmcgpGTLw2c5v4k4yD6C1GkvhE5mmJ",
  "key3": "3qogh5aJ2V1jbN1hZEyEZzrMtjZRwSK5JsUH7YQbTCFT4GY5oEp1evGYEFWProhudhLyXYMtVYTEeSoxam39iFct",
  "key4": "2LC1ADqA4H3i7YppLTazRugv1mPHHCCEz8YAnfLC5sEdRBN9CnqqwAEjJGKVnF9TSXLAaXJi5hpqGfG2MWKiQzRu",
  "key5": "2WwYtQawTZSRyTWxWSq4kdcrxG5Mi6DpjrRQD2aXkg8CkqNDGMsEpLwhB2ViVnu8FLWSgh5hLJuDM9mkAscz7pxd",
  "key6": "5j2epj8s2JRchf99DfqVn5U5qxSpMM3gjQVEPjDrJ272poFtHndW7AVByJjYkVcAdV1iKEXud3ajCE45LqrTJaQG",
  "key7": "jMxLZoAgGfk92T2hUm8gif7sVxheyqNd4E221nRxh7ppRbLvyaJJh7XsrsaJA3twT4VBiueEK9S1qcqPbjoeERy",
  "key8": "2raquSRSQTocSmXYrJk9qf5oV7MJs6QcWknScURWaLS5gmzPy9ietE1Wcyrv1yySAfyPUEuzK7ar81ccVfusKRBa",
  "key9": "jWFrzRcpDFjUf9UqCAECXR77PNESw7bgYZMhhZsvDkaU8XcHDMBEvp366pUgGkfYivwn18zqeEtZMUUkvRqLdaV",
  "key10": "4z2UYUucYwYZpKHub2MruNmA7iePhc4Ud2H2DB1DN99whZ1L8FuPKFnomr7eJ4Ca2vN5ZBRQm5BvWwPJo88UYKE3",
  "key11": "5mrQ1uADU29WbnYCs6t4vJYVyC4jc1S9V417zX6DxzZdvYF2yWMyY1ePKWM4GXHpUPdBVHMA9fwhwP4LqDoocQXX",
  "key12": "4JS8ueY3TDhudGzwV5ixbAxmKtH4CYx5h1cuetystCd9eBxeBy8nN4JdNQ6Vj8D4zxLVZJjiwvECpE3Y5kzan4MJ",
  "key13": "3BvsXP3mqg8pqByPPNq9Z6egNeVLHfGgN1ZwhQLmAggF2cRFmuu4sHph67o1P8ewKFQtwqzguvrL4YtkmEB9R94R",
  "key14": "5f9gSzGgcBriUbTZkMnRCEfSkH7XdbAEPWrR7idzk6XtBPQbZ3RiyX4oMrUwzZpm44uLfkUXPvSj7CKuP9M7oEoK",
  "key15": "5rU4Q6g1BPzkG9ACcGt3Yr2G9t97x7uC4zz481KLLXTwrCVQw6oSNtt4auQyBLM3Vx8JeqeeGodRHmoNNuSGg5KN",
  "key16": "3s2zsQWtsfzXLkE5e7QfcYBzazhSQXq3xaSXZsJkT3bKWsjvVH6efyPTPETCQ6ZmhMja4cDckEkCi2ZKQEiBGi7w",
  "key17": "2aahRmPDur64ebbQ8yERhCjRmqkTcadQJnJ6JXK52yNv1RkerGkY4y7UUs6LF7h6G1nDKNKepRRb1qSnVgAto473",
  "key18": "4FwWcjpmxTyMfSHBCcb1WV8PM2pvArrH5NxfD8FMhvdQ21rXEDVEd2QhsE3H4x5ywAq6TeBtPjmpzmH3v8LQtme",
  "key19": "45zLpHau6fSFHSq9BNaWEm5vDGahhYmoPUJyj6VuJuGXiPT1UDj9JWCXYydjJ9ijYJGEH1wPBXgT6JYNtSFxo8ND",
  "key20": "3ej7AetV4ByAmXo7LhTz4Xg9duVC8r4bckVgmMEN5aPv2v7b1eX2BfUHRJmMDvcFkom2gkTDhczWgaLYdzfzqCEs",
  "key21": "2RxZKKyqZfwLKL1vttKY1EL3bPCQNrDJokfsTeEvW1XtBQNLPeD2Nj7vS5sAWE49AQ6HMoy9RiVYb6YQY7kVrK3Q",
  "key22": "5rNCCe77hysxQQ4XphLwToYrQn47Y1DbiBdcA4R9MJ7JbkquMHzMNozaByCcL1UbEsySbNu3ST5cf37NSqQoZcS7",
  "key23": "58eMfz6Lg7ZLYB4J4p4zhnjY8EAuafNHw27VSmUp9whg3DjWzax4M7dMtRF4MmJxk4XpTgHAungNCb1FjS3B6ugu",
  "key24": "3sHwrYbuGaToNiUYV3rrZS4nyqg7NAiFxiwe7fYpYAYGtdyNZwswrgdQfze2p1eNjS6X5CdacQWnAfC9b46rtBss"
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
