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
    "66nyv2cPNS73BCKpsTZ5iAuVzv1uR5RSPYGTkRgPYvsj22p7AS7gXT9UZCM3VouCgFRZ4k7GpGsPgA8nggeKPvSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5drMG9mU3S5rs24Z6v52urZz8SSih52Z5ncZYgoxh8o83sYigjmwVZu6hXGwE2GaSGSGv7Hv7Gbz2vJzWUf2DBwC",
  "key1": "4utxHFoTHCjFxrgb7CBTWYxKoQ5Uwjf9uWDPBFpodmTu5iystupGHVP1q5akZqSKwHtDkXAQQWwtse3jdizypTVm",
  "key2": "5kkdMKVzqQP4Rfb3oR9qLqXY8dJyEmrrWGvV8jZLWYoxxeDzs4DZVB3hgVk6wRutfZ7NaFXzb9Pdgwqk28mEVF2W",
  "key3": "PSeuhR1JyWqrriWCer7KfWU9Yb1T6PjMwdtU87NgHJTs42XDjfj5PRm9YReFSiJLFEeRgc9N8BMG1jjYfwTqLjj",
  "key4": "xRkD15iCJPAYQYmu4BS6crd9qm8UuZAMAwNoCmKRN5pF6TNns5uxs4bDFQWXVucy5pepXg75MKJDDzuLSpkmGKP",
  "key5": "5YJYH5GoKDXEszRujUbRK77k46QFPtg42u5539iu6BPM99HyezZGtCLVU1iyKhogkdCtDPFuXK1P2xiFN4QyDGHe",
  "key6": "5PjaKXUSqBVMtt4Ejrr19wsy6b63Lf9ReiMntjFxqZpQeBtUZp4qjSKSbGemjcKYGnjAC1vP8fSDL2hZ1QbK4o5T",
  "key7": "h7ciftTuBFeZymLFG7C3u9xoW3TruaPNsEG7fCZmqaLTSKocZRfxLuvJ5YwqH5nCFmCKbCuQPKF6Donr3QVCi8F",
  "key8": "54pZtpxxSNCPtEH9ibvPQbAdBGV8GJ9dAb3DNZPyHo7eD2w9BgxS6Bb5AREx72zAKswiwvQ7ngtJ1RsUstG4NDwf",
  "key9": "2dcdm4S81MF9MVXCyrpveoWSNwnFis3naY3553ohsmRoaXCEiP5raS7pzgjfD9LhT7i6oVF865E9ehYRmSzGvEkc",
  "key10": "2pedohStBy2bdnEXYy3zDqyEHwquKRt7qtTPCpa2Pp4w2D6PsarAwUUSQEq9Y6RZyyeLqy8cmLuRZkmJCMSsBjHT",
  "key11": "4Gp5iNnr2KYLi2MAiijFVrv2G7EGVPRXMSCUyBcrHuYgTXxaZ5dMhs7T9No1wpN7KyNNvh4UFqNHu4pCLRUSsC5M",
  "key12": "snJmhxsUtFgsEaGmaw3jt2fZhLZuRmgAf1Wd6VGFrxoKW3fSheFcpwHRywJtMiTdnYfJDHAQEkF9roirJkCddHD",
  "key13": "5MuRc8nXsuga8DE66NnnVJTp5kHByf2io19QaSBnnzuRRG3ueNdy2fzHQbFVc8Vb4Zj8449VakMhUT8L3b62Ej9j",
  "key14": "3TACGnZV8kc6UTqvBZoVKWxN6hQ7NskzgwcL7fmmFqDnyBZL4qXcy3tMeGa8MLo9b8X4CV54wVyJwTSd1QUVxcp7",
  "key15": "2MoPcfYnSe43CCSU6FTLwX1Am89kTWqv7YbUkY9CMjmCmUGQn31K85T2uejfdwYKiCzupbuA3D6RMazJfDb63kfw",
  "key16": "5WHcCTac4w9H1zVNYqskne2akUvJrzpvZkAKXnGbZ57tJb8WLVTWiKSqnzAZFivLhGHQZtJcJqY4a8mm3pnzV4HL",
  "key17": "4KHsymfj9ohTnUkmTQdLwCes8NByjVsjxVSgrLmq6RKpS5EHsj5gymsDGHPjJKpRndgbdQi9xMgzkteydAqDx52j",
  "key18": "4Yqs23EE5CtgcS3ba6mY2nwGsFEvf93m9ZcEmHxinjc2fm3VN6WWV2RW197wdZHnPa64TgNSvzxse3JjFppXefDn",
  "key19": "5Vmh5VE8smCRXbA22krnjDyEkubKtt4T871JSCSrsP5b7t4ytBjJ6CurFLwrXX98mZS5Q45qr9dDjLPhVw7Htk1v",
  "key20": "2DkvbyRaNjkFQMHoA9NVVNdYmpd5nQ84ihegu9MQNRhNxRLe8KckhXGygAgQ7TWQuuXxHEtUBHWYipvaGcLdV1B6",
  "key21": "Q52zmrry4qvoEb6SHfa7GaTH1dbQ28SkQpksBNrCp1nkG4usc274ypbdnx2bmDMoxiJdBV17zMunbDTbJS4KXGT",
  "key22": "3H6pXjJGMkD5MAmEdf92MRydXRp8qtPCEqdaLF6woCCGBYZfZCNZPzqTiU1NjArvKUUuoskutw7T5KcfV2QLwcty",
  "key23": "5qVidxnxCibkThvCU9yYjq6y5MhMKsbP3QzLvk6hEfQgN6q1d5oQ2p8Cqziom9BkLNDknVKFcFbKrvinWKjMV5cP",
  "key24": "4RdNcqspe6BkSyyrcL9b5rdwrpxnXhevonWUxNDedQSYYZdoERZjDuGhkE2JYUGtoYX2rVXnjifTZAiR4jFTPmNt",
  "key25": "8msVrCQe6T15SMzoYyBCsxBz7sqMLYDy6gbgK9ZjMvzDRaiizBUjAB6bjC9Fjz59FqZkeFLSNTPUYoJw4SLWcCu",
  "key26": "594zNtcb7vcGNfpapcZtvEWjWQnrmV1FNzUHJFJTMEVWPhrEHCyuZHAczL5zSwzB4fgPetZpz2nafJy2RohNxYZP",
  "key27": "CbMxLvCzJ3UaW8XtARQLSGgdT8V1FVGnPVNkGfr9woDUXWCZG8CLGuEkvpP3MeETu2kQ9H3Su6RJkDTW8UKXUuy"
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
