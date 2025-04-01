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
    "55vhmWhkU57i9bEVmn7QzbSNCd9ET4Ef5jVn9mJ7H87tHkU4w9SJXoXtKqvVEAsqSgFEAX7EEHSipcf6RebF59bw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2giQnMVfoAeVghQxLkyZUVpDmeBFsyfE82kh8je71Ur6zMSgBcS5mDkcwKudoHenWzBva35PX3mDwP9xWcULYDbZ",
  "key1": "26UKPxLGwuDtkkPMTd54ZVa1DqW5M9VqPSMLEQw4QujyoMAXY7DdFTPQEGJ1T9dseza898UGhaHvJ1XpbPtVS2jo",
  "key2": "4A9XXHMvqFMrtPnv3DCUvVdf6Vib4yTmNhHD2CxULNNhhNRYRdcDC6vVLfAwtN74vSw5ijX5hX6ab9346HBe5rid",
  "key3": "5SJXQNRnRGYvfgFLhfv8fb4oE1bNxzkP6fauko3nGy3R8xKnwFBBY9faRWNMgqKkk3D4HHcKHTLDzGWigZYRPfXy",
  "key4": "5Bvwz4TWMcizNHkUjmjW5ScxWNZMYcrZcMw4Cjx9F88MGU4mkFABEPMWFDWnQGsdSGmPSjesz7NxcKj9NA2TSJLX",
  "key5": "2up2jXBaCKccXQrrQCYiSf1iBeqQHbSPSwKzPE2Za4RUpjTLzLtnFZ7VDkAuN6NJ4oJQwnnHaxQkchdEHtg6hppg",
  "key6": "23QVf8ognqmksYraHpFKBKAWAJEV6cYGeKHx9gFD7kRnz2vxYhdryvLjZtujRxz3ZQbenk18gK2UUdSov7koKyxr",
  "key7": "5sBWEs3nsMWGU3i2A8fjKncWBwkGT1XHhUXvBKCee3d3Vo5vQckxgC5uDC7FugCZjrZn5kZNsDR4tzXmcFKGN41h",
  "key8": "aR4aEY2BSGkSDwZWggufpFi32sjFSi6tLp62mfgdGRdq4rFKsNGAUCZvFobqjphw56ofmraNHUbWNP7sVnB6r9E",
  "key9": "RwyUvLpy6xGtocLWJu6rFbGdHrYT6ZjoJ5TTjZh2D2dZVpF4XqeaaWxn68AZazzq519RNCzj8Yk3aPCDuaPQwap",
  "key10": "wjXQH1kkxhuNLWerZSaE7YzQwtCVkUPLedqqKUiioUgepwWb3KafhUrsXKKhYxS3CKvzgV8NHdnHYyP9Ggt6C68",
  "key11": "5xeazHCvsQdUhb48yAwVhF2ec2qL15YkN2MHw1iSjuM4QUgzuwjzGa2YsuWyQ7YDeM3seP949M2DMJE3WmAzX4tQ",
  "key12": "5dguje97wMWKCbqMcfeszmL6W4JVN6vsiuw1BKNFtP7JoW4dvm6DK3kQmbHTvGHrCBMKvjyhDMbtqC48KZ1MQMXC",
  "key13": "1F6RJcjShazrXWeFb2x9zXd9oa9wEZWLAtVgs7wGU8BNuvcTMBA779Ryyc538jioU4mQgwb3zTbXZWC1K7xPhrb",
  "key14": "SucTnD3x9HKmnQyEc2r8RM8BKJ8twanRcQPBPpLdGN4g6PPUqsPznhnSyX1mrFFfaDNh26RmWGAskcNh3We14Z5",
  "key15": "vJV8fMKnnT14nDd5Ku7UcTEKxcfYWnkqP9p5bHhnkMPDXkihVceaW1SgpQ6h4UQXuh9NkeRhMY2oiJVSVgzib4b",
  "key16": "4WMSgVNetrC7SvJbJMQGQ1PekcP6Uov3xg6fr9Z5ZnaDiZtT4vFbhP2VAn9UNW8SFEwEsivehLjG2gZ51kkG5VaE",
  "key17": "2hxrW38P5AfVav6HqLyZTWPr3ejsyrPZurvXHiDxs7yzpdUwpeJR8LMpHkLMhdqUtsPJTLV1t8eiohvry2qcxzdi",
  "key18": "5Z9oiRNZfFfY9v4tCnLVGky9uXuJrEBzGYyv77QNWumhghqZEYvPj22NYUcCdhNEuiLFV3Wu23MfNUq65p9jqiCt",
  "key19": "4kPk1ZS3U46zyb6GwH4KYV6n3wqtn1kMVPmaNZpWCtpAwHcxXn2ssAde2aCELVgTi5Tz41bBPQ3tBLhct6prpPMa",
  "key20": "4FjeZiqgxgdbT4QaZjuHTweGWrrMgYinTc2LxpFUAAZUA3Yx9xFm7P5w77nkZ8USVPGcdxn3Z4FoP3GRDRkgYgyJ",
  "key21": "4iFQPkWMNiXfBNyFmDKJ952GAXQKRJVumCHLwVFPa7SnVGypjBNq546u6Y15nd9Fie54up5kQ1ac5MQEHZqzqgRq",
  "key22": "4Uo3TjfvwWW292YzfKyp1HwyrtBAs7dpskwQRV7QFoXnHuBkP2vrX6op74nTjLthvFpp1HcC8jy4VtDL6qAQYARG",
  "key23": "59Vqab3adMmD6mdLtUCxmtBN8RTBtoMDgG6zBmdoqQc5yAWfTGUnWgYu3DrriLBMzFBVkrnf6LRJUNo3Rt6vNg19",
  "key24": "Qi9Z9dd5xDF2FkSstPGKpRPgrkVSVU1RUgApR9xHsFtvmx2CjP6WjvWYE6Rm8Gs95ymCxGECnJtNZB5NiWfnQYf",
  "key25": "2QVCzGZkCL5XtLoA1ZhH3qq6yQubJpC7Lcfw1knp2jFFLjPuv16RWfjh6d2NKFX5iyjfvgSMFm6rh6LusexQT24w",
  "key26": "XVWMtkqm2es4G9u2uTNUNDDDUkgpSzcPHMQH3XAFiFVCzMkT6HJ5iG4UZQ5KLdmHXp1ueHf6N3FvAa6ct5y8UGE",
  "key27": "628roag5BNySPAdNx1mLoEAfgtR8uqRP4J9stsBnkR9wGePGMhBHS7baaPn1n6KysQLTL631HDuULh8DF5vUQyRs",
  "key28": "2FPVVZCCu8eiWCbv7j2eEBnHWskzvCx41pxKZvcJcoToC89oZadWu5XvE2GrDUXqijFRt3eW6WEwgiTrkvj8KFoB",
  "key29": "28wTA9a2oSocR4efJng3UPGMHAZwLt7CzbyFAfuNaQYteTRGiBdaiGcwqEHk7JKUSkst9uxsgBY8pjv2HXaFaxAN",
  "key30": "5PicZrcLsUnNYJxHbpuGtCrbweP2bQUmDakKTULUGdEBk6fNrPEufX8HDeAKvoosX8aTfNJrKsZHKAB4wm6RiACY",
  "key31": "58F6oFAfoK9anQomkN59Z67yWMkEVQF1ULbiHM861WwPvnqnm6YE2WpVSBxn48VXSzYeGX5fu4kL3CmMhievMxDw",
  "key32": "gycLijNmQZHVqTsjAoCyCjM8pKx7VUcoLbh5JsVzVxS73JTpxzVCLuMvWoGxXeT4GS7xMKjYzyEE3UG2Q4WX4ML",
  "key33": "Q33nDzRGKBhLJbsdDNmba2Wy7SEwzMsq2MKhzSnjzd3TPobD2HTRK2NUkeWSTfjLRV1SFieAGCVPBobHdUQD61m",
  "key34": "3sonkSfSJCVy6M3a6imEVJPvKPuYGsr1skBBPA6bDHnJgjxpZFAJAWL4ypqyPPAvsSgKs77pyGk81hA2q1Kbfcnf",
  "key35": "4ufBugpXcd8WPD6bfvTc4DCjE2PTcnmeHPbN1JgK3FGvrhZqkQeeXFKmB3ueNTWEKtGnFqTV3z1ggJJ9JVxkVuC5",
  "key36": "5sQy36aCrGydAvLQnegDy78FdMYWdvQavGTL7RGBsbbaZE8JazF9r1ZUmQj67YVYJin2n1LNiuzxa8dLsjyGYo88",
  "key37": "5pBa4M4KBmeVdSzDvMytpn1wpNrax3kKCgFVuNPf7xzhpxikYbV2xrT2A5VJczBJQPJAmm25pLDA6rrvgbL6gmfK",
  "key38": "2qpRDaXCEcofU3kvuirravVGWN9LzLGRGSxfWvfP2i6Vo2wv6SzoqNEzE2CrA5sp1porwYmfuzMuP56Bian2Jmbf",
  "key39": "283pHJn1RTwywr9DWsRtW5E6hTWEBNiuuFfY6nRAmsJpszrBLUQsruYsAfn78MwZXDhVkPD5Wd8EXMjxgBJCi962",
  "key40": "BmzZG8NyNVjoeGgqh1A16W47nTF2R1puc9thmSM6Uj1ohShBak2pgCaLmi2LsRUpFVim2xUqLzAN48NgBiM3t4Y",
  "key41": "5hyN3B37E4DdACDRNHZaFDNHpLgz2zHygPjFa9wLzGwKdoB8J8X1FPgXmCkZUi5KyqimZx7nCU9WdFVa1dAqyx55",
  "key42": "58koqBj3xH2TqBzHeXgAWhD9GQ94seompuoDkD9Hh4g5FvACCqakkoPntaxZbbTpwy5n5D5Nihx95Tq9tBBUJB9h",
  "key43": "3FrCNCbM5spnPjaq5bGhpBmRH7GSfKnJEfWW5V17mpJnjUSzM2BhYbMev7nZyxxANjWNnxvfY2vG14zDbRa8xT8B",
  "key44": "5QeedPpBngcqNUnxMy37tejwY6iAmAjUeEQScyDFqMyW9ZDoFLj2iFSMWEnTy7bnwkDpaSCxBHxq3VixutwXRY8h"
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
