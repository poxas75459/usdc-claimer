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
    "4iZT8ma9dSit9ukaQeSCbCqape4q6QopxeHtB6JmitYZg4JRxTAx9gtCxDti9WiePbEbUhySzPF15ZMYGacxuiwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NcgcZX5AayjjbhyaVDKnq7TPZMGJ3WhFLqA46WmXtqnN5nXzzjbco1aJyj6wWtBCpuQQPFgxCzyRNZqYfC2nxLx",
  "key1": "4e1g9nKsjWos1vQsZ132FB25PrwSuJ4GQSaMMnhjvoyMFG7SbL7BNSj3jyRXHB1ytir6nxg2AgqouctpAhWgmNht",
  "key2": "23rAWj569ujfKRuheCgjzQw7Z7gwvdN8R6Yq89piAG1nb4MevjmHkTBxzGe4ApiEdoemSVva6pX3Y3yqmuvzrDwN",
  "key3": "43TmBSstG4jU6ELfpUeRQQLdM321DQjGDqDdG5gGbjFzwZr3QQsxmRUPohXjeuDHVm68dBmtEjGGVSsG1YMSjqSj",
  "key4": "4EM16PrLT27zvU6PZmPnqQ4LPLT5YSB64SCwq64vTmYvu27taxj4z89p25zzw8M3M25BXzBuFkQSjS61bduxtyrY",
  "key5": "45pBpo5ce9Q4tzfmW7XKgEVvPuf9ZGex9bFCjxYgQQQrLJesQbtZaMvRsWtRJ6c7vXpFBMFySwrVh56fujpQfADo",
  "key6": "uZ8wG8uWh2m9hFRmK6qgU5L52byGuNewXw4BtwWTPJaDCCdNHuufkuoA68avSVUwzDQFVq5txe5LGSprBRnGnHi",
  "key7": "464fhii7BgGhsdsQox2R5YFudMu4wG6t7pTbhiG1t4dmUjND6VtBGHPMTa1p5YeZPQnZX4aTgsovsQcWysceQ4k6",
  "key8": "5ranT1pQvTo27gANeDzn4xbpDo8xgELSLb6GyfB3o5nuB2wVsyUu6pEMXnBesqNu4VAZTvaTsYNv4k1v2gejhUAa",
  "key9": "wPy7Ug4UTw8awhV23n8JuCofkNMG13Q7icETSNmCxxVypAjCTAQ78EsXwoVQfPfZcF4wk24pTqyQDuGSoosEHCU",
  "key10": "wrLFnGBSk5uJnWQR2YequLKRJiiqRVkoiNfjS7VC3tfwYwX4834DhvWLoLAnssfKdo2HmLYuPqfzyByC3vLn9Qw",
  "key11": "2h27ofGEsZQsN6c8QUuamfKozcUS1v6RovUMLfwX861KMuHwYSoYi5mUKu9dBLba2GuA7pJcfkpzzhSj54ehUmcL",
  "key12": "2EYrDZaapBt898aphoecRoANcPGNPd7X7j6UTH9S9LUHtKHVVFJwrCq93DHHbMd29Rdok7ZC1ubyDmfKS4ky4kiK",
  "key13": "4dZs4Fr1QcEqpLsTjNBbdeh9gHwmptd6yAURFT3vcha25bFPSXr9npkNyULyPstaCkp47mauo36eoq9RYXXH56HZ",
  "key14": "3uampmTJKnp9bwrokacTi67nRsX4YJjFix33qoSoiDLfCbFik3wuYABrJYkDCxMG3k14uqTZ7csbq7dMCNfa88Dr",
  "key15": "5hWZsDHPwL696xXKuTQzTGCGhcp8XDPct47ZmtMB8aYyJB3PcdRSBhE4ePwt1oNweRsVU51hKFWLQBsZdDZw1djg",
  "key16": "2oSVWATm6eoATFwD86EDvuiSDdoACTmNgHnWSpwXAKmvTHC78kUD15tQHm4fQwG5FqKkferkpukarSgrf7LySn68",
  "key17": "JcEY4yGQ7ChB21TRP62fqhLuLEQsHrtWySkvx8WjsXWBiqJRM4hW2ub6Yt4atPKbQjZVE7qcxHMSTc7Dtno7yfN",
  "key18": "5CJReVeqyEFZ34i4DHG9tyJ6TE9XKMN3bHn2b6Yctj2bxE3EZLWKcexxoQZTTxH1f7T6Sjxm1vVV4RjZWurLmfSS",
  "key19": "45scNTvL55uvQmp4ARJV1pvEWhMSgJwuqp4Ei5R7r9115HXfqFnh6FBRkbsvVmdJQs7gY3VZW8GTg6SpSxgJh2ey",
  "key20": "2pCvMz9G56MBezVmx3mC2sZ4CmcZN7xDXm9SrQbJLnuymsSw4ee6aw4rZtKDJCP7MYVY8NHXJcUxtu1YmCjaGCGz",
  "key21": "3kvWjKR5ynUgdJ4gntDQFNZKzRvDb9UYtLa82fACwUgsaJtWPMVKVmRt9MpW4X4fxugtjM3SmE38GqF4PxQ2knog",
  "key22": "33mxfPMYuedHwD1MZxpPJAhpfaYAZoqyLeTgSFKsjNfvY7yMiUTxPJ36Mnmqriwp8pbsT1JUDyaV83rwjpMekzR",
  "key23": "4pPF78Tw83KDE5Yn67xCQcGXueTXuZtBqh2Wv8J1SadUgoxJGyvX1SQzuZ2u6eA2nakc8YpkJw7uX36vSKAeHDJ",
  "key24": "4h88wk6Fhrf248VyRZ1n2y5TBAU89izeJuxb5tCwiNfC3SrcMn8uQ2WBtBzMAtSQ8Y6DcT5JAGNvGQEMdgeHyxGX",
  "key25": "4YpY1fLks6ECsivgU6PbJ3ZP1EzdYWqdd1WdNv2HedcPwfCCqDedVXVry91sM2PUkJJas4akjJ4WHYsT1TBRDrji",
  "key26": "5fWRcJgVdqM4nF73AYv6jC1g3iDmsodd8k8PDFJx6sTAFLAioc8VFmqFwcv86k6YuWccdDrbXRT2DuTUEArU95ib",
  "key27": "3HEQmxQPULrSsvSNapK9ocSNdkeYQKsf72Do8jbuZPxRfCMz9qnw5C2N4MCYMK396geRrDacWifB3VX1mpsg9Rf9",
  "key28": "7Y3tgu9bSGcSpjXmVLhEwVNUpd4S7hbFEbHB66dkeXfVREpM6K8YRyEh1rJYS7mwWq8YJ7BgS8kHWBRs9gqfLQ3",
  "key29": "22zADokEjvBQ6d6Zu1ZjevKyFBxLMtZUS7XFbxc8di5N9UVNebbbKuxFL4xeYVu8w8DJ8MjgDs6swUh4LRjW9j3T",
  "key30": "2ZYkhLdqLzLbf2kaopit67cNfUEKmUKec9bmB4T7JbZGxc8F8qPkutqkuKrSYffp9M9hZo9HqXz19KmEbrMowGDG",
  "key31": "2f2U4ECWyR3rXtubDroDjZpBZAunJfwsyvc9o6gKXEJD8pBDPwM8MKfLLJD56sZEckXjtfpfPUQ1E9YmGf2TGdvT",
  "key32": "4o32bQk5qEqzy5UYv5RazutKpDtnoUYA65ojzNDGPHScgBnEfuKgTYMESF1o4JSN1La18PECHE9dWeqxxWoWmPEo",
  "key33": "2MXmFEALvQSfWq8Rs1KV3PNRCMfuLVezHVcaRuTabhywMpQUiHetQSEEBt1Bj3gbSDi5s2NZZWWsWd1mUD8PU2MW",
  "key34": "PiLuk7o66UhAjLC7RwWcxGXob31JPxPZ26v6a2wiX4U5wNHcMKmBPDhjJbv5EUDv4deVrPif4qUb3dXAfqGLqnq",
  "key35": "5JXT268ewpWczCWb7FKpz5Rpbk9ES288HUpx8qfkpVsABbT3acE2YRCBZj1X9gaRPwaA7cpGKueZLYpkV6ciCvE5"
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
