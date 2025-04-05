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
    "2rz7E9zYhgyQs2TAXjVgGxRN6jivqJsqfz2GkU8U3JJTLUEhsmqpgJGAGMvnQ3p9QAYuJH26rRHD4mmU5YVwmJmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F8UzaPJoJSsFGEVQT6iPHfVXkAqVGctN8i78xinf56eEpqsSD9C3WPqneQ2iPgeLnxoamX6S2kM8gwodyJnMqg1",
  "key1": "GQF8Ngcmq2WdC8trGra1exfK6jEvyRJgFR5scDhBUJQyh1LPUC4cojkE64FwZamf6dduWJK1wfkeZvrkPfMiz5Y",
  "key2": "3BS859yaRipHKQ4U8n95RRxY2QwSufa1uZBN69DoDJpDEY2Fmyxoo2DNkHjkQGwqSUoRXD7iNdgNpjgQXvqPmvyW",
  "key3": "WqKbi661jt9Ywfd1YkKNbQzMZBdR9z5sxRa9pEGjXZAGYeV8BindidbeXaViiB3CXNiSKVDEWQZBEAbRGkJyj8W",
  "key4": "52czZXeRmabfynEZiWBbUD3GtrAfxzAzvmd5t6m7tVQY2A3wjWGNqxh4Snt6dYqVCU1KAVuphSq7myYaPH2nwAhk",
  "key5": "2P9wg5K6LwdYqccKiE3YipfNRvRJfg3vd9GXdUS45LhidZ9Arroo7GXiXG3wyBw1RKA7CWAQcs7fWysxocC3ZkqY",
  "key6": "4Gi1n66eNvLjChJ14Cu7j71LJfRM4DBG2QACqS4N6tsTRx49pPzSrTSCHxGFEjQ49GAtpJRrVR5huRtU1gQiBWVL",
  "key7": "QF6ErEvxtbxyKtGw1ugvHL8tyD3qRHeqPutpcB1tpunwKRYsDRwe2yn8DQ7BDtFzPgfMRysBWtFBpvz7rojiP5u",
  "key8": "4ZSmRFYg3dg9GRf28F2UTQbzbkGrVmyfbPAX24QhQmy9tweEonuehF7Fvez8wLDJtvF5JQMRYStaGbXMAdywJc7W",
  "key9": "3WwNEvMM2WFQC9icyF82ctbbxivCg4rmwtTbHRUyBM62eqRa17eTYe6rNSSW9UM5QToXHs76V6AxUBnRwWQBdX6x",
  "key10": "4SxJgPvi6zzwMpG8vdxptvYrMzi9non1qawufqHoD5a7CAH3A7s6cwgeZ5h1iJ2RmBa2aUUGvSvtsj4cHurXjegD",
  "key11": "2aXNepje6RyUMzcmotCD3H5hLHQVzZNktgHVVfsbN8kDAc2q93CSTDro1iXYifxbGXyve2Zcvt7EVT5ao7oyAVzL",
  "key12": "4rsyUBRhPYTGRCGN7vkorRJ8NRW9UEw99EcJMccGjfgSBFwioNKwhXPyeXGJUi1LHX9r6Fzg6R4KtBcVJR3vcFzG",
  "key13": "3ZB1sZM3ksXEqMCEFkKVeJRAtRmfEhTZd8wAi84zL9ZwUTTDnAcsgKVPCdgNoAqbcaizZCma4CZHxzuPRXQ6HwnZ",
  "key14": "3BkHVtedkFZzyRYbo1QwwjPktQzuqnBwo9sJVTVrnFaFyf41M4eL3JsevyLq5E172ShDVCm7JNuQxmR5dTPVXkhW",
  "key15": "58KYgqpP9ASWeCkRjt7ka1hYJJSiT2usY4DtvaJ7KGhm2tt5B3LeWhdU1hEjEr6Txh3U1GHnj4JJx59ikLw9X4bD",
  "key16": "4ge9CFc2Tyj4NvYNKZPnq7G3z7VDBRrXuFeDQkYgPTUj7HvbPrqQaAUciQ5wS4hgqSJCN8syhYbq3H8Y8vsdvNDU",
  "key17": "3MAfb8nRgvemMxBoiN3kHJHN8LzSYbKkfDjMLFRQXGSLMp9PgBtCmdyqdQVn9NhAi4MBQ4qJHeXRqUimLZdtawjo",
  "key18": "4888Kupc7PcPvFVZwjuR4FJC2D82j8HLgkKcExzDLjP1HukpfwS2nb7zQZFYxYz3nsuvvnEpk1TVhPjFogUxAQCR",
  "key19": "3JQKuEozowRGmUWbUVisGUimJtUGk1Twsst5Hws6MT5FTvvBVEwh9G41iBdAoc7wVgy5GhjVNncbN4r7y97KMgcX",
  "key20": "5ws7oYq1fi29fVDdwK7bBNR2XqHCGXCyv7RwYovMqAqpC7btNXwjapPdbyfMLG4x9j2gJ5rJngmrD8FY6rFZBQEg",
  "key21": "Y91q6JiV9xZdHVuUxBKhkMcYFUUezqwdyQaKsyBNhJawe7V7938W1UoYSJUW7azq14tEpxMeSwLXwTYwACHXHT9",
  "key22": "3npcU4p92K1XLw8RSJG4UmKKihDK8fCB1nDZ2oMMipG5rYcKufjkWVCEqpvnaBNuuGsBZj4Ri4C8n43a321KTyod",
  "key23": "5sHFTpo5BTXQBYE397CaCGEkdvnJ9CB5yo88PjM1nAY6uW22VgMPkqnEqFdQy9JcE14Ddqs6k3iKb9Kb3L9pTtAZ",
  "key24": "4iJKUAdoUjbP493egmeJssjFZHjmWYbKrWZAYVtbauWXEM1XyzGhJQUAxA2SUQKW89t152nrNZZYDFsgVvXwgLHD",
  "key25": "34e9WuSuUBMwdqEZWJbTG3tyW38ycgs7Xn9VaekUqPbw6XLs2oubmzRH48vSVCw6o6yH6A7G2nDMn3c6jrYnToQQ",
  "key26": "EkrvmQEHvQLu2VR9mNDwiWLrbhSt1E23Cq6FTSEe12T7qFAkrujVYPRbWsPYT1prsMMBFjoQdrVT1ffjTq94HxB",
  "key27": "4TujYfnLaDzoXvTszJbyXjN3pB9RkoHJmk9AjXVY9hYGvCkbzzMhiUN4AQVvDg3ZkXYgFT4TEXd1GZFXGspXD9NV",
  "key28": "24TUHm4mNc45Lpgh7icaSEgVM5p1ofYdi4oP3EEtywvjX4iu5KQ9kH8Rcc9MwzJW7HJFU6M2uCRVNUaa7sAgfbje",
  "key29": "5eWvcaR9h9gBpA7A8KUFvcPgSQUaDrivCmnWKU9PdLST9rxZMmJGgkynh7Yh5aDZo89Ppw5RbvMudMr3QGbZRWAM",
  "key30": "44m2wTxMoqKV4xtQFT8bMLgeUvwhLuxq6VeVNAWpgUUHU9TZBvKRDzqivWnVz5qFrjQX64LTYAhMPgqrJECoesft",
  "key31": "52VmSG45ohAiy1Ft6nj5DCmbYsBhq5yrDcLJ2vZir7heA2GysKZY6bf5QoUHUi2ney4irXL7Jg5vQhq7hBWe22T9",
  "key32": "2fGNZxCq4zcAGHgGKGidZ1kFQyomjxQTxJg7MctM1r5yEfufovHwcNrwh3rakmP9a7TFZLUcwz9zt1xmu95D7pRb",
  "key33": "oKn1EL8M7W7rw7A6cG1Cg1Bm43eC2sdfrE4n4M5axiE6bcSnmNvWEtPiax4o5nx5zvVhhaXaYv8Qwg3jFkaBTrG",
  "key34": "4skFU1rqM5qWKWbYZkgyM5a2uXEy3VApbmYE1AzLGY8nmSC1CAU65683efoTKEMxGXS14mG2MKiLFURLL5X72pwx",
  "key35": "5UrSSYj5eY4DatBHhu9WyYCiEsR9YmaHdJuPocCxZoMvwB8kHYGTJAuDdk9eDuPyvWAfxMmZs1UMYTtoxKK8RUUT",
  "key36": "LQ5zvzi1FsaLcUbNTLBV8nBj5nD3XdkkcCbCzZpFjHkkEQZM5pmAxD7fkjGChZPBy6JrrsVPz6oWMqRJ2EsdEv8",
  "key37": "2gXyRk5Ln7gTjLeBjnMqnbUeBAPvKFW9W5fA229xVMYGkayPD49uCUEGapSrR9KBDSYz3Ukgc4p4LrdbPQjKuFxc",
  "key38": "27byETvttA2Jfjwq9CeZpJGp5sZtyMJpSj1N8dKYEcFc3whurhPSzsnthi32bgAcnVwQmpK7b85VNkxmdZAPxk5F",
  "key39": "48CtQ5VsWmSoBmWu5uHVGWvnRbJ86ATVBVJwouakpbT8ubDEefvLs6hUXux7xbtoYcJm9xKqMZrSaZWTwTaBFh6y",
  "key40": "2Uo2uMbqfEXPznWdnPC1VpP6MTjsED818vBnM5PgVVbGPvoyGFoyiNB6qTXwoViRC272gqgm5qy33qh7DN1X7mkH"
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
