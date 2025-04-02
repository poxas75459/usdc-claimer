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
    "3D6GmpAbhP2EMhuVFbRxTF91Z8g9TWi889HUyBArtBVg5uHxzRh8wthBrBhwHyoV77ugh1dKkN7eZuT5NMfKJQuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xSXeUSkFZRKosxb2CPQZoP7ZS7G1MfFWTe4TAJKH1atczydtUEZ7n8zixKmvJaioPbZK4GsxNT8U3QqWd5GfkPL",
  "key1": "55USqMxwmpCACfy5Z8oYUAJiCSMzQsparyCYxtp7V1A6DAwX8Pg5itp6QkRnoGcLS8Xv7VAAeEn1V7u4qyNzGbpf",
  "key2": "zh8pDwjnyPRUKbRYMsQ8FVXNn5eyhGJGRm36FyaXpsdce4y4ryAqymCdLtpPAvDLeyycLRtgrswicid9AFNMeBp",
  "key3": "269DLoguYqJ5WVtAorVUafEtgF6gwhwmhUhmsTn7orhvaq2voSy8ignrSgJHsrBjuesXZkecVrGsQ9DAzhPz3Jiy",
  "key4": "wQEbwGgTpCBNYxKSFeEfUhQKXvzSCyKAfbWCmosekWzJVC48kpDw1wFxzuVewmwbXrN1LF7hpjDdPgTts7KqLBv",
  "key5": "4v8KwCxBw5z2HoshQx4bPJwUYBs81wNd65CagBeCfShfGNWrEmbfn7jo2UfAye4zB685ijDXWPaUB2Kye2hXmodn",
  "key6": "2pZpfucuBfTxQTUvr36yXckVzzBst3eozNVAd2zdMfSLHU1tX44gKBn9sqQCsmRQ83n7pkx7ip6kKEVxdPrHyxVQ",
  "key7": "sdLaRBzDakfZ8GuicirtdkfvHHhJww6hzqv97u8w45wmg4xk9ckWGj7gM5oc7xf3nYy4AaiYZ5zdhZ8oooFVxNy",
  "key8": "3UXsxmKaaNRiwNQV3icALsdDWhN6PDW88fHEnaHeBDPyUvv92affepxLRtMxsNRF3vz9TLYMD4Lr9uchh2m5mJfT",
  "key9": "3Xe1B2nSBiVUXSDKJADV6jjJFg2fFW4hEGg1Vu1pAsJCG9jNfnDXYvbe45paGWhkzSpt8AGtaijQcprAtBco8fG8",
  "key10": "5v8VCfUNRqsxYSHE4zmWYwbg86EngsXVHUpXrrJbcfepZ8jxo79Fk5atjVdRDUvDSrauYtqTpVS9qXcNGd2Ca9n2",
  "key11": "4jMGey5VWe74hHpmYJpUwa2atrKQNdDN3Wd5mVvRmeEi4pmKkrct5z4CyRnnGtYr2SQkAqdfQ82LMmx19A8VbBSr",
  "key12": "5MpaEXpc9Em5rZwfHwknEmWpnWSf1XHxan47xegzaBLJivEGheuYLoS6rEddgJDzfsV7niKUtqHs5aey7tAUXq3m",
  "key13": "5CBRTmCZBwoPEmbW1Cg6XFssppcXSN4yZwgb4DoF6Tp1U4ASJMspjitwScDiQSwMfp8iy57vcrkV9HCGq8MHHmqt",
  "key14": "3BUtbxqL3S2GTja6ybGsUrEUqMEJZxw4ReQ3JkafEjf9KFeBLD5z9PV1vLnHFWnPu6GPvh7yBycTS8w6RqdRSKbG",
  "key15": "4vbZ4ZoAk6Xp2wjjS8nUCRnccrtFusWTMsSKAjL3yEhmwdF3o4VXjMmTkC7zo5A6ozbxJMn1MBopy5mHN3ekER7E",
  "key16": "3KgYZspRE7cGHrj78Ma3LfTd1P4Vj9TNV67VE6umDGgV9SpgRWWpLWSRP2ukcLPAa4TgRg9ym6crphNktgLKdkEe",
  "key17": "rQMjQtHuQRVMn54pXyuzG8xDJiHbCeQEVmqwncYB83XNrNDWRyHBwrXoprrnyi7dieGApxq5KenJYxHQec31ZWo",
  "key18": "2i4KqmNUxW9ZfxhcVb45Z9gYBz64rr6GR2asQM7aJbczsEmuKniN3erHx1Luu5jUFneYLYHMRD3aWefKMpu2aMgs",
  "key19": "43N56oKV3H63XeY2S5hdiPf1M9sUGpCUoN7EZWRC22Gh5kMPC3gmiyR7YcNCaKN4iZnWpCFkJGyos1nAQkN9Lyt7",
  "key20": "43QjEJuPH2syfQsCpd6aVvMhhgHdd8vsJMWi85QvF9g5xiF5FECLHzy8ugGY4mByLL8izssjmdBBmu4f2Q1oWyTK",
  "key21": "2MBLDUvr6aQM1UfXDvQCRuRSkq4PsaAAWowqSRnB5H56ndh9RCd54rMG1pmhzVEfY3rNMkDHjazkRnKGLqnZdCa2",
  "key22": "66F5XoggieEnZVEvAnmsLiSYEfPVTznpm8sVbZCZYwsErRE7pGrhCHLZURioZZPJiiZ5JjdMrYtgBdLEmVxPKYir",
  "key23": "4tZiUTUDUHNY3oYKtcCHS32dxjUgC4oETjco2MZEhey59fujmYxrDHfZnwpmCs5Bh8GnN6qnTkJWascMyVqMwNte",
  "key24": "WpitgxtxKpRyNaCPkXsdpfHzR2Zc9RPGsTpfpogzd3gAgxUtDvF1mo493J3eZjUR8N2U8PkbvjedFGayHf3qBSH",
  "key25": "5o3PmAtSizhY3qzB62bayH4a7mU5P5CsHUci6JuSid4CJ9Wnq5MsYsA7G7w6wPMBc93jKRcCVMC1ZmrMnRhTnsnY",
  "key26": "3xBsfRt2P5D2aw72m1m575T43ishLuF4tNQeREebuVzUUHKyYwVeHoJ2yJwFQh1qyafkFxHd3FHuh3V6pbxH81so",
  "key27": "8N58fptrQQkRkKrYpqS8Ruf1ojafEUX9tKwS1ffTnVb4htxEXLs3D31mbdKzdLYczfTNSm98SJKG1eoYoWrbcDL",
  "key28": "213L2kNTcrUz6V2YeKrPqRDF9zVNuUBizZSQAM1GfAZHj8V3PVg9U9ktgUPN6eDe332iFJuNqjbCbKjgNBnkK2Xh",
  "key29": "59ycNK3sxmnfiWZtDdL2ww3VyPeLFkujTaLwpHc2fVNAuXTyemxFrvrc3xZJLLrHsPapPq7xc28G5ZGcyK15oCcL",
  "key30": "4NeajLaxmR4NhDFGeRpQHPE8uZ7fLLjc8KWo2mpKp9xnVafK29VF1zTHZybVvrSACmUGgJF2z3RFQcw3Eece1AV2",
  "key31": "3JyqA5J5oqPBTtPjABpDL331CZmVUaVg8gpEhN2iYXxzcWoj8RnevBn2wRvES1AUhVmvU3HzTcmfjDtu2cbjhMe2",
  "key32": "2Gta6xGtXpHbmZgPP7njmB2YjE6EcWRHc8qXBEhzLKf3xufw2r2ppLMmZ7EpuzFwq5aimXBPLD7UcwoUJurHffRw",
  "key33": "3UrYeiJouMFgsrXAX8LiNsbPFzb55YUqLtRVxmEAAH3hbetkNciSiazq5PqYUAuxcywXiLmJiqUNktsab3XhawEs",
  "key34": "t9jx9TsgBdevprqt6acFCto8MNAU1heUdoAjvjiuR3xgH5zXbNQhLqR1cf1AKzmKAZ3wULYG7RahiqcDZPena11",
  "key35": "nkuPP64SYaaGzGP7P38uNArpRRPMHEE8qTQ5mvgYXCJKYfcWNELY3qfsFFS7AEf8K7XPLewxD8gZCFse5zb2vQY",
  "key36": "4fZGmcXQsHwMRdZo8ui7Z39B6jsH9URBzBQ4WoRnFyzS79NYuw8STd7vjThSDEQFcygRk4MHf1Rmb7CZqLfNLjzK",
  "key37": "4DEjqzEnihFffqxVcjdkYCNHwLWexiqHoAGzGaMnDGH9aQfPcEmnhKHzy7WTG4h9JFYPrqQwfxxYQKeGFCNTx8LB",
  "key38": "3KpV2SVefwsveXfviemRXrDHSpeizkTdSAJTy2YRB8cBcSspZx9xio91fxob6fSGUgSTV7HCukccXM6pqwdXRPPw",
  "key39": "TLYCKJ7qhdS36wz43DHBTVivnhQY7ByZsorkD8eYTVpKW5nktXANfwyRzk5Meb48wgZw6WjeB2166bKk1iBzSwm",
  "key40": "4PD2Ww4tXky2bG95a2dE6Yt5RLT6hFRC2ERjguVZTcQ3peHjzb4giZxyq3a1MtHAKzvvzZS7Pf6WQm8PrGF7AvAz",
  "key41": "62sZGHKnPjTcJpgZ5qFpMZ9hSVb362YYimNM47Z3juhn63zE5hNG8R9GyvMHYPRbFn9itTUq7wHJA4oibpfjmTdX",
  "key42": "9tSaybEnnraKAy5j5rJNbf9YrSHtHgQKVBVtvibUfRc5rfv54uojJe8q2UU7wCuqSaZ86ywrhsZGp7cLKtX7yVP",
  "key43": "4HPWxV25hQGFTF6ZsZbG4YZ4j2CwzXXSKaewVNsUzGhQy58vNrgkEsTeSkvEzNejxwMMZNpDK7zs1DuHUyQPCmtB",
  "key44": "2D1r13nTq6qyKxVk4CEi7u45hA3ojS8KhZAc4EE3E6Gu2sJRM9kmdgAEAGU7sCpWDDVCDg9AbotMvkqChN3etooT",
  "key45": "3CRoLzHXoe4yzYRJUvacSTH98GBiprDHSMFnsssB4B9c22ndddwXTmH2RPJnJMgkkAM3NzWLLdRN5n1JcBnSoead",
  "key46": "5XtkMYt9xKWcLp6n1wj7UJdu22FoF9tyDFQQd5nRBz68kTSHEP88afNwTPDLrZApFPowZhxaGAMkB4VR3e1Wh6Sg"
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
