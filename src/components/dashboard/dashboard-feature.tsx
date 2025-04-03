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
    "51DuB8qaAYwk2VsSdo9NetuphudqEP37trUYRj1Wm5MGdcwuqBZZk9QsTm98bcAHew4TeU5v5QS18Rvv5fpWaiHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54MBqfUcvnXx1RzsagiWNCFeyYgyzwFD1S1Z6hmrxmXqDGscj9GkziTHAEsa69mVbuhJ1KisKU9xWskS3NxFrDMU",
  "key1": "7sxxNABoVFkancsdY7oDR6ekZsPpJiykB7gwkJX1A7MEgpJuG311WTKK2hfmQaB1UVh5h4qm2axTMUKzpZJM7DB",
  "key2": "43HPSyGMSZgBF51WFKmRa7Qy77YwXXwuawhNNpYpWY9R29oDf5ERJZV2Dm6qo1osLvBCMWhtWxGe2BJ2cnmBPxrL",
  "key3": "3wUmvy8yXHUAURkyTn34ehNba2jrEHZfjaf2E4PAgFFarf2UiF7cH12ewLLT2S4GTyGTBdEYcGFttu4qeepgztdo",
  "key4": "2DUeXwGmXABd75na5MnkR1FnxM9pPof4duUmMdhvL3R6J75LQAJTtJuGjyuoYcfPuED3DUGJJLzcwTL6Xh2us1eb",
  "key5": "22DW9Tt8JqNaRCDYWU2LWkSHu4pRavJaxf5BPQwtmF9viUDmQCSonHfMEv4RWxWAtaGAy5RBRdL7kn9eoNu59u7k",
  "key6": "2shfSiph3THKeZcpoVLr4VZKbp7w1NgybhzgAEgt5quqbgQFNJnD9bUH1gMD4UHaVAti4VUkXEfBDVt2ZqqFWQPh",
  "key7": "5shBcaiAai4qSZj9bKrGP2Kxt1w9eRhHDdBQn1SZ2pBSAycSrq5Z5v7oEWKCxerrco6AGjXBcJWsV3R3oNKtSiHE",
  "key8": "5LBVdJvXaGvmJqt135LTxH97McdbRY9VWwtwcZ9P9Z5H4j5mY1m6oapBdSdriowUPttxCEQD5ZhZbjFy9kWgAAp6",
  "key9": "5e7UyQvP8v2GsqshzZU83v9m6f1mLpeNdn1BGgM1JqCWuE8bMadjba8oB7Cy71cVtmYsT578iJshc7jC5xs8ANPF",
  "key10": "Nb5gXxexbpn3y87x2FoY4h4m1x55xcwLDuEvB91XV11naxN4M2XiaUdWmiRPRBFnN9eWQD9PUXsvSBTsFXcUTso",
  "key11": "KfKYaabW9kZLfBdxu3NWgN9TokmVZ57nPE4D5ft2HKPeRUBDkv1cLDvpsfqX7YWJMxMPx4nrESWYBUNyesgeLxF",
  "key12": "5MXggcL1aUNsbWcQehgdkFdjNytpbqVU44B9ykyqEyqkY3NeTr1Ku3RPYNZCh6Pkki1mbi1zQvsSR2iw8JeF5aWp",
  "key13": "3XK3JxThkD796tvJtLjRP5HhNQM8M8zzcSyWU5x3auQCq7eHXrzFRTbmszUeh6GAjeqC3geKc56aecQqxu8UC6qd",
  "key14": "RSFvum9NNznWHVosEVNq6n8aFDM6JkzieLXJk4HdQV29nRBqv4xXosmM7TkNHGPwJxFvmm3UaACC2aSC6YNM6RQ",
  "key15": "3P8MYucerrqYj492KWfqhvucaJG5GEKkiZznAz4zPasstWsUrZe3sokbJKxDPABFX1FAKyEWsVfqk4HcwV3pjPMD",
  "key16": "JHccvcJbF4rCpKVUWCB8giQRVM5Rjcumu89PUGsX2FmZnM3ETBEAXST1t7VWSXbx4TXwT6opqN4ZQeBvu6Qb9sh",
  "key17": "5zudxr6B66Kc4ACshXUYLjjF7Aya9QZWxQ77wG8M13nnLTqVAW16As6sAqBZvaCQnmhvKcgSYKhTbPH21FGop6kk",
  "key18": "48z4VRrjGZ6zcVxuNvkoScfmGHL3kMFqVu5s27rRpkQGYhVf12eVpAyN8uws1RoCjkCGgqwvRqgBbL5RPcDxV294",
  "key19": "36o3HecrvEBaXLuyqoZtKNFtsbsHtaqXoNLDqwTg7WNCCXDyhB7EwAnFqvGnagYv2uPYEUWmTUQgPBfT3wcGDSmz",
  "key20": "5hrmv5rnpi1owBexs1dEnU1TvCrfHHV3VKia89SHSb9TQ4aGxxkLH4FbQW2iZ1yDVPJ8QQ39X7SAxEr6PvyJY2yH",
  "key21": "TeZ4raVF4Rpiw5QQkGLd1jhkfNpNpLbe6aQDanruQV8BcYzndvyZQ2yZRvnu71SqDX9iQtn2BnbnczbPwoPGz8B",
  "key22": "36aTeuxRmxGMmiSTQwzHvGHqK7y4XTrYjyNSFRZgoPY7G26WStb26XzFaHP8VzToGotHvZV9CszPs2hK5bxmjSJb",
  "key23": "5Bu4hMqDbZsjvCwAYyAt7gf3JADPTUY1nSwRx7s7MSC5kfi6CboLDy4dWKHQ4eTc6YTyaK8xwHfecvahcGkuNWJd",
  "key24": "46qbjEFpAid6Wbsux7xKeDWBV7ADqKdSmJWvs5v18jhUEvrrZiy65QpYMJxKdHnBaHxpkz7o1pwHg7WJWFxT6hJx",
  "key25": "5WGZzGh1W87t63zcKxHZJY16BZ64AUtTGxNW9cVuC7ecoRwnxsDJXH6zWXsbqPCjKwq9CfurAJNfcsowPnTNxJEj",
  "key26": "f9yAefog4FU5o91aeJiqD8DF5k9Ezzevf2Qft2S46LdQEmzpxE9bRq7AViEhh3daAjTKVEv5mDnpwwvP2C8V3nc",
  "key27": "T4pAbqTcfBAKatFN324vnVSM8TWuSLUgJco2mZZ447bGHThF9rCQZFZccRNnAWUhtmCrRPuzFkk34WyQmSz9vw2",
  "key28": "3AzyCqh6SeYcCf3oXnQDUibs8vpiMtu8h7erSCy7G43E6J5989DP47KQH6eiqx6Zc3mVRDKFPaCxEJKAt2Fp2fpF",
  "key29": "4x8Eg14dokA9Vs9cPUvJgZ7qoc7hHTzHoYBZeVvR559Es3DZVvQEDtYwEYFMLbpQfTNHUPP1YfhRRq8tiKPDuabA",
  "key30": "FXzpvM12UAcqyvex2HzuaCDGTJ3pnyhy9Rk1sQCVY8AUVobcw3dVydPq6xqBtrwqjJCqzxQFkXQmNJMFSTCnpEe",
  "key31": "2YEzicXxAQTa7wfCVjgygKAsD676EcHWMC9HnSsqfReg5NF2C7YrZqGvyTa7AyV9AGJaJnox3hrewx9H4VUv4v7B",
  "key32": "3zczgZDZAmaSRc4cyB4XBhPNHJKmPKCVxLifZvn7FguUGaSxB44nkFV6QVyyjMX5q8Hr3xP8c7shs8KejUZrnB3C",
  "key33": "CpPEXz2Nz8Zaoaok3BF3ZWKjco1v25jey7iv3zAHQALc2nDyFNB5hB9Rii4R8Zu2afoJsqmcHHfzPewa925unHe",
  "key34": "5uSXZNGNjaPkZkfGyv9pb2VSiEwnFoCxUY7uEsVfqys8iLVKYGYC1tMzfNskE8XeAsBnHnVzMiEp59Aum5ZVW6GZ",
  "key35": "41wx7H33GpMVM4zaLZaBv2qRBrQBP9o14UbbLjiSe5FyzfBDgrFXHTYgqsezDyRCxyvqVApPfWc9zMQJeewHfagt",
  "key36": "21NsFpyF4EDnNRstVT9KMkyVHwF67ZibXJBpUYM57u5mQrjQegRL2bPE1q8NVpvgCH7YvoYfF6ESmU2jjFe5JaKY",
  "key37": "3LfSRJmbLnnPAntPRqw8opdPp6d9FBmGLQxLJ8pcshjxC9iEs4PipU83katGaFx3SY5akEwVmkEbgWnyDXXxN8dh",
  "key38": "3zL8v4Ug4idLHyu4DLLkFbxHtPqJGoys7Bk5icqkm9shrHA1bUwCnQ6Z97k4M6Ecpzip4bGRTkY9QpjqVXdJHuBc"
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
