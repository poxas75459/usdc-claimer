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
    "43sxE9eqBBYWETbFzFLTqjEwJwhao6ZZDMTSWJZAUMTQHZbeXsJrjV2r7UwArZe1YCtTHhPBvMBv9HnvcZzjKrDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BycEMQCioCxWAjLnSgspwftfH546kwjoCtuKB2XwWWquVELqx79q2YnZPiSqgKf2EHxPfioAvvEMTiZMevsKS2C",
  "key1": "aHokC3R7DKwiEAQ2MFK2tKoVdasRCMfQ99wHLkzgL3dqwev7mifitGG4ia8todJ8unKHPrsZ46zHxwhxChYLJDG",
  "key2": "48SYkoQozzmSkp4VLAyYmtnrPBb9k23SipYeBPLwuEiyEhrYmqnE1bpa4XidLiZjg6nJBtWUSZRVBkN3mChwapam",
  "key3": "kaRm266P2UsCWaueWM1H1apTy8L7AuoaHgRX2Sp39h1SnXWBuQC4NbW6U3tivYJr2nc9q6WpEnkcDZ7dEFktbkQ",
  "key4": "5rMcuZdjHWr5Y2er7cmjBRhe8b1BaoRzRTcgPb6fUVCckLK7cR4Hc9exrdAmH5p6c3Fd9H1kxgoS98HS7ngryUUG",
  "key5": "2APaYC5Y1iktpzngcQAbVPgLNjBMGFNewxFXbta68eKRiERbaSCZTwNWPWuvv5qH193UoGqDbFn8BsmcsJxZfdaE",
  "key6": "59nPKtUATwFEXDHQy8Nqz52tSYSbb2gqqxUrPQ5PsnB28wGh9HQkcBekirjysFjaiKdKwvNiK44an6uYv1LGrvuJ",
  "key7": "5ogqQiC8wC2iSuvYaDyRfk1acJDwW4vEqKc3FHT61bnxddy8Vb5VJcLr5SXHb9DeRHeokMHcDBzNXPRiCU2UT2pU",
  "key8": "2e1rYtm3X21m69cebtLq4x2EuVk2nkCfWev222vGS1dH16sExrqA8FjFTLYETLCw7YEsbJbnynj9MhVdHo7WFXY7",
  "key9": "5ddhKKdC7SU53VNDhAkKBhGmrDpfS3bsPynaNAjXr8yzq4XvRYSVPQnsqCf4BzTUdS25QuQyuYrdQTzA5ZS9ADRo",
  "key10": "5c56d6JeyLUW55GPonyMb2EoPKCX3DKqjy4ah7A5TgpSPnDT4TDe6DKJLzfY42AcSXuGgpTmNpQkyUi11mEfqwny",
  "key11": "2jHtk1zBZkXLnNJ34RpwsibgTFDtX4GYA6ud4xKT7KQvf9DC4MYXFiUyqrAi4AxQmN3sMw5qZ7nm4VD8x21Lz4n",
  "key12": "r7FywxFASisMKVAVPARHYLX44TBByr9y32PE6o3ky2AgEa6uFtnXtts1NEzLEsWNHKuSBDnDpBAEaEa9pQdGs8j",
  "key13": "5ZGr4QRZav6cCYgRG7DyZvfh8zfdXsUWjRcHCBu1sFF1xCrAAC4CeJaCeWW1KNdJHv1SNjcpjDbzeHVE9fmNUeup",
  "key14": "326CeTnU5xwEbek7qvUC1zHUPGmiWfi96SoodAwacU2fnqd5x6y1YtD2dF6VxNh3YkPYQvWnAZLupfZ2TWRzHveW",
  "key15": "5aZbgah1FSwvFs8LubmNd4MVXkKAHbsHFd4xmFMxBwfmu6qEF2JJJGqAZZBbS8uHpvFF4Am7yho45v8VBoo5wNGw",
  "key16": "CZ8XyV9TjC7pttSJgGSS6FiREnNzWTrqevYFErFJhMCVYviAWUXZQxWGkn1ugfXkFbgW2vTpoSTiKty1F97jE3p",
  "key17": "49Sxe9rGNtnRP9vymhefcvvpaofvxMKZYiYyUNPaygJGcWiJUdWfAy9kXCDVfZtb3xYwDwN4GXvy3udmGQPDxVE5",
  "key18": "5AnLAipkt7nVFVL5tEkKCiwnTYemNyQbLAtYjP4zFkT7qFJPMbRYTxbSKexpWfjW1DVDD1v3ZLiqPcgmAhZ8ZFWA",
  "key19": "bEgzWWuUsaDr7pjoHLdombXBEPudhFUT6GVgrzSwPN4utstUmBWqCjJSUjC2fyEXHV2i5JMHW5nM4feh2PsumYf",
  "key20": "2ySEKtCA9Um5humMy1voaiAPE2v71qr5Zb4BMtasE9HdkCxUvSsv6mkaTdHhA5AgjJAQz37mx8DKZxp27VbQ4ZVy",
  "key21": "5mWRTLcXnk94RFzKxySgYc4XVfwghA9EAbZWybLLtF82khSZQieYGu2E5Heg4hRDncnmewYiBKxYpQes9QGezUpx",
  "key22": "2fvznWzqW45iFnfybj6h2qn5abcd2PzKsJkcuA9QXZuTtiy5aAxL7LuKsFtgQgYeZ3QS8uEDD9zPXnJAcm1eTNn2",
  "key23": "5jPTD6TAgRJQkMCS9km7sZupLQPbfViKAE53GAiQz5BgJbGQaRZSjwsNsQQ4SHVU2SoFdqsoPXi9tVqU16rUDwQE",
  "key24": "4yJFUTBUzvzZJ2Fat3GxaxcY9MrtDmuhhU8jxNGqwerXFqPJcR7t21iZ7fwrWut8X14DUsmmEPu4L6ojN3hWwKJG",
  "key25": "2stgeDqFkNu1gjujVdxahU7LFj7iQwWdvjBHjucQzvrSSRGdnHYM1rjzPz4xgJrgqaZHRLkeeoipqVujLsgjRR7i",
  "key26": "67VVRowA8Jp8Uon7isEpWmBtpteX5d5i2pUDLoHyRGdDK4Tqw36fy296nAfza3xe7wgARgKiLMgp1UhPLyVGeNMj",
  "key27": "3kBHU4MXJvLt575M7EN5z2ZBuMoSqFXPe6QseAf1QuTUDmNFq252hoeMwLrDdKMtWQnBEMdjqCkunXkyCC71WvGo",
  "key28": "3kmNTX5Q2Lyw92NBfSnaMd17wpj8dakHNzSYR4RjupA8y9NQcdNe46tVumeNjdMR6an12DbPsnSmJd5ftrvdqm9Y",
  "key29": "aZEhKGKLD9DK7pJhqrgF5KPocM6ob7eVsZbtznkUvdj4a9v2TZZpPYJaTxni5nxqCCE6gE7ifwjfNufrCsgKJQd",
  "key30": "352mMUgx1ttHLypev7AYqjJwwf9BDpvt2xZKtqVkpQCghc1Rmw2Bkj7PnemnsTQp87PPRwAmNHGnzFuUU6aoppox",
  "key31": "MkrMdcardyJeycvGcjcLFN7c1jra1mGzxk9QVgTy5cEFQyhGtU4YtsxLmNdV6g6QxnzZN6jXp2Nq5vT5n5FtQ6y",
  "key32": "5vTFvxthMFae9ccabe5fpFvykRmjcLHfSoz5xLjgHW2Sh1xKbhoGYAhBkGqcQ4avahmYFseoDLwTC7PTV6VHC2nt",
  "key33": "4PKq7LsWqYLs3L1CL1Uhz3pvfqjyprvE3RN9GuF35taW4hDaqxD9KSEiGXzs3N6J1k7wPQ2L9yirKJY47AofZys4",
  "key34": "2bPYp51b5wQb6KZFLGNiruG1DTp1TytpfQQ7MW2dvL3tyvDfsQGAXHK3c2wuiofBUsNnr8vxeFu2BTe8TE19D21u",
  "key35": "2wxKZvvJsRBQwpZvx1Kt2VErbHDZFastsR61UwPJ1RfCDnwnYXoGnMUhprkLZxuAUzUs4idHo9W541xrYXUw27f7",
  "key36": "XaPpVPmXhhgCLg91qJLLjASBBJbJafHrws51HQNUawAy1wNw7vW2uap9N9VFGeWKHy27M1Tf27MvMbE8tWD3KjS"
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
