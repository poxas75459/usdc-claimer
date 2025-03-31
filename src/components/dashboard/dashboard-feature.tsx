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
    "4R5eXF9dXb9ZT2rezA5udxk4oViTfERn9yofPEsQnqVmsLW6DVJmnLfbianZhqqsh4dQV2pdTmcj3ZJoqeDU7LQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YnPUfSN2PHViBsKnSU9Uoip8neGdWjRKPwbaoYRKSephJvbgp441FXmsvSyNuee9XJPHvpnfjYwuZTuSUWsGWrH",
  "key1": "7N659CXozJbP2fJLmcWYjA1rb9K5YUXogpGvtaZ5B6sAB9amzzrwh1Lk5Py85YS4kXfQciHXDbsbC5KgSGex6MF",
  "key2": "5xYRoYzpPFVhvHSkb53wEF5yZ5bK1xxYd1NgJugvLnffKptkuLcNciXDHqTzrZh1k6dPq9WjSXmQ8S4ZoPqa6Dxi",
  "key3": "5qUrN2gWyq99sxSajYDs6CBh6XXEFJ8KTeiBsJtPhTdMEkjzD4RkmhAdNgAV6fkcm2GMcv1mzZtC4jndMBMXshH1",
  "key4": "4XWMW5HQV26KWzVnMNYppNAvTrSH9LMfgFBnaHJ6ZQXCDgB9eVcqeWL15KQ9RiYQ24ixkmD7XWUX6z2jJ6ztNN6A",
  "key5": "3oYH3vrRwnhGigYZXDDKFjtaBhoH9CDcJfNDVuCFSbqmD3mG71XFvHL4UNRkPPAz2NENLXJoC3u84sxEYjAHUug1",
  "key6": "5b1xoBEaSAijBK3FgkvTp6FtMeD4WqsQsotvcPM8f5LnaNkbiiH5tJex1ZbRdUKQgymFSxgnhqaFnshLL87VN6MR",
  "key7": "fgpr2tR7HNv6XEVmTTTSFbVoJRHU74AeumtHKx4W7tK4CuUMAH4sGHjTJ5h19oUYAed7iaN3dndvV18XbJaMq4J",
  "key8": "5P113E4yZV1UpKTksjRiugWozK4JxFWH6tGSStGynV8zErF43gLtuHSC6ni1yRGUNssCjcBZVqNZJajVubvcwfys",
  "key9": "43RTWoVUr6EwFyswYTg8FAKZ1GKCQHBh7H3NJDeGZTxxhNCjm1J41DDXnMB6bD8hAvJQxRZnUYyaxu5182bZcnmq",
  "key10": "5he57wX8fv5xdrpeZdR1QtwsjhYHuvqMQ9WtqfJctwN5ikwcYnhCwtqEjGNjHg5focYaKNTQSNwemCiDEFktJqih",
  "key11": "5gaM6tYtS6VbPTPwE95o245VvGaQBMUYXUmgc5MGb6D7j99tjZUGTBJ6rBgJy3j3Mmu5iHRPHrPtVv8pd94fsH8D",
  "key12": "4Pa4ydnX29edFFJD8MgAFQjFTVNRRGhLMdtWwgHEoNjwwcdx9gqtovwuy1Xmr1CknFLzL83g9FLE6A2GaFdTRfkt",
  "key13": "5d6t4ujoVac4w4qrL1wqzza4TJBCxUi6tryYpdX1TBtwuZD3qZ5qAZea64DAjMx8AGjHsJkEje451RKaEPKdJhvS",
  "key14": "22gf2QgA58Z5ZywAdPwJKofoDcWmndSKyk5ZmeE8LYNCYACsTsWokpJTavjfGLfcNv7isqF3XN1zNtxun7qAK9is",
  "key15": "4yRRokZWMtTPgWq7wg1DKnE2NcLm8CtVQcZEUdPWmoETq9SfVTHVcx69MVUoCjdLno4neVjzrZuAtW8Tte9wH9Bo",
  "key16": "3TE2Rh7ZggtupFxT3uW8vMTu4vC3XxamnVhRoxXKuxjiCLjTFTLMQmVYsdTuD8sqsMZHKWid4U1yd8LrvBHFUG6F",
  "key17": "2KbyD7v8Rgfo6SuyTYyu7wEvL9DGacwKP2KDGrA9hMYeSPeRtMXW4e6fR1TXzbm532C6VEq297PKTQRwu3ye6RZj",
  "key18": "5RVL5sjg59dmPPbN6GZ2JNYPMD7J446q7jnomojz58AKsYNfi8P4KDZXBi1fQHJTpyXwRCXGtYHfDSD3g5VaLxr6",
  "key19": "rUudJxFt8q67wL6d1g4SUQUS6pP3kAeJmxmt8kPPDdqtxWav4NXEa87dEGbFmXGAHM4AUjskkeQUi4GJwdGiVVN",
  "key20": "4msbTt8hN9Wa6UsbjSmR5Mkr2FX1WQLWTAxYa3o1tp35GiQCrfccM5BEwvFw9UXSpH3497aNgJpcLzfktwvhZ8HF",
  "key21": "2AJ3jxdUDrxnQ64jFxzn1MVZ93hDaf8TV4L1vpP82KnaLR2RdkRY3eZJnPkcLChcYPnEAJEtT1PzdA3tBX1ki1Uf",
  "key22": "2DiY8jn8E1cNJPCfpYYaGjXLwZjCjGXn5jAqFuysD8YVEanAnebQSmt9XdErgk6YrxBZA3PMnRjriNLyJuCsTRWL",
  "key23": "5DLp4ZwhbYA74u8RTRhAuv4m3JRy4fUwQkq888Yq2QofwNFb7WttDr1Gw6jSnrR19ByoxaoGS4PxJwwynvUhtcHN",
  "key24": "2QwjrbUNbQuLMQ2W6Qur2usGLKfvGsNfTR22XnNETeqUat2F5Mi1QAng5YV4GVao7DtM3k1K6juFPUqBLKr5adRx",
  "key25": "3PweQj2zVMwV6Qk9rqApNcP4otncyPBXRwZcobEGrTXM11fyobzR23F5E7FuiqAoJZTrvJyGh4pYcPDZgwrp3ju5"
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
