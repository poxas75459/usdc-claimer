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
    "5Dc5tP4A8DCM2zSfMaB9KQJJ5FT7EV2ytLtrqp7S4zf1aJViPFSixJLgxiTKtLL76aFSHifouNvE2KiAmA1UGmgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N1P553eUVgbdTSXYkEMJqjYJRCLkkMuayNDJytNiYJMKEhTmWMLxhcnSGV8bngzQe6RANfq658UJH6iECz6Q8BU",
  "key1": "s7LgK1C4zsFHw912GhqNkNHD5qNBgMBpxo2sSUJTdi3X79W79gsdAorLMPvqqgQHtKN9G5ZTSJL34J6qSTKKiFx",
  "key2": "5z5DYCFPRns2eX6vzcVKH75tCCJwRWBFJemHqumV3yhCkUU3Ya5v1HFjygSYpu2kzKqTkeEZDbxfzSNEE8xhv2mN",
  "key3": "3oi2bmCudSEUkvQJdiPnDZMG4t3qPdUgxryWy2WPhAUUNUodnHAQx2pWbKAa197617uDyDuh5U9VnjgHsC5cLs62",
  "key4": "SGa1oo3nRujXLuHt5LrzgGzqbwZhfr6YWeBUfizbFysmuSgkCxd5BPNtd6nWYaf6qAKoM8JzfrdKjhUuFcFmUra",
  "key5": "B7hkNuV5mhnmTheW7N9e4Y8KHzhW3WqU6n7soKyr2SrH63hxBVWZddEvCGVTG5hpKwGYja9QsApeFoePdtQgJ4K",
  "key6": "3vLjfKETnUkDUReH4BycLAsJAXxriuL71Cg8W4ygd7LDj8JSppEaqhBwt8iy1Qw7hiJrNAGf6VuT5q5haEuTaMsn",
  "key7": "4cUZFL8kwHC9zM7XopTLuQmCEpMHtBMNoJ68tDPEpRxpCXr68qaRvfhc48xSaKMbS3H1YzMo73n8VTKTjAYbEsTH",
  "key8": "2V2j3hupk6rL4TLNVLXu1tbmH7mBe3VS1PfhRMZhuysHytA9fvgCyoGdsVcFLSE3BR8NzvUchWPJAdmW9Ebwmimm",
  "key9": "59hktEBPhwjYriZDFHPD7nQQT2dVC4TcHWzbPSye6z3JMqd55pGmrhnBfgpfJ3b8EAHhwX4i1pbJyzBh2R4TPbRf",
  "key10": "45VEWiMm7xUS3wiC2Ez1fsk5bAjyUoQEt1Z2WghbeP3AmYUbedPHTUGYXGSVFsq2S3CkeRu5P8BDgTpsQ9UovFuF",
  "key11": "52ygXGwjSZ4JHHZxtwzatx2EFJeRjAQppZrdhMQKUgRoEtTvfBmJEfKiCfddQyEygYPx2jc5Nf4xw5YQkKBEUrTp",
  "key12": "2uJEey2Cg1AHHTXQaKUJJAq2JxvkauKT3wBQowVwecS5NYEwAKEKxJdThFvydrFtWwEMfUA2BZjimWJVuX7uvkBP",
  "key13": "3Xz3seuhKmdCazYLYgBRdBWifVUC4RQ1pw57vpkEYZETfvUsd4pFFP5zVTLSBtKfnXJzpa9Ezr5GC73EST7Su7Gi",
  "key14": "58PGAUr3C2s5RK6SRNnWfNQf8AWFSZ6jSe9vp3chXCU9Ww37r9NezXB7JedUnDAN7xMNzn14E6gybe7NhejERZy7",
  "key15": "3ZsPJX3DSvt828kusg8XF7Ntfmx95F7kwePqQUg9ySDz1UnLWuwEUpCD1j2Fv6ajt94bm3GGptoyi6NRZyRdnj38",
  "key16": "ZEffHvBLgyd1vvUetit3powmq1HUW4GCfwhxorxjRE7qsL4yj3Pg62DHfnfXUb2nNUgknYGDpJRGhceEQqn8qHB",
  "key17": "UktcAZXe5btbXR4FBEyNdYK2bLHjai4mccSjQxAYdysb5nnJSAzsfePyPr8v3mWBP88gjqPYb6gDS1ZKtAe4VNF",
  "key18": "25EKpY8BewwLNpCtehhHYueUAJybVzMcsC8DPFngJ55LLyFKAKgxNZzVd9owBUfsGg24RX4BJzygtEd1SQCDbe8j",
  "key19": "3vS47obDDKGXq9WXmAJo9f2UKHP7MQH7SBScxcm3smmSi35jQ5N8XdzSUS3XRuf1QXQi2cbFCPyLdZiuwUXcLwzm",
  "key20": "2X93dSggGGErCBksKWWMe9n9ufMVHyT5i4Z7W2VsiuVoxFEJZPBATSNMVhPxmESY68yVFWbHHx3aSj19P99B3hcQ",
  "key21": "3MeyeWjUbct34eQ2PuHW8V7zr3goY8g1k75TXg1MhG1EjoEHA5CHBk6tt9bCiWhjTTPEjbyebvCmwbMNoAgVe25i",
  "key22": "2khziw6LdLHPLVkMsqsNkpzNn3cArhK5aEazMKGft5HiapD8JsVR8JjoNH4yVUXZBTQZhcLDTjpUSyvZorfDtKAn",
  "key23": "GSFu7hjMKhZ2BKJSjPDVhvWwGz7gvF79FJW51vMdBtHriQxmeR7gvQZ4Yys2hMH8rkzqzPnyhdR1N2itEeMeh18",
  "key24": "4m1rHB2vm2kdbKnUXGVtwwABaP9FyyK4tC8v1C2ST5J1oRgF1pGcxky6oAzWY9ByoCKqFH3rW7XkutSAPRsLQpRS",
  "key25": "4yWnKD9G9dN13DWieJV7FMfjrMMLg8iEkgTpeYqNU7x1M2zJ9qLzbCLLfoekzwsMa1mn966te3ZvqBsypccUnrop",
  "key26": "3aZUGjy17Sva93ve1gZLE3bfUPwUeahrrVL4ZTuXiYWd97AMEYUCMD4VPFRHw8esjiRdtizjcUT6kmvfgFoBnywW",
  "key27": "DNtwvPgcU7sBGdqU3RhTmWDrvF3AcWD6abn8KEPsfuZ6HTtavhJfGGPDADTHsceUV2MU8kCQKuXNAPMakQYM8Bt",
  "key28": "4G8cjVmPDceU9mwTNqQB3pjiDLvetvJUYVZJ6d26J3rh1XH8hkgUrrrsNgjHiqN8MBcH4Wc7k5yxofAvfCafVT6Q",
  "key29": "4LuN89TYa12kMbA8UUgUcfWv8XnUGTMU1UpWznqtaC8nzFudaPRuCTPWCWWqxvyKnrx8qi8EzXtzqQhQ6iCsVNeb",
  "key30": "3D4yep4LhUyT8E3JU9shYPbU1j1FChDStCdx7ySDpLbK5pJvovNwrU6MEWg1WiDdBTrVhwci6tcR6pYyGfwxAXRZ",
  "key31": "3MeJ1PsHak6fUnEBdBfgEK7vo6CG1XS3fKmDSdKTe2m9rBAjA3EP3gfct4vJs35kcmnf93qX25Cjez9PkrDxoQ7i",
  "key32": "M23nDXRxFUqG7Hr287VhDi968MSwAMxr3RyzCGeLi4FKGtVJN7nokufuMXGgXFwRfHKXZ2dtAnED7c6CEu6gHnY",
  "key33": "WGeuomjXoYbocstD8FnKEu3tbfhVjNmXmnNm59vc9C5eVXie6ncY3APghkXVu4LbqjCb4fEwX1zXdG2bE7Z2wRP",
  "key34": "P3ZR1YoEsnfL2AhZTGzaXj1JsoAcxkcQr6YJh6Cp6wKRq7FY3jcbUP7tC8u6SgNa88fEZNUAC7iXMNuZvV48JyX",
  "key35": "L69ZAVj5MwgqF8mEpkHLBs7gFSVhMY4xiaTFKAjUmtv1EYwTrwHeuiRtG8W3Kbg31sbVPMA5EztuksTixXD83bV",
  "key36": "3FwUpvCSsG95oXjzwapBm7LjWqJ3dFF2onGiW4UXxV13uibRz4TLaoVWJUxNtRfTRDtFAYdw3dZqBAuRJ3igCkoR",
  "key37": "2yHQpRL8aW9LW6JSbdxKDSMPBTpb3naisG49pCbdL2oqmubHcTQoRcdEMCMfDy1g7j1u3466CGcaQU3FasK1ycnw"
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
