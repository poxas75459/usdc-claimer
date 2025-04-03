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
    "1takgSEBCR1TttL2SgzEYGiDaMceNoJMECgg5UubNwALJuhxU6WJGkPXzqv2wNFZyAVCZChmcMcAncP72WnKmyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "541afesF9GWas4DfnWE5UKxaAkY4veU1kVVrwhVy58uVs3spf8EQ7JzN4zJNAcCKaykusN8MRQFryhymvym32jch",
  "key1": "4KhL1pyw8vQXzSu8eaY4f3iAMoXrX9Px9GHLfYjGzFcvxpMoEk2CeaYAMH3yKqoXtM2yv7yQVVPoF6uYN2LKo47Z",
  "key2": "5kz7thK5n5qm6oqFEm8oxLDQ7jG2x356MU6N9FzGGUBqViwtivnp6N65y81Mb3Ep6XuvtusEnRgXsWVpfJnCsAQB",
  "key3": "3xgW6vdRbt4fGiuCzZHxUvhUGZRTfvZQw2JhYUdu2uUtP5wz5REn4zg7xhoDhBp5zBqkPQcYsYQsV4vCd9p2BX9K",
  "key4": "5btFG4u9yS9JC38zR34teTwd6g2KW2PdmnYJ1QJ4BEYiArXnNLvu67yP9pH6jt5shcPmTFkTHN9N1GCexF7Mfjwp",
  "key5": "343hJhPcwTNVR5Zws8Dbnegq8FoWGc6UUGNuVsyBazQbe1jNovcGZcWjstSkxG6g1uQEoS6HRuqDftemSsg7pEKm",
  "key6": "2JmTmdUcm8XibcUT8HiR3zTSyo2RX7J9jAANYsTNhNacQDb8tc3BJbjfPeZadhyjbipebRKmgW3eyiwVHygsbZHR",
  "key7": "4rYQKfWMhqjcNGHzifptScPGvx3BW5f42wGnu2fXwLWmYTnNyzFoFXhHjF8psDjwpUTd4gRK11AXzEJry4MMq4jw",
  "key8": "5o1KVnrZdktRUo8oMdFMYAXyoQsUJB2kRT29XqHG6worZ9rZYW6VHDzFNFxdpdG5rjNxyKj41UDJaKS5svPYoveB",
  "key9": "SeTJ59kXF4WfrDg7ujfotmEskSPeJRDq5gAmCaHHhgFSjaSY7dp3EtswC7fUFp6WGTydXyHR6qmPYmidvVoxUHJ",
  "key10": "3TKCWRZ9hBfDXYLwXECPRkngLJjPCvmdefMSxwcE76ug49BkBUGD7LmYwajqw2wQpfdVotKSQRDoTA2Fo46FhSwr",
  "key11": "5jUxiEmzHej9jduvpLrdS6s58oo8jaSvbTXwtEwtd5Hg1Qj9YQCz3AVa9g2uret42DYwxRTixa9axfwxR8N1tP4f",
  "key12": "4ZBwaMyabwdZDz1KBuVBRgmyHdjRntKHqxPbGTjaUaveP7wM2xQ7UHQgFhMi77aNVcgy8eozbpkh88qK5brmUPoc",
  "key13": "4AjSToH1E9X6WZsvvkA13XXjqR1TVknxtuUSsf6CRNXdyEZTzKkKi2nRdCauiLPkpjyeCYbo4MePEQiGRXhRmhDE",
  "key14": "SBV6W88dGDvhiAuwkGoPfQtCY7hecQ8kBdno1KE5e3CHWiJZrgsMrPZU1vRKVN5Xegkckkr7v51RLqKMsSWnS6e",
  "key15": "3CQiHi89UvqVykYLHbRoLgLhi9f6YNc2yyFgYmDRQWL4fDYZ66DHPmjLyNAyLfcVn7HtsWiZYNMzoN8ZnDtUMKH7",
  "key16": "BwvvejyB6EJCUagc4hT9aCe4TKN54zyFysLuET7t5Jb4cjrjWtNe4nW6otqi9PYEryH5PBqP8sCPyQ3pDaM5jVs",
  "key17": "SStVhAgo9rjAB3FsPzGiPjTKddvLjPxoxVDUqG9NZWmC5cTxfTkcuHDiNw9kz1eTd33pgmgBux2iNVgLV35PLKq",
  "key18": "4TtroEJocXRtBEpc4TtuWa6AE66LUYLpNerQh72MhqkTnbCSwhW4y6BCKyoBEXQDFW1fxHhKDwqKana4yQeczjff",
  "key19": "3E7NYSN763HJZGuv6jdqHBjEzPWa9cSk4bmZ8quZieE5UiBjQ5aHMQTZ247FVE5bc3Q3M9YdLHSqWiahUukgJcXX",
  "key20": "5ZdKzLFCNGrZBnt9j8BrhKuA3wZNHfWRVymyMTXWvWQNfvV8jPbstPV9p4YTHdXueoi2iDGSo2nbBA2925Hsw6cx",
  "key21": "ayND85LByX9kb8GsQTjAoFRjHfYtwsipmnCy1xEU1gEtHmExbA198eSWJf6GwsdcpYzPtV9os5E7RghEn37qr7E",
  "key22": "NSQ27mufV6HWaxn3Rxid9q5KYBzEZUAbN2ZgnthsqpprSu4AZRwX79UeZZkWU233pVV3WiCHHYhZecfW9PupW46",
  "key23": "CWDH7M66mpRUaA6eEbJD1u5NMgdsKh3nWgjqNPYLbEDECmxcii115Ax3koAGxZvPbvkhydW1h11qsZ1Ps29jeNB",
  "key24": "5PMokzVFsEU7gWPPrSw6Kf5XNu5bTAgrbg5DBcj95rmoGBFpJp87B382TLu9a3HBSXCXCUaqY6poi9TXLZwAoxBW",
  "key25": "5RoMLtbtCexwi7ut8ysiMSy3r2z44BiEGVKsEPnWgBGU4aFraoVntcici2262QCUpqvruRazqjuW6NKS1jP824o6",
  "key26": "2Hyyfg8iyHFjAbA4VCfEZHZ6KX3dCHs27WtEFSVfdXxHiVsfXEduvidvyKFMHbMyPKmvyZSrhBQmnxi3i4FY1jsR"
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
