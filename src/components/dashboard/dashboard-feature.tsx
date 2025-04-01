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
    "5KPcVxkjYimRQaXSuHogrVEnoVxVfXWguDsDbCBLN9JQ6fSXry9XsoXj25v2k4rhNvKCxvMs86ZfmurbdPw42KKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wqs5ZZG3W4C6A5rErbYu5WSzqZVTWGi9HuKmekF5he2GYmtD6dTFMYiWGpXSbDkh8j8up7xYTALfV8vNXtDT8Qs",
  "key1": "22adPM418SjYKaDiNBiMPLvBGxYwzhNxvxsiqRu9YiGdLmHvttWeV5FzaYq4cqsBm2p52pMMStzPLJZYSzQ5PRZH",
  "key2": "5hW8Dj8Pqt2F23YpVN5pKqT5GNRUKzczFpjw16gGf7mBLcLARQtqdP3fLjCbkpx8xQGupF8veMN1FUrKSx7C6u8s",
  "key3": "672obfKifDDjnPGyK2ovjc6juGFXssg3ri2XBvihNmHYAqmzACikgWsDxDr6AHq8XDBdmZTEiHujmfuc3YC3p1aX",
  "key4": "57fkcEyfRmaiQ73WNFe1NqBQ2nus9sNweG5btriZATW3P6KEL3RQvEBKhHxd3vf22qmhJxggThyZ5yNJYE3fjCJn",
  "key5": "2Hw6BGwCQbEuB9qNiUNcUGZtPRyFerX6bmoVfcE2fZA3weJRXRXFcBjVB1BPjh2cHi3tMLboPmXvJ59k1WVNqi8F",
  "key6": "4RC2AH3sqzczPcnZpJYctK3CD6SvwtQ71xE7JmtHtbx4WZiJ6gcKgTexYBTs6KNb516QxTdM3yu7o33fHwU969dB",
  "key7": "5YK2AaS3uW7Kn9Xdoo5W668a4c9C9dSfx25yoinhnwP3m3kmxT6QMKX8fXax76uWk26UZbF9pQ6QpJw3rfqo7Dtp",
  "key8": "56R31xcV7bKY7fVdyyfkrHoiP9VJNNztxHaBWRwHPUJ6scsa6c9t9uhCgRtPRJZkkvsDwzzyY4dMFo7J9yRavPCG",
  "key9": "3PQ4krVXqwSDvtsD1M4WBYxn1zYw9NYb9TVQSy8BkNoBqWthFJUswx5SbQ7tLnxornQ1ULWkQVQkiiUp8XHnQ93D",
  "key10": "66PXfJYiPFWHN1eTEfNrc7fTZyLVpubTVyiHkYD2oWSDaKgXBiE6sG985CxcioNUhHXUUMEwcr7Bd37nD9Eqvkcz",
  "key11": "525H5FKDvbdfjFZcUKYhkB83TjmwpXD53KgW7XJbmDPCVCbCJZmYuf1fAVS6GH2mh4MTLLX11fU3eezc9x3c62cz",
  "key12": "4sn1kKGST14gm514REX9ZDEdwRubj8d6Ygkm3U9jhNRTPZecxeCBtXWEtjNdYiWJ1Hqf6MDvJxnc4JUJLWCU1vhv",
  "key13": "3P4WBVUDxV4sHFWXhBiwdNE5HXtHkHoK1nT6Z9m7kyZbGCL9kqjhR9NTpVWFnZfHsxaorBB7uwm5GAANh7r2dH8v",
  "key14": "4rDyZuVmZDK4d8iFtjJ2toVdK1gnmb3hphFMhgNME19Ev8jxXQ6wJbozU3L7jd51dbWXxGmC8GtG8K6dGnkD7W9o",
  "key15": "2NWe89yfkSKtYMuqdYRRHwUK2YBK9vGKFvj23oJYzmrBTzTJND8AUEWhzY2j3G3jB7XPbae5TKpcy4XkgRVfnXj9",
  "key16": "5gK9zfF54XRZXxTZHwEJsiw6pYAwqu4y6YJqyjQzFtfA3DhFBsAxhHDT69FLx5nqZFonCHxnw8qpNcgvoVx55y5G",
  "key17": "3LvR8g6QqDybmRegqVnSk6X3RQ9sqasot4kMYY2ECuWQ43HDnLS2hxXfNeMg4ayoGEM7ty1FprRnAKPPMnP5k9tC",
  "key18": "5Whw6qk48Q5qGQdu163d8hbWBwxxh7AuCG36sBfjR3Lg6D3r9jKZotwEehPzYvEkWMDPsA6E5WW4iwQLcU41pNVR",
  "key19": "4fGM6rDJPRsGuib5cK9EJpMd4Typsp3YMPk9yJK4Mi2vNuJ6QbyPEF8MEsSC47qy1tFZrkdV4C9dwFRA6Q5WX5Fg",
  "key20": "4Krf7LDEmTYTRxXdA7PVhwNRXTogD16bQMDQPmj5R5VLAHPdbM5ArTcAv99NUmqSaRb2V2qBdz7y181cBgrr3UZF",
  "key21": "2rb1DPNkKAh1NCgoaAKKu4z9vpL5c3VFmTTD4vGqTyktLB2BiPe6GV9MiZt4tp4PkZUPAVV9Qu3UkQEzbFWz3o3r",
  "key22": "BeixPxpELu68gsXavytfP5B1AWherK1HJzow3UGUZTqTJnTzMNpkCxz2VeNBvPAw3e5qL911f4s7TCruCW8rV2d",
  "key23": "PhFTEustwfpetChaGRCACv8H7U56AdpJtLiHvpDFtNYFbmnc7zKFY3YHDRz19JvqK5FFTHJAgxceMJkMgK4yzSd",
  "key24": "5dBBzD1oqqg8sDFsrJtHcqY4RdpknEt8FXWVpU9oe2zLBNKFGVXbEqWRPADwXddPymodK33qfvWqKkJwjzHY57d8",
  "key25": "2UjVPajFLte9Fw33C8tk5wotFuz6LzoQKwFZdiqx18Hx82QUybazwe1kSWTi5aMTctu314CQUVeJuEnKLfSxQWKt",
  "key26": "3Dbk123ChDCFNyv3LHfWg5Gx2KWNHH8U4wPQPVT33X9qmTVr3PSx8NN91M1WVqqCJNFoLx2sUniBuzK8mLxjBk9M",
  "key27": "35Uh9UVY6pbjCaPAByt5Pn9YU8iW2HssVsDenFU2856vG9VApkzKtAXVDFzSjtibYMvpsVzk8ZaKdw1xNrL6c2vi",
  "key28": "4exGSJNPkw3dAJEqPjSmMEFimQro7QwWpVkGquxa2tsswTjjuEhKwk264jcMrgaY4iUg8SFLSdZhkrocFCUg6KEb",
  "key29": "4eUoBF2qdmg46F232DQZKAaBaoXuHcyzFEznZU1z1A7XPUf68WpeWm2yYB6Zmpn1L5pSrUtM9B76UhgYAd3LvtmQ",
  "key30": "2WY1RWdcmxVdeFMjsRqzUahzZq8jSbZzJejwrhVWf5Z5b1dV4soUDREr9MX6AXmvqeZ3HJZUVgc2muWBzprKzKqe",
  "key31": "36CDj6PhSsTGYHKBgA7WYfW44uRBx2Z5pmq3n2mWHZ95g2W722b14Tzj48wYEaXSVRFBxyBD7KZ485Kz1u1nXs6H",
  "key32": "4gf2moCP8S3zWBCEPndmFKPHUabtw1hn7YAhhYqxkEmMdLZckcBjZF7cZMCToz247tXvDiorRzak8acxTPgnsUph",
  "key33": "foV4bfUQFX2hfagvtoP9xy1cbnKAQRAYHbDoJdwXBjpapUqBXmEQwpVqZtm8Q8y8QXdnt3Z5RXdN1dYkt7RBJBs",
  "key34": "2gUzSUJbDCy1FGj9F3RsUS46zY1mqWzGYDMSbbUcE38iYMyx6ed1BH6gM9caKUDTczdHUFMgQFXT5hjYjwzTFhCo",
  "key35": "4TCPf9Luw2nXbeRhY16e1gFeRLGUzqk8LdB5pkdDHWFzWnTk5n8WwMnBxbLBqKix3KCJxhQqxGhH4ti4yEvh48pk",
  "key36": "39rVNRBhJRuQtDheqioxij1krYh2wxU2ynxGHK8X55dZ9i5Ay1rjnevFTuWc55Rvnv6U2vxrKVRkjCosBVUtwp9u",
  "key37": "2ggErYxnpvuwKzqwi3vTxvk3NnwpnxgJaczhPPEa37gHs1H1Ags2Diwng8nkCX3xHxyEp9Cp2VsgzfeDrtVt5Qyx",
  "key38": "nKgou6BLC93XCa6Yei1a1ADzJsyt8BDYiHWD31ke6NZnuwG2WJDr1grQSt5d2P1nUYBRPk42d8QhinrhwfNFCXA",
  "key39": "4Wg9pCEintaHdCkNps5dhW13YtxPFQ6c39oReKU2cHQAGgiKDLNkKjY6AYVyNpSXddA2hRDxqirPhBH8VYwUWngE",
  "key40": "5s8CqJ8aaN5TtGjRAJivdxxknKvAX7BdsKTP4vBaVBTjcvUdwzjt5hJes2s8QA9a2oSfYmgvaH7L97EKqMzBabD4",
  "key41": "4GRcUnrgPQ6gg5mbyr2MTBjkASGMvpmU5WeqkEmzLoMYMuQ8iGtjfYNusHho36gfnx8mPUuoDprFtEnMzHV2y2Y5",
  "key42": "5uZmdEbfnCpD3fUtvmQVBE6SSM1NXSFf5sSb5EbHm654oR2sWPcSPT64oVYA4ZnGY4NbFzC4ZVTJgmjjexgeF3Uh",
  "key43": "Dse6s1XaXZo31H8C31Br2G9yRshvsk2nubjuDwa512uhnpJoxHz266ztKt9Wau5saqskXv5CnkS4N1F8JwRqHNL",
  "key44": "2CRSmPVHHWnW1CBPyXK1xY1kb2SHXzYmfigCHAJtchEvViczCVkNNVLG191SXA9zRzem8mTFYsv25iYRt8FpwBjo",
  "key45": "3dtzZmV5uaKKReuQNYKjycKT7kZ9VG76GRVP5m4SWUiVfW6RT5xqszxNch422Uh3oNb1w2Q4iLkyShdY27N3EWVJ"
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
