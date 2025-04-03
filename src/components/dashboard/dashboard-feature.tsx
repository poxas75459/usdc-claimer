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
    "44qUzj2gujz9NSMnLVhePz35rUUQyHm27vAxZajSieLp7YtXpHcrzc8fotW4Lvj6FCd6GTeTH22fpw142gJFiFCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47mHamsGPWHWSSBTsUvDySCYbvNwgnmB9GfF9ReNzdpAxcWZspVXV7vfwhWsCWKNAWaMKgL58sdgDoDxGBuEYqEu",
  "key1": "373KQEUcxMjLt3CP2LbG5GxUBHDoZZg6gKvGYsJEfiw9B9JFq5CmvTxm3DDA1EcHUbzPHs9E5SYraE2PE1TZu6em",
  "key2": "4oJnwKHZrtHbjYwXDpbAqKDC38og4ShajBWe4cs9uN1o6gBUtTichPfZnjmuxhJa4jJiPJhDwPEebyewsskpEFhb",
  "key3": "nkeGt94kBg6eAs9cFV1qXVQCyvizDRrxvfjRKw2oATPsyBM91cdLrAqmGDSTz33r7jrQtT3uy7pAB1QeeRbR1NK",
  "key4": "4WeXNVUeTDap2sZ6QRssaG4wgkguJB5Qtj5pXtn9XnXkhVnjCPLoVszhd796xweSg5G7ARtYGj9mkbCbQ4uD7sXA",
  "key5": "h8xSLgXVsTGBrdYgHdFk1eUWJSD3Ny83ax3daauAHmw6s3nukna2ZXjiikVu5fQAMJFHor7kPrnBkMW75XxgUWi",
  "key6": "5dPtSYc9Ny4hGFbMXywKrFayLAiFk9ytJ9JHLH7F4BmcgLMtfkHEj5pPN171xWTL4ENmdhUgbmoEAEgSw8jmWM6x",
  "key7": "645RaiAot7v8vyWF4nvQP5aHZhWQ36hGpN8dz8kLTkiZVCpzTJd7YDDVB34j5upf8YzGkaVZsaTAKdRsks7muGLy",
  "key8": "3EjLMHTqAZNmhV5fPTHefsMJPTc1sqfMvM3h4gCPoKbShCd6p87V93KuD1PrjukogpvKCTsvcg1bYeNPi1e2RJyU",
  "key9": "4LpvJJuhga8bNVwZdoR8XAhYRrgD7Tq8v1HHSeUG8QH5ErM67NoDzsgKJLmRdQeKFGFeyeWSxBnNVHSwR8nsZ2P1",
  "key10": "5xgM5KccTbshAbqVpZDcQ1TCRJS8ue5dbNo3eUo6Y9ZRwqgU1NeE1Vxi7ebg57h9gPg5ty8GEddSvFEz3Fyx82oE",
  "key11": "25f1AboDXMXAdpz3aG9zo12MHMJhmqVVPoycyp5RduDsw2fXWXFJRWvr9aCmcJqeqALTASnC2rveKQBPAqF9Kvvp",
  "key12": "rBPrtVNjYLvGUbcNKwR6tGCGm5kYQczFnnoheHheEXpwR9bQETVgtWA4GAHPjQXmDkMk9fNHMBqjcza5nM6Fcaf",
  "key13": "3cjHEdAbpn4yq1RPEADYkLZFbTiPw43Ca7yKJn47Dzm5LRST4rB9kUtYg7mUjpbt1igQs66PMq4BSg5CRCuNz9MF",
  "key14": "2s3XhGDUNDrzGgmFr7H4Q4BjpazbH6sQNCDTAHDo17z3UaqhXb7we8unhGkjSdCQMGF8A2sQSixLMSuGiHmuqWe2",
  "key15": "2jnm8yYEhWoatyax6hFQMsU7TdrsZidRCZ8Y8jg735w4dTLauzhJfKojqFfmL23g6jWvZmZUW6TePXxAHF1159KJ",
  "key16": "3Q9YQZe2ziQFokctrqwvbkHn5yw8RqxqNPmFSqEZaGWi3u5e2aWc9ytAnniAvbsJfZBshLg88YeBduPtVrixZfUX",
  "key17": "2U4FdtkGjNCKhJ5DVoPkAvJnU7Ww8EZDWgUcbUCn1FfJo1iVMHLiUMPFBwDuiGxaY2migpADpoSazDLu8PKDUB3X",
  "key18": "vUQpXJEpDojytTNZzfjUsvCediiCK4y5k36U3EbrXZjzAXHeqjvVuAL8MJT5TVN4CNZM6aRJe3UivX4RAQf7da6",
  "key19": "5ZXLWzDHNDTscQs2FbQkrGkAt2U1Uwp34o4xbwveXiZVNCuu5Sx8cUkWj6baVhKrLDMJupK1QQRC3gjyK77jPoep",
  "key20": "pvCRvraEiL9pwrc79zp8WQc6gc1KkMXbd3gRLStyVriCcWFgaqk9YPdZYtF6uwMFbHXjVNcwqfh5hg8ty79e9kp",
  "key21": "h7yrx2JkA4qgkBbUtyMrhqdVdpS9qcAnSdWADFEMRBbPh1T7sPP8s8o8PVMLVobsLBYjP6V2jkWELy4Uo6GBHVM",
  "key22": "3odamGNriXrsu2XvN3QUVdqnbARS3wH5yyUV9z8yLyGSK4W8kuMVU32MhbxyQtMAJHSMddnVcvVepoaAcxmTVzdG",
  "key23": "5QrQYWJTTqxZP2XJA693zsigHtKsVfwHePg61Fm61E1Txw1fiAq8pbFGWvEfTaZ8cnmWksfhDbBh7TcjrHRynvbm",
  "key24": "3VtGUqgbFDM2kNCfXuwehrAu2pnqivuMQqYSB8GRjKPyv7Dm6AhPQVr8oncHGZeByM8bkJE9migmXYyDwAJc8J3q",
  "key25": "4V7duxHrscmEBwjC6E7ELpYZPNKJHPAq1i5YJ7CdoWNvYTUjTNFqYoy4FiXWKAwRJZ9DDQaNEzqvSEWLXLfou6WQ",
  "key26": "5HNZnzeUNDefVYaq9wUJqvXYj1exPUvbWD1VWXNkS3W13oS7euaC4TYbqrvvGdTX9kxnq1ggfnMYAx1D4BFNpemV",
  "key27": "5vSyXLiXWWUPVAYGD33NXc3xDpEpoSnqueDEeBKmAAc1hfJe151WGAbAjHnrLvhbT1JwbZUeWxDfe8f3tGthj6Nw",
  "key28": "5DgBxYTpyUjYuMdBCWKGhYBFZyjdHjVCtq49wm36Z5d2EzGc6Kxse6PBStyVeH5cQWaJgX7pUkxPbPpSJYpzBTyA",
  "key29": "3GS5AmLo2AkLxQ1qUMWQFxTnxScmJkQwFBF8qudtkWi8S3ibcf1ZcpW54x4reG4BrHAmk3LY5bNyPYtsyYy5KChH",
  "key30": "pvJqcZ2poRogkDSea6tn6tMrUqCpePtFBp9RyCLxz3ZLuFKJ5FuP4pX9rAuntM4XUkx3iCnE96cx3DGKbjyASyx",
  "key31": "Z9uJHCqMqRBvwh4y3Uct8rMac8YUGvTfiWDcCTC7Amsms5LYQNtaz987TEAJf1MYySwj7CUuuXDzmfpE2WWBKrj",
  "key32": "21t2C4fxQzSXaZp71siDYczMp7wuLimbPc1yxynU4QEGN6HttB3iRBmxpv3UiKo8LgEniSQ5UFMe3YfBjjkSPunz"
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
