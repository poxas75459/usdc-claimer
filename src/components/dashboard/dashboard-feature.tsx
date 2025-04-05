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
    "4MAkYkYouJMBco1ZrPz1kMd9aK8FzdDAB9JfZw3D6d8pFMVEKpKrXwnCBCf5UyNn7DzXL3ysXKgmRp7PBmjkNSxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iyhM4X3KtfzwqQNf4xWcY56voSL8gFbTFhKGSngd5YiVx99koyFCfsUTxKqZUbafZwD2m9V5TUTGhcJgnY3Tz5g",
  "key1": "4jGDPHneDaa1yXNwcz6N1CBs6RdXkZThcA8B28DtUdH7taJFXChJrxTfSTvYeGDYUk1Zj9WaQgvfyC6NGUqiyA5r",
  "key2": "2tPTJv9MUFJ9cPux1cRcL9ao34w89PaFL5AprB45YjWYMt6XXkwMzcg2jcny45xHnoM9xYoKmY61MGhcvRNCQTXz",
  "key3": "56LbPwgcb3LePFh7B7UfUPifUwi9pbm5u1fzrWUe9TXzvc57Cdj4m6wGCivwBkHG42MGSPx8DTJNAp4VmBp4xVwK",
  "key4": "5v311Zubieeh52yNPZprf28AUqU5mW6617URJgSvACfMsNCA1FEdz9nEzRtrk19iUhrtjJcdpPNBDcqfmVwM6XjA",
  "key5": "QiF26aEAqSazPp6f4f5oykWKjPMaeQrY3wnRKZmivC57bHi7zfBE52vsLrQghx8ojxvHqxBPFJ4cBUEWdDSpkqk",
  "key6": "3r8k9TaE3Cf4KG39SeCWLb5vHgskTWFoxzuMin6oL4AcwJdUrcqSXJx6bp4iDxgHq5JyHAaadvKzcbDCep6gVnzy",
  "key7": "56rBrKDC7oT8JFcKuJ57RBXJMhmCxbPLxDLE4gCuNjkjdbhN8iVn7drX7HcW4GpHdubVbGdatLUGyT5wqZFCb74e",
  "key8": "DMVk2Z5RJfjaEJw7FYx4YAK1nDmEqYrM4nz6VaqsqeE4eoNjYugPgyHVB1waJQNuMytaTv81yRWqGkXLAYEKP9D",
  "key9": "582YX2XLFXae5DM2Kbx6YYX7VyGtSN3UpxSDLKw2XCekJDmeavZPHqaqSLuaUc8DokoD8cz629U9a8RoM86812Qr",
  "key10": "3KHoBidJiLZvGKFQCkTtVki7MNfaCAxy5GtkTVLqeQSCJNveDsQuPaZsCCttdxHTfYKR8khs4Q3U7XshMY3qrJQg",
  "key11": "BPTqbY521YtTkXiawNt8fEfy1UphUUihFeWvPvhy45q7dLBPa5BE53SsxQFLsmWn3MakZxEkvKnCQh3A9AiSiFq",
  "key12": "59RS5BcTN1qphqNZnNE7u368XjSaKTZSFvNhHCxpDaDaBZTxp1zxnRpNQSoyewCrMkN2S88W2JZqPvkhK4ppMJxW",
  "key13": "6Ed7rjzhFirxrs9HyVueHog1Nz9ZKbwNKEMBktdHoKb6PUHKiXYrdQsmYtGLSuAB3uZdYXpq73QL8Si5VjGTJTM",
  "key14": "3mZGxW2oA2f2hSPTMLBtJFEz621s9dRjP4YtWj2MW8MUHaYagVhZi2sERaaWcc51wwS85kiCMfYLnDXoakvAWntQ",
  "key15": "4PEfF5DrFN5aECT2ExKTWv9pN6ZTtXzNFgvTG3tizpqNvzH3FLP3tWn7i8tRAcJ5ZfbatrhqJCb2eW6pNVKbDtJv",
  "key16": "2M9C1LmLTDgyiiJvTBGDJcdSs8N1ARqPGxiqAFHHq9NayWyLgd7KSd45A1BLmQmTsz4EB7VtC9WHvyUsrM9pTGfz",
  "key17": "65goPwhzftcMtewXSh7NzMLmD3ogTMYWo8zwXYdWExMXzQTe7S3Lv76NLSSXPFqyvVeaHKVe6WTBNPSdKWbLTCSE",
  "key18": "4VC2ghzN3vJDuSB7Rz77US8N2wdkGYzk9B2N4rwkZDyK6tthRsS7k3GRaJUcZQ66wQJYFRadTwSRs3qe9KwaHLbY",
  "key19": "376sxM6DmqTZa6CbdezhmS5ZYxEG2NdM9XREmLp5ZyDAzk5PmrqjJwnJyuoMRign9BzS1oo8MyxA1FLMHvgkyAUw",
  "key20": "4uPe93dG49aKYexMBn3Gz6cKtQKcSypvMXCEodKbowjBzA5kQKC38FUtAmmBcwmr2fTHe1EJAYu7bM3fJb5MJc72",
  "key21": "59eA2N1MmNALmhZCHyyvm7tEXL2rCVFZs1noHe5vo8NpwwBRkUBzrJVcc1RsV66MfzWatRVZotkhMnd7dVv9ic1n",
  "key22": "G24mfJfwn5m7CJLrLFs1Pa14XjnW1uRAsNUDJaV9AAHZTz8xDbVzz9NsypGPQWYWr6m1z4Q8rALubgXy6AajAML",
  "key23": "34UkyZh32nqZSvhBKFJ1bBGjttHiCVS2R7gu1RmBQUrpM1XmY8buBMdaBfsRCXJ5zpW4JGEUjbdG52YkrMH1WMp5",
  "key24": "2mcuT6gcnenoRf3u3EJfNdWRWHgjxVwFH1ih6S3zEnSKkKWSiP9VK4PLhR9YvMKra9gbm3238LpC95W5TCRXey5i",
  "key25": "4wrZekvPiKDE5wX2zJfQ2Zyx9h24XBFnvCF3APNjSgZoECzT18ogNVzedQ3WedF8Z9bNsKALPt2vUP9oL9hcnoJG",
  "key26": "ZpUkFWjN8AjTtq6nEGcFuzwp9JSwWgdWhU61ikUwVRT8qKuuhY388ZWayvhSEhwtXk2SJQsVSdhuQPstmSLP78d",
  "key27": "4SXxj78uLgpFyEFwdicKJ2v7rLARnfpeC5KAhss8GHJLHS7r4KPF55J9zRC4mvocMSN5uLR5jUxBeBbBkQo6DZnL",
  "key28": "3nqtozVkiQ6taPwpd1kgecwtpx6JrRDWJWTbf76LVXzhhuhxzVSg3AdK5fbUr98XdjM2soSJMHS8WMoGoGJE9GKy",
  "key29": "5kzEfgThq658cFg7ggw1hcvenrwr6PQyz5Zd2tLFQ8Emct91K8EJdQc251epkz7LEMXucsLpCqKkevYTPM9oWeZd",
  "key30": "4C8X8QkBGfXPNWom24s61onGSCWedZfGRj9syzGzJ5qgdcSaUJgnrLky1kUcAiwQaRnbuMjxresfEu3ZhceMLcYp",
  "key31": "38qufmNEfoURXn1bgSrXW1SPxfKcsZEWwKTMJMr9nKyVwUjv9F8gVLv7utLrNxfDqsZM9bb6FiWdsmNLzwsYBvXG",
  "key32": "4x5GYnCmMHBD7wXcwtQreYUQtHAophSyLsuJc7ZZczqJsaKLmUtjZBU1bJHcnttfnFKYmLzGtwz4X9devp3XFdoq",
  "key33": "65Akdq9RwZVCm5WrPoVQCEEpYyPosJUsq2jknMBKfZkFT4Q7DxBvfHERdViECYNStUY6h2eS6SwqfRKGi6dPVscR",
  "key34": "43SSdQHUhNPT6XL817M83KBk4Q5oytDHYhtHXd3RTFZe2iipq3uTJ9HR2MbztASfuQ3y4yix223FRKw227M7H4Vs",
  "key35": "pQ6cCLghPrXB6vrq5dKVLKMQqFEh4xCMhdeeGqj8xMH5vvPzALGTFUQ2F1RBPyVG417bHWxNFde3d3fjPXHU1ny",
  "key36": "2kigT9Kq9wksRQhGVhSHVJk8wsbjZpHi1CPdJFJJJKArv322KYbF1BfRXM3MDdYuqrKFvUcP8tBSMSUsrySV7Fcm",
  "key37": "3zXWjYHSDofYu3guSZZA1JWQy14afyWSKXzoof1U8Ub52ecahM1bPGxJgDFUySHkQytDbLn2UKAHT5YWUsb6vSVa",
  "key38": "3Y9pk6oxn2vRNGswCHYMWw5kfjwANmiWuLrjUxoUPhituUNySnRP4BFxyfQTorZCVZpbRZARmo64cVz14Krp95SP",
  "key39": "2hcZsiYaJswuDaecF4Z1gMjm2kxsmR6JpsayTuhZPr6Jr55StDvRga85Dm6RbptEE2xoewtUshn4jdtB1a7A9AQD",
  "key40": "41atoStHmiTkm9TdGno7cUV51N1Rcj2r6BRTtmAPGReXMqCBfPC2Gip8cdsBwj2VjR3Y25d3FCnfP7ZcBpnUhnhM",
  "key41": "XdMVGWoHjB8KJid781FgYfVzG5BLrgCo789kEkAJ7wG7pGKGk6Voo5qM7ZtJbPaosgdZE3BjAL1Q6as4yQzLrDu",
  "key42": "65HJQaZBDQfRTyMrYgfQB676ktpSSKZ36Q2Bw9PLvoP5kMkTJSHPnmfDVEVYT1qHLoS9Nwg6Dx7ndBaEENbjLMMC",
  "key43": "4DNpog2ccZUaNqgZ8NJasr5e4SjbLeDKTaFNWzvqxcfAaZiDudnpmGvMXztWb5Gp5nQtP9EibT81KtmUXjscG9dN"
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
