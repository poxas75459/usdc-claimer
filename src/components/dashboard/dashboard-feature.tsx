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
    "38ETBtAepLGNwwZew3BhkL8ea2J57KSbUMDaKoHyp842Vxj9Jh16PakK4xsydXNQUXcw3mWnP1sfE6XWixtaLa4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ihF8VUDaRcAUbYK1ioMFfiW64asUBnVRZwBpuxFpqL58Q36WgXGbrRAZiP2gfTSuGZTBt1UnvfJjy4uYwQwJtvE",
  "key1": "czcBXBgYfWkRtXo9smw5R6J7FGpVVDjuRpzU4Viaomq7nm9KAzV7W7dSLFxfXRKu9RRjJUFFtBuFqinXTR2RcN1",
  "key2": "CeRCN4qdeCqkksVVWp1gb5LQJGwnCPA4rwWk2J3hbogLR9gEAnt4SxZqsqW5K3UJ5MVQTZ5Rs8LXntVU2KyFRKA",
  "key3": "3h1NC4ViJ2migGrAWTU4rGjAnuamVLF3s1CaS9KX9c3ku7MQ6G7dsjYJPfz7pPKDNAA43EaCrXidmwTvzfWT8UA2",
  "key4": "5QuouVNU4HBK1mGRLxVsUYt1xYU8gFZTMkATvBydGCXSQJbQCpyyMs2frsphajeMskjbk6hqRKnAP6K3Y8praDXZ",
  "key5": "3ByCMwSP3jUagY2jCiKpcfL5EXm8PRWgJEqvnQzfWirFzsMR2oXHQi5726kLVsaPrcFBU3yQr8phNN9HmF4Bt25K",
  "key6": "5bkRx2Mcm9Uc9G5y3CqA24TBYLodS59pQC3CFUVsRCVsjg1YtYXM6Ce8dUP6dEoRUYebhpfqesqC3v91LzJGxsPz",
  "key7": "5JraFjSCXVPbzN9ueY9229dYwwBTTveHWipUwW4Pug4TBp5n1ZbrBRvdcVXBReP8Vq4ew8C35RhkrKUhKDXTb57g",
  "key8": "3AcRR9i7ZiUXsmF2aqKCGSRUaXuaszWWrf3YaNsVNBzpCHqS4FReywbSDJ84c7zy8ZpTCwsswE4rCrDZgKa51YS1",
  "key9": "2YNVbPJTu34Lxd61pFbj4yLYMwdAqrGLa9asKG8c6DV7yPEv3fffvFMgPsnJWewFZL3U69PvP6XkvfsNyiZV2k2",
  "key10": "39MGuc4ErYcdGKBBXu8jBr3CfMTPzGcY8FgYMcMhRMp3J1xDd4nFzvpKWRR2Lh1j1PCGvQWWydiTh1byvtFTxkJF",
  "key11": "3TeixKcsjexU4kDTdYjrc4r1CBDRsfsi9HyvaPqfmqJ3SMoBUKFrBhRJazorHBxoqejoNDgSn5a6zswSrkzC9hiM",
  "key12": "3UEfAVjys3D2WwX1VdHB1DhcaEPEzigtNHCqJAWeWF6pzDWsVhB58JjVrcv6cNMebL8B4kt4Y443XHvAFmcHt3Nf",
  "key13": "5oSzgfR5FJqrTKRKpjAhAgqBq4kFjBRNouCKRbSF7FX6u4xrdBfZKhTM8SFBVcTDxeM4KSdFBTKjcL4wkZ6LkajE",
  "key14": "vvTzXcnDwyBjoYA4A24omVJYoKxg5LxKFrQgA9vZEG3WQXgza5P9v6VkNCEkGoEi3Q9PErjkpJh2gTpErtDevqN",
  "key15": "5yi84cFfzxNpFMZR3mQDx3NxPc8ULx51mmQXfakGT7GAWr1XJSJe7Hp4Rp91cJdS2zQ7gkMjgqznBYC6MZD43Scv",
  "key16": "4bW8Zw2e536uvh5JbrhfsW9u3LbN68uTTry1Qou7vR1MgKDHCoatZSLEU4KNDaDZBMbo2gpKmTcNHs9JJoJLv1hj",
  "key17": "3kCLC11Nibtpgno6mLtw3jTjFFyCC7jXdXAdZ7TgtAQPt8iUADX7z31Z5iUmu7K9LsPX2hpga3BCNSPSwDjW8g4W",
  "key18": "4G2E4T3TxEg8pcC6iQgAHJLaadptbcPD8uX7P3USV6nvHMU9tKXSm7kCPYzFRw5rztbDV8vPCujzc57rGgZyxntS",
  "key19": "3DdHzwbphS53ENJLhREb8vrbptJGuK89rPCJpeXGJf4hAD4Z8YBBsWqdjJXWcYpfsL8TkZPMCe53ZYjd99tutEUU",
  "key20": "zdkKtYoQcCv32RYzPSUtpGiXAPcjVcF1EtyGHYtkuvNy6y1WHT3juPnkZ4xupWcTcFaVJaZKZu25d5poLqyBPNR",
  "key21": "RGsWcz71x2piiKut8HKcg2wmN8qoYDxszZ2SjqPwVVr3Myt9cGPUb5pR9vTwMa7BWm6PiYFJd9gmETGxHvrtgMp",
  "key22": "55xxQmkzgSBRCnV8oy65GRg18gQNMDhXFTu14BD4GyDQQ1gNZWnCcCZNPUxUrJEoV5S9WbTF3vTHQhnemoz159eU",
  "key23": "5munr9zfUWhbsinZCm9NiK9eRhiDVJfyyHSS2dYSVAs8mbsXEbZELhL1KTYEmkFSmitDkRSzBJ5g1S34Estmzq6q",
  "key24": "2nXUZcd6WhmzAgKGEmkABdfA1SxC5AQ255MHWqhHzxb5185TibAoFtno29PLE6TKrmCz3Vu2JzGAfrfVBX8aYECc",
  "key25": "61GffVW7XJpi271kdLssH9MFQh3aw1ML7d2HS64tKFCoVFLuhjgUecYQCjUDwoCfkuk3jQa7kjLWvJjYSS3NSJcq",
  "key26": "3T1wNcer5tuTEBPpNszJULH1Tr6XPebfoUx8wFAFWC9FYrvJw1qMkM3ixZCwoXEtzvr3tbBKxCefyfDcbcEDCQXV",
  "key27": "3okPW895bz9MrAtBFRjHkjqWEVJm4YgLGSt8VYKzbtSdBvU7nu9bWeFMtkefKyW1tn6voTHiE6a74Ezk8iACjZt3",
  "key28": "4hmvmz8wvC9rgeviERRPUg7En6H8iaDJLRkb73urbMZH5bmBwtZqpV19dChZqM27T8aNjvSSfixkgZXiQPrMu8he",
  "key29": "3Yp5ZxcbWy6JbS5BrnzBp2Zcwx1X2EzTP2a8WnzpNqSVmF6YgtCWHpmXWX6ytKyfE9BEFnYoLwAKRjujkA2xUzjS",
  "key30": "3ajUiL5riiNGUv7mzCd6SBV6HiQLhfp7CnqzL5E3zyd7UA7mnJqdniEpsY2HRW3htUp2gSjvuwWF9mi41VALWhhw",
  "key31": "1hq6JrkcozmNY6gGGN1K3BS8TMMriWgfgF2UGg6CBFfh5iKuXrcBwFZhNaZD415bbhJhkU7TTk1msmT2HCnFjsn",
  "key32": "4MVsF3Xuii6SHkkRyyy19XZJnywbhkNBEkaNGE1fPTAP5S1A5RMiDKkRPDL3Q15pS7YsoL2bCfS8NwiY9FL83BvV",
  "key33": "3PpjxmT48STo6aR5kB8Sesoe1XobsoibW68rUzW8YFyMC87S1bssuh2GPmMMZjE8f9X9FMDVYSwRAweDiX5w6Hpi",
  "key34": "anXv3y75WJrMCgA3UB6dghk64WkoofjzYgwyPbpGJ6q6ce4jMpogiRfXbvw4BC9hiHdL81cpB87Qcw8oBMXjBWX",
  "key35": "3tPJhSmPoyMqFrMUJ7GpooWaZQo3xCS5Dxb9hEpuTpCtSuW5dEv22HgkpNxyWutjTuZYu64EAmksYBYkkz3E1P77"
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
