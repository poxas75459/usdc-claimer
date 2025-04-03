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
    "3eJsSoztm6gs2Pp8LmiKdHff6P7cSTyh4qeYCc6DgSNmpF17DVQxmmCDRJmzs6ZXbNbgsA9d9YbdX3FwHVzvo4ju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HUdhVnimxttWSSrNP71GbdeTbXKwhcHLZi3HbgWpwhkwA7NPYXXA6KRDovKYiJiT2qN88n2x6ErvK5Xx8sro6xz",
  "key1": "4q7jaQwQCn6qRFnw53XetSDtFTdcgN2iLxNdhzA3d3YCvF1YvBDMx9Sa8vdrvo34nvkXagerNrXeAmgdcNHvraTr",
  "key2": "5zphdsJShVbFsTWnfXCj9bseBaAKNwLfniFSkAPgQugvwYZ9iGWRiXsdXcWConagf4f8pAyTHSgCe1JqMW4SKvcs",
  "key3": "3KXjTPkMKjVA5pqDPcJUBqjS4LkVw3XtKnYGmX2E2dUDQRHrMSXLm5xEoU3aq9pbxnKdYLdmUuCBdYNY2ErwREU1",
  "key4": "5zWp4jN9CYZwzB7RFMS9WovmdjJvd31edXYnGzznV2ZpGSgLPEbS4SYncgUxNBEMUT6EZ2jhyGYMPnQmgR6Q8D8C",
  "key5": "3mkDmv1tSYZDmfWfhZ4Nzry2KcyzG4TeY6tRa9oupLhtCVtt6ekomryn5DqJhWcU97kFZpfg95a1uKTjPpAGG57Z",
  "key6": "3txq1XZ7zCyEtNwYjpsnC45SasVLTSzrAYVpseBh55xVbb8UGr2vWLsoWop4dzBLb4fDzf6VWY7X5moCinnGrW2G",
  "key7": "3cnETE2MMpzUFZWDE1dg7D59tiTh8BhYgKzJ21EWrDUwMvhV1er2i5QWqU2dvS5wygJ52oPehDraK56drjkM3NT",
  "key8": "2Qn3JfCbwKexWrXYURByZrUpWYL1kRZCPvQ8FkNWPNYiiJML2rhLvjC9PPayjgUoXx7xZrWcsZqT5JwBAzxMwU3t",
  "key9": "4QRWHexVH885z8aXMkZNtDycASVGLStrYF5MGp9kg1pmw9DvMzC9PxZWXcEZyn4b9BRVVzYp7dR2uXz66FCzc8cC",
  "key10": "5KNE4yuymfrtzSfbVipeZkbuLGb6NDESK6ZjZKhJuPhk2WVEBBXDX2t8kcL1e95bZAxKQFs2foMEYmGtCf8NGzJk",
  "key11": "2QuLaXmdWUcwTuAsg55iYiQFYRwdUuEea6PX9q79XpBEVrD5Ba9tgeZb1ovikh4u7giYTP9TwbFXFS9DgE9UM7c9",
  "key12": "2CZB67HRSd3qBe7AcqdWVJPJMWSM7fDCTGkRh1Qf1sTm8F2METNgd8HTcqRK6hQw164tM4ZGhL4U8UpM5cEq3E6W",
  "key13": "4D5zW6zW8hKJDFts1Jiz4SPAV1agf2Fu4cQUjBxiXUukvgjstvWAV9vFZH56QR3K9zs9PBDmcqAsu8xdQSKbTs4A",
  "key14": "2Gi2hhUdaPDfkpN32VnBjfEWiVkXHuWMLwAkqC7XUkF8t3VpTmtcGkyNts5CAatRVBcfSjsZEeEnWCRj19Cd4Gsc",
  "key15": "5zdmXrYLqLLENwJmZdFymamYDWDZMSLtnoABEyLX8p48KUcfrm5eAtJRowtmW11SPpF9FWvnfSviLvLqwVdWT9bH",
  "key16": "odapLwB7GHFUjzTVbgEt23qBRnH9228RqU5U7iqM3VkE9ykJXfPmCcXPoa1xLeRQjKtDYWis99YZEAwzSHtv4UQ",
  "key17": "2TXqGFWLWUtmgB2C62C9tErDs2myPYDX4XeusrZ6xV92vFABukjNYdFw2w2qCFCzVFP3kF8vt7nRAEAxfxoopP28",
  "key18": "PxykCAN6sHpyTY8MdNWvNp9NNHD5CHGHWvDbdUafMJ3eifggyAUbKQrUUFHSfGg76BzNdLVgNMx1Q4a95vVF3zV",
  "key19": "4rSd4AxW2HV5HuURfD3phbJhgZ41knNZ8mbjNK5jMKgRw7jBSWEgms15cScyHzPoPFYB1wXwuxs7eMV4eJDBcgfb",
  "key20": "4yZFuGtmZzyAXsg25PVbHanMhZGhS2TWXBYCAW9mTKcgSFg5JUA2TNSyQc1Fwn3bCcyQJH42zsgjZ1o8Yg2KDC5H",
  "key21": "jUMoi9cGKttuBhz9iRAewMatKbdpExN9Jn6Mhaqrz4yB9P3SwyAM7nTSBybqcUWDcKXZjiBEBbTsaReP3poJmZJ",
  "key22": "4VSbR4zRo1mUecGQTMFqEixNpfnNWbTZgPs6KfVSs2bKWfj22W4SsCWdj565dbKr5mFDWxMwCncS8gViRo6j2CFc",
  "key23": "2TJXVSgycmX7HuKddXuRBfz6TrhHk1PwAkADh2N79yKeh5dNgFe7ZYmo69iM2omkweeXbmGSFGr53fgdiwosVNXu",
  "key24": "58HgzD7NVa6aeMA6SNz66nAPkhKiNdi9KcZ9Dt4hMgeYcsCeVAYegtGYfieutUTDGS54KpqpVxRZBkDEFj51ZnSx",
  "key25": "3DRP36jjH5yBR92mr3bu6YoZc3nVvPfa7cPu5EAxQwECbRDmwpehz8K3JwRJK4KsM7CTcFthohrwCt8zBpyDgBQH",
  "key26": "5BzQXboWS1JzNSbPUivGVkf3vbe9vmPtYgzzLHzHuwP7bTa1P3dhiKvCiY4636GH41dakLnpr5LCf67wMXqvjzWJ",
  "key27": "4M5CbfHhRdBNveDmPxnBcx7xU2zH55qg82DeSxVNKVxwppWLGkLEZMJxitrVrxj6eB75UmNy2TFcLh8StaE9qGD4",
  "key28": "3LMRTD1yeCvTswfH8HGtXBsH4M6V8ayru8XyiFBnNxdEVwQqGLaCbQHuXrQ8rfXGKJYV5rtqMynfrLme97xNwbXm",
  "key29": "Q8PnfAk1M6VArHJfx9rjaYVVBqTToUCehgm1fggsntRyZcPaEYkrKLD4uKmxb4xp68q4SMigZowLPMn8PfU9Hqd",
  "key30": "4sbiiDuhRAMLDpHamFT2fyDK74EEJi4ya2uL8eh251821NFgBhzWRYQbeonvNkAznnmyWJm63oyibWqF3HPPNE3x",
  "key31": "3pM67uBKchGZCHePdhNo62mSGQH1pHVuv8cKAKwnqmgKAawghbaqDyCfg3TZkNYvcuRaAgKSDbj69JRNAAXSPFC9",
  "key32": "3hjH1UQULcbpPvPcUfEZ7pjJ4rTCsao2jurwjcwvHbehvL37Pj3WShMw7pNpmqtL43YNCEvrqkFkLujv96MiUvF1",
  "key33": "BwV5iytNQhaX8iyK68kpx5j6ydPzzx4Ug2KQCSm4j8b9cGXibU2Wcs4CA2iAteAV5NgRCSSAH2JBoZMFLG6EtUp",
  "key34": "3p4GC9fAyqoN3W9VACj7PrXc7xjazYGAtanN3aVD3hHNox3jnH5p1F4WwRT99zj43apmVHFLuFMacn42LCgxmA25",
  "key35": "mfaxfmXRfULzgYqXSoeVXx7MDxJiLSQQtTNh1JM8gQfdBQipjr1TTcLjJEG2CbktNKhQmPKfZ6PA6Bz3Rzo2MZ5",
  "key36": "4oP154fX7sfrL11FgQQGZsdT5h2U6upekijg53hGSvmD6cANUa8WuNq9v1gF5N2sJLBzhkwq4MwCUyVKZZzt89Dv"
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
