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
    "cqNAEChaJU2s2eCojtvhaYoXModhDqKCYQP7fksnTE5hkiiz1gGmCRGGpL6TzSr4F5idKSsPMMrkfNv7NgCcj75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SDNbvPmsTsqWgLaWmjG5w1bj8U8jGYewonmbGjJGL94VXkp3tK6mTcvQLySE1vnrZZ5CnFMckxKhr315DoYhCqM",
  "key1": "2fzFz96AdqDvxsZqWc4xLhTmZuar9pNKZRDdFqvEbrDDwtXDEu4RyDfu32kJVdwqguSNZsFUgo5H5phdP4v7Fu95",
  "key2": "4iEimQvkKwPqSSLgrSCv7sHtRo3TMXgjAn3wy9NvVzhRLPd9GLTptJNbmgqbuK51PirVNUKru5qrAL1DQXX1VAEU",
  "key3": "65iNcKdwkR7DnaF1cGYBX4MSPZM7cijxJeWmAByanifSVc32zPxNCVxaErCFqt5t4Gwbm4gENVx4faE1UvQJWQgt",
  "key4": "3GTjoqU3eCj4i6F6UPxQN8yn3Qv5NjskTZR3PKKHy2JneYzymWPiJm4e458AEi3ykJqobTweZn45ScKXQJzk14TW",
  "key5": "JS7nzP8kVx1goVNsBXh6YqukTdgw7XpTUvycx52p3t9GJmQJ35GamCbafWYKGt8iD6TrMcyFAwpzoWRFRAC1NbU",
  "key6": "31yn1VQaV3537gExrBfLMwW7jvNTHjuk5BmkP27iQvEAGZodUYRjJyiSty2sUFFB1ydigNJYdGnnfmb8Pu237S3H",
  "key7": "61Udi7GGzBDXj5KaRxxqD6QcGomx9yaRYYYETUJq4ptBnts4GiG53wV7YefmY3iZr26FxxDo5kXGsz2JPdpA9HWA",
  "key8": "sRY7kq4AXYP5BLVMyzBS3guiL88jYRU7JuNtjfR71QVuqgphvrM1kTPFvq1HFzCB2UVUyAQEPQfY5r6rYohb63u",
  "key9": "eS1mPygJvBgXodhUQcprNS7D2DrMh2fHJgsQigzy9otu2UCDJAXnqoMUVJNgH8zYmoHq3z88fUoTfRnmEMJAHTC",
  "key10": "3cUcTmQepFiT5jiSqp1CTD6uvFt947bECtSwFeAiATB2JnhccqhR46Qt5CviyXiwwfJoDyCCCZLExHAUg7RuxQ7a",
  "key11": "2JSB6wvGmcMd9Z3a1rwjs4gofEw25ZcRgG6jz3xowJs4mqT3xtRDTAYLZHRZR4eMjTZcgFXi7AXDBzNBriHNadk9",
  "key12": "4atUdkuq49aZ3qG6PdqpYhGPTdxW4i7hUzyR6EQbhkqKL5uVYsNBZawmCeAkB6r3GAXYnBdbuYKJCVot33Lmc6BD",
  "key13": "4x8idaLLb8edC4ur333hWRbhiAcCHrVVrHUChHnC5sk1bmxuJAqfLatQv1d9TM2Aqm5ibx8uReLjNUiDcKn4JZCN",
  "key14": "34V5sow7P6J8FNsVFcYJ1xZn2UW8RDQuFUEp7fEHR42xy9Mte2sqr9mh4QMGKJPP2FdxCP9KD2Tqnn3kvaK5UeV5",
  "key15": "5sjbo26dXYKXApMfAU6Z4dW7aFkNPdgwJaHEpPn2c2LAHeAxPCDzhnGKA3LV45ofq3yFV85x6mvw8uPPv6WaQPAm",
  "key16": "45N8sbCNSikcdPY2fU7VU8EfmtMut3i1jpiwBSaiv3963esusuBWZjYoN2fkdBWR6tmVUZ6uzEnsAS1SZKdqNzZh",
  "key17": "2GfAkKztfrmFkDNrveP8cV4harjaiz1dC3icERRy8LTXGp5gsGKXtSoa6NXpi1NkktqzWaDjdq5HAfZz9E46mkmL",
  "key18": "4w2vXGCrLRRc1JmU6zWWQbSk6XzSVCqkUVHVhNg2oKafRh9DMCEDrcXHGNbVPDVNCVo28jRdek1aUVDjdxp757WB",
  "key19": "553h9fYxaAps3Vc1ErBeUxEhpc4PBYF8CYoGiwvLzDwuTza7M8RTrP3FHnTQTuXX1YbCFSrM37c6X7U3V7Ncwzsq",
  "key20": "3qPEWu3uj1G4wQb2Zf2dAz873zikdCAaiLphZ23mtYWjDCzENic5Bq2tyNvHdDKfBysEs9paSpf6ZxPPZx66Ye8V",
  "key21": "29NzV6fC4rsfVuEkQmbFdkAdn625kSHsyvx62pZ3kre6cBX1nmnKA5Gjbqg5QYRppXdeBwvYRYqELhFGABD5pkDE",
  "key22": "4vbVD8Kbzbg7UzoMw8iwcxkBsM9Afr53FWiAU5ig2iKG51vQeqnZfjYauRChQa1GGw5XtGFtX9E4hBkxmgf7jvEc",
  "key23": "rPxLhwbJ5cZqybV4WsGmm9BiQetBuqc1FXBjAqTaCrWsMAyxA2mqoVcveHB7YfnVXySpVvv7nSEoP7PXmw5twHX",
  "key24": "2Z2dtLJpWauqu51bcRX7mWzJtpsansygGnRhFiw1PAcndx8BKik1n943sf2BhQxFfv5j129VXeeEEkeQuFQWtz5z",
  "key25": "J1VEKj8PYMcCCPhuDkLSZn2yBVBNQHwT3S6QHGfrrA6fkBbS3mWtw8k1Rpp87uNfD5UhnL8SmHn3jvm5oSLJpvo",
  "key26": "5xr5v3hzkB7FP2K66xQShxX3WYN2EP6XqqoKX3B21pf1j5oZiHgmbcdSdBAuiwHu1eLg3mjAfSNNsmJ5DtedQ9GY",
  "key27": "5mMQzmMaEmjj1VfBx63iKmiVDZcYJQDQ9vVspbJGLDZr5f9CDzU6FNRdQGa3kFR2JtG2ozU2U5zK1KhNU6TRDPyT",
  "key28": "5tBe3N13g6DLsTE3ixTrZKmPDGHcMXw4seEHo5UyeEiDTxFnDJmuWwXVboDrQzRFKbgK5ZS9Gzxep3w1QvdokNdR",
  "key29": "Nyq9PefRf4s9FcuVAEp5JVb1wRFMdmpmbi2TbjRwXqfqR1fE8PK5FkJnzDVb5qyW7QxxHb2QVdx45KJKir5whAx",
  "key30": "3PeAP9if2jLTM4mgnEmCvLS4Brh57xNzd3AEMu6Yxt1ciKUXbErVDa3HmF93f59QJF14Ht3UatFtdNh27Mnjc4yD",
  "key31": "5KU9b9DDfjsRGDW2rSYUxqPJKhXxfVWKpMyeVRpJyi3vw9Edc6txH3ryg9HYYTXzm9cwRSJBWi1P9wwQEmnzsyE4",
  "key32": "5Dm7myWRGDucDyNkgYGkQGXJgAmFdtJA4s4kmkFxSv8zEPreR5q6h3EGuSRU7Fr6X17iw5N6wDrDXin7USkqFaNs",
  "key33": "5qXBWrW4RcdnrxKwGcoR3Jh19L2NhGGqBYU9apxHs7MFGzySHkdmwAX4vHvUJevimDZCojqtcUQErYtjvefkWRdX",
  "key34": "srYS9mUDiCcfDysH8Jzii9CCtYK6ctgXgSG3vnkor2uMZJqHbHWczcMwYhBQoWQcVrTeyCs5Q1XnBg4sa2vHdDr",
  "key35": "43svZHt5kNnaKbFcPD86CYct5fkv9MxDreiPX5dUaHKALKa6simXMjVwrXVnpqspCXYstFDtM3VbPgNJH38A6jFu",
  "key36": "2kRFrvh5EoEc1AspRhgSmEbhjW2RRDGKP8vz6tVLjxq9PaH6riGvCkjgcegWeSZ6obEuh5BRFa4rKbeMGZyhYPNE",
  "key37": "LnKpq97bbKpBnPLAtvnpRNXDHh1vt31sJU4BCtFf3Sty2N7KfR8AqqZHXU1A856wvbaCqd2hDAmVFcY1XE2bs2P",
  "key38": "2vqexuiA7ficXhfapjD7LCSsmKaAspeUcYpLi9FnqEA2caD675kHr7Xtw8sSHhhtM9rYP6og8m7WpeyH565ME6dR",
  "key39": "559uQi1PQjRey3aKbrZGKPGJbYVbynVDekLmoMbwqX3hzDz7d7BEcAxSUedVGJEeLzH1t9byScsFM4L2XZfxbh2s",
  "key40": "2aXNQXMbH6mEU1praP1cHrTMNZixVUecU5ipXhdVAf4TMTtQNiovNnnAgmiJCLwYjmn1UnbkDNTvQ5KMKvtypcLW",
  "key41": "3YMyzsrEc2Pkj93ksLgW1SuSEZpDBg59xSKiH7nKknwj2C5Qa3jtu4bbStKXywcPVc4XxRjC4ksDei2Xts2xTQyV"
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
