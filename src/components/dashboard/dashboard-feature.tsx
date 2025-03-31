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
    "3YWVtXd1GShZWdcKEQv8FwExePXvpiPBQsAxXZhMHyUets2Xb8GKtqCGTKLdoTtQGZ96Zjc3Cm7EuHxS5po5tdVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y7HL7w3US9p7Wkt3i1WQoeipvSdjCyJiurmDs5njHVhf49mL8pG31k1FDRXVhXVKLKjWyhaviY6QCYksVtxBxSm",
  "key1": "4HVztvVmaCHQ4biuQSi51QBD82bhoWKKvDHrL1fFAakYnd6NmnFwH98xxJfWn6njugMAWRDzs2NfQ1yhe2pnCV5W",
  "key2": "5ZZhQY37vNJLB3vrbnBvwEAJMFipKZQzUCZkNddLeRnww4Bz8enUjbLJYWP5JuTqffaxbPgzDfFhPkAeZ1kswoWX",
  "key3": "4vWzvmHdVF982pn6XZ1Ca3F8iTCf3c1X3gBZnkrDv1ZxSJUvinpeh8H5wxckDGioqM2RJ3qu2YKQD75XhndX8wUy",
  "key4": "2DmU6YT3cCCDDxPXBYuV1uts8xsjCW6XpbMZr8srmVPwfqCpEcUyrxMW6tB2fnH2VvmG98hNKrfBQTJ4VW45WNao",
  "key5": "3isECGu32rbPiKKttn6UZ4H7zeCk175oJcMHAfAydbAKcD625hEdbm5Hekw6FnR6BpXWrkdmcud127Duoeojc5TM",
  "key6": "8XvDZFPYyZGFmmEubb2EbZno5iGR4qZfBp12GsxPCtr3Rwh2aS3PE3CfREDbPGDDTn25HqyVbkqsr6EEnijF7gQ",
  "key7": "cnjxD7E4L7JNvpaVJoii6po8uLRZnbh36NdYrX2JrdxuvNwCpJKcpoo7PU2FBiH6tnqbN1XnaE3kruYfaqiQDnw",
  "key8": "2uP3qWS9yoMmUUBpMbgAqpn1RHdNCResHUzorBMAHt1LBWjZT9zHDLWCbUBfWZ65Y5afJZPJXJsyZG15eFnmkMyU",
  "key9": "2u9VBZdiDy9TxgWnnAC5G4Z2bF24yka6NnWPRxbBVoPWyGy1FWo5AdXCoG9stbgNRZh4kmNYugyq8UjLti2vCMz1",
  "key10": "2Ggv5BAie7wHiPx7GKW12btDJhGnnQ185zrBLTYWKXYFDurwimv92FVwir9FYZCdcJ5AjLejqKz6cfM2sDiREaYE",
  "key11": "2414nwevkSXEBocja5UZ75ZGQry2fYZNCk4v4kVuiaLLqMANA81xQWzKWTmwvb8V4As3fpzVasHcqfCUNtSmeu4u",
  "key12": "Qe789rqd92MpaZkMSiBXxvE56ATMFDHnk9NRfJH2bUTnkwerAASJsySNQCmtmfuSWeAyc6c8tjHDznzcnA2z8NQ",
  "key13": "4ZomDcMkGiihar4PS8ffGU1FC4b5Ezqj3hbL917vyZG4pRfevpc6GUoy8zn6d9fMzmPmdiXQWkwXMrSZMrn6wy5t",
  "key14": "4kympbS5U9nq7CMjgk1zKrPxtbHhj3NA5Mx8UQqEm9QiKJS3QFsMjkqKDxMW5b3j69FtVfXhELxzjbacuafnNxrj",
  "key15": "2Mi8VqMtEtBXPYViinpe7a7X9sZhUcBHhYMUhoqykU25STB7ooeCpMzUrBBX6srxXuCkjbwhnmEmR26GGojSNXQX",
  "key16": "2x3Lin18VdXRvEu6hpExfb9PxQftZUqXYoff9g2gMxXsWYDioEnBbNULdAxZCGA6RRE36JA1wnDJdu2rZHDSH82t",
  "key17": "4s1i3dYM852RFH53fBRuSeF9uNPBQ3w6ZCxBEWnGre2hdFdC8chwRBNzjNXBRgGo28fCF7yTmwiQ5MfWbNC5GZ9c",
  "key18": "ur6oeKCH3BWSJczUxubndX1nNgeEprz2etaU9JZsrs7ZGGyoRAgpoQEhvp1G5cXtz9saRexqjP2wvS4wFWShryx",
  "key19": "2auMeivevrtsqYQHVxnsyxDohK9nA9y3pwrgxQYhhNH7vjUSZXUic15othniaiyEw58iiM58CccDuZSEJHUa2Jen",
  "key20": "3FL3S4rYky53Wm2surktYcx4FjxZ6Mm4y5fe1MhjmVXMmibdnfmKF4QfFNm2BQfNWSY8aox8pBs42MixAtGswyLS",
  "key21": "oABhqkkEbGNc2oRezasPd2xN5H74WTY8HcX8y5mTLPi8VhJ8sD1DiDSYk3x6Usbmpv6QE5ygE3UuSnAbzUZMyXe",
  "key22": "iddpW4MeBhVPgWK8PvqGt1RZQCv18GQX3YqtMANK7kAyWmGbZFKAAV193GmPLm1hgaPvLqUqXeD3vntwBLR5U5t",
  "key23": "2aNczzGeyuzsYiC85JChY4NS368Vz6NFGMmNhuerH56QRNBLt2sXomugKf4ukpQWvq41qyUjh9fb3ziT1p3sDJXk",
  "key24": "3KXNdL8huMiae8hv7gSTm91hnqwfQ4NcWHsYcyghrozw2k5kZsfvdLQ4wz6PNZivhqzTBjYZpEgJ2k79CYfXxvb8",
  "key25": "4rRFpvnqJrpQ6HGPwXDf2ps56wgvysfxye3QvqUaiGKnTtYitH5zyTLjcaK5hgrditCKNjCBprp39gZWAUr3jmwV",
  "key26": "2Zv9ZY2THQeHGuTUTbxo41ewQnKDBaL1LQSQpWQTATsVP6GK9Upw21CVJMQcA8SFLGSC6euWoFYDEojsWrtApg1T",
  "key27": "2aCGAs9DkWP2Xsazc7x5XK8obX9TLaFHSiN3881gjyqaQp2madR9bVYenSE8ju1wnan4CzyijeaZt117Nn1XuCJd"
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
