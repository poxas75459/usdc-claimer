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
    "3jyDcuUbRkFj9g28hWUnEzMsY7sDiQvwgHAyjcq8i4VihudtXYEHdZAjibNBEkgWf4j9LxRptxCM5j8xwBFJBqBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59isKh5AAp1ZsVMEUQXT6UFNZWD7hGN4fEi9x3G54BFRYEBG6SXLBtyN2LdrhQgao94k4cp8ATAhrQ592DaprySm",
  "key1": "2BnEaPWSqrJ9UA5K2QDVfZaQGs2aqmNrfAJkTwXNvQA8xdRxa2kPjr9qR7PDKJ889ZxX98FYG8UUEk2hnPsnvAii",
  "key2": "5Vx6km9b7eUVAJoEt6ucUJdZj5kJhuBD8V3FNwWfYnwtpNHDV2mYY4VtTdwwVThb6ERafyMJSvaXpPmwAqaX3kC1",
  "key3": "45Dwq2yRtDRjQV1WWvhwoojtUDyHCxvFWFmzERv2kNsLzEcATYcx7sPn5C7BFuHzWtaWf4M6yFVrfGF2iS5vEY28",
  "key4": "4rEu1RrZuYcSKx8FjjPGWcvnBtoKRbppTYYBFskRdBzu7HEN7btknEQuuygw8x5Gt6rzD2UscSmtUyQX2LVXjDbG",
  "key5": "YzmKJkWARSKVaEj8VyYLLAKe211pGAxGa5nUTcDv2rHYrGSxDqGxiYTsALBRJsB8aPLQGswKKe2AxexAdvEEuXx",
  "key6": "28nde9CstAEJ2Gm2izWXYVkCQocPnGFz1A9htXZ9gtmiE55WmLR7HSxcmuzqqGP44roJQ8r43RP9iphLQnoKfFHz",
  "key7": "2HbVHV2C1YmijrkQF316doC3d2SiKASTxQGdeqnXPh99Xjf4j1xwYdt7sKYFnXtEbQBgymUvDjGs5ewzSy4MhYJH",
  "key8": "BZBbHt3NPNdfhdq6F1XYXPVKhANFhjYMiWpuUQRtHabKa8CYihEZadoTmkoLRhGBHzm9GRm98DNVKCjEFF3mF1D",
  "key9": "3upLLdUeeRDarB517gLkA9LYKWw3qWEbCY8GiK4gm5amjmCcTX3eqJaEFPEU3UTydW446zCsdtv1zFqEQMyLxcZK",
  "key10": "24No7KWXY7xsEXTTexdE4g9Gru9gTusWYxzino3A1AixHicdW86o7rQLmkPMUYiie68KeR1FC3yc7fBSNDyNGidL",
  "key11": "2K7K7dC2hBK7ji2os7cfvAWEGGPKU3ncDPtfmrkRKytfYvHVyQ9UPDXQqv7D2nr2Gz4c8mmDsQjCF7Z29nkfXUv1",
  "key12": "3ZM77NbYpUYStpTEnbFL9oVBssbEjEePbWuFFL5V6gyaNYyDqmBFjQhjnrvpjdwbt9BFy7Bgjs1iqqShLQQSPy1g",
  "key13": "4xzicgh2Kqxd8Ji3cDKVCYhLgAaEnb7ki1qA8cZaWCNvZo8yHNU6NEpG8TVAfo9AE9aoogT2Eq23pb5sBU665xRX",
  "key14": "rTgMa5V1QrG9X2J5jsynmMCPivscfsaJdAmNahWirwkJh89BQFUYLjGNG8YzYeemMoKAZDhDRG67m2iQgAQHfaD",
  "key15": "3Eg6moJYM2qDfAxz7i9LJYY6o26XqrfzmSSDR7ypvQzsjgRGZNFLnKUXNo8xXft4xuZRceT6pD9KyjBuH1qARrkF",
  "key16": "2wJSLbVyAwqPpiHSdno7ws47VJ4P9ADAEAM94HM6mvv5i74MoM3jdEohg5zWYHE648Zt8D8jGECj1ZkaHKZPhkaY",
  "key17": "2FZGNRq9dvru2zjSszHnb7uAEyWdVQmK2niEGNNwqpM7tjGSB77ggG2Pb74RDj8MaG8YqJgEr3FUZ8kwea5WQtB8",
  "key18": "4X9Q9jDnuGPkT75EGSg3soYDoS4CPoasqTgYGPXqjSjvoTbtUa5iZBwvvVabbEZMxdm2fyC1Poohe5mswvUNmYVm",
  "key19": "zjd4swhvxUDgUzStTN8qBWZJkeKmxEZqfWQ4hqvUeohnD2ARFmn1edMLjj4mQ2rVG4PW6oHaBxbagMSayp1GGvj",
  "key20": "cYHLMTmPktHuKCW4rGRw5rRBW1jzxkebUpZE2VHyc4sfXhRRxBrRGvxNEArTKnjWSdW4GTFgBAVHX13d7GQZPJ4",
  "key21": "4hNWedkBBz3cZynFAPXaGJ7kSNtfCAjcBQ8h88amxsKL8SseyFvNXA3NE8eAEdWw9RvFgPMVpGv64NZJc8pxKf2x",
  "key22": "2BkkDvM9bShpw45t7dyxAkkTa3CrXTpgaviTBXe6KHKWGQdWvFA4aGxqutbrCromNrkhrQiiQvLDdkG55qkXaVvL",
  "key23": "2MzQbAxNgP83vrvjEU3YLSxqhF2iXhqs3WY8wrLGqWmWsroGg8beVzB6JYFsMRFPDNg8Dza4hqLcJDt1PsuB8h1j",
  "key24": "55ynVbKcQsX8bgXgpxFVcEjEwFsNFELD8igtP8wf8TkR7zmPVDuRfLsrjKvzp3xt3oSDgMSwhZJGa7c9VNcGLts6",
  "key25": "2h3PhqUwSsaU5jFoTKdJi9c9wD5UC8hzxNcFRcFRwf7a75K1vHp1C5ywn8BUNkymwN2WQ9iZ95nPzUnMB45SJGPQ",
  "key26": "2WsBBvWjZyogQaLtZ7TzqhMF35DgJCAwssYeTCeCmezsTTWNu3oie37L4rvoq5EBpYQeGGegkbFwBEXEnxqUUrks",
  "key27": "8QrtsgNYf7q7Q8Am9KyyR3yTqiQvcuDou5AfiENXXfJPME2h8KCBfUjUucQHd4JdbYx3xaSJMyZEoxnSaVTGkts",
  "key28": "rCrXYaNc1o7gntjULYo8KXeXfsfiAqVKhWe6Vcyp5NhpCenoafDu4aEdXV7WZ6rK1kEnF7uQeVQNqH9G11h6qQ9",
  "key29": "2Xfh72kHcw7UG1wannvrM6cVAsFyupVZghW8TWVRfYWSXwhqpwp64RJSK52X8vFcwmiWXGZiq1zCSWJKnTkCEQ2y",
  "key30": "k3gjvBekwbCL4QXMEwWMyEjKdoJeBKwfMazgifS71FQ2UvbCSp7LafrtArVQCwJxgC2KCEyxDsCJsEPgUu7NVR1",
  "key31": "2wY6ExEVQzbggaq7e2rBbPxRQ2N55S4dDM8ZMwCoVJaZTFRpK33F5MUdgn8mC95uvuxA5z6az1Gmzkms45QzVyKV",
  "key32": "5mx4iGGDMadFDtt2eNm7nKkZA8PMZRJ6SHAJx4SnNjSfztsKBtGQKcUVuVXrphL4NXssFJ6j7biDfudmpXWierpg",
  "key33": "21oxToknE38hfeYFFrs2NiRNKUW37fbp36qb6i1WEzgw13tcskaRAbpy7TbC95A9yxLjiMHvoknShcvGM4fhSuYS",
  "key34": "3w3TjV7HfJ8pnxfm6Xe2emEkiNRGckbBzj7CWMCtCAhWotkys82iKyc9F24iJHDZVKBY8WUmGCF3sFZ2onandLPG",
  "key35": "4iCEmDp1qqgEJDvQ84fdeTqzD1xS91PJwBLp3QKbGrAztNyUWUunMwVtcMnMFRqEPidrQ5BBEdz7osLmqmNQEZmF",
  "key36": "4vEJnFmfTBzyZXXecsv4XQgyBzy3Pjb6iXkrfuHrKSrc5ue4tF84ZDGHpBUbXmE4c4NnoVJtPaDUGfsMQDzBV1g5",
  "key37": "4PjoELrFGrNvDgwQTXixHkJfVVo51jd26DpMb7N8CJ6MNdJL5WwRamXasGkNaJJgiPArvRVi86m5XBbwjBmSZzkb",
  "key38": "UDAqejgLPt7kW7zmcmKNUGUZpg55PhBAWU5YsAGbe7jgj34GFPJkrN2iahjKYrmTWJbyGyL4zq4k7j1nniNGhh2",
  "key39": "2cqF9cHb6xMSEhuqv5zQ9AhowKx23reDE8zcDrz8baXoeW9CEkXtaV1pL8338wWBG3dAwvNNTPkHCJX7ufjo6FYL",
  "key40": "49sSXw1khNLJeqZwPsy6zJKxZv76bBoD5iPVfzuVXnaz4n8GPiQHsPSKnM26bE7bHziisuXrF7anm6wss9e5Fvgf",
  "key41": "4dBE323KFLbyZvTqmT4YWEYEWEvVYajqsnpiYQ3x5KFbVY1RarUXTaM43KFyRZFu2eUWZGW1kSM9up8LPmMsDhv8",
  "key42": "4NWFfwdNEByovmjgCpSFe9okWfxwMcrHWBRxwhZko3WT29UcPcBcPL9w8tcFd7jpJpHG4GttBzT4wG7uTxmopfjq"
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
