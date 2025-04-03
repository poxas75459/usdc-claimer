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
    "5EMBGTBc7X2xSz8zgpaT8FcBaBqCPtkS6tf5BTda3edQjmDCwqJqQBP2PrrBfwJsn7opTXQfRzqAL6jy2HEq4CGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rw3T7RGQB6q8r4L2ZRqz3AMqCGrz2S997xi5v85inxck7aETjXEkAVK9x8cvmfkVGgZ5KnmU251vKgW8AsRCtBZ",
  "key1": "34xDFnvWPBtw8LPvU4SkhpFxmfcujycygf2zJjbXqP6bQazfns84qrQcotGNN563v8D2tHUdWDZzC6ysZCQiEU2h",
  "key2": "4YhgDU1znQWRjQGt5bkt9aozqx95e9wCPrZRqQczoQJkZKZL5beKvBDKgL8DoTeibw6joqKBAP7N5UibWWEUHrZi",
  "key3": "4t67x3r5DTozWxcAt6W3LfdxLapvSAHto42hrJfSy4hTTkQGKGfuntiBMWF66SUnCfuPX4LXoRYTbSA8TmMvPQqE",
  "key4": "5To6t5CU28wfxRSB3L2kg27UoJeJJheKG8UT5SJTAo9NxPbGstuaY798rUsByVaLpD1YS6iGjvyLMWbH4u78Hd3V",
  "key5": "48upcVnb66nmvHSkccshSHBYUNAHE3eGTU8GHaEhBJMaUS4WqWfxJ8SRLTwH3gMABvhYaH9nQYNfh9eD4ofH2CxA",
  "key6": "57r8ek6kteLxpfzHQzjBJ3EJKXzkZPVEW6o1pGfrHu3LE8gVaA4j7vDpkw5YkA2LcB4kUuT6i9gE5mjzts84Q9q2",
  "key7": "H6tAxazLZrUuqja13Eufy73bXzmsAZ5ffhgWB8rZort1VmMR5P5Ae2jXp5AJxRwNq3jtnf6gX2ipXREBN8YPxnT",
  "key8": "38CyiNVwUQXcUBVRj6XVFp9nyMF9ZchuXwiEgM87Cee9kwLrCa5n8HY4JgkPtvdy54AiX5NVLbBV1cPxfziZ12jd",
  "key9": "5vSqhfcF55ViGkHYLmFhRN3vis8cue1SJk7af6UcXreHGxXkcFi4NxxK5ifAm62s4f7gSKg62G2Krmkz1AimbMb4",
  "key10": "2tD3RyMcxPH98tGCqddoAfex7NKNiNp4tSXYH21J5adndvzM2F7AENfTUnqHFvfb6NuU5GVjA42f6vdmStHko7iq",
  "key11": "4fSkw7UerKnxtRK5KoVYnCWqJqQMJZKhLjdAEG5HACsK2puv4opaWkt2hMTW7BhTn4Zi2pfuXSDY2e97AzNfnwBk",
  "key12": "p5QDzXMvH6xJef8brY8i1uUXosS9ktAUTFiKgT9Sn4Yy3v6NxMpfCkumPbNXxiMFw7GuzwcAouvzUA3XeSkR5Ks",
  "key13": "5a7p12CLhnXn2iV3FFCeee3NdYrpMkbGuntEeZ88xg73eARZtPHb84GjY9MTcrqJR44t7K34gEfAkkE3CkAEC4Cy",
  "key14": "4UxkYqgjPGx7cyAQXVHtde3E3XGba2a8optQ8C2Z5GDmDNrzUcn9XXm4urheEhiQGgy5PVFa9tXasPPQGcmYK2Aa",
  "key15": "5yNBK3xkb9jmbHtvWD7SBrCKiam3h5xHg1GazdvB9UuKwPm634GkUvTkJmTpDkJbv35dtVaQn5FwUgfcLaZKXqea",
  "key16": "5wjVUYBdJYzQgtUwvAojtmrq3RowFZHZ7MwAGc8exD8EE9zrDC8H5XzdWb4H1mmSbCjUkVbggbSTwBKbFjqbyS8U",
  "key17": "dwYaHKeUfSD8ZKVdP82Pfkg7QywXUvtFzsA8KNvWPtsYpX26xf1Lwex8uvdaeSiWrADjpzcN537hwkKKj2aC7RA",
  "key18": "9kQc9TxxPoR8hf31RY1SRBuaa19xBKPxMuaddtvjRYNM5Zaq9W1CZKPLbaHYJ1F9tGekBsCbdTbX42jQPsYZva4",
  "key19": "ZkMoBfe6BpxMVa1P4bxTVsoJsDkZ94S9BBJ1y9tKBqazEk67De1efEAmEfgZh5MymRwF5ajpNFwYFdsVrweLmvW",
  "key20": "3HGMv6D3dargDorsTX7kqDcWYboZWMQWvzPuxd7i4vbjngXKZLg4KVKamaCciQax2LVTY2TvXJVaphbqLYbc9ECG",
  "key21": "2XrNdDkwGpaWE7kwZcqqoPAARS1mMAg1fB9DSttkJNnZrr5rxH2o7UoL6tmxedL5dLjTwq56u7KhqdFbetj5kLoP",
  "key22": "2ZS3ByapFXLvHNcid82rQxJEtDxA7s9C1ocXmFSEkekbg8mdMCZeaE3WJfjwMY8wWcoBdCRGsTbTVyaETt1XPmFk",
  "key23": "3E4MVbttCo4ajRRLojGkyj1gj4HvzCSZhD7jyK1RKtf7C7Wf2J3Cb5oDKYoqfQcSvt4dCmwnB7bYjwjaWFwdNYko",
  "key24": "56MVfh3N7fbeqYzQx5vhs4U4VvD5AMKoWqwrcYB2VTp4Lx79tSewqXxRn4nvjquAJVPeFwmDAU6geXynyx49kBbY",
  "key25": "2DogFUHjp6qLr5W3Tk7Fx6Dxuyook77SzF69o31eZjjWHTpKAaS3FxsGHRD8GQqUALVNb7jgzniHbNvAZbK2NYaw",
  "key26": "5kahD3wwAQTPeLcVwNSjsZycUUTVi54Gf9LKZqoxccG6TDm6JPTaSNwLp21yMGMDDFWhpne5GGTpWPHdbojPdMYQ",
  "key27": "4wDoh8Sc9monJgCbxSnXCSMzhxyU8beHDGdmm99tnrgaChidcdK6Lqh4GZL9iXqX1bSuSPyiUiGZ3ECVCyMBt8Ms",
  "key28": "61ZTc1hf7u6h7gD6dDtf7H38BWuZDkXTQk6Wtm422ctqbiDhvhkiY6pTRuAEdtMCk3EK7jiHnsSjsPTtFPK1Yh5p",
  "key29": "5T5sD53zMnL85Ueikhod2ukjYk3CYZQcpJB4QDJjTbShz3tA6jU2een3gDChG76WhAzwKU4Q3xJqGeRLADcBDV8E",
  "key30": "jh2kZQugRNpkjWf9nNciWqEMp6LQn5Gsdf9k6MiWwdKT6yBPCqwGcF9UPobGQHPm8kcWcyXYqGvEdWAZiBQztTc",
  "key31": "8ZuYmASyDdhAtAunW5hXRQaaVeuPJefMQR9rRiZHK4GwMjzA2He9AzGDgZLeA7HNvucbPA7hdQiQuot3yLti9tR",
  "key32": "2Uz7i7nwYgz13V2rYTx4CqXmrSVELjWmXUNMGRRPofQZBgCsfwfLwjwUv6foTY4gY6PQqsASVJwM4pXDK2VzTXr6",
  "key33": "MToBgBx1WnKtt4d5cDPC44YTxK4JdSKcZB53jUYVU4rKGJdYuRxkctgxMMdkJakShNceYhnqAHiNDS1jbCrpDxY",
  "key34": "4nFJMyX5V7TKavDuVMR8ecu5yMFDsoCMMrdMdS47CVGgt9cJsaaWH6ad3hJM38yGZCTct1F4j4fQWgN8a3tSsWSD",
  "key35": "4WYyWYqEqKJEMaPX68Ry8wbCNTxCHH8cGafr5WnTfwyM66K54tsmkVxvVnb5HJxUyyMmVpqz4p6k9XejYydDg8xZ",
  "key36": "5EswJAqHtBB2CGpSs9VKUZHeDAyowC6ERsVn7BKA7tWnyvmCCsG47w4puvTpMFoknG9Y1XZjr9B1Gs3vX9oT4hig",
  "key37": "ajDSajUc4d1gFfJfAfxZ7FiCU9WwtRnQKnFbxYnw4rmBmh6tgpaMYVZfEK9wMuxzirimYqtGXjVCyHcK1rqRn5K",
  "key38": "4QT2S2L4PbjcMaW5vvueVtf8mVPNdwnFN5nf3uMusk3PsBKY8LpHVpxg33KxoHVrcvuVQYSB44wth8kk7n2sCPiK",
  "key39": "4uGhCFfqfX6kqAkEjaojuVByqPUJM3keUfkS2N8mdNP2W1ziTGnnggMH4ryaASP9d7Hte23T8dc9868fFQm5xX7N",
  "key40": "5Etp9iNWCksaTHZ91WQSEQ1SXUFzcL1FnLeS2hNBvxBHFM6cKkH6stUvdjq1jc2MEiea3N1WH2Phq98K6MAufc2g",
  "key41": "56PvU4AFDK8HAGdJaoUk1zG7wUraaq3WorZzXNjHRrqMzLevRRytnJRbp13XPnHxPBEKWJPKH4ndeW8bTmfViJvR",
  "key42": "FGLMcBp2gCUfoC18jYmbZQontx5gLDMhB2pibXPTR763PmADAXmoiMkn6BjBB5etootFDB8jLR9cCMDHNRkDvKg"
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
