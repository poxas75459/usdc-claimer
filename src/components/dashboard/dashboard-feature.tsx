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
    "g61Ebqk7AWVoQsgGv5FNPg9jkHZoYtuRkuakTzsFso9pHB4cMM5E8SjP9sHaWfy9LRz5NJeA7UwvmtMoF3Wg9Ln"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4fdXPe9BdaFKj9egCW8WZKdtxvFUPRmhGZ2huJ9q6fgfEbuj7cqDT6aYbpQwRRWNsjmatNzcoR5VPgs6zHyXN9qZ",
  "decoyKey1": "4Pskj23NANkL7ddVgW3iRf3TMWjMXZXcWscMYkwmpvk1GpbPXk3cQWnXnJNCbk55NPKo8srKF5jiegXs4SxSpwvv",
  "decoyKey2": "58tiE7Ta2gkCJv8R7d31C68zqVPxFcjaHdDhvCUibWNiaYDzGw27w1feMZMPzz8SPjVFyhjcTrK4eKqVGN2b9MqC",
  "decoyKey3": "4cbD4JvaJ6UP9ySrLr2dBajq9vMJSKqkxncSYpjRfptAZCw3Aqf62jnSxLTMvfoPDddKeXqU4frLWttphdptN4za",
  "decoyKey4": "2JSW3K1j28LVbeNMT2Y7uURSWVPbMDAr4SWha9hxwckHWRDsnrrpSJFwwzYFsZxsdB94T4brno8SujvzGmcS3Nnw",
  "decoyKey5": "2m4VhEoKzC6v87UkkvGaXTdHS8GFqSxX66CPvXhpUutnZtJoXu8UWiMDLo6DBKtcT7KN1EXUM845djtpiDtjNH7x",
  "decoyKey6": "5yyDaojvkYFYMXjPd5YMd9ArZwyvLyVeRPpNgBWzu3yxZT5Y4QWvRUXzTSgfpUVPwUXwuExJzSYhn9foQuKEZpnu",
  "decoyKey7": "59L4RZZQRyr6RCwVu4SKS4jbyQ29hrFVj8ZQPKy2pF2HyfB5Vvhrqxrqi4ZvyGV7JBmeAu2TxC2DaEg7DBcrxp86",
  "decoyKey8": "kHQeLrfPpwkxxoX1VKkGZ4RvgJkvxb3Rg3NrMu8JbRou5jyu4FtC9po7RdokYXBmHzgJjrm5nf2PdmjH3bEgxna",
  "decoyKey9": "64cbQpVizopbtK4kMtFN5UnLUFeAiFyu7FP5DmHaPp7m7mdD6x36SFXmhA3aPUb92PyhyhqCzjHMy9tvqEnsW9MH",
  "decoyKey10": "2UUA4bLk9h8EqMPxk9hXoChpm2c9fjau7tGC8cRjwcNwV4EwbDHSkFJRUaHqxkuRorarTg2rsWnfGGBzzdVXvopr",
  "decoyKey11": "2f4gwaP1jPfJuvW51NMTdZcomM2aXKin9ELwY5fzZax284xYCbxj6HJ46wdG2jcbHNeikRmZBMAAAzjxGeZSACKr",
  "decoyKey12": "4vSydxaSVgukNw9fLsfpDRLdvAjLzi9hetZUy3J4WQfuFCeS4vE2VYH2RZuf8XuSayRUghAYt692Ch1eizZByxxf",
  "decoyKey13": "2DDMa7EFfvFuKAPHfe1PSNvcRyNYyjY3QkCSvRpVdY7ALozSyVZPbUpvPYpcDYrN8RYmvMhfAWsJ4cW4jL9HHT5z",
  "decoyKey14": "3VetpVPiSf8QSaL7CCTe5MhKvPFcrXBntoBZkqD3xZYS6XsDA41GQPKC9THTn4TfN1bETfLCPyJiEwo7ZVVrW6HB",
  "decoyKey15": "UBNak7V9ZZvPe4ntEXyA2rKYgkUCTVvgVQTtiyvFfKcCJG4rqHBnMj5oiYFC2b66mPtxiwNTVzvayjvWj5aqny3",
  "decoyKey16": "56JRQ1uhnYewSbfb5buaxx9Px9cVkxY9mgP6JBLdN2PD9qKzpuewET9Gr6gJ75tMGoQeY1h5RVt22WBsnrPH6ZMU",
  "decoyKey17": "2dK8xAnRueBT1qWoP3JGv92PcQgyMMVrqzyiLkFYh4B5SPB31WU6CHrJqLafVSg3r6SqbAraqa5rZmQBfFf3UGpY",
  "decoyKey18": "4pcJGQEN8pVbbwHSgfJa3q2HPWqb3iztgRUxG1FgwSFjxZ8NHs35eyQ8qqvi3HTXBFNBWNviDSsVQWQ9D5fT82BC",
  "decoyKey19": "4BCXRhiEXxiJJLh8ErQzBYECSMfctZFWwEETjZymxpJtmxK6QE9KFNvsh1qhSS8C9DnCm6S1rKDHWGSED4q86AFn",
  "decoyKey20": "2bSCMLsDZ2Nnk9bb4RoPVzeRDv8v4TysHYAu2AApsHxF5DZjp9pfTVcZBLkHA6F3my5z6iyeMR6CLKVxKSHoqyoK",
  "decoyKey21": "46fbuAywCzMbvjkU4sNHyjXwvjgcHnaEemgVHKCfz2uxWQAoyEw17ak1AvG96q4wijvTMT1MNZRuHmFj1c39QUjM",
  "decoyKey22": "3wTQh5EGwmix7VmsUnkjzcDUByWrbZoR4DobR398VSybR76KByjdcyvtzKEYFgqFmMED4pQE2ZbbKRrhVkvBs9of",
  "decoyKey23": "2EppxxdVFZZoZGPviCMFy8X2orDj81y7LTAJmQpidGoMuxRTAPbGqn5Y1VZHqvmGmujtvurN35PGhvjAJD4D5a54",
  "decoyKey24": "558WWWD2596ZKbkNreJGXSfuCG96EEHQRpojQoX5U2MTpZHcnVsZEVSB5w3efNpmyf9cfnXrDyJLVJnJtA71oHSP",
  "decoyKey25": "4typsp2nDku6jhV8v1dwNbFmWdeJRXzdtYChy5m6WgSgb2Yrc8qoKU1ue8t7tKZMHUR7kT1tLpWYbB3W7YuVKwYd",
  "decoyKey26": "3AM7nv2eX4TRyX2EeL3dCx6JjZNHk9oNjkcSgfQrZMg4RYiuQBL3fBpS9whBHHVLgK4jxX9rpEp5khvMKpgqN8n5",
  "decoyKey27": "3Jxv7Y3N3MwDjniCqsc8kknBJHAoCpXuvczTtMAswzfJjGYpBmGjNU1uVktiip1XvhsJTNe7xVEdwTR3G8NBsVsL",
  "decoyKey28": "4vdtrmjMJ4LamDTbkr9pV1BhfVgVw8p5BiT8zeZiHFYFd6KJaQE7YjgM9DC69sMtYLmNYFarki5Y9KK3S1ZDozyT",
  "decoyKey29": "5pR1b3gSPn6gKv5e9gKHSn4EMdYN76dMa5zHup9PuduNJYv29rdpbeofVz25MJW7nF4Fv8GGnhTPucyzfFpn5uG2",
  "decoyKey30": "3kKc8FafMavkdPvb5pdsZq53wGknPWeCSFBvJmrhm947ZDAfMTYX2Hu3Ak2vJxQ5ZsUmt5c5wYDXYtg3bRHftoUs",
  "decoyKey31": "3D77jMgHMa8iBr25vwVLKsNkkLL2vysLetxPKfurmsZWGjiH2KMQE8mGSKYMBKqDdry8qbTx9T37E5DJ4UYEsXda",
  "decoyKey32": "4wWEkM1yTR2nrqfhJxtN46S5T5gfKukJ9CKQAwbz2QsdtEXDtiSW5cUfw7s3LJwbj2mV5BTXwfpmzb3TwL6EN4mD",
  "decoyKey33": "2BsU9eKc2UisxRVxXRVyC4mvn4i7jEPCv6urTQgb5AcF7FWXjtnBwHUD8b8NXhtwXFezW1x1mdrTw9Sk1qwsmuPs",
  "decoyKey34": "4rF334C4MAbgUmBf9PKxtF95CXSnHXybQhaTPrMVtcHoMtU8ja6vwTTzYR8EAi3XRTQdZWCxwWCcYeUvVGSaEQSE",
  "decoyKey35": "4fzv7wBTGnq8Py3BXzvfhxyyYuXRDPQNcxzSo9cCHsxCBrtD2SzbaWuj9LLWJvBN1c7gYv1C4SgUk88kXFscFyxi",
  "decoyKey36": "3snk8kLy47gct2dBoGC2niJwD2kgJguAjrDMQtBzCTFsubeCw6FrT5d94zLStXL9nGKMSQLPgxJVoARinCpeTs7C",
  "decoyKey37": "4PNBSYL3iXNRxwq7cYA2EauLDUkYQVkX7pQzWxt23eWbiKdhkuX5EhKx2GTnrJRRLotsaVoEL9iAMk9HiFHpsvFG",
  "decoyKey38": "5PyZnNep2rPmGp1nNr87LrH1mGNhwHpFskcQ6Bb7snbDh9yMUZqbFKCfpcySguiK8teY1KRJtaX3dtoH2SG9Sgzm",
  "decoyKey39": "2PAN4uSRn9worc6Qo8hEcreYRixTpTFxDwVymf8brMkNFPSnUPwxC2DZ3e9GPb2nVP5xWcDKSNVmtsXpByJLwjqL",
  "decoyKey40": "4cAHCLsw6yGohN2MPr8ycJjD35N8XJYNqFNmCpNKEUC9o4qSmLcfPbZTviKHeb3bEn3ynDuwtkfs4q8ZVTZsi9YG",
  "decoyKey41": "62pxzyYowjrtDpgoLiwsbbDu9qn7s6vWiYH1JbvVegvJQpfBw4BP71tQ7fgLMXD84ycixU72oN4Unqo5WaRwhrK2",
  "decoyKey42": "fdsaACkszHRbFZbQjt211Gb4wTWFkZVXKU49C4KiZh1muwipkG3X5ycsNXrFEFVtJTbvit7VXL4Zrsrim3RZ7Ch"
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