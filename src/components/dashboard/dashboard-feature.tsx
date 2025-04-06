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
    "3Bu9y4xfpND28EjcPhtRk9Yb65caAzpZpMEujjHqGaCjcyS69AM7pUx9CsmWxo9GBRACGNJYKH6qSR8j5cfPGvGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YZfskwiZKrx8wxTQkkveagCdFoS3C35ZUKeCwQAdLyZPDDa1uCNgUp3YKs15nt5ThLx1fhGk3QMEodXzmk6JhNn",
  "key1": "5NnLjzCw5DqkHPue1vHNnV15W3SLSzgs23KzEdiUjZrdc8sPeg4iL2ShpSavaf6FNZxVzDGRCHqLLZ8wkghTUQvr",
  "key2": "gFd73BxxswqmTHHSTkwQYokKTicAvAb4mWmadqHZepmsS61cfYmP4SPSRLuP47PjCM9YWGMrYsDFob4iGpuf3HW",
  "key3": "3Mt74dYGXasLaJSus1XoszUk5NBkbpyz9ENKQMx1tm78srzi2frsQSRFCxiBV1SogqKdpfGNqD8QWjoH2itZcbMA",
  "key4": "38663vgxrKrpnxPx1LWPzwk7k3L1dJRCmdxnJeDuni4dKvkdSCE3HAdQVLtpsGRfFcaxB8U4VUyLGrWLGkReZdib",
  "key5": "5VNn7krv4BJ9XD2qsYbxXwFrAjVCavTjFcuXiVhgFKMytSNmtD5qwXeBeeAcHy5A4AMsxSoaujCicxZPJAMFSjWZ",
  "key6": "MAJDjhrSUmiy8kFSxSzHbwDkwtc2bfHEnaFN5pJkHDkAKvLBZRme4R8q9GAtSqkkE2oTAgM7r2J7YRbgCGuHNYA",
  "key7": "3QtC9dB8xFabLX7ouqoQtGmaftQnnMTX7NMsjBKcmbqszz4FqukPGASSqqi56tiBceTrBxytCNHj95ncBJGEQRQC",
  "key8": "2Tvw1ug6FUFdnrZ7nSUTvw9eZAbPjuBrSc6uBWXCtks5Tt5PAnnhhEkgf4WfCs5CNr1o5vtdr6WFDEczEaNjeBzM",
  "key9": "5BihZG9eGC7hkDRBpdsSd8YgVxeed9N9xipepoybvDYRAR78UUNkGSEiUeAfrAiMxZMuPy4Svs3L7JQKv65d6wtp",
  "key10": "3EM9hk4YAZ23g5S1UVVt1DQSs1SZdfsaPHA9mVvrVpJiw3Yef2LKKX3j3ueHHbWKrzSvGvwXmuQGzVRNn7TZziXr",
  "key11": "31xhz2fQE6RGfzSq7kZfKQftvcmoftVwXmatzUjZqtawh5gXvX8TXygVUZuf9zYAezZ6P4YRD9TPRLdbVqynw9rM",
  "key12": "3suL845H9otqgyoVjk7bXvErchnMKytxWbSg4w6cFNLcJBNMZzXcQEDftsDuJtrayYuEgXa2SXghNp2dRXuU8GJY",
  "key13": "4482erWXWcSTYeUPfFWr9cacZHSPbVvpUzSLDaguR7JftUhvU79M7KiaPpuKt1NSjec9jP989q1yZ8eoVyLUn2iC",
  "key14": "3c8KUNJLADmioneFWgaBWRDjUV44NYfEU4LBBVSyw4LyU1LwnHdQ7D3MLVqJz93YhtHrqfVPDS7JLLu4DTTTk7vh",
  "key15": "1ScTdnEimtBnR7nR3MNS78LNckqfuZWrgF8oCULkVPRG2hV78xU3m5Y6ip2xmb8pLhx8iQ46m6ZizBf1275JhdD",
  "key16": "5QX9xyej4waLTNihE8wN3W7D27wqMku5C3DqZkMDeTbank1SYBUq35Rq2UNGQe19soMmoUqa1A62aMBF5a1QY7MU",
  "key17": "3eN5rRm2987aQYAifj8zTZVNajG9ZKnWLt6FNhkHApKfcENHmLcEwJwcsb91jeJKAgsRYtX11VrLMg1TddBtdu9c",
  "key18": "5v8NKZTdGuiUVFXWMBAwnVozYk3jkMmGmszoS69K4ZSvVjprPnr5Ax4GGa8YDdr1En7pJbpEFGbv81ckmEqS3vQ7",
  "key19": "2MFGsQPWzGgSaySfvEhUbQD2ntLE7YqzV3BRhCHg3z5cbx4S7BguS63eXeWhcGNYHmkZ95Qk7hwFqstZYR7TqbFd",
  "key20": "2bheUo6fPZak3RvG5u21QnukGfeSepYuFW3Wr35tfGvpEvMHt1mhRYoZ5b1heoa8u6UhNK9D1VkHfD1RvS5rShit",
  "key21": "2pSvFC8s3KKnrXs74k9JoY8Fk8radfbS9ShyqAyd6u8xUL2NAazZ2VsFqSGvTn6yJdMz7SicVnfgGwGwU4BY46HE",
  "key22": "48uePHX5fZqfHsJMKAuZCYvpYgZUrDPJsR5iNGEabgRNdNJxEL3PGe4cDWTG2YLpt5tMjEHbLAve6zHXSKx81sX4",
  "key23": "5JRsSvUum1PAhspd6LcSWNkELpDUGACutLb5Q41xEro8HB4Qm8VBt7z1Cm2PApyUv99tCR9BXFeNTeZYrsDVopMK",
  "key24": "4Mmhf883G5JjiJoXzkcyDUir13iNZUXMJRZvs6MHiHWHeauJrFVffBc6KSgL6fex59RL7zkGavhX117BYbdEHaiA",
  "key25": "4sPHBA1fNRDLYhnDEztmULyW9Jbg7HY7cBKXY6MWCYB2qdSFo34PZxsViLqCXWcSLqBDWyLjnkbei7zGCRKpkHCA",
  "key26": "2UxkcRNj9HagKXUc8faAT5BuxtynzKw4VYyhC48wST3eUw3BB5buNSE4cGKJiwb7r2JhffC1VVbbAvr6qGV46fNC",
  "key27": "4kDkFadX4ciaBk6VHw3WstKsXj3UxXJgfgMpHMBRNsqUUKBr3hgWPDJDMNmTBYpvtHtw3YoUuA8hP2JPh6ZznEtM",
  "key28": "2rX1ZKMcCc9zo7ef4R4meFE9x9kdh5Ej3V3mMM88yPACBAAbx1JbifXWhP8QrrZWqp2QeiGcp5UZ4Sd1ruhjbJjB",
  "key29": "2pE6nS6fduwqDB6b4mvuNaytVYmSGt9R326qW1wyjaUiRw1PdV3pem2WXfVXz8hKEnhSQqyfhUgsLtZCWbJKMp8g",
  "key30": "3hmU1MHkkwX5ouSzUho21yXmJonLuX9oqsEaKmNVoEGtH2FoPpeDNfKFBSKhTtpMBuGzf8NWkT5KxBqZtWCgqc7L",
  "key31": "rPt9hJfgSHU2RjpPfAbqpM63A6GugvDTPDNKULNTgipsDqHje3Kevjj5mPh7MTUKmGZTzdcbrXUVfhCXXzZ3i2A",
  "key32": "5bkkwBhUJW1xgXXfLSf1K3ZeauFARuAJSYHbLefWLZvRJnWrwiciZ47puV7aFAryYiDu2Seimj1i9fCvwnrwk8vj",
  "key33": "2JvPhNk7gPCuzpvjL61uTSdMpjgS1Rgzvom9M7Y1F6EhHPtUyzLnvGmH7gZZg1SgvSa6bygnKMHqXt7DyrDF8zpr",
  "key34": "2XasTWXLfrrov7u3eXcHm9McrfoQtZowuRXoUnDSYx7R8zbYMT4jt7bcjFJ5JaDemW28KDRaJAfKzGwaFbhmdAgU",
  "key35": "3ev6w8pTVGf8f3ZcJGzndCPdhNQ38cbP8cV9a5MUsZSLnqoFMB3KnqhtNZutxDnkfVVQXnJnsuVohybcUK8qyhhk",
  "key36": "2ky24PMr5XhjiGzP5b9PrfMXh1SZeokapMpUCHqQRp4UyNkzrHSmFnb9fLnpdJ44p3hXhMhS7AP8RvWCdxz6PzNZ",
  "key37": "nzPu4ChvYUtncTEmbdchTXsQVA1u2NrsHRzFor8LtmfRprG3EJEb1Z6kjvpiayuqCckNvrz1xvVqsUGvaoo9XMu",
  "key38": "5jqs1tWB55QvccZckELzX4NmKhupTn5jKZRKCqqR5rcSWBZLFpF7PynrfBGDP3nmwrPyCJM1goiPy6V8FhxTPSsB",
  "key39": "uSpFg68SagjN7kHLDRHXrUoMNuv9RnHoWsi7HXbK9QUnsK3T4VR6uitNe3BLgMJeXH4TEXdhyGhyH1zGKVfu37t",
  "key40": "5jL1oAmt6x4c5Q34vtrDSPjgWAKVzDhohPW7wc7qt7ETsyjkxV6xfTQ9FKVP2iGudzxmr7BvHiCoEaxadekoeaK4",
  "key41": "59PWc9BVBBbXMMcmXLiDpeHL5F22mKfPXaeakKFvi66jibFn5PPmraBdnoqcjGzNFUy47gtdXEQPnLbLqayJZYGv",
  "key42": "3kFoi1CWnF99GLaidDgqHTrpCQemw6mYcKXyCFwMtji8mmCKPz2UAC9UuUwt1E6Ed5DNJWRhJYVy7tk35f1BR82a",
  "key43": "2uF3MM75csFkzXYkGLdnjTAH26mkV7MVPH22ijbW5wTozLMPzaptgtF7vHGb1rinDDF6aMWkDFCQ1Qeab3LQvkpc",
  "key44": "5XzVihiNg8M8md1dxc1EArg94gEBvfUh2KuYvV37camrJAnCkLAUy1k56vQScr2Zu9xEo743uKZG4RAUF74nKppc",
  "key45": "522q8fXxNbRcdQtihocv4BJdbi9Q497qssEWpaSEucg8G6Z8bs57NzfVF86CkXrMZazrmvxEqsxD1q8e1tsTvg92",
  "key46": "3YdK2KfXXiG4KwLSV8tq8aQ3DcTgzN9Zi9mVoNCRPFsgXWp7eEpPT2amJwR4MpEuXdKw5P6XMhr6RQMzxoSKZpm2"
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
