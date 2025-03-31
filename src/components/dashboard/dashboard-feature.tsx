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
    "4TJQLJPQiMcsKCrKYGFK4ax6FsJpcBmQXNY88FhU7YZf2b39a3aaE4oX7tAwD7to2otu2YR518TNftcctcLXaRJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oMkbsvrnb4HE5VNDKNzmGRTmJcGYnUoG21nMvMwXCLjcats3XNM5amrx9xWkvBskLJFmMVh3tQJPbNcdCKM5eEi",
  "key1": "2UxW4zYexfYjrWxsg4tacnDtTWGookoaYtHXFfoSac9JNmiip2paa7HpJYBF2WTfmqeKWVMuToUG8tNC227fhyDk",
  "key2": "2RoaLAxrzJ1kqMZBd4xrqz5ELtsr7aMjtn7cgZV7c7vkbG9Tz4hpBaH7GhFqe3QmV3ZGfW7oPYqHrT9V79WrHnda",
  "key3": "4sWpPLjT1DcoHvpgqKQ9LArT4MFeXc2SUECUDcdb7uAvnvdNzgWDSMXSbCcthdjPy7LLz2kNH4thdT6H2MUfXMEJ",
  "key4": "3YjVDguHZDDSUNHAyFvdTYafvzExySxCydCtMhHKZVHYnDNxsg2NRrk491chkipWNTUTihH3MhXzB8F4MDfjAawA",
  "key5": "2BRM4XxMv4dBdUUwYiGdnuYngheYbnU82Z1hKAs9vKuy7yAuQgRbJWbTQRhF15iHnczXnMdZrv42LwnHw5ygrz8R",
  "key6": "VbdeFbUnQRdK3L5z16s1qkWMD8kLHccmBteXJELZSJrk3pV5s8rfcKXspzgr3bnaw7V4otafTkHtyAjCzToren9",
  "key7": "3XASTijtTfhT78Gc5oxvQ96r9FGd9FRf2at1rMCCak4j9dmS7frYtN7JCffod1U3YQutXS2bBz1QUHqpWTXpTgq7",
  "key8": "4JE2o5CSj4EPGuqW58hqzsas14SEUxBQyzHncQtUuZBZbsd1FYMVSCgbhKHPdsYoKHJPtYUxz2is68n5P46XAU3Q",
  "key9": "JH3vUu6wsm8iS4VXCnzT4S39YWVQXhi48YTeQX4CsYawj9tn9Zrmst2yRUzm3PiDooZvq9tuhi2tw2FesqYBCdQ",
  "key10": "4aC39bJFGdUvq8siYdKrK1d4bpKVe5pVMSDjb3eMhuh3EuM1QJVmoXBPtW4zV54sPp3qDPMFzGfjF7Fi85zB7vda",
  "key11": "2x1Qgcv4Z1CnvtntbHKhCQobANRTgMxapnBkfSZiLrXmo4DNtQSzBwqTL8AMkVoRD6khHUHpoPT5WCLXhA9nmtWg",
  "key12": "2sHkk4avvFwZ4BC5HcJRTKu1jY462gaGsnX1aZUyifpCSpEiEDPvqqJihBoX9pHEE6M9BveuxrTSoewt1TuZoJbi",
  "key13": "9aBJDpnTBy7yhQZWhdwqcQ5LioLKebxG9oRPYvpr2UC1v38EAYyyopWctZQLtiXSZRF7zxqrvqZ5g7d41Xtx88V",
  "key14": "7mHog1394AYB8pWpzQDjtMT3wacGRegoR7xkqGEEqhR24iuXuo95mkAna5Lwaaa45wRgB3JduWnd3MeVyccFx5g",
  "key15": "3Rf8x5RYR84wwwdQ5jZtnUesnJPdmnebQsu5uch5cJvoRAMEmKRXn2RoBp34S2qZmswpphs1LCjioBPRxmGwnzUS",
  "key16": "64WR5EDwb3AmYYe2wwfRQpv8rSpCxmQzsfGUXEbsMymKWsGLKP49Wx5svVKskngT77vjXYcb1riTeqtb8DuCEnNX",
  "key17": "2EKufN7UpHx9JvuhE6UwHK7dMphr9aVzAFbKxh1YgFnU7DdFWWQzEZ1NWci4dRPqTdwcQFZA1mH5P7cZD6vE3e5C",
  "key18": "2BZt2kcyi8bUtkrGY4AF8bjWgoUAA48PQvAYnQ7xm1Zb56V1xGWS2VVGQ8Pe5niVsCoqpNzzejzw99grqKeikjVg",
  "key19": "kgp8DdpPV9RHbThgic7opywB9RKm5cpDW2Rg3UxGxFtUoJTe2ykGEvo1MPmfDf1ndt4mKmeAEgtC9xfZ9UAZeNb",
  "key20": "2f3mot8QBJUiACTWmtUcbEoWAaJnY7guLs13ZaauwFpLnvSfkcATtBPtFHZfQZZb118xtC6Aesg9VBV7JdT1W6AZ",
  "key21": "5KNuuB3D4qHQFrsCdY7S73J2PGkJMX2utbu7AXD4wFLp2QoKuN9b9FVSwkkyr1ggz75rsNeTGkHm23cjkKYNa27a",
  "key22": "24h6couRZAA5c1jreAWHpcN8kyvzoyz3oExrtVsXywU8zuVoNFQ88swzorxCEFpivwn7vrTZrCN2Fp8wyYgBra59",
  "key23": "4pXr9Ds3YfEDP6yHb7qUWecG1NkLPxa2cyTtGcD7745sSZ2ZKYj5MqUjv2VJ7L7VGpZQyAtr8oRr9ASCSbCDgNNL",
  "key24": "4NwtsiD3MdoCy1WFhHBBGojz2otwCeuFa9oDiStvxHH37v9bqA9e1izdceQWbL1EnkTK7C7VK2vYB1YSXNvwjxvD",
  "key25": "4DuK8Jj72LJQpMGsho56Q9ff6C8umnpmuRMxCHVa1EJ2cyP91oXedPfevGSuRQ6cDJxRzPus9RA8jYusiQwR9qqD",
  "key26": "2AFJcuWMkhSDJeuR68T9JxgDeacgCQCo35roLBV7gveVkuHYBRVXMxhkGWabshP5oaVJn3kQN589fo8q37iRUx9S",
  "key27": "2bQeMwWiD2mpgM7jS57vhCaJnsafUXoB1dvzd7ayaD31y7FkTYx4BxyjNyzAg9wSmeZ5ei6Ysrwqp3AaEYQJuUFh",
  "key28": "3ijoGhhoVGDSvjujmqX7uyBXVqWoHoHCBPqGHYWQsi3ExZhviYv76aptexBeq97at3rpd1aX39AAEXDfNWSa8QKu",
  "key29": "2tWucMuZDozMGUYWjFHn2oH64vxnCaFUdYQskv8MxcoAW3XmMFMqk33qHsDw6aekmU6HjVjH3cTFN1YReqtQBBnw",
  "key30": "3kpHec159kZjENTpn5mcvpygF1n4eRxfAFcL7FjegHA8eKcRfbBhrjCRhSCsk5dWDHCYgWAVAfNNkiiuoAtWj2Hc",
  "key31": "3A7dKjJGrFwEk26o722zCXfcfouxpCHB7HFaq1zFWQxeDVvADLZsRquraWspmxRVhuih2Xd6hhJEdtRxbjZfv5ci",
  "key32": "nZWYTkM2wTXw4hhTTZ458XXzQ9zcGyCEPaqYnNnS8ZyZrkiLmSFc43SRvbUY9GdKr9zgv2GAZ2wEdQgScJHJfEj",
  "key33": "21UfELvDqFoFcMtj2d2nvJ4vJMxmvaSn39KCjnyzvweSkq66ZtYZHDQgMANHxuW1o5mdauWFbwwp3bwswYyNVTSF",
  "key34": "4sRCzdW7D8uMyvyes7fyXpSKdMcfZnQVP6uGHU42jmhevsxCqzWzzB4jxvrefpLZ7HkHDySi6QEjSSCPqffNmE3d",
  "key35": "66TFxxL4gdaGbRoznY4WWBnsQ1ard3GkXVYsHa1G1cJ4zKitUsxbqp9ot2oJqdyNb7RwWyHubEufcfMSrxVGK4hA",
  "key36": "4m9e5oh2XAXH87R8EjvAta3tDGDSoG5wetssK1UTK9xZHQtZmhwhWEyUrgx54xVPeLXRKEwKF2QyQykLWsX9f5Td",
  "key37": "4ndWWgPAkpyR3gNEvmtXb17DNiYkHxDANbkfVJjEjrnqguJJBbgXCUJKdBdj3kfawBU1LyvR35HQPqgJHM2dzoLg",
  "key38": "3S4XhW4ZbY7ne2ZB5JogrYMUPyevp8zyofBbnEV9VBiE3fn2LbRf5DLaWFZ8QoWq2TisxfZizGdsVL3DVX23CPdd",
  "key39": "3uAvGC9wDiEAD7Fo9qfyGqrgynP8YxzRmyzGpA38fCgUo5Lddv4dGT8YwHTmAXYvyCRTQYcVH4mpLtKEMKMdewa8",
  "key40": "4SQRG1wqSqkhonvuhHzBwcTQye6TpZ5UEQArttdG1hTBPLYZwRFvKt7ALM5WKczg2yNk7qoda4ckgEdGoXVHhZK6",
  "key41": "536D6yamGCfpQSreJzh8Zcr4pS1L3udEVAGnwXrSvjtR8SqeEVqGRA6hGAk7m9bmcrkzHi5s4rfC5R2LB24fAToV",
  "key42": "pXwEn2ivG9ZkE8UXNH2ZZotPuFuNfcRrUUZwmygSPL6A9GJDvyatKpBwZPGKdLuJWF6BQvwB9268cehsqrUN79b",
  "key43": "5giQ2MgNJamFMXKBu9GvVmCx3k49jEmUyPLgowZcPFz4LN5zUNBWks3zfSFY971NESSMuUpakPn95me3iydCi7ii",
  "key44": "3rPsp51mCWani8N979kPhKx5JRTh4sVnhoQbCdfzgMhBhCYYSDgkPbbp7x7vsPQsMNRoZn7ybMfiFc71N5STNtcN",
  "key45": "5vRg3gvN86YHMYhKJpJtCHqs1brbTqwo5Nkzsif9CouPvV8jGm5Fj7Mrbrk4bGtUQK5eXye6RHvM9eZpXagg4Pje",
  "key46": "2m6p3y4Ho2fXcTubkZCEpye97rEozhsRLwtZCV5JSXhuVytgF9AXJ776o2VpULWZs5hWEEoK3et5oX2CZPLi2y6U",
  "key47": "4D9DsohLsSjFbXe5Xib9tKZRt315cWgRZM1ZAwjcU7MEhmcauVBq2vURGjLeC1YUSVMDDGECEooj3rqiRe8nWUxj",
  "key48": "31jyYd1bpejA9Z8FoyEP981Tx2YwaPWLd9Pxz3ADqvoXAhhWYYNAXvpZYtMTHhDTSKGny8iZum8kZVyvCuPLGyx",
  "key49": "4h1T9MAF5Cak4wLtBxnBxYjxyDp9Qt8UwbQKujLXD7HaTqUaDWYJh898Rw2YgHZme2engkJVNwnWVNS974D1AU8x"
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
