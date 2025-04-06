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
    "49tLHEm9kZKu2rnZ46AwEwWPz3ohSznNTvBJChAtPWP7mn4UsqvvwYDJjJgq9XyGQnrraVS3xgM3w85hWd3cZvUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bc1tMJfS5JGZDcpo1axCmraibU4DFFw9xcnZT56uC8k6GjJPYUpseAwJwWFjRrC9E6AnnmX3YoJf9SKm6q4CLuR",
  "key1": "4mVTF9E74jxUWZBFLCKQyM8FPbTtphXpVKoRWqTvrNYZRpaFda2999WAyS8hsECVUTpyGGZzBb8NNqEwrcn7jhLb",
  "key2": "4zQE9b2qef4GzsBMfRk6ra8nHW5ikPnqHasTJadZkUkXPYTDtLLFd8cRxbV7LFeeQBfeX6wronq7gTxJ4L28dSnU",
  "key3": "3agmPVmP4MNu25JGBQAxCZgmUbk7ekD54rznxPNNP1ABPGHaVG6BdZKcyiDDAJewUypwmnQbHWbhHUVEhNT6wxiz",
  "key4": "JUE1XsaSws8qLKkqhf53N7z9LffpXEwS5mRw8QZMWcpTsZkcqJzeFA9Qt9UcJf65nZ9oCi575mNQeFTv2xk4wmM",
  "key5": "Y1W3ZNEE565w6d9tk5fQdVCjkVvmu2WSHb6WYoakfN6NXatXGuotubbzakeERwiZwAjvu5iB2g9N3nnS8dFHDT5",
  "key6": "BTUFYXVqpfJQz4GJZzVYz5vr8SgNjDJ3L7gy4e1UWMKbD1KHJN7NQvtVYEBrnqWWcUSYhpuicR13hWanoaYf8mn",
  "key7": "nrPiB9Tixe9kurY8Vbr18sCAivyXpaSArjodg8t48TN3JRBkdFF2Ec22d7oa8j9HKEmDywjGmP49ubdSMYC1Dq9",
  "key8": "GdmPtdLNELZ9Csvgie2ag97bbBxwo5RAH6c82tKeCm7faYaEgZJxF3pMF25iaGStkTvEZToyvSKrvRQArn6fets",
  "key9": "5jRAyc84GJpemXgtbDPtb7tszP7t7WLcyNnchbjdqunETrcBzbP5nQJoifSiRq5dboHQMst1hWTS43Y3Pe5ueXsG",
  "key10": "5CYdBhW3SKfXZeoYBhuJkrvXa6TR4a3QCiJRN3KSEgYvGCd6afaDoCqxnhrnqKmdKMW38TQtgVbiC2v1yj8FFpA8",
  "key11": "2gZPqpvSxwSs383iLAbVp9gs3qzS8iCMV673EnUBmiM9EZQJLdtvnMckHsWh5ieNoqKM7juEmkqF3qMPwCaNWbYm",
  "key12": "4dr3sMGQVNct21dUxKheXVLcuKdFf1HEhtPrCFqWsrrsJXKFMkcXfrr3vF2bknMd83mCX8f7xCWHyebdSHweJ4xK",
  "key13": "HBPEBJHTeBT8s7sRYBAaD7JgbbmFqoc1rSSZTjuCY7Mt2YA5cncL7ujL2J57NY1Kzqo8byjr4D3Qz8r4NEVdJ1b",
  "key14": "hZUJnV2aPFkux5KucMDkXemrfP1R4vSbWQBaMPnUhRCyK2CPJNEF3sC6UNZ3gowCpcwQDCbgNtWxjxcCeRgU7Lc",
  "key15": "4jXyzJYvz9sbMU2ZDxB79fQqMw9FpsKuXJkXKbjoi8vaTC14v2JnauU4x33ErVawkK6WVL11WJiMG1kSUxd9dPfs",
  "key16": "5XijMWobYFM66ifAKPQYZ3TYVwgDXpGpqHWzBUVb1JJ8RjvXzMJZaPJzuVyFfqex831tL12U8uSJKxDmuBwS8SiG",
  "key17": "4VT43nCxQHrN1fECWJsGqSB8zKTr8a4aRmc3AYheBhGMxeR6fDMu1SYFTCeXdcXAT8bJGXZapcYgvfDE7fafSucU",
  "key18": "2nm19UEsfBi1HrxeLNcxSDeVAdYDkwGDLGUhUKT88PqsinC4hGfi6rSChBUdmrt7vZRuZzDEh4Q2wbgivo4ziZWd",
  "key19": "43evqC8Q8A3RjGfqeYYB6PUjEV374BJYTJiT9LxetNtheUchmiEjewTkXBzm35coEfUMkUmiSYQEAkjPTC7jfNJZ",
  "key20": "4tTS6Sjuv234YXaksbRHDPdsLLfd7Rgo9ZnzzcZHFrKHZZy1W9cu9Ey97CJCeKy8zNcwPpbst2r8715Rk8gxSAje",
  "key21": "4QXWq1Gz47N1JHKVRMuBrcCz7DzsMxBSv2hamMKLg3mtCdX3Y4V7Pt2ZobdApStZckDXgLKJHJHS4AGdNrYZMyF5",
  "key22": "4YcSHQr57yzJkqo9sg3Dz99q3PpX8xCxtGTNzsDFJdkojP5Nee9yXftEWQukXGj1o8hefEQxEyS4L9NtJyqV6odA",
  "key23": "5fXniFTetMW15jW5s5Fb5ZPe2CSX7c8FgyUBXvzbp7MjyVdgeLXz9gDBgwomRpwBmVZauZaJqvTEGGPP33DgtxyS",
  "key24": "4n9FXwgBCDDQ3sxDsZ7zaMADNdTm1LtpZhFh2QyGiJvjgYG1UMfhwqF1nrF14G1ndh5nSN2X1eLgDPaxWAC42G3K",
  "key25": "2dDMCxzjjtrRgoY1qHSVi6ZNsaHzhEYPf9hdkCjmkvhvYBoNo2qmqMucgGfT2KDd5f1dAyyrwk7VNRhyhUCN5GAg",
  "key26": "hsqhqKBpYiR15Su3nwQRAsKWoAVE4EGF7k19RihL6sSPFhwjh5baM6PaocBMpAzx1eRMG3rUjvPpFYfB1faRXzs",
  "key27": "DYbrCrQAvbjW5txDFLRBKuu3D7uLGUwzMQcedqKwftNFVU6ePGy684KPh9DBSy8r7e4DG3NLhnLv34nPxzvYoye",
  "key28": "zFvUXWjRn9cC7aMWaDMgu7s4WkeAJEiTazFi54R2C5J4yf1zKsSKwP95p3172ruVeNcsqUqqkiXDZsYdxU61ZMo",
  "key29": "2dEqctHPWKfnL5V2naAWq4noUgwYqtxancEffucQCfF4zUHfshP9SuoBsxZgdRJE46fq9k5Hf4hyVrQGpACGk6c2",
  "key30": "DsJHHr6MYiqqYENrCT9Z5RusfQ66o6kbU9LMRrNdKfV3YW1AGuBig3YzYn1Xa9sNr4oghDLGQLuHeoRgzjysNsa",
  "key31": "2JRYPU9b48TpBLMTFTG5XERf8bbGGTuoetwHp35FtnP3eJ6ivxjejWWSEFzCDeQBc44JQ3AVLLARobntUh11UjKT",
  "key32": "5J5TE6g8C18Ypig4e2jRMsiV7bpy48gHhAtA78Z35UmHhXiJmES9GyLrf75g6FTN3A18f8bXE11RdWJGsiQ44vLF",
  "key33": "4Sjt5uEkXKSASCapDtjU2m5XzrdeXkF5T8DLKYVpMQpi4hZ3ZxerY21x3jMRAzZfLxzvE3cLjxUDvshVcBxRCEF2",
  "key34": "3oRWr584NtAK3xMhvZ8BehHPtPgHjGDYQLrFgKWNEfxWjvEwj99nsun2BadXvMPRBVdDDGFf2v1qVi55uTCXS8Mv",
  "key35": "Z92yBcM8nqwvK2CjuArDDUSgAujGFfNkmKcp4CDiRFXinf2zPsYmn8m1Js15uZPCyeRBpvQA3sM5aMMC2Sx6ztb",
  "key36": "vrjmtDVyzHTQhfoLKQL9kQYXuE5gxa1ixxSmQRCbW3xE1A9vpo819r5fxDq6uEhVzYcbQ1C38MBbhvj7C7b95m6",
  "key37": "e1dNiAnjSCUXfNmf7HUYMeKy73a9Um5iftoyNSi5mawkDe5uc7ba8XdAw8UKYNYam4Esxtg8ZpthXnNHC9jj2nY",
  "key38": "57cdHRdZW2DjCN1J3c3wDPT2V2vrNPJtt9w5kRp4RN6XRhC6pReMJ8iHL9UUH1VGFvVdwjk5nm71Aga8mthGYDv3",
  "key39": "478urycN2YWWHvNwj72MdNfDpefqvwqRQPJEHqYSiDP2BKaYE1KnwCX3XcBQwyNRzpYRrR2WzpSRMFRR8nj91TX2",
  "key40": "5F4jMKiND5oD7W5wYzwk2SU3iNR134UvN3U9pfNvz8fQm2CFKpeVpi1zmvxhz83DCY4nHSpJa9S5uULMa4GcU2tt",
  "key41": "5ryKkEfQpcPPTDF9RLc5YCYKv3SgwUgZ2fQDAH9ryNWBBPSgxQERGGqnKXUGV2Pnb8WPFnWtBq3E9jrq2tRFKd4P",
  "key42": "2iCtReQMiEXpA5hYST4rjR2Hjd8ff1tXVjYcJVTNxMbJQL3WQmpiZzHwtkMYHZ2zyygFEFN3MTbWZppd1R8tnrbC",
  "key43": "w5yvqij2PTpVdoMCTcUzaeSjaJ65jD9CuGoPprj7ZmsR92eUbYtWdFhgXqwwaB7m8CUwXH2FTE2VfzCdCisUTFu",
  "key44": "5HKN6k5fizyojaR59cQLPEvPn4ohKGZEKmLex1Vv5XtJ1Apd5kTu3SHEE5b8NWYnoUZRvvJ1YvFHqFnxe2tXiSwS"
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
