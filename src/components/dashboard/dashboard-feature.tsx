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
    "2TQz9ES1YWcRFjmbe4YahuBAdU5dUcVLMU9pFgJvNi7bDFqTgVPaKXBHbT8zrRx7SHkjbLib7hs4wPxdLLYFUpJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eEH6yNjRvWdoUwMU4WtQ1ALEF3EdY1BF1oJTUGboDEYXn71ngSXhK3QJbeWq6ZmCHibB6BDLs8yasdZtA4w79wp",
  "key1": "2fQeCRX5zpxGujo9QuL7W64QGRFBhYAToKuBTxWhxV3U6m9zb5FHJUB9mvypEcdjZ4ZedT2wVBH3ZiSviJwUkbgk",
  "key2": "5vcFKYWfhdzVkNhpY1mte2B7dZF3yFpbNjXhEiHYh5ZR8dVfJZK71p1tRbSWvzRb3WYjRKEEM3FQnVHE8ipJcs9z",
  "key3": "2TPDMngpTcQ1a6b4GY3nmTDSkM4k5SknpuLeyttyC2ZPBmx8ZkPjKbgeDETEdF2J8zEtNw16EsunfhMKHskRuiFh",
  "key4": "fHRrKog7J4MDkFQfFPwSDHZVMmCjAZa4FXXQnAGQqqtLmAruc5LSvBeRhq71tvjBAxtitfXtoYxnSUaJXTx1qSC",
  "key5": "2Smf6vdBmgiqug4yLPvPsieBPAiokjmJDJMBfoGYy9Mb6TC92TrHbVpK1q3eRxoZC88QDKjDXtdeRJCJiw8ym4M4",
  "key6": "DUjSc9DW4HFmjzRYK5CPKdrx24guHvhm4bosH96VPUdyr2bu5wKFDrP8n27hMaz8hMB47Q6G3esAjwtrE1hmD5s",
  "key7": "2pqzGf9j5vr9HTpBMTZNBXPk88rwHGMso5aXUJqLMKBeif9qY5KhiFjNyxJgZLeZUoXQz4AHng5JTbisqxQBWfeB",
  "key8": "5qnjVBxYrkuass8XY2f6X9MWRG6Z3r7SK9NTYVrvXz2tFVbiGZnYkUGW2Muqd5deAUocwzcu6igDLndRy7vMd1sY",
  "key9": "2Ka8Tmo8w77fc6Rxfvng3xQx93DjqUb1As3Hp1iLpy2KqefsvZczzF4gSJRdStVCubYkxh8UDvFyhy8r57B1UV53",
  "key10": "4nMD8FuqJAaJGcvwVHTQnmR4ZBkfSxvMUBQvFCvamTRgBtsPWKEid7fcYRP2LmCEE7bM5LbTLUNtDhfbwepT793F",
  "key11": "4CQprd439SC1EH1muB9VxuYhF37yLgFf9Mq9ZWxSBZQUwdf3PJkcMdsXbwNvpbVwSKKzzByYUsJaRLpd3sFDxCZG",
  "key12": "2yDrSkgN91zjxCzdez6oM2GMo5iVUpNDW6DUC4ewM1dFqx1MEcy7nE653zqbhFoGZrGRZBZrEYVymSuViYeZyeHc",
  "key13": "5FgxxbLZ4W88WfAMnMmJsxFAFEEyqPYGNhq5bLtqAxyKoPU4vAX1DE82x7LvKtCdfSBkRyNnZCvEvZmbf36cesEq",
  "key14": "5cmbMhWLSW2FZbwGZKoQu53dzVQfLYi6MfpQhh2SHNxsRetWCMsXA54f6rF9thJYjf4BoqvS9yevtR7qWHrjHr6e",
  "key15": "5ZUJTGZcFU8Rphv9EdqerCenyQQGkJhp3tyP1ERN264pjUuePCMFYhimksRiJhXrkvs56ierje2EpMoPsrNHyUmw",
  "key16": "4hxa94Gbk7uPaLB9YkNkR8T5afCMGjEG9vL2xH8LXFR33KpCniYC13K27k8oDKytnnpBNumkyk1WdkL78hrx7CAz",
  "key17": "3kJuZqmfmhmqsuwdSN3fd4dn69b24LUqRX8KuEjBtZktGYh82fPop4JtoDJFVMAVa4QgPXPAov5HyTz2QDeBEkrV",
  "key18": "3pn8jnkue11WycPCirfEeoGwFQZ3dnY8LoM11jtRi6zJ5EravfzHoDUh2UmkWgFj9WY3yKx4RE4rgMLNnLZyL3Fu",
  "key19": "Yrt1sFPDPuXdPn7BbzhfNXKnpEV1eJJqcsyy2rsKYEC7mPxXukMyio7eN7awZV8fhAz88T4UJB6sMGgPWf79apF",
  "key20": "Ey9Dn8SRn2YcXRjJtyxCb59iUyC1secdENacFaJS5uMwQDU3FBeDXyKGKVP85nftggoRoM3Z8cF3kHxpBmgQH4K",
  "key21": "2PkE9Yo9KXxUg5xwjEfhMjR9H391N2jJe5p4CfPraorVhvX62mhcjTTnGDvuXTJhNwW6Wtj1dYvtXYN4mUTUJrfn",
  "key22": "3KppKgSWbH3W5tkx6bhDFtJvpqqZT4EzHqg1jLAhGocghBdS8Jkr5y3XmQ2J3Quu1Z7ijWM8kKhkUVbmvvrrJMzt",
  "key23": "22up2nEAk5JnF6k7SJNdG6gqxWyRnSDBqz1GmCunrLhdcZKbDVKjzSeXCqaqvwfWFMdvmMVt5CVQrxhY7DsGo181",
  "key24": "34yQMz8EEePtHm5xnbseVaGy8F7BiE4fBFjUKJTqz7AuTLxX1LaZSh3RjZTSKaF3PVthUe5tGCm5w2MmigPqBr3Z",
  "key25": "2yM2DK1D6weqN3Je97uTRMnq9tCcs7mn8osoEtGDriVdU5TsQ8JyaTuUqPqHitxQ5s2T5WUfcwjHaQ5H3W8eerUp",
  "key26": "5oaxpXubVZiYGqStbMZz87XpBFjuDw1ABmDbjuhySdK2TweJMEPK5eyyWey54gpigJvWAX9uw3VFU2n8pQUJ1buP",
  "key27": "5kLubT9DbaeMb467keuvoFTmdT3P9gbmFF73E4SVaFhJimDAKsg86kXdLx8ryGSv8mp5ca2mDxkt6QGzDhbo5yZy",
  "key28": "2v6v2YsLYDWT1KtH6RQD5aU8nw3Dx4zSe9JSwDi8EYqkUouwnJ3KGWRfvjqioBcSLoXpYtZKQkddPsQGNnCpHTd8",
  "key29": "38nxMEXfc2VCkmsvShLVbB6fzPPKDeByxLqtu6n97qwwaTZho66ieh2VZs5BKefFTdheMGaJEB2PPokprmX5gMQS",
  "key30": "3nXxXXyYgd3Rj9g7fv25xsyJbSHddqR7wDeNkMXwJG8Q64h5s14y7MoDBpk5Zgo2L5dz5PNjU81TggNSWT574mTC",
  "key31": "Gqi7mgv6xPkTSvTq5Wge2ZVbJn1sK1X9A9mbKtciW856GuRSzSipZqQWHfspy6if6Peu2zUTvLsiTax2ohSuY4a",
  "key32": "4XDr2hGQFtc2FKjisSesLBFnovUD6yrsFX13J7gaYrw1MLxGSaiAE3YGoe5GPxGPpRzmmcfCC1gUQtxMnrDv1vYv",
  "key33": "4wns6FBMK2qujyWtyDYu66p5uLWGmMwHvDuvgQrju9qaWVqroSCYkt837Tcs9dirzi9LXnWdagnGHbGVSczZrpw",
  "key34": "3NJd3FVf6gPzA184P4ZKwdzs1TPAsB1pDRm4FWifMqxDxLrWmqeSpQY482BiLhWFmznJiBn1tbQEFXHPn5668LB8",
  "key35": "2b5gjx5kmMF42Emn3LcRZbuMt5U155fgfjttnHcXamHem6tGYWcFJXN2zZqTUQCanGPRzPA3CjwbrFJMGXpU5NcK",
  "key36": "z3RaHEVNwwyyWGJe7RXPF8RPHGoNwAigEfQP2LtmrX8AM4oo554njSdbEscs4TUJR8kK9NZzVDvvVkx6Z7D2kAH"
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
