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
    "5cTSbs8CG6xgNFFWXuJoeD5thWPu2esFcMsNjZg1P9uADAGp1CYvTJMwW9yPyMVoh1rPpvRqmunrevu3PEzWCRkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XSXRrazAXaYnaLoDRamJ7it1QumLiM1smGenuVHwvNRzUjxcLS23Z6ThHGAMvuxqEroTnfV2exFW4YEEk4CQuTo",
  "key1": "3V3EHYRXswwrqkrPWr2EKFKiPxFJeuqbR2p5tuhjZZ29P99727kEW2R6jEFWsvbaRmRcJ865Xaj7MH2DSuroecbx",
  "key2": "2oTqFSTtpKPxVaBVkHWaCK9xqByigX3steeydxQWSnGp8snh3nB855oy6P3R3SbFPxj41itNrtur5xs4yATxksZU",
  "key3": "5AUYKXD7m5X9Vju2vTecYw3MiAdt3v6F54riGB5uX3JxYq1C5aLKSeWpd3CbWGbbNAEMYDHJMnJwyHZEzEB7Dr1N",
  "key4": "2Rm4ND8e9o7Axdj6W5Veck4uLbz3tiXQjhwitXsXoKB5MctZDXjzWQgHdAD2PeCGcU2soUTZL8g7rHBiTN54Dw8A",
  "key5": "4VWpiAJSkN3cA8u5yZtzP917ECyQhwoHTnvrZMadhh2oCJeq8v8q419ieRSsCCXMFfPKTnQMQv7iPd7PKpk7f4bc",
  "key6": "4Np3AF8jk4VxWUjrz6wM16YdHGXDhv9soqEoR4F3WLakT3BXCd7taGWoSmBJEM5RgntrqCNNPSAJU18pDVhFs9uP",
  "key7": "3UgtE32p5fpz78EnkJR7JtZxC8CeHEL9NdXCjfPmXHRtrWD5M6ngH5whG66FpcxHyoCxSD1Byd4P93Xc3bH1UgrF",
  "key8": "3XNuZUFcuRpWkxnRrm8MMHvoRnswTYmtx3RmPT2AyTs26GYjj39Z5pXpMmTBRL4QQTEHr6GUURyL2KTach2vyWqS",
  "key9": "58CZpGMgXRkzZekRnBbMLChdh6FZrqjivTpuLkuWsx4gbdD5dLMBRnz71Q6XGGfqTQuCZnbdQjeSUPupC1fNZrmt",
  "key10": "4U7B22LduX4sj8TVq3XTobi57BxDqBr1QUjMa9nKZkfwEPUyjRVEaFGptYUjdmu3oSX1ZzTe1EYk2Z4xnXT6JRKq",
  "key11": "5UBs1nCMKKbF67TiXM7FGiiNGFVveZpncF7CnpYEx9K2dmVhfdzspcFR5mhyZzGqQw1av1GRTJe5vWx4gZuJAGLM",
  "key12": "ETU6kXcsmD5zfWu6XUzk7ZrgkqSC6jZjnUjnQizUpRcw2QdX6grUTYfJeScpEpnpZe5UVWL4iZZEPfhzTePrWgW",
  "key13": "3pV2Rj47s3Di4mrhEugtH2Bv58DEhxoM52kc3Fod4xcozLHsBe8VvNxBSH2aNpW1Y2xFoRokSHdhqrNQVfDMeMe9",
  "key14": "45RtFv1N4Rzf1o6UX154PP5NTpJVve5aCHwUTbSQuoq8zK9MNMgw6sKQXXdGru6wWD4UTDQAvgPVXyaZ3rpUPrGT",
  "key15": "3KAq4cPTr2TmBbUwDhPfAx3HZPGhMDLTfP8Q5rybhSjaC99xw8Z74roZnfJ13NuPraeghM4hY4ghtJ3b2934niH6",
  "key16": "4L4GNhdJUoFzxTBsV66sYJuzCZ5F5PEVs6KJVEVP3kyyEu8sxfbQUwTun2enr7n4EHbp2qWTnHvBmtBep25yiwFN",
  "key17": "4FCza4vc9xVTP9ugmyc6AGjtf2dKccmsf4qZUhwPc18n8S9UseLmP4J1PVux7zegnFNeoUidv3Kme8UVfNdYtDQq",
  "key18": "5ZcPhDESeWfqeBciMKvKrdBxD72pRoADbZSf4HH3V9qmdJveTJYdPefXT8J5J8a8XWxUXmixy8NsijeAiZPCBAvt",
  "key19": "oyYBj6zoebhveP7LkHTRe7Gphn7duZWD98HnuwcbvSnMURocpDCUHNCUP28gGtzNrax79BY45a3J2KX91qCpeVr",
  "key20": "2FJyNwX6fTiGTsig2QBjRqRXYZHWAszGum6kba38rzt79QqV4kCBrStG1Yrk5QNfZzgjnJTPYm3iMxYdUFUTvd5n",
  "key21": "2WxJ8nEEAsRAMVSoFXY6XBYEZtmtn3e3SwH5axZ9hTo3vCENtTCvR4KE1RWdaCEjtoCcg71NoXY9Te3fqTb5axSg",
  "key22": "3UrfMuMtKtMMNkChaaPb3BHoKP1zjtaGcBFF5Eip6kdF1sVDAkrdB4tGFJLrftAr8sZ8gteSTPnQgsMsDWUP87L5",
  "key23": "5fVM7YGq1368qYrHU7yqFu3Z4QFiZqoVrCk7LThM5nxDoqt9Ww2WgWcfzMnPS8ReCUzPHbVevws3UGk6uSXite3a",
  "key24": "329ydGWMUdAS6MM187LUFbYC1MJCBKBrWUh33UkiQHhid27GKgSXDFebdrWYD4CTi3Lf953NAk3bx6sfGrtJM6ah",
  "key25": "4A2V44A468jX8wtjBXaLEpL53HycC6f2XbBEGAJyqezhCf58d2EM1xxdSAVYnFUhrtfj4LcLMsSg3VNifHxs19F9",
  "key26": "5PjcsnKxWv4kNgEFyhcDkdWZLaCahYDpDSziezPJRdNqtkrhTotsFzNSLYLgZKBU4AB4qnhabzn186bFXz5pybMe",
  "key27": "L9GBjh367PD3wWMYA7cQLCbj4mWnpFQgTMNDcViSCEfSWoFraJYF8sZiURM8G6SuYds2TNXHMhijaLELALgPYKf",
  "key28": "5ZSuJmR5M7Avh7TnTWDGcDudUea3k724fTjVbSCWCvfWttS2jpFmjhhJjyZB7L6aoFsSraKfrJSXTKVe7cVVbNM4",
  "key29": "4uSUAqzBSyMF5GUG1oqCUYLVJcL1dCRkQjHcMKhanxGYEqKUC6YNra49U2J45nm3oxGMhMTrMA1uYkpfMEYAtmPG",
  "key30": "3n7rP2pBDEn17afW7DzTQHEEXim1iDxCiqqCzAT1zzoSxEdk8DYziAQa4GhCNyvykEuxiSqYtJnVxYYXbkV6xJRF",
  "key31": "4FAKV4VcjjQZ1wKNfmMizVeiU9Qyvx6iEq44TVrRCs4gr8JFA5CsseLEMCjS6eAZA3pG9Efz8BBfUHQxH9WJpwLt",
  "key32": "U8mi21BfgyCgSd2qE8SVFm9tWtyd1Y3GeafaVBRSDnFwficvz6B1xeCgPBnNR4b7UJwJKEZWuLW15k6knqFH9df",
  "key33": "2XmJFYSxvMWM9andjDaApK2ReZXZsfsoRurSNhzwDZyYGyEyiNsb56E78Fmwo4jmWQ4xbh2nyoKM8jgtp35TWcKr",
  "key34": "5rbpS7cFPbg3DEAFia3R2GSsXmgVZfnrQCyi75kQnHBixuKEUBS2T4uvXs7yuJ574sTCpUqF2g1vozdjhbNnhoaZ",
  "key35": "2MGosbLwmKJusXEbCy6NLupGFS2Vc6kbqoUbCbStRrJ4cXr2wK7KCEjPrB2ditsRZpRB2DfWrmoxDCMV4UKHxmVd",
  "key36": "RR9z34ufgefaKNPRDgT4uN4rW7ZrKbUsxLoZSyugMBemXtQ7tn2vjapktCfvrxx8comxeukV5DdisDZiKGg92jR",
  "key37": "2gJR1KnbvEVHxXqGbVYhxrHFW138WFsEaW1xvqsXwJdzWJwtKJa6K8Jw67gyZHVkdUpdcUdTCtpeqespXNZRWxhT",
  "key38": "36hgTGNcz62iEvekBYhQwEPJvgHytfHaiUUeroTrwadriBomPttbJoD9m8rTfC8C6VGJzyKdwawvWMeY6rNUxR5j",
  "key39": "4VUvJoTgUCnLC8eL93xk3K1CqL5abMeCuV4kVT57T99kbzLoKF7ErXrmnLstWYicCLCTFgpZ9xrg6kfghwSDDDuk",
  "key40": "4LzwwEfJodDtCYHBJTQz8paN5F6S3fzGKuDYFHXaEWkhTLEZxrxCmFCN9cKTzcqKBNpcfXGhZNrVGMjakbQgYnBP",
  "key41": "nyz5EcUJMb3KbPqwpRHQzwt3tPcAx8JzG7A7uDKiLwpKD13KgtJCoaQkmcd5dvmqkUtiFXgwwYp6JUq9zvgouFN",
  "key42": "HGsasL33Vakm7FBQ3d2AdutbNibyEgw9eVopWLocTyHWneDJZCJYW9efevmeUAm7HqAjccwGcNmb8NK4UULR8kh",
  "key43": "3vCnDeBqW8seTaFcwRUrLS61uGBWZVTkDMvds6o1pK58Jk4uskAi8pyjbfcotmwaR5zhhPAmQsvaQivbo11fnRWU",
  "key44": "4dDyYieag3vZxdmfHZcMrVaP4dtynRxu4gLNjKBD2JKTh2jqs3BBN3LHm64XoT2YaMhNsc5A4637W1Pf7cXgXSSw",
  "key45": "4g2htCkiCZa65HSzSRPxRREUqM1ED5jxgrJh5VcAC6wNkUnUWYy9v7yspCtjTFqEJxQzjUGBhGbrjJLPvAzPhu9v",
  "key46": "3BQXTUT4UHRe4d9vi1gRZYqWWz1KpqxjoiBJv6RuFhqt2HG3vPqtyv7BRS7UynfZkZ8X7kPBGbmeFbBZwMihZ6vr",
  "key47": "2AFSUysXSdeoEPAeJAVTwgURhQhSUKbrWgdsQSZdWm5SKSCh3fGm6CLptYN4MEqMsr8Dvcj9VmLNCF87rCFqA3eP",
  "key48": "4GteW3S6prYfKuGuDa3odtYsuemqNavo76fCmuQWX5rsAqoAH2x5JxexUHrM9g5A5a6PADUT68DHVN7dUMYzjcte"
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
