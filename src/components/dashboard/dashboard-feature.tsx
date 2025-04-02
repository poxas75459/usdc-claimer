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
    "5iAFSUNenvP58smJo9haCzYXLSepWdymUV8qiyLtpz5dLJGxYbbRraX4huBw6MdWP1xiei1CY8Gmo9QQrdug1uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rhyR4daftvxUQ9gjLgrpMPLQFxZhEj6ZxrXdZiJ5bGoT9LJxVr8SAumgWCmUwuQzX7D8SMTyWBavBhvtsKQLUgh",
  "key1": "5uYi8dEXWyZJmqBhVFwWQWfzbRZP7f3CiCtV6zt7d6rFdeQ9EALYZV65n4qKYJUFGo5xwr8nQ9ApUoRYH2e6GYP3",
  "key2": "gmTD7Y1aZzY5WWPW3KrRfPwisLK321ds4HubjKACPh77vVSPk3DJ517gKdZTj5D4DwadHPYLLBGPmmF5N5wFY7c",
  "key3": "2YqmDpL9iwv8qQHCpx34SMJTWCWj3ou5mvfJkuT6QeeuCB85VpvPTvP4PtrxfdWKmKPwALbubVnsY6J94R7tLp2M",
  "key4": "s7NgrR1iwBUQmbkj1dicZve9BFgW4A53KxYtZ8y3ueQ3QzKFBqYEvxNkKX9hL3YVY4gxEcaDXUkVtBWkodochSE",
  "key5": "4muncE2qdi37vhWoCFuPAMdtdMZETUWxmRwvLgnXb5vK2LfXrfmmiJexrcrXWsow2GQKW5qLRgZiSZXXR4ZbisSp",
  "key6": "2vvW3q9RDTddzPHDNuZgQKVn2iAh6fTzStNMc88UCimTeZgGwtY2JPYEjDjyGPJLa87fhc96GvmabjzAhFTtZbH1",
  "key7": "2HQUvBYXXP1tgLzzXd7TvAKWxtPZpeip4a4U9Gd99zT4YVA43ZTYCSyTmeggXEQn59qZBDJVuSbTxQXTVDFqDPUd",
  "key8": "4H8eh7Agt4PQ5Fuk8SH9w4NrtNes5WdMBUaZCm25pPd6CSeJXfSaLaQ1gkEHFz9X2LUksqyYDoa1pjxvSHnXo3t9",
  "key9": "5bkZj1zQmTzVwgFBFTHoN2zenCjCnfbXcMsaXNhVvGnSzxUjN17j1MvcHJGWC3NV3ATpyWZVZpHiRQ1vC66jCqgb",
  "key10": "5NK3LD3ebAy2K6Bk4vULDFfpbRdmv9HCZwBuTkLeWzfr8sMifTUZTS5aikzxbgGUThejDPakohnC8NQ212Wb1tsd",
  "key11": "3tzdeSdErgEtha1acbPpcA5nWL7tro82b8A7kGrL6Cgbkj2HKtu4fckGq8ZajEmMCeqYPedjWUy8CUqKZuEGG6L9",
  "key12": "GuBhQqUWjFdQn9S2zqopZzw617WbodDmd4xM3z56SZ1hf2ikU7xvAo8cyhzBXwqspCYrRFYnm4dbMCTdXeC1Crb",
  "key13": "4Lp7HYCxpiKQvd59HkaULqY9k8xEyANpwjcUz47WRowPDztiLdHbMYfNcjRh5BjWWjeLETjJAwCp1zHQ5JbNXZ4c",
  "key14": "326QTy3sTk886o1AoUZWJoYGpahJLVXV1YSf3CZUSsqtJgQWV6rTsqWqpDCPNHpNu2BeRgUkY5pQAeGaHmPK1UFj",
  "key15": "1asvFKtNAyVZKxtmCLrVSX7UmgURyTGvqaLBEmtG6nrEbadRm3uAWybNJ67DmSCGiz6jGZqGtBCMb7Ddg6eLHyo",
  "key16": "3YUNrqVbNwCsXKizMcpkc6KuPf4ExRsARRhdCo1ZgVcrU82A8VYnNVQcPCMvZfoNAmB9My1xNZizSvngjZe4x34c",
  "key17": "4CK2ZDDUgdFZQReDXkWGQxhM8yTS7P3x7ej7zewiVKKNofDgsLwY6TeUyGR2N5L3D71w3jSGNP6ph4CNr5ayLpaJ",
  "key18": "ph9HnAng5tzhFgXmFJm4QotwCoZLDeENMJGRq8f83SCkS8TcxY5DbM4RGuKVhdJsXQHcXkyLmwmPWCNb8cNLc1U",
  "key19": "2YTCi98f1ZkTreq1C6vVn4Njqi2zHJFhauqyoijhPG46xja3URs1wJeSnNgcUdeoEuSCN55zukyLw3M63UteQfJP",
  "key20": "28srw7PeYtZduPb12DT8SR1whaL4itdnRb326gbobuf9gzhPQb3r6jGEn9Zpr6xC3DmV68h6aYaPVbV52gRJQrHv",
  "key21": "535dw4LaBipsR8VFsECyLuYiDHvsC65mnh4n5qH25Pr3xD42oeqjAy7vcSNA4gsQFwzfgWh1cBa1dmr3VDEJjjh3",
  "key22": "49bU9Yo2JYLQTFbByQkeTB9f1a2m8bnqKZdXpssAU4BbvQH2RaXnXd5qt3bEFkYEduMzbnnwEv4iy8gS6cMRysZ5",
  "key23": "2MF1XriYZSGGWxoeYm1xhorrYt72HGqbYETsD5QSjVdXsmJdKpLj8QjiWF9Z89Trs2n39bwqUSLLsWakCbgw7JsH",
  "key24": "myPU5cg1tVHgHM5zyuYZQ7Mt2eYKGotY3rkXsp8uQYW5XGjkrguL7md6QRwZ3oFhxUSiPcwaUi8J6MBViPQzXjY",
  "key25": "vp7WyQbM7m48L4RkbVEGJLhMD26KGrhYikuHprpdTaRfZnj4jVci96kTtw2umWSS5Tqk3FAyyGyZdpf1LNH7Uiu",
  "key26": "23wApU2eny4LmEnXB9bBiGkKv4uQmiDoUovVVZhuJExmJHnboxVbKU1jStug7e2mPk3seEZV9MFnjhMnyFzijzao",
  "key27": "2geGVNKsgrXnQCgQmcW3xk8AtFjy1dTbZxrf64UgJGaUKvLVq6ZecGY58fk4GNfveJLX9wCA6tzwvg5ARPXy82Qq",
  "key28": "4aKj95knJgBB8kwubbxcUhsqt8siKXD6kUfVYWZfypJdN1Zs7cgNihrC2TFBHpZtoidqipbosTvUceDz5yBEVJ3v",
  "key29": "2WLFEdmg11Pe8KJzHa3iJENuPXLiTdi3agU9zAhrhafdCXD5SEnNWQSxGbKHtadJvnJ4y6d7zoAGE1k2WTiKLPf",
  "key30": "5nYmUveeRpfjm9ET6zcDc3wCYj1qrno7MQDBPzwnTGJB4PPwbLreyHgjtZDtv8MGfUUz1QXpCKo6FTfTLGQBULbQ",
  "key31": "3bQvuhp8N6jsSZ3uhkSDBK8Ar23i2GzS8ejSKQKvwPnRRwugWkTCn1ae5CUdmqXv1gTi2LwLbrPYk5DfaS1CPzse",
  "key32": "2qUhJqVKTYAygNiYR5pbLipjVNt9c4BDJveWJnNELgvZFR3FW8THkmjT5MSqCSXmpQcUy8XA3gQgxiEk27Q4hLWd",
  "key33": "fwzCW5KmJLa2QU82HFckdUpVmErG13FJ1V4MBPAkgVPDuKMtTdQSbNwddidDhGFHUL6oZiFhBCP6ywrptddNPMi",
  "key34": "5TP9NZqYfC6zG1Bt4CZXS7Tt8bdmeNjm3Qz4eryqABTSBqdjJykhABVfnVwtqwrg3o6XzQkqD1ia91bDqcw2LbVL",
  "key35": "2Rsc4DmtzjiWT9CXy8G9y4BPYn5HhpnDqzZdcxLVSgLEyv2LS7EanQZRkHYnSu8DzFuJF42PXDUtazNwekNPyMpi",
  "key36": "4QtAfY26ceCUuUSbSjxopbk541xLow1HEj4jtaNSLDVe4DkeV366WVUqpjQUE19fKr82W4VJGwVQ3t4y3BZtvAak",
  "key37": "qpFAyTAFsp6JaKJFRVewrW55XQYzWY445ypevQQSGRP79RPjNfbe58PydMPQaYvNUGJgsBHW175wAx2pjaLhbmc",
  "key38": "2aeL6zucfoFipDL6gJLSUbL9XCWNjaiwHfEuT3F8obKawh4psRhKRaqQYeiPiVu5vG6xbpyqx8M7txSgGDHwkabX",
  "key39": "yDroa5rSRZbqRSa6CRA95bcsDd9Q48atmxggPYoxxk3Vry9aYcUxAxcujYKg9gTh38uTco7Rs123tQW5N8W4s5h",
  "key40": "5gVFDZcWnt5AdwTdsbUjQ4D5bYKMVqMpVy9gey1ZdDf18dMV1EgwA27TktT9B1kNxNXhy5vG7Dd2r9PdWaywtsMD",
  "key41": "3q1DXS2M2wbVkfgaWednFmcf8mRqw2Zc3Zh8n9mz8H7MdQUPNS9bwwv3Y4anhhMgf6HZZD4JJqYYWC6ux234ZUH3"
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
