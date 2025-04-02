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
    "3Em7vMciaomymwQ2J28ViBfaf8mATZx4twQTdp2DKfabVK8aheDLPKEJ4isZG7wvRtuP1fHo5svh8CVLkWUxKf7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xEtcWsLQ82Tzn56rfgCRna48h3q4nXjp6NwJTA1ZhUHTXmZb9iVJ6DbnGhsV8dNGBRRgzDAFbJJUVBXg5vVQ7om",
  "key1": "4Rkae4at4kd8bT1thFcPzecrYohDQEdFioL5gMJWSS5zDr2XoYMYjmXnS8SbVodrQTr8jCsdUNvzFGnUpUUMERiC",
  "key2": "5oSu3oxwFuoPpGDzUy3znzDb2KPXGfkejCRLwHVJGUbCGbKJ8guAPCh1ULsEcs67VGSNnxRaApHYqpjwBReSd9mn",
  "key3": "w4yR8FrSjRdrngUbtoC8yrQGNDpU5XybocVd2hWVxxj5VzZVt2YgmhEKyPGZa5YzKmAhiYuh8bMM6yMXyVWU1nT",
  "key4": "Cn3UmVHJXcingty1bD6GpQ52pBnPEC7sNiEkPdpMzL3vFD6NsFj4eXwkp8pz1ZgrFayoztLoT9yR17hdbf7YFs3",
  "key5": "5b7maK27E4cFCKav99tHQAMKPbdsqaiPNVmLaFQZoq7txWaBVNs9cfEK1GTXyGT6qp6aeW427gnmMQxex3yT9Gxe",
  "key6": "4GbxofHecQVQgv4FxHKUrEegbdkaSVXYdPnS5AgT5Y4NU48kux6kbtWFxeDKvYfubuYm8Xg8jW8DB3Rph7R42DRc",
  "key7": "J3M32dwAwsDcStywR1RccB1sDr3ARr75wbjevGxQU92Z44WVygouGqmgdNU5pXWtdQT2ngvs886SZ9ZzunosKc1",
  "key8": "2xYtURVp8thJfH56m7coGjTENYySDYS1Bz8B7nfBxEwr3L2a5VmHVd42j2AX7BnDHeVXHURzWMDtEeMvrCpXe6Ei",
  "key9": "4aW2oy6Avock6jSp2pLUGimHf7jqapZAPNLskZCWwvfvCpXZknLqoXSxKsEx1HhGfac7Am7cNz16xMLH35rWd5Uf",
  "key10": "4uSoVKxpPRfvNbJZvC3rzaxCFaJ29986ST38P9bbKBzcWt78Vy9KJwpWchPEQg9xE8Ju9MGcSkiwcGdwxmGkrP6f",
  "key11": "2iHCSqeVrszbMXbsprZ2NcjZCZirQZEHBeH8E9aP6zacAd9Rm9AJWczgUdxgfzYFr21mx6QNWPzgqvWajPYE7Ht7",
  "key12": "4W9KyTxnLtwVYd1wk2ZrFHgLgHnQ1EXpb4hgAhQb8sdU8Nov8cAypU9QiAPfyqLrbh2M2yrKm9j7wLx1YSg86yEJ",
  "key13": "scdwpFiRDWTkWiQn1j77XmFv4mQL1PBLd1Mcv5MnM7jmifWkFaTFmMg6nqdjEykSN8BgNHA1hCba4vB9FGrYEsP",
  "key14": "3i7965Ra6PiDwggPPRQdXrJoF1V3TrWrNcV7uszAcJU8rvTkthQ9Ks24TwX8FtmKioviT8nEHuo4FqZ6FdVArWFd",
  "key15": "3sDQzcEHNW85irEV11BGGBvzRUvkzEYHb4BUNmDSJAVbNNbUc4ttLy5DBXLWY3qfZvmoWxqspoB9MyugoWDuWdxm",
  "key16": "5Uz1iif9zYpDohLTzvrYGCacAgdTK1xDF7aSqFftbYjeccA3X1SxCwjTttGmzLxRLQ32h7QMxfgJWRbdVa3pDCDL",
  "key17": "8U2GpbiFLMBh9umkMdbvwmuPoieBmsptgzVCApngdc8q2FG8rKLJZu4wUSACwELcBY8NypFUi2Egbqc7LRYdEET",
  "key18": "2os5c5Ajo1L7m3DPA5uf1xrMC954ndGqyvJEqkFw8ZeztfPd11ssLt1qnuo8txGqh8pLLfv3oWySGMbEodzV35tX",
  "key19": "5diGnkuZxqF7EsUK5ArAxkjh4AkUn2NCyRzsQ3Lk3NgM1M1GNf1yy6bR4imrivN6eQusEdH5fcwzZDPU2vRHdkBs",
  "key20": "3KhMPJgGcG6U72zG2hcAeCR5ihLRAHqs6iUD3jD6vHDG1u9wk8uismK9u17bDx5EZTHj2oGNUh7WbbgLYbh7NtsX",
  "key21": "gnqh5NXZVTsCPnvRiMufpEHF4giDEMkQN2kaCLDLu2RW3neN3fWPJLfDbuCYi6tJqKE1WrAzTQjv2jgd8KhP4Dc",
  "key22": "2phNFxwM6u2D6sKRhEnFPMpWtxpqmRCpmurHTtoAdbhSEBrxP5QLW3YJhn8vVsAvESKWgbWcCVTg3fLJYWZWCuP9",
  "key23": "54fohqCYo8GssNq8dhcphWQKzKFzTUXSiBwCPPnkDiPo3agFyb7BW2ET8WBrsEWMCkVLokDkFgpAdxzwsTH81S3c",
  "key24": "3LxYFkiyMuH2Bnjm9L8Vk3pzDifqfNXjYh5dhXvBuYhGoVXW1BxPFLWEyCWdygHpvKBB7HWAPEP3vhPTGzH1CjnV",
  "key25": "5GmmufcrqncgMEi6ZapFkmb4tF7tS68TeDU5o8UEwQ4gdnC8227JGMLFocoJVbyu6no9bK9h9pvNkZtLbSYZKuwp",
  "key26": "3PxXxMqzLsm3Ex1aNGi6dhqZonthKKFG5hSLmHY537u9NBd6zBRZT1CbnufmLv72DyqGFZtu44C9jfZb3u1dSBgP",
  "key27": "3WgaEqJNdfmtkqpg66aHkV2MX56aJ2pwDvcsnbauBQyZ4P8aqtihpQqwnuQuA6FPXXn2WwJFin53wg6cGTXDDAfS",
  "key28": "3aiJmv1AsH2S8vnJmszuwz1s8sGNxY1dQuSV4YZKGiRk7FgprWsBdptVdpzV2Prunu4QJSrntnUt2baJ3vjBjcRz",
  "key29": "2GnQG6ebd51ZX5BEjUuumpczJzc2qF1nKhcSHVvLMEz4mgaBh2CEGcLpNPXgS7g311YLaSXaRYx78FCcqhZSapQU",
  "key30": "5V4i8LZ5ryvzhrkTwrYKijM3z59UD9HQPsuUbH4wroLo7DfKKaGQxc2wZDpbfDb4PaZmtkUFBcrax2c7abQvurrA",
  "key31": "9wtc163o4v75VFsAWNqEEsg9tWbvEUJbEX7K2Sj1p9bdQ5y6oFXzPAsbKFKVFiNNnL3rwMXJdEKDTeDXPgKRxny",
  "key32": "45iYHMCtm77AZsc4bs8aF4Ti15ynu38HU9jmmRSRJQfsBkDKiYqvvGRQ2BzRGp8YyS2hMkag4PuqXVsxGV7daFy4",
  "key33": "4ZwNMZvxZ85SQBB68e1CLktbDE3Ti2SkW6xGtejHoSxzpAgPbcseA2VimWXENhXVDaSjnoBNYQCDxKKiebQk8PrP",
  "key34": "3x6bScpmoXFL1ar4na2mWRNUTDqGttmTnTCjuDCv1z3bjbby2tUfwc2XMoVqVjBkSLvxucoUXJGwfK9VMhRSZ4c6",
  "key35": "5GsCozWNVX62s9Q5v23nXDtZdFC5UAeRBrJZJHGx9nCPGsQ2xAcMUaHRJAXS2eGkgwtTRmEQcRCiUzn9USndAoP3",
  "key36": "3EgP15kw758YSKMy6kKXUQpqyF97mCeZMdQ9ewVYw8GKv6DBcSH417yxxX8wJyqop94234QELZrKjfZp6VzUDZje",
  "key37": "5jYpQQXr8kNCocPDPMK3QftEqmqVrHx38VJTeEpgaYHXFoup61dwX1H3Nuk1Utf4TCEf1f234Y1nhafzjU3E5hTg",
  "key38": "4uMSXhAQfYx7iAYfhtyRYES9pbCTvrLNcVFLGZcdPMTKTqvhnanMbV5EmBshwikS4TxL5cRhWsLhAq12UEERSouD"
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
