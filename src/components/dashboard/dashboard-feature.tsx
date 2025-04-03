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
    "2fzm3NoTXY268XW6qqxYpU6jyhLHzkKgJkkXrX15rkLtrCWMoE8iyM44QfV6Qo5eFoWoVJLTMXgRNKws9q2De3HY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xwozcj4VULrTvTahY5NWwCC1tP6CKsYHTAzet6PkrKYv5eMnnwNmK9epFP3kKmjVhumBtZX8hvJVRKgqxzAYLcK",
  "key1": "UKr8DAAfMNowgndUZXsZXekesQGE1srS5V6npZjCex4BCM2NkNUWBZqJqnKWvCpFnJGa5cbXMEH7vT3UkYSbJ3o",
  "key2": "2tHXuuNpL6UE2rBaFWG9nwzqVMv5iz44BF9tHVQEDFGaN4sx9jVdXFemcjUznhDXPphT2j4KhNYt2HZXhAZSZHVX",
  "key3": "4GshDmKCq8QHS9tf8wHETyALR1cYmmNC2Ba9ZMQL6fkp8xQKvPvNorJyYA3Rbrsuvj4n5tDJ1sjwLCQjCM8jVngR",
  "key4": "RRDVNBYnTHLioY2Z19qLNcgCkC9N2zpz3USMzbzJm2sbd2h2XmaD7pRNTZtouZmumidNcjHMN85Fe7GttDbCZwU",
  "key5": "rzqwC2YgqY7UBdGgR2FC7B6yhVDefJ7Xv8cDghPXA8LRiAMtc6qkByBPVu9tPz6fTC7h9Em7DLcFTFkZ4iTCzJK",
  "key6": "4mtJqWkRq953gX4fc73q5N9Heo6oNF8LgF9Srry2t3Dn6dbQARkuCavy7MEiEicJk3CtTCQHxdp4yBDc4qrXCUSz",
  "key7": "4LzWWi2ptnm6Soh2Dso3S32Wxew89fffgK2QZ5CqtAUwybHdQ1LX9BZTdxJsmAUMJ5SAxEJRYyGMg52eiQDVBujZ",
  "key8": "2ss4eezvRtc17KcAJUF6A1juLZFczfKWvwtxUW5ymh9ZrkgRDxwzeqbB2f8XAK6NiWVkoCNJkshdat4xjwQanzZp",
  "key9": "2dMKdy24HWwFbEx2V3c4T8WeJP81kv1KUoa8crUG3Ghb53Jy9uxFu1j9tevS4Tf9fUX9Woc98svs55y32nMhLf9U",
  "key10": "Ks3iMusHiqgbEpMvd8CRKD9oyFnd6sbJmq6fsjzGAtUtAok62d5tiWogw2v1WewhTWfDrtothhqtXvkn173K8gd",
  "key11": "xzMJSKTw16MaQrHC82FRquk2Pzf1L4dGvcVwZsfQVY1dvRJafu1pUwvLs1HtxKLL3LBrdLeK8Wc9Dw4YW2JnC9D",
  "key12": "5Bg9qEpkRV6mj641sUcWiprpahtzGBuSx5YabgPA7Yw8qK4kDvk6msQcF8NAt5521PuNyU5iLe5LPhXU9NJa1TFT",
  "key13": "5ZjJ7GkH85SfyFeVpsAfVbeyqWTKMk3k7TW3a5smSYBeGnR8Czhm8xoe4YmYwFQGYiNnb2UjhQURiX85PaGaDj5p",
  "key14": "RBXr1eMWVwFBk1HEARJYYXtEeguhAwfo21t7KQyxXaATF7rx5TdxwVArkRsrWqrwPU5WcYqeijSgLd8cU8uAMMG",
  "key15": "5Nw1nnZrDU8DTjMADTryVRma3WbjfrrDwX74t2ujopUcjwanwtZLyi96ysc9HJMvYtWz9h2H4EomaDjXiU1y9NDs",
  "key16": "3BBkMaBC7ZuJBt6f5YdojjnVrLnDENBvMBMZ5zjRZCwTakUHpjGirqXZW3HvrEDwEwFMa64tQU5JNQ9XneisowNy",
  "key17": "4ZCywEEUDZP8B81TuJSAG2pC1fVsJD8ifnsf7jSpUiKUDRU1tarFJrSjVxjvNuT8Yuc8xbyFnUEcEFyuF2nb7XU5",
  "key18": "tMEEMQt6c3q475sgtQHCZxxnNyreRkTnUUuPixkdmPfJf4f5kk5GfkvcUdkP6VfLdYQEZFNoirUPMwtGLP4RUqT",
  "key19": "qHfhHfzEZfHaPaDwHjtEionqjRHxZbGjRVWheoDoYkUhdGKLwgtCkvshRMT4BaMBdmrM2eLGGjhDVDJafSxUtgK",
  "key20": "kK621wH9Q91HiSjhcNLMX6w6jpLijA296C3wTXszedRiBd4rvRcp52EqnM8oouZo8KGdh2ipkiGLKEsdujEXpvp",
  "key21": "3h6MYrV4vMpCBUm2ZUriSDat2p2ui4adMXa9xt9wiKLUYXjHYjTwu4sihTWk9EuJdyR9Qp2G28xYDinJCwXxENFo",
  "key22": "2pVdJS75rJJAn1q37SNcwEEzCrUjY5ojkvH11GijWko9HCQ3RE9oxirjRLd58brX9td2NQLvpk8BYuvqezp4Un6u",
  "key23": "5GGQBQux5w3xVQwBKSbNAaot5JPDAJmieJSjj8unnphAGKV5g82miGNx3LbaBbrTARH9JrTLQBocvbazVJCEHzeE",
  "key24": "5pZNTt7sBTKgr3CGMzjr5wBSqYRhYgrXbBmjx6iMWF9urFpW5cBaSUmoLJptW6dQ4a7nUEwCQ7aGD5aLyZ8TV2jC",
  "key25": "3PWKjeVwTJWFGn7PSspoFJsuXtsR7VVZ6u7rry2AmbdQGddd1Yj1v7Nm7EpS5mmGidsnuUgWEq9Efa4qe3ZPfsRB",
  "key26": "3n9j9JpE2dS28Mm1DuHMnkxfEJZJe5UeEuzhTVcz4amLnBX7T7pPcDepfwtG2hKYtBX6a8j9nXyV7wwfj3U5aLDx",
  "key27": "4N9sHjCMf6ot2bRor9vgXnGbrYVjsyDGRjFcsTJvnyw8vD27qq9agbe1KtyjY7RZF8aJ3CJnfiPsAXUP36vyydZ1",
  "key28": "WCTVq61q5LTZcFETaRk1YpU76NkQfacfxQVKwbQmUQHXVfSUscqfZbFAjdi3vTSHTKsu2E3k9bQ2ytbj3gZrGai"
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
