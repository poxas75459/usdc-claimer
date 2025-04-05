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
    "3ZogiYqnNHwDwJ72aS5DoDm1d4HAg5eBTnwEAfgGh2Mqy7BvNGW2pFMNfFHFozbF79vLLG9v6fEPWDGgeDd2MpYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q9czvY8CwffSEzsnBYj5gkvAeYmUbT4Fu6aL5ggLnFNuVU4Yk2mrZzAz7LeaxkRjvYoUHACMffEmm8wCUtGP5dr",
  "key1": "4TXjzccmqPvigL1yeFfLzQKCcWKTC8eccCo85pmRorjfoKnudqPaYAKBNJN7yhkWu2tzw6VK6rgqdjFMP2pgRcsa",
  "key2": "veEcCyAodn7QqcoFvtMbnUqQHKcSmSv3VZ4rBHyRLpw236hmHDw2noJ1q9xWT2ktgxE4q4r5T2JDCnVjr19Gc3p",
  "key3": "5E5dmH2ndMomyPiZvFrKW4ps3PH734cD8xgsMcq8Hvs6dytjjF1JtaQ3MCLAxdT4mx4PrriDMAREzsEFujkffcr5",
  "key4": "5cFnt9buCpB8UYT3xr5J1hUza6erZCdNQhfpEjN5cEB7ZmTFgckzF2pQbZPGCsSbqe4GiC7Pft85XLU6pzKU2HqB",
  "key5": "3rDwpDphTYnf1XSc3je7F9p1SN4jWigPd76RZTXFcbD3VRSbfXfdRXZChtKemMRpxmSKpiyi414EE4dFwgUGTfNd",
  "key6": "4h83byhYYXT4A6Pdz3dPNjWdr661oR3aALqJNh3RaLGfRAHt75r1LhE1heSqw9YQW4uiCDrY5Hm9aTFsprPgy8v8",
  "key7": "3fCkkfFrhoUqS5vcKSqKD3GXVgvEgxAHTXnNzhJfEgj8hjEikQAnKytcibafzPiJ9FWLGGvTKJL5VJanZMKk3Thd",
  "key8": "5n3P4fx8CvHVjWSRKrGq7QyQMEHxYs6Zpa2deEiRRyraXEb8Q314c7TYeCxF76XxRiMfzc7kMd92upa6ZBkinZeF",
  "key9": "SecuHwZJPKfPzLRdAV6uqTMP14zGUB4e62mq3kBUwG49teXtvUbLNWjsSqDzyjFDaMhsuYgcDmUgEEgsEuGepKq",
  "key10": "2KyeDa4U4L2rSuKk6bEQSd2ixKLMcWrhtPqv166JGV56iGG9VcN5ftEkJfWmEm4wsCWvzAgj6wgpWFvUCYKiRr61",
  "key11": "4pMyisSqxLnU8tvW8Z1aqeX44Xsh7pcvX9DixhGf8nsVkYiBvZvidvKcvqSfJft8ymMHbjBLHP3KqbBszVfbzStF",
  "key12": "5FC3MZt1XTDwuhZWnthpSjrcFfMup4ataRWEDmRQRGMNJ8HDZ1FiGCZ5NBnTaQf7J2VpVdHaE1Zpcd6529kKNEX8",
  "key13": "4Kfe93yowE9oVSpTLedgaVnEdUiVMfm6YUoSVRUVQfHYB4Amwrcwer4q516fdS6ZvfZXbFwhVgEGjfUcCHRhd4fW",
  "key14": "5F4Ef9VXXXb9Q2jjtoTBsFbmnQ3EYZjhskt5zFv52N9eULBZWV99HC5KhQefhdPf3yTNg4NosZEtr2rquF1R4fFg",
  "key15": "3try9NwF4KFSS9FSGmahR3Uses55vSQrqdY1jEVpeZP3pG5iQaADUdH4u2U14kPw8UMGMZM5fD1t7V3AUGodTXvN",
  "key16": "Jp173jRPYg8cqP7VLZ3VkYGDfJMAFV4zX4fHSyZeH8ScT19q6N2ECiLsoA7SoyHvk5GkqioL4dUTfbfbHz6iuLe",
  "key17": "5kqJfUK2S3Vs3BNBMsEqz4cheR3a1vN7xj5kq7R3YsE4DxrATypsfZgJWwj157T9bCqyQqCfupEyuQVZakTsCdk",
  "key18": "3yGSLD4ysvqnFnU4QaLzkdex9hdRAa72Bsok3H8oYzSzRtNdwUNdqsUqAHBgVfpojE2HNGGyFDSWuNqfCSSbFiGu",
  "key19": "Y2na7yPVLeSNt6rEnxC7GY9wDDLiM3k2cEeUtaD26Mm7LkJVjuLWjroP3bzQAE9A5JVosJGEY6F8DytdoHo9Ej8",
  "key20": "43K7x6ibos4k1AbJV8LUJ2wHeihNfCJNdgMnE1n4LUtxBCTndnLbFFu96HBYK4V6TjBdgKbvJQ6pgX1Nh1wXuFQJ",
  "key21": "2dN2b9fEQwLi4YAMB43xSoGCENon9ngiruCBpsGThLSVYWSxfDyDETfzPaUXE1EMuwZ2GbfrYeKaJMkRDAAadftk",
  "key22": "3jDStmAbMkVt6y1vbbE16XuWn9LC8otWVypkRmFWGBvXenD71YcXL8t9DGzwWLF5k4LzPMAi4DFkKLMZAaNSDJc9",
  "key23": "4gfEY21wwvsxVy3AuqQPtw3hcTuf1nrfHDt5PRk1cpqvh7gvPV8aWP1GJaTFxzeuLpmNQxs3D3aSG2cRekY6pR7E",
  "key24": "2scrk8RM15rnzcgtSGc5sLRKUm9Qq6zx3yDmbiCCecYExfmjyeCKTLpPGCdeZi3tK48EkWtiphJtF7SiumKVq7F6",
  "key25": "HtbznQtRHuH4bQfR62taUZ9Quxd2aHu8zE7Mezdtf1sz2HeZCW85ZGskJpvJbT99XESjtZkBGQaiZKdSxWpUYFa",
  "key26": "4bp9W7NRCop59GFMQ2AQUJ7xUUtByVtnZSZrjH7VjqjDgwvXMezgtK5hrAQubXSbnYfnnCgU68XBkTL7kNyxUU8Z",
  "key27": "PzLJLMzoiXGmTxDDwoGYEpjFRY89nyrHJs6wphj4Xf77eo6P14PR22ZNMxnrXJytVMN1zokR458FUTSpV33K6CR",
  "key28": "EutDWuTXHtySd3PQ1mGKTjQzEJVeH6ygjSyDP5KgACySFmBYY3WmmrQSo6xDSt4FBMsn22TWQDczfVzve27geWn",
  "key29": "23sXToJnQt6LgRG978VbfnRDDxKMswPeXcHeCiJiMF2v6frL6tChtYjyPY9x8nvQNNCEnGe4pBxthhSRpbfnB2Ff",
  "key30": "4Mp23F3U45p86Kpm7YpYZJLrf144RCy72QxaxeB1TrUicFR21itLHCC6uUopE9icbSE9BpnhN3CrS4oG4Kt5eAwh",
  "key31": "xsNfq2vV1Xh8SLsAkvMi2Hc8jMARiTy5wjtLTdJ6YrKA4mS82BrJvM668JKUwS2mNrgaUidvv9T45maAkAQkqUc",
  "key32": "5yopYNf7HtBZD6vGVYecxVGYAPsaNaZbJvYUrAGiz2teQKWoob4bp7KzevuYvzPsPkdPSjJrajWgnsJXJ99gvZWL",
  "key33": "2S6vjScEH2jDktbGEvfTorEkmTKN92j4CJb2eSCwDHbeb95ZagdhyCh81YxiNwS9E7s6faEe35fXVmMNMA5jSGUY",
  "key34": "4bLUp3QgvH7JrwtfMFVhcit8CxAPjt9Wc58qzjircJD8zFQSoC4kbNRB7kJQCbRKUwXPSDeJpPYZY8xY9NsfvxfX",
  "key35": "2iRTrz1nqMmM4a4ibh5dD5a1pS2EVcEphwXAwExwm7Gj2ofLQfXegu8zqjYwkL8EDw7gF34TqAhoG3NoDHHiikYT",
  "key36": "3r5tN5YxMEBc8H5fvJx42MEcGe6vXBEr38sTpVwnvJuPaNyuLu8ifEH5buVCdWUCEn1v7UXVmnYHThTmFT4BEeLJ",
  "key37": "3B7runQsLaBcTmGa4gmkd63cmTBeFJRJGhU8Nnhq6gLtnNqGMybczpxUNwswLh8Z2QTmpQz9nUXtVXQcKJbNVJ9Q",
  "key38": "2xyWNjEdBVJK7RCJxYCVbcKSj2BKaFML23wLRnpNei512SA7yp9RfstCizr4q8Zy1isUhaRewfq41mnLNAVw9EJJ",
  "key39": "3pMwFitBqUbTyZpwszTgvExVzL4GoSPZgxVwWGumpMDLPCWkV9hiJHWFoiWwLxVxFPokKYz2ennRs16EMJUKTqhB",
  "key40": "3rfg8XTGMWJcKSxFEBAKB44jtffaEhazBNxMBGbXzHi4Vpwo8rSfenLFfsCi1WQK1oJRNT3AcePjLMTy4usGARin",
  "key41": "5tC5FXC4eS6EWqbzVWm6G9RaxcT4LVyB5EDrXGMS6XbmkmdRNZ86WJBtMnZKBCEZQucUK6UBR7S89QfqRErQScjP",
  "key42": "2SnDk94roWKgyHNnd8hPHB8URGHaDYbXtzcQWKare475EmYDzDfkaoHfZVmaHpsaTwhKS74fLEf7ZfZhUeVtGXNS",
  "key43": "2yJrcTRjm94JpDbvQsHQF6o4JMG1jAH9DNYZmdaj2inLixNBrZM8kr7yehv5mVUBsH21nUbpk9v7GARXq4Jmi6Qo"
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
