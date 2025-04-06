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
    "5xYWxzReDNMgfA8dkBUobivDpEQdzzWB9HNtbG32pzHcEBeRGLP9cvottwMV8WKpF3WDHD7ZgcDmgpiVGLrB3ibE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qXDezbGmbVVoWHraPHDsTyWYgjL9oFNEnK86uZ74WGcPFudMN81JxJHBt32QzVuaxiXsqHHhgiCyX8JhvSZTLcP",
  "key1": "4ASzdexckbxS5N5CweyVQbpKunctZF5M4wTnKMM8TTYfbk9wDtuL4HUK8WwqabWRsh8Q3ttA6JhP4QrAHP93vhBH",
  "key2": "3Vt4Zpyd7qnzg5UTcBKUB8CtKVjCvFR4yqksJaMnUjw6NcxCjHXMpX9usnsJgEZUo6J39qeaTTLXUGH6wAehTsmH",
  "key3": "2fQtzKnz8RsyjUUVJmpqevwMVJM51PrhjkRgYvbb6wSc2dW3yBv4ZnzPMKBuSRcTvfarvCuLyvxp631Zff3KqH7b",
  "key4": "3Tv7gmFfUPvKrQXYWER4oGXtAvp7eZNv4NwdaeWJRRduyFwcimewaLySPYXQfjaVL6tJSRVPVFpaBiigdzKrPLPF",
  "key5": "2EUyYQEdu7sGRxx4b2ReYmMbUgaMCP5gUmFtKkvbtgrEZ1LzszVqRxNj2njxQyyhnfhWxecWCho9Q5yQuUUL1d6E",
  "key6": "4dgXS5nDwwPzPHQoARXmECuPKwrdVYNf33rGkmNvxunaiLtVKVw2SzbyGvqFFJBsptLEn32fzdX4pyitqRaXWxKB",
  "key7": "5fDuY7nNNTD8mxi7TEWee3duAQbSCEiy6zxe4K9efphFzyuDt3vJzdtKcNw528mukWZ4QybtWVhHRXAAEzZ18d6d",
  "key8": "5kUX9x4fKMTAqvpzRbZq48qkPH6wHRoEgf4vNa3WJNTB4bEkZbsGLh9ZToZ38hSoCt5MxvksS8kMnhXppmmrBmA8",
  "key9": "3tVyuZq5JyuGPxuLDZwBWCarX8vN62gABiTm3b7mj3y8cCcSLWojL3vPyfQTCA9hj9V2bRJqR56A8hy4ACoG8Rpe",
  "key10": "571Mg4P6qnUe7FsgnDVtabm7f1p784v9j2pPVV1fv5pUeTWGxwC5BkeTgYRVX7mpvKs5V2xowj81fRfHknFGDPW2",
  "key11": "3nXRgyQY3CuaBAea7JV7HiSoiwEqeVpCkUBtxYpS6R23EG7rYvRpXbm7LZDPUQw5iuca9CXsG6iZBfq39ooD284Z",
  "key12": "5f1SF6vtKeKYnZvvWxne6aCuiw2dnjeHmdDe3wGntFk6oDHeGVv43vScGhfV4BwjCY3Pi1MPGyaijgXSmWsKgrSZ",
  "key13": "5KwojkqRUoybs8t4TbEqtB1VFUsFSKGRUsMCWpWivec4FKqBuiYd72TsypTwHWGeh3YgrFSdawVe3ts4N4kkdXGi",
  "key14": "4TUSY6byCcSiDrgfmMNAvJZawP4dZTJEJcJNi6kr44sx9svwRjENiKKUhVWxdvRVVyjAdiGDgYUw5qfiGonjL1gr",
  "key15": "3REvAyrMCSSG4c83aFoxbhKyfKmBfZRFg1GXDqgcRok28SycjRcsZXG3QcrN3hLnL7JbJ8KPXt6t154MVLtTNU4j",
  "key16": "5vu7fkRBx5Tz1oWkWjym9iX9iRhkbS6TrbidZ3JNfNcJe75DYs3uDrob9YCJohAYtGuMtSTeqbk92UAQAm3hQ6Ms",
  "key17": "2QhAnRGHHBSKReXYUa51Gp9Bj2XnsBjejw7cpqwVVh7FfojF8xyxFi3RjYSNiPYnPB6kWFj7LyWq2j4C2DnMzy44",
  "key18": "2MTe2pKU7czGfF3vrxXQZUD3e8sq8CJgZd4qLrMqs4BjkvUir1JqgeAbUis7rT6pi5TftyXLo5LNVqNXbvChNXjY",
  "key19": "28A5oYSKaVSNjb96GEi39QffDwj1S8SvHAqSMJFXgA43nZqRWAJwZhkTmQqtb692jF6BPuviZu1t7q63958JS2FP",
  "key20": "5gjyQhxYR4Vj4UwqZiAL2TaCG5ynHkDWtnCwxZmKQoLKsHJuqqZMbtA2DKF2iEKRReNxZrVN9YyN6iMicwTXx3ML",
  "key21": "5e9zuHAmTRWdpCR1btKrZTi6gwHwb1bsPq7PexJ9A5DbyijWbeDKcTrMCs6s13dkFyvbQJGXXufuDwpMAoeS1yMx",
  "key22": "2C6Eoo2aCtqWKYd2jwBB2oScRQ41U1GDUt53bYgGrn3wZDsSiVoDTVW6SWruUUYSx1QcQa1T9eMsxWW5kEeDkpfN",
  "key23": "5gSrz84CC6HgEmic6soLTfYx8Ab3xypboAW51sCYf4TdqGUkBtsrDJHmH15KGVbE192VAGZiCiRaX3uSVJgcyUR2",
  "key24": "acxUJ3GfhT6hQbQSLo1N3GLCRZEbpY35pAaaVKDpvwZH9HzKPYNbdfzDZ6dopVAmWykfjtuQVT5C9jdQYtyzoeB",
  "key25": "3LrWeGgD1U5tzH3KAKctoJYx1AvkAHXV1KDY6o4C6u2nPVGtwjnXiocVBr6CfXkw7rSoWsbMj7aAH9Kg9WCRo6Sh",
  "key26": "67rmw1SBFmRHXAXJSy2nbvemc5PNUJZZeLhsURcfHWpCY5wdJN1gGCgrSVxemCRJbpBrNF2svTr4kSdzU95w3TpU"
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
