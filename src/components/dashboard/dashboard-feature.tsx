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
    "3SnLve2xgcRx3KDA6UAuiihUd5YRbLBh2XRErSnVWM2WAHyriTr4L2RtPhJws6s2gpAFR7n1Lgj98D57LdZBpiZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3etR5Y6CSjwQBHhEc8bzGRxf7JJPpj9hUvbWyR6SpJnzVKLrhVGuNH1kJm9hFKNbX51sggnM5ykLFVhytd73ogTw",
  "key1": "3a9UydmjKADPBWeKpTM6gUx6wgEL4xuddxc4xWxkRUgSDvn39ue5TQM4B7nf3x5MWYupMRw8hgLnfEqfqWFKian4",
  "key2": "3Muqq6e4AG3i5giHnZJMQoLYwij9ZT42j2N5NRHgrpPbHhDuAbG4JqMtN4JUgRC7nLu7aTAvUj84QmK5cmNPdCrZ",
  "key3": "3RoQS9UWhKBZAp4oZxBbDZaYMD2cFn7i6jFxC6QVLm4nRoB6ay1R8veuJSj8UhoW9HLwRT72BGkx9hbwNxsurWH9",
  "key4": "371RY6F7e44GXPj8oPUTAuFzAbD57nE9AQLWS1WFCoNeWJRgWUmjW3obFg86T6RFbiPcucxbBYyee3jPBnXSg4AE",
  "key5": "tuPwRu5iREHUPHamiisASnfnJgdgnfKHvWks5y3pnMJW6hDo4jnxD1wDGiKd3o2wyz1pTbZ9oY85FdQBxFsXVj7",
  "key6": "2V7GB62tZMmD3ZuBLG93roYCWkBD6YNsPNGw4fzJ481j1LNnN9tNfABytAbyjbfZaXsUWRxxzj3ArPy8JUwW1QG7",
  "key7": "YeLtLGKuJoR6LSn24dX8JpbRU2igW4v2dvemdJh3sPtBgwqNoukfiNY5SB59KVS9JNiquFctbq9ZGPofGAWh4oi",
  "key8": "tW7z41V245z9tE3g1BqPdARWpQxaCPPzguBrZCijuqUtRXNWHWGihjE8T7EF9w6QHpWCGotsn7D4CsfnqC6Qtva",
  "key9": "65Y9M2UY91H6TKf2s3g2c91pSpfoUMFERN5icPkMtcLv2sxNwq6YmEwxkPvwF1FyRCGafGuGTsDsYZPgHtj8PAKJ",
  "key10": "2Tfi8ytKGqppUMAm5tZv1LAUV6jYYKcgGFE6YZ4RTAJ72jLygRwRY1T4Xiezv7AHDGYov1E48dxgjnvzAG8QDXx9",
  "key11": "54p11mYXzbAacsTgDMEtMJriYxWKxy1KMWosHc8ZVVSBH6xbwQTUhsXZMsRGJyLZCN2BMjD2eASSCurJCaoArzKB",
  "key12": "3SNPvomuUCi6EE1djUYHkjbcJnKsaKaEAyJEyeoQJEyJJtt3hzkUcNydWTfjRmoPdkAPMx8rDnfoA4re46hJgevi",
  "key13": "4EgxgwxGLEZaMVvkxWYnfWc3hATuzFTDxHA6JqfiBXo5sVHcWoy2XswLBgdLoDsR7WiRvpZJsdtitaWnM1cXNcEM",
  "key14": "EY2FSA6SJugAXtBiVNq9Xfm28zZNyZKDFHNrBVungFwDxcpnziWfPpufcCyZEoMrtcGHWmmCZXYfuWuycw3oonY",
  "key15": "JcfDq8rkEnKg1b5c7gKLNRF7s1ow61Mbqq3gqB7twtyuFSpVBU3DQPAVc19384XruTjtM8FY4w33FG1mD2RK6yn",
  "key16": "4R2YdYkEQ2aDNmf1NnGyvT8oKLgYF23DardFQ8m7AdSbwvF1fWomkd8MgHrBhcpzKwRx5eCFYiheJPYrnKKyCD2z",
  "key17": "3TA7oHYu6eue2QAm21Mwx2i1UXe567fnaNUR4smkyFXkqdtTF7ZhjnvgBys4DVNADVstBMRwJiYhArWs2Zum43Lt",
  "key18": "5khHSgQc2FCgT464MRXYyYh1rq6uorYGLNj3ZxFkz9c22TPf1EAVY8EtRjLgHYywJqx67V6VGSfEXdzY4Far2K2g",
  "key19": "33BTgi74Bo9FBaUzXCbb6CNPB4gdRG4nMPSsNDgMbiTCEYECs23nRjHiqaEt2JXCqY79dWbvcsewH7CY6ktGCjkk",
  "key20": "5gSQrMtBsyLdTU5RqsaRBLBM49RunN3cawF8zLVcoYWfaFHN4Mg8kY8wLeYfH3eGgsMmu3SZHBepYwwVwEnyqRR7",
  "key21": "5ajCEQU6PR9FGyhpLP24CmdLuUbkuivXXtZ8mHiSTVcneo4zwqmCJUt4xYM9x1AqjWKHT2Ds5rQMAPMtTzRFBkLB",
  "key22": "4PXqHdoWX4pzaodXqTGao2SEanxMU8g4WpUKU8oNYheZ3sQgAMJ4bReoiF7zQ1mmFa6QJ4foc8bCHMgFb1LzBckA",
  "key23": "2pf19X3BJ7mEC18h3vUqGgeaVLPqSxZKSvn8NPoka2NJcYAUkPgW7cvwQwt7BJFvUsrnSobM9vUdZYXW1GL4cue9",
  "key24": "41iutNUVH1mCTJTfvbFNDfrT2uHtQcPBwVqHGoQwtXYYpB6VmxQV95dyEFTVSN5jidFcJStybpvkGV5qBqkqXn4f",
  "key25": "7zPUuqJ9EC7v8MNPmuSNdn35sArYgDoQwSgKSRCGMhy28rkjJzyTj5ztsfW3YtF3E4wZvkYCrPLmXkyNFm74Lfv",
  "key26": "4ox6rCtM6riK8z5Vx63ud7tgFaTgbqKcsvJxTFqx1h9A6QxDCvxuZVEMiQVmuhezyRABfA9SWDsrzenjpog61Agt",
  "key27": "27R49x7CoHa2ER54tM9MK4Cu6Cmr6DmFukHtM7app4mjGAQmYLq13KqDisCTxXLGGaLXG9jxUCv5R7UcUgnEEtWe",
  "key28": "3jmG4q4ms4eyFhG6gccv1gdPJdmfU373WvFjDrPw2JAcqfP9WTKMMd2es8JzvxMujzPZhyfHzvm5wVMpV9SePfCd",
  "key29": "3QoVu5kWz59JVANRZjJW8GqvKWCquffTsjxkceaW9Sr6s3JfQJBtL2KynHxyvT3L3nLPmkL6S3VRxVGkA1esp8ht",
  "key30": "LL8n9yeHfZQ1uUMBjprmkGCJyDNjwHWh439HGmrFEmTrMEvm5qNA1pmg9s2cbXSZsdmc4t2v7Tida52DrrSz5BP",
  "key31": "34QXrqU4bAwpu6vXopYmkg25fAWUdWq6aBBSCNhgLZJm8oMH1YBZg5qqWNcNPmVAGipu1Wow72YaW1PwPriPXigp",
  "key32": "2UdLksA6nPKRdhty37eKgSx5eYFd6bkx83YhLSq7fQvKHUkcFtGSQhac5mx89p2B6D9C8xUjXtuFnoYmW77Dwrv5"
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
