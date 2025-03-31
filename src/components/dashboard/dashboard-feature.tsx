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
    "5QdVJEW3nygZ7g1M2JEfC1u1dBQ3dp2wwPWUjHUaiLBPMn7i79PSR7yTnjFxUk6agfBrSsWNnG8YZALc7SAFddcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PsPz4XBxZTeBEHWBqfUwHVcgaiX3NwCLbAhw1iDrLijLTjZEERcoMXqhj2XJx4Ssun8bjhR7q68gm7dfHZ7efJQ",
  "key1": "jixwupfsLaT2jH4zRuSxzS9NFzuadix7bXvjn2pULRoNNauoXdfZLKcEoVCA3ntCeaHe86ZQCC25HJVru4PQdy3",
  "key2": "41B42fxTXrhEvdpaM3b4kAB5pUZr4z6bUtxGrrUg9q59io91uvivm7zZM6CSjtXEbh6f8gfxZRmNRviEYvjx3QKN",
  "key3": "hByRk1ocumCdwifJXy5EBDrbXdrirhpuDPwCJu5mDTFzHL8RjkCmDuQJFLWjSnWmCuEjTTHjbJEQ72Ax5u7uYfr",
  "key4": "5YyG1FZAq7oU7L1EfzyJrJmfxdwMNFbfborDmG6wbyADCjHMviCQj8Q3JzdxKZS1x8oDbsbvf5c5YYStcTq79VDt",
  "key5": "3nYQPocVwmAEhqg1yLYXpQa7URMEva9YW5jFSo513ywYP2oz4AXg4oJFM3kGaLdq6uuzADDfEcc6MCwirdVKiah3",
  "key6": "wu5ZT8cgQMhX4MMxs8fcKyQ1mE7jVpJxZouTCAqCQeuiwtobLVD2VrXZyGoF2rb53onzp2wKURzRJjm4WxzQ1vB",
  "key7": "3qCP56c7esbSTWZoHJY5x1qVGQSrno16z52DnpEjZmbww1e7utWx2hSzpQeBTrb2yseaMkxGTNeXr3DVotrFkbKc",
  "key8": "3taY8AiCX3xfKeN5pEBgmbnyxJA7YoafXRqeJuJkzCrG3TgDyAzW5nKEQq1y28Rg26AdMMS6koLcehyprCYSH8EG",
  "key9": "3mXSGLi6qBjEHr8ES8ZS17nxETmbCvipc643K6Vkv98ap3cpygWMa5JU7aZj9Attjpv6uM69ft5hT9VdpBnaV1jk",
  "key10": "3xAf28i1ANsM3KKxaqVf44Uz1rBuZs7E2VrtGqUpUDm5645Cw7FTu8jXhwTQ3yaT8thwW7LhefiHwHBPvq9X736s",
  "key11": "ZP5BhtLaDVzNA3GH7KZ3RaCcYqgt1btQfTyKNgmxk9EX6wunXoYc3Kk8bVBeKRjgVKXDx7jjrvXbF8kaAMBB2bg",
  "key12": "2oiHtp74UgACBVeG5XffoP5nX6TnZacBVkJDHKKWj1yaemAX1b35cTbzADnoqdbzk61ApRo7Ybh5wiL4gJEgGWur",
  "key13": "52VGjkb5yuSW139eyGswLsHLF8fKwXX8c6dg7xUdRoxChkFKuBLebdVhmp5WbZNLru6j1dwbSs1vfVcawDqQhdDk",
  "key14": "4J2ucni41X25UXks83Jgw1mkr4JwTaRRARBLXiYJpMdxcGTUTjMLYc3X4ZBhRyd295cCUsDDdAjo2S1k4TjUEeXq",
  "key15": "5gzMMZPuvEDD5TMaBv2DEmV6jA2L2MbYRxboNUKF84DWBpDrhrZieUjQnHXqwRYbUGeS5PXdd9mPipKEHpaKf8CZ",
  "key16": "BjHLB1T2mvGVoMTLraRud57xDrQWTfRYtB7LTTL4XGhdearKa5F2aW3f9SbhEA2462mZzNYRasyubnFB5Dnbeyi",
  "key17": "ytJoAdThovRZZaPSuBpxVVJoSAu2oxXKZu88MuWmLLcnyjHj2ciYjMKYR3FB4rWoZ4Tx2JXw5TWFsX3jUfJYCN8",
  "key18": "2jkXKyxSMypkRFDqycbRmMbkyce9JrZ6MYKkbYbqP1SpCzVt1RCrqK5aT25CU4fjGUFm56ta29YCzLahK6EmhwRB",
  "key19": "2PKpLbh9RR2auACBRbEN2mfxY4eRuvDkQ4Pg5SxDMwZkWfgHCGrNMqPDZtDvpS5miSMAJYxCXtVLJ8sxrR2PXNT1",
  "key20": "5duzibKF95oUVfGt6rkCWAgJ9Sx4QHzVS2LyLKpcg3pR5ymSREqzvtrYc8Vg7EvmsbQjTDdD8DwSn7v3vScFqUwK",
  "key21": "2Wwku3Ma7ZpaFdCcqevUnFaqqf88nRGb1TnvMPsE3sv9RgwoMD8WH3ixengWXvnJHtAqtCXYaii4tDp9GddChyg6",
  "key22": "L9zde34bKaZDb7V4CDbSoV5DxU9dnTA4eM6bLJ1sCrAFDqntvHQRCQuZ9LT9MLQ6jSq45mfxaB3vBfKPpe7x125",
  "key23": "3jUybfSzkGEPG5eZYD4NUprdNzVULoXQsaR2xmfnXbWJq24rr9BGJq5UdfhkTyYtvnibi963QHC5gFsRRQFDCEVN",
  "key24": "5bRJsbopPWjwTtuLnxotsY3PBWduBcHCLPrCQeumfjxqZSu6A35FY88r33bGYuui8KuaAoUx8hkzv7vdKHd27hJf",
  "key25": "5NwGNT3cJKrbCKXQoqjFtyCiebkQTZEqUv1AsfqBj842EZsaRwyivPhFbG1L5HBZ7na9vncW4nqbH2E3BdWtaQnd"
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
