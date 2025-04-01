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
    "2CusXyu5PPXkHVEQ32rWtRptGqe1hkS1GtmjbpXqr9REz8myHtztjLjxaEjoaLXE4PY8y5Sh7T66DjDirVKVz3Vt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WQKT7zZijsv3ggT2rwnL4Z8EJFRL3Dp1VCfBcLuNgrR7pCrKaYzdF53F1BNeG8wRiEzwNaDH3ZBgNNkhRpCcqRL",
  "key1": "chtAGbdFfFWdR4WmztiiDMb1JTpc3gVoqTpCdgLRi2tcizgcMRPQuQDJhVQwbgNs9Vco32hu7E88idZfbSDyqfN",
  "key2": "4yxxSeBKtAur8UTAfpb5XPzM6KuoJJTQvZq268q3njdD8crwpPsu7npXBkFrsnoeh4kqSouUQv8HPgr48tisCNTp",
  "key3": "4STh8UAoftVtFhCALbFqbmi7u7aBRvqx8CfPpNGdnsHCKC681eNArYhnQrZRU3HiP57xZRYstk5x5uojSssVKFzs",
  "key4": "49K55xYTENYVxS6xsZHcP3bpwoToar9S52u3cbnhZgqUdCR9k7Ei2bhCxnbX8K7Er4YxmMKnzYkTpCey4m3AmHeR",
  "key5": "4WNcnBuCbPBAjfQZ5Zj3QuFP82gq1k9hejNRpAJVqCDRz3qstovfXRi8TrkCKefYUbEpjU8A2n9KSDxPUa6hEJtD",
  "key6": "6gUkUN6A3JBHrcgUb1e1gW7yxAP8XoqV345nqQBPSXor7AKYe229jSCR11wjgXD9uE2D24PaENYjpXCp1we3sKK",
  "key7": "d4sByTEMujrWs9c1aF7YrF5BABatrDzTD4MtSReHjucMVUojWafcGeQB87PwZVriU8DfwVAP2vfipBVWF33KbU4",
  "key8": "5deDx6kPdedNpe5cZqhi8dNjuJ2wpWZtiyY3sY8V36d9T7w941c2KYFebihtubT3USxfudzzgo8quzzqbjPxv8t8",
  "key9": "67pBbHXzoiGTgAJZm8qxDuQXxVon7VnLxMHGwuAc8oNnFQ5Cw3aT7QYc76f8y4bND9kCHFQg7pW8VXQVjcAKmmZN",
  "key10": "JcizkizepwxsCWqzf5jkjsi2wzzBcByw1H2ezqoa5vYqpLX38fiAcFsnhDxRmssxo8EpgE6aowm3KV1KY7JPC1e",
  "key11": "4ufX5HfiUZaUpkzpyQpP1p6GdrXSYvGwzf3AQGzj6KMSLPp9CyEXj8RNgaQnmKKGW2zarDzaU38Uqb6aTRaaLyo4",
  "key12": "XdMJA9D9niF8j6vcjjYhCAaDyQvyAZi9fmkKhKg1UYCAwvujrbvdCQSEJLbWFqUmeEkYKrL1rf7qmvfQoQbzTCf",
  "key13": "2G4mXtaUFnRbK75siTrZ5MHaX5bEyFU1qd3nvKiLmoaHu58RV7JTNG8UburcweR7mbSBgt1dLdEfqSiqhVzqcAUd",
  "key14": "3SSngtGtmCp7sX44yeatpN6D4DdtbzEgNYkPKG2Gp9QhVsxiPWTeahsfFXsAbCp2mVqyBNVeUwGZ6QkqtWLPUiGJ",
  "key15": "5VKaWCccskcBimvWVJgQ34ZZw92thTveLYkg6YnGC1BxNmFWv349K6BzVQrdZq1F9aFL3PmMehf9aZ8omnNXSGGz",
  "key16": "4N9ycXNu1uyjhAA66jcEV5CQ2kJXUBMEP2vay646xrzzwJfB3EYbmuJdjLAMUB6MKjNHLxHh1zvLZs124tiQbQYh",
  "key17": "5KVX57ZGaAuk1dgdeto3riBmeQVWPnu8N5zB9gTzjaXt5Q4AyL9g5mGWR9EmfVoz9WeG6ZHpxYvrst5UXy4npXYQ",
  "key18": "3AGQDRrWgcGuUpHuUz2zHsdW9U13SymQmHcEdBovA8jHFfJEBJm5WkHzp7a1R1ELRG6BJXjuhF1rEnfqYAEmdQvH",
  "key19": "275NsKnjTeks479A6gx3Zyyk1vksHVVKgJzasqg2nnDuu3XQaAaALMcvZVeYdJ4TrJEkoBGTzJxn1sxpE4NU4T4K",
  "key20": "51sNVttQSQoaAF8qUEWSk6ueJ6Wdgc2XKLJw8DA92iSejHW3c1Xtnx7S66px7aHCZJsKSfDBd2N4uu2ESACYzN3Z",
  "key21": "3jc6kv4WezwDKm7GhkQodzusta2yuRr5HqXLvDzUSWD7xyGm7GxeAANdw61HHUupJKkGbmRwsVrKFu9yNPyL1RWP",
  "key22": "4p2KYqjobNktcDejAUJH8Uc3LcmAMcyyUh3rhBM6zWPvfaKL1DRh2Vce5kb4wop9p6YXAryaVjwFGsXbBbufusWR",
  "key23": "7q3xUpLYkJ96pXaWsNrjDVT91Hgc2NxMR6cpqV2FzbHTFSa6G8f3be2t453wGg7u3S16r6b3XWQSswtfBxxaPdf",
  "key24": "28Z7HhV1LUSxB37vL9nQ83Yb4BqxLtAaXkFJJFVn8sqP8rmNnKrrYB4TREVjDgP2UoFMqACngEyuCLrDbJrY11HM"
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
