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
    "631JsFwPVqZmrT5wKexquJsu4CBXRMXbrn7u942XVgarqRnPCu4YofhYWVg6nLJndwMaeWutHsnppwV5tBwy9cc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wo3y8fo13VY43D2qGVcMFt2HK3a4XngVWfgK6Zf6MYuxe2boRB27MSbJ7webvkusy6rctmF4dfxtEP7NzbpSSMw",
  "key1": "4ek6NsQxhQqJF5GhEihiiNzbYt84xd5q9aBJ3cf12NnkfupM8zfce5cXeAyoh1kTNGm2uT1Y1amAd6gKiSjEDLte",
  "key2": "47p98r8AaRmndAojjn4727HQhGCVERJEuDSwJq4zaac8zCWCD5Vi7TMNGJ2EDfc7HQKsmwafrESVv7V4yzZtECdw",
  "key3": "3FFeh6p6TypeWVaoP1YpFqsKLgPhnhdKSjTiyuDopsJHp7wbmFRRcGnDWfvG6v4pQG9Ukuo9Ur56fsUrnTwGBiVx",
  "key4": "5SQgDZPhWHPnNsdUcqUKxZRTdnFCHiYMgwd7HqL6B3ChfkfAbStvrYD1fo2y8UjXr5oZJaeYehwJasfXtH3Xwgt",
  "key5": "4mJb17uSNc6NReuVJU3moNBmcLKLdGjyD2YXcpDWaPjTp2hVaJtdqEVKsG38fq7y3PxSYRG6K8Xnqhjh4X24kYXR",
  "key6": "5dgF1uxFiSSuryf2xZuqdCgSBNxSzWPvbpGZ6vbRCu5ofDPP95yhYz4FYMi3t595Mi79QeKpKDxEcwiXGfxLnrnt",
  "key7": "2wLCtf7Ejb1qb4moQuqfgXrHpA6KCQpmGksKihhfsmaNRkfXQd5hnG6tvF5XsPnHQ13MV3nUMuxprGT6EbvtWkmD",
  "key8": "V3x8WB1MAXFuYZQzB1XT7baEDNoJQLd1SNKHGEtNRYagRVYYP8beddtTSfwr9vrT9bwspEwVRqKJUs6YLQokRQy",
  "key9": "5k13CgiAf37ZHuTomCkY2LfwYavtzDWde955sU46N3Z1uA9tWreZfvVrk653A2MCiuW44f8g9v4cKbFqivnoBdWK",
  "key10": "2pam7NWK5hbAHjfoovmwXaZJZpCgUvUMxPKBQAUk2uT6M3qFvjvg9tnNurCwEtYe8xxrze1sC4hFFcQhxrNbBW1h",
  "key11": "2YN94DDnyQvxbjszrMK7BH4PeakLKv6hBRy383QiFjeMtf9zzGvhLznUBfkHxHcHUUiyrcLnXub4osspxiSqvfDJ",
  "key12": "ixYVq6hJNkPXNFxdV83QUbFv4aqxL8ckSub21wEJkQL5L3XGat46RgY2rccUEZCMKV6XVLnQWNjYGwEnrtvsJNc",
  "key13": "4QESJJL5vkdDHerSaZCAXAKUHN66JsbafDvbSBqeK4FCKxLa4fC7DLgUysQKfFqTpJ2XAz41p2nYyneUppEHWu9A",
  "key14": "3ymLQqoYxm1X4spqm6U5AKA3N1rjL1RueAZp2TCq8TwP9SpUZvsqfWMxsPAMuNiGceTEwLEgdN3Z1s9GXagQesKd",
  "key15": "5czagBmtggwQLBhv6MQmGfRUfT7MNxuFUGXPGmWxpNu7XtEKGymXcwkyuqvwCSPANqBJRBkHg4pXwU7wLA91AjC7",
  "key16": "4R69Tt6ToCzXv1NGLiEL6kTydSkiu8Z21cv82mzzWMG3PZfRnJuqxVUu8rco9cC4jDmS8XpqLmb2N7yHir6gmXRn",
  "key17": "5p3RXnK18w758rZZrG6BamoKHLrSoBdH3nNu1e4u17wtvVwytM2mi3JfvcgtAmDy3z9Ujo3miFTaz1CbkJMJRyGn",
  "key18": "2myQE8AWrefPoueqyzbSXiVJH6AAJjBpq7VVyAdRQX9WR6zm58Cqs3eyJHUVyWFhZUzuWfeP1NBQZ6oXF4A6vopR",
  "key19": "484T4jT2tE93osHWA66TonJfHB1xpjrW9JY2QTU8CczcDp1utD6T68YeNxWoS7JjYqwDvKHt81mhcS4R7zaitouo",
  "key20": "2pR4pYtSNoUePGiudvQ3ojkzwtQ3HA42ne18JRcezPQeGFoz9exHzt5bfbH3B1X1E6bVmfMpRuoQuv3szgTT3ERT",
  "key21": "5RaparzrmprqQH9oHGPHGXvJonFQa9STkh1Z53KnmFLAFnrQwhoXpYMbwtbXgCBt36kbh5m3rVMegJMTAdgeg8nv",
  "key22": "3no9879PwzPELehXYnskbXf6oaRVWmibNNZu24xYpare7HoTYf5JXKxRNr6x8z7LP41EiywJM1PWckspG7UpxNrn",
  "key23": "idRM3imkHhEnCje5S8LHmesR3zNGSpWTLccg1eCmPP61HFzSASJMFUaUtPovLKQiK1BTuS8yKnr8mRJrwDRJSxT",
  "key24": "2dQ7fNHMkUC3eA2ydg8YvTbduX4RaxEe6s5PebZwEiNSk8roYTRWKmXz3Rf8eFNADAr3cg3DcwAdAVBssdKJMEBe",
  "key25": "3E4kmL7B8bcmhfB3AEJRzKPG2RFMfXaCvohbgCSQfKNok8urUQZMFKQM3PCuyo8KVv8ha849TD3A9G5fgFPoXDLi"
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
