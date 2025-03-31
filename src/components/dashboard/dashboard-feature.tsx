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
    "3sAfncREd4PRFR2vR2Yopnz2Jq2rAA4wBTFZkmHJmbG2RR4dcewGNJUeTUf8Auo1TAEpLz6enskkoNDBJ5TcTPVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SFqDEmrGQRHsN7xJECu3JgM8hmNacL98hYGSH1irq58xNp6YQYrekjea3ktLNnMkzKXqtNijhKDb9ohRPGx2XGn",
  "key1": "3HkA1T5WDW3wgxP8mULLLnADrJSJjjDo98q37ZTXQgv1Cx5YNTviwRypc6GTaFm4BAxhK5Dt5FD2Q5GCp3tNjSmi",
  "key2": "3vtWRzntionp1Hrv4ufryTQiFTDidWdw2qkp9vxiHmFc7EWnhahzHH4wRh3kVoGNoYwsX7wvMB1i3tGXq5cEnAGP",
  "key3": "4JMHm9ofwKzczMsvs9uLGwMzSNNGNiH3teE3FjfodTpzJDji9h8RkbX54Z2tcs414pemLv6rEpTrEhNnx6aYmnsA",
  "key4": "38r1RQgP5noAKRzW7S2CXobYudqmRQNDhyES8d8b8PuPbELwbkAyG2MYJsWzjU7nUkbDCqfrnYS62Ys44aWK9mPL",
  "key5": "3QPy3wVmDxVKei6o26XCDGiTuybPhs1xJP97kqHUS2x1GniuJc5m1jxaXhDNkpsdRf6fiCV3a6QYM4hhsupzZV6Q",
  "key6": "5D9vDnDHEhditYwSHngvMiVAW3YNZRo2FDzVkvHRqPAi3nToVQ9ehQPPGvhtu24QuoWMAzcftvCBPQ4Rvg7p3ecm",
  "key7": "4RrTcCMxBu9Q6TKxkD4ZekBQW3syuofEPJrsDcvPeXSJxNZSjh1sS2G7Y6PkkY3suQioJA5drKTy8d6W1xpGouMJ",
  "key8": "hsDaCoP6TNtDboRY9JM3VsCs2gNJQayDaw9x2xmWqvk1DRT4EnEp34mTk1qtDYqxqhQjSZCwzXyghgw7SsnpjWy",
  "key9": "3EJqDmsxARihV9uYk5wiPPfdLX3ntRUNGDTt1SMRMgpFdyZKHHtUpWgBfTks2qsQPGewoycx86EH2MYTWVP4Gcbt",
  "key10": "2N2Ez8LfKEDa2MATgu4iMBgEE7vh9QpDg5wLbZSRo9TECTwcWEMgXjxey6CxEv6hoeGN6KwSpymnPk8sTECQ8QYm",
  "key11": "31ekwZKECaKo1GujYsqgsC1PkGV4AWLkDr15GSdWoFb9TQMRDZa6DBuxdjTz2jbHEJCqXo9QBmjFtCZU9p7in4qs",
  "key12": "2Bxeho6czej37TKQ8oyh1SdHR5pbbAEwzaNchST7b8czENnNg7EGZVJA9KNQGdnv3qu1shJUatgXCzsjhm3sH8bi",
  "key13": "21msokHEfZR8JWHCRZZxFzWMYsm5YT8bTkm5g4EyJcnzUMCHyddxDnce7o2bCnuVqaDRGHgBjoYQUj56DAxhVPsv",
  "key14": "29WfacPyVFsXqd8JhyERApyKsKDJUdGEyDmPRKPKZ6pLCicsyL6oPeAD6bkS96hFrPjE2PMCV6xwiyDkVzToVqiA",
  "key15": "Vtn4zGG99pzDp51hTME6P4sbVn9jKdKEYWYLUEyWsW72KnQhm4M8cKamKgUnbLDTyXz3HDehGuRzqL9XsbYQVJu",
  "key16": "5ENPu3PedVxpYVcxHq5MYTFzkk81WgpASBNX1EixwGCeXpyVJfMYCR7rBEna5nmZfSpztVtLCLaEga2Svfi4fRjS",
  "key17": "483i2vF3JDgnJ9gXQNZSAwaNokZw83EWbGjwcrzofQoGc2CzUUF4T7T9Gbe2AFiYudgaxY45qe8z95WKRPC3xxrS",
  "key18": "5spXWMbhuEmB2ApVkTSxGczXenjNRgDsVtJJbUrnc3SKxtnpU3hBiH1WnZGqUovST58yGHt6e6SuxCeXJx4sZ3g",
  "key19": "4Vegusct8PFqKnSDf5PwZxqh39U8eaLsNuh7v8j8LuEsoH95oRQyok2V61RwRAVZphQQymdwSoG5xJRN9r2awuCe",
  "key20": "62fAYohBtLb537aBNCBUcewyA3vjDKdZd3ELhJ5fetM5eVV3GZBxGUbqdtidjGQmP9nQCujZ91Qf2ipJxTHtJQK2",
  "key21": "9V2iyVsy4BSVdaf5ScSuwJiruiG6JQJjB6G7LtSftNp5N2KbwAuoB3r2rZRWwFuHeV3KGmRKxueBrAzHgP7JfPD",
  "key22": "4Kk6s677SFzk1yUuWz9a2oCptHVocYt2iGbmi3b1Y2KgdqAUxpRj2GFuhcsytnXupcMRRK5W4j2qcqoesrwkK6tT",
  "key23": "nJciV1Wajo3GaUHGSErfTtnJo97ppfGUyZg5vjr6Sew4YA96sNjopVJm7oePUtzTSWuxuL8pfsf4Zn8rNUXrjPn",
  "key24": "4weoGrYZnNU5XFiuaSg26XJQY5BSavPUXg53LcP3hsx5Lktgbugkt9runZSRVvF7R3wVUGRFyrynSt3ttRZdQ77d",
  "key25": "5pLR4spTrmdfCn8sZ7cRXykz1P9LmncevYmJbkA23UtKxAeozu4po9wDxu7swnmxJJZm4C5jAr9nV9bbk8imXdiS",
  "key26": "4TKrPAKhyQuwpYP2FrLRS1XRx7DYwZCcpX2wbcB4G4o2m3i5WQUpSmhKQCV7onm76FSzyf17Sw9THiAxiXqVbh1p",
  "key27": "q8CxXjcjFQE9RZpqeEfU8XRyxH3ifGMQjnTwqNRV7X6vSTL2zg1kPtiSDzE9axNTprBvApqfgXNisoAsrkZm5bx",
  "key28": "2L4wsy93RuSFeu5aK7SMkYXkngV9x8pMqS5BH9KLgLsd3YsNd4vxQdj2UkWAxiSCZFa1bL3hRzksThzhpQPW6mby",
  "key29": "3Ah896Y9F26Ec4gXvs3wfdjSFeNFeUxPFmJZRt3Qy8a5RC8NspAP4AzPsFVVCxAaacfs2KZwpkZjprELXjSxC7Ji",
  "key30": "4vDjp7VqUPWxYNFQe4qfzsDFxgqZbBm4Rv5tigLX4o6Whthw483RL4VtJBDDqBSuFMPxWn2fqCpirbPSir9A6pFL",
  "key31": "5ZMereunP96ve1JJkBbpQ44c69ZzDvkLNzXxH4WYytBDVUe5Gx7LHrjnnMMB6XfnaqfTDixiSWGjPFgTfpnqWgVC",
  "key32": "zzS9YP9oJMmfhHTMMMu4oAFTrL2BUY1Y17DEFawpesyCYg14b35pK3PMVw5EPv6x9r4RfYMWfZNNiy1dSeNKBuk",
  "key33": "2TbExR2pzYk6CJXQwfhe1XwX4kWkkYiUSt8wEoBUzgpDKJ6aBzWiJyBMGHv9LdH7uUE9ixNchYYtRUjsEY9Bi68f",
  "key34": "4msWuqtsWAH4Z1PM6RgMwkbu5j7g3bVirQPqqx1oDcsyeqy9Ekhcg2QoUW7ZWVtW4TjVGkxwEYMRJZgRyqJMKMMC",
  "key35": "4EEPuLDuvjc1k9yPVGPBDP7vucf5HtdpnorFni5Aou2copbqibmK1sykNp3WPgnSTdCjojumebysDwUfwxdWurrK",
  "key36": "3PN9kkVT88wxeQxdUmR7eCxFWRmr7rBVbTGmReEKShxtGwpMjVj2vA6U45HWyeLzv1G6UMqhNYcmkzfWinL7kCw5",
  "key37": "64fxBdk5iN5xQgxF6JWQuC4LK1X8x39t7cSbnHCdfbG5Eur8y53rdUcdrgPiNE1mfg8GhMqg2tq9oH2C4v8nX5aa",
  "key38": "2AhSsSTMyQEV6MZNQ4PWDCwrKkP6LEPR5hmALw2q23pvw2TSk3c1uxeGx4JCMEQiSEj8LUqKcum54CjAAPXocoeL",
  "key39": "2e2gBqWVCUWJFnXkgHHGqqzHd5BDb4h17R8yFneXvFx5UkysydwAwYBTnb4zfgg4WLki7hG8a1uxUmW1vF5yKeyv",
  "key40": "5euDYcxYGQ7h6m5Kty8ELofV3agvrsN9YZXTThCgZBi14hEWUvMEmoywKUngEy2KbymyAAdoSYJLYW1LeeeyqLG1",
  "key41": "2rGRu1Urci1uXfff2HDAPP983v1JBuzSShm7kbHwa2UCQpdGJroBDLFRJi4M4fbxGtbc7kHcsWZoKPY45g4zt14w",
  "key42": "3LS4GVpqEidZidvirkBE6NPuXzExvynhCrHNvUpp4GsoxS4hCJKxd4jeDArCv2bRC2en7dCPAXwiJF3eSztxqWjh",
  "key43": "4zP3pG1VGwjHkXbKZGPyQUx35YaWib5UBgXLYkdCRsfMnLSrpvnj9PpTFzic1we45SbUDkZXQNCV36erarTUzTiy",
  "key44": "39ibN1zqu6xd1XFy3j2DZMnhCrCjC6P97QKbEAq4x4AmwxrLngTcGeeVsMh3oMUr8jP5QHMacB5yeuwnzorQdXKV",
  "key45": "ciq296wq6Twh8z55dvT1ffzwUb5mgYSnWvsRaxPRVxGVEr97duYZtRhZ7QvrWsQfJMpbCykrHoBmCsJakhz4vEi",
  "key46": "zacSER2Ngg3GdgWPrdaKPM5jdrMD6RMhYwzyJtBJ9huAr4MQmBNjGpww4oGFKdGd3dMP1tZ3AWPt7Be5Dqve5m5"
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
