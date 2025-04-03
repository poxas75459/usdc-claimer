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
    "3p9TN6SnKZYfSmhsRnzLNHpfTSTX1neX3THSyUa8d1LmShHbNTvroQtC9z2ndCiMhb5PVTPfU7jc6LMFeKwYm9aH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uo1x4DF6pe8CzS9yMr5LzDciCUznLfJDjdfx5PAbqtxPzjwno4J1ag62D7ya88gqpZMhJ5fx22WQLm6BVzNJxCk",
  "key1": "4iKqr2ZiHtZyqjLtZHP8y2iCee4HHP2AVGXrTGTNAdjPcJZFXfopw2pRvc9ukF6YjC1bcxT5cePTzeCrcyAvompu",
  "key2": "hidiYGAhqafHhhZFVrXT9VBiAzojtP1G2NzjZdRaCacn7uvzYsPvTXW5hhJmgGhXH5iA7qDAnZ8Jb2L9bgBqAyb",
  "key3": "jxN3kzPcMfZLh4rb5FC3CZ84JLinfSr7gs9VQFwbDAL6BU9zmDwJvmkaW1d2dMHZyUy1WMQsaLnJXf8b2WAjbYU",
  "key4": "362bi8tas9hHr4Y5J1EbzuT4eYP4re274wJQTwdkoAGpHh1DEActYot4T68YfMxmjPmSHW7nPRYXYqghs1CtcHtm",
  "key5": "5Wa9dF6nDwb4tfTJy2nVQSQShjHoeUHX3deqWZsZTJ5wQtsBjQcgGnSepjEoMssMXay3MMiMKk95QodVPGFiYhVH",
  "key6": "3ryPB4R84bGRe7cmXjm7or1nKVxR9ensc7bAwYFGyG36hhLKsCUuB8xpBHxpp48wTUgVbwVQngBpQQw7C7xRG3Jo",
  "key7": "4uRH3UJGVumsy9dqzxs6fS1QPh1ifPBRzDaifTFBJ7JJLgmNta7eKhAQuAtacokSabZrAhMfJJBnSTHEGRz7U28i",
  "key8": "2pT1XmQvnd7QgpFbYt4QBXu6yhJC6cXnANMPaBXJoTM3vm9wygo5ofUST53czmJMAikJcnfGDoFyrWe8gS5C3xq5",
  "key9": "4fiZqLDEkn9srYuZ9F9e88aNdnCusr3Adp2oJTSounGWoqN36kH3BAWSg3PtypNrPFGgCpaDiqfvktJCg8F9snoA",
  "key10": "3DZXhez4rFkJXqwQXEK7kJGpXf8UCvzPsBWTPzXmMJurhKeVyKkUjqW5TJ3zdt4dJto8v6SAAAbpo1T6Vufc6jGa",
  "key11": "Sse5y94zp8Y9DsZ2Bu2ybGsupuDiwWtBpdfLo1JCFWqu3jWd6YF2VfY7uMF19ev8uBVSXiDQmCzbVBCBcxhjn2j",
  "key12": "Gb3DMjBRmPRqGoicFXLmgaH8W1KGGyULP2CK4HjAF7B3B7STZJjrzFmAwuGza5yNiNnQBRo3vzUfpAzgqJP9FxM",
  "key13": "4ApTheSFPvhpH5YPYqNBnmGzZp3nogVeYV4qQEVHPKsPYKprQmGYKi6x5tXU61EnYJN6Q9tQKimvimAv6qercKAw",
  "key14": "5ZwyANpb4Y46GPcFgwMQo6oKZShvQnfL6KQ32XWvcZ8WMeSWYMiKB56cQahnbD8WM8Mi6skcZLoyfddpUCe5YG1J",
  "key15": "3LF5FDp8iQFByQ1bPA3dJ2Ln4LM6uo84AfCLZQBJf4a1NAdCa6aNRNCMgX6PH5tDpBBpo9Sd4DwHG8yMTQZ8Btqu",
  "key16": "3s9n7FeHXpPen7eBCDsiTM4XhAMad5PJbpLyUZBT5NR5XHa5Fsnqs7xR43U7VeJBRqL5Qazx8vSqTvw1LgUSBNHK",
  "key17": "WxjZkBQGKeYqZ59pUSNhqGXeeKh3vmgiRZ9HsJmEn3png6rw61jRSDsUPXKbggfzPdH9efaLTXP9t5B6v6uHAyc",
  "key18": "561v2n8d5Tzw19MLfQcZUE3W4nVwLSKgDxRJVaLUhkVzG3pb5JH8oEhvmW7ig46jMLkX3ytYtNq1V2zk4cedeXbp",
  "key19": "4FFYa2LXKs7FKqLccvVvbJw1CEU5ARsPna3gdQmKxNrbWtjnTqRKR1cNjBHgh4AeGBoyvKnpjRFoLU1NkAhPmxtu",
  "key20": "35pL48nPoNiybCdULnowJ8pZtWGFnUpWsyh7qLWHgucLXPDR1DTseQzibgKUfsrUfUcN5SvVeUqzfb3X482DFp9L",
  "key21": "2FpqQCeLziEaGqwe6HuZEVzkFeh28CNuTt6cNrytZNUwwFgkErTU7HYCXVf8upMgiM7Aum2EFNcPGxRupciSR3Wt",
  "key22": "26wQVFSZ685y9D7NUTE6LLpKdn1mgkBEfnPKFHq5Hhy6ZXjzSCiUrX6aA1bcpayoAJsJX6yQ8EHJc199P9mVtXBU",
  "key23": "2xn6nj3MABA4GaYg5YuNpcazfgpRZRuiqcnUhXEmVWK2BSDBXuJe11KojGVCSjoAipRNVr4NvuDS4DemNtqxC2v8",
  "key24": "sq58ZnDNv3RAASENQPB1hoWpx1uXDu4bjc1KcFwEKaFJzi9cqh4amXjyWnkSTXKcWzLQ6kT73op2Y9HXiASwg8q",
  "key25": "2qCRBNTknuXaeEitHmv1scpmp6kXMCHYFbhUYfjACQQazPinsGoVt2ASYzoPhpejCe44KvV79JeuNMhfKUvCHLc1",
  "key26": "5zRQyrPdJHQ7idqtbqaVHNftPHUFJfPvcj2Ev6inQXPHd6aBGDEGFVSGNjdo7KxJxhtXQ7c9DRao7tqGYhHeaKFZ",
  "key27": "4QL4iS3gonLitnc8VohJxkwwHQoz6xGu95aFiKQ1vkUCECNQktXyoXq5mA5LNahFti4thN45Jy8wCcXspRRkxyYS",
  "key28": "3V9bAL9NRgwQKcEvYFEne6zuvib8DNz34oK5JS4dXqh4JVHyTabvgUpna5jRqrJpD59bn1VCCnU7uXucERfJnSQz",
  "key29": "3kbYX3itAA56pmUtE9jUpngH8u5GEHA6Ed5W47GBwJJj3cRPHuRzqv98V5z4mNqf1rdEK2urxTaESL5VLXEWCedC",
  "key30": "5m9fggHVktNRme2n2rPpnu7iigJdnfpxztzkeUqhSNitxgLpRUiDvgmnEvwtqUfAAsrKuu4CtK7AvkhQizdDSS9T",
  "key31": "63fL8Yty2Lih1kxeuvnjGZ2iLSKFDtW1KyMFcNVxu8f9wCWNrzwBfZvcRHkfs1ohW85ccs87uiffp8yzccM38bvW",
  "key32": "21AMHi5jbz6Ad5xSy2zmfrdZFFVa1rgcRf7vAHsuRinJEMjDSjmD1A8K3rKhNjF2Db1JaTGocHSp7A1rBrkDpD7w",
  "key33": "5dg6q7PdysZpnRFwDBkiRDe5HoVB2LR6jpAx1MTDPkDoWNrBJtpFsYFT2p3qx56zJHm9C4eeJ89LmfQhtApyCXjN",
  "key34": "5tLL8RZPim9tMwQL1hgq6wPgqqGqtwL2frMTnUuGCTBP5G3MrphTh1TjPavLpDSG7KoX3P4AWpshAWpt9nUhgxtE",
  "key35": "3iBTpse3q92c3XmUcav7PeHfnwwge8BDwxVNdZ9pekSVr7YtgHsRpXen3SQHPboypE8yUXHSxKUKEeDXS89hTFQq",
  "key36": "65g1ZK1MVLYaAmTuiVHcqvGtP5aKHzUzbdRbse73Gd8oDDt2RXrU7MmAji7fdgwhUHg7M57AYar8GqHigb4xdfAU",
  "key37": "i7MKSiUGh1zgb35vquA5zQ4P3Lycaseeqv9469355K7h8Kb6w9ZPS6TXGjUB1RNGgKmM7ZhAHrPXbxyVcgKy2su",
  "key38": "52Xx8T7ywvCekiqW8fpkznhpLtELwruRc6yEpSSq4VBHSUk1e71ehqGWbsdpDgPcNnQubhiAyQbfaw2byFwJNDjL",
  "key39": "47GLUjhDETqM7cEY4JfvdqsSqw9r9Z5cHaWdfpHp1vaWUKdQU2dXrWPSKMFVhbD5v4aVUXTZgvQNfvxa3FSj6NoR",
  "key40": "psXhz4TZg7gWA8agRQhNUf92RpZWQU7gyj7h5U1AvW4SWxUMMaw1n5jCZZ1smavBD5hpb7bm8SMyKecJxRDf9Nb",
  "key41": "TyNVnKpY8KQ28oWGSbWjXrK9FmeMHgecuUErfaaGSdkzU1GcAp5stNbgdFYJkKKjRXNZzhPWXDtKnaEhUc3Hc4r",
  "key42": "4LG8Pp8usG3BDsTqhTwM3R92smSLJpwPMw7kvVNfN6kksVxP1MaX6iDVnNxHPMh1KRGENNpKjUChCq3qN1WoV6Ra",
  "key43": "4AM3DvXaZ5jkMAYBee1qWxjJX7tEW6fPgjJjHzhXToF38232r6dLnH596AMhAErCcBGfiCFGDffaMBAtUb8YeWZk",
  "key44": "5umpUZqhfLsahdFU3WJUafLWGujirUQm91YsZSRbKnAQ8g2QwBi8CRzogLAu8inZkSXHo25JFruAZDDDwREwajre"
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
