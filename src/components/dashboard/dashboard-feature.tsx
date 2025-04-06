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
    "STx5Neip79CSim4xDECTTJzrDWQrynDXA78ht8oApmHW4uBNGXw6XtWDBTKQMubkNU86oNvnniQNNw5kvHWLRMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WJLEAKKvXAo1xaW1VP6ft6fGLmUoNhMJNYn5yicdQeqQiWFJirGMLgTfFsK82rrVn1oFNMgJQ6eS1dYUpBm6Qp3",
  "key1": "5WiRooURvP5wygydD8SeKF31cAkRTG7wHzZrec9LhBQmw8zHWsBeGLUrmxbZ6suN62PtMbewVijBbgEUGyxQq5kh",
  "key2": "2UKywRSmdgcViAZ9RmXZ6TgUyKCdkwLjMo6GzZEGnUaVpMm8iK8b1bcjScbfGHEvZWrK84K9fHLfREkqpC1Wegsn",
  "key3": "46Jxx8UzfQFHuqbo2ufZQxnX121Ywsd4APEmjQYLh7xSPWRgrD8FSEHJuySNtW4vAydB8XgdsA2a71b76b1amwrb",
  "key4": "4AC8FZZ83P8YpnnMq5B4LyHELF5hRA5UBiwkWi2Q977SrXDnF1J1asnbKwKJhj47CdCMpNDct9CSB2idcAPzNMvr",
  "key5": "2FQGBEjScGpRxzMffzdioKsVbj5KGTbSE5b4gYdWPdPfW2coSiwsJn9gm6H6hxxoMLfWWXfN3DvCnkBCP6iVPNti",
  "key6": "5As2QUHbbnDj41ywyUDVaLttYYS9gv7nMDCcrE3QgicFctzNNeHdSyj9uHNCSBAiaPJH9oGqNvGDBmdBgi65fpUD",
  "key7": "5qsjaP2Ua9F1vSnZU1ALrHn4ufxL8VCbuNpNB5WnwDzaFUAJbapvhTj1rxGUydCUCfSDhihytv6uZj2tsJj8fRNX",
  "key8": "1HeUwU8Skm18MBrfHcUi6QyFBupZDiynVne6mNBtj1Wumiz77YJQmgPyAA3fBoGgGaNJ169hiJiPf5tJFgwbRbH",
  "key9": "4vDKT3ffsvoVSsosqMkTjXkWQ8ZmVmw4mvMha3L8vGyNTDY9tKn1CKBwqLnd8xmyQDqwFW8tiLAMN8YQyjhRD8rX",
  "key10": "4yhjT3Y7fwof6Pq5VoKMbx4FDFMYTPjhfexYADry7yS7jQaqsUwCjGVodMo31ru3B7g73Vuy66pbm8wWNK6Wxi7Y",
  "key11": "4SsNysg6wrkPFLFU6BkeUNYYvNUm8PfJM5zewLLQJ2d8Mb2p5yRVLPUpj5eGggCwrLjviT92M1TpKJtHCUsShG1T",
  "key12": "4yt34EM8Y73KHTZUMkTVj5txHxz1M6NtbWDBfrXR9oRC2Z7skkMzXRif3LPCuysX1KJPwnsK5oUCzysbTk28xzpX",
  "key13": "4urHRaSQdpTV8Woc9svgDeoSCvfJkebEAqCNcKgoDd918vpP7is6EvJsBqr3zdjaRN5SvnVGFr9k8y7H1USx3rQo",
  "key14": "4z39BpNMJvK4gifsLxPsN4JYS3SkYcSxZ97LZCNSgnLjM9iYc1QA8tyYPLjaSHymDrC1nURh7ZbUzhgKiZ5hbrZY",
  "key15": "A6rXwoegJmXF8Sk4eryxSf7SCjjSA71UHwynLVCuS3mtD8L3DJo7WFMyCHpLBJvJ6ndatwdozgwkZuUdvzmSjee",
  "key16": "5UxDtDK6SzmVFZDdxLP6nAjRRyaEcQKYChX4eZRxo2WCzmKhuQ6vkBbHvG2JFffVAHhcndgmrtPvWaVpC9EsdYzG",
  "key17": "45DwgjbdfTELs8wzef3o9XD4h5jbewyypb19pfULnyRdPdVh7GPe6P7MjdQ4PtCeC8t1QZfcUVvwn6JUyT8YmXBB",
  "key18": "64GgJCwPQuny8ZSb74zf7w67mdrAwDHgSbybTcHKsK5sp44DKZyZVAK1kuLVMUbGiTLyco3dxLRSfxEjbfiPy4bg",
  "key19": "5MTkJ3PuX9efPt3Grz9Gep2yMciLb2sCqQeeQETdKk6LkxkrMqvMyKgcqJySV5XzTzrRQvMsmXMSZu64bhrrk4qv",
  "key20": "3KL6Trcoh9tG1RnxbuqYKYQuHNCVWePoDyXrA1QaxmL6pUD8uv149premSG8mALLpNEYR1Aihg1SdFtjtBU69CS4",
  "key21": "2dJgwphVcHVjABZYza81f4h2uQsy35WeLD9LaEeeoSqmhqQt3Ngrhns7AKbqVGqxD9K3VcjD8kJY9XQEujKveKpz",
  "key22": "hpSscR3FJheVzmpbJetCYiiaJbTyF9Pgauf6fC7MCpyH3JAmcSW6rnMu4uG7KKbwSPp1SnyrzSQBjcprfYxFheg",
  "key23": "3VyWxtk6SphRTbPi1PM45z1UHDCsTXaKQrFvEHKWh9sQowS5A8NohATLZshpbCP2c8PtcreEE2ysEGoFxRBD1Lgo",
  "key24": "636UvA17vgkb2ijiaj6We33n88EkCnVpodPWJtkFSwV5V24phWx7ec8jDpiQDpgdh1ZLAD5NE3hBcNoEAbREx3w9",
  "key25": "2qRbCtfaPjN4XFDkfmfagKKcnE2JvyM3Xr8SpXCy46bcRg5KGV8HrchDKHUR1xd2QNj6cytvH6uFUKYfoW5R1WKL",
  "key26": "2qjxuEsPswQDRy8BeKLzNSdfhHFVWAvR9cqkrKv2x9UVrC1vCTGuzfJ2EFHuCMBCLeRPn5uaQG1Gpty4egnRTsAo",
  "key27": "3xqdRevtzirx2gh63RLB5LcT3fUvfuZuVKfQvCkXh7X7s6DxBDSsX6MRzzL5hx2We5VGCTsNgDT8PQb7hgWwW149",
  "key28": "4qi5WjMabKC4Sews9AZhwxoyrdtYJJGoxARwkSMpUJHFt35CMHmzUhtGGwcoVhPpkdkMy4wHdZJwrAfGVitwkWGP",
  "key29": "2h96fPtUng98w5ZJjQvmJZsgYgVjJVTc7FvLhsNdfwuFfyA97gVd1etykxhfQU9AN4nrkDdH9n4cbAidrXRhr28b",
  "key30": "2qKajD5Ea7brQ1ZeRCTRE27iwvXYCF6QfYhPahoYD9cYyv2swAeMdhQCRnSuG9odsbGucahnF1EpcGsSZ24qXzCN"
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
