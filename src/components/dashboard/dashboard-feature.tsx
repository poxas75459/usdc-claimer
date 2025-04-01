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
    "5fUCJDnLjHebJ4Q7EsEZBSsUP7mC4DusyeFKqmwFtiokLeXc4FUnjsLaC8ibpNZzfBnwZBA1d4VoE7HLJ9B7UfMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UKTFTk2ifFhDtnNf2FZTWUE9jkyP4Xe1uP8UfxJLj51gsYCUFjgx15QGmgkAf4YoYKht58rJtn4QCaoXzjNAe1M",
  "key1": "4dc8HUxzkeVGooduX2owMaSJSr9HAv34DrEzwSRmbpRZX3s5SATmYJPhCsCrSgRh3ufTAyaWVrin9fgXHGUyG5eU",
  "key2": "37TG4gSxxVoL4TiBcBYGwtDnaKUcYZEnWc7ZYCcpSnqTFK2N9NHaA2nAAdGtcrth8Wtt83KvacP1BGe1fogXPJcj",
  "key3": "2yoEVCP1MF4sKcWNkZuctSeEXUgrMmMQNdctdhqf4iyNLuwRw5wxhBk7nQLwsWULTXsppLmr5YwF9GxZKBnEcoiN",
  "key4": "3KeMEhUKsHwuo59jYDPrpaqF1wvSe3crcqVNXBMefaMPtXtJoRN76WfREJm594eVkRvWshsHrWjzhEdxMAScixhu",
  "key5": "UeP4mU3HdxoqS79XjizqqggHuZtM524AvZahXsBzkyAa7WTm9qiJGQjxs2u4G1eJWweWJvrMozP2hHfc2x5F2aW",
  "key6": "3RtaApMxFFrZxj3qZogVGKppv3nZgXvv6AX2zk8hfjY1XaTbUi689fNdgpRWqEx3uoEa51joNzceodRKHNV1L4mZ",
  "key7": "2odS4nUDAVaWGM9qXRzFkJGX1KGhUYZstCmCkSd28oyMQPfpH8DcC7BrqXmkmWi3LyAzRpVifdrKG4qUADzbL4yS",
  "key8": "3hybFhEnSB8ZeiLsNKA7ntpcuP1fQP6vfqdme4jCEKCvqcEVdDCzpA7wdLSsDJxjxXSZK68ZU7Unna7trQz3D1wm",
  "key9": "4aYRWBCYY7kdoduT9RMKwYeuUKP3pgiZqov3i7qmAYJKjkPSQLcw7ZhBB2JVecrrD4EQVDuytKodFBWynmMkvvTd",
  "key10": "33njUrAHm73pAdmhZjWDALjttNVQ5HDx7rqRT51JmtVtA2MzxxutPVcakut8MnMTE7bWqw1Q6p2RmBjfxXrxwetv",
  "key11": "3YvP8v374ZCo7qboUa84dDALPjCtMyn6E8WSbmk1t8W2zVenYnKWC79UT4C9T5bdz3ErJsV2KuvNb31kM3MkvB9d",
  "key12": "3DjkxU7tbympyJPGxwtDF97UvKPM2wHWmDAEea4L15VtDmhgjfvVoNTSsq6MHA1YTQZ7dWFMft2QPDeB7Ejoxro2",
  "key13": "rgaMMnHJTScCWgGb4RzYX6iDME6pYLhPeAzEdwcZJJepfZPQhZMEmh7WnUfcFEJ6AWuKvpvD7RSrLpPGGmGsPtv",
  "key14": "5thkKgPwUjGj3XZRNTvqLaoXQobTagbbaHUdA4wc3mMjv2KK7GxjEJnotJfBpq2GTrCUWzePudubxHRwHG5VsDXt",
  "key15": "3xWzxsVkBGZZRzv4F8j9XrHzxWHXVYnmewrC6UpBJoSyQr3pFZR67NbyrV44SNxw9eWvt2j1Euc2ZirXNhPRS7MK",
  "key16": "4tPspRCgjuwcLLqN53Kx6EcfnEZgXmWAoLY5Xfb18cEVaDC7XTtEaKmCHCdw43PfsaeF1ppHHcFJGvmShP2ECHy2",
  "key17": "5szrMeJ9WND7UJV1R6hBrviQqk6KFswAZ6yhoXioAb64C5j5QjGUUvopwegvzk7iH71UTr3vwxvX1RPs4q7P2p3m",
  "key18": "4cjWw3ejpqmfaJvYoDKT4FB1CWkXPAHHoK2FM3fRjPZBBW3oGW1UY7gU5BV6sLo4VH5EYP2fW1cAqsHcSUSzjd1S",
  "key19": "5n3nhfuMCECddk4WKFwMx6tRCypBxBSNDAQjwaVjU6Pv4yHvkPqjHnKnuGaAeJQtP6JwwLpKajQL7ww7UbUTHcra",
  "key20": "4MZ94tHAsLybf4uYpb5GcJ3eYjhP3wCcn8iHbE9hmCH7vqim4rbDw7xPpGdV9v3Vw9NBjS1i5tCzfPc3kGCecTNJ",
  "key21": "4kQaprP9Ws4vCk9SZ7GbcmYcX4xfbbxK21MFrs7EetUk6uBLRwSeCU3VvFyL9qKsvWX8QS2NRNgJMK5fJgJhrXF7",
  "key22": "V8fgWykbS928yrcS5oJXJSvQmVTePRziitHqYm6w5ywsZciauiFYsa8yrbTU1hcRFiuEji2ktP5A7pg1iP3Aiar",
  "key23": "5PUtFAAwYqaBUkFmmwM2mx3icpfhj6gw1JtEt26BgaNPsyjBzXu1AR4Zhyn7i648QCo6injDpuaY8dxtCerecZZP",
  "key24": "4ZkbeJvp9CeDyeoumSBUpDJVxT3Touin1HJSU8T65WAorTDj3mx5jbJRzsq8wj1gmMkHHPQYRyXiiKTXSVvH2sYH",
  "key25": "bFC4aZ8Bw3t8gLtgW5EMVdZpRjiYK8533ka3FWTM6aCcR4627rYxfw3EJHfwJHtV212qQC6KEhEeQzJXSpi1aos",
  "key26": "2xMByMc416CRvCyf7Xf6xkcZkRHG49MPy4dff5b1F7Ljjs6yUcLYP7kMnA4QYtDkgAyTq3uTfmBHfETz4BrwGLSH",
  "key27": "2NDMbRZKymG1Fz8coRuZBSkqw23FyvYGwfM54TLpXn1BseDyQV4yV8E8uyN7kfnN9PGA4hmwVaCpvdGFLJmfXxk",
  "key28": "uvTpbvubFfpWSmjMPuRW9ZMLwqYT8BzmPKYD5cawzbT7FSs3tEZKesWpuadUbH8aky8yabEuMM3vuteLfgzMAu7",
  "key29": "4qCWTw9dfaZUC6WKHGFGkr6CPscbBebC8qibErZLEnW57ZqJY8d2M4njqVM5ofTbx8yBuLKL1fKWowD5xrEkTmto",
  "key30": "458CvqrMkd9dbJ55sCep45dzDiYaRu2ucKRYiWibCW6Koryp2gHjkkvGnMY72Ecije6MsUu38K723H1yQHwg4SNW",
  "key31": "3n9398Siu7d1DrbMSrS6BMPLcNY6tmbYWrgGtoSHbmw4WfUVTYKdfZgHKxH2Wf2ABkAVFyjmFKKcjMgTpqD68wBE",
  "key32": "4RuHYBcDn7eS23qgP8BurSqBVkWyq8Lo5FZSTyVto263peZCyA1YqaFveJP1UuVa3XUhUBkAr2zNbHHqUU2ipGPJ",
  "key33": "7p5b7zGbXwGrdwwdCmw6KWDYkz6Wr5vFs8KGpv1p4WY7qXQNiFnzcMV64uVUvPBFnSf14f4Lpejdgszpyr9qTb3",
  "key34": "27VDZ8KWYRc7hGM9Kaxj8uyLkKXx4nNpn4gytru72zugBfwrkCTJyWF1PKsckBiXboHk9T9DTCd4Eo7yUrqbJSwv",
  "key35": "8jSQTXziZFA2VMT7e9LMGZr28URH4cmwuNDA3sirj1gXrKQxLoyKqf8udFvea5eQ4EYEGabMeXirGXaiTD9Nqjw",
  "key36": "4hkFzuhmSeDEy9nH4avm2udqUkTzSeBw2LyyxSttkM8e4ECZU83hNKYxGYBdKExUacheMLmt6wkUBHrEKH5HZH9R",
  "key37": "woHT8oqFQDDa9yVpam7AZWPQXWozfCtmwYrsy16qwSrmNmE2u8QpipnwtRKFAmN7iqP8q4vNjSa85bHXgtsFTwh",
  "key38": "2DjTFhRLRtrYGotRYT6VcDprNTkAEUchQHn7t5GgPF7T28Adp7rJzQVKCducsGvTPKh7fyiCPgq8GiT6Nb6M3NZL",
  "key39": "ieSVb6ZUjSfbrZV9aYXP4gynevRrtBLKYkt2KwdWaXK9UZsv3w2uVpT4VwCArCHD8XQjufZbkAAX9sgnzZvA8EB",
  "key40": "2FFDExEsVpKMHdMrzACiqz5ks8Y6sE4mMzkQGu6tV65SGhRQtF5MvNB7JKdNNN9EhVSzUTETM3CYg7sGAKeNNLSf",
  "key41": "122Hs953UXDpwo6hGLSo7ffWAAGRoqeVyuhKNiJBoyi1Yrzzn66eAYNvYYGGmZ6k748u7RU1zrc8momoccA9LjD6"
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
