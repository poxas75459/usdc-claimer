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
    "5WNJb46nBMLnoJwYYUyKCg5NGXt9H4zkFsVzxw25sRPwHyv3E7PM5PcqK33BsHquywGG1HhRQSSSyb9MV4XTqhaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dfT28TXwbco9fuwZ2wwmQVR5b5wcrdtndSKEJkd2TN334DY95u8EcHW5LvLtm1gKxF4tuggQVecT9YPZrujG4AS",
  "key1": "2VRyz3MhNAb9YNdC73ZyELYJnRPpccvau3ePg1hM5sdj3tkUdTiWdppEHf7YjH1FxFLHTLFVpKgdbeWTRk172xRA",
  "key2": "28PAsc5usqWKfBxKPSUV52VwMKXjyQCGA1hjpt4J6Gt4zFr6H4DJPC3ns86319hGUGmnmWoDzMYhJjyKBKaVtme8",
  "key3": "3y789GFXLJTLscMywjmgW19vPUHrn3rPKf7JBnzy3DAsUq6j1hu8ARB9iwP34hAyT9QoEjdEEXRwH5ZgSKtVmCgg",
  "key4": "39GBywXaFmRgJgR4AVWZAeAqy1XUFsNJJqHkyZfejAizM7ELoGcuNqCu9D9mSQwuVxu47BoRJx48u2zvGgC6NiWA",
  "key5": "3RK7LZZoKHj8EAyJcDGcJRSgnUz7mjDyjNYqpv3Hc6zT53aPsAx25xCh2PZ4CHFCH6Q9cmRY54T7ewjo2QsXBvGS",
  "key6": "5cwAJMyR75wC4yRfVLZg28AVoRrgjjNsVQ3LZrzRTXcCyNxFu3asMRTywupP6kcmcoZADKfbbbxfsmmTTEzN8TxT",
  "key7": "577a9Nzw6N1or3tfffdcFnomUhEAX5QaiGhCo4fSrGhmKRLHYDmCpcF1xPt56qokC7uvTQjsvUGUDEqfGvbfdPY5",
  "key8": "W7cjZ88twHQom8QdqmqU3tZfp4GQMuceMG3s2pkmgwzjcXDW88dZM6KCDkhKAw574YwGZX1wiMnGxqZR1y57Vap",
  "key9": "3c4SQLbQt3m3Azc2TCNMFMaVpmKqT7uvWp5FWa4ESAxYqzb5NPMEtDTcvPCdnRx8dcqmxYGHYT9m92keHrDGzxc2",
  "key10": "4YPRQ3Pv7KfCgiZyHLCMVmgHoEFEPnNxsr88BUWE3K7RgGp5ENEGi6BChzPQEK9vkQmV7BoWb8YYjbZSyCZzTeKb",
  "key11": "33GK16YTCEY7Xh4xqzRzQdYhkvsNuBeVeFuL1L3bPJ4Jv1iWk6eYkYAQWq2Ys5YY1ra5LsiBrLWyBLp1Q65WymP5",
  "key12": "27TFcSLauZehtDrQxrJ9oYQY9HUd6nydT42ZKavKg7RqdoJYeheDLy9rFkXow6qhgyp9uXwERaRidnqwB4arwmFi",
  "key13": "5SyHpGfHtcScf3hXbQfHnH5v8vs8Xynz2dGr614uL61sKhytdkv3yuJ6JVCnGdD29KsDBujWNG2Am8cUkosS6Uvb",
  "key14": "4BLR72JQiD4X7GU7APNL4MJRugRxDiwofmY4nB6i7VzS7dukjKdPXeFSnvt46c9ZcAmWJr1emTConDwDSh3zhCYX",
  "key15": "4YBTMFDHTfdgiS7h9nhvwAgVcsJPy6HvDHWi9Lk5uASczw2pSYBH9YsWMAc7UeeH6oa4Q4iiwKLFkzpJAuxh37CD",
  "key16": "5LwiTX29pZ6DEZoL6XP7JSssBrwXGeKUJwtsyTTDjKjQpYpSfUjbL7utVbdoZFptXg6CAJ8bnpZkXpfeoQt1MWpM",
  "key17": "5PCRq24y95ZQC9XApCHbwNnbCDJdZg1GmGUKesPrziq6bjVAeLoGAqeuExJToDX8ciH9R2a1RX6MDkj1WGkB4yrg",
  "key18": "G8utgCofASbbQ5jrNAfyTUQmVPTnaMpAEQzrWWiKD36t4Q8Hyjmzn2nUVcuEno3H1ch3uYbDDrZ24JkRt5CyiaS",
  "key19": "3ffcyK7GXwDUUuRbB2zenVsZeeJq3LnNQMtyebos2y4nPkywrBQjitzn3LKWoNZ5NzuzquXySs1zNjbfs75FjUnr",
  "key20": "2kXLCdVypKd4ZkiNtSqMo4jKeqLqUHS7NFwhMg4mzA2zJSez8xmcgUCNwwypbwKEXQ7mkgg7mU5TrnZRwDp7HPfj",
  "key21": "3zXLZN2Np3XzJoaf3aauUoLiqW77nJytVWWg5T9WD832cZbkMcPwF6X98n3zxVp7K17siT9CbZjordeJ6KHCty7c",
  "key22": "5o9FcWRnYxmseDQaZWhPRdAm21SDbvSirMi5uhbxtXC7Jhr5RxMejRVhiq46SsTG66UFo5PGjxhFRJEwV6KxLRWK",
  "key23": "3U34grPm683uDnERv5g9GonBQojYWXc3itfN49i2FH9BDbee4WaVetKLZajdYxeqfE7UyWxQRNievxp3ex11fduJ",
  "key24": "2YxwoxoR6ZhdwcXvcJvhDArZvUxLJHKvP7x43egkwSoS7vDwKNK26KPNX8kHLTjHGbxcGiSXZpTTgoRf1qqgCNHF",
  "key25": "mQLtW6vkiED5dBhpgwTQHaL2WEt87NDsdicEHeAimnSSMQmRuzk2R3zyB4q1jnuLf2yF8fkw9FXZY97g5jD6Uqb",
  "key26": "2ATorCuCFGXVGcsHTuRRKWqFBr5kQKz6471YEbHWrRSX1z633a9cYxpAAbYzE3FZCBa4RY1aSyXZRDqmMBarcEWB",
  "key27": "ht4uf8K6vnJ6xi8rN3wAyeaEdE5du1yPaYSmKW7DrniHFTevRoPnYx73g6haR3qqqZJ66irfEVJF6nyRaoHg5Kf",
  "key28": "5bypNjLbuVews5zWMUVxXSQmWfjKmQMdDBxZz4CF3884aW3prVZXFzcoFygA43x9F31F6QziXGkn69qnj6R8hFJH",
  "key29": "2u9Ho8pzeT14ZRjcmcK4HSHG44A8GswfRQw7SbytB6rZ6g7Jx57xk52dFKhGMFazGSDHSMbxUeA49QMXiZN3kEWD",
  "key30": "WMTptV6sWCT6JAESkZNW2ZmwLR6oVQ9B4qxYowkhi8bbiq7ZKUJtxXh9WFR5ksF2Xr5NLhgxN5TezymEBmdFaQN",
  "key31": "4Vi9nyz5GgTcmobbBs3GJR32QP2yaMSCi5rSW9SymWueNwRCozeUHnLJDVUzhmUn6SPwgpWZbWnc6hk2n2udTRZt",
  "key32": "54pQFoW1CuqBBHHQMFXy56FonNU7RYwi9Ufv5qtuVA2H8yjjCjgKcKDdT5ZnKVEFjDSXcekD36VNEYgDC68S9k1G",
  "key33": "VsCrcewMMMNDMocAnEDomMXC6ZAYzmhHf4QKFVhefegiemxD2LrzhBTuz7BxHykatrNm2GwjLn955fzyZDh4i1K"
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
