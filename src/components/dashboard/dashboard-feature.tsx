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
    "exyfXsN3y2THxQtPZkvBDTGUrrY4V2CFYkPSRwoGybmiU7zn7ZZ1ppHRqo6xJh2HLWYW2jWaFwgRbDqUJ9s5N1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HSxJmatFhYgDbxG5cj4SuT6Gq5EbNp7xNmhwy3sX86Ejti3oMC9keoFGoBYY6Dqf3jvCLBMUB2KVyfYcgjSKLKD",
  "key1": "5NzxuaiTWw8i3GYh3vjxKBuxaBrEkiBreeJkpHP9J5EJDH5d1aAq2NepQJ9R5jJ6BLqTXjWDZz2jzAJ3cx4y9Rdw",
  "key2": "3CfTzvK9vLM8KqF5SQbmjQsMo9URNiZERPxBHeqvxisgXm4nuxzAGhdBec1ZjGczEXi179Kz2XUuG5hErdUKUzmA",
  "key3": "2Hpt5YKHgpp72v3ycwTqpJVAgUiPSBebyUMfdoK5inGqYj1EgTscZ1NcRHtpoAfp1Ha6wGgyRS6vtj5cqiocsEwb",
  "key4": "rXHwVKh3enjfi8fq4eCaYnTjPDmxGpq3DV2wQYAArCdLmUAVgRLtDrtaKGVvVzobHFMANH3kFrWf8rSvtL4hZfR",
  "key5": "3G9sxTM8N8MY1budqGxrX7z1GMmkaeEQJb8VZq4a9ZP7biKqhd2ewcASRZWJu7AHuxoEvAHA2Qvnq3fecjiE2QYw",
  "key6": "3S1qdyLo9s3g5iBa4BtnkMpHvGrgT4EWCAfnGmJY1RDaTnKjykEBkJAronpChR9XKH5VrntfxpFxVKMQVKRErUV9",
  "key7": "6g3hhEjrred39hd1pMZGKHcxAbNxUJ5WM3hWwJyii5rSrVD27AerLGW6M2pBRoL6qYKSpw92dhpzZvg3YnQT56H",
  "key8": "5igLdvASRYso1W8qvkjMEwK66zbwRWqetaJzn69ap2EvyurT2uqDtjQiAZxGnfxpP4twaVrJmk7qUqt9XkDbJ5p4",
  "key9": "5hzJpVBzucwiYhsiXD1bjdriLhh4diTAVx2Mu6ht2rXtgEMat1LznTMScyhFykLoNLTjHj2rYAe5nRiuajJiFV3Z",
  "key10": "45CTdcKuycX1VUGY1UdErmNVnhL61tsH4m2SXXF9cqzSYPGqkVRh4zAbm7qpa7kC5hgYvFrMWGsJQ8YZykiv5bCM",
  "key11": "5m5uVzftrzQbNrcU7n8otdzz2VqwM7ezPTmQd62ULecGveDa5agpJ2tim1fL486KdVPb3jdfYWuqt2WMpqeK1Qry",
  "key12": "5xuaAzD6hr6JsaApdLgUjwbTQpKg1AgVvC8W2p6pkkE77ky1AxuD1h7SaoZni3Tuj8h83kQvvRh7F8Q18w2XjRhd",
  "key13": "5R5a3Mcm77QdgcJ9hHHr5BST2P7bBpXzuUvaaZbyL4LAoJKsdugj6TLVPVfXbreLoXHo1vuHaCuAvzdKFuUrBr7q",
  "key14": "mzF3f84wYSeiZkVixmdefUSQn15tUNqiCZNTjz5aZDmFmJnDSkWmu24kqCTf6gZ6Hhg3WSLj8LxQpB9RjqmoNbh",
  "key15": "2eF3ueteUJ6GAuaBK8mbDjqaTbgn3zJqoUDxL2Z4sa2DE4HcxZizi3JKsmEifZEbckxCxwh5irrih721otL9duNY",
  "key16": "5ReQdrBXMCgy41ngxWotUonLTkWzj5aeHeW5S41XeK5NtU6oymJFtfd1x8U6EyDsnUWf9xebxxMXBWWZeyCGZyWY",
  "key17": "3N65pAcNYNLWrB4tZV6CfDkKjUqugv5DdZ9fxr9yATrsRPT3qNWLMSQrrQ1xntgihbs2W6iXj8tkTMgknHXijPJd",
  "key18": "5iUVUJyCTsFqX1zPquYxw6hFNcEqY3pdoCfkRia1zd3F8TQQ4XrKcWc45WbPR4DeWT7dXehicCYrxFM13M1HN7uW",
  "key19": "2VM1KEnC8P9jXkrcPuZEJafFU442btTwNs2pPUzzqyVvY5GsuMdPYV5A4kYaFSVRj7W7GYaUZPYrsG92jAGddLR1",
  "key20": "5UV7f6xJCM7tRfAYuB7NziCm7DsRrpn3x6Gec6Mv4Eos11j5gGs1rMw2CsJYp7vhkLcz6CyezP7XCEJpS5T8C4fH",
  "key21": "cXoyjw4MCh4ssc8DqUivZUnAv7CymFZftBZrKEbw5NX4jPUFr2b5x45RvEDZ8AvAcP4QBYzUpnUdjWxK8wypAN9",
  "key22": "2hPDrXrhTbxaFSrDQcuDo7WMyrzpWGcsYjU2dn5o24y5PdYVHPwbvaGoD2CdHTiEEqgNFfppbcbTMLz4VTrjM5gQ",
  "key23": "5oiSzAczkLdp6bBQX1Cwu1MCohmSgPRhjbvNZRP8bpuDxpzSi6LKWheZHwHWmPz4s9BZmLcmkRFTQtbdAWkbeU7M",
  "key24": "66Y9mudvZ7vkssP1w4rkuoAacyMev8u2snEXC1kZGxuictvfBcsjAXHX4Ehtvrsrq9XESgYzVVReNVdZDjk6yoZt",
  "key25": "3LFJZeezE8ahtPchmmtNt1LzPZMRqPZYAJpx4WREdoxCPRNVUJyCoRYMSnm7Q2ikMzND2v2tC4t8D6TMotHZjyyB",
  "key26": "2eZZjW2qv477G6zLAvWwv4sNksEni9AAFBKksi5GVDNAZFmZL7CCQ4TUNqqcRY3myAs5vcUF3aCcEdWnBZDEjsJD",
  "key27": "mukdZZ4z1Ep5CkbqJusQxLvm34pyCx4zjqaYVQstj632FZxfzq1xQXCoEAQkdU5S9D9RhaB3yygbZLbH6mJzDPB",
  "key28": "2YJx4v2fNGDxgvAWBhHxURd6nYqV3CaZAgxG8p8sABAF4znzSqyag4ffzWH1x92xc1R19J2SKHrG4Ybbq1L2eRck",
  "key29": "j62Z7eYm8R2qkmmdL7FDmtzJK9fRyTqhZySDRCjxSgbF5cJ2XRRJzk93N9befT9DzsqS2HZosXkipSumZhL58rz",
  "key30": "2AWaK6TEv11HMCgBTCh36dZ4G7gCVRXyqFtK3yDssM8CvMYnMDCv18Y1Ni5r26LSEH8aUcV5hsSRDHRrWFT7dEb",
  "key31": "3WmLE9JnCibDoRGLfmHoJgqYjU9Pbh7jMG8CHbm4BC2oiD8GwRedMwtPZJZWxkjbHk2VwkdpUBfcS48ApFbP943A",
  "key32": "3J33ABiRtJ9CEyVZy685cnwh5q72ER1xD2uKLqDK2DVwWkoLJK66zBsu6ZxEfXJe3wAzdJWgvFAhXokWQtVBn8J3",
  "key33": "EWu1ffDCpBZAt7Meqx7j9xnGzX3ocJ2nNsUytmkRC67gPdDhXkNAGGAfNYmSiBN9RJqfPwnGML4NF2tCFuxyj86",
  "key34": "2qAxfhPD8UZUhrNQQhh27dhVYG7VDZDVpjAvnrwBvibo8ZMW4isqCXNERSD1P6Wdhuf22W5gPzZ3erNguWxpXjgM",
  "key35": "3wmj4wwrpeUZvyakkHyCfxnG2XnrjavTthV596r8vfBELAnuMiLyzJHS6h5qQ1K4semboKWAHsaJaR3XDYPRXKWm"
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
