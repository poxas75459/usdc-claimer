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
    "5h7CGoe8rHqNYze1YcBpovYZeDEwHJWHj9ZkpdBHkBaMwAnbuUuJhVgC3WzppmJt8VdJ6FxE85kNUyHbvDnfSoj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wKrmTB8gvAz28opocJ9t7efaeP61ZBZfm334zk7Dzf3nzZMpfJyPsPtTnC72hzszW5Yw8oYmE8yvdVW8pjdzq4C",
  "key1": "51ygS9jeGnoymfjia7tuY8MdCqkQm3z7V3GbCzTNo6rZnoLnw5XaYMF7UkYrsX915v3Yy5nkQCn58sWdthKQ7rZ6",
  "key2": "4YqG2R3mHstVEyjFWyrkQRNcKQ9VaHRsqkxVve1LP4ZLdAMhJ2zJRhBFp5JFJzo4im524JUZLn1Fkrm11pCi71oi",
  "key3": "4ywkoGUyFmND5jcEKf1jSj6zMkCKXj8c5Z6aJU8R1c35FKtFtycngUhH4phqNX47u5TZd8B36nrkz4oYZkG6A9bv",
  "key4": "29uhkS6KDsde3qiNAVb6qbi21WAZqFUWPGqriVDuw3K8T7eSwwrTn6BUfgHNEJB2DwhqbygxZqEUwMKcXV8PNw8m",
  "key5": "2kUkMRT8BM9PxQD47WkNXkDN5SNgbNeCg5JUR9BbGrryPtfQeBmmFPnqVmi9iVHu1svRFhKoWGNpSgyEbNVy6WMr",
  "key6": "TXRs7Zpen2mobWDWBzkr5n4EvNqkc1RtLAQATQTW6rmCyWkLyTQswZjHxPeRaHAS9YsTHCPBbGWzawySk7bzbTa",
  "key7": "343YAap6cKPWdDuc8p8FAWAZw4TtvR95pUHkQioqELfWzVMsbNPibg3yBfkBhyqSEn2UmoX9Akk3A2GkyzGc36R8",
  "key8": "FCvNZR6npQN7UsoaQeVCWZEypBRummRs9XJdDpzBAAt8gnyo45ZkniaLMyho43AhG2vFfC5pziocsMCpeixrsXa",
  "key9": "5SyDGxmX6z2HugFtu88hvo7dArNeD2W5GLnpfzyiPL842iXbtxrcF58VYzvn8dGonRvVEPo7Hf4wMm3sB3zHzV9e",
  "key10": "2P8s7yzxz3vNjnv4iCCRtzSDVfGJ1Ri6bcWVrht15KHzb2g2C3ZpypJhimPKNLeCSXzyFKWLf9Dj5UistRwCKZET",
  "key11": "5B6cp5Mub196eRqG7f9E7L6LwtKyDVgAPUcynsDod8LE1nzVVArg9mKVjFiStm8rR5wnmx4aa7WjWCBYq2cHCvLW",
  "key12": "3ZntC8b56ZS8nRaQXU4kFSb5E1hE6iAjJC9sr8sad5cnoBgjEE1WSGEE5HqXQAkWG9gNe1LN9GXxvZjBssSHRKM5",
  "key13": "5q85YWWHhybP9wvQRUUCDjBoLyHowoAfpDZ85z2igsmfTeEoHwjT1iygQCsVHxN1XxDtHyWAthy3CBqfSXmSkhek",
  "key14": "3WnqXVn8of4BE84idkvBmy7HZCRVfYEtPgimXUDhQpX5ZGcGFZ2SNMTNXt6jaNepZ8SfADksoFXrnRidQp5UXWqq",
  "key15": "srx2JQEKbnbNFg56oKn1VXz4CWstWsPEoBQgL7xv5WaqE4vHRKFGu43ivpSBukg24vEcq4JZMmsQpAwNbYjTeki",
  "key16": "2GDJNfk96P9spefoDvV99SE2qBUnBTwWNk3iLWCtw6kwawYG7Ny2FRCASCYpSwoVNeecL2tog1CTg4qBJtwHDNPy",
  "key17": "4HDVdEtd1CpFzveqpFFmSTma9vHUmgaPFGZwvswBQmDpYrcGRm1aysSK8AwWwbYJrkboua5p6en5dsxTut8chEkL",
  "key18": "4G1itfSUaZ2ikkT5SADt65GFptL7g141hAff7rXrFPgZCLNigEtH3nvoJjvjYKYhMJYBULK6S4SoFe6jTSvdWpLS",
  "key19": "434ceuGY7rUaPzZ97Z9U1W7APcMQUn1hwj42k6bTRShtVo83wSfqLYcyMoxB7BzDcNqhQTUKBzroYk4hgUgE1JZQ",
  "key20": "2dUA5t9yqFCYGLd2x41bJfcvActyv9CLKWH7LbMmpA1owJphswQzgQt3LCGdcATBbUa3d7WW979rGJyLH3DBx1UT",
  "key21": "3UKm13Pk9jBZf2dHzphRG6EpsXGtWWyA7qcAPpR1CpLsHYTP3AZAgVZ5F8HSuHbHHtX8httzxtPVeLyEmKvqQJpt",
  "key22": "23Wjt5yfFGtz2PcU97NjhJyDmsuKPWPZT73b33hsm3VvYw3x7B3tBxTBYi6CEeaVCaqnQQrM8F1DeC7ALV1ZDMx4",
  "key23": "4BT7QqYWovzFn61rq2BEFx5hourqv1bCBfgtqqLbFtBXV5uWp9cCYJ2NhmyKuygMFXgV9ULp3PFZjshEF2UzBvt2",
  "key24": "4Z9dT3FxtKHRQKZx8SR5ALT4tT8cgrDCQkL8UZQ7ki1Zhq2V3V5gkZnH9oNrrohsfPueH6t8k9KSx8auGNucqq6L",
  "key25": "4KFRbn99pk5bxQg2UPNGJ8QrkXhWAR6kiys8khj9SbQKpSXDZFY64j9qMuBisTNafhPxrCCXuj2JQ76p9yUZCLwf",
  "key26": "4nutwMB563ByNS3JaJjDowrr6mVQXjygSfCMkSF8yugE1oMzNDwK38ye6QFRWZHDYZQksZvX3GHAJjPFxBRHQySs",
  "key27": "5wkYXUk7Y4C6RwDfurmLzifDXb6BNhYHtxXRGvvHcQih94eTAtRFAYoVcTXbqezyiyCzq1UwMJvhZqevdZPJmc8w",
  "key28": "4PtuzoVxd3DAWBw1mrGb3NDMiFzuYN8kk5RsfFFxuHMiAUkbmWHEKj74b7V3FftwaCWp2k588CZ8EeFVfks8VZr5",
  "key29": "4LcoQoPJ2NpLZMFiYFPRbkRojs6YcUC8PQmxbR8yJLpMij1pYxLCjKpYcp9DFa1rZ9cKiDBaCH8yQv2HDFN2mGZs",
  "key30": "k9xH5ff17RaQHUR5VpDVofqUgayEsR1tktNn9TDfxEK2Me3AxBbtL8uAQD2wB37EsZUrwcn1nJHpEg8DKnvyhsT",
  "key31": "4mt1FttueprYqgYtDV945UNDQQDevD18NnuF1bEB2KKUD1RDmHaKmyPd59a1VKJNY3UcA5SWADpxMcNJQmecwwys",
  "key32": "4SnjzWzxKc7CcMd9VQNxstJEzzrbepwsyqw5Tc4ttj7Y6gjkvTA2tpSJCjoqhbZg1qGZyDdcyswahPkCvjEPuLu2",
  "key33": "4yv9WSdCZSxobxEpnsFqL5gQZfcuth11tSwB33m8h5a6nhCafWmg4AhyrZg6DBjxBHty2hx3yK4mcQBjfj9g9dqd",
  "key34": "SkwKLJSRFcWJEE67xgxnWFwdBjSht2ut8oxjo8qUh8odcSrjmXaEB6utKR7SSffcZ7uh98tesXRS6Ux2HcxamLQ",
  "key35": "5rPfCB81UNvhAjASLs7nZrmk286bfKpnQE6LmrtqJLVCz7LA4C9FdNy1z48GdM2cT3CPrwWj9MSK32KTFeE8bCvn",
  "key36": "4B7k1UvwT2rwWt8VCtAPrdrM12wVrqE7dxnPWQVCxDFd1WcjJtLbKAZ3JrpbPdJjFESpmCD48tL61Zh3Y4pJzSRy",
  "key37": "4HoPWGSxgt2DzQ2Tfa2PgaPiZVydQV9UC2ER9KmsfBP9XBfhBihwESCZguSsZBpdSo9gXi9CzhfL8W8Dfc1oSefC",
  "key38": "5bqfuoC69rR115ixpJBFQuwyqDHsFXvm8Nce2VEL65D1iZmFasqvo1VkmiQau9ro6K1wLK7DhBTkZ9Zyn3RBHerT",
  "key39": "3fTGKEQGnjEGY92pVjzojey8bkfEDarZqV4XQoB8thB1tDdDeohdFXxrBkF8je1qivxqCdcbiVdA589pViZ7tCeY",
  "key40": "M1P7iR3e2ZpPE8eZ1L34wkADLRVX3ghYdw4eKngtUaeXipgevUQgx3NBRRBJT3BkH7HK8u8rWXPwrZbX86ucnTC",
  "key41": "3D5hDJh5Uoa6HLGWxDJiMkMYRraH72ZsXQmBa4vFnhQXm2AnMAMLh78Kria6GhXt3DcbXaXqbuYb1Tb4pjP4g4nU",
  "key42": "2hW6c2b9YbeiMmHjdNVcBTTuyBoEifyPiJVmV9puE6ZmK7hLS9mFKEwoFx7UT1TorcfVx3NgAXf8qbqiP3gQSA9a",
  "key43": "aVisCnvVTcNhsRS6VdndKLh11btsJeD4JANQkRyCbRaFsfqmYSHV5KfGcuJ3jvXCTrf2XYfwcX6q8dg1YUdGDTD",
  "key44": "5TDa9wkBwJYWyBuJFLN1E4KkTPnxbMn9rpyYkZHiTNzPqsrH7c2YbgeMSEHx7VCFfQMCkVUF6gwn1e3bzgPDoCWf",
  "key45": "2kp1rgX2DJ5zrpmYjLf8WW9x2Y49N6Wf74eVrs9x7MLhZHeH9M6JXULrKDYHFuvKdLxTVnKEytyodH7ZV1JjA7Yp"
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
