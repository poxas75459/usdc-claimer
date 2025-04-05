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
    "2hNKmhaoRE9yZsQwNrZLyjUYYUGsaotJo4npa2jRKWPo21Ms3VjEjc7ZbgmoJ2LHdwobLY1nV5nFynFkrEQnYUbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mZU88ascJ9984LwWGeyNtv7RRXfWME9g86ntdU8h9V8rBL6wfNqjsfuRjY8GFabXpkeNmdtqjVurMMDvN59HKZM",
  "key1": "4vMweXFbfG2mgnxVaoom3YdSzWXwhSngiu6aWYxaZoznxfNvXpmsSnbi835wij4vdGgH541L7VB8QYGPYeqAXZX1",
  "key2": "h6khS8pnbmJ1WJpjM4ZNNSEGMAqURTqBBWJupWRdvHLuaaLZyW9pzcdJc16FuZ7w5cUnGuHTNZ4uoW8oFqH2WXF",
  "key3": "5DscWs9qXoYntVyv1EPPNUqGigH6qcLn9PGie9mSxbmGUSeK37Uk7LkgVGLJMbuVTdkUEiJUt4nSe4w1CCembaP8",
  "key4": "66bj4AiDrC3CKXnBCpZLwMgtcniqFmzY6KqkZ9xU4nJma2RMzNSbii8FKmUpLJmgVhkVQTjNRrzqAdNfGFESwU5d",
  "key5": "33m8o9QRiRoEwxwmgc8m6KdEBvssrY9soqB1q6z6YBx1kXhqScEuSTJouYGVpJAwPzwUKrFaczJXBJxxzHPpHGqK",
  "key6": "45k3dcdmKe4QgJmzUp62MUSULZdrhp8vgQKup33gGT6cn2VuC1TZiGgZURoo8AVgX6N9pgFVZhQP2x7g9NbnhZAU",
  "key7": "JSDRvFffiJ2xSA86yEgBjcXfqCEbugSChBQzniTkhrfQ9E57yZBc1WFGvQmnpQNfRFjB2mLroqBxFmeoRsw2mMM",
  "key8": "3WVViyifLjaNYFPZvcd9RzMFuZotgEDq3r6x6hTeNRW1BXZJn9gURwqjjyG8mMgqFwizaTYLvvLznMiwmJQ1HbcA",
  "key9": "SoHgQ9mtLRKnz9hJhfDbKFGYMs8hkwEFo8h8MpqeW5cZwXPkuAK6fpXbh3ed8Siwrb8C4yZeBgsQ8PA4LgUdrxz",
  "key10": "2kFoGqt6PSaFhY8UvTsMbFLgs3sWWqgjXUxTABme3NpoAKzxu1SDAJhw8QwLHe6YFpMjJQYBVaRf4DLjTVPizNgr",
  "key11": "56bkmQGiVCi5XLFeqyDx4w9ucTZ3jnouR5BbQ1TJT8rC1jSAX8gy2WCv1My56714Us837GPEb8qfecCEYZd9ZbZW",
  "key12": "5dfjcfsEET1jTDk5MvJKEMC7Jr31pZtTsTt8LRNcn2yt1mM1UEv97BTCYEBFNn8JBnZ1BdFdZZDVBdVcbzDdH1qR",
  "key13": "2mzvgrZQDV3a5ZyVH43j5b2rxBcWMQ7TzWc88Au974nR32MMDvbpB2vgq2pfFWzJN1mk36QVMJ37AzwrBSo1wmUh",
  "key14": "5vvnx6FEKMKa1mQxnpNkWH67CcbiGoQrzgq8JYrZDC6sFvsfccN1SdfGcci4gMAVRh2JbTYKCumA74rjrpPio3Yz",
  "key15": "2hfBqSXvcqi5FTBTyo127zHwx6ipBoTW3fYty4UKj8cMNf8xfTUSLk7d9AJ9wXBgAKtDmjk3is9UwgihPbg5dqqV",
  "key16": "3vbj9dnak9a6TjgMMBbtS9M5PEJMc22N27mmR7ZVC61LeCDabH7otUHVNUtuBrVyj44raACYyztDbYD1FTSz7on2",
  "key17": "4nZW5CbTRv5TB42uqYnjVvAnUvEWC52RddPAxXq4XDQdNgfqwUj3WpaqoRF48bpenFFmzKARJeMUTsKDPAhBXXwi",
  "key18": "3MrDapb8R316JjZEc1a6SQPqHDLohUAUNRsk6akvZXnemtpPrQ3ocR2qQqdtBBCo48LKxYmb6hHLRd2MfsVcrUw6",
  "key19": "5dLSui7p3Sprcfgjqu7RjXkx5U9uWzqHQW3YN6H7mEhJ6osr3oGGo6pEq4zYEeozxo4SB9CJWZcbHdeH9ssNMpDi",
  "key20": "2jdz919pbssHEar4VfrAfuJa3qubswLMJcx3DVV4mDA69Pqrcm8qCbjnayY28c4yJbm8XSt5aGn1ZTgLBSa4dntA",
  "key21": "5H8AWqbARkoWfuDa2h6oF2xgsxs1Mr16jrcc69kMM3wanXHE1qVuHxqF5SDL5FFtTv1CiGs3c27Bmm5gc93RdcsV",
  "key22": "5qKA8wRsDX2CYeryi5dQACJKz3szBqu8KQR6Z4qsVKGAUCT689mDuyFYFXwbFwa5GeKBGvH8yPW9oN7SKmECvGk7",
  "key23": "475PK26W4wDTbZzpmT92Qnuf9Lp2EtnM4fdBcQcWL9fvoXAbpbkjVYa5aaxfbJUxbMWZQLAEW8q8eNts2bjnCzPw",
  "key24": "5h8aYfptsZrVbREL4VbXy7YCXxKYVuohidrAo2UjaQtfNEdX4TpWmDGEMd7iWbFR2Y8wXyRkpf62LW6sCutEQykp",
  "key25": "2RXB4Ycpm8uCdyeb437aeJZ1WtXVqXEpzAUEetYLwp1qWDP8TTmpvWsoJXe4soSQ7mppWfMCrJFb7k9xS3AU1WPW",
  "key26": "3xTXQxnP9ZPBfD2NNL9FMMACyozC9BSuWwrB2TKFHcgZjK2xjsFHerz1vz3ZhnjyYJakSFfLb5ASgYTMBHzwUEpJ",
  "key27": "37eEgYvot94FA5UXxnayCeMRnYLMfJnoWd2d7bJiei7fTQ9xzB7cHqAVDT6Gth4cRpQaZQbf9P8VGHMzpaS24wgQ",
  "key28": "3ve2naRniJudJRJqBP7BHp2socgSw6Rocp1sFDRFLzSo5yxPLbLUESWoZsR66wuCpei5UYyqssuJsGAmFG7vUwUo",
  "key29": "8BG9ncsjrwxxMM5oQTTMqvHr6GxjXYpDRKsw9m7N8wi6AK9Dc2JhPCUnbhBW8RWDeaPfNkRpYrDvgtwgwdQxmtf",
  "key30": "55ZVjP4Y9MZCuegPWQRuoH9cP4UBxjYYVscLec8UiUcxQFeY2YENJLhtEgud78dmDLU7PG5ifThVJ3iMqfm2tCwY",
  "key31": "3NvaWDvTwLuy1PwT813fmdo1pntVkve9Nf9EnfTndDunU47LFR5R9Kh7E7HfBRTy3A5AuEbsAhuM1WqbYzYevE5c",
  "key32": "4xDtuCAHKUSwPfrmtMaMVARXM7r2ehC6jWzp5K2BsJcz1uAqiBg7uwUAmcfME5gMSwPtoZsdbWjECsUHGxZEjHwY",
  "key33": "5BmwzTeaVuesdxG5Tas6avsQtwNUZHMT9Rz2w2PHoasoPrK5wwL95MNkH2sjzp9kHCtAGy8ANrEjuSSNzJS2SAsc",
  "key34": "S9Mgt42sHLRpNMGHRp5pBdS8wES6iLeDhpE8vEsvorSmLsZp7SajhDsJKbWUjyS617YxNB2cfX1j2iVQgnNGX7S",
  "key35": "2NrzNAdZe8vyLe9dfjGE9K1yXo4nSWnx473nMiH9kdBBU3GpFUgRYPSD4C8gMFZvernbdLPYM8jHozeSwqRkn7ar",
  "key36": "31QzcMnj65s68hoKML7ELeU9GhLr28YtEJ5Vq3wrEEZveHHrE8X669romMyQm2uHp6qMxEgCWLSC4Mbr47EcBDiG",
  "key37": "ZwCzYu2AXQLJyfj3hix7s9uMtgDqY4yvpi2JrBZ9BJpmTeLirxpBwt1pYwi66sK9pLfNts5573jwFAbs3WUaqbM",
  "key38": "3gemhi6tTQ1SvQxWoJcXb7Zg1RPUon6JMvWFn3JygrpTZyFLwrQVa3n43xCvBqepFgBqdRnRj2afgL15U9hVJiwW",
  "key39": "2hv7qNWdozf3x36JMt3E1fojfF1BKgc8yRG8qEJH963WYUQvxU4yAFZECwNKEgQWEqnxTi9juYRfzBypAHdSaSe",
  "key40": "218LokYDTz7X7E8MfRfXCK3d5QjdbjTSjahLkojc21yE5ZhdqjChhKRWuUYm57bD4f8rDgQ3SvHEBk8xL7HcG3FU",
  "key41": "E4WNo6V6FYg7GXFEZuUdAJxnrvk2xB7zfxvJ84bGX25PKBjQ6aQE44fi8gpqZ7CSriM9GhnbcPCtscVAf5VbCv5",
  "key42": "5R4xWSuqdeY3LEZW8bvNJGTmhj4Mnzp3TUaaR2HEY52sfYspyChqVxBqcykE4BuZWQWukfX4rYZRUfejrEEdw61d",
  "key43": "5FmMBzLnWDJejo6f4GtCayCM5hK32ERGx62sFkbc33U4ZhdDvUm3p1xJwEUvAfW1NCwSwchv6F9iNYLzdu8oW9jv"
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
