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
    "QY31yrPcJgPaJqyXN9MME8G4ajCg2tqdG4S5DaKuMjENW1sQK7wqRHM27VU8fabD32p8pqZo2bgZwYW5q8gtLcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65puHBjiyVQvEX33cXTwReWdpKsX5zgHBsf8qHF41wMEVfDKJYZdXpBFVKR6fu7b2JFsMLVRsPWs1BfuXpt3VxXi",
  "key1": "4reMaZ2oRNwc6WaMzWYYXBFymR6PJfcZq2xhxBwjBdTajFfgN3fhL7P3hbjtua2zLaPpgwyrasKBeyAZ3FtZbhkm",
  "key2": "4wJ4gCif7dBJ3wjubLycX4Z2wc4gGiDFab5LSbzsjTixUJdSFt2hmWzm8vdsKP5MK4GemH1awPWKtJdMv9LQMRd4",
  "key3": "4pu6HPiQNs1SoLSuT9tSRrqtGqzJAg84mWSYqMh4VpheZi2ohkiPpRs9pMjNCXHDWS2gDTdEvXPmVChKqRsnW6go",
  "key4": "49rAdYMfa5NzroTpzD7Y1U1kN9Nj6QngnpeifdBuUdWb5ER5bDHLPnJF1m7NAhx5cxp9SaHAJEKU93cMtSRFhGDK",
  "key5": "2C7riV5CdXgiB4T9Wrmd639w3ofxWBUW4nSX4m6afxa2eaCFQGgRpd36SnUf2dTfNN3EnaU65FitaBeePJDxwYco",
  "key6": "wJSjGGvhBqzJVD21LvF5a5twkuFWVyt61REDTFEjoJKeU4XZ68uYBViAzpCdHJpJabn8acbJNx9yeHXaJCGch6J",
  "key7": "4y79MFSAbnzDh6BEe1tV85HQnRbPKv7V5x4PUs2w8NQmnEgaadRsqRdEn8N1RMrUouY3tTSmaoSipTBgNKbga8c5",
  "key8": "mDBxAgHRLkjJ4VJPUrhTvMU87FrcYSaewjpzkt2Qr15kPxQVH4tHMy2HZ28CtWW6yupxFWexhqFiLu1fhrVN3sE",
  "key9": "5PTVqrzJMJbmde3FfX4SdsSQL3sqfc8BTLg1j68FsVL1iM9bZ7BwsBoY3dcVkGWvBtvmCA89yg5fBPMbbeF74oDk",
  "key10": "NBdeceas62mJH1DRueMhpCrj55W5o4xXk1ejQzou5BS5J1h9sirtkp2LDEaib3E4hMUmX9YJY3teMkWDHzr78CK",
  "key11": "3YBE4Arv55ESmM4bwsutXHWQtS1c7zsegtU13CKjfJJCDvTwZpNAyfhHvqmvrrDkmgkuwraYL6qiS9CnnsdkDEUQ",
  "key12": "4NdsYRfaA2XM3PB7YConmokudyUPbAY7Pm6ugTGVt2Yd5jbxxdmAUecNNW793VkKVMCWB9XV2EYxGhriA916cLyR",
  "key13": "169Yss2d3JwnMvS7VoR6s23Q4BCrhZKNao8fkafHyFYB3PvAxX2oEkESZ5joRv4gwx5nrizHCUAYYQqzfXkZ4ar",
  "key14": "nP99dij5yR7cPVL72uvHGAdrdKGShr2dtEJaTxdNpWNbpaDfFraiVzG2qeVEmaLNMNzQAvehnAjjdR8zBZGvVBC",
  "key15": "4WFn5ivpkU67w6191ThNukGvSFEtRKQzpXco16L7ZGMzLhh7zvjkmG1iwZh7KqsiySPweQfS43ZJiBXRH2xSw1sB",
  "key16": "3d43Cj9kZw9JPo5kGgAvYQwrs9eYNnBquLPN31usCqudpmayF6SiFDmFqSdtjfc97NM6t8eeXFMiUVDonXt2ozbG",
  "key17": "45yh1jiA7ByfMGox5jqwfhSa3F1U1gfnTR78PEAWtTDeZhAFRnFQLovUJ61Nu6d682EN2VkJ2cv2xjJZEjUTXbXH",
  "key18": "4JFPPs9P7Pd16MaZycEYiMZgrSd8RXjgdBa7FCQ71dhYgJtaKF4p5aJupXSDrp5CT7b22LDeZr5eyZ1UMG2o2boP",
  "key19": "3hYHntMMM1QjdnF2YNssZxEiCRSB6xAWFztVhUzRrgQ7M4qoSEwzGgHYLwstBVoxyR1tcEvVJzEybHq8szzmeEbr",
  "key20": "6174gFNL7uHPbpvjyqFtbsevZdgNKM89t2UyFGKoLe4ikSD4jXgwJHnQibLLE9JSwCMuFPzzZ6eg929gPjXUdrKL",
  "key21": "2PfvgisSxN51RRfteEiRXga88MdyctHGqJMddMKTyFeSEdBQSChz7D7oh9ACP5r7oXzEsWsdXfiZj9FXihnsnsjs",
  "key22": "51tPjqjd4WevYwDSLKqojDNcVQtB4hxCDXchfXMY3u5atZKTmNgssEzugWzxJxJSuAodfh3NniXHCpMTftGnZEnq",
  "key23": "3jXAR7yGtdHwzLP3dnhgvzcqMNjGYSo6VFYf9Q2Bv5wukVrR7U43PL7Hzgop5EXm9dTm7wQ7KcA8qk3bg8a1tCqk",
  "key24": "3Z6Ss1DcX1HUCNnUvg8pMjboZx5jpKQLXbCjSwTn5itEX3c2qpVyHFCq9ZmbhZn9CTDNj72HE1UgHW8Y5eJrxj9p",
  "key25": "2MZdXFx2i3rnC4XqY1k6XnEmv5z9ipNZh2niyih4SB4RY7Vu2K2MgBFvchUT83Bc3n1coihzYC4kZ94GgMXQT6yg",
  "key26": "2CYEe2JhQz4kPURjzohCNXbekYsFRDA3tBKbrJj9YAPofsKUmDWPpm1aSwovKjgBbiyuxtjn2p9sH7akQDQv5eV2",
  "key27": "4K7gyDiE151i94524atkgrdCvBtUUeZJikCzxt9fV9AfwTvk47rviXbnktSa8z77mPnF5nG4Ckgj4impSanxiSWk",
  "key28": "hHooay3UPmWngBnP7haz86C6KoMxzqVoaia7i3UC6cwnYbpbRQ3spudtr7pdMBuAPMN1DcLNCwUGXLQQkKPaSUT",
  "key29": "3Zodg3eQzHd1Gvakw1jQd3UYEgvL2K5octGNL7PQQj5ui4XnG4xzVsYtHymeKSDnJF5KZzgPKPm7C9uaz8123uKY",
  "key30": "3iJb5zxRXKbVLHjXE2DXY6aXgtDnAoBiuqzpLXmUchymoRn6GoMAbtUeyZpZJdh75rkADSVubXCEiQTNemFzkmGv",
  "key31": "4rGAQszcc7jeXZ2BcqaWRjUrknEC3upMnqSNHPXonmaKTfKcuzu1i8dwaCV28L4kABTPwnoDKq4xPBqLXrQBVuYw",
  "key32": "3et5EgQazqvMc1jb4aCSCuLEQqtpBiExSUZ8kQyEyqN8aekzi1z5X33x6oWJcrnpiVFdXUo7feTYM2HnSrNqtCeB",
  "key33": "49jtLXLZjEgzPu8gMRsFEzCm5fP42xhDhrcdb47uoiCMAvK27HsWMH349958xmBwStmSwYs4SDsmYJ5AiQYCw5FQ",
  "key34": "5s2HYnHRruVvArPiogHaDS9LmonNDyTY8PfSMmSL8iCpdkhtHKPvCqwD75wVK6z11KFpL98MRc3U7dLZJPUdcgRd",
  "key35": "3U49tRwjBT77uhKoHcNK43iJboLKiQebrYyXAKJNUjwvpYuRob5SKnYMVZAZXgFw4FQry5HPEJsphC35eFGZzogp",
  "key36": "6vNUPWpeUoRsTRp4BCthnxu8HRinN5WyFEaejt18vDukKXqRUnnoWQ3x2pKjiKvv7xwn2nnt4t6tjKM2TNnWbFy",
  "key37": "aAen1RFWChy5XBCMEhcGvkqGjBZXJSvTk2EzhkEvEB79VqZjpsu17spBiEB6Ws92buoNnxCJWmnK2bbwTupsEtz",
  "key38": "5jKYm9krHjkq6fhoHTuKZxWfhaYJhRqBXL94WAzSJTiBmjbJLF9sAm2UqJUUEKER5QP8pvD3f9nQ5vpWbBKhqi8y",
  "key39": "2LHqsqZ9B2uqMioinEqRAzL33M5ovN4qFSQe9qJhNCf23GHr6La71kPDW8q5nWpF9AA8YzW54TwqrdMvCdUq4mV8",
  "key40": "3YL4Rh8Umx1kkUkV5PQMcoZ11TLZ2RWEVhrUFwfoHQcGgHZbaobBmVZmuHnaUamREFe8GdPPmihjG4rBKVCZBHA2",
  "key41": "3YtakzrJ9hGXU5xnyjjAKWKKn7uSyqHQx4DDShFeAEaX2Gg6KYPuAK569s5rMQtwUL7UWzyGFMdRACAjnqqsqKDx",
  "key42": "395iWzSAX7qK6yKdQmZxZkg2AP33hriKXPp3qcM5uYS5LRD8KsLccE3qmeFjkEDSYZ3FTSnKbq1VEcuPh1bJbcBb",
  "key43": "Zkc7Zyyqg8zUJm2oFv38u6hkquRXPoyqM19Kt5CaKhi21GLbvMSppZZ11aA2Nj2XpMFBR4RrDYAjjr49XpdTMe2"
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
