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
    "4EDfyfg2yepogVUSHgVAgCeJkYstefotkK2ogRZuCEp1KszBxvmEA9rnCfqDM4WJ2qqJYkTcZpPGc8tv6RKkuR9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NQEMf1oCoEVmNVrWoW9BSAMvcRMdPsxsXYkdBXZPTGv3bBhAbFGX5dmbQJNDQ9vpTLXoACnfhhPMHhH95CYPqKD",
  "key1": "UAZUuJhET3Z2aKSTyeEQxzPrRtJDQEEYNQGyVWVfMCZv8GBFMMgW5Kfg4fmF4YHXQsJ2v4qq8Jgubj6xEuaBmbT",
  "key2": "5MPa87NVFN37Yvi3hnUvg8H82D4wwrRz8MRNf7JViTXyL38sKhJM5cU2gbQp9bi42ptzhwxLnBG88jB8a6Qv82bk",
  "key3": "4UuRoMDbBe5qdhbyX5GoHqc2nYZCmFYRQTJ5StzV6dNWWWH36ezFFT1iPJAvZ2VnrniebgGTX5MjSs6tRd8awmB5",
  "key4": "281xoNwLuj7FB4osjAPMRoNKWjjVoFJMhKQuCdxBPb41Nk9uvV1rqN6Lhui68jkh79PHdGZsqR6FWx6PwG71wTqT",
  "key5": "3xL5LJeyf9CDg4HX6zEHT3sHkMXs3DpbJAMsQ9vsxYdSHCjE1XNasMnMuct98U5eV5zq5c8eS71afdbpU4yoGkuJ",
  "key6": "3tkHn2YPCwZw5QuAdzNMRbGDG2TJCXp7ktMSAq1roG3RmcWYtFWqCHAZKrrbV5s4RjRgJy3bp4LKGQryoJeRZeKT",
  "key7": "exemeef1u3Kc9tzEbWHNwxp2NqQYBzyVHqMkHYaXFUHQ5JHBY1FpSimiD2DgdcW86o2JwjQ6ZCVkoGbEiBg6Lwn",
  "key8": "8srXEab3vmMwP2gHLPGE2WrA3yYWrxmMHKC3RvQGWfSgeLNohVGd6q1517ko9J1xTCtJuvCo5gBVgieYBXmHENw",
  "key9": "4CzQEcSPt9xR4J92JB9NGGqd9GCZMsmaTnNdbbj8BDyz43CCDRRjPAwbwJj2Z2SME321MsJPk1Fmnx7a9st7ixUW",
  "key10": "5e4AzRagAo6j1V8yPC3UEJc7XDypDT8dG1E3pYT23s5L8uMGnynRhaQ7hkTuDiKP6Kag2D4ZKVBkpGp9X9Z6qmwM",
  "key11": "47TFAqPBGDEVbgWR3qYpUXG24XhyzXL2aTsBT7vDD2LEWzjW4DpL1qPcRwXcW8DCnSj53Rs9Egw693yotK7VwQQ6",
  "key12": "4YPpZN9VRLujeMofDWxLj5nPpsTr1cGpgdtEmDp4xwXrPyXEXKGBfsy2c9mwYwoUzfogDtKVUft4DENqeDxHud7H",
  "key13": "DVZWfnBjdLNwbM5pSQaZF49qoeo2MYDg5fNPWZdDCvrgtQNEnfBzbTfAfiRwXuV6Zravd9rt2UTKZEVhpxp71NE",
  "key14": "3CjCfDQvg66MhL9sEeSxbYmJ6eZHvDq9yib8UsnxtuzM9WPC2XBbbY1n1NAhUviAsqctgmpW8afVS27WzczA4Hau",
  "key15": "gXjvkkjqNfEDZNJFGX9wUTdpdHbmSAGpFubMS85A1cobEPVyuDmD8D9CUBivatRmauBSExyJPhmS5bZ8N4WouSP",
  "key16": "4vnTbBvmyso6Nu191KhicFnuXBNo26sHTcgb2iN76hX4kF9PhLSchfSCCGjgxrG9YDdN1FH8iK5r69Lkr89fLCxE",
  "key17": "677qjdkZm8nqYkVjyPW6diAz3teCM2N5xaDeHgUpwckNBMALdfweHS2nKk17MNEW1GTuaD3uL6SAB2UB8REeUGzW",
  "key18": "4AaQ34CeryFDJShkJsuouJpdccPydyLXze8EWxgRtNHdGFzbQCSp45dtWcgaVrhKHiQ1RBhH4VGSUbGnWUwo5Gwy",
  "key19": "5j7paKZ2GPsxptMV8T2gvpKQfud9gUwrWp3SPrkzwoZGViHmoiMQzf2fwPgiL3UGFo9hKbbo1KkbdYEWdujYJniT",
  "key20": "qP7UYLwKn4itBKcP8LzMBdWgQ7vA4aUeH7rYs6MCKjmog1Fd5WAUYb7A11EmwB6HqJNHJ68RitjqHxgJxsXfFkf",
  "key21": "5LsVTHSWj7f2hUdhZzCjUJuevqxmkwNk27Pdf1YBNUzaCeasfjfgSxrRW5CNLyyuHnCGdN5ttbiNokfM24Qsxfid",
  "key22": "433sCae1PvYgXaYdbjnubUqfFkaWxTQMFoqUMcxzMGnZ9bH3s66m5rfBa2nbXzKWpydY381L4r7ibWt6wRx2rp4E",
  "key23": "oxpW2Mw121BuJbV4zVtEbBB2xdziCxVwH5c9HzJaHQHebp2uq62wS8X6vCXHDPQJncLMokUPCeadnn4KvW8ittM",
  "key24": "4Rg5Kf7nX9avLzvpeKuSSDqPkk79ZA2CiVoCPhx4S7PrPPqKBnBc861uxFNC3X45ZkwKC8UHDZTMPeMAmLLitrBy",
  "key25": "saKJeY6CRzWeF7z5uXRC5RVYEruq1nq7WYh2SF3bkpfw7hegHjxUEH1YtchiC9ZqojUaTtZTiyEcGwjBbhaLy61",
  "key26": "25aNYGWsebcwDDhb6NXQjYfq1TZQWoJzYuSFqMsBRt51mDDQ67Z9fMfePNqPV2YG3HDTx8VXptK2z9q6ML1F9422",
  "key27": "4P2dsCu1hqXm2uv1SbrAQ95Cq2LCn6GZ9fx7wjkFt79gPKJuyaCzhxadueeWnFTGdyVXGmTF6C1g7cXKMri2Lvq2",
  "key28": "4ySZV8rrmMkJwJmotAxybkG8faPUU4PzkVykcoAcL4xeZkt2zNQSVufayCe5UcsbN8CZmGFQQ2fLZz8iRg7dypMf",
  "key29": "4agaENWUVxaXn8MMGe7CcyDJU7sdFa6PXgZY3AykZ2R8w8wmgJu658SXBrTNAbFsr1ZQkD6V9ht3cAT5jwToSxUg",
  "key30": "3s5BgSAvcngEJ2ocVdFBH1TxxptYGs7Cx7Yyy9SBdgf79jMS2psD1RYrzS4yZZof7hKcw43UNNSeAFdXDAbWaSdw",
  "key31": "4JkJNRbww3xWtu8UueNhK2PzzbVPcqn5BrnHyTkoTHGdV8gkAZoz5UBoMfUb4sNfzU1AeLXjE1q5gTHAec5fHogi",
  "key32": "3XHj25h7pKBzMaBMeDB4hyhVivCmg1ZW6mza5xBMpJAHMaFdhBJJ7RV7NWMLtjgBWiGHopWygrfxaiJauef3GjoR",
  "key33": "2tV2FjAZycSQ33Lnr2MbkMfGW2GjYrg4qPA7kjvsyVTtVpQJsWbcmdjatEVj3z3u7gGBzNwAG2wFAxQJqPUxmk22",
  "key34": "24ny8jBYKeSEPA8h4aHywKyxdrwwCmB7k5iYfCYopwRuNR8ktJwsfrD1xyTaqW7Z8DzUdkpsUYbTGpZNfw3WFVsF",
  "key35": "78HBwjvoom9WH1k5qWhtrbn6qnkWPyUVwTSbDiHMDeePS4wyRkQnQHnp2zpbhiUXz5PPrnBxp9mUUypFTMFaNBF",
  "key36": "3mgYS1pHC6szEdpfrQ6XHCqhjobBfFYySo8Kd5HshziAqZNML7UAVcHTfy2GAq6LzJ8sUZoXeCTGKTvK6ryXS9g4",
  "key37": "4HTaMd4hwaM5yLmzpHqwS79XWwAyUwniBBAqq3a8fpWj8gcsWBTWaqNXgm2b5AVWV86brHLrKA5mcZyK3h2274qo",
  "key38": "4L6eBM3AJaCLpbu19yxHxCbuGzup7RqtBWnJKjZp85CZopGUHuQjHArC1fa21yyRGUv9nNccAaEScUFdTVJ85wf1",
  "key39": "2wMnPy5Cyw6LueaZoVaPsZcxFYDyvvddDQHonTowgyDnqsk3vbuxTvJszziCKm2BP5UGf7NpY1JobU7yy7htS3vP"
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
