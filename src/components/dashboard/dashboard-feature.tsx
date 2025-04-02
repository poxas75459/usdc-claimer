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
    "5onayFDewXoaJpknfZf7XwrTYsXntzxUKZtWdGrJqbyQBqRsep8wKuCha9YpUDrwYSr51dfAVSvW2ygUjZbGFbrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V8B8g9iiek9NXexVZ7ByX11FYoSUBAa4bUmdMP31Se8T8HcGay8m56pwmiA6GgNJTMiisdsTxwByH2Gi5RghhhC",
  "key1": "5jiQxkvFhe61AfsUjyjBvuBCyY1uEWdzSVZA3TTQFeVRuA8KXe8eqpQ3kDDmYHwtx11mnfr6gTNL6vaHcD9fG2m1",
  "key2": "39SRaptEBBs56cgKTUFUs3Uap4ZmctLmbbFjyFmEftZFMQ313yELDcktP3rw9DWTbj5qUeMESZcfYjNBsLeHa7Ld",
  "key3": "4NFLjAoX4WbBian2PMxiRfFPRMk3Q8brtascLSqAaqhZrJ6FYQmtssHCbdY82HFWGMy5eHG67cyrspYABeed5DMU",
  "key4": "63znBnzKixBrNKiixkb5iWVfoEJwWGzUmHB74tyoWKHvtgS87Hfd8ELyMsyupgC6mG315PszCGEd1U1vTrCPTrRM",
  "key5": "5TnghnvMzaeB1WixUgBwkgo1kgWUyFtCn6pqUsGLrWkA8VhZ5wjZ8W4xqvLmcrh1ye2TkG2F6wG8i9VFev7sggif",
  "key6": "2JiFT6H5BHyp6NT2FnqYSuQAXSa2hUyNk5YLu4fmD9BjET9PKRD3FCJNX71wAhgJEXYHaBEwCLgH9uEnqxAbZ61o",
  "key7": "534sSNdY4q1GP7EAPW5ePfgyTL21QMJ3vSbUnCATK832vmRpEy3ps5u4SeMJ3VUfjFqhCWRLzqWyAhz9czGBq6ZF",
  "key8": "3V3A4UAY7Ki6Gu2KK2SL7evPFGAisBYmiErVDWiJvw1bHAWxqXJyWZ2BQG4cFg2KBrnjhypY9XctfL4KDTo9CLt",
  "key9": "He4CS3vEv5xwESRhVvwiap7UtwTiPxyvXzjP7LH81hahAb4RpDwaDUJhJT7MX5NAZGzFaufaA1jufwhpHZsiLeg",
  "key10": "6ceh9n6PhGRc6kSeXmbZJXdgqtbufSbE8zLavNu13sYbkh92Zq3XJHBxhp8zRHUQqGJqTetbWpurHG9LLXvgKw9",
  "key11": "2vQLiNrPkusfkeXTDsD4HApgWdAYGvPgeRpnsMcT6RzSDWPX4L9ycb2GMqshPoqqxExkuBmHujgxYBAo1rC1iUiP",
  "key12": "2tYUUSkiAFy6xonVQVmfsSgmYgpk1Cz1gp8W8CVHKWUNid4jR3i89qgWiSMotQ1KsFnwXp7Hj1nyTr2KYFxQsV2q",
  "key13": "LFJ7DRsGZsU79r1Rg8L9kbG1GnA6zArdsiCTne33mq2WkJ3iZAhrp7rCiSyEHr1Rgg3mwQJZd8BAsBzBrTGL7RB",
  "key14": "66TfK21R7MWCSwAcr5BoQEqAuGy25GJY2rhuyteiAvEPHDXfScioqiRrKeviHejXNcWKyzNQwNTBmXn7LUFooCA",
  "key15": "438eEZ755jqBvZcEGBiJM4JsxGdhka658Uwbx7ggPqQXxPNcRZT2vSetGWz2nYELgzBNmkQnY8651aEmenruFKRn",
  "key16": "3qsJRsnFnAuFs8p6cZaCp6J6kg6T7StQ5TvYqAww1wruWc5CDUn9GeRUSYgH6HekowKoesWPYMkhWHJXvT3rBjdT",
  "key17": "2adsnzkPPD9uUEh5ifVwW9FQPY4uYPQGJpxGnedWLFYn1LeqvtfrZQwejvvP9xN8ZUGTNaDsRXNBeoYriaPKhFi4",
  "key18": "3bSfVtSCed6epy88vKiNrCmeKjNqj3ecdwXHjhzWjqBCQsccVesnHX9KTTQJdtaaAhxF1yJmtjdiz1ikYQPPcRNP",
  "key19": "58y1wwZxorw3PkahmeuY59eDBGgQXVkzz4cgdrkJkgbpgbEtRyNy7Lx6Ui8z7qQq2wtT7UabQrxDVYHjZuRxJ6yf",
  "key20": "5QpWfzBqWxZrMunPWCmwx3n2ruzy3HbxUY7awvfEgw2cAvDYtDWwhD5ZEMRhAE3JaECDotu1vERP8GK5NzT1iwiv",
  "key21": "5Pi31774xUZ254rpYeTLZPk5GBLcrG2Zj8dwJmrqCpAuopmex4muiDTqRixwSTMSCGQ8pHfQTis7xJVwEJyjVrx1",
  "key22": "3DsjB5WSdcHPeUKinUKqpxsUoVqEuWvaJp1b5uHNRLhSvfJxV4rHGmkrNaVbE3GAxmgfUECdHFGXBw7sRqf4rVj1",
  "key23": "3jbxoEU4bTbMCVyQWXjGvsdCedaetztMB6CoEJCvsJokg42gHAGiPcKh3NX8bzMDbTed6vrVPpYDNzzFsLcvMtip",
  "key24": "4vygSBhks8fyGPdMUKB5MAtC9TTs64GCw7gykNB6Ujp9yW1ubnnDu2ePtVtsyvbYHs3qBvVLHm5MAwhdvL8L4tjo",
  "key25": "43mjxeEr1DJKxqCQZS1PnwLfBU3SKxohPJeuxtY6REHWATn2Rm4DeGvBEvbLZGk53uu6TcNQfkDj1xty8z5o59cn",
  "key26": "4EppNQuZJZVJ8UcN6jNTjoe9WJhnCFBLkbwyFPzTd66sb7CVjcCjatvr6jrf51XmJvL5rLW3ykCjzMK1y9kUaCsJ",
  "key27": "2VVTsoyGYKyZEYvMRNHwMJCGDMFis31pyRzDhcSx7189eD7vFRzDyV5xg8Au8QJigmt6e53DpgLoawL5hMKUA41A",
  "key28": "hkr7gyctLCnpEpTaAfbjfmSWyDQLr7J3ZTpi5auH7p4aTPSEj7SQpW1oJw1wvS3SfsMTmbWBRBPm1M2nKcXhoJc",
  "key29": "3mRdZGNtErNdhxcxPgFCn3Z3XCVf9R1nTTsqNeRrVMo1RZLSfkqPi8VrWphieBPQTBt9Agccj4GtECmarCct6GFo",
  "key30": "65jPr8LcghuvbnBEqQwMk2sjA4uKLEk6yCvmNav7UAut7RaL8ce2FnciJFx5Baar3qXWfMjcGx2f5HshsYmN97EM",
  "key31": "4N2oZsR29bx6ZfSAXnJSn4XDYZUFBj5eYHi9k5JoVXD5QWJox8JL1P2BE23ocoCDVrcyNzxHfiGD21b2bK52SK8",
  "key32": "2WYocDyAxdnZjHj4WjZrKyooGADsxFejxTJj67zxy3NaiKovJndW9gd7mvS5esPuskFUBZqigBHFA9SU8ibjA4xn",
  "key33": "BCGBzTSfVuKJ2t8sJSsBFp4QsWxQFujhDTcM4o3kn7LikNtH9d1VvGPxixBBZ9MCp6Ab5hGvKBqFmrCJAQXdPkT",
  "key34": "5Zpt7DvKTaMUGGZ32bGvtvLP5VcR3hUip399YkyygyZkAorYaPzmDRFw6n697yRymQsNfGWHYWwkAshPsrG1T6Ge",
  "key35": "5zKvdRHibFhhxkVBA7piBJ4q8VNHbUf1c5B85LokNxFr3qp3oJu733cgEPq2HyvH97MM7AR4yCFoJiufGqYap87g",
  "key36": "31KpdVYnmVW3mQ2fmXU15ZrFyHugBmHm8SD5bWZSR8MVUxfcJDr4Y5ApAVeu9ekjfzCABPJa1xBeL3bJA4ayi27L",
  "key37": "5B5jFaS1ghhLodgeSdwrgum3zw6vB2ikXruAAfgZkkWcJB1iTbe9V3RgfcGcMXM3g4hvPY2kA5DLDDLmvuWF7snc"
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
