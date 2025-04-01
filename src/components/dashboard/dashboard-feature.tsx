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
    "39spgiYow6yhWoy3wZw11hBtAH5JgyNuBF8PqCS9TD3FSn8LBfvQ5HyFLBkknXobYsYBPDVCsmPZ6pywP57PhV4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37dMQCrLV8soEYUXj9nSZfRnucjTeGNusnwjhbog5J9aKo9rCKSuwLZLkp9UQpjzRJf1QHobGcxgxCpk37GGoL6w",
  "key1": "2b3UndosRcHKLPHdBB4sPKjt2QoobDarWnrsiUmMRGpuANbemfjSBmGW4GdbPT16Gh53HahopP11MViC41WB5X2W",
  "key2": "aKtVVYW9LDB9ZAPdg9AKHqt5CQJi9B6quc23En4CMBKqBMGZPwSN2uCg1ZwMHxJw93TRLyLQ1UpfUuxqyiRzFhR",
  "key3": "WwAZzvdULJJu7EccSKEYhyWysH6hsbzT3Ly54nvPxmsbcKG8VuxxSRQyuidgX6wkgmrGXJ8Fz2C6N2mMuuQF5Z8",
  "key4": "3Nh5dKCBT31HUcPg5qcTjEk8U7dHNHgYxcE3tuQ3p9T85Aea7xQuUyMt8vNL93L88dFQNGRjZswvoSsQ3P4bvYTU",
  "key5": "21ZAg7P7gkAhSsGwJ6hjXrQKzW6oSgWMAy6apGgwBFJr5CQbJmTgns3vQ4JBaqNgKA84PtcD6fbe5tSsBJzkqYuQ",
  "key6": "3EXRka8rtsoGknPkeJGyN1kN25DWcZ2UPKJMBf8ff4PwStdqyZHsan6kFqhaDnrgfrkvwXujNbTyEsVMBcyVFZb4",
  "key7": "4aYv2LKrgc4BGMk4UgjVCECE7RCaLc3AeEk5fWZo4rDF8THQ8HCxPjqscyzFaQkj7qHgLqQzRLJr6R9jspJJ3a2a",
  "key8": "26wKB5t6xKPX8enn1vpRTvNE9Mt7W4ivfFawDPV3Kh2ApJGemH1EZk1YBJ3oud3hR1qy1W58iuCFRrLCjkFKiYUf",
  "key9": "2nuCqn9UUtb7ewaT9HHvCgq832YyBV6jC2yHWvtG1nPxeaMHk2SMJZQvgWgvxvEKZtUat7tH87bcehL3H1vPvs5s",
  "key10": "3tTYaj2TEj7yPhYWf56TESkt7GRdF5Uygt66jwPVN658cfu5nb8vET4aB4QBQrfSkGibrJPZrcSqoGr2r1KQ9oDE",
  "key11": "48nkf7y4d8s6aRR98cftWo5qK1eC7KoyuqgEsxGHvFBkzQDDTdoKrQoShgrUy795EstAWQxaMRyur7VSsWbxRJgf",
  "key12": "4CpHQysuRiVLriJFiP3PboSXEZjMBkWqbPqoPPFAPDCKpBSTrGuCfgidPKczroAA4VoXyZe7iEy9XJYFeoHHLR2w",
  "key13": "2BCtDv9qGtQZasmnaQZosUkWjVd113A4sh9JgE6hn1sC2DWqNg1eCj41zb56B9TLeD7YWFDBfrwXEUwbkdbHqtQ6",
  "key14": "4KrF8aFvzEtW1u4WyoFnpmS6pgt522UQZMVANHFaqUzE4XqgtuuELzdrdqW7rSedE2ePC8sH5ZDKJEaJUsiK1TH2",
  "key15": "62Ueb54RPU7amoAbyTZQDRkduMqqrEeGRztfGp7qZQ75vhM2VLHcDPjN6gwgphv9PoDWpQEqzevpLDdMZVjHWZSQ",
  "key16": "Lkim6TBva6goWWA9YcNygavjmomSHNCGXSs4dPUjR6XEqnLWDhnRG3Wbo9viPLdt6LsgPTg28XkWS88wetz6j7B",
  "key17": "Y2w3zWa8fFy4xhw9BSCSMUD9mVGMCUGHbjcARjCp9mmSZgVPvNKhV4xPfgdwNFSgpNdijAwTxxMuYDxvYt5gfnE",
  "key18": "3E4cfxxFyuDAqt724zjcHvzpqHyJwRhT2rZtSaBcdoVEzskioi9fFxucpFu6iFpivroMj1K5RxAoVqpioUBaSymm",
  "key19": "2g2be1ETHt7uMJ8C8fLX5efGUv3UhvZjDR3kaAM7mcZ21MEnhVSXeskF7FniagkaVcdDDhmVk1EX8CV5BSHLKDCi",
  "key20": "34tCvo39RaJXCm6ZEESRziUi7zjrqWF7ekLgVaKAE2KTAwWfSMJ67KStwhqXCMGPc8i1vC9ru2L7sQmAoAtqpaFc",
  "key21": "5XxmUmmrAqXiGxLWk1KUe6zxR6f9HNkEo47xiiCqMiFs4cDAzjPEy3AX2AGAfL1p7FB9RRmCczPhpc6wwy6JsPeS",
  "key22": "3h6xB5HYd54Y1kUG7rc7ZGTDxYpAE2pUFKirPUHxLTeCYfeQmVCQ232VZLNdtDdXPNFsQMYJQ1tgpY4M896CGt9h",
  "key23": "uhikNkBSBwxrCDQ2wDt8woUyYBHtLirRfFfLSo7e7Nh4iyYJdfe61rMQCFfxUnGZwvuKFp2s8NMU41x5Hw6AwzH",
  "key24": "2iNeo7oafh6jafo5WGWhVEPRGANpoqp9kWXYdQg6ajUkn6fUjqHGrhFZHqgtXktUejXxtNYRmFAmxTRniZu8DUdY",
  "key25": "vymk3Pgmy2dmmDGHe5uWq5YimSmA9oDieoQUv2EQ3XgUmut9LLEhmPtxsmK4rn15WckPgvUJf297iPBTuaFQzzk",
  "key26": "2EnxsXketBDF4oYdquGexbNd9iqss9YJUJrsZ6qimwTz4w2f6m9qtpAm6GRnwDxQexVjajaps9MbAEjjWxFQuVR4",
  "key27": "31b9jW6tL6fue6CkWxhVYtJMe3vrBDzWguWnmU7UdUqhGr5iPkzvkUNSGieEsvC4z2TS629rpANfiYi2sdL78z9Z",
  "key28": "SFJxuCveBmJDrwtVRuTgr2kLXkkne1Pz29xwkFLaHBxn1Hw58LQepPwA24Tj6DqRpFwtyvXqh7xteZex2VUu1mi",
  "key29": "57mx6zQcUMPGRNvTdMa87H52Nx9NofFRAUgcvjUFyin2CBMKKyZ6DxJwegouRXHNEhDeswH8WJUmb7zCtVCcBR3G",
  "key30": "3325btsJgMSLoPoqCmvA5AFEnv4gwxmiQnduSDDBMX5sfD2Xw5i6yibEb2xTyagS98Lv5GWgFH1ptnrymb3H4Gfe",
  "key31": "67gs2nZcHKppnfsL6CThA6M3kxzQpXGwxz3jDLef32yKh8PHEhxE7yLNFrE9fJRcx97L2WX5hkBMgArzPDiJ9etD",
  "key32": "nLMyc1sk7ST1xcfspm2AMeAbMt1cQepfwMY2SQeNtrzaWpSsstvMtCUg2uv4p8s8A7oQqtYAYSQi9WL1fmvp4n6",
  "key33": "2vbeW6P8TA3zp2Zz1r4pQMt4Ab9t5sDwdLtEMrwfxAJxFxYDQeaJsghMjpaBPgh61TrMpNripH3DjGrBsk3gYSBT",
  "key34": "34SJH2JPLg2mdvWdTiDJMvJjqCoWCtb7VwdzefMJLJwtjNYSKuvvNZsThoytCgewNU2pT2ns25cAwsHH9ACokN8s",
  "key35": "2UgNTP8p1h3hgCzLhXkxGsBz115zY5SXvmPDCd4E9vegkdgPth2LXbovNA5JiCq2mSFKgWA2LzuHrenXsm4TSPQK",
  "key36": "2bBE71obQqnQhU4PeBZeSHLZAVUEiHvT4dyrWx8eH411cY5cMB2Y3vWAHkRkCGYrScV5HfuHMyp3YgjjfVyBuctt",
  "key37": "Z7tYyPDh3sMMCvrA5teDLoExy4RnFj9gtPezuPMuE7raM54fZTAKmTRJn1tKpUJXtdnvnFrBisZBVMEvQUAxvAG",
  "key38": "2DYysfzMsAjFbgZCNocrczxghxR5Egtc83F6SsYcQ4Qrdbxbupt8HLJ6WAb3q86uN5ofBH76T7PGWv5VNwwYwxGv",
  "key39": "54gH1ym6k8CCbdDnPYd35MZfPY2CTgf21wYyxC76hKtpuYBsGUsW31riEdBi2tD3oCNsPb6rUWszyKPQfhwYR4s8"
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
