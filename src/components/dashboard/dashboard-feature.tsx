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
    "3k3Ybizi4y1UCqydzkFCUZd4QajUZg4DxAqANDgkW74iws998DnmQao2Y28kJpnVePaSv3fkPjKY4VqxobxfhPPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e53bmxRobvqS24GwePxskPRGMe8ktmEzpnpB1tVoptkF99bqq188h6y4NNVciv5F3VdmGCHEr8PftQaJhSK5NMM",
  "key1": "wC9D8anwNtdw3qguf7HCaWyJfH7ysUAyzdViAkCat5c85msu36MEcTKNAt4HEr6fnhjNQZogLFbfoS9AXwDgfMq",
  "key2": "4uQXQc5C6jjjpNVwdSVCceBKmUCTeWT7VrHu55aWLv8myfVVdCztAkDigbEewHdNVc33nL8g8Xzk3iMiGHAWjeoS",
  "key3": "BrJctg8BinyqQJ2NedSXVg4UBBtHy5cicaYdG8SFbV6srWaYcqnTrAPGM47Y2tCiLLmD5qaz6F5V6sJh8K5ExfE",
  "key4": "GkGEkmbfsHpjDxU4f3iSDAqvrPp5W78irAPrpJTukUzpYSDhyrCDHsDJvFKAZCeqi3jjaVPbLcCwuZHJw4EzXg5",
  "key5": "5otK9vnfQ3UwQtrupuydWN9xptevdG7uULnEaGawEsPoZLAbnVjAJDD1HBx5nKyKMdxVdzZwcyYzexHpVXhZu9Fo",
  "key6": "61Jx95QDjiNeoovKt1omDwp3Lejgwa5Rv2b4w6iEekYcGZA83uL1HqUbFRw11Xm5FpaUZs1S8cYFojbcTd7aPbzr",
  "key7": "7q87HK3vo7LSGnVBYkAiyyBfTusUM6dxj3u3iSADWRhDrazboTCnFX9ePrmyYqkLhsxw4rPPHFyfrJzD4e1hBzf",
  "key8": "65WPnoXHybj6DTMP14eiJupRiR4YjJMLeBWM4LSBKeNuSNbFzgeZqnWaqxwRAYvcKQzVrF7o1bSnmkBmxQJgyAUi",
  "key9": "2DTqBQuDHkV4Rt2VBzusT1v3iMh6jHg9tTH8zKpsLRFztLSoPHxxHuhZgDU8FBHCAPwsNq7ygAZDbj5Zs6YLJKwL",
  "key10": "3ACPGbZsmyMgWN1Py6s9RcBJhxdgvhFNLPvhDxuK3Hy1ndKEEHpyaCoScUMVXGnw9wABgV1d4FadumCFuvVP7HfT",
  "key11": "4YH1tq3pR2CNua7gaWfxRv5gTV4yr1bL6jxp6vTPNvDki7VkfxiHwh5puhknHDEbRnnP6CUyQfMnCh5RTHNmZcz9",
  "key12": "53n2kwr6CWyJYmYsHRQTTLvB8P1ZTmNCT2PZcDjJUyR1Y2rNeo3wCUtsBcJ5PKstqCXnwzmNGiS2B5My8Sm21fkx",
  "key13": "27PJM3kxUF3NCWX5mSzHYof1o27NeGYigKh2LwpsEwDoayoUoXwYox7JPLyXsjdp8tEQjKhGULYCopng1wnWusFg",
  "key14": "2auTo9qWaKrSR5LweGMyRrpCzRcveaS8kcDnnM96QpcfeAY4iPXTaKw9WcMfWfCVKtSMZJ44tvRP1gUeJdKDnM1w",
  "key15": "8VnsqFPJnXZjv5h1skyp82zi7R5jyJ5drqfBPHKrzQqsui2YsbcMcrYgr17Ao88RCPCTmKCwwqVcDA6KdKXg3Fd",
  "key16": "3692Xv3PCU8JzkkKpHQrPD3VsnqVbuxQSLUx2kr3UNkUGKKcet5PQ9CtXxvN8MwEaZgJ1uKaCWHzX9ieZJW1ZJyB",
  "key17": "4WQB7Yn63uLoQM772husdWb4HV4GqWLhe3wMbmtPWygi5tPerjboEEZYshmy8PgDDFJFdqEBYEDnKh3ou5Me5T4J",
  "key18": "5CZQ3KxY3K1oN7DZrGNaDSVqXgfCXuwbyvfsoyddimYVaM2CScp5XvdxDBdAd7jhRYrwmWUVas3ny7UToPPJMZ8M",
  "key19": "54uwDNJPe3D8C772Qx3J6Kh6FurYRMVsonBpsGtSjSBEK8zH6TD2XsPXMoQ4hXxZmg3ZJU3CyXcCdtmPmMEteSr1",
  "key20": "2iAVyJoho31oQ96eFUpkEHFc312uKi89u4JaraM7sTShPb7dzhRrkYokBg7hXqtryApXm2yUf5J57SDHpG6RPyPQ",
  "key21": "553TUkd53QL4NghreZQc1N78j2bz6nJiU2rTh35s8D5G4KdVoxUn6W1RRyzgJBT7eRtHSSVugQNv5dr8oAtKt2dB",
  "key22": "5vtZk7KqqA12qgK8ukBPCPY2vWNsDXuH5oEgG16PtWXVvzU25j48rts939N1TXJSMVKRqeuKPdogiFwNzMf4NQZH",
  "key23": "2KMKZpUvDwXdq8QSTzxzecUZWkCAsvsBtyXo7YB5UJgvf5qr9yZMpVHLDekmDzV7B8gmPhhxfDcSBT2ic1G66nB3",
  "key24": "4bwtWekZxV9GhM6o8NGNKdMBZ3oBBoMjZzDcabcCj9jdDed5VEQUm1EjCrUmfCQ2tKNGEgvMVzFTSnkHCkGqkxVS",
  "key25": "59t7HRdJYyDwjorzrkNzXy4k8GDFoVqntQyavEpphGRLqh1HbtZ4TJu7MGK5pH64SH3j9zJdbuScvExGP5Yv7mDo",
  "key26": "4kEHXDVnF9dyiEu8ZKfHhz9MfXUk4cw8fQfwxP3cBUnaaKPE4cKmpD1fvCChsmYJjaQMabE943oqDLJpStz6M1XQ",
  "key27": "3s692cseez1iZ2UQmUqJehBezVmUvugXwo2NakvzjsnByRFwJ3DVXivQyhxkaNHVhWX3LvEdiKY9wgJzMX5JdXML",
  "key28": "2jEJWKAFYxEywZobN5kDmYJe2AN8dsRkb6Lq6bsNw9FsbnxbbF6KJSgwWNwJL7rwUy7rHyEgx73e4DnDJdzsc2RM",
  "key29": "2W4KwtfstxV78ezgCvdKW9zgb56gmiFg9GNz3xfMoBq6uaTe35K4Stvs6hbQrmA14DWqGXZxdXpaRZWiPG29ZLqr",
  "key30": "2Z1UGupSrKEUL1mbzz2aGfDWqKFGdpm2DHT24b1DvQ8ktx4aHJpw4UWzGknLAxjur8Swh6AnMASXAgG8xY5pPW4P",
  "key31": "UmBxaGkdoCNrzVfyASczrvZKKfmyMxvSjbzrPvFP2ic8C1EJNRjcxkb7wq73LewajnHrfnbaUbYjespStbMPVEx",
  "key32": "douanV35w4g2BzSLUXCgsVpdqiaZ1V387yoM2zK9NnrijqwXjn19AUNP76YUEEqPK5pBrDzbgELyiWUhRqCPPzx",
  "key33": "JDauJHNmKBLiezYeyQmygePV5Miu4ufXtTCeZtUjmUvVa6pqxDTT3Z6pgyhc6nHg3S71cHCQbmBrHanMCJ9VtoM",
  "key34": "5T5Qxm6GDZoLkEsDg9QfuTtnsmPriuLVivfPeYUokGt52azehEq7ZS12rA753dQhpNSR2BoBZ8yXk4MLHixhT7r4",
  "key35": "3UwufcCxmFTprWnPPDTeH366hYB6x6ouqazu78aNWXCgak5z5TJrQHGrRkeFs4CJmrsrsdv1PcUX2dmmbNQuRweu",
  "key36": "61oDXN4kMAkzaXYGscjZMpt5LsRW8gEFk1RF5fzdZM23AP8pndUCLM7goUCeiJpTc5fpMpSE3jw85ifE1qoQEyDn",
  "key37": "A51SLeAxpTMBMiSmC12fAZWekgJFEcG7CPSssY5ardwTgYirX1a5Lb2CZRMj6nmMZfa2vcgEmDugjGCAJrKEyZG",
  "key38": "2GxqBGaws5rhgWxPeq1UxLy2Szm6HuazTuvhJfGtWURji5zAuh6tHGw2J6FpBboRveArY9TedzxRNGR8fjCuGqGJ",
  "key39": "4r1tJb1dsu7YNYeWRM3K7zMyu4Qju8d22RjswJ7eh2iuwFgxzSgCntVVbgKisRiGeB8qb1yYpShnnEyqYQn2hCHb"
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
