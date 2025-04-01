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
    "38ySAqxWYJUzfEfcCYYqU3wUgFSEheCLL4n3Z4FGRigkK4dB7N9oHaNYvhdec9fesmNn7NaQtVGAQgJ1x34nQ9WB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eXZB7guhX2NG2Q3tpRbEZ6hD9otLfPWaSrCx5KfrFxwXfXEVGZCrxxx1dZq1d8xxrkhmbKgyAWw6VymqEXXpq6v",
  "key1": "5562QL6jMANXUTF8uWY6eaPfRBHsgp6ow5VhGWuG5qAwoaQgg4qfbxb43GJ4UGh4TQvNz2wk4k98FuBNz5R1n4Ak",
  "key2": "61LjQjQGFcrMZCgmcd8viS7GaJ2HxTy9tWs5TwApfcdWheWWbsLnTYsE76mxKaUiUAHRp3ydyhoZuKzmSTjYKXTm",
  "key3": "2tbiYfALewtUeWVQzXqiS4JnXzT7CsfTdQoEGsrpNNXgvNbP5SF3YsEQRaAMEqxU4sgMrspc7DbVTfE8Z3r4pzhP",
  "key4": "DnA2CLs3QaAZuMUHNssNRD1g4Dws7L1f6Gm1UgwJ4Pv3f7SV4B9anW3QGhpnytB4tHZtZjHmr7qTsRqeKnPYHUw",
  "key5": "2P9a2C7U1r4kyqCVDqKsuaoG3JJiEmMfGx8otNq9dB19QbmKvYKh4xAA3vstygGkaL8E19uyL3ftT8CeiLusX5EU",
  "key6": "2BqyRazxiCL4m1vs8wasEghhLDDAPFyJTBtXdv6EJyFm1tU6wUw4SQ4eADASBTuzdyS8WXnt8JRrjzTAiLw5FVxy",
  "key7": "56keQhfQJGGzZVsks785X8818XtxdJEnZVMFfFPSyXzR5qWQUFRRwHwXXV3ypqhz6sao73GazjGnotgnhYArV38K",
  "key8": "D16iwB3fMqeKNf5ozs5ERCyCxpGaMZbHnJB7tCqoUdyFyYYvMioTgiNxfjR7B5RJVNJTNfxNUCeiC8HF1UxJC42",
  "key9": "51dmsJJyFj2Fkey8Z6hMTa6gsh1H37zq11qKGeE3TtCQWaNfQdXmkCowTDxdbRSTvP21gQqNSJgdbjnDTDrsdSQa",
  "key10": "5uiuHUtxphsY1QwS9WfrwYzNsEprGdsBxh1qkWwWUoMJkxbwUcKhWGdDeL8QN9iTixjDuFTcU1JLCXSdbLFBnjiX",
  "key11": "p1vYqLn6Qx1gfaB1ELy6txyyM7FiqcMaacuaDYHYRh4TmUHhwHqZTwMJmNxjWEjAp1YeGRopArJUbjKVAHnD2hx",
  "key12": "2Ai7SLQJo6nrg2EdJPNpmPZ8C987VZLutm2T7setY4M4C8zWHdDvcwSMGmLUjm5nTHZjXAz7pvcGCV2PnLcxaKLL",
  "key13": "3P2miFKZJwhgJDWCFm1B3UeDEHTkAoWkLxr96juViNc7C5ZRKEpPaSGFyBobFJSH6KSeL3dVCeZFfnGzAoJ7NP2q",
  "key14": "5oiWprHqjLiGMUqWnKFHABA8cXF8dBzdSYEVRiaM2BmjoaKMCt9H8HQD8Fb4pWajrp7VwqFYD5yUHAkDdBbG567f",
  "key15": "3X3z2mz655rQkLa6FxZrXJVmKdMt9rorSPkbse9HUoSViYSMpuzDLKCekgwo38CUMWD9krUBe43dEs2AQwYjsNfR",
  "key16": "62RJBVdTNHezp1PMuiEUETf9uuEPyRK3FHoGhR5m4vpBSAWwfQzMyfuX267yw6rQ7uSWdekAYSXmuGv4niQjvjao",
  "key17": "2KPd7wyVMde8ty4vBuKonkj6rGmo3gGzV2fMs1cMrk27G1ytszHKwDHbX8AjNPdyGym72mio8rkNddiECRsEbn8X",
  "key18": "GxR7GSy4163gpkrnNAfscufQkKVjuB1hK7Q8UH8B9fyZbCYEioCfxY5DaMZuauu3HyjjxMXT3Uxjv3cPvka9xLS",
  "key19": "2D8ndxbwEjTH9HM6Epw5PNMbjug5wn5MgdKsHAovjhnf34Q2PEy363WMRCiLcjSygYYoptHVatHPobQFRwu3ncoV",
  "key20": "48oHz3aF9BW8DofM6keVFNsYUPewfTnesBRiQUXcwRQqJsqhriKFi5KkPwJupcfqCzzW9wJ46PSgSp3yTAZufe2X",
  "key21": "5PsK3TUkWhHToA2Lm5hu57THWNh4R5FTrhkg2ecCcV5JfkWuiF7UjQ4NRDxETdyVjchvP2By3CTDjLRhvdBrQPYS",
  "key22": "3sBQ2kpfH7jx18A1ADKF4uAMUDeauAiXdCcbdxAbHvAWz4qwyxW6VAJjPp8qahgdmVJtV6PJuKn1Sd3YyEs4PA5M",
  "key23": "35sigadY87jXAopJC5YkmTPgFmX7DgghvfEQYR2AFYDGW2fQFmkbuMD7vMNnrDjn7VB3nKFuD2nQZr1L1P5iNKFu",
  "key24": "5FpcNkpMS45zUJ7pUJudbPowZtjZDgnFF5nDG5ZRu9qDokBygUeYvXTc99ZpGCoqW78Gm2cXEvBCmns1Dt13pv9Z",
  "key25": "pF5j15o769MVZbUR9t62w6om95D7yLFyPgyBJ3k6huPoM9q8R7BorxsGih2PY5bWAoUFTt36G46VeLh8S9JTp6U",
  "key26": "5KWktkCgJMgSAHdv4oHQzLD82UcNrYpn2XPnbSjPL1Lw22RGZryd5GuJ7X3Uz9iSNcHEvB3vhtk6S71toRcSLn6T",
  "key27": "4yUzr5N4M8MhJTZtFcjDfQb94r8Kw8QMy3Y3E7vwx9xXxWtaPmD39RSNAx5BUqoMwXP4vKMWnsVZjUX9qkkWFK94",
  "key28": "boG3EVGsPZWdyVRPUZyWjs7CdtqmBEyPBF9hhucgWDn8VF6nEZN4cXNbCKupgtjSs8yUqMQckvS6kDPAtstEKBr",
  "key29": "JTW8BwVK7HrhmErr6acByoLFjh1xCPoctLh42XtL5YyQytJjQYUP9DsMebe1tcv9RDkQus3tdpMr69JAZfsabay",
  "key30": "2AVLtnP6NJYR6QnQYfszbtd5unwDSCB9Ln8LjndVjhUdDzVZHBUpjRhfdQYoX2mWEifwW1mwDf4VW3Xyjrjy21ZL",
  "key31": "9fhNuUsNu3TmbqnbBXajxU8LXQTr4QBpBApEoUr25WvKhFpihgTAJYF8KdGo5b4UB8MYLrEw9Xgdy2MDVKDPrmD",
  "key32": "46LZ5BGiawTXZNFiXWQiTY1pAWFXTEXJNgnFe41SL3sY7Vr5SSUXhC3Ry6o1bF8sMBLikku7BiAWsqqskT65gVTp",
  "key33": "EppYa8FsWXqrdwNJzn3K6niET3rS7gMWbcnjp1EeperSQHDJFx3jBhYm9EmtyWkaSLjtbfL1R4DXgqjurFg21g8",
  "key34": "MogZ8MZS3G56VqdrLH8jvf4Ks3wqsfAUBdH9m6VUgms3sV1KVr1LrWLfNakMewptF693uVqPfLHUtR8isiPAgJ9",
  "key35": "5QWpbxAg6jWgzVjTo3GZ7PJJPgSWdSGLnUspaY4fswJpswtVWT5kgK2SwWpp9pg4poRVv7QfH4pkrFdNYxwtCn9i",
  "key36": "2YnF7WQ713CsK4e5LJmR5ZaCegJ5WVR9t5P5KrMZhTzEGj78teW24SyzfvUh33UButrfFsSyESBJV3QCbPMg8Tyg",
  "key37": "4APeLNuqcgxnGNi46sUB4tYPmviAi7sQC74nrr1bv175e8PftnHR8rMrbKHnfsczyfkhLLSxJZsvds6mkC3fs11Z",
  "key38": "3Fhb4kg3y4tbsPoLKfPYG8az9uB2c7u6sikBQR1HTR5MMHqDEGPvXWbJjRBdbrDkLbHv4weRQRKeXoyiDhgPEUBv",
  "key39": "53UxyJXvf1a6VWrVdVwtVEbCac86LW2fDrCcQkHBDenS86DgF7mTTzEqAmbGBWrmH2oXHTPQ447VA1D343K8E5r9",
  "key40": "5FjBh7z94uA122P8K3pgArobFKfDHFBMKu1Bb57wg3sm1CDcMoTiJFvaHCiSCeNq1Ffc7w1KTFrhF4145jhxNeR8",
  "key41": "2S2s3P5GBsMWuLw4peskJbRnfPVZoRWLTQYzvb5xKoR8FoergYaGUMi3BFLiddCGJsfT1mY7JdQtekbB44gsASsz",
  "key42": "5RoyKcQvCuAE61Ld5ZwXvnJB9HdHqAAavQzKMbFB2QqHspLyRLfDVS6Rv8vTSLaA2sWPXZVUVaB28KDiChHQsm8B",
  "key43": "5Yveo5h9VdDZ6QEvNpRdVZxTqEw1aDdDTXmfQWa1WqESU3HpeWok4MfhfKwmFSSEHr4U3XD1mmr5s2emNRBBERHb",
  "key44": "hSC7CodGGhHbQ7w5qaURr3xocWDmMtEpga3zFQNRKRbjpgRA2NU38xuTJuMDE8LyVwCUqLPBLoQto1DKKW9fCdo",
  "key45": "5aL8KuzNXgS4pxbhnMLQS9UtkqmdPVzxjvHksd3Egyf6UBnTRkNuKK4cetnysVwuffjbSwQSsD7QBJmaRadxkiBQ",
  "key46": "3jUeV3FCZHcfSufyv652o2C6m2pBhFmTYKjFyxi4fRGeX5TgCXV21LAvkFNXLiA1X2itMrWxhozGq4fzG1jWfV7h",
  "key47": "4pbRgDnZVah6ByaraMhVcAW73pKFQ9mzabDY7WPRq9SyCrpMQwvbEWpLj7fY6dDKUmFBYrHYra9zThNxtXgavmCx"
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
