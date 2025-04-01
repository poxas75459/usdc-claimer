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
    "5kM2xqFKcJ7n9W5U9Ppc86oarnYaMPpJcNwcaKxcw1bVer3NNiGHJ21GXMwRRRWDTzEFjDhe8jYYvHB9HpoXaPge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TaH2qXW5KDSVZFdLJx4mi4YnZWpEAFEjhe6mq4WqHSdhNCYtMw3kLnidq4Xv7e5ce82nAXGNXMqPw94NxLSK1AK",
  "key1": "4fkMUBsmvoAv8fNZM6Cf5miKP2TVZkeahumaRNR4qAts8KUAcaZJYyzsqE86E9dAAG8FPiXoFmnAmcpmBfYzvi7e",
  "key2": "G6Dz9L17FJrH6ENvVXHhUohZuwwdLHX3WCtCw5fAX48v5j2iUiLP3ipKoxXhc6xYyee2gDWrC18zYzhN22fdkbs",
  "key3": "iRDByDbBW1hyfqUEUVst16bkwGc3L58DmBJrje8D21exGdumYUYLT2wSQtZcoRENC5TQ2xutPoEtbBcLFmnwzh7",
  "key4": "38qxteQWZZwdGqBB1TsPUkMExJ5tPKSeGte6p1noKboH6N5g5YGBBe15e5MnxzcbMWVZtAAVWjj8GFT2uToXBZt3",
  "key5": "3gthc1Q4GEn2hcnuGYFa4t486fHAYgAufrw4pfjEZVoAbFyRi3CKERVkeQue2mCyC58n3FCzARUYysGx8Z91hVZ",
  "key6": "5m9gdvvTUoiEQaS3KSgGjA2FrCXJ6bF1LR4R8jB1ARmWamEBSoXhTEBeuWWcUYJUfMC7CB8h1C9Ykp25xxLVdEBB",
  "key7": "42RtezLD2Eq2F4jx8AG5gK9ZNf7xtrAqiLV7SG4kDrKoGRGxRhpGq38D4ZwhyQ6B4ZaSSHR866D6v9RYGm2HN5iA",
  "key8": "fo8rw2FgZ9d6bpTtcUKjrBUCvTd3PNQjeWYF5Rco2Qv2ZPeE7abeQN32SFrrs7e8uzALiETbcem4wQXopk8UwDN",
  "key9": "618wVifD7sp4CQPzE8cFn93hsvYZftmLE9is1eMioE3kYXb5D6M42a77nucrWSFWxm42dvwfcBoQiEQU6oGmxWhA",
  "key10": "5WAErrgzvF9BYYkRNgoH56TEpJST3YgzMWCbQv8xftL7YPMg1LfHqypXrbph9y6gmLi2cgrRiiC3Vk5xk63CP2CS",
  "key11": "5paBWC1SmCkazBcYcWqHFQzcxCofet9nfrsKAc7jBQdP5WX9Zfnj3JcasGm7hGJf659eP1BGGzunNUGvvdDcBkXX",
  "key12": "2Yb56RfKMAxA7qAnyudjVfNQtmz7Dyh2f4ehrfCeYxsCuCp9yTYAU56D13voriQ1HSS9i5MHse35aoTEYgJ8fq5T",
  "key13": "DVALJ5uiGUXfF3nQ66Wk4CoVVA6U9YM6PswPdSnLetmAs7TjYkWR51MjwkWc5sGdZerixSauPbL5KJ4iEBr1mvn",
  "key14": "2uvub1bnhxgkit68gL9S6AbNyJie2fHjukjkV6oNuqNYTqnKD6qqV5CdpADbY4V9JvBomUhJWLtovmQP2e88TJc5",
  "key15": "D3SjWUimTBicB9s4QNoZmktpQK7qWZPCVPRamdKwo7Xp6YB3U3UARwdGLaFJ11yF248os4eweCxApHnUukhWsRK",
  "key16": "3RXbEm2rKrSMa8Kwe8ha32YHUJmgPrLFRbjfDDGK1sFJhh3SRnZa2iiDiJG1cdz3i7F1upU8QGdGjNWRH4iVNwho",
  "key17": "4vmtLKJvXFV9BCq7uFHS2mmCM5wLeKjZg4MxSJVYeiLPDhbDdvbw4DS6s5qyMRVzfUQ7TySthoX4WHdB2Zh61GBr",
  "key18": "5sD8oRtC6784PvRmhuyrA3KYDQJj97aLSMR6YNLT7hdGH8DAQzfsEngdeD8HkLJuA7aQ5jna9KmnEJBisE1Tym23",
  "key19": "3RBvLo6aAshXLBGRSwPNH9MWYqDSC1TpzvHFJSGZPNvYnJTJPf339skhKtNdo8Pdg3sj28RbsEzY1XrKqAcRfLoM",
  "key20": "p4sZarYAgfQaKqtcbcakFK6MFSnWCjpqxq8KhFeEU7aEXe5q3oNapL8WpHWLbAcPicu9LvEhE4Pi3zpvUX34FxK",
  "key21": "5VAC6Wy9w6R6NDCtU2C1ZwVyqKm5mK1D54hMkYp9i9ZJ5AqH7h4u7d4G3Mx6UwX1jZrsf7zbGEjEFDJWJhbopZ8E",
  "key22": "Bv4f6jooJss1RbWAmtKFkcrzaysCaeiSqN62LpzjUe4XE9zyZdfs8eJenvPciETHEAEs7E5PEBQGZi56hj4YAeS",
  "key23": "4SoWagtCskVRM2z9LB9aajzNnTLeeu8V1uR9FDVcAseVHfsKv81CLyzsM77RsXiP3sWCVaMNj9SEhcAQqvTsExbN",
  "key24": "5E8zg2JTbawKHad2C1Zyt9ZKYZg61naNgQnJT5aYWwdxP7gLvRc4U13Tum6v2SQJkn7nj5RjfsSxNXCo6K8A68zE",
  "key25": "wq2UVPozecLBeLDCKE3EcLVJRwXFVrKJ12UPjGp4hwxKtrPFKHJ6Huro9fzCSa12eQ3sw1bnadiyruCHuTJXqCM",
  "key26": "5hSQsFHWDbdcX4Bm5aSLYWT1xBgbsmx5LR27cYm8jso9CLT6Wnw6QEcgtKk1Q5bL8fJVXXbLaEvJiNxDqedM4EQs",
  "key27": "3ezbCc1MM4N2HeVaoDRPEu3okEicDw9h2mfBCf3HjEWz22jzZZ2ghVFqUTGpeAaXm34XPacVaj5tYPTmXWjYvxcA",
  "key28": "49fpFrzmMq22hvWbHK7je3rZ6aKvqdY6hmKyEQHqLaj5YHZmCQtfQaFGYAmZqfpnVodVET5rrudrhXtUsLSuYQXA",
  "key29": "39CHyve1pJY5LziST52Fvd22aBhxUUnq1wKUr5XzYJ66p4knhRdnvc2yBoWjJqGYsDh7LbtJhqqpQBcZxZ9BFvMM",
  "key30": "5XXav2ksgUV1K4pMZ2JCYBfQmeaQyfAvr9tw6U16hvtjzV8vGfri67nnntnyCt5xUxusBdRj2XbHCR8yARA8RDD8",
  "key31": "4qyveEP7AAb33SeYgDqN9Fzy2t5gJQ7YrRSCKVzvjQj8bEG6M1jCWHyDDD6BnhtKtZ5n8qMGtTErRWdRbrQjDHuy",
  "key32": "5NzQnyLcm793yU5SEqqYswSzgC9s99g7aMqDzHtYguXH3m8eVyXTsLPEXcMdNLmRE2Czm2Krc1z5QYFAHdPnRnZH",
  "key33": "3yV4nGCy5gf7KZieywjNSuDdefRKVDRdLffvmkcfuL3oVQjynsZs7rYCsfqLt8gzCg5YbpD4LiSUMeV2nHecmRdy"
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
