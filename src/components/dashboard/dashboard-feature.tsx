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
    "4pQXkQxQzkqbRmV3iiXR3K4Rx1qYXMAMcvG1rAUHwvQtv5oc72wzYGBycFo8A7pwWPXBYE3896DY8TcgqeYanrV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "444EDkVsaWfGs7QC5KWEYzewaJTtaPv6eTyFzzYPqQiuvubWmo1efDMz5jdBdfcL2MkwcUzNhYXBn1waQ3kZe1hk",
  "key1": "Vw4d7jHN4y8rhPmzaSpVZ9u5HFxfig5FRAbpqeyvb37qN8o2RAuPqRarCUm4ZjmfiTTMZwhMH6QYAJT2F8hQTay",
  "key2": "2zgUXTfY8Pk2Cz62WANa6Y7JqvjBHzrTmdoSjxzpe28ihv8y6ZmE8WH8zSopzbNJ5aWjou4CrRwrjK8rewrQMxRR",
  "key3": "3JH3gERS1VfcfEBsjTMtJVCZsjYYKJu2zq6G5E6Srt7mxoubEyTZ2joEH7pvvV5vS7pTu5WLDGVz9wV9D5QQUouT",
  "key4": "4k8Wvc1sUffQTzC4FYjuQGg2BnQUFV26yW3yoJVxCviCAEdXmxhEyZTbGpgEebx6JYUisAs4B4G3TK7iVamYYv7F",
  "key5": "4xaNmoHcttLa7EN4weBLXUJG3ox3gRNoBz3CxLLHA6LxTysSyhifYS3mRm736zrpWKGEapDsfZr2Ew13Gr9oPYbc",
  "key6": "N77HHLgpKXLxc4YTDgEZ2qvESWW5cJbGTcsEv2iLefke8z6mYCgumWFEXvji78VUbmgaVFKTV8vwksXeNM5164j",
  "key7": "41PD44aYvdbiq3ATDELCG4xWVfKVFkpgNW153Lu9maKKrfQUpBVvQmzSXA4KN6XPzYPVu1WtKduRwHxr3GDRtCvY",
  "key8": "2y1dvHMCPTrSiEwooV6tpv2gSmCtvVh6uebHoUn4qSv38jfyGQ8h6FTUKFvjARu9RC8cfEGqjX8J8M7kreEpuX3E",
  "key9": "4PFRUMNVJPrjnEQmmD5NG1ga29gheH7BqW5BQwcunvQGVRNNhYbPDnzcvjW25Czg43xmi4nkLgmaSr8xRfq2k8RR",
  "key10": "4eiLjP9FfLHd2rYEWW5pK4EHGNhjCRRFcA45DJQ5NpjLEA5jFKZcNsVvobHcuoqbmFhSPgwtau1f1oFoom8H83Uc",
  "key11": "2eYpYX1WMG4KNCRMqds1wi9u8sYjLMg9MWh1kxqFNzSNEcqKD9pEqmJfJRB1EgwJPkqdZGXisEuz2b4sqwoPiu3g",
  "key12": "XZmLorfHdcceM25u8m3QTpg89ThbcnaWC5ThdrdWP9hugGzCRJ22eTvcXdnGmNXX8W6WAW2vyR7gR9XU9VYcGbi",
  "key13": "qpTxCMqxWjYCdiTqWRt8w7jaUgyqkF4zczcKxwU4zkWJ4dfWGZNj1shMkq6a2GyPVgwqW5LU3bM8rCAJTcFzHmT",
  "key14": "5sTzVfLC2h1Cnhz4hFpRPiU87B2sVpiUAxz4LsvkBaA2VgAr2u2bmV3abMPwNRkrnbkn7xGiftLCeGdnRoi9iyWG",
  "key15": "4mZ2czgE4dio8X3McikHtBEKaBZkmQnb5t9GmqHnjc15NnS7Tcc3EUGYEMrJmJs8jQj1kCCA4VvEFJCm4FZJiA3n",
  "key16": "5PFkJGe8W3g4udDPZBQtE2fm7w56dJfjwtqNkXcD6C2XiQw7h17Dz2JUXwAxjeNfhxrHrCAxetPzAQSG97vbvTBW",
  "key17": "4KucQD9LnRGZhsPpmk57EE3cSZc6zVqeJMuop3Biu8G6sNWFNM4mXjY2gpJ7CSDVQN4MkG87UgAbYDNP8qDuZd6Z",
  "key18": "4DHRkvoe8Coy9gMrZk5MVVEC2pGx67roSS1fDMyVofWVDZ5Kev4rdhrvgMwYSFj4zNaB9agabUq8beRL6YmE7DBN",
  "key19": "2CopK7HJw6ZPbVfZZJEwdqWQZebr1dHei7ZS2dFW5B7bCsfakSuYR8coDmpHyWrNaB3raAhLnisZ1DDSgeoiWN7U",
  "key20": "2YY3bKXRi7R8HNT71UFAQmgc3A2ooAyzyjBHgMbiFhJN4B1PqHQhndojC9nmL8KM9tDUBsQrwbgyfRbGrVVnVj2V",
  "key21": "5oHa3Yym6XRBYg8usrinWJyxE7zmA4jk7jb6pykPvyeoXWskW5kixiD3D1uJgGRNJKnMvNXmPbVedjknuzkYRUDY",
  "key22": "2pHo6eFQm1dHBqanovtHmqQ2vs59vg9ys13cgwziZyhzb8zGZsEMhzUL3aU17ZtsV14hdU58koRakoVhG6bwj3Ej",
  "key23": "2KTh3jb838eNzourvyaKgFoQs85azBShmWpce178J4xzSyRho5F7Gwneaw44o14Va1iq6xfnsZWQXpvNHCKKxXC6",
  "key24": "2K8LFmbuAbpF8LDo7UXjMnptVWeHN5NRd5ngCVFMHD5RbwMnCZgnfRAg9EpBs5CavZCPVSgDSVp7pAm2sgD1DP87",
  "key25": "2hm1yejqLn1uHVkLVN18fWzpwgTWtS9k9sbKNrdcXx4nkfpK9pwc9jbsDPoq8Bwc7VVog6JprwPrutamyrZ9FrBR",
  "key26": "2YBZnW4U33T8BSANgdCXb33GWwQJm2Y3acKnLmei8GfnPwHGbhFYVZRxnYKgztF2FXtKNzVBDi6bWr1FwtPWXD4A",
  "key27": "4PF9fjDzrqmt35vg7Zrv7qrEzCRQkJXWBXJ1m2mo4PzBgkDb6gTnTq52r4t6nxWN9RjCp3VEpR8mXXfTLAqrnhAL",
  "key28": "54SjRRsrfhzfFMv8rRCme2KqwcHPTw52Ja3dda7KgeoT1x9QqWJocFobBULd3WXqoDau62zWEiRCw7YGr8wk6onX",
  "key29": "4bTzDmiZfxC2UF9WRHt2NJUYxfQk5UMFvgQYteP74H25a9ErFwGcJUNiaZKmDTpD7CCkVTy5zAuG3vPFkJw3KYjb",
  "key30": "4XxEaXPicPqN3Z6iGxrSovVLASLdFE7LiX12CEcE8YepG7pn7Q2G99WkGBbpBY9L6Wz5zHexyULoNrYau4y2REdj",
  "key31": "2WCnvaKmstiaJqf6MGLuR2Z7Mx3dwmWwbZSrgfKccQjHM97sYMxrFcW9qPYyE2qX72iohcgsoXgncWdfLrQHNEkL",
  "key32": "3hBTC2R1nduzbU5BdCD8DsHTzrTLmM3qovuSyip1SmCRcbZjLsackZ7mQTF6CXqEmCg1pYZ2YubBQx2izK7hYLPQ",
  "key33": "GEjPcSqi9X3rJ3UTWE7ye5JvgyjFU7xAgfoR1q3w8Kkxneu278VTVg55k7WXkL24kusVdrirSwtUAp4AKZ7XWPP",
  "key34": "5P3qndRvBnTLnH8ofyUckkpD3rSB4YPm7gDppwnx3SwSaWd3tmeQZy8SYiyRn7VzqU7LE1wyLFRgdwBTy6pm6MDJ",
  "key35": "FGe8gpqDYDTJcDomXbdz8NoS59F8kq7dq1ionA6iBv1AZ7xMsshg31JBAxJHL4CF6zEQCFQ7q3JErXGYtNfpYgi",
  "key36": "G3a9UfasLw4cFtQa13rs8xSZkFk5dUL2BABrCg6SgSoJUB81CMDqNo3hSs5rufGTcsja3EV3U8Wum3y1yCPjoeW",
  "key37": "3yyYNpxTstKYbWwhWs7dPWT5WUL1dw62B8Fhvvh1FfSRhQFKA4bTENTkGWT8QQLRhHvAAfsX96hmkuTN7AF8odoR",
  "key38": "4cAe6M6UkMFybafXkR6N5SHpWRN15XhJDtVSjsqZWjETRkMvMWL5ptgmfYRMPLGxC1eH7JSJy65944R2TRAyFJJq",
  "key39": "XZuZQYQPKWQNs89gTS7YWEL7CsJsUgpSPoEoxqsfXZv7YbziGGPfC3ApXFfLLGcfqssZMq1PRw42KEEUeQp4UK8",
  "key40": "zBBirytsxW9f2FR57SKk6XsSYRFrGLV5CktRiyxaGbgE9v3deCsR1nPMCr2fuh1Ht5L7ifCugkRaywErK3DSrad",
  "key41": "553KzhTcsNi3dYEV6SwQc5gssg9uMe1vbVM26Tx8xBrvknzqeWeeencYD9YydFMDWpSmNXPvTdncUdREeMbsUe9S",
  "key42": "3wy6jng5NBRA53uKifEZdonSa3uCxdwH6Zg9GAyCEGefmedkC7kpCofTKW66Fp3jhk95BXnhWqZgmTpmoL68Mewx",
  "key43": "bvmXnmFdJjCKBQbjdJ17tmLk2RaLwiUwh1QVKMkh5hDqqUt7mqTHe8JfXMekTi77eX85Hjk4uEvh94BfV6158QH",
  "key44": "44aJnUNCxHucXmDx1mJJVgNnEUZushY1AWRuB2Jq4j9gH6gXgNfeAGWia87riDMgmZsHDaomEyMkkXNRCo9GY2Ci",
  "key45": "3EVXqfdjskACKPNFSi3zDdNC2BFQFk4q8TgcMkjDrnhfPUZh9g9WZL14AcpLd1pdvEA8PuoWcfuVSP76RnGEdWL8",
  "key46": "4rZuG8ms2kHbBRwRW8EonZavi3kh4gT5g5Vz3x1S2EG1VJQsavx71Hczy3ba9WhUeLvRXVRkFDHwBAGxnDG3URCo",
  "key47": "2pTUzjxqeQkqcbKWexmeorQLdo3Dy3xJb3bAZnmargRoPKcCkK4ieh4RLXoZEqHumbnufpHvkAutWE9bdfGRFASz",
  "key48": "5Sge1XCLH4FHe3MZp8aoqVHum2fWA1TiNxnmCghpsz9mZ2b1pi2KLmiN5LPTKQv8YAWJ19PW93tWVNGKY9XLPpF1",
  "key49": "37nHkxeFBMF6tPBboMWXXXyzxJi8zUrNtr6Qu8CMDG8tncesfJWiZtfgXq418hUGbKKVMY4a4dGJ2ioPEk6q8n5"
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
