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
    "27Z858VjRULG8aL7pHnbgZ2oFrYpEpdpuNZ2J24KPaYRnKQV2faLAmgHYxdFXeYUjHaszmjE6B5qL7kQsX9zA8ta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "531PaMQc5qsAdQM6EeLgkK4L8F2zUBj6WEptZnxwMqbXrAmcPueKxH6JuKUAc6EGtF8NWUDKuN6dnVFs6JAN2ste",
  "key1": "vJ329wysXECQoQRP5tuN8LP72K1S2sENmweJGkM7vTA9ycpQcvv1KdHwahW7fHBeHs3TTLYF5mqvUZLfQvr81tr",
  "key2": "5GiCPbRfYcULgxCwq43o77CzjfBfMpYpiQu9nad4eJahcBjS452mFwJ7TjrMurswYxYiPQyoguKvTSNPNybwZPWo",
  "key3": "4KTWRA6LPGWnervXax8fX7SU7YF5ZiWJAdw5XTguVtQ1dxZ25ZEAYYQUpMgxQ4CjsRfFoo32V3vzjoEVPxwceMPS",
  "key4": "2x9n7eHsa1Tc6ZyLDFKfdLHDTVWx3Fua2DdUGSPd4ow2AxVxWNt1iPcB4ag1v6CGFyChfxJtqfA3hsStYWRvJYYq",
  "key5": "36CXXqP4UWiyLjRZWzFfdqainrA7RGytczWz69yTDqcZThE24rRBaNs17m7TeFMDkGucpHtRSZRZb4kqa5zqQFsj",
  "key6": "3C3spFumisRktMkQwwb1JsoacMDeUpSPCztEdfqiMGYVd1pu3VDGCjVyE7ckCEUcPKEJEDxyR3VbpBkX2iY1BYMD",
  "key7": "ha2Bc3Lazkj4xHuowWhkwn2ya77Y7DfxxL6Fo2acABEgxH2wijzqPSusxnUpjpdmUuF6yXuYKSYVZfST4Da1ARg",
  "key8": "5DL8bD4c3gn82nsqMUMBBDzMAq8kdyWU3qfCfjx8BpyGQWgWgcoPBavunPaNAWdAHVucRNytAJokLsfq35HHEzsA",
  "key9": "24kG3NCJxH7NNVTdA55gvsEsRw6VuiUiWQS2sadNk345Ur378EEzTFeoqBGLdB5GRrW9UpGcRbc1ASgErEkk8os8",
  "key10": "24QV2GmwSiQEQ4R6gK6bjF7XUwUE3zSUuL45rfttxd8JThFSJc2hEW9BHiniSfRJmMRZHWz9bzAmfKY5qBqixyVJ",
  "key11": "5qoXJ7wGfwC2veK7utYtrM2XXC8osZ1Xk3wipf7c8TjQSsCJMi6bcZNm6CfXH5zdQrvg7K7WTx3Ap6rJ6Rmf8k39",
  "key12": "3bQAmVd7JgVgNtkYHeNMufkmYGUNKEHNyWs5PCrZix9kbXacSTrTsv9pJ4gmHbU4Zdw75jUz6ujzixamrpVdiozy",
  "key13": "396c7k3bHoL48vkA3c1yJh7m5bH1bkRKHtkuMzK5uuRFGqEip3xr5Wr7AAAATtPf7NymUXHcmVo6UCA6PsvPP6Kb",
  "key14": "3iayWadAn2qLL4fxL1ReVdueBKJcQWz2oTcK9AEMPoWDCgpAL3tkVxTp3ShHsEEF2GbFdJhe48FAP3GaLnnfdSVq",
  "key15": "3pLRMYsitkzzQGB7hHMifsPwu1NPQxaJ7av8KPnP9ZLKXpyrUmrx5N2hWJWwWL2CDCzF7sEWERLhxmpsH1rqRYGt",
  "key16": "G3Hprr2E6VX6f8NF2oLQ7opir24pmLxmcFYMFKxbwmx9nsMomF6zG3zDJqtRLREd3Viq33FeLEws8HGipRYHCX2",
  "key17": "5hR9znyL3nTcEGmeAznhyEDevvDePHt6hYas3e5YHNG1PkNswZaPZuGEyC4K9WRZWZPtR8dJqeQb6PoN2bwbTACj",
  "key18": "4jCD8d8DQ7vtwar7YUVcoxT4gBedcqPDuXyaUBTZbKxgXX8gnQWRq7ERd1N5JkiZQ1cK6s6evj17n1U7AccaWBP3",
  "key19": "661gembuffdrnrQcSqogHrVh14drf4zJoTL6KycyZAwtWUECh2bt7Ayi39vNJBnuiy9HbU5qbieWE3hACynDjQVB",
  "key20": "DJ2fQEdmeqg4JfUKaBnCcgwyHk7HYyhDWKjAbZbREqZFexoxHHAYoWP8CCNPztr7AQN248B8PYmwuVwimP6bg7w",
  "key21": "4vsyrr6AJZHif2jNa1rJLtp5xT5TWvcgyxm6H52WTQ7LfzjyHYLxZX82dgUsD8nmjERNkMTp4t84kNhvsNVKnVNQ",
  "key22": "NHHQnGQXxuUe1ftVoPdiFLmCn1oL3W3fS1UvRVrFpyWXwcwppkrpmfTNkpUYXeJWz2vzGBMza58w8LxMpbWU8HP",
  "key23": "4Nm7YrnHfkuAefYuVKoC2GXc3UPikjVWZCTPmhxqVCcnRaLqnBxBD1Mr4hSHrbrZZudmm5fWUd6yAKi4bdyUBdL8",
  "key24": "4FopViUNiThXsEnLUXR6a6YZws6KtBMvpnjGCY28kXy4NHWyKhrWogWtBha8jpDSh6U1kPdRUNVMgMVAMVuD9nfR",
  "key25": "3E68ZJaPFk4XxM73h8Vo9neQefrwqR4N5QfQ48ENQgMpdCnAjp4KDzPswe4AcVUqcQtUp6S1UePCTRojZiXz44h4",
  "key26": "2hjnQcxaFWEQQrkuL2E2X4HCbkNEghRqT5eRU7nht5nupf4eXaU8sgw9PVZmkr361Ej96C1hRSedzy49iH2MiU2L",
  "key27": "3bXQ1nihmuQ3yZpQybMT8w4CskFw3LPqeEgwP9CHS2dHsAQqinnVjqwjs2bFBf3ukHz26ZskvWe213t5owLPcDCt",
  "key28": "3nqaG67qbnjXipnAHe6vug1x7p6CQU1VHicwvNKo6yfs9khe3U7p2s7hLwRitQNpjmbP5Nxz4MFkPReg2UDMan1Z",
  "key29": "2PxpSkbawXt713eZCtF8FcPgkWjPKBNYLFnmyy48YDv57CioKMEjiH6hu3j7Jq5xmSFXcGXtriCoCjMRuUomAyqm",
  "key30": "5b1E6aeFhdvpQBJNMbLMhNPXcquAREAQdYqzk7P6HC3fMGdmp7b61W8ecQQbbVL2xoxzFGT9qLdi5nX44QQqfM1W",
  "key31": "4jGpp5y2Ep4WNP2s6vgTx9LB3mEmdhp9B2raRdXHwK9p6AW5A1ch3rSDpWWPCiD8JkXofuWD3p8HiTiiHn5yhtb2",
  "key32": "2YaxQNZ1HnZSajwPn28j6ir1wiPt9Y3e2zhbBwq4Bv6DQ8MBpPwanbgTwbkjFyXoYhiA2HUu5verHVssSMEXjGqh",
  "key33": "2bTfxva6yeFQ2EXtQZy9snmwapmz6BAfDjj1GXymar6mkeVuL4SbCPmhtW9SB5LsCG9McwS2PDzVhwMa9Hr7GLtu",
  "key34": "33BWEsWkgJ8YF7RmtL2ueLZ2HbuaY9tQxH6MqUXfdGpEyLVA18oKZ83hCxWW8zBvwt4C8vBeayLzRb6XKbkMUf7U",
  "key35": "4CqMvD1VL1SvXKLErPR6gQAUV18AGfuCV8Bwv6BRMY1vLTyicMmLUygcFCXMDVyCQpTq63CRQo743LEAB8ekgF5v",
  "key36": "23ijU17KHDsgehQrdWATPem81USVFMv3NEcdN3naU9HgjUkf5yRLSHNLvmkTTomQFS9jRGDT4swvVizADHL8xCGF"
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
