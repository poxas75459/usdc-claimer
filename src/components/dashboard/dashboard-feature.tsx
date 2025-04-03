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
    "4vDR4nC468zcDPzmDWCCqXYVfq389c3983QsGmGPBjjmuC9ZQqmhtqa7pBT9fgVHoi1Bbty47mojSUSQbfNYKVWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XR2YSKv9BLEm12qtorD1Lk6gU3t9xPWozmxQQX4YKHhRdquTppRBspDMpWHc2NUqc3CaR2Kuk6Fwe1Tan1imgim",
  "key1": "4XXdHYGxoTp7qqdg6dYU5K2Etczq7wBWvaSCZUSkpjNyn1pyxmhHVq7wbqDo86dTQi6n2VfsKiNjFms3q61Harbv",
  "key2": "5Rr9tx7Q8iUzcawGUjD31hTNp2tem9KQrajqnB8JVQT4fEW4jXdvyu7Tb6uq3XwT4ZRfuRTsHpUvpnBa8jgtroPA",
  "key3": "4w7PDod9WYx2ZKPLiFTwsmTnhQGpUEcCdDZbfvBXbH5gKddCbeppQXHBJURs1eU3nrdqoAra1vmBYqj4zNavpyxY",
  "key4": "5P81Vn92cixfPP2KYd4WkbJSfAeSTBjsZRXr3vYzqykNNwnVXmNT9fg8cLui4JVykSELLWvWQijiqYXAoqLQVEgm",
  "key5": "5pGt73zkX79xkvUTxTv1gmVE7qe6qk94CjVRuGKfo4W4maVeduk3bH7UvPjChgFnhogGhprc6FHajoiC5ZUiUfKZ",
  "key6": "3FSQntuMBqasCFay9qtVbGTu3UwMDhsCDh2XSCAGkTxbTrTZm2RmjVzdW1YbEwLnzSPWjrz16pY92QhSHp52L2aq",
  "key7": "2BhXNVjQAUcCocSf8PEgt54z4C6TERZ5htwdzj4ZJ6P9sPd6SSnU6yLC956aJi89iBjioJxfDmrnE2MdVp59q7eZ",
  "key8": "21tV3SZgDouTCSFbHPyr5zSovF1HK7y4RSHQuTteCjKiJRLdePiz4US4dorm6iDVA9yy75BKpQMezM3xupaUJRsm",
  "key9": "31NRZY5bWFtmfNTmiP1LCbkt1sKPBm3PQCmSjg9P4uEKQ1m5Y75zinag4hGd9safPYEKdne2w1M7wrZEF7YtsEbi",
  "key10": "5CJxnA8pN1uV8jU125GGXKXNcfGTBszpCAFy2RBVtXGx42eU4KCJodVG6nmmSyf4uGTMhvm8fZ8ZL9141BctwcVe",
  "key11": "krZMrJUVgZo3E6iacRKhvh5Tfjz4aRy1GaUr1pbrq2EmKnXkgsvKk2s1SwFE858yfLv1dxPT97YZibcQpjBKPAJ",
  "key12": "2zAPthc4nMG4M5weNz5WYHDifiGyDnfW8Fo1RpJb8otJw5nb3yMGnsUpQ6vTgEKv2HnN4HHCo5kzS41m3Vy2gqXY",
  "key13": "3ncmsdp8vsyM3EKbciN4LTiE6Vso1cAutA6eWBQyxtd4HbqP4tB5e3Hgt8TMDXMdpCVdRyYDtSaP1v2uR5X4YLge",
  "key14": "2DMAybex6BkJret8vNo9tRvhuDtA9VScKMrFQMLfbLRLQXKSWMZvPHCaoNDvi6GwKH23jajuXsbrDguoMHUbZoN7",
  "key15": "3dJEiHes5ZXAjgRpJsbjUjeSMHCDfxPhaugEoDESfyqaNcBexYiGN2QQG5K51GJkRvsJ1qa4acoAth6ZGoQKd7qU",
  "key16": "4p8Q4qwSNj6dDZFgsG1uqxJh6MD5fptCXM4BKZPDtTCh6hsWs3GsdiM2medoBA8KpUVb7YWS8YHgAbbhikQ99aLB",
  "key17": "4i61v6tLTysjyjq8WrhWYF6pmmVk6nSiDvo5qBiT47rhGSZX2hQXsqystSDyHUy6LFHmZCdKXsU9axY3B8TEb55i",
  "key18": "4389GQ5LgzuY3Gbw3sXkP2rN9LWUvLJEDr9iLDpDxtLmJdtQF2N2KhPBuLpjH1rpmdM5WpjCxiUcw2pg97yirjJ9",
  "key19": "2GhoG9pZH2CoVHjhHhwmaj2bY5i6bdGihwiZSKoXkTX8kpxRkb3nLhf4KEz4Eo1dukt2Z8Fnw2yqCPUv7AfySWxs",
  "key20": "4HxpNwMYop1h9w1Dggp73Eu3braAT4eayK3DQsU1KhWxbnXqEw2fuknRoNFK71pcyXQugKs4HANHAVzwy6sGkP7c",
  "key21": "4scZaQBBBtYT9bFoiHzGxpnj2VmT1VKBJvnstBBdBkjqtQtbrc3pDHYVkF84tyASfqRnZ5bPQL2Jyv6E9YtV9qSN",
  "key22": "3wDxHrqP7YWz69hXTD7HKwvzJmhf1oQGzjTM845eU7M3FjdkGzn4XWkUKC9p925ToZ41kQeqC1n6xqGxmmgAgs3Z",
  "key23": "PYbNp339qG3CfuArcsEgH4JqVeDYqtGn5YpyK3FfsNAx786MaGv2tqxwMznjNVf17yZzfHkkur3wceVvBKHGQqP",
  "key24": "UGZFhCJc6H7Gj5ovyf5T2Xns9aAnFnMov8wKVvYZvQGkyc6i3MEEM3Kptfeu8g2hU726MnBwzWwrL4C34jrhNn9",
  "key25": "3eBs44Qrqc9qcM4rMEHJxju48MjP4LGSrDyonyPMKMa9BFRKn8vvkyULViLDEpSr2nGLaKBAx6jeDpGaphrPKfCJ",
  "key26": "4gUhp1PTyog1zPnhx3aXdxrxcoMPM7itu3Cga45TV2HHCMyCjfAH6hdpg9FM9d57SGKNrtFPdUxX2rsjaR962HBq",
  "key27": "5LmSPpDR8pQn4QGZMsF1CagqKsZfZxFyL6MnnXS9rQAP9WBpvPJZHbCSha4RurJzGsVFZJeCdNYBnKeuibBtkVXv",
  "key28": "5tZtoLz2QecmhSq6x7peg4romD741R9gspji25qVbpcumszSrCx9MCCdVFtAZZygoTdjwof5qxBhbTa6kNwGNiKj",
  "key29": "5GuRPrsyAWYGtM23bXSeCsPs18g6Q81WZzkSKzXALsTSug8tpzvob9KekhaeQXaRBmZhrEmUa4oxCz8zri8y9pND",
  "key30": "5H8SF3Ex6DnBBeYvcrDvZEvtEAtKqzP9PbcJZoXbHunkWwnN5Eg32FYibNigGTFYkGh79ZWiUZDsEDxHJ1vWW9Qz",
  "key31": "4Gux8dyDdkYA8paFtj9EVdYKviKNswo28WdyNuVHKAW78wzRBUUWnPgdkY5sY9pCghe4pZHfv4LLiUUhaW7hoCSu",
  "key32": "3zzue7HpuXSf6Dy55KZoJysptTJCJ2z67izUCG6TcnDGHQEGLBH2eGuTk3N9WADCQ7qVyoZMi4jp1EbTcuPadm93",
  "key33": "5mmDREppLnyBa9zRiRpuKiufj6Jhm4x3XNzjNKU7bZyZhhahFehHUXUSU8PWoHk4bVxwoeuzxtkZg9ww647SQNBG",
  "key34": "5b7CqanM49JDR1z7gwThRFt23wqCyTvqxdBhRmpSkmtbXkkGuFP6woTCcFH11X79pFToYYNZ2S2SyxAXKHt1iNVf"
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
