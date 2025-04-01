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
    "4Pe4bk37acWnU3dgcqssBstdeuZaDAhgKjYfj9hYu6x2G6iW9myRVvmDUsQu4Y18oT5PTPB8Fv4uj61xdectNj6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5howKaGDY4yu15xmh6rwMSc5xHn3SiPe4Xmj1dbZBbZBxfzsJWtxAvUobZpzb9ZbTz39nzqMessCPr8AEFKBEq8t",
  "key1": "3Bp5vD1fQh7gJSnX8A1szMM1sASN7J8qmgBRqMfpvYh5h5SQ2nWmTzZ1B5FMf1ZLhc8QfhFVoEb7VJt6HXou8aKw",
  "key2": "3Bob9cu5btuvkXxMjwpGP14ZrdyLJmGkgeDJLtzqUeQMfXYVnb4jWr9EuzpMT1J1SsZfYhXexdbnGcwvu2Dw5zUp",
  "key3": "42J7hdX7pe1Hp4zVyRMqfzg7sHtSch5pW19ZLSd3G8cvGorkz64GJydD995iRbBRaySzw16WMWcKpCUFHuYj6M2k",
  "key4": "M2jnXpiApoaNzGrUMxpCoLt7bXuLoWbLAgkXVfHGYBUEgJJqekWsm8NxEwFMhqj9836SduJcDUJ1r24VbuYHEKi",
  "key5": "5z1xrbiF6KgeDwGPuC9F9GrUS7gt2fQBtviFANSafjpaLT8pQp3SVE5sATEMdwym6GKnhUx6cAyXNwaNmvEQP3DE",
  "key6": "59oQMD7UqQmdrpBzkvuZKj7wb6R88hx352vdpve3iouo6K4gPZ4EHfSaPUJJGYt6SQgjoSEd5A4kwoC94NosW2Xe",
  "key7": "29Bdz7VYUeYv6Teh9PMyNvvqQX9XDLnYpEZWyHsKdzv9roUPpFRxAaWvHmyCcwwqZZvnowdurEvn8vHkEtYghBf9",
  "key8": "3DJmS64zVJZ4yz7Svr1749LicZ7WZ6hf2xLJff2ikEFbdyFYUfzhNEhsxmJSmHVxRctV7jieb9simvU6ADCsjrrM",
  "key9": "2FYtxS4kyDQXt7yVXqD1ucLqExwSi855g49kB79nnot8FbvE4i2nqGiSvhN7Njf7yfSj1FpPo551B9hG88pAwJPc",
  "key10": "2t7wCTKaY6a56FmA2ERsGccdNxoVhNK5x8ngiE1zH9Sp1XwokkgP2BTZWntw8mvCLcVqA6XLfZif8r6PPqXhJU4C",
  "key11": "iS4CAezBK8ff1cLLRXwQ3JHNucG2aHDavd8oeB3ZxYbBLTBWpu7cWx7Ww4gjrTS52mV3zPXSMq31p7HDTcJk9Cc",
  "key12": "3v57uCBc3YwGhn6HeA23Yn3XxkQfpuf8WipJ4F7XZnQ84QuGuaLYgGDUKuw9h89oFQdsw3u3DjjVanqcDxfq2aBw",
  "key13": "5rULTCHuekCVH5RTpKJjXsscnCc4Aurav6ANdS16BzuD4LfNWPzMLNtuwXwk79Q8Y1g1XFa7C1Lgg8QQE3s3Sw61",
  "key14": "5dEEoueg3AkBmFhPEZj2wgUGtdn4Vmi8iDM18xjtJcRYrDpJAapcQ9weqAQEDXT8XBj55Y8L5vMFYRGyeXygWKx3",
  "key15": "5UYjUuiqvX3Uiud5wuaMzKy6eWs1e3WENdhMFsHqjNoGNHrZJixa3vwfGy7jBZtzaWCwopN2H69Ho8SMLaovJEaE",
  "key16": "23tKFPsFjn2MoMPUq7HfkiQDzbK6YU1oeik42rKJ1sfwVKDStZ5rLLtCBjZHc4WsQyAMamNEwYoaNqR2pQp71ZqL",
  "key17": "3P9VcGPQPPyMciDr1VEGc1J2X5hwJsyF26SriRbSyeWPQ16MagpNZU5uKFE7zyowaGskowszBNyWqWDv8LybckrR",
  "key18": "2YEqQQrmGkkM4Zg89qQSW4uZf21c9mgcFEasiQEeoyyM6mZ39Ks4vT74Yq9rwsjFE1V2pPLcNNbDGbrokxVNVBGj",
  "key19": "2crX3sd9AcAsySV9w1iBFDGF4iKm5S3BUNUaqGvr79sKUCKeJmqWZ3KFdnR2ifu1iS4m2mMx6PJ1tKeByJb37Dca",
  "key20": "5Kv3H8534kZZHP5ov8CXdw4wPyubdcwMNve2ghYezAvdvXd3VV9eFqAzjWz1WjDi4CCjo6v62t5DD7A6MnWfomkK",
  "key21": "21tf9ZeWvNfMWkxzPeqCoigs7zeuLQQYeU4CGmdzcLz1ezgrrQoKVAh6wsKEKeS3vaUbvyt2VJKWWxUveUq8vVvU",
  "key22": "5Uddu9qsZQf3oqkGpzEPyfLHdTuPGpbV9yQnMn8qeyqgsMbVKAvGrCicUJNzewEQWHKjmTHbnNyy55Fbagtj6Uyf",
  "key23": "2q6bwUcx6Lg3yYQfDXTbfdeWoncov5TzV7Zz7ahRztPxb1bYf5SNwcY4U5P9TxMJc6WXYsjDMkAWQv7GWysTkG4",
  "key24": "4PbF93Zso7jBVDVMNPMfjMGhVKDpQcYqVt9QjR5nHz6HnTAbJCEqZxvnT7kUa4vHwgRZkHSfG7cLXbdpECJT7BFP",
  "key25": "5fQsV8tEBPjTbCoozR54a4KaBMGFXK54PYXfqeY2JGWkL195VW9ziq8THoJSokAtxweJrKCitoVayWGK6rffJsF6",
  "key26": "2AJg9VwBTD9rBnSSaCNnWGnW2BZdccp9KFqK6qb4cSAasWTp4HHw9oADLsGzwZ8FjUXipgWMidJ3FREBUvjL9J2z",
  "key27": "4zAB6UD3PLD2y48WAa2Ls3JjXh8z3ewRCE92PKpNcB3Cip4rjgGaAKKJVucVq69sAH2xZgZo6oy4zLHi3UPTQBp8",
  "key28": "k7QFCbTmauFrf4ESc6AoPHubvtBUnNdHqAhzsJVZUG4PK3J1UTt6P7zdBVQFbt9W7Ljw3oHYDf5tvaTx9nDHKUn",
  "key29": "2RxADVRk8D3D11XxYBhCKYoZgqXmhp6hTyXiWovZ1SJWkEAasomMbPt7tjhxkZydZRVU7BZG8v2yMsSNu64FHAX7",
  "key30": "2fsvHWoZF1VVauS6Hcp8QbwVqPbjSvsJ5GtvQs3B3FqCs6UM8f2bPwKqCRYT3ND9YQFmjg9u7KNfLevWG7CaVA6e",
  "key31": "596iA1q37pmSZxVj6Z68cCdwCKbmdqzVbwoeLsVe8LerKgehsK9TcWy2WjTMVhgNq2x5Ajb6kujXjbdq1T3qsz5e",
  "key32": "5chmJ76Trpy2TkiYyfhLtDBGbgyPH94rmWVZfo84bJt1WNTCPyxwA28pDcDZYj2LDkUM7fhy7PTNSJkDGHmVuAVs",
  "key33": "3UizoE5s7xyTqtPMUzdK6uPiUWJqG5eniVrjx7vaQTBdFCP7yWtrVVANx6t5iryrWBhBWDLDRjAjnL2BAGmnBr39",
  "key34": "4DKzKXTfeTUDTD8PQri9WaQ3vpjs5VP8xXcHASe7iWYE2oGYeYfszYA5Bnn783o9NAPaat6TQXXFS1jvJJ5eC2Wf",
  "key35": "2DbZBpMvQMV55rnrcp7T3YfncajqGmvufzE92rfbpoccpYG7TnQxBqrUHZV5GCSKP5Ne7kkG6fHUSbtRSYMFEca3",
  "key36": "36KGuBy1uYETD9DDMLr41TaGiQoWYMcrui8RTfgHpfsgwXrmfLn1n9Wan89rA9iMup4epfG4B7kDC7EhYrBFZpJ3",
  "key37": "6v6a3L9K4tQwqCg9GfcF6RxkEvV1pYiezdYjkx7rWEWTkxN8DTXouoXS4T171NjMP8GyUmLWAaD4Mw1Sn9xkCKQ",
  "key38": "VekLrLNeUn8NK59KwgcUsFbwy7MxdpN4VU3XE9aTinKNi5spvPKQjcDuiVdR5Mkea747VVkqndpq7Jc377kyo8n"
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
