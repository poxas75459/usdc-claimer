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
    "54ihf4BuXpLBgfLkfJ4hRk42v1SHHcUEoMTvaiBPebmW4MQnhKhxGHv5K4LdRLGuAbW3UDK7DbN24g5S6aNuF4zE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xf3PHffW8tB9YJMiFFghzpTmtZPWRXGBhbSHR3uzJ2dLmBCYqPHtUdbwbNVFm3VyLaCYpvS1D5kaYmu3rjFQn3F",
  "key1": "FMxEhw1zmgAFWaze41udgW9pBBM4yfY26vok9DiatKhJvXCGFU7AYQSdrybei2H95mPaD4CiaJXcXNvwGpunvHe",
  "key2": "4wPgR8E5hAgRjiSmLm6KL6b7KuaDwumywae2JATC9FWowPvsRy2TT7J57snuhBH5hecDXjjZxEShqSBswPsM4JQ5",
  "key3": "wH7fHQQpjANt7eRcFHfL3P1xWPFPUmPVUtNHzQgaqEZAewYHNqEHA3vNSkj6waRH2PUj81HLdPK4Lnv7LtZ2CyN",
  "key4": "4faHH4hAYdXKJYdKGZkCE9XY7Wd1UakYxJYUv6bKGiN7bdsoshyE14R2zKWQyfzRVNttMaub1pVSJJdhou2YcRSs",
  "key5": "4JwguCMaj34N1aqLHa89ns5bgzvZXAD9yjy1QBFSWDzd5K3dSKVskkQikPuBXVggAYqZSdmN6w7o6yvboShr1E9j",
  "key6": "3MzWnEkPjcgDMfdsDJvr3XmQCkezpebjoWE4zMXd7CujmTeFqipVRyCYNv1HMCUy7MENmjqCgZr8AcjhRYF44ksk",
  "key7": "4oMmrWSpLRZfL2ueBPeDucjdUh8ERDqqgPNL1Zo71b7JTC3U1vc2bV62qXRpNUWUnCote9hHR8Dxnjka8SuD8LhA",
  "key8": "5AFgpaiih1pb2dZ1iHAD5fY5mwQfZjY4y2GiNytVSqm3u9AnJWVwbgMgHpUPygVKa8GvJEUgyGv1WBvxbF8vMcfm",
  "key9": "4VXE8D4uMZyQ8osn7RrkbzEWSJdK6vggXvhUh4XVS3kPfekbZ7qHtsz5hpeyePoFZLpagpdiFpRvE678tEfVueq1",
  "key10": "4SKM2T5dAC35JSp9j7ywqE87UsNXqtZqCDyYnZBxEbmeMvj9vEu3RUbr97Jomup96JgXFaA6pHh6tScFYZ2rSxMT",
  "key11": "3yNrKaGbBmsHMzhLBysTK1ueB819376HTk8QYpayHv2hbLBHBoYcnq2tDu3Y8p9G26qqmJ4XWSNsAeyxSBf89k6m",
  "key12": "2faNhqUMSoCFPAUQ5L9McDiSrZhjGVS63pYMjPRdnNtZ4uJUggPAgjWjJc7V5UKwaW2QxxBu9m5oDpr1hJmwh5Cb",
  "key13": "2eTEYyHK8zBHqqAJonnZCviy6fgU3A1LcZXrDXL3kkx7Ki8JE2PZUtz1gs3vYA8Pmw7HXtYwcuMFVyQfACnqoLwK",
  "key14": "3vhyHYByuN6goTb5Z91MWAPZG8uBU13JWnmzzi2rpew4yNYCghM3766WedKhemhpiMSQakg6DVS3CHpfyqtKEAyA",
  "key15": "2bC913fxCmaNcnqZQiYz56xbwFTbp4kE4JbyzQffkqc8g4UVnVajKh4PtxzM1p7ffuPgfbkxieY563aD2PUoejve",
  "key16": "493izADv4C9qdNktQirWQHg7tiAov9m4SzDd2FrV2z4jqyGaRNri514r3AvV12GX1XsmZUbQNxYkGf8yiTe34XiY",
  "key17": "EVdQMz9dDQ2A8FmvVUHwShTFCSJ3WYjhgEJUpS8sdBgkuz7XUwD7FZgyRX66TwoRajCTdjxnNdfSvxEcq8nJKeZ",
  "key18": "4PDz9W6Mmd3msoo2AdZ4og5So3FAgvvfTppvdpo3tLZp4utoGfQtWcwqJBxmFmfygZBqWD3dmsuZT2m28GifqzKR",
  "key19": "4ndmPpCEtKbXPeC3MMBZxjCzfvaxGFyNiQCzoE3rNRT5CEGFSg7RveXEd6kM7EprfYxEW6qGMaHGMBaC3yFk6Ln2",
  "key20": "qV613Z3Ar25KxNjU7Gb7Ue2DfhuVqvrg48Z1adv87W4uSno5iVxxEFWiJRzAodMVx16TrSj1QpJAxki7pCFJKSr",
  "key21": "46y81aRPvHeHPe1mLAEF7fBqeKgLEL4AxLC4f9XCtyiegF2qQXYJTp7bWam81qdboTLqzqwV2t6XAiMXXezFxXYX",
  "key22": "3xuEGGuWGsakG7igAcyRsrLCGCAnWP3BG7N8ngnCUzJ41sDeXJJUEqCWACkrRu8Umd5XkioSUKM6YMixVVf9kktS",
  "key23": "3gERnT4E3ZCMeyrSsCcJ33pu9M9JCX6pd5ySzVoHbaeCDdkW2HQSjqaVorwzGwyPZ5oqZEcb3BUQRvJu2YtyMAv8",
  "key24": "fFJ64cTtYwBzaAPwbsbG57Uwmf4juomJMzhvVR1rME2oEQK3B1ZSFDS8RgA1UpMt7pX2fb2V9xKRtWB2NJH9MKa",
  "key25": "4gBMQVtfDciAmcdaXBmFEVjUZ6oG8aXc8g6ZqS2UimS2y63y2pyg9iWqwdc58jUzvztS5ddb3p3jKtVnystss1gT",
  "key26": "4dcXeueFgZ2hm7QdFH5Wqw1GPEChVxyBxjuGUqAEewZBac7BX4KKaqVhzjcZQ9cH1iMG2xmuQ1X85dVsvSv6ePck",
  "key27": "63WpwknKnsTzzxJuSdyZPesUEKcN7heoUs2PpxSJoCwJJ8NTCsnLYrXsXWzCCACbm4dALgVr5V6PU3QfBse9iJSj",
  "key28": "486yptt8eTWmgUB6m7ahzUSD9T4a7XG1Lt5KR2tp5c2AEApwuSpBTWr87bc9YW1gjEuCzepBZwJa75Bn84JnADww",
  "key29": "2sfWYPyUVfTcR45dkzs35cqVKUNBW428bWnBHNm54CwhczkZtajoCzmNNEMtvC2RsDRVQr8PywtNR4wK4BqvFgZ9",
  "key30": "3N3JaBNCEViyzVd5emG8wwbsW6caVLW4JP7q855cK1Jo58EUqoS4tsLe3P7U1DK96rADYvBXa8pxDDjrEdjC2uBM",
  "key31": "5F9857enYRMwEJFp8JhMCkq1zSNzSexrXMxMuj7UNcEUT7Rtr2rVLrF15JrzKBHdnK1w8Px7p1Dvt24kqwG1Jbh7",
  "key32": "5ukZsKBcQ8SMHgRSGkY3xZEZZ48JLLTLBvA4Yu8YVUmeVSwngbife1m4AAPhQoNNnj6BeGqXc2ebGNAgY5iebrvN",
  "key33": "3UeYLH3xfLbzNhs8mfmD9Qb9kh8dd7CpspgSFS8YCwyqWR6mLjT6TeVTMqBJjeVECJksAoiyCxZs23WSSQ6qhNQN",
  "key34": "3Xzx3nD4YbANyfnmiuf15SG7wDkSmNewNiyUgBb8mui7fN67ZkbHLENhqNk6LhRB1dH5n3vBjJpHgeFhv2uB5sN6",
  "key35": "3ybMF1xLNa4TyUFJcPf3URSopsURXuX6uv1fvz6GxGYn6XwS7cpehtnhZv8zQf7mtbK9AMNty3zJoCo1STHnvHax",
  "key36": "4QyboDP1MB1SBHM3zXkyGkB5wwNpJuSc6yCmPoyc54gH3Ubo4iwBDBW4bBdWziMF1XhtjnVV9rBeqatcstFyEkqa"
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
