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
    "2NgeVMmwALx6C6Qdcg8dQDimq9hKNNk8jespeYDfqNzbzmtBYWAxgvDAY2JYhCCakvWNCAEzCtjk3osdWD8VeZa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35qwBFNSsg3EokZrKMwumF8AQuaJoj2Jmk8GrcmZzgs4Warh3Puz7E2Bx9BaA6LxFNE8BqQTZZQnG3HvehFzWzoU",
  "key1": "2t3UHa1mjsoXCMd9PxiCcwgFo4pyFJu7JKgvyzAGoQokKwi7oV2x8XEDWVT47qBzySimH7yTGnPVAdtDohEXEcWN",
  "key2": "3vABaGwtGdw8ffLCUsL6GDHmnWhVQrZPpMR4ytekQGbWY4zqP9U4Kf7EqouNhdn91D2NvhnuR2BERr8bc8Geat77",
  "key3": "5EsrEhGRNeEQhahBoD2VQbavTuEcXDW9U47rq8k3T6Z1JhrFTLKDHC4adGETmnBMCewFsAAKPg8B5u7mcSpcDTwu",
  "key4": "5mwdVkii5UEnrrA23zAmnxm1pZ6mAc2GTQab3dFNnMc8CiAYehRZ6DLkz2nDFuAsqdqmcTe9oxtKWpf7CMHUtUJz",
  "key5": "4pweVHXdmR4kg9VztnS9mPDp86X52PdfmZhzCz7JSSHfB5NJqAdvAKRrFkEG4NVK3vHYHbcb1zjshFuvo9vYL29B",
  "key6": "5SNCEDYEWF1ECyPXway3H61WfMpeqVwijoYp5yMv4oeqYgJPq8wC31NtLJZuCY2N244D1HZi7Cg8MBnytUUpgzVf",
  "key7": "5gF8jLG5Nv2ZnKQtWkPPhd5rqn1orwxfQNWW8QXDar6pHwSh3qffXxZyLN57SWUvKWXxnsJL1f38oQUz7DSgE2EE",
  "key8": "4DuDoMRHMbSt1AXjKUM71ccnFEYMKxF86mfv7CD4Benkq6F27WnuYscv39KeRwUaosxEzEL1pRHhYBojPGn5LAi",
  "key9": "4KBxgzarM9CBF5yZaN3GXf7BjynvmGTtfxmkTxYBCkEyDLBRx2sfdpxapxmVHKx7gM5KgPuhNHeErTyZuoxCpQrC",
  "key10": "56PVS18nUkMGuS4hv5EWoNavPdCx2swvr7ngPwxckjdEy9j72uwSCWSMBje8osixbfqJVT2tsbSSj7QuL5eyYuN",
  "key11": "5cARdbjQp6hUXLHaZAXfyy8AjoE8BniKWyg5vs8EXBYiCS6eMfbidqEds4oZqWVt4Euz77hUoaVWHzusySee875A",
  "key12": "4NvHvUtWotjTSpSFARsaQota8FdpULuwgnue7xiXWWgtxNK7BxN64LtksjzqUwM6HNNTJmTDYjna8basXSJNXDX4",
  "key13": "2W24ojRJrHmj6Zrdf897nhgoPdE2vMKBgPo9hbczxHkjVYSjB4sfwXts55opHtDkoSfueXG33rJdjVc2KSHxUtUg",
  "key14": "556Tg3f5EgbktU7ZkvqCSeN3ZJBBbjn55AFHheVLGyp8t1cQxLUVv9Ezgzx9EqDGzDM128gToC8Z4Scw7mQryTXw",
  "key15": "3vxi91n1oujJn8JBLG6DiGiADerFktM3SUMpiTHmH1SZWTBeeEMHDu2AtEnkHRh2V3mMLwbZogEeXyRAJg64PRne",
  "key16": "BXGkoCVWGA4ssNVW6Ewtghkmkk1gvwWwdnRxqc7h6qZJD8tz7kwSwfyyk2EbDTUgCFZgc8uFyVFaNR9MeLsiuRJ",
  "key17": "4gJq7PeyEeYdHauuh8i1TbMwt1f1drEGTyGg6qLivoiUBoUCCmQaaHKgaM2S6JPyUTfSbCuuhpRhvNdkZU2dBpVH",
  "key18": "SLMZ12nKGadv9DdRhYetFawjfcwcDWpXBFHrLA2pypWHUdGmD4GBTEV9zTBTwNNmXyztqbNro7XVMfXgsZb922H",
  "key19": "5qg7GpKP1yLi8wkeLCfAEyKSdfiwyuxGH2ETd1xWDnbSjSXBgytBB2MCsxdRJio8Uk3FpMCcefnbVSeTQWeNs5RH",
  "key20": "489fjfq9osBPfkS4VTqXqBpcyjtKEYqukDg7myLTD9Y96DrNbqa9QYJcEHUnoPmny6DcobynitPjYsX3DxSEqZGa",
  "key21": "NPyxUEmmJuwxoXo7P5SzzprqsbzKpbNu5r8ieR37958c2PvBYKtSjg6ZmnSVubScTdei5TgbdQPpsmF4cZY4u3f",
  "key22": "257RNQA2Uqgi7522f3C2FgibBRmrvLBZ6ED3AFWE8B4Hhu9f4tH19WG3JdboHY2KkuSYmj1NrTe8vZt2AWSVSqK6",
  "key23": "381fhTKQQ87DDgrgjt4UpJ2rPH8xazLSXYrZbYXJn9UayAC4XdgPqP1YqzSGCQdACRkrLiVyisy2srK5DkCrHBpH",
  "key24": "2GZv4EBLLbAsRAeEZioqnbgp2vrBG2Jpn7EzPcr5Zy8di1PU1gEohKiPFgWr2jRHLNtFqVxeXUs5NRYd9yyRNpy2",
  "key25": "4QmFtRxp7VzyhCsgSMNH9L811UVpcNBRGnSkPUN3qT6NoNhPo6DL2zxNukgV9FV2mjLS8jCBjBFh6PUeGwuQSmoH",
  "key26": "2urQXQvLvZvMishF8gB855NF83Nrvymj4HLNJEQqWUuoBYew5MS8S3G7ifevoejPyXEpbUVavaDKg2pzKYnugZ1p",
  "key27": "4i1inTLC2yDiEoqQmwZpUNNNdTTBPiZm8SoK9V1XQXcDdP27ZfdbYv9prmNw1Uf8E1cpR9Rc4G6ehi4uFtQnQnkG",
  "key28": "3KggivHi27XDuKXcA3gBBZCxFAMA1p8LWStzbKKV59z4zjfVYGjL6fMs7XtifXopdg9z3ZKQwu2KhgABBDrfN1Ez",
  "key29": "5AgAuKr23kDf48hXWjZeASTAjHLLMu6Gxrhvq6QjVjAvNMzcxACgXARzHBCAkaXM993fHb1Crvz9cxHaVsA14h4",
  "key30": "3z81JWs1zsaXy47V4Ww8LYrUthM2XsrTx6oPk5BuvYoSheMc1FcQ1tdJSDoKwKbW58XGpxzEY1sf4tpHxVqBeXfa",
  "key31": "46g3hBFnEZeATSdyTwpvmZzdk4bk5jz8uvZA2Muye1NbqUUCJKYuvQxYNhSNTQJsRJn74zXBfXPE1RKCBSnXKn8T",
  "key32": "4Q42qvbcN8776W9zLHopZuWyzLnEKubLbHKspDvquVAuCURB3p5ZLgnQa6qQpgrZheqSWBnr8TWzpsaYYcqVkGix",
  "key33": "2Um1wCgB5NDVXhP7mnLwB8u58TAmWf7qxZ9BNPy77PDp3TXLW7o3mSux9mQZDRPQjY1W645u8a7hKJ73wZK9cmJY",
  "key34": "BGi1dEJwmiMu85woghp1YH9dGKc1a9LzSSzNwPz5oaUFXcachEX19MR8dXxAbeJ4pNdP8RgvZdfU7kzS5KqTKmZ",
  "key35": "bwRvrXS6m11f4FA3TxKFAFouEnwdzue1khcacDHtEgTbAw4UvuhwhUjVhES1C36dtzTsox8YVaLD5Cedv2eGFvV",
  "key36": "2q4G7Uja5GXvbiuceCso9tqLeKMrTpam3i5bu1MmcRAh8prWQjpdEx3KSz8ywW4n39mHGsDS9PksfEqphvrc7tnY",
  "key37": "8vhk6cxUwPQbmgAdfqQxR41N7ZapjYjGuNv8aVr4XVLkhiKV58pCj8ECSupqBfkQaxE4WfLrzLtNwgD1Q2iD5dS",
  "key38": "4YncYgf3NC2Vi4YYL7s6ai9RiXvV6bRG5bp8DAqxo4eaeQw7fknkQu3Q2eNrcvzHRTS3Z2oBb1YxxmVJtVkPymVy"
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
