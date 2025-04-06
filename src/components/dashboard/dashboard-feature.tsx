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
    "4nE2MtghbaLA4qqbJpX3Y73ZJRjFwyAhowLUHjdWhaRcGHoriS3k6twEMEWiVWwEDJTK27Dsnc1SAju9T5Xvy7ft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ViB3cV3UUSUyJA4pi26RgQDo9tsprDLPUEMnP7CbsvmxP84US9jcg8baejjTLwnMKeKkm7YzovN5wTQcKten8m",
  "key1": "4dusYWqzkTrqt11oFv4Yw9TrREZnwu87dWYcqjDfNDsiMKdJkasfLoZh7gnwHZBZqHn71umoYnGBzY2FsmjbLvxP",
  "key2": "5ySog3UqFvxW9p8CT3VHijMjemu1wokenHanywsr81qKfu1A61UoGiGWnaeiJENEKAX9XSNBvZFYg8vHduYLUSXz",
  "key3": "4v4pV7ch5bLkBcq3im1vYxHmPRgP8DyvHiRGBvdNo8sG8ipeFhB7W6FTDnDotdSxXHNo9pFAyF8pwTLAXcjs14Uk",
  "key4": "JcZz9qHegkhDWG3iVbanJGkKex1ueBZ2qHaeQhLCzrNS5YwUESp6LaiZwYgsLM2df4oZzJsA7fTccpmRqSMPx7d",
  "key5": "4Xj48iDqGDyvGFcBCbLhLLHGCctWFCCEcWRTFW8E19KSgyqD8UYR9Rt9bAojVnkUb2NT3GGh2eicGyPexth66R5C",
  "key6": "56enSrnwDQv6W7pCYD2C1cbLJQnDDegaX4DmjvChBctkaXNGW4UcrEerPYYGE5UhbXiL1D6JoCpmg6Mop4b62Gke",
  "key7": "4gkuoHQ5NPi9gFDTKfBg6EUDzFsSnbtXJB7FYF1vv2TCUKb1Y6RzGmCviCm5Pp4p4FJHcxwzA2khH2jopNiqqBwK",
  "key8": "2Lpy9GuZq2Fib1LebA5h7ATEUnmvAdB9HJe7e9rRzPjyBsQHLxPpZZ6vhpVVCHVqdQYsaN2kFtMF2WTksXhmh3QN",
  "key9": "4AqE18Z3EUdkbYvMqQeow7eeaQNmpH5kAJ4o54HPSBo5fJG5P61R5ejjkDYPn7Kzs9nDah24hVZGZv7RZDD3AAEZ",
  "key10": "o63ZFso6gzYm1tk6CR8r9y9inZ9XeWRrP2DJNY8e6Yk7QGVL8Q6E5GUdkHgEKHApnRAwxUX958wqZr4x2a9geNR",
  "key11": "5z2TkSpczMQ9PX4wvgP8sXyDLBxHBdJxrCMcVDLKUfxAqb8fVXDUt5YQRyQtQQJLyaY9ucqp3HdCmAraNZntZfZx",
  "key12": "5TH2RK3wJwianCJpoAHKyVXQ8mXHPsDheGF3Sw4UsYwXv3dYTHyLojcRDtkGagd9jBzch3EDTxDNmnrcQKbDmmer",
  "key13": "3ZkEWvnqvbzFNtk5H2F5FR1xZ81e81CSdcTtZniiFM1YbxdwnbgB5hAZiYNLoxWNyKgNADnJgo8aHpuTbSWQrWtr",
  "key14": "5uvS4Tv3AVSYMvimdK5q59UwJQ3vWdEFahE2dwNUBxSokVo7gRHW52g8sDNsbRDkeLhCrDPkniEahu5CGtwswSZ7",
  "key15": "2hTGUJa7Fsqe6pSy8dAniRW8awoKmJPBnVM7arjXH4JA5hxpn3YY1DLVdYzz8G5gGxePe1pNUPYQctWrvDxBh9iW",
  "key16": "5xWnkKzp6YQPZURbBt3XNjgE633wmbQSJB1AKQv9sqmZth1Ex5TYxw6KjXQnzvmDSsWvQqvu6kwGP7GbK1D43VBA",
  "key17": "49iyvHctgvZSD9dzLJhwFgSindPVzR8ocHhr4REN4PrqWctwcMkDCtKyAaQRFoLF7HvmtCXhSNaTsokkwvPBM3n2",
  "key18": "2g6Yea4gieHiUqH56vEUC3UKrHbDHTN2Hf8PpsXGXqvX5vvw64idmmLdaLbRx9RENWii2eGQtsc6dUybwzfF1rEJ",
  "key19": "36ExbcQpJWqjWSzdPJsRCLFhZTXThC6b35qBEKwUpvGumfpARmXzWXo5bQcVCqFRxoQ44NWc8ziiu9A7Ax3BCarN",
  "key20": "42tumFvSngBKN2g5tDDw8QQVqQkGMPDB41yGs3C8VTmejLhzhG92pE2FjxJ9cfB8XGdFN8k1XYYU9W7seL2vdbp9",
  "key21": "2ic5mrLA2P6cG5E8pUieLLTCVERn7U5UwDsGUYiwXrbYUBWd6LjtmR1s7gktQ6PVVccDeWugeRh9cgcg8wWnX9n4",
  "key22": "2pHYcptW5R3upvqqh9YNcp51hgQgTan5mztHyx8tPq5WDbXXF1TXvaWEuuFXDVQ9G9LzvkiFV152pQSzTPgVouDE",
  "key23": "4qWdDFCCSB3fMCFad1aghPQfksm3Ddn98hPWuFcoq5XhpER73ce7QkghTK8QbiXMP9xqfi417J3rcLkD9WsTprXS",
  "key24": "5grnD8hyo2Yu1WMdnP1XzySzNm14ASAUMgHdJAjUsG1AUzDgr4ZA9iV8SYYPrHAFobrjn3tvfnC9PaDoqpARtkkt",
  "key25": "3s5wSjUjvkcM8SmTddeE4rqAdFsXvCjDwhhupF6zbdt1XWM7jTU2T1Gah2wTamg2F9AwVHM9n4Q6B1toR7HjgStw",
  "key26": "64RSinyKzTozaQRNFJ44x5zdgpjpvyZsJxMPUPgdo17SnNCYZTRaBDkaafiTYcTBgrKzVY6SieG4h4FTRXhCRgo1",
  "key27": "4wjpdo9M2vjDsnsvke18akxp8uhztx9AmB3BkPCLVYh7UkccjhVsoNVMADcFAz5BiSixx8QFe85tQiKD1rPrsWvg",
  "key28": "2XefxPWxQZNVtx2Z5i5kEwMk4xBoyZUjGYvNzbhN9huGi59e5dE4LxkbEA9YkdXbCBA8Hbh1HXb56GLpSZKbRLsK",
  "key29": "3NLGwihrSt1R4WhThwH83xBoBiHHD5jq4WXB4mfGSG2LngwWqgSsVBCocRFViWpiePg2jWBXXAXhSpVnVV4vLv4m",
  "key30": "5gGKz5ETfwsyYGT46BusVm6ZsLAEztg2CUGcpLfwK5nYRAuximt9o1dSD75Pqg1jv45LCVgfA9GvMusRmPHchtrU",
  "key31": "ycjx7jjH9xQSHTiK7mNen9WpBqMMDuAkWGkjQwHBkD8kJFJ5quuRQQ77wRRUA2d7RYAsjkeddU42BU19QBkyZDN",
  "key32": "5ix5zyYWc2N6hx2XrK1Dqx13qxKHVPFduVqxcFThKSATrzm6angefQrEjyP5zyRJroSNAWNQNk3HS97M9TWvvC6e",
  "key33": "3mDRDRXViR6A5rX8XLwAdY5ziZNA3Zg6wvFm1Gf6DEzd5y6NiYnWSBtxdrRkTtmTwmkz2Jr3JeNfFRkA7fofEZxU",
  "key34": "PKPXQthV43hN6Haqe7pXWRxnmRix1Qsiu1Xa7veMttAfBE8tvgo9hQghSD2CW5UdbBkSt7y7DjyAZZf9y7wRYWo",
  "key35": "4kZngt4gjNU3Ci2rUrEmXn5rMBVVtue6nDo9i2zkCPV2v3r2yZfqBbXH62AbUkCjNkLHESoJgrpchzQmBrVJjoFy",
  "key36": "tT3RCx5ADhmFWC95CcVnWz6TGTKiKnMaBDADaL7Z9UJ1nGpaMNtwVoJkfe9WcWVVkDbd59NSf3Q1wTB71SFNUWW",
  "key37": "2SKJMx8o7V9bFoMBWGTZJmnmF6XRNgKN6Jcba9rbtxM2jUNWy7Z5S4M4m11pwiwbPZFpLjnLNGjxECg3VqCqDqG2",
  "key38": "61Su5as8KN8uwNkjdZvaA1UETEC1pyRnd18UdZSPrFQL3QCfvCyqTPSZLae8RBgZGVfm75vbXh2c7G4de2kVFh4T",
  "key39": "3MHFi2pgNnRZvHTpquniEsPuEMu9C5sCLZR7fSsSM7J9nat9w34P3d2HkkAYDhxoWDLbVPEdSU1D9U9Kk56RHPFU",
  "key40": "5CHGkkiXQU2aGseEHdvb3hM881zFm9N7Jjnm7Au32nw4gdnE8u2enQ6gm6bUHPwjaXhzUebrcbRB1pqq3gxdAyur",
  "key41": "2YqadnC79qrSpgQoYFXny1JHnPwgGqLoQYuhe9qKkuCE6qSpAbLM3gm9W4hTJU6M8gjgvrrwiZgsEb4Tm85d84pd",
  "key42": "3z5Medefpsg3og2YsxFgf9HMPTbh3a76p5SzV2286SfTx3JGCG1rYvozdqYbo8MqU4pPPqfGRuU77Q6EQTb6P7yU",
  "key43": "hRad2SkKGxyH74ZDWV5BAd1ptZ4keh7sPe7UvmZnpN8aSKZgSwriA7trpDTsF9ytnixtMKZuwaUDC75meVSh4Qd",
  "key44": "3cYJ8bNkrdkH76Fg4fQtuMsxw1ZRhpcKJ5aPAr7CjGmTU26gSbfZGJ1GiD3wK1j2Y7C77GoRGdeFnRipUQZX6ErM",
  "key45": "3iBanBkFqPbHMU1Q5Q353GGHKmeKNPGJf3RksND8Hqpdqe8VdmEvJMPi5F2vameM5uYWcTjJQARamD6Uq7AYMj2s",
  "key46": "5AMYju589YLqu986LFpb4bnjpkfzzsR4YQzwJs4P5QkifCK2Cvt92dVXNSuLTQm9YWgbxt1ADXc9yk9XAbjn8xab",
  "key47": "5TDDUYsoPf32bJRjJjVHEir2oVfHsXe4jXdsoLrFMTt92X5V9NZfSkodwbUQRF5Lx5YJ3cDTCbABtih7LL8r8FV1",
  "key48": "4Dd8aurtuk8DUrSjtfgS3BDKXsGeZZVN6Vsc2bgYaqdipnVwTQxcNGzuC1aYzWXGnTPkRMP4nYDr5ihfWqm5LUDU",
  "key49": "4dKkbULunkkzvDJKDY9hjb43ctx8ft9ri9oAjPeiCtueUUiPhBLQDg79SPkjKP88sMaJgzjuDc6h8szuwNv2frxy"
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
