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
    "4SBsmbGUAmSLVnwVdLtQYY9VtTGK8s9eYRGKtmJBqdaYDCbaYpVQ3TLdLKBLtrfw281eqxUhz4dJLfwRn8k5rnJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oYRFniXAbZNHqoH2QzoAEf3AVeKKCfEvYY8RwVb3Jf8oEy3qWUdzuy1PTucreMRS47FqhGQbRjMA77Sp7cbrUyR",
  "key1": "3fNcDAh3KHJohHdx9doPHdXuR91uQRCz5ygC9HfnicqxFExRebCNmrkG8jYhHoGeM1qCUa5gEz4obz74giewee51",
  "key2": "3oPySWXPDwE7AW21K8Sz86k5D2RpMH2vPx5dDK7tdTdarPfuNzVVCveMerHHoU7LYj9hAWEGdfhYf1aXNAMSFWAL",
  "key3": "5ppNbFG2TfHAMZjpF8AyEZ2enuTDrXcMJR2ckbwa1KFMEhdwWmSa35amxWZwRccF5cXCeD2Yq3W1dgiWFaJ4u8VX",
  "key4": "2vU9biodZ4jKwptXZrY8f3ppypEhZf99izTDi6GFfZKPj7dX3QUZ4ZiiDekSjojng9o5BVPEpRaN8yQXi2ZjUiGX",
  "key5": "3ND5iPQUMk3dY4vc5hwfxtwMkRnzb38swtpxNTXpphaBh1PXuMRGh1nohSog9eLDX9xJoyXspK6SoexrzE6X2pg3",
  "key6": "2vHs3dHJfmmLLQ5pwo7jnQMTx1Xm75m8ypDZQdYGoHVUDkdkcwqMnd8cz1M1rR4RPVkbGLrGpE8kEH4qCzYxS4bf",
  "key7": "2ifeTX7XWupy64sRkkh6z5y4ZP87HVMtDUQ981MvrPAaP1WvmYZb7WxLkLeG5tfaqMwizrB81hP7za6dGqypLPVR",
  "key8": "2LvqvJTVyXKibrdY2ZSd5qnXhqJLFeJUv6zKquYKDyBa9kyPdtgB9hKKdpLzUah61bWoyv1LjeZibwxTD9ckte4z",
  "key9": "2DNBzpALEZaGVnzcVGKFsejBw1fCGnpoAVaygztFjie48YZUf3Q43pQNg7zfHGif1xMMEVYGcaVrZ3XQPpAb4Fes",
  "key10": "5u5L5uQhRtxbzMT9zA6Zvhh7cqrYLrsHpHgMhwKJodRZhsmnGc7TcvYVcuqMUXA3t4ssFBGs32WFgJx16cTnqT4y",
  "key11": "kN65T4q8sz1o3vuKiJ1srzgzXdSn1mXWqu6wJoVZTejRSYer1j3CLXD2626iJE2Pc2oQGozeN9wXdjstxDH4xsi",
  "key12": "3yhJTR83AjbrpNTWTeyLLhr1WH9MGFmtHqbScDixgsi97R5xLVztUNiNXajmc4s9XUX7f69vF4eznwr8RkhTHEqK",
  "key13": "51ghrZNxtG1tXBBBvCrJymKoKBmCJN6PPX2CFi1DLuTsT4nsehocWVZV5qSdTzTNEYU6ZoCiP5n3CcaLypVjFqLY",
  "key14": "2tYn8SQ4r4MJ4q9Civ8sLGyj63kZg12XBcutNbmjfWv2WAxBu9pnSwvEXEYvXk2aRZNCoiEJcsSMaHALUZGzPo3G",
  "key15": "tEgJ33c76r2gVnH2VjKmhXXprthD4qnzzB9V37k7LKU9a3qEE2rnywVNMjLXdgU8ubHtJjUadUdMwRi7wWqQovT",
  "key16": "4EeUMTreVCfeGgsbqPpRXCaqL1tQWREN8ybcFtSes2DBV5QE99gS5Bdgf4yvdYxmDf8m3xw5i4EZA1Vduk3Ap4rv",
  "key17": "3YeSvySmKXG7mtMh5esxCJbMJq8EVfT51tDPyjYc3za4VU7oJ7YdYtjTy4uoLPQjJuz3SoCfvMgsKnH89DusMi56",
  "key18": "2L1AAKED198Dr8x4AXNBFgQquDpRJbmQpbKpGfxirDPTEg1pgS4cUF5LvLLLjQQVuzGzv2e1hJs7yH2tmVfGn4Wc",
  "key19": "3ZyFu17h4zQoF69X9WEgsTYRPv3sjDpvPE5yfJhKradm1KNgyWoWdDfCF3GMbGGaY71RJJGXaKj6u8dFNbyHWWQC",
  "key20": "5jGenLBz4sCoxGXUXWRBNjkGZHwFH7aTkJQ7nRQxsMfhhVA4B4Xynjk7dSVfiRC78YtrR7BQCh3sHVUKhTymanNY",
  "key21": "3oU4rZ754rGipcTaqtyp2R7Rc5f4U7XxJD2ACcrU9j8Xr9EjV7hf24R5gxv1sPt5aiXvrNqUPEbMAMZ3NKR1YEpZ",
  "key22": "4SHerHrfup17gaTiZgDzt56n3Y7fXRkgjNLLyfNf9C5TjpTbvwHwrp6Jw4sNJD1FzELpyrJegvZWDJ952nkvjdVe",
  "key23": "2DMdWJRG9cY2DwYEucHvUvKpy2b2ZqKqZgbaiopDzmNPK6WdjEt2fjc2WxSLVZEoLdMC9jnZJ3D2wQfX1hrBCH5k",
  "key24": "4DgddpgLDcgU8dJjLBvGNwiNYjUsqN55XRkDjABFmoZRhF7VJfrzRGR5hi8v2joevagsTo7gVNHRUAuHo6J2HYnD",
  "key25": "ZLHbvX8VCDfxuHR27Rv2v9iGSRj7VRonRhkjnrepDQJsBpEAuVTRbgPEXQK3PE3fLCZFepDzvuJwAq7ZMh9rq4j"
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
