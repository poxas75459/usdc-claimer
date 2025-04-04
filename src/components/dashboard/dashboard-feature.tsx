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
    "2gAo1R7sP2VBKREYJ2UWD71k3EHWy32XpA3FeuQ7MZ1ZSrsLT11mgkNcDFqTedtFnmCEwgQdNKuUjTCeJU6h96U9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D9ecWgBDTDpCXviDKhKzZ2yL1t9iiUWS8Nw2nDzGjgE6Rr8B4bz9c9MtHou8Xi5VzVefPF1vZQoUVA8SAPJBqtd",
  "key1": "5Jb7ESszR2J1LgKHLAF32oHDmzEhFWkCKhU8Jgjr8CmiU9tKk7AjEKXVhnU3KKMYqRSfxDi89CTL3TLzeDYAQGLi",
  "key2": "xiL17rRa3FDfofb7MbrtTAgNThWvkEAXTbkefG1b52SkKi5VqvA7KW2SNwQLiWGAu65HL5PabuesTPc1F6p9Eqv",
  "key3": "4yhiFBujTyPBzhYgJNrFg7LjAjbzDTYQepDnXNQMdkrUsh4ZCS8vsR3GD9uTmMMGS43pZjT2rW21b1Ry7NrNkGcE",
  "key4": "5m72nYLMSE4TyrFCoRtTd9btBTvkHkDmSqdEnjpNCdhB8H6kczscy4hC7iKjKeGue2k7HS6Q99kvjzXQQvfN33qS",
  "key5": "8xHzh2HvWTfZ5JVT7KQnVF4Q6Y9KsKKNbZ559wSGMTNhHPMyqcHm8AKjPyszCydGhs9y3ueuXhhBZ9P1wXGnDGA",
  "key6": "4iV2GQiZv4KzqkEutCoxNxUueZcwE5c67J2TDkHcb7uvVaQyWG8PV3kEYwuHCLwqwCU2HNdSkpEoGV5yJW8n6a4U",
  "key7": "4UR4Y9yn9djqMfLTAhNBk8cB81Ey69DVmFwoU2KG1uiXTwNwQifo3N7793m6zYzKpscc9Hntsw93DjRksWjbNjbe",
  "key8": "4uzUC69fZBe7Uj8JcSxxfogBZ91qoisu8etvmuB6BqP1e5bW5QsVDcVzGQPVh3LtXa2icKbz4hnWaQ8hVbrzs4oR",
  "key9": "5u25V5NSPSMWhr7ZcJMt4R8ms5tXVheJAXeCfaPNpMQ7GqmuY8Y3JqGkp18jwyffRSmSCNCBV6RN4cgoR1junRXc",
  "key10": "2krP1688HFpWebhnjKUMFVounuSnArZmz5K2VDt9jdzptPr1aGdat1QTCWu9esFnQCp2w6xgZAXupJbDus62euNe",
  "key11": "FC62Sy3t4MErUPAQMgEfGzFjfwk352ac5nCs8sQ9JmME2Qsx12v7NX8ZxP1vLv917yoVR6F2Tf9PtWwU4986yDL",
  "key12": "4dydWCbnrzJgxj7Bi8Zd1c6x2pdJqZgaRoD9v4n4ZPPyUrweTgvYWJuTx9m2hcRQYLsCUoKaL6Jk3AaadW7ZYzPh",
  "key13": "HVcHhXUCPcQNv9akX3UTGuoq3X57f8VRJEtEdoeYmSRJ3KBhgK5dLnBNCPWXc51mj5oCRi9MJMCmawNvUvaofAs",
  "key14": "5nxLY4Mi8QsBy49uJbetHUNiK1bWNqHbgkM7WZZ65CrayjJruLaXdT4vFj5RACEMsHYEd6AWs4vWVwsz3vXbSXbw",
  "key15": "Qg3XnGBTwkHE4f6C4DtRqKb5WwaogLemW8WsG1HexvMoi6TKnUNPybtdRByYgtqLQ2JftBupCknREtG6xgpwF4w",
  "key16": "2PtzQQsTnE8t62v432eW8EizWrPqJFFfYcv9rwcRWNQqUtD1L48zRzxzM7PpHuHeyMTDQmKZRVvrgrPhZaXvuYr6",
  "key17": "47o2wrTh13XnZb2EVWw2SZfUwvbYQzTMs3HtURCu2uggLN8EoKSnn74pAW36V5xqZpHvuvcLcrwNDUumYSYjuwqW",
  "key18": "4JTKMY6KLpTteg1tAbrr4stnCN3gPRiB9Lto6Nxjhdpmghf8gwd1pNFeqfjMcK2osg59m988F349z5GA4MdAFyTq",
  "key19": "58F1bnDv3msivDcptyZogsywZoqMfoV99Gr1fGiJLkSAm9Zpv9LaGqTnLARH87a1dfgGXdznD7FuKfdA8kxTFwGb",
  "key20": "58yU1ocSTV8SzGGwZYtE3TbexPcbm9tdmsfnoYoEVkCAtoJb7F9KrmWgbVFenodDwigZx1he59FnufmCkvoQv17o",
  "key21": "3ZML71mrbuUbyK9WunzbTKwR6LFnnXEbfCXXme2ZPBM6p5n9WkSUb8nqsPke8tdEkGrTfJSiZYuvBKJ2UgXyxe3V",
  "key22": "5FRxKYRv94rP924QTULn4KP7qpPJwRUfBzYovBMphT7eAXgssJUQX2ucXEVjfCydB8wuPMe1BzF85Teog8Rnz2mS",
  "key23": "2TMiFBd9jDKNU6N7amoFKk4dh8XMNu1twpBM6GLbCEDVuyMHtqaBYqyKdxAHCX5TAouiDunGPcPjNr1ZLwcnyfbA",
  "key24": "3D1JLK7AHG86LCmL4cXKdqv6pSVjLqjcKtgW1xi71397ekLNz7FESLDa67QpCRwM59XY4v7bPDJJ9Ft5DoCZJMqK"
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
