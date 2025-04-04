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
    "KBGKFZcXjyoeptTZ9Yinanr3o1ZQPYPreAP8bWaeopFwRo6kXF2q85P3gK9sQkkij4DrbByqx4eRj5ngEUbZM7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cXSXExJ2qrwP5TAF38qKG453pbZbj2VrcW9LSx3RCYc2DW5Uiqr5sLS3brzFzmTWtFL4tGCrAGodKDXMDJxT1x",
  "key1": "66SQLLb6coLonGDhUx566zqbThtpvM7RFvrGYbL2VQjvnNjv8R3aTuiEw1NFJYjWVQPCMBrgrh2GV6FqMLEtyVrx",
  "key2": "GK46Zuus73KTXq3xbnnMABhgRGEFqWsq1kegnKhmhfkGpye8d7xYmrpYvKfXxSkc87nvfuvphS8KcNwhYG3X4eH",
  "key3": "5ujDfCvtE3yTHXjnULzngE6Jx8iUg7HcnEDqAmrDusXVFoDDnPqpPaok6W5KJyqvpkKaSGBQWRsRC6hFUJk1o5zq",
  "key4": "5d7V6h5BDjT3ZAU4Qe8tZxFp6Yn2SSgoAvbC395Gnds36Nj5MrzMgMkPjXgfmRuGB63K4cw5tXvi7VX8PoYDbhQp",
  "key5": "5GFGDjQcS15enyjPMU8zFi4FUgMkxiT5n4bhNDefgAXxjEjZTCo7dbzpvbwfm7eyj1bT3YM4M726udUp9JmRxqRS",
  "key6": "1JiafkXCutHdTf9SMiJHx46b8JMnPSzn244GGwcY7aPQ9yJv2rHDbeB1vRqgLe665hjvYbtW5KufXwHqcWc7qJj",
  "key7": "2NPTnaEwgr59q5WuTg1sxkv11jQhqhy8EtuVjyeb3BgXfkwKQxvde56LXDudYyahTJXDX1ic81VbTUrpjDYofio8",
  "key8": "599HeH2KGKKtMaz31UpN7f5indEggbsXgmBXdA6WoKvwSHt1x3TjvviEHCVx3kLgFGUrw8n9i52rja3DgcXZd7SY",
  "key9": "61uH9c1S8rU7mdFyh9vqfWCVefmAwDNQ7pZNx4kDTA15EcCHC7QURjdmQ7WdoSZWPjUDA3h5zDKXEiHLfHVS7MSp",
  "key10": "3BheoQJT6frJDLoJYseBLLozkp51dKfBgQHf3wfLei6TZAZ8AyJZDTyi7CzMbLmKLV76Q8Bnsanqf3TkvQxu9yJx",
  "key11": "2TS6pT8LuraEjFa1KHNtTck6xtnNHp3cbPwpEPx2e46cFaNRCpoTur4owwR5RkKXMcR1JczYBWSAifpVru7EmLeH",
  "key12": "yZ4wiVX8wpS9mwHfPu7U9ncjopqmHVhmsngc4MHDg7CEsHNmKyEQTvgmECYUP2EH2jAiDovwdEbCSGzADUsrJPn",
  "key13": "2gXWTzzNFostt4JRFQHo3kdNLemkV95sQ9vUdzAp1hiwmaJ19wrcyA12nwoY1A5TN1RjzZkT9EaQdiWFLK1D7or8",
  "key14": "3ErbSLbbGRpY2cCMyN4QWofMMxEKtwiQTPMpqoGbRcLQv73S9LtzbffTikNG7SZ9JrbgFQJJB1LwpZs7sB6Jzpf6",
  "key15": "5X9ftqptWowJXW1QZYZCEgaL9NJcQp6QiVrTWtwAy22hVMX7wq3oeYixKCkaNUqa28ubrjLRFePks5YwvDMqMk91",
  "key16": "dQ52CUAQ6rYoGSe33FdUmBYk6QZ6CX2nHafWbg9ngnQEEP7EBejdtzgPhGq6HKYf49ddSufwLZBbnu52UygY919",
  "key17": "2ytU2N3uiRkZZs64RpodwqT5iYsawmUiTt6vDxVrGrvq1MUKEXLqoSHcf8FDvXeBY7p7PMEHVn4QVtLQSt1WSVcB",
  "key18": "32sgxRruqsJwbJxrjVGpwGEGCRGhThiGyyVuco8d1EcgfBdoEpHgDYCm82hwyFA3NYiZW1z5xxFrb9SYbUuNBUzg",
  "key19": "3L1hNiCDuxVRQTrNqch3H9w9Rhugw6HM8mAZ4siwjgg5HLw8qrrAgg3YZE7ePjEFku5zn9K2n7Mo4UES1HWowMRi",
  "key20": "3QeZdvzkxUMUSLqWc7tzqomp2PBkv2oGTrxwZfx3Rr8fNWQBiStJxptPm4dftdTmCFQvY1yeCCxaGtSvXBLs3w1h",
  "key21": "4uZNRQdT6gnjFTH4bnPX3V2op1quL7L8fZLwDaF7Zcvp25rCAbQ2CAjZ8qyUNAa6MwLucTJwuvhvMwdK9Vq13UGM",
  "key22": "57ojThGQ8QSvAxBiEp2H5sZWeNBrgxHzXJu9y3jeo3icL8B3TPd5J8Bxyt52RY6z2cf3SWRMdMuemkdZtxamBUjU",
  "key23": "3MMmH1tYoGzxcNbTtPQd2jyEHA8LTkEqHAcKaLc7zdG9tjEYeuJeyMaZv5s4Nn2arorKkcbs3NpgVS4aejWyKAkD",
  "key24": "2r1pL2PD3ttfJ23wWmPcjPkXEaBEAHbA1ic11t5DuULCcYjRzrkdeQP1CZr63ackzTGVvG2u5x8vaVnnC23UhNot",
  "key25": "334UsXZuRJJfDK2H3FD9fsUBLU5mLMqhi7NbEWWvJNnvVJP7PopH9wz8FAMozRDMGrknZnq1w4yJLzyCMPUHEHWa"
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
