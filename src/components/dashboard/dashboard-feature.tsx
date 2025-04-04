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
    "4CjPf4XwxjAqNrbuhG2wWGEkkpZVh1TvSeiv8kw3F6ZQnBJEQ9R2iy1dqrgvqkZ2SKLKhEZHJiwd4LDN2CzaWL98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xTEE8F2MAAFSU2ooFP8Jg8NBGzVtDbNS4P3TK89dFnsU5RnyLfbBJ2YAva8xBZVyCJcbChbBG2Kou1qvtfJaWCm",
  "key1": "3xdtt9qWDqaVNZ7MtekwZ5gZHJYPnHw57tmz2YBvkR3BXoQnedjUyZiQoqwXBRCeF1MWFzJ1eN5SvQ2a5nBPXCVK",
  "key2": "4GVQYeZ1ecX61YMar5FY7U6775prXKAjjBiMCoFGkMuSuCSj94jb6QCswwxNbqJdxCLwJnjuQbtN6TpeaayUVkaT",
  "key3": "8cDH4oXVyMzqPmaixY8DxYRkrjqky1c1Zbx3qbqPoVPxiup1BfDQm7eVaKeVNgNmU3aDwVoqH5iJRXrNQiiQotP",
  "key4": "4SMMbCnJcsSwAtCnfoSr2oRHyR8dFt5DQ7GDA9GDJKeCENsBpF37Nb6gPXobtsAXJ7puSYxorfe1ZtYjCwAYw3oh",
  "key5": "5QRHiNAZceigF9dnF9vwiYXhu8tr6ULi64w4p4TVYhT8rjJ7Fzdo6DE7A32jzK6MBkmfqkYPBw3RLnty2GqtcaQr",
  "key6": "3jSxUeHMtddtKqumSwQwxfWUkLA9ui2gwzooG3sJGbSNtfpYMJD8yh6fnSYrY358WZJe7W4RyTmHwpWuTLpLaEkU",
  "key7": "5JLEuvnv1k9AyceLhFuV9mXS7FhHb3Kz56thot6QXKVJz7ARSFbWJJKpwEqtBv2zgNZnkzLmb1YshGnETRdB7Pp3",
  "key8": "67jfjaM1rDEae1cFbRVBS4Z5jQuetAas1Lz2CCxvQ6ryhpvuMhfBK6GFfUW3YY4pgcRETjco56SQqDZK2P131AUx",
  "key9": "2hGmbKBWR22S8wQpQbJc5vifsRRng1Fx7gaZv7SCnHZovZc3zDTADKhAczZnuBr6ZhsTHfnJehFCc1qfyAX4CgTj",
  "key10": "3We8hK3iKqK5zGnz8Q6av23uBiQtmEXzUEfu8wtMk2uyG12Qcd1R3rfT7CdvRUHa5apgmoFLv2T9DAov168vRMDs",
  "key11": "4Uh4USAtHoRzxbPdhXLPayDjkBmH7VVuNTv3kGniQgksxhWfvjnnCFLdtzmnxbTFn3T3FdFpe9rMaLX2FMJ3QYfa",
  "key12": "3Bah5bjy8Hue8hfPqLkj9eKpFGFfZTf6j39hEtq3fhAVtK3Mjb23xCCgiCqaYn6iB9UM3QigwEELUBqa3DHhuLdM",
  "key13": "5tDMNpACoUPB3vZ89UT6u8Z96E1yanDW4hyk8kBf4ohDmh2gwLXWUxbnuM8RvbWN6g6PqUwqRDVS2nKG8KTKZLqC",
  "key14": "2afQvBxjj8PP4BBvRpVhSqNeRXjn5szz3qYfvJgrHXtqYZLtbQPBEewtbfErNk6aMGBywYk9gGihZ2BJQMDGt5FY",
  "key15": "3zD8QJYemZEBNhZGyu7mnPr46CTWUz7UVFLBK138Wtb1rmc54jAMJjA7riKgNNgKNxARpVDX7hPPRzgMgLDh8may",
  "key16": "2x2gYyLBFaUqUSVbDaXKDmAiVjmLfwz7N5BaZyM2aYPaA3gdG71ywPdh7fY9FEPZRjKVWCg18T4ZSZL583bUUF7u",
  "key17": "2VXut87SunB5NPbSJJDiZENQRLX2Hh7PUHmEUGCqHW7kNFf8GHvSWsKm9DLjer6WqxjAUcH9LoKaFeoHgKWEv5pb",
  "key18": "4pAAWoch2LggeJtJ9WvteZiokksGgY9aUGSPHzM6wtyFNhKGMrkCUWQE6oFHC7zBGLbUdutkmdh9iEEg9KzTUtbV",
  "key19": "5kk2tEVvxfyfq3XKdKCkjgeHKEUx9V9BpETExYWtxwB3VSgX9Gb3ZVhAQEsy8Agwc7X2SsJjsrpGCXmCpAsP57GF",
  "key20": "2TDjbxkg42Hh7s5bMDpBLVsrWwiyeUSf5P3YBE2dgtnfk2oiGtsButKHHBj3wVghV5jxD6nrNAJtM1mjj39LVz28",
  "key21": "2ey6wim8gvSinrGvgPMeH4PW8DeoDrHx5GfxfpfN6ZA319Neo9Uw6vLnaabpeSmYs4p5Jd1u6mdQt9Bp9NyMTdV4",
  "key22": "5L8qwq84rNtMHnHHMyzeV8SQrvQ33VDM3Pgny6fhfHWYDpumDUZ4cu5x6DqmDTY8aYapxqYGq75Gw5DSr51Q1NQu",
  "key23": "j4uT1hYjo6zCD6xCmPLWWaimRg1iWoLG8m7CMzDaTe1oZ5VW8Myb1ekfZTaPAsGLioRTvr4UbTbSqNsJZ7J2vgp",
  "key24": "3yJhs4wK88RpjsDBHk55oMHcXNhNbkK5zWFDDG4ppwWqFHmu5tXKmfDdGgyUDwAa9xMRZmBDtHzkC6PaVGnLDyKX",
  "key25": "41gKpAFR1QrB6f6JQXvwFb8L7ZEqiA4WsagvDPqXbAnFGx79TxGRq3qEUDJdL4YmFRJF1PSvuFRknXk7ucztfJrh",
  "key26": "t5MfyzVgRyCAmbEuPErv4anyFiZJEdeHfZYet9bbhkbNL3zwXa1VDqvcmzU5NxmrQJaJjYBuffDTyd9oXizn1Cy",
  "key27": "qdQa4D5JwJqrqna8TUiEWj8pBPQTx8qK9mD2aB4Vjdz5TUy9E6nh8qGdudFVCHcH6cnK9tXBYC8Xzu8HMyjPbXA",
  "key28": "2NJqMaGqVj6Q172jrNstFTRQxo6eJ8Vc143r8Y3gNPCDwpqmYNWgf3nhbGkVYT5dQMMTFmNsvGcTozYNaQbnNPQ8",
  "key29": "2JgZektqWgrdQF3Hcb6i6D9wpN5GAqPfJsxsCEWxXog7fw6uhny7tTG6xvZFfZ5guu2bNbmciBhBphBnEDbXBGAh",
  "key30": "2NkdyvhMVhPvjkBwEjF1Vk6mfaBb7FPAm9nKAwq7WKPcKiadRyr8hSzByXytvzVR13dtKqdGrQERoYUKuNiPXhMg",
  "key31": "217mtbEhMSnacpJHuhcJFtGrUH45pJ5b3dei3xDZ7etzCZroiriyvS8wsec42oJWM9TXu9jXxjLiSBFLAUsoMYhg",
  "key32": "4q4vTqa8EzZ7ovcR8ozrCqp6UewHTjFLBcsKmyj6RYGKLja2Tc5PrQU2AFUfQjkYZ59DMcUxRcvLsUpP9DM1eCNq",
  "key33": "5rtS7ioqWzMEPPGV8d1UZtKJq3ARDEkrAJGKNKaU8eFrbTB8TzBFHKyTTTnzo9ZqsMkHpD6FnyUVuaq3UEBFD7CT",
  "key34": "4HzJLDMnA1qecQt2v4NRbgYJXMDWqZwqQtL15PRbimuyysEbdKsZrCnFcxwzS143VbBdDjA9YHTiJAWKjJ8LNZvW",
  "key35": "38mBCm4QvCdn5o7miTpqx8yJuuXxYTaKMhXKRpsWN1nYxZNbakgKjZsKsqcKGPWZzarviZqKVCPmjMbvbwrhc3xR",
  "key36": "B2BtJVUd3EoczZkZVDkJ6GcxCms24gvW5Tk215Csgf534kb37LPLvNJmpXnmusZvoD7w8geyw81u4AehYdsJZrc",
  "key37": "2t7h9JToh5NRFsCo4KoUBV3feW9ASm7KfaonpGGwpiN1DemACYyaz3SoFxR5WQVQxdTjpEBnG1HTLdnfCUhsDi35",
  "key38": "39kquhfgRMXEysDevBdxHd4WWdAPofdLk7arXSTAG8tDtvLPgvUAPFZw4Vp2RJoaovuvd6pvg91eQEhcdVX3gTev",
  "key39": "5BPNmnUUyykvsMqYY1TGoFDDAAiJXMRaaeehGjVUo5HB6ckMddu7jMBCoyfyHD41xHmMEUQ6StZ8JNQtP3K6sQJd",
  "key40": "2Gqoh8WfcujP4UDdsmiF9xQdg6DPKBdnLTBUYboDouxGKKx6khT2c1vbLHP6bkUQBJskaK4TnJsPDYsAEjaFPXCN",
  "key41": "47Pd4T4SqqwDVcyGX3Y1sttzPVVXGHKpivrDL1i9erC6nbDJzTBCZJUrhCd283YzH5ze43BNNAhdvS5JC4cn4X6W",
  "key42": "4uLcUi628F6ScGngypRR9tXXLiH9zAcQR7fDkbxdRYowqyXX7BdNVH2Dk195iZpkhR2T6k5mYxRDLk89jfL7kB4Q",
  "key43": "48fq7r6LuvgKAq8Tu3qtoGQf4qoVsUj1NGBnK3CfVDup8RVVF13Sy7xNQG2ReSVtWJhhwbeUyy4dLHZV9kP1YcP1"
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
