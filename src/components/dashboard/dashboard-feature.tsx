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
    "4qzR2gsGKKkuUVhvbM2GMc6y6YreR1kwDwo3hppBWLptJQErAh1BWLeq3D9ruV6jSnEkKXfNmZdiVmrVEH7auMxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d4UoGSakpne8nQGCViq8CLZUK34sCgGytr7JyEcdXKVxQH2uvwEZULJctM49i3pNEB1wZc3L9x5QdnXY7b7n2qA",
  "key1": "EeYw9NfJe7EDREgkpjjB7ZWFoCQC3hoA1rNUikhfyZu38v16xmeaeRWhk7GvzrVSftCwaa6MUr1kYzcDurP5KbD",
  "key2": "sXLW7kGYWG3vN59Za4s93Fuv2M29FZEFCmWimPmd3P8KRCc1LEq5xSz1CcE8xMPzTe5NBMyursCAFTs779XRcxK",
  "key3": "3LRUfERFPFm3z1Ba1VHUmeeEMU5oAqjVR8wWJmKgV62PdLi1dGQNsvf2T2Xw3rsn6PcJGWSwgAKCAojy9mRjQfKb",
  "key4": "wF2mTzKa8rXHWqADopRCrF2gCJ2c8C3yucNH65GJwGji17dQuYNBwwbXicCEpSS5bnKaTNf6LLgunsjBoS6qYK1",
  "key5": "62QNKpebEVcEcmGF2o2F6Vdp8eQqPTU3WtkxMseRbjHY5p4DMbWJXojEviKhCXsCkfTQ3prGXWtgzmz6YLf5rsT3",
  "key6": "QNaCCh25htk5vBJfzneefQEuJ6SQXAtVhG8GQysKevgqV613dP4bxmwrGUhtq5WyHXp5wgsWhV4weZTEximDCLC",
  "key7": "5DuAH5o44fxS69XQYohCWUMt7fCSwifzaHFmxxZoUb2b6n4jvbHY7fKYZBDFEeNe3rnwdc8cQE9vDrjvN9ZLbAWg",
  "key8": "4fGyrpwyUwqoFN8er3ce3aVieAedEy51P5oXjUN7MtxywUq2M72wKsFZV3ZxWt7otdZ4mHVyEmgcR3wQ5Zsp6YVL",
  "key9": "5cdTTjhoNE5J5BD9LcxVqgj7pdzj3dWkzsuvhWvDtvqKF5BeQF3dwRChh3vR5eHYSre7965ii48qhErRSnNpF9Wk",
  "key10": "5EnLQwKq2XF2W8MrkLFBQzMrhyWEoMyQx9cFPiPQ5uNPgQRfGvu1Fx61xjimLh9YsJ7D2pac2Hi1kxHrQiiwJ2CJ",
  "key11": "n8REKu7Jy1t6xcqb9b9YCMq7vfYxsUW3UhSxvheTBHmPs91KRyq8DVGNMpcDPN4B2qDHAqbteBUVBQfqc6bBLfJ",
  "key12": "5ionMQCHwjPVJ4y67ahppkUkfbmPhrfBYSCSVNCVAPWsuujQtqKF12V5fYkM6ptUtw5BHx35QsapThmUGtXzd6T9",
  "key13": "5Pw8kdJHRD3GcgAA7mn8auwv9nH9fUBwQFMBFcDF6KnK6XNxYqtraqfstnanTgJdbxcKhcsYkQp1KcrNQuhauoki",
  "key14": "4chSLbWVBaTkBk9DDStH7puN735zzNxFp5bPzgEA939BGCxBGRhEjtJMDLC8zVsJQJRkssbKwGR29Y1eAtG17rr",
  "key15": "4PsKifSaTcnETNstCsJfwdcPnPQ1K3NnMoBPoZA67yLpSEJw5NYfmNHvo3wGWH6xLv2gVFPazTjwE9xD4jhJQwtC",
  "key16": "51gi1VCuimT5rMy3HkYbM9tSaxBp9sAu9oMDCC6tGnw1oSbFJfNSWiRAidfPAKH4h8NUyZT7NayPeqg2F9AJvbVb",
  "key17": "5onHaL38LnVJkyFYm3v2Qw9zDqvAbcxdnu58qPZZFs9yv5X4FMnHG8byY4dooifWVYDnmtnwpUhjAhxrSQk5vsSF",
  "key18": "W39sF9ciUDnJzaR2DLQQ4QeYjgPhKmLKYPUfsTKzWdR1b69HQhAX2UQ68i6BctgBfkt2yAvF7Exbp2VBqZa3HNn",
  "key19": "5mFzSYg8mSUxPcvwrVMXE9BM6oW6atH2oLSz7LVZ5c4vEvaERn4jiRf6WvT6DSFJVFFzQWrkZa7C4ePBmzSQwYFJ",
  "key20": "2Nts7EX1VNVKu7u4AZya2Goo1d3JbF9PcnFX2cFiazoM72ErDehsvphd7pmQFcYdxZiig9BG4kcLFsZFuHrq4CVB",
  "key21": "37FqERzonKiNV4Vb5r7pCTUVme85DvYmoVVXtQWHpbh7Mh62Zx4ibXdRU7CLhoCTMCKWASFA4XUx7twUChPtsR6V",
  "key22": "5BHLfGjejibKy2qM7hSuRPgAqa75CF6LuvaJuUGtBGDKkvsQvWkUrr1f9FSAoef7yyiWa2UrSsxcK2YUVZi3edp5",
  "key23": "5ZwSyLWpCMJKgwkE2fQc3vBRrNjw86ppiWbPVfTwHyVs2e8VcGQEgZfSXzjb2mBiSXWy9hdruJGQbYYUFSgqeM2y",
  "key24": "5oHJYbWx6FtCKZPsDXB9XDxASxEWmDPf7q3KXakV4p8K6PspE41YgH79gzYtkayLj27CoanQ2VKyZ3n52VuEpHS3"
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
