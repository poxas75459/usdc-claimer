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
    "35bLbxpSpW5tNDeUzibX5YeA3dkdUnSQRCwVid4CWwW28KGQEt6xECJELEchsdX35Bjebo87c2gjnnUYVwCoH3QT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33wyFveoSaRtRBo3dffrYWe3R8ZqVA6Zi3WZXWcXWWRpVLkDbypEtpRBcsbLgkWXetE8RNdsAa5yaezWnuqrC8zV",
  "key1": "38XwoGjjsWW4b4Bber8RRi3WXgBfSQgT2BA4wSV4hryYWNXLwfD5z8WkKdrkcn2At6EqDmPxnfJQTphqMxXd3Mvb",
  "key2": "3i7iCuTVZizXW71Z4XahVgBYf6guLLGBsn9tHc15izsatc7TZ5WCz8LLnECBQgupTopPRks9imPjmovEXxy86i6v",
  "key3": "yxc6eapvvsnN9KjEAKnoq2P8akYk5wmqeiKAJQTudoUSSYUUR6hrnP1n8ybPZAmowmJDTyT3dsv9KHqhKVcL38v",
  "key4": "3KYUdCdkgVcp9gSVotEH33E89WhkAYHqcqXRGdrmnEWBxQNjfzw4ketfKFSDRUUibwwDvxx7e8ZpnpSXXBR9ikMB",
  "key5": "2KNqaC2ZNqWdfLC2vtuYkBVcwAQeAUcHxxn4nMQA5VFbVSeYWuzjD7BYmzKXWFBphWSV4pcKCuUag3kCshiwZESw",
  "key6": "638oFBC7VMtkEAmzeTcX2qo5bGoLmFRQD3AUwWPBmdQ5EGBCQYcReiH21BGcSgoPw2JS6PWt1pYU91Qde2z1fZmE",
  "key7": "3vLhqK7RyLT581fD7jzBiBtZrhfoYxUYiReBvYySAWJ3smevV5iHpchf55VY7dxK86HvE5goccsPbs2idsTYBC8B",
  "key8": "HNZhj2z2jAE7QHHphSxDLiW6WekEeysC4ykckHhdaGTDWJLTq4G3GVCF1Rx8aefjkcddiQKEYK5cH7yYLHHvYSp",
  "key9": "5cbWvXoeM2k4wFehdjgLEMRdft72fdE8y4AR3PfNUhrSU5mBCEyiKvByv6pMWug9yfppRBRdTUAXTZ6d1WcSeK1a",
  "key10": "49Dc8Vzsn1GaGnWU3T6CN7a98Z8NXEfxHnJj3Zd91Kzy1dSD919KvemvT3qZ5xaSnmr7JTM6Hg4WERBYhCw3Fcqv",
  "key11": "3dFL3ZuktVvzxmU9kcEkKpC2sjN6AiMK1JUe7jtzYLuhviD66v4wyMLv833pJNJDg8H7J8gyvXrAXjP2mddak4oW",
  "key12": "3udS5Fbooh6SC7WbAXZ4B5fuyhK2zBmQMYCCrNxbEmRjrGWMRsLi34XpkqkHLFcKu7nTbpkRJ6XZANL6SrkNqC5W",
  "key13": "3VUmRwrZ3XrQ2ZS3Vp9oXHSecoE72DxgNARRL5erxQTFQ5cUdbSqZ8t7S1rrwCcKAdAywGNkW8V4s9X4hvoTADLm",
  "key14": "5aDfYQhm7b5BK1t77sfSRPdNyTnHiwwW9RHKcXhzAr75RKaXfJXfjPgHBxs4B379DUVCUjafpqy3SjKHLHareggK",
  "key15": "42H1pZsuWxYgbvtzRiMMjEzawS4SuUMwEMSX5BVYD5S4gTwFnbagv82etK8SBqmv2EEUrHt9NZHmi3Bq5EcFFjgo",
  "key16": "FFpyqEy8vo531qxHCmB92kmfytnkhH9qqm3XvDYZbCrKVRtdDuFgPxeMwQJVcE3CwY1trwdt27cuXFaxg37c3P4",
  "key17": "2gynFhmQ5NDd7sgRZHgXB4yKMhP2hG2W9KmcY2vbVTDhGqGHtz5JSotfcAQ3HdY8dtKGfvFRPCXg8GQ1RhnLgSBZ",
  "key18": "3VDq6Xr9hocZZ6KzSYMxpWMQJJb63i1ZWY1W9CrzDe848gJwunvV4XyiUHs1dm1Ue1zJYgwefVxGjWvKuL5HBqKc",
  "key19": "39cNUtivLTMtbTGU8QhZg682cmJvuuDA2SX5Zzh8vKRN8xykXbBEZ3h8tHZQiRbs8BvP4nhPTDzQujzqbhTkqHvk",
  "key20": "3nyAmDR9PscZkL3jAhVV2eTTqEFxSoaDx8TZM9K73yEUWfp8kUJD9cbDKo5o7pg5knJiixRpbVefD3Ntwd8iqgo2",
  "key21": "5NNHmC3Bi8Ga7HYsYxikxkYovLoqS22ndcERUcsbCMm5CyZYyQA6d4zA977GUVXo41arY1MXy1FnJDrfMCA7nDaS",
  "key22": "2b1uPNm4VgU4ysfK3DvErhsdb33vF5xiWc7WU3PrH1qFsnqj5c4crLLLTWvmQiLAW2pDcra2wK2HdRCngubcjfvc",
  "key23": "4xzggMFUZmNqMyfmPPVJUKJi3LB7n9KdsjzHpVvCDbJfiWwwo74ZPCYaxSKWqw2Ff1xJzL8pJTsffKXNMYk4VvFD",
  "key24": "4hs2WzPLj5YEeEygHW8Yur5w6fKYUdBXpyaRH5p5hymECqpZ7xkk81QmrekJfUvyHWd2RSszhmxuD7y7jW3aqTYd",
  "key25": "37UGN4b5N8EZ2MdLb55qoQBZYWJFV7iE4F84mUsHLc8pMVBJqBXWwjHZBtMko3jWPy2iz2n8c8MXkACdGccGJJq3",
  "key26": "4dtLLURagAZjRJY4bvsVDpHv9hXBzeZDjmTbV4BPGEGehrKwyouyiMFfCa5Ao9kud2zWJ3U2yF3dE1vkqHMCbEf2",
  "key27": "2EnXAnXN4BRKitAkdcxgwZX1umK8CDUkqF3jD9vJ1kLDkqTVx5WVwZzj4MLy6kRF23m4qTD8BWgv2Jv7jWprBwK4",
  "key28": "4TzPLPALYAzYd6gqzTooVckY9EuWbs4jgD8ojzkrxW16xGKs6UxPtmwMPanSFad6hSvaDh3c8YHqrMCk7TouGztk",
  "key29": "4Fsvjf83RF2nT455CEAS9hXFZ6NTyzJyiJ4Vn3Gv458stWVSHj29pZZaVgAPTrNttxM6bF7iVb6AP6H13UqsdUQW",
  "key30": "3ZVzHasqUjqunf5cv262SzQHKFbSFJsryPUrZ1bZ65rhJvdfmu6YCsSHhm15qX2oRXGLt9RuvjgfJ2cZxGgCWTT7",
  "key31": "5opCcKS37eAcTrc9Px56Tx1Dj4YTiZkHCmGCJKdgcDyz8Qh2Dn8ThtZrChSH55rBB8fgNhgNCifekhnJKKNroNDs",
  "key32": "2Zd7iQqQ9wD3RhaFrmfF7RpZiNf4XVu6grrnnZN8JYVsDDuPymJGNrjsiomfrHzMM3ZUwfvTqLxLHFn1APcZfgPg",
  "key33": "2QSHiRN5qFeXgVwZHFaEPyG24hStT24MKc5oxNKKq3RC38BbLvaEbV2hyc4cvMNozsu4BdVb82hhVubbiQqZRbLi",
  "key34": "2tEfvdXQrDWftw8UoRe136mLoaAidinYYrcXZX2yKkLGz9EPHCJ6PfJtNqNQLCi2ECAdnrHEknqtAN43H5DZRh8U",
  "key35": "3G11jxHgJJ5XPqM1mCCu9ZRPQCSBW4oGv3brg1gM7qKT1e3HU5FmDnNqHGCXevJGR5mhcS7VaZSDdoWw486g6J96",
  "key36": "4y2xGxfVzVc9b6bozAyfQNhwrUJAcPGYCV4zWeWvBtPAEuj5hEq6BXy8kZgTshkPjcyHCM7yDqL59DiU41D2hHEz",
  "key37": "5ArQy7m3qMJr5WMayNHPkJNxkK3m1KhpVk7HhsNvpV92be5JHvsMmvjMmvK86hdYa1hLyY8w8wvqm1R8WwGS8Fh2",
  "key38": "3VrNZLM5SnRAdj77Mh2JgeD6rwZdccXkKp6aN6aPfwvHSffPiSZuWXtMxLXG3A637rapTz5wos6hEUUpoPVNYCXa",
  "key39": "464R2GbZ2o2Lt1n7ZQen74LtNVgMX4Y7GfrKS2HtV3TDUQ6W2UjhbAHUpuS12zvHtCAaq66ho2MuRZupNEorf92k",
  "key40": "4iDTQbCrFVCHcSKwRxYstErY3TCjZPEVaz3Xrc5wrVtFFkiT8ekCzzTWUbk2TfyrFEqdkksQB5sMQjrxXMVfSKKY",
  "key41": "5UrcHSX1RGBHH66UdKDKZtQfsfS9yD34ZungVmx9b9rSDJ2qf9i4C1SwYgGsAvaJFyBQXVpWxSLdhfq93zv9VFsk",
  "key42": "4R9AoENEzqR2oFNrrSPCHNJ6Zsd9RZdXjwN4bDm3fnoJQQbCSsvwqJ3a7EDrSkVyJfsinp9r8r214XSbovSC7wMc",
  "key43": "3dz3Toz9br62YsQb1a1nSucsTnyHBPxh8dcttkLgbbD8RL9p8qE6atUhpU4kdFEdyBVQJRCvQFc5fJN9tatkGGKi",
  "key44": "29ZdajVon4GCbAtV1U2sh3bMyuws4nrkg8yPitzmFe136kqCCMYySEjevSuaY4cjsvQN9vPfEcEtTBa1Diyp31eU",
  "key45": "3VHKestVThu9V7rr6Rrcms9q2U6euQrTr4t3wjprsN7VGrwywJUuFxNERBEkhTcVzs7PAHPYRUU9YCg1njw4uPHd",
  "key46": "38TpYH9rMMyCME9HPF9Ny91jo4xAJf4Zx6jV4WBCsumZQRR6yTmMmEEF6bvCsmKjeiUTrpcoGe96CGSnEDZDetB8",
  "key47": "3Tictk1m6PJTZzSyAt3DunSeZRbUSQV9oYUQLx6HHebBy8CsKtmj3qzGAVDBLQy5fwTF4gSGctrzmSKhdecbfng1"
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
