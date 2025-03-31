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
    "e8SrRWTmyrFn4vQn8CZGDi4ctAcvKCJaWp7X1pWYyezcAxhHV53JzM1jfjpPPA8YzuyoyJtEJ6RPV4GvMVBSf4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BZ64MEuxRdazWTYbcomoj8z3FtnFXacz2Z6sNn5381pNz5kNLv1E8a7eg6ZgySAqhmvtob2eZnz2ncLvT1y728L",
  "key1": "5f3UNBtCLJpWDSuHq6owuWL64aCzLq7zqmZHArEzNgVA7AUrWYiBUag2zdvWGhxDhZ7AJ2pAFnPrC2RykwA8KXb",
  "key2": "4C2vUTVh5nNPgo4xeqKr8bSxw3vQo68SdJELdJbQbGeHzxpBCf3Y3KtzRfr2se8Bfe8ekHgJo5Z6oFxpo6URvXcR",
  "key3": "kR6dLVHhcKRgw3RMuj6U34QyHiyiAuGoWy34dkfdEgk4mCCfoxxDQLJA5Q1cQzTC9MHiz97kEuQW78tM5hS7Hv3",
  "key4": "5CxDqHLYkS782Ws5cGqSfEmyE5tazT1Br5pZDPX6LrFiqdM42UKjmU69qGK6eqL9oiApgY3VmWtAjfRQL4g4YYCM",
  "key5": "5wFCEVjsARWDC5W3GeKV7pdNBcL98REWjLXvFMS39p7KyMTGJ4XemWGV6aNUnS9Q8TDFZmf2V32xhdTdRmFJpc4a",
  "key6": "MTCnuVP27xoMB2qkQ3DexhaMWYxeo7z3zv1wJUa6wmHKyYL4PuS2EvFGJj68JnVU5vPXxRcGcmG1dZCvy12HrdH",
  "key7": "74A3keXzy8fpra5wRX3Yu2rF1mjk8xQTcpNpRs3h61nexi5PBsq9sip2DK4N9Z5g99g59PnUZa7PTxDXp8oFLSs",
  "key8": "46FXDNdzsu9mhJtRPXMT2GyezuRw5wokgg47GptsWypcauKRvnu974GDLmusH1GfXr9fWFW8syWWCwLXfBM85JPS",
  "key9": "2D8uK1Hs8JbEgNfyo9MR3ptJ6MhBTmVBxQVJtBKAcYTM2a3f4uBwnBoP5kiK21NSDTvNKwNk1Hgjq47NxEn846Th",
  "key10": "2E6xA7W3zAUKsGMSqqwcc6GG4ZWwDLTSrUfGMvJeQczEBatU9e3TSsCBPviqJhUmGV2MFbopKhqxw8pm9L8fndEJ",
  "key11": "57bnhrZF3saFAiVnzSnjfoyC4xNaYqRKyFFJKUUmvfmzwhe6CphxNrAHnTDFrTwkyRA2if6L4KW2PtN5RsbxJV1x",
  "key12": "2MCmRvdCq5cMnLjyoqWKxBKxYPcJZwqg3uaL7oSB2F4LXt54S8GCMDPDYMEvMqUJJJ3d3N9i84atV6rGcZf18pGn",
  "key13": "3htxpQhyXbyYsX2qShi3uBdq587Z2XNyx2ZFJeQssdCSpHT9khdCHhy35D99xSd6tfJozsWwdiWyXhiZVKVBMHVe",
  "key14": "4Sgm2YLGuTKgDa6wRwT5jTYi6a1cy8TzSQoCvpBtgWfaxfU6GgfaA3rMkczMKUi9VFzbgYyHZrBw4VJyYB8s59TP",
  "key15": "LWDyzTFPpKJ7KZrKEMveWvgUywXsETozwm9cHGKaT4nKkSjDN1JhgmMHM8LoMmtNc1QGKWgMXz3Xnx4QzCPeQCi",
  "key16": "4SBfjopyJzqGcLhEW4WBLxTR8LRNAaTbhvpXByco3zro2wL1RjiBHE5h2RPsz1GhZbGxNYeAcSnhRu43cLyto6Rd",
  "key17": "3P2RvRS61qStWusYtjWUafYasKaXQkfh6fvJcVDXD24nNoHNAVQr8srPhZJFirFW45cg7pfN8482WVkLk9TNzM7N",
  "key18": "4x5MxXYGh5ZnHy27WNzTYXvQjDx64BXHKPcNJMQA8ZjxkdriT5SkWYV833dYqGYwYsXUy7FpgybzbTdf772e1eBZ",
  "key19": "2pavkebC5LRqxewjp61HTftv1kskLMWWt3UW49RHsWtMm8mb3LvJVqXPGVZD8NuttJarboWYCMwNetzWbq6m3Gns",
  "key20": "42DU2eBaxkeZGeuvnQtR8q8gAVCb4y1LjZSxWZFhfPNSrAygnBwB9eZokD45VZnzaHShzaB2xxsBAQp6osSEw1CS",
  "key21": "vatyEXHWskqfDximZyynNhiKeScB9X6pcgJ4Fq1jdCevM2cidavbLF8VADFpnNjbkDo9KtVtrshKymUF4BgvTH4",
  "key22": "5nXQHhGYy3zc4Vu5NvBQnkYRAkHm7ZhgiZ5oHWJxSKrTMYXRKju5J1NXdde97WR3gVyrj7aoc4wdFj75VFiAvzm7",
  "key23": "63yyb5EvzoZLhWNgjUMRed7TbFVAAnTtbCJ88W4XPoFQ66NjgxzCkqjNewgyUkCngrmp65UjFoL9ZWG4wWyjTrdo",
  "key24": "5jjd2fGtDWELDjR73ZRYLC7qKLbbNq8y62u4PCcXkyLocix7TKi7YxqJrii3Hh7vzJuBBfnPfKfAgCrR41cPmAnj",
  "key25": "45cMYZep6MYwqiPkeq2Z77mFc8wioXiUTzfRY56qe5bkXXhBQi34VaLwuNfCKC68FP9Htferv1JGvRF1NT4TT4kA",
  "key26": "5YcGPmjMeCSfuNNN6686KqbCRKqLghYBguEPVuWCosjNLZ5yhqWR6VFMj7zbSsQ13zGvJ9ffNtAJGk31rVtfDVAc",
  "key27": "3RFym3PxmcwTubPKtk44VNbTmj1ih7ApTkUSpVxwK4GD3mMt3qWqWf53HC7EoKxMC6Ukpe4tf6tAWN95hLoozgQh",
  "key28": "HJtkrkwZAgfAW2hhWf9KgAfN9EpieWPtWdZ5ixXBmfimTgN57coqxch99JVQTd9n7e15BzUTbcyv6ap6DEPboCN",
  "key29": "2VbqDQHdqsALAfUgDF8FQhmAFXL5yTKER8A9vc1pg2CYW3vfisNf8wL29SjLZnMF3J9QnGnZEi5MM4pxtGyE8wy2",
  "key30": "4zkxkitcc62qUtAU1AHcVzXjSMg4r42H6JoYw8o9Gok3uzKyiWUtGdu8vg1PZZf1TeBmUmZg8BzkpMGoZpJAdJ5C",
  "key31": "5BtJc76UXJ7AjTvkVAE5xNeswP4uXhNnf9b1zoVSoUosFb7aZhqQ3geNfugCZ7qkap12N7CntrFwk9DocKcjxW3F",
  "key32": "i7avCawyJavjBMzq1MVD3p8EbxmNrsmY9fsWkEnXBZKnkLoowX5acEuzysmiHcEYCYx66BDLSFDG3KjmtDSe6xN",
  "key33": "37M2CwEw2bbaFxUii4yEdQXRUP9sLpjo56y2xH5P5P8ZovCApRSz5X9n7R2WFhRCQtw8H27EGstvAyCeBYdUHf3o",
  "key34": "3v2QJ5ZoyAHTFaZPeKqdiUt6FEhzhSg5ZuhfdLmKLQwbGAFK5FVu1sMuxnSVyZRWEWJ7y76ZHQg8crnKQ7NQU7Pt"
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
