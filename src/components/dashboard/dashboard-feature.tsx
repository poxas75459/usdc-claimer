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
    "5TpcoDAEzygwjpFqonK9VpMLU9sBv11dzgURGeVU7DcZrB82pMWmFF5FbqVtA9F58dU8C4C9RWq7UztKHpBNeMCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xpA9rQtcuTxm2mqi9eB312pofhFydZZC8XAMqnGYTmX4fP43NZnnFW399nZRLVnk7icBHB5Za2BPpzoszN9psjm",
  "key1": "3Z7XpgeVQKjSANBtsJXV9CM6wDAt5MsqCgJDGWiu68ZGB6ahuggSAS6spjsHjiDtkQSpixxBk2WccS1z1VvbTFHB",
  "key2": "39kqWXmSX7gSPt6Crr7EJJQDmjNHG223xoqFWoyFQogq5moUWr9TFb3fjAcB4mrvxme4c5P4Zinyf17w3a1RHkR7",
  "key3": "4MMqj3V6FwJbMjeCynjgKMactcpsCvxctowf3rsKQ78Buk3oiNh3yT44gHNBwFJZg4j6baHWMk69nXQbfhgxTGVm",
  "key4": "5uxzvukA8gMwuT1oMNw6vW3EAiZCsqs8MSm9ALFNXgXWPzkZSNKT89R3yv9sancJ1oBeehStGLXXbfeMqZB7LWrh",
  "key5": "295y6s4WecKgK4FFDb2nNC9dxXirrM21Mqh6XLoWdEWAWVX2HH7pB8KiQBv56WPKjJMwbMUoyM7s43xiTTG8PCqT",
  "key6": "5bCo7fhLm41duDfNH3xjjnKoRyuUsdcT2bdcGVi53W8wZwBer8LMSmxviV2Er5fVWMZ3hfsXU5vJDwVAguy65JX4",
  "key7": "4v78Et99ft2BExBGfoNsEjwb8nPFc2CvchmNCVAfqxmdb3u9mwM7vCxTHSKzFAFspvaT3bC7AqMryp3bJPZgmVtw",
  "key8": "36kKgHzY6AfGPTDdac4AjUAThkC2Z6wGhF6sokViQab4W3BAUdp8veVLEq5LBrKMa3TiQrvhmHgfFFZB55E6xJ9n",
  "key9": "C1g9Ec9xg3deXgYzVH167hb8AdGWDMCiwj8L85PhpMMtWjwic6c23LBqLqRhcKY8cLfVGrTeDr1kWQAV2WvD7EM",
  "key10": "SW62RyFPRG4nQkyCaA89tWrzGPexWAjiz3xaAccNR5VgqRs55exvhKmBkkZU6b4dLj1RjszirpxUngEkCUY1W43",
  "key11": "4NtuCvs7UaJzk4GzFp1VourN6nApLPEssvKWK7mCqZcq5JJ6iCk8PUF5c63t1spNPE3XXY1n3ynKMnnu3Fp2E5Dq",
  "key12": "47yQszSwB42grxT5znpi6A2x435xs44ZTePuuApUj6EkjzdzGBc4nWnf4hRJHN2KwQwY7gGAy8uKw387gazRzxEq",
  "key13": "2p97SzhdiKbwyrEXMwx2oG9hYPpbSV8PYJoVRJUn1PoYYUwJRRtsJywwuLvus8mWacKXTNHG7mNJkm3d1XmQmx6J",
  "key14": "4RoKviVwaygUB4J2yKMEpdAYJRbV1eDMWbZUMgGr3tF9XxseYHnMBGZLa1849tjC5HVinZtWYvtc8HFuZRE1juES",
  "key15": "4zxLUM4KwCdqS6jB3jUNh9KFLhT6pPPRjEDJaaYT1CacV5etiuiNULhhN7NvLMPwF1KwfZLcEG4vYDA47bDssq5d",
  "key16": "2h1VNxi3HNMp97tR75c8EoJyT4WANj35dCN5dvjtoeMyH7LCmr7puvEbyWWws7NUn9MCXU99iox1BPR5BopqnNMY",
  "key17": "4JWZzYwPngiHnRTZ7pajrTVaxQpaUu9dy2GAwaJYmYLRFdJttC6Nk6Wu1ct6ky2ymZ7hGwBDaehYrh4mvSXuat8R",
  "key18": "58xG5W339fvUQcpNMzTmMwhekiu2okJMiTzi8QqiwQbwpejxh3SMHoUNM5YdFKL3w22bPVt974Lw52U7Q2gndSyG",
  "key19": "duLWuVdL3vgVL3UDxM72K6rV5s2ocsmRsDdUMPGGvWuETL8wEUxFACU4FR7czXzBbuX4k3BcHQbyGaR1iaZLB2w",
  "key20": "4b9km7czEF9UwFCDNVH4QPcZQNvMRGKHdnJMJcV6cEVrahhuBd9GJU2HHykNnQcz4ECFoHit2HFCy8zQQcv2ww2B",
  "key21": "2kPFQgfz6HdTqGATmYZKyQj32W8TPujQJMEDDFKL3YavPf6mk3oBVgTC7XCArBK7UUeFyFsG5RcLX3bP13Sik2A6",
  "key22": "22qxMxe5ypSBajVqJLmBLXkL8yxuErgLbMmFB5jnuDmMvML1rTjJ4jhKoDwo5o6bqip9RSiFzMsim3CaydpTiexQ",
  "key23": "4JVf6nC8mgmpo9cf7tp7b345ksJagZGqUpb6caC97uHyjRoDQtZDrXHAdP8BEJrGHdxSNFzRh1J5ZYzYrSvGrMJv",
  "key24": "43QBjLSQWs9AN7dfgXHSB9gSAfhRK6kqCr2Hn7846nRYFRcY8oAEn3JwoBRVRn2cXWQzuUPHuDmbqUXtM4M3dBQM",
  "key25": "4htgKLgS9DGtqdpXF8Kw9fKw8jdrhNEt2kVZP6uEkfe1ve2UtYq1WGTzQeWAuWmhLj2qs6cjf9zy976NFNNisZyu",
  "key26": "4RbjMfEuHU6moXDuppxvJm3gxTTF3nHWjEsYQSG8fSKrfBQ5t6zhVRcgs4jLCYpQLChqXPqtQ7hn2WV9mCNAiukW",
  "key27": "U2iDEv5kKzjPCYE7bUGWfjCfdgoSnzT7ohz46tmFoKJyzFiPu8eh3nscoJkYMAF59Q2LKpkksrW57D89PHm7Aoz",
  "key28": "5EhRe4FXCYehWWUjPVkjR8vPK1pitjspxESc8dULfr56CT1LiMmca2jtoYWKfUfuTMVpvevKsiYaG8uWs3jzutPE",
  "key29": "3Fu515p355BS2do3W4e411Wj3KkZN4G6bf8GjbumFiBx3mBUyb4qfY7GUTKHhEVEnahhARiEmZk9LFNmgUmDLvt4",
  "key30": "2hr7uiUMZ9Ub5dNb2AoqwLXWvYqUHHKdeG9Xujf1JEaVWebi2gmAGp8PKK2sWxK46A8BpKp6v7tkvE3UkYmQrfw2",
  "key31": "yrvnuyo6tni4YeZ7A7cX3rmkqTqDqyE6NrMka6LvWqgMkNFnA2ouggvZAZ54aCZvPjbwcSBLe9S8h8DindeCgru",
  "key32": "4z6bRTB86q4Y5pohzWxcHGVoreBWJ74BpbUPJqWRCWpTS4rcL9mjFkcQJVPesWtSZVXqxXJArorQWmxaVZCGAbxQ",
  "key33": "4FTQA8EGJe5MTgwr6HKjyAooyvuiZoKqqMr2y9zAgzPb7MGSVxVz63HPnpyk5SF9T6dJ5a5ZKRnfzYFMiFu1H24J",
  "key34": "5krKGTg6jRoMohU16hTMfCWhnUuTg73HZbsdsA7MsRe3VrBfio9ouxsoyvG2Ffzb9YE6sFtxy2ZuSzc5m7Ng6LXr",
  "key35": "4ZHzN1gAWew1k7L7o5xCinHZtuwFX76JthX9BSxxYmPAWWBLmfza2UttAhJfLQ6fWQ3eSZm5hnW4rQ68nAHcQdaq",
  "key36": "4yovMdAs18sSEDxf4w1jE6DczRzMM86UDPYNHLUVA3V4w7zCVo7VmYkHWt3vmYPcFYP9c8ScUjpdkgdtYMJrA558",
  "key37": "2U7KP4EpgSkUuLZ7Q7wgTc2TaKgsySe2NbiRnnUXXNv7YxFR25oCNUzFEHuxWXqUQ6qgRC6CBFWP9xNawYUpHw2U",
  "key38": "4Krspq5hYTPQEnTrwsBFT4UdRTAKhkpttxE1no1W7eKPsaofjtFpfFVD7VkbJoaMUKFNrhDHeWVV8u81Frq2GAbt",
  "key39": "2gbb78zSbyLbDmM7EpPqUUPRsnTLsxGynVPAmmF4tk2GA4Dhz3zVLycvVYA9Hjwpf2UjLGXiiH2yZN66DUeE9BrG",
  "key40": "3hMCPkSo77i4G9DZA7CzwHGDH1UtjH2hNB7LXfads73cmUGs3pA3Gsd25j2me51tFXtkdFHHKhcqohoNvWHtVwDx"
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
