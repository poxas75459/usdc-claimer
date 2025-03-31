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
    "2iqf31pMnHZ9MeRY2zUvGe5vgiDGJaGpevJVHujZFSaKKeRdWMPTDMsEuXW3Fe82VBioZpRk7Y8aSuQNiXu57Bta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b33GWTEpgZr91DTmGAsFUJEKB7vAAPSqWWNFDwjcjzvncSQbjUVQHnXE4LaVSjzrVR19445vYxM1QMHpFRxLzge",
  "key1": "3kXMkpvstH81rxf3c9atzN2s9TaoJ7pMARVCCHs1QPwY9WKt7TUHsGNts3EHukj1CbUUC9yNTFcKZ6yzoNtpkuHa",
  "key2": "5jjNaCqJ21HemScKfirT64APscDVVxE3HxNWpaBVZnU8MUnbgGwbdbUwefyBvuaoqMRnKEpuW1q1niDeXE9GXQDH",
  "key3": "3nybBbWmtgDt3Y5Xd3nbLvHkezsvruXy82ss8unbEHoJSBGeY9t2YVhVTmwqy8oytV499Gz2q4qhLYHRvrnTacXX",
  "key4": "3pq5mQivFdkMvaLg4RvzDjwWxJVToCurhEr2aEhVxnJu2xLoWvYfrmMEntXRxBuaQ7WWFusvohGP144N6G5Mi1YV",
  "key5": "3YxUbzWu7DaZcQu8Ecg5JihaWrZskBtzEjiNKHCviMzKkcS2H4ebdhCAwuqG9fksJS7Zb3Kh5Eg7Ubz6shCb9N1c",
  "key6": "28uQzJc8swttB1hL1vy8qVyNyAT3ZxKdyBxaQL4mDhXcp7X9R69mpQub6TGyQ1sPPyPhfe4rdV29nvfDsk4hHnec",
  "key7": "5ai6MLEgCCk7pRescPycrEzicgh3BzkXRziANQjBvsU6s873H1juteHmkgabJc13J2rKsf8RTEgfxmwG2eNmqKE",
  "key8": "5TKq91Zx6yNTSAdGQuCDEcxhcgcshry9NydjdQhTA9ifaYeJBqW4tddMQFi2C8upBPzChGszwZnfjfQsPQLp58Ap",
  "key9": "3aJd1zGkZSb5BvrghCX6wYGHJ6sNYXLpzSopH54QDJw1ZxeNuZ8ikpU5wL52McYRz2LiJJ9zimZ9jvydznqEYurn",
  "key10": "ouQtCkoMhyrdxmj8Dw4wmyuUN16zsFFK86YMLSFCTr5J7TaK4ZgPzDJbByjFmGN3DnswQXbgQumgSy4n8hyhv7j",
  "key11": "scJVXjXBh8W1y3ZGCAaZjhgQWyeFPpKN4Vpx8A1TpbLzxG67PHsBayj8VUu7eJMJGyamPeFvM9CPEedYshrYTGY",
  "key12": "5EpXBMsBfQ1SaJNqSwgUyyk7UGoCWqsaA7d9ae227AX6JkvGZLEQNXTU6xXDD2nmKxfFsW8hSCWNhmHkEF27tPUB",
  "key13": "64vMzuzTxUeBbreC7LsfVUtMA2CTdXRJiM3cHhSQzvcpFUVhFAEQcp1JcYEswnc1Pz1o1khjA9JVat5dK2Mu548u",
  "key14": "45GyVsW4wi589en3m2YDRLJJxDz3yu9ujuB5zp4QTugcDTWARpBF9mv9Upt3hafZG2DnHXbwaYR9YvjBstSgyTDg",
  "key15": "2kY8YRXviF1k6gvX7isMQP2LK89xhTLFwxJ2aVrWekQp3Fi1XJj87efg12jvdMQzYYvumf8qN48YobKp6ZjhQWZx",
  "key16": "61Lb27siiWFwWde6rZCtxNcZnB9eGfdxYUJYY6yZpSKR3ng8w3c6C5U3QL1K1ADXCeed9PvYBBpxgG5sUaUrbD6m",
  "key17": "4AU6dj9HdSNQ3My82LHWeVQaAJkRV8EDEXkgewx4Y417doSUkBAJEVukjd6pbJcPasLmsJLEX4vkxdZ1He7icHCC",
  "key18": "59NaqAvvDq57NxkzZKNYEmaabMPoUTN1DaNwWMaHaDTkGcqK9DjVf82BZSsbSgJWF8Jxv7sKnJqP94zBHaqbshwt",
  "key19": "3cLcHWzMrhqvdBzAo4EFRXJu7MAo6bddwWWesAXaMvHc6u7pNJpTE8N7qv6w3nXm9fW6YSC6tVwkWGFbmrZg3rN",
  "key20": "3QwoyiLb9gNkg1mBdtnFZkCLWkEPJxJF6RYQeH2tM9MnRDD5aCckDwX5Bda2ZPPXVjdHLM8hVtTnDu9XJQMgfgJb",
  "key21": "3NBbckoXDRyB2sHyDPAYqvAQyVWUPGiyNnRPs3xg1Sp5FEDx5DJFruGcRx6RmVR3Kh86RRkCnGNmcrZVYn878uXQ",
  "key22": "28r1u211MbXPJC2zxhqa2FhNo1cL2kNQEjb1zqbR77ziDbCoMSHfSKv4zehcBzXcNP6puSmsfXNdwYDdvv3yMvit",
  "key23": "BhmiU6sYGKLHsavLuqzySofGBEeXugyudrzvTVCgVEutHw7qdVcccuP233DCGVBY8qiV7fYrx6ABv27y7xqoMa1",
  "key24": "3v54Y4pzofKHPaUrFULV8QNF4nc1eYr3D852c7raXThVEqsjqwMzEPo7LnJFhrr16rRxfAyGztUgFT4jEr6Vw4uC",
  "key25": "3u3BzZDy1GyZeyVDFiX85uZHULno7vJNgXTtieWmstLM8QZPJ9MFwwSfBJdWRQwN4c47ekJvu92RQFDAgPdJfySD",
  "key26": "2Yp3FwHrFYzhN78zzrPWvk7TAUi5kQhew2dNmqCLL8PmHR2wCwWrooK25h8SyjEpvtVj5vBHfcJRXwZYhyW7h6jJ",
  "key27": "ViDNvzekGiUfzWo5PdUkKEnLXnphfg3bYreYCpnYfwmqFyhyey1qn366CxTokhqbhuMaDrxjGahXawRhydgheGK",
  "key28": "5f7ySCk4mZ45GJNSLCpmBzF2eiWgJ5kzYVx1abBdpQgivCWg2DNAqCz7zvNgQxLzquCC3Zo99Uu5Zie7dePHi2mf",
  "key29": "4FETRMeNStu4uSTsmqLaz9J2qBeLcdnwhcNHMdK9m4GtkocnCgGbQU9FuEhEsL5bbmkf57dv8VZXi8jdjJncqjRm",
  "key30": "2ehaJJy9YyLVFkDKnsb2Z3kzdknF9nvSFzctRhQw8cqZm9mNgWHtG43P4VLuMBcWeDNxgSNggz4JAtyLjkrMhfwv",
  "key31": "3uEU73mUM5VRdPbpX2AKWq6k93EQ4TXc6LEWRX1uPsMUGuBU7ocLgmcz6SycNHjrcHN76hRXY3uUB6QotprYDg13",
  "key32": "5AjZnTvU66bQ9Ai1dr35TFxkijL4ELeJ8fLJrg8o4g1gTdFoioPxC5cvTUinXrms3S8rjxpzfCk3Tge4QJeNorkP",
  "key33": "4XUF7yrbP1gmd25kZsXFNuEcnuyFL7JdLWNcjD445UhgWV927U3tbtup9kWDRpzLy8DH2eYrRCgpjhUfvh42DxP9",
  "key34": "2LnaCK8WsTc1orBXLDejJ9A8JBH7f2ZJMFFc2j9XYPeBEVS9KxmNXTSs9P6vNweFSRD2YLxj5k3G4wqiGVfniivS",
  "key35": "2P2UCJ4uVk2YuvBqvEk5TYFVdJM8oevpGLk5Jj25AdGgJb3pp8bM6SJMm1n8givFb5MC3MVW63HueTQnLeZri6m1",
  "key36": "ws6Qu7jdbo7DCgScVKsxSwBVziPN6HfvhPPKKArobCgCBvruia6pKXdF4jYmd53fnB6BMsFn5kGp72UyNtxpWZ9",
  "key37": "2LcGcj3aowdJ8EqRxyr59mgtGnT21hNJLsgtFfB65hgqxAzKxm2Q7HDyyPF6QakYC3zntRWAP9vv5EqJz5GSZ9m3",
  "key38": "2nipUC37R7AXsiePEYVCeD6PAZEB48X143Lws4fSYgUBpuuQ55X8ZGdjdd3iyK6WwjaQJ2FcLjQLpGu41yxv7dL1",
  "key39": "2vTbZJcbKhKJA4DjdbUQRcgsJ43SLaBoacHYUFsaFhWyYVFwvKd4FLWPg6ZahJVskw5eCYm1bFKmUyLKDZxPfcqU"
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
