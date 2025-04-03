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
    "62YxajVCcxpmU8bBonBLTzp9u9o4BJfY8Qguiz8NExLyqfsbNHuep4S3YAYCVrgPyAwwLDAesDGrb7dxh6s8TcZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ww3Pg2dx7J3JQbFnhRaFgsHNsrrqW3MBtMFEDiuDcQCRKeccHLR1CZC5Bqy9LqoC2oruZC27DHCQ1x4W6e1UQ8L",
  "key1": "5L5yo4dMKw4qHRSivv2b5R9qYySvfPbDQhpE2jtKkts5cpb2itRqAAPnjmB1Nk9g7gRJeDvKGfbB2H5pJiJYkTZR",
  "key2": "EfKWrY8B7ioiBCwZ3Jute3uk8rhfR1Fang6NXVKW69mJrwADomqfCqLs22DTrsFMDdpGs8zrLd2uqoMrqAzHwuD",
  "key3": "5ZsTPqY2Mpq6SpcmMRo8EBRQg3TjNXWWsxKrsixmp2Gda83ZxmNjRarPHm69xN461iLGsmWa7aTPYaziHLaREqRf",
  "key4": "5fsyqevHMQbFJEXnJBNUuh4fPGxKr9vsTptMz5KgQYAomm1RqPCQwzjJHpFejRXBw9DYfhMErqftcrZzs2CmqUbv",
  "key5": "23LZTApSf3A5erLzB9dx89C4FC5afcKzJif9mJ5CntS9dV3rgZFkvgr1JYveD6xnXhnTRi9vthEWXn3A4oR6AYZp",
  "key6": "3vCeg4oZj3dQW5EgfSL8nRbiQsfxYvDQsVv4gTFS7gP8KoMMUiwJpSxdTJVGkcBFZHiM9ckajEU99ToygX6XZDJJ",
  "key7": "4iSJPY8E7cvDZA3UqmwG6soSKnWZFLBehUd83F2EYUrEkYcgs3DTiAdBCnrWHsNjkMN5wHUf8YqMaE95JVZuaSB4",
  "key8": "5wjHSXxnY1b44CtaoQBvtrLf2Thnmb5o9X7CTQsvVe91xALBq5412sifVtQhdLcxmJSV1JJ4YYFvoZ8QvcttXN8p",
  "key9": "5tN8APv63pQCanin2PRJsqokEvBajtnhJbjZjvnjdmFr29mJ2kttTU22RgUyKTbDJQqtHJXrVCZQtrhgZryavzAV",
  "key10": "MYrpGTqYe77PSuSEQyZswqJWuZJyBVLvC47rmrGtYCCer8FyHXy8UtJjEiqv61U7tQUjzyeKpb5Rc2gHyajR14t",
  "key11": "3cHRNMo6pka5BryL2uj5SFWBWTeAXV47KFURFCCwB9YXLXQDRTEaNNAKAChKGWGNTW7ZPLWT6SxAsrG7PXoTU52F",
  "key12": "5dE98sa9t66gADQNVXskbRQ4WpK2CX4nE65Kq3JNEcbLKvgNZQ8sLaorvkjPzYC2m6vLdm1gv5Tm1YZye3Jvx3yV",
  "key13": "3ETqLUoeo5XMwcwC5BCZgGYTGY9a5oUJNeAk5bXfCyz9WQaorj2eooafLK8tAuef9q9D6sXaY6guCf2gQhvtUGU1",
  "key14": "4Gz1WDXyPSkr86MqcoxJ7YU52vBFKBAJkPDBmGnrFGLCiurXR9CAivkwnpkfKvELUdCE3XVDoG9TS7euh6e9Wuhh",
  "key15": "3zBYzyw1Gw6batvgYDgqZxjYeGqTKiwwL29kGspjCLZSYyjtYkt1tYdoPcCZhnvqZDYSmKhqjkqniJvLWD28Re8S",
  "key16": "4ok5Vp7F4YsNswpap8VGorhcmtzZggQZqnkTVd3rq3GbquAA9ZWEzgWq5CQenfHMkVCDgFsoRxHJfJSHgKxquoY8",
  "key17": "2BYPqWjVc4oNJzbtU5663sWHzUb8kuosctm2meRXb3UhTDqT6ASRrPgEHPAXCK1893Muic5XWeiYJnH35t8199Nb",
  "key18": "4hZ5nnBbgALAzHmLnZbycs8HNjKTtJwhECkoknAAwcADHsDMmjSE7cV2cFX5GfbnTHxjLUeMZKSixYmqutkfJdsb",
  "key19": "4F7S7pS6KFaahjfi2EWfRLv8Yph8jvGGKAx6kDHEnEZJbXHBTJDN1H3LD3A3LSVpBrTQMdaTQerziSWM8SS2qzhy",
  "key20": "3WjP9XAnoRWQnBsByDgRaQ5XbU1BfsiWGcWE473MLdwuq3A7Y1Txa7eUzbUw3GGjHH5p21vmJDGAXQ7Y6JdFqaHh",
  "key21": "T1syMjP1wcMV2dh29SHH6wwBzty4o9SLHnGXfQLm6sZMw6XzRLwCvz8KhbYGuHzq4pgt67Gh6b2DMScGNR95JWC",
  "key22": "3cNnstF8MjafWS8ZcodCn6oNFnWc3Xbyh3238gLRWRCH26ceYaxfS76CaAarwnVSGAhRpzDWkg2JokYEbZAyvy8v",
  "key23": "3ZgHcnSHiaiUuMcJrV4kt4NZEdMekPc2QwDs3ytYF1QFKEaBtmGm2Qzdi2d9iaKJxRR8QpZ33t9U9juP8Wn286Zu",
  "key24": "3xZGZ2kzzEYXZopsBucHb9QemsECRy8N4DwbEnZbEYJDEtp7Zb4t1tFXmt5Cyco4mMaWEjkR7TddrjaTrw562Qra",
  "key25": "3jXa2chjkpevr8v8y7GQC6GffP9tiaYgiPeJA6hcdMkmfgGGj17JNYKiwTEFoaa28UMiAMwGsiZLA9LWx3bKRdWJ",
  "key26": "5i5V67tbejKj2aCXYgLqUXefSBvXDpUDQx9E8ZvwC27o2H5SD2XTag39iePX8bFgjMUakRCrx79WkVyQLpZ45EAZ"
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
