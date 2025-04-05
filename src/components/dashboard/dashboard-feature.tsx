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
    "kMYSA2g39iPbW2GQ47rswL6jpNmGckMUawb2ZpyjAoptRK4E4BLVeWhkGwUPCKgstLtk79JB3zMdKq6PYaweYy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41vkbweGsGS7CUj33sRZJAiQ86GhxzKQoSoRRsFFe53eY7Sg3qnZaLQTVvDEUGvRtsegLPP62xTHC2UeevyZJosB",
  "key1": "3MTcTQPBQiGFM5BgtTyno1WQMGZUkwAMcpkycCLjPKanUMuHvwTGZHeChXWPLn8bn1yQU6Se4p6fQaZJJTEFMZdr",
  "key2": "4Xo2CsL2VxYF8D81SSumNstdew34CbWoUoigVFkgk4P37pr8qn9yEm8mwLi4mbCnZobmSYyALRUYPjLrvToKTTDJ",
  "key3": "4MpNxy8NzNf17BHDSZp8wZnWsAt2ckUZNHu9EoBAN3ct9V8BYBuRpjovgc7KYLxda1pLiaYUddGb3cCfMzqCsAyW",
  "key4": "5g3t5cjtSrkf3yCYkPLBv6cW53AUnLUXmoa3RGVGnASpUeoo7kr2tSTkj4AE39RH3C2BXPFNbH5nfZJLV1bCR3YU",
  "key5": "2VhJoZeoFMjYX9MvDxiPAUCfP5aczAMYPyNWxFzKoUhhRn194h5eaMnDMKXGAqY3UYrh9DdyMt9s4J5NepsC372h",
  "key6": "2igk2EPhqT7CnPsdE3YEcpQdxV9pCKH2s2kYnSwwP26EpE6mtgdZpXk4mjGK1M4S8UmN4GoSnjc1sKgVmHaXtXSv",
  "key7": "ZtPsusRievePh8PJZWNDgH5Qu1DsMi4MzERYQdrpTUzQVKjx89mBT3poj83MSsmWBNxXRQ35YdwiwYt33A1Mijt",
  "key8": "3TSPeBFW6CbBauoa5My42LVyGqSCz6g6nmAoVEJzrTnXGnhihg5VSRjHetm79GFDen6FEBsnChZyem79Gf6opAsG",
  "key9": "3HpGdEp9mtYYtvPbtyXfR9pJshqLnRQraEzmdLx23XnPPQpmFvyWi2W3KspPw8GGLW5dRQsshfZCLvD47FeYxves",
  "key10": "5PPRccT3KPBPkbxcCh2RYH8rkipdAhe3Ga7kAuFBX5mhEafDesi8K9D2tGPLHyXekM55xR2Xe9NTWQ7uSeQpwpCe",
  "key11": "4VGRUqWXKGxYEf92sFT37Z6uVEmFNfZXYiRnjnbNWu3Bk6UhvWTH29HPS5zKuPbY39QtZhzv8z1yEMsFDHmc59h5",
  "key12": "4YBqCgfopak4Z3NTBwrWYWUkCTeSZ9ivkwzDwbcCEwer71c4rEgiPWJHAriYNWFDzpSZyd4TPCdSvwGXA2h5oa8Y",
  "key13": "5QqLzAfMXKyPn21LEqxZDEWas7N26UAu5mnMCiSr4sJ8B6A5qpNpt4biRMRR6iNK6LkqPwKTuq6aaHYMBkWyFFvG",
  "key14": "32QT2pquGoBFWsFG3bwg9PKj6QbovgQtAVqfk7sDMXCwn3y11SAfg16jfXRxPYGbmP1MEeoWWv3d1Ydfcs4yJbAv",
  "key15": "19HKHxPZNuDfkD6KvnTHpzuz4T7Zaehhx7hcN2eTCrk3vmWnsCQLfoN3mif3uTLcDRi2wmzXm7zz4Cj8it6DkCW",
  "key16": "5Dhrp3EnGMXc7ozfCgZ1aw7XRwtnenTCwMpgxWefu41Ne6zijGDY7YYvX2oYwki2rXiktha3raog96rFgYGhgzmh",
  "key17": "5yChFFm2uQVqomBx7QEcNv9oQXEEhs5xmpbwHTiXpqEmT25HGCghrRVj92B9feczf5QqUDzvf5rm9Rt9HaA2QEEf",
  "key18": "sTAMdT2QXyNjCRhLREJHAy1hBAsuJZBDaq3WDahF8NK5VjxXUR8pQnisxHL6X4GTxcxtc1LDVYdvcB6KVDKqNUs",
  "key19": "2CAM1wiemjPit9BMDVSyspTHChLJbJx8vtZhwfX3f2jMTS8zTDiBoj4Rx1qLoZW6mtdGq36G9gFZdWxsCTfdghBV",
  "key20": "3taVYKEctqSxrBguhsiQAuBC8W2aH3ruwxTC59s2Ct4g46Fj1Z8ux8bmGeqGat4wkxpi4TYzk1Dg3iCWggsG4hLj",
  "key21": "2h5JyKD5Pga3yPkYZNnEWfBJQfJGrYj4jrKjewPsxu2ouHWVPTnvQUe3JDo3Tqsa2sLKzXkCJT4fvigdfYHhsqRe",
  "key22": "2rtvBpvBej3dVW7Nw7h6odSqJBKn8vyGB7kfaAnSa9SSTDMkNPHN3VNAkpwge3N4hM4DARQ2iaSD62gojjGeBSds",
  "key23": "48bfYqUdoZdvrbjhpXKzqsL9rnrexqaN6BFM3wBbgwtCRJLsGEwu7Nx5vS8wPUfKjdmgZNvV2qGFtMHzxoyw4obL",
  "key24": "2NvjPcWUKaD4uS8A3yo3G7zefx4uRiijQWJsXbmfuGsTqnERaCMGeiC6WDRvcXY2A6j9A23nAiG3chsvDDtiMTk1",
  "key25": "3WBrgbSdpy5N3VZxeWy7aysy4jM6CmU6yBJNF64DYhjZ2kgR4omETPLVCdbSJPv4fRzyZhySUv7VxaTVpmFSy7Md",
  "key26": "3M84asQrzXt4PqSAMVBLSLmzseq8C8UkKb5hdgfX1yb4tdnorUDn11BJiZNmgvq5wo9WnuTomuWiwxkX9pondDuY",
  "key27": "3vMj4tnfd1KZdY9qR6GxSpXyzriZicbuygs4xTrCDUEHK6GfytVSakgedfri2LseWPcayka6xFU1huYEjiE4EYAt",
  "key28": "3mGcdL8HNxLk5V9qgEAXWjk11Gjc7j37PVN3ncSstBtqqBqEsBUVv1o1PJEZnWhsY1Livpb9YByz9yeDV7m1UDm9",
  "key29": "5Dr5qtudFQq6a18um7VEdNjMPFzt9NrbfZUFH9QxyfuvqJ6WzhJPrWJrLNnxKuEpmhY51XJMmx9NCmJkPgmn8pfe",
  "key30": "5gbuNV35B2QtAcBBETaSLBRgNCxLToTUtTnKJxmxfoQziVvNRYSgn8Buf2TLMQ6aHahUEAR3SHD2BAHeAMwUHgeX"
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
