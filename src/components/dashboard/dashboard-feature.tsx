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
    "4pReJLv769p9BD2Wq5hpLA9BVxKugjSeueueEYEZknaN4JjHGwyxxqQ7ZGqNKQxSZ4YNyMUzkSGUfKgHydeVkL1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6SnS5mpbr5Zg7VRtxpnxLoCWLCeF7ys9Ywp3CT7QeCYE3EQuAjUHkBSgaq9GvKJFLceaKTDQ9UmUeAPiH2PzjKo",
  "key1": "46YvHFSkjRg7YGmejZyfXk2v33WF1brk6Dpr1MsqRGs2enN8f45tnoZA9cP57PmpCKWYLocbP2ooXeFcPb9jnePr",
  "key2": "Q49JufvvVzUghGKLEAuxLq8hzBFoWKVf2MDdKjLnjDs3c2nxmmN5o6pogJz87VAFQaAf7adH1ujKQNJP3b5XXzd",
  "key3": "53xrWEGZtqWgadYnYJFJDwLZMCAF7sUtTP7iZnrz1qD7D7oP2nAJ5BkWrAm1GtCAro77sa3M62gspCBbUZwbBpEM",
  "key4": "2DDJphDJDjNrzuzVmxVkh3gP3U9f5Vz6N9fKc9DyR9ean2rNgcBJ1xaaAFSNvSiAZ8Cvz6jXxm63Rhi7AcRG43nU",
  "key5": "3BWXbxtuVpX2tGVLP1HmdYYNjuUMSohB5P8q8zW8XayQ1rgiotEUoye5Mpmbq9iGHerSipj1HjPPTMHGkznvVRWs",
  "key6": "5a9X3oXATfwEsa4Fz2fYZ1XyKAHtx28Bju39Q52zsaQYUP4mtVgyHkfGPYDBHb75amoa5idP8Srin3hunSnCmM8n",
  "key7": "2R77qEEs7L67zsetUnLmY47n2S2np7Xynri5ueteZYfp78xZHkb7UtvCwUw2zQYVhuAREP49UMjA2feTeDK6ukzg",
  "key8": "3kD7gVSYRMtQ7pBV2an2buTBnJpkccBG3Cjcz48L9z2rPLLN56DY93xjMAs8KUQHRi46fH2cBGAk2Ey4X8zQZvFb",
  "key9": "ejWk5XnLt7YVWichxQri3CBqgz2McMeAmjZK99VVZudaYn73j9u6VkSQLGvtATwgRujTqKjMGwHcSy1Q8itpTnv",
  "key10": "4bvYvxZGk8Tm6S5bz6JmxJ3JE7bNG9Jg6cEJVkcB4iTB4amLyQXkfb2P4Xaqu53Sx5D3wfzVGs6GoMUJPtopbzCf",
  "key11": "27tNgEGbYE4ygWXLGY6BkyXvRX6nLcTeuKXqxVVJLa9cJtZCZV4zzfSdebQWbmueA3iqD2fmGfJLHo8SZ5v1mqTs",
  "key12": "2dJqBJwvqgTFGHgXjRNMzGjBE5WywAJVvrRRakwbuAS7wPQJ1b9t4w7Nsc792ZdWSPnMKvyzdpM16Y21HHWEtSNW",
  "key13": "38AZP646Ha8iqWRwADTTMAxfvDDaLN7GNsDrAJ35f2xRf9oYiPRdA1nLnvbmdwyHBJb6rYV9zb4BQnZKTxr9dRk3",
  "key14": "2fRavcp9QoWhzaMxKcVLU5kvXrSaoZUSRfXheJJEoYAzLNJnVX6zRMjhRYBMgTqWwev1tshkXJD79ZfVWdzavvTd",
  "key15": "5peAXNhuNkViBReezBFf3BSxb7Xkj3UFTp8mrLxegTB6VFHny3TVLJT9g4kBniTdPrUW3ochv3Cap9x7zpkLiYHo",
  "key16": "38cBMVM4BnewPaJYySF929hsmYiD7yFyQCb1t2uPasnqv3HuZNKRtzouZU6CMKL3kcrWSmtS7WyyURFsYUucrM6U",
  "key17": "2JatzNhRoB1cG166nXQpL8xSBXCr3jTHKR7Cwi3GF2sFNtNq4A9dEqStayqfoKtJpDhUhyWXY53MLtSGwH7g8M5z",
  "key18": "gNpnMAm9WwytTYtp1eAMm5JzVXxxA5sdDCmgetvVBciBczx2G5GHcQyBEYa6JHemGTtDT3RPMa6JLcMEi1xbRfs",
  "key19": "3ZURpTo2UbRFLcwSNYjPSRfNfsyTBAnXhdw6i26J1JRWoohVFWXYTiaxKKZKKjQWvCvprPQCbZsjBqpBL5AcmGEa",
  "key20": "32ecTMqbcbjznAzcvUUe6FphZta64K29SQD7hSy14QuHxQQ2dyUtBKSZr51vsxaX3LDyPNjpW82maBMUaUoidjuC",
  "key21": "2jhmu6U2WwKpxxQGcksuXvSkKVoX7L1YSLgvvcmr7prpgx3xJQ6A83yNrEhekJr25rstC4zAbLor9kydU5UBC6fe",
  "key22": "5PDvSXw2o9SuUox6zK5TFqw3NimcE7yWmZDDcPE2eKxDt4AZ8f25KYWgNx6oPRpjfMBsKoe3WvTJ7tddrFHipxxC",
  "key23": "4gVfb1Pp8RAuohvNoro2SKQ3fNC8reSey6GGzun7RjyEyoPnJH3ieEUe2s3h3YMK4JsMJ9MMMaArkGRo5ZmudiZf",
  "key24": "2RMuWg7kMLxp6ayAFtzHJLEDfb1X6WtQCZ6H3gUR1CZrgpJU4sfV6wDpMBJggcm7o8443X5caXMcaFEvnv899fFx",
  "key25": "dx3mcgvvyTkUdj1cfs7FEwD4ujfwkfZVpB4mAJe3Tzg253d3bN3WUFRBCq9TCfNte8hrnD2Sw57aW8j6JV3LdJB",
  "key26": "3YAPZsYbSX5yjCw89GBi52rsBzACxDoJ6pACNNcu3x4Bwwn66bhJoJTk83YggG4hVDZzKfxD6fByYHJjRE8fmXA9",
  "key27": "3SSUZPEVpi3aU3KLvmdzBjj64EJcy3oRgPUJpe1YvMfWucwYWVp9MHU2V69BYaURj6U2yQnpgEEvUqRXPq6Uwpcu",
  "key28": "5aafK83ruFiw77QbLDMbHFQX3HqvWDmZmE3iNktN7MoG6Wmr8NaH83WJesSphnr6K35XXSkdWbiFLvRgbpU64NrR",
  "key29": "2CsgNw7GbiywiyUyPfBSiqsuup2VbT2BxNg1Y2Sh6MkU5r5zJ89jqtxygt8sYeyYqmg7icttkEmwGK99DijBJKFK",
  "key30": "bz1NAHny9xY5x1b61HBcj6EqUL2XfBSPCJCzaVk7yETqVKDC5xULhdq9ZA2sVVxz46ihNkdHJYYaTng54zAmHm3",
  "key31": "5dgSk4GbyZo64n3UyU7MyPRypSWnytYFS5Loybdbgn6cwTnVVydE1Uze9JckNa83WD9373vCfS4GnxZ7XRxy2nUb",
  "key32": "4sdwykJbtNxfKR1PCDDBzdBgZnsCwstYkC3xq8bQbm5v6VzpBJa6N3x7ewuQc2H8JPJVka6WBX9bBseXXMweCViL",
  "key33": "4uZyiSZAFobEe9XgjWwX2MTybtUMQkBAqNVnfEPvQsxQiBGxiT9dDviKJKv22iF8Ro1jgEVYmKsgWa7KV2PWBwDJ",
  "key34": "4Xm1dKnDUfBTSwytTuMaY9FKyR8tDuQYKMcWdjjBzBUnHQeZ7SKrfycwzcrmZzEQnCvhpfc76EY78UEws8c61k7",
  "key35": "258GpptouKJcAsuYmsrCAJe2g9RskAXaeRxpTw9d9iTwF2WrtDsDp2ZsX1Fq1TLXkbJu8dyUgbXmzAZwrjkbU2Dm"
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
