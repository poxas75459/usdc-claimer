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
    "2Je8683ZQRKbPqTggBYB8jwTTzL1jHW1KMg4p45dixHEHWwdRYgaKDEqaUssc924m3VgQdNxmvLzdqujqgFnLMFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qrtQwy8fQEN7VKe8hrHEAxd8sQcJvShKoo6XjBfGWTPajS3nVoVGcUn4M7oGWNifZc7SEhTm52RVPqef9F8X2x3",
  "key1": "4B2V5Q7WNhEEx2uWf35vn9Nyc4M8wJSXgyDDMrYiZ4nXASAx8iznNUrarDsm6dvxvNxkDdEJdUFDbgamTmjfaEZL",
  "key2": "4s43G2PAWcYk5femjPmiq3U9E5ARAFQoWskMjXRm53sscZu9dN87PTQKWnmG6NMtq6HoByWE2y5p2kmcF8FghvFp",
  "key3": "2B7a7LuycbNLSmfxeQ2ZnudHqqBJvHefvYcNyM7JjvDWwS1ibCdnZxF3WjQeLr1iQBeKWpNmdJrTXsoM73gwuVXu",
  "key4": "3oZnfLTbJ5Zc4q4D2evVtXMnx4mViGBKpgekMsWd4i4VYQDy2dLXR5mKJtBb16VTPdcXb8Nf2cysSDtJvdmfRwuK",
  "key5": "4psPmzksAPKyUtP6UsVN8UNmcseZtr6y7JkgZzvchSY54w8mT2tLzZr5oHX6Pq9hT6uguorJXfAnHPa11huHQKkF",
  "key6": "3a19qNhynQ2VgYz7X6ir1cScBj9m4mGuFQRgr1oVa3d4oEJ9ySEWtXPLrcGeRqH5z71riP4eHvaFBWoskxyP6o8X",
  "key7": "5vrvZ4Ag1wVBKPh1V2uhZpZP21RMKvL7fbgSxcRuzYQk1eibtU4JTDpME7Bevcz2SafqaAXWwNU8ViSaHhVYi9X7",
  "key8": "5EeE7n3T7UxsAia63r1Azi2EaobDEr6dyjRUaSwtrYLW9p42tpArkvvWHndq7ztbSZQJow7axzwpj8AEx8yCMxAD",
  "key9": "37wXFecZKQNWmAE5hbYqj69GFah6GqqME7cpZgHcaPFZR2fHgnYGYmBVpdLsLd9axommeeZ8CNLBF6pyikouEVqJ",
  "key10": "3HqWPoWQozmzQvwaULjS5Cu2VQqPyeYNT12ddtNpeydK8Y9h9QBu6nWUxQBwqU62HYPYLc6xMD9qvUnrwGqLhZYv",
  "key11": "4gk76cAnDedYV4EgAWZBJVsHhDWEgxzLevzkT4vFZhLc2Bg71vMCtnMvzj7TFggfKQBQPVBjDGLxhrc7chDvhzwN",
  "key12": "421yTyESYiYoTCKeRaxDiVcgFp5PseHJjwaCoAdg5R3tj1c259MAqgoGws41z6oarvd89Qxx6BogKftZhj8zSLZL",
  "key13": "5ULgq4ahENHxH3pEjvrCrWwV1gRgGHAvp37bQTM5yRD3Gh13sndVmVwcLA8jn1NeHhpDSdVMNmV95cgihuthARwU",
  "key14": "61WsvULE5VCc85MMPM1LnETNwaw67VRwujeBRGBUDDPZ6wRKm2MS3thLfFYThCWZWpjUtn1VLhxLFYj67FJoiM24",
  "key15": "3oX8q6dd8ju9Uh89uEK35AfgPq2VTPsEQJ7fzCjX2oQcnFL1BfaJsCnbx6n7GCt4uodvuUvc9d1zatsDaHej8MJ",
  "key16": "4onVj9agbEh2q2qkQZthoFpJXzToPQUJUjH8se72CVDS3ASTLTA7QeUjRiDnwASA6rLA5DKL9eoedY3Riwn6VxrM",
  "key17": "4szmMEtJQzRbwZUMcc6ULikqH2o1SvDVqe8zhV2p5Hag8RURZAMKgd3RipaRDUyXt7cTFpejxXp5ArrWfwGcKdP6",
  "key18": "3MkYJypN98xX1z3v2XpZcsrsEN4PPghcNaJurU3DxEVdHjUNvqztQZJvmVh6LaJXe62EmwEkALXvnpWb4CRrkLVc",
  "key19": "4fEUYfyR6VuKaLiM1sBRzctdoHL7t7XScutGeLTwc8qcbSeUZg9BpGcRuyMNdEW3tPztKpW8QmXw8tKyW6uNwU4X",
  "key20": "hgPEXwXVLho9zRkYhVPBNWUkhQqLuR1cB5USG4HHzGvwrUoGWsfnzHViL14uPkViw72YYqeKjrUDe78C1u9bqWW",
  "key21": "3Ean5RS7AfD8JoT6LDJKnMBe9NqiehrVB9VhYfbYtgAuoUoNBeCsH2eH6SHkbdMCNFe8T91rotxsi8aT7Gx4wFeQ",
  "key22": "36HVVWBkXDDpvQH9ifMYDds11n9RBTxfj4aemxbfwwGnKDPb6vKzSc382zU2cTqcx9br9gssKKeVN3kSY4TAg7zd",
  "key23": "4Ks4EpaPSBNqSiyPmKtzejVGMBf81TQKcupxpkbxt2aGzX7JWwABEF8LYZSTkV3PgskD3UgrV7xGh3iGr3EsAW5Y",
  "key24": "2cJbwNE6k31fsy924B5BTRsPFiXhGAcqD8yWPudmCFiuvm6S9Lfm9eWNHFFYLWVVTuD4cKQDb813o91sUa7eshbW",
  "key25": "2qUsy7xyWERHp8gayHNr7ScdqeiTWGxkgucMBGUd8gac6y7dYWnHqC6qhgzEa7pX778DCvgG8tLfjjoRJgzrU7kF",
  "key26": "5HK1cPe1mh1muBDYSgRHxA5tyCnVWjSF3fuFAyyFLtU7xzxrnwK3YrTfYaqk5QLDKw156Rk5XTBJFdfNfDMmL1HZ",
  "key27": "3q6JfJ4Uaro2PQ4c4haB931ohWhp4onBRQ2dhzFGqCveRTwpD5dfUzYvWe6QdZTENDC3EJofzhpqtKNgb2yaqL5Y",
  "key28": "TLD9Sdf3C4gyx3iG2BtoJrEXq5GpoCGckv13ssAxDisFxoW6GEFvdovJcAD8xdQeDvSYT7BQNTY5Q6V4UQ16FG1",
  "key29": "3Pb3vhwsPWCukL8u9Wk5JuZUMJPVUVwiWztuLCQkioWgqJB5xrbKRMFJVaj56gkt4e5Nzh1hz3RecNe6pjWYzka1",
  "key30": "5pqhZeMSHaLkUgShnyQan4SsuXKATRAapfFQV4mtdxW5XZLNvY7N5fprfoTPvkebAVPgTV4MdearSMi2Xgqjsy27",
  "key31": "2SXDqypLbzfAsuNJVPiG9u9PhGg4wKXa9Xs9RgRtJxg31wPJ9k464uSYQ8YMJxGe2uVafx55HJkJ51jwKVxX7Ten",
  "key32": "34SEbKUxohKRPpFRu1mYsou4aQD91Zu7L1dEqqhrJfFLXZAdA1jV7AhScyEdR4amKRcz1NiQjMz94o9WdCcE9psX",
  "key33": "9aTcrsGSu2z4iD56rd3S66Bjv3LdWGemjqC12zaryTDqhaDotEJ7kiymMFYMT6dGo6ZMy1aWKJZ6p7VurAiXeuE",
  "key34": "Cd7LnP8GVmc22hXsZjB2Mjn2fpvzeLnA3kKXrT5A73gVLhPwprbaUF1D8ajNxeKEjYRAUVd7gEuAK9eNqiTrn4p",
  "key35": "3udS15CvJUBJbTx6NDkos2qb7wvUwqS77CzBtmTRftzfzWvsjkTSTA8DMBKUqJCpubFQPs53MV2JFSkYQCUw3CwS",
  "key36": "3eb1vWKAabm3HGfh1CVNQTBC6EXUoiwWyxmhvkc2LyMfMVMjCdpvk1FK2VTsjdsBwmx4aZhrcRZkgzWGy1zd9TF6",
  "key37": "47C7pKSPhTWCQtgoiTATGaLghJtndYKEcAfnW78xdbAgnsNBG8VfRov1vTPjibEMefYbUB3oUHJY9hjGBW5LFFC9",
  "key38": "27pJG1sCmZ637RGnK4357dLq6vTKPqKYCkT5NhsF2w59juBQFgmFV5zV7BMCJMpR9pSA8UkYNREDTFX2gPk6jdUP",
  "key39": "2Lfho3XNS3cjA99KXnYjQoeSJCLfRKtKxaHsgvcmsopSuT2pmi8zfb9omPVYnMnUcYMQBhEcA4tcH24RpiRZyJDu",
  "key40": "5BWxXi9XXnpXadoVwvXJwq81kD1fGhNT1JqSEQcRESovgJxk6KdFbc997oq8X5NNM2UwD8Jo2XzSPrrVZ28D1Guh",
  "key41": "3vxxVAd6bgcjDyk1zwzCA1AkjtKuRNm734PCpfv883KCWpVmU2Fn4ncmUTRyET6sMYegC5cxqsr5ifussRhv8kxM"
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
