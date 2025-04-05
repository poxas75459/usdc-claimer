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
    "WPZwASEEwc8F7tiVhGdV56fGUY3BTfZwPWGeNgrmZBRVrk6Z2p27JrabezX45FnLSRMAFyCVeAKxMiGaRLUsK6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67WGwarX9TEgWuqMUPF2dcH7CuD8r2Wreoo74ohW8q3zcbJAzswQhnmBY8kSFriaL7uvA1ENAdG5ihF4VmiHQ2FB",
  "key1": "HEmYSDY1ibke9rVZ1u5U3DdcXPpKWkVdj4NZ9exzPhkQex8DWyVF7Ka9qKLuu9hq58dgq9S4KH8t8QVa7KE2BaU",
  "key2": "6t3ELAMehnGR3TdcFqbhh8eHvK7YTeknx5cikYv4yLSEaotnMY9TMo9hqcDU72poipXos8cRDK5Y1BBKEHDJWhD",
  "key3": "77uUKZ7md3PHgQu6soy7dVreqLMQA67PkL1iXMo31ichNE74te22uppU17Tk2DrpRNmC4nyVXvzMtbteXgM9diM",
  "key4": "3v6RCBkJUBEB5KGjngxFVXvDn2AJqMZ29PY7T9fFWE7PYRYe1mEpt1pbb9mQmhBymccY7XwmzrucXogj8KdaSYCd",
  "key5": "5Qcgg8Z6C4cMMhEmxDBwDbJT8CrwSeHAWZgLKNfWGyUPELAPBEnNpsf53kHpvzpUosoj2JsYAFEw4MxFSD4aTHnb",
  "key6": "2CDzswmkz73Sgsys23LmHC6f1ePrG3oZv1byv7LV9iDC8ZwBtMfRH17e1fWetu3E4w133tt61Qs2krPRLXRwMp9D",
  "key7": "4ioySKiGu2gjrtVjVRCjsjyLSUJbgXEnQYZWXkWUn7VMeAoaNx5g8NyHtT2s23tSTkVZC6pdBqavhdCA8jAmQLTZ",
  "key8": "rCVUy5KQWj9s5UbYsvr4LgZrQiBLPdLin6mSx2x3pAb985TyFnhjdbQS7oBrSnZ9NTbGABM242tHmmizukf5SSM",
  "key9": "4ZRBVg9undpHGX9iJTGLVEgzhfQnKczaxK7gVMkb6tja6nGDNVoyWFTpcWYTEuESzwGWVJdAdQh7ZyD4s5EVXvNA",
  "key10": "2bvUajB6WK4WYmRsSaFHdWgLu2pXYkbveCcN2yaXnh2AZMuVGQkvdFy1Ny1tG9tQv24gLZRJqHA5BchWTcSQkyNa",
  "key11": "2FGeUUKrXxpdbtPhyBwim9tL4gBBuTq2aRiRKCXPoKujwM3qnEaoHrpxCY8moEZAfqg2zWHBALeNzY6XFo7sWgCq",
  "key12": "3KcGrBLBjRd16gK5N7U5qsUsFFE7paJzKCYwcqebdeuh46fhDu67JMqGwjhjZcS3z2pSy8BTeBiXepMQkrk53B4j",
  "key13": "5vVmW4TkLqqDH1JdtVgct76tgEzUBMkTDopyUi29ALTSnnPPDajREoC3W6ksAdS98KFsWHbejsHxRY93VoWtrtEZ",
  "key14": "2r9Rio38sc2dqziEvzG6XYnvR3oPaK9SjomXK1WpzwDF3P6NTavgVXmtGRzAT1dBe1qBNjqXUZDuA3Qwh2a9DB8x",
  "key15": "5F55o8oBA6TbEyhi5m7uD5dm4eLMPNtnnxSawo1pxvRdYCzANSMQMqtk3xpXqLzkrVLEWZZrE9p3kSayPvpghFJW",
  "key16": "4K5igrKpspAT7GHbC4GqgCLbtmeFvuTbrd4FzTMUTnq12msBRA3JhwjLRypwrZnp1hiJ4bdLKgHJ3fkqS8TybeRJ",
  "key17": "5hhxyPjNCjER54VLisKuJTYpu8HHpVomTeKtFKaCEEyMxWFHeq8Lm2J3a6x9K2DerUqKoYrwECRD3qG1MDRzR6oT",
  "key18": "3V9yBMK2aBKqsfPPUdwGcKtJLpVFBYW6J8nJn68uwCx6H7DE3bPf5ybjYkMe3xtizywBBmMaZqwjupfeT5WLPaAm",
  "key19": "3LB196ou3E3pbrjSHegwGNzajf82aV9kiS9SXcT6n5fRdzaBDMHmGemSj7tjwmPViAufjQN8Aiif7Prh19wzwFtG",
  "key20": "wTw43DLhKZu7o1zgnSiiw9yYKJDMAAHtkMVtYN471EtrKcPHgkkGMXF2dgfVGK91ys9DJ9WsFjVGJ6swJCzYzvX",
  "key21": "DQ4LrgdQTZ4w3xiYUnp9QmkwMGvidQxTNnotCJEq5uuDyYL6XnJuFxWdu3UDNgqT8HPCT31y5af6E3HQA9RgT2d",
  "key22": "ARLBbKQDCqsBGCiRnQL44SPJ6BWdWQbCoLFahiXAx2t34FAJuFGHXEimEvEkJJ5oUjgmzcxzKwJ4LM33BB9Ed7H",
  "key23": "XbU8J9kb5ZxADCs1tQm8bQZS7qUrxuN6KouSdj6iQ6paqxbkfZPfyB1eojyD2QrpzXiVFyQkLZZKSbos3zSWz7t",
  "key24": "5vQvHunJRAvRo9droyxX55rkUQjDYxDwZfuPgJMEHtKLzmXqH7v3aWmuDP1Xjhqm1MaPdUdyaJwZWbvLL7uA28j",
  "key25": "2rGb674CYC7vFzY377934YH5ZqvbtinXPww9AuMwbaNwxg13jdZH1tBjVaBgi4VtZsestwiSs9V9GqAR2uLb5y1r",
  "key26": "2CpDZc5x8HW6Ad6bDeDPUQjNkXMwZzMLQSm8ew4q2bGVhZCBJdbf64CGX8CdCoap9oyYhgWz5E6DuzU9yzMfFDAH",
  "key27": "54zqFXYxKJQa3bJZ28os5H3JnNWtuAf1PVCqRxXM7ezY9aA9h6HEM8BywFVV3Z5iDvLvmC7Cpz3Efm3fgTa4Bg3H",
  "key28": "dTDhXAiGPspmEyBczBiriDVyc6Chkxgd5viYkLq5d8YgQuyKC9tumLfevipqEtAWSLouY8sBShWcNfLaDKFFoa1",
  "key29": "5cq1tCC4huUv8xuMS3FcaGvaF7Qoqyu7yXejQK2r1xfnsCvpHZWzbCDa6bWKtASppkTwiwBHkkeQ64VrbndAPpwf",
  "key30": "3c54XdfnkDaFwACtuAZjdqnPpd12adx4YwtjwNzV9zhoJYDRuVArB49Vj4oRKPWLAfWscVCqQ1Nw3YmXw3ouwbPh",
  "key31": "MJoW51RoDoKNeTTg7yfSV3nqcXkaUpQgNdrUjDLURLt9TvFCuQRhz8XM6TxhfNpyCfBjUPjq6dG1mTKMbBxQFWv",
  "key32": "mMTac5iNu4Yx2sGe3MEPQ2YbXKzeqXD2h4kMnaS8CjnMEyLAKMTzeea1K72QAgKe6v4dQF2npM1RPJPgDpWaogr",
  "key33": "4YykjigPRkraRmdgVecvP84txR8pUg1V3mDDV8ibk52ELUDXWEUHmeNzcUMdUK4Jxv9eroEYKEPQwydPkzcDipH9",
  "key34": "637w9YjvxgYLEY32o4if75uY2snZ3DkPXjKytHDFSfoRjU5FBjmuCZDuXnrcr7zi8R6WvnpocWaBM9yhG3i2Bawx",
  "key35": "2XxghN1nRD2hDkXD22TEgWvnqWPdGRY1aeJcg5k3iCJbzxKJDrTZxMQSQ1pcviNLKg29g7eJTvrhdtCZZPAYbkYo",
  "key36": "2nAUugWHvFfGHyu7uELDaBzuYxqePZd6m54r9iGt7k9M4NywUk2ckd2123VodQhi8yBwyJtHRmVnngmVMnW3HzcV",
  "key37": "4KXnfQYkF8Z4Tnd3SCKk9dEJYExHBaT8yQUbw5M1wE2TUrBXzy5ssi6zbFqTKiYC5QmpVxwQN8g4cA7Kp8iMRrx2",
  "key38": "2ZHYhd4C1LpSL7eFjcowBBsWfUoWs6ifVSN67BRRiCAUFRHpoB7uy715ioypd2tR8XdPUq3YQRLQL4MGRzqfLobi",
  "key39": "5xgiPqmBcjDGt62ZjtZQUF3F4qpsEiPi1RqyUBS4fxpS1fDyX4F7wVkrVRRkMwsLMs2vsQBd1P1MWKa3NXvGxGWW",
  "key40": "2Ycbf8NpfPa8idSVkUcVpksY1FeHoArsAE8pEe72HRKZFchHNqLs2y3wAQW6gyb7wmbRaeV7YgQgMnArVepF7AEG",
  "key41": "ZoFoDYEHAkNmM3WkAEV5Eph71kgrNNMNnKyXi6WasoAa7qhDNMgafE4g9hn8EDWi9EPaMQjJktf3VDvArCKqvcx",
  "key42": "2bSAopZ7g3ihvHCbdpNcyZ36yYyNMq1FRhkZ45X3NCaRz1KSguweGD7UJQLr9hbTt9YR5evLsXUMhkSMPoTkN17Y",
  "key43": "2UhE2pmtZdVR6Z615yaFykSebBmUQrXBaheXLXGsxZzbh62ZHqLTMTq5EJGxXRH5PQGWVyrhSKCcHH5TANjgPYTv",
  "key44": "3g77rb1NvirYCgZUEijk791YkTKqf426nzA8fMENPWhrzZuWCQDabT2JaRFvctcGcGt5WfeCiQSX6NfPzgHC63jA",
  "key45": "SkEE3r1wR4mSjwaXfDXwAdr8Gg7eQFQpLaEDwPvLa3nop8r6uRdkKmWLDQ3aei3dimnYVmUUrNeWyXQSrfcZ9Gr",
  "key46": "vF5UdPFYsgGv8Nfio7sRsdN5gAWCYSTomvNMXGp2tncFvZ5SDzJBjE4BvRofNr3RCLwUr9bicZ2QFQQtJ91zE2M"
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
