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
    "cYJcvRfTVZtCEDXo9DeqJN8zG7Qa6K6nwzBwDvqeE7eUztZ1XXx1eJkiamxcWrZX5LwH1L9858rAi3Atj5nu3s5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UFpzeMeLVvA7XW8XRD4Q7rk9mxFwc6BGwJEDJjPagCi1xGanQrd1cRRbfL2ZgS2c4xF3kC5zDbwXRnxxhjHSMja",
  "key1": "2Yfgss8YAMEcok2X51984aSzmxXmc59AtYocPGxr1N8DYuUhzoshis7ER3p7bwQn3D7b296BKmHnziMsanZxBKVn",
  "key2": "5c8d4gDkTNuhQvKQUpfA8e4W6L2j46ypVzAQJxSLunCBH92mZTSuzPGojAZdZ6j7MChTgUkBpHEhEH31Xbmxrttq",
  "key3": "48tJTaKkbpiskMZbZkQmDL4HprDYeAQZ9CQK2vDy6BnnosFkvLZBUAtnp2bPCH7trarxJ6gDu9GP6Zort2HMcmVR",
  "key4": "5ua3tUTr3rF5gB7CauKX3XQUupfP5qPEijLamdC67MNydX1ZRez1afQ4zQZZnpbjh2gHVU6oHv2E9f4Vy5fSmRLC",
  "key5": "ovT2GQanjpreXn3LDxj2PR1QSkWm5P84Jfx2vqQKE81G92S7EUW2bkY6VwPJuHkp8pCsXnxRf9tK2kS5G7tat7a",
  "key6": "3kpSiDaB8kvMpwCzDS8x4RoFnwStRc2nNdXMMa3MY6hbCaV9cjXk2NjQg2zcgmDYSjU7Bb2qkepHvNdFkggFwqz8",
  "key7": "44DE69LRzefACvv14q8shvL3QuYPZTfQLsvddxhiPT4rvo51dCwHudu3z6doPFgckgsCh86CCxVb27g8v296GHLg",
  "key8": "WxpTF5U9BbZYqRtTPkxaSch4b7iAyzm45Uo4LWiT5aRmLVztuw3VNKaFhabuoMoP7YfKVupzMjMPxZLhbeSW8oR",
  "key9": "4hZC3aWBirSspu7XMMHmWAkoCqZ5Ft63Y27pHKYcKCQBY7h8mEoHWscXVXAATpzJBgvfaMgUWBrqMNj3C3WCSn1G",
  "key10": "5md9gPwposNUhk77TtQC17zv8VUm5rbSX3ptHJ3TQUTrZXZYeWLQv5PNJ7D2SMmcijCsuimKiDuYNfoNoJswE3Fu",
  "key11": "3wGGTZaWR7CVLCQkCJPUJM2L211V1Y8XqAmFHS1UnirEMWYdUwTDMJK6WPUtmirVdsF4MWyeufKHHAhmjUse2mSg",
  "key12": "CTEQxULLwvpnFZ415ATsXuQKoeQB94ZMkzuJ3SfAgAG97wEurM7N9NJzx1mWAnhSXCEXsq24tGqqbbG6Szw7zmE",
  "key13": "3QdcQq6arZwAmRtnc6Xfar5FZF5qB2nsUsoDVwLohE8KExFFZnvjvEBxJHctYcYRdBrYHGj2wwQcVSiAryPdYBEi",
  "key14": "4C9t1zUP5fWZ6Z2fzczmtJzGZbhD1mUJF1htX7snrRVnjYUFrxPfjmhvJpvzUYgwZrDFrVDod3HsujuDNNFaw5Hz",
  "key15": "gbwPr9EVxuAgkHkjYrFAainm1ZU9QfjDJFNro2kmEtNy5U8qiVsSzpTUpFLYEuvLVZdUYnhPFQ2MVLih1Wv3FRh",
  "key16": "51StHtncyGipvwt8pkBQaHBMqX8Vfrun917dDXiRwrx8zkD2rkfdfvpws3xhztxVqUmc9xLZUU9n7TQSBeTNBBCa",
  "key17": "ojQBhwQ4JDAvx2di4eZE2jjx7EqS4grYipsVWUv9dDW8n3NhMZrt4uBFWuoirMm2R6qkr4SGHwb1ejKy8fYkXuf",
  "key18": "2pabaMWkKoCm2yNZBneRof2RZoLFqBa3gC3ufRGeEdrXHQE6vNdJzPndATcCKYoAoUECMDf4Mbh9ra5wJPdcbLQj",
  "key19": "5JENe6pGTqHYh4pFkNzQ7W7oHohLM2bmetHd452xG3v8ffZudG3n44kDSHpZJd25fKBtShCLfC84AHdS2ZDnacw9",
  "key20": "2edrTUQxgFwniW1eFDgMSxChipa7J6pWh5tNuPBukAdLnxRUvmWc62wL9WmCYa7Hgk6LfGoBkpnuY4GtReZbiwLR",
  "key21": "2vvCFeLzNRtrCvmnKpzKiS32GB1PpDhsEN2Hi5mU3RMhtJpF6HntjnSYxQGRYbQ3mDTjq71amMTP5qCnwu5urntM",
  "key22": "4VfLTFhS1pbU3MHnGFtWYaCaUBFQeqwqMUxhFJ2i48A9ccqnz1M9CBydEQA21qnXMFErMdX2KFQWrmUKmJBVswvL",
  "key23": "3HwHt3EX1R63TLohCMNvaNguDNqvGY4vM1N3ZbP3PSzjfSBGAjwLEvbTirtMGgwLgHNoUg2oXBy8333zpp9RAMAC",
  "key24": "pGkYoao5mdj6Z5WZCXBP3J4Dwd3sQVe7x61Vt9npMzCLmrDTXUENLaJBMSWNsKJ5FuYePvM5v7yUY2A1Rt8ytX3",
  "key25": "3tfCpiPr3PFa8cCqsXq2dFqWxR3SeeEK1psyvvvJZRYyFJfr1npdwUtLPLSoBX2xp4J8Wz76FVa2J2sAiC4dS5rb",
  "key26": "3j8s1ParPjQzGamw9DPqPCT31YYh9R5XSr1B44vLFWBgFNgTd7xUa4snH4NabMDjpnBNihBqUU3BGfAvnvyVKtf1",
  "key27": "5E7UDJLAqa7LdHZgHpVxsKcBC6diNSYjo7woP9h19FZzp1Dq5R3iPSJKCeLBDRuraztkVgzqmb6UP7BgDKyFyWJP",
  "key28": "4VoNrCwQZxD4gmzTXzbE9Pne8hR6RZRAKZs2Hff4yGSRZFPHHnmgp9e31go6cDhVYXm8yBZFavhrfjyw84U65EX5",
  "key29": "f1og8j2EF8R1NGsKNbGVjiruxfa7Yo8ECN2EYgFYRiPfTYnbJSgtFUAyjxvjioZSa1dDoCS4JCwV7e3Y66ciS1t",
  "key30": "aznMWjtKMRNFPoDTs1cuznMYitvFcLjq9pS9bxvhh69PPpNzrkivdvrTvjz4B5L78CJBg3z9aByLdVm5VrAAHtK",
  "key31": "5VY6FirwwnRmvAn9ufMGs9F11GysbMmNFmDuynjKMyrJDcDNypSH897PZnopxix32iQbSbTCfrZzkohpfztfvfm3",
  "key32": "2hyDDrDdsTJkShHC6hvXELCjHeCHnDD7CzooFHmMyyQrbJ6eBzrgi8FXcmTEsug8LCbdCZztjYXGYK2vRtH5Nth7",
  "key33": "2RfBFBsfGbNyMvjSuKf81XY35nZ1fuRuXCmi2BnrDysoxD7HkNkXwe6SfEXEMs6ozumkVo6LoSBLxvnCQfMX81Ec",
  "key34": "3686XuYWzoRScWMv6ta85SHymvny5ComQLWLYbVrz8Th9J9WUaNhDUwdcdatpNY6Tszt6hcpQAcFBvVjn9GUga31",
  "key35": "2KMx4TQoa7B3qwiiMRUTiFZEyQhGAhCDR8awZACPXXPmuU4Zscpv5AB5StKVcBvfBJoDLJS44sNSd6C9swVUJJE7",
  "key36": "243wMML2gnDXS4hXQSZxR3upg5dwJUKxe1BykEL73B67B7itwwK2rKako7Vd3nWEP82XXga8xzPLNyPC3r56G6DX",
  "key37": "F9sPWLfCYjoGYDYkmP5rEdbZqSzDRk9hxCkekd2dywCbqu55P8RmqF6Pevnq4bZuSRJSHTntar1NLeA5TJdw4Km",
  "key38": "29yZVmCsGo97GjYWawG6vtUN7zKyTiPjPfHn1buRcYQaCju9o8hwkfcNoBYeDgL4PTV4sNkWoeV9cQAKmEcAdZF8"
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
