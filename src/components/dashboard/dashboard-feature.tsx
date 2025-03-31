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
    "ysGhJwQV4qquaay5V8nPXJgf8fNZMiHEXpSGkjFb3KrqfWjenS8Sn5wmzNPEUDVLTBXkkpTCai2phc8uosPBus6"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4T6shxyJr8BbpN1CsSwiF2tP44sU7tFSPdAB4oBDY5r6skwyqPsemJ5MvKF9Sdsk3Vo6Nc4ULhHWHp5YRZFcdyES",
  "decoyKey1": "2oMfr7iqh6Eix5aBErw57fgwHAgCvTCC1eBEZSGm6QVPkrz42JwZif8eWW2fDbEfztSf7pFH2Lx284GG4g5SnAGL",
  "decoyKey2": "5zGp4YC2qaxKQgdqY7Fo6XPrKwLhtUFAK87g17UXzR2wpLxVqPEBHBiNg3eJstMwhzQAmKbDkDPAC4PJNr3taQJ1",
  "decoyKey3": "5FFLU5sRRN2JoFnVuo9kLS1KhH56AxbwR2KqSs8JDu4haEaznbuLHB4c56dJjeVt4k9GZ6jGCwntTc8Rqm9eS2zG",
  "decoyKey4": "3HESy1XwKE7aSEtdGtHn91wuoKnygSDr45ZqtbaqZkV7ATuQTK1rUKZB4JMbF4DWsmFUn6Rvbab9ZgmK6JZBgb6d",
  "decoyKey5": "3wCJdxxgZSboxScpkBnU435JJX1Q8vrpb2rfvsrNiMMS875goxF1ASnUxjT5zjTdwrP8g7rzvv7sYtBvGWbEx4bE",
  "decoyKey6": "4yALqgvU6RCpZAr8jrzhUFqyB7U1X8CRQSgpvwpkM3PkL4s1vDDrCtWdRMb4bcVFWZyG53GZsppyHvUeBbYmz3fp",
  "decoyKey7": "FVJsAa9mpi72DLDib5vLQHDMHsaFFBs4XwrsMEzDr2zy2w4DW9yrLZtcraAWgeLQdLSxmnHrsjmAFBvKyTxJhfA",
  "decoyKey8": "4Prcbncsz5wQ2WUNfKH6P494SuG846JVdxruFUbMntRdb8Tn17PTFMbsSnpjPa6psXbRzfw8NSa8GwNEpewmj4An",
  "decoyKey9": "2WqNfzvupcjTJGTXck2DYjw6zoghHibgwqziYC1xpqmXCDTn8Uwhay51xCNa9655qAh6EZD5rkx7EXqc978r6uLx",
  "decoyKey10": "3jhUu7SAG7n1vQG1vKKrrruKok85Xqq1LvV1HqNmZ974Hsx9hDfCWQqjF6Mv8pAmyxrETaaXUNT2jnrBTU32kSDK",
  "decoyKey11": "2P7RpSeEcufvN3AzWfQ56mNsrTEZFHub9pU2v2XJ6q9fb8F1rvdbzW1Z31QdigmUbRoxpXRJEu4zGZDKCbgzaDg9",
  "decoyKey12": "5ScjYpgXvHsLagNv4JLJdHH1nFCpqsu9RCCYLJ4aPF1RcpyQmUygCDFBEbKqbg7y4ARXXVT2WmDywQmgUUT8TNJj",
  "decoyKey13": "23StLDgZJNT9DMpwZEMtDBeArxbTE9tfu4oDfQX66RxhtnFgx4S2ye5YXDoVZZKtsBxx8MNB9asmuirDkQyWezFA",
  "decoyKey14": "2ZuAfdBhtE39BD6ZovRCu9wAW8v7LHWGW9z61k9zF1H1osSrAvmQc6b3Qjyzq76SbCqkVc8s3q99AvzXQ7WgMhcW",
  "decoyKey15": "4LtSqxnYXZcqZmQFDD3fxJVugf5TyC3Y3cFMpAPkWayJu1P6Wc8cRZBC6M7ynxVRLqzuRQjyKtxgUuRkMsiZn6oH",
  "decoyKey16": "233VYMXYUxKa3yRmLc7vxaZA1DLyL9Jui6MsPZcW34uhVyXNdftYtWxRq4qiUKvighh2MG4KpbA7FVBcLqjBbwDR",
  "decoyKey17": "3ju7XMjdY7VqjLLHhusfFi749oEpsgBugqrG7p2MGFaPWjD7r8Sj1ff2zrCL68SnSnBoHzr4xX1sQPcD3xfSrMD5",
  "decoyKey18": "45ebejwcvFQYBd9fxvtExpczNeBrDoBqfUSJZ5XRXnn74vJvXcfkKciF3WZM9bDpM2qPwjCzxv6zVCu5smwdedxo",
  "decoyKey19": "owwW9ztDJY1T7dX3twwgVSbWEvR5LRJLVrMDHgmWtRF2nAaQ9A89tCgVByQ8pxHUivRSwanyd2Xy1bXxEKnGcuj",
  "decoyKey20": "vpWe25G4eSQNY4zo1Yv1gqzUDtxGRA8VxYvKAttUx1wW9rAGxSnHTz5nqJZSoF9NipcDs7UoGa3rjXLoaonTWUU",
  "decoyKey21": "2qvJh5iNjq9kFMKhDTzUp6LeYGxnhx4J5HadUUVMM1JYtBihsTJC9wUyacoTcRCGRZzvHxfKrJSomsyExo22LZVi",
  "decoyKey22": "3MQz2AmHeTV7ZGiEdTgwKKnx8tsTJYvMaG1WeStxFaXsM9DUzTwdsahFwwnDABTkCUBtfekHwszbufjC6WHguJN8",
  "decoyKey23": "381fUSVmWMaYY835EqNEWyRy1jwSd9EMPKJzyz3cb1NGmDhzSguSvXHvF8tNPumNtTPcDC2KHKyDrHubfUcGRyEk",
  "decoyKey24": "51SZjkW7revXNZNaKQCTwmwgKXCCArAQv1i1Arb2riXo8YZRQ4ppMFDbvX9DE7KdzRH1EYHtHb8La5iYn2cnGdQd",
  "decoyKey25": "694B3SLRaoymrqgB5VeZ2TScHcvpQjURsdSzZ3YYX8Wv94tgxqoL4bT6BHu4pj59bSUiYc5xcyXw5XJ7uWhh23V",
  "decoyKey26": "5ycbqCN4BeNqSkmPQfdwcrWW6ZFsiNxDpBQ9eiU8jkVe6oQQiv4sDorbZiBsEMd21WrnLppUUtj4WvqAy36TdCFh",
  "decoyKey27": "2sAvJB9fTtDtxYTyWNy2vQVzj5tjP4Pv8YmoBafAQJtQBRpsJAicT2qSh7Uk3DSVaKmcEnL91ctSvMqLtnKA7jUA",
  "decoyKey28": "56qykXYuTeiacDqfR3jNFpTh9KEhzeKPi5nuDy4YqAoRM7j3cR3bJPrFczUoUQ83QdJ67eijyCaT61DkGfQvBBLj"
};
// DECOY_KEYS_END
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