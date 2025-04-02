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
    "4facqA4k8oSoBUwZHH6sQTbCABtLmoes7PnprC3v6ArbrFy3MCaXKp2h9zjTw8zYGqrLfqN3zUnJxAoU8f3usTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UUbwEwDkkYzdWTDHwbNxfmHcAg6KU8zAKid1zjvxE32z8VGkm1XvpcGpPDdq2EVx6tRFzmiYkCFyqmn1MYW4aR9",
  "key1": "5iiwbqUteCyTobnafjBM6MY5iUPDDBKE3HRN9a7vYmv2z9xiVBikMju3iW23EBiSMZvdTRH6J2Y13RsZe5THLdKG",
  "key2": "2xxFxnGtQQAEtPaDTipFjby8NPcDpPXtVVpTMZ2SzUBM855A8u6iJtKamxwhEtokhdU86Fa2WWXMZ5PqP55Uz7a3",
  "key3": "4ruwDmKUhoZPjo1gEG4QpUtPSqA5RcUR63G8AutLd4dKYjeUUVwnNbDYCBd3rmKvJduzGMNXqjueJHn9LHdJ4Kum",
  "key4": "wRVWZcatnZy7iy4TpQpqSA7yjcRSSfGzYtkmVQwCeVCjDoGff3doKKi5wTZsQCvRLRMeumHhAksw3C36xviy7Va",
  "key5": "4QKUCLpKbNCf14usGrpLZzCdSibVCSRBJgjGgjPcsW4dGzpB8xKrdbb9gRN5FeMoEbisVkL1xmHWEhYnZP6Ydq3F",
  "key6": "2Tqr9zT8gbQPMMGZoVCtpR3pCUXYdBsP59gqko5R2wYSEoncBLp5Uf9KeErM76MvgULJXwY3MZDZqZSuTvq9jRtD",
  "key7": "2SWY3hM4277LnN2xHssQHxbMYbcAKRDehFxjv5gYKvtShReBgufiXPp1VBRfV68L8CDqzT8VtF1oTj95F22AZHjC",
  "key8": "38Vdo6zuKVjABPXJzm8DZUbeVRwkqb45VvFork1H6mmg4Q2PHc8CQ1LjcqFKWsuyigJBfY2eB1u6CD3r7msDbKhY",
  "key9": "4imDTZ9RPtPizQy7bLWc2dySmjAuf69soey9wSbvQmo8QpL4yiVoEsDdrvJ1yAEhvwrELDV6zdzWF43DukHeXtn",
  "key10": "3bHW5jWRAhQP7QCiFRo5n25eqMUbeygux6JmfXXsfbx3sZmxSVUuCx49td6sEhmygrsxQGwHfP4QiDi9f4tWkuoA",
  "key11": "59FLbfQ4zhmAHCpnoUzK7WtBMh2aUZkYvssHhw2d8M3CbJ5Dqcnc9bim9e82c3ANFFZnJwaUeEPJzmpbU4qjmgDS",
  "key12": "4RBBDCLNBTa1Bmi5fM1oh1diNgh561F2h14CbAzWp2Q6ATmSmx34eaAfn7gYdcy6NZGiwzNWemUbkoJyZBwY6DYf",
  "key13": "vW3MRmnG8SdifGCr8vBqNB8SjsayrJwmMxKx6971JFJS2eF9oaGPcJCRpUEfmT8jVkwgUu46by1nTxJAHa4hnL6",
  "key14": "5GFdMNvCqtVqhn7jEMezYA23oKTzUgcvVGbAr9LKpGdsGrR2BFHDwD1vcXt48CpsshMZSLHgusjdHQtKTH1TkQey",
  "key15": "USyyQbhXCggd4jryc2KHGh9vJEgTDH5BXhSQxazX3d3z311VrNw2tQYE9rcJW7nrbTeGMUeBFSqJjAxuhHY4pB9",
  "key16": "3eUFazft3RcCSCtWs3GV7PEsUWsuNAbCXdtHDF8jEcs3UHWDtk71rJ54dUgUeNtJiwj3ue1JJctTihjBaspbMKD9",
  "key17": "29X6J7W742JEgy3NN6wSBCRMf8HDm42BfxqGWXJ8b6FoQ7eibxWQZxrFdqJrB2bvwya9FezMhNVZEBqaFXApLDQv",
  "key18": "2qaviiGjqhuX7tN8yDH78eW8vZ2JsD4tknowcZ5RmQ4wEEJUeRDETQgBm15y1mQupZ28sNDQRB7UAUoNvf11mXvi",
  "key19": "4C798C1EQvjPUU5EBvAAo12xAUrDi4ynzGMNgBZ2qPzc2qT6JHgjXRQ3VW6XuhpzDyneNH9XPgVVS7g3vuNrsjC4",
  "key20": "5dCQUCyPZtpixLccag5Q9K7kLDds7B5r2EfyTtZLZQtss61b2tfLC7MFVy9FdG1dFKNiGTTJt7ur4qHeVr2xgdEq",
  "key21": "5hLgPVQVWrAsqu61Dpb62djtDnVRfAwrMdPaedRr1H59n8mBL4hJG8byoxJTA7vZm8ZGAyo3Jz1YrKNgq7tyL6pF",
  "key22": "3NTAVcgMeTskQVXprCYGwQWxEDJaKkM1H4YEzs4d28gHW299QTmHXZNcZuLwUhQgd4VDvFYjFqP3QVXvmaQTjS7r",
  "key23": "2MAiFaAVVgFTUvztit9XzYFAxhMVrEgKpe6W7SnEGDkkqbibBuYGy9jiZpyuE4M5WTRW6tNr8oergPKpDR2GczMd",
  "key24": "2HAKrwwoy5HLoQvzLnNJT3YRhjKzqbXtXpJbLz6eap7x6JMLA3ipejdfpyPyCBTgXTxV4kdrxBMwBxPiWUmxisjk",
  "key25": "2pZHgPSetQRE7J8PXgqQtmyrmkttdoWbfPgzoJWWmQrJ4KiDp2pcukbFQyRrrdWB4ypdaCxsrSh8uLGqA9Lfy8Bk",
  "key26": "Zub6kgyYyqkAC1EgjeSaEcdTuGdL5DZ35U1Z6WTizTm82ggXvUjmnFjPYtMwRALB5SyTzZPTnWixu1PMicm8L2v",
  "key27": "2DVphwRk7D1fvv7yUZNKg2NJrxEkc56oGM8nWsSvrpW6s2eESr4VZe9kC5Ev2oVbqVSTHwSSZFZmmAA58b2MbvXG",
  "key28": "ws6yxcvtvqpdiUsjNqGX2ZZSWQMrFfusD2jHTJJbmHEwkjaeDWaWymppSmYwtEFNimRBMMbyTfZnnaB3JVRcKH5",
  "key29": "3bjm2QrSHDuxPpYcaLM7e2jqj71DPynRSKjL4JCVLuL2x7oHCER1T6wrBWu7LFZbXfiHoF9epfHY42ZakuGG4wy9",
  "key30": "5ZHmYN7fvRYKcGt2EjRBsMn5MhwSTrYfsDnd4umpJ1SFzw9Xr3sSZkALgVhdsbesYvtpu7pUNHRfqg8LdRrzhEYy",
  "key31": "4P1G4VL3t7iRzgr3NDM3Hvy8sdKYLb1M36Wkuso219yEwEvvedVKoKEfAvZAMsC1rt4jdsBU5hVfnWF2nkJwLCbR",
  "key32": "4gK8GkVsXcgvuvD6dg5xhi2BqmBikqBqQMxEDYTFcTWzDPnT2t5v81pbuarqs2VVkeerG5bLxsUsJRaVf7tw5W8J",
  "key33": "2FsYY4pumn41JxvmBASw9S4jadPgdUJbWTX7NdYJG79gbXGk54Ya1fzsCVAdg4z7bgzG8S9zNG55n7US31ZtDPHw",
  "key34": "3APRsaLEepJwiopQKo7xnbaq8JQX4rAhQQLDN1iUCaLKqVJjET5njvfw3AYKUVFs1j6z3cfx9cEyVh7NSvT4cPg",
  "key35": "51gj1m6TkwWhFby3kPa61kXS7xoM9J1Cmf24ymgWngaTv3DMdYNh1Wsu54RrLckMYt8veUnon4cYMAKqRF8BifCV"
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
