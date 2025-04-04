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
    "4178tpFzfqVjkcimmagYrfAHGHGJntpUM7rYcKTpxSDTyPcHF46rRENNgjK7jY1Zr5HHAwSxwRQ8N2SWZWvdcUM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41N3NMBfi4wHHTE8g8tsWB4U1mJFPsGRNJqfEMqrrNWwKKRftauv6N4QjjfhByNo6DaT4ub8KaEwg5cJFb4MtdKJ",
  "key1": "6UYeakmhEv5Pkjt44ifP4fxkDKoxez7grRLcrL9H7XLcrsz5WcSgJ2EddUSAJ9ugzWkJHsbcHHw89jQaopJBvKa",
  "key2": "3uhUEMDHjEURv74Bzyrkz3J7wgd6HjazqwmKDGLiXWczKGPMczFPqLPRwWZR15MPsMNGUH1M8X67wfGwwn9c4kaf",
  "key3": "29nthqW8CdP2injiv4KNJukmLQ1Nht813yYxmaaS3v7BrqcCrR4Z5Q2hJPkGVqKmZdv4KV2ECbm3e4m6iR9nUJ6x",
  "key4": "5c6DFjHUCcoyLE5yQbGBA3raa3snrLrZFvFyJj2urFtdGxebtcC6zHoh8GYqSPcfSc6ZNiW9eBBpKrztundyFnDh",
  "key5": "63S2rfepTnaQEkgGnkav8e6xoxALHqQSAP8HxVQBErAo24JT3bL7tt33DmFFf53k1DrxK5z7yj9wuXs5URXp6Nsg",
  "key6": "5rzEG7oZUBCWUX1D5uhsYV6Ga1U6C1MfFyMZX8htCZmGTroYf9RTWNN3FPUf11bEejeTdZBQRRE1sfmRhJMGBit3",
  "key7": "3dap8uGwoyF3K3KyWHWuk2FiF8ZPbCtnCvzZYz9r3QGstrxigZs6bALiu7H5uq64wm4us5dXAeAMLmgkLh6CieSZ",
  "key8": "4ivZMrfiyyCStzDdqmcyR9D8Mu88mVvyCK9WXYYr1sANZ2EsCjHFU9ufUhPBXj5CRkoZu3DdjP7FGJApKAjueLUQ",
  "key9": "5Vm6FTkYEerxKSgheJtXjScXrR11L3GWgLtA15hHCH4WvYZU6qeeBTz99SCSHnPt21fBKZ1tcCjcaN1C587P4JEa",
  "key10": "TZZNfYjKMHsWtb4U7pr3KXbEpztEzej1RUzyF19pWrxoQ4v3iDcZCPTzC1AzDkAoqWQ5wmdwUk9kfGX2u7x2YdG",
  "key11": "3XnLm8De9yApqMUpKv61tekMDqDndSUg1gCRbo9mgbKQdpfJwCBW77q1mkH4uAN8bTTLCEcEKsTWFM1BwrvmMaNf",
  "key12": "xyAACkoPhyXnEo1TfS1FHv191LuftVf3aRMWji24WUHCE5YMAczMj3731obHFEZSdVdA8GqHRqKq1DA4FchHBDS",
  "key13": "2eyx36RuMcQicEdQgNFCm65K6gSmgTzegSaxBD82fazmuMVD8JYX9UamUhZniE255wZgEmiroZ2MNvm22iaTSjM9",
  "key14": "3kNCWRLyTLUvN4wNxH62S54tP6evsB32UagMxug4MtoFN7QuzRqnFCx8iLDUPB7FfXn2AvyzB8DRiePGo93Cvwr",
  "key15": "4TeamJ7aKWv1zp9oCDUqnSEUZA9GZXLratagC8DxYQKEftGHUhjLQXF9saEXSxmyD9ajK1ihZ3uR4XK1FGUAAEs5",
  "key16": "4vXYgdnSNzDMhb5djNWzLqhVtz3Pj9ypix8jHt3Z8LfXfCKCThbY58x8RAaHDgJ8mcnyQ2YGYX1wgZVwgmAbbtYd",
  "key17": "5ftvsUtgyrBmXXKsV5Ua7nU5noqPJPGA4wZzN6TzkPwZeKjhWxUt2XahDbvT5osx48xN1t3AmDddukGvR3DNLfxZ",
  "key18": "3CG9wAt25SrHbyJLj7gUetKGRNmZh9MuMyw4G41tF6Hy8xe3sL9Cdbzyxit7qVoD3dB87XpLgCWZmaftEsjZXNqt",
  "key19": "2HgQZBscCdUSNWdhp5v32F9xx92iyo2GmvMqBiwcyLzcM3Pw6C8UdDV8PZCvTTRUb3g5RvgMj1E1MG2Ky9ykhT6V",
  "key20": "ZU775rZhPyMbGgJytS2TBh1gLcyVicFYAu15Sq1idkC4vcJCTYqHCrDJzAGHd1dChZdTDYACe6x1rnhDuzUoHSq",
  "key21": "N9uqTzLTEnLdkiQ4tjaXaSRkWgyQF6SaTsMB4k5r6PKPFhENGC3yMzHeCv7RxUMcwt6Gngs48BDEuPBbcj6RcL9",
  "key22": "35qtbifM9s8tZfMW77CziPCzt2crEYpqTysjPJJYdeNJwBSGGSurU9hgdbsJhdWcYRjX2VRdLh3cxbHrQvgDN7kd",
  "key23": "V9C2x9CjkVsMT4gY7j4nrQXPx3bNBvTJvWkYtim8bcpuXMU4CVWAim7hT8e4cBxiBrz8n8JFSCwdWzxaT2yRW1o",
  "key24": "3eAgqxsGs8YcZ9iVGQM7Gy8RJdvJNXvx3MzmuAgFM3FbzanLiKYBReomvt9bi8znptXDfoeDBvNLFnDKTkgmotK",
  "key25": "2cTo5h8RoBECmhovD18jzTz5G7mmm72iZxyNRPBwgwD5TiXVFhfHuXCn3E1Pgymuesx3i1TXtS3yFb8mkJ2C9dR",
  "key26": "21ui8abnqE7oHFg7Hzii75SBWuLXMBq442HjrYuvYLmLkMp2zDoWq1WuXJr1GbjNoQ3eANX5VUQ3cgM7CpP9yEkv",
  "key27": "4RuQRJQiCiA6S16dYCW4qRbEAJdqX3MXUqnD4Z5AzbyP7jCYmLz6SVnYaa7dp2hJxhcSUr3v1fZgzVPjMbWr4wPC",
  "key28": "3SDsNDf6GqvgGPoY622i8qkubJJxbdxXMFRUZow1EYWrLuJLm6sawCgXoaLyk56CDBhKn19ptobX4qpdsGoTozM2",
  "key29": "2W5e9VpFn8E7DZazoaD1J45SyRqDYFEZgoSEZDkG2qG34qp8Vf9YRgDefcpE979p51CPBcf5SQLFPaR672A8URAg",
  "key30": "44RPNFfjFcEmwdwsmz3o9sF6tQzW2iXUHjD7zg1QtnesbN3TpUjDdgGKsspYKWaqNRUQDaQXWJL3werRhxDYLrmj",
  "key31": "2TfisxEAk5QrGLi7qjt7GXJQgh4r8mhE9gxxSu7D111mK3eU3y13HfERFB3YtGPxYD9A3QtHrdqtP7p5GGJnosJJ",
  "key32": "2yswipqw3frr4ZDPWFuzJWJDHGaZMo93EsvviwWoFWWZm3RQ1iQny858eurtxb2domvqgjUgiQRbkRdqGq94WzPH",
  "key33": "27r2NyyDWK9g5mhRcxPmaoD56VifHY1pq1QiTDR9PFz9e82ceGEuJmzW9qeonfNR9wkXgUj9Fic7DxETV9HrhwXM",
  "key34": "4HaDwvtwxWoxcoadFBhCG3sxy1u6jJbkdc7NhtkNAWQgRf78ANY8zMotgt9PbP4xyxYerKUMZjVzS3X2sXi4Kxtq",
  "key35": "xpcC2U46fQLyMJMjom4Nnm3PuYpC1UUvUaYaDxr1vdHUbViggbawvvXBkEPF4rMtHpFHL366kj7dspVHSpjW1xU",
  "key36": "5GKzofeSHPGvHe7Z3omKP4eqJDpu2ucNk96hP9EVBQbP3WyjYB3bFdZjUMZyzzYtsmFTDzb6kbJn29r7tNeNxhbx",
  "key37": "5U9iNYdjwAqVV9uMREzKXeR5QfNvZPGMLQt9A679rFHWoK1xpijRCGW3oPMX5eneqkbXZgYMccJMyiWmKDismEJb",
  "key38": "2xH8VV1kmTAdwqn3LjCFVC6w8LQXJc7bp2mTQzFRjBcTmL7DfdHFLhtaQ46BrsC77Y3Woy1REP71sANF311M8hRD",
  "key39": "4MdBLEy4tyhNRHcDL9tNUGGK7G9UAXnkCqaYqxBKoNWMDTPZqXFTXL1LKpaBwcvEuvEjTE1HiT8yrqNqkWNCGN1y",
  "key40": "5r5bpeAisUv9QoVEV6QLifb5KaUtwDQjhgHK4GN8CdMmTeEkZLCz2h17Mo8i8C9Ppqu3ncvH2XaLmNGYvELHkBbF"
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
