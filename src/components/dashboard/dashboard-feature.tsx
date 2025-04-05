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
    "C4xHbgwV1xAqjfVAJSzWdKSinBuFd5ichALYvLZF9sgEhQVLxqBgBURG1dSpSYvuhvCcHxgPTz7ZPruHqwirMfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qyiuTn8TnDeLgd4D4XRQxvWXKnpsZ71KUXJBXLsXyQzk1HXoAS3t5VGeTQzDGNHR9TZfxCVFwxtsErg31hFwx8j",
  "key1": "FWt4JEv5tF1yGoPjDA9Q87Mt7xiVbvj3WPUXwrQVL62EAUVYYdDHooNZmv7rr59mcqHPH1mZnXL7AhCmaZmMiNc",
  "key2": "2vtkxczuE8s3bChK1w98bVStagzpNTksYRKBeH44AwfGZpGMNe6XxECifZqC8ddyf8m9gNCJh7NywfMrptx6CEi6",
  "key3": "28FG5bpY4PBqs8txiXpnRGyuBMP2uhBMw6CKTD6MVoDxXj497w3RQmuN5XLgFRug9fmGUftEUbeGXvdT5UyhdHzx",
  "key4": "5tbmvufK3mEjNhReososK79K8Qv1ikfQXviQ7XeS6nWmviGx5W2Mz1MXmC2aMPQWaYbAbQQ2fyUvge8vnvZTXFWB",
  "key5": "2ZZK3zN2kd2QPVoAxhZah9tiXJqFnhtgpczbNYmFkKgfVeViVe1yHazKx27wSBF1sfz82ExQbuh5s6Usm48FNytw",
  "key6": "4zKky2e22gh7Qr1EAfTsUHdxRmUJDjwTVP3YRCpLqWCT8QHVPEZaCDavkAdshBn3fGyJ17j3CpgHXHB914qEKEpy",
  "key7": "4NdVve3wtxkn1XYebX14MjMbevUP2wSqFCFSRVm5ofXKtNGMWjUsqJnZmgJnt3VJCSCj8ETHyj1imKGxH7QVL9AM",
  "key8": "5MtZyRvw7UQE5niMAjB9w4w2cZiKvpMfKWqdutRZRGFwMMKJhQuXFijki4iraKtGttEZNkFGvEEAnfFwdJZuioZG",
  "key9": "2MGPbdvgdhcoJ3oP15V6ZCLcyB8eKpZUU87ojpBUZ1bBGer4sAb3nbfMGTK32p9hucbph24Qc6KkSAM48rU7cdSK",
  "key10": "3TuCUKpectRoCK4UU4nFxfgQHVv2hvwvR8XWRWJso1Efk8n8DQbDDQsx5UkNETVUaYYwdEJiaXvdrPCtTt8W2xT4",
  "key11": "4iNhYYR1QrMjWf6XuY4bFG1upWRj361Hpm7R6JskjXxmPnhMRUDrQmVxAwo44zTQjRemwrp2XCgofKzWLBUGyKfY",
  "key12": "WyQgtRrfXU2eNP658fnar4zPsR7mz2QJJkqEJyYiqWhLSigDk3hCUZVCVnLzXvoTbtK1pLUdjjxBacbHen9ibD1",
  "key13": "3XgauK24xhvse4AzpSVcVFiqiL8XiGvyDakBkigtJc9Y9JFiz5mTEmakJ2Kx7HNkPi3DihyM6Tj5DM2AdH2TYH8q",
  "key14": "2fsEyrD8S4hQMvCqvqx8aUCgjkxjX3QDqU1694Az4HhfdCv3paLsZ8xLg7Df3nV6PRkixsyT9bzjMeraQBiKUeVx",
  "key15": "4RABZVELvAQdAweCC8BdFoB6QRsU1mM74mEsZG3MrF6kqX4tVc7F1mxgPrc7nPAR2sZGPdrRB6ppgxMBS3CBAtet",
  "key16": "472tZkLr18rD4SLoMiBqD2inn8Yt9kmWSYehsKqz1uoa5SQhAAMnzAsqS7nvgQe88diujL4X4uamS5QVAsjs7y7L",
  "key17": "5fE68MNjXTo1nFSRuTFiyw6GTYm9L3GSd4iCn7e5j6mUo33izdyyiSD8nLR7Djnudg3z7KKzeacWE5fm9GyZCMKX",
  "key18": "2u9ue6zsBuSGpcTEQ8TRTdRMVXSTyUGS7cKUcwAYFfkZS3eHLgfcofKhgk9Vw4t2XGfgT7wZ1bPvG6bqzrxhxGSJ",
  "key19": "4Uce6J4XwtfJ3kRxmYC81erRxXW2Tmc9HLY1TWBWRPMtA298KHvEW27u4CnLCLi611i6Ts47vsUg6FkqrTvJ15oW",
  "key20": "2PLo8iVyKrhMqv55oqMKGCMFnVJU4XPPBjt4T742XcevpGivQfq2cVXHdgNs5bzNYnTHRHRr7SP9kF2xbFrGCSNy",
  "key21": "5myqBRVS3EZz1DqWQFV1FpNJcNrEmi9iUcHbLnCDGoZ1nFA4VstN7P4dfB3vE8e894opFawcr4MQV8fpVSj8wesq",
  "key22": "3YhdupdbaQEz5s8DTKuF6F2kvDmPLwSLUMfyB3XLqz45kUx3KCSFgva4jQgB5b1TC34ekFsCmCYwXaWRTCVYXUne",
  "key23": "2hGkVf36hRr7wE8TEAvoC7Kh75D4C8f8ELZQYmsUvL5pie243h818GBxeB47BQbAZ9YqfyjB1X1t8ug1p4B7Kjqj",
  "key24": "4WLeH6XkxG2WYvFgnsMiKrkTTYmjd8LkjtJLpnovKk5ibdBNkxWDA8R23yJJ8hA8aPixdv2J6FcEbsq2aYR53DPu",
  "key25": "5oQS2hmyKoSA89Ch2GhQAFDMQAXtWs7D77FEKZYJy1quKq2z7F75Qiqp6WSDBhiykSUHHwEvBasjyHRGwYezWCLo",
  "key26": "3WiJFqEuZUMbTHsen8D8CjNdvikeefF5gH7uRTNsegAmJ8Q4U96TYT5nhAxV48mqQTPNJnedAsfUBKRwimpzH7fW",
  "key27": "MRJhsxJTYN6YTAmXkksQWBHwQqzyfKbzYpftADXY3MMGr9mcRUztnNbBF5W39JPNXPzeWALKJNoNrrjjBb7HokS",
  "key28": "J6gmxASQ8kTKwUQPjnRCrdpjXbgYdYPsuKL2Zs8AHrpJXM1C6Vs5VFQyh256DEEp5Z1dRvxXQ9VLTb4LhtyMCdZ",
  "key29": "5fSrdtxpMfDtkED2oEAANKSzmW11n5hcFhEfzXdJV8t2j6TpfsUCFSPuDK8AXTNwGAqX7yty17vdr7eRFcmwJNQn"
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
