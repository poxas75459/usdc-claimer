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
    "PgPtTLnqYU7wRG8SPw9s5meJn6u3otTV9aT2cKZDKjXnusXLm4CkwqUsgtxWfSPNMEJqNWLq1eFRewNrThft9yL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47oCaa78m5HqiznwFhMhtrsjVPH4cTighq8zgV4X4MF16QRtfBA62SDijDYrho6qZNeUjBvqam3FngfAaNCVSTEo",
  "key1": "36CEXtrMpCT21DgMPnj6iLHwZs2nXJzhGs4TxHUjHMWVFGdUhmsLgdB9B3dDFBuZc8j2TnbVBbweiZ7kRdak4c6Q",
  "key2": "nnBvu3e4LjNdWWm8LuN9KddoLyQN6Ap2JKSJDAg7ECngUbvTzseZbjF5Pa9ZnXQtfRxe91TZBMiL3HWrtZjQoho",
  "key3": "A35p1tsXdQHvwyEmEZ1J2LDENL2wi4ddcoisp6vz9oS13vDhyQLyse6apEczKvBDHMB3Uqc5eASBSgVjryHsAjM",
  "key4": "4xQF6C3mbSWgTSS3x5gZ5teUixh4PhAVXVidMgqW2dL9mQwcR81FNJvpKW6LbyjnHPeaEFGX7NCtZk3M73Sdavac",
  "key5": "4CUMyV31Lv3k1339fswyWFDbLdfmRESVqB3MHppm3JSAK8a6mnaaCbCMUVaCTjy71h48yh62QWhbdSQunqxB5iov",
  "key6": "3HQcxc8jcHjECBnoR8AUZHX7455YtHTVnkLxAizvM27h2ZNR6U3HZq3UiotB53nJkna91HVHsRck2rre79RiAfAQ",
  "key7": "3hFDh7usn9EDwadL6nVXcvvRMj6sdPHCBBR4NgJbCqCsZpUC8ovAWmqioNnHy516YCv7QRQuLGNb5Dyb8Xi8Ssfw",
  "key8": "2AofCJdytrzoWqTS3btU7CNX6czXbBqF9uAsp7b5r7fTN1mY5EjdrFkeUdKwtdwgLmDWcX8fAFBWygNdhrZpD429",
  "key9": "3wjX4qayKNzF4dGRHZL9CbkAhjuQJasPEABtDgybgQZvQmkUGAivx249PxTkBpxR6Z4FoPWrGnUZ66UK62bBRje6",
  "key10": "48QJegDibcBiZ6zNRKF6zZu4QRxmoctCDfEMXuzt2xgjWyJJqFFcrkboR4vroyox9N4XijTvFMAZBKrVjW68sCUe",
  "key11": "5LBmnLivZXSys5ubfvZaWBMJaNqbCzyiR25nFN8pH8nskiU63cmYXVGC8tADYpNiaJCPZCg2roW4kVj1vqK9JAVc",
  "key12": "51Lhzk7YkzTjx6Pj1XEbUqLpfKtXExjdhdaE2fhqKE9CzDZAibyguQ4r7keoLqxFMNTiuxJv45JBhMvJ3zrtM4C9",
  "key13": "22KkZUbJnBZ3VnaTVeQCXReZDEeyvhHEAcQSxRf6CyJxqFcjeLGdsAwawwN8j5yBXYhQYXXanga74YAZVviLSySa",
  "key14": "2KAkR9UZ2fy76v2S6hcfz2owTfb373yMdY98ecEA6X5WHTCbUdx7zYRrLNYBm4Qek3tXFbSTkDjS8bQYiihzgmGR",
  "key15": "4XjmjswBiiVNmRF1vPmJX2xqMdpbUwYxBYfQ7TzPPwYXAXY281VKgXfsBwTZsGoCHPPpKsRqKJRkAjUDzKyQGCfC",
  "key16": "2bHQyUuDhdGj9DEwcYmvystdKVwkpwLCvaeyRyjRWrTwXKiFZoYSRhydxyTjv5qvPvmoHxRULgjM77QuizFAj3GC",
  "key17": "4ADeTGTrTH2wxo7q8L6RUZhUcwkXyuZRoQHfaVBxKyPfoegW1fUbBbCXW5KPj4B7EXG5UsjNUYrKAEEBBjs1QDE3",
  "key18": "5QZwpJfJCAzNcR5BYSmGEX8vhnxLpzb79nesBJQjPUfRtGbRinUAux9RUU1JPQFnFMHfYCjgftQNfojyQ8V5ewMG",
  "key19": "m2mtKPHFeNzorCFXu9gumtZyXBrRc4kNYSxj3r24XuPiHoL6sNgVKeGr8CFi2pUBnws5qCxzGpPtrMVbQUnhgZv",
  "key20": "32rMyj65wvtoez7X464aQV452MxzA6wqnXfu3iH3i7hUhWrF6KNa4MWgEqcek1jXuijBYYKLRqmbbypkdFq7qiz5",
  "key21": "64U88sHqQYP6y4n7jrs4p1GnZAcabREZqJTaZzDju2pXnNmkqZQ9cJN2MKHYh9nNSHkRVcEc6yYwS2aUpNP3PfB2",
  "key22": "4GVczUVYrm68dc2ssbz1Z44E7XjCTskuDto3TrChiZxpNtL1vGK2GAReGbSuYmqa7fjqc8bY1HiBq7XcUH52vnW1",
  "key23": "56TUyVk9MwjGkRxPRMePSLhMasWjG7inLx9apDUrx8PBEY3hYc6NVTW8Fmqzha3PXit8Rk366m9asovhDD5oGGjM",
  "key24": "3GzbKLEqF9NimWUEAG4oyT4dHawVTVhJwzZC8sM5cyv1oooq35GkM9wAkVJE2c477ANspuaeerC9c2dFE7pcnh29",
  "key25": "3gXm1isj8jpCrS6njpve39vxe3gip6151gbQLNDMowqaNdh5X1EFvmr2ij5emVpLoAVFfz1MLBzGByB29jie5F7C",
  "key26": "BEm8mP8xWvEj1o4AZPgTANqRgjA66xmfUwfVMavnJUKUJdhvRRA4LVuR864vP79erjj9cCr5e8SRkjjKbewWxnA",
  "key27": "3DZ9HEcXiRc6pvohG49UFJ5W4qvD4K7vkfDJfLsdWyfXZv9XwRVnLZQc5NzRJdG5Xqmmmeh9Ywsqopa3E2pK4xcM",
  "key28": "4KG2m41E74kFgaszdCMGzGAJu4wW16jkcJze54ewu7xW934SFbAL3q5pp7j58rXHEAWw4ExSWshJPhbg1NTqgSp1",
  "key29": "5gVw83jXfBVUwHbrZ2RD35AAFrby3fcQp7SUjxGYmYHDxzEMgnn6RGM8EEfufqpGDdaEzxHVaPEXLynsvUukpEte",
  "key30": "65Vq6rc5q9sHnWduaQj3DEaexTRf1uU4dud2UxkkWRUYz1an3GpdrhwAo9F96MYsHj9B3h7oB51pzw5Ta5eiN6mf",
  "key31": "nHGs2PM1u1eoNVkf8oEdZs9twsp1kHQKVn3jJmv9GFfTwpt5miLH2v2t6ZjAJeMwGP1GXzoMPNjzXrzYs3Rh4SR",
  "key32": "46yUdopoWQ4hmptQKwoPc3EKpjAGndr79j3tqhRp4tcXg4Fyb5kuH1A8Tu6bRAHdp7785ykkRfWQZhRYaDWGGHqd",
  "key33": "BBg3S3454HZpdNAaxZe8RGHBThJVJBtZZVW5f8j4L4RBnJN51sRRBrq2PXyzvdvyZcjyKuF28EzzTnC8NeT23SV",
  "key34": "5wzvf75gSy3i8sHcFUJUyJFTqZ45C6V9Hnd8DPmP6SiJemTakmmGvxNDsP19pTRgzS8PSMg462HEzxjHQnxrEAKZ",
  "key35": "ZiLVfePBvZn9pFtJdCLvttTF8QYija7ysXdfWnfoLqLhsXQXK654manCh245NvkWtnVE9jj4FdYCFZhAgy6Hs2p",
  "key36": "6mkmDxztSqq3d5fyHr3hiin9LFihiwhtaTxV58YdTXVpfhR9cWVzyJoQ9fBZKe1ZsZYsieXzoq4aSHyY6agiUnW",
  "key37": "5ouvBt59msZ5ajJ8bwLLeXV6Fg3LDTq5thSf5fXoHvTU9BZf4PtfNbU3NzEPqnvjnRCAMeEHdHpTtywXyuGZQrqj",
  "key38": "WADQWD4vPsQdT8f5xysk6yh4QpfMtSUpqfVkSUPNpB5g9msN43pP26VEXoYiv7dJSgFT9e8VauwLUUBGFUvZDMj"
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
