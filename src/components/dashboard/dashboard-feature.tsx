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
    "58Yh1Y4XpHn3HnANrawePLfd8rMkMyrpFhd9tTJcwpknV8AdcCLNAWeaAMZJpRyc9ACNU9xMMUAAxykYGeoa1DjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BPS2djzC2hD89ExgPvYkLrfE6zu72zojwE2NjJ8soBQYwsCXfNofaPs7XVsyfd4eNkfeiychnMHgrnKno3jg3yG",
  "key1": "3xGHK9PyBUNaECPWnZSD1c5Bva3XdYg6kcF42hHhiWm4KeVdET6gxgP5eKxF1XNVsAHmBh6de9q5PoxKBGzNsYnM",
  "key2": "21zif9HpzygiNPiAG8Ve2FkqnmaWEtkLcNSAB54mC1ZzBfTRFBENizn9sftGBYQRPhnhgraKxe3uyf1eiZ4GT9Hy",
  "key3": "3G2aQapRT1Re13Jz4BWAj3NcWsUjUYFdj7euUVs4T37E1p2KLaNWcjvvj4qkVCSV7HH5cDQJGcGGwN4amXXdP4QG",
  "key4": "49pXRbhLSLd3XGcc5FWGpzYigZw9Dp98FJEKbZ4guRnsrHEaJST68xZYboXPMbig72a2k5ycBoPmmfxjp2i3pskD",
  "key5": "pww9isux5kGAgXtpRVFfEVLXy3TcjZy6jA29Jc4JJn1DB5Lz5fnPa4xuNVNR6wczSpY9goa1BspSQvicSu58nuE",
  "key6": "4VMYdoNrM36WxY6G8tVGDwfBHX6jLM7mEMzLcfmV5RtBHQ6Ppz8SP1Zynk7dww67kNKU7gykorG9z3w6xKQCC7w8",
  "key7": "2MkhBy6DCrZm95iDbfRyrPrR8rxqB2Lm3rWJKXYdamtgaGi47G7LwJihayoTu3NztYLX2ZygZ8gPvCeqnARzD6Z5",
  "key8": "53dfYJ5cw1enzQLqL3rxTb9UqQjCaR6qUG99FazWNa7PzHc31UMGB2aj2FBXj1zdgb5L1N1o22yGFZqjZD6RVeEg",
  "key9": "3gzmmcveEL1PLyAHi2ioUCNvzSXpAyqwoS7bdVsWwcBqYKHazqyL3RJMQvELF7JEANs1Ra1JtHUvKLNK1riS2Q1n",
  "key10": "3we25CyMqWQCVCwjiYSZ92c6s4kaD2qL67wxyb3ZrovLVCk1bfdUh9m2ZGVDsbBkMwkYyCSiCbKn8Pqktf6jL1hn",
  "key11": "2MMWoJufVwQaur64RMxH8Yt44xHVU4UNgZ9xvPhA1Bt5CR8CTVKpo4LjSMxqcuKh1dMnSpsguM6Fo91oP9EbeDuG",
  "key12": "5dZUgnUpwVQNLARfMLCEtWQi2VpvVzxUNAUUXMEfiVLq7aEVnWCTrdheJbv4JYaD4DEfNQWPLaErZuUPJonmWk2n",
  "key13": "GjoyvxMqevpS3rjXfvzPfa7CTdyjHftVsGZrTi9rujUueTzDarHbembhQCcQSKqjfqxeh88WFZBhAKQAP71d4pE",
  "key14": "5gag8ht3z8uPEVvDxrsLo7wiPirMAfvpXaZnd9NXebZS52MWv6SzexeBxQTuZKJUjrZ8K9LU1inmnXQVB2PWmVxJ",
  "key15": "4ArWW97DNrXLtzmExeJ1hLyz8z5Bv8p2ewnBfHhwn5ntgxoCqCk3W7hV4SsHvJxwxBMsvSnKjn47N6XktxV1PszZ",
  "key16": "5Eva5w1CsZBBZArqcQx56nzexPo5GfPvgS11uwZ7UDP43YEBqUrSMyEDNnqCnY8aV3Q1T9rRE6XdXRFnVH2Bzsfq",
  "key17": "h4R4u2ZaUeUiJqvEKj3ZuefLy2zQ1vg6y3sBhWPkoz7RghyuRJVPfpnMAKcqJpfHY6Xy9sWcABguEwqDM1ki6Ma",
  "key18": "227GBJBx6bcnfvcivxvKGacugEyp18oizA9uDNntU5VKm3wcpAuoh6t1Eg2My6Gc5CrMWNdDtX2pgP3Qzy1C8fWX",
  "key19": "5XZdwvA1qFhYBtjsAbVwAHVWvFXvN1jfQF5PBzEm5u6SSRZmwseEShQ638gA1HyQrCLE3pJNzRVWAS3a29ENAojj",
  "key20": "Bk2XardDZVTnn6HMV8is5pkZqjzoi9DoDzWwTxh6ZFBorfeyDwAxHjskhqryA4G1CA376NgR8KkYyrapAHNqRAw",
  "key21": "2C27AR8mFueyMtRkCrnFdLmd3pQD7zVM5zY4QAkAunyQMYMKf3MKJtfFNs23J79n3e8CasZ9fq3LmxVz2ZDfmrtu",
  "key22": "HH7GBQmsceQ7rmaTzfTkWvA3D229Yd9sMAY8h1jP63RCVmAvSYTp9YyGuK7ryHCZiaGsQJQB7NdAY8fbe9jrTgW",
  "key23": "4M7yD3rez4ijpDTyhHYa7yDTyXqP3n627wwgpvGHq2M8W8PmLtuWZDiWCih89eizAB6CEYbGeuqwxQdN89ehLJ5N",
  "key24": "29MzMscws2MJymGFZrbX85dDW9acAmojeDHLeMXb8nh69G3dQVYZKyNTmRcZ9HtzZn4QfSfqAACytdfqQ2b5juFP",
  "key25": "4HnDFfCepwDzu625SeXVjKStsExE5bjNKawB2BRSWJ6zrdwu8FdR9FiEgwdBBnJzhf2DTSrk3XmARSkVCZ3URro2",
  "key26": "wMQJsVG3q1uKNHFgw3q39Y1Rwpsd8n8RfqpEnpNKnujPZiqqERLjFAcjWnVJ8WRBf5Ha2WCb44ED3EJ7YvEBMys",
  "key27": "45FhRf4gixF9eb8bSY22GLohy3CR8C3WsBoZXnQk97uFMC7QojkpS2tUUKHyNq4oLCVUXDS1kSTx7BVvwnbsvWtH",
  "key28": "4sanPPgrXqjpnpknzvwoC6tNYBMP4VRuQjbdeq6UQ7YJZ7WaJRxAxbBbrDemHPUGLJcabbeXKwsWBzYLpQGh2usK",
  "key29": "34A8WRoQkVdhyYmk4BPTKxvdBnvCjQvsboZSou6jD2TqNaRdtggdGQ222oYQnMqgM7Hz5t2NqoSzKMTqnB1SxYtD",
  "key30": "4DxsUF8Xa3crHtsVyMjfiYms9L5rHoijrpSPkRp3A7SjcN663seyFAvKH2tddBRqSCchtgHP45tL33rKPaZm1ctk",
  "key31": "4UhHSqQJ89m8swte8eDzhKudkiWd9tp2j4EESiWqxXCuMSzpmGnAuvDbkHLo43PY2wPsWgx1eVLdvy6oBeaCTrAT",
  "key32": "52umPibjesgSSfqbu53sreeAnHK82V891BAaqauwdv3TtKFsFMBqDMZWTQKdPeVwFZbnd76UdzoPZG3TYXgDjae8",
  "key33": "2xacdzxQvPKzaw8wzTE3Cb33GACdWNyMCnp4dq2VFeRqHjaza3bNdi47zwbPbdfmz6W3zsQ9H1ruGi7ubuDibxBG",
  "key34": "3Mi4nM5uDsF92r4b9qv6Aod8UEFww12Z7bFz5CDC3UqeZBitZfHvGJhDagZJ6KdCoKgGksHQ3jBboYcaU5B2kAGF",
  "key35": "4XjBCDUevsTXxFLgiEHSG1MyqexNvBbXiVHRs3wsYBpRjzs4eJaHqUxn6SFJLSjp7UFYg47RY2wWxGbfR8Jsx9L8",
  "key36": "5764BapE6yakJ1tLVwMdL3iG69MaCwBBsU5TGd8qiQ4zZYAp8VCe28CWw3NQff92fQAt6UwyjFS8aGfLsDSaXQyq",
  "key37": "39i7i4vrBCiFSbGUxtCw3Q1dPCgFggMjQFp1TT944kyb2evRJAjkKweoWn2n4tYuVnPzZmTHLyAZMw9DqQievPkb",
  "key38": "5itbuaduC3K9HZ8WkPfRB5v7NAkjQPHY4kRPqbpBn8y2r5HwWKuJYwBMPCcf3pcvYNzk5J5tXCnLJhw7GVKDbnZk",
  "key39": "U8m3ZLFmCSzbBKngvhNLE4vVNgJm4SfymBDT3yqWy7SFKs7Z77GkDeiCyz7kaRupAqXR4hzSWpLzj1QDepjYx5N",
  "key40": "gXPVMUBRLife9NNZ171DAAfxq7Qb5fvifpo41FeUwxrH7sqPv9TEc5aVr5Nsc1ZnUYrFbq6eSjSCpNhq8RskoJi",
  "key41": "67QJYtdGKKhyXETJUnQgTs1RRBzZhNWGzGmJHtZUUqm4tTz2UkJ565iFNcDEiAkx7fs5j3Ws6vYv3KPoTL5jHo6o",
  "key42": "ZRKN1XUa3rE8MDySLVWXsXHAhBNbikkj2qu3J9fhvF84vuXBoT3RfaAiYWVfpBZj7q3ZP4zaapAUpzNHGjVCjZy",
  "key43": "4yCCqyCk4W9x7sjgz3UU1SFxmmm7X7X7bFyzk2tDDHdiEV6wjeujS6kdgRH5d8ReDf1q9JnmRQyMD9GY7be9vzSb",
  "key44": "5KbpQ5hS3kG7s6CEBCRUCkUU5hDKhDDVBLDdTHrVh1jgLRPiySJt6iVKuM1WCkXx5iAT5WUhZvyEAPf1sX22xv63"
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
