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
    "3A7vzW1s9HNWzWUntZVsxCfRXs2EXTg2Rp1z6qCkraxgy5cPtSMuw28J1CRyt6MUhNNBnYJvuc2mfPP1QTVBFNEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HATZwoTT4zND1Gcqe58ZSAJ1Er8egecwVP4zLv2gddS2GhexzP5CqSeomgKx68oNbSpeQhExAAjT3Tbm5aLUftH",
  "key1": "LFGUBBkE55WWPaexFtkzFqqDD5w3uLeJoSXYRAqi2sQW2L8UFFj6WEJ6J4brTVb3deFYKkmLSM1XU4uiu2oUWRo",
  "key2": "4547s2MgkYrZYeZFYHpm6YbPnXAdRCyTHFAaXADUmmRVsUTKmq88V3KtJoL7cxXL4bxwpJynafwhBbYRt7nmnyyF",
  "key3": "4HAfNNQMWmpA9zLxGoBCtNs6ejGoKPQ9a43mS2Kk64JQF597HREad7e5t4eURugK6XoWHpjkzLuxTuw5q7CsdDUm",
  "key4": "2k7ANa12Vi9gLZPp8EqrnmDVCsSzVQiefHrQafvJYLEWXZas5KwNoDiuZ5a8zSuvWV5pKHabyTDF2KoWuoy5kPLn",
  "key5": "4AksPNAtWQMui1onNJqp3p8cYbdzr9evSVYwao13DrA2WCJPEvNffRVSeDrFEeWnxdSeZSHNNYV3ZcfW3w9XYQhx",
  "key6": "FjYBrg4YmyfFvZ5riq2S7oceydgg9rHxijSGiJbgx8fGtXze4EJK8EwuQJ6GYGY8DA8cKNuCzaSsNxm6Zwqv5HG",
  "key7": "5ASU4tcb5n74a3sPZAPx28EWbkp9qZQkUXzX94o6DxMNdB8bw5DmRNDdjaPmyrhRCtWB6Yn55htzYetb9zoNDatW",
  "key8": "2GGD4tS7yAvrNY5QCpzoWMDYXvEaCGmFSXVjK2dGTggFjTK25K5dQuv17kQosSvYDKPewNXf69bKFcEaZtyR3fWf",
  "key9": "4RoixZtDXQjmqDv457Pv5HB2XnmPBEGrsFZigQCXc9ujdkpvNuFbsysoJuZK5Q9tZvmc1YMyC1vbmzEaTjMVJtbf",
  "key10": "5gPLUkSrjjEq71Jj8wW1pEdc72SJZJAxqb9MEQjQfthnoc4eT7LwNAA2b7Gic8onSUXPKHe6Zfk4kxk7EtBdjkvo",
  "key11": "3v6ukFspztiVdBLAZ4ptRapubBSUrRzAdF4CQy6dSdqEebScYrMPZFwzfw128zQR7DkxzdsgCict3zTzQjzDoLoq",
  "key12": "64PsTY64cE8yDNGfz5DTJDYR6n71Stwyg2pXeBttw7Phw8bM7QKdJ79UcB5tBrybTxKe1R7Vq9eJ9RhJp1WBpHop",
  "key13": "5umLhgdHt4xGTbzUrz7CkuH4ShS2HfpBLMtsyCYPRDkpAZKZR4VRpJcmzsbciqJ1BVxsAzEiRE85sETv7affcMQr",
  "key14": "3zSBx5XESRL2goRuXtmLkB7pztNybj5tYep5SLvEhkv4YRCF52cep4Pm8adgXZeu3wfF2U2yyMcjFXCqeaPij9X4",
  "key15": "2rDwvRrCE5SYwKy5HxdW6AjBs5We4KTe35P17quzrA3X5A6xyyk8kvBJS7KGDLUe5DFMPcSdCYa65gyqpXUA7Gp6",
  "key16": "4zqTNafgQnbFLGYdWGTox5dHZXcVvwAJrKrRwVUGS8NVN3PiCVuLi4XW2tEL1H8PakakzszdAnB2bCoX5EMK3f5D",
  "key17": "5hJhrn4d3xPq85HsJ8DRS9hrnnJt5V4N4EhLUGgM3indrbhhywoJFYii6P5tpUyiQcy1z7Jpg1fYLT3g3V8Jfoc7",
  "key18": "EFgredCwu4hP1V47ZGmVDykfn5schXwraVYVZFHV5EAXed9kSwUVGbKPEPdHzm62hCx3YHSJUTWBT3HYGdyZFhw",
  "key19": "YJbYbtC9EkY8JA6x5RnSxVsVCdbYu4h2nwpBMiDvcbVY9BmBigjbZECQLskQMMFsSZVmygmyr6ojHMjBRoXjpJ4",
  "key20": "a5r3VJzG8FunT9qJiECoQyuBAnuKW1pweN1nY1bT1JP3fESbNXnAQvm6XRKvFUGNaGgxa84VnJrTVeXvrC3J156",
  "key21": "4pKT2HED6KLkrKhw7BMxDamxHPzXG6hbXBGrBby2Gn4HdPuVkfGYZAJUiTy8kDhE23iy6cvUkjGE7yXL7hBDnRss",
  "key22": "66FJvnxtY6BtJUQQygmgXajFKagHzQ2qrQayWg4vReFPASRA4DFh8BBdsPvArT1yuK5xRHboGyaxeaFVSThVY4wc",
  "key23": "2oY5wAc5QaUm46hjoFr75rFaUq7wxZSPoCLQBvFM4VNeRZLPKvCCfiKxrPSFZHoMoL3djgTjWG5Cy8hNHHXHGdqZ",
  "key24": "HW7pLDXcQeHseVp5uB6CEEMCug6zQzQA1En76mP3NwdHiWfTSusDS5sioHT2ftWCEvwxtXnuuvsJbQMmiz3Dexe",
  "key25": "kE5JSFPB4oepeGxM5T9xxsxUMkDDQ4RLC2yVbKNzieJk3e98cNpgZVuK3NzDatBKKUdy3qDksRYCTThW7sR7bWp",
  "key26": "3eeGJ32xtkabXS62TkN5p1rar7vJfyNKVf77TCZLGxQnUpL82pA7s6C4nSjuR1QdsYeGxnCN6YHXbsKTDdZyZteg",
  "key27": "3wXG2Z3yNqbkoWrL9GgntvpFaEfHbtToqriZUGfWDF52mGX2KHhL8AhVKpEwZnvNcbgxrjMHnycowJSyXkb69McJ",
  "key28": "3W396tdN26Fyrs19BppBCeD8kZxCzA9PobE8KZQncZdLXwwgLUnAd6TQVLW3aCjUf9N2UmFgNeRhUSEiwADjzuDL",
  "key29": "2ZjPR1x9unpNMqtLacYMzj9mNEAYovXXETCjNFehcmtgxecknoTnMJh69mY6d8QzE2dPBYyxJx2uL5kpT64GBwZ7",
  "key30": "349mmzzs3d7iUA9QbtaJ4ndFWk4Sdoao64JzH3JQ8PP9cQTiDxhEcNYtUEEfeGPhFqWu3GBLFwM5MrL6RNQrcUnm",
  "key31": "38NDmZgAD79nGv6A4kgap8qATNqBpEJ9M6hvKH1mcMwVo3SfZaq1j7zCxSy9o4fMpW8ZdX4SCFHhUf5DjN6wr9aS",
  "key32": "588B2CE4ZwgX9VQ78nZKsmpUghH8PzyikgCtgkt8mEtkLtVdQrHvhQvYME5ubWFakJ8c8Ykt68hk5d78CYsFsDVK",
  "key33": "4rs374YTEMpPKVdwXADsuHxfNcpyhfZedTbpTcPWv9ktYwc7xaYt59qYw3EMmZ4sLAbdKc1Tj4zHZtRDWruUF7ez",
  "key34": "5vtMs5UraMHXFEe5HgRJJgcm8FZDTjF9Ajb3nQNtVYPLpSSyrV9Cf4MVS7FpWfNc6MCWmgM6uPnp1cMa7ga8TF75",
  "key35": "21XyMCMyyYFswtXVkmochxWE3WkAMHLRb2humquPHYaF3JBGqdk1HSEb1PppqxEyFmQHhvhsnTAQL5tsnXA2c7BS",
  "key36": "3jhaxtogxJ82Tx14iLAy4Hx2WMLP1Y1uN8ScJen1oXJBr3A7Pfmk6XkooURSduZCpGbDiUE38jPyyTNHAkrdBKw6",
  "key37": "jqx382bCZaCCj6PbXYCa2z5MofFRjGPcv7ooeqPz4kep73SsvMpm2YSVnRieUyPC67DmfPWHrtWk8YbqfxwYBCU",
  "key38": "5W3bAWF5pht652rNFtrsDvGiYd5go43poyVuoHBYsWqDJk3etgk7UZ7bpca3hsMCL3XAvF6mL6t4pZXfLbYA3toT",
  "key39": "YJCzPGP2GTufXmnuVJdxVtMh1byQ8414h46YAiJrVQsu15kNzhGA1H8oxt9j7paiNxrq1EqYToUZgcAPA4JsJgH",
  "key40": "2nhWaKEeS3Pihaj6zJECtbH8FXt6jDTGMxjQeE7xii5z18t1kcqjTRRMPUoQSL9FFgUmZggrbJzVeGKvXib4sNdj",
  "key41": "2VeNVRTwybpjSuMmnEzRGzsWeDh6Cm9Vw6HFtXgUweJrNR44vAYCv5NiNTAxVnPHnhgNgYFXQsLrSmRWm1Acr88q",
  "key42": "5t8WPhEmu8nnHxTTkARHLgdgNJETNPofKXYd7R6yKLRGHD5JzmpwSBrPhWH5vEHuYYrjRvpUs2AZueJr9Xh4jFf",
  "key43": "5dNmBTsAv3sCF26ouegNfyDtNC3hmVsUcbgvMuFs2XyuPD6jLbgj84MTjzDPNVZDDJTxrvGY5tmLoBEzSq7SF49Y",
  "key44": "4iPnx5pEamXqLTuFK9TpFeauFMbnrUa8hUVGdM1QJJhRdJNEJWfbyqAigtv9hbVHnXeZyvYbi4rDt4rTZMuob2m"
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
