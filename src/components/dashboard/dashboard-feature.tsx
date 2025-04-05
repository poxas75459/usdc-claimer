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
    "5NUGdfarqnQv5vmCYc7cKjTvEPbUQNAKZwqMDY3Uh3KWKeG12wAHbijpJjcjKc9AMBrVaBy124cY4tHedoGaHGc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AhpQty52uDvCECHyjCWD5C5CTsCEMZ8fpHqbbDCLionrGcs7jNhsYPGQaJbKnZJ8XUfn9S4sRUf6zqzwETGaD6L",
  "key1": "3qV2c1nJqrfJfQZKkUabK14jjpr9XgaLP3N3Ku2uAadRp5mepDs6jzTgCtqFsERUxJ4Vbraw3Nn1EinHbySck2vN",
  "key2": "4tPdop53UecGMrM32epAnmuJ8CgCYcoL125Aig3z3soALqCM3wVr5ogzhGuaDP8t3BLViQAyg1Z8FebXUJ2sR3MS",
  "key3": "4AeCrccoyFb2eB3q31kBihG8TJsyrzsWT9S67iymCXfsQyF816pkxqXP84z3GofbR4g1uVbo2FB4CXaTBAQqg4xx",
  "key4": "5dzSyBcGfD99TE3Az9GWUxThF6mxh5nz2KzLaDJT3k4mBatvjpXYaVudoLkeGnRMcq8B6mYaKxDoR6sHFis9DEsD",
  "key5": "2L6s3Ber1VG5WzJdAZJcEmuJusdcNNJwrSTRwRJn3hdpTf9MAcWTcMYoxDPHpXNtR3cauwKNUs7pFeGEFXRtVHC5",
  "key6": "cVfihB9vFaSLHiJJTybjF5mtuRLCeWkUh4AwDpS87SANL5P1B6v22cx8gzUnp455KbpR6cv4w3naYJxpDfzJXWM",
  "key7": "2k37FFKSkvU6LxBdSQkNniepTQeGovT29oAUyLXT6oeXJySHvMp4N5SLhuDqXc7kngshcf7sUeiuD77u1CKMehPw",
  "key8": "4NvLohEhYPf2EiLCBHHSWjxYiVE78DwN3HKPfc4W8fP8Hvq4Lwb4st3m3fmXdfvd4B2wvxLkxGGtiXyve7P3Rp45",
  "key9": "5ecNAwQhaPMM24SPPciGLxKpYi3Vri7JrtK15XL7KEgFXqAg3hUJBHagkKoFAQACaxS92vibPYgTPRuJdk4aeHX3",
  "key10": "2WNiVSH3XW3UKU1EyECXkMUnqNBSqA2Dofi1jjA8Y4nE8HUEwyH5CRB5gnZPQhRAviRDttW5CL2uYEHQupxztH43",
  "key11": "57r4EyF1L7W6ejTx7yq4vjg4PPEFKurMzDMszhcL9PJg7KpT6pt1sd2vXFpwYoagsytCXcJerA3R4htPNu4QdWtL",
  "key12": "4YowXw5DuAXrazBCKLTSHVfMeMHvg3zFvnpGkwT7mono1nB4yhPppNz15nWvz61EeDFQo5oj6eQSDhXieUEQdP29",
  "key13": "3qsAcymY25GHVJ1Mehnei12NuguLbvhcwrbXYMtQCbqwqDfqXcxWJTw1g7bV7pHTBGRxbpALRzBrTpTKGTkkJv47",
  "key14": "5yrBkGPMozm8c77CdxYcEwvaiUHBmuSshe6BuCHVCZjRkPs6hxSQ2pDsbDuhmKX2nHM2V1it92mxFH2mNMAiKHoW",
  "key15": "4WF7uaSgpZpJZ3JTZiXAQd1Ey6amT6yRXMQ9JRDfdr9yDZXr6pzmQJB27cYMz6CsgrQeTznedPKQy457n1HoT8sv",
  "key16": "66guF6P32CAiQ6XNV5LkVre9WdCcazNxQFxQkPW7okpt4RUm5P6kGugbQuJ74KE9NKFxEjmS6tYvhoBt4DXHjxEh",
  "key17": "4XDQyj7KNQ3918e1RAPdkBFJciaNFLqmFKkwsqZLMuHq6RfU8a2GLQHsXztKZJbB8NLg2VkddhFKtQzubi3pVNkj",
  "key18": "3nRBdbG9e3Buj2zo2wxLoPmB3fPSn7T7Kfitoxez7mz8pj95p3YLHx8scyrTdW8SnCfKAHziN6Xs5LrHw72WMxdN",
  "key19": "3m8zq941fGqjfBBKcidk2DxAMUb5B7PWhoqMv1Vy1Z3VP9NMUu5GtLzLUfz7iz3gYwqRQtGgpncz73aXHd9xG3x9",
  "key20": "bT2wxZCAr7nbMDPtykf2LHKdY3oJG29E9CYv2RZ9qg6GRtrFRucQxhstxx3HHq8Bdr6SC7X5nzCWL8KESeWrzEd",
  "key21": "3PLn6SkjajVpFv16PbVXeejrG95WMBgZiwKizuhxLPTBocVCGWLyrfyyUtQGC5Zwuo6x7huDDMb9gpEtdyuoxZzp",
  "key22": "3oFJVRZLQfxy1uEQVdvrKuCnHtV12F65NizEKbnBNGHw6G47AYD5S69wUUYvPH5v6PZqbu9gZ85RciucHARE4uap",
  "key23": "4n9XjRacXemJMAUcjsN7JS48vTRaGDHUBQLdk2AHaT5Skwrq5y1aomLF8xuGbYB7dY6KmbLCjT3kgUgzAoqQWKsp",
  "key24": "3Kr1QdRUXHFBzRFGiwq2VzkBVsqDAetttGHNQiaeawzH8C6YX2qtomeQQg2pgnsNiS6hkKSob2iTd29EMp1NnJRL",
  "key25": "Y68PmmMJFgbfec8aPFTfxtxpCQRrg3yQeQvXm1uurRW1BTwJDQXennuMdHmNTKEKNQmyoVXfFF3aThwwzfFryhR",
  "key26": "44YKhyhbHD3EF41GroHSNnRr26dQ6vd1KNJudbx6QXi9maJ98iJPgJ4fDzobsWQ6SKPm48ei4kpV6SK5T5bLjoTT",
  "key27": "2kdqTEwptHmvugF6wMxqAS7t4LML7hZWmoMLkibQnvjszUYzuSEqjbhnxHwvdiCsppRW3W9vL3s1Djmh6gHcAKbN",
  "key28": "MBCfBSneNyw4Ha1YZ8CsRKsKNGcaCmCeatURMagqeRxoX4EGKDj6Q9epFLNqoBmcrZGcA2ErQfbpseSWs9gvdDZ",
  "key29": "2ZfemBwWiyGKVpZhZsvPjjfaSRafP5QL1o3KA4EM23qjXP517kNd1fUQCU6DV729s6XWv2Hy2tM5w5efyn5LeXWz",
  "key30": "4Hx4vZURu3UYFLcQv33SsjB4pvhbSsxRoQAdDdHnQQtPMpEFA3KwhozDxH9ZDB3GHKNd9NaAMUCJzRuzU3LUrZ1U",
  "key31": "4jej4RptXzVsXid8GiuocGkTMfdVSuxeQSv73KM3ruaUxVfaHnAiminPVK2khUG1rjvoSqVJgSbYK2MvvsA61vnC",
  "key32": "3vTbBuCi29aWtyR3uY2SBZdNScFBXeY3wBbdj1mR5HtjkbYZhVzuNZ9SoY9mqAgFx2MR734EjKHYrMtMagK4drFv",
  "key33": "jtURVADt1HNa2PYxhi7UCotGYinc6o4gWJqJ2v73HqmKBXUy6w8ddmbGGghGcJEWz7n7dR8bf7Taw8gbTCoAaE9",
  "key34": "5MPcdchbTswidP7tD7oJUqcyngPGevHkrHZBhKATUYQhB8f4ejG9MiUDVpwYy9VoAgo5om1pcoKA6Wuqer5DnesK",
  "key35": "5azSUnkhRfZGnLLWTdgUv3V6ujGyBbi3i1iJpvUUM52uCoQMqdsMXE3fjpQF4489bEULvqb1BJrvn7q9HGJS7CGY",
  "key36": "YXkd2NbkDoKEC5igTmmfKpCXeCcHtRBn7TUqewF6BJzGQUX8z9GKG76wKojcyaMvMc1kubnH62rXPcN2gmVxk7a"
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
