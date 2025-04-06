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
    "53MMYj9JoUk2sLe4xb9cxHVyvhUAnwAPY2jK5tRNmUu2eHsJzuDTv9oj9Nm8bQYUeK3vptczxU4V46tsSKkCje9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WWzrwL7ZhLdEgCtzHNJisQdHuPTtMFmwpUMPDxtCj6ehQfkMacrKhWTrsXhGqCxMsanGRndXSnwCM4vcBETcoPx",
  "key1": "57mnzxDsr5fkXZAZE1FAJkeTbAbgU8SDeUDkTWap4jPrZR2ueMz3hHhXHDGbxQkx26hjLPMGP6nHZYQBxcQMsMFu",
  "key2": "2tz2US34Aup6zxuct3n21mpRyM9U45vjajgBqkSMmaNtt7C9a7g29rWiAWZXazxemr3naqMPoLFdH2qeukvRScqo",
  "key3": "3g5VFv8r4HFYtGJmsdxg6xfoEfBAxKqM3f7GNt5EBbpdeY9eQzWB76nsduhyvRnECeBstjN7wJjJi5JHaJW7kuun",
  "key4": "3Y3YkAJGjyhKZ81g9MKPD8JgXePLZvNrevaHhoiZMWk6KY2uaeqPovTJSgwpCh1pKoCaG5pF3uek1MvEZcWERv3w",
  "key5": "2ArTxiunYe1PCpdn5J3q7yoGCdwLgwDJtwkBeFZX7EutPDFDTRM9omL8sB3SJcZbWFKLQJWrswVXcYyMP192gxgX",
  "key6": "4SMAQoDuJnM2KMNq9Wusrv3nMktqPLtH3MguaUWkYFbk4qVMEpQRDXdHfKFhArHbYhfS2XFBEK3W78FGsV5ib33M",
  "key7": "43DnxwJzgAtqiMGUqjPD9NKerGhUt7GXFoyzmDU13B9FHQnwkEiw2QLTmeSijwjizumpcdqRkEvNePytnU7hJkRC",
  "key8": "2RvE29FERpaCB9SvsT9ta4BkdRKxSMLD5UkydWXtmwVpvwN792ftWjZWN8Wi13Epx1JkMP8PN35ivkYGy26Rp2k7",
  "key9": "5MDgAhPuRpP2HjiGMb9ujzcKk2oQpyLurkexvNEnPNfkoxdKw4jztbcDBLcZ9WDDQsDZEATo8FEkzp4CvZgbKMCA",
  "key10": "3in78bXfvsz6Ja4u1AJuRGk9fAys6WNFWSdeAyDtTz4NRYB3kSCCzL2WT8krMCGxBgp5LorHEqdazgf3STB15TXc",
  "key11": "4i9WGYBfLnc8uxR7iZTdxUCAoJDZFFSvmh2eDqpA7txH34vvY7w1wzNP2pbPumcG7yCeM3ryeg7e6Rm3vEmr4Dh7",
  "key12": "2uK9JpzDov59hjn4veJeUJWup91Rv7EsM4xpZ657ZtMTVsVFiSCnZrdiRqAeQeepZqYZuQNh5xUCFqgC9ZARJQSc",
  "key13": "ZExyG6eDvN9D99FyzFUwRjjXghr3o5kLaX7ntmMpnEEpJ5zagB4GFNurwjT5vC7GHBtZjV5Z1zQSpjPNidP4eGw",
  "key14": "HJPvJ16wQm7B6auvQaPnQAAB4eEYpGZcUdgQgwhYEc89aaM9h7PrCNbKEAqy8FpfDj8qkBdunJ6TJZGT6hdejhR",
  "key15": "3P8uW5Lni9wAbxptHADxAFQrfkUahmxJ1XPD75jKzWPAcTqknqHWHrRmCCys5QP6SZRbKakuzqQQtwWshnAuLc92",
  "key16": "4k7WmhQdmfTjnx3oyoWqWxQmPjTqP7xkgjnZmaJNUSn43ZcGDZM1Zvi11428jKii9drPRGBvauWmN6oh1yEmRkn5",
  "key17": "2U7K9Ex6fnQbhk9hZELUUP166nwnhM4ZGBdpuLZqgxFGrt1Lig4S8gNLUguFky13XjKF1devXoEsiK6eNs8K9SBx",
  "key18": "3YipKi5bR8PmaSX4kUEEmSRftkPTkQ2cJcE5AxprnyEsdEvHURXVQphUeWh7SA2BEhEc3BxouCTE6Zmno7gdLT3x",
  "key19": "rBSdSkiFUhSeJrmJuVqjAyxoXnW5rVFLp3N6GCsNEN15NVNJqFQbHm58fAGbz289ywmNz5BaR9McogS2FF3boA4",
  "key20": "3GzDvPFuuECTpcW84NmxSXmQUzWGtUc5EFMrvv6LEqodQHdif5JdBA5xnb9vCV1eRk3PjeNr6pqsNvXEo1qzrcUS",
  "key21": "qEqvZbX5ex7QgXD4D4pwp6UKWzcLSHriwzVkt94DtGRZhfrF5bP6iEm2eXYd84EVRHRKu8ih7r4SERhdjps9gvt",
  "key22": "2VLCuDKDEWaELW3M8PfjTrJ9D6YRZLhd6vgXBCZqN9HSS3SRA8fuqH8DXdZpsMxUxwi2ZuoCg8ytCwVQsRn4rUQ6",
  "key23": "3eoCJ5NHf7dZRSWVUXhumKudEDzdcj44RsSCWqpPSU8PkEjrovhLNXNutRkmgzJ2NBirYHdPwEebQqFg4o9WEs4C",
  "key24": "2V1bXQLnE7d6g5ryVkrGN3AeGMHtn2GLU5VeK4LSFH6VRnLNPmh62PryJ7qCqVwvKmCi8JqSpbPyw8R5pt2KBQyZ",
  "key25": "3yMoh8tP4YWhLdqbrVEUvyGtMWG3bvkB4vCUZxfdCj7dJ9RjQxqy1uVRxNyfkRETorYxExZ9oj8DZDC7icHr9CDN",
  "key26": "4qax1goxWYsK9PtQgrwKFGWBsDvCqiN7UVD6RBUhAdVhKEamqFW3kki9XexhmLcKQs6J2AveZk1oKg7ZSjD1G8WN",
  "key27": "qYy6ULXw2mUxei89KFpTST5ACgYjv1a8MwTmD8bbdMfeDkK1gXqNPCpCP6vkSZafwdqTCuG8gFn5YtmMujKA3tU",
  "key28": "3XRA59fFP3bBQ2JGDDhq99Fj1hNEUX868LacPx6nqx2BhdAFgpdnarjsbEzUVkuuVQhmmP1Jwb1dJzREAu34jcnY",
  "key29": "2avJMWRmrhoxd8aqznreW9rYvAYc4k4Ku1VfyL2BnhK5Xz8u5Z8tC9s1UeMX6J484pCvnzr8zXCfVTsBmuiR3zH7",
  "key30": "2bDTDUxJkrhaerbDiHoXwTgTkmqefnmnXuT1qw1vnSwb4uLZ7p1v5dJjwjKNUgLoNsvh7fggDBx89yYF3w7GPWnz",
  "key31": "BAD4jGLeZTsJgN36GMsiJoGPPoJmgQbwSSMDG68xx47Fs3nZ7iVkSjwUyxX5h5ComwiP9VSsNKYp2UvfsNmP1HS",
  "key32": "4oJLzGP32AB5rWDMWCwWafkg9Wk2KD4eTvMgWipYVbCqLu1JoTpNAm62UFB3Az5fGKqGQWZcKC9HAScNhCcgam18",
  "key33": "4sUcr4y8gFAwzkchvbVFu6ZS9snFwNbKaEBcTZWWnbfPCwhoP6fsMVN5i9nrZWYWL3PdLPEWEyDwDioVk2PRiVpN",
  "key34": "26t3r8rkSBaffy8P1dEKEozepnhXaomgXbizYmnoSCVaEcqeYYvXLHhPcwkyximS9SPzRtXk6YauYeDbZUiuh9wM",
  "key35": "42cxh2tX6qXm5yKapgHJiznp2MbDkB1SyZaKL2nDQtCT7H2gB2Ez7vRvAZRLgAt4SUcKy1cf7b1DBem7z5tpaLoZ",
  "key36": "XN5DHxDxUzUDWKVNasAGL59q5tRkqdK7fw7b9t37QZ1f5nFyNJAqh7NwpKtBqV61tnfTCN2s3niHgWzpZNznSa6",
  "key37": "28bcHynsiWDwEnzSR5CFb7Sv5xfdFVYYE5XA8kEuXDMHx9kJuE3bGNK1r3AWPt9Ly2cgbUPhoFA6VmsDnWBY8KD4",
  "key38": "4qUjdgdG6caiKXHVcSC8iopK3ToT4JfKJvnyz7gS1haqBpG9CRamgk2rw2CnScsRiQCYDwTYJfcB7suZR2kZUysL"
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
