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
    "zEFjTQQHNvFj4Di7nY2uRkReEHqZo8XdZCj7fcZ4JVCmLW2taTVUczWnXwyajAVPVxY5kt99P4XZNSvNDATANK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38JpYM6YWHcnNeaNHfRoomrKpF1D1VEgMVM553yijEuGsRZuYLCt5hGaFMKMvQ8wcc6vKssazpnwti7VQQpvMDue",
  "key1": "UXQ43xZF3bRWQR8fffknLRAMfS8NirmjJw2hmEDkoQbx4uupCaquaxTJpzYemq1zrAS3Zndobp7wxY1tkGFQzci",
  "key2": "2iHU9MBhGPCcVvt3NzhtpatG1YfDUVGyHJ5BfrQY3KwPNyYUXJUxsAr5rsvnZkPubcBAjHn7RDEFSstkqTYgggDJ",
  "key3": "3KRbjRFAH8rDQjL7NJutvPVbg3kJPzhhsPf6AESbTGGfBiWDBX6E88GeVLM7SAU53eXkeoc8uaNTEDG6hqtA9uPo",
  "key4": "3mrdcn7qy7H3YnpXQJf6QNB7YpyShGmYpcbGYPpegoXM1udFBN1eDYtJwqp4N2NoxBCkbZxwPkZuvSperD4EK6iu",
  "key5": "3F7MB5GoBPX6GiieKbFBxUpsJ6h4qGYukxGhcCzFX36goLiKvwACH46JZ8aAVP88DtVTxxW7UWR8g2iWBL2AHUgg",
  "key6": "4SB9pkWyYRZ7Xmc19hvJL68VqC2BpfNkPVAMJagtiBkdLX8YYpPRE2zaawkr5KQcQabNaBgWfRfFvZ6ZsRoBPdno",
  "key7": "51s4cXfLfSoG91WdyYafY4fkiEfnEcCiffCnb8nun9TXTskyxX5i7A7EovQeLooP2DvksrkgS2Zw3dWx1GaFRb7H",
  "key8": "5mHG3rJzdZ5BeExyMRDGpZmFdfc1jzaFDHp2ZEgdWV3k6JtjkiSDBPsSkoca7fnnNuexpLFQ65arSWyPpkNJqXc4",
  "key9": "2Z2Dg9RF42G7SGsry5sGGKNsWCGJ62DKqmd83V4NTThZ8dMwVpTUTaB4rtgk5Dy9GWiz4qTAHVaUiSQFJFwaTLQh",
  "key10": "247yZc7qWwk6nre8nhC5CMbU5HgKD5caZLaiaaihzmtUjvaiWCiqcKtXGa1BhUwrjsjqNoppJoBhZTXaoQ4FZfJa",
  "key11": "2DtHVQJQGnpnWuafYaRo45z3vs2NhEbucuokKMNRwV9Saw49wUaaAMQX8ML7UFHpij3gReuF6sAKGjxH1GdxSaPi",
  "key12": "4o4bFm9vYZT5vJvh5ioptMcgYSrYgNun8gn4DUJ2KwM4Rgy1sgWduKrBUxrpiZHpVK7HH6NNVz9m8uxEELGJZSCz",
  "key13": "3XbtStxiwboa6LWqAvgdsqVLzHkF5D3MuNE7smqDMsdvVPCn7toPM2aSxN6NSYxamaXHewyrA8RMQjZpFe2vuMGx",
  "key14": "2SK3YbfjxVaUGSPJw4mbi8cKB4uA6j255QUa9nWneXVA9zAVfhA9MQa7L3gVJcg4sBmTW6wFabW84Ua7RQpiTdLv",
  "key15": "61hsABj8YZqc8Q8avuodRvXS6Z59yUVsennmH2nTTCTNf3CNQNJMC8o9v1183KvBFevPYrq2d8NH7CYyJgXQYkxn",
  "key16": "v5MABZb86bdpu3tyAoQvJRYCDLxPmrvmnvyZSBFcgNBNPhJCTht42he4yA1D7voz5s7T5YTy8ZiUvWExGxHQxUi",
  "key17": "2F2PTXSht1CSouA4NbyD2hbRJ2SU9K87b8LsU5ZeBALwkSG6UFGwjiD2TZhpSmbRxk3Xjzwrjq2Xae5E72764gcv",
  "key18": "4FDycyVVxpUoWXx2oPn42Hve7hGRWNRu9s8ZiPvkF3QLhFMks5PLWjdmm6pBqzCPeT5Wc4DQNAwdfPeDM4te1p7g",
  "key19": "5zBWBFjrydjJbBMbrNSbW11J9FMdYZxVnK3GPim7NMiSi1mSq9uB53sVTUKKakDogxu3QT2c9wrAnrom5TKXzMo4",
  "key20": "4R91gRHy2kwV7wsm7YgRpfiBMGrp5WLyaTCxGLYB33Eby2cRbLEXa79ActiG59wLvpwqkJs3F53Sf8FefLA7n1k6",
  "key21": "3161pW2YCQELs6rHwcGf69n8obWAK2hLc6PxfTkFAVH8XLMRSMMULpUfPv4JEdtepu4ZgPbuy6oWHo4GaQumAZFt",
  "key22": "3dMTVQsqNZcBX5HHEmW5vx8MaBYZVqGeXYKh4qYiER1AYBFWMGnA8G47MTMG36noQrJ1vw5zZkMkgqGVkV1deveu",
  "key23": "3pSJ3WUNeLPeUuBxkSrkMWSLKo3iSoX3BfVDrizETjUBR5uxJu1FX5F45vEdavjVZoTM7HFe4yKQWSRcdaztrQzZ",
  "key24": "5twSfzoWmJnyoE7mWnnwS1dP6N9mXBJf86sLYkghxWjMEHrLQHW3GwgcHPrAyM3JNQm24Qjjxkh7jbfejXpqydgn",
  "key25": "5QRVW3zXQRWLiDDgNcLC3JrSFCbC2VjTEjCNNNkXMS6NjnvqPzDremYyYkx1FWP5oSc2BFKmrj5GGnowUPch3hQ9",
  "key26": "iLJSDmuu8hSU6Yj8mGwsSmnyZnFgVWnBikzguvv1X21ScuYFSni5HUEtLVsEQ1pSamcs6mGdJK82MGBw8ZzhUZm",
  "key27": "5eA3L7Vk13CAwxZ4UwdQbjTz43tD9ByhwiMsr6KNNQmiPEjQWjfLvXKZEDpMoLnAJG6mDBLKmiuA7gWnrtu7d2fX",
  "key28": "4oBZPBW6iPo4bUGqHNqFzWVfYbf58cFy9efX75f9RbxdijHh4NfpD9FEYAwrzJP4buYKYu75kf2YB1n7LKyXJp2w",
  "key29": "h1WmuToiwh4Xqg392rnb2Cq95hTxHWjB4ubDecTRHPFXREoHmq2zxJ5PH5xSkQGZ47CFJMx8D45L5vkEgwRcCjP",
  "key30": "5aG31RFHqp66SLMhijqvn9azEBuVy1TaSuQv7EBaw2bRtG8RwaMChSmwEfyBN5SqmLMLArcLXPhyRaxh3E8YP3nr",
  "key31": "2V2A1Hd2LD3ZqFw5Wna6zVHpQutnhxoDsQxFKGefGVa98eZnZXm6kAnv2eV7zd4wsmyJT8YJGwsJgVVadG1ECk7K",
  "key32": "4AUX7A6GrTaeaJriockmXevVt9zYHe6WLSC4PHC79j8xHuL2NE3JJKVdxeDduSa4HLJsNpH9wej5h3cdEZjFAiWu",
  "key33": "4YzAkeoC8YRqJGGp6e1xcoN5UqwUkkwGMT4rMdf1VQoGAGMRYNSLvFqGb9LueF7QeukpHDVBzmXbCYs3kkZwmER",
  "key34": "5cmt2RC7PMCWwpGP81SnHh8FQzULTphhnmFP6B8JbnSmayTrosxt4nGt9iRsfoAyxvSYVbz6NbzpF1W7ALAkhu1T",
  "key35": "5zhYSU9CKbetRjcHSnpphW5qfMW7NcZBFMBbVyTCcLX2iy6PGSNBjkiydKyMBFzQLL7ZscvjURUpHMWDVHhyEwWw",
  "key36": "4YVmymhAHPmfwoB7fvSgnev9SssHN3sd8JA63FW41nVryNc35s6wRjAiRegubCYksd1LY2c5goT1zmbj8VDWpRkj",
  "key37": "5CmesNAPP7ZvFWbocFpKo7YiKm2heJZD6nkitLc14Cghi8WHwraokXQ66Q6fQwKTq92Zqy4SbDpkv4HV4eQqSkBp",
  "key38": "2Vfk1nWA8bQ77iVDR2VHmnXN1N7NW8dcBcNDDYEgUoPP6U8Ht8JuJ5e84Fd9CeSm41HqTcLaZ9W5R8E4atS7VDaT",
  "key39": "3hRpSZPVu6rDoEFYgQCHZZETQucVfc1vvVDQ8s5QNEwQ6nFEXx1c2tXtr9XoBcRT2hksMbjDY17x1DB3Z5MVeYH3",
  "key40": "3YZGKrQYkZrQUt9NaPbDMocUwqU8TGtp1LKCxbtvcWphaFJXihnhWPcE5SPu5yj3eZNjwRmHLf67o8jdmWPHZP8Z",
  "key41": "sx1orGoBiUPvJ1xpR67VVuiYyMVcS4mduUmZY2tdgGKDjXPTCEq2jfRM3vF8PrJHpXqojUbeRRTHpqn26fkMhat",
  "key42": "3GqYFu5XPanzSfKpToq4m2kDMV1G5gj5zMk3nn6g1aL55XdmHq5fXikVGW3oRSp4fQ5Gimhjua9YW175MYPFve3C",
  "key43": "3XdXHrT1XyavgUf1Pp9ZrAMnbKqf3agdBdZyPF2hrtRpqSoRHSxktW1T6qGYtWgDtRUgQRantA2KdST7KqCRLdPz",
  "key44": "4djvqWnrjYynkAY2ca8FCVk5c7PSJ4AHzz1scqbK6sTCFxv39GoDGi1F4MGPxmPppsukRVHah6cJBNT7kELouxZT",
  "key45": "4fH13JmdVr4Z2NNbaYC69Dtn7LUfbeBR8KQNX4SCG9JDeMh4732cjtUvuRtwcQH4zbMgzrCwAekWweGT28Szgo7n",
  "key46": "3BRrzw2guY8zTEwGVs7aTVTQGhXsgd2N5GRpG964zqoPUiXQjToqh54UL2C3aMu9fsKVBceEFCbdJu3JiqvtBALv",
  "key47": "4jtQae3s4PJmPmT3wYom3NajiofHjqZvEnMPgDTouPi1d6XYsKFAjao8WAobhVKgfz8Gv8cDHsVQo7AHi18yRFfz"
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
