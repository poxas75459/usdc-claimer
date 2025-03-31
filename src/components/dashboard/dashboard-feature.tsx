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
    "ApyHqpHwXfGFBwmR6ffhU9pgGvHvBC7QPmJT24bEU8RJezdZsa6f4xuFJx1Q4tp6LrNYQT81z1coD5XwwG8VTZ1"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4XqR98pzRgrs6YTe9rjYAa7PAXxmmkqZ8apqeTwP29KAhjB8jQ1S2ERPntGchbHL9XwnVFELghL61rqMDawD4WQB",
  "decoyKey1": "5gSvsJsJe4AwipAVHhWYqkc6TvtQbSPPn32kAzAdSgPzTJZahvNfsYN9wyruPcXuxSij3otfrC6Cc7GRq6BEp7yt",
  "decoyKey2": "2SeRLM9Hk92KXGVRiwKt8QhXq4h7d8iHUc2iHEGQTfK6sdaXY9jsWd9L7fuHxSTmJW5pyKipJqMnz3anEdQ7gnox",
  "decoyKey3": "5Zx3kXZ3KAYWeGxYwLukL34SELKKKwToXFP8dFTPzFoBHZKGhqpFHF9mheyrLSD5e1hczSbcqxWSrTRzwT6vQ9cv",
  "decoyKey4": "XtygFAonbreDeCCwuk2tWQwj3JGKirbb1igfVxvp5KQVfmriphAkAN9Pt7XBLFTyJpo8wgkvACxgoju8LVZmVxk",
  "decoyKey5": "5ifB1P8ZQgr1MAiKzpXRXMoLb26vtp93W2QEkbsiJJb8Sh4Hp5yx1Ykqj3nzEVDwiuAcuZAzJbd1cJDs6jMZNcKg",
  "decoyKey6": "EpHeUtZGi3Z1FWb9NkwPPq2jShFJFyEbKkPP9j5kkVgAusKdykEL4w1osaCfGgqzxwMmQTb7moL4pgVqm8BR5Fq",
  "decoyKey7": "2AaU9RkcKKp72gsJTz9EoRBTqMy1Pz4d6zindUbyhSvP5oY3epDZho4gHJebCMWWccZHi2uj4vtwVz7TR2Kj5jPy",
  "decoyKey8": "45YTmYjgTY18MBNRcuWU7EDmFqWUsiCu33bbVRPnCvXYhtAAUdm3vhR8gHJ6BRwdHoBLHNCmu9Vn6ucteN6cWQkT",
  "decoyKey9": "5ifGW3MyrZCZicBGo7jr4erxNpshFudzjNsfM4jgyzVCji37iBhmwab1kJKzWmP6PfmsTajXtQns5GvFfCU1moyn",
  "decoyKey10": "3eRDAwMXTmCGNbtu4d2vwHfRDoN8ZbQziUHWP1gFdzYYX3ErxnwSdfw4gsQfjUFUSGjNYBNQQhP1D7DUA4UtXZe9",
  "decoyKey11": "2bef3rBzB6nACCwdPvUVn5MN67BNSepWKG7ChoeSh1qhpY8xMn7rqSCj3SSoYY4LaK59kBzFcfKNTLZTLV89V1fa",
  "decoyKey12": "46YWRwQmV5UoN9N7ExyreJH5S1c9M8hruqdAhujuAupjikzkgeQZRxPcG7wfAWiGx8AcfF4Qyzoh8nb2XrKcGXbd",
  "decoyKey13": "3EzYB1FxdC8qHH6hyzdPkQ9seVEzUXuhwBqj918t8y3EYkGt4z1EkMDvtmrvYqdenVivG9kTZ5Ghy4XmV1ZGxRQe",
  "decoyKey14": "5mjmRtKNnL8FnbT1vvYCg6izBtg6ECwgGMZ3WCLJCeBoz4YkN27N785SiCuyQjGBGMsfWXRLLN3kMYFJXQ9pXNt3",
  "decoyKey15": "3J8QEb1PutM2TNzcZnUdPf2t1WQic3eXW2ZQXx7CasdNDwxmdhRrPDsz3MzHtqKYBCERdWMdB9noQKiryWrWQ9rC",
  "decoyKey16": "2zioc1Mwtru7E9AFugXXoTwNDuA64GXbHKwc2t2JgRACK2wRG3rUZvqZezBouwuNAicA8eN79sFfpYbLaFRnCPU1",
  "decoyKey17": "4AAi15Je3Tic3UMn7ekrf9XLKeJbRQPTf5N6e8iPrFB7epscfnMQLzgytQAKB1ekwFQPiLZP4yM1bSzatYcykomg",
  "decoyKey18": "22hw6mhTAsrChHZJYYDWTzE3rnnwi1cBuJr3F6UwMDaEoCrzQ8s9kYNTmmrFFVJoKTjzJzBXcwXRM2NHKijPG5W8",
  "decoyKey19": "4VjfuUX9ZqmojAwJBawTBEW6zj2LcAqAmMnWWRscCc5YpKSyAXiBuspikMJbTTZgJYziPr5RBb4yH3Ghj9cLjJph",
  "decoyKey20": "3NkxLSvvsN1wmdDrnbWanS7kdE2ZgpRc2WYmZ5SwLuTeAGQ3iZzVWbNZbQwh7KbMayiparqEugR3efUmD7oBG2Uq",
  "decoyKey21": "26PoZPWmgCFvJQtsQSNEof97ULb9LaKftkiotoNMCX2pb8MjZ8sMu6iKJSRvE3ag2KJq5LYkwN7JNUbhVw7Rk5fv",
  "decoyKey22": "3NnWW77o4pSS3gKckn83btTSaikofn3gQRK8jRJfoBy3LwJewNGrFs9yr66Z9TMsN4RsJodAEtS4LbwhsrLoebDR",
  "decoyKey23": "3v27EW4bwZyjq4dLjnMRLEDpMFopzTosq4UdKBtAmtT1GG9FQmqT6585cNnQXxFULZynyPTYtyFUHQKbw26ejNGo",
  "decoyKey24": "2ypqr2L97by17zsVEovJ1r1jdL9vbBnoaMbLbjYX36HUGdsHx5uBQSik28Zmr5hVDyJHM3LJSmYsNr8Af3bmtxD",
  "decoyKey25": "511WwE1XXvaUdLzM7fyE7m6kei282n1R4xSTRGeUTyqoLQM4aL7xU1iFKpUHREcAw9xqtaKKK8WHcGoR4xCTVsxQ",
  "decoyKey26": "5A2FyeqaKt95Ut3xyTCxGoyHANvcox9JkkJG8sL4ufRLVxDoSxubnA7TudtcKyNBPF2cAMBm5eo8B9KTB8e6TXnA",
  "decoyKey27": "2ugtreoB7H6mUn46RVDiWBKx5TsPRA6QCCS9bHnNxHm9yQU2tK3XmuyjcXW7mDDhFiMtTvsGS6pjysWjXn1VxWHG",
  "decoyKey28": "WpRdBGWVwQCHCN6jas8VYsMLXmNYpRJi58DuCUa3tbn9XmbM2xV3HfvKZiLMZYW4VVxDwSbJcs7yVmgSv1iZK1S",
  "decoyKey29": "38wuWjC9aNDgzXVJVXmcV3PiYQ2aVKsg7bbLtpRbo87HaTwGs5NVjCEdyrrVzYyyVT1pDLvqqinx4SprM2KUai8",
  "decoyKey30": "5qd9Hfc6q8hDPsrRjUEAoS2KQ8CSvK2HghCC2rstm3Vw6jmhcXyfmBwNFucavvqmivbRbddz5VYLJqrqN5w8Ecav",
  "decoyKey31": "4yUCc6aicaZacDYdhnettJPLqSB94KnJTMJxyX7KxSwPiLXBcWhkSWHzW1caD7PAo5ETijnAqsP45yjxt1WHwed3",
  "decoyKey32": "35Aybh1ft61b5er4Nd8pC81gtnYkmgzjj48KfA1spLipmXg9HiypZiNA5z9GdrFifANPpu7v5vrhQZp2kCTXk8dy",
  "decoyKey33": "5RGvWdXeLzPiACT58hcHKsxTTw4yd1qaqBU3qQyDotS3uWDNnnKNiXSmu7VxcVUJc9iN9bYmhVqvnD56SW1q6uXZ",
  "decoyKey34": "35zokGHyDaDM6jvxwspW5pDCJzMtCKCYoqiqrS8Yg1JBaMbzP6dyV7823uFg7qzjv56BHR19Hke6bULUkMFzdVA2"
};
// DECOY_KEYS_END
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