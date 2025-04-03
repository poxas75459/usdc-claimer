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
    "4zTLLE8vCawDGveMER58cieXyB89vNWqy8mZ5b3QK5JSH2meSn7HjzTKuqV5mmrWqwGSrjbX2uY5qf1YdQNjWSJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "562q5wVJKxwq3kuA5y614sp8m9uQoitRG6ZyYPmyaScmRT9P5AwCmt1HQGiFYNsZ4xDccM6wBfuWZTnHwsQLePYx",
  "key1": "5GTbgem2QuHyCXp2A6TQvvv6BnZ3HqtkCiSSydSmokHrdSF6rteipSeMtpg96tKcuWCVW1VXE434P5RFAz4hHrkA",
  "key2": "3xUMa4KHXHEJJ4KTYEZx2GPmXqfD37VsFRfJjZ16Lu2q4gwLBm1UoWBfFGLNrzkgxxdm6D582ExSdyvahcFcCmLG",
  "key3": "36h5ArmCsBvT2wbshoy7YjJRK1Zo49ZnZEsPxyhpX5o2YNyNK4jErNsgQzQHfsBro7sSfH1ZiAbxGvV2zsF4281z",
  "key4": "2XQbEkjXQ9WUE22C7dQwX779TZApRf5gJ2N7novLprjpPH2FP8RtonYRHcLbkFBg9q3rarzdm9VyxTiu6o3RnEwv",
  "key5": "5KfGKgHG8kYTxdiNSPxzcu64KnqCqS9QjAY1W5j73Voce1egGALf4oDQAFBkFGvqsdS5kZwfLf1y7ERgF8ZB1jof",
  "key6": "tfTafjsjGNXjxfEhDsa6vzR4NVZuq6zybTMZVLKa2m9GCSosxtjF7z1bqkYtfnHo9x6QUXDfNWFd8rp8X9ccvAa",
  "key7": "2VcDT95VieF2USr9ak6M3LveWzvALeQ1aoMX4vHoL1ova3arH7U6Wnsjk4JGV7sU2JAbukNXmcXVZw4oBu8q2vWJ",
  "key8": "x9d4fhvByExyas8kFzyNxzZexy6kPf65UAjgXs1NDHN8A2NpFgPAftAs3WMmBGi6CtAutxGN9bt4DokncFckvdG",
  "key9": "4NUcXKTazJGwF7wMc8qemQA84YHMZDzdyrh5DeZ42n2yE1Uyv6VKuLzvfqc1GH5jheAHiDVcxsa2Ym1y9MZx3juK",
  "key10": "4BYniVADVjK8BdcWY9XWk2zjihHv7L349mK9yQt4mGBygNuS9TYKuR1C6xrtdreWaXQG9Q1Uey33QykGqSMu2BgP",
  "key11": "5m4KyNNQc9xG7nE8tqdMgwEM9zXG3p5gWHFef1kznxk3GSnoDWHpbYNbqrLpG5Wf3iVbGMBgkqXx9k3mwST3n9ks",
  "key12": "36UDKb1E6V9QSFrsYgdxrLC5upfJ643r2XPHec559JHzE5Sst1GGfjXcge8ABqDSPEkXyHD2oKWTpvVBSSpHdLzP",
  "key13": "a4dTYbqPnW2iu1TGN5G7aWeSaNgSG67x7mTXBGXLbyZH2rK2P4DeVyVPVi68mAyDKWkEaNGhrboT1ZqifUSgMD9",
  "key14": "2DD2HA3FfLeYnqUCzKtxPeaorx5iVMtB5S76HN198g9M1yJxePPeVYRpSyMhP7hCrWqBGSLVTJrVqn3fPUnoNudT",
  "key15": "3rQmeM5YoW7avP6tgdJU5kvXPme66q91BuH2Kf2yrF5vWE6MjDfnHreAnyChV6ouhcHHpvrKPhoKEsVPzgYFdsAu",
  "key16": "2DgKzCzUYtgHU2DoPNSQ6nXe1esg5ex31CL7S1XiCXuULVXGfeAS4kG2qvzTGhRW6k1DSSg2Z9Y3c8yrbpaMVubM",
  "key17": "22JmPnWtpwbfCPJKTDm4DbPbzCerPkx3Afk4tDq2H6FNGN2roHaHE8Hn59UyhkoHYJrZh2J5obPNktvyzoivfvkb",
  "key18": "4TUCo4xuyuAH8CfH3sJd9rUEQ8v55GXm46gnhFnPvTTmMXXNNDKn2WnVaFNxExAxRNvrvNUjrQJ1KHoyJMBvuRx6",
  "key19": "vBwZjjpj4qXdvpNcv7KMVRcxU6yNK3ArZSYzJ3QL97FBvtR2BQjFUbBsyXXk7KYxC45HnqeXHRkqpPCa54skG62",
  "key20": "rjAa6mGADhmAgoLypKzawBE64dFzUxh72h3urfZGNj4iMsKWaZQPK1pNM8iptFv2ZeU7G2MhCyHCkyg9nRAVMAc",
  "key21": "GyTxUzJNV82JeAqhebRzuDptBrY4Eey41V72a7ifjK3hUdgq4dZ1HomQpwHtzGHDbAhHVoGnhBNEXYrZLcX2Juj",
  "key22": "qXAgc3e2nS4u9ndZE27YDayA9xmfGdHbXMAY5HZUmbQ6UiitcpV2xmEaPYek4GzXRtKnnPZfckszSB8qT7eFzTf",
  "key23": "3wonJ6SwZaDZSaA5QJWJZPuQPue6Tx4WRYNu9Q46SGzmF4T1cWYZRSTRAaUzgqsHcnjxjp8hE2t6XXwM58s9M9yx",
  "key24": "5stG6fRaEs2JivDELYVNMYogRk8nLaEPTQkigBSemW6vdCaPYaWZTRg9JdLxd123LY1w96tGJhRu14T1LqLpnCHw",
  "key25": "2t6ycZdjKwk1UngB2iRw4UWhE5yHRo8uPaMxc5xcVEEuq3oyLLNmchUEZz4HCHpAuFcfWGpBVPKaXe8FRnQjyTaU",
  "key26": "4WitXcZQoBsC1TepgSy5F8y74GgCrdmBvbYdE35sifCjgDN34KshMYkg37kVVhNL7TpbaJ7YRHvgW7zau7TzASm4",
  "key27": "dzB2gmhk3pQokrrqFfcyFMPf8qVgkLnMcRyTyqLwA3rYHEsgWMNv68v8htjgCnhknrATUbk8pmGEvbzZvxnb6DP",
  "key28": "64LT8JRA7KYL817KgJeW3M2qy6f8T9g8oWPPSpjtJmQwnRmXDsvGDd8N32iUXQEgrU3fvdi7ioUAzeLFYRaKitA3",
  "key29": "oP26weSVGGgkiUZ8y4xLvhYdncruazGEghWyZinHA6RVHQnRgJYtDCejLZ82mgrF8cJVKS9VUMPq68w99qpFyXS",
  "key30": "5vkU9sJYMzfimxfUNqJNTr6X1ntPd2e15Z7BnvKqtMenSY4tZUaz4V1ZKAqLwVpCYyQQbs16rUtHt1QGTYsr12DL",
  "key31": "3ercTnWY8Rg5VZaUyzpy1iWuSU6ZpmyMcxq9dS4Fehpawy1CvREHneTkmYCeQk2pD1Ah1HoVBHG7QaCc8GXqDyD9",
  "key32": "4hjEGbUq41ygJyS2goEvrBn3eaBz7hG5LhpR8hTbrCWFd7XHQWGikwZW6Q8AV9rNZkmZA7t1i8ds211vj9bvpiGK",
  "key33": "3ZJ1LceUpqNsxmfcDo7JS5kPEkpFMAQDtBS8g7xaFC8sWukNG1sb3TCxG8fLXrPCWNcKuGk9tBw1M7gbhBqVFfTw",
  "key34": "225AiVxgC4T9afEPU6HgUBXqiED9gV3qF7Hte4EGRHJCUfobn7a21Q7r7BHdVee8DdVp6w4s37248op995ZTnDsE",
  "key35": "2JTmcuLMGkwFyxQi1QvdGAadS8v5shBV82qtN19b1obvtP8LhFFwgyj2MyVpUN1W97msXbFqFY8kD6YqVXhBztRv",
  "key36": "6cn2d5CSGLjkUZm49dtxnUTMN6d4822YJYMUoneps2tY72Jnkc7VMPnBwEQy45UezB3DCk9Pi2YB2Gq9Xp97YPm",
  "key37": "4v9rXLZAZu4inZfFWgpC5QMo19yRFgtWdoUGhsnDvtRYJheUziq8UHv15tFj9z4AYAUYRPCFEN2wREe4zoz83a6K",
  "key38": "4GGYhc77Yodyr4apMEszvt3nQmqaPY3CTe5Kf39Vu8DvgWsL7aUpo1PwywpYXvRmfN3qKMU4j6NthbqAwvzd19QN",
  "key39": "65VyfDWoGFXfVcxjUJCWLTwZNdLdb56zNBMTc87TwMnBQZBifeoKhn7P4ehjdNXoJqK1g9uTQ1qcM7X9BsXi9H98",
  "key40": "rzmghR29kY4gYe2qn2dEdvyMnRg1iZEX1NUYebnWs1yDd2eqUFv2rAv2yBMFgEzT6WwmwdCo84V9FnC1RR8iJJA",
  "key41": "56APso23bbeUrUgT58bn4AhfkQsYApGUjaeC2CvNxwAKsvGbrfguGQWczCqvzdiEDQDeCtrahdGjLf4yPn2ASTZk",
  "key42": "RyANiMYej5rmNZUWCyTZqrJE9qnN9iHtNmsPYHktMZ63foTQHL3CTV6vGz2UMpd47y4jtbdW9TLZrv8ftpMMY4r"
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
