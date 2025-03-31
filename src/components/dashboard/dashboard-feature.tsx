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
    "5as6BqY5MahcxCpiRm8dmxNuq11N2QYmc8LTAKJBZXoxvsJ2o6TkSbrh9u8ZnsDJyBYeGvis9KQfvaRejsr9ArPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yvynrSQynTFCRLro5DrsaeZCb7UJ8JWsUrrmXK2V2xM6HAgMBpa4nVYc16qKfTgbwGdL64d2RWuqXukgSkBhgaW",
  "key1": "4cQ8dZTG7uK3j3ATJVy5Ezqp4bFhw1n68gZEigCREJW1EJV3Q3ch5NDJH9FXSwugZSffvKLFbqq6AB5cSsH8veyP",
  "key2": "2Z3EXsyAya3F6QcZoYtbvLPiRtKPHQuS7SkNxqNEzpAMgfViq4vyWPjSwWoFqs5XbrPSL2UbfsuXwzyVv2iDTEES",
  "key3": "3VvMzVLo4vWpHxdve4owKqNg1aZ4fycRs91NNgpsSvounpihFry3uitwi1uLJnnniqMfuGUKDXDY4G5yJos3jtWZ",
  "key4": "ypqcwVt8vgk1Frk66MRsB1VTXedqQ2EuPmu3aEg7VWF9ujdMVLdRvEhybxUp2sFJvsxbBjrtxn7VPKDpuJhqjJR",
  "key5": "2n8FQBui55aP6yyd1LfMMvFwx3cvzTZfgP7v1Kf2YFL9gQxKL1Q3gGR4tzNDdBq3LdB37ejNiHwejHaYs8F9obW6",
  "key6": "3mTYLAGbnVLnhYxcmTnDuGefq3HapAhybCAYpWY9sUKf6u2uu5SKiqEuWTqLUqK4V3pFaMmFGy9eDunKRv9H7Pg6",
  "key7": "Cy9h6nNAXotkUoKjqGMPyYNFucNFrRJTwjgTnLSv89USZpRYDG4t5ekRWerQHMPUKuUs9fHE2mpunZGcQFgp4Sw",
  "key8": "2aWhGv1kBWMzq6Rmdq6ZhtzMPXBEBx8ZEjjxSJujQtbjPY7qad3qrzwsgipkujmmCm2hpWXLJCEQDoW23GvVUFjN",
  "key9": "PLLkYR87iDKB3h7SSRL5ks3pEKYx3NrVxnnvuRNrKnHxKfaHcZvRbyTYqnW3hxeAGXzacZ3SniuGCiRLqTNmSca",
  "key10": "29sLYQhwguknXFYrNbDbFYaKibdGF2nvi3CLmTU5LBd8omrMjLZQBNjmgXtLs8wKpsVUneMrgAXvcUAi3nfXxygW",
  "key11": "668ZdZQUAYGww2xYmQCEMtUmBtgpebnER5mWDK8PxUmKVYmaAQU15a2SitygHcAmsRFoxA4hzAY43sdupHC31pnu",
  "key12": "cyXH6NZuyqRYGr4wt6ppQ1p21KuLPwXYU4VykRN1ANBTjwd98xYrm6KWi7iR26ppVvu6ioj31GhRgzQaA7AyGTa",
  "key13": "4fjLFcANU62xrVm8b1qe2z9jXakj91p6EEqTUzTcTzVT3FUZqN318DX6JZNvvgHXK9TyMsnoqMT4gUyHTX8Ngs5o",
  "key14": "3TRGPZeVb3dEQbSiNVdPBam5M9gyunaV7G3PF3thV5U9396Pii3Y4rmfHkaixMHoPVRTRQejMyoafF72jKd89ZGL",
  "key15": "4RavcUHWt2d4X7QPc1nm2tznn87Rifv5AxeSMhGQW7XPEeVWSpYNZs4FHU2BKJTXqo2TUQoUW7QZ1wQ3Pfo63u9W",
  "key16": "4Z1xZLtzhStxBsreQNRn319pjQZJHTvcvBAateXq3V8pCFYSShjGq55wvs6XB6VMgmrDgkZX13DYJB35v6s2hhnx",
  "key17": "4CxAVZ3EM84sXMsfL5j3yGuMHfZsMY2wbaRMN512L8sCMv2mXe2kSDBU3iqrHU5FhEuQAbBkZsbAniBSaBe8vsYw",
  "key18": "3uWCA7edzskdvCbVZhkZcBkZWxaMhPJJ2q8skRC4e1iLDcQsNyymVyV2qzX3WSHKet78NDiS34YBTFa7Pc5QRud3",
  "key19": "2JGdamLA4r1QwyYcYErjNPJxQcUPH3YMGC5SGzr4NcsdWzdPhmx3mYhxiWijVDgPGYn69KmnLA4MNoLv2HYoLsgK",
  "key20": "5HVeGht2GfUe9KLoXvS47d6gDgWim479HeonFLHrFxfKrbK8cZtXy2dHDijZaZx6W2SsukX7W2iepwTMxXpZd5PT",
  "key21": "2DHJhWX3fKax95dA6gTGmU1jdv8isGur137AaBiMr366VuUc4VSJB3rTWj3xgmYhzMSUFQY1KnifT8q4wTaALjzF",
  "key22": "2N41tnFbsEfch9PxrG5rkbL6PXjMugtkZKaUbDnWcF1bBEbtKhgJ4XSTJEgU5J4VmCgBNNb3jALmSv23vVKAc8Aq",
  "key23": "5T3wMiSUXPWYmoQeDBKYwW1XuLpjeE4piPLzgMpbt8PcWZegLsxyT1sgkj4TrG5WbhZryJU3cKTk8K53fJEwJbT7",
  "key24": "3Nuen9m7BQnAGNiwzWanpZgKSGh1rKTsyXY35EkyJwGWbzeyKVkZsK3A3KwayHAhymCZkJoTBP13taxJ7tnhXZW1",
  "key25": "5UDRJZ4Z4KAwnRSoAkT9jgxCHpt31PBauoc3mfJsg2w97Jw32AH9JswJtRXKzJ69c83GcPQD3zUzjCPPYk4FFYWQ",
  "key26": "2ZMomc1zL4F4cYPnRUxFttyN7RwtxTmCWsfDw61n6MKwWnWxgpRT2Cn8KKuASqLJtJVr26AnVQ3Lpi4fBiBeHBnQ",
  "key27": "3pq82f3n11wKQNABQBqmWVjQvCbFxEC2g7sm2p4RNRijs5KWsaDZ9wHAxgKMTftyNV2vWd3f72KG7hZnAp3TmZmW",
  "key28": "2CkWqZFEqkQokivqG5t6q2BsPAPCnMg5JA4R6JTpaTKENjjpkGymoYTKKo786R28mwE7U2d8w9knYkZg5U9k81iH",
  "key29": "2rW9sWu5PZiJFzg63ikspead7a9NrzrUSe1UQTdbEKrqvvDaYb4w8VAbxPupTEhCUwNtrYvLiDdEY6bbWsv8JERR",
  "key30": "5kbUrMznFPfY2zz1ACSApXGjx1Y9jKS1Yk9aBZffSFGzuzpx9fAmhWUmr8H6YiZerU5jY7wPhERsejC5rY1uFwyb",
  "key31": "5Mp3pu9RHiYtNkptmTf9zfkcimhatApxYqsxviSH8pr1ivRGHd6TsN3n4s5TyU5J2EYxpZzFMcedJccLSWZukbpc",
  "key32": "LjyFRT1xtSKhf5DFxoEDanEUTNUvBX9FyhkmgpwDCQrQJHn6y5DPaLyiYDVBBgsD9CJ8KYC7NfMRHRMTUVH23nY",
  "key33": "51brKq1CvgYBbwmyTjb1LMPjGDZkhMfUGMA4Fj8xW38cNDooJvhQjMuNsLgkcBk5jeMT5Z11UhXgTw5hRYXGA5C6",
  "key34": "2h7PRW5LwvdaVAKy1QFVigC2DCYenxZrxZYZFJndsS1LBbC6jkvrSLDwwHvvHZPbuBVCaxd4YPpXUEVZP617qsco",
  "key35": "CDrjiGUqF7T8Z7BxgtfkY3VaFGZpNcoAHjJMiSYpYA6wWJrXEbCVPTPWh9bgXmgGtyudzfpBA1pvD5i7n8f6qN4",
  "key36": "GXrgDdzcgNyAdrdaMrbQAiDEifVmFH17fsmNQRmVEJWhoSDRPtwK2dcm8FiHcCGiKTScUKV8J6MFB4MDyyUXuQh",
  "key37": "t9kWq2moR35EaK3ib88iaAJ6Ar2imonzZJBdXCm22WqHnnsSMb4ZrB7z3tpPzD7CvqWvRcJNZhjVtFS87JsvjCG"
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
