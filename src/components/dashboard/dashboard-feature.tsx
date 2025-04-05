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
    "3ZoGd6tTsSYvCdMDjS4HsjQkJJzNsiy1sJTcRvN7ZfizwKz9piLCTiCLidGfgAXAKfqvubPfT4p566jG3CZ6Tiwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o4NhkmYi99dxdyQuAyEV3hiEQecxkxM84Rx8ajEaZWDtM5mnKCEVnbiafARyJmmnbat44kHTcThK4TuC1SEZfE3",
  "key1": "5Tcur3KEHBKDpbfFGn1NdbHqV72Z9v6CLd7XXP7xQ6QB7i2iz6bNgwnPFrutaniJs4sDATDHPqffnm4GRkmt5bwY",
  "key2": "2kZRrZBTQwAaz8KQ9BtsCzWrd14kxKFX2rhWS57jjTBMHchwDJhrhnk92yfTeV15MSZhAbCRyJQkWXAFQ3Xnsm6F",
  "key3": "66hTYwmyCeVwbQweyg3v74KsSq95Lm6FoHHazwJGyi9snRWQY3kz8dNXP9xxYeotxGqnKcYkCDvq8JRSP3HvzVc1",
  "key4": "3CCrb2NhDFVdm5EqN1qL5frZYScnMphGH9hx5VvgXm73oojMWPU1jNt7Jt831125Qi96bW1iFL4fLcpmVnw5kWbQ",
  "key5": "5BR8xPj95NUGcc9yjxZLvkSJE4tuxWUv3zoZEcqsV1BPh8Z8fNJ6dVCmAo3on9UPSHpqvJGv6D66TZ6uad6eKnsD",
  "key6": "vcuUFhbMAYYoBVYcLZEuUzq74t5dXDUwm7hy1bwVYW5M7SQGHCiZGv1U9winjFCy6G7z4Pcg235ADqz4RFJAXfR",
  "key7": "5YgyZkxhrYr8w6rEW39J5jBcnKGZkkHCEEeTzP5hZJkDisdAxFLS7yfYkq1bbmxj5ajPU8Up262QYq1RcqVeHvpn",
  "key8": "4QEp18hbfRDVHtF6y1DrgnLcKYahMVMTBQW16fQZvjcQHf7r6mpUPER1zMhgiwoPsMmdZ1VESzNLY2ahuQ1skbwc",
  "key9": "EB4YedJPLjRKLkL1pD9bP1iXEPKzjU4WB2C3LrhY6kQ45QEZJgwksVCBRzeyjJGfXTSha4ePLcJn9WboGcgcUj4",
  "key10": "epDovLWVC7bUMX7KniJ8vZBSGR1V6VHyoqB8vL8Mo7g1ubBrYcXk21sg264B8uYEGxyKSSp1QjpDm6vqQpjboWD",
  "key11": "3jFK8efugMVrssn76ui9ikYQbo3wLdWKrFk5x6qmVmdLrdn4kTDrpofA9niGVSWPb4t58GM8cGRdGSNE68c6LG9P",
  "key12": "2StVW32R5LinBPWGSdGqRubNcge6oiJUfyCvVYajxjyW59yYoZQDbgtUoxVXJu382YNcSDxovYANtwX6JFK1CAe8",
  "key13": "3f31QRBQdzuHngpoMy1kLKnBB672V5xykDxBAy7QnQsGy2XUizHoE9o6zmyAW2wqxnXmdynzdh8qa2NwsrwtV4ih",
  "key14": "vd2jsyN59T4YofyJFu6q8me4c864kEjVb5tpsdGegTHHHiA4RHS2cfTBSZ4WBg8Uxqx46rB8X6PVBPVQX47BNu6",
  "key15": "5gLDJqn6oLKxrSGi5yrP6H3RCw2A8np2i2XxnUrXWNUDHPg8rGLUzx2t5Yn2n1TeW44Uouu8w5hxZXVxj1zg4vxX",
  "key16": "2tW2eVMdEBwdJz4Buh91xuC833nz8rzm9DS2G5nj9pA9CagACaVSGoZHEcwXTxVzZMwtgUjS9oS94AiQzNrVKKKX",
  "key17": "4tLhqd3ZSXCE9D17vCWk16cJY3eCL32Ya64j4shRqjJUKvvy7C7pUDrxuP9iL9W2EVZBVraPwaQAgdFp9DL1q4cy",
  "key18": "5PhgJXtXrQ9N1p8vNuZoacnQRAboCbmFgk4X8C2zRqvz6X5uKwUEChnKhFVPE5GdoYu47RyvmcJRYWTvjfZQNMVz",
  "key19": "4TfyzivCUdAfxFeyxbTCTeDRXLwtB82H2r6Ng4kEwKca3KaxF4TCFqnNi7RuAMAD99svw8N2kxgg6MQEEoKaVYYg",
  "key20": "4aJLyN727Z2srJuFZvebvQvqUtiaNDSUDDCvzR4oeZhFRjWg5WAotxyogzxqQ2K6kgLEVeUBDj2A7ouwLWrpiVVS",
  "key21": "5F1X9o8EbAvSVz2WEa6idmzTiKTK9bEsk6zx9A7BnYmx76bbd2HuNuL5XofBVgqUt1VPfda3n6ysQFqBWrjk4yiv",
  "key22": "tJKaX1q4B9pkEDYn1qgoMaU7GrZEiCTXNLbMhM2X5RkUa672RLunsHcJVYUG8X1BDmMGXm6inEJ96ogFHCKXnUV",
  "key23": "4Kaq6xxsJxXfG3g8XDCMr5uATs9zBxnj6SSuDAjKEebf9CaP7zoPsuZBFdTzFLagiaKUmJvS99GbdDfcFH6u3XjP",
  "key24": "3KDrkiuStSq8333s54T6xioSVaWTBD9KzFw4z6JURLGR55WSTTAzKBfz6UNASu3E6iddToCVEzmGN3sVDwQwU1uw",
  "key25": "59XhUU1rKVz2zGPqEkqSmD2iLVqHDyCqvM6gXH3oKsAQUQ3dQtmphTys3NvbtqBAz97FxZjp39VkYbwSjGKsRv29",
  "key26": "38WhTLYbGWz8sksw3NWNeniGh9nPGsKzPLvRb6RXvVDH8SJ4ATTxD23Jfvth2y2sHGwBmypPB53LVmB9sToMfTxB",
  "key27": "YmHM86an2z3Y1kDb2Y5J1bdbDBN8BsQ6Br7rX1QyCPEU6RLH9f9u7LtMQXmxaMmEb9Mn6cWpHMZTdCd8ZojRr4E"
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
