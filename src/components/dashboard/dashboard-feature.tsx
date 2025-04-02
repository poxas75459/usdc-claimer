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
    "2g5v2wvNDf5Domdw8aWvvARsT99wM8wFTdexKqa1y6qEavxZWxc6ceYUm8r2V851sm8bhpmwgJFkCXoZwc1DBFjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t15L8HyqekgDrLDuNsgP7HWec4kyfDcyvqwSypjyGLqecPneqkAJY2ixox8KzvCjjgfNZ1jc4sEtZhWPM6h9zJ5",
  "key1": "5zDiLDWXypgAYvW7kDpvJBfAooX7jRcQmJTcDfEHkWNTEkoK4vS6S86pBkM2bP6mCHWZUfHf8hHYfMowgopYXUmx",
  "key2": "36FiJdtYnoxPoSt8wVcfKBaZYUEvwBAMyPLSj2Y3Wcy82VH3EUBvxgXQiiSbsM2yvjBWeu1h885QmkWjPqgi1TPx",
  "key3": "4m5tNw9LM6ace4BiPdajsk2SnN7128QPFABngG9qr2PSVAwA3WXH1YjwY7aEvDaUibtJwEybkQXYsp5pK43oj9Dh",
  "key4": "pQQVuB4hH8w8KbQd7ooz9Mog4RcgyzkmKnChfgzdB2GXJcXZCBRZTvZjTU9joT7c2ivC54zZ2tq3Bzxssoxy6x3",
  "key5": "4UeeW3e6eKqDmv4ppqC3aEYxSwAgersFE2vL7Sb1pLSJfiE3KXHPpmuuBNmEZXMhmg6NXRXMYsH5vm9uzLo5HceC",
  "key6": "5B4s19xGm1kfjwRSX7cEjh1EYoQBgVk6TG7ypr98gPtkgQxZnURGVnUmphqsvr4GV7EnNYwrvjgPdWYFeDxEXUuJ",
  "key7": "5q3aftGMCDWxfF5qMS8n6xoJibsrQ6n85eopBDH5AnKuvrqHMwqEiz8ccN9h4Fx2tx11WHDRiTTt9ncKvJCH8Cci",
  "key8": "33ywxbEzP1ebQHAVqHz2VmZu8qYVC5p1za4w9m58GNtWiZsqUs4FCgh5KBQTmoRkkMmuBfHMDgU1Yxoq6DQcfgf9",
  "key9": "4vg3w1o9o9FR2adft2vvfjehontSkXauusFTWJX4pQcXuGjxzbd79QuArjRyLGPm1XYv9xEhqZygqpjVTiCeaEqH",
  "key10": "4Uz5DiD7MQwY8ahTxiqRuuGeyJ3c2znsFRyqTsqhgnxp45sfyZWciK6Ckm4bB84sysDySiMyjqBwRjjPRWm5rBUC",
  "key11": "2Dgib37KTqAj353pufMjFj3PdKsspmP6geirpDfrjLzR5fA9zkt2Fpahn9pGE29TpBcnJeq7xE8SwhvNhGqSyUjF",
  "key12": "53dpEumCna4PasVYFZrB9ndZG3VttyWVbj8bm4vHGh2Un3ztZQjhVGPsB57cidGTnLE4qLoKXCm2YsC2pZJ61Eqq",
  "key13": "4cARH2sYb3ivVJtF3G2KvCjUJ2NZgZtBmTWc9Vs9PLuoxG7uNQf6DmajxHo4zog5a11HvC9SWFUNb6oPMg6sCV6p",
  "key14": "4CprXVRgUYcYdduzDWoHggDh7a25VRzaAxknmiPGzyHZmDCT7KW9WKeA2a9EzmQvmpZyYg8KhQE82cpz1ZjYeti",
  "key15": "KYgMjAPe1uLErzzSVnPVh4oBzLkcShRmUs4p7KcJX5uVGRL7kZCW65gbt7d5g4nnufgcSMbEJyYUzcZPUh8W9w8",
  "key16": "5KNfMactnxVjhuMvPYN6CwCyToXWGygzbjQu5oREvnVKfc1315QpfZsUKQGacAiPPqbtt1LbXuSyv8Na9Gb2hzM8",
  "key17": "3AL67ogg8fnf71PSCZm6TfnDxVzQCFwJsVSYqEuKnLMd2XAnFzcs92WqhGs9SNcpfQPnuTp9egREaUyCJWTqChy2",
  "key18": "31EFvRc3sGLueVhi7xp2rx2d6pMk4BaBQXQjkGNNAkxzSgx53tRqw5zXafiUqF4can3TymTrGDggwfFrJMPiehdv",
  "key19": "61MJBBkDawpqpnnGWmk72KvhBGKfYsrhTWjEyq9EDutHWBsusRuuzNDWiwA2hDZnz8QFKCBUkvnkAM5xPG7Qp7mm",
  "key20": "5AgG6z3x89vTrjvds6R9BTsCR9kkv4RZpmdc4jw5JVBiX4yurtaYqbmy3xHHDTnb57qnuHpXsNFM5KJ1KY5En5W4",
  "key21": "3R8JrdEktuT5HwRYY8oTsidzZjH69W1wrP3g1WQZR1A3eS1togAjpgHFzaoGdK8JThavk4vSsk74MxR9NcKteA5b",
  "key22": "4JZFkuf8qqYihNb2DEHPJ5kPVcjk9z5JXTrUavFWoo8uK1TJvAhdYG7KP8ZVqqbsSuHmepyw93ULVZwqeNbmLgfr",
  "key23": "3STTiSNagSzuo3E2WPtMuZ6zpd4TWbueYnpTU22mXLyuhnqmFnbkQifqiAfj2o12Yawq16NNYaM6vJ8KXxHwqdK5",
  "key24": "5RsnrSrDM7MRY77bfYBTCdcFdi3pU6CXFy4xQwYivMid8hCHYMHwHRwmpAenr1V82Q7LeDebZV3p6QBsWbJzFSk7",
  "key25": "5zA5Mv3GU9u5gsUL4q9srFyQLotfopFng1rxxWcZB4RPGLRW8T57PAWDfifQHHAVhVuz2ATDqs5Jy9GuunH2CZdX",
  "key26": "2rGKfayXap6fdpVnAKPMFxQt6MDQdKhK2xV91zUyh2Wi2c571fnqA9KLRfENWWN6cWoK2VuLumtsXKE78KnufQBx",
  "key27": "3oysTgKznnXabJdjSEepSEcghzcTcLJxgDVZAw9UQ9mZv9co9oxyXHEBn1A9MSuVoFP6ZqCunC88JMLFvP94ob83",
  "key28": "5nt6UyGuLzNXPUavFT9jFdx4yPaVqLCH9QHTqY8Gs95dgzBBuTSMP3NzxgsBXKUyeUsWRDaeW3Hn5iCU3UEQzNNP",
  "key29": "5jVRcNrRECDp9J4YWCYifdezguuWqoGu8i9ibxwyXG3wj3CkLJZwCMf2LGh9xsH1LJciwXCbcz62NHhwC29giYhi",
  "key30": "CK2PiwAmmpVRukSLMimU8NFt1jX6jWWmgCFCwkiZfuDjYi9Myebid9JgpBuJoj1jvwuDTgr4UQaAcnK9ztQbZkp",
  "key31": "4MBrVY2tt8LFe4TU89RVn5CrY5pht7PGVB3GPVNQiY8uejuSP4heAwhvUMt5Xuonxkm11YhhK4jmp7ZULSmq1xG1",
  "key32": "3TqcLpceuZrgSnmvUffRiUmFoUSzidyxSeMvDs8w9UwZhJN9fSsYBbVzD6CALWBkkrePz72bd9RSnrC45XtLaUWh",
  "key33": "5N3hEqyAA438G7t59BnCqEB73T8YoQ7fj9jZPdcUn5Mh1SMRnu5GYF9Tb3wjZCMYrq9a45ZAM2LqkwM7RTUuo8wi",
  "key34": "37maVwqAGNuCVSXC9Biu5mfjWMRRy8WB7qKJ13vYi2VyPQWCcdUfY2Jfc39kSrER1AqQfrBfyr3e1HUL9cYNuG3w",
  "key35": "fznVbaNa9cmdB5DSBtacrykMTifDigfd94SkGWZNhkRcjg8qpnyAjnzd9SsV7B3EVxs1XJ2VQMtvh8W1eKYDP8V",
  "key36": "3L3NTGdXr9mMC4qmR2yVY4oj6eHFji9PSqR3m6HGoZe2EfYUWnkC9zndSxZtW5Wu1hh2JC61uWAHRfr92qZnHxnq"
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
