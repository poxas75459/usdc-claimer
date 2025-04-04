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
    "4v6W1sewwH8A3mzi57mypGudVu3sb7fCgqwq6VVcCwc7riJ13iAtmq59onJvw6hFyH8Ugaf8FfjuVVgWyj3TgNAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RH5eXcw9wPUiqtRJDs7t4m6THaLhXDK8vQY6ke9XKD6qq4gnSJ6adn8mj4N9kSyxWQatYYB925hFnxhuAYCp7Nw",
  "key1": "6JAoe75fgTCS6LiPQyciTAKhU6sBaiyEPpQ1bFKRftt93NFzwsCsm4Js9taPA3mf8JHcoWn1Uj7rjxKdVAfHDCx",
  "key2": "5TWtbcfJ6KFHcmLTg4sgtLpXQA9uf9g7vStvdSBuWaJwbHGH68suwH7jKgnmCpZQVx1uQCvhjChtvnam7TQcBKtR",
  "key3": "2KNqZA6EsvyiUzCXAkXNBnwQisVbov9MStw2Sek4fBFRhaKfRAHo5rChSrvVWPrZu9oq7F8TdNHz4jXEJ1ru4j3A",
  "key4": "Pi5QTRYqg4wSH6GBnrLVc42hev1FncNo4DVVWaX62GaKSaeCjQ3r3mjXMUzbEd2NJkawzgfF7oGWUXYErdHZHJb",
  "key5": "NPQU85wVtH9Zpv9AnhN8JBjA3Rq54PLGfyvB2udhnKcomNB9kJzMvvWaZxiZfJSLAdsUCCMKz8pbTJqBUYo81wY",
  "key6": "5uywzFkhApSUWgddVNNoEqCtQcecnssXXDDicpxasQHryjSUX2ZFB5kRDpj9eYu1UDJW223ikfPMHdp9pTq4gwXD",
  "key7": "26gnP3FzbfrVk3aXYaWPeM9xxj2xXEy7npjLF8VdSB75atS7J3f862EhXxJm2eFKG2FJFUkdb7MqeFtWWXLfL2kW",
  "key8": "28sCDXpYM4vsneyoqWbCtGrsXUBVe57m38XnFiNeFiHEFjUVxWkDLaoinzo94Xf8v7FUFc9XbpMuz2xPXbEwnLQb",
  "key9": "ooRxC4XJvbxJEJscJmQGobrrk8TpLAaNiUUoL75ZFjidz93Ng5KuXzXj768VaJVuLtLQQbPCzkkf2tEzSfcy6Ju",
  "key10": "s9UDeTssYP5N6dgkMBGJL76uMKpmrLCq4CRQohcNfAz1eHanHje7BYVZFP4EJqWLLDrvuAnBHvfrxzVbjHiySKJ",
  "key11": "5xtGqcMG8V5TfA1HBaTpSofttf5n45kz2bMcAWCQa2yiuK38kgCLksjk6TDA5wbVMk2H6vRzJYALFexeEcWWubpf",
  "key12": "EHnheBs1qqSiq57qP8hiygLZLrTUaNoSWDdFhZzYTAnCLm9L7oAAiHw14zKxhrKE2rDuUddiiCaCgMKw3oFcJSZ",
  "key13": "jWtbX3MKM9tGPQNF5z4YnS2UZVrNxR2ajMRWLFyqZh1GrvnsNY9QcxsbB1FLBvxUDwQqVmYdgt97dZ1syDuDJTv",
  "key14": "2ZheQqQRLTk85GBTWoiPZJkr9FDXQWb8w1YZndXYiBi4kqt3C7nEuStCBtEstmaUGQWoKcWTexXrtxYWg4ZA2Cht",
  "key15": "2z6BHqaxFzz4i92YUrH5qC63qFhwHNGNNcx1B2d4HGdcNSn7qwjaiDHwab1KvjBdT3fAyZjb5VBpi6rSCvWxzH8q",
  "key16": "4bV6uyiTAzQJULcCjVSfSBuzK5vaHFg5u57MMtERfEAA4VAi4NZ2KgtNUFCevAcR73fPep91FFDqMtzuQgZWviwL",
  "key17": "2APrBHfskCYMEw47LJAu3tvA9vd7SiWmb4SywCLFitPSmdux1CBXCFYKBnEuMJzmmu5HprLM3n15J7tY9YSkwu1S",
  "key18": "Zj8AoAQox7pUbVkBR9TbvZzC5K3EuZZAxFbeZUqcy8rwZnN9T7Pqu4AYBf6A9e7Sdfra3cXmke13WWiUv4NoBR7",
  "key19": "2GzD23wF7oNLVha4SFCwRmbKUMkwnU9VdzKQEfJS8RUu2KRYwdSo7DiEZ1iiyp2DGJ38R9Xqu4hQiycu8BRYjpN7",
  "key20": "UhyR72319Fm45E1u4xg1zGd2gJSJh7K66snavvb5m9h1wFzQtNWRzPzU4JWTcvssFo8Hh9i3CK8vQgUm92mP3FQ",
  "key21": "3mGuGYJq99N1M92FMfgXEr9UTzjiz3Xp7ghYg3VsNxKcSjSm2PEuZDS8j2o5MRa2BYFJtYb4cGKwLwHMdzoikjpn",
  "key22": "3GWSwQBCWMGCiDDWXwAa8gSnDG7CDfw6iquxyaEDvMZ9bjTVWLknP1P4pn59JEVm1f6kjqqwmC87CVtRCqaiJVRV",
  "key23": "32UjBPXFP78fDrwx5AQSwKkjunWpvFBniyMc3zHgsYS61PkCdsUs2xNFknWQVXdJvicBU2a6hJspGCeLNNSFAEbp",
  "key24": "5qCxCn4WUwc7tfDdHYKafZ6jy6SBnicaBpsGVZw8g3G6gcxrRPoxHVJGRfkSdcEmbHZQdvpYq7GHHMzbsLjwFoHx",
  "key25": "4uok78A1A2j7csnXdoYQrzJx3DTb1sLzMaapM3zYKacjouaQYzbMiJopvVz2AmB4i6ujcseUGywmfghwtnyTpn3i",
  "key26": "3Zz7ZEjVTKB53Mk38PZRCWqKK19cHt3dmpGtUPH6awoJi1zNxjG9XochFx1qzkrvCpP9eB9iEErZbQdTf92k3Ja",
  "key27": "2Y3kjiNueJCU4q6WBC7ozx33GvLG7Bi87QbhWMqVbRBbE3bdhnqExMhj7u3eTrwSot1j3RbpMxThJuZmVCwJha8v",
  "key28": "5AyyEt962J7o7BJPVqzTvT6DF6MaQMd3cwn7p6Pif3PXRNVeTQiAQmDHJfowtQUVgZTuUnV6FLTXNuzxQa6Uven3",
  "key29": "2jjj2vJpzvv8g9HsWyDBGoB4GNYS4xPsiTpw9NHiMzSZZY7vXpGmN6yCXCV4B5NpW7ftXkj7JzuoHHtHTxy7RrU",
  "key30": "5JAH3tg8kpBLySbRg1AVXxmsdsLg6W7xk3xrPEfyEVr6RqdFwV46G9QDKgb6NbzdAbgi5Q5B3qQNQ17CYdtAWUd7",
  "key31": "yqdz1drjuaBoGrgA5dGZcDfvddfDq6f1mHcdQ32p9mM7vhzDmTrptQGiRtcYrQieL6jNCjUctuxSdpFeWA44d8L",
  "key32": "XHW5gcUzp2FD3g8g2E7M1eobfnwvLZ8HDWWXo7QHMqgZsDB75qhL1tQBg7rCE9qW4GCeiVkHhKTSMtwGQaUP4Rr",
  "key33": "4oB3RzpaU8ggW23C3MDKfXhLGdmnKB4aXUccXwP1tjTH2doTsrTFz2u7AM79sgKDZHgkTsD1AEDmd7giAGE7dbPa",
  "key34": "3aDMAvoRZ61VQDZb5Noyvddm1ivMKGddiXKnZtVj4erUZVKZmvhTvRGoQotxSTgqoaWxu7UwgoUgyS1vibtFjftx",
  "key35": "4ZGJnZ1Zir2rzbnHNU82R5gm7WJUEK7kQG6KqWoJVnZ7F6bG1M78ejsoYDKHpbvoMi3Ddjjes4qn1fuzMnH2rRXW",
  "key36": "3sX3U2PtW639NGrXHHxhuPYDUDvat8ghPXrGoxhHZy5xUaEaXn3yAD87ThEpyCKQCPDtkkjmPTNyeyWSKxJAE7eX",
  "key37": "2cqNgehHx41SeMfbSSa9C3AmZNHTm65SzTt5mf4rADeWvDXMkMvWD8RrCzDvxcfrzggECDjobxEckpmCrB16KUpA"
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
