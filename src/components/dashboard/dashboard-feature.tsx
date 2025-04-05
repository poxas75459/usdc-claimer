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
    "2sK6bgyE1Jca7c7SbfjZAKsUgT5pUovr1JtyZK4JAPAad7GLjXZXaiwH1RhsRAD89FNjicmNDpckNu9NfwCA9Ny9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39yLPNNVpTgE1TSYXKsbaMiakC6iniH1ZnLAekDfzJETwgW65tmJpDsWz8eFifL5cVe3qhUmC5p1KsQ4JPUk35uA",
  "key1": "4NyZTEx24Wy1RUc2YDTVuGHitKFVrVtuveN7mjNEKmvBiXEyeHfr4bkEsexs9yUpk2qfQWWYvxwPXTNb5ELBfk7i",
  "key2": "2hoMDP2g8zmfTaLECjhCkmE8qQwEShHK5z6vJiK1zUQYKNvCTtzRx6MCZ1q9NDV4eN2QVN2wiXwwiFkca73ZtiHj",
  "key3": "31TqQBPFmc1ytU7oyqdqZVFs9Y1Xa1iiTHNixm5dmFNgmoxQGabnHMn3uz228sceoYimS3Jk4j1ZioTo1oyrEeAd",
  "key4": "2jgUyaAGGuMNpqMFkdbpdGFaVW1wJjC8DfXdxiUfJ4ggkrMR1AxYqZgDaSmvPSCYkesKVpf7gQnyNsKzne5izXQC",
  "key5": "5a5LYsgHZJZe985pSV6G2dFbsQVUKmJvkxTRgXVTk7mzJtcJSVyUooR7fAkzhhjgr1sjPFFBCA7SEw7a9SwxMY8j",
  "key6": "39ZUnDzw3rmq9SKGwQueXWskg2TW8WFxyUVsSATenAiGGNC1gFT3fhiu9Gz8D2trVie61gTz4jxQp39qxWmjnHo1",
  "key7": "5uydUNbK47KRiA5UjisgB3i5KgiiFkLGvugLKVo9wHvkoiU1KgZj3wE3pjfu4ibXaspUKqrddwdoUjNEKC5tRL3L",
  "key8": "3h5Zx3vaH4CbLXzfeTc2VBTqw4exXwvBPqgGr8csEpPcqoGYgoL9FrPb5v5bVMeEYvjKv8oJLbh6MoozL8jKoZG2",
  "key9": "5qXJ5NRgf8vowkZykQbpCDhMThosdXKMVBmFBCSGarhTcARZkVirsSt5kQEsyfFxcX7j2DqTtuYyvS1CrTSzoXDk",
  "key10": "4Aq3iBUGQVXstegsvWrCV5TZhJExV6G2x1hvt8vXfuaa45whALPU6ihJxgNRfw7EyyJtt8GYbudq2TeUrw7XYAJp",
  "key11": "2haLzUjY37R51uCnt7P6LT7g2wKM4PjjY9gtpg7KVYuYDK2ndt7Lo9mmrbPaY62AtjEZk6qcq8ara87gG4syj9iR",
  "key12": "fUUvwgTXLjod5iSLBrtzkbLQwnrac8SvZQcAM59ctRXhTYaVGdCKJmTyxNoff4v3JAADQYfuZxxD1ZhJUSkJBAU",
  "key13": "5w1uWoH8K9oVYgT89ERYSgWQ2yKhNjSGk3nQ79DYTSZttzGuxjxWv97i3SSGDxi6kvyiwazGkRbryiat3YC1bHWp",
  "key14": "26vdoEt3ZS48C3WTwcKKqZnVfFokgMw8YeS2sDiKbyF227ariLzv51B1ZiWt23ut6r1y1t8A1eEAKwNCJuhDGQK1",
  "key15": "2kMCuAdJugm1KsvmrPGcwtPduVKJrDZDvYcxPjKxwmjRFLQa6qFGgyKm59YXJj4UH6F1pZXdVBy6ZC9SNWgumdWZ",
  "key16": "54fx8qY1gHchZ6nrzkyLYEq2hvr7MVnco3VKP7SCfZTVBZG9ZGmCgZChGLxNkJeCPfhcVLmDwfpa9Gpe5wohdyVM",
  "key17": "5RwNfMZc2hypqAZcZRowPuxrrYmu5u7Kce1c95x3T1ZnQ2rfAedQYnbqnvmWuFHzWTLNUaq1KmHPmCGkWtZiRMnH",
  "key18": "3eHtgJMGZ86QfSaABzHS1oLVYAn2cfWY1ALnVZyvTf71uBvGkqQ5KThH2bWB9xT1FFnMaV1K5WMgyZ9kAobDU5rK",
  "key19": "2skCS8cGZp4SWDvEBpQez2Q8BFJeZi2zDuJQUoYhZNgzvSJHBzM6TkLKeSJNnng2KBQiSESseSoFTpuiJ1euHNpX",
  "key20": "28WxqNzP3a2fDZJfw3Y53huZFfzYgyyaCVjuw9nEqHufsrAj8YVM9P6dMCWeAP4QPamahZS8qU8W6rZxFzKVne1e",
  "key21": "dw1TrnhGhCPYCtKErMFKZWDePyHGDCSxZjbTabxykRGV37sJoptNnaAkJuovpx9Xcp6Qnsx34r24SYf363B6byK",
  "key22": "2xWvfWLaV867yugPjxgKepRkUDbgC8kQn6k7qTRWVicmdbLe4uFtoqJmFK8UwzkoCF2oogu5soVrxPpm98E3qU4R",
  "key23": "GtbYpvSmKCtTBXrUYD3gkEwoxjcV4ukXQgLm38FK7ojaCZ4S55oJY8uyEqXj3f3ALKwLzsVerbK9sa1YEtHi9AA",
  "key24": "4b171iekRwGA3ujULNVPKhQpwpervMnxspz8Q9Z5WG71pYtfazd68WkMqy7assWVDjgrka6weV4rrnEscYJ7QAHS",
  "key25": "5auPBvRmXGbRYf1Co51ijqAN2qU1mdRJMnGzCoMCfcMe2HgYn8MTY43LSk9ikRh4EY6QCd81BCdjKBouWStvQZ5X",
  "key26": "ahvpiW3tyPaTjHd7EWE3SSDFZQAKQy6smPnvkoGvSbSbJtShiP1EsJpkRgTZCWSc4pqugX5EC53LM6T1rPjg5uQ",
  "key27": "iPaXQ8wUasWrCRgkJqvnQC9UKXiTKxkinFfK3H7YhrqhWDr4xsZCyBH5iVJTLqfwyBv3TyUmEX5iNxBRgCRMnPx",
  "key28": "4n7f5My5U3kPcqr81Ppk5eb9itK6Z6RcSEqP3uUpgqq4UAGfWDVSvApjEb7mddFv6877zTWzshiEH3ibk4pHm2Vm",
  "key29": "Zs12mgnChC4Lr8kc1cGfPnFRsRMUzaQ2gQaWMeuyZe7Bbz7Rb4yDQhMUeTM9NUvURwYkADbbD4gTFSG1TPuLQsX",
  "key30": "443ywDoU6X4jgcKXSgjGDd7HbeibduGmNEUmCHxLSgUK7GhoviX9Y7pZRjjZTjcuw3deJjRxvNA22fdowPDHG4U6",
  "key31": "2mBwNmKSqrX1iuJyQPArc5pWk2uzfY6HzFo7AoQcqKSqzi4RxKi1bQo5Py9fJdVLkGymdkhKYCu2EUnyDoUAFTeA"
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
