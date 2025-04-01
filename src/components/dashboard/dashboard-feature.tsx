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
    "2h2QpWJwLiiwNNiEvvB8aY1jXLDSZi8hBhfFeu4PaWQuYwP9LkViGm2c8gEYHAECVGLH3jLTA2jyDsVcS9AYZAsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yjRC2XA6gV3vvxjXvTDj1UkMAhHtZpHbnKMPWtFJyZHVanANWa7EhF8UCKq7Z2fPvPm92W67raXpuaXMbvpsQya",
  "key1": "2AJaz8iA7r63ojcGMQa1m7CQDSkcnAUYaNPkTbxuauaCP5UDrPP5NAu2Lvst9T7YRLHvCZFgJRuLJBjX17gSXByn",
  "key2": "gbDmiQV98AZqRCpmbEwSLBxQHheAwbERozhoq494P12sBdsnG8PQuosM1pCY17UKoXEqRwsufT2qvS7kbcjFLrn",
  "key3": "2McVoaKnCyxR9b8hZrnrmDe3qKZYkhTE5GXyFNY2Ab8yEeRcHK8zX4mZe2mBb4JQ6CpD13b17TKLrEGogddgXnDs",
  "key4": "3wgkraLmDUUkZ1dtrQ6SkWod67pseBz8dpGSWKKzdG23nuCRz9hfvbvpawkf9vefVwyfEDqv82KjqeNk5qKPUa45",
  "key5": "63wqy6w37oNRUNkkswskQHW1XqgdUazC3wgEYfcteKFDvXbgLVGVwuTYH7ckh6XHZ5jabNRUpw4uSwMrhUDZUFgN",
  "key6": "5sGG9csbVwR8kadMypN5gbuhjYTkevrKfn498BY1JEtybMWcges6JXe4wJGkvpwrp2HobnTvvXMezpMdaMy9kw9s",
  "key7": "4iSf9HAcqRNGaJnvYTE8UTArRXPuPCDNwkExtiN2YSmPDsTxpkoWUmZQyNk3YKnu78PpeZkbJ2NY6sTqJ6fLb48t",
  "key8": "26aaJp4XbgS7u7sUJVb6ZcngFJPU1qT7D1ixrtsTrH6yJYU7fSimq82xzSKp3grrd4xsqV6TzGzvQP9sMdsLP9D9",
  "key9": "5Yt5Fh3FXtFQp6VMxDADwxaZ6ZhLHp7bQbh1TNtmkgicHjWjCiD3UfittHEpYLaxZHncH7X9kZoNpC129vK9S1r6",
  "key10": "2Dt3WDczGNzdXiaZkdfHX9NCqqnAYe5RFHC2GuvN3fQZT6dcCmL4RfqwuLuCu3JbVWjAvyi33BGAuyTzjxwVhUbr",
  "key11": "3UWXJ7S1f8k5LTfJmBW9wZfdPCzSgBFa3GSaKGNZ2VmF2m18ofqLvhoZQ9V2sGNLdbTMXGWHAtmi7bMaq86eDgck",
  "key12": "6gP5c2Uthi4gCwoRDxr4pxHNAizRkX3E9ZKtbXq1iSAfiDs1jbje7rYLby6q3kiUWmVdqVTQfDa3XpTQc4P4XkL",
  "key13": "3zh12bHM9Dgv8XVrSjwQnPTWdL1sQKL2zeiN3kkiGA7EpoZsktGb5f6Gvk5VgKNSYiS5DkJbdAanZ9rwtcZuNsUK",
  "key14": "53SJmHzFz2xmjsyp94m7jdfvgwYNpFepiW9M537FLq29Q6Lvqw1D9PsVCKw2NqnyL4UWzDEZsEvaeWyFbkvcC2kb",
  "key15": "42ZyttVnDvtP8SuiNLGNvSroYHSr7ZP7x1efSUmdLZVqqgog3QHwNaFpotruP2uVjTigxNW5FRnYZNMXgyBxwxi5",
  "key16": "2gFHhQxdECFxVRB6ryvwUZHFEiexnbRybb71MjTD7qnN83LiMAPvY3VdBQexzJy4Yd1xCEXiRagt5KV3WPFU9WLh",
  "key17": "5uWYDn6gJW4KP7EPgg2ZNz688TrXJzwtka92GhpCHYCEZTWqrLXrp9MHKj8Q5xpurRdGDwXcq82KrGHjAykWtxs4",
  "key18": "kR3g1r4nzHfBhFfDtUPvihKYwNCuVRKB1mYcbJj7Pw25efAnGZHtHeiTyL67SuW9Vo1zsUMw9ZrkBFtdzsJPfTg",
  "key19": "4HwtASaEEUoxAiQUGP62oALkhJj8KM4ZUmvHsN2QYj8aTfePigQMzikk43VWQhtovfwbFf5PSGUJabMaNgUxQhcT",
  "key20": "rYZevkqZqjiUayWji2Lb3gPvWXcZQUhxueiLAexSPSLVimb6NPrQmZZ7uqfjJXunpyReDGuft5fwyF7iNNN6ooi",
  "key21": "sSCBv6YWbbjjc61n9AQvW5PK8tvmGtzCNMDpZ5P5WcyyCeKFYsa3wnpDuGFgq6DW1eVxbRSAUcXsmCtSpP8hDEh",
  "key22": "37b52NYJALqT2iyN4qcjveVsFQPuFN4TS4cYn2s3Ht5LYsjdJqBDvThsygiidrPEnZWgPgPvHy4z1Y7ijrBoFpEB",
  "key23": "3qbg4MRtx9RkT1fsvpmHYEMccs7rXnE614qjVTVpivakYKUwkij1fKbAGJxngfSaueNmTBmQqmD4tjSE214nXXpn",
  "key24": "1wA2DQGwts4B7qTTZoRdbRZGZXExZjS6jxjg4aA6Hj64KZbZpQoP99RPfnc1qgTWDcqbEwH1nu4GssXhVbkirrP",
  "key25": "5sVWBFMQkPaqYZD9YEN574PboZhAf773asd6QYsUxj7nCFYyve6w9S5mM5TBiT9ex8DXc6Kk9oqGtJDwWP4grgA2",
  "key26": "2dE5tkgSbz2Gtc6p2uynJCyF5JtzHGwDfnc7qpuSAFq2M22y4pHhPdjtL2buKPUc9V4tZeYHr5hCntGMwzew6DaJ",
  "key27": "2V9fAjS6A8dXJEWhuybz8KQnJMHsTZa2V4i1kCpBoLgwho8n8Ag7jB6HPpMAh8vSxAjWXHrP7SLa2UZi3wggmtTK",
  "key28": "5pgkzAQsyKTnv5XFShggX12tt6xjSnVT67KywcHwZAqUuXXxe2MoTYKvBUDPXPHDr8iVNdnJHzMLHqAeXLKjbhLi",
  "key29": "53zsJZz95jX7E3BAfas2PewGtDtYXjZpc6x615533f6m8swqA3sPQpC6UGkb4GVQSX5bHH4zN3vcAP3aEbG5V31q",
  "key30": "4NfBCFPGFnJA8VpLfjd8iQ7Hw2MudfZfgASMxkNZeo7FijhfaAKgSfCTy7oqC7G3NQoufFSXZJZ8JABEMdAy63ns",
  "key31": "RFApGq8frxg4Ut7GQiDJRf93HGQ4HJsME8EcqScXJAuooYkmDSyHtTE1LnVWfMvGyBDm5C7FHXy8sbVrnrnqVSP",
  "key32": "4DYgBErRDLNUda9RCGdKJTq6CaNQraTNcpBnD7mu2dLU1nKasqcSt25gZVmwbeRdvn5UN1BMastat719mPVDFJN3",
  "key33": "vE3pYhN5vWM1qwaBRhQFFVNuv51Y3G587oomVk7okgsMYw3ybNcRjLb6p8F4XH6KWpvTXbDZQHfZYkYVqxwtcxy",
  "key34": "8iesdMt35Jpqdqa87vhzoJZvFz2shWzQLHh9MYngzHhp1CUKzyCt3yGS84Zyuw5uQ5H8pAcEo79QksVv8NtTn8n",
  "key35": "3kW2okVpwCWhAGgq95RnAP9UADSH93wCAHTBwXnefyVPRDteKXo7egWVnYAhK5DNZMf8L13UDNdk5yjfvtBCh9SU",
  "key36": "4rkLACEz448JKpL2Mkr7Sq2KVkC3cwMyiUM7qUExGDtbwzsF7QTroXxe3o5Mx36NrAbRLoH441phhTqccsGjrgzJ",
  "key37": "5zLWi1Z4Toe54NKwJumuu6zAkBVDqYGkD8nXysrGix9WGAJiBkafPaaa5Fp16rM4XN4X2wPM3KqcbFaArdph8eg8"
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
