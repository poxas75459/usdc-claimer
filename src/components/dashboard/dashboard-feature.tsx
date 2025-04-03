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
    "5zx3FFZQLocsJBMsECRX2UtHAB5PGRXDeeibCjkBXRquyczNg5zLho3L562ck1J3ACeZViE637XWFwiX7y4xurA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nvvs6fasnNhgh6eFEyU8bAVphmh8d581QBqyyG589qsmnfd2xuvfaw4qrPcJU9gtYYuKu1ziYJezDyuRJexZjvc",
  "key1": "2CttP8mPyYrQg1Qv8LhbaUVYaQCUyydLBLtYFXsQKR3b4ANhShgHwC8xiMmn3c6JKrtSRvCf64sU186XMRXSiukS",
  "key2": "5qMTcpA5dAqHUBtqF8iZSE9563eeFnixSKy16JqheWDbmWF1QqTpcgXkwFyDdD2obX3bRktLyJYZ8gCarjYFWce2",
  "key3": "wA3G6k4sJyU4ahd8GJSiSdf12ydbpytXZS9tmjFWgXmv5ExQ1iNAjYcgUpdvgEr5VmQ4JdwWZQ3bYeiPUaY8Qom",
  "key4": "3PC1ZeeE6X2fp2bQNn1mKDN9o3zCU3L51WrP1KfdkSg7cmKYEmn5BLysBhQkLQN7DG5ZKSw6Tq5m97BSKQ9Cbu3J",
  "key5": "2P8EbCHkXdErpTAdt5cExBezy8VHP5tFaaeK2S2EqcCeW8LdNGTMxJRCa7q6yMLhksoZCSAYajQUym2dv3MsqUAB",
  "key6": "2Tbe851LdJfchDenTjMRhFE1q4sUb2JgSXRorirn2uVQwRdHXP65kqLq6gep8znFwBaUWh9MN9164iJERrUjNdwF",
  "key7": "41YyYTTwTZXUEqhLA3Hwr5ziu5GstZzrWvRL2Kme6fetkqFiwt5QuXAdUEHMYN8XWGZ5g8JLtMwWAVKW9SDYCjTq",
  "key8": "5d8ooxb444NMiJFrZH8yPbNssVAkjaj1dGSU3RsnA2AVnu6cFMnHUG8L3q7fdstbgbz3RcrHboba8BDVvwdbbcfu",
  "key9": "4T6zRnkE88H6furmYvJpcqRDWQRhRrkd5gJqsMqxLnQMSbkUjLLSneowsaNNs8YPPNSTJkzsVLuAgvUTA7GdXeQM",
  "key10": "2KQVv5kQB8JLwHZve866F8eisvPCxmGndJ5ZmLS954VKm7fdCtajUQgVLfp4Gvj8jjfaw9q915y459SPMs4n9ijZ",
  "key11": "KTdTj819u72id9XqJQQRGmQ6WyR6JHVdPygkpbeggvMFPiNcCq56kQmzEJK871ME7Mwinx5n8hpM1HgSQ1m6VUc",
  "key12": "3C1sLp7zKnqMwxbYfZ9HWg1V55fBAbCu1HFr6aK7c6w3nbpg4pc9mNzyxXeh6TnnKYXLUuFwTTkU9ew51VjnmUCA",
  "key13": "3BnQAEJKtNaHDPEEmSSCfNAAiyxpT35MpRsiKzoRyGVCR6Scm7L8BZMMXxp53seygukQ8MLdB9Zn165fPaemwdER",
  "key14": "2cqFqLmwN6s9swexWyxKwnB4WB9SXvmEFB8qxTBqz63x8prhTH4uaujsQ4tLX5avsKJ3fs1VtopGd8UaeQKctsZw",
  "key15": "1aXQK3PCeaVpYGuGQ1P3wendRdhnjogakyLed8hbGefz2Yve5HSy23E9Pa6B1qsYsQhBXxEtR64HdQSKABvG5Ks",
  "key16": "2kL1rxKKTXjqEBFCfJ9agdxwqnmQ1BnpsRiaoMmPWc115QAWvpEgt9A46pSnmjChJHMkAf3xDYwKKqaxRjcqo9CZ",
  "key17": "367g4wzNZ9tygjJDzMZd3S5cyzf5rx97VuecUwdxZoBnj5mcst5fuqmjaF2pUbQDvKAXWMX6YUAPNhVe2PojHRoz",
  "key18": "5j6xHX6vhP6y8V8ZKZUM1yVnQqca9PWV1fiBht8xG2iTZkRtC9HSWaCuydLAJLrdve55hPvUjbQdGnGu99NRKzca",
  "key19": "3K2EBZGnXT4g69SJUQuwG4uSTFK4hCHaUVKUN1XN16EV36S5J1KyYk5XDJfLfa1SKqXZTHWFfFuST12JD8ZdVchQ",
  "key20": "5kfVMYin7LmZw8R7kmf19dPDLDxXeW5BpL1WkiAXCnvz6JLN31nkWWsT2fizqYnEdsuCoGW5Yd4PkvJbKmE5FEF9",
  "key21": "h93mgyNskL9jUod1k4MLz2hSnTG4sm8YZp9ijXrMrHtfYHnDJjUCL8hWyiBmjxY83imhyeGdxxNt1zpyKHNB3NN",
  "key22": "kVgTaLHv3ZeynGodHNzdpZJaUo9GY7Nsf3AXvHCisBkivVVseNq1VubZz9rS5UDQgiPisJFjZG6Bpw2B8En5uC4",
  "key23": "3Qt21TNshE5ptKk6J9u9Vth4tJmRSDxB2GGQBLdMQFLf4o4q2suFBcbUi3ng3nqhHFXW3crZhkqgLgzsW3RpRFJ",
  "key24": "6o4L6aaHHphBTMu8phSnYPbgMz737zxQVEzbULVdPpp5p3946bjKszsnidnXZZhn2CY4TK3ZXmNBwYdorhQ4ncx",
  "key25": "2sWLZp1SoW3dCqmRymgH9rv3MGyTiJiwJogUwAyAFX9ByiBGfdv5HCg7LnB5djwqFTvTNj8yjVqGL4CWHXheWS1P",
  "key26": "wrtTPsXeDuafkuU33KwmrSQVuxfqYwzj4WDsR4LjoiruQ311DeMMbdXfM99JWs5rtggLm9QHVDiRgxbvsU4Vnaw",
  "key27": "5mDMv5X5PWWAWx1mDtqiSgQMNoSASbTyjb1h3N4spwcccg1qCcHnJRDo7v73F85rrA7ocMwQqgkPMcbq6ihpa2Qr",
  "key28": "giQ4XfBSD2SyLWv9cbw95Q9vZkWTprs8VXHXVpT4c7aXZwgYgFRbLBTU7B2Foxnek3Hv5irPrGpVTaX76hwrbFT",
  "key29": "3V7A15DfWSyGmA7A2TRifZ5ByUCC8CehMNTWG82yuRzBfV9hrf8QHHx6JYJX9JQaKfM6yEpuHpF5yKxaj2hJ4Cyu",
  "key30": "4jATaXyWUGa5GQrn6zXdqb32t9xZAVfjVq7tFxXiuJg2tmr2ZrH9GVGTiNQuso2QjKVGd5T4wvWD3cnWdhvDWGJM",
  "key31": "3y8sR94cRdAq3BJDX7bESkJDrAL2D2E6a6RNoMca9qeiXDURuQMdy8641aJG1Bf5X13djxxY34oXGGFFhniwUgPQ",
  "key32": "Zi5S6n8HsdJwTUaZSM43z1rdkfqkezwp41P43EvEaxz46XVHMPPGBMoQfdWaE6cU5bZKb3YYt44tjcWCjQ6CnbX",
  "key33": "2fv9Dmk9JAuvM8ad1TLF1Ex6n3M2VBZw5CCXBWBmUpmbQZJ8PT9szeonZGjbgqWH4rjQYfPKSdaGkjrbGYeGuFME",
  "key34": "5Ae2sZP4RxA9ZD6RQKNesE5uJe4TxgGaGCJiQBPjFqxrH8BeeMMPX8B8jUE9wEj5hs4jSU4shiaHVS8MYWvMmnpn",
  "key35": "4KfUW9fKxiLKjfsd7xxAGDooXEgg8HmnJ9ysJHSZLjPRPxQdMLQQrjdaKimi8V3T57hhFyaC9hCoh2XLb23bwzQn",
  "key36": "563pF1gjvf8sEwF9x4H6WwjQwbtYoGzv48YHgu6mdTjVU3Njavmn8mMNoHLhechRZhTnifjC7RSV24dRR6t5ViJn",
  "key37": "2AtFPjhG7igE1Jw6Q91LffkUndXvTaF1siMEZMj7VzCRiLjqsSF2r3w3yqd256np3vr9CBgv95TtKGCr4uQfTcmL",
  "key38": "3YdWxFkvJobxmowNmy1zgUvhQamMNA9AcsKtFVJWP5kwhbhRpPegTHMRzKft9E4CBSViAoTZNJ8kPDUp3eg5AHPF"
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
