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
    "2HXi7NWDqXXjxp7uHXKMBkNnmkrSnxTYdDWhHZzBSq8A5QR5CE876ow1yXmqAM5Y4CvgzJKDbW6n55xvGJq5dw5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tgxWMVwwTSwmin1LyNFRLZ1TmkJ34avzrFxVm3nHBGqd7pH7Hh8T7C5KgcA2GT4G1h4qeMxoR7K5UBn6QUBEdsU",
  "key1": "VNuJFaXgcQWMwmKdAyHiL6inBEqNDkwc8ti15EpAfazHYbQKAHW7G2oCbXRbWnRSTx3dkPXbXnmcoPCXjrTix8o",
  "key2": "2oGpQccCqCS89VqPqnfFmt3Ymoaevpds8fDVDeMEChJQ6LYkFdtewNf1e6XzVSe7mpDPkthhTxAaR3HAnnQ8djfX",
  "key3": "5Jq6P4C8nT1pCXRWoQKjEoDhBm8sXZHUhmYmYNfcoMyohBdxL1woY1LymeXgWWGHkWtC5wR7w4hHhzEDgjVXE58o",
  "key4": "5Ron1zht5obgr3wk6ofPLppBR7ZuWBFMQKamazAdh1oWhrxeYhEsYxu46bgxu7Uy3oBBhLwYojGdSoz36vDc51CT",
  "key5": "faPDqYWex6qZCoLRoCXtKSq2niSouHuw4ADui9abLkeegdVzy2eVoBpPsk6pAmeJEB2kUeZ64MtoE36cUyoyiZZ",
  "key6": "4nNGr5agFRwrMbsuPnxFT3V6fCLqigL4aXxP8FuXGHhRAUGsgZqyqBFTP7TnHFAFsbuEDK9DzCGkLERmgQjeXjM7",
  "key7": "2SFpybJeY2yvHd4EmiHv9pwFvRXoudrjURnj7Z7JpYg3GfvW7qvffqBwqNEsawVP3DmBaw9ENP1brGDVnT7y423q",
  "key8": "2CzdJs62GPzLx3rCWw8n3BVyNzZWD69owEXpnJB4sJBJ59HnxzHFQN31Z1aCivKt8yRjS375T7wErmPGCU7ZMr4P",
  "key9": "5MWdYwtcPjsVFwbW4GY3yFbZhoMC8ckudqvRiu5B4oHM8zKi9aQzs69kDB5uM4K5BYxET7paf2LhqbQLbQJdLrwm",
  "key10": "24c5ECyNipDuW14Px7mM3UtbEUoQzHNtvfRfyTGW8bxiJjM7G9W9SYzxeuDS3bp6GstXxGzViWiyk7iCBbrif5Xg",
  "key11": "2rTwtrP5URUqhyUtFWdsAZ2vLodtSaB1wzECD5GJAuFkyHEMW9Tq8HPV2xVoCNucUmy6J3Sn4AgBgiKXTfpw9Z3k",
  "key12": "5a1fypzMsJg5bipqMfdpnEvqdqjEpNpgfYDqXwq5N1Wi8J1CMcaduYpmps7r9pMuBL5fmBicAB8pWgXtgpLsG6nm",
  "key13": "4kvKDm1HFaeiT2yeXU7vuCLqDuNMbj3YRRSMaoEmRdyBMzMjCEBBWL2izWoF5QkZCZiEGYD5eGxxJUBMMxS3gdMp",
  "key14": "5bLo5suqBF6SA9sfRWsfNTgTiNwBZXnQSBkC4iUpfXsmNDSPE6hAEfSxSBzoApQEe8FEAgAKsz1K2ykM1BhXLwRZ",
  "key15": "268suTZJYdAJ9BPGNniVpRjjpqTX45MaGq5JhNaCCVeWn6mNdhVXc4eeNvQEHLkkGL4y4cHRmqSYur9tttTBAkBq",
  "key16": "kKoyMVtR83uMkbbbVUKcj6ZYiy1ZMFJ39hd1EkYJHGHgYeQfuyDphLLzsXxJQwxorgkakxEW5R6BebABcz3nBDg",
  "key17": "3LRHCqaQsRHXJFj7YNSEVCC4tQoKFgWuDHRWmk99m6gQb3rsn8992Unc5BoCYwRMgkWsuysk27avobMrQjFCaE5R",
  "key18": "5vbdHqWHhZPT6p7552AZ7gfs8LAbuYRcxmu1bRZNe4LXYosjCAaBhSikDyPchd6Ec4LPf7dEW44eDrGUkfJAkknL",
  "key19": "4HmrqJduqETvnAW1dit2775K2pgcsqUsjFM3yaD295b2SjVZNsG5BCLKX6vooM4h6dNxof37hvLnu2maz3minnHR",
  "key20": "5rTsNZENTskbjoNRTLKeUYW3Jewn2kJ78cWjzsvnmU8ZtxDeRSKWcnfPqVkgbcRa6UXg6evg59aqj9c8e2fg73gB",
  "key21": "4Vp8irdU2cQeumEgx7gQ9QM3m6omMtoYih1UF9M8ZDfBcURbnRCereP2ekC5DbJztCCEHKnG9AzvuA4PNqCMNqHY",
  "key22": "4tZyHx84Ljw4W9KArm2SZ3Jys4N6cHrvhfQ3Lk4My5rJM9362bzfe1SeLTnR1d8srLTA2C8b4JDfBdvwjg6F2rcB",
  "key23": "3CHbJVTwxuqtohUxsM57HMVoUJ5bUxVBQg7JRkDD12mXy3PBiXVF5sfV2HWp9MREfzXBjoxmMkxfMk6W3dRGkpSt",
  "key24": "atABzir4HY4aJMTJDC6wofdykbRoPuRvBd1zS7KTwBjuBxyrzdmJDEXvaqC5HdWuC7e1SWMemJhPcZFWEcmFmMA",
  "key25": "4XRSZFeCngq4FgPyEeBsAHao1fU14tWNYEiNNmYrxJgPHC2Tn7sEpdZ643rdxp4PEBG33vDiGmRJoJ14nx9FqdDM",
  "key26": "4yuK3UJzNZqf9gGRsjZUhmSVdAHwYzvvq6XK2JC2AeAYBDwP6Ts6v9riExj7knqC7skZnbUx5eVKU1V6psRx6VEw",
  "key27": "5dytrVqcdGNwRWv34FvpjaUL52Y6aWGAUj9QZE16XvUqJPWfc3fMqALZW6H4YmvPQE9xcL95F9mA2HFZqHLogX9C",
  "key28": "Gm8d5JR37KzJnrKvDySFmYhvWg3guih6aNcz69cFn2YS1EBF9G97zdU9aMcwPXPkaFPTm2R47s6x6GbvLLf4nBF",
  "key29": "K5GFTA6rSvFmxFMvB977oxGrngCPJYgGbDpHXrBoKRWi5YkMzRTqAvYLyP9aNH47B2npm5MjSoCTU9bxWTBcHGb",
  "key30": "48HCNXB5rgZDeD8zPFXZNfyXAyydZ6EvSYLpYGnQvRXyf7yU7NsA3ihXKp5WXAd9yco8CpGokF1YR7YWQwxhF8Mt"
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
