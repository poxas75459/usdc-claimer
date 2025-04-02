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
    "dDp9RSBYzFi6MuFjHKG3ZWQD7xMcfJMVvQe26n5ou2RUT5nSFLtwui7YVhiL64BhUCxb1d3eRZGVnq8DGpa9ZDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W74eUZ19PUpMMNzYjg851puyMY8EwRe7UmT6qnjsEzhvBdXBXkwZ3c3VwnZhUC3LJLsYuxEfh3ATB9t92Q1Qdte",
  "key1": "Z65fDzseeaMkPegJobfhNyUXqeipZj1YsmkNNYETW8uY1NJFULAfraTVLaj88r7edaVJdgSbeMA6B5obgdSrmXy",
  "key2": "2GyUnroZz7N4fvqb96Yg7JDSXTeo2KwmHU8gvMM8fhY8TFR1yRo5NraBJBsFe8MovAEMZxHypMa8Jd4bUrkq1FEu",
  "key3": "2RsnEXw2h6qBGD7LRHRodcTfUA4RoTVPZYbfwr3bgzrLks6aucZsQGrsqdFLMaPUsUr8V8AM4q7y47uJZLqyd34F",
  "key4": "2pgbZ5eys9d1WjqejfKuzKEsbZV7cB9eRFwdh16HAY1FvYXk9o6iTqGWJDrv6d3aGdtateJ9suB8hHcVrDAz6dRS",
  "key5": "5xuQeNyZNfpWdyLnDouuZCQqJjRqhw65cCuu7SziUK4KLxq3LVvwkXTua6PyV9Y9CzPBjwRCexhMb1F3wXcHyxdG",
  "key6": "3v8umStgxEqvCmG93VUmaQtn7v3qko9QNqoLb7wiEkvXYW172QZHapmPjW5fiBKgf68ADNR1iqW5e9Z94xZuJcLp",
  "key7": "44vCuxPk8wbLQNBFhpmWL61tS3t92RwqDRgfkVZNJ46KjUZYbU5oZmLw3iUefnSTExfnEEqDyiUhrKmrQy5U78tE",
  "key8": "4zAGUBLKHBwfUsw2RvpmgDkcWsqzqPjB9E5H9asvmqjSnXvUZM5zwvU95aFGkW5sLRqRxRV1YYmwF6Y12x9ZoLiU",
  "key9": "2JPihNJbcUrM3eCyQPEzmNFBQzetkgyDvCBwnmzug1QrqGFkKZc3tx6TyQvPYcm9CZdk2Mc9XAaG6kSwUSpUqWMr",
  "key10": "3wJXExE87xLnRwKDuCWcRLH3EbsUC4461jeuNoTiu1ZqQH8py8ctvvoHJfCVnkchSoi2z2E4Sh2NexDmnzkMbyTz",
  "key11": "4KKv38JptVzLsvghvxNFhkqhorD9jWUkT5vfy2NgFpr4c4nuFfGcG1732xsKkbao6yfqTe1BiuktDVSBV9Bt4hRH",
  "key12": "8n3M13EDpZXrW5uHujs7FgXTx5MPJqPbb6HgcENC6uADY21pzv75zBTwKYddqG9KU9FPmwhwdFQphW4NJqU6MYP",
  "key13": "5DCY5iBb2E1Eswix5WjDYdNaJGV2h5mkTHJRXPuAUJa6sLRvjv3eUZf1byptgeS9S2FPMJtjbRPHiW2oy4tedKxs",
  "key14": "gmGk47hVcpegAu5gr1D1YpnrQLYrvYWBKG3YeE6ztpA21BLLMiXMd2pd2f7WTAfH92h5iRSvENBNnZKPHhB2cQb",
  "key15": "5TwF31kRicEErbY1uedVCuLpmVa5ETndN4WfZBt3kkPTFReLhLzDJ9PdVN9xdePz8rMFch1gYn9tKfTtbNhDfWnS",
  "key16": "e46XKm785QiNeCHo4RoRCpicrG5mM4PuHHTkHVupWfJXRq92bBuLLnM53kAGVrrFD1aUXAQ5Xz6juADtgX6VVWJ",
  "key17": "45PgCzvdM2KfgL6BxQjRJ4BkuaSNctby4qs8kGajJG9LJcZvfTuhft4yiqazGzUkyfrFYY7vUsJCNCoEnZdtThtE",
  "key18": "3NwoXCDukjr7UE85BHZ1thmPTx5XaxECnw97X8VeiQTRiNdhjHJj193PeU7WBzQYMrPakqoLcC2qJyquq5pTbjC5",
  "key19": "5uLm7aH1NYjg4hzrMkYV3hb2wz8xX129br1J3YnXq5VFH8dNYkb1WUcKsvyD6strUEg6G5NMjv5GKZxbUVDfVevr",
  "key20": "29gryspP8eULd6nSYaxXvgWDGWWpQtX76fM6dSqzLkirMvxAhi4E14c5X3LrpHixLVDSvhrspwJWUzygYW9BjpXJ",
  "key21": "38snT2pgDvCBE1XFxbhMmwrJrrRLYD9mhMVZyeaSNnLCfsnsBsabrFEpDgJSXCZ4XBXm1WyBRGxHZacgyh2ngdQn",
  "key22": "5GWueRCnEDAGaLjyQ4MumCphHVVh7bJKLQFcedNtyeZPegPYTtmF3RWuEeFiHwfjPdFEemxFPDXfXRT1rAEGCacA",
  "key23": "21eX44sR6iPS4FRQDhcdAzPEAcgUCSjmYEJ7XzV6v8TDnFNgbsb41G1Cp5VrBDhiKqSEx8hDUPt8AcyWTZQKyQis",
  "key24": "2HEBcbbNCt7jHoBqPZGmbmaFYFS3NuZEhrL6uMaw7ufL1BDRQtYVkwftC7AsJLHLVEobfHpiJcdEoYe8QchtmtJN",
  "key25": "5ePLVVkUpscqA6qvzpMA1oCENSN9RZF9QYiPkTBaJtocRRXRNPzmh2vxBasbi1QZ54DLiBQzUHhr5SZNcPADsTXF",
  "key26": "5hDzDjbKvJ5tcsh2ttFBXrvaXW1fN3HvhDRiABaz8nnUog1eZ8AGAfpkvJjw6yiAtSfyVkbtw2HuMxVeFjSZUJCK",
  "key27": "2omfwZf7mjVkqvBr8i98uge5Kk53LT7UemjFCm9Pos9T8ayQJjxD3cZW2uGprYg5mrkEd5nhwAy8LV6DZ7gyRSc9",
  "key28": "6W3EHKbxN7KFnsvFVrrN1t5e3Pb11WD4b3AHfhAx5ieELaXWQsCUdhj29RSudpL5xJBd4E6ggjCTDh3Ebf1cmAE",
  "key29": "bDcc1uavDkKEwreqdenPwj7nkLWZbca3vXrAFgJZEsaq9cFU7NeTTjzatBu6fSp3cuUSmQp8HFFXz6SMdFzJTQn",
  "key30": "4PL4SfLjKCNEwYybmZSp8XuPTSx9S1bUhBYVZ6VV9hTcysu3Ztj5uCbMH5L6dNRhVN97Jb3mdPnLYa3rAZArD3ma",
  "key31": "4BZz4eWJ13vdsFMFoYxwmJuJTifHUSJ4JtGhZdwRqd6tppo8rqFgGWc77u7WoeLX9vRC9ND1jVaevUHhPtcGvyD7",
  "key32": "4M6gLdNVvNFsDH926gcYUDaQZPudB56z5VwjCUJquwjQmKSdqBUkFxDFkRKoivpJLguVN13ghctrNwHuLkp8fymS",
  "key33": "5LEge7Ubbdby9wPkp4Tmqo2CnFx32gAcVEStRSYMK1qpxdso7V5vD9EiALXRbNLsbvCSmBUCkpt9aWeW4ZRcvi2G",
  "key34": "5jNHyDTNmAYXiWA1T94oUbhPaVHJMNKu2XJg2iDBhtKeeSjofctD6G28S2sizAeNesWoy9qMYNFspxrX6nxpybsn",
  "key35": "2g8izPZ4emByo8p4HESQNQmr3bEiGQpmfyPioz93cStJvDeuK4i3jyhs9r7TBtSCvMDsj9NYrKsdZj97sk2we9LY",
  "key36": "5Hj82rHwwnXWxdsKLDYQNPJ3kierMmGKEeJvE3h9cyWSLKhykHjGYHSrHpU5efbrLQ9UrYhX6gQvTVbsk66DPRGB",
  "key37": "4yZEBf8TBdEJG1Yf86ZcwSoGJaybzmzW6wBMvCPTsfDRHD9Cii6JZUBmZCVCKzGR3Uio1BAhonoKDhzB8qe8L7bV",
  "key38": "2AvGZoKRBjrmf61VFaov6u9SRvVY9bvHpBfUJsSRkYiNqS1NGmabDeXyvne2oqngoR1eCJEiJAWJhdmqKCe8RcVG",
  "key39": "3Lh2fCE7UUxZfpVTa3djntX241wJBkZnkJVdzLQk6DKsiCLkyEkeyk9RTozSvmsa2CwHXAv3jy4UXeHCXLgxuTRd"
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
