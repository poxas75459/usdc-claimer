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
    "5f2JMZvhXZHdpZv1zsVKjZm8BFa9coYqyzST5ZfBnvNFBaJFPPhUWRQLeEqMoXfkaYoSpsBS59K7CUCHxPReyscr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WNMYPQ16XZCNiTzGqA1nTY8s1SMhv7Dc1bCgustFgE9oaAJ53z4RiyfDpGyw5xbfWrbS5vLwfTumz9p5A2Dfszo",
  "key1": "5E31V476TcpSU7za8weyc1DhCXo5uPMhuQCC8Ahntd35gWcM5bpUR2s3fFrSbgUBbWWnVBpYyFDhvnoLxjVsCK1p",
  "key2": "YSBxUYfSot8oN7UP5k8YdudJXzVQXLU7bRf712btDnWHqaaGJD119M4GuKBbkRDnAuMs8W5AXrMkuQHfyDQ6GFA",
  "key3": "4AjsCRoNtcTaGXiQ8PGTpHgVDETrdyEjzd8EJKHztyz4dJamy6V59q7ecwv6tjeg3PNrBSNCgjPsHjND8J7EpNaE",
  "key4": "3YCuzYqWc1c6vUYhaPUGDg9MfAo2nWfwT68GRYtxMCRgYqqeWvNQg3JtnzVSqB4zBMkL4prv96bJFTu1E7HQHGrs",
  "key5": "xf6yAPyzMqKnqcfipViNCejs72kZeqpmyTe5fanaaDx2NdbMP42uhr2ABtRWPsfocW8FCYJ6Dh4sQPTERRi5cz9",
  "key6": "3L4oNjEY5JUNpnLMHdnTviHrkk5sNVsLpK6dmTDya6wgvLFtiR1CoDV28aLV77WEyRKUFaCW2CdtEMqpx2FcrENC",
  "key7": "3ZBfXjsniCUfBHTUjrM6hVYsibWkwTTz8AgFGj36G1Fv9hSnrXWJKcrd8YDzEAYnzE8PuZPdnZAgYbvCY2fdPCsp",
  "key8": "5qx8nSNrvdwE7DYiStvDsHV4b1bXs5WBahAFUjREk3Voju1paThJ4w5WmGHW4at4Jajcz3wt3raML3bjxDcNTZ8a",
  "key9": "2JVwx7ZN8cv5hGCPcvjYMaX8nt7XfQQ8TAH3uVp3uybWWrb7XqyFAEPeXFE8tuurXTRGhUudfaVzEuBq4CC3CFTD",
  "key10": "33EA2Jq9fvge49CDvQRw6gPT1yaiSRoHW9wFfqSJWV6KD3jzujrEbNvrQu8rdamtLK5TogmpcLawdmynhMGQ7cXA",
  "key11": "2q3RnCsp8qEJL4tdt4okQVWC7txJPbMEQ5kEWup8s1KsqtVjSJhwKBjxkCEmco5mePAkk5bgFvpRaHthgH92Y5Tg",
  "key12": "3TDnWrZFCSfsSkcbSxrajeRQso5j39PRkdoqtVTPvPdxzYsBf8UTDXc2rEgozkwX3Wf7DkuqiscHMmAiQcZoA7Pd",
  "key13": "3HMSmiAJ1YuYJTggDLLGnh3TepZv51CBCrUPPwaoSFFBatDwJTe4jDwWpK1FHWiUBeANBTCTe6aqJZCwiH5m918B",
  "key14": "45z52qfPd3Cmrg52EykQa9uzzgzhgEmf8gEFt6FcXYpaCsFoEPAeYRBweSkT54PNfC1TW5jvaTY9vk1BEsNfJ2oS",
  "key15": "4EM5CyfSySB7HWWQzryQtMv1ymCjGnZAaVgGqkKsTBtrwoiLaoMdrHzm8GcQN9PsrGFoJ8EQu2aFEESfd66T4TuF",
  "key16": "5skfD91qWn52o9Pq2dNf7BrKfKwodCrEfG8JSLSRTYXMfZtuKD54bFwi5Uure9rDvxK31F6sY1m47WoNWSjXZAs",
  "key17": "51sMJUJvxLAXoQKE1v7BjTdkq5jDimzTBvN2CnVxvJkYB7DVpB8uzhxyYsbwmGp12GLZVGmgH8ZjEBHwdmspRQUm",
  "key18": "FM6EFCmwUcc3bCnSffqmtV3SA2y9MRLrApTn2Y6tUtuKEBaFmynB1tJmrmeFftBQ7B4HU68NyJfqYpPxwUAEzT2",
  "key19": "5tskUqjFoBayWSAbd9JzBKtUNiqZS5Gv6iESV7uRtWHxQdvrZ1o22D2HJpEDpBzdV4HRi6V9P8qBqcD8DXzd1G4C",
  "key20": "4zZRZdeyxTyegH9WmBq9AzaPS2wAjfUaUoKfTCdvr1XsVtGxg5P7abiEN4KAyboABVyvQ79scyo5TXAsZtszNqQd",
  "key21": "62jtY47ZsimgKDUAjknmp59AY2pjnxXS375NJiDDybyv6SEh87dc5Wgo1apJ9enEWahUGmKfRHcrWLozmkkcm3uj",
  "key22": "3LJ4WLiT6oYkNf3uJZC3XbNLLHFS7hWkHVVkLFVRXF9XPESDyVLyUtVyNbsSyagUizWhTfuqqHtc9uFTRfN5dbrT",
  "key23": "5RREAnWfBLtAL5qRniCDx4jSzovTK1dGLBVbhQf5pahrYaD6LvMKCiZVK6d9NmvY4LwYtkJTnopWsoM6gWb8MPhq",
  "key24": "2eCjCwLEC3hFRTTYz46wDNCGwvRFUceKU4d3My5pDAqDYRS5dTAnVQvYbgXRrJxSrq84ejxPXVxNK6ry4EwwcCc4",
  "key25": "LcfY5aeZ3eMQ7v4bA6QoxZXbefgibEf8rof5YVRKjma3mw7STR7tfYhBAmp7uk8aseFQKB8qttU4hyFCuHWDCZm",
  "key26": "2m4GpFsjka8d8BHEiVKXQz294TF67MrUP53gkBGwuVJGKdm1uQhJrci3muDKdBcZXLRUUbD7Avxwi3FBApZLd9Bc",
  "key27": "5k2SPtvYZBqCwVjoWPg4kaQtxz5LE1vgTinyefyxfZaGnBJp35zZz5etfG9CDumte3sWXx3K82QLDwVNpZyg2B7R",
  "key28": "3VG3825uSDxjgRkEEzmPrBp6yiXG5oF1oYhvsdxus8KMTXJBJZB5SNwFS6tiM7P1BSSgddq8E7uakFHT1662YLW9",
  "key29": "PEoPCW8ZCugzsNgEmktCE2yV1BrcSK9BiLhPytgSb2hoDvLc7tdjPTMMEEbBYf4Ayg5nDBrNf5sPQzYUBnRTfKi",
  "key30": "2LP735z2ayXAwtBx9TJkoEjRBFTkBQjZUgT8GgNGZpkz3fG4LPD9iUGff8ets1mDUxvwZSBJbkdeKj9nSJLh2doq"
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
