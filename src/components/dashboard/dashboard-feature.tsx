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
    "23L4U2X3gfuow6H1JDjGXsQnVYS3owKditMmKqroJxRSijxZ7QjqWixdN9KTeWLhDnmM4YHnphUvWbHSrSzFLcYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mHSH8euiEErMVGbgwPhpLbt3Pw5c2rnnTkDWwediWAkziKWR8cU5XsTzBc9oz7RTNfReTaoAfBFEJheL6ai1h2G",
  "key1": "2wJVFRVa7Ty6r2MoyCEYLXjdJoEteR4Kqt6KjS38fFjvo8zcYeYAMpwFgcdBB8r5odUB9q1cD28PQdUWKGEZdKQJ",
  "key2": "3MQUy69FGhGd75wdXVuFmBf44QPEJdQZy76mdvj6hy7Fz6MTj3sAQk4kD77eVsw689MqD8iy1vumNPqkETm17Gyx",
  "key3": "3pw34ds3JAPrqjN2n9CS5PGAGWsBSTLbKiSK6o9ifDUiDkRr9D57HMgrR3WUECrM2iD8eQjg9RGLXvhfwt5Vr5mQ",
  "key4": "CGJaTMAiReLr57d8VjhUnDMkwwopjB4VH5DibrGgADxDrsFVsuFZ9ooray974oyxzrCAB2BehKX7Z6KD7dV5Tiw",
  "key5": "4K5az2iuMMFeSuHPu4rohWnPVEK4gE3NfzchjXC7MXajPcazjST4rwfD4PZhYVRUnVi5RUcQc9uiHBP76zp1Mfd3",
  "key6": "5gqP2KC8HuymFNtVFkMi4GMFvnmpb4xSZv3vmbW2NCFefd9kB6TN6SYt1W12aijmUQJ1JNF7gBNzKuFWYut9akRh",
  "key7": "UG4PUENfqKbU6xAVWiYcd1eNojpiYGEi7FYRRgBRfViPBUsM4gnQ4XCV74dYAGwyQhmMcMuQ45HETb2e4zQzvjR",
  "key8": "5qFFi7oKxGyWBygLDw3bqM22PmDd9kc7WfpUm8aAQiyp4eDXet8Gqs2P4yBEqwzfpNB58uzX9vYMxh9ptr7s2ucv",
  "key9": "ypfwR43Lza5sroSVfyM9k5YjrrgZYzAQKBpo9MtrAMj4e66rTNEgXHc5fabgPkSvufqENhMXiNYjj3CKodna2Yx",
  "key10": "2NYrpAi2BiWsD1TbZQ2cQCEthxbjPGMCGXVLY5ZmgGte88h9yCgqUxkA3ZHhBJQyFqJAwwtgcynnGGvouAazGAJ3",
  "key11": "2ygwWyswvz3VwaK8Xf125T6ffQWCkmarE2im2NfygcvRgyv5oQCdYuFPsuc8Z2RuFdUPx9dzCGie5XziwsgffSPi",
  "key12": "2bERst7ypcrarGynBRyWtqzPG4E7V18PGK28JgTbqUeodofb2Uz4MzYsRKSTWXVcBgveNhAGWfuModQpv7fHLXKv",
  "key13": "2VvXq2eEaiuiprNu1AaZEnKWjctGZCrZXxjKJ7HvetZpLFxqHbShEtwgrmXFcrEs1nDV7hksGhbK9nNTY2ffCC5M",
  "key14": "5TVcdKLcTJ2WdyPWbfC4oucoWv76Qej42LjMUBjQRB9icbQpVt4QoGkiv3Bahobbe1zgZDcMktkwi99Lxev7LeqT",
  "key15": "3N6pLQEpbz9c86ZnYLPXSuEZxuasi5drfagmdtWwcgqdHc5vcwZnvWab8CmZqkY1e4a7HeZWjB3vp5YV3mfaEmrf",
  "key16": "46v3UJ3a2qto76tk675iTa2izvo2VtYBGUi7co2S3ZoxavbW4dNLumQgTfL1VgZXNZmbL8RXHF3fnKvLJPWsrTLU",
  "key17": "5PUPPxtHuwXccVTn84m5CphSUpzY1Sybjgvh4BpDgsLFauWMDU8qx1tWgSDj4RmNaVSHBcGdd7YjmYmcXQr7EUua",
  "key18": "5c4prTkZukYK2vTkPRemaCzoqxzUDnV78hVyf2pyHvo8LJgRVv3iqjuMf7j8rGxtcwnMzWjeGAyRok3cgtoZ6woa",
  "key19": "26go6DS5cCypn993tzvS1NKAQhLEWmdrLgrwQYQNGJdwQWTT3iGnssFpBTB6rR8fi7rbjY16zKfzadqvDBwmjLoM",
  "key20": "3yeztXnRWJ2myUv1wFTHqJNSMgRRghhzAqvQHKzCvaSdd2XwdXDiHiN2scUt5Z7BqRxW81kBMPjw7iXgdhTLC5hG",
  "key21": "3iVeZ3aUWyn8wZTn9kR56c8PXnhGFihaePSEPaZY4BPcR4DYSoRoVnuMB4tQBqxYXc4yoqUV55Vvpo1ueG7G1KXV",
  "key22": "4LKjGbaddjydE8xFCB8hi2oRNBQmvK3p22H7zjiDSsaA4yMhNCrTwCzVf6XjycALbYstrD8LMqg4JYuruxNNVfCa",
  "key23": "5HfL1u7UsSJLvMrDY28jFxADEVGmjXMZQJB7sRkjXizQMZ8YDkDo8YmUDQYrLfRjLnC6VsEr8Vg9LZaZtJxqaB7B",
  "key24": "623WFonN1ajykm4KFEdZqT1Uknkk9GdpndYGdMakdcfte3vqY6wS3qDXAspZy2h5wHSVNnPvhPeD3MZtA4sL4jVJ",
  "key25": "3SaqMYXqcpjSQ2oZktEteHQmKSgB7GRydj2hJvakLqNNJVaNMXTsfqfy5biJRatdYuhaSUwMtoFJBLse1bnpPa4Y"
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
