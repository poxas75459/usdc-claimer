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
    "21xy9prcN7YAXtNEaRaRBBf8PF5yFLt18MYRuVT5jAUWaHaCyzhDM2UGhAbUotQBewSawTBaREFSo2m4nUueSFQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39HhGH1brmc3mqTQzmYbQpfXaEvGTpUJm6RRTjBhwrwfsYXfUw1yYTP5Z6KVCWBPUQfYVhdJyzkXXqMEKoJ4hwLy",
  "key1": "326dzSt4669WYtZd6XDcGt9dBCVU5CszsY2bBdvJuE6s2TZudpNYH5wYEQFQirzbStQF2EJbVkAUmud7Siaa9MTX",
  "key2": "4cWvvC7VwJADLV91vMRpM6MLz5fNRwC2nQXdcx4wDfd52euPbrhnfrCKZTTeaF6GwJGtuyHqK8Eturk1YMuofBjN",
  "key3": "266DboorCABNnDxjiBSN4ZKP8bMSGzTdvQxCUjK2w13peBh1i2tPcgCUzfV76Z6ZDkP5omw1d6bmRSkUuB1sxDj6",
  "key4": "5kBqNw1NFQVuBPR9Cbs5odwXi1RceZGJ3aKSA1hDDa7QdYfdqLoHNdwTKq3swH8TpkGhjofSLKiZBGm1WU9Z9bpT",
  "key5": "3gycGhDYoXwxQbeapQ7z7eYpbkPUjm7uTVJ9KPePmeyZqDmQS5AgQUh2nEbQ6CFfUmsmdy39WWHo2L9vUt82rVBQ",
  "key6": "5DkwCJA52uYsAoNkEEyRF8x9oSwTm1masx6dEP2484inNaGp9mEjLZDQcT2Ha8UMiVxrJADp6xNyWmMr83VygvBM",
  "key7": "5FJD9WwLYNZSsqzuZyDivoiu3yZCtFmRRoa9xZir3ExrZ3rgHR1Kt2oU6LASQfmG5ZtWtRdGncAPKWExAW7mjvzV",
  "key8": "2p5qaGyf3GcauqSmHL8SG4YDYNPc3QXRFcHajTC3JSjR9TrmYTHL5St96FQUiRgBrTTXrjkiCupVGyfvjpL3y1eL",
  "key9": "48udqGC9edTADWq2pwuYnwT1vrWzmBghz78kj9BLsUu8h5XWAGHACmKCWVFfHgeGCjR3Gu6XFVCXVo77hwvTcPZq",
  "key10": "2FS62NKELhH1K8WiwKBB2p4LPwHV3zmkPvG7moxE8FWQBQErwUcqHhD5hBEgEWX2JxcEgtEZjnmXwrFC72ta31nW",
  "key11": "2Z6zxs13VjTrcQPRQsX39ebLoZKuaY3mYk3tERMtdyHmhoXCFLZ1dWHpoy2RnHBFra9vrQSXtRVNQqKqtNCSwZdW",
  "key12": "31rAY5TpTQuMvetKsX1r7LW6ZxnLGhMDT8F2pw3Gp1DC1iKbDwJL7q2AiDyVUCpYnsCXTSqVsTG5DUa5X9v1S4zx",
  "key13": "4XfVFafNiABHzD6FbkXmAtY5Fv3Byz1FyN6U43ZaoWPTboYYKHnKewzPQTKNXzdDW8DUFoYeKm4Y5tUYJMesZWUA",
  "key14": "2iyJR5w8sd7sMuvcb5ay4geLoshHdefNdXCXCAxHc8tiyhJEwc8vDfQQEm4UM4bUYWnerbBgkkmKkgAyJ4yhi424",
  "key15": "3sbWoMPVMFppxXHa6Qj8KCx2vrB8aPHFomhbFZiCwn8GoqQQ3hj1x3zLotDk77SeNU1xhubU6Q2dRkkcmPTUeED",
  "key16": "NrE7ybWi7BTEnUJkZZ6tqLNojyeYxMzk7c3UGvCzhZ5Kf1i5dEUrQsE4mhv2qtfmsZX8VqtD6qJ6X1qBh7cRrac",
  "key17": "4bLvntTakh3FmMssjrYp9HWfV9aCfQ7TSffgs7io9r88Mui1QVAbJydCcEsXLU18nPRf2kiUWYv7EvhosGCLvL82",
  "key18": "2wTXXq2SfvjSAZQKKCCf3mBeQntasLNLrrjm5t4ECK5r5MfroV9sRTqktW3oLSjRrwBBrXbqTzrxTUwyDde5PZ3E",
  "key19": "X1tQFDx67JWUCtXiCmzHq8GagXm65SLwYEL4Ke8jx76J1L6ctj6k5RdNEhDTR2tLupZdenitkqoMEH7Lv5YNgWN",
  "key20": "5UvqdUmkcszQVHUnouSUxd84G9NT612cQ77EC4RgMbH2v2M3Wz8UsENS8PKAmY4LDi5iU6ZvqjLh27jGZabDdNZE",
  "key21": "2LnF7n67bm8WaGGFiDq3rffSVgqD3AyrNtsNLoc4DQhGmTrLLB3ie6BFQNVXhEpScM5pARqnEQen1evYw32Arg6g",
  "key22": "4CiboA2qtYNWWs9FaijV4h3dU4rxQSber2RT1VDCKD4yoLuAHoQnV1uewqi5qNSamN9cfMnrdzpzU4WYvLaYuQQj",
  "key23": "65wuSpLvPUpbRtuDoY9AAVcPjgR3VuxKPUwauE9s84TBkZHXsNHwtfH8m4CaYDoGNiJPVYEtMxpBNWdes8CA5rwT",
  "key24": "nMjfw5Eu1khF5G8pq9jd7e1ZSNj1txmSJt7C8iKeeMRNhtu7oBhkQfyDSCwoGkWb2ttRzd962DCoou5Udrcpc9b",
  "key25": "Jq9q5M6d41roH5e4eHEe2pKT1iSRLhU3NEJExb6FCsv67MB6T7Uf9X8NEydpVaq8Xs7xJXLYCp3ybjkd2k9jC59",
  "key26": "2xwJ6E2mR8EM27cJvC6WYUQADgeewnZDQHQBsbAqXebBg3xV8StqBhf5m3M2NHbQ7tdpCK4AZoQMKM6EYF4sWvQX",
  "key27": "4jrqACvKXKpwv9XVpXwZnVMbAdyhuPeXrFZR3Jzh9t2KNpXzXkgM3rPQkPZu3ZsaKA5sPwVr9HMBFdvT8KmFk9xP",
  "key28": "dq6WyRVfWuEHsjHCa8GwajYsLmeeAHZa2ki3LFswEbgGBaKZUttWiV7jRcyEABxa5ozRtCcH79RKjFsetCTPXVh",
  "key29": "64khMmgLntKopSrrMjBJKSdenzVQqeYFramWKkKEXfU25Woi6CK2jrD3Dh3ZKVGrZUJ5jVKs9v21GAyDNPxg5LNw",
  "key30": "4eofWqnGiaJ6HXXxGGAfLNKdSRpoeJhZ3e1AZ6vTvppKjNqGKj8g1DDBcLnaYDgfURDnCHL4dRmbuJ6oZ1qiRd4u",
  "key31": "73LmQ4avtizJTSWoFmazE1m6mCHjvFd1JdXC2eZ5RLyQ54MWaQGLXwP3y1nSfjdLM3p7MArJdYhy9tUL2xLRCqo",
  "key32": "38vLhb3viDpy7r3nBcFnSapWAswYdxw1dvs3CFnYNXTTgH1DJiJieRov48ia8KAr1QxFJXtwzJUzpQi8bx66x4hN",
  "key33": "2kStLwERcEJ6hj1XVATKzhaFjuUyPumUaB8pjDG3btQECcmiBBMiVFWmXr3Aj7eqQkxzzHsrKACg2FT4gwAjeRHQ"
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
