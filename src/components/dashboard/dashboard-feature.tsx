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
    "3Ro8GbJ9m6tNCyFamZigX8E5ZXrPQZdoN1RDbBXRFsr6H9TgYUZbWTiVJwoBnMdEWG93MsSikSpDRs3A4WKWXJQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TWQ5e6cpMVmPDwvWzEuvSDSqdHJp6ML96ivfTWEciUZqiVCoonS3P4DREpZfigAVdQb4Ju2NuCqr1mWm38No2d5",
  "key1": "SNdBqKqZBVP2weF4xcJMN6Wnrvz1Eg4smAgpiCSmBGvQWUDFLikdrNff3pFG4b611rHpHTMHfC94XrTDHXBs1fB",
  "key2": "HdN9eArnAhCeKKU5vaGcpT4S1NYeq1FW4m4kSQZaRqZMKZCVe4EBUFceoDQbdMttQ64wzeQ4AGAPtDPuarDmadH",
  "key3": "5UKDh4oHEQyk2MAC7uTmMVwmNww2zdkdvK2CSi1E8yiQeTGGuYxymk1iLLdopSfFhi8amNErDSmjFLervHPLCrVZ",
  "key4": "3TyABDEJ3SXZEHGRy72GXM3Y8Pm9uvCAF52D2npz2Ku9DPKhwRno2XW5XTLyx69hydzaEVmSijhtbRDUFkYkVQXb",
  "key5": "1owWeuydp1ThDnXvTrY9YZeiu2qjDi72Ztiq7WMHy8sAy9Ux7P8mdQCXzRDUtDCVzhbXZVXL5xRuCZU1UM4oER1",
  "key6": "QUefa63N69R7VAxxfTsgeFCkYYdZiwTPpUKUcEEUoTpEueqFFMAhHb2ydsqq9Qi5BHrpehPTnoVi8LnfY5kM5Uo",
  "key7": "4xPB47nZRNbtGjkPCnoddxPy73L159MFkw2LesABPKPwH5fUw314xT2oHRsgfrEQ9ruvARkS37au7EFmyHGCMBHe",
  "key8": "QvPApLV2KjwUtQ6E2DVp74fDKA8buJnEbbmZ83AhZVJRwWqg7aFqvV471V9ipuiCsA9dnvQ4H8fAZhq5gKxZ4cM",
  "key9": "3rTWrqb6z2aEKJrRiQ93SGb7KHb8xVDnUmU8w9RWDAVftg9YFcVKfExAjXiM9hvVpKLptcUF8gfW3ayWqgh5w6iA",
  "key10": "5Lq1FgzeGdjwd8w3SSmBZJZ6yREbBgY6XNbJSqKCS9AD1GUF3h8fPvUtz4jtpbcUchggnuNjazut613oPRhcw2K1",
  "key11": "3JJmPNastxoEhCyS77PvifCd4cvTAhgAF5XoKsGWpwayfk4BbRhc1ngB49FDRu1375eM1e9BCzMzEzc426tdu6nH",
  "key12": "66ucez12KxTmT6v1a3baHkWhL8nshyPQAFoakBNV1MRuHnHZmqdWyiZa9J7pQSXc1vunopVNrKeLX3RZ9iVUmf1V",
  "key13": "5GqpGRJgcU7RwBLma8fp77gbgPnh8JhgLdHQFbZNsqxtXXyfNeL7PWhEo9mWbUbWavdHFrNqgAVsSdGG1wpeXVvD",
  "key14": "3c6pszenp6RA2oUrFRerKLc1QHv9SZzTYrESoT3fXWTQRe8oMKsvU5LYQfeXSe9oSQpE1LCPSR6d4eRveyQzogA2",
  "key15": "4WqxAj9KFLx6xhZP3RLjdPjSDUAZgMqdk4niwsJ6UMT6YDS32qxzYc2dBCHk7zCsUN6k9MSGNWYCzTUKLz9ojRQS",
  "key16": "4dj8U2yADPUh4D1Q41GhpfEXsFPCnqNd4XRzCCzTcFS9voqGkV9Xc1bn1WBjJYFvpwWdCRR6fCHoWEtxuS8Z569u",
  "key17": "bwgoK8Husu6bVCc5ULMdq5ptWdJAmTaMfXqWKrNT9NpFGdP6vvDUmHE21e84iozZ3chyUgqK4hTDxBygMJzgjFu",
  "key18": "NZ2te1HGBFwg5bZ6SEpeZwTn6Mw4WXjoSGvquNa24wRaJvaXNfCHoNcEbYXVQiQLXirr5AJshADXVuoPR3hewVc",
  "key19": "qQyDVvbdBttqXnrrBaEgBNSGxmthWaxpfwTCWqWuwSDB2NuoeErApvz6NR9irLUf1B1R5snim6j99Xftd9NwzGs",
  "key20": "3bX54FSnaE8iYFY8dJ6Ukm3fT9nZ9g6K7rT2S1uci4Eb7BfLzrWV7bxi4doGHs3kVRXojoao7XuyJrkYcqwvv6vZ",
  "key21": "A8Q19fkiTbFRRHnehf9RY6mvrYR8duK3njPSamw1RYyqJ3uwt9JBbdqKwHy25EUWtVGi6VEfcw19EXXKZJKDUhD",
  "key22": "41MM9DXpehhtQ4AHYdjPGSaF6UFGHvCu2bHBwEDbR8KZvKCSQWivTbUW6dfVkHovvs15zvMnod9ajahV6jvkpihK",
  "key23": "2jmHbLoDdds6BUGGtvzEK1Kg9BjHePizTknUFRGwEvVDsrWHDzMKYWdVcpGbpqrxvK5MUmKgvDby6d9UqprfyypX",
  "key24": "4w1uvuRYMmAS6WjTE66m5m4W8yvLDyJafrzAxUShkNtfmuFCkNpi7pHBY5XVrump7pFkW6UwMPnFNWmcZ8ydvhtL",
  "key25": "3sgBBhy9dXBFCLW9FGuQ9Ez4BnMkJJhotGvuZXaZ5mXupC3q4DRPjJwQbU4vhHgXx1upe292d94FY4GKZUJPzPB3",
  "key26": "fLKiNfSRENiwvrhg1Fw7wSR3Ur2NNCZekiQUEX6GG3AvZt9YMKTpCx5Lz4QdheCkEPK6Bos2wza3E4PthCZEDqM",
  "key27": "eXQ6Nz5m7SgWnzrdkkn6A6XwZ7CTmcwguwUFKYgzjAP3kWWRAHfzKHtHJFvh4L1YnJmzDXMXaKTSMQK884fiCC5",
  "key28": "3LQzQ9cArGkDHmLqjMLWL8dnTrbecBDFQJF242Ctyft3su9StNCdXzEgTDn73DbVG6pXqjv4ueBPxEVfibdKmyam",
  "key29": "2kJoPrXqgVBHxQBFGhhLzpfH2D6aiEBFdcZtQkjECNkkHXkJu6HZ6AKx9c85oVWx39gwKqyyea9jNozXcZzMHq96",
  "key30": "SnJm599pvfZhRzFjEDTLn3ApTx6r7yWeNqVgqT7SQG6ggf3yx8UoCDKKASnbmAFy8pH5W3tcYDvXwiW5j7o4DDy",
  "key31": "d99U9dMTssZUUkYVSByc8wYJe4eMfC1fHsuGvChVApxqsWCP8mgQcmxN52D5k5LHHAdGq88z4wHyYbyhEJNroKf",
  "key32": "3obSwpnDuZKXw9sjwLNRig5f35SUnsoZTr4thG8CjNzAEEqF7p7wnjFdRHY2ck3cCgUhFUTz7DauMpNfoMGgFPJf",
  "key33": "2pn6tn1xMjsDpBr3PJk2eGHaTR8bkENcs4JuUw2rPPSJqJ3P23g546tXjK8YJdGS9wTobXnQfGduEui1oRfYC3cy",
  "key34": "26RhKj6JQKnRyY5bEKykPFRfy4su5aPtuKDVbCwNCPcMRp2vh2iZ3vn3fUNJ8KNUv4cYrtqD1DmUNAvCB8DC26Q7"
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
