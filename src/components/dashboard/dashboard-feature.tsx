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
    "4BNhtNFNSS62H1nSv2A5d6zcJt6yXDuZN72qTZPWYR8Vm3xd97H7kMNUeMFQmxajWS7zmQQfv4Y1rqxL6emCYBQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ynTZFXsb24jSdh8Zg3CvQjuAtjNN43cE2phtUYUe2G8ZNjZP1xACKhNBD83iUW2hLrEupvVibehhWMqHio4EHVB",
  "key1": "4ZK5q6oovnmm26KkA5FJYwt93iYkXBNXzPKEAnKDUFv2ef1p8Jg5Ta2CtqcXR2e456ifKsw3iMe61T6CanshPXcp",
  "key2": "5TPMVqcUTxRrYVCoByMwdrXNRjmWYTbi6jr2kLibwwuLUvLBoW54T7znjYMmMTe7VuHtb5V8jZzxommYatUcC2JE",
  "key3": "2cE8ymzkVsShSZUEQBj3jZdsx2Ejtsk1knPFba46pPrLTNoZKgrqNgdcoxbu5N81jD5y3p8g5vAx6J2PjGKD9JWa",
  "key4": "5iyzH7gwYk5JqyTvasSbs698pwnixAckPm1zhRABSgGM7x1jCBG6JeFaCmqYRRZ8MHNV4rXMEiA46ybaHT4Ui3ZS",
  "key5": "27rS2uikrft587nnD4175KDc21Fh3Ls9RQ4b1AGgBzkVLoTTM1SqjBuFwfRXSg5fHp4a1LTx3GHtrdP5ZL9VeerP",
  "key6": "26UUYGMyUDvVH4NiQxJ2VaBuwFcq7xZvBhm87tyxYos5VasczBqJobCUVYpQyJsMFJt1KdY3QK7zfZs3G21MpaYk",
  "key7": "h8omMQsupuSjjdz6VQM3oBuXYUgoLcFLL2K7JS2Jwk4L6RXPpTT7ymx9AwXmwX4ijUecBNMK3oSWJ5DGc2eHniE",
  "key8": "VRuj6XdzL8BZ1HMvYqmgGoo4oyhoWeLvtjte9hhKfjpts1kn6sqSgSPqqgPS6Fb9JHkjeP4cEAChwcKAzbGC1ht",
  "key9": "4c9DdW76BPnQR4EhnPUmEzbx8tMgoBjwkQsEZPYDMUHBgLGmFwjk1zVZnUpJMS1nu4qtTHDxxHfUZm3RcE8n2yKo",
  "key10": "5ECPSnPs1oFfzDQs1Vc7G2WfTF11K8ESKBfWUQDdwtHsJBABYgNrATUw3Gn267n88T9YHB4AD4gxDTRzGUGz811r",
  "key11": "gtPrKzH3PR2g7aJm1z9NrSKzyc3eh8xeaKXXDHkdWi6v2JjQAMHMDaNzhqjvUuE285sp4qKwLKSMW5hMpunZPZQ",
  "key12": "5WPwmcqNrmu4EX9jep8EcucQWYeL6KUtr8un6ruYxRVnZ1GgQtuLm7b1f6YSA3Xc7MHzmeZxC3EJLAUAmHChJqD1",
  "key13": "54Z3uYoxcftk23PAUqx8L12qfRdzYjJnQG9yv7eciERYc43x5j2uAY9WHXzj339Uc3y77hwyn5Qy9yspqxAYRPFi",
  "key14": "5tLSLtznrJjUVPSSTWLL5ZQaqqFrsqHLbijAg1HqDVXhNxpQZCi7PQfruDqQkStuKoC1RXEagteQyyeNGgE2qDQu",
  "key15": "5zwpuJC5GiUy4puQiMLZmarKaTU5nTGdwGm9QKCFxuppSRKm9MPNcMHVz3UyAh2neMvVWPAksLuFMjE3QiRrDZx",
  "key16": "2W96Hbpoe5oQk1UGs648F6pk9Axq6eu7JiSyiSK3zqELC7Z9niM9s5QHsGWGauuzWSHmjFubMeR9A86cC1e4yqXK",
  "key17": "2YQ6rhybEtyoKMPfV12sY8u87ybLVrTH3Ekb6GS1VyeLWJBBMAdZpWVJqR7gk2GB5gJK3fSNHyxRq7SFUPAx1oXn",
  "key18": "5qVk4dC6pgLPzSrDKfSzgM8s6fEVNQzvd4fBvMrzV66oYCTamEMi2CkGc5yPrLmFicVYSTpyCsg71BqkL5scuWyK",
  "key19": "56W2LYoheVS6BMohnyZ1iygq1z84dGq6QGASr5owhc7KQfz5CWQMYKCw1Evr1Z7iQQu4rkakExeN2EepJ8ib6o8H",
  "key20": "7np1R8TXQDRUQMZgoLWiUotok1yUevw9e7B59qhQ9Hy8HMh7kwCb7ptYqkn7uVKFpEvPKayr6bW92ELny8ndhgc",
  "key21": "5ZPyJ4nUg8rPx1kmJn1bBU5tt3DEzBSuPJKZhYvsoKuwS3r2edvXnZ3KAu1v63Gpvv2eUDfQAtQsDdaB8eXXK89q",
  "key22": "419p3zMi79t86mhAeLQ5PqMgJvRo8vgJAK78QbURTT3UiCJnUEtAeRgcJtLYgfScyDP8dMGfedVG6Rq14oHLevEz",
  "key23": "25ABwv3LgsyueA7wuceoW4qF8ZrVuXTtiyns64K6UxZNqVHnqQDsKZMfsxM39RiSKsJ35gxWt5cC9uCPYfbGQbeJ",
  "key24": "5HdWHpAvioVxG4PvNaBunuHd2Khek9QMpvGwhyo3cPi4iReTUQioFxiwn282teTQVFJrP8LMSqjn5aVrcRHtCsrr",
  "key25": "5oVJMPbnAUEuGieHihHSvgRRCiZSfBrmRwayHJbci9KhHu5g9b8YPtWEmuwJjmYEtdaSdjApL2Cv8ivLezPPHBrb",
  "key26": "2cwKgQhsFT3wkkqYkfxJ665Pw9DJLQSryaf91AHa2BaDC4KKoSHiUKNEM1QBJTSJzpDAb4r1ykTXCYBpPBbcCSTh",
  "key27": "4K7WejXdm23twffaGmbtTA9xYytEebdTHrC8xNQQhtbdDXmfkvGyT6nsDkDSBR4cxYkoFoDhTZoCBTVd64zGGXeu",
  "key28": "5oVyFMrW4ia8EGfEqfLqrg3pdqiqvZECJs6N581yL65Y1oZcdsZ4ppiqMFyjrwYzAp2iproJzhJDxnPniSZXbNiz",
  "key29": "5auNT7mQCcofw5c6kt4z5Ps628FL4fgFRNHy1JYdN2g4taWsEMaryRU3PGRe4NoYGD3ca5LjEkCwdsuMzbiUdM5S",
  "key30": "5S2x7r7yfTstxNCzFUuD1kdqYfdLdordgwUGMxB9GBGVnL8bKdFsA5tv9vpjM1CBUG2vQzFy976PhJc4dBUD9dt4",
  "key31": "2J9rvx6coimwfYEtVx9BRkphMiHJJKbqUTkLU3HDgjGtapQJFXM4Jv2vxJsNwvwosXriArSXXswCqmKm2NPCuMd6",
  "key32": "5PmFJNgYidoGzfxGLSB1w6wzE7ZyPSfob7V87Dw18bqisWoBSMvNMrBhoJBGRiC4ZLEfXjDb7s6PaNDxN4WNvKMD",
  "key33": "4NB77CKmjvn3JQ2NFURu7AnzpXj9NEEH7grA1Tk9nSiLD6Tmnguhq5uYf9zLABwoR95vwP8c6XnTkHakNp8pyDss",
  "key34": "2JduULczEhoPSHgHXqpdDjeDCr5c8y6uEL6wATPHXv5WPHMWAxEi2Qh5Vozpjy4C37CKTHS68Vhdd5K3x18g97m4",
  "key35": "3t1KQ7LezxoXp2BGZXmiiZSBuGsrZ3A2AWE1EmnXM1fP2Y55FLb9RLFFeUp3AzxFXAJWzvYy6H7fne6EPQFLsKqb",
  "key36": "4aCsPsR8HFvKyYKyumwbUKhPaftduyQ1wqgHfYSBkNXH3ZmgsR8wwKSTP76bmTPVCMCDeY2ikzG1a3YUd5c9VuBH",
  "key37": "4TE7eRzj2utVYS29kx72gfXLu887uLMJacAfLL1DYf2MGBDbmcbpkjCfTuZW9Vju9eWsTM7wktzqAhzSyMwTTMF4",
  "key38": "4za4s8NGw3mPQA1XmezU9rHmndjZidj2i4K1YTjPdgxagwspXPofddd6JJe8GkGytBJem2kDckWScDm75pmb3UW1"
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
