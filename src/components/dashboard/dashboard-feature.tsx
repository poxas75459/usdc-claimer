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
    "roQji8FjsoYer22p8WdyBFBB8bMUyqx6JKf3Fwss7bqt7EPnjmqVTPWCf1Xuj8YymcCz8uzJvS3ZQHXyafswX3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fZjZR3GopEsaFEiWninkrFb3jVh49d8tJnBZEMD1qCHCWRoSWtKonBWAmtS6ju8etGyo1h3s7JgyF4ZoAQupubr",
  "key1": "5R5zoqRNXzPpRj6csvdkNRqBEo2vx3rLmHcw4hpK83q1ok7PvhAqYXxF7Y2thCpKsqHWQ5nqzhsX4jcHgZrJwQ1X",
  "key2": "2NiNo8KqDdkeuza8Ds1RETD9AxRbemG7vXPze6Fdf9tf1NYfcQ47LjxG6w85vkwKydJF9cgijfZqwvVcAg1aoDac",
  "key3": "4m6DAqeLiLMD2w4GkxBP12tc5KPoCyPNsgXhuPUsfTxQupKN3cwG5Tqe2zVZKucQvPyC9FwP8zUNxYVfPpJ9u1Zi",
  "key4": "4scHScnDpB5kukwDp1wMbkCHZTRWsKLBWcPQu8CQwF5ETpTUScQnjdD65jrapKstwkMogLcX3Y6fMb6hdSWAZxXy",
  "key5": "3orrgfRx4mYRhf85is64av2YVwhPffDW7PaRmtr4C2XzZA1eskLEsVWQoVKX5fR4PRJumfdkHKDJfHTgz39KCMus",
  "key6": "3KEfQz5ErZn2UHMPAwoZuKrGrbarmijcb3pdQ2rGS5SBP6QCB5umpbUn392JMxPyZpUXJJDPvyydA8wCvHtKCiGZ",
  "key7": "2HPGN56B8uzaRKrhiAHxcdEySk3FfYmDxSZoUkXMe7zC5h8iLcT7rV5uamL1gWdyE759k3RQtvSCUk4cxPLLihgH",
  "key8": "pULJ3XCDK63vQXnUXmPTTFGyaMfXqxXTg9RnY6vY2hUegQwXUGnyGADKWKkWBFYsRs3NNH4w9yTdtTPPmxqcJ3N",
  "key9": "44UQDjMMM4QTQWTzN9p3L7VDRAXyhWTW1W36GBSC7RJxSQ57ndbADjxN1PsPoFZVcSXHgqnwB74yhvfhqWYe2rWG",
  "key10": "umR7GmcGnKHvtjbSwyskZVLofX8xhU6n3VBowMMiFbtuzR7LsAhqSxxPSYK26npEvafd33joa4JaR7uFGR4AHph",
  "key11": "4MuzF3wpQwQ4axALWpNKMxF2BozCtvoJbQqLtio6zeFXiT9DdtxfWszSLHibgpzVsQC48zWzMzEfifiye55DPDzk",
  "key12": "uY3R5AwCxSdyjtVGVDGR5Sfp9wdNq9LuBgMfZuSuRuT1JpVGrZXUDR1jw1DJvvRAagMExHwfvDxdZ5mS38nrE8h",
  "key13": "4xUVkrQcncgZ71PWXxTGxpbQxGFgentZjc7MNueDHUS7VcKsPTFx3GqNk55gWWr2SrhdogbVR3UtXjX3n3E8Z6Kx",
  "key14": "5kwFKWMuxca743pXiVwBfQ8qpnDexF7twQMVRurSKe5R3QZfZh8JDHSVLpLdiiTHGCw93qiYcC4auySA5oKyVcLU",
  "key15": "2cdzeuiZgrEiwaKvvvim43sDL65ciJTL8yme7qZJTwBEauJB7rcZhhSb49ceQp9yLTyreCC192UrAE4FUxRL79XW",
  "key16": "35oz4Vmjg7Gm6aZ3g984BiimdT6rpvekrFQ1kJtrPwmGdbFMmC4GguFLy1u9EFCjJqb8jStZuBCxAhbnPc3TQBRf",
  "key17": "2ZAZDh23nU1BbvekWCRxMZ7ykvd8BVDnogE4yzZFVsjw3krJiDb2pKvf6AxfcndDSLHBhhFTGBMkn2UCoAHWM2PH",
  "key18": "TF6xY26UqAUEEZBmatb6cAqVP3ntLxSK4kUaWVeYjbNN2aphNnLLZCZEAmxBJftA41wx7UsaTmxeF1rwgvxUVzS",
  "key19": "CTBtLakSn6F3Z6T6wbSRUG4kxzZr8C5TF8pvnSDnwYdTu8yJmqm3nY9MQSKeBZG47RkKBRfERjuCrs3iBJV4acE",
  "key20": "4XSeCGnTBWPdj5Mc5Cc8ZJ3X79xj2QeC2gxQU2vafvwDWBdzEJvGTaaLfXhketMugf4dHD7xveinPraqo2suDJj5",
  "key21": "4KgnczGECbF79PV3fDxjTZ9oDENq1yiJSoY6ihZoffgxGL7xR2yNPqh6Toewok4qrusR4jhmAor4Wsgza7DcQbcA",
  "key22": "5ZZaCymccxwMEUuaNUjvyDz8XkArXbZeBLTXgJWZ1xV7tmDBGjZ3o2SPMmy5tA7tdVjjsPk1BxCJyFArNq2gFrY6",
  "key23": "5raUPp5pdaA3fo2uUSxJ6xGn5SM6154szqwpa9sdi9WZDZNpcKWBWuyEzwtqhSBto9auTpWTrvA5aoZwqqmyoZjT",
  "key24": "3CcPg5i2krQRsua4k6Yka4oDSWjTe4muHAH8GQafnA4wPoeJ9pWiZwwxMrK8XVfprFswMVP2qnFzr4e4xwkPENUD",
  "key25": "4LzFNcYg8Xdfda4NYnaazMoL6bwj9XmDRRNAEAK9onueGx97PzAQX5obP57rHmWWnNav7ChMVNL4P4htvhD76X6Z",
  "key26": "67UCeQhRUXGPVRddMHBuM9PDEb25YfdpJbT3aVjLktWuSfLxWiP6prfnoAkkLRjTfbFJ5DxxsGwC7hvQLFYzE1KB",
  "key27": "4An2Jaw8H8KBe2fcfZesAvfYWyKCDNtSGB1P38sXXRiYCn92AW8WfpKvzxUyBJz8LDsL67HbLLCVdZ9kPMNUeVBx",
  "key28": "66yrrmT1BtQSXaFXz5GuCuHYtHLxBPYo76L3V9vjMGTQzReUQf2ad7Yex6HLrc4AWFyFiQT9QkJwmMoCyNSqmuj1",
  "key29": "7C5k7QTxhf5hsvwU8tTUwAKvhKDYVq5e8dc3YDwjvNwVoM2LG1QkSPmejQM6LwTdp8gaLQfFz5YUoft2GvZvMGn",
  "key30": "4oJ1qa4rncmReajuGGBxKDfjUvVkTTWTQfQnLP6B68m2ojhbm2gtDamM11z84hS9E6kUGF41tm4rM8jh9RzcLQmm",
  "key31": "e8YqTnkBgpDZSuo5N18WpTTCA5mDjT97Ua7kAt2gtjUaRAw9vX9t4VqqPAvtUQcVWKzdEkm3De3Fqke6Qgers8e",
  "key32": "4i4Um6ZM6vJMhacgrNXbr6imYpbqAkvLjuFpFNeN7D5Jkk38choV7XmZUqVrsr42pA7RmhgNLR3ytcgpBUXhwrPN",
  "key33": "3fXWgvT2C165qXvz1JFNuBusSGyB6Y9SaUqhPvne3BKddzgqfPt1RrQ75rTe7ZXCsEni4WB4ocHEPUGnBvR4t6Pm",
  "key34": "2ABYh74tNQUNyXBMok1rfnP9KGEgnzApwbse6aUWvR1JRMjbpT5z1ZLvgByVzTrc3V2QDJ5rXqegHZH97y3VqTNG",
  "key35": "43DXGdQVzvEAy3iJC73T68WBakwgJ24HJ8NZb4u5FZkR1sB1LjcZdtHKQeHZqumNAjaPUbhk6BabEDnXaACuu8EV",
  "key36": "3Vs5Spa3LYd2f19XNZpdH7MeDFeH6r1mNvKaZfq4K54cGTt99xDEfTy2Hb6M8BcSBSEG9Azm3HN5d9ZDi2doZ881",
  "key37": "3b9t996EHu4KM3LUSrCMyVp38VvWx5giaLJs5a8nK3Mt9M9u6eDtDqiDFYQM2tdUrFMUJMxD36LPk73DFKpmoFHd",
  "key38": "2KNbRDerPZS2BCpxuQqDjAGaY2Kp2waKZvFcgLJ86D8Fn8D8PqTGmcUQcU9dLvXpGQnZRfyUZUDuegFq6ERtrkid",
  "key39": "rkenk38UK9fxmbnDVLmXFtC83w8cazkKJrRZEDPcD3MQ7PtPKBJbpAsyHSWM9kNB1cJS5ahDrrNTshX4L7GTM77",
  "key40": "3odMxDqfsYKHtVEyx9mtrm7NTs1uMEZT8bKZJhextZam73Kv5gUB62ddYH9NmBuJPGc2u1P1DEEtY9QbRinsuMA4",
  "key41": "3gN8UbbdPWeiS1UGsHMd7wvdSx6h9uCXb5XjLi6iqosS4XQGBnPqqa8euw3XZq3eLcS46dmdCCggiAsBZWmjpL7",
  "key42": "64EBwcckkCs5E8YFShKwjaV2D7GTjVZFuPqTBYtiUMJo9MxeCVxN2Ne5EWRz7uZh9FjLvPQ74bXRHtpbVXMhcsX2",
  "key43": "AB3mu4DQ7y9aXf9Mdof7wYMfKRw6pyoMimSk4KcvLhs8mEuxxs1uLDpF7BWdKDapV2ZsK7H5VnroqB5KVE9Ls8j",
  "key44": "4B3RLFMyrecTqHWuRffPJLky2h6MR4FgoGi3Yt3EqxdR9wf43xS4YzFu9Ce9fJ17eccrgupT9D6A1Dmn6s7bko4J",
  "key45": "2CYRLKJsfdwhzV1WgsVmmDH9Z7nNQqGvjGzoUoyg9eDdXgCaBFWJP7TA3oNAfo4xHpvapVFGqjXwwYtwJCGAeCy8",
  "key46": "5wDLWjACvWRX6UthQgnRi3fAjbL4g21Q3HfKyD5faeabfzXYvcCNa5d8AiUS2uQWS6f7bPtvaGMWKjDZ8hcTbt2"
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
