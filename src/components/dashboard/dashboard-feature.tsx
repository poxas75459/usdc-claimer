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
    "59ceHWARNN3S4KYxzUJrttJvEhhuw5WMXHTLLRkd2AnETDYhUDaThtt5BotudoR4E9xP8LANQKqGu6a7UsCZC5qU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uUnr6iirAGtf9dysW3UCxuhjf2rQ1VxGup4Gz7RCKKh4EFiWXzU5VdcPrBabsvKBcadna9cdVh3pPYoeRSqNDsJ",
  "key1": "2p13H3nN2Zq1Do142fSNVorZ4VQREGtRkj7GsJfb9ypbD71WjbKHdKiZhmPpKrGWQkyTQDX9LVGGtDpnFmwGd2HT",
  "key2": "5zopXu56SeG8dsYN4xJ1WgdA34fWd1vRRET6gux8r7hezaAqcrZ4ZYMZ6kWPm5CP3NF2zTbDYPBeJR2k16KTiJ4n",
  "key3": "3cvwVCcETsPfyRj7pBCY9YRDpyPGGbbLRjBnyRDjErpKjdzyEXForRrvpcdPLeVQXSynumG7mUTgP3Mg54U9Cqhz",
  "key4": "24B2fXZ58RUe5ihuqDrwuGLpKfRnLc2f88wXaBimng4MeBoVjn6tbmEWQ1vaAy7ZT2SAMtNPpaniiiGcEtWx85aF",
  "key5": "tdcwKQoRaTuPbvkrWBsHkwJ2GejtkSkXyDT4d373mKs8Cs7bx4i4xR2gZThd29joeU4GXJTY6LqYPZEqaGJtGFN",
  "key6": "5nZTmgzoM9ErhcDw1WdpCF5wqxAvfC7z65wyW2nbyidwCdhqeHZ4MxhuVtLFwoSNsftoRX7ginaGr2JuEjJ2vaiG",
  "key7": "2q9hzs3bWjumV5mHKd7RADNhovdck98ctYccPha4AatU6xob53hZ4A4Ky5LsVD4s3hU1sN8EgxhViArJNWs3MM4r",
  "key8": "3a4uBC9PXpjNqeHRekBDxs1RKKAuTTN1pzi3V6RWMBtFAhPk1kd1BMJHCweW8vGYvb61vLSJP3NFQWQNM1ffr1tZ",
  "key9": "5KVUg48q7XZDThDBpBRxXJaf35VqC22GrstPYGKhCTYzWTgCjDmpPCm9Sai2XmwjzA7KdmUdLkExNFd1osDknsLL",
  "key10": "4XEcD7PheMCiDuGU5p4fj2dTMZVGQZEJgQQq7f5DAwi4n7uqFxenA55s3Ya1UYigNnZcfqhCR48mib59TYn1exVT",
  "key11": "5ztxZd9cat3WWDGH9ahhD85aiHEAQxFck4VZbxSnCd2HSvSyPGf7teyz87hLFsAkX7LdXytPETh6AnRoG2ferVLB",
  "key12": "2favYZwERikke4ZcYpkiwn7NcUuVNJbxbKk5DJrfG99tjJzcKN3WGJSyM4cmRvHS7PYQ22BMYtVpZPDYhFWhq5bb",
  "key13": "56tdWDeWjmY2BCkzG9vw86WzYUg3UFBwNbnSrWGauYmu7ucDMUyhisGzFYFCY3CYoKHyTxDi6jXCPJ1NfqetUQSU",
  "key14": "2ZjkThRnBP7Uj56G7dmjbeVGTv2eavXjbdSnh41Ehrwa9RCna463y3KXwZm54qkAf5BcCEbMLBZWfPDnWopUksTZ",
  "key15": "3LQnXawKo9jUYpqBEZ5NGWRxCaMEoPtZVvrQ7gGNm8hGtjvFjKjoZrargt7DWWY7dZanc5Eei2avXfSRMdyfihzP",
  "key16": "CDLszf3acQBkqsUYLyz4tsiNge9GqugWwRdGvaBLTQJe35u1X8TTs8H6oGB9wdufXWigpicTgqtTERcyMJagyuc",
  "key17": "4eoQbA5BDW49ivMweFyufhoa9KBQhvEKQGcbyFfXmgzGTe1PT93jgUjkzDzUY8yrEzGZZiyky314JYZpeZP8CwTp",
  "key18": "5U7Cmom9uPMQhzeupSQtRwMpGNfXTifiyLVTjehfA3kaFqmLJoLZa5ae5BhypzbMq3DtZyv9Xc9CQdK8KXZA66QS",
  "key19": "5mhyXukPBK8JMEoaLieR3vk31d3KdeUz23fPmjQ7awrbwAvmLSmC7Ub9hQ6uHXUGUGZVxNKqDm5swzSaB82ViFYE",
  "key20": "23EBddXERTCKgQvhrx3qMXM8EHNmK6g1U2NymyaTz67ae6J2VTp6Q3MgAKbbzNbc8WfsEMfmoKdLQhQFywWrfuQm",
  "key21": "5ZkdBmgM8yY5LmZtrKWFSaxuE9HZMxnvUBsLr1PbkiBA2zhzzBwPupKMY6rPGvQXU5qpDhin6rbxv1jokZddKuES",
  "key22": "3PWAnkBhGZxsmPvV41D4oNygB85BWeeTzSWgLHyyvabkVkTe59SbXFpYi9Qtz1A8jFN9Rne3VLonVJwZEMjJwNnP",
  "key23": "5oVaj3NXwHpjRCCZCF4LbeKJ6tWgidfmsmJT39dfVyK85yx2z6PENRb5UTpkwKHNUrMkAGZJ2sAC9CaXZMuKCEy3",
  "key24": "3te9JfkjrCvdaJ4v1DTvDwy6iz2H1vEDJaR1SJ4U5q6Jvvnk6B4rqfH9k3AfxCA2Jhccj6STqUgHz33YKePnuuTg",
  "key25": "Qcm54wvgr357W67y8DCxEMsDmmUfK7i93hcP1RoeDtajpdZ9vkL8HborYv9TC6gotnNJvkoyEHp3N9vPYU4e82w",
  "key26": "3MNzvrf39NqFQgWvSUMrnEBgKaJdpn9LqtJFF7bxzM6qMYR46KfqcnvsuApVFB5LRAEJRsAqLohHpXKuRT9AhcYv",
  "key27": "3bbepJRJ4BKvQ6YNHwQKQCJqonG9ZN7qbRVhuX5aCXVuzqGrRPp78uXcGhiz4da9GesLWv6Q7X9buH6BmomPHKzS",
  "key28": "65wm28gBuVzkzHxG8md42sJmrcmDDjKkwvBE1apMrPJmfCXNYdjs3ZbiizcAD64HhwZ1v6oc53mGvP5xdM3nrHhP",
  "key29": "3TGb8SWSXfMUtWmHdNkEpreLswcVFBP1pCyUrrbuUSNnL3WpzWBjb7E2Wirgzc5kqCZTjKmDoBAabsWxYgGcrdxM",
  "key30": "RU5S4EyhiHYNttCnaDzwqNcFUTvtDRz2QnViXehRN28hT48jbb77CS4QM3VVPX9MkfeVsx7aNQV5UybqQ6PxgEM",
  "key31": "5mSwz15V4YPRPwLhpzWH81ZikiqtAxBoSRBMJ6kvA7yscy1WEwDuHTi6eSAmRXvbog2733rhmkqr2a2XJNDyyfh6",
  "key32": "28kDAnYyuTqJx8K2LWNBpvj5yvf2awWnhQ6yLtqAMCsF14nGpWfc1BgWkTrGqXCA2Ch31T4LcEGnqhczsLe38QZa",
  "key33": "52NeQWVz5gyWbdo6KNFKwsKXKdMsZRw9iwyi7qD22Wy2vHHjKxsjUog481GDxADHtBiiFptp47gcBLiVGdr2AcZK",
  "key34": "4CF4bQHpmEmA4am4gh7q6iCWtqmZwc64YEJtjKzBQDD3mcYsRTHxDx7HDDD2j8cWfbvefLQhYiK7JQTuqCs2Gumr",
  "key35": "64C9PzdiBRGuDms2CamqPS22m2Lv8XyzW7Z4JujrL6aFStfgAwkPjnrasYJ6SPujZtnJ3UyBxK1LXuQ6DuVV7UHH",
  "key36": "51MdLkGYQm8gbViDQVGUiYkfcTBc7WAmjZxpVmfGsAAMRQKp7tiwEyWRo42gBiwwY4GSM4DhCRq1KjNuP6PpTkNJ",
  "key37": "4kCApWV7aWEkrkibvpzPpFb4pJyBjMNYttSArmNASQteqP87XdXUZdXoxLDExBifhidRWCrxhyjHEKABduGha23S"
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
