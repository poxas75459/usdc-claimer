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
    "5iQ6X6GZBUYtSPhZRivAtyiH4D9RYwnAdgHqDHNVnLb5PyWsJzuKyrGSNoNH5usR8Kgywax9qAwNEodpGNhyQWUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oZUz3ahZJShYEVQBwHdB6dQ6G1aeSXbFW4vjzmuABYwdnqW1LaWZrdBbWGGArfhdTfxHB8HU7vDALy8282dHCR1",
  "key1": "5YWVx9NEAiDA3VAJEs178A9RBsAB7ic3y1gddzttJzuMSSejRXX68Rr1bUiSsYnyjkQ3hsb2KGYsK13pEX6wAmao",
  "key2": "2mk9aE1TkaoJ1pii7zMAFvJKmnrbkeZeDksQyWufiyFdttBQiNTtqs9ugzko9dj1tXeiL2tJbKHJukKD7N4aQS7G",
  "key3": "4vUFYjch2FNUZSJ5v5attgma1ewh6JMuQu98A8Z1S1bpXUKoQKkP6cbm2mFqQHvog8rmeTXRzN8NKvmM3PBz8h1w",
  "key4": "4HtjkHJQujtC9HgYe4i5AjBpQ1x2f5dHYZtRtzpMZV55xENzjvwGZt6PrKNawE3AhPnjX2N9Jqkg4ane5VdXmGRv",
  "key5": "4r6abxnTDMmBSKnphpRb3m1LiQBgFDYckjh4cGdEr6xzGGzX6mCRufZqBJYMsnWHR3oLwzqdsAHdFaRZ3Yg3SzbH",
  "key6": "fSP4pBAxwMgYrpho8euB5mCd5FZauNaj7eZXMSiCtPRaWZY5TMtbK97CrFWeqMV3BGqxUTuVaHQJfzqERsRK4PU",
  "key7": "38D14zPGM6yc8VxjuaEpxh9cExdpJ37ijVUtKn5BnifAkW3UfBDMuZiDuFbbQfjmzhe2FFmiUhoaX9iAkCTGq5JY",
  "key8": "3rKkZkc19M2x4CQjUkVp5TWVLEuD41RSV6Z9JZbcKdxaUvFWabJ991vju96w1y8ozCv3X11wG48cVXFD3T1aKLUs",
  "key9": "9MWVmf69oRhafTnsLRf8X4rJr6Bj22oxB3UWjrA194Y9oxVotndWtMydFrqhNPYDYGGZ64aN4iPkHFmMpSmRE2P",
  "key10": "5sAhj5GTtbnHnXT6XcVUBxUNdjGU4sd4ZWR1JtGqk6VULaLcnr5kMrG7oWqPFgJnjoSFCzvTTsUtAPvs7GAsHfFR",
  "key11": "5v3geVtEEDfZvytBmXuJqaNegavYAqnpH9daQb3Rr52G4mdL3qSpHAw5ef6dM1BJTJXNESGwVPnHtuMerQjNgvss",
  "key12": "3dTsrdEnyY2cBYi3ZhEjXLkfE8B8UNhKYsma9WEPfRgzgWnNymqoK42aU46FNg34tFWYUs6rD5qaM8KLq4tfs99U",
  "key13": "4vawCeGEN3uARQsk1pfiQgE54DQoH5xFsEZihKmEw6EeiFaV9rCriX2imxeR7eTZeGRTqrXg3oKzCXN9wy78oLXG",
  "key14": "XVCzjRHw18AfMUZB6fdVS3ZeSKDpqvAKh72mc5BbdD24NxzAxSrhGzwxMZrxdfv81hgrhZpK6H2fQEHRAiWvTvq",
  "key15": "3teoXUCpmHmL3ST8Fdh7uK8EeDsL7dBL3hRpb1pgvCACkmuh5J7CBHbbTs1yb9EbPk9Y3eXpsm8FsMQxJieXX6Y8",
  "key16": "2jGAqb2AwThK1hmKJZvKjAdjv4vL5Z9WEMBXBxbZkCUteA6By6R7UKX3cEfZ1iqtZU7f7CTt4CgrkjSzwwzh8LaQ",
  "key17": "5iH2yurH5ysNxfC8dNXgfuak8JLkeaJHpYwXHSLGHCzsKpm8vpcoqGw6gtLtwT7MotLG6caUtfU8UwSF8Gc1v3tw",
  "key18": "4Mu4QZj4CH37bBo2tcb5xAsSXp8TT1h8Q3kx4S7Qmi92DsNptQFsLwPwL5pPiAGvgQKoPVPNUAwUHkd7kjKLHTez",
  "key19": "629xRSAhgL1qxGMqwKJTi1E9Eg4wpw4ngDDLvwZmEHUzkRz8N2AmbpCwu6ghpY4GHyEDCx9Eqme5vb9LGsAudbW4",
  "key20": "4ywxmrN2k6LSFdcfQu3Vy4qsBgBSvSd6gAfXo4CsKDghaCCpeum1RWCrQ9XNZfuvkx9J9qQwvE8PSCLkQ2rEpcpZ",
  "key21": "3RGWkuYAeTwKw27y12Mz6CY3kVpdz9YsRvdRVGjP67dbewq22K49pWCwmrbmUHfttWcAqaep3VqJ6BkPcb4WuF38",
  "key22": "2cEnyZAwmQYa8DLknWrkpV1C5y9pX85UX45p3cgpycbQ51UKBFRvYbmDDgVrJgWq6W5MCtnVJs7WayVYpD3pKXd3",
  "key23": "JX83dvtik2hDGvybVKFr4zeQjuSqZBUWQsNqrpGThJBCcG6tPrSYuTfFzMgRvvix8kx335deZQwaFawyXcHCwQk",
  "key24": "2nMARtmi5VecMsEEtBHY6BsyyuExiuUk5KybgVtQEkaBLrwYRbbZ7rz2hGKYCNcb6ZRm8LU9vuLmncpTuNpZSLUm",
  "key25": "4dcyiABTU2w8MY8DPBgMkqJ4mo8xaNgHoD2cPPaZoCiV3wJSBaC7cq1wVMpBoZrmLevbmcjt8eq1vEynLP1sNVNP",
  "key26": "4VUromzwpACWm59RiYPtJMbr6hnHPGfhRDJJ5tnx2zSUVQ8CfvRFMHBPMjX9QGqtY6VuyGqhX1TqX5sMM2j7msX2",
  "key27": "54ut6HG9o3JKLDj4DingG8LrR8L1bZx81xk2NZJjxTd5ja9xu9YCimcRmGLxhFTsPDwzSb3Bh8SDPzHznrCv8Zk9",
  "key28": "3A6EBCXYasrL2fvVofjTYByRjtMipDgWr5vTzubvnmz8LCEhkXoUQJ64LRG5pswq7wBY3X7merfiGcVUgZotZJoy",
  "key29": "CjBJyi8P9HBrNwLK3wQ1UNcGUCXywFiTgoZP8K2LXPFJxZkd44nvDepfje9dogd2iBPxS34guQDYzEn76zfEBGP",
  "key30": "3gLUztjpAvSqfDcrQXtex5Qgfza3uyUkaTgQiVbbNwQHyg5HoNfKr2arzjC1Ne2P4kPo4AQxVgNFECWXsFQtL7gE",
  "key31": "xAjMfJMKMQi3ukc1pe9FDY9EpnvaLLTYkfZNEsbsJ1WDXTr9YqLmoyp9u9wPEbvv5sxYRnpyuFBhPuPb25F9rTU",
  "key32": "2C7kTqYEf4JRvUa5eWShC5HxSSC1XzbuKLhcRGX2R8JyhLk2EuviNRWdHg1XLXWC7oDv5v7pEXkBvYfrzgTRCwrQ",
  "key33": "oERG67WcsKf4CMA7dTViE2JMEaP4VfvnPQiC5eP7dfeeExnxb6UBHuoxFf7TYwaHcj5DzKUU4SHCa7ajWFfwMNL",
  "key34": "5k2P2BCczHJciPpLbDcbqdVKsnEa6bxUkadjfa9o9K6y77XwnhqWreUupJ82f74W4L41cWzdQqAsR16H8CDaCkkh"
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
