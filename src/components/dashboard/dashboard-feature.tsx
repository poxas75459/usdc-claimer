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
    "2tzqimAmryG2XSYyZcT18NHZgb4SmzxbkSctaq8TnxybW8eiiU4eiQWdokLveaiJNfcNdM8rrhCXw8ufsCjoTCmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K19QUr7toWP6GjdjH8JqT2GwLZtjrcVUWRNcpkFoPmYXpr6LtCQCnBnKZ3F6HPPRgvoWKJ4BpqmKRmSPF8iudeA",
  "key1": "5h7MvSE9wbkYBf65PF65z5HrAHniLmKicwBj1gQHdiAPwJVkfUHDnZ64VMd8HXpdBYaDeY64S6Ja9hDugPSLrfga",
  "key2": "K35VfJBfbXNQFYzZyKteg5F7bKecQiikwNBaDVgCZ8Ww5pB18eg3YyE3WpnCF68LXPJRxyUGquAFvN8oG5tHTdM",
  "key3": "4df3un4jv6ShtCkkhLVgfpQhFkvr2AkcB9Y7HRK4MqtkdtbLC7MVrtFCsPUWHuaopCLASZNyqqJpYFdJ76wFcd1g",
  "key4": "5JuhhgK7PKcwtqToGTCeVtEdn79krQ72cCn6mdouTjtu7rDvx12s9anWeU9xBSdqaoHK6pZ6BFgQZEWLFrhMECBx",
  "key5": "A3YBYT7V2fSayqDbbbfyxyhEKzvcEBum3YRPrDaULnnQp8gbGStxSBfgdgPk1cvsU9R3b6jBDWfAxkE8fvm9qt7",
  "key6": "27VPoAnhZjV7Q4Cr8zFzVh1SsNY5JyvM5ir8Tc2SRkdjGLNqBajg7miXcw2mPMPJt86WAjUR1gpsBQLjAgJWGBVn",
  "key7": "gK1pNsejvKq9zC8aPtsXxNyKLexasnSYYnVTv6yUD1W7aTsokLSyfHpPZp3nFrvLP6UsPkszLqfG86MWbdqdMPK",
  "key8": "i7Z6XmxrfodmWZe8cRCUV7t8Z3cXMvFiHpV9iSBvqar8j1PSbKtVPYG1FZeUKUGATekh3DGFG9us3aChHvB7BnB",
  "key9": "4F5PWf9HT8H4WN4zo2pPqQc3fW2RhKCTPay9n8M3Z8douNggUne1jpAagvQy7BFZ6t77dPy5duHW31y85XQQruwp",
  "key10": "2qnQdCM3QV5DxPZQPZpZD5zBiGkAN3bUSKSEZNMbrgXWm3yAeNCXMr9pPBgdPHN33ZDjBHZhcG2fR4GAGe1QBtjH",
  "key11": "2ia8P9yVof2xouqtQtYUHn4EXoBfeMyYB121DvUYbHWXs8tRrosYQAtUvubxyD2JYYhaNVN9XaPhePVdbdXemC8S",
  "key12": "3otfTPRmPipryBTCpGnkaA33vj4yBAi1EE7dUekxv1GunY5feQpfvDKG9L1hjuBvNGnivpnDKLF1T8bPVHmsQwJN",
  "key13": "3HpSsNeFU8fHHAgtKEB6yJgg4JsVjkrUccR9V1wE3uQ6cVd61i7gwSmbap2REkgaqcjUnYoNX9Qukgou1tVeWiy7",
  "key14": "1JTYn9ysCA2LRSyUQGmX8eE1pjyh47g6pH6LCV8RdYe176KfDKY1oLpNicYtJobLwRFPbSTrjbT7YeEM3hvwkuq",
  "key15": "2YxWyB9khqW3oMUEGeqRmFkJr2JQkuRWN3CT4wS8oGBCvTTp7xk18u9fGNXeUnAakVTJxambEStMDKyiFc8DNXSZ",
  "key16": "2hyxUMnrF2voijfEsuvu6nfpqW496nGDJBHCyJCR4KHbFbrVbqnU7ntw1pjJ7viiupS2SVo8RzZDnRmDUaTYZ8LY",
  "key17": "4o2vPFnVYdcWeG8hbZSiKQWZ1vP5d9WxehF28j3QVmNt85PV7roHSxEMQktWSfTSadnDCQJHy6169VZuHPJMVbFd",
  "key18": "4eS5GLNKT17sZ1kjgcNBwZadn2BJsobq4yYukhQvjvAvybLx6miyn9ST5v25qSPMFMxEyvxVBoWDhgN9sdwJtV8t",
  "key19": "WM4fCihmijWGjKqfHX47aDMGjvFQ8sbc4B4T1Wccitue3QbiTxpU8koxDcbKy9j6yGmRtHs6S7n8j8vPjwJWQ6Z",
  "key20": "54g3ok97k4JkQscTYEE3hUE4GY38fCC73cic14wG6mzogFy5iQyfMog1ikzmYtKtLkZ8epDCe4htEvQDXy1EDYi",
  "key21": "X7Cs8Tj6Jb34rQNPxrgYJWmh83t3G6avig3wQT1v7PWRrp8GQJ8ddJLUZ7TXthKDTvwKh8sMuDScdPCT6nTMYeJ",
  "key22": "5SxQJUg5veEweZQLMyYyW8VqjHQzDeCpQpfFwY9Zq4vUcwVxV6r4NDXWjjTav5Q9Wvemgvru2ZqGPgEFxjRQmPSx",
  "key23": "4ngFxEGEeMjz9jwb8yWEJFDpGPSxXU5viCskB7cmuvcqGKMScWX3boQjsLPGASttyyTdvUmE6xmtr71BM9wgth4",
  "key24": "3Fv9gmAVDEAc9isjsYbXhQTRkSDxFcz3KHzN6f3ugHjNavJz5JLH7GvXwPgegx4Ct4NFq9mp2oTPPjX7iAkCUQnz",
  "key25": "xbsq3WQ86Mu2QeVCi3smvbQNio3wMTgCTDFP59wWr4XJsUiUFaCX1kco34UaEzCxKYA4hNrv4KntxmxVzHbpKhF",
  "key26": "S4PpGDtDk3QTjcMZPfwZNCQocpShkd4eKpWRHfMiTZ4f5mu5ZPMHDfFxL7kmXe2HVw5RuEFPzivrAW9VWe11eXJ",
  "key27": "43yjA7RGATKPiACNZBLcfzEWDPZYPegAejFTv7Xzrc3CMyhbP7ykaF5giHxDcK4c1zYsEtiJjhcKiippwabUSVE2",
  "key28": "3oQSqXENnSmPSeDaEyCF1ufxnQxzxmHh86Zuq4rQWkGGNfCmB2xLLJBdN4ekJ7funUEX7Mfv9CZq7iB7nEgShTCD",
  "key29": "4LghUZZwjPjTZbcUr74hWkLh7nLJZL2CkRGjAZZ2bMqeLjJWfoe63qzRzEPTVc6TDC83aHNRTxx8GuR6Ce2Dmnbi",
  "key30": "2J7a8gcYbdHx5ZS8yG3ZV4t9RzumjJkkumJF5hX41df6jsCKBw3F3bqMnCYKKezuf48dzDHZ6kd2xgFvqaqdHYav",
  "key31": "5pouNbBVRHF2DVShPAB5efU2q4nFedz5kLfj3Gg4bYQQf2gxKSQtX1PKVUkQwgWXfvqT9mARXmK2ixx36yQCyLNV",
  "key32": "5avTbraus2Qprx9Gcn8qU7W3NaidiiqsveK4i3JH9VywyGcYQgfS1VA4Xpi6LEgoYhjDAUpvdEiwkQL2X6R9sT2J",
  "key33": "3vFcNyCcZHopsR1GDHssBnpoDZknmfNxszZPp2n1tJj3SQTZd2BJiNT6y4Gp2Ywrr6XkmT3R65BYoQK2Ww3728Yb",
  "key34": "45RG6N1pj9hM7gk3wXgAswWofy1YqvyRTQXM3XhPR5Pamgb8cmhjrxT4gnAsmAK6nSnJWUiQTqzJHG9d72Ghk2c9",
  "key35": "5uZ79LMzwCYEh5S6u4AuKhf8NW1dqLNu5gcVSd13NNS7gYJYv3wYkauwnXLVVTYm5hLyFjQsr8nPkyp4fsuCCgfW",
  "key36": "4eWPvuDF4cvCedNwYkHpbt2PBAFv522U2tiH5E78hbsm5RqJi7MS1yb9AYPjc6XDGXWxjGBLh7XXX9qKutqZFoRa",
  "key37": "3wDYaeWLb4SitHLaJPYwQ7q6DybAWWqX9WQeG6QV6aEhowfyeLSKMf5jbQdgKUnRaFiMZnAwiG7FgVgRUMAaQP2Y",
  "key38": "4eNfRixzrQzaB9ejhPnYub5LcoYjoRUt61Cy8jcKEa1snbbVFw3oE6FadNNMae4KqAMv8U7FCBkJbm64ztG1AqsR",
  "key39": "5zZJJpFRw9QdSE1TqN567qiqavnwe6nPk3o1SbUfHrbqtxPmrq36YeKXDNnuLu4gUe5Zx5ZMY9p5npmVWYRPyAtY",
  "key40": "2pECGh3TciBU7teXzAViskVSGrjyW6gRcVBJNANgHsB8cTd7ytvW5dm7RG2cotEfzEm8ndtyYrLPPULo3wE3xAKg",
  "key41": "5CGcfN339npZznQnTuEx7NB3DzURmYE3AJVGYZMfujmEyXLoc33Y5BTmzyb2L25GNWbyX6SR58ih8KbanRB9rSmP",
  "key42": "VKbYfFi1N6wuYEVJFtsxP2eX3J36soUWfm5H5w5EGRnkR6x5Cshk4i9oG5i3mAqG9GKskGQvzXmt7n8mgaMWjzx",
  "key43": "27VcYth7yCHLRQphzEdt6evJPHPmeR71UQxSzt7dr6Mhp2S8ADHtFd1Jauw8JZksF9eEzqTseeS4z4jKhUTCM7hq",
  "key44": "4ozgkWbKpi6h7LsmvUHLm6qNFvZAD3PK2sB8u3n4HM7fnf7f29mmbSYfSbCRZLytFGRdszByC1CyEAkqLnGnssCx",
  "key45": "5eJwqGCbYcMAwtDXUs7K7ee7UHunHapc4UURUnudJPQsF7Fhsnn4KTdoPVy65dtxbFBk96ZXhpjhkFu1WKGEDGfF",
  "key46": "3WCBTR7k8WGMyBQ71AMg5PDbyibGnKYsdMS8YrUPqRVNzUxicdVvCzLQgVHK1n2peaEipmTGaAra4evbqKyWL5dC",
  "key47": "2kTDprStDd8YYTbEmu9eHiE5JXa45N8vdXu8CVt53LQ9HESE8LJjWg5yjbEC94LDo9xtxUS7o5URxhqDNUcES4Py",
  "key48": "3uffqrA5Fcjhjvx4cG8fCZd2eBu6pQeB8BbKuLiPKeQKkynZhENLbpqbTUZ5czqm4afWtbhqB3Z1u4s4gaZXJS3S",
  "key49": "DjKiqYhpqABFKr3q5x67C9ojfZsMCnMoiuxJe7LEkwNUPUgnUrw7qnqgw21qYDSWUtgAjQpUoAAEDh1hyfxudqL"
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
