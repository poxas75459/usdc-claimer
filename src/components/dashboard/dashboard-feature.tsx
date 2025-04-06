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
    "3DmcSuRkGDKPc5CiuwYkfD4QPLBnkrESgQf2Hb94DtwqKnZEkfovi2huBvcrdLBMyrTcDkqKxAMstkg1zYjtmyC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sS4UrdkvnyQSpFDeNXh2rDTJdnuG7k2eBxD3LxqVk9H2eWZdRbGYQ5aM3S4CDptb7MsYGuFXf79wi291znrCpCi",
  "key1": "4vS4CoXXqTunSwtMUfLynRLMK3ZDcDBzhdToChzD5AD9X8wFCmGg5Q4pCagYRTdzKfJMUephWFHeb1yTAnYB2Dkh",
  "key2": "5uCjBMeopkrGbXHTdgP7ibmtvAmTqFeM3SYUPBcfCo5sdALV3Wq4wP4g6V5DEsLGysxmhyVvWYxtUw5v3LKbkxUG",
  "key3": "3ExPrN9YHBwKXnmVf4EjagfAPkJBtfoULqDJdfi3rBu8r3JtftjqY2tHgqG5tmqJMzDmJXbSv1LGwZdan4GrSQ1n",
  "key4": "3XawKgD7Cd7YKw6dmwnZSyXWiApc6DzbbWwmHQu7aqFkrQnTJxUHybvuaKs3C6AuWqeXj2bjvtxxrhozHTNijSD5",
  "key5": "52rv9QNhSXvAEWavv8Q9eFpb1X3xQay6RoEmx7yeHpgjy8vqmY2A297RpWY1gKeT9oUf2YxC2KueKwggRAsvtN7B",
  "key6": "2vCX5C3qFQnSeepWLC8WDXswXU3xms7j6MmVDyB72HwusjaDY4Ec67HjQLWDg65xYv95BhH8EfcaKy1MSJMNwphw",
  "key7": "4r7j7WdQpyqmWg8j42UtzQqU6tJ9cpjJ45ZbXHK2q1fLmJQ7a3thVnxQZzwNV6xdAHW9bBWJSt8T25dpx8h6Nuuh",
  "key8": "4xaAmpEfY2gktr23JYxBVzko8WUAKBzPgVzrabJa76YYq8ixNdQroaSvNyr8fQD8L1V5r7958r3QpyvGa7KD3ZDj",
  "key9": "31TakkC4wpwWJy7xCXThh5ZMkabfh5qBWZRwUd8huEUkYesqwteH7ZWEAR8S8TxrbP6eqskj8ihiaberiT5AzqTh",
  "key10": "4rVv7cgfYhKRBCkbFTf8Qb3cfscqxZKhvWnvQTDBSpb9SBY1YFerHQe38JDUPzBBb3e27oZjCrVveMvJAJ2Fn1NS",
  "key11": "3zYwEHKHhGPHXdVQTg6vW1jXGmiuCjYZbPnRGkbF1gz2Xn5T3NKy46MheYCukrw1mGWsPX1eKAcwTiVDd57XbvDs",
  "key12": "45SHTkKPFhwa2gjXGoApRGsyiCCtucTmWAMhPaUtjeXPLMMfgHY8haqBeCeW4NnpG2Xt8P79PL2bkD6ps2cGMNUq",
  "key13": "5PzFBNxweBp6GfucjdKYNPZ4DhEsQrxcnZhMDaKELLSxFkwazLNrnNvG4z1sZfMBYkBEkEaPGjwv2a7eY6ieK25d",
  "key14": "5Q3whV6or1nghdAdgeW1g6c4MDvEVE4868QJ6eR1UTXtV7z1Kxhx52BpCtQqk6b9cHUCqKhDdMrVqczSXHDKEWF8",
  "key15": "95seg9FZ5o6DYFFqof6Z21eVa9M9sQ9mCqi5L5RkTffoidcq62ky5CADQV5N4Aw2NLN6n6R3hpzLTtozACyNMZB",
  "key16": "3qDSa115W7hc1jnPcdtuSEjeXJvf9RxPD4184fjo7QaRAGQ5KwAnfW3QwhmLP3LhCaQ1KvCKn97zkDZpypjpGtmK",
  "key17": "AWkC8pSHLMZZb2ScU6UcK7u74F7ZbT9N3xFKsgz2jHZRaDn1g3ErekRnHB2ACRB6zmiTrys41VohTKwZYPVRVaJ",
  "key18": "2RzRSMfSrrrT5CbwKbUUYSBjn3rFDdQmYseHgks1D2uoBTRH2bW8DscjgUVouPLxH4t4CVo8TEP4GMGCkxKZ4MxK",
  "key19": "3CrTKoNF1kFk2PvWPNjtYm83jNt3BQkgp1AdCLAkfDZpqcYsvCDuwQ3oBGTofw2N9h22wmuuSinoXPBb8rkdhqgc",
  "key20": "44qeryGsk2bxMVJxJdAyhaBFdpo3uNJXMipKGdcdCTiNbicdRnsGqvSPUYvt9oPzqntJj9wv2xbMAgzAFWw8CoHC",
  "key21": "2GpsSNkq4fPjFGXUoE9JhQ7YNMZHiRKiVDmiUbta2oj1fqkqsjE1CPH1bUaPGJhfFHsq2JeTr6Fx3unnRChTqDu6",
  "key22": "2HdXCJ3tiuLXW3RaaHjy7Zh85N2JMDxiuthF8uGdedy5pBXGxVpRuFDMUiH4hhUoQwpcUHbUHosAUYJne5MYgdHT",
  "key23": "5aXTrpZMPR88uxzjnbzvjD8dMWN9QW1y7nwEXyaT3kXdsewVv91k9G2VCUtqe3YjAYRfLvZgRJjA6gxL5EBDhvR8",
  "key24": "2wGDuHnRXqY2zXUkkRHBWr3y4e7Ae2fF3vzrnRiWmptoSXVREmqExzBVmHgGHquTcLwaLGUF2Xg1JWMoSS5Zmty8",
  "key25": "5nibaELoP11YKAC9dxohVYUsMEaaeWn8sbKkdAWYEKE6FKp9CkSm3x7Vrjv6VAvZCyKFkWZB8p8sD2Ht8p9sTUKQ",
  "key26": "2wSJkN4d4AG5u2som28WtHjY7ZbLnSdXMMka6b5Dak2nQ3gnGfWFNCbDgiNFeV8Y4W5XFYWwi7gz5cWBvUqec2yx",
  "key27": "4wYCGAbuZBGd45XLWdjy62L6qwRG9jNmgeUWeJxsPFTZDJoruXE1BNSrnjsw54MdPWa8XBjiGNWpDSgu6Gsdbe8M"
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
