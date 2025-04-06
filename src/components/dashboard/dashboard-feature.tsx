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
    "2PEqyg1848htDtwLMgjjJEy76HyVuCM35yAkuQYdHn7XsAX6SR6peVXvQS3egcTE6cvo2rAqV9YBUdL1gNdqxLiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MD7TwCyvwRadSNonREfh5TcqDVq2mC846NTn1MnwykqwkG8SArxaxhMT2VKjsssYToGUMTAmSXRbxbJjE1HEHZ9",
  "key1": "39TWSzWLEEu6PUxMnKVgbJv5n7EfoPZX5tmw7uoxuw6xCMP1952F1Ys4awDu5jRpawB96wdi1S1gVvdVqL3L72mg",
  "key2": "3umTL2L4bMjyzmLXdgZRM7Qj8ZRTL1z1gbxvW83znDsE2d5P9iTGuTPTBrSGKXqcWxGst2FbBWBMrZmVC2uHuHDV",
  "key3": "5pMrvMDU3TA2p6L8rYhTids9rzq3dRMsv2pkvUf5ED7EbDwtSzptj5gym7znUk2hYjC2LDbpHtYTAoRghPv7ENis",
  "key4": "3HGpZ4UEXTyVeo1N8JBr4KbB3mtjyeFHSoQKDULe8e1z9MLv5WALErTUAjFkHKYvKoqubPTzf5Q9VoMSdRxtB9Lr",
  "key5": "5dQPhZPeKSy2uCzPp9i4unikDCvMgFrXuK9KR3V15Gc3nNHKGks4YSXXxxsggQpjVoiMLftutGemzQZ8XjF4cnaP",
  "key6": "5kXwQqNjvnD8Dr4Yt9CKHc1BcNXLeDHGg1Y3Abh5x97zxQDe5PrAojoja953yu7LxLNuCQrQ65fEzpy7hF77ztRp",
  "key7": "2jG9cv6uXv8v5PvdsZVunmiDGpCFeJwMNSzhxC5umn9QjrD2bM4yyHRVia2yuwh8L7K72Ho1jB7y7TdANGGAYtvV",
  "key8": "5DkfZuKL8teGDb3EekZiyGpkb5KSwrSfkUJM6GRcoAUF5r2qoVsdAQsm3G23RjU726PzsjinBAVt2aNYavZT1NMh",
  "key9": "5DowBsuV2sTX4JgpeXGKEYwGSdCB3fhvABr8zPRcqgrkYnEwkUPjyB6Jwys7ukqzXfVRYAt6PH2eNQ7hRWXWy2Wn",
  "key10": "2EbwyMgYeoWF5yaM38o8KqWL42FMMa8j7Q3Dxnuqr4Z3kiTCVBioqRiAiPPEHyB9ZV43xcSTopgCtPvUuXYcyB1D",
  "key11": "2A6MW8bw1AECqVb2VTtKNRWmPxByTSpwwJX5uTdt3urVunpUoWZwMPXds8qF59oAokCcoEURrCbnqA1W1j4XuUVS",
  "key12": "zFtUp1eFxPrQvpCRfYs6RAGcxDoxJKAatFFkArshZCrRmZrUbvtmivAWFQ3oc9H8CmNNxMPDgdqzx7hivpkLVrX",
  "key13": "sPBkiAYA7q7zzJ3hZHRzK6KKQKXDvKrw4vXF5W4Num5YBW6maDbAUaukMasA9AbUTE2otViihAtaiT2X2m2yanq",
  "key14": "38eVS3oN5G5EcVwudKBxqmZMRYWo79DTeevzzn3xEAoh4jNrE5GWG1BRj4AQB3Ky9aNEncXjHxKvstgotA5EDtYA",
  "key15": "2Y8inXQpcxtgRar4eD83hfkp92zXu8gAXSGfDnFQVzi4q8FwzncArKXhYW7tw5TAhrA5DbMRXKuNQ82WUdEaoofN",
  "key16": "imAZ9zdGDVmSuf7taQ8dgXJgkXT7XUXYvipyRG8Hc5DhKEXXpVwd7Xfo1khYUHzDAeMaDfWp9wPVhoQBxn99cRU",
  "key17": "iJzHVfzjxrN1y4hrXky6HtDMXmpFySky3GquzfXuwwHZeGM8aUVzCSLv8FtiAyMJGtUhyx8XCt19gznB5XvWUNZ",
  "key18": "3mS9AfAa9Hn6JU4YhD9kCJqrRzxn98Z4PzxtbZ7B2KqDRnvudPYCtWVaQumeRNQzBrVuEWmmnXQAAC2ieJkpw4Qy",
  "key19": "256dK3VJE5ptuz5cD8Y2eBEhWuJBTMJFKVTjUkkxkLfvqjKkmJqRMa1hERiHNq5KSoYX3TXGXcxVDcURGmXV94BA",
  "key20": "3MtUjW4CoNyCVxTzMARiyCceZyz4aGaWX1MLTEQiZ5HrzN1XxNPb9ucW9qdAuYodnuSyyAGBFs7h9f9egAgAZWV4",
  "key21": "o918thg7iq6Kjckwn7o9C21KVnydgpizyDT885znUwx8F16TYVKZ4hg5QgKXNu4siuW1A4561W98xUYb1j3aE3g",
  "key22": "3mTwca2B5ZdHqpqBeKeGfm2Ca4NKPh2q7qrFb2HsR5FkVLV7JGNchxzVwFh4149WLk5Nc83CNXjxJJn1wAza6to6",
  "key23": "4KEHefTzhokukfsKhK4J1sKG4Q11BJLkagXJji6xFdYpn4h78BKFjLR3y3ge3svNVhq1UfNABeZt3CRcBcngqstE",
  "key24": "5oLFapwapJyPTLvaLW94dDpvPXPTs3zuzgjEHqV3eBab2XXsmfzf5TYce1SdajdMXpsmC9ErCBckyTaqdTUisW6X",
  "key25": "5QdFuCpvKsagpma3JkSedZHB9NaFbWvAJAuccLx2Hh2avM4jEvoLKkaqaZw57BhxNhUu9pdLSt5mLkXZc1BgbxCX",
  "key26": "1q2vNYefEDWzdq8AJRArjfAnGotMX8skaCM3qRexpZAAsGnQuqULPMJgrw3xyk56EESnsDEfPcgZKc72kCAGD7o",
  "key27": "5qz26dWHtjAQKewguamQXKUQzpYS1A5ZCzw1PWWvZAEgtKjKrvTWZvbp66XbpsaYV45rK6sW2k8dtRsqZLMAmvyV",
  "key28": "3tkPisJ1x58SYy3ZG7Nh57CyiDQEGxNEFE2vHjnNmCcsaeMmySnqgaVV2pDU8GkTQanX7tqNGWubrHN83miqYmQF",
  "key29": "384kKXRLWk51CLDoWSy5t7F818xKTxESyAxUwDYnnwhg9pDqNeDUMvYvcnSPxBtorn5d33pwqY7AKXoEpqjnMaAf",
  "key30": "2LWxFoiuEY49zcdBZTgw8AH4GFevvBYfuWkEj9tMx8eK11Eu966rMHpNNVxgn9qQT5TLF5KMXBpQ9Te6BjPBE49F",
  "key31": "3Bc2BbjMCNcj18Hc8kp5uEJyxMRnNsN3dSp7BZbt8iQRUMaSjHSBwGtWnc36QAfCzxvpuenzjkjWaiC5YP8oZQP8",
  "key32": "FKBLSwFVQ4XJdsxybgKb4oAUU1QF9pqvKn3jkDAfqv6ud458KUuGD1mVvNohEPoprd4EwivJrAMMhA5XikDRxZJ",
  "key33": "5w2XLQrNdboSUwRm6u998Zf59C3ZoFKX92Xo4A6f3vt2op6SE7AtSciQc4ZhwxhsCJsPhf2D4FRdeFe825cjhrjd",
  "key34": "4jtM4YmuNy8Drv6XhpFX7FAwsC6cyijRLzk9NyPnvqATRaP8pjGbY1VrDgEDUNGBrP7FBH421wBdWyY1PVb8qwrs",
  "key35": "DimmQEhDWKt1aSZXvLiWE3dL8fL896i96ppUBwjVAk9s4FEYd9haoDsbihXKwKqjehDYsWKdKuzDRLpxvjpMtYv",
  "key36": "3eL8A3p8mSp3pWgmsuvQ183sB6vjhrTQtaY5Vem6XHRocfFSMNVUsnZ4jzt6XiAyxD8HLuPFCCtWBYY9EU4mXY7e",
  "key37": "4hGE1HiStfEXupzxrQo4MRiWV41saKNc2G1a2cajuWJHLhJXHnMBJhCRSR2MxGxx75F9EafBx8j72MnmFsZcEWGN",
  "key38": "4FCTFLjHXwumdRELn1hqJ9F65oiEiVuswZCvAtTk6tZ9bjMTGAuAsqkw4htpqauGUiC8Jdaxc6JX28XfgoWyCorB",
  "key39": "5vGhTwsX4cCEX5toQpumg4u5gfQXx2tUbHLWNNv4QLv7DidEZXoK9oD6fBFEC6a23mQH4aM9tqBbos9SNjEepo4Q",
  "key40": "64kR7TKE4Focu89EjsMNhzPdSUX2x1tYwr356A9rSRxavyoGob16uJuoALcjezwwZeuUmT3DbwZATbZo6F8wGsK1",
  "key41": "4huyGZUPdVC6Ks2fF6rCPRdndLmhoJq47w5yunHh49cBrHXc5QXSkWeizhJCZ5AwFbQTUAqVxmU5AuozTKXPDssc",
  "key42": "2CcGkdV8VZC3PW7aL8yAWux3JKMoZxvvfVmEYvU4z4H5m4PgqbB9PW3SF1JEQnqtQa6EnuQYgtpv9jagDLkidMgr",
  "key43": "4eEtBenRYYbqedkgyF7jG4mAcZcMsE6xsMdFeFUYhzuSM2ofjNFBDSK2k88XKrwBU2GYQbDPXTHhs1kdbyJggn5y",
  "key44": "4ecpizGd6p8Zv5ZY5EK6MqoKcujgF2rbyZTczEJn7pwtXuVcPVBJBmucUeFJMrbKG6JZLnnu11W43xZqW7FbTLUk"
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
