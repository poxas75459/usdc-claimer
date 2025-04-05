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
    "3rLTVFUkcnbSFPxy9CtgkdquGUZ8yqi6da4YDk1Wsz9oJsRdNu74Fo6ie3pFUroREqnSbj97E4FhtKsKVr54K4s3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41DP6q9x4bdz6AkNHAyN2j9RGDzZLtrhM1AdYNgZ8coQzkLXwidJsjy3dozshL42NzLcDTkb2yQCgktVhWyWpMWE",
  "key1": "2xXBGFfRMa27zi3v9pMyRTHGtcbzKaPb1qWAwSQSUUq6dEWZyEJsuSe14MSgTipjdvSSztqPZSMzzTimtbD8Wz5H",
  "key2": "522fW9KxoEFS16ZeucjmDfhcYztZcXxmjXZCztxuooEdMDxUXHMKadXRjjxAQ1i1KwHhVeLu3afVUXvspLm7ApAK",
  "key3": "4yUZRH3ppNEDKdwCZ1h5dvq85NLjaxNHD2DxP2PoKHitPQ5jDcjDuNkMkYHLNFzQ8KRg3TsdkSByEDbFnKHLMMy5",
  "key4": "2PGpnvfAtakNNQ7Pz8Ed7csgHdgmnq2hjcwJoLVnBXGj7i6reywmAmg4xUfBRBASovKCpofyTs5m7VEfGCixASn",
  "key5": "apWwE7K9Xp77czQe7inknkWYBUyC5WE76KZh5KRMPGrB6A78EcxSrbn2fVUWZu7CqAYVSzHVcpnGWEqZRfcaxi8",
  "key6": "36qfobCiteprssWkaFaBRGfQBegWAv5ZCY35RSoYf5J4GJuFLr7C9kRu7nxPYLTqhc2pn3zA4VuPzgr57BGXQYpF",
  "key7": "5cNCKswaiPLGpBatxkv1se38YzZV7MfJ8vGUEQvqNDbkcZSzWWNLmVDqcU28RFzDSmCr9hG93dbZDPQKHgeNviY8",
  "key8": "5DRTXYEVeCTgkNRhxAbj9iDmvANHVmzVwVnF55iJhvyGaCzWaxfNh422ofH6mEHvWNCgTDiSQoPxRrurtvs6LfUY",
  "key9": "F9pzxNn5vW5ufQYriioa1zFeVH6ac9tMrvAo4DqRzR1vsNwhANE8mMgYY8bVDC5W8BGunpVsDN22qfiDwD6Umgs",
  "key10": "5cB7K5tn1Zx1QNZJQjxVURhfz9NgS7Z9vg3f2vqYw7SXhy1F6uXqhijwCoxTvd8Gso8WdcN6i5qSB2TbNpLf18iZ",
  "key11": "2H1FeLwKpiyx2hDGzx28H2eVeHTQGUJPeEey8KKhtnDX7ABygi6obhTQ5WzFXoXzM26jwBdNNDrHiUA4iWjSPuDk",
  "key12": "mKpLcSgAEkqFAXpMcVYaq9WzvhH7MWPTBJxKg1PrqwsiKjSfyg2ds1ozFzBhxfW4rFKV497dzVxcr2oM5vo42y2",
  "key13": "4id1skKgTxhX3xCootHxnGbubuCfj1gyDEZpfJVHBLNJQV4ocSzz5AgLBgQiAvatFcdWYw7LkNxMCbigP6k7EA9B",
  "key14": "4fCkX9SuqhZkKgwAFsSEYdLkPZSeZTcGfFjrGAwUTh5FAzztiKzqMRT4Nfjwig6VJGUK4Ev2c4FB99STFvsiCA7R",
  "key15": "5SUbXitQ3tGH2LYywncMk4HVGXWr9W86jtUZFUApDsQcNMGqXoWfnj2r8rpNvc4sRsFvwSAd9JwzsUQeGP9CAvCS",
  "key16": "2J7A83eyuUFG4op2p1nwVJ751AV1nEpk3s7fjnMeCk8KdpwQbfqJGvdpeZDmsNudbxU1yo8rfyFcE4iGJHH9c3D4",
  "key17": "5nQsVW4o6sxRe1N3Mp3uif36AQMFfY4wn4Aj9FKRgy45EhArainFQhjoEgVcwVXZEZTaK5iQo9LwxYdHEoQMy5Pg",
  "key18": "2PNqqjM4t4MfUu2akzSVmgEfkPfubUY45bVmUU61d4SSHAW5d3aaLx68YNXXKmABd1XvqApb6nbx32GAYuEnjhMN",
  "key19": "BVzspvPAQejDR6CbXVoeLyikPi93VQTsBao33Mpkj66UWaXG9GiogR7PaGRSSrnmwkZE2VEemRYxe1jVsRuetM1",
  "key20": "67nbBN6UTQitK2HVzpVqdkZ9vBbt6WmUv9P1LrXHsqYgK5KDdzRbmmG2UmWbX1nUcoD3jx9NVBT4ouDZBxUwbvfK",
  "key21": "4H9TQM9yT7ehuxpssnw5GTGo6T1Pykw7nHgryorqP9jRL8SAUhymm7gFjnXBrNjVS6zbrwUcmPc9rRd3hSQS1nhd",
  "key22": "QuNBvfncasAcDgzYq1Fip8yPdCCuu91FmiHMj8WqnbT39Mj4DH8gZSMKaKXKiNy1eZJCNUNGH626zWm45mCwMYm",
  "key23": "34KeZeHNgeho82wmPFENi3eaDf54qQSPZHju1Za17DLtg9tovWWTCaKYWJkj89AxXA2ijxodGUnf11c8XKchhn6A",
  "key24": "3pwX8QUecmHBujKfvr7kNwoXPtAgQyqew3PxeDQpYAM2oAG6vbWxhMpMQVBgPwzRtqk35r3btqcKaGgx6iPmwur1",
  "key25": "gSYZwryWqtpcFkB3zSq2dB4bNynerFmQyBu1JJYaDtJ9daERcwvqeU7mBSiweWSqrFPhgdjc2kukLFETARgbiXX",
  "key26": "r5xS5EbU6Ptjw5ammqMT9DTVq94UtrjU1yqYq7B8bJAXGDjeorzu4XXA9o3mVTYB3uZKexvaEeaGZfQCrcnbVEM",
  "key27": "461mWBxqzLPjxewagfTLteyeihf5CVSHNR79G94TXoVa7DEuK1q48kBbynNhP9UonXWsfHH1mQ7jbvsxKwJnptQK",
  "key28": "aMJqXMpM3E6PPVrK9ueQRdYoDEsC2fioiqMjPeiAa775x5t2sm3G1z4Nvxer6YP6g3i1BQMEGPY2DagGviT3bwn",
  "key29": "8TnL9ztX9zCkWT4xzV5ecDRMjdx6APKr2CqHF6u7wnPB7ebFro8vfPVvobMBJrFY6Nkeh1UguM3VxeDkS3PAvRW",
  "key30": "oCiCauqZpa95XLqsUr25v6nJysPjJhb7WxbG1aWHsN5GwUt28dEsRfiyWJNT2fWdGSVfye1Juu4wN9C6S1eFFMz",
  "key31": "4Qd4mKA3KPjKVskiFxj7enn6zEGKfehJQbjNTH1DwizfUPGwRMacQxMbEbL1fPBuzzr1WMHB4TmRGdcfMQ9bEEcC",
  "key32": "yqx3dzj8VR62zPyS5no98zFNvupZNkRT4aLpAvWsbVXm7NDCeXfsTvaQeBBXTrqXWZTD5sF3FaPbPwzwDbEG3du",
  "key33": "bKBSsNZHR9SbXAQYkuo6qAJZzQKHzjJGLNubap9gYB7Uo1UceDopr5eoE3WzStvaLxZXTLFRj519e5NUjEoKHh9",
  "key34": "AUZ6VocfhwnJRj2hPtUyhUMM4tNGK6oABMuNvvowUwfhDe3UtScPzJe3SxXQ2XA2srbTQRtoriD5Y2g5tiCmZ3G",
  "key35": "fAtMDTVSut6f722AqZpBDm82kWRaPokEbG6hko93bShjRpdQcRLTRmPAAP52g7V1Bkx7Zy1jFXZVe4WnHX27fSA",
  "key36": "2yqxBkD7vgeGH1B3Dq6UxVqXG6KS6xtvhDya2Zxad72GLVNBib5r3UfEBPdb8yTCRRLBWu1fvgU9vuKzosdoHgtr",
  "key37": "3ztRk7XzEpTxoUzjMBdRjPcJe6HfNxEUFfiTSbLZzWpiUWTErZZxUgoHnfJrmzJ5MvNrMXgkHNnhQHF3XhUTV71c",
  "key38": "2HiAfD86CkzFkqtJSM1hTww7yT2VFGLpHq87b1D9PCq5hFEBvn9QcGTtDZ9c1iaS7PGH7QHVDss8pLdpasWxKV7T",
  "key39": "3pmiKM7QgiJEpL7UDYQ5d1EUwByhMy5pthXjR1C4KwCf3snNftN9DN1KG2ASQQxFSYsjZ84wDE1cL72XvWHPxr3C",
  "key40": "4U8gAES6YSboinVFfjGRtF7bri5wRjabn3qjoEArxY2EZ1oA1ciyeaLHCSw748dKiKb9D1hfoA4mFCzT6E1cJsCw",
  "key41": "5EXDGW7qiieydRt69WrQYQwRYFXhQaweFHQYVVJaeJnmdNSwqsxLrfUJZd8hn4QChy72wRYYBkc9bqs2nxuq57Lg",
  "key42": "4LSzVkArWmspJnTVth9e1C3BGhYWsN3Jmz2YVZmrwfQWda1UTZCjPiZJAcLUosSWWpd6XhadJSUwrJkTqQJ1fz3q",
  "key43": "5mvnE8baMma4TAG5of7oPAuHQcxfnuRfUyK8ywKDcwopbWKZqbH5cwEUUyRqdZeWanzUbxPcM5nRTRq3ye6qvPMK",
  "key44": "2ZrfUBnZrTHd5p3dCb76uhQDm1N4iPV1HPyyJHs6zgmDy1MPmZiMzrSg8U8VA8S7q4Hbr5XJmK81AFFPC7hzZsLU",
  "key45": "26VdsWeNGZwLtYuyLZnxuFvk6KiXd9oCXvr7ixAyq2eJxTGYdB5hBnsAo9UNJoYtMXtpQcGmG7dtZYuKkrCvbCUX",
  "key46": "2x8v8w9FLm6qquyDp1ypd2AGn87c9CToRiTrxPDCY1GeibDqNsXognfCf9446D4fz7eEHLWLq1AMm3ztxLvEAcgj",
  "key47": "5pErD2eUX5RBzwjVvFGcRmKzngHeSPDXzWXhunv2p1yHiuDDNsH2xjR8S4hmAZtzyszmEacTgKGP3e4HTu5rgx82"
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
