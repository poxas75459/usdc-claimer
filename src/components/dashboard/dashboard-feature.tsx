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
    "28vuBQLnafGRLWofuNtheMjBZRmPSUUdGCXAmZDpXJEkWHP2xGWjqP5JRfKhJf7Sn22tq3EjoaBwjeKpUN7rdn5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uvdss87jZYc9iHKuT5zFjAbpBdp3PngV1VGgWvoSyBfEGrKdsQ9qr8AXAy1DVgoWuQYN9HNoPimzsCZiERC96LL",
  "key1": "47U66thaV9B4jzKueXp3Jx4fBFHZVg5jtGnajEZBGCXsw1vV1VTCCjRToZnPCk1EympE5PLw1rTeZLEepf1EAooa",
  "key2": "3KpavxXzRjjKfWSfKUU9pUXhGP6jmnTQmVRhcLiJ1TU1L7HdFqy9yqgvkDWhDvcCpH71HVrn9WtggBZ3tTh2Bae4",
  "key3": "zJmuqLAHZzLk4sLid3Ty96xsVSRLRNpBDBVGSafUA3PnXSfbuXkRSzuJA9XdxficEi5QGLBo39RvuWtB4LN4KdE",
  "key4": "4yx4GcQFKfmQDaArr98N3UzjimMxX1JFd7fCeoN1XBESR2wKjUDMU9LqEma71HwAKBnJjoJCUJFiwZyLfCM88gdq",
  "key5": "43wMszomG2tMYiuQJz64sGx446o5ze2bQLepRy1fToSwS6LJjhrbw7Rc2c37wkDzpYzaaDyGMzLUM9nMan5EtViR",
  "key6": "4Stdmxv6LZmR41txRu45xv3Li4Q6pZr4pDUf65xMLYSmnmHo1ydL4M9Y2pSBU9NZTM4MYT6tFupWj23WRoaP8DTN",
  "key7": "25iBsLHhNjZjfszGtDd8GRSNXj8g6supGZcsWpU6UQ7Fp3WAUPdkLqiTNFYmu7iT4TTxyF6DfsuJigWGBTYs6Qtc",
  "key8": "3SCF289W2WBERiNaqe2cBRJCRW297WXXYcRu44RSkLsN4ne51bysEXL7XrMcnLF97VYJj8fQxKxHK1Eb15vSYjSc",
  "key9": "2i8MBD6gPs5XuUGfS95SH146ggW27TUrr2TDKMJpVt6Ru2Scr1KZQdKAXjHQ8M69TJ1K4Yds9xLqk1vere2Ytwch",
  "key10": "556iw3FEoXg3QTfgLz38ZG6KEMs5tBapBbAzKWrs9EKQSXB6kf8jM2pXco62W1ThC9g58gVGJFECNLTXmWEF6Cgk",
  "key11": "5eEJTjsxRo1pXiXSjszVH63jkkmqQVo6cWbUdZkKWTrKt9aTdyve8wErP2U4FtiU41nLrLTmdctYsH3fj6vYWVXj",
  "key12": "5wyqBG5LSqSmP6ExN9LpY36p22TrF7y8A2LJeEFJBdNa7MKmacXstDDhbRLiPEogjXSoZcANtLRjMA5XZAQYyVDM",
  "key13": "4bX68kgx82VYViwo95EWEWqZVtjTkGef9V7azt9qJ8H9W47HavtSFHAz1huppQYEJFExnFutjWAKjnCGYMXRfQZU",
  "key14": "2gHD86UapcQW6oTRCpVEni1hFD9bfU8wBSkgMN9Jk6ZwD2QxbA6X2k6M316aZqPcSFtG5NSmjFyAmxHtshJxqWo5",
  "key15": "3XnbkJ9yquVxCKtFzXbWavRYHi3drToy7Uvwbv9cgJLbRRVvsn9FhTsD7zG8FL5oTnDdGqZQYdPeHrfmCuNKc2YZ",
  "key16": "27Ei1u7qpPyQcwYfDsZcpKwVjeLZSSGaJtiW6aqTHrbREjT6XJWtMoDLA4jRaUBuqpozx9KsXzyEUrAYcyca1d7o",
  "key17": "3SzkYRJCh9CapDFeSxUHHKtPmh5Yuzy7rzKVVjwyJZk949MGu4V8p2BtZk9uTJ84Ldces1joTpuHMLUvvL3C6rJe",
  "key18": "z6KEGcoUYRfPz5THoUxJXh2moCtospVYGebcDqfhrctcMTVUeBJXBWwFt6GFCwbAspr3ZPKiGoT4Af3VvSD4RCX",
  "key19": "zMcAMMHsDdwAfvJbkWJjqF8ZSbWLtsccbVdiScht28drwEKUVyrRCvxTw49ZgvbnntGMQ88SpYUStkFmhscjRhG",
  "key20": "5HxHZ6EgK9EQL6Y5J15uYzTYwSNxT9TPA3zsABLZqGSRkVRHmTxicc2UkrSiEHZqpS8y6hDCh5ggPYreLZy8vrMv",
  "key21": "5gnMknuYUhNGMDmdFczj4JSFfnVDGQbJPGwqtx39YciQk3Puxj2eVNknxDDMoG6333u8xHJyZ3a8kBKQgz5kkNaZ",
  "key22": "3XYT8QXbyQVmTQam4pbu8yqmKVXB4Z4o8uKuREo6cJxg6Pnz58v5dUtsmrXSLKEsW2gtELnFkiUKpzZ2qTNSt3wN",
  "key23": "3qt6tkyNWbubZXaa2Qm93iYe3jgyW3aHw1BFqRvWzbMpqo5Hbdi9hNPmwrfYZm8j61buRvYMaW6G4cWVHzn94QjW",
  "key24": "2LjqkydcvbcJrkV7daDkeKMxLwnGuTVhq6o6hGM3cVfrYXMPtgQnvgyadmbipjaghxHxBSarAtHLHCXKG7CcfZbh",
  "key25": "5qwzoUH27GWvpXqn933nFEbjM6eXrH2HqQem9HJ4sFUV68hLjkAA4yE5qvLuHdL6m2DXQNpNQuVXy7zpdoT9nqfw",
  "key26": "2J5Survpzich5DE5U2jCt2v3NGNxDSoJr1isL6nT2k4LA9MkEojuYsU8ZqmMBoVnFvfSLFNSVsf3my6nuY7mC53Y",
  "key27": "3cV6kw1KwxQnbKZcfACrMz5dDsQPYw4kkp91DFpusc8xFPZTwjNjugHdvcxzWZK8ArmyHyfvhHrNh11QChEorwph",
  "key28": "5qLSNT2TTUjW7GSPPnvgtxnqdAjfYnZYTqgpVdpaxaB13kjbMwjousejqTzdsryThqPMR7vdU6tNeTbhGcsjFeh3",
  "key29": "2yrdScV362xdLxFyjopiLePRYCAsPSH3iREiatadmkVpsCY9DwewzP7MCPzS7A72WQzVEL6YE3XS48NMVgoisRSM",
  "key30": "2Cc11u7EwoL6vMNtizv6NYLwcTi4bQ5oLsWxgU8LMtGvB9CHk2zSBYfL9kvYsQnAQNpitfDd56EFeRBtXR2wUbCp",
  "key31": "5SeNHi5VHcG33gQy7JaAgRh5ecerDQHaT2pr5vHGZr9vAxncoiD46dhV6QhZ7NnxduWksJGGaJH9QR93x4T16YYQ",
  "key32": "5fcgqsKUMQ3UvnViCUz6tA1V2srTr3gD3F14PwYwQVSMdWYBafwHCS4yum18LN3gbemVmJHpJr3gtH8DS7Td8XgG",
  "key33": "2ztR8RYPikeEPeFQhP8Rh3F59d8xQXxn2gax6BBXPbr5eoDL2ZpRcatGAyvG9qC3EMAveqQj7pbS8xTXbUXQdTjT"
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
