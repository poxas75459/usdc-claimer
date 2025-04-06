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
    "4q3LJEKpVdP7hYVFEzH4TL3heHbNNVm5FxsTazV7KiSGf5CBXuAy82sDRRJq29XdthnXXcEqrTGkgLJhMYuew2gA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fPUdkxSCE41JhsVafq91RZHrskfmekYPySVRrWwyHmrEZf9iwtTjsmUyYocLMVMM6dUARy7qynSq5YFHrBTX1GF",
  "key1": "4tTvTtfe7RC9osHXzLrDNfgSh9VNZciAm9MhvHXb6VeL9wkMgwCmQji4ayeaaqLzjt1zydWwoLbbGQQcn1XFxGt8",
  "key2": "3xmGscKPLVnuhGWMGLUYM6NktHixieV3DEydkUj3NonDumJcEUPmRcJysZbVgqYA1DRKQhRoMWFxppzyiY7FUARP",
  "key3": "4cHSUkRENuwYWE23LQptYdA3ifbbJ6gSgnhMAgx3irZfcrLr4pLyb2T48FTtUSJ96DEUimzz2RQv3Jvs3r4zwh8C",
  "key4": "48KXKiWWPjXDYbokfsz39TMNWnkzxkNRzGyqa4pAJ49qTwuSMaLcNwy9vDhhm5hvFkenQGej3MJgnMnxA6fRPKi6",
  "key5": "5vmdFwXPnaAsDoHXvpEPxU16o4xSXt3yiA5zbJZYmvmudr2fKF3mkHWbpZ1pMrz7QwXKpRB5qkQBgWNkN5XpvNRK",
  "key6": "RF3cyeowRNaahePeq9SfDtfpEqbNjYRBbDiL6kMKawoUN8ZDQ6hXWGWZGTtHa9QXKDGg32cmeS9fY9r1mHnyigv",
  "key7": "5RXmmxC9kVpGAQmCifmSiYnKJm6fYxAF4XBeaRtyfDKnB5oaVoCj45DvhfZo22gH5EAHXffj3v56rsCaV2zztjUg",
  "key8": "3ASMXE1DjJG1GiXr7P31jxKsR9RQkmL3HimuCByYdZ5yQsY4X6ZsRASz98yKzCC1UWxWMqfUARTUNTs494d9Hh4G",
  "key9": "uzfH9sCUYDv9xuf6mSDNqAnm5sc3QboRcZd5QVXxzNEUv1TN1XosS4qsJ1CjtHSVQsyobX6FGXtJNUqrBKN5YJX",
  "key10": "45HKYA7xaujvsCHsfJedMgozLY1n9KcNrPxY2gHtmdztmTnXWQRmMiupVwX8t7T7ZrrRwNgMCX3AiasrurhA4G6c",
  "key11": "2JY1SWigYVbFptGeY2t2FgQQTr1eXRQRhu96FrH3HcjkZPkRWoBTxmiJKCZFK6zH5dUPNNxJCi6hUpuRkGmKMZE6",
  "key12": "2d8sMHZtbD7a57dfvFSdcZvnJuvuquQGq1Ghqx1B8nLkLeU2sD1ZHznYzimpaJHTq7cbsUYTM4poEDiYtWVdQpcK",
  "key13": "HwdXUsDz9GybW26SPBk5Sto4mEpj8cEDZixhLv1akSj4AbmXXHZcEMueqUAzuunE9wVD4h7P5rB9huRCrTcRMQJ",
  "key14": "36GAuetXJSeEWLQG8eoc6k5Bq7aALHPaM62UGPgwAx5K7ydvNUdbRzcWnsBbnjRufVGqxU6N2XUmHr9pi4ojUjSs",
  "key15": "61i3Uz6KY1f5a1ayFV2z2v94xLNK5CgswnyppuCUcn4tq4bSkT1XvhAgHveqs2uuQzwqgFTPCMGsHUoE4hxVMAdx",
  "key16": "4jSCaxWpYSH9QND7EXQoxgqdZDeJ2tR2qW4VvF6RtfUdu8MCFCqNicriFnWRu9zn3EfPQMYdPPo1i5aQqHXDaXrc",
  "key17": "4yN8La8SZfkJ3r5PoAptccLELeXUhVaPraA8pyCgG2Kpu1W7SgtAyPoEGdVncWznFnNuMTdMUioQtWHxp9Ha11KS",
  "key18": "3taziwKJirmoaM5jLCWwL4VWyBThAoxMm7nJAJ1wJersH53MMFBgC74EytS75jDw1iDnKZ3E8J7mFMsxai86Cbbb",
  "key19": "3Jzyyap9j545Z78gEqPm3w8jaAXktCTW9Z8B7AyGm4v4hseNGm6tdCxUUw9JWTztAqQ1o1JybkAde6UYZweQroSe",
  "key20": "3nC3Cyc4f12F2YhGrdtAHFywBpwryoz6G4Gtf9JiPUEExfmeYWEHrQbtvsGiGX3erxHvb3eM8ubGRwL1m1JX7xdj",
  "key21": "3ihDVX2JPg7KaTyR4ks5GjP3WAVrkpRLJrXK6D8tjR5kNSXn39vA83dc1Tc78ohy2XhiQbwjxnXD6dn3N1EBpRi3",
  "key22": "6z9rp6aJTxLLUKyvXvA5CwU5UKoCYA9v4fwEXxM7kpZud3fRyfL7DvegV9jhg3YkDG7LMJWepMpk6Tc53tcHqna",
  "key23": "2YLBb2GA39DAU5giB8cWXBQhagS6rzg5uLDh97CWvv5WYfdEr1HkPqRVkBSMuFw5hwvD1X26YUX22d7Ygoqc6iNA",
  "key24": "5M1zdZ1BqMiTe8mP8SAcnnrfQ2PebUJphK3GWMRSMQreeQCoRnqphe9VwSZC7TMppfHMDJskaqXVDnjL9x7YF2te",
  "key25": "5wjZ6nEgzqtamjfdGjdAbNsDby8LDdb8438yub1TbsSVav71vgJVbwg78gUwY5MeUx7fqF8eqL3qiQMNi3V8Dzxt",
  "key26": "39EJDjwT7gWTrb7n5gZpk94x1xzXhS5HyaE2Y8fivHR8XQz1EHAac7Z7pK28qH8kE6PQ4nyEfJ97KsTWC5LdgpdB"
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
