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
    "xYm7vSBhdw33PtvDZsgRdkNYkyAHYzFuR34wV1dw7YC6PFa2r4kP3PxJ4vR8bpopUaP8edEAfVLaGEk5rNfJ3LS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mt1KD8wgAU414J5LGgoiuAqwf7QMJpPggMhSHX7Z8UeDFYNyEzjqw6N8G1N9MrCR8JUKxeaMaYHpDPHWJGYB8HY",
  "key1": "3F5nwtWewfBrFtm4iH77bCCtr1TtGc5Uj8NqKzCfHprjzz9mPRfiE7jmNDDSn9boJtsuTE8ddwzaBQv8XFRbn99G",
  "key2": "2fbPFCEXe2wwHHbz6xfLCB5rLmH6urhqeL8LHYECWkv8173mYHXh7BoNbEiKo2CSMKkE3BJfj5JFQx66vu2fiEsQ",
  "key3": "5uegyhMDnccMY95ZbNrxMwutQBvWHuyEytax1C2RJZiVSawGFJZdLCiBih3wQEt4K2jQsa4zzzfZYdPEqQ3QRh8E",
  "key4": "5ixgzyScRs4Ew3w1N8VeS8X9Nh8bSwBn43FcLpPP7y7Kmq4ugVCFWcp8HtWR2jnukbp4XPnVxrwP63PotWDAJjue",
  "key5": "4mJCQh8B1Jnw2RNpJVpT8mLdbgtDgbnUTQs4CGpt1hP7VLo5tTx1eNfczp6HTPq8rQK5GnLz2Lka2VU6rKLAW5By",
  "key6": "3wddt6aHccfym33t8DHCpbGDGnJKCjsViaYBtwhAmjunNjvvTMF1RuaymkTmSKwe4oqoDAMwEHoutCXMwL7nJT7r",
  "key7": "4svmBk9AMjeVvUV4fKTJt5vQRbqM9ay7oFtujavzQrw9GLZzxmMo3rExCRbbrvHBGECczd8c9FT3VdvQYpXNXjaQ",
  "key8": "2zVBYT7hLihSt7dSvtEzjn9GBLUnJiKoQx8qk8RdHMz9tFbxodoQmdBogGtPvo9AxajSHuD6snDEEk5KQWcDtQ97",
  "key9": "2b1bZomiHTzaareeUAgedRRNfpQZipEza4pxiT4tQFHLBW2i3JrjUrJ724qQ3oeKsNNjmD2X9DboZFW3JfWiy8Et",
  "key10": "MZrbdg6cmvGSw9tt4Jw42vfrAztdm3vTAG6PftS3Yd72kTnWzEQFZD76pBRxvZGcjozQd8RTjNZJcmR4P8xs9qb",
  "key11": "2X5eeR6w8NCptFbDw6CJZU6CZbnrMj1uETvXbUhvHTL1DY7LX82ZtgLpXQreRauiYJNQqYSKBRsUwRbRe9hqVQvA",
  "key12": "32zBm8vknghBTFXgdmjvEbQ4uBiM7o57Wc4fQdva5tHnsWipkQfCCkJv3Qv1weoMjXk3xc1kr33YxT4K7YNSyqYh",
  "key13": "2JzfSZjWdWbtkudTUyEZcCbap7vqs1GsCFN1zDEXTWPmPxJ8UANYL3AcuHFMiWQfg7KQ441RDzokzzbUEZp4RnBX",
  "key14": "5KmK2cgYBoZ7wMGhYHiQXREQ4nu5zW8NVbqtnJwJWRSbFw3AzkHZPBoWHfj18of2VLmpwCuMET4YpVPD8gfeeSD2",
  "key15": "hQ3PjZAhbsbK6mjDciw9nKfvJxuAbYEPG1XgB22qXhjYKESDogqvgm5ej2aAeBpLDgXgY3zCarZ3tAZj7VhWbNT",
  "key16": "2rCPV3vLRYcHyGHhyKujRgg2H6kXqaTMDok4sX7uRna89BYdMdc4DrVFbqQYXmhPvkM2hAgQFMB4tWPY2uzzaYiE",
  "key17": "2jwLFSRKeKYUTJ72CgSsvqSL8JrKRMJSmZYvK6ufqndANz2bipe2s2uYcUUotudgpx4d89WADSwvTJkaGKCoKfSc",
  "key18": "3L4Mu92YJutfqjNpSzBN5tEyuu1KCyJXMKwQJuW3d1LsngqPutSgwa2Ah1x8wK7V6AccRZBcRBWUy7TDiLTfejFF",
  "key19": "233Bd9ZByi4sEVa4zwyoVuAZAmw7vfo5XVcSW5fSYiwkZCj3xE4tq7NLPD26UczuY7XgWXMdT7gUxude4RTd7tix",
  "key20": "5ZE4Ceu3tHcVF834xwhk1EMaEPhLmPH6cC5TVrm8gWgfGDAcWLTVQ8gmARj2qT34DwJdvLkccNibNLi3BCc53L8E",
  "key21": "FBX6EKd7yuYVLC16cNjVecSq6uhbeDipB7t4HY4b7SLFp9r9dzKS6FzKznakC5cjXoPhquoxuYzTjmwy24bENBD",
  "key22": "5Vr32epF1CJQZAznosqZtLPgpv7xjQ4f6gR19v1JZgTqAefWpUkHG8MXLAxZfQfBsW12RsNZXUaMj5o4Q69tT38B",
  "key23": "38xfKow5RUKcY7GSgrGKpLGYnuGpUwAqK7QdqhrHDVhRqwKhwaoU1zZkzQ73XUaiRLCVymoh6PKRQKDzDSqTin4C",
  "key24": "JXTMvAnEhSuTyvTiGqCZHZYc31TLSMGpm13sX8AN88ewEAqtx6FLo6UUWXbGVine4RQKMrEPeYUjuq8akkhFZNY"
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
