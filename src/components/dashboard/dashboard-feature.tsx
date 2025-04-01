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
    "naxHCU7PQNEzEyBuGTWWRwdmrBoXryQKYHzKBr89t9LtEc3yh2tGV5Zoz7V6bAqZ4fDxzH3vYx46ErdzpLDMzMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XabDEBjkianfTfKjCXvr9BoKY88FtJt5GrGtnG9ZxpBMemwQtZEGfw5AZoDk1K3p9uJVv7PpmWMPgRetMbvD3na",
  "key1": "4RuCdfHS3N4dYUNrqdXzL9gRrxNZFx8thj64T5FTxts2mMfpEh1Qqmdmpfpsw7QPgK9wWH6b7XXRBSqVPahuA6YN",
  "key2": "2CFNb93PqRmr3LuogJjhJcFQfWHzqF22tWUzhgXQDWN73v6XJUGwPKwJzyiQEtkBqvaEDiSw5KJuMQYHXtqXdFKs",
  "key3": "kgRdu2znCUR2hJA9uMUErLH6EFr9JP2T3DZeMxkFR6rruu2NZyo35Bu82RBa11hBn8ZUGi525AnpxsC8PK2xjXz",
  "key4": "2GwCMeJNxJK3DvMEzK2YC9i1uUiLKZ3dbFRFAwm3Q2WciFLKxvrMwPUre6dj8gtfvK7EFNK3Sj5YZipu9Y3vS5mX",
  "key5": "3PdRrK925yV2cFGEabwKEsheTnqwTPLT9ydEySs58TM3RnbATiyT7j7LjPki4wU5JaEMm1yHhp14QRkhKi4VefHJ",
  "key6": "3Mo66eQMXapG3NFfxQ81qtQBaXB2oWanzRZeftL9Dft9N9z9GAVwxCV4ALfGJ8MUkiR7BmP7rpnVL9GgJPNuG7yg",
  "key7": "5mQzY2Gwru1dfBnnHsFq1EeNLYoZhcyquxQXLJcM4ugcSfXxAHswjLAE22Crzy3ThSjSat4nrbNT4rMwRyvdMjDR",
  "key8": "5t2p9hr7GwN1k7WichU6uu1vT4KuYygKLhDc2Uz6CsN7szdgFZ96m3CwBPQyXbzndBWkwrwz8NPYoL1kwiFjyLy5",
  "key9": "ncH2APcgDZLYxUC97QnD83CKH7i4wAySQyf8ez4BcY9fBUndrQ3HbtcFAhnd9AUgug3FBwz8pdwtkYJw4ZEtykc",
  "key10": "4rELFgJCdcYeCYZWaPnEo25KVJRaS57B5zP8gbdndYek7TpTmo8Y3LjXCVG1NJBrb8ZUdJh7nrS2XtBb7k5BeRMb",
  "key11": "4Z8iVaxnApbH6fWDdzwxfYwWEb4fERCCam8Pj538Yk7wLg1PbSzjMjMWBAgGEd5H8fNByFjdZyQBDr515ksRYoaH",
  "key12": "64oVTEU9nSG7MxAP6VL7itE2GLoDPF7YwM6WzJnVgcSginf4xyKP92k3aYgYpLX3dR2h7ULvSjhMQ3rHwqtRAnV5",
  "key13": "3EdEgmJvoUWcuEosZ3T46qNL3o4SaUgLBQtrthSWdxsp6rYBpyenMiR92MEVbNt6mnf61ZBCgpXMR6eDWpvN7kyo",
  "key14": "4FmdTRxuAUREaYLtb3SEfWYF4KY5snAw6KzAkLQZVmGtd8NDYcYMvQd4T8PHo8W7huyg1ZoVSX3AtqqSBSM6quVV",
  "key15": "5XsXingXUk7vwSzDtMnfoFJAwPxRcZs24QfjKjMcGCZfjbbXpwYCFrKN5fgDcK7EBaZfYmbkkPt76axWW2XrqQ8K",
  "key16": "4hfyRx3QMv8J1nYfPK59fohZENHDY1NX9wUNHZaa5BomRfrf21Hw24cjN3Pi8f9WUiU1o9rseLhK56iwcCP6sKaM",
  "key17": "57tJmrSnKPxiMxEa5gZuVpBY11rUMXtKwhfMjSYJxq12hvDbmJpgzRmK37GjxWtMqWVCikurD4GkW5zCv1Zdhhao",
  "key18": "67KCJRkVWJXZpg42bfX9rMJ6d9qoNUm8btQeb9p48bC1tPGhnJNRi1srBh5rCSXF6a1fDfxLin8yrhMWZQYmD96L",
  "key19": "21ZcotaQndavxiXciACojz1MAzUmYnCZk5jKapJgPwfRvKy9DQTcwQhiJCNTopehViwxwFJYzE2UszNsA7A43sk3",
  "key20": "3XqwvjzGbhqkd3kq6C4R9U37zZonXPX6Mv7WsWj8Nuc5zyUaRgKWKX5ozpdratJiW6yVAzY6azE9EDPkJQ7XFHTr",
  "key21": "5ioJDh3y4L8Q5rFZt2rs15Scnq1zGbmv9ULAUHdyxYy1wUCBUcHzxrGrJftKFAnKD18wGYSKQwVPfXmE1e5Kz6SQ",
  "key22": "dYfzx4c3mE4Jnr4xtHnKp2soY2Hno7AzF6YWuQZDFpktKxaqYvQA8Xzcvja3XaeDnH1CFoT6ErFYcXqcnNhQLVT",
  "key23": "5xTRf9sS15wP1UC4hHXNqdKG1yhogdQHBS1fsUntqrbCEz7CnD9houko4pnmmCVweyQe3cY9JQ5dGNWJsAw5Unv7",
  "key24": "3YZYfRUXM5vXxuCGxTmt2jBo9Hc4idQbNM4avRCUGHiQ6UW4LqLCZQmdZf2gQgaQSqFXHr6XMyL9mWudMpAKetWX",
  "key25": "53y84KoBjRXJpyLRmKYG9TaV1Byxp14faVMYinmJieYGiYPBy7ZyGqFm2k4N1Z9KFPHNPo2jwkcvrpm5MLBNy2GH",
  "key26": "21Go6SYKpHqHZnBJzUX7zqrZYVQyFkjxRCyScDDXgVgJjEDcU1MXQ41jQ7xqM4Uy29iJuVAL69iNpnq8h1d9Nf8Z",
  "key27": "3pWEA32wqQtHUZrVN6iHz83cUjfTVroNYopP5g4w9wcPvdrWr8mNLeuQWmvA5av6xruCWDpirc4L83cohUvZtfG3",
  "key28": "4PFu9BQWCFdYyHTCMTfSjwTuH12BJsiH3FwbyEfZP9xq8BkGhLsMfb7KJ5vgGAoRScZPdBGSfs1F3ufyf3vgsppR",
  "key29": "3gcx2gK3bK9RXanfJfET73nbCKm8KakB21F2Pys6yY8xWvvBUX29oGuRPnZkmo6Q9z2nkKayuRP6gW4bPD7o4rNQ",
  "key30": "3E9kd4dABhE6Y9nLdBG52TAb96HUTvchJ8cXY4cwZVkjCq2LH4aqgXfuUypMSNNUXS5fLB42riFfpK3RcF6VBDMd",
  "key31": "2FRBrH98f331H66k2hG3kd4Z6EZQkHgAC9rvTWv9aQ6Kkx7dteu252sdZB582rxXJmT1SZKoSFkXivmGbRCMb9wk",
  "key32": "o6jZpHQMLvpDYstkTKEfbBAT2qqxVnnUxR3vMwN2rsdhqmWYoAH7P3GXAaFQzp6iAMde2UWyM2nW4hSLZEj8gSo",
  "key33": "4bEREGJ6Yb9KAUa4putuzoaEKMpdZeB3t5j8bUNasK4dg8dP8KnMaaiAvXjLHx9hEta36EuUW2UqKpiYjZR3417a",
  "key34": "3nqTafwVcQJ9o4u1DCC5HPMbCrHos2SiuLnJ6BuYq1mG7oiBodQRyNMhrF59BakNDGqWVKHGbQkfp3Y9jMaztoPP",
  "key35": "3RMAVtM8PcHkmeG7ywKNShGntgv4nhTyzL34qVhvAud6Mq9eeGSG346XU7yTNSL5x2XtdatxNLsGSQYcKLFjoax6",
  "key36": "5FrFEG62mGXFLRv6ppQFkX3FciVfZQ18GQJqaGUFE3U5zgduGDCTeXbJrKL7jk8ur177gDArmqrBMbj2cLzg9QJk"
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
