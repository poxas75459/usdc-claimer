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
    "23dhngexSbmmy6NdShpLXoeW3hZfFuwsBgKHiqSotq5eeg9JZ3krvpVuR7XFBFCCGXW649svJLqDchTfzYoSw4MF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HioQwWXfQjVHb4ERzDP1sNuSjaqb9rqU7THbLjF4qxGdpouHUMYqE2GCDBWnFxXXwmBNQgD6Q1y3ChNtQb5ayaM",
  "key1": "6fmW5SbYD6tEyr4uQt2qa925uYk3a4cDEhRaLAKKQ8t4aKnAkeAqPy2Ah5tszGR867pSxHuGucnh4rrwn3ZJkHz",
  "key2": "2CDRFdZc2BHCPLnNcdgUCXwdtKVkAQ7Qu5jgfA2iCgeMur9GP5Hqktz7K44HUgLRTUGGf5gNQth79hAEPeqJmFTg",
  "key3": "HRKSSakBz24LHXKPPag7vL6CmRdbnCW93zdQmi5YpGdbUT3WcFWvJCqNvzygxu71HXvdLiqr1X4ZYNmX7VV33mq",
  "key4": "2sqZtkWd5g8qiMn9Moih14DEXk2JZhi3qwephvNYrGtDmjxozGSC9yWzrUY6fET7xYieEqdgzsYe7G48hexpQHuJ",
  "key5": "3PHa2HrxG64QULrwbNsQYaKcAviQwnCZz59ANxRVZhEmq1ioAVPTNFvjvEEKE4PQPTej6tJzxn6gkUXimkhH8LtV",
  "key6": "fQ8AurqaSYnzMLXtGQsni1p2bd5MXW7YJbpq1iR8ztqFMtYmK7TQmg8qznf237XonqzVpBQEf6FMMCdw12ihWCW",
  "key7": "4yyKmECNzig9iu2putW9c3TowCBNeDKSu1QGkjegCVdzbrHzATnLUV4VT4xVQxRKeRqz4ijzfUhoQL8Jz4zm6nsv",
  "key8": "4JYDXEEcqUjyqZvHAaCrfTsbyVB9Cdpp9Qfy6uPUkhK1kxajmNxZeL2JEyTMynxzwmzeo5BMpR6FN7zdTFoo491A",
  "key9": "iLH5AmkziKXKhsVmZVt8gWZcrqPjD7L9bjChGQ1hSXCWwmENCK37jDQcpJpv68LUZ4dQ1SsEQXqdSpgLcMGXPCv",
  "key10": "3ufbG7KwwvcNGAUMn1oG4uHMyjmkmy8AZFyqaF3t8YyDpoRmtMnZhqjkSMHFXjRw6oaWWDRV1oWL9YTEso3UX5i6",
  "key11": "5nGkamR5ghbNTgKj6C8NAxtt2GBqBYSEF6MM5uVJcDc3RLwWcNDHCqxNqg9VUcN5QruTApFHJY852UTSgPHDkPYS",
  "key12": "5aN53xx97PhnfrPBsVi77XEMGuPd7EiVp6ofsYmusCYQJjddPHYz9HaQujJdAbtygGLyPT5V26kDPkz7JaXpZtou",
  "key13": "3SbhHQSKY3ywqq65JjAkN7MDgQw8ZZDM5xPX6HVcKhgiKXqECeGHVAqqWajkuU3DCDH98TsGkUdgh9tcQZvXdpXR",
  "key14": "4LTY2vn17EFnwHomk6dqS5AF5LdigPabzcG2AJSm6iUoh1nReF3tzgQuBxrh2wp65RzDeu9ULbZ1e4t2LyTiC7bC",
  "key15": "4QCab3CEKFpgPznvVYUwajvwc4txtWvnivDJSRkGPVUb54fUxMQ19m6yaXJCVkBb3FyXTTe1z5o7NWVks8eDPFv2",
  "key16": "4yQpqosxj4KoTf5tv6zX5s2xgRtKUssSW3LRqgEVEKcjbfzD3ewVEhbAtpDjk6VeF8MhefX5c2hqbHLbPWGDFvm7",
  "key17": "2M6pqQypA4BMaUzWDF74D5N6B9Lz2HyMDZ1NvoYojBVQvuhyYzwX28pTuQr7L8DMidLE84VpQS1A6Qdf3Xt6Lc6",
  "key18": "29xaiJb41KwUPniZZcveSAA5d6meEAZsfyPg6ibkroYfyHWTuqsW4HnknVdYTr5cZ1byr14v2vMKtuauAqoCKTXh",
  "key19": "5WVWiZBXwst6b4zd9qVKAA4N5iMHHgFQcikZCHvDsuw9GX9tRMVVgMobNJ9JXzCWxNcbCgLVFqjrWipSoQETLPdu",
  "key20": "4APbEPPA7eWoUwBm2FPCRSHLSeqBoJWaCT5WzNUYKvyWWWFFE7FBBUp39Nkx8BhkC45c5Cn1rDS3cERMvmD22DoC",
  "key21": "25rhQzXK8XCoYxFJrssVuVkvEU1UUkAvWaAsNF4M6Kq3o1LpqdNUuQyZhXMW4HVB5kvxpxLooi8DNg6f7uSA5jVE",
  "key22": "TLNGXrrrSzCs9YgGh5qfNK8WuNjKv3CoggkwNviqPwx1yqF3koBoZoV8aUXB6GY5fvGnDwrfWfi7Ak9Wd88J3BX",
  "key23": "3LThxyaH5Pgagj1QJ5zsi3rnU3K6po4GSpQT9NnCfCfPwFVUoNifkhsXfGSKh32uLw3zp3nJoXDRQg3oMFVb2mcb",
  "key24": "MTyJ3aamhVwZWCUtiQBwDWHjCSW9zRVrEomR7RgQLrGbZFwm5ttmYXnRszuMQuzJwG8Fk3QvnuC2EhT3EW6fJPe",
  "key25": "4vCHjRFDvm8DWejFLceKJTCqvV2aaPhAVVkV25fiGg9gBkawcnszyU5VAQE7rZRQczYt8XPBvCfvGL17Vc5H17aV",
  "key26": "4d7dhNxcWgV92M67S9xrAbjzBqQFGu4tWEVkEG9JaaCc3NL3e25e1mcEsXoF6uMbypCiaoYMP5xtRKSKQaqr4YEh",
  "key27": "39PPyUDfkbRrp1tR8qUuoerZqwc4c4K6myGDXaPDt76m3VA8dKv5oaVVqxGZUtH3U3jR7i8BPy9b2fzzEtar3oFi",
  "key28": "9VoUVwUr31oe9NoB2SpJVKVpEjchhUoChUtBrzsuykps6B2ZWtTz7gyZ227yKmYNG2yziEW9C3Me3mRQ9Zwm8Zd",
  "key29": "5WVF8EhDc4Hk8Q6DfG25GLwAU64EFz5SysYWGCBPuAeBZRAqjyGNqHqjVkPmFLkcwPNQUxP9qF4un6zCmzT5xUv4",
  "key30": "2FNimonwKmgj1xkUm6LRSfckwHaNwQa5nfQ59wpfqYQXrPxrAxtWPV6yEKcbVyiBKxwJzHChXxZzZe89YMxmxLwm",
  "key31": "41SH5cwBZgkbGg1xKco3AZjj9hz2Lb9j8cCB1dpEHz3VHAjoDV8jFQuNsUtbVxfPUJbL1tXEV2w8E4Z5WX91swTS",
  "key32": "3RHQEbDFsRGXaTFRdnyANRDnfba1o1uoudR4UVjwPa3tzdodBmc2j43cM7TEJg3kAwC7PyEmxbp1WtbJbqTtosMG",
  "key33": "8jWACjPXfyFkPWSG3HyHvLn9QYzc5BkcLaUqNHiKYSAhEwV4bXDcgiSQ7WFX1ttXHE37gNHLADSU4JHeoJugyBT",
  "key34": "1WtauSRW4p4fRnjgaYSndB2333x63tRavcjbV12jExDSpDwMCg27r1FQmoM6jBQA14zUsXtZB5mwmmjCAjQtjSh",
  "key35": "pa6bRMBwyQNW75u2Aws1vkoB8aTBHrVQJMQtaByrQJeG7W2jwrseWkA47tUhsXLfeXuRh6PbBxYtSrSxXcPiHnL",
  "key36": "7QLGpzxQ2UPcweQDfWV6fXwcgoGSNumm3hbtQCpqj6FdYdRsbGfciyVpg7CDb3fQ3fQQoPsxExVbcmsyeErtLSU",
  "key37": "aa1oYjR4j22uhFEFp6DysRY19JBqbK2azxX4bavXzE7wEBHxgVbmpEmj9XoqbFZsNn3Mptz8hcpJxkUxo4G17vH",
  "key38": "X8xdknEn2NyVVoHPLEmh4uLGhDks3gFq1VxxfuiLZfEnaFztALPKPrLsXPBbhQBBXzwyzu8hEzLPHj7wKqgEyS2",
  "key39": "4f5HJGbav4GvHvh2CwResK2Dx93M6zMcXNUBpQc2Xou3dK5v2sZbQnMy2YPW1XZ4P1N4XUYAWe92hboNzP7p24vn",
  "key40": "4JGiZ55EdptPDRwE69G8kUWvYZZpiLhocBLketyRVAy9BVt9684Y1yh6m2EiofcHe195u2Mo4FzKLWzdo9HbcxzC",
  "key41": "3uZbb2tHTatCGSfjeAv5xLFRxAghvsiG5qj5dn2QByaUMCxMvwiGqsjrqnXLrCkrFi1K7KurukzkTThYrGQZp4ym",
  "key42": "2vw3oMiyxrWpDRxJxhCaEtEw4retRuxNiFe9AjSwfrUyWMDPVKmw7q2EH6KiH8G9fMPWfe5XsxNyZ9xaKbPWQtiG",
  "key43": "5hxwQtMvsy1K5KKrdcjuEQaEfPZwrTeRQ2Jr58dcYbhqyBBVNXEdJVLk9YtjGfhmJhZw4h6uNgmrp2W8o6iBpH5q",
  "key44": "2DBdDWGoDCQNXzdNZYa4GkVf8FcQSfZNbWQUkmK22mLh4MZvJQgEUzLWS4tszcMUzWXYacuGTHhGd91cAqnSEkt8",
  "key45": "DAB9PC89WkRvqN8LhTGe2Jg11A4CYo3yqPnAKR9Xi5sZrcQp8iGBfK6LL6kHPMK3KSBpqaCTSg2EVjTkh3xMyyi",
  "key46": "5611YJW3JE7Z3nP7QMmNQ9Jhp37gQ6bN2caJUdCX52hKbUNizwWmeo3PNyGeiQD51uo3ai8Vx8hTfaqBrrVuDJqJ",
  "key47": "4S6kYGEssUtNTVsUX8VzPCNrqwCRef74zfXGyEeWQufQHtWiza6xStD3SVXCSbZG4vQamgoePeyzQiSKhyNnjauR",
  "key48": "56CAjTLDSukx7gtncDsY9e6vhYwNB4qTykuW3p56Mp5WyUofCaFNXXMDeabQqq3KUGEwRFwj4bKUKrg7kn7MqbyL",
  "key49": "5uVcp29e54FAMx9NvYca1JeBLFkQee9MM88YjoMYs6sGr3TEX7c6TGHYdqn1nJUg3NCdLTjRhZZgrJw8qWvvXHNT"
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
