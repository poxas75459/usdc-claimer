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
    "2iRR2sYwPJhPFk6TeDQu4smxB8febUqHR7uDgUsJPHQtPuQpjtAkMv5DYJGqJKhz2xWQ2dgUHyAgrq69SxjQDt6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "be8X9g4tnGM26ZPyiHbmkEb4CfBNZpeo9fGBMtbdWhXRnDRTvqtHGGEfcfbxWLXhHfe163gMk9wT81ADS9t2K2S",
  "key1": "5wmJQ4V6txLoK64Ph6JfECv5G8brSj9pUVwbXCZ81NrT1i5xLtfhD3TVDQ1VkH8gAti2S1haHFR5hnMcn5kCDszv",
  "key2": "2fo1K6utyReWk1JHSEebfYHiFvtv7GxmTdsKg9ddd6aD3FJCR79VR9C9QugyRhktfm62GF11F1rwchHTBQr8t6ig",
  "key3": "3k37AUyowYYze4ZZJnoc6o45RMJ7WrLu4CAqdMshyPtxwyMaE6wotBzXVxLqTTHwvRfQhFCH3fkNuUrjzDpNByc4",
  "key4": "RBptRTKucpMCNA2anVgbH695mhbqXNdSvi87vWtYXanS6GK71XgsvCgrfUhahqe8uFD86YXST5PDygZHU1AQXJt",
  "key5": "3Z2sNEwqVr9aXgcApu3qtPGiuKdYGa7QhgyZvz1SmScyzwaS6Pi5ZouE1CxbQUvMPdDPx7beesQKarE2rTLvGSuA",
  "key6": "4Ypd1EX644DZ52D8RRKCw8U6YrStgoer3HN9PKHVPYtxs2MRxdrkufZJvsYV4B2YporrEGimgPSEYpAXxxASd5EK",
  "key7": "4FzzCJtsShuSVuu8yLi1SsP1u1zfTnUTu3Wm2jRK8rPSuEyMhb7Ee2PpuSkfqyeudo5mNN59zF5qqYMwVFSEWEph",
  "key8": "5qJ1vyv9expCvcsgjbYgz3NWTE8TH8iC6kJm5UgfJhavwCkVRweQEu5b2UFyBCAwJ6ZZjA9WTZjNaFn9zCSiD6AJ",
  "key9": "64WCchy3PaT16RoTFu4ExJ75wHh3sd315ZnuvsPiwRnPPHN9oiyX4N7HdqQX7AWeLfgbZ3XqKwh529175o2ubkCQ",
  "key10": "32NbMYz3fQm8xSm3aQaqk3zWqgaR1LPoXiNWoVVcTwbPoHRgYtSoWijQZh8CfN9S5evF7nvS4tbN5brNyZbN3zgB",
  "key11": "26KuNiA54P8sNV1idrEDWKfvAcL4jS5hnGaZSBbSbFCBd7JbcY1TLUHesskjSegHZJJVLW5QKoYRTd5EdAZa9HQK",
  "key12": "5qDxerL5SYn3g6mzwT5KAKoGjuxZVBcMwUoq3V9pTuo977P2n55nWorkfWK3uNSbFARE1MB4qJUUQeSMxbzLi4h",
  "key13": "2nYiMVW8McJ7xuH5Vy6bAa3P5nunSZcwDDe1ZnWxhcD5acepTPJ4J4M52nfRhdNHUV6a1v4WUEJHAe36R2bxB4Gd",
  "key14": "5MrePkujSFsX1sn1zNae8j6aXN2CyFcid8qkqURjjWuMXvz5vVtjJjVdcg4byVCC5a8CES6NDf19UbkXWi1d7s2x",
  "key15": "4F21FNWQYN1ZTVfoGX4RyoPnsCnpnAMijogsiqXoPkwH8Td3i7rW3XBbiCaRCTiogRPbP4fRxVNCz8vba4JH5dCu",
  "key16": "2weXk2s6j7vj72G2JbDZkb6YqGonp9NpT7FFus9K8qwBcLg8zHJqNmNGJsc7TDkocpygadGV9zMZeNaqjLr6ZoWM",
  "key17": "5cMiHNJ12FkAG91MfWvczZutzevEfYobKMrRU8u5Txx4QpueFgfCMfKjkafAoNPwUjs9wh8GGKSKfBoCp88fRTH6",
  "key18": "3vfJqdAzhTKxJoRph3RpDaTTmafgtGC4UgLy8SoWU2aN8hWwxZwrRHz73xnWQZeKmeihQiy4cw2tTkmQbjXpdxmp",
  "key19": "5Gd3jgpPXb6UBUgyX3tKVBwK5sbNJarLRiQ44F2W42SupyZVBBBhotjdTB6TAvGsFhwEf29EwLdbdenu7kWKDDBt",
  "key20": "3mDwtWn6PEmpXiKTgZ889Njz7HRqqacqcJWZV3qo4PZnVEsQ3Mc394zTiyqUCjU5oaGhHGBx6KRRYF1hx3HXVT16",
  "key21": "3EtXxd1yxFbjcp2t9GwWaFFWsLJwJortRAtKbo4v8MgtdNYLswBYvyVaXDZSJJQ5CjB8ZH5z2p3atwp559vo3VxP",
  "key22": "4XPjshvZr5VMDCtpb7GRwgDtypB1y5ezvsUNWPDK4gcTUwxQhWiFmUbN6Ti88MWRTs2yET5DKEbxKnH4dcbYDSjx",
  "key23": "2g5mRmVLmGp6WKpTo5ykKQBi77dkVr22VFZHvjxx5hrk6CxhgRtkNT71BQ8H19dsvNzy2iGvmYGi1knx5FVnFEFQ",
  "key24": "67of7QKiT8zGPyHQo9Xtrs7ey3vgU7ixumnT2tWrnAR9PmXUmd689kNKdgfGQKUiqh93SVFPTb7KuyVqeK4EUmEU",
  "key25": "4tZoeJume65Y1HCgeVwDKQBkAAdgYzJKRF5aGhs5SpnB4oqC6uKUYXAQqYgfRTWxiBuUkqzt2jw45Dr5smsDBk2s",
  "key26": "3tfetiiKv4uaJtTpzcpGRFgEqmKsKQ9iB8nsrQVr9FPb2RMYe1rY1MDM1ZAab91cKox6w4BnBeQn382FUFo6hxMA",
  "key27": "M4hYcyWpwWrziFR8bhh5VXAZocvG6FXXiUFQSTb6EawyuhE2n5mQBj83Hsi5zbf7oXFsvUzo2dUCvwkd5dE1Ene",
  "key28": "5frDcCN8b1n5FBCu1dsJzEiH9ZyXTE21vGiHBe1pXxRWh9HmusHdj1FCj96UeeWjAvhb318ZS85mSJ8sXg7nJytL",
  "key29": "4aj6ahURaqsxeMQrNfNpMZx4BedBEkY5DZSZ8sFHHADDUv65BW6KnAA6EQjdKE7d86mMU9mHqmE9FdpRyXrwpobE"
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
