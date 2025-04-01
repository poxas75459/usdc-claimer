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
    "2PJvD78TccyH3kuo2X7viCQ9Rt16C7BioHX4rRwB1djc3fu1qeCXTUoYGMxuR8r8QzrbeuKC9vuoixxGrCGryffx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PnTta7M512vSsDUK9VLrxRGdezJKAgJSa3fFmg7B6CdStZ6XmChgiiidQakuW91v9FT87FHSyDhdEdkQk1QBay8",
  "key1": "59Hbi5biNgkyEMDbKyEiksTUfTnGAAsNRegc4PbFWp6FRixRWWzWR6XKRU1RktC5k5TCsGNFbtgVbHQaYMc4Gm45",
  "key2": "3p8oiJhSANXhtRVAb9b1zh35fxRZqmfMhxDvKxVQD29PqYTQJG1x72N6aviq9eLjx8Uhde4kAm655VhhbgrWSs4o",
  "key3": "4Vm8aTXMizvr7LoBSZGTjq7Y1N8UBpvf9DdnhLTAyuGrdC8u8ma6ykb7XFXpPddJiKPCc44VRsUFEUKYJEYWDYuS",
  "key4": "5tJ1jEDAd8xWxQqGowpsnFYq499CFup59yJRxMqic3VSmNV4KQUJzZBchTN7f4y6Yv5f31TiM57wjvx9rsddS4kf",
  "key5": "4KpnwXgp1GMaEhfSPohNjQUm1t5Mhh9ZUqXdvw7BJKDm7VffNfHDFbr4Ake8q1P4AiLSfk7S6RcmtoS5XdE2ckjT",
  "key6": "4dLtGRJLKaJrZHPYFUWuSRzv8GvdXFChB6fxropWZM8fHdvUz29byWvjdB53U1cf5DziTe3vwRcVyJoZZCQzbD5N",
  "key7": "4NsYyLmhE7q6jLGf7dDWvTpgTYEZASZLqS1y75L4RcXbaNjHjoTyWwpdFu2TcxGJhzV54FZgVvy5VYxh4qWEfqP7",
  "key8": "39vTG6FiZBe6iv1adJxKJmSPvUNZxgb4aYejSHDnmQeLLRu47SRrrLicvc3nj6anmvfxe6JpmxT5DoRDk3dXHdQm",
  "key9": "5WyuFCinRPViVpBPScuwAV9dC2tmLmLV4t7HGViVSwyhT1j1TyHinVbGG2Q9xveoK6vTNK1y2r4ocEqTmc2ayZRX",
  "key10": "53Cqz1XEtHn8vHcFg49DsMjh7uLAjDxRaxokpL6oH1AsCZZCPc1PBjKVWocTn4zcAw3hMCJWhZgVrLCkMyEUuZFc",
  "key11": "2u8QEh1YRiu5qETmuoDp4WKoprEi757dMRJFw4GghS2U9WJEFrErjh5zYt7BWSxSf78stJeRCNwT7CTxmSiaTsFJ",
  "key12": "5CXNjkbuRw82Bk8tTrAckCEFEPAFn8G7ZqQHABaqBdsQqVQ61hxfTdAzPgn5SPtEkyskyFPk86d388TheqeyeAEB",
  "key13": "475m6Xek37Jb66f7ZGdX6kFYQx7yLiXUwYtutU7uVdfEKdM6x6WXfTjoZrKmRatRTXhunnBq3ySvdf1jeQy8Pnb7",
  "key14": "3dsmpkoThiSdNeY8cVFNks9T2iusyjshdYTZsrYor8UEwYWsQXgNtq9sbLDzHnKxfsthyjZY6GC5H4pbRRe7Xx41",
  "key15": "awD9ak7x1HmoqNJPs1XXX3U1yxorwGww1az3wqbi2CVK7gG4fT7YM7ZpE7h7psUBEcpGMY2ae6s57dtg5ZFPvMV",
  "key16": "9WMwZXuy2A66pwms68v7rvpqkiaG2ifMQfPUvKp1Dj9J4tcihHuStqEzxWi6NV2fDG7WgR4W6R2B1QR2BucHJyf",
  "key17": "3iSnofJKja7oSWtGrcW6u6Q3GzDoHBatfqAmAyNuxFqhFFpYMc1cEp1JYnjQ6SUB8uh1nLeaweNj8iRBsinguGeU",
  "key18": "E4fFS3Ka7wBZB92SHJiCtL5Yerd22pYChtTTKeFBLF85P7J3vdYDBfacghsg99qTpN4jrsEmPDUAvVApaSPNncZ",
  "key19": "62DzTUoJ9wg7pc51Um8k93ihz7JwLsvTXDxago3owC1z6WGAjoZL961qLXXZBT38uELf5WWSzWDNkQouwvUtdzVn",
  "key20": "5GNThsYnWFhT4hzXUc7KjtPoAFr5tfGV9j4zyzdsMCwzhw9E43s7SJPcnjNeaPKxVj9mkjzgRuyr1eNkEnv59ybz",
  "key21": "2qeUPKEkXf5ctcmXTcEZ45NDN6JhYZtiVQaYqv9o3oDa3Lgyckc4pRvf1ZTirJAXjNNjcr7pn2W7DX5CpYAL6ZJs",
  "key22": "2xUL7UDixJLUcUJcLRb4RSP9erKwk185B3rBad9Lcj8ft8rbCmE8o4917io19tu4rmYo3ch3o8J2ib4wcnuoJifh",
  "key23": "5u5ma6XBEYKiYqWwcyffvps4HUaA8dhsmcnqSkpBFeWmcUgY8oxBHSnYbtPjaDCJqRxrzxzPCUuVoLCqyUi1c7PZ",
  "key24": "5kt9eu89JKh3QZ921kuEwkUUEdoJLdzv2hfyWoZtE4AWdRYskDQ3o5g4PiAtWY3Gf9zcAxcjWApkLW3tu6vidHhE",
  "key25": "gsfsvvkkn7sbAiX6BkzjGMXv6eQXPAvwxvGvc62v3s5YCNPriEUvqrn7munFYdUzJp2ZoD7WC6uacGyZaGv5oSc",
  "key26": "3TABZmQBCZe4iZvyEFucsBxpmzFu6hVNkZhvr4Zy41Vig5SQVVpVLJt4ArwNujVhzksju1ALAn5BNWffAXUoMErr",
  "key27": "Bg7wdKYgnftJqMKUNeoG7Rbw2gjQJoArNSRM8CdBF9yc2Jy25Nosjc8Mf3PB3VSVQVxGWtK4qYHF66vQNqVEXU5",
  "key28": "2j8PmkpXtxXbpdH98k3BNd65yDfXhSEAJyH8RqW6pzpMnu8WG9f9mwtVWLhfS4nC3qzjNQ5zUMkZjSYTdZVJqPZL",
  "key29": "4MKAjmWyHNveKKvi1e6epQZsoLd2uEUNp67UELatmQKdzhSeCMiv2WY4NjEcQQNDs4d8b3f8LWbJPZB3rHjiTQyB",
  "key30": "51BSf9ittSMWQAyw8ZeoyjLJFQ4C59eCgKSgPdQ7r4uo5ye1rs12NPgaUyuh2KYtYTLevEUhAASjUtkBtUSKkieo",
  "key31": "3k2KkvyjSMdMY8xtu46wTrxzkefEecQn9qidrz3xwPUkZgKGgB8ydbjeL42hvR8oPawMdA1iZPt1MemmqTwGMe7J",
  "key32": "2Fr1cLy9UkJV17Q6G8GX6y8tFkTydjBtXSgu2ThrCSjckWGdftWt5xBJyjSH26Gib1JZmQrWBj2b8nnriRsqCpCQ",
  "key33": "4YD2nNGqu3AQYmHmE6RXngvJqhR3trJZ9YdDThtpNANbuPy3J58tB9L1aYDsSPmEjEvwPYBXNdv7GkT7VJYo1ES",
  "key34": "3hwP2SrhnmN4MhESnS3Vdds1Gz9ewhBWLnUzqroEHhVNebUgnSQ4VuB1mboQjEsWn9yLS3RFn3wEWRcfJBR1iFfZ",
  "key35": "2cVK642nvmUDJifLYrKtruBAEhqPvbnRgLsjCiPKmjvq9b4nQbPTeh8WrAVTtd7LY4ZTpN12ymJunN5oN9Sxkwub",
  "key36": "5zxbAf3dEX4Zga88etLhttzBPFKzSfvp9Z4FD8nGKe9bvDw8pQMYWDakpsGNRWEDVXfqCtAdL3ZGw8zuHUCEv6Tn",
  "key37": "3xj3z7Wz81WP1cmoRaj7vgYYHgegN85LkKihR9EvXnCRgB7BmdfXjMfyHYJrnYVFDgxKymndSLUk5nBQakiXmUyr",
  "key38": "2H72UsUgWyDVxuoycPTKAR4yEA8EE3Pk2qVUXFirgJbq3FCMB6RhqaSWWq2YqXW8gewqPE4CBpowQsgzkqqy11Ec",
  "key39": "3nZbtgLZQEa2ydXvYXm85QCoTCX3QSpMMGDHMWapvKjuJDUbhL53TCzscZfsURPEZfHJNM5LrLRrA5HVPUTc9YPz",
  "key40": "5BRjzfn12pbURmu8sUvUSFZ9vwyonKMHUC7QxFJp8tsmthdFGgppChAhRhKsD75CoYbzcbqA6qHbuNThCNhh45mq",
  "key41": "2fgU9TVMCg3Us1PkW4bGD5PQXTKtQVqY4PQUbu2y2szwh7kBrHfn8LJHSxMcNUU6x4BwvewKY4xwPqJ9rJYianML",
  "key42": "76K7fWePc4soZY4GMb3n4kiXFfmXAooUH1cvNyQDh5KuUVb1sHrhoSAYPQjt9kXRmvUr9141L3uPer2SMoNhLf1",
  "key43": "4dH8cUeA4riGWvNa9c1yBnzzUPwM36WCmifFXhZpYpNWHo3oVVssDNh5giGVDm4yfmuySPkiyXyJgfLXtdQnAdrr",
  "key44": "3ivfxwqmxxph9yZCgfBxxGJTmL9oUxqk8KYsbxrKjfoKDpZWsfYwm1LGKgjEfv5H4Q9hGnVjoZbimCKadsnusx6W",
  "key45": "2EPgjdh5kp4rsGsohUjSqTSrfSYbJxUhMLDZApnxWQXLfonzvsoLqr6fYYy1i4uMjLCzxeTgWr2kAoXmjQvEmGUS",
  "key46": "5ZQ6w7Vonb9e5uiqToh79F8YyDoneGYfMraSAiWkaQ71JfSNb7Rfn52qQTDPmStL6g21GASw97RNQ5g71A1zmRWi",
  "key47": "2sobLwkQJQSzX29mVrGEkg5yp3H9qXkyrcB7gH89uSf2oeASmCPdM25FiiSioTL7RbTpb4KUFqtanzSsZT4DtGq9",
  "key48": "3G1YpAwDxA1RoCZkNh4CoCv6Yy9VerRrRytGnnWe4vzcZat6uFpzEiUF9iRNZqpcUatLuWQU8SxCEsiSqsoTSznX"
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
