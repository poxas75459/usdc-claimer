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
    "SpVbKWreMcpG6vzvdGoxRJPvRn6QDd9XPGa8bpyNdqpHogdrH3ntwkpJCA2e7yYbrxA57YRzw6af4axf3yVztnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DBHUwLiwFCy6TfinZKVvCnZrGe3qeHXKtfmMRsYrfM2awHo1B65KytYLxVrDqu77CTpSaZ9ZCMBRS5ESGJ3TnVK",
  "key1": "5zqxsRWtnia4tHqmrPBQaCz9Vnu3HgoSikpREr1ZeyqhKsZkrWMLxk7gsQrzSp95U3VYWcV2UVsouNhKdMsWdvE5",
  "key2": "5Sm12To9AokPi9NGGwc4UyXsQdS4QyJfeGsb4kYMZ1PGpvUdkSKanNZAsMAgu8QVQqCBgunGbBTLbT7KnUmgibyq",
  "key3": "4pjLMdu9GQtQG96YHK6YZApkkzocUSwaTkAnm64LyxVtQZjiubi4GfJrDhRiu2K4CXYbGgShohnuTH4DHnfUdT32",
  "key4": "zUS6aLJgQqBRuJv2hBrC8J1qJQaYq6qREYGgihY65C4ktKm81o15UpF7khKZ9XdeE1aMBxq1CLHPk4ZHJ2gU2q2",
  "key5": "4JfNCj61wpVeZEdqDZJbCFdrNi4UBDLmPMNL7R8RBy8JrcyiYkExpyopLWdHogjdTFWPhJePc8T9SPKJx5bey3U7",
  "key6": "2AxPpLDcrDLhYroK4SsXvRMmzPzRiTEYNEPdB4afau2mxbzSQxHVGvNvvhxa83qtVCi9AC1hDHKYHFoSycsh8nrv",
  "key7": "2aevim5BbxEBGkr8RSUrf1skXJMWSp1EeiJxmFhZ6ihqaRxoeX89kUpTwtdQd8ft7fiiyi6KP8hxoAC4Hy6yYHZZ",
  "key8": "2DnrLvzA7xEqvUmh137Svq1Z5Qjki51S7YeMzfKihAeeF8qBndMkvLdUzBPu1wqprgB6jTsmNW2SaBDt8aBWCHF6",
  "key9": "28hWFsgPt5v5JjBFHuBBXm8oAd4pkCs51w9nJrVyZcVfoKxWKgqWLLhJ8aQboH2byKAcEjchFWm1yQxbee5Gwzvk",
  "key10": "ozj3r9VYppwrKohXJ4sqddrsfRWB4HXtBTbmopJBcaQn1JNC2Y45kJXnwwz5GgyGZJoFwGgJBK7JHimaWdtgMgY",
  "key11": "S2TJv7zKvuPPfLmUgRKhjsEjjfkfRfqvNUwFhPZPQa5ZfmuwyDF9Uyx3MgfgHBvegCWh4gr4zXVXxWZtTtdDWqh",
  "key12": "5SgreW6LE4KW3VynVJv1JjF6MK7E7qcQk53cJVTCQ6Q34iJCoy2wUgbznkT6h3ZyjVZgRHPzW6HDZQmDCgWLWDiL",
  "key13": "531t5C1WD1Fri3V8YjXS8eadoAV4PCPne9XY6awobSeYJQKeAVGjfa6J31vEbkLkiZvu7zeyX2kG6NbshNErt81w",
  "key14": "3JWSJL24zK33xpUnrmU1sa6LJQ2BMnZHrNg8FN8iJEstMkAJnMCdvHwAthAiQov2hgHqHBYb9kv2p16JJM6jMaFU",
  "key15": "4XP8JhCuaSYu29G9ECocy9hAoy4SAQF9MUCXggN72hRx5p5NdkfLf182VoQptLfDUS3Bvijaohn6Z92oEtNH4GoD",
  "key16": "SNqPn1Vyh6wSGDdrDsvdWehQZrgXotCfd2xkZ7DKhn9JFLFVB9xU86BnvMu7jGMNNFageTxYZCJrZpWcMThA2KP",
  "key17": "3W1DjrYz8Syb956RbjPpUZhfVXS3RzAEAPZWuxZyp8J5BM4eGWnZnoNGJZJRh3pbot4cKha6xnMdezGEPKHxn7a5",
  "key18": "yoebesWFwdvWeQ33NFCu6GKJgFUavJ6FcTN5YhFKW9dyyVcjFBaJXA3RpDm46X5NJNTH6NvvhEJDJNAP8dagriC",
  "key19": "37eQTojfx6uojTiU7wyTs6pEowLc88ddCapsaJqNTus26LUHhev6pW6iRhiRRS4gRSFKKqCRW1WMamMRhteg8TxH",
  "key20": "4ZwupELifbFtRJvC9J3WaeVPGJE3kgQYq7vPS3k7wXuamjcRQnb9EJbnhmeZ8mEqiMyPWQAjLd1ePE5CXuiAegCu",
  "key21": "4r6qjPwNfWRknSit3Mq2Ses1HEY7UzPF2TZSSm2zZdfBFftMVMpKTGao9A4ckg4Kq5cnsidRVyMykofZExBWd1bq",
  "key22": "3CPLgmu89fjzBEaXQiHXWhA3pSehhZr4AHc6c9wHcQLWNnGQDAHuKueuAdoTANFu2utEdVUWnL3g7wtoDy6NXdgU",
  "key23": "hRZPYXuDCqTgKwkqjhKFAkSZpNj3BqPQRYgt6r2wLjqkJu6opw6YtcPcSP5jKUC7Q9S2WQgtexyHNNKbK77MZWS",
  "key24": "3WWMviEumT31roXtiPheMyPBYB7newPZzkjfwWSXM5aHg61WEaKMBKfBW7xmbKbEZvrFrw497PpQj45sEcYPKE5g",
  "key25": "2s43oANTHuNaSnR8yjb7F9Vx9RLkHvJzyw4AmJeyk4TT53qbqFnKm4J4cF7zZRNX7i1raWmtinE8sDS7Lt827CY8",
  "key26": "3pjHtwLH7AaLUw6pC5L1Kx6BJQoRxduR3337VTRFe4ujf1nNpKCfFuoGVSwaoEit9rUXpHziXLF8mzRnMmj5gjsQ",
  "key27": "3J135xjX8swkxjzzYjSFnyvkbsLDpLuFNmisefEGEd2XESwQ4vPGULpddnALwvfvHQygcPvF2sVBWVoUNhndeWe9",
  "key28": "xtqDmRZdqGBiShk1zuFe3hw3wucdQRyoxmjRGuJ36NGJBYB7zBj2kshBi15Ut5U8dKDnLzRTVTPQjrGeEgALNis",
  "key29": "2S9QFdhFC5ZKibDCTWnBSfzHJUPwCHJ674q41qxS6F8dv4eMaqsXmaPcCEBvSv16jGsG9mF5MSh6eTn5ESLQavdQ",
  "key30": "5Jh2z97LBByeEkLPHivdK6nKGFrHukarjm7VRhD2EFaeCQk5QPrUWzhUAe2j9sYHDvs6MzbEP5xs4aGbVDui4VU8",
  "key31": "26VrR6ZHddPfauganUwE7xfA8yGz36u3oUoV2mgs3aipMy1Aw97wri7EJVoszmBTVSrN2365TxJALsVnUMWyYCrg",
  "key32": "62KAT2Go42QQzcnqPutA3y2Ubw4t9qDghd8sc1EaZnvj1iaoiGjSEerUq9X7Z2oubLj1kZfTTM7vZrf127ABomiP",
  "key33": "2419QkbcAmqRcVMXjiWpc4fykW2zSo9DSsNUUW66Wzo2C1gXWXSnjq5T5dRjQAg3TUpfihvUP8q7SnSRfvA2aLHG",
  "key34": "4vziDtjkihNwx9jdYWeTG1AZGV8bchHwosvN8VGcJdzpCmZXkbNdZsbB95WavZ64oR2sppxYCYQAybgG5JpJBNfu",
  "key35": "4hu6zLVwWvR2wrguH6L2DCJCGxgT5o7CnuFsSZiqurqmG4WfApqNLRyJWZkZ9AZ4zQwb3pcBdBQLGmQFFUgBUCBu",
  "key36": "twFmEhVPFPC3njv9KFtWRujsWwyD2dkzaPvjimxiANbJUGajyp6RfMqDE2uejWfFtdWvMd6hoWotLWv3CGWwtix",
  "key37": "vHaUrsJm2RckfKvR5EKCo9HD1E7vJ1a3CMf6ux497wsAZrejz7di29YVMWLb4PRAApZh2c4fDyD82a2fjepvUij",
  "key38": "b2LQvvptSY6MvcQfcqeg79KXVryRBzNdsVE4QvgLZsiFMBmvSeNEb8dYQdXxomMAtaSQDwZar4puypd6NyQYp6f",
  "key39": "4B28yjHiheysgNc3DSRAYRWcsuguBJGtxmnvdyg8ruq4zHvmM9TfE7fcCoFcUb9Jy2kaa45nHGagSQ4FqXPyCYWC",
  "key40": "53qC26MAszzzSU8UtcEPhYbYVH2HoL43ZpCwnjyRN6nnG217P6w1Bgxy8pPaf4mKwYM7vVZZZHfFq6EyxRsiZoea",
  "key41": "xodtCqaxTYELjYUpDoovCkq6FfwDZwsFaoDgZZMveRpaNJ31jxhVzgQBRJDxBKF74aQGVNYpWzWwFgBzSi6KNqW",
  "key42": "3RLAUbt71VG8g2eJTzHUtL6SyZX9V7VAGpCGBJueGcsBBbZ9dEWTJ6EEeEvoJoRtNVq3KGkVFVehScd1VKbpvUBr",
  "key43": "4VS2uVEP1EP69aKUSDYKFXZoU8tZdBMh4jWg28scNUxHEvFpfEwEs52LiwcEXkFSwheC59oR3RGT7M7o4XpgzrdJ",
  "key44": "5SR4ZwHiDv6f4LAQfGY29kU9sAta7rx5EksvyjV7DESsxaQX2MS62fRAp19iWFqkZQVdfWxpenXp58HNkAcDA8YR",
  "key45": "4myDuAaY4Lg9PvEcpgkGmphr88xLVC7cq9hemqmK4N8qRWuHpa6C6DF5tzsA3aNCjwYtSXgpDoK2GVjuDrBuAQH9",
  "key46": "2TN1ezR4iLUhA2qFqwtcuraqNCnLZ2bGYezkSEk4vt5D6U2PDDHETbgaQzg8Vsi87GqKuEc34gZ77xBYAh1wyRSJ",
  "key47": "4u9DTG83af275kQGwoar8ZRcStSw2Nnk6bb2h1WhRLXV3GZmwWaeM7nDVuPGXRQWcGbkUzyvDwrQF1zTAqAyLebm",
  "key48": "Dyqipv9DhpsbyN1mWKrH4JojhKWKay33M8eoVHMM7gWRS4y38kw5UKgBSBwnB94BLcLoB36cRPKgXaStkuiNaTF",
  "key49": "Pt4SaSynCpW18Ztd3Qp2yKLBWW79XbkgqPNUE8HSVTuKrnkCDKXkEUgfChx1Kr6qmNRaGZmjmbagZaZw6ZZtDzK"
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
