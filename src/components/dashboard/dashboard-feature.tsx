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
    "2GgoNvBHtx8jtpKJURKFA96oUaruEtBpsq8iGuzotTpNjDMQzxMYEk42LfYpqXekzPHioks1FBKes9MC4dv2cnLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ug3tX3Zd47fGDS2VW6vwXbCWNqcfipgcjq7JPX81gjpHKC8mYPsXf4ctzNteEU7AJxbd3JnfhrA7UNq1ddPzyN2",
  "key1": "5ZcxRuCVpHJAcYGvUJCrBksQEkMASkjSg8gqLrEKpE9P9a2QWwTLehhyCXCYZoryM2oywcuKY1pBPkBgMSxnnTTw",
  "key2": "4Cq4pAVqRobmzdkYtVEkmg5rK8wftb6J6p2evbzaYT4pc4vY2coJKVVRYeaKwwsYmP9bmYjCqi4di2QkLfeBEiog",
  "key3": "5CbqV5xrfBWekejWguMqk5gh94JYMkh8bLRKctBs7FRGLzsBTEMeMATBHBh63crGJ1uLWev84RP4bEvLgUrCNmSf",
  "key4": "29Q4Hxcjfhzq8f5PfBegKJnDmwbE5ixiy9qTvBGg1VfRqPmPPtSqwD33yQVTZcRGtnhzhCW8HxZZ3EznU1ud3kZA",
  "key5": "2Efyy3Xr96RSwHxV5GSvqcj75zgTEsKR72JX1yqcCdDv7oq8Hq4TqeaWJChbk54GA9pNu4Scux1h67CVX9VPkWkE",
  "key6": "fME2tC9w1Axt1GSSUiqxaA1HdrCdECK9Q5DLM7cooUGkMGNm2Fd1cK2wzf1W1aFtD2xyX6ZhyTH6prGoBkDQxcY",
  "key7": "3idtMux3D6FotyeSmyGdWco5em76qUD778MLXSM3pGucXNNB4LLKHySecbwzKYRkTHQy7Kh4ozfJVW3xoRj6ve2w",
  "key8": "4sERrnbhziDpr1sCgZz7AgZorc7JWg9QmKAKMPFoKumKxxwiQHFKMKp8BFJ3xf9haCuqmDrU8ng4TS7qEa8KfDkj",
  "key9": "3T1rgvKDouYA4s9pGV6mzwK1LVm5qASkhU332bwxe7hwmCKYnVHn2gd6pVMBgUpMexzcRvU2ybwWREH3mbnKx5DD",
  "key10": "26nvY4afrDz7W3cRLtoqQaSKBMbKZPzLMS9VxDj749m5ku5zhxta9ZfaS35AGBnw1mB8aV7apT83XWQRPQwqaHGw",
  "key11": "5UyPXToBKy2wgoZFapuwJHQyGcsJm8bYGYyqNqogVjbKKZLAy5LNUwX95YMoUSXKSwsrwEpszeWT8sebH6id9Z1G",
  "key12": "Fv41Cjrnt2zhJFQPA1pxZGhQsA44WrvBK1zJJR9Jtjabn5SGyHDYzyDkZYEVvPmb7BszaBCwbW4CUywGY7TzXst",
  "key13": "NyH5xy6cFh6WXzP8UsfdtpFSrFUstiPqS74Pebx57xP1Dkcr4LqsKCYbTh3bQbS7uNiWivqE5MUrjKvMhT2qm7c",
  "key14": "3NPcR5unJKVXRP7hQKra8tosWzKHUergLo4xvtkfyXnnVUcDj3weEwxnWmsGCf6G42YBKHweExKaJjvMezMZ2me5",
  "key15": "2EJyKzpzmUR2Z6E8dNuEfbmv6M9pGzbSZ4eUsnV6oTx1BjQH61W9pwsn81mi6zNC7r5beBQTR9PGsk9HvZN4WzwQ",
  "key16": "2ZCfygxiwZyFRMUFDmW34nwJxFDAJaWn6zWWuLREcXkhgzf5CMibC6KJEcEKeM6TJFtGHfBHthKRGx6bF4QrFafK",
  "key17": "5PpSqN7o4ZbYwsUSag2tVc8tnap9RL36sQb3spYD1VLhD5nk222i5cPJb1bZBxoLZPSGC591fujcyhUCrucVKTYR",
  "key18": "56ex1xq3mUZKouM3dCBRL3efLiQqj3LnZ9pczfc7uH68Bbw9u9mrAn4r6EmVszTphtPDUYXzKXe8YvuZwxWtMTTE",
  "key19": "4FsHAKxkGbKZowL1r2GoH5BBHCMroMfQczLNX6djBMspniJ6hmfoz5Rzypc9TPgtdVrdvarHUBMuSeY2H98rnytF",
  "key20": "gUNRd4SkzyocHUysvBnT27CrRq4CGLtSSw7LAeqooRhtcWLzCUetxnG65Q6BGviki1KwuhNzEtCiwCHicQV3dMk",
  "key21": "5VqWU6h48nsDs6CzMY8MiLmdz7cjA7NT4AWoPfAZqGz1Yggg7TXtexT2GRWh5VC5sK7nUDTKWRBvHRYvbS9A8Qiq",
  "key22": "aB2bMeLf9MfB4dqSDTHmSsM1FwMS8x59NFrHfRHPNqSkjddTdERvjBWcGzry6R5pRvAXmbZFdvqEePTfsF6Kckc",
  "key23": "49wMa5Bv3hfKfwbx1dARzYdQvHy5d3HEamXUsZknoWi7TRddaXBy4uPyZAAz2bYqSAZQo21W1k42a2Gq41xUqTHh",
  "key24": "5RJDLMuBxeF87ebT8GERYv8WhassQJUjztWeBwTmTRL1Uy6nF91Rp8uoQgFPQ9NAFKmRa8vjtAZB8d6bx9QQQuoP",
  "key25": "4DjRWGMwBcZHySpGfccdC7UMb7hyLbcmj5D1D5w8UfiMjvKgKyYG45iE8a38rgdUA9M3Lj2LRYw8mfBWapf75zKe",
  "key26": "5dWGaze5rucpQTWumoQQQtFLG2F56QZ9TY4MNfoU8SoWP9vztQzE1BF832xTEh8M9yhFt7DqeuXFC5E87GYgWcuo",
  "key27": "pxBnGo8LGKwwkdfMqjbgieESYJcdc2PqUUHjyhRrNRJx2bbTRMwDT5QmpMsQhEtgGCtZV9dMByGKpRjbXH5puR3",
  "key28": "2ZD7Nar8SQjS8No64FteTKQuBXfUQwV49cnnN3L4UyhpnhGCvatbbrqMMKiAMBR13CaZn9uW4B1ZPJgFxxKBkpYK",
  "key29": "56MkTyuvUrxQLp6dpYZDvykzbBzy1Ld52L1KLnQcWmMoqDtdAHCv3qUiTN8WdjethRRSuu9PizKqSm2z656Z7ziK",
  "key30": "3mX2nSEaU47dU3HArhu6Mgb5r9R9kHUch6UuBjbmXPgaDtr1NNDPDQspDaLcfSXbM8Ne2mGDqarsJRdyV1vP56QE",
  "key31": "2tTtagM9F7zEBs14Y2eX1ixAF3H8rA8kqp9iv1BY4uBQc6ccrMWhCCKpJe3hVhdu2nEqFfwupSL4GBjHFK2672b5",
  "key32": "5L8uS8ekAgukk3VM2W4p8VBG2MQPgbZAfMwHtQ41WfEzmwFUHY5uNBXs7Pu7Wf9X2GsShS46TXjHk7g4nSvf9TZE",
  "key33": "3Bef57YSBFAeTXK4HMEfWTi9eDtkguFkSdtbBnCR82yptdyW9gdRYW1iCaUFp8nkximUdXTRLzTJXJS3DodkxbQB",
  "key34": "2ccghhFQEzPAYAH3fd7uRUQAtEeZDdc2ovkH6HY41Foha7kFQ6jUnKS6RRQsQPqstG4AvQd471quLHN3DSUbamxE",
  "key35": "A92eJXJ5SdhZ61D3R27A93DSgYs5jN2Cr4fZ7Ntiq3ZNn7z6PD4voT9SosxYPaZ7kGVEcZxVrFmMFV853cTCHNL",
  "key36": "28LoaH3B56kATEvogwe9YQ1KbDcZginSX1WSZDdBYxu7B2eUFJEX9raukU94SgP3yM5fhMGuZWbaTKPd44KUruAs",
  "key37": "LnwgdpZhqnRYP51h8etyN1AhqxK3ZMQXLqFtsmbnT3hvcTKYemu3dmK4L7TbyejJsR9jDSS35HJKAx5bNtoiqAv",
  "key38": "F9qKSg4d8KoWHQDCSJQ1cn2j1xgRynEHpn7JzDT2Y3j36mKC1PqCrKnhgHy6iS7BrQ35aSKqPr5rh4Tm731tccA",
  "key39": "5LJmV4qmtFDehwDHv6qRghNujcGnZcb1PoFYsp38MQfxSs5xKVpwQXBbtf4Q66AZPSMRVdvxBkN2SvxqcPEG9gTZ",
  "key40": "4Y63i25VhjJctnWC5T6mr72YcPSj3jMaS46at3fi5SGE76qQQfWJee6V6Qs4aWgccwTwc5mbVje3fTob1m52e46A",
  "key41": "FwEmXwqcS4xiu9asDeHRiZTN9WNaZiqbjKdXeEJxnQYuv96qVf4AW1swi8srAQVjQBbz5jmo2mmkQJZg7QE1jAv",
  "key42": "3JJocHhCytS51otkuvCpZgAUaT4BoBxCeocZ6oJrsks6MzVppiySLbqVP9BkGCq1RQrcMYbRimwRaJ3NZKrVKT2k",
  "key43": "WuQk5MRohVygntqAhEvdG4bKUBEkWp7QmtDyCfEJiXn8L4DhMuwZyzkAbdfhEHxsad7Jv3XrNE58cm1Tza5c4UH"
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
