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
    "3T5vpQhWytSCbUjD23WAnKVeFXXnfWdv4NigaAnvHrgxgEjykQLuEAKM3ihyKoeUNcsD4yMHFVgx1yvGu2jdUxxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CujjJ68ubfmJzxZPDzxUtzQUYta7tEJUnAvjifSbni8T3WVEXdJhV4jpPqBmXLyipypBHrKM8ENBgrJfDAJijYW",
  "key1": "3i5AT1EZrZhKFmDDkPLSrin82qsSaZbPhcGBoLv7yMTxJ8vuErrSDfxHLvJLvHgXuh9roZutA3yNxyeNTxvU7wNJ",
  "key2": "3UWkNF3ewDtggjmG1CPsh62P1Q2Gj23xhsXCeA3NzFrMfUFNuscdtBQ6RjTfz1Cdp7vswzeZUsiase815mb3eVjG",
  "key3": "4wRUHW6Tud8NLLmi4FWVtC5EptpijFVvo2JnSw2B6UGSR4scFbYbbC4omLKAV7Giga2mmDGgK8UNPtet7UUFqyWk",
  "key4": "5QeMXJ48a2r8MfK1jR27K8KD3cCQvfAe5pGA6fHR1yfz5T7Z1EFv59MphJBcwoHWK26mjRCzhmNRdUNPfQXpBMPF",
  "key5": "51ZnuimW2qZqECcj7YD6mXScDmgPv65WRR4Df78Qwvo3wciw1BKLTvrpxqv6mTYcBkg8ek8f4kcw3TRLfVYMSdrA",
  "key6": "613LH5vksapg452Yt6tq1jTacvt6RjQAsBWjHxscQWsVFoosMSdq7NKr8Na3CG4KG925MoDRPpnwAC12B91NnfhE",
  "key7": "2gsNVmU8VpKybBakA2ZhRK3bLCFfmcTE9ifGCpDprjW9HnaRyY2iw1vj2d7ZmwAELmGGgWPMsw5B5Qq8ej1sYh4y",
  "key8": "3cSWH9GR7S2MSVbRum629hzgC16dc8FAyTUNTyX94SX29aFXwc9He52VBftundHiMo5q8Y3my8aLW8EPWebisU4T",
  "key9": "5n8HkYUWjSeY4JM8g9dLEmfNFriGc6jGsSw3EqhNPPt1wW8MzNuuJU5Yg5YA2ttwBBBWktiCCbMFjmjw4r6j6u6J",
  "key10": "5d1k86ZH7R3nskFCjMZ5CXvQyS2LBJC8sZtWdcu6ChsnVHeJ1VTsBSYk2Z5bzSyYJouq9d8drEhf5HVUriCxW1co",
  "key11": "4oxHmPe4K9tyuvrbtctNWxJwmKXgqhJVto71j6FDuuEYiTjHnkvHV9jZJhW9VY5pmyqjBKyPvVjTBCXdMDQehCbX",
  "key12": "2cR2tdJSVVCiSczfncUKLYaxbbiVFy63x24VsnVHGdY3PHU5ytXwMmEdDF3SKJrQFveom1PSH8ob5ZtFGerPLppB",
  "key13": "4ekhx19qRzrAurkmV6AyL11ySD35RrVFea1YQmKz7258GJA8w8qjqS6Zt7W1LL7dXQHCEPNCuZE2AGnm55YyfBbb",
  "key14": "427PGrphvHDQnUPUwjnKXsT7LUnU83VyQBjKC3rSaAUBWAjdkNPQ2C3GiDhca2uysWUvBv72iDXREpB4pd45d99H",
  "key15": "5U5FTumLZ1mhoF3zPAeJ3PkFXtNdHWfox3SqfGSHsRa5aKyUifsFVutmUHRc3g7tDAjdGiTak7WZHs6x16us5Mjb",
  "key16": "32Y2mcnDQ9RHPvENY9c8D86J5GrB2cLCSksvPGgARir2YrUpoC7e275F14cPkfREvER7Vu6zCLGgQKaKR3Snooag",
  "key17": "3kqFFtFF2muhjgsJ5D9dbNriVFvwxh5BpkQcC8BQFuBXzvishMf9SCtBjx1unE47nzJEBCqQAQZETS5vomoXg87i",
  "key18": "24zCmBLzbaHnFoVSBdTYSA6J4BZUWqoWJ5EqyTyys9HMqrF98aASkX4SmoZ4Dg1UYg3wm1ruGXBR2DYiw2fndi9t",
  "key19": "TLhgV7veFBpE1SPYLBn6FANZ7JdQMELF4n3qxaZtgofg4mAy2zi7q86FRTnGd21TuQ8fcRHewfBPJLfXotBCuiE",
  "key20": "2JLqvs76oNHLVekzeNTwc1HQJWapqvbHMCPVrb8EdvYAB8BQzjeuFQ6DACAgcoSjey8N2dpRkP5PJpzcXwmbCcQ",
  "key21": "3DirH2rF1VPyC6pZL4cPzvPmLutEhDFZFyYPX5RvVfBqqpzRN7M8jHhGehXM1TSWWxLoAZmtm3LH6hXB5EAPSV46",
  "key22": "2VzuY1otrYPyWtPb8rPbhaa8DK2X6QLCZPKe5ocSC8RSxCij9J3oGhpUHFjepCNEGqksMxZbi61N93Azc5ZPLzUb",
  "key23": "NPwXooiMdSFuVrawfyPBx1ku9VyFqDFZ4dvLopRvSjQDyG7Td6Z9WhQT5A3Kw6V5pyP6SrBE1zHHGKhxv3ntW4V",
  "key24": "4TeJWTeE8SdJLdn2skNxup88EVWfZBSYQRhsGAvvpVXQXZ3uWYqwtyqUhu15h3Caa2czqBG7MLdYcig3VfSPRsF4",
  "key25": "4Wq5E8CudCgS8aTDTNsBUc3dsWcZHkbfc4C2n7TWkRPk4M4LeAu1Xyg3qLmfHmRHFrBT3Fp1kFq6VdrJ6JymWk55",
  "key26": "7FQMGKoYbZascMNcgrzRJ6ZCfS42EEb5S6xY9JDvhdfMbHXUHWrGVLKc4Rk4hoWycqeAp2Dn9CUcwdq2gnprdvt",
  "key27": "5Ti6BzUes6amu2P5Re3mV26sPrFbii3U715YggQUPh4XRM6Zehrad5mSQv8RfgGNJyHvhqPWVvG3YyEeNvAiPyKd",
  "key28": "3A8e1CYNkAXLkcYQLBHWc5jwJnFWE85dwqB6LxTbWQvG8sh3E3GtA3WLYi39uoHqifTW3bW4i8ERqmyKSe1pSrC1",
  "key29": "4cSCczQZh4GGimTxpkm3hBuYEfFjJYu46mCKZ8Un8K3HhdedHQScTqmmfb5qwZisDU7Z4B8q7yegJNAW7VMrDAyU",
  "key30": "23qLbtiYxU2JZsaxXRVMjWdfrEV5V7ecYvK29pck2vtE8G7vettSBZvBAoQMyqh8Gm5scRt8ea4hhoQjcf6pBuxZ",
  "key31": "63mhYY7UzVwym6wyhg2DhcwgXFaFuYck5Y1mXDRTqWnxcfz6JfLvxjJ8RYT1mDENMUsYBKE4BmbSTnDQQPWpnRHE"
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
