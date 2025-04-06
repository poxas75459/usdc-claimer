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
    "5PBwA46R9Vjj5ZGZAJS5qCqDRcxWFw8iJjiMNW6dAeioFNHofXvGYNXMJNAc15UFFCyUUstYEWJSGgh196cgm6yD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "515rctbrmx4wNy8o1LYZ7qvVYdXsyrUakyhUxtHAi855U6Qs8ZWk81yTq3NqvW1ZnVYaMAMeo8brdiZHdg2yvzfu",
  "key1": "5zVYt88wj8CAbQveWJ3h4gSaRxSmKAgfx7whrgASWc4VUaVYnEfQ6FM1t55ZwBPxW1qbsUoK48Zejx8LJ2r2Rnsv",
  "key2": "yHbsVnnNAgTyLLRihmGoUDj7oR5mFbi9VL9D8QQ7v446JQF6J8TRCqtxuhsyQ7hSx5cLNXN1CMeHo9RYvCMPTT2",
  "key3": "4FgSvNGFEsM5Djr553AbZX4VdUAj5QaWWfCmr2goYkUrrCiMZ2Yjsb8PwPE4bdJsrWTjoDjMzWzB9ycmS8MaXfVn",
  "key4": "4D6iqsK1NTRZcGULc6EJCrmeffcGY85yWEjYfV7pxecR7kXgfk7cbMaEaRMq2rBKxnhhEALQeh7NQtefCSjDUy6W",
  "key5": "4W4uDKjLwZmbpb1VwysvAcL7Wdda2xxgUZAxSDmRawYcARrmqRrHZNeZrDMRcrreHjFFYL2oXihDrs3B38t5XzVD",
  "key6": "4jt9FmMR3zPCKW6L41LNzsJC128DSAPaTDc5rRcLH8XaJF5nbFyh8fzRrX66hKwYCNvbh1F7X3h2nwQaDTDpBLhM",
  "key7": "3jMj6s59oEYWA8SaguZmeqLbnVSc8Ljdqj8g85G41dZvPyThZy5Aczokmx4sTCFDUaNKNELyphNxb6ZcSYdwiy5S",
  "key8": "5qWMJdxeoKo4tyQdanjeAxJrk17BaZnMg7piqXrdAsYyh8EZs9myMQuFwLc5NU7K16fvEVpnTaTt6VDJAvEr12Sg",
  "key9": "24pepyyT4KqwJwMiPBaL1ozZffB4urhSwy8rGb6aar78RPG7hQFQpHWmYuFv41MxCJnm8mT6A3Rx3PGee8aXRYek",
  "key10": "3dmLHYxonkTXgMFnJHyPTTorJsyECyCzpyCbuwdWy6QL6qSMpLJkkALYNrUXVLnreYY1X7QZSqxN6pQmqzRTaTrR",
  "key11": "4xMBNieKte1d1mcKJUK7iG78PT2NYgtbq1pHk16ZFh42WNzyMjab6a9HNeDVJAhYVBnexdbzxLzPFDLkxHnuAnmB",
  "key12": "56Uq7HVUetVyVC1tngYkDtZnzZCQ1sCBpxCAJ3J2gfW8k5DfxTBeTfYFRHYzroTSonxMoN7ikUMdiUq5zT2eveTK",
  "key13": "2bKv1S6maKzK5JuoBh5haeVFobyoTSLX7AuMrQg62ZAa7P5PVz5KivMjp5wL3ig8WSzUbQdc3g8K9Z86HCPYUcUX",
  "key14": "4Ke949e7sPcTKFznHNzKHmwVkxY8CCFeSezUAvai3sG6qMg5GdykAT58J3uWgYVuddxyjmB3HtNNSw82H419q8GT",
  "key15": "2ZR6FUcjErpAjwym4GqRtcVYE1AGEaaamiyr4hn9C2ycTBuVQkvidWwXe62nELFQV7pSq2fQbpyrbq2qjUhCoZc7",
  "key16": "4zaSYcZzcoc2TNBLRznwdAGViPdfB3L7R8VyHDX732orBLyF6sPiUNcjGqxcy5LfJyo18UDZ4BBvDeHHJpkyE4uT",
  "key17": "4SxDNHpEdhHZSJ8HHJH5YybU2Z57d7bXvPtNCZzKFtrbbeDG8Sbxz3LRYgavRaF5r4uRz4mAD6Lr4DS8uSVwZvhT",
  "key18": "3BAkTo7PdmLFEuiZXeL5RAzDurToyijBmcQTaUwpnUAQPaaCUK4iKkpPNg7dxEMFEfgWYj3GtVm4HaTRRKAnfpD5",
  "key19": "3VA88n4Q5o6osDkEyJ6m3aUKCkFV2ZRxnddh1cZpCCUXHPCvZm7sqTpjtDGrD5zQGRpFnEwMsYyieBRvSKHZNhLi",
  "key20": "LzYnEpQbFSzcJSYEzPK91dApM9KjmCuJgNrAcbvJdhUKVVvtCVBiNS6sfnCMvz9VezkLUH1EeRx7rdjYUqrU7mT",
  "key21": "toDce88Hy2dHZcQqzDYQQESAwSFxdJnoyBebWcCcrPdJF44zyXx3je2ZZrVnVCSLZAH91eL4GirbATqviArA769",
  "key22": "qRuvA72rK6eZ8JgTya3t9vULnbLX8ruuqELMU8ehwJNAcAxZ3CDbeP2GpHTH9Mh28kbCedu2ow75rVc7GiX9K1t",
  "key23": "5uWnA9BCgprkmSapmiRLbVgmUcAm8SUggpZWP6DiDUvtvLgJx6yz3i1GVtcugXwhNpTUumTfyzHh6ykwGzARWQ2Z",
  "key24": "5AnfC8kmzLwK9VoJqLr1LfZXaJhWSnoikywJ2C8rpVtenZnGncD68LK22xqtwLK9WPCv5tRKsD4qmoRH4dE5fV5P",
  "key25": "3uUP4dZeGh9zxyGmMBp7iXqozdMFAyp4KmnApadouLwqACNyipDE54JWhLHivfR3VcXJC1ysVoK49mWwR1nT9uWf",
  "key26": "QXszoiFn44zzAikfReqepXDJEsZ15U8PGsqeurnDtAqgSymVwQcYJEKaoTSd4SHLwNCibgz2zFchpFFWNHTCpkU",
  "key27": "3yXXhvCY61vzEA1dtjSSqEUiT5Z3aiPk82barC7Ve53ZnCuQg8TRqsiPvFmAHXjqWvdm6LHRnM2qVDYdaD5Crt7X",
  "key28": "4MBd6wJmaAEjphcPCXve9vDVzWqA8UPqgbJFW7Egqq2b9mL9gPYqazfJ86WM9vMn3UGgutQmepFKQa4T3tB2qLYm"
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
