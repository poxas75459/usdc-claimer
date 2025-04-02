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
    "4pst3V78emThy97oeDnum45VC8hCoNwBA4WqzFcQgyJgQ9nfZR17bJ4xnZXaGjo5Lu1hjckHE5ibamfxtuaq7LoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cBefDtVn33FWp5fU7QktYkVrJyRM5bM2832NYw9myXJBUimiYgLv4D2As4jgLW3fiGaVDfV1XTxqLv6NNznVNqS",
  "key1": "5qrRBVLjNeDQ2aVdkm8MX5rnPA86j4Jz4SsQC7TB6DiJY2RSxKks8vaUnRtLMs6tLRpJFndptNMMevRY9MmD6fp1",
  "key2": "ZtF1MoKBWScUp2HWwLWoG1NLbY8Yi5goGUekApWreuR8yNUWo6QqnBEmpNzzq3fXd22kjCd4mSvD3mTnaJvHzLQ",
  "key3": "3xXJLYwvv9GpP5EznLEN8zk8ycb7WhboNXsiMsHBaTErYyQzqfhpyYJCsYypftufjDYwB7wkWcHPFk3yMadzWFfQ",
  "key4": "3AqnNJp6WgygdsJYwwq9Yaw6PjTqna6yBRbMUjVgs4mPdCLTACxWcLtERV9purJ8Wxa9s4xeHTCW1m9di3VWWXuQ",
  "key5": "CKXeoyTXFLf22qvSh3Fy2AfsTw3HiNXdWBn44AfLz7tCpx15e3ttjYfJ9rmavSU7M9H4J5aimVPhL7k5q7dAayU",
  "key6": "5T3DqbifMHM8D5rD8aG567DfdrgiPBNKwfGedAQHYm2RqkK5GEseF8c6DwpffjvGnrb6ogijn2qv7826fYFVDoek",
  "key7": "5KqDyt4PyCcxkeT3HoBVeVenkksnSi3WV3DwF7nKJYpqfWnN9fHgxiKbZ9xYNEvGw6W2ncdYARe4dK8pc7Mr7nAF",
  "key8": "269XTPWzVdxaibhk3SKjx3df9QJGPGond3BM2T9xcx4AHcBjdzRRk9Rf8ViTmq6oGAeaHQNDA2fBRDQpRHnc7fLw",
  "key9": "4afA2QU6Gdpr2ZzfUjni84p7VNXzPF89RrDHenWDtMxDHcL8qSYJRriQuRdzbWGawMvXS9yz46MiQ2kCaUjLoEZF",
  "key10": "5FzqQRLcKCfEKtxNBiPTwcuDmbaYtx6GFbLkY37iLMj7BcA987p6i91wy2cM1SwYcJ3Sfo6dE6mqFvVTsFBteq47",
  "key11": "3Wq7UCyFg9mi7wYdo3z21SpBd7gjoR7RM1fgmBvuLr5d69NWTE2fbjNFKThQrWv5wabN299cLLrJQbLagkHV4Dr4",
  "key12": "41p5abcPxMWfMxhv8PAqJWqeoUe8JEF9FJ96GRJ3X2TpcBS3PkSiaV8JnRWtuXhwgCnCnYkvoER53tqJgMhjuTz",
  "key13": "45ZJGdzdPXTXQQDVf7F335DkgwRZGyz3mVdYzeLw5F6q7WUAVdvCddRLtMm98vjsNvJADL6MvyDzG7ddbhKo9bQE",
  "key14": "2kpiwzsjYWvchrZ4UBmmvDTAdxYKJg1FVGf1Yiao3TWb6DzMmGK4z7MKFDDb332jAVLzS5T9RzzpCPWJgiF9tAvr",
  "key15": "2SfW7Co1zWA7DFzGQJjqWvGEm9SmBxud2Sh9QKP4jGE8e2fQSXeCBDkzFfBaXQrVDYWotapJ5tP8rR24L5b8bPAX",
  "key16": "2nNjbz8sRTo4aW9m9WrYYHYvrrMkW3gsFhAxK74crjnEHeb6u7nFANxJJ81BbusNCv3eEX7QEP9fzsj8kGvDbKD7",
  "key17": "3FGNr5bRA1jqVfGGo8EUn4iETCCarBtwMk5pwQrYjwNc8ZGg5f7NzzWryi1rHFQLB3JF5EeqYwxsdNJgzdVkWKaE",
  "key18": "2dD15MJBz2icrt2cg7oF2SDvy6zUtZwszVWx39GNCKHZAC4VUG9Eg7vRB39vGSsrHS9DKXrnzkThxXvSWUoZNgwr",
  "key19": "2SFxfBf2sMjEd3pAHRpMCZRre2gcdK4BxvCzECDF496WkWAXFki2xvkSG1mBNNSdW3A8NUah4khawsyCnKETZkyB",
  "key20": "4xdSdrgk4JrZzTAYW1HJeeq1SZRgW5PaUo1SfHSJ3hJcMirQ9Unr2f5Bwb1Ytpga4ApZx5Cy1P1Pey7ewtHhbUur",
  "key21": "CJt9DinvQdSUhLW4YcAWizHDFJ2YSaNa93tbE1a465SA8NPv48hnk84yP8FvnvpNRfbzR6JHf4VivXyi7zQZtkq",
  "key22": "yWQYPdfd9cr27Su4L2PVKUWjbQfHWA9qvvjG7qi2UiJrTdm985o8M9Ts8q3XRJhzGaVyU55pWDi6hBNQDNBVgr7",
  "key23": "2rfZaQBcussvB2bEd3utvNeVnQAB7cEVCKsJTXWwcMcVzRciKFjDHoTXgjqbL2W5vhJWGKVdwChgqY112U6ijSYa",
  "key24": "53JnAMCM1EGyaA4Np5uREzWwQY6sz3AB4RHB9k2k9VyEP8Ka6DyE9r4aJh6R1tUV93k77RA9PaHJiafE2usFhcWJ",
  "key25": "2vEknhCf7qjiopXKr9FjYSMWm1KkuWbXMdQ4WsYBqEv1Cf2c3o7cN7XCGKximeN7yTPnTfntTWVuFffyRS3rVAPW",
  "key26": "5EajQqNCQq1WaN7ZtRgCCWPrrWGbMaoo3qKi3Efa6vn4NfDtg4mSAJD77ExJbGErpSJRX66SeesUjuQ8Bo2EtD2g",
  "key27": "2aeFFrFhBU8HKrkHGDPLqtbsgvHwb31grXH6EsKMLuGs2r1jx2g29sZjhkFp1apvoyzNmpBAt1hvo7716Ba9eSi2",
  "key28": "44vDicQRzsgudf1V8g11gaJTe1cfxbDnZUBo9mrLbmvGmf9JpWdfveVeKvXWGCnYmW9LzpJmoicEsB4h6qjVZaAG",
  "key29": "4jABVn4wjUVcN72DnUWZ3aXvRxWZcpeDv5JcNipfpbzM8Z41b6huNzUWtiPmSEK1orhgSGLpLTpeqcTW3YLUEGrM",
  "key30": "4zeYS2SMH6XcTLJ1ZGWcciz8GnUapFe1d6RDKbfJFXddUh5K4WQFuR669K6ggxEsNnpDCW7jMsv9RVzcTmNPrYKM",
  "key31": "2W6v9v3MBYTaA6jQoZiKTsQvAFajmbHiFjJ9w8g1FnYtGUQfCQc6naoRS5HoHjgKAggvU87izMbt73uf9J2fHNfG",
  "key32": "4RG1mNNRYh2592oN2kaidcNLWLn1nW2eKtATg5cmbbHQAZX2fN4zfh5mutkw9kp6o2hTHqwtMXyucyfyTeUZp4SF",
  "key33": "4wD2jwQNHD5AsVUstWsmQXcDDMfdnSF4qkAgkBDajtDCj3HzPuDNd4ki6LQMPUcz6ubDdPDpcPA2xjHxMTcMrHUG",
  "key34": "4LiZYvL4wQoJnUoxxBojAU878xAysw9BfDufbmxpzurs1sc7SGXqKm7hstt7at1JiM46D3JzpZqBoKKs1dBiXUwt"
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
