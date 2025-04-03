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
    "gL3tDsajkGz7rU2YBrNdi56BMWvtWToJNVFph7fJ4mG4kXKmSrSLHDMsqqNEkxa34PN9KNQE4XALjFt5WETT1LB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hFoCzX77XXFccB52Y4NzYNhNZHcJsb9AbDfJMKKF86EKmXoykbtAyCPcwQRqDt9ae1UZAdcomgkbTpEazXooZfR",
  "key1": "y3B8b73GZJba5UDesZhCFkoKtBWKS6J3Ss9Yc4ugWfvvsDAmVLsaE1NRsJideY6EmqDX2Qq7H7nW7x58UygDwkh",
  "key2": "5aNWgXh6hyQfwZYgfWr7dVWJWDqgf1wBJeZRzjcsBBQyieixFio2MGEYQVsvwShrgspBC6FNWsRECbteh94q8Asa",
  "key3": "3RMKUnvam3zbTCHTvY8gStRh8oqNfZaAJmhhwhV1m4duSwHTLeCq4kePgDB1HEZvhA8PCRqrtn6ANuBxocjYgEWq",
  "key4": "3KDnzt1dhLgPWDEiDyS8A8CgbxXqnuRSKWr9gLDfLTyw4a1hEMTBdVdcysVZX13rxuoifgzJHr8GepXX9GUVeBVc",
  "key5": "52JDbSqXAGbcg3AAJV3kh93oaHXRshoskMr3T69NHWwgFQLRaSQXM4mqZvD8FoYuL5Ur6u6QmVMCyCaasThTH7jw",
  "key6": "4dorx3niQ2QiB42nynKo9B99vjTPNsfSUDprPyki3J7WQqRk31ukko4t7Et11wf4i7ANj3rcWYYtaV92TedmyWse",
  "key7": "vNJC7cHtkjCCfFRzHjWS7tfiXomG5XujKk945soNf4WEhzogNABnUCvD8Dqeuf85pAWXzhjwBuWaKyjTPfmUDjL",
  "key8": "ufMEBTZQK4fkvrL4iPi4LthLUo5kmejmcqXfiAxYhxb2ShA8bEX1dub3Brn2MXPnu4M9a4YgvSoii5mFoYqnrVc",
  "key9": "2GpJLyWZFXcvqkD7uCqFiyZutCp8PGM3fJWrzzXaBRopzLKehNGKfLibYbkgtkN8URmCTQ8Ze8oZb5ymNYgS8S64",
  "key10": "3YWm9JRAM87bprY2HXPCyrGZXf2TeWL2wQhhuAXJZykXSUPHbS3ktmGEfFgxmjSYtvcdxZKA77PRtsy6GHC7wA64",
  "key11": "4By6ZWvZ5fycqpNrMxgP6BEm1RmfGoDZGo6vpDFphXSXUsvAEGqffNcPBau3MJSCySjdcQfVDLGqM8DP9hQhoM8e",
  "key12": "2Nqy18qFgBaMPJRZ8X4erBu2Rm4WVRAg13bZaS6RuAHSVsibBWVueHGbb6oKwAtttgtDLSR5w8ZLJxefR5ezdRMA",
  "key13": "tJ6xbbBYFgj5rSoQeTdLuaBYoQxTYo4pp8nPUzX3bWTbyAerP8CncKVPSs8eh5EugsTvQ1td6zQLdUKjpGV66vS",
  "key14": "5r5B86hZ5StMKWcwvPzDWnLAu4fcKFs1D98857V2yJvrhFh66rEqmWwQkekMzCNfPdczZeg8rxipGVhbQCuQgYW9",
  "key15": "4sLP4q6EKTA56LFUD4FfjcLNgeAadDQkn6hJq3StazBe19ZRewqkGk7uAP4bn8NX6QxKfcMqaxQJgLDByqmNSEsD",
  "key16": "32qnRFGeRKZA6fGsiUWdEVx5fuqvdUtMGTPUBMiLuK3cCCRgidsdfswsxfmHDg7npp6BfYoP5AxsXgPchP7rHs78",
  "key17": "3CovZkPDe1WieR5kKGeshJ9QiG6quHGeQjYxQa7XZ71XR8NJPrSLCYJnpak5V7uM9YZpQvDcY1uQgK51jTaYrEn1",
  "key18": "5wDiKPcNVJa2DxikhHYsMLkx9bcSK34AkWMM2RASirFC63Dv1EpR6DUy9GBDoj1fZbqVEWM13TrtJ5Zrg9uJfict",
  "key19": "3Sk73dDNN9tpYJA4VuQTKEFm7PfohKVmcFaRHHWBq1dvPwALwLuxsmzUAJ9MaUy9EDSuY8p3q57wjecY4jefL7J1",
  "key20": "2zKFXRpeSBS49FBq8e7aakKiWptfgZSDdPpMMVdP3edS2fgnkn1X7TDDWHZ8ghF81ybybyjxdUHT2ZRLGjZj3dWv",
  "key21": "2USst6XYrpJ1ncQNysJQRQDWGDsUUmvFL3inU1AVczyjjev9GtKhwCBZjj2wRhwxFiJAueRjBPkCQ2yjgoC8uFsF",
  "key22": "uoNT2UeeP5aMaKT14M1UqAnFN8vD8GLfctkc4z9VgxJskRHorUVxr6Pb8Ddvcmom7uNw7sv1ZCUuBKKaWasPN8m",
  "key23": "u4sSaegJC57Qa7hjo6czH16chXtWVtyQrNJWYcgijagwUZHqjGyB3RmpM2HP1dAtKzEEQ5Bh9HMJ9HpRZbE9LW3",
  "key24": "3UG59nxAhDdZi574VoFd1rUVx2wf55nsVkUx1YJEw5GUy6Bh6jEdxF3H1PtXwLVHFr7EoE958LJ28R18N3291YCh",
  "key25": "3yUqRpJxhqfx28QPrqrKGfNisQjyben6Um1Lzd1K4bmyPvRtG6CmWC8e6SXbNqBpEtRsEPHmqc9yMGDdeW5HRbh",
  "key26": "WEtuA5fp3AupJVWp2XW2zGS4CnNYoFBg4Dj5Th7TmBebqYdMggZVqRwEy9d8jA9PwTuGVDuy2Hpxg7cEp6YcFHh",
  "key27": "2hU5koDqbFzXVifD2yiaReXLgHbGmtesuMDCVwoTWPMgWjMgcXAAaPDMhaquCz1V3P3iEweyipirJNuawGJQ28N8",
  "key28": "3r8yCqv6WboX6s8nMb6v537R9mNd6Pe8U1a6RfjzCVHnhTQaekz3cVmQUNps1EGC13WUZykLxwXeEU1uxzSFoyWY"
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
