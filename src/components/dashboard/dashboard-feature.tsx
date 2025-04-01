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
    "5WCe5yQH1GBdDQYtvGZ9kAa8s6bJrzcooHcdVg2gdbwbbtxQEbdLJ5ARTTQeLg7JFfLP7AwSuckrF6inu6RdwcL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L3VfaSjCoNrLsdAE7TEKuBi75AGreYpdFw71Ymr87s8TTRmSe7KXXsr2auH4h8b83PZwhvgXAoRQKtWP9ErMVbJ",
  "key1": "4tFjLu8UJ5QFT58GspzqCmWffW4VqmgaAmnWbirwyhg86NktkW8QiqmgCkj5XrdeNtnQWewdWR8V8coQp5tx2AjA",
  "key2": "5hrsuTPLo9KyMTYabj2du7Wcx3HeKhUmKuaS83LdPVp2phQ5hrpT2i7hrUiJAfLAicL3r5HTyxr3ek3RYaZHBtDt",
  "key3": "X94bFpf2sceHSAVZ5o8dU4wvQPdvrLgMdwz1Fq9g6eYXbJJAhKb8YTJ5JvLioynSDSBq7wP4mkxWJf9bFEE3w2H",
  "key4": "M3KTuTY7SfSZMrKgf3HRvwh2A9mYPDA8R9RSYSCnRP1ZdkC19ffmD4tNDfG5uuhq7hcSWUgg7EAYUt4LkiJr5aQ",
  "key5": "5zXg4Gx3AvGw6BoVWqF6ofFUSH3qVDE8v1fMF5xsxd6AhnBZxyEBeadHSB9KpntC4a1vidafbCfhM5WwYy15fDEQ",
  "key6": "YQWY3QJU8XdKHoMzXivJMaxbTwFenEVzmYE4KStdR2MdggFEDifdYNvGWAVVAVfiDybgMVRWapGHPcu9NvdjoXo",
  "key7": "2SvFHXJTCisbs5oQLCmcdy7MLk2emsMXm5ZLP3kUQ2xripG73iajsJp4PQyFsx3koEs36qumvVRi1W9Xs6f4igvB",
  "key8": "4MUTw1uh2utYJWZrdwECXXqYHZvdAMFmYFj7hk5uHkbpjbsUPrY6UnLiXeyBRptECRpycJJ6ACuVbaT7M3zz7ccH",
  "key9": "55dz6w4NgzPhg2ifeCzxug8Ls7wTJmvJ2mhDrn4EENb2w4tk4csovuCbCkxJpVoF7yGK4uzg3ugTujDHuVdWkPpi",
  "key10": "44g7AuMvF7fD4bH6iBG4VqVtnaojwLuVMqe31Kd5azN3TZ527WwCzsqAp9xjnene3ToiKuxt1MUBUeVxwke5BCqS",
  "key11": "5j1qHsrxyYS1P7ShZ3zn1YitXrfL5nTwUi9VhZi5bePT3MFSLJqYMRurqGGTc2XB7qCiMQRhncfPtrZA7fg8PPj1",
  "key12": "T7gFjtuzieycj3TMux5CfRroXdcqvaYCthbevw6kPbTeqDfBAAwahaLqe4R5qrPtkH7UUZNvogcd1rN9kmYjFoN",
  "key13": "5o2xhegbqSkddqPjMcanbg5JGe4JqKEBMh8Au81pe5jW1wtVdqqWYHNPZS4hhFDSp6w9z539NGAXuwWD2a5neGfM",
  "key14": "3n8o2QcNVMvxEKDGCsWxQop73bYdXGDX8rRePXkuX7AcTD3XYwZ7gEX5F3eaAY7yFDXfN7shzStRhQZBCkNTWYjB",
  "key15": "4hCctaYXVKnXxr1C4rCaJRApZrzaDfhwLzi1DznPBZqP7grfzRXS5XkXHnpNY4REHGHvY3yNZM9pFRrtNhyMpvLD",
  "key16": "5gaLtA9GPvKuK2iMquHhJija3k4ZtYw5Af9k9W7bu9zSFvZrTqBoWxoNrkpPNbMb5UxKR8w5dGKyXV3babsKaxGM",
  "key17": "4KiWBjyH2Lc6EjeYXhoFWaxqhYreZWVqR7WRBFwFx4VAJYq5bkLDbYUHBFBTEbn3a5mUc13sgvrC3gyajbrGbiUj",
  "key18": "2H9T3DYQAgspm2JZzHPG1fL81TPP4VZYtvQj8ATnhXtguq8Ed3kCcobw17xz6ZSmzaFLba8aa3b9hHMmEpyWkCeo",
  "key19": "42YX77MKeQTy64wgzMuRufoNfMAuJ7wcrCeQ4CNsHUhU2K7ov8m7k7NVQsJBpvdZANHEDeC5zssNPXZu6dYdj9z7",
  "key20": "CTzw3rJ3eKNaQKvBf6vbXoHe9f3Mg3hqHkrY3TDZQX69gLs8CV7HSE6xXB1T19RHXq59RRQ8KEbdbhqmt8p77pQ",
  "key21": "6vk9P4Jgyzb638GhLB4BJdj7gb3aJSSt61FD7XmmbZW5K6j7xATxSy67P7rh5btFyAvPP96ZAxYnUU3mB5kb7LL",
  "key22": "3tPi5f1q72UtA9MrQNYDdjCddNMVBaQHVQzwztVB432GCX4ZyP6HNKMmP7GukLER9cye85KHX1KgjV8hqjjbbdPB",
  "key23": "4s8HXtxrri7Zff893FKSzQM6mk874DRMLQ1fi6qbLWS2T69kuuvhYXFNGVWfSz8aSDoSCtoKuEekZ6PUqLZz2Y6h",
  "key24": "66nV92TvGAB1iWkhoWNuqMBRkekkZMXJYhNX4dYyCpqmiQCcf59EyLdiyHYEXMCKZ2TpqWtWtmxd2eGJPTMf4hCF",
  "key25": "4WWn3vbiPxQLRTwsCFoGAhSkuzJCmZKagFfM4wJkru3oNwoUjQ1cZ7NE5dek9SuFp3iyhNw9h3XN17gfkw5vEqGy",
  "key26": "26QgVoKdNhvcNtzb5PHMzdWXqRp9xe8uivFTxDGpz5CbunD9MSM5eJWKrz2qHB3NJjae2Dxaa3LVG2wjkFnUs4w8",
  "key27": "4EnmoGWERMNgToeQP7rScdna8hJHLN2sr27R7cCZBvb3YqwnXvwfZwD6kDyQza31XKDgjd9HZ5oE7BgZuvLw5uAT",
  "key28": "637AZ1gwhwDoZjrKyoXp2tGtv4Tw61KD4W241dQ2HWCNwjsW4bAJ3GXcp9U8Ww3LB3i2F1fAf8Rm7mKMESaJH5Sb",
  "key29": "4MFMGFHyNwatjjpvVuagpRnTt2cyek8wfAMgssK22CHoAuN3EN6mjt561sM7FANTKBhydcPavZZomwBq5tBRRMT5",
  "key30": "5d6t8biiXSaKWofATSTh6LaVPnVYRAyGxeDNXD41jnqvMY4C6UqFTMUg1WETaWT61k2R2v8WYmpLvZNJpCcDTbpR",
  "key31": "848VCHkMoHKhyX8ihP3yzWSgsTGGJHCd4qxY7eZpdQjKjK6T45cGj5vWuUPKK8G9HUUGUk5j6BUHoEb3CeVdcgJ",
  "key32": "2JuLZwRnXZSrk5MkkJaepL9igkQewGTjodDcWBsLB75inpcsrRui3s2V9PV27matCsmUQFNwfmhPXKS7HRd11zrF",
  "key33": "28vVmKbY5zs9ABHsrbhWA1ZKrnycPR8JQWgfuaS3MkcoTxfaLSUprdSDDhDsHmKSmHjEAc1UT58sj1puHv4y7bZc",
  "key34": "jXKKj9p1FhKHb1FciiwFpbjxCervNm9mV9fyUXYq24k1U8qqcpFnz5LK4QRxQj3Nzh1bzpY3HoPq1erQGwoRWDu",
  "key35": "3fLMNqWkxNrcTWVYMrW5DpW2ofW15MiEuBx8GhERWdfL3sJWYBtwzwJMXAQuHCnQ8iJvUzxgQXf9da9ibyBBH3KB",
  "key36": "35FTkKe1j9jU7Rf112UdwLX14Yj7LQUvEd2wuDDcERsPjdkLGEUABsAqZUBegSKxGQ4PKYXnLRMtavYQLiHiAwG4",
  "key37": "WbxC1jE54Zct5Jg5qZhC1hh97YnZLrf3M6Ldd8r9d6WbJenGr7AY65D4NPw9ew4pVQQJ2B3YJ6xeyKqUwZMd9r2",
  "key38": "9sW4PCmqzt9KVLpZH7QMjt1kLfWaEvRkpmLrj4nknuQo5G5Q8E49vF89RoXjQk4cUY4ZwAkqcbmBFG85uLJStzW",
  "key39": "jHKBPLTp9BDJp4SFg2vhWk6J1Luq7RAMse3rumWQ95MRATRHiAqPdsTWhzyRtwcX83fV3h4bF5in33aSkXFuhzB"
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
