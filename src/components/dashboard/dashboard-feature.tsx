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
    "3kXSAJB6PZVoUNMf8bHdrYxGfYECSs4DcvMtKv6V6qn2JE5zzoG4yhUU7NuGTYv2essdVHqp4R6o2uL3RMHPXo57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PR7fLE9tHmTiHcPjtsU4Uge1hdqryq3SDJGKMvq6eHNnbcmUDTKi3NFEWLyeP5R8GaY6PHGwa79xtqV5WhvCEhd",
  "key1": "3c6m27CDJKhPHPE9JhrdJ1vxVUAeX3MMq4Nh7BtsXYD5ZtfQ9i9DydJVjWAB6uAiyP9aoGHqingPqkKXctKLQ9yT",
  "key2": "45nt5TCHa89aKaCR3yeQFo69nWd1rTEfsNQmdJAGxZ2a1vxfNdstbvVQWTqL6icPYFVXjj3qWXE5AqStKBZHdu7t",
  "key3": "5Rnzgwt4Eykp86TMGGq2AYyE2VowqMXZmz5Bh1PmMdN5zXRUtvXsMrEnEZrSjxprsT7vCt9ERwncwqq7UG9pJJ9p",
  "key4": "3FFdKkE2cTJ8xAk6hvQ8gnRWuqHA95qASZoWunJtuxGYHKFCQU281zSBFbc98SPGb2RdEKdkRZeV5S73bFstjAw9",
  "key5": "3mqfhxykvTA6gWSTVyNjbrVZD7FAbMb7qwMHXnpKsoAcbkir1JLzjQdNbFaQ4ZdH6ci8DJbp7kbiowiLXEGgNukG",
  "key6": "43BYd3o6oy9uYEM85a1T3z6c4VNjKGGbpDcnXcJMm5QnjHN3f9JSdVAFd7bXrYUH9pzUrMBNb9ckvywdcCiCtMNZ",
  "key7": "53Np2ziC1TaY262FNgKAUzfKv6taRQLwhifzjE9xuntEEJ6QCX4497vBEXi4dUwAWD4YDvXD4fzosYbU8umvdpf1",
  "key8": "ZAzaVUcMibvNBq82pkAxEnLu92DK6kxfHs4znHpM2HYUjn7yQJrjcrjMCSCTy1Qk1kTv5obq3y3zPmN8JyDfUet",
  "key9": "2U1Zpk9ogUzVTmw12kh2Nb8oLPb3iefYSbjzuPehZf4pLfcG596VRHU9WUzYEASGYnvrvngCneFJK35zJ6fz2JNS",
  "key10": "52ccLHwuB36LKz6RiS4cA1tuZJB8U7TpGKjXTz3uYDkfiW7hsEKRwhDRiwzH4sh4G3q4XemtyCwmPci6i3a394ur",
  "key11": "36wMCX1NZDcT2KaQATx9rtSJS1TPsS2VjFpyVQDQmYvVM8L3rCe3dXRm8ot6RBNZEAsq7XDPA4dF12SyfqGkN4jX",
  "key12": "5N8ExEmmJEjgP9WHafe1UWPu1uxcoPVd3sWWEUFeiTAJcFgD2AM9a3eqYz5HEjnQHvgCkQM88WyHDQVJw2dBRfbx",
  "key13": "3vuvGvxRVhBpYTkyM8qXucobtCoKwaY13JCUH9na7jD4AwdVFydKXmWy52VAfmozw1e8vvYMB3mz4Bkb2RM2Esm9",
  "key14": "3KbxkX296jSYADb3ga6S4GZ9eDyz8ZCBxGBtiNNkdiFycRbzo48TNwdY4yXicv6traHzphRrYoKDSWp4UVzwEPtB",
  "key15": "4W93JifsjRDYfYKSi9HAYn4oKJqnoZrJxEnKs7tfG9foGuo1faFySYQk5WMnufL4Ha7tdvwyYTRnrxmC2EckWxHW",
  "key16": "3evSkrvdMFcPEEJ1GYaqpyzSw9C6XpGowPZkxEhYQfNnodztvNGp6SZSzKKG4bXiiNBP7v5j6PjxBoiuC25JuCbX",
  "key17": "4ZtjUFbZWcdgTpqQs3gr1QVqGneBrtx9gXsaEThMp51Li4aYwojvca2QnZX7TWgpecejEwePg92oeySUtH1UeCVa",
  "key18": "5UcPVHow1Nt6FtPevMp267wwir71s5uFzcGivVtDdXCaLNh2ruGPFGfWFfitD1jhpQNYruvqh86tD24mRFmRH3ym",
  "key19": "4pxeFp87Hd3uRn7SPMTDg8ht2fsyTityo5j1HbRgwTEN4ris6xLiVv2sUxv9wdByZ5ppriJp3Xp69uzkhn4NhqBq",
  "key20": "5etK4tMrsUbHTEEpQXrVionDQ1V4ihW6TyawBgBDq7WMumt7WtZ9F2EL63F3oyvRoMXxr58TWuxHyJ7RsrgDqoci",
  "key21": "moGcgcV1egoqbj1kyPxojwsH2ZmYWgbBPkxopdu5cQb8WNBARFCHi1TParubQtZp3hjC2PM2Wg4ie87UAzp47mZ",
  "key22": "2aHcLZw5oyeLum5g3XAtuP1T1e9yjMA7Ja7npfGubRiX5LiV5NKft2Rs8T3LGcNjXjzwQnz3cUVPqujZwtodfDhM",
  "key23": "64Pmaf5mW8u5Jr4AhfMHm3WvC1S8rGWuxP8aQrir6MsooZvVEFgzJBFFAM6eyiK7YXnyknfQQ3m2MkqDpU6hcPnv",
  "key24": "2Zo8hYnq5Zd8xxL7zsEPjKqC98bsRJnFvXwFA4UoW3T3aCZf4hc1rkfChPUQVpDXPLkg3hMUKxM1sLby6iULnSYA",
  "key25": "49WtfdF7cKsKHa2rq5ZPQ9UddMSqYMJJv23igVKHXzW2gHvp3pBDA6wBVtociWCyf5yQkKEWHfzJbaGaHdgttN4C",
  "key26": "56tm45UKvPZkkU1JpKtSaVNKBe41C1WiSC4dB12KssFtrXxfhCDDb2ui6ri7bHLGpv2VhzSxfQ14ERKUdMjJ5ZFd",
  "key27": "66cQftd5ZgVEt2edzJeHhjN5rHvvkXS2T1VEXJYbG5MiyAbbdkPWDNsXXcqJP81h1LqJKFYtvgudburyvrJVd9Hf",
  "key28": "2jQahTRjhxWAmCJSxkhTvJkWRWLS5FQWRTesAuCjGrVg1t6jDnM1QHHM4x16d5WWzLbPpjV1U85T4JPRSdSmsG4K",
  "key29": "ErGPR84H4hQa22WqbrSZAS2KqK8kX7yiGgyrveN2FeEQBJRDUTwim1PvGYmbLM2jCz4n9Mc3BWUxwGT9P82sBhT",
  "key30": "4iAKbQArmFkthrEXE2Lof8rMLQcZVE5whPPHskdYYS2TNWcwcqmSwj9Lqn2pLErKp5dq99ut5twm8ypdJ9QqSCko",
  "key31": "5BRy2f4B3CUT7Mkf8Jr4RF4mq2BT2Ybs4mGSgHDHtaKxptAGsTRqFAkTnYydxmL5UZNKLa2urEruQgypYnf7kQbz",
  "key32": "JAhxcXfGwfKnQcZPyYMzV3tp8ocw9ArsGYq3tvnBDVbpqbgVRKHoyDCqzreBY5jsBvaSToRL6wnGq11gzpLCmFZ",
  "key33": "SvCxHRrA8HLaWjHaQmxJzTxGzZ5HCxd9H7PXPkV9iuyKacDQGLaTyhtpoYgUBD3gNnhwu2GY3hZgrkCxNN8WYhq",
  "key34": "5WK5kus768KL6bcByD4iVoBW7S372XVjn81Sq2DYoijvfqM54ZshKNLJvBc1HgmDVUpJvUpqcgvBSEhdo6LgfoyU",
  "key35": "2HE6LR1JnHUcNZwNiHzUJZh9Rbp9MJzNYsnUDbiEQXEsijsXbe5DasU8ZYAo42DTX4EoqqcqL7zpEQCFtAyK5Ar6",
  "key36": "3rrAVAi34gUiB764Rv6zHK5oc76DHE1dKjwLHUTE3agoG8VNoDBtAWtxDBzAt5237mAEPqhc2SAEgirbSeYrFeRY",
  "key37": "YkTkZoRGMvQaKDY8jaVN4hRohKZgwRwY1mQ8FmsnXawaFYtxxQjYSLsWvhrVsKD7CcgfLbGDukQCrqUmhtYZXvD",
  "key38": "Cmyxfu5isRRLGEymGbBafEQPXoQc3RmhmBMovQqxrq46ZNVhceh1n1XFFjP2Dz49xwkJwtiupeyYdZjxFFrGQsL",
  "key39": "5LrJGhvJHSqYgqGqEUUh5EFrggpCwor3272C8tqdD8xUf725EGCXZLWRQvBXJFXQ4FeNZu2Y2evM218xzwFztDgR"
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
