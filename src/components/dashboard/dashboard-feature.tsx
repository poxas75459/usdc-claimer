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
    "2cjpXhkhfPKvNEeuWwDdzKhDNor9gphNahiZMshh9pobnhronvgpGcpfytvYQpWsb17MUoNsDiT8qTBLkDxBiNMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MkQ4zVjsKxzcwKu89uN33dgXgybDkBCjir8Gp8GeEULu4hFTviUBGM2YnpkmoP9ke8b5BhBGKcF4poSBZvXsmj3",
  "key1": "55dJSh9ngVKFp8eEdY4xcH4dMkqYY8GBS6vCidEeEi493r3L23JYt6t5iQQT9JAm8ENAqq3Q1vE6A7GP4i5JfdWH",
  "key2": "22eqSAHeWDnTmtmMtXk4VhViyubXTUdgBFqQg7M3M1PMLHFJCEWCWomrnYnZGVhPZYpYB7Mn6MQus8NYsaTmhrUx",
  "key3": "21ueS4CLVEf3NegjVrbiUofJ1XNkcX7wWcehtf18MStb8uYTse6hkFpstzFo2DWoW4A5Rn2M6vZzVVRVqcNU2obL",
  "key4": "5rWvmi3UFFgvaLMFgeTLa86f9nnr4gmSfQav2NQP6dGrc4w85C23tpBBXviqQ3QSPfwtu3dTwtB1u6AR8HJkXBhk",
  "key5": "45aMUfHtcyHT56tqpz5QsVbYp4qXZ9mr8ae2GjkSSC7P7VTkD3JFHLVpiw8Uj5Ph8VLKNVWxr94YkmxkuyYXSNXw",
  "key6": "xMALodP4W9KU26MSCc4etEEbq35T6NoZAjWV7fMZjU5g8467CDHSXunbxUeEwfXogJxxQuvGndNomP1C27papE5",
  "key7": "3q8hiFbj85Xo4n494rzGPiqEwNaXjYbCTbGPsEN3YqCajw23D9oqYt6ab9meXtVdbTEEWDPrv2ARkVa59EwYidty",
  "key8": "ptBVHVHLrdLn62gpXE6R3nZvtiN6me7ancxUPVdE77nweYGz2fCMMPWiCZCuCumBD2kFufVMpBpxAuf3QDguMfs",
  "key9": "2TrD5bSXc7TMD37Z7SgtgmatRiKthkPECHPyHUnxmhwB5caVRrMBbfWzG1LRMSWDpJB8jYJ6W8RAqLTKx4tdGG3S",
  "key10": "obq3vPqaNxoUabHb5X32srj9zZ5ry9k3Zkk5oygfPUm97d4iUd4Yj2CMpFzy5tCNiWksroYhtP8cpD746Fq9rud",
  "key11": "gWzVoAPcp6stGrTjk77NhDSpk4cEutzSYwkDP3nyKkWayGdyFA71eRejYD9woo6Tt415Yt5tAc6ZQkwwDmcD1Sz",
  "key12": "3QJXq2UC2bDrHQC43QPkT3Y7DnGrpDbUzM8iD1oWgx3nJWvFHNnRiEhCVRiXP7TNJvBPGrKnLoaT1XQkbiqG3UMR",
  "key13": "3sc2rAeYfPjhQ8qhUbobHJnZojrH6rmZ3FVdvYfSyxEQfWpucB9341NyQ6VvTt6xBJYzovZWHbKjSVYcVA6gpTtH",
  "key14": "2tGChe8TKVHpzFa3A2EBDeRr3LrewXjtdJQqVWftPBQPiDKLZvzyuUiKzr5A62aVW4WeVop1La4V5Qzyp2tRuGTr",
  "key15": "53JgpUc5E5bVwoPuuR5aAdezvXcnwbeJnM9HVRJifR8yf5oCNZwnqNca8SdM2hcfWJUwK5SYEkS1symnRWEy5r8c",
  "key16": "57iC2Kd4vTCeHzeNmqSSNZNNF9uNoJRRu6U1NuWUZK1q8pmGQmWEH2jFmZHJ7GYparj9yzQrypxBDBnQvDhhRbc1",
  "key17": "2M7cNQGfzwf7LfRBm5HQPpv33qKn3rn9sQJyuSNn2X4yfBNe8JuJaY7MKuD4imW17kvEk6vHRzqWr7dSrFvd2iia",
  "key18": "4SFf25Fkf8Eb3J7878nfsa1udhH72KzA1uYNXNhmB9pEUxw2n6hiAwHyXd272DyZw7xLFyyt2WWqvG7ZgjYpPqct",
  "key19": "3x8SsTGC6k2o6AFyctQmCwFwG3kJiNoRAbdeYKEVcfki8qPjHhQZyoajYniH7yKBjFMFm6dUksdNdRvBHURFKZUt",
  "key20": "268wZCxSjWFibaNdGpnyinabrrzYVHQFR1tN5G3pxSytAVTxQrEHEaafdGoMy8BDoK7ix7tjm5aRDvdZfVcP3mUf",
  "key21": "2B7Dsegne3WEWWn2fV22J5bydiFVTGftdymRZBaQA41y6STaX7kZv7tLTJSTpeW5knXoN8TLPtYQiJpucEiQZdoa",
  "key22": "3dqvLQNqeJrL4GXWgnP59CKt1iQe8dyotXg3sarXHTFukovGSJ6KQxJJ5rP7L14rBScoHqTaoL647NkwqKhapZj1",
  "key23": "53LC6JB39PVCjjNT7DmTn1Mc8obunuVx6FZj839Vt73TrZKvULsbpLckTJAfffjn1jxZhsAfnqXWuiwrHutNojCk",
  "key24": "9UYLumhrPigmrmBKPFjMQr7P3ZYxCZbs61tHSvoCoqfJBboEmH9UzfWsoQod7fWncq2tEMmqpxCkoQbDkc7WyNN",
  "key25": "5tpHxVpR43GQ7csoSutx4zPE3L1pcTPtH9YYtPgpLrnWMARGK6pY6hHWWBxHfnb1c3648wfqLXrYSSeEd51EzW6n",
  "key26": "xnn4GtCG3jMwfNCkzv49LFZ2XbFmBKgFVi8rnTRgsWb2FNRhCCxjLkodUCUCc5CB7Uup5j6KiRcWjSaUiVnUB2W",
  "key27": "2ExVwTRBa9yWMxEoUyfvTUtCCpYGW82r1CwiMgADXdRyshFJRd54MqexXAVPBQHSf7ZRf3kLWPMorfBxd9Wz6RDL",
  "key28": "5eEGNJszwGNXExLkf2zEdp9yfqdYNkM7U9E7sSG6nWTguBmng6VFsK1hLKs9edBYE15sHsE3bhXFfwJm8HfN5dx8",
  "key29": "L6izLceUmYLeUgN8QhDYzPDNvz5C2q2NfQMATtKME8EpLkaaCLqbmTtBttZbB1LxtCTCr46tQK2NwDVdrX9KDeh",
  "key30": "4g7HPKmNoqhc8NGi8xSck1ygqshk2BgeQQ3H7UfMcqFPa58opDXsGTNWwKkTLzmWaD8FTnptkeQomawMBy1G1kDY",
  "key31": "34PjrSDiuShTip2GK7R5Hiab21SpWyW2xTayQ7QDEjCBMTZYR94q4ZCGNP3kD6jGrR3wccp2mYkSaWkP1ic9TNhT",
  "key32": "4hCcjjmbAGnLAdC86WeMiuRDyFM7CNYs5UZou9Fuc7kfUb5hwgmHU2wcbC6GhuV8ngGBNrHD7My7xUWWxs4WNncL",
  "key33": "4zXT7LwMsfPn5F5cmkSa1ocsrybpAJ9G6Ts9kKSyKk3hERd5geXLZHrZtwW6TtkPLZhWbyY1r7x3mstLuePcBDF2",
  "key34": "faJ1yUsUSD4jW2W349L3zYnBauqoHWXUYxmQYDgDCergMBeD3XfkJuJrRgH6VBnqGkpzG3XuqRyEXyDk5jhEAzp",
  "key35": "2Jpi7vo3PyzHhzuUnUBxK9x6e1PsbDUnt7YPV7Rm1if6EhXvByHfvm56ddhJQH7sE1SvEHGWaEbeoK1BszNUi21s"
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
