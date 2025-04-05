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
    "59Fm25T5Jx4QGsLvEAt5RsczhGRQZuye4BJPgHsJfTqcNTBAAhqPWM2QHDo9s1r6d2N6urn1VXgQH19oTdPW2Gip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wnfBihXzjaTny9mXuiJ8G3joQdAYtb5ZBLzs6uE7svgBbHXuvTQqmF7fJcnr1gjysVENjkTyWHSjyDEivCZQ5F7",
  "key1": "hfhKdwAsjBvGE6cvcwJdWwBRoWd7mCuaKYhLYRnEJ2JCxQJAjGgbZoR8N39SDC958UNF6drphcxFwVNxAHGS9Dr",
  "key2": "ruDKkT39dbYYEzLKK9VtaUKnxFxtaymQemjfJTiPRvVQLcpPJBiRmqGTktSN3dcUoCAm1DypEHwxrKBfodLo9Pi",
  "key3": "AXGfM4jiocfaFnkuf9pNK4L4mWjLawREv1TNTZ4REk6rubX94TBic5MCDTZEzrN8UCB7qxPdwu26hwLhKyw5zuT",
  "key4": "3GAPR5hayRu8dwZWoeRiNNEYUNuA5X9xbZQhtadV3jpF1UTwHqh5SdvsdAEgQ9TYTub7GEc421wjg5qjcAEsEqpq",
  "key5": "GfApeUyfiJu2e2MHYXRAVJi6MRwoJJ1TkwqRzN83MTAGhJJQiN7r3P9D7iB192j6S7TN54uiZr7hWhQm54KFCms",
  "key6": "3WNxKjPW6pmptAucVun9FCy2FYkAcbJisdsLNgF176ZPULhxxNu5jHz4zaeAP1fq7SuMx8FQ14Ecuj2Eo5DTc1ty",
  "key7": "NJWfQU2LTgQk7T3Bx88LpvLzNMjkP6FqWBK57TnV8AhiquVZaoBcXwam7YTt5rXm9Q2wrEaDTdwPQUwkxH31ior",
  "key8": "3rWKFn7rG3bnedfP7xZwdtU5apPzNm6WufA5SM3sR7JrNK4EXzG4NbGoXZKYT7Xto7CAQtWtVYtyLGbJ6ZBZYwg",
  "key9": "QZhNfDmaUYnUa1H2foDPamzjKiyyjJfosuzU9UTZMotk187bRbhRx2dP5e43vc8rjbp48zoUG73LEoir6YZ7cJz",
  "key10": "4w4w7G46YySxAG5QrFbscoLUqsZ1AsL6sEqMfZkxzE6Q92GqpvojdaZ17hMBHDWyir34ugJYrUr6rhnywxegpMx9",
  "key11": "ZvPvNKGuKF7nLYguccwdMxBbhyEcGaQ3XXZDTYDz3KKQkVop89GoirfngkeLcG6ZqdfanyVcgCWv8jurnaL8Jrf",
  "key12": "4xpwNyPLtp1FtGAcRAnk3JYuQjtTfLuraSin216Bdv2aEchGQpE1sT2684HfZvRkkp4JZmmPB8yB4RyeWAmtSp4w",
  "key13": "22AaXsgKAwPwapwa46GaUWDaz9v7worfgaKqBoLcuTKPp6HnuSknHLKFu73x2dgt5NmVf6hRqCE2dYdznfS7ZguL",
  "key14": "5RhezWcHyxRfGqMev5SQYEeTnyTNdkG82zvuNmea6WazmsAfSQFjn7DzoQq4XX5uhqP7j4WfAUUWAoNEApmEEbt1",
  "key15": "4DGssVUgean3Ar9KwKiUYq7jKyWWEib1DyH2W2psDAgAWnE34RG3nmRcWJgMfKDsLx7AnqccPftGaWYkygWem62h",
  "key16": "5LxB9ALLxoaRygvBBBd7nacXPL6vYAZSgnJQfcyqjfCciyqYYjuDFY3XvSuEi1cA6EspFpCHWfMcvJBuURVUqmEV",
  "key17": "3K6XMr5g34G4zaZpZbxFdjn9uA8JSvXEgpYLvDpgPJNi4UXmiFRg6vzg8dpGCBcXr3FEqBNFtBH5L6EdrtF3inh3",
  "key18": "4Joq2eWKM1GBfnhXhmkJjzuCaFzPGHGVh3KzC1Vv6LuHXkt23P2y44gbf3JAcHxnTmDyGDj9jKeYPkvhz1jVR2nH",
  "key19": "4Cn2Cru8XzZHdbyMvRqhE28tQyCUYxQ8niqEX3iCSmHF8q1HyMkdSaeSUKH3LqRQf9XabBmqcxpeFyZNGCTHhnjB",
  "key20": "PC4768ixga82GqdZmDikMkWH345wdS9CEZrWwjpRDBSwSapejbX5gMGWkhCNdGctCdSAumm7snbDuMsAWR4Pd46",
  "key21": "4aMyxvXhxrzF3zRYddojKVF7NMRnsojU2x6U3LuhXK1mJst4kTNxXvgYse2yYT6o4E6sunbGFZm9mTBxGB8m7M6G",
  "key22": "GJf1ubjefJKqafjJprYLWsqBVjK4UTLRJHN4aFhv4qEmPYpgL36FueoG2QBwptGjKFr7HSefwyAviphdVeTqQqa",
  "key23": "347SRdSEQjwijvhshQofYBckuB5wj6Cg2sMENh5drRAmbsggKs9asxcnmbzwi7qkovj8sG5ukMij2uCkZDGo2JG",
  "key24": "NuDzeoU6WrRwqHVqorWeXWEThDRn8dZVtcduLu1gNWLSJ3MjNTPpREeJnr7F1a41wxw3FYmgVb53dvoGF924Jn4",
  "key25": "4mLjgTtQEkrP9ihSdcUjTF5sJR69yRtSH7LEZtgTVQjBAYFwwVqLbtMffsDSFxGoFHjhYn8nbuPCY8FbQQiGXCAi",
  "key26": "3Z4EsSjrcGhj3F4ucukUdmohunzAUJZamw5cxxWTwLFxKwnG99Azot4GrkaWdM3rKS7BpArWtW7RbtDFDtGY7GTi",
  "key27": "4sdj892eL4MZLFV24Lv89f8e4Satoq3BdC4WTXAGjefmekDheAdGyYDL1dYFuAyF2bkFMxdcnCUSHNTS17wrZfpx",
  "key28": "2dy9FAGq13drQT9snMWtHW1VfyAgohs7AcKueQVUBQoRHD2s9k1EcFxPPgPEfxi9ddTyeyaNiRC617ADvku65sNR",
  "key29": "53cwtwb5DQUpqeoAbnCw7K4haiNq9dMHoR2PkwwMgG7aNDmdepMiMDGsHJ6SpVMmCPLg4CSWUdq4oFJqu8uCjVNn",
  "key30": "3uocyu1Przzzh5bzjWTeEKUqbtAxmMPRWNBnfuZsrsGAzhtizUyoBWc7uNspCm6PLogKRQXb9yFVv3SeKxttpLUz",
  "key31": "64Cf9rAwdV2xiWBMt1XzqFmopYGPqP85vx1MRKgxVogwHiKRmvCLR4qARWkFuseiHbHNMWfdug2cBLR1K3gdinck",
  "key32": "64fH6cWfAhxrfFtwi8ftcfHX4xTgzBGV5coiKN3EC7KvZ41ekrgpTYTPZ3qQ4UJHrE1J1PgS2b8kXiCk48eGts8f",
  "key33": "27JvmZzBN9ZUks4cinzyBn1ZDKs8icNaYFHLQEq8c89qBSQ8VCcQJHtXfgM9tjS3DZwmaoyuRP1thmjPkjhqEfNV",
  "key34": "2U2SG4xoQxaxZ6zL1fGVZt69qBt5Pkst2UYaSjf2Kr4YdLEgfxgvhepPeFi6BWX5edjmVxBCH1n43Kubib53nJF7",
  "key35": "2F9wuE1dt8WNXFdcyaxjhDnKBwBz6x64o6n48wRgsPFFtUuVsGoBZQej4fe7B6PnFB9njtqecJPtyqABbwMn5CPw",
  "key36": "4Po6HNuUD91EmaDrR8khtQTKZc5115HoMcc9APXesD4A2anu4H57bmd1iVLcSZ6M2Kamajs2ka7fTi1Wado1em3U",
  "key37": "puy1VVVB5xfRNvG8Qn3VUnQg9SJXN8nDCqWBq7zuK6JKUv8KL97cn6WnAPM9RNQgK2bgK1W6tqKgpxpN5E8bw8i",
  "key38": "3y7feGRjhpicSk1SwSV16JznqUuMcSkwaQZwCbRLYTrtp5s57UnHtpKkdEBVuvEEiauDWoGxkHVcrpcD2oeFe4eH",
  "key39": "4FpzwR15WzqEQRsc2uTF8Grq8HcRMc2R5e5MwpBYaY38f7yv5i26fZbWw3xB7Q7K6MRBEh58Uu5JWhDqK2WEm3QN",
  "key40": "4ZxNP2hjY3Q9813Q5jrgMmEETErpJrpv9i57AwVzGP9RRmkMGw63VoMNHqMVSWJJdyR1FH57r5c1WmX7UqUPmtpw",
  "key41": "2zFzmDf3fxQN1RB9pAUB3LJms3CsPkaTqTJjXcq8sDdP2B1qj6VV3iqY4AtVizkmHX8eywUvvatcbcfBZT4Lbv3a",
  "key42": "2rrZnuEo9qcfuAc4GpysSZmehx8Vew9fabeXj4w1Po62zxSb5DkimGuLvYoZZP2T8RCU7WQRhBhRaKDCZUM4V3L7",
  "key43": "39mJN3rm1UvyVS1DYtzWXnS8UDiQWgmBXCYUxn4irQeb3p1WTchsAe1XKXGcmLoaAvXZo1TCug8GWbXewRqjPzpw",
  "key44": "5cWGhXCbZMmARzz4a3gUvUgjYtdqJYWZijAnAcDkUHSQ3g895P9q5JemixzQBht6hCPxA9bb1aTJVUSUqWE6mrsx"
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
