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
    "taXj6BX1LuzkytvzxJUBf3sBFoVV9mGCDnM4XfazzBjhdswu95w4AVhoxMrax5DpYqyh3Uhc5FqQwpBsmsK9h8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pg3Ctf6MqjuRYEWC1hAFqotPXyjWxNp8hoou3jSXGwaxbeLAxb35DZE9611mQbtWUtgu6ikNNMg8wgs58wdQUMm",
  "key1": "2pybqNKrTQAbja2o1kbuU4aNUwcugafs9rnEGT3Ra1i8j1SGQWyKQSjKjoEMENesCrzFcL7JgbshCpTWRQXZbANo",
  "key2": "598Ln4SYUkPrm35gXp2y49KFrm9p5Dz9fy3pSoQ2v3C4sSwHKtvHtS8oKP3hpX9SYYX18GWM8AdDHnpJ6UPxDrc",
  "key3": "4XK9QBkWLGtUTNYFE3C5DvB1RnuNcQV7qDpHLXndcGuHydhD4uXpXqirMCHM7FZhRpnhHSBnM2AXeW5PZKZGBRD5",
  "key4": "3Mx518eKBLuf8RKyaP1tjGWKeiPcWvYWhjJbNNawkscnYQahg1go7d2ephXVztxbgwQqwCJp2mS9WhgXwtt9u972",
  "key5": "2parUrPSuEnueRftJRQKKAqNEj6BUKDDxqrUraHyeKLLGNuhwkXDXbzcAehEdi5nCK7HJBi6yZuUyDtQKJ2MUzy4",
  "key6": "A4ftnRTDeH1p6NNsPR4B1CWPt2jsJZkRgP9Rqu4nVxpPFwgH6NsZ5s6FffhgNeZrRbgjuWFHwE5XhDuyAkxA2Ev",
  "key7": "2U22YqFYtzkW2dbPCY9C88V6m2cGu4J5n62ej68BNq1phJBFXR4T2tsN1nfxLJsCfknbe3NC5f2Z9Guywrzuv2LS",
  "key8": "77dWvPqp5Cea4LUkwsprkJPXNcwENDaFCWt6KQw4WeG3RZfDdotMGY3PGvwR2JK4d44e6kgHs2fszh2H7m3szYT",
  "key9": "3uQGaeu9rDTtXwKVeh1EUVHFoR9ax1vYvR8vhwJjt5iB8ahpZ2mY349EDiAi5VscUvMKYq9wfs3Cpgp4FibD2jbp",
  "key10": "4GT1jg8VVXGxcKDEGd817oZvY5ENAMy4vgSYngx22GQSWrjKJ2w8b8BX2cH49pt8AyR4B68k9PfHU1yBMwNTN5qp",
  "key11": "2vn2CtXj4gwsAifkj6inypkW6zNtrM749oAhbPRd2L714PnYx3zsGW87E7uDmRVHTai2kpAHSbC3BvSKKXpE2juj",
  "key12": "3FSQKGPBZ7YBvake1mXyPih2YzxBB7SNoUQmBwNThV7Eg7fQBVEr2WQohNDk9UZ79Cvh9foivnxJsBKq2FxRhLeL",
  "key13": "5c73bkunWzdS28nF8M9zK6V16kcoFZ9o1YMGUiCFDuthoxUGugJuunKv9Dd27H4nkuhtzYqhZDWp1DJKYK1U1S5Y",
  "key14": "28wi67WXadGT7HpcEBuhzVkZYvbvyN6Te9SMWtX3oQarmBL5kV4tUGh2xEhrbTD6AsYiCVEEqbR119Hu3n5AyLya",
  "key15": "4fJKpSKVHyExfbap9FuNMHcGWejh7RqixRT3hg9GxA6Qd91SBkubNmfjeHGy7HRYisDKAYooKb33tFRp4Vxmi9Aq",
  "key16": "2bja2fdHBUxvgvLTM5E8BeqiUmfFEb7tLAm1fGWYe5NENLXNihpxS5CQyCzkE4wXZ2ks3NzuGuzMxpKLDZbtQZKT",
  "key17": "32cohjmqoxwtCRKPJmiXKre1cmVBLBoHBabWKJS2t6Z2D5596cgCyaUT9598Fx8xfEcjiMvB7wbsUYPgDbqS5qLG",
  "key18": "3sEX7PjHr6BcgmA4ctz9wuA1R971nSVXtq4vjVhED1og8Konmgg95Y6BVofFG6McNypfU3J3UTqGRbN7mD3NToBc",
  "key19": "2RYVcXUgyPApXwmDYaDjD8voFMfqjPmSU3TX7imXeufpwbGM7ouHKQXviXDpPs1YdgU1WSV1uxxafWyjRQetzLXz",
  "key20": "3bRmBqCdFCKMFjuoFUYx9bXh7bnTLA43u4rWrF9MkW1WVVkYpqee9LeQyYiSt5S7Uu1ARR43ZSioyfYMjTZpa3Y2",
  "key21": "4RXhEjgxM2Ppp9kiNrTSCC3Gmk5ttQ1qtPMsiV2WSLffLArn8CwNjGjvAwTe9A4HBG9e2YDoo7FcvZRmAKbw69i9",
  "key22": "5Z3wju9vV2c2FuxoH1piDEHQ6vN8JGNBWYLqtmrEVRFgsNPKQzTE3Xv69Bf6afgKWqnR3gtxsB7U5GTgSLMQvCrG",
  "key23": "3kYDfp7qaMRPm9gjNguSxCyvvQRNqJ9Tt92CngGcT5gFR1c7dp5jAyMeEHemfhqVfAXM7JKTmtBJ4asa8jRyLFLr",
  "key24": "5sWYhAm9wdZycXzWT4PvJt6HZ9Kamfw4dUSDDrACjG9cDUhu5uwd6uzCuexHyUZGtDT3yMZbpRUii2NXXrUFDbM",
  "key25": "22vhCstNXip6ChYXXQ8R7371J7uyA3NxWJFQNGi3JGA5eDzF9rDfhX1X8P6dk5yhRJrtgsZjf5d7VM4uoQYoJ7VC",
  "key26": "5H3do1YnAKQpPn4sBHaUqQEhD7gaxb2o2Yrr1gFdYQLAuNhL7PZrEp9ZwjWeqTYKPZgWhqRn58TkPDRvbZT4mtyn",
  "key27": "TWsEmKK5k2aqJZgMfG9rdHQr7XuadX5MiRW1hAj4ycjqYMv1e5dGAmLaHFfR4V8q5T8D6SDDiREydPEQqvKCup1",
  "key28": "bfiwdW6GCv9kDzQDwfUfKge27in1gCKnnzUMsuBc1zSx8Y3KAum8z9vzTvyo1vzsGDjSWSYJMWCYj8GanjXHYp1",
  "key29": "3WUJaLTE7gmRmYdWkghBcp4ikVJFTWQrJaZDYrZNGiYwbPN3dDNr3yNPwxyqBqV15QWFM3r799KGrvDyFyMUNx4V",
  "key30": "4D4dZohbfhAxxP5KSPe1iYJ42UGDgwvG1soT8AwHE6vXcDYZEV5uCbXde1UaGJFqQkgdYi5mt2rR3mudSuyneBpV",
  "key31": "46jBPpRmgJBFtVYyBQEyrFLXreh3sgN72psrxoHxmKPBsns7hKzL41pHXzTv4inDoXk1fedNUfbsMtWBDYntf72n",
  "key32": "fC1kTVuRtrsN58LQzvNaPe1Qy8ui9jqzRpM1Zg3tchRotbvg13FFogFCq9sXTSiANQAH7H4Bfr47DLFGqHgXkBy",
  "key33": "5zhG9pVuSq1nx8pwF4RhqxbQ3ShDMKHUogCrBTuGCUoRfQy4VPCf9nyXFxhj6ts1mjjQKvV73SsFwRW8BicecJTP",
  "key34": "4Pyj4txhGnCqMxpLdkuJpRr9YCKki4VTz5GmGG7HV1wFmLRqAeZctQyxNAcoeUGAJ8Xb7PqPgmiM7Ef33RBPuEmj",
  "key35": "3ui4s9dcgQEmANUVTCCaRcKu4QQkQAHegeQ4DCXuE1eTdC92mPFCHwMhLy2Jtkvbb2poqhmDM1695eXfcqNM7x6w",
  "key36": "4iES2m92TtxGdJbv4T2MUaLCX5jt1HASNP7shfSChGHzCFoUtD61JsxeS6kNicPdxvdq9G3HXaqQBQKJ4DFgkh1i",
  "key37": "gT3Yku8ZX1uw6c8tmeBHy9wnKNTWC1nC778DTwpLJeU9o5n5J5f2EhCUNjwDgrggzu6ak7fTTcdr9EF7cSdBSrQ",
  "key38": "U2Z7RKHJ6froPBKSwUGYb7t7Gks7K7isRDmrFAJPbfJLgn8wzf8ghzznwtSMvKgXZWzCzp2WaBU8RDhDSy4D1tD",
  "key39": "QTPWFgTK2a9GvqEf3Awfn3N1Souz9xwBHmnyY19Vu4DsomtKcuT5FdqD98ytqGgzfFWWZHpkFToopeX15nvMUd5",
  "key40": "2p3uKfAcwMLcuiFB9BaGjGnG3w4pn5NSsdwdRLtq6h99QCtBgLvCtTf3qBueyqen8Mc2tQvTgwmDQ3zC9UxkZYi8",
  "key41": "2VuGKqNhuLjPt1R5Zon1sTdcr7Aw68NchWhf8k59nnp9g7PWCfpX3uQU6Mqd39w6Qv3jqrHVoNeNti6ovEcR1hmV"
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
