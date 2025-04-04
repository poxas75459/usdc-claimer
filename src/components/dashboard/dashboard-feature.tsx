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
    "4u7en4nFhVo9VrSJsN5Pigu3y1NEBRGs7Fq2dBFAe1D5cS3UHfSibF6HEF4VGDH5T1zsaeoMYZGALqs56mipcRz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aYmSc8GvcSx1ERkCQqfgLF9DJZNRx36QyZo3GQcq4CQzRXjt7VBkjPd8WAoJRZEHuWMMfr3qcESRAvC6JjVH2r",
  "key1": "Grgi1o5316X6YbT29J1iyp67wSk2DVRiuh75PdDStef4yFpRByKoyzChvhw3twAq1XaE8EcZcyWpumM8NiWsMFe",
  "key2": "QZ2z59UriGJkTKqTCPmw9xThb5KqsmkvFYVnn1Q4NuoXNky5djkm3T7iqEmT6fZ2xcPU1itMse2CR4KAGNgve8U",
  "key3": "5cPXfsNzcNjF9hvfSi6cECgYAXxR2hkhV2i2fZpAnYX6f5E24nxR2F96sjxtwSmo2PQPPC2ibCrPwYskCuJ6c2Hw",
  "key4": "3PA56g3vx7qGb6GrztRSNm8r97RxJYR3Lgpdw3HAYJng3XCjrLVr8tKG379mU6guAFd6NbBn1Y24hFYc6YFcyPF2",
  "key5": "2edBVdJSpAbmn937cWUNdwdVJnEiSpXTX6AUrKuAXtXHzhSCH6qxi1xkywYXex8hwfwmt3MQp7uEVxtVGH4DMv4N",
  "key6": "D8wC2GpY2VyvN8dY9eSD99WP3XnRw1Z1gHo3mYNowJqz4GewTZf7wJyf7pPT6XYA49n7F2uENkQbVBWqZvxoHLe",
  "key7": "3CCKkfpU25QcqReEk9TAsmiUqxFyew2bMDVYzWZKMgGK5efZwd3UKk91ACp15dve4GiLcpRctdGQA9U5fzdekZ5F",
  "key8": "3csccchf4KybQQJwPpTyMrm9Y9TFYJfCfVMjZioF2u8dvPgEmSqNB9LDg1qS7DpHa5r438mfW3f2DCgN4gh217K",
  "key9": "UTE83wbYM1T8a6UFRGta9wUKAe2FjEsdABW9oEKASbGW8afqFHQFkVwdf1MpCVJybRgaCXRn6pCCg2XjimTbBMt",
  "key10": "3W6M3jt2UHQ8HEbiZcYk7WbtBFre7952aXgP91XVi6GnorWzsgSn4ZencrWMJk7m3DQZ8xevLiP6zLGKifyecwgc",
  "key11": "sPgxAMRtHeEtTMvY9jrKZsGrBVVw4ppWXMkPJ2MsQcB9awXrQHzXE6HpgN27mEaCh78eusAhgSxkFWbY7zQ3xaX",
  "key12": "2dLU1UCnbix4kNq1TX6gFG4t6FqCcKz3Ma5eebH3b8ZRrAHDywdt7KinWgSHWD75u4r8MEBSXXe4sAsg9ZLrNUzn",
  "key13": "4YSwoDMxtD4KuFaeiab8EdndcPZPicnFBrxMLC77GqabSXP6iJm4Dtx2dTYN5QQw5UgiLcaSWoXHdWbVxafoAY7P",
  "key14": "4YHd9S3tfiYHKR4mSKLycrKkA3ffyKMZCRc4sv1CsYYJ939QhvmY8dBo7WhZovbaXM86dDqsdx3unfVWXajCfmSw",
  "key15": "3LthSzBRVKw4zNSYJphqEGT4WFNs9Gy2nSCpDqDHXtydNS8BppsVJoq9aXF2DxZnmwqx7eAinpuJEjESFbcrUHPF",
  "key16": "7NqTcfNugyfzSU4soyPmVnx4wBW1G9emaWq2uJVtpdP4JpjsdmxbhtjpzuT9JMh7ZDGtoo8CnWahzQD5QXRYpDQ",
  "key17": "5QJWnZqT44dX9e2zgV7JpVEQJoW93yzoDkDYKFU1a9qLqbScquvAGSQBuSdi7KJmiN2vJbgZinmSnbocAbieS2Da",
  "key18": "5RcyD8bLnRooDQVeKLKHsAZvcPHKjpBXNaJwV8WW8C6P1Vc8EDv7S5mtNYk5RVhVJRwBgenesMmyu6nNXdHdnb6s",
  "key19": "2xHuGf1dUBxiH3MMhdSNZsyaxZ5XuHn3kGcEpnV2PH7DKYFqzohRDETz3DzV3Z3GEHFL7KtikwRg2415BJ3CbEsb",
  "key20": "4UoVC1r47x6xM9NDN6pMZ6FYodZeL2FivVUKip155R3Ee6kTZpiHaN4DiWKKUGzEneL5xkhGxusdRXNPWtwBgXKc",
  "key21": "iSn5pGxcWA9HKFhs8hPzxjBhHYfBWwW9BPPWT1ux9NkaukUSpEuuCtVMVKUmYFGMjHCT3sEQnw6o7vqnQ7PojGx",
  "key22": "3Rdxy2UfXb5YfRqb1c378zwMNRunMZeWzFGAcaEmqoV11Ze2VY2MWXCqHL6e7HEHGFTzRhPPWr2x9s9WeyARxW4H",
  "key23": "29FXsSfdXLFGppC56Re9VsYsdNLtxXN6cRRZd6g6ypBSroyTvp4GY7LaM88QSXPkbphgFsxgGKFD86PkHtKHNVfz",
  "key24": "5JZsd7wwZtsUfjK1yy3JC2AE4Mg3Km228Rn7HPCyDzM72uQDZtSWMRTRKnbAG2ycym9mQyfEhhtonrA2YXSPumeF",
  "key25": "32mKRtQTMZmGWyRkq3ajCnQEYXqEMDkRNw8K8djiHhDick2YbK8MifniymBYiTvWbCUys59yEUK9FrvyZZRDvmCV",
  "key26": "46Z3kpwzUapyb36TRKCA5KXAv2mqpMvQPMPpZX2Z5rQz6rkmdBsjiaT3yfhi9Lm1Ap3qwoWvrw6dsMok6hcWzAFe",
  "key27": "3HGyPCcj4MoMmaKckR7RdUJcPVHrrrQfRzddQjpGb8YYXjvkqzhj5Pi5mjpxUkykrfri6UMJrsDHqHgT3V4gbDeS",
  "key28": "2R8nmwoBeKVnxW4QKmmM7BmW3W2HtKQMi85y4F6zPr2DvmG5oyZ4iGYKTeUKudEQvQnh6TVEHss6MGfQFKifU7Vf",
  "key29": "4bGMeE9nq6ifzBieo6mZYp1YYtKztt2pFX4RRZPjKc57HFF3RH8yYY8XAh6ZB9fx1Wnh29hMeZEs3j24DcYPkQrw"
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
