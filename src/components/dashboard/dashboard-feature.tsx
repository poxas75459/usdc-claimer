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
    "434aSw7nJB3fT5ya8cXTbefzmCRGYzTp2tg3EweK3WMiyV2cucxm82zL9zka4n6rQ61tXfNb6Qt48GeGtC1WpYQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QY1aNqQFjSbEaFM6ew9frqWNPT81t6N5qiCU5VSNGnbqSjmJjJKXDuMLb9eZo5XJwPthxdLbjUTGsCin7fPJbbJ",
  "key1": "43heWbXiWSD9jkENw2i3L5yNCQqmDSbJZS8LuyPsASrZJnwXygU2qJ5sX27iebc4XnzVBDYetQgrjeYhSn3XsBRy",
  "key2": "kZi6uTzPcmJeCD7Xx8trLecSVSFSfExr1nsKyrszXiwmaku2ZxewmudQLisxVeXAtqaQp1wqJhSAdVAnPN4h4DG",
  "key3": "5fYRiw3cFMfjM6bwQph63BCM8L9MkVoLKD53Njypjd4jzn54nG331kqTdGtDcCrLNJE4zhfnHcL6bm5wsPVpNfUH",
  "key4": "2n8CiVTnN8VxRiWJ3N3i8cAbdtwG96iivH7cBy5GvD5d6QKorTnukQruQ7a4XKeg4AkSSge48VDnyvqEzZuVtmEn",
  "key5": "638PysExxFgJeLHVyq15kQtFLRjS9RHzwbSXAHEiKSuqQ5FGYcn3Vm5EKXySquNKZC3x5jf9uXD3ZWqD6FWfP3dY",
  "key6": "5YvvYsy2sdWwb9qaE91xFFDUyvQcK1QZ96iGATcS6iV8BRZj5hKDoENCDTKkvPP37sYpqqfzFduzbREePRxCjbxt",
  "key7": "SyVDrbrHZSZ3KFzRr3Cx4QHngw9in9H2rSA5oCN43AXRT2CrtP2rkik9br5TS1AVq6zqWwaCcWdnVQoQAJAgSCR",
  "key8": "2xJayooXW3KLj27Ts1JomMLfsx3pYm1n3FU8Rg3xXQg4vbbKr99C91gLoH4rMUT4qekyYfDSQ6ukDaorv1PPkxQT",
  "key9": "5kKvbzbcwdoAecEhHsdoy8H3RtPdYGHLceMjcm9QiQDX8ykbhdokMRj5bRYFBQKGACfkVVk7r2kaCXAKxz16YMwp",
  "key10": "HM9bsveeLSm73maAAmLq2vBcjvUWi9ykvWvE5x7JWVpZVixyNX6nZQYFon8FpKAbNC1FK1eK9TKKfcW68yVHatm",
  "key11": "6Tp9KEVC2Phsr7isQCzb2ftXxTtAQWRhtr9LfA7paUiaAmi4ipRSPmqFPqjVsnZ499vPsPM2xZYdHgpLDF9YESJ",
  "key12": "67demV8NX8nrCySFNQz8vVGnS54CdACTaxyADa52ubn3UNT5YiJhFrFrYW3R5wiz16B1gVVzHjTqFeDMBzGtv4Kq",
  "key13": "26JeQBH47fJsP8AKbjHqrUA1bprMC5YtNCSiejgojeQyZWexJTk5Kq7dB4415ExebSVSUhMfVoDW8f5UepsBcyqP",
  "key14": "4tLYxEuBfiuBFny7Ff4PLmeSzzub4KhwgKqprwBAud3ubisqyHtZ5df9gUopjLxtHa6HUwrgn97mc6FY23fsVmVn",
  "key15": "4PTUb4nkXFQSKdMAf9xFpC1YNviHXb2U5GnmiDDx8oMdzpsZqDK97FqPTEw4ZH1cspdAujUDuXkndHDBpDxnVUoU",
  "key16": "5sQFXNbu5Buc2QwE1wwSxPqQF4bEt8hCPYvtahrAn3v5NjyBAi4KqeAzN2bwNniL6r7HBv6VBueFpmH2gD1Xv1MR",
  "key17": "2b7kkVZhFCyFxkFshCbXwAxK32MyCvmi297LetHZJNaGAU3K3xdRJHAGtazfLXufmsPkDkVGW9qnzVbDC8rPztdp",
  "key18": "3d75N7tP9wsk5SWoVQi7gQdVj1muEkwDjbfZmsCiUnPexwPULJHXgrEr1Dj3oAe4p2ZiNcYtpmTFBvRp7Fx9C5SQ",
  "key19": "5QckCj53pGrpQS7AKiqcFGfiSxJJfaoW8ct5fpPGgockmgpUZnpJs8zEjWDgAATanLvadkQrNzSBrpMyLYYzd62M",
  "key20": "5SbyqKbhKtN7VzLUgnrcS2yCrsJUNKWxcpYZdDdkUGvTtyjPCToBM1DNcvXzZxFufrECqshNsuqC9TQW6Fezj3D",
  "key21": "PesRr1BYvBbScMbZnP1BG1dzPnxU5b2XvgzuaejZadkTNBUyrtJkBwURoZ2dWWR8d67VScYahDuQPTPW63cqpeg",
  "key22": "4yggeWH62wgCFu8Cr6uNxx2MSkqexjzX9G6ED2FCxY5Q8oRBLY9aErBs88xtqm1My89u2Z794u1bfvnGNB3DQS61",
  "key23": "2fDpiKudZM7w6nnM8hZXrqZWUjnKohCa1GJpCGkkUVw5JUK1M8hkqXKKwXGsJwMkegRbHwsdsS9WXFHCzr7q6hmQ",
  "key24": "2YkBxqaszrCoSQCXRmU667zyHs4EstnpCnMo7Zhcbt1EVEDYpzgMczVyGKdSZcRvfawTk4abqukxh6XWQCikdEKs",
  "key25": "XJiqG1AAa7rY8ig42rmxd8UMfwBSY77X3NvUht1rHwb9Ccymjc4KX9C4iVxmRet3yPpmEJmNYc8gFgcUZRCwEi2",
  "key26": "31yDRsdSUgfTCqptVLibJ8XQHvAsJjfbHdTKpSNpVw8D3r2mC5p2EamzAubxorbkPUcfaP21dT48U63VTHHYmU8U",
  "key27": "5nn9EtcvA2xzYNMpmmHKE6K4znZiwchZ8TPpUqFC4erMoFag9gx1tqjncb7KDf6AgpMx3hcxXuPXrrPiwt4viuvc",
  "key28": "rRNaH2unwxNYgFdJaYbMoU1C88oqKQzP3DW7VE19RARmyi3TYZ2DsYD2ndKsAxDNstjBJ6c7MvwCrUJTeBXUjep",
  "key29": "eZX2eScFkx9ZhFLJkwEB7p8geQMn8LHJx4St2xLWxn6CBCc8L6NC4wVmGKrwrWqVjz8Qw1H3225htk5afd6wDwv",
  "key30": "43c9GcpNYiRagP1eTtu8SK2DpU6N7ANtKN1rdpCMiMtFQ9msecXf59fsBduAMMMZuxVhz295zaTjD1HRUSsTApUe",
  "key31": "3d9XAWJdDeY951EjkUUwvAwPN7zsVitAmYxZkew7AbT35Mrcredo7zVxtoRxP36cav7ujnrB5xHYeik2gD3tv2Fk",
  "key32": "PKeCq8HcDXrkZvAhKumyp7J6C8q9hVvpT6CpvUXptes8NrQCDdUqLC8CQ6Um6ENEGT4HK4KskzxTC2YQ5zXm6hR",
  "key33": "2UDqsbEHUmwtq9QyGHT1vkcF2RsmdAMXzQEksS9FiLYEjU6M15P2Q3dwrbNukDksMjU8euVpmQP8o2xDQPyaCRci",
  "key34": "5vKwap9C39H3FdYnpLbYH7BJy76rpVsGZzDikjhhRdxDxFVQkMrj9r9JpkTzYqndMF9zoXgymJ4R9AGXhrxqi3qD",
  "key35": "3TK5vTBLkQWhjF9aitLRFZwCjanMojDkRN6GBb6ubDTnwdpmzfSr8ZHzRUqMP7PCV9n638gKaWKYCJrBZ57rmKrd",
  "key36": "3ZnMM6eiuFGV91PBuB7LvV4qyydoXhmkkHmraUZ9iVH3fb2BBWGZyvsc5TisEH1dVR3jPDnc1edsSNnmfJ4zCCDy",
  "key37": "4miQ4jT6mNnGNVWsi4b8PWn8whPfk1zrmH8t5Layp1PpXWHx6YZMrYamRKvik2Ra4Gf2X1LGfievCCBna6ASzddQ",
  "key38": "63Hi2W1S9vHQVToCcroJUK8rtmRzfRuXifWt3HA85Ku5hHkYt3ranijEyeu8i8rwF5DYWRUnf7T48PjKcCtV3Ci4"
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
