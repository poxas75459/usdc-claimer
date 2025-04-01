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
    "3E17BE1KvrqhKJJTB62fYhUan34PPYPv1k38QVufJwR4yGC66bhkMKrBFjGBjjnM5cRjgyq4QWHUs4DMox1Qpabm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X1wM7ZcsSWSDoN4jR4cP7Szv6TjavKiFCYLZ6s6DfDFNrvYX98EcGYmdTKbSeEAxzwhg98kG3rVC3JxwN4uTLVX",
  "key1": "5S7ikxwDByF2LpZnqJGMQ9SBvyHqZ3ce45NANYPvZ2Hu2uaKGKH2ncu9iiXFf9eLdBZhj7CXnzXizeS8dZ8gyeGw",
  "key2": "2WCu6ro9Wd3QCivLqtZVfV4f18EwpjHZCD9zw3VPPCpjQvxjQ7bWY6onxqJhTAd92v6DFLJQxuLCso8b5NCc9FkU",
  "key3": "2vEwkNFPs1Z9PxpztK3p9roWFpoziv9N7o8R6Wp5Uovp9VwR5WM2woHj274MAn5AaiXTAsJiQUaMJcj5JC1ufLrA",
  "key4": "59mZEEq24GLgtuSu3EoMjbWQLqSQtgSwhf7sFeg72y5C24FA1j1UztCS3opx1J6sAZhtmDkyN7C72w1qcuGATZG6",
  "key5": "5ZCMBsBD4kf53V3ZvzJeeSgiFTGrMheML9Pgosu1GJAzs6BSnJGq9HW9SSkHmTQMiKdXXW8rFJEjGt9tCLevD9uZ",
  "key6": "4amj521pBNbSY5pG1djri18rSh6aHmpG61KnVvzv1anr1bpM9S4WSD4ijvEk3RcpXP67aPoxTGicCuyLLsTMhjuF",
  "key7": "62irFj9HHmDzHDQDGGRu6jBmznc4yWPceUdGwJaZVpLjRECDccJfeEkrsKp89jgfvdHoGemTrUv8bvcLH6f77ZjJ",
  "key8": "2MthQkvkoNeYVyfLpwqHKXF2WihFqMN8iZVPtkbZdLXwSBkbnxwuvZaCviJaW21DWVk6aMxCcvVCAWkVdv9BEqES",
  "key9": "2Xu5SZcTB56FRfJ1WFjX6e7EjhJP1RME1ebQTaazPHCqdNQ8Ey8H8URy4GNFet18vZFdLybVwA49cifH9ne9Ppft",
  "key10": "25dzsJzinEBXAHqXQcdUmqvtM3kU2JbQjnsigTuc3ZgRhyXYEBXXixHutcZC4UKc2V9y62NjVqQhRmJ3L3Qic6Aq",
  "key11": "5APWcFQVtRfSov78j3bxZv4zTDUUMEVpPd6tcks63TyqnTV12uqPCoG8M7JB7x2MvZqGtwESypVLdBQ6Cop6ikfa",
  "key12": "3axvtrd48udhQ3dxxwE8NiobCCdXndEUxaQKXB9P7ZQ5jwYWQ5g8zws7o8PzmxSnL5A9hGYyW1RaHyPTid9S9DzC",
  "key13": "3fSQNV8BzyNXVeZyzHDkMBxUkUGY3pBVGsUS7Evps6M8FkNEQYWKZVwm6kmwCdt1G5PRojaSj7X38FyqMm1Th3sD",
  "key14": "4Dp9QNTjJrRu73afN8NMY8qDToPRGDwbAyXGztftKFQaVfey81tPyuAhe7kniyACAAvZtdK13vhBHygz7918jpFH",
  "key15": "29ne9mGfTA4c6qNYytMyrc8uExnTog1Bwrc84rPyBYKhekuSmTKnuWAFA32ZJNHNcpRadneUFcEr2YEx5RqtvS7y",
  "key16": "54yNED5xNNgfwSY5U1CkeBFQnw9Ujrfc3bq24SREP8NuPujttvaUTjnVPehEC8LTHkhspfButhKJwiqrWqqoKXSb",
  "key17": "27QsavnCjsyeF8s5afURPf7UzuPFF74CtJ9Ne8gi4nyW63t3mmBgGejz5qeL6hW84ebRTyaX2w25FH2rmh3DkFQV",
  "key18": "6122Ftu8XWFz2mF1ZF19J2KJK9PaNxipbgJoUh6HBRLRxzGW8LKtM5X31tJ6iRh4iUyDziUW6WrZP275ZWQr4msA",
  "key19": "9q9tiiS97Kbjt3KdkSoq4aBGh9zGUqA8CzBsAd2WapXTx6yGyBS7zvrvwhHt95QQXQYN1bPRD6NNT6QshL6NQ6r",
  "key20": "2UkmQUzmWxa83iyTWBMuDG4EAemWBeYoArZgorPD9YGXsGoad3DCSSV2NNTEeaZXJn67LKY4bEJcBRXa9t6rkfVT",
  "key21": "31CMN7niGHTP71z44pt8ZUFfbkJiegDMzHn7kxJoTNAWk8fYAxK39ghD3GvQigR2gZEpZL69VDohGGXYPxwEhZVz",
  "key22": "4vZVTEiXQNaXrPW4JpLVMucozpski9PzejjaFyGikoaEzuPrb1KDaDfRjX3SFSCpjGEE3D2afb3LSPk52HTvMZLx",
  "key23": "kZnWXXfS5F3KGe5MSneSLr5uVC923522RSoooQjJYG2YhxqSVwnLcmjC2YcWpD9hwh8y9U4S48ABayVnUb9DXqT",
  "key24": "63r3jgLskBjYq6Pnq1pSVRofp5e2gNvXMJ9VGaATmpQ5VmXraR9Fm5WTf6ro5uLWAqVLLZjCVaUBeYuMbQRThY5k",
  "key25": "3gDEYcRJbLzpCyQ3Sr9fUwijRbgRgn6ZsRA7iL6pyrTG8JYbm4UovDCgFjVKbNfRFKzGwS5bGQkxTbC1itBGDkFR",
  "key26": "4chKuH2j8B1f8DogNbAzTRhBF3FZR9Et2rFARhufKei2qzovsYChiF4F34GJKbHXrg5KJxBjyQDALSGVVSMyMK8Q",
  "key27": "4HTkdGxr3YthWxe9Rvh5vfasUsGSKauTQ3jvStMWx4NJwCu2XjfRf3QCHbQVCqqM1p3w2XfRG6Z8yYHwxnmGSfTR",
  "key28": "4DjHSAaPZoBGMMr9tv2zmyvDk5H5WupTSrxACJ9JohbG1dxBqnN1L5JtSBTC8u7ZwMieFCCvJoSJSfwAs8LHPUdq",
  "key29": "5KKWB4gAB4xcdhERfgHoAegB6Jn8S1LZFhzZdVtSEieGbdKA9TdQ6fSEMaJao3mCosu4VzW2iR4aqZgnFuN5wReG",
  "key30": "5DVag1kjAjERucNb65TYZcA7qgQaDnukMmxrj2oWxwivfz5rGfeyECxzGoTzuhUKJNcwyKKB3GxLVqd9gBara1Um",
  "key31": "5Xg78uq2ScEdkWQEHN9D2jmRNE4GjCJ7g6g88dbL99FUSDP6pe6qq45PeCRCLDzk92uwyFxfKUJGLA7WyA8LcC6w",
  "key32": "57i5DVVGjM7pDYUdktUthFL1ha37FPwjAr2fG86Ax6VLxBHLqmkZ4uJEBqhfC6YwXzyyxvn4VTd3A5qsp9b9c5qK",
  "key33": "izkdSYYCvqmtF5NKB5Gk2wu3NX6n9zEnsk7DcQPSa8bgf4oHSUZhMk9gavZcXvsr1Bj8xWGHNWriZoRDsNiVBMz",
  "key34": "4kr66qiJ5T44hTNa9CGNjVGHysd4Z1u4TqaDmQ3sLdJh8QNtPrJxkrgDVTgvSYSvFYZArQG1q9bDnq7nLcNEWytb",
  "key35": "24hQuHHaFtTZFNHJCavsnjafxeC7uFs6vXdzPKNw1t5aKCJN4vJd5xeVsJH19R5yL1JkMJQV3j8PkYqGMcrq1eMR",
  "key36": "38YoSaY2tSi9AGqYvWNNzDN9LgdmkPnjeajHmTYvvjHPy8ogPTMQ7kxw5MvFJBftr4iTCDrxY4F1dgcZsXKTNeWS",
  "key37": "3fd5D2QC4CTU1eTFjaPG6EatuZ7DYVRms6qatt374aCGcq52cApQyeKm8e3AukHjfd8mZaKkvmNeFhRrUbYG7phy",
  "key38": "5NkXzGVARgkLH82zVL91uWDTRddKgRXJxVk63RtG6rm1Pyc2SAxtgi36mBti4qQQrJSbnbK5NbdDWRR4qfVWQcYe",
  "key39": "3fBQEFtig6gvLGjr6JNJbAyeqYp6ZCPxMZSG5cw223XhwyzZtz61ZAzUM7hSnFUWdTZkdaSvToD6jNBtpHQM8qs9",
  "key40": "5ZN8fPT12W3N2gfwFjCBJm3WM7ZvWrPnVcyES3qNoyJJiwV3626TWNSTxedKSMeSpCF6XTo9UUGC5cTCb516PJpP",
  "key41": "36Rx9Syeysn97bkr59hJDqoFHHr3ZZNFTABcwXCDH7sK5bS5N1izqo64CLetbzSC2ANFqdz14suwzda6BHgCqFQi",
  "key42": "4GMMCzHzJaJszcwxassuKqsUkLU2iZYz9oYmWfyVZ9zVhKoV2AKzdmGarhc8fgT51A5wSeJh48xbD6B1mso6V67D",
  "key43": "5D7jdnvH9GsS6TECtmLkMkUa1t5szNaVixTFHVFp6vV8nCL4vS94e4hMN8wyXnMEHFUtxBdk3ECCtiJQZA6z94A7"
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
