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
    "3vKjZhiYcua7SHpC71GfLx6tX4igMCJLJwGPTzQjMDeAFigqw6MaUi2v3whPhWXW6deiisEYr7gh8DsxGcYWM8yi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rDpfBKgWQ5g1X8prnMqs5iQZsHuyxkrAH2iznuCqPouM6K8pXsnBrUgnJJRBuEPpHPB5nSXKDH6NNaWu6V7fN36",
  "key1": "5gGDESdQ5n1KxbXxdPnzM5burpJjiacfG8vxzzh1GjjABzozB5Kf4kXyedM8TFD5FExJ2vs3VPoGvGKtoHHLJRs7",
  "key2": "3BzPrvvLqH4QcMbSbDbTHEK6RbJYShf9t1fcpj9bBsy3knVSKDJoPt3kFUKEuZinpC65CANQreD2h3mdPBPuuzkC",
  "key3": "5Hg9mwpaz7UbNGLcgRHupLiXZgNcBCMndNYJNGqcdLN6dJnP1csns4nKmESawAvzPAzSAJw92Yt4tGPPKzn1rP7q",
  "key4": "2A8fiyazu5BCV9sBUKE1KRQfo7purKQU9k1PYEfsqkQVrVUAoQW9nKWSFGeTjg8yiqpD1jigVaGeLSLU7YzVa1iy",
  "key5": "5ZWFnJLY18ju7VKXVBFULyYkpoiGcq3jYPPLnAWsPAofruooRxMjmFgxutd5WB6NckvBviAnnDYCwM5NyjHz7rMT",
  "key6": "NaXW74EKFiiXCzjYrpd8bmeDp36fbupnHnmMy4oWBPS2zKG26hpooivQYxcdo5UdauKGWU5SJrchtpaRm1YFrpR",
  "key7": "4u6CQpRmfv1QBsmFGab3o9GzrBLqHfLuRLLjgugnLKm79eiq5ShecnvcK66TAckYeEWkKNER6529fKYknNEaRCBC",
  "key8": "22W1UozpWwfj36TQhByX5yno7VaJox6SiV1KmiKR8FC2KX2D6wuzfLK4otLDeWg3uYT3QzynqmipNTtdQZss6NFt",
  "key9": "5ckiyGk6Wt13s415fFymjT1hz2RDGjopPpxFiVkJXVe9bsYvFPk6qMgjun4ZjkH9KY8rNdEAXmKq8X2DamCr93Nw",
  "key10": "3dNqeL9HhD9dh3A5vQ4bdoQb2qAhBtxb2kcLwjjpSTV66ZUWUyKwxrtBFAyektmEZGvKZ4jqJ6LVNBV9kMuBzYZu",
  "key11": "2YdLQK4yuxtL1ZmDpqa17Nsh1qB3jpVamCa9y4f2AvehLdMxXDkEc5WFyuw3HcdDg7cjzjwtDQhWBZHed3oedYtn",
  "key12": "4iyRSzz7Avu9Q9r2upE7jsxUet4tXP75b5too924beURNkCR7F1nRQdwFS5YS2tpiVDKbpBmAah38oLVcBkDejxN",
  "key13": "21SmQEAUvWNqWWxF47wgmRzVtbv5aqRv8GacUyBm4fyHeKBGsZs1rCWZBoxyVtDYXUwaqgPyta7euKpyrNfEUeWU",
  "key14": "X5TfM1Jra1x7ymGE2SHg6A9uwctZ2sJuw5rjYGqpz9WPMQCNWXeva29MDxVmD4UgqKCebG2W68GPhpqxtdWFjBE",
  "key15": "3M87FS1iX4p5iKQygF1kQMynQJFu3Fn8Sa7s2TdLpLzCxsgEtvBEPrXjoU7SfjmdFEKtEc8t7pLaUSZZWTpwT7hd",
  "key16": "2963173NeAJ4VHuG2787xU9V9iP99TTJrnUGhfHDc94DDtsqJpvJCfAP7oraEBxHNjekMc2cB4EHxsuwva8vBarg",
  "key17": "4JDsytS8JFFaw4KyxmfAmzq2W6Fc5fJL47QCRCZCKDbgyf15y2yiCho1tuEGXvbvBCwXRcNSxPEhZmVz7fLkqwpX",
  "key18": "2cbSABvnL1xZYxPC8CK7w93kaXCTuescCHTzmZxMK19tZ8Vrb22rn4EgSroZ1Wc5ZzjdrBpy7f9PMUdRSXaHh4Xo",
  "key19": "2JE48HvMrsnXNr9ofjehKa1rczEY35jm97uYwbu1bDwNWTNkYFqaw8ASqjZneupZsonwS2YndrPMPUtDpMNGxXmK",
  "key20": "3h44P6hPnjHeBSdH4Peodn7uPjtQxX2R1cDLve6B6SRxk7wuSE1QB81htjf7fsMzxwgKtVhGKCLxEfNHJhQoPQcM",
  "key21": "Dqn4cUUMEYRSgF4waZ8DeiCBLDRSsyH9XbjpUsj1qx2gCMzXNZzkYFbwAzPnHPkX3vZDKQysUCBZ6SSFAiuMH3N",
  "key22": "8VjD53DnaDnbMq3Ngg2D3MmrB7kFedVoxwEkS1Fo8Vx3X6TvBBE4nfuTHtTRtLDuqLkVEr337CPTCKhtdqbNNdP",
  "key23": "SD6a87rgyqykG3BxuWFq2WYJkpTTfqCvkXrRCyLQpA6v7wjg3KffX9scqXbmskurb3ETCtLAQkodRJZnDkZTdaV",
  "key24": "29xmjpwQk8EHdRA6bo3iYg1mTF7F52uTHeKX7RE6iuovAeVwdVdFfkwmArcfcCBXX4aDwZqZ43tfHdgRGER9Jrih"
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
