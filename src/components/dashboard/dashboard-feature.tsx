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
    "57LKtyUUrzo2m1iwxQJysHfjYGxJE34gCEkU4HxoFgN9eadqF7QVB4WLQGWofaKAWcPFycLfRdC5U8dxq4o35D2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nVMuKhoXUCs7UgWKdxg72UXSfYHhsjR33i4otBrDHXrcLJAgwmhMP5NPgKhNNdy86SGRHR5RxxZdKhi9jKSerLG",
  "key1": "2G2GYj9pimsa7FMPpqwyj5Zor6NHvKdPYCKXjaHZEkvAyoUgKEwQYgDAQGzkq7YcCThjXsu2BQP8GFN2joSSw2HW",
  "key2": "RTin32E1Hr1X7pA6f5EwjvyauZCgW4SKFdAby3b3rM2k9AJZuGbp7mFpw8YNRfEqDfzyjGvcrUcQYoQH7of618k",
  "key3": "2d7YUz1VBHjSX4LK86YAiZAfZJRmyFVhXq8b1oPkP2R4uYkF31CEyzsNm9hKaNczpVevHJrNbUNatsvbyGqeNTKW",
  "key4": "5kvBt3V2jfX18cgBKkztxPa6t34rGUzW8eFnihX9aMCdrahYHc9zRg7xTkE3zDsfR716Dx3dZmvEo3Yzwbeuit5i",
  "key5": "4bTVUZrVvEVJ1tZtr1GG3YBnjES5bVqTF6xb1iPuovtB7XMZRLLSSJLLA4gkunABtRApYrGTHTPpFjTub9ACTv3T",
  "key6": "3Mj5PGW2W3zFqck8e5xWrz4nGK9suAWBpxy7TCVKcx2fj35aCQmTC9yrbJbqnaozTWLmiyE8RYzRFTtov8euHe9Q",
  "key7": "54d3qT7uDK5yGdHHrjbMmEdwSE9i8wgmK8bKYpz8Xf7aMCkpwGmEVmfcZZGQTv4MMq9DeF9CxP2gYkM9aL6XmDJU",
  "key8": "4wGp3zY65WbWkzPzBAgX25tS3cCR7W3Gbazi36Pkedtcpphzvx3Vz1VchX6nmQ4j25UZA2Ct8aPTAtPiaPRxx3wH",
  "key9": "vunyTLE7dHLz1L1qAK977LGGuWSoHATi3GwBXoigqRHvKmLvCCJAFVKHcqnQ3KSXKTHNNYmic8y4hHvRFUVyq8Q",
  "key10": "63SfDqN1UnxKbpHyd5CUmpoocTMCASxR5hVNgZtDFPHaUBrNfemA5dkXZyKAuGuiCxKb6yZftY5jqGHHjFBh8rSV",
  "key11": "5cDB3P9hgNiAQTbtjLNar9BheeL5p6LEZWNFh32G7SSuho8x39jaVeZMu2kapssP3dZsvEgJQzpFcyvWGBHSyUD9",
  "key12": "5fVX39fqw4NqbjirwvEPrZ946TAc9d1LrPc7M8faMAXNDuU85kuKiY2kj8eMpMcEoDCecAR59PWj6n6zktPXCbCK",
  "key13": "4qJLdMUQrzEQxRQ4YGaDTrsJkEk57q6fFZ2a3VSEP5eDGfNnjcxucxmffPDBC7zdFKPLrMfbD2iAtgEt5WM9TtwV",
  "key14": "549Z9Zjon8Gw5pbETP1mQXe43rXpGapdceZ2EUo2vBRrueRi8VfpdhYdEZVGo5DzANSPGfoxC2Q48pVdCuui8F9X",
  "key15": "4FJiDEZ97XgbLaN9vfAuPBHTxwN1njDgCvH2mwwvDSmAvBibBQZn3hEB8SAX6N3J9EVefV57Qt9rAF4s2eTmpDYh",
  "key16": "jLGj91o2c4HL1zjpVzB57qmnitvjKdpvZWRLmSn2igZxgVjKcDPJ9hXekzHGVWpndwNdQS5pDbK1vag9C2diguD",
  "key17": "5Xvm436Hwwg56oLahmFHDsrFyfprdBYbfgkaJitL3c2nEr9rXgGbP3y16H9Q71f1LmWt4KEaKnhrPFBtxMrn3PKq",
  "key18": "4Y4vMvLTse843UPLotBwdCFagRMjfqgezDDfZnvB2fQdsMznbWHHVnYyDCNjmMFB9NjzaJBCJ67Q87eWJh66eXGs",
  "key19": "rSEPZUr3JQf3zNM5HwMEJarTzmGpJrrt3Zre77bwaKNsAK2KbLejnLohBp8h42PbJDdKiGyG6K586z8LdNYBkFh",
  "key20": "3akmbxuoAedn48SBKjBkAA6Gvh65duyyTtRdYMAeNrVn2va8RKVeye2Bq39XDgkutDmn7xjtrEgXyEDMnoUDG8Ge",
  "key21": "2qFoWKWcdgyuB7vmBfs47jkRDoUZStjz9zX8WdnXHZLaaSUCdaDjdFPHUT9RmVHGVD6TbY5cDqR6FS5MDjZ5o6sP",
  "key22": "4py6oeUYgMV9AaPX2AmBPKhjaHng3PfcDoiU9V5dr35pxAsFdd2joWc1pC7K5grArHvcigG4GwpckK86nnpUjFVy",
  "key23": "4J8dwZCcC9N1p53WP7cghgED79UE3a9tCRrRLKiRpVtBsWtD6qjaB9ueMPsKKFoAjDBwNYj9eGqEusm27xVrXNKo",
  "key24": "5wYATJAML9SHhL1ZYxfQC2pozhSBBwsFcXu1KubRL4MbEuAFDBgexhER9jptgfAjW4hXYryRb1cVDhu9xKAwZ3x",
  "key25": "4jMDgao7G5QvSTDg9iYLtT3xzSUr2ZBECn7NQhs3xfAAtKn3PQhvvbbSdsGR4huzYAWvrhRCc1pkxzFiNRYbkcKh",
  "key26": "2nRcrc1EbBvr4ZNK1kEEmiJpRzfnZcQ9uAhVe5Yu1cTorcFBSZKTKamCkVaVX6RJ4UrL2va4HXkCZHT93hy5QKJi",
  "key27": "4mzgBDy3UZu2zqVPsTGFWWf6m2sqLv5tuG8ZzYgVhiTp2ayxZLizUeBEZAeyyEFkXsJdkDZu7HSuarz8LzpyUQ6W",
  "key28": "3WeLGwZWfdXFaY3SxadkwZnHKBdRa9wnHxSWwf12vQANoT43CddDd4vxfLYRVVHWaiAoGpSkyiNU67g5Ti3e6D2N",
  "key29": "2HXAZw8sFb2AZRLbWUo7dSb7tt7sJsVQZKqFtTLWhJvfUi2XFVVK2oS61pFRxiY4kViuaXp6VS2n78NqK9pN2u5r",
  "key30": "4nUqbHAZHJwqxQzyikDemgSgGywuKcC8hRXkQVRsw8zMghwEfNKm2tJSfQdpMLt5Diqu4Gcv1jJSqwikuQSWk26G",
  "key31": "4zv865uH9gHo2aDth2KZPYUKE3PFVmm9KTUi6PHhhrb5PAfpZd28eShFEKDtWhAqVbzD1cVKD4P8mPacxFUZmNQ3",
  "key32": "2va3JzQazZede6A9c1Wb29Ade1MCps887nmcBsS8AGnDAL3TLR6HtB4gYUcuuAWBp5mnfkZFEjkXKViaroiuXLAJ",
  "key33": "2MiEK9UH3J8rck45m1CgjEHPNrqmJFj4f6SJVcfgTkH8Ggexu5oqHacecWWvqYUupUtBDprFT9GYCUZFGNi2KWk5",
  "key34": "3Xuea9eyDBMLknJLC9STev17ZwgG1NSYabEKBGniU5KTimDkJP9U5eX9JK17L7SMhDYXHQYh2HDE6vD9QLcZ23ne",
  "key35": "4R8aHQAbd54rdrY5WaXbpJWkGcs6g1oA3bBWJqTCrrjQcjHetmnjfjsXiwWtCA5bVyhcAVspk2YwgBbKZsNx6Bxi",
  "key36": "5FKu8E98wTwfKEs4s6zZTXqaWhkCKfE6eZCC4EBP89LehWCvG2qtQcXrjXjWPaiyYq9NsjrxdJPQiNWH6ELPJDdw",
  "key37": "ByRu8wKsM3B4ip8JTPeDBTxWAtrw7cHPf97x8b1FwWjKawChi9DLpwe5rdNTYdbHe68FATw3i8qRy4MGBYXQr4b",
  "key38": "4WZNvjHejDyrnMZm69QnxwFPRCfiRAxViNCyyQHpNbf1kaPJfLG4AsZti2s8rvNw3dDVRkTWdHpPnPoNpE6Chj6S",
  "key39": "57UjbLAu16cfvxTWwJb6nv5UE7yL4Ub63FnFU9HgTnRAhRpkd6C3aN6zzj7Y1V38Fem9z9oyPmzTraEFKY63konc",
  "key40": "2ckSJWkAimcbCHFC49cqy8NPNqze7DEPpoJ8gp8K6tQLG6xTcRYKmagAkTKXo5oDtdULGHqFfHbEDg6wvX5HGi6T",
  "key41": "C89uksE9SXNkhiUmTednW2gjH8RaMKcAXy5kztTWsHcL7NAJ45nqvKSZgz2CkzFoWtP5qQJm3p9xRB63XagdH17"
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
