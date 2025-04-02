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
    "oee7qh3GEp2CcUR4M2wHLauwzxdccqhCSd8zvCkjux24rby3bg6KnFbrnYsfMdTXnLo5zR5uNyUsMBQaXSX3eFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yn6Dj1eHnvAD1o53fBB1Wnn3jUCUQpALvMqwsQ18sXzRcpNKLshct6Jy1Sm6sWNRXEChrTXodD3YoFGHNfeoEt2",
  "key1": "3JEPBAZYdKsMSZQ7v3UsyVMYLCgBRpwKunEEStp84LBbC9JAGnnycN7J19GKVF1LTv3D6GWyavMwAtwj4aPnqpFG",
  "key2": "r467biz8MF4qvKfyNmevHTxd8aCSegs7gw5TufnRLHVw6DMUUe8R7e5Be8auVjLBYPvZi6PTcx55JCuu8521gNS",
  "key3": "4evWBGPubmPybbtLFZvNzBhFUEhK9YLyP3dySTK6sybj9vSGJowpseoZTpChrjvMAYRkrutgcs9NLSangJgML6Tq",
  "key4": "2tzNKiLCDrLCU7T3yATKQWt4K2s34qtiaQ2Tjm5anz1QTZJ5LoquVF59AUmHsuByitHnuDrX6N9j7cAx9UPhVow7",
  "key5": "5eXeGW49Tj8FAVUYamc9fCRD3pgbpQ2L4tC1TvFR3fmgaxhPq4trTJKJyWJuhDX7K4CaqFnd6JWh9YmtmBTdtpkd",
  "key6": "5MdUUWu811mkqiNBwY4oyzR7wJQNNs5joEi1Lvqvpk39R5Mi2mrzVNnG67PoZHFyhcUk9UQWcAmdrcjP6FwuNeuc",
  "key7": "4AGW9TC9PCTvHtDMbFrckPqoRhRaUBComaLzfKHaFUT8YtQNX3x5Mj19tcvyc6a6BvD7w5pGPhdgWgRxdMRutrze",
  "key8": "2uE5GSKYMUwWjmQ7TMc8VeWNFtYmsAnAo7cZu4KTsYuw3pH55d9swAxj1XXNVbQHCEvqpoZdsCWxev6umBfd9Enp",
  "key9": "5bSuKXqZ2SjnNGcHjpvz51SyEhP9QiNaoGdeLUwZb2uefphWb6Hbk77CBfE8ycSUAPbLaunTsETtkpxdPYD6aecB",
  "key10": "3BzcwRpiefY2dvZWaRY3pZgqqiUgavmLGc5x4izB5idZFfJ1Es6ET737RxYkHMe5gbeGrSyTnurhjNr2Cs454ury",
  "key11": "55u4hzFSEvFFCKrwKfLzgTCVSzyDzyxChn35UmhNEC4S6y4FT29VgKqQCd4Vff2fs4DeUwwwEMwo8qrTZu46DiSV",
  "key12": "3FMmrqRwMuBHuoGQp3LRERFMgMrfPxyVBcoRYnETcpYxPjPcQsoNWf3hmKgYHVMJw1wDKuXPQ3S2ffCu8sU8kxeb",
  "key13": "3zHgnzBFqff3UWcnEuVeMuiPESwWDerZA1mZUFCWqnvx5v93wqm3493Ut9zM8eUBPbnJQeYjAkdmiUxPBGg1HQ7g",
  "key14": "5ocNPCcNLBRHiYgnwUzAG9r71KNhnmDdiFHPwW8GmiTRvwRZhaKdpq4D7NKY8YeCYYWNjpQK9YiX2drRQxnPeDrj",
  "key15": "5FtoA5Kqw4JcDrR7XwgCGu3LKSfoYdnDDFT9Pj6tdnhyYDGj6vJDaPvKxPsmqtE7rL7bhavKpQFtbTcjn2qcMhVn",
  "key16": "5X6jqb9hMpcgr3p7z7zeJTRGSW2hG8Mpicqn73Mdx5kxxGe3zKyymptyY3WrZEFkw5Qxyj2BMzcZFwNWpFjB7uyL",
  "key17": "f9f1udFzTEB8zGLgGhYXoPBGUbtMkEskbW2theVRvPEMq6N2vvFpZppVtT5yVNSUP3SrWPgzsEcWzWborUU9GPA",
  "key18": "5PYnUgn7S9djVG21SFPwRtzY72V4Fodk1FxW7d4eLESeBoG4qFqDj5j94CtHUEfCxz7P9cVC1BFpudv2VGoKbAfH",
  "key19": "4otGcKAxYrmaCsKp4Gr2pygRc9dbR9eKRdYwWQcB3ncM4r7SrvjzeU6U7RtkU82qDon7ALSkM2F4m2fcrttMzeuU",
  "key20": "5NeUgG9guNGEYW4NP5Jm9isGsfoHwqfuWKCH3Y9LZror9pP4F6TXisup1zoNtBmHFStV3eHEnwACRDSe7jcRWHNu",
  "key21": "35T9FHoXo5gZMaYiRz6FnYovLNvjbpd5ug1AtRhzT5dwZ5WFWgRFrYSbaXQg2QCgjyJk56SCSq1zms6LrQaEvb9n",
  "key22": "2nrvHM6M5vNp8E9RU3yKZrCLFNeUKSkkpnPWyR55C5hnB9S5ykTUnBt3ZaK936ZEtpHJZ3VtcXLuADfJz4ENMbCw",
  "key23": "5WkLJTqe1A9SjHMU79wF3X36S5uYWTo3epKY3PU2MA6AaqAu7PcKMGWB4h7wstnmjEZ8vYdDi59TAUc1kRBwhxpd",
  "key24": "2nC4HR3GV3KQGp52tCyQiQcSupks9xBqXR4d8YKmbBbtzUgyNcFqveXKa5k2vLR3UF4KpkGpsmgbLMfNYR1fnBPG",
  "key25": "2DYDMagGXYLKaQyN4tViCEFiv1HtRZQpQuv4nyyNV7H1JZZYHXKS5Tyhvyr5EwMht2kVPm289JinYPkYrapKnKfg",
  "key26": "32Z4BxYThemouBqh1FLdvst5o25itLZJvPguggjqrNmqxJRTXLMj9cnne9Z84eeTo6yDnD5fQabkymob8FCYChHx",
  "key27": "3xA5mtDxTrryvonfY8J1YRKUJYksjGX1Emtoc1f8R2ctibpswFgXvaXDLqrNG88d2Ez83MSNaZSaQu4vJZAetFWf",
  "key28": "64f594p9f4WQ5yDgwojVC3vwGy611EEseiL78s5oB2hvgo69XzGZuZW9ZzzzzAWQuduzxy9NsrUXMWeqmzmRxPUH",
  "key29": "4ysbiXLCS6wibjF98J7JQ7yCJ3MiYRxRk2Wfx4HmTBmsWeTuEUKdHPv75FTdeVrFyUKpzcASFyj1wYWdZFqjWsad",
  "key30": "4KZqYyHwT2zExsh2fMtHSVDNvXgfLoNBmZ9nytw2N31GJJTLAppnKuPHj2bZQifXard5aYEZaZ6xcRFb73JG5sHn",
  "key31": "3uGanQdgyr78EjJYtza7bAo73CLFg3mERtmYgCBL1BX7wHPN4VAxuU8vrJBpbXccKJUExrWzPLT8KcewzfnWVW1H",
  "key32": "4aLK1a7uWHhmNzBUyThXg55F7ng18KQybcyFQJoKjHnorJ52GfpRVytzbKUWSgaRzucBJM6V4GHtbnXdiTbWMujg",
  "key33": "5fLazbxNbTYdkFR6CMkfJBcYee8mc4VEJC85JguFzJ1fekVupN1cwmME85RTXMvP2iRpCGzaNHzyUhZP7ixkkxyY",
  "key34": "PdtuXyG27PCYBHowb2JxXJD7SVNtneaz5k7ZDVgjg9myW8SWeQCqWLbyXzNLApfgssaZLS4o4C5ub96spymL3fK",
  "key35": "5pvLbdfxRFYz6xfqVuhn1F3XLPr354Qf4PcodDzbbDiZBaKUfjsrhuon86rYA7oiX65UqQyKDGpCeXVsRnauF1vN"
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
