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
    "39U6qWfPqcwSnxsjBh2Medsnrgasdx4hUUrqvwcbz4e3Z4Y8YRk8vg6aQGmXVTjpuaZEeMk822uRqR1QbbKyB34X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nd8PAPiavfonpQTg1md6dwrXpMMFdLhBw8ysfNJZtxwPKSRWeN8feHMfSNQZUAKXwakeTQR5wbTX8UVeKPsaZHC",
  "key1": "CacjuZXm28BfJ3U85D26gREqPjsdhniUiNJZr3hh92n7NCnZd18Gofu8RopbafqMPVEc22hDXWbquEJYsxkNAPr",
  "key2": "4SsEmkwm2GRo39YpARSfkapmPg2mCF6MXjje9kCS7LZU7oAfNV7epWke2rht6hed3Dc2Yce11TpN8iuPs65hrRL6",
  "key3": "4uHgx8NnZ8vi1rBL1nVFq8WHYgAMNqHwXGg8WYiaqBMayGkfFowSYE82vanTtkFmw6m9n5gF5sXDo3w6f1zSSMH9",
  "key4": "4XuCoxmo5E5tgBMWNd5T6R25beGvRooj7sLk4jaGoZmhJBDHyNzervem4GpS8Fo4nWLKpBUWhEKxzafGpbF5mNBL",
  "key5": "4Nkdm8xJjFJEWyx5fn5mMFTLaa5bo1PNNGYhJ4cRaHEuUehYCnrfeqTnfoZ1CDEaqLog2NGRfCMYvwWZShBrqQTP",
  "key6": "35SQ8bcLpXS3SgHFzjwvmk3vzFiMndpKW86gMfv9pTjrdZavGWqDS19HV8vvHmQrmnH6ytTH88BsqbKYSYKsi35f",
  "key7": "4DwnMipdMidEjDFYRjZapm91CVTQnimd8bp8sApZat4sK65a8dUPYmnjXZoAjVHhxDEhBV1cZCi6eyYiejc55HuQ",
  "key8": "5xqKXYdXAgEDUxMaC17KVKjByRCgmKq1BQuD3dsFTfBWLBbaXBnpWLfQdLn9caQk91WSUjuoSJT4EAWnwCitRLA6",
  "key9": "39Dq1TRnQWfr5nSEs94LA8QsTGUmBQh5KsNy4FHYdMdffxWB8J8PZe9qiMz5CKFyDteGvXQYM6aaqKS9W5MDaviz",
  "key10": "2zbpJVXiwePwAqEaJuXsrkF2GfHNXYfEL2XeGoLtTc6G6rN5WD1Y3joaXPxKmD9MLsVhxWzbADVEMEXR3tqUyWMs",
  "key11": "5YHKqYdQRB2a2MEVYWpfer7t389ZBNfuBT89qrcbmbaSXYrBxomjknQifKamWM6XYExnTcwiMntG4WnFYbULSbo9",
  "key12": "3NaUdRyRGjxk4n4jtvsGxumGTvYy3mnRBuecAXtrM48LD35jLdEq9YArjMj8Fg3dULCmGz8ww4oj3D95ZKXsa687",
  "key13": "UmGC2Q7Nre9gGnsAcaHf51rCxU4pQz1b7gTXwnq162YcRUCsXqJuPG28dzXEQfZJjC2RciM31m9jzRMQS6t8wC5",
  "key14": "2dsycAikKzkqJkoBEsYuV9L6W5e3Fy4nj1LDue8hchAXT7UZQuRJY94am4QGxyE3eKfptbN7NC6jpL2L2dGWx1Jg",
  "key15": "3YHQRUmFYyXCzHoeijLnPvPtJTicbq23nAGwTFEAvxWf4uztMjuqLQnzFePdUNrrzBhYa3uaDA28YJ8iXdWW5aUU",
  "key16": "3VN7rFNuEbecXd1spKv3ze9i188j5XBz9uXw2MjrTRGuwhEJ88UPwyUY9ihiKLRmuDpKM6HbPK4otPo3X5kU6bvv",
  "key17": "gV4DzKZiFxoyZVLfyAd7zzuxCJguoutXAHK18a3BBg7G7SPUFZqJVQe2AHSbKuFbfSj3KH5A4caKuq8YPHKTZuE",
  "key18": "L6bVCYJa3FZPSGjgEbrvskjm6T6XDEspPza6TYUZ4T6ARsNDoms93AtZJqNKqC3kLxEomj8SfFfXxig22CMA61B",
  "key19": "5ZTzqVZcZUdEBDQPeaqyJrbUDwhv7YKpRpUsweVMMDRHXEcn2MuvPAdv3g6hZKPjJ3YCRRGcJKnwPKNFhdsvQdtS",
  "key20": "2RtGtV2utAFt58D3tAvgzpfHnz7vcsJxq9R1msUqGRaedzeEpADtmYhXPGncM5Jj3ELWLYM8qH2ovmTyMrjXNu7K",
  "key21": "3LuFjhFRdNNFigXDDAUfEwoNn4rFMqhLvJdycw26p9JDMi2eBj2LN8NrZgeFtGLGh5kQYG3i4ZH7CpR3owVP3GQY",
  "key22": "4U2VXLUo7SWziUBCinWqGXhcSEfDgpZ5uzXXvTdToW1PxPio1rdP6ePiXDVGXZSwBQFM2zGFNh9XGCuk3FUNWs16",
  "key23": "27n4VEzkUGwHX6uQSXCcLKKtZaoJEHuiRkLSddXdbPwW8wnXqE1ExewaXZEWQP6tCWMq59wRvXjVuBXZ2NcrBN6q",
  "key24": "4sH7tKLqQCD3bUHzHxtaHCZm5Y23Jr2srTwWG6yb3k3zEDQAVy79kkxpEoCM7LtuSei7cA7QscNSpX8hcGQCXBEV",
  "key25": "aHJjKDhDDiHkHp4YyYr7LTi3wsrq1ceqmLJd8E2FHKhXgMyQqrp2BVDmWePAem3Q6tZRPhFjnigHC5PMndkzsun",
  "key26": "2wJefHuuF3hWxpVgAvMu1kAq5qTy7fLjGocXix9EUHg4ommpR6cT9do6oqCZEHaoRcFeZYTYyL8R576YyVbNHq7Q",
  "key27": "5V4WKtBoqbVNeiBBhXGZSG4muv8ymYcxjZTjhsLJ3gszEA1Z26aaKaAUmacMr8aUnsPf4QXvzvZVKsTq34GTSHg4"
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
