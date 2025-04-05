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
    "584dXbDrQogRPmSP4WWbiUicYwyHQqPYtsW2yqe1pWpVQPD3XyPu1r4SNZBPVYufDUoTCvN9fDqngZJCpyQ85CLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ttjDXT4UfuCuQ71BCmNb35Q6cg2kSUFizub8g5QZHas6QgtqGN8oVBeYr6DQHzUiPBCU9xUwYdhmoXwXwnMXjeT",
  "key1": "3VZgtHXNcyCsczmYe2iug22im8EULr75ddCXxWSGRDSCCTPdFsfSiSZicEM9zdy5fdGX1MosfQvfY7PsXsJbTMFT",
  "key2": "5bKUa78RKar6Kc2hU28HK6CG3r8zoDf46eEZAi6h7hjYtC2DC9YYE2QVvCeiJGbCmCP29xVEoi2RgySGLReByD1a",
  "key3": "4dUECYhyTCcafkg6MEYM2R2wacHyRqE4uVAK4mw3PZ2LmPnceFhPb47Ydou3ibte2iMzAg9v6yYZ51iyUp9jAq7v",
  "key4": "iTEswmv5jkb1ACvw1J4y44szCV7yCsbC3WyHBftUcoTPtHhEpxRETUbD8fDMVRpkLTvE8QUJrzzXUW6ePDnRQfP",
  "key5": "2GELN2iVRdjMUKNttvK9TxYU9EDtY1dBKUxMG9GLzh8yFDVXtVxCdRmAipPt8RdjJpuy9bmAYmR9dhm4DfH4WCqb",
  "key6": "bZKtnJZzDV1DfNCKbAzFiZZzS3pomS9XSRxwrKvSSLSSiQKNgH4jzemxv8gBVsYVFxZEFgsby18xZQQPdHDRpCa",
  "key7": "3BpYFrMLa4E64YdHf2RL265nn8EySviMjoDv62rWihv7Aqaj3gUsoW2gCxEHxhULoa8VVBBRwuEJJ7E9yxAKw36X",
  "key8": "2QEDCxCDuPpw8qzRetKNtoT8vdo28wWMXrRNWS5Y9ivJVCHjV2LsHE1DjMvVz3kUvmqohreLRRTTapgSNXdrifmg",
  "key9": "axNtFd7WBkrHJDnr8STtW4GiDod8weraZyDFYQhbV65Kb8kvvniCjcXFXKwJSUrRQFo69HbHvZC8px78FDhAUa2",
  "key10": "dR5TFq5HeriwwYsDd2s8uPnhmwM87P5XEXtqBCj1iDvjH4ATHw7g9ycmT42mLrZVwE3jbQ3c1TU6BtVcf93KKpP",
  "key11": "5UtsvnfpgFPujgwGn1SSjbxUi92zbit4dLz1gdKaprmPQzWupFVVDuPQADmCCSvsRB3yfbAkuNGtbL2thkZbBej1",
  "key12": "4gU6KTG5sYSu2RCdnVEhJUu7vz8U9yfAUQLUbCmagLySK4VNHnW5ZX3grAfT4GMjwLhzFMtfYcNBDGdiHT2J9Sb2",
  "key13": "4gG2wSiaWgqxY3nazwbaW4wP9RzXhw4hADiK7Gvq7JMugRUSAzsDmrzkjuDWRaHBq7YTSqAyPib96jaH33Ven8u4",
  "key14": "58S3NRQZ4vRwugMrUunC6sbVskd5aVunTxgRwkvtGNnuhkstPM62hrparZjbWGmqHarW1ht82Uhh4fTHAPYw6hQJ",
  "key15": "7KEXaVYKamAk6EGd82nJJuj7FdwQtSPxS4rbJUEytyo4WiCaBNZVEsaxtUpa6DSURgTEGnMqEPLTucyFVZnW6T2",
  "key16": "4SPum68Q237zySpbySeR4YAgau9KwpGEdYLtxiNmLGnFV3r3Y9zwnhCMSjv5AiGaYFwSEPyw2Joj33PCvBhr7b9b",
  "key17": "9yEyTkfTV6EAGUVvgtJJR8vVbhx8R7Gq6zJf9y9ojusL4orfxYBxzrF9TGhwsRE7BPqULMXJkgxT1M8qz9swDbL",
  "key18": "3hKgmmBfy1tT5CAEaZs9xmJDRrv9eNzG5dP7Y5NVGSW5xTCuZgSknZGL1TJno6bbn3xs3VH2zMZi8FTBpKWtvjpM",
  "key19": "4qrGa3cKCZqJgwPRYPn6Byxr15sSHHD8gXfdA1uJGLg4cB783YwtvCGuQseNwd7NAeXNzMRm1H8D7fo4b5SSS5TZ",
  "key20": "67BFU4M6zSUeSBATunsmnecxELNUHuEXGwVXDhcBs2okJkoy3ybVBDDKZGjr4pvZkXyHfUMj8uehgRAhNZRkdF8k",
  "key21": "2chR7ehJ7JuNnMGByJcwWgXm4Ho3J9peFQa59YSKwVAhvp5YEcKvZZ3VXrvWmSkroUtxvjZjFMeZXd7uUKiHq17T",
  "key22": "2c65MGgy1VeudsdybQCFqYjLviytfQeh11J6BEREuJiQSku3UZTkpaPbe9TtwWAxNCBkWQQYNpwV6BezuoJZ6yAW",
  "key23": "4WNrqMhzTZSz7C8xrc1Yi5cjaKHnxDJg83CcziKQmU1hGr4tYjwyVnXz32haRUvj1Kz1MNRX9fBnU98kdeEGYY9Z",
  "key24": "xwDDLBS2L91TnwqcWx1qSZium2DtYtUb1gBN8cqcPHNnX1jemPNGS12p1ZzFxCo5eSzvXekmkSTbLRoZEgdCAxi",
  "key25": "9JVFqdLQx9vs8sSMCghptW24AzVfh996A367XseWfASEZx6khAVcxp7EQgbXxmujgJDyyjntews3ddSHH9QgdTc",
  "key26": "54KUje1NbLFNzTt27f8BaB3HZAb5LBpu96qJisRJnvfy7CUQZC3Lz3684vaJh1xgdAgrZvg8uc7xxuT7jSX2XnyY",
  "key27": "AKkQEMqfwbL4Sxb1fwxaWbQtTqpCvxrG2KtVLiVRJpk1rt1AoS25UNDL79zxaFjGP1Q3oDjog5BsF1737u7xnua"
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
