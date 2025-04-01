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
    "2gShhBVzJtLuPadPrworAXWYiEvQ29BhoDbX5Vt4KEydp3NhZL7nnnDhfDxFNH2i9vUvsz62CfXQSr2m2g1JCfGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27NeLJMDQjNrnwaaL36BN1m9ezehJvp23e4TozbEQ8JkGinUcvsVQY9sQh9FgDqgtM17PDsbPkd4JirAoU2PRjMD",
  "key1": "5Y7UAqw4cVUJadN1zVtntHGWU8oS12AW4fmXs67x5NDxb5hrKDSDT44sRrHus4Ey1oQuqD9zHXWm1krscZoiNPQs",
  "key2": "36t9jVSQpEGEpxmSCtgqCwwEkWh46S9X1M4YYddPPwkcvT91xWaCpkJ82F17RWX1GUAxeaRZG43sccKLBBfYRZnT",
  "key3": "4pBdBjSEXEFGP7WS2FkfrYU316W4e6ymD5uqqQQ7R2JvryWptiJbiFfR4KKUWaXnweLGviye1CKfosx9eJ9h1knH",
  "key4": "4yW1pKdQ5UXopqyR8AF8JcHyDhQ6YXVSQLAQbUeSJpUxNMjmMLe8Y7arb6aNpzqDujXqvYHwSLaQ5gZdG4pcNEUo",
  "key5": "2gwCoRdqzr6CBiyHBtepR64CCSDaxySaRpjkwB8mx8h2a8suBL5YejELhMy1ojBG5K5svSpSqZed8P9vBmVXivPR",
  "key6": "2Q3URvnvuk8pKJyba32eKWeRQfBVQrVjhwBLdpGzNMgbTbvXTaadEhQG4rRvhMxm5nWb1fdyHjEQz3tfqq7YSRQg",
  "key7": "3ZiNTo4e4oRGnnCV4ZvuEZC86GNUueZruqi7g3azG31kSAgdJ3LzDK33iJuCM947nK5vzFZRvS3F6JsHPisoGFSQ",
  "key8": "3ZW4TvNeLD9KbKSD3MProSuZuKNtdSEYJTv4pny9Pdfr5oAuC3qA2gQT9LF61u1vEWJKx16inavUHF8DTCgoJdPu",
  "key9": "3HMMXnKUzeQw6HTd1qLT87RysAVv9ZmaZtK9X2M6ac5VJjgtTgnuSfneD774gQ8ptRpd5kvy9JomdpvekHocTTzm",
  "key10": "2NbFsgE79wKR7cagxtsSfkw8sgRPvn1v8LfLdWVXXZMY3m3gC9MBNq1LegJ921xwGQWCpGQK2GUW9eCQ9oVSQeiz",
  "key11": "r4RVmHswbk6EJFgx1t88nQJPrsa26jM7NGvGKsHNnp35J7QpPhkDL3Qar1VgjMHP34fSVP5S9jBzR158DYE835d",
  "key12": "3VtVeRa1wrUPLK1DKtN7QTYoY7daJiw4X6TfBE4j3R73P2dor6Cx6PbCuZWBgrmApCoUTtc5YQ3eN5CajX4gGngt",
  "key13": "3u6NdKnuDJDZSWC7Q5KJviLXQ8AXsDqqURcbXKKKUih5NbPfbTrs6fKsmMD1epUzq5nUmq9EKiMDA6uGjPHj5oKp",
  "key14": "4AT7TB1xNSB6hrJiaiGNbqBVg9QQWXntCxFJ8vPpJGGF72ttEJBDTG8gS6jTA8HxrhDUaPYH8JkK45iLYMMixQ53",
  "key15": "41VgAGtZDGbhXWUDbhrebgiAbA8to8Z3QVZvHRdPX8Wd2SvEcXz35GjzSDT6P5jda8QR7dNxke8QCoP7iFxHmLPb",
  "key16": "3Xv2jexVcxEGpu2QrKHBvkDpPaKt7R1BwfymhAcuyuV69ehgeLgkz6HQvsrwByD5cEW5ukeMwcTJkTFszfdNPgAS",
  "key17": "3eSH4Z4Rd9szuYvYSRfgFMNmtGhhSvACesswoDCY3wUYKyXqT2X4ZLjjwq1YZNpNteZNRhsFntAWU5zgcrReL8wr",
  "key18": "4Q22ntFKhVjBDqAwNQK5Zg9NcsWq4x4erY3gT4Fw2UFLwvWohSZXUufjMxegB1MkWQK13UPbYi9FQCefuFvqJcMX",
  "key19": "5zSkJijHaLNYE3PzUxEwbfZiJD4JNi98kWdafwhkEHM6JLLPmkrYs6qr6Ddwjjx2d2X9YUzQjdbPaREpHH3nkYrx",
  "key20": "4acHcNr3mvkXHp9ufQUhb4p3sCF1C18viSgMLnTB2KPjzdfUMzzJih4SYKVRjx458ZxdbSwA8sRHts9e26fcJBm5",
  "key21": "2HSYjmYbNyDGJBDimodXp1wZxwbWJGTR2BTTbQC51k8EHXH78SSUrWS9NtL2zyS8DrtrfWbkBCx7c2WQfHqF1qLF",
  "key22": "5GAyb2uXgdqXWNCb4FNh3huLfKVep4ksFNe8mAxqQucPVYWwhsm32HMtUgR8QXKtyiY63D3AQx3MtnRMzr572Jzd",
  "key23": "5ToBDxe6GcnkpnoU9cYCS49xqovr1KfHbxQ44qk5Cq1Ve6hRMp2YUG7h2cUE7LjpVvgHxznRPhwT5vhszBNNZWcQ",
  "key24": "5pNEQM1JPjzz6ZiYmnaUXxkzfNVXQx5gfSA7Vu5QrEbCwD8GHC6zd74jz4aEi2tRRxv6kdpWPjoXEQkrHRXqtC2P",
  "key25": "rRQnq8dMcUi4CT32BsiA4VsGhnYbigE1bMCGdTv7qYKvDozKEjQ38sZefroe1Nv1F43u9F41wL9cCCkhowSjB3H",
  "key26": "2ZdQwcBefsrsSLQX6qtos1PVb1MiqAknCCfGwQseXnpZLnZ7UnY7cyqRP18dsxXtkgQnZpddxFzfUcdg5AsHTphb",
  "key27": "386W8TFSyTsWiiV6L9YoH71K3SyudShDvRCHmgVLWMm32keiY46d3FEF4i1fgi732hupeALP3y6ARgBEUR9KNBdP",
  "key28": "45pEmCSqLsVG95RPRabRZEto4rnAkaSMQc5vpNjVR35kkBrhj9Y8SnxTQKGVx1MLygfLADVJtQqMCHD5JhkRHPZn",
  "key29": "3nPeb9NznrYsBErvr52WbxoxaLe6GBUUxRHNwKDkhrWpUvPk7gzDKf6AbtmSDh85RvNyEdSnwMi4yjMezXY1qpEj",
  "key30": "3hXkdWFHQSVDbeVFWC7TGWbkgiXmUzy5ttXr6iBwXWzfEDxNS8AQVHxFW2R1KpveNJ1PSjSqGMG9umupGhcKqg6z",
  "key31": "4dpKL9FMedTZbx9vKJEXKAKpHxQmAXjrY8S9u8VJvZga8N285vrQ3P6iHBZ9zRteJ2yHrjRvp1P2EfuCPzxzQRDK",
  "key32": "2Hrd9hRHqZ1WzSUkWbwLV18PL2AV5XLRP4nqVZwFSsjDsnY2mTFhibKVqfkQPAzRcLvg1F6ekeAjmcepDp3SDppa",
  "key33": "2rAocpw5LJSpt8cNtsLv5ENFJK33L8XxeyEMvBYhG53ASwoUL2jhh52CDQtToCHNWt7mS34xRjSec3Rjr3WSaspM",
  "key34": "5ks93NrBRAr8qijuQnKytLb7rSUHqmijTpzntrcbDKWrn2RFQDZyQfPi5TLHmcPRvobFWHgcc61StfK1GUfvbj8a",
  "key35": "3RLmhKo1qjwd24FcEvsURAPYssKMaKguUGJxCpnUcqgLNaiCkJuf6arLUF4W5rwJQAinicryi9F4wCfPPRdKx888",
  "key36": "4NRgGkMcKqKVUDGmMYuTypmD8yVV1WNr8Ly19viFYMEcoZPNBTNf6wurDS6UTU6UAwcFBnVoUJ8YqAQqusaYWD8v",
  "key37": "3DSXFcU4Xr9qTrNScn7TwUeGfHURd3EQfHTzZSbLxxYqtStL2YMnHaexMzpXTjLkhGQVdJiCD71DnKUi9hDyPsjs",
  "key38": "2dNMPynEYQiAztB3i6LxAZwoeWEW6eT2qY3VRbrTF9qqQuZNY3GELM4htSVoqLaPdy2fRsNqay2PCUXaJKyeKZLq",
  "key39": "4TAoJjfpMoWE1rMKEdUqYX5k8b6TZzkPq6CW3KfmCswrcWUYrkEHpxeHVo4bzP3RX8oZgkgiUC5Q4N8GeFJwkU3A",
  "key40": "3DRmy4WjAW69ZWeZ73tTGgj2GiBX4HtRJAkjwqxYGzXrAcTG1nXTGhaR6FVCudHJRfYFNsQDA9hc1zaGsRwtASyN",
  "key41": "3EurxG9y8mnqsUBhgGea2DQv1jBrzFHpMcVdZiHpw37sF33ttxbsqcHGKqtjuuHyNFU5dsWwpzaotBPzwzPJcb5Y",
  "key42": "3otaqVMqKnSrsHHRxMKPZVwnxVAgY87u6d7jxrtkDJr64rK5i6nuYAHvor53yJ76TQWEBz71kTw1d2m8ncqwYMZV",
  "key43": "5iSAJPnpFY4CSxXkurkigRyR13uNRFydEGvdWTtGjp1WP8yMubYTcuuFeVsSwCgkPdt4GRvTekbMjsZp8rdFfxLB",
  "key44": "3HrWNpnnU4inY6E76EYmHYAqNaEToZ6JKoPyaUdGE7CwFhkSnosSceiNroMRmZtxHuM9hSUDXHLCGnFApeF51Mac",
  "key45": "3HdTSvCBhNXzv5VThRYeWrq8KXJecmenGrqpwi3dH227kitTiVJ62nqjtPq1nezRm9oMPNcP9VAjEFsLvRnHvP9U",
  "key46": "2HxjSFi5YScyxgtjA4TZkoAviaDq52MTeYaBnB2QxXdDpUBFnH4urB7hjwHp5qLKHcEBpGa2ka2Ydq2ZBoBjjxmY",
  "key47": "tAUbVXRxnpTiuFYfsZ7Z5SD92gagZsySbE9ZaoM4qutHkcD3UdFLtCizsScq9kjigwQqDKbyALZoPRim6bBMT6D",
  "key48": "5GsiJ1nCfXzDLCZnpKY35hnM1rDmCUxdwffBTtNBSvm16fD6u3dmwgGG3t2KxBq1hBBbVFjycNdWzNRpYyT1ygUx"
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
