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
    "2BnY1NH1V17tFqgrJGtDTQLvwqitbceptsoRhBvvUhqge3i2Cvtbfz7dTYRkWyFkcJPTvDn1f9ELkFhofnqzAmba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KDd72fYDFFTxhz9PVmgBx2d1YpBJi2kneRjhmbVmfNbPV8qa8e2LvRzCVEw1CXgzxVgbqK3H5W8qBLS49aBWZ16",
  "key1": "aauWTHbREuJLo5fT5QiYevXBHVUjirQKNvxdjVxxGvouo9cmVB1f7WM26YEdqq8nEfktiSSMZ12yufbXEKXLAuV",
  "key2": "51QUjZGx8acPWixMRX6fpcSsRRZBsismPDiJgbML7C9GVKmss8ymkZmofuSYdzckhiCSq6ZxGpwHLE6VXNxA4oT",
  "key3": "5oLE3Vqg8FNrnDDWByfkVhJjzEybt8jGHYdSbp8gtmhY1HDyBd9bPm7ePBTtBU87G1A5mCYm5yzQrezkhJLSVYxf",
  "key4": "3RLzDjRrHxQoz8NR1RBtixkm3T2fFqvRhdyZbyEMZnpLGeLyjodVqeYgeyucfDFcjhF3ZRdL3vgE1BecNJhft9Ze",
  "key5": "2AQv5UGgmigKGzS8KiL7tqnWRvJgaaBfnKS3vojzR3hg9aC633PQgqN1EQSeyLj9UhmPD9nt9YamRUtQpysGnbR2",
  "key6": "5skWUff8E2xRA4AMpZxAYSBf92kyHQGthnx3ACRN6ESbgAcdDLZoyBqQ5UsBxpfjzFsVBXz246WSja63dEQ76jBG",
  "key7": "5P4Ca4yFTHScYYYhZJzcb31PYfjLcj7yQaHCXMcqKdKuN4MF7gyVtEyz28yjuL4pawNmLkVmK852DoacRVAzV84H",
  "key8": "MepdNYYziCXfGMVT3xzmZhvZw9moAfBMX3qu7oLFvi5rqxfdrs6PhthyX7fqeveFVXyfA49WgTbCkbSEz3mjzvo",
  "key9": "382ZVSbfdGKLNeounyLgKULNuBoHwc5yxndLz2DnMZ2WRPqdAEqF4cdSfpg1etSQMTLsbJBuRGzcWiQt3j65EvUX",
  "key10": "5jtstsjURoAZdark74uHAPTU6Bdhnf7B6XcVphn5kWsMQd5q31fLe9Pk16ReyJAZ9JJnxQbbs4cAN1LPvR2c2hwq",
  "key11": "5NQRPUPX2CNk778UwbvSn9rBDfmXkk5HZswUQbJqHgvv3MhVnBCBhCdYrDJDrBPL743ytCKenmNhPE2tY5z6HJaK",
  "key12": "3Wqoe65UFVzzg5BUQrHUUF3AFQqA5rN13gzCkgZ8ey8dCb849vNf7gYE1XR6kUaFJKGBivxBnpZBQCXugZWjrevU",
  "key13": "42pLyCefgbE2XeHyqPANgX1R9kEV5HDbG7C47XSLE8spFvpgVscqJ66QohytqJ6BcYPaKXtvXsozRsoJKeheStLd",
  "key14": "P7o8wBrDtCsp19y5CgCEJkmvEXneoQAYAjfAH2adS1gBu7zUXCjFcNgy4RWHBueCerHGzAcWXA82CGXznQM26AW",
  "key15": "yURLLBtWbpuPJmYMiQcUTrFx3fnqPA9RtDX77xE59ovESD7ux15ySP6D7ydM6SzHPWCq9SHs8AUBwKNLPPF1BZd",
  "key16": "fGNATcsxF3UHPf5LGsDenrPzTj4B45DitNSDTNYqEvD66RPjSMjgZ13SHFCgLgyZ5A38yRnK95HHUeBnX6RWpKe",
  "key17": "5edRsx3THd5iwBhzVUGKXgVRHERVpcLd2cKwurheoKNYbcRAcmUwvzAmptrfvfVzda7eNquqcz3UfFgur3UZUnmZ",
  "key18": "3B79WGJNvKHETMWHiWwqdcNBoJotbqWV8rQtDhnuBARAefbLbHV3TbYjydzStAXWVgRwFByHKuP42Z1QR9SeqaMc",
  "key19": "fGtE2MchcV3cssATFM9ieZzDWFRaVtytSutGirrgF6ZrBWP1kpRpN2yLSG3sQuL19fFajXfm9Mf54BcFdAsbwkB",
  "key20": "3i3LthFytYWHaV4XbjrPcwFFqYqpQqQoyDtx3DHJc9npX1TKinJMKCoWydGrYVY5QKTLh4zQaBzyERJaWv4ZkkaE",
  "key21": "tMgu6bkwoTZDaPt8mFLPYoGG6N6fSy3c26gzCBmjmM6Qbgryaj7ZdWZaJ1PnfdqRQc65aGDtmKTTZ2GWaitQ2uX",
  "key22": "3eHHxLswRV6SwpcF3kFxHSazvSYwJWdGugb9uVB8GrGhJUFyLF6LhriVwivsYG3DcKyUAqnuijx7pBWuWLpYhPSa",
  "key23": "2YpKUDZZQEiWvJxEcNLoDQUwVBwwVhBwgppgAdk3mYHZsPNTGxCMzjvW8TxQFd3CjpW1DxMWbsZLKpTH6Gqm7KBy",
  "key24": "4UCjhFihGGrN9AuN6TRgn8tjpahp43RpPetfXBKbDGhuZn58xuwa1RWq6cYQZnJJUvhFgLxGMBh4GS9imeDorCJZ",
  "key25": "5kv3BhvnV4hq6yBhmfBpqZWssnahwUCNZMHvVndnpJEZanBAtRGcsGdavcvfqxBitubVSw4R4RUCZwBLFcwqJiuX",
  "key26": "5EYuQbVzQVKsnQ9ogeGGQEDWNwptzQhW1BTPzspPB49xrpHBVbh6YoHe8xMU1UPjfM119h5DsohayAX7eco3zmH8",
  "key27": "2rxHzLGCxAzCLAx94RKFvHSYQBjwGDo6hdsCp8zG2W9roKkRZaxEWyY6yXcPtqPKFNGDEAGxiRF7oEjPJasxiQoi",
  "key28": "51wxRrH1mxYAvSFBQnamh4qsiAcP6dEkFoy5RvDfmryUVH9JoP16rkuZ6fM3ZSzJ8ZKU5Zr3tjdTqtBpCaumyUYi",
  "key29": "3qCpSF3zqtLRdE8d7mwL5SPReiUPBqBHqMb1r38rabMtHkihRLx1PQYE4tAv3aH13aKGZEMeeMTa3oAEghSSKRbE"
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
