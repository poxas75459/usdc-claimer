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
    "5PbbvhTa7zNu2fA2UkFQoaEV9t3kCaXUGrEZDZZrrZYJVZrEEXYbwvdJg1sKq6APRVXtF2tb3wD6FpSycBbGjrPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yTTt7cm1mYH8hLJuWtKLvhaj13p77ZccYxtK6qCk537RtUzdunp2yy8XLtj78FJbjGvpRzoUKyxxRffGAdKQVuw",
  "key1": "3fqrbaYCtVPvCNP74LHGiWMXgp2jCLgjDvyBx8WhCpPXWd5VpNo18hMy4WgmGRrcJrcCee6NMH6UzfmsZ2KaCaqM",
  "key2": "3BV9pq3H7AARuRsedjta5jRZkbPeJjVBxMn8oJNoRDMwNaweS9mEjd3mzWA1zjjEcSs4PonsrRFoy9jxWaQbQzpD",
  "key3": "3p5od1heyvLdpjhqmTPoqnfDKiwYSYd3dTeQiQ9L5JR8KuScDtmQ2HNV2dZSvFmU3apSWpsYioxqcEB246p82pKJ",
  "key4": "eWPGTAyy5jDAeWpCbu6GWLJsMpyRyeY15UvbA2DjmEVaBomuFEzTB7ud2tT6eedMjdebNrnqNkSF4ca5hcgCspQ",
  "key5": "3wLEmh5hP92ZjShYk8SgqbqsEVgDDHgagPf51su7WAb8Qm7X6ZG9Z4vt89FD3EzPYJTMHix6fKru31Y9HFu7XfqS",
  "key6": "5bLzYRgwdPNuHjGWSqxqmcXrq4BhgmRWQKnXqqNonAKdoKmSDyQJKm76uPe3y6Kjw7tGv4abxiqfmfx6CZDZ1JLS",
  "key7": "5S1aJVv3qd6jcWU9fMNN1MikEHnyRw8QjofKfhDiLa7WRZNUHSsMvk7iZnaqTrAWL7jzogJiRgxWaMmAgnJgwEoP",
  "key8": "gsepy698dmVJhbywoB12Q63xQWw6kU86eREdPBshN3ab1eCMeLu3ByzsFYEJmnSN32nsn8GvriLy1MYTgDBTCHH",
  "key9": "3ufECo78aQXiTsQuAybnEpKmzgo6JipKmMJbvu5P6Rb6Q7oSe6VVML8iZv7L3v1spKigvCbJHzuwpTZga7qByLYD",
  "key10": "2XjspXuae2a1kyJAiYKNmRbaeq842MYJHi9ijiEprh1p5s2jopeBNEK781ukWkoKkpGfvGJNiLhfQ6uVqAxBQrr3",
  "key11": "53WYoFPpwf91SjVE2ZVU9DNVSWXkNALgdox1BNv8Yxti1ULXTa2g264M4cKz5vrJvRRubXTW5qPaU2pjV9FjDBTv",
  "key12": "6LepHo8k1ftJqvYun2hQ4MReXiytrZEjVjXHNNEmCPdusBbvVc9a8hdfVvqEKqqj1eB9EaEpX3NowGoFEVeEB3E",
  "key13": "2QSvdBFZFKK2RYPPoaAg8d6SahD72v6s18abDGabVVNoUrPkJnRJt3XcVTUTRM7FoRFVcuSdyrdTZjk7V9utRgpo",
  "key14": "2yc8rpp8Wgk1LWk68bsJdL7r9stkCqqyVKtYn2wN94utZ9BAABbV8Ko3fvMMy6bfKH2yUXowAe62rQZz8ERZwudV",
  "key15": "4vvjs6T59kXyMQMYe2CyD7qUjE4sNTpgtFUTVeZphFubrxGRSU53bUSsSfAKUK1SzCzwQmusZXUC9G7v9QoCmrxY",
  "key16": "2AtYfrtKQAxjM7rjXUD16iAXZhcowvEpg6odPw5Lpmcmv3Yf82mqSFHF54cM8adggQDfv1Jmrmr8wUUvLDdig1Qs",
  "key17": "4MkmNVkhqHfs9LUP4NCimKqRhWgbViZGMGuajQXqv5vGbNm4MtKquBm6ZxLCinFtXqduKNCFUKN6vPUu2Sh3RFq4",
  "key18": "23KXyrKqUB5ygYPgJwD5GihHgfdD7Q4HWvTnkrYd3Xeovi88psJk15sRMV2joChxZGXmmo5QwwaRFTRRqEpF7EuG",
  "key19": "45D5CFn6THLmw8ayjbCknW6U6xSLsEDd4oMPvV1JPEqqRDGHPLS62W9Km2GALX4vQBvasEENgzc5WDDY9FQn9CNo",
  "key20": "5FJYYrNFU8tSZxAtYja1SjhDiNdDmiPhJBgq45DrXa12VWoNoNnKjA5iFYqHqt8zWThJUvmbTSsHd1cBbnt3TWCQ",
  "key21": "4XXdcsufYiAeFdug6xYWjtjmCHK8B61tncD4fEVZfiMVv2uVVAX2QmcLtefyYWxYHVaXGz44Mm42ejyXZ4znTXCH",
  "key22": "332KkGgNrLzh5mUYEEJufn1kaSc71LHAtgaJwVaSHHrce2piDRk5nH596V9WZDiYrNkkPoyo7EjuLWj53Ntpfw5h",
  "key23": "4Zp9cJPQKEA3HkNULBUhKzdm76uWQN5G3fBRXuiAmVFodyN22fLdXT4LdYLCMe7b9tycjoRTgBotf1EreATUHF1f",
  "key24": "sB6iF2T6XHqEw1d2yHb6aezrPS4aEvmcJvQc4PFvemfyTW7aGeoKt6weFMHSGn3vLjQeTvowA19i8bmr1z4XUe9"
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
