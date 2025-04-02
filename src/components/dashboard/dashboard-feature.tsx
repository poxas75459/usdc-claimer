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
    "5LhLE9Yob5TQT5gAPyXiXBMH9NvT452HfeCGb4d6CYsNYvQdWzTnwQEYD5b7SuXQS4cKQTTwEaEsEkkZHhV3nNEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X7ZVrka294ppJkdz13fQmB1Z1ocD5N7awc2fzith4PsKLr9gCNkhjR9EUiwvdc7ArBB3xswv8qihzynqJTRVGPa",
  "key1": "5PY3uY41Zayo2xALmXf3V35TXSmvcN4MAytfhQyq2XPFLNKR9mdXVg2iTtcaStQVbrxbdyg7UCJXBaCBLKLTWFS2",
  "key2": "4PtEni5cRiomxwbhhHHu1NJSgiBbnnHkMVzH5qg2r5ArbX3Q2DE84Eoq3dX6Prn569jKd3PK2rqt19H2XP318Sgj",
  "key3": "5u9RYHw4sAAnxbY6RyL6Bmg1Ny8GYaTAXa1BobUGDL698ingesv4R7irbsNuhH8G2CmcynZRU5RzWNkb5ufcnXNJ",
  "key4": "khcZDHF218e7h8APHgQmQV38Sq2apX2ucHKTxpvVNrt9H1PaaGviiAUPvmhETRrTzTmeGB7ixkgwhtB43CmvVBk",
  "key5": "3vH8LTN1CxgfsErgxBjRZKfnEscjcVehz7SkoP38xCdU8QWzLTqyyGpBrX7VWxZiQJLzoPdhRmDUVVLZMYPyd6yE",
  "key6": "3rqWMQP3yEf7NiehXxFztWzRwBTgB882H3xKC52PWnFjnR2fDT8PpB9jz6vXpHNu9TKwySX3unzQpxcyhbgRLbjk",
  "key7": "3eLyR7pUuUvs1obYMCkn8Rjt7esTWDXp6eA8keD3c9TfSg1huCbavWYKr7YPWCtS7SaVwxvacKuwWt3dtD9kCYmU",
  "key8": "2yoDYnpaqsJNS7Rb1bcamXsuKtMbB4UomuwTApLixepij56H2eFRLRoKpSoqAbR4RUkXD7Smwp3XQDCM2sfvvuAo",
  "key9": "2tEnKVMoz744XR38qhYn4F4qQefcVS6bcS1XE2FbihRUexAGhkmJsygLryebRDRJrBJrjGj7FPXX84vk2WcvTZ5S",
  "key10": "pF1WJxvtz7XpwvWU3pceDF7nhFAK8qjjphzxREpEUd7fhK49GWpcXAgC1KoSF37hhoyhaocCuJKKmrewH6SCokH",
  "key11": "4G8Yr1faBDgnh4qRka7YQydbZ2RMYHxyvrYK3Qy6Rg3LCMfBfn4Q1j5p1ynPh9ai8h4DNJRenoHJBFWfhVMPsxnT",
  "key12": "2M7nkAAsyec1zJ6gbbhvRsLeeTxcqsNRkUBZuho3TbceAtj8UMXnLoZFJVSMqHXPnAzV4s7oLiACVApb1oUtno94",
  "key13": "5oghb3B8mwDQYKSu4ywGQ68Unb6Jev5AKGjv3fRNAAhB82PQ5ggoB882K84DknTapt79SLdYzRAf6YAaberM9sZJ",
  "key14": "3hCR3RYyV4TuMdjovBMMxFEZ4FE8ns82X5fAUJbxdgz4Mw52ukqoPeTpahH3FwW6xNkKpkhRM4XFJdMTyaDMnHUH",
  "key15": "2vwTEWs382DMFyrr8XviDqCtR1kkWe9bS5YKacLPRS7EjYMrqxMLT8Mqd1p8HABJuUEqjxd1skMtdSBpCvB5bjGy",
  "key16": "27Dyd1nA3UYXnN13CPXXZMu58p4PQSAT873r6C2Mn2ouuvUysL2k8TR83X5DkDbyBstqfL1XYYfeFsDC8kLfopvG",
  "key17": "2ZyjvbabKkQbpYSNisDX9CYCPR5Ji2fU9NHRZSdsTeUNDe9cPvtc2ibEK1GCeHkMHjBuanA6VTxcQXHVDT8kBhUK",
  "key18": "5Lz95URgyPw4fh8qmbXgy3JNJLYJHRjtXwtEMqCby7B8yhmRGUZtEe5sG9x1KujCPxyN1xevSds3cekymrbELcYr",
  "key19": "52tV9phZ2Ric1ZYsniTHwvzKhJkBBnPXcdVRvSv3E2RgtzRQo3LR5YQKaYxffEsspwb5hqQiFqRnVqGrJxksUNdY",
  "key20": "3VQ4Khz3NT9zxEGfpCFNHMjLj7CT8KRPXL2mZbyKvXq3k4ykvrcANiakFZmXk7utSYTRh1z6kxHNM3HpVAG5qQef",
  "key21": "4qDZRsfDzEAm5rcXSkyoPcutjb3FSF2sQRv6mcDz3y9tCnG1zPmZfH1jtb7yxLQjEy5oz1eiRQJ8GaHgJmfwhXP2",
  "key22": "4fKPrD48UFQUzDrZtJo5hd5qcsqH4giCUZkiHrBSG9BbzScPGqTipxm3RUcK7AFyk83iG5JpVspFB2C1QzcQFjvs",
  "key23": "5BcxRV2pk1xRBuT2rbW834Cm368kNdBEmgCTGNuQhHR8CouPuVSbmfDyMcDDzbByv7UyV9rAdm4kxdEwczeHZjMp",
  "key24": "HXsrk6bdPJmABrgRZ8Z8qV6c56YinU7xvHuD5no6zHmoSHCxwcpSfDua1W4QLbPTcuoXnfN6ZYdjSAVDPs3DdSe",
  "key25": "55DXZqXizFdTrTkHzLvmJDfAC8QQe99Pm1tL7eM3dHdrGiF3QEF1VCjNWrUwbSsffuQkNAKR5tYBgET4cG8jatKz",
  "key26": "2mMmD7Phd5ixQN8gGKK1wgVFVcZjJeP1jMck2JcTXYN7P1C8ZBoMMp6oCFoemoLSSGVuUpygjqoFG6AmZ7GzP1cr",
  "key27": "5rWYjP3bN3T4CcndUPSFNTN1LWTFBCvhx6UCuhwEw3tn51evUL2XcuGbbuN3t5WqfgGVztitaXLCvJ7Ey2yS6ydA",
  "key28": "4zgMe4zhZgbQS8UsXJi1fJ7yJZ9Dqhp2vzZ4MLwBYGTNywytBCUh6Yii794pMziScbKDgpgv1qvEUrLXLFSAy5TP",
  "key29": "5phQWKX24yCKyAM3uM3GyxSwCFtwy9jbfsDko11954AHDVSS7hS6ng5PWJn91TM1rPFqLoERq4hbU6j2eZxwDBE3"
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
