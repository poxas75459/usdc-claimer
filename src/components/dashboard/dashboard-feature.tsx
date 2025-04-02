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
    "Q1zN6t9mF3ZNS8nAcGGhqFUy5UHpD5EHm1Wvn49HZeiLj49C9BK5Naiv3FjgNxNEGD8Sv8pRch9fX1Y4pqgSUv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ru96piSykkn2CjZ1beDZ8dBS3MazKTsiskC7yXfWbZVQA1Nse6QF5ZEZTc19RqwDX1Af63frsSXQMLEXWPttw2S",
  "key1": "25NJ5jZkJBoCeVJ3EheYWgRPZtzgpVj2FrKyTr5DfweVSn1k35DzLt4sNjtpVveMyfzE3jJep7sRvDRbAGEKVqKt",
  "key2": "Dqx98daQZ7NYc68BQCJ6rkEoskcEDGccPvHbWAE1V4JrApSr4FYnbWTy4P2KSr55TPDd26jbADVjzh8KA6Pfqfb",
  "key3": "4MsS1i3ugnLsKj2BQ8JdNFq1fW1WbzqPQaJGEK998mqBYm9Bkgo9mmfkCGsKsbgUSQv7ZyeKrD6F3MceV8uoyGh5",
  "key4": "5mqernjMKZwrd3iSENuxPDzc689gMoMpAAqPAXvj1UU9Hh3CY5ivpkY3YLAXBB6RLoipGkXT2THSBnR2rRy6CwEu",
  "key5": "44xiqKg9aei8EPCTYMiQzf8x1p2Sq8dakCddqQErJfDJYwb7tnF5mQMZwUp1oWH26Bg35dKsbfeGM7FXpwcsxkbQ",
  "key6": "GCG6HzWYh1jNrfFrgmkGKbZz4RjhVP4weSc78Uc7nAL5KFnyoQWLyqxah2uLuycfzvkFpDQpuo9fKn88Spv8nxg",
  "key7": "4gsj9Ny3ZiPwnDJVRT9tCwGt1wmnGkW2FN2iueAWTYu9ikETtzM24cXJ2ca4e4Q6hShpNpMacJ6ME5Re7NrvXyt8",
  "key8": "4Z3H2vcxpcGcK7WntWuxcmB9JTm2g1sy87cujp62ogf1MLEtdpA4qNx2nnbyMaUQfZNDtUBb7ouH7sKetWJTPpQE",
  "key9": "2gsqx8CrR9o5abfyJiap8iEBYvEbb3FUgs1G2WSwqvAUm3YL6JCuREWSe51CHLyKWkj956XasBbH37eJjBnMUcp4",
  "key10": "YsHDJyQcJ7DdzEyiSsdbBwp6wZfPBJSV7KkG1SkwEFM8VVFApYSyghrnxmXbsGBBxjzXDUNufdUDjg4WMbuTyk1",
  "key11": "3rGoBNMhrm2Byo73Fb64D4vx1aHP4NMTCiruMCdLGP98yyxL3vztcDMekwY5uZZJU853JvQw9kKkPkc251SHyagE",
  "key12": "2grbFtvucYxCzSSfMvKs9U42sSnVkwT5to6wU9uUja7MM6yAaqk8vN3ADYxNLaHdLGHBuMBwbtYCDyXhyMKhvCLr",
  "key13": "AhKHjn2e31qmAaQAR9RSaRUQSAC6jtyAdrXzEwjhT4NFfz4xEgJiMLBBYZjvzFDCxnHsEDpmhr7bcVideZnH96Q",
  "key14": "5J4QBtyxujMxQzzZUhy2G7cdpxBuZUbKDM3y5etAcy7LSnmrBPLBmrQ1FSn6R5vQvqjJN3BHXTLDA4jH7FD77Pb1",
  "key15": "ACUmS3Ab71WUub8N8ksLh7zJwwXArdZ5s6s4qbVKRtA1skdwjeRYZLFEfBujV8UAqzx2F2daTVpRNPeuZJNPDtw",
  "key16": "5a3axAWNQ6DMrcnXHszJZwgDMoeN6A19UNGi2wGCiYLH1BrPBXRRsc1ZPosoFNwRALbKnFDMZLLzPY5vSsihaP7Y",
  "key17": "3LYvMBuH1HhFUWkiYMwp98byqf7cExkv9puLJ6mJaFWkDpJgL8vt2Z1jbaPXUKjGcMRR8ETF1tngi5uDvgBbaPuD",
  "key18": "5FXddUjzAcW844PZFtbWwSnax6LpGjLkUF4EuQ63Fm1EABSotrU3CLMpwhsb69K5spMPPKTiwr82jPLVtsV5LW8z",
  "key19": "3GHga8o11LJUTVhkhvrNEqSyTyHCbqBG6q483TAn1Yq2sBg67hRJS2c1JFy3k71RGtjoQ8pSGAUYvd7oMzK9J9XH",
  "key20": "xz72B4WmdDAWrMs9NWLRwQtUrZAdUZKu2A3tRVpYSr1Rye1fFfvTCqWtnYzFyVVbLrCi3dUcvq3SzAUdhSUnENY",
  "key21": "2NUfpEn4AhiB4NNzfUw8LkaUaJTzjfC4Bx26Rbpjbm1e47GnF3EHbk2i17ESRKWn77tSji78yvSFCbBaCBHy5TQG",
  "key22": "4jDrHLq7KVakVAKwip1tYASZh6zSRiYLA4VnBSxzzuC2ry5LpUrNsqUpYJhtWeAv7SqgYuibnoko7tFFrjZcgw2A",
  "key23": "Qt1PbvhJXa7o6vUNx8eyoBhpWxLLK6PimEHfGkR6ZoBrcomSNx4CdAkbXRGXDDtZ9BQwTuvuq5jKKK7LThZZvqd",
  "key24": "3wkUVMHkzVm5HBdKsUZ9Tb9MXHtmxCRQ9rVGKA6dqLcd1z8LFaLv7TLbtgrzLoUJSbUs19YbAMjvi76AFkH4z5u6",
  "key25": "3rH5oa6RhzAZEmabfbbekPZ6wPgdcAdXGK9bASaicX3HH36SzSXTTAfqJYLessnn3XNMmdmnXecAwzmkaMrNgaGZ",
  "key26": "5u94Psb1yo6Tps4vmeocthVjrUV4JWfjRTigWQ2eACKAdXSjGcemttwGR54nTW7k61JnhSmWo92HD8jCrwgxtBN3",
  "key27": "2ci9BpgCh6nkdnUcmbDRK9s7drUzNKGUERo8bPynj1bnih4wpX9ybJ29u58t6oRyypKB3aHSbkbuKYfqQFj4G2cm",
  "key28": "4o77eCtRFyHgmNxKHyTyM8Qak3m32hnQh5XDNH8mUCyuWELQnaXQzCXHphZQ82EUME77ePodXxiVAPJEEn5DT95D",
  "key29": "4acRxj8RDzf7TaDYTV6JQFHYSNras13xHy9sLDL93pJ8wdPvyzebisqPJLncmiPkW4Eg5vCnb5y4SsNwu314omke",
  "key30": "5rukZcBL3GFCUSXyfD3GorXMRLoqE4EFdFaessTuMQU55Kja2WytukwF8Hk1crFgCYrkBymYbHu5VYuBKC3jKMiH",
  "key31": "4r9wT6FkeWTVX7qQVBFNvk3dGVADfZ8kwW7qnAveyn4s4oXRLBFV5eCVwWWH7q57fmXQToTHnKC987p2FiVGA4cM",
  "key32": "5wyScvRKhnntJKrk1rZucJh32F6fBZ4dTFgqxQd7zT3WrLExADPtmWhm5F67FQYnmesWEASd4JX96nyPd3rd43fA",
  "key33": "oxBwfpRRQdef2T16Eu2tDww9ccauk2Zw8QWjps4Hc8gnzJKA7S1Bs8j6gUkc3Xe7q6PY5gor2HNEoTqi2MXuNN1",
  "key34": "o3Q8vUTTtc8HJkjhAbTbHCczuj2dovWVFvbpG4PoqfXZPniPUgUVDf2DvCAEk9XJkr4e7FDXaMA6D4cZoieVkF2"
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
