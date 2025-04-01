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
    "4zAzHxgR8i68YcjvXYJ2vQ3mH51vuoNdb71JKrmzj881EMJiT2XT9L6LYM2quPLERo6w1skTx1RVv4CE39yc2HbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dBCxAsNe1vcMETHk2sXBVU6dqMdutXZJiWjvxXN4hq3G6rpnttfVBRbLYxDuZEZZAT6p9LQ7bVeRN9AKMWnr5YY",
  "key1": "rt84WoCbwJ55MEspiGyncbjroiYPsJ4614QGEs5LjQVnkCdY8E5cK7ELdxS4xecM4iRSo5XUYYzkYdnoDpE5PAk",
  "key2": "4y9WF65KtcMxmMYgsZ6HjxEKr7bSkUohCn1arUK2kswg4ZqoZbZzJfoVer7kWrv4h2QU7Ka2ALmKAeb8X1y67pqw",
  "key3": "337k6db2gVNgxBVGtUeyJPGm2NFQKLVkDQextbacsxceeP2nNFGx3Rk6zYRBSw6kG7mkkQ32PVYZieEFzu69Rq9u",
  "key4": "2iwF3o6CzKgwGKccarS4VsNBgKkGTaUtvoKA6hpowHmoB4yEkfTMjPVVXSXdfMNi3erpHkjEyB3hDCPjyrqo2Awr",
  "key5": "2vetXotbbr2c6VzC5zUjTNMSg3AovUX7UdGDQFVwPxdyGkxgcqTGE4ekivQkF9JBwF1gQc2zkxzfH1QUgKv76K5j",
  "key6": "4Zm216nPVqh3aWEGp5gbRyeFpEC7EPtLg6HuWpU2FxcJj3VzQfbdHa9tAFcrzg1ew22SpMnzP35ygBCwkGs2W44o",
  "key7": "2NovECv7XTAAkUBSYth4CpjBJJoX4zUFeCEdgJB5zw451dnt44nei19s4jRcJgMT8cTvUi8LRqV85Z9UReuYZH4V",
  "key8": "23ZPcMftn58X7tbbStgeviKdZ8a149StzS9pZ3tqRZCJXMcTR9w3SAqZ1avND21U64nsHJ3GFb4oz45oBvufA2Rx",
  "key9": "N38tPYijXVrsyf319outpeZV15FQY6y3HsMuG8mw4UhseqSbcoN6Fk9kXsTD1bT8CmzgMYQNgj6vfj62Lze4GMU",
  "key10": "4M8wEcRw9dnVfrFeUeJmnn1k3GpV7zrmhuJUsMPpdnhimYAGYs8FE8DtuYqDArVgnhnu1Mzfy9KN4cbrBzXqm3Zu",
  "key11": "5jLUYpAYtKr3mDnUa1JiBhcErMLCX1pcH5ftYzfdmY5LF7m3d4SpcTa7XzDQ1fWLRcVXmzTcNtNce7aqN2Mmbw41",
  "key12": "4Cav1HLD4eZ9swhLFXYKACgHi9Ng4sebbaDbdhgqq9ukvjsAcq9U2sCcZufVSoEy7wtty4yDjW96X7hQzc6fnUBD",
  "key13": "3n9LRAgKK7Thc42Gzg4BnjwvXSsUbXbapt956DV4nBRTNDGAMXmKsxoriooyGKhYEk5W1badPWgZxvbHEAUb8egQ",
  "key14": "3WUewdCtdK6sPsyEsBy4gffcy56JX4qZvv6QVBSodzRoVodFka1n32aeZW2p77r2cxe1PSNsKiH3Kr9vNY3UT1J3",
  "key15": "oSrJKDWet6B6D5H1Wcx3CkJydQ82PzMQB7PbwRgW5oYkRKhUXqZzFteTx3YJ3MMwWJqunXwDsZsh3A4nR1cRamA",
  "key16": "2mavi9Ltk8YT8BiTrbKpaHLMwixsyYFthJs7dFBQjwRbQwmuP7VDTA6ac69XQ9ovzesFJwAStGsJUVneV4M2tJaU",
  "key17": "5GRxQFY2fETpHV7cfsCVEyX9qbMAUEiNyyLt4mpVpMy1jZutcbU54TaxWx6PYMKtVemMV5SkpZgdn8e6VFhm6gRU",
  "key18": "AJgXN1Ni5MoESdeziXZQVMDkYcF5j3HPxkPwLUMrbp8YegeaCo2ThJHFLSVgaJzL7qSetejcrheiwYxfAHSMdxo",
  "key19": "3zXePqFwA5hKxzPXbYLzwTMhJ7fdAcSqBxkkEhL7McWtTptiX3GVU7H5iaMNQiH63De2aZ2n4AzDnwbgZwhhC7zA",
  "key20": "K8CSZvT27k67vFJ2hwKzt3b18oynWqSFR4KnxRGFth65JxuJ87crakenUTsuSJH7toAzpVuYBeGVMSmaREh4qQK",
  "key21": "3YctzSX8LuT8C4t4rVNfrLBAW6yo4sP5ut98XabLZKT9Usm5T62rXSyjvqmohnNcQ41ha8w51Rwzic9kNFN9iEDY",
  "key22": "3A4EWcmH83inBfkcRSpCiCX6764QSzM4fHcxed9q2MVC84D8c6HhDu7vd3UwsRF41hzmpzySUScbdCULLg7RMK2r",
  "key23": "4L5MYbG8grQwEu1txb2qMXaA662dkE4WJC5P7zrfsuR8Ce4zSwaZbpc7JECqTEonnCuxjmG6nZBRsgx5Vmm6C5iL",
  "key24": "45GXS8iNNnkHvGhW342E3jFmQD4Bw179VagDsVGRSb5FWLKinsCNUdAK62JYbeBSSMoSuYAXbeajgKZsYxhoCvAe",
  "key25": "4WqEXTDbeRJVC4oTxpErNcCwqnrjHmxohv9R4A9sZqP3Do8zGxmjMd2NqTBphj2MBvRgWDgujZDWXjSY1LooKKcM",
  "key26": "3JDJhEetk6eH4y2fkqrhzM58FiYNN47XRWtsHHRnd4TY857afsLjL626bhNsZkxmYT5BtCHNZdGybENua2gTf3yP",
  "key27": "UKvxxxNgXNUPFWQ3wDziFYKQFNNbjsVLXHXAyYtzDL6jAYK4fxzKGjigFYGnnyusC3e4G7FV8RbigNugwmnbpkE",
  "key28": "vo1e6BueqFRtJMTgKShUikyCRvtQigkWAsc9JTyPEMkv2uodet5jpTpBDiTa5cV1aVA1fHoCwfEK9s5VhjEwsnc",
  "key29": "3B2xVEpnMJ8EFfZU316EWBf7aCDfvt9WB8Ug25rNFqUcvWXFXBmKhfNbWuP45AL2hsj1wa3dCzEcQyFrUi58PxwG",
  "key30": "3gmuHPWiqKPrMfQ8GqESPVnpgfp3QDujFiZnjMBfVcVzmxvyW2dYxUb4XuCsmLf3vdEhmR7V11x2mP794KY7tW1x",
  "key31": "3wzemymnGQfPxjup6Ga7ZrUJa83uKDxuTzPYZnw1b98ULVX4QQHuoqg3NcRr4HkZWTM7ZqT462hpGCxudBBVTrPg",
  "key32": "3fftGyx2UwwVE4hk2zPAGRSNrD5Wm2GjGaijtVU3GM8DyUa9E834i2fdFst74APntoZYGenQguXV9RcXoJAuJsK4",
  "key33": "2ixC1JkFAvWY4STVh3moLpUKnhp2sqmR4vbbJMqiT9yEgWobhf5V3uMNtK53r3skrZ67TfyHBnDhVd78Ete4KrYJ",
  "key34": "3aE9jhsFRyiKAMjC9moYgEokAu6dZyFc2yUtHdwpQvK9nxQ5QUiAayBxd3UiAfAteTVjCv9LAVTDtu2LWMbjZ56X",
  "key35": "5gp63VPcGPZJb9eYCk18wHYuJEVSU3mCf9bpDsK7TDGA9onSnGWoGtNb8XZUv2fmKvgQfW3zQtNU99sppCFaD4zy",
  "key36": "5wkGgr8nX4kBRTfVKniXSPD8guUc31dTvhYATnftpXsrauVCNT8XKA5xhArCiRBgziHjydbK5FzfGt7G3aisTTCs",
  "key37": "2XG2BokAYmmzodAbGGXkb4tDj4Zn4xJ7Ytrwzmj56kkyRi76nHo1YcZFiaqNF9L3jvsR3mDstiuf9cEGtER4dsM8",
  "key38": "2SMWPLc3YaCoNhYxoczrRM7c37Mxb7Gs572qNMtyfcd8CAMbjr4CBzs7PtdauMj8LJPBVKQcbVCZ4sRaQ2X1Rs9f",
  "key39": "2J1LxGbYb6D4NVCJxgTooAVWLX72V1fgUuL5TdGQezyL4E3qG5WjgxVsEChN7ngL7G9atBdiyScBY7V4An1qEGrh",
  "key40": "2esLY7LmKxigzA8X2DZbLfKhCL9YY51Hs2cV2FKLnhgFFGvnQBRPjmGjP48V4pGME32ngdrz5x1hLD1pCM81G6GY",
  "key41": "tPzSqZ235xdiuGnnFWivXukmhwL9PdpQCH53n8HyFbGAA3pwhuhw1mAtcg92uvUjEVS9iio2HBoK4qR26bcncE8",
  "key42": "4vrz83u7x58aMVmuM71aAc2nzQ6eNWXEw47kGTYWxf5ggLvJebBy5pxi1CcAP7PMen7gz4XdBaZnmGyKWvZKBdms",
  "key43": "2fizGgN3GDEWsox4eHK23jg3J5aXAPs93w64oxJRodEPgbjS16R4bYJZv4cqYVoYUu3qHCWXLA9oGJZK82MVPYin",
  "key44": "5644abkmCAyWAZk3jxEhLXFHhePqbpcGKbzWACCXe5EigLsrJMqo5ZVTydJddiJmpAyw5xhSngLmxXrcCaJ63Xqw",
  "key45": "LcnctAFJk3xfmJTRTRZE3ABbJfxYPvhg8ZL8q1HjGXXKdn8RkpCP76N6zNFo9bYvNGiUKHgtd9wFXct6XmbZtsR",
  "key46": "5nG5ddFSxoLSv6rUe7fpggiTKqWknktLChW16RzWqbECeMVsWNYe3fbNKZ6YuRBRB1YEv6jUPZ2zq5tRwvYDTrii",
  "key47": "4gZ4sCr1x3kL4Dis8Lt5XHFU76H8eatwyV9H452HUL5DCs1eiSxrr663T2NB3aQpycBiPt8NvmP9LpJWhB6jsw2s",
  "key48": "mmotjDbad8VZsfbcaxzV5r3SKcymJvbNjZSPZxod8FvW71Uo66f2ZRa1CteVs3tAkR8FxspTetkqfxCeKFfSw5w"
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
