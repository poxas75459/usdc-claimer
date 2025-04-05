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
    "3gmKxcYm1eoxHA4LzocLav3bwH6KAvSsj7hfnYhgszDMkXCuyhiyVE69NtP7G8kCcwtsnmFY8BHNuZr6MfGgPHVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zjz5iYbPQvyhkEkJarrnX3U6K5AW7p1gBMQ4QJqH4FgqQnqscL11xKc3JWZbpR3tJmMQoKgZy2DKZwJ12ED8PVt",
  "key1": "3XSK2MausJidh4J8J6ZYf3izDCCqhxau31EZrt72u4m8cuA5q4iPVyjLA9SSjWKh6YpGXxq5CyjDsap7P1cKNpqt",
  "key2": "58gJ2wf3msszZTRVF16Bi3AoLzKJHajMVUxbSxi9PXXdwnapQsar6rUDNmcKAdKWA7kXX14B2R7e4V7de3LepPAJ",
  "key3": "42tpfZqVNkn1NCS51KwhQdqBpzcZddC43GqzkPNgXWSBTKMmtkmVfgQRghPXnJByrbfLYJDR7TJ8h7Zvo4GWtwmg",
  "key4": "kAVsfrnGVVQgtm2owaRhp9qinhiB1P9p2eoyxXjkvZWbzv81hh4tFCwWV7u3BpMubHNKZLvsZCh7NhGrZ2V5mMg",
  "key5": "4j6v3rvDWPbqpzrAHnicRR53S4pQNibRFKWgpXNzx4CoqtApE271BrLTMfv5gF9YFVuoLEg51hpnsgdSmLhL5mk1",
  "key6": "2Zq7FncLBSdw7wc9H1QAEjLe2ZS2HMbhFY2sPbdG5RwWegGzcAkbgk7dBziSv7QELt8QSdheoA1NtvEkGfo8rbkz",
  "key7": "5ZGuhKqYi2Rvt5JZpgr25CxZkcPysVejvEd2ynuzhhvnjyWMTgYiGphz5fw3JbDYa3V4Svcrd9QdPdUA1UVbRY7",
  "key8": "5LHpdJE7bVaiZBjJVXvhNgAHPCd4rJx8G4i96btWwEX5w9dewHLFE3wGWUpZFQatx2n8X4SB5NL6Jx5GxEkw3dkF",
  "key9": "5Hb9Vi3AXRVk6JrJD2wGfxD4iiwFhMrnVS7LuNq1hEidCmBdxFw5uACqHNAybcbh9YFfW2sLsoq7Q2BGFBUiHTXN",
  "key10": "3eFSghiZKsgGPvtY4Jso2e2enx2SBKGEmtE6KQ2CHoXHbzS372XZjicmWQUiG5f1DH5xjZfwK2mLq6mHDMkqfFsn",
  "key11": "3Tainoi1oir4FG2CEe5B9WNstgGzUXYcU62GAwXVztDt4pPW9sJyCMqxvxU4fDkndfW4RW7wUP7F6pNGF1UXXnXr",
  "key12": "3wYVxHfzExaUTsHEn2bDjExFowFbzLLE9HDxQYeypWVsW8kJjctEKLxbffahqhgF9zNqyc8jPiWtDBtJqs62sfmG",
  "key13": "33UvJm7ePYRL1M2KZET3sbNJvCFjgCV8wNdzDMW84a3W1BYJszXxJFy6nCBSqHhrVpErhpJVkaXgYQoJRuhCC3Nk",
  "key14": "5vZfj1jYhz18sZVbEqhXRhJY2oZSBXTu7a4RupEQiBRBNBr1FhyAWj4YXVMvkd19Ead2SEZexUYLJAfDkFefbs9K",
  "key15": "2c8cfbWf3wZ8pBTAXkkeXb7DVxmT27ny5fEuCJ7w1WpfUQaQtGjNRzufk4kMtZHe8cVRmyzCCp7hDtxn1fej3gGy",
  "key16": "3odCo7ZD7saSZi1xyPdejDYXZoiA7LUp5gHXeHiFqWR8dhcczGbdRFKwei21JPkd76U6JcJTKB6RWF9ooJGVxPhQ",
  "key17": "3P72FwQKcc3y4GwoComqSDFY7MNA2bt8ZmzDHAaxQpEPLFbEyXFqnhZRb2MRVwKVcoCueMnQoKab3Zeb16fMJmJm",
  "key18": "2tp5vVXN18Y6NJm62nfwSb47LAqVi3L1TCaPTqfLiMCYRusJWWuax6U3ULxqKpvswyNixH9HTRVuAfuqsLyjE2Wd",
  "key19": "3hgsP7hBSVoeH9KQ1YebHDKpMYKFcSqMysdEuAWKLtbZHgbhhEfGyYEbQ5yQw8K6u9rsZi7iWPveuz1SStp49B8d",
  "key20": "ALMqqEegPuu74sJqzLqm6vtBuwyd82rf5maRHkcd4kEWow6HcLFMmuqMGkmRkpNBVrnecCcu5VaiAXVQj7p4jcD",
  "key21": "4jAKpWGuRqA3nCES2UVj4sNXX2zbbQWuZUThebg2sTipgRff2Uhdp5KRuAj1uWqBGezDWADVvXd6Z1qJMxnCjbF2",
  "key22": "3pse6gEcX1iopGGzpq78GKa3Utw5AhZhqEwwCGBeVsTi7dfvtUUXcTjzeqKv9TRdXdPpn1AvcbUhHEWSGVk2U8tb",
  "key23": "4cwy2stJRcAWcbE6mDAwW64JueJ8fBHEBrcERP2q3z4DAn2vf946A5hAA2yMbwasgyAZ7ccfeTWpDPB1stdtedQv",
  "key24": "XBcQqLzXdY2DCwNcNAex6jCaZ5UUdhdZp2VKV38wEwyiMADgLAhNLFagCkFV6CFJYa6JVwYviBExa6Rvik3rB5N",
  "key25": "3KF62zrtyaDJneQt6V9KMFt7zfgpmmyX8YfiWR1R3pKDVrNRddXzN3odR3N6zsbzdCj7N2QSNfiFbvSnVXuPraa2",
  "key26": "3XaCBk53xc6jMUjXhPv52iS3N8fAFXdD2UwNYgBGKNZwhevxndMYsscqanv75swrQgbkK9rmovW7wofDMnPcmTPw",
  "key27": "5oKFZ2Vom95dtN1xcP64CXoFNGf8hvLEBrV3sU3ZoytzbyJpJ3KjBMGQMsixFKi7V4Utij2BjjvE38u2pJMGEPCR",
  "key28": "4CSm8JsorL1GgFqdboZfoXyeTpkGcpqJUPUQ9AX4kUV8rR5NE7cpyVBPWPYXR3BPFnmfeqZi2J5zMRpKBU3UCqK",
  "key29": "7DcxFMep5Qj8qTVGKiWFYo4udmLitpwquhyAj636Fdr6NEzu8vdiu3gDGyRWDKWymEJpMe8bU6D8zcuL7QSCJJq",
  "key30": "5CG354qkVwHgsh1AowTso29NcAMVKnCnupBge36oM3bwF7XEEZkfWtX2Q6VCvMSpTRG1J84aUYn1m1j2jgrneef6",
  "key31": "HmxpKuUM1xPkyMczQzjCsDDmva3EuRxpfCYFq6xs6TtWtt3zrJpLaPLMtGVtc8wxWRgxABZa5HwFNNveYfxKxU7",
  "key32": "92TkvBTsG2y28Kx92ceZcVibQywkjPSs5dVqNsFyi56LRYFb4Qg1yGF59C2FcwdNuy4e7wPMGXvpYh9xcugpHhg",
  "key33": "4zaKZ4oxKWJb7Wm4Lv4iT4BbxfFoGv26BDzy7fN8iwsaLEsNLk4WkiN1DffP9EM2Cj47gVZGPSEKvKeoxpqAV7Dq",
  "key34": "3jqu6jZedVCiA9hx76uGeZBcVwSMw21Z99SY9UAHVnBYg9Enhee3iHDVjX1VYLySxMvtYqdHUZ8F3yN3KkuFCYuv",
  "key35": "2c42BQAWm4vmpAbySMtveeGueomftRmjLg19bDFTsFfSJwjnCzNdptQqjgvJ4QNRxpBKxmo4EUMns79NAPhVbBC",
  "key36": "37145tGW4bE6cS4T9e5Tu3G97Ta6D68V98BShQjg9oq4WTVoCX82xF5s6scQSWiCS9VmgyZrQcWbUxBmnxXCRnpn",
  "key37": "2NSkD2rAoFPEgma8puWDD8Yovkj3kNX8R5iP6tT3fG8w4fMCf57XsHXNUEcqXE198rWFvSBsWVBuTEuu2qQHViTx",
  "key38": "3UQhW3WJ3UNCaBQJR859nKRjW54DbtxUcKAGGR8TPpyctLihkKg5No9BE58TDbTXHiWFvbPJzdQ2YnWXPwY5WCtA",
  "key39": "sBMPLx4nH8YEMc2iyByqcsYXmRc5JPsLDSjTTWLNytPUiS1ycU91kUPMKgGWqkEZHjHMdyEyozxLJsDxhszuV9s",
  "key40": "3PjC1MW4V94wb7AfzqfXzPH6szSZLoZut26UQgiWEney7UVU7UU6zHXHcoo39NgSncXzV9tHnnxFyFpqAtL9hnRX",
  "key41": "4ppcqpazaHpjWC8kXYgiWfXwaBFEgusC9coAL7WnAascypCyPpmPgXigYdbixwmocXcS38v6JPJDvva7WWqeoE21",
  "key42": "3mtwNW3piURWq4gUnd1Y8VHC7dHhkevXAcZ1qWsZY5RisMTanXvL457VhPtC16pJq4kr2vVtvddgvM5zhW8AcFkj",
  "key43": "3SDC7J3ebzwGjkcHV4rVh6SnTbdU1zwPEJmqVWBiffiYLtipBVGDe96Un4m91y1xRDtJwGMreueuzBB5bFFVeayH",
  "key44": "48Kc2Bw7iBd5Tu8pH2AgH6AtQXJohjdifpD35PLm7wRa5FXpwvqjE693ck2Cc3bVRWeTCZmodh5LRx5qLDs4DZj5",
  "key45": "3DybhpJ4DcmxShfe5PMTn2FzPnVJsJEavyLyfAkJGGTuR6HRA2GVdvUnK6WCzvEbozpxsqNbRby2jvFvjy85zZa1",
  "key46": "w2ZYpm5XBQytNy2AQTYfzzfEhyjaTAHzSkd7CZJwXvtWmUADPYqMiV15mAP3idWHXwWqfBQUDgFdMy26Y8H2BGu",
  "key47": "GK8R9zfXXM2kHKZ19hrG1tktKDimQNVwrY3UScfMTsw3RVBayiw3NKFskeHz3pm45Rwgs175Ux7ux6JMD8ZrcTX"
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
