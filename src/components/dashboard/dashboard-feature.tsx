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
    "2MefRXnHfqRh53fTNSeyYrzo8pLEVKFXWZa8g7X3diNRDQ288FKsbDKhBEoX2T9PVwY1yeK8GSzdhz1DhvEDCTg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r3C7N6a8opB2Hm3aMmeTmrH6TDDdJWtjzpo1wRpP41sBovkf8QYcS3W6eSmRmr8jDHFv7vUse4mgwy212yyxCiu",
  "key1": "DtAoXYaVj4eTMLt1oq19e3JRWdSM3TVb2o9eQk8NLZ6SjFAyszZD1nUSRFXWQHquKzs5kgHg89MUAD7E3nDgdwo",
  "key2": "3d5FULr9NXhWWEZvGZZNvYHWEoePiHzgDMQmfdos21ygZXsmBqfoTHmaSc7F9zpQx9j43AVppgvWrFYKzXg853Vm",
  "key3": "492vhHx3jeRkjDr6vcsUQDCnsFe3rCDzF6yE7sFj3ZYHwXv8ptPMZjUSSYzeCfDcJgR5gLzmW5jJn92zsCaHwDCm",
  "key4": "5TDBTrdPGTVn4dS36dT3ztpujNCBFZqM2HypbRwuG2jXfMGr6T63X1Kn5bXaGH4bx4TMx65UNnaoJ1Kj7x4zid46",
  "key5": "66Ac5RvQoeviDdf7g6tPtdiVNiYfXFMFPztngCCjF2QjrbbcQcZSuAhiXPSVXufugjSFSe76Lb2R15AB2QhAmRjM",
  "key6": "58U2K2pvbodoCEB1961TFg3XNYYStJgrgxdqVgPT3ogrbndR61C2hgAhjmpT6UvP1HPhgxPpZfyZdcb1TvoJrHgZ",
  "key7": "e74krrozJhGCDsumiaKHrNSbTdeTPqrgKdAJ9fhELsRUUo58s5w6ZZmQtWq1rLGF5jqZsALBVexVgfTe52iVQTL",
  "key8": "3tm4wdRFj7CK4d2hJYzwobEfTQzqtnKYL7jub48KzFZbyP4JB7r9YCvuhZjEVyfcefzEekaSvnC24e36r48vQa2a",
  "key9": "3w6pbfet8e9M7nsC9HMC4wvYoT4q2eNGcF1RPicXJUHMxtM6Qy1JkLvZ3wXigyroNMoe4GbbdhJfbE7zdHuR33Bw",
  "key10": "4sYgt2Ts7c5x9WbnX6XUy4WYzF2RqbeWRc9C8rr314yXwB7muvT9x8hGTK8B9cWaRb5UDERtCofegyEnArYetzen",
  "key11": "57XvYqD7cn4n19ssEx8VS1vGvSJr6eyH1GBGz4DQGhYzS5Lxb5h9CaUViujRmvLWtNj9ZhcjjTVrVQqPiZmjYTW",
  "key12": "7vzzZuckEvuroVt8YpKM91xtDQtznb2BxP2FwiCw3Mgck6q12h9NxT7bkXxdXrDFkmrMo6fnhtSXkxwm4y9VZbL",
  "key13": "2CkxMnPNUpXa5ksAv3HaZFLejX4tFWLH2cHidnndHJgvPSM8jSHVwwDo592rdhXLnLw2R3e2WGnoneAYwC6aEBt",
  "key14": "3QAUpZzEgYn3oehaLqm1wy2vpQdyDFQLuuTTDEK3f1P4JiAuX1QrfTfEwxLi2Yit2hB8oxyKvrvpb27pQyk6wa6f",
  "key15": "4vgzz1c1zozu8UBN4LTBgNuhNuF22ezjAbyituKY3Zt7EfPzzYwhC4ytau2GRaqUykucbXzqSrgD9RxyigRGg41Z",
  "key16": "3oqeZhbUWjBFdNvqX7bFsVo35Z1ctqF9nJ1BpbzbTbkCzcujntaaPra2GZiGnxWJEWGTUC33G6H51ryFjxa22q7K",
  "key17": "52HXuNqZaqPo42hkdxBY4vhSmJ1m7Qe1ARPCzq8uMJ3KJR9qEkvw244Ls6W8Yo1VTCigNYgJqVD43tLZsshDXYhP",
  "key18": "4JHRjZM9Xm8XFUmjTepfXwiVBWcJhxw8zA2JiD4tH5irDAvVcwCdg97tKkrV7o2MdNkiZhDZaXrwa5eoiKfkRbgL",
  "key19": "5d3b1ZEBtJLW5ZapFEhvFRKo9L9PeZZUr6W2EzfHzCSo4PYcvFp31aUfUErZjtR8op4rStAua3wHi7Fwizwb42qn",
  "key20": "5GKL8CLFYsDAJKPEbHwevdim3edRf9vcWFD32MtVzoH5B93urhSnEDT9jb9K9Mf6YSoxcVogY2cGBUgzAhfphpWF",
  "key21": "4JFC56eTFC81TTSEcbhp1R3XeauJiQedcVjdGgu6HhjAGrsRcswGzuRQJJHjjNVRSKZuzm2pAwACFxCwzny4axxH",
  "key22": "2FEq5JsAXe5wQ5fXxqAxpPnFgsHQxuWy5aZ7iNUf7J1V6oZniZKRRHrAwgtTcYRfausjr3wyPFxQvuhBisu9tgFm",
  "key23": "4pY7PnqT8aZraznHWKtPqtmwqMxfLbiFCXzzsyskcABwEEEjDytwV5xNC2nDNqsYXoznnJ2F81bLDrkHVXkbs5kL",
  "key24": "3aptqqWqwTt8FH2fPqND3mxdd63JZBs9LP82q8LbRmGvqtVNtgogptyqqQrvbjEbd1DaxJkUp386cGPQ4mwQVyug",
  "key25": "5g9nd721FmX4aDxYShaLjyYZFKZpBH8Rx3HQU3YD3t4oi8vRV11pdvhxaEHwuhegF8pnkL3EwLXZDaVxt5fm7EwU",
  "key26": "5jgHLkuNbCHB5yBkzHqPSAd65NXdkp4bAuAAJjZwrYx1Md5PBKknmTa7dTb1EWqRDVw47rshwgHK2EgCeNMxLPfH",
  "key27": "2ANNkDWgYNxkLTYL2wJxRtt3UWNsMKfymDmcMJuZfhwXnHW3zAtCq69MSfkJ3UCcUoqYwFuJtwUEzoBmD3dBNP9V",
  "key28": "4sy8MNU7yoWTrbtjRHqZyvjfZkziNPS7EMrVgzoka4t7JDeKCWvERi7hxsTHgMGqbTxtshLkoBuwyAhZuUMjHiNb",
  "key29": "5ntgEHvW4N34WFeju8gUb8Yj8iFt6rcwLU97PTinjPY9PoMDscuKPizxYtKrVacWD4yiphsUxoh2hf8ijf9XGrqX",
  "key30": "s8yqK1JKMoCWHd1G5LAWXebF7Mji2fJaKuATXj81Bie8pfct554uLxHGYaPby1t9MrtciQvqxGARRaxAuxCaD9C",
  "key31": "3BHSDpF5wb9kQS3NHqP1659HCyoH3nZgXYj8i7TSDkHPd2z88nYYrvKPXEmERPaenU3rtE9dVCWcwUBvz9ywvy4y",
  "key32": "2qKrJSzq3ZkJep63YzQydZ6LGxx7YmMjtMMxAohvEvZaZscBiHLSJsmzr7w4UNwoTQyGzC83fK2Rge5gXnAbZLnj",
  "key33": "5w3YU2QqDCF99jpJZVDXuJ7PuCttWz4aj9ZYS6qpYTvA7txZ9XLBoTrg9XpkooGg6Z2sM6eiJGvnAeJ58rH2YQwK",
  "key34": "2wjTqoBetARdoBaneUUjtR7pbPLJcbaGiR1DadxDsAEDbuf3u8BBx427XXeirf552XGA3uRdWZPX3qec65nnFpNg",
  "key35": "2WDNdWzd28tsVwXwNbD5btY2nmPaDaPDFmJJuLUBFGWJvewrRjnL1v6gfeKw5YeAywD327fgywMaScGa4ERXL8pb",
  "key36": "5kKKbX76GKzg1dYPLKr6bST79woHLYjagw7ngkpprjDDj3HvUfhHaS5suyyPmxUFrHPdFtdXxwEvEXypc1ZCxryS",
  "key37": "4Xg1A5DPwBm9DAoHXWjBsTGQpT5mFP4HXjHhM1yYYSmVGgz1HFd3aTvZKLWU6wzGPAxxay4MCBpFv9VxxKdfTC9G"
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
