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
    "x6aAaknWr5RP789sfZ4SEng75xhB7d5ihc7vriA1dXSiexLkqbZVi22uMjvREHPYjQnY4HSkgv8Lz9t1NAiBchq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k8u4y3134Se4VHRKm5v4Ts93W99YjL7DR93nneBGqxY9dsYikgEg9eB7QGsGCowHr8WUZLCPaxfXWy1wpqpeCjZ",
  "key1": "5xkxyWgdjUijYJtw7rDrs9meHBiz8zzUKpFMX3sn9mYJsAEzos6eRvceLdCDcpippUrmnaYMpEMbaSSwLbMFPqgs",
  "key2": "2bYfFdx64C4tuhxr3QqLYQqqHGzQSCZR97yJysmuUdZHPKqHTdVzUBS4qfXvm9CdgVGyioYKs4DFUBnYjgY68qAo",
  "key3": "Pm3eVh3s9kgSexYwbm5z5mWka6voMEJdpHgoSyhd6seHjQtFA4STRZhWgjeDaJkzHasFn3ksSqf3FYbLGBkx2aw",
  "key4": "5uzWGHVrPqsyHrbDFXLAvers8qyMVS1Vat4CLS9dXhGquDfpivUgdHMYasU2gqTtCNQczddvupUXJTeprjjDzaKz",
  "key5": "4pz8o2N3STvGk6M2JaVqGT54vXSxu7jnAbbdpDQeFgRB1AnrM7yBJR2tymr7yaGfnxFLgVQNKdBpczxtrgQv49MC",
  "key6": "s7AwBvnNPXe5eCymmvhvVZEyq44Qs3LfrHeTLVN1iDMkN2AqyHfqdXxxgGUj47yK8wLX3ukcu3uQpLf52dv9qK6",
  "key7": "3qUZkeRtwWP5tNcfBNGfAdPWoTetukrXZ4yYDHbUz5JgxBRyrnzv91cHDT1VdCVivARrrEJDePHtTxZ1Lp6TXCxd",
  "key8": "7yDP15HrQgA5GeeKBEGFWa6yPDAviSb3XN926wosB7xjDmqHHJyWTWNyyE7YeJN8Qgg6LXe87BkoRAcGhHWDARX",
  "key9": "4GmQerzu83xZWre5mds45YyUNaYUf2LJsNoMhKz83bjmS9PamQf5bvtiYqUNNnjdYThqjvf4Wg557wRYWdtm9FYE",
  "key10": "51ZEEEXu97qWPDNgdiYXZhHu9wYAkKpSQPXdXsRDVA4yvHRhxbU33aBQLj69XZMiw2CSN7NHvKZ1cfGaAHj35mxs",
  "key11": "3FUeSkdHYEEaygcD2p2jCQoDuCCPLcxfNZiCduMmRvH9YSfVdUGjUejMh4EuE3gmhXmyePEX5wnncrbXtQsVE8hg",
  "key12": "3V8YRhUrwJDnVCqcQFwEkWwWvD8ii4bvcVyW5ggzC2ZySiKuTgtYcLEPA2yLLoTPAZQB1NM5wJZowY2SNskRx5w2",
  "key13": "4TnaUTfsaQzH7et6ZDkQcMB5Fd6CtfdjqAjT1awxwJHBHyTSmaqGsK8DA9176ycqf7rMAevg6EJVNH6JY1kwV5Dq",
  "key14": "5Yf94DovDTQizJcxYK1w5ewout1BWcqBQb8obeGPno16qvmUPF5SGYnhfEhhsAAG1ojoHyjMGLshKi1gqbphV3PJ",
  "key15": "4fg8PdTXcGtsZZRnXcfRU881ohKYtrLqzghjKQeBAEPez2m2seb5wg13q7KDQJnBUCR68Hf3VghAYgzF1o2ghQgy",
  "key16": "3PFwYfYuEy3kVRCKN3CcmwKFcnB5Ag4WWpygaPgJ7vsENiQSfAwLjaf2mBxyCy8FRuDLbK2Wefd2EGkRBK2oveYP",
  "key17": "24jWxhmTEauZJKtRWVYJpWsSSKZiHenK9g2uWHT9aWj3pCSnKc3FwyLyxRxhN68j9h4g781e88EGWFi3oqTZdeKa",
  "key18": "3a89E8AkBxUdBKPwbkxtyYXbim7x46cnsX8qcLQgzT7oT1yT4PgyznMKcTwjdpQcfyoYjhwfaqjbX6Bkyq2Dq4ZF",
  "key19": "4WBLHZ1zQ1Rgd1haGjU9b2wFCsNgq3oqbJYrokx3kaUCQL73mU6rRMF8pwMVcmKSdLeHHgivDjaFmR6jCC7joddi",
  "key20": "418Y5sqnmf46cCSvQ64LAQenJMDbBn2FJX2jVckdWNf63s7hV7W4aj8BewTHUjgQ3KfSNXj42eRfEnsrS2WXGoge",
  "key21": "2WwZYU55d4sa9jCWnGppzYdJbyfzNSVK53Y7yYQVNyH1HeGUxcYCYgBG6hThrzE5SU9G2g8Vm6RfVb3y6RAFYLFj",
  "key22": "mGTxsJfDmesWipLsH2ZeXiouDDgbBYK8tMfm27jkc4HiZ7a2Yca6YhdRB59gM8gbTB5LnFjXN3CkQVz1dbr6JHB",
  "key23": "HQVpNTaKUr7QWVHYKh81h2Gm41nXZwEosgbL2T2RCRsHfXQGJP4rHKKZGj2L8EBnuQJBiCiMQmDS3WvGJGj1rwL",
  "key24": "cRqVXfmdRxGoLetYbNokNhYaSMXKqkez59gy4tX5pTLEgUFGFTLrzTsyL9tjzMcszGvDnDp2ENZfvwZeYw1R8Go",
  "key25": "2qYLxW6BccqZrX3oZFT6sDwiU59pCpF4L4DvPNKp623Y3Th1QnKUB3pMaujZrASnuhq23hZtJHhqPhiEebd7GLEi",
  "key26": "2CTmwe8xV4AWUNTNaNFC67dyrCXLePydDkmxT7X9Ff3bpJC7qzLNRogzuRCDKL2sm93cfGqjquCDTceWNirNbBt9",
  "key27": "5es53DovoX6kzrjeK3BBPCYBVaikFx9VTzKWXmw9KNfz7EzP49tf6gZ3ZUCTxCDrLx1ytepHKiBWHRMbY6z2yTyS",
  "key28": "5ADUeYS6Ln13iEeTcyGDT4SdAdpR2m6WjuiigAZvy1SS3JEjuS8fzCkPRpVLCqRLYeNWnpt49p869Q8GmRpfynd9",
  "key29": "w5h3csaF6D3Zytm8JfbW75snrVSDdvBzD9StC63FjThGvBhAi5njRNC7PYCyRf4JrqYT7MBMDxcz7EYCnPQCivJ",
  "key30": "5VPeBxBdHYPNBuGKrXPccadaZwM1a1MbjFtfNkwiGHuvsLcxf23sha9LG5V6wSmX1ZvB7Fgk3NhwvsoqaV4mmwSm",
  "key31": "2onA76rRxuaDHFN5RsUGt6hVETFpevumho7gqEqSyd2QewsWSSREQQAfLsmr5odAuDswmwfAA9XF6aRaCWen6p4o",
  "key32": "48vnwh9dV3sW3R8aT7WoRNXNQ17NvsQYpMULuB63X956A7Nn3C6UcRrVq4Q1BTPdHxASwvbfUZkMGaizDLhUzWHw",
  "key33": "47SahjkuBLmZzbwfYEG8JMjyJwLTdR2bQr53ihLmsd1XfC7afQWGuNiKbiXWM715zJPHduWKS7mCHBtM83f1D7ne"
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
