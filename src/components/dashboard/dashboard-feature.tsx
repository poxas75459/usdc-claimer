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
    "5mHZy1tLCnm22gkAtmTb72RtkBGo822oxMaCGAMYZxB7wj9UTp9Xuja9hmqdxh13zBM5uNPJismqo6nzSn5xn9tA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31oMZ91RhuwXkhbeb7Q8VnBGbSQMFLjtjod4o3uQJ6MWyz1pyLr9MMNQce4chYM288pGmFurife3R8LHMvucqkg3",
  "key1": "FPkj2ho7Vt4CidrFcDfapVUWvcoSiUPCFUkXr2jktuup4yjKxrPN6ykYxQDpaVALniBL9MVWdLC8tSHPmzcF3QE",
  "key2": "3iisCJhVP88iw2DggT8BTX6otJXoPLU1yj2FA7pypyBGK8y2Gw4EXpL96QmnNucRc4CNupUV9gV1EfE93XaCsg64",
  "key3": "AhFFMPoStm1uTkUrdjoaWS3TChq2w1urbxKkN6UxeXxysFXGzuAqiTrTzUNdiWgGj9oMnVG9FPDeySu2t9Uhu7D",
  "key4": "5Hxt1fBzFZFav9yhusFDjDiWZRDytyrvhKxry7jFpBk9LUkDy8P3UDURMz3ntH6yjfCQWBC6cAyCwmZMq7VMeJmz",
  "key5": "5PcBvMiKhmsRP61gF238mh6JfpoYMnu2DMp9oxYp9Vr4E93tHEYmM9trxCMJLG3PeWFYEfBrwA6HqUZNArGPEXLY",
  "key6": "hQfNCs3yKxZ3pEgXFZEy96iSf45Z1gBuhnA85bykw4Wo9K55NcL3wkX2bGT5o6wVvAqZx3Z5kXkX9YKYvZ92Av6",
  "key7": "3gHWr8VUVGvkhdopVijSRkbwMfh36erWjXS5XWNTfJnvyBEy8EVH5j8mWMEogs15JnCZkcE6ivnPWDpV4ZJ7zNYQ",
  "key8": "57hnco4btc8g7xSnoXb4agBvsKGBWbMS5hbUMbkmu7emc1pzqDGm7TF4ddEJfobhFsRac1t2JS15cbbVKAkYQxmR",
  "key9": "3ZYrvxRmyiWTrR64dJxgBZaiouYpiWKCbpTJunSj27dWZVZB3uy3FYbrLukspU6p6fq98c6BigLj7PUKYMNLuWWY",
  "key10": "2BCinPNVAG3XbAborgUdiF7147LDdW41icKGeSYnZ8fTtp6hPJoKDH5HPzCKtvCYEfSkX7ZZnt3GYGxNG6ntPxmn",
  "key11": "o5aMTefAKcX2rKunrsGcMsr32G7iHtjbLjurEiMH5Jkc29TG9yWFAqQKSyFvMCjz6bcs1brm5nLCaBbLVqacqYh",
  "key12": "54iiZgWfFfkukteSAWvF764ZnQAhg8oZBoHRpBtU8z1orW4zToZ5b2xy3zYWCfAjg7iDWyHUZdf1JCGW9V2h7qdS",
  "key13": "4SPfhibvWQJVxgQqejU8LwZM8ZXGbS53bAYAT8HjsYoM2ro8cL6aUqxcQ6tQyu5ErQYaGYutkq194ukND2xRWV9W",
  "key14": "jVLxcnxKApemgtdNVvJfYkDBdAabsYZCcahsVqSB9fXED86hhZSqXvCHvtKARY7wp1My9B5dm43LmPVw2dQgnPF",
  "key15": "2Zk6TsL3ac8HwkYf3CEuv3MDag8FFrvniCGoqUXGURxYqJpzghH1yU7GYKPwfMLFRwsWVAsZjJKhwDtXcZzcvzdH",
  "key16": "3EzZWsKBLGRWqmVkfPa4jsAa7sg9xApuuo5nEWQyqEtqHDusCEfcSEVk1u3kjefTYRXhqeQQ3vXavhqDWECeRGW",
  "key17": "5q3ttLA85wa8Y2UwkhXVc97eKAWy4QM2ubHxaDywzZKqesim8Zc6wr8CYFm7Jekphj3n13BWjwU1c9iKPiNu7vKV",
  "key18": "21nvmbi3JUEpVVp8QWkABA349AW9ztacwVGxLDfGKYda22JoS6ckR7QBdPqfThmKYJwjgCNvNhrMkbKAts1AdRkE",
  "key19": "pbgZiojmwUe1dDr9ukVu8TVHpbtPftM2WEpPErn9sFYLygtrepVjtQqZ6ZRFru95RsiqxSzzcSVwjawriDixUkR",
  "key20": "2wBXKbtw1pknP3mzeb7NLXFRoPLx3dQGGaWC8SUAQRbT3Pr66SMjBJPLnqEDgagRXc25xUTu4UF9jGN8zrt9uBuY",
  "key21": "3Gv62rUVvMd5h53BKD72Zf1vzahTTk9X2sWbdor16RxHm7LW5Ty5vRHsvjsbvXis5jwUKGUwro6gnMuWdAqpqHbE",
  "key22": "28bi2xEY2n7wZpqd5whMnyV7GALYHSikxCEWRXauTLPsxieQqzjDzsKuetVdZiJ2pXSVMrzbpfNuzTzbK3D6CBYs",
  "key23": "42kpkiyZQRqk7gcxVBZuhqxqnNnuDtSdVF4zJEKMAGAMYknASXqCxAnALgYzErLSNDAS5LnqaGToaVu3ajoNvHum",
  "key24": "fSXo65DozC3rnbX9DJCiUdaDZiA4e6crRNmsSJ7TpfckbEutLUvSLaPmnwTWU3Jk7gm9AceuA12Ro7y8nKvDtz9",
  "key25": "4EhFVftKkK6CSjZFGiNq1732oQzmL5YAXycJzg8yCkQjZmEdn6adtDqhoYh4kfpeYvC6MEuidEb3K4bsZhGKJz7p",
  "key26": "2fa1apmGYG4UXeuKfuEbwCCMXDD6kTDcSpzR6m1Zc6pNma5mRTeURGXugUAZUvazstAZzpTLFFYxBwZMSPL72E79",
  "key27": "3JCEeT6NVBexPkyXpQWX3pBLwvS2RJynDU2jLryybNUrn2C5fVBamnZ6FgMnYeKdYE2cpAj8do7ZfZMfZY4e3PE7",
  "key28": "5iRe29yWS2Wh7BYkFu7R12uxYYks2muC4X5jiyXSfLupeX844iGNbDXgVMnX8NN3fbrAqgWsxrhbT32py5fvkji8",
  "key29": "cAopdqMhrsEUkdA3DejF4GKn4PgJAx5aRDHtMerN79GukULFbXEcEFNXD3oX8SLtpDxcwGuRgPQkZEKghPmMhrp",
  "key30": "Ct835vHZpDV28wKXj18eBKLKWrCUYsMQGANzPjRhaiMrKjy67w9Pk57rSKLHNpFoQnVQo2bNAVWvPYcKRTBrC6M",
  "key31": "32rDd9uzkKvBrcpNy4yNykbY3qDTTyu2bQC6TufgvBqD36nGFnZA4L6tXDx4n9fSa3HifmvUNsdJzKd42osquuiu",
  "key32": "4t3nA4Du2CyKWppBouwD7xT4Widh4Gig84LPVAkDxr2jorjkKMjb2QurRNhkGtMKYHAVxCoHuyvBCc2Q8A2JfQzE",
  "key33": "4pmtT4yVp3vd5o6QFjgmWwfRBu1vG3HKNiXvCezUtRG5ooWGkKxbzBZNtraV9JNi44erq5oj9xameMtWuuqpXUwZ",
  "key34": "38cZqErSHiPd3qHeffNk25fiUUxR8mC1yQGNbPrxooHTWgEYgSn7B2DsTQM1byHTHreEptuWx7s4CgF9V84p2tgJ",
  "key35": "54YMQYNvwpM8NNrUNebiYae5pHmZeN6YxCCjR7SLM2vuj3v2UzoNbsrZSM4UcACtFGJkvxRvSzw6eDXLiwn8TAQm"
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
