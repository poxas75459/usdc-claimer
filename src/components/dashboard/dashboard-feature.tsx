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
    "2i7dfNnVLCyQBUSVu45cTFhUiM2bcoBhiv7rGSUDX3YoRzQm9mh2msPzUjuYpyJ2s6eXyUYvASA82MFC18EjTsqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5er47JWjtYsWV6AvvdGhy92KrUu9CE48sVv93ezaE42WiUeZURGoe72heawEwa3KJZahpmGwMAXwAFr73mRUmkK1",
  "key1": "2UP31v3WYix8CHNSwn91uUJfzWHk7hiodJL2jfdGh3MTVMZ2wvNZfRuAHfVs9RGE2yTQ454sNHktQDJutgrn9Uiu",
  "key2": "5arKHb5vYThF9KcSVoQ1qJ2UbRHgd4vYjvMfnQ5eaGK55nThoZqGFtFiddKaNtk6hTSGF7aS754Wkg2KdvHSBj9o",
  "key3": "5CDm7FBYwJmHHatFkkfYEYUZj4d2Q2YCGQQgVA1EpmAEcnaya1FrJUTYnfZBKPo1kN9qLsr3WtRWXD2xngURqY22",
  "key4": "3Qgv5r1n6buBWbw5wCvj5pvSY7Etv9ovHJVFgrW1bPvERos6WjZXSHCPJwQ7UFdrFGhgFcw9sioPSfoHbxedYPED",
  "key5": "3GMezk9nE2b5Xi2J2QncT4QFvviEVX9ZryAB5CBfoTeURA79QGeNiMrKGVeK3wZDNrZNZHEc3D1LvyiM3B3KiK3J",
  "key6": "5TLMXTDhokb1Qu9w8PrSthCeBRfmynPH2QUJNPhma36vd2g9uSxkotvP2PG7bfJhSo4foYgVM1gJKbeoWKDrfLPW",
  "key7": "5LtSD4Z2doHvmp7aVkf4G3jY355NTpzoJet5VyfhqYVSeSLjc8SyeDahcSxJ4uebeRKJJq1nMDNZLZnJrinqMYsg",
  "key8": "44NVjCfwBzShq5kunMhw426wrf8Ss4RwjVTsbtHH1YJaXUNXb2VXPuHv5tfNNYJ1PXVrgqrs8M7kQUigBX1BfcRV",
  "key9": "5LDoRgAbqQsE8Q3jboSMrtLRoN6fY6CrTwPDuUjs6SRawvGfd24VWyTugFHCRNAhQccGsiVyLUMzr3XGgiDWV2ny",
  "key10": "3uYLtTKqTkUmrhevJ6VSJQXMQui3z6Fhk6RETzxiAa3Z6H8Qg6sBjTph8zFKrubQ5aA7ABVx9m3oDeqZh1ZYVdzK",
  "key11": "4BMv7xh9shCT5Kyk49r3kZYtsfTaXDtpjNpmRt2sjWwfsfvTREBXgfzJ251fr2NUG3uKzxJetBxhiavqTz3YtdGk",
  "key12": "3vLH8jGgP2VztfvgqTQ3GtnGSgbNPvw25985t3z3nc67KrJpmW1F827beZ3qN3PNn63YyMPfvBXeqhHwWQM5b5Zd",
  "key13": "9MEim3kkFx6xLKNeLtT99zW342fPegggoYWpCSorEWMUjCyeBFJGCWFpsMns88v14B85RevpQEDo4mNX3wfrWwe",
  "key14": "2koRP2Kco3K5AXhcASHoNA72cHXpp5ZUD2SEzcKKZkYJ7ZeNudX1mrVBc2FFS8NWg6KT9ubiUtZeaykN1Q9uJq9W",
  "key15": "3M84caSD9VtY4FTuXVFkFxyfAJpACM27m76DggRwx6jvc5qRqoEJjkoBSBKfrbqtfG7mfgmBfVUtzjMfEbqsat3d",
  "key16": "4axnwqh9xejjWmvPB3VqDaeXBwXSzgLqM9cjiAeKmcDAbas4hrtjChoztKtSe5MhrKRTWFAeknYp6aS5sd5D1WVs",
  "key17": "2FgbZW5W2SgKxmMgTwXiuEjjBNFgDZKQHNX6PsfxAJQz9Rm5fN1NSPveYmcpwWxC3sBpastM9LB4Bwyix6isqV78",
  "key18": "3oMAq236uHeSJxzAXB3tPq7xoeWGoRRXw1ga7aa5wXPna9SiKb2uXbiRCNKpdVynMmkYdqkPPx7LTCg7sYcZVFwi",
  "key19": "Et4t74dSFCrrSiA9SzH6Ev2Hvv3Asjj7JuYTTuEM274hhkGw9Cx6f3Hm8bMsZhQXmiWgQhWRKXNta32hsPK3ogx",
  "key20": "4yy8y4EiwRhdS2tbYZ9oPJJ2yn5B6u4K67a3MFyoE3CdMfC48xkBpEWdj6U6WChNnTiQ77fgCVRQLXu1nrASaQVf",
  "key21": "32kx5PgKcKtchyXKVswnByxaBfh7QUgc42ZPqM3ZpqySBozVETZKCcUXgfYFFf6eRaSLmc4josarbh6zhab9ZnXR",
  "key22": "3The2JVbhMPLZYJ4kgmms2DMTGr6gpYptzE4Q9omg7H3HPs1qTehJPdW9vrPvM7ZsGjLv4nnqmZ2ddbdEQT9ypwm",
  "key23": "2E6JDRbRTbNsqnRrAccX3tbftHmTJq2wFDJcBCMaarF9GYvALWKw63ocEfaoExZvyrwTtA3cQwWFRw8pat8ib5VA",
  "key24": "ZptBhuqp1MYQ56k68pG46PAhZWzQBybJLh2dtAvxHn5z7uSkTAczoYJgqCbkY5xMwypAXskofkBQJqS2mZDwkpH",
  "key25": "66KBDvsmKMe3uh9EtT8Pjizt7ZAf1CgnMhNHFuhBeb2yeornJBKbdPDVTTXkMSJBX1wgwNE9apED7i7TePeCVrB8",
  "key26": "2no2Qnus4L1yKGS9cjLudx7T8KkPrt7ETTK2YxnzwgW6MgyWhMad6wNyWCDchvVPJrsid9VWp7dCuoRxDjEubRFS",
  "key27": "3Km6U8T12eGtnzapE8VNMojK2NYRR7qQ8QcF8jT9i96hD3cGBwE9D9q9Do7pCiwcCvP3AuFgtZVy2Z2kRbdVHrGt",
  "key28": "5j8PVsAmQ3mZTcREEBVATtyff7LPb9RF7yFy7zd8FChvVFdJjtUdxNWqxqrtKtbTPUb22iPRvMKqorfWfSDhyhtN",
  "key29": "2VXJmBApCwr1GZPnfUhXEC72LhpwGUvtzNesxfxsNSbyW74769AcNtU6wNRyXaU4G7r21MNsXKyG4patLLMxqkif",
  "key30": "MjZWzPTq1WFN4xk6D68j3c5VBnafXRQoMEC8Q74Dz9nD2SCDvFjXnTTcu4TfKjmsXrax9wQGEbFDqMNFLWxWZH2",
  "key31": "5ScSx1HwU9MufXz5oUdvJsLb4kFTvN9qpUXfDSfKFzF7JnMkA5P8hShwgCZ29LCggF4n5R5WdohH5GCD6VrUA8uh",
  "key32": "4tyAn5etBHzVZdsLxfpMhgSgKxymM9BiJAabc1VjbQWDHDsNDPbRRVV171fdgwbHdFtQc4VW2wRkhCgNSWg9CT2",
  "key33": "5maAhv4RePktsjVhUSZcP8agFkngfn8KzDVnWsxDj4EK7YWe9S8FvPm6x659btqNFMPYLcMQQ62y3shc3mNXc9H2",
  "key34": "4m2EFHZx3iwLaERBRyFW9SSSz8R2tDx87kKGjyBXz6tczD4j8wjYB4MJJ7WfDmKrPcaTkGFeBUCncTzNqJX9Y31r",
  "key35": "2kBDs5bPhR3oXV7esTr8wxvFq7BBg1NYMBdjwgsAPESH57vXYrVVDA677Cf9yvCNttRWa9pJaFTZzEihZcruujVS",
  "key36": "4QH96AuXHyfMvTpaJC68fXeKcbKeRQdpKtUQ3aFvS1J5asi1qDPseAZmxH5HXu1s8PaGxvHHbdEVSTF2CjmJvwdw",
  "key37": "3onWGKtii1czm89pzRBTRJHPW2atqnH9YhipcvyXTgioszw1f2gwiGftdq9xm2tHFYoB1T23KBbHEi13fRuDLXDk",
  "key38": "3khaQVshRAVMQ5YHdJNJt14snkAf5a9oUsdeRuLVFDeTJTqxVoTpjgq4PrkZpwDXuHWWKRnBVFiEB5mm4rmdD6bT"
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
