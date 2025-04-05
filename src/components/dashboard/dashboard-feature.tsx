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
    "2SvdYjSbeV5mWYNkLDrgeFuYdTboGaF53yy13bvamfLS21Hh1rzdeX2bbYVPvMW8atheGSGyEtxJTrcKBhb6bvtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sTDHLBcoFkkDSkrxiuaJXMTarWLB2cJezwczyUvYJZjD7LbpXYMqD4vxbepXfm3LxJRqB6DdN6bhT9TmRvXXQiv",
  "key1": "2VLH7j2gYC18byYDsLcAj44yT1ut22nB6ZD5KBL9zaG93NTR7h4RsnQSknPb8ernTu6HSBbjJ3ADGCQvPoEuanZp",
  "key2": "2XVmnZ7JHMjnpcprebb9fbxM9ejdU1cJ2WnAokZcviW7DGXpao2tTriAtxqfD6yGXTLRhUHnMh8AMQbJYmCb2QKs",
  "key3": "4yDgFi36KShvHduXYrp3u1JGgXSshNzmAFRp3ZXX1Tx3oMs5FYhaW9mj19s5bDgCrpZMSQwBHdVWH1gYaup7eyZ4",
  "key4": "4X6JYhRcdomNSzCDVmg9ToWQoZW5AB5wq8i3pSLYKxnmAGXRVktEHqWnzxQCu2yvD9PBcUSsNuhZF6MYkarQaoZY",
  "key5": "5GED4XVAwS9T6gYku6cWWgAJocpXRvJv7RGmbAcLvbLs4Wd7iJgy3KxQTdPqCw9eTGAZSx72d3w3teSdSCi3gbau",
  "key6": "2SMzdMC7MUbBhohgEMG6SuzgUpqRnRe3UXrdxbwxoTSMAKeH8fyiYADeE9Xh7AUEqwRFxBqYfST1NpnpfoqoUn5n",
  "key7": "4SN3Mdup3J2eZY1QM1qSbtQCapxhYgKXaPDUaWgdCwog8hEu2jjeokHuwFoWPNYT2pczjcuGA8xHg5Lrtz6N9FEY",
  "key8": "4W3DJ4kaHdbDtboqxpVA3QcEtLqyEcjdhVWwvoGEJcJ4Zrj1CuQruqvgPXxThJEhNRS3qFUGfS3HxF4LzQvtB3i",
  "key9": "4bxmyjK9dCafLf7LCQynQVgsGcXx1Xe679eoKxMRYQHajtEMffjqCPeCKnqpK3oYQRvyxHdqexifQtXT3KpPe7v2",
  "key10": "5ANkPH5Tb78qqp3kfsNCFTs6zoUqSannoN6XdFz9jLjpJh32CWKKd7WScqkozrbiTdSH61w2hW7GrA5pvxaJgMqW",
  "key11": "5nSYZCLphceJhUGvQP4aVbDiy4SVf7se9p8kgutgj6dHt2z1hP7txYcYtuXe1MPUvB9Pti82VgbC6cMkxmNNMyBT",
  "key12": "2UB5wHkBbGtVZx9rvTSbG8itoESbPGnpsb7TNwFMrMK1TmP7HH5YESEWcrzhQru7ZAk1xLpveJjjLPCMHAKGt8t2",
  "key13": "uWKUukZbNJLfnTQen5CEgbwCJUHG9GLDmUfmQNnAsdLihVNHMBTZreLtEvWqU8tHVwGvA9CJ7aKfTBnF8JV9BEt",
  "key14": "UpRcQyfK8B6B4M2WzDyyuTivxdHzGLpj9G9tf5HgpYmH96whwAqmWERSYw54pxwn4q3B73dd3yUmqwxN2Uwe8vz",
  "key15": "5RvHZrXuDNnaoRRqY8QFMYkK9qd56oqydokpRhrApv8Bwstz8Sd5wr1TDEYVA1WG7jj4bEEYe4QB4k8X9WLXp6hw",
  "key16": "yVnvCnzr4rMnRbosV93GFVD4eKZyX1ADpom8Tos7aJ28Ykc6VCSpTG7cAASKDYjZ6biHgHkN5j6dA3yXxR1wSF6",
  "key17": "4N2JpSkVPnVeeLsVbKLctDqSSn3kbxiARvUiCY33r5AcXxPTcNyaiVKWiSKN7ZYzWjwr4YkC9tzHUVx8vSPNLbUo",
  "key18": "5gp2XevwRxry5oa9PMWbSK2Het2Pv9A4XGoiaANAT6CeVVFXHwhfbKLAb4M7sVC97vugdGCJirpkat6HTThP3Fh5",
  "key19": "4fcv4hQH393q9D8ZeyHsNBrXFSo3ovR61nfeGgGXrL1yTECzFswDFupEabA4YwrTCfXCgAHgDbbTk6Pfk1guCCKF",
  "key20": "RDwD2orXh4xRLhJPR8Vudb67uBK23AvK57TB7nvKLuJuGqHJJhScEdAMnG94DcBqFHZMfN4JC7VSQQ8ZpMpKmYm",
  "key21": "5G1iQnVSjjqfGGdi1JtnNtsdVX2S9b7Pm9oT6vVJn2g7XpmdGBkexYEFzG5xkzdjtipLFMdUvc7K9yHEixkTMKS3",
  "key22": "LG4Lggu6NriKgrPvzeeYFegf39H2bUQGmeaKJ7mnXoseppzw8CHcdJqpY7XaW9ELtKzWNnYbiCSeXaPihabVik1",
  "key23": "2v7qxV7YV4eoX7yHiebjRoc1dY5uMsrccR7tG8x6UE5K9vSR2nk7biAMqWmVGwqJz79TSaWwu13JTNd4dR7yF2bD",
  "key24": "4ACVjJYv6GhkpyajoJmZRzgK8Pzj6QUuWKm2L3ywCJX3cx5oj77pTh9wXkHKDeGVbqTGQTcH42usEBFZgS74XQWf",
  "key25": "PgwqrqmhfojC2zskNZSzBvoXpsw31yyXs68VM4GHiB6hKpZboecJmioxVh4LdztxyqJUBAJFTy2QkcbS4nePmqZ",
  "key26": "wnce4UNdcFZp36nANfNnWiw2Y9RQ3hQDCAvFcrjh2qVTt9BdXT23AxQjuLzVHn8cdGJvmmgNp7yVkE8rTKh4RAP",
  "key27": "BcQQKUmGhYbL2xy5N5BGaEfQ2sdjVFrLS18fUNEhuUw5HLECUZxgsDMRRD88YnGw63HoJakP7uDT76K6n6SEZFp",
  "key28": "hCEqP3TLdrFyrvb5wCqGjaoxFB3gE8ZrMp1yojFihvXRpiHt64T9R27kicJGfmLMNheEjQR6WNv9mdmcaMnsTm7",
  "key29": "3Ly2MyeeVtQ64BvrjG2VGNoZ69qNUhTdYdB7JVyjWtkGQSsjyjHDDCVAvEU9fsArLSaXDEBxEqUk96ttiCaMVYmo",
  "key30": "3oATUodeuDQ6uBy71Mza3Bz5b2BqgdQSYjZeXidLtUXFfAaa6QdLdyEayCVN129UfgTzNFBuVThM2X3mtYPMKUHg",
  "key31": "2df7sf2NUR1MRJYQDPo4XrvoVKG1dFz77LYfM9ABbXZ3uC8cLMtKk1ZtxivQhBGeGcobUN2V5bnsi1m9CipsSUjj",
  "key32": "PtMooFauoZWureQmnKDXzcQfWPnbbyBAdyVGANWgsi4x3XMgUkbufLgzcYwKt6wxkQG7fARrh1X8VzLciGKM61g",
  "key33": "3Mk3ajLPRVYoytPJtvSoMRpWVnXgFqEc4w9r7yaXvhX6hrsuNjvB1URT4aFou23U9wswaQs79ctsGTieYGqG3ogB",
  "key34": "Twv73WjmJvQ3Q9EhXm3koZRB5wXM6C4F8rF4JpSSZvJxt47NUACaS9vNiwCWKCC3rwbupVDVw8i1i72sC6Ruhm7",
  "key35": "3RFqQ2KA9vsSxC5cu3LD3c8xseBQ2V3FwrQ5e6MYGwY1mutReGGmET8siVDutmWtudpd9dcp4tqReNBrgWAgkewh",
  "key36": "5RdoKqQUggKKw825VmBAwMqAnWoPS7vG9WK3G9KZCkZVNFxXFHJABHXzvMcee19WCFq4AizzVf3Y3PzeHoSvSvgT",
  "key37": "5jMU6bSw3QmoqVUXD598aEk9zToGQYXz1WYTo7XoSjmijQqQYqqMfbZpPphpoxuPuBMhBtbYLGVq1naBYJXZpdkB",
  "key38": "RJVWoWzipYQ49hm2oHgqLizDtpEQh3bNgpPCh7QAuF5Gpsooiv8RirV1FbiVaRYggMLjjdYHKCVyBvnQkGSN6wV",
  "key39": "3n24mKdNp61ev8eJf5eQqT8SZMNCfkyUp5CQkVMEp3NbpTqCncxazkh4oRbcbaRnE2SjXzEHE1QbEr29ppXcYiDG",
  "key40": "4NWbP4B3KQq1ND84hjcHxo9dwMyfyxzqLzRGUFWPvyEuSnQyXPFiLysHCj8EehHbtCu6i3utujUTemppBGtQ7X3G"
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
