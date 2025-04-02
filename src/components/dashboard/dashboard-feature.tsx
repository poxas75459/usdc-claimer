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
    "5wFHbC2MnBFZy3gRiKLHy3h1tkKHKrwWE1qtEtkKUsBboqjvkYespNv9Uq5srUh6bTMBU8hcm7uTcJVbUtCMTDt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44hvy1ihXNMbfFSRnaZK4LewHBpCxRz2b9yjGxQtAVp92MWR6C2Q22rVkAh9dij14h2JaEGog8sMb3CxB8bVR1sY",
  "key1": "2AgvLD1yJK74Cq7B2fPvfnQQKrEr3DzFG61X7Tfph5nyS3taeV51ZBgFdqgoH1c5XVS2UMrLsL4fX5Tt4CAkiVJN",
  "key2": "4iZHnhWV7jp1jk81rFKy9MTrSybCSMzQGHvxvsBAW1gdVwyh8UB6wPBnBmmRLP5fABpAE7DkJigch49sk6PJgqy2",
  "key3": "4WMrDyefpxMU5Qe21amasqBYp5rzPtPeaTyudinUr64bKb97gArM7WHmi1tUD6sdegzQUar9NJoJbk6HVVakCVkF",
  "key4": "4zzqywDUhz215ijxWRDHHQeszszqv2Ze47H6pebSChZBMybAe16sDJF5yVbEkDVwdsDrXeEBEg4AfWYfY85austj",
  "key5": "5FAXegLNLqKEERbvh7EEDgE8Bc1e68hPU9dm865hiSXAESMrnsLCUFjXgrL5WcZK37zB26dHsDJomSwQb4UEhQXd",
  "key6": "2ErL1GSWvMpk2WcpDDtCrH1NroAkZ6MfaCvfJU9kiT6W1RmDH9tuPYbwoPEnwHoZwYmA36FQuTHpM9Dohsg5cbY8",
  "key7": "tJF3ZNGUtnqihTP3nt1wpEkgnFuyy2MDWRxP4sXc2TFm8HLHTtbT8ey2tKwvHoQncM8xMHqWNPpNdkMSdZr1pzt",
  "key8": "2cthgwgDafU4H2eVsEEFyQYFqwUFR58rGvR876VzwbEof9pk4cfYa6sA3yd4odVf8xEQ4zvuRNioSn2KA81f9P12",
  "key9": "HkGkwFmZY9Gd1MnPHijy1SvYXgAC931hJwAwrRD6xNQ1PYEDL5BqKPPGvzovkbwodLfAQYkJMvUgnAsumAYKFzE",
  "key10": "2Msn77jNoC8BXvq839T1G6iBeW1Gz7YG8tFuumRBRkenEpdrcjStP8vZ7mkJDVyweFpSmg8acuqrRp7MyVHtgrzD",
  "key11": "5fPoFEynMNembiwHTef857gdwhZozvP4smXYqjbvGDqhTdE6dMXmy7ERZ1p7gMDHs9RkmczA3ABMTfpvN49bnBCQ",
  "key12": "yVH6f2GuuSjkgdrvGhwcsyAZjfSXZ782H3QknE4d26MyPrtnyUNrVPQ8p52fwReshGUVUgbpnHMwMcka5idZDX5",
  "key13": "31kQ2xhE8mRtVC5qBz9SPDQYq1bpn6eu56fNzVPibvudB1eVTeWdhwCHWqkrq3F8qvGC1gyeCzrxEJ5GNqwpBhqK",
  "key14": "613AMC5UeMkFARg4S41M8Zch9KYLmrgkj6vWu7N9Q9oqqEbyUKT7SjN8dBiG1jVZGeLiafrmEQmiBWf22zhi74vo",
  "key15": "5HTdNazz83rXe2JAkwQBPj65xTyhAqVrzRx4Boc5wV7xHjnARga2WRHkFoJv7Kfwb2G2YQ24PYTVjc34qauV7MZY",
  "key16": "4WrnT6uUFiqZ9LCgVrvN87hvQ6vgZf8Hw2ssvdZtJcZqLrQdLeBENE2VaFoHXeE1Ngt2RBvBGLRzM36jj3tGgu2j",
  "key17": "2Gbe8NZpjEyjinaKgS8j5QZnDm45AUJGS8kr3812YLkdfodYeNynUFQ4y1CF1AJS5dLYcCp9kEWiKNdxwVUTUfuZ",
  "key18": "2ftvEp3gk93gHYXGBP1izUubbddWoYVzUnmimbyV9mnZmcMrBHjmhnN8EgvzxpBD8SZSk3UnVdxrzu3x7hicnzaS",
  "key19": "2CZ6TTAnPWtphmqePeZrdaeDxPEbjDXLK46LeJQrzGQ8Q6xpwhecbvbXXcn9h6aCqkdujQNuiK9syWgCM5qoPW2v",
  "key20": "27Wxy3qobvxKNARN1DwFEgJ9q84fNtpXE3SFAL3MmCxa8v3SgDiDnvCxSa1uKwvyqr5PbTfuwoFdiauabBY7n4nQ",
  "key21": "2UQi7B953Sn6weJsgXT5159BC2WU9dSG9f2kKnJvpEYm5nBHBFbdJMXrSUWu3QenP1e5jrBX43z8nT5PHKsHciV9",
  "key22": "52qrTE4FLCJYQQzHbLXkRZXm3AfMC3r9GE1dqpTtqXipScTS4hQ3UdkmHHNmae96LTThTSZKHoNnDcnyDahCtLiK",
  "key23": "4bhqsGWBNLTUCd78k4mSe97cu8mYFKWfCJxzCk4V8GBTN3NkuxFWSDQPnYBjL5PPUavkG3wTJeFwvB4FzRZVVjPg",
  "key24": "3W3j4MBGnk4grY8STegLekEQ3pHfWRS4rpXuTWMan3BrZ9ydqMem51s41T3DYaCZXTJCGsqHfzy6XRtXtS1UAja",
  "key25": "4ZEG3CfsrU3UiXAQPWBTP5BRcERhejXWfdxjwcimNtdhCY7aA99Yt8JSmPDV9A5AixRtMn16pUenAi1P96vbEUWc",
  "key26": "4beAPxhWzArZ9PUy1ftFAke4A94c7cQdrLwbgrJ6bsDPh4WrC7SatBtTwHnRDJRPYYPbWmrRQZDEsXqQaMBPSR5X",
  "key27": "5Jmu6Pv1qLk5XvhEayAxQ1irUM45LNoHVRVb5PCZxyAA1iv5wLbBH5PW6qiHTbABa1PN87fXG7FLZbibxfpfZ81n",
  "key28": "4GPaMK6vosP2enbco9mFG63K9tGfUGooRwT7AfhENS4LJHBooXoi5AmJmGkir7HNyM2dy4fyqDrFepeQr3DTZHfG",
  "key29": "4iYBMMc4Pi4f3DcP8zrj6JqGY44L1tBzMq6JTFSqVVB8ap651d9EpZfbx4feUZSDmZwEyPquTbe6WQSJ2qKSnrzx",
  "key30": "Zw6F2wtrhFRSz4GUCztCNfPQdRnk7knqxM5gHcAwp9kwU4DLRmfrcwbnYxwrx8Gc7fK2EtuZCsAEzQbrFTjyGya"
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
