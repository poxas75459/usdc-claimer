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
    "4SxEnkeDmrSMYtqZ94MxxC1rhmsb4rcEQZHpmXqft6zMQ9m3h1mevej4pXVDBCiXwN2kKewvLXrxKY3qgixvqKd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kowMnbwmkvqRYLC1JSLvj57VvpMP1y5zgVVwCUxxHeNgm22JqVKQr6oj9eMgyLHwpmQFMvh2YsrW9zqhTJWvpAn",
  "key1": "2mSbZdkZgyj4gUeRzja3e5PB7XJkaDtF8crKc4DuCNBaCqzdGcRYAHXtxMbeYFFk9bRVMDUr5RAJCh4fUwSkZxqV",
  "key2": "4PNJgFX4cQmGQQyPfDrWW5tSpSmKXeZiWW7H8NQSyVq2NLmKNK1p6sxnApHzTMNeDEgkxMTG9eNGokW5RUg57Fv6",
  "key3": "41L7bwekJ8FA3Q5fLLsJMrVNHYLvqCqDZPvi4MHqDXqBi2c8KpkE8MhxuwrAhWZTEWYQyomm4SLjRWQdDmkNDzAT",
  "key4": "51jEyRYQ1KAMeeRP74exkSQU12nagm8FXWqkMuhVNpRv2ggRQBNRPj3XsgyhanjTjPhy8yimRmesiyNWqaQZDZDL",
  "key5": "JwVbnoBJ8EZ4tcincpSf4un9nJRpsNuoAbkc4J1pXTcYVesSapySHfMi9P2MBd2GM9whduhvJ5CJj2oaracQbmi",
  "key6": "2HAEAMTvF5E9yM8x4DhH7fUSGzVeEXnkA693NeBMzdpoUak2GpvKTY4eovhQ56sQXSckLDEMc4FafPGzvKUMEaRR",
  "key7": "3b9xWEWRjbQuZFCfbGmJ4Z12eTfeg3Z9r2SGQM8ycnGMHrcjmMWbVhE63RTNhMZPukvuCxrUFpiTM2KJmdAZZyPF",
  "key8": "3bYdiG4Tv7fZf9oB1PY4autQmT2J8Ak7Vx4BDBq1KvYy5kJpLBUMf9drYEbVQEdtVeq8bPQugESNZaLHTBFdpYmc",
  "key9": "4CCEXLVoDiB2A2sV6rxkPvqfg94qw2kJqRpTLshm3Y14Tqf8THwrreNGLhnDZj1QAhcdGFMMru9W9p9SUW48Ug5U",
  "key10": "xWyCLryiyr4AzjPXFUKMsgbsGYCxc8aeRUoJSu25DgF2r6MwDgwS8TvqgZzN97393741rigrmwPL9iBocBnWJr4",
  "key11": "Ah4MwMUYPHRi36LgFWCWPuJ7LZEUKWhgtkUUgbb3MQGfu47EmSLX5L159TReeLS9tszBi1rdtNzVW49Pvhw9r5R",
  "key12": "4MWbM3i7kEFXG4yk1oxkZjLkjsFemQWukJ9RRTVPohACoKsznQVKBvDoEyJDD5YrMi5zMNyKGBkQmZ2Asuu83EcK",
  "key13": "4ZFvFx43EjTNJzx3F2RMC1TMpXQ83FASPNnsZ18qxhzj94v5aPqBkgQUtExpmU9ic97huNGUJZ1oZkdgbQyX1Qy",
  "key14": "SNNy3vJELFwTVqcNYc6To9seAXGsxoG5GL4D3bAP7e6ngBa8SVojj1pXNZ5ztr1FHGSFLPS8cjqt9J9fQ2mS42V",
  "key15": "w7DnZnVoMEM8mW8efcXhJPFBJ9ivo5yLnMj85jUCv1xccStRk5KwZ4SQxdtuuvzkMr6sd1XyzrVtnTHp4ARBgDY",
  "key16": "4LB2ocHTT834a3eFp9SiYr6Sr4vFAB7LJdAhkZQPYsF55vWW3FbcCcUzcr7xPeCdowoepzBdEbtSe1C8fWJNFvRY",
  "key17": "4ShCa2hS7zizJ71sFAJshKXcry6yYYJTsrFFCahs4DoF1RrziCsYwxD9oYUoGjhP6jieeNUug3wKKqkXLXmCoEQ9",
  "key18": "4yVVXk9ydPoGFvqmeXNAFPW6BvKpa2TChZakQv8i4ejqbcPKCaVum3Y9PQWtRhZGYaerDn3L3xjqUbbeYTB3HCV1",
  "key19": "51o9pM6nhh1kUC55Bj5tooWUoKh1WkHYqj2Ap1hwzHwBuUvTZAE2SNL2ufSFx5nuePqiVPpx8hrijvDKv4naJW6r",
  "key20": "4uwwX36yQLJntqTBH2oBNV4dK1gieguqfxkLwmRTMTNKpSpvVRnS9nPbk3ni2f6M8Wp64BVojEV9dxUWGRiwEKpy",
  "key21": "4vQwKagaRwFcxNmS6jov6ZqAkCjiqrZUPf1XHig8XDeGVB6M4Yz9ZviF4NHsoxGwGSDUckGVAp6rnAQ3eavQHnud",
  "key22": "4gADcFwNswednJAFqZTxLKYncFUtVybccJs3qGPDQTvAHfn5W5MS6p1voL13SPvGMcbt9eNcZGefLqD9LNc6CFBy",
  "key23": "4f46zUuHssEXj1EEq3uXh49EfwfXFqkhyj5VGSc6J453s2SneeBTMX3dQtFi73MJfZvBuawF3kSo5rGC9GRE5cmW",
  "key24": "5PeHwrjhyssPvjt1MX2cNjq38rfTT8m3338Z4Gffez3TvNae2Hd3dcHcTJwTKjfnTVKksxbXXZ5151a72JPb7P5P",
  "key25": "4XMaPrb8S4aN7fhic9oMz9rnNGHjSnaFndaXdm4dpjDJoCefui9SXsJNMr2DyK5avUx1HafWDzWS9Y3LVp6gTN8C",
  "key26": "2gL1JD6DLMJnWm26a24rBkNpnq7LAL6BePnFkqug9ACWKpuQDb1FKqR1VpJwYghW4aGQGoQUuaFLHftF19zBv9JA",
  "key27": "3kHDQkUnRZTEAQVuiPjjdWnsnLGRE3bqGEsnfZWe3af6GMgoTpvqitL18UsoY2SRqwpox7kzp1Jneod8Z3yHjSxq",
  "key28": "5vHeYGsN6ttBLMaTftzAtbMr2UpsUFDNLBj7XfuJuxSmrpDZXoPNWdADBbHNX3iAzAxBFqzouNbycsiwV3WZ45YS",
  "key29": "2DKDoUibMfmy2CBTA66NEuDvhueLMZcSNkdd3G79dxkBeM84f5SL4NLFVarStfvtweb8eE5nWH7hmksi3dpkWADi"
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
