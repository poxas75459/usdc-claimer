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
    "2q23PmV4FXYTmaE8JF7eywL5cpviVjHHUGM72BuWs5RkuV7bxSoT1gMKygdHSPtKZ4DuKmQjV7VpSJiBXVPNqSSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MRSeysFw8LtgCTqyrcvNS9WP2ueZEUskLUGqVFMMMsQf6tkvQgdXPZJ4Mkt6LHKefkT6x2XBVCimSkL4cG4y616",
  "key1": "gzmCw99x6cRCf7a4kCmkPqVhkbDhUfWT6nKKbzHaLtaiHQWvDEj9dNh678r9jni4pQnVm4bQ6ubuMwhiui4PAAQ",
  "key2": "4KRCXw7Zc19MfNh22hQcbZcifh2W6mi33aFfocnNLLTC8pJcWCEqL6szuFDaVyS4ervXgwFn52VrNsPLpji6Mwpe",
  "key3": "3qi1uXaz6DFVL5aZ3yFKMyfmhE6WFtSeUkgzjb1sGUj7TTQnnedBahhZ5S3sJcqAL1zbhxCaqfXhKnHVoV614JbE",
  "key4": "33auzLAhAH945ti8fFo9fmZCQmG5CjtKv4Th5yeWUdUhaZhRwgKhf9PBHuzVSN9rLgJeK5CFwhBW1ioC6GAmbKXj",
  "key5": "4RBf3SHSX8dLVkFnsEPThWx21sit861pG29F1bsKP9L3DcXgxjPRTkLh71WuDZJHykujXKompcMwmjmUSpwVE8ZF",
  "key6": "2QrZfm1BoFh1XKn52ujixrJezAec3NBWNBe8Pqwc9cP4gKgjtVuYaZcM4PM7NWPEnzeyTTFVnHvsXBnqGvYktv8w",
  "key7": "5DKqv7hcU7mfhSeZCQzvGfKeda25Jd6XmJoVDPUAjPY1SGuic3P4KP8Avxt4urbqUykNtigRwWrTMghX86KEvJQA",
  "key8": "3oQcU3fUnUXVzwYFVUJf34j1UKf25goDk3FrqUyYQnEFLwpTcAr2RirU9a1k7nH35NJu4Z7PYgocPf72VyTVmDFD",
  "key9": "28RK45aTkjZ6QFmiPXYqDxbmm1Bpn8f1ShwzRCycQ5bnxTC5QFNEp1qW4HBKiAdqt4sAvg572xFivTqzCrQdRjic",
  "key10": "5w7DHvVoFSeiFLbGczg2nJcL4wMimsedjxyMMTUCXpnLU3ggwcpFHFWKzA2DtgEkAfHKn7BqipJqSXN6UrCZ5sXi",
  "key11": "2djifjsWwuErDdaLZXTFLBVutacj8ApKJi65amqMEGgGMLtHG6kBReFTbzgpKAUfi8hE7htouMZv6ue7h1ozsoq2",
  "key12": "2ypChcc6V3ArGSJDgnXpFJrhFMujkxMiMowbjuuQHReQ2U61cTJzJsN7ebVia8QQXQbiZvuuzN8d2eAfhQzgUSdw",
  "key13": "59tis5Ff1HJNYKftT94fcTXa7XHNN67tD6PdVrUDtwABGwQrdcPP6JNbYckRmbh9mucERE8FJfQbLMCYnmqhoEj6",
  "key14": "4nnWPnaB3axPW5TafjTpVvm2y3vgxm1UbmQTLpdbvf5wTmyoireW39XeRB2PtrBsVD1QFRQ3WRjGqeBqUXzXyo64",
  "key15": "4T72oUd2KoHbTT5cPizp4WTAPACoSFqSNqeNcYtLsQB37DhZh15BPVwpayhgWervrcoHP8FVmcujWR28sxdmhzhv",
  "key16": "AEWLvaesPtPA48aorYW3H6kbpxXEkTJzGKBAWdABnDMAV18br4pouBXe2EvV7932ibxtZsfUDDqebdHuoD857We",
  "key17": "W3HyKkVofrje7Unj5gNSPbJKH4BE2HsHBJNBxBUFRjFzVsSGGZCm3TAvx81b3qLBww7ouMRaihcPxA3rj873KUn",
  "key18": "5tJyJY9R3rSXjcPWZ7Q9oSJ7sRMZmSqa4C7ghyTubFWSibZdmCfbCy9o75WYLbLphfRq1fa1mhiwLuJrfY2BRJML",
  "key19": "2f37mTkB3LwxwF2qh7exL7pSJffamhBsZLnMf2hywWEmkmyc2F3SnY9yPDQwFNhbri52EtJ9kRwdMdz3Uh5ZPEpW",
  "key20": "5iXwd2zx2QsXqLUZEkrmt7J5ftHp7DKqr5rgGbFxceQLQZftaZTvmHwQQS1cRd1Q3As1xEQGeLq9G6xseP5omLmh",
  "key21": "f8ToMNbijZZZtqYuB2VT67XfCiBSWuGdrkbRiLAtKy1AWEzJGwoXy9JjQUq5mucbfZmvpR3bf5aQnpSGMMdxcUB",
  "key22": "32f9NiNBZjF2SRe5dS8aZT4Gj2w1k4sg3LSsPc3GCokXFsnunhBh92QkLJgRhbLe4H9EeLVWRaDgHWfugNGzpZQx",
  "key23": "3BDYxzDK9vecGNHaWY3mPYaoLdqo78LW7kipS3NUn7S1U9BJbtys6Exxkerwpk6Q8ZceRNz8t1ytpUoCS4gWF119",
  "key24": "5cGSk1AtFD4PGrK6qHAGDnXsPt5awrYX68vGuByM9JACeCqZVuEki1MM7M1VYCxNktLKg3hYjfoSWknHLCTy1DeY",
  "key25": "MSfH5kYauXvWvKAbGUaaGB4584t73SBdmyC3yFKfYBbW7ESinXFMai3NjzSvdUuzR3vSCFsNAAzrorZxkqQgaQK",
  "key26": "4PFw6AkPZc4T979q6UWmwHJSwtHHMthjX4pHuQFpxjT3xGRTxizTvBLSDoyZoBxnNEcLzLzMyPgEMQk5LkpWBbmF",
  "key27": "LKTJeKzwKdQwsUsPXEpP1anJFPDQEhXZ5TDCMAz4rYoq5fCJkXS5U28Bugy8z8AW7NAS9rgYsxX8uERVYVy3U6e",
  "key28": "WU6jcSv97AK6GFNDVgsgMWXTUiLWNMh48dvji4fyGbo3QzkzvNusFCRE666cdxT4d6q3vTNBmDRcFPBS6vUYLWc",
  "key29": "5TmvG5GRa7VSxFYaemKAJxynKxqC7kbvShMfEmjgxTTe21V8AvNHnVCEhw1Qjygt1sEMJq9VDyYEGhxuNPLa8nzq"
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
