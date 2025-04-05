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
    "5uK1Tnp6DvCL99RqKt4XeMRdw9Qh9ZD55ysAr7AUF1vV94VVAw1oDS5NaRLqCPMUm9iadfQ9RYj8xGRryWoXj36o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21LWcc9Zgg8itv2AzBdS1LBTq2hfvc2mZeQXQWcyzCgWTdhLg3yDgq6aTMaeYpRDr6TxLqZcHfM8EriSExjFzfnF",
  "key1": "2vSYWGQUuJh7ZtiXAXAtsQZ4mLAGE8FhL9HGXzJQvgXVNG3HWeWvqpq2mjFE8AFtPw5HTfCMZvMEpxoAff2qdfMt",
  "key2": "4cnhLoMcM7eGQNyoC8dchMhLm82o5op3H25M9hmg9G8a6MP6geNKovihB7pFvY3teavwg7gCCSCV8w5QNhgHQbqY",
  "key3": "3Zuzk49VcdS5tyt332TkuZ4sKY9WCEyFyoPBaxKgR4DVboNx13mnMUKxckurLyQdv5YeGnhwrBJajNxZTiyebbVV",
  "key4": "35dGHN4PqouvTZqoAYAyEQZ8BdgX4FFdhggDDbNzjr3BfZxzHKP5TJhdr8HEP2y8fyqwKZfWLyMu3EApjeXh7LFA",
  "key5": "2WmdDoGsy95HWfLAePH7khxLpTZ53VS269Jwk5QffSo5egcHLTMzWR6TdSXWqDT4MCZi6R1R6oEyjhZc1L22T4W5",
  "key6": "462DRs3sz7DNQLYH49QtUmibzM6wa73zC1DnH8rawLPM9TVK8uEWhvrmDJ9LKdPFmN7NXecYg7St5vEtaCmqhqHR",
  "key7": "w4u7rYBic6SwY3VpjSsjWSBiwDP2fCBDtzLArDiupvgrzbfuUjrUBEHP3JDWXBeghoswsScEe6zLcMmdDvMnmQm",
  "key8": "2gZ1NjE7NwHnQNYDkZyFrGh312WtmVVHU6LqpTw3qC5bPByw3E31PthUX4WC4GF1vtSMj8Ltp4vvXqsX5QEgrQDm",
  "key9": "5fMXPmu26iJjmtxYm59ctFmzyB2FmDtTTGfq6aALXkpUcxKvXkhFW8PbnhVgCPHKfu1JxHU5F1rxaCqPqUEogoFQ",
  "key10": "2GxUQGNsYWgxnV4JtFDH25pRkZMzMiBobgiY5UtAkq1SNMAWR6C494hFADZeF9CfDxK9f7oFvJ2CeXsAkJqxjR2V",
  "key11": "3LhqS6w8AJZ6Lcr8sWpxyY88MfjMYvXoCqoffbzbm3XjFnkUjKUBCG2D7myQbBK36xXv7NZ5RrQEXi9XAF8G4J9k",
  "key12": "3mK9hx3xMbTrcNkQEGTi8VTRR1vsGn7xBHTyfVYAGvbXDYvHabvZD7YttLNwWU1HMjET1i55HNDUVzbNeKsyCFHV",
  "key13": "5EkLwC7gduBZUj395PSPeNN1267Lrbbo7Y5c1UPys47myTrmY9dXRLnwhh8qMUg3FMwdBUML8FjrrF3EVu1AyJAx",
  "key14": "3ZqwT5G5UfgmMVpHBFVm3cSerADZqxymG1FH9BJksE3Dv7dWSJNhBEh1zxsHmzYbCUkgXAH6GEohzQJh7wVx3yYN",
  "key15": "4wY7sh4jEUycjs5RoQs4iDZM2cUfAZf8XGLVdXfF8fT5tYB7ijJt2yn9tYeHPKHtgr8xUUXvYAgDgV8SU7UNBGci",
  "key16": "2D3QdRP6tSphTDHo9aQPCdEaCzmWMDEDZc3P6PHXEpwuXkP3TNyq6GGDCGp4GSjSdpUK2ev12RAQoXF48TxwQZyL",
  "key17": "CaEecrypUyn16gnmzY2Pfdzgz4GuZBiuf6dxARg5Zvss8GCPQ8sbyUdSV4pk8qfE5cc7qxZ12h7eLxKSvVzuhYA",
  "key18": "3RwdcgEx2Z3yuTnZD2CDG4ZYZt4WAi83xseTf5HH6rzkpAKbX2hD5fobAv9JLtyprUSaBkURF5rg1fCYFx3D6ShG",
  "key19": "haYqTmWtbRUASb5vg5veNXzT63RBk3K7bzm75dJDdEY5ZdGDuLnUDzpR1oKDzsFUyQQTAqCdWciWdDCm4FXnvLE",
  "key20": "29RD3gkaTSGejpkydya3uNFnAiY51WvP1pehXoHS1x2S1qBsP2sjsgXeLRtLvgtMWjQrg5pHeTCyWeSAKms4RGqN",
  "key21": "5x9As4H6QuKVCgSQiRdhPCGDZ1gi5RCvnm21jgh7ZG9FYD6nWRo2BjJk8gPgaWdgrS2M6qNykazjvaFkiPUABJNo",
  "key22": "4PsuWpZoc4rxBhVFLLP4H5yGt9E5zrUXNZeFyHL9wC7HkGmYSvg4JcdxBPUU9u3zWg2RzZQv7gBSETEJQHotPLZ5",
  "key23": "2TohyFYrHLDMZLkygZjLyFsPAt1vD4jegKiiDZJmub5mmYbou7obAw4rhPHa2KkvqM2gcfDeKov9DZUZ5H7XBtRB",
  "key24": "64w2r4sKQvffyLKwqUEmNsYhqpbp6H1oVS9KswBNbFms2kgRLbiZyme92PRDEsFN8nZSDvyCYtgcDqFdhAUDZ1fh",
  "key25": "4y4U1MmoXktkMSpYmBtKxFxUd9bieYBGsAvrSYvHUsmhf69E11mHgPLRVMW1xLQ2wpBk2rhLAtu1Zkj8KCCGsngj",
  "key26": "4idGCke5b1vVB2NdghWiECZ5biAE1ZvWkQJ71exLCx5LsB1f6S3Np7wVuXvjCkB5MdCiYvuMk5wfPXXxWtwcYhWJ",
  "key27": "468PpqWsrHKqJfiqkHafAaNam8ijHRuPXZcRxZhyBaXrhNTa1QyFzDxAqbaSoPm2D1Mbaz2Kae6bRgNfrFJnC3aB",
  "key28": "DJDMpGRMNG1dAp2zbcwsuwBPDcENH74ViZKGqNKohZK7Dv8ow1pzEQBrNaoc6MuQufDg2idRUwYPMKNnTCmwr1h",
  "key29": "xjoX6NDxHwd9jtA7NZduFfaZwCiCNXADbpxfNDo1nCWzfGyeEAMUdoGWaE8S9GJpMeWZzZswoZ7qHdP2Xo4DXvU",
  "key30": "WP11LEEfK1ZwXZUjT6AA6RNJRuca9ujSokUcyzTMmsWLvbhiLef9sjN4imh92K4i8i4triK77TwC3ZFWDwgYfqT",
  "key31": "2W4SeTACGPbFbtUpgBjBrQFX7CkP7rQ7ZUPB48frghxtYGGYWpPLEauNUtUF75A4C6hJQSZDCUwEAtvSJYG2G9Jz",
  "key32": "4gwTDxxhffeB8ygp28KNjtcmaCNRb7P3H8mVqVop9opao2cZ9vkBLWJQyy6LwHqbxriqSBECkFYMRUWPpsVjgx1r",
  "key33": "3VGSvn1AVApkqZZUQfb1ao2i7SxcCw5VTcLqTm1hrF4hTxtW58BP7pEpzkJGfzohi1gqPbU1sByyZ13Acw9BTgRj",
  "key34": "4vpXwkiXeDMoRjv3dXsyRnWtt4RLdTea6kiqKKUhgwMFPBthhZ1AWQn1FmRApx2fbzK9pS11vcvzB8DU3wmGKmfw",
  "key35": "2UR5GVEKJRTgMHa2qr4ejL7SC53WiCLsutVbVzotsWxLp9StHBwLU1UPK8w3HUkw9v3GjW8ZKChVuqZsbfZ23Nx8",
  "key36": "4HMGRGjuf1Uk1jhtnhFRwn9zNkwF3VpBXZwUx9Kpjh1E7UkKpi2XvuWh7fv1YiDKynYtqBaotDWp6aDw1oCrSf9t",
  "key37": "BTxv3vYvXL6Arq7XWM6TmpNVAeJPPqoe7E9eEJzgJjAgswBbRFNjLsc6VVjuMPNEnrN7GyuiEBWLjVsNtXkLEvd",
  "key38": "2HnX4cDazcbGwR12KBVnrKtLB1yAxicKvEUhTgPv2RWoyv18BtQ8jCMyjY9aXjQhVFWf3ZKNpuFAG8PXWVLNSkqM",
  "key39": "4tQUtWc2Ud3T2VnKPiUUJS1d6JzHHtG94wKghUCDEdZNBzkjRMBZE8mVABbfCkHPQHR5gabgzsfP5PKfoE7spt3n"
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
