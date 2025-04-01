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
    "MmRPyJaHDs2DUXfZU8KkCMJfoZ2bfmgg4sLArCKbbyYMWppEjFz4u1R4YAwdV4R6sE3Qs9mxD2oFnSjgryhE5b7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dCepyzZf6MUTPy3WVWac9fgVeSizpULxUSzAH1oMU1GkzMSU65b7Q7L2fWLA3CBaF3t9D7aZ1hvLSBSkXn6mGkd",
  "key1": "3whCYpqSxB4W3MUzjf6L52CyR24teCaBwPmCmPfrhkGrzPwsUMRfD4FFnXW8X2nZHwpocTG2vYMjXjCAwFxCMSsy",
  "key2": "2fh6voRnHJsha7R9FqHW43XN23D4ebS4tdB3ke3tU3C3smyphxa53HJYunzJ4eqm52D5VQrBkHhbpTKK859ehF2D",
  "key3": "YDEQi9CaWPHhhhAaVYevVvXKHmfEPGykaoifkw5eVNiUeA9ok74o4Yt2PVqsHmH4zwWzkGPRvU7G47VsyFpy2QV",
  "key4": "4w445iHyh8NNdSWU9FZ2MvCogBt46eL19yKzD4tN2Fyq8NAi9FMBL8nRAVyMupL78q5t3XHic9h799N5uV5gCuMP",
  "key5": "2XJicq8e2hqoxeV74V3LvfPVfuUJSUiyHufsoqWQt1dhJirNSN72vBWKaMCYZybsnEmSW69ACD6KQ67XiSbRDuCC",
  "key6": "2bNuNSa92YyCrrdtBRwmggtkk6vZSCeWGYPejHrohJkVziDcea5Vu2W1nSaAdkT5fJgA5hkfbsjyn6bbafvty3Jy",
  "key7": "2pTKjVNMtvCA1nWdc9WempUUpszJ77ZPbLYXZSnZPExEbaN3vwPadPEyrmE16ka5wX5gPAS4j4pWD3xuULmH83mc",
  "key8": "5Vns7TqSHBMcWqB54bjEiExP944WW1dpfxu6zvYTiVaNE8D3DjBYGituoTuCnqaBEmtghmNobmx9cZ65YnBKvPYG",
  "key9": "2BqfsqmVheng4jNXWxcLnSL2VaQUkc3zcLojEtLGXagNDreBsHKz59pDQfQoEh8dEFURk3Q9UJfJyh8EdcGhJEkm",
  "key10": "sWunapTm7FQotqA9eyPXUhhsWYWpgaa7W4FimJW2Rajc3zdFXYi8HEUy9FupsA8arCp7piynuTxDmbiUMM7H5wm",
  "key11": "5Ste5ceFCu7eNFFNpvQo7MpJ2hMUYX7FihNQVXJxFHVFEsxQr38i1mRjPEupQDWy1eoPMkH5HWtVTJghcawEJoav",
  "key12": "5ZQNmPT2RLvCSHkiNYRSD2DNsqU7R2RDhjvAMpxfSMiDkJo8hxw8cFpz6iLYewAkRhNzcXTvJZbWhQEW3pKWZvM5",
  "key13": "kHo7orjMk4krSrTzf8SJv52BegrvN9FczMEs2bN2AqXszS3rPEKAVUTfuo1GchpBVQbm5fPUA9hgHbu1ZmF9esX",
  "key14": "21uqEQG9us1PHBFhvq97ncbePSiaL3fUDjXs9fEG59bLTqxXZwwrDJfmpXmcJY5mPPWVqt47VVjEsKJmFy4dKneW",
  "key15": "54dWAVfDsucQgpgun4SBaaixbkEmX2ffaJM2sGMVk3kyWPX3RbfWMPWJUbAyFDLqnptSQNP1sf8TG1or7ZQbLhyo",
  "key16": "5HQAfY32agS1ZQRNoHutE3wyjeovUCSEVG1EgzPtes7dc8UaeFEiNY3B8cY9vtjjAofo18jxhcrQ2V8Ryw39QEe7",
  "key17": "4ZqJwWuiFdEGGiQjLTt1yDsttsfdAc9sGhj5iE5E6zPw1X9X5ZAbfpLZ5LYYtHnH8wc6UT7wGRGe4g5QMYbKh2Ea",
  "key18": "22popKnG7Xvh61sRcSHASKrkNhJXGfdk6Ukt2gG3LEWkLcFbedKvcAZshxVVq1P6yr2nMsdNfSRxVofEtPi8dzwQ",
  "key19": "25maUvthKKoQvQWan65kiXMafEKWiaKikPLerhezQe7xZSz48Zuc93Dvvk3QBWzVwdPT9FAgxjSBGV8BprP5S7Jg",
  "key20": "3Nw7nuqB1A7nJmcQC9Ya165zfYbrD2iGJGeBewNyXJWvGjbG4mzaJ1aGbV628tXEoeFnCiyamcLDio9kgFdViXJF",
  "key21": "3VGM3m8ewob3zanVcJ31bKU55jxQ9Ve72ov2EKCd9QpQkWWhsAPJoLNMzDTYnuXvBiBos2gncrr11LYkH8PNN9Ud",
  "key22": "hUGMmD1h579EEVYXUFszcqJ56XBowdiQXvdvioZbMKVALAbz8MQp3bsALrWfNwN99sBE66oAR6BcZ8eqeR1ghr2",
  "key23": "o3Ew4YpgSrsw5b1AEg6NZytyeDXmx6GN7GpFBL1yZqRRHhqMt8ucjhE1QW8s15izg9hrZVdNqBE5HmMGWnXzCKb",
  "key24": "4u4xo7medKzzrypRTUiXv3Vy3tUswgV1fdLWkqMazTydsAw38HcygAu1BHFGwiEWBK35PfUEYp5A3CwMtPriD3T8",
  "key25": "2KxXJaMbT5GtxxpT6gpJVzdzEhJfUquw72hfrW9CPp7qFfa3MgfJidjAoXWTChf9FxiAaLaNMZUmzEaRzrTihs6f",
  "key26": "3VDx2AFjwbNRcrX6efpjJ1EaEgYSXQN2gJdwPr5giAo6w46uqSkhESdsUR2hyPjoAE74ZdMD6Medt18PrCskngjr",
  "key27": "2wMEDPfVadhkMv5WLDGYwWbDBcSbejc2g1evSJjUQkH9rzbASxWbY3AyNEJNKoESxNA8X2yf9Jd9LKY2wPpnx6RL",
  "key28": "2aY4cpSuNF4653iu582Em1ednQwbU6Nywg2TnAFKeEnsZ9MtNaULZ4QU7Mc6WMsbQs2ua5uePggt5KtpjEAABihM",
  "key29": "2Y6NaA1JfDRkWRpvCAo9TZSf9sTqJBh5b4LR1zExMfVrgndXcr26ikyhBkYKrbGooB5LshWAwd7xPyVXnrjb8wyj",
  "key30": "5cfsvo5G4wGG3CuP48rmiRMfXq21pbTAQmiybztzHLPVUFkVvvZCxymoEdEmCprcdU7sKGpN9UaZdYV7Q2AHkjND",
  "key31": "HQeeKS9dcgjTfdcZNoq35hEyLQVx7UF98R2FSKu4fFrtcc8iHtuWK1iqRE9RRAzG4dBi6KZyz1zRbzMZcztNZny",
  "key32": "cg6zjq1ogN3hNQR8rh3Jfzke7ABL8Ge3gR1NyjudWaLLv9E56Nngm5Ah97aJTD2N6hBqh7BLHgJ7J2PvP7xsA4k",
  "key33": "2DMeukdFQSbPKTfJ3S3iZBW377q3Cq7SzVW7Wwjhm63N8Eb94fkjpocMJGGiVhcT3Sedbq5W8DaGAN2k8aKLt764",
  "key34": "3Gf1VKPDZYTVsfbwePijPgQAvGzMeGVyvYEmPVKCUJ3KS7C2jrgxuZKkj6hRZ2fZMmWtDbgYCghpoJBXjBpm7JoF",
  "key35": "5Poa7WYVsgC1a35VvLhD1dEfTvjMRZYastZS96YhuGsz2NL47c5twWPkqiMYXH7DaixCwocNjY31fzTVLtwPrDfx",
  "key36": "8vjihxSQbCMWu2eDmJFgf8ZYi9ftiEsnGqPZz5poAK5HXdTpvF4SoJwmmD5NMjJeC6oiqcn4u8VMqrCaFKrKVHt",
  "key37": "2eK46BCA6VfyX6jFWpydS2tiMyXgLNMJ5S8z2MEfveyJeyKByn4X1WJspfLrHAcJDuDwiH6SxLAbEVnZKYeoLEFG",
  "key38": "5fAkYWkcCxTjNum1zxo1C2wR4qGJc9rwR8hGkT4xmKENz5fEASRu23FfdmZxQWHigkSMvfKcT8WKyQSpabStZErz",
  "key39": "24Ze22vYaKhLNEeLmozj7qCGtr3aQrsCWQF2ip1Y9dYoXjuFRF6Lqt473RSE7kcQbwiLgGcqE32BLJqJcH5pow8o"
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
