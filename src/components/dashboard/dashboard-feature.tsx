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
    "5xysJprrpS3opMjyHRN28R8crmCTH36Qf2LH6T63TxdfaQ5RUc8fQfMpM5prD896vhVEogYykzHrgnBKWXvoHcRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YMAJWB7gAtT4kcNvzd6b8sP1ytKoCuPbaHoKFExiBoQf9HvAySPYa9KZfQvxVDKfP81e7rrUVquLfdDTi1tKDQk",
  "key1": "2WDy45AhqgDujxj8x1ZDwqETy1bxnpwtbuvPWaiBP6gpEmE9T4YyqGivgA1AmsRkmmryXeTpspVQpUS1b8RQCDNN",
  "key2": "2xrTriSZZroKfgGMjpdZ3ojxmRHUHEenaThZVD5NYVFzBhSRXmiQyEuUKHWxCtr4zi5FZMUW6Mw5jd5AsQDB1mZk",
  "key3": "4485knZYUKNUkLNsCohHiuVWYogjSUpGgZymZU6hWMTsGQhdPkNZ4nkMxh7kxz5nzUgCyTeJswtsqb3V8h2Qkrmk",
  "key4": "3P5ictaH4itFNUX5ngboJ8MAzZF2pULemMzj6YHRhfbBzTm7S9vFNzB7dUh3VR7vwpq1R4VDT97cTpSqENXmPkwW",
  "key5": "Yi2DuDkRDNdu28Xkv79hQWmDYCqGFHFreCwSU3TRDWFP2AHKX2xhWRac8bDEZbKoQJCnTaSkaKFX33xcLKvQJBR",
  "key6": "3YPFKYowJToNw6cttYbrRb1s9cyPi5qfgdpSGifsMLWiNWCoUpLLC49gfHpw4sDEBZECjHUe1FRjRFP7bYs4WHQk",
  "key7": "38iGZY9YPjUgJjPjUpaoMR97tQrCoVuKPjFw9nDCvnPM178haUgeieVgfjinkUkcji3Fgwz1S2PqmfqGFpPHgkHZ",
  "key8": "5QiL46wdKeTarkNkjY9SbJfpsuvRWS5jrVCtxJ3MVvP3D8KnngoWpNmV4XK1g6DQkcDGxrCSHqnakhKf6evUqugL",
  "key9": "4QkdekXno3pr6YNM5P9ZNnrDMJr6HBRDMbCij55im3Zn4h65iKkmu84acASNtbiZnkmBZ5175jtFJ2UVA2PgWdou",
  "key10": "fNQBteePMUZE57HE8nMLKx1hqrdiXLuwdBB44XCuJGoCsiy1fz2nzy66YEkyD2Fm9Axa3T3S17HPkKyK6JB21KE",
  "key11": "4FCNBnxTzJsSUrK7hVvozmkab1QQbmUxuLuXgiXQc1LheAb8H8kjuXdrsAje9866J9xkewaEYHYC6hZs7Tw1cFiD",
  "key12": "334Pc7nnFswUufsihH9xFYh3LFnbYiH8U13BJSXpwYLNPuqcR9Mm4zdCBDLzthBFDMKyvWEpa5sc8ALBefpP99R2",
  "key13": "5ufunLYH67KZfqBbxJLXQxuJ8ARdLwtbcKu4Svi6o1dYoqFt9tRf5gmA15yjjsiFcECHNyrkWWwwR1mYyEQBiiHF",
  "key14": "Cxm7qTfBA6D8fAPjvAxBLDRS4S7BhdLMztfisR4PW3hRcbSTMK4zqHZuWZo1ZtL7RRpvCRKht3s3sgLHe3cfc37",
  "key15": "28YdLnkYeiWYFv6BHzV3xE6v5x6Db1nekacA9V4qGaqY9LXre9GRJ5TCXe8Kqrudh3c4Yc9oEdmSyLK39k5WDj2D",
  "key16": "3DFFMRia7WZCNw9yA2e133yGjHvfx99cKropBUwdgoN57Q253dRXKuVwBFyMPhmJ7dHFTrX5jHgprwqCJiMw8Coc",
  "key17": "5TTFKa4958AV9uBqJp8YiL4Ym3KnFtLU7EeR5DkMBxqCnEiEqM5gk8rMev9j9EnsHandQGJk5e2m9XG7VQz9bjya",
  "key18": "23zJhqTRGbKFS5MqDZnLeM6S2vs6psXrpdShjuzicwzTKtAQ7d5dz3KVZrgKmQiw7LZVb3hwTwc45PAvpzdiFHtQ",
  "key19": "4wieJd49ridoknBUrnyAB4kzCcEMEHLb87yd6sHr4o7iRsgsQufoHKKn2NgUPFhkKiuJtXnjibPGCMNoFRdFj5Pw",
  "key20": "2VoYaUC7VjcanLQbG3bT6amgrDQ44MK822sudtpuXTVdQMk7UpVXXUSo6NWLqcWdwR5xcAT31QwWC6EpMgGiD3Ht",
  "key21": "38L3G6f1eawa9KzqjNsEYPfLMBenUg11rVCfQHPh4ZT9MuEyUEv52iCRRXUNSDYqJ6wA3EqyQD2SJZso3zoQ9Byj",
  "key22": "2Td3pqR4pCSPraXo3QtjhVSzQFhRLEQ7b6vgqerRyaYzAdozpccZiBbgzTuA6YDmpK3mGo5xkGHiaG1uxmbL5iJ8",
  "key23": "qMzNioknZydsJEiXQXLTtSkf3Rhe2Fy4LHuVqt84yd4DK1v8pWie3z57gorBrunzG6kYLFP2AJAJtD4HGq1xn4y",
  "key24": "48FdBUZdzwyCtkrce3sro1o87bKcsTg8PpcVyTBTpwrLy3rWyuM9ECJydPENre5A2Zfx5nSEdPPdX3ymERMZLZaW",
  "key25": "2SUv1Q2MecnaairY5MQjSkggPKQex91dGm5KjoRM23WV9hm6PibqXXvboesZMnWAHPyFzKwiVv1WBkEhDTi5Vijb"
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
