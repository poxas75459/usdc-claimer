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
    "4CGWSZiNAdyt23ooGaKjFcLJz2XKxSzqQiMrZEZqtiSUbwHUq7uRyAwbbSzWmsYqddq6fvgaapsbTQWdjL7TzfQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uaqNGVHbVHHuBWmGkES9L4PKdPGc6mxvzKwzw4V4BeyTvU52YJdm4QkF7GEEaFMAp9AZhkeY2HbsfMm7ehR44Ts",
  "key1": "5jQw2GuHiZnSeygypnpsRNvkkaN79aq8tvNJuNkFgLdnFoEHzGzUcTU5Xxq3KZ3htLtZKt9EwVCdsaAbWdSXZ9eR",
  "key2": "C7troSxVgVJEPWp3VBMd6HNUjFC9uBas4HcZEmC3TmCi6KiropuKeEPKx1ottE1axVK6BS41xSBVABgt6fDY62A",
  "key3": "TLjwNNmGESDJFcRFCxQadnMj2TgmKfE8WGq4rieRJZHB6A2gd3MHd1kkeGGE8TMoWimjsDRxieLNigDFKZ5pA76",
  "key4": "2ZCGKcS2CP19kJNMCN5gheAinMYxCBmP48RD7io7FQVsgunDLa3ryA25E2amJUR4tSVQzVJRbWmn1oBjUbD7AgU5",
  "key5": "49Js7hnLo3u9TuTcKpzAFYjxYTuB5KgAPfW5FW44jjMhznGd3dThDkAziT2htDPftN1eCz4wSFfofMGwKScmAjvH",
  "key6": "3CTatLAHjvc6TdpXhKDd8yjCw2zWaR8HCE3T2WzzVmZTyny97RuMRaGycsnvEf761iPCF4oMszmJDu4aWMgzVaGt",
  "key7": "anUabaVGBi4wn47qk1BKNeoMnLQsmNiPWCdoWuhKR3Gck2yU8PayXhRrJ5ERjffJMvnNk3vVLjcayYRyVyUXRjN",
  "key8": "3otYMwxHzonP3qmvTQbmcdSk7Kk2F8ZQjwpjWraK1MZ4BxoAbZk2R24Mo48Zu9yq5hB5pUtMwj2P21uF5kDKPshb",
  "key9": "5GHoTZjczYUSvx7AP6yABryPfcyT7sMJboiUs6HRMYUjbv4eBBAMmWNMZ4LC81vVeDaEzyrVmpSZDdMv18j15Mot",
  "key10": "24h4yw2pgXxd5uYebRzM7nuFgKn8np4wQDtQw82cZ4wN8fB1aGwchBj5y3QiEYjxcbGd6duxd37yMLE43UDUZyeN",
  "key11": "5FUDg3uLNoS1qSAGEMhn3S41jVBFngLbqFxhr7pHeoUbugqTAnhWDy1RZi3Z5PSazkwarVLshPAZngRsUj8iCwjD",
  "key12": "48WJnms22BekAeEMmHPD7MkxrSsVzKozotwF6F1r1KoF6ESFdn8wJvhSBDxfzibppxKwK2DCQBnKEZfLDckZ9SPH",
  "key13": "epL3Ns4rcGp9fs5vwZq53vUnGMLRXJMP76Cvu9iKdftabibgQEfDaW9Z24pUQH6d1oxDRQTZFwLiyvrMEtJ28EF",
  "key14": "3K8H2aKNtLjYsUbncdp9Lee6PTVHUvG4PS11gL76j5uQugX41EgJJrBMt8Rr7M9HWNP72BAFq1zS7kyHRrS6vXHv",
  "key15": "3rrCzZVFR9a1ozen59yKUo74NVLoffrsmNGcJbNResBSbmusxUfmG3m7RgyzBiKGtesX7hZLWg8XQcaH4Lr2Qxep",
  "key16": "3jpP7anv9SFKeKb9jHS54U4DBe7CC5QqfXyvVEDi4oAdcc7DXqDKmH5m8e9NF38kCNaDrutVd9aX9quWaP4Dzcm6",
  "key17": "5LroFGrsAHKrRMYgdW5P1mAaU5ohqZG35LzDwZrSAL4ZEZFpkdoVaS5pdUq9SVWwXoAAWTQEVesZTEJRtkt83PQR",
  "key18": "FFHKXUruWN1Jvf63Pwhzhi4HpctvPDCHRacmyTRGYHkRt66bg4qLQLk79sdKyKgdRg4wBsuTAVcDiTaVnhxNj2a",
  "key19": "3uS4WvpividsJEQu36xLTu22JzY6pHrrTskEMCaHXVBemABfWsgG4wpRUnirtPbUKrvkVWtXF7HJSf2Kc9ERKs9y",
  "key20": "4CmqLiAwq3huVmnaYhEDwFsnEPKKJbyfgUMrCApvasJd6jHer4Fdpm3jL8qWZCLqs5VnTkFeC68roUmG8Tggm3ti",
  "key21": "4jpq3wxjQAzRHwEYh37s1w3YLjf7G38qE1AXdLUuNnqzJoCt2nR9dhHwdwy3JcxvLzrw2w8wUZ5p5xLNcrrZ5yn3",
  "key22": "472QRepc85fKAj4rUy3n9AW9xpSJ9CrWPj2MNJVjZTgzJPMSMkLR9VSqMSanDARDXwiBz37JmfyjNJepxF9FJ5uH",
  "key23": "2mmLYAbZpHzkZ81m3jv2K41BzRvHtpWBAWFgsg1CB1T96NNDDGa2goppRDSJCJv9u5girBcJ1uzJcgH6PnVpSDyf",
  "key24": "5yEuPXsBsYLHAYMGGygLNpuBpaC7E161GZy1tpc6RJ14C41UQSwcCszWBSQxLSjdamF9UATuGg4KoVf6M4mawMTG",
  "key25": "2tfkpGSd1cBJ9CJUTTJdU978Ey5X9JHWoSV2VYM88z2tggv6WRsTK4ue2vyuyPg5fkBFAdn4uHGsvw1n3jarS5hj",
  "key26": "33YDqM9KF4gKMaFXXxDhr17BcxLQh6BCUchsyUiELNxcqBCUY7vV6qx1ZPNZtEtEwJa7UFhu75AkKDytTnwtpVhS",
  "key27": "4xEhfRD57JQ8QJqEA7eEV9GZvStwypqiH8jr53szD5wq6eA8P7wrL8uKypEUJn35DvrYoegfKBmtfoDPiwxD5SLw",
  "key28": "GZgVi4V6rkGM8H1P4a1bbmsSrcAa9oggkYJTMBYx8gtYLdihDoft4qhVyvMXkhQ28AhM3JPQ19BM3mtDGicnA6o",
  "key29": "4jj8o4N5ySwDgpeCekXsC76mnQN2KCPeGNtW2CvBbnWZHhrxuopw63KxbqwWYSjS1J5JDAEVEejhgyaCPdhzPcb7",
  "key30": "o2cHMSe53wsqGEiE8wezmuB14Nsr2iXHFpZGZPYZ9MmMKvM9Gs8ABV5HqRHQVLTWBtR6VW7cNr9mwgeKXbgp85Z",
  "key31": "r4HMLtmRqSJJPg7UCKGcKFdZzmq53moUnU8FPAGYLDQV6q1ETr3M7bF6uMsuBu3L9UgppkmMXjYix1LpY74aw8b",
  "key32": "3NCzkJZvFKUrD1NPvHFt8GypRswi5uik2XpfzosaU8GZePTUsubApKUa3khiTvfzewf3FvZ23qNveiKNWBZYUgDc",
  "key33": "RJhRAMQsHXjPNvoNZ45ryZVkm4PaqLvGbYd7QuYRnaztDu1jwKQPeF7dhd8zu7tbQwVoetUNgw3FmgrQGPFmuPj",
  "key34": "2JsDqJrW3yKuxn2ETxbEvEu3u2vfFjPhuCRYFL3G57tdwEdZDArr38qZpJdRYrAK5FWjNfendeFvEonWt8NbxdSo",
  "key35": "4WJUQiuJbUHZ1UXiKLR82DCTSH11kUYgbVc7eEf6efKSdtwvtbAMyTNxWHPZ1S9evPMQdojpWeBXTfzkGqba5uvL",
  "key36": "EKwsNHD73EckqSh3uCH93hY9e1cA9BjJvMCSMxYsuPfW5jerNLs5nkW25ReAskTWbSqCNGqLoqUkLLNN1BVvjCM",
  "key37": "4QYrizTyScNv6Town47kp5mE7zd7jBHb2RKHE3jFqVaRvE2vsFwRbPR1D5dVyKdB1FTJSd5Sdf3mpLtVSujA62Nt",
  "key38": "pwSKvfBzCrWyjvEDujK8GztHMtiUT8LraAoWQY9qLkDnzPVhXoMXA6oihVk2Xm2DNGYo9FFXhXwHhCEnjSWuVjT",
  "key39": "hcagi4rGjUbSK45esVfK6WhsmXntF15mbM6GZ3kGfytbCKEECK4FjF4a8QxwvaeHw6fZfoBQ5Qtu8YFxVMzq61Y",
  "key40": "2VihnAkvFfueMEudo4bRLXg6Q49FPsdSu1p6GaRQusLCFc7XUEuZD9Lv96ELHHMVmiXiRJ7JHALLD5yxJMruGB4A",
  "key41": "5WKHHCLN6TnbDs3npi4QLdXFtcFNvdgCVeP1ZKQsoNgmASXXJnGTTQTgjf7xadnaLEApEwc1mkWXk5SUfVde4WfX",
  "key42": "5aTG3PtNXq3b68MRuv7iW3Eiu7nasS7eNk67NCqP1imY3Sa4rebyPxCzXJhV51DrHohEBByCtJecDMYiFvKwjiZd",
  "key43": "3p6j6JYdPHF7PdtWFwBjM4LkeRrymqWXCdwvdpKHo93QbyrtciDT78HTQ2QxMJDvsRfy1R1o3RkxdLABAH8KGKXy",
  "key44": "dDhXzjbUg1bYCZJXKfus467jyPBJHXRBCLpMNzw19e57VkUbBggvJqWUGPKVMxCdFy451RN43X1b1L2dRxEiKdm",
  "key45": "5nH7yCTHC8iTSZxiYRtLgSNxRWZacz95SyjhNTQJY4k23LpUViyusHHc77wzDJ6SshP77F8t6ecfPg5DpF7cr3Gm",
  "key46": "4QR2EjtcnLLpVSkE7cwe8kfMcsszKLXPzKpk78FYacW3N4Tx1hAXHtAy2DsxnRV86Y5c1fAPeVCdC874d598E6mw",
  "key47": "JHK6rSPMx2ruYDVhSS3XuVCFA3BhjHjR2bxcg8G6SMGh9uGTAhjUcwCv53vJ2La7BhMFqPKM3dfQh8gcCQkZYEq"
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
