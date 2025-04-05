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
    "249vvV5CFv5H2rWFPjBUdHiqu7gXe3YnnANriYcWyATrV9BVKitsEVLZpL25ZExysETtxbFirr1Pu27iMAAX6gT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b88LA7JCroCG6ZYKiu5GXNREKs469iDgadtq921QJTEK3Ku47oBxNSeu6K8uSZ3Lfjq1CAUpeALQ1cEVgeQkG8A",
  "key1": "2EeHreDVoACTNn6YrFGXvpDpZHQKEfLfFgEDGefo36YnvwgYPaKrhu7keR8rJk9FzaK9V8qtTjEcPj7tSmaSeb79",
  "key2": "Cg3WbL2AmePMaCmmhjfhMzZmsXFm3zS9JqMW2UnTKqmn28mhR9bCPfvZ12sxrczvB6dq6WU3FbeLHZrt6PucWmK",
  "key3": "5Vq3dkXXZBxR9eiieFs1r64sMTipzfB9ZUWAixkLyTENsd6uE1rP2HqHj3gNXZnvNNMaMi57Hr7yk4FAkgoKXnCW",
  "key4": "27sdHN9kyoh91Ffs9XFTDcasKwvEVznQY9ViPKE4iJ3gxr5wwfhRSMZVwQVN33DWuQGy8JzsbpkSF9CRadirhfLL",
  "key5": "4GMoX7319TLGara3nHTGu6nW7oTzCxkHnP3P1hJPJ29wwzNX1bHEirXAHjykKqAyp9tMMd2N2uv5ptpw2cgGSk8X",
  "key6": "617WZEQtcueLhh8RRJXDQyry2VUAAiYBjpT3VhD5u6BPu7qViUFRkGQiYWH1iYWxco3dZofbFAAG1GobPsdN69Ni",
  "key7": "2jq6xB3Wt4Caei3JhdBKiF8CL3EKWn7Bi8QsFwM3HSjhgRhwdyBwN4nxrEims7pzao1i944Ek6LGj4FMp5gbwaVE",
  "key8": "3fc9AVUgbrkbzKsyRFQAbQHsqGHFFqE9vzS8Mp3FUdL7aLkKTDtYeAVM2V8429js35uxt37Y88i4Ko35zk8qRbJC",
  "key9": "5ZTYZrAsYUCSBgZCYBw1xdKASBGGvhagEvjTTvP9qCYu22CULJ56UcnUBJxNq5pZgGVBZ6hd3ATjrNZ14MVcutYT",
  "key10": "5Cn6GW3gJ9LR4oNnCN7fBEwzeR9iXcTuJ6C5ot4PAykNA7u9pZEsHRAXN822L7PLT6rfmQCaQYpHEGkddmRNM6XL",
  "key11": "2AqYCMe75bJsdfTrYuyZYwKhdPkq5mAxcc8sNKRcWrum8sPsBKkMaL6cYiuSb2tXVnoN4yo9THe2qtFuna1YC1ec",
  "key12": "5zptzEruesfY9mUL3DBfgeexw7C7dZ6UxdLfgHt3QgBoL9SD2d9Rv5bH7C1hxQLZd5pR4ABGH1x7Ga6NKJESwGvW",
  "key13": "5tuZkNvHVJ3zMR9M1CeNv1c4UfnmiAF8JVb5Xj5YRkB2VBEv5sCj2HKqtfuiZa7FQkL8h89br1bcNYadvuLCNxeS",
  "key14": "4iSeuZhPGwbVA246DwhcoM8S6FkfGq9FwJVeMdTyud7AVmQqq55c8szcP2tnmMwztTMRnvwRcBuPD6m6JRaZvFrb",
  "key15": "juUMjuf7E7K419XmNG1smmhDyaKiRfRDDjFjKX1WgZDC7U7W4dip2S5KgNFbiEW8CF6H9rQyEHL4dKza3XWphNm",
  "key16": "2W9XjBh1nxBhcEUPEMCZQXdv8KeWBQpeeJo9wRHwPHD1eBu2r9hHgGggcM39v39fFqQoxGKzVHZFhmcpQV2hsTXJ",
  "key17": "2d9VcoZgLRtdYg5U8ncmowSvvVeF9G8KqG8M9JVsri2RYbqgUJyN93VWgxP5LvtBwFwbRnoUPBDsTxhykQytZptK",
  "key18": "2q8LScLCkMJvRppvjNrEgsL1ebTXoajgE7MVFPEBQZVJzuZ6v1KDoFj7x7xMWEaBA2CR5RiFQHMTK1wykdX3YgKa",
  "key19": "nw8QnmnWp4kBrMa9D819o2fEa6BjgkkzyGqfcXH2m3v7nezfY5VD5aR6WeFyC8TE9W7fSJ4ao3nHzzwTNaScpai",
  "key20": "2UxXDeTmuuDDyk1nhQ3jXAqoKQStUqjGYokEpKWvRYY11mhJbNVNde6SxeCT2XzsDh7gfGaP8qqFKzjU3rCWKni2",
  "key21": "3ABXNZow6RceUo7UWpGn7etgVMFxn3CHLHbTjTD7ZZjducYQ92puMfimKhfvauaHEHp1ijJWf56NJ74Q4gCmqAS6",
  "key22": "3aHH6QtfBaXDVQ4PKRwMNmMoPsQw5tKBQ65bhE5VZaTmUt7f8FmAfGi6mfcjQJPRDpWSL5CFZyJ1Cq9ERHJXH1NF",
  "key23": "5eNk6vJ3ApwAUinoroTzJuB6dhpJE6HAaA4zstHxtFKyheofXT3Hirm6gXZbTAiBpvMyUJpq29dxsUvUthfUsqnE",
  "key24": "4xKr1nPGqfVMHTexM9VMmxLxTY7MkDMz86GuqeowKXJW7TvKuyBiswjRUxF6TFRVNVn4TdJsHc2WV2f6QX63d7fF",
  "key25": "4DSNNrWvUoHSwxhb27L1fRYsNsMqJbEAuSUivaJHRuayJAbKRdgU6ofvzXAnEumSoCkZjqAAWNsJakLrGjxYacdd",
  "key26": "5JGDMpo1nxRCzwKq9y5yLB5XTPZDNC9jw8nxhKSt7ZAJyLeGkzyYLgzKB5DHZ77zHhBSz8cpmNRpUDzPvVNRwfa9",
  "key27": "55yN87bksKmhqZPPrrrTdWy36w1G7Qf7Sb2yMUBiVLfbrar4a1uNVaSEReTG4gkxJx6r4HA6LzMFSwLu7gfom9LU",
  "key28": "2pvxMoKJpZCS4rHzFxLwLHerT3CwWmWkksVqFnhqacRGjejvey8jgwKZ2oFW6pbowiTXw9WJ84UR18zDvMRwDHVL",
  "key29": "4QXx6WNrYPmHwSfmjUJhaDUkZnyLCP9BHz8Q3iLtirQcuBK7CqpbWK3UvPVHPiU2Ms2KcMzydjuRxerDYNqkNdny",
  "key30": "2zpAezpywaMjSXGfvTFWDjCRDuaT8Cp19X2PvuMrrSBK8zjHwCKa21soBq3fRjMyr1EnzRNSL1xFckKKVZ3SRwfg",
  "key31": "xN6jgcyuGKiQu7C6kfjSGFAL61uD8zpFG5FHGnwpQAaGJGACM4nTmShNEpXTqicKQ8MeCDdFPQVrPLQTCGCkaBy",
  "key32": "3r1TdGRLDkogdXHfjHJ2rcUrZ1Z74qSLrXPeNbzPRa7BH3UWsDkSVpjAgJAP7q68xB9a4mCSfCHY6iBjfgsfD6V7",
  "key33": "31ZLwvdbA4ugY8PdGvpjbRmUmQwD1dLJnw6ybjN9LM16CLy8FeF1ZTCdY6ortEYNmjoQSMsvEX95ZZy7mPavJinu",
  "key34": "35WVevsyxfEC5gLuppjPCinLVYSaMa3Z2P1D958HjLNNAB1pPRXzyN5yL8dVTQR8t8NZ6sqHVR3kPa1Vw41UBHr8",
  "key35": "33isMVFaZb4vEBMoKPZRZoW7MhVs3zPuMLnVpxA19wRoecYSy1ZZGrAsc8181pT9AM3cZYCk8my3pQtP9k6uwrG8",
  "key36": "4PprravYDuGAftYu38Ct9Up5ft5Vv1ApB7jwi85w1yQkvkWKwJmrP9mj4Q67rBrv1ocrooVEWwbEaHXSHL9EMjn7",
  "key37": "51mkh9N6jWY3ZjkxU1FZ6w4pjRj96HffNqVyv8hKAnx8zWchbRSxSEH318zshpjkXvTDiiESqweBfnHLXuDcStQh",
  "key38": "ESL8bzhtGfMs8xdqcqqb5zTFVaq9eB3beZi1j58AbZptKjuQmMk16RpBhdWVQjfNjAzMXR3aavGMYQaXmKkPyAH",
  "key39": "23Yp8r4AygGpkUY36KmmW1KYE73GGXa3wTZXhQbt4Hr1ziYX1CTVDagsYguQGHUZJ7mmZoPLE1ZH69jYzms4iVe9",
  "key40": "56cfjc8C2jwfA12dXycuFgdUYEBSiXBVzVnZveAVkZxfPkaGQ5ke71Wmu3CdauarufuqaJqGZRHLfeEaWWpdRv5b",
  "key41": "Fvhs8qQ58xjXUjHDULNgLFsjbsze1iLM9qhn26e4zfckL9axdhSb3SzQE24cqR7bVUVMoW8tKkS2zF3mu9Y5Lec",
  "key42": "5bVJ3XDzjbn66bjxQrXK2pZvM6YVhSyN3z4fWKtj5v5caRNBhRN5ZAo871jrrMShNwzG7euuTy2XLTdjeVCoPnFr",
  "key43": "5fLVhBtmMooQ2ti8qNdQnXna3ZzFWHMPa4cR2uXkEK7MqAYxG2CDBn7fSoMkP823iCxtWKcG1AhqvRUmifkdm4rv"
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
