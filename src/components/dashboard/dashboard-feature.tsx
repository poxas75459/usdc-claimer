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
    "Z1eRPe3VwM1ukHLa2jaKZ8XmPhv43fV5o3wjvjWyaGYoABbMxPRvQV8fuRhWALZuDzY8WPP75Bi4EDeAmjP5Gfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nc4S1NZN6vGUb4MzXCms4gD5QVEUWdZcfWroAoSWLVby8GyADj3qqAbXxao5cPHMG8tGabwurMDz6VqqpN9Z7Ar",
  "key1": "t23hFyLYXSDw96Jig7RbhWiBEcp9uCK6CDoX3gHHAQdqdvWxfymBLKhRgW7gBUfFfCgdNJoLwUCKqRsAn6JW9JY",
  "key2": "wju6JffD4aFhZUD5zc92s7at5v44wtMncRkSgvMiRcHqsd5e6R5nUJCMrtCLnm9Et1uAjvZ9n2HVmZY3FMDfwmX",
  "key3": "33qGhADrHUqg8LPfQpGPqcQJdMPxJQNUUoYQ1hCaciyPkQEkJWAHR5iBMULvco4Ttfk7Ydrcy3cZhNF7xYS2uSev",
  "key4": "EqPeEM5XsrK4Rvg7zquzdKR5o2UDyhEBjJrFq7eEaGfzNQPKM3iNLpNPtG3gHxedYg8mE4QRMVbsE634ZkM7wFU",
  "key5": "2ZTx1XmjXGJPwikZqHaAiVAzP558odTVPwZaWzQ5fMJdMdEJvJe3BvbtHZdi3SUUQJo5rJVYvkaQ8hNzpsAxHo2Z",
  "key6": "5jLM7nULPmoptMYh6J7sJ4cjDMwPCNKw2RbPo6zriZt5G5vs97PfRt7qhCLTH56t4V5dyD7BUoaBQrb2a4Phur9Z",
  "key7": "5ycnHevBFy4iDbMcCdF5xqRMct4sMxAUc7mHJjdsAECPuNqDXtuw1gPjLL4NuqGEHWh2YktkXkAV5wJA2qKv95Vj",
  "key8": "kJ8oXu17jBpDJUqPb88J6rbvBuQy4QDgqfyT6BDoCsczRt8j9FcuuBhCdt8xm8TtjJ7Z9TS7d4WFCnqFnxdCVEm",
  "key9": "5V1CujRMxpwM7RHXSHp2HMuLnGhA2UrRX1TC1K93wks1ZnbYogRPeW6Kgn5WY6LGoYExToULpa8uD2sos1fi9Cuj",
  "key10": "3G2bofgWEsVaAcebMhhUBZyizyig5E2CQFau3iVFfDMgKuHvbD1N6UYgRaFV1tCaGqHdGkZ2q9fSko7rpQ4WwEVA",
  "key11": "4Pu12dVLpf39SfDb6rXXfrVGB4mGExvGSymypAbrzebCG8NCSF8wAiubzU7Uy4pAnJm35BTALeW9MbrAJUSb9NRk",
  "key12": "2EH4panDUvuApmJ61ybZ3iuk7fKQvBabRaG9wJi2TwguU8wd1VTnB3NBX2bYzaCvcwAwvxg6bMrLVNBaYPMqE1fb",
  "key13": "45aE59PYHqcCNm3CEEaLbcsXPbiNzzPTcSqfJ6dXeXm9y4NaQqSQMCeX2aDk5Co223A6hed7uGfqn7YV3Dd5ex4o",
  "key14": "3Z4se2uKHMqePV9D8wcKdS8d4Qoko6sJ1MZXmsxy2Ey3cVL4623q2gyjQpgVi9fuYvjraio4ejumTxUaZ61chVMA",
  "key15": "4CrieqMBSJAGRiD1Va2SFV9xvrF4cJPCwJKnN1dL75yq786hhhXkfZrT2C41zx5av7K3uZdtWKFiq2eJzNfwRtDu",
  "key16": "3zEKJttpryH8hzsgHbTudNc62BwSK3fPde3RoVsDNKp4h7k2zEiy42rbViX5933vnfq67Koat3XsEJxrLbeduQYm",
  "key17": "5Wn4ox71RGRHrbG4kzakX4fSC8R98hRJPUfq86NSbQc7abEpz2DF7wN3mrkwXgCaEWdLcbUqiFqYw38G8ycYvFuy",
  "key18": "2QPxsDrvZpQUhGLFPAan1h54KJTsgjBTiGFdJtLW2AtL1CW8oidYZvQRbpnXTs5B3QPDSerWR3LPvrMSuqatkSgB",
  "key19": "3ujThggkLZ8UPoVgCMLCweiNbtUT4fRFABV4ubrEE1nS93d6x29EGKaBAwmQPNmDjZQP1XH76avb9J6zfQ29xvHR",
  "key20": "35opg821yknEzUsoimhVKdAmkDQDM1MhzT8udrRMz6KZ9VNAs24981kVMTQtyTyhdn9y2BzXMxPyE2g7Yyh6E3kf",
  "key21": "5bY3ecGLaXga8V8dS9L5QcW2Mns7hiRbzBMBK6wbThAvzGjJBr5epNUXHs9WWNGnhruPsygeDRArPpow3eakNVU5",
  "key22": "3sQRabEjQUmrJpyFe1bD21mLBaV69rWZprL2suF2fLp2izVoYg7894zR1p7A712kQVzYYNWkiJWY5sKQh8Yp6UEY",
  "key23": "2R7b5MzrMXdUbi62SYbb6cekASEbBa6NqcQ9RmMr2njXC9uSURf3dqBnnWSRJqgDSRfU5JT5rmg48p85KAnUYebd",
  "key24": "4PCUyEekmwTGNNQVTYFd3VBCjf4xjbsNwHFwgtwPWQ2cPxzjVtoF6cDHX9P8YjRnrZm4zNNJeTDoTCQWDwYsgQ2k",
  "key25": "2C9vUfG4PPUBSAxwvKAi2exp9S6BLnYoew2zqc5LrKxhZrR8NqeyAxNQ5wCrVncfsGzdhscxJtE6jJwQfJfN6uwZ",
  "key26": "5eUhXYexchX4WVk1rtX1yn3wR1AMsg8biD55tJcKUPZJ9hjLZtu7znDt38pqDgmVA17gZJPrWvZdLeajbhF94CJs",
  "key27": "pnY6bP6Q3adxED8fr164Ps7TPtSZ9XbW8iQLoDMcb8RyfhhmANC7dAjzrzMiik6caM4jmxdbAA5tJshHHBUk2MS",
  "key28": "52k5pGfzXr98pdv8sjFFTYhMZqJ16jWUTpuX5iQnFwTrLG9yS7syZYGvLbBh2V2v8upPeqP37oAon4u792HA41Nh",
  "key29": "22So4aLzYAb26CWB7W4iSCgjFDoQPnAqtxJa1wpVgHJCerFoVk7kNGHESZYbHZoKmya5q8uEGvKoVsy9LekTWTHV",
  "key30": "27u8TtyKqpwxyMsTxB5YdYDK58WGDhcP9YbYdwaNFnGjKk3Z9t2A2GocuEcR4rwccy8SS3D5GrVEhTh9gnXrBeZg",
  "key31": "3JK9CKjCBpheScepKFU2dWiSvtXsq599DyYC9LS8Mx5ijjgXsY4oFhyt45DqA23vNsaV65LgfkFLNb7w7Jvmz34z",
  "key32": "5XYEVtpUuG8BjjHFFByxctY1TRQxCmJms6MqxN1U4yVsFK9gFobTFwJmY7eiooMVQ47BugssHmCDXeCpHNJDQdfA",
  "key33": "5Ur86onXvYRba7VmiP6dKmsgyktkmSuino784JMGPB6QxLmhixzXFoDdZDphAkrpyqjRh9vqAHHfFTn785BoweXn",
  "key34": "5csdazShFWR2VMnNvrRYNRKSHqxvZFQdHc1opPWJkfySTtZ344gupSMbsDrYhanb8NHE1zdtVAQkt9rECk7hK6yC",
  "key35": "45sW9mRFsqEYSGrNrRc84YPLU3x8SNTZPeVWdZyvN7CEsWyXrxsfWBzMUQuj1f36h5swyh3Qnn31JF1KRypsw38f",
  "key36": "rQvd9Loj5aaeBguYpDTALs2FnGHXGRcgZUSciSzEEvUBwyB1F8Wwmmjjn18qZ3QrT5yPGCTsggpCaYwhESxPE3k",
  "key37": "2cm87XJCMb373LnfCG7CdinGnvy554LxUAYrdoYcVzADvxkFjmJcEZvnNvaTGVYXigsFQyK3Cef89gyfRWguXx9K",
  "key38": "28tzS1ER5mi97D64AcPgvrYRMmuCp2NYycvGzb8xegp7Cmr3meTVb6vTt2AsuA5SotKuEDzcPaZVFJcMFAnTENgs",
  "key39": "3aiXAMhpSc2frUHfky9sePzqp1MKUcLEC6J6YqXjAJwrAb75TEwxnPxnGsVP3LN2iPrgiJcC2Rw3KnZW9Hdwmy9Q",
  "key40": "2RiQyrXLqKrQUrsXBi1cQG8phD99VoTea2ppkidti5u4SXffT9EBeayc66AzR4Mbz9uKQHwPYxmMChmY6qaC1aJC",
  "key41": "qNPqRfGAusofWXNBDpT7eAAoQE9WtPGxnQsL3TYbmQMuMFQBTjRpEAuf8beY76e47SmSKZuwrMhV339VaHebZoM",
  "key42": "DTGrDsCCLyRwXkMu1ecopR9qsDVoSYFNdaimBdTJFvWsa5gv7amg21Rji2c34LrKfRYmfps5zrBLie4dQVKKfX8",
  "key43": "3RUDgY63KtHyeMXHduXVD9ssjjkHdZzqNcQzwzuWAJuPMw2Bg5w3jYnFHJ7TaJ4XoQsaiw2FWX8cimWyaUAnwWKx",
  "key44": "8oLWecRZM375xUFM1ePkc7yV9qhT2MAu3LnVoNnQ7FmbJhyZ5rXbedy2CrAsYTDfuRxZnQg16fAoLVwu7bmxfRY",
  "key45": "u3K1jrZNovTcKm2PMjNd3g6tVCkEkpiLokN5ViTjNPgVZkoBU83SeBV4oZXqq66aTLrQyAX22KpPh78GNuhejyz",
  "key46": "mgzSPAQgyjUM2Z4UDGjMevVnFoxoFqhtmqSp6Zj5TSJNrGkCwGV6FRT27a6HbbVztCzZkeN3Npg3xbXqomaZjG8",
  "key47": "4Nxy5PayMrDk7e3ovPdTnKnBFWHRAHoJfD4JhddW9A3QK1KDbVPQmGksTGtBK8PbdZaBm4W1eNcyafFKiV9WAJ19",
  "key48": "d9dTGNVFXaYwJRdPBXsZovkrGH8X3oaY4pxQxV6J7PUofJzJpMftwzR4RhB4MndxSbQwufzcaDqFTAzNvf1x1ZA",
  "key49": "3bJ2usmFHUzfdjKgvT1FLE36noZeHxAmQK18BARMWoxAoDNDiNgkLGXSELixjRvnV8oLmtkwYo5ChqJXQXSLpX5i"
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
