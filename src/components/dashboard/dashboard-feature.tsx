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
    "3xqWPkJjE5MpnJskq47VpMLcqbUk9yLnecwNLcMXLbx7ZTSNFmSFGrrUfY2hhtKxW4AN71rqe9cu564hXZQxUuN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WJbft77Bn96A7vRo18Y7rbGzpUkwebHhQnxNmG91DBA1Ms9nUWzUk6Z84RUDqewnibV4dqXZPDFqEezH1NGxA7i",
  "key1": "65c7crFoMehHKnebSW1bbKioDxkwsFRDXxi5BBF314DiqyRmUy7QUf5bHwcRgtap7JEmWZgPCQ1tUVueEDv9Tofr",
  "key2": "5UBGhYSGnK3kHBhcu5pXPM1RXVCJi7szExw9dH3fmibZRA9hbadW6DyMRPeRp6oyWjKariPqZexAUjz9AHRnvLwt",
  "key3": "2RB8c2ZS42ytatxhgmfrSWwLaA1gsfQscYk2b9Roo6dLe5Fd6ddpa5K9EJuszMgiwKEKYwJ9AsYAzwKq2bePtEN3",
  "key4": "32QB2uGYdqQX6fMAKGSBFkAiVgQNUifZkhepWMw4VduG4GeomqRRwq4GPpDPA7chCHzfM8RSeYVzu2Xc4jDM3uMA",
  "key5": "5PFv25MFiMVYWsCw45FHDiLUzcFDup78ma9geL29rZp1vv1hneyLUpXxxGWXAtUKFo3U8VAVdT1rsWyTqgV3vKHD",
  "key6": "3mtpDLR9LCSFuZ241EabUc1f1mD36TKYwmHMRYEJ5sKJcmBJ9vXbdcjeJG4pzP5QEAqwJj5UZ9G9AqvEghVzdpzD",
  "key7": "5CBYS15LW5NX9fLuPmgKsmASFY161wGiy4jQRTZRQD278tJ6FHX1sLnfSExc99NKTUvFrSUA7BdX9RVTzoExjcPE",
  "key8": "3B4iQFRhEFaEdGxnzG551MVxivNQecuD4sJCh4J1xXxkCWz9V5F7W2sxGcMAmzkv6VnRBExvJJjmeFn6rg4sLGPH",
  "key9": "wSmWwVqqiv7c3f7HESQ1vVjxDFLHMDREQDDjdMapouVCcsezxFJ4pqUsD8xKQWxNSy8G3G4TAzMNaysAqLjtShJ",
  "key10": "62YTjAc3UcFWR8Ut735RWvnG4eki7tTC9Vgjvo4jynfbr9DhwnanSDTVdsHhkuEbE7RUFQ7vbVgvkci7uFKieSPQ",
  "key11": "aVsR976zmLc4Lzxz3J8JmGkSPX3VJv7GCh6tBFZ6946zD2X27GoFT7nu3yH5QpuMcXCvkpYrVEVFhF1PuNSQ9ny",
  "key12": "5BB3jJrwJH4xEBsmX2g8AxuNNAd7P22sGrF57tgTb4B4vb9Tv4p4boRXnjw5PoQZgfy3sBMv3tgedXU9Ve4jFtD8",
  "key13": "3qMkAUP1rEBdARbqRct2HXo4YjdycyUPXHfoZQMmZ5TdABEBJTmDMVd3LLq3qFV239rqr1mv6zkLpKD4ZhHnjPVB",
  "key14": "2LQytNZzWeusnmU3rMny2EuSdAitKbG4cRGSphHfgdsXPH6gvCXvonqTo16uqzoBiYZK7N3JfB1HvErsbC3KHGVL",
  "key15": "4XWmUnatj6ncvz4V6r8hto17HHjAhrv4Uj8wrEwyg4VAe25uqDBHGe22uc5v4Ccog6PJCUYrmS1Uv2WVGWtkv5Nd",
  "key16": "32bVCR7srZDxqpTzG1qKHVvhzcEdGFjhqu4qh8qVpDLNcBTw3VmkVvc6fZY9YswHewyQABZgXK4TbDwGqdQ4pEF3",
  "key17": "4GZ69ofFQUnePhNrDFY1FrwYN97Xti5B5vDzvwfPTguEmsgEwvkj7HwbyP7kzzGPndy9kuJGvM7hx8GweY6izi5m",
  "key18": "1FTYCcKa1k4n1Zwwububfq1GLji3x1VMFgrjUrshPFq83WTpKbjrDUK7meNFZmZfqkWwgppRWYYpKPLizqNJqgQ",
  "key19": "2D3XByk886DdJMT6hD4RypoAYTo4E9NVQLhtshhrvf1PD2Nf9CKfLhSqPhNkTiJ8HhJKDkPSo46Wr2cTGbgC67ru",
  "key20": "4oHy5jb2znCWhLgSTRqJWsVQx7oRAhrJSAY5qiNFAqYb5Rn66brjhxTaaMWQUBGCkYNDFzgcHKCshHTABoTkm2rp",
  "key21": "3xAitnuZwEfH2fhFMYVExmwochNRGLLpfDALJNWTP7yuimLvrNxefLBgzUBfQBhVDr6YA8A99yWZNLLN7g9ShnB5",
  "key22": "2jkPFMfAHkmgszq2A8ULSMNML8ewb9jWj8hnsPhEdqdwcxdjRHfuLa1t7Y4NxHtgiwwxEsEXiBn9pDA6cP2M56uW",
  "key23": "3C7mxSrDTHa7ESQxaEt2FMaqrqKmvxGHCGdA51fPbQDGw81ExZwKXUEEsBrRcdUCQ31WmEJSEp2PAAZBrMpGVc4t",
  "key24": "2XEuikcz2sQPiW7DQzN7sjH8eYHVoWqzGfoVsPYcMS48Jcv6RHixEjxah1bHURgWSNx7P3MaFuw4UpVcjfHbWM7H",
  "key25": "2J4EAQ96815E8YbKdbGqjdKxwZx4LASJGoKXKKzgpLfGxJ8tqXuR4Rzg3xbh9YTNiLAj7azGx3rHFXjinoGUBDFp",
  "key26": "4F66zUTkzz36Cko9MBNvR682EZBkwW19zX4mBfGViXJ1vubPSX4krFhA5QnMJVp7dm28TkxuQjtZWpFvKn6esaRC",
  "key27": "ntu2tSF2vvKGTP64L7k3MdKEaMcf4w3BoNbvmiUtkimiLXnDhMQ1G8gX15XP9xdgp2RHHAZFz8vE6b7YNyeYMGj",
  "key28": "2hM6QXZom5PfS3eytuyN6mydCKZgx3T9QoK2L5bASUt5SbpcYTzihF2KEV5SePn6FrWHN4WeKHk2wGNxTAy3oLoi",
  "key29": "heDRLHwBr9MRoA5yZCedvgsbgM1do4nzEWso4jCZ6UDJdjASe8BRpXnBffejDkKkrwFsg2XXDvbebq4v1659g1J",
  "key30": "48vbNATyCnUB7AgQXtnzxg3xfJfoH879KK6YzHaoM6BT8seokby5HpqM8jfFEhJ1BZUzgKTmQmmRNGugHmAmgxkw",
  "key31": "4iq98XmGsFasiPGdktQHyqm2w4StovccerZFA9tP7q2vfB1gTUttAJmojXjLuUJmrQqfpw1k1djJDmcYALk8SsdP",
  "key32": "5cjut2HBm2o5e7e75XtGo9BMSbphKjyhDPTofakm36QTpkntAitFrmEgTxHhwSK1g8PaPvxE71wANoPSGdJ944ma",
  "key33": "xY5K9t6BSvbCch9vgqynUUDD5TMvnca53aWW2qrHSGB3hiqb6BxWCirVmePb1zXKve4X5LVfFBpP4b3RBgZCMNn",
  "key34": "G3ez91nwQaKXRvS32PbRfrwP78XhnToiHYYRfXVx9rvQK6qWnL6sXKvFHPLAHAJgcsL4Hcby9vXPKgJxHxyYaLE",
  "key35": "3kcHCsGYm977bJzUQFDjgGjvbLKL3cJ6KCnXpLptZ31h4DPpAkG1mg75dg2sk8kXVxNEQjiEgmhgvYbFVZxPz6ea",
  "key36": "3omT2GcTDV34392uXJkagrX1j8LPPhYNeFPGrh18vNAt1Ni7yd9cgi6pDkgnbpuCwbS2LS9FKoP74dypedHhdmGV",
  "key37": "27pV9XpD8wneDuLycUtSqe7pAZdZxfXaJ4rZsuCB9qkJy1JoxJCVigMYedk6PBGLKSSKiW5sAiRektsDKioZ63wQ",
  "key38": "33SPynDKpYBxZUirmQUG53vWxtvW9gTkmJfTdbtPvznBzvBnmG7PGMc4uZzr4QwVK2pKMsB54P1ejJEQPzVdh4MH",
  "key39": "wQNgrKV8NpEsa2GmUgGKYaRNgXaAmntxBPnVc7WZcNgzAtWU3H6VQ9wW1fXBj1yEXKdBgpvwWbf55H2AaHZ12Ld",
  "key40": "61icnWRbf99pZpeA5V9Ps6LvWWYUTmMgJbKHjTt68vTx2SZuFefXBquuDVBGst9fvUV9ygXKueHk2N4N3dJNVGK2",
  "key41": "5NHPsym5FBKdGRXqjSLdArXL2RrKVsYDbXwo9HBhhDzVf9ecpQNmHd19YDzUfHLToLjDEnVeDUTt6z4SZhXE7tUi",
  "key42": "5DAvhwDsZxMs3UV2ziuLumRPxsCfwbJrzCvmhhzou8CCamTDTab5ULuG7YwR7rEBYR8kKPMNZczw2Zwi99HzNFhv",
  "key43": "2hvWBbGcYjbXnvapmG3t4fqNUvBQNTG5X2KwfSW3ZzszzQsFdxdQ8E6EgpcDvYyU8LWYWCZZwhqzWLmiXFnmM62w",
  "key44": "3VvXmpyTTn8d2detdgKtd4irmgFRpcN8VKjrUucWZCDaqAJzH23dNh6bpo2mkuGSoSV8raf7Y3ASHSD66cob7oAc",
  "key45": "5ocwmQHsUPFUis4dvdhosbZzurjM7KgRHyrxtSdmBm2FMaEofGNcohr9y82ZNsmGWRMRCgmBVKtUWKEeS8Uz7FN6",
  "key46": "2h1jdmMhxcwQ9uTrEHg6fvWAF3NGbnVJ3ExrTJTVw5Ecfw5StAPeahhGjJUyZ19FQ6YWzKrUJzJGwr7uGFbCtPqn"
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
