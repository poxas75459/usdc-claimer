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
    "2RDaqYY5Mq24AGqtByCVt6b22ecS1jwHHixNcGVLa1ruMzYy6TSEsJwRSJLhv5yZze41gHQS45Y1y9RJchBC5rmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DZsiPuv7iwVQorCm13EwpL8DzQyXCLByz86VK1gcHtPv4pmEorpr7AbCwuZdv5maEGKmKcXEwt1mbH9eLH96zUu",
  "key1": "5zGZpUQfotb3KZwGxKj6hoqbVU3sVFrSB5o9pguZFKQYhSUk6kaC5y7zD7AUy6QiBnLeY86czz6eCj9qGmMmCyN8",
  "key2": "4wrmi7vbJcxkLEpwGpqtZKFHf8LzrwEmihuLVPd8oXiCq16xTw8kNgi9bimx2vAqfcG1BMnh4iHMz5wbStDvWa5q",
  "key3": "4DXopSopPmscQrTnN1WzMwTq1znTxhedvzFyoseBThhNKK7k6gjwmBB8gHWQEkWMx7D4MgSvoPVXmoZZ6MBNCdtr",
  "key4": "5HvDHEEFUejMoxFB6D6QRNzE5yr7U9EMsMxsVrEv4bUYojCgBTyFPHNtdwui1oV67F5c21nEXQu4Hw1tgionD1re",
  "key5": "wyMwoKuZ7nmwrZ1CrdDRYFbVjR7LobuLw4AwnUmf3goi5pVsZmVRK6fU1nivbBKGQiQtXuxvgZ6nuVtGvQVi9c1",
  "key6": "2mcaZ2rgq5WM212soJRfHi3LNU9x4epJf6Ni2cheCbbj7WLdxLRV6rCErFG5EP1R4fcQ3Y7XhH35BEZJaN3sto69",
  "key7": "49KHEzkLnumFc1AmuYyAqPFpXLtJzQhCN3Q3BHrPGhWSnpAEMqhYdhMJ1YQtc9HfZ2HidyYEWdGaMsWQ5WN8V7uQ",
  "key8": "5c86AWVQH9zqF45Nu3KTvkLZgjAj6JzPHbuSLM8pRYytHYzvoVnfhaFZJoDroLx1pURUxPUryqM8cMjvBoiV9Kiy",
  "key9": "34NH2gWAB5NNt2sZhVKusfpgdC3imJc5VUdGTCF3dXJpnCnQRes7u9HXZnUoVx7ZMN5hL7zukGdSR4biBwGrPc4H",
  "key10": "2mYhToL9miLvs1FefEtZtNfsw8M2m3YRbJVE5qkp5X1mVD7nFLCPKQfz5aCciY1dgQuzYNRmpeb7hWQ35yPzyicv",
  "key11": "Qwqw7AB6SFZwPkMyR5oa6yJM7Sr9LfFoRFLeN4YUa7SPTezBFA4NfqNcwFKTjVBkjmDRQZVhnsrKMdfZgL42wTt",
  "key12": "4y4CwT4UB1dWcmUDo1nDN9V9suC8SVQZRrE5N4vqYtEFvvfzJVcG1s5dXvp5qZ7iqSZfFwdvciJXwvAstJ36F92u",
  "key13": "4svC5abVzJs3DTZw2PszT9BkSoRZ1vzkiikfHJiU1EhkGoeVhXA9K2JJsR2RxWzemHAH5TrTu9yvYfycsYfuLWki",
  "key14": "KaAazziv4BhA5NhTY7j6pxirNfFcttnCR9XWsPonW1HKN2DnEuekHmsEnXJeADWDZo2mkg3RUY8nGDmnAgr8qqJ",
  "key15": "5yzxpEJdaFDWNWUA99RZ4hiquEfidfSzyaMFBjWqTEhwGLwFri77sXnzu2jHeKX45hYBR4JVjfojGVaKTstr2M7t",
  "key16": "4sTZ8G1nW3QNE43FSeZ1gnSz25r5wi6mKg6ETpC73rZcsSn7s2M3tQWhKwsxYxE1Hez2guZvHeZQibVyW9ezmRiX",
  "key17": "4daASgbRXJ3amdJcp5vhjvM94JyZLVvfSssnpQtLNsmgnefw2sFkPFff2RVXCQi2Ms5r7au9FQR7Vq7qErUbiLVb",
  "key18": "AxTBoZ6ZXYAgw3tExWh3oqvhsTV7znhsFuRy7rUN6wt9GnGEHzVZAGvb3GkQ4PyqWdi69zYRNSeHxiDEvnVVYz2",
  "key19": "4myAqGNieh9pCfrdNuAv6qUT9qjk28WBP7Ebf9sVpiWkEbezN3N5tmQTdPJMSKFa2m1kXyBcQUicCMVrEPHe9bei",
  "key20": "2gK4XsJgQ6HEFkckmRKgeRSon8tou6EpDykxNf29GD7UWrxerz4SzJiRrcoUBS4Q8raNsQzTVFvptkAJdFUCrQTf",
  "key21": "tqEyC8gLQf574QaXut3oVAxpMaxpcWWWboMrkCqDWXkGL4wdSLKjLkjuT6gsspFj9E9EgB3GpQ5Shruez666kYZ",
  "key22": "2jznftJwnkm5CqiQ3jkbbJriWGS4aDmZqMnuQ35bHeYLgX2ij4ktv769u7fJWqE43iucNdMWcwFc5XRygNS8c8yn",
  "key23": "4NKaW77afMhZT87kc7qRj44jtVWySuLQ3H6bf4JayHYBRXU48QGnp3x7WLfTo8bLotC3o4ZWoSBeysrfSymFqhd1",
  "key24": "3rYKKg9ZdCPC24AUztcjBNiyyVuQCGpgKgu8tWpXQ3Fvf8ubBHaVqq1TZ1Miq7QS9K2oosJVfr5KT5AS59qSrzrv",
  "key25": "3C1tVPGSp2BvLW1VvH5HSCSGgVWrz7r3vFuTSJoYBCzV4piYY6qAf9sJmiGRzakuKm8NFDjfpRDBvGuffJ9qRHRT",
  "key26": "5CNSnVuedSvezBa5QrSPaEq2R5FTrPzRtSL6sanUMikLsRWoj5kaxLxTzjaTDe479a3oZXLW39YKNLMasgjpWMW6",
  "key27": "34ctJtXnp3nu1cHYXYgcVsqyDmPbd5Tcd1X9zH6P1aYLRqbJrjbBYbr9cF2s7wQdCsGgbhCyaNjmtCV16xnS6vnn",
  "key28": "66gHaDR3rhHK8gxjjRCxVaYsGhHyGu6q8m781UdRwPZJDMtT1uLqmGyxtzZGGvPW5MCML56sdkgibXwxCNgRQHxW",
  "key29": "35xDXM6eP3NxAxaJTa9H3zJnqiLWdAMxR29L5zjYgYGw2dnazCJb8r8ZhGRVX5FB4AuejtakdXd6ApAc3E5N64gq",
  "key30": "qzLZyZM6dTQEtaCRAdPDMdvuLUP2QSEgHVjNuUtc2tNFrhxaneUXxYXeDtbrxnLt6KtkHp4CT5vZDEFqJSKrZ5p",
  "key31": "A64X6G9UKD3orRhL5D2RjtkYkisfxRWLDZKGEWAnuQGaMM4w84P8sJmdhtgiYNejxjZgh8nYQkiwHfWD2QTMF8i",
  "key32": "SpDm5BFCf1nc73kb2QbVvCimBELDMTgqGCKDahmzVgUUnYtntCQ5eq85c8uM7wmkz5jGG7CJNCHphz5vT4dM26m",
  "key33": "53xUa9RBby7Khv3hY4fn5tKxL7E8jWL6wnbBUCeHUJ8YmrHWdG7QF65Gqw8rnpq8ZXs2jKkZknc1CpER7yGdGEDk",
  "key34": "3mwDXF8RFAnBvwS9VKXKyjJsf4b8bJ6VtF7zQVJGvcBjikCiausAGp4cTdmrV2geV6QGM2wLoXiKEyMKUYGxD2yH",
  "key35": "4nGSeR6JZewoEAmenmPhE9Cinq7aYGY3BYPokyEFjWjFhuiE3KXhfDNxQb8s6agAw9aqPncaGXGeuELACYBWDSX5",
  "key36": "4UHGHCrGbATVwxTazkqovGj2ngvPzHXNpQDqprCHCKuXrfK2McxgRZVQpKuGpAa7XtcSekwkH7JeWSh3VUo9Cfos",
  "key37": "58FnMCxakg2EWRuK94yFihQEGJBdYfyqrxHsEnqcmgnK9yQcwkNDCH5djUf9uUBhSxgqQNA3VYEN3FdYSDEd26nB",
  "key38": "5tMvi7LZjFeY3GXWZSZy6BTpDHuEzvJRFaGmGXFZaH8Nz6UFc86zZSHMsmSj6K3vERskUqzqPKQqcoWh76sX2weE",
  "key39": "3BarZBSZWFgekNP2ah35uVCh3FyBYW4NrA3aYwLPTntmjExGGStWTaAGUDYxEyNE9YX2vJkFdtGqnXf8aH9vztGm",
  "key40": "5GPcP7Ha5omV7VjfxZW7KFDaam2p7Yd51mfBqoH6pZT9boKrkqCGVSCYzteJgeUJydZRJBeMWmJWkrQqC9Sr15fW",
  "key41": "2WniRKV9UbEzdKB4mhFvAdW9gCwq1Yg41TRpCFXy6yWfYiXeJAeR4hQDjVQ7Sx9TPTSbAc2ZaowdCE9jbUNvG6K9",
  "key42": "3jw6g5dv8AWP7YWrqvx4Lo9CYdj7QhFqKYbq6qe1PvbFpES9DhcaxnmjoUAyPduj6Mg4WZQX6NsKEb6m7zXp2YgX",
  "key43": "2M1frjTkTnkHEkCi2e5JwrhQvwMY8tysBcQTBopWUqYukqdUH1fuXJ64vcq27x8WHeP86TEW2ucCear2KxKVAhdA"
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
