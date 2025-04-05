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
    "5suaWdyQBMG17NifWVCLeSDPTgKcRBaYkCjYBB5EwAyGtHTrnKrZqd1VUJf9GFUXxb8TopxFMRFfuYLiHEU3y9zs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ptBtR1LyjCEdB4QbgYF9JnUeJ8XPPZHm99QwYab2zidMEugnTrLqyNUc1AzRMPkT6KcUaNEMgdWitG3jtBaJ6k7",
  "key1": "22QQKgFm5LMqaBhVHJQSBFRDEF5PVBmZ6Tg99BzLiTgDyYLkDqeFfKpaTWvJRgnJHsu5WgAGfmMdpEChc5vVVbKQ",
  "key2": "sdTUQyUENRKjGnXsf4gxBMphH15UGaFcFwWXPCY6FND5Ng7CADAADm8EPMCB21jf3gkRTMXuP8XNY12A7UpWXao",
  "key3": "HbxHZyWwPGdTJ6s88fZDr2AyK7XQidviBwZWuEoyGxUGyNrXcA9dGdkVvEJHf3SEgqfZFN4qYyWCfM7JG2i8VCj",
  "key4": "2ZeZ7oBy6GyFsHu5dX1Won8ATcfhGyCdZC5oQkki8JLr3qX6UDCknhrN7A7VVA81BXkN9V2FjBY6HCq58UbZ8DTB",
  "key5": "xQCmPd5ENyWcWKU6veHhT7qUDHbN9PKEKWKdKyp9WwxLdzydLKPD34R7v4xUbhpwN9ZGHcv7YvfdnU7DqnGyakU",
  "key6": "3Y4xY4a1Ev8sq1is4bdHrN7kft9KUBUUHZrAtcW64gTyTSYPYEPNyztQKteiCQDMK8MgerZaPQn5rNxhr8LDz9M4",
  "key7": "3xN1TyiaPTw54toFovi5xdoYDXGjZb4qCVoLet8gzLez15hSvmp4ZvjBPLp6wF3HdR5oFPfFmNTMMQTcX2eKseAo",
  "key8": "3puRFXrCyVejwWYo961GeeR5XgXxzwehyp9UtgfVQ4utZZC7KpqziTHcPfMyL4gdTwYXLF6WNGS2xBQjSa5FpqtN",
  "key9": "2oNBEMZrDUJoKwDExGyQE5UJGU5c7EwN489mLxmA9wev6Uhyx1VvkwqEGcbyMwUqA2QBEq9QFrzop65m3TVCLGFa",
  "key10": "JjBxdniqZnw3ZActYSmuXWGTmUL4XKygT97dCTtkDAGWvL1iJsLCySVtNc6GXXbcFqJFLYjwjoD3T2xzbB1mLtr",
  "key11": "626TNFEzp7zjMmPSBomRwLwr6NRgGsvdvBMe8ffi8fgUsP4L79gMLXCMiFWc3nzUvXEQ1j6oneuL3B1csSMPYdzS",
  "key12": "3kkHy97N2e7eyLuWYsC3Ptrx2jT1toFfSBZxbNbjKEV2qyQbDLT1M9efu26nj1nM5s6bcENmNyt7Z66CtxJwepDA",
  "key13": "j3dmk1yeK7WBPNMYVNsbib6HXmZizoUwowrDj5N9jw3PDY4U5rUbdKKNbkzFgUtwjYtkvPtUQ5h5gNBpJpRYbX1",
  "key14": "4PS1KJrraihh2gQxPJeTZrK8wuRYmtMNS7SpijkUs1Pj5A8yfrxmPcq5tUgbpaAvY5F1omzAiYPvT9fKt6zKA8uB",
  "key15": "2bWjhAnxz49r5svjaA82Bou2pMaryq8T5Vk29jJjGxY8zkVf8547zTpqUvyMzJYd8H38hVjBKUmsv4evP6s4mtmP",
  "key16": "26ubBU3ksjDWSGs4H8dk63oixrXEaGXSTQuXzthfSw916jScjCohbUou7pCbQ1cx279rgXYMzz5e3etw7uMv7c2w",
  "key17": "feKeUzfLnDGRsummUNWwjPgs866ZF84EwmRbpN1NT7iS6rNv9JfJdEv8AgLnPZYpS3K1m9UMyMTR2ogLuR6CVec",
  "key18": "fwJkFkFUXS8G5fjwS565yqpUh6pC4aLzb3Z4zjisf3Vrx5cRFGe2rG139sVymDt9LUMZsFrEDSu6y7bkhag2CVh",
  "key19": "2y46vgEPEpkxFCCpnJD2qQUUu9KzkoRQvdYF2uXcAAvQxAnDoYjVHcNS4u9S8tp9AZ3xkCQKyA8txyjAwpw3y8kw",
  "key20": "5h946KeFH7ph51U6MtCB9FjoaapBfqGNLSM1AXaM5veUx1c5eurVHUvvhXW3gPNBaaLn7fodJCMUYtELEFtSVq6T",
  "key21": "4K11UZ2qoqY6QnXpnXdneZafn8PT76Zqsp6S4F7TZBbp899aYVcxAQpNnVnETq8YYe3z7A51HVoFb15n7hwtWdS3",
  "key22": "5MG1dgTDD83DzPTH7CRjBugJzf5iG66cNGzcYecRKi2Lo1oKtTaLqpa4xFhdgpjC5HFPycCfvy7FQuQenYQo5ibH",
  "key23": "46H2zQAxQ3mDZwLNX7iuZJ7mT4ejo8Ags4xPfZ7qdKGBRRLkkBP2TM2pdmvYmQP45uUEzdkDm4v46dvceexxs4UQ",
  "key24": "YyeNNCa3dPgwvZCkyocVw9DfXHp2QqQFCmMRcrPT7HooNgC3NDPqZf9tW7ZXx5iRaXsfLefoWNwGhZ98jPLR7Kg",
  "key25": "5huUGdQ7ti42ysCX1d8SDkHVA53N7VkQZ5W8QVt5K5XyBtxm3YvLBoqUNfShN1r9wg2CB2pp55fjnscnH4LVLF2H",
  "key26": "2bdRhc4CJ6VQWBa63JvmuFEpJvzUBEQwGtNiuDsQChDouCo9ibLyhchnhard9gSbniEY9KCtoyys9fVsVKYWo5pE",
  "key27": "3CrErhbcqhJJCJ5wXWEP4Df3wVbzLXEgxkGM6i8VPNq9KLFTdLqu69s6Ks6zxri1yetuDAPukb3FmaGbo8tvUtpX",
  "key28": "2SH2BqCU7Kfw2CJKsicy18BMhL1zAun3cgQd5D5noQdtgcrfkKjAjNsHXRcHB7tnQFUeLGmNNZ8ZmjiRazcBAJZH",
  "key29": "3vuNFN7ued14XWamGdmg3JD35D7XYsJWtgv38FPSEPPtfmRAxuNFaqoGqenBzdNfkEanhbXgmGoWs8T8iUDQp9iW",
  "key30": "2yWLRVZJX8Tb3ifyTYKgz4pvJR8XFWzMLfC8YXZaDPCcLv9yb7XcwBKYeAYSHJNGw88pgfSkfni5DwVPtohip8Q3",
  "key31": "5UcR7g6zkG6vhqTJU3PXS9myp6mAcsRiwtLpxx1gkFxN93tw3ovdDHtsPMFxA2pdJtGU5jH7KFL5ma3BCY64WTYh",
  "key32": "5NM6tKNc2WBgtQUaJooK2jpzK5Gv795EpSquESdTGibaMLgoRWs9YhMyqcT2DoYRLKSgGSxY3iXjn4mxg9BpxGr1",
  "key33": "27SGnizPsVHVFG9CfPZ72bfQvDHtsBVtkryqBpVRUgD8cJ4PCKKUYJ7qjD1nQE62sdiksMzCKWRsfiuR3k6ee5H2",
  "key34": "24C1QhJFnRH6HXLNw6xYMoNpHCwwBbpfPQrarDcmDjUqfmJBtShbwCMFwhhv2iXqGmtvwNoXQycFztaaYJ3YCic5",
  "key35": "UW7sjxz9eENGxDhzR5R3DKG9e5Q3fsbzCeDAgNzs7xyCCBAxFWKBvyfbkbpEY6WZsdzptp3NJCBnGWSDphRWAyw",
  "key36": "QzsdNUd2pz8tasERM6W46VhB3gPkcGSvqMRvqdJ3hxyGth4yXrawkWYQMx4hREs5LhixgkLvpbtw4cQqYTGLLQe",
  "key37": "2Ygq79AChRXMpPpk2AdtzScvXvCX97fSADhYBvE766UDnp7BA12vZhffp5bMsLWgE4A3G7pqD9QDKYZLELXp6EEp",
  "key38": "1CwbWr6tNALsGcy7Gvj1TqbpTM1dA1xog6FT7pAMvSfQDWpH85uc33Dd6JnmHVAkvSMeEuqUaWtiXCLwseJf7tg",
  "key39": "4x5jr2Qh7EDk9o1NXszh5vrh2giH2yHXDtpxVWTDzFLB8pR67QPtJ5SJKG429ff4WJiBXjdgKGhk35nrVk9JQMAd",
  "key40": "2jtP1xnth6r1PCzi6P8XEsCKtZnmBGBYnWMpDvMsNg8LtGgr9Qp7HR53T1F5UoeM4oMEoewnpMFw2xzLVimQrCe8",
  "key41": "LLmtkJm7A45ntUPiVpUYRpjTes9RsdywUnbRL1ZdsY2UC8di6LiCxPgMas49Nmok1ngAqPYxh3PSKup42TDw1Ta",
  "key42": "58aY58Ku37dCzQFUaKd9p5xerhtBwYq4JuEgyRLgf2DsFZNvXfefVozVoKLWaoPi262zXcVfYdXyfKZhJQn1LRPN"
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
