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
    "4Ci4uVAWdvxY1jU56pcYcTsC1nWK7NF9Cj7o4FWZGBN7zSoatAnWpqQhhdBgf8KMpN1trASamBgr4Z1MQT9tUca9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jGs7CLcmqnKEVEYv3e49HgYCd9HuhdNdawvSgQYEztvgJjZ9ZQPJTp9jYAPfwSvZJN5dResmf68BfgeJybfFHp2",
  "key1": "4D1Tu8jfpSPKQZXc4kkrTPgP9j43SLg6C7p1HbgKw65bWmfXGzyoGLeJSwreMiUB34pLYPdHBmAVyvjdz9S98reJ",
  "key2": "5VamNxGnVTeHRtn1msG9Qk1wYdJ1bi1yc1HMPvHQGcH7paroRAPF6AnjzSPx8G75YWDpFdgvxYEFH84vAhXNnr2F",
  "key3": "5dhpabcT8czEcGmsFUgSXGdgy5FSN2hi5azCf4WJuk6gBebZ5H8zjCA8DdTMNMFEdExXVWms56yXoXdwZyL93GkX",
  "key4": "57Y3HpfoqiGbE7SfyhrvW9EPcNsydKsGw4v5YU8qkEDii6rVf8kbKVfxs17wwEhabrwMvLufuXMx3LmDRCusc58W",
  "key5": "XF3HzbxQryQ1Kjzj9Bx3uTgiyD2U38vUcgfSs9LV4yDvkLcYZL1MkhZxcf45FLoBaSRTWgStsFS6rc3VUTnHHxG",
  "key6": "4W8LCUKccdEpLQva3HSTXTTH79EJz3yn3XL8eMiuiJNxJVGhTk74FXrwTBBxWTWG25CZh983s2U5TFbT19gSDWyG",
  "key7": "4oDLBD5j3r45jgukjyV4gPDsesgU3S9v7zvL6dDLTkFeopeMU2PSKafEFnULiHDiQrLDZgD9vi7suT4B7F5YDdnW",
  "key8": "3tzj3zStjFc7EMbrsu4wz9kZX4QXZ1JTSJrfo29zZnKynKPVBJDwRczABGUprnmWdseQGUgAxajc1rHjuDgZ8ubg",
  "key9": "3Zc4wsyggVzQKYwSvas3G5AP8EXc5ep983AXDqAjsVpv4bruziwoH95MG4M7B4iNj9q7VYEDeAQHs1Y1E1L1oB4y",
  "key10": "4Ux9qbXpRTBjg4co4RA7T1KkH5bhT1qwvjxybFwECGUihQQVGSfkM5j3ioHfiytSUon3PodhdfnjcWerSyAPxYKz",
  "key11": "1267rs1RtvFQkmwhyMxmbkhN6X9JxgSP1bzuVHGU2D3q6MhTQd1xqfMBbVCf3PuEm4FGiZb5LzrKrmDmdPC58DsD",
  "key12": "4DfBK4cM2WMUeKkpHGgtvJ9EQ5Nqt6bcXeeBNf6cSv6aKqkGwcTmiMxfS7VJPSWGirKymTHGbFm7dpcLLH1jxJ4C",
  "key13": "5c2txPXrJvVXwu77QSEr8wYiDRxqogQujGWnb1ZzCpM7VEVbhXa7ju6ybZq7JBwWGfxczTpc3zxWHY2zqbjHCttr",
  "key14": "4U4fyMsS2afofJTmadBGsp1WCCdqMBY44F2F3PcVbncdjmX6MyzFyPh7in63kxjzjWHZDUoTPafR8NBX4wE1etYa",
  "key15": "X75dW3xuK5Jx2PhxvKAXNx3Aq6M74Tii9pjTkRcD4pYd5BsyAbzm7gsBbe6fnLNp8xvThPtEyvGXqmM93HKUtRq",
  "key16": "5if99MQ4gBxWbxRkFmwVYRVE4Bz7bKRfEjFvcAwPNwSWWsM7L7qgRHv2ST6VsPaHeEoo6PmYKa3985h8ZY674LP6",
  "key17": "Y2G6WWVcx7Zqjs6We1aJ6ozMguzrwLhTBj8jWxkwCQvwuN7A6oojzh1uBndFCH7MUiaVCyNQU46tczUSYKy5K1a",
  "key18": "WttepG6fzjFXEEA8WtxW2niBE7uhAacRFhrbFdnd8omK7ZAcRUaf1Di9sjdQU5nstrczSR7SsBBwpMYrvbvw6bk",
  "key19": "58wxApPqgpbPJ1diXa6CwdKee2bHBnwY9quGujG54mUWunc8qGDBDn4KUns3ih78zXPc4i3Ah2k79p8dxKoEwRZ5",
  "key20": "48SV64UaPfhDvR3JTGpDXhi3VwGaFvB8bKtoa8TRLw9XXkMoUJb9Ew76z5kFa3XA5a6gajDm1PPx24efnotBmE72",
  "key21": "pNLj6YLqNodtz3ChEyrTVwjBZ9f17WxUH9N9u5h8sVJNhuNDpCz8Nt578vJjSWxGPPC6vegf7qJzVX3rNoJ8RjS",
  "key22": "2xx6ACk8nmEJLYU89VFn3YvpPFF44pRZZ43d7h8SJmhf7yBGYmJzfo8AQeV5RkbRSfDELjCGEjiTJ73ovSKYc7pc",
  "key23": "5R8QkzuVnvP1duvmLUSGRmWctoV8VXayzTdDWHrwzwrH1MB3PP4ts7EAc3obh3ocndoZXxYT3xozcM7Y69N9XAa7",
  "key24": "46Vp9r8hjMoMvJ6Eh6NuajSmFwBkeMgHjdEM8AGxt7DD6h6ZyDEBeR1YnFPNttjcSowtqLrkuJAGbHt7zpzqe9JH",
  "key25": "cmVURq7W7WJCvRekXVjZ1qgCkYxsgvV8GCk65Q3R6Nj7dVzPH1MUWh7m6ajFZituLNyxKfcnNRj1uPVz78XhQoA",
  "key26": "2tzViABoCkuKsDHCRLYrV58mpzM8xxKpxeNjQTTGULVzdKKJqXuAqKQMcwDst9VN8LeoYMcSEsKLgXb6vAtZNHVu",
  "key27": "3q33SRhGZCQFD1dDHEQFGEVXdNWrp9K6hnivQVJVLSHfmk2F1B3JaApoMnVCaTJswgtzdvMrjuG7RLqnwikS89Uz",
  "key28": "4jHqC4kwBu7AFXFMUeWXkzDB5G4JcsmzxnzNXBnxtwixSJodQvaSsTUnLjuvwThVL34HKJP7V8y75ZxbQPzMEVBD",
  "key29": "46mncLY9GgYHwrue3LXRPUVwUzE6NUifFvAVg7pLY9dAg3di8BK2pXiHPbgnY7oURCFatRop4h27GYfookNYvsSv",
  "key30": "4TWGG6G1Wnw6CeYakuBmuUMtwoDXJPge2FXQtMphAweY2ttghaQZ8KVNYfxhhTaWYNeH8ei6iFDT2kzBkN95YJ7v",
  "key31": "9ckMPyEAq3EcbWyFRhCoAzHNNs1GmCpBhMjkm73uh7Kzo2A1XYevUq2gmNWxHk2fhLVDqbjxaMwy9Abdp9LKF2G",
  "key32": "i7GFB3uFQQHdRhzviquZa28A6fWs3v2C635tQRopEKvRCV6VXb7wJcRciqia2w3ANQG4whPLfN2LauiSye5oPwY",
  "key33": "5rrnh7qdnNpWT7SPky5xrf2EbeUUQq5Ae39Wf2dmBgUsXJM1XQj5rnRCJKhKaNmxL1E52E8yLsnS2WXLJ1y6edsv",
  "key34": "55HWdHnzotfvYPZFsZfJxewHYDNcWE2yBcSXUpN64veC5hVk6oxk2ydSu9cpn2HzaTCHZfA9pqDLdLZ1E6X5RQEq",
  "key35": "2s5FZ7KX6m5q2osfdmQjDJYLb62GWsozh2kp9nQ2rwAY2uHMAsENga5J2bC3gEAM4NLTASc5ryGFSq9rm9STchXC",
  "key36": "4Y4YoNE587pQCtegV8xj9XWT2RmHbchxjpuVT141KFnoApFBYFDyFFpRoY1hoJWmB75PuTgZApUZnusjGjNAHbgz",
  "key37": "41umvR7gHjrFa3zLMLwpsJ2Ha4rXrfZ7Je9tyiSsyv8ECQXpm7cdnaVM8pdsggsxY97cbNpxirJiEo9eVFVP639j",
  "key38": "4zWbufxJQZxxV5tMe28KXtjWD3afca3EKf57eRUTp4vhyHYtpg1FhYBdFBEgvGrJMQ6B1WfkUvE5bJqnd75TaaQg",
  "key39": "4r2xkBs4guJB3pouxpZaaZoeGrxceokGcPiySxU833ekX9vV9GJ3y6iivVLb1aHwEfU76BnMYrWZeJ4G7qWBMa2Y",
  "key40": "4z754jY5sqE72KV1gHebgkqdNF48KiPET3KbRBFznoApCsjEPKN2iXJKKMvWQPFMrnm1p8cqD9Zag32RpFCNH9p",
  "key41": "3Fn9ZQUq9JDZEqHQzyAzr2EuhoDB3wRB2JiPYMgRfNL9AatoDkk9K4eUrBBkCFHNaoYZtFe8XCybrH3kbR4Kdv4f",
  "key42": "2Y8VHgzRGMr2XM4iKWJMUvCtGGjmxXVrexEDP3fZF13Q28SrH2PXDNWbpkpSQfro5GA2jwC2mpXhfxyNr6XsRxNE",
  "key43": "5hofx98YN16WRK1WxfMct53djhVsoR8bNatgNpcr1HCqjp1HY5D5G4yM61zK7b4PAYRBUPiorrwLfAYmvZfDaPGq"
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
