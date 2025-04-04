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
    "2zNqG9Uif2vam9Yu9dTwejc1VRtGHnZkffYMTkgGFTwhPGkCtWBC8Ky1nRf2EGpMiumDLcu7ezFJUpRpEjTSLu2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pzbu33spLnecGAPQwaMbD2Mk1myj45sQGrtv15Vdx7m9ctWrNTSETkFqqjHeztQDnm1HEGfkkcHenaHLrM3xXZb",
  "key1": "6dwvyBhLLT9GsishE74Jd6FiTGViCJwYf7xdcqXJ3md69A5m4RmsDQKcetGKkGaj4HpbrFZNsQiLArsBKzCANF6",
  "key2": "mUMjRqC3zZDDDUFUa3yV7wxb3NqHBSX7R6mnJjaSTq4y3rdNhNuaqPvxxb9taikBcm6M1Bzj8wQpVAUVKyTTQbd",
  "key3": "3bLXNhkjgK3o8yzAPdfddyy9UsH5iDFA8i9kZjkpqmVLb6iJ2KV69LyD6wVmDBUeUPPBFCmVqjjfPL6ZsrsAfMKL",
  "key4": "2kwRndS8t6y3hJt4mnJ24yNTCyWMETRLj6hTjfngskfyiKkEkYWNhDg383hzBDBkwDSqnrR94Gqg9zEUcpXybD91",
  "key5": "2VEz8jrhpf7cA5CGamvjh7S5EtUhNh3oGyoEpmmcXMUSXeFNjX5QF87h7oSZvh4yHgs3qdtu1TH1uex5WE31eK29",
  "key6": "2jhaVhVwSpUxzHyGJknqT8hdKhaj45ucuathDStM4mkZt917yERgGWJGGqrTf6ZxYwxyvBLLXnbrngnCegTjbXsZ",
  "key7": "3C2cZ11xDXKzhr1fEPjd18TbBTeBN5ja6Qe1VX7DDiHwQAGY8JHyFrWP3TEaz2upBHoZ5WhmXD1W3pLWPVc7C6ZR",
  "key8": "21GAXdeNgmNQpNat1ir2XEPXxHPCchFdwXeUjxfDKxNN1Lj5PtUqnPMJNN2x5Kc7QVkPwnHc6dAQRfjdQsvYVraF",
  "key9": "4BGFFnGoEV6ufRLNS3C6HLGW6aePvdFMzf7YetbhZfgTcASEdeZXHHvCtTGrwvYgm2qw43D5WkwcwTofntEpbGzX",
  "key10": "3x3wPb6TAfwxnbVXmY5mGpKr4RvHAaxpsrbaynyynHozo3huLeusSv1eMpfbXLboe3qWDJBCkXHKP1mBNqhaq539",
  "key11": "2HZu7MCoaGqWVLtfGJp9RAYNAVHAvzWJZtueE7anbitXMtCLeuz1WrgKZTGMAyiZp8vtmXqvcGVoajATyuGkh31w",
  "key12": "x7XPfYAk2ebpoNV9Y5rvyZ8qMmtP4T4zJ3qbBUQfW3XxseU3op5CoJBcZLCtRwmwQvASZerei53GqSWR9USB4Tt",
  "key13": "3sPZfTSNLcGSua7ge6ywo2JttZFHZTMXmsVLA6XuUx5XtxGsTRXqpMA14LaHCuAd78yxE2RHMt3Jo1aWRXgn25Yh",
  "key14": "cgHXbH1X2eABx4gPGTDLoGsPYfoawJZYCLUpVGjuRB44BLFaEyXyos9AEULYmXv9s64WsUg23AJtnQcn4isT67j",
  "key15": "4ykzg7SqqgUKofTXy1j8P7AZCFYsBRvfBJ124FJwAidMpWUgPtDBXWzr6Dt1r35wxRG8hx2wkXKYTCbqimJxFno1",
  "key16": "3qhap47c43VhgWnpXaHhMopVdhcYMeiwhjJkfBWjXpbbRjURBCrTdRsP2B7FVH8Y6muaUMeB6AuWXfYEJrutGaYa",
  "key17": "5Pgwyf6E9x1byrJpd8De9onkHAbJeCjecxMGUb6rhYj6gHAqCP69U1CKpNjcKDXhaxFz9KMbzx5QEUaUpZ3a1p2M",
  "key18": "49e3Uq4vBaZyFt7uCBcmVqcrKAg7xo9eG93Yj2tHpWh4sxgDBSNC9zcG5Y6dPcovQP77cWZbJrNr5Q1GEQJfDGJt",
  "key19": "Zmr3mrgJ2TVXyMda9bVJ4CdsALLCPgap72zCuiiRFFZ6n3Aa5wFujB1xtkaFNsr3utDnypq2rTbDUKCzD7JrCKx",
  "key20": "3cobUSgRLbzWW2oWoWs9ULAjNNJktbAXmRdMhxkJoiZVtVEdqDaxcXAV7WYGvN4QwXX1MVjECZxLkVuSmZ6xGu74",
  "key21": "3pygxpoRQXiWnmU6VVMLKWS1oh6ZPxsd56zv8Tt9MVwi6fKFxwFcPDgUzdbxrJVcsjZ2AVxgBJtsQ3xt7WsUAQ22",
  "key22": "4tRuaYpmBy3LqGjFNPSMupFhLkWz4CnTzh6nST4LrtezJQeMBaAkaviVMXncWssAF4YTVPDK8X2FxqgJmfWKpjSu",
  "key23": "LRygYak4zasFX5NCE4zon44fPyDBJ5mDhCmhWGo6PEmo32ZRB8pVtxrPT54R8A31eGEbNroUcatnJrHNU2BuK5u",
  "key24": "5j499ns9HeARGaxWVqRWtuzn2wjo69Y2umbrEjoNwNXMQUQcB94bW2H7tvX97Xz4cWAWrWKAK2K4Po9YPCBXHhht",
  "key25": "5oSATwB7ZUk6owiFQx5JphHoMWA3nb6GRUNxdMRGviJi6hdfv7Sz98tfUBPzdFKhUnsVQrSZSpRcPDRkEZHTtyAH",
  "key26": "2Ezcq1fMQyaqQm7ZAzrN7w1a4wt2gZqkwC3ER4GfAShBHTZFXJPN6Sjv3uPxe3W1UHj6eznVc2dzCPqk5rJqK58e",
  "key27": "4jDeK9oCJtpzjJRPPoxcPWTGL1ZnP7GJ44XZY7GvtiYkxsjPTVwd7Vjwi8sAyB26kksRVKM3HmwH9ihd6YZ2J7HY",
  "key28": "5V6vumEGg5z5aPpWAhnZoxGm7LsjvV2o93sxVCtm6jk279ownAFqqHaGrus9wNC7rFYeCeSvVu6E6VMUbExu549g",
  "key29": "1CzP5JdhG6nEhRuiTu2GQszCZDN9hqREXLY1oDTe5pHhSjrqoeMRm6NqajwFKyvqN5wvEqhnL7DXPAD9NvBHSAB",
  "key30": "3EX2L3zjW5hFXr1M246kU7VwRWmeX9WWVAZaXWVD59tUfpvKwM8zeM6yHZibYfarkywX6ncgXB1kzCYerHeMpVUm",
  "key31": "33pZB7LGhnXJsgZ776LLj9sCrYY42Yrm2jnTCg5TikN6V6dbuxt2DTYuFxL5rJM2gTgjXZ8s85MUuyt5nX2U27Pw",
  "key32": "5a2zefPRyGguopU6xRbRXSH5qH3MZ53393SvHtditw2qgoYrUcRRT2bcZ3DSsJqqNFEkRBqmV63vaTkUs87e8Cjh",
  "key33": "2Uk5DcCwJZrnRLawYX38nX8BPVViEEptodGBqRK1ACd7PBo2Mrfeans6BUWp8PEhgua5bJnAcLzEXuxw7o3k8Eb3",
  "key34": "4mCZ2GD2YypJZqych5LwhVVHpn5ghd9EwuRpLLktkQKZUEmjzDKw2LgcP6myUuSDhgXSGT1zjVrpcPBfhpjspnLW",
  "key35": "5H7JxRVFuW6oEh4UzcwigpiPe7qUJnUi9vqZTTYHHqnjmod4MvBxLzqPCYhfK5KX4jMbrkL4TP8RPwLtBMu1dG5U",
  "key36": "2cSg4iXz2GpfLkHTw1UR38PhMkMTQuh3qS5MCJoTJBK59UBaDzxyvYoCXYMHJcQHQYaAHU5x4YdpTgiMqAAws3HJ",
  "key37": "kWEoXTWAKCVA345hMTeSE6eszk6YSGs5Cm7iTSWxHTK91CRk85WNx5MNMUmiy3xo6662tLyQo5aXoB2EEf23rMB",
  "key38": "CF3uPp8jRAxthcfMZhvoYQ2YUgLGBVYfq5zhQFXeuSvj2fhdzA2dPtiH2iCmNT2H5QgBkf4HfUy36ymq4jzeWmh"
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
