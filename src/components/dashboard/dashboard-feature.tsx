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
    "4YRyVrRnZwHnKz4pHBLdGNmb1xamH4yTmUYfAZcPtMNVDuBP7bet71XV62X4VVM4PTNPgAhSSosF5Q4ZVqf8X9pG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FUoPbggExY73e8Xx36ssgGPUsavKReXLkCUZQ2KehxPTVTUjthzpf8TWMRBiNajXothEZyKG33d3uxRdXJaAWWd",
  "key1": "48UtNRiFYD1jjuQyRLa6wzu2nbqdsoaDFAURN2tJmkhu1PrcoYPPF2Z5FbfeSeHHEBNURHUUD83BUEf1bgddQG6N",
  "key2": "4HgowSv6qZHs9fhV2DWJDTeGrhgKY1xJH949MD1wCbsoCyPhu1RjV6dyjpjRvqXjGhzjd2KYRZywsX2wZag73X1d",
  "key3": "42JPEobfkQUzeAiPBMgkAewzaDexpx14dhtdJxUcR6qrJJ1MbGbiNy1sYwVAmPjDsesX35V2qzrkBbmnzDYFBwGx",
  "key4": "4C9KcB3RX1SgfzfPx8dHWGdS62TpJAAtRTWriWyiCo8nPBMfk6exQKqwkJv65apA6Ska5x8r1Ly8613MyLV6uFrW",
  "key5": "3QrFagaNMzfs8V3R3CRMXUrt5BSFvNRCswH672o7Gnw3B2Y4ACL974WYBEj6nx57z1A4Q1mZZsPEbUPm9nbwWYgE",
  "key6": "29gGdUsptZPrSf9ZXRMSTdHQu9Ci82Gs7Mn4uHYCZ7kmttpk5CxCCYXd3Lq5rzehtVS3uXfRqXCYE3bvMAgsrVDN",
  "key7": "3aDP5JHPVaj3fazTFf38cL5WVkgo7YM5rJA9VRnv7eySrRyaHaKrSjgyJKdiLeTGabHY8C58qwMtGTot2Br7Rgmx",
  "key8": "29dy6HtEMCW93fCcuQqSS23FSmKGZB3cFrCaqTQdw2Q3Nc7nw6xBr5P1NBTekeYXot4YiJ2ywk78QLnNkNN5tyLm",
  "key9": "q6Pa2zYWvJgv3Ed2GMvPRTWCL2mvrKM5EN62cS7oLLVxcFJWB7azK8oP7QZAzmmEHDJV58NKLDDfVCwjFb7xsS7",
  "key10": "5JLik1hNyBCWPMcZ45mbeuBft8BMZmXi6EV4NnsbvkwHJCVJBSEb556n2udyPMU1YNj6JZfhQ41TdWoe766uQKgQ",
  "key11": "4814NBg7qzsV8rxM4zQEM9G1Babt4gT8opKfJCcTV3Y3m4TtYD6XJmYMUVCMZSZFhea8ARgBG6PG49rPu64z3YsA",
  "key12": "44apWMo3PjLa8fn2BcDbSd7kXsdasSVAT74Pq3Zzy3LqAezhMHm1d9H4LYFFXNmeLdnF4T4xeiJcTCtE4cLwasns",
  "key13": "3mFt3USykUBKjpUPNj3F7giMjD15d9xzewZJvvAxiPDKj572cdLBDQ1gkN8Y3vmk94AWL8g7djp6LYG2xs999jNT",
  "key14": "2Kx99vAC6kDiuyou2zeBFHJ5ejPDCnF5uqSzT5mUcXC2nsdd6sWweTJXrCrwBWW3TGe438Da6hen5Vw43cHTBcKp",
  "key15": "121u6kpookKvkfz9cmAQFUTpH3ypQg2Q8q33pHwuR5mQtMF9Ai1yZqe8tTEabf8HHXH6bNx8PHc7FregQ96xUtHF",
  "key16": "4cCBMBfQ1DERJUxLop8GGG8ja6zmCVPdsx31wnGkTQJCGu3BNPeaXe3NTERE9UZu17REyUQJkPfMcmxss9t5SgjN",
  "key17": "mWJ2gbBATg8vBhtuESaNoNSW9F5pe4S9DnuPpoCJekfWK61m33r364ZevUam2tcCwKiaAbWmWdsBNx99oHr3WFf",
  "key18": "568ndqEReprXvCUvEjh8yqHSFyEgZfYuGAGcUyrkJiZ8TwHUdsvzPmuTfPRPsgUkQHbYjFGKqaCwH8cBEfqZgjv1",
  "key19": "2uZTfzVwkxGGfkxQXoEyVV77qHaTLd79k4tXpnnkTbQTnPxJms6ZjxFLRRAPwi24CgwRLzyAhbadCJLW9s3sUTpa",
  "key20": "sX7hupMbYW9mQamEMjXKm3AU4R4eZotYm2iFMmSnc685hYmXBJiUWnubTpnXuAqLWg8NAfHGS2kDxC8HiST9s5v",
  "key21": "5weLzJCwa2dEUB9NkmZDmWo6fg5LYetUG9rMDZJWQ19LcMoDNrShk51ztm6z8nDA236g78K6gpF4KSMa3LgcW4oj",
  "key22": "4sHo7nthTX8D2oFyTpLy9w8mSNpdX4iRdEJ5sFUwZLkfJugV9T3Jn8ywhgef8Wf2eje6pQYpuH82osKZ7mbtfKaD",
  "key23": "3eou2Nt392WwQafpZ1JXE9FgvkCeAsF23aciF5p1KYK2AeVgktRdQMjf9fiFtEpDxQSUDwjDDRiVyxBEYed7b8fw",
  "key24": "3ugGJk7ABD6jS7N61RHjCd5PzH8PvBaGbBewvNE6r29j5YiqmgjWE3ctMNkZk1KgD6xWr6pCdSRxobuaw1WCvSw",
  "key25": "wHAGMHyrT1Hkekusxr6dyX3XiGMVJGbTHJ3MoG95ENqX4mKbgdinQkAdUsea83coRT3FvXpBAeiQCd9NSigt4PQ",
  "key26": "3PQfsgff1GAqKcdNV7KZtuja15jxJRPBsnTY9TwZVyw2SfDWM1Jf6ZehgWPxrrw6vSuRM7YS9x8RRvJWzz7uB5eh",
  "key27": "2msBzHc4JfnBTk4XjrAtS7LRcPX9SGvrkCRE2spDRX7sC5qebn96yFMe4T74PNfTuKfkCmpAZpeaSiw7tiPwidRX",
  "key28": "5MH2qnwm1o84Gr9T2Lz5o7ZV1q13N739Xhj4wWgM6CvZ1ugrXBeUrU9SbqTFV1dZKjHepHAF5LtpFypiG8osf5Nd",
  "key29": "2CmYx31gp6mXToWSXo9zbK9F3VUvysxyVW3EhJt6MVXmdDS6y9YywNz4ifpNwgLbepr5V3qsPruism79ipqKzpqB",
  "key30": "2Gi3NDBgxn2N9chu2aURJzSnCCNumb1EQeeDJ1uhkL36rC95uXRoY59wAYxunLbGGCVtyvu9JgpccP29YMbg7ZSF",
  "key31": "5eCKNYw6PjQ3wZN5m32ZWvwpRR7Cb6tMPm24LDhn9AGUWNnPMuuL6kKKx2WfqdrKZ7fWBTzNRg58sVik3xRhCAAR",
  "key32": "e2vdDAR8rpy6hdjxPHv2fiqnYcgMDkQXohk17pDNqPurJRqWVLuxWskbt52zyv5FGEFtDEH9xH8khwfBN4rk3Ba",
  "key33": "4KAJXnL5JAGBHjFumEMRYm1Mj54kZdSyV6zjyPFqqvUihw7NzvRUV993r1NJydGfaAX6EhL1s5nzPSPYmnRa9R2k",
  "key34": "6xgiLbAJPPd9pK8oovbXaRVXiEoQRyYNr4vy5efWGgrzBUTUV3ydVa3cnHJSFqLfgJRCaNY88qv8x4BdjjQCTTG",
  "key35": "2qk9vzPwxuLzYJu4RnT6pwAZF219Tk1Xjg9v35rYfvKYUyw45hqRZP5RzrpAitMEDMKWqUFeHSjcgehe7YvXFwyk",
  "key36": "65RsAH1NhhnTpVshcpmdSbHjjg243Bxm8rsDHTxqQ6S7284pV7KQ3z8w6Ya3JBUg5y7BAuz7bv2ABMjumiobKGnZ",
  "key37": "2DCwoCwQVm3kfEQKzPQqvY6FZfmBB6bJahcqACtLx1pKjbtScCC4AHHUUhPzmxK76pGRL57LpgHjBeyREsWBgTR9",
  "key38": "4N2WReSZ6kmVRQWbMnxe2BQwMTG722BsiceUX3tgtpHkwfn6fZ87KxJhc7DhLsJ3K6vrtACVD258HUMMiGXFLtzK",
  "key39": "41yxrW9cz58v9kaRcuzAumiWdt3QX5w8F989YD8rdrdV16VMynKFQS5GbNSaA3gT99jfQCVUvHRbyqvfmwSaAcsA",
  "key40": "5kDJEYWcA9f6XwhHEaH8tq1ad7AXc8USPhz4g6W5TSqRdZkvb4JS6LiYUirHuonASPTNV9aVxda2GukHqmfmhL9o",
  "key41": "u4wwMMx7mu3axPcpxYEXYDLK2pWHqP7RsZsWmXyeak5HYjET8wR5nviqRfv83zDZuzXeAnsLwfP7RQ2bqYJMqbr",
  "key42": "4xKdfmCeBRvuiqGPYbXY1uhsVJ78ufersJaUYqbvwZztaccrhzCQZyzuPAcZVjVxxhYDecc5ovwFEfvnDuM4ya5U",
  "key43": "4t6Wn2xjMMXSZ6XSqjPef3hxxZrEdmS7R62xUj4NxavjyzfMzhthJyBsnZpLVPeJ3ajRragnERAiri3N6m1Mdnw5",
  "key44": "3UGi3dhk9tfUGHkRnVtW7nMdSU7nQEGDZR1rLFFfFFXtYfNmp38YgxaAwjSSSdCgZLFqPHL9Sye8xutr7eUzN83a"
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
