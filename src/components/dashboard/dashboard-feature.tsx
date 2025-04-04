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
    "7Amwv1HJf3i5bKz3PdDYHqa23PbtX5MFhS8hfzzYxwareD5G31qWWynondp5ZQxXERc6PY2NCXQoHuGpQqatRrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43qPCx1xokAV3kaLxjRT3KddRdDWWoFhSf3dpgZJDPjoY2Eb4uMQaXZhm5yEKKbNScGGeo2mytDgKsNABDfCobYi",
  "key1": "rgitifdzxKWgfVz1k1DDVg7PwiiPbqyCCMiS4FWxUBugBiA4HMSzMMjD1DTyi5QxtAVzkwCjGhPULqKBgk1vBF9",
  "key2": "5KyNw3ZJqBUQnr7jcZ97jLktAsP4eKG1svwtk4p7tgiw8kCqHkMs3BbEWXqZWkpuLtgj6PJyKnGL5eSQUe56Y8gW",
  "key3": "3EsbJdfQjL2xWPp57DJGJBYsdgsinC6u7vMEXRHgK7oUgMT1BVAMGpdEoZHN2P5crXgvbx7TW5bqZLskvdBRiqPX",
  "key4": "n5NJ4mAxWnqngcGoR71QAHYtyXwVLWSAPcb1yH42ReQeVgSTMp7d9D5GE1abyq36yEjeijNjeLGJFTYgmQEQFdA",
  "key5": "2GP9jH2cmcyS1tu8dUX7KvWrKh6up18xpVhRTsnuixwicCG72a5NKD7M7SfHWDjz9R2jCFguPHgKV6AXKFkexTpT",
  "key6": "2Hdyt1q9MWMsMyU7mf4SZ3BdJ99VP9o8ixBU4LLtQXUG9HTCzhSyi8UFGqWCZnKfFrBR99DFxg8kbfF5ioBV4ieB",
  "key7": "3KVDbMxfNKGQ7QuDY5r7x4jQ2VMr6UkHrPCvtC84Kedrg4JDpofJDGLuQB6iEdWFsouu2LZK9qXBA72tGTGKybFe",
  "key8": "5Rt7yxrrzMm8UhWDuAUVV3tewhZgxT9DgDF3WXhBGSzSSDqwpWMc2qhQKa1XKuZMSfB1WhZjahZWT7PJavaieUvt",
  "key9": "4mehqxHUBC4y6D8t7Wf4fw8vNMhobrQCrg2wUWsDP9Sa1zxcPo4bb7VKWugPkfKwvAvLUf2Ta7DiwV9BazYTbPc9",
  "key10": "3MBYDVv3LtF3LNbTf4e75FwmUE9yBAUxHBiHoJwsBbBgLZNhHsw1BLzWV4Ab1MyMWiPxUMEpNgzYo7k7AsQoB7A7",
  "key11": "5iPVUvHwPvjDqUBeSsTHuMgxdzxzbq2j2pk7Ls5EGuKTmB4HScaEVpze2vCeyHjdGnvZFNnVFL6JXPUxkZt7FU6P",
  "key12": "4NPsY3Ewj5gLzLcALWneJGjgii87nWb6hhu2JfVr9sg9pDAUXcFLUjyf2wVps244w5tZPZiiQFo13KSJQdd6H3Zk",
  "key13": "5qcFWboekt9WCFnDztEMMtQSkJ2C3PKvhu8QuPnMvU9zqFSkUz3ptJ7AFYH8LFwyf9MLpAJroTrtdxZg1FqJPSgN",
  "key14": "38s2fmK5QgzgfgdU4qo7fTJEnLDT64fud2wxbKkahTqtcMb4wP1ShTQ4ZPTAVWY4JZ75nZNcU4uKuSCF4XYWomdu",
  "key15": "7iPBV4z6e4zTax6fH6iTBH14VdfLZwcgjPnaraHHKKE4pHwgBp8SV4gh9f84QkqkJXzahgRjroV7cVEFXtfaeFp",
  "key16": "4bspZzRD7RKVk4snsn3VZKPemM4RupbhPNSh5tu3kSHdcrBm7rja494vW861LMPr1gD8xxXGj1u3GdDhNGE699Tg",
  "key17": "2SUAUUe7j6wwE7qbYsCUKRwuvy6Tuqib6BJjt5jh7VpxvwdtdF8aoQrbS7L4ps2yRBNZwQJFASLYBKYqeh3mNrMx",
  "key18": "25mswRs6JzKuFRsj4uq3fyafKncqGHrcTzaoZzdKj4JBMYvAqkPKJt5pPfrZUnR3KLPffVkdvsnsbaQNvTFHKqg9",
  "key19": "3ejmtmQdxF2Pintauq72KFk7w76su9TmbueeACM66wmtHqaKD7yhAAhnTqWtvscLH3iazH7syALw4e86uVT9j8vi",
  "key20": "WtAsCSxc9gTJNGuQZg7cNPC7wBxmyvpHMzHCcMpn8ZPDcSRwqg7vLwRqJidZqS2Eaa3JnBTGVcDRFowoph6eth2",
  "key21": "EWtWEY9HUm1nqNqtTwMZXaDgA5jUi8qhWsQvtZH76qLJpmPmryPo3fj1he5dadK8zPsiXDGSynWgb6SyrP8VyC4",
  "key22": "3Mr6kCDe2jD2bGPb3z7eqDPBtGJBeqVo5T8zrYde7dLTqY2ygJq4Wp8M41WSMX2DSY4Fjk41F5BcdT1DxaK2BSAL",
  "key23": "4fdBtitJ5RTxizwR9ZKZD4Lw8McNWg7sLf4rWHh9vwXY7H3MDRYJc1RtFJmeFu1cBvJ12EAsFttand2QHDk9jgC7",
  "key24": "3C7L4pwoK58u2FceLzmZh3KX9NQzeEtTd7wPP4T3juQic5ugpcCjcL4ixQxC2VP398y5ge8wzjE8SURnx7woQ5XW",
  "key25": "4gHfFZygKpvxqVSS5YvxK3bK9xtgmMfMFYFtWBbgVpvhHFYohZNDF5fNXXNjwg75QzvEnNND8tZpS2F7W7SGFe5A",
  "key26": "22ZhDxjGAzguwga5F8hXBX6c3fsTEWnoVNaYtwuzXV4nqfm73yqWDjy1xaDQXJPrZPmv84F6kp6pVvR7pqpw5wLC",
  "key27": "GaB93fCTZdWv4FQEWYGbB8W3dMkGQK1khGrger49yziPEY9xnSf5AvzA9Ux1JL6ARkjiS2jVJBDyopZ4jNY4Jmz"
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
