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
    "3FmKYjkXqDgxRxzA9H87mDtvW1uqwzwCRErwvrEUHUPmZm26KxGiVRgaQZj6FZR7DLAiBpwkeN6mf5v4NBiZn7CH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U4CsVis7KZKjtE98Qq62RYsJpf6AdHwvrbP55cEJLhVEPnYW82xcQtRdyx3j4hQVR3nLMPncxdU4CD4kRq2VsML",
  "key1": "58jgGUqujrLew67ridG2JrMntTaSnYYUmyXgvp44k9TDJicmRdLuserBeH5cH3gGiHeHKnXXe5EmKVGeKTKDHedH",
  "key2": "3iCJSGRMcoWjMVyqbemNLfgY8ovVSwrCnrniCVx7ow2eqm5wd9vyNTPysbw9iWyZrXKJAsdTYwgp2tyjTipfCEuU",
  "key3": "4zUkMMZK3xcFQHfg5QmKEpoMy69eH4FxiK9DPYMsbcbPdKTeJ8ft6e4WNdyTdgFn8fQYndgcyS5RnFJyUcZD3NqU",
  "key4": "3TCfKZzZ6gyNYkt8DYvTeaAdrbZqA2tFeMCrgikpYG5pSrWWF7kvkaVjDckiZjn2CczmmMpQ8WKYtSDZZEMb7h5G",
  "key5": "2bBLE1Ex8yXnc58qjbVYBwtauQi8nJsYQstAHGGn1qHk54nBp5McikSYFbxgncfZKpSWZrmvnxPtuXvjhrN4d2oG",
  "key6": "C5DyXHGhuFq6qrQSZu1PCnXca2SFnpzebd8QEPBDTbn8tMsnjSuNdLDRrGptY4MyEAEv5K2R8pnfSrjmpw1Lw6f",
  "key7": "2J2UyDWEDSrf68M5kfc5dT6qVKB7QPdyr7eJqTXanSmDuCxtP2YcxjUdWYTDinq9XLaBj4hzq9xLfe2AVA2o6Zhd",
  "key8": "4bXCBkDPwMN62n7gnxNmDaLKiwqCPUR9gN7xvJAC9UtdSuJPgUHqpydzwp4b4qn81ySpYhkhBrQVWja1ijVbyZSC",
  "key9": "4Ymgq94Ej3GaetMYCgda7wyEmUoMxzYVoemyJSTryXczaM2ko6APeLocx95fwLFAgfUWAGiF6g8xTja2H69JvAbe",
  "key10": "664EFvYwyut3r9DLwc1UnVZn4zE2M6XxGjq8iv4ppehs8uRKL3QNU2uBU2jqwP7oqVQdJHc9nTkXefUjpPEdeveA",
  "key11": "3gjXPpy8YijPU2rpjy8VWBc1EiTWDsdA1dDv9M8vmVnAwnQUg8QgRqbychbTEdrsgRXiHpLzHj3o34CZGpwNbooq",
  "key12": "3ekJFcb9jDAPfYJM4ihzR4S3yU84RVRuvMPi2RVcPBRnAdDfLDS3pvcYH4DQHt7DX8RTWh5g4SiyfHHarc6BFnx3",
  "key13": "5NsWQd7eb8CBayzLnXsJjoM6UrQeC9WUenxaBdifP5Ud2CtYZhFdXzKDimbTzFP5s8hCDRdrd4xHm1pgdf8J3AsM",
  "key14": "2aRRk8tfdUy8jVLeqV5mUXtPQMvug2CoieNEbhyjQHAAskmcYSn4ZzPvbwqEkw9roESzKNZngJL5CkYrMf5EhTaM",
  "key15": "3ibZ2boMzDCoK83Wx3Z1cSEAefmwxchCRMwmz2krJdj8VoKY175uSGoy4gcZyUTRC1omtaqV3YDLow734iEB8ggY",
  "key16": "4adZQxodjAcgRJiZ8RiVsbXPmXKK7QsggywbMSUPsYSXmw2HZZYfocj8XNzjBGJZ7yifydTD1XQXZ8G7d1gF91z5",
  "key17": "3AX2dDcJgHpWBZEgwmEj5d9kNDefKyaHZeFBb1X8KqZ7SLXPrqNtNA5NbgiHYSGsuJCVHqeigwa5rAwRJZdq1u9z",
  "key18": "49CvRXQ4UaRB7wgC65zE3uzAn17V1z4Y5t9AaCyotMwQMzMtWPJNNk8XNSzkfPwokEjUW2H5LRpw81DcpnU9CbRj",
  "key19": "2EPu8onPZorwH8YrbLYVAfpZSQi7zSqQvAVpquCWL5Y1kgMnvu3ChRQAnTwwBeUw3si8QxXfPvc5Ju9iWdKdXJ8b",
  "key20": "2Qm3JVL456x7U4M4yf7x5quSvc4xf6FRsRwD2MpTir1Cj2N4AaqPkVUBWZKTJJ29QgunhW3W1hXX6XWSZpoECWS6",
  "key21": "2Tb3kFMgWFFGipQ6rieqN9tRfoaPGwggKNsh51JyE56GvKkV38cegw3RsUzjUpHzvHKAmg2d1YLiJxBBK5e4hk7Y",
  "key22": "34tPu67unNsk3p8bnvGscZvGPRLMZuRpeN2oAgU3k4Ac9LPhbvyCv2WT7rfReDqoDi6QEBfwd3q8rec4boNHkvB4",
  "key23": "25RXU8Jy1JGXCo3Szo427W1pimTo4MGb6FdomQ2GvtasnrKu9grxDHuyHtgduFvWrpKfDbj68vMSUK1Ejkizdqr5",
  "key24": "3W2gbb85HtPsK46sArNBcduhVnfpCrRDUGox8Cnti5mtEUmgLmdDwhACZiFRPTtZmLi7Vaq5Agz6SNNuBt1L2iMg",
  "key25": "gWfezX3i1dEgDHH2PedEaKdPC5Nsg5iyV7ipNHrosqCZEQSZbkmY9LqCi1JVaagSHyfZ3x8TquFMf7mzVPtt64C",
  "key26": "5BAJ4a8wr3tPoHc4RKy7TMLSo2cTGLbQXa8DM4jxGArk8th9RiZA7ujPmhBBBXazMdQ14seFMhVvBmfu6CyVbzmQ"
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
