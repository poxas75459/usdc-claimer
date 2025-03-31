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
    "3GdrZ1tUQQ8TEDnow7dbG5vC6rpCPDv2LwFJFhq19Gw2SzEcRA3hPoecDejtHRr3NYRQikRosuqWv9uxc1D2XyeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rv1CSMdK3xmdkqLtDWRRLBbhdc68jSMZZ1wRjEfUqd8YmbwYKa4cHeaqSjbhACu8zRnU9CFzfYEskfmS52w3D64",
  "key1": "3wdAHBxg3GPE3W1MjkQ4VVE2R1ZaruuVQCD1FcS7UomvgTpi5U2g9UF8g1nstjycgYqhHQMFvCgGmZMq4nZRJ6vo",
  "key2": "25mEHZQ7FMcyZiKamUYZZxiyhUPcL8w5vWfZeRzZ6X77d3Kzy8j5fbacjcT69b4aSLuZC6ieyqAnb2wPgow1n7c6",
  "key3": "49owgb4GoV8gi2aKiqimL1VNK3mzQ3aEKXcv3A4pB6TQFURQRkrzyWya9ssZvFXrEqtKhe19uDmbA3h4NpFJDBK6",
  "key4": "4KfXdjqaMUyVhTuFJ1XTZbLRjKj8kjXGGwWUpde4nexVsysSX1KfPBqMXdGqD62nTsMBZsSSCHPofXAr5rdWtSZ",
  "key5": "LgbApY8m8ye9NJrRVSK6wcUjFzn8WhevnUhzTNR7PE4BCZ1JUUx7C5DvrfNCvbBafoj5nuSMjaWDSSXnaCj9ESX",
  "key6": "2NVNcM8pkqi2HGJz34mKb6r4ZDBafdwBqr3FuvKb6Yxw4zfPBrFxX5cgMtv4P2CTEJ5dRiFTCHM3KU6SbEDa1z9A",
  "key7": "5UQqsdCtJhgjST7emH57RckFq7Eefs7PrbRGnk2RzJoR9oybAC397sbj4oesqQ3Hg9R4Q8f18MchJ7RvSgWXHVMW",
  "key8": "36Ep9fkLSWLsHubN2FjfYwyVFkyZsjgTTYzPd8iGPTyYhn9gaWFp29jNFs4WkZ4buJciwpggPRTfoPeNmdX7XDPR",
  "key9": "35DjWfnBHMivVTjfgzwvXZfbExYAH8yfDwvTZarwTjisMoi1PJd2LeFgEpybXZrm7SxuR5BF1pzaYSpwqYK8APwc",
  "key10": "MYryaigFrbw7p4dGqbrQMdtnvjYYhgjoYCNJUwu4wdx5qErNHuwgkPBNPrC8rpFUua5qe98yDKRoQsNZu5AVv35",
  "key11": "7sbvzaYFwWXRDcxCa1LjkfJcqEPp91z8SEN8jth48TwB31BUeycanXgiR62figEjSy7vXSVe6BFCLuiTtfmEQ5D",
  "key12": "5psNSnYo6HKwxBhw7qzJLdbDHSNGR19osQYW2ENXnauffxcByUd59ZNTaFytPfVATXWfyZ2u7jfzzJ4yMAxJ5Vr1",
  "key13": "3b7xjZMaSAiEphjQoUsU72zeVdx1bmeFRnsmdccRkAwrR1S4HzYa5fVya3fjzJ9kJUL5378XVndSf5euaJMSnamo",
  "key14": "49MJWVVvrSUkppkQ8v2mC2dRoZXWRzpW4G4AufoPojNJ2L6vTRyhXJydehLmWdactycZjYr7B8oWkgNENYDvBHpw",
  "key15": "4g8UihzSWWzTWDyTaKnQsYYkcm3kCXDcz8pgV3U3PQotzbXm2rLfiqPHeMV295HnrZht2inbWhVMFiJerosFzU5U",
  "key16": "5N4TK5fxXrRGPwtfZ5796PsqNree1VTYQdvAEPAtpCTpSxyALQSVVyx1W39PcjuBQG9wjXkdP6iFspQNn5hxaCjc",
  "key17": "5g8SyL7HgN9z56sgcrtaww1oXcRoEXPYmrTivydmiKQ3nh3ZCrTUijR4RBWM8XzZQm22PS1Wh5PHMdNZRNFsvHho",
  "key18": "3CpND3kctpeJRzqraLppqYyZsgkCbbmbDoaEhhTVw2GNsW57F3rxx74sVkLCuGgiiqZzdxhJ5g2rGXvX2zQY6QWh",
  "key19": "57wk4ZGNCGu4stQPtee92QtJf9WxKvJHZYX8HCDPs3KpHRMUjMHdjAYTYQKbsb1uPMJdJ21fxNNPY38AjaokvjDf",
  "key20": "P3rpfSFFrkJGxfPr8UfvxkQ1oBi9exEKgyjGUC93B8qPmK1Qibg9ujUiJaWDxBfXetofqnJ1cfr5F3UroLLZ6o4",
  "key21": "53Ct9aTq1hHpYrjkNqN1uoktWfiNRQ6F691MeGYPXoSA28ydFpmEE1sFT95U65njHWZyFaPngupbRVAUuEUcS6fB",
  "key22": "3czNCNQ3TT8myTMrhiPHYR3isb7kqfww1JLuBZBSsg6d6Yxj4VCUdpVzjCRKMZgXcbed4BWgJNrLfd8ipRAFYxap",
  "key23": "5aq2tZyiPKQ5hSZkfAcgip4bSoYFTQHsRiw35AU6xJXAt18V5GddqxrtK3LSEBKae1CVJnHLRymxrMTEGbSfJfWK",
  "key24": "4JxbAu66XKQH2qNWPn5bvuAZ4V2NFrFXMBc4EE6f2ZRcjKvXE5UwU5GszYRY4QnfJ4wVx22EJA7AzXuW9HvFNq7T",
  "key25": "4VJGYevkT8cw3BFeTuVkXahVNTY5iiAMm1u5MgxEKkr4uJRrnLhJXqVgjC2mofgk4ntYSayxVbPBPnPNHQQNLL8i",
  "key26": "ZS1rzKUfyMZr15bJ8uCRg7ZijyGtQoYZkQT94cRfwB2RJmXbF7k1vSgH3NNwsQo6BF7tXLUULEXYwKyxMC5ALxi",
  "key27": "3EtbYoTYFTfQZVX6sQu785z6rBhQW6UsC8TqKBgcS917rgkQi7g8mb1oXqev9ZgfyjMWMkf2LxD4LXkiWnvLr3hW",
  "key28": "3F3dos435s2DSVsb3UJH69Dw4L2PiUVp9PEZmoB6R3QWa6huXaCBK2SFvmz2WrrWwsAiiUMdRLKbBn4jo8qEvmPd",
  "key29": "3hGo2EMwH6v4V5FummdLGYLkCdWJF7M7FfA3rgg58wRtt8CNmfEjan4mR4hz7pwrKRa3raV88TEh6QAd25zvHLi1",
  "key30": "2kW8rGvcpegvR32kKDweYnhJBBBcSrGxcikUEB93GQh4i56reMDLtzgzSUgubQcQ6GiLitkQUhjDtz4KQWjgUXLs"
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
