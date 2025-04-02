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
    "5KDWSM3QSbmKpc6dryCNKh5U4gSrqiToodeYyyN7eoXopUnuqbteVxBs8mmbYajEysU1h2G7P9ZA1eG9pa5qqvqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nCNzVVyCboZBYFXRAT7SC8QQh7Zx9ALRd3QbW6dYxohSsHWqWT2j2KjXmDvLcTFWJoPGTZnGo9wPyKRFrtua8fp",
  "key1": "2qc8cgCgqcfDZk9zTmuMA62mQMdygqhMMqzawTbeweeXRmE9DQR6L82UJ5Hrf1zJenMb5Hfo9EgJhA4jz4hyPKEP",
  "key2": "4UVG3RdKVBruQz9LexB62QmbXC6FxN6Z6cHs8jJheDKm6y4X9S9ZApbiBh1F6e7wsjg3p881z7kwRMacZEpjWtAR",
  "key3": "5VeZaE1C3uKFpUqUn3mbjminrgRAWrbJJ4KL4YXhzVjuwZRBAiyyi6SCppbxW6deZnXYou7zHEQN8P1Lu1tsemfi",
  "key4": "5yhcdKXAHLsfTAQkyAFQWqWf53JmnKYo6ZrxHmXxKcZhyon7BiA9bV7cURuh5Nsv6GDa6BV5JQxVhNTUEWcwnxHX",
  "key5": "yBuse21LoqaZMa5tqPnwosoSEWRhNGGPhQ2ysDBnr4NVe9i94aWZSv2Pq8ZTCrxuJLJrmPfAAiQPr7VX1ABn51a",
  "key6": "2x1mfHAjS8N1q6Ts1zioZWrQijDqaFfdSJTbVMSBG2yUbPDs1SucSbz2eKNomDaFhpPbG6VmnYQ6mdCeCaa26QRu",
  "key7": "31LpY4W1wPppmUTWiF6haCoXETQhogNgSEMypqrJEt87kCkqmvoxKBwKZcDBXWVpCnotFNXGZNwFKAPTuZaKgY7E",
  "key8": "xkY3RRB4g2EnWMFmnihBi67T8YCykpFfSj1Nyfdeu5TLqqKBiHXatpw1Tv4o3iKYgYAfwohUJPFRd7t9qsz4ggP",
  "key9": "5pViYQoaDB5xFQcWDq4XmL3BEjBaFvnwRg9LB6GkForHsMYGe6DuDY2taBQ74W5F4uVb5h4McYYrENzFpMhNf54j",
  "key10": "5fQZo6cjgBCvYY9gHjjEUiUp6yC43uwry3DqSadQue38sBk6qPq42azVV2dwzhwijDAP7p5HUyY6frVmTKA1QxFs",
  "key11": "2fYvzUoQ3x3zP5UePVbRBfrdMZXqb4MwyBufiqsvmpt5uSdD1AgHGxL2GWtXBheMYkikAxYkRzKtaoBswwQqgBfA",
  "key12": "7sFUc4E6AWsTAse2o7xq7d9CSDhMLxUqm7sjErhcdXBaEFVwyYQzcaXzs8JnrqBGnnH8JMXKRcfTC3FC38A3aD6",
  "key13": "29tcGnThJu2XCYodrAG3jVdwwNXsTtvBSiXczPhrnsXCsGyqSz7BXu7AcvXJF9ctVNsKtvMtPrhUB2qMp7uEC2iq",
  "key14": "DiodtirzBTmY7z6cipAaDfqwe6dFVY7hELQ4PkMmBqk3Qqe2KQQro3VDL1BGeXuunhZnpm4yPRVrm9rQ8FxUwRk",
  "key15": "4jUuiVRWsjgmveEZWYgPTVkihNmFXnRJJusAgRdBR13MPK72grCxmRhbCVc9PftYJj57fQJgDy4mZYcamKDfafTp",
  "key16": "3szbodTpfHky49skLECHLrNHu7QP1apQ2ZqCirZSVDMFQvsnuBQySAGACyNsGG9zYt67ojLjYWqtemoh4tV3qYzG",
  "key17": "2bbaph1WbUUzUaF8W8tYh8KgSfES9oQpmMcj6FQvqQLes8KZeh9DcPQxYNCC5ganvYFe1vbF3smwJrQY1k7voWRU",
  "key18": "4NGBN239Bw37wcp5Jsi1nVSBUpnVo1wPxBgjzjFaY1shyt4fy8qH9pLJ7yW8ijA1g4RLYmLRXta1P7VRpLdq7juS",
  "key19": "62To8a8iBhqz94BHPcgwhve8SRgcm48kBCkiMgLFv4HVcyxgehxoWq9DH974nCMpFL4rudJ2NxbyRcAn3Kmfcnde",
  "key20": "67P7Nua3mhncMU7qoMVokhVJqB4HHBughswafmjyyoDb1DNQ1PhSzpA6gdk75E87AEYE9biooTgpjAQYjfQhbsM2",
  "key21": "XvTurodJHFwg13B3aBE3DbLLjkeZcvxEHAbRaiqqeqLJFGNKoD9vydeTxiYGAcZL3T1tdhh849UAcoepR9LAMEE",
  "key22": "26Lf1LmusK753WYTMKNXrttvFeVxJ4Pg3bDMTDvV5xpYXf83AXswjopNVde5D4ii2tnyXwmra4Wu3xKJVqepNT9p",
  "key23": "3PLFQbDKDao4RtyU8EefR2dKm18bYGzwXh67LqgrTjUkycSkHwqSoLS3eo9LVAJJBgpTKBSGskjqGCrhPqvS45mz",
  "key24": "2Uf91ueVpLW4N9BcDGPhKWoaqbpkZpffhefzPYvfTW8mcYZGDJf2ff83bKU28Sq3UsEPdETNwzp87cy4CPEFkZPU",
  "key25": "239wWynL9pWCX2LYBekYeFmteLcVV4c2gVmkfeECM8wzDEnbKEzFrpt7irAAaysewnr2eBy1yyAm72mntP4heu9T",
  "key26": "4B7jD57SiCahgAkEaRZzaVGrnKBwNhoxZmMZSe2Kgmai2Vz5PkCutoFkXFUT12ens856DQh5qB5LBcKfC8yBiwN4",
  "key27": "2NUrEkLHnicY1hUg8hkygYRbc1rzK6w9M4fnJHCHnzXqjXACRozp5rFRD4v2AoZgkLjtaK1ZrX6cTC6yYUWdzFb3",
  "key28": "31EyaVBrQtgfK1EeNn6D2ZB12Gxx7oHcNyBRVcKXVx86GXgP4AFjkExi9VtnQowbMZXjQsPRUZc8YQ5GNb1ygLM",
  "key29": "5Nh6MNTA5KuJjTD8FgsDrgjbji646uht5dWYHg7yAjFno9vDEAKhYhAeEqUfkk3rBdxgJCWfvvSD2Ppb8FNtzT2H",
  "key30": "5kWALE7AMieYjWtDckisfNjjB5Xu7F61p4jCnpyf8QScbqNYh1rc1UHGLojGaa6zHrYikAiXRnAJ9gUX1VFWpUxW",
  "key31": "5A72CPQdtGJPjDK748aB3igKcVAduhhwxPj3ySRfUNz9vmCM9eRq5SxkysRaGJr4mKEjCWyyCR4ytuE1Ni7VXJQK",
  "key32": "2MrfTTN9DSM6ZUbFMaa9EMHWPdtip711gzEioJSUsNzFKWGUWQQpYdDBhFcw8MkzjuWkebHuTthxdPkFTG4kTakY",
  "key33": "3SYfu6fPz3tuQNG8knb2ugYLXU4zHqxZbBhRm5R2uRyvC78myT4qk4vJyEWhQYj7wMY1VviEwxhPY7Nr2Avt2wmz",
  "key34": "4fNuoVWW77fdQM6ZC6XBKk3vsdrdHy5drHnMxGGCMPqLzv2PxGzTePBvYrZsKYaaCjj7r8hgDd6njzQ9GLWvxF6J",
  "key35": "2JS6oGJMtQf4DxhLVgBErmxVfpj2WsLKijqL8ZEv1zMf2jyxNbGaqDzg4avPef6N8dmGgKUn8b5D1MPFyfevF5a7",
  "key36": "4X6A4cLeu1Lapnp5dfa2dwhtkjV7zRwruna3ssHoR64kxjcdq391ynvtFF9sai6wvX2xihEsinocAHk9nsiu1G9o",
  "key37": "4q1ZxTRZLbykbv3QAkFxeaUyn8dcpyMygYWCBb4W4TN9rTCNod13gh4hQp3qe3HadMPKUyiuPepEgUSwNhpSZpZL",
  "key38": "5Tk3a5FTBn9XTmWnh7GqWYTZtPc5p8ZYLeCVQUjRDsYwZRqCCcAn9pjA3WHEXnyHFQZpgkDu9DfoMKjcmzqZyHBW"
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
