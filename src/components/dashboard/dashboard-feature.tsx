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
    "3GCy9NLdAHLiFHXx2JEM2Nr4cfZcYM3JxYbW6Usn3uEUFpwQ1TG9WDrkx57GnqWQMZKPupom3tgF7zJXCtKc2XVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gMMCJP2xKdeKZMEWbtvYTYG8cZbawtNDpEuPJpz3srgaUzxhK2HKubAAFqG6ZC8CoDDxxDLsrmhody6Dr1yLGa1",
  "key1": "3HfZCD6jscpk14TWRm7vhFG4JRQMeBYeUvMzXmV5XW6dtThnJxC2yW31GYtMKAYZSP7Zjf1ZVsYrULwDdr2oBJVe",
  "key2": "4so5SngkaLsaiXysWC5eyMov44XnWpp7myhWE6pDpP4fpVgvnxy8VfnoQpAcLhm2JQGaLSps5EPWYQYCVdLHSYbX",
  "key3": "4xPexALTdWppgH51uBEnqQeEJ5MrFbTdrgzDNzg8aJRvYWGiUt2UaZzfkkM6VjPQNWHSM85DD42ZzbxWnh7mbAGY",
  "key4": "4xnpd8KZmTMgN7N2us329YftfNTPeL9VPYVRhfaCtiPQTsxZTTN3htpeWf156Jmtoefb45PtpzcDmEbtcM6mogqM",
  "key5": "BF1ZCD9d2wn7XNoRFT4VyNEREPcfED1hn9wTEHw4LStPxAAjHApyUbLrD2hQmdvAJi1Kjy1NcvDWGJmTdMTtrt5",
  "key6": "5XypnxaiN1WjjibtHTxDs7GgG6GVq7YQbLtVPbfGhkkBsJtsmmw3m6naATaGHdsz1E1cvAgKx9XokcCgahL8mpwY",
  "key7": "MdM9zkk3qVpvvo1ivrcoczt6CkxNtcSvLeRTvqB1ZJNG7E9Eh7aaNe7fPnU8XoHm5ZqV2KwGvqBDCwAQYA9hd4k",
  "key8": "C9ABSc7UsBQnfZBW2u88UgbD2JyRBEsc1qFGLpZonLWSXBoLMFDFReYuLixWf15mMVEdX3qXx5jEQQ5so2LpHM2",
  "key9": "2N6BGRWoPYMQU8eNa51HmPkZYaoNRADHdWRBoZKwb2yDpxZj7ojJsMCbrqm4evyiTrwfDUtLDENDAxSe93w3XDvu",
  "key10": "2xc1f9fWmSQtR7MmeGLSnX4FhAnboULqkfk2wbPuLkaTBxkpYxhqDruEQ29DZZv7zFaopXR2D31tMBNgbdEAsdwr",
  "key11": "2Sfv1Ucy6S3ouJpXBwF5vRHapJrHDnrRkhMbRD9XZvJ3ac2jEKnUmJrFY7MPNgUn3zABqhK2XuMxmuCTjvzdEjts",
  "key12": "5sshB9SM5g1hJSQKd4Wokrq8vq5zNuLz5Z787eohLR9snWaDJMVYZViEFFnZv1fHczhtYfo9uW63a778todjdvkp",
  "key13": "5DUAu5n5z8L3Nx6h6o3uC2JVE7hf3iBf9MjoveviDBtznUgWpvpY97RRFGwsFTMgNYqhDeau8aKi2XsqycgajN1a",
  "key14": "2uTJEHHA4dKPZ15W5eLAHyu3oh6Boa26YXNCExuoy8pFeLGzWvmG62zXQhH5WkG8RdA2prhpTV3vZGEMMZU9focg",
  "key15": "Mi4kegMkWBqhRubejeMTVqdd7DKP2mwqnfRPL9x1EjBxCFzwzeeq6F2fEpkcv5iiJePuw76p9JK2aPr5HmDjnVK",
  "key16": "2S8YYPJbYHpeSmnwyzK3xBED2X5ww4d9pwsbpxcZ5ZBvxazDqgc1ftU3pyyGPFqbx2LCnMjHkZsNqqf9RKEk2d4o",
  "key17": "eBgu1e3kneJsB9Pnp71kMmAFQKsPFzDJ53f6ai5eqSipwLjfm8W7EhA6TKg2G8iAouL5sM91TnXQDXYAwatuEyk",
  "key18": "5fnLx4hYdd3J42aDSBg9pGjGSwXotuHqbQpRwGyttp4bRWuy4EWrkUjopBQJbQDFyV5oqXp3M926Wekni8u671Zr",
  "key19": "5YxYuFtwjXMPwrgEwKhRbkTcyd5WkTcYWR44TuQDrze5gGJxArneHmxNhpWWqxaokNDVxAHyXa16PbmzdVUMraMM",
  "key20": "67o5Uorpwoh2jq8HbxnbSPafZLGT56WzU8Rkuyr3VvXfN9Fd1sQz8BXViLWt94HAP2dwqQfs8Usm1jzsTiJcGBcw",
  "key21": "3kbuXrYCysomqGDvzB9Zvs5kKHzbtFG2CHGfND8VDDH58L9VWmT1H21dnFKPu5S9qtW9UcY17j3qm9YvtjdET3Pc",
  "key22": "8mJKKBXAw8qSaKsBJ3ctgsvMNqjE3HyKLbw9BC5pCVi7sf3TYJLCZTTjjCu9qdJQ1mmLtfodWLBrUBNWWrrQx3G",
  "key23": "2W4MDQ35e67gP4TcC7YuawmNLAVNBfZVQYQnv4H2Ny9diz5ks76EbQBrXFfJJTejvD5MNs3y3NWEyrEmfXEeRC6y",
  "key24": "2EekQ7VXytTkZjjPuDbSV5kKkTmo1W99D7GPH43xYPWjbNfcJJiN6SkAG3veem4jwiEAvhS1axYDuJUKkzikANcW",
  "key25": "4dQdahXL9MH6sZMnZMYej4PqmWwLFCnt31kCmewWgGB3jpHA8FSGyagCvecCrPthfi2JDQjG3FaX3M11TF2zNgzS"
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
