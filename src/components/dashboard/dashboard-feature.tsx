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
    "5NVyPsHtbUGyP7cMgh2f4t5dTVGKVj6GR7XwAjxiD7ndcRwx5QuvLok14Fqmu7wA8P6NzEUVVmdMhYD22aXNcFNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XeMMCHbNJH18dr1VzzKHYMmrZLCyA76miBQ8Ur5eqC6HuqaVje9bP7iEQG1F45tjzy185NU1tLRHKoMPqpV8LNi",
  "key1": "QorXt7rHRQ2hZDGiGcUnZK5UFpizAVDo5vrwrFHL6ZjsR5hCodEhuEEeGDcknPSHShmU9UD3es3jaSx9Rcomhpu",
  "key2": "4oUvKYEEvVL4ZJsduLFMin4R8Rg8oKjKQ9gEGp4rZyGdgEKjKBSoUMYfcx7mw7zEssVt75wCPTP7QgdZXHeqKAkX",
  "key3": "3tmDqJ3JPKAQkj5QtwnUu5FsgDafxXTmdYpYm77wdp5nDp5o7qXnoneTotYHQ2Ji6inGYrfsR3WMYbL7w21tMt71",
  "key4": "2xAdp76Zmwd2YeeKpKcjt26g9vVsHLCX6rpyrdoXqfUv4ahdHNbekuFLGPSj1cujBZo4rjpLpgRZJzcS7gqRafQT",
  "key5": "15i5zKy32fvgRmSGGoYyACyvzdk2KJfu6kX7yHNyZzrNWW3LTB38PNm3HYHXK3gLXfhcwpuPPNoCvakN6ryvwbd",
  "key6": "2q1TVhfb41yXVYgC1y9A2mgV6sLxXYBWeugj9MniaAV9qzQ4wkeXB6vEKxcyPJMS1d3ce87WKHNEVsy2mYMyRisN",
  "key7": "RSELcD4cprz18apZnTGV49MHGXFtbsP6rEwEWFnyJ9khVg4MUU6qsdA7cWdfpF4AUGJJg4fEmYLRVaqAEwQGfet",
  "key8": "SWQi71hWwpLfKYuojmbMUtprrcJGAkDgavDBrxDoYyAxobmNvc4nUxM9TZoWoy6SrdTpooptpnTd7qGQaJMTBTK",
  "key9": "3TrUxYud9porAAkPeionLKX7frGh6MpmkoUGaezX35kRC9WEakzyvFu8UqrLqa49MRUynXLz3eEpc38Uq4g5HmXg",
  "key10": "oSCmo4iexW4uFgBTAeRDcH1Jcr6GrzBX6cWcexDFy3iBnTQDQ9AewFe6ZBVK6H6dL9nWY37Qoc1MMS428zaHYXm",
  "key11": "2Fe2D5hChpad5mhFJ1fBoxPChTPQj4Xy5dJ6H1Hy5AbHCrZKht2DMHkK5knpi6GqmNWR7z1upMtEtV7ot1Zh1CD9",
  "key12": "4KvZPbuKkWEJWdygFM8di3XQ8Dr11ZaH6H9muFEiRhSaojXHn49LZrvyaHMRrko1gj7od3sYYpxc5Zh31bCCWG7P",
  "key13": "2rA54yWKj9BwsJkjKXxcmwtT48Qmk4ufpuxMPFfEbWWkME3KkBwznjRqjkanVEVsiXpt1KWPQqrooF76HUP25MQK",
  "key14": "2MJ6ZPayv4cny1AaLfzVq7Xx4ke1BE13rvYgT66LS4wBqJh8Wjsmcjt31LbFkdscy6pPmuAVz6kkNVkHiy11b3Kd",
  "key15": "2xgiPZSKgy9i2LQpZ4SAMQyyuQERGwo76AcjAYYTZ8XdN8MxLqvVTqjazAL7wohf3RwToNgb1jqwNTaLXPENcj8S",
  "key16": "5Qevy4B6Uh8N9vxjGym5dLHhZUbiiGsHe3xY82iz1L38LouaJogm7SUtennBh6kZhrLpYVuFzyT2v5ap3Tt8wuVu",
  "key17": "65qpiEiMo4asFzud8zrrSBWF8rFnmJXxjcCBy9S9rnQ1VBUBXVmrwzQXKvSES9Jro9yhUHiiuzjUqfq95c9kSRdj",
  "key18": "2HxmDfRtoAi3nnJxHNpWRpyjL4RnXxjprBvoqa38Y8ko4YDJZQvXJ72iw4FrWms4hVu3yNTdCwmv3scvmpRYogZU",
  "key19": "395foED23eJMM2TtZCA8tqkRk51rE2Z32vT3L4UQpruzvo5zUoLhK73fEuyJ29RdAtLdURwZPp4t7Z7hwZ9eWZ8F",
  "key20": "57EAo6UwF23Kn3zmV1qq2n5cDwLMw6tVDqmjX31s9oVHyRNzvVfzEKSyVrMAdbPF9Gi6rUhHkYPKCfMjB9awUoQm",
  "key21": "621L7VM3gJ3ApgUCMfXEo7JVLRuCwdZEhbVtgwd3eQUBKHocXCksNmr9rJvJeXNrr7sqz7j8zUW11RWLKJHupK2c",
  "key22": "3kNQHGn1oXZ3HPsKsbBLpU57XDsBQxr6G1xRRKn7xsCDpsosSNnGyNDV6nMEybRSmpoH6rvQbmDYCWPGNpjkP7am",
  "key23": "3AVnF8SQtcwvuhqkGRFtrhyT65wUWnLxXQf3iRgwQQv8SkriHDsLCrSgyfUFUKwfXGDP1qr252mdTkBEmfz6w3Q",
  "key24": "2rz3KEoMpoyPjdQgtGQ6SFmmQpMTipUL8hdaBKeBBntVX5xsQ9p8njDnmUoC8VMudDFv5ZRaJUC8DPU9CKKzM92n",
  "key25": "5CTfabUcpDDXg28YDGn5kh1d3Kmw7ebVGkbAAMKFWr7d3CgAjLJfwcpAmZ3HKhY6FDkVC9DRHfoeDyQqKoqiLSTq",
  "key26": "5fsMbxATrZykQgsSP1xy3icgiFdAbJCPBBUBd1o1U4GRpZRQMNx1J3fgEf4m5LhrQMeRv52NLWU7LxkPFEgSHSWo",
  "key27": "4n51FhRNDeesQuoKE3yJ5kGmU3JyPtNWm7i3bkw8nnYf5z7jSK6NqjU4pm3iq8Y8JFp6n4z38tRdA8nomCTKKiyW",
  "key28": "3kCzSixC8UX1Tj4Nxu9RRzWmsC9Rkak1jsMp7xrwQAzvFDZYpD6k13ZoyPzxciqP4P4ZovA7Su998GLsAxxCvefW",
  "key29": "5f5gQZwFjtMeGySz8MrjkDxqLJTqXM86iB2Jor4QTSoxiSSXGnWzziEkvniYkPTDwLDtkbLvQdkYYYo8PjCjdHDd",
  "key30": "bqxBdxAfNKzUpC9QabvTwNB845DrFjqC8JisBfMCQVzvSvmgEFJWMD2reJCvXUxnaq8XD87RfPAvLqeNetBth8M",
  "key31": "Yzs83WaCgn2wJTGNrvjpg8KgRyEbaAtcycgWnarGqjkgBf61qv65dagWUCr8JKFHh3spD4tLhq7RTovSbR8eDJa"
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
