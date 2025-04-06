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
    "5WaaHtf9gCCwoJPvokZyqo6U7pwTnFt4aKsQ42jRT1nDGcpMyGsrV4dwg4i5RfJg4QrEpCG48c7oMATky7FX9Wt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VstEjv9rhoayEDSn1m4biYg9mct5AHNAYkVFGRWD2HxQ4uW4yeiZGA4vJpjZRHhPeGVe8DQBBFehKAfzoMWTWca",
  "key1": "nznxV7Jct49jBwGNtQVsN3SVZryjdR4Lx7edY938PhRKEvjcJrybfgyfrBSReHaXfib3kHHe9MSwoEnsxnh5dEa",
  "key2": "6354EHNVcLVyn9Q7RXgUrxg5hH7MC5sq6WBW3LuGYfnvBAPVSRhFtnL3US3GASHWeFbp5sTGCWbaRT42QL4gTwrb",
  "key3": "4vZNucpHPMazJcb3oS2YcTCLXio9zVZMJiHmjU5b4aZekQ2SNhRSwHoK7pfhpzxRcvJggKcPWViY8Bpi6LhZupA8",
  "key4": "3nTRTaPj4CTipK1khChrrquPNJr44Q5Fdm3RWByFYm6CcfmNVQGHsTzjfHqB9MR4eMuuWq4YeHTpJeMGx4ZZuN7M",
  "key5": "4qmr9U1a2wFwCZBKekmAG8ua6s72Ko7TBrZ3M363LJP9tuhosxHcSZemYFAYwqKTCXodQNsAadxM7Wst1bvTHtgX",
  "key6": "2iGDrLZDmM18uKNxQTLxhJvPdnkMxa4NfNXuDJSKmQQoPQKeVqfGyKHwQbtb8nC8t5QYaW67gS3t56xFYXPqMi9H",
  "key7": "3im8h67Nqar9oZtZyMjZtVbLwBGYKxYtm2oCeGQyoKerCFp9mR7ecZRi9jiyeR8iDRgqYajibVGCQMVYzxrxBB5g",
  "key8": "4BLJAF5J6KkezTZbBeUCzss9yAViSddEjESU9WXqnd9cbue4LD9iQ29bRb3qDgsHgsrrPoVe1YmMPzZYZjT2JtEC",
  "key9": "54bibgWPYc45TSTSWju1xi5LbS2zdysqW17yDc5X9kufSWNAWcQ71ep74BuWx8He2v1GTrMcgWiTjL7wwJmC4SDo",
  "key10": "4Y26QN4ctvY3xi3VBso5jMCm1RVcCFWmJ9hqepZAuBRCvGgHFzUJz6Erwv91jtk256waNYTkE8xLJVJhvuBj1ecH",
  "key11": "4caRBjbSeaXaDWDKEz6qZhHQ4k7R48jouMA7Nio8tjZWszPbeK4TpLSVKSRRVhrjLCVQHo9ynet9wMJAxeszQi69",
  "key12": "2xPX8d8X1Bu5ZzRbjEMhFxnbEnjaWVUuvecoZvUonY8sh71sBJGoyVKzpw8cxWmhgW3SQHH7Bs8oAjbZu2U3jfc7",
  "key13": "BHbKXeBqgPwR1CC1xurYWooaxiBocbxiq9eZzLCDy473F2vViqjQhpZcfBiqH79zENJdDjxBn2sEYchvyPtxRb2",
  "key14": "4Kk1HJNqJJ3ZAWFbUxrvJYpvDm5kJQJcwvhCdh3hGyJKJg1xVQL79aJQvRPt7FA2smCJ2oEvSC94Wqox3tB7JuUR",
  "key15": "2J9AQ573GCuLa1S28oGP6RcN6mpXxJ8rGiH1x8o4Qwt4TJ467H5GSrz645tzMPCkSDkF98HMLRzQj7Mck99THnq2",
  "key16": "2FQsAU7u3DZLsXSsvCRpA7AYPUYZYYaNNsJeJKaBH4zJSMuq8tUeeT9p7NVuaV5TtaPnf5e2VrR7KME3aeRHdN3G",
  "key17": "4ax3SAxtQ9PJhtSM3FAXjRmLP5J6JxWn9n2DGnYURC6G62B8hSN1kn3wTyiv196F4o3u5jWvJsobZw1QXNMYH6US",
  "key18": "6P8x9DMsTBHEH57QaN3MDUzvLkTFyUpSvpp7itjbbcUQJzghLaJeVnud2PcrUAvbpbpGKW9GP3Gv7pdDzeGYPac",
  "key19": "4sfFkem3GfWY8gGgpGB6coVxZVq82neAZFvKcAoUpfyhC9euemh4Evto3DRUzMxxpVexq14BPDd5vtyzRduQTN7P",
  "key20": "3KmzQfVLGi5vEcHe4ktPvTwcTojmzouc6MopAL4A7bjwS6MHSoJDrNW7MbJDRFZRYaGvWJeZYbnYQo7m4zHsRdgj",
  "key21": "5qAwZUe8yWajaJBa3WFk3MasXPMTGQA2HGYjQUAG8bTGSPNygDSoFpCNdH1hRRA3SarSoEtfTmcdFsqDHyubVyBo",
  "key22": "2DsdaHoXxsMHQnMjgLkjRY7ZYYv4kmMZkGoy4N5t5kBjEJjsWSAaPzKEyBxZuQ9XVzqbQSngFSZ7Hb3SnGQguZmc",
  "key23": "qM7zAtT3P89uxfZrDTX1hugXsLRW2tjVZq8iycXE1HTNR6ciz7VHKprTHdvMMN5eWtgzTLWbgKu7x6B7hL2i4zs",
  "key24": "5PxuN2ytnC4LZHh7FPj86YpZJEXVju94GyA6NvqvWtAx1CvXYdHMJJ1uEJRjcQ4BkTTgjSskRx5rSyhKnHaEXtL1",
  "key25": "5MeYQyfpxzCjWisvGvSW246uSVHPLwt39STMB1WTUSRuQeCa1JBDak5sHekyNibTJSwYGdfQXwjYa6pquah9zrL1",
  "key26": "213T38ZXfFjYGHdxWaygd5uM8r4Sa471t8uHvuPfXuf6mw1tcP5hKqaK6eMAiHy4KHHucc4WXLM45rWu9LkMGB5W",
  "key27": "EA1zfZ91a9LtoktEGqhvMUSQifFPYNp34JyaCaM3WhVMExiM78EE4vZFeC7XAEpiMH9NH6LH7KXwHbFgquK1k3w",
  "key28": "4Ffi4JaeS6gY2bc2i62whD34aQAZzo7WQkRj7ish8X1Cr3mRqY5xbKjcxmqp5gZJJPpts3V8vkaqiqenqQLsdgou",
  "key29": "4aFA1p9zAyUxXN6T3uUPciTgYxdcuQkDrA8vY9vatWbHQaZ5qtkAHJ9gwFGh8FpqMaZenXGSzcb4Q2twfyNWNDud",
  "key30": "5zYmPud7ftnYoSQzXX2FwU1Zz1nYpWuSCpmkjzbYiyXKqG6mvRmfjsheDubydSipa6DmjQ4GWoiKkC1yPDZz4SsM",
  "key31": "54CCfaHp8ocXtW4kopgPg3FQuVpAdvZz3EMHSb7KiyJt3x2KXcpyPQHA3Hab3ce9Mkikp5pFVn33F7SWe8X3huj1",
  "key32": "4TkTvq9FbTYmCm5VeW2uvw7Au85BeAXKP4GHwaf9HeFaPfZ9gNN3pUuadfnVAcVRHzMsLsGExo4oeZP9wAphPsKt"
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
