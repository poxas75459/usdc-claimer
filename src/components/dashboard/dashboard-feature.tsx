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
    "4XbXDXmw4F4vQLmvN6VtwMpCcNJyHGR5rM5L6LMT8buCYwAKjxEeA4KKuTDh5r3sBfUEdcswGvBmCQqHjzaAQGGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KjU4HBcTVLdtx9jS7ikUdLZFoG5XTS4jqxAWtHCYr8vTxb1oToTp4HGYFUBMDoxWKuUysS42La3tyYZw4AGma9B",
  "key1": "F6SLPqBqfqFr9evHMr6dsr7432ydTQzn4nT7e115NfAUagXY6HkP7ziaCqrQhwxt3KGbbs2L2whYXsfTzZcCLwa",
  "key2": "48rLdAc81jhhmBGUzump9iagmz9k74HiT32FjJ47VfBqBqgtigGBEdW5V2Xq3mzHQDHDSsVPk77339YBT1r85BGZ",
  "key3": "21WPBWaFEDWqLjbC5FPWkCzatuCtBkTDKZeoj8khB5NgUiZcMyNFHfabBEiEymvuzDtmq4WJemrswVvBrZ13qyri",
  "key4": "59ZPsrU7FPNafASWg8whaYwJ9cmUkYCMxuC8jKrDQ8oQi2RFoXG44gXzMypXfJqBy1iNVsmarRUF8TsXDS6UErgT",
  "key5": "5LwbQJmpz7ncADc5yjgFX339pFR5jionVBqXFw3Qy7vUFg1Pnu3WHB8eTKRDdzkUx8Jgtkmzo2sysGEwxpv8jdvK",
  "key6": "5GVFnzHAbyeAMWD8JSCFs3Q351GWs2DQBunovxWjfeJKkenVBXQd8zUCe7Jyh9CsG3zRdVp33EkGAL88vwaiw4xe",
  "key7": "5LMB98MccctTa3P1scdV8TCPTL2sadQkH37S7Tmf8xMtiN21aAFxa3Th5KLksDhnFBUN4x2vrFXKM41DsUiqhdtt",
  "key8": "2pphuRgUgoEhhMw8yqmXtr2XJVuAJRngZKsGqCcLmWHpgM1aqCMWP3zGyPFD6tYKqMfP7Q4VEHCJ4rd4EkV97ogP",
  "key9": "5dUpjqsD7krXbyrW22meBBA4dBWmwrRcuyCnz3yChrxYNqDhboA9Rtnt5EyG1QhH7cVTEJQRBzUQMXkCutjPZLVQ",
  "key10": "3n34d5s4N4inm2GoKtU2LpWt6Acd3a4raPDEPLyvvTaScNEy76PMKSiT29ib3i2noFSszgRagQaC2C1usm6DK65Z",
  "key11": "5WcWcrJHo5y4tbmEhSfFVaRXZod2DBf1R6G9xdkBCt9FgvsneAh2smxKN1afgEq4GfySabDV8GF33AwYvGYR8GdB",
  "key12": "UirdMBzLezh61CN7wMDdLFzEXWvSruir6EYGrtUxtSMkCt3XL9kC2CJwjFng8iKu9VDsu127V2DqL6Ff5a62Pzg",
  "key13": "3GkkKWuMu1DoibnDgrd7f7zJcCi3r41xyac3sZgHRRCYh9suEKB7rUwsd9uyKXKxyJHNnikLagYn5Vwg2zxkhArt",
  "key14": "3s8NgMZM75nMiFpKMW29V7uEAy1AVpGUixSebREDmQoxvDdTEb4VzrrrgijMeF5ozUPXzbg5gUgf6eB4a8kbVZzc",
  "key15": "3eGzooBW3yAobWsYS1YsnGcuvSqM6Urba9AosbTwZZLjkEvHEJZ8on6iXkBWEPx7TYSy67rcDxaoQGgny8rfjqgw",
  "key16": "5Q5ear2EzBRaJEsZHLYY1oKRzq649NT6kTmW3GfyZNVXs6iLYu5BGADH7H9EAzwLDV9WTXGHLz4So1g1ahesxR1h",
  "key17": "4dmbhwEX7u3UNs4x5DvXbTkZoTLGHrKyb1EAzN4MK3kcgtM6MmWyjrY4ZHpRXNgKKN8P7YbvcvMzGbCEfeenvGKJ",
  "key18": "3B2pZcSgVET6oNpzJW1w9h2qWNELowozwAXkTqto8FjYfWDHH3dqAdNRoRGJJM5gS7rsZnb4Rh3JxcDAc5NnNYWw",
  "key19": "2EWn6y8EzM196r64gsm1xAeh8EgoDob1ituG1jcLNdxFe6i9CZLip1bbQge9U5uJD1Z2Bv7U3GWvPUGy2crsrLa2",
  "key20": "2JY6rjyD7jJ6AtNGh7cmhCwxZ6vdJmf1Z9iByykrxJKNHViUegZkgp9h3zi2EvTVo4cX1jRLRhy5mrsNMB8VhRDx",
  "key21": "HgSYm5xdxmLqSmZE8LxWyYkLxqGAftLEG2q1sHDspaH15SbRTD6pFhtXSscF2TcdvKvKMDn2xgAG2rzF5BbwDnr",
  "key22": "5tejMQAU7ACR5QZxspms6wZhXTfCzumfrhjMN5nvaDW7yW2eWzGCMXm6dSunQS4ZAVg1RYiyW95VAohmYfbFTEhB",
  "key23": "5xSiYmSes5z2ZRCqwgWDfXPJTqsBDtX4bSgCZpt6u7kFsVzKUibtWgRCRuX47r4B9HV4xz2Nr8Yd9Z8TSJPLqSwh",
  "key24": "2GL38wMrHYj5xG4T7JSNvP9AX1ms2zSitG8nTvZb9NjefBNS4LR2w8DGSZXm2gHkNqiUV9vfC2M8GLewPy4NYixC",
  "key25": "5HYzLGu1Mw2bAt1n8P7PLLfQWBTvcXVNPARbdqonjyv8hqtzCpAaAfu9vunw9cRMYUxdbpmf44A7rziLwC27BATc",
  "key26": "2qctizjRRL4sP8Ak5Jz2fX4SkzGqG8hSzseYi5Qr3QEVKshoAakqBHZyDxnBcNV6L6PxvF15uJLLYx8zym4LJhkt",
  "key27": "2YgbN3Aco73tUAfkuBqmHQ4HMHKJVuRvxiVUHtvUwH798gpMdHT5Mf7F9xstoCmvpcJFY6zK12S5zcDwTfDr1s5M",
  "key28": "34hKAs5qxC5dFhNqLM1TYSU34y34a7qUZE4QBxv9n15zYQr2wKi4gNRCFDWQogSU5oSfwJxRENxtHkoGq4bjcBe2",
  "key29": "38ZJBABdV4xCMrjjhaB7iAaXFZWmRY7UmS2cRrdZz7w8x1Y6ELyWrR3syGkYrogiZ5LWkvSQnaFvduWzTZZqoRgP",
  "key30": "5H6RLUwVbCqir6p5rsUXCFfgzAZTyy8FQNqo44TpGoAt3dtUqHtReuc3udxuf5BjKEdTv9r8RxyqAYjDvLW5VuHB",
  "key31": "4iYojLUZoQbSHzctGwdtL9eyMRdJgaauy7UBUYDRDHgspFbU6WnwosHALvt36dUiSqfoXPWH4Uyg4U9Lr3eEqF5J",
  "key32": "4FaTspvDL7tYknHdK6hUR1yHbaFYHWU6Yfo1yqZNWzW8C7fBYH3L2qtVrbYGXDjdBJb9jgZ2HNvz8qtyG8uwfp7q",
  "key33": "2cSEbxtB1ryYuTHTQjTT5niCCsyuYCAfgqamZGr5KSTs8ottn14G56o6jXm2rJzNppG2mXksNwrMyNRTitBowKUR",
  "key34": "4kC4z8dbntDES9FDLLMycWNnQbg5AZUVf6dDz9ktWc5in8Dh69aWcBU9jcFqgDayVFtCfKtrUhdePqvWiSz25uuK",
  "key35": "QZb5qx1Q2sr6auFVjaA5m3V7bNY6WLGERX9j1ctnSaZhmHTbcUHjujfdp5ZVsWaz6YUrRQyme3ZtJKT9C2eF4V2",
  "key36": "2SJd1ixZwrabs3XeXHcQuK3yZ8tmhxNSyjWfa3fTfSc14mJs3LEJk1FnZVKnX1rqhEEeE5P5SFYTnLpLMkJt69Uw",
  "key37": "2nHrYioabjF4iBcs9yBtUft2YATq454dVH2TsxhZYqyHefeGw3zcJU5iLtbS2aMAzs1KcCybAYDtbwCLbfeZCENc",
  "key38": "3BJFu1yLdAP7ub4Bw51UXeeLhpoYoP4a31J8x68zXeZFe6kHNNTqVx1oLw91fzvQRBqJj9xJ4ZZX3BivohLQdf4X",
  "key39": "5uRyEWcNa12ybS74k7dGaseyK1X974SDV1nxpnqKdx4WTZaPBab95nhK93TtviuefgsP3kurt3emY5ETZb5qUmMP",
  "key40": "48s7rwLpjdQX3wAUuCpJ15pWBeKBZTnW4WdCujeMBzWBMSXuB6u7SY2YcGnMgWdAVmYEtwsqmMwcQg8r5E7DDVut",
  "key41": "3o7TWkAPiHKDayx9V6LHofLA28v4qogoAQz5y8u7e6RwKK2iAjvSXC17KWBACDhQ2nVchYS57aiVHRubC8XxikCP",
  "key42": "2QVnWVfzcLxCmpPzSScsxBE1HDMUkxTaniNp8k6U312SGXJvSEhpshDLp2GV62KFGCgg6AZC8RdGbCjpFiDR6LeB",
  "key43": "3qekCWwCLvEYWJrTq1wFsRBNE8SRjmxdgCs1f7gieYJRk3LTHzgbLkR3MFvBxVJZpbSKYT521cJXi7Jwy15jRfRr",
  "key44": "3W7UzgrWxbE8NmHikKY6Rn1aCeM8fzWgBAWQaN6gV4k3TeHof3gRWrk9vdkfZT5SEXVHrUxSsJrXN3LEh6XtBZJB",
  "key45": "4xZ79Jj93pbroYQo2s8ucxrCkHYKLbuoGWYd3B3v4crZ5NGs5DBW8CkNrY2z6DyPb6cY5ecKpqa5v7FEBSSciuSn",
  "key46": "6245H9PibHpxEVHKMZsW8ERNfDk1r8TRRnveoGFNC4FhtSgReRcLwhP93zqpgmca774EM5g6z5DWygxMaUECgzjN",
  "key47": "3HE2mrcrNmYDwcJCmHDm4RYBXqTqgUDtR2szierNkMjomACdVxyJ8yu11skZFCbf6tH58zaTDJa9nXr6RirGNkk4"
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
