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
    "5aJzK47qUZiq2PK2sPeaqrMkdpiuF6rPjXf78ApcujjPqQsiX9Sv9dZmK42aLwBDSqF853DLnqXeg849YogwyFBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QKgutQ1ykyMdB7HTEWRNx7XC4rXW6stcQKzTGtJAMFvYL8xjZk65kLx6s55s6qkCsRHv6iiLejWFzwAmpoEQ93d",
  "key1": "372oontBmKYM63ZRqB2nF4zrDx8ddE1yQ8YTZLxx63nCD6Wi6bsuC9sYCKguvsfJyLN5txPsgKtS4fWpEmR1A3ad",
  "key2": "2CegcoZtrSF6aMJ9rngEVucLa1WvQUphU3PVrjLJ1BWuu25tWkdGmy3kYcTUZLbARr6fXSHXsLtV7VCAnmfCNQKQ",
  "key3": "289q6FbhEUFZpTsusCFn1Y8TVtVhvaeQ5xZytgu3h47sk81fLY634feGAiAeMxZCketujzFQAatUuddS7v3ti3yr",
  "key4": "RT17X1kMV7HS2AGo2Q78yJ2RuYfGgsxgZjqRsvFp7wWy4Lc1Zd6pCUqXYNQ6uxZ8pbRb5ZTMNcYrJbPPkHYqmy9",
  "key5": "4jfKPtB2QGasQJg3TR32zE37dysMXqJM4bpebpihUuxWPpP7dp4CJPF6bTE6yhQiGNSNWWJVBxgRrf8XHDawLvk",
  "key6": "SR9ieY7bfQtF5CHYhSp72czQRARHc5CnQi41gF1NFjP9jRcF95BP2TB54PXx583iT8k4Yx1XynDyGttEYUFyVKn",
  "key7": "4jJ8fjyUeNoj3x6rsb41uAnAKKGoFXgUfb34Ywvc9YG4Xmq8EihyoEL7UsPMFBVYRKh72XT9zXTjtEsh1oCW5Lg",
  "key8": "3xh3PGnq8YFkdMwA7o1b4KQVLxMKtsMi4Ry7wWcxq4QaW2UhNcgjfNQySN4VxYW1hmdytXsmdpDKtgMGrP82hAMG",
  "key9": "51pndVCRMmLuY9httWaQe5pxSmw1H1MnoFk2JCMWj6i11b1HpYuPdfBbg8DH9a66kb7EnJXHUhEef9utTdZL2hK8",
  "key10": "2nkDFcf27R4GEunQT78nBf8X1sW9ZhxvNNFojdpf7cj15JLeirtaBeFzyychCwrES3sFeEwh5dBVuBRyVF1Xrdfy",
  "key11": "2Jno5rpG2UTfGc7q1wHSR8msY7TVKKRJAUm5T3QEYtDbZyauvALdn2v19tLTBb2aLaZNCkjf1mdtLw3HGiTdTHLc",
  "key12": "3JRFnKHrHd2RhmPMoGjfmR7YYcxpTJvMPViTCaRMEjiwtYdqvkg4ZUW9KLHoXQybgZAEmV4AoC5iq5DSRfCHBZmj",
  "key13": "2gKbK8UprfYrYHwu6FwjquKxfAxymbXNKXXoffDfCVQcVQ6hWPBD2NBaWMqhK7NEdqEKpz3TXv5kXispmuVtP3KD",
  "key14": "5s4ufvVqu18MoxCEoyMPgkAmXz9Dw8YSML4yZkervPAuox7MgYpGX7RXpEoXRDSEkkLHJAVuNdtVogXiS7Cp5BN6",
  "key15": "46SMGqX4tU96KgtcsFHF78uG2DyiruAuJooKm8EbCa8TnsoQ28WEM8RY36E9jkBYfuBwfRDNhrAHBur55eZqsDst",
  "key16": "BnwXyfgJZPew51eiffNhuc2NYTRdr33LR9eGZxwNWKEvHYsCDqtTTH3ccj9yYvJ7vFLpTYLnw6HZujrihTqu8TA",
  "key17": "eQPBR1cbaYC6btvvdj5UTSypNE5fMkFTVz8iR3ZR6ptSMbM36dSaZRdccpacaydyCNheYxAYcLmoQKVqSmF2urG",
  "key18": "4s7ysFfhorsdM916Zv6cXFJwbj9pMk8X47AVJP6LsozrRkzxyp4aATqidfYoCtVaMSsv9R5DeL7WP7xyvh2n9k6z",
  "key19": "3RqLnJrFTDZrmWP81tTQkc49gCWvQtnxM2skyJ7YMYvRtE9AmFyeT7aM5htFvSpNo4YrRkeiF5zDwntxomU4mAWv",
  "key20": "4USZ5FTLAWp4vuL7XhL3Yrq2eNCAgAc5o5NRjih9VBjJNt4xpvy7Bkbymrsoq9byeNGpn6N1QDPZJXnGJwexxMLD",
  "key21": "22A25UfjJHbtqfTCehHqvGJzeYPwnio5H3MNEcQ7YVB7FidJM8KLUyPpMQNsajjJ79aJQqbiKULKJHUMsxtbpJSz",
  "key22": "29iJJjA734rwieW5cYmhJ5wAsu6XsyoTPa6sfqSfXoqx5mBG8Qp3un6YK9yEUCewAp8rexzkJ9Mb5xfyEUSTYh8X",
  "key23": "FP2XxRb1JSSepBcPL2fm7TRdppL2jKXtF8D1c5DB9dogmb6LzTxaLpc1XtUXPdncJ1vHNyxgpiKukkYtSvga42x",
  "key24": "2gYjB7KxtdLu1onVFP2zTdL5KNEUwbSXn1iTGMnHCqHRcUUziqtqw72Ss4Tn3tSMkbPEBQmz2eNrWsFtEgFmGFD6",
  "key25": "57CZXfAdocDiQ33SATFu2G1nhU2rQNvcqMkeXGrMPvbCzb91owfKoEJbSPmDtm1ScNX8Fq3d6R6d4zSL7nrUDEv9",
  "key26": "4r1rJy5f9MUB9QH8DUAjx8Lii2YyXdyNVqM4PTfeSwoCbzVyTdUDGqupyyBYJPqKmaV5uzCGRT2yiC19ggAxEfxC",
  "key27": "3EXqxehmpjYdAKQmY6D3ZFFdLNnpYj5hhfwQR5j6B488aQN6TDx5CYue3knHopg3AACmGoVmVjBW5eRMKwbvdZtU",
  "key28": "4AiPvu2pWKhoSgLvDBdNAvwF9Xg3gS3VDjxjbDEVdn5TCLy5tjUjQiddHZwdJXW3XooHBUgMN2FnEeLv4iHrKpf6",
  "key29": "5gCZn2V5a9Hwud4Zt8tXA13yNAqjFBFG7wPDGTiFxQch5mwKMJKN18SNoHXhe47gYEDTJt93VetgvjSwYvKfcdGX",
  "key30": "sqzPaFrYmpRqAFC4ZrjBEFstZjuRyB88ZuUc3ovDsWaQ1nbQ1vWvZzzsLg98oPZ3d3s7kJCGs5Nf4nmHWmVqort",
  "key31": "5qbsgKAn8Pkbb2xmb7o6zQvUpuVewWtbLa6BTLYsTh2qzZWWvmyvqCR6asVNdb425us2uCHcp76De56MpMrFWn6s",
  "key32": "4dA8GdujuPDfHQKmciRaBXTEJTqKwcWTjzgJN8egnt8JQUzgsBw27Gn9Wwod5nsVojNFH5mg54K5uKFuLHccJr79",
  "key33": "32Lzeo8o68vrTJsWnfwAD6iXLuRkm6aVvTfaxHywZk3kGA9qnkstbSZF12mwD4DdVGz17eDAm1wKj74GgX3v8gm6",
  "key34": "5nF1Zj66gWKECcamzP9Wa64XGfLtrfMpNAo6uQ8xEuWTo7mxaUDQ18rHNwLEoKHTMW7ZTyb3EqwJVp971GFLg886",
  "key35": "HG6dkddzd8PWvy6ykHt4fQd822jTLJx7rV7epoVysZjbGShxTyY9ZXTKAXKh1cBWSpncuGSW7j3yjHLfPSJoazv"
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
