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
    "dQdtAbSRHZTBB7ULwcgrAiUzfyXwN85CGaYv2V1yWbGhfPxhz2WVfMpnUVDYQwjPnhciE3ALRKd9f8onzwtRhQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hNsBkzuQpXyjnL3sJ5hqhJ8guLXu5ynuwwhkGmjt4322YWhk5pe7PgxKhBBuTMrL7EjyKGywUv3WN2X8hKtnwnQ",
  "key1": "eTeXtUanL9VPu2pZPpwHowhXnA6qwffuax3eV1sM7EBFs5Pw75AvMryq3oeHHGUXZajHACtJWq8dfaYMCsCQbkM",
  "key2": "zEhjpJJQh8tnzJF2MBvQ1dAKuDbiWA35akHDWMaf18JJtHTnw3XmD1H1FgzTqXmCdLpUMLgfbBF68jVEjCZQ6uo",
  "key3": "2JGnK2xGqRdopjfnoWgFx77YpEKvUuqRiACs5Cn6xuiZ9fwHJWdxvg5kS74neWXRhxQM9TcE5fqN8ZfMzK5KG5hV",
  "key4": "5dcGFVutKoTvVUNDrAGUmQ3TFPWZvRVGtzoeyAp8uAHTZxtBhiQEwbtjdmsreQFRtSHombzGqiQsCqAkv8AKCok5",
  "key5": "43KXXrk2uHC61oEUowSk4CWUHmH2Nmta6hNhYBFLmwThx9BJYXq9imJkqanYb8LbpqADS8eTmpmhLNVsL4tcNY6G",
  "key6": "5jcd68NCpffPVmK3Hn8KonBPBiQ7qnwq9kwr7iup79H3GGBecEyqefVXV7kcz9BM5btc1jQ8X5LNFQrrdu64Ad42",
  "key7": "2oxJkJDxdk1TsNsE6pWxFXU4uY48vCfopWSZjYBvjtRZ7EWchrghjBuNC86fCuYwbcfFhbopmg71RhKAMeYrraY6",
  "key8": "A6wD9GQFDVN8JtNMYn1noK5H5LYsMkwJEh1L3sXDi3J4btT2R8TUj8dABdjQX4ZFWE2ntc2njkao6BE8RDi895M",
  "key9": "59DQfM3ezRD9GrLV6kCiQbtLVWxpwpYehhBZ2ujYwPdZ5qkvUzTdhN8tveTiKHGQhv9fAuc39367QH8RquTZnFy5",
  "key10": "46yghRJFJVfU9mnq3wJepQ5ufLfSvHp4NuDCDigA4o2rGJkRXsCNSwDAyMNgsfseWxZaBcXvJy9pztpKCF82BFzY",
  "key11": "2DDC5Rv3DAaqp8Unb99nnBcSGmnPeGfqY88Z6eJNi6fZk4AaJao53941b2uDJCeyedtZHwtAzuS5wDD9h3EtKX9G",
  "key12": "3FhVuzyhzw4Qn3urdReRd2wkY2La1iqU1JyomqZeL9Yk7QshmsfUan395iS7Bjo1GDDi2axw8e7epAtngdSs9fVZ",
  "key13": "3B5ANM9oPMvSMbfAS5aHY3S65xSVfaUC1Y17Hknoug1h6epDiJjnvEB1MRXygHMcwSokn4jxxyprqpyS3Bvn4pj8",
  "key14": "3KsAMuaPF3nCCC3932We2azSZZ6oStLjRoJuqwtVLUqQFEVNVbmrwJ8DZBvm9TmaPRz6PX7Nnk1jKEGbprqmKoCd",
  "key15": "p5t1yvWA1cX68dUg11CyME2rTyosL38ekM3MN4iEEGgVJjfA4mNBGdQwg75u6yciKAe8WDHJNbMqDq85ZQkTFn5",
  "key16": "4ntrW1N7L9aSxi6b4bU4vSSvGLFh4Bz1ubs1A9bF8WzGBX1X5JxFfiFKdtBS4f1rQk7Ppo7HVYQs589qoFA5mszX",
  "key17": "5M917MhLesWKjfQFj47jDPvwHGpMcJywyvWv1UiHgXgVTJS4Mxuva2PBeAv25CX56xR5QpHbKmgJ3hHvNG8DHHRQ",
  "key18": "5UnkjyyK2PK19K4zWvEyV7qEZ13rttudQGjK5RKztysboK2xLCWumm44frbBq8n9NkQfaNfHLFbPfw8cFshnbh9w",
  "key19": "5nHHjtBGcjkTpaXeVTcStUKbepehreFB3CXjyQ5ZdPGNDd3gE9vMyqWmrjRkDrsZrvFzDibZRfriMjRvMRZE8E1",
  "key20": "4tYvBTxeiWvB2bRrkZZ44juEEP11duAigqM3KjzsQtGvvhzWYqT4HAutRnn8M3oSpPmr6KzarC88XHEAHMiQcF9T",
  "key21": "6ej5kvUeMcx1heVMq5ZH36ze3H4gEnB634JBLhB5sTPRSFh3SQn6U5vWaSVeE94bRxbZaL5FLxF8s7zc7haV9S7",
  "key22": "3ybzBH3XEKoBSCDpPASDabgjSvj5Dn71N4xGfLxyEQFqDyvytqnoP3c9fpTQVs9M6vJuP8McrFWCZASabhdZ6FFH",
  "key23": "3PKyTnh4Z1mAfUZTrpfDMvSKXK4W17iR6T75n5eyKGkNB7zSS54SURamgSEWRmceWkQSs5Lzjfzi1i4i6XRTWKJw",
  "key24": "5VyL1ftXtWn3vPzN7foky7t1YcUyimJ5wbTNgoKHTT3NWQoiJ1YxkLiR8F5Y9YWpAUNyazVYBxPjZUqYWUPuebbL",
  "key25": "3Z9vRpfHJghteaGR4HywWiEEXBWtVsA8GJ7v4pDMqdL6CQB6nqJqQMcduwXWLjmzyKLbSC8e4sERA6JQpzfiV1Yn",
  "key26": "5MkZ5CqEJnTU1EmSWgENw5duvccTuk2W1ThCaJ4VWtDWYku1H59HTYnitEDRii6eZCrAd1VrJTnqQUqKjtLWcu2M",
  "key27": "5XhZwAyo1jZdcSePjTQvVigtVoXes5uLaDDE4pq2AFf7N8sijwUsXHkseP3JGg4aevoUCUDCTPXowjj94w3RCYpt",
  "key28": "5qA3gY4Dig9KFBB4B2piDn3tNfVoaWqeivHookRZKcwhDsYgg6aGpfYzhn9YfwthgQRrn25fqD4pRU5Cy5xfscy6",
  "key29": "2aqHRe44k6feYcHoh3mQicHUry8GNoLeHFEKw2U62aGeGADkDiDKNhfK1wzG1johodWdpDAuGdTgcEnffmgdyJr7",
  "key30": "5mfzUMhDQryMpWMSvxUfLN9QjBfWyiY1faQZhDf2rCigcroN8azQBjPw3TA2owJPYSvEYbu2ZKbvr4fjfuyxr2tJ"
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
