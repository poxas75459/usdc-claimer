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
    "ppLiLidV3W34Y2KqtovoExA16bFm41qLWCDGHCmHd9mQcNpiXcsAPPTbAKNvZ1oKFb8hgyTTDH3JPYy2wCbGnHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v2WCe9fJwYdpWwwgqXTqauddkixpjZAoSZkPhRD2XVB6vCR47666vPsQb2Ru5T7qzkZ9dnCQDdkjVJCUmS5SfS1",
  "key1": "2upmVzKvYfpsYkM2zDExydZK8FhhHpEi8s95Lag9uGN8xmPjEvvoQVBujwLck3ptrBMny2Qbua2smyP9zUdBZvNt",
  "key2": "2WyDMYmjECH3CAPLw8G782WaMALmeZKD8A3nhkwSUdG2kN7iCUiNpE55c2ACMUXcwxVNW3nat5UcRPrzGrSDHkEn",
  "key3": "4UsggwugKBimaJECoLJMt9ZL1hDUbL1jWBt3ektuxJP8BSWxcR8aNYj3pre8tcHzbC3qpXXM7vMYftmMtCK4hXzB",
  "key4": "51nDVMPM6BKbqz46D58X6EHxp4GiMNDw36txSJCZeuz77ddKQRhxxis6bnesyyUymaigXFMnChp7MsCwcAJnGjKV",
  "key5": "4LLsMPNMfPw9Vfx2beqD8cCn74avKNwU5R76uFRphHtKqgBEk4sfeDPiFXXKhqCJA8f5s9ATXFbsnmtZMKkVAKud",
  "key6": "c8GVLSgKZszr5aYejFoR1p1DCRD2sLJTpAzwKxKbSWGv7Be8dbTqqPbBhWLoe75b8vZbVQbseAXMFGFvYRmecLx",
  "key7": "3ZcF2FuatBiGSeGHPwinJFWZ5sPSvUqajBt7gcJ2XmogTRoKE5udXokaVUm46k1dCQ48SG3gAVWuRUfwvDc46fA2",
  "key8": "REjvHPpRFobgQPiNULDpKRjKUufkqKZrE2Fd4vyprHRtMpAPHXPJQ4DVLmS9rSEuXw3MsmJJqRfXrbtQPVPA53Z",
  "key9": "5u3FPiEWVCD4GakHruMLjYmx1aMfHiKEkSsutLzgfG9RCWpKUtcjKvkCXrLKwFaVVGvUNG4LyUKNWWEtWDqzrXF6",
  "key10": "2fJ2dk7MRJZRGnca5CGhGrjFSAM4U7HwuKrJqinDVQhkVGGUfkw6Nzp8aDeD99aCCfVYfXNMpGGUKtMyksUaHB9o",
  "key11": "4a6Am7Un678gNASN4U8QAR5Ktqku8V1PzJs2s1gVVG2wdekCWpq22Mu8Tf14aWtsvVjhnQEaxRquv7SDBrCmMxWp",
  "key12": "Znbb3FUL49DCBJJnNRWPhtpij3MCm9z2U1F8R8iL3Dt1Z424hpFNZqkbLaVyAHvnwR5SsT5EnYZFQczHGJBvWBR",
  "key13": "2aoXVbyuayuhLgTn52YvUNEYwbve7aLE783gCrkZCTvWG2wwDJENKCKqxu9TsAHciHQsUHsqWS1xMoJxfKketVTh",
  "key14": "2Uor8qF3TqyK9H5UVTdAvA2A5yXpHt3BmYdxyXitsZHfcEPgvQY5FJ7nxctq2FWBqTcdFb1S7obDvesQhuzs7bKT",
  "key15": "2K973ax6d2xwPVPGq1esdgE1EKePVnC6BAPbCsQkD5HehLWrvQPmtuTxazsqdKP1ZB3dLS42KGkFjdVmGseDgkgG",
  "key16": "2SaHvkpoA5N8racUsoy4mXWrBMB59bibnkCQq6QDjirz3CxmqpMxinXn5Nac244ghSa6cSEfpm1XeDFQ8eTrYw2F",
  "key17": "2HLdUiAgg1k4mKye2Gx4SNwUHeBoQXejvwgWGfLeyKFkzjY6qrbJEPTugZGo8X11yvSwe76fYg4agLGriHT3FuNg",
  "key18": "3tEHNUGE3Rt9yec6UrEjpPSEz4i1vEQ4hWLGtZjzhmURr4HHbAbbm22vsSEXRnaGjcuwGArwdBs9ocFGnEeMZRzs",
  "key19": "3MW4o6b57t8p1pWv3AKYEMgHR7cN2Cx7RDK8oMF5sRadunfnWfbpDWKVmiJnv1CUQ6fbwDyxAjX8dqW3PvuvS6Ch",
  "key20": "2Na6qhh3m6hiRRChwJxy5oMBK3rinT8mhey62oMxpn92pVzj84rgaua4vDsFKm9ZMnrU8abkLLhToRoN5YtMmTqD",
  "key21": "4phqgTBYwf5LszzWTLEuGwtd2J4sZZS4a3FSVopJ5KNvGX5HwFLrGMRurP6ac1HZzX1VbVR7iACvSHwYbDLbDovR",
  "key22": "5NzUnZ4YCmtyFH59N2JchMMzBVDCjvsQh3vCTsoNyTRMgRG6ghwig7wrkfYXDZEQ8hueofNz69L4pk4BbhRdYjen",
  "key23": "4NZK9yZaTos9q3vxfhQcFDbPiHj78LFQf76DVQBA8phmn7VaWoKaBHDmkURRD42CgcqnEvu6Xzbk3cxCUKZwoWmg",
  "key24": "2q7bHRfrAggyMK8hxLzzTYsx2BXZseQghKnSJ7sLxvTMhxsBPPuzThD1FzEhUkXTxBhcnbidJU6deXafaMJQAM7A"
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
