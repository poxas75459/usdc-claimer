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
    "3kyLVAVsR4NB1LSM7ywFHsCnb1ftQiWoGLvCVVLmtyGQ4oXqJjR836RJzgvQ9Gb7mysZHToCnkT97xEGZVNUf7Lu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RojsHSuAqrNisV8Dq8Adxj87mUnaQTsA7HF7DgYdvtEccQnnPuUsevT2VrNaraSBN6T3YEcKDUnXavXcZuVnUEU",
  "key1": "2aDjVvRBrwiPpAX3FQ9aMqLPJsCSwByjDhV4bJMkNA3Xm4u5hErWEUbiTKZFHss9jMftqoD8dmeNfbVfAHkrGwUm",
  "key2": "4VWbxEozLqmRob2csKVccHMxK2aMiLBJwG97VEPnPLaPMBuv2uCukQ7J3MH2wLibWToEb9ZyB7MiMZfKn1oRNZ8G",
  "key3": "2Fkxh9MWPPWtmkZiaxmxhmjQQpccaw8vsGdsBCnD9kyZf6VPGE1UVrjdFjJgnNGfmp3AdwwzkqK7ZD2NZmg8chMp",
  "key4": "67pQC92WFfjfMZfWvqnK6qRhHoDdG5YtPZ2j3oySVhf85kmGYgKKLEzZyrfdBRgb5uf8DzTNTPyWXUi8Zv75HoWW",
  "key5": "2HZGSFYFoSExPR37wjxW2RsstyLNJsF7SAdVSfSio9iS4eZrFDQFRCbXXp2HkM9sCQUsjRD4JbTeT7qF9KQKvt69",
  "key6": "59AMr2477tCharoMCkaRR8MuWoX4nFmnGCfjgkMpWuDXoLQrPUtnsMYwfQ4FjzCLs5t6Gi3wUD1e2Yuf8rL6wVHT",
  "key7": "5GB77n55YocL86wdsHQhtH7Z9U8A4dkYxcdMB6hb9cbv5PAzs62FpZuDFRLR86hVaHmdyMeSC3EPZ5gof3MsRLkM",
  "key8": "5pSjHPqH1vdL7DtNyuKjdBBE7zJSWNNqkfqra8rZv6EghPMXtzbQuJ8NXsqMCGPq3u2xY3nbAT4i8w5EyXcNijGc",
  "key9": "488jBEJBuogSEpSAx87Gibud4wgZA6i4JPjE42dirb3U8jzrL8fzePKmEndnjVoFDPo9AbLs9z2kVQu1bs2RX91M",
  "key10": "42bgquiuXS4mTGQzQUQSyn3EhjMtg2GEggr3rLUd3E3iSJuR2ywuyXujgHm3Qw9avAX3SDQwa3h5pA3bjWh9sKGc",
  "key11": "MEdpPo6tPV4M3YwmMBtaktTN57M46ecRVU1F1y6UJZA1zToHk1qGvgTXPr2svmR9pcwd8gWbfFGcSx1MfxP6Gc7",
  "key12": "2RzEZwDbAhAi18AprYCoyAoWCJT51tz6mjbdsgnLhzd9yBimQ5B3UKYCxw51aV1ybjqBA9e1kD53it6ooihC9LZb",
  "key13": "3Uvob9xaMVrQyxrhBvG2ErwLTbh7cWBC1y1HgyGwuyqHWViuCWb1tD9n2MY6pNcu8L9sTqNMqtiNAz78AarUBEKS",
  "key14": "5HweWs9DyyJccogAKNxNEhrtzKfNCD8yakKwYaAyeakWfnPNffZgumrxkrV6ZKwPxV5bn5Z9tfa1top2Vqe17Cnz",
  "key15": "2D5MfmGbAp3LvHjshteP4EEEVmbfuZT2k7hUZj5xg1iGuSqRdZoQDYx7cxxyF5WPQraTiNdp5oUqptLKVodYB3GH",
  "key16": "4fffXWeojoCyiDhip79QCmfpJCFtfA6j5x5oxJ2dR17cp3ayfhf6BZs7UWACv8JZUqYh3snqRAhgzEdwC7jQmgZW",
  "key17": "yUBJy8RYppTziGmGoHrnv3VZgmQoQktfqCqAz9i6d577ej7eVMTjeA8YsK7LWzaRWguEkTL6trysyztRyPA6RnF",
  "key18": "4nYEXj4iwZtvJ3gYVgqzA1ntEGahQ2HeT6ZhFafwigFjm1e7S9XV8rU84ggLo53nu2mpKSm3L8qPAs3Ui5GqS2LT",
  "key19": "RxKfh3g8ow8bCD2sjshZKZKK4EAYLNcQaozex9EqbiorGZVR4qmMee7NHt5zUVphtxix5DAeRdBqDvR1Rgb1ajd",
  "key20": "BHcfASXqHVYyZaWvmNt8i4f81Me9Ci985E1KffPMrWBH94n7SuiKpgW66K4D9iCEfWQ97qbrBxjjLcCMWrMontm",
  "key21": "3Fe3iXz9H9GoEtnynfgBc3JVUjeaeuLLTD2YofnAqREXQPNgozfC7Q2rribZ2kFgTnwy2zjKp4bxKTXysgpWrizr",
  "key22": "8kfsHYmMzwUyiPdm826A6dbrTYYoN38qVqRM9ZyJqcMNjNoosWVB2ZffRvVec9RAcAaXpFX7GFHDQGHgko19goL",
  "key23": "49EyCGdYpWsWNuGAxJzNN1xVQTrwejtnisnGY5C2AayZ9BhXRye4PU5nBqb1WdQMqaBc6v8UyrjTow7zap697wC6",
  "key24": "W2cLR5iWb6swN5Ch3h8CNaQRMyPCiahfbkykaCWYRnC1JvwYGEmJgw9pva8WM4c7S76CkHxR4AcfbhxqgvmMMCF"
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
