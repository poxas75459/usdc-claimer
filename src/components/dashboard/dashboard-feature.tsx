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
    "5YFRHe9pmkxdQhkCFXo1uz7bAYwVqPsDGZq86iwFiX9A5dz5nMzGFvVv4GrhUbRr4bC4hFvev3RfoG5CREWHg3vK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z2WXKVaMZVLYdqHBFNeZjNFC2df9ipntToD4j4TtZGRBNZqvWkMHSEkzwWjZbCR4JnSA7XeKetkFuxSRBBfUAzj",
  "key1": "5eo5XABJckfg992Eo5U2qtcW7ouoeFSRqDMSsWf35ekXCNEyqzbm93d8iwrukVqqqgehoco8kgo81H6zPBDQ19ym",
  "key2": "4FgXJQRQUEsANYZyJWeg9iKnqawrerG8rrsoaKaBgRZX9axkWn66k3Ai7Vu62zNDnsETuGGKhWw1jMD4PjVY9EHc",
  "key3": "2jw4agQ6BRAp9yoSPqWkjztxXnTWbF85bpesy2W4ffCjxBGirEfAcTXWo18HKPGmSoE91hvemQmvUyJwpBLX8eLo",
  "key4": "4Tot6fUBCAsTCUGPhwvUGiXSErkegycXgLtF8p2t2pf2itbpDxKfA2Ec4zAn4p1Gjk1bY5MPKAqUfLbJFC572hcd",
  "key5": "3cEdcL41EHBbhF6CR6MWMEszQYukvGkYkLV7aRbzfnogs7gwfHYwQQTyZeEP2DnSZLYsbH4mRBFtNeHhwASbTmV6",
  "key6": "2UxAZCmYY5EeXTgg61vN17TancrVNCkfXw8PQQFAj62sVyLifFrVjcHh7URTxjqLzKQeDnzJbmfRShx7ZSrwKsSp",
  "key7": "8SPPGqqSCC6ZTCpvkuuzYDXmJJ1tUU1nUBvwXEKSMq5qvptHC7dJ3hKr8izvVaiJyP6v6tvKcdrTn2bFxBKDvEv",
  "key8": "4A1S7RG5Qd9sxDip3BrPiZPje4Sr6mx5A6Wx9LqbgsVNtGaeNEuk156RqQjTEsRWMJVjSFKuhCyrPjJTQqoq8RYi",
  "key9": "wrJaw5C3nfuJF9zYFqFZQtX61jzuTKa7M8Fd2RBfF6jVdHaPpAvbXsTGJMKNbZRLWSRypmWqccj1B5tM4yNLEbu",
  "key10": "NiMvhVQJ7zR1G8HWF1fshuufMchvEbVTgCuZDMnipPkWfqqLPcFo9Y7ri1ryA8MriDKxwyk7YjCAEMFZkrTeUXT",
  "key11": "b9M8NGF3xSMAyvCZVFMYKcrsHs9MHDezDWWWtMMW7HNvsCy2KPnssGGuBWWj4ebkFctKBYftpkipHAwLr6Gss6v",
  "key12": "2zwRzhkRRnd4NnQdwxErjd339b8ZkcBsqmuqRVDfEUdnHddyoEZLtE762C5XNXM9qhNDoj4kSJS2YGth6i33SdfB",
  "key13": "66HvbXzNoaYuMGUk91rNVmiWGUF86N5gvGXmacbVCaYshexpoY8bECgvS3WpXDZ4twg2YmnhVFnuY3Y6RSyuPDFq",
  "key14": "3B6SnrfkZ9B37w6MKPPCnENn5HgPRuTtwGiYTgu8xnKV3nCeyJnFjEZjG22YBxaEEx9Gi4vxP8GNig4UMEPK87UH",
  "key15": "5bXsQdxYLmv3mnGoCKQxp5caZY3UWV7A8gwGzCJWUu3myW69xJLmewHmWtTjymio5rFStMRdfyWEK4CR9pCPGp2t",
  "key16": "5CLvZHfWfE16wB3cGiZ1FuS4T9YRyLM8AkrpvYjg136giXJAKhn9NeiogdEETRMaFiuRyeKEkKCG1rUWPTo5G1hs",
  "key17": "4N1W215DZ7n6nzD7H7tasjWwVvZrSnpjHa4AYrrajWpk9YQfzUaFd6dekGS7wetjmyyKEJmCd9UF1wu8wzHHm55n",
  "key18": "4fY3oSFVztGJkRvQiWsc6SdoWcxkVXVfeggTM49jddSMfDd4BFjxUUXo8uCYtD9yP5GtBKVkmFzwEbYhhNfVmqDC",
  "key19": "3qyLk7nJvA5PyzS7gUK6MK9FVzapDMo7hXWCDfEUfdqE6U7jZ1pL7nVgX6kvLunLCCHuASv9YKH3JDy7aScmBhW5",
  "key20": "4cdVe8mAxexiVjYExnGvnKW1eg48bohtUZgWygw48HC9yEM1ZnwN4Bie1baUZtznGRvvo4bFJaaCYwynih2mQcmx",
  "key21": "21rtRiRAwDUzctMSW3xuuXbHBbJA6K4H44tMqhxE9WEqQCWtC8mrF9tKurK24FmFHAjM1A45R1VXZVWwKRV5JQ95",
  "key22": "rdUwKxWLDSyW9BPjLTtuRhtAUDjLARZunkatVqUm3fUNEW6Ct3kUUtNsv5kcX2j8pw3CaKgLWbD4v8v3Ni2uUtk",
  "key23": "1MY5mvJaqaLZqtxT4ae9T8SvTnavc7EiKRBNK7R4zSuhcvaBVBYj1QQAhmyexfGy2SfJTqC8zk7boJHUyqxx6rC",
  "key24": "3vBPWdEYGTAz3A1wmLDea6Sa8Xs2zmmiLPE6qidthd9ScMimLMkMq8bXgHNXx3AUK8aet1N6czpxT91r6RbknqYS",
  "key25": "3THk89vNErMdKCeWweRtGiB1kGu7zVmCFC29ufNKeMeevMsmdgXesDemhQP7oxtqVtiRsYk2SxajYPjVs3kD5Eze",
  "key26": "36atQ1LzUoeybh2UDB2Naf3g4dtVT8aACMCFG6WUo5GBPDeDde2V3TFhPQV86JoqaCSJHyfUkRTUttiLkVftQzhb",
  "key27": "2s2WBQtm1fm44iNFcmHwrUCELXu7oB4rzpM8rUtUnTVbfUjQRBoVCGwn7j5W9U3PeiyxUDX9vChgBPeaRYi8wy24",
  "key28": "2o32nQvXkF62r5xfLM4VFw6V4r6Bupj8NyKwcZCpFiBmrgEc6VZghaRiRhFedfgH2ZbPJv2WipV4WK73cBz7wYtU",
  "key29": "GGbETzNPy9i7P6LcdM5PtrPphiqwEiA7XiQe3mfRvZ4bcL13ZzrWnv7YXBpH5MZw8c98cXkBZbsApZAbiT5gMBD",
  "key30": "BdUGyKRARsX53dkJrVFLJFYQawuqhLhBky4gN4aASmQpXeSGzJp45ZhnHH51c4wFwTUYJKWXiamM7yaCx5s9uXb",
  "key31": "3BRHn2cp1BGwGijNc6GSXS37cv73HnHMBH1gseTcKTTHAc1aq4M2SDk27mRRDy5ZQ1SdTJe9gm7RnbMceyV3bZzF",
  "key32": "33K1bCwuLchboiRmwXV3vFcLEJu3GpXZYE8H7qSyBPvawNTC3n1s78EV3RaAdGRot3bVC4w12F4QXJPmiZQpr8bU",
  "key33": "3K4hJcqV17pA8HhMpg4FqEUNphRJY63sT4aeuophMp2zUGWmZKGfSzLoWnt6cFJXKusZnQ7CY4KNPTJYCzk8Gm74",
  "key34": "5CnCBv2zFskZuT6Hr8Z9YYxTdfgnbtwBdEjk5yngGuqvudyj45qX9xeqk8RLDapujG1DMcZr9sz3QJ8BYtdgw5zb",
  "key35": "3G3eejX5UdndRFJbFLkLAWBmLGm4JXJ3EEQKXZgc74wfab2ULx8wMK68gknbnK9Gqiu9o6ChFxS9R2bNPd6vAeE2",
  "key36": "2cWHr46Gu2WtHHpBajV9PdxtEsFJEiYRNjFB2d8ZVRuS7DT4J3qoEopkkNa2AFX3Qc7RmUtt67csU2Deawvt98Uq",
  "key37": "2uMw2Cn9MXb7kFAbymxwJbW6xWjT8TN2kXALAW7TYAzCF9SKZJd3QoBqPT3MSiTwN6wbfryNA63Auhmi7T42fLHb",
  "key38": "5VgoQZ18bWA69joa2j8MoJc7NwYTiXMAL45AsVohQgcHzcXBjVNbWfYiC2TJMiMCMQHPYE1kT89wh1rQk3ReWd2o",
  "key39": "2XYJiq3MrstX8yeZmvnsSR6weMrSJvaztsrPv9jYXsNAjwC19hLFzVhg2sKpQ2jvhWQixcP94RtXPRHbyTyYfzgo",
  "key40": "4QTUrzqLSxa4CidxffHycC2t148fvzSLA8BRdeVf74VJvBLbWD59zXyjKdLfjadFhrViQCeFfW3LUwcN1cmLYzWi",
  "key41": "58hNZmK7N3D7PbG7AoAJficRRhGftEeBR6pfZ8PRgzBQzFdv8ffq19bqRMbjZqJoUDGpJ4qApVTzwVuzykjpVwMp",
  "key42": "5iPtEjDtXuwbLnp7MmLZT66ytFxszRuDCZNpoNVEFUAHv5mvm2izsbrafypgCJc2h8HKUTRwfqkqGrVdwu58u6og",
  "key43": "4mXN6SqPy858kbbm1JsUKYj2DAF99UiLCKEGQu65gY8zyNnZHc2FdcwCbrYCYmy2rngmUU9hYGzaph82DBzfACYZ",
  "key44": "62gZzLz8nzyMmnrcHbvudHfN6vY9twZDRK7qaU7LaZKTMx9Myya39ABc8CDFvHqgQM14gHSzP4R4MFfnXBmnwRLe",
  "key45": "2wsAe2ruZAPF222kVPtASCzCuMnihkk1zPntBbUNYJAdGzbKjzBv8Wjc7w1iZbSdgMC3h6ZbkrMmC2xKLNFu3guA",
  "key46": "45aNFR6eVFqmGCagApiRQD6FtKf8kQyDoaXrnSX7ffxm6EJe3JtYX8teFWHVkGZpPC38fcuF5qexov3vGUA66781",
  "key47": "5dpz4tVZrzMJrbCz1a1Qo9Vu6Rrgeanja77futgomrh3wrNLfhtqfn7bXFAxxzgeiqhJ2E991HREvnKPJ1gaYLnK",
  "key48": "2Xt2cSgFKpWKP8JhgegCPbfC9zUpjEUsyzDx4ScT4MXrHC8Rjoxq8n5dRJfYUoDD5cNa9cmZdrrqjAQ7jqnufDBv",
  "key49": "2jRwuZgFNJnGLpnCkV2ojA23g3BEWRNWphKut2QsQrtectgK47REHcZe9MjMd2fjNhETKUDhS2FGRVJW1cJCK6VS"
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
