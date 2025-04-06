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
    "56doPRpTRd5QTq5K4htYv3iCut6xWr9jTnJYTUuNiqgVcQ7RQVTFTJYaP9Tsp1dcLxQP3cQs6p4i9eaXyDe1xfEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oKJoZwqUo4fge7ZQz2Cptp5xT8ygKGDoTU3aD261abTSxmpwtT3UHKTi1syaikN3s2zK12JpfrnDjSm8fq9hMR2",
  "key1": "4UHizDdEPfhGMwS8FMCtVCrxbtbNP3pc3pHMXAFbjG3yCZjHSkjatRr1srf48xDF2SfdUy78hhVs4ssUU6TfRZjZ",
  "key2": "2YsCt3SoYtD9CSGRJ3WbTs7KetrT242EkZ7r7vQpvG1WRpy77E4zGezJnCXty1eBUnQz1vhrg8LewGHHjc34XVhc",
  "key3": "egJpzo8JKCEEERWx2Y4F6pXhHHSQVEYjcQZDJV8Xz2GozAMXVZ2RKUEuW181LExSF4xycHkZfrqkAPdywYtH37D",
  "key4": "3ETbFSVCTymMGxgPFUBc1ckAxPuY4UjYi9uMgsJxqxBNSM1m3EsGvDytwrFc2wbPQck6R5WnZLdrPUV3xCMw1EcJ",
  "key5": "42yTLSSEiimR7GC19EbXHB8VwwLqJ3krEAobA9C3QKoX4a2jEEYBPxws8SaKDJD2Wx45CXaiGS6j6eCEEqUFAeSF",
  "key6": "2rCMRZzDnYT8Uh8FKznC4mrUMrXuprSSvESBvjMPMdgxp5N3ZSiAXxaVwK8YCC3yKcUGDPChSqo1MFT8oWbVLzzS",
  "key7": "pCeMKw3UcoJoM2RqbbtLFgY4QyAydCo5VUJuDip9toprJMXH2UMPvLZTyVm3pXbZiYcqgLnGQtwtUYeDhZjtdYs",
  "key8": "EAJrFN5oJqAroDsuUCeWWBUeAXynfjAkJXudZjsWu5cPEYbaTw7yLbHFZ1UexMguDcKyS1vemo6Fe4ykjkHPo2t",
  "key9": "4eSHDX79LCUFCpBSDH3WpW31vRXisMpo9Jjz3HmvcGCrs1RyYJi6BaDADBcgYiVDtGW6qFrQpRCULMuikGoYDkhd",
  "key10": "4a5yqiLz4Kp4j9kNuaPZcVCgfzyzrFtA55bUuUQEBYB5Yyz23gaJjkCuvNuLC6hKuvtyV1Gd3Mf64ZzanMj4yvQu",
  "key11": "2mogsYk23oaEbpXJeSDnux8XWp2ty7G97QzJDg1bPQCYftw1SFrqkKij5zcChJyp6WAfbzapf836apXVAd6igS8y",
  "key12": "3hgMgLiFtfv9DqZ4hDKFejD4FwywUHY747vLohAwuLxqsV1ck52LXjXSa9L75LTL9kjAmY1YHZd9TkukyjRdE8qk",
  "key13": "4A5Ads1nsyRvJWM4qX4iwqmTf4m3S9wBSC9q8utxQSYSS5VDEk9niS62GbsKYHrvBEEp3C4BWbShu44qjr1g2tKd",
  "key14": "4MQTTW1kMZ3uFSpVs6anmaPoWZbGmhAPFzm9j65aREQSfYSBGpPykWCpD3gSTPLMhkSw62gE9JYc1Jiv4TsAPG1g",
  "key15": "4DwAQ2NfxQZMjJGUVUFcNsBrrxN7PWsNSZE6N64jq4LVnGUsFFWaNcrGRbDgsqkJrp5JX8xQfSLimvJVzNrpJwdi",
  "key16": "4nibNawcKtcE1miCmAY4aXuTw6BGp8LUqT9urWCmAG9cZkpGUGWvECXaDmstLNcPGa4vKMNSxA7JijMoKaFwxQi5",
  "key17": "4K1aDbnV1mp9xpVSZ9TEGzL9B4mZ22jXPiygHTfEnzP2Ey9ozC222zqzxwBno2vwdUZjLpZaiRzU4Ahi3t3aMBbu",
  "key18": "4KYBofX4ppXR1Px1pamr73JkG8RdycWydwffEd7ZwWtaSxGgHucBjyiMNE6NqH1mjahV8H4GfgBhymG61qhnnRhe",
  "key19": "3PQs8rUJgS42sTkpTbVSuReS4UtcnNM7hsT4X5LDcAw9s6Ynond54JbJho1aJkYGoiPjiGDa1BNANRr1JWGK8M1p",
  "key20": "5sSczT99C5ywtKMiVuMa7y6jNiDgyVN4Gw3z62VfRNYTuYAHeFCNxd2o5TqC5hDj6FV8bsSvtBuTJaUZZz5g2ADq",
  "key21": "2aRusrd2yo3ARyzXiz6XJcM3vi4iVEQNFQG7dowXHJfqHZ6jfdoWpaXUVcu4SqDqvojGumC6X8MXTGWxxtMdizCQ",
  "key22": "589FXRULQcNxPS5qTitXrePmc9WDT4BvrLbbxZHcwSdK6VcAFmpi1kjC7xbAdGNz3RcgcHaBAqhNdwiWTjFAJK88",
  "key23": "4R8KrhDS66SZMNgRVfqiN1JGQvELUBoNMu3vLVQvDH7TEzJg4wAfy7aUC3zUd4aCCmUtDST1qia5rn8MWB39VBs7",
  "key24": "6M6xPVCWzCEMbiLd3zaU9SqPvrQxPufRd8kGg8dBGRH6RLEMpHKqFWSsvJYgDmBma8t2VCczFJukfp2tyttU9Hc",
  "key25": "YhyRj9g4oJVYnqAQ5wA7B1mTt7gpreBFL936sgtZeWg78hiMZJRqGHFLFQihhaxsQ7ABEBme1AvhvKB23YBi1L2",
  "key26": "3GMPWv3NMD9hdRHXisCVaEmKwHihLvwBcwfEvaQpqLKYegGQCQ9D8JXvR6zFsbGXDg5LBSjmiG327Ljgb2ecWtnj",
  "key27": "NetvSkF9GidxYjAtUKXowL6HE8rBejkpZfVWRHhCVa7ZHZvBoXJWsFeqRWNAWyqe9eDBVgojPEiZ9XXSPupZqYo",
  "key28": "4tYpc419zysLdbqhNhPW3WJryRXuq88d35ChYHConch9oaAfNTuZc13WAG26VmVVAyEEu54o5y3VRWyA9yHzF4AF",
  "key29": "55rcSz8AExsbDKo6MSGSbh6yQo2gjMNuQj5fgLaSj1XXjJbwpAS1ow2kdviNUxhJxcEavbfUudFsBqixRv6hYwCR",
  "key30": "35Riz6ex1SmQhH8Zoxin6qNntsd7DcsMdzyYZA9zJyo9YBBHadmfuYu5Hnfyj7ZiUJmQX912FYh8dBkKTgvzJRNF",
  "key31": "5LMrA68NCrdEwCB5t6SsR5uP9rbTa5NgSJ7RryAMd3F5HW7bpDSPdQfTMTGnkY99Ka1zTFJF2abbZd2NFEETiXrk",
  "key32": "3v5udsDxcZ3LRBU7mxNBDAYVqfSLpi9zBCz8AsjXsYGgMrYaHjCt4q2PKkkrSmnv9dmqVMpCzHjxLdmyuywkfKeh",
  "key33": "MNec3UNxZ5q7exuL2Jni2KE3J2gUaZ6HdFNGK8fUfArAe55MKDtZ7sEq42QYeX8ezi3gi5m9vUfpSejcVFRjZ1u",
  "key34": "5JtdQF4CrZxZs3HuCziF9WfTGk1M8dLZMxKcDe91nErJYMgZVQz33JW7g5aC8Ss4m6wJEvBQ1QCgsVEARbMKt31B",
  "key35": "29WyJ2TMDrkXUsA1DAgY2gUfftgX4KKs8FzNm5oA4VYKC8yeoPUrYmsZKU6h9Jjxrb2632dQXA9fJSb2QDGbCVtv",
  "key36": "649vN5n9E4VXvVuuKkBSbgrCQVHukmj7RzjSdQEzMzxP1foQSGXaPyGGCwWUasaURcbv8YbSYJvGJRF6jUa363BU",
  "key37": "5awSDpfvLZNRaTGusrGMW8bW2xherWvzBhdpYCEcqKBPgoNXnK9oXBnykehDkoyXr5E3UuixcHhix2rRjVchxAs7",
  "key38": "3s33kPfnGDVNs3GpS1LJaPcqVWWw1NmEdCgUDejkcKGFDU51pLGVXAB6BoqTAudFxos7NcFd3Pe1cFkJA7aiZNse",
  "key39": "5AK91NtYJBBuCWXbTNvJvvaELB8bc7tk62cmquhYGnihrazgWj1j3ZbdnVEUn9rAqd8bDNZ6MpaXV6B3qaNwmqx4",
  "key40": "mS77nsgBWthATrAnFaeS2S9UqhNRapTiptsSHybBEH4aKD3CD6hiHKUqT2Tc1nxz62yrQ8TCEBed1FbbqSN5REE",
  "key41": "33mZtZFq5F5CgsyhicDN3fvQh7DjfSGCuYwEHuYLL53ksHye2iMwXTZzQEhDWnoSJdwXBVhhdPCdGeqouSvE4qSW",
  "key42": "3Nh3yRR4rk1b5ZWpQoNDN6V4J2xyQMX8vF567gn1PxvzspnZZCiMnRzhU2PRuYC1saLJzpioE89E6HWeq6cWSAhG",
  "key43": "26uGiqK46jSwZtBxKv6bhz6fqMd7vtHjW9kLPTQJLuSbf5okbgNeqx4BBWccgoi2qKQg3HokZUVwvn1M2Q11pFQA",
  "key44": "4WotLPPmLMsb1eyyftff11BmMHLW5Jdf5Sz4Umxsx4AMA32K6UDCVXRDTrsrUn4pQBwT1fhqRxhFYwdLgq31a5Qi",
  "key45": "42johUtAWS98C4prfnHvBzvkRVaner6zkx7R2w7BFMdXvpGvw4yzDGz1E2d9NexAYyiA4aBTKVSwpHwbwyFieWB6",
  "key46": "3hPUMnHMLA5f2yWMum987tEsj2qm6LYNSmFpoA7bQQDgWq6j3PwPejm4NQcxZuRwECjUyPSkwcLN7ZkQgWqN8QuL",
  "key47": "3Ar9E3tmhuP77zpXdF2yozxV2owG89UMsdaVKmpHjCW6fFub29MHSXeDft5vSduWq6M6aL8aw311hPpkDvWsEAPk",
  "key48": "2cUBEsE2ereHJaFKhuHi6U9EuGKiXR4mwEdLPgdTsgiaLBmf42Mjfm5FhAZzi9rkagJ6LKkTbbXua23irAjSC87G",
  "key49": "3W85NXzDDGCKDuAE4Y6yQ4BDpySLAFssuXKcNJKRmHQV2ipQ1ReKweHD6zRHeJaFknBBvsMJnpso86AzDKkH1prQ"
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
