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
    "5ya331Cccfodje1eHVSW1PQoSwVzVgN8pdeszNrFz8mA8gybcy453p3fG6V7JF7oMS5KPjfwE5KCHBboS3zLjPkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26jXpxd8VQN5tuFFAvBWenDKgpganBDTSJHtQLWWt9e16UgPR6QRStASoak6P1sDtnb7HQRUkS6rZWSekmmwaoce",
  "key1": "2g1pe1v4U6DcEGU6k7TZhrYVTk5JKPWjyMk7gPj76Sun2xyymSkRnHksXPJkZNNJAMtwZ6Qq29aJoYyohijeRCfQ",
  "key2": "3MZn1XXPhfMSVfN3opgZ2Cn3LEmB8PpiYYmAG7A9huTf5dj5ocCQqqEF5TQAT2yqspiADBny665tDb1KXPV6QL3g",
  "key3": "p3K7a7EQcXBZ5aUqsfx6Stmc3HbT54whgowNuUPwQDBJ9CQH1VX5CVukPRDnSLwKcZKhhQFduJz9FNM4G66UJ17",
  "key4": "GzpL8xc78EhqYJSZHQtGgxEH3MxfsuVoJP8LBh8rGGaqgu4PxPC5FX4bZwabCpCQPzvL5aq4g9iseiWz7j3xLzC",
  "key5": "ndD2f6mPumT5566oJdhg52H3vhHqzTAruXEc6CGLouD8C4nKJmecTUSz4LHvRXY6UheZQXJPecqbQ857ESMdPhP",
  "key6": "ym3geLPbSEn5Soe5cii3aTYdwyw8gRVipWgkiHY258rVKNjkZYMkxqrfaFqt8TvPLbvUF2BrXRujqJjSXmjKgbA",
  "key7": "5Lr4sW4gFPsC2pT2M6JfPjFwHqe8jW1NUKurYrR2SKSEt3236D8wNk66fDF4k3DUyzgDCdfV6VjttrskDLbRNhw4",
  "key8": "31xZ8yabHNHiNDcPVGSxcumZ4sTxGhVG6MpVbRg5NEmpKvHhecY2oq1nbA4whaXzJxVkuiLvuvGKuRmkjq8S8raP",
  "key9": "3Rje2VXjs1dzjKQNdft5F4m8iotuixek4cFj45DEnER7WAayaB7S1HUKSsp6XiC8cVfgFQDJrMYXRknxv6ngLSBr",
  "key10": "Z9M6bfk77QAqoPxqkJoBuJt1kn4cqNgvDMAJFfv9detdVv8cLJRZtse8R1NRqL6JHa8gpEFPb5hV5epPTcvGfQP",
  "key11": "2BkaVxT39imBTZUN4r1PfP7Jwoy5nRkKJTG4jPFfwrLR2kUvbw84M2rxxWBEL8TFWJ1AdcYeCmgyt9JBuknbPTSE",
  "key12": "5w5rb7ADm7xAMaTpEFQ6sKh7Bnf5mVXZvpBaTP7cW2xFRapwGhShYcDAT2gD7faigBxBSHcBK3JsLEV4yKdinAMa",
  "key13": "Zqiy5cqRibuYckTSjedLgUHT8vQ21WbAiAS5sTewfEBHDjACoax6XrzLZeEaVVFpUwsoiCFKWZoe7vRzRmpaTza",
  "key14": "336N5dBnPzzvChbDB7iQRnYUXzcBV31ZeGb6qhPLYPJ2L9JP4o3KEAQEcdJoEMFYB1ti2zNaBfh36GRB3i3CyKjX",
  "key15": "2cXBau27dV8w8o8GB2T364VzYugLaYnxj35G61mebnW927ECSr4fSEsGjSX475WSvstEdMGC2EtSY55qZ495NPL3",
  "key16": "2c51r3j4isHUFVwmmXeApRNqBPiG6MpfdWtyXGMT2hFYy4hcnTv5vhhQTo4w21isAnsS4sPLdAVjNc3WLreSrvnc",
  "key17": "3JJBYqraKw2AA6x6Spf2CCoLzCEbKjhN3FBH3wyQo8rv9JnqG6tB6r5VWUzSMTruYfF6eqVoRGeCCExytcVAWKpm",
  "key18": "zrRJSf2tTYfpqx3mZydwZx2nhBQQzUkgHYDMqjsfw5rCTuWHHSuMUqgmSLiZGA6mHkRjxRsBH4s1ZmJ81t1tGGZ",
  "key19": "2mcdmBTpnqJA2uvLhLPcUYQGghnfWXySQhonFosMmYvrGWJrbnMkEXnHdJzfij6dxgDrsFq6RuNi1yqzPMtfFoiJ",
  "key20": "qqex2vXz2KZRcLTDxrbm4xxCduiCP1rrGgkWqZ1qAwRCQc2AjW35knMLDoqPsNSkjkh3VmxzFn8rSPSybQu61fR",
  "key21": "35Yo1nPYt1fkEJtWeD6wYkJrD4AxyPY7rtbDEaryxe4zythqT5WKsRuhwPqvXKgS3tqj87PWos6USd7J2QE1M97Z",
  "key22": "4zKthEJdnhW3jes9be9ZWEcPHZJQLozGXzKX92sFhm8C1K3dqaxn5NZnbDPbN4DipVW6qLBdUrY6E7gCSzP6S7c2",
  "key23": "2KUj8doNjr416xwtHnnGrgixHco1QfAcrK4FqyemmEGLHehG4JiQRQb5GYmDBaV1QxLn6aH2vYL1GtkNsRZfDB4P",
  "key24": "57JePKBAjpNvgkgW3SifKiV17JKhy6txMd2bJyYPu8taJxvhTypxEtWoCQMyNCbmWGTVJXH5GVKNGbwMoEG28imU",
  "key25": "Ky8i5FvGQC4DWEi6BPrGKyrMHtNHbuRr4FYZjU8FBzjpVy6WZHmb9H9PQkgXDAQwMX7yQj5YsKer9kqzGkKTNVE"
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
