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
    "Jy6GcMZxALKCmdhvv589rzLAVaELANmGU4qQpgW5vxP9xxhKxG6ac3kvUwoUmciLY4nYHNmDnAd7W5QKB9SLKJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qtB4Ue642xXAsG1L3tu9C7ANrwGts6kisQkEBwec57UYrtdD1f7diKQkZCzHta7LKrVTPdS3W8dmz4ZoWTsM7tN",
  "key1": "5gYmJTY3ZYufiHduZHj5qaDL7iYKRz4Xu17SLPDTKtZGxLmNopUrgzSq6L3iCSR9r9XnXZeLwkXQ2qbDY69Wg89w",
  "key2": "5oWBCjHeHHJbSfaYKVdatght4zXyZyPZnLecLaA8XRuvtPEDrJsYYeSjpNf3BX95UgEJKT5eshFqP6RnSnW4C7tU",
  "key3": "5jX9FZgeHKmK8bu7kKGQYt4D1SsTmeTPXmt76XTkZ1evQTgsyNchcNtwAB3LDXVQ929Ke73bcMNiiVaHnxcUvooY",
  "key4": "3z3D3kWS5gbdYJDjQZT3GfD2x7P91Zye5LAof2bmXADUxGMKB5XeSxA1QW3okPxYotHizxqu4SVAmKVekszHKzfe",
  "key5": "3q4g8uNi7FmhLZX9dKKbdgizAZFDjZuPbVajFV7ELUdk22vo9B86B1kHVwFE1eSSzjzKUR15uEGZkGr31UqjzKu1",
  "key6": "5PpYu18QpdNnbx8FxUCJ9bzbyhrFH7EYMzK9Kf3RMdnehdCPfT5hgMqAxY7c4xne3DX3P9Vn1N1qUReLw7cvys4D",
  "key7": "4R2ENQoYcrzwDfXrDT28KFPHvMbWwxFtkVaGJp5AWCUGeyJByuzw5XCujZ6yJAugiBD2U2k4BWXynmJ9UUV3s6Dt",
  "key8": "3ingX14nQprmEzcrAxC9BXBSqcNxt4sKn3Rk8XZQzz1JPmcqoHfkLdkaxMZUp2PnkC4eMEhzm3VWo342FmKHk4FA",
  "key9": "52Tb7ZbVjEAh3dVqhArsuqR5KZ3CZewiBb7bKhNDiV62mPhiYQw7dLd19wjkNJb2TmB4C5ea7UEkFAgBeXsZZxAj",
  "key10": "66LqGntr7h3FfEVMwwXk4uXEdx6k4cnBgpDqqh9cS48st4KD9bxDC5Px3ZfaPxGoxB8nn9zfSoXDGQCGjxAmtRHo",
  "key11": "65SNbBWeJgahQHhPgTkNTsJ9SDnLT5JnPzDkAdto5wTQTYHfov7s4t6hcD3Vnyp1rpjNNajRg29dkx6PAgiAyw1y",
  "key12": "5UAWrZKXiuGtNBg7pCy4XgCigZGbwQ3Q6n5WocXoasGoqPoVDVvoE4nr4UX8BFiRx1B6PvvDCpMNGr3rGBjZSM55",
  "key13": "2gUrTVEkTyKKNKDyVjC41ULTBF6xGR3tf1GNttXmrDk1gXduz8T3tE9d3rQJGWbM4bv8WH9zMP2SqAsHQ4Z6bhFM",
  "key14": "2ir23zpm2mHPntm7KoG1HiWdFR94Jwz5HjiVCbK12bAMUewa5ZVSFrN3KJMR82P6QBNnC6DZWczU1ELve8A5fxdj",
  "key15": "2G81LzC64qsYgd1wEQ745dqNuJweF12Je1CSVGSQBJyhEnRtSwv8LCYdeFY1um7MaFCDS2GkKJP3cVyMfbBzkVKQ",
  "key16": "63899rfvJwy9mJjiS7x8W2ae1GnGbou8CkFpTTXjEuKPwTKJshNqqxptFmn1QQKavbDQt64x5pcDN1JGFhchaygm",
  "key17": "3EzwcQzQBGoqo4UphrRB17ZoLpR9YD7qRXFvAusPjr6EqyPED34GowoVZuv4M4UCVwoMzGfzJnHdBnUk42DBWnJX",
  "key18": "3Hevw3RRA2mqRzPJujSijcSy1EkKU8yrfccWstKyemcjrxeD2ZZpcf9oydvo7uvtxiSLrwaEnCRNWR7c8b4qADv5",
  "key19": "8EmoVaunsCVESbFPThFFJ8BXp4PsF2ELU73k79qvMaHPK3w2e8pb1mhmWTfDRiUkLem9Kt4Z8zztjUtSxsq7Qpp",
  "key20": "CCjWp6uHNcM2EMG1TGR6RfU1kRhmY665pTRgZP2x92qLdb5n8AZ79WTAHDq5BYta472hjChrQGkaz95XATBB5vb",
  "key21": "2htxx42B7zCpfXQgToWGXz62KTLCdEvjr1ufexnU5YDjLCiacReH7wEbrX7NFL4VWLDXfYjhr4ABayPBamwdjyJx",
  "key22": "3wJZJ6PUWN686RTD44GsUhvtbQu13dw4hz5vm7kntQtWtwCuhFMXH3PTdzgkZerQ8iAvjsAAtkakKkGiwSQsaMx7",
  "key23": "2pXiFFRjKRKit9dWzqymuZf7F2qAcb1xYW5cSJiZdWLVNKihSoE2q6QY771NXANQmtXpr7yuSLBHFGy6YWgKsMgb",
  "key24": "5dv9hZZVyAiy9Qnow1Pgc4YXiaJUwww3zjDNyhsUSWPCkHaDVnt4h113AzpWmDtYSm8qno49SvAuGfTThGLc7yao",
  "key25": "5SD4RUkX1MXXuFC7FoiSbAG9YHRGpxnr2NejAtfxBUzo2Rb9NPrKtnvTTMYE5XQJdmx5Fx4oYyYErEcrwUMRcyE4",
  "key26": "315CbS6Gh2FR3Q4KawJQeFJNxKivFT4xTDobwXWx2bFVcynHc69TaseAvKNaPhBy2EUAjLH3vczDGyo2tsxkQkab",
  "key27": "4X16nUMRZdkE2BHS2dEuUd8vsckNrVyBMtSGxGgqjwqQWXjxMh8DmLXASeoUGGXutcdUXaixjGZbJj78kXJZ5P1q",
  "key28": "2gsaqBAWMmN3yKc98YzReYvBnuTYwNfSEhKB2VLKFVhJ1nsNezYTafVok9CPhkxYp4GT6EKJBNDEhCLRbpC5mFjn",
  "key29": "36E5yEv7CQdWe4kmUyupwR5kwyi5GDvsJFyhb4ASDK9QvDLua82zr2Jqhoa9iBjKMy7VTuyiH8GiqukYRaKBd9Pd",
  "key30": "2GhMcEdYkfK5BABteszyo8yxGw8dp2rTZvuRyYd3J5emReLjXFBzL5Zn7GEjd3wqPHfapNiRbTus7hMHi3n1GUjQ"
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
