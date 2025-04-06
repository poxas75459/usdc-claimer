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
    "S2LaG1BCndN97Nw2gmSLDGL5Y8KMEsZrDESoMgebE8JFWAkyp2Vdg5rkRnYvb9eNGGNUVSygVvwPE7YNsG1ruCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EHGtTuyZwMBBZnYsUXekK4gzDhk1NWt7fWPzjmF7JAoP2geJCugCQvaGkASsZDt4XpUwZ5x1qGgBUR8qUMpDPUh",
  "key1": "3ud6tSLvvxp8Xigi86oBZi6s1ZoNyGcCtrFNU81R2fgwCyFQEaYRw3cQJQJSXyC7n4WHXbzofyo7Q1gUXFsG59ED",
  "key2": "3ZpGXJb98DPyZyniaKCXj68ZWzfV1DpBBvg4xNGrEV9zxQEUhZfJVDVS2zBEaBS1CXwgq5CFYufaEzCuaPLh1Qmq",
  "key3": "2fJwcbjF4iFfbtHn9X71MXmhifTLWboUgkYAgKWcQyonpPUcNtWfnup82Jjd2cw8Tx9tf7rGtRRPzowX8GS6tHyT",
  "key4": "3WzttcxkemmvGmSS8ZeDKy2obi5r3iGwBuYW5fwXiRzpP3tfqrDr4wkSE3GKh7LMYKJd8iZa9BXGqSiwvo9Rbr1z",
  "key5": "3QTRRrSx3q7ugXu4WpHRdeGVqjqGttXvVo3dSdcZqQE6Lc8rbZ3BuoZfhX5AhBKvFG7pVYuXG7AiKzAn4xtBVRa6",
  "key6": "SEzsvg45NeFmAhmiGt9yG2o4isEdpLDk4BMCVojYSSWXSjXD2ZAxqT3yQfi5abnYXHNVNrsHW67oDctBUpSjnWo",
  "key7": "2ccU2PipmwoHVGQnTUu52gxqtstGPtfnQ7GS2CnRmniQza9MqsqhuC9EpanjKJK85WtwUYUC3VjFrrqRXE1fZJM",
  "key8": "3f9ttcnE9jkpFvsSeDgFhcyFMuhVe1LHFEYyEZqxyK87U11fKmZSTgoz3qkrdrTaYTo9wUTraDZ2WPksfn1AUAeL",
  "key9": "UyBFELQ4GqY81u3qf6dtonS93RhWXKPyK4HBLBSUtrFR3sMdeK1rvhLXRDMbZcvg2suVJVhDuNoPs4iiyiVfXSF",
  "key10": "37Z5GXQzEFYovL2t4AMxQ2oqvBNLRrKxXTwAukyekxBfN7eAkL2XPnLTba7Ui45fPBWhprTcVUyfSiJDx9J9wNhc",
  "key11": "AD3B2m9AWTGDmGhfXMLz4gA256RbatwqAEgg19xzz8yHemEQNSFNMfgwxxFJgUsoXsPFXShT6krp2UXfa7FAgfD",
  "key12": "3TBoAhknyRrtYhRRxNN6G7M2urqEdZucwKibNecYRBbh91n3uyn8pmGjbsmmcVo4nYizEQigxjfwq1gd6rvVqKbP",
  "key13": "4gLRoBPMf2bTKZByJNmpqD6UTzNrBAhYrumGLVQp8B9oqovHnHUuGW9Zz3RUMoicdZeni3ZiP8fYzER66vZQDCY8",
  "key14": "4BFnoUYNDzY9givJNT89gmYCAWAwgsLdwfNEFGhQoM6y8TiJRNrxRUVm6ERLgmTKV7Kf16c7ttSuAfNmUa6k3MGF",
  "key15": "33Mxx6P1YUtLo5NgeS8Tx5VPhvNEoNJBExEVoEZLvXC19AcedJJjgzY1PeYjp67Ek7DUST1FeP6ii9S15pnqysGo",
  "key16": "4LmZVSzKFXke9BTYXu4rLXToscZRfdzaNPdwmLe82KnXfc5Rt6SodCR6dKbZRqAY5ckxC9bUkmkBoNFE4LKh1ecU",
  "key17": "2akDhVJqBrnCB2bTdFa8KNapDaDXRZa9XfzhL2PxNrfLWmhMh1Hv6Dpp6QsykuhfVewCmWSKMPdNUaCk5cMtxQwN",
  "key18": "3YkjPz8Gbww6EVUW5sKNoxsXbCeK4TWJSwiy1yZm2b4pBV74zgGDmCTovYYfhPXtWFAXv1HbKTEfACrvwvjeUqoC",
  "key19": "5rq7DwEFeHjxsHMAYx5fYMPKGBDZmBcCgQJ7jsMGq34rV5866KG8yQXd8kf4H6fzN6rpF4sK7HViKcvv98ERb8kR",
  "key20": "2eSXDq1jhFWfL55kho3L21Sk8rsn7Tu2PcoAQ84rB3Mdj3aGm3FW6CxsUvnQqUaWMHbzFAdWUHMpjsuXQCvz58d4",
  "key21": "22PSmcGbF5rUH48RMvWRomQwqGcjaCMFMLFTNZjZ86iGBLumyD6ozvscwwica5P6SkyKMzCDLQBH4MUh8G6zpGjq",
  "key22": "5R7AnCYqPhGu5LAL9AFtaoy58bjkvmRamz3BLeNNhw39qQeiGvCSdkYy7ULyXdSi4DXf4oJGZ9ZTXs25rQYQdmWR",
  "key23": "3jQYxqK9im3QvLbAG9jvqNvJrLvDcX1qTgaxw3Qrk4NkxRfMwYNz2muFk5aQH4SmfeuCu3VPjWTKkiS2QCkEob3k",
  "key24": "npQHPZgJBXYY2hmd33tFnbMcyUsNJ45ac6BvhmnA5NV3ak2NPZQgsUoi5cw3kztwyptYpiE31E9362qA1tnHYXF"
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
