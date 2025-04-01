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
    "5WK7U4gm5uqPpYGUhsnSiryZah1Xhdr2APsYbgGH3S15n2QRdqDAtwbjQJopj5MuESVFyA6LsjxGvbmqUanrVM8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JFTVbMAC6dpk83Fo6wmfr4Xe74NxU8QggaGQ4eaAas9PELKE4tQhm1Fp9HBRkceHVWH3xeVcvezX7qAvtwMxDV2",
  "key1": "2LNuP9tQHb8RPhY4P4T6Z3H3hE3NWKnY5Cb5HdKH1ngoBSERumvZmevEiUtJ71oH7kaZpvKqAqNeWyVWRNwhh5JT",
  "key2": "ZK33UsHzah73ckryo4vVTzeMkiNJNKdTRc2KTLhNZV58uJ55knH89j6Q9A3wt4syg2WAYzpJL5XuthbvbmCdHss",
  "key3": "4WFd4w6BqQmqESQagferkRkfPnDwwkivbsERcAQJENpeBXZDEjdoG6mDCJQcJHy9wURkXYVXdTYT68n9ojAvEtTZ",
  "key4": "rAZUqKr9gvuSRPQ4CCFwHMKGi5nhXjrLTEiWLEyEYinSw3nxXtq4NXXRHtzWEuFpncBbpHCmMFWDJqMtJwFPAbq",
  "key5": "Qughz8aTWsLDYS4ouaUxzSBZiEp26PH1pxaoNEa6SP2Eydfv3PbP9DfX4ejosbbFXJmgVgCobEgCu8vF8wWUSYT",
  "key6": "T8cqBnczBujEx8oeErbMoJm99rDkHCcD496ZFbtxsjhdb5LvywFNZ6bSEsBwrJxFJPzAV2GonNzHa9PSwbaJtKL",
  "key7": "49nmatd4ZMFMmZ3wj9ULR7ivTxtkmxKd1obCSmsNfCmWwSb2FzezRVjKaKA9kcn1AfTEnsoNGDKNQpHFfvxtTpEU",
  "key8": "AiHBRTaSkQeCcT4bhGrjidGYumWurxPk5EVWgYVSzpJT9WDMCZ4SjzkspocTUuNFn8eD7Zfr3PsuimFoBexV7zv",
  "key9": "2H9yVYeR9Cim6YkRn7igXNgBYqxxaa6zSzUNj7GWNkQr477WoaqscmhPgoDf2bVDaLEoVGNbtnmLjThCMSFn9xXJ",
  "key10": "53LcHs86mXjydpDAyAXCWBVDtmu4UJEvSpcnrtNtLS6uQ4bEQuegogCgrEvbp6RA5QhjwKK1x5srsUjrac1rYB6d",
  "key11": "3vBUfM1N6oTSFrq9vLU4GgXxxDF41Nwvsbs7xbAKnCUYy95LfvCm6tv23P1NF6YMeXjzbKTVdhDXkmzeF7RogaXr",
  "key12": "4t42fNodGwbWV3sWvGMeWUgLS8TRrAosLnEosWUKQ9AxSHwKY3Fvaus4qpGJzQPHLuXJRSGeKsCAen5nABDSkw39",
  "key13": "4rG7cwC7ud6srksAb6tfsFmfHwTMDdjbL9bRAevn5rfvgaeUunMq57MaFkqhfikyYVq4YtKzAK4B9TLz5LDjFAFJ",
  "key14": "2jZM1pCGxmFEF8NS6FeiRQ5KSfifJUZvgSvy3m7jSMd8ZwcZPJtn3qGK7ff78dAsiMC7FidgGaj3LSiFf22wvTaR",
  "key15": "2UUreiJCX3SakA1KVQWmTP1mt41cqmQjEgB29PjuukrpLTZSykH68hb6c4rjfQukv34gPp8qvN8N1UujUyrzXAkH",
  "key16": "4cPuxykYQKvzrA9Eghu3gUGfNCu64CWgDMM61EXJquDJHkB1ne49F7xucTKFmMm6MG3EPtwZbLHxGtaJFeArtGrd",
  "key17": "5GS6r4c2LQTx1R81uBBLZXSKAPRE4wCPuT41uoiRtHsZB9tnWh1rHd35GPZA1FSEhRqpdCxd59Daj5UZBj1q7cer",
  "key18": "3QW9t1GGHtSLeqJhsv61N29npBEPi2CZmSeo2qq2ZrqJ7CYpk4TFr1P8vTP9HQDH3LRYFggXxbhAjGRh9vTNDbrA",
  "key19": "3UXRULJMw8VMjucSxYLeqPw91NFEW1G1HFy8SBc7juMTj2kDnSxNgNbrnzzfxP6qZUfNmGLDnRXx2q4ysc6PRxCk",
  "key20": "4KUAqMNDmZ6fQqEqau8dJLxJScgdfyJRQMCRzN8aMVCk2NwyMJssPQEong73jq7ZKhGV2tj1NSaKu7oazozF6HYc",
  "key21": "2Dn1R6zUWC5iMZtNZkh58GuXQXrrAfZ67ePhTcmjWxCV3vSUbqU55RokHCC17G3nAFWkGiZ3FSFdFi6oh1xoE74H",
  "key22": "3jrJgn6MCg1Q4TntnfEs9S1PHtogStjeJKS2kqNjt2pfrRDeZZ7QvMcaJGw2mjRCtdQLbtXEKMsoEQmzL6raLWBf",
  "key23": "3Sdg9TrN7Np9mWi2y1361EBEJV3jgEjWU2oQz5BvoRGcnFwDU1S9YXQEFy4fvn2bCsRkkpuc5xXvTaDtcABF3h7H",
  "key24": "5eb9xrHgVL1cSwYux7qZvdVY8EosKkGH8eqHGrgGBawJ7V37jzAxJ975TF9axUnjiV2EKG5RhcHjevpw3h1ZXo6Z",
  "key25": "519Kz9fBdKcoqCH5W1VEdXDZuLPqRJWXhEP8vLsYfaJLLxyQ2qdP9Ayvpcw7aoaSeQkq1FBkbVfRXQ2UZDb9BBVr",
  "key26": "5LArP8WaVMGLT1wQPNu6iAheXpZnqZNpLyCbnMYBuKFyrJrraqrMaqoHSEbWcY9iLHtUXyL24r4ZnvrCZBr7MH8h"
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
