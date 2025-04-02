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
    "2awEGfqWCjmeTeo4R2eeXifsnhYMYKPCjpajXgs6mMjvTSJXAYR2AMaUsYRv73cPzkDTkARUvScYH8Q9Lamqwv1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MArZRVdJX7EqgCjUzYJNTz1MeofEvQkRNfVssXBSgSgUCYF6Wzp3XXPgbCzuLSnps66EZCJY545Wx4YLYLgp4UX",
  "key1": "4J9rQCyH3ovDu54idnw11E5FQ3cewihRQuLZ9Ykz6PT3wSHd1kYtoai1T7CKnZR3eumFQQCA21LR4C4KJyqGmeP7",
  "key2": "23ESWFz5oUyR7An4MEVkqzCVCQddqRoQ7iP8D9Cu4MqSTgbrfRzhEKq68kcm4XMPrvfh763Qkcq2uX7AdRAryWTR",
  "key3": "3yDEmXGGLedKfVVaejNYVMDgaAr9mPue8xKagV7P6bXb2BDaYFnHQvuhDff7Ps24ryAdxdZ1vx9awyCS2Y5zhgm3",
  "key4": "5LbfAbWZ2Mw855zmja5eTDXxdWiBASnHZtWyK7m1TsR6MqXaJHYsREketL6VXtyiCKKtZQpt5JAJNaQhB5NEajRk",
  "key5": "wisRznk3HgPKV926rhHH3Puwa3KwXXoqdsaeubXno5qEEUTyMH2KmbcXA8duQ66jrjAngTgEqQ5WRbW4Gk5XHJn",
  "key6": "5xkzqGvTm9d9sWrv8mPUZdyZFhHfNTfc4bLqbLPEts9bvT2TP2ED8gNvJrg4fEaky8PPg7iLL9pACjTAhnq5crFw",
  "key7": "4dpSusgqnoaN5ZrmkyFrV6rjShtodAcKVEdSQ8uttcptcdk97h7Pb29J6sW2shG8WcwFmmcCArZ7rDpv74BB1BxZ",
  "key8": "44WwkpoA84xEJ8dG8m1G2r8gYUqMpu1JcvKkUJF52WEtfqmreYFC9JyqsRGAsARZoGtn5c7PoSNKsF5K3VvqX8Ha",
  "key9": "4GKkuwcWENUN9TiypMS5gz7fgDh7X5zeZMcEX3ARGLBpPMA9gibfP5x8efHZognLtB5mGFap8bXhiBb9zghrLDuC",
  "key10": "4iQSe56jXd6UcH9mQxxCu3cSYsAHJySTVh936b29TQvb3G3wFreWoWwgvYqiUVhnzvZTnWPqaMQqZVJ4j4WyeacT",
  "key11": "56oCXh515f9AdsCuYwJovteqidsct2iGWMxHo7oobpE645oXhk4Z1MSaMxoD29EXFMm66ffUecbCAjWjsL2msHLx",
  "key12": "27vdksr91AhRvbuMkjzoy1kBhaMSBDA4T9TBb2DtJNp4seXTwYtPDSVjpS8B8AqnpHCaG1zCxWMkMhMMKTGDgTEK",
  "key13": "5muVLuH51Gb4XQKM1L6HW5szuhU1ZZKMT1gcRA57FnN2iB8MNZdbDNvuqJdAbkxME9tsMm9QiRzKfvcYWYocFBEE",
  "key14": "2ViTNh72vfpfBoLZoqovH1EXE6KpDSpdR7jW5qDqnmkWZ2CfHFk23wGBBTVDJNz7QGt2HYnMCbW6SkXEcwx7znnq",
  "key15": "SWatBVEmgvv9xhL1RwY28EX76Byc8Y8CVAoMC1mE4ZPYAx1d9P7NeuBSxhVF7ExrStAjWgJUf4jgVCDmwvBWiF1",
  "key16": "gDNg9fx33u7KQrEmJwp3T48AWHZEhxLkJu4uddumwJ9CdxT2vsZWhEdyMceCSsWTQxg7iBxn3zhaaMTZR7b56Y4",
  "key17": "2YRV7R7eR1y2Z5KmXxMwUVchcmEHp1g7rrg2GNPqkoGJY4vqUB9SLqJTQ8M2W5dii1QihsihYheHQV79znyUEgGw",
  "key18": "5rcJWyxkEodxiGm4mME1e1JbVHrxumRKsU5TKnRQJQbCrpaR1NBcEVeinoa7S2RddDbVgGwybU2x2xkzjnj467JM",
  "key19": "5DN7xTeU2trBSHVKC4T5eQjQe5hmmhZn83TSU6yrEM4xRdJ4evuft8onupZmrQmRyScqgG9kWd2ntKVQB1hA8jKc",
  "key20": "5h9cpVnMTXVsY53vgBDgPAKRQCD6n4garQGWyJ3zmERSrNNPvFHuhdv3imK1aeSbALVHL5oaHY7fM3vj6ZNbyPVy",
  "key21": "2Na5UR8Ffdx9S6qcLi4pwJeUQNUhjQVB9pFDJtc7Zv6i9oM2Kzk1NCMPJ4FUrcWH14EPfNQ8iPH7wnUqwFBJYRF9",
  "key22": "2seEmfRvojcrduNA2KZN4yWgbtG6XaKXofFyKrMczrdSSwRS7ouCwodN5xSnXzbCbWHEqKPszWoEDSgh5dYVybF8",
  "key23": "3r4WjqRxQVvHwuNmL4NY4x9ZSVdyNr6vcbJ84pLUESN1QLM42NFm1rdc6wFQg2A9EDrHtiAZVtPSn4xuXtTb28gB",
  "key24": "3GMSJJMq83MVUwD5MDPwjHcYC4J2rwNVb8T2QWKV8mGcQYGJX5k4gNLckRJx7ALmzzHS7QTDxjgY7CBijY25oX3f",
  "key25": "5TqHxXpNUonZ4Kx62yomTHNFRE5HkhCn3vFdBstvsRvHFkd8EMPi9s631QTzMaLHTJVzhMEa4E8fHXqfarZyweMG",
  "key26": "4yuGmPEatv2munWVNhMwsezDG23wFkSQo8M7MmAU5bQHBYQugTBPhHki7tcQnenjYQBwu9RugUY9XTz8xxLBjw23",
  "key27": "4KVWJDfgVBvfydWurovDFbAmsNjagypoZRs4Qu2YBv5XAMrerM1dGm6sE9WhqPSMKiBsx2qQeND73sAeJRCaqKWB",
  "key28": "59dciXH8tTCsqHMhsUxdCiEgQgGgCRMBh7dw6jgepxs72Ep9tFWYT4ZWrBs4q1jUX9Ys7aPajh2aGZUecPde1yZ1",
  "key29": "a6h22fxykfXoS8kWC9W1zG4Fbp5Vo4ymSyYSXLbw5ZPaV8keyefAYFGAEZPBKRb8iA9QQoGqQDsjbQAmG9FYy7u",
  "key30": "2t9JDTt7pG4h1VEhP6UEkg19T5vTdBuk3gktxtNfeBEBZJGEkpsDCR4uyiELGikiAhigRLAGiXe9XBgom6iibxmm",
  "key31": "4STfoUqfTSPSTLq5hbUo7aSzHeDqy4jC9cXSa7D735FaYbnHRtwSQeQNtfuJzLDRyKmBdhSdAPKwYe38fXgW5Cqh",
  "key32": "abiHKh2oWM1FMfxXNqv8hgjKMNLPHwrQ3gf1Ai4pQWcUfPVT5Sz9PdGL6nCwD9P6nPsDDbU7Fm5oZAfVsrKgAXA",
  "key33": "g3rFFHQZUCRTjkEBTQ6egtyaqsd1UFMVJa1sqPnq1HCqgAUi5qvUZfeS2wq6agXZYYfRnesFDLboaezzyEsmMJY",
  "key34": "3fARneYjwTw5iGsxysAcGr9iparxQ1WWXs73XV8CQvUBM4b1QKhPMZ7XDMqD41Cs5jMuAdPGsCBdMezfB2mE3DUJ"
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
