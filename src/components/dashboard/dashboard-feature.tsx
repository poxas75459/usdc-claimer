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
    "3akoPdsBC1EUZBW9iT9UKGSBoiUJPdcREAVVtbfsgpHjTeRMGGToUH2WQWFhnpczwtfr8VJwkFF4Khr9HbgpVdfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ztmaSb5TkBgupS7CWyAM4qBLCRzkxB9yh7kadk4Kxs3eDBVm1g9aoUvvGdKUTYxkoRuyby4QHTJXEAvzxRVR5AM",
  "key1": "FKjtCaByAyveDzGsVbA1TJgrd6cU4jrWCPCaF6NLCeSeUwXbzJmxfkZStkTYNPDcmqHXsKH7QWPYhecMmJ34F3P",
  "key2": "2pdBFSNBwhZPCL4Q49CmbjZGorQbPSvGi8eBDXRAxNHz6MHqGN77fzmBW4XndAHn2LXcsnK53dtzA2TMiPAmtQrx",
  "key3": "4zYfn63WJqwhshvHRK5LoQjCwn2iW1TwzJmmxbYuFB8VXxoWZrZrf3CKEU4YJ9eazWXfBG8VEQJaHWWXtCsUcgYc",
  "key4": "45Ls5MduL5k6vfXhoEjxvtCW7naYPJXf6ek85jrWjQUuwuA5zNnVJCH4j1x45Lidi21TMh4tpaMpMv45jLv62HR3",
  "key5": "23PvzNj4sVKAYGz7wqksozumQXzQSBmpRVS1DEtYrR2Ch3ahoYUg1V7ZqEvZ1jtAeroJz4auV5pc3h82oTWTXDme",
  "key6": "48EUWBZhHfPXH7H6L3PsynzCCpj7ufUE41M3w4LcAGYGk67BiMrz91DFD4rSUzsiFYpnWZf2pewXTzukgrKwzUcy",
  "key7": "2HMn2kAgEt6i2zpin3K466ZLB9NEQnDKPBNaCiMa1gRQ4ZrCESd2E6zX1eKLvi73ySezoNLLuQ5XM7rHMGcn6LDE",
  "key8": "54rCyCQkW15E9ZPKMWJ2f8H79xdFHtthm8iDQYKs1pwzz5pu2z49v8zWEbYhXKWoXo3QiUjGdiDWHtnvj6kVDy6e",
  "key9": "2x79f7NK6pgPC7mqat91T8sA5PSoRKmH4dTxV8W7XECZFfwEyY4DyuvSHndbF2HaeoELf6fqZ7fre3mUrnxPNZpo",
  "key10": "2KkFEc5QTUCArz6tbPyWMjqTeyUK8mtHh9uCVHUrdfeNdpLuULD3SLp2h3FECHchBbjiW9teBi2fRcktf2JcSuLE",
  "key11": "5kU6Hg2dkMjkQm9dCh4wMbKHRBhr8aDyDPTK3Y2cnnexm874JVdaSxrSiP7sZBXYErkBHHevNthtTZVaMawT1oFx",
  "key12": "64JnkrURUpWR5166ar5uiN8qZMid7KBp4HGEMgGqTEHVJziPfrUhq5bxBwx73YL6W6QTXwWcz1nsCoM3AUgj8gHi",
  "key13": "4jYquLJtmbMy9f2dkQjajipSPvvrr3baRdsqcA9R1SNWC9qUwu9A9RRau1FqbkKidZxqh1Wj9AmsgqkoqTty2dsp",
  "key14": "ovTXcrcihcKZookaddQ8a1ytZXFDBeFziGmQgErqNrFr62cxGQ1AuQoSubyVELKh47FmvfiLjgRE5jGPRsEuDwN",
  "key15": "4jf58dHXKTzRpYL3FPrQJLYo8CwbkvEmzxsQ8yNAbUcJJWg8RAdvxMzz32yczvy9nMWjrUKEvZBnCmFjW8L1kbrY",
  "key16": "2gs6MGbCALCeUxeGu7w3TEEGEEeP1Mikcek3wxGhJ4LGd7zN9YJjckVX49hFc1ZHBsfUFEpJhLvmyiuiWqBeFwE5",
  "key17": "3PMXbKUAsmcQmXXXLfrRpwkLMd6W7PoujtypRFYy6Mp43LPptzRG3SLbvhZz75tZBYcQjWdkgKDCKLuu1jhGA1yJ",
  "key18": "19MnNL4Q49nCbUpZqGq5SAy2d7sSFcatRGrLPWzSh9akDV3Mij67iraXbSYJerEF5KT9wDX7Qa6Q5jDGER4cxht",
  "key19": "4gxb6M5q3TGgt5isYuRxDsmmHW9yLhDAh1hgXX9XFGXYN3j4A446rfQD3L7bim3ye5d8fyS1EStDRL3WhpMxvi1j",
  "key20": "4EWJAcJj5sbESt2j7AizhUCQQqwXvkKXwcyMnrRHnmJ6wGZsJEnNSKZbf5ikoiBkWPfSLZSyGVoVLJQF1GMCzzip",
  "key21": "3Q8ix9dbux7ZZPJuechhf4HTofPxt6yCWkn8axX9i9hr58jNUJzoa6tnefSdXvGf3gbXzQqRpTmUbB1FTdwR3g4U",
  "key22": "3Fpntqfs9UFwbRTDC87ad1RZAN2AWtyzpK9P1rD5gJjixBUHQP98UiNgVBDtXBiUnDBhg3obXk5ZdLc9Ko4ETSAt",
  "key23": "2pPfLzKRs4eP5sxgq22ow1TfhAtoKsiXzH1JzVbRdesMJy4f38rD9zqKjfBqTxib9NUsPcWFFVVEJMzpxLhzdoLe",
  "key24": "2rWt6PThHRene5xGmjfBrtzLfJkSTeUK87XgHU74iuV6VgaA2asUfNsmWWeyDTVyiY7Ds93irAdQDDkCKtQkqibj",
  "key25": "2koEKT4v1Yjvv1yEror2Fks7v5oFMNwhhWZzWUgc1FdWB1wiVfKLjQPxTwDVezpLLp99HC6na6La6cijhqNKqubn",
  "key26": "4xYyoq4EcjnFnEu2YXZsozj5sPu5EaiLzF1uLdbmMs4ZnT3Nv31arwHQ9T9jSR6i5NrYcLuC7qaMkxRDzSfS82qh",
  "key27": "42n2h2k2hE9EiKU8cs8eLKr4tjyQpieZ4E7Hd2KZkQZ33w85KCTi82283AFCfUzHcAShDcmSkyfCyATyaN8RoVn8",
  "key28": "4fVduA5mw3vvUb9R7CDz4iYB5zNZAfRJeB7H2sFLhpLnXfKpQVZiXLJbvidkEKSy6ZtBjR1zFyLwpVaszHnu26dj",
  "key29": "33NDbcMzkq4wL6YkTkjEvXNqXECBLajUrj8KcnwB7ut5ZPoCn2SNHoV6sixfCzMvRwjqT8U3E5EKYhkCHYyyGm71",
  "key30": "3Zw5DeHQCWXEWiQ6FweVtk1A4CVY4TTDk8vELWATAyyJphttBfghqTAQqMX65ZG7YHycNKPZs5mWqLLFY2eDZhnN",
  "key31": "57VcLDHhaHs8tqQ53n1E662EJcvcEHdguz16mTSrwk6237AJKxB6ofnyCRNpJ5NWfj5uVLxsdtaw1FVH1XG1Qa8z",
  "key32": "5gqrmanzDvT8cFMB78Epx32T3LFqjNHJucdGRcqWDkEPyswmbPM7zR3M3A3uQPyYYLvsC1KKvLmX3B78sCRuzZiW",
  "key33": "4eFmYAuxsGfm1cTha73cdyrjV72ZE7Q4Pix54W8hN2w4y4aH161eXyjacq9FGKMDDWJm6Apuwy8MRSzArNbVCZoi",
  "key34": "2XADscgUMvFA8SkhbCVh61pnrLDCLtEALVuRXo96PCnFxwpczgVyUqFYarWnnEZr4zn1jPFjtLxLd6LpXSctnWv",
  "key35": "2KWe5vGMmakXmepMoa3KxJxPDEdLz6uwa5sg3soJqyAbjCASnSHeEqnnhVZKbn8CeXvYnKRxH55nUH5F8ztpGCNC",
  "key36": "3suM3ATeV24NQeBc1auWvkxZWdw8atN2c4toMq3xXwAqEB8qUqZtXDGk3mpW4bbByuD5xAVJM3Nvd3ij4Xwpeh7r",
  "key37": "ddt6ahhTvSGm8NM7Daxx8MWyCPXSqDwXJRLTcwY5XSHwFUaaFjEQZm4TADCNMCVsH4PCmnZobVdZA1hcmfHqvY7",
  "key38": "3iESFLw9DcgZVerhk9bjHxz4ogGwqHXqYJQG22yZTCCiYicLz6MV7YQSpUzHwaanFLqGCNMKotqmunVwcBK919gB",
  "key39": "4kb3R1w8RyKykm2ykpfqtzugy2fD4KjXtYzMzFsCuV4Bf76pgc4JkvzH6WuTM88aEhYra8vzE9SUnH1pkDyZJgz7",
  "key40": "5QuUCmBrshs558fVHneS6SPoVgTbRFVA9HyoSmXCC6Fzm163t9Q8vhquBjtZJbr97ETcizBZKjeivaXXezco7HSD",
  "key41": "61fRE3M35DsMLmRAxgr5XLuteUZDRVbYUnkxdoJY53DwN3RuNPdw15kUJPG71VGCdhtMxjb6vRoPhWCax7L5PDAB",
  "key42": "3bpP1biegqdWQFQxfjM8rvJC7Ppsnn76yUuUEiPPAhqaG4Yn3KrZrXtQPkHdAtTXY3cBRkPs7DUbWEAPzRGxeKSh",
  "key43": "x3HQdfGpfxZbCZxEckbsgsuEd4xbWfjz7pWB3JNWr11NsBxu4DcNUccakY5x5BFPZQEn6wEKSY3aP7ThPoEJvZi",
  "key44": "2YaKuM7LGwvvxXfFCCtS7LHX7TswCBheZc63KZTdf2RZ5puAwZ21GBRJZLjvvZe8EfscRYWevwF9zWHo7TCup1G2",
  "key45": "63p4damc2JUL4NcZqGz7y8xANSQac3HJHPumAAJiG1oiz5U875rfMz9ftfMue4dXegrug7bpr7Yh4bgYVn97bY65"
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
