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
    "F5VEwLoFeP13r5MTjRUteM8zGwoHuKNM468cgBSLMT59Tc7E4ypK8LcvMA5XLvQBPTEQn8i8A7CXqqbGcetytCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gtbW84ZcNsx4WcfjRNznEMB2t4bhQoWc849EE2SWap3Pe25o1qHCGiaQyL67oqiQ1RV3MUrVoLUtC8FJrboxnZz",
  "key1": "4iiqspB7LCFc85X4cemJ5ApoVVmuuZ63UJoskAYz65gDxr1mTdnguiQZz7cqL69nagGFj1Tp7W26bsCoBcJ7WaL5",
  "key2": "5QgHRExy7W6RBFB1ABC18tnCumrQdgKPCvEvQBbgb3G9LxogCp1phLYeTfjyGRuWNXjJWdtJFVtr3eNYseWuqBxr",
  "key3": "KsDHJwtFrmiLMDUzoku5bxHNvQfF5JHbLjUFiX81Cy6PyYSqWDmfZX9oUtGkBXRQG2TWfxNPqX1Piwxhck3sRPZ",
  "key4": "9LeE6dKSTYhfXaGSUqY7mUeFkATovMUNvisB6qkC6bsRT7kJJ8zxdA6YPAKUUdNEXpc6zkF34CGAyMihuiePD7q",
  "key5": "3cHbMUgXkJdAe5aQ6deBDKpVQv2BiBtbAcx3PNjN7SLcMdXCoL6xiBYJQeFnzqPuM88cVq73QCj9bQEjfT9KFTcU",
  "key6": "4vBgYMdmKvVbgaatzABX4aMbWkUHCRdrqCdmWCa4J4HRXtGbeVYiuMPFMkT2VBysRbEoUxUqFhzrf93YzzjUy7Gj",
  "key7": "3HUXayWvvj4HH8Y5VuYXHkNKCVV9zTf9As4Nr2FWVXbZKsNXfhjeaq7KXiX5Y8cDTiW1hXBqHV211NkpWsELLm9e",
  "key8": "4ciie8cGKgKK9JfXXLUYHqGXXbM2ZkHZmD8cDLP2dzLSjmt8Ub5sbpWsi2FL6BXcdKhhF6mJgziCCmrdybAp3whW",
  "key9": "2Pus5b1kBALDFWacFe4QWmhkaf4fttFwc3WrMGvWUFiTpRAsbE6tEedkNH5haauXZByjFL4twGhm6n681MCRcztM",
  "key10": "5ccj6FSE9rAJqkcvUCbdhqCmQmREGyhc1yJdbFgiXnTePeDUCTVXXcrde5vS5X4hWuFtfuA9uL5e7DpKwmBtaxNz",
  "key11": "31o3xSe94kSgGid1LJxMVgGrip78EpvfZeZTvGaYJKZapBS7wVNrnRhzFcc5BxgWgXCXNmi5FiNYqYESjmr5RTMH",
  "key12": "4wwRYvA7k8BWR4KV4LjZLy23FUnMmbjAqrfszRnKQExsjHdYj2XZcveRszK6KtbyDoBrCJxkYoCnpHMXpoZbEJ6B",
  "key13": "4wmJfY7nkxH3zmQehmq23611wg2c7Ktj4NEEP1nUgFFTSUGYdSmG2BrWwSsLtz1HXMeyvrk91w5SntiHLSACWYGk",
  "key14": "5DRqsKd2LdicHza7oFmDJg1abYb58hmcPD54S1ngHSwqXoZeXof9hpUKeBk1WhFiDk7spQQwiqrK9wDLFgen6HyW",
  "key15": "615CTTCiYAXX4m1frzjdE4hnG9zf7ZVRAsfQo5bzDghJm2VJdZNL5wNzFdw5vBUtYLKj6ooVppwrpGYvuN4FuDjg",
  "key16": "3XdaDr4gDwqAd7LkzEgEfbXErwoyfw7kNENvXrULxhaLg8T5NoKrC4iaJV57Jv2qHfYFQaBGp5UJyWmmasaMJ1VL",
  "key17": "3a1GxP7nrByzAaVTVSkKGKuCdfdW3krdMR3RJZcKWvmLUz7rZ8B7NMEmMCa5fmLzX3YFDp6hPP838FP54b6LEGZR",
  "key18": "gXLw6jJjERCaVzW2p58BC65DB5SUwrVAWsGEJ2xs4LjEE9JCQ7XSEx6kcYcnMxBU7u4grmnpL5fxGW6MMsyfrXb",
  "key19": "45yTj9YGqBnAqA7LekXuqXcDTwq6SSGBZtBziQE9NhNQxTnzQFQcndah1dRcPVrENHi9YWKgazJ5jehoWARmhNkZ",
  "key20": "2E18wshXZVj2M1ZycsXMsCLJdhxR9FAiQTnUaafd2V3WsMc942Uhgbc8VEeq8xT5obpULC8Au6TmL5u4nGQ1DbZr",
  "key21": "yGNckrQDHDgWS7UnSrx87ivbKwmk6gs5mBWRDTZ7fTxoXkXMmowN83SpnZchGKSj4PkEKj6VF6ZGUAm9sKwAn5h",
  "key22": "4wqh82fLSWU2WEfc8NBQpXMh981zCkJ1ajwdVNUK7ERXsdHTgWReLDLdnK7pjqFo5vDEVMWjpumkNWNmGFo9K1z6",
  "key23": "4iczVgbKHTWcnU7RYDEHo1CDb9nV5GsBAuqPKabhUAGizR6qGPZC5gXJ2agQ5EhYCqkcWt91zMXRcqHcRwT2UN2z",
  "key24": "2shXJtfiMsNcBfjW5rjHtadY2XudxJNiVkPP2WtHRcFtyYQLqrQgYk6mnCcrC9H9QTyv33wyn6R9GEob19viybrP",
  "key25": "2uVZ3pmULxhHQfqeddX852GVmyfavusGWAkGzh3VhqV3gPLsh7tmPKxKeQafjeumLhDufbTbxD54ASFYUsUNVGdV",
  "key26": "4itSZGFdRFXYTAERQZBxFqhxEStzb9YHqW5oaqdXabYfAjzpixo22dSHAymDmpp2VaC3YZ2AijsUYMdAHo4Lo3hX",
  "key27": "2HP7tSSXr4VZgnRjGSoAcuCifuAG2fAqTcxzmVmuxMaLe7b6U6o9awkwJrgX8PqatJ5gZMaJBQkCs2ZMaCE2WYMM",
  "key28": "2q8XRYDTZa8u6TgdW9qJMkZFVYim2tZS3ewMYiCmn1URxCPJHY7jnnyHxPHau6tkHFRG98vedLbynjc4ZwVTUaZm",
  "key29": "24riFwcGgn8hbbyNE2gt2CznV8KSXa8dC4mGgMc6TZifb7tK7aCLHzr4VKzki3nLGKHugrd6XrrAruinCsVekCTN",
  "key30": "5MF6NxxN91cpsZEysYfTRVkdoK2raBN1kr1WH32TqdWXpCnfuGzzy7qc833ZDVHhowwCvystp5M2U4EmCuu7j4wH",
  "key31": "5k4ejQ7tDBKNcvoEXSRXiUSv7UyhY1wc2d7uvPSxUkHzCSBXyUxSKtWTNBjrSkeT36vffNrQ3PcXcxpgfPL4u74X",
  "key32": "2npGfzPHzBw95DRBfnFEKzyDQC3BMCyhuvs4M3Ld18F6UZ2YLtdxQBqwikULYmERsvsk4HuukVqHyyxsp4SkDMic",
  "key33": "51UMKwuBqTjmhYtxVnQtCD9PiUJXP8i6ZcLjBPNeBgfijoVzeLx1ieX4uY7XLEFbxmcrUGBRzP6dwqKMsi2cdJw7",
  "key34": "2HnBCMugfQt1siaSo3k1NiRinLfBf3LjyYSZnsZmvd5nixhrL9yV1P6nDKh7Zuy5pCMhzycUg8jii5XbfiU6wkQP",
  "key35": "21ZtkkDx1BP75qxFaJmbPvwAdrwtg2p89BJULwSFwzWNCo1Q9wbFHpHUpYEf1djgFvDNd4nJuJatZaZkgFSj4K4B",
  "key36": "27GjmR7FwrgtNB6ZZFJrb8PR9po2sv5BdHNNTpX46LkapRHJrAdyjtFkPZHrsJL2uTzWY6MFRqSp4yED8a7xekiV",
  "key37": "Lh631t3EPMsPR2UoEPLcBErKLXn24LyVtgrk6Gxhdzx4FsBQBCwSNkWpHguBPCADhGZNYWeLyVDKn9JUt6sZD3e",
  "key38": "2sMtUvCS73L2wFFxkpfDYC4hPzBPgeVfkk6BfU6RQh84dLJ9veEyvU9U8EvGoYdE4U7h36BtNkxthQmx2ERsZBuM",
  "key39": "2JTCxFyUtJbWvdm4C8tNbMqmrkCihgfSBvfYjN9y1ob2oJoX6pqiwdCiRjSUKyCCqow2Anm26xqUSePAGFeq1ac9",
  "key40": "2dDPkamiLGwv8XuFEkA7eV5GxTjVx613S6ZfkApN3aTT4Nrr9M9MEfvSseakx1apsC6dWZ3LmbxNMwoB8dYYV8F8",
  "key41": "259ia1JN3i5UmGe4VbLXL3LkzfekmWrAfpf2sDwcabTyi9krkxm4SCCBKMsFaQhroRW7eZHfvAFrdcL5W1civjUm",
  "key42": "5tazWuGu7ybxqT55chzPDix4vkUghLqztftzKPFWB6h4s6WCJfp4yGPtA8Z6i7hoFRU1RPhTy5BiYXd3EykHpyci",
  "key43": "2y99wa95fQPgiJC7xhVauvkHkRXUU1fcFs9tSr51yBQLuUe4D29HjFGsVhutypJJgvDHhTry8X6CjHNtUBmd2RxZ",
  "key44": "57NFpFA7x8wuZKsHhxbQos1ZfeSagmEGzdyP52Ecp4g12XpG9F4d6JcVqotKdu21Hixg2HaqCALFCa7brHRC99so",
  "key45": "RRN9SFhA8PEm6UXSkEGpHX3ikHPKC4WsfNeFPc773dUkamriyKkSGn8rfSL6fa8mXEsGoSfxctN48xSEuKkoDYD",
  "key46": "4GX8qF5KrWkKLe8reh3zLvQ8Vd3h4H2W86PDSa6EZrD4FWsLZ1ri88XY7ZbdTocCP6wUCqdCxS7HJLecqEGfebax",
  "key47": "4SJGQHxuBVACEZp7EfWGbpRKKSKiTMNRnmS8cG4nE4cJscNfmteR4ctF9iiDq4a8JqGsbC7UGg8HenfQiMm9dV6i",
  "key48": "2DnKUsNCizn1j9Sn1caAwc5YScQ2jXAUY1dYHDjnqh7FxemV3fGpo3TU36LPKh2wXZH8sWPNAtwRNoMxhrXkq8ka"
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
