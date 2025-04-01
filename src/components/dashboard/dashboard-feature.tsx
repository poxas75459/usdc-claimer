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
    "2NwS1jxMPE4564V93TwQ2pdELgd71woMYf3pxj6fiyW6AeBtEM4PsaU4W7py995Fpp79MR4BLzSH7gAvF4u69c5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gMxJjc853d8MQs3DkFXJVPJ3F9YX8ojusqHM4nhE8qyNZgiLDy79iMXR4fw6Y9n7WK5Mpxo85U7ExMtyPzA62gS",
  "key1": "4WRLFKnZZnHFfdxfWWN97CfbjtDD7a9yqnzK887zNkSfG8qPqDmKH7Zga4bTwMNbAH4VwBGPApk82MyTfJ9jaJSY",
  "key2": "2SWTk1mYZCaP5Zugm7vVUwGPNjr6GoS9JcbnFwGCsGHfCcehmxzjWwGebf5J9xg1Wt7o4s3jng5hLunk8N7aJbia",
  "key3": "4MTR2FoCTaC7QPtAGCGgJs9rYZM4oqsiJnU6Af7MnQVF8sbc7dWmDCBTUgAY9uxqchujeuATkXyeygH8rvHzyybp",
  "key4": "2rLMpWhpy7dMAix9KidBE9EgLbG65vNZ6mcAHiwaMatakxPgGgT5W7UJBtAzWqDW3xxC4GZF78Cf8oCMQGXsCkRL",
  "key5": "5THuumaAYwuXsWuH7iuCTeMYqZQwK7qRYGHaP6QCPVkDRpcHygqa28zSBhQCfMb7SBxktEoNHsFoY9nFWx6eJPne",
  "key6": "24c13vtxFCGAoqL15HytZSD5WuhfMVWxEEbZAjNVzDvFhrTQGgsUPno1eiWb4rZ4Cf25jbi7tUwFwppAbM4FsaBE",
  "key7": "3GSs3fEM8sYssjY1j6PokKFHrA3JhrEh21Us3sHx5RXL4Fsq4e1gYHieUMXp9g5ffGsLUVqeKG51swDELEMSDw5P",
  "key8": "KzVBr4yp3w7XGtoH978BAWfRzUqzAA1ndD5pGQUPEac7CZqsoX322hWJesSANkJS1TZGS5yskgobCkRQmb6tgP6",
  "key9": "4qHXjAzjEJjow4WFzpjrSEkAkmDyEdNaeaTv2JEaqYSzYazCBEjj6PC9yAya2PvGLfL8Uzp6Minv3B4NB7GuCvF8",
  "key10": "55wqUeFAFz7QVV9MFXWov6F4FsNNJi39G2oe2rnPWgqTjaZo9dnqynbMNEAniTrRzH7RbU24wMtLNerYKhaMGQS2",
  "key11": "exk5j6xubSHesnCshbVbbRqLCooivYvjQqYTK8rvyyxHFLrBJthcHUGg5gUpV43GwoW7PX4GCCvAioJ4KjvLAWX",
  "key12": "437QrYCgAUkRnipF1PCHbKMscibgXxX5sFQcH1jfMaKzn8qcYKGSoFmCCSUBR8qMJ9mxN2oYfpBPRvPpK8seqPkg",
  "key13": "3EZ5R74BUeGfu2EpEBSNQNhKw79SfNe6n65Gnj95rHwpxkeqKkx1GX6mPN5oM13b65sFj259ism7re42V81FaMwU",
  "key14": "3zxHFnTSZUM5gjXJ1SWTAUCGYZLfyJywTUfAxUcma34XvFk5rKwjYdxyfmdWVH6gwrJExDGBNQs8ecvpHADL5UqX",
  "key15": "3HrFm1G2CCoXXkPH3JHEbXcuKmvceYsurDfjYaGrRVscSjjTaTyLMScPZLtRFfaDknFcoFAk2CC6jEJnr1P5HUuh",
  "key16": "5xhAszNwBtoZqYXBkgPVNainJnjMKxAffVLbPJcCHESqVsvegKyejcGjvAapS6dSKAvwP2fsxFWmCLapGtz25EeL",
  "key17": "2DssvbDNML6yi2fARavVExvoqehKkCeHiaFHbuC8UgUYy46HEmXwGS91fFfcz5PuBsq6cU88qgfRPViQVof9TYvS",
  "key18": "3zctfxwUZoapxDkvvTfXYNgBVivrq3vRd4yJkmo8pjcqziKtPzBEnXtnBbhVVmnzk6h8xov7ygq3rXbHCKTnDh2B",
  "key19": "5aMkAmDgBxRa6eCCAy7eprxHzcLA5ungDQnHcNXjPTxRK9gNqXDQq6fCxDGjf9NM9weEzoAqWf3NDttQxS7mLTwk",
  "key20": "5JH457E9jFM3EJwYgoDxLefU9whgt1exmMyJBC1g17TCvFde3D18ksdRyno9DdepSoEHd5avMzRkraV9ByCaSPGv",
  "key21": "T7g2xwjoupK43ZzHjZPQuxcDnVJRRDCU5psG2zQkp6aeskUBiBst2v6o8XFx7EiWdPch3nQn3aMbzL5hyytPVq8",
  "key22": "4R4qxBXdSu741b6zZTYv4sszRbQJRfNMMXda1wuttaSuXoe7LhtuJYxAetRwLhj3J4zaQJL8UhxDzH3xXPPYjDja",
  "key23": "4nnAM7Se4BYWxsDMRDrRyS83ZMAASc7F2jBpDNTs4GTAzboAhXYX27wMQRkKccHgoumVEYF4NPpg2NpVz8ci3AVN",
  "key24": "5E3KJnyX7UiWkPVvzUCEvRQuxBfr7WEvPoSnLcYDtNVezKRVCNr8pxc1YQZMkYcHSbYCri481JK39yVuXDGebTLB",
  "key25": "3hjRVfpb7tRDzw4D8B5qajmKiFFHvRECu8Hz4BNymtfJ514YU6yoWKK5VbQUHd8QsArbUVcPHJwYeGjUuKzEqMpA",
  "key26": "3buVC4qMp4dyfdqo14ytc1cbK74hGvEZmcaQmaSxqLrPXz8AxPtj1av5kpuMtbnvwXMhBbNonEzf7KWgkDSBFbFv",
  "key27": "4T3qUYGpHMjsmby3sfAGZcU4qaY4qPzAwB86oWRxjKirWfgSFqPmPQ89NYnk5fKAp4mniCpPuDsCX6Qp9TaMceMK",
  "key28": "55mEUHqH1SvBCH1GfnmP9bj6sDwdiC4PCDwUPhzcQamMPibgeG4gjWpGVUEqP1qV8CUVfUduzt3mfr3UXAuaWSc3",
  "key29": "4JFjPUvse5dYnxTZrF2mWju8A9pzrFDPTQRhNPCvPvxhRb1cApZfYAkDbKrwjNwXa4uWzVbMLPdKXqMt9ENGrZgM",
  "key30": "3b3BRHW6BrLzuUWeDMTzRJnn4s8vGZsgSb7qVDXfEf7pYhPo6Hg83rARcewGYLCb2VwBApG9aQYjk5qbPPkaMFwK",
  "key31": "2xK6JRsQTp6tek7ERVdrMrMH2jRdVoxfq7vheKAi9ba3yuZ18ffwENLdWSzqvYFR26e8S17HoZcuCe9nwSWUKkjm"
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
