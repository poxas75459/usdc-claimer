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
    "3DPgx4NRFZ89wRM1AX2vL9khwuodve1TShheyPdMRVkSwSmvaMHeFoNmL2bVPE9Ev5B952AZKFhJxHLMJ1Pefz28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vAwzzTVhctdspiMmMbwrkvg9BsuYRwVoPAmU1D7Gf9EU81PHhRrjit52YsPpfP5vua7QmRJAEXoaPPSFTURA9gz",
  "key1": "3VAicDdtHZekijpvTMKTfsKVaANW6ndY8MjHT9qzWDDe8rPqLWuao8f4JBdL7rTcT8esvWbZF3FYzfZoQHmsA8py",
  "key2": "32WP1MYnXZmtED8KSgsEuCBz7LB7reQHtdUfC1SLbjiN3VGDSb6aW83bv7iry6weSfF3fqXmECx3r9hyFu9wTYCx",
  "key3": "5wgYAmwBAoQqhuGCEi53CXjswYwtDCk1vuTtkgJQRnUuNrLBCcg2UgvPpncuuxcYcn9PL5HLtB54FQonFXjxnb5T",
  "key4": "PGYKNJWbrKVfaa6fw6Us52S5v3s5Hczr7sPpQudQSPRFCd42TBBMwTn7mD3HQdtTzRf67vq4Hxc7vyKEieh5Yav",
  "key5": "33P6f65jLmrAo551GGcH6b53z4rRkiNcVPyt2sz7ErKSBcXSPg1VZwtZaLwL2DmyzJBYBZTdHCwR9SSKHDnqHaFx",
  "key6": "3JQ5rKqFRQj3PAqqr6eHgX8PB3dWaU7b9wXFxSeYJ5zZs11YGL71wfFYnGHdnWvKHa4xPnzr29rXPxqySD3sgycr",
  "key7": "5NxwxSfq3gM7DDvevNVowy592V3bmbYbBbr9TEtiuRDU1ZuVp5qbVxFSzHejatKBGwYmjPK1TiKvbKgpJLRZyPai",
  "key8": "3jiGTEXmDDexAd7VtDTEC2WxCmd8Fgy2H37SsxG9jRdAMN47goC6ggXdEZwpfqPuSEeF29mis6gF6A4pfnpZRh1L",
  "key9": "2aK3dCiE7mrEXvrm4BKGcHaosnnveG23dkCYAnCLyy94RdvC7SqsL2MUPkqSjaUBCa6EDeK1C5uPcj7EYX25pdA6",
  "key10": "2eG9d2VRXETqgNLwKXajHoaJCz7ohbxDYgG6aQWbUKCNfs8J971Po1WsRVdTYUCan9nwkVrf5hTtmhZ9oooG3NeR",
  "key11": "2unLiimWg7ZAswdJmYJsci1RsMR8eukxJmHdeWFGezjAgczv7j9Ladu6hUKtYqmexuWkts1FVAjMFAA8XvoSSsiQ",
  "key12": "5oKKpSJ3y6sQdiscQYhB9e938f67pjrqxNorb14cjyj5f5fqvQN5exNEAxoWtRQ6FZyikZwy6gpfPNQNwikwGSUb",
  "key13": "3XWuXpb8LWJqN3VaVgMJ8aXV7ukdgEB91UuFpzYi88Giz5PDTkUVXUPC6MgPdfCbmpSKpckbZ2o6oVQYvuGYb1yG",
  "key14": "TLS9pebJFcuuoMtuv5p1A96rg5EMmwCStQJLktmZU8ny8i4mYC2RqL9qWvauFh7ugUiCKtWHH8rzL1VA1KkDgG8",
  "key15": "9XJCZh1ES1rLpUVWmzZwREktABbnLMvwpYtvathPw3gXxB5um7JUyoWsimvbQqLEUdvvXWgQfurhVDiyoMDMPb3",
  "key16": "5gLdVbCfsx8ZT6CE8vzHpDPzfpFbjXL6NsJ46WZT6dNarQvNguQgTVMf4UaShCehEYF2nvWnesLvo9VcfC5NtvSV",
  "key17": "4brGMTSEANpUrdXvJ3tPDyYUXkiicBqyApwqNQ4cH56969oFNkqFNGjR7zUSta8dL4KUb9jkpPgXorX6SvirsJgX",
  "key18": "2GaWHQCVc5UUeuFrtCuQbQ3gMNYrqyJDYBNF65xXQbHUdQLcUDhzxmEA3Mi5uC81J3qVZy3tanBFh3qAyiH5LAoC",
  "key19": "62aeBxBH63tukGsdT9QcXM1CppfsEfjnJuAF7DHH65ERZgP8NJfFZRfL5ggYmEkGQzJW7knFPUoo1f1ys3z8LGsx",
  "key20": "56eeayrq7Dfd4SZjbDJf5ok8kZ2uvHRF8vtGUyJdA7AzyB6sriRgHHxTHiTEZd1dedG8ff1hpZWYU1NiWcGh9AhH",
  "key21": "5SWXwBGTwo1pdUNmE8bWRpMXfYCqrpPik4cKve8RvEfExzAYUM9g7tTpxTeN3fFxYP2Xy6gumb6oUdt815C5soae",
  "key22": "2eDxXQVNkZa4x9G4GHPQfbSsj3XocHSo9TipDYZVFbzUaoTCNfx1A68Arx2wWJr18ZySW2zWDSUoa3pTQitxqVK",
  "key23": "469G6t5xNEjWVsf2qdVqMFJbY3cHCZ6BvGMMVQcbkULocBxzFkiLTnrwo1hV9kzyAzsEvuZ89mJ7i3Ch6ghgZva5",
  "key24": "3ypMa6dVh7fWVKzDQ7TBrrDQsxE2a3iXyGM2bU8FWybQ1eG1nqvhy4DjZMWMTkVqXikQsX4kR6mzUwGVR2f6jeLq",
  "key25": "5BZvLqUKjkujRSnZ9wd6chMMp9ab93962HHiUzCG2BfzCHQDzeWvvV7abd4cVY9Z7YkLtapyjYNhY97rCXJ9swJi",
  "key26": "4XDUHxzLhGVADbDM7MzZNwKmXh4JffRZoSNRBY2qiPy8exgKHNhTnZE2DWCQCYyf2CZTQre5mGhjupzepsvqkhq7",
  "key27": "FfaLwowhMUyu6qiuDdWGVsRmepWvTNPb9xobHPcfAT1X96ZY3T6MwJ7CKi7KggdTXB88ms9u4EBuyPPBNcB3z5K",
  "key28": "257bFEAx3VpCZTMJwszy1Q7fhPjbEZVMR9iCNPG6v5jwkv1512bhEEDtApHghDL9DrnSByTVsybzR2Jjm92RPpWX",
  "key29": "2K7j29LpY17s4NHG1uB3vnFcb4u5fkePZgfCwbSS3Gc1VoDkoNXn17ismv9beVrxrRUrSFUuQzmowupj5LU2sBaX",
  "key30": "Bsayrg7JiQvgRdHnts8v5LXqRQ4WjqziWcAq8UoVxZctnfRSPdqc6iHsYjQbbC3heYZ3jg3gxTemG7CGSSyueq8",
  "key31": "4aCWnpUd4LYasG3B5kC5W84KmzpbDAPC6GC9rGcUqVadeRrbGNapB82zd1kH8CtqFaF5cZK6BtpZ45FhkHuHed43",
  "key32": "3tmaHuLtEv2WLEfD16KzdY8MyJsvbHFere4nLaNmyKToYdYtyTBK7KWyjUv86VmQxSRTN45zRH4zw3ZoYwoiMEsW",
  "key33": "2oJmztMwVw9bahNspvNj2tdj82RBmCXUVEzCLR9TjjTSGwcJtj4yv7GEGUoCiT4ciEgTtjjsQsDwkAYw8B8Bwrsk",
  "key34": "5Jw5zPSD7HuoChCaVJRkmXpsnQfvKtwCGieRWn1wJBqSL3JemyrRzNzM9Q4xGDJGRgr7cpHBzj3pSuwPs2BuZJVm",
  "key35": "499i5qohs9QSyGFxWCw2CGbUijK9StfsjANZS3ziFk5L2vEqZ7zqdEE1HaWeDnCXyUAyCHtc6Hxnmmormvu7cxme",
  "key36": "3z7n2bPevU6AmJgbHvyeMjKxd9S1oMmu3kXA9cMHzeLynuCPQGkd2CJBHAne9Dx4xQfqoHf5s3je9sADdnpRDCES",
  "key37": "52xzSCZd2JzssE4y3jrKeipJSBshF86RdBTKtiK56jsTpxeXMay2ntM46ShiAeoM6cazwskpdRbztjLqh9Jxec4q",
  "key38": "4g279cYYaDHJJsCeuZJmdqk7s6yFD3E4aewCBgJTeGfSKqj8PirqWFmaxGM953ziajK6uEpvR68W1wKNJjsWqG8g",
  "key39": "5BqgfBPRUH4Syemo7TYAHp5SdJbdZBCGbSNvMAMmqZLDzdeqYB3zfBd2qFCidpvjaFCSi6S73g5Ax3vw2Bgj188K",
  "key40": "2dfhtQUAW1ckB5sJZzu31kosRENKge5DM6PA2MsKf79weVZiFr3vDz5gzFKsG5atKgc2PLrvPfQL4rdAAVZftBrD",
  "key41": "3RgKErEDKKqSb5mWHZKdaTqePNU6qk3JnrUTdHpajhFK54PaW44Ff1Pb3kCPT6Gug9AduBkhSq7ZftSxtecg1A6y",
  "key42": "3VEfsVKrrPdfZ8GmZbyjbXpQa9tRYVJkAhV6K2moBDDU54Wor4hWnHzLxdj3HKkUeeBHoJrfTu8FYc7udKbHXSs5"
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
