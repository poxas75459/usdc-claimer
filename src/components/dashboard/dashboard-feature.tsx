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
    "4Mh3NDYqHC6hZ4sxvt2RXcEdo5bpLEhHHtE4U1HUWAXW3yEGLWF2MW5z8oTv9ASvoA2Z5UMe7CheVC7aBHpB9KD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48XKd42yXkZs8kCxzRXmWhJLqM6BbqNaV2UKkopDtzSMTysvfq7iFbzkgf6rVJeJvY1eypZArzGR39JkCktMKW6V",
  "key1": "3HmtLcKXice8G53uJteM9i83q8K58GeuPJP8Y4zfKio95fvXSp2VYxtFqdSq6ergKHdZcwnbw7wKKSPwrxTMgdNk",
  "key2": "5XgTw5KyYZscVySDd1DTsQRf7Vg97CN3GLE2oogMp8squqxtp6ScQtH3j73rWtcbtvTEHszCZWP93mHZFwgXyA1V",
  "key3": "3wHR6dRUzkXEpBUhivUMp9igxPToinnRV3S8C1xfVFdwSmrZdgH9a5zo9Vz824VJ44MLjdxnxYfukzJZ1RrT1kU2",
  "key4": "sxtmZCBzeTxnGmDV1gE13PoHjb9tmkNNzf7jPgApH2UugUo2J3X2GvcXLw2bF3cLyYJHm81wehj4Sk9mbNT6MeD",
  "key5": "2XkQcyBjtqierFxt5KkhpngeLBDrbXjFpKzwF9jba8N9AF9bW1DXPXyYF7Bv66PuGFXgoYmMZWix56NeADmwEuHV",
  "key6": "4Hc7wDnDPQ5xQzMah3VBfaNtxpWQs1yPUSWHHyLZcv2Z5ZEXLw3LZBFNaVbhn83oeMHXEphkiGSVTWEHawA8ehMF",
  "key7": "2Ba2Q489nEHcfjzsfqngEszCzwZTfoMppAJxo6sFZ94wFuYvVbTtXTfwdqw4kABy6eYsA5gmrjyQKKtAwguamJ18",
  "key8": "unXqq6J1F4aD1NZo3REj9C8LyKwbSTY78pzShEk2F4GBV6wten3F3JZzuLHAqKCrQNRTmFw53tXjFySNGhudJCR",
  "key9": "34b9GpnkBciRgxeQiZapoxTLbZvkJVLc13Jhimq3fKMXBxLSG1GyWYmhJHg2azmDg4go24i15P9YFHxHnQ11T693",
  "key10": "2UWw5CLk5oKhH953e8yMRRcfwoQ2PZRqU3g3BLdem6xQv2PM2PouAdR7zSMprniFBXLJVL2sHTzL7LqWxkJo2x8i",
  "key11": "4n97TicNX1kx3MsdJQnvB9KWNB4g2b3ETg3pPYhBwsg95LwgNUrMnb76sgUprzZv1yWSA8Hf12dr9QckugCnwbX",
  "key12": "2EMWXUpfNa7h5ShTFGuno8k2TaUUiNJP5XXJLNwKqqo9SNyu7scuhNwKJauJngPZLXBKxXLusDFjTdWmDi3kkTKy",
  "key13": "2HjX3uJWeqrfcjmJqyyLtmcSk978cXRRnBxaJ5rAFNHTWe2adiRcesWpoVCYkvUfNFGRu6q9XTwN1HjbNmjkDiBf",
  "key14": "5L1TAhbbJcNr1tzbiBJuv78tcwqDDqLyyXksLeoqLR5tLWBr2Vtw15XsxE7wBcyXSgoe4syo4Yr98h8nbjHfK9iR",
  "key15": "vbrLCPCBZFdKFWb13onJVDxk9p1zgayB5HJCwnnfGgjCcziLhkzxcW4XJYbgu3FAXwXE5ivqfMhNYymKuTbzJEi",
  "key16": "WtA7STC1pvb5wajX6HJ1owCNCTnNoWj5Dbs2QjiT7q1pRzJLDmuynbG1fwKejfw9qPGwsyGUiuANjYoKNBzp7VC",
  "key17": "5QmHux32cbabyrnzGfSVtWGnSWsgbQZtS2p42YZYgzBpcemLUQR9QNaoSu7uoFRTeP2MG72FhW4XTFTWmYMwVvUF",
  "key18": "5NYGyEtYgVYpfUpHBY6TufnHXLWfdSHPKue5ZxxiFHRzGdSqQc9xU85d5P4Fu7Tv5Lu9QZt7NjzUzRGHu3R8HPGy",
  "key19": "45W18UPLFbyyj5GWazAjNRLxfo4JJctyXc8NQDpkf1TjEJKbZkYFr5bp4XnCXf3hFDv2sRk5yDoN659q5Sf3FY95",
  "key20": "3EpBNRhcoapv5DaQQaZSBDGyFMA7nNBR3hYDGpNxRCGXMiFjLDvk8ei8rTxHEB9bVhxAgXmqccwGBkud67urzgF2",
  "key21": "3rg53LbZa91fXwykn66mHHZko56Q6c2mNFcPxCCPrNLs7EJLVi9gjCM3rJg8qASSSiqcqoKa4HoVAMp1jkmX2zZA",
  "key22": "581qc9GStsA9WUZTcrDJg6m4aZA5d8uYDQbABz3BWj4mS5D3sJY5brtk1Qre1cdzBTvFp3EJebkjVSPEFV1oWWKJ",
  "key23": "4pWK8tqwfec4znpvQJgbJz98HVe59DeTqNyLjsm2oyXo2qezTPhfRc9YAz3YobFE6iJo5XsmKdbV43kMYdNeg4tj",
  "key24": "JTq8WPZjSV25mNgCFFWERCyGuQo61xkpYR9NU3bNhGHomYreBsmE3sDkXEnvWU732sN8i3zLS2PMQzDPfLCcTkn",
  "key25": "4oLsi3f84YC1GTJDsfVAJYwY82odK6gamA1S8SoNNVLPHRX1ZHWMtEVtzwaeH2U4kTdm8B44a8dq6JXpeBQsEZKa",
  "key26": "3NmL1t4oKabu378swMMHLMdEbNYwAwutgATeiCL216gcpQobpE1e4ShoqFbX1cGwSnnygNBgS26RQ1JExuFj4q7v",
  "key27": "3s9Lc2QDCA8NpAH1HCtJUCtic9cmdUTjfcsCuqryWnreNRL5NWTpLoHrPfe2NKbuea8PzxQyqbvWkdj2oTEBe8bp",
  "key28": "2qqKVZ6Pu3zN4Z67PuyWGgTbBQMjtuw9g5hQDcMfNDBcEWsr26sMhAChJxtJRUCbvMWKF3b92fKZhhGp25MrTyYe",
  "key29": "2mSmZCi3C1HFVdMcoRqW2oJM3n1Ph5m865KZwUkGgeB4nZc4YRt2LjhSYfXyQW8aFHzkCdSkVjRAN792tFPZ6vCw",
  "key30": "65QyXLUUZQNupF5TmM13DV2JFB9FPMYTdhyukCYv1735ZqbvAzRZCUybn6X2LY1MhHPXEev3WivrzJ3xe2UkDssc",
  "key31": "3kKqGgS3jbDc4pm1DZm9pDQz6NaT6VEBgoCUYLcfwcvxvZh9rreyVLwm52sNGbyPUyrUfSXTSLQWsm4UsehQoSc3",
  "key32": "4W158HoE7tThmSMPxHkwehoiKGzPjNWFvRnjRBXE4XuMcw2Ea2i7Cv2wzJgdC8L8tf5XiBn5gFimmZvyinMxZPUj",
  "key33": "3eT3KAjU1njPcNxuE7VnoLEu8XGfsAFoRwcV3N3XjpEmxFUMeW6HjM5r7hH8Xb3mjeFrHz9zTejYsvchXZ4N3ysU",
  "key34": "44DR2dqyWCxg5L7nYwEYZANe5AQUPKQgMpAU7fRN68AYiX8ZdHefSwL2mGdnTJpYm46yThvZQRmK28VfqsHXfSo9",
  "key35": "5FGQiJV7gyh96PtRunt9fvC862epotRkbijx5yGZktPRvNBy9KNkt2is3qZpTtcZPnECKDbfiSxgpRa42iRU2EQR",
  "key36": "33QvPGCowZ8azESE7wZVtz5kkBx1eMwAG6cC5upwgQ9dYwoz1KLc6GTWizNxiWwJJuZyYLcK5AxQeibkiWJXe6qp",
  "key37": "34m7R8U82iVVz3UDbcgNBsJAH2XRFFd9YVm6Zs4aR6CL1comzjAimXLQxP2jW3MbBLCRkF4M9nY9qF7hZxssGN5D",
  "key38": "2b79RXbi6XqLEAyxVDXpBhaxPSqGASrgbmjuQnyCevCLTBc5acpdz2exyhSVVwTM8Pyt8c4GARNeoqeoX1YAevLt",
  "key39": "2XdC5Lp28Sp3MkMLZXe7F6dowHoAH5637jcFQ6gMkV7CCw1hPTZE6PKZLQWBa3ejtATvzMB95poDRqhjGYWPywPf",
  "key40": "2QEnvbUGfTQvL1eXq8sZe8kruG6kQ6RzXVnctVRmi65rukBMxmajwcmCASfC6jhXqKP5hzVcGy3jhgRcuWPuyjz8",
  "key41": "4KXKSTJoLiSRYhHgit6HxLzvQwW3Jq6SghNuwH55XwMui9e2rNUpCqnhrmRBkX1TGimTaKUB3Kf3q2DKPDmRi9eL",
  "key42": "23VrT7YRxrZJFyRaNEtVcofdUMYKW7JaUjySGsspeFNoqEtxJwUxSpsYA6dyVNpSYewiTQuir6aLR8n8uSCKeRC8",
  "key43": "3s2Z2XkQ3MSUzEvkgx9UeV2ueqwc4gm7ikUunZNRAH6g8ShhGRMVnSE6NyQcftP6PqeB4FXYBjouq1qwyVah5wA4"
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
