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
    "4DNjhJzV6oLvFhn2n22SHDUGKDna2hSv5GWAwp9yGCQZXVsX9RiVAuDG13j3qc5evn6X8ycZkPU9BiGBhYmFb6Lj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GjUCtpQMRoxrKTFgJz55oderFQYBThzf6w8YUPNSLQr3QpJmG4C6TpwL2pXfYCVUDKmKVHQaVNsuHWBGcXrKUVk",
  "key1": "3uWKuxN9mugcR7Dj4ot3C6xd6uKdKedXzveFDYUam4ofspRmxbyHggkCdiq6yvgjGHe8huB2brmQBAXwdobB3pnA",
  "key2": "ME7yPg6a7czDDpHMZ7capmCAGuiaf9suFAwg1qE8zGScDiwxPG4qJhH2Epj6DFBzL8wQCbfDiSRTAdUTYMM6xyb",
  "key3": "47z4PhLKmtktJuaJQvgZZcmk3ppik2m1oQG3DceVBMB6VN7Z7kYYD6k3sVKdCkjYk56kdUtACJKRXkWrSCwJ9wcw",
  "key4": "46qGXF1yEAP7vYDWydMDp7yG8wd2HLH5YiUUYZzirDvMt3dpKkFiriSRWr6sQrSGhh2rzN83RbX3rCc4oyUtrrp2",
  "key5": "32X4pEcr2zXN3cTfCFSPvTuw2hG5riKErEi3j6gNQBdz7daM9mXhehQXPzBkjo2n7E8TaVRUtmJ1NhVeVt4M5Hoh",
  "key6": "3Ktt1f4VUNyVurmhRM3edUjbnvDSS62koFt4MEWuT3oS9ymRhu6gEXNMfXpqTQgtogURobTU1mjJebtFq222FJ1N",
  "key7": "5UC5pwafwRf18DB64m4zvdqyagYoSmXoUfJBZuc7KB4mPRcHvsDkiiyQvBEF4aLJ2pRs2RdE5mAY62znerTPVc1m",
  "key8": "5A49FnXUGjS1CAYjLL4R9JqcQf9mk1DS3s95yQnqeu56JgVyPpi8qpUsA4AwX8Zfqd8rFEXkn5ecSSjXNA5Kxnds",
  "key9": "5ShKz86frdkND9Xvi1FKKL25CRWSvJzd1WvCpEMbYvbT8ujCD9JpPtXLxyH7pmHSPnJNUfnhLC5TxUasW65GCtmb",
  "key10": "32GLrr9n5Tt2LMdrFQz7qrFUzwDV9XJwk7uLaq2y9WLoGMUkXG3weCmc4XYZKAVU1j94QXtepAbjQmVYHcpwrA85",
  "key11": "5o9jHp5WuofnP31WDJqsx5MtExPupKaiGtQC4RzM5iYzkMkjdpFjWpxTrM4nDoc7na9WnEc5mV9VPxQHkpQSYBL1",
  "key12": "N7DGNwHqTQKUKUcHsLMUA6RanTpkej9Jrppc6D2Vpaz8MQLxC8wfZcECZrMA7ieHth79dqduxJ6nAjeqaXsRwUq",
  "key13": "55E8G5pc6JckW8uLbJBsMb2Bnq54HcucNwRv6WMsZNnYAFrEcXsSFVVX2gAGJGaisahPjbYM9TJFQh3uNDEqwb8v",
  "key14": "2JZ9MkUUZpWynXoS5pVhYw4UQ9fKLDRWJUkyzfuYrbv6tq72WmFoSRiYCd5GFocYbbX9dhzDeVKQ5pL9DvkUQsFH",
  "key15": "22TpjeqrbBuDGv4a3WksbGKFwCSBi5aVdpbXzmiUHXa4dp3Eerc3ruKipQ5qULsVRe2RH4NiejTbco22DSDhEQzS",
  "key16": "48xEDu1MZg9hnSQdAvws2JFFsg5pvrsVqeKy152npJGKihg9MYBayeUTtW3QKNjSqnWWSpnkQAB8MM3rs5combbg",
  "key17": "2qPLRX1wDm5HVhATM57KayK5zqxKnMPdtndQtpN5ob2qhGnaH6ZyAu7jymXavPvkV1qEEkEPtcD5embAmhg8mWbp",
  "key18": "4qErF12g9JxTfPXVqpf8yxaGVhRJyzukPQBw5XhERkEvr9riuAYSQswuQd27NDRL9npUHAifAMBRikw6yHsFYAcB",
  "key19": "4miPXYRyUhFELHqKv5PG1aWnrV9emcnuNLimMX9MjSTTLnwpbVLJe5TDXiXkU6HRgGbZLZbRawk2rLK4dNqNNsp7",
  "key20": "QmFHPRManG9AsVMF1hKYMdjYxTanBz2nu2anSyVmqpigQ8uCmSKRDr3KWpJD4dCKBo1eKSD6g11zcUcsogUQ1po",
  "key21": "3tKxXbVsnCXGG2CvufpSCReM5fMpcPBLNQcX1oNCVYy95hKtVxkp4AbeNdguc4ESPeu4io42wcyGztdfHfNMeZG",
  "key22": "sagE8kZ8qech68g4xKJNS1tR4iArEKDpAbVqDvaeqJjKfqgRi6msUKLZTTttKT18roc8enYZHpAdRTke1osdizj",
  "key23": "5zMkdTJAs3FzY1Um4MVnsm9gYtMisUCpVByBCfcbTUUYM2vHAuGtL3ogKThajnUemYvTD9RcaSen7wLn9NRCMnN3",
  "key24": "2aR4tV1TRrtXPD7dMKbpVttUJQzSsZZ6Y9QBFmHmMLyoaB7P946Ty9kVhLCeoKgA1MTTzRMr21KZcN43JLwUkdab",
  "key25": "5PFkKnSLyQAHAnKcjcLZFYkLfRd2uFEUpHJQWHAEsbymwBQNVGa5rYpnCApwocKHf5BnGHx4Uqzm9K8CAZMkrCZM",
  "key26": "23HdMDHqSc7rFQBMkXjYj9cVEbbLG7J64bbvbvJedsdh491YiHR2X6EuACVuC8vmLoU9BJdxcSQd9z5BAyWtK61X",
  "key27": "56Qpo9Wa6s8NNomdTUsw3Rva8emYY1VXCXEquB5Cg4y6Q86QXMqCMw27TkUhBTq58mJVJre77ieMLqJU5uhPV6yo",
  "key28": "64s2KG6XxNR6jkHCWj61BKRgq36z2r7pBb7iF8GBMN3N1B9BoYzH2TkbqRNmYCM8XLMM2SCRj7PGBsorCtct1qsp",
  "key29": "5KQMeT974voHLS5VCaKRpPGAm2ghsr7WkmLket9rDzvo5W3XcXqw3XBtM7gpz1ECoeLhDQ5YVsQbPNP4BnYoA6Tu",
  "key30": "3nrVpyCJzA4LgJgoGipYuCcPzU8EFuaFQ3RVsmQPuqKdYhYARbsPuzmUYwpMip8uNBtutzaKCMoYCDmDQ15kfxLT",
  "key31": "5kBRibEv6CUHVfo5DvJgmCpAyYPW89ZknaH6J7yQAFVWPHupC5gHKTTdJ4vw1B5DgKQvj1aqxMhwtqLuR2zaou75",
  "key32": "5r6QUeFs4sgjxLZwX7VLS2HLjiZqXFgYvR9TVsZn7vaXTaGAh5tgbdqyE7Jv6iHz8F9T7BGmXcWYJkMUUWPBR1oG",
  "key33": "5PocydnQ52JUPbNnkV43qbSzsYo4t6gGFf5B1EGCji1QyzBFBEGTt7AZJrrbqHZBd1AJCBHAUMp8A1SgdcCt1iFW",
  "key34": "2NQ2Ba4NQLQkE8zJg7X6RbuXHPB88CBgYcEZJRTqC96ePv5kJquQmWzbMmQumR9rKfWhgSecJxYumsbpTyrhVDAM",
  "key35": "65gAU1XYVu3b3yx4cU1i45DFw1nNks5N47EeXCvJ4NLDG4F8n6wPta7LQdmMX5U1hjxUh2n9KPhCaA3Ti8PyW1cc",
  "key36": "5p5Ay3Lr9VimUvSUVYDG2vP5zgr5ESfDhkRkZgivdgx1aXU31UySxhJRdN2zsdYchsRMTK5Vpo41ctLEbK4pxVsg",
  "key37": "5HjXtD15LMUeNWf52WjqPFeCSmroM5uiNP27gJpGkN2DnS82PJn888XwL1WBzB7HnzbAgxn1GcpRDzsAdomSvtkk",
  "key38": "3NyvVtPmxm9RhZkgGwhQejyQd6uhgdTz1c2xjuZHiv1C5v7TW7WsZf9BGGqdEaADL62CFbYgDnVLNTrGGMntszCW",
  "key39": "AEoseBg57cAt5tw6CiH84QYfBLNML9vcXzJoRHp2U7TLi8LsDJNAFdScRxrGpRTbgB4pm9gZGZDUwDCxNhLBpfy",
  "key40": "4NNx2kJ9Lh1ujvmSx9fwns5zXyeF7rJRAb3omLt2prJwCainsdU6fGRzqfYzDSmtDjLJdDVD6d2zu3ZHq846Rtqn",
  "key41": "3MBiajFu2rh1kfFdxwybPpAUSStAnRxPvM4varz1zG483QoWHbKpBKhhRn9Z98oQNmQSmNchhxEvma4wzQe8Ybar",
  "key42": "3tpmeLioSqUaAkSD9HuE6KnGyB1a9WjZjghRDMrwn7sT7SXNAiZR8JkafkT8vQuCh9VJmBpBqVEmTossToU2iuve",
  "key43": "5vb7QFYD63BcbTKEv8ksR6W2iFYGHpafrbjWKJgsotrj5mU9U8MsfZZKkPfkubh11Q3BeUmcdHykzxyzbPuKq85G",
  "key44": "4fshHEkU5PyukXtXgUnhHMvEjRCwtskvahf4cuaweMJ7P3mBV59vfyrPd3W8cxHgBBmSo1xkEr1qg1x4YvZGnQtz",
  "key45": "2xGqJJrNKJMF9qRxXZSSoUUrP3qNpQcZbCYE1tdBeQnuCs1oMX1kooLtMhY64a4AZvEDzse4QYbRh19YMiGaJz4Y"
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
