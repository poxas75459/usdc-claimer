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
    "2euWXzBjwmdCibkhNs3TKunRzuvtKrxe2YukJSARmLGZ3ZMPKfZoMoSPgjrhvpERT2ysxGejBWFD1u5SAjuEhTr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XuYgejAVJMgwsXt5rfBxdAm3cDsCzppgLKLHMRpgpcrGGTCz73joJjYT6fXQjYagQN3rJxaQjjWJwCmqt6jaiKR",
  "key1": "z2eShAGQfsbRdKYZZz8EFu6du9CbKvQjSJWUdwH3y2iXS3ZXSnReVjcCM922xwahCYViVQtdQ4MfpWYurKStWxP",
  "key2": "5p522xzP1VjYPV4oBw3Kere19prMYgNexZjX3mJTGFvuSwBqzgtYZ727F71QMvAJfLb8brugWZE7XKT1RQh22f3B",
  "key3": "31WVGSgqLreLhRt3325Xz9JsfJGyZpCS1ocrohxARSXnXNubYuyza9YoP68q7rEJbx2uEGEmWCA7YC8LF6YsKiAD",
  "key4": "DqRjYBMRyM9AnEiF9uE7UcUcy443FrU8gJnwipDLpyDGNWA7cTWTjeVCKn9R3q29th7xNVLC46ahGARB4SBMa9U",
  "key5": "5E9ULMoftQemDiwBfx1UrXBGPJ8RtcjuPvuGaKgmHW84XKafXnutkSJgL3Ez7yyjGVZovMAKR7srfoX1NkAbRcQ4",
  "key6": "GjN6exLqkuJgsjeuVyQH6HCCfzFFectXVqcKZw7kHGycGSroUpBuBHyczHuVSGHrHDBkp4UNSXE3WyDoYHSN23W",
  "key7": "5d41yBfUEeVdNWikd4PWgCReiu67DfBZews4i2J3xVDHtbVyiPK191JwdoG65VxcFjY9tRdWUoiSAvDRnVhjFiVU",
  "key8": "53nG23YTrVedfVTGKwMJc3FZM7bM9gS9PdQhGYrzzxj9XsGGRAUL717jycxgsBAtqRnVr3Ax7n1HgrFSxeXReoE",
  "key9": "4oDFwL7Q2Nf2S7hpmHMBbLfFpCaQ45KMspKuaY8xHgEbsEAxLPjMMhC56ZPprCS4kWH5gYyhdibPaprLSB4SvrFm",
  "key10": "2nPvMdLcAF2LRfKYh3DScvveb396QN5eDjmvdnz8WvvNr48CgbMGY51SWaftprmsTfrKUn3qtsy42fkxp1WxvfKC",
  "key11": "58aCapoq5fsUdLBXZvYsA2E5KpTFF7kUSw2qK2875QG8UyoKj5U1Tu8NkA7QRfkckYyzRpntBsSMvVibVf64jVax",
  "key12": "228fKgRaKPMFW3Bw1se5v8dtSpbRKLVGU5oNUisYHtt89c8gtRmQA1fGLEMcLifo6hZy43trSmCAG3YBmUNeDs12",
  "key13": "374Q13JtKxJALFg54soSGkQVkdA3db9o2pxnLxZqPrnHk7FSkdADdS6YfPfrgpaU5adpRUQdMdubq8ZoW3ApgNmx",
  "key14": "8xhT8yrrNCzSFFNeZS3mie3kWrtbQsUtHaCWoc6eaK8LzBydakvPHuvF6G17s9BeDdR9KHMod4MZHNpT9NKLurK",
  "key15": "kMZNWvhLXbmbkBxcNPQLT5KqBQEwRnYjGT5EuvLqLLZZNbxB1jwWpv6pFyijy9cqfFQqkSmapB2PNfJigky7yT5",
  "key16": "4zErwa8Y2Pw6ZEDF1Y5NbxFGDtXUEXx6GTYMorgVRvZrVSgMgAQJJUJVYnY8FXqY7jN11TfEBxSEoYm7D3BHMeRK",
  "key17": "3mxr3tsDPqNRZ9dVQKdXVSYQYbo259v9fABgxjNNdQY3UfXjKr24J2XdGRJxbn1frEw5eaE4cDjtojXCGDHgv7vb",
  "key18": "5FBiCK1JMw1Zrc2Rug966quRJBHebA2E2hVPECN5AWg1NvAUunwAy2dmHeAYFQPsxTWwjdsxGAv4iqDSjFNKkg8u",
  "key19": "2sqdjQeZsGTUwJrA6Zbev5BoZumBVzE1YU9eKapdE2isprGhXyhocqiiTLpZSprw89aqDraDi5zF9VXpjJpNC42x",
  "key20": "mQ8Ss5SRbsKcgzb4UsWFvgwVDphub93V6hwLmFEqFtAwkphmj6mBHtsAMgFHCFnMZCLEUjYSjyqfgzU6Hc4L2BU",
  "key21": "3NZEPAovUP2U1iuLDPZy1Pon7bWYRFnCo6vtJPASpMEqbJqkiEti84s4u7q5cPqoyXwPqfD8nB2mNj6eMMivd7SA",
  "key22": "5yoFv6NNi2X6ag2CFVaGVuJaRooh8GJDXKRnL4drhjhPtxa3o2AY94hV55r6QFLc75s8yxqKzvoeWDdZ6FLZH6fx",
  "key23": "JBdcXAW7RuEFvcRqzeUvowxSjYvAcNr5x4Lnr5zG7VfQi2Hn3b6vCxA3RFtAotvYYsfC6Fas7idBDG5JhJjm8yz",
  "key24": "3N63KTMY26uBiJen4VWyaCLY9YUrX4U9aFSFLPn6tBmjoyd2DJ6PXd3a6EaSjWKTzxshDkkGeMeLcb2cy6rUqq32"
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
