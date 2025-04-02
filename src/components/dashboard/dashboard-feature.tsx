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
    "2iCDAtDYZMWHNhKEdtCGCDJYe2oK9RLCFMXUGxpXbffGeMK4T17b8LNFB1xQRbV4xACjtRfrfKU44zB2r4VeDKYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F6PsNxdsbecQGnjVSuzxddZnRpo71xu4FVsPSA57TfRaobL3239iuzLqQSZBYRCN2PgBHv7LrKtrVUBWAj2EC8c",
  "key1": "oZALJFcQ2heztaqf5aHskeWgHHnQojvhnET9xnfuHHQkRNyxDsBnZ1egsNUZ8wcQ9SMkW6CGSXsSL98wbpDQS2t",
  "key2": "4MXwvyHzj3yBxTahnZCmNgjf7W3dog5JpCGFNV3MDHG5Fc3koBM3zCyRh21GqCxHjS7uiB9W5sdH2xiWPshHbtiT",
  "key3": "FBmcCw8jFAwxLnLoqHTPEVjLw9ynkkPBdBcPCD5Zue6d4oYRS63R4VWVmfvDWniTHJfTTPYm6bP4g1CruX9Abfm",
  "key4": "3Nq6F7MEJ6hqdfzUsdYrsvYxXtgcb6hKcWGvTRzeqvuWFcx5mGBRwr4Fa95moBsfsCpHShrY8552NYTrauzkbs6A",
  "key5": "PwHftTPAvEFVK4DCdiLvFMDot2P7KPSUP8AtSp7KmCDnwsc8rzC4QzfQcFfttxFJYW1zLpL5Men9SEFFhVCzRKe",
  "key6": "59Py7ypUZUU1KZXbPFouXHwcoQVQwRFozFPrCcx2Jem5mJenhu8XUpw2YGDTqwBANP4hp4eu5M5Ncxb5UUNEv2wg",
  "key7": "5Wtiskcjs9vad3NadZ71ZpigVjBo9H5VFqqwaUJ2aLKEuBogVH68H1QScvjT2ymnCjDVbNr13Az74ddtNcwXJimt",
  "key8": "U94qf5X5TL9QJp7GgHVEbc5HZjaAoSBa7Hc7hAv1wazCNxYz1besw4YvnVo7MjLb3Xygdtt1R3Zms3aW2Amhd4X",
  "key9": "38orp27HZ5dCZuvCCGWCaaGz53ykZZ9eJxqSP8NDCWq7Xywj4fnec2Cxzv2qmp4qNm7XAWUWKTAQy6Be5ZCjYHzw",
  "key10": "4Gsxvo3qPtVHf5P6i9Lmxxn8zsDnvVM9eZYrkZxWoCJBQVZd4SH9D25Q5oGPXzw7MAdLXVwrg3QXxbpV12gi9GVH",
  "key11": "2HjePj927bFUnHtyEqQ1jSb9yxVXFrYPBvEbAtciy1DeFGZ4ZWeiWTb5FGEwTJvdCEvzfkxm41WnfqnzsWSuNY1R",
  "key12": "EktGPkZeATyigST74p64kK2aDscxKQUnJXGBoyrsbht6BSmNHdrwysNaLc8Qzs5pyqzFCmsKRVZxZHrLAP9yeun",
  "key13": "4crNZ8uAf8d8xUsN1i2xHZKz8Q3K4SUBjHpZQ8DoZFRKh35Dx52GVt33FXmVKXY1oFnovDG3AQs9vNQGSbuP5bTs",
  "key14": "2c9LwWwMiiAiYFZGJBB8FoxNai38Knmc6PYaVzsQcktcjzAhtiA1g4ttnAQasYBxQDb6kPkzQkGso9hauNRdE5Mt",
  "key15": "4LEJBCzrbMNnGxfnj4MRWgvZmshRi8hcYfQvxNbKACUwQWLb9R12SVxwKZ2MDF3rUzWHxiaYcavRuvX3TF2153a3",
  "key16": "4Zokg8TLGmYmvH2yBK3Zrc8w36JTfxMjY39mZsEphXYi7aYk5ck2dbZG38ZRjzDMK63ZREgc8oVPqy9GcdQYqr4V",
  "key17": "4X5mqwgYC1EGJ3bFyxsCRSHfpoFh3SG32tHNPiiw3RXKKJkettg7JLHLutmeQ7bKYwm5XET9BBsFezhF6iVoY3F6",
  "key18": "4CtNVMZH9NdCXMvaoQErSzg5KB4nHG42UhCp68siq5k3p2DGz6KyCo2jsbGdDg4ymTKLN7PTBY5VLgPtf94S3Ccf",
  "key19": "67ordWHq7xoXeRvJ1yyj9MQaZFDZRJLc7UddpY9T6A8GcajH5GJKdM9AugvD5WYvtUa7EanwLAq5cRq5Ytgqhmbe",
  "key20": "AHAt2ZR4XxBJjxrwa5vzogXkc9mbdupivHYUZq9pUvCunKL3j1cSpGgPkFS9PBYwhZffDh2DiyjrfbQyaUhvQLf",
  "key21": "qR68wGsHZmtKGzu6rtzHk5qXTLZMjV9UcwAR48zkY5fuBmwhdRyE51xGT7cNWR7fDP7igzK6CDim5ZeUeDAE1Mu",
  "key22": "4NdtziFnJ8WrTGhuoZv519C8LXCxtPNKpoY9VY1awh5SMbkYXEgYAoxRvKvXNArz2DTEcuU7gULFZNR18YHVuZtu",
  "key23": "5MjNWAerCABdKFLRTF79wrQsaD6qffufuvpRusoe1JCWHq4j7rM1yWwaaL9Fm8Y7Yvue1NG8ZkVWdtr2QX1hvNDy",
  "key24": "3KMMAAVKHVPnXNgotQpFpNmBpsMRtEH78TBB5b9BmNp2EQQqMT1zgYEvYcW1ywYfteSKan9vHoQgGzTJXQ5ZKRNB",
  "key25": "63Ma4iBg8TVei7aws8WEKDz1ibxy2Jzt798nSqobYNE5BaZw7WUtNPZrbvgRNvpn8jrVTqCECb1hFTMnHkP44Kqe",
  "key26": "5woqedAST9TSMmfi4hZFqAcbyBxQke7o7kBi9GU3nErto1ykvcdyBnSE2FDqULVSW1TXsSr8zpZmP8NiJx83CRkx",
  "key27": "3nT3nAAwM666HbTfDvBQa8UCjviFZKwoMR3GdVNFH24k69A9cvxPV7FjL9CaWVxmcQdfuQnBEXcrPbcihE1c18dM",
  "key28": "2piZVFi5yjPPgcpevVXLqUKXKhvz4maTJUfcFWHRzBKWny21BaDW8zi8mcB6VUkT1Pazo8uga432A6QHFSz73tS1",
  "key29": "4shK2pevBDuXfCMZdf8kcoWbcyEChW4hhnNEV8oDYYE374CejcjeVYKonHy3BqRPRABe3zM7Xxc7zrNUpEWhCuUz",
  "key30": "2AN6ZaSYaABn61niDYXyLVqX1KFM8jePHRZKAhPRAhmf5KnewDMHvW4Fd6aBNvR4eqGz4tDneHvh2Z4uXZgGxZQT",
  "key31": "44pHBiRCzQBJkTpmQwgD7kbtkjfhEGHtfyQ5TytRnRjgxD8NNn5Q3CJcVGkWiqmLyfpSrpqrWzvivDdwxuiaMXkE",
  "key32": "4e2E8rzb4CRmyAHXQXN1Y9xj8pv1PQs8vE3StVbwF71aEf1CNyozNZa21zG2YAXJopVmkBPtecwgXzt6vaTKpfS8",
  "key33": "2NsFJ32pzXquXuvbttQaG9kcB6F7LScVtSL8vGpvZy2QAqkMrgWv1E2HNCLijc78PAfeWd9mGYKo3pvfRX98j3XH",
  "key34": "2LHaQ2oefeRvcCUCGZUP8ZsMqKv5WLvsdU85mBWb2ZRYvWzCzLgNafp15c6p6NRdXhoiQsVbVno8wKZr43tozttP",
  "key35": "4CEbH1r7AkPyHm7gW9e2oPM6RNacaQDWmjETFgskLVaumb5xvnYPCbNhcpn9ZgvxmozL9F961j9Gpfr1U1bEi2wL",
  "key36": "4Eo21A2JgMAFwTzLojJJsb3L3rR94wRm58zH8sh6dB86LX56E6P3E3Pq1cMug64HpxoHtAeZEthPpW4PW3VVQB4i",
  "key37": "piEdsPG6MaY8GxvG9bTP1VMEGwrtdzRiV2UFYMABfrW6rj1TeCZjy6m2HCChmWBzyz8jbwBmhJY6JfrH6KY3DYu",
  "key38": "3UuSUtA8iht2rvzuTd9CqpwXZo56CC3JnQhJ9Fw8j4zwGkjVdYJxJacLFtvyJC9MuXvaZhppeM7WyB2SWhPx2mKE",
  "key39": "2NpDjQxjVYvSJKEevzdjBmBxuWxq4KPbJsG2KQkN19qxCMkmjggZghQyj5kLL9gkfTf4aRCiGi2EDYMp2vrSGQDE",
  "key40": "5jdnkpUh4PCy8Cq2vjDhrF9tKfKimJfpZjjKdAKV5k3tkbMpXpKWGzfhKjKBbXyQDSyJVE85CsNyPpLfZgP6rbTX",
  "key41": "3XKcmwaE2etef9iP7UMTfQZQsozpmXmofrhALeZ2rpHs8fEohu8sM1Z6Ei3fiPWAiN3ZJMBgyvh9Q1hgjp3NTq8F"
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
