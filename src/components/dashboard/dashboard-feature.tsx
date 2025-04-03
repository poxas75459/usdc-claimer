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
    "hQB4EGSEwotRAYk3iQVdN5i5x5HXyw7Xxjk44FfqTSPHim4M7tJAdBxEBQCh4HVhc7WS7finb8jwFbQzM6V9TW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gsDJ3yC2MkmK4oEyRfBZgUQyahhujV5EgBdYzXxKG7GqgBpt9KvC6UVj48SfQNmL2oReYWctPq1pNTCyHBts7h",
  "key1": "3LJHreytpVXWPs2Ck9Sb8mzHpnnqiZEhpbM78avRVBLZms1cyvS3aLC5FmAbGisoqxaLkqwjdmDTtGwLkwNPRrVG",
  "key2": "5XVraM1ybYFWmUUKy2KMYGQExAGrnRZ5ccs6WZZ2LKkRwooL4qYmzrMcjdjCQrnS99PM9iDtpbentbqjShswKGXU",
  "key3": "2XVGSHwFygakTXRqnao8N2JwGumFDs5T66xkZgtwTL6coT356zBdKudjzP6avxDLJp9z19RnUhs4RaMhkaBX5von",
  "key4": "59cbRcJt43h3RL1xMBVodev78nCJSfoXc4qxxbNP5QxRAFSjC1o8LGm1usFKYkk2mSFQ39mJTBsq4gu5tK7q7w2y",
  "key5": "4jSvzRkqosjZieSzwrHwgNXgd2gGHftH7DgqaS7ieYP6tZo9q71UpRxia9c64XzsJxdkAwfLqH3xeE7dYPLsGdC",
  "key6": "3Abp2zizDawca4hNWNz5ckri1S18WnkfL4ExRmmnvRgp5NiAVqqQnrLxqF6auBZsKaSmi3efEo3Csb3T4Kdfb3ht",
  "key7": "XPq1FxP7qCn9c1BZtTKQwa5cmYQyxiqNZDXDopJARoyR1j5ZPMVmesuMvGyp4HPNWWpLiJTuwWZtUMwczrCxwnr",
  "key8": "YbM2XT1iev6ZLbXE9K9vqHkVad136xfLnjQXzknvarEztGmRYrKDVoo1BTxJR83QmzSbqhaP4p6J3JTE51tAEnn",
  "key9": "3a6idqQB8e7YNgAhz4mVp18C3cUXaYkiUU5u2UWp19bB4WDpW8t6aDkDRYfouiSyoZYNoAQWzP5n4Yqwcqp3Gzqs",
  "key10": "22hQ95EjnQG45A6aN5oh6P7Yz3iETXD8nbyArqSqiRckCioNqxW99PmbeBcCMQ3d8iaJBdDGTKmAbucBn6FmVQtv",
  "key11": "63CvrQdowNxFN5WjhJX8uLWaSEq23odvZLW3vdgy7Epu56onghzJKMskLcFiAkf4Np2KTQYuV8hTAVgrx8gk6Vmn",
  "key12": "452GND4RqQB2akBYWQY3CW9asthaT9emCqcwMJ34wZbusEUmgjGiCCQRWeKLcaonC3sF6UGN3CRZgWsJ4VeaAiLd",
  "key13": "ba2KJn9hHR1FxxPDkQNqv45o7hn9f6XVL1hZuyJir287MDx1HAaUEe7my5o23ayhXG1GqTNYaUXR3P3QbQxFmFV",
  "key14": "32vPNUnNUa7Apjy3DjBsC2XNP64bqT5mTbVwZUcfKptJMa9BRr74c1pbndZAn7HkqfuceXA3MZ1QCavuvzvQJ2DN",
  "key15": "21NjBnyPE7oFPGR6pHJGAumi48NJ8BWYCCaVYECZLsNoXdpdeCPKr5b6pLnoLESv4ByJ3A4sL4K8bvbcr2kDvAsJ",
  "key16": "3G47Z7DyoMP3esTUz9PDK9U8zxYWv9TiX4Ju55vT7iuN4JGdx1cVfPfcK1WWvouE2nHhxYY3r2iqAYG55jD1ur6W",
  "key17": "3nDnfArgfTGPDxosKekuxHeBDhdACyGsN53A9N7tzAtpaVW6y553kLhEWEM6dDyRnozr71LwaHJWFKazV3yZukrs",
  "key18": "3w14NUb6giyskiFpZLwk4LxCGA4d1vPZ35edqC7apw9SXPfzUwWusMzkM8cVrTp8HA9yBt4LTo9Fbk9eKGvms5uH",
  "key19": "5vUQFmFznB9ijDUKzV5HX3YGBb68BYmoG225Jqb4hGrhK42Yeywiaq3JVjjinKTMa6XAk3ZvLe4kZfTbChmYRwrz",
  "key20": "63g1hDuxvY4hse8AjdiN1PaDYQ8DW2MmvW1A2vzYH4LJJyrqZDuCVQkxuLW27KmRNqXN1rfrjz5rJYGL83rsSxay",
  "key21": "5pVqgTSayjbjWb1WY4hUAZUWBEQ7Wnsvth8FUc1u4TUi6W7XyemRt2oQTApWXzJjjpFWRUbvoEZnNB516GvhAjKR",
  "key22": "3ZTqUhyWdKUDj1Uc1sXet44TYohUf1okZXM6EceA9oKk2XnUkofnWCoNSTtpJjSumozLQ2n4EFWQSLMPWyn31joB",
  "key23": "4q3SeTFU2Brdh53iraTx3FY8Rb5PjuLY1KrVsZ5jFq4N96Bd6pkskkF3PNAyRu9FKvWKieVm3RHjSApNkTJABckH",
  "key24": "3v2xn7yppsQh2VGgMEUfQ4fY66TRngoRDjfEwmDJu5mrodGCaCJ16DFTw6CHJZUL86k4NtkBDHD9N8b9ECJpUtgJ",
  "key25": "tWkxoYbAP89aCFZfCEkWp6VDsSHe9iTmupq3x8LrA2RBp5U5zoiuUC9TbcBAMnNrhuQUDyaXsP2ssaNxviYGGnw",
  "key26": "56QUpLbcK4DabuYREHAEtb1P1pzERhyBzX66swYDMaszD1SRZcfkuEx7o99v34wZYL49YAtDf2kFDRGGvBuHVcMv",
  "key27": "4JFXgAHRmWPPkkfxfShXQ3HfVv7Z77fBo8LLsvzDr5mEgd4QemVbAzwQi3Zzaye6RdtztpT2LHanwQ1sPxcpPJRp",
  "key28": "jXLc9fuzBYgn35FNBsuAHmNehB9hbKux225vFK3ioXy3uk1rS4d6eynUcDyPArHpNBe9ShQPTXypKmmSfyVadF7",
  "key29": "4Y1YGVE7k2yXchRvYzvaNgMjhqNvGdQNDZvYg5UXeNUDsBABwUXh83tWsUeWf2gsRDUFQDYUoEHw12SwkXjZhTjz",
  "key30": "JcAm1PTeLb5msG2Y2da7patdMfz5muchKusP2FH3EDeVxLFiYBfm61pAxqNG3Ss4KzoSwVNLBB9xuY95CwX2RLc",
  "key31": "a72tzPdYNB3dD8K6XehEMvENDfVFgREbVxC9eaJ3LcHeV6MjmAtAnWVD1QknSn1nKBTHbcjTcTGhC6iBNVxoYAA",
  "key32": "2kedx16jps3ZZWFEH8W5tjroJ2ZxX6NopFUZRxKzis3WWPoRp3zXhX9mdwSJyeU1gEmgfatMKoeUAuYWQ1Z1yjHw",
  "key33": "2wR4yiUJ3EwRBRZqoxYJcxEhEoVvYpvnnza7eoysf5WUbE72hnbPDvnzv9gaBmR9iYi2JGTPqfLimzbjF2viSysG"
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
