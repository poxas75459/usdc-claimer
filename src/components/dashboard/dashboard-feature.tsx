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
    "2Aj3V3TDHBCHvbvhq9XTTXHP91Qng2UU1bhbs5bqCYtnrGAZ6JQtw8hwxhG2h6sZBCu3V4EQfZP1ARWcQwoBejed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nbb4ZXSkj3KbJ65wPbyCnioxVgdbeM9a6euQML3wRYCPaHnsnp8DWAGYdgHnFbSuJt1qo4tYvMSbhGmibxfvrnU",
  "key1": "591AMKGvubM5g3TGKZsGWi5QurC8B48BW3PXU3kYY3C2vgVtMcLta6CYqtChfSgRwrF1bGZCRYo7GgePTPNP2JBM",
  "key2": "3nFAYftqchxHQaPpxVCw1ZCzTrctHKMbMZV6LButjysKpWN3JkNU9sgD5D2oB6kZ4ebsr2TYDe9DNwSFB6CCfbx3",
  "key3": "3Q36xmMxCxCxXS1xe7ZsJdLEZqZWuFpBkZEeWhReXfKeQKsnhiQtiXAF4WbPLwWn9yMcERuHVfw9UmzjJKjkS2GW",
  "key4": "3RS2bgCH9uYn5kxd94hhHaVZoRg1RwXWa1yTpZWzVDNHmRFWtx7wVzL5n5PMk2KiF1cojbr7eRrKTqkpwiupbpdm",
  "key5": "CJek7tmfsD53kJqbqEqs9dTFHu3PYDjqwJXrVddkDqD5dCvXF4dP38Yse8b724wua6Ft8yfjFMp5hi2rSZmGNoA",
  "key6": "5epDGnucc7T9GEH4VWXetKMAHiHeAQqESSN7bJREswSFXKqeiPsE1cxrr57KjYB5pz8Wpd4XpMkiMtoEDKnhfekm",
  "key7": "3Cim1J4hEEnd88swaTPozkYRtZcx4TWo3FBeXRjbWRKYLyJbK2wX6wb7583Bpn89cooDY6YdPU8TM5eQGS2ZJ8jT",
  "key8": "48AisbDEXnu3L94ydEN181zNs9GxyAY1NPodwz4psEdZTYGo6BNoF9MspCPy83bt5P8jukxdWyAByr96iC2VEwMT",
  "key9": "5gaFx6JWn4LWEtXspvXdJv7ZFZy38Z8VGke75pcc3HDUgtbxNtRAtahS6H22vLPNiaoNMpsjsGKAxDvNvvPVNZPg",
  "key10": "YJAqfXafpiT7Qd7XLmh3SA528MuA8Tq6AvcTd54h1NDGnmJ2zEJeekwfCMnnjCdWozVfgk1jD85GYUpxmUJ5vPG",
  "key11": "2DGvrJEHfyWWgxpiSq7egXxhUPWPE6uDQumnWPFgpufsWp9LZLADeMjLjnC62uGh2MqZhc4DhFggNFq6npo2X1dD",
  "key12": "4NfxLfJLYDVPsEufiUfDcduegF7LXLheh9HxRCLqj1Wkv5XGJCztVqySXT1SMS1x27JdJtXt95QHgfmBJsGM1JFE",
  "key13": "2cV61hBGpN4CtMnQHJHtUbpfUv4RGitHs8WEiAv1fSmknRJtbhv2cWnpRwVRzSwXrMJGcque2KSzkxRw5ujdKEpr",
  "key14": "2xm38X5iJpqdKjxQtj3fw3Y31ji9gqc7z77r13DaYhsj5Ncvt1QjRidQ9MDe3JftBABn3Sj2ktXibsunu2ewTANj",
  "key15": "3sDnTPxzZmhKPB1QM98Z4LPAT8V1ddWogeKp6D6BAeCBBzL9wYPvms1QTH6448XTkpbWHKCyv2XSWuoBgdrH5ePu",
  "key16": "4ztnD3vPaV8TU7w5GczpWMUcg9ZYGCU3yLLhBecHsCT4Xqn4rwXq2JE3pqBkTeywhGWkXcnZ4YB9WL7dvwA7YZwv",
  "key17": "9um6uMsH6kKk8s1eP54asYCkti2uqpTyZPbYZu1LasoijK6WCy5WA5DqAmMRvvnArvuNQkPXasNfF9NW32nXhNe",
  "key18": "34kS94xv3EW3H24F3rBQz68quNQgESyRboLq6YaYmHQr3trwPZrHexNwxbmoeaCRy6v8EP6sQJaAE1qYHGuYXqB8",
  "key19": "31gzcoAPeHTQe46Vmh14w1d1xqmcAUbaVwZiM1tU2ZnXFiVAcu8Hs8TsRPceQwm9zxUPJkrAF37RWofyTHmB13MF",
  "key20": "3vKXdVshY4LjB2GHTrnUAYiYP73hg6Zv35Ue5ob8hStwSWxNKZFZbu37f7eBh4hGh1GZoSmjuBqveE5YcxvQHfqe",
  "key21": "3jf2LxkqAnzt44FxNyEoge77qeHYAFYjKi7kDPtrNfZYje7XvcRKC5EdyoP5BxvTsLGozTerihvkpR86VYNo31eC",
  "key22": "4qckWsUCvbwMbyj3jqkaiV1AAuKGG7jdWQteDNYoqF27vYVQ3geYsbz971QE4EcA6vJ4pXL64TA69jwNoTLt7NrB",
  "key23": "3gjp3PTWDUtGq2BbL5vSigbe3rQA8zn4hs1cDzfbZJgjwTaDzuYMHGdRECggn2pE7VQ1NCKpm5nyWgbEEXmrBGA",
  "key24": "2R9osK6afWQ3gbt4WrMBHFkLtzsFuxmikpEw6t2AXsU1aJkzeNy5YEqbbZRW7eiXtquFqME5LKEduV8TzhcqLGEK",
  "key25": "2eTWdVQUWR3JDjx4uBs3LZTe485kJCv1izMSLgj492BBEBRF82EbYY5ATR8PniCbT5Y3RWd4xC7p976euG1yVBxJ",
  "key26": "Q9VWh9K3nL49sU3agThBqXgKbUkRAbf6q2mFk44JfgVXYLXVEemLQXpP8fobpoNgpmuhJSR1ZBaPtBExs4wEfqn",
  "key27": "4g2jAJWorxEGsXdKkoTmKLWVdGucZWygCz9oeqaLEybizCDPyKyz8pnFaVQ9VKLLp3zm5HE8LtoUWzv6dM3o22g8",
  "key28": "2qquTxFoEZYGCxvsRNPDTQJCnS4nvck1AGfE58W6qfb6nkFMijFobW7djTCtNWHUWnC6LBvE1ZDLeNokYb7CMjY5",
  "key29": "2TNYrnuYSRZoiAZvqqekxXRocsKs2g9HBNaDe66yK2NVp476cdJKwvyZ1w1PrWPiGi6VoeAVZMeyh3TfWjjipHLJ",
  "key30": "5XMyAU6b2ck1VpBE8S7qiKmqNtoqai8GGmHKfM2TZexDgcJo8bJBpTWEdR6KWz3QyNA7kvYPKPtXT2oUCY7n8voU",
  "key31": "fpMXiSGay1n2x1R8p782UhBZ4t7ibMrZDTLG6fJnznzUyfKoUb7NYyQspNjnSAynKjnBLvRsFYK63QzCXb9fMyW",
  "key32": "s1wfhzWtvRMfNV5R9cD8BKGt1papo7LV3RxAkLzKCGsqmWggLaKxY6MKG4BbX3TmWoY3KwUqk1PTX2bb2CC9xmd",
  "key33": "2HyiKZomYUfRe94axFxpgXvdXbPXoTuEq15Fpx1zUsLUE5JY8tYSNXvEPtazGhMR5zMWSSUDFjjHFBgVT6BMphEP"
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
