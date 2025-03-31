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
    "5NoPAnXrh5FJVFawrvkJk57X5Ucq2j5Z3uAuZnir85z8d8Kp7XAfd3GWA7ZoAEUecA7vHdhsrv1wU1X9PGe2jgQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AGDKbnkfPCCW7CYdzvHxPReaTpwJKUdCR84eFgbzmR5A5GQxeidQb84M7yFsdgV6c4EU9kmso8WXcSHzHEnSrqQ",
  "key1": "3ZDEmvspoYfPSvpeTgSubdD9VScRGDHhvSVkuQ5B1eFHrvP3PW5PhUdhV59LqfY3hRdPqkbPgVQrjSedHPVoVdhV",
  "key2": "4M4PzWWMMtchqPHrn6jqVdqWytjXFeMWfXFJ2thYTBhad6m2oAnRtHJxzRXBErwqMVvZMmAUkwhm9jgKGBoQpMwP",
  "key3": "3FqFaioU4Uy1uNjPYssbGr56radzPE3Urnx5W8hyvCsz3srKLiup4roLUf2eNBBWKwZxL28KeWF2MrWUW6mK4i5y",
  "key4": "4tXSUasC8vF4pYHgNiZVoDWxfTAZJ3ZcTtnDYHgaeszhwzF35GzMRau4sLMZKDGAshPJpXz1hhrjGN3cqANfjrUY",
  "key5": "BqtMezH4y8LGtLWr9x7uYusPa1HMsRNyn1gefjnLuj1fpucqW9wANRnUfnk7pdsiSpLSjLLfWNCGTBp29jBTeQH",
  "key6": "2HTCkWRJhETgra5qYjxAj4YSvFRz1p6HVr3sYTJ9otevbh7exowV9ruAGrMzaVLA9akUXDUg6BfvAYZcEixgtq23",
  "key7": "3H9Aiqu2JCua2oyNdDpSd8re3sXX8aif5YFzKRyYK9hfXn8ZmRuVwj9kdyroKTWqrRXJyUVZsSAiio5s4cukG3rB",
  "key8": "4dazo2CvoBoWXT71gay2AwSHByEM8p2omp7KWk5FNAZ93fwjgXH2N9br4ijETYHvVuu9CHZWhfkUcsstrbkKPvac",
  "key9": "3EqNCxrfELmgzURVZnnejHjpbG8jp3qCjEUWgm1Y1i5Msz8nxLyoR8zE2rPEwT6SsZtJNpis32k5g1ALg7dSVMEY",
  "key10": "3Upz4mm4jcee67jpmiEZ1ncnYsYdgWVZvMr9MqkUhWW15Sr2qYe9Ro7PU3krDwhbYWiZ7PhbCBARMjiHE4Pf3868",
  "key11": "37gFgzemy2bAHVYpuCyEVgJMqJFFk3UYmy6nJRGW3ypEv23qbFZiBVjPoyaSW11mEr7PQxm1j2VUYjGuYamZt3JB",
  "key12": "3A5hhMYqpnEiyW6BXH5DAv3wKE66Nbigt4u559FCaXcVuS8LNByEe1AG4Lx4AYEUtXryhx6ooA8fTV1o7HJajpj9",
  "key13": "4chsemv7iNrj8HocRaXQ2GEMbDpWRDGQfsNRdsxuBGeZuMaWydjD2VvUNJm7u8ydW2X96vAorW94WsAUWsP9pFZa",
  "key14": "5SwT3EProB8p93FjK5UPJkZp2Tc2wmAkEdp65gxEDAE6gn67oyK69VGi29JyL6ounrzWqvTRoD63AZx6PAAKhR5Z",
  "key15": "66fsmwRW6LCYuFHDirBYNL1BFgtTPLowRJjoAVYHEaEPyEUN3uU71hVDxkSatim8aGR2NhF1SdkjEb1gk5Ua8stp",
  "key16": "3p14gXXjxqrkJm6LvU76E74uGmRisPRXi9VUBz3RDsELfsHzLf4kvB8AuUqRosdRufhjsdzXvSucgydm4cnMp5mA",
  "key17": "4DiSdyq6KVb6JNyPRFqTtL2ptEWuhq1Uc4cgaApSqiPqxt3tFr7c2HSQLugaFjWfiSiUrVUYHuJKvGD7sp66hzzx",
  "key18": "Kkx9cHZLpRXvEHko8AJPMegHUe2MVBL7ChGet1bzLmv9smdrtEhRoh5J5UP2QwDs1U4dHR4p3YhBV4m56HAwgc7",
  "key19": "5GWBJNaS93ezthoGaozkoAggNkuzxfCzSFPbWXeYvQHf29kRszzbcHz9th1y9Qe3uy3wrkY96VPZiEN6LGgMMMSE",
  "key20": "2MUFmDBQ3Rrr6ee6xj9eWiXnuxt4qfNppQAdzEbRgah891jb4rXsCDmWJpQPWdyzSh9acd4bdxzZorVgnY1QRvhG",
  "key21": "41TJ2wZm6ypo93SZ4FnuybRE8sbKzT7w1W9d7fi1oucCVhorwnco83ssMJ3wtpmMFfkv5TE94fNCSaiG4jDJSmGu",
  "key22": "3nGS8Pk8ADybpVJym9UnHHRE6dWQ99wsU5hbz9E43SGNYKbQjQi4xYC6zafVvKV9z6rXDXXqR733aEJfcNnw1iX4",
  "key23": "BTmhkvDcC94mYCPWYeSQDgJiSg3W7MzevAvBF1AQnSA2hsNAVqwM2o3hFW4391BwU9caSREijkCtyvMf95fZ8kq",
  "key24": "3MGjPA4JMZBagnJcV8aQcf5PE7GNsYWFNTx3YbiJ8qgrG3dbLrr7gq2GKwVVVD3ZDM1aRh8yJkRV9mDUw2sBBD15",
  "key25": "4KdKmgLm1HLb5hjAcwzms4eiFhfo7YkkHtwNt6onb3AANUDp85HGsnYd6viXRC4orxzwyNnb4ogFzsZoPMCg9WW4",
  "key26": "3AQs5KYHie2Ga1XJcHJLHQsEx6gz1p1Xvfm4h4ZdxJK6F5GVjwDLzEUEKrSesH5piv9EWkh18U2gbX5YASzEAo3G",
  "key27": "4Ftb9FRTXgX5BXCUC5faFQobcP7WN6gQhu7UoyLpQ8jgWPf4F4tpHhQtUZwqP5dYnBLZaHCmVS29WHbXo2ZuobWQ",
  "key28": "JFRhNJjjYHjJM3UYXXAU3cAMijMoMKvpNXyr5SVshTETZU72XXMS644dG4Th1KJaMpLACWxMR8B28c2GAfaxk64",
  "key29": "5zwk1Rxhqte2Jr5KrprP1m9pt9J6rvetS6WHjpVPeaY5usjVYm5JX5E7XG3dV8Q23B1X6eWPdgQDRSBTiNqEsK9d",
  "key30": "57GYKKUz8gQjwi6gtJ8k3nFiPZtskgHCJN8hX5RkvhFknJ6vmfWVam1h8reutYTbzVA8eTYuoHk37Bv1PtWMfT29",
  "key31": "3tEp5RijfwrMZR9BPqFJ5xAXHw6cXfiNe5feuiHLHbUBQGawe3bXo6MKFLaJtKviBjHJw3k8apMe7A59mq6RFNAX",
  "key32": "3YFQ74dHho9jL6h2EX1kHRKrLobaUNpqoEwoqcwyRL4zantk9qQtpWLb3M17pjyPUQnaMtf8m4m2dHx9NM7Cg5Ex",
  "key33": "4TXpSU5NQzEvSyQU7MVz3EBdaUXZS1jrBohaBxrMgBUEEwDmQLYAbhKYrDstKLN8feT4JQJfrrwyc7Y9izqxtduS",
  "key34": "6pDJVhQEuUV8to2FXMzu57rBL5un3PAJJriCcHjn8DMeBH8KRSG6oYf74AiVGK4PkvPir7takoXqsUssNDN44eo",
  "key35": "48jGLSuUMxkywzEaQ1u68TXUatVcURbr9JVTUmgVdhknRUnSMC1VwyC8tLXPuQZQDWsSY7zVpEcZvCciPuBW1EDN",
  "key36": "4dhjBqcxEJXBhsttUw1AkC6FDgXqaFo1qGwcUPdtm1kf4xSBpKhj45oZ8Yc8YEQu4a812EwzsRX7wHvkKLuMx6X3",
  "key37": "4wuwkG2LbFBDuC22qrzJmcMTHw439nQjdyWy8wBKv5fKpT7c4yx7woBPjR2sCYfejbopnWLAJEWi99bUKHsz2RTe",
  "key38": "3ToSbx8oHijP6SXa6kviHkmHrhssSYb3JbRSwdM8QK1whPQWND11J79m2vFwjwUdFZf4EATKYDosY43ryRRcPgLs",
  "key39": "3nseM4uqi54Ea9DtcZXdnjuZVfH5CPhNbcjTGkT17LTEia8ovVtsFrQFZZnkmZ88T5TBWmxXQgHaPB31S8mnptX",
  "key40": "sxDuoWG3qdaEfAu5ioMbKRbtfLYWS9WnZhqVEoc9Vw1kMRzipQrVgQbSkHVnQaLZKMXGko44JCBd5KiKb56VfdX",
  "key41": "4wmNY6LKpoHd6VLuEdU4WiEjgmNJ3F7CxzLgVsJDRjMhK86MA2KWjwBuvH5asBSB7PARctYNHrEWRC6t3xaLhrfo",
  "key42": "2vG6Piapctp2UkoEa9MrmGxFfMnEBDC7SSFa7gRycH25xryswGYAXERFvdxk16pPYuNY7SZHR2BDMwrS76TLwDdM",
  "key43": "yDMJHJvg388fi7WGACZapXCQxLVeabT2hBGiHh2L2W1wUFzY2vdiDzsy7qeSBfsofqXS3kRNzAfEJEm8PqYUJPr",
  "key44": "5uTTA6ut6rfWRYEhVAKpoHs8NcR33RPWF9Uez2g7eYUbC8xUw1LkW2xnx7XoGJuEydzu9RU2opq82jVmV281J9Fk",
  "key45": "YaVBmrMDWW2hir1ZLmhJQnCNp5WpMCRLgmqGGRKBacJ1HNAxf5TMZv5oYA9K5hMqgrCSxkbcsRrn2Q9dn5BTCZQ",
  "key46": "2PkezSahgTpUtFQJyooiLZP22JeZ1aZS326jhW1NLQi26zcwnG3V5XbNrp5EPLRYDkCw3xUgu134L7gsAUgsDsZF",
  "key47": "5pRGxeVLV8jB4PYnDFWcJNsCCjLrYykToqcBtDSRSjydoGWs5fmoRtUrpA2hSXUr6Q4eb3C4SFw7KqBK8vGx7TSs",
  "key48": "2r97DenAeTG1v5sncSQUWwgDoYBZPwLVhMP4qzcAw8CKjM1nUKoT9MVQwqrhwojE4g4FX3KQeNYAkCzQpQDkCf1E",
  "key49": "4iERhVPZpgZ14oPpzURRzTokUkycAapNf3k92DBowNARmXZm7ANCT7aRiWMKSmbRaM29ZMA6B8C4msf5LMVuudhC"
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
