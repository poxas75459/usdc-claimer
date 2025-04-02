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
    "2wG2NBXTz2Y3nim1MAgw1HKtzJqMsrWyZyhNw5sAvgWPkJxGMskgbkS9CmmCmA8wKYjZ1zybzbGmdPEEbtFe34z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HkzZjx6auE1PMAttiq5bLf98jQyicXSGRoPR66bpZvgye1LzCKUn1ijCrBfC8rCy54nLcaNmiVTtkuxN3wBAKgi",
  "key1": "4pe4tGWgNPqCzZxyo2KkNY2qPsRNxJWzwk5gJeqCjhZoo6wYrBn6bT2NZARbzDTKvRP8FsW7TCmbYrWfWjXkDpKD",
  "key2": "4CSg5CyiNgCDSASAMVT9LzT5gosr4E5X9ua7yhagUqEuSrDWY1xiEjtkwbuNDozXrjZ4XxdN7Qs1vqxyaHaZAsth",
  "key3": "3CnNN7y4WXU6Zra9qgm7ecF3z1wmVQEvaP8E5iP1fNUkiy3zv6VaM7kX3DUZuydkKHTj3AXLJoRPqVwTpPNtUXc6",
  "key4": "5gjuzRSJkDby1qT2oAvnDxHMy2DdqzLS8WMedfjB5vLbYYVdJj7Cw4cxuXEdCNgJZK7U1yEGnFMYncsjE8v9afpr",
  "key5": "RU6BCuVchWbRQ1ZsECKh9R4vjiETFTAYw6UteeiNc6RLMC1GBERssvSKgXUjJcHvdEjiLqzuyqpz7AtmzBh5kAy",
  "key6": "2cQM6cATwJqFad46Ruf7k99WXuGLJgTLnsqzNG5KT2kzapxVkkT7Q73q1d5GZGofsMPGrycNG9RUo2kL74hC7kkA",
  "key7": "2iUvCnZuD71Bzg2VAjbgEHXZkywjZbiypi2wFbZ3LcqYyTmSWjQtrRu7tzNEenLimbH94EtN35UobMok2ciK3Vxw",
  "key8": "55HPnkH5cz6g4C7NRCRiqnkqgSA554H9sSAWp8iX68qdnAUEiShXkXbDgkPxVvzVcNb6GMRoZstXEATmVvkgUFq2",
  "key9": "2hkpWXi6LmTVdDaYwkXWS4VoYiiA5TzVYWQrWRAD3f1qxpYBAjD1Ba2b25Mf9xdrEBaRiMGMDemwKWxVANzGxkbw",
  "key10": "4cmmL4V7sm9Fv8BGsJmXLpWdQppqm6VKBx41GFrxNMVJ9YxAmCD5kMEzp4er4AgNzXCvoqq6z1temTMUtL14AfnQ",
  "key11": "5jjL9uT2JwtYUEFKmmZ12SFP1CRvnF3F5AbgjxkzteYzi7drD6VqApSTYAdjBZZS3Qkx6N2NyMji3vLxkPNLe4Ma",
  "key12": "5woT6JqcquyYbUbnwwkMz64U4RvYisywpzKTxHx5yjELGzsyPwxxmJZCAyHomszvKZNXW1odnC5TFqeR8Gh6VNbi",
  "key13": "h7btJX5C2NJoptR5B8hJH8GKa1zemXe3mYkarw8kZbwi2xHrU33bARJHKREyAAvQo5dsJzP4m6DHRZScrRpR6tp",
  "key14": "4s53f26fht6bTwmVxjhaSDyZAsKbzySJ2JaafTP8zsUYbmeUCVJhpRFQfRA8BoteELDdWc3rybxxnXUuKgZGHzgG",
  "key15": "2iyTMw926sw63Lv9eGqZeitpTXZj2fuMnrvt9pd5wqCA4PYmZ43vVBzb4ndyG37pPRpRS97vPHCyrnVBWVrPyoqQ",
  "key16": "5TS6S4g4tRzePgLQLtdVqd7fmE6BVoJupSv3Gt9Eh7qkcZaJSKvbCa2KUcsfQ6KPhvqQAXtCtw7qfL4gtiizjaS8",
  "key17": "3DreKs2HoCdDF3GPs5AUmUcuyAnDwGBaYi7ax9TdsovbFHCjmL7ZUY8B8rx4QwNPWNkHidTKL4a8u1hEvMJf1yqQ",
  "key18": "5ZCVAZ2n7vsXFnvWiD1P8sySeGUypg3J3Lziz5zsR2rvaEKW3x7DWPzkntxSZdHMH1oeQxfSLCmhdd2z8QRWy2Am",
  "key19": "2t7GgwSXCvBrEWwd4YuzJtsvcY3VU4zTRfzPq9HMdvBhvAjqSU4iLrKB5sDQcjPpDTkPc96ghyaoCxF4WjUSHfrW",
  "key20": "4WKPLYJTo13h62HphCa7PXBAeVWAJFcvqYG7pH6xnr7BfrgqVVcjcw5xLnRtrRYyzHepVmFneHYgiR9FkbSFennj",
  "key21": "3SmFsM8GUK75EwV7N7xrDL7MLp97pX8JedJSMk8Qmy2P1dLENjTHbQs9zLnVAWKHm6wU6u84phngVxdqzYwG3K4w",
  "key22": "2Y7JbtMzxJqzczVKrohHeCYVyWVgPDdJuUVZhZx87cwoxha7BZ71UoAsCX6aYEzo6i1viWsyGef7D1Dx1eebV4xN",
  "key23": "SEkyEgw8n1515KMYUC6J1aU7ogBQ8xoLsgbPNBWS6jF4wAf3Q9tNkTJA9NccBZige9XJp7grKDAD9kmc6654PAV",
  "key24": "4fTpamL2MQ86VVQKSB8BqrnbWJHB4p9b1gfPRCgdNtTUSNySw6LQBm4rCozq48bi4NahYwYu6BQmYWPH69EtVPsJ",
  "key25": "3wWXAZZiCfPEULviRYwnrgTNKEt52wS9Qa4kGCPbNnn3gtwhxBWTSKgjWWKhp66z3QroJ6qcurUv4ndTJBkFwPRQ",
  "key26": "4H9XJCLyndJrPbEidiLLQiuAybvJuCuQyL7dRSQc57Bcb4bRLjYdyYNXhkxG8dCLCiWGsgTBwzw4ptbXEgJ3V5Yk",
  "key27": "iU9Z9VGk6wec8trABS9ymBxG6FjURg7ogn6mEWimvFsnxSzHTg3zGUYK1Wpnmo2joXd2Ta6HWsLm9NfghkBsMFN",
  "key28": "p3GhLw7jgrfebWv2aYmNZ67uk3BGw8YytGFa8psuxRyKyLTLgKDByxozyFfobyF69zCqF8BLdjzwWVFpMvfkGFn",
  "key29": "63zcCUeJefyqttcpv49WTeDNbnNHZzuuecxx6WH228nZMLdDzsxVGod6Qo47V4o2btDjwsHSjLiXVV2qJD97etAA",
  "key30": "5Cd3aQVXEWFDnw8duiDWFTvKiCG3pTN5ESx5z591tdCV2Ch6rxGwTdsBtZ8AWGSEH3wxto16LEYMXENcN5hK6V6F",
  "key31": "3kKaJfqu5vixNpSfuteWnWEM1dxZXtj6sSNKMdFNn2hXwkWTxTZpXfvbTCZh587nyrg7Uq5T21J155TRFyZ1AtyQ",
  "key32": "4jsHC5NF6HwXJBNPfxnqnycid9c8RU748ESYicQ9DEJzLNVv8YNuSYC73MAFZTTW8UB5fK7L56xnmbQsyRzLyfrN",
  "key33": "2w3aUNPz1Jnck7KFhhiS14ymEikVkjgHoDGujGpHFQ2rP1PesPEMK89bSg1DtS8Tnmhf3bBbmFoMgveF7WJaWCdo",
  "key34": "3fGvvaTrfkYpbvP71wX6wpM3tJtRh641BWkhv9YgdYNA6skbtNAeSwcaocoeS4yydga8W8SSC9jUDyMVpgqmJPks",
  "key35": "34fgPVowiioSqbbnvMboNzHZ5J94ebF4dLdTzRLXUdLgC7mV9snEjEBhPnoiKEKPKB19rW9qJcuEMme6wFB2htw4",
  "key36": "2wLHsvPPZ291BXr81eH8jLrvqKfVKy5gxDbWduTa5DxXheHStTkyGV2H9a2HyXKvw5HUokRnZNpEzyEo4wEdTt4d",
  "key37": "21rX8ke8kRr591C39XGmUd9T6nFcrCw7WwL365VKTBhx8fAYsMZjWLs8CoSpWXj5JUTuyA6ufKCt1DSvdXUbzDpq",
  "key38": "6vUWHQo5tDoDFvGn7EoHR7eVgeyGuhuMKgdLS81Q7TvGo584AXAoiejA23L16HceuDfuVSA7avXHhvpKxhtUkVp",
  "key39": "3uU1gN9NkyLEBt6oRgDdG6waVtTKNa6sN8jaAjYVmoh5J55FGYBFurTdrUfEgB8ehA65fxAuPEy95eHDm7oJhFuU",
  "key40": "4kKJMeBskKz5ZrpwWmWgdzkZEtbF2kmJuapFdC8EASwxMU5LJYW4VzPFopRHJjZPZVs9oSmwYxWPL4uajy2Xj8oq",
  "key41": "2fSHL9GhtF4zwmojbX9xKY6asdv5CBRHGZsAzTKvZqEQWWFMB2HwkB3Y38dkZ87aJjFyyU4b29gdPpPy8Cbkd2TZ",
  "key42": "387J96EMXvrLFVfg9sACD3jPo7yyHxhRAdorWHHCfdLHVHoS5k3sDaPCnN62TiksPQoA3EfjHpmbSi9nLuhzfbK8",
  "key43": "4dwKryxg4gCHPi3YPVNvNVsXsd9FMG95Nr9MmeDVXcBfHMXgFLWyHFsAHofEEsZpr4Rb9SpWUxPgXT9cQadpcjqo",
  "key44": "3Q27fYUuKnHdChemqHXyNScXTGoZBEEBi35HtqZWhXnwv7cgTFqQvvaztVR2E1emMBRs8NVLcKH4DtrQ8PztNosc",
  "key45": "5mxMkDsoScyofZUAix2CjPqT2jcgvDzNxFpfSWi3jiMWZvuLfCg4YUbSSSgo1x6Dub92FmRpcjTTxno5pLPjrvgc"
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
