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
    "4PULcdu3bBJgJk6Dt1zf8CASE8NgVsBuhdTYDwah7bHbCszxY1S4VUHu7M7r2zZaq4ifzPFfp6wdHAawq4THFBsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C5JieMozyiUBGXhhM2SmqemzZ5TLPLrdtxS1gn88iCPZw41cGKrREkpgPYNhFz5CLaPg342oGef6NsacitTcBaj",
  "key1": "UKAvQHFLWKPAb3SiAxG8qsAyRkNNmexeQKdqNLaPxvrsM1EE2fUJXG6DMnLPQ8WXag1Yn3nknkLAG7npFpMJzwF",
  "key2": "3hYKuPaqngfBbpxj4CkK7n5t8yF4i9wcaWvziahvgVCiRyoqLBbyQrAvQpzfUo6qj9Z6Dayg1RpsR53LA6bwHmJ4",
  "key3": "4v1QDogDnE9j9n4B1VA93bChyyw9ZuxXWbrj9CfWoRQS4GLEoj7osSampuFLZFueyMQRQk4KhcgQTGuj6SDoiT5x",
  "key4": "5v3roY4Dx1vzeiZDLPWXLJHgtuGQJnrP7B6zAcPULZCrYKqi1W5t2v5hoD8BGKjzLsmhbKFg9MqwsbzH7HNN6Yj1",
  "key5": "48aViu8uQggHqz12WUo3ADtCf43M42U3CdGmyxfUUcaF69A46ipHSEz7Ratv6GcgQMY6o84BVdkt8LsVpYuy1tLC",
  "key6": "eGmdCKRhaVi3aDSPMWFFLzJLoy2JXYsv6YS4KemN9e5Fue17K4ENep525d3au5GQhYdPYnYFYWVYBMZUwwXwVry",
  "key7": "FtZw3eFetWdHB4je6tVCsTWsBpfPCh5pDV1GJ8FjBfQNbgPADs3CQKFmY4hj4doPpHZysXWqwC3QVhZw9V3yfJy",
  "key8": "uk154HcSwUYV2a3GZSgNMybweaZpmCCNP83qpTSjewr6it1hXPCi6JaDSJEtiQphUuvoTx4NmqXGua6YvADjbxi",
  "key9": "5orGWpiWq6VkdjRao2cthYi2Kpwphc15pDgQFpMJjHHRe1q23HfAeB5HZs3LUJ7XpmR63wZ82LW2XLttEvp3i2a4",
  "key10": "28Lyk9H2WDUp8pjrhKGsui1xJAEUp6iLA1dtK4wyfA2gAA49xRsBHT4T8nPaMNrNer6u6HsX3dCeL7BfNVKTpQcD",
  "key11": "2PPoZ6vR8GokA6WpHN4bwwZkFRAN6NAhv8Ghv6uJjfgxLjedWhtdnMeemNNHbbnFnqHtYhkddMW4RxGbSCLmUP9z",
  "key12": "3jpQTBKE4n4CpPjWjNXuVCQLJcdjXeeoaujMv8xsZVfos8prYwt4j1KN8ZAv5oKyksfXZ6f4TQ8oLfe7wrPQSqEN",
  "key13": "5Ko7x1hTCZNfVLHEatc4E3mC8hgUNMMcu1WKV74TGBo2PXjBNVZxoeR7RF8FAski51Ukbmb6Uw6FDGqZqdtWHHmJ",
  "key14": "6mjqjXcHfiunxrCQDnT6emXu3boR1DUHnUkbf7z5vx7ZR7MxDzC8HexyJdTYtBEjPFWUx8oVKJZHMZijUNALiVd",
  "key15": "2dPgo5aYFkGAsoeWrCi59QwdVyHyhDtAmroABhnk9t7BL3TD8MPvV5wH8dQzjDTZUQuqT6wXdwy4NKshg4Wdfo8h",
  "key16": "4KF5586V89Horr7kCnywC2veRhAs4mVCbuBS6d7qLabCvJigyUYWXbYswDTUrzYA68DZBbvz47YR67nryczskaHH",
  "key17": "gorcWwWW71oQKajGDdcEQVFV8iRB1KCLNYDnyaqaiYQWqvXLAstS6dCyHBcASovVMDt3fojFN9U6xnj7ecs9Eue",
  "key18": "4Gxkk7CsU285D1pFPSWW46Yb3sGAqxh7QT12pPcyGDBkVXvRg9wsDJZGW9RxYk53ZH5w2Rkj3ogs5z5udZtRWqb6",
  "key19": "4PHqmoqp1Rm1p5VKBN7ErfSeJZuk8NtYh4P9JHb6qrbWX3Dj7ErKDAYNRpZwbNyyaW1PN7HLqFANPpeUzj22VAbf",
  "key20": "4TnPMAAnpP55Epukf9pdjzkYQYnSBZoUHrGcyXf4EFBwUPj668xPBP8nNaVWzh3YmpH2vfxsFhAS1gbCjnnLcHTi",
  "key21": "4MNby1n97KbiZC2X3igxYojYWhjLcM5oh2RR4JWhKFGnp2cjEi6aFJr8Z3ypAWzNBByMu6aoBP48VXKJoqpFqe9A",
  "key22": "3Y1AkkvGbFWkAVBoTvN4vJtNXnLaC5mX63zicQfK2HA7YowydaHG1wrbeLDMsg2KHXjxR71NtBLBEmNLJKcGyDQP",
  "key23": "jwbHRp9Uc4M2wM6igqiyW8wX58biCk2UZCTH7az1zMd5ydCwMGEkvzCZVs6Uv4xcEvTwCm346ixo94qaXNFodAV",
  "key24": "5b3RuVTkM2PhDfojzNxjxpHZvYbE4rtspkeacqzHszQqVfof5X8FkrkthRFKfnAQAQEtzGfHKNMT7ZkepRj8VY3K",
  "key25": "4Daf8jJXPBMyx7gUEwgM5vhBe1KS5tc6UAx2vWaCgcRhy7eu2Dfy2guh2pBiMGxJeCSrcubcnnBciGNjXWCK85VN",
  "key26": "43Gi9kpqUCjT1BndiFZvwPaqumuANDd7pSR8bqJbf9ESGkghP9L4zKwYJkiqf9Ro48mUbHST674BHiEbV8HW1MaA",
  "key27": "4gnQ7e7ZFSaL1Adzzyoz5vNbm4g3ESPVWDcjw8n3SWDqfwgVDK79eVhUVVx7gZhkvpJyAYCZagi2f2xh9GjtyFJ4",
  "key28": "4AtBVkhe7FNqmVdTtT4fzE3yKjXkqSRXhKV41W3pPFU4Tw8px5hiYJ9aWmyy3TJNbrweLVVA5DCjwApAGfyq2dwk",
  "key29": "me7MqsKikFVafoPW7WBubK5piGykKso9S4fDmkRMXfKUtiwNNRuZP8HYNfiLW9kuj9ePyNuubUsmKzBvYdiCJvP",
  "key30": "3FjxZnJNRnE67r1Ye1gHFScixe7kRgpcZLCZ9VnWbuMZuK81xnp7zoQF35VGhrXsu5Rz9nHeHBg8upHAfVLKUCQ4",
  "key31": "2GnxhmHw55EBMSMcsSJWe6pcG2T6U9wWnTiCCeZ7r8UkyYDi58xCBZBXmm1MADCbwecieJThPhMXQy8t1hY6NVSG",
  "key32": "2H7fDQb4Jb7VLTGi3YUXEEYXedMCSX8eya28uFW57LRUpdiJUzbyu2urbpdXYp66eye9HVLMpMGJnirhrCFCBD8E",
  "key33": "5XwnrExrcDriA7RJco1XX9AtCkX7RB2nQfbSGnjZGszfK1gPq9Zp4C3PthhMyVqHiKXYkraSeQGB4t7Xynsr1Efp",
  "key34": "2UN849Gafd8ScpHWmTKtuesPYwc6oT6C1UtmTHSbcbLtpD6njarJH3tM1wLUKWtwoLG8NucuWB2VgMYnxD2fZzAB",
  "key35": "2gemFhCs7yus8cA5t86yo2U8qE6Zuxui9UaSuVwYpn8yFVJj6DF7tXyy6cQaQ2eodd7vMnj76K7KnTAXScb1nEay",
  "key36": "4s99KFda9MkNEJQTF5pNtu1jKmKNUY793eUNyJYiC5LCyffCiXSZTUEehquyeDxTUFoqxN5seiT43PNwmSscLjxE",
  "key37": "NQeh1SLD7tCMmNiLjLVCwMaNLMWwWp8Hw6C4k2hG5Bjh8f7F4vmFqTKuhWDR5nVJ4UgAgBXKQU4JJWYPahRsXHs",
  "key38": "sSTc9EYrVwWPMmpmHihqEAVLZvjW1S8o6Y72W8PuyB6q4Yvip8Jr59wvHpDvEyaGrZSCpr4XcfKJAysdNHwVBzJ",
  "key39": "3chzFkAyzM2Czyzv93TBXgCV9f19YF9kmrmTrTbCgVye21uFzPAio75dtaBfadc3T246DkBNMAamZFGgFHcbuo11",
  "key40": "RrZ91vEphmAfCWZVtyedHEvHEowTLbYmuHbyYW4V173XBH59wNXb7jEhYzh9VyQWwewdz2E8jc8UjxjBhpgXgcy"
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
