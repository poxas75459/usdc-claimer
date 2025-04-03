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
    "w9gywEzgYe7AYsq2w3jjsiUUFYjatS3Z73SAo6DvDbjp6orUkpKHN8AAP38FGHGcTSmMnNSmNdtsjEDaVR2K1d8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LBzCZPF2GzXuAjWwN4kPBivFnKT7tLntn7PeKMKXUYK3jtu7WxQ9rufjC4EvTJVaHb6118xeYbxjjs7aMdwLkWW",
  "key1": "3u2M2haJBLkv3uvcA9rdnrFvB51DnLACG5SjyqwqXGrSKTH4qHJpVBiqV7TbrAaKtFEvUdb5RRyNb7DwReq33u3P",
  "key2": "42mgCpieXjBF2WCkpu3maqreFpf6KancdzpP3n8efnYGoA7TpxvhKS7okQeztvGhjhSXNrZd5jLHRevHef6iDcVN",
  "key3": "4WEhXEeSqQYtMSNuHbu8hB1rrXLLqc6RZGafYxymkzqU11paoHxmTvfTw1UBzAPutpJ7d3n5EtJssVASzPXqxvS5",
  "key4": "4B8zLuidAiuMSiasxRuX9sNSCKjXcGqLgS9VtEvjAEGscb6ABUymNnBDmdnDGQnAHi16hz1ZmnihfeLPmq9AEqVX",
  "key5": "4ZEpds6peNQtRdRWd32jNKEEk7ENoswupTmzL7TU4js8AEZujhfTCYwom16hRPLHfuCwpxpfmuEUBB2bQ2qA4ZEb",
  "key6": "4kKkJmKBPXJnNPXJSiR5frjaowj1PE7DEWPhNH1fVGiyjEotRFEfeYbSuxC54KFaoynEyv823hVY5cFyAErD6ZP4",
  "key7": "5TFX1iRa3MXtJYKLDFGYjn7e7u9zfsSCA7UJc8ZiA2eJpZ8ndDUvdx7YaV5ZpcRVSTaAijn3mdT2DQBChkV18xna",
  "key8": "5y1CuEfEpJDSorBV87g59qyX5JAdLaDiwsAfXDLAXyseEbvtY4279TQyXmPbGKwJ4dLZz8q65GRqQTf8du6mqqxN",
  "key9": "5WXFgVEAjNcXbTaQkoM5JM6aU91bm9rURrDPmwxyy26birey8ZkPWATc7u5aq7imPoogEvnPgRM7uALS4J8FW7tz",
  "key10": "43eraZQwREdhX4kTdWQ1yeoiQSxMGawQ8wTkuLvnMxExJwK9J9fyyJokLP4qbspmykLQVqeizGFaBY4QFCfxBxtR",
  "key11": "5M3cixKPJokRfmS3J6eLbAqrb7bUigwZKoaSFXuMVTroWSYzBChTbF4RUADZjMNtActtiMYhNU5iHewvbULb6Wwo",
  "key12": "2uZFbDRAxq7Rrbcnra6CayJNsuim4JUa1Kaf1Wrat3D4bAaiLyb1qzix8QoQ9SdH8gtn7omoxkjdvps9QrpJrKt9",
  "key13": "5AREHWZu2KHufvb3JQoqwCNdRB47JCXs428dy2yazGfDSyq7g7T6LdnKohNrnNpRfW1zFYHtniTpBF9QrdMGzDsi",
  "key14": "5ZimeQtDASK3RFMzqMcZev2xpkA2tQdNB1NqK3XrLuZpKSmiphcSWSEiWhiPiAxGubEvdfqugXBkC62P1XBza4RP",
  "key15": "NSJrGvzU1cdira5Y4q4q4VvBAh3wxwHZDiSK8Zq8kbvV4JbFfyiGEQszAMvLhYZEJEtoFK8Xntv4ykhkrVppRpo",
  "key16": "4M5X6HigZCZLjgU8mCUfZLMiUdvqVpXWczNogYNR3Pod6ALr1L6DLr6UeF8CUqQ8venBYng92r3tNaX6PbuTLYY7",
  "key17": "p3jszYLAwYtH9ELPMdbBYuFCgr79szvT47KHigGURg4fXeKnKBxC8V9zgqXNsP6fa5udjEf7VniuKKLe8VrJkHH",
  "key18": "44y429MeLZAcGNG9PBT37cJb6k8gtfqbQY6Ye4UCdKWebfCoEVo6wiErBhvCgShCTdbbadAqCk1iorxtKk3f1UP6",
  "key19": "C7v3ddSu4i2iwCnE9WP4bD8K8GW635yTvQwFwihiQKEf8iE6itdhdCJpkvRZRxuHtbZtXfoC9tycRSCCgYEN1AU",
  "key20": "3PpnqBbRpHsHuddBQhwii2djfuYSXaiRq1aKZN8CvKJBWvGvh8Y7J6dwTQj2gUdTLKAqME5eEqf8kdGasZ3pi3vB",
  "key21": "63HPS7EfWnfC43tyj2aqKn9DGGs9a3kPth1jv2VviPgqVis9b7zcncfXnAUXVKyB413f7edFBJSp9mZuvCt1XVSy",
  "key22": "SUwGdN3H2WinuXxSbnPaKTz3u2daqTWKwVsZugXtQeUqLrkk63wsgFEBqct7W2AjB16AKrzGoYTaQUSASmwXwTH",
  "key23": "3wy6P49MCztGUNmXAGS3Q1pg2VRMv5o679Aa8CeoyiU8Q5gjmQ9CuEXCVx34zLHxhjHhmnbaFWyqys99EcLujY9b",
  "key24": "3W36hazNABsvsjbuhkTpVDtf5AtLNH9tb8D2xUt7qZkv8G5vWa5UmWQVTBXvK9DqeJppSW18V9jdr5ExsG4w6ZG1",
  "key25": "oxGmoSg54u2Tx1NHhmQtGB5kfwAPeoby1z4MayhJiGr9KN8gMng7w7HWHg9fk8XvghLM679T6rPekdReDv4b8UJ",
  "key26": "wkPEyZUt8j1G1uMAXzt8Lxh7pwghf9rpzTpVctx2jaVTSP1suDUDGrTLXGbu2YtShEzB9GTixHZoQoh4eKUrvGN",
  "key27": "45R6AxHLnyaRZYTE8mHh6AUNNnLPi5Kw6Y1Z8u2GqLL2QjyBhXUnYUe8ikn6rJRhEQJ5mGGZ1vWm5TTpsJnfK4ta",
  "key28": "4hAUooLEJJqM6hm8PtMi4qb5FMrdXYYbmUMMF7e89FhAWPWbQo6BHtkB4ZouX6F3cr8eCxf9f31z7wQK3xJkwAo8",
  "key29": "4qFomc2ZCXUXEQmDUAqqMmWuRaGL9wAWgsHSyZ61q3AnCebBuLsJUoaUn1Y6iKMRS4sTBcbGjBvrJudWRUqSz8KY",
  "key30": "5pa1xQR8K9XsXT6DfyKNSQDhFi7DYxtKyZAmT19a2naUcU4gbvikZU416sQD88KPtMDrfHHHVvdMcjDY6dkjjwnz",
  "key31": "R3yut6PpuFg7q8TMTVCRoq9H2ocRFmapTxyNqSf8Vxk6HqoRxBu9j7zq1kDJqNzKK17u7nDCy4VVSQmohBoDTip",
  "key32": "HQ5kaBK9Mb8oNkVz5wsHo6pE6ctXoMpehBUenGGVM1M65NAGXiGaAFgtvwRt3CWESUnAsEtvUBpmudCZFBKVnEk"
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
