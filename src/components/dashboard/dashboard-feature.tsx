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
    "45DQvCaNz7MKqJ2sAVwxjSejTrm2qNeSQ9x2pXyfHox1Zpz9fSeP4VnXbe2962VaVYFpdzgXd92HyMy1hn2DxW86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9QGVLifYEaPVc3q7E8z6QcFuDpDBgePsfHJQfvP3kQct8Nc11bH38uRzndZm6WQsFEz6HTvJfGZv1dsKUJYWKwP",
  "key1": "gxnd4YNx1jnqcDoNNuDjFswkymT9LanVnASPjvgZ17YJzoStyoSc7Ak1Upgv8PxbkQVc9hv9vZkngMyKVxLTp3F",
  "key2": "2xB1GLsRyoPY12a8byLEvig8eDtvnpubromzZNzwxrk4ZU4p9sgbtHPGJvTefTnMMSHXgC7np2nY5zMuu1eSKFqM",
  "key3": "R7HgqcZ7Ef7qiv9cd37yFtrrqdEayrDXEadgB2nXB25ubFWac5pTpFRv1XxAB8YpA7S7RNDmTsteac4KwUGKYdc",
  "key4": "5y1wBUQ3E5YAibcmeBqZsKsXzCiDubYQQvn7xAUc4MgBQw2HrH1oVzfVEUm78sG8hzMLCcbgdjAa5Mq9MuYyqu7o",
  "key5": "5DwifwJ72Ntn5yV3m1JkiqCD4LunhEYb9jRJbqCQ85uiQYAgt8xh2DWAeZhp7vkipyXmUACahyaA2sYzUBX3V8bV",
  "key6": "4ZrsceLLF2Wf6P93SdWQkno4KyRu6uYCcAoTgudJx9vBU9xghLq3HzKTRXobxzBDyrvL9jSUHMdcHZG8Fh7xE86j",
  "key7": "4YDH8UpzLj3w6rhzQsEgeuZecfxTJSFZegnb9AjJsEBpeCJY2SVWFJ9AS8i3z9NSucY2bNetjJTGY31yW2VSTMBG",
  "key8": "54Jey7neRWtUZb6bYcPRc1hJUK7hXao1ru6KfjMk2gQd72JnfdQzRmKXfdjZ1cd2tVJkDUkKXNysQdVTdgnC3tLo",
  "key9": "52ChZFqDch6DGw8k3LVhSoZ5imq441NkuY8RbnDSDJat4unJ8b8BvxssrhQH6ETgdPQiGiEckruRYbSAwf5TUrB1",
  "key10": "5JWJfwX2ipCuaK58dq6d1oDc5MMD4X6nGgaRHGaMMVVFJWxyHDdyCLizKVgQCCbV6d8AK33ccGM1e2jWkgNcEyD8",
  "key11": "3YVqvFmH5kR8UVd8awqwEgbPoK5bivwKzy3cB5EynEM752Kgeb5zCob3gzKwSjVTGzv9CvvNy1XTQu9fjhnm4kqo",
  "key12": "2YKofBi2ceQnZrqmdpwcEpD75b6Bo2arqWydqbLqJshqHLgRvbwiGe9jKLoQYuaNN8rs9EEksLDMvaS7dY62zajB",
  "key13": "4zHgc7f75AgvqgsMDG4wASZbgx5PKripHm2Vb76DgjWEvjX4PyUaDLNU2QCjgUTMhoyfKcP3E3khmCEiSMrTbsNv",
  "key14": "2KZZkZ8ZtcNAzTBLZiw5EjtbgknTcAKoYtzzN1TbFRVTSTPdjVBqoeNK1dGvkysGZDumn9skPvvNAjYs93uCstyX",
  "key15": "FgBgxN1rE1FhwsFJqWXACVF7Aaw97sp5KxxUVJgNKngeANjTLFb2q7m8TXPhHydt3vaDTyh3pGUz8KA8GS1xoXf",
  "key16": "3G2GBavFof1DiDSrJE6a2uWtNq3p5DZTEGnpkbkne9xPxgWfnATv5PRa1VLQQPbTXdKX28EKAAx9GMERS76Xeenb",
  "key17": "bwLiokzUooYXdVoN4ZM2ojemyoafX7i8KW1hQQk6SaUVLk7mVqSHVYSbhjroDnNEH6fzZcxStsufX9jeQWseaVc",
  "key18": "34H2hJY9b8yYFdV7Ar6ERcBGhSAGR3hrwZsCFEsaSi3VM25qukWsL5hrx1sFWkHRVRSYNn9HjrEW1PNrMGkpoi1n",
  "key19": "3epEgPiLz7BM2D6bXRxtyLgsna28h2HpgYAr8MmRG2A1HCpqrNzA6SH6qfY532nmo3ZCNxUX74SgZyrNb84W7K2S",
  "key20": "ba87aqif56o3oU6fD2AJ5WBXMN8Y3TqXWnwkRF4xnWBJH1UudZo9HrW9c5q7z63vNjj4TfxA9fETqU51XZdfVUt",
  "key21": "5izkJXP7R1GtcfKJd4Go3hw2tzMwz7qCmheSs5jVdwY2gswPc7EEKr4UMUBfsxE78rQiGb3a7ovS6qGnNtnihmFc",
  "key22": "3sxugqbMNQZnbVu21SN1HSzJ6eSn8Nzc3LUT4WL9fTtsGmtUQxh5pQVkthGRBygX3o7FyzqDuh5PD3Q8cMPhF9cP",
  "key23": "25SZheaqLeptkuTwJDRCdUvw1SHMV77jcm7FP2rt3BbYT6FAURTKji4FhWrAAWDF4m5BYCas2ejrguqKcj1mL5Uf",
  "key24": "54sU66Wm6i8SRLf4hXkTVyDJXBzgXrnKMhQH3fo3KLbjrGWfsAdZ8Dmze8hC1AJiQnvXuSsvG88az8Z4na1mbsig",
  "key25": "5qP4NQyRFrYdM32gPH7bWeromq2X5gKZaSnnqQWoh6agR11SDBVmd6b43Sq61bgbkcKhnrPJ8sxcYUwaPuJmbG8o",
  "key26": "5ynzP5WTYGnCJCQwroMYTN2nLNkPW7U6SkTycjZPpNYgFG2V4p3SPK69Zz97bSEDmv9jmAYUzDBCZe5w28TcKmBG",
  "key27": "4H8UjURMfkpJzr1uQnjV1xyFs9fNXCdLooYXZ6HgNGmN8X5d9RPEjKEwZQ8XRRi669yP2BWh5yvsxHVr5bJF3neU",
  "key28": "sEvNMikcT4vDJGEnkiSh5eVDjDXHyR266tTt3ebi7THWGbEAsnveDYg79LvmR7ud5fKUdq85zLGYxqmDGbsJevw",
  "key29": "BcDaHW7xZKsBYNNU67ydRf2TmnZWPDdaatdqe8egQR2kCH4yJCf35tEcG55mdVjfWSs5nNYbzFPEqubnuS3BURk",
  "key30": "3nFsUdad8P2zLUZejEpTSn4Kc1zKReWjGFjL3xFnW2J637wJRmkoh7E6DJZDoSr8GGc2sDXMCdeCuG8fN55iqYWz",
  "key31": "4h5CPDgnTjyrfjDFot6BCCw86RwsafJVmCmxbKLms1H2dbtF7PocRrT8ZHtHGGhUAGtkAfNsVxDeifVpnavDSoCR",
  "key32": "2juigFqLdqbsCsnqvKqJGA5Q2DgDyTewWFPcRy8BwB9DNNM7kzcbpW98uGbkj4a4CJMjFDjeeSzDEj9EnU5qZAB",
  "key33": "3yGQLNkYgPiGDzGh8UB9zFMnThFi5hEdjM4yNhCWxtew9nN4sbstnt5Gfdm1nRW8RouVXFqYGXxAvoL6ML9Vsjkz",
  "key34": "4NeidBxbkwAVu14d2Pz3QARQ5kS1PviFzRJoZQCJjZ9FhuvU6HtpoRKwZ8xRabDeCtDVtzuHg19sTMPEU4JBbe9y",
  "key35": "44wmKLFcrNi3Sdd9GnFPEPUjz5g2FLwLBFZgeBoujtC28DrRGQBteKRUKyZ7DnvQ7pW9wRF2X8XMHmW3cksm8d7M",
  "key36": "2txQQqaXeNCHXgXiTpvTWU84D9UUixJ9Ny5XoRSVza4gKGFLAMmWqs2We2ENsyWFL5Q4boBpyw2gNBnuE4dbqu7k",
  "key37": "QFj9XNTaRSVXGmwMopUWPuCu6fjjxzzvjPebKBW8UyF7yBURb14wkjAinWRrL2PEmsgWxw4B92FLXt1bPphemug",
  "key38": "dzs6Hkwq9VsUwJnWGcKnVstCZbjvMAgcAup47VNQ3ScCGAQ85Fcr6C8uofeP5MDCgvm6V4WLNAnbke4N2GXiFCK",
  "key39": "3SFq3Bju9PhfQ82YEySb7mpCkVkYDCGDiEAzfWhomG3KBivw5FfKSniJfBfYBV18AEQvhJdJAREANdndHPz4zArh",
  "key40": "2Epq9kJbutr7b2Ekzx142bNS8mg5RrgPJ6JsqxzL5CwGwmWJKLMA3u9raz4yNe2yXpgCEu4Ze47bX188HDkX7CUQ",
  "key41": "5LMJMXcE17ciEgzj79dytgPoRhgwHjPYA9mm99FgSQ9tskW1dQfBV4Q4UYjAgwUqURAoPYXacKkoMdfJ7JyE83ty",
  "key42": "2C1LzMyc35R4LLN4KZ49TYV7fgnwSL4G8PQeFpYpiuzW3g6qhGtELaaQ6fAeBHWz2wGZfxAUHnxo9uPKZ8f5VTCQ",
  "key43": "2vNZWNQA9enBsuLHB8MbjeKPrczkkNDp9eF8ffFugdu3tXUThGaKx96ZYykD7dCobh5HQJZ8bQ6Vk2JizhNYSDaM",
  "key44": "31oVhPS3KKr6HAuBYGmDS1xUyaLssctDz1CRtFdjCA96LhA2p3xAuzSWypxB6JAfHXA5hQ1xVdH9KyzFmWtB15z"
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
