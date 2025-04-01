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
    "4w6MSbpzBmfoSq3t4HnDjkXXjQDENVWQswxCrCBtRSg11qQD52Zv9uN1vw6Qoqo7zerZPZDmtqTwyS8NmjCuGgPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vC5MpKPTgDC6DWYpuJnhm8D7yL1bLcpP7FxxJcerhZMTYnhbeFa8L7cZNKp28sr2zs3m3jtt4tNQUrorykLigDM",
  "key1": "53UiLSV6TaE7uraJWjNtnEVECZUj1ZKeZ4eH4DbGU8HcwuYD6XkZBCDHFd1om27x3C1F8myVGEvzomgAduGpYSTr",
  "key2": "aZsBwoU6bBLUERhHqur36m2HnHdP4vhpmcRG2HB8pCTRvmJVXpaP7RnGZcfNvH8TLNqD8ZBfc22pWzeSfgm3P4E",
  "key3": "35X1pfPi9rfJkqoTEoLwyrwLryoeqqWtxEmThvxpQum5LmaEfA55HNcMiEpMaLm9iNWk2GAh88uuRMivAQHMejbh",
  "key4": "4VXdR4gys2okFXK1reusHogerwjCm6KdmCEP9zNFuWoigUimkdmb5Avc93AXaNmAYPSquX8ZxFNhJSt4m51oypRq",
  "key5": "HP6j7eRx6gK7RB5tS9Y9uaSJcXocQmKFnLZgSkvXmamqAP2vgNBKW7rVdmbwnGwpE4JYPXW1Y1JJ7B23PhTZkDd",
  "key6": "Vy1KL7At2ujVDqJGvgvLDAhnjBD7htGqQnEZP8DziwSuyEC2z5xyGXSQUncVDRWRy3ooBE9c7ZNE7gXU72G8SmG",
  "key7": "3GpGkBkYoDHdJSjrpaYpmqQ3ey12H2xWgnHWsUjrDKLPCMs8HdRhutpwunDy49wtMX6Fc1QRbF8otXAzz5x6jLGy",
  "key8": "JjqEbDiLBopCgysoZmT5gF9nFQBWyvoM6H7zJhAFbkhGx8Phjb72YzBAaj53xd8a4skpDu8oXbcf5NbSQJpmXr2",
  "key9": "4vjnDjf9cbeSoUvv9Dcj1dm9SrGppVruvt1DqDvk7VrAxQkg3xqa6L6YTpLtXtsnwyfwvAEYG1k1iPP5Re6jewDf",
  "key10": "4GgW3Xj2gWB3JkbKxT2YNRvGCzAEbdgmi2yqwGncdS6bG9cjeUwYvWCR4E9UcCSnvhY9kURiiUCRTe58oeMoWLVn",
  "key11": "2RbtqtLstou9PFR6C1tvn1cUeQrU7hBQUfGE9KZo4oxq5gpL9iExXoaWhxYEgbB812tGxjhQA3mbXgBjUiwPiCAR",
  "key12": "5S91AjEtSvRmkoFrBh9FfBowE3y4e8Voh5qFA45tr74Un9JMNCXrHeCQ49EhBZ5NaDqUNPwz2n9ddyntQeFQkmtk",
  "key13": "2YtPPe3zQxvTHLeK1kJdRqJqbcciowjfUibEMrZF7Sa5kgV5pWn23MBszBgDznfkqoGRRdBeEChP5ufD3CDCNiVZ",
  "key14": "XbFWCs6EUGAoa6r4YWeiQVTdwRzthtGPG4YuBu7bCgcFJ6hEbnDe1EYf7ZoX9AHMH694JdvQgKCQ8c8Fa3o3p5N",
  "key15": "65o7SrChFtGKa2gr58GEwRuRj4VRyB9CTiV47fc1CVevseYR5LS3RfEtfDwD4iyzKV8wxnVgH3W8WAYwnQrG7Zvx",
  "key16": "37vX2P7Xpke5zZVrPTT8UncHvq1STu3m1s7QzofYLoNrC54ALhEruLfpPidJj78QgXED49mCqim4adYAekYfLX3P",
  "key17": "aUsWWQoZk6APLY7nSVyi8KdPxeVRC9q7fGM7x2wuUYjL4qDbwe1UEsJyKmDME56RaGzCq2Txc1JDZYeTyavhgoB",
  "key18": "4okK4nt72GBZVnrpDNwPyJfsWkuiKKREBFw2znZxSBREVE5MJ3PVrKPovn3rv2MT3ctEh9vWvFMNcyaqo9fyLK4W",
  "key19": "XkWECBBhDKu5XKxQvipLgn9WC4mAE1ztQxHQFbwMVxuB28gSyLVYNT9yPamESw5cXUAKQUUA86FHXH3qwKYyWwM",
  "key20": "2padyKFcpqNoiAeDu6PWqU9kxp5Sdvmu6W2g6ofhCKuHTHgwRDkS8yVaWVoMDEVDqYqDNFiq5JfjgiQvLLMpuFmb",
  "key21": "rkeikFFVqnmqFHyHYDo32N2kRNc2R4YZwj8z2ekPasNpHLHKm6GenrBEwskzUHJmEWtoRq6rY59iTZDM4JyHBjL",
  "key22": "3kL4HTmSJbLGVnjwamdaViqF3kWtc36Ayy8WAuj4AqmjNbLp6tG1VWqvYp1Z55ypSvzAv4Z6wHm36CNVCkM1BQVx",
  "key23": "aJotH5bstf6z8Yy98E5R2Gm1KMB92wsVeBDrAM7bPwf8GkGxdopmRaGXhfxTQHfcXiu72ckXpTEa6usQHE7krGU",
  "key24": "4U7BPzYTwy3tpmZa8TWXTBAgk2sDoniyi5p4grVEbpuzXm3xKd4hqCLG3Bx2FGfsNCSvRay6tWw8bPEKba42KsGd",
  "key25": "35xwgffsYAPQku8XpT6unmateFF2aRWE834SSPwEd8uhMEujHZNN47BWryvVKZULGfLp7o55gX9qFrg4Pr8W28uA",
  "key26": "YFFtX4nrkByV9WHjq31kernqor11UZ75zvNrZMZ6Rt6L3ZPhBucdpmmdwygDGdbWRgjNQZWBj1vGtGfLH1W7Tdn",
  "key27": "5jjVk3BMaPmwNKivFXFVotSjQLK7eVPRjKmFamVGPDS8obVddRXPiRbgbX6ZhKdco4MtgkEbzjQ2qkdp38MD4rw9",
  "key28": "367pDBsWLeDWi6nWS1EVRFaK389PaPW8J34CQS2xAYqvJS73hEVAmY5ReFGW3cxj78EoxRhQnNBDSbwWYsmDFTxT",
  "key29": "4pGZXQs6dvYCpPqF8pnY1ndrJ4x5k5QcDqi25KMtHhLvKV6FaF1mGMbkET26Shyxw5dnwpqnfCxsvrSHCuULyFTM",
  "key30": "41J6hVdvs8LKE2Qk1AxyqR4BtvcBcpe5Ht14RK8CBoRpVrb8U27zLY5RPKTkLYCE6H7jhf4aQbcbc62oEH4Q6KaY",
  "key31": "mSUE5nK4tWddRt3fSiqvjzBGjd3iqBkWiaosEv5iG3mp7mi57DLhYdaX74mPEJxhNFGyoBPZZwJKru7Qhqyf4ND"
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
