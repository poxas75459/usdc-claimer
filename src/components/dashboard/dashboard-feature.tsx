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
    "2S7ujt8crBfkoRdZLbt4vnba5nWuNaLEFm3Z6i8kDTkeVc5qA5xEecuafNHALcWLh9wHEJX8qn1xJfSa6Db4vQ5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65hrNsM4TqyzUWEsMY3TcyyQV7mCRxkpFnV3DSFFcNrw5DmLjsU4CFcRF1WmwXjo7on7bcvARw53oQd2bfKpSQt9",
  "key1": "gcUpuaYNdAY1VAkHQs9nbeW8afNsrrfYd8zATfvrL8WupyS8RMx351gHYpD8D4SS6YxRkiL2kpyV3Bk6G5wu2Mg",
  "key2": "2J6b4eWB9Nuoj8A6dkd4ESgpZr4p12wjeN2YxnAS1z8ZWto5A1fva4UHYLW67X8jNdbT6QFhafP6oFKZtwrAWymF",
  "key3": "3hVVxbaGHzDLEdxesjZArCfaznahauozXEfhFRJ9Vr2noN4rwG9Mppt8NXiSKisS6kRZAgqRGw9bcVZuKEnoytwo",
  "key4": "4pNE4xHz8HX61jgwbJZ8HofRq1L2AShtYiRoKZxP7wo5f3fiQR7jaMhHsQrkxF3puLmf66SvqriQ61EFKACfR4KT",
  "key5": "3H7UU3agVno18C3VbUsJsBSHZXNgM9TSyFkCMWnpGDksPUNah9EGewQfJmCDQdz9TEUqMR5k77ESsdgpGyRCQ9pr",
  "key6": "38KUX4JbJyYCKHf91ULGnXYxxvNZzw4kg4xZpdt87u1t6q6jCqwfuVWuhKGeZZyjV2WLKfCF2vTxe367VRfw94AV",
  "key7": "5FFcE41xRzZqFQi8LmHqZg11sSmHhWjumrMcv7qs9suUpwL653dv6ZSyymcsha48df8VXQg4c9zC3NSj2h5pkisw",
  "key8": "5XsHRMiWNuaLzwwAW989CtgbzJKCGRsij6eZyTp9sm9CzZNWoZdFM4mQqKN8eufe7yx5FZAAFiTAnjg8YrUC2ZX9",
  "key9": "4WCnYCKciguW24RoD6K5bEDQoYSbe98sAGFRs1tG7UVUQ7cUUCUZ7TFu45xjYgtHVgrorVG4Uhim6gkdKFpiv1Tr",
  "key10": "4mSvY7qcAEXqKGbRGJTXseAanik4M821jVJewB2jP1qBG8NpajjiCBdSgwrQvoSnB64XZ8iAfJw1praRE4DFMJ7P",
  "key11": "5CSqDAwDoXy89TKzGLSGKYk4ziYCjhkqbhwmneyneYJxoqA7qR59KPEh1Tk9VXosgPWtmbQ99uvxb6xexbec4ESR",
  "key12": "PPZ6dzFnQiGvBTyt2tiMdjmAW8bMgekP2ZThmC35bG5taiDqpGMfDmxL6R5bx8U9n4bH9412dbsL3JPGRsGH7tm",
  "key13": "5DDjQaxqEwtD2nECjGo5Wc8EwwWDR7nZCXrPs6Fcsa9ZygAmHMweiFRJUrqRsKd5yTLc7VzXqE7nX62FH1qP4gnr",
  "key14": "4qCfN6fJ2LZw42NJXyJihn7PgbNfmvbqcKw72m2DDPxnswwWdH8zb4rE753FSToamJCtiKzaJgTABbfgxcX9N5Gg",
  "key15": "63JREFKyuF2bdvJmGbAkoXmaRb7ndcHD4XRieTN8tFGDEnAZsRNBK1nPAtuPk7Sp7UMcRUx2p7uHzDeg8YgTFDsw",
  "key16": "5jZdCLMdrcxaLqk1tj6cHw7f9u8E73fPP947T5YMbtD7DufNKafR71BXctyGZzmibGLqJgqxPATFTTdCuY96vPwu",
  "key17": "H76T23ViqVJ8r33iv3JTXTkR6yYopu1qjSAzGs5fdooBPwnsreFK7sKnNjAuiWfqP91kdj59sYvfu1A1Qsmq5hn",
  "key18": "4KHepZazxP6hzWbfAwZjbM36qG6Nbr5qcYoPcuDLLdWESPYTMrgjwjXQXieEp74X4ivCsFHViCruwVraPaSoHxUM",
  "key19": "2kto6CUyguJprdQDdzuGaN1so4C7GNo4cRH3zNpZRkiC5DmErFqHwkzTtZ3PnAdq34cvx5WDyFMeGKszV7n6sw3f",
  "key20": "4fq5M2ByATszqcxkD2sDZaraMQxpbWAVms5acZb5NrEgCm7RzPdz4YDKrXw5DaZzUv8u526dxB8KqwkT9XQvUPPp",
  "key21": "MJPbjtDuwueHHX5ayfFyEPhBSMUDC3tuWsDbogaJz2F13CuhkUYLZ69WStSqF569fRh9pRhoHiwEDvsK4PMP4fJ",
  "key22": "4sWeRJiKxeoGwwTW2qZpWLyeVaozXukKuo9bdF78DKAmXWfDUFDbxPi19RG1XkuES9UUJJsdzksY3vHCAHkKoQio",
  "key23": "sDMc8YQjBLF6Xc3z26pMFwGUxCtW4KAGysf6LmnYFWxAneW9FGXZpnKzPda1yGJfZatFApXN3TM3DESHJsUh44T",
  "key24": "3wyUzuqu58gxox9JE6Xhwptv7eYrG6KAMk9CwKaoXZwXtHq6i2QEt18j5BmmTy7ZGxErauYoNLgYSNt8vNREvRcF",
  "key25": "PbZTnj8vwtSntSXqSYfdQUBcwbXL4MLqkEpoCgiLWCp3Vu4sB1bsFEa7aAiqMyDzzVzvApXfghKSYuxho1QBQa5",
  "key26": "4pTMAznTwocgoat7rshw6xTm1qoPAEMAp9YPcx55px9mXhGQr96rRbWMq5V7mm1jMye3e2gmZADswxJyJWKQGY3Z",
  "key27": "31CigA7qvkvmgD44MgM1KKmVqz7aemckpMdUXokejHdWid4a8GFP1zveQ2tN6XtZByGgciKqeEFs7dEwRUZprqMw",
  "key28": "2yKs2WCNTBjk6R5XY9MRRwDPp2Mymm1NUupathhTBe72fjADsyM1tkggCghijFBNcuioHPnAAnDAtvkFG1Gc4q5v",
  "key29": "4FBgcg6NYjVnoBhBf6hbmgtDFS9rmv672adeP1kZwRtrLaLST6bd3JuHe4vhhSUVZRfGDycbfiNVtjXadgaMALkf",
  "key30": "4YcA9VHPbpuMVGDHVBT2wmh3j31z2qZLK3Jpp3pBTyCTLQ65opdEC6gmFeYvMjCL3aMtXU1ZgcvYM3pB4UDoASmC",
  "key31": "4q12Sp2so5Beqy4kJ6K2uiEbGtC8uaoXiwepUHpJGhRCZsuRPvWA9q2H2cC7pP3rcfb1dsK5X9AUzz7rSpbUtXZF",
  "key32": "37YcZk3pnNJCFcbidAPZHSUPHYzQkmaypCqkCLdfo1k7s2Mdx48tBEqUKpFvyKziAJceiUZ5bfj1eWQnWUZpdN21",
  "key33": "3ANgxXXdHeH5TMMhxB5fpcGMbW3gwdK6WCAWf1ouco6Kzwm82SPrwMuVy4e1R4kUGx6zzWiJ4PG1nMRWN5fevmf",
  "key34": "4BG5B2FAYVeANNg6z5HbvyxV3HsFwyhAopAirCXEVFEKWzhPXpHUGH8pY9VHx7SgVXAz56QQkojXAJtEeb1UpadF",
  "key35": "5Pm399cbby2SnPDm7X67moLW7g4Vobp6hniFBBBCLFU1YKb6teHGsFH7wTTJGEr3j2epFAzfWkj4gt6zc8yeDEhY",
  "key36": "bCWiirBU9bNQccEfKLoS9fkpKgdfi5PjfcZWfdeqvFBYLKm2THY8q9SwQ31yXwCkM4XKtzXhguZ673ypcCurgEv",
  "key37": "tYsReH7cXQ2b1uXLa5XhVwYNR8qobwSo5act8a4MCfTdwA6cM9mQpspZHLsGkjGqV3KRe4z8isjd9S27jgxpZjL",
  "key38": "2yEvfqzy8qrsSSfLXpC2f28iD5SYCiy7nJsrYuVjEDzJCvv1CABnZUsmXhjToDR4Aa3SH4draXzJne2Kio77xYeF",
  "key39": "3PY874fonBL6W4Lp9QHjGWryRgp4tPB6ZZzkeyCWaftSbT6DxDvxqD4QQHzGzxNSGJXVZ1J7ZKidzPV218i9rpiJ"
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
