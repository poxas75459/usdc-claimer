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
    "5tcQugcQy3wXc6jKiPKVqrwyDyfENAomUeeGaBrygcMVKdxdcvUcGPd1pYS7JHcLugsiQTYfjcEagU8rw53SCd4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4145PpxPhjeSUM7Q5PMBEWNF875eWc94JMMfxhdQjTdxrdjAyEpeXdSB6xmjQ3MTeuGdqHFHtDcjF7oPfRxW95JX",
  "key1": "3nzEe8PpjDQ94FjuMEzvTf6hKq3YSMBM56YzVVtvu2gM6CiHraLnBJm6WpxTZC3dbyf2DUyixMk3htRHCbtVemsu",
  "key2": "249QNXQiM88Xfv1Nt85NHupKHY6aQA4cDBQN3ngxPhWtpcp7HrZXLWSfDDHRD6r11gpyAjqb3zoWJUn8bjAaYHbD",
  "key3": "5CCVUnU7hYo3NKKFkdRHxVqFZTgeN5fGK6mzLHe4tWDY6ZbaaFwNjcj4zJwhgu2UuPZUgyaCT9WvVpPWjo4kSu2W",
  "key4": "3MzAUY4J4cz8paPwVUPue5eir4PTRVtgvLhG3A6JZ8YW6ZUTuuHHMyuHgV6m6HFmEBYgZoNjmnmLE5UBXzWtT1eJ",
  "key5": "3eTao2Rh7L4UepEm77NumG4WbEexYTyAeNg9UC3LVHk8WMGyZyBxEk5tcatZfucAVHNWJqAdXYpewuAxa6hw9Ctz",
  "key6": "3sQHgKxj7sEKwWkV99dhrADWwnAEhkYhtnibkfSfyevVKeXLWpFDn7pcW2f7spnjB57fV9FD8NDmZqq4ywrwDuu5",
  "key7": "2ucc6Vw3u24GGETbzXDHskZ4XVX67NojF3cu4ui8eDBi9SnwEraSHSatzyasHQRJmjwKUVR4eAniUMBGChQmEKHe",
  "key8": "3QM6365V4Kj2sg6tHBvn1MMQpE1RobcoUdEojmDBS1ZsBqbFKcQ29v5YiWZy8x2heVGP5a55R8NjTJBfxNGCrmpP",
  "key9": "4AR7uVqe5G4BYJ2bjNKVso2QJLmayeGgmepC5XaM5KKUZT2kpfvn5H8oC95iy3wF5XYzkhJsiB59JLZSbzvPmYXi",
  "key10": "4WJ9q2hCbPXHgwR2iimqjqed5VVJhRmtAvN4f3Ht7b9913yUo6TaWGq7yZpL9mFAKs7U1iEeRf4Ym3K6o3346LaH",
  "key11": "tTX2EhXK6Kzvbsgc3taCiaaP2XPixtLCn1RFvDw5AHL88hQsYYQRSpPSSakRyoWR2DuD26wH23mNvCRMnVejPMQ",
  "key12": "kWpA4rFBDmSd6p3veR6xxXEgMWb5ErWbUaXC2RfwKeuYifNPfbZp57nAxw3r4uTmfK4Z2k1LfP7P3k6rdGdXw6J",
  "key13": "3vnjfywioUcGwd2Mr5wDG59qLoGRidzm688ZEj1jiwYkoS7oLZCJNq78vwzxz68Pz4Sd4TqWKWR3Sf2SEWHqiQBE",
  "key14": "3aEXAE38VYUzMc5sCBm35BYzuEXXVBMaJs4m2GcskEr9iGTMjUJaLwJaE85jryBAcgB9FqkLpr66ctgapDh13Qfi",
  "key15": "5Z7HNcHmDkayDn5DrNJg7qr1BmGe6D58XmqXnSsWCQn8GMPHCd2dz92FLKWtBfmTAUkQiARjFQhW5nMheJfTFKyX",
  "key16": "2U1CgMRKdvPvH1nDJZWC1JZwoqaKHu42VCpDKrydYshSj6VQTJm8xdSNoTnX1VMshGJz2XDC6auascfQvKrSMWHH",
  "key17": "3pchYvgm8hWvPbGWzkTxUv61SLy9oEtSTkMjAcMXJuhXoE2RCUXPHtDcszK7ArNKxHbhVgx5YNVnTdWgaadLoBFb",
  "key18": "2uqWBTNHcH7JK8XrYeBZncTLypQvH8ik77KFA4ZPUGR5w1vveZqsGY58DuyGNaV7H1G8PeBV4n5kbSsXfzgm5X83",
  "key19": "3N3jcN2SoHHbbaJYPhXne477KTq8SrtmAhqN6tLfJ2cr7hV4aXSXPmwp6XzywuY2SFsGEXcqDQ7Nb9fmmd9QVewR",
  "key20": "25c8c6EyJfrQcnpoi2BDipwQF723hQG7SKZYXiphowdZTMLfYzUHCGnW7T6XYgKPS9WWkHaK4XtXRrBHquUgMuvM",
  "key21": "wgL5d9uvCM1D6TBMAbGEfZCU4fCoM8HKYSB1yEdvMAALSCgnaNFn9DRCYWXzvmadjbNQmvmUZVzwz1ipSHHzPJz",
  "key22": "44QARLFAp4rYWACTVTvd8gEK6tFfssnhHjpZRBb9kEXKHHTwb74fz5aW6nHqug9YX6RcjcXnhCj817Yoq9FoLMZP",
  "key23": "5Jfy2TDaX76ScLyQsvvjyqooddw6ThnGX4EyLoaU51iYgb1Qq6CgB1RkX35kqfV62vVuS8JeL22gjm3BkzcfDTz8",
  "key24": "2QJFuyn7QmCiEYs9fwMebTAmLoV3VahtaFeeshnyF39CW4FmD4Mw5B9fCSvSW7MZuFpNBMxdcQTUeu5ct44Pfw57",
  "key25": "5Tqe2ENykejAL1eiwwHnYzeVTmFdEQXNC6nLugAYA18mrqvRJ5tXZDH96HLHdqLY6DxiimQpqdUZ8Zof88CpruKw",
  "key26": "2Mz4mwwcrWsZEgQTtpm3ziGasEsPqPLmri4dQToPiyeVFz5NwtgnLR6WWniggyevSTSdLZZ18vPFqUspyeTEUBsN",
  "key27": "2SgwDciaoVhasEbmt1nfStGpB3r3pjdsUcKQbDEQUct6Gexe9S6WS6N3KiZ32y29zV5GpLXmB6V2tyRk9S8KfHsC",
  "key28": "51sFGSdLzfAE8BTv1J3mMF2kHU9adutrvCoK3bfWdJJ84iF7CNtjGSo17w7AtgqhtM96QVR8nQKavKYYtrYQBk7q",
  "key29": "4T7S1HZ73ANGCjW3TybyVVTuBiC1akwg1DCioPK87NRS6JiDRTN9JEGn5WgKtTisLd8jQmEw4EHkaT5dyvVnJgiT",
  "key30": "2wZBmW4oJpdZEHtB9sZkomn29aw7mTaQw1UyQcgKAQq4HNEUnrPPacQQGkHzjZrn6FejS2qSCqE775WCyYT463qt",
  "key31": "3dTs8UKcfZRnYnPdQcuiWfFK1LYkGnPd7o64jiTrNuojC6wt95arTwowg3dKs19mqhRfosRfoFn2rUvv52HLQUwp",
  "key32": "3dnVtDbBs1UZvuuW9wnP4f6CqztgrThm1pw2sb5XkkpCKt5tortcLqZnAnsnuKkHHyQTjUK3xUX9sow98nSthZKR",
  "key33": "4Jag3oBwTi5rJqSQN3TWad1M81h3rTGvExFjYE1ziAP9fkqf6UnxZEirHvknSAaXqMy8A5BzTsBaMQPvfuxNQq8X",
  "key34": "4zpBoS57c3coPAWpDPDniS5Dzb29Wvvih4STy4PxvBEubuhBmHqjp9ZDmJCBC7F6rTBsXAaKC3wtBUGTyuNWjqVF",
  "key35": "hFYKbTV9XWQTLtrebipzCDFepApsBquCdXJ8oXaf5QeJV88SzQyN2QHNdBTCVZ4tCJzfzVGXALSq7HvkVVMc2LL",
  "key36": "rrRn4W32NmFzSN4XWyF16YqLxbXAGBaycYtPFQB7x6jA9RHaRVQFfVo21PYLPotdSDmFNmsBPeAbjavDp1XVLrG",
  "key37": "R2hunuq587uZsdcNhQCnAhuidkcpyWtD4H5DYV3STwDNYPtpjPfijkcryB27YJnoMRPU3hquKY53qv526Hzwhrt",
  "key38": "2Hw9oWg7XFFMEeFjZdcuQLP95ekBuABfbGwzsbvkqHk4AK4q4RAsgKh1tXM5cvySjoTMciQabbWY1WES2vdw8aBb",
  "key39": "5BJLQ7K1e7LNL2qJDnWUna8nDX29N7pdRfqyxSZJkh8ySEytMDfvMTYpZJX9TDHqd7H6w2G88pd7VpmhmEKjiRnt",
  "key40": "4iGWpGCZNSgeNDdNpnMBDskbJraJWsT3ZoTeNNyZZCgwdssxv4vsyiSxgcZnVDRamiVbQjzXdgCXNqeGc2AfBW2g",
  "key41": "53SjgzqjJ6ywiLKuAqK6JwE4XP8dLsu7gsBjsfCjfdCpg4xkSq2UWZUdCPtUuc3FtuYYpZztK6FV94wDA5nCaHGV"
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
