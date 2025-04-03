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
    "5JpypzQSr8Dtv4zve3bL9BAHp1UFps2CVKSBMrjUx79K2ZVcCXgeCCHVvicZ23XuQQcsixbxS2FrsZV1p3ZZX9HR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D8hqvUEVJx6t9ajAx9agMpsTCKHijriQmGU5LZyczaciXo3ieTZS6puoYAJHfYhTN4LegsJTmYh4445i3WJHk5M",
  "key1": "3bCyvafd8LQWYvko1XWXY9xcYC2dWxoiBz2m6xMhJkp24keKcgszvVUFigcTxsKeDRE4hkFp9QhmS8iHVUNYKaDe",
  "key2": "4aYaaByhVXzKtACHXvGXJZ7QKqVVbNkx7cNpSoyRzXXDx8zQMFdrexqZssYpQGxkb3kBwmsXWrHTR1nYUaT5s7xW",
  "key3": "4eVhtye8cBXrhzVL1hCwYAuB1oMR4kzFQwCVQLuEh1VXDrpEAh3uQahZL3UzobMwk5xpoGc9ZkMk5RQv5DoWFis4",
  "key4": "4bf86yHJbFpEbRxjpA9RwsAuwxKcscVXvsw7Vph4nrg8Kos442CW5zDehetRP6afFPfakatjdwEEa2X6dZfx57zt",
  "key5": "4GZ9Q3MiJZwFMAcZ1oRPjxPUC7x6HuqNxpkE9b4Z6Genu8JE8P3hN5132C9SMcqxhSNwyM8jbTgDUKjZEhrnAyfH",
  "key6": "5vMVP8AgNMpyuBvCuv1JWk61fE6Y9w1C3Gv3LvP8FijiepceMUkifJj3yvdJgzU7ai9iUjmHL4Q8K7tVewUzAooA",
  "key7": "4c5Kckkni1bKbQNyrrC6syXkeoigsNpCza2QoUmyNFKxcWx9PQqtvJcov5Qa5pxbqqZYSheUboHNrwCvPsxgcfMj",
  "key8": "27S5KkhLQHNuCMLHYKQc47okfZM55kzKtye17WGyR9H3rWGz4w7AoyA7Nn9Qa5uaXGXSsndxJNMwUD8Aq2krxNGo",
  "key9": "UNDSuopTByJ5ZCHS6J7f8J9RPA5dPxetib8QHD2tR3dqMT2qvTcA6FZs7Pf4qeYG8rRrhWnoCVZiGFRKurFGNfG",
  "key10": "2U113AHy548zqAGhNvpkZNLPdrRuTSPa8KrWDkm6TbFiFV3zXurGCD99RAqbVvpGX7rpf7ZSjDYd9RBYW4pJZbGv",
  "key11": "YHLLB4jMd6UxSpGGQv2UpBXowsDHxt2ee4d7WP2rjjLF4B99C3gTiHGFzcrGdZRLTtvs3YX9rfYtWg62TU2Tpyr",
  "key12": "4iFooSsDSJCCAda1xDdk6on9VY7fDT63jRszeZWqM1VRhR6FFDmUzwRc4rEsHbgXgQT1gDTSCdLdUqTB1vxtbe9x",
  "key13": "46K7dB2sYrDJWDWrSmVhFZX3J9nNrPL5vU9RKACGgZAAvRM4qm1MXyH5UFKCmsmSMAJjRn5xytCyaYKP4mrvKTxR",
  "key14": "5wCXAa3bpTSxwUWUJnhaV4hq8B6dzavZYVibaz7PvCy1PdLpjzfNTKaaqVhwBKW67bzpt4KcwZGxm2rkixtzXv9D",
  "key15": "5Qfc68zzDrS52cK3Y1CGRUXWdmznekqCocuCpvGbZxewnfxKepQNkjDcHcaiJJPSLiZbFoA3AbdLvCN6VAmocai9",
  "key16": "5qWwW6JF7AmrWNcrXUFEi3stuxmFi9BZjTJ7dK7KK8AFMjULfae1s6gJqjG19q1PPf81TwZyBuDgP6C4fFNoKS7i",
  "key17": "3L3cNuAWwjEFdkFuvjNJ73o9FvJEZSuKoWot2RBG42omJqCr1bKtazN6xtMYmVWmEMAsfKK2SQDjqLzBhtg1wqk5",
  "key18": "3sZWuEwxhtkQvjvh3N6ZksWpX5EY9MhupFTSRgYMNURHXsqzjc8pRhku6bBzkwBrVeCNnKpGBtPvXpuURYwTDmMQ",
  "key19": "2tTYu8yPcRDqZAi1UEZxePnjWaCwq93pjddZrYbXa6fPVrpsGXEphmTHKVEpKrfquNC8CDCDujNHdjALFrqZXqsJ",
  "key20": "66ohMBk4bpqbadfQoDDnwnShnqGUkvioobhbpdb3xc3yheXnQgD4w1RDQtPQyozPp5rog9Wjo9oEb8ZHhphPF7Ms",
  "key21": "V2YFEWBkYrpwqeBTrMgCAGo8cZE75k3rouXX7VCS542jZmJpPV6MVSux9HtBxPzasLzEyQFo3LxbVcLAbfT7Svb",
  "key22": "2KEkbSwBUsUqf7FVeAttiEJHCfyrayugathfgAb848cxjk6LQRtddHfkjh4XHeYwjC3NAk9PRJnPC3uYztgJRQLi",
  "key23": "3aosXBSDxodcSzVE86PAp5xFomPbopRycNRK12R7vXpm4njMcXAb4woNzCF9tNAGGCE1VzuVrmpDkyM9MboqUxbF",
  "key24": "3aYgqTMQh8qCpXwxp6AwszTf4hGjUfL7egPyGN8acXn8Cxm4BsyeUCKYwn1wMhzjMrgTcsojRaaNW6LBRrcU8xMT",
  "key25": "B785zNcqaCqvYTacguqNPQwZ8RmsEcS2JvkE8e85Nf6FNhF1bbo69q8WWz8NgApmFrkXYhyCRaAFbe6ggRdu2Tw",
  "key26": "5amTt2huwGixwKuN6U2zFcVdJoX5pCxcDhBMxq8wzevUBqgTkhRN84uPzyunxCV4RhmT7kiPZ1DrWvJ9kUKE2piA",
  "key27": "2xaxptfRK4ny1TtLXCzkLaAS7zYrf43TAttpQMDGSE8MWqDN4vwaarhD71ijv3htDseGmqpE3587rfb44enqfo6S",
  "key28": "5NeWDYNY9DU42HKmrcHGgukLhim57M7ZYYhnBpEtH3TDfw6q6cBmQLo5udHwLtgdZ7j5LnjgQtuUvxA7WFGLmeTG",
  "key29": "2qU5UmLTkgJdGR8yHDSDcu4Hb1RQgbrigsx9ZDMRUW9EgHJ6JESUtQLeqkm4b24aMFjWdCu264wLHtxHZ5nkVzD1",
  "key30": "FveSUwbg1v7Huz4Sb5LeyeJwr6HHD9upQMJDPyGbMHdiaNCHZwSajtSt1qsQJwG2T4CjbSXH8vW8rwQpD7Cxm2Y",
  "key31": "5VDKmNsZVkfFfUs2fSVGCsJ8tFWsAGtsbX8Sd8nxLhDwKVejX23FQsQa7xVCX4pF6kbUTAnAnGwvfX8nbywBB6s7",
  "key32": "2u6UoZBgVvyB1J4GK8szaCPddsoACezgdWf9QbsCP3GRM1w4sD4eXCxFAS8U728gq6JrXjbgDEWnP3bJnBWEy9gs",
  "key33": "4hjVUwAXR6z9D7r1de6Z6uq5Kk6WHGh2kTmwddfecUQfdPt5QAh55BhSjXcJdWNtjLXhhjALS5d4PBwwqpptm43x",
  "key34": "3DD15DoFGrsqux3WK5g8saiNDmZ4RHpEtwt24s5d1AyZMqphFZF5pyq6S5vKoW6Z9XmjRvaVyruksAx5iHnKkq2",
  "key35": "5xP3PAcfQfSRCyAEfMstm2G8Jexc4erAzdsceRLsZSyWxmB9eCgUUHq2jomcHm249LkFkeN2hwwmb9kMiY9hEHhm",
  "key36": "5nSf7kiWAkQYLTp7oVikuZkwqRdMSfQ3yRCnaRhSgfHiYecgFmSBaJQcUwTqd3HYEhZ4CTj1SvfbGHbx1EzRvz6D",
  "key37": "3og2aX4kQRrM7WM6LaErFKHZEeyUiTbCkUuvi7izkYFeGFFsrrfXjKB2XtFWNBbuiAENdNL8fVw4tXZvvvnqWfgL",
  "key38": "5MQAYZ265uRt4oayuA5nvDoFFj328odsCx3wYki89qJgVHWqpeQdixzHKupi26kwaAU1FjJmY5V3YY4dJqccKPdR",
  "key39": "gdpBMu7fNQBEKkk6WPkURnF6FHt1TeNaUMbnAj8DTm2jQjetxm5ASvqVsGuSJ6LfnHpfJojDpLvGkcMFAhwpR3Z",
  "key40": "3jwAJp1XscYfP7CaLXsu7BjSCMNDwqq4Yqu2K32buxfcdsF6BDD96Qgdwrs7doUTjgpRv33KWVpjaPoAimZbRbH1",
  "key41": "5ULphXkBDzEkfEKaFyPnfYMMQdcZ92axtJyY413Jhv626o3W28wZodbDGycpEiHcZXxKtesKjgCc8G3kYEsqo3F3",
  "key42": "h3RkgRUFLogoD1uaR7262Q4toGp8DDJVtK5WE6NW9HqWzKp1PDgpqiUD3ZM93GfmMnAZ3bDSaUuMLMsxSMtPtbo",
  "key43": "4yjpRF2z1n6inctriRxF4wny4BYXfPU4YuzFX7mSpEEbzb7pPHYxGXzR6nwE1ZdMZck45vsEiwFnEdPwcSPp1ak6",
  "key44": "2NPQ6BE7yoS4orKAUb3pu6f9kjQWTXhkUjrjBSitWNtFdVkzZdin7jEtukP8i2oeMXoeWj36mKDrpMpU872MYCcA"
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
