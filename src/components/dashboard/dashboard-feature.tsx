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
    "3X37FV4x6RbhobUR6g7vJ8q8KfxM5Sug6bQt1NjGinmVSMY7m8htzaLt1j4GtVZXX2VpkxjUAxwXoqETB8kpATSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6s2RPZr3NfGmsh6jKaSBBWuBSV7FMXn9gqu8RUwpJQX6uZYTZXuP7zoE5xwD5Fb6k3uZu9PjFebsSpfPhgu7kJy",
  "key1": "5MUyBHL4YNctz4MvoTEPCx46a5RNF6WbfyCPdatVnxmzTmi394s9V9Ruqd5bAyacXCcPq1jvoamj8Cv1QXLA7VVx",
  "key2": "35ziTa62gXGZnKmaz7k4H1r52tZKc5LAhVfoCQgviNkbCiyz4KDyZvMZYb7VNSEtVgqLtDJP932eGTQgeNE5VP6k",
  "key3": "2XbnqrRjMV5k7f4YxNCu5qnppKtyhUJUwXMGtKesEz6CojKeVTUPc9YtjGB6gw5bJgJcN93rtmfNcyGoJNHiV2vf",
  "key4": "3q1wQfmqGKtB4x7VbTcitA3pgYcwbvzB9gTnDp68rBDL22D2vkeEo6uGxUo6xywfzi7yk5cx3fCzTUL3MzPMAU3K",
  "key5": "46kAGgHBfwJBXjvAwsYdag3yfvVUaNN41Yk5ZLqnP1vMiUcjGA6gv4g1HWxg4WzjCjYMQ99B3iPpK8ct85bDEvHz",
  "key6": "zfqzXUcHX793FSgB1DHN3W8tcqMq96DGcppDmUZr1zmv3qHE1U453stLXhgDPHpxofdmbYAimeNXGN1i6nrn2qt",
  "key7": "5Wm9CEepWiWZiFsSrT3vpZzCuD4EDJAHHVZqdmc4ZRFiUcbXN5RKNuwVTdsLh3WqqkNd3Gt9oNeaAB5HstwsiXLx",
  "key8": "34NBNh2jHRGvgoQ5VZiqTLNyav15qdesvfPFXA1H6nQ7Dvyb5WHA32s31EAo96uKLyCEdZpv2u5NK8V7ivfuVLDa",
  "key9": "4ZgBfkHNyLQJ9dcFd5Ar48nWXhivL7vdb3iYkUnrzvtNr3EwE28PBKh4DFuJvYTyLv95AB6BzmhMJ2fwLp4hQw7w",
  "key10": "2RAd6CA6UEU2zb2gch8Pz2s9ivmF6T4Gfi4vSVaz33FBuHgjfHeuoAzk4VyikNEBTLSK5RQPnCMqVDeXvxSLDSkm",
  "key11": "3xUUAEs45UPN3dywKMgL4Dqx4SRzUzip4Ggq66B3QxgmLo6wSycZF3SmKWX5yZ6MNJ5b6v7E9nwZ9d95SfnW3vEi",
  "key12": "2Eqn9YgpCZqjQ1eXJjvT2JkZmubALpkS8eq2i7FueZ3aRtUJuFCX4dwvErpWGi2ojrCob51T7eKksa3FTo7S9bZj",
  "key13": "4hj5xB9VZ3vJekdWfcN9WsHjUf18DhdrcmeUeCzzmHxgjTKsbWNStRAy4HXfXawvPDXX7zjrT273fU44qnUyFQYy",
  "key14": "5artB6wbQFpmuR45U94vh8FShhgqbFCddLjYHCdLxqpLTh2fbuoz4L77WjjuRQuiPDaDhehM45PvQz9fEgQe1PR9",
  "key15": "5bE9AXavYNhnP89AkdNLKtWp2ba5RGTrmnic67WNJPtwBz3KvU1UADhKhyGPunoFzc1GagstQxwLu9Wz9eafxebR",
  "key16": "2TWinrsuBEb3EdahL76xeESp1pHbp3q7tHsAxoPVeLjPhFTFnq8SPgVtUf8kes6GZ2HSsRUV1DZe5BTi9kRbntbi",
  "key17": "3UY7JvKgZvYHyKhEHxL5NaPnbEXoxDKazApYeSz4NQgH4ttAK78ZF4u3vM7UPvmiyJyu72LLytPpvXpJ8Qck5Epx",
  "key18": "2AxgvmV2FJsQgVRGhU4H3QzgTeFs7PtxZbwD7de47azw4WCCjy72dLBdtVKSJUAy1GAPm7re3Az6wNysywPXb36j",
  "key19": "46fmxwN36Dj9wq4Ee8nYqJpQDrZUDF9JqNB7a79sftSaNzdq3TNAkj17Kv1Nb5L8J89TsyHfTMGuvjW5wzAHHBSM",
  "key20": "4MeqSR4az4XzUXX94v4N2VqY6wgFgJAH2A16Y2gcckA5aetwo5SeD5gYobUKi4uf4DoBdsVdM1D4JLT1B2oLT7vf",
  "key21": "5LXcsatcTncY2StPptnpczCUs8XwnvzzbN55cimfBhrAK8r2fbNs7W21LArjjJLrd8VCfvk9mZuwsYqGx8rNzkUQ",
  "key22": "5G8hKtXYDWwvUbCjV9sT8jqY9CeGityoAQ1SwsCi6kF6TxweozzveoGPQtG7UdesEwJdNkDtGmDmv31E5DAFfU5z",
  "key23": "5J4Xx3zoyjXkJp1CGERACP9sdhXsemJmsCQRsqPR5A2AETu4k9pYvT7Q7L5wKXhQoWfa1ZGqErnmZwtfXBnqQ1qJ",
  "key24": "hFuqjC7Kfb8iYvQ81CovUiw6LP1rgJT7e8sDfTqr5LF2uGBPJJ2KR1cyrHugiWLa2H9VQFTBZeC3SUTLMr4NuHi",
  "key25": "3VBEoZsvvZinJaDAzuABUXJBZz7xbmrCxki5weAUrjE6cfRLhwkCwyaFZp3BwHqNxQaV3dW4tidBeRzhSbcf2pTa",
  "key26": "o51PfjoGibY76LhDGUqs6TzzCCNGy9NNXdXwzxHzRmDEP69Jpb6YjDa1Cs4sSEBL5BQMDprVdxbN5akHgcNK5nW",
  "key27": "4g68FiSvrEVcAXgPwZD1s5umoS2WM7PatLBo76sj7rsMAvnQQBU9NsjZoa2eh74A5RH1taXqP3SMa8EFJaLJjaf8",
  "key28": "53tEF21Yjt7RZA2UANqZxEVuhhV1RwgatDMgA8ksgTHYptraJCi6oSCsTMJhgJvtCSKjnriySrqnZmy5p9AWZajD",
  "key29": "43BYZQ8XwbyVCT6B9pwKP88mGG3LStK4gpuuDPB89an4VvVC7KZYfcy6WP75NajDzYVc76yZ5vWCXEtCZuYYyN2p",
  "key30": "27ZQNzFPAGSpGtvtiBetdfJLfMAGXJqVvgbAZvRVwYLJxvrQjEaNNRwfYrexgGJ3ba8eXcMstXhRPhMHuCuMrr8s",
  "key31": "gRpQEDx81gh2zhGvG8u7SfhN3kwes6kcMs7YYCB4N3m9e7Rf8vFcYmT9wgfzhqr61Y6W8VePtPttxiMWDA7Eo53",
  "key32": "2MXeNSRhDduwMzUSL7PBLPHCxmsFDWNiwgSg5fq3Qc13RQDPLcRQNGDLMiTWthSfrmVjxBRConoamf8BGNCvWds8",
  "key33": "H3PWFx1aC6PdEWHWBm9H7uA5ZxJKE2RpaBYXtYBYrEtDwYAKLTEwJQqGnnNjXzwq7Bfq8FLJGJC8CX6TuU4jhDp",
  "key34": "GqRMmDMp2AzuNe2MeZyogeEjuLdW4PT2cTCorPXTyoY9tZZ4hqYcGYoPA3EuEZDpnhXWQyibAfhar6G6zU8dK5J",
  "key35": "1EwaRQViMEA8iG1p2BmD3RwyyNph5g74zHAzCF2FgyiZrp9iBteg8qeA3nt2Uu9hoicWoxy7jaK91c1wmWy4heQ",
  "key36": "5qZfLuVA7hBD8qh5WHhVcVx9wdJo1N7Bc65Bjh6CRp6x3Zjrzdfhm64ZrL21V3m4JrFCwDyXWbPLHRXLJVG34JtJ",
  "key37": "39ZDn3ocGD9MNu1aGBHvd9RBqVm9KxVDE9Xxuq4MYrbpNU9LDxjdGHYft9DbuSRvHHyk4Jz4wfK8gwTYa9CUmoJU",
  "key38": "5WApdz2QoUtrLv5CDft86XKmmbKv5ArN6rNrbnP7EosAbyJ8oAN24zT9eDsK9uqN7KPs9HoLF26uTKxCL6EMXyZZ",
  "key39": "2axx3kT9JrU6xgbGiQJKUw1MkDVgL5btVSeQBRno73Q8voRERYaMnwqWEsHkC4hMHx6d3DHERQEKDZSRKA48Tk7i",
  "key40": "3Xer2U5jHmS7M8Vk1SmFfW3B6jEqbRaWAYRr9J6HuwiwyANhWU1QRuDUtYzEZhm2K8JS9NNmGfx39fqYaNV8vMrE",
  "key41": "5Y3v7N4HRK9DFudWosEHguHZLYUQChsQMYMJjuazSpjEXFefK2DiyEytjMmLxD6f2FLmkqupUAZrHXhBBsjsBGFA",
  "key42": "5biHogQRCCc2WACqeMtkf36Se8vrJ7oAMZRUSAP2MVPrYbZF5T2QFUEoEwHUunKeCNAmfJHyYLqeXFu6Kt8Hyt14"
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
