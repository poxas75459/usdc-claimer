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
    "4e5A4chuC5kgDJStNcptX1R8smDzt6uK8dt9Y89w14Rwi1D1BwoQc9EPmu6kJD1KqXjpuNa6uznspgHjiDkyphtU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GMGh6kTYPJw8ib5uniJj9zEmSx2BYAxsHQPmou4krWBE3FRr3RUvX9QfJnoa36cfWmwG7aSaZCWWeUoX95774mm",
  "key1": "4My3mrcH6TEaLuxrqmkH9ZxRXiaKBJ9F2RVsAApyvDe6mXgcXrxM6gQfowNLY6911yqGDreMRweR3TkD9q4cHKYv",
  "key2": "2S1JyJ9o8tBraFoVLx4NDmB1xv7N8We7oLU6DdanS1pw5wJfqyY5XuovABADdbEhX2RY3NkwrLKAu32T2Q6quzNY",
  "key3": "oMeTHKfRxdmwFisPLfadmwo1u8V1Ez2RRjtSdGEmMqMmrBbX6w4VUGF4b7yCEMtECtZZxcCvgsdX8XqLUWjSPEc",
  "key4": "327jShRVKzgWNPYqpLYsdshAP8LpBnhyXjWFsrVj9bow9AmfZYgcrg8w3xr4SpTA754HZjGbjzi4cNZHE4eJrUF8",
  "key5": "WJ3NAPqxZtHUPMRwp3GKUxdWFM7XrttZBMhhXE2HKRBtc2bzpSMb1K6MPh6NTUgqLaW36VaQ5twx4iJUbmyUa1k",
  "key6": "4GYGMd6P51bWZvZT1V7USuBLX3p5akuAqrS9itsWjL2Bg1yPQtcHUuJ32Q21XD3uuGn5xtvfhH1DZGfMYjhzM6JZ",
  "key7": "37qoX4R1hz8byigdKdj3xUzqPruNEEp1UubwSLLsnDP2yv5Dhrjh4qs6FpGxKzgoG9WwAVqBnktSjhTG9AKxRCYp",
  "key8": "vk2nk9BQy7ZHueLsqXAfeRCmNkz5txYtv6XipNRRcE8ziCScaQZYL1NNKx9vivHfGujjYiGXSUzEuhjtBnRa3AC",
  "key9": "4E45Ze5q22RuQoVwftNt1tbUHiwjHY8i1oxFNbDHLUQqRiGxKZWKGEPJ7e3Hv95V8zjmYQVNXxUJRqn9fhgtgTrC",
  "key10": "3GjY6qfTm7sz4G2LubwMnsTawrjerbuDqppMoD6cBJfdSY2rPwwv4moUXqY1qJX1qqjt3595Xir1ACtAmPzKsWEz",
  "key11": "4sp4iX5D17ZS8torgqM3YuQCYzPdvZN9pojrGj6qQB3Q6FP8dTk7h75F2zgD8GdLShC41mRN6Ls9svPqPNsYwzSC",
  "key12": "2cWLvQm2okEEK91Lx1TGqkhPnbNwHtXra4QneiwWhnBGS8uNNowZbzk6NJug2d71SAJv1itqNLo1F9ouNthqAN3z",
  "key13": "5M9FK75ZTnSJn3FuR9PPjzenKbKqj3PHmTUqfVNm2hhe4X9tgkRettwuChww2CQTsRHqz1UeVvHGZit1W82eLiqL",
  "key14": "8YvSYQw6Lq5VGiqGUGS4K78mQN5sEsWdd5SmBGYGo9VjQwo1qwdjbWV1sU9B4TjUfjNAoq2a3m1tFUTkacNLPTa",
  "key15": "29w6KjcmUKR9JYBZ2EfQZnq4xpu8meQpQvqyV9Wgqn2jGQqMXSEQRMCFCTm8oDxVoZpnDgFqm8Zp4hsjjkhB3V6H",
  "key16": "3ZDGa8zCoxT733nR1sxV6jFsiEQypak81TLJF3dqfMyza4qjukZWpp77Kcx1kmdLfp74cmmjEPcfaZuKYr1ecZpL",
  "key17": "4N3E3uiawNhYMpyTkMxFjXCzsh5n1o78DMuKnydQprEcmSQXDEQ4BQD7io7of2xLkTUUy32n1L9bPfYzHSzFNSHn",
  "key18": "45auBwAWhm9cMnqcKz6FAK8QW5mqhX6vGU9HyhXgGNcR4HuHDz45znLMXd3mpkV37hiUrvUeTUqufoEUTuRH2Vud",
  "key19": "2fL4C2ehfGMuF4yqsbY1jii2ss7M4Lq9zCFqZh5TuPu9c5T5XoyRbfiHS8a1BsnxMahAM4bWukrKmehG2KHME5fu",
  "key20": "3xD1njdDjMkKrth2ovcfUk7uWT3PKci2cHKCyNzyFprwvL7VEX3jwVKGNgTMGwEJiwXXH15piGXApcRRyWJ7SQWE",
  "key21": "e831KaqnaKFhPFcJHNs7qDa9HJDs29ytRzjKJMUAC2GaQ2qWkJcGyr9n8XYXj9PoV4ER5tRK1oGWQqj2XN6QS1R",
  "key22": "2ubSNVaFR8ZSrejCYZwQreiWAsKkcDy36tjDfWDhRXkaWNKzjDvum54gv9MsbT35ZjakB1GdCtUFaU4yooVZutNv",
  "key23": "DQs6DFkkHJeKxTTwvmaCAUiU8DpbiosV3f3UPpbTuzPsHnsEgx4Jmfhzuv7kazeMz6iYAoX3qsWjGBpQRyGsKCN",
  "key24": "3q5LxXUkhYpVyXBbxPmvqT8Y64GeGeX7DN8ZPuRJxX3Qn2Yf8zGCvRjunr5HjPBmXf98LJm5hZceTcmVEvzFsdUC",
  "key25": "QyNqGwy6uTnqt4vLyEkfCJ7NjaSRcV9LLDBHu2iMCGiJEaW8yzPpwVRPB14JvQUXQuADg5k1RjnyYjBReLvYfNZ",
  "key26": "4mfm2fFntDospEMwvUxVKeBJCzGS3Lzg2QL2jSKzayAWDcCqNBwVhEM8MKLhUBE6sM9MtWoVyrXrHJc7aDxs2z8x",
  "key27": "4yXUCHU6J19TfdKSrXfUV3KkBAphrqfB3PQsdozztRvHiL2NHp1Bbc6Rdkmkw9sBsCCPLZfWFqa7Gk3ZrSCwVpq1",
  "key28": "od1PpPabLgipfjGvLzC2rjSBQnA5YPFsTYAxWYhKnAE8RcooRMAvfyAb9SesyEjsvv6mvD5DgBGnFnmH91PrDMj",
  "key29": "4cR67uqqhNDVUArsPY1FjSKgg92jz7vRtZL2JdVQoDyd5TreRnVVzBzmE1AGiQmwtNxLjmSrV8gUkEonmmNAsErj",
  "key30": "2Mdum2ADgppYHaM6wLUnKiMKcRrbe4kohuQFFDj3cTjeNp619sTbqxXmXx6csv3Zyassxmz5hiqUvUmUN1Bb182U",
  "key31": "XPSCystdknuvu39gmLjv8EsDD3PacvHD6JoREHpyQV5Y4Z4U47k7Pv31WK1s886oFCPhoqVWFWvM8tx5TcetqNh",
  "key32": "2Mn7tRfyS48bYrEKg9PSDDyeMsuqcuHCGwcjd8v7W2oJ9QtRryxbfAe5F8Kdnz7F8YwJh1o69x3Dx3684e4MHs2k",
  "key33": "2CaZAwzhY1cwRBNMnUuGqjnRGnhx69HucJBg3CaURz9dy1msHvWLkTs8C8yg7S8SbVkbJq4CTbZ7jp7cFz4nMx2t",
  "key34": "5Xznf9gdTnveqkVrNZ7JRtvvYowhD5vKftdWftb83ydefCfW94ykAAvJQYVrbh7MFWYMB8g1ucJNoYkEFDiTWZsM",
  "key35": "4TkgyNXjTSYweJDjuwBw8XhwRpG9niLaTc3jyRGribBjzrPqc7DQDnQXioamBRsFproMTsHhKMyhYvTJQ8Cn6VmV",
  "key36": "4YVx39dfw92tNgtEqVAyuAhSW9ydx19tMkTuXuLWZzSXQ66uw9bkmzA35C2hzwmQH83wpAKvoANDMSiTKDEPFb2S"
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
