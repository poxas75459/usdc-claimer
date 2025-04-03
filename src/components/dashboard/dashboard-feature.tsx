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
    "2zEcFZd1bv4Wb3xzUZg5jmhAVJnA63RBrKf9wCxEitWWdHdjt89mLx3XAdL6Y8RFrz85ofZv7tSVjyE5DvNcpnHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Da2RT1HEiCtoKga45vJC1tFbpmcS7pP98fYFhrp42aQ7jMgjaKHZhtxJFMqQGjHTFMEWjXgzCRHPtyecPvjPcrW",
  "key1": "52Xz88Xz5gFs5E5b8xU1mC774uci78umHTJNjDdTRH7ZexJn1RTHwnHPbcA5moLkMex6uTuYVGJ6FbVz79VNNZ9M",
  "key2": "3FAKo8jb5sUwPSsuc5PPS2MxwLYp1rTMmxUkDRpVyqv7JzQ9RsX5jefjvWxMXNZ6LuMoPLJduZKHfqZnPFcfURxq",
  "key3": "53Eymv7GRfiWr32RhprrmRk1a352VRuMTCgD8fjCRMzCH6EVvCLX4wnX2fqTZCezscFnqusCo1Sa7xVLgJmA962f",
  "key4": "5nhYrYefcxANciExuSFiKUAczrCrmVoYnnf2qK1GW3HRGdRt3zNUViebEEDmcne2WfScFv5rPY7kFiqcUxFBKanY",
  "key5": "4gY2FN1zNyL1gXRCJt8Mzq4ufUz7nj3AG6dNSdgiZLF8GcWdJKMyjWpkzVXwVfoC1c6KEzWsq56na9XqVsZvSKMM",
  "key6": "4Wkt1HBjHNodWSVk4JFLyq25RZcBtukQkCQWcSKLu1Pk9LyqWnX7fZPoBMgXyoxhXkuWJE6mtGnxd61oh2qFyDka",
  "key7": "39nwHQVRxN2Hme1jzuPmfyu3VwWwQDxvk7macY4AGgra5Gt5NaqmPuRnjrFsi8WAA8w1uE5g7MMK2nH9A9KRK6ay",
  "key8": "2rVDowdAdzoac2CGSJh25bPDKGxRwZRxNQDz9mBa4rDbi7Uk5o5cKxAEpyqYGk7NpkJ2MsrcDrErEWfXcEYuJAiC",
  "key9": "4dHAnUvTeNsCHhWcfXxeAAY9voxT26UjurWmMc2epVYZGEK7Cc9acHmAdwwGAqWPBHNjLrGrfNgR7xZvX1wSVUv3",
  "key10": "QGBxYMxcrcxJDSPu8PsRCVmTbzwFk3g43Lk8cPERfebT8HdLmX2zrP7Bw7W1UTuSJjxjBi5ZiM6ChXArY7AfvJq",
  "key11": "2NYJ1Vnmjj7LJjYdPLEETd9zs6c8FUMjPSriuiJLZcxta1oYSALrc43wG8QdXxAC3Rzdy1mR5k9K19HyfbPizACo",
  "key12": "4cVeH6vg4QMq28uzWRvAmTV96r8c5QDNDVdzkvxbYZKETotBepeKH6A32VtSn515Ad6o63UQ1W8hADpUaBhcH2hY",
  "key13": "3xsA7TEWQRqH1eYYiQd1ZjByttpaZftmnV29isQPe517SLmHBf3cgLdB4LUK7VRW6WXSKntj8MBJXwHWYCAbawty",
  "key14": "3YBqVun7HSfZ2KUWXeQf8rLuSeRALmAscgQok6dN4wgp4r2tb8PoZwZu8GyoiYjtDU7CcVUTfuMhFzkExADS5rpS",
  "key15": "g9djmLRponAJfg58dmKoQAbntfrmrtfUTLYZNDJvqTqGUdToeRftzUCxbe71vtys2UDEF9gycAWCJuT3pJThR7r",
  "key16": "5PupauGnKTks9p72rkuTgFFqoshQH93smgAdzfspUZacJa4epAaeAdsLDYRDCqiP75ZEQpu1joMHW5AhxC83DAhE",
  "key17": "TayFeec9DgJ5B1bTiMMY2CoRPA3KBkg1aAwGgxAjBmHbid462xEdYrWHECBQiLtcTTdsZ5mJqPf46xhTRQb5u8y",
  "key18": "5pdwndVGXhYr9YcLMeGCFwjo1XadsDSD6H8BAuVX7z9PipKzEb4YAkK2t28FEQAVPhbSWisJxhstw34UTGJmi9i8",
  "key19": "URP968StfW3srN8AbMSYB3hZJDHKkQ6wy98a6s8CdJYy2doJxL7Bkej4pwNyjPd9mVNoo28RkMWyAMUXuwKxbmQ",
  "key20": "3QcgfLrJ5qVJnB5XsfvgbhJukxwai5CKiVsK9pDs6PiE3wtgvuGtuH6pNP18zD76tkHuk9ER42dZr1w9gyzgZ7TV",
  "key21": "C8uPN7uPeoB8GVoo33s8yKVH3BKRHNKWT8BNguiPTsyidmxntEWx8qxbPW9D5HH4fzaV9iRzHEji9ieWdKezGpd",
  "key22": "5xKAKdxmmgQnja3Fhu9wjGQENvaDgZGBnqSe3qkjKC2opD9wF2KcSqBS2dn892NRpAvfNM2tVUu9VCXevKk75igF",
  "key23": "3Bo6iq3qt4QosNTSR9RSVkzYf3D4BQGgkyaGZqmSRg5wEtCpr94vP3stQrqbj2Xez1wEbsmoVeJueuLFvqpQtULC",
  "key24": "B8aQXamdRXLJ5truPPkmMzwSsqy8eRGGhZ3WNCa1fQ2kT1g9YLxAhGV88oTEhbT8jotXJaBsk6YPQdYtjLHTgtK",
  "key25": "2uCz9oxnY27o1Eqmgst7Z1vzVih91gEixZ492i2Mb424PfZYFqQjsTmAKbv85qs89ubnohivEj1vercP9CXFnWK9",
  "key26": "5U4B2Q3T5JyLiMsScVnUPbQLPDmrBeDHUiaxvv6TkwiqeRiErG4b2LP5SRtB77bixEjEPMzvq8cikV1VHBPy2mS",
  "key27": "66pDUHariKorxA77QUMMJwGfTSYaHEUfa2m8msiUN4ikSnvH1ytjQ89WpvtCuYQyEpJAcdJoixE3gUT6S2w537Sz",
  "key28": "5uz1zy3gbJrNbWNLicJNdw9t6yPiCs4GCvw8PwyMzRxUnmVasRKhyAJ654cBn23EDaxfctvpbfDh1sYeLREGiuFH",
  "key29": "2gPov3DzFUWYs2mxS3yVaq6rNc4dZ81L9xCAcqNBPcbVuxiikkGv445KzdAX47RkCBSx4pyt4dQXSVjxRUV5w1ni",
  "key30": "3uAupmCRJV3duPoxMtxE5Mq568ZNpfZFKXJDKwmojJN5R76gvjpNsgZcHvGnGbFX4Gu1won9CaPpZK6MkpXjhpbM",
  "key31": "3dGM7cDJ6wwv89EeRQw3WJLvxQrEECuPa1QcY4RFoEKrmSHwiewkKe9EZPYw13Y8ZmMqfNc8d1jhRTSscCQxm5ij",
  "key32": "5uhFktF8nHLaLLAPmtyfNUtFgj5VojgXhwgKtvyqCpcupSGeixFFj3fjTaWDbUxT2y7FUChtTbswXEeUoFCjfwwu",
  "key33": "5yZjHPrW9jFvGDA7VBVCqFXaWVL3usqWbuNwzcDCiY9EJPNYb11oqnCb7eAbcxZNRZfRvPGnZPAPS9Pu627hZdNS",
  "key34": "4ZtUoGi5u8Y6r4BonLFHYgDE2umjqM8suQPm9EFfFWzZzuY1qnHRAp3PXSTomDNSPHVTjXjRD6vQA1mBsZFWNPTj",
  "key35": "4X1bibAQmEKzYqMskBipFFZeT12SRu6gFxuGWb39g8WQeoXNubt7iYSnsgCNJEguPDfhzDMq2UTknSD9QmxPsxU8",
  "key36": "47K61zwKPib2R5FS7LR17uS5mT5Z5tevQExpXj2BBo6vXB4vg9rHEZuaujq5aHdPUL7CPrDDW142FDSonXN6v7en",
  "key37": "o3bwKENhw3d8jLFTNKx6WpAYWng57xoEsDchXsFV7Y54pmaxEe1LteGaXsbm6yv8hM3J5QA6ynETeHxtcE775Ca",
  "key38": "4phgkAjJ1asnwe5Ko5jP5PyigyE6Tkk7kebNCiHpfBbJCPgZYxcSQKM7aTnHFud198CBPSee8zr1TeaNS87FjnaG",
  "key39": "2XrA4ynrhPc5t5FKPDfmEg7bnPBpS579qCAEMwmfZ9UWkKvFiPUDaWb3hhDGKK8rjLN5CBNabKf94XtuhpSt9Syj",
  "key40": "afuCQHGdZ1C37pmyzy8Yc5ib1UKmbVFNJFyMr5FxpDpfWsYDCoikDbkMF2XdB4K7Rc86RoPJyWHyw362ap72nVK",
  "key41": "5Dzjdn98PDZ8X58DzM6YYJCXMNt7NEGp8LmEPdJ3zsz66KeZZ9UMWhT68BSGE2ZBc7BL4nQx6ian1qeoxWJom9HD",
  "key42": "3mXTakqdcNgHSGz5e1ZGW7iKguw7vsdEkxsLCCdk4E6eZ8C7gcN2s5ZBC6ZYsu7CPP1AwVdRMXBxp5WwhAozDfte",
  "key43": "5bYMu3oY9H7uPmNp5EwrGcaSmXuNBY2qM7TTUV6wmWjur5wDgetJfpCNtG4LqvNZZcqZ1muKGzr8CWbxYumxNbnc",
  "key44": "45SH8Y5chq5SANgDjP6L81m9mw7rvx9sJrHUee8iGsbGib1W7asHx53uneKZ2ijBrhRycAhRUnpJgS2bRVsyGgt5",
  "key45": "VMsKEbP63eVnZoNgfnyNVaCWkXwcHnNhxPVur41Vm3t8TrLg5NwQ7TvEfWwmyW84niyJR6wb2gFshRwyQivwvG5"
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
