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
    "bK5EueaXN1UVEDqTzVszBPJQk371swnuHDqUYCGuwQw78Fcqw1EvtqvgwWyWT5uDySnJs2JKmGDgsSFp2Vi9283"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BmSE1tXvdHUNHsGXpM2C5hzZ3jX9TgEsqZHtnt7mvWdX3xJAzyzPixuUEYE26aod1bTvAaN8f56vqdcMTSCqCfu",
  "key1": "35vyMuGDH3pqHJyoScwNsYownF2UPDyBtk7TYHb5348fdhnLfcivCLiUxdAD4GxjA7qa5uMXUyqrub8KPr2J7ct4",
  "key2": "2MmGwghpx4woezpSCscQTLKHAGR4wcF57LwD3XUnaZ7LNE2m45EY7qiWvLPmGnMNgnC3KzdQUrPXJUB2HkqB1Ljd",
  "key3": "61dEd4UXQr5A3cRY2jyGgXcBiH4EMyHVBTDqPC5tsYGovax9XChAeTLFL49WdsXqzxruymeAAJdHXYbDeCnbeVME",
  "key4": "5ukQHzgahuoVECCWSLEgaH9jep2TBbDk1zKqEJopm8dAK1hv1czWduZhDALDn8eUaASngva5Px7bMDQvTpzmXvNe",
  "key5": "2cjUYTRquARPbyLBFAhSP7ayxQNFoeKVwtxF55uCj6M8yrViXg8d2xQ6BPRhdNP16jWfNpQovsGbU3yungMyCdQb",
  "key6": "3Y5rveWcPGUz4R51iiEt3RBuqKzr2yjh5eFXENwj77i3BcveeCnHVJfsmpToGE8AYCj9jL1UBVU1sMMbMJyWPQf7",
  "key7": "49Tjy3h1bwDhYtkkeLdpbkZaB2Pyp9Q32ZncwLJQc3UK663V7BJVxPRuZWMXmtZrLhEcRNGRV6tV9nw81SzhEP9R",
  "key8": "ySrBRN5KUQt28Go7LcJvU9fixz8iGqR43kZDwbUYNhaKwcDW9VKdNWQoCUw6u2m18JdbBXnrC1YmvuZQRZNkah3",
  "key9": "3fk53nyJndYodf6Xoq7ECL6XUGsgoayY13GFTRaxRDtyJYUb9MLdjZi25kHN3XkoEXDyazU4Fi3grcTisfnh5TS8",
  "key10": "2yP4d6eGuGdvZgdfTXi1ZJoFSym6UwwBLYuJL33zNhPwxsznwU9JbuBsTVcB4tyiFBHPnoELgL6Lr5Ds2c94XaE",
  "key11": "5orNiKZ5XkERsan9ViauGUCpRjRxeu6zxC5Qg2r9hv7QpGjRVU3sK71XAbLHPMhVCUDHeaNRRKvkmMouB5jDPNho",
  "key12": "2YzK9v5Eoi1VH5cVE7ugCgbrgVoQaNd66UkWF7DR1dWQD1ipGufz97nzedba5S4eXQyoP6A5DKZtddJKWn4hPE72",
  "key13": "3zxj6wgurwhFBjwDbXx94NFYSRCtKXBVHTqTMaWq8a6gJCuzZYckFQPUwtJQw6BvofFxx77BSPMCPpxGGtFNEw9B",
  "key14": "2JWHh1VSZ6SVpA715EHp9Dhsa77BUv9vbY18UVW6HpoQwHLt5Zj7B5qd3E68hAJctwtvjjdsasSu24Pj1Za5bxCz",
  "key15": "5gFWnSL6NbBr4EXFvayMYsU17hVR7LRouZeDZBzbpKVuYb9BKfSrff8Ebv3K4Ewut3ExGgjm8QyP6nXQyeJE1gNM",
  "key16": "3RZTupfANnHt7DcPaQGsrakJuQgNg5zpzRk8FpPQm5RizfsYkwb4rMFuiCkGxcX8v9ZHv3QZySPDqUdnKzGHjaXn",
  "key17": "5J584VBD7uxwKNmM5FFiBcgXfRqh3kd5kKzCVudncPK78obrnfdnaoLkWaiZG2YdLKfsEj1E1rSpDxAJ1QkKiFnK",
  "key18": "cg7vCoyz8tWtXsEm8TMB8qaWznrv25fK1PYMzy6Rvx1kgmTM97k2v69mkwdkLj2vz6Rn8TWTyJTHrqHft2Yr8Da",
  "key19": "2i86TP4w7wEjmTTxa5ymwanmCUnjCYkLJNjTgGLf43rsYfxoC5uEiSF2QwbsMVNYWDtzY5eusKXAhHXAtdS67tuN",
  "key20": "2jdRZtToL5DAjVugKU57VeqYB4DuTouGAmK27bftwPkmmEPsj1xkMV5r3TaPZgT6Q9ty3HL2EmvanJ7dvu7aTebB",
  "key21": "4vHhHAy2FDZtXyavR5QHjUKa9CaHFDLiBic5ko3qiLMu7AvSUunRgQPAttHieCqKp2AzKjBwtzwJoiZffPdUfVLW",
  "key22": "5GV5p7ypFcAEMeTCrxokkn98TAGuJjQK2AYA8mZd1H7JDJ8CkK5GuUgM9EeaxVjqE6vH4RrU94nU4pvmq9SS9jDy",
  "key23": "54WSwuwvK3uYmk5pLStBfk2vtgyYtKLAf6mQRMuGfuDaDdPZjXKFyUuzSmbU5wHXJVQAEytnBdQMDkLyQCidHce3",
  "key24": "5iLrmRjjKYPVSgKf9C9wKqfDrhB4YhE6Ufky267e9AMm364tuNWixu1DLF9CXvuKMk3Do4ouT1AsRgvUR9rDFZJo",
  "key25": "5eFpp1aXmA5sSRPeKinoEMTusmP4AsXut24xLPCBAwQ2TJvyh9KhCfan7dTofxu7SjxrehxVJ1jonuN8LwWPCwx3",
  "key26": "5zXtp5ABueVs8E7yfEQq4oasjsps9417gZRSfPP6VstwhKYLWFU159dB12yLbBLmpyGVQV3bGzYiomvHGkW9RnEB",
  "key27": "24abTAjqDEnrUauUQwhjeqN9UrL1KWXfZbqQT692ixnb5ucbudY34Hwbqe7cjdMVcbk3X9mzcTXjuCQRRS9km4YC",
  "key28": "3CzudfF97f9cduzar3A8hZH6HcbVotDw6ddN14okq1kSWDDxWq4WagyzvXATBW8qHNUD74U9jXnEJVsGQKka8iAW",
  "key29": "4vSZyaDtRhzsALRiaFzuErQfjNfidgw2XKRj2RXHq7D74yL3WczG3TR9EY9zFh7mCbJs5Do3gcxCNQfeCbT67yGi",
  "key30": "vdxe7DwswyuZnbcF34vczh4ecya7fqwFQ1nai2itPXiVZGmDsmZ1vCrQcvfmJGcA8JsyUocTuKG8ACVvh8kV739",
  "key31": "2fEUgTAE5q7itHHXBT3gxriJP65CiLFCMf8kir1Vc3LSqgA5tdUkm2oessPCkRFyFqWc8gW6VuqXWjMowrbbvje5"
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
