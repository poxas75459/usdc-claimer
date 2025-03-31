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
    "3Sz3HsHxFHpppbgoLi5YvE1jpXx5AgpULFeBYnDLkyQihcmuXZQEdAGZ9SajFkLPPhySiYCG3r8MEc42RoMdebXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xRPsezZumrcZwxWajJEc5mLNguWftxC2cNVShEKCduYxGT42KuvFaxFhjMYhUboL6TihecoJ4yLVgQ5vUdbDJPw",
  "key1": "5j9rKCAe2RuUAWhfn2tVKe6EvoeysNjzrzgFuNwYkrFm6BbrQBnZuLAri7FYS3VpbHrDXxYXDYmhsUR7Z8aB1rVm",
  "key2": "67G6JwYGewSdtFHL1njvfJXcVD1vKgzmpa1CuTKBVAEugS716ZWiL6e2pWibyzNpfFuMji9a7S1kEpWfaJzjdZeb",
  "key3": "3koT4atmaMicaLR7E5yXu6jmmY55zMKxnewrbeLkgvZQAJe1p63AQAGmJ3g1ChjbEHqdEd28k4vbmBSz1MjJxWTp",
  "key4": "65oAXeJzGn3CzYMxxMsp7Xq4gJxVzbzc99x9AYLCqsp9452657t9sDPoDNoX6tzQdwn7zRSvSGYEYmV76V31dfb",
  "key5": "5MyNqVqxCbdv38eYbkpXbpL9ejegwToySAujjwNyNxuXCUmwf3Vsvk3vc4tTrPZxh8nfh3VmJq8czAzdYL7SRnqL",
  "key6": "46mDwyNdKb5HjGB2FMCJaX6v1Cw3Aw3UVmpzdyNv5cVfjTSKdym5cs2atKC6JzWbALuTvKXeT4pYcwcFTiYG4AgB",
  "key7": "4ABgKx9P1t8ynbfTx5K59Z3oMw5jM7bQzq9XidBiu5MtAxxxVDon4oqJUkRCfMpegAW5krwiLfbpqrMjYcP4mLNA",
  "key8": "4Q5DCQUcsZabdPCdZePaTReQydBYYKF4t7sWvrc5vsEMK55wNMcbhaKAe2Pz9CP1AZt454f3Az1RV9CJu6GfxSY",
  "key9": "61jCUUHpNDFug8ybce1rgYTzWvMBdSpKjcWuXKt4FXFhW5aauQcLVAcsx8Rp9R6FD6KThtJYt4AFRbB2kK4yEjB6",
  "key10": "5PZkPoQeEhoiHZaPm9CRwFfdaGKynhiV7hvzZgdtxqDK218zAyRqtrYy9s3EAVi9Vw7FRCMXssJ8tsaLYf3qmDN1",
  "key11": "3Z9g31kE5xmQfTy8RxM5ALrGzfcJz6NA4Q5ZhaPSh1RgKmqisJy8XU8rGUfJoaByJ1cdMAVEXE1pFA4qexxz48nD",
  "key12": "2cZjGiffQsJ8FZYgpUAV6a5mBmqN9yAdRaeAp3sCQBTftjpZYr5hy5oA6FJmNzapZy19YYdK96xYmGVqnVuAV9zL",
  "key13": "4kE1ukkUeKgQEZPh4BUefYQtiYY3LBnjZSVc2x4sENxfyWzeoz1K7RqqrAMZujdgqAAUVLvN6hyWY3pzARJM8MMV",
  "key14": "45R1Sf7b8h4sAx1KnMk8aDmf2Dp4tjmCKeTYghxhH6wXnrtrAZPVdRKeDpEkxFqCAdWnK59uKrgEWtLYEnKi2MBG",
  "key15": "58gASfd3pogxFdT6r1UMu2TqJEHVvEc1xgJcK6HQJzfuL4RAfcLkNM566BJsvD2EWBoFBPWcBsLV8rmUAx2JthBo",
  "key16": "2RE8UV7jusDVxKrWHSL9V7w8GbWi5etPcNU5AHZcSauDGSmrCjgQjMta2eB1fpUTUuQJxFrykBmfVFXdmRtn77tY",
  "key17": "5rQUCjZvaViE1fLCBrNuKq7XgAGono9zyGFBeSi8Muq1wwpU1Bp8q8a6vuPrFwif6DWCs4S5MtamgnbVVitQ3ugj",
  "key18": "5SaNTwVspLxL2azLR8mXnkZ8wo2BM8pi6xTBRK5ywcKy2YDJAaTMynoKi9KPD1bXgL4e6w7MnAHFt8mUbpspm6NK",
  "key19": "4cyxxGPcQXNGQSLTBHShRfF1ha2rEGWYKWuiEFyh4B9bJLL9cTxRmsvuAcJhrmz6DRTxsLzvAQHUbiNw3WYRxqy9",
  "key20": "4NyoYVTTFkuCAQUty9PPwmBwAHx2pQcwTeqeTFaBQjRtiQfMXVcJN7uYbGq7zSecxoYGXQEn3dKLmtXK4TqTi2iE",
  "key21": "2geGQynbyEmDZ5e5RkCoZ4sHSmrkF5Rmu8aw2aLmLMEBBZsvKSPTzM4mX1kafpeDCfV8MYWporeX3igAkdzChsj3",
  "key22": "4ZYUuSPnYvaZn9XkRFijMy5We4NnVJcPi9h6jB1DW45qmfpV87AJdCF4Pz2DeEJ8kEnzMNzdni1j8K6VpuTYhyxK",
  "key23": "2pKqJzZikm2hXqicecrfPs9hpVhbB57WPX1BxgtnYHcGTuskdSicbrDJLv6qRD5vYyDkutBxEhuXiobi8KvuXCti",
  "key24": "3MfjDx3JvAkX9dDob8nk5B54GparY3rQDNjcGhf97Nx7UpNRNhrEjXfW3G5bTLar98Nnh2JWr1QCsfA5xabqspQD",
  "key25": "2JtbP42ywTF6L92on62XNGJqgNMaD6omF28PK2RgPysHHWsWXCDghSCYj5ZNdXfdetwHtv1pGJCoFFtiA3RMg3Cx",
  "key26": "62eFbd4QJ7TMXCVMQ6Nhhr9xVXif3z2RTrshoGNVaEQUKBRiHRW6JMkJU3fpN9DGJzgE7W6dUCedmQWJXGhcqk34",
  "key27": "5RxAiQCkB5NeQPVvhMZFTP82DNXAWwqND2DyoFYzDtG1o9REJiZ6kZG2G6iFEecZ4Hndcjk3AvXVKmuJjnG4BiZf",
  "key28": "5UuXKUuHqkPwqPH9UJT66aKueoBBp4s7GgVaaU46pFAsBucHFutTtXiyHXNPCMsPSL1KYVDtBafhE5masovMHhYN",
  "key29": "3TcsCikWAbigoGSZ3Y4U6ESeM9kdbmYxjgm5ieV29vXNEsGpwLrUH4KYeNMSuoeUUutfr17tMLNQP5nwVv4cMnge",
  "key30": "5YbKubE59cKEV51tjjFpMaUa3YnTXNQTeA65tHM2Fzq221VxK7GJ3GKqAtZETyWY4uq59Q8rivBfKGHM1izdEgGK",
  "key31": "3Pcoq4JAj6TfLaimi7vUctFY62Zf5D7BnWr24Re5LLXkL2wc4sfhsPbis3FKTkRLfvTbqu8KEs7WC9tiS4cCV9fU",
  "key32": "S9C3SQQV1zuMMSFiA2FoxJU9w1L1NWzm8L8Vc9mURaNPzUqcxSYztviHssa8CeQWqEtqaBPouzFPbAV9ByEAjED",
  "key33": "XUvA7MkMyq2KfbbsVzq6jeGNE5gC9gh31sse1igWmDc2UCwd6aXNTdeFGHwdG2QyvLsvgkjhNkGnB1Tdj4JWYF7",
  "key34": "44CyUvHx8pxHcdARa5v99cMLVRMoF9j4ZhPKNoyWE6DhdTvmqRfG5fTiDArZuG44WpA5D4BNwnFpeqo9hnFkiFAF",
  "key35": "52c54ATVZqPVSazuZQQHYPBY37mD1KaX47DvD4S45u1nDfuuajGtuhBnaB9VeRSFkFv3YDS2vQiyKxFbhuZaFZeE"
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
