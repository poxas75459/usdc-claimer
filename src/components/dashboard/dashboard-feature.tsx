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
    "545C9ougoc7B4VuHcSa4ySZ2ngcuGKGeyNwerzPhv46HFzRzW9SwUJfbnZSXnHAPWUULN8AXt6CRCxoQoWSgiBbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58D2ZKdMyJCRRkwdRz6xcHUjkh9AAkqFGpyERsjUfNT4m5ZiTiRnKmtMaT6QEef83u64FgugZ95oVzheC7MSdTZy",
  "key1": "4hNEvG7y5U5DzbqaPvDt5nmoik3qb29s1EfFNNuBjzi21CzYhHQ4VqXNrgkE73qanPmkcmxQcp2QoxXYscf87foc",
  "key2": "24thKuVvZa5r454fYw56rvA5Ri3HfrA8xqJAKtYb7qtGpN9QnrFihbEb7SSh68rybpiwPHMuo2Q7q4gyouqS9BCf",
  "key3": "3PktS2kioQrtw7Ebo7cZ1papeSPd2r4xkWeNSjvKTdhxiabmCC1f9ZPiBafr7gN8H6KuBM3hB7W5QgkzSoMQW168",
  "key4": "i4fWSCYLcxssG7YNTRghMrPseAx8QWG3L86qgKcQSHT8CfJfFDByL8Je1NgB2CXHpfzEVeJjzaA4MnCSvNMtKDx",
  "key5": "hkNNwPNnHoF6fDgcEUJNTEwBst2YCfSG5YUFfjyzwSrsT4urheXjsLBZE7mYvpyUifGt42pzsxHPVVDGSyjXj24",
  "key6": "61MiZxBc7QzHtmcc8RJsmUULojCwork3GydtX6oi6vPEWgPrrV9Xi9NxTt9daGC4ycPm3XeeVrs4iN5LxogLAmvy",
  "key7": "4uXkXSdqxXYxHeeq5GProesZtniche3FBxJhYi5NBTYUc1TaQAiU9CXJaZcacyKEw9xgnctBVUAcDiPMA6SjW1NW",
  "key8": "3f92YodnU2XXqKLi2sWgFf15ojD9M1QpKrfqmGCXHQkZpUushYp3EkQAufaUJp1hp7cYqEfjHNzuPPZLmSMCdLvQ",
  "key9": "43Cy5UX49BcxFQSdUep4SUBLhgXEqoGvX4r5y48eek35ZT3AdbSZbUExFPssFWxrCUpqu1shbAdCfcPvrhXQoWXA",
  "key10": "AstHgoV1Sw6w4rEAs6utrtKp2HttTpZrjeCpCnWgry3BanENfK7jHoZ3Vyqrp1sqHQTtapGKz4FKFY8bRGhHucq",
  "key11": "RmYjz7Cu24ShCac366UmDFuGZwp3LK87nbDeAenUwFNUY8FTWR2J1C6weQwwyfiyjRZFVw7wbr1W5KZU5YJQqzQ",
  "key12": "2FQywQ6Quid2xQPbikh62Ymsd8QWgUEiX3tTLLsyFLsD8No381pqf7DqGAmuQ2obP5Ake8uzHp828FPdkyDWNASm",
  "key13": "5BbSS9ARYnkBysdMTDmQzLcJWZpQ2zwGG7ydDrJTstZw73GpjGgJdZNf9v3B8avrWRw8y8S2kz1kkA2PgNcZMucM",
  "key14": "5VSz23EcCagfar7kHe2oFJFbvzbhadW2x8YG7mkaBQJMk146r99tJVaazR8S7vDrw8EWgf68n4XZ1WyuSoym2Z8u",
  "key15": "tiDHkawUrv633ktrJ51N7ZS8VFztXKACU9bKPJo1MUtxWEX4xxsTowUgoDa3cKrjbXZoGZWnysYyiN6bTKe98LM",
  "key16": "4Jwihk7neTc9NLWAm45BYibURAsrbq9qPoqiMAGezo4MxGDEqbDNVHU5H1fu9T2B8YFiCTxHrAe1KuxLuGX6oNNx",
  "key17": "3bv39X2FA3WjspBMX8UqywNVh8KJKZZsKixDzQXEghr3uPNvz27MVhUGyXtzj6F3vAYueEZgD5ZQgTv7zATSJjZ1",
  "key18": "5sbCVsdD6YGPpodyZG2L3aPooqa53eszsCoHokqGG3j432EWAFBT9DajGo3sJTrsZSex1g8Ts1Bzofd94xWfmaC2",
  "key19": "4gcfRZ38xKtsBAfUSBbc8wXsQXzdyogW6koD7D74Z9azwKuUMzwQ9WKLhs97SD1JqjKuPaizK9ydLfwq2K59td61",
  "key20": "4ALNsH2kRbRUYPkZjL89HfTmwtwUeWb4v57nySr2CKywn8txzvxwm45N5ByHxxqTchuhKg56MEy75qz4S3aiwBk8",
  "key21": "2aRqjBEBQkikxBgHKHd4wqSDKbcjzCxDzZVBuqTx5kdNt7eVf3gRv4cHza6NMkrcWXNTABLuWWG4ig3hJkjF6L9m",
  "key22": "YGgLLVwP7HtRkE6w4gjyD8Gpx1PxMr41ZJ7yQYMZQYQ8VXQtHYTgTJfxnaxnqhdAreZVFbCZsiSzDcRXxqnhCDG",
  "key23": "4Hz5s23QMNmH28QniAnaTKjfrHuahxPCPp5cNm2B7dhK6r1HZnvfZWN3bcuYcYGtdsCJLWR4ERQaQPGqqoUXSP8b",
  "key24": "MXNLrUVVSTwNXQx6uh8zQjukGhWi52rcXccWSrPdgYipvBMnCzom2qEkG4WExBYpeHcCpRwjRovXBpJwvF1zhEJ",
  "key25": "yfr8b9faFzDPqkUsiC3XcgQaBkUhaGfoaWgHki7ZErmgoc7iGFN2naUuAKU22BBN9sMeDwSvQxajqMiciqJLNQZ",
  "key26": "4fqvZe6nS78C9fSriab9uq8dguk7eXnmx5z5hvP6t7SuRQpujbxU1fJUjaz8Lsbb5jtSCjWUn3mXFwjBEUGxw6Ku",
  "key27": "2jYM1jNMr3VWz2pwitS8KRwDPxefrYQk5645Vbn1s5VFxFPDDG2eKyJCJ8ttRKrZ9nws5ozAqw9skz4sNT35ivUr",
  "key28": "UTufQM5nH9z2Et8YiHcZQFsuvsT9goFe62vDjR6dMgS4YGuXQ2uMF7sZ4gNjRpuWQeaAvqn4ZCKc7gwNuz2cDKj",
  "key29": "21XBv5brcGFqodx4f5PEpAgyfhG1VAo7LZ6zDVEn4x8RwdaZ9AJ4YEArSET96T5rEy6Wk1Qvboy2ddocMJB2KToy",
  "key30": "o9BrfJeFd7TKXpUVrbSb6dcf2fcrzsEFENKwGwi6P8UXrf6G6y6sHrcRzWMtd6BSC9rGqcuij1EFMfGRmJ5Fhv3",
  "key31": "4agrF2h22ufegsvTyoGcgM9vqGLhofZTQxc91TGiJRPC861ftsZVNM5jmXm5bU54NVqjgr1q2TYHQArW2CZSMh2o",
  "key32": "4tycaGuw2kjdXSfkeyCRM9QSR5C2YNne39hwn5bWeBdiVWhyabtnmpTyVz3734t6AjBNkFLkVNKDUr8DuQhTXmbn",
  "key33": "2bnrqVjsxC2bJo6N379a7Wm85zCFEUkXhDFU9fcnZwGgBCjEDWxXpppPu7NxYSat2YS7RjNyJ59bwSGEWnqRHEbv",
  "key34": "36GPsr75h86zvg3RbgoqoT5SzpjcrYc3YHBFTgZjxmU8WVrNtuUMdLY7UydwNBLzXsx1yuLaAmQy3PbJ68b85nLJ",
  "key35": "3r6GfoWt6ijRQ8a8QnniRL7YXxjYo3hgXWJaUN6QUBFdwsTa11MfepoQY3rahugJJCFsER7UHYawb374thXWYTGM",
  "key36": "kii1bLes83h99CXLRxDKQMArxd7YHTyMSYE7UuHAWFF9CprHiAmCBBgaLdxnXSKjnGrDjPSjnKJY3afBuXGcw8H",
  "key37": "5qZLM6GLdGNNtEe112dDdLQ1RMFihNtLYwnGw1hMctzDdhUQe2DFtQzfufg73d3Rhi27x6Lyh76PaKj6MojtfEDM",
  "key38": "56ZYS45EaYk6y2GCCBQRBFhXgH73FUnFsgUg96sjdqTrEg33bEwHAqZFPAbfHj4Mm7ti6xntpmUkpPTcwstBbxbd"
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
