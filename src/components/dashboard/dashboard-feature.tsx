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
    "33xovP9h4sgFadajCHMvF2EMhNVcckwkSc1o5WwMaNRUkmS2ZqoGDbh5T5cTKpkxFPLDDgNVPP9whn84sx8yu6P7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SJM5UvLeSmFGjWMYuRUiJB7Y54dxdjCs5ovpcmbDH91sY8ivgd82MNMTbp9ncVaXGgeqsse2EBA3kq4eJU3ir7t",
  "key1": "pLJDfXod81Vdej4uueK48fz7WYP8bWJx48aty3MqBz8hjgxnnGbdEavXfZKqR3L5U5vNYdfSruS8k3swsvZYjTd",
  "key2": "4Fn2r3zDvmyXkdTnAfRaYUkESodFp4USLw1CYG3z43Zkmv8EsVxX6XJChcaDM1TZ6w2bjFKZWg8dTgnfYPGYT74u",
  "key3": "LNKCZfA6FEcvTqwXjeo1SaohVnJbbiCGnKmPRks6bkfh62xs8HWK5iDo6m55sCGbB6mDNUDmkkr146JDYtD7fAa",
  "key4": "cq9qvEvim2AvPwsmreG5cymtKqDXgmVqtqquFLE159kcM7uTZrmhyU1cxUBSKrot55P9ZrdvkdNJBdXQvbaSZxM",
  "key5": "4xq7xG6zw2navWauK7Lq7PSHLEoTb8ZSuTcHEyZN515ADXxv2T3D2GWav5Fsk4533BVWBa61ZnA4ehr2JYfm3VKP",
  "key6": "JgYkZkHBGYmWeFJL7MkSRC9fth7rDbc2s1xhxxqztXcy1xyTJJDoWrJF8C7a5ZsPQ94BkoEb896UkwbqezMUF4S",
  "key7": "5ALUi3M1DMV6uSW3jSUjUjxJDLoxn6vtWRZ4wRecUiWwTqPnB1jumQX5ASqdNVDLDe5f3HpDxYuDbzij19cJfJxc",
  "key8": "3PYbk3SYN6vvHLjXhAHmBN44v6HzcTR1YFim3Kep3UGQdVNih1AvS9VQw6EAWVeYkqZTbgmURNmx6xCK8JSZyQ6F",
  "key9": "5cx8rAyvaggyYccvoLcH5MCvMC2YFEgnwrB4fTSHfKquffzzzUmMeMF6pjzdzanWmMArDzwymih2scCCaqxbiNWA",
  "key10": "296qsMrAW6kFPvEnfHyjYxp7w9tkoQtvNLixgC99pys2SHwY1Xxgt9VVAUVtCagEhXqRLFQAaoo7SqtXT1gg7Aut",
  "key11": "5CUwFU9Pn93tgtsh9U6jzxKKusY2kSmTC5Hod3ku9yCNjSZdgbzaniX4G93bH6LM6qqoa61sf4VE2K9eyf3NQdHc",
  "key12": "65Fpmckgw1HMJgUG6q4bUNZD5SbqWgRm55etYtEFjvH8bXeCy443BvWYEZhmU6HxsREVQDoMDWEpUL4ChPMEzgRa",
  "key13": "58p56R3B5wnkVKTHnC9xzveonW6svQWKCLFdVj6ZnQWJ1Cy6cigeQ4tWY8YF7rBCpoQZcnoYz91dKYJ1XiqM7ALe",
  "key14": "3SJ2gqv5b71tcJzi7DRRW6ZbfPhnjhQqJ7Zfj2WCEyHqJjaQfM6jTf5ZWdnunPVKgzdRa3EcLmmD5KtWmrKDFpoW",
  "key15": "4rjH4E6pY41DGZcYcsp1Rsj7w9Fx1Kd4ahdgF9U4gWhkfx9kVfpdW2PXPyFvjB5kGAAYyJ2MkKfLXqgn6MiJVPPV",
  "key16": "5adXoNVLZkGdQHTSZ2f7x3EsSnzgA2drcL8pHSeH8tNbkEfEfseutACR6p1S9KA8d6vLiRB6A3Jarq7JnEKHMUEX",
  "key17": "61FYuaC14ghkoCjGj491J1XEekdV3PhySXC6CDUaz92ge3u5JvV3xR1BCLnju2rpcXRfh6MEHegpTU5EMGk9twue",
  "key18": "61rpDPfHqdTLdSNCuicLDKSTGHhEEpPHp6Fdo3QMvuzphikVPkX6uAKgbvHWeMnB6X8g3pzX7V2MzpZzSxXwAjmz",
  "key19": "4Er1Wj6S3PcQMbEsJHP8qguEz7AC9FRChapLPGPUqLMLZgkvsHrz1oxJKECswBXsD4nkXGkM6iUX1WJBnp125b5V",
  "key20": "3oMzeDQzu2k6NMrfcFqqcYMs6JJKToAdFZSqWW78woojon357J7VLcnjr5ntZBaw3vCXLgQabwVZJxrFKn9f5skQ",
  "key21": "4iFN2UEgVMXiCfSSMg7D3ETAohfAbmxuch5Crps1615qarpECJvFMjF5Ydg5vkUCBuCb6VnFgwmbqXnhQc19HMWk",
  "key22": "EMkkHEgpMGaE8mViH3v4r5PnCxSgVQEQMK8UtkKP4HVwJurnbqx5uUS339dcVjMbWYGxKyuoBJaY413zs4fzVGJ",
  "key23": "66wZAmqTV6cKKZkjUmnMRSS9rA4dVCLeB45k1pFcWvTWLzxvh1xZL5VjMJ3XCiQDnjWjNSHyUTbJJpdXyXpd9eL5",
  "key24": "3B82E9SYUdWJFefBowL3YiGTL7AKqqWxA3oUhz3RmSZmChTiv9GJNcVaW3E8J6X7gAM7XesiyW5PipXnqizK9LDo",
  "key25": "2XjvRN72K5LMr5GVPtRxSchrKciotNCHdbEw5Zie92b8pJCSnPJKppaDfg2i8SEc4VqB98DP96SnLCVUVfpuVtkG",
  "key26": "3zg9vYL8fDDzd9RdPwMdJ78hKz3BAiuKcVtvVeF2b92cZ6X4sa8pVnsgtoqNozEd1uV8ry9F3NfvXEpNP648vf6L",
  "key27": "5Jz7ZXerTJYAJwWCPTG4y4Drj3MdTyXDA3SwUr8wDugVMGoA8382svBW2e5XmBy8C4Mg9SqUeddRHd3bsXf2GMWi",
  "key28": "3iLJ7dNpgs1dKPtUqHBvLMfRAn7UopUBx65YGxtFDStVof26bBpnbmzKo2TKFAHpTky8bshtb26EdGK1CAGHZDQF"
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
