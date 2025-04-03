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
    "3uNJHmEUiiGBAp68rUD9yN7KJPdj8XonWmoce2ByYnMYwFG34DXMjVfV6BCYubqWyZtwYEKATtmcoFCoQG25AvTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2naZqcmEMnWDxuRYh2CpbDQsvUCVb6V99wqC3eiLVGtD6ytmHsoQuKNrweL3H9pWpu7DtZSdZNwjhuyhMShr8rwY",
  "key1": "3UqQEhX3LdpXYARJV3CvGirVrETUG7qnxjsXS7mtH1zaqrXa3kzr6stjqyppBBwaeSHT7nukyKK6dWC63thFGbUz",
  "key2": "BMh5RjsvHLd8TqfP8Lfqv9jcZBWmzpHSNE4TTz8qgLUSn6vbFcEfcQL8hMVNpYdjb2LdQSArreXfUa9fJmrwPTn",
  "key3": "34L8auPwUQTAXQ7y3Smu8mjBYKWcwMexddrwTW3dq7kJYH4oXoAckg8pjbWxSPhS5qbAKpD6JBrTDwQF3asD4qfn",
  "key4": "5mECVARxGK3VEjdNDcxEwumDXWx2GZ56SNowRUNS73UsNZQz6JaCMBK1bwDR96n21tu3tmTm697WF6sGMriRkUtP",
  "key5": "2PhWRAUjXPbwzri2AiGnd2ss7wGcUaVPpbanr6ZNVUYDBQuaAsbkpw8TA2nAFL9Rs7Lt3xn7BERJ7oAc9As3cVxA",
  "key6": "4HJJ5j1Hmf9CyTi49FQ7RkhAUmJ5idLM88SKDHa1ry7QPzsFkdhm92XXnHBxgvSw8xj9Mb5Jc119a6BDZbJU9Gzn",
  "key7": "FHtTXwLt4Tk4UbiHnwUSJCagFP2xWXmabH4TD5ewnvjw8oXWrhjkgetwQXyporpXeqJYiVtw93MR7E6HTgrkecj",
  "key8": "4TAURjrWwH8C4XNdKjJXKDZLdA4vxHuiQfKCAKUnztm38PR364eZmkkbuGEAx3mH1FbMgjPbNoaxonrfJWt9rELJ",
  "key9": "5gVsXUmdhwZ5qLTRbnNMPYhothrMcioFWffmDTsvfkrziX5be5fWWA6hDtfFjSAQsvxeVYwnRrCQ1axMbRrEenqt",
  "key10": "ErMXEisyerrfjpjt7ve3UxxQuwu8SLK1Pr6AdETsL8P47pzppAWz5idvQheVvLCzPGTYrsCkvDLjGGYiLzKCWF8",
  "key11": "3EYT7x6KoARgDnTwtfArwkPxHSkartW9pVE85PweAGZdW4mE6LRSARTB3AcXimuhToHu2nXSgipgnzzbasofmGy7",
  "key12": "3E8h78M5wBRCP1k7esaRdqcmLktmvctGDhHevpubQhUypo5C5pJksLo7h3sTXukuDbCGFVyhcepKbpZ3mFce6t3r",
  "key13": "5gwyyEpcsnC6qcaRaGKbnYbSJ9Uv9adka5x6gA9fusAip67zCiGVwSVmKitQ9ssxQzHHtak1YjZS66KeTYprtj8i",
  "key14": "352WsijhC5DSJceDK2jkj5Grw1G7k17W2Nc5Zvyx997EETGGQr7RCtNwhCUUBgrNeKTVSU5U2ux2Gi3MYSwboEnz",
  "key15": "3PxVV8prcCK7h4UHvQL6SsMDattobMtt8j2YNBbcD7ksGaHhm19bCGykymitvonfXDBemBwijqoZC1EyKtvqdjSs",
  "key16": "3H8GL7PmzXEGPRYLY8QGVHLfDjrEbhwZ3KZdAUuLXTBKNt3JfEFrZn5eTZcaJkpH5NYAh7ToA7f5SxoLEbVV6JEt",
  "key17": "3QzNHWuvNm3EDgNr29PBgiCU9SM5r6CjeBChbb8QZCCu1tcDyvheWpqdeVkTUZCeaTs645eCukzSF6NQwhQtLTw2",
  "key18": "3RQWzsekpgnbrfHzLoQhefFSLDqrXDFv3zvcu4CuNb5doMp6XebP62ajmUs7hHBRwrYo3tgqVyJ12AeEXmYfYrCu",
  "key19": "3G1XkVXbi3K7RT8WzAsovxy3gFwx9UEG4PgqU4DtenskbK1vRFkSoZDcYrYgDkeecnkUsFrc319mBUPkZetAND3m",
  "key20": "4QShbqQ4edMcBDCiM9XM5UaaFxmJybN4bSBUWFQTDh9V47EBCyjn1tZe53w6kgKiGDhDrzB3KCiHMG2Xc9xPtyJj",
  "key21": "4XwN7K8DSS4GnRhF4YzQR3LWiRTxvwPSdNXQMUdZTDbJqcS1Efd6zrCNU5RhninSGmTAMsTsJ4iRAFjQjhp9kqAu",
  "key22": "3RSyWzvwqwJhXj9X8znqG1uMXK6uBAbTCrMq6WkDEd9T8id9bdtkLomhfsnsQLn6ADhqBW43LkwjUMgHrY1sfLyg",
  "key23": "wSR9a3zCRv5JaVD6EmxHFh7tB332x2jEP7rw1Q5tGqVHGyEUZzKVMYUVAcHf3K7ZJz6tCVT5ZFzYZYmPnkySwZp",
  "key24": "2qQw3Tc1qBDaVpno8Xh2TToaN4WhucPhHQWXm7BjU4FY35fpXn5qSAyNqvkJgs7wN1yJSr5grGU45miNe4y2moJ4",
  "key25": "3YGdJveG8MBV8Y37MJsnSYHxWTsQ1kppqGBsGgUvFSDL2ce1J7FYxFif7EjhjR3prPmoBP5MR1ds3fJ6UaBsZMmE",
  "key26": "FSqgNnqJiJFCvqouUd2FGojMcjkd8qZ1Yx8ktAktT838NYHMeChFYbnvZ9WsZxdFShrqaf74VdtZ4EvxvsY2MEp"
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
