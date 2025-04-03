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
    "wveHL2bmFdGbzMhtvjZ8PPrRo5TLeVszcbMwqoKUR6aGjEb9tEdR89KynVnCni4jSR6kXdqHvS3FGnKKbVYYnEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eFYTehdJKCWUj12CbAmLpo2eb9xn2k2uvtL36VbRpbWfXbyFq8rPt74PLQo1YLoPLC86KWWKrvbTgbgZv9uxgLE",
  "key1": "26hLnWpoLyEcBmV9pVEY41t6fonxJUgtpSiVkT44dbKSmLy9WWo2mV2Vn5YumEWpGW2JJTqZFsTmM8CLwK21FM5d",
  "key2": "3ssWQr6iAotJ5GPmmKzgfq4YpCAh9Eu2ju9Qq7YzBFtCr3wK4dhjN97mdfNTouLurZnaH3Ayn1JvyMjH57L6sUc7",
  "key3": "2nVmuFboCZnzgGnVpygkgKLJBrSMZKXHC374TcMnuMztx3DnCwKyFhb5BwKU2AY8zTKWwFqGGALbR8GDbMEupran",
  "key4": "2d3tndvDepTBEceCdE3r6FET1pi3XxA6JQdpMxz8nPhcUeZ9yNcFd1xCgsHBi76AmVWMxUZVJbtgLSbkBWbvPAqo",
  "key5": "9R8t81FYqdydyS35gyzFd9SpKtKEUtqbPPUx9orqytDxpjYnYYFPMZTemwyeNL87PbDYsxqJ3HnbrXvFUfZ27gT",
  "key6": "xQwJCneapYeicJrbvR6ihtbvxKfWPiDnoxHjSmw4LgwFJSfbGtRYr21p11gzqHn98S1hFvtZ6TS6xjUFNMGvmLd",
  "key7": "48h82NjXpjShWYSqEx6XQr1DJVg9PnAEuidraeTrGw7mAzvXfDg9xktovJ4nfosezAeByybyzbdACwR2h9X5ejRG",
  "key8": "4t8ct895xr3YPgMDRdarnNyP8EkAheieYatppEgQzd8Rxi7QZSyQnAX6RMuW8WxztxUZkazJSsLD5Fd8ehQEEpvU",
  "key9": "3dEAQD95a1CECGHXiQ8L5yjxeDNR5yCrWBavCZSrDUEsYpYWLkU7eEibZQHB4qTXnbTSJDnAQA8EvEbCm4Mux7Cy",
  "key10": "Li2HUaus3wQgmdfDJ3k9JHjEmggj8j9pqDhzti8DfXyiYfCZdNSG7ZsdjHNVA1o7y4Zx4paFQFqjVzt9q6XLJNe",
  "key11": "4r2bfqDpQVD2FBuSKuv5HPFm35zx11n16CTV5nxbz2BPH8TS4wK11AXAJUhUjhjUpYW8oVVEjQwzE1avLrEqZd9p",
  "key12": "2bD4sPkwHtC54Z2iaFJrtmJCn7uESJK7WFwF8zRNZMfcH7JU8wYP7QRjPFYS6fJyGEqPcgqjyXHZPLF2pRLChZYC",
  "key13": "2eBSui15V4bdDbCiAdvdk5nfuV7MP9oP2hBRu2ZYRe4LCnje7s7M7Q83VEevYm78s64Cn2aMgZsAZGLRYGS1sQbq",
  "key14": "4WE4q7AXLugjrLg8kMcgBHYCBcNSS5NHrjsH7zfV3cKb9YcMCHqAXPrFzMTiw1Q8QecgUR3BbDSr2kotVvpSNYwt",
  "key15": "2KV54jotCNHX3voM5D4UHCvRfU1oTsnYMGgT9xmqCXS5x6pmvVwUEcrSV7gjqtbiwoJ3rYJG684L3jAg3uFMc7zX",
  "key16": "4BXDJHm4qwuGjc2nVwsUEHpQj6TP2Z5taRiZHXTWhknvwsjmrz3akANKESRUXaE7rBBt38JnwfQrcgzyapF1PTN5",
  "key17": "2cETYiRCmnyHL2aESxdMapb8NgzTMHV2oJZcoAnP7dQ4RqQNQCXKN4xgHry3L6vbP9EAYWUg9M7u1srHnqNTLq1n",
  "key18": "ExoijxdSHLhbRSnBhLSxu52Sy5aJudTLygFAVPS8R4hdKF2nCKxKkNevZ948mq5v53ratoF8SbxyZSMZUVY23qz",
  "key19": "4o6aeR4iDN9kYb4RYvnnBZmrJjH9erR3fbYb4f1e6VVMFirm3ZXmj4sWR7P3Fub1xKJQyw8u3RPuqZ2Rm2ZG6h6z",
  "key20": "23C8EGFWpULyMvM6vwMx8cgTRGBiV3j5g1TowNtp3euKKFzsdTzehCtYSqiqTSBYCWDW2qNPFuX4sCiiyantUxJL",
  "key21": "39dvUc3EBcbNFUoV8Wfy8wiECgtHANaMi82SbwAjaHMqxfQSxJTjbQ5uxUh94Kw1Mj5esYFy7K4669MopBwACPqw",
  "key22": "5emqAijJ4rBSCrMyLZzgr22dCwnL2iCAqdsjH9GZpFnb1ShS6wcLePYr4KoSzJNUPFokLgBByARBwyVFdfsbCAzM",
  "key23": "23WB6vY8z4HRskaXe7XDTybYbYfxFBc4c9QQ8reGtyMKaL337x93RT5wNVaMihb14uT6YpuK6Hbvm4uEebX1rR5B",
  "key24": "2g6qTdT7oc3iWL4eAsfWihBsTDSpepqk5gs2okJrAAzPbreMPtVZkohqsRRZv3f1UZGcTDKUZqUu4zpXMCs7x77i",
  "key25": "4yGhdaW4kXdHTAbupZWxJHUmgDAuDkbHoGvk41QnqfxrJbnwGHmHDzNQ7TjwFmiauaRtNRJRN2bG3aFU25B3Q5mr",
  "key26": "17AYpArxfzyyHXzn9x9aTmh6tH7po1Qts9f4Vgcow6tVuCSLWn8XfY6V7iZLf7cxvCLVqan6ooATssVPiikdT2W",
  "key27": "2zuUAcRpyXiHd23cpALyLjwB8GXxYqo54Gnu2SmSXio8jooyWFqEbpRA7ZhuW4bLWweNFgfxtZzFNVhCrgqN9Da",
  "key28": "5Aw5iQifLrqJHcGDJehxYbHYPBMJkrP46u6kShiAtAtDdLpub9aqd1DxBdgoxPvNYiERNsNGzFzEurM9phzHjoJG",
  "key29": "2AGR8kYeG1bsdeFjPihdBAvnEHziixQNN5Fk5AcVFWHXiEEky1EXmmjZvodXZnvWQWCcrcH7Rkyit3yxveCjh6nU",
  "key30": "57fQNkZ5LMpzxvhQRYRsVYMHMV2oUWvwyf51AtGzxCAeikMpS8nNo9t2FdLmBN95wh4XubkCunt8HEfT6aaW8pLn",
  "key31": "4PwGVAC942CmZo7AETUSytnn98mYqzUf5DW2G3PvcNEpbwQCSYcvqswE75hpRSKPdAjZZXJ7rz5TBkSLL47KV7jG",
  "key32": "5EhdRHUbi6sSE7JraaTRDeP22tqY9DtHYDQg5Nk1RDW1UwtNpoi29bZLpg4T33uaiKNj822DutCC6qXX1iamPR4y",
  "key33": "Tiyod6VRKuesSborU8ci1SKa2t2U3QPnUj4Fu3euhfLv1RHg4NvHyBnue1s6M11uSkKFkzMzdneTdyr9Lj9AwK6",
  "key34": "3xVGGyS1Lg2QQ2BCMhgX3JA1A3gQjwSm7ZUNafn5SwTXiXTC9jtqRr8bAcBv9e851DomqT47TyxYyWPsAZArGhGt",
  "key35": "np7VbaQSdR5fC86apoXt9tAMxDTgS2egCodpe51QSQ3dWaeeWRqVy4H4oo9AGDUD471N4hq78uFaZYLQM2Xg67Y"
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
