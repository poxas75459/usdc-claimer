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
    "59SeXYFMMUeEgjLadP5GzoEwWS4ZRHKLtXdtZGWEj3mvaPRPm2J1BZMJ8zPUbipupcTsKrfFLGHsV4qTmwQ5MvA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z9kWdPtzkPZhN11xbvgkAXLMScf1NjekaFAb84add5SZE7pPyweztc9Y39aWa9eou9vPS196fh4JqpxvCUNCFFN",
  "key1": "2t4fq78dVYgFnJE3MGJXhKVLQGHCgJsMVJn4V6bZw3QSLURs8zTkNVuVYp7SVA5RS9fbgBQE3MVsg2tohUdpULnP",
  "key2": "54PNojYzi2NZvVwadrSUCtURL99XYz9V8dP6WLb1g6ddKQKoRWpVMH6CWTBXPkaEVWqtvnJnrjzhRA5kSLZHBsKw",
  "key3": "5FNSS2UqhFNiNghe2zys9wh4eVcBjgNRGC6LbK9SFuPShmnXGLTyXQDhJsaHkJCHD2mPsXHaEe1dfDBobohVS6Lk",
  "key4": "4ujJUPBeiZekvSdzRq9koaE5tPL2CWHKqddkMTYTbkeFLENqoCthyAh9bBcxuLmysamtJaFyntZZQCk42wNwH6dN",
  "key5": "4sdCczmYMN69882ssZyud6PBPK4aBuT9sUJHmGVt2RQaYv9oNG841WpNg71dTmNx89QCCpoJSVB85F4XZF6KjLm6",
  "key6": "2cFA4rr6pmzmC4kD7c7j5GUDpHK2SBBu4gf3zRAVHEbP8Au1LUrzPeBtAHGtHNtmXzCtMw2aHdVMFrs8NpxeaLek",
  "key7": "4ube8NDtoSxMSSRug9pD6CHwTWYjvhf9KM9tNUxq1ChwyryM9VUW6jaZJWDEapdA5ugGcU4T6LyiXfURGjkVLYXj",
  "key8": "3pKiaasb2gjrjt1v8UKb6QpFTCAixMtqyo2Ac6K7vQNigNE8ewf5ciXTU4tigYN7Q5wK35NxYreJmC5izL9ou9ep",
  "key9": "2Gs5FZWAnzEq8CLdYSzjA4LXjvYphifqmUN9SEBx7StHB8TqndAktqknPAXHFVkXVQiqKkGWRpTcgJaxZgZFbDyg",
  "key10": "5XK9v2jjf478ggv1vnSG2TZ6ayoDUyBvyg4Cj2CZwQMicj9E324DagnXTW8JNSmmM5tfUsUfsX5a3rNTQ7tk349d",
  "key11": "3KUhwACnjHPAxk55sz7ZyyctD9buFAvAwt6MoNLyJ17ApZXEXDWYgGoSfdgXuUN8Y4vGsdw86TQNbtqLhQtFs5SG",
  "key12": "m1242ioWWqMgGSn8PH2UPT98uWC3gvNN7R4sg6Pf5iGkPwvGmiUWBTXaFMmCsJaxZzRmLazqjfPdRCCawGYJbC5",
  "key13": "c2QXNGTrzryyLGLWvWx5EpuWj6sUzVJrzZwNiNiyrVvdqDAgM8aVg9i4rufzTdek49HrbM9rx46MjnQ5PL53B1R",
  "key14": "3mJDX7FyrDXoL9g68m7TT4PomaFukYo5AeSSnFxMx3EoHoij4tyDkiuaymhctCTNjKVVn8mBzytzUK1FA1s1XfVY",
  "key15": "FexCyxAPQwiyQpYmBxUkVRE6nueUDE1rU4XM2Xmm3FAub3Lm3q4x3n5NYtkDpnkcAi52s1xDSv8KVJhtMqXYTjE",
  "key16": "5Wb8qt3wzDTUreSPUXgZz6XZA1fzAuizvATgJ5pJw52SsoEZBBDpLjsn2rcmvR98bhiMRkpEHLeEc3wVvRbmGmvz",
  "key17": "5KAMRfAN8fUpLxe1yGy7b2j3SHcGR7a2R7qjw3QFfN1ueLjrwfGmfqkJWzKoRgFwGdQisF2bP2Akrzs3nAJSRBBE",
  "key18": "5Dys9QpZtkqNwZCTL8fhx43BMgeY5wxDY3baotYjY1Gsj83CqzxYyMNvsGNB6tp2BgJNZnAjhspDmrYc1VLaMCCC",
  "key19": "xLErwD8n7RoLj3V2qTrPBLR2a477TozdWERNdDWnut38SxiWSuQnyCW64cKSZ3mUESHjw8VSvHbC14HxSPyfP1h",
  "key20": "4Lj3BwVGejkxpxYSCBSYF9RZkxZdUYgRF2SBHqG9vuwLoE3QNKubScZmZHHaF6iFromiLPoV1vZdWfNDJHfUuPom",
  "key21": "348z8xrcTjGWYfgN9GYWsfZpQBxv6TqLuKaPgZ3fE6CBH7wyPYZ8SvmhZvc9KrgF8f8n3e9yADzRAmxmksQ1Ytut",
  "key22": "2pJrzvuj62Tb9ARHexcH1eQ3Qun4cnNp5FtpJpGTK29FZHFi84sWTETwXjtTA6BhK89Cy76DS3uuczk742AKVPP4",
  "key23": "2p8B9fe4KQQQc3YsstyWS8kLvjAohynggiZ9Ega9NbbJdFT7aXcSqUhxy13ki2nzHaDc95YquSfdfmBpXZTt1LSg",
  "key24": "5hfahBD1dgXVDJPFsYWEkHB5GSSXgpK28FJAWDzg7V2UajHxGqC31AQE8XXQdvrXcGsQmSaFwsx1pPtDjwqBZvj7"
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
