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
    "4iS9qwqtTKdHS6c1co3hDH5jS2q4ATw5c2h9D5utdmpF2bnx8tA27omJZzi1Noz6UMXkVm6JP5oVkCPZca3FfUTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qn89p1vn7ZpTQVr96Sdme9W45jV1Y2CBxFkztSZtXZHz56sQGiwo8RdB93iALqscLaL2XiaHq5uCRbAFNnjPNCw",
  "key1": "5T6iFJb4QvzJFv7vLAbsLgnsqCbYpCHSnZUE6MM9HxeWQQmJcSqGx1ivTanGb6fntoN2nXYjSsVtfGxNNR3hE3hB",
  "key2": "4H6T5BA2X18E5h2Rx9YyMzHsCBFDrDU3gWSdFjxNBfMiaXTT1pj6vdC4ENf1sgpPaGTr2ab3XKdSwVtwA3XiLvNB",
  "key3": "wAiyiWa8QcF4pT5wstMr4cTVGMy8Z6hJNdcTYmGoTiiHCrzpRhds4ad8Evhw3Bbbo6WRXHxEf3o1B969a9rFQPs",
  "key4": "L9p4Y945sBhZu4GNXWJe6LtT29DmsAqYWvEd6XcM8j8ccZua3tbp4MuJRohkFWUrtFKiggXA2P14EtnjUBNuhN4",
  "key5": "5drhzFsj9mqW19aKHsfdHGv7KQSFM3e8GgcrEhbJBrb3oxEqtoNQsVvwcFJhwdVQCkQJmegKxv4sdabMdDniNqV",
  "key6": "2NtRLF5KRiNDFy6kpgyfL1CF7xzBsvAamSuJoXdM7esD5zsLvP7w2q8bDjcDqR5i8dGh8fGmoyhsZGTa7aNaz4Bg",
  "key7": "37PpRtqFJGb1hBqos8UkNKxe794PQPYEYJhhoFR621zrsPMmW8LN16M6zwdnDvPLPv4vNTaXrTBSnTvJP8wW5SaR",
  "key8": "46L3fekFK4sKm55f6aNsFH9MeyVdHBXLDGyCmHEcsGRvB1cfEwbkwoa1744nfyDnQL9bAfgDttLBS483bfAQZqmv",
  "key9": "5THorn69QpmJcZ6bvNVFX4Fq23A5Jx4jWkhDBqcgsbRYDr7BFTeXF4WDmyDR13JrCCHeqUfmh59aMZYQnAtgDnaB",
  "key10": "1UxpDRbia3QL8ZzqYmjPX3MzNxXGUCDvjEGoqKYuyLS3yJaKxYeK6vzYwsSGtM38Cms5erbg77qSTh2qx5Tz3yy",
  "key11": "316L2CwXiLNXUBaFd6MuCApwbtyRjwDX7cAAQCPrYF3ucfydhDPfWzWWnZweenQ1QKjRoY1PZHKXsoh3ir3oyx9r",
  "key12": "5AhuqzXq4BQsD32iQJvEyjuobyKf435KPiLmhqwjmvG2VmcEn8qEbtepgvgSzh99koAqVajodbY9K28TYSzukCHB",
  "key13": "38As5xdDFUQhoJLcN1dhkgyV7drNJr5WFtHQToWR99NzD9qsxj2d9TiWszDgqmQMhRynTbeXGAY5kHEtkRYKGxpq",
  "key14": "3jXMfFs2wWpn2K4j3JGC5eEGSCJkLxssHh4KhKuk2zPXJnvQWd7qHu6mnS3f4JavMH9RXvckhfrm72s38qB5hWfr",
  "key15": "2rq6JZdJ7J93CXGHkcNU2wMSKECM64goXpFpxMFD368Lu1yWCpfXQ1n6ncjgRMTjxnMBtbSL7Y4U4rJjnRUsMiMN",
  "key16": "YadzuQkSNhPmL7MQGF9XvnB8mn8RFNQPwWhpFgYZUF53q2CXi2P2D7QWmS8v6eZwBC88oRXoHus3hyd5eGSBG1u",
  "key17": "KqThYWX4XRjAFj5vF96FowMwe74P4No88axaRJF3PVCDGBMovusR6zhAkZ6WotKMDHRuxjSQhR5q5FJT4kVxqgS",
  "key18": "4MXsriNrpLToQZgU9D8PDxx7oXkhSCo3h6QZRHdoTagoZU8iUtwsRRvdTfSGP1jSTwuuCvh6n2RwTE1KbNd4tE9e",
  "key19": "4sPAKcQtCqTtoBdtwW42GSviZ4gtSd6Aj6KmRsJN8sZFh7nZgftRD2weiBAfQbHACWVydPxpDxJeqqDu4zYXCJVM",
  "key20": "5yR971KKgDH4irnEi2hMVVm8VeFnuXVYc2TWLquqs3Gu7mjGhHhBC1zQsRhG4HEHAVSwQpKfT9bLAzVnPqkyCkhN",
  "key21": "5FUJ45K8CuEa1tXuNgzqiUojJCLFe8YUeUe2Zw8BNexbQLbxBhtYmiZC2gEssYgMmNR3MoXSKRg8UyNDjmkez68h",
  "key22": "9Mt7h2TdgMS12CjQCJyXreuS7hP2bBn4ALHT1Zrgp31q5ZQrCeK5HhdCh4WEEHmeadN4FpAt1ngqk95fUAx3BDt",
  "key23": "65E61NN3LkG9rTPvR75dBLuxZhhCSF4J9rWFJS1XaCUwpdV5jNYvn6bNbPZCwNXoEEqXiGTLWskKEEj2CDfgxYLZ",
  "key24": "4qeN1Y2iMSU3msPPWfzfyRSjT3For8oVvSLaxbMjhUCZuV9AWZm6bSqFEd18pnFDFjfkksi6gDRBVJ9AW3FExYY",
  "key25": "2ThFdyzAx4kk6PDXpDBvSDjhdufz3oeakwceWdKBsCnwKspjQdsthE7mpUHHgRx8dXzkBc5gfUmDje1opWChoQhN",
  "key26": "3RUWJEwfuXJFrz3AorEJ51w2XCaidzdXGBxmdYSCLZSE6E5YeuHJg7rbqMfc2BPzpyEL9USp46AWmGtos3gmZYfU",
  "key27": "vYmDTP1hd6f3XokWWp8UwUwYbhNPisDdz7qJCNukDMZesdvG6ACmRvhuMjb2Nqb5Kc7ASJhTU4M26GtkWCQzFaD",
  "key28": "4wYWo7Hx5eCEXhgpj1VWLD1JkgN2EXNAgvpJGyYkP8QjTdPwxqzLyVVGo28ngtAgvkfzc7GnJQhuViMJ11SNaPmS",
  "key29": "3EEjQQPF9MrcZUinWAQnpPNRdcCmatbZTXojuc6ZV1maxhVWFGrrKvuY245yVnLxuBUJdGMwVubEuzzcyD8NwExV",
  "key30": "5HuDAmTeZcjuxpmGQEbYp7fkVmSFaESNKKUffgex8n5WY1Ff5Li8qFBqxu6Viw1YzBikLZEs55ePEbaT9UzbZBhU",
  "key31": "2AiVsr4skdLq6iDZmaJUPzXNuUTZxM125hfsLoqycXMdyGnCy1s6RVhY1EeHRGhCmmYvkT6uu1ixPEmjb7NTo2Su",
  "key32": "SrYmquWyBDSiebnHuEhGDZMkTiiayZBY761KK75z4pWQUmbY8EpYCAM4WRCaw4joWZFirqHSr18kMon9fBaH9yf",
  "key33": "4kZfQwhky5jT9YEAK69sEMZpWhMW1dnyRmSVMdBu41gRHyZRBodvG3hzxgLmsc1w21DaP6k2Wn7Q5yqKfn5Locvb",
  "key34": "2GxvH8DKLwMYTift66pvSvHG6Qd9aPWSCfCWgM9RUwK9yi9qnX2op4wads5pRWa9CjL59Lbiz3v6am22ubdjzzNM",
  "key35": "436MrRXQGTEvrN1hksNkcFLMKSMddQFw3wXobRYeoczKRz6V9xr1NZzb7eDNzDffCzaP9qBqE8udCQEyX6NfCcLi",
  "key36": "5ghLyGVebugeq1TmCEDPCYEna1fQ1NhCHEJqYVk1iTXXoWitKwxv2hRoaktWHWUb6iSeA2Rvaa58quqr6noKZ1CX",
  "key37": "PmPcwasTWqVki559xrgivcAJB95ZXuZHsno4qh5Lb2CeGgjBZH2ot3KfEpLdNZT8C4BVyh3Wy8sesTSdPnHMnLH",
  "key38": "2LRMrRkVmj4hFfvDWJr9c74Qj16bifBHie8czQTkMKzm5agkhCqstcAzwtph76ujgfvT8XfcwS9FFr8C2227bVRP",
  "key39": "5CmwfksdceB8dq7uttqfFdMC6SryT3rE6zGWybEbMftwGG8CTjehrhaSkW1TN2SnoPCC6JGXzfqC77Z7RTeeyezw",
  "key40": "4s4niU6jURQzFvPWBmrisZMQjz3Q7DMdc9732ZfnnYcW9Tu1Cc8iw6UhmoedrYEigkgWH4strERd82GgLYLHH473",
  "key41": "5R7L1YrhNr2UNSv5LHMPQTcxSNPjSTEdf7iJsJHStRxri641DcQP43dv4oR6HziS7ECeJKGw89LRrunkDPDdGFsq",
  "key42": "yKja7bZ1VZ2X59NuSEk4Jkknx346ggzPum3qSvUM71N999X6rj3EP13rhE12rA61A2oDU58bX7eMopspaNXL2gw",
  "key43": "woBCfFKADrTqJjuo3svxN6wsaSrBudEKrjpggm6uTh32MpYMAsyXkd8TaevSGB62qaLT2SkQb3GoLyruHGRGXJV",
  "key44": "aL6N1bXMrQSaFXK61mfkZS449VQTKfLW5zSwy2cfhJdtWxogUgRSwrogivnL6EvTtPqhtDZYLhskgwmTn6LQhoa"
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
