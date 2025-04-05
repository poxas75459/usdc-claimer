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
    "3xc9Thz9bSnwghZbMcp4DY6fwrT2yBVRmg84j2DeigP8VmvK266CnkXo8BzqrsfBN3fdP4RoEnFqPpE6TwJBdrNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nRZWAz83arXqH7KvDG9CJ9MaVQL3qYrEwmcaKRUWCYqj3fdRE9Xi9eigputxs2KSRtvSB4NCdRUd52AmfPuuYhT",
  "key1": "4k3AKGbmB8iP71fFKHxhTMamcwQXiCsDLLSXox31V9hv29HcnbwahBMdXBskQjujPh8fXkyLtoPReSZRT62Ynft8",
  "key2": "51yph3e9n3k7toN67cafMXyuZTbd7R3hvtPsk1TqJrWzSHwcsw3mmmXi2KzyaS8sQfcfSczCYhprgkDCpyd224tA",
  "key3": "3gtCwsDHtvZ3fU9YW7ZNLn59wM7SZ7CjTiTuywSeVBLfjwsa24BES1faYtwtd26KXoecNU6LzboZX6iBdSJQgBky",
  "key4": "5z975unPUcVL15kyr17UMv4GJ7ndieWbWbS2Bw1j2dAKEFg1U2F2BGcmppsqU1TmHCM8jWNyU3gNY9x5ne8AwAG5",
  "key5": "4ZPxF6pqPDQgy2rUK3tvVFeqk3Emc5K3u2mXexuPYwNHHLhERBuQiWKuawjnoGDhhMMoEPA62NVvF5xUX7r6XZca",
  "key6": "2gYhZGfGCoL9jhMQsViPqZFoa3BD3zfaAGyGfgxTHjKH6hKxC36d54SK4ZYkQ78PaKgcHTnnS2zhkiPjaUCvmNuH",
  "key7": "5z9DqbJCbGfU5Sw2u2i33upRweYy2x2mbfpMYcWWLHbuFodX13eCpZMk1GBUcWVAPdeT5dMfxdd49vCa7MubS5DB",
  "key8": "3imaTF9S7kSZiBU9WNnXrKhS2Q19AJWs2tz5CUXvzMAq1hHVLyxNuAQi3kT1ghwS4swHHJaTj671S1qR83AQngCo",
  "key9": "11FR1Hs2YQ5nsUUEXsFjG6QojWTT9x632BPPX3KxG6TyZXiXrt5GexYVbdpYNYk74DN3gWmNevdDzH44PRSrUHf",
  "key10": "D2m6isvieqkPzqvoUSrqNGLFPq1wpKyLery9H3nRpkvReoAuDwuD4xizKWUBr9m3HiHLseJWPrb6bS5zSAeetSP",
  "key11": "3i7JXg5VyVfsDc5Z5FYmvPQEKrDkgU3QAxLnsc5LY9B2cjQX6kkSiDnwtHRnFfrk51dMv6DDPikwA8NWHrJLtx2F",
  "key12": "3dhjMjhhLhxjxtexoDDXXsoGYJS2ftXEm9JbMiXCt2Z1W529YoSaLbSJ1kzguMDNhUjLciMe2eMd4peAe4DQKze",
  "key13": "2b6ZQ94KdVwwUh7wRPqjeHbwXdkdUqrVH7dZpnTNsBCMZVhqFz3jvB4B9DDozQTyxiyrcJxRY1pKBhU9JdxVqGGk",
  "key14": "3qwCyhFuMoPuBDgk4GDZME5oF68VbdUbB8Q5ZADf7vA9NZmSWZZ3qieXkyPxtWU8ym3SuZbrqAZ5VnUAHzdQ9Fut",
  "key15": "5wBvjXwhWNBQRNBi9mUNatQa2ZzxHLFTU57edmxH1yMPUubyPyYPDnyaLia8bGLGYMES3r3Na53CUT6ohjQAXQwv",
  "key16": "J4LBPiQmney4C7X7wjJQN7QbEnxpwerREHeWu5jHVHz31R4YmPakhbidjmJAE8x6sCGayFHsRFMpLHMHidZxF9P",
  "key17": "4dvRsHvF8ebHXaU8KumtpV2ytNCieYbZEESiKbW5oMPZmW7yC45679Cs2FTn9DVHA7wB5xdqqAtvKDd1pQcCiBP9",
  "key18": "avxm6WTvBce6DAFcLoUwoFfXNp3Rv6o86sLnjNqxnFjZfCiHEPufHFaPnUfptvRp2aKGmQ8t3jr16ukKcbkfy7G",
  "key19": "5paA96Qxp6XinawppY5veUwZPrBLgQKnUkLiSMEAuj667nUEPr3qGeRvXFER8X7fyi8Z2BAk2xcrSwvFNJbC6ut3",
  "key20": "45gsycFVgUE7Pdrfj8Wot1JoSpCXniuGhinKLpg4w2LVxBknWL3r3LvpsKUUNUp9TLVNyCrK9DGF8QECN3TQXjdP",
  "key21": "4Bbbmu6phzBzMgZBjUvn9Nvupg99XjwTiMufWLSfqZWV1QrkctPYYEbwxbMnbzLD1YMVV93pcYoYkGRyjDtBuTzn",
  "key22": "yUHmm3Mh4MWeEyx9Gd7tNQAkHDjhjUX6wwuAvKHeGUzYK9RC6yeypm1zs5U2nWHzUnNfLEAa6rdBB9MuHxteso9",
  "key23": "2CbmoMJ1UF9YpZbZ7b3jresHDPz7Vn11MG7mGpXFmpzhq54Vrd9aq9zwg4tuKVc4XGAddM4vMaTyaiE99QqHpmHu",
  "key24": "4dp7gF3c3adLcZAcxvnXNcG1nASrxuq9RDHqZAGzSas2JuGnXa1KRKTcWDgSAE62syuBvEQzDfLABKzhWR9meF6d",
  "key25": "5JJfu4YFyoxhwRFPJSSHJhCrh6mCHRbfQqqDU1abmgrt4KHZgeuqJsrzWRAtiYjimbYrS395AU69kvihW3iDmYtH",
  "key26": "5FJ91zo2ejY9gFddeGbZdrY6q2JbUYkFWovKhv1tFRJ9FqHWoArZg3r49vBVvshnjZ35xnpg5bAhMNtQtwRujBAa",
  "key27": "qQUv6xkHfawxZ83dXXTpR2gVdg6EHEJWa9D9ebASucpRagEHzTKxV9owkaYWG1mUJLZGgibsiCP8W4Nty5izJS7",
  "key28": "5sbDRLMPrTqAgZhEncJ4DQ9nU1GPKy4gUu45LeNasczbvqbjMkprei2ozePhadVgUV5rku2FxsBFmentXG8kkjxa",
  "key29": "5Dx5W5EgTe5BnitZsZu4FqF2Grs5hUvufHYAQkMDoiqFnZuJPJNHn8WZ3wMSo5FH9DFY2zAJHTqNdsKTXFn2jqKt",
  "key30": "HKeVsDkfr3KzoCSuvb9FxuRr92Q7k4Y1fz1HKfps24jXzT7eHkTEyW4XXUVaZtKYe8CtrKHe8Xj28tC3EdXVgwp",
  "key31": "tdafrEL5ZXFPL1PuXohGCk2WofoCCPFNZHVx5YdEknuUjg84MyjkXjuXaZm8EUqK7J5Z3XJuSkkFbkHt9CuCEKS",
  "key32": "5XP3Xi9aFKide3d7tPEgPqSudADBid4pea6P9JiLgVskBMyLRZSCFJFNczYogLFdicfVGZREGLMFbWBVwxNRNFJL",
  "key33": "5A2YhFY5a9Mv2PD4hZMCvvoU2e9eVxgd4HvjzZTXJUnhN1SSeZf1TXn7NzWQ7yauYbYr2jadD2vezW5nyQ9u4hn2",
  "key34": "JLi49cBap97mRg2cLzFKvbAy4E3aAhFXVSKBZ8rxt4qB7kFBxvkLNEbavJUjd9DQPN9HthbPvtbFd7C7D246yCv",
  "key35": "3F2tKJt9LdDDDiCStHM3hHCeaXRgP4FX7RLbzvEdX5fLUcgiz9qT9XNaFYDG3mYeskXC3Mx3yN6wMmwMjHknJG6h",
  "key36": "62FfNXZikYGoM6aVQ1ztRCKTfBXKYotipb6WVQBCZX5JrjYaZn7z8ex6KNLkownFZ9if6FYYpBBpWSKfGzRYKK77",
  "key37": "4LGqp59zsC8p1D1GrQ89nYRPNP2HjULbGoK9ez6NBBTKiL8noKYjQNtFA9ZFsJr3PnDxX7a7Xp5bmzgsvczCiw2Y",
  "key38": "zzcKDWTEMeBfTkXhMAhHGWFAsZGLGgXgXrCy6itN23ZnZckt1E3fhkLWUrseGcYL4ws4TJW9u6VSrz32HeDgJ25",
  "key39": "3nXoMxU1MoRAQco9PKy4BEgt39T5LKvs7UAeHGa24XiJTWxLGs8Lw9ukq1sPbttnA62ev6hVadYCRjXLs9KJK83u",
  "key40": "3cH5NvmwuoLtSmLx447XeFaNcWUe5UbLAQQtAESYVPmS37ksht7pUDHc8WGaTCXY2hJzh7dX2i7gSF225Qmr697A",
  "key41": "3K9P31w2PUiu3VZC85o6seqqhRimdETQJwSfZChj12pVeJK3xGfm4G4w9WsZCUSBuDMvFXydxcYGhMAVXbypcQV",
  "key42": "3r1Lya4XcLVvj6nThsueTJYXd1AC3MXq8rrJWyMqzNydgWpRo2zLSrxZSwU4UJy5Xezs5vXYn83qipAmi8o5FtsD",
  "key43": "2bMmqXRf6wZ7ZUN8Gae3sVN7UooHuyWd6wdNv5e3CNyKi4QbCXxrg1EWz79gFmTNLjm11kQkkDKwhzb2kYrHekDy"
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
