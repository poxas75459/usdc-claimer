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
    "3Emr9Y4RVrFFwYwniRLet1mN1FhLzbjMNR1BY9gpUt619M8eTSgffGm8BARHWfimz9J2N15eBepyKNegtsdcHsLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y2cdVN2RbS7K6HRUZeTwNLhkpzTr5ciJZDMSzJrJ3n4CyB4uuZdwt3eE4Tr1fenfivZYkTvEEkhEHTA7MtFijQg",
  "key1": "48vPsYWd3tudaDFtKBcfiq7xMPSFFFJtGaR7h5Dy5DVKsxLeduAMgrFPePMJwifsoWWWtG1QcZuZXfC7StVHceLr",
  "key2": "4norSjcM95JY1Uz7cmhyWap9KRhs52ybycFy9fAhN51siMFjd9ZuVsDmJNavezYvSYMQPogjximPMGaXaANPQKq6",
  "key3": "s19nQuy8ETJe3Lr6ARTSsuf74A4H6jqK8NGrcBcR9jvCkRVHSQbp4WWqTcVJPAcWkrwuhXeBRxTa5pYyhLUVm6n",
  "key4": "2cy8uGzuZkLWNCejXK7nCHj1u297sVCFyTYhjszkrJ5ZZr2kJzEX8XhtKNWd3U3CZyFCrPBakbVds9z2ytTRUcEB",
  "key5": "2qcBR3tKeimPx5Yt2focYQLpFewaarZZDaU8C6dTfUmaR7GhERom7tgor7g2Wu5ya16muyo8vXFt47b2jx4cgvhw",
  "key6": "4i9WMhWXt85Fj1nwqVF8GGamQ3o7rB8152tfDPAvZ1Lwaz5d1566wo6RUeijFgzN6i4H5BfUwQ5daSdJCmHm7PGS",
  "key7": "uxSbuyfCDLrp6YBuuezF42wg5mjVNpdkm9TFkCe79BUti1otEiSFwzajjoZUb6XLtarjscYMa6XacAAh4ob7gJL",
  "key8": "5p5NFfASuASwcsrgXzheEYS2hq8w5qveBUQpzKNtG7M1f3GTFk68GLLffbCY29LWQRFt6VaLb44Wp7KXAJS4AkzL",
  "key9": "3CgJCNdfm1hb87UYTQoTirESvF3rJ8cVMsb6ccUr7g6p9Ztbs5uTdPw2rycu9jZLjt2emnCq8coVuicsUGoCooum",
  "key10": "4yU9ocXzFKukoqi6C5gFy92F3epmAHaZfRTrvnKGnkMmeMSgph6D24htdKockdzUATCTdVDQqrSsDjHZRrUL1DnK",
  "key11": "2DmegHbeoNB7DXzxaHQ4j8FPXTKXV5KSh3sawG8yyV4k2phQsxoWzCRE83GCaPz7VE5gz9GozJLZ7ZDD2ri1tLPu",
  "key12": "3NNmM6AqZkZQgsLX831YgBHFPgHbKErXXeBUyJyxbxFbUdBv6mix3q4mrci78JBdKKWY2Sw9YsZRthKw35Q5itCT",
  "key13": "5m21JTskxyBZkkLb2UvKHxtDpkFFV9SkMYAweroegbKKJWLDyGUgEMh19YgpgWr1QKbrUKbXcP7pkLS17s8JLzBn",
  "key14": "Vnc1Ga5sfsoM3BiKmfurRArkBvf8iwGz45qYdGWjcgqoxCGMyQEqAZCMrnBDVKUr3u7QTbJjfMaeKiW2AVc5vVx",
  "key15": "Bu4MMowgpUfXqSsHVe4K7xpw8U1YDXRh3BoDCjxRxrpGtaRyv1nsRW8o9dPNCfYTsFnKQDr77kUioKbCMRqE5me",
  "key16": "2cG9NQcxgJELMR3B7hqMEGK19hkr52B62mTg87LEEr8Wi5dtWSgSQEw6WJYcKsVrwTw9MQb4ATaTPPw5UsddJL6d",
  "key17": "2q7QFrihwJ3E8qfbVJihLXo17zDVvbrTgiM1hcycgmqEokFUCzVWcLcqhz34UPPn7W1Ju1UdXmT2UK57RQVNP5yz",
  "key18": "2YNSa7usjaTCdLp8LXEgq6yVEBQoqe1HUmS4jF36XyFGE3kDDhaQYYtUceWShLogfA32WQ8GPkGv9Px5SgfLhTNT",
  "key19": "4zejjW4dDyx95uf6FN1Gi2DyPriSrhTpUEQtXWfnzSYbxfTcaUu9T5PF9kS3K2syeXa18szdx7C7jok2wy7hr9eK",
  "key20": "4aQTHffSNqv3e8knmwgpnzV5ndBf6jFh48tLLXjUUZJ4yqgtQf1FRzEN5u5FFu6MKbFngH1C3hnyvggDFUTTF1S9",
  "key21": "5vsX772zQCbTTXLdsfoCTs5N8QgaMR11mvCUa8fKVUZzHVXNg8hgkYSKKwNbuQj3WRyLomQDNyqRMWR89rzy9CRg",
  "key22": "2kjRFnYq8TXbGGjtf6ZMsbV2Hd3ed4Ptfqne894yZjcYi9ZP8oc9RR5B5cdzduTnLtLLZZP3ozt8jtyXYacPezB8",
  "key23": "5FkfLqkMNpCV59ERKjjwgzqTH1FzxwjvmFe9MY3LNJsadGRoGoiKuR2GySX9B7yhnCRYgpVSLpKktqKaWXQfEJux",
  "key24": "MQM2KeL9CqbXYsduZQLzGELC6LBRvUsfsL8d2mArFecYFRe5mmDbSXYMPZAxFkoG5dH9yxedeBp2be1AsSPSqPk",
  "key25": "38WzMMHrKxBik7EWeAh11GNTgjr3xyX7dyicceDi1FVv3iPpEZXMtxrf3fNnQ6EE886FXtKNLSjLXxPQ1rd8Unb7",
  "key26": "oGk2BEBkUxNLv8rhKWjghsnQz26bTKEikdHjULp4Hm2F3WFL7RJGkQE6pNjZq7WD1mvxBBWxyCtuUu27R9KPeZ7",
  "key27": "4njQaAKzdyYyNU7U2bEfVAwkjmVbGutcfLh1bH4mvhsaMqhCS6t61V9NfHWywsq3hFGdNj83Q7dGeMAbZMHMSdGu",
  "key28": "4TBtNVMnX6jXJWPAT8QVbqp4kYrfnWuDv2oJakKfA2wp71V9Eq843s18qEwh5kpWb1pxRgKrDZXx5WMQMpe3f3rY",
  "key29": "4zsBnGa2jA3A9xG2SXNLCPRuFjPjtABSS19Mra6qruzJNamZYi4Nik9HF2K5aMGrpuTKws6J6BmwHBj98tvMPFvR",
  "key30": "KpqQuZwBqsUNMZMEBDfaNFibJrPDv5NeXemqF2rrfmJJVV9A4Bc8AWaethJhA3Pv5A2iSk5AFzu6PP5Z3rNWZJf",
  "key31": "2eo1xbHVXoNMcqCt4CoX9kmgeVy8uU3L7wMz6t7TWpVn2vWzEN6Z1dVMQTFbzEM2QrzzMPFdLdxBv4hNcw4uPnhh",
  "key32": "33YshUHyFoocpRdLAivuhmxVJszUEKfCdCr1gJVY9S4dqhUrhDAWjsUr7vKVhW5JRAiVMTB7dkozY6XFUPmRXy1s",
  "key33": "4FMAyzHvHSfCRJZK4GcfqtUcWxzLPiC3zH5phEHuaK1gV3cBPMQjWeQSnnyTi1hBwMicskgyDeJE8Nzsod4goobV",
  "key34": "2DuiChNdmof2aWm6RM1p98uSCAeLg2FrobAyLQChQ7sabYzG97waJNF2FXqYaQv26mXkuN4Z5VVGRG6WdWu1FkbW",
  "key35": "cc8s6UUdNDXZgAusBdvV3qJmzQ2FZZb657GfzeDZigK3dMg2XucAnyovGyd6SysxX8Hww3Emct23mQe5r4UuZEp",
  "key36": "5KghoKXsYVBu8d6V8nmjtfHok5vZgrVswqAMLzjPW1Lsff684XcaU1e7cPSQhfZBahvy3G3qQDqYHeJAZ3kfFrFw",
  "key37": "66zbKoaVZbeUFBbStvsuJfEqLykAwDBn5GzxSvDCPYvyaGv2q5xCDyHQ4eV3XUBAwrNRBa8iBxt87F4ehUkrkhho",
  "key38": "5cyWuZuuWx1tsyybVJ6sSzWR1PZk42hEsrutwv3dNAjhJEpgkxDARN4mbuPC5oDkZrfeQMGNg9RVf4jX3q2URA3R",
  "key39": "5hnN6p3ZeunofNFBLeUgr58HZLkukybaMpeMTrGvsn1qzJLhoMKu5uZkX1qfHbGXXd6D3wzYwqY13ZLts5Eg45uh",
  "key40": "2ChrJyWPpQ5SN4t9sW3Nj2aiwxth9wwmPVevcfgVi9t4Zbjk16DcAZqdtS6edn16dik2KAFFhXriZsUf6jFA26ye",
  "key41": "2XVtSSc6dYi9DbJiLsFfT5R8xA1TSqKzRcPqyiWj7xZ7K6Eqn6agX1Xnz3Lmr9xsp7gfLEWo1JXhmp67g3XMqtnP"
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
