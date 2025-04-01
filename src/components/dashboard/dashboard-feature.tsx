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
    "56BVPkR5MUxUsRM4RJyMuidUmaeELoXr7eo2cZoRvCu5dhdEt7gUVV8VmJNtQJJmrikEyyd97Jdnh3LDeyov9cQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T2ejsCRjc2XqcpPXsnH67bo1KUgZeoHuFEmiqfDRTpDdb7ZThKF2UEsJNLfHXZnaZHLz6tufMEh8Dv3X1YV7sy8",
  "key1": "3HiXx829ET6fAPj5D2JBbnqc2zLdZwKMHp1ZPU5E4V6o289894QQHERNsk1LTJTtJ1JWYzLtS3YfEKiVj9dTVrCf",
  "key2": "RMtXTK1k4eKU8WVT3n2wGrvRsAzhrBZJ4iwZi5mrmRhQwNqZyNpwKrPdHicRTWQsWRssuoEA4hDSJTvaYJykUBV",
  "key3": "5LzCDtKh5is4MUA8Zq58owwKqK6DpNqnrbEgyKftmxT5AhsHjnGmJA1JbGjqMWt27RkRejisKF673SPwQEnAEuYT",
  "key4": "qunvhjtS3YfJAwe5VQsp9dmBdvVWy2QsPWXdVarazRy2cZDDmBkHH629AXBfm82D1MvpyCoZgsWqC2oVM3kEyYQ",
  "key5": "3NA9SBURcAdmTkipfx1JCJGbtPtADPe8gc98NhqiugC8ywzpwk2z2vQqX7E1oFt134DVPhcqEi1yPbMbyqgfnJ1C",
  "key6": "5H4bQo5GFDAo3MtwNm87RjiQCfVhJCZMDX7pgiGtA8QWDZv6xCohFQpyqeYAuxojsEzSbC7kwPLu8jVz3jCSDf3d",
  "key7": "2r2G5rEbv7HgbCMe3XwxkW8HbZjNhGsJMWvxKcrGwtSNnXcMmctrzQss2SVH3X8pCQKazwhiDs151qM1PsFBPf2f",
  "key8": "47ZWcYWzqWqYQsy6FMggeJmTRVjkCUpb8KvNw2XwuU1UwUfEWJtQ16jUo1qcPoVKEw7b3HuVZHBtkxLBx1NgDAn5",
  "key9": "5pSxfg3tr4aCrpvamhydfzeGrQC1SakhtvniQiBnZwTbkHFtTr9YRFHgJuX1EwpaAh8qASETbfT9j8xPYbdEKMyR",
  "key10": "2PyCH4SY5YpxFUwZE7VfeAp1ApDP4wfDEVYkdXZts7Kh6Km9hRa9MzxZbyMeNMiNWDmbS5JgCoahftpPuDJViZvz",
  "key11": "67nuFoX3PoSPykei6PZehwpCmvcJHSTXd2Lxrs1dRhBpQpp9S4nhUv6eMYyB5RnjpJMwDGrYLmrV8JDCdDD9UQxC",
  "key12": "VoVEX6nT8Ru4wffEeoxodsaRZdgbRbBDiQKKTDaWvyeDMVATbyFhLin8AcwdUfPfapudAtN8Gn96Zy2tQfc8HZr",
  "key13": "ZmWNSxyTmRWqgB3fQa6dAFv4c7MMS35fyJijSfKvDiV6U7JhYUUUsdohfSeUT4XGDA6L8Gh13kPpsG1yDh4FjE8",
  "key14": "5L29WJVuGGLia4ZcuNNMqDj74utNyzvW1FSDxhpHYvwBwDLyMPuDA8zd6c7YdLguzUne74E3GdcRL9fznYAGiyH4",
  "key15": "4L5N43VcU2j8p6ofsg7RZdDvLvJWGSbr4K4zZLoAZFBkFTMJuRyDfGTjNhsezLfXqHQLMxgSuPJtm1Di6z9SFDZ5",
  "key16": "4jHzApZisj58ff3uSpCFpDzW2Pigf1hdaBpVpY31Gto3f9H17AZoVmfDwHQRgf8MopyBpMLVbhUQG5VYnjuSYmPM",
  "key17": "4BWGG6m2DGY1KEGkPpWsk8aJMUGq2sJg4MvEprFFeMVUwRoEXZStTRcBQDak2AYwvSV3bUG931SkFpeoPdS1dCFk",
  "key18": "676dy156rmCq266zCLKanunYPfAkjzuEUqQc8Dq6tFze1KBtqxScBfyUJC4vvTmAEkmNCZKp9hm8nEQNyWGDFnNK",
  "key19": "3sHp3C1DgbMtAkd5PSTTBfTDKe8LvHTuGy9gut2Hmmrx69fe1cTpKhjjkpW59KVZR6KQzp3J4c9YYYr4G2rmqAvP",
  "key20": "fn2bx6Q9SJF5WR8sR8DV8qSTnBuo2YtA8HE3Nrysunty3Zd9XpNiAPcDEAoWcT68XY5Mcaz8PoDtHQJohEdFgpN",
  "key21": "pswmqQkdyQNpkS1EMnFtSMYSNKaoyfbw7pYiauT4CwjgyixoRHApuuMhXTRNqoEpnUFfHzCZ3MegUP5wAcDHPyX",
  "key22": "5H2Cfxjx4J1aZMptDYfm7HgBoSX71NmkdRHoWRVsRXB4pVDuYaqV8c4Mbch71e9nKuQyRdtFvDE63gH5QXcBziEj",
  "key23": "4QRtSVQCYeNnKH3iL43YkSpWHJfEJfpU4EBEbeJpBMUNnigECqwcAD6d98x97K1qEjFUsaPKNZJX53z4m5dC7W9x",
  "key24": "2HzeLjXhPXXY87TTXGSAdM6Qdn7y6vuFFtti86uT5MZFGE2xicZ12aU3iLPf5C14pQYDiQM3AxjZtJA43dkNzmnY",
  "key25": "3ttiEFwk3J2wmFLfK5rKZ4s99FFhS1S2i8CJYgrcK1vPhZ66LvEdvgtFXSZG6KYP2C9o6EfQwQxrmPMHe86e4abx",
  "key26": "2VsBZWa5RGKuuKEMAQBJkJT822wvhZ1NR12Y4egYatgFP2JzwDpFGJoq9CdmgE9ANKjoEpqaUDN1Megiujh3bAu2",
  "key27": "bcZzqMVJTCUMnfsjTXP9qacKT4cQ571FASBSsr7g1GreQMrEfhPjGGAQVRrRMCpxsSkozEZy1yG8pEKumYJWn6t",
  "key28": "4A8p7ssuyz22jnuLzmkzTgMHFwiE34j9A1E9j6gRfeRF4imdXgtJ3Zwb4JHm5gkJsqYkXPEQBoGgT5AEaHoCBR79",
  "key29": "4Tfj7ry37CHfhATBZS1WPuryXgrg9SjPy9njkVhrt8aYJuPAZJJUQAudU2K2Lx2dNz5KfDPgc2EXeMfFUkhgBnqY",
  "key30": "4myUjCDwa4ergZGbV6kpq1kcf1ZebaY3NALjoM2Jj2p3Fgo9DdYQYihusoNVCg1shNFKrWuZkNgTCbSnNWdKkH4T",
  "key31": "2ckucxQEiSyWdo85MJX9avonxAuQEC8MGzpKcyNeVWXCf56JZBSfvV3bScSMMkPQRLjpz4CZaVrScjQ1qz2KR3Ts",
  "key32": "2QrL63Mc1pRHK7zJDjnFtyTMq8RaceJDzikSuJVfQ5mqj3Z5GkCvhSnwbxKKVQpFYLQrsZXDCb3wPaR1gBbivk7r",
  "key33": "5LjtV84a8xRaddxns5HQQE6bUSzLsN2UCSbrSiQADkn664niotAD2QceowcoWG2N5FPE2T4pVGCBPMgyfbtLUkAC",
  "key34": "4ttSoFppdUBdiBrJHLc3kHy8SBFmXBrPsnShuZ2uqS5bSnqv9nR1PPe36uU6jqbr4mzjMRZV1FYYhUT8KB1MEmiW",
  "key35": "632MkcRwtAMBvQQ89h9sUuwsBAaYp64FWgbWixTUMJhznodJtH1c9RX6wkhrFFFXjVE8cGCCBTEFbjneNTXoECzA",
  "key36": "4orUw8nthTpJhEHKDnGC4HHsQpkriFAbsxTFmPA3aQKSjMFMtq5tbQzKUtTBGBE9XZEynamgyMdmmycssASkcfN",
  "key37": "3BcWSqvZg7UnxPzB4tF5bJkHMt8UAvJsyWbLTGfpY7Phy1aP22kH9thMbdWZvcYo4c9iBwWdK6NiHwNrpnKkN6K7",
  "key38": "39aGZNPNC9UC3UEmrRyTfwXwqw5rPAkQpQtkSPP5c3p6Z2usQWSi4kqRKddoLUXvFLVfuLmuC4dvbabrvgxHaQCy",
  "key39": "2ajt9VC2us885Wq2WCriXTuhctRkVfhs3d8wZ6jr2YaNcorK2SZSzkdPYkqfunr63PgTHUnQ37cqi56rh2DY4wnX"
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
