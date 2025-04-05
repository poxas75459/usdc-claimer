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
    "4MBRwq44C7nVC4wuE64JZJikhwFyvuSNCLtqDK9zFByRp8ni84TCuKpTV5h5XqH7p53DZKmDtnvwBSm4gbVCXvVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ByoWsnoScaBM4gXYG8u3ut4vjErEco7KkDqeLFeBTMJ37ZZeqTFMqbRVMJAEVJP41GecbPoZ1PBT9eJ9fgc5ze1",
  "key1": "3JENGRZp3WDgP8xcrVdGPVhaSa9kz4wPap45AVbiHCgHSCwYR79NTJQjGYnuuhC2JveFVz57t2nULurGT1E6qhHA",
  "key2": "2xhksWAZuKkkkhxE29LxBTckgMQgR917r3fW1QixoNvgLBhStjYFhApgkev26rCsC57w1awCFqyVzpgsXEoEF4pi",
  "key3": "49cHxJKRuWS1tEcb4KDwMcaBSVNdAGSDNFX7L4n4Yvgrr1a7VUa9Pr2H9WJpPUZDo6uADtFxNguUnEuvYgsS1EKq",
  "key4": "2cemYAgb9sjXZ5KzB67jmV8gCD9ERJWxEGkWHXrjTiUPQt5UUPmzyCFZsMcrTBbb5TB6k7QSsC3oZpsoTGs9vYNs",
  "key5": "CG4bxqC99C7UQrtr18ZKZGimjkWWoXa7mrM3u2UNoEnHjxqBcXcNGXxaEeq7TJAJbYCSa2aWTax2GokPmbDdomd",
  "key6": "7kZ4oAaV28EWqtnRWduaLRiwL7neAraydWdib2FtRUveR34mDCeTiiHVKjzBjPdjDb7kP9CHUjL1WBLt7iLoAx3",
  "key7": "4ySVUeS7TdgYUyEQARvCbkXN2oMwDzpxNCPD7ap9TSFHcR57Sy3XV3dUcdEZ9MiWz9uM6U6S7nCyojkYT1aSVXor",
  "key8": "4F3H9mSa7N1fXgrVTshaiq7eXa87ozfxWJY3kWzaEjN5BHRDHo1rWd4kJ6LpxjAWU1VtH5FUZaHEuAunh6oWYQ2Q",
  "key9": "3LKMNTK2nYtHDNhLLrKq3Qr21C7uY9EfPwDysQWcy9LNqiL5G3qJ8C3JtD9s8RmtpVD7HhVWJuUqrUpBdNhfmzEG",
  "key10": "22Uig7bqaBX1JTxhhwmEhiyzCVQch6wmJ55TgoRj2jjMVwARfP5KztSLvk9XtwPPnhFKkR6Kg5Arz3v6dnfyGV5G",
  "key11": "6462HaDqu6Sd3V6tym22HJuPLg9P2NNLMoFiNon45H7RfXx8TXefkSRGQhyqMWdAo8f22qVPVToQUnVmbetTeiPs",
  "key12": "485gM27bKL3spJkskJ8hk38x7yytA2XLArj8AK3y6778vMKHNeWot9zKP1r9cx7WsaDhjjnbK9Z82wR7Z8NKXvGa",
  "key13": "5eNg6ghnjh54xmrcuTyTNGK3Tbp3G9rnzSP4ckPj21LPRfeFqhQoiPYiAcBFfZQKhwEtctUEa6BNcLbF9t8pTrt7",
  "key14": "3shPb44wRsH6hBFheKxKmGMHLCaCgS95cPQJrJzKCSMjwiHXqysLaeGPQCApPHVvFxSrbCvhZ9AAfyeWCRK5ZqUo",
  "key15": "NM68LdifKtEFhQubPkSWHEUdz7WrFAz7XS2koXtDQuEWUE7njFCDzGnc1Xr7ZfzKKo6qz7V74dQyBUwxjc5yLut",
  "key16": "66TTPAAvwnugF4UUYe5fLoeGsfbjQC56kK86xdGymbMyTtFUAjgLnALvkVMHAQR8kYjbdwqxfzqF3AzCRx11C8uD",
  "key17": "2hrrHko4q7RcXkAbXDSK95sjv5Sm9jfteiBjGLVZDLLfVXMwc5bxYgFa7nJWzUdzEeEmqvdHsi66Dd3FSUPLajbp",
  "key18": "SGhQ8sRQcjQg8UvuMyW5oUVFoxEdnE2ze9VS7zbno5wJXsPMU1Zb3sdnkbE7BgaRZnHgfUqfPiWN4Y67mLnHXL6",
  "key19": "4YvJTU4BymHMEGyfpyosLDW5DYae2mwjSCfn239VXRwxgRuypiHMhuXNUgSPemfohMaYXKEnF8CoE13P48Fxk3Z1",
  "key20": "5Jik2kHPQUFaJtTMhbkhNsRVWAS7vfMFuPahnbc3txQjjDQVsMvvZBCyS5ukTrQ2c4EdGyeZFw7FsBAfKNbAdNkn",
  "key21": "2dCWmhKPiMUddsHMGEuVGKY9uCVTeFpfCcAF5DfapXUhxH4TYFLBHqxNpyWhbjFvz9k7j5qmLQGnG8pAyHSQ3mPx",
  "key22": "4i36rkb9SGQUsVmNZddZ3abtELfSDBMdu7DjTxjYjK3RnS5WK69imx6p3FTXEWAJ7VHxbtBsHfugBtHUVighFvhD",
  "key23": "3tZenibYwVM5Ev3DTWuom5KoXbPfMcA68DcJiAV9E6nvMEKduHcZoTe1AuhrxiQPge9fWLMzwTNmFoDj5zwa51HG",
  "key24": "ogXg6aNNH6256uB2E5M7vQrNxvYdJyhyFeMatkyThUbgkDFVaMHj61pyzgdJXf5oSwsLy7RzojMKSktuGf6i3dS",
  "key25": "4mySPh2wHMyDheYgQpumeXbQ9CDWbfzhJ3z67x78q1dnQN9241CqsNSFY8xYyDF4cmVsgvanRdDvVjQMG2NQMj4q",
  "key26": "3LKGs95GgHYnU8VszreQBpdv8W1TnBSz3cdvW6yuvZ1C2g7A8c6hpeQ7kUAwWR4PP8aDiWFppiQFabEV7iX2kwTK"
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
