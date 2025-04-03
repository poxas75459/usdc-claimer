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
    "2FSDv2nPR7FZf8eZQdf8Yv7mtMb4dkFbxF4MoaxhZDrixkMLAMjeSSYWNVcce14xvSRPrVaSQKWXNC3p9yNRuUsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64BtqCTBps9pjuo3YTb5KqgHagBwS3XrvBjx17tdgy6i69B7kXPt9HR9s9dj3CnfAvTK2ACKrZ3JLba4zRBaQ3Fk",
  "key1": "616EYFz9jUYA72PkAD2uH8bUntvHi9yXyNAkGVsAvnFrjJqz3UxgtXdySibE2eeh6LoiWfarjVjyH7ZvzFEHhZPX",
  "key2": "4tVWiTZknLmCTZM39gZiqVQXXwCpex5B7bMTuSRUkGtKxmHHyEpXs2yvmuJp99SwzM1mCoPYiRBJMjkvJw6vqbqC",
  "key3": "4dxkyRLCFC1n8Wv6yEin4SvgQgty4DcCNhFhNeBkUcgwm3Azc8JjcJz9wC5eDDmGbZSZ9PNWm4FTfVyMzCfoTise",
  "key4": "2t3LbThpD5WGNk1tz3WrdDQUQpaZX2JTfGk3GoJk72URSM68j662f5zGirbwdHPReanQu2yvSgr3aAeArv3h1pSE",
  "key5": "419X45jujkujaCeaAmkyt8UmSVHmPzhVM1zGmfdAyenhHHNS1QZ7np3v6XY7vrq5iRMwHCBDEG9Gk2PV3kyT4y7J",
  "key6": "tXhfx3ZHMCx3E8AHZWHL98u6VwXe3Ubzqc1MNjoZEi7KRoSai8hgFoGZrebYxDakP8JUQyYVov6hsfUrBq7AQ3D",
  "key7": "5K9BpbqDKGJ3HpfGCdWks6rfX9TRh91f1TsmMaJ4G7kXV2hu1Ckm6b68TnjonmriEohGvrzCh6HstZJohrjdT64w",
  "key8": "2yNKMAJj3YdEiTUqiyYzHTAQrBSW571UQ63fdteUnkqbE4ye64hSHoFTTs4KCxi7ebiLVLsXnNXGjSBGZcxkwQ3e",
  "key9": "xL1qa2VfQHaxgMuY8JNVZNaHdkzDkYFtnckanaHdZcvVaAMjHZ1HemtpLPhaz6MXekYJd8TCiGfoyKHXGg3X9dy",
  "key10": "44EooCmBfj5skQsod96UkMCphw7RPdCT1762V26AcDhx97soLwaNCumuFnj73zVFyfsHRk5xpTCzL9v8Gee4dR4d",
  "key11": "4rpx1HthmXg2do18tN3qQSv4VY61XTp1Xc6ZnnpuBKB2CmWcYGsTh3FeUndccwnHbbFw5zhsb5n8NmZPsvNz1nqv",
  "key12": "4irL9wSJq6eJJATfgNcKqpqCD6SAK176EpcWgwZHQXvxL3UctuyixhYQLk6hEFypv9F94m7KE5GYXF4e8dfSMmS5",
  "key13": "TKy48R2jhRCQUZLgA1jT2pF6ibCbsAHH6phJzNzFKWJSwerxgEg271ukbHgBD8BphaukgMj2KHG7edCccyXEs1G",
  "key14": "RoPuSxL46WoHMMXXzTjMcgJ4kRwZsdqZBjHBxaubPWniDW9W7hD9jvNFL6PSxqcJbS8HFyAtUDpTyZpVwh1omF1",
  "key15": "28Q92JngeGmF4jJmJgbVZtfooP8xswqKsMNV3W13bFHU6HaXHBAExAciP6Q9RRSLB7ZXEj3ULswsMBz2BcKKvqMY",
  "key16": "2CvNNn3TvAib6JTQUopSs3Amwp4PdGPtegTDi8FvXMTTcNscgWwF2KTUaRmfvwLjweL7mhW3CP1xPBya68M671wa",
  "key17": "4K4MjXdpkHrgQRDeo6uQVH8ygQRaLAXWk4Rs57oA49bo6TxStzvaF5SYwdfqWihBJ6XPxdMiqokq344taSvzZpjv",
  "key18": "CGKwqFDZWDd6Ttcwo1QYibB8HRSqu4DAdPPBM8tSqrsZuUpesp1PH1pVs2ArySMR745L413W3kAWThS6HLb1qM7",
  "key19": "Wn3YL8NivwmV1iT2uqgbvL9zigUmMgJMUb7uwQJVzzWWXktJ4TKoH9GDDXkqVVMpcm44hgE19MTCKrTEdcTcsum",
  "key20": "3iGKfBRtjrX1YbSDzWWQcRRWhfUz4YEjUZy77W2wMxMEvtEhp9dJjpsvKAX8uam8p8hwrX4UFX4gMVy7yHkRSfFR",
  "key21": "rKrGSSn5CtoDeYXJPvtkZ6EzmNxC88STbGTQYPzQ4m6uLCa2rBwKdZpmUyHmJCZm6TK3cTZFYzFA1S36c1hDUV2",
  "key22": "3pTRnFFW4NQqHiM4DwyjgVZjUYUJd4mS8HDDDn3682iAkBpYx2Cg7JaHQuujnjjiBj5vqDuEvigT8GiHcNFoHrz",
  "key23": "t9npBMbSYCMxTcWpLp6zbfJa4PrUvaRSmqnLKSjD5S3482ewerHoCv1Qjfocm3KYzuqCsQVM44BLcKpBKNsrsXS",
  "key24": "3jDYPRSFj4Mmwa2EJGRBoRk1utqpH6gDSMtwv4EhYyj7iafhp4m5MVVRRpScqjVqQeeSc653bNXfDn3aSvBveLjY",
  "key25": "5gaRdqzTsCP6Mk5HRddoYt1DkYKzby36ApbGmuGwyTP6wbzcPHCQrU9pLDHfX7NLYyM7sGkRX8yeKQpxTK7DdjrS",
  "key26": "2qHVQjP9esqgPdB81pbxLTsrgyTLXPHtDjrRbgmbjYf6zAHSZKTZbu21WVPvoSieCReHcb41zGFZ1BeHbLQyMXF5",
  "key27": "2x9mP96GnRfNtYN1oYjtqnEKrfLnwu2r4yeXABnkPpjzAjUsHaJKaiBgVWFtKp5m58GEhaG5YjFY3i7ojzgwMhpm",
  "key28": "5zMFLdwyhSjvQpZxZ9Kt8nSRHKbPrtscJmCiBCCSiRaNBzMLUhRiX2pBdCEocn5APkmKua6AKkd1LmKgXzo9yYqK",
  "key29": "4fQ2BWnv9RSQPzz8CwhtbCPTLWDsLWTZAv4DsWyB9D3Njsse6iaoahD2NzR2V4kCvKz5GkbPSf1Mm6DSRhH5cbBz"
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
