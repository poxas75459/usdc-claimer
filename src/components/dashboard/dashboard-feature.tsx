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
    "5QPxMYxpmckDekeZE1VsB3Gkbbdqk6cjqYnL7TgzHPvfcnwfkKnk9mzJa3yPVZvJk8DBbmLqQxjhCF2x2oG9RPtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MXMCKuimFoGY9uC2hVGkwoRESqG3omLWnXwzBLk44tpkRzKFdM9Cu6FG8fPPVo3W26wFnkUjm7LEcgzMPBEwMC9",
  "key1": "2gcUvznGn6FHBkqBNeEeKRufkggsu7e3HP4kWhnZAKCgJ7iV5Fcyc4L9pSqcmjFKCiccTSe2CckAdLGbbAaTY6Vx",
  "key2": "4y2cY7QQaf6yNcDNw2PdgHEwyZ6KwPFUjNAVsWYmx3M9irLZAhVFsoPDmTpzCyBz3TgETXcmQQzSLtfRvEWubdEX",
  "key3": "3TXqnwaPqYuiofsjtNzkXeKnHoHU8ZvqY63fzmGefrCSihBUhSmYMMxABB3WkBMUyFw2mabhScEhGyjMaYzngmgV",
  "key4": "3sBcczUinMYszZVLhPuHGAskvw95LBcsrzUk4iEWfq76NNVoqN8mk8GJKnc8oTtpwJxcau9zmdVj3uz831bbRYw9",
  "key5": "4cUPyzGCMTR8rJDP2wuTHJBc15yxM8dFgEa5od5iFig5hXPau6emCZ8Hifw69XVEM9cTubSi6MF5Kz2dpmPGHGmK",
  "key6": "3h32sqXdkTV2N5YiBzfxRPMgRvAydYaqAXtUrr1j5xUF1YXQBDi2LzZGFz8Fs1jGhNwdLSVnnS5kzA9aVMSPsNA9",
  "key7": "48kouHpUUqLnt5Nk4AHyQt3d3FxFNbd1pL8GYmygHHV25DytyTvMkfHmLjLpFb3JcVoTTiENVtYKjUBcv8KkiRtu",
  "key8": "5JX5uA5zaE8hyD9v84MtkRhzPe2BavmtUU8on4vss6C4Pi8M3BXZRoDuxdG6y1waH9mWeryqH8Z5AK5WGGKLeQ91",
  "key9": "AxuSNRvFUhsmo9a1QNCBWTPL96opPo6terxVNnAZsCKZhhj1gQhsER7oJHaRWC794fz8nz3ZvPCnjRM6p3k8Az4",
  "key10": "41T73VQH43L1nwUUMCJahKJNyKvM5y8p6vuswi1rabuox9mMeUq15TebU8hTsUWqv7KJiZSjZVkLyc5BG4pFXvSJ",
  "key11": "5ZcAdupBZ4M8U9uNTorKPyRWoy1PjzeropLdtgPPAszamfm4k8qgZyj98RjDgQFNkoivZTZiyPDa3iXeRNq2iS3M",
  "key12": "47jUQ76y7hXBKGcco3gw9eJXQkwV9rHEci3tFQBqgCCBd6phvyTtFyvUr1RVGhkHr8sW9V49s7dCkSDLJAFJtmM3",
  "key13": "2TfwmyfLHrLpkdE5mDnvv5JSAJMrSa6ECTbf83Dt9EjyJpv7zESbc1VVbarBrx3Dx6CYaQTmRHTk7qUAFYA8WFJv",
  "key14": "jRZpoGAhTBJnFfz9b1EXo6nEwJZ6hXQafj9aUQ1jqZmDFYpK2grcn3r43e8PkWCCL5rnVP3FxuE9wD1EQT6q2xm",
  "key15": "3tdA2T6JLZqs15HmDX9cm2YA4ZWyQWGBHPmq11doybquQSEw79sYfGu9PXoe8bXccmdEskuKmZXuidj3MN9Thrus",
  "key16": "TTnN5n34NkcjMYjh7udVPFkdZx5zfb9rfg8jbPTaMp7Afuo3JbsEDM2B8DRNV2cMY5qt6aunBnKv98FpV3B5wUd",
  "key17": "2JHGa1yGizYq6hS6jJxnjBecd3NmzzAiAP6cZGTDNQwfNNPvix8Hx4tQDJQ5irTVqdKqZPiQurDEsuawKSue9UhA",
  "key18": "3y2HgqS6B2RHWs8bQ8DV51VwvEBqF1UNy1mKjkPeeZCnFEMNV9qfRPkYuhvQJf1mPH9aGhjnrphuXM81dFtpEcJL",
  "key19": "5o1buDCVG18BE8snExNpUon8jj2xiA8NaERJkQFuHFjFhjsJDcvrJ2cMsUssebu6RoRKn8CBndZ9vUZwWEciLkd2",
  "key20": "22CwVEMeuEiBhxEdjueFxZdYwSSChiUn6pm9rCJRxw4GcjcWpXibZmsqsM6LqBqGDZVKSBUAdSPiHmGdMCCyvV7E",
  "key21": "2WjPqDD2wXsGaSo1iSqpFN7tsRxV1ao2fRWby33UuKTgWrN48CVHajnPBoEFVQce8jVasJHUf5roKZe6KKnBYE17",
  "key22": "4vm8DQ35YrwQ4zd9py9rVpUgNrswp9wc5tHEjT2DWp1nfd5ddYeUAG69nv3sprCFLgKTND63vjruyXRws9MajRhw",
  "key23": "53oPDhqFEDoEYqUWtcNw5ZWEFyawnsjCvZky9J6L2SGerysRy978B2r4K9JQkjDZ9V1PVibf4YDytyGNzQ3f8JAa",
  "key24": "5rF9gRbGrm1qB5e6VkgXkQzv6owaDoYqNTHSriCLEbE7GwY7BGLnKQSDPg5Bik6MniEjK6KNVH3jPFjLGEVGLvgg",
  "key25": "MPnZWZgKp2z89RbCFKcJxFUQoGeK2mbsXt1WLGhRYZHxXE6kbpJAbUqL2PCQoA2EyfHH3F8SrKF7iU3qtNkb5iH"
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
