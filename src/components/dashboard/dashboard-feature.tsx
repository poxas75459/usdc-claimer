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
    "5YWucpjvHDhkPcp4EE1PecjVbrwzr5bAdE26UBgMCAeqaCsE7FiTtPrwkCW8JVRUsBEiVCsyU9HGD39wMXki8iUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zsd9oSoQcuEWnbEJSFuaMfpQebXrymBatQBRN6XMiatwPK136oJQVSLFuWr4BVUcBAdMgoZFjQLMLg6UWExyXmP",
  "key1": "4adzwwE4vHWDN77kx7jsCzFiWmR3az16sTCkzkvnuKFRKU7Nd1Py6nU1tds3XntN3VCHQhtsT7LXtsFCq7ZGA3Wy",
  "key2": "2oGJivzM9RCPmg8wNVV2AbfZpXRXrRKzrMrXTbGaLtoscr5TNfQ7xuDnBxjkvwi7zxLpLBrQQBveZikqUr4t3kQ8",
  "key3": "5Tm9WLPdZMgSsiK5jrMU6kh1eHjCSzzaqPeDepA9d2SPr5ZC5RaU3CAZgNChtpRSBs8AdD8RxoqKWAz81ioKWfqs",
  "key4": "3BE7nLHmYNiE36ji1s5kiyeWCPX7bsgE1o3f8EQ1DVxqrHTF3p2bqCxDwTxUmhFkwWAi5Kn9u6Tf7UPf1yu9YSvV",
  "key5": "3vNohX3fKL84P7GTfof4wEbjwWKRqo9yGS5MdCHjcebPuj2cHmKVzgW17PDxApfVqUdpPjmaJMxuxtrDgEWRc2z9",
  "key6": "2kfesSssniFTiX5GbuhCGnTSutESam7gdoQFRt9wxpoYCsSx25vciy4js2dtimBo5atUWUujJuJyjoSDm8h2niPg",
  "key7": "3wKtPTimT7rakiYAevnNdn2UF17rBoVWkN4cY5ShGc7WKBKbmb4M37TPrvVtUWuYa5RJ4Lkxhr6rtWetHYWqUaRW",
  "key8": "5d9hguWFxP63Tf3bFxtaWvBqbkmFrBQnej3TQ7nGEgYNFLypzd5paRAijJrNC4NCnbjEN52m7EdxEC47VAj24gcA",
  "key9": "j4BW9bqhHrXukYLGMtp8tKoDX1GXUeSYctxshW8AbVyKqqK9WKkH31k67Y5YN9UDSsWE8JcwqYJNyynkoFaxfD9",
  "key10": "4KzWLdgZtK4SwLqXyiC6bzWepBYmb1X4JYXnqX1zRq71baVQjSLG9qbBK41RM3iaRzqKHLLnrTYKcasUNX6QBCcv",
  "key11": "3c2ko16QojjA8rHBxV65PPdF8aZJZaL7ZXnKZyP1tqwNcQTQG18KfsVRF3CruVmSMiBJXzLqyTvtNmxHh4EeiLx5",
  "key12": "2dHY9iACiw6tptdUUJHDBTr5reyFpqfezMC3s1xFBVPtgHnko5LRU2ZxQaKMZwkZ5QMKm5dJLP599fgfs6bzw3jH",
  "key13": "2NUj7ahmnCLMmvcd9NrtjdMMXgCvTYnkfWWQcRFXbT6QfE3b2o6cbLvPCEM6tutx46LGAsZRdyoMqgxHSAyiCENX",
  "key14": "46fAa7vX9GX9DSe6H4KFkS9FNY9DHewMFz2n8zTt1M9haUxzRwxKj8gNSWQpvM6qYpui4PZMAZbP5hq43VoGN5zU",
  "key15": "2zaaR48Te4yrM2U5fWBCSKnZXfwye1MUojhpsye6ZJiLpdMmjQ6dvN2S4CUiMaaCSADsCXTty48gscHg7M4n8SjT",
  "key16": "MRKM751UF27CeTJvJohguTo5XYet9h2RP4GoyVrmZnMMAdD7NdqvAkH5ZPkBFKcc9LTj1AK9EHbAsniUHLJWr3a",
  "key17": "4fTZNkaKFjHBAvQs8fwWA4YdXeacporJwie5vNRBxAxfTGyGnUEtTsGpuyNjaXyJmyEbg3fbvCcyVD5issk6vN2C",
  "key18": "qDt6tYHykjyphHRcQsQxHLGTPp5cYUeffj2fBZCNu7kyLcV2xprcsZnPPxMo9HxgrKBWhVkGNzRrHW7faiMwzjJ",
  "key19": "4TN1LFoXJyfNx93moPUeH1fazFoDnpyEFhpecyT1hRpCuvpspm2QTy3gpuUwLJtZ2p7vqsnzKryGfcAoRt6USbSM",
  "key20": "3ZVQgHoUcufuN5hgjAJ4wYHHeVxUyr6JqxqYadSWYqfpJQt15RWuxGrhe6C7GS4PzL1opcKAnJhYybkGWKwLSAiF",
  "key21": "42cMPWCBbmsZ9eFYhtiKnGgJYU3CgK69i4xMa3jXHzgQ7XSFpGfGa9FryYYc95t7hdAhLByayqJ1j49mWeKUz4tc",
  "key22": "31jw68rMNtoihc5KBDggMyVUWnULEiARxuQPF5ZDgg4iVEXkKhpCA6zF9wHcffVVhhpxomrWo6gM72FmshivmWVv",
  "key23": "4TTwAVMx83y3tYVa8pNw7DnnJj9q6WWSeozpZQnwzz9nJu2QzHkUXva7RDXkV4GrAntZmva4VTtpSFqsadveazSz",
  "key24": "47QcvrCcCt5GdT6T3o78NuzXPuAGdgfM558KTL9tVSS5Eywm8nHPB9LPKYptnthcwENDxp7tKLBizXq7r8U5zgsS",
  "key25": "3GAne9g1CzWUAJ7mrfH6YrEcUHfxqqHXghPaMbNHx8JEYKdh1Q7teHVQDaD63scVf12JA8iQe6PWgigGEa3wmREG",
  "key26": "3cEtytJQrs5Z7BuK92WW1BA74e3m2LuKWt7xji2BTcuVraLmsNz9mMa3R9NGuaTvXvVe1BMYr3aimhW2Kp7w6F9K",
  "key27": "5dAYrNMwfDWxARabegxuUYrAQNqTCXFMdmFS4Xs65rpGQnAPQLdT8pXVNovcKoLN9dSj81BuTgHkik8J7RL52GXj"
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
