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
    "5yevj14ZaRt4f6q17PaG6rGBB7h8Ui7Zy7FZiXdZeVugFkP634qx1t2wYd2GhJXAzBEqQu35hj6ZDzvC9tEADmAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YEmQ27Bjot7nfgvCpc9skYnRS68FxqMucwvdAHGFxTPUD6K6oyf87oesYyh95cVQ1sJCGnDAixZ3H2cmrFZp6gK",
  "key1": "5dYtnyFqqBb9E7sBTiisKeLKxycUErdKF6LuKpFwabpi9tvNXC6UUJuXgT5dKJ4AoS1wZTEhwZgxgGA4jBbTxovD",
  "key2": "5kdxS3wN1TMShygpvurhWWh2irEC8zVFY93TYAcof5pW1cJYqnmgDbisC747XEuBQm1xanU6ktbP1gT7QH5tFYYq",
  "key3": "2zYSzTDQyNEoXfPFeGHV5BCLf5uSzFh8WDY2kK76as3fpw8YTjKJRm8Kw9sSTniQNMLPGSVSJigvCMBRE7Gfc4T7",
  "key4": "65DA1dw28rLnmtLvqNhCJZm2ydmXUQzqEhnetqfEexnfbuunBvHqe5UCiGUtN1vXvL9eY971sCdM6o12vpAW7fG4",
  "key5": "4NBCCyaNb6xrZg2ZqucQtJmnbEExwVjRi6tNLHFRKeroPPWkkV9xk3qGhCMyXFCgLZFQkTPoyeQJ9E9QC8arogL9",
  "key6": "5pe39xiA29T2FiZBQFLtU4QaDHe91BefmE6fjf2jXjRFgn89nkGfpRZhj9ERNktRGyccnfii9T3tkjdzjmymggzp",
  "key7": "2UhdZFJraPAihE3x5NFDRuBPrBG41PaarBV3hxN4njvqB6eyrcC5UcpSWzBwqNg85MyJi4CMZsTA11JsuunQRVsR",
  "key8": "1kDqVWA7BefSF6nsgN9bKjRB6g7jDBSVBZqD1vSK5zn8qqQdGvnW5gDwJ779caivbf1UptJRQ5KAJs8UDV8e7Y7",
  "key9": "uvth7ynz47qzTdAW5KWr4sYTQTX4odFJ5d9trBKknsPvow8TfmiyYZufMZ4ipvoPUV37ZuJuaTA2CPsFWXYqJbz",
  "key10": "qRZNWMbXEiY9RGZ37fxZPGaEFMMErCkJVBYdDpYQNhibt6KxCeuG8DyVDti7V98iNDyrC9T6MVmrD4W26fWmeGF",
  "key11": "57QxTXfp1AfoSocYhBmCYexp1FN6AN2gu4KNYr7S52nh9Wu723gNqNwQG2kxeL4cUwMN9c6yyWbNo4EP5qhqeonp",
  "key12": "QmJQX9vy1ssMeXryXvSJbCMuaNhmZAWYzndbJYLoXmaKkZ9SfiDksantbwXgs7UfYTTxiSKcdiDtvhS194SAbjD",
  "key13": "4Mqzu1tNDFskera1NCbjGwsLPh3M2HKNUkmpKU3BAp3XyTurMxWfH47VcKEAzkcGWbUyQiVcdHZ4qc3MTGPNycCs",
  "key14": "26zk8N4rzSgRYqrfpSsjXBsLdYDyEPd2aSmLVwRHs61HZdtLfHFAgz43cRjtC9d1ENyk9foJ6bRQiP2zzVqajjLJ",
  "key15": "2bihHbVeMqa37CM6Xe7tgNhPQxvk9br8xQdnDa2ETiU5CQZCUYTso1T5D1EBoZGbKYvBzjLnVBFT9iNv32xHLPT2",
  "key16": "3fKvD6JMav7uCUcNMZgxs9t5Vj7dgcExGbYxAvQxAm3FLFkGaCrYJiYnzMFhssp3y6vbavQB6T9q4AU7UJQm6nai",
  "key17": "L3mFKMu1f1xM5hr8YZVqSwyPMVvA7EHViFrsCpJu9nG4rhN18tj9mJgVsAxeQsZ7rXL5ywLUGttb2TpXXk7VStb",
  "key18": "4DAZm9Mq9jtrJWCQ5HkMkU3PR5wbsffRxttmhKZz5wK5rxaLV8eKkj6V5v1NTLyf8V9wmDx1TbnxkhrgE24oGhXs",
  "key19": "4L2JKspxwmcx8ba2T3YYNxXwfewNPQBLBqvAMJ3vyYvx61A8GEvrMnD5yyEQh3gpoSGrA3uZrwTKuwMw4U9rWYhW",
  "key20": "4oQhJRmRbyNFftKRGNVuWRtjL2zYRKqL8fdqLFb8m6NZ8TZJGdYzg9U7AWRxcUcxrJH3h5WUH17NNwFjnJAfNJvk",
  "key21": "5ZKYo5YEt9CVgWG78hy71ycP8CtwoFYryxrP7g5p9BFqb6tTz2eCceaHExgV51Lj3obW7i3o5X3pUnsiYz4JxVNx",
  "key22": "25acq7W4RNXk9eW5iSy3XiE2SbzvNbZ6YJrGFDrxKk2jDkAkH1Uyec7tgnaAHkUDmJ46Umd5Gy4z4qxqShSmbSRs",
  "key23": "5AjYyvXwAmQL4h4HfQbogTTdR5LZaut9VBRj3iDmTDTPQuRZ9YNqBHbEj7r1ujS62oAm3UbWsKzrgtPxZ1S2zQCA",
  "key24": "YxGJE3w8EVobqbV7XitqAf6s8vhX1jqKce1YVpLP17wUCVtP3JiwqCzk6mees3GHipDqrcgPZiR4XA8PFsSnRGA",
  "key25": "3MbbSU86nYRPUmK7ktt4v5EAKZjt9XegDE8a3NZMaKprCq4iMwdkyqkpJZG6sNetbtrjpNpC86wF7SZ7Zd6BTXi4",
  "key26": "3yjwrFAc6zbcZQMH51MN1LWoF785QdiptQuysDiAZqoRuoX113bpk4s83MVqso5NHkuBWq5BveyYwxiNaf6Vps6Q",
  "key27": "59BrCPL8MH66gu6KnmtiUv3UNSuHpkxa4ZicZ11qUtDVwwV1o2HpaqVXQuvkWW5WrhPVg6aX84bowfnVrmJcjS1Y",
  "key28": "2NYJzn4sJz8enjMh8fznqfAQsNcKEetHyKDHQMz2zWbr6trw6KHA41UkDjsxDW6xqPCaJntUNWfVvuRHadsL6NpA",
  "key29": "jz8DUnxTVm439TF6K71SkfxUvVuBBSsnr8QaW4RHvgxT2cqk7A1hdEmys4ZRWXeVLoqtakMd3wxoH7ucW5fs1Sc",
  "key30": "4L8BPyFq9csRsBomgkqKymALzG68gj8GU6U1ZBfQdVx3Au32iRGedJBTizAFkqNNmHgRwVtDLbj3UaEvWC3qvfTd",
  "key31": "hejJHm2HYPX4KqVsm1nRpvmTXDcmpvWh7hY4kZuzRxnGTJWtd9qPrHooHuZPP9zvnnxVV4jZWkdztW5sAWZT3dF",
  "key32": "3BjQm96CoL6e3YCUFPMyTbWiRU4KcjAqssXdEpEwG6HH4Hgyjf8vKqJUV4Gvu4ikaxfA9Y1CZrncsJoidMgs4Qq6",
  "key33": "FzZiDSP25gRQne45sr6JNA9hCoPZMYLs2CJqVzA3jCG2N1WoGVQNLZn3e2PJMKJaoxcUXpUr15JPvMaTEmh33bx",
  "key34": "5gb2fJg5GUjTEsFksMTkKeGut8dqzgknxMNmBiLcemTfe4GQfjwrQpDoLfJMVfoUwhkaLa835LEcckV5xpHLPoA4",
  "key35": "wahu35dQp99fWbCWqGBQqhuTGQoruazKzuX3q2afmw9dXovGqwKkG1umTc8dqKfsK1ZXiybiAZ3SApdBUa9sUcd",
  "key36": "64LV59qg8xf5S5jznFAAWcYJebD5GQ7RHu4zKQBRG1krCJxdXVETwsh71Bd3SCGghvS4tBr87mcrfoJaWogM8hTY",
  "key37": "4bvgL5b4GmUa94mhE6Nxgbz2FZUvKE4KHcMBuYdeWYd8rVZDxAQHjhvhgkWiigznQjfDGZD9aMZqPyQWDGhmxsqf",
  "key38": "58KMQN83bZ7hvT1XdewbVeQDvyxfNadRTFHWQAWtaMkjyYAj4J4a7Q19FsCa6Ka6LYnYY3uaVzgFzfWQVUGVU9vz",
  "key39": "5k7Sgf9ZB3A9E478AZ4BFHi9QdBWcsufp482gxx8xDJ6KuyRjmdRShTrM5rNPgQYKEEeo4yPbTbTeRHpyAhKjZZ9",
  "key40": "4SBoF8o6peUGz32XYbnTFgmaT3vkgdvSoK8h74sX8LBC6o8fwAJnQyoyQWwaSjgiQDTxJoXtU8hJ1VkhSu98Qmiu",
  "key41": "2x2p9RzsnWyxKjwL8R9djFznqJKQkG7VDNMEV1nSyFMkrAVMHAHdKvipBBS3MJTH2cXFn11zHBFcDvtrNRVS2VBY",
  "key42": "5cWujbwoqyQb5N6ikE49TjfriRdFqu3A36hWhNzBVMGR5RsmjfhGhaWHbM9HqcJNVFW4RHsEkyiNGAi8hJTbaKsD",
  "key43": "5NhFD96Mrf8yJPb1KuS7tLWC8udDhjMXwQhYby7c87iT1DybcuitcA5ctDeqxH894iJu4RG7spSRVutuEJ6SMuHy",
  "key44": "5AAjwYMz6gkuGmnc4qGv2ro8EfvQMcSLEgmUDn2XB4WZ3tXAZBQzYCNX197Dmo2QcVsukQFVZpmhiK2UW8sA93ho",
  "key45": "349dPJiWq7JqabWFtGrvCqmEVHyULGmFC47aLudBgL1RWcMWNTAAxZBio44WGrCPSzXqEayAyQ693WN1MkTNp6RL",
  "key46": "2HQ2YaUqXugh1F4o8mcAuupGymXRF1NabnvFtZkbPUxh3PZDSYZUzaHpnnoLFFiRr2WM4L3JQcYtJXcx2M29b6Tf",
  "key47": "3WMViLi3gmhdLpyCW9PZCjikcwXyGDCVaWcjJ2S5iK49EQuDAmuQ9RyBa32FSnkYFV6DGLU7PnoneExLjznpop7e",
  "key48": "BBynwVwNzrDnDyEQBNjVzz38kTCuWp27fYYTmeztDAiUK916Z4VanPqwZRxeLSxS5dvrnAW9p6Q11EAyqn2RxRH",
  "key49": "WPkHsWoaBqsXCcZtTxYTjEyihG916f1b7E7cMY33Zu7AsVb711u6TCoTpKLxnuPTw5VrMMMM6PNkpMvoXGDoha7"
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
