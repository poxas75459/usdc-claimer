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
    "3TAzVB44EcG2so7tXFzvnFXM6P8VNG5VRMqax3e6xzZ4sfGhGv86KA1A3xLZ5M3S6XhstNpZjDnqKKYjcZTr8yRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AbAi3gDGXpPuuUuZM6n8nSZmybrHh9WB83ny6qrvc6GhSPshTdEjixYjwXLBFEy6npStdQJKsGenngFKBgFcfH7",
  "key1": "3khroPRSqFUjfKrGvp5FgSFqdGLb8WTWAEozNZRM8nKx5J8886rUtVNbXTUkLAJyCXSSm94t8PNH5PNvSfx9FDky",
  "key2": "5o9SGwoTnchwbsMCThHC5bW8FSNQ4XEyzfZw28bm8wVLe7hgpx3uVfHMHqKfjrJiZPLZiB7Vddb1a87UMnGoZtnw",
  "key3": "34DMMaeWBjQ5tRuVUjE1dNs2XKyrgcAUWsM1ckdwfHqqdZ2BHK7fabKgcuqZVG9fijkUbMWpyFDWFfDWmN7dBAht",
  "key4": "4Fh9PJoiRv3Yshgnvmpf94nn246eFEh5AbfZJyycxnKnAkLxBd447sH8d6YfKs69aL2LV3j1U8tCNaBDS6eRZejQ",
  "key5": "37R2rpmcapeFuxnknVgfxnzV3Gruq9iijRP7h8JdjmUfKoF5RdKByYRmamVDB8QHsxFbV1LP72u4a86FF8riZJG1",
  "key6": "atUbsoqW3YKaPMz8EEAdcWrH7q6g68BQ94k1KTnoQDJi4HQVWE8ipw3YwywjmLR9QJHBtPtgZKji2xejTEqEG2V",
  "key7": "4B7iqRqPUcB4A6771RzcBd49xX5cEoDtAL682Yf55oZPfmTve7rCbxo5qcQNBZbprb3n9FbJX8pR3EhjjpkvXXuc",
  "key8": "2sYtTiaRbSs6z1gFjCaVCbPxdkigxGK2bh6vwbhfpj1ea9gEx3JMDB7FXQD5eogK1juD1jE58kCJyagEJrnRU22H",
  "key9": "4tinwW1XJ6wVSJUKhS8w1SjPS5EbSiUaLdWYALDtNYcBpV6gwBn2QjfgPqHRafNavpMeo3wsQNiLi5RZF4g4zfzS",
  "key10": "VkdnMaPmaRyQs3f5u4ZWEyzB8SiF9sLr3BfLSFPiFaaL7YLknGUXLcpd9yWwYP9eGiHyX1EnnSRd7keXE9ktJSk",
  "key11": "3XyqbFAFu2GPWpAgR5SizAdbj9QDvSkhwpXF7eW97VWnNyJguCaRyGPc7krTVynQ2TKtnkk3MhQnQw2QG56PXBK6",
  "key12": "3JbXpUtiLzf9sCZW2g4z2c3ojr8Cn5ps5i3DfbuPEaymmZLYswms9Mu8L8gxXDvDpEGm42MBhRX4KAcvyZjq1LP1",
  "key13": "2H5kEboRLTbKRGmbUXnaxRAngKyiK2SUKvcJcAvC172MvUvW6A5bdpuYbdyWQVHEef7Qvbn7tP9qM4x3Lr9mWX2T",
  "key14": "4FhByAPdX6DUEaBv9hQfMRkoczULZgMiFNRYSS7HoyV1SsVb3t45KiAgX4Q9R2ApMYTqn5gUhW1Evg44G5JiBLQU",
  "key15": "3rEr9o7UKopUnzwePohiMKLtk7pheR5dB647X2Ja19b7prDcfSeFDanqd9egGpogcW6yqQmBhTebDe9XoHXqhbbU",
  "key16": "2Jvjg1R8BYDct9AmYPanFbUc7NczmyMzWwP5TNRFTLdPFvnM5YPZcCcfY2V2BCKUovW18KzeoAMg64S2dbB81crR",
  "key17": "3BucXQE2uUiuYi9mHUVtjRR1aNYoWjhJiGPsqxoD6iVRixywVfqwJgcHCo28b6GQnyEq3PdCRxGS5gKTXh4uuK4N",
  "key18": "2caUjjZhPKYrpZufPkUc3aZRh2UJ9iSEP3hFAucPEn3FMwyEFGoQEJfazqPmJ7eCdjrMyaPPWJKvWBCDYbcZatRX",
  "key19": "9tBH7fJ4uaF2vNNzxcGE8W9wuUpyeV6V1CgqzTJLDt8x5kac8Y61Y9fVSAMnBFin3Vukbau4JLf98V817NQ5Xqx",
  "key20": "5BNjTkC6PL3B9Ke36YGHsRZuAv4o4EqUo9QJXnSyD7cvfvaZG6apxJCVQLqJfyCAtVqdxhHZppkNFjbY7L6KSPzK",
  "key21": "4y5Sam4az5QiwAkHMvXK3LcwK9ceKm9WKmo5KVHZ3V6bAJtkYUd7NnC3SkxPLyLHCjuzvLc5CG911tGpHYCLc3j2",
  "key22": "3RkmvCabhmwwcYXR7UUECtMRpXxXiHhgiaSzWNumK1FGFsgnb1dnHxRuhQ4B9Di5erR1v4ViNGw7HYgVVNCXQDDK",
  "key23": "teUUrrChMrHCpLBHCq2FVqCkY88ieUbtSkJ2VQz89fJCZkf2qbKqb6js9GkEM1fchaGVbCiDsrN8ryC8UGxytfY",
  "key24": "4R8HqQqBNUrLn9tzTSYKpxZWTBNFnuYVgj4Wo88BZmZPvGhq3TFjRyqUERbUfZ4WsUTG9iiRe8CFAYAXrksU9yjd",
  "key25": "54NVvWXMjpgDzAHLYuNNCtXW3oTbauHXrMMBgE4CQv617jciuJQVWeqtTzjJvzQfJ8T8snifybytuJ9TSL66AD8p",
  "key26": "28CUTVn6n84wMGoQ4GgQ7zcsXXYEvux8Pn8pTmmzevgwq5CBHwmbWqdmTSGsctBfT7koCt6HmvpeQPsbXbqMdgye",
  "key27": "4ZdCN5YahWEFSZu5Trv3sfo8ZJSCijeDn9iDx1Z2ykgB4YcGFJ2g24vF9tBUZGYy3GycfERyTG7pQPzufkt8Vgjt",
  "key28": "3w8ZVL7jdpizQZbQEgfNwDxLTMjiQnSC9863N79aVFa1FdTurzw1vV45vCrFcar2hddJMMebqfuDCN3uoLgGkER7",
  "key29": "2ogerHwwVc6bSKkqmet9791veoC7FeACE1TwU4ZfoZCaGwNLorZcLXVizt4mjq2wzcq3PeeEwj7ckhKszpHVSaRi",
  "key30": "2jCBPnMxt6ZuAdDjavLiNLC4QGKz4msjLmcZAVSvsRqiwYWVA5bEpoSUGRJW4mt2RMJX7MT4xQ7ZttX2f3TzC7i",
  "key31": "38oguvGZC8SPxThbZqREnVCNGRGnTFiZwWjrozt4ts53XemE93gPhWNeYecBsMXRYAthUvXeL54o23tddYeecnKY",
  "key32": "cqcJfQkDzBdNNWSUudgsEwtLoEALomMonpdWckqr9LyWPQjAbF5kmfMcgyTHNEH1uEUd3HaNcsjtnkZwqVsC8Yx",
  "key33": "34XSwsudTSBUF39gGkmyh3zKTdbg9HeEejoCcBkfdRE86iQRevJG8Ym5yFNEFAeXD8yph97ayxBcRkaRXCi9Uufd",
  "key34": "3arMHJMU2TYCPBaiBZAppbZsAXAdUUcvLDSCh78dY9TL7ZRxX8Z31GgALUHMv7ykhw9p2tYWaqhH1f8eWFoeXy3t",
  "key35": "34Psr74aCxk4Qi5r8219CVYNkoM7NjW8pU6YhwGB9T4ceL4h9Ki7xUP8d4qnFJR5mejsiiNYp5bBgQ6KSfoQSrE1",
  "key36": "zAmpGVtfVTzy81CCZddLFCR5aS8GNqBnjTDNVD1M1X23BWvSBkZdUDshBkZMZhKxaCeP6eMnejuZfqzFVti55Au",
  "key37": "6ukpSjyDiWfNaFscHTuWrpE6TgCdfBcQZiVKVii7K3jmRDepFqYabctz3y5ZQpoKBcAXXRAd4WPhUa9cavhA7zv",
  "key38": "58cs3aJ7qWKtgs9NDKjUMZ9STh7N3QQWMciPHn5ZW62R6yN2USLhZyDobjGwQfjgY1j6mr2gKmMTgfm1RKhNFvX4",
  "key39": "3BJEGRfJQ6bat7rzXES23cGmxSv4CPCBH4KKLWYV3y58yHhhDXtWRR8BznujLeeFQeKPHteDxiHsFGevZRptaDx",
  "key40": "22izzat4gneRRdv4wSjqDtBXMabVK4y3mgLxwYpcCqbL7Q4wHdmgaD5R1WCUa64nyX55VgDz4Ni3EATz3fT6PCrN",
  "key41": "35hWVXt7Xk2wsjsecof21br9fmuYc5SSxyAZagn7gMVo18f6RMe6fTaX7bGeAXFnmVRcyM3C3us8163H6zZr4ADu"
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
