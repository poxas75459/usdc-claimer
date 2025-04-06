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
    "4UJ51HoTtmJvSoiS9xUj3YfBkfHB7HxPPfF5usGqRj5PHpHYKHYG2zsA3PD9PV6iaQuQFB2kpaRUheG9rSNsWCGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uw9CLm2NkA7SxDRcS9XkeejchBWPS3JPqY8Rnk4pxn8a97SRQvPLsrjxQeF13eccAtKnaaAGATqmgd4sHWsARNJ",
  "key1": "2isn8u4cih8zr1USe5i2BjPp98jWvsnC2TAmAaBJpZh54wpgu8TWNoFQrRPxT9YBXrH5UqXxRj5C3DS6yrnsJRZZ",
  "key2": "44JQj5nnwfmkMBfR9oc3MKVSUKq8KiUnchuGF5t6i7NQ9qxAwKDuq9WnfzmfSdzAVDVoFb8JWBG91CPnGELPACWZ",
  "key3": "pjD21ymsEaFkxcfA6mSkuJ3XctxfzgdFtbZVZyS9edj3pzVjwD6TzohKEamn5xv7ktNqQAStc7mgGFHNC4ttfWW",
  "key4": "24CajNUickBxwakDAskZxjYNiBKw3ZSPfb86nFQrWhoRs6eBjG88ftKydw1bAenBQNEHBE3MttrGuAu9axzCoiHg",
  "key5": "2CQiojr6LjhWGpfMJfzNSp2h1MoFHPSpPhJVurFAAkW7HcQwYSSHnDQYBpLqHUK1dLtzDynjw4niMsaVwXZZMTnM",
  "key6": "YMoBRW9N7wLxMDQ4wcHSfjNzSM1BHHnGWwzY6pPc54JZzbvvPw9wQN7xeFNPQEZboMwEWpqVXnikZbZP5zRP1Qn",
  "key7": "5D9M3ykrU9fNSb4EgcSGvjZNf9xxmHKFr8LrSpPCyX8ngrWELQqjRCsudWqJ1N9x3NA3cgZv3gZtZS9e2qeHUfZc",
  "key8": "47oMnhXPj735bcp1buH7KRzSgm8bpckLSTSSPrgtpcyLb8ffEAhPTvaxWPVMpW3cYiKK65mKufeexs5mhVnXaTCZ",
  "key9": "66nAN93EyoU5puxZfTaeGWHin2VD8Y8nBtb8Vu56wJKdnN3FFxBZ8z6wrzRdV86EEDYiwNHByz8FMHH6tA4pEKxt",
  "key10": "3Zk9qDcNBYkbJ9jLjwrbX1khcrc9NjdoBAuxLa61LXTrjmgVBKCfUtzDWhuz3vDdB8sNkMaYzNu3TQzy3XkhBiqn",
  "key11": "69zy6ZhuHmXKUVwDc6XE86VZxw7461dyR8sqMszdtJAEYfGh2g6XMoBpsu1hBWp56x1njpNp3KrrkCfq8Fbkj4a",
  "key12": "33cksyEwvwf8dY4T5Af8KDfbvF7EJrcwJ1WjH5Hsni7cNdhQXdADgZfbEY5Gs8DZLQbZw2eft8ecPadNaQRnKf8D",
  "key13": "WpgPMR4jCPfpUFxcSyZNfQFdWYKbzejssfWFTwnCfWEFj97qcutsCDS6Xm8Ui4fuUCSBY2oVcEqUnn2uAJRKSZL",
  "key14": "4U8qPFoMUTSSnEyu5cByb1avbhZiiL3DVB1R3mHF6DrsH5Tz8fPPBA5JFNAhSMPnVd8HwiMaJwjKtZ25jtvHTbJV",
  "key15": "2MHzyCS2zbz2dyZcgR5qKC6W4XF2LiKukLnze8XUzygz913CZqVq8XhGst6AAStWSeABFmkuFfhxMn71v3UBmP7y",
  "key16": "4Xe687d6E8vGV8sPPKV4iLuDeuPHzVYXbCiDzitX4rnerucRL21sfuRSVf52rouFbJk4MFdWLGh3pP62kMQaRGwT",
  "key17": "54fuCYwQh8sYqwF3kSwRt4TqJ3QbDScNaBhDXRSTQBzQdhoWR35dTJSy9AjCSX5hqSuyVdRvsNqaaNa74qtCkX3y",
  "key18": "2VYr7JDkPQooE3u8CaHJkWH37KP1MzXXP1qJqnZpXUoJbmyZXEWxaM8HVNCqDsHGLxYoJpvbKzagkPwDYnRStv1J",
  "key19": "5do9zV2UpTDMQsE7QqSxwAyrepz8GtvDL716yVZmTY1c8dA8rtedeupBWPCouKL6y9Vdi34RxJs8nuVrShq3rGNM",
  "key20": "5bxHYwAjjeMeRaRvQMZ6zopi1eaTDLKyjx5uLMVWuB5aALZRuvGw4D1KMLNHvjJYvJPy7yuPvcw1i337csGWi1ks",
  "key21": "2SEeQo9QwRXjssqXDw1KhsmzwbNyarDmQWfw31NPvYMHembfgV1nuG5wkT2y8G4DsbxTBq4MzhZRGeeskLVtKHjx",
  "key22": "cfJLE777P6XPjZnGgeD9fH7YzQo4rJNgD7edosv9f9hcgUUKpN6B6c81ZVVpLmv1vuBb9bxSTKJfW9uTf55oDz6",
  "key23": "4eYhC1uX73BDZv87MCAZbMzEVgd8t3L33yFffC2aVWWWrVBTxDgdx3AAHVJiP9qETzCexJfK1UQNG6b6hwyrcSt4",
  "key24": "3vkzu1VyYSRWwFRikyxLpqTo3361hMKPGnyPMtzF5HKH9pCpmFiMyUvU6jCRqgJgY3iob9k2VgzmisRfhZgJjvkA",
  "key25": "EekeDpetEBXMgxjBNUos44WJndDnMd74DwMAFpxupnG6fmdborwj1GeMomY1ZeEDY5UCuuuFjaE2iEKfzgjUPeF",
  "key26": "3bgR7Qs5C8Ut2u7PjJhGfTPG16Kf2bH3QCbKBvdNWVo19NUHaThA2aoqqycNuiawbw2eNvxaPcsXiS4dvqtcLLLX",
  "key27": "5rkGRbMzH4GDWCcMSEPYpBSSXumHn5HnaY1pTaNEg1rEkVC8f7sHPXUCb77ZcbDLvf5iWy78Jnah8AEkSgYk11RL",
  "key28": "3nCaDNLKiXcDuqxopd4NjPUVbqs5DCJDMgX3K3qtR52eKdscEcYZYrrvBNBU89z7ZQSQ9gNgUpH1RPWdP9v1JQgk",
  "key29": "QwUkRmYCm6xqi7KBQWMbrjV7vAXm9P2k7zZVTpXPHbQm7N9SLZo9bBhtHqYPCsXZrXepu6FotaqDFwRDjro5X1c",
  "key30": "GGBezn17TZsaEYcQV6nPru9png1E8UpVu3gQs6x7Gn7gv7AA7Wr2UwTSZEGYsGZpL5JF85Pb9bSYzwaNGb4kygY",
  "key31": "5JZeuueSANryMNSc6C9bpwbcQf8JbQXYqNfxbdJVNbda2PJf4B2uLpjGvWHDFDwW8Zv946C7J4GRVvvaSSbnr2M9",
  "key32": "2FQFyKzbZy7ysKJ6xJAVF3DqWNNkMprC2yPaAqz8fyq3R85JgxY8JFGhD8qQJDzyzAu4BvaqQE7XU2jJTYCpfSbU",
  "key33": "FozAUvB4gnmnmWLXJQq9DyUYMD1XgjUGmUCKP3zFCUKNR7pdEU64dEV99PLYwXsZKf2j6umtSeQdzAdAdYPXRnh",
  "key34": "2u3pTG5u5A3YThD9W3UNWQtEEG6yQYkDpYvvRECeBW5TG1USbw2CDWS8UotuhVBmcwXDNM1QqWuHfsQYYkF2jPwC",
  "key35": "63xfMgbEdaWpBoxcCgqWjQHQYQhBYbn8QeLSBT9bxjLW7F8Q4RKwXR3eHJeqPPp7cex1Hr8Yf6XHvZN3FWbyKwsY",
  "key36": "3bVwH4z4ocHefR9nWT8uBeGmXgUMx9Xa9uvv8qx7xC1JAUeXXwKMYhgVQSfxdny4LGoCFG6GCHW4ZkENR9yGugHN",
  "key37": "28dXKC4GWmJS1sSFBEQ4fs21Hro7VGQW2939t3qrE4gM3BmFtocuVxgW4JyaYo9iH7HjrM5NoHWiWa1jUrfvSWUa",
  "key38": "5c8DT4mRCgBDZs5pf7ApzM5rjSTJnefD4gCa7vh1gXLFmMcnYh71TLa2DnBoEnd61qNFxCaP9NyK2gWrQMKAmY8X",
  "key39": "4kEUSyixazjkJNhHEzBEWWQF4bgy2boieWs6hXMc9F6zx4ABNsRTtQgrpQwJCi2PoLskPXYtQanF3ootE2ddWnV5",
  "key40": "oo8CSrPapdftLLfVVhftAysoR5ngwh4cE74hisek4MNYQEvoHpicHqYJri3KK7P7u8Jy8nnkGisuFxjVFkZPjiK",
  "key41": "6RBHfMiCi2rLmniY6wgtFxbgWDUtr7XnJRf8t42ydaLdLDoiD9f4WMQiNyDtmXnMVnRSQuLYs5vVCJ5X7dJVoRp"
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
