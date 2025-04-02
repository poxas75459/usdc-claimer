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
    "5CnRTWtribJsktfEDoCpg542VPk1BvUWEPC6A7qJpP5mu8UvnErt7hi6xKFxyd5bHFtsxuQDqShuvdHDsWWCWqVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e3rk2LMjnH7E5W4x4hXGY7hzEz5DBXRCWPGPimABoEu1PwvdHHASSNwZNUEZvExLXRtThN7W3P4FVyZg1vLXA7Q",
  "key1": "3MCqz1GWuibAN6ZW6RMQ7wupQRsyYWVqynSEMdQ1Kc1gYvUZ8txhaiFtqPGtBnUKgq8wVmnGig5H8y9FCQjvitex",
  "key2": "3BxQkvHuYWTWDhoAeFMBWLe9a6ZADUnrHX5FbZZZaxD4t5ngLQuB4xERzTKM83PfA1neAVV4S2GsrFocAEHQRsgz",
  "key3": "5VSxpcd3AG9ssgSQvk2dfuBDsKafeBMBU4wLYEzW4zhLfW5vvs53bb7D6QomGRyKJYDx6ZyCqQsP4R4zhcggdcZk",
  "key4": "46GKoHqJ6RRVHva22hMsVvuBHpxvAjvVW4tVwZfc3M8dGqAYFyEmY9kfzN9zFo8pV62MxrXhoNp3Zg2CG1qRw99u",
  "key5": "3QWAugNA7gtQzAFE2iTbQj3LKvwz2VMy3kv6Mr5ZZJk2P5eR3Hp8vG9YxcKZAnz2ANnwrgKYTBbQVuQwJAmVBft7",
  "key6": "5WNGnkRubQA2ng3zgM4vob8kP2E8hkyxLK8uiCuHdb89ACZFngLuLQymfwdeR4Me5BEXMAX5oLbdtNYZarmc32wF",
  "key7": "4nEhfCZrYBQxVbpfMAuoujpVXKeEh21Khuh7Gpqau4mN7XsjYTdavoLwoc3hAVFEGfLeuAcUeVuX2ZVn2CkK8Fru",
  "key8": "3DxxmPYun2dsS98ztzc85fdXVdpuhaP1DGybPSxBn9QesP9oEdiQZkKrpcUuMoDTFhBThFF4Aw4jD6G3Pg6HgWBX",
  "key9": "4CEJm7P6gDmaWF4WGJNvz5kN1pWS6dZU7NafzGtdz6nEya7wc7C7Z3jS9oZz3NxEJPXiHYRLY2ba1DYSRsuS8zah",
  "key10": "2cQ7v7xp3qiRcFWW8rzB4Qy81juhvW4UntHNh9DSbb8FCRzvB27aBtGN6qhUN5w4kzW3VKKAuRYFmSTBKCozCXda",
  "key11": "3ymcxySY52SKRaNKYiJ2NL4pstaAcHn3oGH9v4TSxawQYwaXt6XP2jQNeYAxU3bSzTd46AVNtxt7umwQdwfEtfdX",
  "key12": "5RcVFcBzJh1WoobETgPznSpDUqsFbuNemhGiCQUdwtSjSuN3EMjkdqY8gDf84XuY2dQzcoZccMfvGrM9WA8mzs3J",
  "key13": "HGDwDZDDSXygiMtLpuqNPveGnvrGJchUTFup9rTWoQRnEejshvKdj6kFCs1vtbimMXLUubLoa1yUBiMdrJBrdwB",
  "key14": "5mbZ9azxfPpJYTUebX2M8U2nguDtrVtsQ8WKd5YG4c5W6MaRuE6fK39eGuRTv9W8DLqqmcPUQZeK5EjGTutiRZPu",
  "key15": "4LhN6WoFEFwmQp1wDaMUkk782Ze5mbLc4QSsqWgGx8iRWiPAviibzrH4kF9V6zwZ9HT7ybjuxfdeBbKT6XcJYBMK",
  "key16": "uvuj8o17Q4Tuzf2XjGv16AK3eCVZWC7C6Aczi4RBjU2jESDFrSzrobPZRNzXh78vgngW3TFCFrdJwSxUWmcrJmA",
  "key17": "4LQg7H7sH7M98mWLSpaCfSpL34G14aPyvBaEAXhvbWb3TrFuZafBiamudn6RNZtFzbXpfCPnzSf62tX1Gz34qUTy",
  "key18": "2TuE6bVqKLfj28M6J99x1zizFg4RrX9Twyhj2g1vc2wwFeduVe2ThXek5Q8EYCYNNocz7rxQcEqCAbBa75g7WLRw",
  "key19": "3PrS8dwyYnrLMoYHCYF6NcHF3HaFHVRdwgnAEncNgjfCung6g5Xt4YVUK3oj5B8mGR6YyZPQrXUNV5uaiRtuYuZ6",
  "key20": "5fw4xF4QpBcSXtVwXY8LGjoxKCAxtTW3Nisu9f31xoZDNog69cTRHC1NoKZmVDxPXcxjbtzBfQMrma1WPdPePJEw",
  "key21": "3BittsTVFeiEeCP5P8i5rvLFnCsL2ATHSYu5bxjfm3HhiQA6FSyzPV5WSQCFcceBfrMoXfCUJDzuYxMtHhSoMHpy",
  "key22": "MYd9UGT1jQr6rpRW4JqKzftu7Ap2cmkGfY51HBR95ucaUvcx5oo3GogEXB1CrcY3QaeWAGnMha2Yt4VfHvebdzj",
  "key23": "5Hgbho83NtyWkcMUDwWFJfw8VqpG2rnBCd2kNbmTNMBYYppR2wbkR14x2ouPoEbC3ci6LRiUQT21vX7L9wpgZQ2r",
  "key24": "BiaFJco61QCs9cfytw14ZPDomsXocaDVEU1vrpcf8rUbD5tQPwhiBuzeS5TYuQeDJqQR6XoEbmeZ1mMDvpChYoS",
  "key25": "5ujLXS3tu1qkXkskG4dnvRcejCmRcPbVGu7eFpo9CJRAdguWXiFpyMaSd9pizfCbPkEaAKQJT7bLCM39EujUo8MB",
  "key26": "4eWZXQP2HhzWhGTxw6LBnnkv5W9v59hmiWRw4UmcKr4CLNoXRFzv1pLvru6xBi82AmNWnro885rrQc3b1MBaMhqF",
  "key27": "2sFryxTVGdt25Mn3WW1vmsP2So4rSPJPV9Cia1nEjwWo6ZTTouN6xsUaPT1T7XjvvFCJhMBeuYwSQ9JG434b8dwM",
  "key28": "64ySqmUW6Hmus9MtBfyRwwLcQGFpx8dBzWuHknePHtffixmFjMsZ1K3FxBmrBR4PCWzWmrvXQoCZ2enSpmV1nPiU",
  "key29": "3WGtGXorfTPrnrtYGME2DysWDWMZkCUb6Sw14jzLpMPpYFq1FfBHsJV7VKD4QhnbPJU2XeVwzA6NoJzLMF1qiFCV",
  "key30": "3GyJNhoe5nZviNxRJQPevEskZtudZ2TArPwtVZfNGLPYXMQ81WHrFVgY88hpB1CbUwKmtBHCHvtMJDWsZpm5ur93",
  "key31": "2FZku2bCZUWhQ2D2k2Pp84PhazkjmBJsmscq3jGKS1WjZ2w9GbL32YbntFaur2L2EKTnQAWVyykfL5dVkz4HwSEE"
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
