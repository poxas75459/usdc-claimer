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
    "5TyXYrcVdMLRMU9wZtWmg889Qx2wzWL5EtC6FHCaiN55PY6WtCaVZKvoEpLNUJ32jj1r47cLZYWkpwuSB9A8afPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29JuCU4BYFpdmQCrt7S7XvFNMG44JAkRRT6PE951jZfUou47oGwjKjUHs9r8FdyHkJgUbSHCesMW4G8A2TxqPc9c",
  "key1": "1Q4g42EwLsmKoKKu4geTAfmgR4AZWAcdxbgey1bmKHfBkKqF8mfgQuMyCL5C8U36VKcd1D17rnXrUjcCNzxpXJ",
  "key2": "3iqNac8x85hmaMWkzuFxMt1LQVeovWRKCi34Db3aN9UdcGWECbEEEdwK6pzRhWgDHaCXizg6Nq1Djz6QKWPG9pk8",
  "key3": "5rP4Jhp6XzV5gaSw8YueFzAAHMsXzGhrb5GCEjixzS7VqHiPSLyAvY8iEhM3PWbn2pVzg2zJgeZA3GppwussNaf4",
  "key4": "2HnCWdFJ4zHmq9YAb4GGvpXwNoz9jTXVUTZ9Dv7HioMonQWbquW42GbRJNtHF5LvHGizi3svBsuwF3mfxu6aR5Ao",
  "key5": "kYeoaKmxFqM7CVHgQscbHAPPG6ECa8m7z93nNRKNdZZ9WfqSqvRLpE13v1FWVw6VLE1HA4KGyptmpSKneyzxRZT",
  "key6": "4CdaWGB7HdpYa8kNEbeM9MZ7H6obPKNpb5MSBEb6ZVooHukBXt6pK1NKaRAGxE6Kn742CCGChsu7CjaewwFbGY38",
  "key7": "bo9fMJg4TegYyARWtfUsiHEbqeVKgBbEmEHxNTAj3RjeJPkJgyJb8njsjoifE8r6qiFFViMPndp4TpQs57e8AZK",
  "key8": "2DrLYiz85kyToP1aKACMv2usf6nsTMcVBQKSq3GmA72TPRkZxFy6rCQzShhGXcTxUZDiXfBN8P8J84dZtMh5LExR",
  "key9": "2dbMnavbQsThHn8wNr1P9BnjfEsfDPXLwpH7d3mpaxhFGkCmdPABncigeqk77DePYKKV7odrQHweLpQeao9RWxrd",
  "key10": "A4Pv8eQqYSMXGDQ5w4JtF1zBYyDuPPujW7Dj7Po2zcrP6ACAyUbrzq9Ny9whA4hWG8sFhf4QwNWvoQ89SjhRi3V",
  "key11": "3dj3E9YoButMG1jq8GAcsozs5CUBRzYhBeSs74MtkhPVPY1Ao2XR7V4erNPMsCbkn7KCNr4pCyCQkjrpd3wkNijk",
  "key12": "NNqdUyTRiim4UTSAnVTxKr7TgE5NcBUBdqCDCaiPJ5ZZbEWihE5M8NuycD3A544z4cC69oHoh33R64s3dcnsV66",
  "key13": "4uj1XfQwyDUYAeA35h7QASkxhPvfSpo5eKxjdW8JCcrCLB5FFnCgf8HmbNQoLBng1xw3vYbzCTJ3Fj8usrT5xKbv",
  "key14": "9VJ1BbDz6WadU7eD4dZLpCAERovgFCkRx9SNmqZJLjoWZHmxci875uUudUrHfZaVDUK5RDdA1GckMyaEyq8zEha",
  "key15": "3VjUHWVDE6EC8Gn2jV9jPTHR2jFuNKCpw5RnH7LAD2BcA4UPhswhVvzBWCBGD8aqcdsnjdHNm22sg8egMBh5L32B",
  "key16": "5kWEVFjqz1otnT7kQcM5RRLpFqCZfQrwvAvk3Dv9jwMRbxzX5qUxLkJR3gyMFgHiZoHppr9vDUHgn5Pt7uhwFYb1",
  "key17": "65BoFD5tAwezkaJJherQ5o9KooTbH6qnsJmsJPAENxWPRCYDnkmxv4HHYWSvgLC6YXfwLzWStXL84ac9FsZSDneT",
  "key18": "4yMbRs2m2s9od4wQYbocoPybyhYmzLuukkBbyAfzpVFRqhPQcABzVjiQ4L8Rx35XvzaU9879rQ6hqerHXX1cmd4f",
  "key19": "4pAMGSjdTsr9fR818VTU6mCfb3CEwQ2TN7ji62kFJPiC4NA4ynYDKJMai5MYvUswdrwvT53bXgbNkZJStXbcVZ7z",
  "key20": "3Q5DzAEupaMY3kyn9s3YtVTAVWtxetBLLvxoQPuKzxo2sRrNr5MpExFzJjj86dw2SKDJ9SHWAaBWK1RSPRrhQ7yR",
  "key21": "61t7KLWU5WapDAg6qXbWMt8mWnRYjteNoA9Xy7xZzTMkV4SCR5FSQCtUZUGasRZqh3hLWCEh6Mx1dAj39qE9ECBa",
  "key22": "3AhDWQRE9SU8V6Pd1sv3reK7z8qqFUMV3edEjFrViKAy2naAnqQtBnUivy2kfgo7d47sp1f9d666GJBM1qB2UnsP",
  "key23": "4KEF7kCeT84rFmsGWUjgJW9XzCvrJDYixV77wrFKvjz6svMcagowwFq9xsW5VUykiZrN41hW93WhfF3bvyCkbrU8",
  "key24": "5aCoeD9yi9ashet6AjeNHRRPk2GfNqVAaxmg5RSY8toN8B3RnYudBAu7faoAph9BoRabBa4TeECGN78LaYE81zgE",
  "key25": "3RLTJYbi25PsVPtZ6dh8WVDiQdPABj1FU8J2EQdFfU4xM5XJegVMkqZcprNcwL2kHEY7daRFzpg1Czu3JK9qSmTe",
  "key26": "GTRaB1sEGDKcFN8jN3VPCwmqAEajgymQziY3ugNEiczqQknGy5RkMTcp4Exj2MAgt5ZEXhQqc7LRcKT1DTcegMk",
  "key27": "4FBFUc9f6bskz9uz6ULpt5kMHnoMBaU426fpgWQnjstxTtAuu8256p6mKGJeBz83JQ9XomDMHE7jkaFs6psjtMkb",
  "key28": "4ZhgnKYWXw9KKtKxvJEWU7SqNCGGgvLBy4eUWqmuebn51Dp2XSEGUY1NDV3wme4kUYWFZPKbapugftaTZZmwq9b3",
  "key29": "3KEMX4F6qX9E5v3Sv81eqxHnNTjLA1hcPFLAkdhARYnQkmy1fyyuJKezjJoeGj5WETRrWWiiV5VAj9fr9Zt74Fx6",
  "key30": "5KTvsG2rCKsVYfogEeTQRwBXK5Hx97nwrVi2dgEhtLnjoUK872jGbFhhrnA6D53dP9iGS6rNpFRhU1RweBCX3SZW",
  "key31": "38wfHzfaG4YABbb1pfEJdoH2Q5EtrVdAdsAq8zgxmTFwgqMFjfHy5uFfukdoaPwm98FLQwgGBGZyNR4Wrkc6Xmpc",
  "key32": "4zsW7YMfzBHXhEixjDNfMEiToc54ULH2vYNDYBUo3NQQpr2HmTAVwt7v9yhWKeEMtfryNHYGwB9Zawi8w8qdP6ew",
  "key33": "4WiEojKh3qJEXP81fJafVZSGpQKvPZKaPAPomJ68nxBGXV8AEUbyc2qYTjNogNW7yNSQe971Dfe2vT4zdffc183c",
  "key34": "51ULkFaJSVjEeRhnF8FLjQSPb2QwJiFcUMkkBZQKuygzuTCNhH7DgSpn24KM2cxBy4EQJcWWZCH3FN9KiUsu4hie",
  "key35": "3KnWbLVGdWuEFxDMnAYdz1QiKMfbgfKzkCYD2FtP2dVK2qHk75n1zkCC3KDfWTktRMs1gR8v3fGWRZEJo4EvShkm"
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
