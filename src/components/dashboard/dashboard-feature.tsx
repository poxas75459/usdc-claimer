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
    "3DetQAFiFCHnwBxFaYYuVuyPa5HaUasLhgdhVQgkhcNmSaNvT7zx2SPaEShcL6dVQihhhncJZWGFPHqQxqtPUwix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GtMaVDRJD4BPY9onHuLBvASEuGKDXfNRbiyFyEsTUdHdWRRvhBvtAxH5wrGZcmjh8ddBZuCBfSDzGqicAgxEWQ9",
  "key1": "3J94WQfbnH4UwvJYcie3PAaRdFqsvxiBdm5GtYh3UuQgzknGaR7Z2kC7RQLbFzcSTEW8rLXTe3qVa7faVZnvLwDu",
  "key2": "2GVmokRsLqMfRsHJ4xEab9GkQvgyfUrdiQeEgZ48NVxEFRzbGQKndSru8KTh5t1ywgWijcajgCnP8bt12Bzuzwsg",
  "key3": "3RuqE2eSXtF4hHTuKufZdLgLZfQTYu1kXZvcs22abfTw2Jy91MYYMB1AAPTGxVv7buQC7twFyYyp5VwqRJGaWAF8",
  "key4": "2AKJqogMucDUH3Lfe2cKK2dmvgy7zDRibNXz6my9aXVDKGxoV7HYcAuDcNx8JbpgF8umx9kW4Lt6JhbDBSeWAnAZ",
  "key5": "2FrYJGZterjRTQAF1end6KZsDk9SR49UAzzHAJ6BEVHf3ax414jpbfBamFsm6pzzgZ517WSK3Z2X5xrDeWQF1swq",
  "key6": "5KkSdmF4fGk1Mtb92Kne5SsoJnPCsV67gZZRnrX4Dx6ZoZRUnnHhKfb1yJsoahYLXZYcWfgo4cGA1QYqa1m8wLnU",
  "key7": "4dP15xvwYRjwGfApuYC9G1unfF679PUFbQqQLn1H4VMR9NLK2BQrxZSeFg4KNXCszbZjDG7cVEeAxRjQNgT7SY8h",
  "key8": "3QbTJVuuBhrAJHjRPHWkRdtKeSWXj82zU7mR5VjHLmD5QZwUqFA6tpLbA4FN4EgiFgnp2jcRsvSczPnvmTJTpiEf",
  "key9": "2vfCyd4k2mNVcGnrrvTT6wwyrRxPp6H1TYip9DJPx2b68oSZyj9DNkcwC9exFK4p3jSLLqaN8N1mJ5k5S67248iN",
  "key10": "2pBDxoDeQfhXjCdpUm7S3KswmZ1h8DhiaJvHjnVvgFt7U6ML1upXQBhPn7aHFw47xVuhomzv4cD4B8EcJE9uN4EL",
  "key11": "25NkYP6ApgMAbR4vx1s4f1qiWNKZ9AmpwnR6vk1aCzMz7tiijfS4WVvBHrjtiusvo7px8LDyP8uMjFr2pt2fh64J",
  "key12": "3HNQunRKnR6ZG1gHb5iJerk5FQACtGp11JxpECy9ahoViJaf2bd5m7LfoRbQwQAhoTqLHoT9fr9MgRtg4njofcs5",
  "key13": "3BtiL2vy3J78LHR2NtxFqnPWSviyk5cyg67K7pr1UqLK6BPLMoabNr4y4F2nY5aWgcHgr5WUUwrnp2KqpdQhbvmM",
  "key14": "3EvdXrRBGJdP173dzWXzAnex89kwvBE5UMrM57tKoiCDdTDSyeqvDjAN1AfNsLFKQ16YAjuDKrZkSpcSVV48pyt9",
  "key15": "5sic7ke4hrRn86LTAz2NimR8BuWfrp9bhSGPFwybjz41vCHuMWNqdyf1TMbY2mmgBa1Hnmnq8ZX3UCe2Ry5k1oQP",
  "key16": "2U4GhX6G76dbBedmEb691Naxh97tpkHd3o1NtBa7hX7mdTzbPQHXeGqrmxvipBdeqBX8XotS4hBQcZ4fdAPpjgiD",
  "key17": "cjj2nEyctM1ccTxdMWihvqrWe8g13hS8osiHGiN5quPAihknb1ccCoutooExZZFS3FLHkXvCt5TY613qE92nQ3n",
  "key18": "5pZoBR5B237QkQXpi1yQXhcEtUVxioKHTBiNLyKNQ73JwHqrotPo6MZr7cuJ9cUVwnwCq3t8NzmNTr7ZhEnqMyGU",
  "key19": "kN8AWaYSW2USWZqu5RQj89AaZ2xv4MYno68SHURVffVs6F4e57VwcNwmHN9Qs2KLP9zz4kXzEjCB67KLyj5iiKa",
  "key20": "4WGg2zhwuQayQGtix1VBY6zXP69F6G8HzF7RmCXfXc5FxDVWcRUxKFCosjNkJxgenz1zGYiNpCo4Uoa6dWG3o3hL",
  "key21": "VBC8XNaPJWaHWFmZLroUeQwpF1uxB8GnBNLByba3w59jdj6KJScVKJPQkoTB3993zgG1e5QRuGXs6cc9St2KwEr",
  "key22": "2CMz558YHUJA4fPkyTRrWLusYdBxg983kLLRdAAiiJkdF3ZxcR8ACyNvzYcfnpY3KzZfuTCT1ysQJz2V9F7R6pco",
  "key23": "ZJDnExYgJjTbVLeVW57ZZ19wHVFZZ4w5aS8ZV37A6fW6MhxmKCbkeJ7jjo2YTw8dfDdS1dx1YRRMYCigk8uESFv",
  "key24": "5y7ykcUoaTPafFzmyduiuKwzSAzNC8zaUgqcXVwkE8nrxNLJB3xLsGn9MHksxAx9RdX6oMiBWRFXD4UtFoYnGmNV"
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
