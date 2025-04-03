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
    "3NF6nbrR6ywg6HZcYftC48ffBbdBHXoiCgv2yEd1gX3mqfHCqBWgQJcq7T3YNiSqBH8mJ5GHaYUwRQKu9ZWtsfer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mXzr3GoqnTvmAFg2ssSupZ7KDbdrqDzwc74AEUprazrUsGQ9WwheZ9ZXNfnxpr2BHhk6cdiHUN1KBrQc4yEA8KN",
  "key1": "hFVrc9XxPPwRE9N3ykQWFvxgmi5hwV814FEdNxmd4hHzfHGvqAVmKcRyAgd7UL5ANScgk8emZv2psaeNFYyLWpg",
  "key2": "3yiicmCcEHErR9cFBHTsk8Kk4RUUiB4yXY8i67vE4McxrztffN4Zw2HevMuYArSyb2taqQ5h5M6DbjYRcAUnVTWK",
  "key3": "C8xMk2g6e647gvVGw9phPEi4JwFVuVsBjrecjqGPWKMxGuBKT6WiEjD97fdGD2yPKMF9cHF7VkRkh3FnXLqGU9W",
  "key4": "2Ai7xeR6vYRVZ4SBpgoieiww8GnA27LXzn3dRAeYqGfLX6BG78U3b3Xht86NVYRK3r8sze4491GqsCcv1AEGQPcr",
  "key5": "23Jn8i6tWAzMSqSfcix1dXHLQ7ePEWR5NV3x8MusfcrKF6dFFWJv3ARtJfKkR6wEa3xHvrc2ExaaRHwoi58uWpU6",
  "key6": "43v2MxfyhQppKjjN6hqYGaZZEfjMeWcQ9gxMRQLG74M3MoiSvZR3bX3Wei9MykE7X2dxMbSLfN71tiEHBxTPRztz",
  "key7": "uXNHYBsA6v9Kqb6ghgvF2xxqgrAom7GiFQc8Adaaorye8ZhXgRs1H4ZtidDrGr8XEjAmbagBhdmRc21LVN8cqPX",
  "key8": "4MN1Ry6n5wA3o8dmBwMcBKUSf4proNpnxiAeGujud1WY6mEZ8yQY1tFfgw6Wkoep1f3KgtDUMRdAXRJ3UVXPS992",
  "key9": "4nmciZmdSvRreVP3gQMAdmpZCJzbeAed2qhTyQGthGbMTwHQE7ysQCYEyvKJqtybBQmAadUZvjoWenwtFe7BhPjT",
  "key10": "2RQELQVpxYMaUUW3kcig6EkuBGCGyhAccWCmU559rGvThV6Kf5DyhtsAfk9PvBjPDAXqfZXfx4AU7hbaFmmmrMJk",
  "key11": "4n2u2coRSGoYuKK3yDaLh5hqEv2eEQVxTB59FrJAm1oUcYhbaFvTV84thfKa2Z5cHVAXiNkecqhjED5nUc1QbgEq",
  "key12": "3PuGBg54NDquBZVQozNiMrCMvQMf8uy6abzyTpJqmwu7T9LXciS4ug4qf1D4muAkveyRTD5TRm7x3gVSdDR55As9",
  "key13": "MCNVHMv3Hq2QwH1pmDovaUaEKkEZE8j9HQJz457ZvmxxRuiW5kWkPjyab9EozjExSnuE4Qfvpr6eDour3TaBZc4",
  "key14": "3Hihj9yTGGdvLQuLptZPs5dXGmRHQBuhFqF9CcqzF4atXEseat1QueikXxT2e14DyYri1MRMiAuW5b5qjrtp2TW",
  "key15": "E7SmpMUr9buDcEAGfd9bStUUMJKsvoLyrE3kq86rdYMsXuFYm61pv3ZaTH47VkAf9gdpvvyAgKHZ4DcePEut9Bh",
  "key16": "2VdLgcXnG8dgRVCWXeykZb2YhRB48AVwJWmHviUdc9ZhVy81bbLGvPSTAtzkSAaEPSMuo5gECT86HgkpQwBRN5YK",
  "key17": "3R1NcF8i8zXf4K3Wm8m94KkqGGnKX4h4nbmp3pQkALQgKhEm17djxqh25PpBEhYveMUrUJ8HUNFHWvjvEhy9xEgM",
  "key18": "4CjXvehbLDQuKt2SqRRKuUYN8DzZa7DHXmnY4ah4LQFXzYvG99axwgNJTwBA8WegynuxhhrHENuVXYyJEJifY7ix",
  "key19": "5M9EP3CY9LHJW2Zw1VN9R1yq9qzBuo9pGpZ8PTJRbKdfURKHL6VjbD6S5VWLYQmFgrwSfMkqU9TuvqPYQChYAaie",
  "key20": "5St74voS2dpp4tdx1kvHXVKrzWYSCkEE3a1NB4hVm5SS5wqwJn6Qgpv2mnutUbY1ccV8k4GFqmvbd39HEhuk6KNK",
  "key21": "vfoc2XczsAX4Jc1LXjmHvHYJjkXviH8cCuepTLj3aF6cUeXBEUQHvJqBRHvHAgYvpB2xZHsFjaqW4MVuA4M3zex",
  "key22": "3kWLwih5bZfKKQTfsTjroHpUV5Wk3dyDk9iUrs94JjXte65V8izACnZXgXtbsUA4oD99RrPDwFXMejTNSnCiCUML",
  "key23": "5PYpu1WCkpottYLjRxoVWQqg8jT3BqvLYTbMPjNADHPaCmHQ9mKs8tpamJKQxApJNbZ9x6PYnmNC1keBDsea5UyW",
  "key24": "3p5swTHx22Ffy4q1H7Ls7tM7NqsipDh9pNZPDv3Gacz4g6n5pqBrTnEx6XmyK75MiebWgee4r3AG2wYNWF6oh6dY",
  "key25": "3yxhmPKiQycD6vDSyYpBYycEgazPjqFLJXdGHfNd1zXuDRkfUPUXBAEPc3NkAEej4kupRcETriT5NioCR1M1fnoW",
  "key26": "2SutYVrtxDPLEGSPzD27mGfFn2Knvgq5uV9u73geY4SwH3goftU4BAoDw63tGy26F5seyiM4uKoraEgemUauxDN9",
  "key27": "5qnwu6zMj5nG7DQ4wTHr9kwR9BW1caCiRTrnjXXegqY5r3YFKcQWgS1ckfhiTUbQAyh6yRAM2iJymL39tv7RJ5uS",
  "key28": "2mZ5w4VSisNLWpESHrSV7T1B5KACh1T4nj8Km2pbfe23G4it2Sj2qWjVdoDjLhFnBTBFhpEd3TQvmbARcQGMmqj2",
  "key29": "4TDKZT42Q9xTqMNq6azxdWFBQTNaPDgfbxwc6t1g1LNcihaiZ2CAgRtGGVFEsJNzasitNt7VNnTaJ3UXVJ6C5wpU",
  "key30": "3cvw4EzoV3ktsXRGbA6oBntYsk5xe1uXmRsnXURDXmYiQSGA2sddE8rcMxJaKmAn1kQp14fu1mLSEQuX2Zgshm8n",
  "key31": "5op9hKghgL3SPBsKunzT51XLgGFM8HZF4YUXMJdZYNfDm3yZVR2RpsxuKFqRCdeXV6kEnzqesvKorPpX5vaLQv3Q",
  "key32": "Deok83MQxtgp1GcCEoLgxckv5Z1Eyn73sXCMuwSYpcpxYncfrTuyG1JdaX7U9YAGAR7HTJ891H9TJeuqzEBnMS7",
  "key33": "FPC8S5JzPHhTkZ2LUCUvHPtbGV4RuD5QQ3Qd6xt5hGXQsUcZPhKQ5tc5rdZpCPe3UPa2DPUWv9q7X7xLqbn5SJ8",
  "key34": "3DSNQt8RdfKmKQ98DwDXh1sh5AR9gA9oj2u45MsiCbE1RxMDqGQCVB4uLTz8pgaaAaVqqSWs8Za1NzbijVv53Wk1",
  "key35": "2tNSQTjn4opGbyjfUZGgeQBnTuMKdkhSho5YF1mwzDWptNX2h9Y8tpp56dLQ4DEYSLxVyZ2pvnq9P4CsNx7tASZ8",
  "key36": "Kc14MFAG9FeqrwcgKp5EHjqPAJrxhQWg3YRFvsN4ttWeKzAUxMPzXbsLc13jzYgo6jjkyQDV8HTotzRUDfjebD3",
  "key37": "29Fs6csMQ4CNhXLm52cbbbJjVRut2GRbMcT6ZFiRMnuYkm8A5rj6ZQX1mRrRjssQrAc4uij9KAGgbhPCw4RGnK54",
  "key38": "4AvDViJK4V2B6BK6tmQk5gkgCbwcfFCcr3r8Wj6TuAsomf9APKYf9F4x5GnEuUzHfNncjt3opT5urJZSrp65BqqU",
  "key39": "4jp2PWD1jNNsqbL3gfYybNxWBp3Qj48CY4rohxJowMPYNhCPfr1si6sQWCbfyj43DMb43VEA7RdRTzG4BPQKeY4n"
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
