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
    "4TmQXLFUti22feJrnu8hgr86cUfLsVVuK4RMbUsMeLrPjGjjaHfcm7qn1WXQt8tQwWo8aPLqEVPgkaZd4ZSfg3HJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xBRvAbQi9YzDrdvb4QJ5girkbhf9pStaGBrJ16LzA3XP4DV2eSRWxYo3A7bWoH5XPtAZ7jbwQYVKV6EpRAE7BVU",
  "key1": "4hy6siYn3R4ZGJCRZKEtgkiUjxo1KRBEbxRzBchWYaQx3qTzMMgmWd16LAAFZbBWvJRPioSUBmh2ZuXZkp8j8cKz",
  "key2": "5cvacYx52RdeBBQ7XRftmTPG8wNo5mDLgNu6BcKctxWUFqev1RCQ7Y7WFY2w9tjFfm7ni5YiBiVU92eJBtjndzdQ",
  "key3": "2fUtSazWJppnnW3hVeLVoq871zE63jMX33qmfiN81b3ZjSDXtLWpezqkBpVpKPzVQTbQd11L6964koL1HNw4wsyw",
  "key4": "4GpSDSpptgc6eQSBs1ihQ8GCijHeHMgHoYzFT1gpU1BzEw8nPj9JfveHQyNx24zgNBfgeb1EqwxVid6mztWj1cBn",
  "key5": "4Dvz3oVkbJgwvQTUzZRxSyTL17irbjZ92x3RXScU4jzaCjosSGF4iAKZahNhJN625XeBLqMF7T6QdGet52X19E5a",
  "key6": "3Gfa2P6wE5htW3JJHnt1jURw5nB2HtN3ERUgv5xwJqpvARtez9un4WGWdoBsuD3bPR5DeTCNQVpo1r93SMaS9Vv4",
  "key7": "43WEXkCrzd2ggJP2UPvc6trYNQKEm7zupe8JsrM3UuwMfNCtJGwRcqM2KPCpf7Yz43a6ePbrnYEJwrnJgxa35osd",
  "key8": "tPfmmubdKteAFJBDoop5BfgWLCA8wR77hqbUSwwcpSB1w7svVsG7UpSxH1yCfhygjroPuZXSphcmcDPgf31YRcY",
  "key9": "81p6vMybd3F4iYeXpsA5GqcNdc3KDfGEQpTTcvaXvwPbybvL8jPCF1cr2nAZKZZCohk3wuAbG9KdqJnwDCmD2Kt",
  "key10": "4Fk3gMmNAuARTEpFvKfoLT2SotqzMarURQMXHTgT3Xvi5Jr6qR2LyJhboeRKNWidg79b7HW3vJinUiou8JrdChZo",
  "key11": "3W1ZgPtivVMTdTayCSRvMeK7mTpsodxnijDNjR43fEdUfJJV65HbqwT6aTZomNJDGDDxgjBT59Ry5Rm7DUKV3Du9",
  "key12": "34aKiD2VnFEPzAHzyFMcAsxjoU4PMmi97zqctm8yhJJvqtYiGYfo96whKZEnteNYcWZVECLcEz5EhMp8pLRZEzeB",
  "key13": "2roHBh4mpg9pWzrk2krNYbxSizkuhmZ9extx36nF2fW9DENKhLwavBMfruUqBmgUTP9PYYcuStS9ycDBfQcd8xh8",
  "key14": "5Yowi7dYYmVr5sWvufGAosmwUGdW2t9i1yvSsDWJTU85Chz1wNtq1USfzuS9XLX5hxH64eqEsC9UuKswHc4bSd9R",
  "key15": "7oLrt5dRPUAh3xxvZvqD1AmW2pw12gSUdJnittiMnUnMSUcxiNA5shptcwtwGM4Ss6UQwXAXthobN6CpncZ759b",
  "key16": "EpGWTZg5nMTsy1rLgWfUUthmWGfMywTLEnUiwgcSSE8U9jcJeL5CxybCJPLZTUJFgojJrY7r4itie3WgiXGWnJM",
  "key17": "3XdMCZ7bDGJevHwx2tA6naw5SVKYnQsLgmgGo59vUPHXjd7NrR7msVYC5ne3wyhfFjdkq9kxJFH8kpFbRZkUTaxT",
  "key18": "VVB9gtY3ezkSEcuWAsFvf5eKXDsN5LLcLsRt4j7op8j98afx3Cvf5875AX2AEaAVuPTZvF8o7jbmxk95FCD76JK",
  "key19": "3LDptW2NEpNV91wQHAuqQ3wRDbP9EcapZ31hM69Q6pHV1wfxHG9LbPfcyJEcHxXutpSX54xJ6s6SAbsaiSdNBQ7J",
  "key20": "4HQVZadfQiQdZVWqgbgtoHuUJyBKRk518u1QVaT6sr1NFmxZk9HWVPhY79boYwAE4caFCjTbiu2fqg8bLAC9BRRH",
  "key21": "5Va7YpEVT3g3Zbe7aXyLhNh3EhJBdXH9XzCLvrbZ81p76EtdUwxne7k7phUxM3pQrDSDd7iXcjVYEyxMJq5xqjC4",
  "key22": "52eeRrK9ufMeubQc7Aft5bvfHes4G3XymU9YbMVrx9eK49t16DXzSx7sQyKGYvZV7aHUc18mn34X1ypArRGqQmAS",
  "key23": "5cVKsxSq3eknuvLvQjz1Er2r9tKBshq4PAKk6eHzXpfKEDZ7UZnST1DJ2ZDfpHysyydwm9AHuCpKDpYDbw1yX1nq",
  "key24": "2rAMUZTG6tdtFf5RdxkjV9uL88MLGYkDLyD4X3Pq3yq3GUKEyCFUH9SxKNaZL18Nh5FjnsPuG8Qe3kgzi5EGLMP",
  "key25": "4wNngRzmA1LgXr1Z3KjE3u813R1TxrjruuyVQfChXZMeXdaDpSMPUXj2WT3bwj8jQfmVkuqvNuAdnrZ64SbdZJ53",
  "key26": "38G8Be9PDwXfimqLMwzRq5XgsNmHjfULhuUHKbUTdywWrobkAbNW9AG294TUFED5nk1g5qj4xXwcEwNaRbum1jfG",
  "key27": "3z4eodh9rPHekSrmbTE1rjETNnyX1w6LB5g5SctjLMsbWTTaUoiPHyUoEBZrtsxMwfatqSvEmCrwNN7NKesvPHBv",
  "key28": "5YbFHnwDmaLpkKTwJsHQXc8fAAKTyWvYeS3UxyQKdghkB84F6UJLwGkhJZixrKz9ShM1iH6mfBv45xU8kSKq7xY3",
  "key29": "3btfgaX1Vq8oTw7aQ3oHuj7GraUb6ZQ41FvnTeyp1wtzGGgf3ye8uZnw1DTgnJM8E5mCYmusry5LeEi7axzyxjUP",
  "key30": "5K4WcCQa6oJD2vnqCR9dxnUwg4cEtKw2XvrtVnuouhM8WJrSiXc4dRmvzY3VWhoZkDzjHDeg1PGo94unEDAKTky4",
  "key31": "56EEA4rk4mVPmv3CM36JKwnSp558i54Sx9S2KtrFGvxrywjnJD4PUTs55GtDZZ16TzmT3gk9X1MFPSCC1UDf1CQx",
  "key32": "4nrsZmrpsnpCDFThmDg1AMpNQUP38jmTSAvQMH5RWjsy9geiZi7oBEazJ5H5oZSq4yu1HtVB3oYZuMyNgnryT75f",
  "key33": "fbjXVm6ALqX7goihvuDhcdZjjyKaE3vuYcCfJiT1DRgbRJVhJb2pcR3WxE5PYEC8RJU7UwoM4j6eDt4BVt8nkyZ",
  "key34": "3kbgcq2fU29nf2CK3T8DNHhv4Q3rFZzoroy8GKsXJrRDR6GqrsQpotQGMNciij6eTvzpDujgb2rYGRnyUNmCszix"
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
