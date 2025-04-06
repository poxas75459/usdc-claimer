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
    "5NwgzYhcx5MHKqintbyvdoUqQTBCeX9CXS3xxhN7hGnKvAhCqVSkMx7MJd6gyDnARCBaLjvV4w1REkgGnEAH7fnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bS8ECr8MkQE1AY7V2XiaebN1CYTLDDezMD2M8PsGEkMUmRFa3gVhuBtQ87jB5tL8XW2iQ97hn2gFhkLUxjdQNPv",
  "key1": "3ZK8BbKsyJYEP7J4MPv4EH1ttovCmGKEXmJWaWt83VN4bnPMjcDMfoFVKbVmP2XhTqNzNM1GdgtDqPJKFix8AY9b",
  "key2": "ay1dTQSUCZYsKgU21SGVPWv6Se4PDhPLnreGpzcXVaJfEewRm8bY1yt5o92twAhdh4ERJFW9XakBEf97Zpe3rrT",
  "key3": "2UG2UCyZFPpLDgu16A2YZ9NLd4z2wdrUX5w16DfXaFoR326T681TD9qUrhoefjTaubGCEmHRXA2MqMzUgcdAtWPT",
  "key4": "3Kf263LZqoB38kmtw67avbSzQtXGdg5Y1DQERi1r4qXMuYWBYiFD4Te4L7WFJF7ugpiyNHdTFa1zr9uMnM1pPjzs",
  "key5": "4VYN8aSLW5kYEgvikSVarJ8upsQJXu48ndHnWCirkvSTzi5X9TbwrH9ChJYZygiG9JQcV8K4SWmCrG3ivQgxH2rY",
  "key6": "5JcFKrovRRHonuLtUX1LkcwVQ2hDUTU6fHVG8hHzopf4EXiohiBS1BriCoGZr2PE3Ntu4gkaJREJCqQbguRFeHQL",
  "key7": "5ykwNRzk5aUUsafnbgg9nVqMSQUbJVfDmonK3YvgqwNEwdCqvv2eL1zJmBzuZ96d99L6X7ogCpXYxF5zASHPQv6S",
  "key8": "4TH4492LVWobVraSoUGWc3zvm71aZBzyBiUSb848D683LdkzKgywAdurw6YndNfCLU9iP6UwqC1QyjiC53uok8QU",
  "key9": "5GPXwRBecGV8xcSNxs539G65c6fQYwY5zPW65HxQ5kU6BLpXpB28rco5A5KVqqiRUfLw7kpeb3UrK6YM1BUprijh",
  "key10": "3Pk9Um3PJp6Sxo5MTFAjSSffPbgYD2LMLRFcrewhAJaVrcA5RetXtFnWkaKoL2ZWmAZaLrtu2UYwDPMR1cyNzYbF",
  "key11": "2z2k4HxeTqBCy8WFfKy8H9NFTPb1aTrivhLENG87CfCjfx9J4UBuhXcBtcQpvKohwC8gSr4ehaAyfAwkSBNaDa9N",
  "key12": "4hqszkQ9HV2Gz4mG8rY7xbRXFxYW3YWaj6emV5m4N2WjsFdtvtENuTL2aSkhy43FevLQaq5tvYmYAquGqixFDmM3",
  "key13": "3aPycubCwBSmXaibutpBPRvbzC65NwsqrdhHESQXnx7Tg56LVkSZQtBvbGKLYzMC6coBYcDAzcEQjgbTQbanvoSb",
  "key14": "5Zs9QcDHvYmSrxZ9bFKHTmzeJ8TYAM1CSx33Uh56yEkUWBRZ7RjLjjgcv9UKfxwgRUjSnJTcPXWb8Es6H7FrQ2fs",
  "key15": "4GkEzVhSt3QydoWk9HqHkAzXPDgZQps19LM2Gx5Pi1qXYS9fAtCdu6QWa4bgVyqCMLpTNruwqjDaWnAPwJ1TNYyW",
  "key16": "51QoiF1y73s8otcYsu21YuEJWwPS5pf1rLH8y3GBdmhA1dr8XgH5bVtzHFspLHgZeaabfVx7hmvNVFBVbcN8i6BZ",
  "key17": "fGdXUvZQScyvJ3reWauXYNUzHaVoARZcgdq6goAr1D3pm58zNbjAjgMyv54tLBzKMU5xTHCh9e4S1xsXWg8yjeu",
  "key18": "3TFLE2zBifxhb54DbE4FXC8ZSQuUuZP2dtf3DsptzuQaKUAdaZsuKcAhRngk7vFjDTj8RjDDA87YV9KaRtEeZ8RV",
  "key19": "2zgpJMviXNnrE1WSxd9G7kxL59zCeqGqDPeyKKfckcxUM8SkuZM8tvQg6dZiPMiohgoCvTfwXJFK63WJCD7ycKC9",
  "key20": "3QMJJm6AZUB7esxFsp3hP6yinucZRX32hrA3ps3t29wDyhHwuHiTSL5CxpRFzinhEMtiP9faGDLsJH42sKmDgZiy",
  "key21": "4cfd1woaZWC6PJ9RxnoLS4bS6Kcg1yCdFmgBo2axyssKZU7tgYGSmLb9HCZ6yKSYnnfhVoKVKMVZSAjm98eWNzQ4",
  "key22": "5ZN8wcup7Etgz7zKqmoPEsbaRpz9aeFAQHwWMzkVkXyirnYz9kK8hhqiFbwmEjzfinJD4n48QhuNV7FwzR7icoLX",
  "key23": "5RQNV4eqZce7DuvatHGe6GpYyz6HHM8gfqdCBevU1DKLukzumwsrYr7Qi4hMJENDMgZAf2Q2EyHTHhvu6pC6gGcY",
  "key24": "5erHMyWFoRweeZS9QfYoc8omUHhVEthYiGxbZkR8bHkvPXvMvtnYjVX5WUZWXTMruiYF3qPfdV7hRfmNwxAkJhcH",
  "key25": "3mkobNDEtpLxuzYVeGiVqT9Vx4RRPuBaExPoU77DM3BDJprta6wsLSJKTX1ufs49ov2wVBCAQkLyhrbMQYJTwHBL",
  "key26": "hyJzpjDMRfYqbNivJjCKhEeFeyvdRX5T1FQ9iZJRKgHAPabbSRTRwkUSJ96QQLXqUf6jys2uNpWo8jZL7BCV3DP",
  "key27": "gSa8xwzdouWc4rQUkSf2atpBcUVye9ZQUD1nrHs6XxymzgevJFYR5vegNnPBarbHqUBpEmdjwvJH6PJxAfsQWR3"
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
