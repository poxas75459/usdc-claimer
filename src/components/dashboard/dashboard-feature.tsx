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
    "CaY46R8x1hm5QWJhkEjS5N9KaEk4TPF89KJerBDwh5ZoDiuuz3N6R1V4XwzsKLT1GsWyRvAEnkRUHtMXd8oCbyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ugwq246i1E9HyZBk1AmRQ9DAqFzHpNEqXVAKCT5tBDmptSEatcCNJXFmtBJDNZrYXahT6YFBr7bh8dvXdVUdZ4P",
  "key1": "43ZhdgPAkrHujrCsLFUciiH2djnCGQL5resjbTV8CmaHzqoEpBBDWC6hDDJK3n7n3sihgijGW58hsmAxsXhU7FNJ",
  "key2": "5YGRNz3JdNENu5BACSzrQJXHr3QaoMc8uF3Bwg3KGxKzkfJq15tNQX2RwcDEE7Fczvj47xE4uTfy7FrdLGFoijwD",
  "key3": "GJHKuFZX6PLyC6gXCzB27uEom8qrwpU6rdPGxooYtA9VSh9CnhpmKay8YuCxLQy6DA7XMncMpfj77NqJtTpj8SA",
  "key4": "2ZnCRaeStkkKu8JWJEtDYyXzXhXjEawEBsR419F5moasdmyxgN81DJzmCVAiWsvVwApfGDAXDD57buuhmFUSHYBh",
  "key5": "5TnJNU3yUyBiTRrD8RHkqZvP9rqVxTUi4mGEF8z2i2Jfh3PjmrLeVd7xFieEaVQ7KppboJqCWAdLCrpd1bXR932z",
  "key6": "2oLt84bchjMyPtZ1skDVT1mM1zrdwLo8oZGf81yNzyTJKjpCwtwvEtujcRHesXWqhgh3mQFpbgtCfYvqp467zPpf",
  "key7": "RmBBxGrdaTPgKHSdi8xLX5nVR3vGkY7dU4FvCagcBHn7x2xuMKzogjawEgrkQo5jiPGJSEnCK1GkmAfDk2gsAbU",
  "key8": "2s2faKLZ5kHEkw494CcoXerXNM6B4ADboT7Hh7k8VuHgosxPTtcvPYrebAA3eyQYMz9wrQYmuoN1WecukNSnjMSi",
  "key9": "2SuLaLSu8GkgPAgXjkf4DNLH1bK933SCPzRCL4gNTeacDqh1pDZZUaHY9NS52NjzNoCWD56h6PM6qN9rfXJTXnri",
  "key10": "2krZVthWVuqhaB86MyheYFSg8ZijtvtFqnThjmddfRFY411scTKkyz23Wpv8ND9nB7Se9CnmicWDzxdet8j5cfjL",
  "key11": "5rN4yxNqfi8xPPswdaYbWaXeRfXP5QLwFi61qmqD1i3TbZQCHsv3ADcqHgbohX9Gb1uNjxzhiEmw7oLpAUdGUTqL",
  "key12": "5mJLrfquojoaxXnJ6KM7LTQwLd8Dc7mtUacS6iX9VVQsHYJtocbYCwGDMg78NBKY83KKAC14bpmTJ6cR5LDiuoVh",
  "key13": "2ugjduXaCCyo9U9rKT9TryzGWXBrNe6d7uQjhkvny7qA9YKKNSMSSn4QKcKj4fk29qEh9gxwzWFX96sShbvbcEk2",
  "key14": "H3nHwX1JL7tpCDy6qThhS88KKDAouMyvaMijbhJDaWVhykFYZQEnpvQ7TJZzRtaaNbW2UALfHKYe5xqD2cCS1PM",
  "key15": "5rGkoC6xV6Nes65o2R94bwP1WW8c3ywrfktdK14Laz63CXM1cBgunK54JgLQ2zpm5zARkHuwkgSPo7kLGBmVYA6L",
  "key16": "3twhE9HBdcKZoVNvnUDA8CNA6uNDtkGKdBQ8LEYpC2RrrRZdC9Z5ujgNiNtwH5hNZNa7SMMj7Fj6RnDKuwgF9rYL",
  "key17": "22jSqKWzBLpV5EXgM1p6kUcyRnQpF7rLwbUFKFf7DH62BWqWWLAn1saLMm4fVmYDLS46PrJqkQueTJGt4RUB4CtB",
  "key18": "2EhyUw64wfjBBgbTTz1WsmcKTgc3Mf4yp6ZWsbTSeE5tGUsEfJH5t5pyUFWjwimV3N9bAe867EGRshhKX32JfRDG",
  "key19": "2JdaYsBeaxshb3LBZNHgCLPwZad3qRLfmFDxQWEGUSQoTSL5ichzrpWBmkc9qgxoHnf1EzzorbSmzAXT46jHR2QX",
  "key20": "vg1nmd39i9dj2SPSL1ecyZaBo9KkPH3UHwX4J3toSfdbkaYBYnZ6Tm6iZgrrwsZ1teWjFs9SLEdigp4JB9MP1V6",
  "key21": "2AKchciR1FpVYofyu7oKPdQQYa2UZq1akpf7iVGUntpSj2ABbwt65LvzKUBHb9ETJDKJGHkRG8JB4Axn7WJYq2z4",
  "key22": "24opa2eisUsDwtkUdcEyi471hrCoZ2HaAqkoc1S9Qpq52uGUNajwsUjhGpfNoAcef148Fiiayd4FNRrKZhSQqNuX",
  "key23": "5a7rLRLSkeCkSrc8bVNvMATwkNCTJUEHDov31tQmpcY9a9TW5e9nkZvuEHrs3NmsptkpyicMDj3a6ktCf5ui1xKZ",
  "key24": "5WTKMVuwsHhazFRG9pDS8RCrtMGYXmysShghcREufRCESo198LTvzdKGi3bgTYtfWNtTmC7eAvRcqPhESqc4gkDr",
  "key25": "33qn9q7tpqZiyiamFRveg7sp6hrM9qyoo4Z8zB5QQEYejw7rZspEWNyRtcUsmsBujYNAFxkgcA4Wa5JvmWEpb6iB",
  "key26": "5UBAMgwC6pLBG3sFaYgnp4gNxacQ3LbjdDfk39C6A1YiEmeFwtm1QnAu1Ap6yLApGknoVzvw1U1qvMJ3zSZdJHAY",
  "key27": "4EDcetYVo5b9d5UojEtVyC78h2dBJTreGXzjqJvMfb82t7o9YtQxJs2T8aBa6V8PeY362JgTUx59qj7BPjykKacP",
  "key28": "4hbyGYtH5tkxYBMGfextt45qyqMfCyVtCfJXCMtAhFA4GyBWaWXt4RTBEY7dWiTNKe1hdvYZTp5iFxBgAxjQxMZi",
  "key29": "3LzJ99G57W8cnefxPhZZzZkLD34m9aLgf8z46CQgFcfzUYQKzpbCBxGHHe4UfzPvJJhtpE822UiP6jYDJ9PtKkPN",
  "key30": "3ChtP7gnPzKstfuNuhv3hzar7mZijdAauCHUQgr5TSULEAxXzQjJTF5UN7SnKqsauXgdGWtbms45wsMNRvC7qEZP"
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
