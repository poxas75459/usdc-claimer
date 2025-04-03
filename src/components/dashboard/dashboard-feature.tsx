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
    "4kaAYLFVyN8soTzLje3kFjim59fYmbXipDYa99mff3ys1Pjup1CmR9pCtQPYKFwvJjb2cJ9hdoy5vjBABQSGzmef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53VSTpiE9EvyH6Lo1yvUA33J35VHke2SZSX3Rsr134jDXTXp6Co6joWf2rzVCwNDiU5BvQbEdPB3u3G5TeDt1pK4",
  "key1": "3rGiSLny1vuZ34PEuLHxyEmwr4GG6ZgUmHGPcbo844SXZQBKa8k8wwQXZjkTFTpxwUvEFjxPyPFvkx9eBckJDYeb",
  "key2": "8SLJG9CZ32drQ1tBDco8uUxu6DoXwezg4fDcyLNdisKfdj9oeks7dFCC9ApSJuKQpRJYAw8dyTg8PcXTkuyXs56",
  "key3": "3qMSwySMywyFVEQ2rizC9dhQBoV5AeiarhugyHXLhSMxf46VU7fVaTLdoAXtAwdrHJ2vq9XkvHKfRPHx5KPNGE7K",
  "key4": "3BjjQUWmJ49g9RrEnbtL75Ra5M6sq3xFAtkGbZU1LsbUB7SKP44qQ7MMhRJxHFQxuDAx2PGW56UQBxW4cESsvvn5",
  "key5": "E2sCfWBNtfCFzGL2iTtXrJdVD9a5s1vBgvqAALHmgeKXi7DpkCn3rzTa5SwZ1kA6kKWTZkzUGd8wRQd3V283WEg",
  "key6": "3EK2TuZtctWeGAofEga2yxmt8TS1tRxakuTqPMSJwcwwiQEq9DVpSaydUHwwKxgKn1eQMnUyn9G67rtuXByrdbXR",
  "key7": "45cZ4mfCCxb9imxZP1ro2kuzUuXdGi4f7uc9gGGhchCYdBtbPZU79t8fCxcPBk7UUQ4aKoo7qrTqvMK1qqafyU7U",
  "key8": "41omahmt4VcSbArrjULsY1T6h95Bm9V3VfeiuocYiuvXfM8jgYrcuXwuwVeqBaHqYebfTxCEwuv4Mz8Q8DagXuvu",
  "key9": "2om6dpFBWqfrsP1YtJ3pHLYbejFBF8wkt1zRRGtKHnkG5vuPqVWYYCuWUGUa317g3GGHzRA7Pio8CyfNKvugCKvX",
  "key10": "3G9Lp1PYimgKqbMSantSjtxtijX5QyroM9dBDmzuJ4cUkw3QrccMAaJYn1nqboQonJkGdG7iZWvbmYDmsUzE1i89",
  "key11": "4uAYyGVseQrWq8JtDETaWMbKi7Wt4Esz9hyLurZzPPRpfkEQssDVeNz3kppSJsBJtcJJp262zUT6FQG11EemPFh",
  "key12": "2M8VkTxqVuvZ6vsWbfHnrAXDtjc2yzx43Dg2Vfmyw7xCcWEGzU8wBQTj943Av8xhfyCAn3hgcEmpeya3H9vWoUca",
  "key13": "3vBZ3STfa5dipY9ePYQxKkHmPfp5hVwfawGeCjVWotfHmicXZBEbzsHYoLhG3i3tc7UZoBD2G2EUXpbWUrtY7B4S",
  "key14": "FSuE9u295ZhJYzG8UsNx9ZFwhX4Nwi9ya7eX7TPDnnyrFxhfLBxNHf7asjawhEkgyiNeDBxEofqEx71wyAMLDJ9",
  "key15": "3sVjPdSqKDZK8gdwX5VYQPLzJAryTtEFyA6RKx4Roco8UGr1Dqo7ESPPmc7wVWuNLfrs9QWosLK3SKsN6p5KjM5e",
  "key16": "62eqnbEgf5KWdSWnSHAqqwxFNGkuYHHpFQKjk9AuMyRygUR4n9PJg81ycduJJx2afVPNVQH9382F2tb5HXi4Xp9x",
  "key17": "Lco8NuhmXA22tkEdH2AjfqBW4pg8SAoa7vxh9zk4b38DPdM7yuu675BFeWdsDau9FCZHk23GTE5DH21vEjoDN6S",
  "key18": "2uENgHHMKW2oVTNbcxHR4kDWdts6ADYe15CPqrVHrTujkDUGQKzPT9X2y7nTrprxsJhR7zhsg3R7cBEzHkEp8WCq",
  "key19": "2FRAUB2aoxqDMarmBHrRxRohWy1wXtzm3VpomNjhnGGoyrEb8e4BKGMm8sKh63mQBGtS95YkC4fBxzgTcUZ1Sxe4",
  "key20": "ZAzuro5h1AjGT6fG6cpFmWyi2ArooTo6AKXFmCkyCvwcTSzNnwDCoEVsDRzN4JYxRGjJZPVegZNGZ3YPZR6ub7p",
  "key21": "4o4p5Sk8kZMFzfNeAeFV3j7QWShtssyFa8rN8nLUfTxSyTY4f5ER6meN1C8pw1ZRmwWzePK5JEV3FG9Nx2zMVtjx",
  "key22": "648LVLp5ZYsw5biwm4HVREXVDBtphGjV5fJYpFXtRwTr5GZJqKU5UEpncawPFgNHW21JvGHwJkHrWr2AcbSxzykf",
  "key23": "52WCwm8PCGg9xGT9i5Upi2jvHhAD5NbtwBoyM5KBxeZEpd9wgkY5aLBgqHXYkiqaKUMo79GNQTaHWJfv3Xo2V6pD",
  "key24": "63q1rMrB6iMeS7dXHnzsNUyeNJRbB56SUUpkTkBLoZy914UvopUkH1HeKgqkdNExjJtrjix7FuCc63CveB3b5Uc6",
  "key25": "bZiGSj4mqwbaJd1Ghs7gx7WwUi7LnjKpbyCxE8irmdDLsEVrFeYtAmYLY121B9PbsdYxJ3xPhCvWwFgCV9QKstd",
  "key26": "4U3aKemSQ1gY3zsPQJGiDcQy5h2qMFfSLiDkfVBuqvbJTKf194VpPk33NYFNMu3FpraHVK6eZxEXzngnYDT3SXVr",
  "key27": "5F2QMZFQdBNWFzm5nmqtgxJNb5Hi7H9jbDWhpazwHNsVMBbxCBrRRbxnxMvzF2X5j6G1md2MS6YC2xD7hVxhbWxV",
  "key28": "4pnx9RSA6dprHaHSSGpL1KABkD8rqzRC1g2mTNjTAh6gnndVtV2x7eaxkuHeTsWcKgDPprK6nF5HqqxvfgRHSzUj",
  "key29": "gviY4f2YEjNe1WhSBy8BANxgX3QfZm5gZgcvmNLLVkJN53vqHem8BGv1FBu5fPMXTqEM9cnWbkTxqVCgfbLaBBJ",
  "key30": "2GX7UwVUYoW7cuZkVACZ2vnc43Gm1PiVposmuj1QDxXc7LwwHLc8dQVf6BYaU1WsstdHRmoj2YhRMS8iNquQKqYM",
  "key31": "59bJe9k7TsbdepRjiEhaWBycWjugEKN87Gzrkh1aQ5JYj53i9L6pooH9Bqyw9SqMBcWnEbjSVMRuCJaLzRZkSywN",
  "key32": "FwZoCGjYLQqG1SjJG2BZrxzKxTju6sZ7RSKGjjU6ptLUfrK9CEF9Fwo6dRp7YyxYNGP2mSW2Ddu4ydwQTQeaRAo",
  "key33": "bd8hounEarAiQKhP1NbsQY7LBF4C3VpxKrGwxVMuh5JdCTvKGkT3SD9BAyo61mk1Zj3DU852jBMuaDRsFaUsQAv",
  "key34": "5xydtf9n52eVFQNwvFtxmoTSc7f9hD9mPyQiaWYWQ2wFqaKk5QjTJhdAJGAVSgaSKBVuHUVGpsPSqX6qn9MHsoKi",
  "key35": "31tr5u7XBVgSS9DtmYUivLCP8x3UhEAMphgXm8XtbLvxgtexow9LKWyBKNWxehYDNwdJcq5vyVaapPoibSRhcB5u",
  "key36": "5dafBoZd29P8SzNAxMThpymQjUvdEohACKUv3DFyq2Fob39B8UA3qwkSC4t9vuCTMrBPaKxnXVq9obxs1NEvSg6k",
  "key37": "fj3ajrkiixCLr6rnxbuyAbCtL1Nyf1E56Xdjrdut2Fd1oPSqEg8bj2bRAhysM2A8KynCcURugvEvB9MZfPAWNP9"
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
