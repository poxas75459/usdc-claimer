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
    "4Ss1UYs4NnK4FQAMunTucMLHpcxtXkiq3DCFVBa7fAFx7CkbA5AQK5CL4DRJnBxoYTyS6Kbp5ZBqyDFT4oW7iUB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vUnXoDzwyqVexMuitAN5UXAZutdrbKZYPtVm7bacPKVdboeissvwNiG6z8uLm7SAFTEqkUtSfyNrxqg6wKkqmy4",
  "key1": "4Uka94dGuT56GUDWYuvWB7UiAZi9ZtNbppbx5LBbBoFSemAQ855r8jFHY9Qhb9SBCx6wHcMr4b1SUUu974G17UJt",
  "key2": "2DPi8wcKw1bfWCb3QpfMJjsd1vJ5offL9ULSdxwnEs9RWmwCZWJL7x8V7gCCAqcE14izwMFFwVE6HFkYbRNSo9RR",
  "key3": "3SCZPxeAWDwGvApf4ww2THreRp8WiX5qHrkxEk8ZiZmQCKq6Dgrwu15cX7yRnJU6nBQRLQHt1RNpSb2EounhP7Ms",
  "key4": "4T83ouogkvcp9NGEBMb63typjBWtiGRDwdxLfNqZcBgXq9XYzigPatJZS4NuKuPC8Y291nuyt8dszGGXbSeAF4sR",
  "key5": "2ULk25dJxRmfAZyg16gbJGEteiF7RegNk6fAmo1M4jTgekArc7vCj6Bo9WADgLADJmZ9wtYGXycpQs92NcMSaNBc",
  "key6": "4Kc4RGF1vHfXUBQjbrFjcCgc2XMtK9UDMWJhhbyAMSp34NCz51j7YVhucjWpnjYoppiZBsAh1wCTgnfynvW75PYj",
  "key7": "KRfxYvhjRUZHJ6NnWQmWagQsUieL66arTU6hLMEQd4xyctCfLJfe7dcNybrQcohgddCkpjf4ENmab8bSLoHy5ur",
  "key8": "2tJVL3BNt6z5mBCkevnjW94mjEvUAv6UcCFxug25HMWDhjFZyW33zrduR142jX6oTVUc6vn5ZhoUpbAcuTWAiaYw",
  "key9": "588Pa3pg6MP6t7BHd86UMyS17ffMgxXwrGrqt7T1A2cZ3hdY8zxPDLmou3nbohLiV7VgpM9w5gbBTSagmawa2haa",
  "key10": "2zSXFeq6Mz769XGadYz8yrEr8p3u9sZuaiPHkQkTrjT5tvQ6YD4o2bgWJneA4ds2yXWyBSq3pR3GBaZa7P5ggipL",
  "key11": "dj8u5wEzSTkFtbMV1rnrFznMwkiX8fJ67XS448HDnAfRdVTsEebWpREuUw8AqEaChBc5eEQtpaKQeTvxEuV4aEX",
  "key12": "63wxEuz5T1vMzFMK3ETf6zXCSP5RPYzkNNRGUZxejZSc5jSBbFv5QD2PK7sHCU2gM2GkrBZpfS71gYK6jZmfPoKZ",
  "key13": "fh1sb3JBE5Q9z2sYCjDQLuMToAnFQtHiGP5NGqPV5y3rHqy2G6cY4DnqxEgUWVnGZfyVJ1btAodPdGCPLAQ34QP",
  "key14": "o1akqzGkjW1AcBU8w3gP7Doq4qhuBKN5axM8faqbu6xW3jb3kFVzZYavLD97DK7Atm68TY83Fn5bCQ7691G1tDa",
  "key15": "64GmryguSk6KLzCuzvMBzKLiz74g5gw4ubHwpetwcSpgNHWKA3KkabUZxoFAJEBHDKvhZo8bbyzESmpZYVTmF8Uz",
  "key16": "34PsW1qCAhqgzwAVWXDdJnjWcS491Tuv6hKBL7agpWvGK3J5ABa7cyTH8nt2x2iXjPPDTvXgFbETMZwHnoVy84JT",
  "key17": "5PcpeNtPqq5FZhoBDQRQSXiya7cjiY45MeA6WGSU6uPoYBzs5NP92QNDaqskNY4KyKoGRTbW4hZkfQrk52hSkLyh",
  "key18": "4JWEMiPjqUGrAVRZVtYJHrz7ihy7gLCh7oqizxYTzJXSsZFmnvtYwnPwxtGtzAg53bBEYgktbJpqDWsiePhfNgSe",
  "key19": "5qkvP5pPy31ht2cSYJ5LAZ7Ut5w41pRQLTA76rpgcPwyo9j3jWJPcXAfwZCHQgpjf9Rx3o8AxwPodNgFpTnABChf",
  "key20": "3e8RnoSiffgBbN3xDRvErn9s5MsQCGCeLkEsHT8wEfsvvY7Q5PzLSGRkXAWV4QVGCtrWVwNm95uanR7KEcsnUDpE",
  "key21": "3phzWjD7hxKzzWrMNVji59pfAMpp1itDSpWXTkjCfSUTt3pp4gbkXuKwNMAZS5p1Hb7BhnB9uwminCerPcqzddZ3",
  "key22": "N4GWhk8ECzRUxsbd63pn73fp1zDNFEZqhXsg7Uj33LcyMcd7A4nmWJxi2fjmz5rT6oaburAHWmoBwv5A6Tm87kj",
  "key23": "564vLjKQECbkpzmJ4YX1A4brZhKbx1YnrvAZD7bfHJEdNnHgCZqaGUXUzmtDqGfdchAUExeq5Hsaz6n6wiMCMw49",
  "key24": "ti8YU8YxiCTZtxJXWjHy5AzDZjbRMEifMG4TwYTgNE4NQVVAohk1ChAFfjSm5Yi4ZuMTEtXVxd6MrXCTHYUwqat",
  "key25": "dUtizeghEg3DqDA3kH2nSwd22xBVbyb5sWuQbWQT8jRQfE9ZFKuZ4RKUsSkzLcTqdyYpNrZqWF8JaaaNb1WvqtY",
  "key26": "5MsLSMAknXHGCpjjFCr2uRaAE59AYp2QuW44gn7aBaLiGULYgPN4MntNp4cCjSVjiu3KK6vZ27FNRGbgHc4yNgT4",
  "key27": "5Vmm5qK6neTHQBJGQmYsi4M4b8V3JDCgKCGaDfxaT8UimFRooBMFfy5Lp9qP2UJdA5ba9geDRtaUw17f8b2ADR5g",
  "key28": "3BdHF2c9peuM7Q4VWSXWa4DYZFrYtjcLT5nHyRyKcMFb8tcbWLafoMsLhp676ZKVKckBfMXF758qMrMTjHnjtocC",
  "key29": "5p7Nm8RJ8eoJY4E3eACvjMsespupoMBkxZ9fyWSptnyaDap8joAVPTWhTLFkMJCKiXPcbg7h15fZP8LuQtn7FF8d",
  "key30": "4zqupJCbGWMuH97jZY9PY13RaHhETBRTSypSb4SfM6NzuMw7y8mmzDMGVxPT25hgkTqjTQTakYWyDETMnrpm1ffL",
  "key31": "uoRdfpX2puG4euSqioZJaCegnqFhCN6uW4BK22Cq19BYfAggkUvd1e2DcjPK67VFzPN4R93vStR4ytmBaasJASq",
  "key32": "3wf8WZSYTnr1zFfj5ZNUvf3BcagmqpBkamhz14GqxitfyAnpqFnsNLNQUsdLZcodRkViN76C1qJo2zRPTXHLMdL9",
  "key33": "ig6CFtQiN9jcWX3dVffdkGudfipCxhgNJuhqt78KQamLcsqUZGGLMhW6kMrbCJTyTDAUec9y1wgUhrgw6JsqKVu",
  "key34": "3F2DNXMNkf9CDn65p6Jcgw9mJBUReSAGzrdG2h6vmmL3hhdNHBTnuh8eVYsRerXFiXbXkPhx2ZpfUkN1YzqGUKQz",
  "key35": "2UEfTG6WHhcYvahVyAMFwFQSdG4p9c3D6qCVwxQKVGko6iPQ8uaWUjKJ6EUD2VdiFVNL2KvHPrS5hEuZ1jioFURs",
  "key36": "3Zbes86Bgw9yfZ8WwAurDYmM9oFstpH2EUG2beJM1Db3iJKiWXPfC4EU3dL2yEc9Dcao5TXaN2nxC12w7SKpCn8B",
  "key37": "4uYbexnoyR7jeDooxeqctr4cbVvMdToexrWzd5sPChgPQm4ecHjFFzxdJ3BBkpYNi1qVp95ACumCUUWSmuCsYLGc",
  "key38": "5VEHHHD9SJznh3XjrT1z9Z4uGGWqQWT8vMRjbRTgGM9UzHFNv74R5Wyi355T5bcxNjJEAeFYesSj2LcPgHBaFdoD",
  "key39": "7gzwhkJ7jNTbxzHoQWYfDcGByxHMAvinzMUYcnqet4FoVcnGjUdyU5v1KBEigqbg4DZtisgLUq3dP62cjVmK45u",
  "key40": "4jfU2b8hyVX7i7jTf3XBUENxUYyRLEqigQWr5LQt12LBFxNsk9ZBBdu6965Kiejef5i7D9efvGtK4thVtP6kmudQ"
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
