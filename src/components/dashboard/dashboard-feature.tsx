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
    "2vPh4RJDUBLmjjEyuNSyvTTL36P3xtq9F7gLUk7eveqM4VqUkTMRyvUzZjmK5y68q8JsTX1aSxu3Bg8zXK13mHt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Un5Fq2QA4JTPtXKTjvv8YUQX18a2tiUF2WjvdsjAsAs6ipN6X34D9yZMYkTctvqmhT4xDLryvcbkygoYvuHxkTh",
  "key1": "3jT9c11oV3BfFTpEWx1YYjrwA4xcZ2aGYm5TndexMdsbX9w6nhA37wxuq4hfhycEE5WgdXWs9qvbecbp9z5RBqNY",
  "key2": "2tiLY4ig2yKz38mXonv1o6W8rKF14qC4AHeeyHVeEP565BiRNWgzkPQSeSTpuKfJyhgAP9JjSQMNhpEpFCVu75fp",
  "key3": "RRigahhK3PVqbCBenTSv4M25t9nyAZ5mC5EAJarusY3MMwPyZ9CHno9Z3ou2cMi3AczNTDqs3kf16AxiKGkKLyp",
  "key4": "5kuHZEqeu7NCQ9Cdtdh3u4v8FTttBSjUBymxhzz7MfpePV1h8boaCTg9ijyU4ZRCFGx7y1dg3B7H1oSZvriDJ9jz",
  "key5": "5pfPeHYKaLVDFBn5vuGm7LZuzxGbxhjsYx776wp4QMSe2MnBL7iNCYQFNKzc7ascTy5A9827MgWevkRLo46R8EKa",
  "key6": "41hAM5eYZK6Gz2YDna95CwjDB3fWeggiKFvvCDLrtBvnEwAqmibcSCzSfbA1qfZh7RugYVwp17gnxJL9EKp9xC3R",
  "key7": "5diiqRprPSpyu1GoquM3eiMBmWJR8add21kzxsm7B8WWcArtcStd6HrcozzYvTiLJHYgnreDhdoXNhz2E2UiMNX6",
  "key8": "2igNonVvUE61bNJ78WuEZUnPHEkVxCyJoYdGH9src3Qcn6sMNem3VdnmUcaggrxdr7F9VSN5JwfX6zvgxsfqX3MB",
  "key9": "kvN5TaxDnev11ec7Yy7RnN4Krf5EBa29efdK2L9cyLTb4BXEWJBXjYANd8pzvq5zvJGEHCGqv8fzC1bcdzkcQgg",
  "key10": "2U9iDEGnvCHLYMS7iTYEMhvkfoK1QFDx7ktGJgX9T4dW5e1pf5DqoXZEALKiqVhkFAAc9Q2e4cNzDNBS5Rpggk21",
  "key11": "5h6f5iToN9q46zRhPnzLebGe2awtRGdxbMEYEC8NU47SRRFsxFEc88kTknZ8VLaqaYcXboKiG6c9Q45sZJYq8rWS",
  "key12": "2up7aCmbLB4hAgNbU9h7T3dvEHKVdeozJxbJpT88JrhQ2qaZtjNhMacLQKLaFpBuoehQkZdAUFTVC6RTpXAuKhJh",
  "key13": "4DvEocBAhD5JAiwxssrYTuVCjN5jDuyEQto39F4BETMPLFC6h73b9uf1JtDrfFtdDT9HSFtvT74h3nrTK9zieguP",
  "key14": "44U9L6EWQ415TXBhmgEu7Bu3DBiAdjkqhD8JtRvRDM6H23UVFDCrkNsmpbJ47pXeTNW6TpePEi7ctqVFfEGS5CcB",
  "key15": "414qH4NMcLUuPEDda1EdwR6GYRpGgD1o23oc3oAKoiBtVhcuofDVxbKsU6BLHoDZ81UMXb6pqczDwhsAsYbouqXu",
  "key16": "3jb9ELVWXaHoS8bZK8N1MctCuFVHT88kedZ4MNXQ13mxLomsgWgR3faoypgX7PUBfTuCuE8kL3WN9bX1vtvsfY4T",
  "key17": "58nCbsrgjpC8uYBUZgvxtQkQQz97yKQHafLXqvQDADfBsMxxuJ1rTAXwY15MLs8GBsbUfmNkAAf82ezCUuCEPX9H",
  "key18": "4GkQMWexyGEGrZB8qN6FTBz8KWazjZyeBooA4TZshTcjZ3gVCWYX8hc5bvstBBAuu9gJypHtDR55Uzk8b2CwLbSK",
  "key19": "58Z4au76CDmmLxs8vum2GNSe5jWa54VmsPDW8RepTZbF1zo11mitNRdFkahniJXQJsq8HjHyuFZHuSpk3xYbY4p8",
  "key20": "vugfTwKBuw8tmAxZnuemKN73kD9ZyczJVfH7YtLsvW9Q7JEvC6jnJd96Fm4pxFbkyaBrhBZZP5ozwmtiQCoJSGy",
  "key21": "2rUwasYeWFvYcDbz6RFRp9kwhjAv2cffCjmkYk63YxiKVo1FFUxqK7n8bhw4cUZEx3EY45kuASYWaqXVJLPfYaGN",
  "key22": "59LscmKsNjpreVntPCnt1RchPJ3ywXpDmz6UPLy1A4iALqHyvHERuCNBUftjGojLqABu9e6Czyt1jhRzwkBAcfpe",
  "key23": "5vXN8qnSf4ziziwEq2eTzX9WxAE56Ab1FVnXSJuAi14L7cEsGmtuJY6NGJuKrEfYoj6zM4RX8QB6rv5MX9mLmUKx",
  "key24": "4GVqufMms3QmiRaMcQaPQf5FZhyf8nuwRyHrKcLMkdYFUWND7ZbFdQ4tPq8auKtYSsWmFY2myfXM7VwQDHWWauen",
  "key25": "2B2zpWBz3fYDAJ5KwYRiBPYX9U4abFjaX6AU6ce85a69aQQ5hkeL7gaLbxaqQBSfTa7535JdvEKmfPzoQMUhc7No",
  "key26": "5yJkEGkG4qoM6ufqdMMnV8mac2AuEtpX3TqMUg8KtE7AkRBYLkTTGW5zaxAtWLjYePy1mA6aVpwKqTtf5sH3ZJMf",
  "key27": "5koww36owGuFEGta8G2Q7mwN8xze5Gaonu3BrCtnJo3bGM99R77xazHa4v3SQ2idtPKM9JaHgKoDxZYn6BrT7Z6z",
  "key28": "5XyVGhwLcGY7e73T7qUEik8zCH6dP93PiKCc2F4JygQFTe3Ni1bShB9gHKC58dV8z7czogzngH3P4RJKj5Kzuafj",
  "key29": "2YL1Xs3tcH38XR2Y5jKZnhu8nYNB6WZbTpVbDCjAfqT1eZ4P885Nfa49YjF2cseXAmeiPv4HwCnMxAB7HKLaqwu1",
  "key30": "5FxP321psz56qMLPQ4hR6CSTEFD5uTdZcEcEgSBYZ97gqH4Ah2iJtFr4hQfchbvRp5PckDTEHmJ3hhAodUxj5xC3"
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
