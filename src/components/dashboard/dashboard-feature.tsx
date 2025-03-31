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
    "4evhGMSPVWdGzf3zhyS9hg7CaT5t3MgAPnZ5YHZWt2RDxAVLyXjXPah2jKHg8UN6GgTcs6vuLiKzKtSPTPs485iD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zEwvtitxJsnqKPVB4vaduaq2AnG9K3z43rkjzy3t22r5sDasoDgiEhAy4toNEPuhnBDdDjrxgVXYZrkvqFhhCZ8",
  "key1": "468VkZFun8tZDqX47X12X6d1JbpQBjNGZYfBXhHCX7NL2cbbvWp1JppkrWFF35CULD9A1aGQXorhJjR9N6VBwCj2",
  "key2": "hdvQmj2D1H9WJRHFfc82JPCAKbmEb895dVoCSqkdm7G5oVxPqsgW8i8UKqAqaKnqRCCFHCAjCCNpyCpsCH1rJH5",
  "key3": "5ixFBFCoiMPk6SQxrMt8pGnVDcq94uJVDoZZW4Y8VSpFnNMGmr9oUWU8Qf49LM7rjyQwtK7r2qWByaRMWpieKhnT",
  "key4": "41JrKnGFtr4kxthdsTtzSY7dQrNTmAV6Ei1NS3LyWTBLHgUSG3cEis546sQCm6yr7tsmcTuwUPoQDvRKhTugAWrG",
  "key5": "4owJt7TTK4c29USbkwZuUSMQKRtSZiVSmgAX8Y3t1QRcGQFMbSFyvispQ69JiPh6ZdQurxD6UefJqd6hyrrKKGZV",
  "key6": "67kt3fChnpJwLoUZeP76SiDSZxUxuGAG9hL42ihabBzhit8hnUrqPBfBHUpZzrgnEd4woyBYfkT6Puz7sqKJCMaS",
  "key7": "37JvQKRmAtLCu2f8FJfDUYWE7Qak6XGkxGHSnB5mDfK1fWiw24BkGCeZv6Q8aiS95FHeTSJvFM2GkFKZ1CSLgLYS",
  "key8": "2LzEchDw2tfX5t9KdiJRbcxfENi3PYC4GAWWvBpV7J6ut5SEwyUeLVZ1jcWu5vHNcWj2EmKaPhWcXNk1PmjQtvSZ",
  "key9": "36Mp5M3wZwMN2zrUAYxSfbHV2AKuV5UYgRFWYN7yNhmBpTP2EbyZ73YLdCHz9JbtKAtb3naWAdKjknFmpw7gjNaQ",
  "key10": "48ogRQk1aFgg3daL4Yrrrr15oEfK9NefrG7ZrPmNyxF4wWSZ8KEEWD6hD3sVjsSUSZhZgAK9QR5ZNhRVgjihmUku",
  "key11": "2JS8LcDCkUBUXgAzfinUFNStQpmEUkZZZ1EiqFEqrTZtKvrEUzoHveviLumVhz3U2ExrTgBVzTnDGZPQbYzkxGY7",
  "key12": "2SVqbjjzsuyFQZiXE1bicoxEqVTLTWg5D5ydk5QZG67rHQsV4n7KjrK3WYw4fNbUJ3fZN9ea9GfQinQwMCtS2KAM",
  "key13": "2QoLgh8QL2fqC453VHnE4bQVSJPaQdBWzrFxu6P7NUC9w2t2BfLL3hx5FfuzNoArJRymub5jXv1kWAYEe5cko2DZ",
  "key14": "4KaU62g3AEmMFzWGSX8X1QQKWQJu1szFSGjgkkYSDz6rtr1byCzcVKV8hJmsc6SHjXGnesexF79gdpQSPSjqJdNu",
  "key15": "Yrwo4miMbvCpDtUJUxPXJFQwTfCHj9FpCbYkFcvVkwvyhmXWk6dKdApXZXQUNbd9b1yf6qvNC3kCHc1th1n1dUE",
  "key16": "3N5Z8mSBeej8YSja4Z686ufgFi5nT8RHYeGumNmvsUqHJqTahkwUXX8Aro3WBGn9ktr6gacMhnst9WhMcmWtRaGw",
  "key17": "iaEbysiAo89AAkDBEYfT8LzRae11guPAiip6Q5ohT8UJ3v2Qk3EPSReeaV4rqSaCdeukNP9vfwLPbNeNhCXLWdZ",
  "key18": "3keH7QjQ452t7AFbN6i8tjRyq5d669aFjMHRgEqZNsVKcMtrxeHo9JvuaW1Aj3Db148LjaSymiwLHeJvfpesh4Ux",
  "key19": "mfCeqxmG8jM4Za6pQ8EMo4ky9EFXRSnwcDkfTrDgs43MBVoqLUhkZVGFSHPzGWN6YH8r9hFGmhqw67ZCWoEwpnT",
  "key20": "46MU5xDCkWTV6VVrWczCKcQCtmLVfMwrw8YUZpkGsK1gdMLK3xJ9ggyLVSGDBj36yLj57XqLMLZTYr7c2RxBACnb",
  "key21": "3ru31B1UemcSLXuYi4SVi5a2iwfnTyE7ygGJbRHNnUwrpYm2CJa1biiyj5rynh67sG9jsEivDuiTgAVpBU58Jdp9",
  "key22": "23LcRZPSSa2JUeBKgg2dDFRGGpU1yvJswHg8jx4bn72sYzCGErZYnSPbTUoEQDC2Y5NVwBczfL41RypkAxsi5tXz",
  "key23": "5Aa298dFgevEpyhhtuqDEhzbYjJvFJ3pjM7n5UCFa9mrPwr5cSDPxqrUG3hL3mnwg7L9S2DxUsUAeZ6LVfAM4EBo",
  "key24": "3svKWMKoqTziz2GiDvmMPStxTNhQ63jknJ78yQqo3MkZEjjNhEaPDfHCMfa5NDMAZJBvFb64R6TYSpp5MR4Daxi1",
  "key25": "37zNgLGhXxS4ZZeoNy9o8TzzQvZ5CNVsXtE3NLVaiLqHZszLQ2gtUJTKEsdEvhXvjAonxtnEcfwNr7doxcV3h9mC",
  "key26": "2jKy1Y95CcMPowRMhDTFURVbi4te9RHyaR5MXzBznf9Jjm99ng8gxmdawf19whimLwLKSeXWYMiHHDWakJGSs1GE",
  "key27": "N2ECTfSbf7nSLB3izeJSgo3x8UqYfqbmNXse8zq6ZKvV9ToXzotvAQ312K2xrG7WW4yTA6XME2mSaQLdGEsADAo",
  "key28": "4QNoE4v5KzAM9ayKC8y8c18vDmi3Mk4yJdESFRnsecK7KfNmJ3gV6BXmBor51e3zN6scgDDcw4BDezXn6rt7Qgmm",
  "key29": "5kTWtnvDhtXphuWEaJ5AQ9wiFeWUs4jocB9qUMw88rZNe6Jj4RTWAKsWoFmQCt48x1gCRWQgQjjk2TxH7PV1LPdy",
  "key30": "2WKoNiF8HrG7jaMENKUYkiqQB4PN3DEPJNtvqDF5buZyTEXiSAThW7o1g5cWNvy4rVa9KnZiq3deYeyVPEHC4AU9",
  "key31": "eZLN5Spb5oEJ92pWmaArtJjkM7SzSFTf2yd3BF6m2qBybvTbXhghkksjqcGewkiGLSRr7vYNitDAkoNNLxiTaMd",
  "key32": "64oZDCArVz1uWCwPqkYYRrJ1ZGwikQq4sgxciY2MJcUXmf7L8y8cMoiJqB6TGshuPxLpWm1iFgULy4EFpwBzXaiY",
  "key33": "39ZQXag1fDS3kotoRvnsnnAhJvWgDWyLwTsmdCzdHZzYST4SegT5VJASAHwfPGFejAmSRTWA5J9KicxKZCRvDnB4",
  "key34": "2AQpoUboJHjAUZzwU613AUgyQdbtssdVBKnCvvNxnvhvVUbZmZjb6TX1mvFEsUm93yrabhrxS4UjF1Xu5fSyfLmu"
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
