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
    "3wCQufBsZqXocZAzkVXyGNuRM8my3jgZNcfG9EE4xreK9FiCNucbtkHjEbCuxPL3JPt9BUxfobR7Gao8bb6KbJUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pyHgdFh9xjNtTuEEzS22zjKq9zUNhvLJ1fLQJQWLXTroFe5TfNrn3poXJ3DgvwXiST1sVYeivAwWH1s1k7pjHT",
  "key1": "4Z1KcfxYN3AfXdgtfS3SeoFZpr6BKhhkyhxAZCjEWs9TTVjmqKCzrKaBQnQDEG7ujBajWTpVo3NV7MRwf4uC4fUH",
  "key2": "5b7eZymHBX2ZZRiq9ZStZiFFZHXLmXzqjT1wQzB84p28kHb1WpBeAd76FGxz4ihhYUEcwBAFJzfQFbYyAy4p5eNx",
  "key3": "2wCKxDt7LYSMmxornW73v5nm8eVC6GjTCkBFruJXo5vvf9Dk58mVB8voWhZmTEzZnSkEfrzdPbnkK5bjjZCrLUfV",
  "key4": "5xiq5VYMxTrxtfxAztPMemGw6ZvHeXAQCXbGtT459VLJdDhBVG72gxB9oVB9bLuTZbzqB3t3JMNrBYwkUvpARqGq",
  "key5": "4banNWrgQymH3CAGgRiLh7BUmP9pbXoJKP4E2o5UMNVy152ehB5Dc6VmvPFVDSneD6C1mEXxVSysQ4V16Y1n3GaU",
  "key6": "4FNa6aXfu6qYM5SFFRtBpEWq8ZhwxsdiLfiP7Wgq8HBcVyhYjbvtY8NsuXpRcPiZhDoXNL2axiD2JHHJaG35taY1",
  "key7": "46NbN5ch7Jn93tawa8edGDcV1EfM8u33Wd3qxLS1cuhLCW1zCmafYP3r5yqz9pGfYjjZRX2MuY1S8MDjuYws11N2",
  "key8": "GMn3LRcG1Pg6Vt6ByRNP1fPEZfMY6BuiFJxSeWGACw57KoBZF6Xe2csNUthsrVxzT7FKCAeDPYWMhxo2yPHMAJJ",
  "key9": "5fF9EhHMjcQcbK4feaxHxe1RUUJC1Rq9Apo6Mmme8nHE2Zh2BUBAsVJh9bkpp4xSNBgJC6tY7a487QB6xZdiqGpu",
  "key10": "4M7Rwfqj1HMjCoc9nHSDARw6cBYYW1eWQXANX1knUWXyfUXGwzwMxiG9T72s4YSXVVoQteFStqjWZiZHPqRvZ5Aq",
  "key11": "4mTgnuxTdCLqgNr8nzvWT7aKAAXj9XZh751f53wVgu2GyAQ5Pu5dTvxttN1XR2p3tdc8edQiugCqvQ5hpfjBZNMj",
  "key12": "4n75mvJdzjjTxCxq5BQ4YweisQLJmdkhg8vPXUAcJgJkLGtgVJsH9eugqsTAPaC2UBkdtehFLHYBUqCseDUQcaqJ",
  "key13": "2ZzHDsZxuxZZ4fCdLnEU6dEJUH8YE8JG8wKPWtjFBHWwGGVBsbWPdtJ8Hk249FD54dCK6qYSfYZFt7MTkCigeazS",
  "key14": "5vLdLSeuEDPGPu227U3pKA8U9CPpGgAbmpCUj4K93aHz6JLeNbuTfJJ56EVvxkBAdQfUxUaYbe2At1eHmKmFw4gn",
  "key15": "5SEAUm6qn2qYgGHX6XATC7CUjbUHFpDuwZRXiJKnG5DsWoaQDubRpFXP5PecpvdcBQYHwUWbrs1Uu4NhzNCd7c77",
  "key16": "45HhPviqWmVi7MZNF7UAmpCoNAAVGguryuTmzCJLR2mVWbBVGwpAxFe8QSFwchSi9FEuL5MYrumxTrK33YrnogF5",
  "key17": "4pe3QtgZK39mE6WoNxHJoeoyehLSUskjZUKKistfXE33sjZpyHLh5FVhDbGhM36zBsLvVH2jLHS5pG7sBvFAeyjy",
  "key18": "4oAhcggPvsTyZ5zoS5rfSki1esuEERMPB14jMkoSPDBiZ142E7etTEB3WH5tpxnbCBwCEhjXmQLBFSAVT4kSAfPu",
  "key19": "3hqGJFdrDQGv5jQL5nL9sGqf1AU5jGqx6PgBBjoP2tQJXNtVPSfa7YLgz4GbjcGpffCWc57krYnM9eiu6wj3t5ZN",
  "key20": "5Va4awc3Yvne6RWCW3NHLF2wD2YsVBRDBDa518y1J5yTotrPmK5yUkzZc4b3GfcamxBToMDQc1YbbpYKi5z5FyAw",
  "key21": "3XXVE8NFd2Po24rgWgnt2wjq8eCBM7WKtawn4rd1D6WAD9YX5VbhCG9JfsZup2Wyzt4A94aq6xFzAY4quzA1tWwa",
  "key22": "3xdmATsUuZfMa3mp8vnPDp2q41AD7gqTEouat3WEttNzVYnDhDVWMZzminHe8bv3eF1h8FHTgiymtv7Jz16eRPfr",
  "key23": "5f7ghQM4W2aBtDCCjqtb4nLzNyxZdmKXRybdmVNm9A696hDpG7WFJ7pbN5G4Q6obwea9hZic1bf2Hob9jigmoGbk",
  "key24": "5CDZBcEsG6aaT5p6GsZ9bmmEsCFN7Q52BiMz7uYEnpvK5wQURmKpjNwP654sxLLEQtxdvHegv3eTbS78Yy5hnDKH",
  "key25": "yRUZnfUBnfkGVLGeTV1Ez1pPbcfjQm2Nc3yx7eUfiBrLjcWZmC7G78xqg61XikfLbsHoaDFNh4mZjX9aQTGZzP6",
  "key26": "3knpcUQbcBpAoWkpoVbUXtmuAxjXMjQ4YBdu4rFSpLSc6h5nojvRHo25QixWoEpZpLSmik3NXfQRSUuhTkWYozYa",
  "key27": "5nPM7CmAegUwArzqzx9uh5yioioEYVfCeFxD8BGjpnTPrGWZJghSeEY1WNRvyC5wa9jSNAdajD6eRMJnGd25TW5A",
  "key28": "2yBugzfBJBt9St3M8bBB3roqYpFVqsWvAY8WP9ZaowbrSAFQ7US8iAqHFg8Q8BeTKYRynNziymZDmRtQ43CamfVJ",
  "key29": "4gfyuKLDmHQUsJ8tJeoG1G439UBMbsSokMMNYy1xFh2C3v3AkcvHXj7ayVLFTphPBTK6eC9s8R4VwgPJiPynNdTL",
  "key30": "4XSpmttUj2KvTmpcTYimJVdwKTUiF7hgiwDa77STxTnbEUhHuAfnKaRbtNTtP2yqo4u3Nm4CtpsoJayZ2tNdWgQ5"
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
