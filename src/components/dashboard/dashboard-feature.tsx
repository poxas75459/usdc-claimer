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
    "4SWTe5ZrW94vZGB6oekeaZMAf1yAULzSeJxaevtbLZWR3aQUTbxksxYpjfYvotAQ7vpVwfZ15CpFxGHj7bV6Xged"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47XXrM3xyjiCq9cgxag3StKqvDnXWmeb7f5ETUY2gE6R6u8HkvYQvuvN5Z7iXNSxbgKuNUVTBYu7jA9726qqhiYS",
  "key1": "61T4dLJmUCEDrFpR7Uk7q9GJBz33d4oUfDwPZJStSJskNN29ohDthLd4Y5hV4tQWH3wqJYfJ77aPip1FfWeSMyK9",
  "key2": "2LxJNzBcS3EzhGBEvGEqdoDHqQCoQ9oAf5YmLoy5WGkHpHiL37HcEVC4bg9d8DyZdhyaGw2z9yGDXQnQqJfxTvM4",
  "key3": "e31G7Tzd7vzsWgt1x2ndDrXiR8fEXjUypSL63PhtBHSXq7sA2nXAs6ahpTTzxEkfoP4u6g3ND5c6rNfNi79ZGrU",
  "key4": "oJ8Mp12gGAkzr7iKtRbvJGT7iA2j1k5JSGavPVSQZf2sKDPU2Fs1fSP5xnfYwizLv4vSyNPMNcEvL3rsSLDK3fG",
  "key5": "3gy8d8Mt2bswbUrzm9BFhYdGmUEGkz1Hqd9x7RiGLBCZfkLExQ77Ykk757ManYK86kjyuy4rNtpsZ6FzSMx4NBDV",
  "key6": "2e31eDaCTmgJa9k22Mr9kb3KZT6GC2anyaYAHkdTwjU8xpf182VyWPxiH4D2VkRFCyoeB3GJem6dnu3oUdSdcrQZ",
  "key7": "J61upNaLbJm8SjRUn7u3mgWEoA84frBzDSALaB46eFhQ3UdFwTfxnhUiEGGwa5dh5PZcrUHYxQnrzuC5n3DyqAV",
  "key8": "Gsao8aQPUgo2peQ8FPqCsqPkSQRiv1xGAggWCTb23Q3K4X9vG84EDr9KcUC5XY5heZMHMZM4S7C13JP6wKR2W8J",
  "key9": "4XckDMhxBRDAkawM9ux6iDtxYmkp26LD1NkNq7yCbVthUjS4uWQKUNV2DwX8rXQgRYJyQqwifpELT8oHqzC7XvGP",
  "key10": "5qfnpyzmzUmBAa5uA5xiFYs4dCwa2R7WsYx9VRwqWGHu9hU2mjV2MvG1Vz9FNr43FZC9hjbQgTCYHqV1TXJcdHfc",
  "key11": "4epyrVtTmBKBcyKfucwUByFattA8LW9EzWw4RyZPy5mHwPMBjfnCn9hVnzVZRnRmbofefVhqiz17rNXTZDSCXHHk",
  "key12": "3bUw7GjW9P8xieHWJDBi2DK69eCcRGgaJZ5XREDJiLNojLuGBmLFxTufUcoGJU6wP4aqSDPxdQMJ4bReCiwCVYND",
  "key13": "5zEy2Hy18exEM7gqiAYvut8qbyqh7SbPUBruSZrdR5nhzwJsmRTg1NW1YmVn7LKZyBHTy7LMwuSSJ9ypv2NDGzcY",
  "key14": "4HrsG7mupq7xnySWaa76GLPZnW3zRFBJTAePZn5p5zmiveNYSF1rkj2DXj49qneKWuLcvmj8Sw9g8ik1DzQ4KByS",
  "key15": "5xaprnPbnKXfyzB7dMA6ABSSP5myeRs5exMwiUuDHnmnQSLvp86L34aZYz9Z8jDsjwWTQG4wtdurGNjbimafg6aE",
  "key16": "3589JxXZisENseJRHBe1nYjfKavCya8FCvBwa9KD1RrykFdR1LSNYrBvhWkcQ4agoUgGVdLXXkdThhCyi3A3KxNx",
  "key17": "Cns1JcqUH9FNcRbw8m2kRBGT3EZWRpM2gdcwgRVoM26qF39C7AjsXQMwuKrT8Tf832FsPQ7bL1CPHjUrgnA1Wto",
  "key18": "4gCjRuwwC23VWhejMLxQDpYaAjzu1J1ny32wEPRFboXGoZj4aximzRhL9sH2Xfqh5B48MSLHC76yKDXTBR35JQyq",
  "key19": "tc2ZXYvL1eE77E1ivXjz3x3kYk7USNyBAdVmR6UxZK6mGn8aoQPwHHiuJAHjMx17DSKbnsKhwEkKexBD4xAaRqd",
  "key20": "3tdy9RdyaRKmsCqVjUmmjgr3PrLUcvbwbpSrAiSULydWD2CfpKtpEBdXN11H3epo7JW76vxCmf8CmkeaXjJeJzXs",
  "key21": "5HoLqTPf2wLYS2gQY9up5h7wVL6hHdxeMv7CV6g9T6CWCcb6nvjumT4K5ePwyHKYJM5xQ7otzKHEnKPru67CAToE",
  "key22": "5A11z74XLq5kyqMt4NHFpirEikf9ud5YLiFTpFA2wQ62qsVFCNdqV5KGCEzcReuVa56ofkwvNdqq4CiCMdTVCset",
  "key23": "4UdKcfTBt6Ya9EApV2gL7oqCvUaqipsxcXqHyUikqk8NfVKHZGs3gHoZfmt2KdKyGM2ktgZeKFLhnzgHCuHYfsEr",
  "key24": "MJwG79j1wKKYLLi8YKVYhG1ZX7Knhs579zXXpSKnm9uatweV9H7DitaCSFQpktQrb6WeW1ZQVCFqfNReDMwN6qc",
  "key25": "5Kx1exi5GKvdrBFh6PixVTeHzFbdJdTG1kuXYZuK2vkBCGauVcmmo59g1GmR8cssnuxRRZbZb3fKMvUKRpNxdvb8",
  "key26": "HFPUtpecUMKRdRETGJZbXsVPxnE4NNuAFtN3sWepX5gdYywo45XJBVh93yZ8CsMrGYbcgQQXd7Ev6re4kXg7733",
  "key27": "47YAkvUDvtaLUxHUpTzp9C92FgEpQ69gcaRMvVCT3Tgor5Nf2x19QA1yec4ZxBaSN1wwh39GkGs8XZpYsETnsVBU",
  "key28": "298ByiVWaCRYbH1DHq9WxvxX8941YnDsFC4kpbns2ajxiPWVdaNr16gevbHtxqCVdXk5Njnug7r5F4GnBAs53uJ8",
  "key29": "47XgFpNbfxTD7fC2MVtEThdEG6FNr3SDJLUxpLBYQMLgSnCDkXuzgA9zDjjFKnoQiYnufMMiMLP6fBD9QjLh8qbP",
  "key30": "5YB2TdNibXBgzFbbsdk8GZY5j5MrCHbD41SQqEvfdDLt5ZuZQnLKUoRir8NnedKSQebiknZzknb7p8nXvRwKWVLP"
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
