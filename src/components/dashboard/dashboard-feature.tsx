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
    "5qtZBYggJYEhcYtLVbqSXJaKotapvauuopMrVcdjybVuWkWkmFq7En3WWrZMfQbZUhowiN86d8Bh7n6J8tg1iGMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dDrVZn5CDQMcf8Z41DBv6tf6LrvT7aLvf5e4iPNVZzDTqrokb7X8mPSu6GVhhskaHAC2hhiqHr8dTkoT51BhiJE",
  "key1": "5spAQsnzTkSLAjUsneYhyTHVgw3v8mPwCAQfbXTStayMuaX5gVcXwbY85umaSaVTMB6qPMKqRkzxV4hwCoMhAxSh",
  "key2": "4rBvxxZZtNWeJMvADH9oAtB5vvEkqnVAyow2zhk4h6pYhCrVQ2SpJCP74tFGG4RCQKQyqnJt9ptnjjmyRWigniQm",
  "key3": "44dP4x5pcM5Pkgg53QTaioq6168dyT6byMzD69wegqtnR3ns2Pnxfg5mRdQmGgpsGzLsUPT2mSd3WSGkvmxA5Bpq",
  "key4": "5yjPp9gDvZg1y84U8MTMCAPvPgKr2QfE8EQo2jVkLYwcV1XRcbYCS3BJUUbtt1R21PquMhWYLRTPrPovB6G6pDJs",
  "key5": "Gw4trhiZZEuN4ExiLiBpnBUHxTYSydmUXB1XoMZen6FLWAm8r7aDg9H35tB9zYeUDxFnV3Zt7vGwnR1hjSveD8g",
  "key6": "2ncY7CGfFRJ6WYx8Pvcbr1VdywG5ZcDb1Z5TFoTwguFzXWeNu8tMfgJ3EoASuSaFy4uV3irT1Z4jkhXum4tNPba7",
  "key7": "3t9NzWJwaaysfYG7y3bM3sPVLVPsKDLm9dXMSeUPKGLqUPkX4aU8QBLguv3Y2WneTaBkzuAHDptBgjXc2B7UwyUX",
  "key8": "4kcfi59MzsvGZsUTKpyFgFu5QXuHxFX5dABKy4RAWiPqx8HNjuaY6DaCic5StT5Jsjcn4gRms6PxosbdYTBHPf6H",
  "key9": "3f6nH8ic7PfLv6rgNCrFNWdegHp6YK8mtVoyHi26DfbDnP7bjib48bkmZyUoa1gpnMVfufuVJh9KBagLGEb6cHNJ",
  "key10": "3rut5eURe2o5jzzPDnxdaBcWxxFvAj7SMXmP6iPVnxjKQZDcK31zrSHbzJpcD69QGctGv4fsLEdxnK4B4Rg8Wery",
  "key11": "kjU9hcJChw3imWu35T8ixwVb6fVQxp9XJLAWsMxvSLV4KHeGKshJTYc8Aqxv62RnuQquVA4ntDSJ2KnPAn4qAah",
  "key12": "5BJKoga3t243zT5jDFL3hbD4SSs8JCeRAVrMrFR2X1sY1peCNDDMHXXax7AD2JnhANwHwDmFPWAX2A4SJiF6Hbm7",
  "key13": "4AU2VzebzHiWGcSk4V9V6M9KDYfBDii4U8xzYYVRYhUDKgLmSDhzePZwBu11SzZSoWtDqWVDVz62NFQfrRjUzURn",
  "key14": "35P6rhZAUA69LW3djE4mXTidtSiVDGj9CQsbxbz1DFJNPRf87UT42M8agps9XaH2xBvRJXZ79D3yD9eeaorfm9Dn",
  "key15": "4r5dAU6rbE5cM11oxULZ8cEWTCzxQN73rnA2oXBGSYMsUpcyBtbYZ4GoqpPLVU32xY5m3rgcQVnrTS2tvfyASNrH",
  "key16": "3rkEMNN6xZoZVgW5YzHMhb6Yifg8X6JCd4fDFgeiTjZNy4oxteDQ9fo77FEm6RnjRXPDsGASE3QJXV98TiVzySX1",
  "key17": "k4kCvpLa9Y4b8qwY4RWWQB3CvnYqx81dyCTd4hvY9WARq5ez6hRWUFyDYJJxjCVfph8VWeEeu8upd7UcyKZEYkF",
  "key18": "5BxX41jAvxDE2Wv18fS4TP9uBedYmumm3PexYiG1oqoNUpZnfkepCC23i76zyeCTKQUFZuF2Qu8d1Ub7mmM3Zr9r",
  "key19": "38jEvMFSmTPnUgTML1xKJVXi3RMSdFpz4WcXF7vB8Vze4sPtCZWuT7uBcvozcUFXiU5F4ScXa5wbSF8sCani5HpV",
  "key20": "4V8CdPoSLGsTKCQtukDDYauZEUXMRBMpiBowVFCrSFb3zTENw8tS3fEp8dWKd9CAaNfy4NpEJ3VAjj6M4k4Sfwhy",
  "key21": "4PGRzjkyB2CxDdAEAo3To1otBZ8ddpCr2ZqnWeApqsC8EhhYhrJcfGjLvZdgB8z5YyDTHyUwoQ8kanRqzev8tUQq",
  "key22": "ftyudsgXtfXZCSfDEGVUuT9cVjWGixcUyamH9TzuK5cuV39Ne8tuuCbqbPnPgxwf5ouiWP6bGaHrduAdgy1pcSw",
  "key23": "25goMXMU9udj8be2idvuRvTapzAjr7AC2bLab7CWCvCwpvLodnJWUp4s2wRv3LWjmd1y6ZzRFif5kzgXWgjuh1rk",
  "key24": "4Jge6vKi6AxU7RTU1mNKuZVbBqe25tBKhf5N7tepAGsJE64vpPfav8HeNpG3RBnaic6te9iQNDFKhsyYiMWj9Vm4",
  "key25": "WUfyo5JbRDktHXdGe8bsRU7yZPBnz3No6Q4UYdQ3Bkc7djiHqehginnCJGp9fLg5Gy8t7TGUTm88VnHXqXTguVV"
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
