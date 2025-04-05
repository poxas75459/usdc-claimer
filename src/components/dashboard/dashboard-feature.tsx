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
    "21tx53ZUDHgfiBaWimpx9H6YTwHiDoi9P7nk27a2ZetMRiBewMEq9E5aEKUF5FdJNhmDnPC1HgxgBWShRNXQ4vXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27MwQqzpVJhADCefQ5ADNw3NmaYvbvorTr5HmoB7sWrPw3TqSABLkkKGLdyaJMwna8WhkcL5uDUVRgPaKVpULoMZ",
  "key1": "2hSC2NfN4gX1XxCQpDEiK8CbUY3fMfuSWohhzgMvMXL4cJmUBeu7q4VtUrx3neJDYvxcH372WCovqCH7wth4cM5G",
  "key2": "2rtXGuvGUQb3mZC38Tu5VecJuQiWh1Re1pmygc1kJ7ghV64NSTPMeJKs9S8f1AJJ4mWByCAYinAAVKZprmJnVYQK",
  "key3": "4p13wT13B5cG4Pn3NQ8ahUvdANZenfSF9wRHdzYDMWFsMmC3DY9fSCb88qgEqbABMXszQexV5i27WH7Btxf9inD4",
  "key4": "2e7hcrV8BidAKBmaQJ8rfLgJXxFSz994vQEU9CFXSyR9MPxUFG1BwrHzqinZg4PGJdSakh5uUpuht2Hi7hjLXxQH",
  "key5": "4hYPgEPhigfPJEQoXXEws97LW2JrDxP5qo3ewxHPx6mStuJdTCgaQhYBjvNiUUsk6rygWL1QQTu8cR5aQKL5XHpN",
  "key6": "4yvQf1x2vS3A7q7ZtF73vT3ynFLy7uCGzCk4XyXa4yXSSS3L4Fe9oDhBiGtKv1sDUp288Y8pRu2qCyuJTWyt9jCC",
  "key7": "4jijNpgmFyZTZSG1rw3zWJUHKZLoeVCBcyB3K3zYMyfc6Scfh7S5WJ2bWVJF7rr3UMNp9yyB5MJyrWqSuSydHXJM",
  "key8": "ChN62LQyjWSQGLPYnQ9ezgqTUFEW5hQ9KJtRBgads9T2g8nZym5vtdqkTzb1MEH6Q7vuRcmXUHhJD1sMWtPWEWi",
  "key9": "2qpZ8FnTjvU6DNFbwAz1RRcK42tzBmJRrfEwmbHsUPQSyZe5Mm6k9TugZCRTmWXVHRn6rEHvUjJSV6rkttYcQq2B",
  "key10": "2GvBPjggGbs9i5sGRnf6wboSTs5L4HasmEDdPY5Fc5A3ZVpdLAHQaqi3z9269omZh6XvXhFAfrVmJJz7ujR2w4k1",
  "key11": "4TEskUiyJqq18R2ADdszzbVbkbhjQusgzcPBngfaTQJYsZAewXzAv4fcu6beGBrAxtTVauxGir4omCJuUGrh34Ei",
  "key12": "2DRsqnAuzw8m3WwyGLE5Yc5qPueCsrMaDBim4UtyNL5jsQzuShFvP8js1d9YmUU86c5hQpLp8YCVWBCehEajuVEG",
  "key13": "5JKV2GLsPLYxpTVqWx9mUvEBchFvvoGWXQRRYNQeThkLZcoEFqvik2VrzMMqXVfjo8YZTe7PrZrskts23skZ2r7S",
  "key14": "4Z7oB7Eik5B3QqB8g9fHNDaxgiXBffPjChP89NyYV4qbzQMibR3Kc1NJxmEhGP7s3U9x2j3sBDJy5jvZ78Vm74bg",
  "key15": "59mwSuH8QXri4Vve2WeUiqJrhR7qLXPpXnXP8PBENLohTrGSkVdWGS86QsJDD3M5JPcaGEtSdhBPpzw37cNXLvFF",
  "key16": "P1TYV1xFDdZhXdgMMoVbFeEZgNXwHnoLftmeY4vLrqwX2ZzkgewWXEpUDpwaiyk8i7tBALjRc6sZb9eFyNy6RLJ",
  "key17": "2KYFFhL7gyrHDnpSppkLe2xZBcEvx33pffUtXcDxNk5C3PcdHyLtnjwbsU2wxvCpVnxCr9dHabvPnvjAGRa7SzRz",
  "key18": "NRLXR1pFFfYL1pC5mALMgR4N46Pi4gP1z2U1tnckixzPm7DrB1umq6gyyfQLknZvgrjLH1FHKWSzT2Eg3gzUzCP",
  "key19": "5WhRUDcdSqyu39hohfkDJGqGhE81n1LhZv9kGx3fxRTL5eYsCiDoy3cCgRVehToRXAAZCmAs6tX2MPKMiPsVp8Hq",
  "key20": "2wMHr6EzoT6BbvTeGt4T2r3U2PVRjXJpvfqBCskUHPsfM23wDqtWJufsUpvqQ63adDEmNxyVHksk6UmASSyijXQp",
  "key21": "2AYJymbL8NkYrKiF3qzVwewCV5mMyLEvr88SsvsSg2aN7yRYQf2zvdQV4Ag2nZxVQbawfWWgtQDxkrSZDFa4dgA4",
  "key22": "2pLcVkax5YeQQxGTghr69LHBiMgd2MsTdW5DqVDX4gDoWFxfjbzoCtSg8fp85g47qmEpjJFGXQGMMdJm9ACrhVRG",
  "key23": "3eHKUBvzqaEWENcgfadHEhwZjf1xPiPq3iEcSU1CJnbMipyQvhwSP1JhqtTM3hWjvAvcGCzdRp7wdrP5aFGm2DNg",
  "key24": "5Js1nqo5iH7FxAWHArYSZLYuFnGJ2AxwbqzW4NCvu94qobnUATVs6rorfU52y3D1U9PtP6AQAPhdWGaghAb1VoXp",
  "key25": "5ppruJzz1QJ9xQgZXpWsKjiJAU6fRQNFLZ3i6sUCtERcaMvUWH1ZmbfVabRMYNSFxqLSZub1MBgcuxBD8cRu5Rgs"
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
