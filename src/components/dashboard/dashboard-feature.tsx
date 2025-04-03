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
    "47ctx2DaYE8sb2MRUSVX7JgQYZiFuLuQ8f2XpsgyY3S3ma5jAeCQTe85HJ2wcLweMrkTdFmkWHtJwd7dPrGPtECn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TqgTjGaVZbjkTtZFUpyszeEC62PLEpaLajkj3MGKoJpqvRpZXZd9X6S8XPhwNzgrPJVE876zdKNPYDnoKHkb14N",
  "key1": "rq8TFjAnuEsadqF5ZZefveUhQLjTGJW4v2qYWRqKfWokCRLUhr3k6aTGcAXBvs8LcZa5YHV5F861HrWDXqdByEk",
  "key2": "4ZufFT2qMmt9kCiqqxsJ4c1C1JwZDsZn6j87NigFiBekk1CSH894AeSKYeQ6eJrke9eP5qhTTxLqu76ccQsoquZH",
  "key3": "27DpG4ZvXwjZ3RsRnBK9YxYR5NZFnsL15VeiMgWrcqtao3BspdSGENpomHvpUFEpPctPXaY3zbd41yA638pYbiLo",
  "key4": "3Pdw9dfdxVJyyEvhHi7iBy9S6BALFJSDSUAw8L5VxrUknJhAM8r89G6A8DJPi6nP7TJ9pqopkZ6RJLuadU56QDJa",
  "key5": "4UhgUxhHj7Vp4Z6Vgi7K7xoLKdZvLEKsjf3eEDsF5DyYyAvdJi5VwkxParPBFvudov4yvQjdDPgtAnRwskR8WM7A",
  "key6": "5MQWSna7hJ789uKDjuFdbQVFqrVgRhyWQ6Dau5M5G9Wh48oMPFbpkMvWqgw6eoWKd36tdgn1cKs58fCAJghKQhtx",
  "key7": "1tfSAQNdZKCrCPGdMfh3TsChw4eceDk5R3vZJroL7jtjVd731KJPszYr3Dmc4qkGvbBA86CDCQXusXwnEYa9FUe",
  "key8": "qLmM28sDPVMyaNmVaQ6WSycHcLTJNj4QPYoSL3HTcKuw4RK55g8MNHNRmMjU2tJKc4y8M2krcgnK1GFLvM4hE6w",
  "key9": "3T1itSpd7pFvDvGGWd3qA4wJDsi4G4DS375VAynUms4FHGYrqcXVMkeGvqU5aPj9piUEQgA8KectNo1yZ552GmMW",
  "key10": "55gHENJTCQXF2nHyvNX6nGeF355nqXCBTnvVsniNoB1UaJtXaqMaRmjicwYMa9FHSorVHh6EtcZG87KQsRABqezP",
  "key11": "3YXXKYgtZYPEKS1i85ao6238WFKc6c4fkhLSegAZLccCdCjVdLQS4UyxjbGGaVPxsxghSPvYaQXfnotJSk3ZZ4vQ",
  "key12": "2bzmDqbGCCbS3cZLh5iDhweT1WpifxV18kV9quZ81bpLSprWzprGpWYmABzthuH9EMm5f8vdDdXpgt1uGNKs6nZR",
  "key13": "2BvVENxEP4LMQWb8ymLk3tg5mBL8bWWtCDrwv9fav9JmLKQBPj8mFu965hnf5botAV73owVXHfgyhhVFhHJSdqTM",
  "key14": "L2jcC21Kpno8SzzCkQAvsievN6SvizVJP6ooq4YFQh75DexeK2MZew8UTSJRFABXMacSWqK6tnisBt5RLm3WFaq",
  "key15": "3rPSPzNtZtatdtJKeLdJeUV3vsH9nnRwp2sfRW8AACVLj3byxStwSBedSYGBccrFTJpfVKuyknaonLN16wBxgEvm",
  "key16": "2K1EpJeGnNUnbxMJy2aQg9fgFLD6S75PZxDruLx4xMWpx5opYwNTNTaymrD5P1EAxtLVnNDTTSMkDE4FGfi8BQNb",
  "key17": "5CZhmazxNMJ61afLkUKR6K3cCjZk3ketxD6jey2QNL5uWTssFpVsYrQB1mx1H4hVeShw2W92y9rY3iN5cJES36Vu",
  "key18": "24XuK8pHLYiRneTiDnNra6mt1c1TTAUsbjjtRj9Vgbhnpqs9ouuFWXfbe7rgjKhU7qxReUHq9gq1N4N7bZyfstnF",
  "key19": "3P7wWaMRHnigHm5YX1MFBRHWVfjdt1CEiTBQ4q5WRv1tAmGc7ufAt9xL44FuRNeXABqdSghNH9NezLf8Td1jpSt3",
  "key20": "36y2geHy3Bo2PA8ipoNi1hWebFrYEsuxrkZ1AnX6cwzF1iRgjBrHvNHTt9Apgkm1N9jZNqzjZF6KizBtkEn1FXuz",
  "key21": "212mHvSZUMTVZFabUmYGUe7p9puehJXcEjWvLMGnAsarj2yTKfndGyH3EbWGTBjsdFec3rZANmorewSXPkFbDfar",
  "key22": "3Y4cMXZAZebyEe27DQKBz79Gudda1hbhbFB1h7ryETc7ogEFvzvQP5ZHonXUy5nVdwdhwCKub6ABJNNsewe4tS3",
  "key23": "2cp7A6fNbLrqbnZ8qNBrZ36xSueCqFQ3tacZdNvYXjkNJsNYVP14uTX3y7WjN6izW6xqNa1cM4rnAVTq5kXNtsrm",
  "key24": "4Wa81Dbx4f3jPg9a6q5ZB1PmqQjwuzMqM3nYePPdv3YfZE7KbmKqgQ34Tcd3qtAzzxhPGNQBKMCo9ip2Gts7g4YU",
  "key25": "2gYvmvFCyPkjoFSX9myx5aSXEDmhQZj29BZd8zhDvjYvouSvy4Bhj67QJA4ybF1HzDK5svANqDuVYB69AnJMY82P",
  "key26": "5LKVQ43FrU43cCGj3LJPPVe87vD7KdobDkdx1RipwyU2w5Z9HmwsruxRdY66T2jnSutX14J27y16u88XXKnfbqus",
  "key27": "4S3dURLVBNPDkhZNyBVQ7Kjka3LMFU47ev8WySFkTafW94wBbdFPPjncJKYTeGBFnc3DTxuxh71WELNTLXQPMZpe",
  "key28": "3knD5oYMgDjnjRoqdEkai282UUPXGZojtcGiJs3SWCL9B2jtnuVxn6VYYfF2VGHmwf5Grp7SKCw9H7cRbAm4TpnZ",
  "key29": "zPe4yWDxBSdoQUQB6djTMCNMeHWVh9wDTftXKjWRbKe2ZKY8VV5QBXFM74fGvwuVtz74Sgpc7uRYo5z6bCDh62K",
  "key30": "5JQiNdm6FZm5ocdUpyGXcsZhh7ig1ZZQm1kSNnM7rrdvBeziWsuMfH9cwAiWSnaHCixbHZYnvcRkbAGQFpNR75FG",
  "key31": "5Qatn37Az6GRdSvJvi4GTui3QbGb6SCfmcfP87YrQgL1MfKB2D4BRuP4M1Sr5k2E2Kz9GkmDeUM3aLQuy2VoEcxn",
  "key32": "5ACeQ2JMDxHZREnPbkHsQnSm7D9MYMC8LJGoYcXvPNC2wqehZdjTFVSEAUkJ1PLLWAatC8fESU5E5hjETjBnYF2L",
  "key33": "Xjm2U4pfMW9335UhtNMTkY3JNLgRBrsXw4MDzxBjNu5nJmsd8tLeHCByoLeFRFU8tXi8PqTcapP5wDBxaPJtiiP"
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
