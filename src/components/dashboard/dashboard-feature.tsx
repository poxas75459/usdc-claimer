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
    "dcjjAZSEQXc9SQ1JH4KyFto2SmpTNkhJE58Ja6u3vZn3etHpaK1gzvcvfVzR78YuPu491UeiXT3Ckvt71grvvh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cc7VpH8wgejAAVebFN9FqWPHGULWYuxrJgyStw7kryqTD86mxsbX4ws7q6MCkprvFHQuX2mijsXUf5zYM75M1rp",
  "key1": "2BWsBw5PUK8Sb26oXF9ey6kV4aPF2jBh4gDMSAv9gsX8NnPrmTugMb5w641NpQAekC7qbe6aGNgrDfLPQkGvRJqo",
  "key2": "4MAU5K6A5MjoWdXWJWp2HbqpoQffU4vCM7C6YPVdYgwYbULooopnQBzpCkKBVEJZuoGhWjW9mouK3uNchNM71CNU",
  "key3": "yw7RaZA8WyBHHzNaRb7XjnHxT3u4hMC5iA1sUFkppz4zP37uTEHXHxcGWDBADcHGkddphFhFXfEa6iuRNfziAFn",
  "key4": "5qyhBN2wcydK2X9AK1a6nnXY6P25ffuEZh7ceW4Xe1PKJUi7Gk2b1dNENSbwR9tVX8LrJsw23ABvb9jHRRrBFyTr",
  "key5": "5UkWLCo11qxkuyFzZGe94mv2rHgWa2RybLMe4Fy5seNU36mwWQScdJL8Pf4XVTF6KbhiG3BWqPiHvQtVAwgJepGr",
  "key6": "49jqs8MM9qoKKsGnd4FneeVao1AxXUsp4BiyqRhaLKverCz8YrJqL2CL6ECzbd6aEkpNhpPsxM2LqaH65epYTtoR",
  "key7": "2bAe1ATwRjwUv1r8g8sXiRC1T6BQv2PFxKyKnRHdjJMWUuotPehihPi9GcbKq8PRNCagcGjbg6h35SPLE842zcxr",
  "key8": "4R4J6uvGxRHrM2fai9JC4iiojFFk6if7DYit5pQaUEhzeAX2ZToeFyx6uif35sgpFFcAgfmo1H3y783J9xtANBkC",
  "key9": "5nJdUTXTj22CNPHUq11zNbdrMDNL1MwKaaGKU8N1gW1MLFj2YzJ4hQ3bh7ywvBuDcuX55sbMLZFsLgGXd3783qFo",
  "key10": "P2hEda3PQyo3xYNRWNnuth4w4ogU3jFSw3LNYj9b9bE2Gb39EaYeoVxdAfQT135t2rK3g55nXxad9YixXuUNNht",
  "key11": "3dqSFmkLdBMa2QDc5Wf9EvzJjeqoHn4dgkiUkdBjMjsCfw9v4QQ9KtSfCjUTE9uNsD3WjTtgNWWnu4tntAUck22b",
  "key12": "eaTcK7FaboD275PUdbx6covsJFe9kTA4SwNuuh4QQrHP9Lkm4a2ttJBLUk5Cksogu3xMN6tU9r2nU5ATjhDyAUa",
  "key13": "2sshUeHg75eneUB7FidJLjg1p72zyHHYGXGyBqnVBkHUdsmoeHpTwVjtAmecp1zL2U4Ccx1MF8uLuhZYrK1aSQrd",
  "key14": "3oeuQwvCnwevNTXdge46RHnLUrnpj79wSQ4xYs7cSQNveryMregkdA9pUyrHHYLTMqRq7dEk3wm3Kqkz9A4XWpVw",
  "key15": "4XR6GyYnYy7GxpwMFY32xRx7hvzxV5ZFd7WQWKeSct5dPdHXAPCBAgXkNqPa5oWncpwS4EcVarqTEUWeh2YakscY",
  "key16": "58NUzCeKeAq8euafnF2ugtT8njrQT9PEUV1ci4drTZWaaQXNT8n5LvSXhXqYJdwagv7RKqniitussqpNfZ42ymcV",
  "key17": "5hEtt2Bvuih1TJNijsbXnjjvEk7gdLiPf7FaLMPxSS79wqvK2yKjsr69ytQni82PhM1wF9BLbY3dYjBjYzWZ6ugx",
  "key18": "4gVtq2BjpeDVF3Rf6yEYNuzSpjHjKAaFPUQ96DmHNDQqt9ksjc7gmA3JZRxX9SY1UNpeWudfKkPEk2pN5EmP2zwv",
  "key19": "4gS1LufEkRdbMm673uFXja5n27Y4uv22b2Qqh2BJVPb68BmJMB74Pm6oeRjLrwigG3r4BMGB4FvqhzDovBQ98WqL",
  "key20": "sdtkBBCUrhx3KPxJwKTwXx3G1YwiHHL86wL38F2DBzT1ArAZaDVzbr9AR34M5oVGY3Btsrbty2Mdx9jGjHiBfQB",
  "key21": "5Vb17bNLj2M3fVkvWoeJLgPsy1BV42LVaibatujuXEVYHfUtACwtu7ft9bJzdvCuHDnTwy4jJSgcHvuGyLaGzV9b",
  "key22": "bUsDGW8v8i242MgGzbtTvoy6vGweB7U975gcnVw5edKgNK9Viz2AvgaFkacY3dHiwrEV4TpteEpKpY1EGXL2n4L",
  "key23": "32LdMd99cdQGpLBKgfyuvo6d216LnRRKQQ8meL97hiR8xsgQSWugFp7RE6gRh5zW79zSRsyvgEdt8U6PLgGLLLuQ",
  "key24": "4whqiGpkxEMuVvzVVJZfci8cJnqfpHQ4ayeLW3g4R2fiSWfe4bMiEsoQnbWQaiHSA7pYUug2qRoQHteVLrqE6HZa",
  "key25": "2f3xfYU6QLnBfafAtuakZZkc7XhoWFwJetVUnyVASDfzfyVdU3v8qcrDWtrkv8jsmpBCSoqHwHRXpNtgiW2mhKqX",
  "key26": "3aaPEk79QUADES888572E42XvLbg3QGJLBm37gdBusYX8QiQFJb3kmer5WwD4jLg1y1VLamUJq4DheLm8CbR83pG",
  "key27": "4rGafRR7twKWXTyiupnhGUogZHvVL5GWCW8PAKiCLtNHc65EmXs24sba8xUThz5yKnLwfJTWnhfyNWTLeuzaRXYA",
  "key28": "5D2MSFsaTvUUsSeCHr2vi9aDcYBMThhdJEqmM66kZMqzeBz6rQ1hAC8Bn5LrxQkAPd4HJWrMLy8GVRAXHwh9D2bk",
  "key29": "5kjfR9KwwtTbPuiqJGT3eBDEf8KijuBdP59icD6EwugN9J7TQmgPjcbrmXyqyDuJgeTatY6qiWRQppkqvjgv2P3s",
  "key30": "3vb24EQfjDvYGhSsgJrYGMDWufrADBgM9Ju3mpm9h2uYnY3QVsM22kqCe7EwV3s1TjFvr46XahafFnVb7aaU1UEZ",
  "key31": "5UHF33FWyG8EoFo5z7nGR2FsVGbnC2FFj1X2HoXVAHYcHmkYosWndVcJoTSvaVf6HSkMzmqhBvYv79sP2jvxoGh6",
  "key32": "43QBsf42Qq6c8FughoW4dcNTKacVk1P1apEDE51sHheUzqWJUcXWQbuLoSLPKuTEQQAqUCUgmKoXbJzbQdCdeSPm",
  "key33": "3d2x4NhNGt2ZAQtV6Mpaezv1zBSWfgDmjYxy2gsSXf32CRJNKpznqT21v6Ra5X3eim9oFXVP2WVHuuPDXpqpJLJZ",
  "key34": "1VXsXnmVHqdf9UcRpaWU1bBf3FfoVvvonA7ZCBK4X3T6HxdG4mPZWMHWgRyNHbNmSTVUtiZNGrqQHngV6sbpYoo",
  "key35": "5q4emjRZWuGRarTsPH5FMhmeVVbM2HVmEr8SGR69EKMeQD2hPvWkcKYWWrtnpJ8tUAaLKx8S3o7M67xhFC1YeH5B",
  "key36": "5PtS9ephxYTJq5G1jK6dh1z3THWL5AQhi5FdkREsHtFBcgSPL7QYh1wQRYvQiBpKCHiiKPUenGyxHYwwhBWmXoXe",
  "key37": "5L9j3ndGg6fBYRivnDkrd5fv9TqdceAz2s8ki7PE5iqyxGXPZu3rtVesAWDBjyoE74w2kAduYHp3PV1To8gFBwE6"
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
