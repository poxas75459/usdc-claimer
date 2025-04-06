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
    "5Jd6yquB6K7gd3YKKoJEpH5Lna7MeBfhcZtTZRc8DdCMZh6RcLVCPa3P8J5BVCbFrEkcGqS83Ew5bcjQahFZMwCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xAfcyu3jxjfAiye1G2XjCTf13q5yx1cMx3eVkPVq76yAHo8ERE7Xm6wuSeQvva6AsqvPceDgcT4KvPT61YB6hTL",
  "key1": "3ELK7RBi5dJBBLvPJZKKmrsKwstrjy2hNxFDFf86sPvJvDtuEApdF1y8wSZRPWSp1Q7muTo6NZW1JKRSgKxd1Rzc",
  "key2": "5XNrKp4rPZSH2h6t1ZdGXPseswdkFhaa5KbWrPXACw2m9S8Sm7P7W1qFbuBsJXDKyidsb7fU6KG5fb5BYRKQkKFM",
  "key3": "2nSk84omRv3RViPCs7o41zvESfjUHydrmT6cSLzg97J2zjFovmFvn7fhjgCJF7QNdTx6BBD9LAa6AKRXAJLXLXjm",
  "key4": "3gT2hVcMSFxTuuX9MsbzqNsK4veazpygvECvWdBvN1dQy9KcSP9QwAxpciMcaSi6ZNoNrNhgM5kQTGGYqgGb6cyW",
  "key5": "5GC9iQLohHFwgUDGKLKXaSYGmgqRgX4ZzzS7nywinMfqs67EHc1XRtVrKP8kWfbzwwsuVBwRo45nmPvYMmynt4Es",
  "key6": "2bNrfda3S1VLoKUNmBicheLmFNDhoqPymSyJ415kqPGMzoJBT7rGjZjhtj8khtBCqF4JvFkNJ3uDcay768w1NdEQ",
  "key7": "3bDrm4zK1TYsjFuDSWBFi7Wiem5EbGnL8Sh6aFBAqYo77nXenRbyCiMPRcBZ1YPn25nB6zM9Xzss9xrQvxypmK1w",
  "key8": "39tWQojypEanXCR4tHqgcJonm2EeJ1qqU7fwbjNHQhXvuqD3gsynJoj5mEAxe6FsQwiCLLHoDf3csq4FYe7SpQz3",
  "key9": "Lis2NW6LGB1RJTTiNzGC4Yjwg5FZJgcc8R3W2YYCzyzCEY8R7MVLqYSmCUi6NRxXrjoAujfMb7qkFdJzfLEBCR3",
  "key10": "4xomK3UNQiiop4ensVqpogSeGodAPtgp6yGbd2eNerZdr9GQWDxjuV9wqfVPigkQXeJS8P7qQkrgdTTGGmJYwQBJ",
  "key11": "2Yrw2o9yNx2JPaZf4UTHNiunyRudspHVXqUtBUZ3WrSoKq6FKGhTvXztBopFL6pdivJPTUKWF4jme2xRTvziTgrw",
  "key12": "5KPmMeS5gfGo8tH4tw5kcyzNrjZY7YKRvUuezJRUsKg7dii83DkZcm3TP9tbTKc5cQwht4t6vVU8eNawZyrZ3uWJ",
  "key13": "35MAbX1AtKDcza2AZvr9bn8pgKHd63JoNCX7A4QgS56Q4R58xdv1WmXghcJu9tFyFjR6wnCKurEXgnUXTvoz5U67",
  "key14": "mxLi3WMYW3T2kkN59FNLLa7rhVqu2z53dwmubtEU57SRVFTW2ajCjsUHCicjcV1fQb19TV1vTRichZ6F5bduKsy",
  "key15": "pFJrRipt1YjpqkgquREiHW9LN5LeKJKh9671YSWMBfzAXmubfUw6fAGuzmBoVA1RQMM66md1oVA6GbtP3eDcWZ2",
  "key16": "Jg9MtX5tPouLDK9wHZ7GhQe56keJr1eMgFzPqVbNqJX1wxZsDNfNjWPymEch7kEqUmEiDganPg55UcpuDAcpxVn",
  "key17": "4FZkn6hBDYYprh6e7tF5fNnTYD14KttVs3jidXqSh8TELXbvogw7Cue14XfA87rpuLdXXd21NhQiijpr4SB9TuVe",
  "key18": "3bAknDfn2YnQKRCeTCQTFiACGMEJtpDcDo71DY8Ys4WSwWJUaTeTCpFpA38bM337bXPTJg2dU1xdz3A2bjfteWeQ",
  "key19": "44NPy5GCa21aLVqwkYLZwUJiLy6HWg5w7ch5g3ehDy95P9SYb8ubHKiyGcth7WwrA4cHrVyYcZkVW7sPYrzH2yEr",
  "key20": "QFx5iEudnfQcXh1bkxrfLSecABNBzmogXGnV2AduRwFUmspDLWFtY4i8cRMCrVVNSPdQnetLrgKv6omBiPgSQmW",
  "key21": "WsRM1oqg79i7SxGK9MDY9ZrJiTqgRqitRki2pxTXpPWCKFhSSpJyaBoxKRUJex7To9m4SJsJ4QNQwKb1uCokHMV",
  "key22": "5LszdP3xm1iMqQyrUYGxvWUfmgk1VhAmXYhcJ3NeyWvxNnafB5RfmRGbpkezCUZb53bhWZKTZiV6JrLD5fguGxqW",
  "key23": "33Tk5JBqnqgwe77B92Gt5PwL588srCnDRRFuacAhnavLnnomjnbN93DtiZRuY6yjT1i29rxrdFfZGjXhf9zaphGy",
  "key24": "5UxoEQCNtm6uRgUJNAVNxuJVzPfeefM7FQDsTWbBH2f4jmNdgYsLLWNRBxTP8gx4KxNF8uWRXPkbVi38MXCii7Jg",
  "key25": "4xY4991ZrmHSMSUaC2UDwTDG8yKoMiborv2F4pfhW5ygiCs1Rv2apbwTkTCDLuCGrnH4g1hWDthwWESN4JxpCtgD",
  "key26": "4p8PKUPVPkWiGUvVKqrj99dRG7HDiA8XGW8FzYo2FJSXbgbe6b9tfshYjVam5XQGbEp6t9LtXaDAXNbJAN5TNCxh",
  "key27": "391c8iLzN4TnWSJw6hfZ23ZaMEa6jzyPGwBuwEdrY8dVvFjxhEo6tLUF5A9hxyApoGNXVBQXMNenXRYBDksjovpD",
  "key28": "gUPVeV6vfPBofRN88cLxt2iZm6B9HRaZARuYRYzxTmMfHQegLjWXBsNSoaQxG7ffH96nJiz9DZdrGi3yF4kru4x",
  "key29": "3jq8gaUqSdeJtCEbtWGRHQKP4c8mcXCdM5eGFx5GyesphAHyWPr8t4fMcXApGA4WtGLfPQpEBcwP1iLKCzzjtvVU",
  "key30": "RGoy3cFvB6n2EtTwac98Fos7m6zJp7c3HCV2bjdNC9nA345ECLE1Yg7uib4qgiVZ6mAiVqg2hkBCJk8Nyh1Ad1V",
  "key31": "561NjHc3Pv5KSC16bMtkrSsHEq9ukQSyzdA7c7znP8G3swCdgLFwJBDTJE5BSNF4U7UYdKZ7nMaWYTCix32r62Va",
  "key32": "5hDPbPYLAL16KteJyRyr5xjXe9UuSrasVavwShijLqVx4JC8frfgSGkStNSJS53zJh1VSi7xPUACcFzrFJfti82M",
  "key33": "5huoMDi68Hv3wr3FDxNX7pEEgtqNXdY3F2YYeqYxQZtacLc9U8EArLm1VJ6E3XCZpQTfnpiUFuQmAs7hbJcqXo99",
  "key34": "35wbXabbsjriCsymzvuucEqHDWLVhV7VA45gHFAi1BDv56x7YuC6y3f4Rp1Gznsc3RNfbYLNTYT1VXh6jybA3zjc",
  "key35": "5ou9nn1QHx1NzBjWT9FgePKtSxNoS8KvbZun9XbfKWwN3QBv1vucM2WZ1wesqAvAqxnM7TrUfiMFHhGAjD2cRcyy",
  "key36": "5dg5bjMUfqTvvuQ96bZdQiS3eytcCtA4PpmpsAtE9Xu4RdvfDRaWQ132okzwFBgSvHDsPzXqwf7HCmW71NPVvWb",
  "key37": "3tnBuNA3Gg6CV9NqAdkGGnXRDNVTJVrZEJowddBWF3ZynkqQQwikqgYoZjeiYV62jbdc9JZqAHWw3ZzdHWizdpr5",
  "key38": "4NqXfbJVUtRRiXgqy6JBU8i3nyhp5H9ShWRdCgXXRgrTn6vKoQHXN4HUR5XucdRryLAEoB3e9Mg2vW1Ttu7e2xCS",
  "key39": "4yvKcvZGEMeqJD4ebUNqQjagBuP4ePcFXC9cF6dALzckxjoFW2jP3tRV2qJZg5k97ZpFzzUL2gfLBNiS474ieowd",
  "key40": "4LtDfF5ttz1HYYqk1x6GCid5uovR6NY5KCvkaw6P4LKTq7252pcSuaqJZxhxX8RnMWyC9oyH3fqVZQYbJHULY8vU",
  "key41": "5HpHaFS2bVZoiYmpZ79JJCXtxc98rmnCS7DaGbKnpWFHVdDW9kaf22Ge9zvNmqrPBTQeMEf1W84HXSYJbscA7XDG",
  "key42": "H6Zb3yyPgTywZkLWi4bCgTYzZQ4LKLZtXSJ9hE9jrztYJUzvH4jUT4zcNpZEPHPf9YoB8zNaDrBzcYXQcHK1x4t",
  "key43": "3vcaXZcAx6f4aEpwjSRa9nUiVWMtmqKRUGu2PEwDSyXLwiyFESCTqUwyCmUszNpVR344ja28aqGYs7rmsmUDa7rS",
  "key44": "2b8nsoSzwR5xwBk63igf8rcj5Mmu6FLbJJUH8f2GL85KQHcLSgt2GcsYraLRozEuwgsPvgGEnFKTawNdBbj4DaPi",
  "key45": "31tJyKL3Wp4yrJTY9XAfK3nNtdP1vZnHTQWsyTprCFaSuyiDMDRnaTuYQ6Tv2CFhDfPH4GeFPCjnizmhAM9tswMH",
  "key46": "4gfR45Vuzx9q8xzUoZHE6EsPwFrxzcdiPjyWMP4VCUxLLHtH2QkB6vZBrYhg6WVRFJSmLJhG6JRWFb2pKE42htFo",
  "key47": "2zseavytVUT74vNtCtaBoEf8LR3a828edaQVShVZY6BV1mMhM1AbvgK3hpgujCnQv1R9WZMN2pmWDCqqxu7mn33a",
  "key48": "CYgZW2Rt5ibEcvFwKJFXEupp1fZwiw4DYTVLp15gjd81L5sMTHbrUAAhNEGtwZE7UjCabD6kAozeCfvkoMtfSwz",
  "key49": "56hgsB6bo18er717soGbXmSwFCfwWhaWVBqwgT1B5SS4G24DzSBJveuqDEcecFvWM6PvKw1rkp6mN48ufm26zCst"
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
