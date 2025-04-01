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
    "2ydkNTFL54szrTSfPDNst4Rk8eMZKCQvMGG8DSNzKdMTvDbx2We1vqpRuFZBUyPq2xR8YVsL6vfiMxXxWrUiiav5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y3hSTP5CZf3M8vNBLW2tqD6MNMqwBhVP7AYuY6ZyTRwUfcv9YcifXGUiE9QtN8gPiukRkW2sXRZ8zgaqZRNQsc",
  "key1": "4GGHavidXpen6AcvLC2oj3jJs4ejCgbCPFhiv9sKcHMYikC38GKP1y8XJVnJmh2AKDVfaChMc1HLZmYK2t4nA1y8",
  "key2": "4tApYfMiREpsvwmhkesvCuHxk7BBDawhSWNbmRchFRmBPkMbwr8zFVNiXigd49DCHtKWdjrPHvTFo9Duyux6Dy2M",
  "key3": "yi6rauEmjaDJdjVGbso85CcyKP6dC956v2e4uJsdpyB3pv1mv44C4Vya7vVYhmdd6iemajpQkBoiEwBjp4d6VvE",
  "key4": "4ubpsnqy9Sh4VRE4swJn5auD49JbQusNmqDVAy1nzeKTfG6iG49Qg2PScAkLeHgo9LodFhXCFfZYPvHj3CxfN2RL",
  "key5": "2njbnnaAXf93nmF1Mr2YSjDJJz9ws82qMKauYRNU2XqdXnjteGqm1FMeYvY3xAkw4EZP7BKwmyvaKRuf8zVafP75",
  "key6": "4C3fXYTaRT8QxwKddk3XyohfRJDGcjbtBMA8nv2eJwVKU926TRvsCs4BcaRud8znro6XDnh5CiVKNQHbKoBFCP72",
  "key7": "ZBqh9mR2VbXu2KAYjPfAZvRFJ9SnobY44rKc8GPNTAtrsRP9hdWB9TKpWsMJ2Y3dnvMR5tiD6gw9c7QXtFGkKpr",
  "key8": "3pgJ5XiNvMr3bkVouNZruiTdTEnpqgCFaxBQSkPnjEZ3A7FWeLknAf397C8aQJkjLQqaTrAYVLALGPBxKvepFXus",
  "key9": "2X7wLicAeneQzxDi9z6cvziJeLWkpPVGTfM3o5k2bEJpKauvSwvQyfNMAJqJyDkHwbPfytH3HowAzbHxPfEcbi8C",
  "key10": "53YR254w8di7xGMZ6SMMbivHnELmMY3XLZrvMY7JvMvMXk9kEEEo4H7bFVpBA1tSVQWKAK2GkB3pWDPmYTyrbftc",
  "key11": "2yFAwQiWUNdkZfpj17Pm6sCbt6YFdGKj9qUkREJeh3XWRMvNLv6ANQRsB2znhufNa8oGdikukNdPXe1CtjpfTLhZ",
  "key12": "2r3Tx4vgdLXjDcCUvabMxNwYFm5Q9R24y3BnZV2tugdLGZHLF53wQ1Dr3nFeyBXSHohxFnkFpRxzLnKRy7rD71kk",
  "key13": "5wU5pWrgTxBuJ71eLhqsFy7buukCKAMXJb6yjnK5HRQ61TJpyjsu2n4koNkZKWuJpFip6zzhvQHZnA7kcJER77qH",
  "key14": "3E5LhPwFtQi4LrBMK5QqsTMcoH29ewyoJJHspSMUq7bfV3CZbC7Gzw5XB4yHN7oWKGYqAHLyuBsouTygMRnZAdW4",
  "key15": "5ZDiC3SRHaMHrWeGE7Zw3qphrt5AHS8pcFChmkd528QXXJHZY6TZ68cMb2CmQvndfKTdKiJ5KazWCNWa8fuvaWJu",
  "key16": "2Tenzw7GE1LHQQLk1CoyoqiCkneYKxTQyWn4soe3FeJ8C9RwFbDzDHidQekGG7w22tX1VT3wrBCquEDj3ZXPaUDt",
  "key17": "46iDvqwq6QW1oa96micaL3vn21fZum6kV4J9HxV6jFRXUB9jtjyLcbJssao1nGN5k7cNxm1zyTF7QDVcxrYqKojf",
  "key18": "wo5xxTTWSqM1xNudJa926scqYVFAXwf9xiki454fpza9t8Hgo84nitUNZsNwo3jz8FFBNEqcDwCSBzvumPg2yF7",
  "key19": "5E9iutZBFkGU49pQU2VhZJDvpoJP6vrN2VA7MndvnWFqPLSsfu1gvx8sE6sEq6pFZ4yhN4BTKqFcMe7uT3KdTf8H",
  "key20": "389fZ6sW79FQMXXn92kt3JJVZr9XSUWScuv5w6ofxYzUKyn7itfkeeDQziZUEdfioJMqCzQRDfRngkHtbrikFZcb",
  "key21": "3f2eQbJ6QeF2SuiDxew5eNgJDUiBSvSMLqWoRuDsoHY8poTYyufH1uHEPRBeivN87R1uh8i1F41CwSDhPhxWiRgC",
  "key22": "353wSxh5oL3RwoVLYPJVtGspgSefJs9Y1hqH2tX1e3hH3q3TXSacJXr4QHvNdLL1bo68myoBCyNtbf6nrMUfth6Y",
  "key23": "5W4SA1PK6Shn85W1m3nTJFryuNXmQPJnHkgGsbSuBZyHVhJL4LoPHGApZmZBRaS6toQrKcs2hnbSQNikJsA1JZnd",
  "key24": "4gUbAknQFUo2zfC24QDuvK2MNAPedJeTM27XsS2F4XLjCmWHMyr35aZKiPgSW6eixsUxkqtK2i1tPbfnAqHQxMNx",
  "key25": "4c4NEPNG4Trw9nULFJwSj6AeRMwGs1oU7YiVCLdrJD3RpNizfxkbkujXT7adxKuv91HcRCrHYv36bsvEaVzS8VsP",
  "key26": "y6abXeqczamUt3SRqinyJgtYNtzCt5xkY5W9T9sCwSiM73mhqKsRoi7Sp93oWHC1edY2xxFmrKKNjZ7oF6nnAcd",
  "key27": "SvkYWZvBkEy317U8JVGC7PtzhFy6L5u28GyVJMtpqKmLPYSpsvM88AEBMzdJq9Fv7aJLpQspag5N5u6yac1kBCv",
  "key28": "4DnjCLTjpHG2ouRn6hRihp7yHP2ruZG7uMtugmXi9QkSTV6Av2wPnd3nackWPHtGx6YoYneof6i4VY9wGWn7VYpT",
  "key29": "3XHgC4Goz65e6qqQcdnnabA5S9ymYRmzUcE8k6Az7BhbENBQYF6EmbxdA6wRteYmji29rnBuYPE71fGsz7eeiMpV",
  "key30": "5pgMH9pFmTbtMbQ8AEhAf6DZAmacKw4Fyjjrq1vM8mE1PVD7PgVhaiwTaKjw5xA3vJE2W4A3Qg1HbfVesHH9N9UC",
  "key31": "4D74LN2VVKCgCgc7SKHdemePpYSBjvt6krWWQsMwm61NnDueqCfwMQzZdQvmSZkqi429PadvZdcnLEXSeZAFRPjV",
  "key32": "27ZUgZpFWZbh2Jsq3so6yxruGdQdBdUbadsXhUXaZo6N6bMQrmudYMULjT1es5GmBUBunur46FSJhgWi3KBMPBmH",
  "key33": "2fB9LsxYMT5HrtEwexDJhq7fTrLsH3xb4C9bQE46foCHVz4cxozfn158QPiKdEAvqcicPAxudHXwz24Secjwhs4H",
  "key34": "4sa2PCbnXTaUW9M1eGwfupE6YttihESdaaZRv7DsCJDWrF6eS5ono6XiTBG1Vz9SKS9JRL3toh44A9LQD1ginLBG",
  "key35": "4zmXgZCHNWZbNTDbxFFySMwZwkQMk3aFsAJt58kebiLUwPMdSv6w4seBE7p3ZQSwnVqnHcyWDdUKkydQr3JsW8iX",
  "key36": "5QVhmhpgddqVfZHa8H5Xdieo4qRbtrqgnZbEunvpF484naAdT7fmQ9ZZpkHMEZXXbePzjyU2LxvDuVU5yxVbKB71",
  "key37": "2MCYhvcVeC67bL99Y8aTXgw9ZUKP1sGdQxyRsQQAvUe69fzsNg645qCzMoHXnGKdGFkHzNpxT2vdGgrsQTWEAzRf",
  "key38": "37qKAEAMAtATZWYPTXgLCvxNtD8kG61vWxq5WcfrsYsXoJ7Tc5wbc7tjLPnGpexSfB3nqQjQ7w8mnEL9Nc8bcU3p",
  "key39": "3AXE2ikCfsxvD2Yvcn2ASJPm1sD5iWK9wTSFTAWhAVssXGC4PxshG5YEpztxHCjRPf2EDoPB3m3XCFSfzJkE6XHf"
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
