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
    "4NY297XsK2jSfJQvohejrqTSdKCkmffx9PEwTCyqAtApjM1SWCuK58VfirALtW43paR5Qt4MRKHKToCCgDV1dt83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dJU5mfGsmHFUVs28PumTm9NUZrFtG9P5QSGkuxQwhvK9RRMWGzwYcpQvZFT8wAjpkfpnHfrSTg1py3zQpX1eg9",
  "key1": "3RnBVARiuv5iwXkenFAXvK6vGxeMksB2frDQE7Jx4dqcBNfhCx523n4voDApvE2onJutBRD3WfKwbHzHT1pCCr2k",
  "key2": "3txdAtgEAY5jEaDSfyN1ru7YpT2aP6Rk7QVknCZTw88EykzR9hTiPbywQcCDto3475nhCbKcEw7zX2P6V2vMr9Bx",
  "key3": "ujMBpVsiTD5jhR6kBU1xECkhpaUG7ZBoz6R3C68poBDJrPtU6EvTJqmJFNukdQyTXf2vJ76nftpw5YnHXwc1hjE",
  "key4": "UFWRZfdiG3LnN2V2x1GoTHmefcwXqJMgyP4YqPPEfD6QDFCTnojkXCya5YqieJwFF8vycPk7RW8RpNugmKTnhxv",
  "key5": "5NBwcJDvwhrRkYL9kTs3sG8Z3sBB24FhVGB3w1VXeYXnmmVCBPRYaQbJ47A3C8Rc3MdLFguWzb2WYuukDMPQvZfW",
  "key6": "4qz9WCetm1ggQ5LPZx4ZroWHcgMz3JAfjRscPDyHUR4pcyEgv9sz8FgHYhvsxY6uFn8528nfskGdknyZXe8Rh2v8",
  "key7": "39bcWZtjUCufmxJuQi3Z2CVGrSmYKdQNncWr1B5EnEBWpC5bGoGxi9Hz67na7QJqzyp7Fu6cMWWqo6rtQP6szGds",
  "key8": "tRNWKNPuZeCUKjbshfNcyeyk3jsf5pk6A89R5QwcJWCV4qG1FJfNERrC6wEVouSq5z1Z49k6EuYovuJ7zo9TpYD",
  "key9": "2kiM86eGW2b5sAfeR5GC6zGAVVY6B1gALKfamn9SaHSLEu6vB2KEN4pWwb5iwPy96FjgqWYDo63qxU87mk7qk9bD",
  "key10": "2dEhPggWB9KzCRWHsaaJQE8ACY2bpDwcRUvbKqMquTde93mqVBxaTs59gtXh9HwVUN5eLV2LP8GTa2HP7fnuGkwb",
  "key11": "2UatTgtja88F64jNxAWhFeEeVzM5vyRExMC3sxehbVDA73wsdgYvUPFRsHPTi84RcTu8dM1Yy9BuuW2BFrgtaBgr",
  "key12": "4PjBCohX8hieB7PHGxFCVe8kF3sk2EJMMpMssWEQ2DARy8WCeUNnQ7cQ3diknue3PiX9PajLwfvhFj8Lp72QJHkg",
  "key13": "2Heh7V1qVa2fE8efLyDAZcsm1qqmHz3YhZzys9t4Fa3ecqKu7Wu5uh25gS2CzYkdkeH5Ma3NhYFbJTjvpDQiwJZw",
  "key14": "5jawrdc8vHbm8pNdFemS4DzMBzEaPG5REwf4dxmzifXuFTg7vnj555m9PKVXZNMoz6eHwpEDa4djpBQb4kaoNUXi",
  "key15": "4oHfRvkkcCEfmRHtTXK9hLKmej13114N5JR6qTxSvMwWndBAUQ6hLDBaHqGegKtXhWLbf9TSpsm3Gd5bxkQtdmvM",
  "key16": "5QF9qxFef19CNgXUPcC7ttTBMBB2G8nNBfQPTJFc8ugDPkG8fyDMjiN2C49GrnuRiHC2x3wCadCEYbS2cZEaw6xh",
  "key17": "4bGK2sjP7ahkTo1auPRHa9xHHAhuvdnjkzrPArZKyX9W5u8GXT7TiYnxsM5e51edWcHpeRkNtzT3Aqrf17QJ9d5S",
  "key18": "HrFFrXLhXquLYmEg5Jkd3VxWENCVqeBRDT3gimGFh9Uipn8WScYVEcXV9C8DnJ5R5JBy9XodjgB9eRXNwA39kPQ",
  "key19": "2zkVPxxSzQEj7NNtNzLLJuSJbSem4kYiF1Kkfxc8pjT5J9nRJC2QUdZ8EzPeDnSjY9xxccm2vkVY3CzRRVJEwa13",
  "key20": "6r4PZhnEqJMYsSa4mgGRjZxoS9zY1y6bKRBcx8EfvDUK3pSXznDeB1YiB5qzAS2CeJKPaTwQyJ7SGbvodKdJv1y",
  "key21": "23bhDQzWWDgMEXZrMsqACUiWVsjwo1moL441J2MUrdDbS12Abk855z3hUG1sWn5AZwQNRbfi49BVBQvVwzi3FVLN",
  "key22": "2CDQbiqkQW4ABCLuD51KUy9tu676x4WQ16dxwpVFigrD7D7zEFoEf9xCXKh8vPj6D2STR2mBwMuUVHvNZUw8zjAe",
  "key23": "4SNZihRjqarRQFZWjE3AicAhcEJZkXHTgJTixZoeGrq7k7XM12fvaX185oWvE9zKGnJVUfLHzjtL9p3yMqu7CutT",
  "key24": "5bPxXygwgFXakmxwswtuRGkwBC2jGKX7F2u5yR8kzFibD61Pf7xvNJcDfMfrkcp5o9uWXWMYXdh3GJ1LS6GaUBbi",
  "key25": "53uagFqghqw6BmPqk2UFUko88vG9B1Ge4GCwCmaoPktxr7STtkiqPFC3gbkLGvqfUniRW8vsfTWPRAbFGyy4qKkB",
  "key26": "3Ls7emGPKWA7ginj8eUbtAcWScya722xMhgTkr3w8EskLugYumhpCfJXoteCnUCLifDepw21UgqTruevXwA4M3K3",
  "key27": "feVYTngKdUU6gqcow8LwbmL4rCQUruy2ShZaMHeMbT4PWfmFPc3ad5CCUpRweMqG3RX6dweH3vM1n7VgQAZxfYe",
  "key28": "2RMq2iFbmQjbeEwPH64FoojPVMrhZohXSyviaHKHTNqeJjJ2CPgrfmbs1GE41iGbBFbMqDQoiTVWBJnRZyZTyeeD",
  "key29": "2fMUo2htQRBkdzMicXqdjRsU1toTC26nSd1ZkpvSG2z8TG15JtEyMa1qJt6kzmj8AYhur8gLdB3CMnkd2gFBkXfv",
  "key30": "2GUqCPgDgSfkA3UDN39bvCdGHX3XyweXbSyxA5JXww9mACrwVKhSPKK7BwnxGL7Yj4UqTX2BQF83bRSD4CMe4uD",
  "key31": "qqTcR9UkdEtErXkX6nLw72UT179GT48yUyLbYNCm1FTAJMAguHf7TFb3H3y3UKMoAFn1VGqZPD9mUvoKX2toTpk",
  "key32": "XMT9hbdRSzcFjPGNxntZZRRzksE5mL7mgfwczXcanskrHhBSBRehfGdFsTpXR5YjbQ7f7qZvvjC78xSMTP68oFv",
  "key33": "2uUSXbJqe3yHnLJfZ4xKNgxZJN5FWxEenHcGqqgchdhdDAfRHEjKZeUMJEoCLGoFqerbKQUrsKRfzPUuk9827g9G",
  "key34": "9wxrTqbHFayni11JEZ7Xfp5N6GvgD3HskcU9eWrgja7rQAy7WyiwqiUTzLsmcM3xykjYgwGUjGbQF4tYZXBvk8G",
  "key35": "4UETaTpU6ZPUEZGHaP8EBSdyJnCYUzDS2WyNhPTtfTtwTaymBZWSaYvujYH5rDB8jypVzej1iXw2aJchp5ZbGnj6",
  "key36": "5d4rURANJaCcMPrfQRxjxxWUuqSBw2Gw73KzhRqRZxFgF5fpQb4TYcVDw57JnRdTHwVSY2w74RYy2BgeBf7axY2v",
  "key37": "3NigSnLsvHrmvmcCcUk6ca69iGZzYUFUuePvYYr6GPteCHumsc9MiUu8rSDCjP4MrRfoZscGP4Vrpty4aNJ29eXz",
  "key38": "5kNsySmW3uJzs8ApebnVkSA15gMfVcusrD4hWBVGNZmekXRGt1VuNSg7spUXPiwL9VEhsJ2eRtY3CoLzEeSjBZRQ",
  "key39": "53GgFZ5dGBjqJcVMpmxQKkvT1CEPiQ3bNTwFuap22w5JxfGCBvd8F8BMQi4x8bgBZ3y4S1F3VauYTAhRDUBh7PeU"
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
