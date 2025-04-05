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
    "GnoKuwdCfgjEsfrDAyZozSGEVVAj9eC9jgVfKa3yMjrxTHiaqBEA866J4cZJ2rcPNqAuZeC1X69nx3XyAoaRYR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67YpfHQD6YEGGkqnuQ8Bg2A6wSFXy9zbd4rBY1LRCQ5i8UBbT3pEK4GhVtnHha4Wpq7BopBeuhB6UqLR8SRHTjJh",
  "key1": "5v45NSAt3BemuQWhPhPbqHuk5DsHzdpNwCPvwB7TrwdqWvgLQXm7smtb6MkPoUzBEnZsa5vSS84CLaWXAiYA6fHG",
  "key2": "4boxQCe2KWahCqG2HabXmMb43U1nsCtBNqtbgUFHK26srg95JXkPXz9amQotgwwuKRohtyEfvkfjmHUqq1rvtHSo",
  "key3": "4qUd8FSU4tFhE5Dj1wxznG5ex4JGNra7vto1e64aTTbubh87bUopktFaKCZb8mryuKwPWKUwYiqHXKz9wKoavuwN",
  "key4": "3qdFRTcVXM1uoPgwdpsFhh8usvNty6Hkev7oSii3pjsbvApRHHQXUBeVVeJcneS4g8nGG8xmCdHnbUx5MRgaVoa1",
  "key5": "4wBdhcqJVYLqrTAHepM7VKnAbHDkARG4BBmTqra625kde1iznkZxXxeg4bEmN2717gvqDW1KPhKTNJ2FWS6xjDjn",
  "key6": "2hdooQRVDgBrnn8pAJ6heQkHT9uBtFK7aQfSwMQdg24PJ7GvmJ8NZkkVUnHSm21k6LBLsGXYNw28RzoXj5fTqcqi",
  "key7": "5BCnDzG4Lu3X28PK62SKLengPTHVpKNJyAowciawmQ2w6JXW7V1TviYauexkBev42931VzpY9dwjMqT3uDDr3kYJ",
  "key8": "4EP1XYsBLsDq6RuETqJ9rDJRA57eX6doq9mvtL6kft6N2vopPYM1yXWiYUkyNVKvYDvLxMU4sWs8gKUrDxiJvRje",
  "key9": "4e2jLtHHNmYvcKmXTf4pf6TDkd7jBDdsGd8pbA29s8FLGs7yF3URPuhftiwTuZBJ3qN2r4h3DJ4n3g2zFgmnXVup",
  "key10": "5BtWgkVMnx1zoDF8ge9PHeKgitgAiSkVSH4W7QRxX3y4YCwXiyQ7C6pi77QsZGXkJWdx9y1qq5AxtmKxKwfPL2Cg",
  "key11": "5Vw6zfSQCjvbR9TxVXA1P49DvnmzbnmKbvamHAESnctWPwz8aa7ZjyhdekmTuV4Npv6qoRLkugtbE7sUKXLErskr",
  "key12": "2BaCWLKSqZFT1xzbVYZo6jeJWipiyLSjCYCU6DC4AeT4efnrr7poMvidNLPKMAPJ26JFdRp98BSChZYZC2nhaias",
  "key13": "3gG8brTyVwMJQGkMZZRt1EasxAEjEfPbuu1HGaUBg6e6zwc12AwkEd7xPaYCKQEFYJxNuEkYnkzahycwEhzNuWPS",
  "key14": "5EHh5E1fDsLTN82pZWHVFQTj1u6kD9EUn6koJcmuYW3WQW2jk3eydMuMgqq9DVbHDAfgHvuRqqHWWJeqS7jVypq7",
  "key15": "5eGpr7kQkZZL6sCkKFhGgHGfFFQxJfgrz6Fc1WsdVzSvBNzXpwsDD2SZpvZjqaM58bLQ8HEXhgAFnovTLfQBDyRS",
  "key16": "2pyarq59ugfDnoRCmZZYm1aotM4eQhS6M2uG8hxs2awZKhk82os9TPKsbJRMBpN6rK3QbacbmMedjvRUGmpqtSCa",
  "key17": "2hysjY3sDgPmJjZM1nyZJycNmDgf2cYjNFQZw4nNaUseUQoXcsQFY9RHScgcZHJhPnuA6qivAEpx7MeTv5Tg4DBw",
  "key18": "3bpeCdXbUUcYhqw2HCvUAaR1U4jmiZQeCu2wVvcfq9uWH6qedWCJ8mAi5DbA459LqdmYPPHRhyX6WBuzstMuobMN",
  "key19": "3ZmVHviWrHyaYncKZjA4nLeDom14Ez5tiDkPwGynFQZaENWiTL22nddxVM1xHbzLCw6um4LLUceJmsmrCrSeekHE",
  "key20": "3FYGAYk6uSibetPQYYwNRDhXSDdty7ANV7RHAyvPeGNug6SZ6WEz2XXjDrX3NAfDC8dzjef2k563aoBkHyde7Yvn",
  "key21": "4Bj25Bqmv68v4hEg8qTcgC33BxdhWzVsyvibQcSCDW6v1ViYVoyXv34BDDFbeCEiwM7FJg7zPGzzuQuaCf3Zsrqm",
  "key22": "3BeG1QMcP3ozLMyBj5oimxKAUG2V7dyfTpxrL8r7jXDvB47tTkqmqPZGA4VTaVK57kSqSAZLXYnm6Gj5VqCVh25H",
  "key23": "5zJKsTyU56B4nRPamMLo1KcMDbsN2oSxNxXsmvVCqAdaPFG7YZdzzoGfrDetd5NVPmJKGJJ3UfDEQzrTg8gZsVRk",
  "key24": "59dvsjHPaRhj1KLDhCDWnECta9zK6qJB4t2NC1ubEab76aMZVooPH4cvjoKkhyMQnpDyusAeB2XhjuFtvoEJoxWA",
  "key25": "gKcYRcUEjzNSqTU1Tf8fy8Wr9BtEkrnUByqgHTXQTspUgAP6x1wsM4VTMArrQvKZcVUCRAQprD1P27zWLczynmV",
  "key26": "2nuxkaKWZTz7Pu3AyG276D9u3nsfTiyPkjzMkxjTphKuVEpZKZ2YrXvSLYNmGumun3BPBwCVZH24KDqVvq9fXiJe",
  "key27": "2PCR5WD6LgXvAYCfEpZmeAbwLLYNpFxY1SbzfgDY5vnT2NNAd9CgQzW5dp6da3DJdo9kGNWhqzL7TiqwyQMq1mTc",
  "key28": "9KsH8ZVddAKpos1p3nWZhA7XSx4D3PKVgdXfka9NhtPAZEmCAN95UpYtW2Z9WoJBsEeei2373xsXDiMTsMhDMZS",
  "key29": "3dVfysCFNJpGcDobCmkStaX3g2ZB95z62yDP3dUPMKcxgjYR6z8Vuw7b7yLQZpxLyufRV9n14iQ99SRT9xbV8iAY",
  "key30": "2Ky4TKQbzZ5VrU5Vh7KN5JopHaPsBza5imLZcN5xeDWv5U62Sy6w8fgUap5TPEJj3RBVzNv6f7iZBGtqhYMQcJj6",
  "key31": "3sG3WyhKwpmBnZAxC1LB9SHawArsCrC6DsbQLMgYCG14WkvaZZ8DFuPzvqF93UF5fGaPtoHE4iGegJcf3hGu8Qv2",
  "key32": "dbkTGmArQXpRuPodaPUSeDMTGz2At2x3GXdVdpHPfVT1oF9pxdmAq2hHJzsZC18qTvX3xeFfpWZ6CC7ZrmohQNe",
  "key33": "27CxFTgo2rW9qijAmDmoaKLi3Evjg4umqPrw3sMXRRoQxpdSeDK6qjMaMVnKaLU4ysGoybBGyct49FJCN7Ts3omk",
  "key34": "4awF9DM4nWDRHeJrsouDdKjnVm9Gb5BvfhAUsDgjtdywVLV2Kg8X6nsb3YM5Uva8egtLKuTwbSsGeNw6BqBPAKzJ",
  "key35": "3oMnnGpn48yE5rub8M195gd8cUiQyNsUSn5yhHZNWgor4Q4YvtEkMw7td9wAJdrmd8bAGWmScEZrTBjAG6KkYzt3",
  "key36": "2exPUc8whpg88NBMu8ZnWLcCTcxdJBNnkZ1apjV1huJFFXWstNYSy7Un5iSD1Wk3bhMFBqnWudBTzRkWYtvNDx3c",
  "key37": "25r2XCaxWciStZmY9HhAKXSnEmNhJYTWeynsxuhezDAnNPCsZ1nJg5odUTZ9Yi71cLoichVNBQEiwfgYMMtDRDvT",
  "key38": "U3r36hcVF9pRSmi6Cx6Cxow1oHAJBTUi7JeHS4vhMm8AKQyA9Z2X55aSvmV7y3hCRKxZLTXHLEF3fNXudc9oCzh",
  "key39": "SxHW2qsYDdevgKZd4dUAf5xskx4ZafWMnNF7YvMaAG5Ht6tXQKVb3UWmMRcCorXQhgXdiodSXeWbxveS8FWsP5P",
  "key40": "idya2YDquMJGM5xFokFdRDFzRXmMKDtR2vKAQqvurN2PL3AGP3GKkG3Je2mZHa94ysEmBSAgYz9ghjrdYEn1enZ",
  "key41": "2q7SoYHnGeq6xStY2RyDs4K45eyCdVSinqedsFf2FBLpx5HqxCh3rwJXCprnJKpzxC6mFprCYJXM2su1EVDQVsqR",
  "key42": "44WLpgX4dgttjGRVtTj2tfhXXTz52MBt1RDtj7GUJeTF3LhgipdW6gXf3ZoXx1UUxPaGLF9EaKkWycA1Komkks6H",
  "key43": "uvucw1PMtPyvjFNZEBRbqa9HLWetZ12fgwsBjWBYfG89gaJLgY3hBeRKW5Y97ApXvQdTBBg4eqMo8mBg1kPyXpg"
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
