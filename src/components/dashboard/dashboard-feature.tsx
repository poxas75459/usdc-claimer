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
    "gijG3VFnFgweV6WGHvJpYpxPCQinBXXA1b1TrKnhHFhyA6u9UpSHuUCmVcpx1vpJCosVfLrUvitXP4ETbHSv48P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ChxBMbP5pKbrCZB3RaAuDBivoGs9jW1zBUXNfcuZs3UTHJj2ySg7fuhMXqtbQtG6mL7kLnBCXaNVFa4FCxpc7DM",
  "key1": "3ENfJYjk4vxWejpU1Nhh5mWu8wPJQLd6y6qsh7x5ZXQyhGXj1vK1gaQRvhkU5Y7EVA7hq8ymGyxGGkuCGAwBvPUf",
  "key2": "4w8ZPFPtTJU2xDK71bKfNZDG7sPe1Y9ZpiNaqifH8yZr1hwGgPaT1tm5kqxhu8c3iEpjDvoX9AbrMpEkK4rDVcj4",
  "key3": "1VE55y8NV7HJY8nm1Eh3xLLfjtqxPk2gAA38R8gy1pXK7ia2s7UT23Mga9bPPTeyMGEeUUc3YAjygvppxUCuk8E",
  "key4": "5UgaRqC5X3ABBqvHmXs1zCH6Vst3JL8hYFf24MhbuKVusBgby3EgJkTihhJhndLDhCxgDw9rXTpKnaXQmvs1cQRg",
  "key5": "5HXit151VJ5nEzDZ8mFhq5E2rQZQczDkXa6unznrFMzi673DSsbzkUVdVt9RzQQTkj3aAJdytd2YgcjViT9quRft",
  "key6": "MnUuAWs1Uu5iEFWffRXbPGYRdpe82gP8ez5PhxHPBe5MrhihM6wAKGkPenysEXMyAPrHdeH7k43ZGrTuvH6h7S4",
  "key7": "2mjsyPiBRBb3H2mCB5CARHaKvEqw7mL3YxTR1zv8RSUvex32r6deogTRGauGABvvmPi2yzm8tBjVwsP9ZbtkSz3d",
  "key8": "UuPPof6mteWAYHCxVDJSKULNKTUAfN39MhNkHMRQeqRMixjDTipfHmbp3QU4tb1PoxZTaE4gQKMr9cQPiN66PzH",
  "key9": "48Ar14BwfzDwTBzZ8mTv6r7Yw1YZWX4kusKggMtG3UyxRSguNVM8NMoYSWu1V1QdFNq6kc5Q57vjQZGS4swvDf42",
  "key10": "537cd12KqSEfNYQ4hhwXTW7ot6CLzWcTRBPFvrsn3bqrwcYsBCAEWUwULyGsiRA3AkVUf4cz5rD1GW4DrCnrrwKZ",
  "key11": "3qCV77hAFPEXykDWVrawzDE9miMwnRU5d47fg8v6BJo73ss1SNRhRVcttXSpkcThJFMNeuZFUk2vHuUxhTGnZUkD",
  "key12": "4AYrfNN6tvPwbr6YNqBDG3Dg8n8N1TCDFweMxSD1vERnaERESpP32ogjUJCCYUeXdmxU1J3EphdU997xdWqDWyJu",
  "key13": "2VYJaaT4pAzfY8aD4kB8zN4VgSy42EekYNqbpiY8u25ejFjhoWZXQwkbf4w5vVy3AoUW6Y8rRfoGLAf15f7RMdN1",
  "key14": "52X6HprwesmncWTGA3GFMHDY7oDPt4iUCwySjQxQ4osMPdUAZ9DRQKJBMLr3BJRXWEb5X4Ev8azcXr1wa4vhc9f",
  "key15": "22nxJba4tdBJkAamKXZAEMBoJocaNuxWn3b8Xs7kBEhBZMpGCE4EWBLowPet5GKQhzb2dLKz4DnFBGyRcesa4gb9",
  "key16": "2A3pUdAK9p1bPB5Mb3zxQAhSehMsQ2ticaGNAyZa9AdtYNUqvEvFDZNhHj8AM2Qb6iTVPqxc2Yc3zqaADsDFGKnd",
  "key17": "3DVkpbmvLLwwV5zdbLNa8QcqcNhPidwK4FcWTRcAeVdRFMsAEoa9rZF9dbB1ng6UgSZhzyeWSPCi2JHkbY2sTqT7",
  "key18": "2gMbF9nXS11H44NEm9mozJUbaKP1tJ18qR99xY3ENfKaB4hkpH8Uuxr6BTAZPgLUd2LtnTAkA9RAxGJQoDLf1vdL",
  "key19": "64Wqfbaxo6XQL2wKqZYbpXe3cWGd5GDSZLFPoBiLWDs5cFeEAx3XY39EmJbu6CPTb67GT165gToLziedhyQgXdnr",
  "key20": "3PDBEZZi9CgQGCo4e68qPrSf87V7PzJjxt6QpxyETk5fuU1rBLMMabcASeQWFedTNQCiXb9SAqv9qwFhGwGquycK",
  "key21": "2nWuRxgRq9ccCjEvuoNeSssXkMN5R6u8cbKgcivbbockrnM9FJbwQpEqQGsP6mo2jCwHgeutwR2eUUt6gdJ7Hm3s",
  "key22": "5cLUzvDkY4scxoYTPhrtzqLADMQtAWDn7kauoJGjiSBiKFfJfJKe5fDbBW1GiBFx4N18z862B8KXLu4R2zMQVg3o",
  "key23": "7VVrvCRVSsaM8Ww4YMuQnkK6Gdpoo7xedkDyG4EB5mu4Rh9mHq1TjKfQdAyNfyN2TBkTvEsXZHkoF2eMUVKBjpu",
  "key24": "3285reuKEmKPRgf1z5yQZQuYGb8mtcvzjFtZYFxzPFQF6EAjJLmdendSGDER1Ph5iCaXeyrNbpLoy21izp9zFtfd"
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
