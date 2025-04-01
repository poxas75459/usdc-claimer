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
    "5XFFKD7ZvJA4wZqXCKXAhfDfYMvAdp4QJPpyBeXRdKLMEKuRNUFN6JZ8FxHWPXtpr5HxzMeYztcpKvfH16TukZW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53YyWieMbrFK78nRcKdv22twQwajSnVb7fcC7U5LaYi51vEfsxzijgbBX9kopEpm21955jvHYbY3RbbzdufMjUfT",
  "key1": "3niTB6HoyE5nBoYzRRmavTiJbPSZGiy33rMkScyA1WQCMpa2gu5NSHN7rALLKqHvfdE5uxzzpdxKd7t5f7dmcTA3",
  "key2": "2KMZF4Yy1EXp7ZEHwrfVPrwYzoRMvy3GwihH1qXz5h6gLba6RPG6V5dZ5Ms7Xr7jY5kAzSqGyjDRN7s9YeeR23kX",
  "key3": "5VQLxheactEhNGQEELj8S54nC1DXNKECLntC8XmkxSx92PPGArTB3W5cUiCxqaydHZXufP49oiTguNJzEmJxeuDS",
  "key4": "2Z76NSGW95e2MLLFBhZYkYxGLc6bwM6XQ62tTXizkA3vNG8gEXjJvAZhVHyFgukvaMvxdSstjnB6DTftXQXADStt",
  "key5": "2rLvLyUoJYWpx5N2oWFML8emnkjNHvTodwLE3NpZcjveNgsFkRYakyDAnhcoodS2tUSnZc8ZrnmUjpbHUN7xHBD1",
  "key6": "2biipj2ewzCBBYxq7spmU98vkDUEptF3cGNSnuSqSQB5xiv7KnueSXSYAyoHCrdpwrHCy7QwXyxor6XSLQvqFFU",
  "key7": "5TMYVg6KceptPNESAm2ZNrv159yPVVRabuXDTokejWgY5TaYsV49TQJTKWE3wFJ26WXw8YvEoauxPyNgEhJxQ9Nq",
  "key8": "3xgVb5WTNnXYjRuz1YCt5ruuG8658tkKfJtajAsht2ekj4esLwAfFEsfN44wWp97ppKZEvBcfCy7sos9zXciXxGn",
  "key9": "22YmhoPpq7jwb86wZXKGWKgwM4gsUf2gmXenGa1fwQihbdhnrxg5obCs1j6QGhhpCf9u3yWyRYbC4PAP2m4qkoRq",
  "key10": "xuSkVHkk1FunnnwEqVYDCEiwwWWxPVgMULKVEMWsDS6WBguoWa3Bh3kU8SvTj9YhenpNSjgXBR391rrTXcoLL5K",
  "key11": "3Mvwcw7uYXLaitZu4egv8i52ZfGmb6y7jYsUk7jzmr7RRnE49AfyA57VUKeCtZXupyfSycAkLjGJSAsVGnNPPoQV",
  "key12": "4NwoL2wtUZLkaeXxYveVKGnM1yGDFoGwBnH9xYnA6r3RPr295Q6UxJdcUm2yB7pYfeVkLybtJLehcPfrNUwho3wg",
  "key13": "2UGtyXgyQTRTQ72TkCN41dGhzcNdT2AffMbZ1Mk4ECbnEV3xEjyfh75r8R2GQVBKQCNU6b23HPgiXFh8bcrg4iAJ",
  "key14": "32SfjhHB1NVT2dX2YuZKWKHM1c2BQwYG3QGJz8MrJuAr63Bw7KUXJu5WsEhBTf9YmwxuwrrYABFZ3ReVjZbvYvam",
  "key15": "stRyEXSpP9GoTfAMuMaDvWJY8w35YiiKYdV7rykwYH6VHrnfigMxsMWntQ5Z8KyBgc3MFoXJp3fBBst2p7eQ3e6",
  "key16": "G92Q4rGx7QJqU4bA3nNLSMdbwpjX4ZJBhoyojtBeubGpTiMNeJzzawu4bvzA61eEmDeHTYcTHS2PT7dVbpcENTs",
  "key17": "25UV2Kv1LPbNsEAEap9ppsqU16yFuL5oHRhCf6yi6Tus4Z3tw2H8e5QjeEQjPaNBrACRB3FFoMiKg2Y7W4obp8V2",
  "key18": "5Fd8Lokf2AkCKFtewv8xmJgAWBU2FC2PKzjhqADiAwaMzUCDxmVp4w4xREPz6NEYNUKP7jmRV2YBuwQW3s265rWC",
  "key19": "3iuErZSyA2G9Apgt31ohnRNRnoNPcQNmJ17V7dca3v2NjUVjEEPKquwY8EYpX6FMzcAz7URd5VTCG9x3uq297hL",
  "key20": "4hxyh16s52jnFDtxuR7YTZZVoSQrTDzHYVs7rpH3mFeY8YSpGnxzidU49DmjCbex95B6E8rmwLgMiX2gxG93WaKe",
  "key21": "4Jzkvi3iAQP5Bg4CWQb444VYJ9MtkL9gGe2Cw6v1sEZZorTqyZc1y2CLQhUSYekYAPGJkpCEmmfv1hAtLkt9LMxj",
  "key22": "54xaQw4ZfgijkpmtWxUJCtio2dmucCa8LdKkEyM3w8tyyq7cv4NzXxFoZT8yggVrBsA2TNSRpyPqcwnw94P3DwfN",
  "key23": "2zmX6Qjr5ePSAoBJtedVHn1bod75n6tZZEiq5sK8vc1YC8MoHSNSkeAqb3Qk2NVbMwA57SLbXUScFXkPGPYZvg47",
  "key24": "ABM3y9AoiRNv97vJnGS7uX6pJjB757efeTWWj6sDxVRxmSv5DxaKqR6F6359Sbv1M8ZcqeRBqMGZv5eAzzBrKiV",
  "key25": "5eH7fmQRccJovRne4xwmnrR5VfEsMUhNs74coU5N9e88zYuD3DUWMsNXdV4TprDegnkV8xSuSg7BY6VrKZreCHz7",
  "key26": "4dSLmkuzccpYTrEaL9XqLkmtjm37t4EkFZYk4a1D3ifmfFv9zv8n2W5xYeGSy3duLgkKT8kXdGqicBr8TCUbuuZG",
  "key27": "5zf6JbXSz6eZgwgenK3dZWth4ePYnWLjSLtL1oFC4LwZ6Vp7x9x8YgEmx17Tqg5mbakyDrs4qSnWfi1ohbjDAPDw",
  "key28": "5M2DAPVcsvXaMRqWL2iypnEAHFX8BMyqrtDuRvj4DRpkeJsh5qyh6GdAKt2z4u6vYP79DkYAqjCR4xNjBG8ftN3r",
  "key29": "LDsqF2WuoKNukxm2YkcYPWcf2wN2imeyQj3bb4Q7M5tS35ow22pqbcUovkbgmk8xwz4rQhCFaL71pPJ8pZLgjHw",
  "key30": "36S6FJF1FWdxGhRKMnSgP3oXU4xM5TE6PiUuesmu32CkbG9NMFC5Cu1Kib5UZNudke6348GJ3phbprepVHroMGJQ",
  "key31": "2dedecYHD6HeaEJNZ77P7tyKwG35nwJKJeTFF8RqsvSHdjdvpbE852AcUo9rFbpMCXfhiEsBdhDJg4AmfCGM8Kio",
  "key32": "K8H8gZ1w2S1AjPsCuQU8hTPkV7MBHdcxCXgX8NoMztsj1q2B4DMqfkyF1crDPSaGf97jcnEUzmDavpjW1mEsxqN",
  "key33": "2gruab2yMdHa46BZLeT2fd2ZpSRxyT6xuwB8jEXjZxhrS9ttDWKAk9nxJU9vekJd8cy2U9eTAMhcxiqbD3m3QqbF",
  "key34": "48Szd69WhgEdENSggjthVLtEAnQPnB2goyEXcpMuMRhZ7v9mcgg5tuZRkBE12PSfVXnRPJgZE7p89Sc8sTEGeBxS",
  "key35": "2NTNuWr8w3dkWinnZtynHsW37tPdjfaGnhBn2JaPcu5qz1Xv61xjXRQse4CwtEAxJn6wiVX3SJmxWa2db1YrqZNP",
  "key36": "279m5gnqh4WCtaxjcr64DLLKDzBqpokdbeEMf3ENaXWsSpkdftDgph7VnuafMymsq1tFefbEvSDh9WhJTE5y4ys8",
  "key37": "w6GbVHzWcyEGEEzfF57jsgDXpocdZuZ4vFufiRJMNHg4B36yB7PDqzKdUDY3WUxhdBnKn2hjWoDW7udizbK11sq",
  "key38": "4VmU7KyqhEombM1sz1hT99zzs6MRPToQfZskJbCkm7B9ha6v64Ww6hdioaMknte1rwkfk2RsLtfk7BpjKrDRTCwS",
  "key39": "5eeuYQAzr8CTFPneFnyg4r5EmJRbuuEeUEH34kQvoApKkDAcEKaqUkjx3kfuqZHaBWsaaNeeQvWxy4CPdseD2tYD",
  "key40": "64rxhQMsGaVNn7geiJQXCERFZB5L9Q9bX2YhPWkXNvZ7degzJC3QtuWkZ2W8cv7fAC2WVvfH4So9CjSWccwpxqzG",
  "key41": "2zNrC7jE35NzqRxJTSwkbjcFXjoFY2htFW7TetqLCdeJeoj7ZHqL93uoNj9gdFMdWRdzGYXEZx1DzefUmfEKdvbe",
  "key42": "48RPW7ujuW8sBGtuozY7xyYA2FFDzyXtVoiL1jGhKgwNrGWmuk2Mr6zTySLvvPwE8YPCBMA8QddiqTf4oH52tmpv",
  "key43": "SZVqSd2k935Dwf2DxFB8vCpk66vQtDhnNgMXZemVmm4LCQGy26VGSLgNBc9wpPNH9BU21eFioZSnrCyhXk2j3q4",
  "key44": "5wGjfb8G1dp8TmWw5k5MJR3oet4q6T5dkdsRKNhBbuACJTifV2TWL1sA5beiukJhBA5zDmB8YVY7whRvBcLjXX3g",
  "key45": "2F4La8ryRqcrJZNYmM1QUNPSkVqgTxtcu5Keyr5YihmKD2FbsfrCkHYRbNT9TX5GpuKUMFZ41P9yBBXvfq3BBMm4",
  "key46": "2jzLuytoTJmp7jmWLrF2qY7AovYU53XPfdcKpUY6o3cct6QPRbYSYndAzRcrBijoZhFqL93ojSyHNzmX6KVQHTkH"
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
