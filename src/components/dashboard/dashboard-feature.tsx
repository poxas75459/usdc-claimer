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
    "k4dfar2r3tCSRffXrF2HdA1Tkfddjf6123MTBhitSd3nv9ZLyebM9X8XwdkUYqrj2FhRWyFUtdU1vimThhUCjZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sWy48tUE3GayS5tXHoEEcP2D8SSCrzEzuQD8XEnMV6J5pux71GFz3xgYGyxK2npbF22evLK7Kng5WwsQ7aRgjSY",
  "key1": "5RZQDaabjt2mkj9bA5tF9xxp5t2CgibhWZoWCUydyowPozCpMdS6W7KMSggeb1w1r4bvAXBmY4VqWC3pmV8k9A1w",
  "key2": "4zH7KgQGg2FVJW8j5yVvA8RyhUngnvTVgKDMR8Aod1FBXw35MyUf2m48hnoJve58ZwzV2E51TiGhyNRyMt9NJJsM",
  "key3": "5CdKXB8vHzHD94L8iwX9DYiXBqk2xjyxZnukkhi5GN4f8JjTEbyEkAafWf7c5kFGjZ65aAeoarxYoJqwE7VqUUbx",
  "key4": "5s4VZ9LkMhacgXKzKoFVXwLN4j2QQayED1xkAYG4WMn2Tk2fRJqyUKk4oxaFi3BxwqzHnp32kyFbMnbacJHDFX5G",
  "key5": "4bbXCjFWKnvpNAuXZ18PAXKjGbUYDfpPWHN7ywW9iHZdFg9SqBukM9Zxh4YwzYhN4bL9WJVEtSaTcGiE3hWJhxw4",
  "key6": "WuksXKVTmrY1Bm8qHXTC2o3hbekXMcj1Vaxxa6uC6WZgrWco9gh3dkRwHECfQne4hX33rY8QVhBSyYRYULMSMuh",
  "key7": "xAorjhrvXrYsAdkS3z4kYUra5c1pRyEeZa7gZ4ZAC1RN5F3rhx1RJbpaAbSAMFncsK5MrngbsfjPapPjFqWRp2H",
  "key8": "VEPpA16RR7Abu4mzU6oGNCKhVxg8qKwYVr6fFfR5SGxfudVB53E38T35ECnHsZE69wE2j1KpUHWahNLBfgZq4S6",
  "key9": "4VT7iv1SjZLWWL9mqQAbZSmqjQd8YXP4CQnbozi7Sjmch69opZ34RZLD5WxT1He5gYRRBSich4D4NSPAYsErqGu2",
  "key10": "3EdEma9Pq25CXKHD86CxKFjES9MSrdXdWymG1ce6waTfoJgJ982Z5EYyoHr74oJm9wpiEozLCRVGGjAKxUaTbmWQ",
  "key11": "5rV4Cfs9yqBPp5bXiXMTk84iUjFdA7JyXFAJoBDH6NAVb7zdcvXxxbhfcoMuBa4YRc9UpGkwNZeoWx2YcNgHFBb5",
  "key12": "3TBHgVvXDZi5a8orkJxATiEbbR4oYPGjdDekAREVSQzrTr73evjC4KYaV7ifpLocGGLpqfCycn53PokebeVVnWqF",
  "key13": "2VV8ZpSwSTNSNkPt2PGHr9s38sW2SgUZEXZWh9QaotHxtPHAPs73WBz5MbaqvK2M4J2vEzPGfdNLMizcVwbGxoHP",
  "key14": "7XCb1QKqR3Ybu2wjUTsD8MaQGQg3uocWo6oaGAQLu1KQszc7QeWJNu4aM8aYFHkXjM5mxvHhFmy5sS6oxPPW5gW",
  "key15": "1KH6F9euDPhWK1FepS77WfbQcLfjQRhUxqVFBo4V8xnpCxTVHXE1fojJQUdPMYaRJ3u6odDgRaa1e3tBA5g54AC",
  "key16": "35oUUgpDp9WSgWDuJsY2TcCwrHB9EgQgzCHDHTYwT2q28wcj2SU4SdZSLmR3L66Aa7kWovVag1YAcEG1Xyy8hfZH",
  "key17": "2sXvMtWSLU9HNmrmuu8PRZmhaXrfFjCthbYdwVxPX4waAk9MbF2VVJ4YyPbz3DxGPHjheBroQsz9uu7YAUNeq7Lf",
  "key18": "XpxDoVv2evLXt6xLuELdWmHrWkCeyT1SzTHF26W9QTF6rW2wwnF4eeBbfVabNwVneXZ1R4v15gGGMfwLjfCCUvp",
  "key19": "3fHJtMCnJD36Vtd6HMLnEHfahgjaxvFDD2XxZBKjJgtFhmrqbmMqLLqKpMxzdcnG3nUyZjv34CR8TtZQqp6NnuTd",
  "key20": "5ywdGTeBYDcvzxcC8sUozhjNRDFAi3fTtEEemSzGSVCWwxs8uREhLSfUzug4Qr9xjequLGGZAWDcDcQjiBaWr6MR",
  "key21": "mY8bwHxJ7smiLLVXQVRmENWHyYdrZU7W1ZWeey1CiA8viyC8AmpdzmvebWCMhLw2cSWAjp2PBkor89NxzcbbJ6s",
  "key22": "2G4wpnttjTNbB4brTVDxddYEPJ77hYZhDsvP5DMehRc4YRGiy1Tfy1YbRXtQbDkRypTtYoX1p9VAcsqLMFYmubsX",
  "key23": "3qtytjYsGLfYVaCyFf9cLMdHamTqQSZ4gHPKP4JpYb9WGnLLZEAAWT7MtnmUNSov8XVe3wdZw2MjaUGC1Y8B5gDp",
  "key24": "vavXefDmPDR5kqJCTyoxmxGfh23bF57XETf7Xe6TgyMAaptgEJj2ZU9hgs98prmUJN1znovWBTV88bi2JeCNPeU",
  "key25": "VAcLAM3gfSZcmib95u49WgmorVCqCY5JEGn6NVgrCp3hnCcdPbdgeX2Trm6AvC1GgtwRyBKkf7AM2x7VStsnZKX"
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
