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
    "2wCAmZs47s6RXVYnooqFoD2BfB5EHZ6NDmJevSRcr7aLYeuhHpK1Hs9G1Z1adAT7jxK7ctDdFrMiaza7JAnsfJ6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X2ZfWWfPnG2SCaSdZkMscw2SVT6yHGqAMmzoYUaUVNBQuqsxd4PoaroBmH3QciaYGdVJtSkS6LmTeoQLAGpyLQH",
  "key1": "VJTb6P7XdCcBHEy2mvuXt8hQ31v61bP8EGTG25jWRJPDjRMzPmRCtSWHsSHZoNMRu7vhrg2PTYo2S3PKkx2RTnP",
  "key2": "2YMiFLXt9JTmC5CEsaYrWvT8qGKZrrD431Ds2fBZMnvc8aRoU8LtFrMWnJF8vNeG9Fw58Hcma8GmntsTzdjG7rhG",
  "key3": "5kndrZCiUonCnkDrBo7vXWZkDjw4dK13iepWcnvBMSYvMmyXaMkwwudfWbotb37tgTNV4FYqqirZ97rjjWQ7UYWG",
  "key4": "43kbTotrwSLcgGFMJhfPxjyRA1uDZHVp3j5VnusqnjsVuEdfdEvYY1jpdxEYtojDp8eE4wXKg999g4ZGpocrX4MM",
  "key5": "53BQkuZxe2eve2EkLBKX7vX2trcUnd1EcRyTyS92yxdR4Ru2iwu96CEqmWtbNSNJrfvktbhTwGdgnWNwiCADM2mf",
  "key6": "3xQoLTovy3iRdcJDW3QfevpdfBmEYxQL4eVjGWr3ESueaE3MUi2yNmLmevE6soKfEq7gwejTrtTMGZt4Gd5UZdBG",
  "key7": "4prNoPR2vb3MChgkxXarWrfeK6GVA9KdAB652PqmT815fiBE6EtQy6RUfqVm5L5heHCD38kRGsq91i8g5prPUydJ",
  "key8": "3TTSZYhhc5twRzYaS81jHMEsHrQo9mbTHpAzbVuei8DeaFTSNYAYd6RntzDDpUhhaz1XJEYDWg2usPxBwJtfDoU1",
  "key9": "2wtAucRQGgWky3k5D17AJHrL1Y6HMh3mf46dhsAiys4bJD8TwvWK3nTez6mpmNfywo4F9y1bDmVRBCxDuJRp7i9p",
  "key10": "3x2pT5vwYzwXm9BbMs5BVjX7VzMJbq6czhWk6r2vUrKFgDMKs4QcPUmaWTh666nd3Jz5g2D1EjJHMQ8fHc4WUrEV",
  "key11": "5GvgRayb2swT6RHVoHM973ymzsHVRcG1Ea8XDDSjB5CVFrmtQhNEiZXRkHosB4fqJo4A4DibaDGgjMHfSHjXx9YS",
  "key12": "2anqziPgNdZzDZRaqUhSY7x6Y3wvncjeMJdUfNjGzdSwuHGzssU5RDbJopYYJgattgfFrP6LABTwDsiRMKkVAYnp",
  "key13": "oCFZMYVkiHPTbBLwxkFT7QH3uF8j2B9Jnae9v53xRJbNFLJa6TzqLecUU8SW4M4eN3uNbHfP8HP3sVhpi8xVkrW",
  "key14": "47gpgYYJfmYUvsYCfYWgJBA5ScCCQTwQcQmsKP2sMBB8i5Bz63wb6bvMp2KQe8CtZXEvaAqWjhpJZtLwN9rWwysr",
  "key15": "5V7hKY35wzw7r7YyTCHE6ibf9LmKCmYs6eoEgYbN33qqSDD5SFQy4CvrMJrxwvncPJTstub53S92Fwh2WprcaTu3",
  "key16": "521536mfABMUtYodwRdqtTLW3UEhVDXLdp3ftgihFeH2sqFge91suv5BsPHwjqQsG3BfWPJykEEpon2v8hkcBPmH",
  "key17": "44EaNuqURGCpBmYLdJYVe2jRXv7XhTEgiVm4RF8Vb7ZahFSPGMwR33ov5NXx777caoSLFzmV7dyiaTioCABiy2ch",
  "key18": "4HTzTuYWjoiHye3W7eV4dNkyLtYq2N7qXCjshjsXhuRE3n4rPYUrhkkyHjX4tb8o56dBvgiezKWqXdVGTP4psncN",
  "key19": "55PCjKBupugVWW6rVMrM2TvX5EorGf9jxpsFt8uKz8s8cSotErjwG5qR7eEszv9DEVKL5XxZ41NcVY7YCR6Rg63i",
  "key20": "5KVJQwQKdZLLVqSAzvnRGro2BGdALr7PWkReyZd9zBpjkF3dA7sxkp6HLXLX41bk7RrEMPJYkBsgPEQGtXMZ88Hb",
  "key21": "4ka5keyGxphZRyPE6LKVe92XYrA2XujKepUwxfLUh2AssHVF6BbYnPxkcPqUgpLV3qHjVMitUNDNmWYGYLQRqh4X",
  "key22": "3vZgBnhzGDJQFc6gJGUMbtmEbaLmUJ7Ln12yXAaAZ6nxiKe21oSjQWJaqpCw8mEVqzsS8jS8eHFbYr37w7FxaEqr",
  "key23": "3KcVNoEiwst2GnyZd1FajoyxHKFhin7X9xmfLaz5xrj4e5yp2HMvyrkPEEbDt29Ei6K9ByevSKTvfJc2zdHoaT88",
  "key24": "2SSNyjq6b6kU3rJJgg3ZjF1L5XRSkQAr5rFGJfDYwxXbGTvHjLxhcBMG8TH1JjzL4UhiHnaUE8Q9JKEoEwaYiF6V",
  "key25": "5c2rvumx5vKqjtqGQDJjVstf4GQ6jx6JScWtJaFco6DxpkVJC7adtqPqu7wwRFg26CgSQr9hLAPUSpWX9UiQTK7M",
  "key26": "531bt2xaXJEqCRLMLW5MndvUJiu596UtYBhXDRC1Wsbs9XwbQCVT8mU3HW6veosGXN3wf1cewvgdLGskHbWLaVuh",
  "key27": "eSAQYSSwyE4LeDn1RemufPto9dNWhWHDxSsxzAxBLX2VVHrzReDqWabbGhYKavoqgMyF5Qx4pemEvShTKVXQ6ks",
  "key28": "4q4C6QFxbhgd3KmyH7yfAazb7jVKBgQ1eADc26F88XvUAAiRS38w4VLoKoX8bttzN3w23M5MQWGuLeV2tb91Zup3",
  "key29": "7frQpGCmYUzBCUMM5XoZcX7j7fu8URqeZDJDEiyE194bnHR4b9fc1hbWVPmJxuQX9BiVhEd2d6U6jXrHCXZLqtE",
  "key30": "vaBT1srN7dNs1H7Qc57xhCp8RWtiRbDKQiYNK6ifU9TfexyJbdx8Q6XWDZ8w34i9vb9BQMwHQrtTScSoyU6JoDa",
  "key31": "2ERq3BH1ZFhZE8tPPfRgAuaVqT7ikomMCSNKUAgMW9sz9jLjLyUimPZTUnrJodbVZiVCQpNn2LyJxrLVFgUNs5Wf",
  "key32": "VB5dUX8eLrMR19CP7ZLoudDT8injyaFwbMxyWzTbgw4RniSCNsPefxnSY2Eocb9MDRRYMRfy5U45fN1hC46nP8F"
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
