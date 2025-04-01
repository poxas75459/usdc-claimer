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
    "4F2nG1kDBM8enwoBKf83VaWT64H3V5AMBhYzGaZobyJKQSVWt8SGdh14pPVHD4S2T32inYHffX1ChSApfpNS6fsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q2sW2F4MVFiVx4P1BAMGaFRVaZQQwJxDjxHrq3hhMSfS3KUNYKL7eQRzznZY7VzpQbCRUUbM9dRpcbKNx8qMvJF",
  "key1": "4R9dn14C7qS6zHuJt6JDHFbw8y3h5GRbtu4oj92kGCv19z2jPr8cdhqCJFXcLsWrDukWYWX9zEEBXoYxzq5mk1es",
  "key2": "4wyoDRNMFjdSMQEXjb3GqW2zYcsBc357AmJiLRdn77eZbCUBEF9zDqZ3zaHZduebrRHmBbz8uk3zjASMGWhyB2sf",
  "key3": "29XzSMwH8wg5R8fcJGSNd71BKk2jjY4sTaZxB4fpUpGMDDnvuFwsD5K7uFGsi9h44tgZyjyd5reekzvxY7bRzKDm",
  "key4": "3SzUebGzNhQwDQhvMJktvbmAZmnfmV65HWvfRxLHrkknUjafhkeRZfU59v7BeGdC8URyJ8s1h4BTusQANNDjkUv2",
  "key5": "67YSpALadHGNnkn7RUjds2ixjW8xRTyca1XGy9oF7Wbrs4upMcTv7jLog4o1DHbjfhLZw2gCGpYkx1Cvjd6rUse8",
  "key6": "YsZQQRVoS2oZUhmFREe9V6MBLWfJ66UnYEczp6VknrrtMTFyfjVtYMZ9pafhZ2BzDCrQinYNLkuk2CXFKLqkboC",
  "key7": "4pUKfepqoUSxutH8o5UpPyWw8eWeJ33u8wiqimx3uQ3BsxsxzNLB2aYQNWPwhinbRQxfgB4aSbMCDaeYH7UHpC74",
  "key8": "meXcXyiYRZww9JNc3vnSKnmACxkrXUAWKtJQBQQbHrZ4sL4jAoYegPPuzfQwJWTTxgNzstpfvouAZLYxpXAoAh1",
  "key9": "5ANYu7p2LLU5veCjasaY3xgddgtJBkeiJ1ACssxvPjFaT9daiaXJki3abhdTYM2sRcZSFV1n95p5N4LLTsMnSK9G",
  "key10": "4MiLyrM1TKXbR9UQ5LL2BRPzwnLsaGwzNfhGV5Upew1z2NJRe8eLrbZKX9hA94HG4aprHsTZRgThWroyB7WtRnSp",
  "key11": "4VBGzXcJQmUD9tpLbJvrFSWpMtWS4TZ7uijgMpQZNupvWmaTUYvjASTZ4L5zcW4kd2iwwCLhDh4GyewS6uhsVYxF",
  "key12": "54gnKixiADgwF8SC4XWwo9aXhh2zg8ryd2AwdZCbjk1BeUgXdibBg54Wuxp6hfKMduLtt3EZfxPMW2hCEyughndH",
  "key13": "4Cnoq3C77artgnseS5WTG4UPqCrMcdy1f4fR8dKTF2YZWLmJYcHHRiMdrNQNRE1dWtrQBxtAxoVxgEgbNzdg3FPG",
  "key14": "4pC2guQZpoqHVHVa7rT5UPHA1sgLsUVXjm4WXNC2MKs2JAd4uabig3khsNWr3u4qPm8h4Hjbnan119DiTx2wAboT",
  "key15": "3uuAfdkv6HucgnE8q9JLtg1HgyjUh3QPctTEHXEuYD6iHp4dNweqMdujnVWo6F3zaevq3DqPigLWUbrXWKBm9FBJ",
  "key16": "3mQuu4w5Rvvk5Z1SPUfkVfH9oxGi8NMcrDTCUGCppyZ4wtbUNbz49NpJk8q8P7SfYKwGDtct7xZu4wduKfKiBq41",
  "key17": "65R7HcXi8VVJrRYrUL5LieAJCrhYrNQqpM99RJE89gA9W2wpShVASDu6tRdFf7z2HenN3ysiXuJZr5rwYmq5xA6v",
  "key18": "3CN7Wg4b4Rx1Br3Zj7Uy1GUSHekvTCJkZ43YnocUNLA5qUErCAAbbbcKdejVLDVMCS2TQdqr3HWz71KgmGW765kZ",
  "key19": "4kv3VRZzixYdEkyNK6WWycdqYJ147KP1GkRG9WvkSUpmbdtGFEpUzTGMU7Cwvthqzfrtz4KuELm6xFL9egYsa4Rn",
  "key20": "3PPHxw3oHVWbJJrqgoxpiJWvqhdz5CkmTiCCgoRyTpZkfT2RzY4innM95W8PX2Y4ZrYMPw4D5Z4UWh2NjpgizHZF",
  "key21": "4yD9xXsjj6yegm5uTfEkU2JMp9tvskuntLPmSEMYSXcTXnS2SN8guDdnyQcwFaUPcac7br33iEmLy4oejzNdvRJj",
  "key22": "3be7p13hshVGvGVehCZX4QGsgf3xk1Mz3LDdp683L9vtz2BcSjwUVmchTpnszYGHLzCfnXhhco8hE4av7Bt32dQW",
  "key23": "3M8kDzxGqtJZc73AA93Grw91oTXu6bKtA9V8GtoU3kBQYwsL5JXzQdt7sZfMgu8Pjsh5khoXRpRD8yVN9rFR2iRd",
  "key24": "5tCv1AZu8Q8jHwsMdbL1Yx1mQBV4SLVeEDAn5hMocFqzFbnCEmYMx9XXangvRpGqLnPbg6K5tXH8DFkwRNb9WGWV",
  "key25": "3bbR8FBkCnzimGd4Jkapeda6vghhKMHBgaKyX1DGMNzRwnMhWwE6Um2XXeAj9RFUTt9jHeFo1Ja5n9VKRxwsz15f",
  "key26": "3YccG3EMjTZVYfxqVL8aeoucv3HcJQDzBxtimH1Wqs8HTQ5cRbRr9sdH5Pi1c6An9NT25uvUyxVL96EbUsnBeXf6",
  "key27": "56sjpXj8ytHt8ZEmMtVyUKnTfi3ad6tHQb9JPi5qSCrCcTT7S23y5mtmt3YT8MoErcAgK4CNUZkaKFJDheeKqYoh",
  "key28": "2xDfpkkiLE6vWVcxTcqytZp69AYm2A2fFkr7ju8uBGLsPeBXNPfo47CfJuQV46rby7zYuohWGwsjVoxH76fKYd5J",
  "key29": "4yZg3jvTm5EUAWjxVdioF6kzvcHgUEiU8hBirz4YoEKHFEJo4N8ujk6EWXTHPNgoS7NqdhcUKyppnoVC5rRZegRK",
  "key30": "2g5Kz86hAHzDPwnY6cETHbhbUJTtrviFoaDwJdyQw46k49QyPdQo6q4Gh7kQ3ZhXxPAF82j8urzPJkdd5MN2TC6h",
  "key31": "W4JXFLyMU42axwuW8RaGRnFQaFvbHpSn5qtdYiaf2KXnCDWQXFPMJP51jgUarrsYCRCvgKiyRRCxPuLKD3n2GiR"
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
