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
    "3T7f5qLC8jKsjW3FTyvnh7sJ9yL856qu9AtVsi5Us7t2XEwu9pZqVoWJU9h1PerQzbLHzyvJ2Qz7ieSAYArrFwPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kAt3B2Y6EwvBNeRF5W3NShnVvFGtc5aBHzdUBzPKL7kdBe6Bsz7qhMmg8pFacxP1kvhzGJWT6cNNtbp8Mh7WTCv",
  "key1": "ezt99aBk46AQAgW4uURVHh9R5yv398YrSfUvqN6XHXSvFhu4bX19CoYjUNAQwY46Bus8r1TSpH3QkVfdjfMfSWK",
  "key2": "66JeMoJGHWZmpQPFXAXEcF9AhbBPQSMsrAEuU6zsnxoRFF3u25g6tPHyJxpPQhsfmyVPDJ3fS6NQgYnCzkg9nh9m",
  "key3": "3X424QYvonG8gcKGG869RUYLU8uJZ8SLabnGGZALg5VJQhp4DXkDguWcoUiv2yRnL81rKWUeuMVypC1nD3TNAoLV",
  "key4": "5UwGv6X8RwiicinHNL4yi3YqGpaeDRdRMuTW8MgUE8bDLpTNSCCbRbFBuBDo4kzPgFLa7BBgNozSGX9bZT86Djgp",
  "key5": "4qorhfx2uWjTmE4gEUBun6uAMcDHGr7BTbHNzK7EhAuS1FmcYDhzY9eDG1K7B4JrnA4KcQUS585pWeZdFmwedeQm",
  "key6": "4sA6qkjmzbLdFbY2sXFfkjE6f45KV4xiiAQnuYfvMtdw27SmFrCtCTgBtNJk9XnEXQZ8S1H6kDDL5gSaSpbnkE3q",
  "key7": "vhBwc85vBXNUwxDfRDPRUqx4qKURs9REYx9LWFC6gJ3H4WXYfqQSJgMbQninKJzLjCEYtvKzDPavr8vZzxwtPYj",
  "key8": "2NiinLAG9VbgR86WRagp178eNSNA7GVinmkzf39bdDQEySzRNUM9cmETUcj1zJtft8CahiHZWvoMxgNz1gnKxwru",
  "key9": "4zNZvF1bg5KQG9TBzFg96b3XQkNU4aKk8S2ebCbebVX6DZwbMy1QVSonedZHxSx3XmEW76J7r7S46mtiTfsTUFXP",
  "key10": "2Wi93n4qS83CstHCaGQDcRpe2qeyX68UxzLj219jaoarGmco2oJmQwwdCvoJKPABpmF4j1uSoyhntSKtVDf4M8AK",
  "key11": "3gZY7uTG2ysmRUWq2AZB7wfc787THy5x6gbwAfwCSzsYkierMjCxy1p6uXEX5iHwp7kgmNumDZsQyvXf53hJrcsG",
  "key12": "4G6EqjuAQjVp8zYai3pPwRS4zGtMtxZs4tE4ES3bcTU3kd39D5T4haAFoCDUoSZBTLnPp4U8xMMeGBv3zvByrzHu",
  "key13": "5GE7LcX35nQDRkcgsTybMSyxqPxG2pvH6N7LjwTX5yKFt3nSkCJncfgr6Cs6CpxyfNcHjReMnnciTTar74eQ7Sip",
  "key14": "5qgpwv2NRfZ63eaYiSAtjAcKrdgwz2aBaXiFr3v4RkwvvMc8KXjkbxmBtvCwLZWQM9aDXp3FGfhqcRNGqPs5H5sF",
  "key15": "yw1hw9eQUF69hbBQ7m3EFyNGZR5Hsrs5sWqRzB1MtYHBuKQdWeB5YUP1nw1mB5gW6EVWg6d3WkXX4omM2AinywP",
  "key16": "496Q7Ag3dEPzrhrrYi7vFw6zuQThaxf4t1SptGKLNRyJnjZj8wudfNe8fvuMToyMD9CDfgaJkkibWM4mzpqLZoZJ",
  "key17": "2HYqeR5pWi14YUHDuWAyhiVkcYyXsFZBNNfpRXisaowVpyEijzeq7jd7WeDYCBXER6fbzWPZtecBdKif6Z3MNWwT",
  "key18": "jBewfwK9jkQ8CZhx6RKtmT5Z41HeVjCutfKeP1y5xHGq6N7bYRS6NUZsk6gePPD8qU2h8Pr2idQ5JuGbR2AMXD7",
  "key19": "42WMQf1qhywo6ZbsHvq7QKgRxgf3fJ8jA54i8QaCb1B2JPKwYcsUkFr3UXLkhSJxByquWTpL6kpgw2FMGFGimM6L",
  "key20": "fRtwwzVAdbvwiNjVK4akwuqTRFgMpZz5ENWKXCDQ34eCVUWZB6n18jCQy2ZorTM1oq5bW1KxCShSmaNuSo6UBPz",
  "key21": "4ScWwYS6qoqsaqVVbm81Rs5cxC7aw3zpzabUxBi9MBiv6GwyVuaBVRotuWudP57SSik5yGFwJnqPKtip3bvHDxwz",
  "key22": "GhKdeWFVfHPzZApQzVqFq5AD2Bjhhfw1msssrmAHXVHp2SkBAh9PrxZDjnLULujDfjBH14svUmnhVnAhg9DbN1m",
  "key23": "vFUeGpeuQYzREdssfyUnvA5Ae6z4n8Sys2Jgyvzo2tgg6SiynL5C24RoUuskDgxNVrqqnqRe6eNxScr3D2TVgix",
  "key24": "5VcTeXtJbxuZAq2f5PFeFb981puGCxZq9YpiHzAxrJrFmDYPsTrs8aGR5uUZYMqpdAxVX2EL3G9ZHPTrZVC3zxvR",
  "key25": "qA9gQeRJkNDsYwG7hrUGAaaSojFQ2ZdSQm39W9Kt7eh2Epqg4NJoN4iFsbt7L8SQQ2c2spSygEKDL3Th9f2d6PB",
  "key26": "4FqvFz6WwiGf4uFQgdde3eXpuGjwio5TruRYZ6TgEy1hyxmtqeGedBSW91iyAaJyPY9JVuHFFivZR4bLHvmZCi51"
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
