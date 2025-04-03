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
    "215fYF4qBheufKSAhGg2zw4bhrCHsgXWZZ3WHC8hzEDq5zmELYwgHinWpMnFuRt4nZ9Fp3iQXjKJHWjd35LyGJp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QEE9hGgbHeLiNSTKLdKLBSvzNBtD6CBYChT9R7UUnhqLwkCo2WbGAY1XVkQdzaBcCWXLme2Ms3yySACqTjGVtAk",
  "key1": "3Krj7FA8fk9Zjfv6PZgr2T6vfuYBDkqV1VoxsG1RAYzfWteRfCNjxy2dGzUww8MGcb5M47QbJGz9iJeN1dEVbnq9",
  "key2": "2hsfXDydBro2sbGzZZpcGQpr2ddfiDCS4kiQZBBHfeoUvnrCccrHFFF8ePocL5TMoFrmPMFKZQprR3WykjVZJ5BW",
  "key3": "4sUPzeGpQ4rGcyY1Pf2WQGGyYQ4niAoPUoK6gVVHbJhiEoqNCwJqzapwrzXhUPSYVk2sWDdjcKbFtsc99tHCZQgz",
  "key4": "3qKSTtF5HZy3SPr4d4hAgU8FkSWCTGo31HDjde8Pkx25fwRattRZoFj8gVrwrYP5pGPhXXvcynqgvPUK64VDgUph",
  "key5": "2CuDcgh2YGtcYsj1UKwwK2Q6oQUJbT2ose6uXTaiwgziv2AwJmQKhiBzPj31G3ZtKAHoWfvGHLiE9qYs6kEv5dX",
  "key6": "2s3pQpgonRS83Z16JXiLspXb9QQunRRmV9to25xACwcyZEu6u6EzWj4XkGPUgfs5ZCvLkS3hPmnTUL4uW7DNeWU9",
  "key7": "3AekRst89umdB1X6EQrzPZcjp5RDWkmkaAThXTpE6nQos4Ao4Xu53Py9Gw5VePSjZGRrU9XFigFbRRLhqFYwTGZn",
  "key8": "67jopCrXXnKzbQE2smGpmubB5SCYGWo94QBrrJHp2NYSLGomvJPJQGmaCEACSWPu73KFKhqmfS25tTdoZMfvecUe",
  "key9": "3iMHY4zGbnYxMV7pWqyoyFm31iY2atePA4S2Vrmfrf9BoNwDTEgSCFjt4jHhCM7XtJpLV4EwLTxtBMWiXVTFzzxg",
  "key10": "BkgKrH6QnKuq4A9MFwiprCV6aw13hwPwuYHEBevvbTMn5XVWztHzD8AqMnuNpEf9xgGYxDsuNfRz56hKRCQsRWu",
  "key11": "JpdwiMA5zvne3YVfjGSRNUtBUShwJB1qocndecriSuqmBBmSaSJ8DcSL54DpxfZ7pTwCmNBBRpTv53EPstW1axD",
  "key12": "3Dr2PHYFmC4J14b8cyTD1ZRN4G2oueKyowVJsi253RNsrqZaxV8KKhiDgBckzq8YV2QRLp49VCJZnN4NvYyRK9L8",
  "key13": "4FusBCUkPDvA9TB4sy5ieq9TCaxfQxHT8RsfTfQUokK5rERaqkLMAbXvcudhZsCVzATfhmvh7PHHHiEK8tkwUibG",
  "key14": "vcNomkyeEBEQqR1zSQH4UaZcje5ToVspCuTVr4s1yVC3n1iXDrGcwRkjRpn4N7LBXAEEhNwrAmmG8y8ixDYBEgZ",
  "key15": "5ekTkecfAhMh5Zu7kRsCiBXF8b3uZn72F8A45zPtBtSeKPRGAraRz255K3TDpiabCsZSaoUfnTbjkLTuE57oak4i",
  "key16": "5UUe8fXnwKX2etFjV5YHRycFnbCeGTkHpmtcsTiM3v3ehNX8mzbj2wBpstScfqTKNVn9yEsvToWHnKHvebg3C631",
  "key17": "5mHNFH3Ezzchoj2d9QsGnyX7uitsHJvTa6gRXNL2GFDizshWmqk2zzsXfrqDQHELSZvrRDrKbvbDsETo5Uy8DxLT",
  "key18": "2nAuoqFCAVbxNWokUzW4gnMpPJ39h8ojog6Zkn6pH4xpByN95a8ogt5tNnTyTPjzqi2bvisRPNN2TkQoP9FZwhyZ",
  "key19": "4biD5AvbNrdchE9otLzV7va1wpVDL98SYRgniTxL8FceofNyFRPFpRb1VfaWyXvdw72GS2b7j76Xa466LV9zo8QD",
  "key20": "B1MgU7otBSPUYnu4mjpT9RWdiPm3jSuLsg3hQdGv7E6Z3RcBq3tWRkDagnrMHC3UdALwpNYYypZ8VgHykWjjDW7",
  "key21": "4rwNEwKAxRvqB6P2PCxYDu7iFNDtxH8ct4mZ8VBFqjjQQk1idp5zscqTGwcJNbJNvPJExekdVa5n3YkmKjuGApsb",
  "key22": "3isNn2mQpJjDnotcr6u9nuL6BJRWsmK6cttk9e2TMT4wP7V4FUbPyg5ZJsw1BMAbuCWLNDuzdHocUcYiuPzBNTaf",
  "key23": "2JbeJ7eLuUJyeSGyxeWpzjbZf9p8hcVnoDRioH6od3K6yvnmC4MYJAMkye8vARtcoytLMdi3QAd2QozZS8nSzTUa",
  "key24": "3WrrMyeeK697W4b5a49WNoN8CBuuurTAAQNMsQyqnqNTEEsze5TwBdVxh8GforYd8o3Bax5kxFgR17bwFazNatzG",
  "key25": "3yk7ozaoemMZ36hSNbm6j646w5FJ7Ufz3j4MBGpHfvM31jr8ch5iJnEGeke5wKa7TKZ3ZTUtSM1KuqkjwXD8qMSy",
  "key26": "4AWm2hMU4hDpjSp5tcpqdvo68Y1ZHQH1QjcVTrGDu5Y8P6WKDHDujJFKb1DwmJJgM6azToxuWVsq3bFL8w3T7cNR",
  "key27": "a867VN1ybyz8gsLVS5RtqQns4NodT5Yk7Dy7QiegxRSVZoT4X5FybrjavJcQMzGmKLp6f6yoA3ksKTGUGr6W2Q8",
  "key28": "SNu8jWQe478yvdrAq1R6pVJkefjsvZ2X9gQkxKo6qQEFZ1vEF75NicFChxkMrQZtvBH3NJC1WpcFcTULqViY8aq",
  "key29": "5NGzVMpG48yNXiZoZvxLLJW76BNTsokENpH6P4DVS1bVS9ZB1znCk9nPMCKDkJfCa38BF1EoQSNJGymqsTJCyNse",
  "key30": "5fEJcHnV9YaMJmDGFqoGUHRp8cwQnbRsb11URKJ7mQQL3CC7MtcJW9iSTztCPcJp4qm1RfDQBWudSNz8QrEyshPp",
  "key31": "254192Yib7hpbjizX2T5LLzJjkZDMqJsVufNpVk152Xg6yMZzEqMnhFbrD3JJ3CxiNi3GftihyqLHcG2qxUCTpVZ",
  "key32": "2ujSanD4WYoznaRogsCo86LSDtBx2fBDYEpEJgPuKDXmrGQj6Q5uk6es14xs5RiVZRY3uPoA5sxdgDkCkuwzY3Ur",
  "key33": "5dm4vcGDDec35MnPo2bi6k5pxbuqpsEeT4NNwiJduhaz44oNhyo6kqseT3fxSDA32XrSEYjns9xqctLxVE4y23ZL",
  "key34": "3iT2TRJFJpVSVVUVsMa5g4CjsEgwV1pWZ31CQkKj512dX8eRFJvMxMv6x4t1M6FEpzF2xfDSUehweixf2FfoouUp",
  "key35": "2EEvriyGmk9fFLzxW3u51UiGCgjhWJe2KFKDCvQa5cYimKfYivNzo2EC7LYDPzGf1VbBtHgE3WQw3F9zfiwpz8Gh",
  "key36": "3odTcuVnjiSeV5TaK3oUHN9F7DEymZ5aV4NPaSHfZWo9ZHTVwA4GHrqrECYE1aDfYQVCoznT99aFdrgNRTetWUWi"
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
