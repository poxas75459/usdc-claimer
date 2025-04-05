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
    "5S7hES1hUyhP6xYPSyUzvfUACoi7q7Y8UEUS768shJx5EXx1uyk8Rrw1C2akpfTT6zoavRC5yN2JFHTrt5rDom6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yp1pvq2sVF3GBwdKQiMMztFhsH4gGR1wnk7YEgHt7JdV81qr1yCfBQVKzmEYu5aLGNVsH5cZQtUznC2hFXDycwa",
  "key1": "674FEq9KvHJnndbS7mMNGePDKCu3RzFGSYpur3HG1r97kSJPZUv89Zro24cCSknapqX2SmMw4PbKiRZ8TwdkxhMH",
  "key2": "2wKc2nUJ81miuwBgsgQV3AqYWB6XA4jE7TmW2UowxDFBP8yKrfVXQofVnwkBzK7ZaCEFBgmT6UNPycWJVtGWzeZf",
  "key3": "o7TzoAPB7tphKbjvDtiw9Scv4rHyiMBHgLoQPsWJ9BAEckt36uLhJE4Bia8cqn5xE6tJVMBkEv8ALcK2akyuCgu",
  "key4": "48dCPCGqzFiGUkF4b3MuHwZ7YGW9MgYEKfbs2QLSq5Z1ZPiJ1i8WeVktAcGZ9L92utZ9Tqe464rdryM4fHEJM4Sg",
  "key5": "45WVBPDuAaZm6uuzrARHRzVRFWc2GuTZr3pjxyUipeavCNYtjzvaWa2TvK7GqZzH5E2SbkCUPvZre3U5BStBGrvV",
  "key6": "DN1esdzRo1rQ4cmuwD2ATWu3UTMsDCUZauPPxyprgyvKaBjjixwFiY4bJCjGVYxffigUaRvD7Qzm37xXAhUNKfY",
  "key7": "275v1Y18bGvbpQ9fvWrMk7a6bgVszX8JajkkvCyRNjVH9oqpqPX2aTVUSTbUpfGektHKnapjWq8nsPg6MbcWFbAk",
  "key8": "4i85bfomdUMLy9wEXX7FX1ypR7C7MN6od6umuDtaU5MmVB3up1ESFPrtT94YNY3THpiQvDFRRrpXdS87aKoL2GGp",
  "key9": "4gYb88AAVFvoARtHHxSfYsnCFz4grnCsn4vReEaoSKBBqt2DYaJkCYXMXT2ktEb6zffoPEcLP8QDVoeHUHdjMKSU",
  "key10": "pYscnZ5pJxovRrdk1gtLfcneQG1FQCf1BBbSafysRKkpdmb28EZZfzYFb2HcHjSZ6GLf4nVqJ4GxbxLDtj1CjYh",
  "key11": "46aRpsRHzicnQVUAjvV2dLwe5izqhKQCqVxSzzkKq1xBomUrDYmSL8vNRftS8gx9qScwK5qDpjRCii4UJ6CqRL8y",
  "key12": "2YFtCHutNWDgfwEihJKv8hnpi77mUBC5szm3YzKntYTEogSpb7HkV5LhMri3ZYDkcWo7i6SV2StjsNYMk66MP7Bg",
  "key13": "5Mn4eQjKAcGcjckqRMJbuDvvzjQyugJdW8MAXwsp1WFJM5PhQRoxcpjdHEyi9Df3vYbzvJZpS1otmMHQ8AEYnKkh",
  "key14": "KLogcr9Y3yNw7yt6uWN1J4isZmarSgnmDbiV7eiMqCoJETxKt1fQbLuPpgsCGJb82RB7WXXBQdfKsGWxueDbLtP",
  "key15": "3w8zBR6LNn4zYrEFwxEAfJzTbmAFvMa4CDSsKqkATwCNUfRQdW3q92z5rCunm5orcWL35WWv6B4AivEVrpfgcNfb",
  "key16": "cT9it4J1WUkoT4r8rPfPhwUuMXzhg15PWYmVxFFKCfFqF4m26UYrd4Fpdobh5ViwNvPL44cbGoNMboXAHtfAYV5",
  "key17": "2T4ps7X6J9MFB4uLdCW4JeAQcYdapmVi2QkvjwR659MUx2oijCzbXGAE9DAfAPBnNYs6H9x9VgdUrKGAMQ9XkwRv",
  "key18": "5zqzycEGes6mYMDEkemMku16Wuuj2GsJPQS1NkSZoiKjCPW4T4N9ddTWtk9apTcL37skvjKvs521SxRhnTp4GqXe",
  "key19": "4aws6Fs11EUERw2CmdNcfYHTxPN8YtWPKDSsyNdhmAgTcZJb44upgZyrTLjkhygZmzsoNCnSgxzUkFiTrPSLKZg6",
  "key20": "27n7QMn65upQHQVeDmeAnqdePrUu9BrcJFn5pjuSc5Hx9xXwb2oZfiqKzm8nhnCCPLhGpXdS8r9sXuxnnWywupZu",
  "key21": "2kC4KiVCEaD7fGJcuZ9tX1ddH2YHngypL1N8Huoiv3eLMfBqLr3H7gv3M2DoNeecx1LRKrxzoZPFpk4uZEuTjkP2",
  "key22": "2f2iezSnZ8chGbJJsrtr5Uh2itxUHUsPX6rSXJGJ2iXhNnBrW64qnzihtHSoHd1HUc88FTF4xDfqnKzHDdfyYp8a",
  "key23": "4em7qmFki9NcVPQsUYemRxKDsQ4d4K3FppeQK3MyGYv1r5FTQcSDQvgrAx941FbVj969QKDU8C4odnaaEpYuKcBQ",
  "key24": "4Rm6Npiqa4eDA5eAThk992t3AVt7JzRnajFWmbQGu8M2EKGF359BfMdMZb4dahSZHZNybw6ceUWakxLtmVqESP31",
  "key25": "4G9R9TrwJY8rHrjVct7fqm5ajheSJ7HmqeZU5AG23fEK5huYjPzJdATUP7XpcQ4AtBJmL5Vz8t3z9NJy1VmSmEMg",
  "key26": "FPXmyRR8n2ETiejnUiReyHcjvbsefe8m27oBRQs7TnwbUrKomRrtTthFUb8qC4dtTnx5MbSFagzxbQXdbGUxF45",
  "key27": "574EJ3rLCKnCgEW1LXiGLdSJovtAYFYPw6nH2EFfq8vDpbxrwfcsWyesocZuPphiMKogdKnTXoBYvQV8zNhe62Tb",
  "key28": "wsGcM1rxeJGy3UtZThqFb31SEjc7D3LuDQVwVz7w29s8QcrJHJtbJVY2QoDc15MtZunCEVuGaaAHLa2xTw8ZNTQ",
  "key29": "4XdsDLPqSNstsBpjNB7Rya4owNth7SjZVYBHwXURgjLNqvLE5krczqf6iZL5bayDsDhjRStrQturtPm3s5Cas1wg",
  "key30": "253oaoq5kGu9FN1wHs5NUaoiFybxC8JDxJYUhcgtxAWZiguoEsRCiY6SMiG26ivcSU2Huy6zDfe4z76nYYb3kpbT",
  "key31": "xbU9An1AkVWkxB8YCbeEVJznx2uhjHSKHk3Pz4QgLmb4jeZoQg1C1w4CGb42JHVV1UXEiKnuQ7H56RYMntpwANL",
  "key32": "ispsEVCE5Y6J3RH1hCT17JjkouvW1SGdD3Ewj4U4cYyNQ1mRGCEqvNpdmjsZ3ARM97zz5rPbyvkQKi89UsFUiW9",
  "key33": "CPUkfAndwMUB9MfsMrsB8THEN3U5QiU7DrsExrjVh8LyMQjMA8FCtdcWexCNucbHk7NqyZ1ER5LHtZmaRn3vJMZ",
  "key34": "4rBAKJLFCyrBb4vpV69yv5S6sN7NKv66J7aqinfPaCqdDPQzwD4n2hwnUKFMHLi2uwz6zQkyuHtbiui7321qdax9",
  "key35": "23hkrHowXPQfLTxdjxLZJ4DSCbt1wFuVHmNchybyybii8Gbj1nmjXELyh5u79hHVoTYzVsaH2UvYYLd1WJsbzTeB",
  "key36": "4rhxxExNCos6gXTgdLRcGad1iWtr5U2Vd4rv3g1rHPnaANJNczQ6iY3JEBRWPDigjNXw92JHTmP9t5DTmuJHBy7A",
  "key37": "3WHFMdRMkpGPzCTF1QtUZPSkn7Grq9QoTEGb4T8nH4hMnZuv2w2WLKmXMvzR4qdktevYoeKw2wGEqdpezZ4fGtyg",
  "key38": "54WoTRZA18TERrke6pC3r4ULBzakeDAy59qVJPJBNWHiUZqiWgvBTqFVTNiTdBhNQU5wdaC34xGwKeybTysUtTkm",
  "key39": "43SJdRydpJvAPgjH7H93VeWfjvqdP7FJwR3dpbZaY9A2SxbToCUajQmnTm2Xii1TnDCtWQQcCEVJtobjMGAtG1MD",
  "key40": "1Ln2zKKFJPq4y4oD2z7j7eEavLeyt2h568bSEKJQE2VNNAJQ2SARSqmqmXQpYwwQewzKNy7fzdrmS2q7XNzvQUp",
  "key41": "2geFpzdY8eaTjZcWyRyGEdT9x4nLo6d211AK7ysPZ8Efbw2HSyGQmu3KyKvhc2yXaYuBjeUU5xGRPgESgbqcmgLB",
  "key42": "EB6HzKiQKnTAPzrqu9WxVck16y9yQD1kjW9pYrBm8JgK8KLvwEF82W51LNx41DYkg1XeRa6MiEJBsMGJJy6D2Ze",
  "key43": "4AdLSnbJ1LR8kXpQCENinkFnNMaRmfQsCRtiHG3nLaEWTzhUnakns5bC8kLSWVtbtdjDNWkGsoLhk8hRrdb6iWmE",
  "key44": "4eefBqWxRvU5q7iMfZ6MPtacEqrhYz2nnwmtAemorej6WTSsDC49EYGpRrVRYGooxhGvuJbsu4BAppzErcKgoQCA",
  "key45": "tbraR4ptHfKBB6PuXf8ZbqYM4T5SgosEMTYadRZ1oyNxA6ge6zXsot7DiDTtYfP8vxKhxP5oQwNBTDE744f4Tvy",
  "key46": "3k6JsNFL6jL6SLofaZZaAnqYaWakMcNjUhtRj1Te99DAADyDP6jcHY6VJfPDh28pajaQZwMNEB3kqRnKBCSQGRkj",
  "key47": "3urDRitZ1MXmQrJLZYPLrcEmhtKipPkESYNfZukymzhogBTCDdcHsn9yaQbdtGNu38sR7aPR3ZhkAeKoBmjsP5ex",
  "key48": "3Tb9qUEsaDWuUc1xoHK7yTbVhBSkEj1zPpV44Gx8ymmFYmrdzpmSnXp1UDAeVYhrSrCDVv7xeqXmyZ9qgpbzCAUu"
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
