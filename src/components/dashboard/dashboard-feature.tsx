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
    "2iVnvQH15N4AkjjLa5R5tn4DYrCy2PNFp13zWBXMLFCbFZrYbpBtKmBuR56W1tLSmgPg2dFB3bJcX1RsiueASNLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zFXNvvbJbvAtG8GaNQmK4e9q87FiWrGHBdXLbitxDNN8VSKvtoXt65DmuMmAm3pigGhXsDvwW1XwX5xMsbFz7zW",
  "key1": "2QAc2sNajXmgZpz3yviUVL9mzvoZnzfZyi7z1mAgkCjAUjPMkUGazN4owp4BiwjrHudT4zrFaW3xBdc26zb3wjHL",
  "key2": "2N8esdqtKGZPT3VzckovEzQcTBa745j5Hi4u6RqMP8TRAJXwsNvs5HGAYQioQ8Kj1Pm82UNGpHD4DNN6QVvmnDKF",
  "key3": "2pbbgzhZt8GXGj5pxPPuMELmGU2x89Vd9qRkoGnSAkSfYeUJQbkET3RZoRE4k6jTthok8tfDT87tKT5i4rvqMoQN",
  "key4": "5GRP8QtJkqiwqSMxNXFoMpVzD4xTuN8cjfqfikPvDNGte3d83SYVvm7xUd39U3dcdbKwGb5ZJraipVCcAkxLGbhn",
  "key5": "C6nfVSd4J7PRPd5r88vvjWvKNzy1DajkBtkNmNMMaBZ7tjAhT7rAWDziRoYiQYTcG68xLwPbh4AKZrf8LvptS14",
  "key6": "3wPSDgfSEcXQMMFLC7v1cBA3rHt8twHHrNYp8gtDQhGo4ca4MsTFkmJYhgUenExtrbq3Cbby7PveaXUhSL7DTyhM",
  "key7": "5PfDbGDHcw4cM818Yc3hubB7djq4UnRnzdWQUvupuYBiZZWW5ZFMbKSNSwXLvJkkdTGuDq6DZUzWYQvtyo5W7aiD",
  "key8": "3sjtfkycuZ5vVFfoqsWMwJVHUPQExn1BjRU6YqkdM7z16TyNUQavqHW7oCoGjjAQf6vzM2hGNxAWGJM5jjSSYhJo",
  "key9": "tMA4AUgpJ34EiwB7QRjbtsqwuuvniXmukK7GswH8ky1LYrJHBuv42XZV4mwCGNtRQoDgG1qsSwAQ4fEapnPiV8e",
  "key10": "gFiW3JSSGTMGgHDoph5SFjq7x6tuP2p53zUA1zb8Uw4bkbJNP3YMieNPhsoQnCGPeDDSrhxGj1EqtjLkM298kyL",
  "key11": "3drDoHqMHybCtQniibkYUxeqyfqdJbooaud48KmPxRS4bZ4cJ7uUxeZnt5gP8pDYm8oPQw7nyZZvTdbDRtU6bKjC",
  "key12": "3vHLKi7fhydkd5eF17vZsk81ZJJx3XBiXPJDicBxJkkYvmQyxsgNExJJ4BJNK4gY8z5R5BTCsYZ9oZjtPPEVZKBC",
  "key13": "2dedE1JbWciHkiLpAram18Jw9Ui2LRjgeUuCTk74g3bJr1L6AEafW9oh1fp1WJqzszuPioinZJcSMWwuzesL4ty4",
  "key14": "5uxRrUKQDJknBsRsrnSif5yc6q3JjtxPnv6xaGxyiDwkHZX7w2dLuLVnWBzvkjER1EN6gTWbJa1Xs8qVNHT1sJu1",
  "key15": "55ax9myb4hq2mgZ8emddqMa1ZgzHsVCRZYvcTG79sgaThQqXpGdcCPxVYiWN8UhrJtrtTgdcdyev7uDQfKMWTwJL",
  "key16": "2V97tsroLopQrGru58U6fQZXW7dmMckBGz6UKRcV63dYj5yA212xdzYEvnzrk2cDPBsJUdfKrrSUmLteMZuDdSRJ",
  "key17": "2CT8uAnCRnAyjWZYfBaNvXiCeTs6eudMr49oxjQ9q2hf6Z2sM9tZamHZ2kq5imzsBgeV5GHjmPSP6tisBp6t61Ub",
  "key18": "4hSJKs78VewRTWjzQYcowQLywJTG54hFk3Xh4SZPoqPbZkCJmKLv41Jy89YvfJjZRUNKjng3ci2z8cHuanRb6HD5",
  "key19": "62FWzsgqD3VRzBLrVYhLX2Szwiv1vNHHDBuWCQnRvm2F5GDdRPsA9mh9jPHcujeUA3CV7CNeUqmgyKk83tAzKYeh",
  "key20": "2KJyPVW3oMwLKtgHGZ8LztjF3iEBTHCGiLfcTKL57EU8qPFbuQzzViGumVzxpCBrVdTi3ZqwhCkb6mZ5kQJS4ZRa",
  "key21": "5ZCYRgDn2aC7GAAyxeiaN9JWBCJ7VEEZrupUhkgdfffGWLQawDR9VMFVT3RWNRzzPDtisEoadqhLLZifMqSRKaDT",
  "key22": "3QhXZBeBtAqF1kc3fjmoCSZK9E7v6FwNuk1FhgESYumZHBoZLVCsFcMxZs7n3X6T5XrH5ha9KqcFGYVfwtkrwtbj",
  "key23": "v8im7nmzn8hmaAEkPodu15ERPHhZn5NhPpr6gx5TskWq5k76Yw1BjsCVdhb6bSL4tvDJdfrsSiUcEdLrmEjWhdc",
  "key24": "2yzE8vi3YPbw11h8fQuwLnTRAAHEojhYspJSqsr4aNZWjhXrLRfXKHiChb4Qv12jcPJZTuGsVeecc3VXPesvJd5P",
  "key25": "2cxkZKJzgHG1RAuTd85cYL9gVqEdZDkFMLzmeqnjm7bBUmE1rm72cxvM26WJrshXB7MDRbr4Fi1WFkdf87jK6PTJ",
  "key26": "4BnYYeEvTNPcmtVdQB5y5vSRUmBjkrKfVSxayksqW326SttzE3DG1F44DJy5cowGazrHYX8U8Pe5VvDeYHUyD6jr",
  "key27": "3FSWdMuBxcLGsTkbdoXMwP2n6vD3unLp5PXUecUUBQ43UyRRcwsPBFPw79juonU2P5pLk8PEM1kDMN7qMvbayEKv",
  "key28": "57bDSW936ydG2bMXhk8EuKPTzyAbYnUwQx2zczTxEyGjSVsWDrYiSPbP2hnQFDJ74iAQewBYt8egyx7hrVwRaPj3",
  "key29": "3imDwVPM8C3AHwyQWnyV4iXdTKrpDBeKpjf3Fdd5KMXxr3eeaKGR6A5SQANPfH8J7xPxf9Vtvtfxxz3Uy3yWUp6M",
  "key30": "2cHfW9JYhqbWeF6qe74XortVDiTQxwXg5A6CMefcGqHQHQXmTFr4Wd1sKTrHH7DiHy2ESv4RvgtrQdZqxQSchJRt",
  "key31": "2L9kkyQVAyUnBsyMr7sZMpWBx1yFoWwb7VN1ZtdsepVzWAMudvEEQ5XG81ctcEVuqwk3jnXFdtxSPkH2Y5VsYZ4o",
  "key32": "4saqTDf8oondZPT8ATSbqJhGRxszmo1SWJvVuRCMcyT5yMd2AZAbXFrLmECyZof5eQXjtWAUCR3kQDHJqS4NKj3G",
  "key33": "5Jc4vbuxn2APabkMfMXdFHu5EJaiho9Vq1hqtB7oL1WLo39fyxwQwwTSirbUpTpsNjV6NubggR1v14btMUfwm6tz",
  "key34": "3LfSTVRSJ8CWXdvpzyu7VwyiJ3sHCrFRmBou4cfsJf3SsRCMWDWVhhBivQ8fTcLCEjBYQniy3DixaWvCV2vkZpGF",
  "key35": "2fNbmSCqgHdgNz25WJYSwVcDwvFxzFk2x4ymftByfSFvZthi78oKs6gpJnw7Drxbi6krmv6qi6dccmysrNHUQ8Jn"
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
