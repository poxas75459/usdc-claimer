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
    "KR5mMc9Sf4QgaiakSnPNhnPkFKmMG8NnaWoechtgcLa2A1tzUoVbWcKRq1XPCfwaBhSZEaxAF6QN2rN4YDzoQh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HJENNCtt7WKZeTsSAXcNW6fCUA8qiBjZYLwgH6VQ97HF3LNXqmvP5PB3ztubQBNCFof5UfMyQeM3XjdnTHWQFzc",
  "key1": "3VFy4D511GJAiZwV82ByyWcXs3UzBp3ajEDp9gPbYJVvg3QkBt94hKUPXRQYwa9Bcwu5wdyJw9Q5WccsdCVJSEER",
  "key2": "4h81v6uLN5p7SZCmRCLb62LMqBERV1iELgvKVrtoCtxixuFFbePEqyhi2k4KgqMVxTTCukWGSPdeCxMR53bYo2Gn",
  "key3": "3M35e1sSkCgRWNWNducp3N7C7Z2RwgaRcDzfx3EWdBjpEB1Wn8aEoEtDvsewhzqJaNTM8P3sjLezNQZDCxeprMi9",
  "key4": "2ipqs7AmLuTtNULCnw3cPreogtxYWvDzq8EPXcHXq756uNUFX9Fr5R4nGHsHV8pC6GQHrfJVGEs6nGahFqs1NiM6",
  "key5": "Hxhg3eB9YVLTGcCGMLGeZ75yeMPHgoPqNUkhRvq4AmavyCjVFK8WTGdQWdFd8bpRp3zA9KH6yTb8u5jMEyMvame",
  "key6": "5iQQJtT8X1hh8xiDysZhPkdCptb6qg6ZDZwr9nHXbt3k86CZGXCaZKzawFs3VY5gWmSuwAffozawuWiWrmYkgzNp",
  "key7": "4HPq5Wa8uRQBRppcpDFW57yb8GAAJkJqJMLGjZDyat2RiYKt8twg23KLgxFrShyapHTUFSB6vJoGVnCTKRdTBp7w",
  "key8": "3wLzXvPoGY58eFNvVVJHNWQzazLpBSJUnaeyXiU38Cq4bcrvcKKdH6NnTuFxTDpPyX2ReQXdWeYuvWvuLSdkckMt",
  "key9": "3NdTLYukaZNjGnQyxtWdRjCXnEA26bVHSGNXLW1BkFFBCNVeP3FutEfVpkVPQHi8iVHmpYdpDCnCeRGBZFTDwWur",
  "key10": "7moXBThCC2iRJpMHeWHYFcwZLhR775f1LUoHuPGLYsPW3o3bD3sCbag9ndzfu1v643fxUVMrD1ttdYMmT2S5jQR",
  "key11": "2PisviMmd8gDxVNDgB7jx2e4GJ5Tz4WqmPLMsBC9Fcyuvt7UurjmvvPzNbK4b8b4vyu2p7HyCTb1dqtyJH6df1Hq",
  "key12": "V6YmbqtxiVdXdX2UbYCVVw8MAMsU7BpGDSUofckJd5jZxbwqCeNpN8ioPg9BowgaezSfdK8QKprviFcSeXctrdF",
  "key13": "45TyRWJKSb4tgpTSEKH2BBkdUzaXkQjkMoqC9uQKq2x4csxUXvmMr6QmenEVhdgyQJrfC5Q93MudTa6WfofjFDQs",
  "key14": "2RVCereNg1XU42iLgu4kVMGmLkBtFjoyobGBBhRtaJt9TuxsicUEqUnr2RaEYDefd5AVN1JPhainS8rqdM3D73e1",
  "key15": "3qzvJjHp2Dw7oRwanBR3FvqSdksdFQg7hV4bhKteCZZWcsPnN3H6yHJYhE5U51ii6hYywh8QcAe666fzGLsRXzxF",
  "key16": "24Rers8Xgko2F7dh9XocF8PkMXts8UgcPAU83YwjyQCQW3PDnruAPG5zFP57J4nJekPJN8M2ZqznCbGub4btLmW9",
  "key17": "P9MctMsaYj6EX1LFHBPS8KdW1FH3ZMiEWB35GyhYuSpjWZiA5b3JTMdT7a8e4x3Z7JG3Uo2pDSq3SHeBNM8WdCr",
  "key18": "3oKNS76xnPSWtVz9CiVZxrr9xwcoagffvduaKDX8NsxvfQAHQSx1n2ja8u3v3DoMapxHT1cCUCFRQATLZkgP6ESC",
  "key19": "3VFGrGEwqEWnMDySrCSqcjSc14TmbgVp52QaKG7bv8XEtpzCwpY4rxT6cWQ9BfgsRijmVsr5bkYwJ3EXeX52f1j8",
  "key20": "5huQtsC42yRP8ha4TetfeQUieWp35RyFsjh5fzoRvriJ4uCRcaKjegx9da8TKMhi3vPeAtGt2rYNzVGZRC5EDcLJ",
  "key21": "4JPwQVWRAQzGvAnggJxMvjuHuEqkCgv6yq2zBB2pREpFsZ1DW7VrkiS36cdi5bTmnGjv5vfz3ykVdc6RqkM5BTbv",
  "key22": "3jfdgsgHTBMByMWcRiwMmtSPjLCZKfsJwgSWsT8kkQNuk3UJtswVYY5zXrPFZEYeHaq6v7sWg6JphEaphTkzuSok",
  "key23": "2BDECh9RQvugQe73CTYGMYQAUyywk4jBdG2f3tJZejrr8PQYksEqfmuys5aWNp2M7zw2nnL1A7rzdodwzBsucjPQ",
  "key24": "EZCN7JjTuhkGDFFwmh3Tf8TFuvrhA8T6zSm4UT3h6gcocDT1ZmXu2TnQZ7x2Uab8hDCoF3FWRob5fnVDaM8AqTp",
  "key25": "icpfysaiKhLPxY95j4JKG3cH2S4uyCSCSWKBxBe2AHrLoWkL7uurs2kz5ci5ob3NUKRabu6KhiDK6CNBsMefswC",
  "key26": "SC8XfD93F8ZuZ7rZTcgLKJ7Tkb3gXibFZpY1cdsB554UaNGsponE5SFjTYcxxCJcQ3qc734siBo4Mk5Dyrtypsv",
  "key27": "djshX5ynZAVqGiX7idHTabvmVHW2EPBahPSH6r1qhTouKnApfy6RqHRMSkSBXgz2oxMQxJmxztXWJFxXk5EYJjs",
  "key28": "edGvtfVSmR2eq2myK9gzT6i6JpdLXoniEMzP6stjVdiKFkiXTmBgDj8377nWK1tx5RTGHCfMFNzjXzekVY2QGEW",
  "key29": "5b4GLfZDj5LJgPv7WdSCfmBZVVeaN6M5oDr6tJjNFuAgmZYd978woksm9FVVoNrADMojSd15AW1QtaCaSE7BEGzq",
  "key30": "4HNqQoq6rWiESynbPhc1AHLjXQpo2pWdy1koRM611htRzbWxpFxans2zebK2X9iuzFjPLpmRy7GB6g1wMZX6pALk",
  "key31": "dXB3gKu2PvDj3tVYFoPrkvzm85qXssRc4UpcYf7X7oYVp7gHa78zQmjihfB4r8HHf7R54aqurUtRYGmK79CP1dw",
  "key32": "5g4LEBBnt7wAh84AgAKdPLqysiVikSRDhTbesGvpGDBMVRGxGTYXxMSP7Uz1T1n3sQRcmVhKwvdcimHd6yhikD38",
  "key33": "WaxeuCMHycG2f4yx2PajMCLLmsGgiBRXc92iEm5Bs3pb3Qt75dAiqcE6ujVt9Bb6mCkVgK1amQah1ae7oHD73Fa",
  "key34": "5aDcdZijSeXtWLLhs8Qk938GW1xKL1kp431JS1QoEqB2gDr9KSky3hLa4xLusESRLPh5a1dcCvrDwcj7fr5vqhGj",
  "key35": "3BrR2YqabkYRXHPh9jq1nfET2ME7BmcJ8reG47FP1peaecL6pPVF6DegRHNxSwGg7kqQem5iF3BuQkRFFuLWXCh",
  "key36": "G5n9XSzzpE6ZLskYQTzUuGMz2s3qKuQ1cFSCyXXkfkG6eYnrAbnvMGQB7kwNaFX8UKUpFCUcWMNmh84Lds1Fqjq",
  "key37": "2LEc2EWSV93WxJBFVyBLeVXVHp1RKXZpFAk714CxZDCqfq9LVt2fwnWWizcMPBBWSkVvZuTtNK5r9cJLrG9A5jot",
  "key38": "vDQe7o8LuwkJhd2YKF8ZHia165QjNemYSSN7xhkjsWNtQiFFNTmiDSodybLbqcvoRpWUzNK1HTu5Ko77uZUQoF6",
  "key39": "2n1K62VKe1aRvXpU5iSLFCwk5wcFiXs6e9G7Ti8MJxHvy6w1qrA7XDGdoQzXSdvmtjz41uVFUPG4bSKEdQtuZAn",
  "key40": "2NfyU55m4ehY4dB3nCrQ134K1nEe6jeaJvMFu1fU2txpTJQWocyUoyC3aJZBVGhKDyAfNpNfpHfM12xcXTG4nwD4",
  "key41": "46YC5jedFiEsQGatCWPnNEXwfkjNhMNeYpTQHEpvZzmA58L97vtWB5nS2kyBK2xp6UddDUBbfmcjf1LwZQBpPbAg",
  "key42": "rUfiMDLgqfvNSGUhzHdBBZJvN916MfgcLstpgqZ1hjeA7kAW9tTz2j1TnWwAEXXCgU8Z6RqdvxwHDyc31JQsMNB",
  "key43": "4L5uggowP7hV4B8bsu5RoBkfaBcpKx9Mxef76HGyzS8VbgEPDfhfRbojyHF752xs3U4uczE1xHahcuCKFcCwsDJE",
  "key44": "3kreG63LYbqS3HkEHkVLwscrnXvQyKbB99d6W2kWjzBDt22WTbUPWSw8N5JR9QuJfoTvvZ9ESnwRUUfBwgeB56T4",
  "key45": "2oe3FrpvcBbnr8v1yPEQKXuRjciADzWV23Qn8natPZ5AJto4B7AmWw2NBiz8EEuFQ7Nm4RQfMGAp6R3XpdLEDugC",
  "key46": "4gqaiYABMFCAEVmBLHi7aUmPAYBda9SLRj5TReBipbs27H3dR4toVb8ZJ9udip3UPtDbmVCb8PiosGbXrXdbxart",
  "key47": "4XQaobxSGNtmff65nHk4AdZzwDPaMvYp2EctM3jJS9MkFbaxEEgUWr2LjMBfacqd7NUD3hZYjJFgzGAnnSLMARU9",
  "key48": "5WgEJhym2wGPE4HbfGombYgpRvQqfJGn8yGF2FKH6SazndPNdiZmL1BLzRSxUKqwiZHGhKVym8fqUMJ99kMevpnp"
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
