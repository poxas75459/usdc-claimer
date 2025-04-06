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
    "i8hNjVNQ7fjiMfyvgzz1rTZfkaoUdEacJaoew2PAMPtNQJ8qQgku6AsZi6fniVeng15nhbTsUKhm7ErmbvzJEVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kmSAP9jnoBAhrQuzdSUCTkPgrCo8QnkJXgSd9i8T3agufZJhtxA8krZBPuExWAQb8uAKSMRCNyzYDBiuPdpMPBn",
  "key1": "vZtEC6ARCrdKCTRpU6PDa3YyNgaVyTmKamtyXYpfXeJB8sDMK7KkpNx25AC8mgichLNaDBaFVd5a6BBFsc8SBPP",
  "key2": "2MmP9aefUeWm9EHwgTsCiZn5iGi6U4Kj9Ni4gjxMSaYv5ZnSceZ5rtmmkbXncGvx69PCrntWSYEAwHs8cb7dnRGS",
  "key3": "wBMy1UXW7aVBuW7o21z2MMCbXgcD9tHnbA1sgqmxdGBVbnN3ucHazpaSfU4n5fKWdxoFmL1TNkLzErTXWcKRYa7",
  "key4": "4RFkxP37bJf6QLTAWgXoJ7w8LM1SWSbvFmDQ8yn3e3BNLFF6DN6nKCoLBy8iZFo8CRnw9Ca2GvQtVJZHySGbbwj8",
  "key5": "xs8iAgz7JAQWsqvUjKiYzt8rx98xNAAWFVpjiKJLRJokxTjspgGeDrxH1DHnoD7h4RY8kRUyNMd12eaALP1FRtV",
  "key6": "3xuLXfQCskCoGYfq6WWbVUmTqhpY4UZhwCUjvjGzZMXRrRhT9aHYnyMcP9SHHesUPSjs5eTYG5nMhV4B4tbnLwR7",
  "key7": "5Q5aau4UGEwk3VbqrViXu2b6Mw3YNkHaTZrXhsi9fZPATVLFoxq8iNFKvC9ueNQ41FjhrqewWw4bQR7F9LgbFgWS",
  "key8": "2caCwQsbP9bbWheLirGbSPbey1rLu1MpCpQRnR2jtfA8EKRjpwsfzBmaW2FnMQvxxVgMkK4ZPd4xaBcgzthNVFAM",
  "key9": "3uERQeFMdvqiifn6JJacNQhwioj2npwUkRsioYpUew9WrgSKpupFxJqhrktRXkVKLLNjZgDDjm8YuvtmJx3EFcpN",
  "key10": "2pxBUwrxWuJjjez9SoNdn6EorGguYCAtbWZrpJwxkDNtMmxsYg9K1uAYdmx2Xd5UJShZD6eWv9ZAoVmYTBQd82HP",
  "key11": "2mSuEWqE2iQWDVSjzCcu13xENZB2VLM9WNSNvLaxwBqA6reUbQVH9zAnpAuDvBc5BUe5nsLyFdJno2WGMBeU3kBa",
  "key12": "2RHzLKyyV9ZDv1FoeCxGUAGcMnkKj5idgKZzbojKe8Jivj6a3t3T2aL13QahbiAj7zczTjxexHBjwBz4mVm5jxhG",
  "key13": "2dE963EYLNofitJqTZyH2XaSuACR6KnnbfBQVpN4GtwdZqquF4vQitDhSjKbuyNT673cK8zrNFDQjzZDLXmVXDKd",
  "key14": "4iN943Xk1K5ut2u16YR2gi9DgFaUhdi6ecW7yhdN5ZPyAqwvM1LBHn7vCn8amMz3ZZhjDVMQKVVTZqE3KPwBpzAJ",
  "key15": "2pMKQJymUvrf75ZKnttYf9uNg2ec9KV5bZZKpns3Q9XV1LeJwTDgpBC7ouHa3kb47Z88faCHh5a7esw8eDLzWFdn",
  "key16": "RpetYkWEGeqxfUDTHByVeCW1X5meLdNx9m6YspQW4tJyuLhygcf23b53LSWGNbRfc97MyGnKn4qQiDapvu9n4zq",
  "key17": "446Q228iK92sVTDMxB2dmrezyRhWot8WCXuwLGo6ZeJ21zqTLFBpEPErp9M7mtMhJykUDfDZLi3g2uZCw6VqekbA",
  "key18": "524dzk8L5T59QmSSBbCE67eevQbJTTaiuvFwnKCrrpkHjro81CNN5WG3PSMgujj1V7wRxRYGzWEqRzPGjc8bnjhE",
  "key19": "3eyVRLbT8BC9pf6923mCV7pRYULormCmYWwywRDRRcHM4AKjxAe9ToDzYF8p2ByctonTWh9rZ88gVXbXkUBBCcvb",
  "key20": "4y3pzXb5pDy7KZLUZRScjtstq5cRgYnMQCX5j2tupNtDSaQWR79VpXms3g7BV5L1dV2jwHHXKfMqyMjHr7fhJeNF",
  "key21": "4mLAtCj3VD64vhiQYU3g1Ni64dfUTtUSvjSfvxbA5MRZw9oHPqZX6cxv8cFFdRaw5R3rpE2srdzUjYN76UXrLcPK",
  "key22": "3MFPeuC9MuL3DYEFqLes6S6N6v3B8UMJB5en3ABWzUwCTRVFJDUy7aL55ni4izrti7oumwPWJBr5QRuHY6WUpByn",
  "key23": "3oazVvH3eRGPSyP53JLZv1h3GccY9X8dTNsfAhSFmf9RjxFvhLdwf2uejUNBEddWJ5DbNHi6qQbvmWBXaezbT29o",
  "key24": "3muEKRoUxSJLvGiZdQvj8qu6iX2HRdHPSNFCFBFqbEKZchRMwHGdShFBjhkSrezCkUPksYonSsyU9myMCZEJGecr",
  "key25": "H9bqYFZPt9BXJn1RXJEvVNpAmRoVDKtAy5vRNnHV1MmLgBcq2QJt78QK6MgLfjTRbrupASi2b2GkGTsDSFDAB8L",
  "key26": "67nxBwTEfoGVgWaexdydzS37MkXprGfJuU7qrXx1eaq4vnU86XB37L9ZsdiEmopxENmML6FEY1fqsZctgMpwMGw",
  "key27": "2FU7A9tc9ASgLj8Fj5s3CoZrkrC5nxXZxQRJKE2rvbGXmUpjJUaDYuiLa5j8k8oPBbmGf7fmbWUrbDoHxQqymEbq",
  "key28": "2cGGQvrfa1U6gQifzgMavpzXbPUz68FsogcEYBm8Xochv6PKYxQDwmwFmw6P4RtiAf8XBuCJ9XFhBMG44acMH6MF",
  "key29": "43LYg9pgEXW62BBDvstLXp5HBfCNh9oEUAySPgaLvxoxoPEXahvaGwx97C6Ap6UAxcc7i86nMBt4A8B6wHzgCRJz",
  "key30": "4NAiuvzMGvZxrw1SbE142MXLUz4geACmG5RYxZcraCZVtnMnxy8nQFeEWxymVTang7xnPbfHdagUyrhaSaE6TRyk",
  "key31": "5zfeHMvquU9D3z2QWkt1Bt6ifTbvTrbLdb2BzqEUgHBJ5un4A9bc4QfvtrwhoHrxR9WErQpkRspbregvGhJb6Vja",
  "key32": "wQYV53NajWdLCYSySVt1sYVGQHY8tFT9GrVUWLRk8CUNNACE8bB6uvubnbAnxxYrmT1UgwGGnHDG4mm5DndqmEg",
  "key33": "3TZvoUemRgBXa8Bm4qEgoQT8FLaJpCKD4HULZP4fag343uf97buKXe5z5hVaLBvLpp8UrdLG23RHVTXdCmAGWn8b",
  "key34": "4RB9SfyVtc773tkJpQg3wPx2K4wCQ1epXfoLdn7ayZiWSJjJv94cVhd8mGHiXwWWeufjSVAdN9ZUVvDhMbAXzPXT",
  "key35": "3FYZvXV8TxViBb9LfGiRCbvxk51csfLASbsMtUTPe98mcTxj58Gk5ffR1ohSTzrq6aMQCjCoENcYau38xPrCkJMK",
  "key36": "2A6BuDEm9K3K1p1j7ioeQKhANonPSPwreKMXwdtLgyib9zLgvneRhpuonb3gcPSfxgk492rsGtMJkAKT2KS5L1ac"
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
