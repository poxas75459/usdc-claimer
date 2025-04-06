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
    "44deLbQqpzrUJYsND71zdMZMm8aKyUJFVHm3K5VdT5z7H8q9efFNu8f6BtSg13AfTGRkppDzjDPXf9MxU8rVQb6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56GVcRhaHJVgKGhPW24UQHPoo2JkSKwNBahWgK1JXmkbzi2NDQkY2EFKJtMqFZwUmHTGZksHM9uAWVAyJjcjoX1t",
  "key1": "4YTrf9nYWHAvaefDgPRrXjoHvVN5by96BfiAigSZRwnXi1rxUtnLEHvXyy2eS8U1vL1BwdPbQdGiooG7UejhSnE1",
  "key2": "UoGbcE44edNDMRbXBzUaGAsj8v6E9jqxsTZ4n8QbwxhKJ9Apn1pjfZVq3bxwsTXCWSbD4gV1aBz3ETCSTq1dUq5",
  "key3": "3V1WEQ2NruHYyb8LT4vJLAjiHvCiUN7kq6yiq1pAzBTYK72jyQR1GxJ1MV5M6KURcYW1uVfpHDrmSR9ZrNXCuBVq",
  "key4": "4wPxBPiAbCAXM8TZWAQEYNqQ5LzMuMufKvWKAGnAhB3drmSBMNQH1Cuxjo9U4QENKkFLtHur4hQb4bNjcyBKjDCQ",
  "key5": "2heXMVD1NZ7A83D7kCpR3LJn2JDPuYSAKHr3fTmatiBWqyDFsz9vvAe4RxsGCeUAFwN19DjSeuA4QQfVujPN2FGe",
  "key6": "5yVhoQvhLZwHY8wozRwbYt6xCwekaL7NHG2nGZjTRYxeUKWzZuKutXf1wqWRQHSTy5LED6NdjDZsGCG7AAgBgZCi",
  "key7": "5q9UM8ihB78dUCRMxAm5CaaiCgoew15NHjY1ekoaHYtX6Zxc1TztTCP9hWCpWVUjWa6WLutUpM3nvfTEBAEqnoGF",
  "key8": "2TKoq7YeGruX4BGUMiugoMQm4Fcf2RZxpa2yf5E123JXrfbSi1Z8v2mLEiCxKsRp2h6xPzceKYgzqr56vV555oWF",
  "key9": "4zs2e95cBiAXKMi5wTQD45piXLQL83Ax21mZg2qkX6MLj86d1r7kmAkVofRms3LJEF5qRMoCYHqvhWnn56W4zkPh",
  "key10": "3AwX5BD9pFR7L6oVPkuUm8v7Vgc4YH63hxgoFu5Ri8w7fyQ4G2kQe1sJ2JMAXWkk5Sr9r7GX6R9XUUijJUTMoi2j",
  "key11": "5tyCusGJknScKveKtyXUXEHk5NMSwdtYP3ShfycUGYqJ9wduuigT3Sq6Ei5iMoupvjs7wUrpKy5rv8XiegnnWnfv",
  "key12": "3wQv5WjnYeWm6jk53u22jB728wFLi23ebm7pkndfLFVybmPaq4apCJHg6iPCqJjEcU3SoPa5vWTprzaf6XtyEn97",
  "key13": "3GGWUTpuP8eHcrQs1iebVeWXysXGBkmYiwoPSEW6wzWuFPP7thGE4UvmbYa2wznAwAXy4JvHEGPDaeZntCoFvA5b",
  "key14": "3kondx3C846SX8GHD5CdXv32iiptZ7ny43dyqkymdEsESXeQWDeHGCDvN2xzmwyMSoLNv1vFk8LXVfZAkKuzLhy9",
  "key15": "2idwjaQm8m5KXcUBrkshEJyyowKEik6NoUoY4vNFLLXWT5echMjBcFGGskb3Nz3gACSzeH4CkZAzhRY4e6bWMg15",
  "key16": "4eE4KPETPYPVV5VUG599M7d6xGM21YHwRMwD5PX2smAgXdkm6cn9ZhCTmJDAXC8ZuvM2wfbwbSK7DfrSfb9HFij6",
  "key17": "2faHM9Tv2jzKAyC6No8BstEfq7qSy2nJ7JB91NfjZ8FtjvR8cisAhFEFr9oz1LyamLvHzvvVoUKRC3LFdWNktLLA",
  "key18": "5hrjuwnqMP6V4gFMpHrjGr6ZjVZSFhGTDn2miEzUEfFFn9vnkqi9K1zNFhfMbMwCLaHybFf8cuxmAHNzWSH75KNj",
  "key19": "2gwW3FtC2m5HiVCmmmkqjbrWzp3L8hAXnEkmyTQLhMgre2Ru2RaHTvhjz9FNvEuaEow7oF7X5umLGiq6TEPx5GsZ",
  "key20": "5wxPxp5S2yj7ReU37xHrMdA7Da1eGjcBZutRsgbZf1hbVsmGBrjCGhj9c8PiLoxfyZyZxcNv9J446sU2mFi3ZoYL",
  "key21": "4fJQbgcXGGoQQyhD4ZUtnqie4Jc7uRvrbzTT3TnTSzZjQN8N1QX1zyXtzAZLuNM6frMsAQewzfnkCAhHjd5pEEpR",
  "key22": "TAuiXKjZgbcaQveqLKVnqdmu8M9uMWskVXyHdJH4jjaSmTfmByyptZvYLsD3qTzm6PRg3yogn4p8LQX9yVtJ5qQ",
  "key23": "42DyDpLExKmEzWtjTr2Jo4b3TSE51X4PcA58T7DQeFMm59yCC6UjQy64snYnXvVzwCYC6PaUqLBEbDZ9DcxjyvTb",
  "key24": "3djgui1BLhMkxhYZJfuhikzpaVWGoHF2Z7K2yNZgGwzMYUxiceBjqcJP1Xo2CKnB6E2u44Zay6ANWiwNFr5BwWRd",
  "key25": "289ZD6aX5XCxowx2FGskzkwtxNngucmCQ2qvMrAe3ak9vQtu4yeHAsK6FrVrJuheQE7Pbf3RxLeUXcPykDGcQK6E",
  "key26": "5GiPncNM1SS4o8SkvtK9fK8afhHfj73KUUubgzE4B6wm3bcj22T4mUMj8UmYct24421ChdBc318nrvi26iEWsa8g",
  "key27": "9igXbp4H2mnqRo78dVKwu7KUXPKah5JXU524dbxiPmzpCS3hGz5SBmqpgtE8p8TG7niVaRzVRYwTwvkg4SDwJ6T",
  "key28": "3dcY7XRxKYHgxHTYrxbedU7F4DJmb6bbju5tbSR7CunG6SXYGyeMo7Kvm6WK5EHsJjC8czLJW8UiiNTXDTXKckaf",
  "key29": "4ZYCsk4bwQezksJBPshnbUJPhB5VYKJCSFtQRj8zNU3FydRr7m5e9eV3CMmfNANcwfadK4pA64ofomm7zZfiYT5E",
  "key30": "2ZcgXNDnF25vFoB4ngxRrX2BuCFk5w9EJ82mxAXsgdPdkbAyFuUmBcgY7MjgqZ78oHxVVYarnTmxBDkeYf5dLpTs",
  "key31": "3tmJj2ewe5euL2GggLhUsN2CNAESwZwrZ8uxmbbL9eD6cYWxehxbEAthYBw2n9imhm5FUDS5nophY1PmGvtbB5cq",
  "key32": "hFYpgSWBXZ9tJgUiMMeCHnsWNMvJdCXUtyZ5QUGLG2v2RiAaDP3rMx1UapUzbabLHnhuk1nVTn44qWpcj7SG6oG",
  "key33": "21EKdKLkKaXsgXEqriJZF4uS8PrkCo1aC29BiAGa819M96YsV2ZwGr1CjPX2no2y2UX3mxKonTetJcK1W1MuTpSo",
  "key34": "p6Phpy3XdrWNNt2qCbrs7eHfXmLk7szASZ7cLec93wFURgNoWkLSHoQ9EaR5ozkCBZMyDoQxSxDKgfWh4meYFRf",
  "key35": "24tnfHbvTpjEcgt6c1pHhcedoJYSdcK5R8R6HBaw6MCmfpowrvFzJnmuukeQ1fNWjHErumpeHYEsX77US85KfiyK",
  "key36": "r7D9s9RxtQZgEKH2UKJAPzC4Dm6RcDxdcBHYNhxY2yEoe4ReKK1qDvdkNfJMoixN94eV91LYvX9nKhuutz7AGXE",
  "key37": "2AqhrwT3gGnZHAVfHkoLKNsi76qBuouhnBGtnpgWJsc2FE2NWy8KdxpfEqxdKLJcTyakinNK9vAUzfxwCCNdEn8g",
  "key38": "66fpQrZPtUj4XPhGPsDma7Gy6sN85DkKzTB545wckkF9AmhajD3BVPypfbQ8SejFvmart8WpKZSRTQaL7Q38aaoz",
  "key39": "4UKqbcCvfQZsqcgMg3DBY98mQsh64UArmfcADnnogkpERQBx4ZyUUv1h2fsaGFeTDPDxKbCMwaLfYBQzZdCKq8xS",
  "key40": "2Ktq67YnBYFumo8notxTAn78EsGzneCJ6FbiATXfqKgrXfrqL7tq5XjBYogfKu5zgkhASJ92wQNmDoiy5bJueU8c",
  "key41": "5g8kytcgNd5hwCHT3rBJDh4BE6AGNccbDL9Rxcx9W4gca2j4uwPr6bB2xSTgxeJ67nH5V4Kb2nW61mJwdtmSPRcs",
  "key42": "5XbNw4QkCBdrq9g38LcKptzhgbkeUcRmFxhNbwCzF6SDoTf5D9QrNcVQBVDo5ASyPpdRXf6sF91rTgN7nbrRj5MS",
  "key43": "4v5z9pBcNUriBmSLc4VecE8gEezPH3QjTCuF8hEL8uqwF3hfFQ4kwqw1FUncNX9dqr9t9X9mfo5dEbNANcuWApmP",
  "key44": "5a4KbLwX7p6fjdr6K5RYSkU1jhVJ92AqM23fLRAMD42dhrMyQu6o9W93uTL8YHTHxu3GQNdsNQcqmjFQksD26rXN"
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
