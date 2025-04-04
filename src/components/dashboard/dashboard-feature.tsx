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
    "yL7VrSatYeTiaZAeLi51yUWVyWKL6mtQ48oMB9FagVeVPn4uF8qqMLbCz3TuiEVZR37cBj4ue2wAw91iQModYbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ue59bxS2tG3wYJ6Zv7h8Q3YzQ4vLAzC7eYYciZLpQ6pTm9ebuKyrZhxtavwpddj5ssJxt9vqVU3CB9yDHadPBNX",
  "key1": "2XBFs3YcvYq169Tq97XMWZWZCqeDXHsSJn346JRkMq3jjnrApoWgTVfYjS9GG2cZy6tqE4nXTkZxjXKoAU2pj4rg",
  "key2": "yKu8jhedHRbsn6nHryGeRBHHcpJT7n4qx4YP9kVNqqkboxpLpv2ngpqaixJj92Un5uqg7nQan5hqcHhUoHoytvv",
  "key3": "5SViHHvR3UNPSpaYjhER4LDLrPvWSxoP3p7mZjVuAmyVUD9j9r8DsXTFG6jQtArpS99w4SEqk4f5969smFnq3GRa",
  "key4": "2Vu99au6mDKQaueCcenAhBoEFGQVLVp3QoQFM4P9bv5CZ7taMa2H3PqNTMZDxrsGaVnqHWHbrKSB5nHgAjXiiyQL",
  "key5": "4cQnyRto9CBRNkWfoQTBdBsoHYWXc5ynSrWGTX5QU2RaFjMsZXRLYDa9Hx6gGDpLoA3sX386RktKNCNuN2WxSPr8",
  "key6": "M7jR6gFbDYTDU7wRSWME7HAtkKPjYGxAfk9SsVBMLdKfYBdU8uWh8WQhhDYC1ASP367FQNVcTdJD28JArsRfuPV",
  "key7": "zDKWEdSnRecwAGvBGNuRw6EMLXPfEm664dxNucDw1TYiov6Dz7cC1PoZUba2PqP5R9qsxzayBdjAQAKRwvNEaBY",
  "key8": "2nWvEoiZDwzVv3pM3gyop7LzpsgYA9A4JYhCC3aqERjM7ucyqZqTQJA7TSwYt9USWQHmn1nGpzE7JWZ96NjowoJ3",
  "key9": "3dwc4AuQMDSZa8Jc3dqHjQNFV2F4d6EqNCpxFpL1Hkwe1cvfSXypxKSRjL2PZuHLZtZuRVg4BwyxngATQzuoRgJV",
  "key10": "5Jc3QxM9my6YpivpMerPxffznQCiyU8nPFqWZF1k3okzWe8GP6Z6ZrBsd3jdBzEHhNHxizrhEXnwHEMCn7bu7dAt",
  "key11": "5Rsxe6NqscnTyutCFRHZhmt98rZzpWqiiGMNrY3L4VxsZbdSX9Fx7CncqvrqhvBnHTchRH5nGYwARju5Jc2n9vt9",
  "key12": "3hyQdWD2WN8cwFiP1HiZry4LN75zGp5526nVgNvLkk4saUwoUyHPaEABxoTE11jctSCmeAgH3pjsXkmVBJ5o5D7q",
  "key13": "5xsiY9v2ZHQCkYugSbCYF772VFSM62h8jdCPncGCvbApc8etTFxy7P5Lk5rF85n9bsZjVKWRatBLF4CXzJNRMcJw",
  "key14": "3DCKFtwwgKoAcRXcJJD4qMKoprKhtpwv9S2oT2jsSzgNMUTdhaLskRozezR5neZ9RKCUyNpqaCxL72LRqGTeVuH7",
  "key15": "5Ry7KUinePoWLrXbKdcX7HaijSCaTd9A9u3NTdTCK2y4tRsconA3GH8mkAAQ87Nmt9r4u5poubQr4S5gMAumC6ps",
  "key16": "38KtWPjL2bUmMMPRGjskvX3kUkSTYnierjyrod98dU3dy8WdNfPVe62mv4hCx71WLHJMU8qySRgYvS45DmnVeDvg",
  "key17": "2prh1xWfQ8pMHbEVy3xPMSzazAWELjz8TU6JLTg1aVKAxnr9bxpPSfk8SS2LTrRnTYfQ3m2nefRAHpMceBtsXaYZ",
  "key18": "62hYoAVYtnjV38PRUM5mFVjS6BTKGLHqzNdjDFeAJz9XCY6hFFsaDRrEEVW8LW2L5vdq5MzrMWxQFNEuc7t3AeMP",
  "key19": "23wr5z4mW9CVuUrPEdbrMFzaQqGrtea5jXurJGRe4PNRJYemVwMRYzckqBc9vKhfEyKnkNVeJCWX5zmpDetRC2Ch",
  "key20": "Yq7tsigj39VixHgZvKnEwRfQrnRMDrRCZ2gH6hQSJ4Bty9vHSZi8Rmw1kr7UgPkWV4BcjAmafwhZ94ApvvZw5nm",
  "key21": "4rrka2WjtPQwGU4kGNbYn5qWre8dwZvR2anK55dcuT5sBsTAYEQdn3wJHMp415EDVMASrD16DtTxYadJ2Sg1DySQ",
  "key22": "2JuNnksUq8pcMuudVMuThkV5xJVsRn3VPtbpsNiwbcLiqq9pXc6GSx8gVgUKi7ezBSYWhNDKMsPVVwbMTQUj17Zd",
  "key23": "21GXdzQKr22bSKHq1R8VDiw2CWpPZGJGZPpzcW1EKWS3pC69eMPhyVhgBDyLWBKJ3N64a7qXVHJf4XdVD1fsX7nP",
  "key24": "2M2crhTNQ6MNm8aGbDpBx8vv1TpjzBYzKHyNKFwCpgu9sn9LenSDppbNE6Jpwjd3Bj5rF9eHHfS9y8QEWKHjkYqN",
  "key25": "3JAnVcqrradfC835EWUuz6AnsMLzULZjQjcTjZMKa4iQmAGXM4KN2RhQGVHebcBxY6hGW7aDrzPXUetVRahdYbFx",
  "key26": "5ief6T8WkNzGSYWbk3YajKAJnctfFFBLFEkiForb594ajKRsz1tGKN8WrTT1bqjY7GTN56JyTf8p4NFcJiwkLmgP",
  "key27": "5i7TB5MmVkLpW1k7bcDfiBY7k9aJMUQTSgrWCWCuHU95aw9Ypfr3XXTFYpbgNYZYsYyL62x2kaQeJwHaPmCtWcs3",
  "key28": "3Uj2vBkx7VT8WiKEpbo6jTFU8HZYLRxaMr7od37XqC2Yo5PSX3Nxua1J6EwmJGhS2J1diefReUvodTLDUp636NHH",
  "key29": "3G72cPAVwaJDX54EQY4GH9v2nQZhAs1gPaqU1wSnG82nwt5Qmba3ioXrpjeXyBnVhiaCktvKVcGMCRMKdugDxM9L",
  "key30": "KbvjwFnPuBDQgBUStd7A2DDgfenWcn8TYPjkMYz3aqhhEEf3dfrQRnNejNWFp5sSt1GPysKT6NAxygReAsGvHYb",
  "key31": "4rtzmT9H1T5ya2oeFRdvUwwm4BJuvGD2NDQNBEkdqrB6NN7tyU2KGLq5Wxf5RXe2AYMZswWKKPhpmVEbKguBAJ24",
  "key32": "3ERF4SiXHimQRyKS3emYTA5kE6GbCpSoYGssnSSwJKWVVS27iT5NmkKtspSKNy6PRXMiWaDJckh6knHejybG8vm",
  "key33": "2nxo5tbiMPt4pCXXNHHvrgN4X63Rcr73dQyHts3Lji6JcAJiL9gfQZPySirYQ9DLXNDs8PUSLUakq38u793ox4RT",
  "key34": "558vBjdTPcgqWUjAkQEmiFfwpKt1FDvi2ZA85M1zzWBV8PtVJXUmqpT92kHBk1ui62yFo1tXKnPTyWmrfsC2zek4"
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
