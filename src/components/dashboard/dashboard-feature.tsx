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
    "4PZfkoS96ptQyUjdycMFhvKcCpDrcs6a4RDgAWGVCbYpFVVk2f2YPuaJg9Rj43CL6fjaUHBR4Bk2ftmeWcTVGWxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T5W2m4sieRMhTkhMkC6w86jD6S5rsq9DZghMBPf25evEV4EMqqtVzsv9DVSEKYALHG7pmdwfeC4YwfqCj9dzZRX",
  "key1": "fc9M6YHJyM9rZncCBmgzaK4EqMuVf2YGoFhqThZBXVdrTgnF4MQp6GwVWg5V1B2apcK3hNYSH4SKniY4vBY5d2R",
  "key2": "3PCF5sLuwJNJ6Xyy4VJfbUwrX16NPTcqkTGTBmruQE5UBEFR2o3cNPxKsTrR5V2Tu7f92RsNkEzvBrtMj12W1hyM",
  "key3": "3v5Jf5sE9tWdgxh1DKgKK8z3fRKDWeUJHJCWfoawmxCNZX4XydyMinDZKJ6Q2ps9ZdYMeek1w9WLUxH8SRcQd7yd",
  "key4": "2fWjNzr6ojEsM6NfCan5Fswb4R583FU33roWPwDZNoKxw9BVmiwdEkjbtqur89ahwfRKHzPSfyRGaEqdSbZwPhKF",
  "key5": "5ome9ciCvc8S3ividAJYmv3z5NaAWLYF4rYGnwVR8yQN52eqUSVYNaUgnTuHrdX1KFpr6ssXzGBDpC4SBHqhwQ61",
  "key6": "5Y44iCTyhn6yCtmFdEqSJtJBZyZLoTwSr7aQDCyWXe5qGnmJ4ZSNsSrc8LscmBbchi4CYTFMuSFqM1BxQTDPbvDd",
  "key7": "dpMZQgxBSVFjooywCpfgrJWB3SLkYq5TG5QksYM56P6eQqjWK3zq1eYd9jEed8KGwV6JUykB2d8Lca6YcnjwMeY",
  "key8": "5rpgQrGw7THtAFz9tknFCn8whHbtDgGms4viXvo9jp41N3B2awGkd25a8MpzJENyCebSCu2nL4irGRwWpCaskQfX",
  "key9": "66YDBZZrWjsmBj5WpMnmiLycPDRKav6M6z9QXkoiRmBJKj7bh2ACjNfQEQfMtBhvSQRLr4LZHEmdhNDSCkFKExEu",
  "key10": "2ABDq9BJDq93dc8g6E2h13xT5fg4ECz1Wr4dMDyUpR1f8vH8E1nvyzddoTfLUfrimpEWBH9WUDkLc6rU3qo4Bypg",
  "key11": "3cdLFUAqjWdkhG1ZsDYXgrktE4v5fARYGV1K8Y5PFVGChsvPa9CwTusxSYgKr5xXmhxdnsih1LFLQfRj64szi9k",
  "key12": "3zjodjk7mZrnqBjjbVU1Hn1oDRGRxudind3yeR9yvD3Beebpn64qWbJyT3unXEcwPwnTeCDG1JRCDrUGiBLxkN5g",
  "key13": "2QNpYTJ1aPUzkkxn5SaCidnKTBJ36cHk6w27PkyDBVJkX19TQuwg1V3nu93vv3GCKAjUZC9EQxUvGSz1VDuhPk3Q",
  "key14": "5B4Z2jtmp787gYgpd9xrZnX8qxJpJuejnLjGajEs1DocWjdSjfcTkwMzLCd2qat4hmgwbkyiteUfxgGHeCTUxxcy",
  "key15": "4n8jKQ8szMbooCfnACbZbYiLGJQgTnpNS54pqp2T1i36KvRYj7p1BRqVUie4dyaEmpKawkrnzXNb3PbTv7tuFmhN",
  "key16": "y9sHs4ZC4kuGic3nbfZ3yzNz2WfYiY3WEX5ofCbCJujBkr8nyg2nhVxSPRCiQaSw6SQ72pGHcAj4Rc9ygq4Wtr4",
  "key17": "2Xfc6qksjdfrwoMNfKHVRo1P3BxhZXoXcVDWPVFvdFuMxQM6pfBnTkQKbeMVxhfN1dmA67icx2xviZsFMG3J6Yyw",
  "key18": "4rC9eFoi2akxrpvwcgX2YG69QUdnGHcJJXifi7RynbxYX2dcKFDHuzvr5Z1gGxj8jArZFGg23xm8APX6aoo4YLXh",
  "key19": "mdS1hEMWkmKeANLsZqnS4xur9BQ7MAsvo6Uh9QJyweZ6GQRAD32Sam5z8C8kChWBjVxahcZWxT4cJur3b32etxh",
  "key20": "SBFfQGPgRAfZZA6d9tYgu5EBZ6HXjKR9oL8bce5HU6UBgnghr7YgfaCktFDSZzqA3dJjzagH57FWiXgbEaEAF1X",
  "key21": "4Jd5BMU4RmjB8aHzBHJ1HMMNxxxp4eDuo3y4z5j3oAUt64z3m3ASfMnyh1YQFNkiocFsr3oxSxTzJbVfHNfXkLBW",
  "key22": "38NVg2XYj4fyGJF2HzknYceuHBVWyjvhQGKCkDU493q31QjGRjSpAUGDaFxAnF8qwoe816aLgyQsV48EYKn4Jvvk",
  "key23": "3FD2bL6NZ8Wc1CjWCFCNAESWF1o7DzfkXLHZEm3M6PUyzWBPzXuF9DRrs9rQMQcKZnQ76pUsGPmTGkuz5owvvwi4",
  "key24": "5cvEnmNQgGR6oYpm84Vmbtosq3AcKenU8Jed6yfQCZgakh8Fp7uRnTSfhajxEHUDLnqsBsFL4q4BMCwfUgL6VMyC",
  "key25": "5zYBh3JvykN9uAQ5gmvSgV9zZhkj3vUfAn5Rg99vvC5ERsgzrCv1QtXcGQMre5bhkuEzakMXMkW7p96n7vhaFm7v",
  "key26": "65rstzDMGxCGYGf5vZgkGbDVKxbP49f2rKgmPWXco3aNkEKeGBAchJsxobW26tsi6ctAEdeBFz73YoviseMH9Ru9",
  "key27": "5P6pP8BkunDDLLzJdyonDTPLBmSaTvX5fJ5XokunqBqeL8oTJj5ouzx5EzEvnGJCXx46CoMxcvNgcaavReN3gL3",
  "key28": "5Sq2mphkceEdBQwvqAdNRwdq88Tw7tgp2H8rEUnsarnAAaVkhSFGar1FVnqL8VD9BawfYttvaCntFreMhctGZYwr",
  "key29": "5jqLWLakgMjNS51LH2YEmonW91b8HYpcBn5Z7KUZ1FRkmPucBpRWpmNWuipSGNbcbz2a3pQNTTfhAV5QXY59by8n",
  "key30": "4QrwLnytLCGt5YL3ech1aFXYaAsNKmbnNP4b7ZXrTQPTo4KdizeKTWvKdf7bbF1e7vJCtk4JRvgFWRPptGnd9518",
  "key31": "3RNQ9ykgCik9Wtk7AyvbobSbD6ZMo9vGwbgMdeJKHeHDfhnp6VTEhDrM3wwdeW63xqLRAXacZtkZtksCVduFCmNM",
  "key32": "2xkGitn4zyxbnPDt8V8sSCAtWqAJuNFonuPwnMT1utZ4zFjPSpv9SXWjDrhwYbTNkyXbuU3rPSftRtwqHDEdRT1u",
  "key33": "2krHoMnWf2nTc2FxaMzbXHv76V1YuHfPrzXRBPtKrBfuY2WbhqznDVqpLZXa48UnwqxgWExVfHKefz8t2QdJ5i3V",
  "key34": "5MnJE83xVQMJhGeR3gJ9Wez22xABivbtCPemG1Z8C1YVSoiy3i1w19rzJ9n3FbefJF4RZioXkDtSgQXetUXFA9jh",
  "key35": "28xNvDB95sEq5YcN29mVizsDyUup6rzEdefVAu8vdc2hJdbFmTXPzEXPPf9CYWvV9ZPYLfF7swBS8XDD16Hf6aab",
  "key36": "333q7174QemRWouCJivK96kb4sx5FaHm3MfJwDZKwafBYhqXnuijWtynDy8t4tzdVtrSGbcSnyz4QfisvK3Cv77L"
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
