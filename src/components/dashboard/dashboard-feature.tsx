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
    "UNbdGw9pXmDF9NcqMoRbgN9Vt6Bf6UxmaorG67iRBmNtL4kVh5DHR82e45Pctn5NGGUimku4Q4fiSnm1ro5XNm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SLTvVrBmPXkRN7R985BLH3gm9E5LdM9qfM33qMqdZYRKekeZkbG5XN84rFMQiaC2CHkphs2NTn2URfFBHReWiz8",
  "key1": "5ggiSqzAHg83DHht8LNrP6ZYrduf84iRLyJS9baWUq2VNf4f15aTJkvmpeV1WWw4LkaPnPxrrLP2PkjcSQgi6dQx",
  "key2": "4UpkpD2xq1UMau95ra9Xy7dGYFJwKiTjMYppCrRCwDMrFdfZnKvtPgo5kTd14S5tTDGg3WoPm8BnonkE774jg7iV",
  "key3": "2Nst4p6EjePyYpnXyZfMGS9pykRznP9W3FFm9thVjQS5m7AJCTSnrAZax6FDdghKLaMCVKKArFY3qyhUC9XrMV94",
  "key4": "2H538p9SjMUgcXjfMv96krdogMm9q1Y3ptViNJx33nkTCiYi7cvC1AwqGCHYtDNSLALgqaSaP3dsdGtfjDgmZVuk",
  "key5": "45XENNu6czzaoWwhUNPuGbhD9eNzDWPTxvR14swcCNLYpA8XE3gkHX4oG8iWaP2FR1fSQvZxTgNTSHxUvbRvRUTZ",
  "key6": "2HocwbwboigK3FdX21WVULA2BuJXAyNnN2a6QZHxbFvrdXKUszNByev5LAG44r9TU32E5d3C7Ds71shJktVniZKo",
  "key7": "59byLjb9YaUFsXcd41iFhKjHt9AuQR9LthUNtFnR1cLvwBwiT8Bq3mbnuECma6P8e7vuTjYceAFmPFofRh4xYZAz",
  "key8": "e48ed44F7q3nv7dCGt8wHKimZtYtrYQESM8w2RKGDSgc9rxoeHBGymkRFkZdFxEMbfxL6xo6z6obuVNdCYFLztc",
  "key9": "3b93bbkwPswQcD2azu1C8mWjxuNN5uEAavtt57LnZEsiDN4vsG2jvCvh2f431umGzMjBfX9NQvsYQMTMpZtJyK7A",
  "key10": "5qc149sCzAyrnAMq4ecFhJDbiyicYgKAMDxyHCy2TyoPDsJ6GZ8yi3vRMG1bdJeMHD6YDrz4UMKUZ583ZKhUB3cN",
  "key11": "2XP3fcmRoTPsSP521FZqb8WA48Gv8e47JkRg3wYgYUbfcCr4XpV7P9tmmX2D6gHqc914NjjBwwFtGRp86eeqMirt",
  "key12": "3mGnh7gVMFZWC4tuUtNivGj1wvZU1PKdumSVVFvwKz8GJxxLJZzxAyfmVpWsWzANq4FGLusutakbpSDcJ42P5ENV",
  "key13": "hgq1CgqZUNEd7LDGD5XaUtT7KP3iZ6jd7Cw2Mf88XQYPfczAgnzbLvWcQ6iqyc5Snr6b4gXqqE632typrj3QBMg",
  "key14": "5VpzwbxREqcybQG1rK2Vd12dq7AV4YEv8yZXf3nhWiNX3sK7zj9nxb324ygjR1MCb1VtxRaLuUQHzgmvjKAaoz3F",
  "key15": "4axeW9HrUTYEaqm62pf8hnVJmgZr1vcizzsZdr8QU5kpjjCRMxUfTvQYZ3j2fAi6vcdk2TFfU1onNqcdqdNaBbxs",
  "key16": "45vET83n9mV1SY82RTwvp8SQfmng4rTWhceEgBinsYvE1KwMJ2TWnJtNPj3eyPkSvcT8Y8wpvAyugmLgw3yCiUzg",
  "key17": "5RuZBpsj2YR7RBmKLCDjuHimRaRzp5pn4bSZz355682Ba5eVM7wkRcyTxGqEXUYPYvCMrwX9mpcZWb491WSD2Fd5",
  "key18": "2x88hGbw24q9DWX3fWn7sjjR4xYoM4ZYp8JKCrUzsKSkhkkuq75AY3zKYtz7A8e5XYJ45vFNwgUj9q6EZYWkCF6A",
  "key19": "5vHonWnGRgnkLZExC96oGStJgeJPUYMJFsGjvgefhcWEhmfnBzax83S9pxq1hBF5r3vhRQ6bHHSGDxnTRwvQoKkk",
  "key20": "3DqMbzzLG5K5V1cHyPYVEtK7W6BEb7H18gft2c8qj7G3KqR3Qxma7S6s2BU33FTMK3qmUYdRayjJZqrc71KwmLtC",
  "key21": "5nwZomnH1Tk2TjQUnDU1xaDZpmn3jzQwHFcTkGAETCf2UAvPN5rsoCpBSokgwG7Cihz7cdc2qEkTmsXPPtGsxVJ9",
  "key22": "3eSJqcFWE96qQWSKCtHyuFasWsSuJvN4jcFYguKuZiZVbxDBFDPht4xzKJEujSXGUJY42aKUyoM1UG4VsYRTcXTX",
  "key23": "55AxboNsnk87EAeG6MsJvSonsiHzc4KrbW9F34FBS43idXdVxKwSf9bW7GtKJTePhaQGPHrqwkgsLUoCMZ4zYhkf",
  "key24": "5fnua856r2Gz26qgPGGsCsyGPPsgn41wiPg1XnAirEUFZ9bZ7HdqJYaZTkh3qr31krUMR5FXV5L8oVN2Gj64WrYo",
  "key25": "4Nen4tUiBrq2z9adYyZDYGpaTdFX7aJifZdJKHDhiBATdQxJDLfSCjC3LJRhiTWbqihZxCHNHnB1MtA6xrrPGJK4",
  "key26": "3Th8UvMtXtCnJKc2MzEpA2abDAoMFGJhXN37zVWVES1fgWQVv41xgqEmQ8gfj9xUNBXjTeJQr61i7iX1k4L5kgyR",
  "key27": "e8DtK8b1rw17JHxFb92BhWF6t5a9AkDz6CGb1dSuAf4RYJ5AMLYyTcdFV46PEAqiu8Sx5YShULpLkf6dg2R5UJp",
  "key28": "2ZFWN3XRwEg1JYL4RvSkf36rGrojxXmfLFRgCpN6Kou6WPRmPCtoEmH2toK93vxPDZGQAsQw7CJ91cGJK937qbKq",
  "key29": "65yHePs4XJc9vtyEP1gCeHinMPa81t9MFDpxGNJ5QFPJzY9bbJbeqNT8YaB11pZT8eNqaTZkgKVExHcgYMnh5T2j",
  "key30": "3A7vQXVG2bRCe3Tbr4Tn4JdTh5MTWfThPuPrnZBDYacQRuXPFWYakEXhAEtTLjBudzfwcgpaXujckLY88i4n5Utb",
  "key31": "3k6bzHqw1mPofHWuN1aiXuw7SKopTUdFdauXrR8oSKDzAnrgbCm4G2KN8zaUTQtdwpiTPyewBALn8o6WJhjKEL5r",
  "key32": "2HsioQ34WfWT97PTzEMWWH32TJ9oXw4Ek7gVPECNbwzpEcwfNKkLrbHGbJWC1wmba5FadKoqYZ6UiJipzzsKG1WN",
  "key33": "fijqRWuiL9UAD4naW59MjScWP78k2W76nKxKW4FKijmhNxqhDeDvD4QyLjBu6DSKXydCXZyuV6ktfwqZ3oSrLkk",
  "key34": "2DEuttL9ussqEY82CLCRCgxPp5BCgeUp8ZDLvZwwrzaHmXZuCZJWswTFkHoBPfAbR47AbdhPcp5wRswwhiJZrAPo",
  "key35": "5eMYQoYwFANhc3bwvF3WQDhLRtiRJzQ5e2cvvATkD29GZSKmbimwdr86XczNwKgRgg6exSq32YZjD5dLGxfXUQZi",
  "key36": "33eNphVnnFSdFXEvkXcE9awkf6EV1rA1EJZhJVA4aNYsH8aWf9vGSrpaYnyUL3g8sTTxinRiN7xFHKFBWjuQ7Bxg",
  "key37": "5CrJGSdDEoVAssRf8Ts46ptf6jbYioK1zQpMpHN2j86zTvWLazUVHiRbmSdXL3iRDcLCeHzxug7R4Eg1nFVEDpAQ",
  "key38": "2NXHbUHBHUZPnb7uuD6mySZji98SKHuLSvLjL4Gm7RzaMQnaxGs1r1ZhCsXbReBxiE8X7qiueAFQeS7SvKApLaB8",
  "key39": "3nL2WNoxt2c8XXZquWosq41QPUWPgCaZc7GNiPaDezJ4T3AjgfTL2TbGSpnvrega4HRaEZ8XWc6NbrAja2YMhpF",
  "key40": "3D3Lkw6kbKrt5stF78KYRJ1BVJKwNaP1PEUYfNnwKyL1XsMXmRuo5gMvvuuACyKuvkw5FyRSGpcvemZFsbnk9th7",
  "key41": "4yGzNfmsvLSNzGzaHhqgWzYNFPrYNucbeoQoce6RxFTuWjC6fKyEyJrzJZ9W8QrdmfUxZGLpeshfCcNZzB5hFjC3"
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
