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
    "5giqnMdmxTidsBzH2xuzDg7REekL9yesxNqzjuhCSakGsWjw5T24bzw3iCoJWpCdSWXiW25cBFvYTgvzmamhbqrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62UyEDFkaKY4KH4UsbEUsn1crnwtoUXs2kn4VCWCi5R788EGs9BuFfQrRg6MUq7AgiFThsJa1Xa9uoRmwA8fRnJR",
  "key1": "4jqfv8b9cTTtRAjaTkJ9qqE2vCsqRrXiNrmK75NWKj9PVKGc985BvQDTBb3KN7XMv7P9Z9SULftomcubAe9KoUV1",
  "key2": "3ze45BA5N1SAp6sdWZW7cusGd1LAmAyfzb5Sh1gAAJFXrLDRRxMeL1NgG3Aoxigp3ZM4Qk1zY6TtzMuvpfaewyY9",
  "key3": "4W9v2FPuuMdFBw6LGXg7oE3juWLyrrwHiAnhJbiBiHvmvEZb3wNiWR845BeHLJQS9yjgVzpRdmhaNvrd7yUMpq6Y",
  "key4": "4WcMouem27EFjA7y2u8knmg1yWq1pGwvNKB3GP4VHDYQFQUiESdZJoGfbhgtsLnacX6QSxnF33SBpJsybsiBDFVk",
  "key5": "5KLmbRq2jcVycwCUnq6u48fq9NJAuik3PR5ZDciP3QtEYcJT8sVcu5nHFYd66L3C1ssvHs7MoeQtkL9o3kzKd94B",
  "key6": "wmSKXhVu8cmy1rrFV8Y4BPr6M41KBKCgnsA19bPKKqN4NRJjnWH2WQSFwNLPQ48Ka6x91ZcH5TE3ted4BqSzy8z",
  "key7": "7HC6RjY2QkXRnW6c47e3fWsw7AZ1Hb5coBgFV1PynkpRH667AxHbLXssZR47wb43Er2caNRGYnbCwUNh9rxi78z",
  "key8": "2qFLrPq857TqF5ec49p41fEQZj4HKiXAmhRwxbaD6u7aHZwXbYDJ5eH1rrC76BTtEM2qZViur5UZJ9cnVr8NCd92",
  "key9": "4EB1ECF7kA9q2d2jUt4z9ZMD6AM5vcxuSA9n7m7BJ8nRDuEVdWQHaMFZYyTdpFu64KHUjKgh8pM6ByWZZ4wjTW5",
  "key10": "4uMVqGw82FEVfC6fRaw9MYZDQr17DhbBXTFAx7Kd2zLCR7CdnG6ZNq6SsiFFb8h26ruUQPwUn7jZTPCBDT2t66DS",
  "key11": "3NwByMs8RvCfTeLMwBweekDVFcUfpLKatQwt2UYtTh16noTDaWfnsfBBeRRtrRja1giRq7oM4E6ahAttbvkxwZVF",
  "key12": "TT4TJhyTT5nkrfKZpCHZQjtRhuVRwGYSrXN8A2HYJ8g9aQbhtkhVKcXMFCVLBeCoDBdV6xb7MQS3zv6RXfMrVqJ",
  "key13": "51167XvZtv6kHuPqpmCiB3MyMbntqr6cM16xv4ZohEp4FLgFDkKLCJh6AiCMRAfawKxC3QpVwGkirhkgcRcdL68N",
  "key14": "3iAtiNcYMPtJ1QgFiTn4Sjx8NbGU1jxAwRTFanyPBae2bZzdPJ6EovhkXZXNRbpGQ5C9N5gM56Rui55KLx9yXCQU",
  "key15": "9oet8NsF7dHA4qgqskW4bLmj4FxtU9cWqdvnvM1LNrKgm6B9LQspuaHjgKJ3NCiPCPGw9db5GEEQcyTpxgQLnRG",
  "key16": "3eCqTUDBApr5RVQGnQM4MMJ4NP9hwvJTpTDugRriMkh2cEQKjCAovR7f4V8afeBd7FMAM3yj74JWRL2cP46TdxL5",
  "key17": "2ApiBe97Bm6tV52NAijvEbPxvsq2HYpUFUycy7mxTprpQSUeTTvuYFt6bRwVL3RVGDoYjveTBTCNJSyrRZLDNzSg",
  "key18": "4T2X1rAA3gHLBMsWzyFaewL7sjN8ysrTuNuQvX9WfUJPkcmYyv64AHZ5f692u34gZUqFR1cVLhv4oPCrcvj5eAM7",
  "key19": "5n2iznnJpHXazAnoqg1Bq1Mio5ab2Ej8PvgZMEmbT39hcYp7U7NaAnZb1rdw8KaZzK2MbaRUC8oSCfBZyBmSCDG5",
  "key20": "DGy42gyrvYfH24eDkQvq8s72HxkozbJY3fXrNJwXA6PG9F3N6CW8QDsKUGHRGruNGmAkdFaCJCJSXj9M5bYF7XC",
  "key21": "2WN99Lu5DxxPwjemKhE6qVHjvhdnEUGc2cxjen2yELLdYhm4VCwTpnq4f5iiDRobS1ks3mofmvDbxzYiHuqRG8zd",
  "key22": "63B59EHQ7TsNApb1ksn2fcN682VnWrgr1AYdd7N8hvCeTwum2SAHCwyic3RKFDzAK6h6ctvJfYJCsb65qc1wGbgR",
  "key23": "2azYnTUrE77eNukAAfJ8EAjHeJLPz21S6KcmMEqVPgr5ns4bwThbwKWAKZFBFfNAYezRsUwZ1Krjv6aecS8oUHYd",
  "key24": "3Qy9jhstazGyXgUahwyk1fXzFskRqNczZvr25PrxmAM2Hx3PQrcbaagm4YoLMg6ryAy7Gejb1M4NiEU7813X2M7Q",
  "key25": "4FBA9L1V3jLPs3Lt8L6JWCaQzoczvdmcUPUnSxEc5KhPqi9jnsmTv4NB19jTUXZhid2LzTYy36db1z54f1qTJap4",
  "key26": "2qR5sVj1mZ3hfy1r4JYsUKf4Zryeiiwr5QsvCaZ2W4XnZs7rUFgk5T4QX8sWccxjwLoNpifojmzWBUzKkWyvupSJ"
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
