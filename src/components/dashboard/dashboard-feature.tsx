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
    "3A8kjKA9KoeQvTqgtQ87ripPXXoWvau2x4sq6zshGAU66TjWdjzCEnWFeYLyrR6C2dxDyyBR4o9mbKVXrsq6vjCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iHvY3iY3pLXqb7ViQgYmYKHTA5k7MTqhHf3NbvVCmgcxFfQrbpkBxUuDUV1Ywwk6TyDwfsrQqonyezBpLxR2J8T",
  "key1": "4yNiJkjTJYFEDMatBEsNZ8Kvt5QsK8DPQuHqtHEnaJq1dCe6G4Xx9QCuxxcUe9UzZ2Y8iE2tgVZzpAfgnE5NuT2q",
  "key2": "2QyuhbNbmJyxK6imWw9tJTmfhoNfYEapgKa1TRJwzHYs9bDZqhw6GXabbKnajrDNF3rd7CMLJ8zANTSC3RaTzEe4",
  "key3": "5dncDDHC8qNKdY2gm7aJ8z2DPSGzems2wEbGogBZAunzQDkgo2UrRENbshcgDJwfhifSUg8vieTMbM8VXugsoX8D",
  "key4": "2rh1dmXgtXebCZHPPAAYjjs6B543CxrV9bu6ziaQGA2vHVFFwK1NXRSxtSqMNVSUm87P2tDKmH4Cz6KX5TbxYs7M",
  "key5": "2VEZfgjkZ61UNyQC11yUtqcvt6ZT9NsqWoomi2D9AnAjg8nVyp26iFGJa2LLEDuFea56kNfJEVDEJrRxz3sEwKRD",
  "key6": "R5fh5GSerphBxqMJRHXehLKmDv4qe2v9nSxEDtDURdhTzUuQQ3UcrJ4fF62JX7B386yK3vk4v7jWob52ABCWsjW",
  "key7": "W2H1zbCou8gbtfaVS2pWaPV9tPrKca2QJM4vi1kCYsafLK969oxCAf9E4jtRBwhkvXMfM4q31dinepHS2wMg16u",
  "key8": "4abafTFFWAbe7BzJsHss2utwpvtoW3HsWzYup4ZYdFWNYW9nVyg7wWxxV61EdnqKbgr9NGenMXaMB74J2YHFhszw",
  "key9": "5frHoohftF6hViGgZNjXqA3d4ctzqndGJh2FFwAdGBQH7eAKwNEWXk4nRqhH5Nn5oi1Cp3ZPZW7RfjeXxsz7Vb8b",
  "key10": "3dEsmgyYaEeQN9A286TB1UBDM5Qx4Qn7EkJUAVntrK2emcWAcKME3g1H7V2sBcU2612jPH3GjW6mFP23VbnQZrPU",
  "key11": "3SyLQ35yn29XTLy6xpSFF3WuNL23udPsCmFHW2t8k3hWcLj2LEuc5pp6j3ucEumEKNFvLFzHznPXxQaRYJRbTWUm",
  "key12": "2tMkLWUjwknMSD3bGM79hjzeyfdtYmhkJbwJfUmBAF94Tmr2eYtPXkADGDNd7BHBAHrtRCMvKBVGvRZgJJcvrJYL",
  "key13": "zoSZ5r88UnuXiZosw5m5FFbpTzDgUfgzR76FWXWbKi47WTP5M9fKuphs5pHMHVPUhBZiWHuHc391ncuTx9ya7V9",
  "key14": "2CFs1ZPT7bGznEuMCk49Zgpruwbszb4Cuojsd8uSv12T16WNfazDPsigyGSVZq3igrgD3Ay36n2LZiUaKMiFRxta",
  "key15": "4BnxAg8PYdL5FeY2jWyDMwkkYSaU1FA6dkCqp7pfG9bKer3fzc31D93B7udgKpwuL1PU3QjccD3syXoSEsnF87Vk",
  "key16": "4v9mT6JN7QZjYpDWrLr8d23eZk13xNw9NxxAHoRFMWFVEgxwGkc7yxk2EVmD34ugy7WMXNVT3Zb4cK64QvPn7Bhq",
  "key17": "2tZnksnFtXQS8taACc2SJb9EZADivCnhL55uEErodjkHsqyeNnJmJJLA1Lr1WdXUWcQq2Xtgza6Kt2XMvHNNFRua",
  "key18": "4KohLPmTHEVaPYMrz6SwHS3iYkpDnmXHgFSt84jJU3Zqs3AfemLtqCZ7iRtysuEFFKoW4F9DuUQLjT9JWKwu81tQ",
  "key19": "2TX7RJnjnPreQzxsk7J878ieCjX8U6NK1Z4WmY99rug8dAzEaqA9cfDvFpgJ7htT3WJ2yh9cEz2rpdwpTrhkjTPB",
  "key20": "3hfFRL74Z5t3GaM75AnbkQdyVo4WFgA3YV2B4EvupBq9WHVWvDwEDAjHE3KaTUjZicxYqPsM8fcGnhe7DHvY9mGs",
  "key21": "3GJ4MUazE4YVzzD2LdKVcST6M3C2FGdzHXc1Sv1XhKGjtEU5XKbKWMguC1X2dy3GMR2ymmXYojJZnAfjfmdYEs4T",
  "key22": "3ax8fPz6iRh53AXdXAqU9bkDWJubieG3nb1k4R1sg91x8JQfNBGU4hi4uaAUH1DkKMto5cfHne9vn8G5W4vHo6MH",
  "key23": "2umzQcEwWXYZUYpbNTPpST14VNPpJobHgUV4JsoXV5dw78xJd44ZBRRJv323V6HPjUfirh1eMZGDhmHx6MzTs2xn",
  "key24": "4Fjyor6yiURCCvRbcs2cfkBnDomqhNGuPdNiigeiQPu9mSB5DGGTtQcizTzLUnMfYSf4QfzJLSgTBi7R9WKu2rBn",
  "key25": "zWXWVTmQNp8gaFqzvNF45Na8qBQjW5TJXrs9Ym5svwLUty7297D7bTcpVbMdLpgmjHKTMvH8XtxPziJkz1vufzw",
  "key26": "2vZnPaNMNTXHf62HaS52LJueiEpb9CdgrHgyhFHavjn9mMc63euH5taUcwtaSExa1KJxLVD7ewot49kMq5CRzKZL",
  "key27": "5wirNisDZHix48hWcYiPc54SKCHKmHEFyKRMwuzrqZFFPSthEhK42uDybKoHhPBp2u8jkQAPQaoxfQWag6a8etk1",
  "key28": "4J8C2zKUioqtsToTWdkRVt4TL3AZds4RGtQqrLvdajCq79cc4sig6W8dd8ztPdYfdQbc5mGjwrhmzFB8oLDCjLud",
  "key29": "5e1bbz49DKceXUVRzNoaKKsgJuLLPhv5mhQZZo3bj89DzfFiVaEsdfwRnkEWh45rEVHiuEoJbAxNo8D9RAGQm1TL",
  "key30": "3dbAnXWy46RXQENsMiafN5CpDG9kztPDUmKrTgZTwHXdV6g6qAZXQ6zCueVZTrPx6EWFC6Pzn3898W2tBmm7npjn",
  "key31": "5WrEPbkoyUrRPaV6usa5e8cjzCj3Z69EkshaLMhZcM2aBVRWu7n5HN6Gg61GsVfi77KKo7LsnvBGseJ4JwL6tSGJ"
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
