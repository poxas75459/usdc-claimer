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
    "5H1nMFHWv6C5RVVX7PKcVhcBV7gdTa3w6ztwoWi6hj3WESFFzsyNNJi99rkx3WQ5ps3JGErRf1M8HWfg3sDpGeZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pmqadpi2MvQjGL8CJrJQLX6KvHf7s16BeSb9Ffj7ipQGDKhmfzpbAJHYeR5KFneHgZb1cKsSgu6esUmDYF6epgk",
  "key1": "52g5vUW4fwtZmKWzPdF8BZCg8i6mRRnZDR8NSK8rShywfxf6834oTDYRHkNFWN8BtaLiKBpDpLr52TgayTmQ3KZs",
  "key2": "5WEk4Q5SrDoduoMJqhXYxm8WHgQZQWk4P5wZLJztQnSMqb9i469M7c9B2rsHQ4F5pRgeffeeRnxBaB4HeLfdkDZF",
  "key3": "51FTmdE24DgHx2mXtTGkD2pHhd2aS1YCR317QMmQLVnhY1iyXnZppkFtWAHnthSf9J6kp6TScAcBLQGGTW1V36PU",
  "key4": "4QTTugW2mtNXAAApoWFn7t72wZdaa33bM5NMR6LPSPTfsdcJw2Zs5zhvUoCABgZ55duh8pgMTxPoet3do2zKKdY4",
  "key5": "9rAMhShFdC4L4PyP9PSmWbHKsbNwAxAHSaYWejuGzx1s4DNo33ZEADmEmuMq895hSyghm3mmV3NiVRxQK3oBE5E",
  "key6": "4dynvKVGyvnrBqmD4AanUCrgaBbjk5JAHHJVuHReRTUaKKEELEswj8hYv8WxMN84JzsBqY6pS2e3eBiSsCjunw6g",
  "key7": "5qaYb9jcVgCoQ9yhsWC7pdmbY9y9D5QmGg2jLkCiajwX5z2P9c3UxfDKUqJxQQHEtnTTvJHgSkWgKwoeRrvjzg52",
  "key8": "48hDcxFkAfHitXqYuRDLtPjFuNxDA4N5LQaKY4CwuhXkijguJ8PDaSbV9wJiGXDDD9ndUGPcjzGvinne6fnxbLas",
  "key9": "2k2xzSnm1PDwvC7K7aiYq5JwAr78AvJnuTU1WiUSFb3BUoh9gFqELZe6UqVxt3CbAgRMdEGoPAnaRmXT1ugQje7R",
  "key10": "4xmuN5YZ9St6zN3fU2nvewpDAHM5znPrMJ1xUWseXFTEsW8nexYWpE9xs3sxvyQvAUpAPVnbQgfqRFMRuXsdPXiL",
  "key11": "3p5348PjPEQoKqJN8t7TcAuvwAFrk6MsZWJ4scrXYwMhpXV9cq3FzT1Pm6RFgrB54CpgPqwAUEeK6Kvrxa5LYrf9",
  "key12": "9SJmdN8Eme96BYJEBkY43ceT9uCMvPuK3dMDBUC6Cqj9cBDsXyZ9ZUrCPg9HkMA1JrAnB57tUY77VxavrRFH13S",
  "key13": "qMCWHP53yPcghYxpzjSJL7JAR4PTnLcWEXAEHrzziCKG4GVG1vG76rwGX33PdjFUGvA2PF77e8t8LpFmWZJxsFJ",
  "key14": "4a4oyr4KC8UNRU3274zs4ywKD9e7nCVwttQb2TC2JTEU9E1dcDWtg7acZLkhg4iwTfrM2JAtMZqcC3vS3kEGvVUC",
  "key15": "5LvpYvJ3BWD8oE6KkEBP5Cqun6tqQioHhVeWavsqm3autP6VXSwXzeFWkWkMQTpnjiXUSH6YRzhcesyPAoceFwku",
  "key16": "4JooJ8MjXHPsT5TazxPEioFSPqvEd6xhjtFu9VkdnZc68BrsLaMjWvKLW6CeaP4BV2S6mErdkF2Pwgb8AqTrNjDr",
  "key17": "5P22sRP6QZQxFSFu1yqX4398MwxkTvP9Bh248rE6pznytRLVuNJ8UruvmaCto3hMCP4V7wEdPauNUzVcorWjG33",
  "key18": "5iHBjcDcD23bCTdbf9fUU1MXTmA1Cc86HJgE6Nf77MgTZ62H9CazaPS3pnZhTiAUG5r4RwyM94PWSFY8co4VwhK1",
  "key19": "2d8exk8n3xTRNZCKx32u3B8L7f5e4WtCx4xgsLu15uiHLtQ3GPjwNqpHkQ15SyTFYepxx69HQ9SEMxBR94ZMJC4R",
  "key20": "4W2TCmTsoRuVHHXAqEX2S3rq9gZQGjirKQpmVPiXytbBdcwTiAcz4cqMusUPtYQkD6SJYEAkZftevUrQMaVLGjaF",
  "key21": "2xcG2jvWyDR5aEFFAbrZnrFfPkoSJu87t9HfAG6oF3DmZnndH7Ssx8EBWsUJ3rWtbf86habuPkYmzgKw2dTHZVTa",
  "key22": "2cTnuKcogThKcw8w2nEhh7PQWMroSnqTcGXkHaoj6EQBoDs73b5A47wSAdsQFZ4gDN4fqNoCHqKJVwgQ5GBxRAtc",
  "key23": "GgtCUSEKu92D2Y6wQf2kGTn74t6ZSu6wvEPoh8PYJBYus5BJoQkCZ7vYrhsw6Sm8pJquVaP4gF58H2rzuRqck6Q",
  "key24": "5g28kjUPidxCAnJnQWKw373q5jSBZrmHuZTxgcZR7WrQ4Xi4FiEQUzbMGTLS21XaDzwftwUWgHoRMQW141Knxz6S",
  "key25": "4r5ULWJUGWhnxnJQh8wP6VQp6e4kntRkpP3sRBvrRT8H6YFBupq98xBnfNjTmHNKeFdkCbGKhXFhtbbUvjYZpr7a"
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
