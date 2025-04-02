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
    "5orsEC95NvqsDM1SYhuFkiMe5nawYZa9PQzj5TghoFo4YwFbuSfvxnnB7HkkTs3ck2YvHfaSFeGoC4RgcWXJDdgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BqhWmvm5FAhxzFwBabXhBLfS6huxqLYJMh7tZSduTdTUKeiTp58JuafAuQ6K8kStPxEneUVQicXCV4sSDVo7sGB",
  "key1": "55bv1tFhaPm2hQHrHHpXudF77hXgEhPhGjEYqu1uZaYRDjNyAcj56BsNPL9Br7DY6apV8Xk8FzCAbqj4cmnehYqP",
  "key2": "L8oshFcxa82CQqcim6DfYeuRZcwVYeQRWW2mnjAbE6fNwSNTn84zNagpLMyHGCgnqPUZQ8YuvVCboTuZ1J6wPUr",
  "key3": "4ojBgXqJtCptGvhPdrhxS2z7mavoAfGH94Yr7snMWzRRXUSjpcsbxCfNuPwHfP5zLKa87Es4fcBZQ7NAthWb2Tc7",
  "key4": "3PQj3sjJLgYWBvUUkqJdjmqZu96C9ifvi37zyWY4i2Qotq6vPKj1mvTcEHeryLWGoW8d8hgxntGKV3gqJtqorbM",
  "key5": "65LNjgbzyaqGzDbKLtBEiubWZn3gokTkqSJcwq8wZ5Ny2GBRAzkguB1nY1r91zizYRLj7vawzQwCx19tKAovHthN",
  "key6": "3c9tZv5vaFyva97zuai12KQmhuou4pcE7smVXYcBeiUPNFw6rCtZvcnBDoDWdb7Hii7z1JafmbVXPP2xXyC3JTUL",
  "key7": "2ZW5FPKSxktg3Kf4Uv3qG4Q8VQX3V7NdAuMJDfD9YphPsLRpuFpB7yNGKzyFrKqszpJ5Das6iCxoCx7j8dvjuqFp",
  "key8": "2wgQZk2Ra7baCv3MozgijZp79VcmbtTqtF2YHmB2fSkbA369tQvWEkc4ms8qHGiFNnZpHhkfpiuYLkAVWTv1vfj2",
  "key9": "5h6fbhcPu8aKAgP5369XAVQFq8w8MQtKqfrfVfCDpNDgLxhWETQEwndpxxibBKxSke2HqJKivMzXi7qsfa9QmwYR",
  "key10": "5MNnkSztgzxKquXzuUWcGDWM1seBRDbPTEuswPR5jcd2FQmiqVopZYQjGQuXG6jTjwF6RxScTGvrzBqYynmKNKoV",
  "key11": "32C3hJUb3hGNj84AvaN81cShL4oxLCvKPTxgGu62x9fX1AJLEARvgtguJvf81zK3EtcHS3uDFzvMd2x8xJE78mjE",
  "key12": "3cfQN4W2KjH1SDwKCZTVdmc9TwxN7oSFUoefceBE9nu8z8yKG1LWNfMRjtk52qwivyyTy7P9y1gTec2LD6snWsUz",
  "key13": "5VR4ghSYL4MAGDwFLcdC9yEEbdM9KkX5FrTqrSa17Ruua9FqGuo4uu41WspdW64QrNzgiwGDffsjrWTpVoQdMwUm",
  "key14": "5wEpkEhKFTEqZDPiQpPAwFtTNGh8KiLu6E6k1XLugMV9K5XgEjo3fNVcdmpvzVpjiAGfnoGa3DRq2Pt1EQBsjoty",
  "key15": "bW1yqfazVTjVtSqTPS9GAkPRsSyNod8MKk4h6nJmLosd5RUp1iKA3mwpFbMoavdb8nhApYF67Eqw5YQ1VSHSYpL",
  "key16": "BVRHs7vobmqBbasMF6XMnaSVZxJBAgStuFQtb9UDpqaJLW2UBrKV1hGTprHiZ8nmMMvvfmSfcZuvAxeydXybRSs",
  "key17": "3tvXagxB2XYT42sHt5RMSa5eTkNTChH5SpDPkbVHCHLNvuwdp9fx7kZZmVrrVHMHavsTbiguFtGF5Pj5HFXSVS3t",
  "key18": "4AGWQUazQNX2jo8fktM6phVpRxfZDmxD8Azcv8hXTirB2y9zgcgyjJRo9R8YSEs9D8GV6ECiwZqYVMxDT87Mv5aR",
  "key19": "4LdQjC1pNGi6zrBy28NzvZBMDWdfQnk8himM9SVPxMX2Wc5YqUpUvUNBWKbP6S21pn45ZG2r1bMAZLdBgF9TEzHt",
  "key20": "8dFmrxidFifpyvfohxcbc7TgZEtLdS2Y4adhCoMMLtFFNBwMbG771zQVBxbDC6N4szfrYU4Q5fMBUZyNcBTg3r6",
  "key21": "521VqoChtgmVjY8HSYnwH9RPh5MxtnxBY3hHs5wPz1iVKJYZtZYKkGoiHCfqiaqgGz9p5atR8H6ET8p8b1zvs1L5",
  "key22": "oawaX8ztTFvoMDDtrmoV67N5SYVzLEy7stpPe9kfFppsQc1XqPF6nmU7QTVbGmc6qRL3T4gunAkMYtmkRFRfVLd",
  "key23": "3P86f2cuB4ZNxrBtf4962qRjbW89JDV8GyyQDbM6MeLa8eBZTgfhzizVmWrkzc8g11D77b84wj2ZnAiWHDc4rXKM",
  "key24": "5oGCx59WoLcQoFPXnC2xb4J8EJo3upxj2Y44TZMyAMyD2mMxmsCEypqnj4vXXwA4syBVwfmV3tzQarHJkvNcfUnU",
  "key25": "5jSYqcBQH7XSpgJ8o1bgdiPUECDtuz3oAc9Kg98Rosd52geJRmr8YfVBbWQ1py2ajwnkHAmwPSJzUGjCpaiujrz2",
  "key26": "4BAEPkpCCTaL1Y1o6LQxn9UKys8vFtPAaNParCu7tWe2WCZus9dTPN6ChrBFxwz5uHxq8mTRqGvjkAB3etn7AraH",
  "key27": "1CPKphCuTK8mtkezC7b9fbDpdN5zGpwcgrcifKcFYNgeCFUa72jVHZMyRbeDrRbT2FkrwDKgKEDcyYZAqGfy5aF",
  "key28": "58DeiKDYzfYrnW2tCepTxyEmG4PReuYdmAeamM8RcWFxuxcsrauUnyxoH8ZwssGGLz26hhfqsq8nXK2o3HvA4B7G",
  "key29": "54D3smTq53DvxaLgGPz6vLL7ZRfYQjkAJT1wremG9rX6CDRxA7AiHTP252WZ6HJxzgoGZTwoE9jcCgQQ2ZHKUSsY",
  "key30": "2j1yETLP9uYaAgzMLPwHAczhoB6ZhLvYmHZE69meJMAMwphgSLdvNAHJp6M6EqrLMV6Ero1yC7J5zmedn5krSJ9F",
  "key31": "tXrbTzS4t6YRkLVfNNsCGiKMKnhASzQuL6naSKoX8rSgQRE1m9tJeK5jpYizZdBD5BbHjJ4vWx6KfHa2wauxcAr"
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
