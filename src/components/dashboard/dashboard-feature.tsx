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
    "3m3iPhZLr8VGSFiLngViB8BbtBo6gfsmPnUa91aMabr6pyV6LJ8AuySntShXbeGcWNaoSqyJzM9nqBCzVQnDxmXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5engiRi3bkt9SvxMqJWXFYyhwN5U4eusSxFnYNB2hTABbLiR4K2UN2Wkh4qwz1J42vjBiPLrwKR8i576hACwYoqM",
  "key1": "8yLFRsuzq6RNWRnd53CM1oAxjjxYKULPTtDEZh3achwmk92n2E3k2gbbC1HyCfHumCmaMvH9L9XNqjG8T8DWp4y",
  "key2": "2bdKABJThoQzyUX8KnMQyHLF9YrGrxtuCWAH2TV48TLjHVYvfTe7YCwEuNKYQTVcVBETNjhzuFyFCdEDVwhRsYVP",
  "key3": "2uTTod2mgPae4oKddfxarSK4LBA1r8RJX46KHtaVXmAUMQYMknb33T4J4bauJH6JVGAauE1ckkPiCpxibNttudj",
  "key4": "2Le8NcXhu2b7EasWe6joRtbHzqgR1ZTJ5c6x1LnsxPxVTuzKdDYURSRExcu6XeJYavPf92hQwwJRKYW2yTPr6rZh",
  "key5": "2eGxoJj8okR5dxFFE6KBkGtxK6tUvAJSriAenLxxhRBFgBLb5812TnvXb6CMMgkFJF3UnymNCewSqGsFsuxe3akQ",
  "key6": "4te4oeWUmoCxd3bXN192RPdxPAd1NPY5EWuVh6Sh1y2AZRiFhHRjCmWwwDchx8ZVNZYj5xapHP9SdJM2UmwNmtXE",
  "key7": "3t3FT8PbZ2KdPU78fM3RUCQuW23UfuxhMZ6Lx9oFYYiN6Y4XrpFSQubYExM3nUCWkSZjkKbZ3G5ntEwfENcToUzy",
  "key8": "4Vofa1kP2qWDsdnUEM4MQSfgVgjKW2mcaG6HATkm45b8RburxDrbUyTyr95Zk6r3HAauKFkBxrdeK4nJdauKtWPa",
  "key9": "497GiPDA9sE4qa6WKNWRK3By69FRhWySxj2oUejzNZgAPFdT7TmhLppJRxWc9Nff5PaYgfeL7rPtzNGDzDVqUyM2",
  "key10": "3wHux9vf4VEMd7ZvjKrVWEKM5uAqzp96iWYceVcRSz2P75XhjQg1ThXtLqY5usp2ZhroN6Za1Nz8ouWCo9akz4wW",
  "key11": "3dMafcVvtd4XYXsBi4w4Pfy4sZLm5sbY276SB4VN7dbTjA4zqZi18ebQu8x63XnLMoAKTi8NVNQx3qb7LQ3deEjh",
  "key12": "4y8ghzMtBJPTcE1zJ9E1CXNc8g2g2H8Liy647xgSP1BAJSprwfBuN6ByJF31pDVcgr7bvgE2LE2D3fVQYGjvfBtt",
  "key13": "3r1CnZjDf78Xa4GVSzDXRzNc6cjG5EpBRTaNX4dpCwYonUnwYBxQ52iqa8Nm3dmZdpEFLEV5EEvyvk16e8nBRcXc",
  "key14": "5WmJkeZcbvS8simZqNKbTj32L6Mxb8HmmVmaqo33yBr2iCKwW4dj5bejas9a5NfY9KAw5vr7BHVcDD32EymagBqb",
  "key15": "5VPy25AFLBzsKpadZoZWF8ut2p61Xw7XkHzR2jb5RheisJSRJZDVWU42bzzpk1yommB382ybw3wi1DEsf2Zi6ZE2",
  "key16": "2tnHbQkNboX68YAox83zWUSDqJtJ483ZV68MUNzFmFhFnajqm5HD6W6mJqGGwcWWTkUPdubs2BrnDcmxJFFXryoP",
  "key17": "yhwfLQ8yB6ebCu5WrAZcQiPkxEDraeCh3fz64gnoFPQ4W5gNq2cgwNKuehRDgZbeybeSieUFbmf78hYdK5tmzeP",
  "key18": "3HhYELZn8hMQ9UjV1W1PtFx6U3v53iPLmzXpCDiCzhuMdEUskAUmhf1RhojKK1ghFD5Hy32taDHFq1WrmzKhzKWQ",
  "key19": "4SBe6siMWwTM5NstdiX7sELg1j3SMifR963wxm5MUu43hLboZb53HZaPk1eajNcy872GQ5T4Vdw4m9i7TZmGj8ej",
  "key20": "5bfatYfgUTw3jofDCqCkyKAumy6Vye6QWTn3H3aDRTVQTsPgHEbBBCedwbgxorJTzGALjeZ9wcMdY8cBdEkRL7t3",
  "key21": "3KUXAY6cea8aC5qBjnyCxoLUoU8ajSnkViXjKWeF2Zaqv4AcAbYYgmBSwUkYEEgCZGyyZyrktHPxU8jTct2mmCgh",
  "key22": "5qB6fJQRmvYdMG1Z6eG79YQ6EDvHaaNwoXVLxbpvPPCiA7aEsbdneXYnca3y1ubJmnaxnRAREFgrbBgYSXdzLb7Y",
  "key23": "4q5QY8HasSzGtpQa9RorJ5didNbk2pgs19XCF47Hck2Vy5KqJ9VAEZULkqWKGpVbQnyMLRBxDoXajHsSVc8cPGsN",
  "key24": "SRSa7wfjst44eU6A9LTBDPBb3MQyJsWvbrDFATD5TcmBiv7RuiGJnV8e9QcgXYkBYtQFYcNAxVW32zLrsjsJqWZ",
  "key25": "3CvFBoaTUfh5hpMGRFq5o4SauJNoEH7najN7hfTbRt7NZ88KQMLP5quw8LAAeESw3B2nph9j3fKNuojKbAzh6vwV",
  "key26": "4fXt6dPqrnyiydUB2sWgSkW2m6rqnL1cEuSAAjm4EraiG69NKuWv2VfApL9HaqYYMRtRJRfeaQ2YzkcYAQbvhs4D",
  "key27": "61QLwmQhQ7MgWTgeXZc7p19roEn6HWCp7FVR2sGAqFkMiDx5R83eJT7fwykxDycEu4JAFVSpgpFnpU4kSkWhQAHR",
  "key28": "3MKisGFqouSFiaaKkJchQDb2CZC11iacJnn4KzZmNdRZfQV2rxJ4QXjDBudyEho2HjM5Nno9YZWVeBJ7pdvyN5CM",
  "key29": "cpQQXv3n9ojDviuhoBevSp8RpYRHDRAJ5Na7weiXU8Hr9FNR4FpQCGriTNx5ecxSU2ATaFu7dL2CEV2X7r4wMNF",
  "key30": "21H8cKEx1AmYLvX6EtBEXExzZWesrdmFwsdyG8fmjC5vo11o531d5YNwMdnU36wnMrdiK2pkYqtSeXWF2UqAuFvP",
  "key31": "qxR88rydzvsnN4PzAVAfqKyxvWMQJrautABnS6yDG8pYxRXDZeUma7SYSojJxQ4x8TWFsCduR6zkNfjPvnPPFZN",
  "key32": "2mSFb7A22AT37nwzNpTTVDTSHZFe7dUVCiy1kuWzYkzMK2mfreEq1hwpJMh1E3BEhMGfBMnEzJeL2AB7bN9jaS6W",
  "key33": "6Ecy4nQwN1fua89bgqewP55AMCZ3azYkGcXPYZbJTrBRv6DzMzSv75iJstDQn7z5wc9pevjY1k5thidzh6QxNoS",
  "key34": "Ly8kbLQguxREFpxufY2PfhEzFr9pe8BTVTdzdvzrCgRcGCB5XCbtev5hMZpS54Pu5q4Wwb9NS2bjM41WHL1Di8X",
  "key35": "5DZFeouZpmwkcmXkBExHyxR2ZH2sPdF6Zhz4CNgJ4pbS5oYhCFyKbKKHcE8Ec1a3SuA9zrvZyGTQYb1E6ANYJpAJ"
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
