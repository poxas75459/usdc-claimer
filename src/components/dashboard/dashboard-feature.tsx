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
    "3DQsL3xdEQkfH7dtkoBHN6acg3ddpj8USUQtiACzGxarGNu9WZRTLvmWABoh3avnGdceMgFhZWjgnaw8JM6srn1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vky4hM4bBNDaz4pfvXkv67oXWLQd2cTdaQVbyG6vSjjWi9iGKKX6K89ccV3Kffge2eV3cq6ASUL15baVY5u3udR",
  "key1": "2pMaB3w8JZjFNibBMNvL5h7MFKWejH6AwzNa2UYvzKdCuypuBqpTUhnX7jDATU341B8Uha4wC7b3SiyRt86phu8j",
  "key2": "64MuRqspDcCLcKqkHpx66DRsBy9hybYFSr3LjY6RjAreLUzpM4nMirLzEhnvEWh7mcNSBvX5q2UQEbB5eNrWQtdy",
  "key3": "2Dbh9w8u8zFfVFZfU8RSJ1Ad6uyg5aeNMsown52sCa3RcXw2L7B6YM5Q9MM7L1nd69HcQMYFo6UhveG12B2BU17v",
  "key4": "eJSTXA7RQawpW8enhFiyAzUC3c9Uvf49wcreky5pkcfRT7nRgdQDuDwXttbfu2hnxRToyzqzeMwDbwJv949BykM",
  "key5": "581UNXJb3Grf4drAkpiZ3TY2WrZDUSrX6TjsYcnkG7LDySv1Swr7Un7ryeo652MnnRdAn85fb6cXxRtbvMDwt5iH",
  "key6": "2WLUgqKJJjbyo9YuRfsbAm5Jd9xgvaVRdJyvBQ2MxmLFRcPdT8JpVVbyAPoxMGeP2cbMQambWW9MfMRoZ3rWq3pY",
  "key7": "2Rm2iqQwM3NDAT6fCSqca6iJpcFpS55y9wVN4d5PtWjBkFiwM9jcjE7SEYJKn8YFvVEBc9P22xPyybHYjCPhEhV7",
  "key8": "3GAzdNEZ3vKZCyQ65ejegi93HTGJkqCDUUxBNvce5DKfARPtCYFeiJGGUDNrrGoX54T1wjtPVYcf3UcfwZVgkebE",
  "key9": "5ooHquyT7CtwoCxUUprcFWMe5nKgJiQYjszYx686YmgoXwftZ4vaYkLdP6qGUoB8RkSBdy9nJP3QP9XGHs1rsshq",
  "key10": "YekYdWRcz9M4ZPCRz15FgM51KDmJ9zkU1N9ZtDw93cYd7FBRBo3dWWCkqVVHjkxi3DKjEtKK4z7tmQHdBHykWd8",
  "key11": "3xibZc6gWUGZ3davq2KWM8WzsA56b3UN96RMaeciGtmFR59vuPs2CMpU4Lwdng6JnLgGTNamhL6tJKLVYNbuQMu6",
  "key12": "333hWcj2N1DMLYfSzVfKNCUeSwmPBi9Qm8aTkbUvbtjNrE5vF8meENTAUxfKugQiCmdKfo3JAtbjgMrHqdLFcDWy",
  "key13": "5mVXKdbH9wpPjSoafYcW8tmeJdAvkgtMhA9UJX3cBvrvm3exn7gJ5Z1C5zRZ55ZSfGxLdfTiboRSpvQTg5Co557R",
  "key14": "5p4s7Z5bF2HKWow1NJtVf6TrRFAi8aycTjCh9Aa3XM23sLsj44qLw6BCSumiWEGSVbWsowQFbntNqLXGrav5haf4",
  "key15": "bj2ZB3bZ2zskfEhFy9zZj5iiF8Ayn6xaEaQaPJ3TC93cDkRoUvp26LGCan9rJUAJMgt6NH9Wh8rzseJpCKBDEVN",
  "key16": "4ZzBK8qm2s3iKAgYhZthR2W4BcDhB2VzuYA6p4ieVSNUJ1G6eacS9FS79GCL2AS7ZUpS137ubRU3jjwPWczzi7vv",
  "key17": "HyJcx7iVEvA5LKfNGGedNXdmrLEsDP2uJPmWyXnUzEueCzHh5JDnUGCdaB2BTVvEnpWxhVcUDUnkh1NkcKYQGiq",
  "key18": "5jZcsATGrpmWvftcr1As8oU4bRJgL7Lpfqg1RZ3KFig74rVMfpa996h6jdc9RHbBGVPHw6x7v1vFV7sQ3FZpjEs",
  "key19": "4MPmw3dgATxqbaYjFuGVUYr8AfJQGkJYsDhv9DbYRhc1QD7Ha8b1JBXGFffBatmyAZfTf5eicxRZ5im3tyELHiRo",
  "key20": "2CzkULezpWXbLNRnFqviMf6XTx5WskEFyyUsgxu8FD1qQyRdnPidcbjGwVbzdPryxKBgR2pidGaAkLENzvH3FUpu",
  "key21": "5VnxqzJ1LkFuYtCbkJbewQ3gBtALJEsFQm2BoDYNvAj9HmyGTSkepXsvBi98MwtwDr1W34JbcSVrB4ewrngYQqS1",
  "key22": "MHLTftoXWKzG8uRa9s7jLhbfJgkzsEAzVF5gnbbJCw8fSktLwAfepBQJtmCo2gcAAWy44K64CGYQy5nXHbjJamh",
  "key23": "2x1FkyDqwHpzsMEjbXVmc9u8yDktxjMfZRBmG1KMmDxWTJ4AxnE6doEPsAWAzKDjNDjewo4DxkgWrggev6BdoBwL",
  "key24": "32z2D21W7hGrET7sBR3216yUC7EyhuhK2G7hhNASWaWTsP3D1adNTc2qkoFyNrYkizoMFW8HNvs2XnY4oUt5FsPj",
  "key25": "4hpnMLvbEvMmxvofCD4NxKyKHsKhTyQJpc1m3hBi2iV2xKPcDLA8eav7v8yZ4Z9duMpzHmsQ1gAvYNUmPJZPPhQx"
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
