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
    "s5vbFUkMqzXSe1MAx2sUV1cYdDLPkek6K1tycZAFprdAZs95VWzC9zFUyEM9wJriTwjMmrgr1urrqTL6W4YBvBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RVkRQ9UHbTzFPBh9EVts322HjBamMoJjxjQEUU2UjFgQKyvq5LGj14vUYSeqzjUtMxS24dXSK73u6WKXGgwkUHd",
  "key1": "ypYyeYdHbiKKC79xdSeGdJZBaAPf6713n1Q9iW2wG6rvY1Xa61FWxjXkP9Yom64khg42L9joeKmbewB9DU1SJpb",
  "key2": "3tev4YmWjixANYbM1u3yahZZrycv3kaXnYLbrz7S92Et16VzY3DKZTrrNbm2xd5vnEZBAdfEsGrxQpDEGWzd63A9",
  "key3": "4pCXhy1i2bAW2XgcyZa6HqCRLqoXY5kdcaAxoa5q9spEEZE6ndKznYbSKwYpDJUZfECURipVtJQ76sjb6cWTonk7",
  "key4": "33imukGrkNa728FKVuirpaisprUbxugJDZZvmpo41pCFrAmZBgJ2R9D2ySWDv7JDovnbMV84SBzCrQMjsXjnVGd9",
  "key5": "3XhwwZHKUbJygkhbMYv9821so57HJxwnZF5JD4L9hP5vPsK43mXY9GP2KMKbDjWg53x6kiyeSoX6X7ep92JyCnyF",
  "key6": "ti2kX85pJ1CrP512qyrqD1Xx9xBLXdmKR54dEjtVdC157hXKnAa1sPRHiPqya6K3Uv2MVMRyTvAqPzS5UymUeWa",
  "key7": "2rkv41qxgJTuTKRkuppY4rE2xPuH2uWaZPnRXPC6Bhg8r2Cgzw2u2e1EVvoUWsksCTkvFggbEaV9KPSs1xJbfRJw",
  "key8": "GxrmL4masZp2Wa3g8dTstZGKWPDvmqiFvSz4QwhYTNgBqTZZmwA3eLnZsZERiiAtc3PmuRcecKzku6ncdURHxuC",
  "key9": "3bA1msQd92wmEXmvTWjZGx1FC4MvnQuSX6B2o6MfgwbokakPc5eX5eLHvLgy7r4MZUKR8N6v3bJabzAPEMr7sE4B",
  "key10": "5rBhWEzSLTnL5QwQGUuom1QSJBec72GPtYJkp13N3hHR82KKGHG72Lecx13rtBZjY3ahnEuh4cghg7tX4Ct9tPSA",
  "key11": "e4axnnM9QjXZFXBttDaFgPz4EddjJmuKEnMtGjKonXkUcAGboRMdp8xFfVJ4FfA7FzjTd3DA9Lf48H7jbTT4NHz",
  "key12": "5XvocWAchZC5qEmtmB5BFkMKPC2AtkHdafWov9Ezdubx7GJCmYLxVL1u5MSFt33yeXxm9go62JvZkgZ3zbsnNhjW",
  "key13": "3GQVtBBpPNaEqZT6ZgmNwUUHjsQ8RDssymYCQa1T7e61rGCRRjxGmXa52SL2Q832qj6uhRXrLA7whLEmBShBKswq",
  "key14": "3aJEk6Zm2Wt57tbaCCD6u3irXWoWE1izjx4y4cpbZKbWuUBmJUDoNQ3Fhm95f2smuTQssgn2AWyesVRiECvJCd9r",
  "key15": "587hczGKxdQdbXgBvvoGoEjVfP7WAnxToLDSf7RzNPztLW3RJzHveCzeoUoJ2ty1YamzUwp7kcYCVGHuvRjW98QY",
  "key16": "7S65e9JpgnGWnPgDyVaZJV5SK6voG9JgWEahrxQVGSqUma3H3dyMBQhFVWcDcG5hcvfwbUeS5WG4p2WawkFseoD",
  "key17": "26qMkSyhJ925VqGZSHGXzK1t5AYwzXYNfAE5FTvfECbx6DS77uLNuKFUj3dusZxyvYmsgpCwpbJjV3z1j4xGuZd9",
  "key18": "5LgRZFkXiiiawVDDshwKxiTFCPQVq21pMu93Rgz6tdEtJ6AfErn677jHXLQbkMTroycd1hd5gCovMJH1wxHr7Wk6",
  "key19": "4odMihMm1Hf2YDiMe4n1bGyUky9wXVUxgvxZ9CzwCbukPye91ppkLapDpzAW8PJbnzEEtfuzyhvqKYeHfMnVvZb1",
  "key20": "37ksBG6QuiWiCuPZEuJkmQSJ8Z8iqAMDFYmoxpntqy7Pv6kNqDxXctSxyiPKB3V7Fj1BKjz1X7APkxzsWp97ZVpe",
  "key21": "47YyAM5bNrDJeM7u8EsVUupHqwpZV13B2qJp3KwT1HfmrsCjpZ6ECgNUy2j6jaaNMCfDwvk6u8V5qfjBHEVr9t52",
  "key22": "58hB2GPqZf2Dcd6gVCkjuX1oSTLi1H8pmN44h3u91vEMVVDg1DzTZcdEuZXizJWp1d7zHKtgmqrA6ebD54An7vtf",
  "key23": "3kddXDxfF5jtDbuHMrGRv1Su5SJ6NEyoGAnrUkhCxoQNfir7iZbn2Z768p6uC6Hnckgxtf33nFs6muYP4tz2wqws",
  "key24": "5WGrZXghZ5rcRJjG4XRvkviv4DkHaNFkvTxnfPmAzUgxHzJn2YvA6ZUtujJR8HsVkqaSiCy9GTDLkfywseysxhg7",
  "key25": "4zrnXmMbqY3NvZjzsEAx8ktFYYFuUXeNG4uQgnnxox2BD8j16TE2gy2tci5zkMh6euj2fpE5ynTcVKZLuCEjCXc7",
  "key26": "2V1eRpYiKxVQVgabSQXTwRhSejUft3ypeQE4vJcmVriPpGTKdccygekkN6v3KXRuz8tCPtmJjByrao7VS6Tmzz5t",
  "key27": "4S3MR3inegw8gc8n8EjZvGrQeAo9YRvs3SGWzugxarfZydjYhEd2QH6arWPUdbX7PSjCaBFjs94PTMYWfm1JEFao",
  "key28": "3GvUqatjFjjMbf6HMqW4voNfgdaF6gQ7A7WPPPwPzYdwXwHJz6CWwoBLiGKxrAherAHb4V6GGXitbDk3WfEHsr7y",
  "key29": "3D7rGANEyo642Y8fp7MBSoF1oDYBhMG49Sm4MSFy5uoJ5YfQBCRCL1oANW8WonrtHEwF6Z8xo6R7GHB1nnmut2fG",
  "key30": "5M8h2savHzd56wJmFw3UbCVLBciVSZRt5jXSZj4NWZnVMu459NjmFdeHSrBK8wFyjQynux67uqYfsAg2MS3uAMsP"
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
