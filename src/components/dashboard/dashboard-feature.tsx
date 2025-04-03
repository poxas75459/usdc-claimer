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
    "4dmEbwPNo8Aq1sYw3gPY3w16HhQccDvqf22o8wXKm9CNRdVLB5jVbcGE2YtgAb6qTnkC2X9Z6RUQ2LuGs8w4LQ1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9beAc7684kAhyZkvrwhLqqeYJ4b4wwC6bbF39ACBmhTJRpDymuCfDZgMV8McMJvmBc62ossz25u7TY4eqByFmQi",
  "key1": "3wLok2vbXGcfXkTHRZodQpnc6n5zRrio7cFcPbFhyrChBUfn2gJjCcdVRLLNcPDnPicFFFAHPmV119576uMgQGRY",
  "key2": "hF2HArHVZJgTwjzi9RC41Hj6NYijorBAfv8E18ZWGivwiSPQfGPjPM4LVy6mJPgHLnMSKGbJYRv1QMiRrz1wcg2",
  "key3": "tTWCK9BpSWPp4r9zTz5UuhM73YzLHqyX8P5AtCNVX7hWkXieR8ZMRxq8cUgrWRn1YsZSZYEjouqVKCrAoT8LWwW",
  "key4": "2Xp5uUMGnyhZt4kYNLSsMkhx5RciRkjDh2p2mSFNThpTDsLaezj8fPBZwt6BscJ7DiwBGbqPVnxRFem3cjGN6ywb",
  "key5": "aWo93jkn9sjToCHW3MTa8WR2pTYg2GzzEdQjJ5JRLc7ZkG4LySuiJSm26E2NmGbRtcm7hTnRRBuK6KywyziC3Co",
  "key6": "3TDCCwgvNXTdVCD2p1tpMeDh6s1VYnCAZ5y4owzaDssc8gwThrixtBnSKjch5BmN3yXmYnkSvvGwpeyomPQtmsxg",
  "key7": "5cMkus8aJVxmuDFEL1iQrFmoeR17UQyhws63yKngTjriRA2ddNW8xW4ZMD3EZgb2tJTD1Ms6KXknVguQ7KrdbhJN",
  "key8": "23W6VWw52nRnvfQ3sGU1mT655oSV6pfRfCnaEGjpWZRHtS65oDgQhEn2yeMhucoTyF2ZRpV1k5U44sa7D6VnwJ9P",
  "key9": "DogfbZbja95kD2xVDNXheZTyaVPehuqdqL9MzbbiqgbMFH5B9PHZRsifCJThJHsBWqMNbUc4oeh5uHWu9c5KWti",
  "key10": "5krVPiMw6cxfobBmmUN9oFXpct8dZa529Ngs1JD9TGY1hxqW4J7ZJze8cdqqaxs98WT45janfDx7jofyKWv6XedQ",
  "key11": "2RqiPWAYPWJKQLrfq4ZagaNGTRRZW8fSrQNBwkxBZcBhg8P6YpD9j4ruG7rJQyC6gR1vTnq116yzmVvw8rupLzkC",
  "key12": "2sdnivnvnCtevsd47ocXFuqrr16ALYkkGmbSTrWXcLJUNNeoZszmtdUNK2yGcfqU9FTQQh8SFLL86sDGWJc2KNmR",
  "key13": "3cpezdKfwTa35vowyrrrLPLcMKU8xrAVh39NAzp9naB9JXRbterzNKkBeM3k5nGN2F1XMGjFvRJp6iex2dA8E6yh",
  "key14": "53hfDSG6CbeE2gLFuwURjnczdPjQU1C4rtWUxGbJwuTw9UJMZumLPe5EGfkG8Do1LoNoqoDBRU2TtC1y19bVF7ND",
  "key15": "4ArwBUSt8x58jeJwrdm7ruYdSyJq2ZwjUwJzhjyj8z6p8QcjJUfEfMYXZPW5KA8FWEY9augrkjieSSnywZ9hJjs9",
  "key16": "39KdwDr8WEiqmFXWLKSDP8VJVgJoecRCLnxSVQwH1qY8YnwkBFU6M93H5bndCaF7KmYzxcMoQHyLzKimHMg1NomS",
  "key17": "iducvGXt2Nk8uRLyfBctSCYmjgw4utTLV72tv5hN9NUJwaH7J72aFNq3Ueh6X4XuLouTeohV5FYUNjKNiRqv3BP",
  "key18": "5iLFv4gDDB54Z835gvbXduY2DvWJUtCmdEEw2kECiZGK5DoWCLhUCjvJuZpgXfpmj75hWdyND4FLjBkRcLkQ5iPA",
  "key19": "2mdrHfEYJ8UaRWhhBcvqtj4tTTwZAXf5UuDExqxPJR97vswfwxoDBPCXwxJaVXpMfVCDqYHGbbQDYvP5gfenPSmx",
  "key20": "2EAyA15CcAe292316tSBzXiFKtfFqcWkUCF9YHE96KtddmJxyhZgo4xgbpqtsmEt3dDtHiX9XknVK1LnCAKTMK5M",
  "key21": "2TaSSYkwxjFXXzzvKEdx9TXCZcFWJrKLXQBVoneoUthuaPAcMUwDCTqSNBY7bqk3uUUQ92nP1Qq1bpuNtT5cHAe1",
  "key22": "2F4zmZPDEMTfZQknUBPWRVXCH7DD57TB4yMMBHN3w76nm2TjFmEudzoKqDDn7yVgRvqrNUXMhPJ88QVTb8aVBYDs",
  "key23": "M1aGv8cTbkUQZimdxEjttcZ81CRMafoJSsfXsZ6hLCN7xzKXfomdQpt5wWNDmg2Abzd8Q3vh5PKxETuHTwpM39X",
  "key24": "YDoRtScLevUQnH2tgjG2A1s3G28oFEkFyqL4Xgy4VuwiakmV4JUsUWanRwzdEqrqRY94bpDenFWQMqspHd6bNng",
  "key25": "DpJ78craFVUMhWo29rCMB2frPYoRk2pHRvTezYXTdqSdWddKAaapEQ7yUrRbdJntVkfU8sj9MXF6mX6ttTQ6wwb",
  "key26": "5XyGDFU4czwYxbmfejLM8pjd3jvfeW41BcDxmU94JnLRCHLWuiUMMYupCnU9BMp2cpG6HyJ2qUXSphQ6gXm4TjJR",
  "key27": "4DUwDPRRgtXvpQd9ARnxZfgL3myRDnXGMYiiqEbgwSqy3GTGcGQnstEznyNVJucyJUkahSBWAeFpN6snRdS8Yq2f",
  "key28": "53S7zHXhC6mWnGiYg6Bnw6QaK5bybiNBDVb4wU2zVQCJBLT8vXrn7jDzxdTvGQ7WjAGdS3H1w8rUaV3cFhj4mY1T",
  "key29": "3CfbWVv9zgvGTdVbfiNCELHymzsvMnjM3RvEt5W3wyWRRTVGVqvArxXEvsX639115vEyDCwEyasidVXZ1cJmD4kL",
  "key30": "4yVWYHbHeYB1RxfiXXtxsSsYu1JUcPRWvo1asRY7Cz72CAWkVdb4EzGQhiUPZ1Wyu1x6c3YCPuTcxnaAif7eybuF",
  "key31": "65aSRBhstS4iow4zUj9f6uz2vUrPQNVTop6K3t5SA2T9gWxeUDu11SE9ibv1bzcxHzKmEAmWG93tD4Az9qWUCC9u",
  "key32": "4MTU1ppooN3Kn7VXvUs4W1abNxkP5qJbJUtMzPYpYFSp9jdjWErw66XJ7MryMg1399gLWqvahZtXogvGGN8EY9Tr",
  "key33": "2JGXyiz8enxN53yPRVMjsdxd3TYY7zYyeiGAwgHtEacxAbx6TMjHp4Wi7x1UUTfhghmteeBYYV6efBHRWEPZkFmZ",
  "key34": "645r1EE9dWBFSCYLEFZWMpKGyNQXk1PhRvM74WGW5pCphEQTUAEafNFQHeyv7ZQGoW9uDQqAAALiTmf53zKBiuQL",
  "key35": "5QvWrmVTSpxwAfDGM7f94Noacfh32uSs8q8p8Bi61p1tKTxMRkVPr2ig8AFM4tohvKwBnmUMPeCX5SCAB1QbMvct",
  "key36": "2xCpeJCeH6NF2SMz8TxyjE5rvFEh1rBycd2ajcgxS4ibuycmHz7iE6LLhjn76A1jGUUy39VLQU72VhKkxCpWks8w",
  "key37": "4Aa9DxTiZiVFA6J1aNdtyt8QXngALCKZ67tQMUMXtqPv9X3bYQZXzRM6ftp7RjhQHBspDrzGRoqZrZrQpR9rfg54",
  "key38": "5tWYeumDVeH1YtzBLVVRoonDRquZEgsc7iLQkesypuQR71YXupWBivSwM432Jw6vQjwKE3t72ARzNg2banui557d",
  "key39": "kwHwCZDErj8GLdAag2gFqVVh57NqPpoY2jCU4E6UYUa2DLZiKW7nrMGW6R7Z19jMidJs7gLRDvujEYai4obwL6V"
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
