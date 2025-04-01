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
    "433zLgtrRNvKj9JBJ6dji6KwSt2nEQdUDT2uxaDhFFv1DaDoeBRiB5H7o1Ew2bLnTDnMuV69R77fwrwYTvBdW9VJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LYiqnmgs9CQLVPhtLn5cNYMVyGCgiDTvqcCHWoCCQa2pvZYexjJsPHFhB1JuzptWhAsmQEzFcSnBRMXL45tLxxv",
  "key1": "36kv1jygVNCYExyJQXYBm84a96FVZSTfghASv5pphzvkhBTFqX4oPASjkA5ZBgC49TXhSG95MGgJJCqsdFdo9wGH",
  "key2": "4uFVio5PdQjJbrgH2JsNyXbyAbADfseTB8DjVbmd6Ajrn1ZqVmLB1eLN8L25V44swWUYVCXArQHVZt9witamrx7z",
  "key3": "3BCwSPuXxypGmxzVhRfscuAQz6poarK3d8tQaZfgnNZGbiMcHk1dxB7TLXKPu8KUkVfgQVMQsjHvFrhKtsSTKG3z",
  "key4": "5eBsYg5M1vfovAnerWpppvEEbdzxMnTmho8kbZKNJxAj3fKz76BxWuhfHGY37c9dVxrAfTDnoP7fc1ofi4QXPEjZ",
  "key5": "2RD6oiU5DSZrkr9umsNSZvviBKzBuMeiW7Woijnysq6XuaVYuR8Dxvjt3R3XAobEvdJhuxffcdMzfnfXkvGyWMWZ",
  "key6": "3f4kFjK7jbt5YiXdGQDWa3s7NRq8baS1ixtqGMU3CrzndxDQoru7f8eXubqtbDp3Wc1HXASrhT9Z341TAFt9T9aW",
  "key7": "5WoEzMyrGtKFyWbZ4UcUvxo6my9BR1r1kcJivmUPQHjnFS1suQX9xXFv5oX88c86gVdpXXrz4wt9SARVPAddWJFE",
  "key8": "2XMTnb9yc8fnap21QWFwoZo6zu8Bea8pGaYxcgHThnsUpDpXR33LmJa1TNa5u4obRmKrxEN6mnMPWyxghkzmniqJ",
  "key9": "38iJZn81AeKSpth3hy1DfN5NbgqdSq3yCj3fWEsvPTofnSaAuPe4rvJpjVpyqfW3ktz7dXvFirVKut8R3ZCtJEqV",
  "key10": "sLZGRKLwtH1CFGdHfrzsSYaT4Z1W4mxEXuFxqrJFRRBCHvUDPnurUksvR566t56wmv5Tne2FEAT7yGw1oLsQuaQ",
  "key11": "28CMfUD9KNtHRa9ZsCM2E2VzgRtDZUsDbEz5fgeNdysK7Q9KTh9n3HPT8Qz1PV2GRamy8t2ffn4YJS8nNEUhhQka",
  "key12": "4DcmYFshjkxptrHbEnrQB7A9YfxJytxBCWxz3hptJLbzHcQgjSkE1bA2tHjJfBRURDeEG2SG3KSBxhZkhv9SK95o",
  "key13": "5QESfB1rpMwQBKAfro1ndA316u35QhB7EMugnGYjcaLjscEW3QvBdSBe2uBDvcPyLxrAAehQw7CY4W53VaTrEE7w",
  "key14": "AFhjMkNDp5fawWY9TTAgfWU9VRAt2yGdxv7q47fMjm4XYsMW539NRFUncxyskc3GaGUt8PTZ2NkqTJ2Z6FpMRKn",
  "key15": "3adVzES1mdfSmNikSMj8Rt2GUjw38NgZwa7qENUapJnvRphPbATMb7iHMF7t9mrgEnhsH9Y4HEvJggw6g2ydxHcF",
  "key16": "4kF3vE8Rg9idwsTjmNSiwF5vZN9vbbKZoHkN5GphGd5C2makXcz7ycQ7wet8JNKfqfJgnfrcNLrev4etTwEiJyjF",
  "key17": "52ydSyAUAVpuKEkZdfMkrN6tjZMAzncHWHgjxG6if7qkJkmjtSy8nd7CXhvcTTJWkAqzUZhLPXdSaaHjZytZAtyZ",
  "key18": "42in19c6DEYU9g8PQSUgkNTUCyAUKNeWNnfRLc8aM5taXbRH9puv1x4Zd1FBHfM3cMiwUW8mKimq3StbijVMaUQC",
  "key19": "4kdXkEvGtkKz3bzGbK1YcooEzZu6TxZ7TWdshiwDeTK1pN1zaqgBn5qoqLAzx1z6ey6n3BCxSNF11p7WzzVtvToa",
  "key20": "4fvLDtQthxJZSkVQNc17VFQPzonxGu6eWGcz9S46aHYLVWnYP8528DuNeQG8qcA4Gs4ATJso9DA48HSLJ8K7EqJ4",
  "key21": "3BGmZBkppCBzVTMtYnUEcR9aR9xJPvy5s9PoYxfyrSHmEWY4NC51dg2qmABf9gU9cKY9qNbTJvnsiFmNbUszVPht",
  "key22": "2sWtkC6Xfeyb1k9UVhdc48yxF7RNHxYVdPSb65m6h1Qis249UGcyrNm5SYbRmKATX1bU8eG17bHRwXNnNJQ8vd5i",
  "key23": "2udbG1VuLfLKm9bdc3UFdvSjn5TRjNh6UsensujVztsdVEf7FTShLrvQPnx7myLTGGfQ3sopggsvnauF6EWdmBkV",
  "key24": "4FukWvKWsuLRbE5HrzNDbEMTpCaXxixfJaZVVoxyQJ6wsnyXFres7KSyS9jYhN9GH6tod65HEyzzNfr4fH9htdqD",
  "key25": "2oJC4iMXtXYkDUdYsNiiXhY5CghkE9eKenoM3YqMH4ZRt3fmpuzw57sPrYX1F1chc9mNtVmXkDxh3njZvZBMVijb"
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
