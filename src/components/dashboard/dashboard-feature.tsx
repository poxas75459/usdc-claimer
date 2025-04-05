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
    "2QEprM7mWJ7NCTnF53KXnPCECCT1uDCkozE4RdLkf2fCsFgign5khYF6jgDSDWHBhoAW6wpMAafgWUmbYuoAP7RB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TjmA3FmkbtXDAa5nwLzAr1WUiDa1uHfz9fd6o63hB3N6K5o3BRY2A5zkZWagteiXcVb4hKUmLW6pBFcKqSECpJE",
  "key1": "BtjaBf3xmx1BW429dyGfUg9N3fgQVVHg2A7VeNMS1jcYzELWmi57jSqL5v6c8qgmkGFAf8XsRZz8yBMtCHVXhY2",
  "key2": "5svsJzB1q4eXm5frKq3mwuwczQWVYDBbYgMed8y5eVpG3wsLd5obUJVhA48TkheKiWnuKKUQCQe2hKdK7oy1XGYu",
  "key3": "2XmBT8qReJxbvu2BfNciEKBgwGqpZ4kJTrPcXKtpvFDzKtbCc1odvERYXAVzuLuiS2hmo6fPxdXqD3aakXgTB8QS",
  "key4": "5poF35LWydbDfinjs4VQjhNSKkRHDQExEHrS3hLwC3xU78MMJ13ZbZgR3iFtmAunBRx1Ko34EW9XvZi3TQa5QZcS",
  "key5": "3CAA4jKM9XbjDXJPR45CUXuj8FEk7Hn8YZpdkyqm4wBskbLZqSt8cyfpcC7BAZ2MeAsLozVcpbT3N2xEq5hovLgr",
  "key6": "4mVB6s9EYApbBpn2mJB1jHXtER3KDWKxaExKNjJxpzip5QHsdHXi2rAmirD3irKNAZABjZH8CEuNLwGEfk71tdXf",
  "key7": "3bSXUavPHjrDQhdeuaXsTHW8WomGCARW6FRGUSUEDxsKymyZvopbLbdB6oDb9rRSKxazL9YarR5vaZwpiz48NL3m",
  "key8": "41YViMBJTwXmEDN3Yj3bXzbEmtAaoK6hqAwmBxkThSHiJLCbLNjXjfZfghjeJyUQruiJDLMbP9GNzLVtjnnokA4N",
  "key9": "3RFe1bjDkihELMN8Qffk6Z8GPDyMSeAHFN4qb87cm6GY5NUNYftPdywQscRF6p8rTgshsrinNe61xS1i83xmaP7Y",
  "key10": "65LkgRQpFLmaiBfaLPKnv2Z82meRGxM3kNN13YXuuCt4q5WyAzNb3SzKGKjq2cvbNz8t3sBvxCuH5Kne6WtSn8me",
  "key11": "4p4EEemDUg5gE31MgvcPRgAqf8VsnicneM4Enq8RRcZSYurj22vBEkbCoBAt8mzVW43qEaAxECJzAEwoBWpSUh9d",
  "key12": "2zxc9bitqzVT8ZMJG1F2T31kMF7omZKhFZgWMfXi1bwx1zy8jS48HMk375fcMSCwi1cXENFD7mhqAxUjfnyv2X61",
  "key13": "jYcaxrA1cmrj7mq8CFd1F6faDuxJ2eHUjoNscPKWUg73DwJs3gGD1BX6sz2hqiXxzXrM6xvzTAyenva1YwVTty8",
  "key14": "2qLLjmsQdpxYF8P1D8oBcy7keUvaEi2HxHJKWiiCdh2uCSdXjys29cveVuhVAWhDWffJSG9zzF6uQbsvVhGk3hyX",
  "key15": "x7EXpiLBgJR5yRDyeNrRmV4hKiTArAVABkrUiZxUwZGwfiDim5euntanCHSNNtwxsjg8ndxU8nBkzyycd2dYnBG",
  "key16": "UKp54ALECcyw4njeCDxgRaEy57vBpP3WzqnhCdRAp4xmkBpMJde6P1ZenDMYdwb6BhVuzJt3TwMDwT5oL7D8Xk9",
  "key17": "5vh1BnXRBP79z4ny4iNW9fuukGjE3yjF6XPxxa72Y9Sv9WsUC2r7ZX6ZmMqyrgaEqERr5ei7ZCVzn9wQuAKjtGCV",
  "key18": "wjCjLuRiPVy8oAJyhM6ax5w8sLTBntRqkEBv5Vce19hcfS9qgZxw111hXAVu7fGG2JpeuYDtuHoZSFDyTCAQv1c",
  "key19": "5oxmHjjKbf4qE39uDWvaeBHb3XAUdEmypPTWubxUmtcGGgmkdgACj9knz7Us2qvUDb19yoSgC2TrCeMMKSkhGzbc",
  "key20": "3iFCSCdDYR8fXAmyzQGSUfYS1n9AqfyjeC5bR7FbCXza7ZseQM7Te165Rv99GKqh7x37VWQ1TiULkBe6gHb3KRiu",
  "key21": "2UxdatHsREb3K3c9XFzrmL4d1onDsqU8hnDGt4xLG5kdSdLTJDpsM6NLF38nozxo6psug8yU6ozPwRgQv34hd7By",
  "key22": "3SwT6xe77NMvhF1dqrqDPVcWZ8SjXWHXVT15QhhJXvZtBHYnusbWNXqG2PDeVvhXi9C632UYtQZZkZzo6iiFkdhv",
  "key23": "2Jx9iw9amtG3Q4mJ41koiHvmhcR5dYFcdVXu3oLvBBpadUEWNJqMPAdANxkJdJa9dbhp6Uhc5tjgfcmv2kmdfP88",
  "key24": "23TXNDb5eFEsj9u55Lyk48dGrZ8i4HrhgGi61VddStC71Th1tQueM6qW4TFxgreXhxNzE2Z4VS1zXyF274W9ZnNT",
  "key25": "4GMeSPhxHuh9iAPxoW8igFuVuUPJiNJ3New7K6LAFcN7T3TBqnhwg293oQmrfoQ2B7qAais4ZF8ACRqvfNx3u1q1",
  "key26": "XwLAcjLpK8Bcet9ebTAA3FJAnJcvAeePMkspzcgewnrpEeveLVbDQZodxjNDMCd8HBdNeU7SfLyphfjZw2JcR18",
  "key27": "EDxcfCqggncmEztfad4Ltq6xCtKwzVNoKBgvQFCqXd7HfxRkS1QmjziHX5trgTpnPhVJoTsX17QZ7kx2sDvTqvf",
  "key28": "5pzJTYiqY9XphUGYDka5xYUGRyU3Hip6UNLvXnbk4Q6Ycnf67CGiCeun7D6fMECtouUDfiDnjpJqvwt9QiYCUysp",
  "key29": "28Jx6DApMqdzDb1HaMpnaqoC9kVVzxJYyybGbvgdJdCV5dSGr72wMcJd8qxi244Z6q5QwUzNQBmj7SLvmpENga1V",
  "key30": "5U8TbNx3gGbtMCXaTcEJoovwRXoC5ZxgZtF2GT4B4EXqENwhUcfYw3XUzCcb8yM42WezqQi5ji43wWVfW78phXEj",
  "key31": "PWiWSaFSmS8kywhixizqEUqcL7xxax7A2MK15NcaFbdaFDeDi8s4RdWvkjH56HsBXYJcTQmtBuNzC3cx3k8Jwe6",
  "key32": "4W9nqJDouvjxfMMC39sYaXaWpd6z1kq4eeTibMnEPapz5wUu89HJzFW29Zf5z7LdDMMW6k1H8b7zPnrfMmgqowEp",
  "key33": "3cKULvNAiLMpnRvoZdbTwgzuPgHd34Kgto5XqBbh9HRAsXveo6GHTJGTLvXveErRr2fA8Qd3J1BNbBNKjvE2hLw",
  "key34": "2rB2wfonVXcuFAhmF7mav1ESuc52c7ELWQVojUfDaXUpQX3WLk8Asqm19BMqf3zKxnEyraJ4YDAfRJbeVZJb6mJH",
  "key35": "NGUezr8kUgCb3bzgQ4f3s755JPF3pWqzGEDfMajmFfzBLaDYuBtS78M7c9D76aTiFj79vgsknQjcCrwweGrB25a",
  "key36": "xngYdA2BEpoac8a65yX1ojACrGau3toBVUrYw1TriL11SVBcnBtFGeBhMTXo19pnQVDdc7ZZPyR9dmhPPTQz5e8",
  "key37": "3V8dNvDPL674TKUceDDuaMVJAJXpJVJ4FymVgyqRhc6SraxqyRQimQjAvQ9XeVRrXvH4c9uVdHWBJLoCKard5sDj",
  "key38": "3brkxohHzD6mJSzYKh4pGvcYeqcV5uDngNHBxYhyLuVtc5V4idLzuj4aTTSD483FZSH8i42xX2KAhPeceDadNUwp",
  "key39": "2VCL8rG8rc2bCihuJbTym94aJzVJsSLGcBPxweVdDVMtiHPuambgtUXr7D44gvzuKgwmXZ88CE29D8RaL6zrNFbS",
  "key40": "3dhYAMDh4v2WG4uDXU69qQiRRWjyEq6hq5XSJWotmSgXdxxm4QZatLtFq7QmzLb7dbwbPeFvo1Ed3a3mqfsTSVXx",
  "key41": "4WWBN8mZYzD7EoXq5Q1WbEzWzN6tDPCZVTz2VCqbwBVuNKWxQEhxEfxsgtjVdyKH9e9VYakrxwVLi2RGmRnxG9Qe",
  "key42": "595GVK5NyLPowjFAggP5tGPdieG92Q5XNA5VNwXrBD6VcWD8HQitRJMjeVVMNR9ezhpW5k5KuTktsU1oaxj3t34H",
  "key43": "3EKwUiUkWuDZfEdYmMZ1bJSnJ3qosNYyAkS1hKyHvLKPsTHesJ7ZdwLyGhHACnVrTUEUf57TkGdw5tJq4gXsmdAr",
  "key44": "4DH8BjiS2xggmtThkd2p8xTDXDDnYjT2r5fb3NCWjD8vqnAVQWqh5JivvAKAcqSp5HCL4DthfL7rdyP8V2f5qqqt",
  "key45": "eyH7C1jCU4yGYf5iFeEfBKNHkjx3B9cjjkob3Z7rBMDe1zZQTf7AXoptopHR8EF5weqUEavuu5D5a6e77CyvzJE"
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
