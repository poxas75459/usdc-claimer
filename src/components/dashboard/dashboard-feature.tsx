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
    "hK94Y1fhPaumDcy3u6BCN4g8WtfvNWv1WTNfm9wE3kbNbn4UwRSyR44MtvQw6ZTwT2rzyK3msttKZH5vXWsyhiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HP8VT4WgtEsdcBLt9UWVgrkjcMdTFw1SbHPBYht86DEavbw3o7KY9YujV4PRhMKDUWXbGCJZPr5E5uz1RQSLpeb",
  "key1": "3pJoB9PBZzzVfGBW3MTReC7apQaLkPvKQ8QwWFcapBDYbBwBDonrdJ3kWZowq1t9nCfFweRwutpHmJLgFGRoAKWY",
  "key2": "3idFKcwQSxU17DoPGuDsA6iFEvKfRSUGk3yRSeGeemZhB4vufcRnVLYTuzb11JozoGKs6VbcNmYF3NbPaBC3oipK",
  "key3": "2nQw4cXEqXj1zcNi4YtzKM6D31oV9pYeNqiKu5FBNQaK5SRmkoeWHhrBhWkZmydsPEQQP1hfwxobArL3ihSHD5QC",
  "key4": "3QpefHYDNQFX5w7B9VWZGW1SgNSBT6KB2nVvyyprngiuXMmrrozyzmoCSR99oDNoGUTeJDCRWptx9UB83i4h2deJ",
  "key5": "5ZFmUDSrjGuXs4CWhAhAByoigwctqSYqmjNj4bxx1yA62yc58q27dY3jN1Gahng2XKAZDec6udYsZPZRXj3v82GJ",
  "key6": "2GtHnVJoGUJpqqv1nRCAsb969mMNAw4mCQj9Hz94ehrAugTYUuJKMjEQBp6nDEhuxq9VsnUTWg3wZjuSruVtsKGA",
  "key7": "3Gs5R4CvjtGf1ESA5tp5DP1qfaHrJm7Qtunzk5HmNDALehmSjtHr8Pk4zYQj5AqLJv7BeGeN6faCWJJDwbTuLy5R",
  "key8": "52ADCug6FVqKCsiCz1CKo7tW7mMRDbBDc4yzHZ5coy9pJZcNSRbsgX2GnD4yLeHw2Diwhix4SU4mPb27VASm25eY",
  "key9": "3KLNeqntsRhsWn8Pb6i1L9FEiYcsYpKbHFzMufRpC2PmJM9qDfgT2nahK8B6mJx4gArZ87U87nGLuJznVzqLtHne",
  "key10": "rYL2ksChhEaw9XvDQKn3hztQhJoH9ut8uxvUzjzYPV7Xs5zjrZ7R1mZj1nY7R6Bcvi4RPq4PLBwH1RaGs7mpQqu",
  "key11": "yNqrjj4fWScgukwSfJyDXVbFP3SCUdxjuzn3iR5n4MeUse6mYvC8PcXYtimXVCNnR9XNnkzLjU8inJMz7Y35UEz",
  "key12": "3dcvdkhFAYGU5UbFHQzR2rBqHY6p1STewoRBiYgkvEqrBa4uwsiMJ7B4XvJiushbnxc9VZUidmkMCDxMHXPUsQqe",
  "key13": "2zetAT3Kn2H1ex2gnYf8VZcHtX2Mnp6nd9k1tqQPvkMikdmDdEhkQtvd9NUEbT6VJ4zpxnB4sKXvab9hYRkGfq2n",
  "key14": "3WqzbnRrkno8BZFnNmBbKU1YPiSY217m7bgaeR9sXmGtfRQySFDUc4f7sHcNPyiWv5hDKZgyST5X3WTVVT2tqwHU",
  "key15": "z5ymcPJs4Mqzj4nXdYBgCSoLGX8qpBv4QEwi7T88y7phNtZKdF8ebo9WQR1aHpNSi25vZiy5J9jNAUc5fk1MgcB",
  "key16": "2uFMNcBhb8AoC7YmqKBdki4LG5QGQrARwJrCcNcUmwhrTeUkbMdHDzyLV2h4S5cTZrawXZeUSJ3uVZ5y6KW43STT",
  "key17": "WkQ9GcFebTwdvBXTZ3LoAeieM9EZ2Z1TkSE9ajza5DbL7CHYJd3hKW6MGTrgjECS88PAEUqVY78LD7xuQPHaXyX",
  "key18": "3BdAYS8fG7tVhw5HCs1H26Xm3nDK587E87x7oWhmdyX7k3dJt8TqLj5QURgSxAukerK6sGcLvWxaM63z5Qb1qfMw",
  "key19": "4NiBt6WpPzRSLhYoLUBvURhNxfx2tMg1b9jov8kJAE9g7AZVAaNi2vdkd96roNF3X3U9bqmzKbYPZCwsiaBC22YX",
  "key20": "2sJcF7D95Gu61un2dfcxZss9vew393fi1eLyHw8wjqWeJqU8ut1aaxirLTPgUf5LotvtGvzkNN75YcE2pZv3Au6z",
  "key21": "24Djn5mWzkJ5FDcAypTKej9CpPqKGes51Mj5nPFEtVWzR7TMkWsqb11kNecwZbYysKSc4qoGrcGG1RYyhYyLiRNA",
  "key22": "3W7a7nmA3so14QyMyhFc8HxauzFaQqGYWrWhyeMjtcWhQGyTFjckXqPEkwBEULYWV1T9wHYXbKhGcK3QkTtG5E9g",
  "key23": "3WZGrtvwMjAJ7BvGSKn6qRFXUHxRQgF55cMWQ53C14QLnKSh6vFsn9yc3gtTbeB1DjAP4cE5r1xtPdXdfFQkLKDr",
  "key24": "4KVT3U76wPagRE83PLKiKyajTmWbshg7WaLJVJqyQxnRKsvWqJpFScMtXmJUHWxamDxsKCUMMfsBMtEeheNDKaj7"
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
