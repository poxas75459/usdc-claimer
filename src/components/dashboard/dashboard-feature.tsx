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
    "4NZyDVNnHH4LZ24HpgLMTpzfaPSpxrC8tfzudsuHJZUKH9UibFBiousLqStrFeMdVKmriMsTnJuzpCeJ26MNDn8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KqJwiUMWx7RBX3FM1sFMWq4kLKWbkqxBVJ5d2b24FQLxE7XiVzyY1F4cCqtdducuqkgiZEnUZoiGpy8UTbBXf4K",
  "key1": "4KDWEgUuHZLGomum5967yUguLPymojm6PNLhDmapVBxhJaz767AvZmnjd6GrWvu6pVuMWfAX83nP3qd1QyK2ZFF6",
  "key2": "4PXkcrdwnaDkRU3cnHFbdLEdw7AYiKeZCRZZDusneWDdSSxnyVEYLZg9PMNsFUThWV4T94dbVjzGqGn313eWcTa3",
  "key3": "3g3APvDaFpdw2BHtfFUyQNFXhzDLVVATExcrve4pJBocNu3vLt728CLGmsSd72HCwb5sFQKUhgaLpXjYyqoYQYUW",
  "key4": "4mVtpza8ctsh1f3MLTUrsgHWVfXL6kzMMxNP7ibeQ9syhK2g2T2NoFHLL474Z2VAfMuFQEiuPVciwTY54AXBuHfZ",
  "key5": "4q1nvTJyhft5dVUJYXVmJNDGoxFjYJxcJQ6SowTUB3CqKSoCJr1UvLQ81QZQrToLtayZVqw2M6aNTmCZxEFoCewM",
  "key6": "YZhLYKEMgGhvbUSspo1zTbFAt2SKqHhcN8oJxa9FVkbkpsin2S93FesTgyE3smiZ6bak3sYwBGuyZp2gzhQCRbY",
  "key7": "pAFHEaY3jDtdELkhh4d54Th2jvYe2AVPDPFHURsFV7Ch7cFgDRRk2pXpKYCsSNCfPDyiKMz8aJDpX3FjVB4zpEC",
  "key8": "4W7SDrweXGKwzt5TZaerXCNS6shRwtdBGcdAk6w49emhamxM4LP9gkZDkJdoC5GpEAagw3vRy6BJW8SeK4cBubYG",
  "key9": "2Upi5iaRveD7qmr2429YrXh7vSEEwBowrTjfuAza9XobkabgBUsMQNBsurUP3YPBJUG2Hzv7RdV5GUjbtbT7ZCah",
  "key10": "NETwvbGb4siT1LHJVP7kkbMPaiJ2WsuJ9QvHHJZFaywppjjhJbQtpVVanL3Azt5appJjGW5vMtveVdMrftGGEUH",
  "key11": "57cqm7cjqo1BXyk2wvwZZznMEkKaM29euGDrh2xX51VxPQM1etaih8ApgTSHeMxzW1g9CUU1eGJXN6v1wKt2RoFk",
  "key12": "2EAym9CnawNfujs6ZDprqaTjP9K5Y5QCWf2XkjZcSHDX5ydDeRNP9SYTTpcYpH8Q7rNsqLJBnv5uo15xeeWKXz6e",
  "key13": "496TxzJgRWRLDEeoC4Akv4pLJezXyJZVEizBpE24c3qNLbTBp3PohCjSEyUT7T5LLmwgumoPcMguTduBfqKRbEV1",
  "key14": "4o7qLyUbgQKUWWx63kBwSAiV6gCmN4HTHEi3iC9eszK8ZJqZAZ7v4ercGwaNXMiE51WGtYgYbTPwmX7ozwc5BJCQ",
  "key15": "GXHaaU8XmzVVeHPUBFmAfPjQrx3UZWKPccaJgSzoDTPSSSS6dkbSTN5uNVoetnXLRJzBAtUDEiDxeAiRYVAzoVf",
  "key16": "42hxwUPNFR8GszZrk7FE72xcdDCWc8BHFahcmhv2pwp7GQC44ghMZEvs2dnoLowm4saR3CpX5NprEsBXU4eoMhnn",
  "key17": "3mdU41a5QT67XjtkfsxFK6aJBJnL39UBBjXx7QTnkE6V4vHGctkFsXjwyPjP2UcRd89asUq8TXAuw8z12g1vDeNu",
  "key18": "KKq3KkXg744xnkMLHPwdsGcNnFE7PWYa7wwCGKW5cDbVkDuNNM5ECweeJhaZF4GHdbA1HhXHpPfEp9JDBVhd1no",
  "key19": "4NUu4PZbhii8ka9qVGCrNAM84zNCA5o63P8w97aUGRhP6BE4VPBMzHoCKQ2k9ofxj53qdbWwwWu9wF3Vg1F5FQK5",
  "key20": "3fXJstrfX1EAh7NhFdqYKFWGAacxYRcDfr9P8vdgLTfDjErAPW9HPef4HChjUhRbWtwZDLXM8oAnrd6FyGkSjp4J",
  "key21": "4Wuwhc3jnd2nYi1J3HVzaxLzKygqL9vXDqLkw9Fyrsiu4NRVqcq7eA31QBizYsLdrVxJQQNwJPQQCS1wR5vBCT62",
  "key22": "4YUjWmYSqbqapWcjdogXDXzN268xyekiS4tnhpkEBifZyEmtBRhQJo1WSwkdVxuK8Hz1EyVAuBZEHchRWAEHNFrB",
  "key23": "2gJpUm8fXoyv9QEnFoCDsFwfvzFT8L78mQSBLyo1cW3Ygv5FKMomms8JZUNjmbLymRw2NLtgJAZB5bXaBVqhH6pJ",
  "key24": "4QKRk5eutq96s6B9QdnuXAmTRTwyJrrn2DW48BqvNuN9916fCV8ymsMJC7tZLCdvsaPPBKaA3RrvG6erD4GbM9bQ",
  "key25": "2VvzVtEJ5231R5kH8VrZCzK5z4FhnsfqQH2bukRdKLqHvbYaLZj7i1eEvceBgjfgkyhUXYUVDtD9JFVaRrvdfmAX",
  "key26": "6WHXcwxrC5bMA9HRUMrgKgLZMdjJVa5WmcK1aH9iYQTnJrZ8baPoEQBkFzwXZfnnGoQKefn8bhTHj4yDsiyVjev",
  "key27": "5wxLyaQmMzrdw1wdPGuAv1t2Wxx9XE5ChnZUztKokarkEoAajzF3FmkLd9w5WVrN34x6d8udE8hUwdySq95ki75m",
  "key28": "5JG4qXPAfsdJZxR6keYt5RDASSUe29ZizXEPV1rZnYCcJKnS5jghEJ9R9TZkDH1Vqfdfcc9t1www6Bb19X5bX8JJ"
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
