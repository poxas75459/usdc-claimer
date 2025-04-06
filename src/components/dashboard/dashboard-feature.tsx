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
    "67q7NJhHQ8feZUiBt8q9R4RmrQ4jt9kMhryV4aBnywbL1RsKrPdDth9RqghNS3A3QiRvHhevuWU65QraUfVACTXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CEbjTAp1ktFZjq68FjPhTtqzdwFR3QBymW7suPRF6VHuHs7Jq5s1ef6uyLmJd9xn4sVdkvjFwHbiS6c5tMBzPRm",
  "key1": "51uZ7HzjYPpS5TFjtVqfna8XQBT7WxzSgvmiv4ww92yv8Ui2E5QzA2v2b6uetsB8b75VMm2GSXeGQVSBj9JGCojC",
  "key2": "f3CxmrR1YHJGpq7aRThcGrsx5HhwW8f9dcbyvamJzz2ea6bXxfzMaiy98HeGuukDViEp2aKYscuHz7kqjFqWkv3",
  "key3": "GUWeMQ9YtUnMm7bXhsUaFs8JjbyVn6hWfqdwnV19FcmFmzJCWeGVgXxb3WZdxPxRhkoKrLFr4iccrb1ECNbYrbF",
  "key4": "tUrfGV3mSmQ1KadcEseW2dSuhzQ9E2cscQheTzF8cw9fyAqQ7HrucgucEaJcjQzkaoZemPJZ6sHB4nXUXTVKwbr",
  "key5": "2ZQJDJSwxpY1usJ4b8vhGb5AxV8VEMAPXMdcz2PG3dYtCs5Axc8UyPQqWuLZtnSoo4i6NRhb3UttVYkXKwFbuAHH",
  "key6": "3w6MCbkGmZWeh3bG6DcT6bq8MnL6aKcq4YBuG29rVFCT4S9hZCcVabPLmmiQMV7q6kvTERLZA733iQmz7DsX4DMz",
  "key7": "26UcGefTCMLrip7xJ9C8ZCoHv2U7cjAk2bbuDx7pfi8FsNL1tnYkYeAthEmP1M7MmoKXbDHTi3KpKNPbdjJR7f5k",
  "key8": "4EbvxsKRquFoFesPyduY9hkWXXSwMLnRPUnkZy6BAx5ZnDc7vCTRhow8K9JRGMvarTxruwnMA7MfJi9cAHX3AhsR",
  "key9": "39c7ABfwEPU34pEQQqy9kRCuKBRsEB3vMCAwxKNfYaKbob9ZvNSukhodATfU7oRFFRLpXhxjy9uTMwreBdiAzJdT",
  "key10": "4UV8kmdk3tL9e3zDFtvpQo1xnqvSWbjAKZqr7KZVS9CtPFuEPr88ohvJqmnEr73f7Gtg9kcCQXnQqPi7Pj5mRLZV",
  "key11": "4H11DvArNJciNo1VWgQ5gGr7xgCkxsYHc8M9gYadRMnq9UcjudbBqh9saFTKau7GF6Qoo8kzP7imEJD7JzMLLaek",
  "key12": "Lc9hRudTRYbBvqzBcwXoxvQmLUqwdp4NU9MzmXc63PxEuCMaLQhN8FYtBRgxuaNtDiGTxCLof5coQU6dfXXjau9",
  "key13": "cLFPKFCYzpbkQhc69eR5vtbGabEKHYozNgmMwuqibvCuK67bTZKEHCMVkn2zvrZPWspcFTf1semnZhXLmVTQETV",
  "key14": "3RHB568dG9jHPgob2xbGEkFVrwxethVdGMTAPt88uza5NuUc2XTCF3XsHzR2pmKkqJ3juPwikiA4Uy5LnQuJrhPT",
  "key15": "4uF1TSf3XEhRgL27YKUFGWrDNjKtUgAiCBgh237tz8XGkA5NA9rGpokM78GVzdtQtdxw5pyyb4LSYyrR3SZ7PQCM",
  "key16": "63NSuGaDt2Pi6LsT3JJ9SxjkqQXG2PU4PqyN92MozSgt7MU9qXxg6GFiHVNCSbbU2Z67pkUhpzR3CH4vePmcTihN",
  "key17": "3XsbMmEBK6X6RynhZRfXg3hHYoFT4FXFCVCpXKRSWcVjU79kwRCupqzFrecmBn8QmjPSNnjr9EC5wRP3C5nCgChL",
  "key18": "38b8CuoCSBmrdUWwfNCg8jyMCt1FkXSGyDguqsPYf6dijiw3nPPxGKSPXz7Vmqbf4o5tK7iCgfiDEDiwubJXLbMs",
  "key19": "pWLeeSEqWC1FaHvZqVGfsdaa6fBStqPPV9whERzuqKPnxf1n5uPruZGkx3QaFEfmLcaaTgb8tUCx8Z5ZMqeeWdf",
  "key20": "2D2zXyNU1Yi9T3jcvwbrQVigS7LUzZxxX6t2fPfzu87r3DgN1fvMRM2WBeN7PS9L4EeZXFg6zHMFVVC7qPsZ8x57",
  "key21": "3im1P6PC4LZGaLUqeyM32jWp4ZQLwzWdoCgjcxEMLnxv816Eoc3W7YHZWbfK4BjgixsetdMoe5UDw8Eh9ZRA2cRT",
  "key22": "uuS8JwWXoyyMd5NWUnWqgtMWMusRWgPh5eXrVAcSaYm6LGD4ZKFE6DkkdExgywARWZzUniEVuZcGaG1XKuAzYDH",
  "key23": "31PQDgeUXsznBafZXswEc8ftYymaoXx2hH5Bf3w85pi3fDt5TFPcQ8bRF4rPjpMCwqkiwLe3m8Rx49gqUsTwRUfK",
  "key24": "3u1xttzvaRKiB2BRpNmHqzBCPK7kjH4uQwbpif3n6vvsqK3WaNFhXBeQ9mFZQSpwQDfRf1qDuSiEUE8iUXW3sKxZ",
  "key25": "58t2unyMnqJWFqU7Xz6eRmBiuaiwoEXjg5MgqsRC9LSe1Sfi9GtsPWJ5bcNCTSNEuu5iSD2BqwhXSHcJx8iTykyz",
  "key26": "3zHitFd6kDJqNQYKz3v6oQ3Z3EbZtQrCtVFcSXD1xgFqrMJBexBVqjjR742iQ3Ne8cw5YtbWcuTHyJFnohHXAHyU",
  "key27": "vwZbmjGUqtoiZfVUUC1PkW7cNKjn1od1tRND9YPn5gB1BoeEQSkNnxqXZSzETS98f3Rjk4Nv616ihWuqXjFkNV9",
  "key28": "5UozvUYCCxcZ7sDxFfTQzBCcDWTU738GavHFhs2BPBmpHtPgqfQHMdvepjZBKn55dAaxfuddc56bTEYBLhUN1Qn4",
  "key29": "5uezxyXisvycjnReLFsQvEjRkoMAxMBMJHbHSLUW8D4A8jhW1q5PqNQhsZAYL9BRXCMfXsLjSzRfQ1TCBzsCo1Ys",
  "key30": "3AqAM7W9LSA68KfZcLXoBRKoVw59TmhDaX8pPfRVsPV68eGeK3eMDUBWcf9aTqrCJAcr5hC8xGJH9VrBMULMPaCd",
  "key31": "26Hyf3s5TBQcPzeQ1fdvQifmQ6vEouDRJCtCXDfToPHkW7PS7hLfinvRLqm4FBkNChsYCQ284AJHUAv6bA7BXDdj",
  "key32": "591JnnEKKCw4JcC6jEjmyfVPh7ac4wJkfTfCZwj4tEVXnqPBF8mncwr62kL5ggT1bRVrzN58NNY3ag1TU3tU5APZ",
  "key33": "94BmoEceUpeVAuGhpQb34J2P2Z78DwXou9P7MiXjRRNdKwktsr4xFrqeFy3Nr2Quy9HpoKVaXCJJfNkkHMjGwKL",
  "key34": "2CmUbJRBgPuMhV9MTqeBb1xrP1jYeBTC8EvqS5vCevD9HZdkRyMjbr3GWFKyJySddyfGVSYny9phnSfF6AKujSCq",
  "key35": "65xqBHD9WpRG5XnhHmAVWK4m3P9mWMhUnmYnzfDdn94vjDvSVQW2vyFuozp8sNgTxAzbFmebctbp5kwrqgzGnpsP",
  "key36": "4MSHDKEDKNawfMNZMrUeG1CeUSMaK6BcJox3rgyjuQviEcd36J1SeoqrqCeWX2i5bsMDuoJCQH2pdEqDgNyyN7z9",
  "key37": "7WTWSqfVNJTfkNPBeJRzDyagJt88StqBmdgeUhGANrMdn2c1x7kgdnN799EeVRZMBnYVxJSScsDrpxUvagcpn8C",
  "key38": "45L2gaVxmq9QND6pLwdht9kyBkR8n8CBzxFeYdnysJx1jSQtZNw8nz6bkveHJMta3kf39iMeTPX3yWVKAiYUjdzY",
  "key39": "38HCyBHj5gd3xMQuLU4aCpBD63FT5AEEbvo2ohcj3p2tXVZ6xfaPd6zgsHwqrHF69TrHrS19MN6MnAHh7cGp6ipE",
  "key40": "22BdeMuxAbDsJ4DEagawcVTCdP1kci62JPZs5rsoyzYQNWqW4yD7BBTv6v6sxRyCXXoFmQrqzVqjTb82ar8BoWZc",
  "key41": "3gSjXtCFkNRkRTo2MgeqnqiLvmyhUACX2TzezqkS4tQHrSmFGSMA1ngFuTwTvpdjTaUt4w3E1qSS1yP3aCrSYy6s",
  "key42": "5LZGqB2k7oskkoKG8uiTdzTC44NGiXBbXqqnQSeLaaY8ZEKULUotSqGYCgidE5HxNF3sDKFoWEP2SYW7NkbR3joS",
  "key43": "4mJXv5pHn8BQVxPiGXxv2Dh1VLZfT85Yz9VHePRkkbsn69s6Csq935pwTUL5HZAQzMu2xXj3ofTCEb7js5EWAY2H"
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
