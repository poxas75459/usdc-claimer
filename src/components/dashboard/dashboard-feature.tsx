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
    "KoYPo5SNu8bXuwHKoUFFm5MMhSXcHQpTmNcwMZJgLBcpuAs7exkaScFFmKipfARo4BqS6GokdUsw43RG3QcmeXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KM56df2hbVVw8KW4vkPMqJW6zd7jfBu6eFpvvRc2DRVTaAqC6UNyXZ9BAEgHr9SNPmo17Stc4UswFFhuN3iUjUV",
  "key1": "28Jre1iZBJfFi5Tm9twrCEToaJi1vd76C2QyNR7F74shjt1BPxs3A4iVL5jfxFuyNkEiFqex78Umtf3RQxM6eSFG",
  "key2": "23Yf8jpXZCKyK1dUTWyycB7R1ZjHQGcNiNMkxeBUqhNQ9W6oHUYdVCczeUYrkKebfeLAxeXzb9FocnT4bxQtu36d",
  "key3": "4oQLjwUWx32SKBgDLfD5c1uQYDDSqHgi6oHXyVpVDVeQBnM3hvcj7nwKd8JMhsUnAhMVn3GjTHosmBeQH9UDCC4U",
  "key4": "L2r3gonSq5cKLRV2LMmG9mtDS9nevziZjv8sz12rN58xYop6JvyQ3rVQwSZE5cscxjDfgeCnbbdHdPPCnhGfmJj",
  "key5": "2KvZK4GCfLpNZ214LkJtAAHrpRaSnYJn2as65aPkAZ6oyCcgotWyExpqR8qhZBghN9x1tkCygmcszfw9rpFAq5rF",
  "key6": "2d8J4PnADhFU2PXCdzguibqBLpStB63Tx6mceQNu39T1hHaiKeGcn22RSaCQvoFDuprpcQyWn23A2h7xq6QfL199",
  "key7": "5A8UrouHWxcJytk1LsHHkcnw7NFiZHEpFFtQFZNp9SMier36b9k1Tpv7cXcZynpj2C3iydBvKdjpijLh4yzxSw9m",
  "key8": "4DtUfw5FZLM5cttg63mfMwW9WaG4AdRmf7WNSytVf1tC1SyF8tpJ3buP6xqDGUQx8pWPEcptmjbGqmgipSK3wb1n",
  "key9": "3ookJU7MiAfrT6dvL7q11ovBS7Fno3N7hmBhUqXrb2iEbz8dPRJjjPqoPkQ5uVTdpNRCPaUWVBXmqFpnBe6SJFhX",
  "key10": "62vz9rexoGtTjYEc6RqeNeYDhTgojfJNKYJLgFBfX47siyBnnW1393KpJhTNwXCrBxuPcEzBNqPLdZXj667Fcr4",
  "key11": "5SNmuzGdtwZ1VEEdpyqmUe4cZiFCEKLdYi2afFYJBG5yGU7QQn9FxStzbTDnnLrF7rtaZUCwGr8fRiLBwm1N82og",
  "key12": "2pXuoH3A1yY4SdsPiBBozsZWRrrdvpCbCz5JJHkbGuvSCD3YnpdWsXr5srPTrc7rNXdhPYeQDAb2r3XdBFdoLMHT",
  "key13": "3iuRpS7HRKJUpEe726dkB1xRUkKDsVKcfc2rXhrgXFnow6M1txwYVrQRZaCPVBHeULFT1sPd7XtNyFCfg4xusrG2",
  "key14": "24phcf4Nyb1n4cL2WiXnfRSuFdajQr86gNchhtSvp61FsVe7dhoJPLemRAym24g22VdNoheM5bGEavN3SsMSAmGG",
  "key15": "2KNNqPm5ArHGEndjyZvGwFS2bSf4EWoscSoViWbFCSBpgPNnSxDVijB8VRmNes6ALeWDeY6mi9erEu7b3Lhtv6gD",
  "key16": "2f826XLzcThBDkXdH1QMVUTzZEZqVJAoBPWHrVPY94UjHj2XR5uPhW9dvW6HcYaaDDmCYG8qTuxD2nEFsYWQVFJP",
  "key17": "2e2i1AeU4LGuDAibqU3QxMv6tzgdJE3mjec9F1bLyMwyNEfZ3HvstZoDCfDK5PD6jHkTqoqiqC8ZEyoSRGtNN9e6",
  "key18": "VnMY5XMtLxfMYpL5uBUpBNFvvkaZKNDMNEWXWZrhx4VpP1QbMkJHsMf8S2R73L2jzSg2P76QBmu4sPznAYo2rFT",
  "key19": "2JSTYVLn6EsH2Lg8b5ZtQKmGhVk3xvdJVWgdb7uSGrw89unF2CUBcBvnXnrH1UdPwRNGXh9edqcZVN5uyfRiQ6Pq",
  "key20": "2VsiNP8ZRuVbD1DRH8K6WbqQXQVUHhnqUbsbASYPp1bjEB5FATjAE1fJg9NqSZSBH5JojrBQ1JZrvtsqNAhFK2aQ",
  "key21": "3yoZuxyZ5c47Fa8pR6UxFrsvGYjH3mPdfZ4FTk1yvxcHNdKTM3vPUgwPxKB4CRqcg38qNrZ8mcs4zaa9e8Z9Zw5D",
  "key22": "2ipKchB8uTuCZZbuVs7YDMCk6Lvhv7M9A4oA5LpxXhmui6gdUCnv3or4vHQvNf22RQWRPfutGATujUkySjYfpbzo",
  "key23": "24xHWrNk89ztsr84KdJGzw4dMrosvVqm4A9uwhAWLaeW8D4Pyo4qQintT6S73kYh94SVakCQGTCzKsnMvGiicXgh",
  "key24": "4DWDhFjBy1vRvncgzH6quAHUijdnoer4bFh1niRJAE6BUWSXh9S5agubiizi7Xv2DYWaNqJGYFXbz25KcpoNT3ya",
  "key25": "2PuUh3va2bYTd2eyJXCEGz2yjuVaGkxy72pLaMBXFK1WCquH1JuhkbsAtAXfrtVxvHtGpBwwfduWxxEQ5fyNVGm9",
  "key26": "3ESAngzywVPy931hekBwvzobqHGVBqB5K2zzsAPUUjSmiBh5xhuQGehPNy7NMpJzLdVJXhszoGVwSK1HSQnBo9vR",
  "key27": "4toxjWFJdFvFcdSfTZFVPDHKXAGreoqoui5nFk5UqjVphVRWP2riYKknNnSF46WzCyuHgm3bqAdThE4zmP7tHTE",
  "key28": "5drj8EQH23ZJz63SJ2JzUT8N7gzvKmBA5aTUt2miUFTbePcRaA557wbM6aVDvC8sk8MpX5D8M5WKoAqrn2kbmE14",
  "key29": "3fpmvcygP2MQSctzpiKiuyiv7caucuhvoWVc28auBqCVqXgSUBT7yjKawjdb9bTqogr7miDd3KqZBpz8KYPW9ExS",
  "key30": "3EdJ6a1FMXG8UkMY2dozy1oVivdm9Jagoqae1kQjbZGoCKZfies5vwH2hgWwZsQXZcaY26wdriYL6BmNfkftyD3v",
  "key31": "5QSLS7HTgs9cxQcaMeLp6x5xySCEZDWvhwwRytpJzt8v1JGPRdDNZokbHfHFZR7rPD9gVYBY8i5fGSkJTXFunBow",
  "key32": "2DEHaztAVHtkcMW2YmQpxdEt1yKZQBEHjFWoQPnk7gwRsMBGHyo3gZxwGCdMySNnFbaKtD9Lur3tJTrTRNiVim7g",
  "key33": "2njASPgKAjudAWQLRaVGQBBhFAeckNjLDP7kwStif3vNG5dT1HiFLX9CuRMdbr4nJkuzSbNbqR7KjkRimCdguguS",
  "key34": "24XzZxMLRRnoU7ZDHkK7rTHvNa8c5DY6VVU8h79GMxBjiioJwChGFefKhcs7BBs6PMHgsgmwdJqPhJ8X43KnW9xr",
  "key35": "48YT2ZpVgHxbfPEhoNGg5eicGRNMBMDXdbuUBiV9XzYZU8BrEANdq3ALJzrr8bwejAWEXvKHDNSRU3BGU36oyJS1",
  "key36": "3YzTnGuMbQVMqLrPVppFZrPL5Sebwj2JJQWsSS8PWxapqpdoA6Lo2q2yUjXMPf2nVQWPNBqYzDAf3kGMyHFD9i8d",
  "key37": "5QnLkkysMD7dDwkniPmKwJNYg8YkKb78yge3VK7en3x6Jf6hkkSSJRXW6QtygiZp7gKU9AifRbQvJDJjXCVMYUe3",
  "key38": "2PKibEuKCFZChmrD2Wx5CeAf8WSzy3T41wd6ULALJXXz67An5tuKRUffh1bWhAX9Mkn2BudRouNtPEgmcB7EKgun",
  "key39": "3BH9fVTCNGBsPHWneGWNQeGLgLFqcUw2AJVzWK5wJqBMNwhvbuVi9tnzTuN5kEwcxMLRKVr1jEomhnsrwwsopq8p",
  "key40": "5nVv14sWnRxE2nVGW4u8enypBK15HRZtw2sshHBsxxD3YHkZpDEWqm1Kg9kJ7sUYrB41A4ZvSdJ8m5rwxPVTc4zD",
  "key41": "5VJit9jir2wzMrZDgDbjnuQmm94zJesoQ9FMy9kptwaQduavVscqKLkyEu4vJbebPsBf9eQLczbF1eLMrifr3PVt",
  "key42": "5YLrGjVJfW5C2sjEiohW3bQjoQNd9AGcScxE6HtMkv7PZxRS2U1a1XD7ksQjQpmdfTy3tREU91cppYyVjoo3rq35",
  "key43": "2aFvYxrzJYK4Q2rJ9cRgvpGY6V1fBuDSj135XQvxVBL9TkndTWBcegoPCbg5vuVUS6eNvMiLFVhyioBmiERs4PjK",
  "key44": "1FYfvS9FsvLwkX8PrvWkCANrDPKjvqz4FqpAU5WNoVLRjaoc7KiuAvPtZhcFGoCE1Ym6q4FFGWaDvUxsHUwdHYR",
  "key45": "3Q7JDDy2Ha6JRU4irwufFmuHb9duN49f6JsQAMUqwjaRVgmExT2c6ULBwfZw8yjVWNsw6hCCZE9kikpTDcj2CtJj",
  "key46": "4M6hoVA3VMMJqxRhAaQNxxT95he3XDLy2j1Ke4s56vhqxThuN6N6yaH1JCDDSFjk9bNj8MYCddRLKU9mjujrmtKR"
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
