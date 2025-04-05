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
    "31bbjdGQMZ75n3ViXBBMohd1QtAeHwqQp8eNJzJGvcmtyVHjLtMsitcgrSEKcfuHWZpk53my5JUtEvwpsynwYBLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oAceyCc9r7u8n4S1yuvSUBVwapdowaVQMGLrSE7ThWFQofxuAQzwpJiTH86jDMsLLm6sXdj8Zy1dPRoj3ZsPWUL",
  "key1": "61xjqRV3Tqo1g6gfUES4Hpkw6EE19ELRd891xjxQS9MW5u6SLDMdFjtXZ3HabhGk72oy7BQ49KTwqLe5vfBGvHtN",
  "key2": "qtN3h4uEJPKgfN5Qk5iujJAqr2vHLhcVzvE6RQsA9EiwLaHbgTMXQvG4AQQ7yH4zdh1cuVaptobwFbqFYRyUK6M",
  "key3": "31khouBXDzbs5ZJynQNX1HSFoRE58wV1wczUp4PU2UDd36vYZXeYvJWRXxRswvn19mSWRTJpYgeBD5aQtK8ruSsy",
  "key4": "39yaiYDXVAsab6ZMoYAzLBdBfpYUbsN7fVWS8rq8Z4YvedH7hq7Hz7iJp2Mo1tDp8gQimgYQJoTCpDNaR1tJdmbX",
  "key5": "43FqvG1wP5yYcnFv43FmYZcFB5b7ByKu8VGoiYnfonQMKubRm6fhpnYsUwjjk7GXqez2sDyWARTN1sQmCQL91qBp",
  "key6": "ZRTCyDABf8nYEJEmQnPqzwmZGtnVUF3u8P6vSdjMcRHPunXizNQeHqqgbCf5dNZS8rop9wsVyqJn9hqtKmjia4n",
  "key7": "2j2k8SUZVDK8UfGcEjuAYXJy7rYATCpLuQWx5DarP1XW8L82FpnqVPMcdvyhqDG1Yp6xa8myuvYCfpCAxEirAD8w",
  "key8": "2sHr1gd2TYq9q1AfaELeTHKzE96gQzHtbvcDEWcWwR2HXxH2vet899XUdoADRnRbAQ3uitnAuUmjNgiL2tuCVh4U",
  "key9": "4FQ31ZvpgeS1LF3XfhxKfGGKvbaaVws44hkzVPXbCDrKorWD8EyDaUftpQSxgmni6ZzJYmNMT6Wv3Wc2LoHjZH1a",
  "key10": "4uD4XcScE5YAPUR9jPzppRajAo7BkXT7Fuo9HiypK82gux7mnPMf8Gnz6rKbsyiirpMQsgYszSJEPYr6npvg1vjM",
  "key11": "UD5sP1eN1inQs7P6Wasf7bL7g11ZrpeyYBFWxvjMWXhiAbBDT54eGCTWLVNJ4ixTUWF3AMtxxdLk97JmGsQsuLm",
  "key12": "36GassiEatwPkMuQkXaa13tjDmaDSULbKLojRBwfZf1e2QsAQxRQ9NXVg4ykyZFvVkzAowGuScXY1nWTA1YfYMv5",
  "key13": "2EqoXES9d6euHdvvefiD3BfGohk9MNd2dzHJWRpUDvXA53TtqYQMXYf8n2rspTq7WTYSXWDk2VqfinHfQtSxPKmT",
  "key14": "UPjHgFcRk1qqyPjfvforFmRN5YEyPu3t42NfdnAuCmEXo2gpYXT3RasG5fhQx3fufKE5ekserq2EskUQW77gDA2",
  "key15": "57SZoYr9uz9peMkFndhXCHr4Bwkg3BrWBS7RZwYVNSDQGYrGNyA5cijktuJtYaCTVdzHkj8F2AL3EZwhajudeeKq",
  "key16": "3QS2TUUbKWKRMeW8w6es2Xcov8Bmmw9JgbGBU1roBRq6vgHMK6gcvz9UJ2SoVp42LRitwGP9qAXh9n1RKdQRVwKZ",
  "key17": "wzqt1sgW3bUvK9UMAgLuig8yW1MTCi14jYMSHT99wLL98yZTyTxjTAwq3p4ZL7L8aK5Z9jxmPP528BcKsW1YDVX",
  "key18": "5pX5JwpmuNYGZ59w1ZYryXYJVi3kGGdr15R9uD2a634TPf7xeZdvwtZoUh7CTGFTiPHEbQf8XCJFDJ2jMMcKrV7o",
  "key19": "2Ct5nGSTZfwjXHiG6V12eqJ3Yi1bfEdpbwvaxPshtcVGJNxwXC9BzPbZymyacaDydtpmTZgq8vbJYw97ehTxkWV7",
  "key20": "2mkG4FQrE4c9EWJ4G9PLQ1duphJ3M1YgJxh9hZXPeFFsowpB9iotBdHDSimtE97jKXEtstr9zJTm4xbVBTXkRtBT",
  "key21": "63TtTXVrnHka7YzuKHLdkVuhJQ7sJW3N412cnadZpoPvckdE36nW9DWorSh1U9A4oCvRPz72BrGujByi6PKpB6a6",
  "key22": "43TtcJyRuHbEmqkdgLauZo8h5Tj6qsUb7G4k8Zca1kevpVZDSFR7ZZ4GHiSnRZzssmPXMbkiqAfaP2m2MEe5d9YX",
  "key23": "3suN2wEiY4FBNSsRDoauo33MNEmmbrihXNzD6kJYj6TneV2YSLhgHBQGNAv5peiyG8HZ4RcabZSoy9eUBAhG1Nmt",
  "key24": "4wPnr2LmvfdSdDZVHZ6oGkWb6Rk4DN45TvnALpZSSKDtPC54Fg6Y4BmaxnbehDEHBe1Cd5srXa2bp5nNhnaauY7S",
  "key25": "3TuCdqgLDxi6rA5Lg4NcaEpMtLnYtFqsLxm8oPMnLYPtvdMrXWB4wt5NSxzHDhSh2dSJ3r8k8bcVPXXF46GsbTUS"
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
