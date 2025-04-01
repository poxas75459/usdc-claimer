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
    "3dLBa94gFsnR2hFnaHvsTZUNFkhPwaymE717RwXbSERbPnDUHxyD5v58sWMNKNTMxoEeE8Hr6ibJchHgbXsP1Hun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HZh7WJrgEsRV1Y3RstaUYZm7FihS9usRHFLseyxndVwMNArTTUuuBxaDjWAwabsNZqHpWA49tpabT1XFwN8hBp3",
  "key1": "22WinCszXQf5ZfptXQY8V7feEaT6qKREof2534MWnSzcriDm1w9aq32uuSgnXfpmhnvXEhsJW9qCnxwuqVVihYLj",
  "key2": "52xXnmeg2ZrGVb8gP6EYmCgTM8CBmJFrot1JQMjP3YyR7xQm1n1cv4ZbhCGeqxabu32pGXe8ZfyG4qaHUfvDbzHY",
  "key3": "2GUCBzxwNUttizhCW27tGDb1RbkXvStyMJB9NrvjuJQhUw7JuVpRd1CDCBwobsL3jEoNF7jq4yvg98NyqiAuo8AE",
  "key4": "34Mib3m6hb28vJgJuGNMmvwBje7M8fJq3aQWmxvzsr29e9k5Lfkf4pAmxuf1qf5dC65UK9i6GfzSNyD39i2UNYvh",
  "key5": "ZZGzS317T5yVsqGNauhYC5aVuEZVn4YBt228AsxNn4LBpTVYb92UQ6JCew2XQ59ciYwaiAi5jddnUqcYyfQuK2Z",
  "key6": "4WQLDpH1LYAzfPNQBzPWmHxo4QSnfyVEEbfCiVeYHP7mqPViAefnfgcNUwvV9heXqUtJZDC9Y6yqkEkVxE6qm46d",
  "key7": "5AH11FgSKGrWQR4V9hoVoqKmWXwTvLZuJ8H7JHTinjsrL24PsWVw3NLVKXuUoT2wJf4JB9DAr9X6LDaABcoFSjzH",
  "key8": "2ZqXQ7LpTvopdtBvL7XzhSoru263sMT9BuAWgJovSAk4JB1BdNHMH5Vn7TRkqCQAccdT8SFWCRS9biRUNTxoS5WH",
  "key9": "7RCapZ38HxuE54hMmGomjGPKQYNPGcFLxQUywLMSBwFFnZeY7xUCcvjj9NA7CcJmw7rvcgTTkNmK3TEcbPAjBX4",
  "key10": "4uad2LbAvRKGyiWL4oELJsefrHow68Y1Kyt7VcLZgBDtPTTnnoP9Vjp7n12BybTSqWEfATJ2uhyZAKMwsrLMwK45",
  "key11": "VHea3iRL7QHSX1gsXKVWFT5CpsX1ta2FCxWLsg4YwNtFgftpRCfk8bahtPAArdLUo4BU8XgH8BmktooeSuGpYkk",
  "key12": "3cAkLR65DUVReVMEZRWa4pRBRupiN1PkoYfcLLsNMpgaPUdXAeRdLHhDAHTX7iZBcRaYrEqpZY28EjNuaV7vP18s",
  "key13": "MuKxiRfqG9A8ym1Qv8LmGh6UPdUggfoUD8Vtn1gM1TT5Zkr3MVFqyxbEaWXTDQq5xBordkVhoRTmknVuoxGNUgM",
  "key14": "5kxvuLbZUjzApPgsmNFezTQBwu6yWALoERfijSvvZE1n1n73Bh8GvHpFBw6nS16jtoUii3tvLxnzSoTCpxnniZRQ",
  "key15": "5WpeJAzcxapEZmLf8jYZCMGV5DiV6AH1bcknU1niTnYMjBmpmEwQu99aauj2ouYv2U1egDKFrvnbJLVv9EgyeZCQ",
  "key16": "64KMkM2NNtWNskC47atMuutR45gkdmGeETK2Vf2PuqGVFrqv9vxs1mmHh4DDRx6UoJiA6uxEnVksZ41mkC99CvaQ",
  "key17": "crUAoxPuyLde9uH5R1mkDiU43iFtLxB4LCGxx9prVKSkrwT6VhTnSxH93CqNo3FSaiQh9G94ZmMggMi8j4SfZH5",
  "key18": "3iVK3jTe7tyosZgTUcDsGcL1B5Rkk1SF4wkXSehgfJ6NQewHW8zxxnq72CjyF2TrZKPEhvXtnZG7dRCCbmdzrRm9",
  "key19": "5oPqHDzbrU2cb9BTihEtQMpuE2mh6QVYLGSft5Zz42D3BAkzgNmJ7qg3eeoxUDGtvbBLSemexGWBRNFocVXpyzXe",
  "key20": "3RRoG5wDxHGi6XmbWZsJv5zdoYC8jXaBBq7iKLJPigK6CpvH7hoKnoqZR8Nq7obWfzqxngyH9KA6A9ohqecRR9LH",
  "key21": "4a5EUeEXKAYA6cAakk4gCRwruaVPrMLRz54rSG4hHXozEN1qyXdeSqU3eXe7izNv2aHkBcDZKknKvwvWDfYpT9dJ",
  "key22": "3gPSXqRBvZigg3MUCxfaEBNdmhFadXyqooxe2JQuhgkrLuWVeNGKqEFWv6dYqrJvhYA3q8ahHpYyoYMtKUCDQuix",
  "key23": "9syqQHBALsP28RfexfUm8K9gx6JxVmrtSYe8j9SKyjqFETLtKHBwhMkJLj11ZgRWhd77frrvBEoNfwXD25AWRFP",
  "key24": "3nAvQQPUqhRG8LC3Ty1puM1TVoqb6e75PA3ujvs7jRFHnbG7A74Jr4t4PozQh4itbSnia8Jk29JJjqXEV471wboL",
  "key25": "wrL69JfFyyqZfMutPzUnQpdyXoor7wm6aMQzCErGtYtMpQWs1ZDePT7Gu7MUFHR6F5UHz3dDw7Z7UyttKv4VwX3",
  "key26": "4J94RXTK5bnfQcXECx8vyaTETXwHPahVU9y8ogA2Rqg8gbprGJSgp5HPjHspoiqRZTAFzADxpuNjEW9RdWAEH7TW",
  "key27": "9QUFiG5hVYA1SAwK3VJ2FBrmh4aMCwx1bt5iA3pWwpHk1x4GiKeac5kg2AskKNHRQ6qBzB3yUaiaLWnYSL16RFS",
  "key28": "4kPFUhCTR2NUrqYsH34sSPeRffJv4euPmwwV1FSV4ZvsFzYKt4GCuaW2soPenDH3PKuE4sVBy27AEMwyRLtVbiBZ",
  "key29": "ua59PVU7xtWnAbf57yHsqbk3Ha8RnZrqQVQm1fUT5VvZtDe7rihBUZni27no7SpVHAkBhydi1jNNfGv69KV6hQ6",
  "key30": "3kYAG9zvY3Dfzxci4jURvKLRmn1TEXEC3FZgDWhWuK495tmcuAErzUjged1YD8MP7LBDB6ZwqsVuzv4JuUNiD4B4",
  "key31": "2i2NKsc7ENmiR1wbXhi84mX8rTBksW4btZrzikmxVk7YC2HDGeCkACvheF2oaEAF1vCBG55HjNwaxL8krEUGgWas"
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
