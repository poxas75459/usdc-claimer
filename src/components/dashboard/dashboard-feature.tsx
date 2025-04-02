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
    "n1qJyfZT99Yi3RwPcWgi6iRBGv1Pxxb5fd5q7rVnMiCPrhSrzbaTkCSgyizaeVdShw6ChUZtrdLe4v5Mvthy5tt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v2qfwaSE5EboTikd2VHabdubaHCph1XjtJJ5R94qrpEGQPQDJHrGPyoz5paw4uC8Aa9y7KiPunkG8nSr4XS6aQ9",
  "key1": "3BHzoTq7nvHDwnsn3xryQPWkF81MQnhzjs7T172atTRbQENBvYy2uze3s77QnjgXqs2McqhxQTopFhdCa37HkzkX",
  "key2": "BtcbK7ZaX52YaMiNBxjotuya6TtGfbLapi7yPoowLFJksDbqEQYdusVgBWoxJrZXYnvKEpjaieQt23VZ8fkcYso",
  "key3": "5QkuAxHKpwk65srXZuZs4gDzQar3B9ufFGpyzks3WAT2C3WjEtizzatv8HMjC8AM1SvjE2GQ9U9YeeNGxRPS9vrq",
  "key4": "2eB8qXniD7SJooZ3YCdGA91q82rA1r9XLzVdDiKNQ1Ax9otXeUanzBuDD4NxUQs3vLuq3PAjf9qHawcLwt8PmPbT",
  "key5": "M5gXeHqnMer9CeQE3MXKwHU2koHNmvoZenPu9yK3vdm4ifKiPrF9UQUkCaTtbNboFz5rwujeLv1SK5kgkJPQW3r",
  "key6": "67nLxdQDgkvKzg8FDRgLRDPHyqcK1PqrQ2NLQuUmzv6GWFw1G5HxyBjC4Czc3JnKCmfrUjxz4gEW7wxeGGREGgTD",
  "key7": "3smk5oSTe5e6cfqWDKVvFwVV59PUc67aM2s1wMTxBo7Cof8wnDXMFg6eYdyybwbf5E8NH7rfu1tvMESA6bErv4b3",
  "key8": "28GqdqfNMPPBaf8eqCaRHELi6AfZ4jmZqimGzCioae2AXRRounf9wNqvDeHptVfMnvjX1wZyVLyonWagW19gC8xN",
  "key9": "2NnNgptip1LWwVA6Uz4PY9HMWFd5eZGLBUL5GZxFzK8CzcCSVLnMEUSQYXf3jLTBwkvJrk2wyN9eeVbe2aoyesj7",
  "key10": "2Hw7XW8o2Tk7uBMX6kL1M7SqZMCsMdRcX555t1vcgMYaJkteatq1FTtoKRpmuqDKGL2LcEoRQBdPzjX6JTZtxEQ",
  "key11": "2yeLnb3TbtKtiRnnEeYPCQ4U5e7eRiuRxsgH7Pu6uRqMMp3iaC15VGUPg7q7HRttYNpKT7noLoxEtF9jBDrArCKc",
  "key12": "4x3jpencZB7iwZvKDkvqpVZYq1cxnXXjdtHi1KPh9xMRrkiTuqCPHYDNegPiRwQAXodm69DTw7Ho19b82Jt4k9y9",
  "key13": "53tv6SXRJjSXHgqgQLdZiHRuwfTDM3T7bGavSpTm7vcuTkymubt7hTjX3eoAFBRp1A6o2JgHn7qUtzaHdqpeM4vu",
  "key14": "4K64hVCyZBivCo2sHCcqijrYeokwQqfByepnp1Yb2nxDJmuR6fFb526AFoS1LDKS6Ja6EJRB6S5GNCZKNTtSntVa",
  "key15": "52hMQk5MeHadwSJhUHo1z9HPVELfsN2YBygCEZjQwngAahqWs5rvzkP3KhK9mdYMqMExMwRjRoWeYS6tnJXwg8KH",
  "key16": "3sh9ZEiD8rDovGLrzXh8k7fxwMuc1op7aBsJA3H7bYJsmuADXBocGJCvuXwJXvXGPSgaEcfBfUYX2ushr2d93Fmd",
  "key17": "2dUWjoAUWTqfsYP1rxv8XW36C7C1B25zVKePHnbMGvzGB9PuPhSbsMWr3Y4G7hTd8ACUfKE8JaFv9ZNz6DMZ2tZx",
  "key18": "i4e1oGnxPEDDQb27K3pnru9rAUGrZbzrujDpkj1dJeEWQtXgWY8EnTxiMTvFkC7PMMmCHsHdM1Mp1Qeu9qrKVhc",
  "key19": "4fTQBsHLU9MkMMqZMkchBDowaw5CT7UnKigJXRBSGLaLCExq8wcvqXc6hZAtQJqv5iburjhkGyHZWG8snyFy7e9d",
  "key20": "4mr21N1VVxQv1RqY2YGQYugV45n7Lh7ry2VnvvchMUXxgXD6jfh7QVxGaZETZRDeQCjrDfpwUXJiMF4cPo2khoJ3",
  "key21": "3zbQWfHcENQcRyf36ZkiWzfMxFnGKMquxmTd85aWQcBcrbngdvCH7bchF75gwmyPtF44XqPgYz1uTfE5bfF8awHM",
  "key22": "3uUr752HexYG25qP3tD3JhGnhBwtiUp8jXQZiTi6sT3SiXZd6fYmWCbTRACq52HzTuikdtAihyradzR6k9yHt6NT",
  "key23": "3z48pWQBuLuCYvwdismE88X5ziGFeU5jtor7uQGm5z9Z6iq8CkvD8rhfHeCaCQU2viqnGank2p1TjrGmd8RuhZS8",
  "key24": "1ZzuhCCfqpeDGvn42sFE6uDbYn3Yw3LozzqRzRawJSvpFGdcHuUN3SdEYwPpbs2mYPh5fMgtnH5R1MGZRxZ2QsX",
  "key25": "4kP3gQGfYBCqYSjLY4Gz5Yn4RV8jQhGm2Q828xPKMu6byxA4X9Caz2h1GzyfMWKNaERi6gqmttuiF9uMLBW5bCoF",
  "key26": "5fQ5fgzNWyu2Zw1yYji3Yw7uzzuivc975CMFGLKdZTjQNgVPQ9bpP3kdhwJv5YD9AM5Y6A9N4M264cxqCFFsTr8R",
  "key27": "h2WMSukwhj7Hsou5QDbK95d8LsiUqjWa3DsYXmrX2EcNqrr9DrtcdDBZsxR74mXcKz5QFkeQX2N1YUjHNxyZqys",
  "key28": "5oHouyaVj8oRNji2AuqMNrDxAwMphhJxrUTHTcaaitkz3FexkUD94qJvfQTP7YFo14xftL5iyv1SxHBfkxU7iWM4",
  "key29": "LzvKKYh5Euzpkpx3gPR6evddBjC7Agj1S3H5eMvkX5JdWrNzv2nUJE3L8o4DYhrekmX1KA5ApMEz4e9zxDsvChR",
  "key30": "YR9PhfHQ3NCYjPqxusUgXjbZCVe7edD2m6gRPwpzsvNv73rGBd4mVL4y8iQ65L7jLtpjPijczD6nKGENZ4gMcnk",
  "key31": "48p76yLnbpgQgR6mHWXttBYxim6d29LtKE8onReWW11SrJrBTg4wHHRoSVCzsqHKezGmRKpWeLficjceVvp6X8C2",
  "key32": "48oBeBV1CF6egeJgBoEMphduis1LTwwbu86sgW3hJwPLzeUrUtTgRQZzk8WUQfh3dfScGx2y5jS8XEzT4qg9i3fi",
  "key33": "3BjrxXro8H8Fcpmsn2NGXmfqXx8AWkodHD8aJgALaDiULP58mLi12yDqTqjLKRcUK3Hahh5JMqFmFXGpcaErucK5"
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
