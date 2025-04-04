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
    "2JVKL5ovNCg67GqoSi5Q69AQw4WtDt6bbunonUkZ4BR12M7Gcpc1zbqx4cjsaWVY4tt135usReEXapPUVDY5R7vG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XqXW2tuPaQSxcmB86XJndZ1MSNNdnQQ6dKpq4EYd7DFN4ai75xZJxu7HxvnTizBm9RkdJTrSqCcj6MrPFPigLvF",
  "key1": "2M4WrQKbbsnzKdYv6ct9dFfmzYBMypJW8iSRs6YdgphWSPAwB6rXJ7EapPNiu1mtvpQPma3a8Bv8z8gtdRgmTcLd",
  "key2": "4w1Bk7tycHQZWAguMkMBCE4fMnPCvuzrzNDVX1ErjBgoyVSj5xMHm83EJoSus8rjAPg7znGZSQjEbMgxCWQACg6z",
  "key3": "4RFGHGLzFGdWdx6WZkzfCJeHrmM4UEpw54S6i9mJUhj8ZsT3atJHGAsnhAuZU7EJTWs45q5RDWQCpqMmG6BKEUQC",
  "key4": "4FhLvC85HXzpoVgKEfjtkBrYwMMt589oJN8wzKVY6GksYYcXJ6Y4VL1azwRRDSNLthTrLka9WrASXCEDhBcksiv5",
  "key5": "8PzX1Ls9HpcDu2CBYBQoZKGTKhhjf5tuqXz3RudxFg8gsJiwyTCHyacybjyrGJhSdHt1rbHx8gF7zFme8QqmdTE",
  "key6": "2m6cd71YBcDrpeNk6ZJY9inV8cJAcYqTrpRSKz8HNrDNrwGVBvcbUf3MEAh2cKjCKX6iW19AEngc7LZxREzS5Qp5",
  "key7": "3hHPrzXSMqrdvY4K91CtF2SGDYAFTNyjVpvcHVVgRDXBuUSrAcMAoFD1SCjpB9vAgD2pDbegfxb77nNWd5CpFgfe",
  "key8": "3fAe8qBgkQyXHytmERBxaervsFWe8444tphQ7rm23YkrYSZh8GgepQbBugQFYWDgPWNyqj1PCDVTMPmVBW5LoqVv",
  "key9": "4HsEuJB9d5GYNyWWipwDfcRqJmesbnCNcdmVEVRpLus9beeAvwRSBwJ2JhNWdEiFvLFS5hQVKrYQusQPB3xaEFqH",
  "key10": "2ff2DnjvUAjUS39qCuwWG3ZiSX9eCnBGMQwFsS6m7VVs4byGoGD5PRxvH1gTe8YYZmb35Gap2YAq2vA1s4rWLo7Q",
  "key11": "4NreTiUU42nkDCu7HLnsJDoenFu4bySrSvxybta7VhTmcB8adxtzfnaknmXYi4GQNjysyfSAesbNGLXnazgTcBVg",
  "key12": "2b1nSwEYRqbFNcipxPVxtGEPyFdpXWJxfmwFBoAMC7JxSWVCJcrfQhh9VGYWo5qRaT88Q9Dsitd2BB13YTTFgsV6",
  "key13": "4YZnZfPR2V9YC9nekyCE11ip5UGsf61NVXhJf3dfAf3VtRynay9jpxsuCPn2Vw3Mx9nm9bUj8avw5ZpywqZycweR",
  "key14": "36Ek48wchQrSYX4z47ti6zgvGZRnd13T9uUHKfrFnZRcWtpSMG2ycJiwuBC9a9b3JGBYghTuZWPz3XegGUXSCxAG",
  "key15": "5yQmHuWHPjQXmbP4aCDFNiVdLG9T46eqjnyU2vjvtLjLiGzzGkr7RqgZFvSDYv7dLMvQCTYU8SG1QrmFmuh6M3cH",
  "key16": "26faiSNZ6xTMdf2QzCzn8uBD82BihGpLukx9GexyKCZi6kM9CrG168kQytjGhg8dBZCHtU4bCT3V9tS8KbuRc5pW",
  "key17": "2ZJAtvv7tHDwHyaFSfzDuPU8DEfnQ9FAtiMxFwjAgHY5PJ5DRx38Mc9yBMi9RytnFxZ153PPGcx33PAuLSeQkAJE",
  "key18": "2aHMycUH2SCgVo1VoGUmH9yfSctVJrWSDZGt1a8ZoQMEJXgizczSXVobRe9XkLEuvLraVcwhorEu89DhigwqoUWN",
  "key19": "3XifmxGoMwpG3LfocfrwxKJF8QBw7FVS5yNkL2LL7WfzEjFFqP9SUqwf8qhypQU4tJZQoDxk3UZdCbnX3rbD2zmW",
  "key20": "4vv41UaDQEcLfXzMPManbN8jCyj8orKmpakA4BeyXiaCVsoJnTiRM5QmDDXt69AKbrmV83bcx8xeaE97ijFfw4LQ",
  "key21": "s4YzABJnKqHLXCSYirTorcMQNy4uUauHU4rxLeKBNRzSubvkxW8AT5cUBicg1FeCWGFUoCJBU2aEEuyweTGGrFw",
  "key22": "33tkE7NVfvVWnBSGUDDfjpaLrnHxietZjdoWYTAoqpUWpFZ8CTy1HmkeVF1de4GkDGTzezTURgpsLZVNbFDSgt7a",
  "key23": "2fUHfTWzkmXkYmL7f2r4RPu9jK4W7K7qCzeHk2qCdqawHDkfHLAU4Cw4F1xczTa8CiTJ9F3B3bh76QPkgoZnv9ju",
  "key24": "cKy5FHQmsKWjMELYUhkd4QCvPT3jCJMPt1jJqvTVAgv8wRtcFi94mq5SxeScagPKmVeR7XGdi5SKPzpdFSffzoB",
  "key25": "4WmMTZheqkRgtpJ3H72Nd6pkV7wgaeE5KUbmQ1MC2q1gAsqFt4nKa8gbEiNThhS5vHapQHvjrZwTVfoy9r412osT",
  "key26": "4irZsUcB9ZQ4gAEhH1oTXFPga1gAFBQc5gsKvyj4rpFKidFyiECTyUBLpaPe3UmDJLLMdwsnwpF6MnAJ55ScTg9d",
  "key27": "127eVAac5n1ysYN6GYaHjScyErZRe9ACyZitgrUWywaraF5yTT5tRBWxBbu2n61orSB69wnVvM5YvAqRdL2rhxvd"
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
