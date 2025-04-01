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
    "4tpvzY7MmW7omcYdXoyatMnrTUYuQyoLM1jGc6mDFBtm6qJa3Ks8Z36GtvdkHa1xZ5USsSfrFFq7oX7TV8gcFGq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nFpVPdqRbik45DsM8JFsTFPPcUyg7YKeSjMZQcKRguCUYW1dTYgwq8yxoFnVs1Lw6Jc1daby6TRGTC5wZHPUJN",
  "key1": "3zdnCtPio9MhH26dVeAQHRzLogyYQRWvn63NNgo2y7X9U7RLNH4wDFHc22tBmQPN8W2AqGvRsPxWgywmbnBvoNVx",
  "key2": "sxd9VFxiGwJASeEZrV2G3ixFFMUTat6KHHDDBx57vVem7X6p9d2x5yPJ99DP4JXJDo1QFSL5Dyra6RvMpjPLPQu",
  "key3": "pRcwjqKLRgYGnucssRSdyP7dBNVzv5jf8BFqGvRvC9UwiycpUSe6Jq3nWyGL8CaFb86rwVrUaTmpWPjXMXfSLGe",
  "key4": "M7BgcVSjcmFg9FEiXSad5wZYDUkYPcDsn4ahwaBoz2CEy2oHqC9KdZcVu8ufDaxBYLZiGcyg84QCxh6iFteMa6M",
  "key5": "3VhqTVCU7GuTcg1QnTuKYze97yRsCTnNJcpBqqSyh295azhf3CRHU46Ns6tBSPKjBjTUHvfcr3FR8yR1r8z88UBw",
  "key6": "4jVV5qCgG5CcVT6P9JePrRJ5HeXLyvmKASw692xZVRBZQgWh6R3wyKvtKvsk16TWFLcZfcjRSYDDFrdesTYn53Yy",
  "key7": "3HFjCiTMA1pHTjNsAEBWfGVa4PvpPqu8o13mDV71822UYaXUrTsESe1bhQFpeTZ7KjKr8ChzWWnPkEznufxHXyyy",
  "key8": "3iQgsdDazaYPMQeDuG6FWZMqumL1b47GiZvuCuFdTd5e1YZTRMD9V4vzsUwu6ntvwwH6DD5YLE49myyUch9h5brJ",
  "key9": "XB7u7TUNpVFVDvHDMegPTCW9y5zmkaPjiKYXcnt6Qa218nRAB4WfrYRynhpCbQH61VUtPxuZQSiMtaRH5PhvnjG",
  "key10": "4TTML4DWPwzzGd14emVKR11sZE4LFLqyvR1miQTVRZdmQYsqQB29gwFNc56u9SWXNyHo2REqGPw2dvck4VNsh2h3",
  "key11": "2UAsxewdsi89yLCoqGbXTfzcQXDJJAwhm9yKq3N3zm7ogPykJrFUYrAJthkyYNTvvP3sq4hKnV36NSMFDkDrbRgH",
  "key12": "4gBMm3WzAucE2WzGzzgRXVLGtjfkpajCoUG5TpS7MmKwTCYicQm5AJYVCL7kHxm9buqwf5aXjfhhMJFEdRTbu98v",
  "key13": "5qp6XpFDfcVYSQpfDHF9Pp9YGos9UacECqAqAtHJxdNLB4LzAL5M2B5oeQyAEGhEqyZ2ChgeiU8oH8vQCgZDhXvf",
  "key14": "5h3B7PfQvVgMiSc8fWajqRHbvnmjEAg2P2NttwkVCZGANJqPF1A8jrxqj25D25CmJbw8K8TidjNJRnaducM6upc9",
  "key15": "4rNVZURBcwhXseEMXfk1UvUiCTRhDR6ikbiUbD2xTzQvowSKuVncDYy4uGn34UV2xEeAc1j6CR65irDmcPgZHpoz",
  "key16": "4RgRkwap6tzjRwo7E8i76Tn1JfyqQ9mZHcnbPBkPbXJfinmgGVm3tFeMFMLGa9uvyBHVtYhYyrtdx71Ls482q4Gz",
  "key17": "4xFQwfnpEV4m3MeDzD1D8M9TowKvgwCviJ2MEqKMRPDNwwx7ggtE2vKMcjLfVEPHRjFimH4HStP13MquXyKFJsXC",
  "key18": "6gHukw8sXBUp8QuFuvJ5tac5X45poWrSpwMRtX8zmrMsvpUWNMg9CYBtbi6xYCxSUYGnRndEvavJ6G3zknAYxTU",
  "key19": "5EZrtyDWHxZ36h5SLQ4fkbKzkKiQJvT9kcsWDhXntr6SnqpobPcBn4JuPSh9nQ4SU6SH7bZzd28AT93QbHsn1pkG",
  "key20": "4wq17fcD7yiB8jmZunMaaZpoYUysWW5y9TPaw4wyPeEcfb4GgZvr8HLFd3ecN3KJiTNH3m4YpyBgN8sKpnyZrNrr",
  "key21": "RbfUWizQDTARCM3i9SF8mBBXCwK9inVyg5pwiC3VLXSXY2Z2vULKJkAW6C3WxkH3aWb2U95u7us1TZ7vZCkAaGD",
  "key22": "253Gaum9iF4dLXsusGJPjn2SN7SoTXeHeREbWUYAKSgPvCYJDnxLiS9UwbatoQPQsE5J37nPbV68w3dHxqr4G4Yc",
  "key23": "4AGkiNu9ogrqW1oExbyTxeD52W4b3m6Bj5QFbD5gWzTbkV7o82UXc8MgEvqVqYkCCjkvs3t2mHbECjJ1MKt5stu6",
  "key24": "2ctVw8gHn5LYRU4XsAVpG7Hrg5xs4bEyfM4MJNRcpkSA2m9JuxYSJggDvezubnRG3zc4zcmJ5dqbqfdUAhGjRw3X",
  "key25": "3ASB9Km5fgdqxUYVTigH8Q4kGKw8XCSNFAi535BNMCWHiaYsXP8ZC9h18wu9r16XTBknkUD4uDTkaBfvLmedRKmL",
  "key26": "4DZNvo6tSCvu34VWtDfW5B8D8UqxewSUTRmZuCLXdq1qEzAcCaS4C7hrwqT2Ay5csdzQW7rynbRX7tTyWYTmABS5",
  "key27": "2voWXT6CjuiGdU1jEo77RZUkL4bcyQfmzGYjFUevZGEV4EgtGKG3zYRuDU8goWHNkra8fcxdd8YTuSAos3jJ9AWT",
  "key28": "4krEYaptq7cZ6jdk3wQRTj9ZYgYrN3wB2UDXJopb6LR48xEh2i2CHaoVGPXEc9Vm5kW9bJp2ykXigYV88t8zTbrQ",
  "key29": "4nYMSrPCNy7PWsWgGBbts1shUhf1SZtutGVAnR2sT6h5VaoAcCK579gN5mw1BtgGUWFCU4HfVn639hSdisqHSYQd",
  "key30": "2DF2zp1okHDEi4eeo23k5w4Y6zEk9zkS6eCvf6CeakvoAEAbs1TQFQtLdY5YxRMLW4MkFYWGAzvQpM5o5zkAs8bE",
  "key31": "267WB3QbMP7okcV2b99pFxvf6jteHZqbsLA158E1bewm69S5EuyWxeATtiHVSP14SF5FoY6zv8f3cKuncVYga9p5",
  "key32": "4m9YVJLhN5SrKCV5zz2DPYWNpFCzFQxnUCeoEvomPGVZUenLs8ZC6CRCpBhDdDNTQfbB5mqUtzLRpMy6mUXCxFWS",
  "key33": "34gGu8r7qMsp59494HsLDqmu869PJ5RYzpXmfWQyPPUy2dEbtyC4PHo6Xxddbz5Lr6HfG8epUWC9ZAPoJfjDYqMF",
  "key34": "3Cu4xpwH2RXJtvL9utmJYns5vcZj56P19GvR43wXm1AD26LmXd49pG95pZjsNEzwvVuexUqWCg57ZRUsSEBVUssJ",
  "key35": "5NpZ5cyjiiyqdYpfJcpEPYW6iHDdqmC2FkskP8uAGNKNc28h9Th7Y3DLeBJooqdR9jPB9ZVJSG1cxrT9hhpCBhiL",
  "key36": "3ApBxaQ1V4eTWtrn6yRXjguBK4vdTSG1yVX2G9Z2oGwNZwPGrQh9azJhWv9GjWaryYhVURB5MZAo3CcqvQvEJFyS",
  "key37": "3gB9zsyTWhpEKn3o9uVwMdTrZJ2LeVMpQumc74WiW95YuawtN2es5ktGMu9Hegw2UpRUDkx2RbLACUY9HRmZwqAZ",
  "key38": "5RAdn6N6wnNZjepntegEuR2Cb18qpL5sgVbyUSnfWJGabnm5gWSwpkWVcV8VM6PSacXfzeZXqiwpKcGaVPvNAqkZ",
  "key39": "PfJWfb9bCRaBx7mD6n5mmM2rRKRLFFfBUNUHcFBMhh9kp1s46Y3GJEATLVEQ8jt3PsZXoyVn6UygqhpHQykEwAU",
  "key40": "48D37s9coJLS2TV9Ysd7kB1pSgVSv2cB2a9aeYqZ4ybQQLEXdPxbg8pguzhNjJzweJz4fz9YkfhZxhuJ3aVA2H2N",
  "key41": "2zWnKUZdHWteTjPmhG7mpuSVSPS79REC5Cx6P8MHVQQqHyoDJvKQESjSvcfjQNx2g7XWmmVinDhtAjVKWYaEotwQ",
  "key42": "267T7Avhv9x18aDQoZykF2b1jBHpyNWXLBBbepLRNDdwH4bKkpW5P9Vwu4srN2HnstB8YhTvA4TDvn3nyPWpoH3L",
  "key43": "2VGSDNtspVmtdZUnRrAjG6WabtReejwDJXjEbFu3fdcK767fYCV3bgVaUvbsegcC3DKPJTCwiiszQgRzhRzas6Ga",
  "key44": "2tUcPppQM4D5fdEsiq2x1XdkddCrKXHyYAfjR2wSd91qCXRxng2dbfcYPf65iuGMZSzYh4ggZcCDX15dGtehFxw4",
  "key45": "aCRf6VPWdtkjxKLovD18NFmRKWiJNWhfpzrzAc5ogkffueCsUKBjpF5MxWdo3oPbRtVUTwz2ahs1xq4FSeUxXV2",
  "key46": "5K1WsaSLHUbTJg2y6XZdhLkG3R7UN2qQ9dfPXhm6YeqkroBMJDZgR8BZGfTANkrgB4Wx8ScNUoz2LmaFhqN5MR85"
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
