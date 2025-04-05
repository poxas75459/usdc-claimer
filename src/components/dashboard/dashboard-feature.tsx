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
    "3HoMdJWvdd3YMbbEp43HKENwvhcdzZk5QihKbn9CbyxApAGZ557W3S3WZR1jMjaM9rNapt9LVYngreNRRoJwtfyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eSmm2SE6XDBfZShRqL6pGvTdetinWb6hkRE7wfjwdrEi6xpLWH3qCG3wTZBsJS3Zu7YJVPKyjxTkryHEYMEszbZ",
  "key1": "651XaTcBz4DerBkjK3hRcyXxp6ekqAtRtvHw2jFBwMQkahzk5NZu22fJbUCsLrFRYmkLHcFSeTgKcjetWfocke9",
  "key2": "4X5U7wRYRXm4zDswpDf2eM2H6v6fqAEgbN7zaPiio9L9eZvjwTsMJpZ26hZVa8Hkg9EYKdgiYQHhuXTyYvco3BSy",
  "key3": "5amVppow4YJaRQ5NWSv7Wy1RXPAeW9hGRtNie5y3oUZDgq9TRhPyvQJdaHkHf5z1WNiKWcaX7z2PgrAAKV353GGk",
  "key4": "48rC1qKUskkP8NvP6f387CHaKKBtd2xXDdWtjYb9di2TVaReVcGMTHMEjd4ffYb2hAzZCuwj7XjgB8pjjMJVLzT3",
  "key5": "2A9ZDVdoGWgJnyGAtwrx64WHRWyAbCVk9sBsRn6QbtMW6jiwdnuYvGtfrWbhCbBrWL7gBxL9HUHBtT2qoVRzvkpM",
  "key6": "c9W7VvJacShpxEYwCBbndNtBNYkSnRBt2CDWM7QDKEfuX4G3LFmKtCD25tLBEBXZMdLCsCHiJo4LE9SAk8wKebf",
  "key7": "mmGXP9VZnwV5tXCUGE91c7rFLY1QLAi1YLNJAMDJ1LQBVzTpUMthyGfME6PjbvFNjcgqWpF1CremuRGWE6qpcWB",
  "key8": "TAuEqiw6APxE7GpiTdKeqbv5KWR4yVFeQtkWWQ8YpTvwJkdfKQS3H2hfQjufkaDsHmhFhn1zDjJVuiFmwXZbBAA",
  "key9": "5EUpPR5XujHgLnbwokc32KzRPWCsooE6ZGRcLEwgBSgAPwcB6PuWmiAM5NtoSbnTKjTo5nG4iLfmi1ZUvEwZWeBy",
  "key10": "ymUuwoFw6XYtCjvBrttnbe2t5FyjV1VTkEzPdwF8EZi5QQ7UTnYC1BiFMgwPzebdSDHFWsjTAGjFez58CyTmhmP",
  "key11": "cKZjex9GXJZkKvgKMYbaEVUPR8KM6UJcfya1Pyqyj4oZwBvEess6HNEadkCSTXpXDGuqKTfZ16EJriaeHqChqZS",
  "key12": "5h53LZiBJQKnYi8dw6fFRPH5GsQsicrWwNMjXrrLbhyGdv5VJDimfpqFEQ2NXRi1Hp7cWBgZXKBgQAvxFD3uajvW",
  "key13": "LRKiR528FzeCrYFoKrxjEZK17JX5KEbDrLuepGzHDXKCncsk4SZ7QVyvoPYFGu9igRdfaACxk3nE12RHiFRZRHS",
  "key14": "2EvZ9788i6hyyS4uYcZs1YbK8as9xEcd6ySkMLEZgWMHHhHHQVzUmnZQNGiaHzq9yW8Wx4QfZg77xfNxWsZ7oeSj",
  "key15": "51tP2A2yAFLk5ry9mMbH36hfgq8TbJqHGp7ErmnhGNHpQ1Qr9DHwX9WUpePHK7Tuh2Pzt1f7Tjmf635G3zKZHEzX",
  "key16": "35p69qay45B6tBgLTNp1muTMFYvEdSDzV1kY8uLtqyqqx4DABsKzpvRJpzb3zduKVxzPRBPFoAuJ1N9Wg6J53Knr",
  "key17": "2j6xnebPKHw1aw3WBpLfCgtjp7aKtD5bXdEhtEhNqRz78U6HYsYHgqemjusrhP3EqsGHQAgjPLCbpmaqkyjEgA6",
  "key18": "RDSzXCC5DBP5ko667JcUse2JFU7qmx6XXEuAb398Pw5PyXVicm5GB4T4emBCPDr5aBuSftJVwvHraT8pqMgCMYY",
  "key19": "zvg6jVe3uCJfJR8HqwQ3APVWjxidybye9tDHPsmuBhX5EKisnLG7QmDnNELZubTF4S7mzsZypv4p3To1arRsQVP",
  "key20": "3nBqms5ML4GgyN9jH4LE74iQ86ZiC4x5L8f58PXedkUWvVYxQHYmihDWVpnSgSr1YrmNnyanoAYbhhX7zAdURcRP",
  "key21": "3FEsaE1QTcAeWPfbyrsc88C96uu3TdXWgYrwA7qbDKVqoHg5V7eY46bdYEnHXZF3YQmxXw1s8cmMYE1AKxo1QEU9",
  "key22": "4GiLwrxZTG1gzpF5AGPy5UM4jSkBd6v4jxxtwejSHLNAe9yF5wu5r7DCwBNgx619X8EkEJ7YRTCuaJ8tmWdqCLJh",
  "key23": "2ykoqz9jXqqfEahSnwwFBJkX39HLJpoPvcNP4dkATp8e4HmnSbNEyuapB4rGDz96YPDikkTusSyRbFz4Zv6UFTqB",
  "key24": "2x85qz4LkRfz8nqwQgC2zf5fGQDkHrcdAa4zxxqdwuzLLzZo4GygDG2qdynb69BjBmjTyUHxvDycidHabs55zVf",
  "key25": "UNvRDBar2tF1s5RA77huKFVQNPXENv6R8XBvXtFiQcPmqTwX23KeSXeuMyjWxXWFG5LVBgtytwnUmEvpLsYgFnY",
  "key26": "3e56ruRojw83FiUxE4tiKaygCBA5hEJKh5B3uDS2kfa75sKU7e4qZtmui2ZybWBN4Gpiz7vNQtLjbTQi6JpyNxHo",
  "key27": "eCQu53C7NrsMsCr9AyNS8vnyVncLyh9SxR75uzEkSE7SjDqASUUySD3SJ5AKW47hjFnoVTqS6eUgmnpCbMpFAX1",
  "key28": "yMEE1EmusckSsbstsLDvbwXWJgX7LWnfuxSPYiYhBzQvEPBwF8Gx1wzLd1q2ZrvVYxcKGdmVbpu8YqNVGu1gWPT",
  "key29": "5JS1CZAKCAF9tTFPxLn6evNqENhS42ExvsVqPDPHFvryfDVTz7wwt3oBb8z8kN2Ds6GFDco8kb6s5GAmC1rWXBTS",
  "key30": "8mKzxvbBVefGzNBPKAAatfyW5kXnzEATPLJhUJa92jmq8K7GkU9Xm7aKPFWHV44qPDZnh8andRQFWjrg3cSmbuY",
  "key31": "3HCztTAa6FZ5dSLr7JEJx34uiPfHxEbeoT7Aw2YJmQVMFvJgmsffZ3TuH1cMGmiXTCgsKDbNn75Nw9qdCAgwULc8",
  "key32": "2mY7EwvjB9jJUsntKK7piUbV3ob2CyCkY9WbFPRaNs2wwtcWxH695VE2k21bCtBr8VjaMFy5poPe58uU1dik8u5q",
  "key33": "3t1CBbeiKefDsYiQrWMDkJ61gnLFmU2W4ZQBueqRP7gFcbb8rdixYqLV27wSox5mME9192fdTgaGyqWcDTYRW1pS",
  "key34": "5FgbzkGmwm9Djpe1fhJkL2U4Q4TT81FGXP6CkYyGEVEDGoFkEDPr9ktZpJYGEDfACbT3JXPxFdrhF6X4mdJgRiSr",
  "key35": "3TTAyqSeawKRBsyf885igRfMYrK2Mw27MkRsCMPDSqtUtuJqy74eUW5WFsoSwnhodL2Dm975JAvWM43hypc8PMzf"
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
