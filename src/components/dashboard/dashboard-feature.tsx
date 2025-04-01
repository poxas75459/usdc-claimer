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
    "RVKCJKsF1gpUWfJqs26cpEdAkT9Aj38MfEEQBHXuBxzLWpoqsE8J2h8FyxL9nwWPHLJbkbLygkXjFkVn82abRS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ecRGLELNGWnYfpmy8jvCvpUciVjnGmB22s2jBFdgUXQnm5oiynVMg6z4HQ2mTuWqfY7CTt3msJjJwQMaEWKrfSK",
  "key1": "2DFrFPmBaToS9MiTLrt71cVpdkCMPuTNZQ2XoGSymL6XZXJV8ZL2eAk6gSZvBtpnfVLwSgC9NsGHYKCQquB31B5k",
  "key2": "2qJCM8sufB4nShg34pczXB467FknFGYygkPRcTc4FnWRuwSVKKJKfc2M4Vk1iZ4mjNLjFcejmSixy8foCchdGD13",
  "key3": "38Kihx84TZL89WKb1HvG6SFv5ZP7p7sMvrkL7y6BLQAcNhkuWnjdVWRsF77kcDVZ8HSr8HWnqTJChnUjEvnaWhLi",
  "key4": "4pBxrh8uvw9aRV9wnwvnpQYLLokcDYjx1UeuVivY9y7k8sFz3eWXJExTWPJvDDwxjmSqBtyjqG7zqoycLWWUEm2H",
  "key5": "4jvNHcUHPR24S4etPut1mu481oyb21j5pUjzSJQAaC16grwaQxS9r5iJAwz1CRFREm1t6jvZEWkssUep3f48Gi1e",
  "key6": "5rdowj6PGi4kpEHgYU42Drtbg54Xyvp2RxvNSre7N8BeNKoGkkcEgRoFjSHzh2EwnU8LfnZdiJLzP9tgEBMCf6tE",
  "key7": "8sxrnEvY9H3Feq2NsgKhFfcWMtFeX82JctyrbQJxNP7qsNJ4RvzYAcApCf6bjxvdRGdH9MUqkn11BSCXQ6cg2iv",
  "key8": "3d7CeXLnezzzDK452JThgWNodxfgh3BG4oiS4z8DEzwXMe2U5CSR2mYXRp14peyU6oLAzongmK5To1tArtyDNvjJ",
  "key9": "2XNonpkrBePxh82P8br3cMkMKctZnffJw6zgu8RpZonXorFY3QyYxwbucfaEbpF2swAvdKgEgKmXD3siWFK3hcoo",
  "key10": "2YJLWSjuFXZaHizcXmwQSV6EfpJ7BbJbReyJKv6tJ8aNF4xjd9D21UWcLrcBQEAQssADCDrNZZkua7BNR3jhRer9",
  "key11": "5io7wThjqSkjvT9W7Nk5xUpa8UqVQNf48srBJebYCgbCWav4C4zFgNo69881ANXsHh1xMxtMgcVPaM3yKGAvSndR",
  "key12": "2nwjwKB7iBApQUKJmJvetUCi5JqMsYXEViXKZb4jVP4vDGnJdqV6pm8vMa1DxAEALQzSmoctKK69aqMHuFsiLtVM",
  "key13": "3mrdcZHMwuyWU6dpQpeZrKQ8rJBxRh98h6Jxtp9C134ZPHytY1yuPJCRe7uWwZG8evNB95o1UW3xmfV5kyzaY3bp",
  "key14": "5Yj9SLWGup8GKS32ajuoUrYYtNm9GKdh3cvFk4hsrCRXieuThcpCsNLyFnFLX8rTmYPrd92GyJLZExQArysNFw4K",
  "key15": "5Yd69uHtdrH9uowRLL7JeEHFbFqfoKVNWgtzWH3KkZvnUxcu5bQYAr6C535XUFGdawvtaT8HgJsyRnrCHJwwEt7C",
  "key16": "24iVB7Q7ExEG19K7TgGZyzvQY8581UbqQGofo9cVyUE9qsHGFUwY8MzU7HAZNfx28ZargtEc8DNYLmLzeHADxk8V",
  "key17": "2PhTUYC17iJs4p8kvm8sBeM1WrejUcXdyULL2Dm6J52kWVCA5A6WoKjmVXRZNpAQkGP1UiLRm4zTW4UuA3u7yVaQ",
  "key18": "3rc3cLFo9EeA1ioJgJuPDLJzzU8s1WwucdmndKoc7c6o47t6qzwkLYUjjQNM5rZFz9r8LyBHjtmucwpmAmKhDcWH",
  "key19": "KNCaLBLwqkYNT5XZbdBqsoKuV68UMvx6xejWp964WmJWiUD59b8ciBLL6ixASc6HSwgkjqqceKtoJytzAAqwDxu",
  "key20": "22daE5vmn4QKjPG5DuFotJZ3MENP9fhVbHHjGamqRE3cVZJbn48QdBHib9bXSMcirNWvMLdizuPQEQyjPiVtvP9t",
  "key21": "2TNxUbipez7fb53BtBB4RRrd8N6SJ7yzfYTLrgvFBXETeoDscbBzHHZDcKgXKMrv6tb9tSUpjwTVGiNzSxWBJUAE",
  "key22": "3o6oCKcBsWkQDgszk5E1QGYJP54vBeQMfp2sB4txYG38jm3yHyQJ9y8Pv577BtSVywVPeRgLH9cdHSw9FeBfU3ZP",
  "key23": "4p9op3bj3Pjx4grizja77eCakoqVWJrsVfbj2995xBpySG7LScNXXkmX3M43PicAQabPF8CyfNk1pQadoyRvVvfD",
  "key24": "2f5wpCxKnifvuwktEZs3b4jdS3wjn7oqkaBxkEMpdCuRTaDXDPfmzDbLu4zLh5tN4U4wpVvZhKk1nT3kS3oorU3J",
  "key25": "3p9RCyb7zXwJsKMnM63LJVMynokCGwvqRaM6MKWe5oaVYaptJR6CfsAKpWF2WF1P9tujAwqzEEnBXa4VniGVdCkw",
  "key26": "491P1ZbYa4FXoMrM9AR8TGp2X2n2wxnkhGgKZRrA2m8QL3bRn7RBNMaKq9uw3wKKHDsQa28Xw8zXePPi1fUq3vCL",
  "key27": "TPFbLd9nxH96ZNWbzfjKPNcZq8zqrcKJSoYQZM57RiuiB59W4jpQfTQ1ngLuqaGiJKPzAT1jdLUxBJGx2tHXwdt",
  "key28": "4TPXkQHM5yBiq2HQMUkcVSttDTgvUiWhgGaYt65fpJkx1xxKsXNQz6Wrr4DQD9ZwJL1GjQ8ukU1KCn66o2xtoQhp",
  "key29": "32EGFCnuzfJKmPqFSZCfqqeSqSJFChBjYk5KXaA6PuU95mMiGvBEnGanhzVmxY8ndXXfZuTEmsxVxDucGP6DF4Mo",
  "key30": "a3u1U64TMctiCL41fvoeMX9W35wZTH74dhJjZ7NUQchis5JkWsrFaoAXknn2QdWpoyN2fHmUi7UvjFSYDRxpqdg",
  "key31": "2xwBJPHnSubUvsYT9mjMKYDt8jmi5kpbhxLxSzPK8X5aC1wvLEXcwF2kEiex976nhYSdBkCewTBciVk7uX8tJ3Lv",
  "key32": "4RAXogMbpTFUyCdLqcTRvE1nMaMA1xE2FxKsJGRpVkmBsKBL112EvTkgTe6T9wdug2wwU19cb6mVgUF3nemZwY3a",
  "key33": "3U5KFmH1GB69k3yd8738sVpnBnd4JV7o5izzSv4ieHHMCvTUBquoqrWUeXhgtPexdVBhrdZY3xwnNJqypo6vUn5v",
  "key34": "5VpA5qxK2d8B8hiWSa4S4WFVpCVNnom5Wivu98FcBpVVmhUrhgmHVByYrX3WYkhPqjJKTE1ughBzgoLu2qWhpgGX",
  "key35": "42P7JHgcUTgikLAZNTWdjB9aqXjKCsdfBi6TxXDjqSwV7n34Ccp6dL9JqkgvTuNvCXx1ZZ6im8Ufe77bCZCfvu6M",
  "key36": "3vRZdmhF7zfcqxaKjL3NsqX27pweYiTidv2QXPUzGtV1regmyhAm7V1yHGgVRHCVAgNzzipqrL6N6y2RPBRL6JuY"
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
