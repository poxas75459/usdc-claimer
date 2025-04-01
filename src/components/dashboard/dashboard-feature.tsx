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
    "2sPFkawRUsMnxYiacxe3cJPK3yy73JsmrLC4C1ykFNhtcJwrDnLxgszjmW3i6W8Qtv2GzGkNf9doeUsa7Hqc32JQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nvZx6185DBijuhzaEL6xcFYN2DbujMqep953hso9voWMLuFW1HsUo91jj9LRjvpNNWxNLidGxaEK7EDXrKkiWmf",
  "key1": "269tntHD2UPJoxqhJwLdC2mU76bSMEjpU2QqGxj1b8swT1qntsM9w5STi37hcUq4zM8mk1bq3hQLYGVxY7igmpNH",
  "key2": "2ZnbtCSmHqiRCfdFYqwne7AdGe1M2uzsMkvzCZH6kRrq7rcRBR4EQM1Aod8KfsKx1Jx5JhUGxJ3qYgYQDB1WwWK",
  "key3": "42V2L19JxAjsGmje2DA6RBThNTpyyQwVb2HHZDgZFdjSq93pUUngVb8fHWGo4o3vXWu9MJLeMjVYcyxLgMoKzW84",
  "key4": "2hCqNbxmM3yDa9dvxj6oAEX4eJN79rePc3B3SXaoXc4aBUcooyxFZHjEkPh2zQ9NDyLi4M9uLf61AdTvnExixNrG",
  "key5": "2gN3iE9KRMFjY5Yw1rF3esiuGvTymFFtgkrN8vNtzvJpyfKHtfU5kLoYXREfGs1cpWja4bup198xcKMN3WcQj5rw",
  "key6": "2sFWPdMwcqiYb8WNEaqj7MxU2nQG8sZXtxcYjjsUjdmVAnSaxFADkVTEYdXtqKkacJsTospqSx9MoVg1rNUJX7GU",
  "key7": "3HgeA7DDzq8GaTete3bSZBb1kX1ghK69vaypGntPU1Af5jFL2HXKaiH2jf7cr5fdDEsp2XqbABMZB8LVovQTPNeW",
  "key8": "UAd7Csdp7y2p3rq5iJPB4N3LBEeABsC2Zm7RkWeWFxju8BY1XMLsEW3Jh4713odUEfG6Smuz9MchgiGrLhCX41T",
  "key9": "67Ks1rnPCqH4NYTi2zZU6qYxEBA2j57CqQoGUdZdLG7jKT91qx3UruBo3YpvzzXBysypz7WeTQzeiev3k94PvcQG",
  "key10": "3M68h3to69U7yKQTs6nQze5uLVaNRaQF1DMDTWWawmwuvESvgp3PzkhAVLsmG58nWSf8tWq5Xv9ZUUcatFK5hQDj",
  "key11": "j38yFxE5xNKn8aqsbQKGgBqzdopacpnPNVQr6NMAocPw2P4KgRWaPQ3ksg5Ydx7jjfT81rYSjUk8TtWiQkptsKc",
  "key12": "2XJL2pQfgTLFShTYsjVRFCKG2SLmuM3dRLLJGd6NiRcjJCfSgggxor5sQPEfEBsEu551dZUyTNEt1ifNHZFVhgEg",
  "key13": "3U8t9SSoPERvZzUo96LoWs1xtP6hRQYsPtnPQ4EY9PxXXs7eRfasC274mMUyH9rkXT6PqJfBz9siLD37UkVRHEwQ",
  "key14": "5e73o6Ni8Qk3M8RPeyFhEcuspXonwzXmwn3pia3wV5Zj49nwKT4wVuhZ9KHjzDPWCZoPoVwnBwPvgg6bw8YYPJYG",
  "key15": "23XFFtoPsFxsU2vMfrT8dwWKwJZkbGfxLDg95PzNc6BKyBjGTdsgHuDJUzqxMvZBy62o73d75iAB9gZ5UVYaETPC",
  "key16": "2BSvWsNsinzXcKNamj89dZSiugedVRbUhvQuETHEtcxaU9cBzGZBFdLoCicXqeNNAQm9VHGhKXbtJepdFCn9pApq",
  "key17": "5W6DdzhjMGuZ1ENNhAUcAf6zwWHaYBeB2JqwcX5nBhJ1Hy7MtPejTHCmtRor13RGLdbdQ8Xr3fJuKBV9BM9rZUNi",
  "key18": "3PdZ152ohaCj11hgiktPasRJYLYDWmfgpPwABvporB7VqpZ7sjW29fQcBRFDiV1BmmnGMCwHU2HSxrdV4K8JxRW5",
  "key19": "2f33SSR349s57SVCf7EwqYGQVw1MPFYzdtx3aSKXRH67yjgJfjox2yhN2CcYZvAB3mERuGkMiKL498ipQzcRXPxR",
  "key20": "3W9eXKtrVBmaC5BfWc3oKqQrW8eiyBm5cXzkJ72Fvw13VpnxK3D3PK3mafYrkQ9fkUE6oNP88ZZ7e1CWjWkV57QZ",
  "key21": "4w8TcwixMp2WKvHoN1m7R8QNBapnmLt2b1MjLGK6eHur6Vz8sr6pNRneP7fmfxeFUFbKVisEMDXMxRbAnV7YW9Vn",
  "key22": "3MR3vZeVM17xzhrxFydSsFR7RRf7En3hJXD3Qg1ysTdWszhSrE6Hd5A66u6pjfjPnpmsxNDSzfszfskeqwPGGkYw",
  "key23": "394nSt5SX3fQXnf6gCPh41jn1uziobeRZf6docHc3mzb2Y31ErAD4hmg39P93vKEpCjQRJDSbKibsmqDQUEN8rJJ",
  "key24": "5SqGqDmshUwA5vvTFL41dGpafGKdDFvmKAG8nS9jrNGjwXNhuqrhBuYrqWqfZU2ChQ1b2ipKEMtwQvHkiyqVd2kT",
  "key25": "Bg3v8s1AkkmEg1Lu2KeYGfh6xbc7huwn8XXLHzGWUdYvMYoeBhG425sbreynXpkY5nr78tYRnJqCUpTLQ2pdhVH",
  "key26": "2wgsLzYme1qjsGRH25BWDPTKVFhBWzA3bTFJvSfEoMeyLynZYKZDSMb71zyXaxktBg3aiEFzbi3WySqGBThJHPzq",
  "key27": "QPNavhvWyYG2mnFTYuWNVpPD4P1cGkeQEQ8AXTxsCyEqCo2tcjoaG9kmtoPoRAjQqAcSPRdRo1ffN5j59khFgMq",
  "key28": "3LAK5yg8zjqta2x9R1xjDdXEr92NZiKNp8znu6MGmbQ1MFXmuZniNx61byxBcJPjUGz8XuURL5YQnBZNaECehv2w",
  "key29": "63cgjK1ftG39kmK8JWemgtUSR4yG5A4zRemNjqJhCPNs5f7GSoM2LM6ErwHBdCZ4b57UACvaYSVL9xkbo6vKXxBv",
  "key30": "21hGX7ePtZ518hsqq8Gqg4KNECxQrN4rBZMXCrYfgPyGwzpZLKFuU981LrDMrBBnMHFCZEraAbtMiWFPbF6yo5K6",
  "key31": "3LoXm2gHFA9JvwbUkpbQvg7ww2tBUuYfjHKY4ugM5h2zFh4GzuKDe7Z8nwz3grPtiCFzg9VBfjqCrLbcG8JiSg7A",
  "key32": "4rXAdpWndoWk8PFv2j2txXubUwtik8Xf467MGsHcMy432WwMTGtQ78o1p6UoKnMSxs6bJPj6cbTk8azFvCcHEfAR",
  "key33": "5Xxm5kuPQbfcAMDfMeSrsc591rbhDC5wf7AjWcjNRrBMhZ52SN63Yq1zyoxwaVLz4XR9yrFqqD2UYTtgfsqZBni3",
  "key34": "5sgZrQpXAeUCKCesRR6AJKReKyRwXWKgNeQoWn7PyBNEcgRkESf9AxZFKBVi11LQQu4AwUWqzs5HjA4N6162FoKw",
  "key35": "2qJ5LLECjnSC1p7SEMCaeQzCMpMRZBE9i3NCz5YuFCkXyMdEg8a6V1D6YnDXQZqwvDdFhVs8RmGUTJTx1wmjAujW",
  "key36": "5PDhXy8oC3UFy5tnDo8DHLWUEqNE1TRAui9hmR4Q428ZaorVYGDrxA4Nk25LgPHVkwc9MoNJgjK6CowqDgp1H2pd",
  "key37": "DAzsY7YuinuVmV1JRZYrVLvL5oPk2hamj91AmHx4f3JCgq1XqNNhhVM3oNQcQ3VhXiiFSYAtwwMYsdKDwLTAtr6",
  "key38": "2ogXuFvowhi7H9p6qwXNSWn6Si3XPP7TkYQpMExzBHnDYPFtZeXTYEgKKXVHbo3Bv4tZ42cAixqiXHwgmbcasSdG",
  "key39": "5U2KFs1nLVp9fDt8Y1oNB4zvLTU9YpnKczXw2zGupHx42puaEQs1XexkS6qn5HoVM8W8ZXnY6oU5CuBxGjojxQfR",
  "key40": "W2uvXKGNTWNzbUYcPWp6W5mVnYXaAemHgBaXFTdh5bjk7ufHgWhh3QuMPdZkx1Fx5NkaZSTEtsxotr4N1x6xhJQ",
  "key41": "2PqQLPhXhh7EsgF9jmuy6DEsdH5fHELRi52bSW2Tcrciyq3eSZKdbuYYDqNaDN2C9SuMAhxGeDLbJg81kAQkJzy3",
  "key42": "2yapQF4YRfDXeidtg31bBtMDx33dyjXx27iy5mNimNB3J1KMXgWiNw8sPcfA7JoqHEFR7QVaH3bYJ8W9f347bwGo",
  "key43": "23gnwUMXwauYHmiNa4ZEymnc79nbddkjChNhXwj34hJXJi1awG5xGjdpXayXqrEEUVA1q9R13KQyPhLfT1oXHZ6w",
  "key44": "wdPC6NV1szQnDFcB4xXFE53Y6itKJUoUYVhP75Y8eKv28vRBDyzF5U47LKRsj4hrJAHwrzF274do4NvySsxZuSx",
  "key45": "2pTbuyzSAmSPkWjBNUeCeoWesY1jrffDbMHFaDRR3thQ81A6eGyojgXq1h4RptLvZ6gQUk5JnRa4bdCfrZZ9D9h",
  "key46": "2Hkdk6G8i7natVy2aPMLt28fTKEbyvRGFDKdzLCNv4grg5fspJKdYYFv1QfbKWc3Ms9KuBhjbk5HckNZ1JZBYp7q",
  "key47": "PjnpPxf7MasgAfmh8nDXMiDWsQUNJ7iZrjy8fk6gjjoYf3zwsw5nxrMqFqi48ZZxzvfjArTX23vDj2huAT8gjVn"
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
