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
    "257zfhwjSeKyBS7nqAZnxcdhSXd4WNvnTAU867u9btRgsBcbGPxrkQUma6YQYaHxDkarAzEDFUDKUF4HWbfbdYz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EWsXAnkaNgofL5cWxsKqWjb5r6mU6DLkP9bvPgRSHuhgojXZJrgZRwDgRzsGy3mpaG1nRNHkU4qMvZGAkMX5mWH",
  "key1": "4wMSvJygXEVQ664F1N5LQaGGb2of75RzJiYC68fbgHSMxA3sbRoDyLe67SP1F7hN9rgow3qB7YExP7778LCtYJY6",
  "key2": "2uLRe1hJFTXKhZKNCZs1USVYFC3461p4XMLLaVcvwxJVfMGmkcvVREte1fXTmW5YhPZG6zaK239TRxArg1g597VW",
  "key3": "2G28oJ6wBt1zJJaqY7uEr5Dt7yBaYK1X3CzcCDDPeUm344SDD3AfAmG3PWKVpXLqfeksFkgAgAGEd1pcFE2gtkTy",
  "key4": "YuXtUF9L7wABmuaRdNrtWAdtWiE8EpHQtuMPtCgLxQUvqkzJ6SqppZtFfD9STWobDcmHd7sf1LyC8ZgbPWcYwsm",
  "key5": "5g2LufxS8qAK5vLvgw2jMkAUHstMQ6k24y1NCtUvRa8MnXy29kPvq8aJe2UJZiVaVhMtQnjziKuBnjcLb93Y5PP7",
  "key6": "5pvzZuaCL5YzrsmqQFJx5hnkNfDfZDLevYZwhbJGQwc89cdGqMcneKmfZUzhwAeh3H1nsBHySpTd76ZUFpHqmNbp",
  "key7": "4TuV1iDo7f9fDmviEb35sUpMsBKsuMgp5Tqx2QKF6m4W37HTiXnk7noZ34Te9vJr1Ci7b5fB3rCsSjSiFkSRfyPS",
  "key8": "SVzb8zpTEGMtz261sZQGZASDsQjgyYcQvZm32NBKAK3CU9CKBUm2txwmzWS1rdd3c7o6mg3nCmnuEZbH2kFhybn",
  "key9": "siJ1gGhvo8XTEN85Ly7ungsNzxNtXJM3hEuo6tQvK5DK3X9tqszftwMNJ1HX5s3UoV61fEGUzWSSLV8YfiBoJvA",
  "key10": "3z3i5sVB16CnJ1enTo1m8yndbP9cpd9RaBDvBEonLw948Qs6gqwRo6FwZU9x4GbaheJbEQRSYDhHPyhz7TvhemR1",
  "key11": "3rYF9vwUhS9MEtkvxTKji7REXfUUtygRkDETzPfFdFzzMaBzfYqHFNhXmurJvq98ph8zEoB27yzu9SKdN7ut24hA",
  "key12": "5S7xug7a8eKjhqs6ZixdWDzb1kLLeUkdqScuswm8NGeScPdAXw86NLMd35agzZdwhmjfRGsPWCqLTrAjPNaskcYP",
  "key13": "3eJhUbybAeiR7nyENStwXdNpN2cbf3HVpJZ6tQFJhvMQKDJEptyBBygHLo8z4sAHmZCgyHFfbQUMXAy24PMULVie",
  "key14": "4AnYP882RcsJa3QJC9T1gJeGruoNwnwwyrf3AywpapQmnxNFZEP4PzVUHfjdzW4jNP4ULwY5xaXwj5z9oryBp9Sk",
  "key15": "5EVwjzQMV211wGRxvdFrAxhXumaXXdqPveiWLNDMck1ejc3TuC9cVmSeLdMWmFAM7CU3fynGtqCzvZ6fHGXYmebn",
  "key16": "284aKCpKWjWKB7rVekFV2VG2s2buTR7j2o5c3UDbajW1BPM1J5gmFmBjtk5vimbNsc2tjuAkWNFvYo8hy5MyyoRe",
  "key17": "5EguHNAbXx9UiStaSfaejVyBYN5ddhAGfARezWN66Ni1WZ52DcPkwU1qkEt1qKvJus4spBGvxhnVBYi19MfpuAhL",
  "key18": "2HsDhoqjgQDWNNzDkEvZwcaQHyAWzDt5VeLioXyMRHzvZRtKmreDzN6q9jUSsQmFMjfttmZRQRY7hGM1ajif5hSZ",
  "key19": "KuahWANeLiGMjQF3HqocSPCBiiWmm4wsiaa44izwftcrEMHirq3dYvXmc2JGqNsX2iijamnufRZWRwAbCN64vao",
  "key20": "2oQUco3ef1JwVzotQBQSKLbbxCt1yXX6EyDaUqbJj6gfRqoSGzGYK3pTiyNyV8Pn5jHQAPqBeqp6nmTjV2QhGCgY",
  "key21": "xTNoPicj1hKyHQjxskEfYuNfCdf7Sx4u2bm8i27jXMALS4msA5qD1U1bXGU3fkX4EQWJAGUCK71RAcbGgMKfm4G",
  "key22": "4rCnLCkfYpQ5dW63uQrxo7bECcEdxCr1WvyNjSNQASn8zExUNz7EEJEHzmUjw9Bdup4BbCu4U6HUyMnHXD4d5X8m",
  "key23": "64Wy9B5csmT452gCmpfmEjtXMgJWPXmCaQeeE91KTkGJbPnuKDZMkQVaR2iVf6XoHZhACWBS42ioHGTCfW2WqHti",
  "key24": "33dBVGqHkhVT33UEZfX7Kox2NtWQ538wEPVpWYtKpkcMLucyNV7eRMJFi4BLPKgmXSGXpoYyut8u47du36uZFU8s",
  "key25": "4eVoPaAFrMuwJGhv2FKmpPHYtEx114LaAec4phJvvsqaZe2ZPm4W6FYammiQTGi8AqBk8wexf1iCjWqdgpkvsGNS",
  "key26": "3VGz5YGCkMgGRYYCfyF5UvC8X8byAu1Nheg6PWznjwktZ1vauw1o4ydX2v9QHiJkW6qSasQpGUjkSJuiuGhNe9fY"
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
