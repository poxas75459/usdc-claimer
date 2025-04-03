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
    "hR8oQNeVC6G1ECy9JFQQtmibGDjRuAttegpPqF9XisMh6LEbxDT1BXkzBLHuE32oHPh7rPqfhfpZ4NtoESZLujK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jNWpLWdcMQb4uFEt9CxiVELYH1DQDpizPkZVhcXKQgRngGGNKaZZ9PJgqC6hRYgejrgKeavBBsPYt4KNSry2Ygc",
  "key1": "5d5FtxrXkN5EenqJbyxir9ycR6NnMvs4PsoYdjd8B6gJ7eufeyaCdnT1b3SWszh54jMByPk1RPPXxFZqTUYJMvBz",
  "key2": "3Pzjd8dCQXAHueeZaiVPdftEAx3qjmpcEXmCEbaK7CQ6PyCEiFEUFEk8vP2vpCQCqK9yGBvgZRanr5zXJhG5GDzg",
  "key3": "42D1Z1YW3MMZQfzqCEU4Ajq7oGhD9qg3XWPpQC3y2EQrfA6fa42ALTcYq2xnwPf3AXa8pGnAKAsLitHSyEeKxCUo",
  "key4": "4L2JdhX2ZTysE9vb37ERDUvGNJeUYJdaybrddwHS1Focoz7Hgawy2duVk5wH2bLPPKMtFT4k5D3ATwLa7QW2Z395",
  "key5": "5NKxGx3ACZS4KdGfoqNKhfdFWJueBK4ezvneTe9BbmjqBCxzerCjpydQx9gByX52H2vw2yXTdU1BMsWBHsa2thW3",
  "key6": "wRf4DU4tYbqDhSDnSDFFwoAKpZBZbvcU9CkWJqpbbgpsYz1hxmgqoG27XSr45XnVabpDxgtazLZ8vgq4Eyi6TcS",
  "key7": "51TdBNBvQ8zgukKqdTBD7aqhmErEs9b8KrqPQAzNHGPcHdGbA9xYJQNYGrtoiNCRW5YiTKiBdUb4wHiF7DCUvEGX",
  "key8": "38rFYvTQGTEKWHS38beW9yZs2vvgpWp1i6i7PGK3K7SYnuuVj7mTk16SwkjZyve6fX6MDJvCKeAijxMztgsrc5By",
  "key9": "P1JMpXVA6WAjQJ3usQvtaMfyTsrwVdre4v5maXZpDvMArGnUYu7qmR8n3hP7N2TNxbnrw4y1PHB7rudFMLTcb5d",
  "key10": "3Eq74SPbjJe1LQcwrujBY2hoN1NV9SQqAtb5rhFaqQryjRaeZ2SQB4sBP1NpsrkiszSRQRjEx7JFit2CX3toHei9",
  "key11": "5MybErnXNBGxdoudZhcivK8aodQ9w9nk62NrV7cX9x3f9c1Yym9FRsUkw8uWfXgTq1taq6aXSB3sYfQki9grPuEX",
  "key12": "3G71BPHW3cnctnZCDJAzdkaf1kLLMyRtdzGwRYwm94pvV8ELH7iJqRh9KSGEtuu4UN3ij5TCtMD9tyRg2mpFT9Hp",
  "key13": "5WSxZ9VxcM5z3BmPBNvAkqpEgEb4EYk61nd1Cm4qZNVULMD5BxQTewr85naFcttwt7DeD1FbCPMaBs7CdRzQ46jt",
  "key14": "58qdtNBiaohh7njNqEyoyK14aJrmrpkqQGy9qmZy2KQxkKtCFQ6Q4ngvmybchBnG4tvqyvtK1Aehu9pwffaMwhxA",
  "key15": "52eb9w1VdoKrXykXG1t8oC3L4W5j4HqDtZMzLjuVGr585S6S6KW8WtcLUeXRoSMGuvGYpBvMpz8D5eEY5oKgm9hW",
  "key16": "3HFppaTRQXRzfvhjdTP8yDfjHVaWy1baFYscCBFWWiqXMSbJFxft5GNrMzixy8sJjyiQ2dQJtNxvmrEptxxLouJc",
  "key17": "3EnfbrhAZ79tpBpTXQT9qNbS1psDXhxwCtypgMrm2guhpsp7mFY2Cp7axJ4gMxEy9Z1utg4GVzJn9aQsGkhAEf8g",
  "key18": "wc8zgLDM2RAYAPP2iNqkKMKMo6vdbgj1FHUzZHH8dqmtscN1APdxVe3is7ZpC7bFtiDJzyYNjnEvFDuZhRXUuG1",
  "key19": "2QXXC6soKfBkENfUMf9haJFy4bd7sYWbneKWMo54P4Gteb2q4LvEWyp5SJiXAY2CXk5naYLiS4BmJUddN3qL15or",
  "key20": "2nmNvvEb4D66MD6AnTQTDD7sgQhsqWXQ3ce9bYzqfs4QAySdxzcvDfoHyXXy4sCegLh9ycFaA7t8sFoeYkryRzP",
  "key21": "2hqEVSMcMkStMQpXVo162zwhWK3mwaeEitgBAGYd6aRtEqzr3KU9oHjrABWKHNEbMWjASax1hTN7cfUgyjUwPWAQ",
  "key22": "5x5DKk9nGJqWhBEwmP5ehxpsLRPjmTdRBmYCTNAWBfRDUSWZJ4DBTjoWyMpht7CeRQCBMZN53nEXVkdnPGccjFFt",
  "key23": "y2wHvkWPWZQCrZhXhUVhjTKZ27gV6t2sSvAdeNyr38hec3SF523k9n67mXqbc1LmR4uhKemuMfF3A6wyVuiPYFq",
  "key24": "4wcCDqwvJWGgPPeForJcNS4SVY1fCk2QW9oCtQtNJqshWovky9HAtKFcxTrxQ4GJpte2pn5a4fRkgZHzEaj1Vtnb",
  "key25": "45SgkzJQYBsLmq6NbokyTMKUhMF8EZ187xPcuPoexB6wH8t3UeMaFvG8RCwFsEijx38FvPK9U25c95XKW4kfepGH",
  "key26": "2w5LGjiiYksBUL1pDabF3nmkmCcjoGc7L6rhMrNpodFoKYrP8K3vLgcRVhzzybcK1fkExiyZjWZzHB8yAQ2yw2di",
  "key27": "62VKqyXjWF9WviDdJZZCtUicRxccWntFncfweX6H3Trn5YRiq1ZjKkPPougDvAYYmyaRDhyUhWVtJj4jBQx4qwpH",
  "key28": "4EhEiSG9UN6bzQtBYMw1djFpGCiLABnxMRCcaSMAXFHfM6zHok2yDdvjLNwPu5DeNmpd5cHN76A7hWeSTYWW5X2b",
  "key29": "3xDPwaL7JL681hPGrPG8cFTbfuHc4uMBmbrPjQB9wCCd3bfquo7nCtruqaQ8Anf1EEjym8Seo2XUwaXzY13sYtDb",
  "key30": "5Hm1cuqbz71WYrm4n5HVYoSjp1DfpxADJ4ccKvuv3Nx5HWeC7afWDbyCS7N9doMEJYipRu1cGzmNmsR8ig3Es8GE",
  "key31": "3jJs5kuPxE8Y6whpw4i8EnAcsDnf3dWHNssXuPrptx4qXj3tfPTMeVgqqru52TRjajm87G3rL3tLV1EjqpUXsfGU",
  "key32": "2sCTb5AnzP8BuzNnadQuuX2d54WwtfvgCiATHpXnQEmXFKsSfzsX4oX5vPB7jWay6JSrdcWr88fqvSAQxRGcohjd",
  "key33": "ijpnhVJrEXD8rdZyaGTEKTxSuuWeKdanAhmhkkNmbz2qNRQo7gHQbgLUj7av1thfYnTdgE7R4EbxnqQpTDQckdb",
  "key34": "3weXhvhWEUGEzihYtriuydnXtaiVRrQKtTiJM8Cw9yFfB5DhH5KVmujpym4PzfPRCdrM856hRGcwKsfudg3y1YX4",
  "key35": "5Pw2evD1gtnkw3djKB8RztiznfbuFnbcwFYJm8znXitMoLWq8CCe9SfkRFC6aNJn9FsGNuYfr4PEN3i7AASgkn6h",
  "key36": "465w1ctEoJbWUCYwRk2PCp6thxgCtw81fcdJcrCXUgWTYfYjH9PWMYEH9WFTZpnX6oGfQ2QveJa8bciyqtK6bdRC",
  "key37": "2XJ2dK9V4MQxSFuU56SKcipK49UJFSf7fRkt4VoD5HTXU6kMCPCgQub4UKHVSMZgVw5sUNYmAauEjDUfig4jR3tg",
  "key38": "2W1cgT5YwecoX8nrKBtvMdnvvXSfKf1CmNy4YXueEqjnU7xuHPTXRmzy4zFK9PyN5BkJUBpJRmC121hVBbX5XifL",
  "key39": "5z9eSFD2HNccErHHcYMa5J7barpACn9ESH1oh7kZYpzXhLvoczjqH7AzCLyYArT9QWsm95XdLnNH2tWKDWeXR4pM",
  "key40": "4sXNqJwbjQw1JfmksAqsbQ1g2N5wLHS5HCXaf6RMywR7MCkWMKts6p1mSNHChmjynM78D15Z1YRT1YARcViNTTaV",
  "key41": "CYLEdSeYBerhoDGmW4mYmWa4PKwzA5WrkqWwBHD4d3N5giaatwwKCkJ97e1Dda3t9MZbnftSbCoGYgXBrRMah6r",
  "key42": "4qt3XekX1AymxSUpKn59eiVACWDoxgYVVN62gcRmB9PVXcpxk8spY6r4my85qvZDze5pDNMPKVehkcAbXDcwcSsf",
  "key43": "2ePUDSv7Mm2sxk6pkACescTe97Z1jcHMV6xvzQXouDUBQdiWf2HZ6R3C3S9H14azP6M5G1sVnEiRHi8t68eaukYx",
  "key44": "5ou3i4gzXRB8sEK3yYrxa3u9z9k3ibERZnaPVtuMwXidtYHhWKtG5s4DFEXdazUofJTGmdWN9sEq7vXwwZKZYmu5"
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
