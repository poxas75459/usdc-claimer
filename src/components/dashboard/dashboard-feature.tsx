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
    "4ixsiDaYkXQDB1qP5AoVdyghperb8BWqoZe9idzKo2tLLUCVV9CzoLTUswP7bFKT3p4cQkYHQcfWJGeNrH2g2REj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VsbF1j2obPLiTtCE43TMWFYvDdDFGiE2Sh7Mbt9z5DfMQn3fFWmY7xdLVAGpm52cNKBB9GmVxhmuA7otqAaccKu",
  "key1": "RJmsqRWq4bkESBD1NYoR28SFCKPn8fVcmzTtK4jwn4f2EdqKFkmbDmDYHJRkEa7P6KhZRKFzoaWDMmySMmSP17A",
  "key2": "4x92M2FsE5pT8sBEgQznhrUf5VckAXLxTLdkqCutmviAr4mhZ9LAmE4M3x3EFKDkueZZ6kq3dpXGvW7ztYqGCDsM",
  "key3": "5SGGfwr7kCuFiKieT7LnApCEQJxffGmhDsTZ69e9svE93MzwNsixRurzjsX1AoBhGuujAo1snkQvkHj3XMAsrEx4",
  "key4": "k8bM2q4aezViuPGikdNai93obdaWzFE5YCUMcnUkSwk3FVG5H3EjdB1VN3GTXCeTkvkpXC62YRqyadYjw3SPqXB",
  "key5": "3pUhRdj4oTsXBtLdEx1i8LzeZ6ELMrPCQQMS6nrNPEjFcBt1YhbJvMJ1Yjy3Mgofj9yfGb1qAq2YYTsuorxRor7Q",
  "key6": "5Hgsqb4rYv9tcPSwpwW3oU9ShzuX7tQMA93pLwwJ9jzXRjQnUoond5vETyuzoqDFR3T2RJ7nHg4XjbQh11abLL1E",
  "key7": "53E3TxiqFVc85kVAwoqkcjbxFKgVJ2NFyCPWMypLMYbQ9mUSmgZikxni5xfRyihYCbgkn9nQWnTfaN1VY1UbSpdq",
  "key8": "4miBkY4xqrPB7NJaqJYZz7Xh1zRybvJyNk7YP6SBxJgmH5bsDLq9W6Co5JAgnwRGuY6y4qo8zkpvHcAWX6vcYW8K",
  "key9": "4dyP39uZPjhhiKV1MTxZR923DSBov15L5awemZY6MNXUzYwQTHPPAMHCtFKe6bHf7N1MyVtMQtwcBQ1A4LvgGgyH",
  "key10": "3xMjFJnLAPQGg4SbuM5NTo8Hy2fECJy3RGmRMdaC1Tcz9F2HXDA9EEVj4ET7xcedrSqqCU356t3XR8N1eJKWACo3",
  "key11": "37L8hs1LeBLL74HM1rJXXb1PV5DNyL94iADh2mQVomxS65mxZWTJLxUwfJ4uCeMkSrihkV1opbVwkTX2SuT1nduZ",
  "key12": "qbRwiSGABiyJH13ZnESGHanvKMp2tfRfubZ4M9hVCantzWMKmALcQnHzt3rJ9zm3T8GEsQDaQreFhJ8q3r6gNjb",
  "key13": "XddxDQSpDY7tc7hagMCqxVnZeQH3yzfr91AErsbCPAXzvs2gXmnMEHts1gWMDjdkaNP5rgo4YetEGaxtEgiqP2M",
  "key14": "47j69mdSBqbsytTCXdbktY46dCmvw8fFRnJAsuNUqoTZPmKhUbWbfQf4APUVJRmPhFwNWPWGC45PeLuf4ZHcwtUr",
  "key15": "2odtfAA8Mpskgi7Y9RJU3ZvdnZzwLAnca1xJpL5LF29hxXpxtfq1wdZNXrRfbTBhGfki9Agc2nLurU3ZhboneXRi",
  "key16": "3zjfYDjZdpe5GnsYCqAHSVTGyBoZ2fp6rAsjrynoUnhfPxiBVeCLXkBcdD6masptsLBjtamBNYL9P7Zf6nbU9Bk3",
  "key17": "3P1GAabXYZfPpZSQAbdMtzB11ZQTHrSm8FekFyJ4n2DWLfVmykzaJPHmppNfPJ25mjiX6R4GtKAZe4yGw9MNjJUn",
  "key18": "5XpwbvJk5JYzwEt2e1o3b1ie6Sm6WBNQcTBczGxX6ueViUFLBXNx5xvGP9AF9uvmVjzm2eEZrwXydJWgehKWgfXm",
  "key19": "XRhZLgMm9fH8ZSPkTiayy1ZVvaPoNLANmjdSNHu2nMxcRRErgwfJr9DJxSYL3soCxBkmbqQpLjuA6kUiRfhsE5F",
  "key20": "371DRfDAUWfbprPMcisq8EsWfawixmpj56ewmLNQgR7kWnoNn5x4P7nvQ839EPDWoTDKpSvVnvf1W9SgGwmNA6Tm",
  "key21": "4dCe75bwKaREjnm8oR7kFthdmXj8r1nnoJUUPBYM5a3iR75fV7wXiWFiWFdt3qndyWzeZb4GwP877Bj1YmxptsLn",
  "key22": "563yi4ZWLfzKcCxEeEsx3YQfzLeJ1RDEHspSamHByLgp5KdPCkmf22xvTJWkiCwr32jqjWjLegpnvNbSn6aq55XE",
  "key23": "51mt67KKPCekxKtXaVT3XLc8USgXrRzes9sriaspPnmwDTKRgFipqw1RnQbbp1iExKcCchMVeESmXJQTGFkkjeZC",
  "key24": "5btWTELmyBp4yLHXqcfwxrwtY3XJddb2RYmFxCAHGJi1obMQstgGtwzY5X9V9pTRNpuLQ4XuZs7TxapsnR1TcSdQ",
  "key25": "5a85jdmwoeXoJGTrfzMDbRnXNXYViATwy13K8Zw3tnTLovS54Ajo7NfQHi1nhYqsSD6SQLrY1ysmkEZpSXG4temx",
  "key26": "3AMNNZqykd5Wz7hSR5LWk5kyWk752Y63DnS4xUQQgF8cY3FXWZJ7CJvNXcktGQNhWtJ97EX85o1invJh6gXmgyxh",
  "key27": "49juXuSsgS8n96244zCj2H9eJUF9pF1DLDhKac4UhEQ5wJFRduSMZvUnS5UcLa57f62LQzMkv9XRip6raRUQNp6h",
  "key28": "2MNQqQb6HyAZKKhqvGgmvPi8m58zFDWMhUBU9eBwKPyKovzA2TvNY1Rvqvsm4bRmJbzTHaiWTKN2cAEqbmEtWexc",
  "key29": "3PAHJhZdN2PTESLhcxwNJpfL9vQNsHdK1yhhfz5WwPbnFRCd6Jk5hAasPSj7t29bcU3qvnFsUCq8hXPF8ukpurDU",
  "key30": "2CPUiPT4gL9wM78X5x4qAJu2G4UtWVksUMAKxAcuhCbCDH1cpf4u79HNB6vHUMEB88eSBLUePQkYw7FrbDMuGn3r",
  "key31": "3HChHt8oo7ejU594WQgiiHdvEP1h65Hbp8RUwhtkgxNjYbKrQ9UHpWeV2koTL6hrS9jEpbzgGvzbF2ivYJr8Mscw",
  "key32": "43UojaTjxLt1krxbfTTJNch5yfuFTxDMHZpPbr9fm1aqNSxBfPxuQywsatfLKXRagX6b5ivvo7nKParodoikRJ45",
  "key33": "4gMCMnohXWe3wZZ7cEFNz3j9ynasJuMzEn8TfCfF2z8zdKMEGqhoHv5pE5pEAm5sphLhd5npm1BjjWz4chJv8sca",
  "key34": "5EhbkYakvzLLiGGL6HQfPjH4oSVh58bGpJo6my1toT1WDEegrFoEv9UUfN34GdUcJWBi4UY6CP2Z32Z6BkzkPCc4",
  "key35": "2ihiwbP6taREumFmWB8cknqH9hQKdHwPaVoKs9z8heiJns72TBf69qKNSELQYw872qp6udr6pH4j8xn7CwvEGjZC",
  "key36": "3LZ3zLrcwsJnKWiHSSTKFc5x8NJx3CgAR7DvtTbA82Rdsh1oe662NxWT8YCE997GCfq4XPbohWrQb5nWFfwov2b1",
  "key37": "2RUbJeF4XaTDoWaJCwaxbwsQLpHMWWPqDdVeQT3bTqCw7fi8Dgg9NeTYuZFfEVF78Tj9uDFU8Hbv5gE1oSUfborh",
  "key38": "35mao7epbp4wrUrMrb1XwbkCDNziQm3iqrBXJCxfaT7YocnMB9QEMGLMhfgMF3T61ENiHzD1vnvFC9B3PtecNmp3",
  "key39": "2GkMs8rPnRkgbvRdkTmyvR3Xi1Fm1rLdw6FDQUSLE113XX1EPN7AnfwE5zaziRq7erR9P5y94MUko293WtcSjVww",
  "key40": "3pG5XudrtuN1EvP3ErnVpaNViRMzMJBVSRuNBrkRJ9BCYDxE8ZK4mZbRz4y7Bozw6LbDBzMY7yNWcMwpYV3hmt5m",
  "key41": "315TsHz7WhWr4KFdRgD9aAszUFABwTK1FwjWnREPzWJ3jSzjLQedmi8oQWzArj3jtqKaUWdTdYNRHAkQoBPcfbhr",
  "key42": "3CCH6iVr73KMfQuQAUqLMAKnjSHSNPg9g2uDJXbwmnL6Q8maeBco94kJTSNkSs4U7LpYWGJyRUVP9EeEvF4kwFAB",
  "key43": "4Zn2zeDzoPPifToCVqJhrVdLCrn2X9wH4X5WuVxgoJooU9ZQehE246rqggeyERTwfzwnCt5DytnYKtRwmnWLfMtk",
  "key44": "5AAxYDnXmJ3ZJbyYEBT6npy7DDdk8BpDYSsKLgoQM2QAbE7brENKK21t89rpash9U3bmYXuyKpFFvQNhLDsAvY2e",
  "key45": "3VLG4yq5ZxwSu4Y2WgQ4LN2UMcBgNCkZh4FBNxaQjjivaLqgdGtHdizqeJhCjyfLW9sBm1G9gW2ygzpqw1nhEyAV",
  "key46": "4Dap5hauUXq3VsgrUbWZFf2bsp4WR4R21wxXM9RJRAanyyv9TPgWSfHdBfnigWKAaSj8kAKQQXvedagvWWZizaH3",
  "key47": "4LikZ26QTyS68f5aVpmxmoKj1LzAFbRXDRYMnLcpYw5BQLY3KKkQjTUSYH79niUTQcbdAuSii6cVT3kcF9hNU15N",
  "key48": "3wCdRK4KwJKShzZoXFsP3YG2PN7yARqWJBzivYrHeDirsbMhtpAtTptFGf41fXdaTZeduNDvXPKFhBvtw6c5MiqS"
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
