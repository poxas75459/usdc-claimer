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
    "2bcUHCuSQXgZgmPMcPxVkn7p4f8mxs45T9WYwJDfiogsNzueMkZXKZDf1TxaAutQt7zZCnGN1n7ZDGJGiHtYaFJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vmUQLypZq1aeEPXVniwdeYXNu84ZFTBF1JysiQQNoQVaikEJyu4aLyBDkDFve6E673zFH9La7Cx3QvHTTCMHqWb",
  "key1": "4QetXkjH2zRBJuzpC1W1QdKFZ2PBwP1vE53tdhfD62cSC4LjwugijmGEPhgMfcCnviL6K7qoxxb1t1BKvyK6mJUx",
  "key2": "3b2vYx6pUHn7o7ADK6PqBK4JADuwmqn4mru1rt98M98EZC2r3JBd5oeVaojCFJ3CQ1XUcF9wsV4QRsBymV4EW9ax",
  "key3": "2g4z4aG9vVM5TSiCFb6Pd9GhaMK9rzjq7meThDHk1BCqsdqvgTiuhJBpn81yYDRC2cZBgLQigFprC7FKtAiPpS7n",
  "key4": "4K4zvwqyuBUc7xXWAvaR2TJPEgERRR9pPn76jsXYQ7p24eLhctiRSZXfGHoMsuCkP97VTxpqNYDdpu7EtTE9KJDW",
  "key5": "3S48Cm6kxKGDC8d4YUP8cf2N3aKSgVa4CdzpBfCSAJdVJFCvrJqYXV8vcpvKvWy5xQJrUsTEUQRc728nHVkGuSe4",
  "key6": "2HqEgqHg1SrQwuVB681Wa4T31u2Q5eCbaN62e7BEFwcSW6BkQppNd65NqyyA6QEk3Y5hUwSULszfW9AkVG5hBbx",
  "key7": "5GsLZmFBXPixxGqoFxcZ9Txp9jVdwHZFmxWZTZZ1JQQg9jmc36W9DpsJDXHxhg1tEya42Ns3oRnJhnQrg38gFWix",
  "key8": "4Xt98paZiEL4YTB5XnHs1Atz6AfqF1bxEmLKziLuSYMouBpQfcGYgomg3tc1uB65K66CgDw3GieHv3B8WQZV7Vbg",
  "key9": "3zKUWkN1yTNNs6285ayPdRTvGR1KEamh7RunKCdHJrrUSX38BPZZvX9XoZZca5ATKmpujonsA67VeSWJBGSfKtob",
  "key10": "1tghYF6HLpt4HkUQxVuBEJcUDMDGsmwNXXMhxdWStfs85gDfMGdCosGLzk6HU5jTrcybXQyNz7xja216sQ3mxrf",
  "key11": "62xmKVRkSnSvhtHEa2znrA6TsZTXdD45WDwV1mrZ8U36fu7bqWacGkEiXBHYN95US8VE8HVY2PQfbZ5xqPD4BWse",
  "key12": "5uTm4ZvpDBa2KfDgwZmh4brLCQ9dK36CuWPMiMuvedccAJaDKaYQ5EdXLVu61snVeXZMe1ZrEzQ5FkhWWC3wkYmy",
  "key13": "53CS5SKmpHyuV3oCKdbVAi6ftt6ANQGmcD7PPSEL2b6dPwVfxV4eBEkbnurzwf9LJkxxSboyVmNxidZArbVoA6zi",
  "key14": "FmT1ouHbm6uZCf1Mo5sntiKNwEyt8zWzRtncKUMhMcgcToPD4uuNN3pxAes2Tvv7M2Q7zuoWcnZxPaCPPY65Exd",
  "key15": "2EBLBwrhZqYG8rpXTHrWXDrf6gMKgQcwVhfi8TknBKwAae63jF4cPkQweRivALsgLVoZ18NbdFrXHgZGyhTw4H72",
  "key16": "2SbK1v1PZG2b78eJDDRQSm8QoBK5ho8UHUCFzyuQvpFXZrxDyMzBAWqtoWLnPyA3cWWzxo3Dt3NyxBkUYinutEFp",
  "key17": "Hi7ekYkMqxDe5PxcnpAtiNbkmKPLyGdAr61qwTc7KbkdJc71cWitWRnMLMJ2gmyfHCmViRC2WZ8G2XtGxhKMz5c",
  "key18": "4b5mTcgHjnAT1TjvHoEwdy2fQhP5JLRKXP5sDswukxsRAFKqLMbtsEAZkNduYGWQMfTEKzfLKST6ojWmVjZ8wgf4",
  "key19": "3Ev4bQvGj8NtZqaUJQbC7Gv5KEqTqmjsv5E3xd71oc4Y9cwfngnectmiMrpjNzjXftKdjRyV2BHE7WWdiCC57gYo",
  "key20": "5a8tjkknVkodJhX3BLN6NZgywvoHcvMivn2jFJxDkfhHUnQEUvLoRS5Z2y7H2GCQ3KYT939YXifCwxN3XvbWzPCK",
  "key21": "2fMNd7QHmSmS6mwjZmjbuSsqkqogFG7CQAfE6i2XFgxHBrT9N2U6S1xCdDv2qmZtbU95bqebzYEm7aWQ1dFfzdFE",
  "key22": "2FgbTEpDooGGAq8nonbHaCzgLf1iu59jf2ZGUR4uidp6qnCu2RSaWKW1bzu6G4HUZGTGD9k3mUjiBTUqqW7aA9wT",
  "key23": "49fDwK5zuwws55R66BhYCYZNdujNKRcE5E1ff1Ce9qxmGQ44aEpMcU9o2wxxzyAZTqHQpxsHFTDjJHTMPsqPrSyw",
  "key24": "5p6nDVVager2QKa3vXjrBbx1cJXPgw7YANXzCemmb1XqAPiribs6AuG1jxrcYWfuECB685Dn4effWvHriWewpyVZ",
  "key25": "3Ms4BnqZr2xN78ykZZMrtbASgLqJn8ZnqGBkXr4BDu4QmTWMNydKkRekZgwLnSjT8z11wVehTCnS2qncng6jenJD",
  "key26": "3C83fDp8oYz494LTSUixzMYCoqiRXWzFGz4MehbKRpxfioKAChAVWkcXRv1fUcJuWpjWPnMiV46SRHPa7ZZRfNDq",
  "key27": "5LwcxYo65Rx4LBZY6ecyE1P4B1vWcTQ2R4sR4mz3cbSHuzfg24gtC5C3az3asa9F9WrjgXKWsyT2Vh3sc1YJCdF1",
  "key28": "5BCLwY6JuhtoM4WuBJk9VYZcmDE3VG1fHSKW1b2nnZfp6DZsfjzshAvao7dzkJaGv76ohyApsNv3nuVSACkkvs2z",
  "key29": "3xDadbgkKUvoAbQKYDSFxQhRZi3B4YEfb27q87Rr4Xsh9QVRvNX4vT61RLzuQtRm7CAK4hs7hwYcKcSUXGpB5jr9",
  "key30": "2b7a2kie4jfroLFDqh7uuvbwRFdQFBxjmCvfBxvTAcgB12Nt7Bfu6e8XuXwsNeC87X6oxhDhCbUydeBNGpF5BNta",
  "key31": "2qPBQUxZkK5gMRBd8DrEzSdzBWtkwg6AfnFMWbLNiXN8miPtsMxWWoU4UjS22eDbFXooXBpYyCQAAn5EBPg2kUJb"
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
