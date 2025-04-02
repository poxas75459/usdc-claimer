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
    "daetb1sTApzaqzxJtAjnvrmtwrtPtJ6gPXQA2cAN1NAWCrj1BpaYGR2ubfiAvrLgi5sVBpQzrCfoJ8rURdtNbRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1hMUSxhmJtJz3pHdrB7NrSrAUiB9zXyeCT87gBMkpqqgktvdHTqWKikbH5K97c2VLaD16aawaS4AC4J74WdVFcX",
  "key1": "5qrunRdXScU9wXeWXRiijqw7D1XzsvSjimm2s18Mj2qdT1hg3gietEDpi86xLLDYP4qujrCURht2YLuMiZVAiHuL",
  "key2": "5qVf7AEGBYX53n3voiU3DrknoJJDXanjT3tpdupjpRjmRZe7BEbhGNQEyNUzgQekqYr4iGGXCeVcs4PPknRxrFw2",
  "key3": "zF3EMKjZgmti2AXjALTFXL1wabj8Xod7onhbPcSmEkR8CYkmYLNc42BjhVig3z2R1BQoZqESbQLuz2zqsS2FpWG",
  "key4": "4ZSVwo3nvN3kjaY7FR5t3Ksa6dXoSh3CUL5NRz6tcZ9MxESCxYxskzNjP1ZqeiuWZKBr2TC2kKkvW4qtqcTvBjsM",
  "key5": "hyW8WQ5WpGK4eo9mPgnMqHrcC3bDrDZ6MDee1DHpJC6gDZKRDJArtv8XwRhNkKioiv2uA25v8TyhFS7MUfSHcQr",
  "key6": "4QBSWXd84YkxFGukrUw6VCMipNZWNMmeedUcpfiDcKUYgs3DCN17cz67hkyaDY15FskhFwMnfzyphMm11BEMnSip",
  "key7": "cwkubZeVmyQzkd9rYXGzr6QYBcoAuxbfuTbtYtvzxoBU8UQUrgnFwcTMQduPxyQXmjQBE6YLK9MWM92G6pUjeUU",
  "key8": "3GYXkeAYNmZXXFyEtsWMMFKVD2A3NMMyrq6LXd5CZ4hY4qtuXrGuQy5E9hwLnTvuqzPyVkZsnnyUzi1Fbk5X9jbg",
  "key9": "3LCLkbEU7BuHH75E8wkMJDiCLcFWDsoNXafpHjmSM3vMCE15XJVxxjJf6Ni5zqVYkoabYvrJx4TGE6dNeP1qVyD1",
  "key10": "5C1PjDytXKiBvpWLnF5mzQnfhsVCDUsdY9gLrDwF14e7iv3QLZ3QPiwe1AmjSegWTRGyXaZuPnzuSfAEAr9LwxvK",
  "key11": "4oZCppdp5asuz2r63XFrYNzpGXWumQSJNGiy2qpVLL19UJFZD8FTTPP6HjRaWBe1XDRef7oye2PX4Pz9r8ZERsMt",
  "key12": "2DNCNKydqmKcqXgsnCuH1AWfvNBqRVAYKqDYNcRgdDSVeUfB3DcKZZBmoN7KEeoih1er2jrd51xrN2A8oGpuraFA",
  "key13": "2BF3RFShvYf6YGYAirn18oGqYtx8jSLgLPwe2hLsTkS9Now7xUN5ToC68HAxtnMKtRGHZkn9gXk4D7hw5vfMVtGF",
  "key14": "5HVSXTDCeRv19t8X3WBmy78j7zPhudtWenrq1sVXhRPMD84hTHcBDgYPWyTi3NfveWT8etcQ5BjquQjjp9DmNZh3",
  "key15": "5SRijayFX4dXB9QTurSApD33VGLySAKHob4nzqwBSLyZnd4dCpj5rDaNVa71BzviZnJhf9Dt4bknG3E8kzQQ4QT",
  "key16": "4kFUDnDkzxPS6Yv8QGPdBHEmHRSPjmV6BkzNGFeR3DAz9nLiHRp45H6AEUmaUM5nsTS45mPQtdkeNs3xPf8jqNFA",
  "key17": "2JtxUUTNi3kikrPXTiipscdqvLJg7U75XgeQEHbxcdPfevpdQoh3LebPVpxakp6b4c8TDV25YYN1TkzGVMRqRNy8",
  "key18": "3uhLgCmWJgUukCQU85TscYMU27YWM9oTRNvAtqzamfqHq7DPjHgvvvopW6BCvS52VET4VtBzkJLxDHZ9g1V43EhC",
  "key19": "FZqZwBh9vSBm8PcPcFtLgFMYiZqPvvdUMpLQi2ff7JVHyQZ2JT3U5gk62XWLQ5L41s4zjhYkUGmX4M6RXaFCS4n",
  "key20": "N3evuXSpWqpMCcJwjbi2m6LeNR5UC8FuZ4cN87EGCapyjevyxPws21d9o6oHeDQ9WaGMWgCTojGJETSCTLMpBxL",
  "key21": "5j1bA7uTDZLA9jG4bWuFsxYVJ32r98JNdkoHhM6XZ6BsF8R1EvaaHDJZKHuZsg6kUxVL3e8TN1wfvDVM1HbQufLE",
  "key22": "srXykZ3oWKNRYHMsycCkJGx3tyUW6ozsukXXD6Pov5rUi7MAvc7mgATvhBD7FbP2HBQV8CAbZoVWbSzcZMNLsCT",
  "key23": "3rZSCpVz2oJYE6vc7PN6DT9G9EwRHXAWcGzeaPmeSvFj6kigBHGn7gcgGsgVeN7d5MdATbVW2GvrLRbCgtWYsMWg",
  "key24": "5yGXevGAcTJVS7cY9cTFBbic1JHPiUurqeeKkpEDicDHrby65wiWewGhd7cq8WRtnxA9mWaSZaZVo32DpvLV6xHz",
  "key25": "5f4ky3AHZCp9YMiqfwDoiwS1rFQRUrasiPEWPDKDJLabqoJHENQ7Dwdx5RuQvKbCWtsUiVqAza5fQbHP4GBVpQkf",
  "key26": "4V3u4kpYxEDbKq5ZFCkfJLtDjrp1roJqguX4kLxDvTGZv65HWeay323YbtXsR5o11ywrJNYDBNsfygDNbW14kjRN",
  "key27": "395ypeuDDkVayFxSBvPDymNm4KV72EjTySiRVoWfzbZDDVnQ3hxhoCDcXK3RQeQdWxVFaBVkG6W4N9BjnBPhgUmS",
  "key28": "3kF6amJ5VUw8orBQDv4eYHnNn1vxmegruewrsjGCPVHwfEFKvoWH4ix4wMteeYmqcNF3odZAwdpvVU4iHqpE4aNP",
  "key29": "35uXR8w4hmXiV59p7MnRnwXMZPwsjeqMsk3uSTG1RZRvNSR7N2pEdNhgdHpotexsoKUHiceqDjugkJzUMse5fWrb",
  "key30": "2JZU8iTY6rTsqZEuMhjFwFa6CV8GmBjnEMrbYKpCuhzeFY7pJiT7rZGnALG4UcDKwzC3CNVf3uHoVnFwhXHgQWsB",
  "key31": "2SB8ZdCntYv24n7mYJGGRCMJqD96do9JjiMKionFwx3RUnmPJmMuTC3Ynv25noGeHFvEGsrs412zBhKd9f9PLbLj",
  "key32": "2sMc8YKBvXFKMVNxQW77FpLTEuA9MwLh4VLbKgR9CSRiaPyhK3ohLeEqYSq54A7UvyA4zpPf6nt396BcmtaaFdty",
  "key33": "3KECzEDgd9NMWSs6AUwap7NS2D7ycMagQ9VY26AnE4cYufemM8KaJDRvix6EFLTNgYf93TvBFQgKTRjz38xoLmwK",
  "key34": "2PBpxKVWsMsL5497oiwkt125VGUmiQR89GCny6EZigDqK2vYnxrshFa2qbUi2PUKbcQjRUSF4Rxz5X83LtdXh9HA",
  "key35": "2R5jouoKMCtoWT9d5GoDAoSBTQBbM55gVcDE5hjMqMwG1MxnfxLovAFMH8UNvms7rUZaT6kSuiJAV1RM2Qx2DdbN"
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
