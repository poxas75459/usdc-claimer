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
    "3weTVMMYcASXUe12wZ3RPiqsuxNpQkBzeT8HRhCNe928iDb7LkxLBy8pFKcEgURsuGEMzTZsMGbKiNNkAuWGjmui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G6JQhLP2euG9EN9smoENCsuE7oNrQEZqQkiwtTejaMTj1YTFGUa9nTvDcBfLLDxzZNcPC3yUUJPS1DASU3fe7jE",
  "key1": "5q4BaVrQG1oPTH61ZyMsgWDSyRWPUegu7w6yTH8Z73AQp14VNMDPh55zophzucrcgZ7UZwYS85m2pC6hDGKPU91x",
  "key2": "4T58gwfUSJfd9tBDcuY4oTCXiSeqKbcmmtYuiPRFVdtSSjH5WMbEng5EdstHYcwJS9Fj4CXtNA877PLmeDUtVyrZ",
  "key3": "59pt75hReoCQsztspugRnpL25vVqu3e8Kt7kmtA7ptdDow3q1A71SEJXSsJR4mzPi1iMFxTsEWNSjSZgbcteQuNG",
  "key4": "4PVRikjC6JjTHrW2X4MctQy3ZDxp7db58VRyBJUJL2jQWyLAsbovhupGWXHyVSx2vK3VYomcPeKyfobNb936zyZ8",
  "key5": "3LFBnYifpgNfc9kJ2s7vd5ct2UgpHBvpT58JpvR67kJmVeB5eNNvyZYpX8Xnk2iz5DxR3SzDDg4qTDxeqSziXGyM",
  "key6": "2ZMH7diyrq7CosMu4h8wZGAZaQSj3gTpDX5V3W6YD6BdFs7VXmnYcsfVLTktRcUihrrjA4eWSSJDRkQfyxk5g3uA",
  "key7": "3ifCKwCxsv4aNxLfdU2sSVHAQNnfgsq8bYUUtZrkS4MgXH78GJditcbsoBCpZjYARwG7TaBM5sSLbvcVQUW5T4ae",
  "key8": "3tNVEAbNP2QpDhYMnc15PN3RbdKLxMnSEVvSHMcnkg9ruU1FbFLf9cad645LazoE8fviQQ5GAZfpxQqqWB9keLNb",
  "key9": "2bYkFpp26tPdmGcTDAVH3LA1t8tA8fQ9crf2BuErqjPT8Lxkts2DQSoCWpACMjYw1cT64QZMXeWkHbxHxYzq9FpE",
  "key10": "5KFeu2e3rui96FHQjUULzJdkGo6CkJ8m5SpDpJ3vcKi3mdt31PcGB5rXowQymbbqjKBuXDqdRmuk9QnsyNB2Atgx",
  "key11": "2oNK2f9cjxNwsLS2Bj5ZWZYxoXMPzy2dPubDGe2vV5JpvL4ADuCcNHXLKdJfhzgLypVvEAS7zgs8hZRUERgZtgNW",
  "key12": "2boRhaMZRVNvLiQMoLpmB6Jdv8PnEwJSR7zcbykYydX953DN4d2xt3p8GyTKTdDGWk8dbpFRUJZZm28SdxayF2UT",
  "key13": "4YAQMkakbyxEFAWWBQ4Ps26pvBoATDVhLEGiw6ndQpBUv1iGBKr2gm7fNmoqxzR1ySJDEM8MR4AnMCn77gvQqxib",
  "key14": "48avrtdzgM1P1qX7GJpzHfgPoTb5m7D35aAaJjBX1r9M21QbEng19FsZCf4zBimWsmmksqLsiupyq8vVctfm8LZZ",
  "key15": "3DuSQZpspXzKP3Vv8gJ7hamPkRyJvFcXYqGabjHBtDRyHcjNVGbm6jc94naig8QjiTrXjPxf9ikax9t18HzTV68J",
  "key16": "4ajda8qd6kg5eLtyMnhamF1GShtLv28yedcQQvuewTYyXt3qMYqpTyEEpLWmuvBFt4nF3CCE738MCfRa2Hoe1yfj",
  "key17": "2kQcKcvNpq64kJVS5xo2KcQsAw69y2XVxya7CBB7vddov61tumN2QcaE1XkikEDitbZX4bAUcrLRUBjTnpQcttM2",
  "key18": "4EcbwtKn89fjkgRoQGuT1oLUi5eVJdaov7WpbQzVjY8ogomc6a9zZZaKokyQhHUpDp1tZkRaCva23WHxUWNyfNpe",
  "key19": "56H44SFp8QeHYCtgE7YcytETZR8nBhMUFf3TMxTd9xkxrm6qU8Exho4AbRtqD6XEVk3vjLezSDX7TSTfmAwvrpXR",
  "key20": "4BFkYiR1pqNDgiN2QotBSq2cPHfN7VgwsZgMzvuCPNxbaHoNoVsvi4FpiM5CAwfL5x7xihjc815fpmJLyvvyx2fh",
  "key21": "4xwov4oWQtDoaWZrCqb5PAwXiR5qLLAyqx47fMaJwPeHgjRS4VYSKrKvPSzU9MAkpKdqUiYu6Pa3eEBQm2x83y7E",
  "key22": "4fetYGnvnWwTiyyUC1nTLvGCfv3ByEQhH8tBtjCUpicU6gLcdH74wvyGZqM4HfVVFo6qEf6pXi6YSAe8e3DakxdL",
  "key23": "5mPJwXkGpzYQZAoy9MHwNkJG1QrpvJqMau5EA7LytTPmNok2c9L7Xm6HAwrE6XP8SVKLLDxDPJJnN63Tc6q4nyq2",
  "key24": "4yqo9hN6J8xR6GLoFq2DD9DN5QLSExdB3FCrt29PDoc5fhVbzigCVfw5mMymw9WinC97ebivAjNJ9tEGrLywHNhu",
  "key25": "5R9wpuz6TgrpCBTSc8RkkmKWF21jXR3td4NUo1kPU1RHqFABJ9DrJKXRqkCMqRnjRdPVRAqNjqCEEn8cxxoZJdvs",
  "key26": "4QBbeNU83hoMApYCGXAJFvevnGWzEC6nMh2YG13eHG8yS8sfeWn48VzuDBcLXh6NcAsdUE6BCJyvttvX34u6R4Y3",
  "key27": "2xGpcN84eqxopTBzZrtHgEg7zWq1ZVraHGvsgyVBr9S2EQVF9GXmfmdYbV1VZGmmHBSquuEdkup9MboCAtq7tej6",
  "key28": "wMM1oVuR5P33kHMB7oj7QSSVAJJPYSHYZNBNeDFTDEt8cRQao7NAh4C3EWUbBGndeA2aLtbgVnX9qRagr6gJuoC",
  "key29": "62AHaoLyMbMKUrqyjY1fYhBdKvfDvwc9nKrJrVCyEEQem6a8uKEyR2joXEfz7k8UdEyKrri4s9KyXwckFWnxScxw",
  "key30": "3gANxrgyXHoc45ZL67oQN2kbQ8DKdcLUychTm6Xg1rtX9w8XPS2vTXVkGMtPzftchuBpNdEnPmTXe18MyvLhwaSb",
  "key31": "5G78yro9KHh2PN4aRKN72y4RBwnqakuEvHbRdAzx1zsqEk9oYzqURMZHtyEtVtnJjS2NbSY7oMz4e3A64pYcqa9N",
  "key32": "5XhJXQPmoGtumTQWC6LrGBkgud47tJVNBFhEsAqF247UCFYgn2gqUYno2BetxUzJgrCj1C3NF7usNxj3K34TLaTu",
  "key33": "52BCau9d2YGrzsVSGo4Fne4J2krpAMC6uDMRuXSehL8Ng7dmM3pHqrqW91JCiWEDbj314zXcNgJtaT5Fq7wsxnDk",
  "key34": "3xFPwAd8JtNg4adPrRTUKUAkRffvbPaGP47Jp2zrK1NMQefWk8k2jiHqUMVoa79w9YVPLFf1TtjDvu4dyeevPi8S",
  "key35": "4UwS6huYbUM7wuAuKgDV3zCzQYu4pY78jmmfe9NmqV4YxEs9u6GYaMmHBrAKymFtJXbT7NyiJxsiZAsKUvMbQ7jh",
  "key36": "4mgvdPMs3xfmevkygUzbb9MJptqHF1HigitxpfaG6uHaWsoe7PmTf5KMqDXzgkC2KydznkhGSciYpvmpuGz5PZdP",
  "key37": "5vmCphZBfQbEX5c9d3jugPXxxarHFusZkjnoBdpHmUG3aKasukFF34HYDFcu5Ez1cHPv6jSJE9typncw7sdm2ihH",
  "key38": "3cRTanuecHzf1MEQoVTP7Qpum8thy3SmTCuvYcoTAqbbyMNivB1DWYBcKHY6psahk6eASiRb1ZQLFqyeuXK9Znud",
  "key39": "64bvoqa6r9yoo9UCQZFYGio3xZYqTJuTCoLifnttvMiNNqHbMxnasB2WzCUzcRzvtNHVEPZ8M9T41bE1nYQcfGci",
  "key40": "4Z2vnn7S3fvEvsU7DHRthFAchVFuJqECnwbsvhXsPLu4mV9v8aTtkSpoeq38cb5PWRmSAoQJoDQwQQpn8AhzbheV",
  "key41": "3uqbDaowBD25QH2bCUKWbLaHFD38VUu7tyKPsz9s6ZoeMaBknjtR65CKoC3m8KW1qrAZVTqmrgVv3c8t7r3owyfz",
  "key42": "mP33YRc9q9w1zKLMdPQR5UzzeA1QuFGrLE4cw52XD23n4XJGTa6h3Bdic2indrUkM8LPGsjgommbqdR16erD5FP"
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
