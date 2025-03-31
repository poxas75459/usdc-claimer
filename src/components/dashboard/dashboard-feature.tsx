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
    "2QFvy7iETpJTMPoG7sMCfo97TyRTjoXh5yenCgBs7V7p1csmAcf9AKfGwooAA9ddLz6eU4ECtSBYw65Y66rcGUM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qq4e8FTYxkAsmyJVwEoEmA8bT3JWPRwENno1vdyeojeZ1WgKFBe116TMesQYdLWtgXyHGrXkabwNXT5DGrfu3RM",
  "key1": "2yS8xwbpUHBsMhiwiobF3jnCzxXdPAq1eXq9cEZQ3oYRoW5EXx9X3DvekHuSszXUGdWyjynYrdFH7qwZEeh6iVbo",
  "key2": "3oi247a33wfcTmnv4pXJJ17FNkHBMwpE8evVqzKewG7Tkku5DYbgVMom4zrJvmPcrygZDGgTrk1JcGU1TgpEdKzs",
  "key3": "2SWtk4T8YcVatAxkmnRCva4DrPTBMjvXZWwHPptZqS8r6J3Co7hXqALmRmaPiaDPv85AyamsqFm6xufprsQHEWn",
  "key4": "2eZqQbZndQ3ax895iFoHcSd82UWSg9SRR2VSVbdeNy68MpUskvj5T1tJCwEtQwmJMwCBkQqomE3LQSrRAzaDUZLM",
  "key5": "3u4p2DRhvsVe7iFgwN99ykahUdcDWTLJ5E7iQsGmvsGRznNSgZNMzXMy1NwVY5dVjbcGYfnof2yNd68hVhSB7A3y",
  "key6": "5tGTrwRez7kPxiG6hUk1HMvHyJAnku1mLfgropsLUbhPePSvy1ycAAfmxarmNeaYH2Q9ankEXq5JpWETTzpw6hgS",
  "key7": "3wXzoBqTWnjQHzTnVEZsZTuRXwn4oB74J27ddNvvve2m9st8n6SqfsGGeVNoXi77Hihjp6y2mnHTddaHqR3teybU",
  "key8": "DHRuEkMVbq5K6RUSyun5VKSgeB4FvrbTMWMMhvjgoejaVj9AA3WojQkZFQocfMvr6h8YHa4xA8dHAZV1TmZ6vac",
  "key9": "2PqLMCT2jk1r1nN3QMwbAgNVBQBKNcNpVE9bQvkDavy4ezbarYwfBr5Pji1mbfTUgFSMUrK2AjPEB71FqgiVrcto",
  "key10": "3K782UojY8ScpiQYhq9cCbEStAqFEopiDtZiZqgHnrKqMfWB3eVaNXw6NAf362m9BTu2rnSinmzfMV6zqwzNVTB",
  "key11": "m8juZcRYr273eW3cmN866B4YzdY24UaouwLfmMzquAoVkTUL1iTQS3R6tHWr13bPMUJpAAZN8P8HCMVqiHPjF6C",
  "key12": "6edsfYgGh5JawuKsAAj3AjherE4J5qyqnaxpGVz72vxppFWJS7DCuBookCbyKwtqoFAiHESGidreRahfddc3hVu",
  "key13": "5VLffqAhVNd27E3ahgH87R2hpS3EngE75AUuqBJHTGPNfRAmP5KDimzmQ5j5MKasV3SVTYuVoPA4643WYrUfLFxD",
  "key14": "6PWmtQ6hk8AN6wcNGfo78vVwC2CfSFNzauhSin4XGhPTMbMGjfnRAsECMYoYBpf47zb88xBQvDFR29F31LuuT5Y",
  "key15": "4kzB9Gvbr3vvUYRBoqb3e2F2S4P3rvTiMuJPqUkPRwZnhFj8Md3vKCbL6cyXmiF2Tqyxumm56u7KTXKFyeocbxXQ",
  "key16": "2xLTY8GC4spbSJB2bMdYnHtMUq3mseKHmx6YrRD1vGvR3bjoYxpTJW98v48FzjZ41unzUdnDNXPiPzTwMWeHY7Sp",
  "key17": "iG8aHyR5xoqcj8togJRcMRhVEUcqMU8P6SmiURHVpdzafmCw3N5FJDynjwJTDJM7New3zf6qcbUGtkmHjjKesbd",
  "key18": "36AwMxVqoNqJNQVPvwRXB2nSSPt74waMBwowKz9RejaZLUQj4hLBArkotgs8amyDruBshzsKXGdHFodh7gr8XpYc",
  "key19": "5PWbRotCuTo9Q8CBxLpmpAoKMQZvHcXw7DzAYCDr6H8ceWv6n4dabNHiVt6n4vdVH2vkbjHE3fRcU6YiGkZvA729",
  "key20": "24bWUuB9jgsjKNxLXVDEd7req4abDfWYPmGJdN3mqWdFR2ubDBS7nYvvXfoTMyt5yuYvcb1ddmJUoeKBz8X92E7o",
  "key21": "8zobZ5jnfs4d3NvZetKP13v38eqoxyiZQGPuwxKQ5gDbfHJ8SQQEdk3CCoJUt5HHsF332vUa3GRJ4tUKKvog6oZ",
  "key22": "3WpgntPa9sQqocJrBhkoGAvmEogEAzfApqoVYTGGqD4XbcFfxFLbTSV2XiXqvou49fpASjF5dPtpVzqu1DfqBbu7",
  "key23": "3sns1Kv3fxqCdZdPJHswvvKbtRvWVaBJTaF1Y9VnyRGiQxr7gQevAZ63JJMVEqZp8stBSGyigajLamEgQky1M35p",
  "key24": "RiDZ65uJc4V3bfJy7Zoh9zuGTrSZkXydhceKGyuoq8Y1Bt31L4g51f1rBr8KuniyKdkk6ffbjsiitmPCBjcBYqC",
  "key25": "4EyYQ4xA6aidyJyXk32ZZ6pHhCm9wbiBwg5fD91X5MTq3tBQ543qSNy3zDY1MMzwnUAif4U7Gj7yjkBH8E6aE5SD",
  "key26": "2YpQK5Nnddq6ETBc2dN6BwiPS44c1KxN8SRH5fnkFFUxVHb3WzmvFGB1hq5wHjZTbXqRVi6H9DBjGXJtFsvKsaNd",
  "key27": "5a4xWwPwykWBxQVQ5xa2pVN5zskqpXqBKkc4zxki1Y3XZ36pSP5jJBER2HvQ6wEuFcpzWZzB9sLgsZURfTTrfgip"
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
