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
    "2MnkZchBzcDo8yRvqZVVxzoCZ5KbNy1wpYz5KrTpZBQ5EGmcTJijQZbV5hSthnzbJsPouzA4aUEu4fCso26gHUS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yp1HnMqYmZVD47t8WeS5X4pt38KGHVhse9RqsD6Qpt4XF8Dc1QoquxErL85s3yqDQTk5tUogvtd1ZXWkBQfcUxd",
  "key1": "2cFCU5snrLivvZLmfjjxtAr67faPiqqcgWs8rJbDsV5JtXynk6oiTP4dtALLVZuMbZMPmJstmtSjcfiAngVAG8Wj",
  "key2": "mhFb6mQyiM3zZgM7rdMX7TDxRxEyXV7V2mHKi7cWjbyF6sosfLeSA2QRbC1EmKpWQG6syYCUXFQ5uKZix8sN21k",
  "key3": "Z2rpoN3vufWJLBEpLx2DEwokhGksfefmTBLJFWUKUk7KCskWXz2or2cuSawGW9QAZBeJsTFuokMUeW916nBRUi8",
  "key4": "rHqam461urSCBsaCeibPN29ugAsdFYx4gs3A2h71KvGrrfadMMTiovum19niyQhRauoLuNuZYDWdqBYjQUzYpNS",
  "key5": "QJ1VtYuu4WYa19AmPXj69W6spDw6GtQJj6YhHRYzCcszMAr7soQmkpq7uZVcrM7pA7SZtts85RKgHnGyXqYbhjR",
  "key6": "3W26YyWYKhFoDG67EZEQtwT6FjqNp4YJ7hvT6L14ieJNsQLs5CmyQewhFen9Ed6BsGbJzDvDvGSqUAimmo4LY6dj",
  "key7": "3LFz5SWxsBPwcDePp2FmtE31QNrhWSLZQdkzdTtHniWYbfPzNANr1bB7Prh7iLurWC8ehztXZwj791X8MHi28DHA",
  "key8": "2Rri5jpzkKjBKAgBDMnsWPqwzCSoqr1pqrcGSJadRP65ViPBBPRMq5tpAqJedXKfGjvgVJdjwRPCocTAjjCpfV2N",
  "key9": "6R491t2vNbjNbSu7QjMKzyNRFRouPhNMGHovTcvg9Q3gdoFsTUXJgroquMxf94GJ17HzjAcU9UTD2srhbc8yWcM",
  "key10": "5QZzRUYRa6zzwTr1rWmJkvpcQnpmjA8fkW9AhZSDtXUX2DU1ExKfiiXZCeZTykc8FJXnCSRHXLmnN5pesvrXQrJw",
  "key11": "2DXd6RJ6unJSMWtqLoxE3yXs7j2g37QNtkMy7JvUzXHPGAFq5TV2upbhoo8evU2UiYdTZW8wDumCkV8Bw9SJ8yrX",
  "key12": "4JNJfjqevoXivrst6tVyzkKEsivkZXSKDDG4QAcvj12mnH5GMHcmkM5LT1XeWbMeHY5NTJkh3K5ZzbagAtEwvv66",
  "key13": "f4yoWudHV2WuCmvSmwevrdCHhSpGWHSAufZT1vCxi1c3E29oZxM9D7kdL3XJG2Juascn2RfWhNYuC3ZUSpHsLJs",
  "key14": "5miUr8Cw2ffQGac6DhUP72eBEoTu3vhj77T3pioHesBcAT7qvk7PsRUxWxKQF7R4AF8KbvuuA8jTTaVdsePv26WB",
  "key15": "268Zru5Masp11kGF9aZV7Wn3iNSiSqTdxHMUzUMNzeGYKpp4yJjsjEcUwFxKpR9MxL7ey8PQZcsY2Y5NKxFHeD5r",
  "key16": "4q8wQHLVdFC3ENF4FqYQgwNgeFg6FAXPtVBxobprDAMWMuqJsDqEGeJayGZRX7wFxh7pzZmZ3oiYwcTAypesUZhj",
  "key17": "4MhrU6X9fTog1FBjtTA4RFzb1iSTB4ATY3Uy1SytLHP1dXCuUokA9uHbSUJhA5UR89gZgD4ZkWqsKshesnfAuTad",
  "key18": "586ptpzDuxL7MHYhw65kSYgaLhtK3REjzH3nCFNNeUw1jJcaFRjqA8qPTu6wKHMdrToFDTknU1zmmyYg7RAJZuHq",
  "key19": "2d97jws3UrDfKqG1CWUVW5FVS1rSs1THDUrbB9JRmEmGArhvJZU8GgtuH49U3tpcaXmuzZedZ7ejSNPwCBkc78ok",
  "key20": "2M4mbXgVQcRwWYijs7zA9p6fJbrfoWYuHRqbb2iQRYPZ9LqbJUqazYJnZtPpxVKp1gw9H4b5azbkLqJCEYNQLoSG",
  "key21": "4FGLvbdR7Qb6PZCNk1e1fh2ELtJVukMJvGG4s9JRAtr4j5G3s5m2n1CCN7u8kvAw9qkkfeag14DapcXoJzsG6T6P",
  "key22": "53t6ZXc3QjHwpLuzKJbjrDGBh15c2Jc24bCPGLJBFwu9hXQuPEzXT6XCP2ta4P6jBDwqSV5fbgw6UX1o3kD2f336",
  "key23": "4QJ4PdivqtzAk3pYFW8J5JABvN7x9w1wZfcHnymtif5x68PoP6t9eorzDvNPhhHpGnR7PS2TUMdi2b7hpWdhghxP",
  "key24": "62ue8zz3Kf3PMcmRKccb4HizXiwE5waUA955LM6MCJAjgrFtmvDTSEuEqgcMKpHEoDQBJiWs17k4FeAibhmxHdBy",
  "key25": "2WyYb5JRwK1eDRQKchUtnunNytNWG8292SXFmCGh8GwMz7kFKCfFcefAfK7xJtP6SrPmpXQzJDKwfHeYNTU48soN",
  "key26": "2z5iq9xe7uRVtH4JM1PyrihkoLGHe4FSHuj2sUnmqNa99k1pL8STp6Ni6wP24EHiT1chxG9qbPFdWLkLFW1uK97U",
  "key27": "2KZhNk2TeEGYs9jN3vrYc4VwkQyugWM9Da6yvTSzuE7Yfi8dbX9Ghzb69xt1UWi4qxKJunsLbCZiKmVuf6LSJoyt",
  "key28": "4kqDSG54PoD3ChVAh6syxEgEG6WfX5n9HjcA34AGM7BNyBVhhkCiKkjfTUHAMifzhiNrXjagCLonVfaui8Wc8inK",
  "key29": "8G78HGDi42RDJFfwTL2vkVgCKqBTyf9CqNjTZC3dVDY9Rvp7zrudLeR9fsmbJ3MXWbtPk9Q6Y1CxHGMNBbXQjQ8",
  "key30": "5Vpe7CnigdPwRmXZeTtthN8SAYfVJGLdxpS1q9DCKHZwvsHr4GDL3bvBtG81DWMHuBSm9snUmA8pNMESeqoSNYCP",
  "key31": "2Yg88fTAX91WwfrHjSWoabuf3svqrAcuzPkABLAwTN1pK3yN4RPHkaFJxxm3Fb5yTRPWgbmTLZ3naP9eYsm9TWeD",
  "key32": "ECaJpmitpoAFbNe4pE3ANWYBd3EFgtDwYnsTkRH4BAuDVjrGw21qKjzHtXNhX1xwn6EQV2YtVmQViMWqNQNRt7Y",
  "key33": "3sTPkT1LrAv4jVGKzzjDa54cgKk1Cz4P8VUAAJmABcES4aTDU2BBppZEoXxD8YsgFLxeDGwa8aXN1dUNAyoeRbUq",
  "key34": "67Vjxuf64DeWJYS24nFVuTmY8irCi461xUH38mQtsZ4URuHQJuMMRWDhZx6ubCNwA9ZhBMXGD75yAEe63btYKcuw",
  "key35": "ziLN2BR5XeJ1kZRUDT2y5WFRME25ANNiAFnsjaeoNujtmc5SXDsT539NxNubiL2EMS6J44Ky3PTTHJ12jm1f1UJ",
  "key36": "5k1Bub5LCT6LyeanwNCQCKPQHPwK96BynH9tfZfQEggYutV4WpFdqfdArJswVWmUL5UvRfXrW9AtN34wfntWmgtC",
  "key37": "36vJVTxpakY6NGTxCyedupctToH1f5FURj4HgBwRrP2s73prwsM4YC4K8RUD7hVJKXLinj7p5TEeyt43qThCmw1"
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
