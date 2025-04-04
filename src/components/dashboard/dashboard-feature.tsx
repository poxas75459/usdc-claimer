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
    "2Afvy44dNSvnf6V4K9shKDeSkb9VFLzLxDqpiZ6DaNorKu2YPF5AAds6EdvK1d6aXSwwZUaz8Ga5wjRr1mnog7En"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GEQL5uBo9WkPyERDNhMLU6oRPLrKMb8T6Hs6zuZN8vdhrpgx11aaXuEeVwLU5eUYJTSQb7CrEkTAiByNdKcADCb",
  "key1": "2Z4FHgxhb1BSUxYgRHFAPruiFYPSfgxrGSCuUvysysz2dkUtU4i2MUMX4u9XhRsctoFTQZAHWxrtGLuregbyTgZC",
  "key2": "Po7ALQF3BWEguFpvJWnYFbueTuoswUh2nQpaL5UJUgt3U4phCxwxZA3RquJvFQt2TosN7Y8mHTDy8vUcreEwsHb",
  "key3": "5F9BFhrimMWTa2NH4HEp7r4KsiMEEMPmRxWChbgsawdSqZxdam4h1RUY2d7BMrgjXvaF63LjV186YDjsHtbGuLL8",
  "key4": "4gx5rbYvbfFAA6gPgEmjU6TvtqAbm83yWebxMLZFcHz1UFA2PMhNcZah6i4r94Ct9Pd3TBspqgKrvTkFDnErYjUq",
  "key5": "4Pcb5GYDybox4ZQRKm6nt5KcVY7FzKW5RHP4Hi6tNJ6DE5LHP9e9iYhxwjNfqV4y7cJj5Xs1YUGNR4hopa8JvbLu",
  "key6": "4QEM9HcGGg5vZmBuJdeeigDruFbKZGMtS5YVkXEevyf2LEnUjLD9FREyBBWeQdpqoZnPB5RBNpRXqJiMgvZhKrEP",
  "key7": "2rx7o3fqcZFtMAKGtPaMEgEcxy5Rt3Tz84a5AMQqDaUX5oDVbjTmwC3BaWEdpi7MwWnRLbXMBtgjVf27SZdGeiZ5",
  "key8": "4xR2yUg3hEhS3GuzxyVjD8Pb2sfjd1raG2ZEQEJAtszdCHuT2FmQTVfUoRyYx93HuVFy6H3x5xcCcfj8EfR8CJYT",
  "key9": "3NSddPFDYdeLVnrCZxV7b1Yk2YD9PLc7YNsvpcgXqfnmP9E64XidKk4Um7AV3wkvZSLW4kdwKiQUzvvr6wMsMN2B",
  "key10": "36bqgGH8jUzcmVDhfZmyUx2vpDtFBrK3ZGrUEeuDYoqRejzin8k76cCsi4oTizpCcmy4v1mtvNRUioYx9w3jmPnp",
  "key11": "3j3pzLv82znqkvGpnnM92iaQTyg4e3ec6eaHxvp4zVvnYk6pk6DitLmu9mp5VCoi6XaMojPhp8DgVcaqXkQTiqC2",
  "key12": "UgGMEy1wHWVNxTjSNUy56R3wEkMxcvM5mDfq6wF9uayh5eWwz9eFRXF1uR3ARo6cU9wui6tWkAGfGHaqYCEfAfa",
  "key13": "4eVeTSeALN8MSNwyGi63VbnpjV6LWRwDhwirs5YEJ9S9GKZPdrR8LDXGvQLXgTbsARAZNRNsHygYdWWTXrjaaUdk",
  "key14": "WeycryTUmc8PNZ8Uj9gcYeCJhnPTRNdMiZYuCEXvAD9V6ZMZft2NNaF6jPrGVhYE37YGcCVcoBKKFx1VCbWjCZs",
  "key15": "sU68foXea417ivPj4u3noVY6tm8vxJy48Sbr4k3etwCcx89pMNojaAAJTZ1W6jxk6o11f4LM8FHUbXgRWxxhXFU",
  "key16": "2iovNhvfTzweaGJZfJbevWRkj6KQkCcar6uwnxkQguh2pfNuUzBEYKRyaAbvFGqVeAZU8CgjMQUvquECh94MvEHj",
  "key17": "3wGoTMWEUbbJVKwJwuaEEt59aN4cdxceUTtxmerraYxx8Kn13KVTEdZHST4H9QddhszdByhmTdrVkvTWgRFbwmuD",
  "key18": "34Tq3LQ8QN6Ek2yKxRyNX58x1QNbRPueVuEVsLm4xzSuBc446AaWAQt633KSHwbSe5YhbHa17P9E2Yo3oZ3wm2oC",
  "key19": "4ZVPfqQJHFzvCXJ94M9Pmc7qSZyUdCh4e9Ek4SvkhAteG3VRXv5yqcNgBw7g144BU3SmJ1XFZH9oBaPtshYnHCE5",
  "key20": "4rg5cndnB5umaztbb9jdBaSsUN7SysZaS4YN9edXVfuEMs2UafGWbcctCVdM2cCYo4V16yaVxXQ3Tdjo1Fu24sVA",
  "key21": "PehsJAadxDBgXu1bVNZ3DVnfKjY7JT35D4A1nHjKiryGZG4KfCfRxFMwJvu2GxQxucqwPjcWmx2cByU1GVEm4ay",
  "key22": "4D58LA2yFvz2465JuoFXBvKEg4ZhLbjdq2A71jGcSFx3UiqB3c6atn8nKavm65BivARJAr1rayQYnTRhgYpK9Yeq",
  "key23": "2fhEu4bLXCcfVvPrCMDALsuJtKcuEjwaoseyYASqHVwBGmBY3dpRrQPDp33vL8QEtzoBXYuyZRG13dSPJ5Q4t8h8",
  "key24": "3d4bTp63qcj67pEFi6bHZuptz138Tux1faq9t4hB8dMGxccdJ8hhPUv3e8iANAkrPKb5oHnpyhycjLJPts7rwKrz",
  "key25": "3wshZfQFwSefTsD1TCpqax1eURfBbT9szxfzS8tr4V3SG79z7FJFULuB6no9og7wgPDg1A5VHCL31trfds3HvNmn",
  "key26": "2impF9kmj34J3wxqvs6NBJg2dwXPB41mppyoVyNXjCW8yKHS2K9BjHqZzWNbJtzLkrXbQEVEQXcwN2D3E3WdA8BL",
  "key27": "5f8iUMKXu85G6zV68kfyQFnYmL5HKn8VPtJ3FLC38xkjvwZJZoM7pXUgKuDmBYc2mNYcvSv361GnL16fzWsGiS5s",
  "key28": "5DGYhSwjKxBGCdm4UiQQG6KHVoMWojiSy3C7YS9asDMwdwCRg3vhQthQiuQicyFxSUXiWzPdYKdsLxcG8ZZF1QLe",
  "key29": "4S8ZLquKs2rPBbAwoTq9AxTCaJTEFr5mXD7wEScdkJyq9B629s7ENNx4WutQew9vYdtuqqLDcANvJpYxpvtNmWsf",
  "key30": "3Fo1XLwfgvKakhzCY76Gt75kNuPqcZsMrkfRJmN81Er4xn6urR1wUchNoBf2ifHXzESCPkSzdLphNWPt5vNyc94s",
  "key31": "3nmj8N148uaCyqubdt9qe9izkx9wd4q5y26GfgXyVQdREDnCKnQcRLtbhSV7mXRKEUw7i4Duga92F17nzefadtGd",
  "key32": "5e6iSRYwxoEZBHLZtAyXr2wbSJzef5YWWkDSd14PykjWRorwEt7u1WYj8pwt6Cy7aHrvxuHAVTq5r2PJGNKT2L1i",
  "key33": "U67BFYnMV5qAKWvhCbTgbNm6TZkSgha7CW7pcM2XCyfNEXt3apntbHu8wfEHEPZxwVZYv98huJQYi44bMRJWGHX",
  "key34": "5mmagjk1MZNWCjrxnQaxFTwx6c9L5njGg9SeVXCEBZJmvpgBVqjJTLyBfpi5XgwqNueJJQ4bgacq8gfiGTH6ugfL"
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
