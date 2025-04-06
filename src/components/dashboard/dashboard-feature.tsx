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
    "4anfGuvf391CPUNKdBqygq5iRfMaMok4UBDcZSRTb8GStyxcrBpRBsxrQi6yojrqyHLUBA867PFGvyLi5Eb3MN5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sGYKnFVKEgxqJceZpuGTSvYXCycnnyd5WftnsQCrmPKKvCmqjUdQnGe3WrNvZ1neJy5pDBRUB38QfinhkZqwtp2",
  "key1": "52CD6tkpmg4GmtV8bSPzf1CkmC5xfjeyAyUqrSvwUYh42aYm4BWCmrfuHfnjWq2EzkoDfXuYmHd5JtgCJxhn3z3a",
  "key2": "56S6h1xXyAyDiTePfp5X7dDnBGdHWtUPhRGackc25MHvdib1V5LagFvBVRWdg7BHNyMFL9KqsD2Jp8P2PJpXASHw",
  "key3": "EmJmbjYjMEiyVSNzcdGreSEDyWYpj1vbuVceKF8UZ1P4ag2KAYy2UTWYmPF6GFobqo2Bee7MpvRxkwDYSyrPd4y",
  "key4": "4ovUkCLyrQGNNxgdmgh8pJweCcxhfTJJKtfwpyoPEvH7Ru9pPaPx6RrmZqGSzCRSQigy241HttHnBNg834qDHmP2",
  "key5": "aUmMDJNMASrT5MjjQRz6iosiQLSS1yKu3g8yHNAWSuq3pwmgkXvGk9GZEAh3VMcAVod1ieBJCC5k63f7nTFGfkZ",
  "key6": "5bozakpLEyW58BvTMgDEqxUaC4KggV111gstuBptNeh83BfwP1yBs2yxXchBCNLebuAqggnyibeJGnHehuQdLQny",
  "key7": "BjHedxD7f6i3PK1nsdw6EUmdUbdv9ErhEn2VKvm54rh5Eqwz4ebW9vRYX41Jy6zoCXoTbntjGmQdwdvuUVERR12",
  "key8": "2kg6ZhSbhTY3EbzVz5rjyMhVynbHz2ZatGHk5UtRAngTUJZYb9Y55owg4sdf9R23XjcTz9bKwLNXkHipUrkzhDLL",
  "key9": "Yz8weT6pTH9oWqvpDqbdjUoK92drroeAtuRiU2D1LrLKi8FKShWD2a8vaUJ9tQkk4BSkcJz5PiUbzbNHvMRhFpi",
  "key10": "4HFwDaKh8nfPTrK4Yhp2nutxawE3vUL9bbs9vDWBEDVPqNfkNovDWLkAhGqtZPUCyVvbjqFpJEUF2gUoao8HyKpb",
  "key11": "ar7XbrVA9EKAD9aYt1zcWCAoaHniKHqCG7cipCzhHCZ7zjrWeJ77AmAGxJgUti9zmSQ8AJjUoJ3iyHuFvt81N2u",
  "key12": "3r31LWcqtcxL5srZvj5UoQt8eQLmxKHHhLexnVRuj3Nragi3t6YuqtodYdjMw7hNLsWYZTRyGDQRyBT4K8d7Tf6K",
  "key13": "3DRRciFbFu2mEtziHuux3uAJB2wkgpc1AHvDsjYbUV4XJ8Rxhb3D9iZ4p5rrYSqx4jMRnK9N1N4LZfzn8e8wGUuF",
  "key14": "2yYVUVHwy4vMmXnzETuDWkCDY4Wkkw4zPBfuEANt6bKQNDuiHEY19e14dqFefATcam7ezELKTdR9hUhAmgd8SA2J",
  "key15": "2V5DcKmrDArg7fGwLoYsqdNTpH2nKxJN5UPDUqajktnYZs9WRjSeMM3rvddZjMEvSCgmuPU87ftrhWWYarMEHsic",
  "key16": "3xr4a4YmM5nXoJMQfMMaWZy1pNYw5baniJrGB7PrLg5uXJ5EKuw7pBH3j1vTrDQhAhypPCyR3FfJFBqup6kBDTGd",
  "key17": "2ybirMZjmHY8zbz9f7TGoWvTTCEqV9iB9XkoAvE98KntXmrDnwiuCEoJuz89dytfoRXpTCbQeEZsLrNanghJvozV",
  "key18": "4iAA24qkh6CvAK7KSPz9qmGznUmePnbTzSS6YJjcxucQQRsA6Trgft251bgoRaGz3YnAJW7qc5CK6iBqnYefDDZH",
  "key19": "HsytKBUNzt6Mjsk6E7MaBPUZXdRnpZJ4xpNzS9eWQpVZYhwthV1mccMwkGeNzQp9dhTtx219am5k1tFvHXszX5L",
  "key20": "eRF1BBQ2s7nNb3WsKsQqvoBDc4aud64c3ud8CTRgGWTa686win6ZxgPVfyQQmR3kZQkktEum6gebXJG4vGrYWtn",
  "key21": "LVW3etzVit8c6JMVKp6Lv8ubxtYBTmT6VpdyHBhQpbp6wSLuEqAqMpPhMzMaYUteX6MoucYhFj2GnP81RrwHhUg",
  "key22": "yUJ2uhJLbPqkPGN4CU2YVMCGrno5csob8ra22omJ41fhcxAgQFbqEmXZ3D1ezERt8eNn5Quxt3sjTRtrauqdVvt",
  "key23": "73i4P6EE4oHHYUbgasZd8Rb6bta6To94R4vFvqpiw5DTyyksgsCRCCSMET1P6k3N1TZXgxAhMXSTx1bsRrGKfey",
  "key24": "612Zdzsp8FwgmETTJPq8GYZvw4q9etoTkagPsWHkwdmp7Rsw6MEc7JrgMpGDHwcGYijqsMnABeU4a2iTUWdtYpSG",
  "key25": "4yUZDrRL9wpHEKT64HfPeC2W91cV49mPVD6SjTyx35KQZCoqN1Qgp4sN83tN3TiGtdpbRPe2oaUzYqUVpDH25Ha4",
  "key26": "4iMHPjeagCE8UUe44CSPikrdY5FQTRtus84nsNsVwjx4jswZk396FJS3HQuRGTxrH7TjrnftGeRVXVTGNJkiR7VF",
  "key27": "4yaYMidVvZa2xCek7LQwAhahHcfCuepEZCSag3xibN3pCkaoMYg9XpHkRZutScCFKs2nRFN8jG7t147qxV3D5DgC",
  "key28": "5noh2adxPrGwDuvBFLaq4NLVHgG7NxTScQ5z3iVaGmSRyGVhJ9LiYHxqrhQf1NxuMvsZ7bCse5A1nDNsiERvDGND",
  "key29": "38r2yqzMHf7q2afqHaQmx1mJ8HsvsYkq5bQ9CHPrHfeWheEataScyZ33CqjeQbPCZ2cmp9CEhwBaj977YACtW8Nq",
  "key30": "5n3o8RcZXyqWig7RwZvrydip5D3xF4EsFqiaCjp86UjZZVgY4any9LTmKm6arGwvZwEpiBHDZSPZCMpFjBhSbSXo",
  "key31": "5DMrdXco9zH9b7KfKr6xu5UrgatGUkivcSkX2SjAqGFaWwvBLb3HuWQJBHoAGGAL6YcxpdtH5c3EevhGuE53CddK",
  "key32": "46zJ9qbPay2awGNFhy4jQrq69GDHkU5ztpzzficeqLDVd248a4rY2TzRfo5FakvigZi6xq5Mw3e2TXLUYKSTUjnV",
  "key33": "4mQgsZKZotd3NMrCDBmi9TKXbjQtcinKCACwHG3U3vNoEbRsBirNAmFaDEpqW64DCX2afVvJ9JLmDjPekU5b1ofS",
  "key34": "Sy9ugQW26Jdrnqjy3ZNRX9C6dryFeH3L2F9Ssi3Kkav45eMAYKSKcFaXdAazBHSDzBFaZF42hS2g87u2pujNdxf",
  "key35": "4WVLMtuTfpJG8EL3R51nv6h4yJv9uQ7FEiZmG9pfadh3q1oFRwqd746n2hi6fLXB8uzk8QpdPEY3hwTBQR2r4axX",
  "key36": "2HFRExTm2cuGsm8AhiL3hDpDTyuKb7gLa6w7fJQo5ReN2KW6HNCeXWDZuSPLQ2Nj81v7ssr8UVQ1QHFQhfycprcU",
  "key37": "2JCo4GiL2Ly68vcKXdt5p8bJ4ajsaMWPph1idY9CJiUVWrdoJs1yrYYf8Uuc3b6aPPc6ZLdokA5vV6cf8MULtzFY",
  "key38": "35z1CAdUnrPhXr1ugePoSJmyMBsSQkrDdcEYCHAX5dE1fqnYFzJ8duAVEnJwKL87wjzLaPoNAkRtLdoBB9tQUAdw",
  "key39": "2g8NxvfcGqLBct8pEU57wEgSCwvY74sBtEfeZrHpqgjJPx6YzKPm5NE8CDgqjGe3D4ZexfaF76p92DxXRVEFWzpg",
  "key40": "Jwd9LYzeeVuNSrxa17PNhAj1hYRrMubzv6hv2gjKy6R6P2yDHwEcdX7zUK1SjpUz8HSFF6K3Jb4Z29nk9Vr2s6C",
  "key41": "4MTHhpDhQJa4NfVLiL4UjYaSmg11WLzka6ypbzAvLrC31w5A3xsuVCSSH9ShFTXcMsuJJcK5rUh6a2G6DbHhdtmN",
  "key42": "4RcZLHgX8nSZPLeWBYRwcjh4wnL6Hf2uZh8D4wE6K3afJJeMHjgJPwk1DqwQwacD6fu3NshuZaYSo85B6rn8SVo5"
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
