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
    "39yzJCZzKkiihZJCyfwy6ZZnxCzmhfQZSWGRkqKGxcDjj9iVuAjX83NfJ7iYbkgG3NeTzenuZa55SuXkraRMa9Rk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TJJMGH2wjeWz9fHeehhdTqxFL41gJ4Mf3ZGCpm1YFGfd9D8dK1SE41788C9HtKQj3SWn5rdQPf7jCcPrunYxah4",
  "key1": "35xSmuvYLvo5fPoGmwAnY6bv3fKhrEdzpegTvkk9xFzDSS7VAyDpPrG8iT8c3JddPCV3qSuBNabpBCaw4XDTazCN",
  "key2": "4NZrKV85UTeFTMC516C4SUrUvbRC3oboaKrqmae89bwySRNpnPF54N5Km6LpVq7HD3kErQ1nuF7j1xT8mzK8QWFh",
  "key3": "58Y5gUfH7S3a3WiyTMeBNmyadoDVPTXQhgvUtmZRWbexwYRWqrTJTbDNmHYhRD9WE3PHgw1JzJfCUrZTeKBFoxhB",
  "key4": "65cUd6n5Nf2TfFXjijyA2fkBWUCd4ssEJVFNUzBt58S4TpQqxAdT7SwBL83Vch9xpevwVQ7YnRYx6FdLfCMEc36k",
  "key5": "3XdTVFriBTFUbMbWVvDo9biwLrkJKBAwB31LZAifmBCkmeHqk7Ls5BeSLpM64hRoFx82gFdz4dbGajkpi9tLEfuP",
  "key6": "2tPDGxmK4pZ9R2cFfRKVH7jsc65Y5fCqVM9kdsxC2gcgUc6wK9RWz9i6pPstrU1MoGYYadSap7NuPzpG2JHBkEHZ",
  "key7": "2DWC1Se1zNxFhe2uDjHUeC1fdw7ZPjZSxgBGqa1HyaeTFhEcVz8DrWevampK4vhkehecenqv3RwZpLkRDrtaXJ9H",
  "key8": "4wbhBfvaprbKGJ5CEgqPndyLz47KTpKEHKG6maFwALXcc7fb714kDP9VABA21wm5zDpL7E6QawNwpF6msfaSZt1g",
  "key9": "3kFhMstpeo4hTBmgdm9CzCUxWaNiR6NW7eXfSTjEWb6qhF3tZhbx8iA2FexhwcY4LvJCb41YsYvhTiKy9vkKfq2o",
  "key10": "Y6YVGe2kKxWGZHMcAZEY86Xkz6PijGesC3h4JCg584CE3M9jbvnCMb3xK1k4rtX1cSUpxbFZUyEvLXGC5JjU4pN",
  "key11": "26QVMpefbFRi8b8n63bMJBjchg139XCPbUwG5BBjn5sD4tQxJ2rGvTqiPRBxDUQn5hmRYdudxV8z5qUbyd4HmYEn",
  "key12": "2YkNUiPtLi2qjh8P13R6R6J8fhHojy6Ck9wpydDygWMCcXuGz8Mw6S2bxvG8BC5fn9KndjHZY2AZHUpYzQHcqb1Y",
  "key13": "2NXRzVPocsfmDfiYgNWYm1Tvz4LZvGpjvU93QWzzFWhMio537TKRRSXGft3yJkw3a4yDwQATX6erZJ3fzt9hiBEf",
  "key14": "5Dq2Moj4s8FqQAQ1AHHwmqUHNPJTPWyPRueQL8v77APid25tyeT1pnDZjAgWBXEXqrEUgBsPMhAVLuaeYyureBvo",
  "key15": "2inZcW31hRizjiJYsRSWkkSGwm4Tz6oJKzfjKPjRXq1RGC21f5cWkC9wByZBhNiQCyNsznS6JkCgbmtKmZoBWLDc",
  "key16": "2a3tDs1des6Gtg9EeegyKeJCvnMFEzS8qEeUiCpAKreiPXeWnRfd99As9pF8yjdjGrFneBbffCrPTKMS5Y8CPaZK",
  "key17": "2NDeRReQ6GxG2gzeL8nUUrLXMhEHGLoT8SgfTzQRDDkqexvCBq2TK3GRLbon2PZH6PH8AMSYaXfNmLhQzaU1aWFg",
  "key18": "3sqEFmNqQx5Xf7VtS5Dyyq6HwHVxe97hd4XJLRiFyMYbkks4Te9utbiryBwT2xfmMPAKqik6Q9aBxLGtckg5TjS5",
  "key19": "B3tvm1m8dH24gPEgWx91gzRh4QQEoMt4LtGABuvbaWe85DNB8m3H2ELcYAJNM4q984qjjQmaKFJEAZMLJ4ZnWEr",
  "key20": "pHPoaX4zTawnr5irvzUpjaLf2NMUG9hUvsqCJ6s3swbuJD6pPxuhFoiTXB2DZ5xJCPCyiHiJMHgW6i9NNChtpgb",
  "key21": "5n1WNjL697BiLPXfrLBP2sHnXzVLBXVCDs1MHT5Kqu2MDmHp3zbR6Ms6ynMKtk7Ey3pCMC9NYGGosU1PBZywAy6K",
  "key22": "2pL2xEXdyMPiNyu1B11nDwNUBeijWTJBw3RWwProXnimkqRZX1VDUxkyTXwh8skQSzYQz9xyNZfnGtNQLC19npUy",
  "key23": "BsDC9Z7wNNJxsvoAeGmp3ZrJhNYf34bKroR6uxZeLFZFhvT91HYxV8w45iwNYkQeZ53EMNhHK5J23HLsToqi4bR",
  "key24": "5vegEMLBn6rDeBrzWtnqgzo9LmbUMr9ssnAkP4Aapsowuio8JWjEKetgNjKAP9uqGNSQJSMToXAkq5Qb1VzXQZ4X",
  "key25": "3St6QAqv7gSNTM13bgTG2HyRc4fzPcXfAxJza77o1YgbaSLmr2vapGHeCnNxKsCs9uXapWsBetKMaYqczFCFksn5",
  "key26": "2QKthXvHLZpqxoUNLDWeF1yS2BdpGo3cHZkFeQSnm3EEuenEufG2K74mAwoYpadm8a1VYz9pyQ423NZgLpnGM3CA"
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
