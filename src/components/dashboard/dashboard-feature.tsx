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
    "2wNRku62uWnkoXrRjJoE3FAAeLJPMfFw3KwdY6Nczka6Z4J8QUZFT4FKLDoWTKZvU3VyhtT2dHwACJg1GGccTEiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sb1tz7PmpZRxJbwYJ7gNE7NUWoCCQJKsjgNDbAssi2nE65EyuX5h96f4T6ZokL5AQ1oK2yepkoyz5Lande5rcQR",
  "key1": "3BVrd8SBRm3HYJHe8ASotAeNubKhYMX33oNrdNBaq1CsyAjbrpjgJoRWFejftuHx4BumHjZH5NSYupXD8HWbdRH1",
  "key2": "4LCcjGGj7goFC5cDvrarE461PRCrGqrmX72xDdT2SmYoJrd85Y8Si3h3mf2iDjDAqRRpXyh2XQgwcsz96z3EzJuU",
  "key3": "5tx8eYS1bgy8UunDGFvjkYEwvckJTinzUAb2M3pLw99gkyubZRedLRu14wRZ633yKbT2cnqSpxGtjWNb1rJ5FHQw",
  "key4": "4PVzPxivLb5pvNuW1EWd9DcDpTNp2wSFYuTBvGSA21ExYWvrBNxznzmJmuqVwRqnk5g6FX2cC5VDM8VUd8QKi6cD",
  "key5": "4Jk3zmvVsyADcLoNWNpnRGessAim7PuzTdCJGUV58a24uFucgT42TSQiuuJKRCTmwcJi2M2BdW82QS7wzrAA7i4N",
  "key6": "2ozfmkhdm4ahV3E7oS9NSKKZMfVxdvfYZxbd49CZ3ZKRTD5TAiTrSd5s1xPh9ds7ZU99jddardSxiio7uLddL51y",
  "key7": "3hGS81NBZ2t68fPaJLgLy7J6nRL6aHWrXsaQgV2DTTfPRo37CESyfVGc2FhBWfJhAV597GuJ8Zmh6x44V5LT15Yr",
  "key8": "4u1pBwyHi5Ndx5UFeYBnYPLXo7DjZQoNwtmBnKwntPwqdFUeNgGtA2XFiEuFwx9mdCYpqDz7mbEFuegsvAzRYGYj",
  "key9": "itj7FHcMZiQNT2jQxLiiDADFsS2mSphrzGWii4EfCw3d7CC9Fygdp7ZPL2BFGA7ZeDj5E1eR6Gu8xAhpAU6jSnx",
  "key10": "tqiiPVGxSqYFr1mDuSiWcDB6GwJfj9jjPgcsMYgABJdEmwBTdTjsvuDXgGEq6JdDL9ug3g1cUkk3Hg85hnvoAUt",
  "key11": "5p254SVqrm2yLGhDGJLcpygroR1weVVqt6m4uSkdmxDoxaKDqfSUJxBRCpLcyB9d5dRX8xSj6RpXiJvztopQdXB1",
  "key12": "SXmB4iPBEtX1kQoC6iEAVwHuagC27uQ7F6PSyUv8K7jAhZNfZrp5b3TfXt9gMYswB2ry7fC4qNRVrvibX2PqMXW",
  "key13": "y2woEmWpvoP493Gdoag2JxrXZ3hg6GkdvDKpp6ge5ttKt5vGj4ywaZwdCwvYgDxN47F2HArtKvV7xzmyaEEX6um",
  "key14": "KDp1s6BhJPrwtQu7hraSAutQyqdVSqTnNtxJMyiFL4iH8xpTtG4G1k5aUdP6TPaEeFVhqskQRtkde6NWaBY52wq",
  "key15": "4pfZw92sHe4wSZWzdxGMHq972uf9q37f8rqz41kwFzzKrh33iMurWuaQPno1ky8F1A2r1yswTN52hMF51cyBjg5m",
  "key16": "3DGLtRb68GgXbx9yN5DDcr82f6QCzELSucMMNVDHKagmVvRftdkD1KusVQnQqf2EUfACvD2abu9sqLPsSwWdFG4U",
  "key17": "4ewQswAiMB84qZNTEUbartwWkXGJ55nboP4o3nkRkPpQupD6pdTBZHC9PDqY6UVDiBN8VQSLLFueNKywGcRfkdV2",
  "key18": "44sQSWknhZUx2VPGUFeoXqXvhTUaK6tCYgTVaX8bjQvwhYCDRmNmauxdYLivFMKmoTmP21RsWS6brNesJGXPAL4i",
  "key19": "2b9KH9gBCXFVTEHzqKa9prk4XD2uGT5vfKLzkoeKbXKmEdjKQs7Gf7pGLPyFnfAWLcfjmYGdnDs8cYxXLEdCFmfm",
  "key20": "5F6eVCf1sz83doKuxbjWqsccqhdL2wuVvVV3dZoL2D993cj4ExwVRAx1e4QsW8NTsYnca2mrkFdx8Rxwafrxeh6N",
  "key21": "V2t3kYF6rf3GiJqCX8nd4h8TDd5GETe3KiZERZWuAeg4K28QFooqfvoaYy1H2a2fMkZR22zm7HTU6eF5MrQr3cP",
  "key22": "2rbMC1DyhvJ2kRrEiFv5DymumsAv3p362u5sv7MA1mLprAujVaA2daCx74oaHoAmpCTjDbhoAKQeXB8yeSXTnfSg",
  "key23": "2fxnW3h9ZXYFvMAxC1H1n59w7oRz6SjufCmeuRTkoEbGMBkUnm249DNpcjBvTUv9esF8saLKfLSDKTmfh7u4Tk1E",
  "key24": "2f3TAaLvbfqCAz73B6QkeSBkC8ZEUuaCDhncWDojghknEeYvXSzbaWVMsUABqnYEUN1JWjQANYeHM9MEnnj8T3Qd",
  "key25": "3oNJV1fYixXNQNxSWpDLPux2PB5EGiJUCGtBVaTs1P1Wk4jYBbGUzDtbAM6Vo7f6fCxSXn5ZGzb4H9kszXqP4erN"
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
