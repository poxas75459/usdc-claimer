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
    "4Egx647qyYzzHsQkYYuiwqZ4RhLauukRCJgsc751iWdQBWmbiYyh2TtZv76BAAFjmfRHegLwtBd2q49sDnVhAwwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "teZ7D4zh4RC8caQiRyph87g8voxN6nhYA4qeycoC9ciRKru7k6Z8HbNFrZzQYPESu9jwSdmBkW1eKVFZb5Pdyd1",
  "key1": "4E2HHieJxdX4dEKCjvidPvZJDNLUc4Bhgsc2AsVc4nbygjjuekqnULrJaVnbGSbT6qHQcjuEXrfnqYSHLguo6VG",
  "key2": "4R4J8AZhUYrCnMxb5CMYkcBzYFkAVbwMKQNKU3Fm8a6Lp1ZkXT11H4yjJPCHbHQBTN2P3pkByFt2K5k8gDotaYaB",
  "key3": "2YnRzLyh9Yhiv3BAYMigkGXt6sxbhuZDg3t6xiRL9L6CHhbVTwMq94zBHYYAZmsUApyooxUbf4yqgu3fFE1yhRsZ",
  "key4": "2L37NdYRi8a3nBSLy1TGiTD4UfMWYeBrqgSbrEro7qYSdEpQhoKgdkUNEbbhMT4Rc9twUQ323rKs2vzPkujmd2xR",
  "key5": "4o5eQ7nPzT4woMDt1XtwhZVNTdfgn5xkTq8NP4HT8h3pUSz1iGC23oPsW7BuPxHpEejGWY7FQWVURGVh6YER6kp2",
  "key6": "5ZbNrj8NfmhXvYYYEHTbB4kUXn3a6yoZrJBGU22RW8sNeWWpkmgJtXDx18x6BoeK8zQCLLm2pLSC2SM4n8kip6FZ",
  "key7": "5wVn7RfQmRSydGpDof3fKhd89h3YnNWosqbMAErwESEZmibrcSmZX6DhoowcVNZdQjAEazxM4w6jZXf7NSUdhb5G",
  "key8": "54jWBTuQM4pz5J3UsajdmtnsT7i8Pk93bhkPCnwgtp2uqwymf5zCAEMGZBaHzaoeMJosfTHXrx3PXw2ipJvY7vVt",
  "key9": "4srcgmUXK3ftU6iuwvmVXqkzsvSBjm7o3U7KWPsy51vXdQKPeRFAvTJiBm9hjpeRMBK99qoYJz7bbCEQi3tPDGdW",
  "key10": "4Fq4LvaNtbp4C3MVDxriqjKTRxaFhL5aaSKK6bYXpcV6X6rVLD9vhgubjdPV6PNERDAzJoeAPVRkdLV7vCGnGCzs",
  "key11": "2KRVswZaHEFgYxV8qH5GKEuV3Uos6jZumSoVP3Lv5UsfxzzALn8axHt3xwyohFsggZvHnfoVDCcHvdSY33Z4n1Kp",
  "key12": "32G5wW95gu94XEeZazk2BH94j1ggTVo5Gtx23gX83e9B2WaEdqJ1TGtecBbUaB4GQRm3Rgq48L4iJPjnEtFJ638r",
  "key13": "4GhfNh16yw5RamcwCdAa1VfSh4KpFMgH1VqjvNV6FNJQzBh4YZWmxh7AN8FYms24GA9EpknfdV2CZSwTeCVaqFyN",
  "key14": "5Riyy3dMTM1yHBujaqxm1xVC2MTRbbdP9rGaahkGF6PPfeAigdRp5bt4oQjWUDnNQRGTNPDgei2JztTCzKacvted",
  "key15": "4wCdxHinCR77EE4AhXLiZdqR86HvdiTaHLLWa9aSa9nLrfpED1iLc86VWH8iMyqPsXXLcdoWaaAc8vPpaQnWxNfE",
  "key16": "3rtYZDwFKp3AFaNsSaMTJQwYicLdidi176ZLq4mgBPhdudvJR1bmu7yVhfXafLVN5R7aCzTF11MvWCmBVCpUBYih",
  "key17": "9EWhJm5zsXb7vCHgMss8kjnaa3dUPxgFKPmAvRLPpbR8r5oVtTb8HsucvKWhD8JB9scHxGoiHHnfH6uJTj6DPtj",
  "key18": "2vxXMqgCCXFP59aBx25KaJ69CZkFqbZ9m4LXm4s8RodexMnSjD4GVgGBmZAKMW4yiMLqofPRq8Hns823tCKxizU2",
  "key19": "52Dar3mNosaMjJJx3NTogDovkzzddYbtxPdhYtU1pzVLzb4cWGu3CaUzxk3tayqM2Dnr8HHXydymxYXZPB1o8iN1",
  "key20": "3AxRgiS1BJonWpQzUXbrc6niRYYhqFtcCvtv3MervZVFuCJs1UJDZE3tj2YswWmFSaEgYVhXYooUT27oZXy34981",
  "key21": "38Ryj4un5U5o9PjmS4Q3b5WyF6dfHUvoKM3AQUKLoMHNcVDAC6vtoji2CLPrAVbnFkXjkieKF5U7KiKegDb7EYqQ",
  "key22": "2YRWPAbFsKE8sKu1Y9SzMJ3RTBG8KJjbVwtTgywmEQu8gQsS7dN2UB2GVqj3TMyVrRhot5AFX1vqYqgDvFwur4hY",
  "key23": "dcnNHosjkF6GY6HCjjJxnnuut5A6tJBvR4VyJ297DMP68SYAxQ5KMdpqJLQvyVKGb6tM38Mvt8HwvHyiJTayV7s",
  "key24": "2wwXF116o83t4i1sYktYZpVmaZKok4MpFTd37UFPUrDJ9gushdaAej2bgsENnaKmsyNiXren7vAr75FPRP39vvw1",
  "key25": "63KqypxgSUC7ZCZMGbHW8tMeTNz7NHxk6f7T21Sg28hsMHpwgaeUV3qQBq3xnRTC4b7A7Nx5cjU7mjbvQzpmLtq4",
  "key26": "568midm4amxvtHXfB44GkGWqvPzTC9BKcTG8cNxjaxoNpFRuZAC1U4jw149gy28EW1gkgGygPeQJqZWJsNrrnFtC",
  "key27": "226Jcg1uiMSD5K1BB7EA2hwuXkvDxukn923HrqRy5VbTaYZ5UskXzXxRgwmcANWWJAbNUGHaAyZGBcgPEJDT3yUC",
  "key28": "Gj2KQHSdQRQGLe9DdYwQ6BPYk5NQBdUV2r1AYD7YHfVCFD4EpVFvriWwUVsdBNQc2yWhpoFEKL85Z5Kc3vHSoap",
  "key29": "3Co2UjRjYWLQiCcS7ALXSJiF5SNknxD4CJMGsTY1ytAoTu6N2aTcGaXqrcSeTBz3o6zAGSMPTGE81HcsXWNSxH1z",
  "key30": "5napeqWq7KRoQ2ZL4aUKujcwzzqidX12nsAbA3qiY6GQ9RTYduiow3k1F84Msbq5vyAkTncoaxX9oHhfgseLpPjJ",
  "key31": "4qJCdfWfiY7wJk2zGfdDEXrqAbzgHNr5xp9wgpR9dVGmuAPbMT5osAjRVjzidDZa1C2aqta5ymy2QErCsdXWXgdo",
  "key32": "DDucZwP8T8ArJWuNRWktiner5jqZmULeopk357VRsjaefYmbNzaeufibNwxhKdLhYjtUqiM8fSzxHBZC6qecRMt",
  "key33": "5qeHU3i6oZAewzpDnz1MstQ5iECGpFAaA5fyjkTeAaG5bmAWhDsFUmKyXJbVsocRYYwHXkTJPjuzvqHBcWSAE7ri",
  "key34": "2MgWiPBrVTRfB85m9ha5XhPSeNy2GynfnEszmVyvtaqLkGTPuEri19PQ41J5v2upWDoDQzbuFovTSLs8Syf7Rs9N",
  "key35": "2TerixGvBjBAXBx1qU3iSU52GuEpHoYNwfEeUTD5WP7xoVTmPdqAanV5g4gkyfL925eXqz9Muoe8vc57174ZAK1m"
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
