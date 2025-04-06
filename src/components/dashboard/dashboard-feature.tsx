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
    "5dP8ZBziEDJFPq7kZokcjXrtLjJykSf3npyrW8E7oHZPJHpT7FgUkDsLX3DTNkfaAQJEETHvkGmNHWWmk9njZNtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SLMMg8DY9reK1AGmg2vTKcFt8GLiBbf6kMtpD5F8L8KfmNxeZyrV2u4mPcixwqg276MHU2EXeAdXavgxMmr7ZHZ",
  "key1": "tBQ1hLniHY7scNHc47doPfRQPYW3AHrhmPLZZKRqcRk4QUK5hff1CXhQAc26T9Z9B2DpaHbQhsKhMvKuzWqx2P8",
  "key2": "4QJEn1h7275LaeuaLV9ewiQmQK8ZFr8175Ao2gk7FQwixXmXxUGW1Sw4dF1iteXpDvyZ6wwGEoMCpNEr9Jc9ntEd",
  "key3": "3yem5JzTeoQBXsVTQ1HoFX39vf5uhqQ1Z3gmZzrKzwszFyNThxxDv5G3yozCqow3Ag4t2ct9BximzdqS9K6riHc6",
  "key4": "4MspmY5ip8FiuevaF64vSkqbuzH3GfAbwYNs5sZZcLjkB9mBbE5pBv3UJzgtu9jChCRmTw18jZQ166p1hRDjEvB6",
  "key5": "2oeNMfNzvipYavyzQznriLt5iW7QtWghtwJCyn92JLoUhfeaVH3FGJngnsiP13U4x3c834ea6PhR52hSLtqfcwd2",
  "key6": "5b1KUagsWpvgNSNnQvkpbUBnB5ZHz32r8Ry9USzJN6tgb44eE7suXCovwyVBAmJhVNKtqYx8gMmbUECfTW7Agwdi",
  "key7": "o1WQRxQhDAsDayv612g7uJ4bqVFYZAPPqb2BrQYPary28V4i5hupAgtmXdkHjBo9ZXfjUYCF9z3CxWmUPYcyDJe",
  "key8": "4rjqts9y5JfDLFjB6EJdAmAoSC8gW6BoxUakwp1oWGVFAv9MKpYryhz4YUSJGgaUeppS5DpowmQaNYkxQNPuz5U",
  "key9": "4phzaM55hjSJ2pS1qS4fFcw2ev2KFyYizWJYKwLmwivtX6qqS5sibMM7qsewqhLET8JMpPriWki2EWryfCTeg6iF",
  "key10": "tWGBJt8U7Lsr6zcAj7Skn3mAEEuApqDvdXhtFw43NkKhi77sMG1ZgcjcopWGAH4DT1MkbgCuJ7YdXtf6gKPCwUT",
  "key11": "47orAWQLUwufpZeSSybohjhLsrNsB8M5RTsK1ybySb6NpMC64n8vYsSoq9huhF1gnUQL4WojY5c238mnnnoWmjaM",
  "key12": "66W1r152xAzfjpP4uZANnBV9HvLtiNM8YMccqmbLSiDwQ5Hfana1FyaiwWAhw9Q4fpahBxJZ3mjh51M3ammrsZSW",
  "key13": "5tVffGNzYrHYg9zFRicBnGdsBUySoufWkD93Cc1nV1HZrjwfmqqfiTDcE2B6XwP5M1b1xxCGKwHFuW388G96D2EC",
  "key14": "4h7He6sm42bQMojNzvjzHp3HwA4vzorksWqgbvxfttm6cbBjb2JJGSbw1HTCr65nc2oZk6GrDpDi4zdha7vevic5",
  "key15": "4jnvvp6RxiphzvFx8UcTMgiiswmwE6gki4QdB95DUhz7YnWkKJ9XebBjUBoP5o2Bysjqo4voZeZhVxHNHapHWake",
  "key16": "52CzvFqtPToevkjUXkbnNqM1kCSo13QsM3eBecmcm921kCAUTTyBzCzqr86QfTmHWV9R99wwTc833jwi4xaWQ5Yg",
  "key17": "o1j6cADBkAqmDMqPvLE1sUfepcq879MWGtMvwiAj88XBJx8P68Znyw42U93vgofK6rphCuDdBWspLBeV1jHJkY9",
  "key18": "4QcrKQjpda3nqE3qJ66AgfJUKdoYmrL84V2teLHRBRQBtBcF4iANKZdiNUrU4ktb4JK3uxsJq9cBMrVmQu8Butti",
  "key19": "5iYzdPQeuup8Fat3Xgrj1mcEnMCUAqt2xKbM6GtxLmypotzkXZAuSm8DV9ny5xV6Kj3NBjgdi5NNni6ZC4DuySh3",
  "key20": "pa2MG7X2iLL6W3fQWwypYCZ7LRLTRurCCB5tPxq4NUPPKhopvxLZuKbLTW6RF3kkfUDSbRPNvLdDa9dNuo8GuPH",
  "key21": "2mVHeHKVmMiz3j7oG74WvmNh6276wsYCnA9958peReUn81R8PE7PDKouz4PHTfRWonHgvQDDHqABAioHB2y8f8Hg",
  "key22": "4PRaW9BE3wMAGk3zqqqeyd6ZAdX4m7hXhwP8pHSvn6F7fPuDq4PsviFAeFKX2EKvPQtBfuFDHQ4KoKpREgYX5K2q",
  "key23": "3BfrCtNedCWGCPfwY1rn66UZ4UyemzXu3dYrGn9w5UoywDcfR5fB2a9b9FKRkdR6T2epCMAA45XiqMsZLQWLnEM4",
  "key24": "4VqDNBzNFyKG4trwjHCsqJp3NkKwwCShyEzCL7BtZMcvutMftLk1pwLm1Qcp8AUpprUQYGXyu16igfJmoWqxn7FB",
  "key25": "3YySo2uBmPbjgkfMT5tSLcdZbmoTrEwrwSiws8uXUJ3NdjRL2xgLZyNbK9rVE5Gr9GHoRTtq3LwcKvirYMiMQejs",
  "key26": "4ioqJCiBib2pHwH2Loxsdb8ixC2m5SHTWp8z8MFuTRYNR81Uw9twDXHQRKyude1JsVvM9xjZHsFP1TRcZ3QRYTK9",
  "key27": "2mfZUZuHg62doXwL5nFSMtg9gmVSra5qMByQjwBemeikoPT2jfvifBAcVehM6jCRV7cUCYKPeaxSWmCQHJMwVUXy",
  "key28": "5qZcqs2Ds3MKnPG7TfqpDnu1hGdLT6hunwthDyRA6K447JmZt5ffYRD4cHKDPfYGLtZhd2KvtkKPz1sp1bA2jpro",
  "key29": "26FChZiPfugJoch5EozjqvXkc6RkPSCXHeiXQhZevvpM1sAFpJNG5CbbSAPzC8amcLExLBhLeUUjyvkhDTMoPyA3",
  "key30": "7D3ov5P7YX3iKMbTW6HSLenZbsAE9GxrrJgMhzJogmYLMehtgVGsyEQUk4BQk66tdXqXBjcLS1iZyadcMBpZZyX",
  "key31": "4FByo5yjvdMNKHnqymuZiBWkvdCJ4bVPTACMpw8YGWzRXTF517gv9Pdmoo8ufrHRnnzvwAzJ9bTfbMgzykoXeY7J",
  "key32": "3eTBwj3YePZxFB7VNsKEeUBYXYSopEKZ2Bhe5BR1secDAaZ1sBFEX2NuyNNSr2NsGYkGGQvCSXLX4HPRRygS81SA",
  "key33": "4RrUqJAa2iFBC8ccPSiUKBoqHQHYAu75Khm8BKKru4H4uvrmCLQBQ7TAAjgKSMfRMLAiHawwr7zdMi1cV3srDsZk",
  "key34": "4tvTJCqbBZspdC5fg2cKzwb6JLPT45fp7TUAP7F5dfTrUcZ18vtpuK6idJyuXrsFXxjFbgKdoWxfPj9niVWDZFJy",
  "key35": "4H3bgDZny8vAo8CtbNiszcnUNA2CQZxXbMkkhYSP3Pg9XNCviZP5YRPhfP66GUK8wWrPybgtJespkGuTtzyUZXsz",
  "key36": "dLRGctGndiPM6dbxr2S1YrENqwUCJpaM7LvTENmyf9iHQmGCZZ2ne8eNRzpzhCaZzNN7wiWLN72CQaA4XaExMJs",
  "key37": "5Fd3X2wZaUGVKM4EoJAkc55oKjMPBB57e2BqiW2sEVypZDAEFozNAYibchDknSJUhe7MFZe5AZWe2w6khYUjfiHf",
  "key38": "5CW44gEMssU5ZKMh73sniCRie8WTGAM9gQ2X1YK27cnvxqR1sJiuuHLqkZt3wz8HY3trYVcnMJPQ1647GXdxomc6",
  "key39": "6zTFBYVbscqqtJnj199tHxZwtPs7wyZPHWT4CpJaeFzv9a2mfyCho6mCy11afgYx3Tg9hxmtUnvz3KhMfBjJ6ou",
  "key40": "3NAQB4V4ZZNT8fw5ojZMuFjUe51EhRDVqgcbFbj5UPk66D6DZHvAUa6tyYqccUjanpaZJLkBYBgDRjrGktfa9tLq",
  "key41": "3pG8uFS5RfJYq15tr5TBGYGprgEncY77rVA7bQxnDiGL37AUDHxcmQgP49LZDPT62XLPLF2juKqE1FAyyDqhXMnd",
  "key42": "3KPJrGCEBoXPMhevBqc2urkVyv92WEvXnE9puxMRpq4FKEBo1uSwrfoA5mVUKgbgHsFrFPCzMX4SaW1eEAoSyNrJ",
  "key43": "5cgJwu3CL4DH4M72zWH8ndJA3YMNjozo9ecmU3r3DoseAQnNmJSyBueo17hX5KBNdfdAAmiGiZghQnmdSMswjqdm",
  "key44": "2kFGPLmqRCuKQ3PEwpT5ZxPiaNy3yYWdCLD3J5KeJNLHT1D7upta2e211aEkrnoyGaHzGvPfUEHNeuVFCjDE8uVu",
  "key45": "3Ar1EK9th1poUwjEX4viet6fiZCdgS12aUJupb9XMNfyUq6jK83RRuRkLJFrt7wc84Q4PcDdshvnbRSvEVzBFSnB",
  "key46": "53U9NE2CrFqcFwrjvdZGY2N1iZQHuusmjet1zvnH4NGxqtyhkDEBnuxh7se1LhmmTzFzKdnjW7iuGRHJCutBhvNx",
  "key47": "5ThGZc5w8rtdUxWWLLG4FF4Ls4296iyXfJ3LkhELjMPkEr1perwhSyp87ut3i8yN8qcMcXvrgyFNi1ig22G5LgE6",
  "key48": "2Qk8MjbHuVX9p2GYJu7mjeEwbYKnkTqXEHFFaw7RPwyq1nLjgjTpMXNSbmcY4zwqYEQCBCAQ62eRFYHnFTRKbW9",
  "key49": "5e8ZUxtJTQPtVT96zekoGxaq2mCkM4sTWLTKU6BsRscgKWKdaH1uArjUou96jJ4xuFfza159ooeeNx5ZQwn7mUcy"
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
