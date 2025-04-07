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
    "5FYu8c52Aqc3yM3o4VfKsgjNZA5d13aQMo5CnvgeprVHCxyXDre6XX6oNB8PQZQsTzVRcRiq9C5Sf1z1SkSP7AuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BuPt3f3iyNQVh697a48d83XTvV6GSbAtdfQUiubWBaQMEK6bRYw8s6jtQwAS6WbV9dRtEeaurBGb7vUMj12Nx8j",
  "key1": "2NP7hsVSn9SbPyxRsjwESEWE7kSD6nw9iiU9PQJN4Di6tbZ2XFJLMHRE8CFmDB5vsxRDnXYHW5jCoiVSVA2Vx9qF",
  "key2": "648h4AukYCN4G6MLiHUywFdS7JFyqbuXVUjdEdphVgpzaCKZc8sonP5VqxcidkRptxCkHtkxUFUAusj4yjm5JVqH",
  "key3": "3tzAwT3hceF6kPZXWasQr75G2V5YEFqn27mDoDbtPgqoErBJ3J2UfGcLUiox8wgves516aWM91uP8AKZtZNiED67",
  "key4": "XF2im2ESKJHZ5CcGVxkHa2xKQ3FChSJnDRrQt4HHZe86STX8BzsWzA4eQMmpg12y1B2gCsDVZM86Taz1UqJH43a",
  "key5": "1voJTKZpwHVAyqoBJxktRnGkVoBCV1oXhWk6EnGMS1uUmqzGCsGPunAqca5NW3reHD4AVj4sdBeBtLYj6xoGq2m",
  "key6": "LZPsLD68sPg1kbKJA5MnnVY9eG2rKAfRHK1trf6t9U7iChoBkwZ1jRYCpJ96SBc8BVT4XS5tscdsudVCKohkbUm",
  "key7": "5fmQd9hLGSHKJ48vLoRvikDJs8UrneYzcw1vxwnHz52hoy6SChfVKPdWNh8RxUBdmXbojBV41u2ovzHJY5WxqWaH",
  "key8": "9eRCJHGZJsMxRx1uDSLJF39DVsegvH4GJhes8dvYyoBRJ7y8GypDaFc43vbjrJMzsgzqeHmsmDAz6h4ApHqhycb",
  "key9": "5jNjfWu8zZs5J24XRkr4gKhv4rELiJQtwvdMr53mKpyxVmsmJyYEL2Y4Y7YfCHJHsygtPnznR1wmykdCd6Tb9Hwe",
  "key10": "atX9PU8Djj7xMDtiCY4vtgE18wG5cRvPVpt27AJAHyad7NZHDh8qSxGsFyPfophHfDSihNaE1VRQWaG6hSH8kQC",
  "key11": "RipSp8s3c1s18gWQZDUViwyrtxwmsdzeVXhRupBgmVBPM8yW568hoiBJEdieYyCYZ6xAxoqfzr7mzc5sUNiqjwG",
  "key12": "5CZeSA4wwX7eWWgu2LowuXxtczjBJ7JNiPnig8EUxKBkCDSeyrzkUcvABLwynaok8cwi8T8EqGP9XMesyL8YK9Gu",
  "key13": "5Taw7j5yRtbkpQxGU7hNMPsBxy6pnw4EjApk9JDCqL4T3rQVfZpX75PZcJtPYjnHvACrbDno6YPGCSpeuysvntE3",
  "key14": "4w3GaMWkpZnLucdfJLcN5LTH4unuXgB8a4HK8maTdUBfLAtx6FYikejivqwMGnRFvqWccLpsuhrLxgKdH6SAxNpS",
  "key15": "2RiaWhVjQbNeVUBpRaQqSkVMoftgUtjGqTtciyAkLfK2QGSK2cCr1VnHs6bU1Cs5HfTXSp1BDrDY6Tcafr37u6CL",
  "key16": "3VQsf8h7csVg4XMTNnbGpjpg1p2dTnaPwQdYYipYfEfvyb2v8fdzYa3mB23Rdb4BX8Ze5sQFtJjuiZqxPJbc3UVz",
  "key17": "4uLr5CYAVDRQvrvphCHM8znUtY38eWV226wf9UwDZg3w5bE2PgHp9PdHDCLQsyWkUfvWah3kZWeuYWdCwJa6j8BD",
  "key18": "djGrToQaa4zE9qPhkZ1H3a3pRsDubUiZx83jpZtHbAZ5LJ2usRQHYRJMJoEuPMPVtbuHEs5rSh6z6mFRSBrvWTD",
  "key19": "4qj5hRcHLHRRgEMPBGf6U8Lfbza2g8urXwsViC57qU6FteXH7q1mmc6uYMD8ei4b42qa5ax5TcyAGAAYQmKxTqDi",
  "key20": "2ijNXDxRnrfAsUGuHY6Mg4B1gSUbkDR8dEhezr7VVG4RrwmDdgLLFewPdD71YrUmwswb2BzzUBkmNq1GheFGifmd",
  "key21": "5kLusZkW54fa6wYpWY5dmifDgSConSRk7zcAZVFv9aymU4rDiJibFrMjY1yj2p7p17NM8GDLeSzLjdXgtGByLqM6",
  "key22": "3jGwtYEe7XiWvgfwyfZpipr8FgJkt4cCSSntqgdZPoHUrQWLHu6NBhEtGiDiwZwR6dcYPwF8bSzRV9sC3iUtcFgD",
  "key23": "2tBmwHqst2EwDhPCFTzGp6Unqc4cobpXanfXxinVkb8AsL47KK4t4wqB52xDiYowvh1uMq5tdWtUL23paeqGGZ2c",
  "key24": "w4tPU8hHq6iNRtFQQt5pWSmQRz6ysrVpiEbqF71NfTCuThvQdLJknH5n73xzPudE3jekvaioe6GBy72dGqC6pwK"
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
