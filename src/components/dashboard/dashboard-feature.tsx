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
    "Vku4EP81jdcahRnJ2UGCD6HrkSFkoAPnrkFx8tzTfyGZbysz3dLLtXrt2iUQnqYL7CWM1bk5rLJBgxXAhBV9Fuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GRqrCskfNDaFvrcx8zdnKQnLzjKvpmmXScV3bm4KiuUxCno7bodAztoxSuVn6wvZ5KiTc8gW7onGKodmQ3W2tC8",
  "key1": "3ANxA2x3u8yvVuBvAFJMzMofKHxA75xD6yRmSmsWvYbQyUy4xhYVXpR4QVkR6odSRXh92MRPtL2pAygKHq9Uy5xz",
  "key2": "5AsEbjbiSnKQXoYmjjdQX7nN27AMdYCsmC3dw778ToKVGSNbmco8MR91mLu5KD72cxQvQe9i15HRgZKpQy9rWcvH",
  "key3": "5uUX4Fnni1tyoEEJftHNEgeRw7rZXasZiw6U2yfUZqNf6VJQQqMCbyw3PpsQyqz3E4c1RsiPSq38FwBUzjzjf9Dk",
  "key4": "4AQcBjxD5bt1LixRsHEJgPJvdRAWnc2utoKbb8PuAwh7y9xGphKFEoNs7KFbTWeVLy75zeKePrRzku2ZgcuWk5Pz",
  "key5": "2763MQZDaa9GnyaE7QDyrZKrRrzdLq2cAR9SfB1hW8gjYnGR5hPKjZwTWuGauUxxiFsTsfppvasvKzMv8gVjxz6Q",
  "key6": "5QynVyytuas8TRP6SSK7vyv5bE4YSoFYyQhvBggybfTwUyyAAGAyLRsxH7GtPottzR5PNmGmAvEGqEhU1fD5tujH",
  "key7": "GWnfHb3TGPFipjGhTNg1RcQ2EY1vskcVEQgvTwfkYEkWDb2M5oses4YjPBc1tG21ktoyR9wRBZd9kVBDNrFhcpF",
  "key8": "3VTtijsxKpzShYRWsV7LfyC8YZxNDbT345YixTPZJUjzJsFFtG1yQqBT73tR6fvtJakkDLFwK2jT646MpvQm12Qn",
  "key9": "4eUdn7Za7XB37qcLWDoHgBsywDv9N1PK6LPxMJFnb11Tza2fprsjRPEw5e2Us9mf8Mquh6s9PaZzzVzH1krhkiSe",
  "key10": "4ThM4Cy4HVEaB85QEL5b3rjx3C5TEyMrANFzdWEg1SpFhQz2np29w7XAMLDoHfxmA9Ty5r7RFKZheyMNg6gK13Bi",
  "key11": "3VyWM3SUvhfyfVfYkGC5tU8XHht3jGsYRGuAwqsq1B8CFg4zJkdFjLgiQQuaS35Gh213kdZTTg9psuFekj9HcsEG",
  "key12": "3RCvWNGWGKTiCycf6doZMGjjHfhaMVqBPLBV7ShvVCiJcZKxr2me8i1CKdaidv1EGxc2hdbFHDgwuUnFKJqps8Zz",
  "key13": "3LjLDafD7fSZHvc1BH2qJrPwdBAoAWP4EQZ64yQzRM3oyAPgG3Jshi79wCJ9s664a7SjWRR5BuPVrDvhCGFU1Bvc",
  "key14": "uxTSVAUDTtD6ZR9wB8xcwTUn1P14NpMMCxLMs6G8gmhETr6uDRFixSWSyN5QafSyoyXD2T9wpLMDbCSN3q9oZno",
  "key15": "5aHbPiRiEi1EUNx2jsE1P7X7izTjna34iNYnCU5NxAAni1xtorBpjLW4jGM2bodwtHA53e1d9XDochngpaXdGd23",
  "key16": "3ACkhVxJt1786VAoNBhFvt2eLFAkjcHovB4vV6LAvTX6TiNMq83PzW3Krin6iEDM7XeKFVSbfqXeEe3cJBuGknTC",
  "key17": "2fVpcscoRhpAAbjBUPn3bC7YqUJjex2nTSNW5qPouAwKRPkriXNWmPsdAtS9KnfLpS8RcP9eiuQ6mMHXJheLtGFY",
  "key18": "Z8JFUkarq1heniCRcQhdpcnyF4ELzY53oj2c1H2ciSj9Abrh2fShznuHgtEToes9AoYVcYKq8sAF1UeneuDgY8H",
  "key19": "2Q5BJN3GMNpuoHViksgrLcbrEgqCSj7pjLM2upJcL95iNRnvc2DKyyrxGj2XfmHzvCsBoSnSvv1Tx4gN3SiN41J8",
  "key20": "3fiuSmiYSPoh7R2dP24WiC7Cedb7sMpMsdN6CJy23f5mvogZCAv2XLrF5PXYPF2sXWVTpLeNUnCBbPMQHAmSNruJ",
  "key21": "4LXZF165EFbjkHRUw9XTn7LBWc95XxKdsuXg6yLj1qSEGPHVYQn8WfeW5Gtowd5nxAiSpgazMiFNcf1kXqMMk1np",
  "key22": "2pkV33Tprfa1dehvyGyUx95Ws5Yf11oXKa4RbKWh8FwB7wK1shBeZNeTZfZX8vUFqDNrksgo16p5Gg1aQmbH9kPX",
  "key23": "43YZraaSJhagwqhGZWXTmFKuRk5g8xJXzKPZ2zfbxXioNe7f95UzuG6L3vyvSGNnfDkR2DugWtmhKNrtiqhvcr2d",
  "key24": "5eyWaTqDFyndyhva8Z4dmuAv8pPbW5jZZjtSjwMmocaGqVDSS3B8Z4bPq3Kt3L6ELTT7DcLtbsyHogrTzwVj7dqN",
  "key25": "2FCnj22RG6giXTcdiUA94QdRVYcJcpS9T14zT5qqV6hVqz7a1PPy58jzbMVf9rrdYQzB89ST8qeorV3Lwbcs3Rj2",
  "key26": "4eUKhhwpybiBqiEjt4mUT5XHFwBBKG4PLQESfZhMrW66HZfwKP3wRQWRY8pLDqdPKk6wVWchqen5f6fbTUyVkGCg",
  "key27": "2FTY6K3kRRvh8NSCAvzoSQycyY7EwdtDtUoQ3YbVSZDnBaMEmz4JjmYcbmXEi2TmSvrxM3Wh8DK9uoN6Jkx1huis",
  "key28": "2Jey5xVQg7XdMFTvjnBApAALLdShHGauuDCuu9FYxRonmoKwpnAkR2X72HcuFZD58k4pJrRWX8ATAq82fmFH6a7U",
  "key29": "5AsQsztTvgX1r4CqqqHxT78zZ43rmfpFt9m3ynwFcfoQo6R3c7QZMtnL7LRoemF82YxTHPCM7mmpmJ4wYyk3WeBY",
  "key30": "uS18UDE4iPnFZjgag5TdFJ8CKYNCrPtZyGLjRhQkpjuKNc5JuNT24A7HZx1sS9P4kWYQ2q49tce4d7wx5iwyABS",
  "key31": "3xC2izhgoG36jdBg7xRAJrmgEekPmFigmZ6ZecfRRb4Zei7od2vXPiFNBLivhYtQ5Lp1EEH2ykDnePMnDH6teNEv",
  "key32": "2y8DtzRUMUQALzB8eqjyTxJdUGzcEhrbSmn3Wwhi58QMzfkzffG3XYyoYidq4wJ837MPiDLfqpvEww6b5oBnQS4s",
  "key33": "2PjY7XoBLLVLkxpWvd3FyJc1aiSxBWfqwB5SrChvG3tb2Ycn2rC8rRv3Kf4wvde7Nv9WqgaSZMLGRQyBibtYHZYY",
  "key34": "27BAn5ra3NRqLctM7vqMcunxwPUsaD824munivVGy7kXSGALTZDSGHWrd8UH2EBWL9CXxuK1xvfhFQBRmRshCdY9",
  "key35": "22NJ1whPM1BuUfEKqm2NwuDsvpNeiyyZLmGgUt8MUM2XQCbsLyCStf38Su8QXU8bMkDhs1Qvw6jeZhDy9xKkB4G4",
  "key36": "4Jb5Z8Ss3yGA8FjNWddiWHTXnkAcvKa7ehmSyg2ZfJSrxt7hF4x1j8z6LgNWup3Bsrg2B7nKDmuPE3TKvnsvS9Ys",
  "key37": "3ZPFczuWdXNyqw3MTEWoTmqM5rCj2g25wQRFkLXQoWFg9Daw9NwApB3GPGUjyNAeQDoHSjDfYmW2b9hmTH1DsvWi",
  "key38": "3p2oa3jno8iWgZVh1tR6MhEoWe8Mexz1azJjs1p1PzFSRJVPHJFHLsuJKEhixEkCPLZRPUeHcDDSFnMnA7jyJBXL",
  "key39": "5KatG9A9J83sEktVXmhkN27z8iMXDQLfkUfhweE5SzPkduXuMFDELj2aqCvbMjDQoERWTnsguwhgjv6Xv7XNEFUf",
  "key40": "3nE73iCUxLFpGwc8awYLsqn1pBXao9Sec9Pi99vvDKdnuAW79xKWgy8vVMYVFVJjmMRhoVdj6xAq4HcQX4hTvECh",
  "key41": "2wcCkqtxesCyWPYUVwXFzv9hPset7bBATKWKX5Hdvj3UZGJo2HVHoUys8Ws8ZTwS9NQFHAdpZ4AMauogsnz34BRk",
  "key42": "g2dcEKeBtsDt6MAkJyjaga8K7Yho5mEp18QqSC3JPucQSZY5esbqmTLrJJY1khySGtd1v3mbU6y8WjJ4qChL1tj"
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
