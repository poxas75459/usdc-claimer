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
    "5xixjVm8zRFzZNPhtdhXNrkokPsXPMBTLCynAtJ2yweehrAALeGcQcnAEi41gMCQVbjyMKfwVm3ZAuNNZArRycLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r81abdD5aBrbG21yNt2AmZ9K3xZcdccqAumrBqb3QF9P1PKsAmNGkZzbCpCaWFL19w2Vr2153HPLs9oVr1Pzq1v",
  "key1": "5Apcg3u26JetHtoAmQZH81DihBVzpgDteaXvwy3DLL9W3p3JtU8D6g8j9DmbMANdHcNpYuxAKoD4MCAPHWBA4f4",
  "key2": "2BVanmCWjgrmyVm818TqmNMGTsEbAcZ8ZjqaKLn68fhzuBL6BMg7CHjB7QMvUNQiYnrnFrpKMJF5rugyc3zx3UkH",
  "key3": "HQSQD5hN7L9spdKtbsHYMMWczGtVfJ7su5FcTtPAe7WJoccHvmsAPTyBf6VCxwwLHQAjwVTL9FzU5EEADutFD5d",
  "key4": "3wcj9trMLkT5ttjZtRP1BjsZaRWDwvPqCRjrAJaWCP1jc9Q1pC5GiqdmCeSVNLAaeJD2UwE642zZaZj9wUmXSuR",
  "key5": "4ybq7isHxVu2kPah7Whg4sefQpKYDhbKyvAkGTgNjuuEmy6cQdFuqLWJGrnhDfRQ9uLVYB57TJHP47maAEBe5889",
  "key6": "GFqEV9bAorrAQ5uipguYA1fpLhf6GQw8qDSn2u8cBudW82uejBzFA2R6zDjrY3Dc7KPBbBWE33r264yU556tPii",
  "key7": "4SxP7NN4vQWQjD2TiWxPGoaiUN2JkVaVNsLHUphzuY7WcU4R4FkAcmscEaTTDFzvGD2JCw8LPQAo7n17DiRE12U4",
  "key8": "26JWAM2h6NvMNTP6ZzCYu3iFFme5qjBvtHjz4pSVrGyg3Ukvgg6W7REqghs4DDMFUdWoAAhsdE82c2Gh5on7hwDL",
  "key9": "Ea2Zqp6FZS3nddVBUkRk8h1H72TvRX8nB8kScW3ZHmsTeQdod2mBWxzaneLkotEymiVXnf5RNAY8kHpuzHHPRaz",
  "key10": "4biEYhPxnjYEPcwKiDtMgf7Hxo59bFnNpPzNbZ7gWqUfysCE2ScZoFdHT55WZnqecVy2TvzmZ6TsRWVCxK5pC3MM",
  "key11": "5ZBRVoY5iVi5Dzqm8aLqnu7xUpnWxVk4SiBtZxn16duFsgDLYmgQDTrw3e7PCLGk2zqGPLFco7Gjzy3LKsxwffRa",
  "key12": "4nc236gExKhWsB4dvSKFKAyqqhoT6oLVk1sanpziG2aguS9BufL4RGSDu8hcXrS5Ket9WwXe4zSTZZH5WwaTTAdb",
  "key13": "5fyBwC6xZNxmUQy5NX5iV6wYUqykTU9pw8AF6m4Q5nERXav8zbqdaiWGhxjUQQs9bDs7WrnLogKTXJZqMxHvgd7r",
  "key14": "4Mw5xjvTBJWYkaL5ND3uhrnsVKYcbd1SoiHtJEX488SCDttDBkW7gjgmxbjqqiCwsdofmrF9vr2grAxeQ9qnpDZ7",
  "key15": "4ZcKzSsuvR6Mew4EefwyukTbGZGMo67p1trMSnN5ANYTFMdoa21LvnQzMAK9euhFZ999wKxgyhudgxb33A5oz6VZ",
  "key16": "57Lv5rFVEisnVXSn856F7VrqYT14rxuASh6ujwLEq8dzFT5ByAypMRVFV9S8i7ba3oKUhPFCwHhMjGb38uqj1n8R",
  "key17": "5eumwfmkyqq7Yqqh9aRQHz5Z44BhkvLNZTnJKaVhuYdba3QzUrzwEX7BHDaLf1y2hNicRMqkznJZ7mA18F773RMD",
  "key18": "TsfkTV1en3z6wh2myG6ra1WcGsmmnfmucPcDP8391mjY47H7mGC5YV1gdgagZuXWHCs2VQKPFtLLC4zjrk7tSkf",
  "key19": "3aUMpfQNeZfPjpoYfAmC62oxJUcvxvvr3GM1ohw5AYpDFXpg2HsVH8PuuM6WXEbpDMLWXYPhk3CBr3DfwgRhLqJd",
  "key20": "4K8DQQbeySHDxZSGZwmWKryVQhuj6MHDuYm7tHQJibSYnbKiKnyXPLGHCXeioB3CMxGKnpyjuLecLKDYd5T9mu5k",
  "key21": "4FMD8MzW4HtUerhrTKuNhiHYz2op1owdyQvsWkwbMtvLJhs8VDiZZLx72SexJAX5oEDYFWZoAVeRRWM6uTQQpsfy",
  "key22": "2AgGk4k6hZw4keP4thecfuiCX1SUz9UHEHLZWwUDdY5BH4mB6hzk6fpwzNmFELRPcrpVBt8Q1985e4iWq4U8AWAw",
  "key23": "3chP1dad156Hwwfi9YhrtZsrZQCJ6Z9qLvMwUbApYPB6wnWDihmGjP1XHYsjfVDYbVtouRw4kpFbe9wc8nkyGmwc",
  "key24": "jo7NHbbQFCSAHKrBnE1TbEpBVqDt8Dz7CsuKtiY4hm28GtoBLS3Vg652ajpgEptmiX3GnGgp5Ho2TMFNRXrNvt6",
  "key25": "44EURi8FpydHXzkXfpD6nAqtopijBnQCKnMrzaqZjyQAXod2SZEnZukuETixFBVLX1pW54UGApQRWWWfwZsW4i7F",
  "key26": "46mYiMt22W2HYtUNyVCpViHw3hHHVxVdYPrxyXzi2Zmij9TjvAJX2iTtiKvUHAxHU9Dy8seubFZXhLQcsuCqyXX2",
  "key27": "2kWAmxYdwFbx2NDpTHSRWjX3MfLgf3pHtS1s9jGSq3x67CWyd3mnDxd1ysbUAg7D2zEonKNnSf674S915JZUQ8qF",
  "key28": "44rMZHRLReJcdWVLVmMPWf2uE1QsBbxCb9db7opGY2i6W45uMR1N6R2ZxXThPYfPyTqchDAwwLEh8NavbVU28AwK",
  "key29": "47VrawN3z3zN6j9YXVAxUid3WXveqdfZjBUhLMhJ5NYkMoNfvKBfnwnSiHgdmQxw7DNhk4GFVMPpx4oe81wpYN1U",
  "key30": "nFvmavrmMyHKVcGrgQ7ev3oHaNRfp9bmjrbnimRkC5Y56BVhM6BgDwNxVJsCMYNrN7dgjVnYkn67rwB6sF8Tmuf",
  "key31": "62YPt6noRj1pRWvFY4yaajoC4AnAuba8sHQHxJPtaav2drwKmNmeqVc5sB3doL8nhBCq4WfaXqUJ3eePd3Czp9W4",
  "key32": "5VEKqjL57niNkCx4LPHVPBpv1ktYcBfsSNYLGHoGTM53qkP2vR5KoL8fPAZXWDz2ZmJzSabxbZbnhDNMZMv2fkDy",
  "key33": "2Fj366BzbsUfyssy6BWkFebavPZdKq788bdhpT2NeV5cD2852bBPCZtY1Hp8yQbLm54cjibnLSNrNh8yygpdhZQz",
  "key34": "2vFnoGK4zpQ513fPkTXJkktjbsVRYpQbBQK8RaLPeMgFdytsL7n8fiBTTyYtmT7Vp3FfzSxBLdhVc4nFd36CSyFB",
  "key35": "GykSEavbUhHyxaj522K79Uw7QA5oHMjNtweEEMPMQp9wtQ189apWV6Y2tF434Ct65BGQPB17FVC7WcUX6PzRgq8"
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
