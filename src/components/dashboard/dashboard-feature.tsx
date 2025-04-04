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
    "4jjYBxh6MfZuo73A1Yrt354E91xCwTd8xn3ze8v2517hha65mJd6TZeBvXRSBdRUfezN15EcQNdJkz1rn8wwWd3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62HUH1po5dnWqRKXN7cbAr2dz7yibLnpz5xE5FriGa9GM9b8b8sL8w9MtCbpBysHaXcyiWnW3kouRkJRUn5nHhJh",
  "key1": "4g1qBF3Uso9xwZpqWXkeQjDyfpTDyQCZywCKVf6jYXDPCh56Ub1vijrV3Mz7Sknw8P5eiEYQWnR1cCuS4w2EMX32",
  "key2": "2LehPVDSHHAaR1YcVCaRiDbeaTzXXWRXhAPk9g6emy8duaDP6Gf7prtDjuGXjJTGU8FYMq5Sw9kKWrRLZx6igyWE",
  "key3": "45i2inSXuERqhJFideJFZ1ngAqBgmSoiaGPZihBwCnRTroPoLWJwZu6YUVQsf6NoCSB8VUSnStKYgqws9WKvSSLT",
  "key4": "24PYP3RAs1zGzeTRfFLhWe4p7VNpQev8j8WkqGBzPtrS8ZDvwQVE5fZ7nuc9rSp4ctirSve9186HwWccjEAFFsoX",
  "key5": "4hRQh5N8hRGAySEDyk5BMRdd3wdAxBbejEGaLnV3hWJA1cs6DTVazVqvsmiAcDuVC9HbiisF6P7qArKc3ttH6kuN",
  "key6": "KZR3k3oiPeey829jhvoqKZKsboxhHntKY1XG6sLoNhdcWaScXwLir5ieoHCYAAPeiAec4UtsrCgykYH1skLGWeJ",
  "key7": "4rokuNXDTNi9YmcKajx2QjKGV2xpr3UKX3d39aAfb7vXGVHySkoz5dcKZu8cgCY6yuKzaCzDT1AKCGNprUp5dhCB",
  "key8": "3GCfoYkvJBnP6w5SiesQ9PTTzVmHFTYpRGamkGHrwktzmVBU5A821SfnqLLg2LpvQXBjs8wYejBrC1DoQvFaspp2",
  "key9": "4ma3VAN2aZrLms8w2nKsMXtmYSv19EQuMndqX9cKzp1qzuDshct3ayZ3vckbbk8z2RPKDsNfaUXfrMvdWCxz6sPa",
  "key10": "4L7TZBMxfwB4ZipPp9TdkQSoEGTFU77FB93sAV6rJrdTu21v3tpLJN9pxRUo2wQDH5Z8BuucmFZbCG5JvS9Ub8JP",
  "key11": "kG5wNFKLSdLpyoT5HVsaUpNpMxwFthrSKRZtC5J6XPyn9rPKiwprbQy13CrodjcfV13TivkSSZtaWFMgn9XV81Z",
  "key12": "5EHN4Zny1z6LM19qn4zbx9WSbUpujtsmBiajDN3CSAWN3HBs7STXVgtpnZxoaji2xu1xggFY43NQc46hJZnAhHp3",
  "key13": "NkkXHU6wEX1Cij93tNVTzx9xLJtf2hYu6HVSED5dFdt8mFf6xLEKgYTEHiJNM3Nvcom9MT41TUrpnWLRGQMkujX",
  "key14": "4pywSbhjafkbMDaieHGRoKCgAruKvm2GbPiJWHDLUfSR7tjxfhJDw76gw5yfiTCyDEYrN7TLznC34dA64Lj7Lia5",
  "key15": "5abMYU2xiJHxzny6NWaVzd2AqD4D5kh3K2oN9HejPznstwiAUy7EQ4tsKVXizdX9Aj9jex7uF2eDL9fuwSkQNJkH",
  "key16": "4i89iLqtjhtmb5WRsB6zaiRywuZHfuWjUkqjLRQyhMkC12mZuXd46tTsiZ741sGcbxv2ZJ2dXCeWHsGityAQA9pq",
  "key17": "He66G5vZQC2LtXLqhKKVunuipMNtgGM9DrqwU951K8BJo1ho4gSSrbETGzmTjiC8njgNxQVEpMvkzJfGQuLm9hQ",
  "key18": "EmXcJMrzsXSRRyfGms7zmxL48YoLT2aRpaMYdMFSiqCLJNHtRDLEu8GJGZALVLGMc5EnPQAs9QGwCHdW3SsTSAy",
  "key19": "4oQsne1qzoAhd6Ka9K25RCCrd9qoCVmjPeyZxnYZyfJvkDkA6zCXpvpjpp8y8UGqZqNGHd5VL6B4fbqoLzfDiekM",
  "key20": "4if1Bz6xTBRmjxE7R5icZXLT6nUKFN4MEpNvxU6o4xNJPbEk4Xkcm94eRju1XPuCXKXiGjfmuBwkAtNNqjVRZSAY",
  "key21": "51rs2Rtx3dFn2gEvT5ZDnsiBJv5bKr61ACn49rZanyJLmP1yo6oG3g75MLwgJKgGFJiGRKfmGHiqrnD8Bxi48BQ4",
  "key22": "5EBo436cvHNoqk3RrbRqqP6qKmZi1Vmt39DZuyh7nFYWfsKnmRvh8kejFSmm4cJ6BAXVvyV4VioC7a2bysWBuprA",
  "key23": "3xBu1sA1by1SYDYhDaBVa2pwGG5nd67kPR5piVzKBU9pevhsdwd2btYzFLWJYtLrS8LfALzqY33CWSJgYVTETwyc",
  "key24": "3EcFRShC4hL4EHSMMHtHncqJ1GmZCHL465mEJdaoZuDorxx9hWtMQgFxq4kj1FWhZHzQzU8Bk1SBaNnxanRj81D9",
  "key25": "4YtUpJkpekDoZHvNcKg5vGrLoAxAknmnMt5Bh27y1XBwBYYPYPxsdHuc8Dh5yxWqtAJNpQqAYYJ7qhxo5w5qMNSc",
  "key26": "2vtaiqE1Twc582YnUWiQ2XeRxV3oSaMdm6PtBfmsydq4C8hF4Ffq5duBXZq5KrbA2xYCKNJu5QmoRHDwaaBhzP42",
  "key27": "j88RDACjjFSzRe5ikkbUevjXZD4GqTmEoyZ3XSRaxyP4yjq8dAyyX3J5dUTUTGFeBh1akfUkRtyJB64a5p6jZpU",
  "key28": "35VmmHqdDRqVAmi6hgL1FhH1SvLmNKrHuP65ybZ813ULFuYNh7MBV56yNmP4d6UhQrYUYoMZ6cUYSxT23DzqVskT",
  "key29": "zKUmLXtnBNrnPaoBjqfH47C1GvJRsuKQorwyBwsNrMxDGaCQM3wkJZbBZySVtU8LeDsEbn832pnYEFPNJimETu9",
  "key30": "PgiWnqmyxE6SLKs13L39PXGz4RQSzE6J7jisDABGHbaKJL4wEGsDfKb3K9aeAPqAMEwx3n4LMGYkv2M14CLDKZi",
  "key31": "5Qwvi4bLg2bT5dGsw121MA7xLG7VnPAGZYkGWxSDYCxoYzqPqwLhKh5pGC1zqkm52bWjiQKUZDcjen1UgwoLTqYN",
  "key32": "4xrwy5pJUUhf3TK6qrmucra4BC85zGjsSXbv1UjPvR8axc51iiLEx3dLrE8AQcPxeXpdSmyt3qsYcvtDvBa9q9jX",
  "key33": "5vuUV23sP2tfpazSCvrhzHxgNCbMQ7FLkFnNs8jc2LDYqyTFEkuDg53Fp9XGr3vrCssL1iwQjDxj3x25woTR7qdX",
  "key34": "wT9fndJvMDMd1oc5dSHmUwzMKinUkfZ1FMgNrZJ1NUyXsX7qpq89zwTGYksNXnJLrrwwRibiM4wT2Vd1sXdmeF1",
  "key35": "2W4nAyuLmoi7J9Zk3JVrX2yuihrkjZ1txzzSmRg4QHYXuJWp2qQPvyvzyKJpm5VokxSURwpbpbrUUw3wSTks1AfA",
  "key36": "275eyn8vxVNNhJzDXs1Rw8TmidamgNa3v2wfFm1eZapoUeFvh7J5ZUmHmcCQpTBH3fsPkFCBCAQb7jEyDePb1U3B"
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
