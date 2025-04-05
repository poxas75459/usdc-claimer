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
    "5fW245wjeBFcX3DEStDdBJSbcQNzyhjMcKqmVw5qAyDzWjuPXeoJDi3PbjrTSFELSu1TVK41HEhyZ2Gq6uRy4SkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gh16qHpeH7yJeaLodVgaaqM7ZwMyCaKHArX1caQicqYWS5zXoq99z8NnMSm7NG51HzAV9nL6xrEyiR48MHNqvHB",
  "key1": "48wNS7h2DQss2tuHozTRbep7p2hA8RdtNy8aZku8fZAtuajpJ6wib4P3mUqCm23tprMTcpUxfPkbtmeTbQPCkKGV",
  "key2": "2v6MQmHvp8t53YBXWmf6h3S2YhvYmjnETBrgZrT8RAef6artTdR28maMXuZy4FEbymS5MkE1ryeKyXg6gsqfvaLC",
  "key3": "3du86FRwDnK3Cz6HAPWjfo46UMxpRek8XDmEZgyRNbYggJ2jpuxFX1yYBoWt5o6wkgykm37nUZEbJW3xG6dq9RJK",
  "key4": "Qsr5qGjCVzL4RVnRo3qXZ16vsLd3D6iw9fHdNZH6ui46ZP3iPvk2j6jCXw7Em2rYmBiGWmHJMa1s9Ctz4NyFJQu",
  "key5": "4Wjpb2e5CroYQc863SDChWbuKcRcUb5wEHi893tKLvr9721EqxX1zLSgkjZr5MBbysn1GoYrr9MjbfHfrQ9mE5TM",
  "key6": "2XV8Ka6nFv7Mma6j11Ny8fRzPyBQMofiC9e7oz2rd1CRmMeXEXn8zL9QgKGJdKg69A17jvW3b63aEkJ13C5nJGQh",
  "key7": "4ejqQnTPnjtj7sKAiJdEvGDM7ehHUvZmsRe9xEgEeBuC5w3ma7CdVRHpE3hm7vkeSJotyrHipedKwLnLfpGQsQg1",
  "key8": "5ZEVodYLUEkVyp2nhoXxB5ms5NMjcqDijf6GSVw2PC8YxjuKHkkwtXWsFe8uzk84q9QdwXNMCNKzudXw58N1XgxU",
  "key9": "4kxxZVqRLbsQy61wZP3kU3zxDknAT6TrDdSSd8vB41YPnqVDhcEWPoB5N5J9Bbo8tZQ5cojhPCFkgXt1mveuJXZ1",
  "key10": "2Pnupo9kCQdcVARvVxRqWNEFj9Q6oF1PK9jbo9KaYtNwDJJnKX4kTxPScEWyafhccBG7j929bQKEyKzM4QvUL65C",
  "key11": "398TN4mL34Yt745217Ln6sRDwtXSVXmhqxnEqr29e5zK74ekXBdtgEqnffdC2XAnAR5ws5ZaWEiUdf9SHNowco5e",
  "key12": "2gXaFM5NRgegwxD3fHxT5LnPs5naHQ4EEPF3ZzNvFVLtEc1W63kVK8YwELDBGSti9eDDLe5AMBbCkZWf1WAnJgSJ",
  "key13": "45zELzoLFxEeeKwA2UdFmkdT4o9U6HtzN8PgZNRHVW7mw4Vfr5f26CdqdqqVXYWkAcV3CgrWG7VWcABhpXBgjL2c",
  "key14": "2VUzD2PWUhNM6EUxtpjc4GCSs1TMQJNSQATz7uXrQifrDJPFFCm4YHEvDDpgcHYRkytxaTR7k6A5twgBzd6pgLNe",
  "key15": "5o8wgUkNntPBKez7maHkTFCCf5cMhvEGCBQhm6axVKhHvjTu97hLcLC9PX7SSiWcmt6iouxkZ26JcdtqQUcLyDDy",
  "key16": "4bB9U7Z3PWAARULoufhPrwFvLfgz5rzCxUTrztjfceXM54CDNphbbS5vorwYMTyrZqeF4CChMjz8CveTN3xuTPwa",
  "key17": "4MfY6Te2ijdfW9A3QpZMdmg9X8n8kXzmvYsX5Yo64sxLc7EwVhALaS4yASqxj3LpDhSBMCp2n7QoqckEQNpnMjo2",
  "key18": "TkZpk6KcvxUnRBjBZVoECSfSirHvbh1A3Gatpyj24CKNFQuP2nPVaxLLZeTkY1VtL7KEmRruuUcso57os6VYh8w",
  "key19": "35v422nx1efNMKe4FDFmdUbzpreEDCE2PmBz4M3bPAqoxakBYnWba6w7eFjuUTMVJkLZWXfHrioHaYqosvwAwotV",
  "key20": "5uZEkDnJEKHWXWv7FQLwmNToFyYHkcxFHKD6RNoVShaP4Y7DzWrcpo7qMPkG98XQyY5s6m8E6CF6GpVG8b7rRhSW",
  "key21": "4A5zx9exAWQ2c623mcs1Xvja2Bg3GoDiMmdY61mXxZi65QudQiMupmvRxqPiStrwbPbfMPajizWvm5pRTbKy6neH",
  "key22": "5ybfA3AWSP9nvq4Ekgo2FxTg5UgCRhHgaMi9N4sMY44W5PE1C6owcbsEPtqZsBRepno7EYxCbnF7nFDv2CDqNCVX",
  "key23": "3Rvg3DxGJpAxsXf4935RKnNauZBmyJnKMa8fCrte5NST3cpjJ6WqhvECR5Kf8ZLvZZ2KWRdrV9xN9nSaghBf7Gpj",
  "key24": "3v5KnwcjWhgQgx9J2gzDDQ7N8x9hnTDuwwxQ1i6vBkQThyb9624S5Fo6uMFYyeksCN9tp6uH3GJXa4j4Zre3bQQJ",
  "key25": "4Q3PjFQJ1WxSwcdXCtd4Lu6V69uMAJv1khBKSMrdHgdBL2C41b7kqDdjaUyXq1UsR5KHaVS4qiHm4UHbtFvsMk9G",
  "key26": "2pvBhKSBCxP2KB9N85GKEPkEcCYBQAF8kfSTGVTbQWMkxq6UEHupje2QTzKYouf59o71p7E4u5zrEaYkZ3jKq9wG",
  "key27": "4Mzv2dSbS3wiZFrhqNoNYdN75dPucakqH9RdHxs5acQBdCira5f9sj6w2NRv2JTEWDmDFUvGMXTSyrC8UFEr7L4r",
  "key28": "2qPeMvi3QHxKyuJGKw4zAn9pC4Rq28fmjvhijCrsAb6ze2f3aYaP8KWqfrt5g3HT62GQyLvhuG82L2utWZmNBtUB",
  "key29": "5iQixzeF93c3B1qjRyUfJT5rfACxKGWvqcoGUgPPC1qijGs9Sehhtj2khFAAjd5AiFKWGAaokrktdCB9h91j25k5",
  "key30": "5ZMiF2Km4b8Pr8d5kS7pWgFDNkmHchWjctCATU1SLzjhFtAcSsggfRUuGWikR483MEY7krYsjmNKqfbGE4b214on",
  "key31": "gayCHiv3MSELKAbbkJtTLsS27GoujrtFwDgKASnWamZmmEiL9VsXGCv9yHcjjkpmJaL5pc1ihoVVjwsaHub1yq9",
  "key32": "3ufMsNkpUzgv1QQ1r7iXWvGmmYSBdRWCT6a5GpUtarebStDLLWEuMmee6gx7atDBTzDu2qBCCXTCnrS4e7mpgJMo",
  "key33": "3zEhdURSjqTPzXQex3h8BMtSkwECmCvF7R2WoK23R2zyPTkSSF9Nf5nuA2yzFiCJFGZWy7H384FeG2sx9v6m7J1i",
  "key34": "5KPzhQzP2N6pSbJTSmHyTdDhuxhGdvWf87kxHL4d2mGoWYHgdYKt6rUUEVR2NnDGoExwNHoW3XJjvRZU5DUUADFX",
  "key35": "5fV2nFLLNSKVzXMcRCUTFLjL6AkwLmoknn5mcQFyVonxE925tzPztUk7gnwah8ycR5umEFbMaUKRRvXh8RAAW5NZ",
  "key36": "4ZT95eunCCjQEk4K5wf2MBzdDoPL5tNBJwPtdN4rpZ1X6baneZpcJmmE1dGfUtnhvyKEEkYoww97256xxgpr2cbd",
  "key37": "4qGtCHApzJhy5p26H83dkVAcV444mpG6H9NRWB5DgHMzMKe4MAw1k99dr11s9Hu7TuYUL2mEg6tHHKBNKzyWWJ4A",
  "key38": "2opNgcxCencVtsS52q8zJtKHPF82kTX4NQm3LKCsxsj3rUHHEPAM4Y2iCmFYDF5hWTjzHYnLtCcHP7C8vgTZyNs6",
  "key39": "51mkNxQAr46okdD9Bcxw9YxmVE5dKPpDr96FxTKM2Q19XWbNPkkChFk8CwHpjKzHujh2y5XBiMu9sJhex57jrpTH",
  "key40": "rTCFVoeiDonnig7eLPHb1Z9WxtWHXAao64WWT5FpV889AAf2j2a3MZhU6B4UWdGa4Bkks8TZ52E1moqvDqiEU5m",
  "key41": "5dQJWjesUeAYK22xVcCiR86rgdN98E7ZCCtAPCespYW36ZVsbMFWRokxg4hYg5ePH9pr81c5ZWCmbW5svpNYJ7yT"
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
