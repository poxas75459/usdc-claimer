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
    "Eug8UYHaUb3HRjAyEJDwbvFYCfeEkXVXaYWTek3zG7TRskT2rwwXb6MwASVAiS6CYnDvG4ATF1cgyLno7vzpSUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37F52jVSPheSV5CganZH1pnQZWvs1Ji68Rno73hpUfEkNWFxjJqnhtn2w2BahZDRGztm6fHPZ8u2gNp8NuBMULqE",
  "key1": "4pwKhJiQdCJWKZxPUVMzvFyxbbu4w6CG64MmUs16hij1FCBWJLyyMedK7dggs6nHzubz1J1A65zmE41oRdRL6Yxj",
  "key2": "CccMCDE1cQeqfypUbgGd9gi9GSprBmX6m12qRp71XDbCasuGyiK5e2RWrQhbvPdBh8AXdMLW1TqpJ95ns2GfCfJ",
  "key3": "Yo7ieDkadsF2LCLJV8rdi9CcjcaxZgH7oEkugm5EmxMTd8GQyBGyoPWoB1X8trZuNKqRtqayaZ2LCSzNWEpkj9k",
  "key4": "5JEALyr96xeHixvyFbJk3Lro2GKVYtnK3hMr25y4cgUPxoBFBAb2oEiKH2c1Wv3uhAiTgSww8v42VtGDURSTz4zS",
  "key5": "4XNC3HGBLXHVmb3te5HjbUXKnkfdpix6W2DncoY789eJqpivqNAkKUBzaHtiap1TDDMLRPYUKxhy998HKW7ZaGvf",
  "key6": "LxuKGTq8qUFFBUeh6CVjEkEtNDGtnuESXBpAEA2TRjCyD4GxTmDfZDfF1Zq8yWMdcUjr4TjGtgcT9rNhqkqEECM",
  "key7": "HZbhBGDwjESTu9hxmNiqWVK2Cws2mmK6rmw3cBSmcCq6t5awNtpdg2pzBX2Po71rXsdkNEXtLrszwdwJQBzkWZi",
  "key8": "qe5PMp2r8j6tygRmBLmy5YuG9ejWXgzDtBxNG5vnRj2Sk3Ns4jwnHatBUqng3duS5ALjEbuGRBv78pcCMP8afHo",
  "key9": "2ZCNG3J1LNTYS2EVtLLPasc97WNEauu8vZHWNfWtCEQL1FvyCgNsACxhRx5yGeutxo76aJu6ppHj9P6tjmC33ozw",
  "key10": "398BevdwGhhTyiibgpfuW2bue4BNAPYMD97aLp971BtbJp8eAXgCxvBEjsyk3mRDHVPPdg1AFdY8t3WmDrsQcF5K",
  "key11": "2uYde4VHhDNdJmdpFUQxDjuFnYTgKn5mMg8ZxLA2aRuS1Z616BAcHYK9UDWBGqsHQahi2pNSrpdGRnmbhhFbyNAC",
  "key12": "3rY6yoSrG1iSJYoUvxyQxcdFpyPcXgKzU3zF7PUYjzJLoJ59LtU4p7g15nn16JbgvePE9wz1kkMDq3NHbCoTSVDR",
  "key13": "3J76kWo3E9tMoZT2H744cuo8d1XrEsAEqFqfZ33v2L2WBx8Hc8hgt7nJmkuCMxjqjnUVk8JtUL12EY3CCKA8jjMD",
  "key14": "3qkp3SUP3asGrno1gFZV2r64VhPyp5cMH58vxFv4mN3bZNv9Hrf9y9kFPCWF3CbxYXb2EdYQJtZMrB8rzS43gYXA",
  "key15": "4bgTqjxJV8Vqp35NoWh1YKjXfDHfwv8eu8iAXnXtNnZLXRbr9gJi3CbyavRkm5tqBykguwLB8ofxEC6Ljy89zCp4",
  "key16": "49euGcbhkDSmcDU4B6WHGEqJTsxhuCc1mkeSPzXzDeZkzvoBmMM2TLEYcHYcrPTFDv3ZDRSxdoUW32UWLqstdXVg",
  "key17": "3LfY56YUBfRn3BiBnQ7AMzpEWXCBEW4zAgrnQimaznuxeac5PiuhRq8wFcrVV2GC3Pu4UmuQboD8Qun5npSPe4RE",
  "key18": "2RXmkKmiodXSb9bS9NPCQpcL1ExWLiPo4yWSs4kzpygZ9jqZR3ztaPEm6n6zYmQgkavfSLZCuV62oZoWX5wA1uwm",
  "key19": "3iMmb8983rTdSAsAwGzzwQXCjee6br3AoNvHzBHYVxBjyADvgSw6gvVLfBqb759VBnMYKZ2eAnQa474cU3CShKu7",
  "key20": "2eii8XBz5hQ3Fukos58EheEwenjeJukBZamyoH1kxoop7SE249niLFBeKqVizS7WgvGYsEqEQvJEbniz7wtCkh85",
  "key21": "3W6K91wExQjfgjop3VxykQ44m6G81DKynrqGQxjDFBee7obCNMHxigMpixr8rye68DuPvkJHNKsmGyiNoBGaxoVr",
  "key22": "tS18GHAyNVKNR8s9VSWTDzXdnZsVSL6k1DqcRbiBvQba9xzudiXNqjXpRCBBJPWomScMgxuTCt4dzHvePREsdL9",
  "key23": "28rdz4czAA4Ce1igyBF5vkdfAqDzmxiCHABHFqats8A8RRBeY9HuArqtrT63axH7AjVovtQdYRySrnoocnghAEwk",
  "key24": "3ibm6yTk5k2khs3i9r5uauwJmsV3iUMvmaZ8Vu5VdTpRZJTmsAtW25ERoW5SPJeXiXEneBuSXsDMNynYmqNEMFUh",
  "key25": "3zzWrcvP5iLiAMgxdFw2ewP6bdXCYHxR68NXRsVYimfCs6KsTSzyLfFTqfj8X1ygW8JogEWnHjpP3VhTNXnkiRdi",
  "key26": "3jkpN41j3m1NYrUE7FS6iZBnSEaqjVfVDTw14oaLLshtdaWgSrq9B8QXGgGdw95LrpKPotvsK8BFQvXSG4FsuHP1",
  "key27": "2f7SG7pzvHfCNLQzNbfVdFEzEm2yBEf2izgtp6gSGAGuW39vkUGSwzYpNXZzPdBTmexw9HqTmcPk6XZS9mGn3UKt",
  "key28": "STktFGKMQLHfquVmAn1C3B9tEErnY3SgiPE1GXvV5fQVLXLV6EKxeaaf1M3Lm9Q3NFHSurhnxpEx2FBpT1mnAcX",
  "key29": "24KVAokcYbmVto1UXvS1h2UtRLqJF6iQHfgnvQWwdXm1xZ4VxutQQRDhEYXJcfvUFhHrRggNCQp9Ko8WYfK8mPDJ",
  "key30": "3NS58WpeCNRRKkwXjVrz3qVoj9VSuGo5dxpDFg99g9dCUHY9sT6yz19DuhUHFVGa6FPt6w4tTX2r1jTGkWTDwZTV",
  "key31": "2aEt6vdvXuukD7FqVmxtRZr3Tarmz1LW9imABPcbW31Y569ScTcLHmP4igr73EPsTWLwVuq2uRT1F1AoxUS1dkPW",
  "key32": "4ZonmewwYDgGEvSdvMGGJ6G8FK38LVb2xFCw3BqV4Ky36VjSoP89yackcNnQiX6Q2HV7KyxfaQiB6KhFAHLw2dQ5",
  "key33": "2v6otLeVhK3m8d7QLFfY3Rgk4cH5D11vEZReupehF27692SUij4DT2oR8nusD94eVdWdFahr4FyV5bvcBa3VGcoE",
  "key34": "23VgPdPP4DFbDKAfQ9FPV5i15sAnQuKgFbLqzwSTXEPxgpeYeMRTSsJuBxgCBngDnpLdMpJkYSQmMeZqXpx8G23E",
  "key35": "3s8VotZL8PTXrLNxfDv8FHLLBzCXeQk7Tp2csAEt1D3ccqArYe9y9RgWysDnuhbpDPws8bG4vxGevtVys5D2Qwm",
  "key36": "45azMPsQcDYGFiGJ9xHvsmhQs4n1PH9dpD42nUjR135ca4WTr3YRjHE7KRFuMVP7qkZLnGX2Ef3GiP4c3B36tjGx",
  "key37": "3EU3M9323VMD1FfqgxeENHDJjkP6i8kDYuNsmB7UQ6D2Ak9LoLT9fpHXvDb8J81DasqNwzN11kgAYELdBNAT34QB",
  "key38": "4u4eZozyq858PGfd9Zhi9WZ8qggtT4nWkYCTTCnyTkfTaJ8J7fzVkwxtRWXFAaW1Y5jvyQb3vLMp5WG9XMnUrwyy",
  "key39": "2JDkmBbjmk9AayLPJ1q5vm6BMNwqngYeUTkYexg7pmv2gXsxqDJ5JSTNiEuDBndvSjcqWCNxWLsHiKFtU25eHBpN",
  "key40": "2Sh2cxubsWyRwefFRNxsgWwztsmnvivwL6yXpFLGuzqrpR5QW2h4LTLQ2Wao8RbHs6NL3T1XFeT4yhPNMEXSV7uJ",
  "key41": "4KgxvXwUjFqXDbmaUBUrYHqaY7XEMX8rXedu4f5boMaKXvkKcrtRg4zhuz7ogxheREum6vtiLCNmZVYsjdYKH7rm",
  "key42": "2fBmx7GKgnXidgj15mAErTaAooc8D6L2eUaKw37iGHRYpq24f2jZ83RoYnccEYWHGfWCVZdy3vwZ8cDSSk9K7F77",
  "key43": "5YN9QtvcNpYhzP2Wzmu7iFKb3XcW7BXzNMAckm7FFumCuGfpkUTCm7DWNPyzcRJpbQgoUGPnWjqW3jx1kRmaxzMk",
  "key44": "45rzoz3Bv9wA9uUUgPuSzb8EAqRUdFLBV56j39gvKj8f6WtRkQkyJ1W1XsX1UHA4WQNei39CEAF1aY9KHExGHT79",
  "key45": "kftiR91oaXumRDU1LebUGEErqLVKRnVc5nhUHFgznBBBKrXdedNym6yjEThCuKibv45YkznrUXKYz71qubVx7d4",
  "key46": "o1Uxk1wfa73avLkhz7ufwmsnVgVesErVSEV38H1361sLDPTpyj8ViCU9QoHzy6tUN5Esh1HniQu9QJpFg9ZUr5Q",
  "key47": "3hC6y6YEYASxqfFYoVHQ4FAokbMs3JLfHNDEGN7CvJfTD4JGSjSqqRLML7m51vBywVdSPbmMp1nq95SUBo5aNG3r",
  "key48": "4p8WdthY1fSWnGEP2fAjRaqhm2Y5NHdMofj3hEHnGKvRgzKWmXcPCcPiC3EorYx8QgwwfPXbLYuH1a9rSTk9BzWw",
  "key49": "3GBY4D7gUHwBqEiMyWc1TimDZfR9iC9hPbwPvJcvAtxaChe3qjmewej9DscYJ2eGrJLWR3N1RjQCjyPhMzcSv4Xm"
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
