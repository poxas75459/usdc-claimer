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
    "3bycPkJ6J8YjXPP95Vbbr5H7Rrvxw5MXj6WibR4UpcXorFfmJZzxNxstw7mVgUhjbrA24kQ53ZodXQLns44YQ3Ft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qRJZEAkoSmwXXHjEXGMu7DXnJa19GN2GGm65Sc4sZsP2Siv9KWuyM3xFSUMzmCSNdmZKYFbsdwGwM55wjci6VD",
  "key1": "4W5T65Ay2wX5LcHd8wcWuhf4MqZSDSdeYC3qeBUoQbukqoa99A9iBWFK4rY8oj7L72QpvSyMDEKqcFR9nwjWgXRe",
  "key2": "5WboFMyqsKYA2P8RmuWECysn5ubNFq75JQ5rK6nEWjWvsZiCJyUpuVfqDGkukrmUHcvJrPdopKNK2ENaw2ws6ahi",
  "key3": "2icqzvmgFvQX7T3QHDK6Rxjz6D3hNjHzcHSoQxjSCV8UTnHzprA5VAL9rrDzJK5qqWAnAUYryfiZ3H9hJNaNEyoY",
  "key4": "2Ea6vfVAAWEG2756vEFjYmfGBv28Vp9WzS1rC4KLdKTToZ59T1DnDaxFxLmcb3HWxLmAbxtNFmeAUggNCwEoUGx7",
  "key5": "5UaDoDi9PphRcApr6BidtY2X7UnBKie3TM1EDqbAccrKzhqLqWUhHBoaQfp2DTTzBYijRLgVaFwgbzU31D6AN1V5",
  "key6": "5UEWnWfkTRioVsTncFaKH2yni4C5zMq5VLNpQgRuqnE6VLS4t86fN8DVm7Jk8xLn3jfruGMuaWVCBY61NsyFWHcA",
  "key7": "mMxV2xkTgHgk4kH3gwPJ63ankUXLKm8pexrDtDNsiYBuqtvsNpbWZaCUr91SpwiL2UbaqmVD18f4JtYY6sQzsXc",
  "key8": "AUT2QKBgjwazSh8Ug2kaKhQyb7J6fbSdiBz75M6HXHRQ4hwVCLswVc35WUZDz7RWz9ZxLrbNE8LRs7AgpqFG9Pm",
  "key9": "4vt5D3msNqqdMYYp42WwF6V6mbhhTqPisZ8h7wj8gRGz8KJy5hwCFjbwboWJBuG6NxCnDmkdWgADdQsdvJkwmtVK",
  "key10": "o2ZJwF4yawrvQNbH2eeUdw6EERnzHDTxjMBnsKww37a9YP3RHdjwqsepXKfCJK2U9xZptet6ErnyNxomooj7Uyv",
  "key11": "jyJPvRk9DVRtg67TgKPqwRqSBw5LyF2mA9Z3g7t8FR46hX5VPfYSks7JVKk4heS63E7wFaeY6MmYzr25JJbR1nM",
  "key12": "56ShFRETq43mkkx4SHub7iD8reEKVKiDmPBExVc8K9LxZz8WBnxe9xvMgsC6DuEDL5VbhHGjXBkwkM3tuDrjd62d",
  "key13": "4LmA6pUXpMFdwAS7ftJ3iqtVK71bKJgXctdZdvR7JiYkeeborT3wt5soSoSjreVMfdtXVoum4xMe8od4xxnDL2gM",
  "key14": "3pwvurG64g4ArLj4DdwephyiGXBY8m2Fycx9c5i7HhWkf9QZxVQUE6dKNc4f86HrvdMH5jnaxeitP4Ek2UXzDcMg",
  "key15": "3ZxUWwKBLPVa5aruzRMiUHpS3usPEPSgudzwgYjAMpmi92Hw19kL5NPBPqW1YZThk6qNUnwvDQP2vDYZNGKwH3ZU",
  "key16": "5CDRbvZQaaiiqjcFxJkqtzMLfnFZaiReBsJWZoyVUqqrHWv6e6eegbNa5A444fKEtUVX5dwfLKVe8SDD2KezSAm9",
  "key17": "3TGuDucdpAQBjWRRRdhgrL29CSLZ77uTxswvnkgTqHw1xkd36VmYTztwRwSuq88PSj3YMKk3di3g9d3n94kWdaJD",
  "key18": "49rnT4ra3F5DS3yQ1HuGuywDjWYQFezdQbz6AwGPUyqtXpMtCwVhccGSQBA67S9W4KXnVJSsdprwBZ1Nit44qLjd",
  "key19": "pLLL2a724P5kgBqCUt3HjzwY358aMKLVVJShRqpnXsMBtbXfv5a29bNWgao1zxshaRbUWuu8MzqhLEFk8stYXDS",
  "key20": "3HJhqBmc5kZuYUggmdnZ7pMHTWHDMsZRWWBG7k1gsTgcEtH8FivwNG6WcSs6VgmbUWkKCnBk2AiRnUKxdZdjosxv",
  "key21": "3cQW3vjfBdpH8fVJADVeh9LSxC3zHqfyeepRm4cMrmZi8c4t5FLpyU85ihwdzPPqHJdpP5ezdRj5UaqmA4S8dFW5",
  "key22": "so3wyUuChhpvjNrsZ1x8HoT2cbUgeBjsK3SjTgmXaQbZ5wbhkq2GG7a29hLSjtAx46kEbzsKE2e55DS1XYiBWQ1",
  "key23": "5t7UQMzx8Vmsnk4MJE4vGVYhNPcj6ghLYRozGp6bRdcThLUVxui4QHfHiYYEeJhbnbhAAWgvaRSc7saC37pXB3u9",
  "key24": "es9HvJLb7djpM6x5fTDoP8DW7Jy2X9ZQhVpsb5AVGXkeh8LnhmGhEZGJmtrSorar1zLYYAn83f5HtNZs46srqtV",
  "key25": "4GE8cY3FCzPnwwrtVYihcBSG8jrQq15TfsNQPRkVkDAvTmLXQs98isQeWCp72aaT1GyeRVoh4cF4a21S9PTBGxDa",
  "key26": "3HAAUpL7Ds25KAs6VwBcf3Z1TVNTHKPXoataAas4KF9cgaVpwmNWqWGpxiLK1M5qy48rQ1rjFktVGBtVpzYtyiaU",
  "key27": "4BNZd7M751DqnACTcwM9MwurSyDW7jMV5HzFicjQMt1qyvWsWUNwc1uKmSAMnmgYwUYoNQ73GY4wkKEAvHtsB5yW",
  "key28": "535QbiLyB6EnEzymR8rpDU5RTqi2NZdaTK8Z28Y2GDa2mYNwByiCKCeGL8oTq7QCouZ1Qa5CcieJfPs7DPVAfbuN",
  "key29": "3yazU6fdKs1vZaR1BdWovSV5RELyEg4RXVR9ZwzhNsXkSfjhNUCnafcYkogVCCYQuLio5B5toHwEYYFjRSrt8h33",
  "key30": "4eF4Chf969fuBC8i4BXs7cfTp9urwDur3LjMF5Y9PBLvcMyrJTjYDij8NYmYoWUESTYYWdfo3rqnKzy2VYWUVS1w",
  "key31": "295r3dPaiV3pu8xfw9BhXxxqFd7GcvvDPq6xaUnYSQKDCG7rXTiVmUYKuhzDk91nzLyWjGZkqSwJF658H2atG8QL"
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
