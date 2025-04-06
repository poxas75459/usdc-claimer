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
    "27v3DeGLUvW7mawavBJ1en95BG3odRhcpbvKaFDWE83fCDxkYGoZznbKX4nwrStUGdHrXT2erJRdqU88DrxafxoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9reynWr6cWT1h5hsC9qEcGo9Uugdk9n8QXWoYWY1SfnVdciSvNhi5Kft8qKhA4P3kDqMwPP75s79PSPq3nEQnM4",
  "key1": "38tppqHZ4h6tyAPQ33soaAhraY34FvEegHKwLjX6LxH3r4F77SDiPMW23ZREa3JcAynwBWoqXx8aQutLcBPY1UgW",
  "key2": "4taDgsEEVu4sJxkHQk3QfhYjM5JPETrShnGD3Pb4Q7o1yzAws59NbBdPixLR2uPYCNhRT7WmeAkwhQRtVUBnQzkE",
  "key3": "3QunxaPqytDYUF7Ns7SCAw5YqxRTDAeEnnUqw6Yv7JZeXx3uRhZpWC7DVZ26EzVAkZ8xQMtu4WcuqYbpm9f1idS1",
  "key4": "mxS9cha8mzdvoJuidqyFGjFQVaykKYn9MemNL1Jx6uaQ4UPWnYymWzS1oKR5b1fEe8PKWSreVRQ19VYoBEAyTMK",
  "key5": "4SXCgeJtV8jVTnEh5J5Q9TnqMRZLcxZHgW2rhuC3Jd3HANrifcfKktHCCMRPU39oaHrNgiUnpB4UWQSdphHKocxx",
  "key6": "5Nad8eaho4owdksSBZaUak41MRb35qyMBkU9XoywpeFFuyxzy8r2WmWLVd4FNy2gJqYBXx886zekTVeJh4Pficiu",
  "key7": "14z2uAhbHz6zyrt2wbrw8dqYRNeZTX9TwkxajnN3nuRGpHRMLQZRrJ77XCEga51uAxFb1biEirPP97t9jMTiEbH",
  "key8": "2mtfU4Gjnppxz9ufsHRoyyXGw7sPMC1qtdtHj2BpX1n5wnbjaSgUFXsiwioSm8NVa41CXCBaUGUVTw6xDSkMZDZU",
  "key9": "3JZgGb7EXZC555YZmntAAoDF7KMVSMLixUgEMFHfznkQ4xeDv7i38RPuUt39tgkSbgXqfCDjtuGRbk2ThQKKMiKC",
  "key10": "4uMYEgAaH296nGAGJDZeZe2j89Mz26K4FVzNibCTzKRuKnNBiWTyiWPKCABfvZiGrDQAkQysSD65CrGCNvgJUoUK",
  "key11": "LTSLDQrHh9aQdJLk5zCUmitfUzr325wU7LH1TLJetQUaxsDS9NEf2zeEArdvy2ffs9ptJEP1UAXDgK2JWfShWzi",
  "key12": "2k2MVsfktXosduivBbMeahMJg73SsFiJaqdmpQrrFNnsXFEaCoYJYu6BKQJAMFmfzvkTMRdRZ9rtQZQuUfU5XUwU",
  "key13": "5CJwDuJDxVf9mXVjGAJXvNYp9LS24wRVgUYC1TSrupdQUDUqK9hiUpzwh3fz3cNtStpCGFkeLCNethb9FuY4cY3m",
  "key14": "88WCpmZu8WSMvfQsfaB5nf8TadZ8LK7PdqM4sxiRaW9Q27VTSnQa5V79Sw3XzKagwVDL4JQUspWByaygddShTJB",
  "key15": "bSJv4XKyoaoCzN9YoU9nqamNSz8vAuLAr5EmMBBmjNiBDHjFfWTBQiBMXGLp3zaQ3FR5Fw8mHyRBADekMZGfYvs",
  "key16": "2PSnLt4gA4FBEXSYeMWTEq6D9zgwXQaGByG1bkVoyvkitwjXiz8itwdGGKWZe93b7xkVEJzAGrMtdua3gSWwfng8",
  "key17": "3GonokcNnXkhbpieEurFazgNSfkKspYTYTfkksszC2gaaqxwCLSyVuSCDQnLbrW68D26YWpok9srbML6fQhS5fkU",
  "key18": "2k7uHjVvohc93jMubpJhqcNA81DHy8rJHY9MtWCgyPktu7jehbQxUyYGoFayFXhW6pTjqXEC51ZuQRLx9oE5tpeD",
  "key19": "2tF8kdZHZQJkZN6qZiMg2SFNkm1KuM3va79eGY6MMqKavdSbRZNWURHMnte9z335dHR22DoNj1HFg5E3qQHFPpov",
  "key20": "4LJQJJhibTRdPNQhDHkJ4fNxZKwzy6baGnGnonJmho4bNjjbdypiwnaEobKHYacmuLCEexeKNQEeADBPb4eeqXyq",
  "key21": "5VLy83MPqr7MDCdKyHbRHktYN3dnYNiNSeqKQ96xEC6btHvxJQopECXR9jAH72vYwYuecBXcHEba7jbeo3Lp49gs",
  "key22": "5QNbZqZRVhgzxBavfxE2yFpcKhSEhei2spLpB66iL9uSJoEMazyeCQZ2ftdRvz1yMaHMopuRSjYiaS3jQA27MbLy",
  "key23": "iuk4wACq8vBW8jdD5WH41Me8JMJaqyfsYjgrLtmTte52qw1RjND2FqDit9Raea6ZkXMYQc2VwDoLenpBywKfKxd",
  "key24": "3gS4R6i5Xu78NdvSPFLyi4nvasoK2qCLVrjASGFVv4zYi4vqKTSpWUxqXrQUwPHz5kqeMUqheYc2P2thHJ3vL3Bf",
  "key25": "n1uhaivbqDCpLm7C1HFVjSkN2SFy3tNP7Ed3KBGqDC3y24zihQ6VMLYDrhDio2EG788nbF8tqKGXyQunvip2sTf",
  "key26": "RWVGS4d7cx8nP272oYBt8tXyMBBm8tf9LwSwche6NDqcyhitMq66t2QmYnTyFgvJpx9XPSybR18EDwSZutS2hN4",
  "key27": "4WKFrN9R3gJV81V3DFfF1dtzGskLfPBJd9joTw5gkPu5VCHrqHc9ycASzKj7WFka3MAULe9Bb7ez3VxWvcr3Kj9H",
  "key28": "4Z8kkxpH1wpa1kJRYXP2DH7dZ4yR47DQyqwxtn634BxY2sEy8LgpV52xsifYJUyZL1oQEicsqFhqe5Nikp7z46Uc",
  "key29": "37yxxVQ672Ue8ZjvRCZN9DNv4wb3dvzw6Xg2ruRz4uhPfq72f6jvLrNqT5JwL3taqcVQtfmCKWAUuBqZdgEJkwDA",
  "key30": "5eDgo454ciJB7Z2hdTWqVyy6xYC37XB64HGJ8UHg3Heh2W9MFXdpA2y15eFS85YmHwgQgJuSS4ej5A2WiBZHKdFo",
  "key31": "3Ns5QCF6f1o7svrdBhFM2qpHUiXgSDh6Zo6tVx9TNtZBgZawdttKeaDdvy1AsNbg7gH5VFBKn7vMmgbw7AgQiDwM",
  "key32": "2yDF2R5TC1PDqqmtKVxsrnbPyTjugjXgbaBENHZARFJnuV2RQCmphDv67p5Mrm7Ry1HH1H8wm3Ff6G6oHdGH7fHQ",
  "key33": "2Tp6b6KsaefwD7CfFYwNFRpXpedCxraDNJEZdTztA6cYWRNGGQK9bKSJ2FhAJimQWpJQpi3Xiza4eEmvZG7SdrSt",
  "key34": "3TtibJHqBPTH7EAoAepcyYmCJobX6X55qLSfiWZ2vKVBXURkrt2wkVVj8416u91Bo3tw9Zegqqv3kyYBisFCoERR",
  "key35": "2jPkgF948h3pdQaomaB1MibKGyUC2nUYwZspH5yVECBikMUEh58hCJLFBx43xJWrx5AWCHpeM1NTGVH5uGc67AsQ",
  "key36": "5rDMd4aVZmsXHnrZyRZkyJS68uoRaeinzLS1rBKrqgxCZRSUeWGd1N7CBv38L49kMsDaonQx5km333HNhurS759C",
  "key37": "DbfmsukPd1HbgbFDFWLZzxkG5wX3qre7hJtv82aQ1p36qKH71UJHYqDaRiwbACiLxi1ULvnTzryCVWnXAkzZcqZ",
  "key38": "3W768aHdGxnM68uoXuKXZn4StAeGUrggR228bdKyvy1Jbf7Jk3itkMTLhajBv61xoY7ABuXb1yiYZBvJckQXGwhr",
  "key39": "3FJ6ms9du2SbEwFqjBg78uiXne1Fk94YeZEWMVvoYh5kvqmDLw99mJbeZDDKeEUz3ixTy1YyyeupJsS8kJm7VnLh",
  "key40": "34YmsvS28YmxW5HDM3DDcCq2XAV9N6sqGPCeUoKC4BGZbDcF6kg2to2vqPLek5Yskwy74CVR9RKqxMKJjT63MMzE",
  "key41": "41Xu5sBmrpWUc1B1Ta4LCsdFPxGFJ5gd92Mdb9YBPLWwBcgUw78WNApdtGQiKyzs4nY7EqWH1pykTj3y51ReavM2"
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
