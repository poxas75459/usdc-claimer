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
    "27bt1e5mpU4WmXFzkBxAiC5cjXYKwBuvrdKuLa3NJdGZTPvwuQFeBR6Lh9Q5DSdVLdqA33jxwBewWNbQjYVLdD6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZLQuRcuq52QJ9tB7h6BLVQLhGCEpNkq1oRr1jJ8RrwkfKXxYWyA1qYJ3BJQpkxNUF3FQ2qustueCR9wGXuAu4R1",
  "key1": "673Y5X7Gj51MTy1KHUJLb2rBfs8L3CSwAa6MMLaK6dQei6BQKJ3Yi7X9uWeDzuvEjBK1M5N3KuiBiGxnTktnkhbS",
  "key2": "54sDGeh7EWUAZiHyutq1wbQKeCWCZgtWeiMLd7dXSSGC5PkqNQxbhCpxPJynttasy886mF74g2YWbFZisLaefq6",
  "key3": "2iw4VW3FuZcrmXdKeeFpd9qthDrwvKfnkTpYkyQZSTcajMSbk4QcURVPHzjYsfPRQri23mK3gyHGGd9Guy2GkFTC",
  "key4": "3VWrUfzp159fZhUciNc6ZV82vGAz2gxZPD7qPgxkFQYnGHchgdyFNxjvHxJPvfBPfumoEmTuVCqyWnedgZXpUWvK",
  "key5": "3K1troLmg4WJ9ChevkuMXqJVfraUDaou6cbAx9RX7n1Sxff1SzvYKV8HJCAxqH7MYpjX3BWkH8mDFfVrS94GtNde",
  "key6": "4i9UuwY1zaJqUkZ9A3qX3DSt5ZaSLFHRNJAxqUVEasEyypr9JHngEdAWm2DZQ3wyUT9BBQtxEb9bf7Wc5A6UXEgL",
  "key7": "6eAJHVVmwaxGmbsTgthDGBVqxtuL5Vptmof4SArgFYnuFyhXsotNJx32YcUt8iAvG7qZnC8QBkETvfKEDdhmYvF",
  "key8": "3haAXP1ybRQrDPwoJWnGUoKJCNr8AQ1RpT44G7c7fRsWTWQrn3PHm5NVEMbJwvoTggyRT7ArRbC4P6EQZfqFpoT5",
  "key9": "HDAfTsmD7NrVTUZeA9kc4WguGdAhwa5civjaiURpu6RfWcWHLufCTQpPPcWVvsSjXQukCaK4Fd1PdLKKhxwnmsT",
  "key10": "xjerSNTu3RQKEJAMfipivkBy6M9h6FDrBFD1pQQFBkidzhgZxxZhUg6rGKXmNNg92HnjwpuhsvSFERbWAPGRuin",
  "key11": "4mA7xjAKSdXZAb8AnopDJPUjzcL3UARtc4BggUZrEuL3yDqVjC5Ar4DpW9aQn7cukjwEvstxJa2kcq5sYsM9fHUu",
  "key12": "5X2td9yV5i3t1syHER9M3dSgurbvhPNRmYw3pxFpNakm8DVnJhMkXxjcsdeMN9zNotezU2zN12jQacQqm2J3JsDS",
  "key13": "5cTArjHUiCPkJXTZkxvbmCP68CWjCxufuedsCbZNfFSu1nVKpfLHQAisuNL5hRHMkWyiNJPoGdiqedKch8vExUMF",
  "key14": "47UEwkj3qdDDCPpjsuWpx1ZmPgsVkVXPqSY7xZs458kgbUVP6uKJqL8QekjcaBN71RkEQ31ArmNcJrEf8nUouGuK",
  "key15": "XdxNFpW3m3vN8Mvf349NTgCeMsqhPy6qHmV3XPTGWmaY33Fd7xi5YxCsTwh49G2pcgbis6Lix8sbBAF3JscUqzG",
  "key16": "vjEfxofczydJeuQmUCptLvpu3UvG6GHMFSxxk46iZnCPnsnHN1rwtuBsGATtj47QXzRXVBk3zbKZysPGXFh8knW",
  "key17": "5QGhTEwjnwVdk8nEKZxf6VDGdVzdWy8c5qwzRKHA5XJNDwdbzpqfwdZ7VRc7uyifz8e2G6NYutxrBHxFkG2PMogT",
  "key18": "39JQaguanuJ7tbwXb4qmMMSYuWh8kiXUvdmEEaFYwr65NHgiv6vMhXLFssZjNVDCcFnKrVMpvr5RSQe59wwfP8X9",
  "key19": "5iSYn75iQ6KxPK9XrEwgUBWAkFf3ysJVNSSiN1usXfjmfX7rxhbA9EVSuTzLsGrsXpCqj26X1tRSkSgFuvBtVbVq",
  "key20": "2S7e4vd9CwrrierrsjU6Mj2WwXkoJEFFkRanFG5jEoq9wBmQAr3GQFAFBJfGmsEEBT3k7pXZjqwmwGn3p234EhBT",
  "key21": "2C6ETb5bJWvwtTSTbc3brsLHS4YQCj9F44WmgqZoKtVJtL7upuTJKVVSTHJNUWfTWyCP1DuiUFPs1hNTfAfcZYLY",
  "key22": "3PF9ndPQ53BkDUmmS9xfm6zSXb5hdXWR4oB3qkYcSZSgEoi5sq68Qy1dip5iJDRkNcMftwqn8JkMUi9X7j9VaghU",
  "key23": "2DBav1ZQgb89211CAPKtEze2sFGbuXDww7SFnK528M7KcG7GwuyGfyUPvtzvyWGvSQJYxuUCG69AoEmseL1n8Myg",
  "key24": "4qDmWv9GAhr25qoD5zweNbCBJKtaxvEru1HnrmBoz9XM5BpvLbEUbHfu2B4iPxEpS6d9P1v3XdoGnUfRgEMqAFt2",
  "key25": "4QuZdeXeq9eFRBAZr1DEanX29bNsQugU63LtPmJAtkyTBVuJpHVYxB7pZk421zGizxZT5vd4RUYhG6bUVDWc615i",
  "key26": "3P5s8ErVhzBZAZ3aWPR5GByrjFdmLAwAMA2NZbWyJqMZvZhDHFLAPNNDYANCexeMXPV21FDjTXpKUvTFRMtySWdh",
  "key27": "64wtq6huT8nDCTEBAa6ttA6WZDCT6Y4ejDBZj7zNvCFG6FR7kdYTfXwoxS7D8LNnE6kei5HNhkh2b9Bu7V8YwNdA",
  "key28": "2Hgu4ED7YKa8fK31TD7hCqh9Qn3xSMYS5WXjjrjxiNQbbxYax5kaATGSAGyk7CeMAk217fkxB1UzUzNtJiw9xKx9",
  "key29": "55vadSEjG6X787aEkFL3ivqynLNqMntgmCbZTPr2K367tH7pEp9sBtxsVB9HWhfxCcNHsheA8HWhaY6pQckBhknz",
  "key30": "4Wak7CeEoQTwfkLiPskdSzSSDBWjqMjRbeuXiFME4sfWcATPfcHTdMG7KAyEn9uAXCUzrzebRoYbpwvGMReSNHp3"
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
