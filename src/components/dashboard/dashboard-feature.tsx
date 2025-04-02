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
    "4viJkbD5amA1m5xHCD8acKBmxACCgjhqbYehbyWCDsXHtx4WnHhL7jyCQF2kFDfnK4c3dApDzv8A1tixwKJsaTAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ix1a5NjSbhx5f4ptWkhDcvGb8T2bmAV36cHhh9hFKHBtyYawGNVsSGDyjH2hog9S9wA4n1CXPZ3ZQkXsyC1URXA",
  "key1": "2Go9ENWW6RH13JpPkQ3gRtTveUx9RDgszpWjtwY5g8cFUYU2RzGswjhc6nZyoasugXxmVEtS7W66rL8Pkj8Jv7Zf",
  "key2": "4oGSYCCPKWEij9sD4yjxpF87DZJdx2AFNcaxhz2SsdJCzJo9ihAbT1VVCQba3cpMLEqTpyHveqEt2iMibeDrGRxa",
  "key3": "2LhewoWzLTZ2N1fVtZiPt1BetfgDYJzgLAALpcPV6z473MBFTWwakwwNUxUbdBARCzKYUPUF4nSpPRefKdvUNcAm",
  "key4": "4M5prQjA85rB9JjVWRNfrcPoTQqu4hxG6qokaGiG8p5QYCjFYsqbz1isczckgo87sj5Z14ziveYgz7AJTzDixePC",
  "key5": "5Jvd7KNLprz13dnNgdUDNQ6aP6HbyCgasdaujv5nm43c5xhGDrVNBawWypkwye1LLKtSGbpy7UiGmhzw3kPVcXKw",
  "key6": "458QZ35YEjEEJmPUioA7SB8P4Vor7RdRPR3ZcgK5rEqeUd7FTjqKQmjoDT2SWFagBT9enZSNNqrSeg1P3KccbskR",
  "key7": "54djPNTY6WcboTRJcV6tgte6s7hFcLFaFsY1trCA1QpS15pADyA91LrSfpZFwz4HLbWF5LczSbSwx3PNVMokARcZ",
  "key8": "47Vr7dF5DL9zRQ3wjSCCvCuPJY8b7moHk3EoPFyN1gRZmdG6D9Qgfb2SMZPs5XpFZcSf9UUkaxtSqciK5QSh2M91",
  "key9": "5CeMCXn14Yv9xeet2UEscSnjvgThibSMf7kfxdFPXp36MKfWHHacY7Xa1c23spjo3uytf7S6chkva6gmYLrZuUGK",
  "key10": "44GbsLWRAnYpcVsAg2yeuCymRfp9KyJD5iQmLWBHiEJ5vMUfLFCitTZBEr4N6UPY9ixHqERZV3R3aBDgT2K3paj",
  "key11": "4X7fqQiJYjcKNzkGoYqPv59UMkfJkYmS4p9Tpen7hbV98YTRckRNiNDEsxbB5xyniM1Q6CCe8uPuXpHhpAx2pMqW",
  "key12": "EBnyNeQ8tz3GZrBSt8MLBqJGSgsWSGqvSpRsaQpUW5eGi5XxRQUx6kEDB6Z4cD6B6YZA2FpBPkjoeR5Vkogy55z",
  "key13": "2NGXpew1EUUzZqqWnYj19PKYCsDxNxUqTRKLLootepZUsrk26BwmL1VpBFeviFYn8c4GVEGJ5j5AQFqDCoGRjiiA",
  "key14": "KTej93RXMUVaz8i8C1BBXdS71dMRKjEJ3JJ8Dozk1Xraaw9WuiyPHwcUdMJFG7uf6kQgmyBBo574UuKM9BnPYZa",
  "key15": "2KzTugdXxPLiZ9xznKkKuouPeU5PuxAvQhCgepvgyE61FdPBpm9uQp7M5SyuyqMT36deZe3bhfCyCcCYtossyKzx",
  "key16": "5Syu2twUr4gfuutqaxSHRz2S6hJn8RbxpaCujHMUM37VBSm17a52jGHbVqA98cvmiUJSGAuZatwUfzBXcFY7JGSS",
  "key17": "2m43RLNXwPMjEzA26gndpcYVRPVByQYzC7i9evheeoESkLz1Myo2PgTxvHqAaKV9f7MKiCfUSWqEBiPpqR9b7Vdt",
  "key18": "3zxMonmHx94Vx5D4FRpfxyjyiuQ17M5EKfAKsxvQcFzvTrvxryPhf4YXH2RcaCUsYdBGVVKZCiw2eAJHLi229bzn",
  "key19": "2gTc1nBNiSU2QJKy7Xk9nY2dT1w6PmcWmWTHnbmwo9NFKgpLmiC38B4apf154h9usHscozDa4XmLGDKajfaCtwiR",
  "key20": "G2CjhuKjsDJ7ma8LQi8MS4gvKLCBAsjDYcBgmB8uG5x2izK1Li5VFfLgsG6NqY3awe7CyUHSs2CeshpnSDJVCzp",
  "key21": "43m77HkqjpxhLSz7EiKxVy3N1u3nw1HEjdWib1zPoeDp2c3NWTSz3cyZFBRLd2rqVTX9VhAajSR19ca3iTyfrW6g",
  "key22": "4Xn7h9bMCQpLCAJWyLwtf4CTEt787Q4c6uVPfG7ngZd236VRRDYpBrEWbCFhpTjj9anKRozC2CxHybCxcrmUSRjh",
  "key23": "35HRiQsS1LL3LJYTMtpfwq3PyWB14c5a4yckc5X5R1Qg9MmKLuipjFrQ2A299Qp7hjdmFFY7Q4kh7SNNJ84P1cFF",
  "key24": "2unVvToULkDhegvZ2CFFRFfVH4Y7JN3AXxETTiQy8iWt2TKvhZGSS4moQjauCtSa62SNTszhfZCucnFxPBZ4J9sX",
  "key25": "5aXRdjczGg4b3JszZLBj7yC6ySqaa4zcRtVovGwiDTxUEYNwTFyhLQpZa6ShUvKzAj1mHi4rVfYNwtxp3d859mHT",
  "key26": "5hxYNBSgSpKGNF5JtLJSCEMvzQL94Ktfe1VKoabT2X8sZgUePWUuWMHK9qpXcauBJHEbcgR71JXKcLdcP1YyWvHN",
  "key27": "5SSyizc5ssCCG4SiS2JuZAFGTvxnGWC2TNy5W6rHPbbXqMkHP5B35FkADCaXWgFUnvkzTx9NADrTzMwoLnprAjAe",
  "key28": "4rurWLjWbjrwF4wvY2S66xdbFKAauwJWVAWV816vhku8iRSxfXWJqgEaKkVtRK8WabYYu9ifuW9MLnh787LweMBT",
  "key29": "4G1kJa1mfWdDYdWbVv2EN3pU2fZwp7QdjuW22yVA5gZNqcxFhsUJSEZVpef6h8siobbqEHGmsqfs7Y6RbZvxgddA",
  "key30": "3JYqVZagcVBjQX2GirGmHCVyGXryPCE6pAx4fLy6C4DxMsXpM8VaVPEcvPLTYuwd1tADVzLwPvg3EeaUjuAAtyHm",
  "key31": "3W3UrHfKWU1uqxM793JSv2KaSyqJdyJvxBkAVvG5nt3P6tJa3nHr5AAcRwzgVQthVWA1jQvQNFu6RjL5hth5XSaL"
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
