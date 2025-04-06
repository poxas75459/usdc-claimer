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
    "MknTCEAr52WKgPCuQaZ3gSxBL8LzZKBMbheeDSbP7HzhR2yceydqcbWqwsyqihH1WSvRanEUzdp87dRvUhYvy7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39yMdt44jNnzMWhQsYW42bTTnEZSRaBfkAAhRVZJDek5Jd6DzC3DoofGZKAKpBnKmDyTQRvSLtuSHTdX44Yus8jp",
  "key1": "4xqBWmNYdsf3YpC3ro5KrXkbBBh4bjBcdUcG1wzbowPkrCwr98Jy2yUX7USuwfQpxo7BnabyMNYi3ceGxnJuQh2m",
  "key2": "2t5R67sGgyB8iV9qfQ8pSzsc7F4WgT2VGPk72Y7fRCNQYThdoFcngurmxjZmkgPAt4C1LjzqHjcLbcXPeS7VKroD",
  "key3": "2DmeCZcGVFw9y6n5Lf2J9GNZSF5N85iLa2Und961NnWRdmHVcHaNdxxvPerDdRUZxU89AkX4b1RspQZD5FT5vwag",
  "key4": "4qhKSryE4FH7DwHzVxCRf2hMCsogRGEmCzk99YHxnDksxbpkX4pZhBoBsN1pArZVp8p7bfpXCactGUFxx8WKLpSa",
  "key5": "3rTreXccgWqD1SaUA3uaKc8dG95EUvdp6j7L1T77bFJxDKhsGuc45fBXD56wMgLvh2hwnyzyEiuTttcJYcNxm3JW",
  "key6": "46ng6kYT8FN4s3apjAy75GTqzGJEhhAXwixZbMayCHnCESkbsU3S3ZLLJ9Bro9zuby7vXKgTorbBJMuXvh8srhXi",
  "key7": "4QVBHht2cBSzKJ4u2o51fRtJnjSN7nd4mjTa1gWeq5in7j167kVQeDWbsjNNPApaSxV7Sbv9aszVrLxz6VxSUMCs",
  "key8": "E8qru1Y2FNpfqWRJKimncuyegQRKf8ybWS6sdQCPiJHCSNnucVHbEyRsTkbqjxSk5aucCBb8Ha7orZzTysv4cWx",
  "key9": "4Gw8xAG8peeCLXhzjG37DmG2F4gDSbcgSD2D3TTE2taH3hifWBNiiyH3NbGgB2KMMA2sri9Fx45iXHpPp4vp2eid",
  "key10": "4Gs7oQkdogsvu6o7jLaNQyejGMWDyL3rMGrqAb47gvN2SRuMrH1jtTxKHLu9A4aQPLJEMU3jG5qjpoWmZGuHRKT3",
  "key11": "49i9dQrKTHU71GbULmYNMbdkLv6wj9TsV3PervcbJEz2JYyLCiW92SvWkF8riB75raQdoFZM3NvWixc3aVRnkywZ",
  "key12": "5Edvsv5wsyCNpZd1rTh9LoVKbpPcBnGTkmZSjKSesyJd1UmA8S49WCRzPFeurrJboem2MxZEjTmqknZdNRTiUp8V",
  "key13": "4Na1P9S8FHoooHiZdKFZv45AQEXCL1RXv3JKH9U8stZQm7bmKHSTwVVikQ48YSRyMSdNgrXyX4ZZJVG5kGeeT3no",
  "key14": "Z77e8i8rPgH4J7NXTMA7aiLsC996AUbpyzs9CzV2ESkAC8PobuCj5YYfnytiyaC9JssESYApnq8YDs1U2ZrNVKV",
  "key15": "AJm2CxQ21uUzg4Gq8Tyeo7mm1hkzhi42nA9dYDrezWTPMh1G4upqfDou8Qd654XWnCxCQjUmSGjcpjJ5adANcxS",
  "key16": "3cPBVRMexXjzPNUG1WCzzvFYGz21hSv5r7HmhRQmZ7fTT7dXjoBypcxuxhLfJuLakcw3v5wTD4Dzy5aYGq7f51r2",
  "key17": "39HM8rg9QBZQMwaAHXg3hySNhakJgAtVrdD4QGYgYQuZdkfvqYMSCwS3iFwqBigqb439Edxim6JjZnoUcLi5CxtA",
  "key18": "5EN2k1wMdkKqzqLNfQKbiEbxwP1kMAfrAvn4jqRUFSHVojnyVoFhD1278KSF9hWbj2B4ozcT5DUG55ergo4XSU3k",
  "key19": "3Y56g7De7KmmwW6SWQAj6fHAS2DwiSuCbugBVns2iY761ZtSFGnqQwLdwi79hUrs6fBQEYC8CBdf9vBar7xc1uVb",
  "key20": "4QWQECXLZMZWG37CoS7eqRPtXrRtRfhvJ9AQsZ4Mw18HeEWLcVGi7dQUzfacjQYZ1sWuk8wazrXXtJxQ19rRezgY",
  "key21": "2uPHD3Na6Ck48hizgSHpKgzu2fRhPEJVjw4xvBaYJwtTmZEqUesHWhUshJAZyrms4BiQmZixVQftYu6UAU6eyH9z",
  "key22": "38Bm6Fa91g9QoHDk4dmYXapVoR4ZTiS9W5uC6bzugbdsuwh4Rfzu9esdY4wS31kAge3S2gbVBPZyFfhBMdSKbsfH",
  "key23": "ZQbReGDVnywTT1CUSXs6rpavQixbowiAANTyGVfGmdMYf9K7Vk3kdnbKLv3GzmYTshgCsvY3aQRDa5CxND8SDou",
  "key24": "5teGfut92wZb494iFbyRWppetDZZGFjFpjBEHzAaNRwWXbpNTHj79mjnrkRrhuhWwY2yzNM1456YzorRMEPfv1t4",
  "key25": "5d39DgW41fMKTMCgVs8J1qs1XWTkf1WAKhkafgCFn7Xzzkuqm3fhAKBugK8m6xS1ZgLPgQzGyzjyGSP1Axfh1Jgs",
  "key26": "3uL36JdVWrgAm1tN4WQvxEStEy28epyK7QVyf6Jh9sAxRJkr5Yjk21KSZerPmeywYQ1QtZs4NtjCFGuXpVQcAJsH"
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
