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
    "3W3uuiZwxwUfYFcQZ99AiNfwjt6nUQLU9FrH6wTYqqR3VCtXdSwgnUtEbZBYrmec5FhyB8UPUvG22Ydp3znCosz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j9bX5TbRq3KtvPZQVtgcf3drYj4gYnzBUXQGSpCWVHeGgcozsEApby3hr1HUFvcsFN7RXuvCwhKe6hjB6GiM3Rs",
  "key1": "4ysmF7cau3a6nxik4qwuyf4P7cPpEr4pz8fs4J4zSmSBaXiqgqnukSy5qotD9ka9hMwXyJKNDafSgcuJPUgqNJGZ",
  "key2": "3MSd5B4jpcjK7t5WvwDgUiPcPRnvaQe9YmjKkpYuXQztsmR9CMU1hJWpsBXcueFHVNo8kM1APgHb34sVWZNkrtAi",
  "key3": "4nsgoU1gQpeZMDMrBJ5TaNTUnJuesL4sftciafzbwk8aP5Mt2m31jUDzBSGt4F7vfjL2abcN7S2rwmmdxJFSUuco",
  "key4": "e1GNHQk7BETqyoZtH4KUYZvaKeEvAzVUogbgb3q4mLcVygSL39ZwfCVuSL3v6dGYL43NW5gYSxBJvLdacVLpDwN",
  "key5": "5dcgFh3khKrnbjPswAZk6crDwCwyhSW7KeC7LyM2uSA4SsCFKVG9oJiGtLZZw5szAML2saiPMPo5fwsmvy8kHWhV",
  "key6": "371ZLY5XrJVHML8odrwzSCSMAES1y6d7tXcR5MyNXwLvPMm1EgJyXk7wWsZhWQYjaPvoYzujyNtzRSyGhu4CtPwx",
  "key7": "2MKgGzyNPCjeLTW5kXMKB7tn26uwYtnQWFYkD1cJfWRKvkfPN9VoQ6otzLDVtXbXhmHhPU2P5bgaqwALPPvi3Q3C",
  "key8": "2xyHCLYGP52HzhsisELma4LMtLCzSd93Se97fwJT2iyUbJ83AYVdRwcb8eKwbyQ7zNGvwUY4FHZ8cGAfEfrtv5Zb",
  "key9": "4pqPi4imJrLg82Tp9JjWsuhAvAEqpRVmzKD6LoqkJescsNw72Aa5a6NQNVWLdLJ4eSZ5MF5z4Xc5hQe8sQvBD3dG",
  "key10": "39sxZWCmS19Ta5Y73JQeEjfZrVuJMziuZzV7n6jcrnWZRn67LGvr1brR5MGxtvYV69LDuvwsrFP5LeuWgUeqTRaM",
  "key11": "5z1A2ePcRfMPxcAjPjZ3ywJMGoBKexrz2AdUnAAnScQdY5iqPd8TQuLmVJodXJV4RaV4CqYyAoKQvMz1b1AXiyrq",
  "key12": "3Y2jbB4ar1c81VFxHo6BjnvUugEFwgis2eg44v3Vjo61qfEjWFTjfTb5P76FNDn9b1xQeahynReMHyPFjeQJxCYC",
  "key13": "5PRHyzqrFgNywQSE2ev3LHtgdWYjqqr4pqNNPhEMPSUr9xnV2mHPuiEnrb2Nrsy17mWEZq8CbFCUs5dc6Vk8vaoN",
  "key14": "5N7fFEe9UnXD3tbBsRh4KNcfvJZGocAvZthdBq3GHbTzPbBn3HfmXiGggNaB8Qcp9TUtwwhdRDBHST2ZfxTMo85A",
  "key15": "4S3KRu56fqch7vLfXhJVgKsafPbgwxNYLktdA3sbhu6eir6eDdCkjTafVn55N6FPh9RaN7TqKQj2i2zVV4eSajpx",
  "key16": "3akEGxA7Ygj9fk7uSf5bVEynBax1dpE7UK9nan5cxrPkkMVnrFzN1D1jVBxHzPkxHQLcREnkb9w6xrMRt7Td1Xsb",
  "key17": "uqThpxuTPegXbeCCBqZYfAHDjCra984mUZZE43vHK1VtTLbddN9s7wBgcbhKzBB9kkX7g6R4MwCwR8wsyBhfjS4",
  "key18": "61GEai9USaVf8ZMAgG6xuPrSNtMU9ankAkJYqKi2Ln5kXBvQ1M9jSdUZrPabYEYipdw1VWYVsvcCsibpCsPbdqgZ",
  "key19": "2eZm2cJRzYyjgRraXnYti2kJ4KjTUTsb8xGkF2cX7Gp1vxtMeSG8EwKtMDaJTXURbRbq9UBmZibyBriA9ruPfUUd",
  "key20": "4wrNGnE7CbiXJb1hjBWeXCBJgHfr2uBQdSYP99TfUYtms7Kz9zyzyZCrdoGKDbDjH3StNKsGgxNL321pzWnuTKau",
  "key21": "31d76qvQVUiLesVz8W8ss71yA476Ph2fVx9ytNwaneLQ9VKiZzvWTxsZWDK4rtrBR67ZcAjAyzzGoVMa9CLthsaK",
  "key22": "4nfmfiPgD6sSmXysou3UCh6VMVcYUnBNmYwtB8L9vByYzBFJe1uwLBRJvspbM2zrayskQp2o5mQ8EBjS62wF6ZAb",
  "key23": "3usFmY1zbNNqm1YhLQEXY4k44dVZWg6v2Q3QymbKZS2cBwuE7H64cY31m5RGRzhqFWHdLzeV7EZCV6SUfmLdjAUN",
  "key24": "3rLce1V6TyUcV8zuV8StuS24fRjYNRPpyK3zP63dspniVRgHUcAGe3CNBzKAeFfmVYHwP9DGYCmrXBqNTrJZQkWZ",
  "key25": "5f2jSb1ZpoabG8MLWFWCR5Rubnteus1zZSenyiTBMfdqVDcBSPyBQgTu1pcTazrTqLatzixDzcmMveSJ2C5rJrEK",
  "key26": "43BMXB4xNopiENpp3dujZA4bXsMe5aZZLjCZ5btgibPbTH6MkgKoyD6wM9daMWsP9FpUtMditWVmiBAusiNEA6Ar",
  "key27": "4dHF1CCxKM24sNbnkrVVB61zp4dK3EQWbzsH7ZJzfBNVdfNMny2XbNMbMKegm3x3VGcjEBXFTHKJXG1dv5EVgjNH",
  "key28": "3MiyEPgtR85keVSsuTAhvVKVza5X9annCFmNrPMMBeAgtzMxdtYwfeNHP4kygEUkbqjSwfXVamB1s2XvCHKraLYi",
  "key29": "3u219VYMmP4HFTFkYGMjfxZaevUuP1XJyPBJd4HS24pu96oPhNeAYbPNK7dzVHJcdRYNm8puF2Pt7py24qXGsZb4",
  "key30": "2a6XiCmihMvMeKJi1WSb6GPXectPqQdDcMmH5mFzbvTyehbXVJa5z5dz8Ef3MvjokSn8Hbb737aPHFFyZd5wDu9N",
  "key31": "52tcTiCG1Fzu68yURvWNy1rEwkHTxC9HGxPSeH4TUigLi97y9QxwDv5DvLvAUb5Q7n96cbrMns3eWqyx2WAzR42k",
  "key32": "bZRiiUC3tgVs1bgMPvXfQAKAJ1Y4KuK94ckR5GGrUzA2xyeztNQCnMvi5KHXX66F2xnDv2Qy1hxujEfa7va1Ztx",
  "key33": "GvJyPmZm86QySeqXMKmTdwsmBy3r2UzJpXEKyTXoEPBESAwPmG5zhFgQTxLV3z3tS4NGKpzVSsV4337HRqoQDBv",
  "key34": "5PbY7abYgSCkSjwQuVpLMFQYsUxhCqn9XcBFYew9NGgNLyTZ8S4bhq7omzKmTNkkSx1LWSEZVMqekMH5WrCVxVBy",
  "key35": "5HcZ37RdYErSYKj5vFh31GgEGHcWRZgRajKVG7AN3r4Dw64yaQFYZdeiqgmQHN8txRo4M8p1vFHedo2iNexcuzt9",
  "key36": "4o5HU58FVwT5hPAzHCdAAiZZ4nYRogRi5ZWEh7mtKt2APipJGepxMLFDF6LE2rSxgn9vuGwUArUEiXYQPDqG4B7i",
  "key37": "4nUk9P6msk7AMTrJJgGtid2ctBSRhTrFBkJMC8aEXtAuemMqrJi824bTniu4LuVU8jE9Yg1sQUCo4msTmfvh9wx2",
  "key38": "4iEtDPAh6K5btgGRPakQ1HcWYiTBE93UFs8675NEGBGFPBXiSpP1R7wDnxawfSRegsSgJDn2iHyqtiBhNuYKgEw9",
  "key39": "4ZqV9eYrLS25AUdbzbNsiuGV32LRzQ48ij7HqhmQCSrkivtBsdU9SUapWAJPpp3LUFBSxELZGwaCVyXqaURRk8JT",
  "key40": "2mSUYvv88xdVzzmkUAHyuGKobK58CnZXe5BTn3dAfSUjSYPVCfbyxGTBGLLrqtp28GaWC2iUG6NxkYtrAPpJQyeG",
  "key41": "41sxGpPH5e7yDkGUtrNRi3E3pS4PFKukPQjWz2WDKVHTWKsbdgsZoHop3Ues1qdJTfhLKw9DMir582Ayv1aAegZB",
  "key42": "25KWodnvj2kqZbb68Gy9d8U8o4pWV9W3dgPB1PwtwYrwMWjuQaVR8W7HpMSEhVEd49GJeamTwQwoNHuzQio1A3Kv",
  "key43": "3iGDWF4cxuwz6LcKCBf1vxj2q38BA3HacwBCwPGmMkscXTiK8BwdAEE1TjWxsDBPdD31jGbnHFXihwb68iHCqHAM",
  "key44": "9cE1ZZCXLtK4dmqTjxUfY3nUQSFiNmqsiyFtmpVmkpZcjz3EfBgPVuXsG17gvPZmDmrb79J7BqY8ZuXzXL1W8CC"
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
