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
    "63iHFB8Bcz874dK6GLjuhbPJHyWapecCyaBdrrf171z7SX2vTZ71VDnAv2aNVxEWtRUTdJf75HMkWgGMedkVkxRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s9f7XapVKC7tD2TxbsraH9PQvi21p7mqTNA48ETER5JNeUrJd9yeSGrMzBv8LDcD5mHyVtW7aPrtE3SRCUP6mLP",
  "key1": "5YHvQpi8rd2ygwgixBC8bSRN1bDsMPSN4foXcRQxjCx2gn92npmwbfQRVnbKGTbpGT83Gwu2vzeyYQhiuuXVuzEp",
  "key2": "o1CChuyrvi9vCQmX73kthH1sBn8dX17G9mUXCmbQBK4ZzDUm4LBwcp8Nq9E1BNkg1w57KwQvdUyfhwwBiHaz4Gm",
  "key3": "3yYp6kG3jbWnkCgx8dy9hoBdReVsRFECReM5TncYzcYqhhefhtSTK4PqtgBC5vAssdwjiwqPdwyshQXNvwkuKmPH",
  "key4": "5dkTPdhfz8Mj2v3STcJymfujT9E3bXdzDVCdEyKVw3ZMZtLGunjiAa1B48ipNZ9SAUzj74HgjwTuYWLapTmuSxZf",
  "key5": "2fYBxDFaCUMrgmyTLAED924x3Eyo2ssT5PfjZWpYGvUkVjQ74imDESQG1NKpb9souqHVhQWTiAF5pGMwu2FNdegY",
  "key6": "4sLxBY8bWtmykcLBP5su9gyrfk8eWJpay5NZosr5T5RbGG8ZmmrEMVRs92gAs8NW34wd1GUBaXum9Tw9RsjaxU2c",
  "key7": "2ptCaxkChC8WEpWW7X1nTShaueAJSXRpyWfGz9oPANUirApouS473ATBFAF95pshMKC34EeXepQaCtciVFyuNfhu",
  "key8": "3UpiYh82DEeKUneWUaYFb6L8RvVf1oQ5Apq7BNxAtnXytTF5Uf6DdqVfsXSRYpGFqr6D8gApx7R9GmR4rvnpfytk",
  "key9": "E4RQeVvJnuSv64RVEL7hVLmoNpFJq4THH9QtPvCC2W7f4uGv6Fg9ddfjypwBt5GWPTz2WwafeZeXzUnwh39TBTx",
  "key10": "66XjQ1xEDYdwAuyX63Pmpozbgy4pvEg2MadqXoV61Rf2JBuCMrJ6UdqB4XG2cqkEoKVzZimTbPqL1Ybepb33x7rn",
  "key11": "2UftEr7zCF2o5KrXZdkGFNHwTRMGPh1PkUCDromPYRKqC997yA9ZCFBze8jiSTuoZy1c2kuAcraA1ZyHguqbGaWK",
  "key12": "65vUYiFnZ5mqfaGS8CoL5G8kwvC1uPpt825HzN8tetPN5re1iFpCzryKKxzyfRdKpcFkGeD6utj4iawau4sGeGdC",
  "key13": "3B7edskseUzayipa6WZW7nz8GDK7weWmgGBUiVtVLG7d7zQsfPe3rw8MFHtFqYg1BbsbEoUURWp8UsFpm14KXJ5C",
  "key14": "2mVZXVBYxdi9V521qLfbP3qNpRTZMGBeQJEyYX3dGDhazxDR5GwXjjMuSLzfpQhqSbz1LCLJzbWockaAXDP6dkxU",
  "key15": "5UnZvx76JNMTqjbDv14uV4tS4r53EtJfvdznZHgMtgRJ7ipKKNyN7JJjRYbZgi4ngj9H87BJYBgPSGS8rFbGpwhW",
  "key16": "66pfMzN72LCUsHM448wLZDKGJLKy353HHWmAmGs5gCrELZkojA6jpjAA3G168BhaT2HF5a6rEMYUj2Rphozw4Rgm",
  "key17": "pWkHNX4pHb4Rc9pVtX5Hxen1bZ88VcbbDF6Tj3DaYKQ4hknRK93xEBcK7wBFfMcKDHn3GQTn49HNYJfAf1VM9xM",
  "key18": "55ehiTS6kWVi9CfRK8mDLWXBVgDhqCYQhLDSPjub2PExQ7zH5dkgoTNHVmv4BgTzwZpQU4U5qUeSrNLUj6WwAdur",
  "key19": "54qtgg9zySfgma4AqGafCSHTCVgDZFntNhheHfsQ7mYksY6XKSeuQ28U5okGkeJQaikMeYMjai1ifmQjxMJMyuCq",
  "key20": "31ftGtjJWaJHJd3XVo4zyVpZGJXPZmxH5h8eDfJvjFRvzCWSKmMpozCXJ3wUCvZRDZAnekmFL3J7333uwK11UDV4",
  "key21": "2R2L6JgBBMCdGbxJh8Dgkmage17VxMMYsqXXVzpw4QFnMJc436e2n3XcW9fNpXNdd7tz3XbyPS41xkWvbAh8iRBk",
  "key22": "55qNdmnkG4qGNcMfgCE378ECUD5d6NdFtoi7fzVKWbm6hYqeKiHW3BBz2K848V4XjhKhMc5ghxq67qwFs1DArjcS",
  "key23": "2NpjyJha21o2xseFV8bBxPhs7sziFpCQXFUn3CnBA49BxzXfK4tF6E6QWbmmTLuC9xm9nXVFSZKdLWN3jkQXuZXt",
  "key24": "265DaVGMME88xKaq2FMpMKknExfAyzysGasW1e3iL8pSXq29QowTFJbihzVRFzRXT1k7w76GGV58RZmZbrkgnHsC",
  "key25": "53etCMKEYKNHo6KtCXFKWKNEpiPN8ZS4nP8eqVAgVqjfPY8JN9YGzKZtGQWpVJhtSvvAqdZMo4ajnke2C6mbqWp3",
  "key26": "3PA2eNgoMHpfgRqaBaHKEeU2z2rRzWtfudPbCNULeCfCpjbZUNbUAu4NuGyTtuRBQBJkJ5Xi6q1oWVAhq2A7cyZK",
  "key27": "2y2s8KpZPfpadLdejH5tBRfbaWgUCdbpvSV3LvMX3J6R5HTVabifULer6BryRkoRWBDnauRsr9hcrJ5bdxAZbfg4",
  "key28": "4tBLVMmq4goNxMKQuQYFSEjY3rG5gLEVNkXCNjiZ6u98ZWEn4wjCXQgNvaD8h44LT8Ms6ak95Zd5my5v91VKTJJA",
  "key29": "416sm8reyuC1oDABPtkJciHorpvKEuDMqTotU1murr629M6QEo4VqMcXZrYFnbPZgShtaENrBCgKgfbWNfuiAXQs",
  "key30": "4a6Mm91ihFjsHKTBRiBpLQer7rUW8WGzFSXTwqkugvXgHqcsLNeV7mAnGWygcQKnymhayCWqGQV5GeriKAfeF3V3",
  "key31": "4WfzyPwCDp56xzaeo6Z8q9yBKxsKtAzDH4SDneYjs1wfLu6txSbsz12JWt38jj4MJ2wueKhnL8GUi58U86zX9EGm",
  "key32": "gLH9eWzcdVYrs4zhpCSgAMMd7krypDZA6M4SVcphxgubywPHrQoAwgHaeGzxY5XjAUJUD3Tevs7e6gDW6pFNgvM",
  "key33": "2Jagjq4ZB4DEVJbjkrhJR5x2hwoN89L9bLDYTPPtBjG3a7uZMUY9H8whALc7reshM73j4hpkR5Tts1KcctXd2ALi",
  "key34": "3ymp1n23psu1drux9TiQ7SUzocrzi5J53K692VS5tGTQPa4Rv3P6idnurSG5n3hep4nm7ZXonqkBVvZMpaejHZJY",
  "key35": "4AAgnAJnftWgRSv9QK98jfhSyV8JJGpSKygLfHsmtpQPM5TppcCdRP24teisYFT5tZGc3uA814sKuzMesan1qQ9E",
  "key36": "5EMWG9aA49pTCRuBNbcFErwYZN5EB45zJH6kWjTNaV9kwo42JSachCwoZCuCte5rcZKiP3yZmtDh1U6hfSqSDcvg",
  "key37": "NTH44hQcDVK8CBnhjBi6YCYoDDoGCV8cQeaCuesmupZecTcBg5dJCeAqCm5VPRrFKnB4VtTXVVCB9KzFKX7Dmh8",
  "key38": "2cUgLMxKNb9p5FM8VYGefS62UZqBwiDxyRMbfSuaq9gtexWiLXuc572p9n2skWSwN1EgwCVqpkfcvKa73zXDupea",
  "key39": "5EAqzpjhuizxRwAYeCFsmNnQLLzomgyTjixDN5r8sF5TjEcjQQqBDhBJ3KDrHdHMn8MnDGP99VEfLqJ6MFjwuNHM",
  "key40": "63k2A4qbTgZAazRTKEkeGtdnQA8515UHr5bajjFq3u4zFny2oEwW9C8uHTgm8EGEFYYfqGMhPY8rugLiMQNRgM3v",
  "key41": "2wCCU1q29kFuhmbr26FgRrdqkadfn5qxHAF7uj3CN7fvc2Z9mVmD8kVBzAesPRNhP2rpZnTJAHpMSBqLA1g568i2",
  "key42": "Et2NGdCQAZagQEBvW2Rb6mm9gHSfXKgrb78hHnH8mrXAdMQ54ziYHp9cLV5PKqMKCGcCJANGPTMUiNjaFBEBkRq",
  "key43": "28tcMFnaMc76rSW9KSBho6pCH4SanFpg66qDkL4JD9kRfB14sBb5CVSM5KYHW2H7HSmEETaQFnNDvXTJyE6vXWsG",
  "key44": "5ktsocUJtUdnh2CjZWKUyP7Qrie2qBHryPNhQQU5HH24GFMrauvKj4YWm6u1aKjMpD6179vat5bH3qSAAnih3tqg",
  "key45": "AqMDEQNE667NDWuPtybt7gD5EAbQR1h3JYqr2EnstSivsMaMf31PmMuUpH6Qayb6CdEm3T8NQHj9vdkrcsHbQn3",
  "key46": "5P1EURCYKCkAffWM5HvbFqWLSxKKdLcrwkxaCiCBBphRpQarzkjyCNkgRGeBF5yXYF6byGiCpHAYKJfduEXjgVdZ"
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
