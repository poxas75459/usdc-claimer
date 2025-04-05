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
    "5T5kpLpKi8DzrZX2SGi83NCei6QUpJVr68ft7jB5LsaDepxsVAr8PyCyPBm7KcrQrKkzERK3atZPrdAFewHEQoJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fbqhwxAugKsJjh372xqyHaEbL3BA6ec4TwnFJPJ6tXLR1FnJcVnp25iB64fCjGxchH8m3nKZ1uv9MrP2pr4JCC1",
  "key1": "64fybGkdm2ojegeVoxu2gubvrb88bsNKcCoDPmpvtK9vTLJHi8P1vGNKcaXeHDcntDfiA6JtGADocQtx4ghiYDc6",
  "key2": "36GKFGScfjJ8Ne454p7uLkdidbpLXvDYBUeRaDJ65cashjWAgApBSFaTKYx5mAHYfbFwyQNu4KoabPZbY2KSM8ai",
  "key3": "32FLNpd6ifecUJ6UwjQdvAsimavoMVXaK7LxefUpsEygxD7pZXfY8sTRi8QqD5Do22Sf51z1DbWVCfWUMvBLgF9U",
  "key4": "26W1zcDCd6bw3trHTkwQVV1d2kg7Gyw2HMzxi5YHimJuRjdksgvDsXMx9Y6QfZAyfNy6xpi91eYra7vNDhJD5PH7",
  "key5": "21PqQ8zL8pvdJv718jvoVr3J3q3M8cKLavrHgisWbCf76JzaPj6TgftGcTxWgXr4tnVF51ZRKQwiQbvbvMqiihMf",
  "key6": "gV2VER4wMSw6Hw2BL2r4GsZXE1vk38w3yRWsd9VSxDQ2izJXbjZt5fK7tWhDjPppZTkdxY3jHWuAUc69FLLbtMA",
  "key7": "3b3PZ7R4Ut6nBkmJE9EhiWcU7PsTCip8vcEkBJE8rvAvCdbHt5FDv2kpZVmEfBaecFn9JtofNkRutYo3DE2rRKF",
  "key8": "4m18DDGs2fNB1NSAjxWZdaXc8PYa1Fe8DMcCG8fmfKQ41WbTootnmTTcHkEiMApJWNPBeeiuhFJDdmQudFJqaBgw",
  "key9": "4k1hW1oExJoCgi798zFwDVTuevQr63C8WHicEpSqZ44VjLkrXbJwGqg4JGuwVZLHKQJgJ8Ja31HeeBkBNXVVYbbK",
  "key10": "pgPqXE9prRR7xhfNtH1w8rteXLkcpAYFhNv2R7DAurbUu8uNGHTxxYDxZ7kuWALj85Y84uwvGt4uHmQK6iQR7yk",
  "key11": "4Vc5ChomjC5ff378W7QC3crxY2TSncMBB6sufB1E41TxtGM7uR2KKDi4UFgEEGhwviPViytKKfVQwurn4PnLdTYd",
  "key12": "CWMzY2fhqi8g7ycq47kPruh5zajvw8iWwH7ow2A1suVec2RDaYR4SyotGABd2azXGTGgMeH7bdXVZjV5NDJLtsg",
  "key13": "2yGQfqeLNNbvRX3WojxNTqbq1U3FVYzVEbC59ejMRv64NhAUw9mHe2SP4sWy9SPg5PBV3j2z8DUXFnUYgV8QsxAw",
  "key14": "5ajgTW7cKvUXpr2kkYdHY9Uw7sGJyPB7Mh9aaCH6MAts7hdMqgff6D5TUcwuMNP39cZbCGre25za4iTsYoqqspCS",
  "key15": "5gyprHskSrXHcVNtVHcYK7uZYSVGWan6SiJu64vcffEjVChjukT9RmH8B1CJLxxpsPvUSV9UDXC9F7Kxh4bY7C7n",
  "key16": "5ZjofMNNjm7GeqZu6vq8ytHpGs5JmR7BWfhh4232gkbHgumYz9neyQ7w7SqeNqi9BJtwdAyJEuWnnH2QiCRNRhGN",
  "key17": "37Ra4riZyTrWFb2KeC9Jk4j42UfFYhLB1jLiEJRArvm3KHfeBqB79XnHri4eVYSimiDjfQnGUQpGWmCwuHGiSBDQ",
  "key18": "cFdn8c8MK6xPgEBzxNGHnud5BE8f67txvavGcDg4boJVEsUUkomctLDyShU6dkdp7P8Kh1cpuUUWAtiDRPEca9K",
  "key19": "2k9hacLx3sSzdY5WCfzCYJbothK3Xnju8e5M2jFpYstqy33Sv8Y1fTJkBPvoc1VhvLgmG8bvaERTosaJqiWw38Vo",
  "key20": "5ko1D5ZRc6rjA1xm4AFKC5YV4MR6htL3kLG9jhfyXi7bcKMmnMWw3rbhgMAQiWx1D8SKDNdjGrAUhbf16yB7cYrb",
  "key21": "AkPG8UYsc4BLPbKCgX6QEU4x1M8mGqLBWRdkmZmJXickhwtvQaiewsffA3KPmUVRdZA2kVfuv1PjmGXkopmmQkm",
  "key22": "5ENJwDow3s9sxDtPZocFUWJEQsDAEFVHwUy6mgH2Dqgprycmn317PBQimKaKUVG66Cd2axudDBrvWoiznTS8pT39",
  "key23": "5RzjxWBwvaYGsGNc5JyNNVJC54mGeEPKPR997BZ92JTBgxyuBNFHCL11HcT1s8sdjRDHkwhyhNoknrSs9Lc2rKKJ",
  "key24": "4rMdVZchqzwbdwgw5u2j574rqinPV8h1XpViTEUZN3zVd8MWvHmYHALQifQn8JPjaXDbbLnEXnryVXhueFffexwz"
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
