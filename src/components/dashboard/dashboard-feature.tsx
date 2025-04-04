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
    "JovpbABKtHBmN7LLJMnGeT6xscvsVGo2iPFSRGtURD7rQcYzfx6RZ876paHqVwi4Sid378DoChBbVuc15hRG8ei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kJsbhkGJEbfKPzD9xe6f2oAvq8FtTzLgbHPQnMrVPFUZh5nUtHzbomfxCs3rGGDh25rGdDCn1xMHGiUsBabAYXG",
  "key1": "2rr6YiSKoxzjQdbZqDZBUNcGamZZ2ocm2HyNgatH2Y9FWfiwvsYwWzKzCFY8QigkRR8DDgb3iVrsDXXPFPAoZjwp",
  "key2": "51jGReJxkNaTNpPzHVUt9fxJ3Fio5Kg2eyjbh6zFMA8nXYSqd3RtTRmfjR5cZn4qxhU5ES2z1J7mHmFvATkEJBP1",
  "key3": "Fs933xWL8CNJpEh9WRPkQtVwMVZypqPiraThafFbbXUkzEypHojwaj8nePRUFw4iv8hBE2eBCW5KbBZSfK4eBGt",
  "key4": "5i8YWqarztmjyNHjgCDe89C8vAd1dThCdwJL2vNJH1fvqN4MJNDFtGUm34JtLyWamXje3Qjdu9R6Ynuwrfb8P1ec",
  "key5": "LGk9qtcJMWQcY8vAhyA5eeGhjtjf5wBZ5ro4VfRQy9P5G8zMWPTjMcHw1xNaQSVCTbDQTbmdzc1g1LFj6NAM1UE",
  "key6": "3FYjP99mjHSXgdp6RG387LETSF2tnDqtPWQF1sYNSCByAKoYUbAD56NAwFgpsXME7TH6wFaC4VTLuYC4N9NMRvvh",
  "key7": "Ptm6XQf5tkqVyCenpJGWRe4ko1rktcT3eo6zPPU88FVvREj4uZteUenkM2xsniAvA5cjtyTz39GFKHTtCeyrM4Y",
  "key8": "3JUQX2mjLG5sjbFNw9cTqdz9aQ513Ugv8A2zXjBWkd21phGRmogzcAMR6P8tgusBNbPhrx6X4T6jByzvKTCzrPDV",
  "key9": "5aCaHTDGUWnT8bMvDxCCrC3nnkX4BNsWt95kkghWzgwtTXhMHDwwEbcPkUBE5e67L1WJPstnLCMUwhw2wmtUx2cx",
  "key10": "4zuPWMXCQtMEKe86MYDG2jKLeUnZykvhn45PKHhvHNqjrb2MKJHc9jH84rC88Kf612GXqVNsyBVFXnwFF1A94Wz4",
  "key11": "4Xmu5vHSJA7sDQw2BfcpXgjnLtBBLdD8Y6mnXv8SYp8ScuPXm8WmNTtrvYZmpPiGxd5Bw8CGWEb5ejQYbWztWHgH",
  "key12": "2fBX6QRQFekLQgfyiYdZzQSj6SNZqLzjSUXExu3U14PTavupdDtKomytGmnAYC2BiQnoRTW3MARH6vAmLmYYCEdN",
  "key13": "3jVsbLF59EeZE6JdgYiaToFfHupwUD9qW7Znf1XvYBsVREqToZ8NQreKMQViHpohEtzPRBseCtJKAmN2QP5YiFtQ",
  "key14": "3seN6oxATqitaSinm7ARgL5xvfvcorX5BBAv2MAvNkJuQr7jW3u51txqZ2BiLHNywQLUjCduLPRjptDd6Q21zGGy",
  "key15": "grXriTHqE6djd6MRu9K5PSXxZsfaUh9ZV89fjj3iG1kHHbwdCdFYXegLskj9zCmTxVvH8mEcFyj3wmtkfxBxR5f",
  "key16": "37dppLuLAptaqbFoLhBusL5DVKyRMiktGQ497tf62Q1Qhug2SUSCywQxWMtMFaNXo3pAZFy7Ccu6N5UBzzKUsE82",
  "key17": "4tAR2xDkyq2Xx5ywPEqCf86EQDpRQmsWqZvmJBhCLN1Dbq4a2B2rnXAjmB6311V1vPpcyJh6QZKs71uMUP7Qj3j3",
  "key18": "26YN4zbyK6y7X7JcDKdeCpv4DvtbVn92G6afDWcQp4eKqyvafXBUQvrf9EJrCiAeUNtB4qccLH4xZj1X85qKqxYK",
  "key19": "3ACxSVphU9eaVNiLEeNYKq6dvxgJVmv9wq2g7iixCb5EPYMc1KEAykGypoXubUa9PCoSnpyJLEzQhaW6MiYXyJMm",
  "key20": "4NXi74k5Hcm871fHbajRtvApyB5FVtwqtsRiW3umAayJNTrLwMjr3BQMFXCdxdiBqjX8eRoXQ5XvaQ62pi1r9QV",
  "key21": "4ERp46hhqTdc6DmipdesQwtQrbR2DbTTA9Fa3yvLqyAQwb3wwFvoBLC48WUjd6xBuaGCts1rWyLF77FSCMBSk1KT",
  "key22": "3K6Hpx5Xw1JgdvZx2DH3qVRXaPM9k9oCu7ix5V4twGs6UPaJoL2e7kyJTdAE8dY2CoQmZxWMKy3h4jUvLWGzv2Jj",
  "key23": "3XYLgc2kRXSSBP1Ydp3ZYNxLjGXWCUzZR4dtrNzD1q6xDnYfnyoSyETRTEEDKSrTUjE5yJtarmMx7B7W7XQCmLCu",
  "key24": "6sm7ftxahr3GxF9ZUEH9yJJBRvkLYX7TokDox6dqpu2bMHGVxMR4YWziyDq11GyTUoNHB3PthAR488VQknCBzCk",
  "key25": "2F1MB33yQQS2QBtbtPBaTco6hs6fMp5TZtKM3BmqdpHhgRM8D8bxyxgP4EqYHwfkhW5xNt4GRtrMbv8smwkU9AcH",
  "key26": "4gFB4agY1wqKx4WwJxX5bBqYyFZuUJ4bASaTADJSBHyYDHaGh66yAugdMpF6brrtomf2o7YRpKrqxpQwgK4rgu9a",
  "key27": "5zzum2XyxwWwQ37FnaWs1CojhiRqs6466xocsr251XLRpJtSXKKHPYi3cwnKubbFcCHQYLNi1vYBzGjgL5eEj376",
  "key28": "29xEGh1FHvzKD7dKRqHqwWcDxSuWZ9b55PQ1YyMkRhh6L7oxwmUBtFExPfioCSQz8mo9BnLH6v1joamWGj3LCixS",
  "key29": "5FouUspzC878VNe7m1YDUnL6uGU1q2DdKnfJpfEWijwsu6VjfgGC3i19aMNHYgdp9MNH8Szq7JUjXewsyi6ZUyEf",
  "key30": "5DUXXcM8EjbfC3Nrs4VuK9hr3tMXNNgAyMTeXCTz45WvnX5xXoYfPvHP7poN2FnDmwvaoKBxrcLrVc2Z4bxZLPoC",
  "key31": "4sp5pPTU8CAqDZLMwAEALLikkBLhn3KFWnpW1FU9Ct4aNFJ6TZH9Fm8RngA2KvMeWA1LJ19h3U5yinhVSBEeJ2XF",
  "key32": "LfoaCMRoLrHY5VxK8LjFztHM1SyUag4GP1seKpwW8t4xVEkT84YaF4VcuyxUeCSRzKAZuwmFQqtsiDMvKXnxZZ2",
  "key33": "4dY75wj7CzaQm7ae2JznFG7R4ZwgULygNNw92YuK9Nqc7yPLCJU2H1gY53fcNbxtb7jRW1BvPdUYeC61SKUbjwTA",
  "key34": "3AGLaTYiW1iEMTwyLenz7skbGPTCa8TxsqWrhaTuj7UDkHC95rLs4fFZo5sUNiRthm4aN5zT9ZUWY1datgyzZwQq",
  "key35": "65WBpEh4r3jSZbUcAJieJgEbR5nhk4cQ63QwXkGDcwmHLEiVfYrkYMB3pGRggD7yfCLf1c5gi44t21oCerQzLfYm",
  "key36": "34ZrdLyRF97KSr7mT9n26pMT6MchuN2tsMJo5ikHEi7gqPTMESxZKZEDWByEAXFtv3trUGhC2FwWcRoV5v4eWG7q",
  "key37": "8oFmVC9dSpUjPHGUqHbpQQ16M5W5DxeDuALRWFVTcpXoWBgRW2qu32mrCXgwStyjTuMELYbhyBdsa81RQwaZZZb",
  "key38": "3XCnD4nZ79yGYWC5ZuLg93r4m6RApT9nwFHwDEpyy8puteeA6Zxyu1wGzBikE837WeFpJ8eZg293VqzPfk3oM3jg",
  "key39": "Zm1GxNjpZghu2UPWvWWToUzGZJybTeSgfaahuQj8ESGv8vfRqEBraEt7eJZh1rTEMTENeRHZff6HPt4WP3owx3t",
  "key40": "21KgDKydLnbAnDGNQBcr1kaDk6zzn7rMZQtSRERjs3nPJGP2NZrFyCEZGqEo783XNtz1MpehdAVQrqtg92aLdyos",
  "key41": "4uxJfc7ibHkSrRjS84DN7B1zFiWpJWq2TuQzkFyWXwyzPKaL923Un85bBHMktV7DdyQdDRaWthQeTKdiXYY3aGpV",
  "key42": "YUa31sEQWfSqABWfGCWnBy684eLAYTBTGohjyokZvMJBL4bB2NfQL48Eyc5WbvkXouXnnz2Z3fEFNKAE1F1jmeT",
  "key43": "4u1TtfZHzR8oYfa1M1ntZU2uJGZHouHktorAoqjBrQQMbFngtXEbeZT8HF4TSKyuaaDkRPA28QZwnSAimnxP4xC6"
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
