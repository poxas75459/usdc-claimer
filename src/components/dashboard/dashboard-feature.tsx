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
    "3ngGc1DvcXBxp9PTv7NtXpTPLX7scSry6kogSy13uHpzG5Rp2eCrbevzYZHBcMpC45yrUJKdA7175wV3ae6quSEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63awnkf3Yx9mSu36YGg5XovYEmkrrDoRhHyTw2WREb19nvrEpv6pUvtoCF4ZQ6i8jyR9vTZ6MC4tH4rpH3Gx1hbi",
  "key1": "4bDouKL1Hxt8tjFjeEcFYXrQLhm5khvTg15Dj18chyCGchoN5J7WkArZVAUpqsxy4ZyihByGE62GC39oiMedNgYD",
  "key2": "4RphKokxyrtU8JZMzCJXMXqKBjXEBa2Q2MbrSeZ7dAwejjxJX7spCd6LuKkwtwwn8WcNV2TiP5Uuttfdc7KtRfP8",
  "key3": "XHs97CsJdWLqFgXYhiVZo1yrPvFUiq29DdETZmaUiHLJWQTNXt3MDaST79MSRtzdFr7AiCiZBtVpfjwU1KtqxJQ",
  "key4": "3cxorUCFbymL8Xu2C3WbJVVFaqEAxQCbZ8nARaU7MsUEomNrihhcHqHw2GeniHHPQb3v3VaVjd9mQ9vfxUxZYmzx",
  "key5": "jdwvcTSqRCa8JRbLSARwvDj6XX57wD6Y3CiXtDRtn6MXwQK6MRo4JC657D9UwBtTHMmyVJ4iT4geoHqtBgSH5h4",
  "key6": "2TDHEszGqhYQB58n6bVf7Kq8YDh7SwXYCoDBkb96uXwTb4bCKQXYdXLDy19kZNpt7hipxX5gaB2R6Ro63FHCwKUH",
  "key7": "5NpjBGUJp8MooJ82pZf2qq19jYcwmHb2Kqydd8GvaqDVPDitba19sAvsSFvL2J5QSHDSbx8jzPCTJazQ5gRnb1cS",
  "key8": "57yJiMUiK7Q1U1UVU4Y2MphspCaKwvbip4Lads54hivnKRiZUZoptQBCwDisJ9ZkZTFB5JnNBNthL918NvQZhAVT",
  "key9": "2sKezLAkrnZyGxt4WJAYB9RJtEk3LFif1JBdPe99uAhApfJohTRsMEuoLiScbwdFm4A2SdtuqrYfBLsPaU7GgCHi",
  "key10": "47681yCYL3RCU5Xdg7tXCpsuUFFsFBizmsyVc5BbpUNrivHVtCCpBU6M22RhUtpJZnGSGawtqiEYEG366RdMuniB",
  "key11": "mt3wt2fUoSw6ji8c3d2Uzbh3vhQkKMhZHMjPkACXfF2BH7Ew4os4qwqK2PyqZW2WFuvY1RhDkfLR1rEfz9JDKid",
  "key12": "3sJdF7Fe74Zu6CGhqez3ZGAcLDmn1X1qpo3kCyPj5XF84VXVtYP5Ce4cbQCp4UimsKXd8YAvBnynsxqsMYnGG83u",
  "key13": "3LB98eXMZqifUvXWH2rmXBnJUHrtpg9QT8dp5GuvYV2uc33p59KfqgaKrR6CJALh49d5n4pzC5XG1dBPH61KJUY7",
  "key14": "29GvSG46s5QLbMWb1PJXutwTupCNFB7boTb9Ktw7cHdxh4B8BCPTgX4EGcmDwCmokYEnYCEiVtMK5fhx4kdmNXN9",
  "key15": "2wcDMn88WyT5WzinxfGDRWK2QCWZmsfedqoRVNAEMtbbpDSKtHDnMPrYv8PsosthzjNg9W3FWhJ2XrxkD7u4tjNj",
  "key16": "4bTiBrGJDjVTkrTLFY7agkXn39KaPgeYggPwXk1r7dqMd6Vccwe9Pprhzq38Q9cNhPYVghUSupxBaf9Gdnn8sXyu",
  "key17": "2HrQKuPvf3RDLfSLUiLFyrrTin4tPFZuNXth47km54124moY6LpAFvwX9m8PwEQsfXj8svabRm47AGmYCkrB9251",
  "key18": "4QyV42Fo65p7Nt4RriryrAVeiggTT1zC9cgLT4D516R3V7HU2e6DGuYLDz45wcPxBYL5pZ6THmFjEw4mtiXKE375",
  "key19": "3Mt4U6876VRuN3giUyHvA8JULrAi9j7LzqkXC2KtAd6nP9tAM4VwKCHkAMd15yK6EjbL4FBgpegE1AHyBMKrYwXc",
  "key20": "2uuMdm8tKNfq5GH6fuSxfD1qUtbrFoJrheEyj9FBP1KrSUBDgpMdkC7rJweQtzpvBg7hgj8smwmbUKN23yF8Mt8f",
  "key21": "YvUEoSGx2a2G2kqBWZqvkvzmvC6Nc3j7XDY7u7uxqYW2rVuPG5p1VMoMz3ywGonnMU3vpP1gPKgFXhkKsssykji",
  "key22": "22neq8jpCLrX2hbhrwNYYktPgpC696Gr4sQ91V8xnJ4MwQaGS8ey4CHonA7Wzo6Qz4KpxZR7sQJ8UMxNnD3Zd5tU",
  "key23": "5T1Zf1pLEddm6cpmgzonUW8AfVuKiymWhJmdoQokGLheMxrLoFwCvgc61urJVrpssjd5F7s7NKZYZgPHxidCVYkC",
  "key24": "3PsbUVgfkjwihffApG3tMy7EqkzRjoUKsk24krn4GgCKPw9XDDYw1yMPzMoTLuAr2mp2Hxk5GqZCbY2akMCfTq1x",
  "key25": "3hAojzVX2VvKYRnREpMwvKdZWKsQGuWqtCENm3s8PSgFej9DJKrPJcBSn3nNqA32qMCCedHchZMhnwAitX5eEA8Z",
  "key26": "3RA6iUGKxpwLrsGeTD4AwmtxnfwYWNYkHi7gASHBCjrtKNiU79EASrrLwkJGffksnyKJuWJ8AxdAzSGTzYYCCPnP",
  "key27": "2WV3pu7FQR2jPDZDhwNj2v8WsQdAeRFcWdMieWVk2odrAnhVN5XMVULQWDLi6ouTKrfCuTZt5YvzUDFi8gEqXMvG",
  "key28": "4c3nJyDwP9RU22rignnvUm6Bs1UCgGS44JsDTavXn2vg3hPYmBrFXzCqEJYvBtCs2k3QASnbDDZJF8uJJvsStuEt",
  "key29": "TLAVsaQPNH4has1qVwDxy4hXDRdkSdGWSQpMk39v3Jekp33dh13ZZLY4TsJEjCDxwAHp3ZbhiyPomq4sz2RPUfW",
  "key30": "2EN2r9SPZL3P5VYcKNwvxSWjxuf8aoY6rXjmCfxAp4KCvWDp487xLdqzR3ACSKdEdbeyTSYsJnFAX9xqZfWBJTWL",
  "key31": "3McRuTZwB7ZZFZxH2DtiQAGaDdDku4vce96KdZdDAUjwncywueNbRhBobFRL9pqhGRVr1zv8tFBmyecjprq3RZ7c",
  "key32": "5UXMQcncdoXo3NWSmtWb2TpGeg6qsEJ6mL18iSU1iVL5hV6iAewhSmGnQjuNKKh3NLrXeRM1L8nVCD4jLPs2SCfG",
  "key33": "ubG4BfuGp7MEhWvXNFYkF56P3vpEX4yAZN79VexuzFnFcrbsWKiCwJ4FmsQhWGVYbhETC3mPcieWq6NSvdCtSVt",
  "key34": "5m5nh1SLevYk6BEBwgfZcHg7EVRGBzbjpHrbXHcqDbJHDvTZiCZfFsAcswEsAdQSenyZ7FaCuxNTpUDYSdpASxya",
  "key35": "2qpKqiDHQabUuF7vh4dnvKtcU1GVT6p2YkhdShFobUjAnPoYvBAQ2XsE4xGH1RyzsknYzmAJ9L6hqL1MuKrXKsok",
  "key36": "QgHexaKJGGitTtpSfie4fLDKyDLBHwRgP5j4eA38rrNtrtSVKMNS4BawLVXcUuWLdxpV7phYVPiWa4vi7SsY7Fz",
  "key37": "5Za2DQbux9XfknN67CeT6JGHZptzZF42hcHHWQxX9dBLrom6TSJGLtxYS2ioCmkgD1gRiLuEMBjzg2djxr4ztHZq",
  "key38": "NvwAL2mGFaU5XNk8ZwVvKGGB8zuSPfcfuC8n52QbGavs348ET94pZMgrdv2LytWZkVazDdeS3Gckd9HweUc2ezf",
  "key39": "3GASYfreXabxYDvRSkm1aBquzHjC5RyWZXgAJJu3UrLE3zCvxpoh6wQR8Jd11zkSXWBdWGePzqX5BQFQFV2jZmvr",
  "key40": "5oV9wXKVQSvAaT2BabCqHTbWq61qXQq5JAjwV8NKTokCfEEjahAzKk3apXb52krcntR52AkZENdz74qtMFs44eMg",
  "key41": "4qn6xeqtPyNdEcMPWR4BsS87RURcu4srNFqJkRpravQFHxrXywhajgEpqBN8kCMPEEdsHweDN1hSoTRcLdvcdBGC"
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
