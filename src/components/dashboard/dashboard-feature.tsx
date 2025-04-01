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
    "43jtdhXeJthHkUbywTqwMNHDN5C3PVg3pDgWzEhBBzmgkV8tSsDtrC5C3eg74KWEnAa4TYq5Z7nMKL8FTxgM5Jhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JV2dLhTd1mbFJfURbTtLaHH21VJKtzBKFxzyLVcixs7Wf5yuYgGwakCiZShZVfKyiyZDEDSWWiSCFyLmxnkkAsx",
  "key1": "5gLwhbF2ss2eHzNZ6Qmn6nbpXWkVCH9g633NgCwwyiVg619bLngd5x7RupVDMBNrJct8kpG1byusR1m4gAk95RRF",
  "key2": "2XLTtoueSGGYHwNoNYiA8zKoJTQxYLotDuB5888c7iRmfJ6GJqVnt5qxHrTn3RzscKBegiwgVka2wXUj4B2qbdQD",
  "key3": "24pxKekugPxmuLYDh2yZNjQ56b7g3nnkU66nzFMP7rnHVetF45AY8xL7PDL25e98xpHmPCQBA9MLFP4YAte5VGf5",
  "key4": "5TWScgpuDtuD8UDsZHYMS5JoadfpGGEa7HsAaPSkZLJt6jogDxaZWpESTpagE8BwhJzvmi2T3ULb7fCu6La4AizR",
  "key5": "3FakNsbfo6VGTi2bksdc2dotZe3drfKMCCq8kw4jRBvao6zeTRCqRBWarQR914ThFagvhRELoMn1DMi5WjaCqPTm",
  "key6": "2VRsTG5Sw1woF9PzPoFp3hddH2peSD8TTZdBDkKujtpUUuaeanTCdKxAHbwdxy2HE4TSN4oXgsE5kaEB8WkddfEm",
  "key7": "4EtM9fUX3oA12NtefoRUu6nbYsvz1CtRkDKQKuhVa4R27sjevdZiVg8phtkGNUS8rG5uZA7aGaZyvFUuRntrLeV9",
  "key8": "4HUnotg1dWMjK9rRTTYss8r6QjHNgrLd4TqrnjyJpgNVptv3fzfA9jkDF8bnQFf1UKn3wp4gmH2MaihgzQ8pEAtr",
  "key9": "4zoTYAxLdoUWzYL7fQAsjGpvVzvqL13aPX1XuEQhZqvVLckrJTH727GnCHAgLyWnxhZ6BEbbaQBD7KEUgWYuerr4",
  "key10": "2vjhjTcLbNDfmhkiQGPB82FzLtoy9nZd7wsXVUJChFZmQ4tsk6ChjPWTCn5D6aN2sARd9BsdtMyB7NL9ajPxU8PV",
  "key11": "4RHCGovyEPWkerepBZsQdgYE2DzGtwiyXFQLVX77JBzee3PfXojVFVL397ZYKy9U7E1ABqxyYVk6s15AmNbqTwPy",
  "key12": "yJpz3WDYmTzSEVo1jtxwRpXayYidZ11fyNJ6vihr9nHcRibzSN8JSEjiqKQmSuUt76waz7dvR8P8PBiC2KJfqrL",
  "key13": "4jgtJke2HVghxomUQFdBoL66okU7KKQupFMjwssQqBMJRf9BGDiokV98mfUMSSyQpEHzyt67mcTwxWvkjX5ZevSR",
  "key14": "FzCZAhzCX2eXZeZq813qNr6bQrRJnWPJCwCwYRuc9nJsGwZrxxU6uH6LKhjvFPiadk4b5mzMH2aQUHTDLWJEqmY",
  "key15": "3sZBKGThB79Y2utCyq63KxbnkPZA2tkeSapvVJRahWoYvKdr2cXVDnGhDpMkwqH5VjTMQWLWuCtmizF8zAKeXmaG",
  "key16": "45VaShC6uVvVNfagTx25Jcc1C7QRp13vxFupBXVg3dxrT534fsTfazj3DyWCn8jAP3KFeSrvZ6AomfSiCH6jy85H",
  "key17": "31Me3anvKhU67evFz5DFEMFeYBr52zgZAnwTrZRkB7tapB8USYsZ59p84TycUT9mzPFK7xeMtXE9HAZPWPHVcAVV",
  "key18": "2ntSM2eyk3AsXmHb9rw3JF8aggNYLkXSuNWE6aYqSFi3ZeWMPp1Z9ForqUHJnoEU5b6zJvoExW1MUS9PfaMT8Jfs",
  "key19": "5M52hXWDjgdkJ92ZKNt2cTMi2YaLpk1a8ojHBRdf2uymUpWkKwe4Uf65MV1Qs3wL4rocAa95Fn7MGqwHRBNgfzkj",
  "key20": "4S1YptkVxSxa7en8HRb9CzPWuiCBQjrQV6yL8nxeRwdqGzRxJ6SGfRcViqWbFTghaUFEniUiukTb2CcXN2ADQJQV",
  "key21": "i5Wf3bSMq6HASnyNatcBM7crfUFSACmiunehKtC7qwEmS4fpSWDiKZZkedkPPqxrXvwZXnoMLn3Pf8Bg5WEpjD9",
  "key22": "5WZwFpG4vEDoMtnUvAX6TmiDGtcSpGHjy2FmyccqpxX1NfVocPwp9WzzfSSQcPAHsWgnfXzMhLbspWWvdgqgHNCH",
  "key23": "3GgKPnHs7y9jXHcDqGVwL4t8zWovnysBpKJ2KTSiJtjVjCtdWZ8BBSw5L6xC2gZtkQGewtN7K4QAEbTKKXpU7yne",
  "key24": "C7YfuU8R4jwMWDmuxjubxqTtUoF141vtfdbRrTBL9xt58xGD78vAJTy1JT9TZpH2UCicuub5pKUzrCFQYtC2aUq",
  "key25": "nU93y2FKXYsQpf3jrXxYzXQbuN7R7BLBaHyhqC6XHdwosP55i2KP7PRwW6vYpoYuurxrU5GfosbTUE6smiM27vY",
  "key26": "27qKxbj6kWCZEfhmBNqayqqYbirYDTAN4Y7U5ecT4BjPfWeSa6eyKqQkVRmR39wQd5Wm45n2TvJM3aUz8KXBV4rz",
  "key27": "4PFyiYCf4qPjumGAmPCb6qECn42Uf7Q3q5uEagNLXAx7UJnEgW73b66KvRRXpLSZbsdSpmjJcKNk5oE7Vgh8akw3",
  "key28": "628dx4ETqGAy5ivvfratgKvt7ntxqhnEQYHEUkxpTG34Y3w95cGqMxXgjogHAsTFyrkQJ9mZJvWmycctwqmRCKYM",
  "key29": "hhpALcQ9muF9c7MQ8F5qsERSwXHBpSV93yUVRQ413kUfo1srJSFC47gpFt726h5B4doW1S8LB3ByFpfdJuwukvA",
  "key30": "3WDUpjfmw6fiXCMTqVNzEqpfJwTnBruKRdQkHUFpMbgu9HRBqdMMQ8rehcUWqvB9SyfRcrAzNAc2FHVBm1K2tkXN",
  "key31": "4JHeBLrWEZnvbYxPSKfNGYMv2Y5Rp4c8UyjcN8nFbjS9coH8iazFvfKE9Ynrytme2hx7bhZvDGkn1D8S1fgZxwKJ",
  "key32": "5K1nGg57WxjBoXFLcFq7xkTSABXmdzR1mYjJrokEUZsWE4Quq6ENaZFTafAEfEi4t32EDj6CnETZs2RPS1FFcvr",
  "key33": "561GE4eF6j3AvURzWoR73WpasxadnwpRGLt6WFwsX1iPPqACy8ykPTFoe5N1Tthmn1tqdksfq5ZJbggLcF69GRoi",
  "key34": "5YUd4oxALTsP15C3rX3gtwVHq7xAmVvdhkDaodBpBzKuNofPV5fBLy3eeFcv1NTVvj8uonmGQJ4n5YNw5iArrD5E",
  "key35": "3s1zwQ9BUgekWBXXfEqhrrY1vbZ4QMELZDHg5UF5NWB2Q71UqdCPxCPR9C1RHAQtyS75jVJWhGMyZRC1RJaEmEJi",
  "key36": "2W4jjCQd1ef8mivzune17d9K9fmWVxnU3LQF2zo9Mm2hdtqME7vzWSmsCYPT2BJkcyr9hd8DsGyZc4an9AzKKc9p",
  "key37": "mccqBtr3Q5P6AEHQvL4UBgFVfTrFX2Nnf5AXjMQ68cEb7aqXKgUH5zTceW8oEHhZniesX1yx89xEDzKrNiSumeU",
  "key38": "3kNuWk7tfJsCppCnocymrZQQ9fsnpuoKNm5ySYAcr44ywGpNzhV8fHukFuzYzyEZcC8uvm1dcVsq3c4HbFAPk6W1",
  "key39": "5KcRzWrzB9wZjXCcazqBz7vFAcCba5JJNWKK1LeWu8GgHDtfux2YkQdRQD3bL5iQrzGDCzJo4AmpPzHZwZii3NTk",
  "key40": "5HEN3S7sZB1ScG3ZtADvANE1GvSLqJHnatfVWztWk3iCUJcKr1wiLwwWZkYcbbHerMHdZN9angMXT9Ltme7L98Gg",
  "key41": "5zKKrAaj6dBY9kASbkUinFTNH9NdLpu9znqpXovB77SdSFWuNFjS2AmHsDnWWud2dhfEKg33pimeBpzBa9MHHr6s",
  "key42": "2BR5Z696S3hKzDbfc7wSSRHF5baUY2XZ8LMPyFuiMB6ZwUKn3x8hVhKPAf7LNJgQ9hWFHMLS9E7J9DQKVNn6XaYC",
  "key43": "2mSPnFpGKak2WvmGZbmfCvKkx5zXuKD5rbQjTqvJBuncRMnY3Uad2RJ6LSvCf5z1qC7X68gUS8EqmA4nfnYSZ6Fj"
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
