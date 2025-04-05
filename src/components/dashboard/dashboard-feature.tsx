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
    "397z6udG7HAsDNLoFfhzSTyy8FoVwyDs7a6uGB9oT2mdDL2Ub8STmAjxwaCYA8XrhWGbRseAg2GBTF6P1QQdWinF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ayg9cbmuWYsmEF8sEtztfw7LiDcSJKxRvgf1qJ7qLYpaKGWjE5NNYSucW2xY33DtobmdqYuFwTAk8n1ygjv8yQD",
  "key1": "37xRWZzUZdorMveMxMqaYcr9nu63LrqMnu6LEhhDg1bBRNnt3Dmzjkpii7ZKvrzm7E12YmSL9Z4U8PZfegyFu4hg",
  "key2": "2vuhKUXg3wU1B5wSvfvcvevAuXsrnDhQ6Wh2W2ZvD2pvnN7we2TNcJ8dmbxJ22eCCi4BQ15zdfQsRpFQPJdhAJgp",
  "key3": "5DcSXZYhUo9t9zGBvSjC9vh68jPKvDR9ZXj8dwFPseqrNyyVRiKR4zebcaNiJbmGEYNMZN6uD2yMu4MZgvzmq9r2",
  "key4": "ZWtCUDbgBFY7NbwY28So1migE7YLyqbh3direA6z85v1p7yfX5C9icWQwSCctYxHc7h2hjo3SFXiqBt2Fe89YBt",
  "key5": "3JXga1Ggkr75uFUg7GfTPUop1DDkW2RSgBuADDvfP5k1cKNbs9s3RoXhz5kTKvQifAotMdsSkSAcFXonTgPgxSsY",
  "key6": "3bCn9UqXEhT2gY5FAUSyq6kXUEffVjf7Rqs5PmjZriUNR8j4n1sbqsLuoDoJcvCjiE3JFG6VXkGLTYw1Sk9cSUtr",
  "key7": "2hBASvAZVVZiEMZDnMEkRgP3EMNqibtrnT3hzdynMcnid6urGMkE2DkVY5WP7gKCrBKTuRFNPG92Jkugwf9VREDo",
  "key8": "2BvPMbW7v6QWQiVdrqeANimanYvk7X5afA4T2vGfHBt5yFjLMWFmxMqLRS2srAmtUjRu1eRGJEJqz55YkjCSxzWC",
  "key9": "3RnczTuUGNJDHhBmZJKuzATJbUPvjyRcio4ocDUgTRwirwqGvSinHPUmyiiNyABso1MV9FinAbJYe8msSZsfiwfW",
  "key10": "63JPdAc5tnoXdzjyH4H8QnRdb8iturJZN7ve53wH9TZ732NCYXvUAczBxKzRXLGvJMThLBHGk2vpL8z42iBXUoUt",
  "key11": "5qcPFHdWxTcByFbxn58H4M4YV47wKEJyNQxgZqGqobQavsJUdxGKZJzKSfjmxa78GQU5Mpe8nYYbR9pUe6AmMVHL",
  "key12": "5CpW6Fgt3qgKsUp2eZxM2fpdkGjVhmZB8ypRVte1vSycpmqf55cPzwTKXa7vVmv8nxYGHjsuXwX1M4Q3CtWwnwsd",
  "key13": "4jM815k3yhx7m9yfg12J9R8jmhMAzan6nRXmngTgp6hnomKmwRjx3H6epmtWpGiJsbW3qdnJqHHzjLkmHuxxT88",
  "key14": "5abYtWDvCTtNLjBa1yw4e82z5xnV8yodjjKrutGvsszSsTXFm8Th16nDG8JNqZ361hS4vKrKtf1VNe1dFDeapEzf",
  "key15": "5mpr8uQweWaQ6PxXmDPFo3aX7E6BFqLMjfqCDkhdy8U9Luh4muKieP61yXDnVEZ1mbxDFLtoXMfoXYWdjkHHP3sH",
  "key16": "ZmiWqSCtq8dBsMpRvxDdcTJovDwSajZncsjUdyxRDvxtJkQow41wNiESBW9V7QdiSbzVy5kW17Zv9CfnqxEPXQh",
  "key17": "5LQsX8KpLh2y3yyFJMPgBpwuc3beQTiNHPsanQxs2iQoNBZQ43Yar7zFppjVctuT5VebJJV6eG3iWEZeQoZepyK4",
  "key18": "i5oWCVTNdyJPCtpF5BnjESE3WJBG3dtz1G1dEV7gKfqL4D6j1LcwnvnGyTLGznLsZkMj4nfQV66sjKucibJPFcj",
  "key19": "2nuX1MPFrjR6G1VcVwMtTkBaVv5GeznxrcaPeQX85vsJJv78WKwUe2ZNh4K3A9XQ5mAz3RfT3Kadd5U4qKPp4RKu",
  "key20": "4DE2XjApLwdPYpccYXB67NRQshr3XKv7QiZFgVndzK4GKnjLD4auboSDN6gB3REiPC5anQrcnZ5UjXcBm8WMi4v9",
  "key21": "NR63wxqh6kuHRPZZ2EPfEfCSH3zpfvjciwkAMzaX9Uk6kwkDJoRcriukXvcGjZhxPrGVxj8ZzH8xa92mPEayTDN",
  "key22": "3Rx8VQ6yEMwkm6Dzj1ihWo3orViKyhf8LxJ4DqnCBrzr9hNhNpFstjguPUTyBrNShH3b2E8wqdLoGWBWWiRawSQN",
  "key23": "4WpbEUxVn14gUyasEujACnVbTMJrE8ErLNnSspZsSB5mcJVTy5uzwXsZN65K9nzrBCo3RtdJc3SyW9Fvy5324zFf",
  "key24": "4mq15j5uUeVCBTfUd4gLEDac91D2k69iwUiWdR4vjr7tyAgpfRUtD1aXjHEeXL2DauQzvLKzZJ6usoc9vfSHdtkJ",
  "key25": "5PZF6Ma1oBrRNASrCo9mgn6LzrtikQDKBrLGM7hid92dNHbLj7kNAcXk11Fd92GTu6f79Gjrb5f2uZHevCcqNnQL",
  "key26": "5An1mabnm1xDxgXgDekVwsUYDtw7Tt6ewdCJJN6NqpmCJa5ng7iTvGT3U817Fv2Mwu1c5TcgW4vmhwuMsq7ND573",
  "key27": "63mhYj8MceVzd97n6rptntRkBF9YwVekbFcVB2qJtx4APBYjce4hgCJFd4FxW1MEw5ypbrFoscABNYQgCCWbAKCa",
  "key28": "yLGKtYXHQKsFRftiwit1vu9C7UVjHw12YCA3RdtTosuH6mGxChJSpz1GTsnqiCvAgJeJSY4cc9C5xHDUjeVa4ib",
  "key29": "2BCvXis4VpJw93Q86BFraASSCqFoovuEVwa1Qrxng32QkaAodNAa25MdMzrpExucPHZEq7tPQiDgGrugFUKiXzrn",
  "key30": "4QmXgYmftPBjWdPoufAkdTWkVPNg3J4WjEy5BZz9vwPNY2teVpaeBSmaDqpjtAhQ6SoJ41zpdNmVr6wRaBbx2WVm",
  "key31": "3nv7KCpY3PDo1i4nG6c8c8oM8Cydq2LguigPvK2r79ouyCr8y9amK7zbaJmnEFESiCz84rvBkxPp7UYGqGmUkyBD",
  "key32": "5jCrrheXmTvB7eDwKrm33aK72WjwmQyFwHJEKFagArH5pf31RLhxibTUUJ2e4bQQ1Kiy1TJWzA7Qw6R22EL3H37L",
  "key33": "4ZsmRKoLqUgJzNYosBntU8PSkGjTjaMD4jMVn87GmfdXUPHRHyzbNPnkcSyUtdveo9hTUpBMPBB8KAevHoFHVWta",
  "key34": "2iHBQhJ2mbmdpyP9PE6oang3U6aacQH1tU5jJkb5YWUfTD2oSMBYMc2LLhGx1otUSPHGXME1jH5yms8bQFrtEfH"
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
