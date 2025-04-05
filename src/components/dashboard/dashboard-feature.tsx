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
    "57bJL1zY54fQyWpavs3bq1HeuiDvSPWzGXo1HgXYB9y12gJmy2N6E4TsmbdsDaZJmhVfwDDoCj4hr7zmJyovkgYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LPDTcLNucQ9GfzzJXSTFj3WPG8V6Pj84BPLTFqJZPmhGuN9VRihxdYkvMBfBkkFiSsqMLt1cB3wLEHpfZ54ZrmR",
  "key1": "4ms5RVqFPA5bfiANoG1mzQjpzh7Y37pYTRnGFFNiwbx7YTU9edKAx1fYN9rv1FifSJjK3ZFS43VQhX4zxkwKTHrR",
  "key2": "3oidxoEQtBfxtTbMFu49g8SLYB1BheSR1ZJxqERkXQyPUJ3PP8UuXky4co9uVgUBhL7HjLoYKVbM3ZR3xMkJsicp",
  "key3": "5gjyD895uDkjf9UFTb6BKypz3HRHMsKAGvZgpjUPKHDEgWJXepe4MJngSvKQm3EswEQhQ41SpYmhVD8WQvEyAWK5",
  "key4": "5TQY6wYpnDygf4i1LjkxHh1ACt6nvBGJWNwnaJU6JpPbxkKoUD647yxEYcF7wVFVqs7azJRwkXkP4gXR1exy42u5",
  "key5": "44vH1Luvw3hNTey9vpjx597J9qdDyuuLXQNnCAdAmfMZJcJ2JKzDbCVDQym8WhoFkm3Gd6BreTKFJqLPQKnaGEVg",
  "key6": "UMP75YKrLVkZquYJeu8ecqHcMAtu7K3qsEpmodttPxURBzkJixM7AVkX5QNnrdtfeYdEQURGAD7HZSDJmRuQSah",
  "key7": "3qxnKDmzZY4WohjkhNG8kELqKA24RYn4bKD6NY4u8b6AsUM6x7RewxdMzRzGStf4RmQAnPrrUU4BN7tkoiNVcZgR",
  "key8": "CEQSk2dFvaFL69WWW1h9MevQb1yvc4qjH2BaQrz6Xkx7nvFgS2pcj5PFxTLn8F2iC1ZJaCExFwLsKvMqDkHADUD",
  "key9": "37GUfvr2byN1JAiTYZ4bz8onEs7JbfTDoMU5otdaHSaov5dyJ4tzAYgQwHb5LFJSPrqC9QtVaeN6kxo7gQVGzfcE",
  "key10": "2L56p4kkuNbY1BVPXZQ3ujEr4iFv3yJwGNcsu32AbNAiUaq2eziZHjvWnWLSPsyNEjhTZYMCsgHb8X18mwSrtfep",
  "key11": "2s4UvNYMK64KsnpY6CJDL5kNbpmLDRtRsLntPYRsTx9mVdBqEq9539DyLi7oTxnaPh7fdAKmJav9X4o8qAgimnf1",
  "key12": "3cgy6cXaad5ps6yYT8QpMsScaj3YyhPTvGjwgwvJUskvhEjgEnsYYDcquxemBnC8id6v5SKeEeSJdr4isf8k5EAF",
  "key13": "2cqvQJCAsiz7F65t2ZKkWKtB9f4wDQ6X1fMcjznWj5JdPLMwqbZw2QC2DejUiSyiEmq1wjFQmiffWMxNtAiee789",
  "key14": "LyeVoXTpY4sHFq8h9JMvtP8ih7Hj6Nobn6FZD6QAwFE7N7YP8Ax8vPsZzuR6RDWYjrMu2wKre1pZ5NgFXoVWDGB",
  "key15": "39fQP93JF3yaSerqiqg3FVyWpoaP7Sc7vEGacRupQTAgFtBGyRByQXqeo3B6Hfp6xurwzf62aG2eDnNMohHPDW4P",
  "key16": "5MaeiQsY5LCY9agNeSD29VNY4Vznuisop7RH5wakA5U9UMTxDr7CBnhNmo5HfJuWwR4VmckWjLoxnKpLNrVswZcX",
  "key17": "4FUHqWTzFrMGcRuqkB9KgR6nuoJpkZ85w9QnGVXobdEahwzVBaHemPaqW5Bh4x3ELLnAKkyJ3rSYKdgqaKzmED2A",
  "key18": "RJbyVwYuuD5i49XXhZUvyxsE8QwQnPd4JpQXDq8Nr5xSrYit8keU6rYDMCSgptp4xYCnW7C8rpUhLxbM9TikmbN",
  "key19": "33MiNFeEaCj9FfLVRJTnrZWmEASRE4SLrpu3aa49GdApeSPJShnqXekPnEy1i3fqoU7whfsjWqgNCyeeZ45xnp9d",
  "key20": "5H4vdVP74cA5t2nXEDdDBvfe4oxwBEHdnSrkv98HJ1jxx3PNnL3MT443z5poRuwAkNzYRzGjxRim4SnPK1gRzwoL",
  "key21": "7hpQ6qgho2KanrCVnDSy896Vi4sdv4MpP29JyeZYgA8rDu9b4RqMPHjL4sdtG6a3rEMZLJTK2yEZRyN4Uwkc4RF",
  "key22": "2PxFup2bat3c9kWidaxNX3PAtMkpCYeJEWf3kf9ttJxDd3ECmb3XGgm6qa3zGmxurp5wvQ7YUv1AsV6oFgXHQEA2",
  "key23": "4gUgt8rqRKBez6bw7yXMQ3uu7adumj5jEGG2vDoF6DRKk4CPEWrPmE4fPQBtUeWUP7CMFQuC6vTPAiBTLLaKMLyq",
  "key24": "bLnDLAmvjnSAR68yNhCsNNbGNqvcZthgBHP93HmQJUKNQGa5an3iWwSDni6EeWYN1fHVUSBqv5hn97qUWMgjJ9X",
  "key25": "qqQavF4nzmSTeLG4a9VCKWS9XFEafWEv6kMpQMAN6jocVrn623z8JdLCLM5yPXe52qjFEfx2wPaMb8YFQLmPdAE",
  "key26": "2AKBPAk7cGRaorFzF4FFZAh5oCjDSLBunnDi2Beg4JRdLb7ZHvQWnHBuLMeaC1R3F3a1o9CpRwqU9mDxMc1ZM4zU",
  "key27": "QUvqv1QRtXMmWc1bCjDykuVYFQqKcf22KC8FGEE25Pi7AJMTADmpqXFr2hUGio5Bs6Xz5uso5RjYFbRLV6EG422",
  "key28": "zdJra6MFeNo1B4g9M9m1z5MZDZYD31JY66bFJiei6rteiAFYhhEguuFwXiSihnpkkkiqPUk5BGdAZKNffqDHnmw",
  "key29": "52zSTWBN4gCPCViB8WvZFJaVSyibWkr1Yn3RPDfjF2iKXZyaeev7Yrbpi8DJugLPrJi1GTTowczc7hea4JVe4Jfq",
  "key30": "Uuk8s8tQVdGY8bkvB23BwN3U23g7cWpBWtkjKNaQPwSFEZPcC2qx1Tht3VypmJF8NExfUVSLKSjQLyP715apxpK",
  "key31": "463sCf3s9XNivALQDHXQxFsMLmNXdpiD4MCYzVNNWezYeWZzuEAGcvvQRV7bnVWQzw16XVCmvKQvbnwRqN2AWjyD",
  "key32": "2QQ1yUudVVJcgu322wWrMCPYADxsAA2BRwFj3DxNqJH84jRAdVriNai8hFMLvoWu1mwaE5pAirc4acYy3bXd7eGS",
  "key33": "5BXsZ8HwXCyzT87UzCS56vUYXNDFqKJY9UVnw5qGBak8VLQTBnU4GJKNkKVVeULJtNQswo3AvkDCkNjUEeGGhxbB",
  "key34": "2GAHZKPN9La6Ad2XYeUdshcxYipHiy6PjBGdMGdZh4xi99DBkQG92z6GbCicaNDTLYQhcT9tFMyvMnJUJ1mDBPKH",
  "key35": "2nSgksbPScF2u7nvbF7E5EFr7jTopJhrTwKSKp1P4Tt9cw51WT5LDHnzVrMNJxytLimNgq3ZySeNkcnnoaGrXWUe"
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
