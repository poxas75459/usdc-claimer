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
    "3qQVHmhYDAcBxuQFgkvLu7QBUxGhQYShshoNafSV9tUw9LUCrngFCFrerKA6GsX88XcqfmTrGT1SzdfR2SNmEu26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T9SpxoBvj8HiayPUEzTrc2Rcid3uYmKJ4mYPi2chqEENrHVugonHeY3ahqt1tYSmGQm2qKnFWEHWg6UzVSkTtfr",
  "key1": "54EQanbHVvDZNx4ues9J6krTzrJgwJAxY5fjdbgpHFHiULpmf1LQk65AjnWpJpbsavRSaGrJyntcuJD7urYsmh3V",
  "key2": "tvKYathjWGwHWbfJpFr7no5nBPf6Hcd8NA2qzCLACLweQjTPqoZFXVjf4eVaFnedVeyL6aEsYtf2jwCzwCXifBZ",
  "key3": "43pWvmBaG3iPABHfE9XMZj1yqdFb7BBAvSHheyDHcUdEbmY4opmBA7SFTEdan9udfooLmQntxVtKsZJKQ2Mt3AXr",
  "key4": "3JxzriBbbsUK8P9f3MocHykSJquj13eyUya8aii7LEtPdp69mCPMtnF2ptJTwpiRpkyzQ1WfKUpH9QYWCotZdeHi",
  "key5": "3fxhxWXmvpW2JrJZ8okF2CSayrs22zpCmMUxKJgbntz1TKXZbBSsWEqK5HS4Q2NdVhjuqgVNMmww7Cq7q19HfM8t",
  "key6": "61LYj29o2UkMaif7D5QRmT1iXrSzsmgGvWt7SmHk3YJx8R8BeybG3tD5JtknP5g4Ra6BwHqf2gKLBxjjeHL4bjEe",
  "key7": "Qmxwy7Hbf3A4xC2jp3Gsmuw8tAXvT7xL1Rb7hs877KNawSuBZKVYBG4nT9Fbjpmr4QtZ9T2ReFidpSLGerHu1Hj",
  "key8": "eFNrGZvKf5RDChppD6GkYUq5M4eoNGJsXYmCGLGnZCQK7bZR4GDWJ3o3JbgY9gKzyH9SspneW41RMFuoqp2Gcdi",
  "key9": "4cqBtCK1y7AwQnZdC9SfpPjZSnvp2i6SXbmnKXdS2A4xmaEAxXENuWsujTjfcqPZUpNZipDyrzGYx2vyewfghdYg",
  "key10": "3Y4prgm68TXVpidgFb5BCpfdgTb5NovoQ58Ttm6RmSFurL3qfRgrZmNUN6rdeuJyn3a6CprfXuTydvf9azGcYirE",
  "key11": "5DG5MozdriTmpdDgswoTWq3sP2mv9hiNdpbexwZWpi6W8amQwfMB7p3NgoavpuvHniGfNFVPMtVMwy6pNSceaAzp",
  "key12": "GvqB26s4Jmf3jKKNTkkza7AbzPQHjK3a8bWXY7MzWC9tnJCvw93znVdNGHZuZ2mkxDEdq2qwUk8fZF8kZiQ7XU3",
  "key13": "5yuPTktsbT1jH3dfK85d9y6KgKi1QVawoN8tr1mNrWCu8nGRSuXvPgVaRst5N4tFzhz3G2A1zaf2vg8jbwuLPDeF",
  "key14": "55paRy16KMhZgBgbimK9sJN8J5ZxP7PyXzDEMYCCmM5JsstEaWJCJCThybV48JEi1TyBBXc7DrDsbAPDtxfyDuvH",
  "key15": "4HMb4qT55Y1X6pj3JZ6A7MJBfYnSxBxdGjywH91vcwRqNgfmFyaf7sCkesYMP7bx6TPxFufkCvvMe9uKLw555Bkv",
  "key16": "UBUHcbkVEAjo4rhNAdfFoqV11ofgsDf9vQMLJ4pRzKkWz7HftXGxvGt1hpNmhQDK3d3ioXyfY99DDAQb79F8JCn",
  "key17": "2Q8RmaWbQNkHpUpXz1WFqds6JGkQVBEDE9zmMeVEjtpTXuB9erRAMqDRn9xJrbD83ZsRPBGYULVDmanZyWpgV1k2",
  "key18": "2YpLzH6opTH2ksQcfjaC2WZ6TGxEpLp8hrLZmJUYEtKxFgbp4ERRN88VUPmAQSpmg9CFXaqzBaKCacyvujVvDqbo",
  "key19": "mJJaqzQ1XGC64KHhhLnAPXC9jNCxAC4iTNnoXpDuzXSdTPgzbU3q829b7aD5sVcxUzSBxRq693QNbswP5NpZrsn",
  "key20": "MDW8Qu5XezV7TteJr9hi6gC94CKH6cAxXKygn93xZjvBAH8Pnjkq6G1UYMkCx1U1JtzuoVp6jJYf4ZeQCjxfkhA",
  "key21": "H9aBdpmXQdn6sad111TYfHzg2x5BzSbtZsHdihv1B7cDqXpqgThiGavrZBgUyZ4MTNHeQRieqQCCS2cuL1tvYAc",
  "key22": "5CDoFRGTweFLiT4uAkN6hf21kYbuCjyTvEYUxdxhRSNSsNddVuci3mwRteUQsgqpnUxaNXseL8uc6GXy92534HJ",
  "key23": "3NJeT1uEfLht6XWpmCcuaiMvfvqvvpNkaVRn519pWHM6mes8H3d4QQbTZpmCAyRnciYSVCaR3EggQFmuUKVPNNCZ",
  "key24": "4MR3yjx3cQ2diWsSmJYkihtWWTivc82iaqNaZcmiWyS5dSfLsRUWLPUcKMzwJunW4zgqCVNM6s4wPmcy6CZquPtL",
  "key25": "5nvBaLvQy9eUKc4CThNt5M984euvxmLRvBED7QaZvXRFp4o9EGkdKfwQWtGH4PbR88ZeqEzjid7XsnR3p7Lksp4Y",
  "key26": "PRHoTBZuy9Au9iLJT7b4uNX1tL9tmFW7RePokwf8f4J2dGXTgApYr5RmBnSLFUoPfbMyw71Vapvu6A2sjqs2uhe",
  "key27": "4io8wPdUeaqN7P6jrAEFVoXNo4XtJAXfiCyGNE7MaP1CEJcfRyAV64ZE1KmBAz2azqqtt83MLPtEvzCFqh8gmEyy",
  "key28": "4e1yewP9YQPM4WVCZBmQm7rqmfWawTVfSzFKcKgoKz7JfedEixu32Stub88SBTPLDnvZdB4inLaWkLwssBAi2zqC",
  "key29": "4KrzoMFn2odmhj96eoEVTa172CBRezETSgGqT8sKom3x5rRBENdxmBKyNe6CybCYckiP9sZEdKvq1rWqgjzmSejQ",
  "key30": "4NfhfBHtUosAYkoGdJBLexJKToRput6fuar7rPse5tgrBnatDB8SSuAzfmv9D4o2w5vTUn4jcrsUmTeuzrL82p3S",
  "key31": "5H2vY6mmnE5Z48AmtcyEBpjzd2uFa39aYZqPuADn1zBzLeoea6Liqam1PAz1ebJYTPJnHLXkQzS7wofESwZekNoA",
  "key32": "51FXbdonY4Us8okRpd9tpXYAfGYZhpAxweocMo5vjcR2eugn5MpGUcb7u2hVaE5oSk7FVZXh4NxSzvQGfYfubR9z",
  "key33": "2tFGjmMtu1zeqtZnfGK9tViPanJhCCHwTnA9JVeWPfh7CYRhcGmi2njsuPWQwXyinpw5pTCypDSn36pXjo9ubPLW",
  "key34": "AmRwseasg7uvbYbUVhJpNAGAVZceiG8pz4VkCA5Y7Q9BxVwi9aocwizmDbWdg12KB2vChPdkdm8a7Qg5Skf6A5H",
  "key35": "45j2kek8RExs6LpESvWTpCt5NYs8nWCLPrnAbSK46p5MbxccZQV8QGijz6SNe5EWVxzRPWfmSiZcDdYV2Ni7JRCy"
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
