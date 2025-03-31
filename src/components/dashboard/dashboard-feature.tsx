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
    "3XvuHV5GeP6CtoXx1Ys9dH9zqQ5WfJR7BkMoq9ScXZDcUUJCjo9rJ5LEQBnZT2nwPRMdSaxE3ZBb28MsHZFugv47"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3XJfzV13mmMUhsmgzA4kLR7gck3AZ8uS5bHPW8ByXLS3WbpPSejDnW4ttvdisp4HthmsN1Y8mKA4U1WLhRV6DU5F",
  "decoyKey1": "5Ue3RpgEr6LhkbQeHVGaPzo48QVC6kV3Qe67yqq3H5yF3jPDhFE3brM31E6Ra1mGC3bCtgjLKXvoRpvxZeZNr7uW",
  "decoyKey2": "43q9KA8oDQgSWhYXQqp9NQo5TXErzNkHAjSk4ZyLvYVksfMzirHkMkpZQVBNPTmyvXHh6LMkwtjKeszzLTP6L2MJ",
  "decoyKey3": "33L714rkgwruziTfm6LUzDAzkzzvULiSPUvsop8vhB8jpofvbibgRqEBakY1jWEEZk5wAdiKC5NmWNbJPzJLKMM8",
  "decoyKey4": "XN9g39Lyjjxp51JnYdkYuWd6YpgVfCbEPf6vuY4o8GP5EmTNWRqJfDHQpFKuaMGGrFgBwedVx3YrbMR8QfQsWBe",
  "decoyKey5": "21MSNBzu92bSJWptnyVhZMADMBCmLTZPEHx4QoY26hDPhAUgwgScLjAy1hYmX9MevU1Rrn5Zra6SkkkV2were3LR",
  "decoyKey6": "DEvUnj8hbzeQu8WeLyzJFYBzY2AkT6T3rUNcC2yPedqEgfNFWFiHVzW4GbtWTCtd3aLULBjHWwDcbxAkH3nJrhk",
  "decoyKey7": "2AqNVmz74GKbkKRYgfz9xz96mWMra7cFoxatfH8fVJFn2sGwomNVhHFMm417gwBfBoB3qJntYDBwsW1Yr23WTJ82",
  "decoyKey8": "4HwQ5C6E4c6GRpLLZDs9jqJpkWpAt7HQptCfdew3H5w2rSADTohobgzpJoy8Ne3iSVshxwwDrPGgecJFqGyR2NkS",
  "decoyKey9": "2E3Djq38uukQwRVziSW1oQfDzkygW7afDJJd27h3n6mpaqthHci95FggbARSTiB23FPnE1z4KCunfsbA2qRV8QPG",
  "decoyKey10": "62DniAqfg4thDgwBQ2Lswwid5xf3kh9JfWkML3uUbuND3ZMhvc1prdV3Lbu8wDdZSZ3Ndsgz31rgTqms1qspT8kc",
  "decoyKey11": "4xrr17YdG1tUU5aAbC6pGExpywWZkVK6gU5wzUjx4EeiqFAinK7XYM5VTuik11v7X1t569WGwmm699Gz2ksaLgQV",
  "decoyKey12": "4EnNq1fKLmf7g8yfLFNFTYyA62ZM1eqgF5My9Bo1rHYBqB3F7bu2raG9bT4B4gra8qTJX6Nkumu1uBTWAcBkLTdV",
  "decoyKey13": "4heZmJqdBhyjMCo545VNRjbhmNaA5ACrx1vdHa9EVeWX5u1fzVjc3LAsQ99BsJmzFjqcNMaKMA8Pzc9LSi1azuha",
  "decoyKey14": "3MwPpV9MxJGXFiPb63KmvpabfW8jCbQd8vWTiV5hWtmSi8JfTqTzT5b2pUnN1R4V9Gsrkgv5eKgfffVtQNYxJubr",
  "decoyKey15": "zHFMckkwF5tMuVDpmTYj7pvcEhiykkzkxPBbK9uD6229NgmeVrBjuVAYt6PD8MH7u9EPMjHUnzFJngCufciViBS",
  "decoyKey16": "5nTgt3h2BY5zSVDtMfaR6tTarALrM4KW7waHrun3Cwmd8uQFj5fA4V7wZXomwbRASiJysCnAD3krB5dLaY7eF7Df",
  "decoyKey17": "Eb5BVyszEqXK1bR1XUoiPDJabNd4JckJ4NbYWnDZVDuFRufCuppHUsFBuDJ7rbvRm65CkHLAUExC9AqgrdutsvZ",
  "decoyKey18": "3yNpZuJdxBbcruzZuDKwoavZcq874egd8kgnroojYubW9QwaQoZRxz1KEZn5otBbUGm1okUDiZ8gMZP7ADHaBFMo",
  "decoyKey19": "34ryQhBvqeDNpnGFHNVMPMFeHm14otfLbpXi8ZTJygeH1ujeHX2xKjCq7ScjBgBxeDdJ83dzjwUmkkiVstqysNY6",
  "decoyKey20": "3LtxYh1Rg6erAK6MvfM8uqGBZLqf9q9AEMBudHWxZdHLNHh4GemcXJN6uMEwnBdBy7ety3fsySBhw7MPVSrQFKza",
  "decoyKey21": "2oKXtZPGFJhTdhZkp8aUBm3fKiJuc8L9y1PBrQK7b6V5iyM7PqYVgDUbg76ZZ7kdpwmhoMxNNEzJp2RJaWBX1SWu",
  "decoyKey22": "2ghL43a8R19PxZ3XApa4xSPDVMEsF5GPcFbFJHV15SEpKjvC94maMuZaT2wkFmwKB481ikojozSXJT3F2Wt8BfGG",
  "decoyKey23": "2V2uBj8KomLmC6wWzvMRnsHEsGpeRQe1Mbg8abfXrCrGj4wLRRGk9qPCek2EsWfFKk4KBXAFtq6i3YMTJmuWvs6a",
  "decoyKey24": "4xiLhxTRFxnqZnkPr1cpVQghXfHC2E9ZCieRtDRAP5hbdULwvPn1QzMunkyLHQQrjHyeaJjXh8mwikXcUCHEAQdn",
  "decoyKey25": "3PhNTGiCy2ZQrDSymU3GKf4HqdFvKdB1bFfhmtEJxeJcn7rQzFfk6tN9nPogFKgUAjF4mwZvRZVfvkN4McrVTdsz",
  "decoyKey26": "4y4MGv8vYPL8U6ZQBZPGpPjMy7WtGTc5SJJkFKQn7PTVUaCcS9KysGjKAFPasZovKYBgTj5e77Wbu41bKxXxbHjX",
  "decoyKey27": "2gfPL786w7kT2gVqpnSEfeXErazACPHyLw6ChXo5QXG4n5356kwVz5nYGQuiq9RcJnpBj7aEgA1pmDfVkGaPxif5",
  "decoyKey28": "4MnmCKXJspfmsLHi2UXy5mJesxYuF8EkS8wfXVgYwqwR38VoYkhJG5j2LV6fdKwgkyvSU3yjaW4jsibRpyFswfLv",
  "decoyKey29": "3ajK1vEtZBJ5M7UBZ6jQNdjbZoZt7FN8PJccYD1MkQSEDCXBW5PMTQ6RjyrjnHj1YXALvEbfXAXqXXjSZHomph6H",
  "decoyKey30": "5UsMw4N58GDcx6WBnaHYtVTLJeH3gmS67n6XpBUkocZ7yH43S3sp4aj9SC3CrWAYDVievWfsv5mMxibvVpBEv4mm",
  "decoyKey31": "5pPevMWV55nFSdVts5dQfSZGZZPbk2UaBKWGBo45JXFUSqJscFFkwbT1C4SUMdshenyw2VWrNi9Ki99q6Zjm9vu8",
  "decoyKey32": "3U3GyNFPPRJxVmf8g5FSaRzwBbgeLSry7nWWG9beM6C7RXZEkpi5PFqynEWg4bphtogvdgGz6CMtG7eAvMWFJnTM",
  "decoyKey33": "5q8gb6hNtqfAp8UH4dvy5ssTBtvecJM1tvzEQCw1SSnzJ13B5KYHzDeURtkBzaGgYg8siC6bSCc8pPgPXftbpFa6",
  "decoyKey34": "3an2pzoAuvrcyVGTx93MBRxhHYbt5YSZE6BV46fY2YcMjbQ4ZJJfNutJZTtGRTbnRSpubt54y9ZAcHmubs14AhjS",
  "decoyKey35": "dzEcubD4QsDd1fEqbgNQ3uhg4B43tibVuLN14FdSiKDx2DKYSt9dC76RtMYwpYZfmTkXhfoB7r6Qw6f5gB6cdr5",
  "decoyKey36": "SRVaj7GoXLhYthwefMemYYU5DNhvk4V2nyxuxVTDsyb7MK3TaJuSCFw15SDdXjT3doVGjrGbN3F9aP7b5wUQZwa",
  "decoyKey37": "3FPcgZ9FbMA2UnQeemyfcz4ekWVNkrANSRrH3dxzi5K6taDEPq9dAa26VHkQfeBwJzNTzh9SMFhUSE6nb5Ruh3Yj",
  "decoyKey38": "5X8UCkVw9w9gPQvkBhq9LwKBMUxpwTeaAVjpMqwyzBo3GnVXsYneydRzvoaND8PGiDGdKqi4q3PMDpmJiRYFS2cC",
  "decoyKey39": "24Haox4tofBFydxNLmp5exPtxR4SkrbnXZZC3C9eeS5qekZWCPxH13gbHToqo1MJsK98ogG7ykFhZzXZjQ6UUhA8",
  "decoyKey40": "3EKprpc7Z8aBK4dyG1XkPhCQNKVBvMhHuowjNuHYrKx1zuQTGcNdPgKGSqyV1BFzSukvLjC2BT9nezrcdXiy2y3d",
  "decoyKey41": "mfu769bt6u4DLwGKYVfr2ySFxXjc3Tz2CY6SDNkYXQZKhgFrAm2M6ydbfzmVDKEuPcnxJKFPSbfur2aHPCRDtHM"
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