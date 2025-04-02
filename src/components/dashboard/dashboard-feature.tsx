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
    "5MsARedrFsKh9z8P8xTqKWRbmbzQjAZhfY7x8dUg2svuDYS9Ck1WzkyyQ9B8MKAtjZw1DBHQGLoFFrGJex6GSYsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mDRib9tbWtUYYEwJEwKotnwQETvpt67CstZZw9YgU81aXVW4NL1g1VnEbnzetVtiwm78dS7vP9aprzXCKo7a4Ez",
  "key1": "5mPSUJzJKn9HEjqXUetReA26jpBzPfdR6rEchPvtzq4V3VhUFcs9vv8PyPLZgeWvjy9hZSM44KXSGQAo1qyWg7rC",
  "key2": "2KheyZSNwPcNmJPhnzGTCCsr4dh5K54LLt4Uw4Ldn7J91ERzdrkFRPeLreiVwjZL1yYR7Y6Cj4bJG8ju5F1EPboX",
  "key3": "33JovKcrHeHsUVVPr5hHZdr3ekW2CJtgAx2F17j2wxUwWZ5raeettFTShWRjoutRyJGBHt6Sf9SXgM9MLQRKA9Uk",
  "key4": "SwM6rJro9FSA1JCjWcBqx1VgGUfip6mziPkfMa1jJG7MneLWunq7wawGsv9NYJWxh3Ekpvf3WMouBzyyL3fddRq",
  "key5": "3Tnn8hfCuXsWuTNfi5r1gLMuFwKgkRhhv3XcL2nairUt5YQsigtByRv1xirYiHAVoaPFF4oMP3BDAvjWJBHSWLUj",
  "key6": "4QirBbaue3YQKtHTTuvqd8oanTByuW6T5DBFMwbEreoDpYPeqDbbtERwWcWMfovbnx7tyiFYdFeuUBWNo1orjuWM",
  "key7": "4MTKRBDy5oxgyKPkNHPjJHUVWzDYgov6SeJpkxYshhoXBjAyRkt7LrDto5hRpY2Y4jBcFky8HaCLx1ke487Dra4B",
  "key8": "3hnFewyo7srYmmZ64L8jbGEB8Zf6Pjv8a1pPC2KGopdKgbGGaWSF8v8kaRQ4TiUVPC4t594fvGgqZpaF6hP9cAdp",
  "key9": "3rcg7W5Q6pvFUQBvt7TrUkjQ6BCqsHD9mAKRNrBmqtFmhsz7y1wwkYTcQdt7zeqq9UqpNF4tC2DxvgeiuzTxWwGd",
  "key10": "2C1zceVMg1drgTxS1UAid9VhjtXuAiysyBprt95r2VUA4LD6gG88dbzMmaKcNAAtvzCBtGQ2B4Wykpi4GyoYWzkp",
  "key11": "AYxnKR4WEzT2VCd28Evo4YeA4a4fK1C5KyM2To65GKrfK6AYPVocpEJYb1frHQzudW9DjecHXZnPruumSJy4hq5",
  "key12": "45LqDQdE1LiMDdJ7iFHk9D2BWTg3E5tGHgUdkxa7E3naqtGNCMKtVywjq1aBy8rUS3NrNgbSFL7cub4szE95oJsN",
  "key13": "3LWbDWRCrWcJNwNd9UsUfSfhZKEaQMfWUrXFscaJhPGSGGcoooD5iieyvrKx2ZvnqQhpNDkWtdC8Z96uDNNkdd6j",
  "key14": "2GL2e13t3vmU6XKTNvRgawfqTwFURdQfdSyVfLRJiXbnwhis4J2q2gTzR6roccFBfNkFQbteonz22kZHDoipgkGQ",
  "key15": "2ChgSD6kH3yGmMaV8L1SqfoDHFf5s9CokHsbEX7TubgY66TMZkwoD2hz2QdhkdCajRf1s5avafJM9hbzE5VsR9y1",
  "key16": "37FxhQr5xKBsLv2cktBvVLWauLnHKScWJT7BnmwgDYmgEvbSJ4s7Zi3ecpYTss8YFvFC6eDjUk9P9W4evtb8r4As",
  "key17": "4Vnkj3T1S99vT7G1dCLTxBo5mRgeVrJjPA67Xf9NnhN1BrHKHcJhf7murjHT9Jj8c3DrJVWfJeKHKgJuw4qh17Sk",
  "key18": "42FwMj9d85HkMbRz3Q2BfHvXjs67VfqM23sVUZeszSi1Y3LB37eSxgKP5TYhNtzYzuLfjuP1sQLiBCEy7Yy57VFn",
  "key19": "9j4hBzmmHgr2D3EAVQaZmzsjvkeJGxDzWcRBgyGBNVr4YEFuUtHzDSYnSdwJo2w3Vpmm7fNpLNe8Lzkj4fVZ2eM",
  "key20": "66nj64wHaYfHXCyUn7yGcvngRqbUduXB689jX13ZFLfYnbXWWJC5FGRQnUvsq1LdFk7S85ZbpR5nEV3tZAvYtWmK",
  "key21": "2LADa6zt19FFu4iXbdbP8Q3KuEqkt52TjwD1rVXgou3FLFvEo9ZxbNCwcS52Qzm4REjLRx7ATu9kLs9megdGoqgX",
  "key22": "5kMqe34tN5JNf1aw8u5KdhDzSjE9zgYebo1CHgcWauBEw6kiWRz7Txh56Qfpgp2KPgEqrCkusv76cmgi52uQV3MJ",
  "key23": "DsNecEncxQdACS6JUscjbTzfWNR8oxFkD6iJmk3cs4zS1qumkMquLnZ6V2SicD61eSYFPdTLhCZy4sjo7ALPe47",
  "key24": "5aTjqa8H2DLNH44ZD5KdTs6kPkuTKtW5ttCKtoZ9UuHCHMG3exadQEPxFb8PWgTKb1N3vHresUHRhUQqYCuaWCAD",
  "key25": "2i4dnC4iHg6Lwqu4PFp59iByDdbokofTKFhwA8AKcCqu9teVLEspaAGYWxEyPh5jmSd45bZ4t7VokHhosKY9wmdx",
  "key26": "3NAGbztrfeCNpnvNrXKHEjF7tPpBTmS1cjbGqnDwk6dDMeUsk866qND2wpjC9127wkaSAZuwX8qV2igLZmQVko3G",
  "key27": "26LvAmnAbrvbRTm66BS3meHdFA3DrVr1ZBxTC5FGASrSv8LqDzqyMYCBBjVMjpehWp1JreMsLcXELAqqSMB7WMcL",
  "key28": "4AW8QRNv7kh7KSMfrRy5FxHpjS4G2nEKevrsegJYrEkBBFLGpJPQ5DMJN15qK2fyN916He9G4b5uV4uCNm7oG16b",
  "key29": "N4Cw9q7nHygL6DzD6dqvQiswzdaJAnRkqpB6iq19nA7CDaHrRYva8PVnGCiLAK5bn1cYD5KzujmRuPFYShD8JmB",
  "key30": "4awLUPjc4MuA1ZpXSivwfcmHwWYxkSbQrysPAw2JqdKhTwnDhpGr8PXNV91tuoukVSHg6sDBCAcgKw5Rb65KLY6E",
  "key31": "49DdmLBjRKhvNPbxAWL2PmYUzmn3NjUpmUZuu657EfAzDKEcySKyNxjPVBppBZr2NUXc9nkXXwLwHBdjM8R4Kprm"
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
