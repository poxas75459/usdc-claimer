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
    "4EgtiGTMuoxFMJCqzxhDpXEvfj29pLf4tth6dfHJ2LMZ4q3ncfy5rjwLZMHFp3YxyFyNykhqyK5apLnZt5XAkYvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kb9BDkvHANJdzo4buEoWf6cdbLoenYSCRyqLReio9Zo86BgtHLUgKCXYS8c34DFY2BkTAxcAgnQNqifhwMazLTQ",
  "key1": "65ysoAQph1JuzZBtbHDH3RFnzViGBiojeg1tRpkxw8wsoDWVJAfoskdRJKb18yoXamhGBVCPtrbKRzFf2mMB8pCy",
  "key2": "3t4maVFMokp2cMHUaKnjiGboSgduB7VMTAGzEzy9VH961rfbrQqTSWbikzCqdsKGc4iyFRa488cx8afDHp7JpBp1",
  "key3": "dhYRTSXMvTxDHYvNwPHPs7VmGzymeSZz5BjuvioheYxoUZx1FBKgaX891vGQHp4F64h2LK31g3k9MRQrir3DLpy",
  "key4": "cjjaMt9esfbBVrHofA7aoqLcqPRUYX5LP8BAZ89XMXFkaXezrsLpmKErSXdt2mEmRGVsZCmTtFAURzHqhpeAtGk",
  "key5": "37q9r9d4xL3L2eTqhGF8HWX6fSy36KEhCuCqHvJGFkrQTPSi7Ggea8enNnUS2KNH13vSrRZM1XfYoVykvcJwmy2q",
  "key6": "4EgYdbbBzSsZyjJmAyseJBQ62QMuMBokcg4L7pq9eGP8Bc4PAGx7xUFyfhXw3YCZG5KcaS1WNpijWRNJcPaPyt1C",
  "key7": "3Hy4k9M9VkwQqAq7QYvL7XWeM2n6GzBU9YZ5pdmoNGBMe64UFBREsSojL8xwkqDwJ4oPM9M9eUsUMnAcaSp8zxy3",
  "key8": "3TTZhpVuEAvFfokMLHeGuhRUgUwBjsi2H7E4husCwCCF3c4QUhJFWbDDE8EjH2ZWmaWEPXX58B7FCasX83v6u4L9",
  "key9": "3YEBStp86LwTEYYCXSmqZt5uJ6CqZ1Y9WJRtrUt4g8YHknfrMHgcXPfFZYG4FRxiYm7AyFfP1j469UCqpG4eqbdK",
  "key10": "4tNr5xVBmWttWEsadhPiAKWcpu3dn3GDNsvRNFKs2ZhJLfT1g46fPuExyq9Rm7FzipSYQ1S5NCoZ4QMrxsgVjmPn",
  "key11": "2G8B1yokYx58i61YnpNX7AM4rYgnXVSDhWAuQtvxHp4KACzpUrFPSgW1h42HTA7sKNYH9LBastKXZt8vnkHNUG8c",
  "key12": "5teou46QQp8GmDLfzmmcVZtp3FLpEm8RtAscsCdADowpkm6WCQPU9256atYTzmrBWdqNNt1ZLzXadzbyZMn38utd",
  "key13": "3yRPMGsnkYEzBog2BrkwecRk4b3eZossdpmWP3XJ6A1kxkceQLgBqFFBwpkXkaK2hCP2gSdwDxZxqxit3tNSSW1w",
  "key14": "3fwR4v6tbFV1ffsib8VJwkFawCWJGXtgkzgV2CnJkk8xAqQEPy1n63gmJZFrrTDjNnxS8FaiRKMSDvDQmnHxvsRn",
  "key15": "88teKaWdzmVgfrPznyV2dFraruVQuKMzoS9da99dVpsEZbZGVLro5PU5rCcASmAJxgfHYw9qSmb9AAQ3aKXfUGB",
  "key16": "3wSQum9sYjJ2726Por4dtKjpr8wBfwksvEpAPqq5bSA4qjd8SG1qr2Vc8DSf8bbNPZBbmMyEBbGXELc83cXMNv1W",
  "key17": "2bSPCdGp87HhCBs6zuGqsuojdfgGgzimgncZeEr79b5pbbM6rqbwahGeYmVLYCpRCNvTfzCvx3nZ1kqt5yGF3T7d",
  "key18": "63FwnHiuk6Y2bKKLuZq45AMfpDS7iJwoxRPQSp8WJKwxe7edinAiTokJfBoVSrhpZSuCC9HHnW6nZJY2feLA7De8",
  "key19": "4nJyxSn8HbbaiCx66nufbGNb2oPXFmA1cr8ea27QQZdaK1EepxXPHCLwYAxNxvF9SWjaR6pDZqxURCCb2RhZr7jL",
  "key20": "Vja7NuzBH8L8PZ5padD8XVJeLM7qsnPyP5Frf9A8R4jc1eHueEfUVnLsVztpZ4qFGGH7PDNg31VtFiFFa8vCe3p",
  "key21": "4oQyazcKxKEy9YwBU5doPR8zqT3VS38xGSRJPpfaJu2eME9mLN7W5PsHvDaMNdbGTfb5XAGjpcD7EsxytRZ2qxue",
  "key22": "3yTqxPG89Hhis8Uvv8GkSdFzphUUXvhEawWiwYurEQ6sfeJs29RVCVkEyExnneiJWfesmsSf43VNPdfyXKUVRoCp",
  "key23": "4RGHkiTSL3efTLyfNqnL1ZiE5wZ3Rxqq6PJ8cVZjtviA2uF36AfybGVxKFtkD4UKjYZtXvW1zUFeaHhuMDRkjVzP",
  "key24": "5EwJGPKoVMWof48oeWPLH8s1H5RP6YwvPPwLYp1P35ywaDaxDQYVzY3gTAPz2rPADVpTijjHwjPhhGxDNfafQs1S",
  "key25": "4yyDfZ1hVWKJG9iarReT6j92ugywEJgpzdGR4tLdiRTkwYiwPaTkLfKq9BmEbrKRjTLY5CaYSPoPMBPHAAFWDkAL",
  "key26": "uTZpUCPPC6iCUyaAnCbEUybigKTQmmoNj1awEH7jmJh6rC7TTGMmHNTidR2VWMBARnRaYjjeMCCskfTFUmvePwz",
  "key27": "5rXhCnYp1uhE5vdzMk9EmJyPmYs2bf9dAuJVsmeixHFZCDZPMBjjBcYt6gDUZhi3s1o8DtzDaSoLj3iL8vuWFLc6",
  "key28": "59gdASJi6ZdFg5PknzoQBwbEwPcLdqd1XYK8dqN7NV44pkrP2MX3K3YRQ4K1EMqBzsCE5iTXxrdC2oKat9N9vnZh",
  "key29": "57gQD9xgLhWhnpkqGdCkzGUgKGnDVSzPecKvqt3XrLcaA5Bmu8SNpmd8pgRaEcyDzvLXnxwrq8xSPPNnR5hJ1ziD",
  "key30": "4oJXqGhY92A8vrtcfqnGELKuq7koFLbti5Rn5EZDeqb8vtWhcdjAyVFyXtWk2PXLwLfPhetZFyKeohWesjNGVp8v",
  "key31": "337zeyVqQDxBsYUdHb5UrkgHsCqh51hMqwBAdNPDhTHRjSc63eQhX7vxchAZdmoQJqpTH9ed2zo77ZrovE8CHhD4",
  "key32": "2ncYhViUuSzJYgyUQXpnMe2fbNjrFPHuPKn6BV623Qyd3ELQHDMEjfajRbQKA4g2hCB8z4j5YtJe78c5kVGXKUL7",
  "key33": "4tiqVFqsGMaskA247uvnsnBqjBegDf1ScsjQiywDEpm8pUswguAPzSeXE9ccGTUfgeSVSNfZA21Wzff2YNVMW9rS",
  "key34": "4p9Ecrfu4tDZc5dE9emGkqKpDuKc6Sa6b72vt6SUBbeTwJFsmxbJuw3wzBU7pfB84Q7fBh8UZ3orjBXwMqZJg4W6",
  "key35": "9TD4fUKniqAGdYycjXFWKrUxRxqL5sDSmZUjcERwfdJhHn7E17RdbHcaXsRZ1H9fMBDtk89iXS6SVmPFFCc4o6X",
  "key36": "59U9pKhBWKqfqS7F8Q3yYBAPquuAHZFwpUkaF8PRWsVeg62b5cN1wy5bUB7RKvaJs2nDdPF1sjMaUQZEyJARU6Hr",
  "key37": "3wPftFwUBhn5dh5j2ZrmHAD3bts4NeVAEPNosZrhHdCZDTFCa9qj7G1Lm6ZMfvQAsRfsxGDe3jtHjnULqDMFRq5",
  "key38": "2oNLNGokfa5zKCUU2jfmYax8BJTZv1aTRqz6GeHWTyV9MeVwTJYuGP3Dt39ebyzsca2CZnNaEUvGrthZ7oNeG1Hq"
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
