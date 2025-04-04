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
    "tvJJNsoTDnMGLKCJp4u76BgKNoDP2fcp7yqwJh1k6PRR4RbygpdcaXoKKbGmu9KWSsS1xCG2mD5zp8Td1g1pmjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CAd4isWRHiMyKUddSrDrgpnE5x8pGU4b9JiDV6BY6EDS5CBJEeTWTK8VuqvNF42NhDn8H2WtSmAcaY6BUe5b57c",
  "key1": "3TZ6P8srar7iWXUQB6DUKgwJdRhJEGmMiFTJ6ikBZdMEwAW8aW4Lq8Njhqjnus4PzrRxjv6cbG5zGBtqy18xkiz3",
  "key2": "3v9Rs5VD15C9Da7atooF9q5pVBy5x4eu4P2NxshptjcnkspbRVTqccA8TgoiLcULt2irWyF28HqkumN8eH9jA3dv",
  "key3": "5k2k7j9YErYANQJkGRs2Rz2uWoA9hsQkZcfCEL3xbKi9FRGj8gP6k4bab9xcSJUM1YQQE6BACNxFgxEGJGDctrPz",
  "key4": "4gN6e16TbjvwS6Hpr7M7uSJvdpPXNn5m9C4X9VouWXXNMaGktiPFkSHi4ZdfjF2Ui7UV9sPGuFx87ZSTkKs2T8aE",
  "key5": "53XhSNutZjLtrQfo15hTNLXJxNpw9G9JbcbKzzFUWcUKZhh9WvyxjNvKVPkCQGkvhpwGwQ4QEENXrmvm12DoyqPx",
  "key6": "484oFnBYUzJp29CYyjP4UdWqpXy4A1G8KC3SBaxTvrikcJDokarGmqrcrQCP5dfnjAZxeYgrV7m6Y9Qdg5Yx8EqB",
  "key7": "55bQa5PRFYuhTWo6kUQz9KgKCdvErETxxwW55S5LzxCcz3sjjaeKHMzXpyLNRDPN2MjZiz9gWe5zGH4qTicVqT6s",
  "key8": "3nT5SRmJUeSMx5c8u6qKy5e2tVKUrC9cT8zpCt78HWVN3deJnp5fFzWSJn7DpSuY1NUCpu3Xb88FaJPSHysneb3k",
  "key9": "47ZmAB46LykaC7we7h9PsbNEjnnG18aKc3DdTB8Hd5HSRLjeGqrMraXsLYeFtQori4DDtnQSbkmvJ4dFvC8h7wUR",
  "key10": "5DDwyU4KyhtYTh8oGexiCyLyrCGSdriohRwDtNiAnfjWqYZj18CGNQbsi3grgFuFVPbYfhTWMP84ZrdZw5eGFgtw",
  "key11": "55dW1zfNf7QPZhFLVJ4ZcKo43YMLEmgwVYGRL9CvfvmrCdCDdsWarrTQyKaaoF89ZrVjZx2cFooNcLjtgD1dzVWi",
  "key12": "4bcCWi2RDvtYU91jY2gLWwKpVEXT7hMR8PgU7QceqySdxEvYC1AxDtsPS4DaEViHhfhAc2i6zugHmAon9CBuBAS8",
  "key13": "2j72qp4hHwXiUXfjFVi1zfMZqqYKRfVW3qpwdcGKGyEhEZhF4Re3PejY64Trb5dV7DbHNZCJ2BeHEzCKPFdrpSC7",
  "key14": "4iCqnVNtwHbJrLE3Y5je6NSYXN7ns3p5UmEcqN7xntzUPo3R1ssteuQWRa1VHrxZBbhBz5XXNCwWaWTJMcfbZHkx",
  "key15": "2hy29ZFJdCcXBe6jGbkU775GFzy6cdQtohGGjUVLCAkkT3hSGEEgiQw8aFuRgWhms61UaovE8f7upPTmjA82QmBk",
  "key16": "5BwaXpYf482BoqihwjJdQBRFVRgvZfQ434LUCKRpexC6S4FbCwbTUu4NNNsmbRfN3FAARQZH266z9Zj2xzCgFsBM",
  "key17": "3UHjsP7joe2ym41DR9yqXB8pmeVkws2NgC8xMvLTCgg5u7wdJLuqQ1zdiUNHFwgB8jbWGWAXGiFbFAM1cb38Feq1",
  "key18": "fdZrijM7CUr33tBQsufUU2ozo6Sbm8dUArFvtt6e4CYXKar9mHTbZj33PVKyTv1BWCUm58B3pFqv9KKVZK8Vv8d",
  "key19": "4W1fqEWiHU3m6uuFhLpN3PU7jYjdZVVFugFwM8qUTD9vrAEy6nzyFFiSjahkLBqvfWUvVbQZwLcEesxoGCjNu7Sq",
  "key20": "2owWi4dtCRrdJmuWUTC3YcTh5CUvXEjfPsN7jeqnVFD5ADrTubMTWrUmRQKPaVxFXuDfdeTLZnUfQYcpjKAQFSSv",
  "key21": "5LoBhqbo6hCN7qzUV3CCR21D2Xzzzfh17SN5VQYvrFYjiC9BJUWwcHPeAKE98BuzZJmZEgfsnPZ89dDgyUWVYcZ",
  "key22": "45pbZmU4q29FJAMFiFYYafFpPPYooMj2SzfibT1WMzEGnGA9zdhAS6UZuXoeqPSbkvHEJMkSPV4Ygj7vMYz77i2e",
  "key23": "3UjfaQhrur4HnkUncBRsSmFuo2mssC2kwcXbXnk3Z5qtQE9m29MyL3Kn8x8FonhUuVdSxngicKL2PzfrEPNySSVT",
  "key24": "xYL3Yz1Wt4Jh3CS61FQ4hc1GDCMqaEKQBsMyryyeSACrgeDfDhorcE5RuWi8uARttifdpseNmvPUJaWqYWjywgn",
  "key25": "3tXq3HGLV1vMtQA9v2dXCf26YK45BUBh2MtHJfNJvCYan6oaeb6gZP9VrFUBbefMvmGdjkHWyoq5VbgiD47uvcua",
  "key26": "4UZXHoHScpexbVhkB5a6nM3uDENYGQEGEXUeXLMZL1usduFbzeEzeJaQeVW7H1c4jorBaAaiVhZfSQFJDNVHe9bw",
  "key27": "2CxizdsNPNtSPE4khfgP7hVbwtjCLqhN5ecsqXrjFNW19acnmrCGP116pbZE43kVuy6beUoRR9TT8VeKayLxqYR1",
  "key28": "2JjmWPuZ8wRWUaALhm7Nxu57qXxx6PGWQW1htXiV5SjsBwq4cUiyFqXg4kxa4bh7p313ssDN4yQT8BCkSNr13NJJ",
  "key29": "4YHwu6RHvJYUWFu1qwcUPKAgdVsXDPVbiRGoeyJzfCpz5ff99u57dGkEP9FNbRvC8iMu5F3sdxrUDaUP8rkJqj2E",
  "key30": "2Bm6iq5sCmvBqd94LGP8SxMXgWMhbZiRZoA1Mxj5fPGowwS9boVGMMdp8Jwo51Xr5g1CScdoxqh1jKnT7NJXpmuG",
  "key31": "3XRrrPkpzJFKmu127ap6pPgYJ3NYMMTUBChsmMTqB2ZZFsDrSKJNJzu1a2fcPEsgWJtvVNw1Do5UsLaQew33aZ8U",
  "key32": "4exz6vwH1dqohDGeKZk1btpEC1ghtp8YfKMW41uneE4QrV5q5mf8EvYfxPZ2Fms56BK1QhjAwvSEKFXaLimZMFBy",
  "key33": "2UsNbDeobu5gFdaKJjE9t7qx4kvB8Tu7aMt3AZZ1ooqDGtonxt5UM7qRNi5zN6moDCJbBPwVNY9a1ZfMr4aZyGH",
  "key34": "3eFDfstUzNRZ2ka4Xp9obhg9B21FMRjoUBzxcyAdXkTwfAbF2JHpjHgXH7bG7uZxfkiay4wPJnYSzzcdscbdL82t",
  "key35": "3QnjDMgec1iDniCKBe3yrhBibu2qFtC2sav442fQxqVhm24RiJz6Bp9bdo1hh1bC43b4Eem4nBdxcNqy3RxvtKb1",
  "key36": "5W8e6k9KnGohkDhi7MLfEUUFyPMMwt9W3RWYQFEPMP8MfHPkLWfGtEh9fzWnXjcTejeC1m2AY9MFqD3uoPgExp5q",
  "key37": "3tu2dTE4TKRfx3UrkYmPMYYi14oqQeVEPNbxF2Rk9NvjfLbv7FnB17r9YfRVvGXeP28M5zArQNgP4AD6G4wvT8Ky",
  "key38": "2Qm3WmazWV3fYyyQ8FaCfLgB4eWyfHCqLH4Q2RvLgb22wY9xG1cudUuEwNsWRZj2rRmhyDD6rJjaAYL6RaM7FaD3",
  "key39": "5mXefT6ehH83xdBpHmDDDnHVeLwHmrU1duD7iPUgjoZbX4zQDzf2F6UQcf9d7kbjQ9WBXK3nSc4m5ivMJpdQwEG",
  "key40": "3Y5j2pt6kLBD4NvLX1V4WYcQnULPPtuygm5d6Ljs8RLdKW3T6AnYCJnNYXxvLN6LXzMigN8skAqBzSQVAfFRyC6z",
  "key41": "2ZLmC4ag2NNUzD1XfcqqUUqKJq82MDXQN4xzq7nMob9uPDtw4NeQ1MpTGAwD5xJezVs37CvtqkDHybhJjnuauHfx",
  "key42": "3mqzt2Mbp7yZXUSU3QsTMA7P1pPx2X8FdkxnkSkThaDqmpyt69o13K9wWdBJgK49ksdeMRihaqZZQ1wVLPbHwSJ",
  "key43": "59N8EQdN3KLL48Ljhu6ukSp8KxFiLGiQa4PWVrNVQc6Ug375YTProCvnjweZ6UFUtDtnAuSSKN1o9dCsQrYX8tu7",
  "key44": "2BwiUTdaA7We8QEVtGw4pwpizTTykvsw4q7N6whsCe5diKoH4na5sLrfLFZCZ65QuTShEvpicobNRMEqAjQbvC8k",
  "key45": "3tEK22ikrvvt1DsNEbHFc9z9Wi1BPLkU27LvA8A4zFdrsk8csLPPv3BNcaee2xM54YxAw1ERhRw5kkTiUPCaALCy",
  "key46": "3gN2b7xorKq4ErLZbtB3GSzKhgpJ7Zr5SHuvopLLBopcZtiCjGRzUzvvJhXLCtcjtdNpdEifov2QAUdRLjhHKvmS",
  "key47": "BGjjM1GttrGofUpi5LngW4aEf3H9qDdqDth4X4M83UiYzeT8vkhzDsYx87WAsMxdhWXPN2oumkDirmNC5mVwLkY",
  "key48": "3Y7yVbqtyxXQCmor7C7y71BNqcsBngMXyMAETxbDRnoV4GmnhBBeMWvfGLZXa5c6kQSBz91GUyH9ku55GU661Foy",
  "key49": "5Pv2Wez5rVfWisXvDy94NmGiwVWhpRRqifWSaYMmjmqFL2KAburYyA9JZubyLzS77WxCWzzQraDVQWQLm4RFFuAz"
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
