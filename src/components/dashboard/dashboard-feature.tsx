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
    "3LYSvYhXDzh1KjPVgrfwRjsV55gpFyCHEpFtuzRynbATV1dnvsKfyWwZnCinRMSMJRLw26LXpA1MTjuotsJideai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dq7dgVvYw2U91ofts8Suby3tCF4pCFwSvRXStqqVCew9jVCtWRwBaMutYqwCvjin1YqDqehgG7jnCfi8n5PRtuE",
  "key1": "22HxeKuug6RdErQJ5rNLJDB5yHNaziSRPg7brJCHbTn8wHGBfFEQ5YPNM67uYhxbHsKRWEWZW5skALK5iafCPvoc",
  "key2": "3dUhQFsZTrEJJhtdrASHc7rag5W7DwskyZf7YPShfsW1cYenEhfYEdjKjT4ymS5jb5HSt4RA81bZwWKmBmn8rSkt",
  "key3": "3CGwMGWSWSA7J1R2JnJqLqfLCdeZQsiCnNbfHzodg4GvKK6rsPqEUJA9XqbqL62iTzE5StXMtz5qqLjfcYBJUAU6",
  "key4": "4iMdcKhbc25HmifmEY4RGTEHiZgsNTaCcYCDqhSWm6K4sio3SE4cB9kjeuQvMLJXdJLfxqKWthix9By4FCeLg5rr",
  "key5": "4ouigdwe5Ji2eH7JpBE9hyyfKqKm4uGKXjCiSEFx7dFDjVuqY36XgtAp9xc2yc8QbGsHQ5L4umN6EG7nDWMTWnE8",
  "key6": "k55EDNTwh4KuSudsziZCXgBeSn6cba9YbVGeRDYmtgNtPVEHSfAtzcSB8V81kMenQ76W8MNBmN3uCVWqNrhd2Dm",
  "key7": "3t27CdJFJKfzLG4SzeyhvxMAug4g3FCfFquXjiM49t3DBbmsVV5Av1Gn37Vyncrpm3gYD9iLiZemuSxvLNdy7uZt",
  "key8": "2v9uX4Ft1dtLE8NjFxGzihvf86jFPZ4DgiDsnyeSckwmJF6TFG3nDLTZPXTxcgMBe1xPpf4chPf3tYtBpdjDjqYu",
  "key9": "2x3L22QtgYY6eWybwa243DgKYxqBxsDJQtFoq1GVXLpQ1YbXZjNmLs48xK3RHZJoGbys1E2WYF7i4TbQac8cPEuH",
  "key10": "4L9f5CbAmns1pbjzqGbQEAShX5s1exrwHna72FskUCNs3teWXppj7JouWXxz9sGxHwN7q8PECjBtaBt9CCExL5ir",
  "key11": "3LhAhxZQxPU2xWt3oz3yaDbVowZyhjUDFZErTnrquyWcqKeK6RrLw42P9RDX5RouNNrb1hRtDxeqKWAUaYA7Nq3v",
  "key12": "E6WK4Nmpi7WWaBSaWCjC8uyWNBVdSmUN8xzzkBwkc7YKHF7orqUAoX4h784fBvf7LrVxUFs9msDCgBjeHFsUTLG",
  "key13": "4fh7AS9TwwMAoAdg4fz8fhfXC1MTF1ja87P2Ww3nashMoUi5pfACdF9U3qb5bfpNkNb8sYX1qfHPtKW8kP6y5uxd",
  "key14": "2fa6mk6ozqTgduxKaaL9Z8E7FzAEWENQahEboS2PcWkZ6ytYMkFgjeTzrcwfnKWjLEzZFC3AEVhEdqbv8r1gmqhZ",
  "key15": "4W8boEwA5sFnA2tdA8pLsvWi67dogjcqtEUTwtbbYLsFjwokuUo533VoXZfSc2gWQyLnf36RynsWq7W82Be9oPZo",
  "key16": "3QvrGFx1Q2LdjHW8WjJZX9d4zNtgQgPuP4dcG7XHAwhEaN1q3wStUw5WhkLWxjrvBypehM46A7BvexcFHUNmfUem",
  "key17": "wEesKc681CAAbPjXSNfGRHzpJkj1imTr61Gyp5K3iC9SNo5ppKW8gmjsec7y55YgMr2wzmM9jYUFCESNgt28NJu",
  "key18": "5MTcicvxphVEPfnqQ9gj4dN65NT1eU81tDMi3kccxUmVDzpBSoGeV87vXxLdhe9BqYGVNiLZVF9EXoT75ofeQZBw",
  "key19": "5vSdESpJfUZUDhaXx7hrXV969twNShAL31YRUnewzSvVTyRNikBt1US9Bf2KH9wrmHjztYpsdwPCe2Jj6UbXgHSe",
  "key20": "5whhLhJuYPBCaoMfRWUvCzUhzavoeRC76b8bJrF6xdirgPaYGTyXZm54i1PVbJN6LK11sjuAoTQoqFH7NmuiWmTj",
  "key21": "LKBvX4aWv2Pvkih9Zqhr5JfeQNu12e8PNQa51ms6G45qaQL9rRwQ4U2oaLsZZ7DzuBRPnnNoc3RkMy1znYE7mKy",
  "key22": "5UpYbn8SqLFx9qGnw5GqGb3Co986FtTiPU3vGd3evfTYBQyz7MyaDviSVfH4z5m7a3UaF8djarNtuDS1Wv7pQpPt",
  "key23": "2XRzf943oHVhMP7LUDvn25BcK8ZcggqwDeGghFwkRRhYkM5WCmxZQ24uAPpN3WPUC9LF9EQDRjRfiApuc5Rqff8q",
  "key24": "3wb2BarLo48H9N1LP3aJEzmCiSYcj3keXfCUL11LdjNTLZpyE8Qcg25kvuXegwW1bN1TwYXPdWCQkafUpgh6WQmL"
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
