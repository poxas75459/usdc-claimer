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
    "2QpXRXubENUBf4sUcjjMAxDwHZqCSGzZd1vVqMUQQYPasHxRvnLqVmB8xbEFVcVkuQZJukwgGQzWyGa7h35H4Gka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yherTYGcg1qkETUyS5dKpK1Kk7Q2SkpLi9JgqhwU6XZvJSKGkKoCbnCWC6DpvvbcdKS41ZXkgUkbQn8ADBb71ho",
  "key1": "2cyM4m22LuGRcvdbFUhd8NL8PX94hUdqGoPtqNuMYSDmEkAxTkz2ivZUSHF477iPtB9mp4PdDuk6pz1P1nfF7LH4",
  "key2": "47iYqUZN6YhAGAgGq6JA3ohuY17kVEEcYJamzX6K6nFjhQFsSoxpSG9BsAh7qLRANBvcjSKkPdCS44MLQiZTU1zK",
  "key3": "4SjrCGf8BbqhsfiMbg2dp56Lgf3f2c2PD4MwLnoonmJaTnJd14wx88e8UEvS4H448J3dPY9Kd1GeEPTaYieuYz6v",
  "key4": "1E69sRaLRr53oX9nCW3XG6nKvGoEotyWVDJRe4xH1s3Si1uPcWgnKnY37x25QFtXm3gN8wdjABxXb5Vpo6qf426",
  "key5": "5Gj3fyQiHNnK2oBzVHDdYqfvTMVVcFafr25s93tUM3t4GbPzKT3a8fTzjdmbHFNQNdaBeMXd1vWZSmpsW13Mh9ut",
  "key6": "24XEbR5QxBnQBk2AzHPeumPMkhCj15R4xS32rJTmPWYj6cBVyZH9aoP58cqrCh7w5XAfc87RbJLnnz7KReq53W9C",
  "key7": "2e8s6wCfYuh19rhcXUEzrQTqo9RZVfYFd5Ea5gQQaAV4QWT728KjX2xcPYDCt8QispKgXet2oYcm5hBmWxhWY5Es",
  "key8": "ueDiCDmeaktsoGf93PfdKAyttKKn6yMxFfBdgxBostZgfxnMA9fuNaesBwZY2A3D6GaAe9UNUWjM1jdicQS3asZ",
  "key9": "2MHWjcshgDj1yUjLLtYm7U9c7dfR2MTTuiY2WCerZcmGDcc3tJ7MHDBcPXGCHKytnPggxQ5zMEubFyMdrU7Cfbkz",
  "key10": "3BQPVYrJZ8bFrGxTLVppYvgJ1CcQsj4o7gn62bg6cDeu413ZTybi79USB3JGVnppjTBFLfYyyuijN5WdEoD6gfPd",
  "key11": "3Rfe7981LTNMMt32mZoamke1FDVNSUZWwGKzFUAG37FKt4mHooWtTqqvKn867jQ1aBiUvBP7TVHvLX4eLTfXT5UU",
  "key12": "2ShyQHGaG46FL98VQms6Yirg5CXaCPtqETVBg1K9FWViWwiW5abGWVQimhLe7kGcchKmsQg9EHZtxoaFRunfPzVr",
  "key13": "4W8M19kJpv5m54q9CgMhSQXNykYvGq5MMbzybg6kXtNsauDxmhgMHXMTaD5Gsx9BMqeUMJQz2WaeqAVrDstbddEV",
  "key14": "2Wf5dkn8mmz3HuGf4PDLZNrXPbB5gXK1zwZsd7ScgKLs7ckA5j4JLi2EwXTbWUp76tXMzD3hHCuHDMsdnsFgkjpy",
  "key15": "3WGSJNB6b88qEr6WfaadqVcV9YwZxXbfB3zeeLbgUDDwNNpegvj7ZVxK8PHQhoSL2xGPzRqwHVfbPidSRwDYNUZM",
  "key16": "4oNCvCLttCgZANQAzvxu9pminpBGg4Q1UKqZJ7pg6krQDuEGHkCkbUtPGSLcTg4VyLrw11Mwvs2PfFdPcKvd1PKW",
  "key17": "2iZ2ic1v83txPAoTWLSaPmXRc2RkcMgvyb5vUkRwTYNyfHY1hHEvuXPTUnWqBuHNFJK4ZWsSYzHcvVEFrfWvEaNu",
  "key18": "3nAGrF33jVqYdNW5UiEfsmEb56VHJuDuBYWZe5NukbVkPxWpYq29mC577WYRc4YAvFaNxHnhzMTFEGwPucGerj1P",
  "key19": "rYoNfTreGNb78MxsS1j852bzzRThr6d67ZBqvFoooJMeNRNrFdqTUSBNZnNkEuxeQTTCXdRo5P1iqZGyz7rM31B",
  "key20": "asnxAqcZMA8a2rGCu4vsPPaUtCRiSR93bWKAnAqhJDaRcSw7U93KgXd9rmJwiiLkrT4ULz3TJjnPWBYZQSfmpm9",
  "key21": "2yivySUPLwoUQUNdVJdUqezLYJ4Qkc3gj39iUYbr6GG5LvzCV5mjYVRRuGvexaoSRMr8XdAqXNhXT1MPQvDJrAec",
  "key22": "yhF9CxgWevZ2VtjRR3zdJ884Zz8Uncr8ezhbJB2D9abrkroiVQwrArFqaxED96Xgcj5pVdttQmmjMHqtbUhQ2Jh",
  "key23": "DcAFTGx7MTLoywrBFbTKwj3u6WCw454gfzmz1siWCmtvfNpJpiL5YdNpSD9DMdz7bt6gRchdMbJ3gSm8FYnYBmv",
  "key24": "2QwdXDw77kQeBbk7DMZoJcCaH5wMvh2Ko39PQtkJm9BCcEYTPE2mKHWrxaEkAMrcZ2S7CQLK74Xe9G9g2VrLiLsh",
  "key25": "996Q4FGZyVe1yoEKsgTADFbedWiyGubsp6vVUrBXAsW1BEMpYpu4aWEtZaHBUuvNtoTomSzfXFZd6g19WAK9Ndn",
  "key26": "wg5CbJLvKnSUXFQRgh7B67Dpruov4Y9QmBmA27fqGNJzqKyJbjAAN38hcCFcJ6F3twUwXj3n8i5fZ9zdjsS6sb3",
  "key27": "bLu3AcTsbrKERnZ76uLAgMCaiCVLNfTk4VFUnF2xYY5KaVGNnPqGiAHjwX2YvLcCco8jdDUpthRtJY67aDZYtri",
  "key28": "2RrV1jFqJKbqEJd7iJoegYdNkoxWVFAdX54h4xohRSDFaZGn91NjbrH5ws6EA6EXSmkV9TL3SCHzTicCrXDqG54w"
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
