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
    "5L7XciqrGczy5C2pGP97rDPSHXdAgDHED76y51me3X5n3HXBoe1tfPxgpxvtyJenoXWpnQ1A7mjRGjb3mQ5VZqPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iwEeYHq9cFmkPy1s8orLBXayBfYmtbR4xycsYAmK85Uz2kyRxFsoYnS5VaCF5zjbNVVsDiUdS12b56k3VNaoVsg",
  "key1": "mJaXuMjab8FCqoPqj9mx5Xt7yqaZmskVEGPxLXTagvbP9mSVqN9NGS2KeLvLAaFAtKTYN3GUBnTs85qydqoCxz3",
  "key2": "WBUGq7JKes9bQVNx4sa8MYcvhR4MPc3iqkEHi7QBwxhZcaTedMu8S8ugJTEuVKCckSrD4mJyXCyhAhyuzFeVjrk",
  "key3": "5nEydTq65hfm4g7e3uToS2ns7dzstehMVYbjZsJfLmCxXnBzu1cNJCP5EABimGu2AabvqWMKkYmBGWRT3hMjf6h9",
  "key4": "55JWhFTFVoAuXqySycRsKB9n6xakRcfQ7ATW2XkZqoeP8rFg5R11FX6XQpXxoVb7Pu83DsFsEtnQ93sNJwKV56H5",
  "key5": "3duPuh9D6BdzbCpHSBHY9o5tSD95Nz8LNWdwGUZDV1aftH2Z6AGR8VeDoUNAj14RbLHyaiuJRkinsSYYsDh5rY9t",
  "key6": "fKqv1dFq8NLPRs6RSQeS437QpG489oHTXeCLFrSoVGWkLnnqVe6de83uEJFBGCwti7Zv9B2uwyWADLRBBGejfGC",
  "key7": "j4CWbbaHsA2cFKVyayc6czPjm3oAQuWYWmRRAQXEjbSdLNjWcsbzrFMe2jQQ6qVw937cbboHTFHp3tQzWWGujhB",
  "key8": "2XQfQyNrfMv6PdqWn5Th2yXFCugNg8u9KmNUFMVfnLHauWy1A9P4nT6MUchoqSfwiKjs235mvYRarAZALfMLVYMF",
  "key9": "3okhKPmHdbb97hcW4Vzx67oNVsX2XQxMGF6tNdW1gCKX5mNR1h2wX6kgSpYf94cjCw6TehQZvepCoNriAdK6rmmh",
  "key10": "5uWMNqxUAvZSFb2fqjc7gYuY8Uns1ARLYGbi8afC1hedqdSj3Xd9mCqC3HexL4YMrjbX2UTTXK8FzxHyjoMdShoy",
  "key11": "4idhnarTyDEprAZBQLktYwQowPiZHFBCo9zn4XBCPX2eZgKxq8XiicusUTAGyj7iQe7JCVpsxDMA9wdtteWwX1Nn",
  "key12": "XcTugW7x2SAy3sga7oHjfXDJS7kAVzXUZQ2kNSeFG3zFsLumqajj6RRCuBY18dfVcRG17uQsq5eyJ25oNW63Ze5",
  "key13": "5W4QfuZGAgMxXfmHrtrkmxRppsX3JGYn36AxPHVjd8soUDbgtVfmfwyWPkbJWG92wnQDpqnMn3WsFHG8NbLbTXZs",
  "key14": "2q3GGvsunRbgwuWd8iqr1jeFus4dCX7SfV38ytMVAqoLiMs44otGHjTnYxtRJTbYXQHz5PFsFFaEnRMDzdnjGgA8",
  "key15": "4FaFQLLvWvUt7Y5j6raCEnTGiwcQSDSpRp71NkBejT4pmUgpCi42ijZuNPxjXxppgvyouAxx1LnDvERuZvnFibqc",
  "key16": "nDjmV9CHfi3AXRtrTHrqQhxuL5eYACq1oYEqQLATrCgu5xSRmYmG52khRUaPTUy3CLtRyeotdVjnMYtn7sYASYb",
  "key17": "5Qzj7oG5yTJEkXLeKgEpzDFWpYA43P4m2kTeFR5XEfB5CaLdkR7hyJhoHNAWbPT3iHozPe7vJbDKDjigsqYz2PxM",
  "key18": "tHHvuDFVPjnEe1G5ZVVN8Rr3yzDr2vkYwUtzcyF7XxKNc9hsiPMb7sSX6stuvj1MBnTdvUu5db6tXLHUREfc5Fd",
  "key19": "Gthg6VthzLa733YS1jAU7jy6LoqMd8JD8h3QNF8bcmxQnBCqRnM67GeVzjrNSd2xgW33n5Nqe4sHADeGCSiqET3",
  "key20": "5G3PfQTKuCmni492oDKMHU8JUm2vNkWnH44mggxnUvsc5f5cb5qhyESsonmbt1dyQ19XqmgShHzK9yqT3CVkW3dn",
  "key21": "5EsT2RdcyQvyC339BYtxMnavn1z5v9eDbAfrAEMxvq6dMu1HVsvWJvsz7BpP5f97L2hGgdDmdidUAPAq6KUjKGqz",
  "key22": "5F9Zh1z5Lhd47VDVLsHB4r2ztMoGAc2pekTyqBMV8uB5bqXSNC69eNaKL2d3aKBtAgnueV1RV3b1PC1XAyCEyV79",
  "key23": "2SX4ing4zZssPPU6ciKtFd3QRT9WEpWX3Dy16f4BTgByDeYa6e4ME8jFsSSmBYzGxHfqzywyAwvHuJKW68EbAmzo",
  "key24": "fQjHCUu1vsd62SYoUPoWsteTGka1x6rpjApnwEtsXt3YpF5ERRMVsgLSb2RKtQvTLwkeQmVRPVKw5hny3JMJGXc",
  "key25": "4dpD1UKuvBDipV1NKwggQLH2CMKK3is6wtQgE5ZZWWWM4J3DMGyDKkRCrrJdsfcjP8TQzbzXhFkUZAvKPb8ZnvvN",
  "key26": "Hvozb1cKZpMb5PCB9BhMMiMt1oG5MnuWCKduXbmPowbvsqeKDhfPq7bNYbSHiuArMjcNfJ8kdReoHaT35JHfoKf",
  "key27": "2XuRn1h1RbRiyV4CkUvUNfWCMt89Sno2qxjP4ctKaM3dZbBSK44Ehv15HYoUsFB9pwNqBB4dXhybNn7Y3atTtzQY",
  "key28": "26ArFbxEJkQRP5KDJkKr1rnymwBqeELV4iH1Arpp9gGNZVssuNtmHznRiBvYivjazcTqhtF2ConRJwrpoMrB8Tf9",
  "key29": "57m5zDYhePiKAnnMar4E2C9G2Ppa3RmAgibCkJ2aww4xpDuk1PpShRVrK4kxW94S2V5PKFRQScFTBgCXKpSwpaLW",
  "key30": "hnRwP2FfAi7MikwD4kJJGhsdAQzYNNRsQPPiaH1yCYaJNLcDAU4tQ5DvdojzkMiVySVJXYBG1GJ1dzyuCa1Endz",
  "key31": "45FK9NC6VHzxvkumSCuee7qrwHt37tsyEmDuRYurGMJHiVCgxjjxMbELVA7mcrYfCM6wsHevkYQjYemH9aE5VQGs",
  "key32": "2s6aMwDAgqxNzMf3buy4tat3Sb5UCLSoJWXikR8sgc3h1pH7nMwVocBY7DoBYZFshhtWu5kQn1U58VRdQF7BRcEG",
  "key33": "33hU7mz3CceBGrmqQQbDQU6UVTT4Pq6iQa25T9qyX9sR7c3u4onUx2hhhwi679DXGLxVDgkLCWZyjfiMRZXo1znm",
  "key34": "4EAb8Tm8Mg73nMRq9mFXjJiFVqF3pLtDQqTPfLWAHiGLMfgdGUg48ABPaQDbV2w4DmuDDojwrSTnTRs5HyWrjDiu",
  "key35": "2nokgurukJbJ4H8QyEh54QAF2JXhwE7gf7L18CsyWbG14MC1UwxS6u4SB3kidrt5fV3whsgouvC5miZzvBG5qqpe",
  "key36": "415GzFjZLfnvQHRvGPCeRdzR5sx6uusEmioREE8ZPDPFW5AD2fkmWJMYEUhC328NoYxyMyXpemPf2BD94CveWh9x",
  "key37": "UYmv3CeDYepTNEYWZasYYw5cW21mFCF7PyETgXqdg6aZZJ5CNLWXgCuRsgAKtRrxgYtewbLhzC4JnpJ3eFpFvaj",
  "key38": "3PwZ68TfQVNbfwQGHjNuYAwp3T4ocKc3q2Zy9AKeoo9mTsLhExeeuLsWnwXbiaWuBFqnMaW58aGuavjcUcPgwv6H",
  "key39": "3kt8FfiQHAg5RA48dpJbSiSLfCrTUQB1WS2WYy7hgD6WoKDjXqoxiZi16H5F5h8MFnzQRZas7Um14W2P8D878Qbf",
  "key40": "3TrXNmzfL2d2sByLYVb868hFtNgtaTQouMXUWKu8kD62eqwZFDZjVNJbwv1JnxX8QWboMMnBRoixQJvsaV76n5y",
  "key41": "4pMxXpNDnR9FnYgHa6jdq4htYfFMKUEAEYaX1XDC2RFfx3c254rLu4GusxU4t2XPwXhSm4tUyL9kCL7yRToPkHiz",
  "key42": "32d5bqmWubZcQjW97LBWHqLpVY8JuA2ChDrU2sMwiWJ7U3Yvoo5UukWTq3JwKy2E6nyCrs5zkqDrkrdD6B6EQoq3",
  "key43": "5neoCTvdvMRgS8sEYjiGM6uJ9qT1cA1bCUK1ic48JteHuQd5fjCjjVBL6LXrtPAkuRdS6hw8AG58J6eDHDucj22K"
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
