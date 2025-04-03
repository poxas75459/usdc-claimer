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
    "24syCSH3Z7WzNsRpmjxbragykLSdDq8ksW86xQyoNwgFNJVmRQr1W1fimbLuLfSiyMNUWnuwjNa9cKim9mcQLx9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gTBY1Ck2LA9cGMcdnwfFExBdDMJmb5s6uKdCxvUErgCUqrqw6TV9xBTX2R6145hV8S8MAJGpTnmHvAfsYCfiJR5",
  "key1": "5MZCr7BNwacNP8taJkCj3KRH6d8DPvGg67iAsuW3ynjtom7ctYa4xjnS6yyV7EUj7Smh8QQwoyX16joD9QhzKhPz",
  "key2": "5HkuAESaZCTRfztsjgXw9nfHpPsvv9JT9FuVQ8eY3av1257x7X8MxB6UByTVPounmoaJrvLdFco8evs11vUSrA9D",
  "key3": "4BAjmTR1gDPft8EkLHmH6D1i1BaiZa57kMZ9ceAhjFxtpkouvAFQvNfRfbN3vTvC75i6qWbARR5vLedHvygXgjma",
  "key4": "2Xdxyqct5cy5DCX6jYKSUUNjLU5sqzvtrkQWs56WerVtMubd3gK9NXdXBXK98LoA54b1VJD7vi4m8RMPXtVwZf92",
  "key5": "Q7QyotDrSd9oe8P6QqRmDqLxL27owxyrPWeVL24GT3HQusYSXYj9kmsehbcWqvcCFEkpj73eigamtDJtyrrsr1r",
  "key6": "5m6GMDRD2yPXUEetTnBv53b9y1NNhRwTJMPT6R3KUyoNxoWRceGKwssz5cRaKqLx4sdK4UJWyMRS6nmvaRDw6oTX",
  "key7": "4XYUWTdG5z6oATJPYrxFSjgMHpKhG1HW13EYp3y9zrcsaLzCBLpgzUMqzEpsgZv7FC7tMyyeHHDDMgWPtVvtPakZ",
  "key8": "5ihH3XRc6gCxUYrMTWntQ69jF2YBN44uTPqFRzky8s9kYeAxVfv8F5P2NgguPvtoqzKtzjwVEerrZi2NVppwehdK",
  "key9": "426Pa1BEYuuWotqgP9qyQ1QsbDroH8Jd4yHqp1diHWVaSQNWTh4v4bD13cZM63D31joBZFBftA1Xa4LQveovydzb",
  "key10": "32iwrgNga9jS6PXUG9v9PgxfNDxBiFDiYNHNsXeaKzRJYMdQrDUV9kS73ZExmDwnoTr8jicpdLy8EZij9yvi6WjN",
  "key11": "5coVFu2NUzxh1Q3jLSZGG2KeJ3gThhBSvgszCB8gNu36fdoa74M5uSnzGtWRDYAc2wwdu3asLPdxUG3Uje3yV6gR",
  "key12": "3H5cFRUTMKpkdFDQCMzRZGpR9TSjzZ9RvA3b8M9wX9C25m5Wiw2kz52bnj4kwfVAT5VXczDgSxoch2ZEqAfmgHgf",
  "key13": "4QdGGsgTq2u8V5gUPMTQLUaxnj93DwpbUAjyYV8a8HX5eiAw41XM7QaAGEbks5M3FwjVgtB9bCjEejFsNJtX8gTX",
  "key14": "3ZbcrbjtXfeDBDDMDCvPAzGRaegs1qyTT2tmL2zGpnMxHH3QRGBiv5eQPYvdeJ8vdNS2csQKgoKeFSrD5ChPUsBK",
  "key15": "5KdnBUXFHRQKjvJNnB7iYz1ocU45NpzwNgJSx17DprzNSc18RABxZg4vE4eXHMXcM4CzEz5mUavZjucPcKvYwhFR",
  "key16": "P9WcbRnTq165CaSVSVbNcSehTKEGebLsH2oZh7EUeERgc7qjALqoN2zcCMy3Bp8sm8ivvoqTR9MfsZFh8e8e68G",
  "key17": "5EjL7Rn16d1EL65FS878bABFiZGdHdZv1h14TceTUpafxRRdrscESWkoAPFgdqb9wUWKwQgHMVdqnG5ziH8s6Zq3",
  "key18": "5SY869YNGVVdgfWEeJfRcCGCeSRkffrCXo8EJ457AS8oZqURtKNiZgoksvEEL3cFgLeJGr72UUmUcGTSqJ8fA1hu",
  "key19": "5m87ZpP8mWBZ5UcQRnaYSJ8RsHwba5gMxnaAMQjmAwknaDW8b918R4bsVQZbiCpZLP37z8EQQ6C1v5WJufPxG611",
  "key20": "2UUVZp1mjyKw6adhtX4D1wC6PJ39mxuSTTRBTnurceefpasxTaiBHufqSGqwo4M47oXY9AyFzdzbJYrx5vodcyRW",
  "key21": "9K7ERbojNjuxoCge1U5Lk2tAVFxLRC9GJZHmDBtvG2aGVtJyosQVrwrwWz2KFYpSjjkAuzZVmouVnrRcuytqpk4",
  "key22": "4LzMRjHRQgimABsHYBxZQ1ARUXe7RAjdt1msa9rCL8EWTmrKAvToEQAgeK2oppqM9VPBB8fQDR9ZBE4uU13hU6iv",
  "key23": "2XPAMncHdEtXkYpM9NFidK11SoCVtdbtSrWCPZXxqiNf7jJnPLJv5J2XhmYbtjSvr37gYbdnJfFPP3szBLNDvkH7",
  "key24": "2VD1W7MhBCyi3GWcX6MASubJm4syGUcqnWaSoxFRokjCsnCUi4ULxnL51rmEJCFDNBZRvNUpDBjwPTg82RaBWLkc",
  "key25": "XCPjutXeb7g6eEVBFKqrEgAvZuJ5scx9nUmMxHitPcsKJkKLmsdaocdqEukLqAd5EWUFgqRZpougznSxJTsQK8m",
  "key26": "gbmaXsKA3jKeJvNDzgJWEXDP9XT4tvLnrpM6QUGDYNfpd621cHS36CQTXc1zHXEeZSKHmm5T4GdgVxAQamBSB2q",
  "key27": "272jwKDujsp79kNonNkqR3i3WqYTqShTA6s5x6cWuFt41kqbMxi9Jt12TN1B2zLWydrpjmqx1XMR1FEgxCbVwwez",
  "key28": "4CrZ91rjFLCwxcb2eDtjLfUVrVvq1Y9dX6uKr6WepB9EBS3dzLMHiijzyug7w2Fk5a1yQu4siz7qjbccW8DeCU7T",
  "key29": "ndx2DasQpjXzQHyiZGF8dnQ2ZqcimHdc5DGvVuLX9PtPHQqKc9XmHZeFS8fWnbLQYAQDk7dCmaCiiQ3ThEQnPHh",
  "key30": "3BepAz58bBwYGuFiJNwTekUC6TiKhDXhNwfFhGPJK1EZCFZrWdvy4jzcaeq6zbbWfruMiVFzaaGrDXPcbAGmSpFf",
  "key31": "43X7bBBDf54BUKteMUnxaRyienSoqGD45aDJ83YkZ7BkijJgA7g9Y8NNitiSyCmcqL3fcuT2weNCTRz1ovC9xyhG",
  "key32": "5CSEmXZWkH2LFLN9YDTK97BGT37gDoavmNFkNyU4fLB3AJKtVHpiLpi3SU9g4T6cXDpRzWorGQQR1wh9WqB9PvZL"
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
