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
    "4Q11hMZH4by1QVTeMNKzyTfpN9ksWEApoHUMb6Me3oNk4jK1uWgXjyzcdbxJvTQrkXgFny7RW9SwiyLNKJLYutoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vLwvRrsVRq2ZqwjkFSDHEG2H8jh2W2i6s4FrrF1oBSsa465tLKddaywPkRfyLdLHxcXqspatXNmdPHe6q4FKkeA",
  "key1": "3rbrANqeYnNtE2d71kFGcdiHNivBnNLYBwr8TSNHpZrwMf3QRiogMJ6AaBMwqNmNv8j29JrULurw1TVTJEYE4xA1",
  "key2": "5x7Z6Vf8jaj5o6hygJVjybtF3WRbxvQV4X6icjXLDda2EztG5hYsxcSJv8x7JjNekJbwz6q3EBcLVhdiJMHQwGSm",
  "key3": "2h7czChDq2HXoLgMum5ibQ4VmWo6mHTM6JFFJFXoQRBtMXG25QL49DpcmuZ6HcHc1c8v2K8NUf5JRr7tnpxs3BQk",
  "key4": "3DkPCrQBqGy6BFd49wvWoioigJjzFwiWQfdj513W1fuifPav8re9pBeSYrqXFSD5agz4QAxzA49ND1qE3aVUj594",
  "key5": "CaAvYf2HReGeBeqUH4FpN1yvbfsSQiaZNGD1Qfni1yBFYUtJUZmgJ1jF7sC9qBrn1HNu44JJrGFEp7MoH38ta3v",
  "key6": "4Q5f7Uo8nUCo6o5tTA3ZDViG1Fz5rn4A7EAS3cKKAoYX4TFrmsag7s9gcyw2fPxiPdjrK9VZRqMLWvMyTgYuxTDu",
  "key7": "46xyNnFQkaAa6fmFTvE6v7KK8TLEd8dEZcqDwwor1GBRjcwwuqaVYmfMfqaNY8mVDP6vAEoe6LQP5rL44tRhK96Q",
  "key8": "xyXnAfcggVRHfsbBszBwXCrDByDSn94sHu5Anz6MLRdifmfAVyK8XqiGbKocE6LrjQMj5CiwXRTKbFUxYJuMjaL",
  "key9": "3KU1fjveDZzTJNNHbwCaVuXZ5D1Bz2pLKAEZA6kJD2JnbVAhYY1ARsEvcErckN2Tq353RRTPa2w7inck8VVe2FW2",
  "key10": "2nTSSuJ7LecGzEg9vxK44Gtku1aQTo1zLBh99RkDSj9cFwLJ5tTfVEQkRUQ8B9ZTvvdiCzYhWepxyMzNW9ZcfGCW",
  "key11": "5QLpHNguDGFA7oHUHpa6xejY9vxXtkxfJFdrTY5pJDf9CZbbSYX9CsfG3LoqggAsm8Gu5brKk5bGVuhLmgonCXS8",
  "key12": "2Lzh3pxDR8UNAAVdhPWPjfV8yZb89BWdHw2m1bU9GKno8U4GVaYCaFtuJFoZ7zPmnQUxWkSQ8Y8J78xk633hbyUg",
  "key13": "2eFrKTgVAiqSxx8jWEVpaY24nx2nykGeLnpnT3W9ZUxyAXTNwL26QgD5kWrHaYoSSAoi6Pu2KBC5bB5ihkt7urCt",
  "key14": "4dAEKwa4d4wjn4yKkztJ358xbioiaiBcLTSQJYxKKAky7pr3wyDWh8S5L8fuq5Chsng7ftCDshYjRok4dCaArB2i",
  "key15": "5uTsjEEZq3p2zquaKkUUHwiVd3hwSERSJdgHHB5RgkDe8NQiAVGSJKyEkD6thRoxJcdLNQKsqsTyz4rVdVmyfgoK",
  "key16": "Jju9ag7q98jt4c9xX6Uh86EfB7bYyJeWcVvuaDSrDJ5Tgv7LqDF9uiptdENs9oxcwQ2XAxBnvMDPbsEspvLQbxT",
  "key17": "ScjScVyZQKC48nQrrYwJXWaYYoeHup11uqm6Saes2anwiVdSDnmA7NnfZsBQ7VDRjBBJg7rsiSKrY2LufLVSBr1",
  "key18": "3nch5BC7uKwBdzNp5G68yAcQ9CxhRtbZ6vwiCAiEqV67cZW2aDozEaAirGPUyqKiVrrPqEii48ap45gQqaeXy9RQ",
  "key19": "3wUQJYZ3bCF42u52C4BBBryuB4PSw1h8C3mHGqDJjQ9ihHMYtd3kF2CrGJsZivvcfcLWuBnKWgYJQk4Td5PL8Xu2",
  "key20": "5XHTeEQChgYXMo8JSyv2PXwobFgwmMUcvinsLEkC9AYXczhiw4caCVnDtKMpnweFPrvgzSPVxZABw7YtBAp1T2SS",
  "key21": "44RYEKEJU36NYjtXYkvwJVmKycwRiCrWWbUMXjhGXnqdgkiMwD5sYVfbcLdtugg8H7dWrjubLcRZNsE51y3h6LDs",
  "key22": "2cfaUEXYE3fm8GKpaY35D42Ux5ysA386vEEx94w1TTrAm2KgZvPFvsr5ZBkN4r9X4eS3RGVKgPh3k1zBfQRuDqKZ",
  "key23": "2iqUeZyFCp7MpueH8QS961cnA7cA2EDnUcEVsqFC6u4VKe69WqWpMHuMRisZREpYeLk8p2Fi6Lrh995D1SBAhx6p",
  "key24": "36urNwXqotcmVyHnDutA3dXV27wCCF8FdJJ6cieYKqChtRnRnD7VJttwi9TTkEeuW1rCUKwqumCMsqtorVNe8wg8",
  "key25": "ntcZpQ9XHv7vXSocWhqFR82Dir9A8qfCWJ1SWJp581qBxgnM43vrrDy1RnWTQJiuz12bbjAH5UmmM5nN749Jvgd",
  "key26": "5sBD28qumvAMqYDrpurL66pJaCo5hRHifSG4Ta4iNLUUu7Shps9L8n19KyFnNg9HuXkBVZdTZfyNTWiP7ZmsMbhy",
  "key27": "5TTqj3LPyoFgK4pW1jonQ3vQoSXA4ZrNC8PeuH8nZJR3WwbeQ3R5EjrzPw6YenXKLDFNFjK98F4vV23mvJnVwEfY",
  "key28": "2LwkVA5sBoNiDRNGyVu661zEHqagKfjhDiFMbvGxyM6FW5E4r14rUC3iQBWPGq6SWpLSL84joLdNsJoJ2pBj4tgQ",
  "key29": "5jZkrkcrs8M3vLRAzgwpsJAWe5H6aqSiEMvkUTV8vfW1qR75Rvp27aMTRG8DaiFHrD5kKLYDWD4MphpxhEowfLmN",
  "key30": "54yiZxSCHxmW43qL7ZkTmYG8VbH8npHm9DSdjpF6U6uaY3Bti5YpAKZ2wtwvBgcvyhtC3s9jfttEn5nXsJRKgJN",
  "key31": "2AFuZnBcJzfkfeuMBTFWFWF52NQ7vvCfwMUxMdvW5aaKumUgBDJ1SWoyi89R4dcnYuh7HAx5F8u4EQGw2fa5ri1q",
  "key32": "izWsZRaq2PiH5793dxUxGzNS1sqU6PbNvitKmjCXzYNL4sZMp9SuqKvyGCKUU1PcNj9ATbhyxPUnxFtW9S1h3yP",
  "key33": "g8ZVPaj4ey9suFFiLwhjarKda6bRcp1hcRFqFJNSenpYP47EktLh4vjScRYBcNK1ienQndTYc3PKH4VUNWAKWFg",
  "key34": "5NfcQJBYSFcu8tLNwHNYh9XfvNwEU17yhu18ZPmmYNyt27GioEAvxVo3TSLFXvZ9qGGnSoS8tsYf3i1BojGTrTcL",
  "key35": "45owjderHnfgwCdiDPP9W56H4oPdF1H7DzpUduC5CYqPDEFYqPN28MxZdYiUY6oTr6A8aVzi6KFTv9AydzvWYbNd",
  "key36": "4BrqspuYsffACeqjot11JYqoKBfabH3gBV8PLPKNcLRLaryy9LZCKRHMT9iXs8nL8iEq8RNzL29B4kqLXwfPaeKk",
  "key37": "3nDSoYPU9ARhvUBrymYenDpCZvzphtwvdpUGHHeNSRN9GmL2hHH7Ec8RP3dSN7947WKwgBQzPQPipPNLQnNRc27J",
  "key38": "2noM3kUnJCLsoYUmJyMh9vyk6YjZre2t9Gp5pjmZJaYbAMwMmeEJoFMywXJaaDb7t1vUYpypvmWhPw35nhMJBZrj",
  "key39": "3JUeaNTUA3oDKrf69VTDWrWzLv6CrZUJdp21cuBykCXAJDrW7TmywRc1BS66Py5ZHV2BNsUCmKWjroG622NEHpNm",
  "key40": "3uCZ1GA1siSP7hyGsZs1wG1TWbXxZ21n6pP3FXBtvWNEqCMRkGxLpzssVkKotietF6KxjU9Nhj25ZHTBXXXqmjoK",
  "key41": "5bReH7BjpMBKPodTv1cw4a9ZWd43jBmoY3wPVS4Divd8kmod2J4Qy9vvQqxuQN6w7TS1mb1dVJcHUQPRtDBfjpjm",
  "key42": "3ZWgUP7BzpeozsnrigCYjGEpLkChDSSQQsSLqUR9JxseSPMwDvgQtybuKfm2wY8mJd1ZbtgrGuFT6QMkvodUK5B3",
  "key43": "45Dvc2A2Q1D5oMau4zzsdxBjaKGDoTvPMqZWTZsQ5eaBLdYKNER7L5PPG3zBTRTqcYqv9UVLHeY9P2vbYEojoJWD"
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
