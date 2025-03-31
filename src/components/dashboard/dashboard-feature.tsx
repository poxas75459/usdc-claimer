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
    "2WU5E64eppawryDM4Rm9xeXhpPy9NTLwdNUiSD2UcQFzxvXixHt3cnm8WVdHgPFdy84g3jsh8HxkbeJpJVCxZX7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RNcFa4CAwvQjATrSLVbmszka6KmJbFNCgffP2P2GhpojRGfAhnYbfQT5Y3vMYHcwWXus5NmSa2zvKQ2cFxGUh5",
  "key1": "1GvUxagNWeEBLayFFA59dM8EYurW885ec3HHQse5ZWGrM6UUELubGtUWsrxcNkn4nTfioHuvSbJkTCcyaq3npzd",
  "key2": "5sKYBWgn5MEJ6cAApvUYnEPDYBVHweZP32MiH9GNn4mgqERNWnnxoDkTYEnv2L2sDYFZCw1R4Lyxko9sL2DMfEDD",
  "key3": "t5h7ULpcDnaCsYbqHdhL6uhFK1zUYRHiT4E9zNjchY9u8ZoTArYFAG1rMBh1DQZ4bEKn61gu1j3tfUZDRaA3teE",
  "key4": "4HgknP2GepGundrbX6DVrhGBPRBYjMEba6LzvMoEXkWH5AqbcWhMqVfL2RmAWkNGNmhN1qy99SJam9M3WS3mvWZs",
  "key5": "3WReYSh89BgZ3nj1aZBB828ND96EUHX1U5m7ZhMQXHgc2e2hnZTNvtcaVci1SQzJ7eSudfdMNQAbxXf73GGAwzck",
  "key6": "3WZZNNaFEzTJsRVmnbsBn9bjQM6YHEhvcMbJLQ7UsyySLcMtgD81EuNveWf8mcJpJ3V3LkXurvy6vjfrRik8AT43",
  "key7": "5KSAM3UVomduzXiAGAPfCdG55fDVFUKhXqh79mNdEwzFujuU3vTjpFZpBfd3feigaeqdPG37yGVmi8udHHE9Rmz9",
  "key8": "5NGs6EVQN7KbrQwkpMXUrMobwbzG47MvLt3B8M2ZwxYZxxWkiQ6gSWQCgeepVt1VFmv6S2mAYZpCgea561gLGd2T",
  "key9": "4UzLrQQ7NxPRKfEksaKkGtD5i2ZsxdoouTxHihA16GqTwevHKDvjnxfEBko5Z6BB61UVN7LnxF32a9HXcjh5YVZK",
  "key10": "5erAzLeawREp4ZZGrddss1EKxch9Cw46ZSoi4zaFYESMbgRVyLGvs1hapg1FDDrFdXwL1Dj31RgW3x9oz7zWS3gJ",
  "key11": "no6q3P7t5wYWp5AXKw4Qrp62q7vvZ2mSigD4qWz1NN435XBpsa4YsXv9wAJcyLXxKZZLz7cBbN92BekShniD1sb",
  "key12": "Z1G2kDgD8YjimBjxtaeTqeKZStQfBAwBXv8i5JsZk6KfT57FifBXVst5KPs9Tj1VbHdJvBHaFLY4thbXfuhP6pX",
  "key13": "FNLxNwxf8KN6MTAkiVQMU8cygXDTx5RjbmrJRTGKcUWVE6LHsoq9NeTDn4MK752dvU1GkqxbQc5JFVsxNuqCfEL",
  "key14": "2PBdZxuFgJujmw3rQHLbWAyrZ8K98AaE4sTxYYmuP7fFTFprFxAHmMQrxrDUT4vrPruDD9jtCBFEZth5z1wDDmTs",
  "key15": "4mzX9i9PUr82NguQzdsjFmz8JbMvyYxiW4iB4pipAUKy964VUVPbYzKRXLw3MrRHg7gzeM4uXD29cS1XjcAHeLaC",
  "key16": "4PB7P8NiW1RX1AnaWy6sixzn4EmLpvg294HTyE12mMLdRz3DkgtJDVpGReCaKnVsYDPLjFhGkf8pYAcsB95kcN8s",
  "key17": "55F1XruTRMiX1fSV4EvKQXmEYrZJgBsKWuhPREychwTZPjVou8zjvTejUg9RMCKrRwnkqpay6bmakcx69L5L62u9",
  "key18": "44mUswh3ebFidvg7LuaTf4M2TTcCVW6qv58TdXbytmtvbuhKL4n1cuu5M6PHgTFxGS3rnaxhDtF4EWkTTQ1Vcsg8",
  "key19": "VsgoeyEkPEEUSttYu3r4cRTt3nF3BbGA2UiNvh1CQECiwmDNTJDmMujmRNWTi3R4ZYgFkXE7GUqCSxsAEL2zpCx",
  "key20": "4Y4GjXzMjUN9G7unksfSYMqpeBToZTrYntDtuCp1RUN99nYBqMjubk8tiDK9KftNx9zvwrFKCqxJRBRe7iroHDhq",
  "key21": "2D1TxG2UcW6RXJ9w6qLGyE2T2Y1oQ5VLfSZ1firVscqUaN9TXLcjZeWFgGyUX9cFDMY38ATPNePKo1bYuPR3zPEy",
  "key22": "2a6asmudqoLCZUY4dExtvaeuEg2T5fGAvJu6uCGAAUQCL4WtDoURLDRWHSeVMmr7yQcUqwvJB2GG9KL51v1esTWC",
  "key23": "2FHTtXhWjrhdhmE2CoVbDVwC3fK2nxM22yxJrMZWnk5Htg4jiHJExo2Q2qBM21UE8ccLAwjhdaSjN9J7RJj9oPLc",
  "key24": "3yBoqBY26ygKjyk9Kcqb3BSwFMCsPY77WHxH2MuTi72shXGvyPPLfAbjyM3w1vBhgGGNQaCAmAziizSUNodgWyh9",
  "key25": "5iroqdCdKAsH5hhYz1A7HY5vqAWPLNUA38r7rbyucb5QKMiaxzR8F5vzpbKk3KPsZRJ2GGg2NxmqzhohGeXeu92u",
  "key26": "5XVWGiX2zjnpRQir4d4wLGRtuHc1HNR9My3qLoEXuhtaE4vF9KXDCNT9YAfRZD818jbm7bq9KmbXwBXhkij9xivN",
  "key27": "5tYMj44utWEDnaBFRh9woEtKKXm2QdjuuGJ2X9z9v6uibTkJxNrQMBwUK2qAmoHrF5Kyrf8BeawH2ezeJjsiMesr"
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
