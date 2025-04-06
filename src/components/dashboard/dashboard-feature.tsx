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
    "1dg6Z2gpXMor238Paa4tHLxMiJkb6Xxkkyh9LEj9duUfJEapD2RM98QBvNMYwaau3YaUjjYFPzoCQjXoBEEnBgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rbkYDWaHicXvDXZXEBtyfroHiPvRj52fUFrKPYqvXN51HwZqEpGytcmUYGg6qrKDTodxWvUPRwzCaMgckj4bV1t",
  "key1": "5EuAVfoEQ75HFH7Wj4jsNLRv2J1ZqY6RDpAWwApxrY1A5Mz3cpLJhQzJtc9ykzZh8hhm65qzwN3kwYcmotVfwVKA",
  "key2": "4sU3WKCwhHCqQZSTqfsryo5SutMtKyDN2xE5QnqgsUAv1LZHMkoE5SeKquKWzoEJCPMWgDh34YuwemiDqxEUPKCg",
  "key3": "3xpPR9oLpTTE8P79xXNvGL6LX5sUkPrfBy8MYyRmqZNdF3As7ntaUwBv6wNFgWXejxuUSiZ39TyXAN7YToRowPiE",
  "key4": "3ZwkJpbS71sdxSyQfKUa9ifA16B23fnDp7eHb9FcTPD7PnEYxmWJuPTrAbXxmL8tWVgQBQBtLyywrvLhHVSNSFfL",
  "key5": "2cMvf3K3TMjGZe3Adeu1YZFzDmdEQbKTercjcVbLwiDzKFPPpmsBpG3BiPsSJu6Uig7c4XSHkbPGR9c8F7RRnCCg",
  "key6": "5SKeRjdH2kNwB8RBmk3hAXzQZNBw7tb7bzegXcwQHnUW8jJkUVtn1kjc72ahNZNapjRQe35BkQJoZqHV6UYQNeQ1",
  "key7": "23GkfNdcpKq4GxBBszcsNdHckoiDJDxcNu5zHwBXbKkjyjVvVRa7ZKZ2Qgc5GSYpCDTXNZntEGnG9JiTWsfFsjhj",
  "key8": "4CpXhLHcRULbgyM7VapezaUsogvqUAiqs98ZQpXnNK6RCMj7t6jLadLpuWvVkkFGb6JP1K4DLCNptk4qBLeY9yw6",
  "key9": "2V3HZrv2a1DfWvAPZGtsZGhoyfgbrCtaMuioso8fhx3gBA3WjUyfUg7Fz9LXFTuMq3dWcm44mumKP4o3TY5oCYN3",
  "key10": "5NHfYPBFMeZGbVUUogJY2sv3wGH65Xg35PfmfnaCyzg1dgyHRYtZGbEZ4ELFXSRUFK2FENQAVgQ4UzdmEWJDsmbW",
  "key11": "3fXE5yRy7WWhhd4R6pjVZHx6DU5PAWXs6eJceFT1aD1kCcug1d6qmcxGBg9X8vkbcL7jXMzDCAzcmpaWz9ED1n8w",
  "key12": "46XwThUN4Nk5xjBceHK8hYhduqbD8gDwCrWHpjYZUvqxaKE5uZHSCjiweNioExLjCHyHF3Fjc2ydfcaNdwgRcHoh",
  "key13": "65eJQxX4oNBt9v63Gmnu99oK8CzqvwyzjCxFfMsSfdHngJ3PUqpvioRTrgGQ7c9TU2LFvok3R2SKCCmquuZdbLLd",
  "key14": "4S1AxrkA5xfisRAW55mK7nimUHcv9NuoUt65qihyMwcsAug6fn5Q6sfwSo5wMKFnrMrfCLCgXStpHArzCQDqmPU2",
  "key15": "3w8WFugLASeUN5ZmsLCYitxh7puJvRBaTh1RZ4KHpseUeW8oSoyb2FT2mnYq7PodJ5xD2rfCJWsNjqHGj9kHjseM",
  "key16": "5bxY5n22W2uEBYfeB1YRsYFGzF8CDDQYGc5mRtNZK6EUexbT883X5R3ftV2x8GE5YVupXeAXBZ2Md3NerztXh1P",
  "key17": "i3cHMWMTePsVxHPraGL8Xp244nmKVYSfS7xoFUgcKbaiPwt7JcgiVUf53UYPVpRPRxWLqcd6gGur6xWvL1vGfEN",
  "key18": "2LLxVf9D9RPbjQp6U914kEPCVzyQACTL1TxKDd3bkG1pSK3aCqhy4GzTNn8XoEi8DxchTT6LjyFyrDhk22SF6KYA",
  "key19": "5N1ibyoRXEAtWdvi1Rm5E5zhXNnzCmvncnnmoi8ooNDMq8XFfbTBh4j99Bpb6UfR7kNKZAXKevngVozUF1Trafd2",
  "key20": "3V4t6sVcChpBgouetsCYnxYpLfkPJGoj543YTrDT9vMZ1eEPJ5W2qVo24mhzs8ovr9x6Rf1jL6njZYQZ8bFuAnnp",
  "key21": "5KnAjHfTRPuRCKVMDnnPEMYASrPnL14rtekNQ2kcTfb2jSy3Qxp28NCnjcNryrdKDPr4ENPWiDHBgW9MN4R9BF5D",
  "key22": "LFgPZNB9a29FP8ZsLVdUAEHSRD66xmai26mt4PFrB2nG4XQLrBWbeR2JCiUNwcgxabpTLieUZR2N52kCDXaFQwA",
  "key23": "VJKz3QwkfyeFpxoYGDetpD5mMctm9Vdup1MNwXc5EZvmrx1y6PgxgxiBoTx34ygzWVhKCf5jNr9QLqQTzKfCRPp",
  "key24": "4RXZvzg5fw7Mch3auJTDm41wAvJDBvoCbAAopHn2kGKSYtcEVGcpeG5uyK2gPf2Ee5fFymf1YyfeF1Jvvpou3xJW",
  "key25": "4Pt9QExvqasbWw6Enrr1exZa2a1eL5o1q42ocNSYkdnCBkW9XWcr3bY7oLKwTV6x463ZMUx6Q4TQoH87S4LHFj4k",
  "key26": "3XYM3r3bzmTjPZJ7iMLY21QoQ8JnAqe4z852GJxxE6MrB2iFZSKDWx6kxeobqjpphMygMfsXikRANccUxssb29VM",
  "key27": "4UL1rYsXnfrBqLXtqrzuWPebkpa6u8AmzRRJn7nY6MVwMQ89NYCiDbKvKGu42xjUq9mHp3w6bLvb9ftk61jPwbQE",
  "key28": "52THhs8uY2Qij5G3VbAYtEEpgpT9EJecU2A8gSujnhkbG9eHfgujboYNLTDKeNh9WS4aJSyHpD8JiaK8Ks8wVs2S",
  "key29": "55ZFDfae1NJEGafJ6hrx3oLBV86TTDb4T2givfYUVomCgf8yeqLGJMNFpKek98d84YuptF8Wp5TYtapWd4jtfx3w",
  "key30": "3wbG8PgxC1mh8ej5AGRNgq315f5M8TiGchebiruNuywuT3xWNnNeF9RedqDEnka1hpq5ZX7qAD7ac1487zqkZ8n3",
  "key31": "3UgfVLuCUAhbKgqbP7DqLxBfiMy6cZmrg7ZLnsSeAvC9xGXXLMASvnSYcodr3oS8TivoQ35wrju2ZXbA3JpcHpRM",
  "key32": "5Nryvey6VVh86vLV1Nc1JE8ECXGfoMohZL7GdaBHta8NR7tNQqh7fpx284bXSZxGY1tirNfBR1HrNUK6hCN1yJ88",
  "key33": "4GNq79o9QzdixgUUBhKj6nMmAkppiN5JTrJDe9Bba3fdGfWi3ujMifX8ZnzDVDTF8YrMHfJVT1gLaycmfbMybmdY",
  "key34": "hwWZ9djL3Y5GRC5t4he9DKF1FzSZyHuKZgu7LvzfnsgWYx3yVEkcuGvMFDGMvQAZc87CN4D2iqspWp2zyGU5avx",
  "key35": "61nTnoSv8bEN7nQGSa6kNyWJuUZBhKGwRKzdthQwgB3gMpPAnQ3QWacBuNS6debCorXguHe9CwA1bJLJ6Yqh5qZ9",
  "key36": "3BXTUiR4XDCyij47TsDAEJVQuwn4wWi4mUknNUzTsyCBbHxDxRwcw2gRYKNzUH1VcaUCppNyzdwtewjeN4fmXPDJ",
  "key37": "5JagYmCa2ZGoVmEGWQki3NBNiiSNoGitXApTFxCHnqbenUHPfT1cyjeKMztVxySqE57FdrvKbpiU4dcEsEvURy7Q",
  "key38": "NtRB8sSmyLUHajphUwT2XqyitMdGimssME4cTZ6dzTF6rWyNwEfhgBUg3SXgHLiamzD2saY1jQZLhPNQEz9NtPS",
  "key39": "3sJjk5bm7tfRJVUyafbfaETMZL195RyyX2C33VP84TGht9YYX9tsWdbuj4A3QEU5UCoYV3WeG1oBKsJS83usfAjU",
  "key40": "2xqH7TYLj1u26kKmJNGRxobNpDsSDRZYdT8GhU6eYaMUgvcbp91jqY8mYouBwjshgnPJtDYoGkSLGtiR5PECMp8v",
  "key41": "62mhonTdqoc33VkTCw2JGXK38fAyZsQWBGTw838QFhZHW1zBALgV4VWxXd6Rh9dRa8454ETMagwBC2Zm1WiYk4Y4",
  "key42": "3vnSJbPPN2iXhM2dJDzNUXZZb4P9KBKWwUdbnuBgS284gJ8yJuEs3nEL3m5cN1AXFtWpFsHLaFabaFty46fEU1kA",
  "key43": "44rbJ5TrKoWmbXiGGSeFauqu81FhGLyZuB17sMBxXizuEakyhuLaWMSc2eW4pdT3yMDnFSrjhFwysLPpBdagZ3Q7",
  "key44": "27CktUCwU3aeeW1GPvReZHa5gzPhq2GVSUAdVhH3RQypzFWGHDnATzqf3RQMqxEbW8fARRn9x6HGXkDvvKgiwWG6"
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
