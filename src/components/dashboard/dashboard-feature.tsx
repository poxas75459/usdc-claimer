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
    "5m3HRxxbX1SbYZ5AWQF8y8MYbpZP6tSxS3CEJKaGqjVEi4m1LrjCrkMsQN2uwXyc82amcNgWPeba9c8Wd5uax4eX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2shqTHS97jz4LNqakfEqmtN15GuHSiF3vKZQWhuWXkxZhAHw5F3LNuzroVZw66He67pWYiAJy8noi2WQFrWwuxB",
  "key1": "4NTwBhrEQvJU327fVosctThzf2W7s7EWjSaLWsBYoVjvBwA1A9dp9khznaKE3n8fc6s2X76VaTxHHm3XdfqxbVs",
  "key2": "3Ua8WCB7YfVjHdT6AkpyrMvS5K8Yv21PF1hBbpZNgo9VD8goCQay2et4N6fkVVp6U59CtMoPenZJBSCHWq2K6UyV",
  "key3": "3RTpBM589zR2zxXLRrpV9asar52NuG4TkSVSKftT3s61YFcRtzd5iX6hjiBwWgVmwMxU6AkCmeQ6uvKXVWFBT1Kb",
  "key4": "3PP65w8e9dcxMRgEBhkKBnyFr2S3uqVKLUogxPVJJT44LauaeXTxwYouN7XRi7gqjtEo7WC7kbdLi3L5Jqgpi9vX",
  "key5": "THwzkE7GVy4U6XjpbtYCDmPKzQtmQ83whCVKEbt3G4EqAhuUdVKLYehMKxMa32sy1hKAHGcdg8g3KSLVtAJd7sb",
  "key6": "38EDyJX6czWAr9yg883xa7NVeGiHzgoZRcxoqSuCuuFadGhGhTwG8jjYfkrT3yEe4Ez4XB14tFm5BdPedB5p4RqP",
  "key7": "3oJBJXCmUfCuTidzughRoDCtMLTzdhuqCFsDbCsDFxSjtpbdhJ5ZJ9e5iyojMr8psvYRrpm9EJH6RgspiVTaWWep",
  "key8": "vNFijK8D57RhjHAsdpugwFT8onorMo7ZN14WeaUJDanJzEoDoAAEcuyFkvTSvLqnUkwPQ2Ka3RNSM2nbSozyeNf",
  "key9": "2b3oLfZi27vaixgG8532yAY8V6iRCpmNmCNkA4iY5f6e7NsektVyP3owLSmxvLXK4VzPaGdHtke2kEDmNGT8ahtS",
  "key10": "2QthhvbUQvQDupj6Dm2grPcC4xgcv6qh9zRRJNHtNSXFkoJeFH4Bd5zjxhApoKBNSCB6WKFRFvF91MMbtS9mDf6U",
  "key11": "oNP5kZy588imGRDszRUpeTMedjMwBoDfXZ3bzkT2yGNk1bakvH6ZuyA5EqE5S73Duzm8nnSdeM1Fx2FVYkGUUbm",
  "key12": "5j8FejMCSBZeF8uwWevX4AuHKPobgD3cno1KjW59ZfSPb6HuJWyxhKwr67JFNswNJthZwebzadjjVRN5VjWDxsDu",
  "key13": "2NvbMA7X6CUcmSQxnMUXWBiAP5Raoz2s6UnrDGUkWdedRSnprME356Tu9juobCKvAp2KUZdcfugxtaggJzNTN6hq",
  "key14": "2WyEFXiJH2PTCwgWXPxnYzU4oMkBqgJQ2x1fkDyzotYx7UCxzQigJz9ozkVrSTqBkfEQKNPCKUGLpbSNCTbsqmim",
  "key15": "23CobS76EJjDChaBYdQzGaN46PVp82yfrU2EM6W3D431noYzNo4kTBBE5QvduaZBo5xkfmagNnebvUXes99bFEUW",
  "key16": "28FrCMinHkcz31E5bA6LnfKN2z9yKychZc68f1dcPHDTqPEUDgynGxu7o78zFu4HimywR26UAm9xtHcTzqVMeqVK",
  "key17": "5X2Q17vTrNhkFG1ggfvZdgAaKG8UjF5bkAepcnJQUVmS5tJv9u6jR8j73ezhA7Pr68gZweakSp9QXaZVnWNfUnt5",
  "key18": "3oooQAYCmWQb7wG611kk9yP2ZrrNy6VQcAVnfiqgyJfhQhvRadi7diQ74fF6ZmWSCzpoKHaREwWcNk4yicogZuDi",
  "key19": "2VrRiXkk7R2xt8D1unDK4UegbuqPY1QXUboMvf1KhF25CnqPv9AEzNTHbCuKbGLxrfav986zyqi2HGiB7seKGHnC",
  "key20": "VaCMbxQ8YUVFkzH6yN54uMDkqHGLBVTZjv2gkKtLGzYKZFovkDDN8EwTJYFhiMZwkc4FF5bgzrytSCWn3SbJ453",
  "key21": "5ntv13t1JVSu6Yv7tpQNfhgm4sBw6Nezm61ndfyHtkNd3Ms3bUwCbGx1TeuJvXbqSu6bWx8eg8qsnCnAK1JmoaK9",
  "key22": "2zPZWQec2u9B52QhJV8a1QKeyBGXw7RawhWVYs8fRvjprMJ5jmu8pfKAgRwy5csnGL1h8RtsFcYrvLkrNU2dKYYf",
  "key23": "PZi2Cp59VEFhJsXGAwXGML6f77t8EngYBfgQtkHeLpnXQBWTNvRBWpgQxGsVdqD6q2H6CheqgfkagXJQ14kbSp5",
  "key24": "4Ljuaiybb2hxJhANThhsWqFJQHgPu7Cf4Jyj1WS2C6E7NmqTZ2CpjQz3jXp1fAqjtwnzwgzf12vrw8LX1748GaPA",
  "key25": "3AjsFaTxNhDyab2ZM6LTdAE1ANkDaKE847GKJnX1KVqR3iJsfRjbUUQSfRZgxoQt6a7ZgGbqiSs322kGGBQVVajm",
  "key26": "s3j6AJ4LqA67DnoatTCsaP4qUZP5RE5JpKNYERMTXxVnc47ncutqJRkTDkzQBsutHUgi9xXE3nhZyKpiaRgsb4e",
  "key27": "4Tm7PrMNPtoJY942iejHzFGPdXknbJ2CexdzoQpBbxPNTtK9hgsfjyktfrDaHUgUr8PUUVBHKEUJMhCkzj7WJEYb",
  "key28": "4iEX3jUCL3HbBvXxhX9HLy9sV2Fp8ZS7nEsaxTJB74NHSFJmA5ujgAJrWN1TAvtMra1CTCgeTFqg7JVVU4X1JbQd"
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
