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
    "chhD5gA16qSraPAuwnjUkYBmT8dcLUJU78p2sLTwK3qcvXqSWXnmaG81pPgUdea2LG4khPRXpCZX1uKaH9dV2My"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Atc8RX73KnEcZna66LocqnGWtxa86bDxsR5cnks5g88d3GnDiSZCNtQWCJfu6ZFxJJstm9RTAC4PjKh93VctVis",
  "key1": "LsiRT8rz24ZvyZ9JsnZdDCQDshwAe3DWXuLZMWaDV6HXzmYJosrEus1zPm6CwuK42noj6jojWYriM5G4NCSJQR6",
  "key2": "5iv2LHMS2VaYBQbQiPzujkvqHEXe2DpiQ6ZP6Exq8CKE1BVdF1xdmqTVoVa9vEW7dhtzPFnQhWoTM8Yh7Bn5HrBS",
  "key3": "46xtPAavLC39oyYPD8dw7VLbcgt8pGYzjgt5RN8bCzD6p4dRTJaUAZCuMhSUaysesNsE8BFdu16UhUTRznByYzLg",
  "key4": "4LDkhHvDEM7v5zE3EYT1YCFEcS2YVq98m771HKxnjjXZEPpRKpGUMR55Dzpm51kbM2owK8M81fJVu3LJ8VTsNk88",
  "key5": "3NfKzcm6sN5qaQhnfBvj69XERUG7mDhkW6gKbcBARSLthmy7t7XmjVjJ4bp8P2f74RfePTZxEiP7TdjTpzKzyTFz",
  "key6": "SzBVYqpiC5QFgvn6icrN8rkUHt4iiGEgPX23SqrXCNS3tvDNLC9LtjmSjN7SLp3BQkaJvhQUTxhy9uCw3cJf7aV",
  "key7": "63tEBsyoBdx6nreLcMiSX84kBVWCAGGw5RNchtpBFVFywmoJeXPAoNqumwkyXqRzX7kFxRLnyDYaAiSJoSQxmRk7",
  "key8": "3Z677bf19TZGy3139BY9aoUBcADTWDJhuKaxEghJDheSAEiVZRrT5rZ93GvLHapA31geRAkqgXQNgJCcHs5hCVF9",
  "key9": "qrpqdXj3E4ffz4uJjf29KY9UrUydHXVxtUxnGCEvvDvy8SR31BVuB3qusAnzYDDK42HqmNmU3ZCLt1p4415Bt9P",
  "key10": "4YkD18WBFe2Hk1PiaHB5yy7m6FZ4GVhKQo4GZo8nUzq1VycBU9ZMQJHnrBLAxcomYy8fx4NB6GgaozXjiAagZ2WX",
  "key11": "2xVntwHu3qxWoaeASYEaeQMYHoegBPWN7MBNcphYkSKxEKxutbyeEwSi7PccR99N4yahPtNybkgvY4LXsm3hwjzp",
  "key12": "269XWAG2QRmLfM2ZbDFBoHVo74G5NdufYm6bEDrQcQiwFKehbf94wZVuW6Z5vYnbABn87uAU2FJq8zdMP7hpXDr9",
  "key13": "4Cu4fyb9hPxdkTKZtmtMR2MgC94AiswwvNa91fr9ckjKJrd2KoDqcfhpGAR3c8dAERquPGgHxDhm2925jCH9id7y",
  "key14": "564fYWTgD6sNcEpgZRriG8EHnGz5ky8uZEsczV59RTwxEfU5s6sdQ285HWZVyhzUpTxrBdwFBBUTAgWgGxp1HNjy",
  "key15": "2KfSS6a2X59wV3a7yc73e8szyg5CZxatvRT3wBC8meSo9AHZdQ2QGqWaEqRKbgczBBr12ku8KH8RSrUswTn1w4Rc",
  "key16": "2bNqntuihVB7rthRQob7icxFVxLB4qHx6AjFaeaTXuXkq3SzEHGADdPpaKcHGBQgvcLJ7WdJBqmyMCnAR4SqY924",
  "key17": "274Whfa2NXnpmbsUCj3gQwEU7PF14SVu9aukPoSfX47pur5GoK8y7pqBLxfVrvEWZr3nzruHiXFeTrkaDJsb2mPx",
  "key18": "VnT1HDHANYVPaECsovG6Apda378fNTBP7V2fG6p3us6hpebQ8T2SXs8V5zKzjsK3jG1b6NedRoVBBYJ3ddCeaHQ",
  "key19": "3uefYpa3TYhFpyGf3fzwjWBVtUyAgZ4t7BiA5Zo2zEH3YhnSx2bZurdpC1GsM37DSciR2VfS35pLoB1yfSwfkzmd",
  "key20": "4y4TZNzcWJuqMFG8UmwoFqDVxh6Es8S74uxUANaeMaBNgXe5fHyfQ4eLfcL9M3gwduKMDZzohPx6kPwgu5pXCa5F",
  "key21": "5pSrpgztbAJh4w4Ann8smkXabtvG68kwbkMgb9rZwoLMQYv63L3gmXFhdqUVoMMshD2XtGihexvZWtZZNU9ej9KJ",
  "key22": "drZ51cikvuH5RHjNrrJxbk1LVSyL3LaG6gybtKab8HoNexJALPiB1SsE6CXZ4TdUPs5bbUhpE4yLpdaddUgieHd",
  "key23": "47TdyCX4UEPq9XUYFPrpEGbGs9585Cd6fQwBFghUqwhcgX2hfHaT2BqurH2jmA3JxNQXDf1uxVVe6AANjgAG6g2z",
  "key24": "43YF1jdVWSzVsbMs4gRxGZaebpKM2R9mJA5wmzbSQYRZpQ8jt4uwquwUhTjoq7vS6DJiLUWFwhaAbnATfPVRSBfg",
  "key25": "3evkfZBoptYEDFQZYiDFUBMM9PvqJ6ZfjQKd5TUVMe6EhdjcMtp5QY5AJC1KrPhqGHhCDQPbPWfQ7QRXZKoKSCwZ",
  "key26": "3pA5CW1gi5is7hT9NKvo68YT9ceF5TLju1Paprx6bpw4Zor2twkn8rCxDM6BqsFFRDHxaVnqNMm5w5KZhTSMdka1",
  "key27": "34HH1UmFDdatpsjEFb6poYA8mTsEwugxZ9jAZWZsTvE9GAcFKLVTqarNc4hfVn7hqudhc6AcNU8mKrPJtSpNpYys",
  "key28": "2o39rySV9XUDAjfqZhqvJxzDxsTtzvGtNqSiMUBZ1sB5mue5QeUdGHKsRwKsDaHT3LH7fXfX4X8xH7fAnVa7khod",
  "key29": "2Raj5rhETGxAjq8zNqarstr84uQabAqHS9BrB8cyT5TfeVSHDszR2XNaX7Rbtc4kH53suJBLZEtRqi2jFdaB9suS",
  "key30": "2GZ3CkD4od2YgfyE5U9Yt2jUN6nWXGYbH4P1YaQES9PDJPczyAmdPDxw7vaWh5Av9iVZnoZU9DMLQccwvSVBWUMW",
  "key31": "63ApihY2aKhKKgmpdGwgEUXStp1WMBs4ASUqHgg59mxVDa3EGqVfMstKvMGJbuyaGBx1pYqgBHdr83X4YxJLC1xN",
  "key32": "5YJMV4x7j56M49sHkn4nDzwmuUK5hPuY3iCh7WEERTox9HbrVAYJHTZLhjbKZA2wvKwJBiuxtquPUqyjceWwgT2f",
  "key33": "5vmvNtzSoQytQTsHfsmseQXz3VHn117p9XQTVsXgFGGntrET1JRsh86c3VDupH8AV8dssWtKvZkWgTTC5C9dR4B9",
  "key34": "4hMuYz6rXFStxUKMPCxKzdJ2paFU15wtvuwSMpQLotNwweSQKUVz9ehYVZHCPyr6dy4ncYGoYn6XRERbRH2xGZTM",
  "key35": "3om5dWwFedxR3ZBWjTmBD2k2xmyfiGjaZuGyNtkdr9B8XJZpX8Eo97h1TXtzrrwHkCt5nDpGv7puVKp9PMR7myLi",
  "key36": "5R4idMaBGjmMxBkHridmgyhHYPjJog9FkZZKGpSvkNKCZPPLUsPCXP6hrhbVe8Fv8DMQSEY9qt9tWskU83zAMq9V",
  "key37": "3qcV6mfgipAhtUti3oxDbNUXDVcWwEWEf9QFTW2dVaAsaax2QCqvB4xMjJbPen67ZXpDDxzrJTtAfdwXZ3zgUMoZ",
  "key38": "3DnsfC67Ew3JMYyv5wBC1yLWYoW2u3qBZoVfUQYnoC2wuoaVr98qxhp86BDpxgQRhbcwM8vbCrs2SnfxoDhHvRcv",
  "key39": "463Cg2hFHDUoWq2wR4UrMA7CwraHCvLXwvNKaGCUEC4rxDMz38YyhjmcnFjcVLBCKL2kf1JHjfsLpFYPVgCWgvDy",
  "key40": "61rkT4vQk42GuZXfxtN5RnBCi8STaAixwmF18wMNL9Ra1uDwgpKW57kMaT5qRWfsds3RVx6mCSvDKCEgeMHFtP9T",
  "key41": "ToFgy4QoxXerNKacp125VEcEJzvawu6RLtEexK7YGQU5bWadWh15juw7qqd877KcEAUQFt5nTg7ap29UPQvAay6",
  "key42": "2ehKtQ5ypfhRm4x1qZ7oJRAHTnYaGxsse9i4wM2GfkEwCKN6AtefncAzsjhDcHBLy4HoG2xALtvPAitC48eS1fF9"
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
