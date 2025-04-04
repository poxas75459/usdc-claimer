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
    "aoXaJ6Gpd6PoQ4pMPg4Gmyc9hH2aFHa6VZxCBnSrdR4gF8zzBBwgk4a64weV8Eoo5KYVL5CgX6BuJXx8E4tuCWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aJuHuiWFb5Ef8JxRrk42AKx7FtnFkiqiKxeU8KXz5gKseMiDF1X9B2yoWvXrUbWc5xGWotAGixjGmVnWRujzoGF",
  "key1": "3YDNodqVr44H2PGD3Af3YhN2WU17zyQ55nseC7WJH3YAk98svd2ccir1q7bGfMC6KJexzJLJv6Yzwom6RXA7JE8i",
  "key2": "4fAGEggGefPY1rgZ4xfyU1Lxhf5YmAUzmpeu3hVjMv42rsTPziZU8VT6Ym6ueBPtJ9tPSVoNdCBZzLQQvFjjyJvm",
  "key3": "Ab1h5sRxZDn8km78UpbMBiaKWB49qTFmW5yGWK8sw4PU9XVQ4aRfAsmVV5qYrW9bGfrwUk8h2fUcJ13Hj6avu5e",
  "key4": "5NR1x3AikcmFmR55MJb4mDQhQhdWussQyMnaH3kcRecJ6UJwvAWWKdcsrPgVs2tM6E8QTWBArkvqEue43yZjEEEQ",
  "key5": "4SRJf8vH2RfFdo7fNDQY4JB1N55R5WaeUTwxf6VsQwiXyTxG38eX5uXo6FEUpm4RDCEcWR8RKc3m8YsRv4uWcfpC",
  "key6": "5SMXF6rrbwQJZmHKxZ4Sk5bfoZUCzkaHQ85sENUCD1S2b3xQGSHyBY5Z8CRtGdgNiUdtSei9WRApQFnxQU5ehSfS",
  "key7": "2A5xhkN6gKxgwvnAgn6SLywJyXsbcQJNvCf34R15kDt2Ag5FXYk5sinbp8tyxSMYTW613LsURbEvSi8tMUH888WG",
  "key8": "2wZyM6ABjby9ozDb1fWWAWYR2uKu4SB49oLep2rGqPhdHticQ1yZC6mTVpwJjC5S8qysaFTRTfCJgRSqGCRcTYrs",
  "key9": "3PumnyaTcCpAb8aCo5TZAoQqxdzaCBp6Aek7YEQzj4AP1ddK7sUuSKbuL2e3WoTPnwosvNHs98B7TnV6fpuAbmmM",
  "key10": "5kh7XWKYZJi2v9382LAbXezTEM3CU1a53cS2bg3aUFFbgdy2hZPtJmczYnimtgZwLReffgRQt4RnR6688phipBD4",
  "key11": "pFr5p39SjpZMcaHVFSru22dKFgd62L2Uon1GXDj6FokVwheAZhuLtG9oGLzJBv6WVwr7zvNwhxkyV17tKZYjiQD",
  "key12": "4mWyiNkm9zLRSsgt3TX6Qy7PGKZ6bfg32hnkF51cB7vpzXBkEKJa174bnpWx3f2ftriJmQsApGJRFBckNS5Qprrf",
  "key13": "4eS84cxALtFmJFcWyhoyddCiHqscwWb1hrigRHRqsMCHu3vUTe4DACa9UUyycSdTUaxQn6Jo7VADZxnVMXAvbJyA",
  "key14": "HbidoumFLqenmZD8w5YnXm3eyrWLR2Gid9UpsiHUg1vojB2myo8zAsbzobpGshL4AimmmcDo9vQMxox85hhq9Cu",
  "key15": "3RXeJwoSP97XSEmxuU3RGfn3ELJZERFmWwgqYSJpmgkYddyj64fGUPKQAcsw3uxFhhAekxGkCewTZS1ZUKhW9FZy",
  "key16": "2d1AVFBnN3MDZmTdtgBpDGhBHxxTP5rbkcjAVqSZyW8boQTRzEmyn86bDuk1q2xmm7YmDVRrd1YSHp5zhm71CAEq",
  "key17": "EpD9y48NdNLStDHbt3V6xctxkMAbXgF8nhWF3SLdWttrF5JBgKjk9ipoWfhehYC1xZG1nVfehPciuc5KSZDo4GU",
  "key18": "3Zqhqzv9Bs3osss9gLopWz8pBxXfnXg8RHDDALpMgvUPQt4SN4SanMHn41H3XnFHDaWDkhNfvkrXSPPFNwhSav3d",
  "key19": "2ZyeVB7gmwXXaCtAfNwcb5q82HMoogUKq3Z2DoAyTfotwgB5iLG17TwWpqdG1oBYH5a3hUb5LfMVKdjNU68HBsQA",
  "key20": "sP9fP2N1bzc7k13FZxKUVdNzTP66ev7sCCAhZTX5NB4x53BdJLriHcDLw53TNmJkDdnN6XtLptEA6BYsu4Jc8RZ",
  "key21": "25gKiFsatsJXAjfzyirNNaM3cG83fVVX7tGZpS78aKpDn4nrw3qKVgfT3PYrCUiXYk1iG73QrczjZT1aWmVWWKgW",
  "key22": "2srdZkjoj6ECkJDS9z1sBHYLFvBdUo9jJZL3KzyDAZSHhWYAde2x9WswejbxWR8djVYAfPaA84V28P47QDm8gLTa",
  "key23": "26SHWNuTnunQfYF4Mf8zGLERQQ16tS2mXnwej9Surt7pH2bzChpLFL1VCLyfPTeYJXtqES8AxYkXJQFBGLung9Nn",
  "key24": "29AzETeZfJBPbRkDHnoUG9NNUm3Xg9oEQuvTkHu7GsLj2eGaU6Vx2K3Xt1UEPvAszT2JzoXk6uFKKJQSV1ZV49Ch",
  "key25": "3hM1bLpAqYA5M9E8AKiUhxC3CeXJRyS8CjfQcS1o9bY9dR4va5HjBgcxDHv1gnVeR35mrqyj9Qjpt5dmHS8orge",
  "key26": "oLHsTdvYygNip267N86Ay7VtqAUdg72wpvQmt3eDVDCQiZfBFR1mN4qXXT3zVVGwjZAprKoNJShXP9HzfB79T9S",
  "key27": "2j85Kz7LysKm6oAZ1zo8vFRY59jHPdK2GYm4tH7LQ1P5tnrjRCdjUNxbJ9rwDeSmFmNj3UT8MgPMnbLwYB4YqtKY",
  "key28": "3j5dvDat12GVgJM8VudjpyEnyUKn62jRXf24fQz5VRW8e2eyHKV8Dexr1YtFXrMg5Z37DgFxMhVRKHBEvPxuLT2N",
  "key29": "4EL1oQG81jEoyggRTL6JQFMdqJTW8FhMX2sXVxbyoMcjon3AUd1NwioR7i81RfZptFyh5J3eHSF8heCBsuUx1YCn",
  "key30": "4poUeEF1gaWAB3dqvNrLDGNe6Xvo77XUfVrgKN44WamSAMSTTxC1SudaknHzbL9w18sHoCuvkR9D8rY4s58fSPfd",
  "key31": "4PE5YxSdYEWW7KaHnVX2pU4E9Y4TdpapdghQ43oyaZrjnGSnGouCqxSqYZqu55Un7Q2efgkBpYb4VDNoZKgHUfJh",
  "key32": "4Y91UJqvnjBTJt8Qa4Q6VoT8ZabDLRigd4Bvc5srT1egUaE7GfdTadpNjF8eaZSRm5BFzGNTka3PouEo5gxQZox",
  "key33": "3XaVYVL8xLhrfguVJKKvGquuKb2obZXF7bqJKKu6WvMLmZG9bHMJBpNepPiVWzu49PR5QBMP8tJ77rHs33H5ZVE1",
  "key34": "5g1hQJik8Fo4NVpqxJGnHeHJkKTeqDyXMUo5ms8bd1Zm8ZeLWs2F4zuySJMXyaxYXoeRy48Vz3Mm8Kzffbb9wDST",
  "key35": "4Xbe13Kj8PvTBB2B69yMGgsGYaRwS1WqbMQA5v2MpEB63H8EhkzXdXPmUe8s5YXaZ6nFZCeVhq5VTobdh83zQKcv",
  "key36": "ns81boJro2xdZzLDYpX8X67bp9kV8dXRtC1D5Q9Z1qXg8Uq2Zk3QkEKUqyZK1BKN75MNo5tWCQZyBgxBW6uM8Ur",
  "key37": "3QtmzGo2FjoNmG9DngfM9aotdtLU337B6VKfzfoM8UAgK8PkuqiKJYmtZj8WsQGUF6oUVnNCmMt5uUeBjTywLvVZ",
  "key38": "5T6wX881XKd8viyiS9xunUdftye1bM4boY5f7Akr5sJuFmAsFXc5ronR3iKQ9799AwMKrhMGrWa7NKaDUTPiH9wY",
  "key39": "3osrN8jKJ2B82fYmM2DC98rQCitxXvJpVXf7CiePCLp7kzEXK9PyvKqdtPYE5w7SLKeLvyhPvkAu5yChZ1X9o4zn",
  "key40": "SWPRdPRhRDVZhyBJuQA5FiXXpqzACsTbqR7A4S32KwpYhLuWAtaCKT7CfYMj8P6cX25gvMT8atQ1iho2qZBvJY2",
  "key41": "24b9dKtvfxaygAiRuJLgkda1UeLBej5nGNUdivDmRK8ua5zL1WDdqeoj1mwp8pX3pbp84pGBrdyUV1sNWXintpvj",
  "key42": "2oVvMpnyN9gVWo7skuHTk89zjCWJ6xsxJ37CDLx41RcCTe2NQSJJMY6bSa9hnFyp7N9xxCiPg5mQrd96NLLxZF5J"
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
