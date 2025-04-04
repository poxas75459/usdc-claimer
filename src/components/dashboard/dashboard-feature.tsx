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
    "YYYmgFghBHkEW8nactnQaV1vDL8WffmviUDgPfZUVCQvinhMXXdT93FRsDyswJsn7RMxPZcBxXeLzToKkATGgY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w3RxwjfdSdZHckVtuJRTFP1Ux6epAFbKeMTqmP6MY71L8kdfnijHjAio56M3jeCeNttAB6S2sVMjsEhqPhrdjwn",
  "key1": "5WHFCeAE2afyMRLS2yPRun93BRv3X2aXyBU4QSb3CuopiCB9iWGtvGGxa4daUuuVmNuGRDi6qJSem7RRvEVB7Zi2",
  "key2": "22DBhnZ8Py77EnUATsBUdKf7REMffeEkUFP9x5iYgFed9zDGsXxYu8Dd7hTZKr8u3RUpGEfPvn5iG7C1UseAZjk5",
  "key3": "4csU7CMwSJm8LdtV3fGu5ohFXu9G69iCz31cmjua6oVPv29dnNhToyB6R8Yk9xWuVKwpw4bmAENgRM7SUwSbQekf",
  "key4": "4Pr7m1TbQdxMisbKuJmT7EGunJbM9AxjsqTEQwLQqZBAzuVpMRWMTdmix7o6GnXd3jD1zwGKnTmgGrhNsUZ921f7",
  "key5": "55HU1drkjVLUAngBa41jK3qHbL1o5yRbjG7HwUG6QcZ3EWTKubj2qjBfLES5n6zWvt5MUaTQpeFdfBcTyiBhpQJ9",
  "key6": "62qnTRNgoUGp6EydjMw54v7rSrTvL93k9diamCoYYEWBcHXRNeARS3XpA4QPs8jraz7ioXeofTNSxPeWvV1i8GcW",
  "key7": "LkYbg7Bc9z8tR6FFs7vxCjDqzqV6QgvGGzvoegrDhWq3sCvdJXWLP4GCncCuzBPubeUEegb9FcRKrLajjjMFqWa",
  "key8": "31Ti9mNKtEA3LLQ2vXE1jXcHctBsNX5BMGDZLi4tjJ4oY2hemcEDAw9gkYC6VHVJSxfA2g54MqJ9RQXYs47zHjJQ",
  "key9": "2p7mWAhR256cndH2yETBwSkb5yTYCyA3SKDYfKie2GoUfoebMQnraPz9WdY8ebcAVs29vX1ek6GKmhEzmpWnifz3",
  "key10": "FJ6qeoHdYVxKraxQAc7vYdDNWJ9rdMK4QUWtxS2yQQkbwMM9nrhV97WV3TQ8mdwvQiXVcSBjFYMCpNStqXkAKTr",
  "key11": "35nMsPpSA4uQDLxj9pQAKioa8mDkgUPP8p3iXxgaPkxHwUh6TJ9u1hLTYc1EAL4AzF6GTcL5MByNzkncLKccbMwu",
  "key12": "2iMW6Jesw8hh3FH7dH5qpVMfmhrEAzWeNXXk3VtiZ222iEx4iKjLbQL5duj3mRMvVnQ1QrRth6HXAnhE775SwcTS",
  "key13": "4DXjMW15JfpaDMqAg4SJ2KihJeKWYzLhTKxrYSF1chnxD58FiCcMfw6VYbufZUYf2GfGTsN1YsKtvWgj9sik4oUR",
  "key14": "2KWErHsKyZqAoQJBaPwEqmhADm2X5V1s4WVNVkbuEYp3t2dSTAvN8ifRpXQKBhptKnuwoRtCFZwbMyk3W82V1Eo2",
  "key15": "56fLiz4RTZbegNadxgrirwp6LKnGmJC2P5fiHQMvrETpQnnd1uTjgmhxdMmcgeeNF2xX3JqbsJ5kHwefHCZJyDh7",
  "key16": "5Gxny5Wu2MZRdvRhwMP8cWwa3FyFxMhduX9TiNorajctxViRVDJxdwqoniN9NVyrvJjkrCfmhBqUw5Em5dKm4RPJ",
  "key17": "JMV5rR3awEhE7M57VTDYbSeFoXDUQp3NueDifBJha9m6V8AeRcv5y3Sw2qe7s5kVxweHfLMUCifWxL8GiGSXDTr",
  "key18": "4hsw6R5SbNWZ2tjskQYjruEY7rHWubnaTBo1Km15ezEZdaBgsban6yGiSZU5KPrdNghz2w2WVLwYgWvrTeVZudQP",
  "key19": "3EMUFiqmvuxGhEnFJEgJYts8XoY9N38J4gGQuqAs2DCPAcGdqPrh8xD3XuTJ9KxnvrJjhNhGuTVrbnikfytJSCFt",
  "key20": "43ukdgQ1ew43tEvRdGdjwHvYY6de6ufxFczzNR4FKb7D5gP8o71CJEmxN6kKXsPxRSgjgJxN6QdYuirQzEbvKurf",
  "key21": "4VMdmfo178nb79FeVoW4s98oNcobPbqgBE5wnjvAac8nc5XBVV8LHaUEi4ncQPQw7cPKm55XjUGTV1pZ9MvSHNVh",
  "key22": "3rT7dUWQKoaMtahMCxyf42w8XStkEUiU5wGjXRPXAFGDM4QqFUnpxPDTsw4G6qYaU2PmtRdspS3z5xKHNaBuSKve",
  "key23": "3Tzf922j8Uqxp4wJAWrKMDTu8Zs9C57N1Y6pTT6reRQCmDUSEFyNzdfNn5RoYibm5j4GaDRQet9SgzbxxKNPrpxh",
  "key24": "3ffrHX8ev9gbTC5wZH8dtCa1nqdjKBSyvYjXbxuUrj4JK24p5MZ3vmBcr1UnHaqfzoWY75U4Vs4eqkQn5AhopN7C",
  "key25": "4AgyLDCj2UeywziPoqRqhjqzZ7fUz8uUU4wvUTwa6j8xaYajk38TuTStaT8Rfo9nkThXJiK542T98mP646Mjasex",
  "key26": "37G1RgzVXGy2GhwAaQoqkTh7M984nwxJ8znoGW1GhhGzP67spJ7rvB5nqFtwtrm1UU5LMUHhmh22MRWZdhnY75Pu",
  "key27": "2GMFFigdttz6bXWdCL3c6bV2P7TNX3wpiWMpErinhGdMj9gfSin71bLKH9dE5iycaRGvDS21FXFABaf3YYEwqxKx",
  "key28": "yovsGM3eLA3U4ekS4tuMmsRP3RwNxMHQ3QLpa9YMNdAXRSuzwAoLVwvic7zUehsNvcLKw2b9QrMQUcpq368a6eB",
  "key29": "5DmLVp14oC4cEYyFB7vN7PBJbQKQG1uiK5Esnqbh5LUJqcSTe1BQxddrvwix3jL2atXUg9YGa4imhUVTLv8YAYUe",
  "key30": "3ErmGgZF3PG8vHKQsNeDjP2qPVd9wMCL1eJ8LuvyVmPZjgcXZ2cbNTyVL5Wa9VDsiSV5rFeyaj6jbW5S6WM7SwDD"
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
