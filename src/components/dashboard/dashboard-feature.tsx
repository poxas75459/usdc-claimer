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
    "66Pzyhn6xzhAcnTWzEQmGE6GQguu6pvAeERPP7vtatL6yAsWbRfYp2W7tRBVkhjKLXT7oqn6H5Xx4fXYewFSq1J5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SQAA9NHz5YVV6bCX84FzoApP19GDTAgYcV5SHPkhxL4adp63kn6CPMT4PFZdAhhc3fSiJoBSvU26HoSk7zyzQp3",
  "key1": "5DmbE5Tw7QEHE8A5w6MbArEAzS4x8eBxS2uF76n4A4JXjUtDb6Q2a8GUXdd4t22NkEB89WdHumLgLMrdaPNHHZhR",
  "key2": "2dAvtajLaJBjjiQTKNbZbKFhbr517DygYRJ73ADwnYj3jJQmmktXGmMwWrbuGYoQTSNc7vqxyNvDCJe6iiqUutW1",
  "key3": "2g6B9G6fmrr8QYQQef3Rh4LuKsJ5AoPPiY3sfT8LDSAkL8HFKPrE1bWRACtvUhAoiFG6V1jztPdy5h8XwBChzQ2L",
  "key4": "hSx4pCcyo59gXh9VSXK7qJ55UFig4hHvyy9114kpARXbaEcznNszQzACwxmZvoUbqpimPjTZ1VD8kjBEE3BhLjb",
  "key5": "25zASZ6ZS7SihHNxc2QWqyvKu6KemSoFPowXoATM3nLVfm443ogQHeiZ5tb4eCM87yXfTKA4njG7BhVxpLGMPMHt",
  "key6": "2dCvo6hKc3rtegHnM85YQcRHkRD1ReEtMa5k9Hh2WoTPqWrKzZiejHFqaPAoDzovyDTKcoVxzfYecfrcNBujoqfE",
  "key7": "65Yyp6tWthrWiHtToQReTULvTSDyBkHBvgj5TJfpu1CCkaC21h7sya6x9EvcpLN1bnLqtcm8d5uEMsGBHrCD9BTS",
  "key8": "4DUnEDXmNRz68dE4EQvKrgHLCXLWniHkiGsZZum6asjSaDhuY7AsEFjAQqDB8CdmNt7BKMN631yForPBVQLkmpya",
  "key9": "2KronT4rD6DrukSpWKFHqRmfMipzGpqgHrxciqqwq2hqvmtWAwHvLHPCfU8HZo2PePHQTB3Z9AYM1KkYSZzMBeR2",
  "key10": "33CZsUePe9KFeARBcKuD5CNQYQg4sCifVRMki7j6oRprZuPBqTZYMeTi7m7MW39LVQTaAZuJLrfRxPp3t5VNgs8U",
  "key11": "zdww2wVP47MyyL6SfHJUCtPyNsgbF3YbZMG6csQbyM7R7LjPL2bPHKpHx2KtBZiPzmUcR9UhaqyBtMV4JEd9jao",
  "key12": "5YaGBfT6XovvjQ1LXZ3szW3iSctQj84Nnt9fEcFK3QL227EdFs71mkWNAP1LYGYuoEfKcPWNhj38EW7dQc6TtDP7",
  "key13": "4UURe5H9dwNAEM5sMWHkaNWDJXQcDiTCz2pP55YgDCSnbjZJJ88QLpRGCPgzF8EVJkKDQFo6V64GWbkGG3kXGe1K",
  "key14": "3UCKeSpwc5JcPqcADDRe4cWhH7iCagZ9FWmaTsSALQNRqHDmsYqHdkvLEWhyNht19AMy13fbYn1uWy2XY7iHk5W6",
  "key15": "3dMxdTHyjHkpntpShzrGU3gE4GV2RbZ9rdkJzmTLV2iyoeBM8Ut8v1rwz8dV4k2VoQwVDSbhBiLd95uq5WSWTyPf",
  "key16": "2PXWxFE8SfiscTB3QQ6kQVaEEjcB6pjkbo3KX6VcFHWqLetajEDNVzujToy26cE2Xbd2ui4Hy5cK2UB7MxeimEZH",
  "key17": "2qZPp29hTukcTZHgJfTrexwwiPU9iWbVFX5RcEdMiKFYBFF3kXJyLfip7phPE9eFZRvFc3kVhEKSiVvACQR5i4pJ",
  "key18": "JKw5XQmQdH2NaC56kdo8mM3dGA25Jq2VqqJ1WkgajkfuWjuDgMW84s93NsxiG3vRhLGpDM92snTMdgzfonKTBqD",
  "key19": "4GKqgpS4rWNukUBe5verjFdhcrVroGFDbnfMcVhKY8T6Agwke7pig37GZwziJK4aWFxJDC9ur2qrQ71EdJgwWLp1",
  "key20": "hz7X41qJsebCcHKY7gjDVZVqrXonMLmepVa74T3smaksz21rHTcivBNdq5mC44YqwTBzKYQeKyDcK1w3x1kLbtw",
  "key21": "54aSX95H1fABSDZcRaZ6bs6eu81Wa4yTiQR3FyFSHTrZqe9Y745matcaPeXThrJYRpi2ZDsQPFS2nFqfULSdoREo",
  "key22": "4PPgwo1Ty6SvR5ougDAYTvWrFoM1UrcpV3DM5Bw7msNYouNmMf1E4Kh4LBGLJQuCJpLdY39WHzHiQ8a5BEJbL4Df",
  "key23": "2Fw7Mxis3jhCTsiMbayDuQzNw1pwxb2YFcUdAEe3G3eVxCLgCRcLR3hN31EMBkKbA3cBvo9cSgKdWhUf3MowS9Ey",
  "key24": "4oyS3Yysm5mxcWtF13ax37ZqKqVHbZi2QnTnhvv9aAeoRNJhfHHbJF6vDYYnUntPLMTE4aNEEuDVy7rwjUixkuny",
  "key25": "3eJMNe75WcBKBg3VsVTcATU8Zu8KpP4abQhjJyiXEdXcLseut5j4rWdZVXui1NmztWUna6UaLpXFKDeSyjJoNBUY",
  "key26": "5buNv2Ha8VqvAE16SuJzY8wdm9Tp4pPGbbuNGCgFn7DDKGvC2hKWn9k5XJhB9J2xVFfFrRxvTgzoGgyowWFbFKeE",
  "key27": "5NeHNxgTEnvr97XL5Q7fYjWbwpL1X2f5GpZkZMyU3ZBj5Zeic6RT4PjCjj2Bgos2tf1jKJN9FYDMR3CXLFaGsKt2",
  "key28": "BXi6isMGhnYjYr4YudEkB5CFmfcu6sfY2xH7g88R1tJDJgMyFipmgR2CK3t1QNAPJbtLdVPf3ESfVfP6o77wTSh",
  "key29": "bSUyDAeqXJRRfL7knjcHKUiomipkBYbbFbEh9rSR6GcDqWKVgMe8nBrezCGRGu9Za1T9FDE8x7xGUqggWvMRj5T",
  "key30": "3FiYJmjFC1QGdJFNRw5zNAkdQ3pNZAKzRFdP9jo5s2xe6HYctjBLvk2SGQVr1eRMaPjuuSfe54V5PH1FLJTWrgMq",
  "key31": "hd4WZTNaxchwnoGH9ZrvsBhDVkhPm2hmXtkqE4ohk8EXkETj2kKqiqjfHaZZTr8EuRyw8jeqoGErAsWwVTombu1",
  "key32": "3NBj3dX7qpc2Cc39HvXmeBQ4enQUhersrfrvLgEEeubjdQ8LHSynn9sSkqhcDbCwKJSKQNSHvoft78NLSMEHRyZe",
  "key33": "VGEBiP5wm3h9a75CfuJCC1r2aqvUAWaXY2WhPqksEPjZZpv1Vt4ZsLWuzpaWGWgh5vMU2YC6RjdhLtDsEjmkLRX",
  "key34": "3nUwhXrAmJSK9YNsPm8QBdy9SCydGeJaK1GYMT8rQ3V9SrqAg3s3qD64dp55gSUAc6StRJwrG84uh2zF49Ety4ov",
  "key35": "5ib657vcLRdZAAuxLd1TwZohLrTApUUcicrni1VHGJ33qGR5dJNVAA77r19f8fsu8pAkBxBMjsdYmxeMuh2y69y",
  "key36": "4bQjHQFtfe1rnBzijdcuyEPffJztjoXWDPaRtggA1dwcRQaL6G5uJUEkwjLdPopzCeazcWtEo397vuyuXSRmA6sg",
  "key37": "3ubWfuM3fYW3ULBAPXvXhgU4tK4ceLdckjvR9GxVsWrUFkuFzFfnbh6tkqx5whC7DDywS3wHxfEbDe57gUojZnVW",
  "key38": "511FUE4qjrCoWygzBxG7F1hhCV7FaBwMH2vbuJk5QPJcsFVZSyaLXBgUYs5etscJE3nJ2beEmy3cKKEbz1omWmKn",
  "key39": "4nvNxT9qfQfpZ43shSNvHMdwcLE4DZYN4msBzA4d2ReCvDAYAoqQYAX8MA4JR4w6CrrckRMLmvzRfzuBmSX3DMpB",
  "key40": "3CMqrFBxMSxNbQrCnzAGgYhjvGfErsVLECgxTfLR82W1eEpeTrfANmKyxE1kq9E2KhEADdrbu4qpLMzqQXyhEpGy",
  "key41": "4td4CC3scv3zAwM4ZWK8FCGQWEr2YqFrX8u8Bds6Ychd9yLdgKUiNDqhfBLzXN8ciAaNE2oYEze6f6BwefaHWHv8"
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
