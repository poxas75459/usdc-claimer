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
    "5viWt4DyFfb95Zy1SAAnRjmgMzMLm79NK5fTeBnKwJ5Awt4vargdrUouwA7t5DbJtgYEgGTbxwCX2sKWcppaWeu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NMMc1NWJsqopot8bdRNdanjD7yZmVKcAUQNXZ9pGBmGLdZJEzGqdcyJevnUdQ4zsckxSwXoqLUFBWkiDVyK3cVJ",
  "key1": "26bFrHkKoqWp1gRpvmD66EmwreEdpHSvrMXCr6LNQw2eE9omgSmc496QnvRYyGfrRHaAy9mrnZV8zw9po5gsACCj",
  "key2": "5GcXJendg2B7bWh6PuiG3ZAYMKbskm4DxH9PbFfjLbsmPDa4PECCrV4XHdabn1m6DMfkpQsKVPf44guK6yvy95MV",
  "key3": "3LSQyN6DZ8FXj3vKFzHyN8hncxCndMup7Qn6RfmCHK7fSt3DuYfP3NmPcJGsgxKkwRXgsRQxmwwAEx2jDddN4jBQ",
  "key4": "4FZGiLnWbrZwCP3Zjgho4xGDbsXPZPmPYPywba4qLc9thkZScCDsWYMY1EBvTMiwmT42odeBV1RUp3VLMQ3kHFtt",
  "key5": "4JEQb7JH7Dtiaoi9UvFyC4pud9YvAj79QNvuvyuhQbePdp9xgD6wwiFwYioZWdsvKC1RSjuq6pRQuky5kjBUycGr",
  "key6": "4ZRrdntMnZEPxskDBvqzK5nmhSZE2AYWnYpVw3q5qRs7wDh26XscrBrwUbTMQSrDKJQ15n3cVaJrpMGV4uqCWWRy",
  "key7": "25K2463RRCebxxzoopN5T8veJba3jyE1TovWjZsv8NMaH3wSvpER3rvqyDsTQUDnBgHuujqskgfXwFp1YAhMKg7d",
  "key8": "3GDEyVQTv65S1S7avACuk4HCV99U6zgUXQzZDNveXnxTD6z5GLrVz4NTH3mpiPBmk7Q621PA9DJbRfyq9VJhYBoR",
  "key9": "5jWu3D1vwKMJT2jR9n1EjVJi4p2DxUs5zPgL58Qojr5g2BevK8QqVdqyqSErMxcrzPcb1mRcuCGcemSsBbDS7uVh",
  "key10": "49iosKG4yZ5FtGnkd1HCCS4ejVr4N1DmiEJ29D1fmTBxsxAATTSApSqybXa6WWZT7J5p4tP9Y1uBVEHFYjSM2WKp",
  "key11": "5PwRPGzE4h7yJHdzRzEVdyarEADZdCqM2rqDn5i42XCt8YPEVLuk9HyKF6HPAcFDPS6z9zrHb9oyT1249JfkRL1q",
  "key12": "3EhiifRfa1E475XNuKP5xAABUEKt1bLZh1PJ1ty8MQvPpYqoSFvGJKpaiJo2eJJ1Nc6zrqdKJb21ssT25c4cNm4M",
  "key13": "2qowrgqNXt7cgSWawd46ktW5dxNYUEXpT5qdh5oZ3eCWphAvEJCPSCyY7dy2K4Xtw7CBLYtD8VxxUyamX4Z63CxG",
  "key14": "79yBazs55DhuUVPp7FuMqKknZxYZrUo2DNARDPrXAi4EzcPjDCcEbmtMkR9sq7eTimUQKDtiaXWnZGMKnE6Hfkf",
  "key15": "21dudzvLUVcFpP4uAmje4dQgXpQBEvUnuYeq1nruESwXKrvkZJC1sBfW8JNJeL9s7XHShLR4vg4NcZBJH8VoaQ7D",
  "key16": "58trmPSzYzEPqVnVK3ThNb3ArTXtxZDyPxaDacJcx9sm94Ze4sviKdVEsBWdj8Vawf2CgoZJb9amuxD3fbJtEQHF",
  "key17": "4Vb1weHQCLDsk3u3podPYULsKRomJnWyUNgmVi9kembQpnfsDfKJSZVhbJQgxtHBHCwxeiAmfkzfEBJi8cX3bGXd",
  "key18": "3fjPHNQkx1Khn4chQxU5PfLLNiiHN2RtkZiw4wnhUQosELfnKxn6qfojDuV6t2PfVVFD6zhEvA94CE189qPzMxN8",
  "key19": "2NcWzo5mQHEL8RHUjxFtdiMmUJujjysrHf66Gdzy4LkARgRKHeMQqcaX2tvCEJiwq4x9PqT2WXh8X8QLYvhaJWKQ",
  "key20": "5pSfwc6zMnQrZx1caxPyY2dCF1jFrW3iNL48T3gzZSyp5MzAZAhPR7HaYAqpp5YSL7pHF9zyFYGTgEoEJYZieofy",
  "key21": "4vM1vJafSdhhse5EZfG3ZfzMCVsnyweVmn8kAghT7ZjKSUQQ4r5E9PCoS49mHEaDGZqKq9WmY6YTnbzkBKiwQMCF",
  "key22": "4b2fr6uHURe3Czi5Dc81YdPyCVRmsq1VbKGUTuP4UTKio2uSY1dziokjEkZGYNRtsyWkoh2umd9sw1wTYynDH8Nz",
  "key23": "3A1449sBHGL6z8MsEwf8sM6GMVPsJ7P1yWBUuow1bsGvEmewz8QXDaaWRNuhvaBYPfa6BawqK6VD8DMsHzJ79iFx",
  "key24": "4tHxyBTvimyKjPhVefdc4np9qRa4K8nU9mN1e4FWMhSgajAzLUBqMHkx1B7Fpy2AK6hAYpMG1ozgrxwCFnwzTueK",
  "key25": "5cLux9e2Ro8B1B79UZAfi9raSnytV3aRQbwAwg69Q2UgxiNHciYNwKDiRAtL56yWgFKpVRbVD7nXMazxqLxrEtUi",
  "key26": "2v2UEEtP42hzHPm2gyASdp2J11h5La9Nxnt7FWaCfpPy9Pz3w6kKAr3qir27Kns66XhVJvavWTLdhAAvGr3sH1bL",
  "key27": "Wb68b8wzUFk8XazzvaLsojA23zFSZ4VRi8RdEThn5SuEoGW6euWdLeLXAZRv1UxZupXnFNzNg4Kw6G7yekP6pft",
  "key28": "53UTUB5ZtD6327daCshmKDhCrH6uJLj4d8ugaCFVsLfeDK9rDTuGDdUjpBWn6BDPtJW7FeNCdaGfUZWALxhNpf5z",
  "key29": "PNBY2DoeD4pU5F4WfWZ6DsGfwE4y2Uku2cAQ25sBAAyRTWGegkkL2RaKriTH1iXnbip5Y4q2mTitKuY6eubptgh",
  "key30": "nqfRZrtZp2wbWJgg21JE3f2YA8LyabgH6jUagiwRr2Ky8hCdxAUs4w2quBYg81FgPmb8ZEPucHnW75ncFL8HBdJ",
  "key31": "7WHxhes1zQw9VohTUzbJzUVW7J8AQsD8toG8ANRLwPiT6db4yPxnwxQJZFAe2j7qRoimigiRkaiSqLj29qRnF3p",
  "key32": "3Hr4iRujVGe2ph7rfM42GHbwfKqJaRbC7PQ9GDAaRjKv6fZfANuwmi78bp1c4iyi8deRV1JFBnLuZHuMCccVrB6f",
  "key33": "2x3ihzFVV2wPRhKPSr7BozbFMBCcepFfm2T4ALEMJspUpZQKxDMU597yh6drBTSF6XYQNPjuBNwgud9YVnVdUifu",
  "key34": "4cxExahyMquBYDsxEhMF1u9ukdA1FbRjnNgnvsLgEaXeZobx9KMt1brSefQxytcnf6rrEYUvADipYLiKrzX5S2kh",
  "key35": "jF4pfmqvrxKbcxzVDMioqPEjW5zeVAokeWj2nBETARNVZimtNXUfVKXnAyMutZsQhEkNzhELZyTgU1r6T4PWVxu",
  "key36": "wR11Ybb6iRGh7UGsmc6tpPHFSuk4DDoioKc9Nur11RXtp4iQjCcCapEqjxT4NfMh6JRdT16X6z9U4utYCNbziUa",
  "key37": "4kqVwSPv1UsnsJfeKvXVnBubiGHmWBW39xjvKdY9PWcGeiDXbhHkwbSNqk9cYbrJhfc3ozEtsh7Fywj36gYwzpDn",
  "key38": "Pq3y23fs6HZAkTP7FTExG62iMMXbDwckVz7LixAt3JTrmohwBZneVm5EvQWTgi4mYL5JeProgm4Dnir5irCLGDb",
  "key39": "3r9e3KL712zEGmhqrfcjRvf7dKgLuPkGDR3GMMY4oruUeSbezBnhCcV2uNxTxp1Lj4WU4WSg7oCCZKYuRDUS7Ypw",
  "key40": "3HmnVCcviZ6XQfXcE8bMnAZgFqC8WSiXSRYnwHE3NVE9pmBNFdo3ZEj8U6WzVeESpGZvz3xcS8ps6kV5dW9grFfi"
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
