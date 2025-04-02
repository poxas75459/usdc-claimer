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
    "4LRRNKkxXxqWX3pAQdALbszMAAfuKsSDNc1ArSJuAv2BhbCiTc4Ljjvg3UzewFg7FvpPSoEYdgfyJSYh3dvGc9HX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2414V676Bx6NUHH4Kp8kAsn2atudpEVjBCmiKR3VBAYRFzd9ax48R7hpcapyNAB4KK2sbSSiorusx5ukAtsR8FAv",
  "key1": "5rgGTeBkh9Sikd69E6yPoz1udEH9SbUx3oUfKYJkekyS7ULyxrDYH8WEx8g5mFL22cW2RNCR68K6wKANjHRM4tw2",
  "key2": "5Akw8DSXUv2JMeiKFRwGRo34bF4omx55zhHLHpVWnK5szUirdyVYXqpenkEdeuRmNBVrT8S8uzUiZHRbL22DZBV8",
  "key3": "5iK6GMiiy467oASEMFpCuug4idosDQAXHsfsnPKB6ptB1VrcAb6KoHqTK5Pgh2iQfxsqUiRXRcHS8cqpxUyPhBbA",
  "key4": "4dap3Jwv2fPQTGmufmWFxp2mnUPt6DMPceaQzgG4MX1eX49wqbv2teR1UcPE5kru1ZqqZw4yr1QRQp4Z6tSK1M24",
  "key5": "2fpftv2mWqUXGh166woWbTTwCiJLDLJPVFDtHXxBaAuv7okzzReYaEVgdwnCyVQhz4TybPGAUKSFANYc2Pnmx5Lg",
  "key6": "qZeoYaEvVoShtN6HCAqM8xySzWJYGoMa6ttdBrndg3GS7kRSPbgTobfa8XxiEAgFmcpvcu5UnDyTkSsVPjKTDMH",
  "key7": "2cAkBktXn8RdFiCphx8r7Xbh6zzV8Q7nD5httJJVHjCF8dgSwFkd8YVB3DPvDvUydfstkqcQr8mNYWj4fYBues6F",
  "key8": "4r8rShgMNZ6YAv7DLsQSAdQVR3BbzXYezpP3nMiVnJeowomssmjgZJBqDaU5VfGjQ6u54JUp2i2WecBFURrbPUx8",
  "key9": "4sJQWEtWycRdNc8HAvLcb56Wrim9zRbJBZp1nKK2M5KpK9wKGcuzRc3LhGkjvryQ2UNbzfEADQMtyDzy9ES4vFiE",
  "key10": "3KHe6k7opttHDgMEBaEvKhhQFxVhMp9eGAb3FGvor96SyuY6R5FppfeAmSMZhi85cLdx94igrt6qf4EH472PpCgv",
  "key11": "5A2YCRVUTCwxJXLdTjtS8Qf7nHmSVwiQXAJMspaCajACKGDwKrRsbgcbgcGLa6U6qkczrvatwsPEFTW2UYoNRcXK",
  "key12": "3RaWrs56PUKcdKUFV6UeVZ3KwADMDjnoj5hAa7CYpWe6RzkkiHj9TeH8nsHJ4fDhiU9aY44yX1YE6Hqy4fD3AutS",
  "key13": "3bhEwR3AcvDoAVCwdYE2HwoFD8cV7Z7S7FHio1vEqcM8fLr2mkuoHmEwPCuwCHWEyPcZvqsq4pM5PPJTwDbFeidT",
  "key14": "pZmre3vGfnJT27tGbVc4uuXN8XX1y6hF3aYgdkri5UVyrmetPcn8UMn1fnrjCHUQZJBgpvrjpyA4LBPnSVwrDjQ",
  "key15": "cxeb7KbTCWfdeFdpUEpYpWJMhwTD4Y2QCCkqM76aNDwZHSoCW67EXTNf9FY5CWu9ganYnXNdX8Gww2GWZPAHR4F",
  "key16": "2PiHLEWLDhzKWpsiq8NrfoHeEyykuhJuE5rZZvmsLK4XWqeMzCuGLmj3JgKNeueVHyTmSKPVw43Fsb16LHSUKbqy",
  "key17": "2cxGKNCs5G6DYgonST8LXYhpJYkMRaNEXHcfEjRjp4P7oWzpQ76YQxcTuyXY4ptLCDLEeqThZUMjNpW5AHXeGBUf",
  "key18": "353QBgL3eJXAQ34gX6pSooUTt1xhyu8G8Eyqyhf6uZPMfhJViJ8jkrJkp3RQXUZ6PjAoQK5cYdqcZ2cDEotfmA9L",
  "key19": "32FPJJd2WjfNMNQbpCobgtBcpqyjBhL5BxqvQ1YyNVUkPrFceaJZUJ47mcqQETspkyePjqP4o2svQanh1tYQfZMq",
  "key20": "UpZ3hkNZ51ACuSoVqPFp9p3zHbTMpB8ybeqU1xQqezDm3vDD8pR9My6ZBaUiqich4tHgUdd48PgWTh1o1ie2JMq",
  "key21": "5WjhbC98UXRqVJnejNBJ6rnWiA9SNF514QVMnowc822bC6z9mWtJrRUiErvwYvmWbBfJ6Vaz9jGL5HfXY6McUGjZ",
  "key22": "VR852DeBGfoCmUwAAsUMHcNRsXkMk1zoUpfTj7J9kcE67X4rfhkvvhBCPsaBhcpHtHHh3Rt5e9P7rTZ7Roq5rdJ",
  "key23": "4JzLt2xh5KkHooWPPRJ9eZMNcKEizM9V9ZpZa8LbNsNeKUKqaZTY6JCd23fisgXZSYGZXRiUracZHmvXaGPJ8oeH",
  "key24": "3L7uyRtJPDyzVgsKgL6BevPFnHtoVaAvTTqTergBHs7Cozrtqqb969BeFxmhypvJW7Xd2QwzxqoeGSjtKdL9AX1J",
  "key25": "4KZKC83UxQTz4mj1Wy6U6cTYZD3otNWrh8jt3cofy75pEDQTcvBfmuKc52E2nQcoXpnYU5atUjqFXpRUTNQuPW6d",
  "key26": "34m1KVp7TrrtAEmavhDgXryXsQa9qiWmPEGCr53bmcxPXwybgoUdLNrscPhwCRnD3pKjaH2zHWxehGVJiiCRzERe",
  "key27": "5J9PEhz1PgtrwmWYLfExoBQw6KVe9zJHkXKxibyH77H1gSDwf7TdNSB1rm8KAjmgcVttQxE8UWsvR2dwdExanBd1",
  "key28": "AkycspspSDp3wAhYnAi9QqjcnxnWhUArVakKwq4o6NYezfuXf29eaWBCBEMb7J26vJ2jiK3tCAaqqKH6N3n4W4N",
  "key29": "Ai79ViV6HKCHTzUmugbZ7ErrCbDwVeobFoQnJW9N86gaU2u5EbMunRzfy3YUtzTSjtAbBK5KcnkG782koGE86Ju",
  "key30": "61UawibbMi1QSJXrFFwemh3TS6S3aLveBWVbpqZ6XNsL7HLnjpLyEN7X7xzYCHxE8JUxWrRHEft15QHRFzKJMBPN",
  "key31": "3ZhvTyxp4EKd1wsqZbw9AgMTCeqagKEcbmUVChnDEiH3KYJiTSQBn7h6af6y5DYZNJNeAhfPSLwEuVBXmtUbghSQ",
  "key32": "4djnQUQzorqiyioVpXgw9cScg22KwB373hrEVVEtopPxUMNNPBZCMLtZxUJmAs8Rm4fLV2SsZmmQyuKBN3fStwZX",
  "key33": "sP3DH7ZEmrAhv18SujRz17J5dUGQtqPKRV5FGxMPZdECj28KRj2U4UMikCTpWnCxza2j43hRfaUfFn3WmbSR4ZE",
  "key34": "89r8g5Sb5V9HHUVitiNZL7J2Af1jMksx9j11JLHMc2iKthvERwbmi4kJ1nBYh3QeKK346SVi4QrV3UBgakMaY7R",
  "key35": "5aFpWmaEVJw5ziWZ9v4c6KBWRuMYpQZGCDEqTjf1WGgtMGj38XdqFRqsvke6NavSqZz3mRuxP8yPGAzsweAwTRgA",
  "key36": "62jZ5tA6j4M3xtsnofMSmfMNeJZgr8HMjj7jFDnJdVp8RDakZ47dZ6K9z4N7kpx39rS2wiU92f3QYoRm1aXK4abs",
  "key37": "7LErA2jYS14RmUqnxyAbGC59px3qWtJ6USq684KeGsrckbFNUNmJP3XEjiMhXdLrHkU3uHdmTufkcGejM9QCziK",
  "key38": "2qUA6wXCfRM2mNwg5LbZGSvJMqkwGPgPfp1qiEVMT7FPHFNbMHrJytfGewMHCxw894fu4c4ShprKFhuVBdb6ozeX",
  "key39": "3DoVH2RoNXv1YSevJbDfmPEWPp7TWAFg5ZVpomYJTHWza5RSSo2zC4MBgeKJw4Xgqh73aZtkjN3u6LnH9ySRj6XT",
  "key40": "4ngi5FQRTxi5s6iBES64jHrFMvJmmcuGF4WvZeV5uKvZh1gBUb9V1j4R6ZtemdWbhAu9sGMmRnPHU1ucZYR93z2y",
  "key41": "47YgaTjNcrinoL6JwHgJz6erqsKJ7wUVQwBTmiCBMN8dsw8nQvmwR2z7eDote8wcXJmGFSvRxH894fFM8hob931Y",
  "key42": "2zV6GbV2EZBxLeaUpQU4knm9Ps8tU4dFfPUKCPEki7amGaMFzMuXhiQBHJ5xbzZXSs5R7CgE9gjP8Bt8r1bXeX8X",
  "key43": "gYtwq3KjGjJLySuQ3xVtaagSdD4QxckfYhh6gJJv3NFVKbr6QR9tXLgYVSu3bsEEA3LWH6a1JcTSSSDLqVWGQds",
  "key44": "2mbWuAXeEZoCqwFehRWwNmnKCL9g1k7jQYKhGg9nY9gfsnfZuoURvMYnVn5xzADuzLTP4kJ8kUw1xa39CxZ1swdS",
  "key45": "opWENRHBBT5bb3yqNYDTVAzFZHkq6fyqN7qsQZ5VvQmWqqVd87M2KnNDe9dtr4TGU4XW4DnPwauBbpCKcvCRqds",
  "key46": "2HL2eAKnjW3XDugK3PmSpWQ4Nm28MpspdQRYpuFM57zE7wvrfRNWJ5AkLe5StqjSFAz6SNMow7C8B85MNLbHQu32",
  "key47": "58aPXYmJovURjzU9QWyH99TZcP5SH6pNxZa8sJe8Mm9YdQ89mKfoBcu5U94NrwhcK4y65dGNTf2GAQvhudh5fnqo",
  "key48": "5Yp4fkrePmkYACWpWQQrvukvvAprzDoh2hyBYephYdTzLHdNSuY8kxB2zAV4fdgUmTgi8tAdiFSPB2Mep7MhQvCX"
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
