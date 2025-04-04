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
    "62zrmSPUuBYN1pQVsVMQD8diCAkadkUXxteBx2WaBc2zhvxcBYF6XvaThykPGq2JcHPwszTSNZjNUZQsw6KK72b6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BRtird1rqfmhNiRwt5eDkUP1h7k3KA5Z5yfn7ebCwWiNKHNvpzEVvrv26ijWUYwdixY8bhbCRMBmF3CLbwPxemS",
  "key1": "ET5QFyzLCKhEerhheRUJRXgtYJT7r7zPvMNDAuPEsfm5YooWpXDusALqBwXwuh1c755DeGLFyEEYBu3zULaUiuC",
  "key2": "38S8V63gHUJJEAQ7H4rBCJJSMccN9VForUtz1bdCefRZXiocUhdZXVjz6z3KqrkAKokuGypVJ7H6XeFSkUaZ8g7R",
  "key3": "2ovdyCjFUxnB8Ecvx84t2Zv3bn7ftLivh7hnyEFHub8dvMY9Q78ByQT4umoNVU8VnShjaPmKi5iXVjYyxPkXNZfJ",
  "key4": "rmPPCQbMyCN8KnAMNVJsEf7J6SW3n1ybzDBztsFhJiDHCU4BbvNG2PyPMfwb5fqP6rQEttqu59WLGP4tugnM3jh",
  "key5": "4DXkDX2VBfE5nsR39qtXxUaB44EVt7X4RjsGuGDGb4ZUYBHMkcS98r966mqmS26BJULwpNNkk95DynT9GfQmUTtg",
  "key6": "KC78Hxg2ah9EpSb719PkgNCif7EV6CaHJwYj4E9QVvJnmcGCjbVc2KgHA5HNaN3GiHRniiYTQKJpb5qBX6oLYnk",
  "key7": "42tNdqQkehjFpmsWX7qiS3K7uw4YrqvTB3qmg6E1L1SXCvJu5yWyT2CkNGzJ8KnTZNuGbziNR7HxUhAs7qZtxAJm",
  "key8": "3HxVPMGizt7i4w16rwSnMAPifsAKKNiwDHZDn5kUPAo9ApXZwfALSUe21Bm95kyeZKR964UkcM7Xka3H7D4aLYVZ",
  "key9": "2JAtrrHCnLWSZ5AeKDcqGQVmUHcza6KSV7F6H1NCQfKwhyDcE2JsKMhzsJL2vBccXn6zJWt6EDDdq76mMrQZgmT5",
  "key10": "5QNDnh9WmrAa7y5w8R1eApdxRWH4cjnuFk8XRs7uLEfJ4scN8kaQigtAcdGps6DA4ZZbZqQFG7PNJ2T1MeT9vqjE",
  "key11": "2Lz5ULZcPteVuKc3PkC3EVAJXfsQiPz34vkkwdRjcztV4weqyp8SF9KbpH2fkY1AvzBF1JJ28Xbd5BH1Su7jgMdT",
  "key12": "5zQn5vShq4ccPHXLexWeroZdVye5LxnDRMXBrkQ74c4xktGtHKX9fxUKP3KWY1YD5mnMHwsUyFEVDMDNdeKD3KCc",
  "key13": "3QAyCqnmZ8oaBBYffAYLtEnkxeJHt3MHZpRTf9y19x2UyiZYSVhNVJs2uF93HPCCVDam7kCSGqsWCJQkrU6gfDYZ",
  "key14": "32JefziDDeKAqdFR1JJBz1JeQmrHRJJTRxcRCwkB18uuMXZRHTC5PoqJfQTZzyqS79yaagHELiWpj2saN4SZrpUL",
  "key15": "5oanSoYDXu6f8Pd3nV9BKSHNRBSmfoaNF3qyqk9UvTGJhDbPLC5iBPjx5Db3J1yjQydqouzUWybFNj3YeAFZWzNV",
  "key16": "5dLDDMNgBHYWbgzxVmrbaxkCCCdP4ZxdSNBCVWdkkNzbXLdQmbpU6ZwZgYaES3VjwQQfwmLVaomY6j2KeJZNEWnu",
  "key17": "5mi5pyXDbVtYzGq44GFwNj5NUfky2MKqhxwjFWD871eYXGHkL5XMUz578zi9UuanfBePQJMqABrJesm4nN6svbuq",
  "key18": "qrkFStnbPjd42RXLcZ3ZGzrXhPk7FFqy1S7PHN3BGs8mRh37L7u4f3FtBoPfercadkCiq1amj2jijaAmnrAfQmg",
  "key19": "5Xge1LsnZGHbirWgjE4hyNrpjfFb5hD9JmenGCxR5VFmMiDpak3b5hob5RWxtVqawLTodm5xWzqrG2So2RmcCtF",
  "key20": "Pa7T9LbtrkapAK3qNB9fqqMKC7gbkgiTES4gpevsXKrwWWUqsQY6DkjqgCdG5UFxLaQuZ3bndQWSsUjJvdJBXiC",
  "key21": "5E2wv2zXfpx9328pKamFZSDGbcE4KoNKz9csvkviv6wsWGrNJmdpnE9MpJWkfF6hXHEgkPMGfwvht6ZUC51yX2rZ",
  "key22": "4nkAEMztXfvhTE7ct63upcBGyV2yieW24zTmGdZNfvnsMfB85ss6XHDeSogVePkH2RRUw5q9aero7GobiZED1YNG",
  "key23": "5zGFx1GotjkXjg6eRa4rMEvv5J4pYQDqqZgXBfVZfniFjGvBmXd2voqju1XMPXJgf98xwkq5ahCzhBYLBe6ihFWZ",
  "key24": "3jbBG5ziCa7sWYw2dV8XGrVTkqnd78rVCKwSx254CLAZqEXkZ7wWocMRRVUaYqmDN8aFLQCYVuwS7tHcKJbsCMjz",
  "key25": "2bWVQwyy9nqVMp9QGKtXRT4VCTZbZBJdU1fr1RbcUoHxTUMrZMesqSpBGavjhv9DaXPDHA7QX3PJndh5xfthmjWT",
  "key26": "64Q1X4aiE3By4EatTxU5hGf3dDBHJgrqknUAsaNqKJUcWsKpSP7oGkBirGGnRSTCTjhsuq5e1h1hYEZ9jnQDn6et",
  "key27": "43S37PecZE7gHqaLtF2ELyyZ9qmQpiA5DjB5VuDsC3E7FyE7HoRgh4oqqxS8drjZCtN8xfEw5iDN52wAo3Labwrd",
  "key28": "4NrNLLdry6VMGLsbMSefpx2vHqExAzfRxfGbxZCBHzdXHDtivnRgzTSRYiLv2RjppX3r8Tm1Tbs7eLm3iKKHUPyB",
  "key29": "2enm2wYnxs454tr3DXVmLXm8pupMNbuJvE9ybxHGPJnp9C4cNn2RJDCoBiifsgq3KM8Bmy7YjvBrDUvnXPAFUQhQ",
  "key30": "23pqdGaujHzXLCggRe2vNvDMnazXYR69dawtQvf6RHpiNsraZugRqcJy1PPRMWq3CAmdQPy4tazCM6VXMHF9SFSJ",
  "key31": "4n8DxKsygx9wYeCCeUJuYMUBJL7wBbLCWesCJKqGDq3e7SHZKyCmCkghMdiK1cqW8Dvwg7NQkFFyZ23sycN4UYiK",
  "key32": "4kBgQsA4MCST3SeAFLXwgDMDPDH3MvivtfnVVb1VBCHiUV1BSTu6dAdDVX9xXygTT1aEKeAucKRTfFYHKPpKsQ76",
  "key33": "B17ZoCPUzpYqzgcX6th7hwrX6G18Hj6XJb42ktYEKzwNP9dKmFife72yyHycKJZejdFuNjUXqYMPRpkGghQV2GD",
  "key34": "27vqQ2E8teCoLkC3g3Go2fxfQhNjCwH5TzUHiPsq5SrnhVgM5hg1kjTFCGVEah67jsUviErstNKg82MgUMwa3hg2",
  "key35": "3pDxiGowJkNsPeq5upGixfuBX5VibxWe5btWP6p7G2JwUXK9V9svSNXswPvYmTSjWCsMosTn71fNYK8i4kS7ve4j",
  "key36": "5pZjVZZ6eyFPPnVV7UFNm9rfWstQwTakchDjbzJ4f4NrVzxo7ZKAbUGAA7iuSH943RZu1dxjWmkvFqYinLVNSxPf",
  "key37": "RL9cUCVGLGFvR8Ly7sN7ZBbVwFkwCUhpo5zsUsAeh97UKoYY98y729iAopYWZ99VtuZx5HhDEaLgBSiSCCBRJ4V",
  "key38": "3We1b4oRQBgtjuncXkA9sXsXXbBACsktdp7zaBNjgTUqg5cgu11ydwdPeZjzPb3CEKWw7rqVJb78NXhjDEZLAuk1",
  "key39": "4v7rieCtKY3gsLsRoqmt6pVXy87wVJvJwQ9SS2DzL9t5akbCQvFDmUeqmahgMHQsjKQxpCHueA3yZGizqkrUsLf7",
  "key40": "KQWoWrD5yFLdUrcf2w1jHCj5FygJeHcz8W2AECQzu84syCACJJAwMLdgmccz6aJmAYUwBcguaN18kRVopwibTnR",
  "key41": "4F5Gjuw419tCRQSYazhraE7QzGPgfhkTFUQ5TgkZa6tSVds5a1QCDo5nb7T96mxR7YyeiB53JaLGZPP4LPSttdD2",
  "key42": "2VahKxHXPcYGY5aoQSDVumSHFat7NupFeip6ErrN36Gq2Rn4cDMXTVPzwPnszdPxH6RUPYEzhy1GPPyAcCZVVK5R"
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
