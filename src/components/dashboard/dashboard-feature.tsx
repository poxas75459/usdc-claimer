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
    "erksgieNbu3tHzcpxkveDAFNF7RcNzHrwNNXyQpMnZUiKhQnysmptYhuTq9vSWwQsbKpqWE2nz5Qpi2h3RnddFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wV5LVjPDYb4aREuCgc3SyUWuCeRwtnbhAUP4XSJw7RFRh4zzj7dv7FVZeHxKPP9CUWs1e2KsZ8WbYNR9AAZWxev",
  "key1": "3G5t19rnqFwLF3q2t8p7G7dKUEAn8ssYtqkkqiEERCGfKmPpgvHMv1YkvSZ2LzpTgQYhvBCYdrvWxSYCnQv5yvHh",
  "key2": "4k9jpiQzihw6ZwA7wNP3J7Ba4oMzWuFsCcTc2gsssFZk4QCr1YEKG3SxtgvWp4FZ9QxjhdnfzHoQHxQFs9VhZZ6Q",
  "key3": "489ACW5z6bBcYnhozaRNFQ1VxA8Ur4PwjLBKj8wbY5GbuK4yEPXUKG2t57hBNYTZH2zqgn27VrSdDCgYKGwwASUw",
  "key4": "58Dn3JMRYFGu2oNx6MuQXd4fNXqEUf4Rem2dEetUuvN9o4vLhAThUJ8TevvNu2y8po13Ejdye5GLWJhPSUvHGWxg",
  "key5": "28ZFETVyyb4F7Ms9fbHK4SVHKKnPciSvuxttxsBeE7jmsKmi5SkT1hD6gj9HsnVrwzicDoSYdPYAdDUK7moJxMK8",
  "key6": "2CMsMxeJVys6LqkEmTWYb8LLzuPahPsCAWbQ6wobdutJtaBoQevKRGwtRsEsNALBCxpRaPZJTweWnqXZ72AZbFkb",
  "key7": "4rzrktPwQLSgWfarEG4rg7GMYLgyQZStFbhkZ9Wcrv4g3YvKhcF8m8jyTSSb31yUV7uKxfq6fABXnMXruJ6Rhsay",
  "key8": "2uRWe33FpokGc7fygqZPCGaiQoZezaYECs2ge4nMn7AA1Dv2FKwsxUV72aCoz7aGCMXcCVxeUPXSiL2Ws96KGiE2",
  "key9": "26PE7QrQfRPdWWKUX7LFPeCYQmXvwFSwJYZMHrX2Gx52uhrpc3Zx6pcn2HwuxMFS4nFE6YPy1mrRLN5CXs26iYJ3",
  "key10": "3bYwY2Lz1m19c63bPWFbYXmmXwNUvUzStskef6DrQtvsY7xmpCqr2Vjtq5fCMjiLEt8poiaGQVUgGPX2u4w6NXVk",
  "key11": "2A8n8mr6Tw6VhkPQ1gCLWvVS4x8VdRzAEG8N3PfHakXUULmcwfEfhyEXaJa9DqP2r9N7tKKmbg6DrMeiNvCuqT5c",
  "key12": "Rg9UEVgbaqAoBiiri92G56MMWTj8ueveeuCHbtv2R3RVpiyVs4k7TTra3LQpYy1ukoDe2ED7bWZMyc16kAhBawU",
  "key13": "2NraWTuMtqw9q6i1CALE1M8wcQYNYGg9svhA4zAhWyocRFMgdSnhaLyFQiVFfaLfZPPBmniReXF4wf6r9vRgg4Kp",
  "key14": "5KBTeKKGrJ4C1GbhZnvsYPkVKN597tLmsbrTpQTrHKtZBZ1Ta3GmaaWrLRmV51QXpHm5urMvHRpfvGYHXWvtp3dF",
  "key15": "3oBRSDKZPeiEgRUrticit1SpDodGeYabXFcMXULRt2vrGHLPFRqgcNiGxbfVVnqoFAwn7mBdtEHovHP6WzRogeit",
  "key16": "4yeds36xhfgxGRTW5kCxdUKePRVdLSrDkHPEXHyW8EZHNGvHvMZZRxbyhWz2QK2SKvyGphHZ7jxY97azaQ9wNkgt",
  "key17": "2g73TanPTaYbBPhTw6cvCafQVSXjBT3qgehU7G1cjRqZ8L6wAcQs3xLfmytnyze1FfUSobixbUBh6fvT6JJus6Ps",
  "key18": "RhWT6XxChgy7ynbRFKHamYgMK4Kr2S5PmG1ZP8yMRCBF3BVrPdTs4qrneHMCDV9itFmtPkZrY6PMTE22aLrweHf",
  "key19": "5znXfUquK65Pqnh7DNFfN8naGPggyYvT5u4m6PyLhfxakZGqLf9vmojaCKYXT4bue6CkETi1srbzkvFTsLJ4Kyws",
  "key20": "4yj9b5eLeUdWPvGLhtJVV1Kv9FvebDJe8mnv84EkLdhddJM5zyfdNCqSsmdz9ke3pereXUJnzxxmdKgtEK2R5wJV",
  "key21": "4c89uGbeoQKZpDcw2SqZHCoCXKzJ4wiEMc8nEq7CEpuBTAiyGxUtY821rgo5H5Nkvp8vT9VaB4bsKtqY71QQvw4D",
  "key22": "3THepck8cYmeoEUW8SU7mVuApEzqRiin4EsG7QFMwmG8TKxnN2dvPbcBeH5GtPNXi6Yoh3fSGEhCaTBiXzDETNKu",
  "key23": "8EZdVRaey2qZty5kjw1pHb1tfCRLVjHnQb57jt79YkMmS7Hezu18Hu83bF7NmxFayxVL3PMYdUNzkfdxAGauE72",
  "key24": "377iFzxfRwyTcmzSKhAhBRY49T9aqZhnbpmzJHtQHAhUP9S4XrmbaH4baYqVyySYofmtpgJ4JNVbgrkrhcykzekC",
  "key25": "4rP68Cr2dpPNXusgGdC6o9cs1uxa19QCRAvJQYURJKRaj5tGaoGCfvK5DnTs1xSD5PHDvKebMtNbEqpTz43e1Nzf",
  "key26": "3EwXMkEfikqqZLVaxGj8p4J1LqNDyWEx9PTLaq1FmuC9s2PgWEzoaufXhXwjX2JafNwv3ffmYqUrEkLN4ErNF2wm",
  "key27": "4wFueooF2m4iy4YJXsMHbHNr9jMnmfQTkGB6QAUf34tHW2xJnYQvp5hXB9Q8Eof3sMkMZJ9nBjJHgh4YMw3q7ysq",
  "key28": "35haaWVfHf9mnpkwZ8Fpqisb5JCG3mEpC3rTjx1cbktCVzHJQvLNa5wX3J9oGv11i3Apq87MpBMAJ3zb43ReTDJM",
  "key29": "FhzmpJevgSkRtYuqpo5jXPwpf9f7sfbHv1nY842G2pBPBfQkxvQsDZBzR6DEAwNsJ3zETnYUombpm63mQPozQsK",
  "key30": "542JD21ufxhRhjUbviQnPYuutyaeeste7qFuY9mCRU2ZPcGDTy57XRjio77TqtACXcKqTpqWA5SKyW35DycGewBG",
  "key31": "5jMgTw54zXPPxx7ZUTcTJtau9yT88yENMeB2253pyazJ2LoX3v4LWYbRXVGqRvTJSRrSB5EkvkbaCdSPThuoGFqm",
  "key32": "2dZDUMAV9ig4bQ8XUQEhfMHtw25QsQdVVfdR8ApKyGooW3woTXkGNoBykjm2A7MSMHkHjMxgngQzsr4qnSuNdxj7",
  "key33": "5VTEkWe5FPyYgWsiLrMFXFfeVXhd989m424jr1tw5kivMVoxqC27b6SNrnLbVXZ9oQuWvTKQwAVXrdPPZmBLgME8",
  "key34": "2vzQ3wVxPhSzFwXQ4mqQpBtnNFt9L4EBw5jjGncmLXFmmDtDs3nw7d25SZXLMWEft7wgTxpnXBjio5LrCjaaqWpi",
  "key35": "87y2pCweMd8kRnKwJxuQR5JTd1S9dupXVVmMXgD58bPAABeYubkWc6wZzdGvgxXZpQtm8Dj9RBukuiWYU1sqQRc"
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
