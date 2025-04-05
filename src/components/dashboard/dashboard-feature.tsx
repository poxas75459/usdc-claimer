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
    "4ax66WiWr7ZpUZ4dQucwG5jg572uvTRwoc2r2zS6FWaedVts7TMJcLx8fJTSUxCFLe35UDSJrzDnpschjPaJuvxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2igauhqETsChJSaWirPNeAgEWyXEPUenMDrs5WoNccGe47J3jchYvkjatst2nAXF96WKs36qQ1R7ofdbxCAWTita",
  "key1": "3fNiuwK5SPhAFTsW3SJ5gexTL3MrWxFeAntS2ZJ3mx99PdVuQicDq7S89v5GrRNcQX62fWVe6AXxmAXqpGQy23h1",
  "key2": "4ndESD7ppbubALguXrq2jQL1MoEBJhKmjCo1hwGz7qmcX971K1KGGsNxkd4cDg3xKRNbmv47j4fiAf7wZmo8qEFk",
  "key3": "2Y515ayQZNxrBfzqaWGFqXtrhsodSZcsY2NnHaABN6VALoDXz3U2YGgEFaWBbCsRmHxq8nfyUHjxdwSs8seMRELg",
  "key4": "4M5KK6oaDo7ZH6L5UaUmtzovigkQwCEggmUYGhAQ5A2Vuq2ieCajPked2MR4gcgH66W1zH9aX2kqwxyyCg74yqvN",
  "key5": "3pqRkaLYwdwuMi2NmPiwAwtyQwamApGaYrPzW3VqY9Q22T3MMidKnHyxMn4JjALzfAMQ9La71pirvMLx647JEvki",
  "key6": "3Jj2gSYsGcYNCSJ2ZmyyEWXtTgfe4xveYL7Rj5v53Xk3RcaGN6AqFAn59rdHcXfCkN51x7di5g6KnZAaaknH2Tkf",
  "key7": "3o32VvqSUodUhgXq5hZUKVeuw82CgE7SYajcb9wuBkFmWKtkPYWCnc2TUHK4BEQ6ugewfyQTQNqptoBrUHRzBCxs",
  "key8": "3DSufrG14ZCh5K434VQmRUioqWmRLgribQ4k6MukSLTbtVdBDPAdkrLAeTFdNKPC4NBDyJzXqn23ogpqgdFdddcd",
  "key9": "38Nm3ZRqe5A3UAqbxgFZ6cchfbSM8kMhn9eEuowtMKFGBmPGzNZp3ZK2AMAFwQpBErS5ggCw7wDaXN2GfD2LXLKk",
  "key10": "2SJYrbCRzoRMhmeojCuQc1mSxDirN9w1NZzSwkEzPSTuMvAwn7txctneApNyfFDcr4AEaoaTtoPoQ42H7UWJY3MZ",
  "key11": "3a1tkcyHghqUFZRTR2shbfMe9ZKrr7L5Jb7V6QtDXUwQRCMCVBeXN8NHWqTidMqh4A1Yzn4X1XkEDtKBGEQVD4Ah",
  "key12": "29g8wQZaKWT9Ef8ePa6oe5iZyWd3difwNgcjXj7Q96oCdxbwy65PSJznpa6mpnyAQXrs13cBwLGcyrKk7JDThTMc",
  "key13": "5gKJkTDYCaQqNSiBhZKSNFxWAmqFxygkSeCqWaxJaMXcBoJLsaY3p8V9Q1bwPfRFS55QzYUAYhBzeECTh1Rp7Wwk",
  "key14": "L1Vm1ssBnFnAAA4HkaDvAGkafoFT1vcesyx8S3CZqnSfyfLZvKsrWddzZ6KYDuJJ1GfPViduYFF2EqDeY3LsZ3R",
  "key15": "4LE6cKX2SWxdntodStjQphZMxJcHWVvbWcXRsxmoVWcDm2iUq4Qhshy5yfeaLggGr6szdJken1uuFFXyypp6Fduq",
  "key16": "5o1k8hxUJzw1AyCPRLWjfFp1p5Nf4hAtJVDKtmrekoF2JbUWPWu5ymSBUpQn3EQRcoqB7nBZXPnGDULgh1AMintV",
  "key17": "5b1Pvanftx9pHfGG5Ly8SNd1S5dL8atYTWaeD2h6QPtbPqxPy3vMnt87APmKNxBXHwHoC4caYbS2iRCUA98ZDvJ7",
  "key18": "4r8xJGhE2DrsrHPQizfmtaWRLwyiTJSHgKFNxiKoCyvDsurWihuWFXVjsVT6PJiWDMK2M9AzRtVaJcW6aZyTbME2",
  "key19": "5FQ1bQnXHeTYT6LBWECspCzDJLVpeoLUAu5aCPjmyg24oAKZuQMb5Sjp9G3GF4WnvRA1m4pEx7ngHWPZPxD7WwWn",
  "key20": "4nXYCcq5S4AdPacmvKPYhURMWQexMjpNb932N9cxPEZWD8k5F8ecExa6rE48fK2LReXjnLsuVkaL8ZGUW3iDB8i3",
  "key21": "2y2znzw5GchNTZ1VMicmUjuUd36F4Q3Ap2EYrcqa923hgrEQhg6xSe3Vspoj46JYuWBy6HGMdmn789PQQmKeNfzp",
  "key22": "2EL6xbY45xDRarfrvk7ixzhcgcKLkuQ1tc6QDLvzLJyRYaSNUPrcD5bYGC4rEytK5vfZsHtrUuvRmSCPKkc6nqf3",
  "key23": "5MTkWTu3JEAAhkCHrKMRSrAXYEzZGpdbaLYpN4jcv7Jy8ws55dTYmy4bzKtHfwhLiCknJ3GKmvFK15PcAMdg7pWz",
  "key24": "4JhmGJnRsCNx3Gux3F3KEmPGH6ESkLdDoufKuwHjDgko76hvJCth45R8ptZmpvGkNpSfAhjJ27tq1D8gXBh6YKUe",
  "key25": "4GYFGZRLtZ1W3ExL1RJNyiYvSsQkZQcyzyLGRLdpNnYkfGZhFPkphrMYBT5kKCA4X4tDSsiStGqcckgmd7qaYXCa",
  "key26": "5tCedy6AYptLgdiD5qf6H45Z4PPNLweCBrJoY8roa3kfEnUNwSUSSyoh1oRxc8s4L6o8cVEfpNpJu4P9D6rkC7eM",
  "key27": "5igAe3Q5sirQE18yrF5z4ddi1ANgNXxStnBA2tD9M4xGNzcaLrsKuR4LcDBhbQnTPY4n5aTebkNWi1JE1gmYVzKA",
  "key28": "aJh4J2yipjJz34tpSVFM5i4ezTgHF6Zbp1e9RCuspgcGGrLiwmvyqUqbD5vkoEu2VypWDJ5CjCFsgzLQXm4Ye9n",
  "key29": "5xWRRyT33A6DXtYFkSHvhiXPGWKzkDNhrN7gQEF4oyPnhG1makk4YM9uayrHNVKK26hUHrAUXWTBnjJdtuV2qkzX",
  "key30": "n2uLCL6VxwGwxEzd96nRTS4Di4GTrVjGKmfyWZJu9UQmEFYEq7venEm5KJq15PAvBQ4fggJqVF13r3PxgBWFyua",
  "key31": "2dcNZ12hvuu871Tr5MhjwzjsRugrwsvK4VksYjdx2f3jqLz9bV8poShfTbu64e69sBZQxXZS6r7HwH5Fcy2ZuqJw",
  "key32": "4Ha1EnJ5bHJduHQMjvc4hADR8GrrmMA9fLfXsH6neLkXDfKKUkkW8yEbQTNq33KBYviSVS88HePpDVwLGddtn3KF",
  "key33": "2Zq9UqZDmyT4iRs8ZRAaMTrDXDodtRXZSukVWZenbtRYkWwwFx5a3YnFK9yQncAPbnMXiWhEsvEtmacm8zWAuAjN",
  "key34": "2SaAW616WBajWR5ztbZiEvuXXZr6KbvxZKNV7mQTGJkoqXAuBMpkp9peoHgkRziDehEnMrU86UdJMMutK8Ez4u9q",
  "key35": "3rxL3BnzyWUCRnQpoCxphsShHM8h2ntNCZ5vXJ9nUEzUuATJy8Q7o2K3sPh3XjKgAKizESpVB2nJbqU2hqu5CfYj",
  "key36": "38kkeWKrdj2jd2AQrgRztpoFW328gLt8KzaMNqAUWHaZkiaNgWshdgdCZc7RHMH2tFqPqkme86fuj93LwApnpyE4",
  "key37": "2S8X85WoLr8LftaooQYEvUhRU3rq2rFgWCTVg14Kothkqb33uERiRHz9g4ghRWCSpy2DRuomy1uNX11wjUssCmqe",
  "key38": "EhmgCjow8uuGoX26bFrbbUfspw7jqDC8b7P1FJWDNf9a6h6qa1SVBDJtVEuD3uqgUMihjtsBTAabNX1dtQYPqgH",
  "key39": "66BkVpABYvBeQ8ntaJooaqU5Ch6BboUH68uDavK8CUoULyK2o772zpwAtCxZjj1ju1Dc9Tk3gJExb8DGgnpXqXne",
  "key40": "2s6e8f366AxSXvrzwzpYUpdaeuMMHrHTCUke4QiUCYxM7YfCCkwwWZ2bJ6E42QqfqTEgWxkCwj1WV8umws9x5Mtv",
  "key41": "36AqHCieUUrDMe3Ff5jiBs4C4FQazWLik6BG9bkbPweL9Xb7t3aFVwmutCdQVP1QuvzUvtRyQuhYsDFUHWEA81E8",
  "key42": "5wL8KA6R7fB93epsHGf5sq3Jzwt4AJGPJP45NkdWHVdirgsL3SvU5iADAWGeCxU54i8rwxEuPtT3VYzJ9j8tf76A",
  "key43": "Ema5ojjeC6M2xJtmpGhyUpDQ2cmnX62HAeZ6Pc2ZFwyYSGSXEZxXnrSNsxQu91qkQ1dvwvjqK3joztemJt9zewB",
  "key44": "481doN4RxTzRqQzgJ1xhbWmSAMfPpb6KkaSiMubs3uWHxhS3vXSxLm7e5MuTS4CCNwW2b6oPrVPD7gyQ3XdzqCdr",
  "key45": "4Rs4puoyJWNrqPW8Yi5EhgtJiwe9x5KJAn5DmepsdJXRsrzPMPQ1ZeSaDPwH33UN4k8tr7TZTxQPhBCYADWvXQNL",
  "key46": "5WS6VGYuqJQ1DsqDVCubJCwxwFnqjqKMQTtAYDSnokN6ccHGSMFDDzoGwfCkAB4dKvLTzhMJGTdXEkVnuEy6dn3c",
  "key47": "5FqAL5RMH5EDrKXkCbbRovPLTamBY35CZbq351sFkRKzT6xomfFur4Luqi2xASEHFKzAfbmzbcJRgX4Dd8ktNUZD",
  "key48": "5azCudHLnYgdRrLnB9D5FpGsrvkf6d8TXLiEKWgmSVxdJz3PwAySujfhQ1sNS8a5CDpvehC8EzsRLJceXCPtr7Ef"
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
