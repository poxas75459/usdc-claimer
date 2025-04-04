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
    "3fzHqTzfzu5kLRT4exG7YNz9DtvVzTWCRkyv6XL5bXJ8Y4SKJifddRXXszMnmBBsbYGiBxDC6UtGug5ndHjiY7t5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67qh1HJW8UnfxsDiYpagcHjRacrzinNAaYTf7VR2wiGvedKeXgEXk632dRLGVeSd1uLhyNsBKyZdmePh8Lc4nAR4",
  "key1": "57Rqo5ZMTXEXssa1LmC7GY1pfq6Mpv7oiovpb2G3oEPft8q2oDyuHXos4NkzEEQbB9d4KUxMqkxsuSDFHEyw3KjU",
  "key2": "3gZxJgwbqewxJXtX1283r46JCinjh14kV2RSwSinBg8UmazbT8PV6XbRtGd2LKTHGrNhYYU14WvfAoVedpv8cFgZ",
  "key3": "4staE3zuYUDs78Lbk55zjpzx18q6Jofib1K3PsbVUM5pgbK4vGALPL3YVDdW6XjLsWYZ2BtVWq9Fo1HM1pgpPb7h",
  "key4": "5eM9h7FYBju23bgpq7bSBjQj7dPkbJXLKdh6XBDtW34YxZ8y6udTSacg1f19Ek2CfWjR1y747S8jq4fYP6ZsFyiS",
  "key5": "46TsiDBD5H3RDsBa25kNkPjN8J6nMA288w6cUiJrfQPTC8EQGgzF6MGi1jd7uBVkauDc8cyiHRc4HW7VQhFam5Gy",
  "key6": "5QRd6t4vNicSsH5vTuthtk9eG7tRHS7j1xYaqegvzXYmJyvJbPNMNAKHATUQ98TzKmzU8qym5LyFVXYmKe3C3mT6",
  "key7": "3sPMtJ7Lu2YNxM8wfgsU9eBn1nwoepgYMyeTjapeS9e1igs1Pp2dwwAwYuuzCWbwVozKUNA57yX2KmLF1QLRDTye",
  "key8": "6adE51oCZDMuZWCQm7emow6ba7oVQpaLps89efSGEEnJyYmz8ums2Nvo9Z6xfN9CPgcnfZue5VkeR1S6jPC9u7F",
  "key9": "2LPs1fMq4KxWrV62i4eTRcMMqmwELfm91TfEudC1tu7totjUfGEToPy57m7pxedwMMQy545hYEuqWN7nxVcCFM4n",
  "key10": "3XKwM2JCPQh8mysXPQLkZftrZSMKczBawLqbu6AULhy4kZvcvoxRT5kuwY9kvHPSxS4F5o1uW8WX1uixpSSRJuKL",
  "key11": "5P18zpcEmDVuZGvCCMSwLJ8yH94er8oUV2Ws6XE2HRGqNM2ARj1CfhHQakKxMXWJXPN8tHhMbbi2AXD6vyBKCsh1",
  "key12": "4XfSpLkE23JbR1eKZsJ6i3QHNAX8TXTRfprH4TEzBNwvx949cydZoFjKAykVE7ozKpAxbPaboxrwDNsMczBro3Jz",
  "key13": "TJkHrNdyxJRVpkc8UNeSJYNnvgXBDyYNVW6zNWoByybX4CbPWzZJvbd8cV85V95wbjRxj2s6JttQpm6odHDDhfU",
  "key14": "4f96wad5b8cHsZKCd5hdjyCE2adfxRdUieWHmpwCf1f8VjU1wdDKDjfgL6z4TGTKi5Vh3LhhcnCqvMaXekdES4VX",
  "key15": "qxzobm5NbCpdd6MtmNHK2XYs9fkpcMaQdBR83Vx8bA6MSgj7z68c5bWECp7TbT3244kHNesCAJsnMQ4RvTb3WNe",
  "key16": "2TNSztCvTRiLSJH7mpjfXDMexX7d9uFDconwAZyniX1YbSEfc5eEjeh47vJHVqg7MtQjdw5ooVWC9jBCb6PGoU8Q",
  "key17": "3CbE8iKomeWrHaRunds5bZpP326JbEWSvvdssZs9TCSP9rLK146pLfox1JHPGsDZz8rqeUZ3WLSUG34hzj9SfTkQ",
  "key18": "57igkptZZaUM9Qr935PW1MhyCzq3ovqV3eJkhVu6YeFo5UmQTXc7ntWse7L9Z2DvwizGWZbDjfFMHcikSfsY79D1",
  "key19": "i5n6QFJbScs4fvV6WwcZUGCDejYiCrFxcRvBjM4hRCxxph5yTuAbTM5zmeYt3DXkiMFn3ikn4KdCcnNhrQ1Aqez",
  "key20": "5d3w1D5H6PPKKoQJjVy5hBU1Bd1wQxUb51HtnL7VstA9FzKcgchdeaMsTeVXYpGYXSNug38xZY7VCTFtYFKWuorv",
  "key21": "c3xZXjDumzr1AR8aFKwtgsMCeYKghjfoSg4vDF8GzLRAvJo98RUnBGoPSoMjVaVhj9Actf2CKGT5U93HNPajkiY",
  "key22": "21aTvxfBX28sBYFPVBiUBPq4FtVVxkv6KbbhtvKLPmTkRxv4ZkCVMeSQ2Zhpa5ynicJvrpmh9DyPGaS9fTPmmj26",
  "key23": "3zG6WfTDcYCLD6mES5vjj1UZPHrSdE49d2apMyt2wYDYXiyHgusELDtVtqPwSKXMoaKhxALY4vpEY3SuajDC9cbz",
  "key24": "3g77nAPGaNsf8nwHVw5fURYvQqzGc1AvCEWkc3a7n3RmzZgPcQUC4vnmWEJM4TR2n3ZbKWbhrwQ5Uj1vrcqLiD5o",
  "key25": "2NXHQPJKMCrR84jkxbnRi15NQsTGzc5geMorXNu5axJ3V55QY6XYBufdRRW1dSg3DMuiDbbdNgtg2ywRrpmkHXGw",
  "key26": "5F3QKLKQBy47GaQ3gFQE1G7swVS84HQn4NsnziUgDVZ1mUt5ffT7F6NxX2UvhJaGtEsiDr8yjHK13GAo3GuYkKkZ",
  "key27": "2W2ia1FhAAnYm5MTmDcrnWHgkuM2y7Nkbt5m4f46R8vbxSmEizKVgyQ2nCwMTKZeBFUP1SxPmiXL9ZTQf77YgjfC",
  "key28": "pk7ndiR5gaZJauahcYYXFcc9kXZKvCU9gjetTMdCy6Y9xqyNrfae2kfsBX9xE4Piem1PuxCZheXybgt3wcusZBu",
  "key29": "2JisgG5HqRbzUH8CUgGJVpRjMJwKyjXCQzRREDBw4RcbdjxaE8Fd2Eo81ZD2HSST82BAht8TQG11qp7h8riRfBVZ",
  "key30": "3ZeD32ECsmgbWzp6eQff2aKsUT68Fake6qWtoe34itqPBhvvqsYKMtMFdBbrrsj896h8fzgf4fQRPV856j2JX8GU",
  "key31": "4iZ1tDB1ctcUqmXu7QZTY6XTB5vmjcGBW2cV2X9pgeg23d3ofkhGauAi4uFfoVmqiTdqjQk4pYxF5n44DFcS7Sgx",
  "key32": "59cA5Kzje7wqNC4Rm8dr5BYDUKg4KWAzaa24hY1CumH83ec4PKDwmUt2m2cETCcQK7CyekxpdiCQhCgZp7DM6yf",
  "key33": "2aP7K5DSr3McAqNX4sb9PDesLXaGLWNxhqHMgqzvx3yFAvZnTg8cMXEJkz65r2q8nMYQD9jBfzch52kSx4pC7hjS",
  "key34": "5taiP2Qw8JnuhmiwEC2WXfD9eny2QU22Ss9zwZvGUL9chb3fD4wKDzA28vR6AdtCK5x7e4zoW1ZoeewVXXHiYMxk",
  "key35": "3jNiu9uzLkj7AZgZE87vYjRXaZ2oWdiBQUmoytodVGv8SbZLMKbaVPDYThS59SULu4QkB4eMg3mk4JfrhQZL9twD",
  "key36": "4tBWen12NnQdLjcNhKbZP9aAgiQZieUTuPwwnn4NAsAnkV6sUn4vy7XfcjXHzDe1pNLJkvMK8KaQBWzPVzW58U95",
  "key37": "DHgRvEA9k1nqAERRuz1bytszBCckMaqe6uQEeFLs62Yt6Mf41KAS86VsWSvCAspVeuVeUYnyaniSaZzLXSVnwxH",
  "key38": "5ckY6rXc7eqmj66yQeeDXsGUjxbmeL7dd6q8QN2f8WRBSpWzZG4wgT83ttTWMN5CwEQjJwxsNjqSokkPs8aCWDkn",
  "key39": "2LXLCX4rSLsw9PE7VbiCsrJd9AUzBQtRUHB8yWzqrhs4n5cFQbxZ3RWKLRRjTA7p84DDHRkNvPHUJX8sP9Bo316C",
  "key40": "4YyarTezugNqirH2DRAnfWVRbwbASDW6ysyRJg6XXgtFWr2KjyYZ1XzEmwFEu71Mjn9He4mLYwC9vsZKaDLKeASS",
  "key41": "YGFmYRVLLeBtfvjiKELjyzdQ9Zvii4L6ysjj5NQA7Sv2rEVTUFTG3yLckvp2shN67YB3RVxBwgsrVmgdTkAyNsX"
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
