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
    "4oRcq8rKB3CXydrTKrj22Z8SydvL92EHkaYsurJHCiq6oH7vBJsBdZND88CWcc2PC7vUv6BFRxXSkq4r6kbbj6W9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "622WrnmRKYJUxA9bA2GajUn37BBTX1jTwrKayV8ab14yom8VXZEgqd8EhuGkrfqjgDUJdcEG5jdc6B1k8za2EVbc",
  "key1": "58X6cgqosZjjL551qqBYLYJDAjHTJMoK9Ae1w4Tf4sudyztztoeL9iUjtfGZZuMZrvWFgrqxMHBcpALUh33dpvdc",
  "key2": "5uMKM7kEcTEX541iVc1fzGbpxxvQzSqzDHDGHK55FpGacoVgHS8XBEMd3cYrfr4hDgYh3jAFb6x46yggcUfxDmtH",
  "key3": "4hTpCmdoYcki1yqouA9C8pYXWWgQePkZ6n8s2RE8q71SYMPMVFeXste5nR2hnt16uu2E4EKKM15B8jCABWbfY7PF",
  "key4": "2CHFCnH9DHJDrNcW3LkdyCyVH6rtiGi4nBvNHamoMkZ3J5hKqXG4cHfAj5QHqHf28MBjFJVXywNpihd68aaadEyc",
  "key5": "HzVMB7G2bNeTXDCfpUNiMU2kKKFBKUhS6YUgpuHcKdzA8u966c9x4SXEk69zJHGr8AjcMmsEn3d4oqDvotSQ3B2",
  "key6": "4Z4YoNdNraVrocCGjcKtVvCAM7rYVY6ay1kuoqP5i3rVJk9gcG9R5ETN3cgBgb1ezSm4Utok1XGrQUXphRAkinwR",
  "key7": "4ubpAmTr1bz77336o3BMhTFwX6VEhGhSERrRAkbEXCGYePgjV5o3BhJJ45vPVJgtFHNppkqwYAGkJmQ8A7KPYuxr",
  "key8": "51gfxVq8Q6Q5gUR1Sh4mXh7p8D1JuFuoxtA23ToSsZom87zW24zThodKwYXNswP2bL8sZjNY5X2GhnZ6RZ5EJPFq",
  "key9": "32HDk4y4DRB1XsivGmXTy3SbyEaZbDqb9w2tYzefgJfje1hL6oRUZvYZSMpe5QVLxDF35MKzKvbZgnpaaNBWRESH",
  "key10": "NA2gvj5RdCbUqur9MKkMsGzzw8j9VbPgRrGfbqwZMJs8pYFZQw5QdEPzAohfZZRqMdhqAzdTwY2jkSQuL441dZt",
  "key11": "25rSDLKVbSioeSXCZSRWiR3CyCzivwAL2Z41yHn8ssnqzc4Upy35Xqg46dcsLiyiw3zXTKzKWP1e6gKocWqTTgeW",
  "key12": "253Te8KDLnhRS71QVvehX8JMiQYLr7BR6tYsE2F4BZWmyzgJDwyxhoEyPWiGFyWc6ps4A3y36BLXTgziSxELczfG",
  "key13": "pzSZJKYPKD9xuBGi88snovsTnmeEnvsNUQxxk3SAWBDQp3KEE2HEAwCsq83gPUreCyrDLuKafa152DHCkeKeWHq",
  "key14": "58goQKEk24g9Ht1YEBxwEbfAZKK1UopHdLjX1uddiuU7ctzy8a5Kq3n3qd5J4sXtFFEQTCppjzGZ1GseBjXyatUD",
  "key15": "36Z9xYQiV7bpDVGz2nNRd3AmWiyGNSg6M3okZfjtcK144tiW9DMbjg9rj1theu1kJWRa2XUPKDceAKdfbFKmdHhh",
  "key16": "5Cgeg9gqnSZsPPz8hQYGFGjghh2BaRZ4cEC1XJxpY6vPxDuUqdZnyKv5yjuTY6G85e76MuLYuLVzyxpcQitQQPEk",
  "key17": "37Xxfe9UyohUqGENHHpxQJdyrSPwBmUzgVgBc3jGUT6EQq87Xu2iuxJARre9n27tofNforw23CPja5zr7AVmR1kD",
  "key18": "2bNkRfWrFzF1kfG3siCEtHGXtvtvGVGjQG8Rbp78RpTEEqudHycaL5jtxPeMFYgK5LtoFQJ1y1bzkbdEfaAt1ujQ",
  "key19": "7ZV6LZKgKZLHzsxNT5PPCjikPLEfwH4daWoXdSPHHZGHWQGJ9e826WdDA7nQ6znSb2JvGJCvg17KxAVvmwyKoY9",
  "key20": "5GVBh2aEqQGWQnWyD4ZyPRtc49XaCbtNpZ8knUGWg3N98QQCuL9v5SAqBRqNNK6oFvdQMacDFqBmPCoGEJtj4XhU",
  "key21": "3oLMprgRmDg63Dr3RDvAtpfSSxgk289kh4neW7sKNsF7xSzeEfbLiBrWALqTn6G1m8STK7odjz4wLbyeSLM9ggLU",
  "key22": "4LoHQXUiAwLCDdLULXRRn7ke6r9VkRe8LnSX5QdLZm1u2UqSRwKWAHicZXLcw3auJ23nUJFuzz8TXS1W83AHB6vk",
  "key23": "25gFtSmb5bBQijzGSW1R2yFjWA2RupKnZCSgSYUkRjbHHvwotx5BuP531ZodBnjo9gYUpTFoScVQJtvbv6w765ev",
  "key24": "52WzeFFWoydndNPdzWji8VKgJJpUYQssHh8eMQSCcanVXXV9ndpqrXUPXJgbgEhAoopahUo8dUDkAaRq2x5tTgsm",
  "key25": "fdLYib1jw7xxWReMwmxBubUCeaWJe8bu5jjeZRLS71NPtjnkfmP5TUavmSfhQCumDB51g4fLZHY9bjGdbVKtW35",
  "key26": "G2hwBXbMYm8w6n1oH4rpRGcthbPn2SnL9LY236TSLkQBCKcjVxWVesTQTfTWtShPAM2XQjscpg2Wvgo99WFtiU1",
  "key27": "2rQN81hYtqTomhuTE3cKFN5iZ9q6nEAbRgg5w3DYP6gqYomc1cxxXixyzgUUVDHuQ8mLxeyh4GhuVRqDZVoS3TM1",
  "key28": "32g4fxRuWTHqag1GQuHee4DcPymZM1MKGnzVnWTDBcD2uwhS8SD9cL2TxNt6p2o2yAsKMXppzK9NPbMmvTAAasUc",
  "key29": "2Ak8WfoiXDzhw14zoRTfrTTvQ5R6AWj7Mnep7bJkKSmHZS18rtxwafP2R1rayamBSYVGZ77776NpafkqQ425miur",
  "key30": "3QJFXoJPMkgPUkYsh3u8coLJj5w8bn5UGmtk9js7zzy2KrjXXh4zGfc38XedxYEUB5etmWS9WQvz5mTqLoWgPqv9",
  "key31": "3PFDtm3LBzovs7tApQ6bQAUtH7CNcGxV8vU3ZwMZ9da78wSGwhZHwixw1kXQtAPs3oVXoTqeS6TfREYdkTxDaQ3e",
  "key32": "2L3UEFmMXDythNTzQ9itn9b8ttfKxkCtpHVvMTGui96xxZcXv8hqB6fsTAPM718MpDF5vtTkJGxpCCqb8x1HdZKG",
  "key33": "3aFjQ6oMZAj7JiSqL2M2LqR5ZDB1cVhq15wb8LawkPJoFvghcD2RxrPb7CcZLt9zG3YnL73tbFGgC25NLuG6PFr4",
  "key34": "5KqJv2WuuyHLyBqVQbeYL9BazAJ9h29dSgf3yqU7YgyNamCQirxdBbHcarRP1hBDHz8MaDpQzDQbQMV49MbDThcQ",
  "key35": "3WRjFSAapNrDtsuDs5yokHCJMVRsbnuWU5f3BDm3PWbQLWj47W46iLpAxVcdaE5BzB7AcrTGApYJQksRKBChMnp9",
  "key36": "5ukU2aBakSh9AY8qo1cXTneQU3aa67vv1qRgEvpMMHdHwKF7EmH4Ke6PqS8xr2J9BPn8XHebfrZkxbZAsx79jTPe",
  "key37": "GG5y4WE4zCfSzW9kgZLDzQx5pF6pFCCE9FqKbd6dD9nhZ3i3ehpWctYnQdNXxfzazsVsJAXgizFM5YGJjupM5qr",
  "key38": "5xsSfZZgMnBDnyk2HCVypiY6qgy7XhKaYGjMSYAi9X6E9sfKfoTkXqqJfTj6ytr4a9mHguiEpSigeHQW6CKuvbdh",
  "key39": "bsixBvcoiTyk5US6RydzGR8SyuKm1owdvvv59oiofDWxFPF3oLpqksB4314fXESXcb5UJ3iMdXVK6ANp8rjrw1m",
  "key40": "5DLq2bAWHqn8jnfu4TdKtVGLpfgujSfq6fKBRp4DzKwLtEKh44KKLzyx4rtWgDAichidRzxYSpugiVhzPbPu5eAX",
  "key41": "EHJ8oZT2pkUwieohxqWLLUXmqFugB7SnL54Ra7q4Veb45AraCUvXo85nSYNeiTdFHhNSCqaYNauynDu1vHSWs4o",
  "key42": "5JwpUtAK3uiKbs8y9P5WtnAgp3S8yARrKdw3SKCTLXVd54sLUCtehesjM3VTwi6G5zXgTqJ5dqnqJETkekCZRnWq",
  "key43": "5togeZXh98wycuSCZW3jQApE8HkQbXC17RrpJpVMyrDhEmKooJQVWDJc76vyPrGkoC1ufkwBDz9RFpQ5aQm4hhrp",
  "key44": "5q127Hr6QLV64VPdoeR7aiPSNzz6ZMm9rynwCvqm9vh4HFQ18Hvhf5he9svrs49EQLbvbzsGMiysyJtKR9kb1Ppe",
  "key45": "3LmvybnywhgWD1VH8QfF3z1R3CzFj24gZcSesvPBs4p75V2uJprV46ML94wU6FwuY9knQ95qGV9fyqwWTyyY9dwp",
  "key46": "pR7cZz3HCCo76TGiuC4uS7mbiZDxw2nJsL4NT1rynvs9FFTJgmq8h92Gs4K7RtmXDMAYFirHikuvKkvKo4JfjXi",
  "key47": "4BDiSiXDrUJybpT3BdqyZM9k5f4KxdzxSXuiUbbsLNu1zicaX8kmdLPpkWfbwSxi5CkUhWws9A8xUkvcR2aSabRB",
  "key48": "4eHdB26vcfTDHTg9GEZGunwvrBuQ2hTkjFDVGEDbrpfeCfXen9bNNDZAQW7DxkKaMZJFgf6C8AF9nyks1oUFUfgE",
  "key49": "2NRDKvBjT35cVbCVapGxWC5FMPmFAUSRG8WdvR8NRbjitqSVNjTqJSnVCGey21MGgXbovdyGLj9sChV9jUJuFTmQ"
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
