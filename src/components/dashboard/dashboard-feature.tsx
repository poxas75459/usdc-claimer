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
    "6fV4Bt4LGQsJdUVYcX72cuGjkfA7ALUV8DEZpcNpDkDdQWoXbXPdcmT1NUSWtkhM2VvnEbK2ccm87xKAVWNhtMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qjoHR1EY8UfHNgQLrVBn1PZXfHa29YPDicNckoEqgDiN4s4BJieqYg1bmzdfnSpJDbaMPWpkMxBxFNWVFDR9cru",
  "key1": "UfsXsUDvZ6ytKirht1N4Pkn6ntCjFsCjdNjtG6pBQ4SaGHNbNVhKiJV8GYdNw1U1cpdwuneawn4nxE9SiFjr1mZ",
  "key2": "bca8JhddXmmNWzco7CrzHxTsTJFU4XiHsy32yv8iHdNptPFRBTbu3kCwJ3X7F9M6EsLrDdzofQ6Qdi8ddJfUf1F",
  "key3": "Fxb8ZGTuxKMGteSyosPWsnuoBbdhDdgcyTEBnmMaBvhK4Fr3wbmCkuNtV9DPbRGw8RVfFJj7jA6TANLoTnsiaaF",
  "key4": "5a41RH1KGa7DUyZpj8TEUwhoYfQ4WgQQDdggEZH1S44MSEAboKkkhtzpetjytGqgqA6gLGhZ5ZfhAsELgVqT64Jj",
  "key5": "5i78gZ1gyaUZq24MvWwUVvHWB99H51Jxcbcor8mkEQBJb34thtiGdbCT4NUkDMB3RZGmH19MSmUh8bhsGZy49jED",
  "key6": "29icTZsHGXNPhHW6sR42MtkSpmNpmcWiLerDmFeDZqmq6xXkJhQRXBnrZXDgAKsfz3PHemPwXzJodZRgWyJrhhUp",
  "key7": "mUbvMV5F1N5uSbSVo5wLoxmjup4y7scb7nuvmZ12Ng3qTZ45CmzmXQFHtonwZ99Wt1juD1CBT1YyoRcnxVga9Pi",
  "key8": "fWWhx15BAj97ASa7zsdijxKCzJuR1hHMAXtWQtrrF1LTFgTeozsAf4M8w41NmQzJmFh6gv1qsx5rPhjJ99r2PH6",
  "key9": "3QpBeGPo7CsmrSa9jWqDZQSkemG7LLPRPTrfY2jyAEiF1WXM7KUtAkERk1bTs1vWiRP79x8XCnvR2j9KNwfHnGFf",
  "key10": "3v9nCz3AoLBCvpSvVY9pLanGwaycq3cLDfe7fBkncVmTuS1pqLeroArH5P3DnZvg294TGohupPZvxUnZwVFfAY4z",
  "key11": "379q5HDaskjzUd7AmcZ6i47GHe5f3KuuvzySsKGpnWE19DDGRhmQTQXuL1fayfY8Nxw5pBojHAFgoRaqf5K4F7Wm",
  "key12": "4n2ErPG4y4XGm1c9vDbKd7Z8fx1pXcaGjvomcXy6TWzUp2ohnYM7Xm2YZKFomeRV73RUyjs7vFyLoAvfzP5A89gY",
  "key13": "2dQZXoTQu462AJirdvn3MirEJZyDmxc6nDVKcjRV35qj6xk9R1Yb83trRHMPQKDr7TRWDGt48JChbsiKAShrnjm3",
  "key14": "5roPxHXMkJ1ihMHFkqsrTQ33gTk9EKe4KYYgzBUoc7dm8UHofBX7w7rKhf2ek4ypojzr833mhQXFtAtGVMxaWxWm",
  "key15": "A5iE9HgUBKLTVtYLDksVWfvEK5nmEf3Csp5veU51EiHa8Y6E3ndXViRchSAU2jNtarauRMipBmoSQMaT8zZAsWB",
  "key16": "5fNr4Yg2QNZjHH8SqcWhyqHazpaJhAgUQRWAdXjCkUrWLNWxCN3JTYWUFohHGemj87v9mUvNq2592cAkWKuaHGtt",
  "key17": "2496kwqtxoqa4VigiMRpG4hUoEXMB5SELFKiDdFHgTd2fgkAXpKacefCvR1WXFAG5f3Twgo2Y1UJEAGC8x7Lp5Vg",
  "key18": "3ArtHi4zL6WKD6iEHmP96qzqAV46LKzeGGTcpBqtSac1jdyD1aeWrkTh74kqc8wkxuaRP7rnccfRPRSVaboFF1Uw",
  "key19": "WSxwL77rmmg82JWqcs58fRKKQuanwcxB6dgXUphxJdcsSW1PXM54wHzPTLPFw1ioj5L26TjV2mAyMF5Dj4Bbt87",
  "key20": "iTYmRq59PFcWky338CzjzmS1oQ3ysNhMX8r4sKL52MfvqdqwCQvneLRKCNmKxA2TrMxK9GKzMzQCqnuTp1n152D",
  "key21": "sCC5XZWCUmLwhH9BCTbEhPyfrBgf7uv18vXgy2BdGw7cwAApfNmnWezVH7guDrsr21m6nAnMV6qMJy4LXsCCBeg",
  "key22": "3nfLGhwMxgQau6N4Uw4hyadp9ZXDajj4dSd3kJEnwPFkhNv4sYdPx5Rqwz6cmKzfbFYpD2vUk1Pg63BMeokQMKLG",
  "key23": "3hfADMTSCGKMNg4EAh77PXfJi6E4JHmjhMiXb8JYxWTKBoWq7MqSVxgTn7r49J7L5M8yVpiqLtXspa6oyivwhkHG",
  "key24": "3YSabwELeu7E8rqXv4YTdz9dJog9nm18EZEiUD92x98mheb6qxCaVR1RmKNhHtV3KQbTXojRfnMdzovhsBW2RywS",
  "key25": "31Ab6ZCTnkPBddG6YB5vEmkWVfZe1mWYsgYt7LobNGf9jss5Cf4HtSqSqw53M7WPiGMQH9ekDtkf1eoJ5J8UB74J",
  "key26": "3v6T5qopUDsnBX5cV22EqFieiXf5zUebbcfZhKhmkAMTirfCo9QMDPeCMHoSUpmFXn6GYMxSs43r3MRkBw65Eadf",
  "key27": "2bppL8JRprJy8DtJUpB7kDU2E4H1wx29JUrcTXAXCTE79XznvwnGwAaSmfq7zcnMrEPXzc6jQ4wPWCz1dsFczjV9",
  "key28": "5doG6nYceyCNxdMmGsAUKvMKf1FhWexqHVYy63HwFvMf9NQogsadj8VxH2wcfFfV2D4PVfFougQbqDBHXMr1T4Nd",
  "key29": "21yGZYT7v5r3AFEcQuHCyVYxVVmYpTDXr2WtU2XEGuGRCw5zwGcYQHxcGdFHoWY8XBPGfyVtWN14GFEvYWsrD4Bc",
  "key30": "4KKycCftXYunb193rZ4iXrrGv98yPzddbEarLRAvrnN2ABqjZjHSyuzYVnbP8ZTwDtcvWx4CfCAVksVGdgX5uQ71",
  "key31": "YrFbSsysV4mMAxBMFfpTZViLCkvVUXLuPaqnBVm4M4fNYmL46wZwfT6agzFeSVPPB4dEy3f2DJmEjbVadxnca6m",
  "key32": "5G7zzfH3Smrb3QCtzwABiao99KfGsLuaYXW7QgQcK4s2ojmRUCShmHJQsEnKU4uM5hiLr1BALjVsSEN7YpTL2WxY",
  "key33": "ZWRxNWiTEmTWNGtBUPNw8A6oXW3mkBJSzEKNcQXmAfxihVYmL9moUWMdvp6e5RvmjzNPdP6X3oA8J3opGh7LZSE",
  "key34": "2rBsCi1VxSwrKgTPNouJzhecwGpMtnYZrGFwLoG2ARDv5mRe2VZXMpFVrCKKA5bGP5fksFkjogGt1WGwG6QMySS6",
  "key35": "2bEK9bu2U8f8SeTVv8Ji4kZ33PC4V3f3SomZKoArHQMY73eftFgZWDr7EhV3DCff5GGQ2zUiPQCnzQyVTUL5vU3B",
  "key36": "odWrD33hJBRXpXqoxQMBT41XC28a4LwhfEJrHL1XMFvyj1J8zoT4bRy3G4Eg9BrGqPyFHWxC2wnsuSXsz4yjWye"
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
