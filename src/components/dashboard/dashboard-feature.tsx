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
    "42p2WEtyqGp8XRBj581CNnLF45L9QkLZuPscUruR4pcCu3cWnYuW344szt7cWrXguvCpqjzBy8zaS4bZMHBwfmjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zVYoXXsxH9PaSDK2PVYWZUswGcjayFsq6fKaAvgm659sT2XKgSNEbKkbbQ5pTr8tJwseHofyZi91EEezgux62Ji",
  "key1": "632Fj5iipwuivqBqoRycbGfjhTjPhAjsLJ5MR3yHHHF6XUqk3G6ehKjxyhJGA4ZvpYRUa18md6Fnmuec3Zypkwfp",
  "key2": "67NyhsVTshNZtA8peVvod8v6YDihrwPWznE7zXPNFa8PPEUKBGKyZC3um5kW3a5j5VGekfmitBH183PmevXeQVUP",
  "key3": "4FaSsSnSdbbyZonZfutPHnufMvxYEvqeX9NnzwjzpXAAYZ4CHAPsv2RA6pYNEFwd6bVsqsAcyJwgE8xL5w4xX4E3",
  "key4": "hCWrPZq68f7eDs5skA5JWcLuL7uh7nPQtH5F9Et3CRuUSDzfkwcanYkdiif1qfioKPQ3SNGAdfijR3Ca2t5rfzw",
  "key5": "58anDC6SjYqabSXpcYnymNVeKfMQ1karTT1dXLz44GhTeYGYSepWyDseU49rVBzTcPtRuB2Uym93AiSHhozvfgGf",
  "key6": "4Wgw59w6YGMGV5kEPhQfG1FB3GF5fxw5vP3Tzn1rpALfFgsQKGwCXyam47XNur75mQkQHH7WUy7UvYJU9YS2jdrM",
  "key7": "22kMauSj8XoM4vPVg3VeXa95joyADjpWcZCkckhTB2cEBVdKnZid9pJ1xLsHExrQYYETQQKs47YrV9Ai2WHVk6K8",
  "key8": "4cCVjuUZ4Sn6WWSpH79kr1o9vhwrcYobb1ew66h6UqgtroSjuZKUCDYeCW7cW6UnDBVdq9aLPLKpq8dHhoK7Qx3e",
  "key9": "5GjSQDosTDvD4xLqR7gL5kBidnGgXRPrvYbpf36iMW9avYyhcP79GQQg6E5xb6maprcGUtt9w1iwtdCUmma8T48C",
  "key10": "4ZS756nqShMvsBmJxTNuNd7aG1556at4MXMw6DmS5nFeo2xKcSSWfuSbxLWyjBvrmepFkm2jFcR6izuoUuEs32gb",
  "key11": "3gxwrMpbxj6oKYa7nYLxJUQWEDtRwYiAqxt9eXHWAL564hEY2Vfkakj3E1qwpFhcXncxPKsbjuxS25uyhbs9qMbg",
  "key12": "4QjnhTF8DYVd9Whb9VHheT6GFbxQHdcEebUXJaQYmnZywvqgveaHbCUfA3CmCqaamrJTvkjRWcj4aXdnQzngnB4t",
  "key13": "2xKA6M9KTKrfWovKQgVKwXDtj3iLv5c63ZLnhSuKb5fERdtv6tkAUiVt8dBNeMW6bDa7waUTNuW5fWBvgKTWLSbU",
  "key14": "hSbRYkRrcNFaXYmUQYgydvuB7VCNiwW2jYMukRT9oYotLzKs25ZTEAx3ov4PuXZBLUiKCouBHThEf7HvBhdAtyV",
  "key15": "dGJqxoeomMPHFHZRyswj1R4WS7vZveDRCZPBiPQL4hK5RUPJhBHq1yK3mCbxNE5Ph5hiBuvhmbfzaxXomAYBxps",
  "key16": "3oDDJN6KuvmDbakD9TVZ5Wmm3dg3SbifFsSmQvSSjNpKDBoBRPTnvXau2XUAJYd6RdyJu5XT2c5ZweLiex2UyM7s",
  "key17": "2PRvz5iY8aKQV8VUTqPQC24M1jwJiorPa6wWHZYUcgGZq7U84osn83YprseapJ1AxxnyGrKtzXsEzbwGaU5TDrdy",
  "key18": "4n6hYxiKhom4pr38QLvs7dFyeapK9NGmUu4ZYkdxC1P8TusaTpHfthdXL3z9JXevAdWyZn5wtkS9Fjb9hrYNATrU",
  "key19": "3FRrviHYxyAHhHgHSMhL9Pp2A6pQBuVyQwTKS8A6WvB9L24x8LURN54B5DJKZ1prwHXMEmEbcB94hYauaPJRVTev",
  "key20": "dXTtkh49V62RgidfV9HkZuz8Jr6MUo6j3XTxkR6hrjEfAxwt9b9XgLn3MJstNY9Gi7gX6KuuvbDi6XN5zGKad3C",
  "key21": "zgF3ptZGjAr2ZjnhriyJP3DGPaZz2WQzpj8NgriD4aSVRVd5bYDrFETAQKt5KWAfG7gZzzoR1UBBTyptrfL5F1e",
  "key22": "4VNE5sL26tKUpTtH4W7WA3QavF8LHrHoKNxhZtzQx9vYV32Xn5VNUdLgStLPhzjAWakffCXqby9js4KG3CZN3Mov",
  "key23": "Go5WP1s6eioPMrvqFLd8NL5pGCB8VNULx4DeKhMABkmeab2r1GUhDm4XERS7ZLpEiFcFryu9Bhoays2v3S9cxDD",
  "key24": "2NLR88CmsQ4f1VRHr2oyBUpS81tzNBK995yhVvU3HTE8ybBxaVGpdKWq1DjCavA7D2VrZWwsH9dTYPcmk14fEJtC",
  "key25": "57jdBYox72gejW27kQ9Gne8qLaAUgpMpJ4uDFpwXiwNkRsz4jshsss2sHzyekhk8orVqruR9oVrkpQbYbzTiqVdC",
  "key26": "3ggzCpwihFMDLeL7s9X5pcPMUmYYq27W7XRxUnY9MKm2jVEDeR9a6mzy5d5qCJhwgxECsym9vb3KPQR6jez8cCMN",
  "key27": "4EYgvCSCNsgcMsLbtx21V3BprtB9Ggk53SgNo9fuTKgxHKM5cDspZiMoPRhVt1366b6APLyfuscGZVwfftfwMCjs",
  "key28": "5Cgo96XL4HX9D6mMcY4Du4Z8FNR96sfnBTAdPeZ5jgM7V9v3uW2pRf1EuDcbjzDRQyUzjKx5rKRtpazq71JtKTh1",
  "key29": "2A2cS7ngkxSJcRPzEzr66yFuVVKvY6Y9fodLYHcDmnFJpY6H9fK5aVhYN1dmsg3EdYmDCGD3nHEFxfhVgfBcCdze",
  "key30": "3yAYAYsYxVZy71aiEWkV6zapn5tbXeGnYeobt8VZayKR4TuGNzbesbknrghj4ZyKy7YiCttLdekposCgtUkcu8Gk",
  "key31": "2Guj49HruGNYXa8pW5qqteaPHL9ve2DmcUkiASVxsMorhHuyBSma8hdQLTi4TSBn2FYXdtKMPuhqc3CBQ8wybtkT"
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
