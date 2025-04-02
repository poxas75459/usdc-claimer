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
    "AnKDrn6HhgdjSN13sMoSJpWFHiUQs5nFMdKhYjGgy5KuUcW8z8EDb79XAGj4ushfnZG7Hvj3GHSRS92Q8cow6w7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ev8pFWDfyQpDE92DMSBqut1mDSkps9SVpcz2CXbza97Dg97Up9uHZTEgSkwQqMA2zwDCbLtyduuCWhUG7s3UCHy",
  "key1": "646aY21gvoovUszARGoMTp7LwpHZSTDvjhsRWfGQCwuNto1LAKjtdBKQ8AkPgggapJaHpZB2ZHNswRtdG9Ya1fY5",
  "key2": "prVgb6yaiWr7rHebaSuMobn9dJ5syrWEUi8vdeiJaMPTjWKhkqYa8hMwH6JwZVtZXt9aaxSZHYUyKisbmjskcht",
  "key3": "2HNnewPcaXMMMYVwo6wVVY7EEeyfjiREaC8pR1WeAWWkuq52ppYpHD45Ewa15YdFzmfhG9ipCFQuGfJKW6QeCkkn",
  "key4": "5zTXGLJRMyU3KEDqubqGr1vJJkPGENBCBEVs6zd6UNYdo2VJfxREDzQsUWa7PQvimwYyNhgk1N4pCU1daBTVr5KR",
  "key5": "43eNBdGv2Stm1KBCupBAhG52h4NHto9ZFwHetdP8MoNQkB9ZoAWGKui4Yxj8N2398i54EAA6LZFkt9Zt2szyqsCs",
  "key6": "4LE9KU1PMrSGGkshBNdbjAbq9dmwHhR4TdzdTwpcUkTzwZa21UAEDsgt1TirRnB7GdDhnF159a5DHmpomgyDBiaT",
  "key7": "4qK8L9dpooHSxFcA4fxYhyFLHBN8am7eTuAcbanuqWa8vPgK1TMei6A7476XiQSXCqxpZGVtHVhYaLDKLhnXaf5C",
  "key8": "eL1SVB8tNiCS9PyXxqfWkwJLj5fAmDNamu4BqxyqZwfEEQKF2Thhzak8nkxabqbRc9ijnhGDCzNYiog2AeYFbfu",
  "key9": "3EuEYt1uWhqb5A9B7scTQrxLYdBYjedmJJiAttvPaBeCJ1y6na9mkzYoyYhEEEfDn5iGVWLyKto9zKCFGXPQeRRU",
  "key10": "7J5dewpQg2ekupY2Dz48Ygw7rR2b2qLe4ooy7KtTWi8DB4WCYUZr9YEqBrAYdVu1fKLCZSeYmdaLdHVNSUF4D8F",
  "key11": "6fME9iGTAhyaTMKCzHGotVhoCyQHR33CHVzyDon9FnipzaYUXvBJUkyaaEcJuzU6SqmXmzXypurrXokkRgPssTW",
  "key12": "2u5jJ4M8NcAwf878Koc1dYk1aPSfc557TkJUoHQXMCEMFB14D17HmSG59NXCU4Uik7J1nS5xLZmVtxiCmRnzhcZA",
  "key13": "4Hct6chQPLuHVtue9gnFG7SLoFCVYSARGqhWWubujgoHG6kVnX5vipFHHgqgaH6MgVxmHgym4pXtT5K1TCWa3pWy",
  "key14": "2MvTRa1rRvmQtxswk5RyUheJWGxAfuTboSJYtWDyZTP6KKVWGMk6WF7drXghGCm6qJNNgVDJFmbBeoDZWhLUjgyd",
  "key15": "2Whw16yt8Kpfy9LaPbJubZajsookz5shMR5WfmDeNuKwQ2EjfELSD8CREPVUQbdutpwNHjqdc5RaYRtz9ANkSyGp",
  "key16": "2MvL6N2qT9UcEeD4tmdEFLpgVrZ6UuL15H6Sk8Roi3CqsBMEDghXaZBFBhJRBZzAxecBRwcRwd35c47qhkRER9rr",
  "key17": "2bunoz4pojyKkFRRFgMRtoY6QiuYRWDMaHmJfHnUg2TAod6qzNj4443oqnQhHy7oTcDTdqDafZhcEHj7xsvkERcZ",
  "key18": "3fCc26RPVsTcSTcFj6JJgD57pSh4fzaFdYNyyLuvxTgqxG5o3U7J2wMfeDDZg1TQjD2EFtnVY412859yAdNoyELP",
  "key19": "4kUCfTqs7d1EpgjMpzHaL4z4hizJEaZR3cryhtMyZ29aJDV5z7xKyjusExMpz1G2uwsWpaye7cjX1d8yYfZoKteF",
  "key20": "58AyDT1PN7ReLp5N15rX8zKRNVBuf4NFLNqQvenriQoXnhaDcbFfqbEjiV9Fv9ibg5HUbwZ7NuKEFe1KPweYUD19",
  "key21": "bgpi2n4y8aRfTAN4ngHnqDJDQWayHfGWypPB39syK83UypwWRnyN4scGmVekMfnJjtZCDcqjhkreWFhd7NfXGnM",
  "key22": "22RicsXgQcHhm9efXtjWVoy8iZtkGXJyyU8RxMhc9sJVvpcoR7C2jkiJsyn7d6iNjiLJBGenUEAFAQNXjjy5t3CP",
  "key23": "59CDSEM4QnbvoBbo96s5xWt7xhQWdGAdqyjtcAS9P9aiTVfuQpJ9LXwBvyRREMLkv1KerhoobYmKG2M7PjXYioSy",
  "key24": "4VfXVEmbgQoCgvWniLHLUDTwLLPsczLwzWujUDeyUqyMXZCgqNzfsSmtLSPuHwEZYxjwhCRpDiZ5UoaefBsNQnMN",
  "key25": "4bBcYew6p29n8HLL8YxeNjBvfvwWf7UocnTQd8Ai7HMpcu9vVR1HrhaM7XUuVGv3S2BN7EfoAdQ7WUs3qyTR8sgb",
  "key26": "2Qz6gSHT6LdGJhc8EeBNuV6s9ex1ozsWxCLEYmjUCZ4Z8QuYsVhKEdXpDWLypiXTyHhrmLTcmTUVYBPPPrqjRfKn",
  "key27": "3aqDgW5Pi9RWSNko9uq3GpEP89gdfyPBzAKJeGdxwcUheKazR5JdzS5KG31Kz26EJHoYgpQAfR8R9UaBPF8yrrV1"
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
