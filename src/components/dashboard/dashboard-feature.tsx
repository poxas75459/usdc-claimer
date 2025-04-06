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
    "5dNRQLKE8ntXJLZ5Ug9vYJTCXXq6Md1od1CEt37XC5U55rR3pU1rHVfrpeH7cjPY6nWrC5ecDTUXaxwq4wScQwYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ShH48ptvT2qCUzk1WWx6ejoxqZFD1UK6NCFujC2m2ACdc9edwZaAF8fcKXdM7eLYmcbjh9fU6Vm8hjCe8ejY5H3",
  "key1": "4GGumdfGSoV8Yy3CCuXod3SnrAU3aqBf9iHHPA5yNMmPszMTSqq63kMK5WvJsLHokbzsNnHYGxNZptSKP8fDVCbn",
  "key2": "5qpmsaTw8kb4yiv9ZckzqjTQ8k3UerntdqiRbYFLSFaZgyDDEysotknCJsLYmbgWsV9bJFJFWeyd5rwzNGNrnmQd",
  "key3": "3dP1PKR3pkbGVbwiSfVxs23ajV1VQiU1raZawFmS1cHtbeLovZrCqfW2KprdsJ3L76CrC6qjxtrpTR3eWt6kDu78",
  "key4": "4fwgFSyhXS1wkD7Ax2rkMgxqAKgtEfoFq67JMNFmcauNLdjEFTCWJgosisffJbnjfLi84Az8B7gAN265wK9mEAa1",
  "key5": "4eEeNPjLM91iLY7fdd4xDo8gDd13YU6kJEcZqsSQmR1m4rFYQqCMgwGRbReD5qVVZ4YannafZRXXymzTPwQQ8rkV",
  "key6": "9yDxCGtBbXJWHMQMTVqQE2eXJpmtDFuwn1MQWPqXebosRkhTwxw2RXqPjqsVqdqUJ6AHBUMWjeFy768USfwrLVk",
  "key7": "41oLi5DUM1xbtPuap87TtJ1UoT8WUxyBMfGDc1iEvFJs4WZPiUMPV3uN91ZQwvi7rAhB7YsDUSNcAF4qSLKNosEH",
  "key8": "5n7Ura6YWbPWSxtYoTKNm8g9ydC72QDKYmYJ6v692n7wAk6KHQQFj57xMDT7aFFimce7YaFq4AXwk8znu1hBKUrW",
  "key9": "36Lz7uc3rwsHYLuEDUDtheUKu3zXo7qQFJRMfdbMABrFYPUaH23XRkaQVUvm4u5KwDsE8Rab4gLdoo8FcVitCvp8",
  "key10": "32qW8HAuvXWmKuCPaSfiZqimTNghQ7QLh5THoj1m3pDyXfRfSVa5vy9qneK8hHj79sfyQwvB8hod4ybRxCC67FCE",
  "key11": "3YwkbH2CHEJ4fvKTrBnmd9MReacbLgjyvsFu3t6TV2gEWqUSV6vUA46Vmn7XWTqBqxzESx5qaxMqiK2mGiEgvdbL",
  "key12": "3X2iwrG53GrfphhkXpVKHmEfzKn26pk8u3RD6hZf9ZaqGuKm1UFEwCF1s2xcPiNRXuavFUg2dYe1SKEYGCHLUsuo",
  "key13": "5LQmVHEmrqYFa9f4iVYgfhdqgtykzTiNt72N9bfGgLMhZMHZdKJoYvRyFCbFCpRdtNwWGwwLcUWgAgykMwM5SdTR",
  "key14": "5ifDH2pTPy8RoGXWLgXvWM5meTfUXqaPzDrGxDgpAHjgPhoJ4JvfEPnsHZqVnuWTgiggN4VLG1pfYqLbsszWrUyW",
  "key15": "31NTG7oLDz5y1xsFxJDY8dLH5R56VnR6vjy5UV3J77TVEa9Rm4KDbQ5x4cNsXj2GsfUq7R2VVgcH1h7nvDK7XBRx",
  "key16": "GBS1sHAK2g239dc8ZokA6DtCM8bB2BhSgT9ay9cv6bG3ZoRUBfY9yE2Q9fkNeX6XkGyGUiBajU8jXaBqE5H8BXK",
  "key17": "tKWdJ8dht7tuYXvLb8s819zPGLGcoSvwbchrRYEsAg3kpjKwXwwM5LCBTKjwfQoykgwvYutfbbnXuffKjXgGYpa",
  "key18": "44VL6wgWKHWNkaELTmPQNwxeQGjTFEnUCvvtfHbsXKBuJw6NtPF5wRdcERVzVoPpuesTEZi2nRRZmAj55dBUHXok",
  "key19": "3BxSc3TuMMCVjMiGGUp2Y1LXDHv6o3kcFxtMjAqKy7C2Y9MPCAmTvTWznKbVS8qwvTm4dmS3SyTyNTQVzDZUfjUB",
  "key20": "55vadbnSaC9E3oDe6yoELriQneGaMrW1QULaerBNNPcqoXsMnjBVjytDeh7HDnKtzYi83753rY6FCAHebhbMSUrz",
  "key21": "2b1BCcZYFpQLJWUEzhh7NEubFLQehtLHrfFohCxGb1YLKFyFBkZJ37dT3p8EHvEuEsaPdd8vghm1AgZ26MZUDzUz",
  "key22": "4D2cLmkAyGDg3odz4eeNVHZJ6Zyce7q8YbrMg3R2fK4JG3ejPNTFxAUKzF1HDuJuUWUeWhvgzcshinj7JU9zcaN8",
  "key23": "r11FxHAq3unopBWUoPThKFubAZRPhhJ4teZuHWZfenh3cuteo1cYSpVUyYuG75WExQdSgef8A9pK7FjuC2sE3R1",
  "key24": "55ZFrC8GsP9fHwyvvz9QUd66vyfzstFR9u4nQAx3CfWwpZq7a9tqF4UQ6EgPzZMRCDbKUuUu1DphPqnDpzfzk52U",
  "key25": "NiYLAmLk1G8PQFKru7Wh7DbQPGwQKW5u8WuMFS8Q2zfCXxtbMBLoKsMjFwQ8RQrGEiK95aR5J8drdNn2MGigA3E",
  "key26": "3o8gh9wWZ8TkMWbgZ6faoz5HRnyvbvg98abs6GKjyDnk6VT2QN2kdScjMBwaUtb325Ph8Bh4ijme4Wh5cHVwPyon",
  "key27": "2mJWF18oHCXbJhVNczzFzC4GZkwHs4QEUXy4pyuTVPmfTyjAdYcukuBfnB3DRSyWSd831s4NgPqmhcaY1GAQEU7o",
  "key28": "49hXtu8eRHtXgZpmmnyFKWYNVeJ3YyzPxjDzeSxn72iSdFaFHATuXEQ3PJ8SZpbA6DrNdg3XJWHZq7fjCyjCodr5",
  "key29": "5Hh7oRoPqCgZCkRWyqHCRai2XmKdczrYZBE9dNWix2D5DARQti6sc1oFbkpZoheJpZCs8WBdpma37PWXvC3BqqTu",
  "key30": "2gvr3WMYh1ghqmYu5E9tfxRN1v7f1wvsAD37ihaRSvL2vs2nWa5wNN7GYTm6Y3eLVmr54koqyDUCaAXPT9o7wGrK",
  "key31": "5B6cGdJuWCzCCfeN8SxG8xfcmchCVniMJhuoXinAJCSKxGwk25FKkgAJNk7H46PnvvGhRTrshYBaLZYw3ycPVDa6",
  "key32": "4FSySnbLxxZRX5j1xfsvxCKs6dcZSnADtH83xVc5H12wq4LcUNpAmpm6YgrBWDzKGqQuK3gKmfzMsCQpp2hZ4def",
  "key33": "65rHEqGp2RezgnQvMEQnL7aEhpKUSzr7NgsiayJseDLj93UCiyW78t4YcnLgSmfMRn8ZEqvcv58heZwo7AGG2PBr",
  "key34": "3knxv938vJZXfxje1tqrQfRMWebbQvJ8xahF5JGThYQRMeatPwyiVUJEfMoTQ7r8CXhnM1mAxbox6hPxtyt2YQqU",
  "key35": "36xMktCJaypuB1fDocVo8q2Unq5RPdVxqUHzMCzXpknZvByUd9o2ynbnykwyoZPHdFJuKqCP2uUXmbtrTP3iaZ7P",
  "key36": "Nu4Phgwg87aTCqmBQC35cmeKe5ENvN55ADskRfqK91yLAHLvbScbVKhq4NUoqFjd6xU4Tt7iJb5S6Dd3Q8Zz8ww",
  "key37": "612jggqodA1RUzu9yULPQgjGhiZeNp3FdR27zCCZXKWb8xUiBmzEjybJYQGhHpWkWsHctSuwJdMPQtDVDranavyo",
  "key38": "pdeXNrqhQTsnsLZGcvLCXrUxphTfHUShJRpeC5XZkF3WGZJkDWpAUnByncqVWoTACdEHiBEKooNaY1oeehVkXh8",
  "key39": "32erVD7bL16kizVGgCs6MazMBxg5XWs4mXSPKiAv8nbKsMwR45yiam27XZydA9rNGxw4qPxQXXBtGsEybZ8BB4MX",
  "key40": "5xtwwwHUc6CZXYmQzMRMnDPjbUTJ3Eegz237ZnQuPuQfTpGKvw1Exb4RmmxnpNhdsfhjJTC3zGGpZ6KAZDcSwJaD",
  "key41": "cPuwAehVKRHqMYYrAuWDTnpmLRP1xRpyrHo1jUwaNNjovJEsdtm6eJpqUVFLorx9xsVPZrvAAK1C5nC2p4RYiDo"
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
