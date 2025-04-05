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
    "3auoHNoFzu9Xoha2a5FCEZLv589UfgWxoUgJSEvdLSY2wPZr34pobYWeEpW3BS5S5XnwFfGV6Jbs7SWSNXyaFWPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E7Jf55JvAAcJWyk4LpNZQYhMQBJGQyULyd2mD5ZysQqzEfaZF2bn5uP4PTTEkiz8wdAzBh7ejT6sQm1rvYjRAN8",
  "key1": "4sC7Fdc7kFYqiqAZ6JN1occpnEUcxX1qny23ZoAiaXWtjj4aPK6BEGuNVZKqvuuaJEJhETggcXq3GzLGS9quuYfS",
  "key2": "5SSHPBKBTLQTEvikECoHuuKdBQcvxQWNM9uvkRA637AmVWynSaAcL5C3FDLaeq2JiB8hxwwfXCihUZu37L6qVApz",
  "key3": "4nHytY9qMCpi3QVjRN3rBrU7JsnXAz3hXTj9rmWchUr7J1veCWYb6q8VcZj242K6rs5iAJ8hP8d4nFofiubPhLRc",
  "key4": "BGxoPk4DYYaJCCNUjHWbyNWVW7F6VZRBFTj8mEwciuZwLjh49fYWGz3iEUgjZbUgmnNYUMv6dEgnyFLcAb6GZUV",
  "key5": "3WV23RHUqNbUgm6vsBM88DpJgGcxtjU937C4qGChBsLv26gDoyFaxdphMig18cA1epmj6W52w6aDQyXSdGbgoAaa",
  "key6": "4VfVuKC8c6wbTXcmLWvnPjqQpuyCdi8p8WSLQFEJivWcncmZcFiJvwm6ikRDbCDfHTDxLa5hW5eySwg9cWjUJCfk",
  "key7": "25sqnSz2mWANL57W7SFyDHAQxoTUN1QGJtY4zDknTQ5K3MFBuZ6vGe4rYBbpRAnMbMz2rqmMiGB8frC3Uas5p7BR",
  "key8": "LnvkvdhrYv7cD3j1mBGtw7RfAZYZZK358UqkC6q3vL7zm76eoUcoe42od37EsNJ5wNcofJwG9t71PBkra9pRFeP",
  "key9": "4dFfQkCKgvSJgNtrK3DYk4yBNaDz39ET7gqSDgA9YiFcHtY4FjVYQVcSKtEaBn84tz9gdNRq8NW6R9kByesoLXdw",
  "key10": "4ebZV2crPpo6SdMLfP67zSJRUXYsvtm3j52i1DXu1HEJ4VYkdYDVbAodKQKR3sd8iYugAu8H752HCmxganxtrWeo",
  "key11": "4cmsZpGkvmbTCswZwPBhTLNgppqsxGwneipR1wMXzpEMQyPrgFgGNrGFfMYsdSZrMxbu4x9EsxD4j1swajULZYSg",
  "key12": "2P95MQeGZXFzjSijWJhhccPmWwLCkVzLWz7K1fdHzVSSu468m3QQS73S85KnfMrfTAbKoYK8EvAeojU8uVCa1poY",
  "key13": "3YSM5iYVpQVMDxsygvovWjRf2KXGdFqS2XxQS8sMTCssTwkpoE7ZQm4jfXqgcuzXM2eAsJm4hRNUdkfPTSYqajqw",
  "key14": "54XAKmkFTTzYmN2jvSmNxEe4x1BnxuK1dt6DyrYLTfeCvJQTRVV3pKKPPK2v3zeaKQ2B5fnU4ydZDf6GjM7hkS1L",
  "key15": "4PPsudZDZ1HEJrWerD3pn7sH1V3cqN5t63Z2Ap3V4X3tRf5ntYr8Urm9xRJq6YdRJrCe4JP8HmGZCsgU3EUkNCY3",
  "key16": "2oahrECnYmjKHQdd3gEmj6pwr7PLHZ7ofpHmVuCzM1ivGiM9CiZGbYsU1tJE2989QfZTSYyTE6DTrPMLYFL52xRz",
  "key17": "4xk4Py3TN6JovDDrvjoRNt8WoGvttHbcRimdtu1FbW6Toxf1LeqgHagZDFkS5fPUJ8cgnaoBbJt5ij9q1asEEcF2",
  "key18": "2WAyU9vdNCCo9s5wU5Zsv9dqSkGj2QZDaEd2grPEn6PWxJNfEGfFvE1PiN6ZN5XV8ES68DN6eJKma23bYZBRQYfz",
  "key19": "5YqLHKAkSjd5n8MbewhzXXNfX51d3DTNxPEZ36gACtEwS6cDjB5LY42gfKME8PzbcCTkeRSbCSVKaQxpiELbJQvg",
  "key20": "54xvJYv9ds7ABRAyY8wXDGDHoeNzuK9iVVSkdFs939vtbKyx3YQSjcV9MXPEfybcpB3A5Gw1az3YJrRsVC3KD82",
  "key21": "3S71QjAjtJMEZVzXHkubahKzVBWtbV6bVDP9PVBgJBKzjCcPqYUMZdRvG9PPZvLpVis9bN58vDTjDnGoqTQshfNH",
  "key22": "2tZpeooUUNwqM6kCuy9EAMchzpxQ5znPTxcfvPLTEXemCMEGpvnd3WrxMxEPiXpDahF7v9wXAgf16LqoBugNmzTT",
  "key23": "35NaTmQQGVYnLQF8eaAYMV5sLYC2CDTjZ59rgvgZJRgrKTvZkR5g6iCwpNPy42XGkpuiXou5FPqzFdH39f1vr9Gn",
  "key24": "5gdZpHoXkmrNMHb5emRp77x5PmxdaPAHSY3t6QZBYYmRnAcq7QEUPk7Mrv3NaLxZWsaAb1FWJuKBYJae2iQXSuoP",
  "key25": "5664bDEfDT5TYC6LkFDq9JdDxwMun9HLcNyCNNuFJ3bmkVnPq6ncgVcGY94ReTcak5poq6uBanHQMWwpX8Mog4CR",
  "key26": "qgQLrUduUi6vRzsA2p2LaKUZL8LutjrsePEc1zTe3AC3eYLo2gTen2XxFK2yx5oaqK6DWVJxPAitibW1qKodm7G",
  "key27": "4ypgiXt19iCxtRYHs78Fov561iSpdjVx4PJpoJCoS46VUyMmxgABjRTtoYcW5NnCk8x77x8o7dLnadiLRMgGkWvH",
  "key28": "osQtj4Gm9EJTq7XRxsAV7kcW5BMaSHuFn2Ga6vhDJoaJHh1vT7MXWC2USmdBqfFtaM14skmx9rXx6KzvdQYpZb3",
  "key29": "62aaXiYQeE7FSW6YGKZFtYEztcYJLtwHa7qdrV1ks5Q6vUTps1GdYvRE5zeWgYKiijw3MD6nRQKLcb8GD4AEYD83",
  "key30": "3GzwQL7x4T7QyrtAP5xxZjYuMyHTLpD5QdJZiGAwqRs9x6ryVYsQFEwPa6UvVhMEp7G9HGgT2szATpvQnk7tiexv",
  "key31": "3T6Dpq6NACsqUGRuwYW6vWtgQfgkruwyrK6tpMxm6i9q4NB4kFcSwhDbaYxYhgEaiYWtQWBNXbnNjUV4k68eHv1W"
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
