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
    "4fN1vgXZd42ErnVHVZTXjVpV8P97hJtZpjZ5f6GK9MSS1E2a6oqBzYgjvsEVE8ZoA5gQg4YEUFRT4VXRmT2DTqvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47d7EGZd3ACMkqocY6ZjBLnvW2aS9ydpqZuxaW1afcdEWtRG5aDGFYn1qNUdqA2RJEzjJSX9ZtpVHSW5VkVhj2mh",
  "key1": "cJxxxdswSsoxWqGeTZoRyDm5rghyXk2gVDWVVrhK5MAzSG5V7Y8GZ1KHrbsZpD26fDvvzUziruHG3hgiWTvyH4a",
  "key2": "57hdGLRf5eMoV9p5Ag4eX9sfkzQdRxEPMSXCBPaZ8vZPqUe7LQMrJscpCbuTvvGugJBoVUuGdy12JuKcbcQtd79M",
  "key3": "4uxLMLGb6gqz4HqHACsgqKaPeinyUZ1MVSjuEtc8Kia6b2kVTAdYTpoTTSLuT7tTx2Pjm7vNCdGFCBFjZuhkyy1A",
  "key4": "5Jwxwdxs7FFQ7VaAuRdbhkTAxXUCtMX1ktRbahJZ1npKdqS2DgzQikuUKjHaoQGm2c7QLfNbvcK6LHkKZH9HmLX8",
  "key5": "hTjdBS668wNYDdBNXDMqjgkSPxiJ2Wc2bYXWMC5gwiZ5VSiYW1xFL297m6A1XV6KPAoFP521m1MtKGXs56KcJEG",
  "key6": "2yQcnbrKh8xL3hyWh4xjtTTFXHZRBKVzC85EGuVM7fmsUg6x6s7FGK2uLxikZQs2oCuqpFHmmEmEQiWubxSWyQMT",
  "key7": "5iFfBCg7CG8gEKy9uVTtYzLmHhoCSYx4tVooFvu1YhhoNKZ8RN2v6fMkmH1bshZtNmF3XahTdhNvWd1ZpNdcyudA",
  "key8": "2gDkxxNnTPwX7sJL7NoLYhF2vFwNk4AFAe8m9GNbtAn6D9wjjyAShQaccEUb5Vxwp8ghFNJWX8wiviayaiq6Tn6k",
  "key9": "2JzrUu7j9FiSttUVW61U6T3CXmSYkhRpjh9bJgfv5boAL6eEXDg1mjjKfVJRqVzHFZL4YB8EFH84VrGnLkMQXXcm",
  "key10": "4cuU2DwqHeMharup5pTDpFcXHMf6pz8u6YfSPh1CxkHa46iF6zpYNCtFXfW3GEjGZw4NnEK6VpkHNLkGB8Z4ZZNp",
  "key11": "2MmPDyVmK2C7Fy71oA5R59Vwyfj3hu9cikgh9a2RHBiqoKPRBWPVRt42fn4pk9zocvTNygs3qCoeSXBkwc4z3ZFr",
  "key12": "n1NZWa5FwqkhNFvkAXWpfrQGzepy3E4qppGuknDve4Tr7F9JoQLMJQWxx2VzyPLnoRjuuJDTRDuLK7C5hoDf8bM",
  "key13": "2Y5oTprEqXtTRYNgS2cNHNh9w9sgZRMHAvS6Tvo1Lvh4viwyNUvVxNGyUaLNaPQ3CbjNpcCQb5E1Smpghr3SnkM3",
  "key14": "4AhcsHdgU5fyAPz3uTgokUiAxvSnoHccFh8TFkdtet6t9NLyUa9QvnYyyfRk27G6aSAt4e5KciPZ41arsxXTDuUm",
  "key15": "VNo1Zn3FEt23mbjeLGRpMemS8FVKK9AMBU2mjboxQrXg6GQGJYGYMxBMn8oLAhQ4RtXHXCd7bwchkF9SrS6Uo5U",
  "key16": "A4h1433aTpKuGwa6UCoGfh9V3vFrqa8C1njMDijuKGhSs9C8ar2qLUNsBdYcDb1T6Ln2Lb7jvAPh8P9WsyJyPjk",
  "key17": "4xjFaz1j43tWPPZLWZTns8dpPBp6N4ewMeD1to53bZvaz2a4tbDJ5V3w6ixMpUkA2AXc48osrrxLNzi3DZpuPidh",
  "key18": "61kSiGpKbo6Xds6DwKW1Z37tinwN5ozGBvPhcnjhGVwo7UQw9eKEwmP1ibrZPft25sYYAULudqvym8Z5Wquhd7DG",
  "key19": "5KZC5HXdPq28JYhRD5ESp4d9DPN2fVrrLoyL2C7j8qjxHw7YZn8hfcTWAyxWDcnwHZf87goo4PbWrzv74KN3A53d",
  "key20": "28e7iwjhggSd3jKub2iZedeUf5pMmFT1Y5hLsi62SSqPW1CanWs2LAG6rowwK8vMRWxmNtPPxQ6N4QLd2LE41VkX",
  "key21": "RWDY9NasC9V3Ay9iGj2QfZnqVt3cjQDmh9tdNkkFbWb8UCgWVNUau9tKkw9Raf5F6jPXXgQnpemiZL5Ban9U2v2",
  "key22": "44zjFnHFPfNeibGfM1NwNzYsuRw4XpyFafgrc3CJxtQMnj7sJxaQotBqvHbwYMiesKCFcTJEaoDBANfEXXv7dKon",
  "key23": "4XuyRJ9YGZHjk4oPGqdpWbovtPeV6E3ar2w5LFX93tQp7Ze5Vjhcs1wqQCRizzXs8DwnrwiSYvjJEJHTbhzPfGtT",
  "key24": "5Y6xkPTPf736PazYJeevfkRUmKB5ZsqUhQEgbJWGtzQjpUCgVXx6RXvBy3UgSrBzVuogAhiuGebW1PNxc5ZFiqfd",
  "key25": "4b4uqFiH7rK2w85zBX4FymWhdw6BhUByVoC5hYcRz3J58T1FHpBtWGi62zvTAepVyYvTbTyTEJjRS3uh8xogvLZm",
  "key26": "3GeGyqjbwAjxYj2Pv1PHK5oN54GsoYxomw8KK64MpEapyMEi8LRgbgybS4cf7fjEnRf9d6sbUiCH1WXJoU4cyLMJ",
  "key27": "3Z8DtBpFQkT5g3DXwTyrZ2TX6awmvvY1Z4bHxRvdU57WDVoZEQRehDzQk79sPxi6pyMTcTokxsvoDU1dPqi1Rdfi",
  "key28": "AV15nH7M2RtJ44Lrs5kLCvfKGaz8xTHDhXozzRntwiZEhzbbSiPyjeUDuuMB53KNSVP5zzp7iP5imgHfHRt5K9K",
  "key29": "3NdP3YuJkTv18yjRjFnAPpnX6u7NuSaJzedbbwKS5YBJXC7f5RR2w1nXCN6DaygXDupkxBUnaSpErKnsnfa1JwUd",
  "key30": "tQMYMTMPoy4kGVSZFd7VdXHEJvK5HiweZsdD7TUxDJDLQChsdAzHM4freuXQPEUzFdkhFXDAhdfGiANH18xb6Qp",
  "key31": "zgq3C2nn8cS325SpixnonGxhiB6t5ubfRYMPdkaMKisWKosnteM74uozCX4YVZ2D73N6o8LGAmViwiny5qKpYkS",
  "key32": "3q5K34JVKhiRVMgXQBBm7Ex8oXHtetqqYzPaoHn9uBVqfNMixhYpSQrB36brGDrFoz38SKH8yDc3fVZfhpV9W9Yv",
  "key33": "5p5VY7zbpxjJLVpZtfssw7CrA6wPTdA8To9cg9od1cPjZtCKV1eMwMM1juCPFXMBUaFEEzp3BtFhG3ebHoX7zNnn",
  "key34": "3wkWH9yyPEQNrF5aZbYZ2aFawH76YyWUTVNZWJZEEozgb9bcM1uLowbzw9D3AELW1VTgEbwQkkDSeL64EczS41Xc",
  "key35": "27eEqpF45w77MK4413kjhxzUjQ1cNfz36S5CmmskvvQsuby1Wt5965E3atDA4mgyuU644hVswH8Xo6sYHz2T9uRV",
  "key36": "4zWHNFXSAorQiarANvqfdcP54KgKGXTFvcyGtQNU6nnVTdgmSvWUja9NRnUm39hX7QwB9cgAgH6FzLBrSh2Bxn6p",
  "key37": "2VGvTv2uFRfhgVJJKLyxv466SxiQ56UZmNGAKEt1UZs5WS56qCuEr6296xrm5hbqShxbNQFE3YoqhZ1y26vGyutV",
  "key38": "61A3sonXePVsvp8mNkvEyA3qddaZs7WVpCiGpv3TNZuA2BUyNVJNzV5zENjUbwCdsZaz6kbnfVQ9P3q2CPG2hdjn",
  "key39": "5miCQdkjDHHpdSnMZKecTitBPiTMZyrb2dLfH1XCi5WqGpNecWzgXifHjfN9kqkHCtp7MRBvx2rTjwdXe4RNtG77",
  "key40": "5CkeP1wdy3bksr7BrhD1AZiP7nPph7fpgZQW1FR3iNUs8pVn9w5P84t6n8PT5Z6BP8GnQ8t1KUWMU7MLxa3N3fpn"
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
