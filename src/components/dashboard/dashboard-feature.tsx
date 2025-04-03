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
    "3WwFrS1GwF8fZobQBssozwt4EXVWUxvdRk9ekW3hMJGhiDCaRn6ipBcvYpd4W44M6aVBPHam54snvxESFQ2wx8Ck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45DAWgjZKTXu2pnfuHzc8XYvEED5V1p6QF5LmdcrBCMahCheZSSq8iXQuRWxn68UyMvSKcgEPF68GbSqxna5izcM",
  "key1": "3RPM6Za785BPHu8ypNU4APy2FHWJbmQMG8rtbPkj9CiFvbinMTRaSmaGhz7RjH1hUAKeP7SBkwqxb9mbDS5XokHY",
  "key2": "4pPx53yBdNfmTe9L1PJpcZdc927QdtKFW9nNoGSCQdgroBh66xLDZdepf6x5T5A9WWjg7tQPwbj4x27eR7PopPve",
  "key3": "2mPBMQ83ZGAn6f7MMSjwewG7zDrg3zCQyfdd3cT7v4izSkt7DaWhQUt8mTkrq2YYeuiaUoQSWD7nCudiddjH3sN9",
  "key4": "2zLNn5Qe76eWGGY6kRYVRmigRPpHvCFSirynE8keXW3ErVkXvkywFXDpTX5NKU4UwNtxZPhHTsf8Pj2p2FZZaGAf",
  "key5": "25gB5xcMnWwaHxP78jXuBENthzwvuLn21ENZpUrQqtSGm7z6hrze7bkRDdookyapsZ7V6goAJPyKc5kwck9aTV3E",
  "key6": "3YKEpbhy6WfHHv7PiWj7mc1CzivPN2sFEaM6sasuBaNnaH7NYDgKwD9mWPyXdq6MinHiqBtzfd1VPcwYJBYpyvHq",
  "key7": "57U5a4GAuhpGM1JqTZe4xGVGttq4Ewi41DKS3JujSMb3HYBgQT6MHwboa8hVu6PqT1gxBPiGm51Wzfb3bdAC348m",
  "key8": "q3xuFCoo4Ae4a7GY9j39SQeWeXMGLrTwp87Ep365SXEMGv9zNN53paGzJvTofzUKd4QRrV9R2rdDBh3p1tpgNyw",
  "key9": "5pnRuo6FrMe4vryQ8m2hEQ6PHw4u2apd8CMpYLEFubam1MaTA3mCcZx5HSiEebvbELVMBLyjj95uY5nz7xZhTtg3",
  "key10": "2wFejERFEVFzApPJRhFMKZ5FwC23a7Mi5c6bwM7Uj9QauWrX41WDMAtZALAcuiqHbsW3gPQuATg5LyvtwYENnhyL",
  "key11": "5Nxuh6FyEwnitCeasYtWqfL6moXagTHEpsSDzsoUcL4dy7GcRSBAtV43RqxZdzMnfqSbfzFjCTrsVkFPhWB2Xk7k",
  "key12": "5ajBt5f48UFr1RG64gE8WVinVsxZLXWU9F7VmhScVYEc8mHUqwskTntYDq3e1XPkiRTJfZZLF4C7RX5SvBYeRhZH",
  "key13": "3riHhF7rd9ehtVpSEGMEwjXJ2HkZy2KcqQ5Jg3WKNSzr9EX1M3Yr6JqB33TifwV8krqXd4fjB6LywUkPx4BjU8Tq",
  "key14": "366aosWMoMVi75RaqxJzPqfsFTA1XMMEf1oBntfnuKc5EXyaTyzY5HpA7hX5Duam3oWJ7MKR9nK5w6G4t7dur4zF",
  "key15": "oTyk6y5MMGaLuorw3UqeoV3qGeoj2PjnzU1cSMRAxLpZpvAuevda3NwwVKVzmMnNop6QtzLCCyFhEx2w7tSwmBs",
  "key16": "655oTkHwcBLeJpeJkdsHLckzXpYzEGU3y3Qq5KN5Uc3Kk7mcxCHDqiX8jq4BoFxqZaPWNZMiHUJmxPmd1SJnfhRp",
  "key17": "FJFtArC9QLsa1kVGRgV7Ert2jQMRVeeQEBJ5PCX2HmBqm7eybaSDGnFX5yPkNMNWfLoR2NN8yyvTHJ7VZxFGYQt",
  "key18": "67SMksuPe2Mk8CXfsakH7vjy2sJT7VDLLPYoSw8H23CD5EmAewrY3dwKFtYuoULzNrnbSMLEeprrse4YnepZqeWC",
  "key19": "5iR3gYBkKBoxknw6TQSLi9CokUxzgXkchnGBKMPGzwNkDnytRe9Fkjps3MayJ2akdC16HEejHviJ56MaVMirY7ff",
  "key20": "omoN1wcyom1ByDJKs9hLXxDMg1iVMnwFTRtT5JMvhuqX2fe4dsT9KHL6WH2n9jjqNqQseSvsMhMZgWpQsZc3wha",
  "key21": "AMYJjLUgftu8KduQzTQg1yZaPUrnfS5Dod9aZcrXdYSaTP6jyJ259LPUAjMbMndoDA1JphyuLrGA8GGAaZAviQu",
  "key22": "XXGoxTG6ew7JBNNAvHz4LRHMifyTnpGnPDowsxE3vkcvSfEGnA3grV9JFSUnLK6Qo41kLCd78soGJ6mvP5ur3Dn",
  "key23": "3gvG32q7GELeCokAy3GE83zZ4gBmVff6o81cBz5WVycvVS44RH1AWDgkNRbkgRyPEjqPamC4AMX1BTdeX15xrbDX",
  "key24": "sdym7F1Fs9mi3TtMKrbpTxfXbLrNroY67Sc7oLPC8ig69bWCsU1unXs6bHmjhHA6t2kQiVH3YGKNDwNcFuvJbF7",
  "key25": "5eEZ99DCdPEZTcq9aDnYBYJo2qwawC25znkZYzWAzVLqd5aPb7MsKKXFpeHu65f2ZFQoicLPQphf8EWwwn6u7mfM",
  "key26": "4oEr9KCdbD4uUbskZb5nptiVhU4bZwVtcSHrQynMgzALGAiAY2r9tHvPvaVzNSzj5oWZqL7sfocj8TfjuK1NMnmh",
  "key27": "4FGi1aRi21Z9dfgwyPtz8hC1L6jrx24inGJPczrSoPJHuo8Cah9QbMd3LhLXRnejD8VJAmPKuLuPnHwuZxp3WbNa",
  "key28": "5ZLMbkpw9tJXBHtVYDmWdhQtfda8u8NfHtMRbbpNSxBuVh2JoHxTJdkAirL2o2ZLg34uZpQ5pBRegZaMbxyrN4x8",
  "key29": "4aLtuhmuqPvifHYWMvdr4E4jW3wujkMfFzdFKh96MSyA1dASUiV9c6A2FTayqBnBVyHWJ47DirbcHJ8KN3Qm1MXJ",
  "key30": "5PnVYMai13M4n3W9AppYjcsMFVYuko5vU8w6az8MFKs965ReR4Nb1TkMwrx4LARdViyCew3d3WKqtf1rsBDgw6k4",
  "key31": "3TYTZ3phkzLrcVTcnweirpdJhshVsZJEagLq9zVwnZ83c963ZzSggeTbRVDFQX4J9uETMkL5CqwPJDUt8tDpmeug",
  "key32": "22W5dk7vVkXrGwZf2oUZZadKAXgK1rXERbgXt4ezWNuqtJm2VXysTKspGL3usNXt4C2MgdtTAjdQ6LS1LxWBVBpC"
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
