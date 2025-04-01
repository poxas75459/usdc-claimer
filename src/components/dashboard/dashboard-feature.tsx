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
    "4VfqNgXJNWpZrQ6RYdBeGk98kkXT7xUQ9g8Ej9vDKRTukWAYnJJJvxvEjTP3PrR5zK95D954UZbLwsMm67Snzkrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pa9oV6H5Y77pinR2rwLGEusgH5rudzJGBXkw68RWcbcD3Nbha4oTtsergc81pTmA35SfNmWdwjjCqME4SxDASs9",
  "key1": "5gZn4GDz6LhAYzAjfKPTKQKiN5YRtCfxkVpKWHtpo23qdkgHLgWyhNN9q7XT5wGBP8YyyLzmypzsbS8hFACMi4De",
  "key2": "5SEgKgHdNVzSp3hZgENgZ5ktBXreEzMWFjdvvTJFQzynWe9eK7L9iYi9B6kZmyN4fjbdUs9zAPR12tAiCABgV2qv",
  "key3": "4p4pfsKkEhkMKsCJDthPZybjtJ7Z6F2vppChq9yGadM7ibx2GfVWMKnqJLjdWh2YpEGthnZdAnKdmosHKAKeWxRT",
  "key4": "4UMR6bYyFiWbrjRmVX8YLV16eFSre8B2EFatSivviTK1BWAJsEXvRjYK8Kz8Ga12sjDqhLuy6A2tcusZZgRCY5E9",
  "key5": "3oPkkiNdQrAu4C2HDT1vZi5CLQNmxD6dNGpj6WqoQtZ3QJBuzmHdY76Mz2VW1d9Qy36vh5PUP7bhApw9V4iWim7Y",
  "key6": "2SBmcJAWonks1CawCTqvTL1KxG6PhRMihazmLYzcuYxVR5y31QXw6oCkhkb8hiWxNjk2d3QfF6JXbKowL33ahQq2",
  "key7": "HP7f3zejJFvG1ZLEVPzumjKuEyKUn4VCYi1eTWDp7XfyFfEtGEUjggNAmMaPm6JRjQvG9veErwqPyttqeAZxWEf",
  "key8": "3wV4jq9Z2Bb5TF64ABxBbN95nrVsbTMchtNTgznJjaWmi2fyi17GVxJmspvVhniKNTYHGLW72XejUzHBFnhbH4Mq",
  "key9": "31VofMWNYcvFFnVVHPgZ3FuBhSLcBECKuG1fKnJLwejpCzufHjCJGjJBmtxRWCPQkYxspmkviExWneNuws6rwtn1",
  "key10": "4b2wusmsTrtGLYtTSBkdEhYqTY8twksmtX6Pprc8Fvm2J6zwiHUM5sHHVn3FAth5evFcLsq5WyHDyTTHZyB6fmoX",
  "key11": "3pHGELmnHPVb78Np96PfRsq7Txs8BoiBxR2EMDqiv9otjUmvWgLz5igAxTxg3ZmQ9PgYaLJAccPp71EFjfHnBFjk",
  "key12": "3EZ7gr9Ed2TW6uXb5CGBwA7twEwfqCkdV7GmPfuQ2vdXWBcNx8ZWdEaUt2YPoRamWnjpvhqrNHBUaPbwfafPnx6M",
  "key13": "4ZCSKnWT5rzRCKVbM8AQ3249k4dWBh4bB2QRhwGkexwhtUtVcotgaGWWffGL1J6zWMo68xqE7d8GpjzWigiqUFJv",
  "key14": "m5WAfgir4rycCXL9rrpfYP5pWHtMW8GjUf3jzCZp8iet8W5uz4BQWgPGsZiFh2B49zbQ8PLWNSGNwePpCSuH34z",
  "key15": "sCywySmzEtQJFW8jq6uUdMuPUS89YpUDLWytUZJg6mKyomiLRFcXqg34AdVahG9prHXQghjmrRq342Vn5fzzyGN",
  "key16": "3C1yPre5RfzfapKGerYdAkub8CoQjmV5i8g2myFezhDn1pqFbScN7xwSZVpcW7qcfVA1QgeEJ5LjkcmWfLZTVHnW",
  "key17": "2kL8MmyE4kvBvcvMjBSWfLMLWG4RQspx2ErTRzqqhZKSJVPF2gFffsYsfWqyt3ar7zrNFWAyCDXZTpkmWsFyhQbT",
  "key18": "ktZ6cNtzv8ZjZS1wCGAJey8LYmFzGznx8hmcfT5fpHhnzdLhTGzfwujbBvD4n7MmJ7Go7Aq77nYgjU3gpNdvwy8",
  "key19": "4E8q8mCvPLxam9Up4FwfVamQN4zCAWAhYziZbEzZbwkwru76NMsRQChL2uXVJroSfze11AJ5tzboRWuVkG8N37FQ",
  "key20": "2iP6ggGoGsgK5RikQiBrF2phyUv99eZsvK8MskK1J7igiVkujsmSsBXi5fkvVyEYg4XAPKKmmgpEfhQaeRo4KsAL",
  "key21": "2H2Pv8hEm13qwnEemWs2CkYXRiZJQUqasD6EgiQXhbfhfLsdUUCVfqUByeyV3avPh7cq3NPCRMjiSi5BHhohm9vC",
  "key22": "4eD2rRkccbo6N5xNBibHUUUQAApsoQPUfGDMfD64sAEscSiiSAtM14R5Qwzt6JwsEj3K8XaGC7FSEAv52dWdMKJC",
  "key23": "3ZpmtgwMzFavEU98pgwAKxaYZ8vRRdLTxvvg4Gp6GoqvUYkC15D1UGvU1MKDnmcjJjEm6eafFPvp2H2qvEA8kQQS",
  "key24": "3RiFFSeifMKATKdUneBDRwDbB2UDRBdmGURG8DWUu7LH7wrrFM3t5kfwb9iQGxJLid4dsrLe2gL2F6Z5keDCCcQr",
  "key25": "4esyokn3RnTnCvB62QgzJkZ2y6eBXyuXTFq66zjLVgjT4LmbRx5QiMdfkBNdtFFdFQLu7aQHkvFuaZ8szJFCD953",
  "key26": "4G8TDp5bM5g7qvhtcNEnp5556RZMxvQDYiYtyr1e4QhPdYyWdHBriAG52J5UaA5AScZntQJJH4o1DJXwmB2r6GLH",
  "key27": "N4ZhLu55D65j5V965Kr9U6cxjzwU4b5aWyBEYwzXeUzipMA9NZMpasjZSFddUxPg3uGarCqrqp3kaw9WkGbyHNX",
  "key28": "439J3pnp5TiotqVbQ8k1rtV23ruzGqhtdAdvsc7NBBVo8He34QeWmbgRK4MAN9XZXXLMPALKQUknzHAvRZAHjSDo",
  "key29": "2WpcDXcJn1qQiXESBxHLtUWjMkSZ5VVo8eWihEPm1jkEQw5PEEYQYG4tpftzAe8ncDRSizn2RLfKGhTsWnkNs7HB",
  "key30": "53WwhC8fRJbWeLydRZpmsXDcWqpJYZVPmqTs9KHxQ7Tkkp9YrwefqhX3LFog9oKNJSDia5gVyd2nA1QB3GyR2vSz",
  "key31": "4i2j5ydj7Qt9GECGZHBC16Z62wXTCdDH4CRsUFacqHcsLTMVGjrZJH9UYVZhX6JGo4vwozo2Bz3WYR3kefPyLbqG",
  "key32": "w3MfY3qcuqx5X55VxJcZNYGXUZonYLfX94B9DdGV8Ye8VBeLDiMZZpQdWiidtbQoY4p1mkvKu6wd4SzLbE6TkdE",
  "key33": "3qQMA3jEaxu3mkQRUo8VoPgJ7UZw5C7KrnqWyLfbM4hc9LisDmcpNCjwmHDRYzgQHd9AhCqiFqgc8N9JuYTLUkAq",
  "key34": "4KfeuMPDK4zAAz2ixyD4S298qcPJM4MzbtGyoinCFmCjoFLbU1MU7XNywa12W3JZCS8VwUBxeraMZDd8zrbXd9GA",
  "key35": "AjB1R7SpyLFwsN4LsvLEUFNLcamZNeFENbPSbaN4VQLTxKgF2r1XD4L9L3ZY3tXc26ztkqSACP7Mjx8E9667xU7",
  "key36": "cZXLsMv3FAZAUUXWoSfNN1CcZyTfRKi4qR9b368T32aHuLpcj9B62ff9T16XuKgXZWWvLy9xZfDKnhywcJV5qQv"
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
