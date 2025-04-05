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
    "51X4rZfJHkUZeNe3ca2rRQjvyAnksbYSvc2V7xymAYa5Qw7SHvCNnQQrDW7MWKMK4tBC3RYru24waoy1CgYYSx7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pFmzM6R97amYi2SWYnm5ic2Xf68WHbZBCd11yt9NVTUJe8zYP2AZqZcRhxNbMeXfuMWc7tzZxByN9LvSoXoD83N",
  "key1": "23tYtSn945EJRGwAFeXpaTBsyb5zbNEa8MHFcWYjdj6LpmZBqkxbE5jFLESFHT8f79feo7ziN9TMNxj5S3a6x8Ay",
  "key2": "4texBQR9v7Av3MFB4Nxrj991KQ5dm92w2S82y36xop89wySVfMaVCMFjgzfW2i3soHALeWyBz9Zbr8gsR8w1Ay23",
  "key3": "ue7cVAxtWpFNQBpfciWN41bsYHHUGSeBGaULVD2NnWBFCRyzKMsqVrV1ZP5sjcuNcoTvSu53LBfHTjgan7E6oLT",
  "key4": "2DqmrAKt67A3z5eojtUMKLBJbSBExyy8d4nqjuKNmYUFVe6DNq8QRcQaj4ievSyfPvSZ4kZKVa2HfihbFtev3B4d",
  "key5": "dfE2kgbyKjZQpfePPzaBppApt5a6gDFEpH4xg6DKoPcs9ytdEreTCXwuCtiDvueMp7qCqTz8PLE73JcPt7gGNSn",
  "key6": "3Zsoujfy7UwRP197MygBWgbG14oENjVqFGh9UmE1hic1b9cvBC6n1jdudUSZmMkSX9YhQyKRv1xFmSYy3YSfRR3K",
  "key7": "2A15E5fUYC6jrgUwvNDx51G5TQsUbvRxB9Mg7guT1YCfuHQTnVeTEL8RZFufa3upzGLVWeSRC11FAEunJRHBG6EJ",
  "key8": "knKhUbp4CNXbn1ZwsnSvQfbLXLBxmCAof8NFf36PBzyDoNCkj48vTeqyCCBSdvNEc2FYmW2y5sEjugQwZkABE7i",
  "key9": "2a1z8svCj8n7ah6BmwfCMBdrrrk46Qn3EZj4En5rbFzy37Y7x4Gv8xp58oNeKZubPCYn5xXHXcUKPCuYmbettpgJ",
  "key10": "2ggoLe5ffk5YHfKimF6RNt19suuh1jcsGE3wS6MHk2sbzemeN2vgZAtowBKXD2B7LUBRmYLJ4Jqv9vtcBsFZjPDo",
  "key11": "35KgAXBKAMEXnFeLU2YTLj2fn5NU3KqVnedvvemhHdsXDRhs5PUNGV1uqDQt3n371wcxXYA7uYEc85uiyR7sfdtN",
  "key12": "dF1Wx4z7fZimLMvQAA3Wkrwx1GviJUpDuqYeZXSG5GzUPreLxwVFF55DhhCeCyK5UeeEzEF1RaQbAM8MgFffofo",
  "key13": "37z53jnU3SEHjLystkJNrHe2sc32ASSfLPBUihp7MdV71epRALqtEhtsnk3eQLE9Dpce7XqR6pmhX3pL7QirzHsA",
  "key14": "2SsuJAid4xpVEfFo4cRSRxEziP6BfSi97LZvMYuAyqEQPE8vF1KugeFZX8WKeNPRJsLUjLVvKUfK9atWBj4xAAgr",
  "key15": "5Jtz68Y6G6ht9H4HkwTFB7YmwyvMRsEk2Dxqfx16vWLXMCZPT9jGMCrxFCA1KpUhUTZfwaBRekUcEDYjqkaVh7NP",
  "key16": "3pqMZcwDiF8yyxBMthby8wvKHVYqirhPQFQxAiTZCbfCrQmFup8GxpAcpbjqpLgWeYyuyHDqJ5uJfpjhBsVndurL",
  "key17": "3fkDxaFbjgirp9ee7AHFrubJAp2FuCUM43GNT1fVxD4JC5xoov94GkReHApD1c2JRaMjz3MboDk572obN626pbdU",
  "key18": "5e7ciViQy4F5AZwkJXAgXuBdBM4BoLDgNEMqhh1Sgas3iom9aHVfrBGkWnvyyjzok4VbySchTSYjGtJHzCbVpP8c",
  "key19": "4AUSXbg5S9YJt1gFSHMqfXEa4kVJrLkkhoLnmp38iiHmKrmx9qgrC7VZNsMq4CpZS3t1bT99bALNJbKdB3iaWSMc",
  "key20": "4cDpoJNpgZBYCbHU1oNq5yHqasCQV6JRqbg7aP9acm4h85XVy8RazKFHN5uXQ9CLdJLUQ4YGb4pgukTn9xQYrZtM",
  "key21": "2nh5hrahFo8cpwGtRV1q8aREznxwZ4g9yq5jMvjXCosbRQ5DsmhSzm61KhhDWJULHHwZnZaHUhsxQmoxLuNvtz7f",
  "key22": "5rYiTDZpffURnmZ2ADeRK7YiPKxYFCChsK8p8J5HtS7ssB2yCi1y6MN1zLLydfewNeTL28C76YCCLUb6GZD6jthX",
  "key23": "563CdqW7XzgsnG2YbQsjKXzxBMDQ3MkcjcjmX4HeXDyciAV9nX8t4WZhMvviN4gKRE7x2iFXoFVjQMYZWPTAzSfB",
  "key24": "2r3V74zz3UFb3UTAxtNkmWcRTmNDo6ZoJB1mfZJxdburbisP3n1RewhK6kU1vtnWPrrHqcYDkJiMEgB9Ao8LZRov",
  "key25": "4wfF62tYKezdDLV1AAPxuTZZZ1yrRnm5DjP6XhCVfrZdVp54o5wZb64HMvRyqDHSwBX8vMGx8b8KeGnH3bvVC7kT"
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
