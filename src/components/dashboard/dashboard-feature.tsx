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
    "3Az52aAYvzHaAesQ8oXySfaPvYGfsR6j62rPKwmm9J8H8Nf7xusan4fqwPTpwyHH6vvLGAwx5nXCBQjnHuLoQ1J3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9v9pCDYjUBLNVq9S5Pj1BeQkgYYT6jXUtZg8tnRzscmYhRUmN6arKHph7Ahrtv5vDG3WKmxAkVThKui1f8o4RGA",
  "key1": "4XY9QQNzErLjDHTU9yneAC9K4MKFb63UQGGyASjziJwpwe2ytZe4Kef6bhYeop5UhtQFDtgdXND7R8cbC8EZYdrK",
  "key2": "3T5wDN8ufT8haGxEnoEWXrJTVgdbJ5cHiRJY8nqWZPWJdD6GGdmXsSTdMJbX5YrNPnPAMnNQTZGEc2qejHHw9jtM",
  "key3": "32exU8pXsavnEdHRNbruDCnc8LKYU13dWgA3XLkpDtSjZzbTEx4Pa1JxjjGbKktHKS3j6Mk4dm75jxqPV4f6eKx6",
  "key4": "5fV93vNumUskxhDJWbCyJhEk7LA2tENNfuHkc6CNsrLz3huyZLtDo25txdyBdTvx5HC2sMG1HusUbzbA9a2h4eZC",
  "key5": "Kp7b6DkHTZP3bT3WUzC6GaeMtMeddh7vVamUPJw1AdD87Dj71SoVv7HBkezBHyZmjRTHrEb49kgV2ZvJcaGxugx",
  "key6": "2RpNMXXi4uEf1RDfznavSEgTehZ4FZZtuSPfFjENxZYsytbJJrPXK61QZozfinniJCtxdZ4ch9WhSuZuoZjZCaLu",
  "key7": "5e6PPv8WM3JccNkZSxXg1rh6guh5TJvMf6G1TZ8YsrNtHJf94xDZ6ZZwEqstioiUfrs3GFKRoQdJih1v1NLcNYqD",
  "key8": "3bqVEMSE8hgqecSCJkMEp6U4bCMjTU2wNY7eJGTeHSwi5yHWByhSSdz9NwjpV4xEDRnnbvPhVsCyoVYFYSK32Ua2",
  "key9": "2VN34vZqYs2ew8Jt7K58aFpeqzZ76p3xXtYoi6mnpcFNnr39znkqBkycUbuUU6zqTFChDWgwPzWpoTxStRGwxAbQ",
  "key10": "4EEShaM98vq5CzNEEzW9D4ubmaheHKpdP9uxmSUGjuXmGrtV98BZaESSX8Pdiwq7CS2xB69N8cMiXYzfNKW9NaCe",
  "key11": "3ZhnDmFdLRJwCYH1rPqMRK6VnRGpfHEhgmGzwZ8ynZ56DkkeTKXL36J1Km1xqwAfKVH8LweEMcjnq77AyLd1zNG5",
  "key12": "2VL8DoWZoGznSNqNGXpopFE6tDHeasSoiLf3NBc7L79cLSMqyBzt9oeaBboa5BbVh9HbuTDNdYcMg7xrAtnxXFgW",
  "key13": "5GCfC3jZFyMcask2qeMvQer9ZW46Z6SgcHrTmRFsgv5NASaSu11mbCQnb1NeaqxU3iQSzWWw2ZoMNmTkSUKiLch5",
  "key14": "3RKSkccmmrisbTxuHMiH8VvTXPQQqT1XASGDbfpueqgR64FvNWyJ9m718BGqNyZ4BxXWZrfh6wCbAxYRGfvnHDGh",
  "key15": "2sXEieoeLq96B8KhhCbkkKbmATEAjxjrsJDJJ1yK7bZfFP1UNaxQxtdDMG9HADaTyNYhs8FL63ZDkfNnspmehDjY",
  "key16": "rfUNWNModxoH5kig6bU63D25iik5hR2He8muwanaqzMr22b8Aj6zP9xgFaA1CxE7ooczaJFGGR9mH5ZL8tvEJhX",
  "key17": "h5wdn7TNHiWGr3eEFVT5ysqB3zhsdgzzYRfvuSTQdekGTqbxDCCzhQBqa9TGwZaKbjJfs2ZjLR7rh2jgpWuAFrt",
  "key18": "C6343MxXvgC4SAHoBZpvbogzAToNMBkUEDX9giKd89y5uPag3j56Yb63bbH8vZHMvxwGRa7GiHzjanEs5npbqKd",
  "key19": "4aq6MxrUuJ6iXGDs7pv6mqG9oWpWQuyh68XSdsXbUNfraWkSRZEp1AsETTBc7i28nGDB4L54ZRn5gsEGgKFTM3vN",
  "key20": "2Vvw8xgSakisUpEf2vFCnk8PY5thu56ZvRy55F4dijKzMBNUPZNMvqvgj9SYdcrSVfgmEhCoBwQT3JKke4ekQCUZ",
  "key21": "2h3Zio9Ldrn4qYD8pGGyB4pVviEhU6QkekVPYz87m8xMuhcruiSRbuSrrAnpGMu1B43LdTWiB4K3uvWH2u6Kh544",
  "key22": "31MLvtVpP1ddNw2tKsDerJhYSPhvp5o1XGP3zD5wRrREKLowzYM83wLJZtKhHRXtMLp4He2HKDdJjBaYKNFXxqKu",
  "key23": "2yXy5m13wfmU2dK8cC5EwXUwtxjBZC5giCCGo3G2FZmY49QPv32nDG6qrGRHUmuy3Q6iUrvp7L7ShsvrzfhpCj9m",
  "key24": "TqQy27xqY8bLw5nY9T6zBkaTGQxTrfSm1LSh85eM6enp8E51kDm3dqRK1u5KYUoagTLebLLGSDZ3Y1wA33HinsH",
  "key25": "2svnut4W7xgRAzQkwGYoN3V1tXBH2VpUqyaUa7Ay3K3hmk3DsXsHgzPBZareoMPWgGSzxPKyTNkbJR2ieKKDU4ms",
  "key26": "3MF9zACFrfbJc5vGryqnNiAosNfzjdKmJiWhtvYUnmAWPS42w6VM7rhLFSdGoVaSgjQvf1kjYrX82PyZSCpqjWwX",
  "key27": "4knaZhN9KiWfF9ZVJVsPCCDvMTnBbCEQHFzndRWpXYyfZWo62vdFviLzqwXT1Vr81yNcyEun36A5jwi8ns3mZroy",
  "key28": "5MNRMGhRhbRDajFkefCkzRZZjCV7ZgH9dHjwEEjLi8QMGfdTaZB67jHpgkxHbDZv8mvvF8CjsNqEZETaqggmRT6B",
  "key29": "2Lz3v362VL6WU8BVNw6AUT9WbpEvKwm9qQzqfShGCqjWnaySLXm8VQm2HrGaciiMpGeAJBUSNhDasvhF56kTE1Pt",
  "key30": "AzHeKRhFbjQnZQZ9aZRwB7NRLVThwn75qicnhJwiQNuVLrnjSCT9J2gJzbgYab9JXMrmTLhypnjJnEyybttE4zL",
  "key31": "5TEnJ83VTr2dya9iWSHCucqp2hZPWvTNuYsDrA6mZCW3KvwL9bWoi8CiYMHMK9xk5gG4T1S5Y2Mxa2Wc6wLtzcwB",
  "key32": "3k9uZPZ9ihpCtPmjs3P1gkMiZUuxjsCWymNke6PsDtrVvLdkgBwaJ57gqwtYfrdK4WSnKE39CAo2WDJFpQf6WAXU",
  "key33": "3PxuorCzCVLaAJKVorDUc653UnrT1d6WPBadZyrKAJrkJChaYK4CuL5g5JpJcwVZhVXDXBqdK3umoutsNQLaHgWm",
  "key34": "4zafFP5voyx6T4z2gMEowVLadc4arqLCJzJbRU6kZ8Awx3DYw2ydwPvGEzceSPSdF72BVsuhYtfDNZX58UcrarpR",
  "key35": "3VhrSWhZtQqQNq5osimVBCBpR3hYp2oQv7jPWs6j9a3eyq4fpivLrQ2QXLtQd7fzWdFiUezJ6xeXky9M8jRHgM3m",
  "key36": "3KbwDVADau7AmQU2DZUMh5Cc7o5g8gkCiwKrD14hZ9taisnoy1C1m7fHw9k42eNS8cxCj8mnZmCYSwEydTAYaGrW",
  "key37": "4EEe7FhzxSFpLVLedYK3kVg9fcdc3kMe1UZbAMAVbERoM4kZUGjM6KkvLbxEiKiL2tNLYFs7gJHdAhuykGJGQ4Zv",
  "key38": "Yk3Qi6TdmegBwrvxtkgf8VYv8hmyKjY8s32riPSF3HqEnbQFTYtde85Rtw9UhuWiVSaDUJz9LKaShPyAkDx6X3q",
  "key39": "3Q6eTWGzb6pUiAhsMmtnchcvRb9ekPE32QZi91xas22kVzUwuv3GK9THF6iwpb9JW69BwXhLdY24AgkxKDafueJ5",
  "key40": "3KjL6fdKkhzYYG8g95RQqQuw2jYTtNQG1T7tBrfyxEzWaZpdttea2p81CvgnkU1zsWwoKucCMo4p4dnMR4FDYxCk",
  "key41": "3ULZejJpfdqFcLdvdj8Lsux1w9w6oiz5BW6DcXuw9Ank11st3YGj8Z15UykUzD1WMZxj77hJ4QKPnsGcUKo6MxWh",
  "key42": "53yk4W3fYfSZBqJ2zDmb3KghQ2ygYR5oZaykRF3L6eDEDdACBwmLaHhhzHYWWre4dDVWrT5vtHD4PNnCXZqqPcDM",
  "key43": "4ZENE7djQ7YbDsbXmYXLHXsqyJvgHe5c1gsYaYo6uqY6EL5NrLQsvuvY9WmC9JfgDe46oBgYpgsHpL4sNJGE691Y",
  "key44": "CZfo56x2eGkKjwRWt3UL2DSRiwBU3BzRC8Tcm4puHg4MrQQn7LGJqPfmxLK9sFZStBEWYshw4VhAFppLrUdyRdE",
  "key45": "5Lohrr2rMBMKqoQEcAWwHtzTYQ7tzL52Ag74Y94LmWk6Pr1Q6T7qXfzo62NbiiftFmPoXif31EnrmY99CekcJGdV",
  "key46": "5HL2gXgGK3pKAG27Bz4VDWFVXh5p8nyGDbXCc9BZSaJwpABSPSayhFEMfJThgA6UMribLsgdZNzwCRTAK9A2f7nV",
  "key47": "JcBtd1NLeUzdhfqcKrLPP1C8niDjRRnSxizc6hqJuV3AA5RyowiCtszdzXBuLHEaECV3dpXcAaXiUfsGbk2DGPo",
  "key48": "44tDUGUNJePipxLpnEpQuoLbXdpyhLbyEbkonHQ4b9CZGxSPDnqPU3zrkVxpEKVBzJU8hpSqs7F1gBkUSutJvdRN"
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
