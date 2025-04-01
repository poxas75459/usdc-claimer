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
    "3nmTan2UwnFwL1f7UNEfxgFc4DYjhu6BG4tNzri5mvjrkRcZk1GDsEqhXfDoAtHKbww8F5UwgTXVummdAVvY4XUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LS74ga99UnGCqMHhNzvL3HL62abEv3d5HCzY8UTLHEgVkwWgcci2vtaSr5s5119tj1yWsKPpwa1yXvbuMbCwqK8",
  "key1": "hxBGunVNTFuTJHnNWLXgSna6mFqKnkQBCLe3rxvqpWti83i9hsohG9nUZmk1L6xTTKSpzMeKDkmZSXYLvCzf2mA",
  "key2": "3YKs6DbGnKRA2LjrPt4xNBh5ZrxaAw9C5oUdPr9CDJZAzUiTWdbGsM9QyEVs6MsCtPxBg3SzLfx4ukgwV4tXQkjU",
  "key3": "5kHWAUw5iSUC6R9CRN5aA3EV6srCL1VFNL7TEpwXV3uoV2qHjp2jTPvhtyuTBsqXmEENK56caKV87Ddmbknv85c9",
  "key4": "AMGV3ScyEmoeit4hfq74JMq79KJZTqVpZTnM5DFdsD315t9BYy4si4eVkCQd4sEracH69w74remHRiUJ69Eu7Wn",
  "key5": "3N1N6JBu4KQadE928G4icm44WQrFJQ2u2KGTUCUDMuKHXJWQNvhauawehEtNbbAo5VecxAJQzu1H37Nc9mrUT36S",
  "key6": "tA5XMXRFJhrgf283sCdTti4QzDVggD316b7CeQnvbbDPepN2bWRjwVYMGCopN7aLcgQf4QDhyNCeLwDemnp8JRQ",
  "key7": "31jqpXgBz8hFDcxgGYzgGGLWkZEC7CDfetwAj2ava8oWJnkpPMWvpCLuT6ms2haeeB5SHvJT7wrXfF1Dwzy7zjgm",
  "key8": "viUzhJ4z7RyZxdicBAweKXENKmMs4PwHBgM77S9CyNUfDJwjH6FjoaC35MZwoCuH4yqYsM7rBtn4bcnCag9PusY",
  "key9": "4rjGKhDC6dUPqxL5pEbCeq5mDeFrjZxFeWa6YhvhNJjaWjnpgcFhNR1mcWCxgYQ8BQueRNrKGWGqpf6TKSnDJiNy",
  "key10": "5nQuMN67gAj1XkeAnZ7H6zJbYP9yZvW1mxCa1UAJLG2T9J5qjFPjoWF4cxM9MK3EPmn5ypVb7DgetY98AWFENHve",
  "key11": "3mbyYDHxCCovou4rf9KHAMquVCeJbbbxp5mzbUmf3kNmDYmrd7Wo9cvV6k4EbLhMTGkSH7Y5LU2aThJxBZYcPexn",
  "key12": "4vTbA8TU99T256zYa1RUnU5uHvBMuMsozqBXE9HEsT74Ewpj8q59fZVYwEgiGGpmYS5YzWdRqTEjCAJ17UHNteNb",
  "key13": "554ERDdjuKA2o7Mfy51zNbBu5aB98GeHqRmQdzmyqYqPaJiWCx42rSptcL112gEz85L816rT7GqNMRwjtnfP2TQT",
  "key14": "2fVYzqmnA6qKWzbFu1aAHZUTBvitPRcFknRjmfbpL17PZwuRmbWGa4e2Xad1DX9CGLHDYrG8a1FZLeh3MAdKN433",
  "key15": "5ZSYGRM3s9XhgkiFRN3Bv32BpyRyP58F2JsXBhasjM9ozJ97kPgnS6cd6QGEkMroLgGKacpTuNb2UA4jVjYvNjN9",
  "key16": "4GMFAhuZZDdMcnE1GWk6XQqZN5sdzFVPtAih5eADXtWsBdwfXV4jPvCezZDeV8DuAXrNaTmtN9DfAYZ7RipCQ81m",
  "key17": "3dH9KwnixMvukCGf45UYcEuiJHWrN2btbP8db9v6PvhG2AFbj3dJerFS5Ruow5mREjPbQqXgxKpDMh5gtkVf8L9x",
  "key18": "4WveozPqvB6qPe9mThz81AqeNDyveuX2nRkSpPucXHdZatm71a2fno6oEyyoLiVieZa9rumcGQLUWbZzkZL3eG9d",
  "key19": "2zeS4STtrYDenJbGXr5SD8653D1d62Wj4fpkzSzg3znaoskKHfAk9hSYCH1dhQYfSYx8PECMEmhkGgUEqJWeiK1z",
  "key20": "5Jb1Zta5omFYwXSF6AygNekfMjrkGpBbF5qMvjfhWgcTdFTBekWynFWGRm2v98NF6ox7EX4r3aLJeTHmjnMozmb",
  "key21": "5aWXpmmHrUzaUSD2wFHG9Pqhs5Y2msiwKEGxykpjE8JhFpCPhVqPtLc1ke1oAugkVbY4quAd1x8SqWiaTjr2A5FH",
  "key22": "51qVeszWpKRn3Gr8Qpuzg51WLVzH6TZMvY9de21eP61yt9tczoVgDbkyZMj647WVMZkFhAbfeyBtSyCju8hM1SV8",
  "key23": "4WsZURmqF51cLPjtWTBcBtC8Uiguw2acs3CMkmFCwPDDtmzoZbLvYUfZvqGVt4mkMm5qSQCSg6raaLPYPQcgoNg9",
  "key24": "63tM25NvZQQDhnr647HkAUw4kyYUW6MyZ61giXtRbmBuVEJCpCmdh7HrKNoLePCZFWP3Qbnn3QjYNK9jk9qiXD9G",
  "key25": "4hM5txyJGik7MsQFyKomS77dn8hfyJNMp9PKz5pv6SNUwUPEEimnPUD5eMTGfmzVjKjEn5ZPWQvhQjLDVnYZVceH",
  "key26": "3HNVtAZYPt6nA7ChSuCwf7AUBndGPrCHt7p573aAuwn8Pxsj4MULrnzTPnwx1UMgwNgw3k7GoyR3xsSpT6PKrQUE",
  "key27": "5h3pdA9bH34bUziDr9A6Yti18HaaAzSY5vF2ueSiaY828GxD3FUxJ3UT2V4SkLY8XatvUHRkRbUnDa9DuFHNEPJz",
  "key28": "2nXebC7Um3tvSWJ7mhqmtxzYVhYHnKM8RWnpm8KTEttsHUwJLR8xrRmKU6SXU6UAzQzZmvLCedbPBZbmcx9NX64V",
  "key29": "61gUXC5exxqL5DrFU8BjSm15frnoXA2aLHCesQvYwe2KJgqJD6VsSsQpbvFRX4YbscjqpjmSsEMzc218dqLaNqkE",
  "key30": "3MLQLF7JTh7tVwgFMj65Uzu58ehAh8izBTHkRY6yzSndyJbgTSUN6EDCoe6k6XgRxQ23LPs8efgTH9ztLVLs9aJj",
  "key31": "4dmy1eV3EJjZQm4fZcWSNrawEzaDKChENVPSBksCpbspgReVBbM3BZosUiW6W2E11AsFFBkGdt7gmYTFqNpyz4Fx",
  "key32": "LosdDQ3HKfgoCmyYswiNqujDpq4LPTLMQgGhshUtUSw83Yjvut1LxtwoxQMLDbKbSZ94RMJq8phhrJ4AG6ygVaW",
  "key33": "2kJWeWNSYxTTnnFZEPJzUrv62gtQKMFmoUK58LqHYUzhNZEuSHM56gCkt1iRbQ9wFrqquYAZRUFGM7D8jfoh27t5",
  "key34": "5wZTptXEypyJHwbcj4LMPPhLakYDBYNyyrjJHP5XYYMpH5j2ZdRQbnsvvBNX8zpZ1gcd1gLosEaH3ASfY3QnTknY",
  "key35": "3PZ1AF8V9w9Uyhtx89ksJYqEBw7f5ey23d8qcjM7QtCueQTHyZECAWzETpJzQ1xgZvDsGThFmj7MEfoiinidjDVP",
  "key36": "5cUm9vr8qZ3XSDJePVWqYHhpJYsAqTtrjyf7dv1h3fX1Ep1m8jEb86eX6749yv9wWGVBGgxJPd4grZMWHrdoPeNp",
  "key37": "5ahEfeA33aUwYKaxV1v7jnoQmk2FDEMkEVv2kmJvbJnQdzCMbMFPAtEfLVqdr2uUqLMQTyp9HQFLKRttzzpw4Vs1"
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
