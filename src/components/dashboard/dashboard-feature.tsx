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
    "2qusX8uHB5at7o8DVziHpJTzY312maDvoKndWgzpsFho2hj36Lx8ytdmBJg1qsJyFLtRMpLbW22h7Yi4eJJpyNG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fC32SgJ9WgQ5vdCviqqGuN6KYx1gfaaSQ3QK7KYUQe5KrxZMZpBwwo2DVBSoRRxenypCY4o1ADbWo29gchhA4XE",
  "key1": "5yBfCaGmhZLv8k44uvCSEUM9tar7XustrvV1UtzvomsQxEzPsbStuCiKrw1danq6oJtZbQEcgSrLtMhmrYfsYqdt",
  "key2": "2TfUeJrPFSSeUT3NCL3uit3oDEDib7PAdBLCXeWmWjQ25hraVsByqBq33rgbayvhaXhFfCCb5guC3BaGs1VhB2Wt",
  "key3": "49bvZwFd381Q6onuoUdA7hnK7XmdN7upBvqXiJ9R68m7D8wca37v6Vu8n3nkFUcNA4BtdBkAqDFX4yzMmet73Az6",
  "key4": "VvnUB2zm3DPuYcNEqv71tqYJMkjHGY3dtSEeqwXwdZE2N8UQtDeuURBLEaKxLvLgTjQiWH1hnjeafnsKumZemvY",
  "key5": "L8LmwEMdmJNkAPQThW84wregrVix3BvJVXLVmaeQmSGwLK4JDxTSDDYSiUtVzU3SEnAgGVqHbJR1zopamkBjWSa",
  "key6": "4XcVcF4g53qQnWFHQvhqLkp5dicHd2z9EnuutSt6RY5351Tz4rk7xBQSZ61H7G8bMcR8DZVUkzvToq2KRC2VLdX9",
  "key7": "3SKfzXCDLwt3wyM9EmtARR7oWSqWvAPgQHWG3tQrK7FC4TrzHZzUTXQg9rDHYXb4bf8tCEWRjL4oFqNZV61xYhUy",
  "key8": "4JbwiPzdLwyfPcSEThEhbr3g1DPb7uFbJg7PnZHcg4m39F9Z59QFDSi9CzDnZgMdA1Z1RoU3BfNanCELPAFxSCjQ",
  "key9": "62HDtYi1Z9hz74CB434c46X5fR5utfVqyT41SoMECXrawEwrWrP7RSCiTLuZLsuhsF8MruEBV4DixAZ2tACkxwmt",
  "key10": "d4xooBCjEq2uo1whws3xDE9iBWV9bxD1W1T9LCKQvG85T4WHN2BjwYwb4rwoJT8gi7aHspKmTiFK54DYp34F2Su",
  "key11": "2d1pzUU1rU1tYqFLDeFn8xH9kNYxwtPNQK4on7LyDxw3Qg3f7j7WzS1Qsh15cSw8A6i8ZetymTMscEcFN6nSJMXU",
  "key12": "4t16BD2kSNkD1BwLi2L7ZHK92EDax5JjdTENfzjKKeUdMGP6ukqnSyPFx2DQWaVUsqXgXPmhPsDE2z516T2dCyYW",
  "key13": "3JnwajYePtjjQjuL9doDcBgUhTHHKQrKniBuZDrUv67rzPVk5aogwQzhCBWtrFMoSkh4uHa3z4iw5MbZbU82a7Xo",
  "key14": "3PzAiBYFVamG2DDfWKYgJnh6yXxVxQ37X7SukYaNtRVQzTrFT3RxANgQCyBcBBemFXvdFrp8hqjeH6tKsxDkKw9Q",
  "key15": "5sYRnt6oJP5p7wWqcRw6RqZQL52mCHPeSB5cw9RyGz4PguP1vMPxad7kCCm7LUQRdazvSeEZzoHb1ALNREHvb2YL",
  "key16": "41SU2ZeKP1i1HdMu9reYZuwc1XSWErY18JcUGdtndT3ZnjDxBrKe31xpRTEa4duhznASF3aUbKC78jmWNMxq2wd4",
  "key17": "5WNZeDncb5MLKNjNNPbDMnAQLu4scScNnKnBEpwPGp6Us3dfmJZt9EY2gS6MQnRGrwb55kAESJeK5D66qifHqE6E",
  "key18": "2KrsRx44Bei6c3rC6hPbYBwVsvKaCFJz8gQ7ucKB2H3iYqRm9KbAtPuGDvKn4vzpXqcbm84AsGGhCibtn4mKHz4E",
  "key19": "3z8PnoHE8nEpRoc2GgUMVd7fVFwh6BB21ddcgXorjp7kbSLZcgjW1QhaZU6xKHf4Pc7MDqSDD7zmbjGAJHCJy1SH",
  "key20": "58x1wRPNGJ9KE6kbFdgUUwVA6cKY3rXhauMZmQdHgp3R8aAdxWQihUykxZgWn3BdtfjrPpSt3gTax13CUvM7HKZu",
  "key21": "5gsXrbiD74e8BGbpaFjPmzC9ojKCdFV6H1xd8FMhHhz6bChBvMn8PJyaMHQQkgW6xfkW6pS75GkeirbVX9ruN512",
  "key22": "49wQ5fMmZ9esHGgRUXRKbdVyKSaDMkvnMnmzuypBYHgnk5GRhnJfDv6wZv3twC1ZJmkvodiGipyJKk4L8vGUXKwU",
  "key23": "3hbcvGffLqB36YXgvEmuaSRDmBbZJDqkdPXDB3hQzQG2ecMZKASWoYG7ZtPvKPdwrWUAZJK56Zn4Hqv7zEmnm4Qd",
  "key24": "4LdqLoed2gViedCvjbDPrSna43yPJBsLEW4SjE3aeSsi6Z6gtafCg3tLFKcHGGNq4EPHQNnJSi8y8kvoyGnBAAsq",
  "key25": "3Pmpsq9ePzWW8oYpE9nDKiemxQ9yf7Q39YKNFb8hdhxNuJxhmwb122y9krsaQxfY689ofMmbA78nkxCuJL8Fz3qA",
  "key26": "3aYR5mAww8bi7PNN8XRtjeSRqnei6fAtUKKfg2oUg1yohg2JECBUv2Uno2Go1f1pAGsC3ptK5fzpXeqsYnug6aeT",
  "key27": "2wFE7R9bHqazUHQEzVg6xrHQwe9a3ZVpgcWHaFLzPVysndfsgYtgG364spenqera77Dkuy3x3a48djgNLH9wH1oS",
  "key28": "TdYwk4h6J6aK5U39vUA8tFbSRtRRxx3zZRPkVHXZXgyBao9ewZ7zL8jWwkpXRQyjJ4F774Pikybu5js4AKH5yGq",
  "key29": "36FtqQghWpQ2y2QGh5RW6qxLoBSez6xeXnPB1PiQurPrue87BGiPMdQq24B7EivYkdj7oZPjzqbzrdSBwW58Dzia",
  "key30": "3fd1TeP7a5uG1XFoiWkak5MoKT1DvSncUiXGZR6an5VBskeAbhv34GX6C7W32vUWbW5FmKxe5umNdJGEAMPHAux9"
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
