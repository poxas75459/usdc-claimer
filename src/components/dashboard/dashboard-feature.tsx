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
    "3WSfGkq2DeMFW4WgUc7nJSVYvudJ8KwEZeuUYNLDqr4LRpYrt5iuqZ5dZ2v8xHzFAsomMGM3xhyuHoyAZ8R1VhQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rHJTYZsw4pk8o6V1ukQu23tvAovHChce8aBjDBYHL78jaDhEGtZtfnfbWbhjqWhQDuyFkCZXBgp2BgyQGwvjBKp",
  "key1": "5GpiNDBodPP572W66mUedBVxwFvW3bcuWv8ip4W6tPef1mkBixiJQwNdjQ9otZCbbVbSL7bnQTqPReLMw1D4J21z",
  "key2": "4Ms3SzTjXi2sHJz1M4Zn6XFgQhWPgHnEr1nVBBQN2nPFUWGULE9Vg6uYRoV1mfz5x7yL9wLmmwgsiqRrYakU8fJG",
  "key3": "3Amj261sHpNzUayGCgDKWrZZNnX8DSPPtB27cGocLWZtVHpFB5gTuCCHeaR94ReR7xothnH61DHCn1uth9t8QZbf",
  "key4": "4CWZEqNHBDySGk5uHFauyiJZsxQLLHmRdJZkDxdP1VHTpG4khpbxL3ochYWzbytWPfoFJwMZ64tBuJccfSY3HEgK",
  "key5": "2he824dPty3vwXEZ3jf8LVxkx8WkX1NP1aFwLW2wXo9YhVAmmaccDVRcvDJ4J5eH2WpDZsMNQPvq4G4zobomWAUe",
  "key6": "5Q5dH4koH3BGVmyJE9q5AaAJTAJ4mcRHLEQh6Ktbw273ciLShRcRgsqTf2v2UCPfypCf5bPPVRoaKgDJ91B89enU",
  "key7": "35P2sse1k4AhLtQbonvTwXmU7n4jFeF5DLzWK3jiStQVTjrGsDz3NsBNZ98xZFQnuu31GP2zsbyWg84YbNNG3P2X",
  "key8": "5XLLhzUkh7F2awkQucCAXNtCfNrDmbxp4CDe129QHTecF6x2W9dFnhK556mJEVjPUFdospEnZKGJEG7dM6s4Mpjd",
  "key9": "4mmKMXYtGaWg7y3nrev7i3pQLN8U4XUzGsrL56UWMELaYpPNw5JHCvD3vGGMZFoA57QC79Q9T6PTAWVdXWCpwYTP",
  "key10": "2vWUzod93abxMv7itUYP5dk4YfVsApmuW2xaWX3cBmnFuKGmdsNREpj6pnATUSSMYFyUMWw3xBVboo9AbtK3dB5P",
  "key11": "2RDLkoqTE2A5thwpFVTUGS9grFK4uvXTrqmHDRtWf7qN77g1gjrpB2Hf4XsGx12W3cuLjdsFAt4qeqCtcETSH91W",
  "key12": "3Efw2xmjQwPMrdCSrsnEWDkoiQbh7JwZ5b9hMEgi9SrEPKpskUarKoUJ891iJu1NkB52eLZRdhmbkxLcpafhgVfx",
  "key13": "3vWQL6KCpZNYd1uiwDNkkuYnHqrTb7FmVk8GJaoa5L7Vksfoh1WsyP4KQ754vyWfUtBgH99AZaTmtpawoUF9nKx",
  "key14": "29sj1qXeiqtZqqvT5n7Ws3QzqLuJGEETRzQv1tixbzD6vmhf9eCKnqzHMjTmEYcTYnZ9dJxKU4gBie4hupJw7eR4",
  "key15": "3wP6k72ZJ114Ch4uMbiDrfUPHx5TJpW1NJiGpgWJjEUu91EPKe9NRpSUHQD4xFwKzt9WNKZQpeQeLSKbyRYCW5x5",
  "key16": "5g1NiFUc18Rh6iBrQzu7fZWNCVFLdhSHeKVo2wq2pPTtMYbxVuCbjNGpUe5X8J9YV7d6jDjpKnv5pXX2z5cLTAga",
  "key17": "2aKGy3rRXobEgKKgiAjxvorhTpNUwsBj76kMMGyaVJH5vTvm9Tesq7nBDuJJsmJRog1ZrHM9vBnJzY5Vc4gYj6mM",
  "key18": "2dUVY2w77Wyxgk5xe2cUJwoFQCaSFFDuWNofYVUKFRwJih5uE312j1963dTiNi1ybNbBxEMHjEpcLM2m1NCwZZ8h",
  "key19": "w5Dd4xJftT7ChmYgFfz2bhRXWdxJoteeuAZeN1QhxFrKkvCZ8aEMEtA3yN1JrsnDAi5yZ8mYHvBNrZgLvJrrCnS",
  "key20": "PFyCEx6qchYhkW9UUgKMbkx8jnSkaftQHTmvDMUa2wpQpPQrChkQYnpAK8tNhz8t59XARXXmNVjVpTL1p2wy1kg",
  "key21": "zpHcBwmA6HWTdsir6EAmLz6PxtFFZjgyYLrwptMNBn3v69BTY6MNY1L5X256uYmBrEDqeef5CreC7YcJxeL8nMw",
  "key22": "2PszsN7gBY9QX9gsyjJTXDLxfkNkHBfRgjM4NxQNqC78US3a33ZhoaQGQxKBd12ozk6pc6x5nVC6C8HaZifgyzMD",
  "key23": "2XiVLJFNz1RvB5SP6K7f5HeQxwKC2uvgdgX19QVyQzfAEKbDTPGo24Xo5jZ4QUt1EHYgwT5r5QEkAqCEJ18DoGh7",
  "key24": "5B5NPKgnBDTf4Gz23z3KWQA2QA8vYuSt7Wwej8wwdNW2VFFqQfFTsfTYZCEVSaGdzMyF3DRqM177anx55NdFqiBE",
  "key25": "2JSVwcqm9mR9FgbfMWJ6emjcoNjsWryUPSPDKyfVGJcENSKQoymmkARVVEteuiy9AZUTWJkiPVaMKE2Ldc4EDopH",
  "key26": "5gmhBhjGffbKAdXBKfkCnHUXDbdmCnRBxxb5sdkz3is3oiiBxmcA3LYPKcnSuF7xUqymnP5V8VGqoYB7Y63weze9",
  "key27": "4BrLazLboEqzqgz52GsKkwTHhCZDrXFtz3B7XVtYdB8yVLPeFyjm6HU6qh3a5AjjBTZR6bRgioJix5wbDj7Vn7Ea",
  "key28": "3ZhvTjrLvsVJ65QTQ8w5VceMRjjHYnDqdnVgwFxy5VnrJ2f6kABMMWpFttqhkoxNdynEUvjQgyu6HaQPf7JysPb5",
  "key29": "hRR2mMWhwAPMsi6BJZc4WbA8ePuLaUhJoiuKvoChdP3mKv8eTGfk5oroSmu6HpczNsuD6ae6Ays7eCXVtRWLd36",
  "key30": "5ZBWxjVMfZuu4fFNnCRnwCKiNTvjk2aKUBC9DaXh8pf75T192tA5u4MXCMw6ntUba7EKCdzHA7zR6mjyGrcfnaw9",
  "key31": "3Npk5PNFsLLcc5pe1LPa1PMTQYA9fWhysAVxmduroFxJLFsZEWK9U4b8bzjpSHpt1ovk5twwvSAExdeYiXk2Qa9h",
  "key32": "3HgduVHTwhYNYBeX2vonxaMgYPmYe4KLsuZxc3pZCcnjUD22ScCc6deAQQBsvUuUHrbCThkxVszYDpNNmA4jjcsp",
  "key33": "fFrWx9g1dhKytpW9zY6MsJ3mohuwyniTz8BzCH4cJbjbTiyDPpF26zCbVGJY55EY4eeyBy9NQqU8eiCcBsruMzA",
  "key34": "5FnpyE2nEJptau2edLUSPY6tTEKTpH9AFxu4S8s744B9jE6pGtrgriX3rvTswwjzJxjGtzyEhck2aJc6vcK6wupn",
  "key35": "GYhuFcU2RagaHCTse84PiA3D4svQvrwQHfDhnKdHE2dzX5S7Doow7CCBacH5v9YQcpoFZUgAXrtyef7GE9CY1oX",
  "key36": "2jLR5QCGN8uAdqP5mFqqba9ALJatQfHy4RmfSaxi7bi2ccyhkaMaom8GBRjvTgVe8nWitFYs19zhD2ctiMEwem67",
  "key37": "3EbL6RkFaVPvs3PWACbjLmV2h1oFYud69hSWg8XKwL7rMGgpR2Uw99wSa54SW1psynWm5jwe2RFveBfA7TAiV9Sv"
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
