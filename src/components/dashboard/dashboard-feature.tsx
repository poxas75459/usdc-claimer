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
    "5i5agRB3AibZXdpGN9QyiuEAmvGCpbLkF1TbLufkXuXnpHYaBsmCAinNxgh1i4xbHKXGwFgDAAfPVWSrPVWsZqdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z8va7fNmNCUs58C5vG5AJBbAjzWS4tWozhwtdR74SG7qUdyziaGU1eGQasdKQotWT3cu7kuUi1KUKtkSTU69sMk",
  "key1": "4cvgmkUdrihYsfGBdjJB1HPfnjYmpusVRMBSWo1DkvGRfdwBxikASmrngg4RA3WzWApu4sQLB4MaqVDeCUcAPtgP",
  "key2": "5S6WzwNEpao2cuTGPSq5jXoX9PRwarVbedVw7eBbHqHLhRuR4N5keyTnr8DRTGwhEnajcE3m2MwgRaCCuen6M69n",
  "key3": "39y7sNuLupsNA92KnoVMNumtYwDCHFELPpo3nz6uq5JUYLfQfC64aWwe1MKvyPK7V4BvLd1Gn19GpQVC6nB2bNen",
  "key4": "54JU5izFSSiQrTMFib32JrEYQgNCPbkKBf6TrdFAzvpwyLHqKuaUoz1pMYEn7npkHSE1eCRf9QieriVndfCBqf5z",
  "key5": "4JN8hJGZUsy4hMNTosf7w8onGX4u292ChnwbVS83qWbVHi1MrTfobKsrAxGBJtQQie7fELUZv2WMPEJfzeKZHR8n",
  "key6": "357cSHzVqW9Hec9iRC5CGisEPRTfZZtj7PrqTYjS4pNHynLeFvwBW6ncu26bh1Z1BCAtiBUQzTWQsPuhKEtLyqR",
  "key7": "655F5F4TZDSFq9YSpJwZXfH4bRJtk9q1ioHnPauyNAmrgmVRtfGy9YAAzJbVwoqfcucV7MMJVkRck6JYT9cEbaJL",
  "key8": "5qLshyjazECdV3brF7RtZsbE4Vi3sjyBwceJp9vZA6UZmkRHJZ1UGPNpkiw5xSPDzVQi2GsyvyoHgGvBWgXAUBUh",
  "key9": "5ZYa1jK5awzfxtijCWwLa9678Ms2FsqqnBqGA5WPZYWDLtFnA4wGtuU3fYZ9XMJXu7SqHDLeUDyiG4Fk8mQpUXPE",
  "key10": "3qK3soU1J3uPaKnFsdoSRPK6WTqHNXFjq9T3toKvgRREeiFrsf15ArQbtUHZ3VHsfTwpPxWDyTyYaeaLhrgqA2P4",
  "key11": "3ECEMt4vuqTLM2xrQz5gKVhQxfdPgqhkzYEFdVQmsHvnr296MoXLENXzKHy9qMvz9AdjDkE1iZ17RyoKC4Nd9wKh",
  "key12": "3ri2bXYXdk4jSZZw94aQuqYVCq7JiBjaQjQGGaLToc7UdLdsSKCefdcCF6C7aPgYMoZVb4P8VsCHWTq6Q5gHdpVi",
  "key13": "QP4Z5hTHQWtKSAfa8Zen58F4LjRr9a31xJpwaJk6NKbX1Nbeo5nJQx1K652nRdY48E9aahUbQSwtynxJcrzfuwS",
  "key14": "3bxMmJPRmURmdeao8dkPd3a3wahhzYoYFTcFFfbiF66LQUYkBsGzm6dmPKiGrbW2mn9fia5ir5Ti63yi5nmCa5UF",
  "key15": "HjbEEbSZAYScBQ2A8AfEKTm79apTqttJBiZ6XVoEk2ozhMCHucgn6Yh5s6g93f6cun3o6vUzRMKU9VZWCwygAbJ",
  "key16": "3eHt68NXQLEk7oaWdbmyL9NQAXRfEfFhLq7B1RPWPmorxM8cHA8DBACGDNcBnsyCPcjwoj6jM6E1Gy788cX496NL",
  "key17": "5FeRNznRLaVJcfYJgyVsa8mjLCyzkXUooWnMb4jt9xaXH2Vqp42AJZQLFoHDRwYdr1J455zk9Prmt8a4S9HtuqQg",
  "key18": "26Pcd9MBUrttuh8Ppgd4hKuDx9KLCeyQ3rxqDph5FYMTBfMWFSnZQpeGqDPtBw2w1hxTFkxYvtm141AZs6T9WWLL",
  "key19": "5zcRXNRZzTFT2tmkVN64vyw3nuRpLo8JvzyQ15r3dpCqWQwhSbtvV8JSKgT9wvPdjnpaPdxzyBCkVhK351zWhvXR",
  "key20": "66Vnr7Wo4JdKAViSzSSML4NaR9YRyZ3zCJ5KgEpvzURbwaw11k8Vvj2WWkx3SHz9GR4foHvDqVtQML8hjGtUoLDC",
  "key21": "M6EaNPj6cL2JjNK5vnTPQZVPLWSN96iRtxiRsxvRxmRUcqYRvUW4a1muvjCTK6AyzZxrCQmJzUoq3cG3K4z2NdN",
  "key22": "52LT8XA5uuMmDpmP4ARhwNSo5idrUQHM3irxyUqKjHTuapkwmC4RvJ8Suxs5PGHgCfivV4NBy7mqBXNFW5z7spkY",
  "key23": "2VrGgZ3aVZJ7GMcwBa18kJWCyAMoCuCLqPEGqvU6b3FqvREWr4SbMBkmedNW8mFGhBbyUrUYit27Qo7DvY6RSHPi",
  "key24": "CqVzptGQQVJH8QmKvs3wcGNdrNGyJiTXoFyR97m6aZvQgWCx7kdHTFZx17mQcVXGfYNNt5nVT1nLEMMfjZTi3ao",
  "key25": "372HcwkdZVNXijnMeJnvsmShstSv95xG7rtSh7Mn8ucHLgJyNkZw5wXvsxizLTXJAPJSYmhSGSpi2jfuNfcvS7y5",
  "key26": "DWMFbcxroFNCc4sQgVaDvR8m7qyuJck3F9trfyC2zEXnPzRiN9zieJnh5zCxmw6VsWPbgEuLBXVQsHME1W2hJnJ",
  "key27": "484TbJccD6Ss2wPXdy8QWv9p2ipTY8Ep96RsQZfaHsJ55iMszb29H3qvhBX4eLJHsFCLC9Ub3ink25WhTB9GTJgP",
  "key28": "2brKWrVw3G5JzcyJbkQfsVYrLL3ZexT1NUYuFL4gvQE2bzchbugK691xpUNVgzhNosehnF6d9vkg3qiv7LLo5y9S",
  "key29": "2prxmRW9Vw8XFbqtR1PmE5PtPNtWySbhNJrqFjQmHuczuwQyjNetekDy5CkLH89BVGsz2bJMXoi7jdeCcgXFBspH",
  "key30": "2NSnvJNmZKzvLCgT7AeZewi5UTCqvZgtCjAJCaiivbZdnGQR6tdpn6SuU2neQphBNQZYJx4ostRtRfPUtwVAghXX",
  "key31": "3CQB2tuQSfPA3ATLtJBTxp8ZG2SHz9f3NFZEQLG2gVhx1oVz3RbawmjLPxe6zKxfR7FihCsVxC5E1tWDoYHaXnAs",
  "key32": "2Heb2Ak8PwUsWJdVJGsuVFTgJ2MegVu6GjqswRLg3jT1PN2PgvDsvc645uwDFu413RtdWvUbwQ9Hv1SpMPLBbhyd",
  "key33": "2tWqHWddVJySRccay7M3GawtJSeQYNMxFinCEebpaGfdBTCeZiNQmo6MBFQg3188cp397UjZ3vGR5oBLqCYAiwUY"
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
