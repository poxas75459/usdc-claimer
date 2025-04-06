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
    "2Jd8jZyZEjvVG7arCbAKfyFXL67TLRzE3JxE3GzqGjZ7FchxxFYi7RjDPwuYpu8fRsgXEFaFmab7hJinmWBbVB3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qp3rCRmUhGYBSX7FaUyWrvjnhopY2wrM8edZv3by4KbkeZsPuDJFjKKQK3MFa6UEPSE5JbMdZieHzY6kYxKSy6C",
  "key1": "ALXQixb3itbDT9TD5Ww3PXRWgbQmAhpSymZ5J5U8jFPZbnAPADpmi6qUwaDuvDRTcYavJh2j9Xwgsp3YYXJi5UT",
  "key2": "3U1UCxgWJmb6PU9vuaqmJyabskww6xuQdWP6MarPckoKxHCbNuqrj7TjD1PM2PsWwWFDV6yP383yWWNNiDYeoKST",
  "key3": "eZzht7UWD2yWCadbVB7vwYBZDwYD9GF1ppYiEpVZdSMqNPC7dG4DtRDiAiShxmrJb8TXX47yHHJDLLQgnYSWhrR",
  "key4": "3HzE7diQVGJExS2WitPiNws2W7DFF573gxwqDz9zBVPuCfpDMidmSZjchZzHCzvAcQFfqYK4tgWaUbYfxwTapTe2",
  "key5": "2U6qx7WeaUKrCFVvbVTLtnkSiz4hsaQkpVgb13zTqvnKt3J7d5DLzdg3EStPHQaGWUpXga6Mv7iNwtrYhhNG3AwB",
  "key6": "3aBYmSF5QWCSc6QezideTm8SAUTE3yBd4acXFJ4HzvkiZXD2p76PKGFvfwU1zQ3aPbQwVD4PQTaUzkq9QAKNCGx9",
  "key7": "2T4WmHScDGxoPSTLDC8PJEo7DuHJP7JDT9y7BjgvfVUuspK6TSgxsNJjUqLd6zEDsEavNs1v3uoekWQpoRWK4G4V",
  "key8": "4u4bYHQ7strXmdgVWGbjRaYgvgJa2pbQ5LLx7JNRPPyQnHEhBdtTWHow4aGiHhQ2Do9FCBBAk3n6siHLLpG6ZV2U",
  "key9": "5y6zie3YQeLhR8BgVorgLS9QSFShjWnsRDwoNSBSM3g7UENWCxq5sVfa6uHYPmBgMK4iXPbxcrJ8oQHQC9zxxXN2",
  "key10": "azuK8EwVbFs9Uq7WjbNV4C3aNukEFt7U6UyrohRSuPEi2dPgfBYYbDedCU3JatTniGUuTdZxxZXAPLAnBb82cbf",
  "key11": "3ReEo3or6gHv2CBJV4pQWo29iAAd7eMtgezcbq6PBtFjG3x7gsoD3dsAQpUaaJzMm9TfktHSd41gdazLSBYJ2fp",
  "key12": "475YQ84LqEFFxKZpsLPDcbXwbNZMhaAQRMXEMEm5B9DoTEUKaFY6ALEwpX7p4JMEq8fQyvcobUcmLeythxsFa8z2",
  "key13": "58zH12qHz2VjxY9XrKspseUt7Fvk1J9hNF1YKF2XG38acjvzmxebgXWbV4JrCmC977Udh6APf86EbQ4WZ9W3GrqC",
  "key14": "4rjW5NAqxcvKFLx7LZSoYfat7bwpwfeHKKihdN5T44zYNkTQPz8a12ED4JXyVWhNzv5kYyXXbotm99XyUc2y8Bw6",
  "key15": "4Moy3GuA5B2wiBCXysQEn8n8kbTd4t5QZAqj1bwS1Q3UWsDxvj2FH3oetGfobDNVWR7ZgyYVGrbzCpeRsgXMNEU5",
  "key16": "5XtVkCU1H5mF95aS6C7D5cQ49LgP7139L2XGKpsuYojatTc9Qd8WdPMdmPvbs5ceMvNVgQgxdCha67F3XACBrwaw",
  "key17": "3Ws4kXb2USmzy8v2scBCu4qaJNLSJL5yGbmf7jUbWwfcnfv1cTpyzFT5WaoRsZBDbF42JCa8HRmyM8K74JjkaMfS",
  "key18": "3K7Jt3JQButj7o4X5TbzgFujR6UkcojaiMiBAxU2Mzv57Rj2grjxDt5i3uzFLG6T73RbJRL51bY2ApU5YmWGbZbi",
  "key19": "4zFJhhtTJuFnDB6E8aE5cMzTZ4iYtCTDW7cT9JG4LNEHZ7CdQEtVf1y6MLq7Zsoy4bGHXqwdUHQsLgNpkduK3QA2",
  "key20": "3VR4KBn9y54Fu9nZDaarCCwprhPc3J8mwaRmzjaS1rb8RwxRhV6SdcGR1QoXK2Zuy5CgvZBGXLwU6qwHCRMur3bU",
  "key21": "jRCDgVUtXx3PLX6JAfjUjFEKLhwhVR1iR9w2Te3tcTQH6fAxdfnHNNSurZLgRfxnH2nH9b5jzLCQtWR6VtzP5UB",
  "key22": "bS1p3tmdDXbeVwXjpeYXiyFUrCCpbcTVYR5SD2ksU1oRRCK9wqcnRPN5uLorspi98WqgRXEhcxs2zQr7F5orn7Q",
  "key23": "4hhgbz7fLMGce5UjdzwgFojEZ3doLPpPC3NtJD99vTiBNMoeKaHvA4rUtw8G7Hi1uVZVMjbLw8RaDhsrsnyWsNpo",
  "key24": "2h27Ae1FkVCANTfiNgAhk1npvvnrxckGVVzLxp67rjbsR9FL9T9MzPKdVWgnPsNRymxEKAbASfUHxmS2FkToyB2z",
  "key25": "4ktkLYtWqbreLpfaZf4c8yMsuHAgPG3TxFp7vtVerdGcJgbhR9BNsrYVcakbdSVd2vMDJoYb75CP7Tzf6bP84xU8",
  "key26": "2r2vMP2Mb2X52PND1LKsz1fToWNvTBSMMxRiSdVQ4MbJanZEVsB3j1u6g86xfVFZTsiu55VzHe6sxj9xeQmp4hjB",
  "key27": "Rx7nbfre4gmWkGWreZAPq1SkVo5FMJ6o5RLR7PLwxZhHvGn5NCr6WAScFiFHyUueyLaGvH9pp3NHJck3j6vLjie",
  "key28": "4pyy1EoZs4SQaN7CiVsuUi5ivGMbCQQxHXPDdrLh7f4raMEwa6XykukrGcYF5eDKESai5ffxvbh9paq1qfVtAhrc",
  "key29": "5h7DWveya1vPmNygEPmMvSYQXjW5fpcL2MV72HgTqUWTVNaYDpn7DonxqhEGoQZbGZpe5n9YTfTp5Yb8MUQSgzFs",
  "key30": "3T5wKmkXuGRXKBMmvHofVQZQuHFD8xFhf83H1u7pQmbZW7M7rrbe8f9iMaK2LU5FXL7UvFqmCiyALM6DavMecSRc",
  "key31": "5icsex6JoSHPaK9oFjyoJiTW3BbG6mVRLoZmLN9isHKzDgLq3xLAUwQc1PQWjeqCJgVdAUJ3JJ64TLga98XR6WEd",
  "key32": "3com4ZTyA22CPAsMjWi2SEfQeGcERAKwo5sYmt4TgMeWxnQatz3VuQok8mNUfUpkDwknrVJmp94xUXzdBe88wWp6",
  "key33": "2TVYkQXMX8UAmqwwD3Gt9U4ZsZyF9EFYojM3ktDoHaBqH6FXa1RanQbqFB5FDrgkYX5x3ygXqNpmcrqJpeZW6xM6",
  "key34": "3impRuUK1MgfdCBSkcTuBy3vgVwXAUQ7xUgqCpRZLtJJ8xSKCb7cU8Z3aMetFXAEHo9U7T13tD2aK8jLbhsmsfeS",
  "key35": "27EXy8uZeiwck44CZEG8Xgg45D24GYZNx1jJ5fgjtwjnha6fU9edFcfBTA27bERPjdMVfzUPFpY1Rgt3kx8XpZYV",
  "key36": "4awCr7Ueuv6MCG5FQdoaEtXesgcAzwKAUFDfhT7yuFvopw9BfZM4WCbjxmDVDQFaB2LFnJoNnZcysQK14nwQvZQ6",
  "key37": "4zEQo6HZzLL39suFgHqZN92GjZcG26XLNJMwBsSv4o9K8Qe7uEcbyUuTvai4dxZbV5NdXcz96NmtGhgZfaRSvYMP",
  "key38": "3LERJCkoG7bPpxpCbkdvatscgYJaJaRFBaXfGRrrai8cVcc9rsJiUjYZWbVAmqzWZqZYPqHkAybnzaRVEBtp6Qmk",
  "key39": "bLsQcjoVky9hxsmRbJiwK5Bsgg3HG9yHz5eRPj2CnpKR6N61sfhEFvpX9tkbvH23L1hpesSBYGNWv8v6rNqsFGu",
  "key40": "Jh9HvAfxNFKo8Tbx1qAZNtDpk4Y1dgVzsDkDhftBMx95GGUFspjYjaubk55X1SsA3hb8Cz12kceLXtwPhq6toP3",
  "key41": "85qMbzEw9jKsREtHZznH5hfuXeB1VoaPqdxBjKkPUyHvcQGQmHwRrcM67CyZ3thGAPoMNECb1oaBwTvJyMteX6J"
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
