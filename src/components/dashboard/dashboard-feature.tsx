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
    "3XL55FjtVRD8vx5we2wB2b5juD7DqGpYeGWbWB71BWWz9zeHH2wWPfcgsMcTS26MGHnJpJL52iH116AQonWMizRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VkPzpMeRy7y65xzyTDBrqwP3FCp71HY6xJsxsoKJBbkZAK3daCPK9357bx1h5bxXmw7HaeqV99vSEK42f4cR18a",
  "key1": "2xYRmczrvaUCLAdXJkbvdWYc6m6sjT1DF664zFpJuwhRtpUcagyuQEPcdtmXjRxSjd6tDGzDAEEa81Th458cnrH1",
  "key2": "5GWYgiK7szQm4ZhRs4crwkDJ87UQs5GFiszwGnZFUuz2ho4LPANzqEbhqvDR9fVBZbX8Y1JZLAJW7Ct8vrPs6eTW",
  "key3": "2eg4PrpE4ph7fTzKCCuvHHjTrhu11FQnYREtcN6nc1XpWEXsmZhkQCAf53SjUZ8mSm7LStVDYkRy8T6HxxZJtagx",
  "key4": "2CTe1wstFviSSVUGdVVrpo2a2oVzBwd4MLpXqxLiMZartZQoVncS4r5qAy6cNNMKkfgotUrmDiBvV9p9Z5ZC1tmM",
  "key5": "n2m7y3L8wehhkXsuxifexek2AhdSJmqvdbXTaw2AkK7ucNNwNi25WDoGzitSUjJx1dUa7gqgCSAphMAmkFLAHHW",
  "key6": "2AyrMhq3DT1mP3ef5DiiMxGMkpCpKVEsRMHHPe5kVY1XCrESet2HijNmpeMgRrtRJRRPfyKBbyRGCdRsFjSR84rm",
  "key7": "2VHV98xkx8qKCeN7xuFyT4xQz4seYV8NagGZMTKMMQEs8oTJFnRyUxL8PdgBxhnfmnqRbaC7KipWkPJggrSY2pQW",
  "key8": "3tyoujT2DgNZqfPx1zAE3BYkuzhUiHbJx9X8t46AYPGGosb7qsBTc4fZor561yvvwfdNLU2So5gNbvg8dMD2gUh6",
  "key9": "5qQE7zeNTQsqdUNEzaaLBbymeifW1x2jgyQg9oi9NB37DnAZnSaLqsEWSsJ9yW79LM1MFGndn2EyG6aZetuWjTqj",
  "key10": "3vziWC1sZ97TTYFuMwBvqGhtiBwogy6Bzig8qSwuw3zHQ87QbPP7PCVKBSD2MnjyY1hUm18fRGAGacqa5nFbbAph",
  "key11": "3D4SkGWheNyUcEGVT2JZUbGVUCGtq9iFXwyQSaeE1qXwBz32s1gvhYQVzhV82E4yibq8boiuXtUk123vmmGCuDka",
  "key12": "34Z1Gt4pdnekvTz2mMySK6mBYYVNtb4MzXjVs8WsA5djiEQ75TEo98o9FL8HVGgi1bP4pTsBx75fEsyVLtBnA26n",
  "key13": "4521MpRVaYL6TWhEDEovb7Y7zJ2M4suTYYNRCdPTmB4p2fuNL9F71XcyjBgFmaEt6RGSdxGVNVw49KguuW7TwkVH",
  "key14": "41Js9R7EjNdGc3oAyE3uaugWyqheWh9NQU7AHAzcKNETn2xw3uHm6zYD7sFKu82wvxHGeoc5vV4cXKQrLVxBZekT",
  "key15": "t2zLfX4YnqcknDdfH3GctVZGTFsJVGD9L2mokso9jrJVNyPgXXafeq1JqwHxRxPESiossicKEndpiAD9JFQqFXd",
  "key16": "4YWmTYgdNkAjBymURATLneJjJMC5e4bWd2KNSngyvoeUGNuu8YpwLGJz5KjpmTZseaNffYkij1YqyAyLq8U4JWtK",
  "key17": "2Nwe3TNd41YKaum54Vht2AVKAVWsqrZ6fX2ZgNCZ61Xwdctf5M4Rc52XYnXXQvS6V8c4RfgaeQugbtWSYkUtXeWD",
  "key18": "XwdzYwF7Up324MSaV2qEGEshuEXMthJ4KMRQjBsSZEREZboHtf295nkFugvp1tPQj4eY4TvCBpmnivpKKMmJvfw",
  "key19": "41Ua8uibCJNhRUf6DxAvdh4gkQB3N9xRzWa9vLRpijW7yCC3Dy1eoHmovZJ71iYHByLbWA4GPUSX8F3YP1g5DYip",
  "key20": "2e3wgqBANmVmVfB5GtE9B4gorB1BnYoG16MpK66QkUjYvQ4UYG2vrZ55roriJPv2GopQZwwPaCYjmMbeGmBPxPXo",
  "key21": "Btaw1FsoEyGfAucaaRL5pP17ecgQdVW3EprrVqNq3M9pHPCQAmHB4XtMgV69SvD6EszZdpGgVuBnAypu29ZWxAK",
  "key22": "5pDtseorLDh8A614FqsQ3qybr32zX54vqaBMxAK4wCfdDTbJxnSuggPa576j3fQ7SSb9cyGXdXXPiphxFhgxLrc7",
  "key23": "3pYNe8wy1dYTJNxsEKd3WPHiqeKJWCCL6DpgvVwkLZ156ZX3ERJTGURz45C6cBCkDwUbKDemcJepJdwL5n5ownpk",
  "key24": "63gCBU7TzBrb8mZsvLhPtEibMF5nf9gVD6kF77TnkzFRyDLmhcWgg2DZfBuMnCctrDzNwk7EXAGCpoqVVVrNSYtZ",
  "key25": "EZ79HSUn5kEkF2HtxiVPBiZ3wWGafFNdfKeUpt1HRMSKp2ihZQpRQQA1zbpntaWrEEt6kcVssff6b3EPudA7LdE",
  "key26": "pSBoQzPrnCvqDg65kj212nhdtFCnYaJYxtAz9NTBNYZg4mbu5RTfu6SuRFmbq6eyQGegDE9KC4tHrrWYN8MEDd8",
  "key27": "unGzUVM67DpQJdQ6Bt1PBfsKMksTeog7S7ayxKjWH2cofp7mNzpjfZTdCUCBeYSbH3e8iAo8ViXtq4dBhmrkebc"
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
