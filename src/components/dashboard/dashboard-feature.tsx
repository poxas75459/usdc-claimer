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
    "5gTcbb44iN5crvmsVAoiMDnUDb1EvVfwzsMGAsCSDH9fKVDtaZT7181AioUhLGrLqZurSMYmtLGqKjtycwNDwB7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iEkmHiRBzKc7GveD4GKdoi8Bs2YxmfJeHWd9ZSAj1DC82muJUFD8c9RLnqJzS1brFSX8YENXrYF8ZRnbFiNUuZU",
  "key1": "2hehzbjw4qbWkRx1Cc82c67ei3PQsJmj6hL1V9Dx7AkcSJJxvuAZxTjBAkUTF3SS3dz2nNcq98BQhHyUW8BDdtvM",
  "key2": "3FTLFX4RU9Rea2zpkLqYJmwtTBfUbahkJzC9VnYqWka2acuxJcKiEDGZLciFaBNbJpGZ36wMUb62NwS9JhoovFbT",
  "key3": "57feRXDjRAAfFqWQXJw93YUUz5y9Ma2MrvXkALNRUP6vMQXYyCmP85pFuTuA9jEWAL9RetgDtxENNGLtc2ECZdc3",
  "key4": "2q7E9Yn2QaMkJ4yx59v3Rcgysin9xQjAN2KFZAJqXpNLA9C2MPr3fa67NrCVaUeQ2Sx9Fbd2LrAJvaBQpUNgeumT",
  "key5": "4YKvMruTLzBNrUAFzUN7FJ8VguxRXXXigKNy1pAHGe2ycf3oemK7KRh1h8fSMbtn1u5zVWuDd8SRJ8wfQjVzrH2x",
  "key6": "3hJpmwKJaPrNsx4m5U8r9fPMD7sEDBh5gzyhLnqWph8UHS7FaB1xrjEpzmrQKuJfQEzkK6XFs3d4fNsYjp6mkVwg",
  "key7": "3YPE2vDDjTPUTqRz6cDi5XJUc8E7oFbEJz1KDMefCXjfiHirobVnx7UHiFub8bSUo5a7FFSshj8RUvE9DweqECYn",
  "key8": "3dWoXjQyxUq8MheCsibXdmHdLMSSiBHRoGtd373VVm4Wzxmx1hV2NCRY1Jtq8vde1G6UfuL6JCLtK85kBAtNyhoa",
  "key9": "3w9HE9JKJGXGUKHTUK4xWtebHfca7Bq57oiBb2gepCSeZjbhAbW1XeCrhNFc6xsxDagjsxgvbeHmEqhpUuzR4jTJ",
  "key10": "5YzyXSGk7Hkxo7YC8VxwFz5UwjtEGbSRpYNnw65DkZVGLtmhEMgQyW6ioUvK87msW7nZK9yomyGjeSAoyPFEdAAP",
  "key11": "3s6X3pX5SsRrz6DaA7VrxyWxfbPSmMf3KywwHJLqZJ1jpx2Ktcf1b61aZjMyAnGTztJMwv2MdLTWK37j1axGwmNj",
  "key12": "613zuVV3ehseFurmB5AfajPp6RHx7mftq7HyvUtQLSGFeyMEoTMp5o7bEmD6r87tgBJ3guNUntB5niGALdSv79jF",
  "key13": "5PUSttH12BFJFScn8tw1VfHN9P9cciVvAoTNNDor4wwbKaK4u6ymRGPqu9mSn9AWPosm6hu2YdXvwwb5KXdm674q",
  "key14": "k6zGMdwvEKkCbBUk6mfSWWa37yh83q2fYxiHKCDgDgccGpQkYr7xHEQXTFVhJQYHxWVQnMddJKQntRchnGviJLa",
  "key15": "2FyGJVQBWQHgiaZ1SyVVXKP1oVLAhS8bpsSALPBB1wiqas2ZKBaPFxBwPsrmo7zCKXb6are1EfX2BrqcVPRfphia",
  "key16": "2goVuPXZkJVPp6ai4SH8aKaPSqCSwhJwWuu89W8EGH7H8xDTbY9owF9oNk8jz8pp37bg73xeAYLbNZuxY88EokSS",
  "key17": "2tjqbYPfmEpsYzcydpyEYtCeUjs9dsR6CziKU6sc2tLCF2XvuZbp6Dhoc9DVVvGC9xV9vDtQ9e2m7hztqPpsLnXG",
  "key18": "4yGW25BW9z9sZhhXuPwXgm9R4ghseMMTyocskkNtrCwYiDBfwypj8vFHYH85uekeF6evE5JirdLdHmeVVUFd2kHM",
  "key19": "4vomiph7AjQqnf8DHs4CR4ikLZd2hpQuku6GfVaYKHk2zykxFeLZLpoZ33n58ok5oczsRSBwyZH7dwxi4xAUte9S",
  "key20": "5Av5Ug2VMF8Xkucdjyjxqe1GWixTMrMqxBRYrpbKMt9aVZQy1mpPmowyEdRArmSgXXcA362ewFD4uPrmbpS8YY3Y",
  "key21": "5fhLpyS5MdeoMpJiJ6tN2HtawVfsFjf4tC4ucNpWWhmnnDZSaXNnG3kjHkK2YwzahyZzE4zQ5vSZuWZxQBkSinft",
  "key22": "5h77pQT1pEH6UAkFWhgSu4Y5skLxnPWTxBYD78uNGP9nYM7Cxoz1cWV8LWqkGWTmX9TvrmARFTPwX7FD81fujbrt",
  "key23": "3MaAFJbmpgDtnxXAxe3Egq1bcGXLpfQ6diBGkpmjRDXyRJuL4Cth6KfwvFKRxpHihbg3TYrhNDz3JMm9vGJN4JfH",
  "key24": "3GfFSPE1ihy255Ge5LJyhaqkYAkCfsNQ4W5poPwfZgdZWrNiMm9cqmV5cHzwcTHu62jARYu4FpVYNdS7AQ26RZJW",
  "key25": "a6NH2TRP1h71mNypFEaJnYvHJpmDit7sPQyyZZNM78SsWWjzhtFVhM9n75k5WgFdY8cYj5uCmKW6WF6GjJaPKDv"
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
