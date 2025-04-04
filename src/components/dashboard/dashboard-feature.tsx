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
    "3iqrUJzbwxAP1UJKUiyDR52BhqwW7ap7teqqADkni6822UGLPfAEFJ5aF4wKFTrcBiDw7RP43QMQWuxxYew1JsfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nnbVFDnpiPG41BPrN5peKjSZZUBLwXtL2R6dL2oTcqS4Z9AUU3xTese32oFLX2LGFLL9teT1ykXqqdDDXpncRdf",
  "key1": "2AozHg45GTNvaKaMGW2m65bsXVYc4rydnoMP5sw4CqzcBSZELuHXAPdS4b4eQQCg6v8aHmGkoTD6Xp4ojiAWjdFt",
  "key2": "5r99xMgV3tRFpMziozhe81rQFdn37QWvvxfBu4qHWEWTomxZyMWjy71iKoYE2Z6PNN17NiBhGzwF5z57BGbBFi3V",
  "key3": "2neWu4wmbCfGnBvp7rpxUipT18iRg3FsaC1MmR7hMf7VU35E49N7d3eqKpnzXQ2XJmYdidS6AZ4b8sN5M6u7K2Wy",
  "key4": "3jrniCQFfM17pohJPDzXzFLA7YFhYwbux5sGZNagCDwXFW1hY4DRj9AuJHzMYfcBzGALGVZJViXfGEukVhUxv4Gr",
  "key5": "2XhjcMe8xXKEczMWUuz5oyUfL23hgi98Pe2nQyNMzLL7FG6Jo8wvjvZCnE8RGynXVt1rC23R1gWT1pvncHgdNrP3",
  "key6": "5Kit2LigFzwUz2UKRfZ36bQ7bchg3ceYJXVpmzpBRuZJAq5f1cU7fXBbV2JE1PrUmdGd54yH3yYDcsQRUbacDeZP",
  "key7": "4nq8GD6dX46ogJqJi8n2Pzqskef13vFFN8yfKYHRP2qoVribhK1VF2KhhvN2c9qHpRcgDWsTfxN3BPsqFcHtUGsf",
  "key8": "tw9DSbkD9tHQVZiit13rB1KaFHRhcLdwivwUPpZ1HhHF3ZtHhryDDDQcGBLtwV6qGiidmQYcGGzf4YJnix5P5RH",
  "key9": "3BeLctRCa9X7KE7z5eoP8ANQWu6Jr5A81UEMnZUnmmpFHw15Rhd8HsHcaCGywcYiPDqSUEXChzQcckW7iPoQYDiC",
  "key10": "4LLdojP9Hkvn9nj3emfWcXTQE37epdkjGRmjJvHNQezzBxL8M4YR3gwAMYz8sjP5sw9KYmBnyqQd5Mjoq9dP9oCR",
  "key11": "3GB777fa3vCzczkA3jVij8JxZh2986th28VYDQrBaTi11W4aXebrnFCRGNXGw1mNMT9jJEuSKWeNGFB8ryezZpN1",
  "key12": "2Xw89s3MKGLNX6H4kULShbJf8y5tmbhQGDHUjLxvzrMAYXRmwGW9ZALR1hb727zGi6L64mEZkpVik1E858EJAm79",
  "key13": "GisazJss334JhPVAwWfcYb6ZrRiduvfdBk2G7CSGWwRjxGDha5zQtJLLaB7MNbvdcP5r4ng4pemCs3YRWe7MhmD",
  "key14": "55RfCA8EZBFeKh2GGmnZTz76c15qQz3Jcj9grQRqptCg7Lz5m4SCscv5bQBYiXhYFa24cusS7ejMRcpwbWYpxbKe",
  "key15": "L1qBbeVpuoJUX3unGUyFEZEvxC3AWzd4HjKyEQ7wKasdG1XWrg4KL66nA4hg4FEGGVP9aMzj7LKgnWZADZoWz75",
  "key16": "23gGz4gJp4D2a1vF3WAt2v4vmSM61yFctEt5xaHvxnvUnQmPYhPw8afoFrDhGxC2gXUVJHq3B5DrG6AENN4w9CYa",
  "key17": "2gbGymzYp5giM4qQzGRh7cxQ3FV7V3fCMntQi4vXrXGr89fPVnbCkR65RTr2JAPjZ5SQfsLHSWo7TsXEHE7kEz4N",
  "key18": "2W8ro4usERA7TSFcYxVP87x35Su97Vc7yFHyA1M7YQpEi5DectnmAtsVdfvqarXezE5k9M5BBnwwXnnMJy5GN7Yg",
  "key19": "YD6tSsmkLJDLzdX2cAVY2UKHhaUQoeksnk5rj2Xa6JUD94fcSTWBjH2YprBfdvLAa2ZxscS6uw4LXrXMuFyxUMb",
  "key20": "2h8zDbiQBA7fJkASaMCSpLmLzRpNHhApaDF6YFFs2YD8yPPCWXrxZW29vueDtykTBAcZTfyVvpFVnbPzDxLrEJmU",
  "key21": "2io2xoURZJ25VU9ije7nVt3gwGKLrNyuxnkoF6qm2FQW9gr6fNHFmWNiNrvHRXeFBcgHDR7F8beBXe9g2YXv2knA",
  "key22": "CsSgArLEAfaEQsGUnFzrftQJXNwZDTKYQTWZrrE8H9DnLxPp8ajRhZVg84HBdrKdEEgyECnxdKNRgwb9VT94oib",
  "key23": "Ghf6HAYp9dswrqWewZBRwC9sUcSTszdXEDSaL2nouW5rz5edVzv2EYtt9ZRkCi9aVYcr7aZ5ZEHhGrChT9fuRTR",
  "key24": "4Jggro2CXbZapbsfTHMcxXC1f7b9s2BzgUCuzpghqKLfkYyQXKaNbsJopQaeLVDmPN3DioZZoVz6koZhwRUL4yAx",
  "key25": "B8gayotEUxADLDjweKjb8cxaceBH7hRVNvfpPExReTubbU4obQSW8WMYDZYiQqoNddh2LLaisZLSQubcPhwAJFb",
  "key26": "53XiqeANwdJypWnTSkZ6GyHiqFsgVz3mnm3XQ81jrtRaxF94xZmRgpEDuqxmLM6yXUZk5gVZ5waST97RF6dpoNZb",
  "key27": "2Dp3aP95rB7wiu2S6rcvzWuntshsY6JaccoNUzw2KNbH1VbfxXAeUjbWCE9DgWEr5T67gLEnRJywQXx4v6tdtGNk",
  "key28": "2qUyHYh9PdtL2EvMX2wBWoDwavWJ1dCYB7Gcf3X7SbGuEVCVuxGdQhG3hkoSuADQgf2dVBQQ9wXPKfe9AT4zQhw2",
  "key29": "pvWj5hVA2xTnAMdpkLQFb1UsxRphsghQh2ALsQRTNvKe3VmpV8vTzUPVG8PN3N6z3AWVn8PonrB8SHKMrYq1gCk",
  "key30": "5QRx6mQVviWwjSVBe9BPkfVpYs2cYKNnnhqPVkxP4ZruNSsT4FhmfThDCrhWT5RsVwAzoxP9dtjNWAijVRC3s7nJ",
  "key31": "4AekS5uZu938Qr64cyFm5NZhLFrFrg8S1CP9N1hp77My8pm4JmZrJuAf3U9fURh8h7jJ7cxwSBktnseqd5BSvxa8",
  "key32": "4wmrgUiyvna1sme9UNUQSSw5UeQihHckKRe6KtJLg4z5hcwevFUbsavheUZwNNr7xMycGZi3zPk89h898XpVdRMW",
  "key33": "4Le3W253R1ibpH5QftvF8wdkFRtdxjJeQDjMPc3w7uS1vUS5gBnvoz7xnt28rH5TUubV2azWJ1EZm2VfmKnTVHP",
  "key34": "J67hbN78vSA4VUo4m7hwXJ4shmcdUvJFh3gPZnFnJcXHDYLpwnqYtpyizj6ujNBZavQemPc81Si3w2r1L1DXcyJ",
  "key35": "2nB1oJp4LynNE3k5sAYBjSAgwFysGDtZE2uFNBocaooshw4L59NaQj3iY58eQP7SpzhWCe3xJN1moxgz5AaxJbBF",
  "key36": "25ezbVLKFBieFG3kftTZ3Y6W9v1NHRLNQV3NQjhns4GhoRWYPQYxbHPbdLDSpYT1wC6avwV61EmM7HSKFH6ReEwX",
  "key37": "2zCip8ZnUQVd3hL7MXPp6or9oLgcRzYMYaXQFK2Cv6w2HUufYXwSNNdaveJWBFovBwvhFmPxHCxFX8Po5JsHQ5ab",
  "key38": "5BJmZXNyaMrJ6NMm7JNVHKmhErb41noLQUuS8AQtmALNHhExsY5YyWQsaHiztvdJncjxDao1CJbH3fFvKRCP1LxY",
  "key39": "3PAmYAG7UNjEfeFbaQXzJfUjKEoxUeiUd6oDtapdKdLBuTKna67mJuGRjkqscdh7ZePZqUeCD4744yCKLBE4AsTh",
  "key40": "2gwpZDRCa6WoePuutmm9jYA9XCDjtewZafEGabHLxRyYDnD9tw9cpD4auaNMetvL96efYmUPWNrdMzCejBT1Yxuf"
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
