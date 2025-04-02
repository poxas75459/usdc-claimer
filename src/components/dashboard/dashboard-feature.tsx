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
    "y9AXdRX1eWzv18CQZgf6E1s5FfheP7BdeNnqMg5GJg1ceMESERa3pZVnwmmU8vk7Empm3mu14pgeWCr9CNiybFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dmz4tKQ6FUx98hCTjTYbHt9bcE8kWnff3Nia6PdhkL6FMiLmE8ibzeKJ79zs72ehEB48UekLuowuZmiW8sow56H",
  "key1": "5MxtvTbQjkBW1RwmqkJ6Hbqg3BjHJZFfSYWFzf2zUJSCTV3umYm2uJW2nDHyaTzuX8Nmk74LPzfTqZEdbLJsp2SE",
  "key2": "5qjZZDsB2EFEGPqF3iFw3PS4bQBx1Gm7QCJSeBuoJ8YUmE9NcScw5V53WRfsfKZX5EZDg8uaj38pNXL6ub9QXph5",
  "key3": "3moAxv5QVJ8Q7SZoteQvpDuvqsnmt4GCRYVtVcYsEz6QURTVnS1P7wEegrxL8PqY4C1NUD1M32BCsDtWJYTJLnau",
  "key4": "3LwuEaYWm3vdWyfMaQcBpqUkDvWELfR4wbmRUepVXyzD24HGv5RCBeALutvD4SvCuSasz9ANTSsR8NsP3LUVHHKc",
  "key5": "2ua6GmZwf9DEvPyHhkj4hkCtN5jwZGWXzeHVzmXSiWioNbhmQRAT4i61UW89FevPPrQRyHYqWYY8rpaCRvBrnE1w",
  "key6": "26GoBP6q7nPJbR5Zr6P3XpiVz4B5YBz2vt7RjBzMpfmgapaJzhuzcDfT2ZLsCzYJxx4xoHozMKnwEiPEFKfWY2gg",
  "key7": "3SNPTS2h6sYYAxizruXrMCnAhoofZ9oFRx7EGBAqSs2Gy5o5CMwRK4UBBqvUQhjpJJci4ikAkyfcVVCpcwij8ihN",
  "key8": "65LpwqhVpbR8tX63FjkqkLPy2wppf9aBPJJ3NCZjEPjcU5JpxRY95qas9qpetvc7MBRBzKeCzCUx9UGU7cxuCumT",
  "key9": "31GsxFzfSx3tgT742L6Bj8CnBB28RjpfiEhYN4WuqueeWE6E9TsGLQaDBbD2bpzZaHxpcRMaYJnAMMCszpr2LwMr",
  "key10": "2Pm76KVV51JW6ZyPHMgcVM8Q5n7DFDEmsCS4haj5RZxGPvLpG2NqpsAg8NcHL3CRA82iar56t6RgkCtGB4fMWGhR",
  "key11": "C7VDhMXG89WQWdHuqYP19R5jijNvJExy18GWkfyAXFAwinBpztNziJza2vTw4s9PYSPnYWbvTuHLzm3A7a92EDV",
  "key12": "2g2pqy8LbhKkfiEJf4TkeXtJVqMdfA2MdHsmM4okysAUSd1emtK8QhEAJ5jqh7GbEcWhKqKeyaPnvRAkVZaGQtgX",
  "key13": "3moGb4KY7b1U9UUjaXjejcQcqJwCkCjUCX4aodoNf5erLA9HRLJwrM3HHJkApFpFHBL5LVG9Fx1FAtWRiBQR1xuP",
  "key14": "5wxvs8h3vxk2NiSYei4UpPnWmRwjnibeMddfqwbcraGqySnGVBCm9uKsWNajZ1HoQ8ist5MhzcbCfrxPE7bc4tju",
  "key15": "2ZyMxYnVBKXpXJL7AStnLr78bGfFNLQw6jPjHiJ491CmEpcHe573ZzrZ5Ay9PNhvi4QPWBrFtFRsjmeuKi9TGWDn",
  "key16": "4y8qhm1hbQMCm7rqnwtFzM9kaWCHKgiGPBP3w86U7comuzCus4c1oPiFi4o5s2EBBSF45WeCvmdvMXYgVCvTgpLm",
  "key17": "4APMP5Qno4nrNEoYdJVtKudxLNXiaEmyXUesHRfCNnFXm48q6gsZKsVJDkewmMa9CjPfycdmuL5w3GxxPPk66gCa",
  "key18": "5GrzmH1jYRTEYmjW7ExK2CbFqvLcqhkwM6AbD76PZ9qjbPHuJmcd4wALeKin1cMSt7h18hfvG6C2eE5DKiZWDFkK",
  "key19": "2rYW9X5D7koV8svsu2NWGQfoSvwaV5S6xkUQG9w3mVwa1cfYuRWTg1W18RsCJAvAxJ74HS18X28oYtocECAQDQs8",
  "key20": "5B5Avwqu6w5eCM6vGRPQ8A95MagSJEJkaVaahKzWDL7VHHzgTdJdwFzbnAb5SZsDDn92AmR2gqSyQmc2F8oK71ak",
  "key21": "2dagXbsemGPmmgx8TGAxbnnA9nL4eUz8kgZDPuxd1wy18NAtuYR8A3YrSorTYN1o5hyQcnwP3kRqGfq3P4TkVEJc",
  "key22": "b6NYcdviQisPTY4HGPxw7yX2NwFRvccKnzT4B5YcwQB1T64CW3rTbHJZPSWNWHZgCXettjxTHxHWf7T5exzGh6k",
  "key23": "2cUyS9jh6zaYXZ9Q3RTd9zKKatbmBAdGjxALrVfeWWEW1DuyJ4onVz59JgTQBuCms2J6J7HWF2w2NUeNHEnXKHNT",
  "key24": "4vNtsjMwN3NiikTJEUnNJnqTjSXU9ZYm5wJGE7qdLpvMjzcPBHwh67FWsY1Nh2UGJLbBHhzsR28MSLPidpaJM43b",
  "key25": "i3e6Hz1GHg2Ejb5SzXbSUf1RSN9royPbDsbeQdhvmkfvrUaXHxtozVf718WUFQ165zUG7ai5rrWXoKuoH5ktCZP",
  "key26": "2UyU72tHbrzX8bhaF3yAdFEBeKKLJ3FrgQfbw4EPRQxLMiSgp9MM5ZrmxNaiAh6UBYHCJYXBq5gMB38EoYDFjYmr",
  "key27": "xd7TGp3r7J6vrK7AHBQ6imd1rVAq5AeMSFssTB48jqR6wVkaQXzQEWgqsNAUQyXYbsNVmqydkZBDbXP1Qsv5TVi",
  "key28": "34HMidq7zTK86mmSQWVf42XYNZWuxqsu5o2zMsFe7Aid38nVsShG7g9qVE6ipKG6FeWqVQhoCkkMCYVjU4L4Ai8r",
  "key29": "5qrCGZd6vXkFVWWsnApsUCoreTvUbjobCDLuphuQTzWKseojSB3dzsnEVbLi14AwwTE5y6pWFTpDnLugMfctFAW",
  "key30": "2RvAxmWjcJXThathx3Amq1mRye5PGmwW3krbCu7XAXSvjbJzHBGMq6vmY8M7Wnumub65VpHrB8rNCQoWe5Tjvejt",
  "key31": "3d8DXtBJpw4aRYqpsSj5MuK38tdHBaHGbSTVNguHc37qB2fKPKcCF2VdNVTURUjV3vGRnNVy99F6WFJzaWFxQoC7",
  "key32": "DnyDzgwH792oyn7T9FCvXPE8vMtNX2VQujdxJ5vWyYKiWb5bNPvyUPoLT1bwbHdFPRwgZDXJAm4GYNW2e2pM4D4",
  "key33": "29vkbP4e3vWUTDymefQ5qD6qgRy7B5e1d7LPhxRyau64hNUEtuPNP1gERpf6ATisw9si5WsrSN1xnm79TMCAxrER",
  "key34": "3xdAeAtciFstCVukWFeqEUeAgHfUjRb3X3d5o8q6TUyJqY1oEffHS4DMJ2hoFzAuVNW6CPemanmRTrKKo42JXY2x",
  "key35": "46rrwMSzwMKgUjZULsTQmicNmHrSc1xn1Ekj7Wue6BA2epPbmuaK5MWEr4gEXSWkSqzdzf9LWxyqrH9eev4Nupcv",
  "key36": "4WrCFoUkvqMBZZz53G9cmhbZJNwy3duaWzZDq49n685B9Ni6URWb5aG1S2hq24SAMuyM1wPGsiHA4nmq6hQ7t3nV",
  "key37": "4dXd2nUax9RFBoY15HS4SUmMaUH28kekqoXBbJPmgSD3babQ15pYwZ1LfWFW5CYYJqrQrbabnbDCa8VU4wTWdDBq",
  "key38": "4BTU4myJZjxwG8YBmUSoyMcnoLKxPsKJD43rLbA7NHak3SZuvhAcrD1p2CWJuEJVih4pF84utEEza9LPC2w8pybu",
  "key39": "2FourLZ8qumKvkDE9f6XRtENNrmidPFSMysycz3xgDjEL6nwmRYPtc2vbLNdHiyvCdAo9RoBDfzFjseEtdBf8sYG",
  "key40": "2v6Ky67XcNDS7F2dGkwg565yVtFPe2mVuJHV1rhfgEFZBaVeS6Xz3ehPbS4DJdgn6GyveMzJhJSmkuoREVifJDEm",
  "key41": "3xebMZPjpj4tD6PGsB3Ss7A5EyNV3dWFAY294AohnTxNb4zhc7SdhPwG2wvUjyYGkjYnVdhGiTzZWuPPJTTTNAPk",
  "key42": "5pQs8TytruvfycApmysafufvEEejFzEExrSSvdx3G7TJNQG5MCU3nZUYCuvxt7jZRq6vtKNVYLcgVWfNXe9P2Uv2",
  "key43": "bn5HBnxB8CasVj3zh1B125rEAKFJ9ftcq2SEFxe24tpoNrSzac5AwLsCR3UqzuyB4KHbZgQ3z1DCdAgKXr5aQgv",
  "key44": "5UF2WogWzZfagWULU7PvpeJpdQyDTBr12DZM3XU3jRj3yAFJUnNytxSsv4JkAtvCViTTdahF5PtJDuSRbzn2efJk",
  "key45": "cNgiZCPBz4Mo5CwA6QcQU47Vyuk9tmFeNbmorfbprMuSmMMEXiU7MsP2PrxFoLTbfAt79ZJGmwYMDkyvG9dge6r"
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
