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
    "3tpUYuekHmS6wvwFyJ3ijkgiFwbna45h2ukcwH4R9LkixJoC5eFgaiiY14wGxh8Ta5SLiYWBNbDCAqLS1pKALoRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YdmdarMUqoiPSyTTXJRzB7ZxWXemQhjbEAQm3TEG8D9XZzxYyjEb1BK1SNDG7x6fvRZaJySxxEgmA9CLFMDe3Tm",
  "key1": "3aDfXBAqtJWQguciNorSDyfSwu9dKk4P34nQYNFMWQTqakWT47y3AkSk1vpeBXeCXv2hKHWbp5D1UKeZnaroB34W",
  "key2": "5QmrskZXb3q9JthwtQ7KSZigYbek3kpvdpXA3iaq47GS8Xv8AioEdSc6mSkKjpRctzAMP7mzwFmgYBNhf95AGbHC",
  "key3": "4npn8vhF1Nvk5UCNNppuPzzoVwdEezvpMoDffrE7TPvWnDwepC4CdT3ziw9UbtjU5CAvsiyEQTnu2KMSiTf6NKXp",
  "key4": "4hgo6i82ZVpwi2tBVbL1SCkAJcRZ8aDTddWtZiANLuSXuuqmcNFM5RVtwcL1srpabLxjo8Zc6bYqYekAyeoyh6kU",
  "key5": "4QC9UeWY4V3j3ZgY3DJa8sDn7oBgWDyZbtJ9KuUGK1RNTXWvQxvvmCYk1UP5BsahALvr7YgpWzh7Cuq23Ews8RBu",
  "key6": "3pkN7B7GA5HKjZWa6ru8EwxtmXyNFoCbSFBC9kfBsqa7J9Wy1u64reGGfz62Buu5JmFSrui3BaTymgEmV8gDAMnX",
  "key7": "5r6ap5DcCfuoSDdTmatFvLEnNLoojQhL5M3N5zDDRpPdME79y9eZ3TfyrVPmiNuG8cErpLM52PXFfmUbeyfcPPm6",
  "key8": "595GsyUf89mBJLegKr2AnG8HyR2gHfo6trDogjrqk27oRxJ8N2Bs6DecM9xWSQtk3guCSXwpYCCCazEfCc6Q2ai9",
  "key9": "33upLnhqWCFGXNcNHYQutP7tRZ8Rr6oGcHVC5cgJcrzmxsJS4PJ7wcCSMzCMkiuyAnzYcELyNGnQ5Bs72nFudpxh",
  "key10": "2VoP5oZoi4v5gQFnkLr67MccGzKmSLWnbq2JxpUMk5dDc4WimCbt67ppzEHfjdkZPyXn1iMm8jJUhRLUoqzpPmnX",
  "key11": "4mQM6Zonnc1oS4cSP8GHFV4CzWFKHmnqGyiKhAeZCB8EPKd4FaBFcXm9WaVz4DnV6c7QSVRp4z1TFqFpkJxkYq4M",
  "key12": "2sTedfNh7Bs77UeMxM7m9f5yv4crVcBjbK1QgYiC2NxJRMWF28BTQsbBSVDJRo8Fk8VNqrRVwKZN4PvwRwLKXDS3",
  "key13": "5rK3QiJhQTGXg7gue7RrWmYwXC3DhinXE8aXAo4ZgYLEBoMWKojiFdL46Xn37AHyQ9RnbyKDpG5Mphnry7Dwmdy",
  "key14": "2LxWj378vR2BQby8zkC6j3zqYVBceh9RPGKnK67S9vLNgNNzynrwXqfevjck9vUaudyurqHVXnZzRz8GUnbHE35M",
  "key15": "4vpLRmZaFC3NvDjyJ2NK5dv8CvAZiMCeonFXew8FEpb794AnHxRvsmgNP7SEkFEZ3jVqTqL3vsNJL5y7dwBXEkLo",
  "key16": "3hRpFdu85pVNsdpscS3uckizp7cW5SKxYeBTJTcu2jfSuc1ZiTEFg9PR9CXwsM7RNGQQSBZtfwqz5tJZGkD8KJvY",
  "key17": "5KKLGmE4CVm5LCiYNZiFo974ETQMoVetmkXnNVK43xCCA543FVpaJomU7GmvnEpevtc1m7oCD8LgndqMweDVqsTV",
  "key18": "kF1T9NQA2m1sBKLs1tRBhAyEveL7VMea4jQ4V7D7vGmto7kYBqhMGTKeScH6bBKYb5ZZWXZ45aq4yFxZDtMkzvo",
  "key19": "JpzAstq93AvXPxkziAvByC43D59kZR71B8ajW8f7g12ktJnrUmPkeYhZ87uYg9hAiu1BbEu9aHjoRhGXPjhvskw",
  "key20": "4FRRLvYYkJEZdwZ6Qg2ZDSSaGjgTXL3xo26Tnnd3kkcKaubpykhz49vNccnQ5689C5kG42uuZF36C4PLNEtYZWxN",
  "key21": "5qhHMK4UsXMvy6DvFB111v7u3Pe8es1kk2G1EHqywPEpgeUXkFUmxvc9STumZWAQ6qEGrhTnnCaRSDDeH1YzCnTS",
  "key22": "5b2Ksj9iZBoUhwqLjzuegRNxMoLt8FZD1Ncfud4ii94MVgGTRt38jaVDF1LhKBWmKykKfCLvD9MYDt1PMdPPTBqW",
  "key23": "4HPaCimdmqGcWixqRSkPmAT7uoQo9k6reyKJ8ajfepdTvUW8xkfR9Y1HeHz8v2WkDgnThq2jCeY2gNBUqbbi3AyB",
  "key24": "4hRK6N7WtU8ZUnSANpmRuhdeZxoPs5bJge53RmFStAJuyoqefc7bm2eNfpEMWvntbDK8FYosXixCz3x5BaQBLED2",
  "key25": "2d7K6rw9w8ydKrynUtWZvfzhjCTetwqKqzvA4gEETGGcqzV2QrkC3et8BuQCmDCfz2x4m8fwxoLCCHEjbj436yDV",
  "key26": "32TDjqqk1MEDNf1gcRzoibCy34FCxXb9kjQyyrBSeNUigAC2gAaj8HCC7MuFEYFTGFjDWCDFVUfyVeik8PPdUN1Z",
  "key27": "3UXCQSG9GMd36koLpENieC3GouMCUdUDjww4xgvvhrhZizauvhRP8nXqmRbRQnBdjpDYrx8NCwVafTmthGDdRHPS",
  "key28": "5Y6yP8vokMgjq3sKp9nK6w3mKRqgEhcJ6LVAcoHvZWPpxt85NoCBYw11FFhqmQ65hDx45U7wbyTiSZiquB8adhH7",
  "key29": "gh1p74EzFBKQD6FLyGis1zjW9mwZwJ8Q56ENEBT19GTJNWGhoDcRCotBNH5RtXfSQ882P3JZ8wVQpBG559rZALb",
  "key30": "5P9Zd4DymdNkouEGrCRT9Yf9GekbeqRExft8RRx4bcLvZ1571pxEVJ9ZRKFbVYGSSDVAqMhsVp5hnR9XQqZ8WCNh",
  "key31": "FcNNkVAfQGEMw9EsYWqmeS7Q1r958Dj7UDe6s2dxfQkRo82JnmwGTn53hpRjszLWPDgnHVzyohQwE3vRnMJA3iV",
  "key32": "2eum9WCZtnaRhVtERA8XCpsKvgvgpTYN35CuS1jhinG1pFm4NgWEAcNUqXwxhUcdiKaHinHVXUTnrPhysZLLXcoE",
  "key33": "49N8zSYQurnr6hXLQLpnyyiVtRnbmSCFbzPwqWAW1Z5ErkwfGnz4RpLkUXF7ytRV8imA8NtWcaxM5Rx7zjVho3m9",
  "key34": "42eRpVSrPcvC7xGM3YkkimjcLSE6agPLbTmkpHRBNRgi3RMJbsKXVkiueviQJEywtASTEagPZg2pSNAQW7cZvvRN",
  "key35": "fTUgXuzbDhHm5DoiL6eJdZwuTY79MRRcq8ULDLkWdAMborbEKMDMkPBsjSqH33s5HRtebpbkxftyuQUx5bKNjdF",
  "key36": "5okUQTtZmybWkNaYNNUZ6WiJjpXJEkPU5GmbE7ZLhSYSnx3JtrSM2KPCK6QZnJPXar6adv5UvsLeBohwLApBTt7Q"
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
