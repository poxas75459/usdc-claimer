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
    "5tiXZkGa9DJ8y7fcP5obje7qcPuJDbSxoPRLfKaABLM4ejrwvgepJriGP1dW2xsMAEnQwPBmVVEm6fTyMMipU5hH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gP4pgHAxZRAbs9CKa5qEn7G1zaWtFgYYpyhtUPohdTjkWMRPh6YjoLepaDALkmsTfNN1cCpbHSVCJcbZ38x8QAT",
  "key1": "2FVztnC5PNC7siSXz3z2GGNj59iz8fU21RcYHoXNGfkyDq54jX21oABZu6r3wM7L2y9zTXihpcxSo952HNM4YDba",
  "key2": "xn1yhXhP6eW5giRNo93goYXpqqNr2TUNrf92owRo93n93sbkUGPGRGakBEaXcwKakQLM62E4AxGqAuYXEQ8XfDw",
  "key3": "32CVU2T89HaBMNTWupWonurdXSwtYJrTqkhjKcmSqzVcd3uAsmcvoSkNAZt6nFGqBreiaeZ1Nrxi6XMEbHCJKrSH",
  "key4": "3KUCd2qSwp6Cp6jGVuiga91oXg165iT4DYi2As9o8eFHHPTJXgSpNQb9HaPwUBeWcGFCXfhcFX2DkyQfXMSvu4TL",
  "key5": "3Nseaq3YkMhAm7LFymVmp9Nbm1UEDQBcuU4rWNy5FT3UWxf6s7rXsyZaoyTNN84uUvse64QCF8VLxQGSNJRpTcXZ",
  "key6": "3RDo3dF3sWz4cd5eF1ctbUJy1HeBrAdn4khhqKxp15NA8pvmBSUqYi2vZvgALTM8VrnfiwiwxHasq1B5QZBdNoMK",
  "key7": "59YdZAo8xMK2tEfMssETpBdFfhTRvkXBe6mgxbUQHrkJMUNpjXosf5DZZvtg9PQ1BoKpQ4Vfr6dyEBHWfVPu7gfs",
  "key8": "4zdQvU5htWtCV16NQpBCLKhX7vagfirPHvnJm5njsXkhiebZibiMHqAs37Tnp73HFVpzToJtnXvdij2MZdAbnY8m",
  "key9": "2GKbYT9VAC9nZaJghjq2UYkkUWbagZ8LUM3zxpcBN8soDhrPvMo9LX3Ye4bu3AwRod3XMDApcekWyjPmquGASTmD",
  "key10": "2LDZULhsJFAeyd1SRKm8ohUw5Cx2MGBKxypHo1C3Gi1rqxVFz2guo9Hd1JnvAGLr4PSh7iUQrMSbfKg8xki3h7JL",
  "key11": "592NF5TgG4vuDC8e6p859bj2r65ioLTmn9NJT71Wew9gn9EyFxjgqGAnwud9fWCkg1VUZGWBHKRwfYMrHHXgZPM7",
  "key12": "4NAezPeSbSXjU9iV9LevBDWsxkJQ8iZatMwrcGf7qF9pU89US3QyUmMaxjpKm94XJEbPoDcqPB5z9WKdhA7a8s7K",
  "key13": "XDyr1Fxgfrnz6Bk42tPSesHzZbBzXBzoAhNRrkm9RFYE3BSG5KSnjgimTQHwGP8ipDZGhuVRjcB9N75CNK6wexq",
  "key14": "R2ounBHyWMnFSkCUhh9MnAFCBnr9mZGzyXZHftqo84QcBtBjiew1eU3LTq5HioCpBPMPtFtDE8gEZhcBSABn6fZ",
  "key15": "5y55eAryjkSnXR6uQZQtKttGuE7D2gLETb8H7NwZdA8Zd9JtNFKRm3rrcdm13AuGPRT3wamgzjoxYpqVvGfMe1Me",
  "key16": "42AQdRNCV63naQP6KZubCupMhe7u1BYQ7s6qrQHX5oR7xKkVjAC7GAwkxLsaffJmw1Mbx5Agpk3ZPZFn95SGAEqL",
  "key17": "42w3rru9AgA9npVHCwkuicp7ssr5DcbErea2Gmtpuk2Jcu1TzjUrSbfYsQQzSBajQZGsyu4nFzNCaxS5ESySc5vq",
  "key18": "5Xao75GcyJF2GP22dh9AYs8Ag9iPqTkfU3itJUdSbPogxCVL2vHjS6Tar4KRatUiUVRqLE8fngjhYaPNkcPuALwu",
  "key19": "re9CTG6Xnti63Zsd2TFmt2j4oVL4jLFnhYY7kMgsUNyqftby3ZrY2BNMCVHpJPaUfCnxTrJ4kBhWWVWwNBubYqd",
  "key20": "XnEjSoRvYNUuZc8LqtQJv8ZqXCQsJEchUGsKeKnPuwvQhTNeKtVigepEYiLD8FEiB4aApWFXznb21zSyZwL7YkL",
  "key21": "3xHCSP6DnbEiJDn1wQajtP35X4s36D5KLUSzQthUAEg58fnr63EwKeFsHhF93ZhxnxGfrNHRwnofDwRLh9BkkgXG",
  "key22": "2WukaSWrwLt5JaVTDNmSncv5T5pcSTNDANVuh4ynjwQSHX8c5gaA5ZcP3k7twce8e3uggu4gm19fH7FWrpd1Y5WD",
  "key23": "47qGmV35ehudtqEGZSoMFu6zHWu21jWxnCJabJu1wTV9fu9kb8og1pnnopJbeD9xtr4QYwsSm77Q3U8mEfcEfzxa",
  "key24": "5vpetXN4ac72KBrsdD84oNY4mGv6DXznmzRW23tEEi523SP3o7agGFbKMgNh1JgNqbomnUvHyXCHajP3z3qeKR6h",
  "key25": "3Tedv7E151iYcgY1a3eYqLHe8APFSx3MjX7u6vnRV5mcuim1dbzAAyrDthpv8uRyHKxYK7qLNWUm2dvKsr5CfQMk",
  "key26": "5DzNBzEjAyTRSZ6mQJPgnhVrBsH7sLrAYSdjhUKcrrnN4GCw2KGztewMTsPnDvx62zUEfRBsY5xfrbgtwgnMHN1h",
  "key27": "nag8GgJ1mk7sAbZMPwsWB38A5tovDBdMqiw8JGnj8oYHNgejUVviLzCPbeFzHxEB1NYG3cm292QAf9UQfmnq5Wc",
  "key28": "26Gi2ijLF7ZR7wPpnVLqtDUAwdrV2VfwmU1ayCUhov7o6ECmHgbrdXDJfRbyzZWy5uPKHKn21gdFCRqVgcBCztRL",
  "key29": "5gvr1U3pWqnCp1mQQdGh95UVPojCJC81C16xUXXUhrvyN2xuQ185ADYbJFfbtjxWsrJwQ2avJRoWQwYt5VcYTWPu",
  "key30": "614adVw3hdgTE1WHvoNHLigzUr5WTsnALyGkzgfVy8jey3cEBBjNEv3hW83Em8sKHFY8GC94fnFQsaDNgVgmkLEE"
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
