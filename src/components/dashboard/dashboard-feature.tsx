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
    "5FcYWqFvC5KyZ31Q1pW4e9QSgtkVskJpFCRrxLSVvH6jTQT7KTjrf9A98qcC7bdZvC5fgEDLaTY6b8EaVvWeMRbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1G6yCoQLAAUThb3Yss8WvisEVjX53X1wPGRoabvA6eBrE2RUE6Gmqp7df7U4TTnQA6wkmqVpiWZ3EWtAZvKMjkH",
  "key1": "3r1EifhdZebnunpAH88wWVh2TCQ8a6BpFXKaVLaT1A3PNYP26KRS6BzsWh32SbXUDGoYkZFHoFswVZp7tFWZ7Vk8",
  "key2": "2mUn1MVXKq8qfnLtmUiRhM9zvSrv9By5q1QFYRmCu77bdTxNP31C8QAhSGjs7xfnR2r3Ay1UTHS4PJLhmnBpNQiN",
  "key3": "3inDK7ZABuQSjSAJFT8FtCZX3UMBsGkCi1t1yUmu7RWzAvER7PGvJPTSC8DrZyqkGHam2wvf1Tc1igWfyUjoqeiD",
  "key4": "4xx3tNxmZiZSQ4CFT3MiEAaDJRVZMC3CstnjaX2kDF5dkywXU5vRyFdT8fP8qBt3dBZcUuWPNtyvRGZqCro9ajux",
  "key5": "2bKQ2GWSiwzw6X64zpy7WMZfHMscFdwt24JFCrgJrWod65Lt2o3DLRWfW9qwQAQcvrPrAD9kAUn288wWchd5r9vC",
  "key6": "4ZEXEr2oQ7NgcqY4npXKsVsRkazqDVmoso1yEsLuUYNnRcmMAFLhS8ccWUXKFze5oxqNE452kjuAWvzZMcAphDjR",
  "key7": "5ikkEjhW673AKzmjqhB3nMkHtTBQEAQ42Z76f32oR2F7wEke8tgdKFhvFeaEkzYs66ERUAASHaXmb1anAguzwuuc",
  "key8": "NcFALk6nps34PPHfQXyvRxeZcW6Ebat4xC1L5eWxsUWN1RyTwzKFmLVXEheuMQLXD3XB6TAxKXAqK8YWpiR9Hfh",
  "key9": "2FKLcwpVGTT4F8ujzovRZb2qedhJxkMscTqftqcdQ3Zv8RuqWG3tsdT3GL2KptZwjFn7ZpErw6KtZz4mPLLtar3d",
  "key10": "4gzHjKP6zTVfPzMZJiN3RHjrwBmfppUz1MJsHKphTmD9NPphWYSwtqyTQKHVFq1ContKzCQS2SYg7aik3eNzh3uC",
  "key11": "5Wo5HhqygXmL7UKxMgaszSwhXpPYuBLDR2CAABCjsYnQJt8YqeRdp5u1TZVwY4gk3Ztej2aCZYGHWWVQmXuSuTPm",
  "key12": "3B1Ky9zo66AkR6s6YfdfWigto5RZ7SqzELKGXy2GZUZvFuR4ZniQXWq74pA3MXqvThp7TwoTASEFyGBwF7urMmpr",
  "key13": "3pzhNfECRnuPXPXUiw6k4btjUst754pmG6kuPVRWGQB7Z3XMZbFLhFdkV2yirVM1L3KVA6ZmK7DXkgMNBp4asbwV",
  "key14": "3Qrt4BvnYBQM388UKxLZ8ZcdYTVzNJEtb26QJpni3k5UyymnhEoSeLRhfUXiAiNMUM9PjaitUaU9fu5RgMcprx6L",
  "key15": "5VyCsEmbq9EFpyhdVdHNYjWMHxZgcDFxVqELBex3ff8Jevcp1bzJgqKB7381BVpC1LiqtHPT54SwTDxV5Y7EZZfL",
  "key16": "67DhkdWZ6BkKTRoDXPTE2Whrzt3Zrj2Y8A8HfhyyBGq4EFsuKadAux7aytLqbpuyqAQdXEEzKJtyEhmaFQvUf4he",
  "key17": "PUnek1oVbZRQNwR7CNxR5kJv7yLojDz49Lze2BEJXQqzrAJajYTJuVp8fgXjXRA3hAjjZ7EkerWUCyDYdDU9AWK",
  "key18": "65JkWbw368czQHr2EHc5RG9xVNWJfr27UVZsF7zvP8YQawcp4jhtjnsn62DYrpMq5rjCoA6jyz32k7xSmgixycmm",
  "key19": "2q7NooDKuAHmZ8uKXpGr77LYoHWRGM1kbnYX5dgH3fewb9SFw1TAd832dY7mog18Tr6b9wEr8Kqwu9gPCqGG59Ue",
  "key20": "3RvokWp3zCbfiHEMgFqRQWa6ZTZdYtgpkxKiDiwTAGrSdBMghsDnq9iCLNhf5yKmkHsJ8ys6uFeadfUB6WYEetnL",
  "key21": "hQ23Hsrfo1CJCQfaYGZTXuxhdPK393teTpFn5MYKWCFG13yWSGmYtABKCwPjDakKj8PJaXjwq6y554nqCbVrB69",
  "key22": "5KEodYeGyrk1PbFBg3qb6AhCNa5ACWaxDp5zxjJiAofFVdCS54C1Ja4GueNonbezvsP5CKBqmk4Turjy23MUe2Z9",
  "key23": "5pTjFhNbc58MgpiiAjpxUDev1HgW1Hf68GR5ee1QE4NRLdGQdXTLWsTBD4YLr3xoQPWAtTjrjG9wnGeZrr4SgwSY",
  "key24": "eVXXgBt5D9b1HadWjpXYA5vvHwfQF3SVXkxDySquUj3UiDAbapEZSYG1BtiLqCFxG9SwNP46D6U2C2sT7YiLbLu",
  "key25": "3yUs45GAbgNjbdscCpBNUrnqpAmczX8bD1h92MH2oGcbSV7jdt3iZ3pYPRkybe5AkNSYcAn2XtYHjH5J5MaHzxHs",
  "key26": "22nDb1pXz6gjtC5kvqER7yDrPiGoKLEgKSFNyNzj3HvMCh7MjCxJ79b31VLbN7TBhzgT6J24goEbKkmbyDuJKUin",
  "key27": "59NxXMEetyf9vM1KNkZSbFakawE5WCEMkK9Dh3agbxt3koUAhCMykZ9crfwhopCFhTZo5c6GbNv2CMHZjaV6sRuq",
  "key28": "2w4hyFArVUjRjA2uqyDuAn1XLdJN9qKcU5d3o4d8Xrvbh71E1PntqveD2HPia4LbqURgW4G1CpT4zBGMzSwxYYh9",
  "key29": "YC76EGuWqW1FTTRo4hdvzgc6tyAWV45sCPrPXoDxkMFg6SUH157pfYDM4eHZjHDBwny1u8t9hH6zuiA93up1ZAu",
  "key30": "4gXweCakk5gp55kPTZDAVr1deSUvKhSCMjTrDv4sWxcEtJz3dUeh7XaTUC3najjgCWnNB8yeftT3CNVNUHuSfALM",
  "key31": "MHXWEzjdcXTWKieiqLwMCptz6BqoC4nAxDMPn5XWUPU23jt8rC3tLbcGWu4jUwXuucRfT3yGM5sjLFrjwpMa3mt",
  "key32": "3AJZ8Po6sRD6pDunirzgxcpW48EXouZ4KRB7s54cUF1q3JzUbo1MUQjYjzQmXdmF1io8Z4GEq6SZVaCqJVqRyMGq",
  "key33": "4Zk8EtfxuGxa6a5TtG2uDMWEVZ65J1bQaMys4XRQJfTGqGPhMEhW5rZbq2nggFmHyS6ZkiYKu5mR4tMS2nTyPtep",
  "key34": "2E7UHnj4stKY1HABFoJVzy35czz8AmM5Wx99Ggccq2MmLmedG8zhGV6z1HYAues6BGu6Y9VKQaosoikWyhbNE1V5",
  "key35": "3X9fR38nZgthQ2PieWroQ3rVYGf1UXWNfXa8PKfodKHSuNns8W97M6si2fHLxYpc3f5Rk3BxgfLKmhZGDn9WdFeC",
  "key36": "3Dpz5dnw9jf1twL3uvpi18h2Tg2Mej4oGqNtSKAcw1Cc5sxcweKoJXVTcywpvvwiX32J73yJWTe2erKzySuCZaWC",
  "key37": "ua6Jof2b6ntdejXWVDt1xAkZrmVLEmPcEmP18RkDDcoLcNkN4hSi369Z3BnBiB5YbSTSjz9c6CBRiAzWZQ2KTBs",
  "key38": "2DKYzE8t2GnGfLkpUyUnKz5tepLWgbskR52VDzba7tNyggh3urTQeMtgxkpjKgU8bxV9Nc8kSmXkCv71JLr96eNV",
  "key39": "2kW8ZMP5cVNouxYcF9Xjq5PXYWFaKgJ5ExYeBN4Km54cvUuyjhK4JpNUiKzw5LesMu2PPbkiMuxfQ9R6yr9jRZCC"
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
