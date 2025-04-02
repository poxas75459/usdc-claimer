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
    "2hgFsZzhCvYwRfjkr7m4uqacQVkvPHb9CwztCrHU5z3TDWU3GzEkijkHMYsrA1psydM1Yo5h7oUV9MR6ojUMdy3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VV2VBBpvPdMzb7oAtMvgZii6KdbBEco6rs6X28srDAVU1PpK49fJHkd8Cwx5znYgbhY9wtX45nkrwMTsBkRBNtZ",
  "key1": "3Jvef6pZb4U9DFKmZDJLWHkwK3A5moLAGswZfdxREzkEHw8pvDCKombjawEhLiMipJDSKU3QNtQFbLyE7Wtmd7St",
  "key2": "3egtFqTGcCyzsGW8r7qRMm7eJjo6RBpVnHzFoQEshboQZe3cjTAumazFv8chEMjrZjxizvMYgMcapnDr3X7aVdKd",
  "key3": "RiT9knKPreguuo5fbG88GnUvuR82euVGqt2HkbXhG8PTMsQ5Hjbv1Hv3mP6bchSUxD8VH8w4bk17wh2TEMMcYmK",
  "key4": "5NPc11xwd6sLfGCgRr8ugj3Ahiycjaz718p6vXe996eTXX8bYUKEGKbcr1HcWa6wnoJ6AbWsAmiQAzGUYMRrKHAE",
  "key5": "3p6izAM8fRMhM338EmL3oh3Kif9udKHtuYuGtukj7DZnT8dByC1bbmio3JHFJt49emKxGbaC64VoaaWTjWhKzN9g",
  "key6": "3kwtAfD4XtnMvRGg9chMiQvrD83Lg5tVxxvqbkfxouDM3TxWKGSBZ8b5dZfrA7pxVBDQjGxW7GZJJjNc7xx3ngA3",
  "key7": "2YKe9BdrGqq1MNn7Nez7d5Keb6UrRjRnxbsyvFQ5H8TGK4ncWSKJqs88SsxY7f6ZyCTRwHeUjPEanTp3ywud4DXB",
  "key8": "4yhcchSLKWwn9xmcNduUWGbjxAgMkLpFtA7drhwakXmYMu9ieNejMHZunhnkfa3FZSqyWu4mrtk4jfxFsHn2FRfu",
  "key9": "2F75nhUd2YyXccpqSQXSDZDRtSiLJEjco9u3VAF6XvCu7Wc9WLibz3Ph7J387yWskUkqszF8t6CyeGErqdyANSTh",
  "key10": "2KXzA7ymGgaM2sghK1e5QXPpCb5HLSvFb6L4CDnen9GSVtWsxUYavpiT6jm3iTMJZSC1dQ3iZLTdQhA5yTzed7oL",
  "key11": "4abFptbo5kT6t8RqY2gMW39ussFfXkJgufAm3DBc8acjE1Wu16QWyyRX5wTfHk1HKwYMB2PHDJY8zbfghAxrxXdL",
  "key12": "sT4TR8xCML8tjpNJrFPVoDB5ys9eEX6URKqatRjkWKR1FM5vbE2jP9uFRqLEFDt8Tb2c1PeATGQ7qoEh3bCn29k",
  "key13": "5XaLcNBZhbk43TPodpfVzJNukv2Y5q2r4Ha8YyDdG2iqL7LBSAQpY6TiXUyta6HMbpgLXWyL3WYPU38BJhGfMv5U",
  "key14": "R3rNrLx9U664nCG1KqWYqgp5yT9kEE1DUwWBRRcnjMomgWac8H96h7gDYXFGXpaUt2EmEwzjqePsjTKC3q7xKjh",
  "key15": "2iST5JTLYAekL7FqXh11yjkvDKUNYDhnvAnQrt8waFc4wD2wYdZJxN58sn6Xx8C4XjLiH318DtP8dkUfrSvQHwkh",
  "key16": "2YSDc4QvwCmdqgrpFKYG7Msia7nupy5u2fAkS16ZYgWB5JZhS8iQQY7SsyqpXsj3b2dYamrzPvpkYmksYe9uLR9L",
  "key17": "2GwZF2C8ByNFYXfw3djmCMNQumcyhMnKNR9u29x5dAsL5xNJEfMcnASE8cAuMnRyQ3BRouvim8y4MuhGjWmrEaft",
  "key18": "3PFLhHVQ8GCSoVVeBafjnRCJQW9hNbFbMxQPY93M77n9cbDeuSDgFcMP4svPtQLWn4QuCsMXnKjRS7R5RgahtnmM",
  "key19": "8X4wY226NvYkKJDZPLi61xCR4xeyYKHfwc4y7M4Gw5aafZu7XgHea38PkN8snTSch9xfTsCPXNTTWkWQ3JUN9EA",
  "key20": "5btALDWLSajyt12kfA5zm6z2TkonQQD1qMp6sSoyvTqJmGAn2bgLUBEzJcY3v11dAQbfBWJF2Hz9jXAxcc4NRm2J",
  "key21": "5Nqwmyi1uGGqkj4Q7oQZYoWWkz95gtWQmTVhZcL7iYDQD1eWbDXjJdLscNNRRCW6136J7qPf8UMaxPS4vD9ZXXat",
  "key22": "5qkSc7paoWK2A4dQd1CWGbK7HhUK8KsmAzrAxBQD1tjqm5EprrxumuwEiZT8aUrdGUcei7nuMugce3pDT9c99qF7",
  "key23": "4CdAt95z7TvWFZnDedMD71wUacDELMNy2huDTBkbotYskMLNvS5UCdjVwaKxN2M92zodGAodduopzwWJxZUih3ZX",
  "key24": "5jBdgUmkwVmaoFeEsjUN5McTbLeeK49dwU6g5PCzMyGuSgsuQgB4cbeWU7pYm3FyK47mctLiQo9kydfSNSSPRvzb",
  "key25": "5DxGbgwYHg6MkHq6qNcszNXR23p1ouKdQJzGXEbHzht9UTvjStnLxHxm3SmcrW4R87JX2bcNFKWS8WXJxV8v4ruK",
  "key26": "3BAMunTryqEkWAC1vmuJ4U9gfG8oz4dk93vVCTXwW4gMNkuYixA7cK6PG17djHuUZbU4xWsEe4oLW48YQZmUoYmf",
  "key27": "3PRdGDpAzEkSSbp7m3DJ6kGwUtPCAHo3pFppkisnuinEfmfAgcfTqEdSmqsPf3pPWfsioW7ARYTfFuy6nALB5AfS",
  "key28": "5UyQzsHJoo4WrwQQQqnmSeaa1fKxkuZFop9SZMgTcDNYfZDK45uFWWZkTpuLFYecaXsv2UzUfr7jTToRxQG4mddt"
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
