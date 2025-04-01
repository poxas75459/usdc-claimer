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
    "2rdZRWiPkg96NYQNphv7Ke7efYN3eHpyUW7JhXxMkVwHK4En8ohTQEPu2WXwC8RuEEswLeVjKLgs4zqL48yj3Gaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aK96BsMHrRqQXdybZn3Rj664QqsEUTpPDeM1VsE3sR28tL19iQseWcTrynAubcRDHYgK9WHaUsEscBWqcXD4N7y",
  "key1": "4T9pNDGah4JgGWvF2cgeDDHyrmfihetnVj4wD7eCRMr3s6neDvtEx383tPidibaiCaZn2MQ1LwZife6y7GAeNGmc",
  "key2": "3UwSWFJ3iB7HNSRRoRAvjDfFXS33xTACwCSuTFTWbwvNGfLv6ntfUHnBtJXmHQk7ikMhbaNmTaSBQWd1TbUgUnQm",
  "key3": "2PbuUroi8xuLAG7EHtsUMGa5fXyj8VfJ4am8cezzsyzgmG2J1vb5NLJ6NpyDJZZcqJ5W3pnCh9oW46T8apwt7yMD",
  "key4": "4psL5HgdB5SXvqd9cAXFQJRZJ2B8iPyQxyjDmHk5GHFeSX6vtJwV5cVQeTz9Aa9tEJsZ4R8niQM2NHvY9ZTVdJd3",
  "key5": "434fh4pAzJmGtNSkLDwN6LCoBcVqrTeUJ84LuMqVvydb3dZyDj9MAwHvZuTJ2fgdSy6WXHPKVf43tWEZBWnziSfR",
  "key6": "5F4fPX8vWUsJdhSmSywBRj98CzBaXtg5LgxG6brrGucmajzwbz4NuqvYUXAQvpZJqUM3fN38K6dqvDoiA1bYDkHw",
  "key7": "2gvkqsf34aSKibgo4QawRCm1RTPxkmgWnSWSqDDQ5Mydex7EPrTe62fmXY4xeAG4r2D2JZgJ6HNhGAq83dCB2QQB",
  "key8": "3SyUU9Q148TsTFNM1fKTuC6cPiTJfwGMvGC18whGwZ1hFoLBuerJtWDGDEtR3dbhkxsuX2Xe5K25H1jJ3MCN9edb",
  "key9": "3VAKBiiLc8Hyb1gWFAre9f9Y7tBzYztQeKLTZH4NHnMxQJsAedTVxDG7Yr1e7zbpvo3LYyUCk6s6dbmJ5ZqBZitz",
  "key10": "4e7bscfbHLDYVCZdKPE4xNdqBpjDH73LM1fVZWtxhNhGcp2W1N7nKTnHmR15vvn2YG6bnX7vki5PVhvH1oFVk6iE",
  "key11": "5ZfpdfzmLSygXpUw3FMaYW1ZVyuHLiuS1Z2jK1wGK2XzBNue3AZT1o34jmTcCcbGTyNvfgJo8HpqbRq2K9ayVBvX",
  "key12": "TRDq8ArqMozCPLkMdPajkUvfKVCjgzzNW1bKYCZQaTYqzsNpe84d8urkXtTTwtrPpaqovqj9Q3Aebauj81aMzin",
  "key13": "59EUdm5bs39zTSrJTKBNiSwjWhr6LG9DL2wCeW8ZoFfakEaW9gzJ76qB8JHTwvqzRvAWShmiCp2Cg7HWXNMB9XRf",
  "key14": "4z34fAeB7Z7XqK4cHQEALUU8w61zbCUaaF3mMGwTdooQFjG5mX9TtHo2HcRUJmFadTbS1N8gCvM5tNF8gZRfN5Sa",
  "key15": "3tck3DkxQVBzmeehHBBRMLgii3W4SZZqHGohbav4NkPgCD66xqB9XaHt52QtnhVPvkdKAzVeqBASbVnZSk6mDWqM",
  "key16": "Sr5qMXXBN7nRc5EyhZ8PfuR3o2fWjUdSVuxxdKuDFDpEy8C6Qza4iQ7qJY8Roxbuyg3TPFHhgPyXNe98wqDayws",
  "key17": "3GJcCeWy8DsUNeKcyUSvgRDF9rV7SkhSQ6utgDqxZu6Kri3hUg7D2Tc1XbxQW3k2mUByoRTpssiiunjTgbJTcfaQ",
  "key18": "2n9eef3HEH58zuykjBUTzkz3ouxB9FJJ1Uwp3wWkpAS884B3qSpmpcBaBz79hmhyxyjtoWXTgyz6GaLzifbzLGra",
  "key19": "JDNDEAHWUQ899WiieVt4RpcfD3XiZfov884Zc2XZuFb9EWBLdYNGZ8L5LhUoAew4YYhTsn5HySSznfG3CpqbKBd",
  "key20": "2536M2AwDfyTN9jHPs2aP1f6Rar9VczZXSBYp1zrxZbG8q1n7Hento1nvPaKRoJfgrYbX3pQoV5oUmeEMW5ei1F9",
  "key21": "3Wz9rtE4pYJxNVuaAoGAnmUrKEeyT73S9Lrwhxr1KyUUwbRsmN2XGMFSWWqu2qpyiVcLDmgWvSTMHX5NjGemFbMo",
  "key22": "4kBTUKcvc9mHsQDU9C4nuPjwPymVHab8x3jZobnJHVcVUjbq1R3DB9as6yGCUrjdK31PW7qu5px8BMF6QuEWwwYp",
  "key23": "4bz4VwaYRo2LPnx18gdmWt8VoQ42KJPTDgnPKnMVxGmaJMcVsdS1aQQquCegeUu4hV1xJeALvxSCCit2dWKybkZz",
  "key24": "56EPbTGqSuLtoJTU3oCrxpH7gitnYkfzALNAHgjbtxwon4L7UEchrhHZbiR5KC67etxChKZQXZxNvNsWQwrD9iUo",
  "key25": "3pVw9WT4QPs9hwNkZDmRRfsoD3reSjTeNAp9soXdwpma6FxsFVg9RocnJabmDiXaKLo2Gj15Mw6gkSyT2wcTE2DZ",
  "key26": "roBxaHtEgv2xTPJ5hH74H3WDe7RrMojhw1mF23zi3UTZxGKnMzRfypTpMB5MR6zCscvrpAYHvnjEc2CuNQqSBJm",
  "key27": "M9LxNi1PdtVtPpHTebMHbyE7pAhufHD4aLNq4ZU93aqZajziY6f7Jfh8Dq2NpifoNyRLfFpFUrn4X5tjvtt1cJX",
  "key28": "2ZVngLNzyevJWU6MiTWRUzGVtoMWr2YvYNRV9enBbNogupcdvFCgZDVHKNTmgpMxyYu1UqbhrCGHDTz3dWZ6VYwJ",
  "key29": "3aN92VQMXK85C58KqUnRdZoGZPDDJumdcJtxYYeMvWrRB6YhNWWQtGp3FqiTVxZazj8BFNtHKJNxZkUNWUee8dUj",
  "key30": "dcs7nQjspkAeUdSNh72qXbj6E9kBuiE1XUjui3a6qWHVrzK7yZJLDAJdNsnSzQSmR3Bm23MhFjcVw8deZmCZc7K",
  "key31": "5mthi19SHDw6R65i4Pr1zDGxWr6yjWiLgoKWSnWsSv4ixnh4Wq7HXvhuWDZxDCf2h8XF6zfnW78ptuEvKuATHnCu",
  "key32": "2H9DKNKYnyiNntwpPTYuxi7YhVJKJFjYCvVDhzc3vdNfpDmmcvjdGjp8QpuhMfF6GYPi9ncTCkY84M7rZxiw7su6",
  "key33": "4UcUeSW1iMYSSdD48wRzmbf2oyrr9CSni3gkPPktQaon8jWQZ4UA6H35oFZY2mrZaWDNJvQFk9J2JLXYZz8HEvHL",
  "key34": "3iHnxmWSGWY5LqHR1Bwyh7LGADB6YWbz3Ej5FtrWJg1U9oETPphEc2qbUNpCvt1BVWpPaL6ZsfjQMnjnuQAZihxk",
  "key35": "2cMRoHH5uu8Qf7tF7RRmKXK1ocx3swrV79CHkxqVFXNpVZca3haqnyK75gFEPHRQh3usKeaAup46R2xnVPCXeJYk",
  "key36": "4pAyrhHJmfMe7QKWg3EVTqT5VotL9JvQWyg5Ku5G6f6n43eSkpHDjxQQjGUF8pPdrmPAPf38nthbm2zHQZaGzFkA",
  "key37": "CwCRLBQ2cithg5MEhVaabsWvWduQ1n7mA8kxSW1V2LT4B33aQB5RmtHgEuahZHmjCLtaG5MeQqHWV5uPVrHmHrV",
  "key38": "ud7YR8qiTYEkiK7YFCfnKbDW1s14YKBC9FoedmXWQXYmxjYMo3o7ZCmQuN3gRrHG5A9uoPHEFkPU8cTmJZVx4ir",
  "key39": "5HkzHyT8y6UkzRoBpbCcZgP5ZtiyN5GwktKTMuuh4tNfmt9YtkaktTv8Mz8Md3XveBB13WNN9hQnAoV2c8o2dvCb",
  "key40": "4WNJzEKhYKX6dGWyJVUzKHPepeEsNzWDFFQDbUp8q8u4mToDUjyCuFoMYMwD2RaQMFrJpLjeWSwUNV47zJyQ1qqr",
  "key41": "4zSbfcTartwuLnDqPcn821qCtVqWDwgitPS8sDhhxAQPZsxENZq5GR1cJTCoAzE6WCKwA3X5nvHrZmWEVPcPeea1",
  "key42": "4JLa4La3g8B7GhnPANfe1RyszWGa4MhqAKEdR9gXvcPu7Ruq6VcPP3LQZqZE6vUK3HJmzzgrcyAGNqVpANSRBj4P",
  "key43": "1yX59Ct2tminDkEvMPQSL8yYSdFFNvkKv1nBsMb9vtEcHNcBjSayuV76kRsLEAEEV3k18hqhL1TABHShvBf1smK",
  "key44": "5KzuRPXd2DyAbcdQtNQ8PMEKpjfavmWNEsh7wJ3edZhVDY4eunjTs3pXdn3hDVsFsHc43SwRhf3i8jEmiccQvbPd",
  "key45": "4APjqymhvcUrcMHydCTXPFJqYr3BvtHCn3q6viKXhjBwyLEpvrDhzL8Y2uL8R2btZcL4ygqydrzUSww11og8QGpH",
  "key46": "5w2gVtVriPD6SRLTKGeSDUUUjnaN4YkypUEgrBB3aS8tG9ABpJifyxAi5VKAs7Y6CgY1MZGyieqSQbCvAR3wmcAd"
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
