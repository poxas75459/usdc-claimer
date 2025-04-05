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
    "3Go2CRL6WovZV8DNV2kSDJtKspo3KmVDqLtb2bBdAoPjrJ8acCwkhueg6fYfWwC4trBcJb7fxPgjKuSDtuq7cVBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JFopPJZnJDR9wH4Z2hkFbp4S7KDUuiJTy1BDotTRcMhQZRhLwYJgvxQCwWyySsDogxnVcujkphUCY81REMsq87Z",
  "key1": "uWd8sqPsFdLWUe1LFuG3CY1aC8eA69Eq88TmpkmrFmYbApyCCoJfScKm2KuwWD3rUmnu8hgEngVDJiBDyQiTEBF",
  "key2": "3Z5FL7hDtHJ4bavQ6Pnj9rjEJR5HmpzkEUBLxt2oziTpkbkxhQ23CQkvH4X6ab2SQNbiQ7ma5n39To74b1dF2faX",
  "key3": "2GrV3TN4Ee7hvGfz4i6QKTWyCWwFH4to65k2LVLHGtMRLEibdjPW3vaiGawRGJXyTrvdtsy9omoycwbsy9Q61Str",
  "key4": "3rnN7xAvmDqCwC5n3C6LJsngamVZLwqqqh1ssGHtimHy5LruLNnaS3F9kpzoMwJahDnw9z8YEUBtR6mTjq27Yp4v",
  "key5": "327tT1qyu5zEfPEAQDz6sgciLvjQz7KgvYrTsSuBjhCg9rR5QJAy8eW3S6b4bo83nr2qTwx7DrW2Pjyh558Qa2N5",
  "key6": "5NbvMWgeRUbnhQiTnr8ncjSrREsnZwN9zQU8N4rMrrNXLQJ8Sgc4fo6tWeLtSW6yHag3KELXyMcE3SsZFVWmCFcD",
  "key7": "5vZFoaG363fcZUxDSPQMRHVZqHfGBDJKJR2XMM8B9r3zYXGDrs6ePTTfSyL9o6EFDHFv6kxnQqd4Bcp8KmF3uWCp",
  "key8": "4KAA1u9eMnoHThR8NJh7Nsz3QsFFvJKeM2wGX9YxyQv7i7uhnhkwqKcNNbcZVeV59NGBWTwsZyBUWbgBsEP5TE6M",
  "key9": "4yeiTEkLDYheWBQNWW8fksJK1q41SdkKQhQkjV4qQA5B4p5YY3DvDQ3dJLanZT4QErWyZYRpbS898MeN5MQeasda",
  "key10": "37JfQ1Fp4bi4QGYqhdD15R2mwptzeCdULA9ZoyCthYmBV4FYntRLUCrADqQ5sghdp2QewEGYfCVsBCC4QAG6sDqf",
  "key11": "5sAAByYAvN4xhB79B6EPuBhFYfE9CXSDZC8rvWDSNLSFiQCo9xBDWkdEXtBEwpinSmHTd1dcDH1mUf6NNTPWSbE8",
  "key12": "5EWs1Nrg429VxazLzrtmfQogdZoaJkm7gZzuZcHcUzGHWbxfjZB93rn6k2cuogDbvJtpjoj5L8LKnFYQJsp8SqP6",
  "key13": "4M45eYUT87HqzAcSW96i4KcQsziYqcq4a3owz4h9EvM4oNXekxLud1fCYQfqkq1whGuPm2qJfyz998VXwjkLwM12",
  "key14": "2nCr8U6e5CCwKoNNiCnDt3jnwjfFC2Nw5JBNW4oVVoSPXJHKwLwMoXEryk2B42MKknYdBJ2Q8AmQhgzKXaGYzTTJ",
  "key15": "2F4xLffqr8hkgog7MwZJWqyotyWQ3Ca7MACT6rGj4SQz7q5rm4TQwtvzytAN7raqseaXcGeBuwiLvJdtG1vjfG71",
  "key16": "3JDGizgbPegiKcFbh7tn29WhJDseW3PohLEeKdKthqeCRot3Tjo5qY6YijW8aerwrsE4sxo5q8gy8cTNc6tCdX67",
  "key17": "4299hahBDdTPoFg1MGbnYo1EeDEAW8wohtUpzhEujXmPbVyBLomMmKbfuMmAxuBFTCxtCqXx72csDTvhvhSE716T",
  "key18": "3BhauG2GrK6iNv6HBkeHzsitx4UHYCMnZnrWCVKVpnfVVbUxG3jD1imxxrMAwpmWtXgC1z2qWFNphczSfpV3ArDt",
  "key19": "4j8zDEyXg6eAxwmYSfaYow2AWryoAwCiaodtgpS94zrqoHe8jU3miA75qQa62LwXPWyAgaVKowKD63vkhaeW5Bk4",
  "key20": "3vjkBwSDbz4LnGWo9zpKDGLK6hvkYatYuH5UB6UZzcZ7FVPAevLXavo7sAZ1K57V6zN5PYwC8LCjFCPrvwu9ZXAr",
  "key21": "3RDBgwjGsRUki6ZbbnS6HVKdJTyadNizwb1t4Gj9msAW4e3rgyyuYxHZ6EythjvfpcZHhfLffuYstfpgty6G5eYT",
  "key22": "529Nw26NwAFkQ7bQJ6JaBtYCot52YqnS3gqKfMdXkHCwC5WoH8RUuWXRPmJ9gp3ZsMfrbkFpBtaR1mNYBmHx8zEd",
  "key23": "3EDrT5Trb9kQZMjYr9K2RAbkANPpQLLHBMzdCwMZ4L7MpDzULaLE9xzhdHbZ8RtJTW5EUZ5s1hsMn36VBPf3s24R",
  "key24": "4JQPNY5pXq78aBYa6yyMfhPrHAoGQxAfNY6oCK2VKE7PWCV4acG1WVNcYURMy8w7YM3poPVxDau5vmS7YTfVxL9M"
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
