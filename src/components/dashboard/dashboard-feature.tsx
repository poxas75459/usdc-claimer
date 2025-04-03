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
    "2TQHrs8UHgiNN88dmFsZpWbqQ44frYSu7uVVfFAYgRxEsW4dyoZYGwpyHktSLoGJgxz1DDAgkvwEPjDLt5obb5DR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oWiXPb1MYpX8DXSw3632XGDAjNhyiCiaop1QTyMumKiL2UobokxoWHjkKjGve7mihY8A7XGmPXep6BGmCoFkLMY",
  "key1": "3J3swLQCUhvma1Z3esdxymiXrDospLqeHRQXqfwtGtjQNRpDtxotb3jRKEtnPUUDjYW9TSaW2om44J2bWT6WfU6c",
  "key2": "2YSc5hkjW7fdLyJZRFmT8GNC4h9tY3gvr2mRRNW6GoKbiqdjRB7NpyuHqTYNACDwziPo9sZpJ5Ug5DPN7koeTzmL",
  "key3": "2G37gP1SbAaj56HwmGsL56M9XkBpEBHx1H1y9e964pBde4mGK6vg7KxYUQWm31nfJ21X3cY858pogTuXDnJE8Bbp",
  "key4": "2tUCCnsg1VGre2i4VqvfGB7RDRUpdU8qwx4XQBtt4jQJg8V2Nqy99ejWkbQwpEWpDDtT7ACRLsyeq5ioxxzKYyHy",
  "key5": "3ZdjnqGeDgqS7ZxB9u896PrqNFo2bUk9H6eqcJmsEAFx2CXQMJAaaDbHEVKWvmhvA73WcDfGFbB9FYBNUi2kiU84",
  "key6": "3GdhadZJ3GwZHrpnt9KuzQJRxGJAJH6dg9F6KkBw11oyWjTT5cTWDSW3VF4CSxkVSLPEstuyiQXcc8H9Q5qjyrWh",
  "key7": "2SBLpcDB24f87stF1Eg2MJCJ1ksFWAP5hMrgzJoGUeciJk8Sik2gYLsRDWW7KJD5N4ubbpAJ1HyPSQBDyFrLnYap",
  "key8": "3yH9qv1dkG9E93Gz4ZEXsGdKcXNCSZccaB1ypsXPiB2Br3rJYCt8vDJKWVoP6Zc3QhtTYt3TQAdXTJmYDotRCpd4",
  "key9": "4rE7jyHRZXDEvkJA2RqqmB2r9GN6GMUPC99G3Btv3Pe4YGEFR2HtNceb1XWj4dxHgM9jbRkpES5pmUeRrD6e42SR",
  "key10": "53T6ro24ShMPQyTQRnGLYGyN6dE75jHRAhxAYqe28NPcTJKNHks1XkUyy77phQscqkUFyz85kcJi3uSojJhrw6gu",
  "key11": "2dswAixXudEBqBECYZDrgexNTrvwTofk469hc7g4MTCgddZVv9mnfCNsYUC4hNRL4zRdeDYCeBpsxsecdWkVmS4L",
  "key12": "2eChu8zRvrZz3R9bRKKpNqk1CYk6xGHhTTiQfHPe4awhPD9xpdddkHyBK5NfksnB3Z3FnbHAGXHoAyM8VDmeborW",
  "key13": "6687fv9MTya83dYFoGjQ46po6riyWMXydqwNTtt3hn6PNnEH8RXTfCFEmcBKF2w9JYhigJ6N6a3XS6GX3jj8N5vC",
  "key14": "phataLwYD2Ac7UPmNw9LoE2GZGyB2Y3Ab2Vy2dTJG7NrxHS7GKiGrYYmZaA45Uycqp8YDvjra2vtuZ3X9bDSvWc",
  "key15": "23qUpzuMmjqB9a4taqoagbyErSvF3KHZhPu1gQPKL5fXuyeZF9nCkZMjXDXQuwMdRg9cyUryt2ENmdQqBNZTpaSj",
  "key16": "22H9JHgFV7YqSvaqz3KukC7F1vVr7VL8Bf6LKmJD63e9pvayAXEKSyDewW9arKL7FqpgsskADf22XwAx98aSAsmr",
  "key17": "2nEQWCgRYPiG3axZyX8y8FVsGGxJ87w4KH9WsKD3DHhmbAxukbGDHpWMiaM4myHgzwhAuAXncSzDdEPRHdgDcH2u",
  "key18": "4vxzLFYDLcsTr82jKsq8wCv9JydUNsEQt1C1fGKtSDF6aqFMKh72MS3rBNdXf8P5WPML6bWAQ7Q5Zwb9XxW7YMhs",
  "key19": "oenAyJqgvbreihjahGv8BfvEgsyEiTWCzp1C4PANFFBDKNnWq9JbJRFnvVP68C3esRSP1EoB4LUP8uftrHe26ww",
  "key20": "4K32NDzkXwGs9QqEYUvzR9dPZCzTVLiFVYaGdiXiRS7wuWKQSfEiTjcxa6osiANWTHmvXmBy6QsEgodcBFHWEgx1",
  "key21": "dc6Ch2prhvN3AVWU5u26KYw2WNbac9XteUfeLCFEC6rGaDh8zY6ALZrTmpdhjJZmKPMG4yCP2mnsEZU6C7AoFaJ",
  "key22": "5DE9y43npmh9yfyNmnHWAA5jtAHiAuyDrFEBnVQxYXpqnrmgsJr4qACiC87ZMkB5ENFEs8WStqW28UiY9iUoKLg1",
  "key23": "3UN2m7qFSXiUQR31SwPRUUHKiZbhwiELFHwxYTBwaBGgG2uERm2VqFL41CXx13ARDUnerAaWt5QUJpftprJ8zsFf",
  "key24": "4wkCPWZP1B8sXMK1tNoNMBsvDuHZ3ZgfHuFRzzUKabX8h9pLXaSNKJ86qoh1bsDTBLyvLKedtoRDpXxrz2rkk1Jf",
  "key25": "2bsi7oKoBF7Kjn9DC1KipnYJkzi7ietB3BAxSwt4AcoxgvkQ7KGcgtiE1bXh4GTDRXKRSTuW8d7K6bpRwuCzMkCa",
  "key26": "565fcRck1zASGpvU3EHQ2NcJr5PqCq8BBV8odMMSgsJfoohVSDZ9ectpmYQyPfCUEptA1yCattJttEJP3cM9RAx6",
  "key27": "5G6D7ZHmjV47JcjzBb5i42HqkHi2tHzSK8QHKktMJiLPom7xZviKXCck5ZSGjR2UJYRfYS7TDEuFYCLDWyNhta2v",
  "key28": "8sidUGYoqGjim2uAZyvL5fVmnqSAecPymhVtKSExSvErEVTJW7YQ5qqp3W2VVuY4yikbwYmc2AadDhBxZBkcooV",
  "key29": "2PJ5BscBmdTZypNL727adPUrx3DM8FnDEFNf3TwEgm692NUikPrUUahCZrkwZDKXHqWpN6gWUwY72Wyc3rRji3WZ",
  "key30": "63mxhkGsUrx5zZacg6E4tjSckRFgLP8faSBU7fZwTM1DKyBSs4AQNGBYfzj3z6W9YErrEBborCAx46ZiUpGHsMB8",
  "key31": "4tNX42tdn5xJ44MUB5pjVB71Vunq4jmvDP7ivLTLu82FhJHhaBSjqZpDtKA1x1XHowadrVbNL1bYPyXZxGxfd2TE",
  "key32": "3ZcmuzNq4UgJQcKqjb88PenCQVdDtY8ctWrBPg1JHKqfWSxrin72FKtMJu3J7zyN9fztVxiKg2sFZym8ezgJ8ANw",
  "key33": "JzymaZpdiX1tq5PNwM4FE1sw18afqHCPH7YvWrfZ3btqgGaq6XKU1U6B9aB6ARq64h7NYJyz1u6Ye8oDxf9xGuu",
  "key34": "2C3xKcWo2k4WBCBr7uWybMRrUoaAWwhVGFZemeZrpXFxkNdmjycFu3XPpPeuD1eornHrj22gajXWjQTeDi5R6Kxj",
  "key35": "1RsaCj6Z1j64CMSyJTDbsTfPWoLZKdUKepq6d4B8aESawgjEDJSCd5pJpQEXepWpXVL5FjBfE6z7i4K9cvNvyuY",
  "key36": "5wPVz2wL6uVt6189d1CNKmnvmtSZT8c8oMXuGJTF7hq1wYDC5XAUtdLjnsC7m7rfYZWS29u17UjkcztLk1gSAoJQ",
  "key37": "232BvGWTMfAxa2QqwenhpprGGD1EF55xbymgxctarpARuUpoAmqu4eLQACUCTR6tpwScregTYKB6uNcq39cKTio3",
  "key38": "5hsUxFnP7jjZWwAE2YX6HMsPVCj3ZeKkEoZSZcjbMpfQb3WghFyChPupahMB2ny1t23nHMZBYtfZuuyYMffBy2UJ",
  "key39": "4h5XRdFFK3twrdFoVK3VermgUmrQfGWPHm5sgTTGJxrsYVS3W8FJRdmXmGA9iJre3xJDHjNRMFDBGtba6Y7pMwD4",
  "key40": "2t7gsn9GdABRRJieE7dwfpXxHLWgHdpM8bG96bCcas5JrLDEZdQGVGB91NjtPn17ET3UNmibmteZnaMS8HbzfPjV",
  "key41": "5DQRzsRHdeYR9XCVJvvi926XcK2zHSWVJWMtfWFVJvxqkdS5CPNFyxj1GYzyaawJ4egCjRqbKRJ9HF5MLKMUsPMW",
  "key42": "vKYBZBCPw1Ua1aGsxMDDbg1wKCgKXQ2z4XM9Yyeu73ibq3csJrY4Xt6N2KLtbyKEaShuxmp1qsbWikpMfQxEH6L",
  "key43": "4XM7M7uTGjYr7V1HPbb7o3fF387grMsfY2THSdvN5vJV8sVrFXCdEw4YMFbCUY1MwYsnmXvmhaha4J4pFtnE5qpN"
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
