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
    "38XB1Tcjjnc6Rasrmhv979HwjP6d7PDjKSjBTqPAhn3LdkvGeYQjaBEoyPgfycU2GohbYDMKiKi3x9T4dA9f9MtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QPeKPM1v4hgfSoDiJcG12DiUgKNXAL54e5uK1jtuwkjxxtKXpjrHhJYgqCjyWienQUteeJ744sPzakbxQgUpw8b",
  "key1": "2awZAH21TzFv9gNNCuHs3uutXB69LvzPSFkiTCZHEUojp7E6zpGJvpZaS5YsXnxujuV41SkoFeSKb7QJdXKoVt1E",
  "key2": "5aRvcrQ87XQMaowiNsY6TKiLhaydNe5fEnfG8GT55sARjYZQD1uET2yDpw11J7jqhKmcAFkWxYBuu6uDc4Smp8JW",
  "key3": "2XRNnhUwV4ycEX4c9f2FVKZnUy4URurXDdyiLud2S12cNS2EYG4iTFtEaLhAMY8pdtR53teMQ8XZC2bcsVWGF9wv",
  "key4": "2bv8wxLr5vNtNZt2G5QhZG97Hkx9FYQRzUBCUpeEsiqppCAaoD7umw1Q29XWGjriyd36ctgybKtDEZTP2FYhuA5Q",
  "key5": "3ZrSXanEy5FXiQFYs1oNrZafSVbLMkmNpuRBwEsWAgaQjV4LQT7iRy9WujAfjRNFsJs6A9vYupMy1dZRTKaT3iNS",
  "key6": "4YWwUNduneeR2omRGJRzBdVTrkU8EvDj17Hf6crGf8rMJASLWn1zZYWTFA7HgMkgNAVwPYWAMEXTB1NYu6Eso4Tk",
  "key7": "5oWM4HyaFStqTM6thgH1PfkUwNXP68SProtQudqSuo32mT8kXQ5ziGtVeKwWpxtB4JXZew3w917EJNmtvdjbvRWu",
  "key8": "64wj5Trk9LEuu8hA9dmEFHnEDgwjVybLmGeLy6kQih6qoJhU5ykNwaUjkExMUX1FpX72aHM26BXDXE8xytT5CDtV",
  "key9": "4evoKhVEfgjV1QnCpnx3xGhMSnzciKzH7FYqh8NqSdKsgS3bHBMn9rfg89SmFRp2ju7r3z1x1ry7mkzBKHuxQAR5",
  "key10": "4zQWnnfFPibsyCy6KZ2qvncw8jzJg7AwDzmjcRcPyKngrGLUwybHTHmuT63zcgUZojWjECp2cu3FcQqcjqTnvg4Z",
  "key11": "jW7gNZTx3KgY1LBpaYbseixpSyZG1GWLHiRR1g7BXH1wLkXNEqrrEdeSneiMffgT7cGmzMkFDq2GYsBS4CE7cEu",
  "key12": "4A9NUKXwEQx3JsCLg6jV6hyg82fYRGCfHQH6p8dRkHgexFNxKwhw9j4LJWgW77L7rPpuWLJxK24hEG8RhZVCHhKL",
  "key13": "5UZpiKi9y81p1qs35tX6a7XARmT6xBxvxsb3m9Vk7vvrC3jm24VEeowefyzF2XrxTgfMsiST61EoasQ8ALvJL6FL",
  "key14": "4GiekRQUuBtSLMPkih27pHt4FojqxvMxry3WibydphrvoXXY4QQuLisMWyuo8iz1Bjpmf16TptoYaXMFXwLirQ7C",
  "key15": "45t8ZNmLPBAxbkPeV8rUcZhR5tyb6k9VLQB5ZzQ5wCheHPw4t89M9sLkA9vQerBkNKvkGf1u6L8zYTkkngNPQWti",
  "key16": "4vPRtWwGk3Z5kBwAutZ3xZHSNtcRX8voKuW7Rnd2Sm1wpJzrd5426C29zFuW1oLypacGj8oUqdUGWmfcew8zGUq1",
  "key17": "5GigRSXNeaxcHQqcZrrriCmDCUsTvMstHykHMSxif3hnkMBZcHzKqrhDEgmA3ETPUZwJ3stLj9ahvUTWgd1SKAwJ",
  "key18": "3ErTPC6YLS66gbC2VgmmdKM75HuknTaopq8X7E9K1WpepTGWCvhAXahszhRJ7qfkNQRSxEFsdBr7fpt4je89MJ6k",
  "key19": "5uLMMEnrGZiRE1QEJCZbacirVQJ1rHd6dJb3YC1UeeQHgYTxEnn9xUZpCGXrqBdjac9mHzfumwc5gytHk1iN22Dn",
  "key20": "EUA7eoRWZa4YbK6EnkH9dPMhSPn3xjEyAh3phyWS6F4Sc585EiTRiPyh4vwVLLyMitzGvjm6XBAXjajCBwMRoWE",
  "key21": "3NtFNEdfWKcoWpeHR4aMvhNx1VofMpz7W9NF8W1RpcwrRKwjfj9idjZTC97RWYmV7PQsp3GDCVqmeGkReTRrTEcN",
  "key22": "hnjA8f8cyQPYu7PDEb7P34Wa5gSYAztyKsX54w4m55TFbz6z8hJzFworZKviLGs7nhQAZo59Qf6jqhgdYJBvzLz",
  "key23": "4bGZa2kopXSEskZEPkSdGUB94TrdXdDJkTRx5sdGmy4Vd7HXmWnjYREGqcp5or12UjKHCnmnw54X2c3CYALJZQpi",
  "key24": "2PJjmgnjSdBP5Xzo84NNTHmt7Ckp71zetc48LYAMMkyzXjZYREHjTxZTKdvbfjRZZvWgzAVcUuEneW7FhFWQGkXb"
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
