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
    "352FjCFABMrHBYyJgVep7JW13NjJD5iWjEBvkSVboZeHfTFRFa67FDbreFUsYZofWqwkAanRcDFiNWFX7W6QXm3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PYu99U6XTy3GBD3XBXYXJJzAFk2DRBX7chohS1XDFMYCP47eUkTucTZbfLRAkfkXx6ZsXguPPAGRd12n8UaxhoG",
  "key1": "A7VoM3xpCrUKYo2hpgVuVwkCi4bqe1yF3iPpz5E5f9As2kFSRcrV1fJH6iRosonV5fnKZhouqsqoExrR9dRgV28",
  "key2": "5FS1sqMwRyBHU7e9up2rWncaqK4JjQD4QbGJXnMJS2nqAQiZo5KJx1DqhcnmfEHpDAUeZMy6KGwf4W55raL1uqyJ",
  "key3": "46WmrE7jMe59TXzJsU26JsXLvqS2xQgoi6qAvw1Dgcs2gAw5gxrCcGd8YAtJoToLzHveexdudkUHZqDdwmWcEy2d",
  "key4": "SmnGi3CcmNPhVRMLiuXCs2EX3ip8fJToXquvyuxri3pW3uux2EWkkqvWi21bdynPVA3CSFFfjYSJ3eYWChyV31f",
  "key5": "4irTjCjnP1PFC15C19fd9unQvehn8QfuRVZNQKWmeTuLDySUALjkz6Bsm4gXj9ShVcmi6RMsJ7uRXsNsTPY5PYFj",
  "key6": "AUrvpmxzMC7eUVeoniV3v6JDhAoSTLS6ZAn22ypghqRRJJZJY3MXiYg2XkpAK2pDm5iS9yxrZHx1ik1U9h6tu45",
  "key7": "5P8QvUHaX8GmApd2WfvZ69DNAxBohKdEy3yuY7VkWSd8hWaHRvUoNqc7P8JHfU8mdskm6Maqrayx5qrg2eMSAW4P",
  "key8": "3sEBWjeveKmnVW4g9gK1CS1zyG6x5ieDF8Tjey7GBmdCHwVD84DSJgHEjvEzFq32jmAbyMqUBNTH8YkTYMEzgrCW",
  "key9": "47MRDXrcJwhEDqd1P4tHwx8ea5gLoUfYR5KQxky4JJ3e1hyzN3u913QR6qcbmbTqyW7eazuQ28TNp2gwAjX2quNd",
  "key10": "4CRNERbudVDM6TE7bfhszSv1G5P5WnodPkyMFd2Fo3RdbvMwJ1mwpvRhgK4cTvqAobmuMNmvuwuPFYK8dVRiQn2m",
  "key11": "4sGfuCsabfwdD12V3An3oW7YGqHY3VTcZFU23A2Pb5641VR5caWDX5VDnH7yEFBjEREvMEfGn4MMghfc17evDubr",
  "key12": "2A226FKCt2rWNhWwhH1KZ8GdgRB8dmM6TYBKtE5dDvr9nq1N8HgFnpQgUt2RxqLgHda4CGvCAP4bwKTsxruxFFqU",
  "key13": "5gtNyFPPv4pNBU8CY1fF9wx35fSfHaZ6u5K92QW6JvhfDAjGmNNDL9txxXc2ZjQU6veQGrQfRFLJSndSiyFweSJB",
  "key14": "3jiuf1pE35cmHKiUSEpw5PyV92S2BBxAufyM51Cdiqj3ogKFQEz5QcfzTWkJzJYMTfHoPWVqdtRvt6Gg7rkTeXc4",
  "key15": "3or7mKQLQycDxjSvkJucgFhq9dMWd96jXL3g9bLj3uFZ3fvKAdxco4y25B9McgMJvVHJF7AcKjPFfLg1GmijeLVm",
  "key16": "5r49nkSScTMjdLbWFpU3DgTvWmFVzx97wVB8g2iPR8ezuGoyKgHTSFQK8G2AbUXK1CComM5RSd7iN6U6XHWcMPFM",
  "key17": "4opABpMPe3uaoFrAF8MpikWq6KERhMw195RrchLV2SBoSxq1uZRAHAyPDJmmMhHu7VJjb9L7sKRVtThNDxZpTYvZ",
  "key18": "5QMY7Z6yiiQpCugUh5BXTXrwcTh85FiSjp2s6GVCjiB1xViDmXFGTkdjmzqdyKLFczHWHJitWsJ1oGbTWnau2dh",
  "key19": "NukSh5f7ro2utm3Dzhi8zhuifuMjKBTRmu9cUCbXxfjLCFfuoXbTwTjrsgBSJ3SHAW6Tm6AUKDFRuuYw8zneeKe",
  "key20": "585ZH3XAMQSXgcSuXiD5RqkvSu8bycHHbfqB5L75oT4ES2erx2u2m26ZUMkAzCXfMq92DsrLu35dCzskqRJ5gs91",
  "key21": "fzt11Ez8xgvFzB4ziqPwRyVs7bqnuAm3vocuDheWvv888po9EqskSDjpAhErdBgWRxHSGvz5j7AQRsLQMKFZhjh",
  "key22": "5bSfVNHKUs5BzfpqggLGHorfHkDV5dxmUXec1kuN1vAUFtomHSPt4XzfJEw9vybJLhFP4fWTsyMaSXrSpvys7Hbz",
  "key23": "264AX5v57tWB8ZGpgw2LH2WX9yCGFagCYR4hfD9DaYcq6PokVZYpDXhbHonmwc874wwSeYCfSPdWKgDKoqTkqFDK",
  "key24": "3x1dcmo4cMKPhF4NS3bGE5GYtG69JKEJUHGETtrZMnvwskvuibGsns4VvEL7qGA1qN7dWieHVht4JAK5rhy7CXiJ",
  "key25": "Fao8E3D1wfY4XTuDSfTbbSMHo11qnPVFa5vHygZFpqU3s5LV2y7LiQLzfzR956Zp1s5LTUBE761Ac2C2KKYnqz6",
  "key26": "2NzXyN2NcPkV9fxCdfZPQGfWVKDrvLYf9iHeb2YoqZf5gN5qo7YqhnVKaLJYgREWyfq1yMqkkpPxUmpeBbdBBXhj",
  "key27": "2CKc319ZjTcCQG8YxoPwRgvztS6Q42227T5Q7SasMmjX3WHSw2rct4AGTsWqwBBM7XjUMC34ca9UWnNAzS6ryHyw",
  "key28": "2FpwFavgtqyApp4YamPosLJ7qEZVVJZc2utqFTqeZiAjhFLfcia8mvmmuNooh3c73pAGHsU8Ui3ZxdhcRwWB6z85",
  "key29": "5EiRKrhkrSkxc7SCYPVbZjo2bT38p9abADtraNJRa6ktq4ZDoN46QmgbECV2fsextdk8TcXjAs5VzZspjmGbzNEK",
  "key30": "w14QwJckrE8Z6cywS66wrSQg6iDeJ52Pohuvt4zqwejwUd2WdJazCop3jSgrWK7Y7VTr7ahCKG2X5CBB6zR6XHp",
  "key31": "waspTUSyRcBT4BDKhRMqLYbe7tZHyVmCTcucoZCmc5H3mtBYWvs2WYrMLp52wkWAqgMngMCFaAxcw77ac4WPtwp",
  "key32": "5Un2ynscQ2Ui3u8AWzH39r8bkXfsUUkWrrg9x4vc8YfLmqDH7y2rXgZkiEFWbsfAZA1dSzM61k1P3V6wUHP4Ar5A",
  "key33": "4tEqxQh4SgDZrvsVaBvyfYSrn9KudHET9xCii4RDZQ3vrQ5N7zpPQpDEkFDn31xgoxdVLa7YyrgfRvSKySX5BtdT",
  "key34": "37dQTbBXUgi4gfeoucwsGjLzqXhEE2tz6zKvzkTigWREqJDmFjp11U7tbZCVnnHvuLSFjY5jBG6r21ZgesEYBXh1",
  "key35": "3Af7SNH2B6Q3gDhmwJ5eF65EsAwCjzsun9K5G675dMemEo3fqUgoc8idyGTqdrdDRVvJeoS2jLcRGQGXuVahNPfF"
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
