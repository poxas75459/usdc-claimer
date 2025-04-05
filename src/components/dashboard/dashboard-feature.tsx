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
    "z3x5rKUSAktAqHKhbBhs6dxpagDTtxQNnjfjzU5RCFZ6Ze3HKXAbSYeat3un2kpv3Buz8xLVKqoRhk9PRYtpDJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2emXeLXdyfstM17Cv42bD6TSBpxb76o1gZ921sfDoBuPp8TAUM7Et2ZjvrNaWPvxeomaCcE2cqQqhWxDsgQ2fcwr",
  "key1": "4AnuPA2Lm3MRGkaXpVsY4dcb22YqMTikGGWdXAN27qmMMpBuGSgShCPYc2iSrYWCFoqBHtwGtuPYGGWdV1TnuWWM",
  "key2": "4ENve6NCqtQGsSQbzcijSaHVNv7gVwxDL2r92NYKMWKz44fJkLC8fhbruijYhs5wnwZQtDNkpnxGXsbdLLyhQfk5",
  "key3": "Ev5sjCo1eV1KHkUFX83swq3xLLSGGc5JxYisphR2kSAZJBYNMzvFjpNHvw32kFx84RVxf8YPCyCKUm1CqWYTyrJ",
  "key4": "3LAAV6JQAHXFfXcGKke8zoVPKhTPhx4oTURgN9LznocP86h8oGE5JgWzkVFvH9PqBDWmSB5VX1zf8d5Qk8a6jW31",
  "key5": "3H58x7cSYbMbgM67Sc1yT3aNyL7Gt4tcSSpTuKS4r39gxsaQWEzf3hGtYohQsvzhJCwv4MLGf2k5pEZ8GGDNsWYP",
  "key6": "5xWSAeHX2m16qr4DYFy1KxeWHzdBXBTy7xLmhK4jyRq95mpWiqcHMhV74gfrA21iB7DS1MkrQQAbsGLXb1N32Nc",
  "key7": "2SiJXGDoEwcNCp9wtPqPzsann6GyrNuzzb4cHxcBjNshLTadU1XhWxUnHZPrAN7udsxEyrr8EXFw1nfLhxftXFza",
  "key8": "42FwWP7kohPyhHvo1TwYw1Rj8kMpLYxP1bLX5oP7sQ5Qsh7J5MAtWgswknc993w7GYi2p4gjqSgT2gy12kDeiDbC",
  "key9": "63hjzmZ7eyokkMUswmEEwTCjGzugjd8XgaKEB4B44kcYYHBrqYGSS7o56Zs9zz9YUeAG2RFeJFKWrzsMviG7cBgy",
  "key10": "5jgWAZR6CCreJVDhoqvQ149NGqEi8YGmrP3wrE9WYajueo3Eet6P6t4FhMuFBpdXBFn3WVdLTuRsdkr4TtDe2Bei",
  "key11": "5AhRCMUxscUwtAaqhKsbzvwnTH7FVQMp6Dp1y4Bj7Bvss3vTTFKxMditySefuJGaHWi1KBjdtJSPpsbbMMAuyYHb",
  "key12": "f5jdmquZXJBZ8fs5qTRD3iD9UzHXj2EQfTzzB7mRmFSo8no3mQwYiNcn9742Nu3AufqzGdoT2DxBoX96f6ws7es",
  "key13": "3gCnHP2BnVLz7xTqRXoJJdPnJxJyZA1RgDLyWFm46vRUSWssyfoBSuvChKt7oXquzP99XGqot1yWcwA73jPsDqu1",
  "key14": "wYJ9iakZRn2BTcWuQ8uMT4zbnaYdAkNPBaRS8FTKwYNbZGcZFPtn8JwBFk6sT8sNSSXnvRvMF1jMzh9KMkE7EVX",
  "key15": "5ZXjtQh4Dewgsfh77NFpaMVDWNGudyJmUhag4JLTFeziWP9i7X4iFUCgPTCJ9YQtMWFhC5QfoHKRtYwi3JYNLNu",
  "key16": "2zdB5rHDjXJpe75NkLEbpmQfg9wVHWKUcgywmTW44EpypxXFYYRC6ZmH6BwcCmrtxBBBuoYWWyJACb1JwdoSb7Cq",
  "key17": "3vhQPVbtNTxH3gxAhPsh4z87oYe3dfMZAC72agELFeXAQJdThXpLUQ84Xc57sHDuYRoPKkyZF9wmyRw7iJtxN1Ug",
  "key18": "3SbMQ1nhYjsNacX9ZYU4pEprmaDTvb4FTzbGc1fxn2E6YRYUe4d33cKcMsY4Md62VUANeGLNg2CexK4AyF4Dsu5d",
  "key19": "4nDTsNY76Q4zYjs3FjDoxqQbvq8PbEfNhcfqqPDgBMpBz1k58MCwpT3kpCkejQt375DtXiAHuV7DK4sAB5Zu1V7C",
  "key20": "5PR4x6xgxgC2jxBPiFcAUiX7a29m712rQwff5KK4PtNYXoxQn72KzmY96SRMNrjLSFZmK9gzJP1ap4X2PJ1yP2sj",
  "key21": "2ihqXpSxUvmMFfx2KGga3kqxgNbTouK9WBMsANpKc6W6VHC3WMWrJ9ZUEHUxRfWJcit1BKUL6BWGt6HRkrFpFPnF",
  "key22": "nUpzvBnGq178sjyDFMtpAdawPKv6SmfQLYC5LW4GM3gh4xb5PJTQu9Sua2musu7cPSX1cLknWzSVAkLwp8MFVLc",
  "key23": "nbYbty2cQy5ZWxLD5g5oyGnNWuHeQ3eskSkTpVehvNEXdCW81PYk3jZDhfwRM1DY7FDD8bXck8erCidjVkrJRue",
  "key24": "2wy9s7Rfo9AWrRbPMmZKyZoUe9F1cNgJWL3hn82M2mVKCHwLUk5wvYayFvXLZDZMQnt3YuXRkp6cfnDiHyAEbgcy",
  "key25": "bZiY5KQU8g4bSJV2TboUjzboQ47rCPcxYtXAqJF29Q1qQTWfw8kqFE2Ye82eWiHtC5af2QkZp2YrYfoRUH9hJKF"
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
