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
    "37c94tGLp5gMpeWGUA76co68o8c8zXf5idrvDrMA78XLzzJ7o1ym5TKijoGGfWv4ij1XonSNqjYGxXsLQKjgt51b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GAEpnGnDaeHPz9mPX2AHcuymPHA4KRPtfQoUAa5Wywi4N1yT79dcE9fUq8rwFWknPaUGBk48o6kbta8yWfiZMwj",
  "key1": "5hYM6bYF5UXyUKwWBzcCfzhHtBhS7yHck4fZF9k4bQfPi9gzyTyhrQW1GVBm1Dafsb5zJnXr1D3Wt83vu2vR1DAp",
  "key2": "463mZ7DrisMekzpSmwrrmRQi2ym1rYtmcxD9RKw3u3aBDaP9ntBbQA9uBTgFnWE5njze6rC4Zuwk1VfAVAcgTEhp",
  "key3": "42Db2dd6YmUVZpfhcg9RcWsVpYXBRaiQbrtzCwUkRj7zk9bMkQWXZhV3RDipn68UGPEgkH7BKi39cwMax1xo42ZJ",
  "key4": "66HxoYSPkpogjC32YszLNcm8zWHzwMeH5McRFhfwLCnfTv2zVZ4G5ZFtbZ7PDDJAYnWi5ykqvRcLue2KF96abRaM",
  "key5": "4BCsA4AswnfUpRJMdrTUts9A6Wk4G99cWPjNrvfEVgKoW7iCVW7u4affVujo5p2oKTwQ5HjRdzCXnNMn2RLgpJWL",
  "key6": "ZtKLY25Vkbi5vWErGcmA9L2cdcdgKXswoGTvqaVyxULMyEi34AowpyNSvaxBYz1JSJQEwdrWkFRjVSfA2mN332G",
  "key7": "38FQDiCbsJ3HRwroCzwGW8eMKFzg1qMkrDfLyzDeKcdzRmD2ju7iN7cXAqcV3A2eu7X9mPRZbugGKCg1m2ijqiA3",
  "key8": "5YwDJ4WrzpBrv8ka1CUwqVS2Zq9ogFK1eTpxFot5vCdK36sJwnycE5NrXENRM7giDq8dQUhwjBUuVT5HSMqAwmBK",
  "key9": "1RQr3drUb42uRfGkYCbfzxc8RgfJHJ4j9TSwbzHM359bL2wNeLQ1Cn5mBvWrLA6sqC2nhhck9daG84zWszQsEwh",
  "key10": "3zadjpYFdooDh9uU7hZ4ngWVdMLgHRZhqUAnBScQFLGAq8PZzE4DhYS77sm4jzx3nvuji9XbdHKgNnQvWP6qjBjd",
  "key11": "5etth8JuBEC6RwVFfctYauu1Vg1CnznbHS3C6QNm6GDk9SCEmhkbNsf99rC4Pvn8VkjRaGxTf9yppp9ciF9t1X9g",
  "key12": "4LqAZmdB2LwQZVTuH5whKiy1fNLokgoRZrwymA5cr8ZZVaR5n7DiXMCGtTjD8UDQoVTMju5TWpATKZipoWig7hJ",
  "key13": "3s43EB5dXgQLG2AbybRea6m6PXt39yFRrT3mEhSpFYf7xu1cxa2X4vWQ9LGfKKW66Xmq6wBqEv2cmVhB2zZui8rY",
  "key14": "5T3t873k5fNDYPb4P8TDrW2GKH4A3HaTChpbkLyi6YsmX5RWXnkPGATiXM5nddVb8cyhxuuGz47Qao58wyz3PVGT",
  "key15": "qxpTPG4QZ4vwhcKw7PnsAB8nHSns2DcVGznabMAw6cTDhpVB382a3rkUiQxYwTd1LP9a4xyaXzHpaZrD3wcdCQ7",
  "key16": "53sUQt5Mowm149PvzTu2xwoUustBeN3wFKPT9oEQigJxgDE2DPSCeozghQ4geWBgVaCAK8canzT3udnA5vfG74cV",
  "key17": "AGxy7WCEcwNYZ6NvP8YUnaoTZiD5PG4Xc31hNHCmdd69kQeaVACrLDJ1tGZFLcyShRzYPWLk5AdM3HZAYCKZc6C",
  "key18": "3SRV56siftxh1yXdg4FASWUgky7yY37JWCCKYbEvERgA3gD6ccooZPdNXAjAzhTsRxaKX68c7gh3pwFCipjzB4jF",
  "key19": "yC1Vt7iNEHjdfMdceiPnfkeW8aPE1sF7XMbFw5UY5uRxEJsRN7SPMAj1PvtK1UJLtrwpGkkxgXweS7f1YKAsKUN",
  "key20": "t1ATwrrHvnpP1ZRuSUFHF2U4sEXYSXB31VbhYB2z2W23Wvj61KYpZVaxosuBNCsx7Yp4KTx5Fmo74EFpzKrGd4j",
  "key21": "Ufz5t4eDuHnJgYbJQVYMx3sV5hqibcC6M1EvTAw1ExVrtHeA8NBbyvtMR7CFL36rVBiwfh9Vt7UhcSrxWc8d1ZF",
  "key22": "R4TokWwuLbtCS2vnJRXUNQdj4onr1suNbVA5bSHUMNRi6Hxf215uaaaFqSaW7S6AneGAdeYhTpF9unUCh3Suezy",
  "key23": "4g7ha3mGxmeQC23iuncziTRrWgqYZ6Nfj4ACiDVaqsn5H3fARo24zNx6QSLwZs5NfDZnm8JEpAXydkkJJwRURL77",
  "key24": "2s43QhQ4czVk317qSpnHmaduwRBn72ZVf54MyHyM5roJHMQqjcfbH4P1onQRuTqgiMNeF57qsb3CbVgmqkDyg5ZQ",
  "key25": "53T155gJGxKg59edavwmwz2zDNm8TnZftCeKgB8thFiVwwaKSvBTSNagaH3xwHSi9mbbmDFgDeS5JG8XFhbjyUAk",
  "key26": "2wpbQ62WkST2LcGQdktURYoohTB37tMMW11x6ie1EQEH1BSbKP7sYtKc95QnCKL8zgbrGWNnhqJc6BtFBjnpDB4H",
  "key27": "3KExU9hudfkRZz6e8ExQfcfW3xy8WxaLfE3gi5tZJ9R3Vq6odQqRGTQBNESnaS6Pf22g9cfNWTnawVVfGnMXonqL",
  "key28": "5ADM9yLjibNhTcyVXTyaoa6NBgQxbPQvsutyVys7aJgW6iBXYXUmdGX1MNNXzkhtQStAmaHY1cWzr8V4Gc97fAUp",
  "key29": "2JxE1bDcjwaDpZHkzw4L1hgSPezDFbN2Nivi2xwsxEm5XKonJPx264iqZS9t1KWviNE5Y8gv6Cmz33chVaLb1k8U"
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
