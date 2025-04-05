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
    "CzMf7s6go112B6K57rK4r9DMcBdedU4eCbXsifDp9BCtRz9RynX6rAurdHwqhgsM9hjRbgE8eWu2N1bxfHaf5Zi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mb2eK2eLaasrgJZacftyaVvcNrBpsetNR6z9j7dZt3v5eBmGyyYvd7HeUh84p2jmth8YX4hff8zVaVTwRZ9cSF",
  "key1": "2xnDnetqv3m3f2g69TP3DhziS7BhLM4ts2DHM9uwp1LHMBw9txmHFisFz4J2UYTA3TLTqLtpsxaVUZQzwhpGqGZM",
  "key2": "21NYWQ5Di3aV488E4D2mtPKZH7Fujn8gKMRSHypwhurvkscu9cCdyY5bJ5yU11TNQFZzn3R539yHCd4DUQCfzZA6",
  "key3": "JCxYJTgxGBaPxxJKa1t5o6vDeveM1f7GfEXoyWpamu5vLNYDQ5kHohufUfWxUG3HMQbMcJUx9XuLtkf525WEwBe",
  "key4": "26ypciTPUHhHciNijmzSHRkpiD2c6ooaBMDFXqskGK42Li6jGFXwj3Ug4C1eNfRWXbGTMf3VaFzLG8htG3kF8ZVi",
  "key5": "2BfqoMeJus4uvsyUVR24HGeHfUVGkxbbgjLy3fyg3f79U83KJm9X2ntgcEPUizKRFTWAXVV2JfsoTtsUSnzqXfPm",
  "key6": "372aReANSHJKiC68NJTrpbdEaDHsUgsqctktUS9sbvWCMRS6vAPMpKSPxV4p8FhGE9RqGsLSDs81YEssXxqVWf6q",
  "key7": "5dsSmKNqeXYVafRdUSGRE5YigEsJvbHg4ses7Y2fF3qjJPokhisKiX96M7WnfvEWbGiN4Znre9yGqqgg78nppjuh",
  "key8": "5p75XcXAEMBukeBSoKLonMWuv68oRSvqd8hGEkqV9CdS4zC6EmizxzXW14vEin4r9z5yU5hH6RpXgre9dcyFVHEv",
  "key9": "RbJA9MA1DooFszM88Fh3tmjuQFZxfYC9PsSvmD8nzrScfis3scBdpZyo8DFozwXCXtBNqkhcoM1B1CMpr15Dy2o",
  "key10": "M78h6rDjkQncy1XEzH7zaMtLknq9iNKeDCXJeY591xdR8Ch9PrueK4yJYywmjXjehUCaQDW7hau7epio5Fzjrz5",
  "key11": "qjrZZHKTrc1NBQjVpnUeYDvm8k2sQEgZeFgNLj1Kj1em4DR6j6CZAi6VtfhXuYS3VAJoQEKjc67WL8SfbjDavNp",
  "key12": "2VoxWgXzeYXkcdn8rDQmmES83Cf6um4jHMTYNboPu1AS1NxzoGbg2ubki3KCdpBa811VfGxQebea5Lhy4ixBajHK",
  "key13": "mP3SrB3PNyHq8XnmVF3wD4TaG767wFoyTsUn25mSWBvndwGMCPDwzPhrKRMsq1M3NXQEhhhgS6gLCMvcAAWAJCt",
  "key14": "3vwbmkGCUgsUm5BSxwCYV9dBnz3yMAs23A5D7dZKScACoHaCt6JcaFgXYkDeQx6T2wgtoQtnV5YcMAD8Xj2gtzbT",
  "key15": "5y6hh3pGE5QTDR7KuNe4XRSkVL9KYxmS1wxF8iCAaxzUub46bMR5jS8qGrvZ1SeHQ5M6CqqDLXe9qy3iFjp6JHaR",
  "key16": "47joumnyKkkTM74fvLS1fwS7E6Fia4hpy8ny7yExW7amdnKvHgwyNqFmiPp8iePhCZVZjHECEWdYn4J1uR1NpLtc",
  "key17": "5pXpkpvuU33u3sdw3hPwb63nv5GmLLZwJv1GbNHy5R5tEv4Pjy65XKSrZRefUWagCvLmuivYrBCxcjs3FFjH4rfh",
  "key18": "2ZPrPPdPk6mLMGk1yj1NjKozPhfJJTDTjM5fuMH1KcwxFk1UkcZADqPLTdLVGBNFJM5pgAgTQS48ANVxAy9CXPUX",
  "key19": "33U3ZGAc65Lwang1TbuKwnH2DSiAXy4HtGErQxpg3WrsRwGBVhicdyQGFVL876j8ByVca1ys72vDEf6sKdcs1gqP",
  "key20": "3AvxNzRee5FuckdSrt9VthEhDDVD2FWeLBTWPTXv2cjpBqdedsZ4iWL3WwYHpvsDQL271Ki2Pt9wf7sDvnBpBz9v",
  "key21": "5Q85FiNz8vphrfd4CcF6mx63LEUf49WGr2r9DReEY5jWn75mGjMNNiSJpJzz1MbXEVzL99owqT6MTEkGSeKFARTj",
  "key22": "4VwRVrWM8iYxbKxChWoCWUgkP4EuVEKECi9XVCUmimV9Sbe9vAm2hnnuYiMZQFed8Td9V9cNWmdjy2g6YxMmAd5u",
  "key23": "3gdg1E2xgNnPUdBahB93wCt7XQvq5brYmWXpXXyTHZTb2YSXcoNkRvs1s4aC1kTs5jTFstre69VtsZfgvceKatzf",
  "key24": "3Vt3zzUyetQQPQ4JEGKAYggBc1LJVKAs5HaEQGjMvqxWfQYw76AojSneNYwJb7ms324jbnCWfLYHCrj7VEn8eFLp",
  "key25": "WcVkZeas79UYBWvsr63whPfDE1N8h2nzA17cWJpK3vetz7u5S5Z2qfjAC1ACFqzYFhQgPMEpB4G5kBiY1EPhbgR",
  "key26": "2SK4i3CUM2qJgjcLnjBScGRWFVDUjqxoZxHjucCai4fPFNJivZP4C81ef5e7H6Ni8rKz1FCoNov9T8svtA9xajbG",
  "key27": "5CvuN8XaULrYnQJN5JzNdXo6NscUhAr9XhJwauSU8HuZUjpak2kmyAVa3QvT6BsPgnvbCM8n2qZJ29u1v4jFL3fF",
  "key28": "BPp9CEUbvRjQotm4j4RLYKupm2rNKZG3cVz2gats1VaMg5hy3FsgTnPLu12E4kr3ckjX79bLNEEfo26gJAQd8Lu",
  "key29": "48fg7USDEUiTGNjBCVdLq18qDGsbxw2JUa16f2xKgzQSqTkiwcJMJ669Yu5tEftxQVnGAKq7d5U5BUoM9xrhQA6e"
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
