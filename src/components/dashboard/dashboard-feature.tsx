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
    "kPpJ3o2Z5apHRSoZwu4ezzop13d9RajJ8ttMW4KinwogWVZUzDTFpbrK7HPwMmp3grt6oHBDSWC9iKSSTixz9X4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pquKWLDpX4YbEfwP7Zk77vDY14XfLMFAwAAcVgM7xf3RaCjp5mgWhA1QFvKuWBGdxewUsDsG3X9MFxd6XF6jX6V",
  "key1": "piFghtzoKb6uqHcezF3JNDmZjyrHBarLBzCebHeL5RRJTLCYtEsBviHjk94QRfUbewEoDQtcXoJcig7kHFT5jhW",
  "key2": "2qFYZJK3KGT8TBLsJd3UegNrdBdsZA53bmE6VvXBFXjuPdnPx7gPVJx9K72JxYRiuDyBQrjusRvBtqRVQmgafdx8",
  "key3": "57PgsVh31gKULZoM1yUSVNKuWuwjMVVLDGayBu1LwYf2QykMrXKxxwxbXKJ1N5uHiE9w4d1nVwWvQzHZsbwtF6tg",
  "key4": "3ukoNaA7DF7W7uYUDDUxUFprFwUgHm7oKmdA9v15v9x8X3uNQTNfa7H4JKcwPLwzWhMs5EAbAyujXG4g4oPQVnJM",
  "key5": "4Ymb2yviqkSFNxXbNxNkgwuZh5XkfYWNsFxsDXiVk5nV8DMb3xQpgZqgbPTiR9Zzo6sBDKt9B2yRFGpf226919ss",
  "key6": "zu93gb5M6fQi1Qya1G6VhiyM56kJFP1BvtDBCq2YPpnec3F5BLTwRaXfjnzy3ersAMn2kqvYPpQxEeQbx4b81sU",
  "key7": "5VjhycKzJmaRYGDkpSngjgC7UDVdSsB3pxhL7JVjeJverDRZ9JRsJC52hey4vnnE4iWBVw98PMKcs6krrsLvVPUY",
  "key8": "3zFhHHZBtBrEYDDA9QoP7YLHPw2mrYruTKDFJg2L4PjVMMW26BPsyvrFnYdtqbCVfV8t3i8gShoauWzcQEvviUyy",
  "key9": "4b9wPCzfBiiUoHbGd2FhxR1DbYmTBXogW5t6njDmbjmscsfSeChox47mn1HSxT6sf4Qk1naFhdpXS8BeZj6qQvHm",
  "key10": "41cV3YhHjMPE1PPeUN4WJgseLkevi3bcp15APJUNtDThbPHn21L4R9xLJrvog5HbwbfxjsXsC1M4NActYatgQ24R",
  "key11": "5rzMayJBVCKuk5M3auGEzSEvYqzD2iBPpEYo5bLPHRm3XXtRVFr8VSoj3Ch1zCWQ4RagZN3QSNdWnWQFFbgCD2Mi",
  "key12": "3Vep93LKxoZvRzAbPrzkvGLEC7FumEnkWdkvWRkMRteGGdvJg36YpZrX2NaS4FNbAMs1bJhrmuqcXTCrG9FpNFU1",
  "key13": "3QYaJxLL4AL3cFzb4f6GXuvNeypydzDNaKzHiDZmFM3pq4aheomz4TXJdXW2RSPux6QFAM5iN5G8xtbtGoKKtdxw",
  "key14": "2yfFNfsn5kEcKG7r6L2ezdHjgTjTaqY8CKQp1RFSC2LjnKjAyWx4Et3rKt1nCgodig1FnWU7Ntdsx1pnztVW5wuv",
  "key15": "1qULfLxx1jDmVcGnuRPC3GSZfUMx44XJ8o7daimEGfwMxfQw3TSvtjwHGCGd43gFwCLkw9aVWhF3v5vBqH2wEwc",
  "key16": "4dKEVAfygkgkwDKMNisJbEWurXHwAF3omcgnaGfxuVbEdYDNmjaX8pUknuVUC5mJ4XNcofPUBWCQyEKFyBnmHA36",
  "key17": "2upKNmQsRGcdBsux5ezQmywHFKH9ho6u1DLwFuWPSqUbahWtU8iW9UDA8Jb7bowKRjj64bB2AY4CbUqW4vFFVJCx",
  "key18": "2zsz42RaPikTNhP26Btq7D8gGLNKZjs2BvpAmj2bVRD3D67jHA2KMsw4r2ycB95jdqmKNkiYsyNEJ2kgJZnV2Hs2",
  "key19": "4x9CUKfLLv9txL85v7kjmYR5VXFg1NGpxAuukz7ddZeB8oDeQrsnUYbC3uaJ3L646QNiRuvwstJfHDjGSWEZFF43",
  "key20": "5oXfmCBvVibDhyFwfkGFWpxitAH9QvfBDvzyWu67yen42n5fqns8zFQfmT8ZuvSxou8JuYXsvsjsaDsKL5kiEdTn",
  "key21": "4EXq3nBn9CWzh22fiis3ekiVLLnsmN7BLjBWKxRTV4FV2veFUVuaS7YZYTje9mYoTEBCRzE9okAtKz8U7q8WmsDm",
  "key22": "GVE6wPtTM7Z5Qt4beKJPLhKYEGXzLYndrQVxBrVErqusafP7KbmkVeDJF9CqMVXEEeQLTcHSLNoNqh2UprdaCok",
  "key23": "3wn3Lm6ArDZkEkaHFh4yYTmSSeB2DfEwUzo1hLSCg5JhWsu1Jk3ennhiyWtKBsTG5JzypvXjjuaF99A3taqWgiPa",
  "key24": "4t1zMQeXFyrvnkjqEH9dkMpgJ181V3jjZdouNkQUDQF4Tojo71HaQKKMmMWJUvNEsAxZQj4BGwK1d1wpKM2YsAAo",
  "key25": "4HHtRThxfYJWDEBvsDjPdVGmjmHiYyxKX5MxnZaebpJhe5y9XU28dPKaTWgJSdNi8FPv9va6A3sAN7okBUiHuogh",
  "key26": "4imnEiUspEbZ77xWEwXcBNoEt4Kc31KHg281wA5AV1ghxhA7A5pduWtvQ2dPJAg1QNcgCkipezg2UcXCGwyrL3kS",
  "key27": "46mCmyedMVG2Ym4efUZBc6TseNGM9RxDfF9GKbiwh23wbrC96N65J9jHBiRko39HxYWkz7YSrC3PDs3HcqTd2hJS",
  "key28": "3DDEZPRMfPj9rRMRpw3DLGEsdgBHCuGFcxNgQRGZBMhoCw8Dhaynis8jVjrQDtjUA7XKdmvxnFuBBRqSXGGuN3DK",
  "key29": "4kCviERTCEZmfnsqDUw8SmJEU7KVhZGmzV96FvUD7EcPGLg7mnwH7p21rguB9nKSnPTJxq76TeBJQ8V8LRWHofLD"
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
