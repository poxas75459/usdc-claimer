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
    "2Ufks1k8x1ZgSohAJXvXobzH32UXMVFryfz9GdecAVDyuCGNyKgaUt2zZwd4p34k3AwCayf6pXPK7CCacUSf4XZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M7mGtA7RVVednA4VFphkBFXgipQWUTpK1XmBaXwkonFg32ezUeBjFtXapYDMQoBt1SGBA2qtwLLH2Fh76dkR6yt",
  "key1": "vnTvDaq9cm7M3LTovUSH5zudNpG98Qyx46uwKKUm2z4npZ2azepsxPtNfw1HNRjKpATWbNHBNkfwpRSszVELNNh",
  "key2": "3qBxLLmmaz9VHQ8VnWjQFNqpq3XmyqKdZFoUqjxHJ5RWXBSmJ5A3iMBksPrtGeMmgMPnMvCG3UiTyWxqLpGLVe52",
  "key3": "tHbfcUBkESna3kFRUGMA5StquL6acXJ4QFdLYAu35LvtYuT2osy1xteGkLWgixub4kPiAtwrHLVmVRC9oUdZsAH",
  "key4": "2GzXtYcmVLnzGmjCWjekYGGymGyEJqeiuozHK4MyizuYeKnBKKQBZzdXg292fkKnJzHUvWJXxQiGag4ZX9SjMfxy",
  "key5": "DeNwnGuZHzY4tJeNWRK246bZTrBJrWhmXiS7b47V9Pu5Dy3HhcskTfKJ61W9zhP33CJz6fYJpaPTHtjRagDU9ca",
  "key6": "4EwLAgjorrPN1fD4HwWrZPhxw2htqUDiGyGFozCwJdFQJh7RqAbdV95Z2EYREswnBBvZqfdLfsuPU6w4W3L1t3Wp",
  "key7": "4PbMmEHSA4dXz8iwVcZF9ogrjPv1iUpN94A8kjCqJ1bKU4Xo4RrT3EdzWVRJF88hvhgmL184CpADPT11zrZtPm7a",
  "key8": "31nvNtqH3SiokhnNj3mxovcUhK7qJXD8ZGFH6zyyCanqgeqpwL68GqxxPB82VttiJcsWLrx6ukPSEXgwFAceXErE",
  "key9": "5hMbKTTZ3x5DGjJVzD5oDgfZu4NTrwpxzzEEvoLihFAR5hzzocdZXJstijUho82LDTMFv9HZD8REdEcWEVLmUbms",
  "key10": "2MoS3RXSPDLzUtAdotTUEbJGwbLVgW4bsriRjzv8t6vg8XgwQXM5UjupTpAqjdFMmbgcw5pYdkYetiRtzjDSojbr",
  "key11": "33ckCDTVfvG64Z5Mrx66y9GH7VepQGCBqauDkB6vHqH3kdmiayQG2Rjj3qbbUy4XNhEKGZ2XdxkpBvHuMGBPRNNm",
  "key12": "r3T7m6K3PkdRSJPCgSzshB1YMYdUopsadsQuewZukSuAvzS2maEcm8cmSPUHSVpLfnphDjszZB8oCx5LvinHrMx",
  "key13": "28kB71mgnqwTHEpqqz4Zff79zK4v1d7Kyqh9PCJCKSzXpBEUThCzoF8D5m8QnMn6JxDu6MN54yv4H81mK5QZ5mMv",
  "key14": "4tzDxv54szubJHQUuWnGT9iUAwkrE3p9v3MJvmHpbYdyVjiZaRm9b8p2oHvjCEd3mFk8o9DryEvqidcbUKzTvenN",
  "key15": "5eU7jFqCtGjKuC24djwUa46KGiaZoMvgo49LQ8ePKtaENdsQJC3LHJA9RwJ7KjvBz2gReeMhYYCgKSkTWu6PMb4y",
  "key16": "51ZMXRH9YRVqnTkU3qo8CnB4L6PEq4GwUncVjjT6J9WuCv3naCQ4k3xoaWt56X5WxuDwfQrsfGxqL2U5wSNRDHnB",
  "key17": "5A1t6Hy4mDQiLAVZWv3RK3Nq7hgdBHGNgrDhoLrThGcgWmEzQXkXoRpvuaJwzaqmiPgHaj2yeKPnBDiXEtsftPkt",
  "key18": "TcYUkZdppMaVnUqFZn95npVovj5qiQktq52misVAmRoA8HBp7zgq6jiLxUpqjSPwm8ZMxaFiWagP7H7cHRSgagF",
  "key19": "2a3uT9a42vsETbfxnDHJsFmcpJAvDxTxUDxYUpuZ9DfjtTcqzDHyH6V3QJKYDsPPsHWem6qgV2xsAKCktSUMPS4A",
  "key20": "2nBFKWDZWQPpPhFokhnFPagK3EfDvzi1PGygJNgY2ZsG5x3ZecFoXna5xZWKu3AGMvMddFEJmU9ABDiqZKEYnokw",
  "key21": "4ATNmspE2ZnX2uKAxHH87gVWJTUqZiawCRbAPV4aMubEZZoW7sC9DSFSSCuyy52dSueLUwYPuMhymyvcTG85RWYD",
  "key22": "2Y7ZJxYtnrdcbgK1FqY69cPAWm4B82kCdBHorcFsVMCr1kyS6fX6jDgD93AT4pgaRtfRPieSbghtTfEoTzcPVD1r",
  "key23": "29tzUk2REwQFVxTqM1QWwHjGSSDQAaXwSdW4UL227GqzDzTVanZrnKhN5ToDykssiaVfvQGZz4eCg3PCDTgUNraQ",
  "key24": "wdRjipvfUWfkBLiCCDKfQhgkRbsYhixE8B8MCfSWzmbRxHAayKrhGVyiFcuHrFK6ToMnzjGtcpP1teDHW9fq5ei",
  "key25": "3yp3Dy3SzmdjM4EaM3NRj4J8UrnLP27EMerczn3VJwusLpXmibkgosS76dEY9zuETkPRkwqvgeqJJ61azmHRSwCC",
  "key26": "54xwdgq7nwyVRSMjaUVnWWxpKnMY85xNURBixbFbZW6HJxtF6kBGZz6yeKwqVqVJ5wD6PGb6Wpfc5FcBNLbvyPhb",
  "key27": "2qawjHddeBpnrjpcmqWKC625v1aEbBsNVhpxKiGdABnN72mnJcAeKk8fsR2dV3y8e8CNvffRXj7zPM9ZvsopKjHY"
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
