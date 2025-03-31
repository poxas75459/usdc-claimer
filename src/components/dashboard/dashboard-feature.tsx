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
    "2xsnJbcB3JmRkbCHdh6Q8Wz3t9DcUz43ehwQrwMF5y1NBSPTw8RNTbniPDPtfGyc1xSk8abkJdri4LbpoeVNT8d4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GqRZkwwfkRanPhAScc84gyrgtpYt3B6orUK77F17Q64UQHVnotQJivs3wBP66coZaPL5KzQ2YJZJQKrHyJXytxm",
  "key1": "3UG8nkhQRxUxrcm9XS7o2Jzy977xjf1UmPmqfNpfA3w26PZKGojftcGhDAb2X93SXM1A8UMZE4iAev35HPn7kQQa",
  "key2": "4Yr4eFFgdiN4WksahWD1131YULLgFJqQ1CbMoo5pMnBoSYdPBj3zrgFya7JMnyV8YQnLTL8EDByDxtdkgZRG2L8C",
  "key3": "5hkqTNp5Ddr1XTZTA5ZC3YiaXUH5ofcsDsadWmSXZmkQJjLFPD5sw5ynw3dcWHHcrq4CFK8ZfRYhoYeKgAELDsem",
  "key4": "4LTM1f2kDHHhYbPuaNsnQZ9rPQ4uEmC8644kQ1MK4oZdeUM9EyXGBZjg5ZEVjrCrmRbjLC86Me8Se2ow5jAeMPNq",
  "key5": "5KyKhuirMEoG5Fz81wSvqhMeJAfdJajnpXRr8boPfmHC5VNyNyfBAP3gh1Hqj2Ud4rCvMdRvstwwtCuDPuKQWQz3",
  "key6": "SeqAXSU2tPzLuqdN9h2KTEhajggHVhQq4NEEcwQQkNXyAvNN97jsq9RfEXvaFu6PH2DDwz3kjdXeFF9VeGaKQgo",
  "key7": "25bU7JQyYM4HyqwLLSyVZGtvoyymmhusYp38Exiq77BaTasAYDNY9JS917CzfiUSQJkT75Cykg1YvEPSeLqcdduU",
  "key8": "w2oaToM4m6rJR79NHB134TTh3RvZ2hktCSQFLixeNNAva1H9cJPjxA1TdbA1PurXocMQhiYcX1RPzwmnzidgALv",
  "key9": "4uM6hMGH9BjbDZ6KBZS2TztAbYN85HnFwD1FCr47Z4zoyaxVNHJt41xLgV9Jwcxm7S21T2v7vkMzTBYnboK1Zu1k",
  "key10": "4MhkDBDRdJCQQNyuGZ7kkRft68UHnC5DXrPypaA3jUvFg5Gtq9Ms74N6zPwaBMwhwhNkTWQPzB1XGLkk68GJxJib",
  "key11": "3XwozMoCv8RS9cooxsGjX3G1mEo9TgYAGPLqu1cE3mNQCrRPV2vx32GcU4HQ7fE5kWbx5qJ1UpRd95MeHi59QzyV",
  "key12": "3mksSLaU7LaYgbHyhuCbQN8F4Dkurd92YBcdvpkUFt2TGpCmk4ddj7CfS2DEx3dcCeL1gJoRabzXuzA7n5rtTXc9",
  "key13": "5eZDBpBwKAWPQrb3Vz6ZbnTp6GgeJdSNNsYnzK56b3JwmXRfEnMwGiTCoJxxUJu4RVEmE7RBtMymFLkiBe2cHkxg",
  "key14": "5hcBLcRowShWLErN1gHXvGHtmvr6U1arNMUokLsv3tk8JoUpY5GcikRJuKmoFrVCC647BwYY2rrA8rdtySYK5chn",
  "key15": "4MmBBm5QCwu5RMNSDL6gK9fUmxhX5QRH3vZi9o3NWUw1ViPUvetXo6mMBUz2JQBkHWa2nvg7mYvxpF4Mt3hHwg9h",
  "key16": "YnDtpD5BDmZ5v477DKJnqCWxRvTsNM13C1NkQF3AsowKepfjm1sQhm1YFQZtUMbsGh3pgcLZXzfbhTcpHGvThuN",
  "key17": "3aqJfAy8vBd563wLj1sHETJiUSbvBdZhRwyS97kTMqTSSiW2u84WECSfo8QkAeY1ufBnV4gfhD8VjGQSDCnuayp5",
  "key18": "4Uwoo3RVQyATsUMBLgzetmFPsp2MkqSLGwSASfwKaK9Cen8sbdeNugM7pGdYfWKXMRff51T23388HiwBb9aFHGZF",
  "key19": "Y5E3f81NzTEDNBAuKgmNRzZN5Kcn6k66u4kR33XsrHm8VoLWZKhs6TUFBUxZubdgMtTzE6md5UpLfxP9mZnNtJ6",
  "key20": "3XVLoGWtQyg4bMPpNQySRVQdhUDpRAL2ErbortDadR67TamGCkZDixgduyczQDFwc5uRTy5u385QDGFXxetpfG2e",
  "key21": "3EcbojbtWQV59azDG69efEgiA8QimMZP6YVy8cbmTCsGH7Qti1sCiNPRyhRTq3E5rNcHmVtVk7XF4huDg9NVBybJ",
  "key22": "499NJmAm9rGvuqLyHTf8RPbnbWyhMzxwuXJgJgEH8hELwSSHsigg74hkGJs6TFZ9meC7jhAZEmwWBXXwdUoXqwNB",
  "key23": "R3jngdSvFdzxTf8g6tg2cTyNdSEPvsjb1biTgJzb8prkhM64Gtg5ikYaHCSp2Grtd5nx3J7gCRFKzUYem5T5LQB",
  "key24": "aWLj9kdZBtJPkKshgDoWoZJPWubGveManzmju4dneFd3vVx9qj3NskvzTwBtf2wWVsBJ9iToFRXAysVddWLidTL",
  "key25": "5WrNHTwLbxxRRMxGfq7HhCfynNe7sEw8rnTWBgXwst8LvNzVy92XY74K8QSGDRUMn7SfFBygxV3RnhhcVwBoaVLb",
  "key26": "35wj8o189ViBBy2dgZin1kPfkZao4vsvotQNoP8j2Qvcd58bEW1P2zuDACziHTrfE9pkisgFqGU4AzzjJQW93BTM",
  "key27": "mrHfCBgT6uFLDwCkXoCA2X6PmXSAecpCVXZi64b2qC4uobYahkguqcqVfjh4gmfCPiwdix6oqqZz8RMkzhMvECX",
  "key28": "QeP6JwMPT6B8Cf71MA243mLrs9d8k33CvDPGG9D3FRpwiLSWDUWN8Jq9AghiRQwHynH3fn5yvtXNTEQ97Zczqkk",
  "key29": "3bms3uXGX6b1Shpb71VZHpgrQPTCxybvxpXZGAgnvB7MeLt4mqwdAX2pjJaYq2QEq75Z8MsPUyBAtfyjdFFqs2fi",
  "key30": "4ikCvhQs64dDq4ie33gWe85fj38baDhFAB214ACVndQqLA9tnn5FRkgZcpy2BJFVKtP1bASBmBeXvnedLFWnpG1a"
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
