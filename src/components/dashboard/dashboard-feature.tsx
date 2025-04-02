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
    "Mydf5eMe2MTTEE5y4FeiLB4T4pumVaWggedVoxLeZGuNQyVwAoFdQ5FbFHDhk5ZZokQ8h94LBmWruj9SY9Hnize"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fDwWwFBqspWmyygKYqHcSH1SPze4LzMKSTz9YUZqjDw3ZaxZkwQqC6geVNybCsUh1Q3YNxYfX4Z8JX12RsjPA3t",
  "key1": "mdnMNd7cU5CVeJsa7RCACGzDWYcnGKeXXc7nZ1EGqnh4nvBigQCBNgrHdKPrMUyyPkeo9dCQ1V1xcmp8YP2Gdtj",
  "key2": "5zS5jKSmwyhgzk5ZwTKWQR1sg73LnMVJByNDiFE8pChoD8c12Bf7xc3mcKtPWrx6e5M8TX4kUvXCE9LqGpCcuuYT",
  "key3": "8ideD2YM6BHZLUhBxwdTjmDuUDiStnUu7SGyGBgSUa19Ec9xZCH4LMbmPbDCDL84q794H3XQj6RdgTRt325g4sN",
  "key4": "vQJUMEGpPVEMk25sPHpr4hnvjbY3tz1QFqq3vJzufWgAD5XdYKAX83RF8CsiKYC61YDddnDvUAURB4z2Mbe1Ft8",
  "key5": "2vyHzMuDtWGU8nbuSWv7HXaSGX8gh4BdqxUTQf3a3aDak6YgvbvxHAVVmWmS8jCqgyJFF2EXF6uX5SbpVs6UWfzU",
  "key6": "5cQ12ja65doGiBXMGWhUEYU8J3cb5bNDHd1GGoQSMoDDDuJ88GuxEnPD1KQwZdjMcguHyDJoUVJy7P86PorYF2LB",
  "key7": "3RDLC9AsXN3npgfrDDHr7JJSCR2hdCJqFnb1uMd48NDFQkXVeiAebwaBfwzMcxtKVXbfnFUWa1qBv25UqiBF7Wy",
  "key8": "cypbcyGVYGzUazp4iteP5cTL5gSW8g4xMm9RewVW46nZVsMN786zGveL3JHo39CtndbZn3MGBi1ddVdiYMejj7B",
  "key9": "2Gy5My3tM4Bq9zPXJNFoKSHpLrk5ApPxAr37nspekK2V8uCULafoU2QLG6gPv7zZMkEghJQvm9ywRw4kAhmDzXec",
  "key10": "2QLBGvnXNZtvUv2RCTVf5T6xbjd2rS2eQF6A1tjC3S2ENXjaEArg7n2og9tierW8Kwd9ZaCXj5jvvM7U62DGj9tw",
  "key11": "5Lk4Mpqp6qGyH94GgLj4a5Lz5bydKmSyYKUy5UgWoX61suEUuv2WP4KPWKKr2jKrs98aHDUQYWSzfbiMd8mAE4ZZ",
  "key12": "5PDWDsYZjgQ2GkAfRfAAKFUEzm24syiNDsuX4rVX66j63UAfEUriKokTC7STrRrTBFLozrXufrUNCFjiyKZVdCoC",
  "key13": "3fMPDrSfaELuRg3RszDDPdwDTEfo2ikvRL9Mq9xS8rFGNJAvzS1rTzPkEutdekuLMtADCQgCpnNgZYXfGapHns8j",
  "key14": "4c4RjJzgV74dmJyNuUm1ED1UicmmqRhrzFPQkaxeEt7Y1VsEhyMenYcsjNNiaDt4wk73viA9HBwTH6v2av4dgBDv",
  "key15": "3ge7ssuw24vmD1DCrVrgfA2PF1qmc2cM9qLMTkNLFVHciEd1at7HafwFnyFMxFzgHsrpa84X8fnuobPSEeF2NBzn",
  "key16": "3vWeD1xKdK3WkX46TULeC4q6U5sfvgH4rkzZtrEuU5SJPB2PptUKnXF74jZy2Xvurf5vfsFkpP5jVGMgCW3miGuX",
  "key17": "573DhqjEcwEoayP8SZjGwz7QBGNreumUZcmuqECsvLMKjejCWmzAVQ85C2pk1hGXz4tWsQJEzTCsR8j4Zu8cW8rr",
  "key18": "5mjNrcCKagXu1Y4w3TQAYVQQfy5Zgx1Urg84tbQY3sQooVLXYS4bh6srQLZfeswuJqMraNs9gjzUBwk1qSd8mTU7",
  "key19": "4PALC2M1PTVjfo5XxnPkXWHiPcbe4v1bPQaj4EDLbKvDVcLiZoX4RZjjSi3ik7y18iwQk6T9GEiEhh4tcQ4ZhXaf",
  "key20": "3asc3rfPWZhzriBqQ2qNomiAfJPQz2UMnAcvD6MV94RA5RP4YcEoDh8Pwj9RKmLoFhuxwDpWHUvCpAUz2WBuBT27",
  "key21": "2poaDyRWJ16sFxmuG4sw8Zq1oiuabZZkWspERf9P1UBLT2QwCAe1Tkgg7CrThPpc8jwh35YYhdG6Y1e6hZBMhiC5",
  "key22": "4qZozGYvSHJAn5BFZMk82tVK444ayeThyzhJuW2JswfduSoyyGHFhxpvPPdeCgJh2WKduV1tuPFSrrEbadaUSyZ9",
  "key23": "mzcXwGE8ChqfSFpB55uBL3ZPoJy4CAgo5VTvzL8q48sYk6ydEF1URzPmiRLBSNZUdWnY7zXs5b9YCwjTX9ThbVU",
  "key24": "5X7URbJwJxF9AUxW4tckji8Lq5vt1ches1XyTqeBUgZdHVwjNMf3duUiUGjCjQfMjyaFjhHavjEDXkVe4covmmPA",
  "key25": "2rBz7n6PA5W8qgPHWJXjoxcajPRtyf39PHrojXpgz6DPDUcQpdJFJqvhoB8PP4pvyWExvxttVbr5nEAeYHeMnV8M"
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
