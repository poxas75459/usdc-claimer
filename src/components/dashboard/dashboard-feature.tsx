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
    "3exJkT5ScTBshNfyAij119XM5WMysYapJpjEoYjCa2rmwnVruEV9yx44B154TjhvBiaBrvZcEX55ZNDHAM4e3GiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qYmarEep9dxoDsCUbPYjVB2HmoV1NHgswfut7Z8RcgKk9boigR9inN2WDrDYt3MUCzXCRDwX66NWxYfV8yKxzqa",
  "key1": "QPzYnq92v7G5W5jZGP8mmAbA6Z2zo4HunsV5rTAmyWFD6YS1JQeYZssE2zn9FXHg9QhaByW2q2anz86YrZSMTP7",
  "key2": "PTCibNHysAh4Psndjasr4s2za8dsgkaEuvSMpKmmwvvQr7H65JZNCshD3JZienZhyxdD3EK1vspgNz26XuPzYBt",
  "key3": "7nvZSBTympR8QLUUzXp2sZ6YZp1kM2pyGLn2Nb32xGZ1GLFMJxTWQajxHRw3TuS2CmkETXqhhH6oKs3aTfte9Ut",
  "key4": "3SqSSw4cSLdfumd2KuuPeNazbU2pbSyfQw8ah8Z8BRfMWbQATL6LHi1JZuF5TwvvcrDfAHwK5WWskbnGHY2RKu15",
  "key5": "23QPTk9rGQdVcDgn7jeoMijzTnztfz2eBktBfk93debn18NjVGXdRx8CAaq23HwVxRGMuuRqHMHPkgYxLvjUNpgC",
  "key6": "2jwd7x1pncw6B5dM5xoGCwC1D3okiTN1nWE1YwY3bmfkMpMvEZpwQiHTpEfycCcfcBZM9D6vDNnCs8yXNQ3oLHKZ",
  "key7": "KPQ8roQFeiGfEN4mv9KNAmWpgiTXXQVVakVhdydUfKZ5F9eMu1tgi6cYhy1pwpADJZv9roiRXbnYhsVk6g1uknW",
  "key8": "5wLBV3uPXXynrqaFUGZyzdcAUC6z6wpXtCpNK9XohRAC4ZuSrcdAoyG1EJNCnQtpGMATfi9isweoDLmhgwEHSmyD",
  "key9": "593eEFctS2AHpoSDfKkGcVUfU8S3Be5ki83a9LW84NTYLXL8pjsz5aJV7a3y3QWLQgq8fBYSuhmUvXjRQt18VVna",
  "key10": "KL7hZetHXVwK3YwUNAftGBojU6c6zok1m6xxssumbRqtcRAvjVreGjg6DerrfhvWttCao8BKu3cwTXzZvdSPSQ8",
  "key11": "5yByMfwhfrEFUFu3boSNeK588bpmEonwdnBsBTD8BR95sNRyT7fGNsfAqAUhGa7tVcW8XTYL8fKXPEvUCXPwN1pj",
  "key12": "3XsRHKwNMGgpBdRR4knzBn3X9xmJGNyyzjRFLg5F4QsuGpWWnRVk5LeZ4GjupU4w4td5tmNKdcSii3QcQdyWjFzC",
  "key13": "3CTRTfP2PoWj3nfM4NxgYPGCDLPMpiEEiVv89bm9HimMWaTgwSTiUPccRtUQBBtC6UWPuYEBQKkx5BinjrG3y4w2",
  "key14": "2Jm9AKbFyFzqGWXP4UTa6T7wNbQzFrGVMQR1uCdcWQTyd3uS8rqUeHFDaR9ktmVX1nmQC4d62YpwiUaQrTRsXJX",
  "key15": "5QGUpybdZUxnEcBN5xKnUvCM6SCybsQVj39pamwRPnbikcqDryqwfCEPSkHn5Y7h45gJkaonwDVfWwST4eCo1Anx",
  "key16": "NXbASdy7VzDP2q3pv7bcp8RpLAdbNnMN1QrJCGAfe2dWLX4ivn5YpuM14L4Aahp3h7nTRMWiCeD5ejqxFUNHvwb",
  "key17": "4daoBy3i6n25wV8upmDPpvwW1cTeVHiCHTiUomQVsgoeg1pQ9VYiFPNs1z5SftmWbPBV2CpKosWex1Rcou3wnvps",
  "key18": "5QGSsdoKiaHR8Hezzr5SWnwY2VX5uoyCQFQzZZxG4T1KFRFEFewMudgGLm4qKGgfe4A3KvWJLLtFyoc8Db7eTryw",
  "key19": "Ah8zPmQzh5LVKf8P5MwbK17ab3A8AAwdX2bvNNJYzAXpiccP3p8vr5Uw6wQES7C2SiU1SZJbcxAgV9SQjHmnULr",
  "key20": "31TmMmxN3KNdK5GqwDHxoV8miLk5YzgPtreBSyJkKN7GMBf3HH51RfJydRPTdLtShRTNwrGsjftzz88zNWZjqoEu",
  "key21": "2o2HNmrp3K68VPBDDzPTB8QP6bGp2psnfBzuuAqeECa5se2Xuh3y6SCwqADZCcpujL1U97aLFxmD2sHZUGEN4qn1",
  "key22": "66FaxS9TVkAUsk2rxiBi7KiNyVABbbJZ9vC5Qwyw59NQ5CQYzWYJBq3cTfCFH3VBYfSALKytmKikNzwGbgSUdT5K",
  "key23": "3zYgtyQx6a3jNqWXxJZ1u9PbQHxLevjEttt4Ny7jLTr8PnirZNKGx5h59mD7GTwznzwtiYFTPGPTP9UQZu1HXj2Z",
  "key24": "4gMzsXyBoWvaaxerpdWN3WLwrK3SqzmdYwKaWife23YcakjXjxH5LGGUu2W7tHgSDj4STMC2bXZMyX4cNrWFM4eA",
  "key25": "4LfxYKzFXmWuqm3hp3ThzcGG8r8AcHDS41hKFs3XCBPhYUjFN9cpNhWL7PKaaWvg43CUWXAVbmXBNuS5QzsnFjWe",
  "key26": "5iJnFFJ6wjTGFWCqAoK5nqKdtbFZMar9yKEoUCEsDrZQUCE9Ci75R1BCxHYENRcTns32P3G1WCrP9gKAY48ZBPHn",
  "key27": "4pr5E59Wr5iXjRcPrFmfnxDNekbGHUYjMkDZR3QtVJoThc3oufXwvjkfssktPaWRY82B4w3FqmqEoR7bBDDriuTa",
  "key28": "5hc2PtjzPEuVrCkn7G9fbT7Sh6GTgViShRd1Mug6osAvdt8K46RRXCbk3cRY4UX7uX8n4VosbsHk6hmDDTkfbuGZ",
  "key29": "2y2uFjtncKhVtCmDyKKaB6BmnwihoNSRjKD5df1hvpcLWFnihUEUiLTRhb18wCzGFFm9tN7S4vrvNcz4cFyMm3xJ",
  "key30": "2SzTwkFrFk3UUWfLrvt6YjtA7Mem4kMxamZNyGdxjQZEMHtNVXa27fnbZMye7ZdrjGeyw1kS6kBcDGCdaHBW8jQf",
  "key31": "2BkMVWrG6ki5xWqC5bkh7qpAw2F4Y711BorbiK1hjtC4rzh4ftZ3Fihf4E6oHqE3gSEEDFZfosfmSZ4QfpAihj5M",
  "key32": "4ZGBpNySrMPnwThyprbx4DPFuSUt5fhvuGedtr5UTVDTqJo5n3kRHSdfHN6EpZNrPU6mTum2UhxCvT3NtimVsUg4",
  "key33": "93rDtjrDuvr3vKKNVvjdUiyqUvpQ8dg7tE8Zsc6H36pg2RBcBhPVqTLxF2bXEoZC398K2tttYtXjsA2HakE8Hpc",
  "key34": "42uUVncT21ws8ouGySQCwd37VhkTyWaw2YA3U79zHSJ3q4mUtFZUQHWrgUk2e7L3kqDzANkRicnqwjCpo8PrrqNP",
  "key35": "3F4zN8eCZB7KttgKYmEUNBPnSZvjBsmNpzaJMdAvHEWHHAZHFyDzUtrATF33syPgKZoCRS5MV9g9xYbexMd5WXPX",
  "key36": "4hdz9bEKvfYdQmG8uV9EuAgd5Yr9gczSwiR3ne2t9j4LF6F9TaTqfw9RgpSbewQXC88VHBVjN7ErqHGdiCUYxZ2Z",
  "key37": "3frdW3hBzspsLuJXiPAzeCJG7FCLkdQrFQNoYuGdPuwyezcyP9SGkirgpgpwNYTpHbaXngQoAw2oJpXQfQcdefqv",
  "key38": "5MFDPmupfXgQiubomSis9hVof9qiwXRgcwAjUnaTRsH6TSnenFd2dnFvSGotaWinDfczNSQkdTQRvmb3SbwgwY9Z",
  "key39": "2JSfqtUZJR3rgE5bvMdkhA9Y3szatAhCSe5cMyPSBTaWSDugW2eHyPb8dAhcUcJuvvATgEAhhE4XqPi3hixSJ6U3",
  "key40": "4w21eG6Ybp6ehkNXp7TqD8sGi4AtvHkK6Zg5ectDyK3ZqWopaQzfQpwoHSuHQcCjF8hNdmEQbWHBatP42rFdNCpJ",
  "key41": "ZSRtVgDYZRtUKnjHhxAn19ugUR6oyXJaa8VVd5HERHYvgtvrkuh3zFT9tpxaatpKYGr6t5cvhpuzyLTSBMEeCeB",
  "key42": "4brHDApAKoXze799piLr59BPH9WDVFMKX6ZK1H4zvXd36H8xvia9gpsudAGtPTEA2wvrXppv2fN5Rd24v71eLLBi",
  "key43": "3KA1KFPnKAn7EfdoUXRUmc2BikJw1pphaik6HYtA1YxwiatuUUoUKDGXF4i51i5QHxEQ4Y2T3gLkTPNaGmvpUuk3",
  "key44": "pfi7QiZfQh3dFmf9xmZHYPGFPPQkLsRHbA4icf4KD7Tfj1hXZazpQtZCBeTaKavwwWXN69K6zs6NQHVpf9pgJvt",
  "key45": "zbHMsZ1T1eP3RwFts5cg2dk2eHpwoJLCjqTdAAULDUoSKNSbRt9jEATjrwET2cMNyvmiYJ7KyXMFhgRjqg2sqgk",
  "key46": "5m4RGtvk9pghoDYE4hD9bBzsZkJUg2DyAsJC6n6TPybhMXETKiL4x392teR9wFtD2XhuW9iszEv8CYZvgU5L3LGC",
  "key47": "4VbjtM8xTi19mP2bg5px2QfpBDaj4yAbSs8mUgCUeaVGA6fimKU8x17GAhFz8Z7U8idUxuUX6sS5eNxup4hWS9FC",
  "key48": "3mvSCw5y2ssf7GFnaHdFEv9krfffMCKBeWQs9s9Y5e2EiodmiD5ahiVKrK8yjzWBNU33XLKhnT73jqChvnVaktky",
  "key49": "2jXRAYUZ5X7yZgq3ZrAV2M7JXebc88MnJkF5q4RXdBAq8nSWnpmfEeVpUkDngBPaaBmEGiawoa42KbuBHJ15Scm1"
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
