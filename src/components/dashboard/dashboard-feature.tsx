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
    "hY13AvGWRPdCXRQuNWuaspJaSLhgRRpJ98H7So5Db6CCCsBVgPoRJe2LdH3j5oekaZfcZCaLxG5HVH1cbkiZfx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k1qdwcUVD9x3TntVji8oZAXNnfiCDHhduzDiyNtPPpzc8j2JN9kfFaseH3UBsD783rTQN7Jv9nqGrnav87kAm5L",
  "key1": "31VRUSPPq1Gs5T5YvqTewTF3VeZ5nN6swKvB1a9hNw7jhzWDpx2f1prmxYy2ZrKPgib1i7s1CuptPEuZXCtP2qm7",
  "key2": "R36NnPNyrLhDJB9BuyD5igR1YkeeGNScKvYYGkLni6XwwfSt5RpYn4K1ZAZ8peVz6aPtNrxrTP97X7bTyZbtkM4",
  "key3": "3G7MMFGXqXpmnRVhsq3othfhQ3Xo2XZ9hwq2LdxM83KNyVfYRzJf3gcJucbrarWT4fA9gGf7wSmFq3vm52EhM8o3",
  "key4": "5QRU63Wsvfgf6dnB7zNN6m1zZzQWGvpqb8dar9fs7hKWowRtzBwdqvJSh1RobGKqc4eGwSMLEeKx8NWzaGCAoqUj",
  "key5": "2WGzpEdU9mDXLZEVHk2Dg6kpB75hjjmQb781pbMGvwiVbEUeRXkj1L53AMS6L4rL6rvkk9Ep2cNrW7gdqA4m4AJr",
  "key6": "2Rix9iyTL82jhhRwcpAoTopBPt6kkSrXD5DtSDUc1HS4Rq4KKjp25rVJNgATstAv876SeGHgFLLPTuQr3jnns7oY",
  "key7": "HqMS1PX31fbwvn2X3q1G78CeGoqA9cZNgRsThHqE1yCtGG8Sy9cWTiAcBEhDsSm3dAuNKiefFhGaZe3hyKFXY3F",
  "key8": "51GNSJ1sfJZsPcTH8gYTnqpPCS1LcGCCtpzggDsR4FDicqq6LH7qi2MuqwWSa2hK6q2anFevYEoKmUoj5aSq7DyY",
  "key9": "azVGRyjSqgFW1GwbFc6uu2u95qzdx9PgDMCU2sV4APzE85y1jR6MKNEDUbbtgG1kwRaaGDod9GkTpWqh3ytZ16C",
  "key10": "4FEHU7FCU6v2AER2TSPWoAsjPfnP9xtfMYwPpmvFgHwKtAakT9xeLgfMz5JvG96upRaTAiTsfsdfDnUwkpPN7Bq",
  "key11": "4G7Zgxd5cyiC1N6j1P4eK9iwTFmawNnUt67yZxrXog5J8UqpKX9ACjrYh2L4BnDi72NNwwf9sgyFUF93wGcv4G4w",
  "key12": "P1dkVvY2JccSWUG7jVwWD3qetpPJgKRVn1qMRY2j62qVfyxq36JMDkCgBTdiUnF6jHZswLjZo7FCSoi64FBoUMo",
  "key13": "23CFbUnV5Ckkg5RvVq4DdG9TC2qui24ANZFbepMBQR3LG8iaQqEH4DNxYXQE4Gb392BRwCG5occhMu9Z9tssPLAw",
  "key14": "eYgHnbUsYXACuA3iSYdd4xWLMGit21a4PKhurx7tQCt8LE4S86NTshnM6PD1UkZQvPMs1mK2YQjod5ML5XNaPAN",
  "key15": "4cX8qxttgLL7XTt8ShHR323PqGruVJbRLUxqmPEFQZhBiXzi6NrkEBJzTFQd27LEd2pMZdmriQj7iZGMrNefFrPX",
  "key16": "4tSg1rtztdZtb5FQX5wiqsZoqw9AYakayyLAoT9MeCD3zv9tyiV4r3tNyEkKbEx1MDxRxXRFxeC3RDv7G3haSmWd",
  "key17": "V7rdPjfeW3QEDRNenJb3u669ryyRzXZrWfvQ9LBN4SSdJyJbHnhRBPdT5nDXqdGuNy7pduikHtZt8HT5hvbgPDC",
  "key18": "RhKMndW5zZtJXtvBbgwC4kYXSwifhzeV3aQEJTXJxUFuZ4cbsPDzFdJcuTNWhXcuhRqCGBoxCPwsmTtu2L8vDNJ",
  "key19": "5wFrPAPW1x2hhsdjMXvTS2tHEBowYGEym8kvDSABPxiPQVqZZeWZu3w3S1z6C3JeaoVWH89zGheCscNEpuqkUa2o",
  "key20": "5rap5qWmw8L7QNmdQZEoT323YTsgkz2nPF54kG6vQz8QkcSSLWp4sHc1MfncnvkP28fvX8M8bPcuS86VBnoKRDH",
  "key21": "3E1h7Jo6QU6sQt8tFNYQSCbvfhbuLNbC9qU5hyUMRxAcibTdLmsZpqiEEEc2nDZfuceYjXTUuqmWRFazCJZcZ9hM",
  "key22": "23mekW4ySFAs9bh8JG8UTnsoXsZzKrLeUJr9G95FLVgKHazsZ3rCmcd9fb32ohUyNFRPH9zRPhF5Gxue3fWv9v9n",
  "key23": "UND4X9CVHF3BrTPqF7L4Cektokmirqir5qf6JSXLZYpAreXt9XtcqFCbX6nqDQ16YrGEzSLQBywviDpLfnC2wZ6",
  "key24": "khnSa8kzZSbX3fUJiUBao51PvWGjQD2cgxTpngthiA5R8dyDQXifwyxWpCfqsAK3WZjkL4bfv7YFdqk4A8r1FEL",
  "key25": "5TibvgdYM3LfzjDPEyvjsGLn1aGYGcQHuzYEuw8BKkzZ9LbTczS8nsTbtgY5RpaYxxc3FBcqs8E7DtMw1de5AVnn",
  "key26": "28TXvyj7b259e6oSUPswCTkSquuei6cWmpKsDU1RmfKgcrhajR1rk5pD9hZnzexUAjmgQF5e1q7kmTswMFDj5KKC",
  "key27": "3pP7FfwcLssDjuEcRN8jmmoAYEn57ssAFVKya3ddLNdSdjqofFckogU9bNkSc8eubsruV5YyUo82yNzp2PxvzQJA",
  "key28": "2Ej1yC1n8pZvyG5ofB7hrpQmPZJsqsHm95BXXkovVadJGou2k7BqkFecFC2rndmVwDiTznffaACa5ukP6uLSbFkZ",
  "key29": "4KjpCkPEkDcTHSCnvqt7nVfWvesuWNpGoYkRm7yYKD9qxem2e7zoM1yCs1m8N7oPW1pgUJvNZrKTER5u7w2Bmh2",
  "key30": "BtkSp6H2Qoh17qiwJvuEgYD1osTBXhxK4wDTdyVcJiXjVWRQeKQqWwJhU1ERaahp4AQSSbPDTMeB8HCe7pMTiwv",
  "key31": "AnZ7H8Wga8quGkqRkHTDpYxyJx9CxQGerwFMBRztyU9woNaxZ9LWpBpcYwSQRtbzcocoNVjn1M2aZ9zF8JC234U",
  "key32": "3QsuoCqY8soaKXm9PHsuPRodRfzFARKZwRB75hCSen7PSRja5oHQRjPGVYmg3wNK9UvBgLRt5H3rcf9uHTvdA6k6",
  "key33": "4oa3wHhAVQPAjUu7D6ewoBkqUZ2hSdAVqHE7CsjvJq7mx54XcGXDZpg9tQe6SWQ2iEm5yPHCDrfQ8hJUCGZkqooR"
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
