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
    "2eyc9i9RoY3xNQXELux6NYM2jiPQVEbkEu3RiDXk7rGaqrnszoNBVcoXgxVinGvvxPpNi8ZXqdxSGUaWMrrc85g2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hixr3XBCVjbLy1HuQm2QAcJYg3hNgDmLWeoCy9BXv7dJkd9E9NtoiAGUPnnRevwXsqsArDga4bcfu5YxXDURkUy",
  "key1": "W2PdXzDNuJq6erGeir9tW9mifVZFS3q81v7kNfMuXiQiYyUBzK1ryve1wNBfrxq9it6EU6qtraBD7fNKM8obbqo",
  "key2": "wDLrhjnHeyAdYJsyYsVXF2CbitUCTXRyXWxGZnwbvGS176eVNMtRamUkP1DxwXxKxAduqjbnKLScA86ikiL1VEu",
  "key3": "47dnPy41S8qYVmC3ziT9ob6BLNmr8UprkkKpsd2Kbad2v1Bo2mnomTpmaZpsDXxaiKK8jfpiw13v3M5Y1ZnGcHQa",
  "key4": "36Fkh5acXoq8TcS1T457sNjYKznvPZy5USoYN8WtCjPAQb8wX8ZYZ8w9J5AzJ87k2iRF4xsQQLiX1fbjaAzdHPuf",
  "key5": "4WJzdugjZScQj7DJ9NUbTxaBa4DdJAz5phS51QtXvLTeruCVLEa1eYkY7FXjM8orVkSXnMC2DRAVtFX8FpM4hi4f",
  "key6": "4mLUWUMo5fDehFfKZ5GjVnD4VZjx78eiQy52SftoP8EFKvwfFfNBiexvXRrGmwk71ESsFpiaU6ZpWrZEXCh2gKim",
  "key7": "2Andm6ZMoUCt2jZb7hpYb5YJhx6DWLP3FrmGrAqyphzGFxfsu4jp9r7GR1GgrENqQTpN8Yk6YHe9dcPxaQ5VZ8rW",
  "key8": "5Lo3Rv4TCZHb6SjCAxNjF89uQpdqbzL4Fv6qLPU1nZymp2Eg1MV9ikA4x7K7TsSscCDjM89PQPAvcxCktz8g5r6h",
  "key9": "2WXDWxSbj4KTetPDAtoQbjrHuYWkaAL92LjY4C7A5TJ5NcAAczkuqXXLret9j1LgoaNgZeiz4JnFuVTR93G9747p",
  "key10": "5VBXefcNkvNNAqGBgWaUqdvVJwhmetALuTP2iTme64Xu6uFMPxu1NNuwpeuHXDhDKMJBR6Je8QnhPFK9UY8Tdp35",
  "key11": "KYVYhuQm3nzAtnoS3E8HpJjSNZWDkRTeag68qXoa4dZg8dbsvsrrqMUgPy3MxDyo7T4mYBto9ipP2KL3SNVL8WM",
  "key12": "4cBWkKnf5aGJU9F7r3f9ZH839sYT5RKcbZVrp6ribFPCinjFkxVbtd4jUgQ7dfdzyT4fzPF34r8ptHS5PAACK715",
  "key13": "2gApMNAUrUzYQX1sCYdSx9j1M9zh1kAED4LYNrSjtuU6nxZFQNBj9PjAvUtGpTAmX44MrhBk16hzAZoMqJvvXoxR",
  "key14": "51qRi4i3N9CHiVkd9kUHG96ErwVhYm9sEoBMkcqSDvC5feyMxzXXc2XRrkMTn3AQ1oexDcApJTesncz8US4xJiJk",
  "key15": "2CFRSNvJ4BeFMhJzaNY3zw3QLyPEJDv9Kv9FCv822idsKcpcdbb3rcnbcKkvsCUtbjTwc4CDSf7ycTpwRP5fx4Ks",
  "key16": "4252F5feW4bjmSmXP4Ab71MKogAi4Nc5mDFiQSdcEJ84LZsbU7WxNVEcMWnHPy5eZzXMLbUisq73FSxw6ZBTGHvB",
  "key17": "4wycf48R2RZTb65x2XUZ81FSDSRoHxmfhgAuEGftypNJwoMhosYDCTVJa1TAXcZqo7BvjKVr7UrYFN29McYZhV3V",
  "key18": "4ix9Fed5seVHUjiEqcFeMNRm4Pjw9aQNVoCBLwARt2WMBU7VRP1CiVSjat7cqTXMWDAA9MKCQ5JyYia8v7nryGRP",
  "key19": "33yoZs2tHgYLLeJ8RCFv8fUu6tyftvQ5MtBcMoGX6NccR6M5CA5ZxU44jyFkT8L3f3ryUaEkAhPmTqH6za1dEDRd",
  "key20": "3H2isaL8n94E3X9WZuAHZUmixEuBDZdVC7at7x4TcejkKweXwBfshnyZ6wh5aHYaQUBQtSfT138N7VvvqdVcWZkA",
  "key21": "28KvzchtMVzbrjASgR1wtAqEouh86VU524yiLvGXWLPiRAhFsUmDQEwKCTYjg2W6Ufpk5Su3ZzriqakNnEygkBGT",
  "key22": "4kU1gLDogojJyJXesobWsg7CZr3dbxwxiLqSSHPSGKPyr3M1k8JpEtQZawJB7xEeZ8LP86HCLP4BVXfkhVuMoxPY",
  "key23": "5fG1Phqfd7bmSqAcNTNyijMfGdMLDxgVZkYHJaRtDpcde4mRdAdcmtMefnoJqgQpAwxCGch2cDxu491Xq1sGFyqk",
  "key24": "4NjxDFA484md17SHnTRqMdHW5sjXUPkGwsv37RwxRTe5Ebh9DeMY6QLi23whjgc7xMBFc8qVFT353e1wgxjUZNW4",
  "key25": "3BDBFriGUwUULgy7eJbagz6bvQo9qzbRymJJxRkSfYEjQD9ZGXUpgL15myP2S8Hc7N7NRZWgPj8UVfpTx7AifYzW",
  "key26": "3L3uk6oXXRdM5CGu9RUaRHwLPovUaCqmW777v7SvLNfCDroPRYCBRYomkxmL8pXvQe8Lv9hZFwz4ceuAQZTKDL6m",
  "key27": "54jSHA2nvBGxzwBXoUtmhzpvyGmcGnqYstq417DVBVLsdipkLpJ3MLvpa9zBGvforRJfm4vwjrMyQon3zVEL1XrV",
  "key28": "4zSGDbWKwF8bNyuBVMssRitKUUMzZgdEAYrV6hmUs4952GhaDKXRSH91vhDWNfks1CUYRwTxB6ZkLeh2TXunXoPv",
  "key29": "41d4nb8pTV4XttZA8QWWpMqdBbUxLFR4CJRK2Y6JfLgBjCgaCQ666p8vfAzd1KVPNytRtaRQ8fxasiXce5QaE8Q9",
  "key30": "5nctjvGw8BxvnaL5Uy5XgLjWowW4tRSftQnWKmmxKbMGANfabYkzENGifr52K7d8tYbS9ALL1mLrjKeYTCR2yvq6",
  "key31": "SBGiyDcUJfbsEn46U8rPQERM9K9z5Kjeq7tQz8caFLGwhJLwNaSsnQB55r6sg3VmmsAHtEcDH15YaY9aaSrUHFp",
  "key32": "3CnDHsHpQLBftC9LpdPD5wStL74xoLaNMzorBmpkHe5BNTPn9fFjVY6QBiAkGVD7qfyYpcGgiT7xK8KkCUb61tjq",
  "key33": "5NbWuvQtx9dBBL6USE4qB7q3RG7TX2wiaGjziZsUJirK7ym2BMF6Gpgopqy6XxPQPK3vSrvTZceAFEvrJ2t3VHMZ",
  "key34": "3c7bWZLe95XWbTQybVQaCjhdsQaN19ot3KNwo3tX9o9oMcyJuuZQ17m7FJmNKMUMLd9AryMzmBogmdzXzs5X5S6z",
  "key35": "3Ko2GD9D99sd3arfM3refwwA2keM9iN8K7wHvA71BUkMiNegUKVNFgnFAhkcTQdEnpViAfXXjTVJM7g9uDz2bhrY",
  "key36": "2RhrgJQLw86HEwBZ1DNdeE6VP5WUg4QPUn4A8CYtPLuVTfs12WtfsTDo1314ZcpEBPuRCj7e3YBhnbCbLMkdeMBL",
  "key37": "52NumtRhuTLzmbkEKswQ3KEafKP2hxhusTZYuWgj9vweUTRSxMy3keJbb69wtf4W5dE21xj2AgC8a2ZUkgkGEu9Q",
  "key38": "fQbBGPZkjEDKEdGh1YpTm1xSXRm3evAZLr7kD3gwbotzxZHmvDUDrbPGagNzgStbKGsKHqujapmfXSgEoiuEnEA",
  "key39": "5Zy5JythqvWv6zhRdbW1DfxWPXSwcquJWXYdRWuQK6dWMQ559AYRy4EUG3HHT6Q8pvG2no5fdt1T8jC2eHV1b95D",
  "key40": "3yDffBH45RLsAjUECTSmWEukCeKJXwTN2M4z5aZouusNH7G9EiGwBnAkBuAJUcnxX9QWv3wYkBZiS3oeG1Xu4NEt",
  "key41": "qHvqEnNc1M1NfEisdCiNg1AuPcVobrUXVSZ83ZeiaqGY5avivYfqDwE9Eu1Gnk2NcvUrfR7QjeZyqH8HQ6N4ugw",
  "key42": "494dvdLRtm5rpAoaEDRxvQ3zxmEDZ79Csk3LbgtEnLF8rhpDuqSjSd2hsPpGWbsgahxgPfZyzoQZW5mQ11wR6vd9",
  "key43": "2sJcYKiFad14RrtmKGiUddTsvTFLdQYeHFsAFtXJMCFynXzfoAjSDgdydCQf7zwKdbiBwdGFCaN5Jq9T2p4JufqA",
  "key44": "21NUAX9mGfy46ezzvms5xqXUJAWsjNYzYAxkPgeSv8g4ZXzobYJ3NbM6mZU31DBvbSSb5ps5Hwv8P81JJMYwrBwN"
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
