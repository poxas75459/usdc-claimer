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
    "3bPxVEVhx7SeidanYfPZ7xmp5WNvGh2iWGHHnSvPPyqb4DCKgE7b8sMUwTpWtVhBpfjkWmYXqQPoXP6B5RaVzbEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iR9tLKfs6pvR9EHQyvuxLrxoj6BLSRxFHbajyrUCoNGi8kzFCC6JpQnHzCD9ArxDtMBuSTxBimYLkryBxj4TSQY",
  "key1": "2d3QxLDro1VF96sWmHM9DrYE5M19zdN4TeHYaQK19FnuvVRSnYQLev5vB7esHXbGqoANdhKByFTV8A13Stvu9kCp",
  "key2": "ipcvZfGmB2161V9WEYnTFWwMrLfwW2mfHesHvRYfyLFUqH9h1kN5KvguiMJsbXiiCaxZFMXYoqSJAYpdhdPfhmX",
  "key3": "5Q4Wsuzy3wzBpTLanazo4CAC7Yft5VxBrUjtbnGeXSVZ35VJ1bHkBCNzjDdoK8mwy73XTmsBCUcqKwrrQyMAUt1E",
  "key4": "kBhdw8GVuybE12vnanaKgxKTmRgBf4J5nSJGtGBtACKSScEN1rYqj4zHyL9Wj3as3KmYPgtL3LfZcrXdoQCFbLJ",
  "key5": "22Cnm5iKzQx1CpteUhcqe7pChMwK8nh3XXnc3GjDrWFX8CRmZAQLy6Lvfd8ar1VpF95LW43AdNPqgfRHS8A36aCX",
  "key6": "5i4Yg31TR9RXcAir13WAq7MJZxoi4nAFHZheiq7JWnJJfB636nbnvwsLqxopeZxaG2UqSHNVZvijmUgQAgJidBs1",
  "key7": "5zWo6yuhq9XSEetdHxKzkKrVGNMYBtVwFadX2tPquNw9MV8FZ4dr8pSdTxG1dYfG5tFmiwKsc4KcFGPcK6p93ahQ",
  "key8": "FHJ8b5CcBzw9LRTVnxVdWWcN2qsuTmucutMHXEnVXPUHuyefpAxBgAnUfnSADxnEJwjZGRJM6SWqCdWJGnAnTbF",
  "key9": "b265NwSNANwopTkDJTt2UqCYgoQC8B1JGXXayiFj7uCrUNf9ybu2S5iN5Tr2u9w4c35LwMhDRJEEJ98EHufrync",
  "key10": "Kachve8uCNvTgAMnckMxKcyev8iXkz61J3FyNno4Sq5sCRjFQTMrHLurVWhvcJzuZSFpkUGFeLbLCMDtVZLQcRx",
  "key11": "3mDLWSpkpPRB2N83afT8FevEwoP6i5iGigUSuSMP6g27tjRrgZdbmmuzEsAMYZsxECRAVLshdHgHPcuk17uS1t79",
  "key12": "3UQfxsz3YHxg7Y1en4eJSN8FTCWvaFuyPZrtWQX11B9XPkwRPottkZV57esd9Q6EdtDVPF4fpmzXE5XkSWYVXkZN",
  "key13": "5DK513pE3J7V4u8hD1AyxVmDgfVDozw5onW3xh5s3DkyYxnqWKjnKxo9oTnzPCXiaqDiDG79h8A9zGyZZ81eBjg5",
  "key14": "4R3A8E728mWaSzBkiobc7SfAKkLXHAiMf8UPvz3buYqJ7qDrEJJvA8U88ZWqPWXBc5jriSA17xRYMuv7LmdxUrhv",
  "key15": "3kgNhUPXsvdU6NZ8cU9KiS4q29hWgzzLT979oUDrxd81pWGY5ZfWnLkUvJB69rfc5ETG7QqnpPED1135BUFomZfY",
  "key16": "2o6tSHkbEQUCXfvWGorkgjiJ3vggzZU8TkFiHPDoJ1GWx3i3xSLggi2MjJTvtUgLHJwXqdRbqF3AqX33cFTezeVG",
  "key17": "EVexaZQT8MTtgLF2J3w5aNJ7J7CGw9TXeDAgVFiyk7LxtWAwmGJ4aqGi5ESknrd3fGmWM4Fpi6WzJfJXwn2grgL",
  "key18": "54rtksfyC2fEUMGhvdWA4T47VJr4dnWydF3Sqkc3LkUvLXnC8buXn3t3Bf8nJnScfeFEzGsCMVm2gMrE38ihE7L9",
  "key19": "5nSNq7G7MpEbcM5DzSZ6Nc1rzR8EQzdLGGUc2rv7Bm4Dr6K8SCZsKDYpqC11wTiRZ5eN2faNcfZpPRM5eAw4Fye2",
  "key20": "CVYhLJVC6KtarpsmibCuRNoQTz46A5E4UhUGvzN6RK7NJKj2gsqG1W1jhMptKouEJykFCGbAMKisQLLvhd3aJSC",
  "key21": "ciWUwsbHJic4YsCM4ev2HHWgMHvZyKvjhY1W5PtGgngb9Ph6WiiscJr2h6WX1uf1gnoHboL4J5r1Kq5fnRrsLqF",
  "key22": "azfYeyHvrpWKyaQpEY7f2jeghYf4W5d7ZPKQHhbRK7hFzP7XAG6A3R6ce2bKeboUrUokHaMhkzoUJxNxeugmypj",
  "key23": "5JivW1NtKGmtAhfdWBcKWXspT69zuza11uxohJngGhpoBgCDhTZFkzMxEDv7Vu6p6xohSjBJ5mYg6Kbvc1skroMT",
  "key24": "4wCWmzHiiDMvpScMSebUgfNWer3dsAHsGUUBJbcBxmgsVNvwehtAk8UQ6wLHPrxGtgVHDgqXve2yfs2mbEsS43qm",
  "key25": "2bpuqqKrSQw44U4qfq4uoEHDVbw81yXqFoFuaR75WNTzZ4cbVppXYzvi4qBWcgSTZrLxeV7Lp5WEShprYyo7ww6t",
  "key26": "wdT9q5u3FAq2w1tivBdBV9mixBp7cWFFDE13R1PzeWcbVnwKwbkTvcWhgVtxf7GQ54sZvgYSPcbAJvu5zC4zwVb",
  "key27": "5UE5AzNsbiAzDQ6tmMK7HcTPvunCvMdTtH5hdqWT4zQr8L8q7jHgGCvqycVex5CMH5ZRw3CYEp37m2LfiwYJaKz7",
  "key28": "2qT4c1apLdgPqBMKr4LihY17G2cMZmQA86xE8nFM77P8UePLYubmgYj8JxgKzRXw2iR2Ldgn6naWPnKsV7ZVcQuV",
  "key29": "5ohpkUsEk1QiuK2BgjkZkion7qxo8x9KGiZ5cRNrQptRnzWg7ZYYbMw2xjGqBgNUnHiCMkcJkBnxcuGZFG3i3RF6",
  "key30": "3RnM3eYqYLqVKyCaUFPgSnEys6Jb4oThoS2nC6a5r1AynebKmGRB8fUAsVHPuF7rdzBQRrQFFmvwWguG5B8tyN5y",
  "key31": "3RfDyqXD68esXHCv3r5yRJMDCQ8th33k8uugkHNa9ZwVESTYeoKh9bmQkqGP7rBNL8k7iHazxaiZH4AichZw1AtM",
  "key32": "5sXQ98s83GGiv2NGi4ad4N4SaN5JG3jy6W5U9dArjasXbFxLRuSPNFBJTKkGHU3yYRWGHRtPTCCC8Yn53JDRo8d",
  "key33": "LWEoZrWicWthDjpENqWW9LkWeEcQn84tCTGPBRXifcDNQWcXQnQehFq6qzTZQpfr2hSwM7qWq6wtHJBxpWB4uWa",
  "key34": "5fVzJgdmkmYfMygNhWKxC31mgc8L2zpVbcVCTFppcAX5ZhWeCLvK1Sb7kmna5HPAihjSt5hP79pPEae9sorQEGvM",
  "key35": "fFpVxmFEmkGUr9i5qWCEymiAdMMW3yCjXRFebDJkrsPpBk6CieqA8qAktn8s4Z7RV5hLmguTPF2PpEKetWwv6gD",
  "key36": "3eVdgEGS88fTT3YsgpTUSdFPggv9b9V311Sp7G3KtfX6XeHomfvehjqYyiDshXD8g17GTv7H84wAzNoU1NNjrkpd",
  "key37": "3JMQpMDN3DduMJP4CZ43PEo3qMU3WcSsmtuiw1caU5c5PjGTeV5ADhP4mj6EXUvWc5dNd6zaw15nKd5CDaoWkwg3",
  "key38": "2vsyyfNKZ2BMtNS5z34a7NhcAurULpRcGcqVua9gmGH7LBAJBRGSw2GBB89yFuzm8pXJRmjPcipsLxPugNJn3P6h",
  "key39": "46M5HLqh7bnq9TJagKGgEiH2Rx2viFNXqLy9xii5ieAa6mXq1GkX2dypP4vS9gw5npquYeNnamyyDsgZWzPNsDw4",
  "key40": "Xsg7Tpuqy8WqDtev3tUAh4PZbsnxLBmUZ2qhWGABcmwgEjWXXe7UfShq9QUStQ3fzxk61FPRCPhrMuZ31wcrnqd",
  "key41": "4A9ex7K5TGFj6XAiupXwTHojEVMmjCzaVRVTt7J4rNGZapZdtrUukp9uyueNLr3eV5kz4K9CFjFvWBpudWXTBeyA",
  "key42": "5Mxsyx8pGvTGUK5gwZ3s2Xc4LrqiVtayyn9XLeMB9JmQXpqMFcnWukaD684BpBSBYs8tCPL9KaNeFx3qMZLYcvCZ",
  "key43": "Vko1T5K9mKJEt7KoGX9hiYdwm8LSaggcYAt3iE4PdGgCPXNpersRvVgADGFToK8VKiPoCuXEVAuVZarC925NHaT",
  "key44": "3Mc4DPASXGM2KHVaJsK45Y4LbRTmh3xd4fur8Hd9MpYCNShnSx3ownKVBRyuF9xVZ97pvg53Md3jt4iEHExHZyoR",
  "key45": "48EhrsntGrGBiWXZFzjdsrAJG3c8A1hBfyAREdtyFj2bJkhBMz3Rv4nfnrQxdAwjqUTCWCvEY5hxJHZk8gBq36VK",
  "key46": "2fGHqrwDKwZxbyrYjaVwFBKzRZ5nBjo2fAzEMq7F25QGDRSBMMTC8aecXvHmmy1oLMRazLY6GgqyqdRcpFXcWUU8"
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
