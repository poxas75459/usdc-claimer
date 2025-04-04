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
    "2iF7zUUBParbwMsTB4nPZuzui2pS8Ty1w7VJAqTMy3wNeRZNEfk9UUn1gGqhJadwuS4oVuB1cR4tm5W5t616BNF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TYT1kFMiXfjgj15zGocgmQm93GWUaWPmxckHmmt3ZPkhV5sU6LAE648QkFjr9g8FxcmhAYFbT5k4sgzVw1vEjUZ",
  "key1": "3wuYULTu9kc2ykGgHSGhAcJqFK3heCerWktb4V6QtnHzcKW4T65x95drfSr3jNrmm6BmrjDoCuD6zvKNGQCQ2dN2",
  "key2": "3mEW5EoHuKoDuCWouhisyeuX25CfQfnH3czanWJtpDiAN6aj2vToedQXr87sxtbCac4R6X7jYFMi87RrUZSVCNWC",
  "key3": "4uZq4jeMrkCE1EsiybrQrKKEKiaCdsLGmdPv1gXm99P1jdCav4EUSkzB17SAF1JNTvvUtMJUwRb1tZt5EzVyTRRa",
  "key4": "2YJbGMXTqgnUxHoqSyBRYypwT23ExhKfkjjQiQddnvDHMyqxnixhvLUiy9sxC6P6yKxtJGpqA92sjfCV2AzLvZe2",
  "key5": "yuMujNgczxPizKCD44Hio3Fdo6vbPjd1GwSzPHr8hJ5RiiUXxnhe2NaMCcNkrwdgFs4tegZ43UN9fiy2TuoGrSe",
  "key6": "58QQ9RxD1cHZGT88mLXi1pLuMGX6UBF9jPCGjqKwvLFjx8dcS8iRem7fi9HbUWhZbQuNm8YiiDQGeXaeiUcbabn7",
  "key7": "67UrA98dEu1LJLAqZU87FUNFjGnKW2ousoVEoLWDaagPoDMfkZggWyfRQJmxCxrHGuwPVoZVcCqAMKA71LBnPNfL",
  "key8": "3qzbxFtKFEiYtkkeA5DFdJUFMecF6hZL1x9j6JhBKqVvXxn5quPhJGrHvsCuUXmYoyUSGG5Cgu2twfm8wsHwamRk",
  "key9": "vGeGTUREjovDQKMBEz91TifBre1DNmACK1rwUedhZD7EFtBMMy9BxFPgE7yP7wzCJ2nfFyrzUKrGqKWH2A6QAaW",
  "key10": "4nCHYzeFnkLSksQvBC9iYsSWkGKGWfKLh9TWEvrnnGKcnffryp8a3MTyf7AkWqGbQdq8EuDQw3NQo1dqbgs4tdVT",
  "key11": "4Zk8N2NbZBa778gq7SrjJAA2KD3t9et4vvaMY2CY2ZE7Z1uMyWzsqinfN49LYNn9LJShFnbT1U6dMAcexiHWaY2Q",
  "key12": "58GsYu6yQtYPo21XcnTHdzGUmQViGNcwt7dbmxNhq5ps6nefCZc5PWrLXpJKTCPDBApndBJJkLKxLbKSPqE49pbz",
  "key13": "4h3wnx6o6NBMzrTwknx22bwKK2A7gSCCct4G7aJeMjyRxEM9nB5adjzvQftz5im7vEaBZmUBuENE3ohb4mHceWkD",
  "key14": "3WrGVnyCzneUxLj2esq1SxQWEq8bG3PrhQ8DKXiWNBTFvPmXUy7U16JEg6AgBrJQ4c6jTvofSkBx9r8JijsyNqAt",
  "key15": "56VyJWqVMkZNL5mgQnDuRXv31QYTGjr6cuM1UpQii3hLLEDbQvAqjCPjjYzoRh47DwDYU88PMD9MnC9moGciSebW",
  "key16": "4uWV8gfMniAU8Q8LTN6z6puYdG8PZPbnyaZu8okPJotZezfDrtymE8DVfGZpq8P5q72MiU7B7xyXjUGcwgndnCQ6",
  "key17": "5vo53cM9q7Mpac1acufhas6wjc1z8jHxKJEhRNrpEweSdoBuP9LYvE8gUzexRmrnJcy8asNwpVbykMjhULjEtztt",
  "key18": "44ZKTkP5ffgP5qXsMnTUYui2aMpu4G8C4SUJZZsoBJrdEKjjjTZjaUXG66PPL17v5ravd4j7sbPM2Wa41xS83sto",
  "key19": "2UrtxAQgrHafSHh7HEnZ93pRAvXmoH6GMTZ5BRRcgh1eCYf3ihVGVrZyCUqPq6cHY1Ckv4oyXw8U8wRpWxE1fRou",
  "key20": "2FiVGBJE9ZAKfDyYwTaTXYrwvt6rbejwtYdq4BgCUQoqNG1rd2DM6Dzq92nt5pdpwVRPff48ud1SvMGqnf6BhWUw",
  "key21": "6xRSQhWkPHXiB463T34UQyZHKZamwvzbX3A9ohPhsdjsvnzqz77ugBCbY4ZRXN5Vi4hzFBPrGeSd8NqDShX2cSF",
  "key22": "3Qce4vzwa3mbM6UB65BY7EeU7b92RQQkhUW7pkRTkFz9hkmQB4p1kToCJeKfYs6UTvb7H5eAUbRrDHPqnvJay1Eu",
  "key23": "4WRHnogLXyUkSY6ewavNowisYxGYJUrsWi2nWLNX6t1RqCx3aevhd3NGQJ4o9RC4aoNQ9LcY3tZWiMcSKxzAuwhr",
  "key24": "3MtTRogzvVKR447Zdm6DR5jHZrJirvD32HHUZtpMXq929TxUnvvkfd34JoZbcsM5iyn1k9YZu9EuJ32WKZVghvqL",
  "key25": "3G219WugtwFBjotUa6kSypjisGKt3HJvoQ7Yzo4Z2errdXNFw3NyJcm8RUuKawLD2jSYW856H6xa4mog1RNR6Rvb",
  "key26": "65bWJ49zZcdn2WDsWTVTb93XVN2UAjMqnQyc2VQTaiHFjhXRCtFuSeSFQ7WvRSzaosHBQfUBQgkQMsEmGF7TD2yw",
  "key27": "38ExbmJnBbnPzUV9syjvWMUuxs217Jmn8BZ4rS2BoAg3EhTdpwuBKyju7nLVvJDY5V2mgebwrUVr38VBg4N9VYPu",
  "key28": "4wf56jdPTEQkPR9g5yQcqSsEJEL5M2bMTcCqLhyuxyvq2M5cmxDvqMbmfLQKQ6M11U8NY4BdbBjWtjaYu2a6fBdU",
  "key29": "SRNNJJ7agDFDzVLxc99RjRW14tE4GHvYvZakZLznqdLnCTuHF4DN3Wex2SsgHVkxobMEaUwgXZLm6FntAAPBYw6",
  "key30": "2DSM98m7JgW47qV8uAhemnoss8tyvyUcQt43RUKQ1xWLN42LoTTuVdpgYnV3tVLPhJJFCdWCdQFM1gZ8JLnGffSM",
  "key31": "4Gyov1TLj3Eyu8o1MGemCgxF1Nb1HmP8VPhfrVfyfAW7NH6QtqjNQCaPTBmZ6sVnmfP42QnHkuT6sYiF7aENntv2",
  "key32": "61TU2EimwWP6ErDcY2iMGJijcMsY8QfncHs3YxNDPpbJWFWCVsdpePXYvXSKxj39XrAWfHPaJqBy2126Zwv59HSQ",
  "key33": "4LYbTWCYMFeYSJ5KaNGJ5GJ7T8D7qiUXGZfHTVdzq7K9cKYyoGMuXkiFvD56fC2RobX1VLsHn5mcEpPw6fRdGTY4",
  "key34": "3ztFfQ3WEQeUQN9SmnoTDQmAfaXkNG6Eb8wtav4iLUzWpxVemqYUWtGgMfB8MkUHeaGEFrSE511fqsvnLbY3y7Kn",
  "key35": "3xoU6uBHYstD9W8Uof1LiWpXujWZJYWobtnAovQ6YDdnqjGAhF1vzPpzRoAa3gnUFx3Tcq9p36Sacg1FU35Dod6X",
  "key36": "5RS8u4E1p5sNB55cc6WsjpMSFURnDG2cXe5xJG8bHNb7AzzMCEaRPB6dNjdtb1vpysZDywC7T6TAiumkW4KZrAM3",
  "key37": "42DGzdZbwnS4FvGoX9eAwodLLCPGRuLyHxQQ6WsZo59aWMxv8Vbz78JrwJXfjN6VcqctqnwBfuLWntCivTTkCZXM"
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
