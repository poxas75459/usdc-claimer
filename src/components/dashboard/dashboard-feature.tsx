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
    "jQrTBLDweYHzEzUK6Sfw914pZ7FteHfDW1mrqdjJRMcrrmXM137Ni17gVrcdH83sX5U1dwyvFzzCw5NHA4vZkAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fRZqdi6RaATkmDUX97fm4hGfaDJ7pBugmLDied98G9zbFrqkcL4GBXPMsU7w6fqKEbRRFZJsK1qeYFaEcXbhahx",
  "key1": "5fvvsNXrHreZKU3whM5iAQpVeNe46dkNDWe1dc9SbYgwxtfmDqhYByexoZv9nzdd6bSJNn5AYUsyxzNNB6VAd8Jq",
  "key2": "4Sptw7XVAuifvXpS1Bxr5CVMsh7fJ5LHP1urfUMz3vAWPeBnngQjufjHU3KpB3UWpvctJC6vrQTc6kGYZbLj3bYJ",
  "key3": "GH3ri1bukDG1zeyMaS9C8LH9xUPxg9Ppu9v64YtWqBxd53TvEVEhdxqnpQSk7etKeG3kBAN5kqk4fETffFuT3D8",
  "key4": "4quzuEwsi4p5qoWU6tLERBmnY1Gu9V9BzVwU793StMnS1iKiPuGDg6cekZBWXCzYG34TMo4TimiKM9BzfUnHJyv1",
  "key5": "2Ajjrh2FJjk9VQbydBCmhB9vXbXQZjHLrYHmiscy8jQDqj5iaZV2r9Ci65F97dVmmfcihkTBeeV9KPxCvQdBZiFe",
  "key6": "eNF66LbKyUmVPHu7JFiQ5ks3toBhjiCJArkLWJUHUr3muFF8WeH8S1mtcKFLi3HzbbJDCYv9LoSyni5Ag8UbWGd",
  "key7": "3wVsTSWETQ4Z4MkgtfWdHBkouShRq899RFntintbPLYiaGERUT7tBYFwbS92jWhUKUzMkWG43QnDdrRiA8ZNHqyQ",
  "key8": "3mxoA5gqZSaAHdCopUk2rtMAMQeLKz5jt1txs65aC6bnGpXk5925AhQ3xxiKUEhExZmHZomrneV3EWW5S45HcWT4",
  "key9": "34LwN5JemjhXY5Eu3VLQt8ekSm48jPuBhQo9AMJEzDkx6gpQzoTD9gSud764Ljbk1dPuzJRXmUqwZFyGScjFmoto",
  "key10": "3MHR6zfhUQhT5wiCryYGay4EypcHWiyLnHqiQjA7aCc8p53gvzGaUkbX6892AAnd46GupQ3Tn39Cv6cvYLih758",
  "key11": "3TC8gSovFZsEtKsjT8ZmiqXPe9qifxe4aYArRaQVoEjss4DjvPEd5oq6fvGDzXbodvDwVF35256Q5aou6gqexkpb",
  "key12": "3G7smDUWwcCHT2j6zE1v7YjK4SQwaUWyeDfMr8eQU6EvmeL5Kvgi978ZLNdHsJc8CoGnBeNDpS9NR1Zn9UzRaS3K",
  "key13": "2oVayqoDmxn2EoSALGUtZY5txBL9dYFwD1gPA8MinRbwTZWTZZiXFxSWyxBPLsX8WfenaeuNNH8NoQcy7zLpDyAu",
  "key14": "4QEuCrCEZ8mmCymmFWZuH4aS8SAYEhD5uBKyyh7LSdhEGC8HNsbweZNZ42zTFwxU4Jk1peRsQaYSvVYTVZxKz6zh",
  "key15": "5McqLaKkeVL51wMtjAcgCYW67YNLiC2qW1fenRyXDfcDL2TfUCcJgrRWQKcgSrTLk2UgKwLGDY3gd5XCDGwZ7KUP",
  "key16": "65B8haiLnfFYt7KGHJcyymqJf26kzjfi9gHoNyXcxbfDxnKeeNPeNqNVoDA1299gMVwZJ7hjqA9FWrGi48NQLHcU",
  "key17": "2n5jkVuLRm3rqhAgLejGZsVn7yZBDAhSLAznp8ma4ijDF7spk7BZRDFyEMHVuT2RvuajfjkN2NR8dr1woE7GZ45u",
  "key18": "KkCuTadPYnYVzN1qn7fPKY3uLWc6ZWG841Fx7tZqe5gTYqzGcUYD3VifT1PXvf8p5nzDSZMeHGhFSYHqoro4dLR",
  "key19": "4xA2LsiXKHbTdhMqcg872aU3swGsp5xdtsMqEcGJUukC5GxSCoBMBVwHnqwVWLhVoS6q6cEfWNRrj524TRtGpjxK",
  "key20": "4qDtjrcJoqiDeYzcS8LccqdFPNNUA5aVVRQZSeYLST8QnNttzEn2QNi6xUkeT4rwoycUw4iZEamaZLQjQo5ec4ZL",
  "key21": "3rJLJSLLms9bXjdQm6Prn7jrnLtRggDnhzBzkuKgfbLwsM1pAZ4uopTuFs7eELMD5XhrYnb3DKU6KDFT9g3eNNkg",
  "key22": "41PyUx51A7hkmh1tB7Td3RWZSGGFZZmasmbE4JDK7R6zd1eoWutPqt3jNhvoHhWQH7LsKYYgsUvMJXu3LdBEEbPt",
  "key23": "4yC2hneuyLfUvBRwLyePU5pxcKoLafmSR5DfbDJmtrfnmRmNxSYqJuHvkbADWTeWx61CgJKwpsZsKx8t5ZGaaKug",
  "key24": "56s5aWdPm9LjCyBUtD8dKEkNKuoSyEiCkUJYgRm76fw5AhoqT8sfQt9VHouBNUsVCarph34xSV4PENngeSDoGgKs",
  "key25": "iWhQLfd2hiwXYv8pAbSgAHgC4nfT8Z9Y9NJm7tGCfoREGDvtUs3NyU7eGDLnpMX6Tr5L2s7DtPQjsgZ2bmdTPYj",
  "key26": "DuxifCMDgcMW3cFbnYuTbToANrCasAmpQ6AdSoeoKaQUeAjnyHR9Grxeg5YpXWENVCNG25PfpTqYZ4jKuNtnnU8",
  "key27": "5DCL7tpFZL3KKfgPViXjXwRdomvWdjup5kF9SVtD7tnzUDMEovELrtWk1UNBxT67Xd5VAXKqttEdtQTFh9ABJDrQ",
  "key28": "3uG9FfAkQGQS1m5uvT6QZ3nBDD5QJtiJxGAXzBEXeEd6MiaBR1nFgSYpV6jfoP7PqsF4XrJtaXWdFjftoL7yhEz8",
  "key29": "2fe4J82weKBiy3zribRTeD2ya3UuEaACVRQvKEyxvJafXDXFcLAXDV6E3J8UMpLy7GP7mmj6TKw8TiQrq6CRYzj1",
  "key30": "4p6y4YJkXZ3hHHR3LhQ5af5BKgSj5FzsWqtGvZufu6ofoc44agYgBbLuhxXDo5vVFpDEKJtQkFG52NVXhyE5y9Sb",
  "key31": "4CJm3TapMHDUduKCVTyt6FUmUVxsLxJYcYxQLeE2njYb2fk67D8VZMweifwV8t631bV5JGfA8bBzmHJGF1QmsGak",
  "key32": "4eAFx594Xneb3n8JUhXJYj6orZHfZUooNB1AoUhWt5hnCPUjQ5wDiZ88vXtiWmo4Yu6WyNvDt7c5u15h73M1ynTv",
  "key33": "ALpWEbuCx4wFifv685qLxZFW86RonVYTjWzh9fWNFCp6kX6qeFXqYm1nyZTX5Zk37jcgEZyYwYjqBSNHkeBJZ2V",
  "key34": "aiqVk3cQgsHrGN43HgfxqXygC5xS9VruHBL7ibF1HWgqesDcAzwpeSxk5AUHQPU9Q7P4M6uWRvLLwtoPGwpHpSy",
  "key35": "2KHv7dX1PTZ4tEiPbsA5Zb7H5Euf5VgocD4PM5VbjouQsW2iiegPTerRYgiYv3GC3Nb71jMDVzuPEkRPfdVRyvCU",
  "key36": "5PSVHwbjsTfFkRBhAmqaeC1nXm958xcAAe9aaZKecz3KtaEnVxgZAvdzWfBVmPyM5JXBczRSXjS5gTLYEGrDZd4u",
  "key37": "76gSZHMzyq61RsUbwnNsccE4YBz8dXRgEytAtoc9bU8vqc6qHNztNZSxKTv19dkmSjiyEX6yAf8GUBrjDtgGMES",
  "key38": "8yAX9ECasddmTTQWrcEEZ2WhoA6sBrLusoGhN68UqtQz8cguiSuFbJjw8L7BsG2Nu5jHz7KtyJZVzNCCNHmdkoK",
  "key39": "5uqrhb6wXFXP8xRT7p4BWpd9NeqztmVJGduSgucNcJz7tfexvDW1BaUqs7uWwRcCXyZWepdyspUCCL8EwKzGPuky",
  "key40": "3Z2djqQB86baevKnn6DVaVk7oht9A5G1zYLB6kdWSRmHW2US6ijB1XvBeWSSN8cZxVsdEwUYRwWXnKWryrCR68RC"
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
