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
    "5VqNfam8DfSFqWm2yeXKQvyi1gVZBS9EWd891unE4GmGD7o45pX4tf8DWQUNjok6bk6AsGc6WkVmEc69KMfRXovc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zL8DUup8CqaDoexwEPjVdi456LhnZW3NrEY6BXEtKgsoRJqk9a7SsxTU7GDLnTBwoTkXZWHfnDpdQKDE4PnLRmc",
  "key1": "3W4Uo9iyKzox6nMbxWx2EiJ3huEqpK5DCmayrTnvAU1LzADG2tPG8ixeCHqyZBJ9gC2Z3dm6g7MqUXYi3i7W2PDz",
  "key2": "CAVjV7kWzqTXMXgz1U66wiFZ5H8DNNDeYEQHkjtNB973de5ADbtrox3mBr7dcMkQsPtR3nnPzNMrMcK7L4vq8fk",
  "key3": "65NQkKfC6aqxpCtUZZdYAb93ZBR5khZyja6JS2s9PkNCyWPLiQc15rQQkMexXteV3ADHDBez9SXnJU38hMDZSzdH",
  "key4": "4AQb6nt7XPTWNfQ8RYrd37isSv3ZewjePtB4Xwm229biE3jRTCTJt4GBujEQCXyrtaML1EyhU6qMMutzi6QAp4PX",
  "key5": "22pvn9LgUC7x34quHuNfKXTDkphfN61tFVDtz66S1sQFs6mDeTfCQ8y3Aw6heQBjpPFrseEBZ4RWUrewcfTd1gcU",
  "key6": "2uJH89dpA1foGfN4KtnFQ9pa1AnnrftEggR3TWSgnpYykdaf4kUQRqX8Ehy2L546YJijGjrD7tXRdueMtmpkeCGG",
  "key7": "5jQbNXCj8isEoJHzZcbFfxNLo1zJoGoXLHzy4TjT4M3t4Zs4E3bDXYt2a9hLgVVyH5TpQabQzbQriKw3Z4VCY5Vg",
  "key8": "5bHQv6xYWgM6FsWA24PskmxCw2nSzXApHHr5C7tVXdzZMFN4oYHbJ7FL5YY3F8WBU7USx3dt8oujW8F1Tb1Fzw3r",
  "key9": "5VZ7Act3f94BzsGmf8xbm7wzR5yrw7LxxK2HyAv9Hgy578pXm53HU8NcHRGQciRhmRzgDFnr39YrVJENxHopfrD",
  "key10": "2J1KRE62aWqv4HqVMjcNu7Qg57gK5vPRqYeFGmCXWy4Kkx6YeGCWmYACCsLuXiK363qGFFZPddhWu5SbYhUYgkJT",
  "key11": "4H82HrXpz8GnpWhvrW6V7x6k9xfnHzVaBv12CmjMdcoXRxCou3xpaVFKpJ3wjuXsZY8cw7N4inb1FtgoQ8SCDiKo",
  "key12": "4DM5s7LcZyaaZ4ZUrZiigEwb7nnih67FG94GQ9q776upZukt6EAWwQN95ysVrntP5zkRNoYKnMV71qGo6LfPAFZu",
  "key13": "2sjUZgWpHJ6MPLMpHrPcquJg1dt58eYSzuAUVmJKTJPrHyxZinTHfsDptjPCH7JdZnG4XJZ7YGFYvbnLYyiuYWyP",
  "key14": "4BpgC7dZGNiteR2GvTkeJynpjXpJemmYmbMd2JGorWPbaxtckwpigRhkKMvA6XTW4ur3AnDbxViCFt8o6QBqdxXB",
  "key15": "4W8fNYnwqEAVcSM186EJqpJ2zNDJqLkbUcbf6PnktcFXxAgZ3YaxKg7jfmbRzGE8tvu6nbJrhvaSUGnwmogZJxTE",
  "key16": "32mVDSXQCuGp8MszDdkSsCsuxNphxTwG3rTYXqaBfgTgUZDcyixNLT3kyr71RbxqPLCbxqVQwsNTr4tb2XvxyCXa",
  "key17": "2yrDspBngXzyCypqvUxoWTQMHJdhkR7HJoYnDwzk5gj7EFhPYT5gJgKZAhbG2G5WuDcUYVNd7GasroyXuRTshNBu",
  "key18": "5T1FdCzbbprj5NbMPJejMEgkRVUx4Weq7mGhb3oF5TufYD9hCxaWJ3X45c2oFW6LGAFVP9GQ8CqPLdya6eBQJxdk",
  "key19": "4d6h1mCYgikMbLRyXYUHUjMfvDYXrLQTijGfH22S45tVomHUj6xNthZ7kVqojs6o7w3CGPLcChtpsjtMx8XKzSeX",
  "key20": "TXXxbiwRySE8CnKPxbX1XSeUVPDHqZFEvBXXo84b3pnG9Psv9PZDWiRtecaVMbDtqwAxtJPxyS4Hx11UAKJicLz",
  "key21": "5QbmuzZsfDCAac1PLwLsi9ePuHAd1TDJkpKrXvhFQC3eD4XEi7YswQb9MpTeHhD6R7istCtLupCe12GRZtw6w65a",
  "key22": "3uKAFUxXKXoQHAFimXf8bKuod5LhoTwtywQ43LtLKJCuWy4xHXNpqT3sAGHUyBGJSHWHvr1n2ZB4FJuSm99eLDyr",
  "key23": "2mcNvb2wD6WTkrbuYw314xQu5zbVspashbEar2bjuzUWpRo7kM4QEVgsyXdWJq9zQqzT7tB62JjTYYPNRi8HUGSJ",
  "key24": "2xc6fxusxJTixWD5FxwVohzveReDosdRRR7gri4aVDveNvjofWHzyxi5f6mPxDbRHJwLYBguaMFNeUHeYfSkg9Dh",
  "key25": "5aZpZrDfwQLi29uUhKoq9cb9zhfvWGJaPBmGWMXtBHPGL78zdn7NfAqrep2FMPPje3pxocN2rFBA1DvuVgqHhy3M",
  "key26": "4GUEcAb24wV9KKYccquKuCG1uwfFeXAPtpxLfug4ns4yzNJvkyKtQa2iMsyVcjDu7av8Rmx5wWUW612zfN2nShiC",
  "key27": "2iiF3xzVUPeEzKj2ooMpaUgNN1yjQN6h18QKtXdjR157RSeTSU2EGiuhekpGcoetg5bgZD8W7hVMhdS5ehMeVvMH",
  "key28": "49zwtYhnp7QW1wa6aeCtdLYkskk5CvDzK5avLpADGpH2YeAb3SsxxGofqJnfL1pQxYUnGWdVVSgziwiSsu59trVr",
  "key29": "4L4VKHe2zzDNBZ7K6EYK1uhLe1guKrvkEM6cHZ62Dv15kdwF58DrtczSs3U2jLT3kpJhUydzYvae2rcnMoUn4aoR",
  "key30": "3B3JvNUkCSB2QDcQEMabZAkx6Stopq12owt7zTVHZkXuFogQMq1JPtYii5PVKpsoQXy4vPiFqP2xhFsW6JXqFBrA",
  "key31": "3yUFPsTJ6YRpAMEWz8tYJz7PfJiwukW4cPErTNGH1Vd4DzapeaE5QgjsPr67mFPThfNfzApjhasBCa4mZWhYEbrj",
  "key32": "ZKbMn4igeQEuQvu1M4vbc3UXfdthzJybpJ1Ky29SpDN2caXrSrenf27rUsrZ6gncSDdxifF4pYAt9s9Kez9nXRs",
  "key33": "CTRiEoWtHvVwcjzD2GxBxQh6M8G67u6qTw4gtmiL2xdGncZMyH3kp37P6BEiiccmU4A5TVsa8H9kmz33aKzgTy6",
  "key34": "4YhQxkknnRM5hFss4Rf6HUWFxK7NUiSLGTQba94mFuzC2ApV23HvQ69s1mXjFZBjyDKDTX9xd1UVksvJyQvqjScT",
  "key35": "ZvgX6upcccgZ2yKrT7Vd17YxfEgHKzgcWDtMcQPHtFZAAkn3VnLQniEi1nmb6DWmaLrL4zfSmS9wKUZJ4SjWcby",
  "key36": "45MtmHXggsJv4yE6inbk9j71aJhVisEwRSqsZqMiwXQZJRta3ws5nfbjD7WHuynK1Tqteadvif7cArtTgTiPvLv9",
  "key37": "59g9rzBg3buTctTVjVpsB1UCcUTRGK1iiy5J1XrwhPxZYoDuzmFj2YhaZApKUFqGh2wPYaMNPGenHEDTY1fV3nTD"
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
