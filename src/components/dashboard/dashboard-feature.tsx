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
    "53e6Uz29XS62bM3U3Rk7hLKL6Gfcqee1fmXMZDoxrYjRFmcJ9U1wjUn66tQHcBA6dhr9oSTWKyMsDDBK1AbdgnSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FnpEjxz1LToDV1MeFGFafH9WMZufi4V7qReEq3fZc5UgbFiyH6auze5mUAAreEV4JoUeBeZqLyjJ9JpW2wrCnC9",
  "key1": "4yrkatVL1QmGtPxG53Xu9pVfxb7534qsqMo7RhtvQNb4emCV6F1upq5KCwXeCotZbUSW7ssihtjYtYcKZTVRPyng",
  "key2": "2hw3SEzZQKgMAnBpZ775DbRZzUrGxcNCVSuyRMsidc5K2NoJqtdSz9wxPU5KxcFB6vFw9wh6kKoG9Yp9sYzP3uaY",
  "key3": "2iiHVWWVeYkqVJHQdSwWpH4dvEgPEDu44W45qsccz6AVXFDWY9Uu5DQa86288gRWMzM5zZthQbf5FDD2wvgivReH",
  "key4": "2HWtLq84Bw4vLECVbJppm1AuKQvWaMoSpGYU2ANWJRvAjX9vgA3tSQ1pG79L1hB1gvyRdLBju3rjoTzHQowZEuUy",
  "key5": "2ncnguRwfqdgaQ785kYHwRwERFMFoNqydtqxxkSbi6DzoKEUVxijvg3CZZPkt71cwrwH5SMD4etbFaboRB5gibYU",
  "key6": "5hcu5i7ZwwKmR2U2fkQvMojZvNiUgY4hSq2Unng4n3LkaW6FkUUrgG5eSv2v9bqTn3M5aNtMhk6SgaburEg9G7Nh",
  "key7": "5yDdbT34c98PLWvm3Pr25qHyTu4iYrtUWQeEAd99woDkdMb153m69AXmQvtK662dDWQEuBmLrwExofdXcwkyKrSB",
  "key8": "4tv4GQ8pGitbx8U8LnaWbns9aFDjxhCPwCtiU8bqsS2gzUiXQ2SxCaMHPQ1RGoCmTPCmB1EqUwR9SJeb1smQc9fV",
  "key9": "5y4DtEjL4QmgRYhACfv1PcSY93eE6X1vuNyKrx4irQVfzuiP3P78Z52WWuN6TuqceeA9V5aDz7m8ALrmTiqJ9F7u",
  "key10": "4ixHtaBm1i6vf517fP6Z7eVjifWAnYBQNDKPbcwgYFBWCb87oeTKi7aCrnpyUr7YvbHBApRAZVgjweQwd8cEShLe",
  "key11": "551Jp8pJoFHGWi3inqCQoyFDsNMWBjZW7yEsdZqnVBW9VGowGyX3HXurWfxT49PJbDS8jjp9Mi8fqyV5BLVhFqdN",
  "key12": "iMyFeRqFRp2QtevdKJo7HmtLRqr7XWwd4SEUfCgR2YYoNqn4WHHyfUnDA2TjzDtaWJunLMCNeCnGz9pEffpXw4x",
  "key13": "61k2Np3ax6nxJoVReR6tb5wLxx4fsZrdzaFPMSHLm4jAYLJH2MXtJ7cA1xaaDgwNmWS91xEkLGHScvF6DE8Ar8tQ",
  "key14": "5MHDMYgrGgYaGR4cV9BH9GZroJbCCCxyGFjQwXraXg4aa6YND4mUetCAw5byc6rJC2N4HUrrLxARBy7DLEvc7y65",
  "key15": "64hyq2XAqE6bnoi4vZZ3hrYLEm4ogm29XxU8cf9uNmgxV7N6gZTRyUbXm24HRcHAw4X7kvvSu2VGgNcRRmmDpKVH",
  "key16": "3nuGV1UdWz2kccqbfPdXiMty6iSou4VsuX2Uod6AXdFWh9rFBr26X8Cmna9ogEXKVdzMeuT1v5RwPAtPbQfQqzQq",
  "key17": "4h9XyQqUSf4YftUQoUrYfuiyGnT8f3R52qN1VWh5YPzmaBTSd3fPFQN7t7LzxXwWPdUHJ5fX51r7LLBNgKgh9V2g",
  "key18": "4VHbSAfWq6bfgbwT9SCE8qJqY6j9huvH6P9nR5FZnDQXL5v9bX7MmYhFAg8z6gXd7JDQ1aXAE6by9vrwMz56j3Ws",
  "key19": "rqgWwedm2z74yN23vtgBCnkL9KWLx1m5wuvFpg55cWfbPsGaE6sf7U7Qr8UpBqyA52hPF2pJWTXX5Rw8DrMEwHK",
  "key20": "41QWbWxkxhgpjfiFaU1JkGrQven7Cs7qRKacwNNgCqt9Usib5Xor1714NucwmdathxXBsnBfc6em7d1q4H1ADdDC",
  "key21": "4ReCm6T7CBF7YLskCD1j7gr8tXXVuApnJbz8G7YfLDJxbruXyaAdck3gZN3PyKnqNjqHoJegRinGPtedQsov5Ja8",
  "key22": "5u7segGQSSAz74AkoXGDoBTcXrYXw92wTRBk4cFXYMS2XFpJHTDPfzmJrWEQX9NtpZqBuCoPx9VW8q7hS5cw3sPc",
  "key23": "38R9qdXwFDpkNMnSeeXNbqQQk5obUXsWi2m67skyrRAW5tmDxuA1uWMz2xyLopBSxRYryMskZH4et1G3vMyPZTCV",
  "key24": "2K7Soe3nn2rkg4CbGCcAoLjEJHhWMgCnPcC5mZYh4wXQS5jg51X1XThSDxJQ9ZxRCUX433sy2A27Fr9hB2jzbNBF",
  "key25": "4tARZXXVPHpnBMxs8EwEXAwLXWQNAQ9mjWpZSeGy2kxdhiNp1bp1MGijXAYvzRoKvXwW9SoDV2KQTGKPGnMKHkmB"
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
