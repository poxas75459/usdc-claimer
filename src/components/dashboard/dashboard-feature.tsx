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
    "4Nj2MGocDApsLxiHvyyNXo6P5yzXeFMnAmDSeCMf3wgoPDhZgggoetJ9SwDGitJTeuKzX5PxpaPZTp2U1D4rnPWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GfUqe7P1PY3LDoTJSU4psU1sJ3WPNpEiVxYKdnFjc4ytWR8LUKaoYEYnav3EibtGWS7vpvHnVUqUZgRuzA41WJB",
  "key1": "3DTymruVnq2V97jZPrPfFfgKZa4sUxHswJMZUEz82sPeQy5gpMdp5sEwWC6iVkGEMAdgYb6hHarwAS5P5AFKJVBq",
  "key2": "fRopkupG5mMvgEE85NFaugrKGBv4jGNTgpUwzh7Zfb1Du2qJfvkRQfyJUGRgbeCPksdfiJg99uTuA9Gsj2Hjkuc",
  "key3": "2Nb7HXF7osGUqdC2D8mg4hKnaKbYZUKbG71CewThP9tFdeuvF766JxPctKnURdFs3pHMxt7wu6cPDEfasiJSQkpo",
  "key4": "xgziYNsrQb3XMsQCCFwtQZCkT7J5PjDcXTF5167Y6AGYR8nPpakT2woZieJgrJGKZ5hPYuCitPqkbcxoeV43b3n",
  "key5": "2DeVB7KAZqnwqoWApzRTMXj4vAyrPPPAoPt6V8e8qSr1DvzjBTkYe3TG1nXmALu3uVxzNMBevs5J6yxWfHrxAQ2x",
  "key6": "4VSKxcWar7sytRD23Lz4fzU1cjZzF3jLAHBvNxf1X72pm9TsmYHcxxEeoeACV9E3K7SGM33kX1F75yXtQ8Vsg4qK",
  "key7": "K2RiqexWTQK5akXrwDmJKWkADLrkCBxDttqhwgm2PBaV2m6rXMq1UHnm6Wm6eWR629AKXnmb5kj73RdP7Smhvjy",
  "key8": "2wQvRBNWdekey3B1yXQ52i5Aeu3aZd1WJsiiHq4wHet1dnPCNuhVjsXQ9w6icgFYqEfxu85kAHAV387Wu5AhaadL",
  "key9": "3DrXfndcX3zVendpuohu2UbnnzuKGUurcNqaBN9oGyH8GwdSqkWw3T9Nwk8ooRBDwtbCynBqhrFSZ8X4cJX7zjKn",
  "key10": "5dZnEUB6Fyi8w58H5Jk6QsNoYWSYRAjtDzMSmZUjB2GgAkaiyp1P8oKZkXnKhbK6y75LoAcfwpmeAHqSSLcKQRki",
  "key11": "5aZP2J7fFUweZAJ2D58LBowk1WHj91QraLuxy9CU3pU9YqkyPjc3EbKaBDPshwkTKBeVZDmSQLfFQzFWsKvYKNvk",
  "key12": "5HUvVKuejrfVsVFkTqAofifKznZtmAb23vkdy8vAsZnhKWxjQrX86H8ZAD51njKQyS6ybCgewP9TZjY5AeRAEFwi",
  "key13": "53DjwGGHSKNoczh8XGQtLFwk7JZzmGbzAHG8yDHQVU8dLMcFGh1Y2HVaJknq364HayVmqyFAN9hw3u3c9H6zae6",
  "key14": "5derbN4yR7MEx5L6JeetnnWnxmaq3cXNE7X4NfukRcDB8FHZtHEcFkaBwmbrDMj1ru34x3fTroadiKVV7zjyPVCN",
  "key15": "4X9r6uAozavxypiCEtXMTx5SXuv9SV2Y34ATMfNeVMBACQfbKZqMRE55VJAzbmtWrSMBaeUrihpw4emxr3kLWYUm",
  "key16": "29Lu6TqhDrQ8p4sxWifpLxwdiLUQARav4pJRgHD56xaaNjjiHsUzdkmsKUHVAkeD92L2goRU4GAeUCx7hH9RRX79",
  "key17": "3xPtmWR1srpEj5VbfeMUsvSF22u3B4ia7Ratsynmbajup6taPeKGHAsqkSFUiBA4hpd24QzJzsJHDcNbNuHYzpzX",
  "key18": "38xRTTsUKFgs1gm9wUeXYADs3zK2VG1P42UTvLCD3A75a7yAct8CLhqvZQxigJt8sXZ5NGp2gi2Hw7LY3TG9zYF",
  "key19": "3BkdBFu6NjZC632cmfU1Ardwr4XxGkgo49xtPnohDjAr5TzMhBj5RCDfwHian2hVNGUzYrNxo38wb7tzakYZ82vv",
  "key20": "2djgufdfqd8iB3ywiVG9jotQzohWJBqDZMAdWM2QrMqCjurr1Zr4YTYfqKMVYF7aQix46c3QtfdXHg3WMSCquLVG",
  "key21": "37p1dP815LZyADTDaMDDhBGEXj1fNqy16fCQmsRDHuGn5U92rPwjzRTEsBERpEkq7fFkx8nZP7zuxNmXqr246LMy",
  "key22": "5Ne2QN4wSDiR9RCDTsCWT7eUQS7UFd1QDt88uk3zZGxT9jmLpiePCLUiNMb2YcRvKjvDo4AnLo1BQ19WGRcvb7EW",
  "key23": "25HdQgaWivocYmaFkv7hxTNMtUsFX4fHGMyR8bRh34iLMUqyNAsAC4hoSvjzXyU2sjjdgsWjFTALTqmjZkVxMgWa",
  "key24": "pGHpYcrfKokj3S8ii9UdukhjvVpEC4nBTgpauhEtTmuFFkfgQASw1RZZfquR2huC6k45BPqRLza8pG622pJN8vz",
  "key25": "44nS7hjwbJk7P5EbmwUJv1KBYbZ9NXemyEpUsRYWdq8hnwBEHUcyXQrHhoKxVL1Ewxd1aJtA2EnoewmBZKLaow4H",
  "key26": "51nfQ31TY262YxiiCNbiKgwM8tQAX4REzMe7bxPEe7dyijLDzrUUzk9JAvHUWueLbhkoBX9GEQrpX5vZvBovU2bw",
  "key27": "2LozQKHMuf2Fud6PmK9M1jzw79iwZfCb6j9yy99LdwwHCpoo3gk6oGNTtLyh8sjjuVM2SffoYWcmeNhqq83VRrig",
  "key28": "3URo69HB2gcRefEYTwSThgD6FVxVodySGwaqAxmVjdcEGRBVuzGu43Tckwsjs2uJif5CWrfQXohTYvGiRKUikuCJ",
  "key29": "3P3ciniq7JG4YP52QNbt48rcEpiR2U6mMoNrwmfF1JLmMj89jbRzXGih9iA9MfFascEH8Htp2vFkHfGH498yLB8g",
  "key30": "3zmFwwwPRK6N1HbgjrFrzEuAYEyvGBHtQmifMZpQ9A2diSYTsGeoUniachFgtG78JHFDGRrGN7enCcBQUGd6EkDF",
  "key31": "3tFSwnNMMXKPrKSQFHKdSKAK97MgxLXVJYfTtDikcDuDGt7xSfB8MwVz2S3gwQAx7y5a7ApNTo3T2pY8u1UemYRq",
  "key32": "649RkSJCKUoYuQy2QQ6uvF63rHCu799A5wBAv2PiNgJWJ5JUjU8bTpLXiAwtESPbcJaAkNSXFcsNYXW72g36Yops",
  "key33": "5iWZi7k3nVe6JTGNaLrS8t2An93CqMPmAThEUjeeGYHnQGDjSDXJnS3VArnusyYXAS5neBjsaCkw7zQaVfNMkEc6"
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
