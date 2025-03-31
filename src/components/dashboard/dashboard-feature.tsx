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
    "3EbcrYHM91tF15NNCwfykpeUZHSAsQcMyxTd8uvvAsMtAQ7JYNgJ8XWW6uR1icTwEx1dcAAjistPZGqznrgcaTme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aRwBooMKQzahpP3oETt3wCfRdCQaJ84Lzhsb2TkNEQeWcrJPqqZNNQdUSqUEtG3mCw3TMx7DNZAkeRw4JRNJ5Ah",
  "key1": "4AGurcHSxmuwpnJkJRTefE5JGNS9GLJJsgcDk2kMtUo9UcGZ6GbpK75M5QZJdaSKNqePZh2F7wWrf1KBtVBH3Ppx",
  "key2": "2Fv9aHubLFVGTYeYM2jSu5a4D9cewD3jkmWB64BpmvbpFwJ37DJT82t6aqJGdwfeX69mJHAavu5jkvvFGxyzpbRG",
  "key3": "2ugZa99p6nKDtbdbGxxxGaianBGjsRRC6yNmNbDb3S8EWddH2N35dCC9t9zXfGHRDeGQPdK57jWENo22o6Vq2YJo",
  "key4": "Pj3diCMSepb1SPosC3WQtCGu5VMVwN6DRU73a3RVct1dGwZK6WmSJsTfRJ52oSdu9ifN7qEJc4JzjGCb1oqvxJ7",
  "key5": "Ha3Kde5Z68uWAcGzXn8iM4dJ898c3zjD94kiGk44PRZDe9SwYysJAosVXPANWazMAUqsB2iJT8fzDKyuNDXfW7f",
  "key6": "4j5jkHLYB6ZBdKpQVbcthWDQJHTC2DxfSQAFVc7MWLHNwr7GnjMj3KYwCGB8Rzibpj73f49J6BXCCfpmWhrCXiWD",
  "key7": "3dh5AtBqt6reJU8813U4FAiXaWqt7v7FtFcM7FGpC9pxf3dNVZByS2ekQ5q8ZqsyuApudcj1ZkxEoiZtVAAiPMtv",
  "key8": "ox4yfAWC6knSXVmY8tTVUFifn8w5tnLyyBPADnpWTg3nrXniJQUfZmmgzcmExTwm53bhfbVKGBh9otdzmR4SSW3",
  "key9": "4DhENge9r3MnWK4gttRR24Lergmk1QdXQeQamWbWG39GmhjHG5L8G3TuiEDSmVYptzseA1LfwbAvxF6xj63Hxk4W",
  "key10": "4GauQRQyrXf9BmRd8M6csdiCDUmyB4WxeVXuvtqYAGpoBTerTaWCwpxejo3Yb469CGJxEiNiKoBM6Jts9sjEYqTL",
  "key11": "3rNsm3Ky8TzhuxefcE4J37TyxNvVEXqGZstFDJ1fXhUGxsaauUuuvqYma39YZ6AbuYe4FASmzABaiBuz8zi3zEQk",
  "key12": "65GqjXUMjptiwAt53ipDPJf8QkxGfWVr1FegJnYVYuNEb4r8gggJD6UsY6q9Pq2JophjTbtkiW9eiMBYWpz5E5Dc",
  "key13": "xMEzffgjkQ5SbjdytmXyD6SKdvMj5ZZ1y9kn854vsjUZjmvY1VeEvTFkMHQAFBWSpLqBEiJnaZy7qnDCRQqgsJi",
  "key14": "21x81UKRp58sRkoACNra668XZkGpQXgbPa2rutBv8wQt5Yus4QvuJWd5ZdWVejqhVvnsokcAStPEUhLEEBgBZ8MC",
  "key15": "27waBwzh8i7LaGHtrPqcmeNvJE8dcBWksBHkd5YFFbiYAxzJ1oJ5rA2F2Wa7hUg7dpUsirDGvPKzrAeYAGGw9cqj",
  "key16": "631z7Cahd5Mv8mqyGNwt8pAjK5YKeuCs7Lwg9mvNTkpaTHGgrPhaySRBaKnd63udQv9DQt5LtGVGqzsTcrBMAf5o",
  "key17": "4dwr4XcwwUc8zf98rJuwaRX3Lhbx3fWMxzJpEHcK1mUkRyAo4t69cRsv1VespLPkqLEu9p26dEPfSAKqE87DQ2WZ",
  "key18": "5jAi4o4np8gvw6N1uchfdGQJyuEbp331ovR4HJqmPonhQdwamez2DeoKJNi3DSifcZ99nnu28LkmgVfo7X5eF8wV",
  "key19": "4cCJdKTupidqJTMGV8CdmRvenpUz2zHE2nqRTajzBixsDwHe1VtwThaQvALm15ySsZMsNagxNCUvJQqTwr2b4qPU",
  "key20": "3Qf6gnSneWtJdXpsZBwYaez4FruSVsYskBUawC5Vt9MoSJNENgmBkrtY2PzV8qzLc4ubK2rCER99CqEpg2eUwtEx",
  "key21": "3b7tgJaL34DpNf1pvFKStBU32wXqBB8G2NEwjNNvnEuA3CWt928454ESTYodTQmypWRagnrQVvy8x3uQToxvH9W4",
  "key22": "5m1A4f3pDBBKFYDv6sDKyBokn5xL1rvc2FWrGLPuXMf1aDSVDZTCURhvt6Fc52XCZh8bQnZcSRYcPfxFvugm9Esi",
  "key23": "5PCoG3FLoscDqXyCj8oztePogeJ76m9uH4uqYt7Fm74nwTmX644bKt4HKfUsPqP1j3LHdMsG1pb4CXCq2xLtUqAw",
  "key24": "hCeAsX8BWKmDqgun2Ak85xmW7UvehbpkTjfgPQBdB5358m9DC6VyhQEXw67cKJHRWH2V1KmPjdYtwxFBiXAvMMP",
  "key25": "2khieeU3g7UumUrXx4kmPZsPCbm1YxUVrWYxM2zxcr4eNdxevm71rkpV4EuTa41CNAr6cMtMgoCHTV8FZFnyVG6P",
  "key26": "4tA69TyNdS4F5ASjxQuv4JDBUchfM6YhbpFMwcPvg3w33daRvX2ZRYYijvmyq1GLJe7KXNsFKfZjD26yx2822cWv",
  "key27": "5EjXyiij5tpTDuwha9HsbXe93ZFNhtnFGWmTgdyGVMavbypX4a6AWJosAsvYppn3AUVj8N7DgmSPF8f8dLL6eLn7",
  "key28": "G9shD83ZSZK6vsDSY5y61B6wNxaMJsRxNnq6GGer2k3TzESY9pcQP2tJd2JCKfWy92debEFeJtDjhHF5XNesLz7",
  "key29": "3MtCUh9ocrkBkfkKcsX3puwQHxQqWWvpjKJLCFeBs9d4k92CxAQJ7q9eLm8hkRTDd2xxXT5SG9prYAwNZYiqCxMa",
  "key30": "4VHhoVNFs5WuBEfkiFkMHyxdGvN174FhuQ2rSxmexucTTWfRDDdh8xi6zcy436iDV9i1BGXQSLmuEUXeYbB3YnsH",
  "key31": "VKAAKvJiWkxWcmMpxktbsFoQvzdPK9CcdNKiHAamiZyTtQbNY6fJtgz3Da6r5UfQAdKEBQ3rGzYXT6sgf1XvxE7",
  "key32": "3uf2e9GHNhvqEq4Y4XBrC3cN2RCtuvVnNtDR8bthXRE59yRPwEZoqSr8aoisXwUz3XDMQp5s8hEtuosB9dJChF9u",
  "key33": "52x2XEnh9oCKHFhdsVM6VGYv1RZAwkamYFkuHkSFUPrvHSYBmg3uy5UK3vjEBfBhALiJt7e13Jb7L7rYi1nYYCym",
  "key34": "5w4zCkHpS3htAJYPuyYFHNZcSm4xwofCV4NaCtXV1VqGSP7QyhUNHGSjekRmE7vmF4hFKLnmSPgeFKGEUw14RiRe",
  "key35": "3HodNfmxzjVDTkFuE7zTpvWw8Wpcp9CS2wuFB4tCnzegwRDib8Z8GdwtGTW4oMNDyFh9bNvgBydNLCGQNyuqkpRj",
  "key36": "5Y3j3hqqE7C5VeAqFWnr61xXXvuDWKz5qRtPDRZWcxva6rY7SL2yiBpzmB8xPTnZJZ45CJC3HDGRyuuM1Lzp4gV5",
  "key37": "5LYoK82MZaCshUGnsV5ZBZEfdjhzVcCGvBihF6h4e2XVo7HDZkjrvaq5Le1M5qzeKGwaFQHwDmxv5JhuurpnWtMA",
  "key38": "jXyYeBLz2C7DrxHLQ4E7TDmeJgVWrF4HYmjHBsRwhdbxBMXaRrThgzT6VgK7q2dW4zwv6oo1TddCRcAWzBtyFNw",
  "key39": "4KWT6hqpmWit9G3oVzWzFSG474vZdGmSry9u2VV7WubCto3K6N8np97ou2bywU8TK2HKoGmDEfJKoJZtqbS8hJRY",
  "key40": "5sdsu2evfeFuyBfypt7MqDA4tDSj8wczdbnvnmcN6dzEa34WLC4Vue34t3HeB8dbUJctwivsW27tJk4npTwwWSpz",
  "key41": "GnjmMa6q35Kt43kumCTfjEzbgJLo5F7XA2pgJeLDhnFqvm6W6vtkJhrLtyybm1oFbF4hsGemMRJEmGGQFXpwZ1L",
  "key42": "2ohfXZ2FfjTG2KNhzvXg6dAvmkBGiNuSfEE7hRVzP8FnJUsJpMtUupENMRf76K2puznBmDpYVQjmFLUME9dozftK",
  "key43": "2pQu5x8HjhrtBirX8UjiSAW5922jFr3Tpu5Hh7Xz6oi4GnQ2HsZrRvB3xsBWH8EtM8viuKvZ5jzLWQL4YSKHYVJY",
  "key44": "3F1FUkPgmLF9dxD9enDJWugtjoioegj1P1Mkj83Qq8nnjRUVboopYFcGs13SqyzeoKstz1Rg4QYd7FQxPa5NRAYy",
  "key45": "5SWvcLn95vUCCxLkZdcu5BdcHsHffmbAEbLBARJJZXE2vyQeeTu358eD2mzKqFGN2ZG3C449K9ypBKJBp3tJDrJA",
  "key46": "4cDdMYD36cA427DA3JMtHKiPLSVPEL4hnxh91xqZysgVU16VPbLc1R7caLKz3GYrep2hj5G8pTYA68NT58U4NDxo",
  "key47": "2wZxETPqkMwPPj2kVxksc5bMbWTGx2fkhTVxThkv5UJcfNWy5Xn6K68T2yCQZsbMfS9fS7FzjNEFCTsSbsfYjjnf"
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
