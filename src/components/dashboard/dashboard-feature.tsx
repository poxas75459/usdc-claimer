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
    "fztCe6YFMk7PZWvdvFMfykEzRFPRWh6QzDSE6GQD262CESesf3Yi8BSNGLiv4kXsFdRj8WVF6E8zBzerLtBinto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jvr2Po3o19WNExSH4d6cdcH4qNN1UNaDoByDfti6sG7Qm7o4p3Fu3sZG9nftHrPSadBj26MkvKF2148k3JMvttS",
  "key1": "bpCfGEYc3DeRmELfy554LRd6hNehut1tGdH1bK1PuVQLzs12RH4p5MALduhe44h8YyvsacFtX5VTpKd2LnsJvLe",
  "key2": "5fbojT6Kdd1wobivxV4yQs3p5bNNsBwZ9Y2ZbC1RCk81F9a5ogbjApaZ6EidEpr9rbKGDeafSW4SSBQLUx6MkEQP",
  "key3": "2mbpU3o8enrMpsooWwhVNi6so77YRYu6S8o6myjwpzbKNxH2vNbQ8ox947zSLm8nE5pSf9sJD1Ldktmw2dqXAjq2",
  "key4": "keqnUDTFN2sUKdfSaHfpQUrbFHdcEXKzsiFek5sui19jUccmqWwP9MJBkYL4uLbNVNpc1wN2UU6bp8pWBh9ww9X",
  "key5": "Qw43BVhVtwPnNdzRA9SwCFZdSHyjgqxn9fu4fS1eGU7yXNdC837t2kvpuvddLJfEL4C9ZcjnNhr1vGbYEFTH6rp",
  "key6": "2S5rrh1U8mEHS6zE5TmGh6a7ArNqNjLxXPkFz3SW29YQfx95wkJf6D6kqvCqA5ucXgFnevnm2d75nnGHQhnQRLw8",
  "key7": "4Zcc1obCgsDy8zDab7jR5qSPpbFQpgBYGtjh76PL8dXfy6t7uWLfLeBMcE6JdRGqEvG1o8jXgFj2kkkMLTNQULcr",
  "key8": "5siQ2Rrs9hHUS5RebZHEpXoCeNTZfeFGHiPMDNCW9FeyA9eiz21H9rar3JfoU3H9fzQp2D7KYJMSRTK8j4xKiT85",
  "key9": "256EUDLLPLHSnX9KKaT7qfxu4LaqCrMRwAW4Mo1gkUHW9vgnkQQxMNcMxm7usBbyY8M6XYg3Bd8VkRtouzH4uHDv",
  "key10": "321C4mEBfXLjhkhxHnV1rm921rj8uHj2rtwccgdeCPozNQi5Gc5BJVtnMrU1NCUT1XrvsqqKeayvFML4WuhJFJrU",
  "key11": "3WSDM3An4nnYvFtbETVa9MyvNpk3s7ajXHfvtYZnnB3EoYvwUpUFTRyH2TQKFdQYtguBAceXL8CAnpqp2tiQxMSy",
  "key12": "6UNcM1sHcBsDYd45kjPHWvH8vzKUABDBetdEaJmnAqSutpF3gdErXP8yvvGKDsaZmnybRQJCe4yvAruxr4yx1Hk",
  "key13": "2DbGo7mtRBb62wQFtoCLEZgCC69nCPjxxZ2mL98xTgub9gADUNfJBKr7NvwxuKiM746RdPH4v8v2Hrj5iP3rdzHM",
  "key14": "397qAhPrDCE7B1w3TwU9Uhfaw2cjWJUbWahRZ6pmtDQs7HCJnZQSivmyf1RoBDLvFk4Zf2Rct5cLTWr8QrrSKUg",
  "key15": "2Pt3ncFEJzuY71rXgfVSVHATWRh2B1H44d6WdEqqaFmpWUPg7uWaggj28nxZBT6bJEn45c986DvkgbLtJyDfmCxM",
  "key16": "3LVBM8ZEB3rTzPUsTxzAE2rQWNxaSPv2bripbwj6ydZfyv1XViiNDSfcy6sEEERZX34u3iu1jSTFaTq3FHQdUs9U",
  "key17": "2nfZH7325h5akz7hNV6TwSsjydqkM3tFVJYmyDqcaFnexBnuBDYPr5xD77Gx4hdQCJ6MmcLDXQ6M15BSZ9yAy7uU",
  "key18": "5pu6jZSUWABGaB5CsnXwikKEvXQqqhjorXBgYiEHixpNSwEj6CBtrC8xua7aHmJ3GQm4EHatvFXjrgCDkt7o6cYY",
  "key19": "291S193REKBx6c8hoEhWjfNGMD8nEpbZeX2qBRzYFX3DLWdZPusVBdc19Zdc4dHdJgaUxN7tKVGaUQDJBNyuJcro",
  "key20": "VcGa1uECWqbzwrGsiyvTtmhxHAQfZFqv8eh1YKDzGEy7wQNF2xC1Tc7HMyk2ZsY8CTPY1HEFXeQEVx5t5KjMTJi",
  "key21": "6R4uPi29mWDynkbYb6iMof5b3hmEsgdD6ZaMKFm2YeAc9xdu6QKzc5uFosdCyqoCWW4jQu7PDuu1djb6tvbA7du",
  "key22": "2gqMLgiAFSh2y1pqYSy49kBRK5ouf7mMXBBfsTYWuj2jJvMtZCdkcnknBE4V4ko5WKyvHcTWzR42bTHU8ecsQ2Yj",
  "key23": "3DUftvofhgfXKZUgEz5vZb3CBUvthXHtFJpgH1PMBqDwR9PRvJY84DcG5SqCmamGNgTKwxNDpaPf6zrdGx5dQCmG",
  "key24": "3J7XZuLgLKF3DkXVLybv3KUnDdmHDYc6uSimH7LcJ2VFQXXV4HstdcxmSQTkGFiTo9U3FAfZxTDWYqeLd9S5CLzH",
  "key25": "3Ez2R1F9VTUrpeFHfkHh4a6yq6FHEkMZzKz4RBNjbwPhF8Kz3PY6sEzGm4G8EDuTQau9nrJGPY156ThPKmmsXkyK",
  "key26": "ZeXoJTrMFJzcj9kc5CmxM9TTyfBVDsRpnG85Vwm6icdWkrdSM51NebFLUNsQswHy1WEEy1uY5LbybyQpysVWpwj",
  "key27": "593L8exzUNMZYN9eRcPVd5CQe5wbJZKAjx1HUpNXLtG2vVWCqyxrtA1PyZfYdLi4whxExphfCSxMU7P6Lx9Zqqkg",
  "key28": "ixNKpYJnxFuKCBuoZKo1zdPfYFaiEeedPNgeRo2aMNnVcbWxka8HkB9iTSuWoMDtryr9bFTnRDadQLARfEdREZa",
  "key29": "3nLfz3gECB1NcXbdFXW8Pntaq2wCy8bxGsM39XpusKAxDzPtA28yxRi89EPG3myAQjMDP4iKT8y5WRWvXzJiLaAe",
  "key30": "3vAXQZv2wiLXtUc3GHT5DPdeWndsADxo3sKmkCCB3Q3HU8KPFhB7XV5AtAD9gZpc7hv8ti7NWny14Y64CfU79LCM",
  "key31": "2Tx4uR4qGx6ViENqtgJcfuFGQ3ReVQDC4Uz89gZgzD7V77iP1ML6jGfqoTaLFx1BmjAwNc6Bhg5FPXKJKkiuV6uT"
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
