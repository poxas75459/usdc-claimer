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
    "3csSEUfuWMwjjbeeyGmYpg8gZWD7eeQf4eyT8B22tUjKHDhf9GUinQvqr2XbSeDoqT3m7fCy3LNWucfjrc1hwjRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jii8BfV2NmmVTv1hr9iKU8oMcNJ9EhXgqd2vWDQmeaGxc7xE1PMep91ZJ1wSKmTsxCzbVff4mZabNtJb6aXUbyx",
  "key1": "4fvkNkVRp7EJsUBruLDvGoC8ghp2xGk419fyUuTFcZmhkK1aZY5zisVz5dLhJ5A8NT3oTcFjArKGgbPvzamPqMVf",
  "key2": "NCAqQehWUV1Rje3di8xDoAhrHzzAWSHniS6QEnKMYKyhGbbhjDdYgtcynLLJvDtXZw7xH6DqNHqNWvYLLPWVZ6L",
  "key3": "2jp32ZhGGZZ65iNMGEu3M3XfzLwChFmb8LzTto76RQzh6JGZf51CosNbVPmeXst7DqUpZHApqUJfFccahELYeYvu",
  "key4": "42M3whW5phdFHvhreRB9VTAzvFmfUbFXC62VcAJX6dmzSm7e8bX8i2J7nNA96CQyzLKPWYyYYAipMUGqvdoA5ERk",
  "key5": "4nWGPThoomQj1egEnnZU4jv6n3sZeFA1cvfoHbS3NftqWr4f46maaez89MGXBH9S8QwohCzezaPZbb9bMWLz6STo",
  "key6": "61XBu5KafL48DqnWZzhGKjjZw7SJgN1eKvHyXXkWvH5oHiJJ3fkHf1aS3J4DYMZzEHA7TmZn3Zi9u95yzYkrEbsd",
  "key7": "2RoeuNJQGn8sHfPXh7HRNgxiUMrjccEs8Za9XCZcmd6RRi94B4AZZVMUZZUN9isfA1E7uBDFTeD9MmE8Caax4nt2",
  "key8": "3CCTyxLGswynpXW1QJcVhed9jRbURaynhhtp1YKtuC5Uw8foCK9x3nwEBrcFXncQFXP7SiRjEXu5EomDxNiNTnGv",
  "key9": "2v7ZBGV71Bco8cXfYRfcLw3R8cgD4oAdh96ugeydXTYZb4reuT3qqtSpCLGDWffnEq4SGD29HLdzoMy1W1GkzTdU",
  "key10": "25FeZaKMcR3uCkjAAaPA64WxRsruyoS9Ju3qAaW8Aq49xg5ujTzb3JXiyevuZXL43YphSqXsLNFC2DUKucNTTkFf",
  "key11": "4mQVBCsYuiCbu4YauMRy9gewTmnPGwzUvcgezAfcCkc58Fe1UG5MSZHVT7a2Hc319RFnTurqUAszFvMs9fPnApoK",
  "key12": "4XZL7c1yuuRDaegYkbCsCtYH5g9dPetve3oDgbW4MkyPXdg9JgzRFiZrKCCz5PspidL2aYqrgyA72Fe9fRjQfbF1",
  "key13": "3D4z4eUxPdUfzrpzqdVmpuCucLZYiaJtzAdkNiWwsozTKBxgDyumKXBahmUmGuRL9kAyckQLJdPiSxzUWQXFMr92",
  "key14": "3shXZ19dfwhg6EgqeAGLDVFQ7PZDzP62pGMzunMPBkLA3m6BCXhHABfJeKVkfyRHL1ajRDVQbrzHb2GbjuHcYi4B",
  "key15": "jnN5tbCYSKFFbh4FQhhSRvq79JpnLFv3DkGfp4MtLdBJNAVVSiyvVwCsJrKxJf8mFCRgq9rTnYU7bV8iXwtTyfP",
  "key16": "2B7VG7oGXjVA3hhTF77iEptrYeGqkbWav3tg2jPbwoT2LsNuJwSisV3DBDoUcrnrQSkD2KEfAVcGpV4nE1kdZxZK",
  "key17": "64eJf9dgpK149nGxhSyzwmNKQntHnSXbKtYrWT1Xf72aSt1GaaJP25B6zLaSkX6ZtbSjgp77VdeAL7u8dMDGJQCi",
  "key18": "5XY7J8ceJMvS5VdekD9uVcZaGfGw1GSk5ohUaAkJgMX1KFgH74MJG7GENcNuxs5SDieAE3KCoNXMhqLCDNjHi4xq",
  "key19": "3tD8nshSsRpL3swN8cQX9bC1skNYjoKUiwPG4o59WsjHJn9Fz13njGDHmvTEKjHYQ13ZUFgH9x6Yj76zTddafLT6",
  "key20": "4iKaaj7mkXDoUVmC14zypjyXyM5J7neyVyTfAZhjmf6LZwwVMPLju4pLEJCbPqU96kRhqmpSUswkfzsnmbrkzEAk",
  "key21": "2JtYEfeEmgiN6RGnMxynzdYfBtvD35tn57oZNgMbz8WGujVf8iX9Y8psWaa1DUeMdEy5vDiMUoGHbhSAqqtmcCsz",
  "key22": "3PT532effVZyjZu46xjrWwQMusKabceJLrPHxY91Qd2QRPsCbS56kiNbWZDWGmnTWg33DduioN2c3WPmmgX85Sc5",
  "key23": "ow9T95hPFmMP7RsAXqsCnZiqfCrjG211PMaeqPxCbGG1fm5spvEb5D8Ghnw44r8Cr4MW7x5KirZmpjpgbiPBjsn",
  "key24": "5AgCHTsjxYnzmoB381M8h2vybTLmwpHPFgLhqorFh2BqymFziexeftmuFGp7ySAzM7Xu2KzM1w6v5cCif61aSXWT",
  "key25": "2nkS1JjA6AbuFNbWSveaDBtuyj8VvAhmHmRGjjhPRToEjYcR1QXeGynRkkWQHT1GbPiDrX3HA69q8F8HJJ3th4n2",
  "key26": "66uNbNaJxAgKfkBAwhMT82t5y2KnPihNmpZS2MgjfMup5pum51ViN6iAfRhwHBgmMuMhqRLjcgU19ujK6WVA9UdS",
  "key27": "7vQPMovYEcLiB1DiG4bw1x9CVDi2uPfp718YhiWSqXUjT1bcb7rZAiPPQxvzVsXRNCkZvb2C7pp84HDwCygRv2X",
  "key28": "2ScLenUtViPWLEmzaeo5Z7Wd3hgEdkAcCysuXkJevc4UjSeWFDiwqBzjK8KxvbtgD2zskrGeHbBGoW7nHngZfGEU",
  "key29": "fShcPsLHdNXFzzRVf7jwfRmJMF6662yBMtv585de4FM4s7us5NWTRmZiyNFsnzG3sXsuqgtS5S2GG51pCQGsazk",
  "key30": "4PUMbVxCU8v8LF4o8a8SxSFLWfzDSvZ2dmk5rP6ntmcMy91Dmj7FGjwQkoeys7GPxfDctqUu3LsJPn5AjksivimD",
  "key31": "5bjuM8YLffWCz1KVjdJYpuNW2qUVzp92TmkYJthVKoMNm76NNKwYChG3TmbfKSqLM2J47kHe1BPhTxHM3WcHtVGh",
  "key32": "EzSNUjjc68UpTKWG8dRxu6TAkWbnmLv4T81iC94JVBCUnmt2BVZfZhWY2W3fj9pQAPqjsh9ZfbUxkFi8Zn6FTS1",
  "key33": "27MC7XEAAvjtEXHvvM9E659GBoSvAdWj3CBEFmB9PFNhoFDXLgH9MPGS18rd5NTPzTg9Y4MgoSbPL7EjqGkBErey",
  "key34": "2eSesepu2Wpea24VUmJTrWvs1ZpqyCcRMsiYSZwFEPrzvNb6jG9HMo18uXn3kAgDoHK3YeHuL7xrd7xsxBHPHRg5",
  "key35": "64EHJLsEiS6kCW7TLsdcV4HNbMXjfdtd9SKNWtoiTY8SEuCisd6f71UGvb2S1wGuRqL38TZQ8gwYrdhVMjYerB4i",
  "key36": "5oeX9gdecBGb2JiWqTVQ5t8K5iMtX3R81e113s1bJJp9skjN9vbcAdhk5Az8bEQ1s4qRwWm4oDkgaCBLAifKVdVk",
  "key37": "4KJgK3i536bpaXyTiKVt76mq6DoHnXKcqq3V6ijz4hJCjn4pMwiMAF5SZUCSFdoomao8E1hNDkGcL4aDLYk5Gij",
  "key38": "4rTtEuyzvrEFD6wzVBpywNsisSiEDswZ5uHHTC8bHJYSwt3A3oYDCFx5mGJ5wg3mUSDCQwBkuy9mEkvm3c1usmKf",
  "key39": "3DvAi2nVYE7e1DsEMiVCX5osudj1Q1vbrS1g5MhzJktHKJJm6UP286mitm8M64ucK2HSWGzrPh3fKP4FoX2kCa8Z",
  "key40": "WhJcckmviLW17PLBfZBEjFUijtZWnzbfWAtXELxDPzvNmLL1Sjbey6aDYUPuFSBUaeDobiQQEQbdyn1CFYmiCM8",
  "key41": "4WQ7WguEogYhGL8XtJ2XADiVqKVbLwu6RnodayGAzvHsBA2XEAuUVHRPEECMGGoJAwC1aNnZYs1kN74nZFiPqdFD",
  "key42": "4XqpoApASwmG7ucW6mGqAhpzhC4JhZQWWxA9wjtUvqsF5sViqbB5MCPcZw1xjjrULCaJz42rhmz1Q729uJB8YYKm",
  "key43": "24yKhHLuGU2WR6ANj62Q1bT4oaGxpyYoeqwCsWwH94WA63ig4GCJjevGFrc4wZ5uNQMsjbQsfA8i6L1215xVdLdt"
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
