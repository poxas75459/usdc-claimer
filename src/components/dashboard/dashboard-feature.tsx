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
    "bkKanvRhXYB2Su5c9P51hAvVCqDJJtUTYHdi6fZJBUMyigUtjqxJyXnXWprRyBfsxmASSDDtP4yEt4fyhnimUMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56AMJK9G8VvcTsH2ksugYN2jHfa9ke8fD97qnMiMHcGHrpjNrSNX3SrRZDCb8YUPzQfsfcRjPis9EgA5c67wD7FL",
  "key1": "3eNTWfPsXzoLLM3J7YAa1XZBXtLHd3VWdcK7MQ9pVXGJbXkR5WvKAgQx2fc3zGTUQ68hhXRH5Gi12aCJUrWWB1vr",
  "key2": "4639SNDWfobLJSruoBBfuKtFoxtZSfmtjzSCYvtnMVgJvGEBk7fBsKF83u8acCvrMM4xxEitV3Ex28dUCWJiazWw",
  "key3": "sNnyMDiwMBNFa96CHbbiAbYF6nUKApGGidCWFWSSY2vTTKi5JJHXpgUi1Co3Go9DapKByvZfrVEDSrxWsdzbarx",
  "key4": "62LushJoejR2ZKXgvEuiT8gaYfkfRawTvYEDyTCGQuxpdpzDPyT97ADctVJxSiRgxfCb7epvzAruQi11y8eY92Lw",
  "key5": "4MbcxBShsHVe43KFPRadN7qrDFH8m41PN5H7BXyJiMnPGymmMkxiwmLxV8p7scDh6pDENMWKiY8kqmyH3fu4Nk42",
  "key6": "3FCwxA6bf2kUPHi1FzUDQ7ebik84CwxCtT7DPkTiqeRzTESnAxbri1MkHDfFUr5mbagLQ2jDEaV8nipvLFdbGJJ",
  "key7": "2QR82abU4jBbLJYeCRgWeSr4HKEeE8zCkBRWf2qSYjWBNGR4pwbkNNCCm5xb8nsjT9WLEGP35RKjx9Js6FSUcAHV",
  "key8": "3XXrf7f2vuy7zPdYSBUkmTXZSK43e7wi4yLD3tUfEBQjWbYxBUE42jHS18CHgvbrwxcNRZGPGRjh15iJvC56zehE",
  "key9": "5zFhkgxkd9BExyLwZY9X5FZz7RyJT6qQnCSpFUWoLGDSvFfV668LmCbCc8fssn2b1SjQR7vEW96HupKNgRedndq4",
  "key10": "64DpyqWWbsTwPSamkxuqT4XUNobtsUVMCBuW6NRqEJMfdiHSTCxq8d9WTCWPgreeeTTJZFuhUHHqvkLnsLoqPkYM",
  "key11": "4YLkioGQt8vPzqG9vg2Dj6tbhifnpGxfZbSxwCep8xBWYSWgCDZNdMo1NQtM11ym4QrbZUMzZ1XQDP4bsYWeJT1b",
  "key12": "3WTqXbiSv9gCR5JRT5rnT3JmCfbpb6bCm9hR9J29x8SDpm4vfG8M1G74AFxunyrzf9EWzyaCoav9AXSyAgh8QJzY",
  "key13": "8BBTsAxL3v5gJSkorgRcUie3aFS54MDjhi4BeGPjpxvxF2K7K5oTKyJ2Tdawr5j7C88YRXmMEvUfHQS9hcZw6Ed",
  "key14": "1PduN4eKe5Gb6tQu5UFDMpXgrzWZtC5c9FnDmynbgqU7WuBySuTRN1ACGqJzPqSvfEz7zk5VNv6iRwZuTC3AuHq",
  "key15": "21vrPpA4HNi7oQcpXrXeFQT1YGUNmCe21MjsqkKniSmepy1hMyxN1kntztfDXKzGEnRw3WRuVryuKPLzYq2mFVXn",
  "key16": "ifvciLetYYx1pgpWxLDqXov7damw11ZXVDxBeNmfaMRHw82LbvtRfzSY5LbojSxDnyKrzwgBpBziMHY7T5ZmboD",
  "key17": "ya66XYnmA4C86oLp4qxsSswcKCa3BxKMj3WyDptuLoVDnxeEWJ9DnUykZoKxQ1T6PgUpATiAr74e4xePYcQ4CK4",
  "key18": "5dcDe3rBR13QuQCV2dK8d9nWf4hGc5uyNKuy4vVrYu9e65WedV2G8QjViMTkadrQF1dR35pTqWU4A6ecdQL4opNk",
  "key19": "31GYkJfyYRFZigGa1vfUMBUWZyjUCgFDbT3wPKLYY8DaaA3nfeFnrKJmUGZdJbcf3x7w7oQgacu8VNFZAMYodCs",
  "key20": "psM12r7joyxdoxejfQajUEnRFMdfuVtsojipdCoWKdcw9skhwK4M4eT3UoW1TPreiuU9sVT5hLTr26uGWuWqJSa",
  "key21": "477qxdAwbKeHfHavWoEhNPitnk6x9G6Py6m1K8Kpd7k2PLyd8HKzPU2rBiBd4g7bdAEPYbBJWu7ie6TCQVaV2DiM",
  "key22": "JRCihwQoPWPvbZCwuCLLAeszHW8VK2hGdEnkd81yrpQM9gyaZrpgS63zL4S1KCeWYLCzqmEhf2euXKou7evbPMF",
  "key23": "3yD7ctRyrMFNTqWvHyTq1fhRvuPJ9KFBcJuqNTZHdGVRRLUcbZVM9RNXqrVMNBTExPJ8YjGnPBhpd82pMR5rHqE4",
  "key24": "LyCvezvSyXamFK9mHrpsPTV521FvXiMGHC787FoZKjsTi4SYLct9p4X9W9xDDuJXsfyDw5ZohngmEBaZGVoVRX9",
  "key25": "5PSStskV7JTRjrnc1VnN6ZKEhuDoyVwzydxBg4k1kxhstELgeitr6oE5xviSuuBpgvdxmP8br13RBWRzb3E6aEpY"
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
