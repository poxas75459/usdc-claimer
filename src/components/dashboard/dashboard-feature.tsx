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
    "4zkyFYYQW8cPvpKVkVeLjfXvB8zJnkLrX1awWK61vXmUViBzudUw1y5EWGYPGFJExJf559hMczWhwfFtvBSeeCbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D1gbhBJ6ebDaJreZxSsDQdagUKXVV2w2Xhr4CPzumxt5gpi68jnhECryijirG2XGqH6UooiJjK7ujTXENrdBAxo",
  "key1": "52MYyoD5xNgjEkB8MfZSGD88y5suCyGiS29NjjZysm6KqrCi7iucgmqwX1dA1L64C84JBC2NsmtiGuXydzuXd9s5",
  "key2": "AkdqqQrTbiDswLCirJNzzJJC2cvfPxFaj5rqEyF17gktZgxG4G7hJHdJ1MbwYiiVDsS6BvntoT7DMxg8df7YwCq",
  "key3": "2RNspxgTcFgnHiDM63Q8tU48h35zV8U3ZXw4b4CLQs48HpYcrdCf2nAM9RtAMzfU28n5F83yZVNdjowNX21UWoFG",
  "key4": "RiRB555rqsxAzTqvM8aSiWy7mBSygDD2xSMV3gyse5UnBdjMTPCQpzeJ3VQSwRUvWvtVNVqUgoT5LcrSB5EhuCH",
  "key5": "3or6UxFfmvKtN3Q8pzix3ugN86xVTxNDZ9NXdrAEjGyv1EfsA11nPxh9y62dZUB9vdgc9dCAa1gUyeVgxjPcsHYU",
  "key6": "3tcpvU2S5pYUdpMUUrputs7BB9f3LoeBxkPDzdBP9Gptw9N3EFZkKQSaQaHAE1GqNrgCUV12U8PjGtx7srcpyhDN",
  "key7": "4EHesQZZLgCDZCd96ZKXgKnK2pQB2FYQNMNqv8KFdCJFraKdd8X2dKr3L7pWj7EVzT6GQkrenEQRHnDS93JSasZK",
  "key8": "3ZJCwGTbXPAFmUdSfnF9RkYJiX7KFDvVvEZxcmtrQkBUym5R4hsdE2SYNsPtG3FFn6cZww2YdkYegoBsLwHtFd6g",
  "key9": "5mfcVp1p9uDrQsXdKXNUxpcyvBEBsab3pPSBbS4pvtk2NK1QdecTU6oZQogmUdse1oGKNFDoGT8HuyFPabBMzayb",
  "key10": "3kKL9b9rn8nBuY9DJerjKjEPB7NsJnvkQhuD6z3AQfionN1zN8CoZoVjiwnzjtHbbNDDTAXK7kEynN7gNGwpfDsi",
  "key11": "3sRc8WFgJrkmXyiLgCDZauitASRRGmBHbX3Q1ERBDNYKVFUt8enonTp2iBjs3SZxqoj7V8zsCTDQ5ZRp6n7L6Psd",
  "key12": "2xVc8FeojiLjYv9zvn2byGYSSBKwjajifbdwhTxtpUxXBUhoxAMyb6zNgNZQSJ4Fq2aBduMWi7oSnEk4bZYW2WEQ",
  "key13": "67iSbxB1jqDwNhPBw9yBTN5QAWirVxpiH5SBJEfcpvHLrGQhpr7PvVnWqpEz3KjLmCZf8CkLRYYg6yLsmBxAnCsu",
  "key14": "5AAcwJkeuud2NWfY1nF5dnTVADnN9Di74WpL6e5pVeGa9tC1MVxS6dT52yrdAfn2BKnana1LB1WoV8yxLK8WYkXq",
  "key15": "5FEy6RxTB6ioVhBgHejDfUFCnrFbWqY9XPi5UrdhFXosXDXpSPGiiEzyBfJnHNXVZvxq2m73YFxAkMNfgyjasyxi",
  "key16": "5usV2ZjZaXQdLancoFBUXfRR6D1zfGDhDGcwFqcKNtuc7hSv7HiApPAiY8cXQii5hEmsSUfJm1dPBb7pDswupq7M",
  "key17": "5HsE6rTkCWV8hUD21oE7Kp7tu53MrJPHWeL23MBWeUKnBJbo7ayfDBzuFTqMDGpkVyj52uBHWrgLtvKcJyumn81e",
  "key18": "51gKjnTJZtYSwF3M58rSXmfkQyq6SCagTstaks8Z8QGm52PYhs3Lx5qfSQkTLzkuJiqUP1tQMuKzcxzjLZGfetPf",
  "key19": "47SdSuPNDZp56tRoDWXEYkfedQWn4d5PMsxrhT81L9YyVXsvdzK5Mp9PECzb2aa94TgcJhkihdF3ZFqmLCyTMTyX",
  "key20": "3fyq8FbceKAUMih4FwYFhspg5d39ngXJmKdW5ef5umcoiY6rumpXZqCPjDox8f8KKcBDLQPtCmq39QHbNQJmmAwh",
  "key21": "2WNseANpQGaVvityvMHX3ZAtaoCbtWHxh1ajFoNkLS2uEtJ4nVYHvZx22xejW7sBNpFDxSv1craGTRmZh9G3y1Zs",
  "key22": "43K4JAMoNh6qSfy1WSnmZpzed42u1HK8iwbBQkvYiLVssFSS5LJSfuyWB3HekaaiCh8hjcGpKQwB1MCrkEPpJ6dM",
  "key23": "5JVzges6kaQsuys5mnpi8gfNcEiqgfDJ2FQXG8cbLN9gzfeRguYikRKypAp6kuJzCoHkPojPB7hauy7CKybJgues",
  "key24": "3gH2z6NdWhcwWxboKbpsftsWSiHbHPTqpoVEcs5KvhJq6GtdVKVgUYY2fG36tRFsqLATYvoGE2Ker4BgsTJSRu1K",
  "key25": "2Z2tkm4SSYLBPKkyXFP37CVEMhP8pC5r8m7dwQfwXYptyG59xGKMAjT139VKjFonGuEJg4vmZtZWA1B3vX8XsUGe",
  "key26": "M1fRNa7RAreuyqWbe614Lbp7NrU5vcRnxojCtPZ8q58BkvACA8kHDGjBK5SkfMkBfDBnukzW7mgb85ozrixTqCE",
  "key27": "3sa6c3VJDwqw8MfMByntAEmQRDSCZqPL3Eeae7nzHPhUmVDpe5ZjoLuDozvCY27pKdo29Zg7ikjbKUCqvwxRvJ2Y",
  "key28": "2GpdSWvScrKyV3wcapPH9vqftB3PNDptBc4C7dDvpJQkrgiyThNNZtJdjJTeFjRc5nG8qwpXuge46r35iJGMJhTW",
  "key29": "2GLEobcR6RSHXaRDW28uVkopk8xgnSe3yNMUeGua9x4WG8i3FW8moRRWrziecuo3JNZ3hXQtxesugBNBS7REnotz",
  "key30": "34jJm1uLSZNoeM3Q5DAaYzj87BT69cMmTMmMX77N7hJkc5xpL4c36Mwc6S8JbHiUojaGBL4JrKqVk3CFeh4kQG52",
  "key31": "12Vj448hWF2iQdPPVgKCf6Vw8KQMqy75VK9dTLcoz6WjRS6QaiNetjkARXYGeB2H7ttRoQ9PezVs9iRXaxFq4KY",
  "key32": "5JAggSPotDQnzyTdGFrwKMQg4Wjt8LNJazKQaPSjVheUSUtKWYwFvcar53HJR2nuycy3um7FnAwJ7RnYwmU9S6Yq",
  "key33": "2SxqKCys9HW4ACXGXTDpb2riD1E4o3cxv8xhvskD9RoPfn3jBf5ev1rnQjbX6PqFDn8zbd2FYM6BBJkAMohELWoi",
  "key34": "4KRJPXpcKKjaNfGuozNycvZcjcBTvjGUKsXa35bhVY6o5Ai45DqAftYVdsz5o3uT9pAw1mLdmo5wax2qJZMz1o8p",
  "key35": "62X9A6rYa3kzHXuiyEoRrtekMbqi6WTvRjNLkaWkrd3WzTD1ASPCJGpssoFQk3pFhucLrjwAFJWPJezDyq9fBnEU",
  "key36": "58FaAwhpYVEkDacRdm6ZvQJUxtYTiW7tyxJ9eL61UK9EzpvfoErP8APtcA4HwaizjFwzSuZbd6Z3p9CMCR1KiFTP",
  "key37": "2yVCY3EbVdVNeeNe9juL5CEpAfBcrjqPoFXQqZFCd6fjiAKscKtBY4zyhgR2YUbEQUUUrZU7DfdQTdTZkSDUHzjV",
  "key38": "26xuWvNnAMcnzy2t7ofpn6MnWfFpiCLUe9retj4Lwd3WmPYqsWedkZxc3XvZpogwDJodTiMuuRQHKQdaLn4Uazbd",
  "key39": "2XbPLhu78TtAD4A8AxEGhzzJycdjEiw3crkRV9Qqxb4E1DXZVvGdcUrbHScXxdKE3Rfjs1hqdfwnTQ7dya12xFzk",
  "key40": "3aNHRzmThQ4jS6fhRuZCWiZh1M2JCZMvnxpuBcJkZACMLK3QJCbropMijpqQUWCqvrbTyYCZTHjX9jNcdDCGtchr",
  "key41": "2eSZKZ93tCH6mKgzFyJCJkJPJyPdrMbPbEUB847SExienpi1dPnq3kpauia35BeeuyHVCSsuHzG97YhEmuCHG5Yq",
  "key42": "4usvXwxS6gDVC3Kp13oCdScBMAnoPbEFHCswAFY1Aqyp37pvEkUWUPBU1PYTAeyU6gEpvPee3CbfGbDGDRvBAmLc",
  "key43": "5NXonWwkPKgkutYBvYcbpxAZbfXpoU9faY3SmTF4ZjvTMo5xqnL4cayQUmyn4hvMGxE6D1vGzXBK4gzNFp5PpB4b"
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
