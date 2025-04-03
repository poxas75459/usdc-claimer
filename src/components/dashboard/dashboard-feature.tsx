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
    "2J8XJkf8WckFvVbjxFRqCNTWmbwu3pyNtv64x7XmHtvPN8mZqGEn3WM1Jgxn59MMWxcEcgXuFDjxs6ZzTJXF88Jz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PvD4XiYNwkmgepED5DHSk4rGUiv5gd9psBsFTijYRoCrcPcYF8pgqs7e8T6veyWay1dbdD3Kbu75UYkFU3q4URT",
  "key1": "62G5yMoszv9iwsbgKLLreqoosmfwzFLLuUd2q2PTWNhTwpRWq3mRTXMk2H16hxf81T1Prhn6zhpW2re7BGs63VRZ",
  "key2": "jnsEepS6QoVKjAaJeeiLQBruNje5hjHEZBEtw3zuF8UFwbaQJFLT2smDAoAyrBwWarwfvZbe82rFBCZQeauiZ8d",
  "key3": "4BdqoHYHzDAhgoiveMqE9v9PFtctrPAsBSdcGcXWuniQ2MACBuGd3nYe5v38VfW1Q7kH2xS268nkzFA4bF44JxfP",
  "key4": "45EMnb9Sh9RgrqPb7EwoGkZF23NfTADf9Zz4XYRZgaCJew756HYXepDDADpBkGwhwrac5FuYj8k865DRZqLCuPFw",
  "key5": "8iP9C21LrRkPG542LBpFF2MV4eoruUx78f2fDuzwN7LDd2zNeHVqvh8yfuRedduxjbJ6LxukPbkWR4sJv4E3FLR",
  "key6": "StZc9t4fWWmvNMhdWDezdQFLvxtpoL2DwsCF5chdHR9vPVbAFE3qMk2QDSa8fegHYBYERAQBqDMZVcBhzpJWzmY",
  "key7": "3GH8ZT2Whmr7i2p6MAgq3JGNFar4zJSUbwfBTiKKMcx9xxYGXMmMfEXmAsNGuPsyqFdmAJ8HWno372ABHHgxYncJ",
  "key8": "3KhF46Arx4oyouGmHxAwC2JrkEaqC2qrYuwB7YmUgfWqjGWhs87SXsmYfPLDi9genrb1pnRChgS7iHZZHfomoTkF",
  "key9": "2u6mCUr1aArJhxDCxDk54qGuYTyU8mi25weNzw3tJaYsGSWazcDptsEG7vnKXrr8WULkqwqxUDzLf9GRmCUSRFGP",
  "key10": "31XEiVSbVmQifMWj5cJn8hNcrLqes1s4J6pgH7qCCTxjsAPEhQ4tWoiGEScJBauVwofATZZyidLhL2RLzeEvC6QG",
  "key11": "2vT4HsL7US4ZQugsgSCoQW41E3Dc8uoudJmApTXP3BfSicRu7CGJDLs61eGRitveVNYzrPfgn53saxGpRZ45Feoh",
  "key12": "4p3iLZpKSx6RPPhudRepPVRkuQ7LmaNzkq9ypTFGBdfu3hHeoPicUQQwny6aG2Xsa3aB5Wtai4jcVY5rjG6uB3NQ",
  "key13": "4LabWyRVJ7BB1mTdk3jtstNJcLfNcwcjmTkdCwUCGLjurdSBfuux6gd4meocGDXF34N7Ydy227Y8BPMyn1itAEj8",
  "key14": "3uMqeE9wBWNw97eUEk5q7TkmCdsx7bcn4cK1b7XFMBCMSMmMG1UVkvRNSj6Kh5XysDWMCMNMyeLy2rXBB3ffdPkX",
  "key15": "52hU1a6fWg4kGixELQ6AXoMTzJPh4VDFknwyiTDz5sVXMgunTZk93a6tGbF4yvGb7QjH8Zcy4vaSJKs5b1K3t3jY",
  "key16": "4BiGa8SN1B7kLtq1rgto1Xj6t56Tob42Htf5nMThep2et2kAiWsmAFS5aNp81MXHsEsfKH3Z5pfNMo74AehPbYao",
  "key17": "2q6ya8RkTzDadkcJK5gG3t9SLHnwDUaybWMCCh1z4khhuBDw7MP99syNcEWqVxamWQpF6S1yzdM2vC7AriH33aCX",
  "key18": "4149p7X6gxa3cvVsbnNHPhhhKNbr376nXe6JYP6LGnedpD7RQPHDW4ZyipEYc8tKocjohw6hBXqu1zMievpX1PDc",
  "key19": "3Ydkd7njvHT5FHA6QdPki8abU2pT5cEX1U2FSB76aDAkBDmdojReFh3xQKgaBPeWchuoLpDVA1orqUUD48nwLB6s",
  "key20": "5vTSN1YzUBt67sqwUnkjCqc3tdFwpTBEuNVZQLyymcjgUQG7dNPb4kESXQWC4wr8JeNFubnZ9xPtLykJ7yrchCoa",
  "key21": "2Prpm7DMqGxBcN95HuQj2pG7BUPGAGwgWxB5JnpNNhq5JWq1QoiW9FYrfA1LLMzsmjhx7FsXaxXyR2dbEvbrL8ES",
  "key22": "cZrh32q4LZXSkTWuqQyFvjpQTtebc7SWHqh3hFQ8wRaT1mmQznaZ48b9cNJx4miZcrXvxh9D8TTqu9qLEUhUjcs",
  "key23": "xbhmWu7SMfAVktAntDVBW4jbGzobJm3S6P4c7e8vuCZQ5yzb6jNpRgucuW5uwakNsCMYhTE72FKuMGoDR6WPrGG",
  "key24": "495NHtFnepwBUFiqUCm8feEJzELzetC7tdDg7i2UxhHqvKzEqTd7wtoJf2cTTqCRY9urTNvg8j3B4jWPY1ub5HpE"
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
