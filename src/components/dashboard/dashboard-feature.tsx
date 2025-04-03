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
    "5Z1HfsNbzbnvr4jfpYtVyebwHRjkQjZ3kb28McUZmrCSyz37qcZ9khGvjFt3W5vgK72VCrzzDVm1hVdrwNuiCxRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eFjZiAqXYzZx11FxLjpfBkYm78wj4pZXF8hGGA69v2kviLJJ4sx1jy32k6J8hdLb5aX3atWQNMQQS4PZTJEf7fq",
  "key1": "2Sv7SLi9FnzjLuhamePSPjGv4DqNYjwDd7ZisKeEu6K8fT6DrZCLM5S5y7G8WbtDiLr76BFVSsP34ybkBdRiHBX9",
  "key2": "3PQjMFL34LRouwPELpMMmNweJciujDUFcRp2otSohJq8FEHj8g2WJeQ6uEVXXvmoja9NwVd7XwGywUWyfs2fGVd1",
  "key3": "4YfsYn9W2xk5gWGgPfgdq4HcPpJJVSpPRfH8ozSNZqHuC5CvJxRaTpsKXonCSEErEELRnwefbUDcoZ9GRbJ5L3bA",
  "key4": "2Fd55nHKtfGzwu6yvA5jxYTubWRuW9BuZEc8wJ5QB9feVdUEnJgWsUh6wXXVfStUNyzFx3fMHnpdHXihbnE9AhaW",
  "key5": "5xnUWdiRZA55otR1ZQjDqbzg6xvrMjHMumSYHW3He2276Dt1D13eJeqjWjYwbBdnvLSiZaePdX8pC7MScLTGhtrq",
  "key6": "4jiaJaoVUKpPzdtXz7pB13tyYuzoZm45AUVpGE14ig4XKqJSHjZFNXpa5uhTkE1fbvVoTpoKCC7pmtbhSiBHAL8w",
  "key7": "3oWzazoicy9XzHirYsQXWomHDzmJsgVFTheH2cHAT2omXNKwnVgu7KGFAayUptT57DMaMMHLcm4MbcBHnK6L2Ero",
  "key8": "4fzDoEkM5ePmG4G8TrZaE6ZrTGVpvNK5oH8eaCmXDNS4M7TEUm8DnjXE6Ly2UU5DnQ3u3356UsqED2Q6jTD3CxZN",
  "key9": "2SUc3bg4hxyqn8QshiSbhZhT21RJ3dF5raMWYy95B1KLzHECHhxq5cm2bq3ikuGqPfHBBjYi2GQdbwsRZisrHCCo",
  "key10": "3dygACPsuyv2FyoVmSHDktzcPYfdXP1NghpwdLEFHaj1DRHKieGcaLdPpVyhXQztCEvx9BPqLvxr9tmDTDUvfHdr",
  "key11": "5iNLYsZApxTxgJzpztL6EqMmkS7scewqSXCNdqWi1RRoxaPSfZN1qSNy7btDkWJXPTACwWmqcdYVusFmsj6fq8Re",
  "key12": "2CTwPSXDYJnhmgx2NYiFGaYQ4gFSJN7x1R8cMxCp7WGkDDyF9E5hp3isQQ2gmPbo82oUgkzJfG4RVigy572bX1T1",
  "key13": "3jwjNLgyrj1fVzdKiauEAvj9GjAVnaeuH6Am4E2AsNyrhAZrszpBEtg9wpTrVUaWTC8YGAKQheah7F6yEVmXh5x9",
  "key14": "3Tx5kQhNuizLtM1o31RUwyA5b6vH2DnkHRdqobqaGPmgkJnvwtccsXPFUWtg7hr6Qj9AvPLV9QyqvWU5xUx4JLZs",
  "key15": "ZFq2Z2oMehg3NSSdvtNJBCpfTfxkcKDehFHcAXgU2gY9qwe3YMmwbGacTqajBpYC4tVnPguXkdyXuoVE2vGNz5S",
  "key16": "4bZGR55AsQm75JWEGQZvbGDGrQwC42wqU5AaDgjB5wZGJx3m7R66uZT8GRxiwTupSGxv9Yh2S9DoP1ZcRG75G8d5",
  "key17": "wqkP8DG4JiRsfLfddTJCr6GemCwVzu5rzEkb3VKkPgCKsF1Z3XUfJJmHJPfnvpLRcgftH8Ft2spCgz6P7Ws9LHE",
  "key18": "5wGjASMS2xmQNzMzwSnajUwvkjn5NLE9NcAhxPcE6WmArJWvmPZRx9H4y23oZqpfuUdxdAQ2StDiCheTzcJn4qde",
  "key19": "44dM6r57NxdcNKm7Zh9afqmqykwk3pk4rJi6asY8tXqABrxosrW2Eja7Gq1fj5EaEKH4yeCfDGCMhZgEY44wH8gU",
  "key20": "5aETiRgwhQiCjnqSYTvJNTsNcsJjtUsNHQTnTLe3N52AwJXHzXbrbFtmY4xT468Rs8oVjqEv6aruohT4sj4TBE1w",
  "key21": "4ADWoJykFV8BwDKXAA4yUYo87yMxsp4FEdQfEcBAYzRGatzdo6U9aZKDH13f7vr4Xf5xxz7MhTW4dEYRYiCHHWnf",
  "key22": "5amAEpPhvqSF4KyQDiJ5UnC3wRPKT639m1KFAmX4DktQvwHDm6t4iwCGG5PnzSGRW8KSbPAnkgMT27frhexp1XVR",
  "key23": "3mCqK7fEzJFvajYFsCkWZnhkeNdkfdUV6Js39oZnK5rvXkVRvknJmNsFxqptn53tgiReA4PSjetBCMGvcH1BvvvP",
  "key24": "5LNmD95mZGs8k1k1YkRjkkgX5WohNspn2ZNqD89qvbfmdkGs1mWZ7cuN48muXtgqCQPrCJGHvsfoaJimk1ZtnvX8",
  "key25": "vdn4RbYYcCW1BMCUpwqdexCKPvvGAuzf3FWTyY7yLmuQnwXB9nw3aSie8yyHQHFrfZgFfukBsJUXRrJBqe9vwSV",
  "key26": "pusPJx4BRQsE67spPSS5pCCXru12bt6J3GWMVo3SW9AsH5nftYSVfxBc3fJro5WbGh2qZ9XCeRwRQyESQr4aDwz",
  "key27": "5ChzksWjbQEiFeEh8yS7UqoFBatc4fX68kd2Ueg4L5KFJA8XAava8PuZD3MZ1JqFYAStiQyFpETqFY9QZaEuK5Ma",
  "key28": "5iuApRGmm1cqhN4hzVFDVy9RJ7415WxdXBqUKa5qh5kJ6T3MQH1HYEGLZHbwYbjyLXKgtrADLDuBTabrG9kTTnej",
  "key29": "31N7E67DkT8DNhGPpN1uNVTPdj5WJqaUPSbvL87Z8raA1zV9LfbcVarwgodjiZSmYsuSD7GK7mQmxXLNHQkYiz3U",
  "key30": "4aQYzpPAL9QXiX9UE55NoGfuQyLL4a4KY435w1sfSesoyyR95hGsbAX2RK63F4uErgcMNUqYyQLw3gMnZfDWuWm2",
  "key31": "52fpSpPVx62cjNa5vza2vP74vXsFpvqNgqg8qAa5djRq4auYW3fvTAzdmLkhrYa29ZbRnjhSZRRV2u2T4C3puWWn",
  "key32": "3et6pKngTW47PdAumC2eUUAGxHJVbNSSXakSe3GaUK8TDjQvbCMY5iHp6Vya2YS3M6EedsL5BzMW7zkGjMaEfJbJ",
  "key33": "2wmCSwoYuUXCULvKte2ZjeAK4Nj7g2osYpfysPQYhRU1biA139xJwEWyq32Aa7qAS8GfAh9LeaqNJz6hsQcFmAnx",
  "key34": "4XQUtKNj9d5nn17BUeqbJ1NQ2Ymit2y29o7Q3fX6BBm4LqSBmhpp9kPHNFnwv1JyHjuefqkYYjHh1CCbSSonFhsU",
  "key35": "2sKEPiFw3Gzg1zztX9PQpcNCLvzPuoat7GFuSZda2qiZmMcso3kzQ8oct7rLC5EEPSxDk4nfTYBwSFJ9qajMQo4Z",
  "key36": "62xHYZKdm94VyU63cHLHqmxEvCBPdNZp2pZ91C7v1kexpk5PsiUUc5EELy9PPbBskczTsN71wdZwcYbfbYYECubA",
  "key37": "k1S2k5vXFTWkiLH18vD3Fcofaw77fCWjeeunyuxi9XRPT8XPe83RnadFa79LQiJx6PE28phjN4vcxEGEt9J93PT",
  "key38": "2Qt9kAKA4UxbCVeUhzuHjrdRX1q16tE81GDEgrbtGApcZ9vn1ZqimA2qY2SjT8zfGF9nhvScf9VU7bSu4te1x7R6",
  "key39": "29Sn3BsJ4zgT8kMq5dT6DLsDYNXL2KiN76sAooPrsKZTWp5RdDBBYaHqVsWERXBTxM27Uf5GoWJZLs6rGoncRim4",
  "key40": "2UKxSNgBpZMxUdAUmycVJ1HnUHfH9K8ST8oH3ndDxCpjZQpJmuESUdtZA5XnZvVPvcWfzLg1oURfyTg474HJCs8Q",
  "key41": "3PEBPKadEiqbkWG7ZcGG5uevVVdnpk1LNzARN95xhkxekwGufTGWzAhBtnJLreVifLGVutmRQDSGKjJibBrsAkjW",
  "key42": "2JJVwByHdakMrFwkvQkFkPbFAHwKqL2CLNp8hMLKV9kCUJAqW4Ejze8VzH6aM3yhPMAfwE49YvmecjKfkvCztfZX"
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
