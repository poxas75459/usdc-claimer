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
    "5UsfuFRo8MZDgM62PAE8jhmv7gnng8JTiYr1bhnWjbCSkqNmL2M3RqwtAKRKWhxYZyj4WsGHpXzd5VkBBpR5jGLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qxHarHYqGbz1iXryDW8UooTiigDjWE5LajoBeFF5RStRpnAinmYYmepJaiaG1331cutBysJ2VUci5cEhq35ca13",
  "key1": "4eCLgYa1Z3nArku4XUt6mNEYS3ujomktsKVzBEj9GP6FrtPUn4fcsk3GpCs5EFE9985SZ1owJzgnHrZtubpZepa7",
  "key2": "49zSzrxXCALcs2a3qYa1nqtV6Xwup1SZXgh2LrV6oFYFvMHF3HeAs22KyNmVmPNEAau2sE5mKe87nxiqggsFeuAs",
  "key3": "65L1Bb3LDFYiASjk742ec72P5xPVsxuYzsSfzkfJGcGQ5wDy76RoVCj8vvLrgT4J4JxvHoAYVL9KEfnbdJDEWY2d",
  "key4": "62aTFJTnUKedvvj6rqJN4qEc2ceNa89YpLGLrNEgGqZ2KfeSPiKBn2V83tFgGq6nzi987LYySkHiY6xzYDSDYsH8",
  "key5": "4zMs5w5v5mPPCJxo127pVcAvjsKG1ndAeHCmtKKRP9cmxRt52jYqXdkzyzt91GkgbwZjuJKHGDcLMYTu7LCwhVo8",
  "key6": "5dpufQ1waD5Br4dBNMxT2K3TuiaVKWVTQBFuHicJsdLqFLjE35gKQuQeNCYs892o6M6rBXYKGv6WrVKeLen1Evh",
  "key7": "2nnfrQaHVWtitWvzuDB9U8iSpbvS8g8iEPnAEoyaHMijJRn73W8JPbpDB2ZKwXMWtRwAKajSjurjLmyhxpaok8w",
  "key8": "9vQFvbEKZ1PNsM8nS14KTRXTF4JzGBy91F6BJ8cqDhd7kLAxM5RiCPA4H74aSqDYKpVZ1BG5PBHjiiUMExkvwz1",
  "key9": "4P21rqtJWg4y5CjkCUoJSgA4ouwNmdCxNk3x5ZmqksD6mGQJcQ23x32UTi6PfdY83gBsAa7UzGuqVkkrpwb7vCGu",
  "key10": "4R2Y2Yx7xeha5i4vbC9JNEVQMpFBHZNTBUChRqUuiroxaGuYbdSh344XrTYLugLWnDQxjj5775TtPDNM93AhSBLV",
  "key11": "4MeAFMes51U1nQNoAqZ5APapELjjJgzsmbQ8ve7oipADVvTdQ5rr2qK2ZNekEozPTqouMK8Yp6EUhTfkkuczLc2E",
  "key12": "5e4rPN9Uc5DK7AQeLDAoT46iRHxYBEWXyFqqjXzz7fD7GpFMaNKdh4ygp4pzT9wKCcTFgeZh3TB1RpeTakNck4YX",
  "key13": "4n96jN6MvJwNeiHfF6Sg6TvHYKNvJFN9Xvq2o6FBVueBsXDxnuJNUNJZnz4TtCfKY3DQn469SHnq1ikCG3ogu58u",
  "key14": "4Z8dFoTqZq4SpxiUinMxrXABiDqCdX2bG6sQKEpA5F1XDi3Nnc28HherPrezrzUbQc37W5RYKhJPmP9U6Kt8fUk4",
  "key15": "3rkBPnTaaeCH85unxeYKpxu2j2mXwMHUhtbgbt19jVSz1koEvaUtZZhY78hyRtDZfmqqTXXfddzcVbdoKUhKS4wR",
  "key16": "oEYkieXPxJZpb1zBPTTpVMMkUf9nATnC4aHWHyhBZFpRyA5CnQ1kuNPXJChoU1cPu7P3iWXkxqhCksH9k5ASUhE",
  "key17": "2CJQNRUs4YdNhEWmPv4Fe9M5GbjiV7K5Cqc2RDearunvhj18jsvi9ZD9PHmNd5CcAYNP1B4D9ADMQ1DR3uot44fX",
  "key18": "GA1K9eYHKEyaD2GEcymZMLBrgLCqSQspofp2n5FNFU5YTdrRVjkf5PhnS2biFGGvJp8oTfKbGiDUNKepoNDug4H",
  "key19": "2dEbUysCLgipJBRgEGRgrQ4uAUXALVpmWHVzq5pTWomq4XcUzg3KQMRvxVRiMs5f6iCDVTX848uc7zbx5t12MFao",
  "key20": "4fNKxm3GTrJmX27PLaQbqXmeFskMct5Fr51W5KQuAezB6cBNDs6GRHTE1ftXp5D2ZQ1snmtR9GX19CrsYCbnfPbw",
  "key21": "zx6T2jborM4mZtCkocon2edzixXreWyRsiH4a8XN7EekNb3TEy6pZJGZkN89tUNju6MyVdVzccwxbUGB3nQM9qF",
  "key22": "4GvUwBYQZpqz9TserooEKNvtPoRmFHiN7JeRfQVpZJjWfScAkkAkvP56oGVpqfwoVZcQkRDQqTW4B3rSqd5nd3Pf",
  "key23": "VtdtuodTMns8hWfX7ouagV1xbvwypvoEaCPiLpBKgmfkm1Ks9GLRVoTJ8ahGJv25zKLwskzu7whZ5srUUg2SxjT",
  "key24": "4p6MrCLXDL6FYfBmftpyTas3AeSMwRww5XwTmjUjTErxEAfBGpURBNQ4M3HukQw1ut41VNa1UEqEREZ8xZNm8EQT",
  "key25": "3DUsN1AseXyKY5f5XeXYhdRd5JDzeJGA9oY7kVykLC3Af2wPmYn4H6z5EKFKZFzKk6FrwKjeKSKEbA1U1bHibEyp"
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
