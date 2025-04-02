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
    "EUQpRGCn4tbwHBZ8nCwHqZLs8Drbwik8NkpMVx2uV7Y89G3UMe4PK9dC8VgZb4ZLjkEHJJyyC72eSc6U7m1dN8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Co7xkb3xKK5oVEjbNr5srz5zcAnJtetQmDoszGraK5Wc8WYTv8FriZM8UebHanEv9VPr7sTo5EZhGhaJHVT9H94",
  "key1": "2ZL77umPkv5GhEqr46DRadhiE31YyCeViUFq4stPb3NHAULrLZkgcfXijqLT2bawmHgQnGYNbWNuETj259Qg47PV",
  "key2": "3JFEQQ3ncK4yQroZi1LgXcxL7D32MsmSCLDtQYn1uwNpAvXUvtpPc4UKqtUtLjwqvd7FGjGqHy4YB89xET2NhYnG",
  "key3": "54zcnCYG1WGx2oiSY3C1AFsonuUbhr6i4Yk3MuBTQ35Ut9fK1MezcEVsaDq1PxqQULA4eEZujeuGcC5GgrJs6ink",
  "key4": "2Ng5N4HU3gY85es92AZNxLMMXXWg48JwSCUQrNge5kzFZR9m8VFcpRgWwZEsHwdW6FgP9KvyWSNCCRTWbcnP3Vgp",
  "key5": "4BDmcDiBAvXfHut61qnDxbrpAndKJBvdiaBsvMLeGra59o21kvqw9zHaoByFfDymtCGykGCAixgpGUpch93BjyuG",
  "key6": "491dGPeeL6VKNsGPcr1m7ts3T3cWYkUsedTAwnwjjWpJq1DEfyVAEQWGU3xiPiFzDjQ9k1sresS7soQtGoBAPpdS",
  "key7": "4snE6L33hYCSvoKWjVkQjijaNgPbYBbD5Q1KhFhnJFredF48jmr3DvM5641UQ3wGAWmNHpMY479sCbGfPUt5Axou",
  "key8": "37q3HMwR84aPkXTp39JVnfmDh56JdXim1W5nX7BUVxV1ckLXu2GGQ86EbSJiHdSkc8tgAmwyJn2bWNo8yx3bopq8",
  "key9": "5JsX9RMgvXSz2hA1kMoMrsSFbHh3BuVCd7WKfh55fSQWNWHiyENseZxCWJmHSH2a328bBncxvAusd5dep7zFheAt",
  "key10": "34y7FR4PFRqwHBc3VCaPo2GMdfqn9XcUKT9dUk6RFLaHhcU7kWVLhTRSzvCbUg1gA1t37EKBYRn5FUF6Q6WvdcNU",
  "key11": "61h7R5bFuuhR3YSFYxufA2eg7MeiHNdDcMKANpzdrumiherMrBh8iceukXHecrXtf6FGRauUFWJPGao2CBZR3eX",
  "key12": "JRtxfaxQUKrfLPoMAZpZmMBTPmssSprQP4UJYUgN1Z8J8AHbUkFduMaF384pgP5ArtVSjHQc8Hs9XUgb28Cka37",
  "key13": "5V6dRqWUhyjrPMwfp1ktJP8scaHkQgxUwNUaKhzuTY6bRRKvGiRYuWv7RuegruPLT5UrahqvsA1TbKDFhftAb862",
  "key14": "4L5DQJp9UeyyK6y2rauJfqj6j78TGUxQuxv6gQKcexPm7Aus6ZHkio3jFwNRKYJsPERTGnd8eaNFV4vvw6iXSSf8",
  "key15": "5BqJnQFf1u2P4hYgZ1fMvWpfWYrspkzrmtY9dEDoT6ztEp2bXvcmMTYsjWeN8qJKxoMZuqmeJU81YrvxFosEBvBD",
  "key16": "5K75zCkf8JYHR7WT9mENsrG7pKqWrtFT82bh3iqVC9zcrT6WhDT4dyMAJtnpQzTYFaPZ3UTmH8dmSxdiaWusbCvY",
  "key17": "FAvPmJmNNpq5JxKc39EqpEqg1tYYpnSaaVuvhzprswTYX9SzTmgBuW8Dg3cAjTfR4JEwXSqNFczy4dvzqJ6viQe",
  "key18": "2MS83P83Ktb74yaryYytLnWM5u9nyboZmGNQdThbz3VuGxSodYAx2eZapYqjFbXyAZrhGCBzgtRWB7pvCC8mvyvZ",
  "key19": "5BeFxYTFy2iEGBDfdartnMEcNdMQiJVNmrTmRAAAWxyeLcwZFVLsrbtQLimnHgGdELhCZzGrttibebzwh34oSQyA",
  "key20": "4pXZ8c6dcYRDahon5YnpEzwdmL3t4SErh4tuSy8sfgd8iPneqn2bBtTQf328bKWbwi8gWeBKaJ899cPWexoJge8A",
  "key21": "65wJJ7tqwLLf3ja79VyHz9Pefj2EBSxBtutCNeKhyxU3Vy4T2cdfJ1HimbMonjWYWAUcZxRZbbYzHZmQPBz3oFjW",
  "key22": "5nMR7PPD9Ed1LRPJuhZjxhZQRg3BJr3CtXZezAetMtigRHsdgDB7uYbQH9jZEeSrUSyMYQzchHWofyMs9Zr9rjZK",
  "key23": "KiyN5xgyR2EvKyESkixwUL5jXbC5irQCYMLccDC7vQGRS3ZfJG9DWyokSANnwwWmGk8hBpGmhmF9nzkQSuzYqsf",
  "key24": "3fjhwZgw6wk2s9jxSu2HySUxufaUFjssj5kKk6oJZP98C8bY4XBbyD9SPv7sFeg7tZRZiYM2Hdq8vepga9Zbz4on",
  "key25": "54H1NerPnSBNHTnm8zEoEXp19e8auKSzQPmia6u1MumFQv5y8GgHj6RsAveVtVL3XwibP12oZMDg6JsLf1EAXoZS",
  "key26": "3VjtjqGNQ1CyvbFaheWNbmJdTRrHqT8Vj5oAp3iSuzXaA9ESURx2MqVw7KfNiGa2brbTZqz55quxqrAQ7DgBHeMo",
  "key27": "3TPGobnzsfJAw9Uaqtg4v7xpzMCXpMDy7bTo85m8W56dxAVBju9fFrRuYcwR9uu3ch1ipYK3CTUU1GKQBDzv11YY",
  "key28": "5DwLMC5a55GWndLT6HbVmEKqp4oR9kXwMSgMC8Yitp1UFysNjGc6WTiLyYiZgoUPKiAQKhewcUMLcxgo1zMxSi11",
  "key29": "2DLehF9ZUvdmvjcEC2g7rnXAuZNdjC8mHGGe2kn9nd4MrJ7iwyLgKNUx4ge2WP2FfLtqnoQ7U9zB8xFmkwdgBYYj",
  "key30": "LYCWSyX32Wizc5vY9sYq5kjj5bv7XPirgGVB6geW8eQnsoZ1miUpUUy4Jog7TAa8RG5rYsX5CpMNJLAnxHV5Dkq",
  "key31": "4SZYwbj41UvpnjdbBLhrZdHVx63gWxEUur2f5zySWAnZoKNfDrY85VDRuQQ917BeVsTrRrEPGyunoYFHaMHj5ZPu",
  "key32": "22x3EiKanxmpJN2wGWqPigp1oXq86J85eNbGwZnxS5jQ44KJLHr53B2qP6885FG21nHCgZJBWHnqyjXuLkacwYTc",
  "key33": "4Qtb1P13ksV6j9T63rGMiBQArLNuZGkQapqVJLoVx5fp67HkJeBGfBLg9HPrgtAPVN1QZcVNUF5ZBBL1ccEFmfDv",
  "key34": "31BAtLWW8SfSVhsxSCkMfQku3PLQw2vFxr242KVuGx6dXex9wkbRzQmkHLMgGSm1KSVNA91fGikXTXatRFGtPLQM",
  "key35": "5gHMv3fByrjDHPRrqjn4RSrvoBZ4pBYz17pissH3ERqjN8URRS3Yyd4g1GFAgchQ3fkFZEkXX1mXUebT1cv1QXVq",
  "key36": "56YHPyCGoe5yRy7t3PP8eGLt1eNcJhGzL5kbSxutYJTjEcKgC4AsarC29aTduoNQE6uw95TPcDc1eTSkUfekZGz6",
  "key37": "3LPWpstifMhTSjmztH8gMmEmm41gJYjn7vzvza4MH5qK6EpP8T1D7XFvREnAtTz9aVsY3F8aei2URrrr87HVpaZW",
  "key38": "3CQwB72EoB6wqsKPUrP8HuZXMN4yrkshT4DKGnnH18xEMFz9noyUxseLoMrvXLtpEqREfVf44qVSmez3jxk8Q3xo",
  "key39": "KQwBV6FozroWLP8TTssBK3hvty12P9R1AuzKqRdR9vkHqse3H9znws5msNQ2hME8ZSk5zWLQyoDdhynWMTDKQ5J",
  "key40": "63M7NejmUkMqNnUW2ETawUvpnmtHt7Zv6iaE61KmS7E7Mx2myAWhrPhyUo4GmhWbkUwyXHYfNjmiaCw3pag3aWQQ",
  "key41": "5zNEo7sSkgEBeiurYBXsHTZv6byWUX2mSrYLY7YyCB56L8pJ63EQiFBAoN2MvxEpCZFfKfrmVmohDpdAnzeARKcV",
  "key42": "3QewQvycXmMTK8KJxUP7WMs9j73Sd7wQmkK9U9XpnCzvjFC1GN4ZkrujiR2oejvBhCSU4fVYi8N7NUqHpojz3kPw",
  "key43": "5wTqiYQUWUqfi4KJvTZ3WfxyeEZcrYFrKNgbvxz4pxrTDD767j3bTEsAEQuJpmXQXXvA1SAwLi5XSv97yizRe7wu",
  "key44": "2s6EyceaEYmh1qgPQPvwRA7KmEewSA5RzpypjFRSQfrho9Y9u37rPegdS8PtfNMhVskHyez13v2bpbXMvvhhqUvA"
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
