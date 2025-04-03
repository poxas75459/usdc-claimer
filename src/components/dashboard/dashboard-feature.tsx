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
    "46VpTKsnAyWzMVbem4A5Kp8rYJfVs2wFdtE3rL5JazqKrnVoeus5nQx6BztLfe4QkoWtZ2CVc8vjQuKzEW4jGtuK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1E4GVi2xywrmNWPtWw7V4qryP3ZPcnMS3n67N1ordSzpgAf9XMmxo8b5zStBSbr8gGdWQSexpufJe2gYYjZMdvM",
  "key1": "4GbLbndnwwDBg68fzYpd6m9DT4jTq6aJG1wcjzHqxyiZQWBvE7yATUijD8TgD7BpYUBSorRwJkfm2sfki1cCqG18",
  "key2": "5AUpQqqezAWXDLBUQsZKyqPqLsRaTRex2U2G4uaFnitZuggM5qbHHGw2gXTNbsbTam73seBMP318i9NWwNCKFRew",
  "key3": "5tKy6ZKrW6tk89Ri5ApC6uRgKZvuPsZ2cVkf8p5DCD8VHwF8ZoKkUMT52hszZdnrDXH8ZPKx9Y7PAkX4rqaDeKx1",
  "key4": "12AA4z2Xym64mbqAHoR4mw1iXUSZHgQ5TDvUTK7MFJnbyCDvftoKxTwh6TXmg5ckUMbaK2p1MKUtjR6799C8u5qy",
  "key5": "SwYYomQNgZiETe3sEJ8RsCNn7qAhG7Qb2RJtBHHmuLGfJh3aiYUdD1D3BJuJHq3eZCrxSZohPko3UD7FmtxouBG",
  "key6": "5MERUxTS55ZU7LF4uWUZxLBPcyTMHYZybaUsb2qPvsLLyvHabbpkWfsWCxLEb1fa5Pzegx9mAyJhrvv4wBM3qxSP",
  "key7": "4g7tFJwchDQMmPy3nbFKVC9jdgsoJQsgaSqZwK47iPjrxEQbfx1sxsTY1d7uLhg77iyEjgPCmFSwDSp8zAM4kdxd",
  "key8": "2JW5bFp8rLyT6cDwGyvhikp84vudwY8yJQQP6qV4Dadgo74ZRHsZXgfGJhSve5Z67Li42TmEQE36z6J1qUGbVEJ9",
  "key9": "5bGwACANY9zZfQZEDQUf6oRjzebPu34NJbLLH9WHb96ad6uW39z12QmnR7tp5VTJu6UJh3UguMsxsRsjgg6pYST",
  "key10": "2sipTZHLtwyfGc3QkP8i3bU7ZSDvcAufrLVeL7QP82AjhZd7BTV8ftT8rUm7aR8mLu7HSEgRL5DT1MzDtNNpNAc7",
  "key11": "5Trk8gX6pHbRK3BVEH1visfjhftBUciQk6jBDmNGfAopNaC7bq17Cbq3LBXE5BWfn7EketPZC5QjNKHc4GLUoPxn",
  "key12": "2jxu9pgcZhouC2JckH6ZctiVdYiSEn3QJ2Wzbkc2FDdLbR7e5bduyDkeHzXJWrMc1FUqNhHpmJnNuzJXntjx4WmN",
  "key13": "ADoV8SzL8uNGBynYLGgn64hbaDYfRDiUkB7TxT7ap8jwwxK1SLGQstKd3W7BHKnjKwX81iJznzHU6QrqaPTcFQK",
  "key14": "2JjMdd61AiKu6Kp5QnzhMuPx4Lzjzmdo879YUt2Rk3AaquDJPqK9URemKcGkZ9cZRGKF1JVZhDvzimvAT1Zgdg7",
  "key15": "3maB3mnAXScWPnNdDtamMwGsWFV5BVmJT1Ubncm9S226q43P51XneT2RX3weW1wdceevn1Q1s73tYtFxjh3QprM4",
  "key16": "4KK7DaVAw2a4fqnAo9QCML22t6vs7hCrvvtPeM7NaV1KE6fxBBrpNKuWBzonL57qRwJfunzPPXGtLJRjhMpn7FiD",
  "key17": "2j7GAvs87BgjRLxLhXXjfN6gXp8pcuwurSdzaKmy4g7xFqRrxM6KASJxvZYSZ5JYpVFT8RikDnWkbkW3CN9tgz7j",
  "key18": "2984LXZ63WEUtopci5YvUtzgUJKfij43qZD4RLh2adnHPrAjarYZsf1SzL8boBn4qkXuj9G34AeoYDuDSWb6dmw6",
  "key19": "3kM9oax9xuoJtCrNuwRb7vaas7TLNJ8LUr5Ap4oqHQYvPZ8agpmvKoxLoG17KP284VE9yVu9Zpu3q3CzA9nBELpm",
  "key20": "2atSfr1Wsk1BKsmYMRrgHbzsHiXzxo8GAkuioCMZt2gudJb2BgW9KjnxYNJdBtbGgkQDBCydgWWu5Vhr97h8EshG",
  "key21": "4TLDnxVsry3ySd3oqUANK8uSaVV8RpFS91SFgMYXfLKLgJpNZj8WqBRUFHvm2woQsXXf912eKCba6AxjZvtVDohg",
  "key22": "3HBCZA2R9a7vKfhSKUeCFro11KMXxTect1gPXdXvwUj2LWgVCfm14pHHNxq8YhpYjYH9oeuaKMjmMPTNXDyCpxm6",
  "key23": "5PUvSb8QYKGNnrBFjd7yQ28VWTuKMrun6xZdYehJhU2jHjxLzswyjVhmDhdk713dzqbjEr5a4a1d25k5VtLvYnXt",
  "key24": "gzywkKT68DqRhFgzNbmAkjN18VSU2aSa8VUP1pEpv5CcaaeeMkvwhDxfWtJmw5PrBS2gr79zKFJdP98jW9XJwzf",
  "key25": "2hMG87jmQDdn5bRLQiq5SeioDQMSBEr751TGfghi7dv3dRA3QBywrtNpnfaUYW1R8RHo2UCng18LRRVSEbRQbbVF",
  "key26": "egHYD5DMEqeKjVNBxx16cZ54gDrgUSbgVbe3hsdXzaJQM4tyQdGZCouKCqUfwWPSxVubW9rpNqNv32RdXw4kpMR",
  "key27": "5ijhXN4XLuNfDsujHLZX85J7a4sDhQfvodwaPQ695W9uMV2vJyJcNxauH4sqEuBphudVrchgeFdwP2EDfnmPc64h",
  "key28": "3Q3Yr6uwmbmcqgXGLPQNPva85Rz4kFKzbD8iX38EZNM2reDxkqN55ADaqtp7WVquoHzWpmtvZyRhgzMvqtaV63v1",
  "key29": "2Musqpe21wqEFv6WdeL8tV3yfAgsSzcXrVRNnoEJV6t7RLm1o1zbLCjDWCqzhJEMC2hRow7Vpte9uzjQupmTakjX",
  "key30": "4kqfTHLDVtprmxV6KoxMxehjyKGpt9PvGh534Seo9fnNizxRWzrjFoeSjKQ8DWwp3ZhAUs8VbJKvonH97ribLMc9",
  "key31": "Sm1QJ2QgB88EkDAgSb7AnExtchp2BjUULtxTaxXKYTw34DPMcr7cv4WDhAxPAhm5JuQCU7ALR31nE7oq1fqi4YW",
  "key32": "4wjs3gPPLh7AnpV1G6Fc2YkPG16tCvyEQcfrHw4X46W6XKz16npgZ56bSZ51Tmgnvyn8dhW2rKqTLHE7ek7Zufym",
  "key33": "5wh6fiemNJ4Jbdn6sRWyeNEBuPmcgBJCTdkP5XEoVPMZRxVTcF31y4bDmNGoLhYgfCwxbZN2YBZyLfUcc4vFyaWP",
  "key34": "5z9znRrZg4umpsAe9PQbER1TacRwv5w5uQ6J3Zb1Zz4x6i5gyky88aHxtCLxD6sYYz7tkaXmXmrYwTVYNoZhqsdm",
  "key35": "4fWjigVBSWQQWRimNp435HTxUT4CyGyYYvTHb78fMaXiSaDdvESFUBByL8f37xWxoHhVMjN4v2qeqEK5H5adaGdS",
  "key36": "5UV4GUB1WPFPVJGz3cd99hALbq4vaYR99eK6aeG3oKHxAKizAqSe2recvXtuZc8V8yh9g5duXei5e7PJwptwcyLq",
  "key37": "4m257vadvuCZvjVqaTKiYkq6zQx8qcqNQKFjCwagAYS4cVEAumKXkjz47iYgEKzGQgHkwQkPpydvQHuCu8VUKwxW",
  "key38": "PsoZHi7QV5STAAyGDtWFxxqZFa4uTzBKAcXZycsRKtDd7UPHxnjknaN9wB4E3ecCbRAKUPpKBbNyPwFjTG2mGwQ",
  "key39": "bEfUrLib6Pv6JYgLxsQzmFmEL11z9x78MmXKSUnBg4hX4tj3w8kMJGmGVoK1tkuebqBn9dbe46GSbJmcf8wHBJA",
  "key40": "2b3NFhRQDB3eekhZDuxThbKqW6Y4GYj6K72PSwQ6V9qJnmxfbXUnXViBV9TpASRY1TmWFLNXLj2ueD3hEqKv374n"
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
