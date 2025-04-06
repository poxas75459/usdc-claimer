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
    "5dScDot4Ywt9RZqKGg9PT7YDhUDbutPy4h3BrEndHzcmrKiZuxw8jjwcmeoDP62Serc1D4nLzvSpi7cxgBb2L64C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dELniTyk1tj4AdrfDgch7tKtcg7scwpigTEwsH9PNDupGZWTafhvqm5Cy82XKkUaDTb9rd6opQyQKKhu72NyLLy",
  "key1": "3TWu6cuf549vDsqW4B2mc6CH1VFnk1MxYxHKqFpejABx7zUaAbUEDJKTCo94JJAf32fEDCRxvQrkeXRB1mLXM7qe",
  "key2": "4LEPKoHXcaBaaFAvewK1cHuhhbvTdN5oUedfFQpkY7gBAckRLCkEd3UhXY1s4ygqC7tvDjEwn6gK8f23Lfn2SNUd",
  "key3": "4tDepe6NH2fkLqDEAg5upVREkXMdomrgXQjYkEuTjG4H2udoYgW8hZC9BkToiqXyKmWJt56bGXR58nLWf1ixiHaa",
  "key4": "39oTorWCvCau5bSnwBP6LWKy5qwBgwRntkqkH38nYjCLoch8EAxaGWtzZFTo7Ce9z3ivgBnAnSy8osFTEHTGXEZ3",
  "key5": "2L4mXCHWjCGAz1kXteiLJNmk8ipDcmv2ySqmuU7eyZs6umXyaC5mj1uPUoY1djj6jf7sv2vegsV3MvBNsXVsHzea",
  "key6": "5jRFygUW5u5gvVR5USDdibz2Bp7dwVvYKeU2mHZJWCJBjT1Q7k5wKBH7TXdSFMaf3WiSYXsRdvHphXK3K34yGx5F",
  "key7": "2YiKREDibj8iucK2tJ9RfnzR3H4KALB1vPCDcfyqtBx5eJrsHoXGLQTQiYDmNDF7oXf2Jep75RsEpp55hgakVqF6",
  "key8": "4nhrR1Dm6u6vQZc87Mzy5wQAdvADp97Gwv46jhw9rTG1vopTh2nn5dEezhLUZ9RAuw3P8f3vuf8mzT3q92pPmiSU",
  "key9": "25PuiES2MLmrsDwatiUPf7a1jftomkofQrH8L7rkW13PdonD3dCigYzqaeRCoXGDHE95GfeTzL2TmSRKZeVfLcNi",
  "key10": "3nkjE6sjMjh28gdeHC9kSTmCpXCgZ5WPFjsBMACWnPT8XbdKgqaCxKzdGcJdrQFcVCCDjQ8LEvfUr1zjGNHxASPd",
  "key11": "5K6kCGrGz6cyrqwauG9bJg9uBmP3eFJoHqLHkhvzUgqnd3iTmwJcLMtoM1eDkagq7YQvZ7Q9HteFTjTaUB7hdXUS",
  "key12": "2CBdgp8KYbDaBZ9K5F4tnvKhnjZMdcgpWrEYNZCh7UFP2RL7XchSjQg6uuS8Kef1TaPKfKqrtYiXkGSnx4mB2uXZ",
  "key13": "4ZsQJbqCnDsNhxDZcav86MyAJsH3GV6rSExsQx8kMNuA6uM3mmuoMNvBe1vskJWgh62xZyLg2mX5ZXehTnCHQx7o",
  "key14": "2yhRqdBzomBCxT9r14Ca6UGX4LL6YpTC74WiVneUYJkSvvwvve6ycVkwqMKYZKCt4s3XpoBTyUacqnH5xG9cS5Ab",
  "key15": "5QwtCfy6n4AMMr1f4J6y485zqrSh89SziDYJNmZ1HV1uLxz5MKGKAHRmwDgwXN9qU4Pgn3o7X3DUNNiQYYJJbHEq",
  "key16": "41m16LwQEb3YALyPcono21mmM2kotFXcdk3idZsgjrUQCPw5RCxY78wKKfrTqcRCcxpEmtBWq8Vqd2YTFUrzjny8",
  "key17": "2fnvFwz3UimZfAzCdV2mZiacgPddr3UrwDd6MToeyEBsbiZCiWbkgT6Nmg7PFeD9BDtVhB4bHUJkesVW26z3pqAm",
  "key18": "5Qk16mg25dhjMq8x7DqR6o4gAXSQ6aMawVcQEvNZGVEB4WKPnMGwC7UH5JyHapjXc5Mrd9c4kp7guKYavG1yfvkP",
  "key19": "3Z63Ng7j89ydn2Hw8ETAxk5SCr9EcNpzfPnfrFWo7viMpry1M4YGeUrhFtdsLJ7cJYvQFH15KiPLVvBFJFsa9d6s",
  "key20": "dCRPgs1cHccZRFPWvneL8QowKX9PMnDkCRxWdXsaGZxc1SboEHmCVq39vMqKAarWP2uzbu1PLwGj3B7bMMPz5Uj",
  "key21": "5smwDUQwycd34i6qw5yJ2ZM71ToyPu9C88BEMbVrGzmhqiiFwqrh8V1g3NKxRWt8g7Z2P8Nri3txhFGnrD5XLCDe",
  "key22": "3T6f9nxbBtyX4Mg5BR2VZ2dcRrniMwbEEbaT8HRt8ibNT8Y2s3Wyjcg2szasoqoW6BidkbZ5PtJeuyT2n1pH2nth",
  "key23": "28c2FDCWG5cnvdKUokC5ZRbMVCS24qiPzGXn3TCA8svquTUEgnfUCv7UotmANsKQjobqAx76kJYNddcE3so4obAB",
  "key24": "5kwjzFqBeVMJNVSoh8DHtkzdJ4pXN1q5waaZv87T7RfPCNDWoJC98NxRMwVKUkG5DdkR61cLFFyw3j4Lqw926nvc",
  "key25": "3H68ANYBLU146eVpasooqtuKQMnz9W7R5ZjdCtSHq89kp56e5cRrkxp7LUFUqTj2WLGDij72wv3V2cNFdb5LzUFP",
  "key26": "61Q9f5maYu9yDqcZx5SCUvB5akHXrzjZv57xrWX7hvuRQN72PdPxiz9NW7abcKZhKurd8VBGtqFAUAwpUG6AZt14",
  "key27": "487NDUviPTBKhqkb5Azc5P4uY2HxSqRJ8nriBZA52y62N1roqenNjipqWGQsbfKspkKRPWJ6YD1FiJDzZxFN2rpS",
  "key28": "WcYoYBdA3wAndJn1BkmfeJyrjShHFZVKEAnfEdqgNGQJ5ko8gsZZUnhRY5PBMMkuUTZM91H5bw9T2oa34ZHgbxS",
  "key29": "5Hpfi44SJhHz7x9h861kJkDfGdDrt1XpuXw4jvGq45sakDSofofJ4cuzUkVXTN6ej8E3Jf9L15twiJNR3mixrekA",
  "key30": "2NsqbqF8UNsE3bkcCqy3mRUxQuDCnxkbwCrd7uKyHXU5ih7sU66kc5yWdXSFogvtERzoBcccnqLuZGZ6KMtasoCU",
  "key31": "qfHHVxLj7fPQKDni8VqEHM1jzuyB265qEMb1G7sADQFPKSCdqAAaF6ZUuvWpUsW4vT6HDGChZcp5b7wX1aAks3i",
  "key32": "dj1BYmPxBHkqVVoTgyxCuRdBdFTxxX9hgbxtdd91UqfC2jaCDwhYDg5dUDu1tkFRBv8VUMvqaH4oGKHKLk2hLjQ",
  "key33": "2GwrRBaCtr7QdNBpx2637sN2Ggkx7Cdf6jq8HbBZb9CJFZhocsmUTnRaCnBNZD6kEShSeEwps4Zr9Pj2ZgJ4vaDy",
  "key34": "2HQ1fZoGSZKF9PkyaUShekWFt8SFS1GnyW3t4JXQM6XmAKMoF2jcYY7H3AxmF17MMcZib7erypMxHaxJ1F7f6AL7",
  "key35": "YCvGk7qrbA1bCNmetWtaxyepD58qL4MBa9oAqmBrJ2BNsyjmcFjgmdY59GZ77eWkEkDNyEbzycXT3p3DbsDBRa6",
  "key36": "2k74eBT6JVdC9WzfpT6awMnyYqV9wpDAKhD2GgmL6zKrPCm4gxtx34s8xsZbvcCEqurUoK1AzbQkCXJrSv9zJGMM",
  "key37": "3wKU7yZwQLeye4uuKrDmJSn75RUVXY796u5F6Xdu7NpxVCer8BoRiQw8pCjAgaJyvYfCiwopQESaZdXZ1RnE1LSr",
  "key38": "3pJKvvCLubaLRgvnqTBQDVhTny48SYNXstces8MSdHrJGENbFWFv9gNkeV83LjhjWMvjyMxeEEHYH9g7S1A1Pybq",
  "key39": "3ZzSg9SWt6mKYP8h4BvakYkKNhU3zUeMVB6M2XZyejxxrDe8n6x216YmvZdbp8NiMKyPCXcMZeA2VaLeypvAEtiX",
  "key40": "5Lbbvn6vqUbADPwafVBwmAosDBAcCcdk4ZyPBTJNMUNKWz2HGWLZLbPUNXmFyMmwpUuYX6nNcwi3qqgyJsFyxa45"
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
