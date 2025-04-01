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
    "3qqgJX5vvLAtEw7rGRNKmjWkBS7JGMSv5tu6KMNjM4pzRmHUaexc8xa9LPWPeUoaqiULzdcTbSiJhwcyXiZxcCCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fx8AFZheAeSXiJzuxvCRZdEwmHRJ7ojhWN9qUNZnbdkM5dwxBDzUyYeW7Pt7qYwSPn6ppc1ZdMdgVwMjKkpsUwY",
  "key1": "4x8N53GWf8LY3eKmo8VZ48o4SeMwMewVkP57tziFjdB2MKZTHmuuZkAHiXdC99CSniUFPJAfK5uDeyQwpxucake3",
  "key2": "4Wmb25faGYCeFbxJz59pJRutfukeLfbPxBZb9CFmQzavkxXAgygBGXm9W9ctyYLyX5i785mmWFhafoX8jJLcuEWL",
  "key3": "4qCY5xavjA7vEDuxj1t2ZXVt55hEj98Wv4uuYLesXxCXet3JpGuBoqGNBywHiHDsgAByUvQwrdgL9poBeWpBebrd",
  "key4": "5aikEP3o3y2eXpVTJnCM5ysCqgKGesFt2MhTS61vPS39pnaK8oHYy5xyn7YPgjNSVmAcdfy2uTreKDrR82MriCYZ",
  "key5": "3nt8zYEiJc7ZWEqmxyVDUUj8rdB9HyP4tSS2hkdFGK6TJUoWvbUnWpRfby51T4ErUg8SkruSjVP5HGE2M7JtAWbf",
  "key6": "2xkutRLDL8pR1hkBtJTRPoSB9REuvdrDa4CQNG3sG6D1kadJKcP1gfRfRWySzgZ4WPDtZ2cpH9hwVuCYiWaT8XB8",
  "key7": "4VE2wwBmFH8agJGZ3ibQdVwMV2dN8noY2eGy3Hh4GdnPNMxseFYPqnU1Ef4ePFqKK8J9h1Z4dgGpbYzXeNhTFwvm",
  "key8": "KkrqPMMTPAjjgKtaKzn14DcgsMtBbnQFsvw5eDYoAaoxP2i8a3ByzENPGjZreWeFvV29gmsPShzdu3Dbi1sTaAr",
  "key9": "47s4jw5VZYzq58edVJdRBC5wckxWNM2pbdUvkMNSmwMQtWwziAiwmHfMJHCuQHJKJNKvNXauoqXfzE4j9vW7kZPV",
  "key10": "2HhC1yfi5NdnJnQyg5fpDieDKSJbQmscCVdvKBWRqtdodUFjaMKFrMzhuMPALnBPVi4APrTpDUNV5vokcuBN7Men",
  "key11": "4eRJsbKEsRpBgL4gMQkSMEgXieA8QkugpQ7NtUVM1LNDH6mxiSANzfnsP1EmVGG3RmLzZiR3hrgaxvJSPzPvPsng",
  "key12": "4KvRZgwwvxyUXdghJGgM4HhjPrkzDd88kEERkUGd4A1jq5kFzBPHKC87V5m31Q3Eagpkbg94SQZcmFcaLVak2SJF",
  "key13": "4jT1Twte5LAK7stnoACfhAFs8XbSqGWvK4Pq8iWYGu8YgxTncRoixRc1geAgqSqGM7nvEovfBaLS552xY6vFsnUS",
  "key14": "3wGg6WF1BKX8gciuruN6zDXS1nj6id84vBD7EtMKzcV74f4SG1yCnSJDNH81HSFVjammpKtauDNQTsCX9VmTewma",
  "key15": "4e9zTSqLaZeRQj2F7VCfPKAaPrQ242Y9dvWKRN6AwdoaDj2a6gpsZa4kD2ynUr7LdAfBxVn45MwvQY6B36hjZ11K",
  "key16": "2MB8Dys4cqJ3xTtfEkncf2YjTYRyu9M7gXuYpEchPyW34vtgeW43QLp8FrJS8hTpEJ1u9gCZrx8jg8rbGXhj5L7t",
  "key17": "3HWe74Ndc6TCwnyMFzThNUyDzFgopw8UAJvvFUV6iXFwiyo7JmJGcHD5jUtsZvsTArAX1MByw3oFFzgZT4WR4Gft",
  "key18": "32JgjjvHpvWcHobHjWjeGEeRgi5rCFv8KRxgkGox1UYmZL4mpxZx6PBx5pkd7v4x63PkSXVLRq4Pxi9Yo65G3Jwo",
  "key19": "5m8SHSr4kTyEcrd19nx2PHgxeUu4ceCipnHifvTQsiXsUjyXSnebR1p6LS7SqXRRt8WBVqSPhwgwykGbCnu8dAYu",
  "key20": "3NgQTbJo9R1TWxm9gq1cS8SkYqLfQZS4tBQDBE5AdwdG6hBB6MA8qRRMRNC2o44kjxH227Bn93FMUCFPoCE988o1",
  "key21": "4dkPcjSWJffPK8SnbDcA4dEw9kLbyTCrx2rQojLwbrG8qVLmumHvzNKBtVzdhjqM8kC9o9tz3V1dPxwGFZcRnrtA",
  "key22": "sRifXepmWK62PgAexjckyHojFNHz7HVojhUupapmAi7d2pJm5pXiG7pqjgX1DVHtxDAmGTJXrLgWq2vtXejYmsT",
  "key23": "4UcPHpGoxLMmys2kDDWYQwTRJvufRa88KFmKTGP2Dz2Wpop5Q5QXSZvZJXZULf4iuVDgXyPnKNLVKeDJRtgkwx5a",
  "key24": "3mByf1rVPPJhA7qGgvgRXbfYxcsR6xbz7eJQ1h1db3c6bcTkS2q59vW1zeTSxBeGMncpZX4Ea4G1Zk2VhitFNVFF"
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
