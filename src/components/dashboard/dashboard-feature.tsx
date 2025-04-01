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
    "4p4u5ywzdmnmp8jhDHY1NHrea8zJ7tPoU3XkhBQU7gxm2zt88ReGJtBCrjahj2DcPMfnN9sb9CgtfHZ82c5PP64P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K7L8USZCf4rzVZBToGFqJzhGFpTC6WgFuUMmobiuyRkkeJjahnkG5bpsStvoeZT8JEGQoDQyDxoeKUHnAT6UUxP",
  "key1": "2K6max9w11TBg2Qm7gfahGNvp94Sc3TJwBD69NuEcVoAzVzxrVDFQhJzvpiUzcgPqLsY2zJ8u9mGJb4JhjRgVzSs",
  "key2": "4ALo2hg7ZvGpsBJJohrv1wkvg2zbxknbQAb3muXU5EN5H3Up1GvhyzCGPt7vabAmdEuDRmbEHEiszXQRQf6ujsma",
  "key3": "3oG2UxR7KQSFveU4g1k6zhxsJTgKDSxgkgsvFcYBjZ6t3CVhWcU3SGqxig41quvdvKpyKgoZJ53X8LBNwguWgXT2",
  "key4": "5taxKKm9SvTVUzinPhREuX7JAaKsAp9jKzNVEhMYvi65tLZpHLqEqYXE6ou1Br9DSSBhPdBbNmnCqNbKSRqtMKrF",
  "key5": "4pxFz9taKc1k2uKFpPt6K9UaSX361ecfK1gvaK5GxpbgdBY23ZgYEhb1bzPqgFm2K5hQR5eEoJv7rrfcY79dPn3V",
  "key6": "2ZZmVjxuTLpfirPf369Yi2WnyWX1oVecA9XCnaErwSoWjA2dNqnCKBRpX99Dn17mLGa9swk4GTwFYzyAJyDgoJ7d",
  "key7": "5RRa8ts57dP4EGQL7oMSJRQpdj1FckKNrZXBR5K8P31pzYLkVJct1LDJJKpFy56ycbXw5RQAV4CcZCpKvS5Ubemk",
  "key8": "r8JchA5S9bJJ5NXfynMgA7kgHFWrwu97Qb6vSxjEtHtTPM2E1xCSu4Uz9gfHdehpDWzeKFJLCSQzbmsdxPXhPaz",
  "key9": "4xTpFLCJXJXUtvDbSWBMaFmY7MjherJ1hYokMmxR61qrQFvMA9eo3fmgA4ecqZoTJeN9Ewq1M5Wr9yxjBKcEgM6B",
  "key10": "25HqriLinvGUNsogAZT3b1aNj91HHpcamzfDoPqkyije5Ya6mmouawKQbGNKwZnS2tir6KTR8GxYVTHif4KAt6gQ",
  "key11": "28WahJX69qtPrUJfjo89F3n4GRFBwN9tKcR2gQDBdv2J4xxhKL7VjaUM2XvPCnmC4iKt7Af5YuV2bk2u8w2gsVcE",
  "key12": "3Aj9oCW1qa4SMfRSjZRc9K9HjSrMsi3T5RucDoyCHVbhHT3BzVs2wmKbbNwYcGtfUz76ZjHmmTnoZQ84MWAH3Kya",
  "key13": "59dfV8Fox4f628PVjxrfhsPxAJBxEHQPkEMT1KFcaTNxZpjBZvEJ5QywXvjRbZWge5pbf8YFVcuy6VfxU5bJoETH",
  "key14": "2UACyUMuRW7wxs676BAZo3dGCU7xFL8qLatLiRcnM4fLwayXaFWWAhs3Bd57civ5J56tP68w3L7ghUfztVYuihGE",
  "key15": "42sPJQf7fvnMTzQrrjNzKAxegAchBLdjEXvoqPXnwFH3Rq7sk4FaJBnM4Hntu3Zi7DdLmyFzB8DeUFvJZTqmMsbA",
  "key16": "4sWFWDSgtebqSUiktZ4K69LanZtDqefEKTXk3z6eTC76te7QT9NGEmywfyFr5rrz1d2oWMkG7FWNXZPmBdo3f3bv",
  "key17": "2eBE7znTB5EbAue72LvuCRQjYbQHCYPUM8gnKoiS9veAVJUXLvqAoRchyU2rc17mUXqh7paP44V4KwjhsNiVKdTs",
  "key18": "55s7KZjr7r1RLg2ozgWSApmM62ZBtFKD7CkNnrDpsXa9g1gkzBDnRLqkVvAF1QaAn7n3DFJoNopmSiVM6vYByRHi",
  "key19": "256pQ6NwLMDZi7RrwCeX2vhcjjtjJ2v3KpLx127BiNxay8ZyfTQ8i6xFkmTHjJYCJVfJ2FGhpS38MSrpR1JpHgin",
  "key20": "58bWRShrRJPsvKuWd5wJGcnqWRg4tVwgY1mkjTNZMTkCAY3FDtCxXvU7fNFbzkvT4TPPcrwvphvSzBcjjwp58o4b",
  "key21": "5hU95K4ZmMJe3TxwmepYu57qQhNssjEfC4XMktwJrdpAosjM4SPc8vBH3GRcQZHRd5Y75SncXQbN9CVrZiVyvZ3R",
  "key22": "4BvDKxAQ4AbJCExMyvuaa2LMLhGRH2fL9jFAFe8ZbVi1S53ko8eNmgwrKV1mFuA1A7jt8TFpYqp2eBdPy3jaP2z5",
  "key23": "4eFVMNN4JFEuXdGsBTYzgzvEDqY6J2B2EQZCCB5MvYSuKsxAR5Nz5zKQSZKYCL5mGhRYqjcj4i6rr1cGUTudSXKu",
  "key24": "31ANDAH4pnQj6bkq9LfemzF15ohpfhHe1uHC6doVnoMB8KVs6LPgi8UG8FdiHWA9d7fBWPxGTbrYYtSouKDm6EcS"
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
