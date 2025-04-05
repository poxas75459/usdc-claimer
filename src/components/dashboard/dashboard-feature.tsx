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
    "Pe1tipUtLdjuwZVnNRBNLCotXLxd18Yh6KtvNKZ9c5qncGy96ePpEb5H9CZ1xbaC4PzjQ3b7NSG9oQerimLAYSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27tX9YSDzLUBiNbjzxuCjnwfkY96wMid4HnmVWwrS5HPxP1QewKsxQtxBCp4oCGP1zzVMBUKzqR3gya7cVNnCBjN",
  "key1": "5s2w878574dpYGfSHMjwLDDWqBP3x8sPLPiEbkVeMeU8sarbxckCw6z4oYN6WqaZy5ro2SGybbt42R6ByzRSH6m9",
  "key2": "4njuvpeAuFHzQciXQRfSL8PUkd9EVD6w9rsPAwgSxUr1CdDE4BiynCSYuTKL6V8Sk2NReqzbJywrdDTvoXo19JVq",
  "key3": "4RBGcy6C13ZnV5LhweyEsmo5LNC5mvj2j8SPA6qYwqfoEnUBXeZWaSYbz97SjZpxRHW8yofDJum4FtFL5CBmwVzw",
  "key4": "5rKvsSD4Ao3raBMHHVPXz78qKsSCD3FvLNVchd4mR11ec3QZGzKwLnXmRSKCuV3nErpNh2Hb3wGunqpjieyxTK1G",
  "key5": "MSd8p3nb7sQDZDwvTEk5TPJ12t48WWUAisr4s8TRiJLkzXcizbHD63W18xngiPePdDfwsFAr8XKmjm8WHJyXyVV",
  "key6": "FyA9pv9WMZhk4kk3aS5Qb4LxYuva6n9hHkuGKW1gkNKfGzox9aEiUTggCej2SGY1Z9tX9obNRfELCjHg4g5jauH",
  "key7": "4zb5LYyLmBRUymzZERTRXmHRZS7YLKEtRzUxEAJqkKu93B5C2vEygQ3pDd96RdmAJjiC3JhGkga6dFaL9JLpyQiD",
  "key8": "5yjszcCS41mPeZDrBMAf2VGHQWbcTjsywmLv41oUpVqCDuDXa3GvKCCP9kUB34vF29w6Wt5Q7Udu44VzxekzFHne",
  "key9": "4YwEkgjv4CLsUbNbr54BxcPRj7vqK9MjUQdt53sKqGBE5BMfoufHCwfCfrAUiqSHjQnUxHUMhgGCFTLyHRgq1J6z",
  "key10": "B6vexFddhUopazJJnyCTYfd1rCVfUeFJMXoCDfx1mR5JQ1hbNaiRKQqQXEWcBLJqMekcnc3jLSA8zd5F7oudbns",
  "key11": "67kAw3zGVGXT6bDQdMjRn7hJGjN2AmAZFpgJny2jVoMYy38KtPFmv673URfPPh23T2WgWFJo5vEdVgVszxU7MTsh",
  "key12": "3nFVcKR8TwKp69zidNiSAJNo4f71dymd7udxscJULw2unwDpWyxB7ytZCqASH2juFsWSSGBRz8FmCdgKKZt928uo",
  "key13": "5UiR6SMoJv5HcYXyB61htNe8EjqREhYXXcC9ry5EUcVDHbBqsRtCYoEKZLimVTrTZzjrsnjkCD9Cw9m3c2SAgE3N",
  "key14": "4NacE8qqjGqdnVEzodhnyon5yemcxwH4AooNRSw9XAZoQBLv6xTQ3aDyAJYYsxh4GJvss4QcCPNBDbFKHpJ8pSdQ",
  "key15": "26oT5JFw16hNiFnDaNXajgnWDRfyHFtUyz35ZknJtRoJ6JbET9k1YDHySm3XWe2iaShB8iBWQxmamuoDo99e7n15",
  "key16": "ETfJ4R4brwNDRs8bjSAbm14EpcW4VoqMAhCbQfJz2Q9AjZLQsZiM9JBh5d3CL7Ld45UqiQPkhtYEizAKBMFsdDM",
  "key17": "3TFZZwePQJS8GkcVR59kcTJ3oAj7eWyVgGDNgbbcJW9Gfxr2tbn1hrcysDUArP6pfPq2MP3ehQsRziecbzz7jrMq",
  "key18": "3Ua7TDepdS2QnCvWLWvYrV6PwDRM1DEacq96s91rYh2oCSsZemh6TWAUcsdB8KEsNhTrnso6yq13pHGV6LvTtBtF",
  "key19": "v9ToKhVw7xFVynnipNKgvWTMUyVNwN1rYiBcXDhJ9zdFqDfomrx4hWekh7RNm8U2vDL5udWgjsBgQwbzSVH1qFn",
  "key20": "2YFdgBZi8SS1pDGeKru9GaCsCiUCpWqngVQ81mwa5KLVyYXHXqLmTf7bjVxpcMFvu6t3JaZVVYnxUuFeGtRowMry",
  "key21": "DF7Dbdhprhx1abih3DLutJGGtAAGws42imvoLLUd9fPZmPtKr7cD8Wtx1aeU4dCJA37XnA28rbjfLXoqZYvnPfS",
  "key22": "4NSu8rCuD74yFW4ndc8q9HXJ78M4AR9F97TSM6mdnDVCCe6YnmbZMQvDBZrUHTJMS6MwuArrTyhcHTRfCZ3wGZhA",
  "key23": "35sCADyymGhFtTiSsJgXQJeJoBUNc7yTXrVeuq2ZpgMiZuRbUp5Uqq6D1ZcFxZZFaDJvNycB6TA92suJ7dTDqbBd",
  "key24": "3WcCbGTi6NqEnjQVwCEEJc8k2tvgsS3ZTpGCsc662ZKTSretrByhp1kyBHMEoEpxPx9v5GEJQ3LPFUPWEF8w7r7x",
  "key25": "24s28ZdQbR5uSpBZwYZL1ytudropPXq7i3zjDX4mSQBC8yDvv6kq5ReM9HiHK4rzidALbULsZYZ16TpNd96uVw1v",
  "key26": "5hkiw8bGjTUqXNAeg3hc2tixirhSWb3wWt4FgS4y7qtFqm58dXcJHVjKsmnM3cvpDjCnUpxEQxTEJWGE8Cofntad",
  "key27": "t2SWKxbeWkEHWq47FYsMvZd5VJTPi2qLQvDubGr5op1nrYu1TtP3gHzdwe9SzmgDjX8pzDLt47ww4w7E3v9tw38",
  "key28": "67D3oQtjo4nCnf4ZqAUERHyX223Tfvo52eXUTNafhgmLsViMW6EdmAMfNbaZ1U15Ux1vjHU8hwPqNDxEDxEjYHEz",
  "key29": "3q7xELR5yVAvFwyB2iL5TjHmcCRXwLYukCXc9R71EmWGcsPqDF6uGtMFs8hb1TJLNA4yYtNhyewTh5cq9EY4RkF7",
  "key30": "5xLFEEStSZrrZZFNt1NWyeU4GCvom1bjPc7JgT9eLcP3rmj1SxxpaJ1kS2zA8Jq9uSiyNTkBHzpVjotSWu4PbUMw",
  "key31": "3pvEBKz9pgisWs8FLixwbLUUZBKuWAhVQsDYDy1MC7Kym7MZiDmTGDDvozKvaEqhS986u4FsD81x5gNuq8UR4U3",
  "key32": "3xag4GtAdYyfypNhX8eua9KkcgiGsVkATEMe8HN4JRpSSaEgJvN519MS6BMQ21WGiUhKoQC4nYQxSnCSEyoqFHL2"
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
