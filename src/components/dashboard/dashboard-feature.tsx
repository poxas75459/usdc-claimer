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
    "5Rxg29Gdeg4YQ1ugr8SrCjNiLQDNdzPTsE8Rnz4muMaU33nCSGRjJFUtLr3vyHi15isgqrbqY8GPwsHyCPthGTeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M8vnRQXzUpbvwMqo5oUMQhppcBKNak2qGRMjjBFGr4BuWfbaHvmACVzuWARfupF49iBzrd7YNWGFCWXMb1hLJe",
  "key1": "3S1s66sYsqpAwDjcToSi3ob3KaN274AjNYLNu4C71oEs41ThdJRPvZn7EaRagokUgY5XyQBaTCciB7yfiNGt9Xnf",
  "key2": "5cFpTPsz8hyFFPZurYyNrL6pGcSW8rGx6VMc3NoYUKr4Jw5obEYsUg9nEcGdbLxuvar2fMigqEtEEr3H7wLrfyUw",
  "key3": "4MWhoaAKjFUvbGLdfAuF4zwELNnLS6B6Nab6R4JwqJLUze14hsAu64hfpdT2GWUCyvZU4ywk76e3dGcSSbQixXWp",
  "key4": "53WAR2b2mJKSqJxSkBpxfm4FDH1JCd3oN2SwR1rLkXZgKwV2bZExmyrED9xBEMgGcLdEaLRHe9dUnWgk7nRYSTek",
  "key5": "3Jt2sQzXqNgmtopLPszMPSuT6GPbPqnGLKTQsGseCW28zc8LQkCBoZE4NvAyTSqLmRHQPpB3yy1gU7ZqSTdaDifM",
  "key6": "3ZzGkmbsMgE8u3fPkKVejCGU4wSHK26uVrnXcXf713JfmjjJZkmH37rFDzbvexGaDt49fNXgW6cbMXFwAEhCJZjC",
  "key7": "k5p7M5U9vhyv74YjQeqNYowfXKjaxTBa3YG6qGSr4ek1KFUt51QnV8kzF8NhHps9Lw5SfALfuUSF46n4CH1j8ax",
  "key8": "34oXJXpKpNCJRFc3uEwK4iTceXd93onuhGqgSz4NkA7RTpwDhQ98DXErWdpqZcVGHAhfFcZXgJBTTXv2UVMpHd2X",
  "key9": "4n71YcBSeRs5CH1ZvTDxzb7Pw4qzC1LdC894AvJdG31bEST3zLpm3prN27D4q5BugqjqAiwHGYd9iM6dGVT8hV8V",
  "key10": "3RvzW8FSLz4PHWedmLEXFnHsHnwWHniU13AGA3C2yFDWHWznqXRMX7o6A5PVAttESkTzt2qLyLmk5aaUoCqW1zxu",
  "key11": "Eb3AL3Yu6znMWHFkZMVajKXK13fBakLhfDi26a3mU8jqJ11exonupay2s7Jw6CaowJvSCigwTcSYMkqAn6E9eUs",
  "key12": "PHV1ngk6m8SnuCoM4QtRGP25fpRv1VAhzKTc8nN5ncG5kUaLcG4Gdqs5vaN2VZxLykZUTfSwDLZGWd1akXaigWQ",
  "key13": "gB2MXfoTWw2AKDR4fPMnR6hdCtNGJTPKPnKcWxNMC1tTZmBucouMVkeSMDyNxU1Q9K2E1gYQeact12SdoJYhCjW",
  "key14": "5sNh2XvZVP1xdXP4PpCwaLyRyapsGHLKNbq87btqXjqHXzbVR71A5xSsdN6RqJmCMFCnw6reKpX7KVZ2Tc1mzi8L",
  "key15": "5fvMkMgL1zfyDegrseYzCtnsqHHGUtAbZfcqcMzsg2th6tgXzLDWNcHvDYLMg1EnZNe68F9nBzwAJYZsEJjBf99T",
  "key16": "2isUDMPYt6Wk56aXxt1ygkhR5Rn7g8ngHwFE9qGwPGMCawkY2HKz5NLkzCAR35UBAEQyyqZa3RTziQt8q8kHVp67",
  "key17": "3JWT1PTRDmwh6uYpHZxhsKnde441hLCRef9a4uV1XNhDfNbW8KxT3pADyU92PvyUZxbohXVg1uj3ekeRhwuUcNFm",
  "key18": "5NCdwfZZgHcfXaTz4Djzghz3QZtvTYsupPXeapeXLecfRb3vWFWxru6fwtE2w75VfcxHjp8m4rPYhToCSCoGTZNy",
  "key19": "53MXwPfQc6Xq4xQoXMU1m64VsLKukT2CdKBN46T6F22LPFw7kkUu9GuJ1uYmxJT3HctqCNUUeR5eqvA6QqPFSNbU",
  "key20": "4unG4YhJe6rqanLUuizuMcNP5UaxCpFaH1acVqLtytgkcqQ7EprZuc1HkR4rLE8cqbQoAaKwZnXSzpwei95kM1zG",
  "key21": "Q2SisXUghyQR2YrKd1dLEzonz8nJ3C1BVVpbooYp6Vft7d6aSbJzp3GmFapFJXRkC8C3wCaX8FnGxsfxcx11Rd1",
  "key22": "4h4JK1QDmkKF42jpNb3kc2zkVMskWbQv4Aaf7EdNF27sKfVrXhCX7uBiPuud79EFUr9RWjeMMpJJmkzjfYNE3Fn2",
  "key23": "3ZQu3Lmu127z4ukrw8skawVmcipUmMoCG3NBXRbgUxFddM9xx1cX2Z6WFi8iLQNKdgW9BF96zRfhqsyQNEfLhoPe",
  "key24": "44bBT3ZZbqkFgpDo4JMxcQD8tdV4U6oo7wXKiCYJPuWE72PQ2s15vNc98Q46S9X7XPdm1BTbCNGpJZFqZYKZGtPg",
  "key25": "57F3heHfjR6SjGj2YezomSaeYs8PevMcs4XFqSmBW4G6nYRF9wDB74GawFPg9s12opRhQaAPK78VFZxdidz2KEgp",
  "key26": "iEKkAczoZh1X23YZDYCCxjhAj5S3zFhiUQcGJ8sqXDq7gf3niZTRcudAFSshJGqAUj1F7aoM9XJHTfRsJ9DzojA",
  "key27": "4rkWUBKSqf1meH1BFrwuVmNVZCBDe8LYV7GoJcZgB4ty2vavvQDJaCNhGhn6TBQupv8qTVGiWnxKuGFK3sxiXvqo",
  "key28": "2iH3KLMudo2HXrPGdKiTCZ9Fp5nSgYv7KZcor8rjb8SahaFicpXJMS98SnyrHetqLHDaYPQUsNU4vze3jHgfn4Y5",
  "key29": "2Mq6TFJARoyZSid9XQFaDrZFFvr5L6GyuNFVq6rKGRcNQ6fmpQfooK3VkAr8kdewPkgEgUsTw1fiBjcXVX4jy1QU",
  "key30": "43xsvfXNb3fmFTFUJXe3L5fxnbLg6ZEySMH43oehFr5hNwfMTvGoDqQk8wbTbKYyP29oLBr9C8GLs2yGnhUpFAXg",
  "key31": "V8xJzMXGbRd7teRqsANfSceTuDxsKhFUKsq75De5aZzeuKhePjNVU9bUYkTt4q3mcdqpcAHuUFhyPDUKGCS7WUY"
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
