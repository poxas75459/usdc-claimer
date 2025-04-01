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
    "3fSmRHwe49qhKX6aX9f8r7wfS8fwXvvK2g3j3vQmZJoGkZ6J5d5ACKfi4K1CzTHE4M9DtCMWWbzbiewEkXTFxh8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4edMvj5khr3csA2EEELQSreZURQxEz3Pp9xHmaSyd6ERnJ5NCXUshDyWcjb6zPP2tHmsqkFoS3tG9ZA3nXow92cN",
  "key1": "cVVt3zKESmFKvQSDbvXMWWTM6gt3XGKAwmQnKGwKfU1b99cCSDKTeuxatPD4rx1mLQDidUqhbK6dQaJVUgGARE9",
  "key2": "BXPMouY1FgZXBnxmZTR4RvnYKT81zyzxccRMtrE9d4TmHk3W4dSGKZctxgbBYN2ChTChQBBuS7hV9yZtn3sjzXU",
  "key3": "4ajRPasCreEQhddZap5ZoUkcMwmBqVEZxA2c1essED1Ao9AA9ctP7RpYwziApa2mpDGstrznENpKwGLcaq37gsAS",
  "key4": "28h25spmngwKnGcHK1ADmdBDtkNaAH2S7XLkaGBgAeY9s22viaVKSZsTCU4tQPU29JfbJZHKEiWdqkPm2LmEVWmt",
  "key5": "2HDnefzsuEaduBHjEpuZmzBUYhuNhtxh9mPoCfZddGqWe2NpyCEsUoxkJWH1Sdrk5YKFEb1W5TZm9sRGBdLhDZRd",
  "key6": "48ZUe7fd4F7SozRUH7UNt6P6NYrnRaZFfNRreYHZQHhJ9P6nQCXzGbKsorjtCiDgxNyqKtZEMTVnRr3XwhWkp7wY",
  "key7": "53WiXTYT7cLgZN4hxeCL8rmDWsdzMAm5w8a3BYdDyGVkzRC9yaqfj61HxCBN6xFbwyjKrsm1oaPmXkAdujb6viJy",
  "key8": "5RKekkBJXg5K4kKMdbihM7VTSsvXvP5p3rHF6Pv9XjRgnNBY7G1AsKUmBCw1gquNfjGuPdCh8tju1ikxBDCRnKhM",
  "key9": "288NxBvadUZHkFwF3tHeSqozv149fTN78U32oZ74KmffwwwMNoqbToqPBTCmsBPaEfTEM2fX7JCRXEbyEvr7yDsQ",
  "key10": "3BaoKUATC9RGJn3fqUvDdyXZnmiAzNUwDfGj6iez2V1gGcP34o3m8Huht3suugkcCRaVAeBi7PWkqeT9ezkGyTsP",
  "key11": "48QvEhUUEqBrBmoDNgHsxcKrGQunfLd6HuRxedsg4h6PZxDPGP7kB36PXCiETZHtEYtmTqKvqCXpqykdGBNFCCpV",
  "key12": "2XjPjuFB58N7yeGtFeug9xzrEDmensSqQm5V59jeBpHbewM99eoe5DDgCdpuwNihkderatQpRBAH9otYUhvvMo8P",
  "key13": "5H1ynPZJpR49KzSBq41iLNfwZWR1P46G4f5x2HpFXajNidDuJfBWaRFykVssLeRWbAqDMxEEGfMzdMgKokbYZRrD",
  "key14": "5L88uCnXbpxdDkP2Vznx1pmkuxyskMm9EpukqD7kqzKWeufYQ4yGuqqbDEv1szhkTaovjArC79fGQcVma6tvE1BP",
  "key15": "3odTmRVgpUE9XbJkqt38eEfLaW1Rm38aapfaAhZnjAH1qF23idh78tF3fFL2PZUGVA9mKBrmwDYKpEiBCVv3r3Mx",
  "key16": "4FdyS9biURZbvo73bB5WqpWZqeP5R6jvhq4L1oiwZPBh1sY3EWiJbftmpXSwiL6hXprAxzWv211cYWN9ck3G6Kko",
  "key17": "aD9T7jmS1qCPoFYdHqfUR4eHNDiZA5rD65PFgQrjQGmzemgf2woHDA37Jm3FXtVRw4oeQe2C3nRWeywQAE5JWBu",
  "key18": "212waMc9vCMRD9XAKBTWsvTPLkZVeCACxNacw52HTBLH5CxCYsjgqjVLzPv4pjyYpLGSx8GrvPiCJSFjYiXqYVXd",
  "key19": "8tDXk3m3vvyWadbaQ1hxkF9nNUG2KpWEUsv8BBHVTzJhs6jDM6RSQWEWNzU8D78psNrPnDqG4jSc4ntsdLPSSL2",
  "key20": "4xFd5wDToDNPccKWwbSaSsi39naMng5HTEbDKmLDS213bjh7uLxqnRVzDYfdtrCLLxXSoUBQeVYdFwSWGmMXiprA",
  "key21": "2wxNeCGhZkf8EHH6gyayuaLvuFjL7z9pGMuiatCZ23maqPy3w7dJjoGabVcPvnSizRd9Qoj3t7TgrdXFG8QFpRYQ",
  "key22": "3rm7FQND6vmpY8yTUn9DEyMuDnDMZ3PvrFjEmzYHiuvu8PVpCCEJi6QBwAQN2oMypGjCKvpExkYxwuzzcXsYmc1a",
  "key23": "2oFRJDWwFREXXPTZr88vJwuMb8SxLHyhJUsZNoYZNpxGiZmsKgFyGQriiUnr152tARNP9VnyxfJmMNVeMQf8Rdjx",
  "key24": "vuTm2cC4XdJcigUBhudEyMTxucWYp1gRqHmPBLPKea8As1W4Fhnuu5DGHkpDdZEJVmhEHhHzdyhjsuSKMPqqv3L"
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
