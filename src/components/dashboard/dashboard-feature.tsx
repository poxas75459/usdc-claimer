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
    "59c1ffSc1t8owmdRUr6uE49SjDayaKEfnQKV2dhXkfH4W717V1Zy33tKY194sDmbdLpVF64SHr3Rds3h2g44oyx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D4b525pHQpUXEto1Aw5rfR7oy6Q4GEbDYuLnQgxGQhRaL5q1aQsfayu77saNAPZbzNJMoRo4P85uvN62v6Tii8e",
  "key1": "2VtQD3vPc6SPmDHHEX47cejSEfodY7aJG72isZyLVpEB94tSgdEQZaGjMygPeESioviyzBeue3MQCmR45CaTm9xT",
  "key2": "3nzHYfK7ocHGWdBivvZRWXQX2RqS9afGExVoSyopGwqwxnwzptFHZtGgC23GnVamts2nM3QWAMugHzUBa7qbkuaZ",
  "key3": "2S8eVP7RbVfXRAp5zbpHHAFRXatCFcFLh7i6RsxdkfZUYFkCYtn5QX7mbbbqS3DWEKZu8uS6XWtxkwMxGgtF8yCk",
  "key4": "3fZMr6fHstq2Rd1nJyAEpBif1xGAzVRS3R6CdpVnPZ7YDnLXvNGYbPCpjiniqGYKiMLi9rLATy76bpxgJV5s7Bes",
  "key5": "5EB4WrsLftRwE3E4CvxfsEovfJHU3ST2VcxsXCGdXLvLpJo6uZY2roeFxUsh1iaaJCswRWFV4xgoNpcr9yDXrsYY",
  "key6": "3GgyzvUJvJsZk989NH1L5mE8qELrgUCswAMTPKQ41uTu5GaAbo72Fb6V1n4F3v8eRuKd8TRrixNkAc7zoqQ8Stjf",
  "key7": "64pz8G5Qp21JZydvUuoAbRDyVzkgnhKsfc2dNhjUNuvHApKuGLAQPStfT7jLx5ds6mi7NSiKgrovw6BKuurSWo43",
  "key8": "n4A9vPXLg451DmtF5hDRU6dfy6HaMEFdzU9P7pnc6BqbUmw1PjfVdhb1LG8Chy5hetCqWxTyELXFCSujbv3BGiS",
  "key9": "3QWZZrxzaReDMFeyHqKhtYBJyDp97aYeEj8sFkcUwo69dQETTdkBtmYNhuEED6nGZodEJKqjZwyuGkV8vGqMbLf",
  "key10": "5Mhoredj8RKCfudUa7D3CCA7UzkosQ2TerxQWU4oiUx7ZoX4UMdJ39UnoJFFmYtejD4DEHi4xwLxFTzB5zcbQRDJ",
  "key11": "2qjid31Z1CEhFuyE8dmVW4rPpNUfkuNagwMzAkZiCAHesoTB3eZE7hdfTJ9s7Shgv4k5Mksgt2GaqJk5C5Ba6MU1",
  "key12": "4bycgsu59nbKs9Sy55ZJ5jXQLRixkPkwBAE2TeAmNYu8yCExyFK6fB3mrAjmj9FZdGc4spMViV3eBTBbpjVUovnR",
  "key13": "2VuvcsenyUz1vtyz1rqfGpZYYSRWtCtD5gfoTQoouRSBqwK5AHLD8iJ1847RGCMnF7d6TFtE1HJcUegrPYqGcKwU",
  "key14": "3cogRszp6YZ6GyKjztKcAuZQrURpFRqbJCrTTbZc2zfL7g2bDYbFXpupdPngVVWdvuaJKeRcESvNWdG14mp87fGP",
  "key15": "46YLSK415mrFSSP8A6vzxj6auyakd488qmpNxKZEMcWsgYwwqrkSH9PhQBabmNgpSdFR2xLJN9tytbaYPemDRhN7",
  "key16": "5fHW2QHYQbvUChBnhEj475MrhtBUFgEsTe4sV7PscLw8BDA2sm73PvmNRKcVYLr1JS9t9aVfPXX98XDXKSB4GR76",
  "key17": "2WmQqrkLLQP61S6g2NcET8fGVduvFd34imP2f1wVNmBRFbYEddzvXUboM3zTtoHBYUTDf592JXXPb4TuTZVPHF3t",
  "key18": "5KVsNgM15Ujtqd9wsbTUEojoLukxM3QyjGvARVgim2mVuRs5bjiNadyTQ7zYDgZAMDTcNW1gGPaTWC83Ba9QWow3",
  "key19": "2a1vv3Tn9EviouyhzSiCKUseA8GDY3MqDYwyzcZ1h1Y1iVokL56NF6iy9UZY8759kH2kCXSip6dxTEqZ6pn6fmoL",
  "key20": "5t8wmjdupjY6AxV9dGsUr1NZBx3dyiHnParEbf8uHuNU3AwNkjY6ndWA2bdhS65ZXdGBfrw9enRvgtvrbKYh5xRN",
  "key21": "McL4iusCjdVPAfjzzs8jPiKoxAgBYVoyqciZEEHzPmUzUL1VqcrDwfrMPMPuTWs1NNAyQWes6cdNF78S7W7ypxU",
  "key22": "4mQxHYK63gUaL4UfmjsTNnocfHEfMUGwHtuN8h47S5ZUfTy6fv6kMDMt36DYKqMg7vADw6ccan9D3w9e8BNq7iRd",
  "key23": "4csishNivMAz7A5EPWyRcvus74r6t4U5Tgk19bcLJPr7p1mxwj6CMJsQvq61Eo6igpeGbZgVsWeW4Wp9fiyckr4d",
  "key24": "2rDi4cjSoAEuV3FZzfqk9hoRXHRBv4zurhVk5EbYs4R9xRV9yrJ2eBkBqgGxEm58JUtDHSz3QRdoyrRUo1taFNH6",
  "key25": "1HBGomQ66zqXVPwNUyf12uzpQaGrvxHpjYJtHJe7Z2aShkfS4TwNCHRWLKHUvaiRutapVRLQyzXCe1vSkRi2Ttx"
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
