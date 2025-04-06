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
    "4uzN3HiHWFw5tZBW5U4kngAB71vQ1kpJU5s9gSQyQqXFsk3Sf1pNjxBjqV7FjqnoSqhrnWy4tn52bBzsjWxNHbXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iGeqKgUut4hdUfTeFJf5Kn5W5f5F74NRoKAnZs2D89zGFmnUw6YtiUk3zfPNhAami2eYib5Bhy3b1aQhtBQPTFT",
  "key1": "gDNYPRvY3yY73TWyTeSerGfrZoeDcxJdSsTxc1QjQxr7mBkmGTvwaPRBYKj11thPpByzbcF4T46bADaZuHGna17",
  "key2": "3yb4TpQ5ACGhYkZrRWM3PdbY6bWEmYk9J9RDj47vUQsPCw9xQjrhU23PPZiYGbZQWTgpFCaupdMXP4TVA4bB5AmZ",
  "key3": "2gg1e6uER6vPzs94PmpqNk8d8sgjZ2vti2tXgz5gbEVRNbRyyPYdPxMyY1kBcprvoCiPgZBWQeTTTdkdJRHBUqop",
  "key4": "515ZQnnYBkRTuhwQyuTButdzuMy3sNa7EL6Kuv5s3RxbbH3PVH1MQAAcXYSr8sJbUunAtxwYfY7BjDhtgsc4SV4R",
  "key5": "2EozBd1cDVuomQ5LdJQwfKkXhdHZ8JBi3ADhZ545sHv3hfCK2atm5vBCUnhCJexLhWWzx74dPJUL65rJjntyb5Fx",
  "key6": "5mCDMe5mJZf5n8s2a28TrGwoSv6r4ddqyRgYAm521PvD8Kega5oMBMBeENghU1ZTsw6pYtSf2ti2zJwF8K6xz42W",
  "key7": "4jUGbY89GEtzJPUcUMKi3zcsY4tuoAKmJhbdrfqHnik6d5PCHUtp3m5cuJ2KSyMo5kRX5JLF17w3Yxi1zaHsHXmw",
  "key8": "booEQRtPL2YjfbheMjbrHycpGm9uBckwsdMUznZXYpp34roSpXYP4iT66KjdxRL8Bp21Xfsz3QMwAFJhrZjNUdt",
  "key9": "vfCodGNzz2CwX9xCjt6Ygydh7q9ATg3nYvJ91H6Z797fX1MSQcnVjkWmqsJBaKhuZk9nRSyyReF6VqyrZdYFNAi",
  "key10": "QDXUz52xiem45SP3KbJUi9UuExwEG9EiCcF5ea7uQRoRPiYm7XgQ2wqPEDU2awmMuxSxt8RH3KeczAg7Ukjkkca",
  "key11": "BzN8TEhCTEjRc7hn3swhzSJVG3MRAaCibmj3gucJ4vBWXnRUZM2CGeKunNjqjy9RQqER78YnESLtvN12Uvq9KNY",
  "key12": "5hUxy2RThQ8vdLeh8EmBgkxrw4LyMhCxADLAau4tVQRBLjdD9ptVLafafPPy9w4nsnwGsGYQ8TikpNcJym8LJrQf",
  "key13": "aMtSBK1DAXyBixW91EeFWKBtigv1fC5DB85P1Bc1ygrECeiFgTuajTTiD21Axwiv2cx95TmuVZwuL5jgvwqgtbh",
  "key14": "5MhS3tB5XneiHtZTdqLZiov2zEgVJiyMyMwfn3CjU8neUep47Gwh6WNsJEA1oRS4rYpiicsmBfJLGgzfubxzW92D",
  "key15": "48HMzp2HbWFsiE5uLFDb9pLZ6DHNeFFJfRAWfmqie3CXPRo6b4HnbqpR1b4ufW1vY89s8VgjuSCTCtg3oFzQfJtk",
  "key16": "4adrmiGr5JznUZFpqDh7q9kejSK25jpVm75jeX9GCvPs1Qr3D4qVvSJKX3v4m61twXUunLXcyAFMG1R5oihTDvtt",
  "key17": "2cNqc96h3dMH7oJPy7Us7XQA4xn6h95GgciHTYBS6f1ttWhsoYJEzJCua8m6tKc1cNF43p8b88AGZx9GsM87wtq7",
  "key18": "whDGTdMf5wbrattgW1TZ8Byz1nXPtvxPK51eX49cLw4n3kqU7tfaSHEhUUP5A1zGXEJRBL7CTk9RTfWrDKLfGry",
  "key19": "3tufDZgF5JwMBEbvoeaPdxz1iFVMppjX3mjTrSAYCTz4MGgx6gduNJPdrHHcfBq5JNSLHzgdwxUXtsxf5QRQCzv7",
  "key20": "232qwQq5GMm1KiwViaP2u8XTN2UC4DDELLsMsbbjCXYsriNKxdjSpNt4ArgUkBFz9mHQPVxLNkGprooEVyYuG53N",
  "key21": "3YXSFa1Dsqn55dC91tqE3xiViNJXwYrjsducZcNgDUF98MHG2aXCkauq5xMqdAihhTL2z9TzGRnuQCgmu3bBVrk3",
  "key22": "pzaE8icybHMc66fjwb1mSPuv6wjf96LDpo1Rncpim9wMWtKp4uQAt9SPPSozDECofZmMLZtfNUR7ebZeqkMfGd6",
  "key23": "3SQgisW85tjGmMN4M6iGc6amW51JGDaQkQEJcJxzDZugkTA2nrwT2ecv1gskbTCvX3stWpnT4Wkz6wqwpALpQ5KC",
  "key24": "2TLrBKutX9ubSxBjFn7MbEkvFuwDNvzbmcEDT4FB9UiyLMZUazenwxGhnBEqbSNsEkfYQfxRGN2JJV8DbgeRs3BZ"
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
