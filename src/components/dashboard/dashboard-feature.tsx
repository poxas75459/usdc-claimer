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
    "3VukZ5kVmWMHxAtFaVpQd2WsBAkAKfLVCRHA41W3qpN9EHyxRrgGPznWBnn1AoB1Z8oV1PBdNaUF7ff46gsEuPkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hMZazZj2wSKQYGLLjyPrprzdaRaeoZ2xtVfyJsGEyy5W453jrnz5Qgd5AAG56qpXgo5RQLnjTANFzCPwgBHA91q",
  "key1": "3MvDC11TVRqnD6mP6uvxeVBQTxxvBXj8nQq72w9bi7u9cCVh52CDYGqJrrcWrJiBkpJ8SWqWHg9RvkwRAodhnXrM",
  "key2": "5S8Jh11g6jzeWWeBQoHJ3TbtqZqJN9dexDmNSmEsBMSoGA7gJAAdQRQe4GgTQUQApHkz6JnnjAKUgywXRfqQZtKk",
  "key3": "2KxDmrmerM9NNsTxbYnbbvnBLouvwmcFiJU7vZk9Rx2uRRDaUdJAYBXZ5pn54epHU3zxXoZnEHDp2e3xEQNo6JJK",
  "key4": "4FKrNJha3qQ33a6qZVis67FmaS1HcuX4XaHEajJgzsyCHQjiQt5FxMuHZNoT38QUQsVxMSbUgZw1t6FemHqwrgkW",
  "key5": "3e6rkGFDv9dtWkRy2R9yNeUuFqsrBQV8psQLYmwmxvASaAbNb9V1DW2AWCpw4eJeWrmofptFfFcshyLyAbNRnMA2",
  "key6": "2VJRmirLmQ4H6uBKQLjeDhgkqUM9o4kaPPZpqTsMEqSvvSUkhE6ew1kge5xRKoTvmGY2F7A3mKMxzCPURKrKh2i5",
  "key7": "4nEivddoiEBdJqDDAEah3sKzQ4aividFRSChYtEVGauCDirqk2DVg9WPLpCLQZFhoNtRn1AH7JseXSG2kTezG6Yg",
  "key8": "SCdA622Z3byNadW1PoB732SMmrRt5pkJcBa9xnqga7AqHcMYPiNhth5eMdrYh9zT1oGGP1BMD2ZgeFyBWWhbHHA",
  "key9": "54X3AxxdfFdCF1pk9oEhSmVFbw4gYCG43gXyReRUt4RQw8BhSErChSPqU1CG6G4jUPtnfnPVkcDWTjBERJ9CDaTK",
  "key10": "3y19NA8Jv7o9yW5uVsF5P1X6n5uCmQC8iEHBxVRnNyPX1c7wFfSCXf5WDnYzM1EgR8852168YSABDB6duo2LDBar",
  "key11": "2doBvbJp8sTixWhi268TXN8NcyiNfrtAjkBtnHk8XMisgL2fjJmugJ5MeSWMfuogD5brJNmdLZkdtJ5h8jNurkhF",
  "key12": "4hpfhyqByXzj2WWrd25Kj18NU99oZG3Cy9DcAiDTgrUJXRmUq3nyZoQi2f8Nrp5fXW3panyZSQ4UYwXkL3ULrVEu",
  "key13": "2rjU8cpjnSaiF2Xtk28zqeccQwJXiAwmobJBSTupZFofAw1ycfQn1CSoVgtqDePPWAW4xwM9igX222pr15Pm5PTS",
  "key14": "54eRmQxN3jFwN8zHEaBDcuzKw5JfAwHEt3EiKqoDocjF7NkSoeodqvrt7yufhUGU4H9YdoaHupvBenyfXfTMSooE",
  "key15": "5abUDH9Aybff3jYAFdCru5LCrvPnj6aEeXfp43nWWFiiEAj3UTnjxh6iX15PWFuBy1ZYYqHpkFArM5Q7e4QufiBS",
  "key16": "4QgN17L4fBcQvsCZmRqiEnrVtdfKW9R7sBvPmtoPJmy2t46QbwZnhhg5HG3hcuQePqcjtUT8NjYMWPLBDxUtVJxb",
  "key17": "2zo89sXQpTUiJ59SS5u5QqagsSFJ9dmx4FZDjKKo8xLrvadYSMgb3JBQGpVp1hJ9G4YYmyKmNVoKtoqUiG7t6qWX",
  "key18": "4nT14wYmJQ1B29oFNjRMReXnczq1Mzg6quGtMafYi8MioGNBWHvgXNZa4hZ35qLQAJc7LSz1uXx7iubyHDAGztsz",
  "key19": "52VPupsCBFAboobB9hNK1opBhNgmRw6AxmxaCPP1YNvtZWnLbTdjSwupRFhoamL5uNk1AKY7F9xDvjH5k2om4QKo",
  "key20": "5rHLeirTtgJZybd22WDLhUHokxa9DGx4HvdJZbHS9Mn9thKpixwEpx43i4rq2zSHkGp94kgLMEXLGyGHVqXhWKYM",
  "key21": "5FojcWiBJoVEvTDC7TeuMMSVsZ6xdrGt8S9LDpV1Y3R8q7j2d6ZmtProzADvq611LJYZzmFnQwyWHxg6Jd7A2hfM",
  "key22": "4WwLDv1bJC8NJsn5JgAvkUujHKybMykTgknXeAp9MyPWw17qGZ3bY4i185k8bUFwFpjudnGeiLDR2jzA5cfHU8dB",
  "key23": "YvJy6b5FoC8q5rxZXignSTkKvSfmjgJ6H12H3CpxJGhVQagFxWg9apAmAKCDbwX43iq9v8WTWRyaYBbjCP2TWou",
  "key24": "3ZGAoVoK557Gf45xnSv9GQuqvXk3pC4DJs7cyhmFnadMR7w748xn4UEQEgz2Ptyt6UkgTQaaWvdJ9oHpdFdPbNUM",
  "key25": "2NNqCvJeejfdcQhHvmMC1v93KDQSdCftevsfttvH3TdfuFkQ13vX4pDRNq457u1pv6xt6bny37to2sQef5iVRBaQ",
  "key26": "5mBxyBXJ6MUqUHSSXMxrfEVbcaESZgKW1AizeaPr38vqNXNmGiuSjCKkMsJyM4ufSaeiceyR9fD22fyu7gHNvV2S",
  "key27": "56RwyDCL6U3WULyKvcrVKed9MBfVH8gHZViCyzsCCgpUhp1yiH5sie6XAXZ6ChUaQhzeWAjibMwwe9iB8R6WQfBx",
  "key28": "2b8y5ZjY5sHGwRaE3Yf2FBi5xidSjLtgtVueLpv4tGr6ib2i7o5GrLnP7hhLvbjju5wdmokERJZHzr8L2PKbHGnS",
  "key29": "2R6mzgaqGUytv4BKV4dHpwtMWyWPKHxScGXNJcfSPh8ReFWtHuTNbvqy2YRYz5pmHGBPH6BmgNhXAHiKDNyZFPcy",
  "key30": "54fvjbvqS48UxFJAf5CZXoxhX5MiqHwFn3G8j5qfZsNAxCERf7gP6uJGhzad1F4MqcbcakHeVnz6AwmfVJjtz42s",
  "key31": "2DJHAnzdNhSiTbSVRHnF8VqnRwFHD3opeyQVrUjQABC5AbKTGxvX5naCiCc4woDDirCAQPiU6L4ru5NhuStWyh61",
  "key32": "4hsxBxdWWxz8yEeqCBfkMBvQhrQXCqk1K2rAdFbHyKeiiR7KaWDB7hkD7245GduhLYtCjXHPPQtrADBr4RyZK7c",
  "key33": "49sBjoaNnSPabAocSuBpiEaGaJq2a7RMe4WUkNNjuExnt9ipyHvSUDXucum9cJ53s5Zh8xh93nJEMZpUiPq4mqq4",
  "key34": "4kbsRZrgkvrLBybcRuXbPJkB2STbsPjhZDMtMQR9iDkdpAECxzCq5zL286CNjagcN7FX8qDFmLQdZdqz6dPgTVq3",
  "key35": "2t1h7s9C7qGiR5cPDwrmvi16ufD18fVjCquC1qAxWS7t3Quguyqrng5jaFF6TnELMRcKh1rUkWzdZM8JqxHmA3e3",
  "key36": "2AzEk5EKxMgniZuRosdVFQVBxThaYmVFdfYEAebsC1vjKCita5quUba6Yi7FmH7sGePjmmhPRoUhty4L8izcdgZc",
  "key37": "rTrvw6HxKp1rfenn9bqiQQG7prWfpxMjM5F6dJzZj8t7YgfyqsKaF42oknBbf4tvGkn4bd1VaAgpG9f6mxND973",
  "key38": "K5GNwz8Z5isgMu2EzRcQtjWdLnpFquHQhGHaauVANdamogK17WySYj2uBBcPXmetEvAJExNEXJhB6esJZfyZ8Xb",
  "key39": "2NdA4VDbNkg7KmCNeaHfZ1bNCJJBHgsckRDwkpvjSJ2b8saxDZYzmoTGybmRZYkXofUfzLdPV4aE2CQRupT7zd8S",
  "key40": "2TwJNDL3VUQZ54ztgw7HQMytWFrEcLeMxi9Ksco8cp723qSjeErop3piq8rzzPgU62KV4coujoT6LjeVoor62AUz",
  "key41": "HKCXaevSzG4suwvBLgzAX7Hqs1LycEpELJpMT2xGGKcQdh7L5FmSa1yPK5FWtVBCqtMvqk9zAJerD4x1eNwBm25",
  "key42": "24swLJAnEZ6wHT1oyM6dLLaiEzV86D3MH9ca7uds1WpXoHWKoxjWHQzJUuPQLpvpgw9qK8djMguCdYQ1xjyc3w76",
  "key43": "2p4xj8hwqV4JaoTBHxfbmhvV2tQMNxVPCeSjoas6NzdZh7bBrERh6PFVuxzgnAU4CtxoKi914MxGG58gakSk4eJg",
  "key44": "582cRg1ZidF6Qj2tx1degNfuTkMdUF1LwtZyrp49rZfrPnxT9juKDNBvCDjoK9jSJUQvbpayPz79x7djtS56XQXQ",
  "key45": "5rXzf1PnWymShiGJoijaiXdq59P52MzJvnfAdjhwLuEnPf7WPZUkJQV4fDFrJAuZPoBt6SJw5ydRJx8Lf2Nv1PjZ",
  "key46": "2xrwJs4vN3H4uR8SXMc2xy4jn9mKkHUmcufuT4sAqRGmNoSUw62UhTPYvmUsaWFw76yrdrTU7YPEmTT8gYagkzNq",
  "key47": "5WzFbvF47ieqRWc5a95uXUAtHknEjt38eo3gMmHLDPMVBMi36UmzBCteTTihrcj64YRAUwjJQusj972w9zMFZPev",
  "key48": "e6GombcvbYYhPmUxzgSPNBKJ2kVo1yovci93Pt9EBqzkfs6FbKosEheyGM2u1CyUYSgCoxGN2Hu4HKM2r3cZp1j",
  "key49": "qFtCEyadgctTTjyduZVvHW9w3yge5yoNeLKhSsquhRCKKBmm9nTjnURwGJpDpbNANMwAdtavB6fxUToYVqWLTbW"
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
