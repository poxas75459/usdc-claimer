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
    "4in1MNgNawQz49n8n7GRWbipUP6wwmXNkJZ3pziEjiyjaTKqH5Angug4kYa29jfNVWPj51mJ4EnMt1sEdC2kMeBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2igSAQwTLnYfJyT7SYmpFzuuVpKTkmk2uQNG3D19wWDoAVJHWCPvV4pXxxvCBtf4hsp5DvCh97pFvPDppx7CeRjY",
  "key1": "57XNut16fDCxBXqyW3JQ5Wy7LfYF2hXiB8UFzYuuKUbwnsKWeSWTrdZdiF5tJNLSyD1nd6SX4iq1Dt9JvJD4khCr",
  "key2": "4NqKJ7DY7XYyEA8wvpHJ6AcxDKeKijMBX4CokUmUDxGRu5T5TVUBbVNCBSB27qxXe6uA5syRseK1n6sz6hCkojTN",
  "key3": "5CkBKrPQRcCn7SM8naQe6Hd5BEcVjCJ5gSYdbm2KZcX8Xw11rx8KVPZxfwuPwM6bcF8LapARe1nScBnFpjprqVzD",
  "key4": "5fiFqY2nXRUoWaWWmW49Hr2F2mXF4bN6qJqPJhVJwZ1KKS3g52iutR2jHGdaBnt27GefHHoBC3ovZUuFGENVX1Vg",
  "key5": "2ks2bursrXs2xuzAxRvgQGW4R2WizXu243PLS83Y57PX5Dom4trVTXbsNpvP48wQDe6kNcwQjgo1CWJq5xrjWsCU",
  "key6": "4zyaoMF3NXRSbtqpHvsJhvXmuzNCyvev79i58CrW9rdAURy9DGFLdDpat6gr6cFrsTKBnYzBGz89ceurW7Xix6db",
  "key7": "5vmHKA4KnTitZ5qgYjBpBhCqeeWMbYq5PnCHAmjYmovLR2xMCc3iLDraLD7nCbn2GkthUY4E7Bh38tCsCW65E96F",
  "key8": "41tdLr7jYN5UabSoYW4No2GVozYgBUDCp1dtG3G9rQJ2Z5hrTNpPRV9QJVdHkrNka5CL1mfj3PnXACaGTeimr98R",
  "key9": "4V3e4JbHXksQ5dvHiJ9WMyDoKgZvQz912GF2Ap5ESP1bTHSpEFj3rfgWVGtZ18PzhsbVmCgsG5UEbTMk9mqJoKJF",
  "key10": "UF45vHP2uhQLBu8K37n9Fo9XpTkfG98VjsUfjnSYHuLDiLM2AGvCS9TjUqT5m69sp3yDQ7jzbt4qk43fPo6HJe6",
  "key11": "4A7dSCxSoCq7WhXiSxPCEkc2xMarChoGdTrxkbcWyaNEkv22ccUGJ9ov2dA8FsurHz11tzJr9aRAmh4n98ZEkJSt",
  "key12": "2v4NJTGhqKXSh8BsUT3UzRuF4YTSPy1HReYQbhRHNpWNAdKHtBuZ7iW6iZ717J3JSnW21ReF2X6cTec4beGAyAwk",
  "key13": "5j1khUESxcGwt1MPRVDWD5HbmE1tPvvc67Jed4uJLdA9Vjw8aXXrG4S7jmTy9zhjhS8aJebM1n4zgWc5E8kueRav",
  "key14": "3wsVu26m98SYJGUfsru3GdP9CPNGuip1b1eT4mDED6u4Jk4nP7t8gNMj3EGPripKSpnjM4rrXKkPMqVuAusof1m6",
  "key15": "33J2ouCuY73G8gPyA6aJG5rLh1ZLz5FzJZ9tgQnrDB9sKMLKRa78MqVyhh1itc2ecxWtySiMXUq7TCgSc7RFfSpU",
  "key16": "5JeuruqUVdmKzn4fEw7jQZXeRZF4W8LrnvuPoQkyEGPvmoc9irp4KiPsUo9n1eT4NhXHv71DYKBMAj7XZvktb7Fw",
  "key17": "5JuA2w7dZ7dawmUmio83N453jcPo6rdi95Mm8BVrPhZ9WYvWo1MBd7EWbAKRE7mK5tUVM8QYbuy9VZhpXzURBsBE",
  "key18": "3ffXqJKcijAy6PLe79yVqxRGMGLN9YJfxaAcb38pa7SKuZUSH6pbwxwAtsnKgBvZ1exGYUPAj2qAQuSiUWp56qkL",
  "key19": "3wPReBG4eWRJaEw5qXcff3sKjbgTeioUBgC9obakX5UXtygC5HfL7f2bGUgmwkaLDmxFfvPAZwWWff8G3Su3AvwB",
  "key20": "63eJnVhiFsGKBc4jET9qjjxm6STkmx2PARb7JVvEJvEC5mC4AMm4zxSqmwyRLp5Dn6r3M2ziHRSsPkvbs5uoBbVn",
  "key21": "U3Eka7KfHopPbYj3TpmQTsx6C1iJn5ixVMAbyx145HGDg8JyHizjexdFZtcMbNBQjAZbFoYiGXEWGvZbc8kjuNH",
  "key22": "3V8Zm7G6r43UGDiyCyAW8qtrDkLRrokCxTWjMrAD5LCzzsus1WxapHevk1ThuVEzperzBERyLJmHftBVkm1icnic",
  "key23": "2Qz91uTWQvqVVaVdKAx2u7f4fFmFxSa8ZXEZVE2sEyfm4SGtFFKR1DQnuZqKLNwBVD5NTAk3KpZBR4XuPFXe6d57",
  "key24": "4iKYQg9hpcmobA7UqFqM6k6RGDwBPWXJewJ6H2FASsG6ZP6xccHr4iKBVjt21LEpSs5dm8jXs9aA8b31CA82rbxp",
  "key25": "5yELhSrUXHS9oKThcYo4aZyGD7ZL17QXp2VzBtdLg4hfDngFAN48f27CdeMvTjQr7d8nZtc8qdneD4gWqv4CvZm7",
  "key26": "3pLaRu7bCP4BzNdYFD2QKPR8X1yxHuC8PY8nAnE8emoCZUusB9bWcP4JuWYdec4Jye3vLsFFq1ww1GWoQNqCKovV",
  "key27": "FxcQvNnvBszAtDiebweNe8XMQHg7b8CuasMMWRdNhk9Bp46JqTnx74joUGxH3rqJGBk1nzHhBjnxHXNsaf7q5Ek",
  "key28": "nYmEoEaFCkPQN5Y6jS4oJGA4K6M5TUMB5KqYgMgMvKgZKJVwZzyq56o3zzNGaDzD6J7yiNvaJxhcYzKABqsrCz5",
  "key29": "4jEgU4PPu93cgNfoNm2Z3T585e3r2PWEHUCFdngB7a3pcLD1dZEbTUBdweyMVpqdGM8iTT843pCHHMXZjYRhJhq6",
  "key30": "218efus9RssSi93Rssyaq5c98GAGbLpsfqoDNLd1vQkY27kmPk9BMV59PQSiwJ7EUvBcbSf9SB32HtJhDZDg7UGG",
  "key31": "2dgf5WPfexGFgwx3huAN2CYkxbDhEb4Xx1FzCgVnJ6HuuwfFi5PxC2APbwBfy8mr1prFud9Z9owheUn8vsUkWQKm",
  "key32": "3RDv52PeRWAoQ1Wmrj1wMXVbqkkoKhnYv3ocQmx3rfee3uAEXT16yuppipjRQBz3ndNs9hTGuGLeZ2LumTiPr59b",
  "key33": "2fi7g3inyqoqQJc133jZtFAsJXaDgcs17PaVVVb5D1u7zT6AESTkE9EtW8HZmLzL8JxdqpY7FwzPvqXFGrdoWikA",
  "key34": "3cHkCcFvMuVPN7FgNfgDmvYWckzpvmp23emJGZhUtCcYd1fsMwym269Pf4Ltup4owZuAg13rEyDyyaaNfG1RyZ7G",
  "key35": "3fvD6XYDbSDoQbubY3vdBHjCgAw8YirhPKE4kQ1Tt5BRnsvcXHBMxB9KsfY1XUm84Zyiq6D3GWMjKJsA6gNJKUGM",
  "key36": "3cpz7fvRXH6ELxLK2yxLkwwRJAu2SdA9Y25QE87LRUD11Lx8z9C9t1PPN7mqy9r4UVgenq9JcVhro6mmxvVLjFqy",
  "key37": "4jtPBasvCDWY5d9oZDDoprWKbH2Go5QQKDDJD5EYWnEneCeWZvg4ewQwKSrGpwi58PzdDf1x4Au4LukfK5E3sK9X",
  "key38": "51MhcTzT7WtWyxnY1zT3ddUdSMcdnm353mSS6SfhmbjJkAL5ugAaaPeSrbTbZEBi5ZFKTvDWaLcXtSgGi9yZ8ChS",
  "key39": "52gEYkhZyRaCXPUEsN8dMgdvD8CehVZBP6zYutSmBKwAfyMYQM7waihhg9cTdtqYhD5uMVtiiVtAhL9jfGYv6xRQ",
  "key40": "3w3JebH8F6GakfNzBFVPMavKjotgy5E4AwxE4SQ7gmytncKnX4E1QgkEiDKnhoUhWYeCFGVWyP5nv5RiorvfQ8j5",
  "key41": "56BH8nCg6WjdDcPN5p2zkU92g69XbM7FdPQdyw9PogShbAH8KL32WSDJvoJnHA4Vh6f7kCwbqRDCkjQ4q3UPAQDZ",
  "key42": "41zBioHmrMmzjDhfagQ927LvSaSBzuYecoFb5fBCPziMWLHMvkZt9Ugjm2bCxEG1445g8pjyvjpdCybZwVv8f6wi",
  "key43": "2YBVERxy5YMtQWwuu7EELS6C3FkSU5dS98WBfDNAwk7uoBUfhdD5Phf9WLCC9gbSowGXGoHTVJDbGHPK2j7JvWxr",
  "key44": "21kfMgoy4UpdRavcHGgtnyrTLCHC4zThAQxJ9VYWeB3UiyXJq7w3uZCYmxCfxGfM99UzYtXsPiFjjLEZxLhEvoQ7"
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
