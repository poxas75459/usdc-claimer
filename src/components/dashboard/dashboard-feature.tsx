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
    "5eaKj4j4EnrVuoMByA2UQdYWgihzLcXcBAkTNLytQuzGzwqryjptdPFZoGiakBjt2NsFpQAuhcskfkKP2jdb1tDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vp78f8K4qi58fV3hoN8SCCvFwj6zpNLsaLVPJxzL6pyx49THKi31eUGYckQGbhZhZT9gXh3CrEsmfwQ2TTnup1o",
  "key1": "648686b6cUSs11YHi53VUwdTQyBqAoqccbAUDV6scAkj6EfmimeMvrUzfohRGRx1Cj9FH7DoEzGUvfKGEbGTXDPo",
  "key2": "3xAzdR4591a6zwJw6BkSn4zrah8nCddQpXWHVi4tkru8fTev4SnfeqFRY9YqPUZ8Dw4b9e5Z2y5oQWxvocbBgYjo",
  "key3": "4gPU1jck9GY5inUSckqP7A5hE1KE29BeFuLEVvhnip98nXYjcv8beoEKMmaW3dKGa9kYGf8WWiU8etkGYH3fVqv1",
  "key4": "5qEsBenxQrXXUR95tFpZcfH5CnMwRXhS3j9DXyaTZtw7i7JcrqiBcmv2ZjgyrfUSK2neVJEQPjJmMtknT9boURHj",
  "key5": "2sw3UEUzyboBjzn3qkAzjUK4i5QESV56txB8wPirmm9swdaXaJefoBHUkuzptD57eNeQhMg1HUEueuWKu6NYCe8t",
  "key6": "5GbtacyRvKaHZ4jQZQtvjNdY1DcEFvsFtf33aS9ddAkyd5B1QBYYGTzUPcWXuEfs4Knjuz9KUcoLop36pzshHdJn",
  "key7": "3HtPQTC5C96YXoYLUFEGZTwj3nBcoPZTV2nW61iK2eKtJv42j4NgB2SSLWNqTgMbpSFMLgjVMXjTSV2M3X2fy9ws",
  "key8": "5AxxU6oL7WKXBPXAeBBVLGLo7Tn1DPD44bvcLPkRZvBZNJLTdaWgfGjSqbQGGwWAxgLCnyHDGrVavh2J47kQXrUM",
  "key9": "5WhtTiQPpTwtMuLRGxJ523KcVGzCRe6S3ayEKgFaiXUMWLRmYgXE5ZrqUsspgB6ryRds985x4moTQLD4qBctpeRz",
  "key10": "4s9xPPFRjAFr4BDxz27twvA6WPkPJ4dfE47KpTnaNxmnXJ14DasSSuDw5iM2uJiUcNXEwaMBDdai7VhvPV2cBW9Z",
  "key11": "2UNLGKxiEfYT335wdRyDuevKPcpoZVC8vxVZZVymTqkXHmSiPwJTWDCTadrXgh1oRpBfeV8HX9hctQEusgRBW44D",
  "key12": "2JEqoQqFa8dJCFesgBurathW6Wzy5sZAwxuCGP4Z1i5n7zQqLKEkf4FLWVkSwhnyGWS91zdRc6JWw2mvTVzYwM6U",
  "key13": "26QQdNUjV6pTD1QZMN9q9TtX6CH6dBaSBy2W5SdiYmYDSuuP5siscvjqysfDb4zXWDppGmq8etBRgrnwGYtfpmJi",
  "key14": "aXw55ZuBr8f1DyJY7PmbKaV1KDHCx33czXCKgu2icSNLey26nm7e9AUa7XUB5qQoFSgNgETt6A8bqdXNTBx4xKW",
  "key15": "PYuokEkDkTMwZkJdnZQ8T1L5umVNY7Cbnq58Xvt5U57dr2tPaDTbtYvvPTrPyJuNWi3R8Q3EPeYxyN8x5zC9pUa",
  "key16": "394jsNoq8FVPwfcQpL4Uzkfe8n54P2zuMZnPNPKPvYh91jvCQgxNqcdJ1ewiMEo7s9WSvsbfGeSQKzFXonWoXdYv",
  "key17": "58mWKRLn1UK5uCNztLGxfbC5oZZ4eXBT6g3MxK7UPAoSBn57k7Ncf87AqTGrzfLqyZVMskAcig3a7zQVMXrjxkwP",
  "key18": "qBVH9hShVAAjnsghuYN2BfP9EdnKneqQ25VEmdnc5Tgeqim6wsRubW5SHz7eH29b5ibtLcCpK3jHv5enEHESKPB",
  "key19": "4VQvPuFwbscbByRjbquvaesxbGsRzWJoVdSGNvBTBLDs8auHtx7ZszxVcAtkhAWcXiNBRJJK5yS5GZpyEN6SZc8B",
  "key20": "3oYnQdGHTurfxDTocppynYpkPaKwJ6DUdpbQP7cgGKW2pGUpmpUNNLTQ5U4YadA1e7xFXEa284W3YvrkQfbxtsqG",
  "key21": "5GBd3RKj2aKKvmaXc2ojwQboPGo5LwyBDvmoFNHr7eeSz12yx1BVy9PFhWvnrFjWevVbRN6iGR1asumceAVsZvDL",
  "key22": "3myJsLupv3HVSR3fnhXx1p8b8gRc956HvWHtwR4Ae1gvQdDkaUxjvCXm8dXvLXVUoKAo7idLLowQXzoNPc7jLztz",
  "key23": "WMy9kFgWbyxek9ez2CosubtS6tMFxDs7qWsm6hxx9pHhtMmVjBrT2EYXU9XEXBzPcQzSehxhc2aRmYGmRzYGFTJ",
  "key24": "3EKuMig6dpzYobdtEE7hVzLGcCHTrhSkvhTtiUH7bqAPT3WigZNGfrgMpaVBbm2i7tLTGJCs3uFHomTYSBQe11Gk",
  "key25": "ccor3D3Vd8NoZzbPr6S1ngzcirRomPPok8FAB9fwyKDbWoHiFtaCiLXUw9acu7ZKcnJySA2vyATGBMPVV64W9DP",
  "key26": "4M4u2ECRGoj1CTCi4miz6qbPhxh8uD8KfbfqPTgUbU2Tpt2sYWTY1J5BoeiSJnXB6ZGVBxH71Xmc66UYsDxebCTZ",
  "key27": "36sVdecFuKr9DLKxcLrAW8s4N45vuveCRazSz9jaGGY1PhVt3JJybSLqW379fPVjDJU3d86PWyWZHdSQjYVPa8z3",
  "key28": "3uw87THFaPWTAGivAJXCFyfsZUjSDp3ENA1mTH27r4e2sxXgPcVXXQRDHkzmxb91zBqN3RGLppJfb37aaoqfRfyW",
  "key29": "4bUdqwp2EtgnG5trLL5DzdMBhjZazeduYNVjSXrvaQjeXd6Z7ULJPa2Mrp8CYUhcZ15eysn68JMsNVuPY8eV9Xq3"
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
