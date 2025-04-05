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
    "36hw4KRZL5ybkjjkpDg9fv9nvhG51NYFmH4b2XGeUfWDS8P8pN31CW1UjCwqKjvLGwxm3dGqkLfN37oxLm9Gow9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UtEjTV2BuFMKY6XfqEqEbLen6AqPFPzaPfTpyKHiFvSKmT4PWdAXuUeEi2L95rSZQwk1Pg1UbDzMXwiPfLysSW1",
  "key1": "3n2Pu9FsEFEfMSUfWbbPwJq1mrd4ymRLZH291ZdAqdYUE5t5MtX5QyDdsR4XxdGozGVwZ6238k4ztjCZcd3Lmt5F",
  "key2": "2n7QNRRjQj2TiGdd3bL3D76tbCZFun4TMAbnEVjngDWiGPsMyVp5EBhFBdfe1i3RESKgfdntk2QehBAc8CbpszgY",
  "key3": "5Wr84kECD6j96oycF6P7CfG5RGTwV67WpejXGbUFfxw59Wub11TgDezM4mt6zND7VeU3NdSDZX9qzFDKEaAUZjJF",
  "key4": "4NWiHKYqU8bWRP3BSDUDappRD8xmA87kJYrZT5vR6pMEWbqe6vArpXYsxGMWooyTw4LfhkYDRyQfXi2BsZ8cad3c",
  "key5": "3sRxY5i8KWAELcQkDMRmAQdjUspgJWkhsdX83gMtSdbGLZrm9Ko1F6mNVkdfzYEjYTjhacyWhbwg1AHrTCDoZWsP",
  "key6": "4BrzMQCZdAvsEsAi4JfiDmi74qb4aMPDxSymoD2DgTCFucb1coZTaFWPgaqNSoTabZPANvaTzwk5po1sL1nBvjfi",
  "key7": "5StgM8ZriVeAkXbhsNf5woaQ25oeSe3ETNPqjJpML9XhqjKmGHCCSUJFb4EPCkAc7FwqzX7oQkgawKd4BFHze9Vr",
  "key8": "42FdiVXUWfsa3MCGdEC8bcsUdfZXYGHohFpgpUMDEKzUu5PmvySooeZmWsx48gknTZtJ2DuA36225z4w2AHA3Hov",
  "key9": "3HPe6XVdhVzNQ3aZyfabzBqoaUTWXw8Pg3EhoLB8LXggo63kpGzNxdnSt5xBDDW8irvTHaWNATNciHGHox3cz1Rx",
  "key10": "5o4aXic8iJuCQeG67izpzcqV4WGEhLcVzncafWr8doKxmMdrpCge7Nv16UPe5ZHQweSudowkereeej3NvGirjFCQ",
  "key11": "3CYXsjTgH34BRMqsrQnDCs4RQEpJuvmfmaL4Gc99av8T5GZzFpMJxUUmuAHi5fmsUA3hzx1SiLiJj27DHUogPkJ3",
  "key12": "2HXC2vVMV7PHHY5PAajhzE3bkLQPCNFFY4BuksE2grTVcXv5LbkZH3FYZjSt351TGnf8NMn4EcaxHYR9hQzXgox2",
  "key13": "4DNTYxhJhdu27Zp5gBWxSvgvYn269i5GR5JfVsb2kh9kA5bMHDHhaCAMy1ThHnPsepy3XepoCYPXkEGJmSFHCsb9",
  "key14": "4KjzBdMVm7jZ8zyo4JByPNtyuWvzDKJ416MPNbNjdTnVPsHuhYmrmnNNQMKSHfPpmbnvw177h9NNS7BpGcqUPQ1a",
  "key15": "6689MAYg1Wc8DwuGBTSMY4ayBN84RcmsMkoXFfbu8sjut8DNMoJg76JNqrrDbTKX5vcZhrGq3x4rs73ZexzzX78q",
  "key16": "5CWkxFFt1T2bYUZvBFBKLo58y8U22dheyjh9VtgiXC6xhGawyAHFs2XLiR3WFkowoH3nD7hp7ewcywN1c3SPsrMZ",
  "key17": "mnX1oqL687iYBuhR6DQyy3o4eeUpmbYW1wMR1VzeYHTnz3BYDoiSn1VRAyXmndiUNVAcrmkLLRRCET4ksQ91QXj",
  "key18": "4vfZJu84TrHeqy1BKF6CsWJk9wB3HNRMtT2rtk4LdA7AoGCaVtQHD4GSLgysVpWEAfX7aRFbdCWjpBs2JzdNM4XE",
  "key19": "5ecZVV7WrUNHPjpD2YSrWXVeFjeWPq2wDQuYVUhpQ292NWnvQWEanxgxNDfdgY98T3KQiHnrD4MZUg7SWBrty68u",
  "key20": "3bXLAGTyBFViuk675Rf7pWTpFxGA7aNSHvcSpx9daa7533dy4vqhuGAtkHkHWMsozmJu31YMEF1Sr25DgX8ikd6M",
  "key21": "CrtaHsNsRxYqszJK8nAj7SREKkFrAAHFo5em1pD7izLUPpjdA2Jjnh1Wr5XtzPi9R8cQ7sAcBCnGZWBoGFXUPsD",
  "key22": "X3fSZSMyn6A7QqDVbU2HwcdbRwYVYNbQBYcqU7sYLVekfqpKWVisTgjfARQuSVk4qUJm5cvENWCLWhfPPecgFDA",
  "key23": "2FKmqaKJf6WEo266EGKy6fzJBLXRaXSGQiWveDRdxNzvCJse2aM3Li721j86RJzs1Scc7vEGn3oX85axrBigdMu8",
  "key24": "DV1DC8HhoNvBqQ9wProLRbUTZMyZCNL3RG317eodhLVFkkg6LQvxaJ9nY5neiQ8ZghQrDmtQhoqT8M9RdANwsmm",
  "key25": "29B637z7SeJSuM7ctDtfsdv5n6ActkGiSYCz7ddfCth7iPLDggXpkuf1aqHTubvaVW1TvJ8VKLtKVgLNb6UqBzAt",
  "key26": "2zBNkP53DCdwRfdAhavW3NGasNQVdAr9m8N2udSbgR2G6sARiMMFXtbFNysP3P3VmgM4JVZA4efvmbohHsrSdPDM",
  "key27": "3m6BB15ZXiXTxDVko1eWiiMHw6s2TnupY9wAMY88awL27bw3kFQsfsUhCZMXE2ZwyiPn6MFqQ6YtQRqehcYK9Cmn",
  "key28": "36Kb3kHDj4afLwTX4A31RTEN5Qp8oVAyTUW2SUbU2TFGK1cToVBbMWmT2yp3dMX1nFyfDzbhgCMGSFd9VY5yNr5c",
  "key29": "38e2Eiu2LmseBHhuoWYSjvH88Ld2oc223cv9kCe8DQGVU7L2MqEtJ6p4Xh6hCBWqyesurepHS4g5LfPxFTu7V9ys",
  "key30": "5jvkVFXmXzxsyJdSMh7hKH4hDYuBHpb1bor2VKs2rRP8L6Hza1iiv1qVx6KMBjYgQsYUPBWYDdNCGFYfQouxQFqq",
  "key31": "5miZmi2FNPUMHR6pQYBwn5rGdgLjfMdHR6AgjNtRdRMjv1zWwADTSt7FEXeZDptv959GdzXv6jryqWCEd7az5Qmt",
  "key32": "48oc58vZba9QoV4CNGAUcwYUAwvWxFw67RyLZm6ptyDC4aHJg6c8LgJiubK7BV7sSVpczwQ5jpbHtJ4pdHaAVdU",
  "key33": "5tXLTPLPYpXzJdrXMAu8hrnakwqQRHT8SvUEBZx2eEoGH2S4CkyV54oRZrJxi8wZtYHGSXx8aemnvvMb43e5waaY",
  "key34": "3McXDy2BuuVuQ6fLJL9pQP5s7mMq6PnBERpDQ2DPmLwEmJdcdvkDA1R7AD56ejPACaA39JfAB21S38SmMn9Zkbvv",
  "key35": "5qDd1Dj1x9Gd7cPB1uSunjChVfcYmBbJ6rhyLU8rE6VADQ2VrXBjrHeMvZehNzAQpbsFUk2GTeA5yVr8QZuEma6K"
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
