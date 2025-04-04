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
    "3mfuKxSFZchJ9i6DfecppGnz2keyvQVc4m8FsG7KpYFRAnq7zFSdzrZuSemb2kh9G898UvRWCPCeWgCSBBZzZzC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59yABpYXqXqxYNaQwRLcNF4XvEs5mhWwvuHePwzp5NNTYvm4iGirm6Tz8iF3ERWKG7cCxTcBd74hw2fXjJU7pi1R",
  "key1": "5wzT2ZnKMntUUrLK4Ma5kvDZTYRah645gkvWeMpaMTjaXAUiFDtgoX55mkQgEthpjGTpjCLaQ89eUD4HnswhYMhT",
  "key2": "5YgB2Rcjc5S7g5gKWQTpiWM4XeW7VCxPWxnxEKLduhvdj7Y5tEWE4kvmuMapd91F1wZnC8rDcKN2zpX3FPKcaBcj",
  "key3": "5WCfLBsqycvgpmU94rUtUAd7tMbXhmnPQhSdh23CdAJMnUAjTzTMSjM4dDXwMJ174qxkFTo68A9cnu7qG62GVid7",
  "key4": "2mnHyuEPN7dN9RhJL7pjoHkmqggxT7j8TgiKHBzRNmjafUhPLzce8mXK1b4cwr1641tUTW4mtSp8gFEk5UGFn41M",
  "key5": "4kboim5MxLXbqgf9ZHsc7DpWksCtdKLfR9Ejc6fSUJtUKA3DUyXCrUZfBojRhYz6LrDhPEMqSvJswuPrJKbw95VJ",
  "key6": "33hnVnR717aBxLU1mtaBxgfjAUzsfsS9o7n2XekH73ncfjM4evE5woQbYzQrRAVfKoYNc5WybJ4PaMKznBeUX368",
  "key7": "4tbWQedm1nLBMs8cbHT4XpPjJGosLMyoz6bHRB4zjrSeHAJuB3GNbC9qSrouGZ2bRuT9dvCJGpkwC5eUHBzVLUcQ",
  "key8": "65ymadNCGvDsUfXX3SorrbhubsAZGxhPnqJKkwan49dny4LucLjKhF4EgnY4x7NEaTjRuo2p27R9RbRPRaUcv6i",
  "key9": "4XodUeKsvwkh6XqsL9aJMNTAiaHTz7MyGRo51U3LPZXaz5jGG997fnbtgWRiokG4tPMB6YyM2AWHmWh5EMguSk8X",
  "key10": "5XLTp63WthB5GCAJkSKs1jtfEmkdECoaMt9gR9BkWb6tpZJD3fAYLt8RfEXZTXTr1aiyHAdf4zwLesPG95HhKKvt",
  "key11": "4M3u8CWfhmqe2achzzEr24v25DpnfisuvrUpUrCyywLFyBHx6FbZBn5yMN2E1PnTDWhavoZvggTZTSE3LQBG6avi",
  "key12": "4gpuvZt5WEXRnmBLK4dzfSpnuT2FYfrgGEyLNkFD1a3aB3d4nRDnMRhoFZ5DEBpUTcVtaoZ1bsx6T6bDXLtF2qTq",
  "key13": "5pAfmpMGYsSncoTLW6iRxs6tiPSa7LrH9jbcT97zRG3oifAm6Xt37sqyCMkT2dwsPxeibhFj4eD96MMqZJVm9QLq",
  "key14": "5f2RSN2rMPfiS1guLVWr46hW4aa3ct6urKMXM3HMpnCk7zFoVhJiKcTzjTSKniSoaN6SU7YWjAMsLxawSSskhwAd",
  "key15": "c2EFCJSUPfFX6B5fDehxi34Ksn5czkH2NB4s9yonuJqkvYnwMQjLwGJwLVUyy5h4tThBMEPH2bdRkxbWPH3xFK8",
  "key16": "4N3997ZUjiAA9HMeqbqMzPYuFguKg8w2XNVCv9GEEMV8Esxu9EBEFzZW4GaiPR2kVLfQDNzbtbtWVaocBpGWWPNb",
  "key17": "35iApGAogVbDiBmmzRNYaXhWgXm155PJpgaAz9TRiscuca7vdR3joFKStezSKytAvB445kyoRWfTFCewa1tmtjkE",
  "key18": "3JVVsPkj5GCSyTn8RG6hNp1VJzMRTTeUXNNQatEGEPaBwWeZBh76A6SLW2gfXpXbwpRnk7FDzrf71eeBq5JWPvig",
  "key19": "5WcpTjuQzUdusBQHYWLoryxsCvudDXi1aQtvXEPAD5psEFrNmb3DSr2dsmNQBmnuLWE4fub79xfssiwmkzz3yMgc",
  "key20": "5iTjGxxxXvUFmTeMLGrEWAjNi3NzLBNonZtCtTrXC2asvgk57o2KaQq8dgk1RTt281HfNgMgqUKARGJtW7w4J3Pj",
  "key21": "5CrkTzxpW7UUgdrHdvpLxkmyRbU2wTY8JPZcZJ17TkBhk8ogMXe7QKTaRwb8LyDzTz2dN2kUgwxZ5mQF9fBJcNyw",
  "key22": "59G4cmGPFhK7SnBLoAmuQqpH5tq16PeW71FmdQWfpXACktcr2DXfeu8F6jLi2vza9DKTKuTbfPVyinWS4XFVq2BZ",
  "key23": "3VzggEzBYQzYn5Poh2wV5JKjjRqqcTgjayzZP2S1vLWN3dgGPgLT7s39ZGKcCPZcYvEQUxwMtQ3tTR5N9jCiKwAm",
  "key24": "48BXPsMpYvyEZiCqnawiJZyVeNjNa26D8GmSfdP8txX14kzA1DQ3aNx1gmf6zeo7JeMi7qzPkUmjvYT5o1N7i4M4",
  "key25": "3ZyUojyzmYSJfZt59gksoFN7TcNt2vAFCRwdfZifMAQr6oqELqAgDHERu9iRgWyBuqisRis7QkTQ49wwGSvNRyvB",
  "key26": "2c9NXjmaK5gB3xUMCwwRiKvSd4cYEdTv653CqKwJbjRkX9F3oWvjuP7TiTZ89rDpYeY1jiRDVn2pSEQWTXPP6u63",
  "key27": "FoJTCVG3mvqYTftbNKp1KqoT2NCvQDnJUpUpx2m5fabs5eN7y9VApA8NxLyEkCZh6B4SWo8xkE6me91rHjpCasp",
  "key28": "41qcBPgcTHGk5mfoXfC9VR6ZTqDneUtyTjr6GQrRzJzsCjuDsgkGcT8pAPxy1HE2f124n1LioXLZk7QZqaSQCLqM",
  "key29": "585mCHMQeVa4oe3XwN3ddwvzx9h5hCoccqH17vp648rEy4D7ZMGw6Kf9a93yMZuxsUuLcUeNQH4Gfro5P5zvHucb",
  "key30": "3jHnukZm5eC5c3Db2H1xrDHuLHwCSGzeW1pWWEBdHscifZwoqWdxQ1UaxAHSRWhXmzPfMMYRmM56Pk9oYNHcULTR",
  "key31": "WnzBht72fEPnQP2PkYEFUdPH7hziPyyuaA2UubPtVjtVzN6GKdqQQVNpGqVwjBbfJDoULcCMW8EaHj4WVVuSTWY",
  "key32": "PVwixgwfSt51zgiFt2QyQEC7j1bxQ9GnJ3t94oRoyHHchk255Xq5oMfU6Zgjn7DdULjWqjB5jwP4FFutdDjv7hh"
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
