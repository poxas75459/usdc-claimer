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
    "uEkfLg9ChSMXoEcwZvgfMoYLS5wythviAL9pwKPcjWqtKsmLvhG2MSWNUx4i5ps8ZWJCTarRECwGSR3HgncSgEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31GtUQXbZMN9dtnAgE5KmF2DB1mUeUrEHdfGnyzTuycRYnmGGAwAq4tVMfSCcEL5BGXWMC9JW4MqbiQjR4AS6fHy",
  "key1": "2HEx3XsaM2CF1y7JkkN3KcKrRZ7nAdACaYq5CDAEA5kKfCdb5HRm9H9A5yweJMR4puJZfDHrZ3bAaM7R6gJf3GWW",
  "key2": "4HV4q3qxJEpGVQs74HnnHefrjfRFA5koUo2eK4VrwSdPyNFZ4F5Bxds6RWM8x6PbT1Ds79EmSjWKGboLavnX5PKS",
  "key3": "2bchcQaVAdkrTCu42Vcj1iv2BQjPKFX81D5wv6LKXTjg84q59DT9SfMTJFCgbjtekARQpPsH18Wno143wgLYrBYa",
  "key4": "5i8vgCLZUBkTLgtDNPkopSZByccyDvZHa8zKbc42G5mM1s2fZ3LH5WntQA9RtPDhCFfCtb8szAKGMLy29spMv2e",
  "key5": "21uayJL4AxG5ZYQNGbTC5PUXaViY48k7aegdXdgB85ZFNysraHcEFECTJx5snBr6NozeK36N6CpiDvmkhFVBjHPr",
  "key6": "4q4n2nbVJHbE1vU9GMD4KTV96UM6murWEtPBeGi2jLoBbHy37fAz3XXG7gE5tKRYbuuRRQAQX893EJaut45PqDfv",
  "key7": "2NpjaXXN1CVEP2sQntnCpup4GmSQUeNK1M9Cg5qJ6hmBpqg7x4E3K6fqpKc24H3v2pneXQuPrjYUw9C8RVBznGTG",
  "key8": "2q4DdaTMivA2yTN5nnUChMsfq3WmUEpGGY7a9MpnZs8wGfYujJunQ9NthNcfZ6T36LsnK7m2NsgZQwmZCWV7As2d",
  "key9": "4QGw4MJJxwKLXyELN6EkwTkPpwujFc2bdUbvkhpA6XdcPon3LQD3V4GWuxXCJM62Y28721W1oWKhw6T8vTkFeDFo",
  "key10": "2EGisfZkGMsYxUV97Uxj2DNcG8J32jRkN4oSmVSaEFpWyKws2eo6wpvjegiaaF6GJ2KZfjvvbRsv33pnyyY4j1Dt",
  "key11": "U9TDioWdwWYTFKGDsQTro9N24yymugt6kSJLAbJXAjbgyULAVHt56KyTzG4HGNe7wmMrAfV7jaQTjUe4tLX5b8r",
  "key12": "4JoGrkdZQGC8zfwphRtpmntRRZDJcuU3cULGnYLMk2UrvcfyYDRebYbfL2FCDZUHQGPFMbqkVAZbaR7KPvH2urry",
  "key13": "5nZQrdjMy36pVZE7P3UF21fgHow3htGUzJfpRUc37rnYQTg1riYMYnoGCryNJSPnFqB5PDeRqUvxUqDptch7GaA1",
  "key14": "51c8ELBB13BQhyrTUojwfdCZAj7vhAsF4ZPj2Rwr4wmRH1T1XXCFPK8k4t3CYHBu8EbReEqfkmkHELeE2qpgJswC",
  "key15": "3noFMzYrdrGmRHprEbfGwAiPS8W8YbQAMwBAgLqdvpBA9HyLFA8pF49y1DxZWc8xhF2wHTzRLdcEqpVV81bDKW7y",
  "key16": "2cMF7XFdWNmru4FfBpwbhuJ244qvxrQZyPiR4ubb3zhPuqdP59fN8sEXPkKMWUFvtkVKGoucy3w1vXdyjPedF6ov",
  "key17": "4jiXKMFCDERHrKZjDd6bFvJd8uWLLvUSNAy3bQjzUyJJpQiUYkMmzXz1gCs94dysLQaKXZWiwNc6bFNULskCp2Cg",
  "key18": "3eGhEEy7i2NR9B1xGoQD3czaDTPcnvjA34DDeKE53a7ryib2e6veEG1JvzUxGLpK6GXx2QpxjKPcUCHGaaTiXD6g",
  "key19": "59FoZPC13pGkYLWV8UsY4UkEnwaXGgvHttmgr426ktBkxKajAeFJiMNA8QaDFKNpHJ1jB259XJSDZfPt74XCfz3Y",
  "key20": "5NrV3RtLcrkSUKWSf6YmRkucYbLvPdjynJgGDGbDoMr5Y9XnhEg8HBB3q3HNi3xgBwNKKEzb1TD6Wi6BrXWfyVe4",
  "key21": "2WusJrPJoQycx6ZXZ8ztgAY7rYtfSHHr2UGLurcLxKFRgH7BhnP3DJzwQAJmso1Wh9XjtMdGSKZsfr3BPQEjTgDe",
  "key22": "2Ria6qYA5k1V7R1GbCkNcuKme1UuLQJvsBK5rQvE4kAq6LneymCTSMnZstUrzncKRaeNx6f6AhFtjb756BiAibEM",
  "key23": "3bGjE5626XAmBdPYCBGJxHzoQZ4HdPa3yEgNJP6rFESLoTKMqz5AwDUwcseZRMWMgZCh8iAKpk5NLLfTAHSud5Wy",
  "key24": "5MAwFsjC6mN8KHMJXf44k6VWT65UmeoC9q1w7w1mqCqeaaFJ3FMHxa4eg51bdBBPfCyu79Ar8nz2aB5KfvJMn4UP",
  "key25": "3bvcjqSXySZag8vLgLFSRtbdHfCMWh5XsdEhrJyyZZwxsjCmgXEiDBr46UWGF2zRXvFBZM9xKJ2rgpA89YGdKFHz",
  "key26": "4PJppwLhM7ic9RYDDbSgXXExw4f7dzPPruJBn4b7JaDDvq4vJxSdLccEdSpLS8YsNxiBV54FtZTDvvKmhEA7F9GP",
  "key27": "wsKCx1iVwZjBm6zU6hQ61iD1HUzKu97MkaDFUCU4u9nrgZvX4ZjXm7bDc9mCuWEhefeXxxyUAdBE9FUVQMnNM2t",
  "key28": "41qGz4o3pEBEtMcds8Q5e4zwaUxRKWw2ErcyQeJJpyye11b1jaBayCq1QPWrRJPxC5bZGUGNwW2AhZgK25X3rKnk",
  "key29": "45zbY1WSkis3dQMx8NwnqdA5TxzyouvKHQXP2RRf2yFQ5QQvMB7CUSfGWTeFQ8tHxRGqaCbM3Cr4R3hKfSxcajS7",
  "key30": "4itAk3HZnxwRYEFwwtfRhF1tNLhSE1wZfPbqNJADc8zkhycuYJJMrD4DVQw5g3YtDXEwZNMsHe5imbdYHi7Y5Sfy",
  "key31": "2iEU6UE27PZvafQNKjRD5asU8V4kfqtdWA7YP46jz8LYm2A4uSLes7uhLFFePVtacFo6y1FEFMHZBKFcR8XwrMW7",
  "key32": "54U56L88vyDsFcvnqeMP3hbkR511jazd6WuJ3nRCwk63DLbzLaLuaBrYEnqJRNyoZXE7ibjLheamJZ3gzZnBFT3C",
  "key33": "4rYwqW6gBzCQK42RxBKb9XVVdqTbYfYoBmdYq2SLCW8toBMhntRf13o93dXLCtXnkW4oeQvTrb58u2vCcBZz1iwK",
  "key34": "3gwU8bL71SNrkUTABowdk93CwCwgR78T39UTwq2YNkrt8LKPH2BsR48YVxnJRBkJsuETTXUJgbnuJzf6o7GDMZzk",
  "key35": "32xkKQ1DckRYhAmgabJ1qzeDbAqvwUg4q43992aMj5K3wFchHBNsdzGAAymj2RGCzKozT7q72RU3Sw88ZnHisvVB",
  "key36": "swHt5TQwvkwXtMXNZfyEM498tqEMztC1iQkdM3eaN4pWYMwi2nSnnLopashx7x99kNdhoHWcNsPTzibLSMsvmaH",
  "key37": "2Z4La8JHSSPW4eMk8Ln4Bt6JSwgevt8Y7GoY4RTftA3Unz9jxh5uEszBhY6m3BiCzxspwVpu4WLz1ZHSc2PPvYLE",
  "key38": "29g7YwFs5owMbQ6uVQN92mGExYcUuz4fNMEdxnquUoXwpdirwfx3tYVMx4tg9Rj3UXoHKm96WsGLoS8K2nWPNCFn",
  "key39": "H8ER9pmmgtkiXMaBHRTpZuMeiDE6imgasnbuKmhTQEXtY3LWvo9HHnLCDru3pu58iYpZT6u4Dfsn2pn2Utodp5P",
  "key40": "3VQfKoCMcfCqKZSDCzwic8hpdupWmRaCJTtNp7xtC8T5Z7VbWNbHBhCXV28BHGJuAe3hFt6cXW9ZdQW47kTrxPMP",
  "key41": "4Vp82MhPFy5qRjk5VtkMtwVuigcadSCfJgUe3WFcdVeX5AoKA5xbyJvAmYueFC8FLuWbDVkJqzyfHiaDdKKxw3aD",
  "key42": "3YWqW2JFZKL88UbCiSqDk5YLgEiJfCwM1ChJT6TX7BVeHhZQZvgW5bpqcRThYNGDdy1RPWRH1SbehfxjM3vP7qtE",
  "key43": "2B3uHUurBUrDcmEGE7twUGb7vbZdSdpMB7xoh4herTZ99XuFVakByrK2qWcAdcrG7TJLwoohHbbUdHwHDLVLiNqA",
  "key44": "5rCEvfhhtyt6xqXm4SKwGs8muFdzHghgVvp52A8Co9zhnDYnaPgHPKHQ4jBd2YSyHuEN8Kv6ihLu8Cm3Ywc5tpx8",
  "key45": "2H4DU2RKqYLkJW4i52QxnsaJ5VQMmhQfYGUKYrTEcd6yQ55mmE7GGBraEQacCkyGoE3Akpt3HBNvyMyeyRJHa6g3",
  "key46": "3HrQY186L9cbhxVMatZpBx3PK7HCHmfcTv6P9B45Kq8YnMwiUHkpoha2wDpmz4rUNgfRfEB2g7oFkjH18CTEaU9h",
  "key47": "63j7yjAfDuZJtnsok7xHPDtetue1SecQa4PmxeXQP4yqwNrgiH8jdae8NuiU8kEW2MfaEtA9m72cok1ziWQtBPnc",
  "key48": "jY1S9wNjFRPU4iadUVEyqnu6ZGghuSYXakKwSXkSDVP7QjcckCbNAHgQi4rcBCr8JsussNZ7cuQikMWHRGaD4o6",
  "key49": "4CpVrEZYR65k9MUuc2yX9pcvhHsARmBSVYfdLaLwpVPphCRYrgRyH3UekTiUX1xEnPP5uaoVMfrB2w2RuuMtPhnr"
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
