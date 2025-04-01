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
    "4hPWu54gYkb9EcHiSewQCMYzVCENGNyNvVBbukipy4h12ZA6J8dn6dNtcZC8tY1UtHpzLPsSxc9GsDznM4M2cE9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S7nAYZt9nub4hj4q7j6zz3FhuRoJSiCGQwEP5T8rtNjCpwp5JBQHgstP8gGpFf85NQVJ1NzednRDqd8ZUo56A7R",
  "key1": "2tVUZoD9WMBWZkdL5vFPk3BkzDdCuYH9CFvarCapgrQcpXSFtcSDhuavy43dWeANYpX4sdComn2s7DJb7HXbQjee",
  "key2": "3MRrsn1XUW9n3Bin83ftJGsDQPAWDTXowyJvisTpf9cZuvM9yN5NUTmthRMLvamVQUHYb7kGoxXXTxdi3xHiEeCd",
  "key3": "267EjKHgozySxct9nx2sThnPbKWDetLiZvrTR9ggNDo1fBZxXsBMYA467hZWBNpHnmrSQ1BCSCmquvrEuaAf8oW2",
  "key4": "4WnpzMLSgpBDtqpBAwrV8rwFdhNiNY63DW1zB1E8HbjtryAmgFPgFbFg5A8VsXBQnrK8nsKoAgmAj5TJk4M8km4p",
  "key5": "3BRvqskpuTRamZPtTfcBFkfURcUM5YY8H5ngookJAWNubAhD7B8QpNALgWj8kgdonX9QGxmZSFvRdY9gbXooNzVC",
  "key6": "3cQocGgvJEQ4sfaeBcgn2GkAFpwTnHVrdpLYUomJJUkZu4JTT87ezSnizPzFYwSHQubg32G8ukdqG98jJo8xDiTx",
  "key7": "5XTqdsSrJqn2ePSJGU9YnS9yzsswg2c16kcGo8XxxywXTic123kEcyxbgdz83Z1aNkvja1BzijCHNzYVN3kjeyFW",
  "key8": "xTvVgU8Jgv2Hr1w2NQjaTpgvuVJ9hGTWworkpotf4mPruCoGFnJhSa5tNMWUSWPQLYsf9ntvQ4XrXR5bFw7RyU2",
  "key9": "4MqcZh2ckCZNYVxqSrZMoRDQGxYmq7y4WgJZEtFfP1SoTtfYE4dHmZyRYiWkSMg4wRXu2yLSVZ9WjqY7iqjDNWbT",
  "key10": "2kWBjJpNR4oo1GP7aeYey8ELjytyk6h3DiKcGaS2B4dfAwT9Ns3m82saXPGzYVY2apM3FiBrCMuKiQ3jrxguT4Qx",
  "key11": "5te7LdTuhaMMY29xFj6oxY33KEgg4nYAnEobdyP4UTn3c8vCN29qUkQjDiRwfsEauYkyFQwHUqLmNEbGi3LTU5YW",
  "key12": "vVEouSD2iDCdk3ng7BZyMb4bDt6aHYmuTeFbwXTp77PEaHo7Avde8LFT4JLbHt4sfFtWHVEtQ8ypEamQBawUrtJ",
  "key13": "3ytAQC7bGdrYtt4yy5gHGf8Gaej1qLsSyonqHQCjpncopwjKBDQGm6vKr9nZwSMqy2wnakhRzhRjCYRie3QByqhM",
  "key14": "3Fosn3xeSycMYk1eX9QiiUmG5BR5jCM8C394fbxeNDdoX4NeU7YZriMPnVGHDjvBdSc68i9v9UQHFPqSQdEwRFLN",
  "key15": "5rsGWn2k91Ep5EUZhBR6Kpkt9HYdRRFH8dBDLDN8gMy83hMUWCB3HxVQF1TwdQx6kkhfVETjWjACdn6PhfnQxf3e",
  "key16": "QvbCCek6hRAbMTJrh4LngvejNrR2BDzamJ5Now7rXWwDvpngmfTy6sfvtr5CgAPRqzX5GieUp6P9ZRmTZgoB5LE",
  "key17": "3Cuks1QYvmHKfeU6ECi8xWswcyjREoEB9TcDHvFJspFS7owUgT7RoUuJg53KoarbvYoQXjzeutKPFexDB4Ktb3sN",
  "key18": "4Szq3ThohHTzvsCuZCV9CwDhkinV8p1Zoj5mh5wzShg42bvnsU4VBB1nyyLMq7CxFzN8sZvNzKP6YWDQPBUE9sBw",
  "key19": "4byMjT7oMiTFZi6hKxd7suko77v1RD7vLCxSUSWCkuvKiiz7JqS9hLQtKzvHJmUv3bCxz8NUeEje7VdXahgdhthD",
  "key20": "52DfFKDtDKb6Jbdqaarm6aRJKyEA9M1jfJDSnVEDzLhBWsY83e2FH52CXyr9Ez8DADnT5Ei8PLZbkJFeJLsooMuT",
  "key21": "2rQqN7w5c6BvFSYUgv9cHjLGYPc7mCd6C5F9f2o6sjVaZ8RUU79REJSePMp6bFUBhgw7SkZFBYYBz7QyvQcC5vt3",
  "key22": "2NrDJYGuuZA1wG3ZrHtNXQM913W53DBDU5aLY7Bb9bqdbe3sW7fNAW8cLNo55PkKhnnYdjwK5Pdd729RoHSFwC48",
  "key23": "Z7EWZVP56c9ykQ15Nd9KZeYFE8imYL6Nm5TYUMDmb6fu1FdnaHHNjfLgzZr7vf3uFE4FDcXdDXpEbZjMoXdsyBc",
  "key24": "5Nv4mdx1YoQRw3tgwPRVCBP9hjiEZ4kFWFgsN29JLLBRNHFVKNRXtcL7NRps1dbmYQdB9TPkTPVvzbGZyQcM6wEi",
  "key25": "4KFWv7kdWkHnJeLXV2z9rTvR2k5VAXTyJsWq9jAVnncqmJ2SpchkMAHmkwnznU87ggztgf3vUKooGgmD9E3FTbwb",
  "key26": "3rMy1bJjZwapGJHUP64HMsmWEH9ecAHY9pK2AY5SSMDgu9aFjQbCyRkBMu9r31KKRyi7Uaen2TGnA1rpSMLb1wxh",
  "key27": "4rZMavTs5Ec1S9c69VChT9odXQC8AXUsYhax8J26MtWL9HV2bwQkUGTgz8khhy72ZWjEJBA1GsBdrX2edPQ7Hczy",
  "key28": "49u3mgEsEVp244P8KYAkK7gCiyrLyte3E2dKcE4hvSGYG1ud7ZbtAHjyJqge6FmeVCZFFYCq26g7KYLSMmFEuBHA",
  "key29": "vxrSzJdtFBzqVfis7SaKCtc2mbDg8CcrfXnDAj1bXLkK4HmoLTTW7RVdjTA42fDHuJ3Q1vfeV5ZysT3d2HCqHbL",
  "key30": "4foW8JyCGJsi3wsVEW1Zh6B9RqpvyMbEHAh6CqhMGh2BTJUebj4okP83RRkuJVa4qarVmgiF8k4uSv1b3N4WLNPg",
  "key31": "5wL3xFBUZUy2w7wqPvJWrrCBckotDKS81UjZo3LR2AqZaUE3ynz2sW4hUFX6fEE9iWu9x54pQwNA9HcFSXTbkv2X",
  "key32": "YAsGTcXPnTJKWSYp6Pix7T8LeA1MTmGBvnpCPttBke4RCZPV3nc3w9LNzuFCVNuzVwA38V6RnsfibVQXsmqsDMg",
  "key33": "5sDiVvc9hN5jmnTEMQpkUPERQWT8jgGv7ZomNzbrMJVFHAUeMsv5zcAn9QfAQPKtVYA7q6psGZU4SKjdrjB4znSn"
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
