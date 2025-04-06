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
    "2rdg9VJ488Rzf7UAri1LJbVeJ5kcEEBVBQwZ6Yd6k3QLN7g9SkZgRjnUC6JKtHkPPPtiPtXjffJjfAfmxhN7weDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61cCi6sZU2JXBR6MLvrMmDgPx8mjgYhZgHby8mD7yUMcNcL6kEcyV8i1RAHaweKv3KSrvhc1GYYeUNPerbiyMYN9",
  "key1": "5pZ1NB8B5z8RjUaSLtZ64y1ELJVKCWmgSr3waQxvEm9pPi6x1k1WGo9nQsTob2sseJZcid6htf6ckVLqiP1pZ6yG",
  "key2": "3Jes1XoyAz1c7CDKi1PqYjqj38sAiFyJbhHhunm8vZqUasoCHrR5DvWoWhBcKmQ4Fkk5hUTghNY1AUtrBDdw8aWQ",
  "key3": "3JJVbnCgX1cnZnzbKNFSmTfYxzGmNRH5xWgvKLrRbLszoMPimr5RUDom9eeV6REQi7g2E5yNpXxN7Tp6uHYF8EM7",
  "key4": "LMQwEMHtb5eNmcBMqBz2XBTfitPpGBGP4TVeuE4SgnK2h2xnqTvNH9wFSYfxPNs4sehwuomJYeaXH4PEMixo596",
  "key5": "4p8yZwuLMWKBwcmnquYTM5ZF4mkzDirjK2K5K1wECjd2iYQVKquiUvhLiH7NWseTJRiNQir3oksb4fJq4HH835FG",
  "key6": "jqwxQoD7AfpXNHnBfZgoNWf3uGuAX4ZPvWFT7phjK9gGyX8a244L8uKR5T8Af3Zqzi6HrHSGX9jZDYeUrmmbVkZ",
  "key7": "5miStmhQiVFVawBBiLLfyZdZsdeLokJ4CP52ADkuwLwG4bNLTqWt1HCZAH9kPGZXxMNkRWS6uwyVtMP1HpyhABwV",
  "key8": "5SwF3vUDwwW8vU1nfBFm8e3R9iNRyzXxozd7Fpc9E7jeRjJU63LNL55ejJRhHfdXNLsJDYYrwtnjV7vw6hm1oJ2s",
  "key9": "3zwNCbJNPj8pvJ2bYgyw5Y3Y74gpYkYTpaKjNgKvaWxMKbi7pQfxKH6KKGbkJB4MsjsH1vXkn93rxqu1oTqMdFD5",
  "key10": "65CMF4NnbtxJvwUkmGpnW2goefTzB3sp3tgzqaxsu5uLCtZTtcSzmPJhABWxmGrZfqs27FXeujAmHLdHH3LkuKE8",
  "key11": "3n9RRXkr5Hfh74Juh5piD233wWrBXiqrz18AsaVRK7ohqASnDdukodQ8uqiLAvTNe2rac8BW3BcR7vZ1cBWvjBn6",
  "key12": "3uM9o2icD8XomkqrUbQfPnaYxmZBmRoU668uePgRSkN7fJ2ithPjTwvcGpTydCrcffo6xKE44E1tDZEo9gwZv5r6",
  "key13": "49GcWWgLwe4W5CbJf9GwLfkkV9T4Jcj1TZt77Z12LTHhqQAeLjDeqjpEzxW7aAaB4vajFmdWLU2wtZVqyGce6bbD",
  "key14": "4nvkAGfKjRgYrs2YzAKdAfusU17mteZP8hpv1U8hy99mnhv9zj29MMxCELDEV5DBmos3jowfjT1QouZBdraS4dvW",
  "key15": "2LXHdH12uRo4YUWS3Fpk9tnpJ9iapfmHjbuVuSDpZczCsLjqyRny7PKb1D36CzAAyn1Ls4P1vsoCLhuVv4BoBU7m",
  "key16": "3tAqoWDz1J6YcfFG1vevM9phKTR1xYNYRZw14jgZgjGPBVV2qkgooV7oJjRne73fJEwNbfMRbEmNpghf8xcmMega",
  "key17": "3X47LvDWzCML2QTcoibBUPcdhY1uig3aK5NFZKaCTjhtEC51YVQULbRRTKwKvoUTZEa6377Th6UezcC5JbPyPo3H",
  "key18": "43o37hu63gRtXt2hrD8j8xPPqk15p5QDRKwLJueZy8vdhBdu1HW5CEnNy3GQpcPM9H6LjQzmTHxPWhn43NtSaidf",
  "key19": "2dFfi3VG5JpbrcKHZ5sfaVJL8cciyz412WbxAMey4sdgFKjsq7SFNjuKEDjZtxEuXzmLpq1jyQWoe3qZThYLY9uP",
  "key20": "4SUp35N4ABBFDk1HbraeWk1HEfJwKBSUNjJWob5Q5xVCdFwsNXt9795SNjyYvj9U4XL14PKGXwdqtGtm6jz3u81A",
  "key21": "6468ZEW3kBRsxbbmcwSCTXKW3ThVJvescsCZj6JhTU1F4wpDEwi7nsU5amyZLQxsPFnJE2bNteAnCy1ZAvVrjmxw",
  "key22": "52tGGX2unbyfqbj21BxUtJfNjcQb77rUNFfyCTXumXSN9xmdHVo8CPMYHqrKJEtb5YjEeSXzbxubDLBziNeJSyhF",
  "key23": "3uApYrJGn42nxsFWdNaXYWBQoLAmhfrXQ8suERcd2h7TCecu9dS2J8LcmPcoojCUmmpJprWf92Jk7M98ZC1LCbVg",
  "key24": "2jUQ1HcqdxiSwnTXvFwRyo98s7hwzZzNMuwYvU5VknLutnhfXUYCctbHcz9xM3Ac345fEk9WXSz8scywQVsK1JZs",
  "key25": "2bBzkrRDsMzhqBEqC8b3BW3ShLWKcoCG2RtTUvwHKpGGsSM7Sm6kaPHUzZ1Qe36AhsK1MVHt6Hp7rDkXkwWTq5Pg",
  "key26": "5cq1H4QcX8hKw9L8DNC6TnFt2M4HtBwpRkHSD81SnQeLiAYk3eSmpeSiKVMZwq4oMQYXoQELB8brA1McfoZUB7Sh",
  "key27": "2jB8qGiDRUdN3r9yc3Re4TznGZeCBvEJUsxa7xGvjKUZnsp9WsgLTV55LgRzsEJzsuQ1QAGe7gKAYFpXhYUDtdww",
  "key28": "GWmEnfxeqYDnLpqYzWb4pVonhi2GN9aNAH9m9x2dFNPghSiHFCP216zUAYMfAH8TUGNThcCi5uFnnTxc28wiTNR",
  "key29": "4LU4aU1CfaErHzob1SjEGhbmhdw9HLsU178Rxu72kcpbLnkQDQCJNikju3EatvWyZEQSLqnkPT7792tg5TgPKGqz",
  "key30": "5HM7rtXdYkSQTiWjR4TQp6rFBgtHx1FUz5GzTfXFaQHYuzBhtedg6F5fPVcMqYR9esCwgzb2fmwXKvkHRpGnfs3N",
  "key31": "2VrD4njLxofdpCPAgTLtqHEhEvE3JdABLT4xeRnALmTmxMG53aqYVkv4eaXmH3317NZayj6tcyaMjojYJV9HAQZW",
  "key32": "4ppTj7wyQTqgRuuHUvtJEyFUWrd8NbWs4m1sUcfCtjbvptZ1z2zjYDBBp3zgnWTHRsysMeZc8yxafuPpaM6GT648",
  "key33": "2Pv5ckanUBuW94p4Dyg6pMk917t4aSZ9unadK3bVwU9n2NPDvJsgkrrdQG244PFstDsRqnVuftwBqeE4X4ocVmRW",
  "key34": "3auRTCHDBCQqsJ199XNap1J1HLViUN8gFsyBfk9MftkFvusNShm4iRiF7kmEwzitqQ2FeRghMVnYAGWrSHyw9D7c",
  "key35": "4EMMRLQ9sgFpVvCMGtGYgLUoJ2wj6J89126o4PaWAMf6o5yUg4EFzz8GXEfCTnjkvrYgDz7w1cgJmkzv2RMCEpEx",
  "key36": "2sFhZ4PXU1qphsKFaUwJxJWtdH9MHfkMoRRgoKnYRbnWej2N5SScpe74Lnp6YVs2ix3ay7ZGsW5QNYEev3Ss4mWo",
  "key37": "eGoqbBY24svpyTYm4MQneas6UwwqWXH2fP5WHX8ukdiV5GsKVUgM5m1ZXJXCm9h284WsHuXDjdEz1nvzumQRo6a",
  "key38": "3zwGjaKDB76ah8BD1L3YAHC3MDws2YgPCwe7V3UZxgRa5Z6aNKK12ZWYiYDRpTVSmiBf4epajgFFgoReLfikWXQc",
  "key39": "5AU5CFy9ZiBzEw2Xy9tm92jeVjKbas7NKVutGnWKLkgfjLkq6ux1HZT9psNFg36RDuY8qynzSFaubukQ2iW2CyC5",
  "key40": "4vttg3WVCk5uYTcQTEhfYEeGRDWNrUKqBoWYG7YbV4rZRRL7vPbSnoex6wC6GYXfFFpEAfNz76cGnwQYEqHgDrSQ",
  "key41": "6nD6MeKiFwqAL9ceWt3WZAzhR3aYvcZvtZtUfAoneCLL92DSP58ucP5wgqYPvpJQzPXSHk6DhsGzJD7SmTX4Aao",
  "key42": "8qVHWanZmms8Crih67HjSQ91hTozHeT1paWHAHAqYEMWLuqaYJeoB2WecN3dtpWNBmBwPh2JRgqkSDf8gamBkZQ",
  "key43": "5YrHQ4riGyKVC3Dc22y5PfJTbsXMcZAxNCk6GeRqHjZKQMjK89UCJZhQg69KmMYiaLGLTRuj3E659QEpJxnumTKZ",
  "key44": "262W1mzyza4cuS6PeWS4KNXrUncYnzzHE7MY38T9EVeHVnDNYGZhWDtttHMoes8K3ffFM8xA9SSMNrxKWyodatM7"
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
