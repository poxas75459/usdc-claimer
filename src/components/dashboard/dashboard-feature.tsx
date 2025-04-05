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
    "3xvLZVQomC738xWaGvZBMt7davkVTnFi5N6MMYdRxRYXxyqPimBeKdvgkDRDk9pGSkSe1y71giXAWqxVvsWfrV37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xr6xz4bVUP3pC8TAjr9a9gu6qqgHWQEpdJxgtJKj58iec5PxHUWSwCyJHXa2MW4wU42KD3FyiMLcG4eATCNzKHY",
  "key1": "2eNK1TAAAmBtq9CFTCkzzPDLYZ4zprfhJiEJrbFGut1Uqb5D6n2pP9BssJNp7cDHLVZtgTKeL7tyLEipeAoXmffv",
  "key2": "3SqYZHWmparR6eNfC7VZfzRhc5w8AQ7YsKmDR2Hr53mPjKpx2oohTjLXPtbrseUaoEhVB433fPjZNdwPMEuYY1vZ",
  "key3": "5cSsKwmz6TwmRDo4j6Gm9ghCv6nyz1UuvY44u8FwCmovh7721NSaxCkMBA9sMQhYJ7YAbX6bptcWaPQ8R25VS8Vc",
  "key4": "4agbW7UF6Z2PKDjvFwcbgNFHDiPJLSsQYLkbTiWs9V2A2943tTmBziDDFd2SCxQimVZSDdPaWwbbU86kNLCK2SLz",
  "key5": "3bmKK3136UyQJ8RFT9BGkcBuhJ423ruZPiMQb9XV2dKwV1EEKkRtxmVva8zzPmYUNw3VbUxg7GJbpRPvHa9bfUU4",
  "key6": "4YrDNzPeazGYCuJzJLpD7rPUcXADPuVqb5Ya3FXsWSuEJupbgMvN3aU5UQ57heRgBegfE2BZcEMTSRJR3KyiZ1sz",
  "key7": "2WK9Bs5KBfyDsSkwJKtMbN7pj6LRE8VSBZhQJQ5zr4dUoJ3T4sZD1QLhASsNVb9Ze41C6b3GqYQjyiWpnWea7mAj",
  "key8": "3FERGGrMnvWy6uazgJp8Q4yvEVtjgVzFwrVFNCB8ACMz25bCn7Evqsy1AfX5f6iUhqKVfzemDN3LBEtQDt5eTfX9",
  "key9": "2me9EKRFPPkBvhwfcLFv8U6WBwwBPSwKkmHUn8PcDbUZCEWPsarZZrES4exxYJTkUFF7uQ614BD5EJ5tV6KF13Xc",
  "key10": "5Lb3oFXyHaBSRsTiTD3EqgF6EQQioH97fZf2y6NUhoJ13hLDTRtwr2gEPtoYLPqNxPgorygFiU7ByQ6Jxi1zU3S2",
  "key11": "4pZbWgTUVFBAMGTvGfpand3uRDQBsvZuVFecuqzCkzKUCu6xXFiNsL42wknjgtUuhbXPX32nQADXhqgxiZ1qCdzL",
  "key12": "229CDka7fKKXfBhz6VqauB7guWDsjjpvELCpJpTDLM7YLfKMhw3vgnL5S8jSpxtgVGM7envq7pEfFPqpimfKvFiE",
  "key13": "5ynspVNiSjyiaBVGpk9bgZadSMaBL5hbfX2hYXewZJUschnPgSn8nDRpBsF4eNCWrcGLSvTfCw41RmnXMEee9hch",
  "key14": "22qQkNwNGvz7wCUpwNwSi43uupfga1FbgmhpjbLunVmc4kwqp7T9U17a7njjLjjeFBNk39LwqcXG8HqACURHp1F7",
  "key15": "4KynnDhXHErjXanwa1vTqc82PkrvBY2UEpfTo7NsKoYjG2V3kchcTwEGxFKv46xx5VuvYDhc4FfRm2CkuqPbUihF",
  "key16": "3kSbEgozzum8wBEctrv5DFuEKv1JCffXeermZKEdAZgh81XD5rPUjWPHv1mp1rb7SZ76SNXc4cyCYC5BeYKDtYgU",
  "key17": "31sqyBqcBSQWRhzbr2RrZgn9E7ah7rv8yFqF8rZE2MSv571ELUs1jgXpoenpMQKCNsio3v5v7UtjhD4CjUDEXi4Q",
  "key18": "3JnmH1SMFZQFVHaehUnoewBfSfyjN7WtXooXy8BhhhCz3b8JwXVDfmFYkA9jhU6AWy7aHtN5HRYbJkTsBE5Dd7ZA",
  "key19": "5QFeZosyBDwHgSMDFdaSo6GKmivRwNj6p9m4jQxkoQKMpAAgeG3fwVZaZeHrvLgJEiNHZHB1LApW7KyaWxhnsvAv",
  "key20": "cTcBsfoNXoLmT1VNRxhBYCRjN3kUJwDKk3MrUM4JnSezgZ24sA1nYE6wJGRVUQguidb4vLCBkUSWtUehZXR3Yod",
  "key21": "VRorStyMyc9aVtTEU2XzCu1dndMmcTNeVyTQhY1mVk4DvzzmmfMouQFkCY9epTNyJDRicuYDM62zZGENAA8heqz",
  "key22": "5x2w5Pd1bB9GoE1HG9G5hrTEsQY46nMXpdVjUQjjnvupX1xrkwQqnQCph9JSjYgPYY7Eq51RJ98Q9z2mErQDUHSa",
  "key23": "2bBDQzdu12XUEssM5b1Hrmf8Gqq9CeQHcAEyZwokLv3ocY6ozzbdnv2FxENJrsLcAsAK9oSoaPx5xb5zvBdt7Ho",
  "key24": "4dWSyYT9GNHSQ937u94YMtr96MMkJereK4HJ6fnc9hKYu3C8YPPw7anxPDXyaVcA7kRhB3L4ScfLwcEDW8bHyCiy",
  "key25": "yA9BBZ14V4NbVnfGpgR6WTRP2U2kBxZ7AXntXpqQtDd2FwEkJ3BpPy2EQg16pV74XnJwM8edQZ7SDyVTKEtMv2k",
  "key26": "2wwpfmAar9iKeusGJqhoCgUa4Vazg3yVVFqfjRZtFjZvJS7QvCndQNm4kriojEfF1djsCN7K7fYGmuKd9ykzmfaW",
  "key27": "5KGuLe5bhSHuRgaMRt2ej5sJVeKkyT6R6mwa4XLjr3tkkxkDHkJssDA6UfVwU1Kbo8amvixxZiKZCcSU1g62hydw",
  "key28": "5aDm1HNHXpUqxUiHPSyJhWgSeJDWnvCGswfFiyymRBTqyxJNN28SrHSzmRxnY1mHjacnmkvXXRM3bGLbQsmSzbPD",
  "key29": "QKkCvSDViVTffMN1NhgdNzHL1s9AqyerRAiD7RHKYvHQXzhaAtXt4vF31zWu4m7jGbZ8fnbH49rb5zbgNvhZwmC",
  "key30": "bz5w52B2UVuhPbu94KFo4HAppvPFB5NFxZZ1TW1MJrVWyPx37toLTkfXwpad6odrmwVuDc7Yxh5C58bK5q6hXDb"
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
