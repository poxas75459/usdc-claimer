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
    "4ViWvMaEjDyD2DYno5yKXHrwUPfz9zgxdZW3ZAyLDGsWnzeNtQLwoo8yyVdEm54eje5vd3bRv8Bph2qPh5u33THx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z4wJqhjksSsW3fPeY224jfv9h4z6fFUkNYoYRfSee8fvoCkparEvXiYuP2KvgztLPApNSvc3cvHTcX818jpbRDj",
  "key1": "ik93sEQdiyTcC8rUqzN2bvmERTVweUqPEv6eFWwpDs2cjkF7AvTEiPm95L77stecDe93bAVZJPpMpL344xL1qrL",
  "key2": "3sCWTCSHgvJS5s3a7pv8ucW8evpjy9uS4XP8gBiVndVqLqKTzc2TJXPZ9SpDxs3bhCcqqut7E3XWTKSm6YYk8FFj",
  "key3": "3xmWuyov8QjS3dG2SnWsNST4ghBYy725XzJkQR6gJWy31yxyXUbYJCCmMtKLKnDypQYXqzb3ScN5uYTEiDtrRjhx",
  "key4": "4Jss8ktYoKB3zWycn2pebJpytH1dZSoFQV5rkJVYkXDsA3uQ7FWrMoXru4uT9rmPN3snDPz62AHJ6RQMuVZK31dN",
  "key5": "38WXNeAEbqTggeF9MCk54tjMVycWcP56yoJMHAXGAod2ezBujcA7rEFzAXw9rBY4wQQbkoMJNYHz9j7KntF4gQUU",
  "key6": "JYLf6B5P1JP6fxfQc3N69EQRX8WsW3U7eqV4HkUszspCGukGfEzpTaVbBzFebSF4fzeoYKt7Z4Jz6ZT6creTD8Z",
  "key7": "47PwGJ2KX2NJ9t6sCRck3d5vhZZiVj24F2j1rNBY7gnPjfrxmDABjPjp4JRBac7hASmYmj7HjuNxSmg8AB7PL6k3",
  "key8": "38gcXiNGsEJ8hdQXQ3c7PLPGnkwK3cEJn46XnzjsKGDz1vojM5qWWWyR5M2ac4qpFB5qyQSmrEfJQrtiqXTQcDyb",
  "key9": "x2ZVex6U8vi1zNdLto8AcQc9hq1ZxgAjuQcuMD6hjyMpCXayfBhHB3QLGT7Yf3aHWWSZDDG33mnw8yZbpVrY21y",
  "key10": "55L9VfqFBvputUgadp5zATmWFhrHN6QrrFWSifR7H7G8UZ2KKC9C3eunppyhhiggFTq64aVSfrvnFC7hrJsDaqWn",
  "key11": "TNWLV8Nd6uWmdeAByXgcn43cfeGfk7RQReekiJMk3pxR1AkBJZk94Wnrfhvy9bvodpTh4o1UxErfGmnsWd6nvCC",
  "key12": "5r6CHhbXSZiMXa1VDU7P61UtvmGJSnbfqz93b494B34xcU43Zhe385Bw7ESjmWThVMpKQtu6bFcaAM3nAFX6aaZj",
  "key13": "4AGFw7ztgKq2arHU54YY8gURmmhnmjvhDrUQpmWLZKZBUdz4CLaMUGhssVC3B14pUgmPDYLUakhgvDCpZHew1bUt",
  "key14": "jsyDqmVs3VNS6aQfWaEBJBzTka3u8QqBsgUtWobAnzffj1rMHPGc53MrY4TY3v87D5TKcADFuTdMZVrAE6YTS8U",
  "key15": "5Ri3fwTpY1zELLXyHnPeMjD3UcCmt6uC43ZH2oGSqsfu6iTVtFF3cgtVWC9ZaGkvS5oSXxhhpJYhrYMCECD7ngTC",
  "key16": "5gX2eVDSJPwngLra3oTMJPjGMG929eShvWS9P5WyVsNr5n4x1v68HjYi8mi7dJj22VDeQ2MHuogMiSqu6b8WMSMd",
  "key17": "WrtkS4A4R6ZchrbdB5orS2dTMNL82tHuAMkRFvG3kHJDJDX9iBN56mqrN5iDRXkrsYQ5W9QVBSwfy831fiuEjWM",
  "key18": "2cGAUtANnMAanGHywJa5TCesZQrBhP4vPawVaVRimJSMsiY1kJjeo9f4QmruAjUKPSgGG4QEzkRHAZbjKjCce5Pa",
  "key19": "46tvTSGdeKt78sQH98Ncv8xDW8BpD2qF25sD62z8pfF2BRyGQJHiJsFbUjTec17yZRbtf5uPUNZvGo8uuq4x9Ckj",
  "key20": "37iBBiNWkuNUsyVqgPszFcFoZXh9cfQ7wMZV2NgYcb3HbTeTcxJKKQTdQULYAkyo8v8DtKuqHd7yG4Ws6me5bjc9",
  "key21": "2oLKN6NBjrVuJDqBwVN45CSeeZ8MLasbV6rP88M59go7hUx4BcvmAizh2qHk7RV2EY1gj8y67y6RpgX2wfdQXdkB",
  "key22": "3Dr5hPVKUsLCwnJu6Ri6wBSwXNa85nQDVmuzF3aFDkJgPTkYYukLGJRBDfca9Joht7QwetPXzVKssziUcoU7xfG2",
  "key23": "WnzAnnA7rgnECmdcwoaGdnGWXyx6h3eUfkF5TqBJv8ZBsohbawYS7i7RvRxHQVwuGR8rqWiqRNTnznftC9Wye7q",
  "key24": "2E6gbJNY655oPzWxmF5XXnjaRKjYpPhRrHXXg7SyBzpNyjvWMiPpLTnBLMC8mw2GL6xayKAwKZKszKPNhTHA2s6Q",
  "key25": "4epRAjqaodAN9Sm73qR3KrVqSuEjCirao14m6t1Cj2DHZKyMT7Q3Chuz1LtvNt3Pnvx6my9FptVydTU5qCSxXhab",
  "key26": "39SN4YsrHrev8bdpdxqG9S2Hm4WXiMcxewJkZ2XaJXzqHMg3nH9sK9UWdm1o15F2Ruprhc3AzViQyfgrj7gXiEPA",
  "key27": "34fhhiDKsGXifTBygNbKCS1CbUhVF2on3EaFC5nwv6w3JxvZDvDCAg6XHDaPaViYqH6RmUoX6PF5AWDEcDnydhBL",
  "key28": "2tFGoKSshrZp9Vg1E9yXmGzgNT9ivdWhrHofXhmgvpozJve1KKpeWw3qqUMuTAwgNMiYByvWNg8BXK92CoFgqSgM",
  "key29": "5r55z6MpYG5rWpXMuW3xY9bzGTNzPaQ3xBc7d9cmshhYSX7pmQ1Nkg3j1LP22VMrMSeQDrb8gHkg2dwk4oYg9ALm",
  "key30": "3wz9Zy5iyTW7iLDevRFHaAferrhiot3wYfFKr4RVP5dtm5z1BZgbuLtU2bG9Bx782NZJaMvv8fHesQiRhHPpuNFL",
  "key31": "64TW38HbcUfDM4o3xL1QpH6EyPwSvUxgpb2Un1mig2fQFjRGCK7nuGaTywRcmKyFZbGbTepWFMVpbB8LKWYxBB72",
  "key32": "aYpUjmF8szpV2cmViwzCu1hbaxo1buNsaqe78BHE6RwEhMg6gvt5NcpGUJucfUmjz58ZGjcMwnZgSgtjR7GroKF",
  "key33": "4GxULwA5R886paP9Rz1RDvaMjNNVfL1xoczZXn8Fcp6uU8bSVjJuPd2XBPz8SMw7D7usGvs84xyqHcCb5PgyS6YE",
  "key34": "4cuzjeiDq9gqSHWxKtjdkihgYA4VSfXapy8hd1qVi1L5WtSrqnb2hiSJFaPDvavB1YG1Bb5StS683gUvNksX3cGV",
  "key35": "5g1URKUGbpH3nY5UQxLu1fFr5k5i6rQYQjptNF793b8iaYhYLyzzAEGiERJZLPYbRxW868ZBTF7W5WSUXuN8a1Sw",
  "key36": "4oQCMPNVff4EAUEt8aiGWDKJetXvp5G5Y8XQQxKYSgYZ46UeomDomCsFK1eoEp6QfL3bEYUaV4uc7cxQKSBtbPQZ",
  "key37": "uHWiu7GiQg5tt83zZHdzyqCGfLEfasbLAAGDyxcQ1ZTHoTVfuej4pyo9V7gguzsjnJQpzfLzofEqMkh6qTMZc7t",
  "key38": "63gitMVcbmAHXDLXBmYcMPn53tBJQrSaxqYWyjWwBpREYkndcFrVZgn86LWbzZWz6KxCQ7Jz1V5KCUVvJV9BHwTe",
  "key39": "Xrd9UXaqgsXZGPDqad8DeFGuk7HNEPf91CKU9Tdu1YEr8opDVJjomsNwkEY8Lk2e3wqpH6zsf2fv8QE3sAUha75",
  "key40": "3k1zyLoQqseZGKiZwubDGDBJFQrU7UxZTkpqsRNEiaVd72DZiBdPgZBykV5f5XbDxXJJnAskF2uryrfk5g29WqkM",
  "key41": "5RtFMvwVRWgDQ3Nzo3RBLcgGPCYouq3BVHbUECEKP26ijDTWLu6BYVTFFBeqk17oidn42AcAfgvqQT77Q2D8JLKM",
  "key42": "2zYaEJHpqEDN8BYMeFymHuUnuTHQx2MEgzCe9X2RwB6Q17WZq35k7PPPPnWysevkCmvtNmY3aq8YoX6ZHBnwbibW",
  "key43": "3p3wUu5RtJQ9wZ3C4uUzpgmim3KDpApt8BYUEEkd5JvQZUDnoc64gDt9ScfgYVhCaSemUkjJWJVrtgh7YQ6EKq28",
  "key44": "2cTy47Jv8wkzCvEPuDbpkUGZcPtzhHsAnwrBwLv9LUzQYpCKzEtnGQsxEaGf3CPXUEpPAoyK2eLXDET983fNXLuj",
  "key45": "53n457Yo7xQ7ZvcwUerSVXoigJXdtZ4SqKUtQBx8kze8BTrWbsD9YmKNzMWT3bwNLAy4UPyan1SFqx7iFxYza5vj",
  "key46": "31E3w8oBiFwNEeVwmEoyaBVB9rVrj8YSvccL9pMqYH1u4vyWm9iFBAwmNkLYo2xcTM8mZsX3gDtJoqCEQQ2mes4f",
  "key47": "5zfrUGmBQNLNsNhCBPccPgffivaESJ3ZXpSQ54jqCCU2HFGicdtjtJiK5yytvavG4wjE6VoXD8afRwvwCsLxWJh2"
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
