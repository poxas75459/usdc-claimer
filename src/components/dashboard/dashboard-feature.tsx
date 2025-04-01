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
    "2sc8j8WQyZSeU54KbQhw8gbXk1EXyfXx7D6XHaSiPFNkAJh78xWqz4fBrYkm4xvxHCf5JaAJ4SuJYwkuDKCyCfcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fREW6cGfDc99Kf8S9YcNpEkRYStqRe94d1ntfQ9aWt9Wa1i3CgUzWh6UrXHtzzetBBETLRf5Smbsq9pehAaFZtj",
  "key1": "DxLVaxhiCx5AMoLFWCSDRDSUQLVgdyVQNVM5i4PPJirEY9zKNaeEv8NnvfUqHRBP5AtxgpvZEKJJNu3EiYUnEqM",
  "key2": "CicvbyfztRsGS8gYe9bFd4p5J3XKSSKitwoVv84FdWqXp19GudnFaxGZRSnJ68NT612fyGTjETJQthyEsPdP5ez",
  "key3": "3PiJKBPpvUmAc83c8BRd2pya5xrm1NCjkn7KxtZi6tnhTFeqD4ChCvGdR7eF6kd2HvzqUyUR419pDopiqfQU6HkG",
  "key4": "3WAHY1wrkPVR9pSkfaRCBdK3XrUPG9Q7iyEY26jbHQeDQTTesrxwPtGNpYTZ331PxWFGu4o7545k9Qp84GBmp9R",
  "key5": "4wemXN6aAPHWFpQkuRBg7jZNXAHWMRXkBGBjrm5qxFd65SUD5YEehfKtYdn4KfMYjbXSV82tLtibiPsvLWMKbAcp",
  "key6": "3yfK9gaf3ip3taj95SM2c3nQ87aRxmEcfF1R7byKrk4MLcWr2F1UwtaYkTtLqPdxVrwsyuDqKepczPEJHtc1PPSd",
  "key7": "s7MNv3pG91DidhzZgc3m6kY4tJkoA8u3crbgtXZeTEkLXTe7EC73dswu69sYgqR5LHLj2tbMBimPLo78RjvTEFX",
  "key8": "RdPamuu9KArwRtTY3gEAVdmKhhFsRKkkpKaN55jXUUoS6eUC9ps54jcu1NdFiPkL72UoVY145ZyGJGVUc7MjjLA",
  "key9": "5MhMWXMkEmefBexjeXxW1ekeF6WNEnBcMLzPtJzA6E9tjsQ9JirtSY2XQKmFk2o3u4tseRXFADaaooLEfgJ4vX32",
  "key10": "3z8AAgBQ1iTARXYSxCu9aDW8agDwfcQDDqDMe8t9iMwxyKHDQBgEN7wxbb9qvqBL3sRRDvsrkgxrqbyJ6ShADdqT",
  "key11": "31zamLf7WKsKjmZG1jXN5Ftq1834kNWqMrsfjPLEXzXaGmxAejdrQ2nZTJbxJ1qww932fijkSiFoqX3czLJ4XBry",
  "key12": "2wic8sn8sBHSTes1MQizTiEpBpXaEPqHhhyyw2juvwNpvrtE9ERYphgbqboM5BE8phH6XRJHuE9wSfE9ys3EiXta",
  "key13": "3RTJChbYXHKvBNDY1fnRN3T6miqYdhGFJmb5yxCh7HjJVnX7oHokxBTW53S4Pga7zrcwCNnkcQAzWbKynHrAAUAm",
  "key14": "jvE94H7QsNjEFQ8rBuyjbuc5KHzDWeHVKqt9sX6KM5B66z9heRQonC5FozgGnCdNemeioJHscG67CHvzev7wKHK",
  "key15": "33oU4EhCc4bv1yz7vCK4R2e5jxnD7a9nmMs4uraMqMXKs9NmberEJSLq5oK9EXioHqQg8cqTVY13sVRXremFh7ZZ",
  "key16": "2efB6icgz6v4UkXN17Novb6svWf1Tq343nMMfd4mZgiUqFBT8WFMH8BsfEkLMK2ENyEgiZj99gx4bBUFCcuQxMEP",
  "key17": "5Fm4Zq15Pkf1ZCyQUDqSQE4HyVXh53ewuuRpKpM8gGXer787E89R5tykzfrrkXd2SduW2wSvYMrGQqHYxQnTKRv5",
  "key18": "2xToM9EThyReBFQt1KhbtW49yovzJQNCnMuxjyoczFdqkpECXLPSARXv3SwtGueoCirgkNYQERZZex72KWcZugbW",
  "key19": "4Hda4A7eCfB5aSrXigyTt8BUh6yznZym1agf2snDHRTqNY6QhnQVxcKxnSnVPcbHYFaxUCdqYGKRwex4aP7b6XrM",
  "key20": "4DEagcAvtS5U4noko22ZqqyWXHa3F3Tiu8cYMqmGF78rYY4A6R225hEMZzrDiJdDj9C4xgQzJSFvH1chX1Umw5j4",
  "key21": "3uLgmto79NBe3NrY8WYEwpPcZjXQD41cN7GMdtdoLbwnDUDwYcQ8Rb75aD9mTiPKkgt6cjSDfEzSd1BozTcXFmgh",
  "key22": "3i7P7za4VJuaFaej35jp8nWjbb2wV5erwDnkpEotLnosXJdCKfw9wBiGmWqHnFhDvvrPxzfDs7gFDYxiV7npoAN1",
  "key23": "3e739QR5BY2aq77fEP87ytmYU1p3e42W9sgkt1e3vZA3o5Wj1p4mFZa1NvVN1dJXK6HGmqRC1j9DYbYu1tcezRTo",
  "key24": "56aEBQmYyGT8X4xNyqwjLX7BJCXrw2fY8LpLot5zeDbHXT6jsxxw88ouYCPnyqPKx64ce1Kr2RCb1KHGLshsPMem",
  "key25": "4GhvN3PWRbatYk7MkV11mczJixmHXtjVwHChM6oWBPBdtTyfPiufyksy1CFkpv6c4qEWZYBY5aeUR7zdsKSe6RhL",
  "key26": "HHXnkoeVj4Msm65M67HDxVJMzPzjzeq5wKVZBzq6kaFxKqFXEAeRWRaNpc6QAVUJv1PSpH6XX6h8UmL74nw2422",
  "key27": "5EcC2HXe9onNkQgpRZSSCPmYjfRrVwU7GiutW7PFT1GWFG2X5UezTfrXMLkUA8ZDvj5iigmHSL7kCSxd5jP32R73",
  "key28": "2nPGREKaV2VNNqp7Zqx812kGhrPWgB5W2GvvLSRwNrZkowAmRLmeuPxmoRQNZ5Ud2TfmptgDw6seAKxDJTk3VkqZ",
  "key29": "3kWTcwR4GBptiS2wKS1b1Qi9kq7r3PDTvAQAUFx3SZzVrxTCiWCqDJmyqfG178e8csqLzxwU64GDWbKyYJiYxALd",
  "key30": "3St1Pu8cpYPLDLFMNqBiq5GfPEj4qsgAXxsgdokDaASsKKufRAsUMfjAtLVsFXLd8DumZ1yFp2pb3ydPmYpq2fje",
  "key31": "4LUaVxg3kYbEXDieKFvadAst2HzxXTVX9iWFZnt1xWswvZnHUcGJtnWKZg5VutXrpToCe8kGTArAjHq9H8GhP2HN",
  "key32": "hqMvCP3nPGAmxzkdzf4TKeJjN9qp4fV6VE2TdyTvjFWyf1n3UzcL4g5VwSdTAzKuyjbzGVZEPbFjdKzc7krXwrr",
  "key33": "5SDvtUSZVPKeFHgymTwiRG1D9ci7YGQU9Co6QLi1F13wdAzykYFqeWSW8HLJsvFuFjT8oWar9r8des3uRmpTqS5a",
  "key34": "4uTsgX6k9Pri2AcFZ5S4do72n7KMd1aPJNcTHp9kgRH81McLZ3Zoc8DCK4etbtodmyxAhGAiXyTfRcbdtuNTNimC",
  "key35": "5mVJURG8NBNHq7WTYnit1uGZHV7jw6FtGLi3HVmHz33ZJ3mRiMvzPEB54S5btLtZZ5sfUDY6rXUYddw3EujFTqhg",
  "key36": "5pFrQ2CfWSt7VDTc8cGPJRV6LisJKySNSqgTfDFv4BrryDzHLyFFdMkgdgASKoTKbdHDGad6d9TaUjVEfsdndsJH",
  "key37": "dWkZQ7iWaaGAU8k5WFept3vsF4SCTEGRo7mxWw4LmQKgREMx5ABJoWwi7KbDVd1vbEXGNEScHafh8jLVrTZxWLy",
  "key38": "5RxioqLxhygh18vpF9VaF8b5NHLGiiHKHEHxNAD8iuAHTv1m5ZhJvexw5TU482sGfqYt2UjUYdN7jDU199UkjKce",
  "key39": "3scS8t7JumiYyA5Qsa5pTx5yd1gLg91TtGTXz7DUYj9GYQuRzcXutZh4fgTFFGxNXPYf8uzXokAayny9oiBhZtH",
  "key40": "5jRww7Kg4c5V2bepsZPRjh1TzrXQmZmX3bXATCE17VcGgj5cPmMkRK43442jzkSj3xhqAw7vH4aybdgfNDkZHJnN",
  "key41": "3mBaotTfh8ffy42q886uG9uf1pdpaW367LJuM9TPniAus4EvNX8rotiT4vEEcMeKeVmmAzsqKrXTD3qjMRjEJAYy",
  "key42": "23gbRhhUbMX2kQs9LRtQ7XRHsVJWjYun4GnM66rTHef9L8EzXJJ8uz4joPrJstpKboe5GMQ7veVn8iZEHXtiqzz8"
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
