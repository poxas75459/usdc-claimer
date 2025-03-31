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
    "5w4R32dDuHB6xKiPVdtDms59XbJpwa1Q4afmHotUja1XFHezsbyvydYhKELvcrt1SXohx6yaPUvqdUYactA1JFvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wAUjHJC6F27myLuAZQaW3HgzTSRaSiXvmZXzAP5JgtkU4n4DMNMWiiHzKK65YoUhuAQacfxJoNPyYEBxLeZnV5h",
  "key1": "h5kKggQKC4731wAvCRg7HismbzZBNyw3HU4nkWzDatWSCLndtvogA4iK18L4c1czf3c83saqZcM9URhQwt9k7Hw",
  "key2": "jfEM17fkpMcaoa7SD4QtAXTohWdgXgtY4rForbksGRqoyvunbkfCw8DJefjcNpCTERDGHTGoa4tkkciLo6frkbk",
  "key3": "64rD88sS5QeasMK5WezpEPaPCSdwspbP33Zqu4cv7CsW6rCH8APkbS8enHm3Mo4NJG1JAzkDT3FKxvHtZYFpCTTR",
  "key4": "4ArzNeiPU79FyhXA2h7hQXxgXvKofoYxuuHcUs6642RCXhNW5Hbz5aMjTBjkf9cnfTnBNmmTaV4gLhHtzR83FCUa",
  "key5": "3Nh3QLVkMa1RTSfAFcw6WvvVc4fJggo1Hq4ahf3J2EwNNz6qRoZssvccGWxNtpb3T1Y6YE7f9QnwZeoiGaXCtWL6",
  "key6": "5mWWx5AtqByXJDF4PaK1Jv5BX3dicGwnA54Zhfmn6cPbpVRNb98FEiWgcbRAxAHPkxY1f8nuQv87N6u95fNAjhX6",
  "key7": "2DeCktqL5QvCekRghjAb59fRUQvtRHPwVBiwHkuQWzbtqa98ZdDnCBr9QVjW9EdF7ufEoXsTQVTn5Wx4ycoUvEor",
  "key8": "4VER2bJTeKo2hfFVUj1xRDVMhAcDfpYYfWrd3rSsuddHNDKcB7ewMZpz6eWVgpKYU9HUp7mT7aorBKHkg6wCfA3U",
  "key9": "3vpvrDdRxU7UPQZtK5m4HRGmnXkK1Brech6NdDU7dGmqPsYgiKundYSQDgMyQAWtveHehRXWVk4QaUaTrLJP8Pei",
  "key10": "4bY8jkcpgQyNN8E4xLUb2dAPwSHpECrj4VdJvfjqj4vhsWaqn42t511gMwKMK5GR6KJojXiVvQmdHAeCLMziY5kr",
  "key11": "3bSkhP3g34DNuM18kuaRNRDnnJW4htP9FejpSKuYq7NHMicjJ7QRfnV92NR5CKbd23Ah24NveDduGgg1tNmD5pye",
  "key12": "4wFXYSpztXCe2BE1dYTSVskWdrur2VG4LypFiB2xpHXAhHbb9v46aFGKjscH3cWvW1dR65Vs8fzQiEFBxdjbVQCt",
  "key13": "4Ed8rbgFTWu8nfznh16hugA8L3EFMLfseLPa3GAAxScsXFXATnsuG8cYyRVpw79kDtEN3tqGKh9dTMMMPxF4kT2S",
  "key14": "5xE7QY8FanjbeDJHf25JnkLmxC8g6WvL9WfziR6FU1HgPqcSP3aridCmou22FE224uDJUhnNRrzFKM5aSTCV2L4C",
  "key15": "2rsYgDKWsnp6rGYJ8jLMAcrRF7jLy1nZ34gcsZgA3JmJhx6D6FgEJf2JqDiegkoZVhwNVkbi3jQNU6NH2iAo7wg",
  "key16": "2xq1jJwTjJ7kjwGLQ6fN6kHkhsqtYxdbPE2SVsR5pGFrzgf3C5ZCzssAk6CoGVS37akTAjvmP8XRPhT6Nofzdr3X",
  "key17": "oKJn9zThfGk8QzMr2PbAs8nncFXokbhDr29YThyr7EpYvdECvfJAW9bc4oDgKjqhnxCPYUMqZruGmeuxhcPY8eL",
  "key18": "3wQ5Ao9S724TjEb57NKh2JrB7sVukG3bDqNCZ2UN6vkMPSJmTgfeWLyMU4JUVxzWGJQQ8xSA9aUgBLPCHP74Eppp",
  "key19": "4BSyZz4HFPHKDeNqbnnGXAVJKXHxSpDzTHaGn27Pgke8wAPYTjMnDK9QcA4b4Yk8CRzVi5MZTTT1nSS1gXYJbgE8",
  "key20": "4K8KVAY1apnJ9KwJXQ3th55k8SFbwsE6jwgjxFLw8zXJeP4vA9mc5nVwnHyBchfnorGonUJTPs6WexfDyHjNRV6M",
  "key21": "4EUk6gGy5Tpt9AjcXwAoq5Sj1sxBPqDD5kbiKNcdw4DmPmKGdR36crR26Eee7yCau9af62tqRH4mV8nkbAsMDRaQ",
  "key22": "3dGxMgHNizvQqDVzg3BYbW4dd8oRFMpTKPKbiv5v2sh6onRvvcDAdGhggNbfzoKvskRvcMqVoKffehLNXN74Bbzr",
  "key23": "46cLPmjbZ675aBUKusbQgwbm6VJ8W1neWYeDzNMA3YQCkATgCVG1k29UyTEekf6fezQPcZypyKZr5jp1K7iGCgrZ",
  "key24": "4hekei6MsZycDgjko7jDgsVrSE4AGTF8NAXsMEzJtv6E2w5gDobUfzCchJvgnBGiqX11SfEQEHoa4Y4SHqpeMJAV",
  "key25": "5aXpbUJXYugSYUg8EUCSU8oUEARqCaPNgMCp3oq4JC1LYdNbc9pjZ4RCyNstMfwZwWQypNYeJXS6KvA73zv6HK8S",
  "key26": "j3WdHeccEb9BB2QxbpsdcDEeMzxB1sTacibe3egENfjRy4Q165skF2NjQyi3gRd1KkyBWY5HVgDzKyrQAD1DLJ6",
  "key27": "5jdXqwRYgk36Lu9qD1pMZNXqxUostXAfdyee1xDcWah4rHHTtkqa1xzkFqq3YcyGwkzoJ36AbBi5bJtFpzd8Pkzu",
  "key28": "4QLLMJBLdeqS8U7tPorZRGxMcJCGRoeoiiETGH4expdmM76WZPKWJZbdVLby1YjbuqwDX1iKhxjEDx4SknxZidkp",
  "key29": "4iBnd22NnjhuTbHDi5h7wXwPEDXwZ9s1sJJ2MxXKeiyjW7mEE6idvVwyJ4R7nCKS4NgeAu6rX9ozsZGAcCKp59fN",
  "key30": "atAnUiQnRYd8dk98gr7YgVLPboHwYxq7VAJufRCSMwrYwy1TfTM9pQTHrPRKhiQKXcnRWx8Rrc3ZeLyxaKiEPzM",
  "key31": "3wFEyLDDcvKFGkrHHP83p54EpHNDqBUUfgd1nUAEHgXacjDsHRody9cBWLTaqu1uyeEipmMgWP4FzCpy5JLp6wSc",
  "key32": "4iPnCdi6LKDooXWt3hLNbLSkukb2AEhC1UFmgVm57wjxnvRooxuvTU8W1jAnm5X3s9xk2J5ZsuXeHabGri3PquWg",
  "key33": "SgQKzU3yGNqF9sKwZbYULgmNa4zVBfsWwNFhq7xrMqGosiA1inRirfDRdahA4kPc9P2FeGZgH5wsedTXiQ1D121",
  "key34": "4PXP5rGoQwZt3ecdwQ1Un3aA3k96rECFE7uyaALgN3DxLwxtN2xBPd9Qi9EsStzfbkhRpp1JNntmMo31FHiy9uAJ",
  "key35": "3rwS6AdSdyE2ryvWswS7QDQC8eHN11rVVJuT7EfDZYvbdUn1JrGUdfjodW7WcGCfxaM42ScH3GzznrCR7fEPadFZ",
  "key36": "37UQrvyis6mUmq6YichFTYsR56XpDJ2zVK8c2FgewCFYsjTbs9jBX86ovH1JS71oakPZuFyi7QRDBwdtwWTERxz7",
  "key37": "512Qv7qdNqH5WVbxSz2Tnh8skdLZHVPFfK5g86bsWqFywdk5eLKdA5nBUxHDW8xZM355Qc6Ukk6ryuinCQf2pUeA",
  "key38": "9teBMuv8BLJRWNCWcGtT8xkSmGaA78HqToPejoPyC9PUuuEqZCQ1xoK5QGT3UtmE5JAdwkuYQPkR8tf65iaA4Se",
  "key39": "2m4Rf2HMrdkqEtQ9pqJvb1aTSRoFHRB7ucj8KujVdtkgLQXsDGeR1HXQDm3iSjoHPMpW4WD2XgWoqNHnLAGQB8sW",
  "key40": "4DwFXsxovBTgCbUJrq6AqBPvvGd7xpB5nY2EypS8684J3yujJNB2sz3zriFN1wRGdC7Rarrz2jFckqE8YSAZhC5M",
  "key41": "57LiKTHRqHJpmVxhA4WWJSw2sxUE61ga14CDnH59ZH7MjKLd1QtBXk8kHroEBwRjN6MRX1eQqYnNYLNnyY6z46zo",
  "key42": "4yTaZgydeUKo4YQ85whDoVQzbHDoMKNK4zcopUH3caaNtBau8ENtpwbfZBWbyeHQNx2ZzgfMYW2qH2G2bccLeTLk",
  "key43": "SftCEs15fFwPAn2D4bmVsnWNo7J8n3htTttYEs3j3XhroAke9VKrd7C9LBk8QuFHnvfWWpcrundDnbiVQXBz6Rx",
  "key44": "4m9HLTfETKZpCEFNX3rWNH5XpDhcuh7KJNhKTHtrNSESXCJxPqsw6nbyUPA4QvTF3ubRVKQfzfPVwCEoahwTAK2d",
  "key45": "5tZ8444EuX7hvv7rbNhJDpZR6G1kw1PVpTUSuit9PVhbxvPjT9TqazQFERUBS4MSy7LXtDLZ7oY9Ndf6RNRyXpW8"
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
