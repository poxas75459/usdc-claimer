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
    "3Z1pXcr6t5S24qp2xiZV66bKna12Hz59wwUdJ1oiqRoQyK1Lp16vuzCiyTi8fncyUvs3p3UEij7ERyUC4Aw5d7Qi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DZet1XU7yMP4yA7cyA8uVFwy9WLcTVJUpPiwNZo5QvSrDNHzvVn93AYYfrZiExMgMhPL88dSJHcQyTkrbqBTZau",
  "key1": "3cUenYMzakeTu4RqDzNNChT1aArUSaiVCKfpb3gH4xTGXHcn5UZgsAYYSvPtdUGF8fDa738sP96DXfEZdtE7q7CR",
  "key2": "35M6caNF8Dhv4jtuVNrg3SAPM2mXEbFmy3cncbNnt6X9dEFD1ZLWBZ9g2vBv415CERsbZhkLZRaN2ksfQdpbisvu",
  "key3": "2PFUgDYhMrUiLaapHXCH7pw5fiHFF3uRzP3e9L9MnvCowvXfK2Eq6wisPskgG32anfQGGbp7ECeP7LHLoTyqxppA",
  "key4": "5C7VFZ2ptbEooRL7ijNV5xdGptYjxs7gSQq5VPMghz5Tx55HirfD1ZiSYB6LHjwoRUp7dqvvxvtNyw2dKKFP2bFD",
  "key5": "5VUX7FYVCY4DqfPccbiHfLtfpYBRd4Qci7FkRkTW5MZHdawfVYjqP9rRp9wUL44WCz3NxCF52m7xhDNn5xw1Ge6F",
  "key6": "21ML1zZ63HACwE1ibSgmmAe8iW7VP3rn3wXJX9577V9VAdby8Fa9NFvZpumtsG2reeH4cLGuQhNwcR3LxwnHhFem",
  "key7": "4EdP9nWcJ4fqCVERgx8um7onHRewxTRw5QP1UtcnMLofJv3ebG44jzgp7GGYusQoEgkkDtak4KZJktAQULB6R5v6",
  "key8": "p8z4BoozYmPMZw4K2rgz4QKmFbPJSyZjeKEUs5yJ6pDZSGt9ZdfJ5GY7EmKc1moU5W3BKzDHnVvbNBRQJgs2SZR",
  "key9": "NAiSzQqXEw6KMG852uDCN29oXZRtM3t4XbQS8CUA2Lphw8W7Bfe7uwFfqADhYeGXVCBHTERh2rVwU9qj7umiYhi",
  "key10": "57C6qeMgKAyMNi3pjKc2rZ9VnDq87geKs4pLTUnxsvJAUrwRv4zUjotzhWWrLTLqpjoYxeKGyobVkmgdfkwttWNE",
  "key11": "mkhtLc9qjNnsyVtDinEbZQFL38dP53YTmSm8znK6A2gDZ8DvJMAsHc8JuXbNEDAcNvgLR9hA9pF6jS1cxAQPbz8",
  "key12": "33WwbpqZKogKCu3LcdG2DhXfHiecXPACyRUvdEmbUd6MHEMRkjdYSqUm3H8Zb97KPW77cGfRuoSaBE7knBG8zzJC",
  "key13": "5rXQvrLHsLodtaTRNvBFGH9e8Ng9V23F4TusLra94snW4KwkKrFeqVqt1t8K7uBZvqmjHFSH2bJkh7fdc3JSUZGY",
  "key14": "67eLTCfRuvFCHZzK98oypZM5WrBccBNix5nPRU83tDr9r6E9A5gUxmAx2xnrrsjAbkEwf4PQif4sbe2F9rU4gQEG",
  "key15": "4YTTeDguMppZeT2HERsXemt3JfGJp8H8X5N4AT74E7e32GevoPiUsJ2Yc3i9aQV3uCTdiK5aufY6NwebCNbxHugo",
  "key16": "XDH8EpCUonX7iYGyLMYgz7hor3NHuU6Udxtx8uZLjCH6U9LLVBNyitTxkzRG9osSUnG6icXPCuznLMUr7tFGxy3",
  "key17": "128Y8TSb1NqHr3Tx3QKoHaqshKBnJdpxLCeRw1hHYiFgLY9gvGYW8VVJNGhDnKzrCf4d9RvVpwHUg3kJeE496U8x",
  "key18": "5d6QLdB1iMv6DUiCVtxUpUEK8gRomAMnB9fkUBBuSwAfDBK6VgLFbjRyc2h9q7i7Kj3WsqZn71rYvEnNTkDXmkVk",
  "key19": "2t5AD4BSdjtuwHMCBNtovwzkrUSXysAK5WJXZzZwDbHbAMayj5mdrXeAhMnnP3pqmdF5EGB9QUrWvosKLzSTY6hQ",
  "key20": "5R7b4joUWau9A2TbzTviG32CX7NMUpDjXBUk9RZ8cUJvaZ8k5JS2kKQUXdhR2YsK2EhQb8R9M7ryT4N7NXyko4xG",
  "key21": "5YXYQ31HYBYPNGm3bPbznxG22FvJZy954XvxAgNAaVpbqQ9kbNkjzt3kS9ncGDYQy7Gqb7hHcv7wzsmLPp7BjQRm",
  "key22": "7DFVtVku6NsZsbBmMAzwJjJZ6uiqcRcxEZys8hxaquPgPCZDfcVLUR4PbnAiyGyAczGJiSuQ9bmMpg9Q4KhSx1H",
  "key23": "54kFtUmsoHmwzWMwbHu87wW14RtbnyLCCQRYMiSrHy8eUG4usAZLEQdKHLVGo2v5a2eKNqQU4md1KTh8z6MzZHHi",
  "key24": "3oHSLrXiEnZSvdZK4FQMC6NvtKeroZvh1FrA76pAkDnyCC7PbP91Aa1RPdi4EfbQCfjinT8EmQdVLLLsc5XMwm7c",
  "key25": "4Eyo6HvWmwARQE6ieDoY1FmA3LTxdeyoMnKMMkFTyeCVGCAt464t9uWnQYbkqizPETLtd9qRxwm6LxTg3A26Kfpo",
  "key26": "521sjZ5B5tNxDd5YorkDgBohMD3pfJw6wcb91VAtFRVp6uXFF8QWVfCq5vw977BpjojrEMszLR9vnFeWR4Wu4AbT",
  "key27": "6rxwfSP2Cq85v7D4qcH52gd2FYpY7NeJcod66rybiY6RKde5BxAcNhF8t4c1oCsdtndM7kqp6VbPwszSPFua4vV",
  "key28": "4M1RS19cMdo1RsF3hb3hsai2LVP1JTBrWHEGaXRf91ex64SDF8iGB5AM8NVRb9ktUpc6hFYAqFebECbr2Zx8SgiN",
  "key29": "3BiUpi8XCN3sAGkaYp8MZHkb9cobYJyGkET3JvijPYFpqzohBkAhrar3v1k9MAnAeKrZi8xNP1kJAVmwvEsMGbby",
  "key30": "hpnpgLcWQ6D3CqtHN6NryajnYdZgX35kNqZqxfnEmN1gTdEgHgmtyes3znUUfZD5953aUJWaR8WYopcr6pWv31e",
  "key31": "3ALd97Z7CgLe2gcxQhPhkoEGs4V5M1Ajs739TmmeJSTkyqngLyeJ3AKA6tja2xiUAo4jsYxgQBLG8mvJn2cRYsFJ",
  "key32": "49XSkKRhS2U9FhFC9CGYMdabaWKRfdKPTYPy9VimcijhdEJUZZE8TyuaXN67jxxZi9DUjMXw41G5zkgzovYoW1yZ",
  "key33": "3YBKmM5E9zmCb7FLzTq8Hv74nU8JFhtdDroSfDHDCXpJJ8wP39NwMoRJStvoUx1dJrvW6Qod2bPtfnNP9RSj215F",
  "key34": "3r2NQ8acvzaNjd8eADvcgX6oPque55jyXeQ1C354X8fJqdWoJfLB4kkbmqRUyKiXurkAyMVYxWUm8b7Widr8H1r4"
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
