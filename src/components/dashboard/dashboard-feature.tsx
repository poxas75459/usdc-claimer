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
    "4ufRMiKp3Zv6PHHyQSNhypbW8JULcmG3KvvDQqb2BEBTx2TPoRmQPuEfo4rX4Cpgfnr5RkDhiqoZv4LuGLWr52vX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Dct88zw6cLW5MpCeKSZq2xnQLgP5pLzKd9e725VzaY7Cskba79ChAxzVZB9Zy6JSWmnoK7reMCUa2BfHiAwozw",
  "key1": "5Hzw6brC1jZbv84uqm7VtWG8WRhXcD8mTCZLSeHVWUk4LzMzUgXFMV4MMhwoZU5FqTS2XrtVhY6wfNHS4YH22NrT",
  "key2": "3dqzXdxKQfPujKBpSyCzuPMVU6YrpwrsowTTdjve1KpzvokjJJj5UVTVCSB9HXDQFLvqSsgmXYYEB7QyP3dz5k1V",
  "key3": "5irdUdD1NdzBgr4SorC4jNF6VAZ1kJBRw3tdk8o9rmXisUayGhiEAMTbxuvuYcUEzFPrQJ7kDoQaotvLih6VMQnL",
  "key4": "42AkETYPhxSXpgBqAyEHBaiFp3Vn9hnahQQoBtwzkfHXyM2YiamnrUV7aommBWKh8pFcniaaTKW2aPihMJRbfZzb",
  "key5": "4CKpdVeHe8d7x72VtZe6zW4EC8VjsQg2G43VV3czNHrW5Hxxiq9SjYaHzXQFpb4Xa7g6w9WgEivoNwvTHXkysagd",
  "key6": "5B8jC2HJfT789f1EKeHTySjP2695sq8uHF1sEZrCZf8fWFakTcmoW5upavt7UaUj6ZimihB9wmHULnpDYjsjn9pE",
  "key7": "3mMuxV46jrqh35U166xbeYY6os8o19R9amY87v1kx4xuzsESFXEkfb1EymbP4bgdRHfV6esTuAsVDr36XjCueBMf",
  "key8": "3K1pgEYoKnixJMQtuLKQMk1xUbZkY8smTFtJFr8i66qEoorRuLq4AVZUTjcBAJbv37KAk19yobQiLMD9ic33BxfX",
  "key9": "5Zs4uK5G2ynsBCQWxAKAvSqB76xZY9mfXUebZjCKKsZ8itGkjZ2RBe7s6tD9VGA4n2sYg4FRL1hntunxDgFc1VZg",
  "key10": "5nX8toHMNDLrgVKjJ56xir3AsYjHt3upV8a9Lnz56bL8mCzm35LFaSycmjs8mk4NxeHAzcKwSBHeqzwBK1t3LTA9",
  "key11": "2o83JLAPruEQKbksGqCt6doY4rnhGwU9HxQ4Xx5r972vWnWiTUZCuBMT6PkXkkdqrdsdAqV8aVG1i3ozb3cSz6Ec",
  "key12": "5r2mPzLKHHevVg8JmTdD2nXuNrMiPv4rbADgLvKdoDmYNyraripXp1Qe5jMWbz1t9vir3FhdAY2pfyLSHAvY2FK",
  "key13": "3bpSaXBGVyvMJwv1EGsuK9sGFnQF29JDXXLjLk6N6Y8Q7SRtSZ6LZZgZyCAVkt7uMiz9EbMZB6FYrxLTmLEPNiLn",
  "key14": "YKFSbYwFhAYoMWxnfPMdxX5dg5JpGbDAE8HEEGnDLF2sFpbCzWhqUF6KH57iVoMngDPN9T6tTGbXcj1ysZkZuVo",
  "key15": "uErAgy74xPATe5M4Hs2waqGhH67H5vT1YiehyYqNKTMkKQqkTKKMnFpczHH2jDZjXtMRVopV1RfyYUriQ2fz8s6",
  "key16": "3jqPURBtnxaaqiVxpV1g9QxuQ142ohHBeYUJjSANJBEMedx6MsJR39ijsyrUsybe5swz2NBRGjyZVHccE2NFZmNC",
  "key17": "4fWeT6m6QR1vKizF9PjoeEprUh49VTvwiAtZPT2HYpMf4e38gT92KVhCeE1HJDusngdEGnuaSorMXGGzjrDWLhQf",
  "key18": "4gYcSK4snQ8CvjKCNGr2Xw7tGn6HDny22FPKHvaLYesBcCpACafBLEEYqA9NgKoFt8CQys8DHz1zY51TmKCeW4yy",
  "key19": "5Dm7iGzQiGFr8oTpDzvkVcxyyHNn5WLfFc9vPxVoQKvposvpAr6vGHpsAtQR7VKNUQbZRV43Rn5qDeVxVtJDa3Fw",
  "key20": "Bv4x1RkVK3zxfSphujM4JANDTfeAP3atkArMsr77neWZyJqE4YMGjVPq7cddw5LpVVzcewA877Jum9HQ6VgfjrA",
  "key21": "5xqhX2izxToQL5V5WDtMwGcG5y6L9ZVPCdR3GgjYhjcxKyTuZ6ngQANhUgZxqkKJWBHbxBcA2nStKPsCeFD9RWn9",
  "key22": "47PaKQLsfg2MtEzvugFVDrFFNpJqdggbeQsJ1fa7tRWxqoYEAF4xSpgAoSEYiNg91h8fXgprmLvSe2iADQKSvHqB",
  "key23": "cyPaYeuwaxNrrvgQ6uY7S4XPTzzP7wWoWbhHbJKXzxW83GRgPa3aU1LbuDuEP1uQbnPswCuDcJRkmeAbx5nDESA",
  "key24": "2hNujtYAFQSpLiHxDdw3pxk8XMQpVM16tAhoQpzgVQR95eCjDFRQU15KXe4ULkhZcqD6KgF6uNASBtP6VCpvQyWK",
  "key25": "4GB8pEL4LJbcBANPEnwkdWFXdAZj1mjE9L3nyuFJujEyH6PZxwc1UU7vheNEKw5CgGwbazp5VCgRX1kGCwqmzHQ6",
  "key26": "Y6JKXWZwCVHWm6xE4F7B88LfzPattGDWuxTXiCYwTsZSDEstLfQPVYCDc9VS314p7BGuLawqU3jQ7yGTdM3KZgW",
  "key27": "5uxtUbrVAcBoUW9EhdPoevHdgZGcZDcRNzVqeyvuAdixvDLiA7UuXDgij3QWu5AYLMHS228U9zU8rNW1E1VFubeG",
  "key28": "ci5r9grdwE4Hjg7kFeu4j7fM9hDiHdkhrCXzjgsKgbtrV9u1kU8TD9tu7Aom8Q2vPSd77kk4QXvM8tqfen72nwS",
  "key29": "4wtX7nU28k9asEbPt1HiR7AKfbqEjwq73moLVQJhNN27YXtronovvdzD6HbYQrdUgDzEjKvJT7KRiqq1SBs7ZfnU",
  "key30": "6CixE3UFGvCpfSyKeXErtexmzmfnRga3p7EUPU8JR5Rt4ZFdHd3dU9xakcuNuqrUHoiepNnHoT7tuJ32QekcYhW"
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
