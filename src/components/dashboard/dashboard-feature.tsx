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
    "2ViyfgoA8Tj6myEobhQ6FFjWsNT5qwSFxeSRXwtaBS3qZdc6mtempM2shjyy4NJaPAj4A6pkKHeuAqTPad51Et8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "662uTyrf4AGMAPHwGdCiRDTyBoVNTmx3bR82czp7VmAmVZBB55XLyiuqzQSXR2QVcGuVwCKYLihh7j5e5GiLBtGb",
  "key1": "56uc8o2Thoatu8nHL3rpUeGTjW3D4nwefTrXnmMSijDbFtXNCvuSm1JpeeFVVTzjB8ZxKoK8ZABBg1CaqCXiysoA",
  "key2": "5c1sbhVTP7xEmZwYKE2bcmWvpeByvPcJevt7mDGUtMhzqfZ4mspp6HNeTDrYpakfDkDqTgoY1kiMcTuwGtueXEL8",
  "key3": "f3RChVx7UiwiycmMjRDxM3tpxynQUCfh4bWKFvnm7Kz2rwAiu3XafxVSrqa4gJjFdJd3osesEEvuJqSnicbSdcm",
  "key4": "65xv1R3mq4wwqMK7t3MSDhHGGdbr9fuJgpLQ55b4rVv7TAHRbp2FZWN47Hc2YPtE5TNr1fY7NFydEyPasbHS5DLj",
  "key5": "3WeaWgcwGiJ9RmwWBUHg9GQSxkPgkC7vjsPLqeArL5sr8kWwUy48adXuXfKfBk26bMpXDqTRz5t6ivmN4ipfGA5E",
  "key6": "2Ami5eZoTqYgNQMgytuiPFUdVEhmGdiv7AM9TALzskPoP6R88fPJtHwhMDvBgppFRRENNx65J6Zw9FPws6bBfTa7",
  "key7": "2NakimL3xx7iRem1PK2mJtjFLy1EVHGEQp9fUn2tuLR3sMdmidnWcHFCLDREMzV7tRpESmYnaRPZ1W3JL8YcTks9",
  "key8": "U3bw24iy5dy2LVDwUKtgDW7SWRsRjn1w6ouZk5Fmt3uxj4Lgwjqzmgo6CAQ2jKof2aMFoABw9CJD82Szj7VsU1w",
  "key9": "4JrLmdxMnX1x3eWqADygt1HxKrcwLYgPzKmkxWmUGEU2dZq2W4usper2jB2fXqtqSsTSUEUueu8Z6uRs5HU8vYk3",
  "key10": "291nk6aXkG6ZZU5wFswNQm5AF3BbfDhY5DeTYV6ds5gAvc1kC7nkLEgg3V1kYFzuottW5N5z8JnL4nYjfAP69C7t",
  "key11": "46hj473zLbktQG6RKX9yuGC3SXnZ4mimjh6T6aWRGN1mMm6Xezcjhgt6Uuq5wKmpAYLi1PDpHS7BhYFsp7g26jff",
  "key12": "5r3u8JWWRSZeYbudU7gAM38mEFALGuWEooKKKoYjS3YWDvwZknPUEQBwYzJdcNQDq3JyNhqPVLVa68sodVm893Z8",
  "key13": "dXfywMcxJit3HwKksApByG1NgnnePCAbQsEwin6FpSjKhjaUEGygj6KfLh7RQJnKhyL2S5ZYcXXbHF8ZKoivyR3",
  "key14": "RkvN4sAsnveerfet8HuiAF925EPuJgt3V1ZteHtcdDu3ge46zWZtBrhYyzycWQtZfeCpnAAMJED4oQMnPyCEpgx",
  "key15": "3zcNBzCiw9ff3rCkc9wbh9KCEsNzsP6YTW9a4w6XxJNot8LtWTAAKiZpV2ziiyM66pmZhmZTKJCGGA3Wce7qXo3V",
  "key16": "4LDt4cCPKkpoFBrxAixStbiQBSQ9q2tA1dtuvfXXpRfuSGwkLfUk4vdnBGax3FgpWYXw4mzJFEjw6gEWQBFkctfR",
  "key17": "3cuSyH9fWcGQSRHEpeYRcfcfcSktdYT7piQaZZ9oLxL4PcsWqtmccyjgp9gX4vSDwg2bQPsx7HqHi49EY5i1hXFK",
  "key18": "5wJ6LTkrZgHZmFntPrj2gN1DRQiyJPjWTWtHF19iNRsMKRzapv65HsdNCmpVUCNZeh2RaWRQGoaSDbqBEPPYMvKo",
  "key19": "2axRj2hnYEkHVTzu6j2VV8nBBATTj54efDTYymXYrgogz9QPMboLHGfYmn2DxqnkFFTADVxG4HBmmMoDopsX61UP",
  "key20": "29XnYPN7p8rzm3QCUeqnpP87ueG7j4uyjWoMeixnEY9TW69wV589DiTNsUAJQdwsun2sRjcRDC1tYYxJ7rFXjE8C",
  "key21": "4mV61C2iLzMLqaexTLE1UG7XBXmHUNZ5hdk2sQHrePD5tsEoMEX9dSoCorXsTDUTG6rnbnqorRbdSn4qokYoUfct",
  "key22": "5TV9vxkfAmdvsgm7ag6B5L68eYyPTShmHatmj9z4gCXqczAcfERStwmTBkx15KpUUy16McuixmEjrokFbfggfM1d",
  "key23": "gWrLqpxEcnJpNSQW29WJxTRDWwjciWHqbjyGkN9jpeLvdz8U3HdCswAJhhenaJidx6MCpBZ4NqFYAABcALWhEhd",
  "key24": "3pfbkS6BPV8dqeZHpxZUEKCo6EWZtvqZ8ev8HeMsTjk6ZCpn5YMastdDBNRCapB7zPmBmg6GgwvAT7xh2fUF77EG",
  "key25": "5M1fd9Mpsj3bnFdHG2UGr8fgn6Q3YrzLA6X3xnb2ePT4pVZK6nw3Ca7cTYMuu5fWXEw6sf4yArehsyChbZVyTmdi",
  "key26": "47RPFaAXsdAmXPaG8XurmN5Ksu2aZ1YHF7kQ8zmc4SKXmNoR3mPFFu2TvG2MpZ6aqbv4H4iWdph1DGiFpK5sCco1",
  "key27": "282jPAaFH9bj2RxXDFVwCLHt3fLk4YbYYSATNbTeZZTLcUUchmSYeM6HSk1hnkVGiNiUqaFuSZ9zTKcjQbnNfhec",
  "key28": "2S9aZzjKxGg9B6LWqDc9pKFavMezmt8TjDkXcw7AA4qffpuCJC1mpWoK2FVMw8QMMwyqvnKBxCwkPrLGFZJVyRAM",
  "key29": "5sBdf3p7v2eKHiJubAemAS3UzmWuKWvXCmKPMHQLsb6tiUSD6LCtqDuxfxtwwocY7uoxQX3jqdVf7fww6fnZFYMV",
  "key30": "2Dw9Ph3wPAedJPQZBUmPYNshTsTpzRBZR9fEjZSsxTup5yuJZujWs7UAwBYZtQsfAbahHsTuoK5qdNX3xnUUogcK",
  "key31": "svxMWUcGjuoC67ZpV9r1dfz8fEqBm6B2EETbpr9jv5cfm9rBMavGbr3o8q2UBCQiaVciLhsQ7m1sJd4EwtdFv3i",
  "key32": "5jwJmcJRP5asGXyYcK5wHZQkkKymfKQmyYadTovV6NKEponrWd1jrfhHh2ipiwmZF7WJkmuV4bfY5zUK8MHQKCMa",
  "key33": "5D1AGJ1p4H38GgWcKFpZamS9HC7WLsCFvjVMecXV29iqxN4G41yMvzUigcicdHxtvdT2wjsJeQNe2gWhtXE2raEi",
  "key34": "4Emy8vrN72gjuNFeBZaCPupdAB6EyXxwUK7QfA7xqQaMJRoY6Tsu2XjWr23q69zms6aqrxfQ5pwt21xWYPKn51kF",
  "key35": "4kHD53LgMvCfqD9smDZjfXyi1DGbuPhCtj77wPhujtykBKk1t8WjHCsRNHeaxCqGjX6crKw7968G4qQHm6snwB6U",
  "key36": "2VQCKVq5Hrkxnqa1HLggS2ddVxQ6PYkDKonfMwXaQTYt6k5Xt6RvN7nLqUYZq75MdCKMVgxpvpWH6MMVjHcNHHa6",
  "key37": "5EtPqeLp2WKqWPfBxtKhQ26nt2h3JPLkYBD81esrq52EgPZ7QMmtkZu5cUDKK2RuqaohU5kUfjXkR1CwWR3SvNiu",
  "key38": "4YwoWgqqTfU6XurrZXtdyM99ewJBbEyPixdaqTr94gbQAsqzccWM6RvrkgAEgCqC6Ldgi2t7QDwFx65YaSP5BLhk",
  "key39": "5pfgG9KoETajNrLmNvLCECy5mKHESQknqLSm1c4PmSzLXR8fy9cCf6ZEz69wajqdPf54Eh91FA51DH8sCyfxpzq1",
  "key40": "4JrpwWmum35nzJWPnveZHsxqhUX8dX3L413MmCYPgapEp4zBdxXvQvvF19HU7kkDhpeyP3JVzsN8edn9gcS2xZes",
  "key41": "4A2EKdzHV7AU87DvZGEDfdcj31m6giJbyuYbczvq5kJcXTd6drKfvmULYfhUdyV8BMZsnBikYg9yAC5YSf5obm8D",
  "key42": "hZ8fhZSE9N2NfLqZPXkwQLpTcezZwq6xJsRjuRcjPt9DPYw5LnnMrsynuVS11FPfo1KMmjaM6RPst1r36RHXvLt"
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
