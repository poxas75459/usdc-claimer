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
    "5cDTq1CZvAthaEKJmoq59ghdFHJshAkb7Wn31y9rBHt7Wo2jM5emfCrJM8Toscbs3yF8ubzogQDPSeVAciFARc9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DdhyezhAU8fiTC1rEybEs8yyZXJ9dY1GR25hNWi1fqUdjyPDWPfCTtYi4PsbJdVBZ6PvJwvvkZ1f48bE7niUqWG",
  "key1": "2NzVktQWnS8bv5wDmWYyWBvRjJagXmrwjCMmhRC47raeSVe3t8AeNGe6mWsJTHLohasEGC5bRyVPBoj3caeg1DVz",
  "key2": "32axhLbcVvokGgsUTnHcHGXNYso7f71ze6FoeZZ2XkUKcKJwJUwqZ7nsKaha6FERdb9pToriE2jycfvWbmD8sZXW",
  "key3": "5sz22dL8dj9QLUH4WTUXUDAsVWzSHJsskCU7dtudpcU5zEHSu15x364gvPf2BWxjk73MMJmqBL9UeuuJN5RQvdY8",
  "key4": "5xp6VC3y2bKrbbb3tkSYM3WYnFBSgYjbUemMqiHvLqVtknpwy24bFwuuvozZfpRJpUrgS6Q6oktpSSRRUP6WwMVa",
  "key5": "2JYmAGzW48v6fH4bC44dNM3UbxV4fkiz9aNaFTmfFAec2ctUPepSoG4GHTRdeNm95ku4Lg8LcRoq5fkczSQd3saB",
  "key6": "qVPCvsGh7L57H1kdWKw3GtYQHmMP6S9pMmyDhnZpNHNotXjGc9Cd6yQgMxZe3CeBppaVzPJw2PXoeez5q1pbLom",
  "key7": "3vPPPiwqJc8xNmeiLfJkG2TvYv4aYjspQ3tPombLbH5EKgCeSa34tDcUiQrp36JRp7L4ugX2YRWdXxwqpCVYTBwh",
  "key8": "34gisQZkSQuMqWN1WdWkgA3Xf2MUdk8gQcbeT8X9yjGhveech2LoFAgRgay5aUcNNrejFRMsbVFJbeyr9jUoAJRr",
  "key9": "2SpvCuLM6DkfCicnXC6VF5HxypFhmgK3cLm39VDp99miy29CRHTjZJFC8PgRLe6HLpGi7pxiJUuLdu7RoT3j1BJ",
  "key10": "63ZafQG1xZdLPxSUrnf6z588UUmZHc8m6vF8CfNJCbfRPBsdRM2PndMfoMMjZ36wdobaUiggjKbpQfW16dYKx2po",
  "key11": "3QGW9Qh56Mum7sdwD86VQZz42qCqNeGJUP7VrKBMc1fSSZHaMXW1FRmpzabxoQxVfzAiUeChBbaJL5soF7jgM6gN",
  "key12": "4eHJHLsYs7QFAxpJac1f7U8ZdP2fpeWMct3EjaF2S1vHuvsL68vyod6XzJ7vAdNzCYTq6zNTSvzomiHZRfmWZvRQ",
  "key13": "29UEbtGrqUi19KLsjCLMU83dZPYSsbXxY77rdRHNTiPxoWdAp84A5qmkYdqvJagS7NLSEx62jzRJ9K3bT3ocBmNL",
  "key14": "5rmi7vwLVPa5Cw5ZGsgdTz7uMAfXPwoaEBxynrSadRsd2rDsFCKicyExmKMSuqismC8Jx8MWaaeEwUcR53GqEjHi",
  "key15": "4PV6X2EPfFgcBTJf6vaWQGfEUCVdkbv79CubLsepmUQLzSrUKuqJsr2XSFwFUeVnBsFUC6fMdp5jPp7YgNfGuqBE",
  "key16": "2VJ5XSfBBvZNUAHPvR3ZRv2WLZ72Q5syKdKy4aajvh4rzAQLJ5QaLh9Pf3RHBL5agsgwj1hqZ9LupcY6crEQ45ZQ",
  "key17": "24am7TokuV85x3UPbNGq13bVfRdCf4uVFJr1asLciTqCvqKwZfCXXEbwLLo4zQYPiXwv4nP22yuv2sJj1K2yH6dj",
  "key18": "43VmjJiEzHX8s23YgqVPKWTuzoMHMpSxsbZF7XRkXnpi2NCbNy3LDBoGuKhK3pDiTH6EHByTqv3rbDBKjkARrPY9",
  "key19": "51BrALfJrC7ioqtHsbwc9MVDouJ3m2fihrurgKjh55SqWs1jsiLPBNV9E9Z1ooVRtLxXubrcrx18Q4BEh5orWLno",
  "key20": "5akAS5nbD242DU5KiXagACyjJx5uowUkh1G9mLyvCpx1QTEkLZK131AZGsg3LM2qjVKkY4Bzexirn2CT2ef4ZLzM",
  "key21": "WanrSYio4vyop5nVZZYNymPT9A919tzTfpSJkDd9pMXGMcpEfiMEP7K74HrZhdyBQEC6zkgNdVWhwUdQZ9uZa1V",
  "key22": "5CmBxKEPx2E9enKCp6gA7LQsKFwBmifKYvP14AUHKVR4dg7iVAQGmjFseTHS7GNBXqM9e8ppRMBL34BT36uZ6jiu",
  "key23": "e5RHFaaUVLGpFbezhGTk7UaUxPD7w5evWgH2spMTKmnC1nJhr2ziqUeqxGhUwskE4CZ7JxVx7waJeixDoPqxy5v",
  "key24": "34BoJrzNbceX8Yjm5ByzzQXexTbQCcTFzcbYF8aNDhs84ized3n4DYoYBHpLxFBV7HPj3e3hpHq3VxoSnK9eJy9y",
  "key25": "HkQP9STYMveezjuiVjAY8XMC61KyNJsZjfJbm9qqUjGEdedpR8wsiFrtA3WBACdjvLqhT4ZMuUoTCm2n9CYRXu5",
  "key26": "24YAuczH1ndsLWBjHjaWdJ7Rks3iuYa98xVmCSnXKK4SDTwGifT33JRTLQya5PVc2i1dBRMME5ToZLmBcCE2CtAz",
  "key27": "353EpXQLDSaLTjGgnyWeYDdrMRyAKBStuaCUnHd8bvsvzUfYte3eVCBhu7AiRZ11xF7KfM8rYjSnqKKu6evtpsjJ",
  "key28": "5hGfxRwDHe1xUeEMP2Kk6QdobEKA9fWkF48CwzBEgocX282pf7X2aqH84hsZHG2AxUwNqKsf7MQ4bZiZeuqoGpyM",
  "key29": "2VF9p3s5fWoj2zh95Dr2TRVozhCMctEVKeY2F7b3pFMdXxzc3U8tMiwV9aHuAkzaDfVMVP5icmPb53hdbapmtfQW",
  "key30": "5PAYD7ByUVKbk3WTWYmCh3pk1fALBgUpMBsTMN41hQvCgmnu3bxSCoo25zqLRtQGR3tyj4Dk6FfEUwnCA7tFa2gT",
  "key31": "5yW43SvfEgUDuiMLNPx6Bxii1Yh2L9HND3CtpdsBoUDMw5F7Q8XdUkC4VYrG25pyFWXXqrxyCKiPL5Rnqxygotpa",
  "key32": "2Dcq3PkmEF9tapAbhZLFtz4FFHWotjKn1ngfGAgtyFdFNRANesgyNHbpcLVBBCmdgdk1ZW95T4K2VX5BSoEeKdBf",
  "key33": "5vH9Yo9wBqZKKTBWPtWwikbKDN3RPuCqarBuXV5jDkWsq1yw9117si1uenfnrdaETjrLHX8xyJVhaAXigUNpvMJf"
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
