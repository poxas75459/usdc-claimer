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
    "3vKQwxh9NGJyyGkXvinQP5YqD7eXHKuq9xgW1geeRN2DwQpabyRnmL7YHrPLAAJmoKmSpiWUC1ns1fRJetQCoefJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L1qfUQiDpXSq5KdfGeK3keWRRnNFP2ma9vWxDWkQNrzmwCYgWuSLDuYRFqCK8FPqgjySnHktHQmug38wb7RHv8q",
  "key1": "64PhJHrFT8pjdzwZM8SnxFtZrN9KS6yUjCPLaEEJY3W5PHTwUVtTHY8gT6VEsgBHuESfvtXiRtd61VpgV6rMJAEa",
  "key2": "3Qc6GYxvFegeHGYMQGBMey5fA6ttxrQSDrZ5EYbNzeV7pXHBTNDGgd3z1wb32HCnLmvRUS5xJqyeNWzoGDv8Sy5C",
  "key3": "3qLErH8deL2RrwHijqiJrEWdgKBu4vpSkcDGemsgNVYhZkBwKa54MBopkLvM7C2iccuwfbg9d3WgqFD37VrFC237",
  "key4": "3ptanYREWXRp9t3JymS37vapbdPByyaqtSMLFLE9mPmianeD2bBLRgebkG5Lb9DefRaBkMoMrcBQiaDNvKhZu4b9",
  "key5": "2FVEc4evugD6bfENTNRX5RjWbpCkvRPxShniPKBVCeGceJNtkdbky5XGkhNt4qBem4KoTWS2ZydJSBS5GLQxLiCH",
  "key6": "3i9nsCM8WnWt9agJMb2aSkAh7Daf16PGaR2Y72UhybymVBvdGStyu48cV57uQjQMcaCRCP2xpG1vYagRsmATbJpT",
  "key7": "3PMux2b9fhg2vhgSSLekY4jnpVtwfmZfysS6fzJ5Hy2RJuYeeQ9Qtmx1RSkagdqfTJxhsHSR81arZqZtvhNfVGFf",
  "key8": "yCj86ht8CDjujgpEZzLpNmrkeBu4MVtrq1ZeUL7pTCLDFFV5BjAzCFZLcV9tirX2ZU5kbZZCczFoW3UhUUDy6jx",
  "key9": "4AG61Hg4FbWvXrzcA1RScUnBSHa23uVtQavN17mdWF9kSuk2Z7SwNyZqEEFGVQFxUFYibwS9GDg2PbpHKRQ9iWD7",
  "key10": "2pkvE9DF9mkYqLWd8xbyPBXwiVDyi4UygEvHwPCE6RRsQyRjh7bbx2QZxpRRKjkGUVLfb62aFjBZ3UsMkaN1HCAU",
  "key11": "3qsTQarASRheZWSBzeCDGatBgnE1hSUkUGMKMUJfnp38cVbuZub2PHiuYyR3qSmJzRpvvu4GwJRXTWMuFVNzn73R",
  "key12": "tLibFSRbW8t5m6MSAG2edGYrxg4crXJgnY6SUqcu7iyHZuXknRss8XCqY2W6PRj8tuicECenScb1j94gKaCafK7",
  "key13": "2XzJtAjN2UWftrZMp9r9ePVA7i7pYtgxj7dgX6wff23bgqCFimWywb5ZhJtSS51WGPS7CdXMEY5CeFgpc9iXZQpe",
  "key14": "4Jz2hEuMg3gdDnHG75gRYKWyv9XU7qCvpLEqrFoFAXrEkAY9vJjaoFTdY9dXsrGKokfJxaHsMZefjgBGtx9kFicq",
  "key15": "2Duqosq1d3Y7nSrohjpcz5gzoSX5vTLsRMv6XyvNx69Yz6j8359RnwfuGutLAwxbAXaV6kLfaCrsbb2UAMFYbALN",
  "key16": "CqHwpBbYHmTwVhaD57Pix6EK6UeACLjUDkpK6nBzwqFFAY3pnZz297NpgRZG2o1GeFT79dNmF8ygCMQMSMBg5cL",
  "key17": "m6aL3wrod2m9ofVZuWMqPBZ785mHjEeKHGitiQSk6vnXZCcUz7VxLFJ6hoigpRwVTaZ4s6kwm8Qt19L65DyhqX8",
  "key18": "5Na89pKw47i7zMoEhBYjwUQqeB1bkAHJEeFaUQySJJwxQZvnVuTwR4nTbKWDRdAXS3331RygS1g5VJgaq8DDAQhU",
  "key19": "4RcWVwnr2uzTibHfbVywUX2SMpFWXmcv3KUhx1fLdSeonuKgWee1pFkaqx1ZntGDCAy8DAtmufu5jjk8juLYHApH",
  "key20": "3QgwmnH2kpaa1KoTXiMmhCPc9ZBzvk2ZwHhqTYrnFzopNzGo5s9PFy8pw7yWLhEEumXWkn9CCTG9JxKDqfWws3KL",
  "key21": "5XE2XTrcobSARkR3hpUgGyTTzK9mPKJCmgkV8zFrHgqxs2qjpmp2SnbEfqGLDKa8y381e8Zr9LR1rPqSfYV9knVx",
  "key22": "2iKtPJidUeAYA7N1GHiUs76A3zCqAnGXPfAhxqPW2TJe3gCdyhBsvqii9ZpEs7LKYGi4ZcF3uAWdCarhHuvz3Vsx",
  "key23": "rNbqQYarj9WhUNYZrLT7bzkd39ncJvg55Jr5QMnG8yfkXqp1sFCaSmAGBM4dPFDxm9hWrLRLf6sMxZ2B8FBLcVr",
  "key24": "5dYkYSanRNVDQ8w84DuEEnckUcCWejRdXMKNATbzNarqwdFE5bKXnut3uL95fW5WQVsKGCZVkghEWXcXB7PfPXXs",
  "key25": "HPDgcryjTSttAs6k9WKrawifPAN6auxasMCTa9Kb16LEgnAHo5PnwavEtxcbmxb1rcWDycfg43Cd4QF23gwnw9W",
  "key26": "2zpRxxEy7rJ5ytkD85mZPj3G25erPWK7CSbg9ZvUTBQbc67HjpALeSQWP88igJwSGwtnbEw4ZhigErvDza2rxkwo",
  "key27": "5EYu5jJMGhiqf8jHZqKPPqDx7eQnBAExVjbtKtNTWKXGqCZW4naWKtH9hzFXBMVA6CFazuP5RwhPnYA9v6iHQAdk",
  "key28": "2DbfVKeVF3NU7Z1uuPeXTTh35Xs58ap9Y4Vh7tGQz5Y7DGLMYfa8DmRDqYUo1sSWacdusMTz6unF35mSXZEEV7R",
  "key29": "5rC23qnkG5KQuCXr9mWpU3DegC6qZwykVA5jPhWjiJGeecwopvNKzBpXFDdQV5MRsTYgT9amvt94EaEKrPtGc4pM",
  "key30": "NqUvs7QkDSBvG2gfKRqQGBCuzrjpsMLU2zK2pksyhZziwgJyzKTnxeWx6adkxyBiwtv7grqcC4wnMaweodm4rzE",
  "key31": "3ffKP9i4cWwciF5ZQzQRZBn3Yx7n91vTjfbsFivkSN9NpniKuPwbfBEsqfJ8jwFgAuQc7vuGiq4Vms6pNGaGrcEp",
  "key32": "5g9HqNLLbeJ7EtXmwZKephCXZEG9N7TT62ZGNjXLFY4DHn11TyHKfJ4Ycv3sDKqx9nQ6BeyKJRzUpF8gTRGMXYt8",
  "key33": "KJPmfjKy8YU46YwXRWhNgxRSn3jKBjzcDWAa1o6wMvX9Zhptd5dhXrHr7Npf8FGy71ZCk6Us6VGdf9G7FuRSnsF",
  "key34": "4UFhUTfWDUmPt81z8SWA3mZ5nKky6zzd4s9Hv4CNUmuFzhs4d1JLcrAYzp3VN8kB3zJNyzfk7zMCx872N3G27V11",
  "key35": "2nRSq4UgpnydiPQRrDN2j7brDtZgv2gjWmTkRFrPAmukcadbwsJzggbn7SCpevFr6Wo3FofYF8U39nGAntuR4zRc",
  "key36": "4qC8R1a7tTBQggHm8VsmDEMAZKVgJuqKTcm8SHrFcvrRb9iCd3SAQV8jZntU6rb3MGaufsMubeTiLKxBKGthpNbH",
  "key37": "5f4CpiVNZdetrgxMsw2GF5eAS6gMpBQAHftfb5hWZJaCKE2WkeUq1F1uq8Hg91PUk5Q7W8WnrLXpkS2ub5xUPQGY",
  "key38": "4Xv6wxDZk6fag3puYvQYxjEhMwdjpFBANJwxWmnkKn1A1ZzwU7VJTzZcPTx8Wo6uv2P1B3CTMrYM674vq88Q7kFE",
  "key39": "4MZYYuKMK7866fwyWn9BV7mHSuS5Ze8wE8eWuAcNywDkFe4ffGbh7Rcn1f3EqoNPnF7Z6HygfhYT672yi6xm5zfL",
  "key40": "5pvKzxhU5Jqqsrumz1xar2x9Sc1YWtUXYD6fzXj3RFYiGUyUYzvUV5h1GLMV59p61NKWAP9jL98Xia4GCL16dRtC",
  "key41": "2L2o7YFSXV1mmYFwd1HjwWxxcBn9F7FomYmwRSoXL5oqKQixfPNJuEZS5gKKfGTMMTbwAZ7wtMJdkxCNrqKCVovd",
  "key42": "2RZ7r4JT67hRnRK6KHBDz7AJKzhY8yCjQUXgwxj1nvhYNu2PgMRzq4DUAi7xaj6XSM6iD9wL95wJ9HPFNWW6m7XD",
  "key43": "2LeqycyyJzpxkeXHdTS64Ls1H4WzzAfv2RGhkGLnUFC1rZ8p6G3QqK4diQg6GYddzhF2giBQwt6pmjK6ndM4yACS",
  "key44": "5KyJzkQW7s2AXw3WqXWLs9ABjTJyUQ5jzf3DUyGp8dDQwzMX3iLj5LxpgQRMwoAKCTuXcgv4Q6ed7Sn2z5HxzqfY",
  "key45": "4GPAtTcgjQUsPvL8HjPH2Rhaufq3wRBcict2Gn3pVYmtYtHJRLV7JBhMwNUj9uYvr3e3vJXj4HuWSBZqwRZKSTnj",
  "key46": "ovcYPCjspHTqGCFXwbTitrM4AWaGkjz8retTM2jCSbKnkTwA5Gw4ABkgMpt9ZiwpAseaKmP3C7DDrThmvxCGiVT",
  "key47": "4W8no5CrqbWKp1CgWKgW1hkuoBtndw2uJVYga44hnLPBcCdrGs64ePXBTfWbnfuuttvuf9tYicCngeizbvRNNjvY"
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
