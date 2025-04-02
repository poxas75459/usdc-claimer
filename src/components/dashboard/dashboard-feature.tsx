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
    "38bmJqvNtQDc7zRie3PSbdqdZdea6qW6asf2Q7S8LrouP6hqDmqv2NvyBeic69bkavWf7sQj46VJBKsAyVb3Xxky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yjJ4S8Xd3BFMqELki3duLs19LjXXM1KRaBWHP7DivYUBqNCyDfwUV2o84C32S3QSH77UpXh4juTVRLARytcf4Ds",
  "key1": "4mvn1SHDyyMFh5wZpqJiE9WfBuKicmeG5qNbLBBda2ofE23R7kSCUcCC8xy3CTBtvqpVPLvGu8tukM92jiRQdyM1",
  "key2": "4Jo2yTQiL9WvnyyKGojpKv98YCemoohNKXsWVQHzAvqWa3fV4211xvUakoUJ1ZShTy5LBrLPcPzD2zWvVHG32Ags",
  "key3": "3fwz8Nuy53ofa1DWmmP2JsUFSBvDnsRVxwayNSzPpQWmfQJ4ubZcU7x8WCzkdWV7q6iK7xrjPYRWFsMDQeqxcSuz",
  "key4": "J2DySwvp7BwA3PHAnNV1fYmwz3umfq3xu2EMRAKw2jYWUV3Q6UWRfwihaxhqK2zzcEXnjztZZVWbgMgDz4R55rP",
  "key5": "3DS7sJpcGYpDxiddkb8aDptdFmXZwggUYdK5niWaiW7eAZiHYiax3XPpdMzY5JKiLua4zjPkTDuTa6hfwvGZd75N",
  "key6": "3K5FS2YSQdC3q6aPBFoQ8ajpR94GscE7ru6y7RoguhRgycD9cwwQExtgZKGzWw4EocaLQxVSeqW6khw8Lh79WTET",
  "key7": "ycW4D9cFDiVN9ashzUC4YiFbkUTeJC9jaKWCaMQYBTYwz7K8Tq4Qgt4veobdwn8SESSuj214jyy63HoKxfdUpCx",
  "key8": "297FR4HNUVVsdGrSnQQcQuVLePaGiLWZ1KhY3oQRbJrnVa4irT1GAgMhjmm4rzm9ydoQgUGBD1ycf3o7wfUK7uvq",
  "key9": "4ZpjdYUPz9o2v7aLb7TGFH2xNmmk4MGhNzCFPBf8GW1xDh9r7Phe45mkT1ZXhNTBKYk79cc3kQsUxaKuC3XiC9EN",
  "key10": "58eQWCE2nGwRyCxU58BT93hnJsd3L8cE5Tp5RPopR2Tw6NNJUiWw9adCACLt5mLBJ5rFDWfZmGhqkGykLXnnaTiV",
  "key11": "2YWZA5foizMnTY4K86PBQe5JyXiM7HseYcEfzfbDRA1KWf32tmjL23b9RYJsZDV1HaTrAP7UKur6NTBBAvGGYfs5",
  "key12": "5VPpecddGqxDXmo2PeVR4q98Y76eqsi2wXm2J9mnSqUCjgar7trN2iVsnG9SHgtQFpmLn9w9EbaUq3Xq199jCcLa",
  "key13": "3v9ocAeQkxHRnRHwfCS4eWgtuqoSkESaXoJuaL2yHsLFZHTkoWT8j6YgXgxikkiiy9g2RUHCVSrShrDpK3K82idG",
  "key14": "43pKBEgUVEzhZA3cE4pVDkbew19woAweR7s1vzWp7FLimgTnneprH26CbCHx398uQFMK2eBRUDTcvfbYv56xkiov",
  "key15": "41dXavo7q6CxoGjdw1hLYor7aPsvnozdr5uESzRPvygEJD8r5vsVaEGyLVhPpETCRVwPSL4hM3A3jiju4aHiMZoC",
  "key16": "56BoMpjqi9GLCRJcAeTs7HFBZj39XUvbNQjSfbqqtDLF8Ga5bWMqBTrBYTBtBxNJCs6Uk1xXS53LRUSxcnXxPwMP",
  "key17": "5dRHYWfjwKNxMSb4BwtKnHVepJqFwZgMgkrDuobnY22bEwkGq84AZzawbyjuSDKWCfrQA7XQ3m8qDQMmh2sPC4gh",
  "key18": "2foRQM4T9M4VaqffDHLjEnQfrVgm8tRiJtU5MG8J89TpJgPydXKXHJ17xbS5EuB8cXPQ3zTVixyFX48iqUYAdPqB",
  "key19": "8vTaBbQ41WHqvfRiEnQ9nwNibRxMmv8AYTkKqAyDz285SGSVgnPg6aDYhRRvGqieDTMWbYrJKd23cZL6vcDGTPS",
  "key20": "4v3wPKnF8yhekfmJfsGKQEuSZs8wFPCDRTmukjSShBHJ4ygBFW43tzqqatrGmx6dt7wFy3EpX1qpoAfogsnYTDQH",
  "key21": "5F9BdUmga4bTVBuebsepaTxZLMz16RaQZjJMZiUjhg3Hx2rDHBVZtqkuZm3t1HyCRoNDRnCWihG1McMNG7nx8hc6",
  "key22": "2H76jpXxcD8smEbwGGnr8FZ5odwzhDe8MFD53sVGgroex9vYb73XHcjFnxnBHHDCr4hmf1PMqcMbwQWjXXb3vECF",
  "key23": "2h5XmDGQRc38H82Mq3WCra9dvcGfbgZWdsoXADx8Wpiaho73PkAtzMa9Kc8VVCJjJHXYisGw4h5RWzi8f4wB2fdm",
  "key24": "4iK1WtmKDYyF3bjxGDhC1HgBEcGqbmP2minxRUMgWjBM6ckxGp7z7jXqCVx6fHSxqfH68ZShGJEjKfyMWxVH2vXm",
  "key25": "3cPJ5PnDA1MYtyovrusiCtkbsvZoPP3SbZjR65AvUKisDpTkq9PQwzqHv9EzKqErx7UbNFYmq6VNQX7argNMvumy",
  "key26": "3MBUELb4cgmXcxvNbXjwozyVKEeJJiWNnodycpCWy8RdjPYq28K7tEueJ3sk8yFr2vvbfH5zCP6wpDAq5gYnUku7",
  "key27": "4171h2Nv6nvokcafHTf6YrniDQrtxBc2wY6XGHEbuqCHVCCF3LbSii1YAXgVepzRXs9WwHTWYuDrFL6PufazbGrp",
  "key28": "2rTWiCYM48ZZ75qDPK5xhraYQiLu7n93CARwtuCJzUxrbnKAfjoD2AwVthDr3DdRfi41ygszmuivYzh111fS8WBG",
  "key29": "4YDEhfQcow2ZirYTt7qeiKJwTE4fSeRq4SPNhRh1Sy5V3WEUpMWPGif3A7XFnNFsxquL9UknRvdPdxSSuUyRxigh"
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
