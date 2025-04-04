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
    "58FjSKVtJiUzun6SpauTkxvtcFBxkpVXYBL2H4SZ2isFG9czE7tQLLFGdy6UZepPiiBxdbgPSp4Ce5Atc33TWUUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YeG2WFeMLnpaqAL5C3SZvpeDJmnrdspdSx9wgQ8gAoUEVFaHiwpnzztBsXHd3hnfVzY1CMU1JasrGG5oW9tXoXB",
  "key1": "2AWBZa6QBb8hdVXWqYAHMcthcSrpULbYxbVFgQJzrxjdJD7kpBn7gvEpqMiM69cNTR94haY5AcvkY2uvGyDQxgfh",
  "key2": "4qfaw5mtVUvfkB6RLMaZV9cc2JyjPUtd8gwGB1PSmjCnXFhn8g5AGPsnqSfQisY4KKgcZCypdJJ4H2UiBg73L2za",
  "key3": "2bxSFaUGsLPLJQTxw1nBzUgrT2E3CgN8Sf1C3ggYk1xBgZb2qrboejuDLaihthuEGrVAnAW64oRQrvuWtGUbVZfr",
  "key4": "3LTMvGgBxmxFpi5gdUtEod7kSopmckYGouYZqQFSxvVKEdHzubdHKqWzhELg8amqSWLb5GxfwH8FgQtbURqTSfwU",
  "key5": "2PAxJDwtFaoPGQErJ5Pbf3LgGL5Qo4VuwnAYTDTZUeQ359NsgQCYPEeTsZgrrH6Sweeo8z2MCxUg1vVyAzxjB6wu",
  "key6": "5HBg6uvhACS49EmyELxkUrnJ1xtwoeNw19vERwA8npv4udxu1ySjZbur72YM3AdqGo1xdH2FGKeQnJKBrnkmPNeN",
  "key7": "55HtyEwvHVWFxWbvZgW9P9QWxzLM3MjivBRzeqLdEfzFeqehDFpiM9xbwzFiRckFUSXBDzAkgLyqErckeqggfKCi",
  "key8": "3ALK16ZRmb22guUw9b89PRo6uRbGycd6dDXKfdEk8YrdkL7GHwux66n417dFvku77k1KuZzfnupppawLrBrqAGVr",
  "key9": "EEXdDokywRmc1TmbnpmNXsHyvDWCR1eBHEFF2qmgmNgSRJE79tfsRYaGBLqQwetAgHWe3wWeCCJfPAMUYq9uvki",
  "key10": "SksPk3bdubH1ZHCDzsX42hcjHiZDAcbxVPPwTmXhXKYkCHKzVS3omaZ8X7NRGapBR7DL89sNkWsHkqkSqTYAHbv",
  "key11": "52WJpWXkdVYif5yDAHShCxVHBABUe6tGV4Wd8uw8HkVVkgETg9F8t9P1nT9pKMUtWfPZzMuzAnKQzv5AErw3iM7G",
  "key12": "551KwGWSgtKMdjGkT8ufryyF9RkCgSHDo2QxP8FCJo5n2hQQs6E6ZEZ9Gq7zJtpJiYUee19hhAF7r3dWMehrwy4n",
  "key13": "4Fkk2Yn21nVePVLiy34nwXc4CbDTu79fqRzeN9sHZ3soFhwh7gAHJhpEKKPh2LCP39X3N9ChyfMB9Qmj8J7zrYS2",
  "key14": "55yhUios9y9jd8cLLwBYnQogxSYHwjQ3vggbuTmctB9ZaUeZLdgJr7VJMR9verP9s1kPCRrppzyEM6ZTjS7JwCz",
  "key15": "4HhGa962g2fos8vz9cB1y4HPaENN1CZjDyLThKEbb1kGzn8YiWZLi3Sg8vLZzmrFFE1eQVGw3imtB8XsqWaKFGJF",
  "key16": "15MY6EjjJDd8z7UyF1xVXfXjBqCmAocDNCxnXSMGBAW1Xq7Qp1T8Frr3qJLaUKUmMDbGYryZt7P8MUCUSFhFHxH",
  "key17": "3TiaCqE6MfhkKgsXWbFVcDaUDomCFy5tK1h7PqEBzo2AgWrJVS5oVYGnZCZ81huAQf21ftqZYJ93Ran11rBiccH5",
  "key18": "32YwQmE6fGUQG4YgcGHbwbwiozq6UPsGYzQPGLu1RWJdzgeu9aKXKX4LXeaevviJuuLEEtWTYWiKx8nfaz9ijh5A",
  "key19": "5QzYHhRf6717mEJLNbzauSZTmyWCxkSJmXJkjm1e5FK49BLWpLVw92qQ3x61GefpnGdaLqCbHy4BCgpW7EV4sb8E",
  "key20": "62BEyt4hcWeLTykmBJUm5EEMWBy8b7aHrSF1VbCBELgRrGVpw34Z4HxjGeZ5QxVoXKQBcvAsf5jowGyy6DQwa6eB",
  "key21": "2VAPYChY6RAgdcPPXXgszAYeukJ9Qyj7cUoc9WzjpSbboQfHX8secnv2weMaCLkNixuw2w3F5Sw5gmqLoAwrjnt5",
  "key22": "2yoxM3eWb96Ajpw1L2nibdYbyMNb2yGNvi7PcQuTXPANDUAUNp8bpW4AxTs42DgntBpbXC71VMmxuVikrPWWq3j",
  "key23": "g6QPTfWGY3SJ6n71FkDJHeCGXn1539VEh314J4LrGfF9uKip7xjg5d5BzTRpVsYsXUynr1ZEYvg1tokWJGPTNG1",
  "key24": "3rkZrgY67KTpZxh62URN6uDTtFtaKHonWJw6BQucpbGdPX2CCmUn3wmnyMr7taNvvwCRroCLr85A1afvkjDnYGdf",
  "key25": "5BWh7MLdnJgqb92KtVzpGWzWmHdxkPDaBdTm3y47kcdecBt6e13u1xnpYwTXyJutGfZVozvbKQYghbFW31NRNkPk",
  "key26": "BjpkWXxuwt5abEigfEkr4MZuZE7ZrN5wRVEmkiHLgpyG8pbvWCNKNoo4MhBhcQfoVScYXZaQx7kTxzwt39VVarP",
  "key27": "71JgnuxwbXpvN1K15UytBiAHauJxoTcsLrB8LvzkLo6FQjfzqTro6SEDfjppPDgDxPFc5RhVFaekXvF4FuBts6k",
  "key28": "2DtZajXT36wYndGhdvW3ifcDFradEy2GwkbEaVFw6oRWYjm2foGUaGcXswwzdmSwM778q1pgcU7LmQBGVYUZCuWC",
  "key29": "3X1ztxpJSeq3MdEwiwYhJ195yf7YPtXrJXYGyijU4WtHNECtqvDiKecNEvxqAsbHZgz1hpG4kdvR88dk1nJ8D3Gp",
  "key30": "39kPpEHo3jySngaVL43SC3tzx5fTu8q8eHRV14nQkmVVYoWdCGaYWapvCkRZjntWsvE8CcCAsAE3pd7CK3FV2c5M",
  "key31": "SVXjLhyHYB3j1BEefwy17DTdwKEFAdxYCGVjcqFz26zefJLdsj1HtdsqhhqmyuBfvhgUrv2WUtYKrnj2S1h2pTQ",
  "key32": "2eqPwwGrmvWzjD1M6yBXki4o8FD9PXAfwmjRwUqfBw1As5HaaVxPUC9hoHsfqCbKccS2dsH7kEf8QnjkRkeiurp7",
  "key33": "5HGmZWfqchx1a7pNVLHSWg4224wPeowzJ1YnYRtUeneowYray1Y6EDuFigHtUTuAGDrQRZs47eve284sDZPj2pQL",
  "key34": "4QLvUPf3gp59nghXLHk5HicWyvqvHYiwttqgtLDZkmtnTEMhNw2QWqkBPhnhkccbag8SiL5eAHkdn2tP336foxPz",
  "key35": "455kigLWmjQR8N6ovrwfpCULzeZpmQSzy4EiMkBg8Wxm44cQbmq5SfrjiUdidHQtbtfJz1tBtXLNDg1sDrykjz3m",
  "key36": "55f1g2Kc6eY3z4q3N7zSBDCX3rP2Uein3qnp2fiPZDathKrpqXTkSZM4zjT5ZnPtYGkY8oxCJMHKisHKToZvSVUw"
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
