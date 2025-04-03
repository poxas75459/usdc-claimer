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
    "39B4ZuNPki4rFNDx8XM4di9tpmkTuz53LRsyA2wcx6P3jfVDAtqQxuYBvxsS1Uo4ZWcRTCQMZk4mD8pf4TQ6tKtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iWYay8BNyD3YnPFSMWZVyn5tBL8BHY8AUSEVVXgHFssTNhVdWkGxAyVYKfZJZmHUdAj8u8QsPdnsgpr3kRkGqxP",
  "key1": "2sSjHb3X1g9dLGymnzvVn2wj5DPBtNKnChpcmCuVdUQoWrV79uABTeMacTRwt4Sb7R7nxu69nC9FHJLzgmYDo8Vi",
  "key2": "PA5mbnY5s5WE3V1Q2nG8wMLzpP7dE6MeAwwmDRqJCkz4KQE9QgUtvvhWNaNWpyFS5W4zVwZZPek27424oSApSwX",
  "key3": "3CppTpYPnfXWEbkXs5nARcAu9DykrEXEigS6pwyUoxcRYjyb5NSExkJcnDP3qNvpBa7JQMfjYQrhn6ABYDXDd93S",
  "key4": "wV52GQ85w4krYx8B6kHLH67oFZ6BnXbay25PKVVUJJK2G2wGhheP7V5XBFDxhjY27cEPJiZS1gKBwffi2h6fBzL",
  "key5": "67FYEuNtstvQhY65CKfXwWpVExDAnKSDyH4LHagsgfsZvY2696KntMjD9EcN3a7NpG2tf6g25c7dhwJ7NeQXGXnj",
  "key6": "4Zy7nXZtjg36FhCWB9KcrCbdci3XudHexqoCiCZFN3JQeVut2BkbanpBYe84kFkN8ygsYUX1DcgMD2dK7A5Tx3ZX",
  "key7": "568BJwp8Nv1nYVxpV2EsHnkiNKaYZgAnPj8jGcm33gcPtVyV3Lts28wz3MePxZ4RaSbiTC8ykztoDDKkbomCT6ey",
  "key8": "Zc1HYAdixHRFhrsXYA4Vm2J4atGrX2uXt81V2yvoFEES8F8tb4X7U9on7zaq869yAjJJXnbfDK24QKcEVdgqC9P",
  "key9": "4BPq4735DGtEKtdP4oCGKLSUKVu6L644G7bA7GBWP3g8VoCLM6ZfLPooA2Dsyf9PPw4bwDuq4u8rmDzCaku9RU5E",
  "key10": "2qYJybGjLRVA8UAwtyqwMRnqmFd7PNjVCgVUxfTYFeLZDYnarmfxahBubvNoaAhGUPX2kqvxSLaNEEEV2VGQQRpj",
  "key11": "4EFzh7LbAmTz7wZiGgHbBLtjKfKKeohyibdL4rMVfbRx1x687HYJtwiwyjs7FRAhAHmspiUMj4WXKjhcBK5VSCiv",
  "key12": "4ykjoXD8eG7uWa6Ait3n3pFKBXVpELyQrBBpS9bxzirXr6Ma1ZCe9Xe9zMWBJxdKxSoygbiC5zCfBBcyoYr2EZgF",
  "key13": "4yv5mnnPMpyBPJ6kxAnVwnsX4mD69mry9gqX53AgiZjXLpfTbrBTkeXf5TMnfT5ztXZbRVdTrEoriMpKNnqy61dC",
  "key14": "2ns5PYEAfi4s2zYkhrRnnKmZ95DzGnfyNk4crNiNka4YV53cLsKcJTr9oKPv6PSmSfYLtbzco2zLpTi3eckW5zNz",
  "key15": "3Zd7LkitK2JisqctRgpZaTgTqU4TNZuMFCyycQWqgYJobNW9R2QE3c8u9EHDsdEM2K31fZsyuSZuJKEbBLRujjGd",
  "key16": "d8j3oYX9iTsG1SvoZfq4MzUPHuPY5fQ5p9T3XSaXGAqsKpf3iGfXGmjBH2zZs7xH7V412MRUrgXh71ATYeu4fcj",
  "key17": "5DJLkhTTQzHx8VbkrkHhHTAHuuFor2VToXVia65A91pCYgV9eHiz3wXvARHdKjhpN8iDFHTXqnUJExRdgT4bAVQ9",
  "key18": "2p6W5LjzVu9JEUBD7KjWmvUmvvY8kTCfsdAPkiBrqpCDNP6t4ABDMbZXH1w8WBqsgDzMGqhpQTCEivwkcshed83G",
  "key19": "4Dc3tjFPTtZcqCfM22qHJhcphipPYNCjUm8ghFG94arCenkJL9bVQDbhu1WQrE9ec6PLJbnR4gyq9S52aC2wfRu3",
  "key20": "5Np8kYwD9dXsvJB14Tzt4wFoP8ByrjwGoxRvzmv1ZwfqawxGWQqp8jyvcc7pDtvMtAP7QrEyjLEiGfczZUhd77K4",
  "key21": "54qApu1uVSt8nWnvM3D5K51bSQWSxe3ct8Y7dyZJTAPGxuKPXMLgL6wwg5d84PQiX9uhVCgNyHTU4Av64YXaodNZ",
  "key22": "2PbUuxeabykGcHwvAQzYDcMzx4D2D9eWUWHsPTsEWpJSg8waudVZSfRz4hriAAriWi937H8uy97n1ymw9JRui3jb",
  "key23": "4rRnjiLWguiZVdbfpy2Fo7oAxWYRyxaRfejxP35kwSm8ZqpgaXGz6xkz52WNY1T3Rrc4uBLZkTmqPL31GKCYn2n7",
  "key24": "5nrVisMMMFg1qWQnmHU97D8bd5Zg5f5GEvHx1VPZY7Jh6z5wpiNwXF4WKCmd7FawVAT8UrH1qHxTf7kWsn2vRcx2",
  "key25": "2Xxd2RwBTHSq1BfbKz4v2dpF7AMYH3kLL2ZBWqcsiTsr9Q3Lg76tAx9peQNMoT9RBz55kuENvY25qwrvRQLVXz9V",
  "key26": "FsgkmpaUwgxDSQkxxHoeMYw4Jm6dMcPJsDEpFvQt1RD82rSaevJ7JdHsuxh7AQxH5P4mHHu6cjSqeXYwER636ee",
  "key27": "64vLSyDRrWRgtRcd4YiQTQTS2TAjFJnLRG8HbEkEcuTeFU9XDX7UcG36wy2C6feHEwH99Km5CUeo699r9uhsvHSC",
  "key28": "4QJ2CEgKdeMAeGz2GUEtp9gg45MzmUDYziuixJaWrdgcUp8BJUj7rnxHfdLr3py5aPj1wP433pobDQSB4RTCEnt2",
  "key29": "5bt3Jbs6A7g6Eh74sHYRRxArNv11jr7S94qx1cDf9mpuj1moAHKN4yW7ixXM9cGK1BQUjm13HybSFtCVqh4PXVZB",
  "key30": "2NFUNzXHBw13Ttir7YTUF2hXEWH1mmeUroeWZGp4ZbKiciPjbTS5PKyyRm4E5CztstWYPbd9V3cMF9xJ6JuyZz3i",
  "key31": "5mwecUzdNmNj4HFXjc48wD5LbCDnVYE474xCzdWMJQdb7vcAuTqQ2rbnwFCxhHCZa4uGxbBq63Pr1NnuN2e3mPo6",
  "key32": "UZDvZ49jiqAz6vYR4BSs3VkAz1EZFdUo894ssTbp693Xka3DYwBxgf9EDYba62UV1ottH7zxG9kZYzVy66gL3a9",
  "key33": "44ms3y8L1ZZaorgkgRcDWuJGD3zWVBXuFbHf9TzgtpQT55zG5bTAFBhF2LGg8rG55LtJwSzfnmSAZ1axLjsVMZKN",
  "key34": "2k48Fdg2t7QWbD6UrnKJxTY3ujEJVgXXUbRSaCQ9qgatepw6ZDZWUGdG2Kyw92cLnKZSseJR3WPtqomQZBubBUz1",
  "key35": "VqPf1Pb7VJVAE83vgqGNYBnVZbbGQmDw1pvU4VY66mEfu8KixkK6pUWvLmaZwNcbKMfd7DuaiaMA8XuWXPDYsij",
  "key36": "3fwY5aYN39iweLaSeACwZsGen8PSNG9dk3Z4rgnqKjy2Tj5cddBFTsnmsoYFYzpbQeujmekrtzCCfPhgxin55Zwp",
  "key37": "3WjyCZ5EjU31kCUNRn1AaLoxSiQV9AN4oRQdhYbkzMhDAsYrpomXmtuL1WHs1ALKoS1imX9sMs5KiABntrb5sdLf"
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
