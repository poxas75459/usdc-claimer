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
    "26LyDJ1dK2razJoGU4DTV3LzTjZW6d2DirRYEhFjcGUQpQBZ7agerNNo5CHh8vvVhGwdLCqqAireNmzbnDsQ8mCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N3W81pu8hqjSFhUgLEHcztrGLAnY7p3BFyXmTCvCUJRyyBiVAV3HJVecso8coou8ufRxtVsa6X1oe4tYyQnmT2p",
  "key1": "67MVRhfR46bSRbR19axJ8kBCAyvL72kw6XDnz3ridUqSGqaCMBqq54GYY3wZdD57B5mVUxWwndBSMB9Y951cqUg7",
  "key2": "4Nq1TuwM3DhfuBJC8rL9azp96gkaEUb2XcvK4zbWnCbz66113SVPEFEofHkSeYrZWjv4ZfXxtm58dXxDsRze3Rmm",
  "key3": "3QqfJzWq1uz9ogqbJdtLCnbAgY74LwzDoUdhHVfAQ66fooKVHdFKt8LHkvVwsyLjHWWfaHjcKYrBD7TJd8JuP3cX",
  "key4": "CZEyngr4ny5nkVugqRa38EtekAYsJTLw2soYa9UMqcZVhFpgtSLUYMSe6XU2xiogXdyGkYPDZNptF8TGoYXZHCh",
  "key5": "3PvJ6hjwDTVrNgj4QooLVVtrcBUughzvExmr6DTp9NpfhGe7eWeknwLCX2YocqzV9cynVzWGkMYZ6BhgeG9NY52X",
  "key6": "62dFQFUHXPnhp9fvyjpt3tdTMDfAYmTUbyBzGeG7pFJc5Ln1nBBYPug8s1hbDyMYnCsAig51p1yBHNWqvEewKJrG",
  "key7": "2ZbdGx1qK9iRvhPp8xFK9qq1ucvTkyKoJg9ErkHyrWkuKoCvbwobyFTUANmdAGHtoK4YGxKqHxZYzuQbJ9wYN8WV",
  "key8": "2V7aKeaUeu8vHdewr9RAHYAKqpRbgut1goAPerRBHYQqQ2vgRSf597GQTacuKHspjLs6YADTsAyLp1yVaCFSJTuq",
  "key9": "5T6Bw8bt1gvUGpu513VMD9N8sZMfcfYD8sYNiQSopUkZf9w1WRJ8F2gyqQiJTxv78uzDjwTW2TQivy6iwZ2ik7eN",
  "key10": "2SEZ6zVHQMhgJUuzBydTLrrS3JbyyxWMMrDpEiWUEoyL69faU54uNJKdP6sCfEb8qruq6dnkeFRf8TqZbZc5anMq",
  "key11": "2rTjeTVa1f6ocetTn5FhcRzvgHNgCgQCD8Sgc6FSAUmEw8kS2EzJLAV1vWKnbGnsDVjisTf8tNEChueuWVqoLJuu",
  "key12": "4yTLHhR4ntZsqk1BVQibAztfJoz3TPsbSnT1oy45jVwMS3Cw1RKdtbjsZiJ2LsQRtG9BgbW83wkaYL7unCknym7B",
  "key13": "2Qbi7f39FcPd4fK6RricDacJnbXZagv3bcFF3MZBhZRX7UxjYctKffmPMPRFu5UNFSjNaJnHuPMA8Mbt8CQpeXB3",
  "key14": "4WwtqFiqQx8iLSWK3cKw2n6SNYw4sT6sosZ88KMxFVDikSdDiYZ38dmvNU2t8cMhKTPyfQrTsAPVpetZvrKLHXHi",
  "key15": "ymD2EbeEdjyjBxP8bWaee9PeU4A3oH2mbTZgSAvLBzpyPq2fN81V3tekj1cLry6pk5tRQy8uZ7kYiL8JtjvC8Vp",
  "key16": "3oDit1nJ3nGzUYN4SoFH45QfLuGfAdgCxEaLbi2kSttMHVSNTQF7137F5Wn3bubgUCy1tNU18NDTgXcJHmWfJZQP",
  "key17": "ZBdhpJfVtNxWWuQp2ixcmufvRjEk6xSKtWzAvLgf6NXfnK9beCeFYL3XT7GNtVK3AxHgT8JzR1bksf8SeV22Jow",
  "key18": "3UGNfteqGSc2YM1dd51LNYL5TLHzsuZz1xrUeetTiBjgwmstJHdSu7A2tPnFZLWyjGReYZbJ8SRiYK9BU4NoPkjs",
  "key19": "3H2kLgG4EQao566Dc4CYHnFKH57JDDUmZuDAEjCCwXAks2SaGupfT8nPsd6CWox7Mkdj9fBBiQRecJnxmxFZgVsA",
  "key20": "4ZiByALRVpoJCk5H8w8iouCmh3AbNHHoSzURWzzwz3wT1n8y3bdP7aaBivqRJPFNMPPNB2pzmvhyfHCWS3kJCDpd",
  "key21": "2oGhJFNwmZxkWb7r7qwUuMiXPfRgwK2LwjdBPEmBJwi2hc7yJojDj791DpEQ4AZZd4jCJ7wF4KMoGXJgAt3ymGuc",
  "key22": "28EGjQrAe6Ts7jQwd9tgtExH4JRnFcixjDrzEG36sRhCqus9zKDiCM95wET3G7XriefgQ61iQj6c99d4cKd3Yh1w",
  "key23": "5Pa8xLmbSCMD8Gwif9B4SWS5KZSegPvSj9mKHJ3pBsTozvkCKeysLZuMaZ1dxgVF3GGkyTEapudFqmguVz57hacL",
  "key24": "hknExPVy3x5NKUzAsKsrcRooZTgUXbQpejRgNEyEHs6tZC5VbYvHCKH8iyk5ma2K6CNWjaqm44rdqpQvqW7dZyL",
  "key25": "49as22sXdTYdXLF3D4TQXefkhKLwb7rz19gJF3CLmAVbKwRu7h3CmteCWq9A74t1UrPri6ETBBBonX6BFvo1HcPJ",
  "key26": "j9hoZuB6AXqJ7PDT8fzchNmARyYu66TPQuLau1yWbeizHJ17t9npyoi6HVJTQSX55na6UBwSUTqEq6q9rJ4T23X",
  "key27": "2CcyQ8sCJ2v2qEQXTTWcCLz1sn89DYxQZ8UDyyqZGtuVfPvUMuwwkYNkGyRM7Cp7PoG1ZST1GQueXGMN3ZA1FxsT",
  "key28": "shfpBLMXEP8CRYJn7BiqJDAzDmc6PcjJeVn4jyAMfS83HMWLfUtbUj3nkYZQhNaNsWAhicmCnEB34o8guDVcJyp",
  "key29": "MUr6x4rHgmhZvJckT4enY2q4mBVxQPu6iTLEzYzcCMvEsFWYYUVdjL76uckndqWU7bo4gGJGXrfthF3vnbebVW9",
  "key30": "5cHrHDLW6xPt5iYVRhrpVdN7mmv6ZEANpqrELpHz3zs9Dq3zcb696AmL8hef6QePyo4DbruwHuDVTzRwNwi9m2yR",
  "key31": "4S4ZTm6PdvxjAezcxMfGbi4Ej6JuCTfZc2gGA2wg6K62gBhNieLYxVR2Nbisv5xN13EbDZThjBn6EUfmxTtgxT5A",
  "key32": "3vnU4BxJS1RvvWyLgV9onhykSoqZkT8tAL5oGvD6yJbADESrTj22RsnGxNqH9ACW5zzFxQKA8BiBEqMrkTer4FCA",
  "key33": "2qinm8Grc7SPL2XpzJEFDTwhekuGcyJJbLkDhT25hS3MnAAZMBMwfKPukcnV6LBoLdqK51Z8aMuwCmkmMqKmvKba",
  "key34": "3ZqWAw5dNDQT9FpiRHqzfKbFrmUppXWAnjD1HBnHD9YG9h42TYAdQiT7ioo37aJuYnCv5k7ApAejk6FyBRGgYnUP",
  "key35": "3taDGuhw4iFDF9SZ4VDoj3HHRUqmBqpnRHoRKEu9Afmg4ynM1itceKWj43qLHXW6TsndTrS3TMQHTgch1r3Qbe3P",
  "key36": "3fG49c5H5QtZuC2Vk3ZP5ELGYnDx5FjQEGhaMbvpfvXCxUYhZxoE9kAJNBUyJH4vBUoRCoFtzgAn6x58rTJZgS8u",
  "key37": "yc9iDd3gvsKA8fn5bF6r9dkiRfB9qfWYvawoYGqWjoje2z1op2UTAJqHCQbDrHV83wC4F4A674ZWKRdE9xtu5sc",
  "key38": "3Q7AkEc1hn75nHmLzjw54VFE1b1ouMQfaPSMk7cjVex56RVqQnt6jKh79zoNJXFpo3tiGnoRqCEd3ZS8akprb633",
  "key39": "2TdxUYYHFeFwCEeX62KXJbuPYQJK6ZdiuBBbt15DHvoVPLcS1fzXnsRvZcV92kRCPGNcpVESy9xaKAmjXJ2RCMPp",
  "key40": "2LF63QGoZ7r6SxfxgQ12NfUtmBrnbeHbZZxfNh3bNUPBwLufSyXB2LDqCdzxNhZQ6bf9FxmqJuUVpCUaXmQQQvLZ",
  "key41": "4qsDExa4RJYaPiiGWHSQ6cXvvsNP9n2NDHW6VUajsJWG9VY6FRP26N2PJAivsMNp68LvbBAi8jFjMDZiGZdRMXD1",
  "key42": "22BxVGgLLQrwu2CNFXTX2fWDa5avKx1gwqqYq6NrSw9GE7sCzb1kn9AV137VkPv3RH4bAGx5RXME3u95yPriU3Re"
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
