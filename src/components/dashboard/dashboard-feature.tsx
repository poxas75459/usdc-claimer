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
    "53NLNtZd3bWozHSfoo8nJwfanM2rrrNXhda9jtFKuKSaj6xV3rX38XPAVsrAGUyBDgDwdSR8LDMXPGwrpyUCBaqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "522EmYSqCwKp8T2kzkXtuGJe9SgVFMqqhazTWfFJ8tFbySeSXkeXSmSnKSegu2DdDaoRFTCJqm2ZTAdoVgiWXYDj",
  "key1": "513k4dUBy7Gv4yLMbRNtpvDuPnz6hTVyBLB4kwmy6ukvYkwDWNoRQeoMY9khqxr6ZzU8ufDN4dNeZ2JZ3cGymQu",
  "key2": "4wo6fmuXmDS12uQGXS7Cit6oDrSkAYcFdUNQCKzEMANYdjkkATYBfdovcdSnMNvU1SW9gh487XurJ2dwYTPwH1GG",
  "key3": "3X3GUyuPsBGuiDFobiUoQePuTLnswzsKpU6PX26FBoQCAvp6sgzn2k89yVkdQQUE1nTWnQzEjYPwbs1b9kiB7oEh",
  "key4": "5iZydxi1wG1enss8gqc5x1EuBfseneXZpWfJdVkoCKpcrR8ZfSXcmXCTB9kq8RDrbvXiZsPg2vpGWFTsR11AZjfS",
  "key5": "2huTyZG3F9z46QVbbhjpjzLtMtxeRRRrrUvF96DaJfG2Jqcc7k2F7WA78ywFMGtnLuUR47jf5DhNqJrKrD4jfdaF",
  "key6": "53NHm9Lu7UzYTx2CPHAoVwu3bBpsvevtgZAHTpSopVJuER8oELUXp3gav9uT9vJTz12Y5U5NJjLbCbCVX5BXMGa7",
  "key7": "2f8bXY4xD8dzDo5x6rNm1K9xJNmMZR6rqUgerjqYu8NuUcuaW7495hLWVqty1toChB3kLk13yzBpJouQc2EXfRfG",
  "key8": "mGqm3BXbj9UMCZ4WT11dww6WYad83UubSB4UY8T26ZCTPtVHesGtcNh3yv6RhArK8RruxsKnxD1LcnSgYnixfTs",
  "key9": "cAW9e6X9559smE42cxM5pGRra8VWXCqsEMQo8SsgqVj5cRrsg6ZADsuxenZ9CBaZjFC8n2qP5o8odrNrdTThRFb",
  "key10": "5ufRZKsrbgTq6pzTZHhpNfCh3HjrrdHAHLiWBmWwuZa92FGPQv8urauyRi8xZfL7T5tULsERsS5GtQiZn7hXoKZB",
  "key11": "4co5SjF2NNYaSYoD4PNjUCWigjKnPhg4D8hWXPtFndnuWTNKrBZEvLTAsuXSQS2JuTp3hza9wm8K7mjqFGVZfQrR",
  "key12": "3JPa1yhGUndraVumgNSkBu4j1Y7esLhsrz47UaBEasf9ftaDBFCS9Nt8Lct1zkJoqJb1ktGFUcjVYWXqrze46pGK",
  "key13": "5i29KZ7u2BDx9HSjpwr2qPiy4cBkYQDiCyPWK5ow8jqnVmyaASo4iEyboWwJuycbPQ1euw7QmXAq3PEdx1VVVrEt",
  "key14": "64FZp38Cd524J6bev5GRUTTi1WcMUCdsomfTJgMiUxULNA52p8cPkAJQfy4MPDoz3mRGA3b6ZBm9MjvB73JW1udd",
  "key15": "3pCtc6MRkWdnqWHSoPuZQ9sz565Q9v8nmjp75W6XMerer3iEWxQW6bUKT9guoYuprm1E2uB6kShwdmBFYu9JvdjB",
  "key16": "2QVFqcqfpuWovZnUaoZgkra75Z2NPywmmXkPoMFbGwBVBSoh1pgE5sZD5GVspV8gERfwgmw46nq3zZP2M39tVere",
  "key17": "ywt23WB2xjucGCSnAs2CVj4hSqqb49XwZWKKi2Bjp37ubpbvhQi323fDUKNzt9xVznoKBsJ64kQLBLbwxM24nXW",
  "key18": "Pq8HEgVRyKaNdhLDEeXh1To6Zv9rnCqUEVHWSDVd51LEsAE6mfZ88ffRqekhB6SHU4D2pg5mrsdxR5xV9qfijPg",
  "key19": "2b55iuFytkB3ouwwaJsALv1EX5TJdD779Ndppnuecump1R9KhHVC7CmT6hdXvVAUaLbw8CjMdFX4E1gTU8ZcBDXh",
  "key20": "YyPHgzRNeW3UsiK4gwqfmFVJQXMHwAFbYpVUHaAhvYGNUbCVfG8Y4nP3RvBCxGhL1Z66njdmaVtJLH9KD4GEvQE",
  "key21": "YPJaG4pjNbRFKkaFrXQAErfNRycY76LY63CrBhHsHWjSESmnc6kftRHbMapmUn13YgKGqabA5eTKiEpW5TiV3ca",
  "key22": "53rjaj7acxpp9wi4DcEBbTViVptTied8f7AFPNTiMV2yKD5vcn2e9h5dFWfi2ukL5yFCLQz9dHTXXUWVdFFAc5rR",
  "key23": "3wq1WMPRo3e9cAwAp1FWJHxHotYWLKsPdHh5DGqQMW9XD5zgNxBSYoFLw4gUEKx8N1SnDNXBtYa9ewaMUse2vYqP",
  "key24": "2R7sqz5db7Ptde93zxbSsXt54FJ3qGJonVRKwg871H6nQyUfVbCdrjiRepiJj7gdwbDST9vTADXsYyBFPehA8esD",
  "key25": "46HTn2ysxx87JYjTtHHmi2nNwuNHkD3riUxqXc5hMVhj2y4ivoekr2bkdVew32UdRFPYxGW4b2KrMEBetb4BTv1H",
  "key26": "aKEJmuNzPb9qeg87n6JEc6UnZUeRrD3sacUMYRb3V5Z6xyvU8kepAuMUGzm8ynEEhzG6MjTkEGEXwo5LQKgnxYW",
  "key27": "4SMZPAJFjiW11MrcEB6omSnNGHtXdbcKLg5AHs1Dk614CZhJp2RnzW8S1woMSXeXPmT5mW5ytJkMXZ1CeWsNEMJ5",
  "key28": "4mYjbVL1n9j2xDR4GoSzCVGokVLgKeLVZtWLytPrdhHJXqmM95UogpnFbrD1yCFL11GeHETJZGeF1svv1FRooo7A",
  "key29": "3QjDW9xLSfoaChaKtEd7LTyNFeAScmEXb4xdNtoMJ1C7xcbnfsyeoMdJsgi8Y6zGHiBL6g74jwCvk974v5C99nAA",
  "key30": "ETxX6ALqKodowKoe1rcBBhaD2Sg4arjFfVNBxe1LTyfn38wUt4xnTzpPdo5VUG6k8MQqC3JymZEcSa9GPif4NmB",
  "key31": "4gNTJypiB7EFEasQycD7d8bGRMG4cgNM2xCVGfgZP2kH894p7ChH7s6uR9n8kcwTjRDA5DfSEY3Nts6NyY8ss3bh",
  "key32": "64KoyuUoyvJf5g35Uzya6xkbQxYYf4AKCJkZYaFicBKeFMCZfGxgAtxnEczeNX43FEj4DDiFHChQWzV6pApXrnBG",
  "key33": "7kyWzrgZFYUZVSt7zfbz45tEp5FRNizX85ZpYYqeKmTiLjY4ePYphFKP4wzXFy4xt1V1vR7bDiWcDd3ZCQsnCvo"
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
