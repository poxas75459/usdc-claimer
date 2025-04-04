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
    "2Tu7pjyoqo6rsE6Y9uChKHgeR1DoJ4FiWDZgcLrcYbNd9A5Hqf6CiL9EHsroUTS1kDvUYbfyQJEC3caJ71m8t1co"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T4i1kjj1AqbqqFQmGbho4rEMvwwfSaHhTcqHpwFsv8Kx89ArfyopMTrSzE1pDNhTNgd5y2C6xBgdHUayEta87YJ",
  "key1": "1CCkjqXAbDApVS94NQRwVKymgidgfB1Z2Nk7DABUENrNSocotXWh1kPT4EmXvEiyE1hGXkHgWXZ1joHjPF4tRx6",
  "key2": "3vGLFDYMT5VCx2mWtKMhfXrC4jSGRSfwh45LyTJgYjNB2bJDWbKhBhZPfyxCuRTcwnFeo4Vcbj1z9U9VGjReoXwZ",
  "key3": "52FZarPk66V2XBhThVwr89aHXdPH5cLn6iV7dy32zFkLrEsMnieRaUvef3Deqh6uYomhJW8rfcWuvKLRz9JQnYTv",
  "key4": "PQLvSt1Yw34cUPhCuF2aGJLRyATnjYTf4p1uozg6ZCtLtz1zRcAGUjEjKcE4uSruyY8bPrjnfXPnnF1wQ4qGHxv",
  "key5": "3rEZ8jSauxmyaDNJ5jGZcwPAjfvP9vd19seDV6yr12tdS3tpCM7m7f7qhnSoCDoamk6AXGgwEPS5CYhkEYtCfkfC",
  "key6": "28XSxs634fSTrp2A4d35FoAvLERfcvGcF5Eeje2F87QVNdfgbWjh2iceGJQNLGuunLpXpX33qrXdS5PqXLoKfuit",
  "key7": "3ETvvSgc5PXWqSgiNDGuzJyzFykvyBFU6jsqDnHHt2EaJTRtiPUB831vDdWniTh7fn9nkwZy5zSmQniA4jjoSdKt",
  "key8": "3BvxzZyGbSK5GXxmwdsXAd4Rs9PQQADPsLuqC4WqM2BY4PpYHH9NLroEaEDjotHNMvrTAuqMA3iQ77Dtfpqk2gJh",
  "key9": "3ad2zVcxC2Lv5cM4th5YbHJEyyX7PgCxdaUf6B294dxpyM6gKRVUPwiTMtqSjW1iVp9ZNXsdszLuzxc4jRHgaMXi",
  "key10": "5mjr2Kz7J1FHDVn7tZxACnvLA56kXYJTH3DqyxwZTRZhhXhY4pRqkpLGwUtsNrCfLbT1zstGGoL8T3tqpC2kmnmA",
  "key11": "2W1xCS6FeeijfQPNaDQaaLa5AzTsMpmYsjF3oLZQ1Nndfp3MAC38u343xUfmGeNvML4RWrKbXhP5oPZ7sLA5VvpE",
  "key12": "2kCorpuNauYbjhZUsEJRfQbQhZiALLDbyKPYY9uEqnU3D8d8kBiNntqE1nwPjWzQvMNR1AVx1wakisJKj7vGKV1c",
  "key13": "5euQcKzbD5hWkAc4txBh6vh3XeBPGN4FWKvtQ89FjkqNZAuozaQZxCpyyN1end2UEX57a8oGjQyQLX7YM4gm8tvR",
  "key14": "5xkjvioM7oN67E6mv2auyjqV21NKoZraeTYXegoYRyqnQ2nnd1ARDyx1BfJNdCMCNFAmPqf9isRD8n3j9mRsvn6q",
  "key15": "5pWYuQ8vWHMG2CTbtzsnGuDtGNcAM15oNieSUFpP2XmG8J8LXko7XcGhaFw49bCrFYfWEwporYXgFaNyac1855P3",
  "key16": "28Pc7FfSxQsd1d68MhUg6ZdVFCMfDhtdLmKDX4MEy5hccf5GSQdckJSCF46DzauA7wovxEqghjiNys2L9QiceXXY",
  "key17": "66YGfNYccdR2oHTXUw9npBi8LUxzkYhtG5Ewb9wZSTphzqyXyUQyXdqbTzL3TYDLHdCyWPnuUQtFECfbVpHzQ6X",
  "key18": "2iZXYAEhE8tGa5Rf6D369SEBpGBQYueorKtNMuEiDLDPCjN7shcSxGtQjmXsvxPpMpY9GHhkAPwXTqEtBsCadvop",
  "key19": "xBtzyEq76GpyypGUPa6xyyn6tWrKywnTZzkFVPNKHMwNYMvWf6JTg2sCmtnn6QYjJMCLZX8pzw9HJQtS49LppJv",
  "key20": "2nRNZdAahHfMzYfeZLhFFY1MQTNrk8q756c2ipg4yU6jSvR5cUFqvHfmGVBgkVkp6xqavB8dXh2VwtBu83jkgxTA",
  "key21": "1fK5ehJss2GKZFVxMZG8Yk99TW4qADJrictbVtAdTPv1AaRtzUGMzg8yNWw7h2HyNtogGpUQ2u4QaPnvpuQpKN3",
  "key22": "3Tte59899iA6wR4tybzAmra5duisq8SqfVvGCchwEhzgGeJCSm9As6Mg9ZYqx6jjRxr4RqHfgQPacs12C76mVik8",
  "key23": "4yuhcnEfNEwSUd2k2YE7yKUragoACG5Q2x2pkGp5JqJUUMx3KZgv1iqnpqu6danxo1XomJ8VT78M6Z7XsyCHqvoX",
  "key24": "67nse7VB68iwJbHjGkhZp2m1k9cyfKJrXwhEw3JfY2dwYymibhmf2MYi2Ra5FZbWoErJWCpbm3QjiZx61KA92S8k",
  "key25": "DmZhCqCu6TXyKZjDpuppT7arXdE7TAd8ermtP47rLhVTtUqEaRwsbYBrotJVDQa5YQbuB5iYgDj5mAGu9wZYfaA",
  "key26": "4SCfvsinEqaB7dNq3gR34xbtJEHZBLp6ozcwfxFee44qM4dkjDaq6Wzp64UgWV2jn2JNmw42MJz2MGNeFH6jRoyn",
  "key27": "3XgZx9ZofsCxReV7uMeCCN22ezBp7xax78nKv9BrdctxraXcxv1hkJS5P9s3zxcAUofpYNZ9BAdraKLcqyPcMosR",
  "key28": "4r3cDAKiRXTJcwCXCruPGdB8sA6c9PziN2T97vKQkFai7FMe4vHwZBMvUwygojK3zrqBsu2jWBk6vQdXz76Pi6Uy",
  "key29": "2Gc99MMY32J3ntDhFHjrwu37cPrRU2iLEcbxPNvndzhHZ3iuygAFUGnXkFp2gTLHXLZheLqdwg7zjsGU1gnHhQri",
  "key30": "24DG74QAy8KeJSMgucShYFgrqtqQ5bvzX5DmyKjDoi2YUdCBZWnj8NHT98vL2fZoAuZdRe7fgwwgd2YUYChXd8S7",
  "key31": "vneQt3pwt2hjYoSvwDPzfZrkiFFxavkQGvz78jL12XiUrBVbMpecfyXmW6AywMgHuwAoLEAp9jJfg3Fkt95L2V4",
  "key32": "YR1e7C6FEUPoydJsYKoZF4iMXKsZe6PqqWi71oG6R8piLsVg1Gz6hRBzm87ydvgygVMK3RHNP1NLXCrKL272ZPp",
  "key33": "5HNWQDAorR4QjgGTxNskVXEaYiYv2C9isyEgKRVcPM8sCzn8LGCAtuhBfg6PfBgJbRKzV1SJJCAFKbu54k3Jzf65",
  "key34": "AGimMfQ9fM36T2NtxEPcpkYZyXjnbRit5N5xAx5AFTHWpznGuamukCn3SJ8DnvogrL8T6EVUKW3X9MirPuEBJMz",
  "key35": "jTr1TAp1Zm7ZpKxyPuCZpsmqr2Mb6UfQfwcoexLJxZ558F2TrPCYcoJLn1EPPmvKtxXnQkZjLGjCy8YMeVccdGb",
  "key36": "5xtPbs68eBCN5zecfgZvfqs9R9eTUYFdXbdxh9YQeAcKgMyuYoVJ7ma22sWY9XC789r6MBpZszqYEMLLws4fU5hY"
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
