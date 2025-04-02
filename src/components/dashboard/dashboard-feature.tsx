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
    "5p3szJQi7oJZNDDXAieJ3kN58sD7u6MwrqsPMfhuF7SHNyfNaqpYAMkxmmLRpiSGPB7Qau5xYz5PoRiRwWwDpCCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NBZVYwpQzM7zh1pZT2r2GZzoezScrCszME25LYjp9t54ZVghczRizpLuPTtw3KWqC5JiPZsRV4c3m69b17zWw3C",
  "key1": "41Mjwjdg73cv7aHTEjzuJmcQpyseT78QCJDwkFxRZgpAReCMferQEh24aFsRwVChZyafghYz39bS2GEFeJJYXNhu",
  "key2": "4Y2Ms32n25f4HdQvJfkrY4wQxzAudWhQd5RXRi6NLA7b66ohmmBfRqPH8JAZ4Agx9vuPeHxRTEA16A6pdviqMZBx",
  "key3": "3rLviEiPFA9tEagyXpNmAHxwcHpCSWNB9kyqgvvXHgK4rqk2zsdjaqDPDsvbFDc2QuoN8B8KrntVMA6Nn2poQJJR",
  "key4": "3QKQrBrXXGzSVfwvX834oKVv7gUz3otujHBcFt1dhowPRDTxT1BVEogpVkKbTdi2QwBAQWmRiSuECh51Fs8e1Tax",
  "key5": "5XGk3uMDBtTmb9auAQXaKcp7hFpqrWKJ1PQ9Uxws6WTAB6aiUbjAF59ounWsm6biA3dw1U3dBcBQbGJHHxFRz3yL",
  "key6": "4swLYoiHQA52GVWhG4eMGkKjcmdGvbxy6GtXTAiAmAiohnQNKgQG2Rw3psVhLubxKFtwrx2vqNCNCfPC77K8tDmf",
  "key7": "6AgdAafTks9eA8QZsuMgezRrnc7Zax9iZgtMNzacVYHVHxCLSk1zTQBXuQCZVPTTG7npnjqRK5PtuPYDuzqUjif",
  "key8": "XLfhE14hUEgFuxU2kWyDbc2Fo6DrQdhRsi5FV1k4fcdZW8i9o3ZV9Bgz3S4GYxXxT736u7bAkxVbSApPdrxHJtJ",
  "key9": "413oy7JhboDtuoTQVqnUNWJZRHGyzfu2WXub9Uvda5ToDmn32vnvNgVidTdmSp51DrvyKWVB9HqWnd6Ky1QAfzxm",
  "key10": "5X7Afsto2wjFEubrciEnfyzhYDAsPaFmhZ7mearxD9mkFmoPioJ2D4XzBA7MWH1zkrVc1n2CEoVvQQFX1iWKV9Mj",
  "key11": "2w9x82t7AqpPyMxPL48UJi6NZVcST4REym8s4yh1rfubRg7wevrWvRQRrKpQnd5MYhQoCwTTc5Mdw8nDcZmtTvrq",
  "key12": "4vM37FB6SeTFwWct2SXxcxbzQHnjq2DunGJChGQZZEQ7jXKUAbBxwKJ8cATXvz1NYPQWV3z7tqj4tCCNKCcPFNm5",
  "key13": "3NojFq3XfScGJTbHKDuLrjkq1qdYkhGt1zq2QUq2VwX9Sme8MfGotpMEKL2fDnWXhsGGEmhyrS94zenizSRNr2T3",
  "key14": "35DYtPX3JeibVWZxk6AYBzT4srqeQXBWhTUYrowksubaYehEgC3oyFqqcSM5QgFFLVPAfXmmHoxxqwEkWBPkzAGL",
  "key15": "5oX3tozJzyQdXXTqLpc3JqG2adsP9V92giJq6iFyNAz71u7drDESj9mWJ4toTANUZDJECbjmDo83yVpzdobf4UWP",
  "key16": "bzMsdCJCUafstRrH66QoSdrNhM3dQighY1CVwf3Q2tngPsBK4kghCEG2uaeghmxZroMJmZssFrfVYhQMTEz67x4",
  "key17": "2Cjrtq2R78nsjVeBk3a3Ms3A1atreNcbznt8GTyJsirKhGXp8twcJPq6uPeXZt4hwuDZ7VeCt6aVxVuSUVVQmwCP",
  "key18": "5qu1FX6BNWM2bREfRmnJrwF23faW1NveNbfbtuD3H5VDQGEyJPzby8o5srjKoMC2ZDC1hHMzqX4kAc6xFEG44gyf",
  "key19": "5U8x6Q8rqymc3eBTfuKAqR9fQeDNiAqB2q9EDJUmQzSw9iEUgcK6KZPVmafHViR2c8ejRio2TdsScd4FQ5GfX7Jb",
  "key20": "3ALJWWdRFPAiyeJr31Rwnh2oQDsLi2mWMVd7vgrf3Ls4WKtBBZHW2RZi5TMWGoUkNW4p6PSGL1hy4kR9fveBkvPB",
  "key21": "2ZsUExAEChMjE7fHhmWHzSBy3uDDYUPN2KYBbdaCZdgA7P4bTqFM4K9zyVy1NEEjRgKdA7J9EZ6pgbrjofojq8kA",
  "key22": "42hxa67rAaewMUhhyVsvM5f1Co4TwVTjGqvgAEUD2nx9UYustkFWceM13N64iwaZLxorwZVi399G8VBNP8T381cS",
  "key23": "qUYJYZiA1ZP2LLgBCLbr372YS79rWhMHPVE1qfzevV4pz77BsS1LC6rfnhWES9c31CtX6iCwzaRLJJPqmFkmLCp",
  "key24": "tNQDrdGBXtWGvb2hYv4QiK6tfxMdSookHAXZVzXVKsZiq23gi2bjiTYdFE9HW7ZR8AWPx2M42qpqY7W4LdUsbeD",
  "key25": "2zxJn2x8YjcYfMdiJSy6s2PjSrjD142mom4RKLFBPQYze1iQrMymJXg3cc16mGy97uYWbFhBxAbHfSgyU82KfVhQ",
  "key26": "7R2p2qEJWZyXzxhRTptkMAQ5GKAhFV7mGvjjdrbzJXmYpPfb4iLUJbPS8ReMoQ3SQcrHAJGJ9zDCEjZ7HVcsgW2"
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
