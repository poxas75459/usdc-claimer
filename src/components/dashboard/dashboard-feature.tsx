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
    "4wWJX5fXBfX7RXvKgMxX6VgGjLmPLmALxVMxuu7HwXA5JK3QtAeZxjdh8PKkppHPYt9V5pnVHLpNsBtb4GEtYUJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nHykoT6Aoayh7bdVVZsnLTSYWcDBfmJmm6VyuVvyDsHjBLNsz5NwvDVq5r8jNrLfHdbq8CupNUQqYnTHMeWnogi",
  "key1": "3WdL8XPPYhKKbJGfnchqyijqUrEmDaWk5TCLUcLx5sU4xkbJsuhsjY7oudPLYU2Kk9e7Ef1JaKP6RwPLXJxUH6AY",
  "key2": "63v14JwhU2vozuAANdLmQw4ZhPUhRwsPUUdzhTenaQCYVgCfHTk4gmNAFRtxUeNhVTAY3hE6uib4opXqMJ4sNPs2",
  "key3": "5ny4cJPLUPcpj4wss4kV9TAf6EdspcfVCbqF6YqpHJcGmEVJb4iK5VZgqkrQ9ahrSsT7RwsKFsSmukvsnQwafUHx",
  "key4": "2HTpwqbS9avUM7qCtKRh29Mw1jsF1uAtQayvZ3vZQTjaXJkKLNVLo7QRj9DAoFA7wVe6TbPtHqt79PFR2MXjMhnp",
  "key5": "4La5oSWNoUnWfWye3jbe4ztd4hFEvmHUrxZn34zCCxHPjSRfgDSTx1oLKdvK5kY3EkT5ggmMjd6MeV58pWNPb1zt",
  "key6": "317CUWeJXY6QtzxbjebJcA91hj1PC7ZjpFHbbQjnRezn5sa8YUU1Q5J2hvof7YSpkkMxXVvdY318upfZVyLMgpfd",
  "key7": "2wf1QxJ1VAiJFucPToVRgNYevc9LHuAUfnpowUeebePxCjTyGKri5sTfsWcc8bkBybqpBqKLGoNbiSFWEW3F5JhD",
  "key8": "4Y4rsQBbM2iJyPzkHNPzvucaszsGL14PFo1W38YC68QTGVv5Vh7foFUGeXNJ8gEGAVxXPkz31GdGPD3MiTcrdq8r",
  "key9": "4uXRf13GekDa6aEPDj1p9KgyaQWkDe1xqNXzTkmwsyY8Uv1Aw3BZEp2GzCGTKvTHbFMYXPhiqQJZYYMpH4jirDJQ",
  "key10": "2YU6tXrYGdopAr3VD9kCr9eSb2c37HCA1kMmy2roiTUcXeaUfrUWFoXNYxPJW3vrDesSkiYydeKNE4bCmwXmuqaD",
  "key11": "3u6Bpdk6P5K2DumD6YfqpSCGQVmqHkqA7t4p1wRqpUAVHhMwGXH1d6G8AH9omVRFaTLS3XZrBZeeCrnBhPoLH9de",
  "key12": "4yq8XkSQNqEGb2L7nZHoGdB4L3TxC6DzhwUAk8s72Q2MFkKBgKCpRtnzFe2FtCcnScBGfBvguWcLieVvgqtVRPR1",
  "key13": "33o4Sco22zuct2ij7sVrdding4ByyEVxqA2wpsN9yhiJ5xmqBM7TmJN9vP7aPEcS71krUD72kGiGvTJy58oBTpiw",
  "key14": "kTy8x2M1sJKRFNMVpe1WZ1k2DjdSyNhd4589e5NiTULPChBfMqvNUoX3Qpn1yXEdNT2JwDFkJ49aLfr24eHx98g",
  "key15": "3wp7guMWqUSWunoP3dpFi6BFaHFTjVkWZiXWGbxdSnUct72pAryBpweiCFuVoRxFePnkhq24vVM1KQZf5EASL4CA",
  "key16": "5UHQ1uiVpGobnYvAY8aoLYNFc4UBY4LJXdui4avCCKjWwj7gJwWD4iH6L6mqXVPy9S56StNgZF3sQe9b15sXQBTS",
  "key17": "5EZrvfkb6MuEeKhLjKVcXvgC6kHJJCDzYM7x7Xyb2s9rK5m2ot2cef1Ka4cG4LjEJ67fSLkM5E2xnT1KKA5G5uoH",
  "key18": "5VByov4jsCNCzcxRs1YNfvfQu7ovaY88hJkRw8Vz86ZoPYsCWy8fYgaXt3351YVEPWUi4F7HT4atcWwYXdGebGqk",
  "key19": "2VrqGeN6jWy6hByaAav8roDQwbwuoqLQ2pR5EmskJm5xDukskKkcST1ySkjCKme23VNqw3RRzYZrtYkQCiRnLov7",
  "key20": "4CjuTyFqx69okpeeFsdMsqSAryX82usAvVcP2Ywbrah3qSSWXyR5t3y8eMXVogw4GWnwthoTz8A2TbfYpygASMmE",
  "key21": "55RhPteMEJxFx42RnQyPxpYtEv8DaKQHSfroaVLKSjgoeHxiq9SkPyzKJu6VNdaGmj4ic1Kth8mBTpG9La9hGybs",
  "key22": "Y1vgGKFPj5kkvv9sGarasUdaLR9bygHahmTTTkPKDJsWVvGKfayWDy1zeQkmeUjBTd44SpLY3CNB7TpErHQTTVT",
  "key23": "5Ry7WyKuNXqef5bjNtnXtFpz86tmeX3CxjUNNKoixgCTq89E18qjaAsm4aTau1qo76g3AfF28UbqaFdPw4wKu2kT",
  "key24": "2hsbnunUF4h1dByMcpd4vjfgFLU6mDrKwV5XGoXhX7cGeYWbtqRAYn7z57XbJkBnQJpi8qCaaRXNypekaFbTRKFq",
  "key25": "5Uw2yQMVLE2UjiRS7hSnsLt3MY9JeFE4iWfx77w5aRJHx8MeqUB3bBCkXt5gyxG76iavCzc3wafjD4J9nwGqhLuG"
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
