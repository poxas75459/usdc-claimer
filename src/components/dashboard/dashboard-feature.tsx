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
    "51RXMzedMqe44EqsSaEeVu6xZVvFbyGbndi8Gv8qsZuJ4djoCg2BEyQfjok2L7VfrQFpeePQmQHxgiBRgMPA8CLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7H3MSsQ7p4LxbmcukwJ3nsk3V4t28mXLisSsnQH29iWE4nP8NVVPrRnUZb6LMfEkywFEtaZjtgBbQsPyBp25v3G",
  "key1": "4V9bQfN2yQwhcQBvuFRegsj5Z1nrX8a2uNb2d2xj9A8xqTSCA9Xd721osMFVBrrbrFxmALmNjvGDWUXrbAnxhLb3",
  "key2": "y7EVPgNSYLfBLBJdgyawT8nchkJDpCoByND56AbBB7pNLeB6soJoX6vqHFmnw3kArSLdW56aYhBKqog9uBk2n41",
  "key3": "3LwTDcsirJCCdNhgg3HDoZmbgtF5e6f6KnP4ZT2hX3iVMuoFhgn8iTJfTUSe9geuzhKxY8aaiEWqeEvyFecaed4P",
  "key4": "4H6pLmoqVhgCzc9MhP3Jgie1uqGRCZiftfTjkAMxsbVixM7cgCDD38PkM6Dr7bM9K1g8csk32CsTVsYst1J7Lkvk",
  "key5": "5WKaN8wYnKwonoYob5a8Z8zRp1aqQTvg2WnGXV7qDxbTojaJybDSn5zHwGu9KuN6TY7sqQqt1arEUcWjMruBPrLN",
  "key6": "3yCM94gSSUjzZ9W7k2zBGYWbi48rAgQwvnbP8ffkFQrPA4yYzTyGdjPJNLHim6idG3VRNRUYA3egr37iuPBbuQYy",
  "key7": "5pBXnzJvne5RqpLwNxmbkJDqCALeQM4d9C2b1ayWkhKYkFxWu5ajXZEaaqdJdpBiQQxRFv7ujtiy3ZwHFMCnFJ7C",
  "key8": "2BWEswszUbymNqTnNA8Hyq8MUKCst8eZsmn9rV8hp2pZvL6n5DgWA2MK6pniGTf5dRPsRAXFkJBNyAsTL25puTxb",
  "key9": "5SpN4eduBRisKjkTRsdH6YNZwWMgaCcV5Fa8aGt3mEWsE5beeMfasfkVGzLczfKSsGvrwbcNmuh4Eg5pbcVL6Bzh",
  "key10": "4zjkLULzGMFgv7Tyn5ceQB5E1RzmeMBzDwyEmf6a9s2HFALr5PEwrAnpiH7RrcYw81onhf6WMTJGvkFkc5c7jTnt",
  "key11": "4ZaAUM3X3pxUfUTGTYe3xvD68R2xjbFCHNmCR8xXxUF2MLDP4auedF3fMTGBkA7Fg7AufF2yG6vYRUvnyRN4depT",
  "key12": "L8Tr25YV8qMA2AbhWhgt2UeTQx22vmAq5h69uKezdxtx6y4BnhH6gEgquvXr9h91QBW3BA8fWb3V7yoXRfEvqD4",
  "key13": "NF9WJdYRBHjCX5espbG3iNe8TQdh6YR81KW83ckpvbxY5fygHt7n7jgXxjjmBbqcDe7RvYtbbceqEsD32xn7jYC",
  "key14": "5SCSofK7N2Rx92fnJuLnGiDw55EDiPz2MXQTPBeWRLriwD3rUa8hjxk41mvwZZi6FWZQn48Ek5wrWb7wCPJWgyZ",
  "key15": "5TEBigsKreJghvJmyxZMKyz5upPxL4ReE8niMqT2oAC1ZNEopW38Lr7sfg1HTHBsztQig7mG3SseCLrwXPrdB5oe",
  "key16": "23DobkLhSL9QKtkp9dP2963aBoA4HU6mkuYmDY2gsZ7rfkrcZVTZgUCjdw7dc4zPCED12eey5798vTKgPs5y8QsS",
  "key17": "jMntcoHifRMkta51YdRf6wBVew6jcGEJfVDRfyAiaFMvk9VRHqfUQoPUT5g84A5DVL37RiUoBwK8GDEjcQTi9qU",
  "key18": "2EmT8zihfCabZeruxvYLTJceLavnk4gtjMFhrmDjGt7ELycpZ9R2HreB7buWyzGL7DazuNVy8LqYPqP3kZHQM48x",
  "key19": "33NesKoVsvo8KksZHZ4cKMcMaiNnELz4my7uX5jTz5fuXvLcmN6q4H8Wo9nNj39cP9bEdrqytRqJsowEUTj3HcXG",
  "key20": "4j2R9T55ESvussHdKLMW3HYGgZBrv5hsiJf96r6WWTEtc1F4mMhHL6Hsng8ZXdmSBHo3zXQWH4pPibbT5bAZKNou",
  "key21": "2BQbd4vTUm7Yesg227MPR5TfFkNJRptA3PaP1dKP3HYxv7X2Da87FZpfvRtFnSYjfDX1feroE7eD8iFDEAndW8hV",
  "key22": "2XSncmTQ4uX26XKBvzwC7ZJi8RZZxqC8ya5eispqt2AbcyiYKuGt3eAEh7ApaGLPf3FpUWnq6WHPUuw9K7kN93Wj",
  "key23": "4ibeo9NwcbLMv8Bu3sPUhuzYixEVTf1f4tVWPjYrTMh9yPy4D9axusvvNMjSLzvJr4Bq74rJgTTjuWAGqPqjYoXG",
  "key24": "4wo9gPeKVKrHAMUGxbN3z6bzwTVozhesSYDgZRaSQG2zdERfS7waH879RvnuqE2c94Kwan9Av7iWfvzmtJbDoj2p",
  "key25": "FAoP2u8LNpFCLPbQ5jGEha6dTyyQiRdfVYtQDFG9ruSXaKq9cMw6TtdLwVd28KGkPhPTrodTXWSSLGwch7udaMJ",
  "key26": "8kkyr4NQbVCNrVSj2G2V5Xtgns3FHT6K6wB5HLrW2TpuDfD56yDPAVA6ZJovVtXeyzZFxLdDe9PGQ1yqMycvDbf",
  "key27": "5UyBcxZKaTJxmbwV32CAtF5XbeFsRj1PbmLCBgZnikBF1ugdkZYL1yMoR1TwYd8ifBpP1tMA6xscnbypzyyjzdF4",
  "key28": "4xTXAxZ8VdH9Dv3LnuroPAg5qtBHZRPtc4ssgymA9Xfdkqb9Fjzx97WviRk5jfgGDcWMdWrRw619tx1YpUN4e7wZ",
  "key29": "2y1ta8Bh85jUBKDFqfKXeKY5ZgHtxgWeMdDycPQeedpXBrBMoWKLcabQEzvuiZy6xxiXTSmaqyoNfmXXrPt1uqCy",
  "key30": "Mnj9oTavQSWzfjpgSLFa4YGAJaiunKVYuDy38VgP4oWf5scjCA2B1bb7PGFSEVsWTr1bLxsLJqH6qnPLvGDeWaJ"
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
