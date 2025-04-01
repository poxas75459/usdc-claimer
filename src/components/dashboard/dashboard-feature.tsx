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
    "K3FDGRWAph3YPsYK6wQdpYEEb19UvkyvxQVv396xZoTcTKjx1HCqgwX82sSRuaQz9uYMdMrXz7GDHFpt1mPDXv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TUHMCHB2jwpSjPiAGTWApdCdduggTY9J2TcAqopff24PsHGhoT9ED7mhx7sSJgKuNKnKSE7gXuaRTnpShmGtVzN",
  "key1": "5SqT265rLPSofPdE4K5yF71zZx9PZg413kZJiwCVe3bNYgHc3xopaXcxR3EK2ujVGDVAQm7rMULrtZGx1c2qBHhm",
  "key2": "29wjru351mLHDxbv241AXjKo3bssb9eRteDs2QYTJomoXPRHshvt3jNwYvg3Lf8sDCibaHKTmsp2wD5fTJbRSCk9",
  "key3": "5kVkKB77R6TKkswcDmJpKJ8qqD53DpB3goBFj5J3EoRGdkEj3zikpFvMmn3hSwbHkyfwu2ZqQgE3sXJNLinfHfN6",
  "key4": "33nbwDVWTzrwruJSAhzHLJBs2U5Ppq6pxnWTbWMskF5uNRuUuQjT5XDXxBJ4aPBnkTg7gBPBDweTxVM85YT82nKo",
  "key5": "3wQjFJgDyivqB879yd77bFqh9A8a14CB1VpPZASTWkfv2j9xJhwMkh8W7Cxt3kB1bTESzTs5ubKdfRGtNfUGSkMj",
  "key6": "5WbzFvVDaCh5heby95Qv93g87GDVeNb31B9tUUynnjJZz1c4yCsBkycs6ZqnZNc5MB7fSQ4j1zJP6W3e37ChZFBW",
  "key7": "2pPeYdPtGahk82UoAcy4RtSUadsquUJdo9pXZB7EkXKNgJfrWeMAMJeKN5DRQBoXio4nqcFky4gZELEAsZb1Qs5w",
  "key8": "5FUjTqzRsdTPuKahDB3nufzHV6Eceg2gCVYHDZHv3Vt8B1Wc7tExsVrFC6Fz16fVTYAkiPJ4A234z5NcXGV3TdmP",
  "key9": "5G16HstUNbaeHcBNdvHQ1TbxTDXUVZS3XwSPC4XQ8RjX4BdcMkY15MtU7VPCQf4Bw8cAfMWUm6jjpgn1AKK7SBia",
  "key10": "5GUakfSXMw4Ty1WM8ETvXcbSZLeG3Y4WXqsqgf3YYLE1djkrkPJoUMKnbPwHHDgqhJkGuGrLHSxdsLq2SzuEBeyd",
  "key11": "2m6xoYJvwbfqMxhQEauGoe47coGTrhaMuEjVaitPnDv3vGHoEmBpuJZuKUrDy6orbRweauwKgXUeCb2PopoTC7w3",
  "key12": "4FWUJr5TtCSxm7pmVqnQguGMedWPv18LyRS5BK8XTS56ppKUk88tLVqnXa83SoLpYntTz2hjzqxzWaeipxFwL4dJ",
  "key13": "33cLce1JJcf2YimXJkEyWrzHHZSYL6cpQCwtTJ5gpRouf1uw9rxpNDbWWc9Ms8xHxeqCbpwh13ALX3VvxStj4ATZ",
  "key14": "39ZhuoaHt8P87zuBHzUzw49WsfRuFp8RdnvjEKoBZkpo41Xau6Nv9DTzfvU5gvE6eGVhP2N1scoAhkoHnWLumF42",
  "key15": "2mue9yhDNW8xrdqbxafiEx3NwDDnbbtLJ8LTtBTDzzrRumnXySzssJMJzxAuQhvnSeiy6KgAb85yckXZsm7ggbr4",
  "key16": "sWAv7CCXjp4XovNMknvfhsJdn6RZecU15RTDnqVCfaNRvX5Fwkp4fKDsoxX1UxXnzEh7p9fJv3MGCxZU8xwrtFo",
  "key17": "5pt5nbNzKtCKrGf25zLZqUdfhVP7aahn4bFHGEN25afnQbjrEweGBtfCJgXfsS1k8VMhbsxyRjvZVdSGuz6H3HJV",
  "key18": "48DPDpk45F2M4MKjmVWCw7Z9Z6WGvMJEe3Kp2rx5epMn4fcArJCZ77ts8cpP7FqduG93wPp7YaH43GCWR2AtYxAb",
  "key19": "kiiXJC2k3btk6cf2CdTCc1Uqj7x9nr8RzfSXfjWuyVZF1dw3e3Em3kJ4nf3QDRXdsKPJBWJbEU96NaBCZinXztH",
  "key20": "KS7yigZE732AyuJqjNnnCrByp3vpqELcDJjiEAQwouStSN3nAccRcw2V3onQVFs7EM9ZVbMhA4YSYDnQXM76YR2",
  "key21": "9owbgcqkJ9ZpQtW6Zjb5ePr97GbJBKKq2QtoBx1RjmdAnj4FyYYQHpbS47TLj7j2z3t1zF85ducSQPD2RYZKif2",
  "key22": "okejUSYUGkeg38mZWj84uFdEs2pDuFt4Yvha6JCsJURFJSsePFo2SdU7uvn9R6QYutgjqYjmH9qSnVFCidYJcw1",
  "key23": "5LWqww4RxnxCbNmowf8xqBtyvQTcTW21CNNyxphzAu1vbhswSNDG7G9R21FRwq7BS1dfZZyzeJjw7HMQn5j7x3rS",
  "key24": "2i4f9Xtt9vyjJRV9RGKmSq3EKohcpXGNuNmWyjvGhk6hJ5kW7Kecz3tYFSXeDG6CBQdaZydhgC7REMqNUP8yQTHt",
  "key25": "Lyd85E6GTgKe92eUX9JQ3PTibSpwbnzH7Q6FeSkt6PNeVN1YM69b9U77FmHosYDHDJpo7dFeLk5pAbhSoZh9NwZ",
  "key26": "52YtfPQe5JJVHt5Cu9iBx1Le9ts2Ly3Yrw381Gp98qA28XxukWKrNSfXZzBBvMAU3HbMoNKBSCmr29HLyWAHpBdr",
  "key27": "5YybatHLqAuDF3tGPZ4gCqekMPGjHanPKdpSrYexDzhue7DdLoDXgB79ATmbsZugqhjmQMSTYqyCGa9WgVJNyDBn",
  "key28": "3xA57CvpwUVTmyFDJS9MLUQhdaxTS6GxWocvFP9YzFk45MD1npqVHP5NKE21k4XsE93jxNVdCSe5NpvvZnq41Tn8",
  "key29": "3msHswPGW8KV1zu1Rn6zU68B7beoS49b6UUu2pLcaKRW8w4sqbBxZGwaftKK7dvaCjQiSfcXVh9g6nFVxg6k6RX9",
  "key30": "4SWyQya49kEiKJ4oyVtVTRfQebuyrobYJGTvGrAujqKMtNhqw5613gfGGbR9zUGffgWJ1X6WACrwCLUASgfMCasG",
  "key31": "5GE1sRcvXL5ZdvGuitmtyxdfuvSXe7jd8eC4CSWfTDBNriWK21sPNRt4RHb27BqSM9A3UofNGkJZL2AzRtF62YNy",
  "key32": "3rM9nMrGvnQAp5br77a7u6DiFFLujKaKfXHYvBFs2B4qekPnXYziLvNcMDLiR5h6GfxsyRajduHn3CmasacTZJJ6",
  "key33": "4kBgU7gD26duEoJUcFHhEo2Z8xDJ4wSGwV9TtGUSwLCEyazCtsZT7zuuAVgEZg7gm89VvGS9wBsRCpLo9A7B5adR",
  "key34": "34cPcNHYAsqBVmWTcDj47rcS6JQ429syrrx2nUET6wcoP8v1SwXaaKcEshWkUyRUxV1mZZVuuKv3YE5FBQYN374X",
  "key35": "2KkGrp2WZowbSjbs6i8qmfUgBmCNDL7did91Jaxja8MqQQ6oUHA9XgQ7oRrJXPTvvnp9srkjq6Epx2BbBczMbkHA",
  "key36": "2eD6w7Mqxkpazck1axHnUZAeSY4WTfZG2qjSWj1baHJsyrXkE7KJLTPMwAHfpt7cD2iCfvXpZedd6di6wBaoP1g2",
  "key37": "up2TCgumWRQKzC8vE4s1RZwPJsd95HLgfUeMeUKVYA9GpUtf5hwmbKCSSCgfhPK1XcdMkNWL2Tjs4HPHahmyEad",
  "key38": "2WqV7fwC3VMgGMxHydnDKmv4wGtRXo3kG1zcduuR9xbqjuE73LuoWwFkSYicxYn3dgMVtWdzuEsiQxEdgU3qK3gE",
  "key39": "66GpnJ1MhJEz5JsfY8hCFXFnHdqveZdAXFYbbiEmXhez5obqKQSm97MkSDw4G8LoNHPj7pJSC7NTrYsbP7vqrcKj",
  "key40": "7HKyPESmmT84EujcE9C4SqeEHGkdg2ekKTvD8ewX2LFTrKPop8dKTmNJZdT2g5nFy3amyaoz4j7JqgKwTSwynfw"
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
