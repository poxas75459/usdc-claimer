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
    "5S9VUdBpiLuifeueNYec1Za4ATuXDihnrxXhPoutKchEGWQSSHuq38ckuK4gk2Kw4gFh5P752GBSAP9V1w8uF6q1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MqcYWDP3aBbymkPQrFEM7pH3GdBkK2GCRrdXcdvGiEpcNdrJfn7NrJkYUMGRUWBe1eqhSzDq89tARNdpygXqznT",
  "key1": "62tc9T91DPkKET2j1m9xC3Hs9T7rgdVjFBH6za2NnrUgq6fYgkM4d4UKNM3zB3zCs2QLHdYxkA8fLjRL5u6HuJa5",
  "key2": "321ekZH2VLUtH4Bc8FVBfWsRuG63yJ2VR4zmyZEMedv8pjTSHYwLYbo11uqNH8YXZXXL26DusWsPmqC1srWwo9L4",
  "key3": "4bDh4ZtNi2kob3VMQMKtcyZA21HmdhzmxT3R8ZRa9hKjNcrGbUfmYUR8Qpwd8qv3QJpbo2P52pvGU6ufVK9Tq7oq",
  "key4": "5d17LNPoHEquQMgqpTUDtJMVzYNTNVBqRkLhd4MhjWYSa2Cs9bz1BWAPcU5QLBZgtg6RvbKYG2T7sQC33cyrUAov",
  "key5": "2P43tE6bVJ3bm9fki9dLFgYM9RYKXdBpiYCcniYwZSDJzc7TUw4oWhRzoHKGHnpSH122m1CLSba6oKoftBjMptSf",
  "key6": "5toqN436SDiDvSAkJrGBCpkAiLUPANmy1hsSYsiwGuQRmMugqA1aRdKo3dEJugihtWcMHJUiHP61ZNyTBdeEuWej",
  "key7": "2dww5fjkDAuoJbcanRcoS3P7uWqSjr13uTXezaDJEGy1f3DETHbFkL4bpmcQHYZJBhxxrPoJ7MFfGko9bXUh13st",
  "key8": "cJS4JUSY9ThTXeFtxenoW2NoorWxooeyxZrESELsVy2Q7a9aHMQFvBrj4ypteN3iKdTJFsWe58cSpFKfz8edhGb",
  "key9": "3QRUpeZ2h3qGa5fcNVN42bpzeBLRpeRdEeVzK9PE9AX6EnBhXgjGiiRBrGZXi2SRcM6SC2PhW91w667bcJAymqXz",
  "key10": "5pqWtXzBDzcuTTRL9sVHNUDbxefCpMitcCq9oZ1GyQapvSngjFRmpbyWBQckki9HkASyLSuD3nMk3Cmvm6gx2QV",
  "key11": "2EtMaqXEwbzoTsaayFZTcbsm9W62gV1EeW3QpZyjcLPA7gM7w9hpd1RH2F8rvh6GStUvw5AuZXZ6jWUd99eSTy8E",
  "key12": "3nHhNUZ6RSQqSWLF4WDL4HhBsGjZFZZoXAqenurVh1SY5TZ3oF6UHiDm93EuvA3N4hsVnSCgZ5TpapK1UGzvstCk",
  "key13": "49KmBBN7tLXdgCG1B5BLtqsgQYaJgxeZ1uHJKLqe645w1wnPkWX4zt2WdXeoVBYSNGChsVARYjznv9hfTy9wz6Nv",
  "key14": "2xw37mYwX8U52YRG33gLJqhFc2C8NMzDFpPS2mELRBFqCzBAvAna2BfhuDVjsymXwbBNSyuPxvMM2EyQUBnaJqXr",
  "key15": "YQYDmveyToBDoVtPM1JA9iYL66m5xgM1HQv1r8gnDiCPi3jDnAitZfS8U1YEn6nETGu5DhextHRp3wJvBZEyie7",
  "key16": "5zsdbLK4u5vkHu4zFEMmQUUMZdNdJQqZHyB2tLeKuode3wsF836cJEPV5TE17pVSrUoM8FXvnwobGhCfY2j1mw1i",
  "key17": "3j2xUnB6vqq38YZTNUkx1KptdvJjBdvK3RcX1pZr7w83iBja63AxZpFLX4Kiphzp39Rb6Fhr2s16heV9ZLR3Dwis",
  "key18": "5fK314SQmugJp4VLxCAWUMh9BsJeJQ5LJ5cE3zYa8HE8JeFXyKmFP1mkpzMWF7yidarmC74hjhMgdEvrPVJG6EhA",
  "key19": "59zzKy93avaFCPXueejatQ9NSnejnWAYgmHQCYVz7uy1VpCAGTBVHUUiwuvdRga8dxQeNpSPo5hGTDoy1Um7fYSz",
  "key20": "vNv91caLw4ca4fLsNHeACsi2Tc56Px7zhoH2UpGG38zHKQDKCviTkB2DWo56BT6iC21W1nTPDtigXQRvtySS5Qr",
  "key21": "4JVjvpDoitgCpuFKfnezLhx8hrNqYnQWNicFD5u5uG92Gibqiu4PsRas318EciJsccXRmeEcdEQbjFVRyMbzGaax",
  "key22": "52itgshfmrvFk4C9gRo8CY2TvXPCPHLs9RmBsBhnQZdA9XJh5kTNCkiKoSX7UMt3TAfWXfSBMWcGpTM5KYuy7cCN",
  "key23": "59RPGc6PGvegdXJFBkdMHdEedua2LT3p2foU6LnYsN5BjkQmWafqGSUSFvCcEmQ3WsMjjBEYjwCs2eVjWzYzqjLz",
  "key24": "2o6h1Wg3qKxUxN2u4bYR2ZFy3mNrZiKLNtkpkVgxXQBFhh9N9Sa3AgP9ogver8qCKQhzSpnQ1FVa2pnPF1m1rh7J",
  "key25": "wHozpDdRfehvERr3A27x3uFujuGEHK8sb4WDZFGR6CCzSSJrEp6q24qjXmqimpt6FMy9MQwkxRE2WHbUrcRPCNN",
  "key26": "aLGRsScDER1huTiWbXLX12Mw8rfxuvGxWq8DYPAAd6vAFVcbBzPLzvEq2i6DNKyEy8icQK58xz6VZtURDR7vzMu",
  "key27": "5Ax8DMAjH65kytaKSdYZjzXCBWnf7TU3uQ9wFT5rfbaJVqY282Kqx9Krjn3GtsVs74yPZwnKdvLHoDvnYz6DzNxg",
  "key28": "4b1meccBKddTjgB622MzHfxvqGZiyzPkwqcsn9mwHcr1ZS8amLo8cLDmUhRWegCZARi18QV4F85dMS33S9H8QsxN",
  "key29": "2ZpkcMfHNBtMcZe8sir45G5D5VXbfPVX4QzsP4nfRJnz7S5qLFvo2P6dZqyH7p2jFHKHVgTh3JFtasc9xFprKgXs",
  "key30": "4sXvSWyDrAhJoVH3Kn7Y8DHrCwZ2gV77Y7MVMHTKeTJeNbqvyNdUzjD7sBqioYxsAM3JdpoWvoA26mrKNcdV3jpu",
  "key31": "AJNNLvo48NSHH9dEVFejCBwf2wHh1cvyBhK4s2CDCAKSef7RWZyvV5HDWUiTMmrMJGi95JYpv6GXFuy2UsqXJtL",
  "key32": "3swJ7eHvh5hcxCuNTzHc9WUmxavto192nMz2ph3pjWXA5QES3qui6e1dC2q47kzv3zfYPoPSmXNH94cUrGuKy6uj",
  "key33": "4pgCe8wjrWXr4f1S2KVbi2PsyjsJak4ysP5HvAvij7MabqHFJX7abquk1gR4jyjX5NiwzxjRDXaMt6ipUt5KutGK"
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
