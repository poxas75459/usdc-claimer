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
    "QA9nxeTituTBg87UC7iyYLFstDf9w2xt4kjmFqg72tf6tzL1hPzQiK91J2eCB6PfFBdYAJ2T8cwWGh188SZApRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31doME7ijGVkCeZXNA411Gkc43jymiCnySBnn57h849mSqe7dkXSac1xfxxWEwyoxrBPJMkgM9QUwqCAxrAxADk3",
  "key1": "odFuhFo8i1ckCzTJTKcWbbxysn99VYxD4hXMK5wJDCdq9woFBtThQzdMncUid2hW75sZ8pouhgwJaLs9jXRkUxL",
  "key2": "4z4imvTE5o2JtXLPmzWQUS9xjTkKSd9Km1dKJ1x1VB1wNTPSepH23G5A7noM5xbZ4QWpLpNoAY1pa8382SSDWvux",
  "key3": "23x5ZWyKWqSMztZvDyLpdP85gVtmR8tYufkKgbLDEkUDQW2RUDGBhTDYDuXXEi4K3fczB3PMzPknogxq1LL5NGKS",
  "key4": "4x9aVVJHiKUDWHUtkp4WXio3wSLFVMNGZ2aniEMjvNmxfSZoFA2do56Uz59Czpc1xULhJJcFDiQZNwY8VdUHDvyF",
  "key5": "5VfbK4ocLQRYzE5Qeqvsm2Ex22KK5dbF56c7FYqnQvPDz9aQsVWBfysZ2bqDdG3h5t8jT8bJGmgWyNNiKeL4QkAX",
  "key6": "5Si9N3Zg8MUfXbm1fULS4e8hnaZTY5LbLxkZVj8PUtUi1GWbeYAnz4hdCbqygYn7gvbiBTmKUjEmY9SbM6yzebKH",
  "key7": "4uv5guZLZARM9YS6Aq1kAhmrG4kkP8uEPMLW1svUpa84Khnt8GffenAkHHDSSRfXzgYB2saWzZC8scpUaNUTJamt",
  "key8": "jovxSTJDvNZuSzLQRL7CwpFYgtS65gEFtJX6nYY4ewdTwwUT2LMB9EgKg8YEa2NUxNeEWzUUkQQqgkMojKTbVna",
  "key9": "3rzdfAugCUS4CNrGW1qQcfUX5gML3Dkzp8wSwVR3iJwaj2mdTNvmE9j4a6UfQ536GToZxMMt3BuEjfqFShHnvwms",
  "key10": "4sHsxfrFdEg4qYG4d38sBx3i34ZnNj92dtSM57f9iNqvh5ebmxNUhrrm1SPdD8b5tjTcSyMgbZz54JTQ5qaeEyAn",
  "key11": "25ovksbkThFRrLbSrff5mgRCKhCv6Uhg1urEipQtm1647e4LAn7NEGaG8VEQcFemp85p2mCA9tNTmLCHJmLaUvh9",
  "key12": "5ZVXr4N1bMNz8eAGTL3Q3JYimBeFHTmJjx6M7FBjEY5EpYUtmCSVKTKNFQCmFKuHJtrpqpLJSZQrCtDz7REWVNuQ",
  "key13": "i1A8z73KGe8RSLUmyYQiXaw2GAKHJRyzK8zy5mKCfzZTWyu5FYviHXsi61jWswT5UNUE8tjL7QKe76tVwKBZ3tG",
  "key14": "2fgUmFBg9gUeQdrd9zY2waiSsyZv3LRprZPSxyKJ7gFh122WH2iCVgBMQpTqMPhUERJKXK1EEszYkw1bdeVqLWiK",
  "key15": "26zZeU1gHMuEA9Fngsae6jqyjKAAeGgQE6yqvcCcPPoRZPx6sCbzsDaW3AT9NFY5S2nRgHGFrwSBCaAfaGPfGUuN",
  "key16": "Yph7L1SKSRBpJDpSRx8b5te5HWuN7gfncmN47o48NrjjFTdaV9io88mUfqDEjsUjMG4tuZio9aggaFus1PdLMVP",
  "key17": "3wQj8KonKGdEmrDetdxHJf7y43zMJqJgG11dhUvm2e5KjzAfTbbr47jZsTVxg592XuGY3EtrLruMrFsvN41yDkmT",
  "key18": "4Ydw7J91vFVLD7HMaiY3egpFtyLvq6TazbgqRjy6P7re8UUe9FqegtYcZFRsLjxFQ35p7CdgUMzCETvV9bUwsaXo",
  "key19": "uGXZEexbzCXpeAd6NbWSEfKirbsCX3NLmw9F71GBrGXbQ8VXuTxzbtcCjRA3dYdPNbUUpGkToAyatqX7BGJ4ZU1",
  "key20": "Ahjk239yHZUhq4xjvXTJgGqijHPNrk1fqgvqn95YeSWJE3v2exwPEqSeCf3kj4x1LntdWCfFFRQnt8moX4fnqhH",
  "key21": "5iHEMdMftqkVH1j8DN5c2FGmoJfNE9Kh1gRhfc6BXhKRJJjB5oCV1ANrmf9oCEfkFi6GfNWTbhKN7Yd6snfMceCn",
  "key22": "3VZmMD6krWXiQMbFBYPZH2397gJMngPe6ffzYH2uZUSoDzE7xkC16NER74Ui7kbG1P3JuCkHRmPktmv2VsAtH54V",
  "key23": "2B4bzGep67ZJagmn9HxjrEXLmFYrSCNQsZBg4bNRua9hhyYcmkrX7frpwKCkMjpzm9XNMZnLF53i9QbpRPv9D7S2",
  "key24": "4ndmehVegeUMJsq9gU1iMhp2XdMxpHLqjv5rWNkXQV1sNkWsp7bZchh37dwqqwAhpxZo8TANquyyw6tyTh1M8nhJ",
  "key25": "5dLCjiSdntNzrUnS8PVgh4yB7PTycX1toC3oC5NgL6vUGrEDpf6ceouBWFzMzYYwhpfsz1B8F4JJoQHdaoR9b6Xn",
  "key26": "5g1GTEzG5MMDZdKExZiWkroHbuuQe8wpvXHoxc8TAdoepwfmudPZicXaAHZ3uGUiQSrq9xEwLisQmQUZNbMRyn12",
  "key27": "4dZwr3ttwwjXe43bZ6UNafgb9kmwuM5Gixdt2LBAxjqm7zFceZ7nEQuVqqnK2b5gTdJijcCKdDu7vtudT8XccLJD",
  "key28": "5EBYj18pN5vSSu6PivrYN1FECsiXS6EpxZGqieDtyT28PJo5P8QeUqBvW3XMBqBXrS59bz8yqbihgUm1fGogJCnx",
  "key29": "DKxCy1Ka23qKZC6DT3HyFbFcNQFWs7uPunRZvzrKGiJcWt9tGfwFfQfoeWKwHqb7F2ucE5s78j2LLaQsDTBnoBV",
  "key30": "4A5JSKU4sqUnHQqmxfCYrSYFAcqzyDXVvdAtEDzU7ir9G5Q9EPLTehnDdAhEKE2bX27JHj3JUSwdfkhbwmz64GeY",
  "key31": "4zCvvL7QJMGcxWgXJusx3pxKLhQTemVFpSgbGjSJqzDF5AgdLWQXBn8MfBGrt7Gb71UNSFsN7fzyyZKkBCkWRQ8j",
  "key32": "xPGVm6qhhCL6ohPRXf9HGgzmVMQkLdsjYAmYZVzpEfs2QDhBVUHos972jHhELBjkSYSERn47Zd2F4tz4eyZcNH3",
  "key33": "6XP9m7iZAGAzJYPtkVi9sSDEJDB1Fyw6C7kJRyaYEJt2CTqAdCGjSa99V5Wj7zJwUVR5GCpVigDxhNwE46TFoT5",
  "key34": "47vP8yLXKzpVqwLY9Huv2SVJ9YckDxvhv1gC5H9DrGHEh4Snce7hKNAamVfeR9WEEhG13vq7owKXJMMa194GrtEH",
  "key35": "2DawudtwqCwXx34atXHF9QSJzYo55CQvqiUzTrm3pyVDE7E329orcvg3wXw4nozbaxgFRQaSXfdEm9Xnx2qStTNn",
  "key36": "UjkqpuiKPJ7JtfjmanDeLrWkXL5j6YrkgCs6UbfctVwQaCwffAGWvKPxcU2gAjcC5sCXzigfm7DUwkbrXazNXtZ",
  "key37": "3JnfcEjxktkGBAYWtV41cerkJmsZrvc1XbkCdyYafebXvaQiKR7ZCaNnoqNKHndq5S9QMjdbG1VPJ7BoX19vgNZk",
  "key38": "4jSz7phLCXurQnPuNGAWwkbfE4guAdMVxTE42PAQnJie2GPhVYERzUpajGzCJnH77N9owNVQ9bdd9s3yjjAgikgt",
  "key39": "39FQnS7Nr5exH7myRibnCRYKdsgZ9FTWTcmB7n1TUcMjsMfV4Fw9Yoj5kD6ThMUbDadUoAkiRmysy8ea7DKP91ZV",
  "key40": "5xPKH8Kwm2XwDw5CcNVhd1NG3aqa7zKv6XmBU25FSGi4vFPwevAbJphUhHhZhTpF2iVoHQMrb9y1R67qcpgd5RxH",
  "key41": "32p6vCp8irG6sF39BWAFndFQrLmz1vmP1izw6d5dDw8WM6S71xWYEW9U8wXmgqrRQ8fjB1DLtNDM9mSFiY7iimcw",
  "key42": "GU7iukSrypGxSYWsLwFyTQc44pT7NPmb4wEj6p4e9ApELUK4z9ZhPFYVAWsY8X9wVY3ZwbZy6Dg5cwUGjJFLGyS",
  "key43": "ZYids7zUjrwZNkMYordhByGRcoQq13UiAC5VZriw1iooDmp8VRSYH5hERUhvMHs5DRuHmL5MdEVpz4HVKHVGHNF",
  "key44": "KEj78YKb9gvjZjnpfni8vXBycfAMA59MzXTFV9Mi6tAuez197cFzrKdiRT4eCZmDNG92runxmbb3Sq2VJxL9hPN",
  "key45": "4VMx98xn41PExxekCw7GfvpSxwdj5PvNTxiTRoXWnk2w2UhBc7D2qQ6jVx9XC2Wc2CjhzLyQXeLTrC8hxmyR2bs7",
  "key46": "5kvzL1X3ngBjyogSUo7kmDHcBzDoe48kPTjSsTSMMsJVtyCDHMDQpbrHkozHkdRDBVgq5FrsT2bhKi5a19nTrhef"
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
