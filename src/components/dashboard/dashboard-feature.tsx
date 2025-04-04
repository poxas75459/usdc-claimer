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
    "2TnM7xRNFPtHxLvzpgTqQC4j5ynqwBDJ5hvP5MBkf97SXnFwLEzktuCVYDJg6mk6SrpDohZxjzYMCm8HivJmAokQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E9kdk97MjxT1XjC6WoGAff8LFK3sfAG8B9qbMoEaDGxnUHpAAmsBozgdALJnpbvkci9vRxuwUjER88WrUgFspXR",
  "key1": "2k42Q6yCFvRUf2DHHyqpvXmzDbkjVQJNPuPYUvYqUXFzy475x3yc3UhomNt267azrKM67LeTEERvPxaXdaWRnHDQ",
  "key2": "2jSJPG8zkrYcepVCiq5ga8qydCfAv9FgarAPf2CfHcWcrw5QqPTQZokTd4udebdpsK78eHzagAAxcW1NgnxUEbSg",
  "key3": "3V9GtagwcNgJDW3G94bt8Bz9eNY9dBNc48BTeJWqYZWgvbzoySWM884cabdpEbUbu4jf51dJUYe41F2RwFvqRj7W",
  "key4": "3proMpRyBtv9sMB8eoZ4iWgPedyrVcpaBgLqvQgjyxku6JQ3AFaeV8M6sz9B89kFu3NB1j5m3TD1QS82k9vFrfr8",
  "key5": "rXiS5H51j8YhzqnLGhB6vJL4pghHJGDrdhmMQLnK57pZC4AccERRXh1Gt6qBAH5miKz1QP2hFD4oBB6b9BJqipq",
  "key6": "2yR9NpMXgwnDsfQq7nmngvhAkqundeGYonPjK2VT3YD3hiN65MesPkH8m4zqtyVQ5DC9YBRm3xKYaZkFCK6FK8mG",
  "key7": "4Gx3uzahnSryPr3A82RkMEFkHnozQq21MbDFvYf5LxZByChycRgg28qWKsg5sUTzvkePXVQ1dNGrZUS7BmrKKnxk",
  "key8": "zwTAJDCMZ3kfTjy2WjEPouvyuPxfd5FQtTEENPjmQWsxYgFSEWx9LXuhnbuDKba5LkK4Rf6Pe5r9JyAMokKiCDA",
  "key9": "44B4XxuWA5ToU8VgMsqYAQ6QwXWHyECeiYR5uin2QnD6hEkFxb4rsGcQnuoaWFfySGwYLxmmX4yUqmvADignS44M",
  "key10": "Vw38BXVJRZXUVi4QataW8wsn5uXYbXv6tdRJeTahhv7QwcZ9CVf17PfgwdufeZWJuYHX7fC7rWc9RAFRuHwB7EE",
  "key11": "2wSHjXyKJPLusiuGa8sfqummPGCL8y1MPtDcp4X7zJMHRpna79nqfQzrjgnsVneq4QBGgcPjCLUGXfKHYMh9JrzJ",
  "key12": "61tkqo5PLfe28v1UTw3RKbUSecZeAgbBmgAoFffKivLrZLCL2hraE1rkQ6av1HmfJk8ud1nWQj9LawMCKojVhxAm",
  "key13": "32xuwLowNkqPzYKLTwVKm6AYRsvsGEVHycHRw4KuysQwgvb59PzSkaWkgXNSkwxNYkTsuLP8hbdkYyskUX2mN4da",
  "key14": "2KGE6awvm4AR2Bv62YDCibrpNGRuoGN3FbvjNBjMS87Aw1QiN2Hf8hjfYWLfhXxVbKPq7eVXcyutC8Jw5eaCB16t",
  "key15": "5ewiJa1nPm9pHvt2Endk4a6aQnmPGtpNsouoUyrFWMBKCZU5kdFkZd4Pf7eUQXQbfsYu7hnxu8XcSUJ561fB5oV",
  "key16": "9pme8ESyoLbeecnzBuFumiXip1cbd5kS19eW51z4EXeaVZaMCZPrsXRUfAPA9KyaF3wHQeusP77F7xTZpmTYemW",
  "key17": "vBfKxZGMUr2Kb9V214i4NvVzULBUQpUHLLvdAFcYVpxxXx5oie5fC4AGBzjHcpCe75hVG1wXLYwBYX5X8AU4VYK",
  "key18": "THqgXuome1BsZfqxbZ8VTpcLYcr4QWAHzG7gFUMHCRN8ZFrHhdNHbGsDT1seFhNoxSW6AUts4SGmiZGJBHQyLou",
  "key19": "2a7ZUKr8PXJKuLKD8ytmVAKKLGkVXjGfwrfKw8vPd2SYCR8EXT8uzwTPGXtTMbgLrhD4eZpYskaceAhvbpP26L1n",
  "key20": "svoNnufC9ic8QMCFom4HKsCJwwcm3k3xiBeG72UVEpTiyedLJ2DGWvp7GLvcfaRFyZkU2eeukEa6eSqRmzmmmHd",
  "key21": "45wqEYX8RDrmpx45o9qyePmei3CLRYoYcf8915ruAeejGfAsdDuvXNCzKxiY1aGMfPSun4FktEUGRF2JQUHRWGzd",
  "key22": "Pu7NowyMq7yKN9emN7wP6Uiw5j78vASxYz6AAGDaeJHLZL4VJu23vUvvaeqYLCwHhSgK3WiBH4iXjPiN9fPNQHS",
  "key23": "5Mn3Ufk8whxNBmpiDtdu32dGqn6UohS38MLbfBwe1Q2CEmNDp7aSR1NDHfgNECNuUyF72GrVbPi9vABmiAMZ31La",
  "key24": "27ggSdcqmbNGLANZJcWahd7d8r7vJQhbBJkkot4N78KHp3stuNERmQwyZYsaNwmsPyYANYrpJxHFegytTMpbYc2F",
  "key25": "4Rd2irYMtWdWGsL6cruHHi4vakhVfYiKVvDBPxqaDv2ZwRiPZUH3UqLrTnCcgke6TG9vFYofzcecHKABZp2F9ri9"
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
