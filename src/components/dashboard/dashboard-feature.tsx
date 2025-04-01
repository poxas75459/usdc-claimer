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
    "63xBjT5uHPZtRN8y8AA2MohiW1MyrQH3P9Bk8MhEBQGDvre4wqXdtJJ7ATEL5ytcCkLkPdFewXvCW3oCHnBmvFKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8dux4Nw9ZB31bamPALhHXso9qrXZptQD8j6sKvQMvCwkdcT2HLiEZgLBPDU9ZtqbWrFeewvMrXvcvc9C9yePxo5",
  "key1": "5zVpPmTzYhpsmnHq4QTAiXMQDY4xw9wDtpfC4ENs1EoNiTcJ26yTR8qG8fi2q5zaF9tC99bWiLR2i3RmybhA4hLr",
  "key2": "2fExNq5PVccxYAfNBqDReveWHFf8FU85hJtp5UqT6vm9b8XSUqZ9eYQiQtGWHwyi9mXuN4vqzxBFbp26JoHHgin4",
  "key3": "5nBy1EUsea33VUe7pNm9uzNRv3CAxd1iRF5t1ucf5GDU8aonM59AcSXHuGg4eD4d6RgkyHqRoV5y3r7q9Jhv8N45",
  "key4": "3HPraoQ9hLyQqyJMRsj9AXjaC8CPbaY7KF71ogeMdbNw97NTKvxXSRVpTHK1s2BazTu9dwEzEvgotfQAbaiGtceE",
  "key5": "3aFjwtgrCz6aVzRu9PdPiYAcoyFgRVGK8ug32KC8VnXdUfQa41QZppfx8YXQJKjDWJF8LncQEfiU4BDWYxMVLShL",
  "key6": "3njmyJ3XoezKbz2P5StckJRWEpYdLB8umm5PJ4oRB3ZpvNKxpWPRKFnmXhscCTjNKc4WeHpFf9WAJ6vfEwKYYFPJ",
  "key7": "3HPtsMVQi146myPvhdM3CbtvhGF3KiAimKKtXgkrjV7kDVK7MNLVBpZetNpV5Jukp8SyGNLoiccevAXbwj5J5Dce",
  "key8": "2oQ6oWofhF8z3eLbQx9qkFBpVBVowp3DYhoWigQ2yp8CDjjQTFgZgsmC6rDZBaZCignJBLudVVivvbcvpmARZRhM",
  "key9": "4TzzcjvcFZ7GrSnfxzzqm6Ce8hmPUXUUVvmiYEnyPQYRiAbx4xpEfD5Jr32Vd57hg7Ltry6RXxWcfgy1o6ZqyftX",
  "key10": "3NmZQqXerKbxH742GHthfxNyxQc1pJdo1tVpJYt1qVYYMLTB8DGGQ4BFQP7cFs1WAmhAGhmMifVf2ocgL1HyyvgJ",
  "key11": "4v2s219oR4MBmQuLEjHb2fmxfrrDWGeKdFUNbdmj7paAqRx6SYdhvrU6hy3EGtC7Jo7z5Rwt5wFoNXKmZLmXoLzp",
  "key12": "PYEYCvZ2uEifhHVo4Q4sdiHyZJnSHbA4XKaXkH5caad3zE2EQjUB4PFgS3S5Wdfm6nNyHhhBedDr8w1KKYGEE6N",
  "key13": "3mtKfwJdBnp6hKqWiKzKMi7VuxwoGmCCf4oX5uHUvAbsS7M9xxMr1jRmvmUqp7K8MasXpnTALbB6ZbLEkB8EFejK",
  "key14": "Vq7kk1gxGfVGFACrDNrWVcFwht38iq7vM23Qbi8fKa2BYxPdEhx7BeMt9vHMgboRuxd7uhCuchT3QHR5mAvf1gp",
  "key15": "1yEMDUsJ6vNsLFHRqwQUZbtFznK8oxjxBaoKnX2niVKAcp1nfDUBfB4kS6bTgSxBo43c7ZY3vTJXQebYVsqTG3S",
  "key16": "3aCwuGMPxaAcfVetJJJSgNVmJ5H9E9nuDVjfyjPKN4NwHJqzUWPTV4CNzDcKmemXCmnS4KefkPPah8x8K2SoRf1v",
  "key17": "3iZZxJwwk19QJ3Ta9aTmLztRQKzbZR5Ptqfb4kHtkenEBuACksLm6t6fKEQNr6EzBqzwcvJpqCtWhBjwwFtawRaZ",
  "key18": "3bk245TMZ9C5B9otwG7gKhmafaoDAUFsPt1z6w35mA1GJAe55EmGSondTAMePr3VY1CWSCQ8FFeP3xnSSGvoUgdK",
  "key19": "7vQaWirguohPaaw9fuevCvZdpkk3kyH5QmMqpdc2jfEnrNiV8N9TPUT4zpSkDuWSJruUtQ5xW7yqrgDqLnnj6Rt",
  "key20": "3snzkW9tfmBgctSDg63xzG4fX5CQFQdb1ZRZcaCcaJc2aovkxobbdGZu2zHmVVRj6pch3qbNjRwhv21NACZfMzcE",
  "key21": "26ndx2btLEr35469BrU7BLz1XHiG1bir8KdCYUzhCv1VhawNtzQviZmsxcLt5U461WryQbJNhZuFUZcqKHNcW93P",
  "key22": "64u67SREbP9rLFyAWwLro56xJa35ejxuP9KhnNkS4ESuTysUKedEM1P96guXHUn3Tm82J4uN2u1KPiLSJdxDXL7f",
  "key23": "5C1eF1tJKKMnLebr1BsRCBUPCBDyVuRb9FtNcFwGsPHWFfShzkX8ZctKngakAj9eNbsnjCmbgT3bT8m2covs1DUY",
  "key24": "sP1o7cqJja862RdBiEBfaoZQ5AKekNiKyXpzURm8Gy79sGTTH6ao38aby8GNo75BPXwdxfWNWteUZhgq1xxSQHf",
  "key25": "4tAFhBXnEs8Cx6quoMg1UnHWx7a6LHRAX2cqgRb4sj2MD15xaUHSdkEgn3SsGw1TuZesY5Q6sGYbKJ2ZB7NBY4tZ",
  "key26": "5UP5PphdhrqjGavSuBZssdzFBpMvUjfHcJsuXgTXTgn4svowLwr4JnEiMFaEcVaocNmFNAXQNSXymikuTczXN69N",
  "key27": "mmrE8DXR5CdMVjAMnuMUt4WCyC8S6JK5qCYWP8ZjDAiAkaaMH2bJ6VggPEQjhojtHB1qSF9KWFxG2z85T5FN8pG",
  "key28": "3NGDkF8qomHKft4g3zzGNAQknLnAMxpAhuGU6LHpbuZdaiXfc683f5VnoS7zithDHc1FAckxQhakc8gu6LfBBypN"
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
