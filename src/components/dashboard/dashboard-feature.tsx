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
    "TwPUsCQqTVLw8M8FPKcuG347CPhVbN5NK4xAaEMFwR7iXi69WXfzhqYPyC8WoUWGZMTC5QMrmJc85Z4uBnXXg4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H6D5FwBFCDTMTdBuT8zMin8YNRaCstV6WSenT8a4zxiE75buy62aRg95WnBzwhfdbxYrfiMhfZZLfKP9n1y2Zp1",
  "key1": "4J397pq2axRx8M4yDGep3QRAqXLFKisczkDnzELPfqAoBKawHEDTFmNHqGtqatHrycW7JD6SKT6qohHypcRTkTZC",
  "key2": "4VpcXu2zJ4DeiGbeRwHZuFPKHeVEEs9jMhmg4x5fMjkddB8u2UrPvL8ZymgbeP3S1sxDgQR7nYgmTiJxQfrFRsPU",
  "key3": "knZM7p7e9V6nFAs4CTGu3Df2vVygMYHcuUwGyFaS8YgraSpNtA63iWq5HnsNW8VGNNx1pZtcEkdeJJgpsYf9bNi",
  "key4": "2Lyf1gFvPURMFpatPF2DAvfTYh6zq6zskU5ZhTngLGx3666Toaf8L8c8JXX2usYUMkHNpPryRmQUyh8sY85SS2oa",
  "key5": "5ovLqjC9fsSwffhTdU7BQJaH5y3Qj1V8tkVaYjZPJJaPWAU8QtkxwLyabHYFop9U9xt9qZE7wV689EEZketxgzW9",
  "key6": "mVWVoaD6fgScnn2pdcuJrrCJRJMWUgL3bQkrsjqq6UTzuqrDth3dLzu91VjcR6LNNfHctjwsPdk2zih5XsnFxjK",
  "key7": "3KP9fsgRb2eB9ugRRpVXEPAyznv5RV9gF2HK2obXa3zymg2haeus43DAr8F2G1G4ACm8uKFj471EqF2FDMonZdp8",
  "key8": "3XKBdooQz1rQcQ7BxBEf5uCx6axgYdfaxXwPtTMcMcPY7MYrM14Hc7mXiF6t5zjofYSPFLTspBgySBWVoVDHN3wZ",
  "key9": "3MJnspR6Y3k3JEUjnUypYkYzHmmFLvjK5KqZEtRZCzTRREyDb2jiKAv2bA2vC6tAZQEpuL1fwazeyErrpeYXvFh4",
  "key10": "xujwbfDXkbVRWHFU934sDX5GuKNi5S3ByZCZ3FTWEFQuqvJwL8pu2v38PyHHH2y1KDjT92namCJ7sTfu8S5aWGE",
  "key11": "rW47X3SUqMgYPSVMJB5E2Cmm6TaDgUtURnjdUPYieer6aDpoML64LvtGARFtdVJWv3Lokj1WZd3o2eQyWQbDNPK",
  "key12": "57DtfKGEnuDf915hpgLhVdDCv5s971rm8azZ5JA5kBXZQS7XcTn96ANAzxpnqQtE5Uto7tn4SMBZejx82yjpRD8R",
  "key13": "2P5w2iw8y2EAduf9kgX9N77MsnEDwjeg2c8P1WTMnpyrjMqhPSxoQtHGdnReopsou7DzedZBzJjiz798MtVnKAAZ",
  "key14": "2BsFwBxZ1d1YeuEzWqmW5kijXvtcDfN3aYAPoA4PxhS7ARujbkWsTqfU5mbN5znzyy93LJ8aqTAAhxNN4Sn5CBki",
  "key15": "4Stx9qZysnbdUJqyoz3jEWKTMSpd73a2JmbndJR5GyVmdMm9fRKB88MUquab6b5hZ2BniJ2Kcn3RE8SooLuEu7xw",
  "key16": "21AWDdMGbe3maagMKqsk1Ae3xaj6aVb59vYeSYsTXmxWDNTxaRJXWgY2BDJHm1XZ6NyGHCmZJVYHbhmHeMTLddUp",
  "key17": "4j8vPzBnnc1gqSPQpA9RUtHrKTANhUk5MvoGuQG6yd9BWzSPoMtmCt7DbeRCarHVwzcdGLz6EmMDpTQsoHoqaaDX",
  "key18": "3zQPNtfeHY54oz1XtdhFpmKbuAf2XPrsxxYaZhrcb1E95srZWqPFaAasBWh5cfCqEdgjyGccFFuu2KdeU7wEMjq4",
  "key19": "2vJfmeLU7Vy2FisRAB4HQcSsSQrfGAhykvfRmMkeEcUYKXcnA2eFojE1WLzp5dT9UQTZLSEgUCtSU9KuDFweUmoh",
  "key20": "24zyfXDccCwxKkUoJifFsWTZMYgHxkKETrdR2JM5CsxSQedZkBJH69WChEmuBTXJ9kMNKrC87PnftFX36v2CdvmE",
  "key21": "3b5jvcRgKFV1xyRV5zjR1obrAtdsVrxq6giwdCCXBXeNmkWBBc5wq3RA1kMkwWQ8N8yCzkqySKjhBujQuhLxJyAU",
  "key22": "tM3NZpPJpXhVtNK64jmwhHwGvePrXtQ61tFheQZ8bipE1CJ49M6dkKLP6UpTTrsw8GLayjHWNsDtJTxrnyeo2uW",
  "key23": "4bcoQo3BpT67xai936NiKy88Utr5vVGrvd2ZwQUSPQprKii14qUiejgRsingPbodRPyskAFyESEGTUkA9zH48W2g",
  "key24": "3YnhKGZwjYUiZZa1d2Pm7vL3F2gPDCyYE71qjzJHg6YX9sLhPymuYVKWDoKRvV19kcFQY37qBZwtutw1Q9fsstvt",
  "key25": "63gcvuhuAXdhVyLA4huaf7sNLgE9Cz2XTdnKeL8PPLX3P5RJhEAGgwJ2A8onqyZNfnjn9M9JUcVai6mnBJ6nXrcQ",
  "key26": "aW5debMi4QYTjiCqZ6EhQVtG2JDTWd5PPrfrYpMpg5vWzgYKhGQ4TCiF3ZLocPjbKRpMLnWz6VZsWLr6irv4816",
  "key27": "igbCuz1jYnxnnHEbCFDMZdJMinmN2UyAb5CiQhyWxkyLCrVdripZPLB7y1j65u6d1zvTfKoFw39SmKgN7sz1JVE",
  "key28": "376pJ9bQkA9NbVGcecYKypaeMDeVbiAAbeakF2nWJ3SW7xqHoSiFuV5HKJsFsLNNkLT3ZRHPMoXBGc4v52BL7bjG",
  "key29": "3dfPJQMz9EKUG8oSWCZ2Gs1nLBuqHFyA44Zo8zvMUaTgP5aiaLAzQz7mYbuLwMScqdUbE9jNe87waRX2NzjN3UPx"
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
