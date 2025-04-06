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
    "3q2Nugjaw39Mu9VNuewLzbjrSQEx6NPmZ8Tf6br9e1BxKkY2cKfJuJkEFvkN33w92w7NA7okgae96VPncFoRdm1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZSHv7JCnM6oWAYrGmyK3Th8XPChFxMfS4M1y5PT9CSYSAPPT7MJoVD94bqWXYBUYCmjyyJ6ZNCjkBuNzGkaEdnS",
  "key1": "FErSWB5MJzm7Yay4GxJcQo46tD9FaYqiQrWr4CVUHrtXotuMbKs9bVJnZA8DQ2zDu5KysRJMiofRJ9b7ywgQmQ6",
  "key2": "V5NR36FkaAUQgW1CGYZm7uxTQw7X7mutsBAGYXPQnStPjqQQfxtXKg8cuwLfnhY8CNLsGz3yhHrYXY79ZBRuQgN",
  "key3": "ZDetwRS15ZFp9BTDsvcsoAPrd9NPazC3C7HGDv7Xy1gpLnkxHjLkum9xhvR1F9NJXJtGmzU49RRhTYMoSsiwTgP",
  "key4": "3mQpL3s6B9EwAXxnLz1EJkFr3Tm5dt6AT8fSB6778vhWHkjDXaiLtr7LDtEtruR5uwuwHopfebxQmrf7DghwB1E1",
  "key5": "2NtBDh6oVPQHCyPQdnzyCSpzTo5mMz9PmgFsbMG6XM2eNXaZjtHufeKQLTxrYw1Ecf1wFaoDhiByCe4p5LCT5FZH",
  "key6": "atbqzKNqz1FUYHk7wCVA33zcBGLAQ2kghjomSeiGkBRYtkPqFKGQqHJDRNfE77AEAhTtLQ7Tm8LBsg5DCcWzib7",
  "key7": "5bGjTDMdbCSpccY9grqBrgbpsQoAm7b1mjfSzJEU1aqkToQuk1RaYituXDJwLi4pm2AqpbL3DgSiKWTKJBEucFsf",
  "key8": "5aD76eXriMHYDoWz4T1ve3QRf9G9RBi7Sm9om3XiryJCHfTG36y6wm31hJNvGMUfmBKb4H4XmgBXEJm5XXxoZJ2Q",
  "key9": "3x7tf9VvAGJbox3dA2uDkVygbGDywyk332m5AbehY6525eVkZrXsMc36PZKk3rtNGmkiNHkEoZYYedHhdFFJ8EpS",
  "key10": "3LL4vkASR7PQebGfrYAaFJv3o54r5SJPjaE4oNbnpH3jAPP7JCGkS9sx9ZMoZMkaxAratMMER9a3dGuWWuGERdTv",
  "key11": "4CbZeonPQTWMFmFdfmqySiXnVRRx6cYBxdzHmrUDB61RkW53XNZywszEobYVMxH53foWaetAa5VMBRHN9hHNUCu5",
  "key12": "37xYn31E5iXPtAB2xRSpnzSTPa22d9MQpxsChAwfzXTr9wVeKSmQfeDYiESZhB9safvoYfSrk2Y2h2Ns8hpod6ZK",
  "key13": "eXvGFJCyGtircn1XokadDjZxPvNzqS59MPeLUvt1oa6d7kabhghEdXvHcEsHRULhivzEMab48F6ww5arWCJR9dJ",
  "key14": "5VyZgtjW6yaoWpFxULY6aRnxvvQu1siQErpSvobMx3yCXij5A9PBvU1P8SYMLDxWTyY8hCw9YCNQXtSFLosi4G2p",
  "key15": "5R3br7uE2M5j5H5oNR1JxER1THrbdyoMBDZKu7PPV76vTvZgniRf5dEDMKTgqLxwL6vUU9ybyvmXeSMaWitsMFZZ",
  "key16": "3MBZaay9doCdw7XaQardAQjiToGe3ny1a77qsghn86nWL2nY7mf4QWGETMLUst89yciLVdDebS56Z6A5b5NJLVAg",
  "key17": "3jQu9FmdmHEnJxFatdVAp94vG4eZpLuyzLPyFUQfWT3GhstP2uhZ7AueMqhDtzbVPbShBqMd4oG9mpGxxKdH62Cu",
  "key18": "3aHZ9pGY84r2zyFogbkvXfgzm4C1Qdce5AXayCNGoHgiZnCdCJLuQRaoJinmyyGG8mvwgZ4ikQkke3AUmRhrqGDt",
  "key19": "5G9bLA5Gu62QhYPFdmY3cGArF538NqvpEjiC1AwoEfszMWFkvbuuCHyJBKAQhHcJQWPbKVLkMU2V2XcPhW3WN8Yn",
  "key20": "5FAeynzV6SjWRoH342QRbsoUWJe4q9MzEKFbwZHcQp2Z4xZJsmDuGnEy7QxFsVBYmWykXq7en6rEyDfxbd68d6Ai",
  "key21": "5auYqetEbrnt6dTeZJ1C8UWHdaR94YLoM5MF7BiNxh8M8UKE4vdvsCwXxLqsHJM2q4XQNxSxQEwXedMRScKYxXw8",
  "key22": "2PQ7cVpbp52YZw6LAT1Nb879kNkJH5tHSjLdbTv6wVK3MkzZTXrveM8cKiXmfrGJCiaXy8V9tiAEjYD8jcSj7Uhs",
  "key23": "2yPkXS8fzb1eZSXPRaAANVrrYZmqKLLWTgyNzuqS2hmR3ZPXCvj9ysHBdXnfdA4epMTC7XX5pjAfMqtyMVuKutha",
  "key24": "4CrT9XqMSUL2Bs5RQNMaw1gM26EkM2ATeky4rkMrCQgLCVhFnWCMLegVtNoxBxQZ7zTbafF9eW7iSWAbkgdm2XiT",
  "key25": "3cRqzF7QzGX3Pkx59FdM9S7Gtqr5MYg5kLjbkjQKwRwivAHrd1zUrAJskYjRVjhy5V19Ju5ktFWVXib5gZKpb3hX",
  "key26": "2MhtDnMSfqc8TUPgie6X38YeTNjrucV22xjZuGUYyha1uvQiP1K6FitpeWX6a8v1oyE8fobXXsaRVJxo9thiYvW9",
  "key27": "2Lxp4ukTbL6MUkTWp7JsSgnntqkgQSotAUKtN5jRZKF4ndQvkcdSvkfwzjoXdH7GMi92YdnYaD1FVMsMZVJgYcmp",
  "key28": "x2LrXFvKgMudAxYATXpU5u5Pw5grdkKEDWaVr5UEiZjFHchmABP2mgczMSr8SXubzsTp8LkeXT93qXwKMQiVd1A",
  "key29": "4vACTvCLYax3tKVX9gYPJgT1BbhVSUiF1KzX36VrxKTJLJrM1bfgs7sS2R41oemphmN7LpP1BeVkZ8XYkknAEUmZ",
  "key30": "hMtKFzFvTyYjbqNVxjyDMpmcquX49tRyHCsjAYiK3L1vcLLzETK2Ry6ZMR1n4CDDXaa18XPKMyP31TfL749oWCB",
  "key31": "5UYgGzi962tokmGtjrfndLHK7ZfGeJ78KXG5Ty8ygk9LdJr5ZRLYfEFYEL2BSTgu8ieujEGcnYDsJF28NvuFXdY8",
  "key32": "64Lun1shd8pA53vbco7doMC8VUMV4tzMRQykxqTLUUcCwyP37BgSBdrP1uuMLXMBTDRjFFBKSzrUgKDtJiUQp3qg",
  "key33": "3Vo3JDRcsrq26oBttrPw8Tn6EvBm5Z7PcZ6zmf1X7kdbkH9NhPzBRRcZ1ycTJ6wQvc69xrCiZ3baRCmmCe3BSBV6",
  "key34": "3dTinjA8ZGS9uQXoym6qrYDriHHPAvWa3htr3PwGLRRxADuYEaCo6XP1oUEqErioBZyfvX2MAoUkYwQKFR1vApNG",
  "key35": "qCpwBLSPreFVH6tZ83XDogW3ahHsVRRAW3SxDpTwc2a3vULJ5VK6tVj5o5KiAEr9MwK4iXFnWvMw75bY8Ark1kH",
  "key36": "4dcmmJ7S7MPHbnTBCrX6Xae5nZ1j2YY3LRzUrb449rHqHi8JQidW9P255Tj9FZv3KNezDuRyhd54S1CvcjcuUtJL",
  "key37": "2wFFbxJiW6QSVNa4wLpGfnj4yqa2myhzAroqk71C6BFw9ZCAVaCCLSiCVhwY3Ysx6k1iW5rVZtG29UzMY7ZXqmfg",
  "key38": "37GYucd1awqzEreUaMocUbrkyiUReYha84ia191YzYMY9WHCXZReNUxXuFmSxcj9KTk38WeRjoJLTyiDPiCZnL1S",
  "key39": "22y9piQ6u1qxiBfbraHC8y6A7K6GDGdMtkS3ZRrCpgoEDpB7tSMvRxKhX7wF5Qi4kf6vNNP7PnURHm21KWRWBwy3",
  "key40": "iPXBJM5rf7UR1e4ceKc4o9E35ygbpHY929EPX6PgJ683oJraeo9DvSpJxARRWb1Ak8ovARLzZYL5g6T6aLa8Awy",
  "key41": "34tFtugEutf3enRQmc64dXNwRC44x1iwbecXXECa2MG7eqNdn4f9t1DWwPd9HCqJenu5Vts7NZPTgfZ1J7bkneAu",
  "key42": "4tpWnBXVWeXZTtSGnyQxcpYjmQe5f8cxfWqTzxpypi2dQ8n2Ekppy7hRQYA2H1VJqynx5WRvVotQh9fQSkSyGw8j",
  "key43": "29cn9KB5Yot7U3ve2TnwVVHkwN1qfhEPGLuxN4CDsSbRAHvK8s4SStqPcB4JCwKsnEZu9UXTaxkDu5EbQJy5ZkuH",
  "key44": "5jWnZHCERh2H2mKXqxagYZseQVDHrzqarrUGunZ91AMPYfM4Zit6ZMoNZKf6F97nkWeRXpKKLeRxe4JxiwGXqXhq"
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
