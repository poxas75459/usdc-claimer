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
    "2Xn1ZTMnfbRVRJqQUBmyuVYRG22WwcWZhxas7uTB5bVLTVVKhvMbc1KBvFf3tPFSM8ZB9KVKH2ZMMT4Vh6pwGqq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F1BZpppRZJ16kxJxhRgXEHVzf7LJoJDDFJZ7GJ2KSsfMyNnGdGSLkxng9TbLScruXuTMnRPerBR5Z6MfaJqkWNM",
  "key1": "UCsuEr79wVnkj7zhw6RUZEanZGj6egyNXy9anzCJoVurqmX43Cb3QKeitpev2XUHKKcm6LMZKCEW3UAgtcj6YBm",
  "key2": "4TScH2tqSpRWt1Vw9YX9D2yKc1yviSaJnWG6yk6x9Z8cEDvndqWxdkXRLBuUbHjhhaTJS9LwJgV282HTZNYc53CN",
  "key3": "XZ7DCQTfoVVLP6b9wUzUKm64dGtvYWChAwNCiPpigNez3HoaqyJoBonkD9Qg59QZDz3C8L8Ycxe6ETgEz7vz7Mf",
  "key4": "47F3ka2v3nGojU3zhKwMbL8e2wtr7dhQ8sRsRwY43twnfLkA8gx71gvwEMiQ5AJaLag8mADbkkzEZXRVLUiEDo8k",
  "key5": "62m6HWz96mpRUjHW8C2HQQ9ormQanKzaV4HeXL8GN2YmkjhV5G4H2YxPyBG8m8vnQjPPjYu1Y4s8SX4KmNzEkLzc",
  "key6": "3ySwb9dq3PeV96SSjrknnnd2ajzXDpiKNihHJiBxq5J4kY9VTXBTTyzL3P2tGmqXfWyxtmWpJ8rwApa6ELA4tCRi",
  "key7": "43NChtg292GeAdxRepQsLVWpVpnEiaHy6DTrsHenkuY7u3ZEdC1ps7HY7XtBEipyEYxTS89ozomSp27MgM5MvuHb",
  "key8": "2vjuZweFMfXxrTJWzemvj5bVNLXvcPjGQt4oYe8TBERzrdoSHuoehCHY1uZFA4qEhVnkzr8KQabNqi3VnTY5UHZJ",
  "key9": "3rHKP9zfvxHhVutbk3HE99mew8JinZmtCoXQww7F8oKn6UD64JMk7Tn7qGjsqd6NvTRFuzcjdintHxrgdmQrMBFj",
  "key10": "41VuD5zDfdmbovL5Tmx9QG6f8E1utpHTSSvLybGQDfj3X5deCP9XqoBZSvGS4YJMSkqAkuKS1oYG2xMczCCEBmZ5",
  "key11": "59JxEZQbPH9LwD4gocWoFeixHVXXgx2vXns4piH5ujeYuYqJrtmniJLKf7C84fCTVP97L9LVBgEskztJZGpRJtsz",
  "key12": "2ZunC1MKPxDneqeKrLkGpNrW1hpzSw1GGyn26JaU34e9TCk5dzB7wxHctHKGGvmoKLQ2rAwj3miVgGtvuYpyED5B",
  "key13": "3NMv5DutynDwra47kc3BSiFSJRVXzx2oKqayjB5x5sxXh56o1KP9Djn66yFiMBQJmVmWM8KiJCQ6gf7EWuUjcLRb",
  "key14": "2TtZo7UinjhmhmyVUCjQ2n1kadDcnnRmXjgEXDSoVnB1UpBFxET5mKKr8wMuxW4WbPho35iP9H9skUAdy842UQ1o",
  "key15": "gtfEUgV7EvENftTgXHKDk1642BjNPX8BD1i4E3S7933RMxkkgyQWq2j9yeuvuCMtDRmT1M8k38gkdntRt1yqSVb",
  "key16": "CbXCjHVpHDw1Y86gUf3JjBxncpQ8RB3PTSYMpwNhwjvfuamYWWsRT8r9cK3xygCHunveLrjvcEhPrqkZEvZxZEc",
  "key17": "62u6mmoQABXWFscoMLp9FuLaEoPLBvvEu8FeLoTNNreABnPqb3dttbLvwCGbEKj1cmwMPAkGZiDy1zWH7pEcoWqq",
  "key18": "4wcG45NX6nWr6Ei1V6Lt2itQn7VNeTKBY3jteqqPcPo2RKcHJ2sjLBvkd7xXuzbwMiHi3Mx73Y18ZiVGJFEoL6xz",
  "key19": "2Hdd58YGn5qmQhgmMpyG7ddzmojPgaHRwVAP2GRnREa11BBgFAHRKpDYjaq5XgUWJdT6q1XRtJ4WZzYcjQQKoL83",
  "key20": "3nZgcAmsrag9pbQstHJDfUZSgkxmL9Dajt9Pf2zzmiSj9MGh5WjW6aXdkajuGUVB9tQz198WGQxfhh6PULi8uZmL",
  "key21": "3DUNuyjSkDNmC9n2VKuaFKSAdHN3DaJUZyHTZXdVCPo98ZXvmzXkD2eVy74FV5XcMnvXXj3SqVL9ehKRygikRggh",
  "key22": "5mPmz71GSKDzNjhjpUWYKccQSfZSGMAw1hW1yqAfBVxPDzp2ELkh8LY98SbfNoY1jmVmp65PBLqz8kZaW8u49LtE",
  "key23": "2dBhbwEwu7ANtNNB4yX9zxDQneasvvdHXzbScdsWKUzTNHijb3s9eupEvL5aaepUDGaW6iqYoF1RmLETTwFvZL7X",
  "key24": "3CdeXwRz7mzgCoPxPcJuzQTiLo4ohhfgg7RKAyVZP8Av8xpNByKPvUiQGHU5BdigVancH7B9Q2T4Cqb87FwFzkvR",
  "key25": "b3pKLf1SHtgDYDwYtXDer2RnNFBVozN1xbKMNxGwipEsfKw7J1Cq3Gat4d3KJTK2TLSKQ8cNYUtPAqDFebsm7Vo",
  "key26": "4N9Wfikzpx2rB6pvcb9JzNbNBbG4LZvrE9arXRuYsyoH94tx2mKARtmricnJABdGfKGCXYhbWRCLKddVkjxUy5u6",
  "key27": "44HdcK59q4zahQ64E3rNbWYeCK5aNW4UDzmV92ggF5tykWdqzNzU6RFFWcL5ssC5pEaD1RTksyyH8D8ReuAENqc2",
  "key28": "4WU8weF9tgFr2DpsafKMUGnubKkXR8y4otZzQiy2gKboo65m33fj9Ff9XHJqWaipo4S6pxT2FJBjqUNJR5955xtn",
  "key29": "4W47m7Zn5cKQJsBtJ7qYUhZQVXvjppLcZmYU9rzjBffsfEBBXB7fxEW1ammRwzZJEZsnrNJmHgoxyFDv3sEKKwFL",
  "key30": "2tv14FzuJh1SxeDv6zSFxjPfB2PUAotkAxjVBn1EF5U914JRxjtUr314CrBUztTubNbPM2c3r19grtCfmsCTojEg",
  "key31": "4nyBLabeTXvLYDGRcqUESUS1E8HxNjRg3t3A3Bx77QxXeoBerE8JvZbE5RpoJVN2d1zpzYDs2farS1XSeS45Qbng",
  "key32": "4MAktxZ15jzXJiV3GWyJPBmD7DRxej3hyKmJVVMdjiJeLBrGSkGkavJR9pr4XPVzNUwReFgyKyjVvWcLktFE9ma2",
  "key33": "5eSji3ng4RwUDygNZse5KPnPRqRVjdyY2MunsmsTE4uo1s5WWX5xZrSDztjyWwbcWMXuYgRad8Pujzq6ca1KbCqV",
  "key34": "3UwmrwLXHGGn5yLTBULGUecE6YYCs111zdJzWJqHWKP3rB52MzjpFPg8tQ7wBExaXwwwn4CB8Buj38KZmF97AXR",
  "key35": "2ZzKBHnH3xz8QYS4YeXLGjxUNQPAfjdB8HRT1E4tTiXJiXZPz4AaUVG7VApkNZ8EctGYWpBCgn55kBEy9182VMAi",
  "key36": "gfM9ehNaZnnnxUJLqVgvSBNMoTAykXwcACpXt6AxzgY6KfS3oPA5S3gkKSSYFbnUikVnQks5WmdpNNk5UgLkS6n",
  "key37": "2WDgQJqfLTXatDGEzzGbHCpj52BkQeHx5vTTB8eswTwTxM8qzNKggKyKs6Gj4QXnSQhE2NM8eEQ7P3VWbB42nXx4",
  "key38": "48nnYwBkbwQ2sHoNGLuj2kssZxSARLt3A1LyHJiNkCW4CN5bRmuVTmU1YYrqgLYQEQD7KdQx245JsnuhBp3zmMbr",
  "key39": "5vV79W7fpjMFWAKXxjhbdPfbjyLQzSSJA9hYKLZSCAosnxw8tEpZTRHk14eHwWzsL4MvpoyJQ82x2b98Pm1SeFBX"
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
