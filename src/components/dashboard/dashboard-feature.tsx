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
    "2n74MXELcXwbjmfyJkF1HwMwxPKJoyt3tqbCa7xDS7Zy9zkjxafB7jsV1uzf96pxSb3dYdZK7tpC38iuDjKQ5qSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P1Ny8ducrwbxuxBpC9JnYqopcUTgD4MSBRyFfT3mrkonq59a7ocwvQCVj5cEcH79zrbK8tuKuexUDKsg7S7Ny7z",
  "key1": "5AAzzscxKaoRLS3WTYpoYkScBgGHTRqpt5v1eV3GXMYwzuJEz1ENUoFQXLCH3JiSPDC5enun6HYVKJk9Xp5qiuyh",
  "key2": "2pTcnmk1phryNDMVwfFTaCC4ZkwYWzUc267PJpKDUWMjcugBK7JEpMseLZf9vXpyoMyfkqom62dWi2yZHv6Ux6az",
  "key3": "4JR9V29mUvZT9wZPZ5bpuy8EeUbe8XKRu6QcfWNz5Hm2EqrKDvoEQ687xVpBdNorSjLCczKJdNLSuCtxBQw2F3Nk",
  "key4": "64xYN9Uhj7e22wSUC2HtKwSKq8ChgBrSFeUw3tpvGg3fgJAfWhfo18sRW6KDkEPSsK8EB99XMr1drczg3VrF8v3E",
  "key5": "22RDUCNedLr263rM84zFE8bcTJ2tcDLkMAKakJCSpsoGtrJQPEz5kfRXiuGBEoRTxpyHU1RMoYw3Hn16GvJFHH3B",
  "key6": "nVgB3MHkVzHKhuefem6AZgvJF9nQ1KqHdSPw8YdehKizJXyiLDmGDNbLkCg4EqgDpmjUfYjcwt6zJM43h3HbJxX",
  "key7": "jF5wEh5duZJbLUGNAHDR67vFqDbLgs2Z2nRhSnaNaeCLPYGdSnS7VNHNmSujNfFqPbB2MwToHMpPcYXWkMZ1dwE",
  "key8": "495xx1p7Fo2QYcCMW9xDWL64TvBF17eLGp1pTm8pDPWJ35fqmcViBWYHBBA6Bf12XskVt8NmMzWCmwsfn8shCTvx",
  "key9": "4Kvo4MBNTvWwET1XxNDfYCsu7pRYtfN1TnyXxu92LxuGYZ15TsTNnqsKKnM2F6gPSNUo3PvNJ6jtkXs6dx5cuSzs",
  "key10": "4KZBQrH8wurVfyz8qJMqKCGSwbwm5xS6VkFi34UoLuUveWRdf92hdoKd5xmtkckmhjHjSHeG3mAxy7p2TGbiARvb",
  "key11": "GVtgGLhe6F9VotHyrKFsEPKzt3hiRXwSqUY7x6L2Q9GZ3osCzwv5S2ShXREbjKTaMrS4P1UDTi5amF9QCaP8hkE",
  "key12": "2BohBYQkCrH7Lqepa4XtYaSxEGeZnDzw6b6KdfJpYF4iPVFP1C1Q6K3Tegvz2Cj41m5EvL9rQCUxtxEhZTxrtnEJ",
  "key13": "3qs8d4agx7Kv1bKTdhBJe1zygBtW7mEAoTZKPJgTAZxjKkq5YWx1RvJnD3faRWzAXUdewdnAmzsaVWEz9RkaXpbe",
  "key14": "3hcs84NzzvejfMg7hKcKVPkDmUffpH5RYmKr5SxFZTeGjacWf4HacZ2o6G1jTuUpAoEYPtWQ6LfhpZY9B7ycmQg7",
  "key15": "2AbiFR1g8W2snX9qx4W1oDwcKBxwLqJQY656nhHcuE2WdzXuiVXLjJJAk8CEYC6NvLiGgFwPfxmwmQU7if4rWwxa",
  "key16": "2KRC73MK3j1rnuhqS6MgZXPQSsgGGwyHSTUt4LfUMigKFZdqktQy4kQUs8TjH77Koom24LY41tpXbR25TpBeoYrY",
  "key17": "65CzPAxbCN7mYgSHmPbWafZP2mFSQkRDwqWZpT3X957icHrS1qkgbJRSZMAr4frvPgvsynR8Y9rio3LoRTYkyE14",
  "key18": "5i9Zah1MreuZGJwu6qxbn5UZeDvXjez468NNdBf7vpeT549srFUFYa9EQdwvBbtg7k6RELA8kbQFmhww3BCaFJYm",
  "key19": "3vnrSvnPfkuHHkhUjPzx71hvbSBeHTiZdTTGEmTzsVFfKZLMpTFon1SeNuLuvXRWSaSKKmZBXBnvCCifUe2FeoB8",
  "key20": "5wwkXP7hHFMhD96ALW7MPCJRJr3HtKT9KSzW4AJnPzC2mx8Nt6TB8CghtbWjME4Akh55C3rxC56A6aDiK5BEg91Y",
  "key21": "46vjvUynPjj2FwAXJgMDobz3ZHs1Y45aqmhEBdJts2WRuWQnWoFQnfhUjMKpugS14ix5JpqQzqsbjhRFg2dAgHYQ",
  "key22": "4ABmC33kfSELhfHG1QcvapSAgVKbniPCp17SJGakfeVzjgPuakmGUFKF5LnUt5XXVyHYLxpTRfDKFYm9bsmyQsqm",
  "key23": "5NA2QANFNyx9V6HZZ2nCbPLze7Awg4M98fTi4yKHgeWzRRx74uQ2SraWA2ckNqT84LB5msjSSBjoqNgDs32smweD",
  "key24": "jgvU8BUuPKfef7a5MB1B2F7t3iUuEpJ37kEzrAV3gNyT9BE9WWEnrkCTCXth72WPWVrN2X8foD7aWKFNjR5AE3h",
  "key25": "5ccDUrwBCG4BJixcoZwEeKJz9R6EUFgX4evLpW3aUprfgJDk4ENfGbVF19PvNCND5HjnLoGE1TPVZDcNyLmEg9vv",
  "key26": "4uacKsPLU1YiiE5VRMeE4BFRZyPn23rkgNGTbRt6yHVG56ZpgUSw7cpZU3uHAQxcF4U14Nds2TkQovQEfCiXxuGs",
  "key27": "2CxmVfUFVtwXz4puhWmMgurPokr7BMV2Le5vsc9dEXAKhkBMkAuX1PbSQdeJvWL515RHnZTJYhvTHpJkigQBeCNK",
  "key28": "3cYZMotDXE2rbidMcgsW1wpVvSXjM5w9GwLdvwgRuk2yLSiGsby4jGwUDS4CJ8CW57rv9DignijNn13CLX3Pj4UB"
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
