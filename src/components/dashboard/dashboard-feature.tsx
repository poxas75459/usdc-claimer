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
    "3nd5qnLeUw4Si734CN5XNeWskU5fCPTxTYxpQ1cweig6QhwW1GLSmWFK9VYWADzg2iPE8Zz9AJ5ZuQaTqmh8Y5NS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q4DorPaiXNDYRgzeeMmUJ4tUeq9sMyLvNwdmK2qJFhLeY3oYSmuGV2vh9MTiqfKkAjyHH2VBGd9ZM5FewdgdJCU",
  "key1": "41aEqfgd25vKv4xH34DVQgYBhBnhY8Qxayfz5Yb76iQP4wuSkhDEXnaDvcJhp6jH6jMgVmbHS5avRfdmgVUbSQtV",
  "key2": "4HMzG2CXjnfZSdyyFEhXTxstQxkFmLUbJrBcy5Xfvk56MkWoYP68cTVG7qE9iHJ3YxRZA1iJBp4NSjbGUVFoXYTq",
  "key3": "3sYkewPtjiybg7xoMfHW4aHUfLzRssNWiAUSiYb5fuycHg5hXxH7DSV971sRU8uDRXDLjq8AFj5cbk3xF6jvQQrz",
  "key4": "31vStuULaTKzmPsuyUsbs4d9zuKtxKEpAm6ckzgKzFSzYwJcZF26KsAYQeW1UAzesNB1iAbHWTxWPUZJkaKQjTST",
  "key5": "3WBfjmgok5jJYvZ4Y5fQdVSRdyPzP66Ct57aoAtEmrhXx4N2Xkwx2yojf6U9i97pdMnSQoikBFf94WRZAa6CimBf",
  "key6": "4QxZ35Zx55pj6Bgp6Wb5r7W5cq7759V3seKgnPm5kuajek673ReqAmAVRskWcSMQUngnyCTNv2p9YV1SPrqwekfF",
  "key7": "2zLudGp2kNpsZ1waPKNYpijtG4LLyeiix4rSRMzoUwNmzJ14NCK8QaUSygwVvNKqLfm6H6PqysHDQTDBn4iW8PzT",
  "key8": "5TtpLQkU6yoJUfRaGkgRzbrT9zkf78xaTeSX3ZpGNrEJb3WGUDCYBrZ2ksZq3paPHX9QuDsJieu28vEkMRvEuTtb",
  "key9": "3gRNq9CHN39u3Vh5VxEPgeEWHdKp9iRYEMxTkegSMgzYWyhqK9kKomex6tmZfVs9qVhyEEJXyuFi2kVCuL6w4rjG",
  "key10": "2ZfCP3KLYz4M9eTYQjVafX8Lor69DUbt5gbmRhZ4jSEB7KjRWrvwe9M28PqzEMva4EF7u89XiV8R7aV8WKi91oRq",
  "key11": "4Kufhf37ZMgU8SmtEaXs9WXJWRzDS6LZfmLYyvbUaciHmhLbGgzMjvrU4V4Xrhc6hrzdJzQy1hecaz4GsTFZDxf5",
  "key12": "55dQfHCx7pPxgp4a9ikkisRRTJyFTJoJ7xmFyAV2TJ8G9oGaqrYnhKjiRvce4vzNyV8vv6WU1GDKSGEBLgFtvwki",
  "key13": "2YytSguRFTk8WShPoGwpmGYJpG36FgA8TSVy8FDFshvVBoDZ7Agt1St21bNAgVpLF1sV5Kmc4S3mAjBDjbQG555N",
  "key14": "3VyZvszXrfjgx29VngjjsK2pHitwsaBxVEtFMme8Amkz7KQyJ8oEXkn5ayNkAaoTT2UmVskXSfHTV9ewJwPxT1tx",
  "key15": "2QyUfPxu2xykHDdvKXUv1D1uromb6Ydg1PNWnwt6hkyf5n3V5hSK9pvpsEF2cgfvQiZHYMU4qT7oMKegU98ShUQZ",
  "key16": "3uZqfFLomZgrVfcfW2EFgX32Jf1S1dZmbULHgZ3cJHVSo2YxdwcJfinPMM82mnzFosrayMqsDJL4wCrJK3123BR9",
  "key17": "5kYy3T6e8y5C5w9x3bvyhJxEvEh4zR2yNVPf9mVfDoQi3kAgur2XPrJQbFmbB9cuSL9zFkL9hnVVxn7Dsef2QMv3",
  "key18": "3pytSmuJDVizYrLSSXFWVp4z1AdJVyRxSxYGCaoH3sNt9ac5wL5mYnsuECx7nLcomaPKzviBJJQtR5uKBtErtDaz",
  "key19": "dFvixYgZTayFMkNdvsHoiRmDRx1x6bdVWvn87DEUsGBXb7fc4669KUYvN5H7LjpLNiKPNq1usAD2imeD3Lzm7xR",
  "key20": "3LtXCNm748Cdzi7AXJGsu6TpcgwhJyAFFbDQKAK9oqwDYLXDCDmcUPRpyihDQD7hxgrEafyNeH6iukHftYMrbVXh",
  "key21": "6655mXPqVz9skcAzZHzzFVHY7e6K7VvYq63Re1gXwahYjqKC89mDEdznxrcdFSiAxSbgdK2X2QfKVFs59jx4Mirv",
  "key22": "313yFqWgXJWAGpPY9mj1nT8wt1qJsg22qKxstG3FjC8qJcvs36EF6ic3p1QrJoyVzMNmHDvsTZFfsvsyJSR16YAr",
  "key23": "4Vbhw1r5AcUJMry2T1qrD5mj6hKRHpzXhjHR9QkH37MQPPk7UPQFEayZnFuho8GN5ZmsyzTNDmtce91cE9xBLncz",
  "key24": "XTzxgza6HLEwkLPx8KeXa2w3z4tbxctY7AQcLo8Z8Y2NQmLjKw1my3KRPS3t2479N5fmMW7fjGHF3hb3SxZgstc",
  "key25": "2rakmVw2YUTadBnsRht17p9x4vpEvb3ihjaUvfx78YJnJ69adNVZYKJUQPRCJNhq144qdPV7v3sCTPAt32qeTVjv",
  "key26": "3QriUXbaqJTkvumd5rT9aQ54vuXxP9gL7bWoxptiBRhERtF7NTi3GCnuZqWjrvLuZpKqGUn6zkGRrWrM9pX4bC4z",
  "key27": "mXiTXx2jN2b9kB9LHsGENHVJHN4HGkS86viCNuaM2iJU3qawfCwXDUZ6r7RLWDgqErEPffEBqaSxAGxkTfmKPuf",
  "key28": "3MeBLVKGLhVgZfZgFpPHmva7Kpp2ZYJZ79CDVRwZoCg9Db1eAfAK6vTkYVMee8W4Sxo8THU8ApA2o5YHmjfucHSh",
  "key29": "2rBCPeYcyUbKfHGzdPsLiwGKPArpRnLmhQnFWwhSWmxPA6oyDS3sVL8CeYi597uDyoCF377qDteVZ5gESoy8gg4t",
  "key30": "3Wa8XuRA35HeFiS5hWxE9UNBgUqaAScpd28NzVCmNwBwEcn6gxzCd7j1txYMQATMwqRUm3qERCGWwcGn4kEajHp4",
  "key31": "3wczfR39vYqwr3CwS1rEWMnjw6DhqXveYSKW4Kkfs2SRmxvezPk9pXyd9pz8EWiXUKYVbwo5wt3L54XpzuNMiMLV",
  "key32": "5m9GkxDpH94kNUWEY38ppoYXxyShE4Hrbv1K4dYdG6x99xDSGeDXTzowuM8QHwpDekdfFf878bHnL7xsJV4Hu1mC",
  "key33": "QWxPyxFzD1QU5WZfAHCR9NJh98tP2HDeP5sQVhkAqintPj1MaF2TnXbFb85oc1fKvrsCMXihBvMMxy3MQvV56KE",
  "key34": "4DqjNv52EUmh2RFmnnKBmLqSQkb14Wxp5XL9gTkxLfiuRzU5AwXiRyPUuh38sCKHPMWXt3jZRgYBAhZwLV6APUrq",
  "key35": "5i1E2DmgmtPXh1LNeVPhAE6unsRULxABADs8zv79fZT8GypHd2KgNcNZGyT4R3TdVpoeGJTaMQHWtYzGr8iDdbbg",
  "key36": "32SjtuLevCYBJx3xLWFFxCFkrbhGT4iPyfJQ9XMVFDrckrPrh4HAoaJJoJdF5mzYHNcWEPqT4Vz4gZTjnN7ZpfmR",
  "key37": "38DhTV2jB4P2ZydV4fTXQng8pDQouXDmhgZTwgCstWLGnavxEafWyMwevsysUWPmRUL7RuzcLZyDcjGKYy7yEmS3",
  "key38": "2b8WqT6YJ72hrmu3G4M2kHEn9f6ggBQir9JLoQToz3PXYXbpQTPPLWecFc3yjQiHw2xWa8xXYuuVw5BuaBKcAqdU",
  "key39": "5paB78Kpsh5rVYpYKAUFDFgk7oCDYVup5vv4Hd9taAMyDFKfTHALSP8vcY3TTuwaLNz7hu1RvngSRJLD8ahLix12",
  "key40": "24rCYJqXnrsCaYmDeP4K2B6TQUva1B7shJCNofEoX6kU6dWwPrhnjbeT9nNAaC5oQ5UvdYB8HebN5YRgNiHCw37Z",
  "key41": "2Nch7WiSjkSR4WSbz2GpAUi5jt9ioD2csD2vJYBUsy9UEWNzVYADVGb1xUSZQfCrzDfW7ecEZk2MnHRzUTcfXuJR",
  "key42": "5bZiytbL9BUYdqMocBdwMzFCRuyKFH6bZ2s189JmTeVTYJG2j17sChMDqKorqU6bmSDTZ9jiWTzsXfgqpDuaMUpc"
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
