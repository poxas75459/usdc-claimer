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
    "39jkognXnJQF9G5oAn33p7VE9x9ch5KJtTt3QMwfaHZrciZgi1kyuaCKZNxqh5gHuF3J9rky5KruYnxGTs827m6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KUAcVn2YbYD1P4GktYK5cUf2dCtM7jVjrw6fiVufQxNAjP3opiNthWcQYeWdve9JR8NRiXahouWcyRYQRZMJyGK",
  "key1": "5K4NNbnHLHD4MngLn8bXNFNSiqynmBac6bbTs62vqjVkyDbvAe4qYiroGtpiSSyexcS4RdJz8SAWNCUHaL4yBFDA",
  "key2": "65rRwWt6UKZrpjVkzbGojiaZ99bXTb3LdNgYroqMQ5PMcm8tf2oDjtBReYnD42CUcqsjSgpgXfdbB4Z7ABoPrkER",
  "key3": "4CRcEhDMY4FzrSzQAWeCH7z7B8ZFnewYrEoutBd68TZNZCMX8idxi5ZSrbANBE6PWBocUeqbtPQqkUkwt3rP7ai9",
  "key4": "33fkNZYvagDk1aRD9R7NCeWQpZdiY3a5De9tFA9xWcCUrnbiUsnqh9WxoCGKcrBpZNo7Yjhogyk2Uykt2psoGpsC",
  "key5": "5h1VdCLnT9TEj4f9oDviXToQZEvDcJuwhdY4Nhp5vCpwHeKUQbjXmDoBdg5fiQemndGFptTjRorTGMyeYtC5HbNe",
  "key6": "3QT8L8jmz9VjDSKcmTkq7pZdersJKDvbJ4hp6qRhAjrEWpfbo55BC4EHJV1pbfA68EyPJxYHNSBh71RqifLFqUDQ",
  "key7": "5hcvoRQommMQawRcxgrnqHZW1QUyyuY33eUf39Fg9fCQxoCX6RXXrPePKEZkcxd38rQaKyJ5T51CfPbCQiZWbHkw",
  "key8": "5xodAtocYdfWhuvYiHdx62opW9QnBfXWxiszQp9qgku5oWP4fr5fDT5hU8gSCPpfHCmnbEvL6R9yHxcc5opB6iWf",
  "key9": "5gvnXTU3nLYEb2udcSMHMffMo6susqAhGP9t5jJi8te4VGFLCeT5kQ9VGhkiFF4qgoXzz5Svm3CvvCr7kJs11b2G",
  "key10": "2Jb8FyaZnmwCA3AZ7YhknTekTmaWGpEdjYV7BFCf3bEjYyuXuWF8oa4bSTRjghLEh9bQTsZABm2DcjrEkRQnguaC",
  "key11": "5PoVXSwwFcS5f9ptw7baJN7TRPwNZiC9cbJVqDAxioQkL6AjujNgZZ5nZoa3z9Y4f148zJ6CY7s5A4NrnowrzSZG",
  "key12": "4RWcigWfUCMkKok1s6RoVLkoe7Bm46TUThnreMnBjzeh65k3pVjCrCPMvvLsjcWtAMWeS66byuibhJXcuJhpkm7m",
  "key13": "4YiZPomWLnkzkq4yBT8jYnLZYnB516n2bxTpnESoK5byBtvzbj3wx7K1Mcx7Cdj1gjT4QQ35mzAADMeXJB8upuoK",
  "key14": "4aRaWyKHxPymE5xvTGUGd9mMsn6sXahJTdUbZCQDYtkmLwLCGr8BhZ7zgeM1JvZPWQgESKg8xtXXfXRw3V8S1PuN",
  "key15": "VdaQiN9oW5CqNDhoo6ETV4obUWdsvTBiyBuqnHamFw8iGtefjQ3Uzy37ykENYyaZpaae9cYnZViz9LUKceyQhoQ",
  "key16": "4rVwGw6qkcfcnZFcSX8F1UgJTaW8ADNMvVtPX4Kak5QUhPYxReYno8WYd1ziJ4nk18KLPrrgzEjW1NUCKZyqhDZ1",
  "key17": "393fcNrP1V8z89jWk7ngHFyA8aqghCBjpazAXEkNyn1ZWEZDtZzeocUkCq4xujSj1tZ4NTT1Qe6dKNqcRafjRrBL",
  "key18": "pnwdMTnwfbuqd5FqBnVmpuq5Lkp6JjXKKkH2tanCyqeZwXQtDf2MQonjtSMSdr5Fh7Mr2hhmama4bvtMB8wypyb",
  "key19": "HAdeKwh7b3D9CMhkTNsupq9xZvj8AsPo8UEeG1mpHPpbj7sR3KG8pALWforjn7jH1NjRVRwXPq8jPfnpYwco2Em",
  "key20": "26yBgpkXncSetDu7bhHzueXZPmDoPVDmX9pRRsob9VmKnf1ziNYsSRb4znsz1GXzfeVCaPUyYebiVdNpRyzx1kAd",
  "key21": "3uhr9DnuRY3xUKL1egZuiW5MESwBLMivE6zkyBtJJcySwcSR62kZFcxEZLhPUb52b4hhyBJCFitFukZYwfh5inQN",
  "key22": "3FoTJSyHDVwgHuegLcfThq3oPikEYEQLNnvWGumHZBWVvRtfNFNApsdpvTFNe4qhvAJUtJsLzQ55bebjujqqNQzr",
  "key23": "63tvNViNKkgKr83DKgrByQXiZLo2BvF3EP5pLAmKJEj6dmbi5fvfQgRHJeFyhjv9PG1VJCGRLYWRKvnuSLPQkBu",
  "key24": "2nZdgPQPzz4Ne2oiHH4cVAkRMFjACnthPWm9X3zBipzvAaRRqLPq7gnm8qK5ZerkaKuAXZ3pyGnzDRrTV6ggq2gC",
  "key25": "4ScFS4sB2hx5C2CMf5c8k5S945XeS6bUNKCgPk1WuE8UK5ZRdGUkVnSNDN494dVGBCyzn9CNTeDw7h8wvGAbbMUV",
  "key26": "4Lx9x6U2eSDjm6JewnEgTkrcBbjFkaD7gxS1ztrXruuijw9c78jp7TwEJCHVtNUnaXvrwy6sNPv2sLNNap6FAB5A",
  "key27": "AQNp9hda86sE1YxHCfFe1CxJeLyXZNgT73batogk6b2vxd5mm24EMkvCnyg8o9j4GZ19SXF73Kv11bKziPwn6SY",
  "key28": "583tofdbqBkVFMeUUwfxvJi1hSoh86AzKmHsKyFUnVftBtzCaCHyjNHHBepu8F4r4hfpDfdymACpFQQxHJXb6F5m",
  "key29": "4U2prafea4hxaGzjBh6PbZy5khULXNQRtYToxushXbvUPQ4sk94Uo6o2KPrQbvfXePLrHwmHcL2QDa2rHgLLaLkV",
  "key30": "5oKTY7qfBLLuFL9ZLqdbninDrpEyWwheA8gXM7qHmsWqkjAPHi2h1gTUykeoH73eEhukBmmKYeCi8QsqRTf1r9ft",
  "key31": "5peN9akn7h9pagk5sKdKRhFNkdRD3nMkA4kxj9RVTBgSQLPjF5ApyiavMPPHH69d3uKNX1ump3VgHVxMDpJhCwB6",
  "key32": "431VtQiFKEsacywUFVo72heShAW7Tn23QHKDLDAaExhAHhZQdeMJNwAm63DEEgbnd1qmuFKCN1seCmJt75L5H3et",
  "key33": "2xzxuT4oWff3VNMb78YoAMfpmNefKA6s6wpvEJkqHDniL7xCeuGgLna8AY1Fu7g4Xs6As4ve2Xw6JXnVaxyR3GMH",
  "key34": "2TGYs3Zb9qQ9RGoyk76Rq6QfSzgy4jif5ayHVmssLaP5hkJtbjhCLH4Ce4d5zCJECNiNALTTEFYU93U9nJAhth1A",
  "key35": "5Yii7FVx5eCkqjdzjenwFrwVGEN6ACCgt2cgsizsHqHbAu1ymtBrgSCzfHZfQSdK3EJXey4N6MWgTyqjqNMy4GzA",
  "key36": "4z8bez1vD3JWZaCZxWcLoRmPRC3aQbot57SM7iT1NEhpqAy1Y4ZpWQnyfEkWQptEbCTWfyNj7d1TMbaqrsn33wy1",
  "key37": "63wPkBicGRbUaAohibA19fxFEjEBJphzmWH5iMyNfrtPsAkbBCDRDS8ApmpDr4ma2xXEuUYFYB1trm5uBriosTjk",
  "key38": "2gxfTe7GYwHkEVT5XUF6j9jfyMgB4uP4VqVs3kQgYFSfetaUgJFF5Y471yoewGZq3nR9EfdYBzKaDo1pYyLFrrta",
  "key39": "52Vdz1G2zJXhbnp4GaCzb2SvnjUVb1ThCHqSCJQuYcSzpL5VgPdNbYEv14jNQFMtbJYxLDPEmLNQ7DngNGJigiQJ",
  "key40": "3uXZRDEbiB89e792uQVG547Uue9sdW7Xpc4RH38GhuJq2Sqi3HqdC6q8Amx7XXsDrfjQqBpxxRoHBueMvGUzr8Gs",
  "key41": "221zLCrg99J6mfEfy8Vk2suEr8q48HWn9Q5nvVE3Ayniovk8BbJoZ2suNLgeRiN2kC5xX4a5VeQAU3c79ByjMXEo",
  "key42": "3i5stSEDzGKCsGMkrV9VohyPz8pihP56jNvEUvMAcv3WMej3qpnK65mqcqnARswK9K4YLLgHsXDQQ2BDzo9JWsLP",
  "key43": "2DNizpJ1Au5rrybaeFgfe6RDQAwRribWszRVLRoLpKhsDPqKxiFD9YbzEM5hpawGn4MMakYhprERXDrmLFhzTJan",
  "key44": "2HgcQN1uxUwe7z5UjfnJCFjNeHXfM7rFZhFeUskpHJncL18Q2yJouoctH1qQPM7TaUCFTqCpMFCaT8onHyh1wJjC",
  "key45": "3Z995BvpnXR2et3PCy5BQQH65uun2f6whDe7DnoehxhyGMUeLP3JfhhUFYoT7rZhX6RWCmbv7BnBWCAcE9bC7oCC",
  "key46": "5HLoSnbYK7f364g4u4EB8DHcgdJRQnY1wazQs53GESqTAu2YXayRWwie38PgYpz3kVpdfHp9q34KpCTbsLoANSq3",
  "key47": "3d1rQ7HCNkJUNtvMhqYqrL3PCAfso5MfSHcqAsux7JSvfrkM4munAEo4W23fkM5StYsn6ryw5HXATwc9cENeUzu9",
  "key48": "4YD5o5erJQ7ZmoQtAUqXHrmxmKqppk2JHTs7FpKAATu1XUPmGQTmijUvcK2mtrZgaV8HKyijMfZ86zEGNGZkkQRS"
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
