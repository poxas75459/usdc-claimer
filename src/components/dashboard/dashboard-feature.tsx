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
    "5rJo7K4skJbCj7Sw3gqvDKoPcQJ6D1EPsuQkQ39Q8x4eze9QYqLz1FMKr35q3NmnsV6QcSJTMqvMrgnhAwe2jP2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bNmyN6ctznrjoRHUPmKSQ7HoAMRjcmZVkANBvGS2XaRQQdF89kLRPrwR3mRBqBjaJ3Ua9SCKsn5tfy6UCHQ2QuL",
  "key1": "dLkUbFTUkRwg8Eg4v5e5HTAkq6QmYpwxGe6m9t7Qa2DnPVU7m4XpUUeCqDQgdszxk59gjG2T5BYp5yw96ncM9vD",
  "key2": "RfKaKAbChNyYvdpWLovEz4aot8E2Kv4rWWVE5WQrutzbjbUxkG2VonHiDAiD2SZj56HG6GquXrunBGGNBtBCfqJ",
  "key3": "338pVfuAPTUrSzzbirn6b3qBtqaKG7VoKN6KQStkzRRCzMjpH6eYVRUFP44r86bio33QJRDFyaF2sByGpYDEVcsM",
  "key4": "46ihEtHMBbwkSpXPo9UZcvvszGR5NPvu5XMkmFUgy7oxwdAY5RQzRrnpk6u8BXp7hQjC37VU7gwYvrkfiF2bWXtD",
  "key5": "6287dj8kZZtsorbN8V524vFMwbZiKWMyMp9m1PZnZfvLiyERTeXCNBdBwRtzagAzfs2C6UhfzbFSEs3ms1fqkvT4",
  "key6": "5Wuben6PkWXqpZozbpFkiwc3Bxdh2YsUym8ftDMWKVDEdJm1aAdxtdcoxqbsqeUaLcBMJkpaZDgmJQQdM4eoUX4w",
  "key7": "2StaLK1kLUeKQWfh6QVpQ2pHFdFjHXhfN5pxGaeApFBBRKpWmFWEeYF7PojqE37kLCdTQj3JEhqcPB3A1PiLGZVD",
  "key8": "2zgwE4kS8mcFyweYbFDFCZLxgcd6YoHwwyCLz5HxXaM2KH9AnEJzpANyrFg7nE1bGCg2EQosp9qNV8nc8syLe3mV",
  "key9": "41GYw1Uhv2AyeXmUgMD885VUJQ17DFUqzVjbwFRPdw7P6GnjbfZbURVYW7mhPnVFLLne3yahZJPYVcqqsEusAT7h",
  "key10": "2LE86Ju25bphkz5Z4mGAoBvQL4HfJDty7y45GzmGyafqeWJTQrokUkHtt7VS8rSmPTBHzSqTtgTG9mpVGeeCx7gN",
  "key11": "2CZsRxWJ9J8ptWEmTGvZYxhMK4r8n5ejkr2PSLitSfA9zL6T2HSvtQfCdMciApTQL9Qg9orhr8AP7nw4umXpN22a",
  "key12": "4qdoDFgwhJPkPenpCCVkPibz44aJXBADD9cZ7mxBQB1ByPUaAxmkFwFS4raU9SqMdXPFyf6AKDhHkbdHEqnuGTBN",
  "key13": "hikjs66MxWiRbYtzF8qS4xgahdWNeHw7VRgHrZbYDeCj41mKzJQwqoVxAcABoHivyFhXL9SHcDWKam5MuPgvY2h",
  "key14": "65rW1zwMTB58HHu42pcD8bFTiu25XHkhvH1wdMsNUwpzC3ZoB62LttgbcJ4CxU2ZMnk6suouWmRKpQGUqNu25eGd",
  "key15": "2KAYv798FjL2uNgKx7LacyZ7GXaMDwM4bzcyBvJcUvSh9rMMfpzGbs3Hif3DgMzejFGTD5xXuhD7TQcFN78y2CqC",
  "key16": "5VfLgEidkgyCmuDLYncbqnpt36jLsCPh67gSxnFxbXMRZqtKbieEqhSthKkuW4ueYPaXVuhzLbzAVMrWuzJ3xQfV",
  "key17": "26UwCB81Hg4aJNSZqseaN75xFqCZ6i6VHkrrR6PRJ2ZJasYhGiF7Md7azensjxHKLJR39DCzY75uWphRy1HZXa7D",
  "key18": "21WR38EtkEkxpQTH3RyreFK2arAGY5NJTJUw29QJrcFToZzAWZbGhJK4VCDuGEFPgY22nEcxYt1PMByt7NbKWM5K",
  "key19": "3EaycZk6YeWT6YGcq4r1JkzuCGnUxSsnRPZdQiinhGHxRCsbWzLQUowakRoNgQV9UPimeUQzcBFqNZDSZk8kXLcA",
  "key20": "4uAEek4rsSjbd2tZFSSEAP6TLbLvKS79eEtFk2PnKJbbVb4QjignkoJhXxgBsd94jxmuKHz88tn7NhNS1bJQKcR6",
  "key21": "32ZQ6x6Nq3zpfkFQT1PmbNrgxVNXWUQTns5DAL2q9xKGmzcnQEXzQDTFHtpvee3u9mUPnFHPjRPtjdoc8mFSdRzJ",
  "key22": "4fK1oLJEWbbodHGfhuMBdkQhgHCeNSSts6FiApoQxXS7qFdPgsWuXarMexMpmFrf9nEPzVJd7xjqrAYArGbnzHVs",
  "key23": "4xTauXDQhjir2X8CwGbdAKttqngw8YLNM6zpXqxkMdKMFYEqHr3NZ1CSQb6exX4rURKN7eQBMYbivieNKrQ9iHat",
  "key24": "3351oeZtg5sW7mfc7QGeNvtAr1ZuKoKLakDV7mZgdH2nNCxwTyzka57U3LZMs6kbajkvYPxcYMWHEgP9R1gy2BY8",
  "key25": "3CFFLSFFstwRH3myFtS32PpqdpJpWQnUzzUBqB6Efwu4qYb414iueXRDa27Ddudb4SPinxDmRss1iPC5etcn8APa",
  "key26": "2vCinjnrAuAPgSatwrwAHJ6CHLzysQgyveT2Gg7NqkCYCT1FVLG11w7UtCKmEeumj1T6BHns282bxuSqqHsAeLSc",
  "key27": "39ypjwdAGq8SuHQAMsMnxXrpwRJwaDjDpLZKhc87QKmQdeMCPHmizMhFdzSwD5y29AafrWbQTCJzuZhTfeaccA9f",
  "key28": "2uooHDzCyjs4Wn5MJqSS7eyZwnF19SfVCoQF4mLQiMCXtUQqmD97G4gaAZgKs55KGA3qHBsxKHki6AMbpJsmNkW6",
  "key29": "7f6Z3vRKHu77bb4i6hsWm9rhKhAQzH2rkcmTeyWoAEELFrwBZ5k23FkSYkv2isvjCKJ6Tq7iurXTchcBZ9ymUQj",
  "key30": "65oi3112pnpxsTFnvLrpLFziNg4P9PFS8qMapM6LEf5zm6zc6ZYyFHAtw6yTwfP8aVU8dpcMx9xmz79CEfhKRwrh",
  "key31": "61TJjDeRHG6mcedsQWw2mdEcS5ryRYZYorJhEMNwut8MEJdmUL68fgbm3hri9piyKnpYGcfucbqVrJL6RRpouZNq",
  "key32": "3tv7Km7BysFYRfeCZUVyJGZqsg82FYv21cho5wBt1e1uwPPBEW17KGFvQwc9JobDHRTCqf1GgPppjo9PdaVe42pL",
  "key33": "E5ufShMBT5DC7tanfK2TcYKxovV8hNmMjXXDEqmoyX5Xsog16w8JBfnXPK1z2ARkyWF4nVrauKfV1ofevFEpVqX",
  "key34": "43eBkGFLdG4SRSppoTPRcmeP1fAwDiXHJiaPbLo98x1ULqgwMUqshSRhaY6nNqAWVLJYUjgVACUwNqPdJQQGQZKm",
  "key35": "Q8Ctaf2zgnNKDfm2KVnkr47MWD5rzyQSSmBqGjajcgeoDH4SumddLsknTUhXg7kBxUeQ13DUsotmQ6DFJqYYAit",
  "key36": "27sgN8Wi3Y4YKXXwsYtksG14FAaWLgQvacUnNmobsvDa5YtSWgWfjHqPtKsw5zt3Y5PTkcYBB5BKtWF76gJBXt91",
  "key37": "4vjYBs8Lwz2jPtfgt9RH7aVceD6iJ3kFnH6QSJMY8kT49XFKsDx3aorwnKLVygUJ25C5KGtP9zwBNBeHFWyu6k8C",
  "key38": "3nyrUXewGNmXzVPwuzwyQkZhUhUa3AKyupKCHujWc4kFaJTgoHkKAoJF9xMX9LEXy7v936rEEw6Hdf2QfJbVokPy",
  "key39": "5HGYFLMwgvQDbNfq7Mec7xVLCHXFvCfjkqsCF363EN8hyVTypMCuaoyKodw7VzUYHE4pseKGE5oCPTSY9de8Fbde",
  "key40": "pMzsYyG4ued8oxAG2KgDc1WHRf2qfnfjT8LcgerQRXnLQ575BQrCqdKPDUEG6w7geHhpBrxQMpjDdzDuWm41fq9",
  "key41": "fpz7N8s4nucKw6dzRXqaL5zCH1bWikT5bWHYcDn3yr1Spdra4NJwwbr4Ugcg8iineJw87C5pkXGpfS6nwSVD8WB",
  "key42": "3DTuxSaMkzifnFfew5yiz8R6Vbk9m8B4fbTk5c1HzSB76LvuE39WDXCKTAgqvTGTabuwC6PxUX2dF5MiPnHBM8gm",
  "key43": "2t2hWfdpetKswv9giMmNemiTH7FPa9Wi21kmPabeupiPbztULTDGmtcv73jqGCKLrbCQchpi86erkzy1gYs7btwF"
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
