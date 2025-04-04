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
    "5HkGiECYUNp5KtTFXMzUdZ8HEbNiuGWBXY9hDVXdZLx2YPGVUwWUWHa2WX6C3JihT7mxArt9KJVAFweVH2MNwNRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wx6bmBmirRhffuqccQPsydAyQjzFMkiW5x19PnLCdpBqNw28aqdFsx23VZ7BkszaAgSTGk2iQPEP9sc8FgtmtJ8",
  "key1": "3jdcf8UwqzeWrK3HtLRY9FGG9H4XFrifPhHQJeJYiAmPrRHhyphXPLQRFLmVaYQrRHqPQvt4imzuKizfi6gy2GWT",
  "key2": "4r8KUtdcu44m4S1XREsCKzbmowkeLAN4U3gppF2Ymg3n8reur5whLHkMbrvKtRpFJ5F3asoL1NygLxKJRkwuhQEC",
  "key3": "3NxgvD5xrz7x79Vxb645YokE8GTyxiFjo4urG6FM1LxNitpgV4JT9nFTYutBWy1RKXtYSf6bt94qPHkZUHcEE7c4",
  "key4": "X3fvh1UMuWWezRkURMeSzxBeCWKoHgYWhB5SvsEbXPuwkRf9AN1zc48UXUHpWGc11Ewq2aDHtq7A9hJSeJ7DHbe",
  "key5": "w38QpJ475EnvdbFwfDLbwZg2dMiSzDCqaxqjdFjwXXrR3SbhyqkqFNYLDnNp9A1YwzsAhyNWPo9NvNBJZJQd35z",
  "key6": "7PvqmTYuWL3Dwt3xMRgo65Nd4qXdCiGdCzn3SK4rMddNRGGixUi6xpdVRUigp1k9XivVMp5L9oQTqsjkcBkd8Yv",
  "key7": "4LZ6S7zS7DoPfiQNCGGPuDhUaY91cdqQmqLrhg2k57Up3MV3j9QvKmgTDcTWBkRpTeEaFRFeirN2y8LHKUjbssLx",
  "key8": "1SP33hTSVhnqAJ2VW9jiFn94YbwRRXAXYtrdvLUt6mjhinrQteJHmXwRRG6uzNpHHvRQqRKNFiVDPk5bpAE2EoA",
  "key9": "4bcsUyAsUQ4vxAAZQ9oFJ1BwQe3Xg2S5A5EXmxcbJCzon7BC5SqivL4cg4yB8hH7YDNGrCYZ7n6jHWY28A4gEuXC",
  "key10": "5XoHzYS5dT1pVynQDcyU1pXqZ4L75HUfqoHCqoidzVxwYs2iebaraoRP2jCRMeJVYvTRQub9DTTHsRwJzYBCfvse",
  "key11": "3BTXHcgEKoUNSCnP3V1XcbkCpBh3W1is2yhfaPCCX8a956BSLq4cof4UcqZUNAHKwXeATjfiKbg9YAobB2DLn2ZH",
  "key12": "CzPRimatYSYqsio5in5Zowf4rxEiBbzBPjr5mCyRkc6VK9zjQrSidaLMcsAXUk55z7csMzvTZoUWAEp7e8BFfPd",
  "key13": "2by1gA2Xr1y68nqA5Yo817v5mudk1BfhsYcqU9Yo4N3WZMmmVipjAfxQR6GHsbQB6h44SdKPFRffEm8rgmWPfRNi",
  "key14": "JoX2sArFXkJnUSotbBKB53tvtjEmycw2K8bKxhsMHw9PeMuQScQywsLPGNWwQfKQbhN4nJBuoKQqyH2BmMvTPkp",
  "key15": "zTRKyzY3P9oFrdDUUuHLGZWZtDZUDeYmc4gNM44t8ufaagLdYVY3xZk1LpQMhU37p1vVR83zLhyt1g7m5vHYvUF",
  "key16": "fUJ4cZ8ADfFkruCgGCCJyws7vQWBP2ySreHm51xZcrEMMfStfWu8pP286XN69MbPjY78NuFdEcsbhMxyCNj5HEb",
  "key17": "5HnjzMjaxsuVdLei4wBxNQzBZwbMGU7uyWmNABKjLJrGoMQMtc2ocDiEUJECN4pYP2tcExev9fLBJVAbkkmZfhZi",
  "key18": "2WXYKcUndoVBFJwsN9Hee546o2FZASG6ywoX3MpVjWnAR4GnXDG8YUD5epQ97KAnQ3SxeHxTcqwo9z3A9UWB2J3r",
  "key19": "4ysBLS6AmvwVEzox3D7meV9mw41hYZ55EYHWoSMQRpfgyPsmGES5a1D9vSpgQWEduyMGz2BY3B2zCKBLcKU7d1sz",
  "key20": "2AiSMGFyYTUQ51dh1d6w9vMADixiH4iCDpZFpnZL8hzwLj1MSJyCom8DRPinW7ybN8oSKi7mTB8bSciMjpsD3fEm",
  "key21": "2GxA6yhVapjEALPp922BViQLYVxhW1o2iZKLrxAHonYoTJSs5cDgMckDzgbGz3DDWiGBPQKajmgoxBHZA5Xhspgv",
  "key22": "5QMFMvWPDeU3KCUcxvSAzqSJdWPtVJyfsyJLyvBR7Btmom6dt7f3mSjtKdKumFLDbzrsDf8tEt3KwBQq9nRnjafx",
  "key23": "3voCmFU85u8WasxjtJULpgjr8hbj3rCGriQTvmY5dLi9Bx7tEEcdbkKUwNAKu5hVMVv3rfFKyDB4zY9HyEuVJzx7",
  "key24": "2HLzqmiJYDn6c8WgFunuBr1zk2ys8Y2BqGRRM3FT3bHEHbYrDiLhdsSFt2dCHGH3v3dbdQpjbeduZcEQzhcWxR2B",
  "key25": "4coxs3M3HGB2k3LLjGwNEc8yiHpd7RxBsgjiXHxscUyvNf4bpQrwB3SuXXdeFUqZYoRLg4X9vZQuru43JyTazT7X",
  "key26": "41mwBNLfjGa2dv1HAL84xHkJ1wqsYio3sQ7fhU2gt9f3NrvzLZfgELtrZJfdQ2ysPQgNwChVpsA8fY9STVF4qMUX",
  "key27": "58CKdUjpe13zCADEaCggHTaN7PHLj4Y5W2HT2HooTkEuotq2GM9GAjyk4ZVbXkEZAjEkSgTuSDbLRe2bLST43PXK",
  "key28": "3Xq6PAT1mguDVuN2nocVHySTt3zzWPgfEZ6AVfFWrR5RrveMsjrnmY8oMUmjtHyxqUKYbRH5ggJSzg39Jh35Czy9",
  "key29": "2VJGfyXKgHBhcXSssJ9GAaVapS8Y56pFXEERafbWV4e6E7gAHYa589RrESvqxMpcT16aZHdeV7sDUAoJMs9iDEZc",
  "key30": "5CPjdN9SpxZUkTsHJWCFdRqAfVN1Tep2bVuVENafgm6PuoShm5cUxCZo8io1fEpyeu79QXJAmLLNLbDysLHghDoC",
  "key31": "66aqUPsUEknPn3mRWyXrqb3FNMs58d6aoQtVq8TF4Pq1skdZvL4BC36Ybe7RJpKLR1iBm5bihL1Bkmy2FqjomiMy",
  "key32": "uDDqTyhFZoPUasRp9z4BjVHBmoxSpqaRN6KGEZfzhY7ftbZC8zhyAAD9pSvKtAmbds8KV5K2CJNKmq8zUM8UrcW",
  "key33": "66drvVhPLJxFfUueb1hWpkYAA8MmKr7oj8B1LhijH6dKH9AvN3yqqjJtCaV9MJEexbaFK5ZqtnPH9Wj3iLGuAta6",
  "key34": "HgwKNsKT7rbyaEtaFThsh2dPjR4DaHw2u8XdGhaaQBHuduq4FUNWRFnJuvwEMP5piR3v83vX9mkt8tmMP7A79Sv",
  "key35": "47ukZjjhYzZ36RxJrgrieJznXfif6aVV47g6cnKcszwvs4zChBmXbLnWqibuj2YRbVyWHiucsprAcW1L5sA1g9ha",
  "key36": "44yFmu3Yu2iRpUyxf4NGXRNbbguznDeCbMSZhY5NNqV8gTGFYKsAZ3PKyW4citTVy2nErvdLtcKQb6BKGUrBJh9z",
  "key37": "3pguoxcTYiBfxrDpZwnH4pvaVD2tsQTcWBGvfvdXXkvgi3ZbwP2KwzZuRQXWDbGnj87hwgCf7mF3wG9P6TUv8iFf",
  "key38": "2rVDNuqP9cye5nyjq9riaUyfvNAR2pSRYhyD27tFnKfRwpP36MXBChnPFJtU56DVECWr3YhgH3k2JmuoD4U5b5kw",
  "key39": "5ndNGRQc3MjK7THEtjBCQURfeuzSn1WhxZDkg8weA4P6wqms83PmtKTwcCmumnuCPMRLVaUK9kjkG3xqUTehEmJZ",
  "key40": "52hYA3r3EMATmCM7WtHB1Be9aEDFnwBVEFnBUKFDbveWHXdU9pyQ82bYwm3iNKFEyNqJive4yMJVaAAEqjS6XRHn",
  "key41": "3LTCJFKAkmmMRi6N2cwSBHorWEnpE5ZmtrYsQDhrfBSGNPhS958pMc2eFKtZwube9vRRYsGcBGGfdCUKLdnxJocG",
  "key42": "3mQSFnELKXS1w36LVv6QUnfLXE319yJUkiQbmMFLTg2NivkNUaCpVwbfXniEueQVJfYe1TrcjJy3LYdUrZQYkabG",
  "key43": "4zhxr5a1xNF9bBzXm5LaBaMWdBicXdXrqmBDhUajEPGrrrzB8fJzY7bLVavzYNReoU53PoxgmV8aHdvj56zG1QKC",
  "key44": "5tnK1gEuWchFtUBSx6xmHxdQjS7g2cyujTVz8dnxtRomVYzuqbPzu79ET2fbLWoCzfH6wuFxtJotLt8Xkpkyj52m",
  "key45": "5n6p9uNhNMC7XPb6Afx5WqEk5hYJVktFLSoXTKzrp2sG4kpEtJQbgDyhtPptm5zfy8wEwvQsmg1rnZ2h54AbzJQM",
  "key46": "iLWjNF7GBkJCzJxAnW4ArAd77rosHfKLRCUp8Hkt6sRDoCKpduiTvJHXXrA8ek2nyHAwxUEHyDN9WoDowaYns1A",
  "key47": "3MxCmta48iEmeBMARAzNenmteKpD12WyESUgyHwMC9S4mkydr31FU54VGqTewX6VmELRUPFmQCj3WJqsTqhsZDzS"
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
