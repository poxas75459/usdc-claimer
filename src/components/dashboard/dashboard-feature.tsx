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
    "Kzr9AdkWhztNpocHdshrLuZjL54VKkQGqsrgVGQLraZBwCb4ToJ9mHqymincwRPbPNq2CfEhmq1T8X5fkjggZb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Evywq5xT1GCh4NJAvbu69CWasvSEExQD4Ki5c6tT7XLVzVTVznsukw14Rid8UrwG4NggkmGAUgQjqxwQPJGwRkM",
  "key1": "2XWpjBrLLEvszWkTQEDsrKaHMJ4deo6KzE3neAu5gAvjzFTwvnzLTkz6y1HGQ3CUsbFsyGeaiazCiCwUqC6hbpeK",
  "key2": "47bHNQASQ4DEHM34SdWzUc2jQyXQDTXit4F4g6tDCCxrbAU9WY1Z5Cb6Kq4H8SeQ9VhavugKaaFeJtLfA9nZEMZR",
  "key3": "3u4HKuzCuXfpxughfDLYBmPBnkhnWBr8WecPLg5by9jHGeTg6qmio6migPz7rbNSMK6P8FJsE6EHcbHsztVRtaKr",
  "key4": "4Xn2aHQdbePUynG9rJjLR9Vi5J2xaGp4ik1jws9gpSNACxLcMzhtixB7v4RK5pWYc31qTGeUnrPfWBgpFUVZBC2v",
  "key5": "V2GHgsasxJi5vx6CAhkjpbXiaWmWzDyptEBLnnz16juBPFbgTTM5JhRyxvc7cfQu1ojoMbvLr3F2NeXZJ5QEMm1",
  "key6": "4RTFVjUqmcqpy9gjVsZHr1aFKETj3pEensiozpx1tYDGSpXrvFfsVFLRejdhUHRoCqTFMpywy1TLcDeyNNiKaZ8w",
  "key7": "3yyfARYVrPTFDzUeRdvXvnw7cgQNXAUde1eazPK23cf5wijhbv7dTsKFAdUw2VTT9ZL6cSWCDpFBnRm4sEe55v1a",
  "key8": "5A8h1k84SEjX1YDy4kh65Bvaznee6fjxtATwQxCSr8F4k19fGuszMmyR5zGejQV2t8hvDEPkfBp8hx2EJRynE47",
  "key9": "2FdArfnwS3T4nY5EzBSHbAE7UivCtBBoazVAZtfvZ3HCn9WimUK8WWJxDWwFyQqu9teEHyavXoyzcS224UZDmaUz",
  "key10": "4qPpQQ7EQqvQc6323hUEaRPaweXPAG6C1n8SNfVeJw2moVisfJWDdRotQTRzKwyH7kmUPFdJwRa3YB2TQKpANK4r",
  "key11": "54ogtbrkBF7vWz7PiP8xwARFsHW1VLcGxrnQNeiDkE4Dw4f1Q4NU3MMoPux2fZVcJnACbEGAJ6VHrTZMeX29ExJu",
  "key12": "UXreR7eim3Mb3sNwgTuek8u2L6PeDLsGcdKE5gjeetzwqUkeoEcdN8jRQiCyRR9SpGUhtpUJNDRi8zjQznE3xhF",
  "key13": "2jU161sWquKPJMvJ7Mg185W3u3jpyEQcaUHCzcCpNqHS8iCSDYQP8oqV9Y6mvaM7Eu6SfrmFAfph6x4xhUwYfQus",
  "key14": "EmSg1QQfUsWR7wwuEoN2acEM15cSBokvb6k21SsuzGLA4x1XG2ZMjfVA6SEDtU86FEVmz8XRdiPjCgJ3U1Kuwk8",
  "key15": "5UUgudCuywDA5vu7n8QZqL72KQYVRq1coFywzx9Ag7ecvFJSc9bV6s9igZaCZ2DKV5YKEriBCfJxBXjXSUSFQoUp",
  "key16": "dNNDCDfA6zAsKhkCK7rtKqyjiKmwmvZZWbmQ3crjwmsdUeuHpAFJiYgkQAF11a7SQbEC1By7QsWKW1JRCWbHZ8c",
  "key17": "3wTes1U6W6HDLpkoLQQXf5RJJTbXG4Su3xzkuUS9WMQUYAAyoK4KAGRxLkxzkd2X6HdGmPwp5PEdwq14xgJ6Jjuq",
  "key18": "4ceWndB3Vu5RXuDfLPmv51K3KJKaimrQiUop225HiPkowPbq4v5wzixN7dFUptQWztE2oriGUDchH8gifBzFczrw",
  "key19": "3jcCfb93wCX62zFTGNaHEZbxFwkcC6XfebsZTgBaJcoBN95Tjb6Dz7guWdciEe2WSFPiPmKYeGC2YaL7t7t4affT",
  "key20": "4Ek1GjM97XokyrP9NgK8ovpff3a76wViAT92b4MqmSaABC3vA9m3e75ukzP8YVQxcam9JobuKtM53deniQz9NQBs",
  "key21": "4sTfBXzMHSRuAQ1txtuXDTQWoFwgw1eBRhSN5dv22FyDATyjpa9oSjGMNjuKaUTqqGzyHJvhZYWwGPTodtCtvPuE",
  "key22": "D7jrkcL6E8mfNFeK2FoToujE7RNLS6w55cU2bZoouubN9akfreAZ9v3LrWyt6PnbXD2EaAzxcAUmnPYoqG7DMuc",
  "key23": "3d92JGGC5vdqLmmWRA9Yz8GppAifAuLjtg4ES3hG6G417P6EfoxpLWVP6TwJmUs3KWS8VGhrqFXry9RBeFzw1HAK",
  "key24": "2ai5k5X2TFBBU68w3sCBKWf39q1pJsByqE9AY2YebVkAYZrq3WQQTaEdQA651kvXUencdEWaAVSEuhTrVcNBEC7e",
  "key25": "38YbQLYt74RH78DDeHfJ2raEMJMDRm2kir3FtxjKBWrMfSkY5GL9M2oxXB8WLmiPfvVxvyVu9gXBNdvB9W433rnK",
  "key26": "nWWbVHY5W4j848FFnYoMRNJ3jAT6sDsqzKL9acBiSxnmeHbXgQY1dYcXvwCv49SzCYzwyZWTodwHBnGbkX5EgHf",
  "key27": "3L4WsK1pu8ANGKyqsiiPREgwAS6KC4aUNJsQPwU8at4HwGFWB6fGMKWxQ2iGnS5mbg1nqWSHTgTpMcYfNE1mTCy5",
  "key28": "2AeL36e9uVzen9juMzRELJqg3YCiMyYsrDmuUqFf7kHZyMhMhNndf7vNWJLb3vR4iiyKF6X9DKjqxiNWfTF9QAQ1",
  "key29": "4y18RCM9pCv7Zfmnk9euxRJAFBhmLG6qvJuC8syKDuy3PXAYAAPx9EqmpeWWRVNhBjhe2z1RACQfP4yeWYS5cUZH",
  "key30": "aTH5EqwJXCoCpUjHYtQfL3cVHZ6tfYqdSFeEbZBw4eJrVE5GACCcoFButnv9oYPh5rTzrUmCdTwpTSzXu3EtRGC",
  "key31": "LX4obyQx9E8uus8U1McinrZiqbwqfQapzkVCBetuiEt9McFTQJsHjoJmTrTjRWztyoa4QNHsDG9j5C1XjvQPV8M"
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
