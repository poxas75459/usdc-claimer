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
    "AJBpohM8yUoRxmsFdwGZ5Jau6FfDQEqQtx7yHM3Few7W1qTW21PsoZctNSRcBtwprGZo35FT41iFmkK4Ay5bPgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sxwwtFqYSB9emXxsWNKhW9HszmdamsnHyY6XSfsYuUq8xw4RnrxzQDn6w5dQd3xCX5foihXUd84meNgskzX7RhC",
  "key1": "4dKNFdZgTxWoKEvEJpjaP5M3HubHUTLsMP4C5L3pbpy9NyqxxkpWGLJ8WPAJKyrNMADyHc1SALQKrCeY5TACwDWZ",
  "key2": "54UvFiv4W8FfqMsw4dBATKfmdd1zQvZm3ujZ6V1mPa9JBrPwCF2USVVXzqTLRK7kiSgWJnph8DZo4dvzbUKJM5C",
  "key3": "5bKC8mS8RmEo9Zz7fy9q4ckYGdd158m2UBe2yg5UEs9dQXt1Mfg6vWJPdmZ97MZGAmnU73mGSaGAnZH9Xu3BjUnV",
  "key4": "3b4C8zVFexkyuRPFNSFtiWPzo9L3adLxseJq2qevqj5x4ENFveyoNpasP9WPiaVJGb4LZwfViT3vW4YjDkUqPPkj",
  "key5": "3nFb86cLrMWpMqm3EXwJehMr9CzRj1kGdueBS4RB5LFC73hdEniE2Rqi1LxWrzgCs1gCQcqDNTFvaHebLY3h7KRd",
  "key6": "2aNFJ1oXrji6uT5aKfKpCF4t4mzKY3kLsUBDB6ox3zZTYFwBXZaVhYQCTtV7dcyRawP33Yw4yambvVN9LHL9wjeg",
  "key7": "2y4PcuBz4SXFttXfLnwm67BEv8kLgBqgmRE8FiR8AFtZVTUCWWKCrKz8Pvie1Qsu2pRmxy3uFPCWt5A7cLdiEvsd",
  "key8": "5URJ5QKNPaoLvX7zYJWhdNrGGAL7pqVSgz2q2PApCKSsuWVthUCjXtttGY2tCZqgHkvR8zmVebiBk7AwWxqKmnv4",
  "key9": "VTtNvPGA488DBmnbmkedyn68wkkwk1YSwThEnBw4JfuTJpY5oGRrwTngmtpqTLdwVMYHJTfptt6h8bF8nFHLi32",
  "key10": "2gKWRFgdPeQMAFhaPbXY2Jo9TXnkCCJCXtwHa3hypPYuDz6mT6PNCWLkQykyZKXuKcGuxBGiayPyjohqyPHHk2nd",
  "key11": "2dQmZaqUysb7XKpdfpmf9c1kBTGKGisjHC7hjFKemRt9RETRAAhD29tuLdNQ67AoQmgAJMknsS4bchG5929U7Kcj",
  "key12": "5NqjBF3XNfdw3uuePaj3G5F5ZbDscGpCqo7wHocyRPNDSienJuCcAWafFUfJGEJidfvfAb5s2N6LjJpf219HKEzg",
  "key13": "5RaAVoxpxyBhaU71d4DprfwjGRJUujsDFGhaoDMfR691LKyYQ6ttTp4W7DcraTmSG9c9k5Bx9G4WnwT9rH3NS9M5",
  "key14": "4b5hWuAC7xiaca5gVrmHbepvshPxcaUvWUFY96edqQRazFPaSF6jGxL7E3CP5HpHurY6o65pUQEdR5XX5tVot8Qi",
  "key15": "L5NaCpFaEafTkzhMvKsktCNRNgXmxyuNqrcWVCoB34H2EdidD9zQ2sgJf7uRuR26oZaav6CBg9PQQN8EswNfC8u",
  "key16": "4PR3JoY4caEiBz9aobqxNVrvW8ebGZYpo3zLBUt5Au5JiC9MZakN5wGFNR5N689LT7o6nK3bXs9UBY57b363i8of",
  "key17": "4xoLcdCqWvQAU5YLJVbXKbrPG6fgkwB9rEoCYYRLJ8KLaruTqq8nR6VLh24HBcAxXRXYWyjCBbjNZXuLrR7ZLKrw",
  "key18": "4gxqcKoCeW8Es5cPuh3ZVr4i8Lm7LfRKuheP4nahKjJpXdiYCvrtzWrh5y2EBeBz4uwED7R5ZTnRtPHVNisMbwV4",
  "key19": "7kkRWuFoBiaSxyGw2LAqWhdbD4FwepStqyAooiyxKdRoTUTx7C1FVT18o6tp6bwniJKq1G2rszLuX71YGW54dkK",
  "key20": "5rCNH9uc2VmoYLa8SuiEQJmzfsxGx6LpeYstvzg6khjdsrpT6QnA44ueRK5FuB7V3G44ye47xAgDUqZaCeeUEjJY",
  "key21": "5mw42EJV9AATn7AgEdQyrQzNuPwdX9xWZ6EfBCsgFmqu6qX1PkPb6QA6PJ2Lp4rmsT6RCLcCbPgXUcNzwVFXFX3q",
  "key22": "52myzVAuyRYccEbRMSWnFABChjDTydXxrrSzP525b4rhKaMJ1SwmbjMeuw7DL8Ntx7nBdWZ14FNqGARBASEuj5qt",
  "key23": "2YnUWpU85D5FAiuqxkqgXx53zMJzwtJ15yFkB1wfUq5WgKFf4uMQE1vttvayK2yj2UbVHFrpwDcT8ypnjtdXLcPn",
  "key24": "KGDmqy6b6XptscmSBTKmf8uX6ybNWSUjBGQRUhXmqzSnWF2FdUirHdyECwFnUaFVVuXRt8rpQPpc8Gr8j2Vo579",
  "key25": "62wscixEF7YMSYc1t1Pmzy4q2qvyUz9k4uqSpkBWeeiegfhVJPzVRWnkbnBBbGmrp24eXWD59vwFRSkSyht2VU9a",
  "key26": "2moW6Cc6hNpZDBXLdSupSMeeCSGz6CP23nFyrCbSDuj2mfBDDeAtSt59H2QLMVB8or68B5oMj8bsJ4EdRPgRpJRT",
  "key27": "4jkPVvpH5LjcUtTCXBFcAh1aQ7Vn95TT1RgtF5dj1Fp3nhhKgyW5HqGwsHBNRbzf2VhZsb2dcjnTEFYktizj4dN6",
  "key28": "3Q8g1LvfSJsbCHT35d9gr4m1weW3nFRNJnqpjUtH71Jy7o6rqeYJhtj78Hn6aKfUpaEy1JgzgWSBGuTavFFJdGPX",
  "key29": "3NqQrssV38n27WTa372XCmczDdVcfM8yNL2wn4VYaz4SRA2QBE9VSrU3Kgq2XT5tuukUd3BsuvZM4emoXejsAEBe",
  "key30": "3rBTRE3sfTTFtGiKKUQGcbpQVv7EEDaVbpKS2HfZY9G7vviLAkmAkBoV8gGS5gHyx7baLX71NDDNPJN8te1tsixk",
  "key31": "63Nq6t3wxcSps79ZykaWDxwCVJXhQBQA6pAQMU5fE3v9kKEFGsEjRH5LDFQ2CrjdbdEYFpebAJSFvKEP81zYXpbc",
  "key32": "5An9LKj95sfUrvqKqBAfM6icstZEPZdME5BK3yWcX7ixDSfGxJPE7ospjJokXqQY5SxNtKdKgxtrGtPBc47HkDQD",
  "key33": "2yf2YvfrXyco2Z4SzGLuJ3EEETPw4W68evPs3QTy45F9wQ9thJzDDkd1gMUDzme8FRHcRsrLfADFYhwHwuFUmxDf",
  "key34": "37j5h8dpgz9mRLfMjxrNd6VUtVkdwLwFPJXrPf2YYkMt2pGJkpukZTd7uQo9VWCig7GTpWXQGpdKEvvKX3muvuWX",
  "key35": "4971i72AgBLkAi54kJLKNpd2NXD7yPmj7SqsoFv8AesfKjECb5E2xBs5gs6HEmMv7tG7KTf5gtRMQquvfQCuNS6b",
  "key36": "2w5MkmbUFjDaDg4RDyvVzWUwP3sVrE2dkXoTMWZA2dXwo8dxXMsbkKnWYWZSqUP38QsConJYnpeYuNfu2FoSnxLu",
  "key37": "29bMxAz5yWXAzXcsm1yX2GajcXbSKH7YEczDDrCYbYEF8fsB7n4gYznm8W8VnnViadSJio3cNAWHwwQcYRUEkDeV",
  "key38": "3aYhfVp2f3XS4dpW4KiYY2UGXTuhuuKniP9mG3SyVmyxxtAQ1dRbqNnALG6m1dXMB6i6UepQsWMasKdzV2vn4Rpf",
  "key39": "5KqfhZfFknVVhowkLmzWQ8Xc6KHYy2aC9pZZaXqfNxPsimTAgMdTAoxmSpJUjQamRDivLxJw9y1tt6UMMscMasHm",
  "key40": "2u5nNEkfaP3QDcVKXUqcYFrhGRjRvk2JQss9WvZJDxmyShnC8yBA4bPeZDbg9nTGyfkoA8hXdQuPgeqZe68AN8x6",
  "key41": "2TSdfA6kTDvKntzEy5sg8UrLRbtC9maf4JUducdGnfJ5eWWFe1UQtQYYgNQaYgVZ2BfiZUKFA85Nm7uLBTrsiHJe",
  "key42": "wtSarmaAfTcMV1HYeYoZyS6cyjbHFHM9E8fKYFUkHABhiPAMeLyjTxNkUMUJQod2cVvcgPhRYod7Pa1bJeBb2TH",
  "key43": "2VDNcetv9UjVkJLbq1hfUaTGJFaUQrAmE4nGy3cw3HbrnQc6PmoBnKYiNSUn7jb3DuBjmfgdrwNrtYE8QZfNjqRZ"
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
