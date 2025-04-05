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
    "2aopmBjAg9tJhx8RcNuyuKm4gUgpJmrZeKMmGnxzsDyx4XBinBY6tqTTz2FpYVtc6fAvXTus9RYXy2bCjRAxoikm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JCjdrEAVS6e8MKMe13JYCwrS9CGmQQav2ovNnPdjdWzhft4VA4eXsxCtw1s9n5BNwqTNjELNqonerkSf4HbtsWA",
  "key1": "2EJxLCbNjuBP2Z4JkcNjnHYbh1M4QRjqWN6CnyWKv9z5THMNo8jxhd15TsTFEKezyYKhyVS64egvxqs2iCkYZt7q",
  "key2": "kyeDSvBfGpxhPJqvCmJSfrwKbudHbDcm5btEDYeZvghfWBbimL8cpm7pxvw1oGNtnaBBoMFTttmfYmFihTGSVLq",
  "key3": "3p2eXppbLaGH4SkZDD3t8GYCXEzo7zjnBRyyh6AtCNn3p5C45qdxWR4GAmbrCvznRJGEnKJk89ZB4RGpDQeLSDQ1",
  "key4": "5HYgCYwdueFPYXgVJSpVhCQPjs4sU7qShhNsMQRQmT7oGQvjGMqrGq5T3n1cp1p91LGXY861gSe45pVxaHEmQw4n",
  "key5": "5Wtokaa6PcAPLbhM3AVuQc41671fTHALT8Tx6vWugQbPcB8eH9krdQjGGFUvRDkxgGGEpCHKiuAF5uB2SB3AkbJ4",
  "key6": "4jkD8K8jxD3xNrzpAvU8Uw5ojH8f6f4hp7GqERyBNYgSV195d3MgYEErW4J1kT89C3E5f2MszG8a5YAQ5a8V5CL",
  "key7": "25qF5qWDiRgwn5FxA8bMdfJawpq5NtaQRa17sPmEtDtanXtf5SkPr1BHgncYxtnpSUR5f7KeL7j9caqRVYdPn2nn",
  "key8": "4AUSpn5z8fTmpSvoZj7CHw6fzbhkpCdjsdGW9DtKuJoMYCYKHGDzSVSwWTD6fDa3ujkqv7dmybsK1JZ8XouKZL4j",
  "key9": "EM3rvVe3UKzYCsVVhxvmDpaFg29CtpTJzJ1NGiohtoLw8bST8QEh8kFSHk29K72rF6S4NhrpaaNWgKPbHNcQKKQ",
  "key10": "Bk2FeohtwMjv4pUstUo9HFt8euk3rG12t5YVKtaUJc6CmXetZ8F6q9DEGRFmiik9pxc3gnEeXbZzbLDcn5xanpR",
  "key11": "2uY8XXDnBYGLUZXWxnL2SWFfVsCzXDvv175qaxkhuVT7ztJS8s4aBT2usyxMYwTY4nBEBU2aEQq3PyVzaNBABqXs",
  "key12": "4nVeUj6arLn7HkEPuaiYtXxHCJUcGFWPcNFtU3bBftFXKo4m4fzXz8uXdrHrq84yCBsBNePtBaJPb4rMoe56dUfL",
  "key13": "5f8KBxe3B936Y1GycQuHhJnR5PXhsaCtDn9HXVSTfnDbazver7cvRnfBgiZRuJteUkvCJ6gibcXTXGWmF6YkXGWA",
  "key14": "4SXcVgSCs9Y4at9wbtMK3c2yQkuyTxkPAdWpt6i9ohK7Ac7QwJ5FgNv5PNp6XGm9oB68yRZJsrN65UEEZawCg5bu",
  "key15": "4oUxiNtCF4YM1ymGYbc4KjY3KT4rGTmaJ4HA1xy3nnFC9MEiLbR5mMCoJPQZFam9urb7ziHhz8t8ycsfFF3DrKBT",
  "key16": "u6MkW42djBFT8HgTAz9gpVhrftKVSKep5rUyZZsYmVRZci1caBxhcx9uZQznBg2L1FVt4APS27YeoD7wMpHXmVm",
  "key17": "2z8fciYmA2jGNVZLTQXhjGToYC4Ns8nAZrkZ9v3BkecC5nXwAhDorFDDQqBZJuM6fZ5Bn1s82BveGuxYMk213fK2",
  "key18": "Q9ENPgpLfNFrAMhNms4v7D2PJLf1R9HicikGenN7BxYFLiUcH4Tb9RSWnorcaNaAhnUENvxdhYTQnCXo91jeNUL",
  "key19": "52MWuhRWAPQvRZzzxvwW4uTBUoNqVfW8FTQ8K9tCnBPraNftLdGM1LGcaFM9JyQ8MrfkoZZdSbmQ3UveLi8f6W7M",
  "key20": "c6xMMnbWk784NkssJa99mW3kB5hmH9HFyKnxLWAuf4ATgVDQ36dDq7JZqpJSSCJiS54qKz71Sm3BrnVzgnCkWwz",
  "key21": "5NGK44HGqxkpHheFgqwmxkqbwKkxmMcLsE6WhxVgriYtvt6YQuCcW1YqtgqqbWfYE74KsTAEL3RWq9Kq5dttrRBG",
  "key22": "5eADNruJcJZuSsoDvLcxn9deCmc1ku5UJ1uCg4ufykqKeFgVoBfNeMGGnG3EZ8pgmYLXFFKcMdzuLgi7QuGPSqQp",
  "key23": "34Z4gZHi4GcF6GceK9MkMf4bU1JGrjR9pkT5bc9BmJvCoYnPegUGhS3tGoMFLRHGvxR3Gx8ssXJ2QdW4BsxKtJo",
  "key24": "5RzgfUg6cmyBQ9nL6aS28nZqsdK1Q6614TEGXRHtoT7YmK6JgMMGUjQnH1ngfDSy4pPTe4woymPEqnks7wXGtTTN",
  "key25": "3r2TiV9fNfDCKCAv7Bd4A5AjdG8MV8Qw8ACjDJr2qqYP9e9DxCYdPSfMcnD3GMe7RKAiNGLTc711pj4MDcdkYRn3",
  "key26": "3mrgivN2WTnNYPsHL8LB5wccqArrhtNaWhsc7wYLgTX7n84q4dRMuYZugm5GmB4bG9E1KCEemhobhfVaHf4XTbGT",
  "key27": "3QSJSE3ra5V5w6LewfNQwUiiSky6eusx8D6niAr1NraDoh3RyFRkeQYdyKmSm3PG5vdLSpLyg3kQS3X4K2UymJfG",
  "key28": "4JiuMRGVtmauCBCE9Rx8Uk8Hcog5Us71jgBim1WGKSJ8eEQza2a6Rsy8MQn44oMYH9z3Khe9DCcMypRnZqVrxGxK",
  "key29": "bV24ncUPEyjjZtoysLCEs6Gr426fDTbzavAWzNuTFW8SwYCdcSNCCgDUDfSXjzhoL8HGWeTqWNrWPAw5MHca65A",
  "key30": "4yu1qsL2fn3Bb3KoLBoD8mca34LuLjA34g1rAsTAKf2nL8aGk37R9CWk2unNJ2WjPUusQwUfCqLbUCq9LvqEHPc6",
  "key31": "4vXdcSdzUTSnjePRri1Pw8yzzV4boay5zmHrYfqTe2pTVyXMRkq1aFgbVDDJ9cRCCGRtrbobH7tpZw1hGxJKGEhh",
  "key32": "5WK3e7YWUM95g1vRs7uCATxmtNTYygMpVTBNArzuutdZdfecuQXf7Lsr79FNCUF3322BhW1K2SUqmR6eRhVXvrHs",
  "key33": "3MLgj5ByDJNvK4PNuTSrftENX5LWiiyjM75oi3Rdjn1au2YUaUseqnjZZkneMpD1APL91r8kkKfy29ARU7yPu5nT",
  "key34": "434c9hcoMHnJ9cvsyfKUK5ooffqGMDmJQxfbf3D8HLAy9VRxgxbjC5d4Ud1xHLzPbhsJgKDSt5zrtAf53Zj8UL7n",
  "key35": "39Yo6T9g3aXPUuBRiVAnztd3z6kcC7675uB9z4VjQPRRgybCDUXu8TQ3pp4YVxxr48PZpsoMwa9jNSTY6UZcPbwz",
  "key36": "3bZ3Z5gu95UF7fYKogC4oeYgVVLY6VFDnffGDVwohJFwZ2Ydww2B6F4KcgusJNYeJ3b4932Qtf5pPD1X9PUnr7Hy"
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
