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
    "2bqrojryfPGahpxtuyGfLsyA5KwJb7BvUD7Djb8jAkwbjD3hd2LvNkMVUYDPUozjiN3hmHnLY3pijHyAsXPjCA9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "363ywzJYogCmfcu2Zez6RqkvxrtkHPXLLAK3aN2fzQgvLn7cCGicYAgDLdUAnvcm6UivfHQevhRVzMpXX3eecpiF",
  "key1": "3w4oTaXnRY9tfARxDRBMCvq2DypyLaqL5vfPw6B96z7cMqVSMx4xvs7WVrTn3mrSRhU47zH7XLrWxTCVVWamQLkt",
  "key2": "3dvYkLGiPvwuVF2nZx4EFLzovpzkZZPwXBWyooL7YQxJVZPkzvr7K1XVHWxHEK9ztttLoCsEdRqWpFMSBHJEcPpv",
  "key3": "3cPZYPge2AbyJhr1U5AuR137eNKamLRSq8zctwdvMiyPrPStmzwWUzasp5wCEaXZuQx9hsk6WkkTobndVRzhufWF",
  "key4": "5ZBnD94enKDK3LNrGuSXDZwAvEy7xzMU93N7YeydEUr5MyisUs8cTasCqWXdH4o6a4bCmFWhNUj64ZyqJWLgJPrb",
  "key5": "5UVJHX89MFtiNjPPzfQHvWMv6G8q7mx5gqsPdQz1kiwPNJP9mimn13Rzj7kyhJuAqfnyPykGfrprfCGcE4Ecj6ZQ",
  "key6": "aRSABuZHPHyJ2DbcMCk2Y8Sm7R1jbT7WhR4iryRruN2xR891TmdqfM9XmeNnbKyobib9HdiYtdVPziUAF1ifQe2",
  "key7": "5F6jh7Hba2PgcXeY8Da3ZwPr57TjcBU4gcJpeMoD7kesN7RVBDmQAwQoG2J454DigmthWeVqYkS64fdrkAAYjfsn",
  "key8": "Go1U9oqmmVGFDZJFetdZZs1GroktVvctSnwFCtRtRJb4Vvo1Mot47v9D8SBhMDf8Jr3wFHUoNK4gDCDGKADK5ny",
  "key9": "2w3E6zwkjtp6MQ4SBwKCuL2tBXuAEPrVFAGvjaxnHeCH6NTBrKf42sEwuWXDJR86sKuffdxYVetq9gpNqSz1QLyF",
  "key10": "5wwyUzj58yXui5Lqu2Cjq2fiJ2h6C6CKdBT4TmufNgA46qjkwPemVd8R6KhV9nki5JP8eRNhbhXWCd6zdGABxmcy",
  "key11": "tDeR9inVUTonhE5ffewdn6oHtQHpmaeGcqMivNCkw6BCGpRW9L4QpT4BE4ifdtFFqQCnXPvUBkmk2JXkRGRS31k",
  "key12": "36Gm2hd64jU8Hq1CY6nU5Aw9qcjXuSxXkZdKKieAsKx5HorK1yyuMhi1Le5YdjsemiBhtDxFfneKGrRHXoYDR6SP",
  "key13": "4EFHw53kfgSQUT4o8K2nQtv6rhL67bNJ15v9Ds1LB7sJxFQViuk8mgfuWvVU192gbj7K46SgMN1a1muru3jUpHgE",
  "key14": "3FYy2Fr16wCmMBQnF1F4Vy1JhUDq7zhWtvbHarrLeurzF7Jk9aB64z2Vc1KSsZExLHvxwwCaqNQz5qbUU8ugEQUV",
  "key15": "2UXYnkeKw9qx5qtjfYd35fehjGpYwTd74v77Y3aGv6X4eFDyNgnGWZ1QsmfLmfAgdZ7DGe118GWEpdNqiBMZonDt",
  "key16": "21HCmULtDKksNxC1acC5MvWNCarui5ve1ELwf9PqBvxnKMt3xQH71xzdct8wMW4wYZXpWYayv2fFquX6p5Ckmb8F",
  "key17": "wUmpHqnpsenpVrCBVJLDBtSSvMuQwL9qZpdGpV8Sd1Py2VGq9xMMB28f21bEGHmDb96XEkBtJQ96XQWvQGBzygT",
  "key18": "NXWSjPmPEstKNY3mNGwh7a1CSs33wKW9NqxWkRGateW8iAScewp9rP6yLQN7KNAdYUyV1ZAyBZYejBxvgARfhZG",
  "key19": "zCKgFVrUzFViQZmfiEF5rtBkhxMowhyCzhXMmxXsLvxq12PqtC13gwfXJSm7ZTQYVf8jCE1sf5mtnLVXkGCDmHd",
  "key20": "RTx8aXacyDdWmEsojQNmJn9sBLviWBt9Rp6Sw6EmeDCGobAPKug1uBLW3nTt7pm9B9AXMGsbqEG5dtz9d4aDfGt",
  "key21": "3dQfQ6Pw5SVzieHNxsiK3cH3hJx2AdKhtjdXf8a2mLBoxPXB89pTH12pjCjT3L9SvzDb961tRURWgKnhWE5EzHod",
  "key22": "xfYaWXuoyczVasA3YMBAJswJDUsNVy4or9i3Lk6nSLj94EwqE5DV9F55nmgXsRGS6RgwrhcsKJYJK2dUMhJPE1e",
  "key23": "5NuGzK87NvZ3k1vrWeQ93TrZ9xm9sPCXUbhVnFznpdiHPQ5fhbKpU18ksWTddTCvEdZJ2yv563hghzgGk5UfL6Tx",
  "key24": "3PTAy6EYf3rw4EpVFWZxeWSEtoffQzxFHKkwgtaYNC7RA3XULHxkDsasTCu9pbmGurwqB5MUM9c2MvvoxsRa7jnX",
  "key25": "spudiXRpv15bXVKgoG8z9oWo1YKdxKQX2ydV9aDReTJUGCeuNxg95M1jtEkQvMcbRBUgXMa1W6goEgFooWKyQ3c",
  "key26": "3yXntQyh2u8mMhA5VPaiXqZ2JpUeSNzW7dxD1mf6h25xfyHB25tAhBKXKeTJZsQa2Y8jv5qCr4BrJSia1ZePXeDg",
  "key27": "5J2QxXbnk9EQZP8FySM4NDmYLyZqau5eP72UPCmadkyD1RcReoAKYeQuWhU8e92sBSNp2nJT9jzyBwKiV7ogGea8",
  "key28": "33a6F9TdwsC3mHWUpjbSgGtsFuZXgAfnth8dFph2aP7gVAzDaDpBaxwyvoL7eExdFrehEVbo26nSB4wHaK52E4iK",
  "key29": "2dv68fdNSd6mppKdR1d5Kr8jTDb1u5Twz3zUxMyLfzboskfyxTAywxwDyxPFtLXqvrZ91Co6PDezaL8qfDcubdXh",
  "key30": "574ysixdyH1GbzJjqayuZLLA7VGqFZ7VzK9gpv8hvbwn6HPjtsDoynkCGNKDc5K4cp19xWpCQFiyUaYnKbZuCQtM",
  "key31": "3PdztsKhDB11K8tRt75HkdDnubiP1jgnhxKc45YuK1oTZzQkk2NgAHywEh3ZarHnvPqPiiGVkC2Ft5jWTcDWaKUD",
  "key32": "4KGWQa1mWqYrHKRh7QmmnwZAg2RSz3F2sSsM5r4c3HnpRd9NW7NamQ3SUNKUjSAQN1pdZS6s99Je6HRBLnY7dVqd",
  "key33": "4sLt1athkQZaGBaSFUUHhCS3HPFqB1eceFGYmYS4gRqYAhaaoJAE6NPV8zTjoAp2FM1JKgBGGvE86tjiRMpZhhxZ",
  "key34": "77HThP1rVZ6kftRNLPzKLmwo3h1xi418HPWy2ifUpiup6wJcw7BLw65DRiTgWrXAhnk58hsjzSSgYvLk4dT5pab",
  "key35": "3AJnhMBbnVwUfV5czhjN4yvyEnHqGRSfCF1EK3PnWFKTUBFEKfRnR5bsnqPx4FWzJkFumRt8uccq28336RTH6hEb",
  "key36": "63bU7R5Krf7kexPnZFQuryd9vadDX9aM3Mm6PSm5j4NUEhoCdkHHHgo9jo74Fbf12jkvT3gDmxd24Szq5W7x4f3h",
  "key37": "5ieWPoc1DwWdgBudWSDvHa4tV73oDwZTzSnzBJeQda4WgkpzF8rrUqW6pFcU48z3QGSaSC6hMxmKu9VPaZ3o4Aiy",
  "key38": "u6WxxJaAX52ScPctDqicoGGYUVpWXu3Xb5PNCESA2tQX63YYhTj7FKm67peQQPvCQ8jcY8VKFicbeKhcTUK79jm"
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
