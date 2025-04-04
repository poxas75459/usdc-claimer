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
    "4xPCEZzHUEQVQ4ymRHDTkdArcwFM5Cx3SCiEJ7w9SWozLC8v92DMqFbPpF4AtZgpuHS86SE7i5MbkZjQt3YrbA7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jnx536k3HDBr3G5FK5NqFVQzz58stvc75rMuhMsdYZSSnDX2u9Y1DwvKQXzr7D9BnAWstkTbkZj653xYfckuZqp",
  "key1": "2mTbLvGwbY9ggbytaK9kMsHZMtNRTebuXpku1oCHQv1e1tPFTDTRTKcAHRN3YhVY4J3rx1abQxeW3zDMGrjtkceN",
  "key2": "36NZ5CmuEzxRVkmQEvfnbUsUQcuAaii6f1UePekVtEXCme4nxNPVKh8VmxroXttrfnngTXw29ATa1cg8DuquQUKn",
  "key3": "59Azp7VomfviVHjiamRn43WLNwomRpseToicpGoZH4eq9xykw31SxEXL83kUxHh1RjGM21jbU4DNmEeJgZr8cEjA",
  "key4": "3MLDJXqTGNoQBEfcRy9FtNPaWTbpJue7cV3PjDbD9VdeMSQii531cZt1stYb2HW14KDxPNCG2dwceddukvGbx4iF",
  "key5": "DVWPMgUxjtYQkhvL9irVpCbtRr6yZ7E1XRN7Rsu3sDNbcY6bvxkET9HqsNQ7sgwJW25eFMV3dTK7XL9RCf7VsRh",
  "key6": "44igfnQ8Hqh18DDPU649eBvCjTYZP9VamrPVq4xCHHFAy85Wg6iQrdLAtt33pxLE3Y9VfnK2VUh67b3fVWuyaERz",
  "key7": "5SxgjrxFdEoczmB3xZaT34MxUb2ZQpwU9pwSUvYgzwBwHzBbzvJaRxwPZASvK8Xu6p7szxwaY2X2fzn44vWewLhv",
  "key8": "3BjiXncnrZLubD94zm3FhMHhwh3B6coZ11yW5DvmYAygCYeTi21RARjfEPgYUbfq27XtxMXZiRbtmzCqYGcbCDJZ",
  "key9": "5qj3niN1RwnzBYPVfen5x5nAe2pSztTihn7V12178kGrN6XVeYpASwrRLHsyjzsi9LTW7p7yBje12wDPVe5dQ4i6",
  "key10": "eKHEPPHB5eZKKYeE3MZ9W5CqmEgwwEmqiPgWVotvu4wJh7zfterSSSyjq2QvqbeYsuQ5u59SCNEdySNUVQ8ZHTP",
  "key11": "26bMsyUNR7SbjgJeM7M2W4fkK6QS2UR4dcX9JExVdmozLAaN97wiBM8hb1U4sWVq8PovsM9Hg6Jz1wE88CdYq59R",
  "key12": "2ztEqpYEYdUWj5czr66XDX7tevk86SbXp2wJBthmLmjChWTVTmSF6UDBBYiu1nwCYy2By33jJLpWeS5h3kAy877S",
  "key13": "5pUxCJynebW7JeG9hYXQufZSNvEE7P44GArpuaHUd9zpycRhzZDbtKiqS2XAbonJLuyDfPgqVfrvH3eKrHpq8zWE",
  "key14": "46g8NoCcdE6f5rXESf7zxoKLrU3WoPMLVShWtANimM3PtBTQu3niiumGiS6e4g4h4vBfxoYg3z8yfzULmPBM2QGG",
  "key15": "3qGzPGnGbE5cCm6wYWM86gtXpgsurLFzrLLzXNQ9npGssa4aapt6BwXKn7yDdnk5n8bDWB3k46YJ1YgsjqoKuxX3",
  "key16": "3RhqXXvYCo9jHEZe4kgkGAtiMxmcykY6DKNdMGJS9tpvRrkAvSzX22CHNERoyAJEYBPVeV5ma9emfPrmfHBYYdrN",
  "key17": "5kDaNr8XNcktYG6sk7voYL1G8poWfzeLWp6Fkxxhxvt4pRfVVyKEqixepd6Eg2M1Si6FtJJ18BN1PYV2z11VKPQ7",
  "key18": "3frHEmTHwvqQBpbyDaFdD4Zt87p5XgjyRcZNuDEFycagVevqmBYWqKfdJKq6J6dT6F7bLZtBiqKyasoa9ztsn5sg",
  "key19": "39yccpyjVuM17hmHfVFni2rQgxYG9SZA4nvSvjy13CAuuyDNJSReLjkZKJxgS1fnN9EcxPSEiz9u5MUPkAX43hkL",
  "key20": "39ShiDyfXgHRrsyQyLPsjr7S7nKgQc3JN2cg4A6YA8UhYDmQtuUxpYStUSGJM4DS9bpJgrXdnuUKa2NtkYCrM7S5",
  "key21": "4PKx8A1k3mwb6SoeQjMhDRXumVWkvN9vgL4vtwKg1ikPUZroPShacPKqXrQCkUpKbz25jXLLNtBgwMKfNwYMDAzF",
  "key22": "59aDURgG2oiQDNrcVWhSxV4fwBEXdEtumDPJybLGtKVn8pRW2HYHU4KJ88VZNDwZWkKY2fzbRD81mU31UuyXQha1",
  "key23": "44dt4GD5zf8k3hUR4xHDFfxEzqbBPb9A6teiP5c7T2AY5BMXZM78EzvdqeMU4QaT1bYaY38Y18CP1Wv2D1Kf22iY",
  "key24": "3xWkbL7zKjn6c7xkJCJUJ8okRViAJA8qKWEtn9rXB2a3BycE9DkQToHJvSqgrsrT9ZsAiSMDmv9ZVWLmrMYAQGqy",
  "key25": "F11CPwfVuoiHb2CeqfEHYW3meWyoBWMJ8NCYCuvP8T3AuZRR1DmrRyh3MB8iXdDmwLfskJXkjsZTuK9t7SihyoC",
  "key26": "2fAnEmPzVediV68sP5MqbcJmFrJD12ALJG6E3XgeYq994AEM6mfSjso6r1UiEj3h1hoUfNXBrxmNnBvFugHTzLHF",
  "key27": "twB3EcL851Mi3T4ZB139fWDFb3y2tQmboSPLRaEWvFxZoNTCxknrhKfxCeG7MNCZDaDqkx4YFYm8eeHcDXm4Syh",
  "key28": "589J4NHs3h49ZfjbkJik1SdrFHGpAs7kSeuuZAvLMknsPfDtnAXJaHMHSxcnveQYU4w2z1whucBjCCXAKTLP9KV7",
  "key29": "2NmfzXiX2oX2y8CLz7gEdQHjKb7gcoMNUDbcVBtgmDkM2vX6uZp5s2wpMtw1ukwF9twbUkNXiFYeKMfUpuZ4P7d9",
  "key30": "4Gr4ahjYj2cJX9wNLM8y2rn52E5Jt66jJnGesFkRp1bcc8PKyod52rJnVqs2RFj2VVefyhaaNuJSHr5u1GbfJNkq",
  "key31": "3o53Sw1jFk1kBYvHpXgHR6kW7wVfhtNqZjGDDByroTaBgK4EyRepw2dxMBMab85iMnt7it128fpTDYpsLHgKXjcU",
  "key32": "3X9CeF55DJwwzhJ7P2ucbec5SmBwCUo7EcnrQj5n3ioZRDSKS7owsHFgfTc42kcQJv98C6tQohA9RhK37bdrNR26",
  "key33": "5n1yVUvaPoQ9K4ymfXfFnzs8z7aPRS22Sz7J9KrXZ6t8eYpfzUjfGNs3JZWdtomA9rfXsqHE44PmjwWpLLzJDdTv",
  "key34": "oRv9VodXgoMA3GPpaupZjBmVn49AW1np8RWv32diPiG5wMSJAYpbfy4fpttVZT3Q517mif6gnxe5iEKsWqfsLQ1",
  "key35": "3WYJAjW3jjUdW3PsvYjzWQFwoApvRrnC66Zx8biJtT5pq22CuUxHrhdCF8C7bE9uWQhzUyyccxE7vbxaNH5xPAWR",
  "key36": "5yrpf3QMtDdxGLVQanuCn7Eht35M2LtK6TvRZoEqyFPsJxjZx4B8rnZcbvhEXwYc3KSm28unHLEfi9Ho4CydR7y",
  "key37": "3QBMtmamec2MrvNSxiKDEfTorxUQ9i3V1ZZg2nwtmojGej26ztWTWxhX9G7HELe9dnPZUVwKg8dbFU7gzYgxsGfF",
  "key38": "575Tp4iKgijreVehuVmSa4cGV8tUiUL7VymPTPMPEsGRsfEnLbZpqvhEHnHQwLEZ1Z7tfpGDEYxkzMc4USDcjtka",
  "key39": "3F6jUiFEU78qmz5Z56oXb3MPgwE1XNojQJRmaK9qreFQaivq4kmLt4xnmDPj154qKrTWxPypBTnMFCy8jehcb7ui",
  "key40": "2psVyN71WqPo5ni1diAwCfgTttQn94NxRdzoZgQJwMTrBSxCsnAEGTnXSuv5FKNtxigVq3WAZhixgvTR2iqwFaHD",
  "key41": "2V98eTgmpiAsiczfLvwk1L6N2eQCnpABAHfSQ95vC25ACPsFxQHh2nd6NLwwZZRYbQMM2GaneHZxxhxGnrz3vpqS",
  "key42": "63DyeSCT8v8vYanVN2qGtNw8ipQX3WN21Gg6EUiWKZAGYrWtz23Cje1B5b2Bt8GuFT4KMhuWNoaNyYGq9Ca2tG5N",
  "key43": "48DFDrbngTFDAoMtsMzXRL2fMcxdsRLu4pWw5EqmFwpNppowaVupHc4uY9g3zgf6LJjVuXJTb5Ub1kqDcvmtSRB7",
  "key44": "xdzPacpX9YTJ2quJrGnf6k2VcKiUoFwoQ6DF7i97GHmZFwWEz9ekanwqZEusV2Dg8kXyLtiHt64Md6r3WzYdpso",
  "key45": "2jewPXkLFh2NiPDy2S5ZQWFSbNS9md3gUUC1HbN4uVzGHPmnJz1nisRweRTEiHeK6StY2nPh2UXcUxDnqwY4Q1sW"
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
