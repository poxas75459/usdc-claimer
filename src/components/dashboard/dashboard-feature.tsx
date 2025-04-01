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
    "241q6k73CbVZKjRJbcfx7wxUtpB4kV69ZMUhgxBJjVuDaj9rzgMX6rTzT2F7JVgh6UVQTm8DvrpXRRHxViQ9zpxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QzDBvtpu1724X9Xrqs2yda6FsDoF9hWCrBBFk5tp6txAV5vbyazaP2ydaTDCAfmZJL5ncpoPGppba3z1KBahPbF",
  "key1": "5AKyN9fZ7mMEg89PttvG4DhoSVwJFnvKXAoejYU6EdvMTGD11fxxEEWE3DgDoRM4bBVUj8UKdhzN83a6wm6LKZun",
  "key2": "4KujgE5mrWwFLc6UHwztkLRkH3aQQMfmHG4E328s8v5frg1m3T91t81WkWemFC2vRUEyPf4yDKxjSAhLLMC6zmvt",
  "key3": "c6vpjwNMzSkRjnWhgmRYxdgUyn7epzX7W1NtBQVcwnNiJRNNmaAN2KFxELPGL24hAdbCu8hsh2eV2HKC4TeeJtP",
  "key4": "25RL2gwmdRmDZPZ9E2wiguh4aP6sYt4uMcCAcSHwVS8pzPn3RGPuNcnhhfqJTutAGfEwfWZ47NGSx91LKns1z1MT",
  "key5": "3GQwvAuR5fwZKHzntZhaLqTZrrcM1BSQrp4xcUYn1xyYnijUSU3koC9kHug3PiVPWp3TQn8JFudV44oDCQmQtFcs",
  "key6": "3BhAUH33bKPA7QwXuVdw1huaCWhbNphe8G7Dqeq4vbtoUUuLDqpxQBLQNV6yPXEA86kiJJfTZq1ykg73xYyyT5RN",
  "key7": "4upnaV3hYiCTrZNNiocFshiL3NVGiSLXFMZEu7nFeMNc3EcaZRhYCZi9ZPc67nb2Fse82zUbekCPb1adj6fUkKgg",
  "key8": "4btFA1RbNQTqrunXuGPCtN9Cv5dCfTVDvd3vQBhpxhAGnyomgR2NDWtmGbXCMPjbLTznFjNWtXizsVevmKnb69we",
  "key9": "3URR7RAWJzWB4MGNHY1GLJUtNr294GFKycHoRvqVGHjE9Uft5E3R4gTawCYNL94xXS4TV3pf2bkJ8uTVCd2n8Tp8",
  "key10": "3Yn3c3XSjFX2G9dvXvrTXLowsEsAMbCTYc6FyepwGzT1dHhBsT4UM5VawDDVaWwQKAUWqUKJWM6tyHSCnkUS1fCT",
  "key11": "45eEh3bgkQdz8ZrqWMLnGoYarHJoW44cK5xdcEB4pyLGiZc3chQhiRZxQRNvNHigNa5rcT6r2uffzXyy7Mwwb3Bh",
  "key12": "35sRj8k1ZoHqFjfwW3m2cDSeXnd4KsbirJ3sqmUNHXZR6YcNrNpDqkz6Shn6oK7LYvHFLqBvpNVUpE6WK4asTN18",
  "key13": "2jMgXxPtXuWc16eXWR4gBLuCiBv4Xb7sDwWh9xAHRjcxvTiKi2fG6a3ezY2dYBhEuZauYr429geUcnetHhXSegD7",
  "key14": "555MDKHERaWMdmpYnnCT3wMn4Ef2i1q8j4f47BbkCgkUfwMr3zkRS66Jhr4DfbmMNouodgt2Qd6rEM8RMKVBzaq",
  "key15": "3WyvGH6Jg2kYpnze5Wo4McprGxcW2Qxu2d9TqNqHVRdz1kVMQfSXSyaEm7hsyYFBtPSSa7qJT1UGYLRAFSAJTzhD",
  "key16": "DN5ofLU5GVHDbN2ia36V39fRNuMzu6u8Wv95bKamEtY9zqG1VkGvHj5o3bGMCytXcqmrq9XZ7TWcPHomnBRLmVP",
  "key17": "56bSJp6Ks7ogffnqK7dbrP294AMvcDiPERFATtanJdVSLcCAaop2mkbEAeXK9hYw4Zsu1VpmBi8v7XoJHybWmxGc",
  "key18": "4DZJgN9XgwQtBxYwni6SyCHVLFguiZRRijMAFRuomRtDG1sVBxFjB1tDLMed8X2njnB8DYUhBLSdZK1WR3yUkGwS",
  "key19": "4cEBtNJCEtJSpJ1Bimdh5nnzRsft3gTwVV3C8LHF2FqWRqfUmw3Cn7hp78c6WSXZkH5B9KgkchzGeJCxKMVgo9Si",
  "key20": "5XMxWab3KGEHqkCyoA5kcttzx3nS53UPU6oECvZ4G4W9r9wXeeKd42MUo1eE6YEp5kRHZg5j8CcpGYTgxp8q3yjC",
  "key21": "56d29PVnuY5hXrr42v7jFuEojBSLgaCt8vyke3Fj42KVNvbqPdN9jhje84SSHupTaCqAQTzpZ4vqsmP3pcSwkgr3",
  "key22": "3UnQdbtpsQWjLfbBrCp4bhTt5o1D4FUxeCdjyyF9N9dYbCxgxpWLg1QtUyHPf8XWvY9fq6uQf18DRkQwnXAdLdSW",
  "key23": "2gsAd9uvT88MH6PHfKfyGJthzmkyWJfw1aE9yxQmmXZDrnx57p8opRhgKQyVEh2QzhvRj9zNKykT1VZKAKGsXFSN",
  "key24": "4qwxig87Q3CZu7ZYDX45qmGrqngZghJAEpapwTTnhfv5aZ8LiMcMy1Ewq9HpsXmTtgwChwrhPWQyYXiMMcjuXMdE",
  "key25": "48dAWVmWpiWuo25a28Yr8ofnFzzaKfBtN7dXCAB8QMPrWXcMjpRbWZMCk2mdhQsKm5Kmi9GFsxJQ5sCED7SKvkwu",
  "key26": "32amYnvjNUFJYpszaBs1n6FWyUQMkVLvwzVrHhbyrzjQ9ebR4Dd3Ak7vw8TYaiZaKvtfWSFzuUUTtZrTLVQpXXcC",
  "key27": "22SU9Eq7HnGprjoSpyGe7sompt6jEemYakCWYqBfXf3nXTP4r5dZy58QnTcMKa16Qxk5TMFJSQVwBUosA2GAL9TS",
  "key28": "5W1F4MbkHzjB8tAQ5i5qgbfqjNrFkYS7ZKFwGBPkb8eVe4okxGati4BBXuTr1TiQ1puAVQUTKeQMamWoKAWsRufd",
  "key29": "3EdbQXziKhxMtYbrc7qGBzL29rpDNwQSqqgWMWwY3JbFnrBBBAM2VAgMiqKxwXzCrVDh6trfKwhBNdnTanPsWtaG",
  "key30": "2Fr9P7sULEt6UMRcmPqzf6LHfwTXzoCbzEoWoDcmqb2uqLNmFSyCyQXA3fdhEgsLLNkmAA8hwspXAbjZvChAzTsN",
  "key31": "3w6bVkRwHFFPTwTKHyGBdrLnoCsSkQvjbJDhexahQnGH7EV8mbRup2Hp2HJ4J4z2m2875JgQEJZyvokFe6KEWKTc",
  "key32": "5ybik8VCryRwKQsrNvXq3Ja7dCq3CFf7zaKmn2kzf8YDoUxrVQF6YBvoZTQfuatxMd5QP4ZpY9UkE3DLpw2GSidW",
  "key33": "6oS6KS8wyFSEfAXB75mrGZpv6LYZg2qdkEGgwFPxDrAgrDv3F4XeWKcqUR89Cv1es9s6esJFe25app8WzHNGWLJ",
  "key34": "2FmgJZfTq4S21SqRR9ResTATDGhTde9r6n3k2xKge3FcvyJq9SandTDVv6RvXRmvackvt6aCvP6w9eVocUWUJ4c6",
  "key35": "4G5kNAhshuN7RM1Yv9Ad6enEQvGrPD2ouqL5L4UPMf7iPKf7vwT7ELu9NnxbzR5JD3Gz3RyyobxGtWGTb4Ed2Hhd",
  "key36": "4K1Ct3RmCoL9T1dxnmqCBKnHWMXHgKgzSm2AQLT33NoCMV4LEJ3iFG2ULuUahMEx7CV9WrQ1itjyiNpfrEMSwt9u",
  "key37": "aa2uNuH94FmeoFHqs5nMXcgvxyaqkZ1x6hedJEnWfxoyeShi3guipsL4JhLra5742Pewpo69xNgsXJkbUGoTjcb",
  "key38": "i3ayTUGBsXZZ4s789JPfJG4DwaMttehug5sXsMTAkWdm4tt4cZQMgVUfmETcSN2AgC2YJnS7pHNk3oCSvAXMbxN",
  "key39": "483TcyFuRYuHdGVYds3L8EpYNJsEgSentWqi4b7oAcHjiazV3UvYBLUSoQVGqNhmdBZfnyZfNq3W57Vp3Nut95r7",
  "key40": "m975kqXjTXMnDsiE1TMPCdzMSvQeTi8usyi8Zb5oxtiyy3Q2KeMJNmnWgvycmUVS5m69FoAJGPK4KkbF78V7aE5",
  "key41": "3411zQLT59DqFVBX8YbrL7AhYVcL1vkJ287ufnerG63KrG6R6KqpfPFYikGtdCFRRW76Ba49PgCFkoHssQ8gtCuj",
  "key42": "4bDT4jgRbAbjwPLJsrV6doKDW14RzKmo6xf6vz9qJ5Yf5PJgcsrwhuioY9xo7aTsJPLy2Bez6V3zZ74qjCU4U1iz",
  "key43": "pkKowxxo9F6FkasXQqzNnhnwmkH72aiNkgzv7nQTCYLgQhw8rfQop5LqCaxi2jfKphx5EkoMuFbnWnUWFSWxnZN"
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
