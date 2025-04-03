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
    "2cFgQb4sNKnCEnU3tbvJy6LRC7ireL9AVUSGeNBWV6CBVdypmuDMYBKnZGR6tJdhT1vuxxwanjSdJ8ZEdxgP5ntf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tGYCn7mFEwmuRCL9a8akx61iHR7vctyeW7oAXxFUqzNcG8VUo2QUJxq8ciHNFGieZKpDhUMjeW78Sz4qXA1VkZF",
  "key1": "4jCg2s97BgrSFvfLZN9Q7nAk3dHQAqJDuwx51eQc3sxt5m4VrSVg3MYUSCYgwEV8tsCVMbNnGgBMFnr7vuTwfYkZ",
  "key2": "27adoqrCB4fqCMYRJNzYxQ4N5QCicjCBECm2NrV6ZXoQ8nTktLxwE7BDYiTJkXB4AyqH9x4zNz9fgZfZAAaxrgGU",
  "key3": "4EbGu5HJSmZGSphKcbLhwubc3xMEGVWfKwQowHu18fPyqnHxHXNyFoEwqD6mETXGUguQXBzBo51gJXqp9SkGSvJw",
  "key4": "nFhFKhkyaWSkofh7FcpowSdrEF1oW5BR1gbFJK9vggufp3efTcSkKYrE54gZjFHFsEMhkm7NEHFqpJtNoJc31hP",
  "key5": "2J7UtEifuyAEiu7JEch4nXfaH2JXSdgYD5F25VTRXAn4jyjgKTx1mRtcxp6Ups5Gqn7zQ23eiw3G4xXfBQadQgFB",
  "key6": "aPazsxh4NwQYat7DX9RnT2xM24yCHRa7gRTUNkb3zMtW45zi3ChAKAvkdmVvpMVEPCPxMYURBvL3WvX92UTaGaT",
  "key7": "9tSP7iEQ9P6QqgQm5kgGXy7GgH3Ep9mJmuzmHT7igADqLBUkA45gvH1oJ39YchCY1qmb4ucZGZ6Es3H8qFTTTr8",
  "key8": "4zQMm9fHJQVqxQqxUuUCEq5U96JthYpKUGz6rLcKTQvG99ZLNgfSFt2wxqJuG9wwQipG3pSjiBjioGhjSCPU916B",
  "key9": "45QH5Vtxy8tFkqnG6xTJJb5Cmnuy9TowjW167bdAkEpqL4NvnS7Y8YE4yA85oArChx8mKJGGei1Sk3QPo6EnoruV",
  "key10": "4TVo6D5hMvHoP3kWRLegQngCogyN4u3TqCjE3QaQgZfkzx3tke4nZAGUkpya7iF2EcgNG9ECdyvcZLBdv1tgZNEU",
  "key11": "5sC9zt2wtp8RogkzdUgkuMWipQSe8pK2r9dCudS6hg52A3a3mHi9N5P1f8cVsPuWbGjMRTzhMfTbHPgzXxggcxPA",
  "key12": "abQiEvVFxrgwDHr5WjBfzDK1hVVgw77M2EfsQQ6DpVd5byt1xYcsUMEPBT9wK4VwoyqX2PqPSe5A2nDnqnasWqZ",
  "key13": "3YVc6i2kHJR4CVjEoLoaVLoff65Lp31ZGV7n5dgEGyfeX8MJ1GtKySJMP2d6Z9k4uuGrPu9xxHMVtFEkZxGdBkez",
  "key14": "5dsqWYaPAo2UHH198dx2ZXspRyT61jKd2GfCCU57VCag3PaFXVToiH71sfZvj4mk51sREnkSvQYkBdhrFffFGsCD",
  "key15": "5cEimtcXPHt5CPTK5MS6rPNfZnSAgmA7XAJZewS73buwDhMX8oMmCeLsHcgHvPSLahGMWrB1Yp39Ay9WSc3d8GZ9",
  "key16": "3aeCcTBkuB7M2angsQ8a3P4zPtB3aufKbk2n2Y3FTh7NKYMPaFsXFz5zSmqAsbDcTbSCGvZunXZZwDY9YPhhNL7k",
  "key17": "5U7F112coqecPnYqnDMsJwuQmq9DiCerXDVcX3sA1quUqk6jLLMERc28SKv3D3ffKTPjq4VsEFQcjnHrGbQtsHME",
  "key18": "4JHCj4Js2wVxF3nf219yrGio9VdwVdJyfqsghVDqXL36qTHjVrZRN8gafnF2puiHKvByh1aCfLFTaChGybi591jy",
  "key19": "V45smCjaRPmJbMFVV7Kg4jjD4QqSKYd9cLg7rjrwZaPp2c8WCh9Zs1zSTuSTkUK5HQGJofwS4A37e3fUazYuE3k",
  "key20": "5pdC181fQDyj1tU1Vd3VGhK75oMVY9ftECRKJGkYWc4Y6z45MwLM68GNBuRtFNiswQ1ja5rhTgNAB6zpHU7dEbHv",
  "key21": "zkgxhPesiMfiCdCYm4Z4UPhPEtgGNpvZYxQuwiN1hWPh3TfRo6QoHgdNzxvgRC3NXvmxrydeGnfMTX32fAGkEVW",
  "key22": "pmbk94v3mkiT912MmFgDJEnhk6EgRhny9Mq7nvZFJGoZi1aCt9UWzELBbXqVSZ8m7anYqP5QcwZGCk7mAaFBdwZ",
  "key23": "3kTd1NeDZgoFuZYQDRAz45mhkZZH6i7WAbSQdsRoFggYPeeVB927cQSdhWy45L3tN3Y1Uk5DF2T2kWTTzATC8sei",
  "key24": "2cf74b8oc9kkkGXcwCSYPgH8THCsmj6qiFiXjYPmreYHXU2twzFxVoF8VwGjPnHLBtLFZhbi36arcH18FFJsJbYU",
  "key25": "DPbTahpD6zGbiN4AiPbJGgRchxZUANMsYKwE6Cq6MD7tybn1QG9PiTSpFSWYFEKm3ELAPY8STg5cWBfmKdJEUER",
  "key26": "4CxmKS9EeK71U9sH2UCh6M9yNDTdGL5Dz2A6BMG69P75SqrUMBAKdgxaCf9Et941ZRe1dfLbqNjHRHDR76uNETfK",
  "key27": "NBoHXmLLwg9ie9tYbYToTYFz3KeCDNTxgXxnosnr9EyVGT5Ybpu51ELEwC5qXMwH2W5cHNtqbT3TgANon4YBssU",
  "key28": "2spV36ZT6dKa2MwC82XzfNv55Rk2xHBzLfNiSC91vHGcEEMJb6Xt2KJr788Gd1LgkibMgTNmQ88EQAsTioZkZ6ZF",
  "key29": "4xWXPy8Xx2sxobPuqvMeimQ12cZJ9dxyTkfhcuVWPWsE9QqgTt3UaPyUtKjXUW6y92kFLCaKfif5hVy5pexSEvPu"
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
