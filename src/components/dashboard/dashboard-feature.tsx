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
    "j61RZd7BcYHzCeGLAp8xoXr6YRdJrzry7z5ycc4jYJunLMCcBrvcEHvxJKK9UC5uhFzRUoxu2R19DjpXq1bKoPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DaUrUHv97f2GeZJm3ZB6Ce73pPAgP25FaTE2XzK5qq6ggedtA2gHk6sMj7C4zxX3MZm7V1gM9MeiMt2YTAMo45z",
  "key1": "4yL3KBpKvx8qm9otk7Bj8Ud16Udk19aeC6CoZss3RZLLoXn2bLeiUzDxHXiCVRr4KPwxKuLFRVUKWG51siALkEoe",
  "key2": "4GptJNovRXaaCno876wgrWgxU9zc8SWH7Kf73EPoL8mNgTkDpNQyoaZw7pRtqL9ymrNcVP38ESrQMFgVLMN8cYmT",
  "key3": "2RnVeyzktbTYHp73AYBACh8cgozNAn28owF3QsQCaE6JeYq4wiZF4DbB9CgYNgCTdNosXzrUtRY2MvXJB4XrgLbT",
  "key4": "4KFFj2P8w9gp4VwfcGDr7aSvmmNmZh1SRr8XxakMcC582syRqWNkxVBPeKWAYh55ZXAnqg95sDUy5LTXj7kLtHHA",
  "key5": "2UbqYUpcLvr1PRmXb7det2BkbF7meJzNvLYqT1nFbonPg8LCKJrSHhMvczvna6u8rW4ZtbXtx3k28654orjN7LMC",
  "key6": "3jSyrUTHscV8K5ctH4hvFHAsGJfpgQu7LV7BVV9rADnFTAHNtnDVqWQUafGQBtDdkkAfgvAtEWM3yV8jfYVFAeJz",
  "key7": "3gLdjs7VKmbmqN8XeKobDAkVUXh5WC5uFKv81MHWZqhrHTupNjru1UPComwCZFucARRgK7WtL6xGpwjVZFCgtpJK",
  "key8": "2ZAw9RwxhNQpioUcbRBXGhXymwHHdRXgEqxB7cscU5CmoArJj53essnFN2urwJzctqPTyvtoFn9t3RkDTbzdQzhB",
  "key9": "449oSt2u1jZEjzoszQbmAQm9ZsmhFVhoMjpRtXxLFuZi95QqE3SezDU6qnM7bcNQxjXZtrB9jC68p5YTrKvTaZDq",
  "key10": "3abhjDm7kceg8bk6gG9u2JhTiavy8YeyBEDFrtBnSGGJRNGUtPZ2SE6rg194nTvGKJeVJKxYpn3Z5attCVUYAYhL",
  "key11": "2ipRm5BdFQuKy5AZahHfmVZQUGky2BQ59FFLFX9PopdeiaZXY5XGMXVRfbhBJHAy5eF3dVG2y3Mwg2S79L6MkNUn",
  "key12": "5LdcXJ88XoASp1QojVmWe1qr56rmfZwgp9pYra6eZnh9zbMecSEYAMcAx78fVDJiWgnZG9PWGeDPs52ACyKsmJpU",
  "key13": "4ndki31MntbTRbb4763zLgnPDUxp18iZG1DnqZY7184Bk38RP2tVyhCE15JGr9mYqqGqZsAbdsSZrvm2XoG1v3Na",
  "key14": "3MbfTZoAL1syyb5vviLHz5F24cMNudPc1NUtdCgAcaAKn6dxgoxYAApZrb6PBhSZEJ3xPYUq4xUVmjX5D2XREJw7",
  "key15": "2hm4xuree9BbRXy6VYQMPveQ3M8XYV4Rs5Sy8jMteyH6oHTGaMYAdKvZcgTCUmNt5b9wrvt9qaQkbDMz9MfCfGSp",
  "key16": "3yS6sDndqvHmMhXdmMtkQjeERS2WhjQyRjHiuTPwDYHkvjAKHLXeH9NvoF5G6w6WRw4nwZeLFrBgCzKpTgZK5H1b",
  "key17": "gYGMnN2oxUXK9xJDVgG9DC9aHVmqvbQAqGXrjHepyAmJSqGxjUrePXHmn2CFavDss2wDQwtzujjwi269dNzh7F7",
  "key18": "4gEjLz1iUhrXutMQMZ1WGVixXktCLghYu2XhqmAA83GiHkKxMrHattW3LruuXVywn1PPfY6kKVwp3uezC8HHt53q",
  "key19": "5oBGq79SUGsiLjhvvpsQGWsEvkfbe16UBryd6iKncWvLgiZXbSS4zuqRXzaXVX9Yp4PfSCia1xLwwBHyho6p2S6E",
  "key20": "5Z1eQGGeLzfa4AzfvfjUwmHhuWCw43YcB8aWnmsDD2q7xoyYxahnqzN7BhyE9GLYMw63cLY3J1NF6iEu5qyvXCRH",
  "key21": "5h8KppAmnrY7MzJ2Y2JgoNZKeDwnzUXjNF1NHDjbSbL6qXzHaBS9rZFVKtQpDihV2BgRK3oFcxbWZi8cWVh3KtTi",
  "key22": "4anA8ajXujULSUQAWp6xQqkkitSErzNGxZWnKuoVRk1XHHSN7Wk3xdn6WmsGCDNTuuMeMKsB6fAZYNt4ABhp2ZqK",
  "key23": "4kamFd9dhoDXLV9Z6z335eENcCrCGnP9VQCsZpvEWRSFncE5v6Cb8R9i6dW9B2FxUV8U81tN7z2jB93pRyLh6CHi",
  "key24": "REsEbah3DfZaQeK7J5vU5PN5oE6tfc1X1RmkJNqTB8iA2J9tFjEBscEP7tNJ11hp94sp9f5Lv2aXARPDTwEeYJ1",
  "key25": "L4YXTS3pN41RcM8FDzbDXvs3dXuJrHbzku8WBjkbCZrJjqviMHhxUdhQDWafqZd9Ny3Wn9BtZxbBDS6XYP8nuSb",
  "key26": "2sgbe8jVT5Z7YuUGiwRLaqCpVoo4XCXBRKrJ6FJiSv1X1yuQkDZiNuZx1JvVmaeBct8RZf6cXcGkrXgBnsfnHMeW",
  "key27": "kqFkdQLwg6rz6YQfa2MDduLyU2DSaFvbaWPaZWYstUUCuWjSY1EkAg8YcNsCoeZJqYPdVoid7tUX3AZ5gEdpQSQ",
  "key28": "5Er4MDETdsKDkj8usigcDHmh65fa1BReuWkn4fzvkimSH3CKktzgUQv3KgEJu8PLSsX3xUox1ukMrps4a6Xyygrc",
  "key29": "yvMGwL83CrrriHtqk6GcW6Z9MPFPPNV8LXXbKDWXePDQEuA3fbqE6Ze1Z8VDrokFYFNs1tQBPcJoJVBTNqoAd99",
  "key30": "2jtzxu6H49UrpCPSK1SF3jbVdecmppix5rgm6SLboF5hnvLiCzXuoyb2LhpMuGmC3GyUw3Rwvuv1cecbM3UmnXJj",
  "key31": "2UhvpY5yHMdRHWYn5kxHPZiAbLXRfrfcwJXuroBb5gbEBrb15Lrzsg2Jn6gxULMLqerJutbQMgfBGex9VWzZ8x3x",
  "key32": "2v6DSnoLkTinND491PbKepGBkHFDBtBozE9cvv8mLUMguoRrpwZBJQ6CHd2cQVZJW1figmNbMTcsvooW1vzXWhBA",
  "key33": "3gMZdQRPKzqD38kcrmfQxazFo7QiiRahn7KF4HQbTthQraFRsV97S78B8ogQKUsVBuX7534qzhP5FWF4Szw6HxE3",
  "key34": "23quA9DJfaCmAvhwKWP1AqMZCTT2DRZSibTE53oFrdiJ6xodES3dqd75mBF3wdsKgrvGaBzfRLwHLUCzUmVsuwJC",
  "key35": "d4gi4p4r1Lm7Ds71TdJM7U4xhZm6jsb3eX6kNghb9pcE2bgyCXL2owLQwULksxjEzPU89dRL5M5eF9EhNL2QFz1",
  "key36": "2iiNHGeuPkweaQG7mmQ98gy15TPeB73SjiJi5xb24yN7ctC9ekNb7Svi6NVCmXXxiDz65YYXdSQKKgsLXXsLLhFo",
  "key37": "L3iSLWvE3ibQHactUYedsVHd3goVcFX6M39S7pbYpJbbNegKmke2VDamMANmgyEhLQhcByDRA1n3zKu5Snd8PKm",
  "key38": "Ktpr3Mqhh5Ck9MsCSXRFhNmwLBZttYAd6ChePdVufR55q7iD66AJDF713WwRAnrZv4phRzKA1frNQNHecwrMCbq"
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
