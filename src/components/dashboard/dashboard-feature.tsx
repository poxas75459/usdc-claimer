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
    "m1LPHxirvRcjVj5zxYYwTkBTmXc7jULRJhdg3pqDNwDZMS622MorqGxCGSRpbRjPrHNML7S4rYWbL2sPSDvXzUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38DUchsXTVrrNm4kGpNGpJuWCZMfqsuB2TmMaqFve5Rr5XsUy8xG6nmb75rtV9j3Siu7ADDbCr4GgvtippRhHNjN",
  "key1": "vanWezjQJaCF4ZQLtgRq4djkb3DayUqAJMuwhrRZF7tgKsjsTyjQ7F5N3sKXQPp1fF83NXt2BYq8u5QaRSFAZwH",
  "key2": "hY5814bgwjUJDLFCrsaxmWVoi4avC1PetAJa42BSXSZG42yDxJbkFYrGuijeU83rDgLk6DrBTZaf5BW7WGyxKKF",
  "key3": "5JpgeAmxbeed5YSrjXKJTb5mixWYZZyuXWM4byHLmo7iLZ714HsYVhgeWfPHbp8HsTNUxmUB5YC2U9sGK9oHevp8",
  "key4": "3iPMFA7aP7szHfEMk5HpzfH73oje36PmQLUk8eqT4XRvXXSt9sDKn5SkcgcDXrPUMK5i6Bi5qqN3bK4HqkFZ2Nep",
  "key5": "2nEp2xvNbsum4B1JbvJccyHe77WKWgN4s3mdgbabPDHphxvRyT25NZ48igvvbohwNhJLJbsspm4GHAkW6MHNjUHL",
  "key6": "mkWbW574adno39KSNQgLDjT8g15aBLYZm9sTEpDQw9WbLJt8zow65nbkgk6UcdiVnANCFkGuYJq2jicW1xYfANG",
  "key7": "tjWooj921HbaBTgs1rnnJUsuPtB1oYQcLKtYVpVmG9EQn81bRqVaE6Xss2Ez62L9zSsBZKgAZVv1BxKrMJvSvm4",
  "key8": "2S3FH2avzcAYRsSYCcBtwXtNJWeUXTyTABxRadxVJZvuYMBYttUj5f7JnuBQQZJ7B6U7MiCN2figqjUiD3czRqBF",
  "key9": "pCwqFg9yGMcya3xSoqNK8Jpo9Rv7JX7sjiCu9NZi4BUHNgyH1Qyov2F6wbgUYztF5ArhTrCoo3Mpfyoqpuat7EZ",
  "key10": "4Y4MPJgp1EeKQifDK8gg2qapv1dTmDqkfeK2f4Y7ZVigcUEdpPCxFKSHGq1528FMw59JEJPoLPUCDqTiNsLSKig8",
  "key11": "4eNUoPFzQba4yDABBqU7aP4Ho8z9qutcEpNMWm7MnRd7R1hoUAAHwMUANeSJcKdcEP4jsADUmM18M35iz45xw9wj",
  "key12": "2u9XkLutL1XsK6L61B3fb8SbsmLT8GkXuCipoEsf2E59WXuBqt39FsgXKzkaAesVA5afjCiu3VNvLcUVhEoMLkBX",
  "key13": "5fU4JKangFmVjgZFr3sFNqw6MAeivjjz19wvECGQirCCg6aSRGhyqE2Wim3o8bMJSv9ppu8q2q1LnuyyzNCLDbQE",
  "key14": "3VJa49vMoXsVL9EBo3hA3X9ciqvfJfawBU7pvYwSHecYXF9LDADDsLdkYrZHVvmn77iLwBx5huc3iy8e66YrBMX1",
  "key15": "Dn4dBf33dbFc8Fj4wcnAeAYCP2xPqeBbcoENAxBNimjfjiQouTiya9NVUVktuBkTsC1ntZD89SeFCc4eNiUKDRR",
  "key16": "3kNAR8j29xXa7bSzUCndFRoFHLoJRnKfBhEjXSnrEmy99L5u3ZiNvaHtv5Qw8ejkYLaJyk3vBZYDEH5upGWBn9CS",
  "key17": "2LUiNMvLDvqQtbT3pB1LVndtspBNSEYUVaThgyyG8a9cPRCZCBuzK1ow3dyKf4yBGcTfYdPqdErjsmQgH8Tom9nu",
  "key18": "5eHpQPMdEzkaZ8xARyBh9vnGPogA1omuzCXcJiPkGfjEkevZuBywSFtbNpFAe6vp3WkLqY9CDPmPc38Uus1x3Jci",
  "key19": "5Y7dzwfAssqnq7DZGajHonisYBpyyFFpSoiq7jNy6PKkwxdxs7W3Zw9BVDs6CeE25hKbXP5bcfGGPdjggFETKc3Z",
  "key20": "dQEGt8xMze4fGzxePR4kB3peDkMwcVbzzJLXRpmbK42MZxs7QKNDK5r7nCkywYKbQ2AqSgsTWbCLyeGXtLhFr6P",
  "key21": "4zkSWMVpyx4dwvMDejTwjUUHfjCZ1X3JHBu933jsGXxGTW8ZPXxiM6GjAid1R49HKCx5QXHR6Mzv4WCt9KMimArd",
  "key22": "5qV8NMPmxtSLHym4RQ4mxDrm6TcCVJmhwPmyiedAD8pnYPYWAEhkERZ5Cxsu5fHgKhu1JEmituwJkwDRpUVuuTwY",
  "key23": "4v9BUxt5X5pdVtoVtHeDGZ3UHP3QKVRhBVg5KLEj7aLSmgpaYFbhi493nm3rGxHkchMLZhEjAj3TxXLjJ3TvMHmr",
  "key24": "3JQiSAswo8DF7W7ytikqJRu6cmyhrPUgn96gTkz3TnkMG4jKaPPiFyMiLZ4V9yydc2MLS8PNbnbs2SXrKxdokRCn",
  "key25": "21s19QJZeT7RNRvGsiu8DUXbTVbqpkFmoiycASHkQYVB2rqhkzcxHXwH9z3v9xrtNEfbFjaVQYoJqkgssBpj3kAT",
  "key26": "4RwXLeqRq3C6Nh362XJyxdFhKZZWUWKjFFi2gDRcAPotXmzjBao2GmTJQ3jZPhqqQLGeXYc4YnJj35BvT4eth24o",
  "key27": "38gS3te918NaAbNMRPC28r82Tnmx7dWtBaWPaNy7zsmqZE9iqHzBtexx4zQF1TzCqSQTTEhaguvG6cZVwjkeuNnZ",
  "key28": "45GfqMjS9wiRVegumCGJNYu47TBeePnozUu2A3n5N6jmGUTrqiyGNs1X2oQ3g3yEZzX1pr2Fb9MYfauPKa8BQsSL",
  "key29": "2riWPJKbVMLyHnF1qvvmgRf5V6kXoETsMc8TvGhcpU6Th95hAVdT2MHXqQNLsryLiDcifVUKjnUMdVSZV6PaXY1Y"
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
