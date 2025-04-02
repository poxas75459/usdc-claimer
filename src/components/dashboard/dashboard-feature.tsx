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
    "E6TuWxgMLn4NUHVpzyyMQCfsw4VbFhx92yP8SFJKumSCko5SSr8xBXa6sGPkiKi1rfWqryURm5NNiVYhjFRU8kb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5igHDHd2HwXBRXovBCXovxB8V9VSmCCjjQDSqgG2Ab4627JoMziT4BbHgHhbFzaF98WHvDWe5KRJYMx6EGkLdXJt",
  "key1": "41WaL4sT9BJzQdcPaSKBcqYNeVLsGGsQtXrGcxHgCUmmrznL26ZmT3Ufiu3gArq2uCHniHHU4kJLGyzWpEqWr5q2",
  "key2": "2mEazAavyYE2VPjsAbapXpLThxwwubiHRABT5VGyw3kqecA2pQGEbAAZNWqDjmNuUPA57yrTtSxkeGjBAV6HpHFZ",
  "key3": "4EEcT4Khv19bdNbGFiojvbBuJPTPQVjtNQUEht2p8x96cLbFxSygj9c9wsgDU2cG9TKCXZnL1BofTVUzwfp9pzSW",
  "key4": "xxREZwfgMRxbbbctDZiM2UVdGgT1MVPDp58AUb3qnovomVwhiaDn9FKzXpdXWdT4hCUpRofTPjGZCrU95E6X2Ec",
  "key5": "2hXwpWTezTaXdZNbbhe1QNmckfprbh23mA3MXUNLyNugZpiALMutz7HwBcqbSf3XSHRJRdeY18C2vctt5eRZoNXa",
  "key6": "4hExcYpmVMUvXNbUZ1q8x6fwcZF2Au41ktfzwgp3KgUNttJN1jMuQ9ppuYUiLY8m6CmUxY1w6qftmLnvNq7Bxtuy",
  "key7": "sWA8CKT6mv73mFA3XDpbL55CyjwvGaidNrDmf9b3Jb1Hz4WD9WauMMDz8UtvthnMqh7FLnwWH3UJbcWNrN7T9GS",
  "key8": "4YLzzqqXETp1FxR8cZohYneRAyMoBDTRyV1CZ1iFwgcfwHGk1Qpp5Db8ZFBr9Q6kXMuH54ZLJAq49xJFyr2rakkt",
  "key9": "2JsZDyRoFdzPzsN79bxQc4NV13Jdx88wv8smWnrUfqdNTGrG6C2kHe4dNfsNtFQgW5YvQbdpWh6a2VPTQLicgjC1",
  "key10": "22kBzNARatrdPn8GGee2JEpM9voX6pVbMvUdwNVV77R9qPzsonybDXGpkD631ZTCyscVcUSarVE3zV5JGYBJadn5",
  "key11": "5RnAf6mVXKPJZKHGhMcZnNoQwrvhtw7FNpRaHySFcKX2bZws9TAPF11YaJTNrDNovdexaUsta6QqoGJx1Kg7caHh",
  "key12": "2pJyMeKXZPcmnLMjfByBBVLLi6vig14LW1bHLNG7N3kTsGEcjGwA8nsQDEb1FgQg5tQy4J39dW7Ytyy3VmV6o9Qa",
  "key13": "5e6ox9pZEbvetrJbJadWgGUmrGfWY7FWsWgwT5sfzCq3MMi4H1gSZpyM2vnX2XLaWdQQuKGyVpw2X5T19DsZhyef",
  "key14": "5xsXyEm737VhhmePpzxEmMRzmVHWkWo9BSrLPkHsABE9yiuiLYtCqTXK7nMTzsf8sQXv7G3bUDjkkt5rDc4EnugP",
  "key15": "2w9FmBFGvr5FWxZtv8hGP1JCAJ71ewJduhpyTYYXLxFMzXJQqZU8AQCCc1k89Y76Hz6arYC8Vcjiw7vq4TvYAbrR",
  "key16": "2oB7gXGCxqBgFRkzCBdd4Lf7w2tBppCgmZq6d7zA2LeCtmU8zWPn3SNmia6NbzTYb2xoRZ4VDJwkKkrqv31Pfh4x",
  "key17": "4MHH2nwTzMTy4MQYbt8rr6MuzyJ2GSms1oxQ1wJY2zELDHg93HdGUi9C7DhVDLdG5BsVTZfVQyRP69YFnSC7h25D",
  "key18": "2YN9rDrLXDDwYgSdbLNJRue93mQu3mXNCMa232tcC132rAkExuJWiUMy2eMLwbDNVQj5BmUveTEpS7PLvGdXhpDE",
  "key19": "5N4xa1w9UbQ6aHo7PNKNPfHcehVvfcpNG6zr88Kf1fxH7Z7GhoSkoLbR6kcg6uaTDMEdiV1rEsXanWApwq3KKxfD",
  "key20": "2kAoMphPVn9i17oarcbkdMa8BYvVFBfDaTZW7kD1YdwvMciiEF2TAL6gjnYRMuamWvUiowfyowyupUesVRLENzzJ",
  "key21": "4PLiMLwkeXD9De3tVhD96DpXpMR32DxFAXGmy6cHyveUqZxeWhtBWpfTwhWQbs65kENxq2Cpc27TuvHT7obDWHgX",
  "key22": "3Qw88Zgc2TX5VXLw2BmAcDierYpAyuFc1Z7abAcqeWx6XgxYRk7QKSQn6SVrk3oLxK1tAwJMhAdrEKyuww8vzp5U",
  "key23": "49JoGVxp64pcPBjcmaErDWVCmtNH7LaEQpgWrU5mGDcn7t8sfXmKVeDDe7wgR9epvNURVRsATURfmLLS2tHN9pZC",
  "key24": "5K3H6ejNtKaJ8sBppf716eqVL5r3ZoR1rPzYf9XiQwNV6PvtT1akNMkeqmoQbS6dTThiu2WZpDYT9iFTfhAma8hv",
  "key25": "3gZMLgrrsYxFHUUNHLubRV9wC2htQNiy7fWWHvhQ4QHYxctX7NZm8h4XVT6A4FFV8sjuwWcAEUHG4eUx7ui6gbH2",
  "key26": "666US8ymujCUtS4GcXcUUU1K2nrG7V4CjxTNyXSW54hVxZUxcRNu9aioqCN9HZuf4MK13ZttKwizV16C4rNB8155",
  "key27": "zMCDpatjpnpRELGeu4ctmauEYuX65cKSWrrXR5sTLFfN5HbvPaP3SW5W8WftZWBpQVxUQ2ZFmoNQC1FzyUg9cgY",
  "key28": "5no8rf5FPaYxDxv5XDuAAR23WyiofAC74GWJxpafsWA6nUMeeMzF4hDVafufiU1PzqtXK7YDt1rj3J1FZW4VTbu9",
  "key29": "VsibqemishUUDdpvRED3fiqcLXdprXyVc48RwHPKPwPH9LBc6XyFmqjFLStLphfAeazXyQCcsyaUADbdgkySfFs",
  "key30": "2aNnPrA4KvhjQBNxHA9Sp5Db6Mdny4SAemVTwhQk2PbfPqqQXeRAXZMWAfJ2eCJTXghq9qZmLV7LhpZSws1w79Ek",
  "key31": "5YgPTjyHJv2jT1eAyaUmVTkSqaoRK9HBtVMyQseZiixNmkyoemau4EPJYk3q9JeJpDntt26vFiyaCf8LYkguTLmo",
  "key32": "26UNixV7dL8jtgKpx7PiVac2QNoHDg5rThWt537qoz9cWuhHMN6B8HbyqZC2BN1Ugw6bbmkT4QZz6Pb9X8rzysGV",
  "key33": "2s1dL4igTAFkB1kuURy3msieHs5e1HvyskqRV7hWLr4i1ppxr45bZwJ5WJzrJ7ULnBRGtzXKraMT3Yd3gDf7RYLQ",
  "key34": "2bqhyve68CgbFJcRxppJwS5zAqGv5XxcJagJckcbtGjGzNP6R5tS7JLfe2AqyP1HK9YTkK8fT23KgmQqGcDuc728",
  "key35": "5FWufBePJAwiLzc5SA3HzjauGY1p6PpLN5YuQ87212Afhe8nTAMF7PjyG5ss7dE3zFbPeyf3zXRUJniGgbbXo6QK",
  "key36": "2na2k5nWxiqpvbvuujQMeg9QqrXaA81h8jmBG33Asrqe1funfVeq72pUaM4JXxaKymRcme7YnbsrZ582w2aRy6Zj",
  "key37": "2XSJB47up2qK94CFV1mxkhpBeT6E3HafrTANQNmw8S4U1RcdAkSJEkU3qBdBLYc6EBtgNpSgLgUcqAFQRY9n6b1J",
  "key38": "3sNUR1zGvwP3mejgoSdy9pBZBDHm3xapKbK5K4iKqq9ueaVG266KS8waFTo6QrNA9M2kJUcVvP7xH7221HhLFVmG"
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
