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
    "caFP4ZW6vLJjwvDBsJq1bWapDAjPA34yLv3p5Z1LvvrDb9P59VPeqeTEivVvP6BHxm15ybLSHHfA9R56UT3LCep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2haWWoNsjARpFD7NubeBgMfhoTyqP1SAQTceYMTQCdotz2NJjt8RU8jV1kdJ7k3HtsKeRKgUWLUNQyZ7iAMkwDQM",
  "key1": "28v5EWT2z2QMoqGTvhXhs5aHw6L49KW16qxFxuHPbLYiLCfaDVq4XJHkVHD34PUG6m6dRDoiH22qs6N54LZTHJx5",
  "key2": "5Ui456CViHCc8wpCRioEwm3dbB7C7kEgy2xU9yBkXn9fbNQLK5R2FnXpS1Jb6GrxZzG4MZM3tAazbJbSQ1xj7e9w",
  "key3": "4yxdM92DpdChdAiQNk9ekvpXongv7PugBoCop4EeewUKyau9Qququ6GoYieFPNMpvpQzSSkeNdC9SA32cwBkApkM",
  "key4": "43RAUmGEo3UhpWuwJXnaYbE71z9fLdpWJYqv7ywAGZXyDwor9gtQDeoGGhuRezqQwU9BKEXGWJAfCdAGKr9V3tcT",
  "key5": "5DJzbjCdDSTnK5fAVeJdn3yuZkz55iX5M5maafhxmHh4nCVXEyekdtKU33H2smmCYyjgveoAnEqUYH3vawCFCnxA",
  "key6": "5wSzmfzURJnZ81hGh3sWiJBYoFBacpVzbVDiabm7b9RMk14Q3TmoGTscBUiJwYuTnGJU5Ra4DNh58zgFRosbnRhd",
  "key7": "5ipH62CzNR3BWFn5UmBRZBPifyTm1pgtgREsN8Rv3iqtcJMZKLeNpk2FCpmNig6x1MBiZJREnTeq4T1g8zQsTpBf",
  "key8": "5WtCo6jo7Vj8StH3iFTAecadZyQ1yHJ9He4tqaLVJusDeKaWgdh6cHyPHhZ6LeFHwGfwdgUa8rDD2V7yqEkyPvhn",
  "key9": "K7nKnQLsEXKwVSxo1DEq3QTxwKdpKU4TDnpQawsoNwkwWoWbBHHx2RCMi4FrcrYMS9KJUuwpMQBUxG3iRBFMtHp",
  "key10": "2hTVVSq8RF2FbASxW8phTeq8UpgaMojNQNmvN4cqpHVu1EoJfai7teghhHEyrzztbQ9aqZe2EWcHqbGeHShVzj1V",
  "key11": "4rc198j1GxxZz9ZzXTXQF352LTuzUgv6vJmFjBfuznJdEvJHN6wmRKfXJsAvSDMbkPRBZWggxAmryCmEviwqbf6w",
  "key12": "3iPyPqtaw5gMXWcXJPWzpsfA4e9UNWKFLHBHsS9igtx9dqSSpoykY4iH6ZXKM6RLZ8dcRVkAMdpGnQZt8JHitgnH",
  "key13": "3aM1xNTd7zryBPke6M7b3vxvc5Qp4VGoAbKZKwJS4BtSLdBYQSrKYPkVbbu7erM8rcycR7djEVmKwb1PPt2vWXbC",
  "key14": "3R98SkbLVVdvJoV4CcrWeT23nEUnrUFbNpvA7v2JmKZqyfjb9d5h1sHBLDSabzC7rJY4CkxH2vVsjvxshBwFteTZ",
  "key15": "67bzZ5kABFLqGGZMfDTyKcTJ4zEgDGC7m3bfX3WNCC958bTouyqa5Lq4P1hc5g93YB8AdhriAh8EC8N3cJJYCgpK",
  "key16": "2RhECN1biAwajh27nnb1SqtmfMsU1ug2D1rT2iQNBjisXQ8xzwwWEkRs7o9xAmoUy735JYRcnUAjdhJtsra4fTWu",
  "key17": "23pqB65X6Q3NPZNGsjtFrUtirS8rb5dhV7AcnExqq6jP826dy8pKtwQDKdPNz47QYMrkKn6bQnuWKU6k6vqnRFDo",
  "key18": "fYFq9WspPA8hzoWkW1SAahbYxHGXEo3BpzeFvV326fMsJ5cBpzDHMSdZ1mAC5V1gdQfwWsCAaTzE2L8c5MXy4Pm",
  "key19": "2DCjpggVuJ9F8Momfwm4QV3Vqa7VHoYXHsrRCQPNKULKiFmTMT6BEar5aAjNaXzbb3pXXTV2p8dzTG1s6DgkzjtU",
  "key20": "5yiiFM6nDMXkrj6SmNYQMYU85cyi5swV6KTp5kpHHskGWhBR9gX1Wvsip1zHbssZxGu8rMu9Hk6mUrVoDybmfB1m",
  "key21": "1FnvoL1MVkS3Y2rKSbTP5VtHf86toXhGPoxQBQxcph8xZvgeHKZakhhuuSY7k2vLgfU2s7HDftpTRi5oUTzhhkA",
  "key22": "aWfhX3XfowmX1VyV2tE9vDRojvPcAmE8sSEe83RYchCPuCJF6uTaLQ4TBZJ9LgzxtmNSjEaZrkJmv2chu85XrGf",
  "key23": "5pRHpeamjq9T3kmdhtAZDRkDbwsPqASQD1Pk5d47BKeFatQxhHnR4e4nPyBrHuiCpu7YisDXtYFS8q4no61vm2A4",
  "key24": "2vkrZiyQeuQNnFYQzpCZK9aReZJJ146sAotoyQT5qk1SCBfCJaAkG9wRbod9X6cNrtfUfApzw7dUwT4fYRdf4Xcw",
  "key25": "uKNydd1ToDJ1jB84P72u1EcV6xSFV1MosTtCy5XLKsyRdL8jz2xw2QpwNgXuRzdTs5RpDKoP6XyBqVbNVz6cYLx",
  "key26": "5vcJcpd7bKn825c34VJ8ZoavPQVgxM985EYhrwzYHwmG1Bw3hBtp1qgBkXTqiRMhCLGxXgCXWK2cSMDQTzPVKhCF",
  "key27": "4GTqoQkdmrenrdTN9VM6biArAMeKBcZ3FKfpMQnVwXdEcYLKC9Z7Gi7gbkEUip1zZTVANDMya2Qwyh3wDxRQ8kao",
  "key28": "3Rh8ABZqo5EDENFtdC9wYZURCvyYwaiPZ8HrLYf1FmchsxjaoUfh1ZGw3VuCPXSp6Nsm57cXBzBWjJxCqVzTNzSq"
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
