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
    "5Bijy9ftT9QDVeTC8X9d5gHeuXhD4T78kFvUmajyADouJaxP9cdSfytCWnva7TCZP2eiFDN8gXwnwXPyrFHX9dNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Duip5xpbCPARVL2jEM1uhUvp9m3AragVuBp7ijU25Fw8Qxv9foXZSSjSsjDFzgb8ScHXKYwPPHxg2YhZQyNCe2a",
  "key1": "cqUE9o52G4dVNUQ6s9bKBw7FG8tLf6MGGxqn3Swep9fCATXeSMo1f3h6oDR9vQ72z9Q4QCaXK9pGogzCiKLrvQ7",
  "key2": "4TgKfeMBihpioNuPWpqi7kGhPiHV1mmr9ZEnokgbLB3nHaaNnQ3eTGegHMLCcujdZsyJyueXR8z6E4KYKQTkxzuW",
  "key3": "5EUPfgPeN9MP4tq6mj7JsJndbM8W9mT278RVyStdEdY1vsB3dzgbvPMixKzDmbN7wq6jySeNwfeVqin9oeLZo3S5",
  "key4": "2bQ2tBWaBakSRZjmYWi63NSRMvovpG1rRjgQfkgUgWLxo9GhWZMtXZK2tSTVENmWucEfdzTLuT6GR9EeHjpeziEr",
  "key5": "2EZPES8jYRx6yAjxBtZUbHcNjfPNa3zkdk6SdnFwa9vSoBY6JfExbk4gSVZEv5aAQbqy7Ezs5MEnK3CpnbEnbSum",
  "key6": "3jYoas5974TnNcoNv6Gy47WW8kb5qqzHrApsHhVY6wLu2fynUvKvepMXQ4ub2cCSNAvjXBdQYFzoZ7YweYtjVyp6",
  "key7": "594RBitoYpSZ2Gvr1LiaswZYfpSiXL2hLoWqdjdSa7vwz4kXMGfTDQnbgk9WxkHzTyFf3aLYo9dnZmtWCsN3PMjf",
  "key8": "2U1Y9BA2RQg1sk9tYMFdJv2HP1ebTDfeR7yi6PU7zXbphNF6VfUCp2WLbuRJp6BfVyNzsNnR1QzwUwefRcW8EhDY",
  "key9": "7Kn8u4HzaWxBGh49MRPcPrHDsKqJVmw4YSi1ntRhoygYrNEYaVmMt6mFM3vXfKVbbWF9v7VKBU8CmqPmXL7ycXo",
  "key10": "DGVEA3pAoNuKF1TLsDFcd5WPQZvZFTWghSS5qibpHHJPnQgUCGYvaN3tYHiqbA6AMgYzvakoYsv5aqJvny4PPPP",
  "key11": "5n759GC3MYBgba1K9NiyVNMSj53JVQaKjZ3T6GesyQ5Win7ehXwsLMdWHTvXUHpYXxYRSuSTtkrq8obviwKfr3nQ",
  "key12": "t2s87fgVjYoSzNqCrp5ErmXFcR9QKpw6aLV8YFMdrLmqGCjp41y8wdS1vqRuC4KEFs7QQHirpbVnX7NqaTzygru",
  "key13": "2QsSKBAjcAnYaUFQox9V927Q9fhAa6NnUwBa2ZtjP29SBynv4hfDu4tsqEPqcb2o5YKqPvFKa6NEV5rGiSHDarLS",
  "key14": "3RjSSJLNZWYWSTE5DFttQxT3jfFMny9KL43ehzmuV5CUZM2ZnMCKM7UryBeh8pKnTBvwEAW8uUjvGsZYCmQrg4uj",
  "key15": "5xD6LHzsaWsvmpUXBtNdbnqhQCHhwwghf47W1ZYwF8RDVAPpU6ZYxirBgi8xeThb1WkYHiaBE9NYLaph2DEPhELh",
  "key16": "5h7XRttDoxx4u1uL2e6jaVTjJYdtTRTEyvULTvMfnxbq16Bh6bzkz5DZkJ8xTsdk6MXAVNNyF1LQvYdRosPS5WvW",
  "key17": "51B5Rv1GiNJZ1qgcbZFrzwPJZia71jJuZASXDKAE5mY6jhnrZz8JUaT8uNk2aNmAVNk9DH42EURFDYLEL2UnCWeC",
  "key18": "4yLQTDehGn5afWbFpbSFnW26dbK63U4Gv7qmbMNVsgAg5qmdGnqteoDrMkBp1MZ1MiH47Sv1h3ZQSZBdZKVQSTiP",
  "key19": "2ywvTQEFnRAAQF3iJgjRErsqckvCC7wheoz5kHDY22gTsrYn39kPtGCWFkHMzoLnwguxTB4GL2L9SSsGnx9EX98A",
  "key20": "4bNHBK5wGnQ7TJ6pmogheQE3eFrQ8u5wSexqHtTrdciy94wDYfUCmaVzDR3uNgjkLf9S5ksomQhDgy2cQtTAR2AS",
  "key21": "25JysWJ1SUi9QGCbpuTPdWrBP8ciJ4coiiMcnk98k7FDx9sXNLsZsTEY8Y2ZjNRsiiuD9qh4YqjcPUkwe9bWqA7R",
  "key22": "4C1ycc1W4y4VW2xjjDdEpCSjTUXjdgwwoaLgGit9k1WcRNuLJmYHrVSP7X7ewnUX5b1Pkm94R4nmPKsXqqSQwZHL",
  "key23": "2w8RYtLNKfRm1kvaAi8EceorLLqCMX6BJZt9s354Cp5nCvNFfWaqotWcEFaydHY8K4eHVwLh3vsBNXScNDUPretC",
  "key24": "5sC6c2xm3P1yGYRyS3TEqKHAkRLupMQL2FkwQTqTz3U3cHKsBh4ewqpLcQnd7G9BV9uCWJZSacMwzY4UkAN5TDwK",
  "key25": "5VxzqpuoQNWRjdJKvULDBELPmGiLM2Xhnx1DMT1dDdcDXy3u6ZmDV1j7GTjuUW1hcQPH7XG7fszp1jtbMELtfs4n",
  "key26": "2G5BZiSMhsqcMNCkHxKmjwYMrhNZtQBNoXeoXeVfEgraKgPxnu2L1vqdKJYB4JyydZHX1YQQTzFzorA7DEGZ6D42",
  "key27": "22UXH7XXUhPrsNR4CxgXRmgJXhDzPiRvSkNPhxN8BaSUCaC8LeXYS9GvBeLTmucLCZTzF53BJuBCc3GUajFhduQu",
  "key28": "gM8PgoGaH7hLguXTrY4r4mraxPHJHEdry7k1tNBA5fm7zY1qmNS94UMS5E3ty6zM8ohiBAepahsSQGsedgPnnRL",
  "key29": "C8Sv61mxRavVu1xGVDQC649Laz46kThdPim4aVh9yCSig2LGnPbjXFGvDDpHjdG4s7KcR7M1Ea3ooRXZm36XStX",
  "key30": "65KrhrWuZmVP6PqCieedYSsPpwhfPG67mvyxe4swkMR5n2cuoVZioZL1U9KiUtTm4MvxjUpevAHXG7mnieWpjZ9F",
  "key31": "1t6jJMsQtj6BS1EawvsnkTYL1aUnZ4CwuJU7w3oP7rPWTK6DKYKioEkbWC1KwvZn6b5oL9fMBP3Cr3ApUeeLwTC",
  "key32": "Z3rmJSXY9AqiGRV6F1kbcNvCK2TiHGNkitSoVm8FDKh5YLdK2o6YuanxCJ29xbS95BykZkrq9uoCzb7m8oGDS4F",
  "key33": "2zaR8oyDCNohaiZKbKoLxFS9KJC4cALyjPAQwTfbZJEgUpwVyS7FNoPLLd58ETSvjRgF3NEWv6ajWM4AhF5bA5QF",
  "key34": "4fEyHjrxCwBxLX9XV9FyDXiAYpWmwLvpY1K2ZtwjLL95RFoAaHSFcHdrCghgzJa2Wzptq2bBDkU9PXwmQXSBFguc",
  "key35": "2C2wQ6pRxhyapdP9trVkY6pTQmnCUo8zuN24egVY2FXfkiuXZFTgRGavm5Qq3GtWTtzbPSXxWnW9vQzKumJxzvsZ",
  "key36": "gtAacwX1EsYLpY2fuBSnhAMX2gStorhXyz4oxtWrmenUFtLd5rD2o2FqBYmN14y1bZxg2v32H7c7JXYFuEr17ib",
  "key37": "1WsSoFrBwxNCHq3iU78rkCagHShetdqiTcHnHEjThTg6hRdnt8W9N1sop5CLmpmEygYB95bQYc9wHg9X1JJdrM9",
  "key38": "2sTrVV73mpCur8woRfy41V5Quu6jyP2fgcTZj7AhKfpHgdzea2cU9KYXFUxRYtZot7LEWAJqfyFTWyr1z1NxGkUN",
  "key39": "54wbFWzsRMALq1iezijwiCKLEKTnx9a1baDmSupFggozZdi1TxMN3aUTttGw9NKxyNfUV9tLUVz2d6ikJtEDcU2d",
  "key40": "24ziW248Y11kfk8VsUjtJC8UL7eYEuC8xkQ43by5eUgmBvvP8nEjWQZT1d26oBpx86FG9mToZbUMjGWbSm9ETWWw",
  "key41": "5sKEwX7FzxEJPUkZfTFSdAvtNRwgUgMeBzub2tp2iVfzknZPFMgBr5B4HNsaXSkbQoQHf8tFh3rEPVkHTLsvL71R",
  "key42": "3c7njb32EufxBQPypqH1wz1EqFnx32UBB4qzKfs5K9yeF3kM57TE9fx5aUjnAYarvBHRZQ6ZGN7RcZVoZkFcWQHB",
  "key43": "5CsXA5w3ZFCc9iZTAbFMbi8tLPNn8GZcXN6Muas6ycJW1YBQtcpiBexSCCV78GSpUm8roQ56nRGKD6xCWr3bmRPc",
  "key44": "tfqiwk6g6QkciTfzp9skvjRMPXx7br9iZsVkQ6UVzqwijgcwP6bbrab97MtQfw7GhWsezkYgvFudaRneV1aVBM3"
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
