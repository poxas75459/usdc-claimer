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
    "5J8gGWkR8gvTxVhRY58U6wp8SAiGeXTEmLXnGv9vWvWXGe9KPSencpGXcXaPB3ApCanmPff9B1nhuScqDjvcJ2RF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AZ4U9cY7iphfjJEWReMdGqebjt2wMZREQoa58oo6r1eKG83owkBGiuLbrR2zCXfnDtta1T7G1tfvvph2Xvuxsw3",
  "key1": "4F33vdoJeyX9hVL2c2sx5eaVNwsbdyGGAf5otvkT5MUpoCYkFZxBa4ycdvbbSGbXRyPk8jdptF5JXBdCfXAsZJoW",
  "key2": "QkbSCgJ2QLyXm62YmTX9jPeEL3f5brt33tk24wXLSZZ1Xskk5kqKJBBMjZo1bshzT2UejuEVhv35j19xdDjBXDr",
  "key3": "5v4B3LVqhKsakWAESb6Ta6Xh4dMoTYL24PwmY6nEdvdGupUfjD6tqc8XuFdeM71fPNfVpykWTFjnMUjR4dzmLkVk",
  "key4": "5wH4f3L4jxSLYDgW41w3nUQma7JJimEWn7Qh6x31uHbY9HQ6ktXCMu49bxGRkejREW5q1PvFS8qtNMTVNdpZzKfR",
  "key5": "2pfo1F59TCiE1z2oKQcWKDpaJvLzuPs3fSdMsz6LmoYvaBgd3sGYGTLFToymVDTCzmeYZFuXL9yvKV5hLfySw2ce",
  "key6": "35C243c6ukeygNYNoAMJMXJrQD7QKCrkY6DWVRjJobf8DPwJ12a1yEhR8Tuhrfso3rvRpurnWYfbkSrYkkhw7TG4",
  "key7": "24ub6REwoPNubiPo4GDMq3dGDzdrRqs3Z526gMT9VU9rzHSwYdLLeeRVxbYgzgXgn16XMTu6Nz68B3Ra3tmLFxKa",
  "key8": "2x3brH8JUYyRGma52e1k8BcWH9tjxxUNVGqSw27zH3MvXypkArJdwSFQspiNtmdcSPtesZ8tAHLB5FRUnppyHTUP",
  "key9": "562Ji2bGuZaNVth3dgsGJt2jHSRso1rrVcJJnFZmXt1RS6HdZSUQGqSpSponecThcf2R5zanWpEFs4dxmufm4qEB",
  "key10": "5jncuFfSb1S3xKTpk1bL33cjjKP1wo4FWMCzEwJiNBnBnxAuF1CPHDWwEXy2cXaRYuvfYkwpXfPdmCnS3KTcUzv4",
  "key11": "c3563J14XyV7RRJXmWRkeJi5n1rd4ivk54BseWZm4tRueyzQmNYFhw8sbrjqW6GmdzRrxpf1ncwsNt3StBn4oTL",
  "key12": "2BM2dBnf1UcDceMYdpU52LvVpGmUsSJ56FgqjCxP8qsbBiTTuxWGdzHFEwZ53QbN5DaQkYEcEHMNHCBMsZxG2XWh",
  "key13": "4q8Az96CYevExAPNiYYd5BJ72hRHCromS7q86d5zjWHWVbSxV1wNQn2zojXQi5gGd3oRdgrxabm96QykNPhL4fHJ",
  "key14": "2f4ZEZB8vuvEVHrsaZyPgTy8vHkQhVu9HF45tTFwYxRrutgjaKwkkjGM56YELp7dEhKsGndwSQBnAexhhZF8FGN4",
  "key15": "3VHUQpVS6Nwfg7ooJjpvGeqzr7fBWXc79GqMDxsFAhfkq5u5BXuP8GJYrT5S334tJ4uT88zwA9H6okdiFtwv9Sfp",
  "key16": "2Af6bCacd8e9RorCJyJD9E8y1s7CTMJuWFRaTHDY5BzTuigbt516tfGdDRJMFsUi1PqFyMev5woZQjhVS8RR3jBe",
  "key17": "kEYC9FF5PeAeAW4D4FzXyZohPQsDMuhHpyhaMyrMNejjMFkh4FAwf9hZdZHJVqytkCzcZsR81xsLzyxnT7MomdU",
  "key18": "2fotp8oFVbb7vsWzDNX6kS65z7mvQwVajQqqr75J7WEKr6JXhLs2PU7M3yC3qrL1uutkHHpE1BLCXgNU11hU3y39",
  "key19": "2ayhf13dNLKPJcrnjC5axibsehQkiy7m3Q3FvJ7Dma5rGZGSvUT3fScX29DStZGvtiWZzi83YN937VLxwEqEdtKP",
  "key20": "FAPeGpEFZwiWM3uJmczefPfdv6k6wLc7mTXmPX5RARBoUac2fQvTBTkGVBR4paTn5iFdh7EMja5dqbKLLvHh8gY",
  "key21": "s39V891FZvkVkMep8e8r1kLxmL6t4XobLnZHcTs7wQd1NBeF33vQv7XGtgvZYFqiLrFyi7bGuMaUYv76YUMRRGK",
  "key22": "2nMJJVhjQPPzWJhWUnkXpU5ANSKhS4kcgatWKqYJuuLbKTuZz86aj4JpSY7PdCoQzz2F1geL3kxxNdKsNMVU2d2w",
  "key23": "uSJGDDVBwmXDTzEctVvDrZcxRLXU9QZku2TqCWTjaWrqwa1fTLpiQ2WRKLjEpudS4EAFFxtV9HhQbvxri7f6QcV",
  "key24": "4xMvHkYmgrUbARxjuk53JYV7vk2qqfYpgFo7Vfq7VLGzqXmVsNsNkrtwu558QwDAHXemPXY7HgKNp7enc4RmEcfQ",
  "key25": "5oVz2G6XfvJNot91TnwSbB4ipaMaerCGgwJAGvtDWgM5hFG51nwRQgsHQ9G9T79dABqSMpqepJn1GMk1PqQYTLST",
  "key26": "2pfq4ju9jAV7JN8ihXe3pugqJ74twte6bTdGJVJW5J7SKaXuz3pbegziTDB2w5LdFbCMTAJRMnN1TtnjCFtcE2JU",
  "key27": "3kuhWvW9CL9KqH13aAsCaa34XKWcDZVU6TBvinC59QEbBvv8vLdeLEk7w5HW8gY9FypWawQjp7rvevi5b5gDAM6U",
  "key28": "44UioPoKc2gz5dxF61PHkLWdsBHuVGqGajXK8JGzhKZoaDwY4JqjuK3paftwa1tkiiTTW1G3XLWYnBf4KgMPbSHP",
  "key29": "414eJEkuGrKBb9pEbfY7DJHgwy1MPXSMh8Dy3jta2DYY9c7d1tsg7MorPLPNJEjfskiUUYCaa8FgWMmadJn9RCnm",
  "key30": "2iqR6ZUQjjpWiatqcd3t55i2dHFvnDeNXPRzTpcF9nMGSDMWVEuwgcYznD1mCinVrGEh9bAopmQ7rcfELXoi8qjC",
  "key31": "t4vqj2NfYGNGt874e59PgFanKH5AeCeEcDqGyZ2Xidvg32TmxVjxkJYwNkBtbB42pqm6Jg3SWYziR35SCw49aeS",
  "key32": "52m6vCb16eeDyNZvETshA7y4NFMe3zqs5FBzaWw1eFr6LgFtAX8Vxrf1sNzx5B7A63wCSwwdUqLPRXcsbjY3xQgn",
  "key33": "5qZBoEzjjMGBAEJiywMN3HEyA4NEQDSYjhstkZVtUa4GWgoGDkPS3uV9jhNfg9yhgHHkTA5cQ7N2jiXtfpqj16Lp",
  "key34": "8bocycQzBb3LTEtEeHVRQaQZtPgaaFnxn1zegsmKee9ie998YR9k4PSbZAAYHcyRnNGp9SrHYT98cdKTCiETDy3",
  "key35": "5vG4ZuSnwgBmhHcEao5FN95LfrbeWrd7LXFXv2FnPpZk1gaHZWVZCGgd9F5m9Y5LQXAptoB77FHKq7ofBwqigifH"
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
