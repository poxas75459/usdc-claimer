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
    "236YqERgTB1jdE9emmyekK3MfJJYANVrQKzLnrF3KbHcwaCwA5vsVcoMg7GHC14kxhp2T7gF8qHGKaCY76EGikMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36nQVNgqVQqdGPFLJArUTSY9wYvc1xB3bqQNFB1f7G4mgcyqmh3wg2z4QDw5k4hX6AyGdCschfzaA6VqAdfDLoUL",
  "key1": "2uN1Sg6NHPFFZxzrnCJsu9NnbsP7e36SptstXLEGuMW7TkiYVcEG1XWVVgtWuKsRB6nRJuDkLXJzbsum4cPUputz",
  "key2": "4DtJAxXFunuApLsVKD9aRro4K1x2jJL8zfThSoyoDZdsJo2Tug7uAguN4Yu8N6axphGRegcMBUvJpQwAiFQ32SkA",
  "key3": "4rvf8jNyxkuS7KdETcLrS6wWZRYvhziqerHrLyJp1TJ24enwuvJhJj1eny5k5KJsahbNRFLofH7NJoEXNB386VPA",
  "key4": "5WXZA5ZLoHEUuFRYNDrDza2QaCGXxsrEkEXiUrXzUGzxdP5RJqwmKnnY6tpfpiH11kfRnUxyfdTaq5hghMV2F7F3",
  "key5": "2m7dtBSNczrTNJ1o4yg1g8Kws2beht7GTb2oTr4iMnrFh3NGtAm3XkN6PX7dEJi5o79r9FiLW17wpWL11WD7dYUk",
  "key6": "5P4WqveZqWKALsEwp4uwBTRQP4ExjbrkEDKK5VSafJ3p8aS3vPPy78R94T1vXJF3KGRUn8tU6KfXRhharJMVsyhD",
  "key7": "4gD6ktxAtSq9GFEVYqah8Yf7oPRLv3LTNtw5k5fw8Xw5buqnJUE5dH26sMa1QwoTeY1UUtPTue5L4ht117spoMyP",
  "key8": "3TjYQSKeypuxxHo5xppfRnNjjKN9UYXfbEAZRTdZJja3XZV27ZZSrY1BPsvGnaQJiptLekNEXrXCYxinyxKsSmfE",
  "key9": "37qfYANSvCuf1ygH6a8U9wPK4WiohR4q1cDKw6RZLAfWZuGZBhsVtheKa5ARterAh9zeAWaFD1GUMFYpp62YDZMZ",
  "key10": "3wxMEcQni6Qm752BuQbnoTqhBHg6L56ngGmbqLEZK8gSLVSQVi3dW7TgK9vkTZte2nv6TjQs5tux4ojdpda2AVTK",
  "key11": "5CWLUdqhpcaSHpCGS1ShxCX1nFSYYNhv5Ybd8gfCo4XWJhJPTsjEyVPW6AhbDRYRz3AmjtG5Vh9b2wLtUpgwY8Po",
  "key12": "5HBPCy3Q2X1UJDY4LmY1expjVYwDNApoZ9K3vdEbzdA2fH74AEdsj4Z3DkAjVCRdUEgnoMMnEVSPKzNEMLCzHiQ1",
  "key13": "TfRctARofFCLtkh2icyF2ykPr9H2fwWSQsDrNXv6tLKpt4FdZLWC3fzaqZ7kfs4G16uBhJcYvozVpJYvvnnKFhD",
  "key14": "3WtnrJuNH1ERJvAnAqxaFAH8B87MqcJm7fxxhJoxqBTc3Kzws5jXLrhpozSPpiRNeJNBSBJ1a4YWd3tSeL2H2aqN",
  "key15": "2n8irUDSuscCnWQNcgQfTdJZ6RmRkJyVZBdz8vPi4gfCaLLAokePtNi7rF3Ut9ZZEwzZJc2JLBzcGpAMgx2hQScq",
  "key16": "oYxqJvbEgWbvczYumuWLzLjLdr6R1BTABkHzVdvmdzTvXvsxtYRpYyoFhA8Lpcg2bBChUoMYcCckGUshzX71vMs",
  "key17": "4xdkBkG1dVqb7eFArDZGrgARsdPDdE8LjLMr6tLBpcXVKVt8KLsJ26CnsCQX5i96AQKtQvcHbhf9WPgAE2Dz4E95",
  "key18": "gL4YLfeYXbdn15pfW6ZqNsNxJMAuYw4Kzy9uqu7ckFwUcJYMeUoGotLyqRqL2hq8Z8CT2LGmEMfBM1ZVmn3rzSd",
  "key19": "4gqDDvTYJnCMfYPt4sbn8dXnW7DENxqSJqCLRgb6CBSE7m5oPSPKAFCoxB77j84DWxXeA4tPNPupj9MzZCNu6M5L",
  "key20": "4U5Jo8qA6PykkQ5b3DQ4mrUvrsRjez8xGKpF6WS7siXij3zg2hC5dSU8nBAcAXhUKBjLDQJt8tF7eqHitC3PnywF",
  "key21": "4gyXaCgKvdhe1kXaqF89tjyMJSbQA1cd34weuWtEkAgz7BZdos5U3YxmEoziR2d7EyQS81wQz56v45prfx7QpJpE",
  "key22": "2EchwoZNLmUaNUXKm3kgmj329gKPhJ4SHhnVJ6vE7YeqRX3ongmfPRk1FiLNDQZ2pAdB2XUmmcNNp5gdRigHvJXq",
  "key23": "4rccwHtuV1ELnCyph6axUmz9VS3Zx9nCE3EYBQHzMLWzqarj5sSmN895DXhTrcYKYqS4uVLCF7URNQiaF1fduetG",
  "key24": "4DufT2c7571VKrKmfsKxGy32Wf48DkxiFTkFqiR8PY9Pff13nA7LR49iK338d8Jt6w4ZcsaZ5HzUG5vrTKdmJgGm",
  "key25": "4fGZzm8KpRhQcnmBD4si6s7RdStYaipdiszRpV9r1ZcePLEQtVpjwoHdGg71bLy7tJzxvyE6ZGG9kKZU4JnDmf4e",
  "key26": "k4KodUwyroUepAiKzVJZLrucrbw2e6cN7erHJgC5wpfE3U99AxfWa7PkDBeamY3eUrpn2eqdeBojxfZHP5rcZrc",
  "key27": "3YFNZVY9xmQrUZWs2fK95A8RkYuFRNjdNzZSwpU2X9jfAJr8utPuAV6p5xq6KPNLhWjJkF8uAnanFrG1eQpWN4Z7",
  "key28": "4rDTfsL1CXm3xrKMpXUBiVHyeMBhbkWmpqihDtmbpNHSVvms6PTUpbCmGsN8tjFGdTvq6NqgJmh5rL77Fxv3BqiQ",
  "key29": "5YerDMZviS7293SPhDFCeWZrpyvU823xEt9iwzVKF6Ery9UwcDdMfbx4nzWfbdSYqY6qL5LWLPrSUCDCKoMMuUAa",
  "key30": "2FbVwWVCuF9pqJM3uisNhM9y8SZpAvB2iAknhNXYdusC6yATJm11jGQatNF9wiwMnEQR6mUSeZDZwborgkiXZohA",
  "key31": "3XESnzRBkq4NxrWfJR79SNcqc9JMpoVKKHoJTL7eJkGKjUWYu4221yaFMA3jaDijKYGXSiYzUD7BiioUvdRXicBu",
  "key32": "35XY6Aa5tCHwWy5L23dUvsb8fpUzWgCpZnqjF6yhCJodkXVAN1hBDxiPYhazs55RCzY3hcazEiwuMqy2fjzUE8Ar"
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
