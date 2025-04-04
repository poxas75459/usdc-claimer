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
    "Y8xhZ6MAa7hxc1DLeVQAxV8JavmjWdWeArx8N4brLFKRRc2SM81VpZKEzSP6ME98SY8hbLVu3VuPvoZLVMbf5xP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38penjM7MWZfxf2EitivahKWk5NVLwJ5SQhY2ALu4WCgAHruy2fM5KWRsVMJNK1m1ZahdnpXYnztHLuKssZFzz8n",
  "key1": "4hMnMN9wVBuJukwKnHAh9WT2jj8DoUrcmzD4EZ7S83PLw3RiLFXfUN2QUrzKGnaKzRwrSXWSbFdP1oq7562q8k5H",
  "key2": "J28Bjwq2ohBcUmSGRaMBcEiMgMCURfYsXZEERCuLPCjbxVS1Pk5wsdktigQ5PLgYh45NvFJiz9LSgTQ6rWyjWZJ",
  "key3": "3nHoxrsATsk7bGgwLvo2BUVwGfsxLEW9XskMv291H95Bj4rQ7TjtpobyxgRawuoESA7ruNE2gzUqvuzAgng7iXxG",
  "key4": "4VmzMAhf8fTqTAUGnsrrE8CrvtzWFXBQPHanqv8cdQsXvUpD6JmEeLxDGNpDa6KzfHhqafMzXD3bNSgczfRwCQ7C",
  "key5": "n4hZu2ZHTPSLm4s7RQJY4SCVzVU2QCD5kQccwugswm6yU4d3x7yMLrHZrHBEZWuLpvtMCWQgun51hCPrrfibXzt",
  "key6": "5Pkcarpcp8zWK5vLePK15iLpe8bvqGWRd8Amj5xSV5u4pHcjkdt4SBDYSCoaGz4yZDJpVXXzgStRt12krbsFe29L",
  "key7": "52i7FbaQeyoF36jDUtX8f9gPXThfDG8ACVnoHokVk5kbJxHiXAesA1xyzrGSupfaSMSPQuxgw4cMm2APRaAcTyGU",
  "key8": "FpyNaPGGLj5roStyd7W91NN2fR4Rji9biDjnXmYreReemR5wvPTk7bGQqFKZ563ssHABbHkDaPxqkWZRsC2Ro9g",
  "key9": "ef39msxxajNqufbzHs8FKAmKRVWYMshtsgUBKYN9RyjDmxnvVor5V3yMY18ghx7YqYGu9w6hZ9Dm666UBW2mm8F",
  "key10": "3LU7vYmTVGgXqcbz9QFpVuDVHyUUJhZ1XndkxRbNYttLYFuabPYS6x6F2KxHkZgJP4RHVjUARTLze5zUofc5kJ6F",
  "key11": "xxrC3scf4hhMJ8w3AvBwQGkaEPkaVgBW93sfEmT4DC6sZ8byTKgEXyKLHFMiW7fbG6ibSGf1kH1LdCn8Hkg63Th",
  "key12": "b2SiG2z12Ta3NfhGguvQwWUg3TqAbVNxPtM8hcnAvxTWb5HPbM6kQ1J28jVQsKitEHqGbAq9DNJgqVKvQYNZp9n",
  "key13": "4knmyYwgN1NRD1yhniv3hFmUEnj2ZpkTZnqmZ5hemusmDcc4Kghf5Pu3NRnS7cgw1FKsoWNcZWqBEyTwukH1pYjh",
  "key14": "4t6WLJkRWG337LfVEaWF8CEMCiuU1coeJ4wt7sCF18B3met2xcs2fnRd3CyKQHCMqkMJMPxyvq9XAZVcNaNHDZPb",
  "key15": "6hbE3WFQsbMvSnRowjhiZhhemNBiBGRKufMdaBVkuPaMaTMYFp2Uz85XgYHHhDn3gJQnhDmYQ8xsLGbqHzkzz3S",
  "key16": "3hPKrbuYBrsW9MMLByEgsiKzd3Dzbaqv9gGydd8GWyETjmBJ9X124UHVDQSsdTNhaMHdxCX89UbdHfbzRHGyLhKi",
  "key17": "f3tfJJjaPGQacsVnseLjBeW9qL9x7Pp5ktwStJrsjUnC6HP4mjd4X1nVZtfwsfjh6HLHrZpTj7BgVH4fA3W5Bc3",
  "key18": "2F1HG2Nd55P3KUrQfW4m6uGc2s5dM4V3Y28X18bM5EamfiQZkSkXX5LpprtntbVo2zaE3aTwDF6QqbVqY8hktvis",
  "key19": "5DgnFuo8ZAsLGryJFC1ahTyUTd3XSaJzdZrCRpy4nYATyZqUWmnteoFJBaJqjQy5d5iv7CAraaX7A37KJeevYuur",
  "key20": "3bSdFPcS25FeDxxsYR81pyCfNX5H85XWTUU67vKu1PXCzBGHBj6eAZGRCTcTgoAZVfqCvTWZqccMkY81wCmcgPfY",
  "key21": "35RpUmjncZd9eGQue6m3avtHPMaxYiMCYb1cKwCk7an3284W67DyQTuu6uTBcwp6QA2QvW97Dcck8v3ZqLM4LUk5",
  "key22": "sWC4DFD2Bz1sBSPo9DzCSnxEWAMUK8yTnBmf6vpRDzRX1L7JXC63k8qiM7QErTuWRMpjAbijrr8n8w9idgRb6ik",
  "key23": "4haCistoNQdANoNQwRUpqaNF2ky9wwCsVaLd8Y62o2py7Uq4V9phurGDk4hQUfyXiqBY5PM1agXFhS7CoZwoNfCV",
  "key24": "4Kzx5yGn352GzGFyenaAyPMsZntSRVKJvmeF8kYNnH9jFaXMuhqTd5tFVYa8FasrbqnBrVPosSaeczzVisFTqKjc",
  "key25": "2QRZ9sRBVr29uRJQg5buLFigYBfxXTwLh2RTPvV1ZvBf52F4fJJPewtsEi1JXB4VAQFZwExF74jvy7AXWg4uDHke",
  "key26": "4fLSDGyXPpbBxWPZHQYFEPaY86JWkNyWXAX7Gj6GpGTaKYvWptrhHdtNw8iRXCvBvLzKDQMb5eE9L9tULVMWW4BY",
  "key27": "32rXBY8TkM72HQ2KAUGQzSkZcA7DkxvGX9cSemV2VEmnAK7hV85Yyfs5y5w5AJRtpbZGbQE7k19JLtBadspPcALt",
  "key28": "2rSiFrc6rrdWZ9Mv8u2oFSkQ2CCDuVmvRrsfieLV1L7N2oFxVSxxasWBZ5Grf1aGsPnPcqD5YzXzxv2HndjCc1xw",
  "key29": "3HV3Ndh3NgFwaZFLA5t3HVPEoLFbXUCt6pCoDqPfec6qJuJW9ttE93rpDmRgL93c7aAdHNoaUzRTGQFydwdWkzUE",
  "key30": "cFmQ1XQ9dv3JQuhG3DoTZWGGXS7iw7ZT5QLSSPB933hxp2Qmvz2HfvyBWZ65uj1qJmrvoYX4BWiMgtM5mmQK38P",
  "key31": "3SGa32yKgVt1kjwvvBbDAhY8yguf8ikBsvtNdBgg4aUjCKRJwcn9GbbvWpDEZgn6LS4s7aExA87xyNJM6wnFkUVd",
  "key32": "2ytnA51B7swBxaoGVsCLat2pno79PdcuN2jVe3TDGVNT6LdUhqZTjzH1onQ5FRjpbx6xQFdwxLxWPXnHu4j2K7AL",
  "key33": "2XptmEHm7gekpNNYGibb1VCWCBmF9y9UNgv4XgaNB8QNmQUTMWXWnUFFq6tB5hagVFzysBvCVBgft82Uk8Gp92UJ",
  "key34": "Lc6PgbFEFiNgdMyMSihT3T4pi4Qa9Mh1hpmniY3hPPqYzdCtvMjWm4gkrx4uyHfVTdCMg8uTErYA95BErmW4jYY",
  "key35": "HTydSHFmca4QdLZumZmNe3KC3zcHZpbG7Y8oEAQbBfssy1FuopeSmvGJVyGpnsjX5a6oM4ZHeZFaBkxhyifApr4",
  "key36": "vJMHsYLRShVsKUHu49bhPvVun1jYwh36x2MX4LQH8GJTLKA6wA3jkG7UFxno64Te5tLx9qayoyCpEbo1LPNUsr9",
  "key37": "2L7g8FKu9tg2SzG74hps3kWVdtPETRDjQiz9nhBK6Ego9Sz2RbfFkqeSGgFKVtj7g43qJeyEQzHZxLC12Kegmkeg"
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
