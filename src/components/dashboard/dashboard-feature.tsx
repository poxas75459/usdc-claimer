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
    "5WVyfS2yNQpEBQWn8dsiCma9rZSUThSNvgojsjhrauUs3SUzJZ7QKmWCnzS8CBc5u9ugNhRLp5ALXncXY46U1hMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35TFHv7NXraAYEX2qPsNCvT1qYUhaQ4d1MjJxoocfAVj3XjX4jtHxLBECBdWm8jgczdi2L31oXopziHceL8hDYp3",
  "key1": "3JoRnPvn6Zgbvxy6vX6ByRHoLTHtL253ASvxyYk33gCsPZS6izbjLF4m4nKz8tyuRthbnkMFJtubHGZqa8Qifw34",
  "key2": "3w6H7mGvcdgThuYuGBZUWiZoZ8qePYTqGkR2NyMJBK2fXuyrhg1xTRqjLPbPRYcyazhtwzP35zxc5rVqWtkc1PLP",
  "key3": "5khNN5Lrzr19Kvvr27VGriTVcKgXzrys1i7YKNZLfbicrB4ePFUAw6ryVut1EMYAGUiMLADdpxQEnB3EKCitnRDa",
  "key4": "36WuuSP6eHnp3WUrTswtWQvzWZrSvLdWqdMU3fnPMAUxMhtNiex1qvvLv9TWz2cjeuZLn8sMuFWZbaNhb2KqYeNR",
  "key5": "3v6cm4tkRwiAiB4TJHAWzJE3Jv1Rj3wgB9M6EifCJTS35FhCXKr2Rvvg5BjzawDkKChrd8VDDJFwQxVC5NQABddo",
  "key6": "2DgZnwLtd4XmpyU5ioE7LVSEnvG6TSVbcwzDz63gsD7ESQpnQ7xWWcwJP12EGY1UJ3UAnmy6zqtUtfkVQvvmUfeN",
  "key7": "2mVwYej3bEk6xD3uSUqZvyrBpQLDP4R5krLseefbi7k5xYdiC4UGgcxqAJnqfcQB3uDEu7i49HSJ52HucrLPWijb",
  "key8": "c7SLooW1d6CASaPiVfXHeVYroGnDMGWq64kPdbLVJCVmjZ6wHTq6p3sCLjLnh5k5HgpY4VEvpgc2pGsaCH7VoDn",
  "key9": "2YrpqeVswtRvT6fhEhqm8ZkhqcZKDskg9nP9a6r38eL25sPHRL9ad1hWFp4HkR1FA3TAYVnAUkwsMY4rJYY4q8zV",
  "key10": "211YDoRDE2V7WheMgWbaaL7ojRjpV3hZ8uLvCHZYs2zRx8BM4E17pnSRnDtZZq213y6raf9vUgWULwruqSTuhoAk",
  "key11": "4dJm4MCae4zDXTTiMQLcjEyMKcJm7XdUZ7habrzfvvmPeE59sfWiyuveRU8YYQjwZup9Ffg5btmcnnZ1F8YfSsEo",
  "key12": "uYit5QVSoaQ3ykHNkG2fESbMrM93mZtiLxAoNFKCYHFiW9FNf4xCU9Cws7MKa8KBW5oK3BaUprE7jjx17wcLdi3",
  "key13": "3mRe7zmfvomXNoG8WjgwSTNiSj793M9rWk1Y7VgyNMrx4FkZRNupJCGvujr6XnRuJ8pCYwyayUizYXYiHPCajdr5",
  "key14": "3PRj5dTdV6LeAhBYBAg1RdtxSJtiLrUPTwJJfK31y9xuz4NhhSsCmhAoPXb5s2ycVMtHD4pZGpVfGMpTakAZKK4C",
  "key15": "LqZG2v9Ry2WqUKpasNhs42YQojAzC9mjw99eM2TRriYadpJiiLhBnavKf8zKaW9ca9WdMcN4NoCr8vY15bTioSB",
  "key16": "QWoHLPLj9ao7h9u7XqgGSv7FRVvxpmod35dx7YXBX5ZhjEkps9b7vfFg2r1MSqL65ZWzt1orimVrh1dqoopKyzE",
  "key17": "49ZYKDmLH1TCruKZ2Zj5xPTghsBc17kWHDKcBtAMyhgurYMKoipVaff4CSf4exGeLd2TxqnsX4FpnAnv354FXKPp",
  "key18": "5RdHLu8m9iPzkBkPFScH2WXQLj96ova4higRMbfs7WYK5rBR5dyu8ahHkQyXxprq1iXF6SHEEXHSM1cFhbYasAc",
  "key19": "5dpcFkTQvPSAJ24H2MkLUmDZXZLtBdgAvbA4f66Ay62SXt79NXCqderYgtTD1wzurK5dgbHsjrZKnnPqUR2upB1S",
  "key20": "3Pwbev5vggLMm2JPYE82W5Cv8MtWi8CJ3r8pox1Po74S29EmrU2Kph3DX1PXfsGoLnqnpA6HAMt7bk1ZuMKA9PKw",
  "key21": "4VnNwxXooz7XFWDeVADrRnfXFDScn2kaPsupYVXz2bkSfuUpCWxsCoDC8Ux3kNj2Z4wHeJzD8G5DXtctbb8SrRFr",
  "key22": "5m65Ue8pbaut1Wfgk1J44kRDEVikRnkKCHXo88CAaFjo58QeYMpKTbnnS7PcwFuebjPTTkmdRZuXQ79u5vky9ATQ",
  "key23": "4crJbsdWYnNFa6sk8zjHa1VRHTeRL9JjiW9yfJKuuR3J3uswv9DLLvF4QqsaqrKjhaDkob6wo47Bqm9G4kVhyqtd",
  "key24": "2C2kfqZtPektkDwCYxineBHq3RrLA3zjsdANmktyuTfb1fFPt7rtYv21K85ko1Hr7Y15jZnuJK6R978tKzwrniDT",
  "key25": "4f5TNRbhQFU9JUEj4o5Mzsb67PQhoZLmN9RS39yqs3KDuRzfFf652GgLrqN1vpeNtiiX9Cp4CuHTbhy46WQJCMng",
  "key26": "5rUCFbjxxC1gHnLqLinf8CRCEJ6qx7gFFi2Z91neS3gHFo1ddKEn9Q3RfexhjPExGUFnDCDQ7BXxF2n4fcFh8iCP",
  "key27": "H5HRaRxpWJiuJS1U88ooMhoLrBoNgHrorCTCWESetJFf9AHufJPUqdzyVEc9VTiyppmhQwYnnw86XqJV63RaWao",
  "key28": "2vACVwjR1eYv8iboqi2R98gKH1uEyMVhUysEuS5uuwzGXZr2Kp7n5Q6pqYveWAfgKLAQDc1nyhPUdA4pJfwLAYNb",
  "key29": "s8ZURwGxce3xkVMdudF6rMGBprzNJUKZ1cw1MaQtS6CXSEYLVT6ivEUJnXKqfZvr8Hf9cYVmGxuDxFX94h6PGs1",
  "key30": "24cxgnRoomdSwbk1gjqoQ6XubKCiDmbmaTbKW7dbkJm6KzFsdsRpkDyQH66m7B1oohzSzD6Y2p86yWucFWBaJTum",
  "key31": "4vaBGNvybp7NgVdTcu46HCytbZp17fuXwVkhDaNhGt7EMYRvBfbtWAvTKnUkpDh6V8m3AYEYkoR6Y3pjxTkoRdr7",
  "key32": "48mHkhxEtdqAkgEVHNwWyjLp7L34pbEYYj4oP4h7XygiXsy3yuzFuYwgvzV4MVZBZ5zmYye9RDisMRufHhF1ZwXm",
  "key33": "MSjddw169qauLsEuyHvxr6YXEkz43ACMW2nquT4unb9HUuY9BZcBNBKKfQx9BeVaV9UeJFDpFnYaoTXCh3gsuGq",
  "key34": "23gydJsY1NFdGm1fXh3efQfNdK7XMNs9XSDLbSdpcEwCT5u7rJtwrf2SAzEVAngkpupa9vb7sASKBn4ir3V7PX7C",
  "key35": "2gVoNh75RovvyeC1Y6Tk4STuK88oBqZPsHLkXFnT7HmLDiGhCEasGzb8XaN7BvR5xuC2XEYeGRuDSN7poYpV1iZP",
  "key36": "2oJdBjZuTkezNRJRL1KvmF8sEJ89V5mS9qU6yy3jsLm9JqvT1AxPjNEmWi4TMKsFK77nEhBcR1c38Em1Ld2NFYHL",
  "key37": "3aJkbQcptsvvgyggFStEocF9FoDcz1yAsvCKG226ND4sUefLoVjVjaSF5sbKmsBz6zFzUkNu3D5JPMDNXVkAy5Cm",
  "key38": "4L7ha98JqJVotGJYkGXzT5398QvHHzrCn4CijvdUMNyVtRQy1VHy1uW2KimxP92RVyBx1v6MpKwHRjcUcQjNjHZ8",
  "key39": "zPKsii4GNFzje2q6q1XXyohnKWJJH4b4E6NCwaTVpdKFTdEDXqbsw6ddKKL9tsrjjtGFsG5rAR5imtzvQu7TMwE",
  "key40": "2LbmUDst7BjUYJ2yB2AcnDTXkGRaAiZQkNPTGw2KYcAYWQDtV6AQWks9uuLWkU69WZ51GmENAvcyBvnuK7KJKnxz",
  "key41": "3ajubKrBoWY8SC5LNFMKt16RyfvJ2dcG4w3d9LhLAZbUMirfqZUSA6gfnXTHJRWe19rE4UyXcjfvKKoopTvbabsg",
  "key42": "665jLxeM7FBwXehmXU1KhU2DHCbApoxTB8Nr6tswNXiuXGhjHsC6KQHvjZxAu4BZx4pXzcVy35hAtMgKjn3D3pmG"
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
