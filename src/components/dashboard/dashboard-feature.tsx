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
    "pL1RutTL8sfJ6T2sojtzUu4jpw3ugSW1LB5MdUvbKdS6VUjMiam5khroxb7z1EKXsEPoSQ9cU12fCDLKJF3yYX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gjsghctRgFLC3e7yTJW7s2iAGq8CsBxhmw6MActmYVLCKYAr6AsthCoof5P6n5Yf7QXVzYdN7YpaWnB3Az2ou3E",
  "key1": "3wtHPiPkuVCoJf46MyNRWynyYV3dTyMxbyXBxsJLWsEquyWQjB92zXxxLkNAfHMoVU87tx2MeD6QjtJ3TkVu89mc",
  "key2": "2dNwDCRV6h7mPa17kiL3jstTcsgyEgimUdnMgtT3gyZb2pixkSjb6ssa9uCSDWFTih4Vdhvsq9ouKmBHkGpdA9Xo",
  "key3": "BdePWoQX7XAyjmdM2LJmsY7F41xySKeddnuJ13Huwq7Afxt35u2RqhLdxdohjNgprEA7PynXajCF8KfmYbgehqa",
  "key4": "4cLsZUdZbYrZEHWuay5DVLRrBK1vLcTu2CfM74ARZfHCKwdBavg6uByXxtF1TsPFDmaveg6Aeof8TtXGpn5eNNtC",
  "key5": "mjqpUixyzBv8BcVL9FvkjAYPcrra5mEqsfYgVGKfk9s5CVmMYCar3DR4QvQUVhrcoEcBj4GJ3c6GoEy2agq78Sn",
  "key6": "3v16pxQnD8MVaY2QRSGoL1RNnJ1rX4F2QuXEp1bmZsrtkNbedjoHDUkLmQzR38EM5jmvcDcWYuTjdmHqjLTEiGzn",
  "key7": "5Emp6vXQB6xXh5wJjPd6vHptoZ2dFg896xxHENz5L1ShU5v7AQ8dYM3YCHo9ncRTduPu4gyHqdzSDqYXXA1Xx59K",
  "key8": "3VAtPGt549SNGrSrT73wstvfTH5XgEfE6K7MpitH4x3sY8HqezeReUuKdqDon3vFgHY1Nbdhh4JWcf7cT3hdLQDh",
  "key9": "2dhwdQe6wEGDKdtomQ4Taca5w9Di8Td7NEtPp2bLFST26MHZyRdNpjKgDq3QxhrY4qTuAyPygnnLgh8SRQXzgbL2",
  "key10": "65yxkSu5WL6HviRQxx9yhfkVFLjVkWcGNWvH7tqmuY4kwVtHCohVzoScV4ZYEh7x4rYunwiawkPmFbDKhka8ph78",
  "key11": "4xBr3LPbzAqRA6qeUfMq9UEJ2meKESNfLCs9LjghECJmoyA1dToLrGcfjoxUv48XX3dyWzGeuGukywjN1Afig1Zy",
  "key12": "5XRr5XDTWA736oRUx9t67A3nF5CUMaT8BSt6JXhK2hdQG2azA2xjB5PkAKbcnSxW2YHJ1NS1ByJJgdDcwtVKJ6Gj",
  "key13": "5JvRnybpNx5Gt5H6pbYfExDPAaRn4u5PvgGksZ4mZbevGSukP8LC2ghgxELuCCwcXgM8nt53ny6m6cBkwUFzrjm3",
  "key14": "5c88yh8dieuWcCfCAeRtNboKRai5ZHg5HFAaWP6ZvbFcvHBfKyPwvRbh7ew1uFcSH8KnLMdfvYKp4F4M6Twt6u2C",
  "key15": "4C1g8X7x7WY4ACLqN3ftKxNBkb219fUpxk1ajJCgBXE1PeGwVWet9s7CBE4Ncqv3HeudxWShshkVZwEuWssZjf6D",
  "key16": "2tUYh8AbLLCciCMDdN9A617y7hLXBASD79ocDe87cA6pwbd4LXCcwvuiG2QuJrnkPHZ79MnAvPUvUdLtjEpboybo",
  "key17": "4EDt8heJPeFUJXpmcAtFE1fCXFoBQKhuUzx3imfiq3BZz7aS6M9gPLkj9HtqwBKePCdiDe288xFhv4mC1WPZAGDG",
  "key18": "4Wy2suFg2EFVyh8NVY2We2oDb2xUiTXEpoQqawnPHZ5Bfkc2bCEYsysndoYN6sMBQaD5srqCBGMiXoRsHSEAHfKU",
  "key19": "376ATbNZwZ3qZoszSnvZqfBqnYiqkz6sXDAjUfCwKmpyAsz1MUUruf8iAVj7rV83FHmELa8XAbAzQ82BQjXGCUP2",
  "key20": "2vj4ThpjTUsyvhg2iBa7EgGZzzGrVq12HeFvkq7DU88EpK35ahs6b5WRjvZxAUXQdpRVrAb8dKjFDREFqPoW82Ne",
  "key21": "45SHG5gHCtAe6kNoSqqjUJcrK4VQ8qey6NAGZ4mNTY6nHFgxAfY3hpBZVAkWu9hP7uvMMHzAmd2AYiWdKAjeQn3B",
  "key22": "4jckLYUgq2Hn3mGsBE6u8EWuJRf7hrMed1z2uKnU6868AeUK1D4wtJPAqhnnW8kuXPJrBjPFyYtNwF1J8frY6YGG",
  "key23": "EW9panjQxyok2Cpiw1KCrW197sBRoLz98ktmoR1kTtRWLWDt5dN5N6vmQbcqakjJK4LYcV9A9omBVY7gKh2mFAd",
  "key24": "4UXmNEC59d1tBCwdSwzGLdtQYMZevVPcFqWE7YgGDTnFJVmUyFxNooCF2fxoVg4kjN3w9kttmNR1Cwv1emq2N7r3",
  "key25": "3dkEuhWgeyPvwbWwki7sP4G5ukNhFNiXX9DE6w76tWVH7ndjXi2FB5BoYyWLdqPYbiYwy3VEVgWApSSgCxnorJNZ",
  "key26": "3e3x2CXbjiYU9sc7dKRcDMgmHDartN9jAVDBkfwfF7kKB1GfAoPQ2sisr2S3Y6f3D9Zj1SbmXgHcY46muyfykyvk",
  "key27": "4J9YnKWiBbPbJ7CEgwLW1ikNNet8eP17SHQmn7seDxY3aXDGKfMbtC4hXzAbynwon6bdWjsJVcd1kqZ4AFkfFdWq",
  "key28": "5vRqsDyfBkETsWYRrDj4njUSJAxYPRXH8YFX2xc3uePSYNoLxxc4Vvu85EcunATtwUnnRtXFXPjfbPj2TJGVrpjE",
  "key29": "ejoJvHm2K1LZWBuP3jitNS4bvEvGULjHuM4wrrdWaY2y75LRFH8aKHJmqZDJbm1Bp5thbdtoG2uHr3UsStm3vY2",
  "key30": "VCudtyF6pWgfTECBwBb9kraZttFzLswEruLHotADtq2dJfcU7bfQGb1apMbq3e7KZhxYgsXqpB699KhVfzFBDbz",
  "key31": "skuxzxUCi2Sxujy7RhMytWy6gvAf7YEEUnKwwNijJhucw6RmMRWFi7jsRyACgWssEXVNsTtJ9LQ3aZTfrpHcjus"
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
