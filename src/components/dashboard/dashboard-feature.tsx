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
    "kDRZyo8qFB4zt6hcmjdsEbk6pw3ZFxQsSgjUFKhTRvEn79X5EdNFN1WHou65Br8nVXNcXpqdkv3cEafHBctQrbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NzGTdoKBxf8uweoabxTVxBny3S8bAhT3mD3frneKMUj9XzwbW6f3zENn5MgedVP85Kb311dyR3YzjwpRRdMy1uw",
  "key1": "47jiXDkNuvKmWmz2Tw8sa9W7tbv4hch1rn87AJHoCELhmhnuNVP3CmCg9xsBWgjou4oa6tKuqYWC1A1ShwSG3u9f",
  "key2": "5knrB7roxwzcfPedc7UXwHgAmDCMF5LtT8Fp8ydb5ANyuYf8HD9eg66ZZGepBK9Tb6Ex3P1KPBeKozX3PefBi3gv",
  "key3": "62hWN4GDBCA6yKHsqXN8ThaU5Z31HZSwBkABdmRbGXg56vXv53GiTQHd4CtrwJVYcAK24ZpxPcwMJ5gkELyAtWeG",
  "key4": "2zsbXaCm2uVgZKniNpxfY3mHzVB4iPBnzYfVtzZeZY4id1G1v7KWkPbiLvVUAxFgsEZ7ZENT9wWSzL3HbbFE2YK1",
  "key5": "4nMunvY1Uv9gtK3VRFmsBwUiE8bEgzrkkYNmzcMFSyGTAnAEtisz4c2Kr1G8Vqg93VS5TA65nXuvpfHWzbKb2joU",
  "key6": "34nXwtH1cxjfWkS857mQSic4JhTuBxZ7UzrmFKSwBQHFdX2mHC6QNbMxs6qm6nFSpSjpGzpXa7YJCpxfvxJZpKAQ",
  "key7": "iseqqvn5eGSRKeCHBgsu28qxeNp3uNAuN75Uf4nBy2C4PVfNH22nrJKrEWVqCP4Ui8nUuJBVZ8wxpyXPCBX5qkb",
  "key8": "hQLfk6ywfJr8ikc2TCYkknNDBS4sjTfuUhx4nGULeKzVsonGy3XLEijzQEbQUENaybkkzzY82juGwUQaoLRc7of",
  "key9": "5UhTfzqMKgxv8QFPE9Gsi1PZkUxXrxZJoGj3QVBH1VcWEGTzA4eCqEm2ukV4RBdBUyTVY5c4a4sQBd7vNRWudRYy",
  "key10": "5ZVSNcMduTXoKrKUia69qR64t5b6cCfWVv1rujRQLcW3rhZZTUaq97JfAUFy95SQUufRT8nTKJFjpe4eLKv4cpMD",
  "key11": "3Bc4omT4ARimRwCaL7Cv53o8uXQS6bVDRysTQRwm5Kf8Sx8QmV4gK4fx2ioioRtBcd6cdEjW6LJqisjLQXZ5uZ3v",
  "key12": "tM3emK6HKLft8jpWo6N7LRTvorwaXjJ1AoJZm17kGqQ155RiG876vnPTzefnfFn1FW3mewZGyEAHY2FU16J6qb5",
  "key13": "23k6Ljjp9GmxEL6w7xuQAVJ933HoyUsHDexrS5LaZxNkkfb1zsPq7dqyubTi7jDDWtiLL7nt62m1S41V3WnFjso4",
  "key14": "2JS7YgNXUpiWoB2tAXCnd2ucNbKRRRy3ZxMUCyHjVU3max9P2bdMRhbCWmMTyjavTWMcU36pKstZW3yScUAAqgZY",
  "key15": "4ZiKXkoDYdo4i25yjVUE3DAoEhLxG9kVTbmymGzEKKMzgkxHpVHuVPuX99Arirv95KyKZiTNuMsbtaxxfxotLq3R",
  "key16": "5rqYjA2ZWNSkhnYymEQvbNJ8NE6UuPrui3Gv6h6tzEmcwnrK2vuRHR7oG4N57H8qgsgZkEhHDmyD3EhFY98s4su1",
  "key17": "2S9x9fFt5155pQSD1otMJ8RaLh1BHma8Kofq6ZqMiTDgz6bhPzAFQtznBX8HNGm6EmYxavSDqT3H4d1mARBnu92",
  "key18": "2R5JK71D1ryhMBX5C8Sd3s8FgDSW39X8f5YpYmrKoD5Lo1nmJcWNz88jFpMoCzZ37Zwu2RKjRqDQQpVLZFX6fkg9",
  "key19": "3LFqewsM1xbm11xSd3bxcfst4isNUChTNwd5UqVE8GQKQ6Gkr6SgaJ2AWGQsawLjy1ftsUc86mQkbECs7f7YzJsi",
  "key20": "443KJQ6QbZqpsCSamHoJT4xiSLTdnoNbrM1iNgMAbMP8gfZoa2mBpjkvoZkDLF8rFEHedgkCPBD2LNybat5rX6pj",
  "key21": "45pBfF8T9SCPhQf9Gjq6xBAzYbriZPHUGkVj9Zkn6dGGuuJsm2dTU1z6Y1UPLQhqJPr1ExPQ1izC98nqMwCp7PSc",
  "key22": "2Gx5icT2VA8JCEu7gAp6FoaY7PxZjxwr18E7w9AaRpA2Akxd9YoNMYPcLL14w2kBucUNJns89qo93gd5G3FAzLNK",
  "key23": "4d6yFfagNoUZQZvK9VCsRwstBD4LyWcmjB5rY5p1bZHYv9k4N3PsWF9ipvS5eKSPDNLygsv8whwhJPrnjATDZGDy",
  "key24": "5knH7noY3xLPftsrYPHWkA3VaoXeuVmEmuA35tNx2wn8t47MtZKzKwE6nV2V3cgZ8XZ4YxJ1LQMFbMBd6QP7Sihi",
  "key25": "3bjnPEZNoeKTDuHwifaLq8KHxDwzJUT2Wv7moXnC6xwHozGKwHHkzAVoMvhRQoqA4uWxJ9B1vJT5j9KWvYemG6dv",
  "key26": "6JxV2h7WXA63uSXwxZ3U1A1bd8arsMLZde9wVupGEJDQzPAfprQLQYHGA6nQc5Q1jhFb9r9DYX3KPvtw9Hckq39",
  "key27": "2wRrpbAaoNV7k5FhpDBnga3Wk8ZxDEaMWKqWpnJwHPptk9GRDTJgHcJtBvyXib8JWyaShv33U1zLjCucfWaY3cee",
  "key28": "4MRyv3FQYjrJsadF3maaUtus2opEkAQ2QLe8HKMm5m9hWBmfsvKngo28StZj9WfBQWZCbEYDivX992FWXFqJnh3u",
  "key29": "FjQbVexu4ViHTP9cwSqcKeiYfpYWwZPu8uFNmgRC23wVy8CCwSfP21DGXS7qvPffodnNHkkqVrCKESyiaEiJtsg",
  "key30": "5RDtberXC1VYJFzMkv9wuGXNZcYwzo1EacRJNozHEzMvKF6YJqFEpc6Tv15zH16ZZmewMpBRR82py6Lm2TpqEx6x",
  "key31": "xMYiwhYQ45pyjWwKFMvBuCTomAtwwhX4oSRQLzoCzs3GJcwHePYp68qyA1jKjkmYVQgjgQwquL3c3dAokWwsyAh"
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
