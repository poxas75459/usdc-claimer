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
    "4SEwEcK526dAEhaCWYxk3Ks7bgzVGFaZPLL4fWieCAnJLAwzsSCTFeGfp7TmuDqa1fZgUnXhwfy2CBu3462azJi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TSr48UocuvCojkLGnwwFikQ199hHtX38PtTMsWrKau8SGsMm5juUSrAAp8v413BWmboRAeRvDCX9RG4qNqvJZwq",
  "key1": "qAFEMTjcMCL6CmHL8vFsfDU1LWBvxGehsszQkB3zvBkzS3efcUoK1sFTvXcZwyXDiYzTpyVbJdMMx6nVjoArbUF",
  "key2": "aLxScTJCCA371P9fJaHuLaE5CBKcCM7vzEjxpNfso8WqJkN856vAHCqrRajxByrogAPhYgMLKHokVY16Hn2bTjf",
  "key3": "4a2HoVcJndH4WJ5C1NPxMDqgJHHW83CcyaCjiHXip3fNLwPtH7PRXAq72R3Ewc3E3KQ8X4L4GZ2XfWuJbX3tLMyS",
  "key4": "2XMoWz4eBJrNmJoizHfAHXw4GWyeYqQn8PANzMVUkJNFUbMLArsUTEWZACdXd36nwGqycxx9zv5Eq2uHXyJoFXoh",
  "key5": "2SMCyFmRvtnyZYEDTvFgaAS1jASFgVLdKnt7uk4BzTqKKNQ5qEsu84Uhh83X8QTaRuMy9NhVbit1jfPG66HV1jpp",
  "key6": "5pT5cTkA8ZerFQxLdfb8QX6kH9y4UjBTZRoc7LLd82miWPD13HTpiJmV4i1cneRvuEywF7kYUcgqWCsoN3KLSB5u",
  "key7": "5nMLb44jMrn6YALXSfLvDVh4UPJPN222cHDLoAv5GzE3XkHvpG6jcgLDmqWYnpBMULBabEJ22N7raPcs9UuWG25p",
  "key8": "2ik6wjjsFqnmYzrxtqbpt6DmyLAourrCQ7tHEQDdAf95om72wp85RkxJhRQyuz4Gicz2tDeApLT4BfiUe4Hp9ZbB",
  "key9": "5hKWUadvcFLXaN8DHdsMuz6vbspf2VcTjV7ND9CtcZ7nmM6T61c7eYdjymEEXhuRCJBdfica4WYStPGD2cbxe8JN",
  "key10": "5cugNwehTwpBYVkPNjyd9FUkiuzBQSL4qw2jSAtFyw74rxq9V7zwz2Rdm2XWe5YyYwFmo8scenxLvBf2mXVFPiiZ",
  "key11": "2GLsx47qYsyPW2A91EZvRfXjbNkKUW6Tb2wAqFtHoPWZXQQjAyWAD1gb4yYSJ95gfJBcma4q9esV816ccCPPsqTg",
  "key12": "5BqybLtygHb9CZhcNtupSW7Lp54HwV3rorGHWLPm75NdP9tLZ46t1QVrygfpPQjFW2KyXPa62GK72oDUsNqrkCXF",
  "key13": "4p9isStoPvFgjEJzSW9dN67D7VnSex2TJujvm9fRcUw5VAtcXfH1tgkefSdFrR63SKGV5D5EXAdDdEdviabAGHuC",
  "key14": "2WgnRSzpWywUyLoPcf4y7JzCdocXwTgYxpX2NrJj2joTHt3xQR3P9WUyF12aA8PaYFWmHje8jkCWaUBHmftFYjAs",
  "key15": "teD8nViXXvX2Y4F61djqYCGzXQvmCXoCAduTXQq2VAMRXwhtcX18yJXtAJpfcWti4MkwYHWzkbLdJ4k2g7ZQmgA",
  "key16": "2fnTojSoegbRPVp2yMxH3UVms7vgTfg2jA1S8rtaqsJE1ewSmrz32sk4Rt49sFsHPTY7JnBLC8cy1JrYE3h4Jumr",
  "key17": "5aRQPD8ZDcsijiGLSPwA7BQAMwt6qf45Z8PwxBiAvBbELrvmoyAeVWZs7SBBmzGLXu4h9xromtx91rruwn6e7qcN",
  "key18": "4ZRePfsm1prFrB2uvYLqpWAMVe8r1VoX81M3qoZGC2a18Ha1v6oxagPq5bbESUWu66PAocaEuDyudgSsHQwXpYvk",
  "key19": "32sWHKkkAxyoKk18EbjrLTNZ1ehsj7CuTNSJcpF2fbjFVQfQZRfkDpXGV6nrAV4BkMrFbymHdHUQAnnaYK9QLDbd",
  "key20": "3saZS8c1ozKYg2ocbGpEW9CtWNgiJJSLkKDEgJoYXxiK2vjUKbknAvwDvjbRADdaqn8KpgaQTyUantirL9mJirnn",
  "key21": "2YndZo8VhgTdGk2W2QUkHK73sZGLBU9RCAPgXZx1gCgniGmCBLfgPkd2PaWMeZeU1ZiqkNhHy8kBvP7ZNHUXZLaM",
  "key22": "45VEZWqZ7yey8MktMjnE5cPU25YgLcMXz6j4sg2bvRE9gKVCGd4hMcEBZdLBGj6yop1XX2RVQJfYesZGkeKk9k3G",
  "key23": "9Rs4LVpmY2HJ4iLkEzb7ocJXRMgjG1HTgjmrh3LLJScTGt8x9UmLUaBdrtRHwSSN9janQENEC7FtRsHqFMVyXQG",
  "key24": "9JTP6Mtfx1P8KPfPgsZrUBNpAjfgMxfw9zqvV3ZnikvLAwwqoeuzdqiGZV7kix7sSuCH6F2DBgtMdc3DC2orbq6",
  "key25": "h9QK3p27fQyWr1EN1DFqmAZ6mU6UdeMLTvwf86dM3XbQKDmLctCDxtaVy9A91YbuZTMtipaDi2mqhu7Sq9evtWV",
  "key26": "2KHjnZtY2bUtfMufLJmBMTmjgd5HkGjLcqSG3AT7fWECNtEdcSzCWVdYRFsuqstQCsZBgDvg2XrTaQPezNJ8BXUa",
  "key27": "2DeG1bYXneyk1Sn4cdn9DxgvVT6KvfYkCXLeshpCAs41KwMVLrQnyGwCSqyYh4Bt8d4QVBgD2sdDo16z2QrSTxFR",
  "key28": "4gm17DdiQoiyHdymCTM2Rhh7V7yC1xjYbDUT5Ef5YdLwqK1hpn4rteyrvG1n2gZaNKcSTjLjLiuJ1r5mFd74ook6",
  "key29": "ykHGZYCkgqxr3KGiaBH6DQ34xD1jN8eZnvAjJveFqqwuLc8s9cfaoFSHSdausoVpfKapY5hubEiQUQywLBVEAHx",
  "key30": "sYQHroPTbbEnpYGu6L1DcVnSqXLwvckNtoBhYfUAkjX7hcwDaxzK3jmsM8gY1G4aBFjG4Goe31YAWzuoGTN36Eh",
  "key31": "5CyYTyCPbW3157pWcHMJzQbptNCC2VeVhTYbsLaZf1wcGPjsL2RJRWg3vjJ89BiFvubkWmCgGwHiPTwWNMhXuZcJ",
  "key32": "4ND8zEnaTv63MZQgRHgsbd4ShpYjKc779sodAVFXSPioMaD8QbLYt6AQcdefZ7p5xaqQgTZCsDFyjMEeL1g3gMWx",
  "key33": "QBwR4Cs7ddWC4RYgAGr96hYCbtosyegR2g2Ap8JHneG1vhbpYY81JsR1j6FNrppZr8mK2mhJnHBvJxgmENUSpcA",
  "key34": "51nbaqU9JgtK2XPZhw71oH5h9VZ26UawpCwKbvmqjEwAc4y1Vbz5KZWLyUyntJT1aRTL1bcYiK2K3PmcJpfRxuAw",
  "key35": "4mJmMhdPWBvyQSdqFa6b8s718nopC45aVWWBAxAVWYJPqvYqgsdH26d4tVrqLY4efUTPyqCXujVMWta1oJPpr8fB"
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
