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
    "4AzCufhxBLDCbgHAAj8FLCgCbYu7g9p18SFVvqeMtRPJRsGaNjFLKGR5qE6TUdqt7d66CSzuqYMfA6CKNWKC5hFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iCVfAiHiFxePBuySCVsa7JVMcqbpopWX6P9sZXiUCSJBMmbTrePPcnwKNqdJ8vav5xJY7hnwDdd3QB9N9gCERkX",
  "key1": "5j6oCc6MBcaScvBpVqsGooCGeZR4Wz4mbH621fAMhZweVJYduLqD4zdobxPPf2gFDxJdBBS6GCVaJWmfe2QQ6VBq",
  "key2": "5Gp9mAooL44XHafRDH3CmCixyRpNAMHysK5GisBAph1zQWx5qxdUwtkZrgi7WB7hvNX9QtHEpGKGkzXSTzBEuEHe",
  "key3": "3coZTKCGyckRgxaNa49GCzDfnabwjaeduQGjbUuBAE7ZtR58hsKynBkaxrNg5cipLEkkT4qy66tHCnD2JuruZH3H",
  "key4": "2hPzbe54MCurAXT9EjeFxmjnfCm6TvBVmAVvfUk1mgYfbcKRe4qbcHSv38Cw2eGY2P71mh45PAxeprnLe5tM8kQk",
  "key5": "2B3VnH52oHrxiDXP2rHEkPyULDXKknu5FnVUJtpbR5ZVhrtjt3dUwg15BpF9xfVQJ8HKQ8XjEczeS3EMnyuvxpvr",
  "key6": "4WT8wTQ4SRGv6aJNzdobhjvDruryjcuSE2bzVNEq25P25Sa3uSeJ7aPsBd7D2y67aU6GQjeTzgyDE1PadJcNsxvm",
  "key7": "4948mQgpf6sSGEfj9rDMWUHaswEi9MJok3qxR66Xm62P5CQpeTyFMjCnvk62mL6WpXFsvqVZYLFc5ccAiFeJmX9H",
  "key8": "8AFvQD64BJdV4msA4yHhP9qnL4Bv8ySxz69Xg3hfvvCaCHbeoa57N8TUFJzkENGz7Hbfk4FBHbwNQbsdCWPbLQp",
  "key9": "56eykQLPhhyZqCnkYSZRyHkZgERkaKfR8CPKgovagdfTbmQVcdnZkEszaPQoTyjz5jY9vFAx7mszD1kWMyGUPb19",
  "key10": "4d8D2yDGSn575QtLFpqUXfEwyfYAZs2KCZSs9reD4VLNg9eZ65JM3DavQwbLTYffwGyYtxHzbMV3MCpzysytshFE",
  "key11": "3ELB3pbDtnQ5undiw5uymTYqBZBSF5ZKXGbvsdeTAJgrmSraSxKK3m7hPBunYHcGDssNGQNTfW7WvJpC7q3QT2W2",
  "key12": "5X6dr7V4eZGwx2JRyeFxmEUihceKcoact9dZvSrnp9XcaNsCuAqirpob5quK1LE69L5Rt6LxVGzcwGKJrGYSpGPE",
  "key13": "4qNRdmwkVL1GCWAhfJjkMbXdhcjSprzKEDZuEKkHug6hTdDFRqpxvoR8KXpaMwTG8EkBi5rX9i4CsB6zwrZhe5qQ",
  "key14": "p1nXF5u7g9oSbrrF5WK1QvztmfjAfw5XDXajdoiR5MHngkQAUDN8pjSRtYkLNpY4j59N9CmStFibdmSA72mpKpa",
  "key15": "c6zmienGbunXCysqbetd24qy5BbBfY3Mfz2JnPuQucT9Q9vPYcWEQ3EjFmpbrvYJVyzGxwXBt4foQTtUMnjD5UF",
  "key16": "5SiB3nb6DQnyNizx2bPPMpNvXuLN4F36gZDPGbEi5MNLhyqesPL2HT2Ba9RaA7vSTzNVN6r2pxKKZqDPiDnn6Sx1",
  "key17": "4vTt7KFmYScCL1t2vKARjomeZv7Vc4Gb6H66cfGcGqeJYJzRaS4CwJqckHB91j1zoqxvAb4esJHu91RC6CeoUqX",
  "key18": "kgZ1A47XtkzEVrmWpngFeC2M8sBbW3s3AHgWnto9xtegrUNMaFVYVykqPFv57PfE2coDwde73RhPZHr5PBU7X3K",
  "key19": "4beEXxMagfCRb91GujPg82qtFQRMu2yuGeU17e668S5DgYXweiSkLHj41rxYSXiNp1xDr8YNxHYh6nYX6ULABqjH",
  "key20": "2L9aFFT8UdokoEydpJChP36XWddTihRyNP8pD62UtW5bMcTW1sAWHVD5Y4b1eFCjGErYXFAHLrbYzA1KdUDf7RpM",
  "key21": "67nevuNVHG91JMZjvP6HmWHdZ69nTen6x4sqrHYSpEERbReqmCERXJQvEmHtEdF2ssqyMUmnNXBnpTU8usG7QY3L",
  "key22": "4VDWU4BU95jkK4E1Mr52TwMvtunYXkXMqfMDiMN9wvvrj5fotSrRHYpzH3AE3McoVpKusZiZWx8n6eKfxze4zhiJ",
  "key23": "4u2ZMD9i4Wnx19VHvEv38JsZtQ8LNYFUURDwGssTnsLrG9mCdqGamgZXTh2rk7rE4LvbEmw2LxLsmfR9TRPJq3cH",
  "key24": "5uRUbH9wZUCe4pBhQrui5NWiCE1RkebA7vchaHHwSzKGfyRgTC45vaVq9aHitcB7pnkKaUoUmWsBaATotHERpXgo",
  "key25": "2ExNtJEVsebWXLBnXBsn4hJm5UFtPscT4UewpQtQwFJMVujkX7ihxZ8ZaCeShHy8ettYLEWdDrNYJrSVVLwF8b9r",
  "key26": "2XAjtVGR8SyjUdYqbxcKtPaNVrnfr2nipKbF1meECLDgnaSYSWoGdo3jXF1u1VbpXZ8iDT46JdUQaWWUqDv9RSdi",
  "key27": "3Vy81DymenkXur2FewV6S1BHCxBbB8kUxWLjEpfxM87TU1sxjEQfJr2jrAE8C1wA4WxQV1kZSEpsxyWp2yxJ7oWC",
  "key28": "3tzuAMM82Uq6FRYTcdDi6uKGHsgYZQmb24LNdtJHPRrdLyfwiEgdr2bosPe1g1RdjxJzeR35fUBhUD87vWaTj5wg",
  "key29": "3DEeavrppt3Lu6GZZXUKSuxGAfFLuP2aFjrpE64hUsRXF8jRzRaVNqTSAifYFTkcXJh9HsyuCRPS2LQHUr8GwVZW",
  "key30": "2M4GZVutcJ7c5Qbgz4eGQsUCLfzFcVFmfBhoKBh4GuQnAHep55PX9Jeior72brw26mx38Uyvf42WHQdrEciQPGxh",
  "key31": "2D9vBjh9hfC68LU8iZnbheDpHGj6JZwCQYsYs3ntUZxcz1tDEQigDeELCmSrZc75eLDvMecEgmuy7KUu9FbSjaVa",
  "key32": "3S9pPJ84hwKkqfPLMvmUpoS67gxHRomgtppQhDuj8ukzJPz472ojXi8CP1CGRaPSjHK4e1GFjh4GusPqn32moKc",
  "key33": "2UAfKR4ALeaTAKLEmC4dfmmRZn6Ffnsmafem2dto6PKSmjzwecvcr7aEGG4ZuABnSwzpsj9oQ9hfUCejXigf38iH",
  "key34": "2msWqMSwKdQ4x4cSALSUuyvzWgJXSz3gxPKqtzaqeMhVUvNZsjJyp8vpJEuFYX3ZEUHDcQ6P4ArVt5B3uth2iFD9"
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
