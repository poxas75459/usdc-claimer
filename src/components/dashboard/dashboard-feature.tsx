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
    "3nL6X9pbdMQVqvPAivUFNpwRarWNvLhxoBDpg49w8wFWcDWqHo6hXpyXTHjSoXQ34a2G5C3SFrh6PbnB85a3xYBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x2EoCMdWhJPxHXnz4thuQhkHin3rFy7PHrBzQBvTiNurCdAqo8hcXZ3hHqBZrmJrUA96HVSTs5xA8Gg2qa16yo1",
  "key1": "5y72vBgENPeG17Zp5HE1na4ySjHovHjZdY9AvRUx2cEr6ohM82i5rPzVf6FH73GFdyTbc49EpM74VjegAQK8Rxkm",
  "key2": "3V9Fb74dFRmFztzRhAMo5JUa9MrSsAEZoQDsu22LmMDjSCsUrvUAEKec57Q8Wk2FGZ2tfm4nj52U4Rw3V6kU3UF1",
  "key3": "3LMR32oS14CzYq6ez2S4iHHHkGDrbLoAAcorN1UWF4ARZ3C8MrUdo7aUAieqeB7pwwC4mXK4fvdbsRfhugJihPtw",
  "key4": "3aVmtS3gDkCPXiD6Nm9qPmyDXxgDF3o2z68UfeL4PbkNxUFdyk2i51W65tbwQaJakbMg3fSoGTckpxiGneyyq4ge",
  "key5": "5SZ4L1PFjkK5nGGSJGCiFh2AhhyAeajbdhAuLnSofLrGHac4HQYJ3aD4pD2iVKMduw4H71ZemqUXACj1X9btErAY",
  "key6": "2rLXe9gHUNo3VrrzBCfWaDHa8KKDcK3cjeLSe2AoLi8VXksj4QP3mnAmiRAP7sqyvu1L5XWTHbwef5s9peXccxZ9",
  "key7": "2mJZkPTDkRNfSCXvpioz5j973XsSkuVyCtTrQ1L1JbNLDSYU2qdybRGxtsPGdGANgFNChaw8frtMhAn85cdSxgA5",
  "key8": "2cWj1mfY9UKjJg5tVYjiX3LbB6XcXmu6RcJdFZ7u98g2BwgZyYJQCPSNtuYEid1YSdskzqwAmNjgzqjKWPowAiew",
  "key9": "5oYYEFVyUSZDNiwn8ztAy6vsGbbYpCmG64gSLkidEmW3dcVnEG7johin3Mg55UyENNnJHQdCW8tUc9smsMrat5dm",
  "key10": "3dt6n7LSGYzfRyyr81k56szczDeKdiaNYgxjCENnVTBiPTx4NxtLizFgKynfDirUoNS2QTQaeWsj1ug2sVDVE4U9",
  "key11": "4LbAwUKnvAtqHRX4CgkJcFtJcz4V84vEW9oX5JYRyU4ENnqkUBDnNFEPMXUxuXYr1b58mH9NhcyTvk3BHwGDFyC5",
  "key12": "5aeyLMM2CWBbEnnMejGLQCZhuu6reEGkZGTsu4tuAFcpRQN4VB1m6p5NSJZyEADXTwzfBdG6yUn3Hgi9b5G4pNxG",
  "key13": "67mVaJ2GVLuqiU65CAduSSW5JTmkphfYq6RRwyoDJEPUdo4FLTkZcgVhcLiCvBFi8QGVARWvKYLC2Q1dNZcvRCW7",
  "key14": "52eiYy49i9s9KR2GemB98rBxKrNirWNcCWAqCrG6G2Jai25ganBguYP9WVUMFDQj5aSa7AuiVkdSZqTqoT9CRSzY",
  "key15": "3eU2QgoTUM6h4QzZkXRsQMvVxZhVuNFXDBGLQxZj5AbxMpTu2WdE5w1qqGZi2Z6yK42LUdNxjgPWuXTiuEp4FeRF",
  "key16": "26XGN9sgebwxUTTMFDyMvePgGRY3c6KjkbT21w74nnf1zZekBqLGTvMYHB5B2tNkxcAaHGp4YfWVWXfS1Uv6dYxD",
  "key17": "5krrBYyFApvHB2trVwkNx7v4FUHiedfjqCGPYdzJcTASPpASiXpzNWQciwytMZU3WcSBorDk4Q95uzuXcswyE5Ur",
  "key18": "4UYzFGW1Vgc54Uu5qTMahPs3w2yRgFcxkXgYek4D1VbLKbFC5CGLD9tVf4n7XLKo4Hj28eD6uffN5viXtrXZ2Lj9",
  "key19": "zWm2GrUGm2Mp9z9kAf6jNA89WrwPppMpHVmguD1DQjpuNEMTvwXewfVhMordptMvxNDkBMJrDjhigWLKG31dGdo",
  "key20": "59x9SCtwqLyPYfGkZnuK8UZmGC3maPMgbHHebaTdcnjqZ2Bkb6NiiFJH4Nh8PkVuqfqaaTy5A6VCZSPqio3HGCEh",
  "key21": "3scWd7kXSBw6Sx5iK2tk9Jd2sTYLjqyagbrGutgJ59NBr5q8EBL99J5x6BHk9AEVdYrRxcxCNwRxT7XGq6q8BeoX",
  "key22": "43Jjf7Rjqwox9RLmyrfeiSippWUZ7CBDeWqHFBmva4GFNCFVmxYGCBMbTrH9Np74Ddku3vSHhMQcxEtnD25i3eB4",
  "key23": "5N2NWa1kwJqqeJRFxrFp7eXMSoZ13qfW1ddnMV9qBpyQ5MXuCHzBbQVJSQTRgvSkmke8SvE2QjU48eL2Qv14oGGJ",
  "key24": "3aYXgx1izhE89Qx2m9DWTQu6MZaBdtEtfxQo1iZtTQf95aTo2CYkG7QTpmkJKVmk7PWzb4oxWHDvHpjxsmPEuLR4"
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
