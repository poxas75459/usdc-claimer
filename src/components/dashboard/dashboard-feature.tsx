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
    "tHK7aGF76Vn52RMRr7gDqqLUw6Mnm5Rac5osVtNrheKL7Bkg7amCo16WcPaJYZHRUSg5nzDfiCfE94HeZMoRY1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g7RxxWGpa5ta7YqJV5oRb3mLv1DgpbivtLU5mr4CwRYWPd9NgCZ7dy1hSYqqeycjRZVnjzEMc4soiisHDGw3m7k",
  "key1": "5DxcJEnY4aQwLsBgwMyFYD3vp2PYJAp4svqsCPw3WbDy2hVYEZpNGZfG6N2ngczUynMV1CByq9BAz6axYsgqsvWW",
  "key2": "4ZMjAkHAB4g33cS23gd5DpykevMCxUTn86TS5MgQWiQ4GZakj5FQMm2UcgxU1x4AWB97hzK3cLQr5Fym32XUtfEf",
  "key3": "57A92pZvpMdN5GSpfKxWXZafByHzVqVfSHEteYbRrX2EmpRXHHqfMjMjhzrBG1R5HoN7cJaEers6WmKCToikWdr3",
  "key4": "YMSSUZs8SmcPsztRVDuEAAU2sjrn3azvozUJo7etNSQdjEtwTFVNAUTPKB47Li9rMJ3ncXLmF9Gab6GqQgm4Jwh",
  "key5": "4o3bXkZjahJZmZa6KKcPkkMTynjSAQwAmwaBC2FdDdWJMB41cG64KLB4xFAH9T9znZ518CFCnw6M1a12fqx7ix2u",
  "key6": "32yczKubbwuHY3YiPjDyRcTxn3fChU1G4tkqBjtMxXVEaVKLp3Ea45yzx4GMr9taukZKXTWcV76ii7X7gAzRQ2xy",
  "key7": "4cNX3M7VfXrpECYZrJX1AfWtnRZn3VN9cdunpoC96EzvNYxNZzcmQUCMzJD2nVTiMV1d1Ccgs8xjn7XX2AbPzb9K",
  "key8": "rDBKeTUVgtrXYrH3z2rinLdL8GvUk6HHekJ48BLAgZnioi767qhWjueSv91TB937Nvkws1qR445KsXbwcLFBgmN",
  "key9": "6VPFFypFfcBY8bGMHdvxkYZGSewatSD6oU6tiBMY8V1Y9Mpn9yuFWASaLigmgvk1Fhti4FM8oNuuJtPXZcrRo6G",
  "key10": "4va6S5fiTTRMHArpgxtb8MLr4ccK5LyGfzMpNtT485UHUK7CHsa9w9dn39pGSnNkZQtkrd7t4fzrsYhe76kPVJhm",
  "key11": "2YtgW6SE4FUUsC9VWFxAZpkzHcHhEPmwsSf73C3wEFpEpvPyKEYsp7ADeCeQEEgTCigwqXNmhAP1yL6YSm7nduPC",
  "key12": "4WFM5TUmwoxbjDiAwoBrgruni6wPGLShc2Ti9w5Q9hr93tzWWzr6jjr1mQmBEp6FmsG3JKQLQ5FaTRLswqFaBmX9",
  "key13": "38Td8h6mBUEhRsUXdnkyVFWy98ps1nJdBQwNooeA9JnBnk3vk5zLckxPRzZERadNr19fVQNb52Jv8sxyZhjzLgrD",
  "key14": "2km8qNSB6Lt83akZMuyvApd3419GaBSVbjf9UxEANHL5z4UMcg8GQo4oVH1ccjyu8w4YSYHEXTZSo72HM57VYY1j",
  "key15": "EYaTDUHzGrfQosPYnudgjEyMonLFZfjeSgbJKSXG4Jp7huyvzTq4UQfVkr9Z7LoEhX31ki2o2wxBxscqx5N6YAd",
  "key16": "61SWrXjL4GPXYkKLqfCcemhY89g53EJRYxiGT3wzwmPz1zhGTtF36JmdT3u7umFrQ7ZiDTq1mbe6rp4SNfRhwoSY",
  "key17": "5uX91vGMLQKGXqxpJaKC5YtknKYs6L2dP4sZsYHJu1vnye6h9DjfEDuqrkBKkvXYLK3xB8xjnotgXNvgPLskc59t",
  "key18": "48mWV5NqGhwT4TmuD1PnirNcMohZDgyGC9Gghumnn9CAmd6EVg5eWGZkTn9A6i66ZjVjnz5HUMECryTvY1Nm7GXc",
  "key19": "4tccQM4TQLwBBG2mM9AYo5Cgqm546X8mEcQq43ZinXYsSj3LtBquZHgu5LGCE3ZBo1DafBLnPVmnpaXwDD72gNhb",
  "key20": "5fGikaDDKxCvTLGWazZyiZS9Ancs4Z2vxVcqd2TjzVx1gZ1bs1oUw6DpuKySZDeqTeiZGgqfysfQo1naDdesoDiV",
  "key21": "4eMPPtBbvecCuMX3B7p6uBPgnhGHCyHD7Pp5eEKxL9ymmPqz9LnLF5ewDDkXTB9PDLUzVLkXq5F7tR1gQdgxDvfX",
  "key22": "2ZYQ4uMPiZW8nMBiCvaP9FpopnYMhgJkeMh6Neoqdp7Dw5U9xBq8JBiT6qvZz5R8dR6cAgBaGabnAW3o6rEEGMxt",
  "key23": "613wQijspxqonB73Ew53seU1ZKJayFD1M7XanLL6bPnodxxJt5Vx1WVhKc9tBkj9irg8zyuu3XXsjBp7oPTsGW2j",
  "key24": "2tGxWPwoHBFJG5Qh3Tdvh58MPdPBNARsGhZzS2tqt3aQHvzabNsdniM3v2jw5tUAhZmLWxoTt1rvrTDmnGPupK8q",
  "key25": "3tmbm7PeDRwE5B9TEEc2BX9V55jYt97my5RCLvroCNrfp3qNQa7SQazuxDkd4jeLjxhA4sZZ5VReWDSS8kvnz98n",
  "key26": "3q2uAekxjJToSd4Mb2aQfpBU7JqdnhAyaF2jZH5Tm1hQxFAWmVW4baKzRDUYK3FtMcEWvMX1QtF8puw2iFoBc33B",
  "key27": "3d7mrdpUcdpC532XX2uchCN8eQF65Zdc6VErrrneGHYsSMjfXgkRMmacf6mypMJfg2ufFthyX2Ppvn1XW1vW8Qtc",
  "key28": "28BLhMd3XzyaSsGQoVZ5aDSLmA1Mj9cmvviNH3s5ryY4itTXkLRFNX3G9zxBbMzXyd3mkHThkApSP9Ek4Ht1GqnR",
  "key29": "8A6CuJfTvBwtgx6M9eHL5tUW1XvUDRMVXegqtukdQSZe54wqrjVDnzbgEFeFhVmoFVFxPxeW3bWMk1Mu6o11anf",
  "key30": "2vMis3CvNCSoNj2FjYAXpr1iuciMBKX4hjqN5Amz4XMuouk7DE1t222KV24BMYrbDcBj7ihz9kSyx4jgeicPUiHw",
  "key31": "3yHomVNMGvcPsk7FFrGaM6G86yEEWYfBw5ZwpHHEHuEtQfTXombCCgeLRn7GVP4JrD6cbgRYpNnM8d8PxbGgiREC",
  "key32": "D1vM9GMjUHDcyZbQ1viMKdXxb58X6bq2T8LgY1gcKQuqhQj4idB9LeEKH39QDjuE2nZWPKgmWwXsFnaQJcYMYwE",
  "key33": "5YhsBpjrbXSpeh7ww49CWJdtyR7WuVeE8vXnedJDyAHhkzbiyLLEKAbTGHTCaYvdsL7bkc6DqcvKxAatFhXfMb1T",
  "key34": "62GFiR4N5JXa9fuFfufApot3KLq7LtRQAPshPBZghhtLpXwAPyjADd3xMjqLmRbsEQcXi19jDpRVZEsxvJHUkECK",
  "key35": "43D7AEjvatKeCX6d5cWnWFuddKNrFtbMw7EdbQpqs5ofTnJaTxARN9mn2NcgRNZHKfYMeNBieVfZGg5LJT8KrPHi",
  "key36": "28Xg1Ndcix9VgkejHRcDegQ9Yy889Xt3BVAJaedwEU1SHJGrpGeqQbPgKGoy6SsnqfH1Fcs35KirakkdeuFciXeD",
  "key37": "66S5kWVHfhrPbQ3triQYA8HN22JHSTNmtdoLmykvYH3eJMNMLuMNvEC7ncWG8Hqa9L3BayPTUpNkTXjPb7Gx8Tzw",
  "key38": "2tKyowTHs6RxWiLqUubcy4KxXBabAcpYpysddvpQeksxbsT1SwLP1Lgp5jQLvKjFwMrpC2rvSRVd3DLeeqmyjV27",
  "key39": "6622d9mk43c8XiZ49Jtnrxu4KuXMnbtQsptACM5eGRUbVkrD4mvy5Xz1DNKY41AfNSRcVvhcjZgLMtbcYuLDXPFn",
  "key40": "4xi61FjDV6a3LSXy4sksL9zfrhBYqjewexH3j8o4GB4PQKUWKrFF7D5DPzTQJKgwyfGZZjvpuhHrzFDT6ZWeY1Xy",
  "key41": "2JA4EoxX3Hs2F2jYczU6woAM3ZsFQnLkLvZpKkDoZdCiFgCuXV7ebwMd2pAadGRcQzQezmRgkQ6ds3EwpjMk5qXs",
  "key42": "3CzeEz4NYKZa6WvdFjgRqa8ZeFd4MDCV3pm9N2Skpr5CoNHLLwUrECTc5XV8xXANGH7r9PShCVVGSWpcBip2WQMe",
  "key43": "2RJqyi7wxMDoa9HwdM9FCABCstPLmzzjxcLbUoKkFMs6caErfubtmWmVJRiVepVAHhfndv5Z1nLPM9gPTUeUzRYQ",
  "key44": "3uCAhsiJTjSm7praJy9cg847h73FAsmZgq776dU1SCD4mSVPx1AFgXatifPkybz2d8UHVV8fLumnFrGdy2uowBQC"
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
