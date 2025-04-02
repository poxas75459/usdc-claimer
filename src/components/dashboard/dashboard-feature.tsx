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
    "Q4Mx2wVHNXp86rksACiRte4eEsuwKRKHbpb4BTLQyu4T7nNxRsnGjSsZJyvVX6G9yXgvWzpu7NZYp8fdJtBrW3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HFaKxPvpuFcf9ae4JHxDE9ibtbi1WXusfLDAAaZmkSKw2sVzgVpsh5MCLmBH2LWauv4Q2ouWt7Rsr36xRDgT3Su",
  "key1": "2FKae2N2mJXjYcarUkf4236aVDYJhDS4d1rAsPP7UJPFVomxP2cponWwMgqrx6MtEnsHD7Q1na7u5yjR8NtCKciG",
  "key2": "Rm6QzYRsLsL33WuqamLaudbabEuMG7tLbwBac3rvhLC4vQMeH4tPghPdtoZXugATH1SHftUKvQhujSPAtZhXTE1",
  "key3": "uGY1RSmd3UkL2SoDyQXNwNKnuagWU8P28ouMq4GyDgusQp6E5LC8kS39mWX1TsQMG2mqPsUnnUMtqrME8J7KrFH",
  "key4": "5Tm8UHBK8s4y81kf8V6suMRGk3gMFikRV2dmbeuWZau11yThjRKC7ucHcTxDVq4TzHfZFWpFamR1o2o1AHj93diW",
  "key5": "4p5nQCjBRYySzGQxqKdpsJs7QREZ2vPQ5TuKMQ2yFGoHmSHCjv1YYNa3CokN9oJVLE2MeJT4HcEti8hRAaR2aXXE",
  "key6": "2QqhoYQaByuoUNEJ6Af7Dpk7aEFtWJGzwoYgGGi8ZCJMo6jLFhfQCthAVj4axhELY9ffHt2qQDcgJoowUvtZY2iv",
  "key7": "2UF1DzkcnwVChr79cJR1A5fcLvt3tJYHMQSzqJz4c7fj9V9519gqiHYRSKAx5WPgyu54woHZiAxR6ZdKPwBjvctE",
  "key8": "4U1CvPH8puGKPR2GR43p1NKWKBCoC6QQd9RfuRB1ztfUXwcZo6KBQh6uL1DU2Luv1G4vZh12xuixuaTWSwy4DVSr",
  "key9": "2BzEDASFuZDayMNVoDQRtQjsrTADrWRq7LgNhSVBqJon7CpB7zvXCrDuiFKpo2U4Wc3cTQ3HDJbeeGcp62QDtSG9",
  "key10": "462eA5LqBXX3CysApCYyd4HYcfPbLG6coTeVjbN6hmFfNABvqf3a38cBiLzBrw5Mxk9UqnCGhVHPj4ceMPpEPyaY",
  "key11": "2HhKaoBzrTYB28Dc1EdEbs5f5KM76EU2U1KK7e3cWNUaxxA5tCXmJzmY1mhb3qcu5AxnAf3a9BqdmA5PquDwfYBR",
  "key12": "3z6MLeqmt1UeaY3zrfWJ9hq9JAscPic8CDUwyQiAD52Xr5DeuRngTwAmbaGkusaNqhvsdFZocngFzEC27WPJZZD1",
  "key13": "4ALjuedgCKxwHZhKnb8qKQvGEZeBwV1gR3hv4fS39utro9GgtY3TUCEU6fFQyXgpydqH4P3AHaga5LNf5ZFVwLH",
  "key14": "2PcTekXLMoHHiRnJsZ2vHZr4tqWGwcn8hZSXYyjHeYb2rQP8e2iYBF7ZbHvNPCAofL2dfnfFiE1oyUpSXkE6GpgZ",
  "key15": "2YToMUSPEuvSgxuSmKjg6niFWQ3rZJ2rZacrqbtAPY2Fo76i5gXgDBvEig16NnvbcXudZbgyZC9cvsTnvokKdbEB",
  "key16": "2FNz3L3mfzmvAkU8oL1z2n97dTNwPYBt79pdrLKKvG36tjdjtTkuJ9YsAz1MyRBwa6gR4tGjpRTBbx3uoWiFBN3w",
  "key17": "52VADF3Jb9j3AjeTa81vUSoTaYsk3abVxrALB79ATq1WuiMSunPiswjqcZvCp3a6fhtKjXhocM3htPmcpWSR9zrN",
  "key18": "4sPSpydAZTd58hmydNsFeRQEQgXEDDw9sw6QVAJaxfBhnQMTW9yJmouS3Xw4goLMLqb4n8cQLgn2pkJ9JCY1Bpbe",
  "key19": "3MnjXFy7Pba8EhQeH2NsSdyaREdD4JHxC2HYY1vFS1iDnW8X3hZwb4uWbh6TaSHciU2aZs7t4HtPQ8pj4Wu6aEq9",
  "key20": "54H8xMgtRkRqGgvhiKeccAcB9PmaSHEhdHReTpinPzLeaAiKEDisnvQaT7FTLzYYJoTFuvuPV8RWg27dZ5UQtVZo",
  "key21": "4bBSShQY5gp9rXiuDryrpwZNSoB1nAyByDXjPheS9sCE1bzeZjX7wNEPWN94osrF4bYfuhCb9Tht7yKeSSsGtppu",
  "key22": "5aiiRNqT15Rz3TEA9ymjk2SR9e18iGtoL8zwEXPS7PEzTcH8Y1LeVd5XAL24b4WdN8Niz3bUHHQKTFJjReQcA286",
  "key23": "azHL6jbWw11wT1p4AuhJQjmjn2QkfYPNuBW2ys5KjhVjejEyzYufsejsoawiz7E2mqssVEvEcxKJTuGqmXBrQgQ",
  "key24": "axmqmhYProfyqvdgd8NGdEULpK8PdHS6mGrHofSE6Ms8CCfsSgxaRphEuafiZYGo2oW739DezMho7CkBZWtfeUa"
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
