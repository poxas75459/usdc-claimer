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
    "2J1dgDkzEP3Ne6kdn5DtuYhntjmkjz58TqqxSnCHXCiH8thmzH49A56rUREav8oVzXcJWBES5i36B43U3KUPoz6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xH7KLXoTUSZL5ZZ75tUsTVBFwQeCVCYEXuDiowyTxDk6ZqUJfR61PCbRgANbChaxApE5XyzTo89AdY43SmikMPg",
  "key1": "eaHHhBKj5VWFzcwxCNdE214UejTavZ9qj4DZWfnx2E6HQ1Bk1GDYFxhmU4qSXomutV1tghpNgBdRJ7dKKPEDVwP",
  "key2": "383EYP3sg76W41WJ7cgP4uHPEKwnst4VXaAWgR9WPpWMLRGM4mYqCyxw76bDQfSVrEPcHCzRfGDVKWYQWWKzRC3C",
  "key3": "3W2XmSv5rPSTwriiFZhQ9Ht4EUi4qEG9H6naeu49aVjtUSRFRNbmQPrEyifxVAC4HdYZq6LwdbYxH1PfdvUPcmt4",
  "key4": "2NPXitygYuKwrc2qPpuJupg5k2hCHpXwnUNriMQjUPtARKGmL8XjrkbCG5Q8hq1tYENLAuvKm9AMPDZiaXD6491r",
  "key5": "2Vi42cfKwYoqVPYn6XtPmjYjATjq1s86FZHne1BjsiRRcx3Bn1XdC2gdhky1BccG2QBYw2YaVw6bUJRB5XRkuSeF",
  "key6": "5YYnjm8tgMNhKfqWFUDzSWKk2wen1fhVkMH1oUaQpBHtPdBF6DmsyGqDQu7YxkjGheAbvRDnoeyijkcAmDBENcj1",
  "key7": "5mthfS6ZdRUFJv2ft7CYvVEQgiXxoDkoga9M29fKzBVBoeg3UwirREUivp3dwFJr5Rg9ASLXMF3hA6Z1AUWCg4ag",
  "key8": "3RvCSvYBLohD6GDuj3R7xTSBW14Lo4LFmzVeW2vSS3c74LbtLhEjw9kywtHCAz3XjCU5VXub9DVB1gbKKXyMPn25",
  "key9": "4M9dTjwpTFtBHFsBJWHDzfVEjWFx1ABFAxnzr66DZK8ixQPFeTecpjQp56dpBqnhpRHbPoLGuioQvVMUMjf2BpJ9",
  "key10": "3cmattnoiHe68guAxBczKAek4JZhF9gfTy8H955ptirGYdNnGHvW1RJkbwPDtinFUA8HTEdyLFJ9aiU5wjMQ6mwr",
  "key11": "3QkjivTE8So4kG5bmoay4iTUwEBb3bTFJwH6oYcTbEx8p9PLh9KAhhwew3WEX5af2yFyztW3WjArT63foiP12evM",
  "key12": "4PCbszdiVQthb78i1LPWmDatrFATJDNvXxvHpU4B2pDXp9p3uo5gGsecpgKvXArd6rgVUEEzM9xvy2axHHSFTpYx",
  "key13": "2KUGWKhuwK7JijZ5t4VuYhvugW1h9TQLnXEgEFBjxMCjuyrUg4rkNS64H8nVQ2qsXuqL9PC5buPmdX95odpJtPHH",
  "key14": "2kksjXEYzTWyGE1KkoGJwY9NtXgnHQxMpS1izMAMv7YAo5WBA6E5znKAWASKUbVe23KkxYk2qkFkeFvJhthWkURo",
  "key15": "5r2tevKBc37PnhsAB8zE1LkgwFJ6wHgkxfYmNR15vPHi68sJpNCWXKY3hTXbHTeyvxGnZQrx91298DX1hVL6VXqx",
  "key16": "5tVwcUZD7ufxT5GQBByrR6QkvukviG7oBk8yMUp2cwbWt6pGFL2SrBNAKdmxg9bLDKpvEcYy19mGAwY8navXGknW",
  "key17": "2nviMH95PZLvj6f3kPc7233rtDAH4QR7SEkXaLvdBqDTDMx1ZXVufSCQFeUBE1ieP5cAxsDPwKqDHfbkhN1Lz33w",
  "key18": "5QSDbBxWUKbKE1C7a61M5ApYQFwmPvJ5i85JGcHDBHovppuaoRY3iLnP6D6EdkvgQuQiKczeg1dBcpmMpCpEAnvS",
  "key19": "quiGuesf2QXdHayPu36wLRsk3wRXcnUudmQd4ZAm2PHtUgSjGBcrkbcErphpx73yguyMTbZ6hi4394yM9VVSmaY",
  "key20": "5MLXnomZN7pPrrTZ8UyqmCWMbrZ7CDEcknLCUWdiT1F5ACnaMva9TfywQpzcDVdFn4j1tQYVfRvor2e6kiYUHn5B",
  "key21": "2KDQXKyw3AhoLpmCLoy8vBvnV2eTzDQ6dZb86f4uhK97KeWnAovPxWzS7arPLhWULgpZormXSbg2Xq8UQohkRu3k",
  "key22": "iriCQjSkjsZUspuKLA3Jk39B88HaBTmRD5P2s7QGK1RqoYvv1zvyCxQvnzUDjs7LmkiDJXXAJD7enbFQK766zen",
  "key23": "4tBP72A6rM673ziGi75cvGFpPmMnvKnmwYbYhz9Ake1mKZ2H3YfBJ8CqNye6wfXNqhtNMqnZz8EP6368Y7gLR6K7",
  "key24": "2uH1rmQ63ZD4BFVNCigHEfN1PSUm4Ss9sxXpSbsBxhUzSn7DjM2byVXMV7PNXy3Y2jzBdXq98DsMXVsGSNhP1Nvx",
  "key25": "5aHkaa2GPs8F7biK67pAr8jUmWTkaWNsVxmZkzbJRMQTvoBE3Ys1N4MeCn8Txhsza6Wfj5hVhrf63cSKEwbaQymd",
  "key26": "shi36HK6kzidBjf28FmBziiMdZvHAu8EzM2qLxcYNddQEDA9vJj3gpt9NwaxAKqMmHE9hcqu9jtcWJRqfjcoWBz",
  "key27": "2hjtffuYfpervzeQCoipV8o4e3seRnTHJixQoMcqfGGkrYUqN1QKndGgT4RV4xyaxKeCkHkwaNzb5hsN6yaApEpM",
  "key28": "bgnq3865SZVrWG2AXoFPqfLCNsUSnq6vhHgVCBRNmLCxShAWLWDcacZYCQ6imv62KzDRCHfbFxpmd6TomXmnL8w",
  "key29": "4qUiunjdsa7KVi2qgNFiqmmLQYzNDMrwRCNDcGGHvuUdGP7MBupDu5nPhsTNoATEBX2ikbEAXyppQWGtaUnzh5vW",
  "key30": "56oCaj5zuSEuUWfWeTYPFkeVptWMovD3FZR2TaWcx21WvhbJ3NAVE2FztPytvRqYfgsvGbnYFquEs3VWNovYzyvs",
  "key31": "32Z1fjNE86gHkxrVfstbQqgPcQPNZ2RJat7jfQt1HUCnuHm871s9UrMiXmzEhSxY1xfFUSaGjaXNDtHDzHQsvBZs",
  "key32": "3jPfihhQHkh6a2P14meJYNQZkZzPWybCgeiJ6gnrqEkzbaappq9ARMDsgeCEx2t1ftrtY6A5ezgPUj1VGZcxmCyb",
  "key33": "2zUbTRZ1ZFWjg4cN4X1kgUm6DjsRGeczNkoDSc3cGRQ61t7DAyurUz829fjYjGp94PztqFQW9gcGyyCNEDJ6oQdx",
  "key34": "2D5pmJvPLLrUaksaizVieHCVHKcv84DnXEAdUNnHDC7e3fyZZuJyFgkdeAaorXxP4NdYKD4YEDExeHZ64eVriBHX"
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
