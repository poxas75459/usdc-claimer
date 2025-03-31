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
    "2QeFV8PoEFRS5mT8TUNwEJVV6oVa12qp1JrKzzUBnAkdjmfiq6fF5rZ8Saf2C9fNJtoMqyZaFjyhJjNAXWsnEzhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Stwtf7cwEbs9LCJNj87JQDSxXs2XdTQKMaauTJmNbnWds9b1xXeFrZbFbaCRPMJuJvJ8qVEHkYcx8KiqV2naToC",
  "key1": "kNQjWqe1aPM53BrTjd8xuenyzwsd6c2eQYacL6HmBYcVXTCA2KxZPMVFy9cXcS9SVXJ7Rm2ypZtPwbw5xo8E2WL",
  "key2": "5ozDGgyvuaPQ3YeTwHeStsaNwQ1mv4jijMXi83z2S7pStcmc6T8ZVPW1zV8paz19WUkp9WSipfk2XYKBkQRBsJUn",
  "key3": "ZGWaTUfW6xMs5zo7p3YCQ13eemNpcAULeYaSGfuS2ZN47MPg7oGSUGxABYrGbsmUrbkmv4uA4xpWo1nPir9R9Fg",
  "key4": "2fcjs93tbB8V4K1jsQj6Yd5WL9buMiLVAzi9grqQgQ2xtczGn9zXeNp2V8ZbcLDqejds2dY68kx2a5t9dy5BLvNK",
  "key5": "w5z2j1yN6aLC2JNFUMCYhtc9WgwEvym8GMuW3paY1PsL2W97TYiVDtMiU9CV6K47iXZTQER3TWboxBt3faozNjs",
  "key6": "445iBLgJ1kBEJFQKyKxi7x6TiQq69UCEpsgZQA23DWDMuHRbc2bBcAythhZr7SxwXKYEsyN3D4bq1ETJYFxkBMAd",
  "key7": "3GrSgLBWLaDPBBZLfZqc1vmKf1FXHjwC922Ex6J5Lk4AifEAqtmeRKJp5D5jHm8yoQcKSGSAR3cq4fe77DTiCXAo",
  "key8": "4CLub9b89z2yLf7qP5yhVHrfBggY5oyoG7Ac2GR4555cqkSf9K7psvQmf5wh9qX4JqAYogDZA4a85CAtLThBAXfX",
  "key9": "yyyjdHpTAZMwbFx3mCUm8L7DhVnU6FSA86MwW1pKx7WVVVaZfHYVjpLRCx7xf3a7XPQVj7H2bFxYQntFvJ2cJwf",
  "key10": "2r88VbboSKT7ZSoK7X6wKNc6344VcWanRxEGGSmp1QzcYcXQTSKKJSQ9YSZSrxM7Hw5H9UvE4tyNHfXU7Gz5xyyK",
  "key11": "4rnzMPovsKanRuJSyT8hcjxWgaFAabhjL2RAcdQkxcKjsdrugK1F2DQgY8CcdJKoguixTLEdQ4nmgW2HDVjKVPqm",
  "key12": "4MYzTGMTU9GKcagfDY5Ac9DLsxuSHrd5U4HD6t8oRM7yf7FbyvzFoSHk1w4SSQxyGwvEmoeVWAenwMhBrzqKwyy3",
  "key13": "2c4sShscS4oWFtMwpgXkfVWMd6PnZfFEHwTKivup9p6A8L3AL8ihYeaEbgPV5tixRYKNVeF4x3JE1vHpRcF8AzMc",
  "key14": "57imBjFSXn4LjJ58icX4TgB4aRBkKCci7NqAdTLMZWjHpqMPqKcyZqZDxzfjxrwEFiBdL2G4kc8nxYFSLUBRxELN",
  "key15": "4NT8PeiLj66otbPT6BFK2GUrTUDxMY85Rkc47ycFkZCMjxZwF84qWs9MVgdftFxbSDp73EczAFHg2b7Dicob6eAg",
  "key16": "BkhdiD7BEwfB2D3asAhwZRE7uDBj6soXneC2rFUArRVTVPuhXrfc6JytvLDPSBGqPtjpYTqWwoD4aNBBLEEY3rT",
  "key17": "48n47tXJQRL1aHjqkLyCghdkT1uFophGP9xQVkseLXtFHUZaPEvt1DMbevzadpn32ZLwAYChNfMLfC5EsRGmeTNM",
  "key18": "2snwUmEKB15guPYWFcYn4RjvATGRHTNHmn23VUp7owfmphBY43W5Q4qYRg8FFpRF7o98S1m3rWHAg5wA9Ags6VGg",
  "key19": "5FnMmt2PFDxJNnsEikWN8p565ksNsRPgmjYvXe6KN4etm2LDfXrwGRLgJgEnXmtppgKG1M4BLkPCA4jTK1xLiJJW",
  "key20": "2TjHfwKg5ytRSa6KJkosxE9ztNkJfKwC5aeHpgbKTiGMDMp72YZsVxwqSoDhHUcVznDY2xLuzPSyaFEjnGjQqs2e",
  "key21": "3b74Z649SVqMwXF3tFjK6xbRpQqg8RqWi5HXWUtNAWneiPvUvaBxodevP5CciA9G59WtfczGtaySehSCkVvGLspn",
  "key22": "64TFvkeNAfeBraSm8L1aYCACysHmMhAgJeq1BE9Dd8XuuEoeu14VheNfV3qHGfEKDg8M6TwXC9Yswhj35eVfDCsr",
  "key23": "5cJYXgQCD2GckbVKf4H1T92p8Ypjzs3MmS5DEUDToU7jpb1SMGDotdS5JFWC3UKQgAeF2uLcGhCtC6TVyfKJyHpY",
  "key24": "dwSda8XMaPRa3abC6t35zW1kuoAYZV2VoQuAFN6ycMvHLzMCRVRvtCYsM1Y1x9gQi6gppNsrRSStnrYaedbKYuZ",
  "key25": "2Pe2m8givFA8r9hf96sNRMrX7dKhAc95o7CcpqUzWEo161ekUa8awdt8bmewaefFSR1V6TBsaSWAWnonKw12DJwZ",
  "key26": "2HDRb1CgNfxTXCuZ82kA7p5sKBY8J9LC6J4qFDsHDpefQ1YkqN9A9ZoyM6QiNHAvr4XAHKyA9ebHGYueNsSejyn7",
  "key27": "5mNhepGS3f7kBD4Q56gAdpgZ1t7jbi44ZGW6oAnujfaGDdhTb447jVDujpV7ypQdBKKxKFNnL6NfN2mjT72Tsop7",
  "key28": "4fLG6mnpoSwYGwuoDXt9u9Q1izBYXjtQ8yX5hjaAdWZkztXVvjDAB4togbffgWMTRvzpmbohF4UtqjhQUkHwzo9X",
  "key29": "2Cfxj5MeRSdFQztQbQTThRyt1cz4jWYprrwNmwWnQyx2qR1bKzqR2UeNBAN57kVSe54t2x5f87Hu1M13BGLaNNWj",
  "key30": "3JspzZLJBbRej12vbfStaruqANS4xoAgVLYoZCjrQtYQKYHMcJtsuuuGNYjZgwJ5WJXXcF5eDQAdAx4US9FK7nbb",
  "key31": "4RRBQsWDBtGtF7r266BgG15LNZDBGTBRPAjDARmmgQFzaag9JTLfoofgv4xUFXJzijzuaXgcoB53MzHudSBY22c5",
  "key32": "5PTiXtrw4NEaFkYt7rcG32XyarDEMz7r5MSjr37R9sbxhLkRARPsnRqnJz4SWkautd5kMt1shBCBDZpcSL8GiZ6N",
  "key33": "3Vdyrv1p5uTpJFGUWLqWb6tHwDf9geTB1RiKUy3cgi9WkWqCj4RWg7GwKhNtEpLzn4Lu6sBhMHjJzPWRkzAAqmPZ",
  "key34": "fpuFTWkobivh63HiJD3A2zeUtKuUs2AYmbR7SftK4bFd655FKu396qeSiHkkRVxBBmWGNZyRGErjZWgNxvejeDv",
  "key35": "tDK5jfdcHnfQAg5kr9GzeByiKmSFL9btEW7K2XB94odNVL9sNduieRpwHEXPJGNi39y46Hvvm3oaYZWyZuhsmKN",
  "key36": "5qj7NGr72TfjNxoRuZQYyuNrFvQ592wyR1ZsJrqXLJTTdQ8RLkXQsouZT5VSeNRfFh25Uhn8XdGjKhb5vxPVLs6W",
  "key37": "3t9Xj5ivaDAxAJCycWFmeKnPyuWj4pmg6SDEbk5BkK5UWxNw1Ba7PFJF72GpeyGSg15ZLNM5hywCkTjws2dmo77L",
  "key38": "2WEeZQYdJUActLcnoaE8ZTgRPYEmhLNVAUnn2rgamYXDcohc6Tk2AUzqM5aGeFqfHBQGgLwG3dia1seuaZMXSr1X",
  "key39": "3Q26pr8mqpEMn58LYm67YtqwkbHMwk85dx552YcFRPgCFaTcbuPnUvcBfrnm1JNGvvTw5BTgsLpnFsp6ZBZndyA9",
  "key40": "umcJuNyXTj1Zmc6QRhm89ZNoRS35BQAGoijPeLYS4JgP4AEm1dMd4GzvdfvVgapqtjdYbrS17vs7Yzv13CHmrxt",
  "key41": "3omREZZDDiPwCZ8hi2GaU8PsByLSKYYVbLcR9Di4DoqwzZKURK7cyF4S26L1KWZyDeNWkUaXSog5rzrnzrAxE1wf"
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
