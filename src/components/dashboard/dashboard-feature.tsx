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
    "bkf6XQJzsDkyaw7unP5UkDuCu5oNXCRy2zX9ecdZhsG4wyEGiDdRYjqteKsCRwSgnFsdMvxeodExdGej9eVKHRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BirjQt8wEtRvBLxfXTNGUCvE75RnDgb99gCTidWW7bEiZez8fGqoKFAw9jaKNUM19Nfaes5UiywSutUQ5nAadRN",
  "key1": "2Py7WwuX5Fvj8C5VTpv8jAmL2wewrsqziYBRrvqYduSYV4E47ghdzUNTELGvZRM3BUqRayMVfCMQ65nbAFNCjbxC",
  "key2": "599ZX7FaDW8rL3Xa3PmsjZhrgzm7zCoqwd6qyuPHQ9fJt6T3CHnBqmBN8SrVAqfvixyaQqwwjs9vDMPGSsPXqt2o",
  "key3": "UhMYq57JPgXVYWHvM7rdWPGXH41QJfYcsvXeYTYV1jVCoGiB47FtHTvpdXx5QfLHj9iY4GAFo5aY3fVnqTLtcdo",
  "key4": "4mNpyaeZQ4xgyLNXS9fhMxbew52Yse1EmC52B8NFeW9qptDfKWmmPMa2RchbJ5jX3JFVtgFfb2vDpReDyFHUjztm",
  "key5": "4T6Wp5XBLE9upYaSX3oMjTnFdGoaXa7fD7dFxtk7pZpV7TJpQtHQNQE3bundvJiM2X4Cvs7UZuEW3FAY8grgvRfn",
  "key6": "e6SW9QBbHkQgyfp9zrAS9qdMKt57wzH1kx4rnFFxhsKHUuLwKR6AMwKsA2gjtCf19kt4unCjK2hNXw2NYhDvn1N",
  "key7": "7FVtKy7wHQXJk4exZqnNs7EhAYbTTcPNQFC6G93fnjtr28ycFxnqVVeS5g7YCNSHEz5zFK9CWMH1g9Qv7T1kzCP",
  "key8": "38Egi4z27Zjnh6EhPU973tEmWLgDeFkRp13AMDiwLEks82a763Nxevw7rYyh7GUcAe6CkHczGAcQfwxPnA9Qf9zT",
  "key9": "4BQgapgYaj9N6dd8a4YoorVgTK6S62QMUrxWwBjJYpKV8zAeq4S6cQgnrs8DfDKRLK1Jy2LkqNaqHThrC4drbuhq",
  "key10": "63vPiuEiTi7MyFKbFyzinZa2VeHdaPy3mnnYxods6EfnPFmPNcpnAaShy1JQWVP5G9fiERC6AZ2NpUiRLLqecCmS",
  "key11": "4ad7zPk4sqcUjDaPrXBk2V2CsofWhHLuea6hc82nBKfF75yaqQ2N9DqvDMyH7D648nyah7Fh5KwkZPEVC8dFUsqH",
  "key12": "5xpFQ5DhrBgoDnH3dDAaJnscDSiLg6Tn74cyNedWsg7H5e3MCCaroHNmGeX84gzwF84FhEwtRANSb9awoKjM1urA",
  "key13": "53PmnPtnKVXrTDkkcZzzs9whiniFLVbtsXBuCDy5Shko9dovgTNMQfzFmVpAvsY7xs9Ye1iT8kN8nCQh4Q4AXujK",
  "key14": "4oWYGRseJHBq58TGseAMU5bbfgJXSgK7NkUNvzDB1dSaev1pXWcWkaEuzETjXUNnUFZh1zK8iqDw9dXcwNmYQST7",
  "key15": "2xov7zTjKsFZNuAcGhEbJatD3n6pv32MJMNAeEkmmDbMMCaQgM3Q7wLUYmVsB5cmJKahs9VW1HRHDWYBhbPcEjja",
  "key16": "Td48Yxnk2rGd8F5gEGzpa5nAYkMx58Pzsm696RfqCPbDbWK7Gn54Jyn2NJe3gYDbM4azS3YF2cY1oKTDR7xR1KW",
  "key17": "2m658PvSk4YS9NiyVA3A8cZZ84tjkME6w3Xa72NBDyCSqF4tvBf6YxKjUamuxepagzqhDbtzmyiyfBXYWhWpkCoc",
  "key18": "5vs3TZkV7ve7ZwbudM9J2YPpRSm7U4F36wSAMsQzNXyRuZkJcDj3Jb8fXSV3qh6yoFvu8hCXTVhRF4vKHDE6Jc1B",
  "key19": "5hx2XdVWgfkcTpdvTUqMLCDG4mSWt1TmwGr1LstRrvEcSrxS6KKByBYNQvzQkK6NP4PpBhHXc8Gq2b3Te3dNSNhk",
  "key20": "3vKjvKV3dSE5JyyAy73pXacn97V66UzMofmLvP4ztgTtKF7ZcCWhPhNJieXZtfSkuj7MMPcjH9haaEhCLY9bftDo",
  "key21": "5YDC2Z3H2bbwWxFHDqNeAX6wnjR5uUqTzPtuqRCeqRJEJLF2Daicmjbegs36mWzoJDQ34CNPw1KMp34vBggKaqE3",
  "key22": "2rSPtA3C18zD8rBETGTQjTmRxqxMzGm4FvU3CXjaVQg4vupkp1ngFjUZMcVCZn53uAZGB16daKhd6pwcASUUrSn7",
  "key23": "R5CJPyfXUJksAQA3Pd4hRYTurjAT8Z1m5bfzDapUabTnESEUK42XBxkV3vh26oWWeGBGhv5Wdeaqf6tWNkJA76s",
  "key24": "5JtH1HbL3qvvAByJRpydAv2m2d1hdG6c1LgWxwMTFvTM6BmS8ipXcmTEU2vjuFptG4JuJuibHCfkE7kZfMmFiyrz",
  "key25": "5QXXDkaiEsGTSB9EBabUPCGt1rnmUKJVQfhcW3rWZe2ZgAbufGxZrDW3BzEWNE1uwXkAaKRZADdMuzpC8e62WmpC",
  "key26": "3UFZRbczcXiHZwVkbV6UVfNhyMELdJV13bQ9YDUhs4yhXgBdwKpvbrUQdmgRRRny6w5WKtaJ8medY2j2LKJqS4yG",
  "key27": "4KVaYqD5MRWkdfETbyEhHki3SwoPg8D72ZrFBA8gmrtyuX5fift6Z1D51oSri23suGkSMHiW4XUkitAG5L8wgyES",
  "key28": "5QBDYA44UHWBmx8a5cVttHhKPds9zByJoiV2fqAFmJrVP1AaW9AxsqybNgKey6s7jKMNgcjYaX14Xw7XM6z75wbg",
  "key29": "3Y3ZSy5AwxJcKTYD3wrXQdwYMqq1GKyYfnpxpW3hEByFRoiUvYuvT9BPgFGu4EbmMeBvXjHxGw519t8LujtrURSX",
  "key30": "2cSy4ZCoZuuceL38NGfn9g4gWPyUgfq8kbjsgwv4jCg9LP1366eyWy7t9p2A59S2zDex8UED8Zp4Y8Qe7uJVheCn",
  "key31": "3ARMq15zgyjBuoXTJrKAnQ4PQpz1GNqLP7f5azPvbYpEi7gM4yV2PxJ6xMAXEBnaJGDfr3qy2kmJGjfB22kYGQQU",
  "key32": "28aeu6vZFqzFTqWPewrkKGpFjamcG6UQCGvoVKCGG81Q9jhPJFnV8wK4T9YjbuCCtaW7DfDPt3EtoomsvFkYEaoW",
  "key33": "3DEiJQwRxFdccjpBRKeoL9mYHxjThgcRhkK62oxQ9HZ5W7VtqEKtwdbUji873TNMGzoTrpVbMSNGvAYPVRP2rqe3",
  "key34": "aNQpZDmFUW1ZKwi7vSo8bD6jvuFX9beBcENc8BVT8B2UGeKV4LhnibM4UNnhwe23DgwSQqh5EEqMj6hWKF5TPPw",
  "key35": "3epzMjbuyJrHeHYuF2en6TjeRgNCL9xtCrRjrAW1rnD8gJSaxkPxYJzvVaqub3n72j8Ai4ouPDGr7xk37xSY4fRU",
  "key36": "516eymxYjyPpvgf99z9BEoHUuTy6hqMZWrvh6YezY6b3vm1ZD9hsUpG6mC8JWaR4P4fHejx8hbFE8c7LJAGNtPZ4",
  "key37": "3RiGATtYPaLQrah3PnVvnwYQox2DKpe41JG3Jk7pkJhy5do5n35T4x9nBLmcREoCAzHmhkoq39bPUDXknmUFJBfK",
  "key38": "44JqtuVLGfbchWKdYdUitRhgtyA7eYhzyPekGyPJNW4A65qJb3JqHCgy8GuzxTRXNpXGzLHoAWimS5nHgtsdkfZU",
  "key39": "3dP2imzpp8de4DPSaZuyf1LbzyXytC6S14si9QP5Pf72bQ3kTANcGrNEqw2srssG3mtv11Hoa8RcapPW6u5Qr29q",
  "key40": "4npaewA6m3qyJBwV1f7obXuY2afipxmuXVxYZNoNbHtiWeqQUi8AdqLWsbXNZ4eTa1Hi27zUJS9xQfph5zhZBFet",
  "key41": "3XKiszAgCs2f1FRebZ9Yh5KdNHBLihFXWFmXP7bYQuoSxVMAdZi6mt63zMwWpNxNfVbbowJ7eBWveQ8BrjdvuTD8",
  "key42": "3Agn6PspKNFUVFRxXEFbhBq7HTEDqfiemh3qqSho87JzCBc1KQ1179ZecikCSZF2eVD1mGuQxa4CAnVh7BhYjuNs",
  "key43": "22ff9Lmb9aWU82WJr7orcw52ZVxqpSfoSQgM9rLABDrZcg2AwLkSnUDBZ6xTB6RPca5aUbd6aFJgBxJUgjitStNL",
  "key44": "4PdKuFT6aUXiSAtAwczjfBMcGUqPzEqRSPhh5r5mh1N1vWERNiPrk4gTvjKGwMTtQmKkztwpmjFgeo8ruE5TS63W"
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
