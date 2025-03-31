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
    "3zSWmzGE4KVZmbqdjVas6iDzg6UuWprtbp15tLfe98YzLPbSPZ1BQMDHmPHQYk3jWJt7hKhGqMNZxRTWxBt8k5iG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bgp1awtgrjgiqAupANN5Go2ixEJj2K9eBy2NjVvqrzJa8PRh8AuYq1dcPDSCHTkx2NmGznP69p9gbKGNvBjKnR7",
  "key1": "3PR31atNSf1cT15xDEBz9dni7rCXkKyxhrUKwxnn1RTm7WYRWAmScGd1pVMxu5XE1kZdb7dCEF56Ex8cWeTrVP1T",
  "key2": "3DN1r8LaPga24q8qU2vz45nGiZvnaRDbEZsgvVdj6k2aTGN9xBfZYydCVKhEgXzpxopdEFZX9SnpfZTvmRrYt8hv",
  "key3": "FCzEkUoNkTyHebR27rdfgEoUGhQC4JxrjPnyrZFPLT9d9T75nLsm6DRvC73fwzoy5Ad2DQ1mJC51kEFkFbm6YtG",
  "key4": "4GDFt1FF8YPx3ZMWkYXw7CivQ2JYbxjKgiR8QSfNaNJFuyGnmcyWj7zc1bctF1sWaNxVAyoNerqdLFdQnpirGvXa",
  "key5": "2TdeTpkTZGPKnkR6tfkmLdfpv1khTaY3oPhjf3xdkwxaWaN2FkkvGDWzFFidigUedpZX4TrS67JhHJBdNgUNJX1D",
  "key6": "21dWoK2ba71zczNzJtuuhE39cLqXNoEJL9ywShPNG4gJPAZsLL7WyT94iayevkNXuEAkeEVCTTUqZ6vAA8NuZ7KJ",
  "key7": "3yAmXwdA1VB6qVTQvS2PzSDT7nbxpjtuoxz4M6LLHhKWXJx6QCccZ9LKrd58zem91qXDFwMeQSPuR5KHjbaVDKMY",
  "key8": "38o2xtPNMg9bUvDDG6BocLLRx3zY6pAByrUTbkDWvwtQm31p57oHvcvgj2XpEN7L3aj1hUua599hKzKripcFRogB",
  "key9": "53cLcCsrfo69dePUqJTYdTwWX3veZen12cRWdkmtxUZQTnvDBdGS4A2uon8R4AXYcrgW6iuP5Mxm9vJuygNRLzjd",
  "key10": "WdrgBZrkngcFAgbKjzzt82gnDA9n9gcTivPvP9PERwDB3Gs5fmE8W9CsSEiBYhBHxceJ4E3VeE95ptVXy8eRfJW",
  "key11": "66X8aLUHyDjWo9gF58Z4Vj2eE6JTvofAXuKynHhSdTbvmuTSNgZaeojVLmxdPXrLEYm88eRk23tUwkD9G1A2UDAm",
  "key12": "4VW5GLmdgycszVin4JZMQ6bLXr5fLdvrBjCrs8StLm4i7b8KNLth1rnenLJMxYsZrK8supABsqw1GNrCMoesxTc7",
  "key13": "513FUzkZFLrWkQLbkBo8w4mKax3dNnQfkjJUTiWsURhvYYaZMMrn6tJXAhfn18LbHNPC56R22obq5ghk9Pwie5Wk",
  "key14": "5fQEsQzpi4GXeU1zSz92M9A2BC8oZMvFB1WvDpvuFp9H99EeqKnXdqkwh1Z7rH36beu5rxyqrX6tjNPKMAmCyBMP",
  "key15": "3492QDaGU9fDYh5yKvehDsGqmjgzd2vm5kUSbw5VAHM5bHEAJdD61nzVyxTMeDZJa3W7vdHB4PuGpE285jxZHH4m",
  "key16": "4Puj6rbzod7AJbxnkRLFcAEWYiJLhNWWLb6yijvMP3MiJ1WngoTJ516UqfNXYoMdDiPoAfhwGAoNEFd53VAuKv4P",
  "key17": "4aNfYJqdrWNyti2qiv5qXe4UTWaRr2fmkkqB4XH1K48wKk7QB951kj68SVrc13L3aH41PBoQhfDZQiZKW5HbGe3B",
  "key18": "4ZAkzz69xFWMBLfQELEUCdWEXrhpyDU1M94Qw87UvAgqmHMCNc8X78yze9GZ1ANF8uT2xzRwQA5tocT2m9Gk3DLX",
  "key19": "4S2MbQCHzWNEVVhREKWuzrf11oaZhzZfEj5nPaV312kpYwzHjneEMKwid5McTiLnVSvn2Hg1K4BQRTDs8bUizH21",
  "key20": "EbSn2432WjyHpf1QTjssszSvsdvy4P4GYg5VbRjk1CYfVwbuQzBBSTQVMScxYiWN1siTrANAVgk9hAgenq5zTpM",
  "key21": "5jJoF5hnDomYgmsvjin92G1Zy9dNQLBkr3G7ZL96JbUfdpLzQTcrxPxUzyMh4v6BJD6n1koZo5r53crBmabQ7gG5",
  "key22": "2njiEUvy9uf1DyP5QLsmc4UJG5ukPXyc5LsEvcuUSH8scppDarKgZGFJdYRtSheZ8QzpRvq99uLHqNrBwTFZqmCu",
  "key23": "41xXmtcainb7TPK5QrAYenYkcorhFjSotUq9KPiwmYnEq8J6pFboy4PqAhL2eFPMKXdnbgu4oR9y6sQqQjVgfS4S",
  "key24": "27nY6EuURmoasEowcKSLFSMPrDJcEzpZAKn2pgFg7Zk8wZjT7vaoRiP4pNUDuWnM8VCDUegdJsWzbhWzPrm873or",
  "key25": "2BmnbvjMPYQjCy6NMDZDnsv3haEzGpVCpgQosQVD7LfFRa4oPjqhm33peSxuHhbt9zkWoSPkKCyyxMYTnoLKJY4T",
  "key26": "2eQYr2MCyiAodZtcwgw47rUTt9ee4LDPTS8MZdnSLfkcy11PxL4A27M1jPtUEa8gYeuhDKf6gjPRASqGZdEk3oeT",
  "key27": "3CUg3CSAgtowCmj7H8oWVXWtstTY8sBxwaHEBaQTcJB1Rwxo2endZ2YTuYFdca5j1fqhM9cQiRfkkWrzgrsw8EmM",
  "key28": "5LBpWSs5GnbjJMMTGY3jV1bzhK84HRjwd1oqCH2H4wn1vCrFbo2qJcGB1RDtWVKBHJXWs9Wme3YvsYNEYSAoPomX",
  "key29": "4p9aTqcwjWYSog41sq9SF7djZdNQNNqaCGHJ9hQDkyEeH2bZ5wW22fuLwQchDfxkwM8TPzkHxTbgUKfD2gLMXC8V",
  "key30": "4mPonH1KK5DpNQBQwUiU1GRfSA5qaA1VisZ4wc7xTp8bjJ2BbQuLyyu8UuEPupUUjG1Gci4jf7NrySv5HMRJ25fC",
  "key31": "5s27qUmKH1FeYQs72QbWYYei3EBA3kZHBmEFivS2BkjggvKTgPtLEEYFmNtRQGLcg1Cqahu73X2cgyYxNGg8HTbF",
  "key32": "57SDwvc9dDmG9e32idVHK3suVfv22ibgeKCSBWb6H9CKU2ELa1bhmEcN7tVQe99yaRAp1A5gnV1oB6Kbik1VNSnJ",
  "key33": "ENYRG8mde7p4r3rpMVUXPDgbf4BprYxLsh5Wjy5sL7JqNz5tD453VxAmJ5NFMgXZzS4udZLGexDouhu6unLEFpM",
  "key34": "3bueXz9G1Aqas4FM8b37SHF6d9FUX3GBey9zU8GFvUqU5egnnKD8G3XiAkoCdejt6ur39xQiZg68cVbwA1YumfnJ",
  "key35": "4htKeDu4FdoLzTtwZUsz2CmP73yXAMSasybinpP2sbWKeKhnK4KeaWEBZtMyZJNvK5ixR1RVk6MjZCHXXq6bt7zg",
  "key36": "4YNjMZfK384EEMoiiFW9nNccHt3bTZQ214fNkPMGouM5t2kRN4hYMptDL5s6Px7Tw8PQMX5xsh1kBjD4Xj8mLkZP",
  "key37": "4AcYzuzNXWhDhR2WDRx7sBMPVbZsW3T2qL4jKzfpZG56Ns2H2ghtUkhMKrLJoK96LoQwASMqNDd8ECJKu5DkA45J",
  "key38": "3uWT5C1N6LVdRVjvKiNdymyLgZHo3XJVPchvpRwzNSjropT2dbuiWCV7NiTM3ksan9Ev6xR22S2W4imrJyMvVDbo",
  "key39": "qAgyQq9Q3WH5axrCvoXjqQnpWCwYUzKobdw34hzX9pRENsQ6NJjGHE65fZaQXGUu4iWuYwJKd1USbrFquCLpPaV"
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
