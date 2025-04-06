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
    "DJiB84K5PzPKP6BxQvB869Zv3PYspNADyUDe3zgb26DVdpHkc993RNHE67zjRzR12xtd4Q1L5QFDuuCYit8KH9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RGxT6friMxehouCgogAy8vr7UXX4wpGKG3HfEqmSAHL3YB89euaUD2TaqmWLsDgANTfpfywUsVHzXRpMouBzDJq",
  "key1": "2RhGrQBkqV5yvrQsf8EkyJnAGPLjs8oMUPj6Ua577x7eF8YvuhMkhGGfgTonVBoo5UDu3Ebim1ihbFgc5147qTxe",
  "key2": "5msdeEbKmDGbgkzp3dRma5Ta4xDYf4ZHMYjnaabDBLR1ckBGME3JtUYhCy3VLhEZby8aqweC1ntD4C3B9ZpEWbSV",
  "key3": "4myMb5DFL6q5ByTU1b86iNZE2ww2fg8BKUCQaUrQ4ZiMj74A3z5wWamPVEUjEAw6d6S7V3g8QQKFyn6A29PSdNpr",
  "key4": "AorQBjh5vtPYggYaa7wSFnBSgKvT5srEiFiciALpcQx8oHAFNA3hdEeczXEsjT13592MowNF7cq8Ddz2bnp8UjL",
  "key5": "38neRgwSfhxtkCcLU7xVkefHNBGtgr4rJcpjiRChQX9AgLferM1imULnKjAHaxyQmnfpaDMMjU9XzTsh3cDp2u2s",
  "key6": "4v4QcjtgzmmgVQ8JySRJaz5Xn7Y16mhCXXWBx8j3NAYi7dG8YUkjt1BogFUH8b3KvwzJDtnwqK9HQk8XkZqjjRkj",
  "key7": "3SxMYEximqjKVDiNtX8eV3mV5HoYiyJempJPLfSmBynPXpbX9c16LbyNNNHAN3QjFhaaVav9atmbPuYErD6GBe1d",
  "key8": "4Qara1LPAXdDbD6ibqnbvF8srUzkT59fz83BPKSoRCxhL1iDKMzB9ns1LW6hbyn8sGaVWtBR58aiVcupa4QFsPDo",
  "key9": "jY4TXRxVA3AGBEhZhXzCJ4B5WD155Nm5Yxm9shd9on5LYZcYk8sXiepqzj9o3YsASbJ3s4BGx7uyJKa8dxrCutf",
  "key10": "4kFmzErfqzj53rLD6EjuHMkvsxkkwdAMD95XLSvX9T6qZ8tQpJQhYFc35FSbm7iL1zY9CmvmSvdCGRQVPArZsSMP",
  "key11": "3QqZrnnDDwMLFPUn6AeY5PhWks85WiQPM52xSChQ3rzxHCcYdmH5QWiu7KZzMRigmYPMnCGuHUwzWVSAsAbUv6b4",
  "key12": "zLSs47SJP8cGDyNqEHXByFe8KyXtpV8fvLG4WTnyXTqn41dRiERNzLxgarFu18vhKSrMHciRLPvefFJP3Zg1TDe",
  "key13": "LpDSeVL8dSiVqVcdqsBbvwWX63ycrASCyCtVkcovzkWN7DihmZbUoLRwCvqQTYAKDYT2F9FdaFAYWJsut18ctRh",
  "key14": "44P64u3W91CyANFyPGDev8GjpqberidQfkxeWXBaw9WBdqMwW8aHZGMXTyBYWsTFKtzBSTCsSPpRkTT1mZ9Xfzef",
  "key15": "4K6HACD2myhoNKf7RZJZXw9t7M1KC3RnDp1DQ6ygP2JFjjTcMSkrva52MjHLwG7JvBmft4gYp3E19vXZggrMz73J",
  "key16": "2M9ZTV2Su69Rc1n6Vd9yUNovC6zMYAzmd5mHmTfqxN1jShHaMqjg6JZKymVrxUJfaZT8Y3XmCC71Wvq1W8sWBMCH",
  "key17": "47XUNZ9d3Q2Cs1SwEuRQYfXVvvKqkeYwcNWNCLr3eYhhJAZV7VLbHZdgJ1qgptDmb3KgMGWFJHLGVpD7gRMiEMF",
  "key18": "DsM39DesarpiLLfGX11Q4YmQhrAoRu3Yye3pFqSo2pVFsV7JbUg8JnawQzdvMfbruwkW8PqKp6XSrUqupf2pNDB",
  "key19": "6fzMPWKA7Ye8eG9HKVV3rfDHR9uPd77c5MD5KJYknzQ4v9ZSv9vDWNUN3EnteArjCdD74nTNRRE87hnPH6hMgf5",
  "key20": "3B4F15yERHhC3rMgAFEF3iDUiRhSFbSePXEfo2tdyqyzTfSRgjHP3g82qap9CyYyPYC9cGoa77rSfv3kMQHoiDPq",
  "key21": "4mHZMQArBUfJPiPpSncfZuSBZ8kuhAkcWKCWxXEdePodnx7Xh6gszstxeh9bgXvmupjWYG7yDi2ziXELU5KnEGyJ",
  "key22": "47x3aEfJx527YswAPqUdhRpDVQDapgZcXswRM3pvTZm8Ecwp2ZqWrktnwh4qxLWiwu579gugyek95e6s8DqSr4wE",
  "key23": "4X66nALrYayXGdzSt7YRiReAPM8b7sAGgr682iRbSoDzj1dNpUVGRsJQzYv9iMhM2wLwsJTvDrtE6Cuavkro71Po",
  "key24": "5YvFxdoGvmDtgrkhoTPqiPnPfiYkpTiT7dMPAwSbrVVPcHwNLsPZF3hC8hCowN5ydap5qzGqNgcXjtDAapiRQTET",
  "key25": "5teCWVAAt7Z4f4qSFPjXEu6MKMsbsKjCCSvXu756DDcjdZT92RmA47M2Ny8VTcoDQkXLUQSPSRtS4u6DdCaDMTVx",
  "key26": "cCriL47JpS5S9iW418dZTXhTLc6yodgvrDFwme8M7SNcnSLq4TTGngRtdpREaHMnJg6HoHhEdk79s2UFp9tJhms",
  "key27": "5TndboVgqEpBADYHgPguQzYGQqvjKjPSwJJLJDmGsMJfEQebTkpQopD28G3JfBowEKgy6ajbqrKMvsHVe6t1U7Vz",
  "key28": "5yoMWZiAcBSL4VMgYnsQoLLPbzeB4J2b8eDu5VrDFwyQa9b9yr67wpM3iaARTjCcoPBAQLFKG9LiMjonEUk4G8vA",
  "key29": "47g8BefjUTUwQEEYsfdRAapdCnEXdxCt8mhvMTMaJq4KqopG7xS3fJJS7CjjP7DUQG4ZRLMVYkx8xBAFcPyixhBB",
  "key30": "2mSDXFZzRu61pARUpYgFH4SvbvNGS833wagCYhX4uFZGPEVBLinPtk9wqZvYcDeeuAbeJz1V4NEByVZSQCSXi9kb",
  "key31": "2byw9Syd4aj87MWH32x5V2nusFkmgmL87WEJGJ8ze29EC4BWAyL7oPueu5bQBdN8MHuCitD8vwFmpKuf3sHW66Sg",
  "key32": "4pJzNbU31HK5JDmh4cmQ7XQD4Aceoe6s4hSiVQMZfr4LZgmDDy2osZifoxf843pNZQgcRoH1zizAKz8CZdU3WxiL",
  "key33": "5AWv9yTFkAgNcG1Eh99TVExi9zT32LWnSyrok7uAfj9oVEP45X24JT88aaQ4szRGucUeZKxf6k6bDAB25cts1NXs",
  "key34": "3kgdAWc9ppU1bxt6i8bPEXFw1MFfZYCVhfEuuic3NKz9F517oyFyR837AXzZzRnPWrmGmFmJdApGzYbH3bo6YHX5",
  "key35": "245etKiYQnKjqpecNvzWecsgukrix8qqNxfrU6XGfkuTHYZjQSpGofHaEn2MatgCqitcgWMQy3ituu6j8CNzA6Qv",
  "key36": "5jiQgUwShqVQN7mpaiKK3wxNRvxew5pJE5sV2dkq2fbASJQUgoaWCmCoX2SZRAYkkhMrh6e75HazXxnxkoLsWWsi",
  "key37": "jgDuoU2WFEq8GANfAWrR58PnHLEoy36YYJrarvbb9tpvvAVAdZijT2b81HKT5x42GWrSBc6LjTFkbeBbTDdpx1j",
  "key38": "226LCoxrWx5PU5pdbifg7DUpZDecJzB852yx9DmFCoS3gWVf6kmVEdXt2hjwr6CUPyKkj9V7k2MGkJPR6ympmken",
  "key39": "36TjcEWacBcDCoGksNAY71XE7FcKN32mRHitUfZsCa3o7rgdBxgZzMrUjoGuibzfTwjxdyjy2nLcvzHFpLmaP5GN",
  "key40": "63GdtNnFRCwQaRg7CDjLYRF5KXYyp6iyLuxryetWmhM5YwfXu6gR63Q94yz8cEPLc4ag1r8Qb14Uumm2AZipavu6",
  "key41": "4f51DJfE1H49CZAzrpxCUzPB4mhh8pF9TztLPbXEexqEF7jJidAXPWvATqsiRrrzTWaEQrYCCJCbnW3VYbe1manb",
  "key42": "5nZxtYM7S5xR2nBwD3CzKrAM8HMNue6yhFbgG2BfbnVdFia5qkajwTHYYFDLq3x2BfXtKBwuZRJLrXfikrLNJq6x",
  "key43": "2ARueK29XZ8WWQWHJ91qUnf9RevbQXLz3UthCagLrXdTHm1RbHwpQhbtjQ2Nkc9x4JCHA9NPUr5xb22mKW7mfhFu",
  "key44": "Yu659YVXPoVnZ48KM1HwP4srfY3E9g1JBbRSqepNtzQr5pvSog34Njmm4JQPAkvxap8fNTY26wAFaiaopYhX18Z",
  "key45": "2DMHVsaubPGPVUnm8dq7wXXK5zFh3mvD5qvDTKsKsqRbZR7vjQ6JwDPD8DQdwLqXkvHfUN3ZHQifmfdfLhPoRh9k",
  "key46": "2xgQzyfC92SUY52wHSzMGyVn337D5er42PwPreSHrsDbfAzcEthrAYWhM7viMZjkspZXMWn5KwDiBe5CmVB3Xqdn",
  "key47": "4KrPS62dGahSCkfKe8WJByodmgAV4hZQb7PcLNf8yq8QH1BHqRVvfVDgzRQnfbYCamVxjMwh1wrpZ3FWUpcbwCTx",
  "key48": "4HFWVLbdVkjfvmE7h4oHhMctRqyNJyEqFcnBgcdaGdS3AZGoDGDspzSEvSCAJMqkfUbHsHvbfcAgATcoEf8Cor4w"
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
