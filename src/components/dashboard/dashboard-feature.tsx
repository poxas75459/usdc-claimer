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
    "4YmK2s63A5RGT3ja8xowN1LSJyhoqeSyT4i8ALWPLc1jfgZB1qaUTNyGMHCJ25dckaa5BWd7ukvLWK9F8d8ydBt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9wgr8q4FHXYsjW66FpT1hyemMdDVhH37J3K9rmDJYw6XZSpHK7NqCM9574WU2FPfG9SEqcDKg6queMYUrgqZjZY",
  "key1": "WwGR5hP5TYektEusUL2hJ6Uj9zc4G16cAiXLFUzhgL7GHAFWtVKDptm4icj8MHvcvpNjTeXf7hLcsdqMGVXqBsf",
  "key2": "5JGMzdHSQ6fUSQbkd5wasfbRmF61973AiW1dyJEjTGActDRCs4z6bbgy9g6JWQWZN7bFVFf2UV2TppfiB3zQqheN",
  "key3": "61dWVRt55Fcig3tiBUeCDqDZqRx7ErJqKuVC4PyAb9rvob5NHjx8fJPDDxuuuYVdiQ4UCQD2PP2Mo9CnDACMUgGJ",
  "key4": "52C2mmP4p4v6FMKFccCQqE68hNH4T4MfARqqzKhZY5rMHWdeYhZXmXeb9pcyeuRmV8BCXQsm15LYjJ6JxVGDdeL2",
  "key5": "3aFtsWV4ddX2iFVdcoK2QHepnjCH8NQD182PoEcxNnVhSqm4J7g2MxmVNRkNsEMptvqJcHrjJQPWiX6cKY4Jqq48",
  "key6": "38MSTgvi7Ut16zht4Bd72JDHpjpCbPJ2C17hf87WfEEhxj58FaNicFfEvQkq33BfjdtpWKx5DVbSptBLTF6Q3q6N",
  "key7": "BAA4P8Z5bDTTaANDhwwLTc8KPdMCZGhJmu7BmvQLMLetAFJKZjJBFtBnCXA6smieYZsPGhv5nC1G7vEo5zbQwxn",
  "key8": "2a7uecbaQqimLwnM2ToL9Ckau4U8kjQNS7w1BSpHhvLeJUWaTNCZ8BphZvaqKrdWj5Edd5H5Gku8UiTNtu1RkrLV",
  "key9": "42tMQpbJBPG8qEsneafuCTSZSDZLyM2EWQqrPsDJvjbdxMToA3pnKLz2wfGmUSWUMA6yLLkGDQJQyVrLWiGZSBJt",
  "key10": "2bf7heeKkRUuLf1EMhWnwh4zCZTZasT37tpJDwTFYethwqD2qTM5L3VBCMQzUBYjU99BFb4HBDXqbQVobGNsBEnm",
  "key11": "5TsjCfwbe9tKERtGF6X9dbgit8dNgLknq9HJRmuLdFDRUBhVY2GMQCvuPRtHN5bMa8geGYBD9JPwejCscDsnRhHu",
  "key12": "2ujuDiV9a9sdFmmGxV9Kq9ZTzvoo1HSg7k2VSNNaB5ucvnfaNNApqnuDWgaWooVGtWwT7XftKP53XFFSXngtpJ8w",
  "key13": "4vxiPBVxourQXug4nDgRwLRJQSB1u8afeK6oY8p7CpAqTqMKEd75KtiYuL6K5DNiJiv4UagGSHiT5t5tBHE1rTmV",
  "key14": "QExtVxF4ZLudbxs1aCMMHvsS9TTGE1GGYrWw9KyqxMvxCL7ckP3QFqzYkBoauEgFoQHb6aUZ8Zuq2aqfg1ejc5b",
  "key15": "4T6XSfjG7FaHXQee2XH6wgcUNqQTF5BTaQhkiz2k6GdB1dboKT86s8ErBKtdBrjG3T8yrUxNJ3kS9X4mE1n2tEbV",
  "key16": "2tqheTB8iCLKmiiq8c1n5YQB73UjaqoaMnA2JpYf2Xh6UhCANC8bXnPR6TDbRhetJWec4nEBgbvszfCLu5h49btA",
  "key17": "5tzSXjjCepa7jNfGw8NrrzXRqMxL3AzVPM8KkQmk24G6uhfDHaHZVL2h7hgh6qvRT2wCoaEpDnwpdtJY5d6iq51N",
  "key18": "ZFiRTnD2Zubhn5LPB6oWX8DUKjZJTBeE1GyXS5EKuSuAbM5VVAiy5heZp7WnU6ZoR13LHA3hbBMw6WCvETKv5U6",
  "key19": "3U8H8MjgGC2ynWmug2bL7iC7MJjmbbyrc8bmvvyZk3XbyaoMBkKcC7aECTfvNARKuUPLdUBTtKH4uyLTGxoJnead",
  "key20": "2q6RLWze3d25oW8rw282VRnaiZGUjVSNz6givPdBjSui7RRFFWLu6an4EiBj5fpwsZMCQGpBeuo5XreJDR6ezKzs",
  "key21": "3o2wAC8dn3QkhYjXJk6Xrc8oKmqvHQijwppeAGZzViXnfaDDUkodmGPbyA4T3dyBqfRwm2DWFSxA5rRPRoZcVHC9",
  "key22": "4aLGyo9BSSJ8fJ7fVm5B2fxBK5xRZTyPzRsNeSLtd6DYAafoDoKwztBpPF9MeZrNY2qDQ42nytzxEpXxFyA7thEr",
  "key23": "218WuttrKC4Gj9GZQM56zVNerCBWHhzsrif7wzPhZGH8A7ALZfmz4nCgcQat9P7MZuCrc3oory9LUV9dej3juwyr",
  "key24": "4ZiVaN3JtseAnW1Aw3uK4PjZyY6UFkr8rCzDUWEFm5Zs2ibqqDTTbeEbFUC3doQ7Ng6mJmvm4LtG9JJAvybQmUHo",
  "key25": "oEgS5r9gaeXDiYNiEUXDuBXLPRbmH4TWCpS7fjoJbFCxGgp3sYmWkHrmVpbfRDnsZk1BDsKraA1bRhPj5vfQrBd",
  "key26": "5iwGp91sTiNvqVEuvxbkXpL7SZHTbc2qbmE4bg4AqKe5EJnPB43aSTPJGnyV9c47qQQBPnCJH2UvkSGnhJZ3UGpX",
  "key27": "h8Q9ENwrt9mXE8GQhfBS7G5fTFxKg3aDEYXM3CuGJXspNBWKRWD2FXVtBwUguFGJ4x93pxzBrTZi7innvr9xmdR",
  "key28": "3yUKHzALWFTUW81cDLUE4RhcR3GXQrfq8QQReGzGVbPNtzwSnWdPzoSWsjiGnAozNEa6at46xy4BCjTjzbui1How"
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
