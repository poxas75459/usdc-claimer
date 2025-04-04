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
    "H2KNucG1Mn8qwntLRZkbqJr96hseTxkciHZMd3Qku4FgKW9bPHvPNLpt4UDwrBdhnNeqqSqp2BVeHMerw1SThW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LGE6Pb2B38Z1BChXZAS44JbBPJom4snUeyt1bQtoPBNwBEs7pjU87tjpu7rzyaZG5yZoxYRVx4g9Qg9Q94DaSZ2",
  "key1": "4AGEjeaRmmWtJoZVUQCFkmMwkJHVxsvBorhLPmYrLh79pprxe1JewYMGQBCsDjSWA9GHFQ2bmajrfSCFCoDRwjEh",
  "key2": "4fiP8MYizikbo1336kzVJyRWkEr2iDMru72DP3eNQ2xnQhMB9zw24koDyRaUuh5ZkkNHbhUsaDQdJtR54ZLxXUfs",
  "key3": "5Yjr3uNLw1Dyuh6rqaeQGu6NREh6iwpuDLGJazNWiMrugHvAGaZQi6uHNB8bBxaQ2iw8XSkeQrB5VK2dgrFZg15e",
  "key4": "5HnDmer8XBNiFFK4RUZt2fduTgbcD6SayJjLseVYhAgyWiA74xisS5CfGuTR4UNw4udWuh8LBvM5XtDwZxcAuDQx",
  "key5": "2BqekbGdT87qYmxePUos6eGdrFsNxFcHVNEfZCRJezKqd5FRcwvg3myuuxAVkqZpMLXGjDBikPGFKaXibtg4BG8T",
  "key6": "3SL8yHML66XkFTJ6twUaoFBjn5PDNoTntqq2mhLet8djYkf1TuLSQt482iHGNLpNKriVmdRDRJe2FTiVEWXYLWD7",
  "key7": "32XDG5GYYcsFqfxHnXTHanLQavUpmt8g8Rvbv3rqb6Z3KWhw71cpntW9x3hXVZfEgrxfJog9xHzekFrFt44noLYV",
  "key8": "5iJQrAceQyT5SmAamVrhJWBn8jo6rfp8skYPJJnyRWmZ5Y6VTgb511xQQzeizPN1zyhgAktCeWDwBbNY6RYf9er",
  "key9": "5b3uNXp43gPFT9o1eyvspnqXMtgZYNRY7BWGWRCvSEoUeJbVuQ5Y8ugLDnErn3FV9dkUqXaJ8CUj7RTokz7r2yYL",
  "key10": "3fXvriiY4Y5LuN6dt42WNTJHCD42ipXmNi4Ma1fGrr5Qyg1vHYMRHporpYNS4y4j9GfJ7GhzEhgLu9Nux9uF5SpZ",
  "key11": "3Bu8QbbtcTpLRyzbf7PEnViFMpa8iksfHG5Q64g5iPFYWFVfapfGwREqUnkRRyH1sTXgnWFh7DfV1WAmTmiYqq6W",
  "key12": "EsqwzXEM98G5HANjKBxqRZzPZD5cxpC9W9anVbhhmz2ZRtFqQzripEZnSnDY2VLmSUvcqECnGDsYwhM3nwo5n3j",
  "key13": "AaUs1yQe7BVkjmLYCGro4d468SZ6KNhwcfthXzLkZUXWZhkFSVTzmLwxnkYse3AevxXjLn3bDkLY6iJwBcX8mG1",
  "key14": "3SH3KbJYj5uepHd5a2NfExUwLdBbW4h4KReRJ8W1vrvX1MubsFZLPeLohPEe55bSAyQMKc3c3C11o9bmi5LfdS3s",
  "key15": "3MfxZJJQ5iEDdNt2iAFzfK7w2GKTbZwYu3m1N3rygADcZrE4DkbrvKXfQceELtm1h7roghBdkZBW5A8i9BPkZujd",
  "key16": "ojFnDMVQBGpUVVk6QEo18pNx2G5fJ7R3GHGomwXRWnRHkrmCms6vNrnP2x2ZpaQPjkScYEvGLMnTEoz4SzeZP58",
  "key17": "5QAwvV6r6ETaDFnDnz4euDjL3iE9fxuVm2PkNY1zwrs2zhaobtdKqZmrBCTaqnkkccaeu16PmDAYipWMVJyBEpXq",
  "key18": "2shAZw96EBKmmtWDw3fFyzia9qJKHFhrv8TkNPsoieqCRTdvLmL9oahPwdWs2QgLn4tJ1rmnRwijj4zzwc4nA9Uj",
  "key19": "5EKKjfKuAM65DH1jDoC1gux2iXpBg8Pbc6xSqBvSUKisgkLxScLepPJ9iEf56DKEzcD6Q82M5PMf1M8v5HtZxrur",
  "key20": "voKmTgEym9xbD99P6q6Z5AwJLnJrPwqRx8BSRL4Sn1s14GrvAeLDS1vKPZCCpWwYaH6VWPRACjwftKSuUz4Wy9A",
  "key21": "3XkeEDigFtPrgfHp4sxJvxN5RunQh6GX7EnENyu8ynuVFqUbi8BLoNJ3sop6YYzZbLT3EaBuvmn3SYfZuxJUVSXi",
  "key22": "2ikY1sFqRcjpPgA6k51QYxcnLEk4FwMBfqG7qHW8gCaifDYQkvxaYYdswDJFHCrWeL8gVeXKeS34xQQVznfBfjX9",
  "key23": "5KqteCP8LhvVYX1a6E5GDcrNKPuCs7a4ETt8rwHDsE2orjxVhM2schZJZfvnKVnmgmMvMc8x56uCYNhmx7SAjxdS",
  "key24": "28842jEyJSPqD2vKaHLv52hVC6XLvEpM8wxjCVJ8rf971Wb2nQU2XvVPciVatk7JktxjTEjfdBp5ZRdbthNYmgxT",
  "key25": "49AYZPMysbRV5yJFYBb2RZLzN76hP1smen7BifmWdguuvPkusJpPSbhnsfTpUYdMQAm24dcNRUhYQxYoPuALDLsp",
  "key26": "2TEJ8oyifyaEscQdks4jrabaVi8VgVkGqozUN6aoTocRkgBiaBArvs18QGSPf78fUGczpgcE84KHVaALxBziLS45",
  "key27": "2vXsnJ47qF1U3xF8dKvx9qZANvYjN6HL8SuvP9FTNXwgtGHQwWHJ8gAKxqdVinNgiPz3McURbVTxLJEckLe8vFn4",
  "key28": "2L9bFkLuoqcpFEjpHzvBN5YKKYWEaCuPoj8219Xu14Ns6hZS79iymHb4u5mwym5UWVaJfRVwsYtinzBA62rEEfRF"
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
