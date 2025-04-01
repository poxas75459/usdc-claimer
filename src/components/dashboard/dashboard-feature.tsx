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
    "5SkKsB7gnMRXLUDn5sZpaWRDhRuwaWVBZNH7G9jkYsGtzVoihQNgSDVFHQJ1XoXVrdk6pku3Yv2WiK2EKjSazZVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XuyfrsXGmUad3dDYt21wCawHKeAipRyzTkCUeDMZsfQwJuUaJueUi8J3ZfH9K2kg1HDhc8rasUSc13ei6U33AnP",
  "key1": "NQw4FNZe6d4tSweZ7gEG1iymqE6eWG3rr73gAqqoptEYoDaiYT9c5iLeZGZnrXsZ69b4vGpjnTE8iAeT95Tisvp",
  "key2": "2vydVkw4pv2A5FGbKAmY92EGqCrXTg6J6UryLE9XUSLfqwXrBwpCQHVDTkQuqe77qR7A9ziHZSLY6reUhj3kyvsj",
  "key3": "3zyVvwkSGMfeQ3fJPEJgQYGnmLoND7jS7TBVgVLAa76ZTYGsrEzvqjMQi77zEYGqzuzWJFL7etXiDYvTKbziBdk4",
  "key4": "qs9aVvYCtvavWoQ8coaFeeBmJAWmmkDMcrLx5sZcrGq1okZokusXG9VeVWBicGu2WJtuxsGGptq9mF6RuqZnpHY",
  "key5": "5QJhH5EuR9WAN5jEWZtPpiWNB59ET5jtF522PvHdYYYFWVwxBD1FjK6TWbZLuRUTTJVdeypbmfmdSY2SGzTvpcwK",
  "key6": "rqt58wV3eQDQj7cw75fGsojktB6328XjrNajQaDy5UT9QJ9dfH4zzumv3aSfcHMemqeocaYjMkNAyaoDJrpHTGv",
  "key7": "5N5j6b7VZHGks8LnKNRhwhAzp9e8mym22Q4HE6KvWyzB7rspRYkBS6YwvTeiSACd6dqi6VqJ9NYEAhr59TaHhQmN",
  "key8": "3cM21fLsk1ievzvDvpik2rGfDjzKrRQexcwWX7Hdd9cG7XsN1EWcsj6eiYjFvNugMB5KR5tRbuAuHBhFtYBmP2Zp",
  "key9": "SY9TaFuQPTcd4p8HRk35hjiBq5kndxrYGLa8v6FyRmtUDBCCQ3E8tL9ngUB5MYNrsKn4jUEKHKXGb4jty8DNG5p",
  "key10": "61MMvR59Pk95seM5jhCXLBAqoHqD5vacY3WxfQxse45urDG2ZaKXWyqHAZvg15c1MQQqBdhyimKAPaY9Y6YVMHmx",
  "key11": "4bZVqucs3GAbqLW4zMzEtqpSMPfeDcdq1FVu4t6qpiF7M3PXoaRzzCri4o6whm1E8J8rhu5bw9Gpos9MiP6uJ6d2",
  "key12": "3d59d7nTgfgumTZdmc7m1iUArSJrePEZMnCtMLeMHRsG3Rps97aBPWH6qG3wNxkE38LvT9VZDNQGzwr62K76MFUs",
  "key13": "uii42nGC9Qn5deKaPBA4m7i6Bo6ajCUMeWkpZ5XJWvCaDCeFK4rPvfsEbos5htdfJpopm7tA181KuwMuV16q9Fr",
  "key14": "2fwwKd3TKMLCx39tySS74FvauHRYv8dn8KPdJL5jb41aF6jcVPVEDG6Ak3AyKxfNdpMErsU2jHqiRYYDZSDcGZNK",
  "key15": "2w7vsLnEL5pSks4bQg3vfRurZhLZBev2RmDdNeSqagHcCzhP8QyiaDMnyB63Vf15TonY3gGRAzJzDEQxxN2PGt4B",
  "key16": "23vLsCUDKKG6CR8H4E8YDG9Lp9BmgLF9zUcJYN9mb44sBTqLFDiSbEQGTpVtdgB6Nxghh6YATkdBQra91tdog93Z",
  "key17": "3duEbUgSbcekQvaHrcc7pdC3i8wXASuDUVrxZud69VLsJrqA1bDEiT6ZQpHJRjtkoetx82Kn2GmbJhZogpHVRReJ",
  "key18": "2WN2N751z1gicdM7Uv3iiUHwV9bJWUHA7nrznKsG5NLBEtXELke1ZaBE6ArKWJnTkJu6CHzP2w7eqcKdRcHo1gKa",
  "key19": "54CnpHrVFKQpKmC6LEPq2WM5dq3iPGp6DKZoXJCRVTNWwMWumZqx9pfsNS2nCRKDhLL6s9rwKtbFR6ZD6XmjhUnb",
  "key20": "5RVYJHaUctWCs16B8K7XFboZSnQ3t2ij1Z2XJfd7xRHrMmuM8ksjEKiBV1Fy8Zi8npoXT5sf7ZR66Aow5u8ndaYb",
  "key21": "39SPsunr9utGCBZpzCDapYzGqLHi7Lfz6ERKAxPewAkwLUwmCPc1KjPSEbv7JSQBsY7XiDb4Gh6YeHoFNkDZ5HwD",
  "key22": "2LmtpW3FtM587rQQwy9oAbh5Urypt4g7dSPFWQf6ccrBDteBRC5UeWkgSRavojoaR3zqYy1hAxV2ZNkmodrS6MHA",
  "key23": "4Lso24VjMQvqYx3gY9Uhed5dGiYZfJ2Ds8ALuy3mWuuXT3FTszV9AKWuLTc2KE6sfyCnHAR98dKeby1UvprGKNdx",
  "key24": "4a9bPZJXV3HfduczXeozCziZ1VBSt7ivDYpJ8oPd2bjANzww7NjV2qTpV4xTUWFLNG3PWKktkhYQBU1qCP3dr1Vb",
  "key25": "SQMX4mD8zbxZxxEokxQCpNMxMtqyF1A43EKbdhnR81xJNhQK5q9o4aZNa8kXzkZMo2eqfsCxJtZrYkBuW8RLCp2",
  "key26": "2f7NWbY1FwezsCze1K8hPC3eXx1fvDqF1sh4A9JMHcT84NeNG2vL8TcWyyaNmgM55r6fqSu3rbRsWPDbaJrBKEPN",
  "key27": "3cWy8WFowxJh5StGnRSHN4zxBGNcLNhmccfdTqstS9yQ45JHtHFUwyKEXnrpihM64DwryougE5RYhn7V7B76cPbQ",
  "key28": "41TFQEBDVbbf5Nwdz3rZ8GCSPv6btTVVTUbvoNLozFPwT3pvX6AZMQuvcDLw5qiLQRdMsXoASfsZ6AHqHU4XiVqH",
  "key29": "48w8qD3MACsT7usy2mEkiz2WLBtF92mZisCTDASQDfBu98Qd7T3y1rmq8nvjKaEZUEHVFDncmR5dedBdc8Uv9Xpm",
  "key30": "4thEJYwrvdKkjNpTs3YY4mDJgfTXWjgbZ2up4zgQigobARnePR9S8ynbim5hXpaXntRxF8bmEgA4EGNrumtheHD",
  "key31": "3ybiLsWuv8oP2gPSZYnsGM1v4upApt5dbMjCKmMEsp7D9UET5BqC8PiNw1cTVsMYTgZdjXUgfcZ2wJmpvyBw2MEu",
  "key32": "3g5vDwB3EJPRGoC6Xw9oKXof8t3LAQra3aPo5e1BJgT2HpBfxWimMTYhDY5HXhnQJwEFr6ZZ9Dkno4iUJg5Gwmik",
  "key33": "43ohkEqzy8sPrjfB5oqm3NWDVzVdVKJTVUAYnShPrmBEmG4DiVmwtxXU2ECzBwbwJQgDum9S3PFCUySaupK6QEWc",
  "key34": "3TE7766xct1aScUrp2Ck8ngFDyUuWZ6bGdvxJan9P9CUXrjumzMQVmoHtSzSGVyFbM7LQA2pxdAAPQ1RF8aUZ745",
  "key35": "2oAvJ2rxg1bpdpuj5j1eD1jLhRuWQfXWZx8RUxM2ezySxq9HNi4xYhSJSo9KdUesTCR1tD5gPnQWqTfyDHxaPcwX"
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
