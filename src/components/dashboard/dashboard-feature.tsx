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
    "59fi5YzZmqCGLv7c6nv89Rt8Ufat76QPdjo2MmNXQJajiaMvGrXKvw947C5JvGJxATZEh4131NdqWGG7urbBYs9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NJ3aAykNStBw79j1nn1tEDjNAVmsTsQ8MeyrVnURKVh1ZuthnWmCvJfT2uJ4rDtHJcqqL1fcvY4irJaZrYgp66T",
  "key1": "2coPiMRRM5mdcbby4hRd2bDibmw5rD26Z8EvKMniN7BRBdKR561Zs2Fd6g37jddBAZ4ax65J9wJ4RgnzRxKqKBp9",
  "key2": "2PvxUTaqpGqegAm6kxtjVZbrNJ1VHsSgn67KxQJn5KCVSuerneScy5Yh2qzHA9KaCcoDXX7nfFYkjWJDaRyCfKRv",
  "key3": "45wHkJWsrpA8KG9eGxE24ms3nS4AFYDQ5KaMhS1HxqQsyc6JWZicSW9LvmrN6Un5Kv9QR14pjdyHoGMzg1Atre6x",
  "key4": "33oc8G7sUULK47v1prQ4MAaTzYPcu1gpYmSmpyymYD86Vw2b5k9T8A4RZVPdZfkAYSHrj6E1YoXpHnHrscqNZ6t4",
  "key5": "4MgyiMzV91yccWRBYq666XqN3yviUi2srJ1U4GceDhbFkAkxCceXKGNpbjzqEwxuXWZhCAUR7XxuyauL38waYod8",
  "key6": "TLzAfu2uGtrdKNyN64BZEwVV2RHU38vtntRRCDWP1xQYiWJMwoNiELNDUCRMo2fpX6pZ9M7YijcmcSXHQqa27tc",
  "key7": "5FiZuowBnigyuaLT1m9CzwTgDD1bnfvEF8h12iRSHfkCzvdodjgytk6yE3kWY7hhzkFTENMSc6XdYdByC9uwYSMp",
  "key8": "4inHMVWoQmyNyVj4d5m1fYze4pro3aeS9m6PwqhpLk8EGGjtR6ChZRHEyxWe6JWrxjyhSxHuqv9FQLwaswzg6czn",
  "key9": "5tdb5BL5NQGLhDmUhuyAsV2jQxJWd5n9d6sbndrdwY3hf4kDvmGrkMZHe21YfFJKCQUwHuQJCKALXDWoVxZF2o31",
  "key10": "5zn1BVhrsJoTFaap7MiEE7YEYq44etMywoC7x9ZBLf62GuotUGKuEg6YsvaM92WMhkSBjAG3ebYC4u94qNsnjHoZ",
  "key11": "28Cp7TDDv6LEFJSXNJbeRnjCy7rAyGnfZwuf92W4siVHRYfLw2jrrHXVatzuhdi7x3YPUqNUYU28EYRMqx2Ynzm1",
  "key12": "29D9LXXMXVHbZATrkvoPcXqdAgnHuofJ7P9jGD8qFybvGx4kAdMRpE4Y19SAgXPT3GiQGUk7dNQV2QBFEdYHxJtB",
  "key13": "2TN5ivsxxnFxY2rqLYjjCHdo2YbcNK4xLCm3RNtsjef9ui2PQm6Eij1ZPd52z6qzprEh5DsJdPzvDRRgz1PUAJ7R",
  "key14": "XA6wSDto8NGHfCwwPvPZCh2kpJ6PHSnjCGj8JwJmaE7vrSDRqEEbTxg6zrrqKEjcgkpSjFHZa4HJ4Nv8BNT38pR",
  "key15": "4Y7kpELVY2DAQ8asFoXqB3HgtDEtg4ptAYxAYr6aW41MLZjWo6XZvsEX1SZBsiiMBuVcPgKGDY88bz1pxiNobbPM",
  "key16": "3sDuqPevjZhmWnH8asPqKX2thWPMZZMcR5iPZTJ4H1tRK8UQziDtk6HsQ995HNabg5jxnziFMb2jNchPgS5cCk2V",
  "key17": "2Q5GR3XVVQuV49SpCR5bu2VraKboaU5SePvHQBSiDLqbquH8kihgAyzWakouaFBK7GV5f7U7rZhQA5VdmaR4Mhon",
  "key18": "45NqH1yeU59XtEj4KLuAHCDnUKZ6t7yuBoQ6uqSpzj9qrcMA5c3UY1QuEPLn3bTdgDACtEvG5m1m5VetD5mEvamZ",
  "key19": "3E42W3T6cYuhdbbBnJ3WknqVNLxdUgkrJy7c9WDrzJcruo6qBn5fy6BqbU7iBf5Gik5JJduw9P5U3dMVE1wEkNNC",
  "key20": "48JYwjvptz7vNeFMrmPtLgKLTkhUXqMyQx16SJPooZ92QPn78j4mYkngkgYKd88GbQZj2DkNvyGCMxaWz4JapK2g",
  "key21": "4vhmWavcvdecpVHX35nQyktc9dKLqDfjfnx7pYTBpPuuofLLzkouYzoj9AmofDZonLxwnRpwDh1hx7JcbmUWS1fB",
  "key22": "4V636i23UaxZcyUvje4LdbwoP2XVURWLZNX1C6P6REQcGswtdkerCoRpvQRf6nMeWMwcpEB8tgFNL478dhutSyeN",
  "key23": "2ZUH9DuuojzjBrUZCpHfGrFSU9hcoioJsmNWwrCH98ETFzAgP7dMhTRKPNjpAbwvL6Po4yy2T376iKw4GXyzKcCm",
  "key24": "5GyApRgFY2vEAbN36BroyBL6mPDtR5kZQowyzcCH3yjuzFUwXUjmjFFuXtgcWdjsH38NQcUftW9sW9ARALTt9hNq",
  "key25": "5eSiACnRMMsGAQjaPgCsnSNZPxB7TUzHtMmexguXrtdvbrUFA4S4z6QzdK8sjDWaAyXWP9wpe4FuqTJCnAa8thpm",
  "key26": "2XvKMTDAtWjLKK9aAtm7zdrFb448VCFhtcxxuB3BxKcmrTWPLKb43Wm5x5JjPL5to1vYzqxMD7YZjBKFJzmCei8Q"
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
