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
    "4c4umnURFrhYSDbiJYizHUb477zJNyGCqGbcA5im3cKPaahERRPkq2aaHb6w7gSv3tmuZ6usgtnDhfLyjrEoG5Gn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zCiDx9gPMqMpzJ3rpcPSE8sHzuft6d4ar9Huuus3U6E3txzfBqkCxHWEoccEtdvagtzLPXJzaHDa7gwm1wQfdW9",
  "key1": "25Rd5jifckM5QBsxYNMTuLinWi96WgAxbgFQh3N8hYtH4gBF26xEb1V7Rn8sf5NmiUBGoc7mUXvg7kiz6waPfLfy",
  "key2": "acCAGVawvoaHExs1iJJ2ANzjLB75Wc1juifJQ1sag68Hio8GztDd1KAghMMBztKhkrYP9ZMsDyyZnHUiWjkwBez",
  "key3": "5TuD7bJbFYkjHhu6U2CNSmpe1AJd3THBAEgGY2AMNaihCgThZD8LuGNmeTX3ouEYvp2XcqETMZ28SHCkR1PEbAGk",
  "key4": "61ijK7St1gsocSgcSBYKcLqnQNFDXdwfvugnfbD7Aa837zwWZcKYniJ2GrDFE8WDWVV38pD5c3oyY9k8WTUduxZ8",
  "key5": "4aZYqStE2x9Un7ddALQtqYAJNCCqDFdhm5HUTS4DP8mHs5rEELdu62cXAEcA6Dw5hM2JSbJsQLmop5o8d7o42j4U",
  "key6": "kX11eNW3LdgoGESagFTkR6sofybRBuMNxJNF996n3Fn17ZtpSxMk7bqbdSDWtjScqZc1WN2GgiBFHmrXzrA4jBz",
  "key7": "3buBeGU8WqekYBQEv8UQTsXoCFLCgTXh5gcKGRecjqiFzbdbECCv6WcGvDEEA8YP5uh3eVbxuVydcqb8iyDhntHy",
  "key8": "njceovMDsNZVpNLso9kDtpiToyVg5RDosqHXTc78WUZD8wd8o54AD5NRAagVFq5DV7KaKjp9nikB7QacM6Gg3Wn",
  "key9": "3dHXgcfwTx3jh1yCtRHsrktbW3HGAbSMn8FrMnHQUNiB9kp2tUyxyZitPyGmMtzjQjr3x11fb8d5nQGHDNPbdJRo",
  "key10": "5KzSKPG26siBtV8ctcTKDRnwNgDv3rN9WKDvTRc4ed4yzceTfmjPJ8hCgi7iToL4g2A7717tzojMM4RWifJxaLNF",
  "key11": "3h7vgwdwTWugLj3uh7ZBQ4FVUqtdPkEhXcTamhXtCQy92fAvRquhKxEsqRqr5qG3JeeXYTs5CkSniSmz8WBXnxQT",
  "key12": "2cnNLcppRs5X1SuKTJzXkmtQFM1hoozWPoctierqBs6xUoiJjpC4KCbpT1yf1y4tFyWD3zKjS3kxPzTtZb4y6psS",
  "key13": "4DpASjoEfZgV6hH9vgRS3eAHPbMDZf3saY4rKPWsHaVXxyAfsg4759KU1vFGdhDDYVrk8xNEm5MZv6GCVYvNKbtL",
  "key14": "2yZHqYr2jBCezeJ5kayxQLjav8G7qi5s8poLG43w3UurQXwe7ERYHwWuzomwamNNDYezCGnLWHYRVsXSto6KYv2o",
  "key15": "pnQEsaap9M3DbssKc5eda12jwjSkBUFjrvqZ9qCaxH3NtUjpKe15V7uBmbGNuFKXg3y1zFrPW5sTudde2UDWWqz",
  "key16": "2B1oFaURNSrQjALL38cwf8yZDebC6rXJUKHY9zwGQPHW86CyHvfXiRnynQ9bgxo58PCu2vGjt2xeX5sPtzaWRd62",
  "key17": "66KE522bAtkCNW7osBE5diHaiFdBTCBq2Jg8GnKKEBPYQphw5nj96d4pRMe9qgzcLiUNnRinaHbxJsb4LEMu1LKz",
  "key18": "4oZi3ueYVjhWEYjJhQNVEWZ5aSGzpR2L7SmN2a1gpSkD2jyy18ziGYJ6oQTfpCm5ckkR2Eys8YEZufCKTSa5RdeU",
  "key19": "23FfFQd5NVEUumExsw3rGyknNgLbvtrQKkxeRJ8v49Sx7UAbT6waDevQFKwTeqZQeCukYVhx5efmekavmrjVfGbW",
  "key20": "5XrcbnjT37j2RrjFcmH2JKDJ39rbng6gVV3Mon1PVCJcS34ZgMYuARUBtUfVHGXJGiCQ1r5G7zRm3uNvYt3jpj5h",
  "key21": "628crnpVE5rstzy6LEPkGrZWQuZtrf3XRZd82ZAVxr97wCoioYPjDWGrP3VTCs1kxnqM6dXFbvecmV2aN2UqXnBi",
  "key22": "4Uye1CaCSZuoZxY431EbFveebWLC4fjQqgnpN24ZHChDa8zAdopnwvM3qsMjpwVvrDYS39rg8k6RehTyhpWXks2z",
  "key23": "3wVnp9QVRwU5y3vDRPdCn1dzKzMSWyaYri6pafnux8nvoz6rs1HNJMNvcCusbJG95jz2hxK6ZrNzY6wkGn9g6iPi",
  "key24": "5jmEsjyCkvYzjPGzsZrwVkpLuD7sApspnSrbt9ttjmerzij53TKPH7VKsCkJn2e7w8o8kdqN9WNp6n32eQj3arPd",
  "key25": "5xDZ1r4qR9KKMEWHiwcYKwQiwNvZcD6enUXEve2zBixDdvdKxSmgBpzYDfoQkpVRqowCvx8LNPJp9eTSeRGm1s9i",
  "key26": "4kYRT3uJxJC83eFNu5wayh25uQeoQ49RAg3nRFVu5sfKExknUZhKcMV3ro8Pct3bFfxjcAX294bnjer7nRFgKFej",
  "key27": "4Dm7FPm5pK5F7sWGVSQdSvBj761SKc8UDnWaZUdzZ3FXPzUbvSpkM8P3sdLeXgGRzTu63uRVwa74oVEnoYYDSGqd",
  "key28": "u5cDwa1D9BVmYN3rXmMBpk4oWuiDCf3Lw8HvNbF16DYFDarYD57wr7v5KYXNcjgj5WhKWoLTJGhmPjPK6JMK7g3",
  "key29": "5u6p4f3imbaPekUAkQMbaXZBCRy1rmhmD7vvYrN3iFyHN1jAr4oAxGU2Mue1eTxjb7gafWr3gPkxQjrmvYA9W3hi",
  "key30": "45cDCSyz7HuUT75pfkPHtWa19p9jdPNiQdWVcu5Fk91fEqzyCYuENdvKU8Y6QC5J6BQzPWSMvELUn39BjTy2uLxJ",
  "key31": "oPKQ2RMdRRPtkgFAewhJFFVLQWho5gxnuPvzLPtrMW2VAZUWRahB8st3Mwop9YDCzVydv1kaidkHUzsME93LZQo",
  "key32": "5EMzuwQAbBhgMNgoiXpnv5GesBvXVPpecrMR1xy9RpxisvBVqMeTtzXeYkRppqPFbaWq5yxWhZp3SstWZdesXKn4",
  "key33": "3bNtHNihetMJjLMRGkTg3RpXNDL7ecog6TcX9737u4KZwRMzPiHSe8yvbTJbbC1u6sqKKrBPU6RQPgP19115XMfZ",
  "key34": "3mLTApcp1EhayAuVKR7r27Zk43XmoS26pHEN2FhLffjvwvBk49TGmsLdQ87iFQPDBDkcZvViEPicMhkXauFMSBNK",
  "key35": "2VnYPZDQTy537VSzXoih2PQAfRxEnwm6kGwsKJfQRPFNQbCn8A7sKHj63P7KPPY9z1crEcKedHGdkcyZTMTsFmRm",
  "key36": "3db73nmcCL9GytLbWTEjFG2kAkYHnvHS2qMb1RCfxCYK5jfneFtwFDekP3X8xoh4x1Y8SULTUAU3yfAtgom7QQQU",
  "key37": "5gbQPBvLEBFFuQHbQ7vAqpnH7DhH9k91TH8jNuhs9N7UjKTLGBCsMFWKdmC65MGrtF5zNKrZTYWC2zcGkiiPCNka",
  "key38": "2iusARtqj89gygPb8PdefsvTZF7yge8EboPhtf3mj8UWW6MGuSqjM8t6aCQKxzzr1jdF6gBXTTg3P5zPr35hXJ5f",
  "key39": "3hFV7KGjcCCgg61re5EUzd8Zpt6bbXRtFQWcdXp565Am9MMtAS4iNdACBoDXyonstAt4e3QRw98fMVEqP1x28jEx",
  "key40": "H9FNTjrzP1hDLCNcV7ud4j4ahQM6tkut2fb33EJQ8oq2dWrH4egm14q4bK9L9BS2ye3T49137S77GVfwHreXmEg",
  "key41": "5E2W5ytENxTeyxCZrYoABJbeRaHvGrafscjF64d2MEpfUdSg3p6fqdQjCsbAHkxZf4CXmDjjrnt13dZuFpQBDmYZ",
  "key42": "2wNexo8g9XT5wxs2QHdNTJDoEXs46A87jVWDvLcp9pUUqEN9iog2cnAF99h8VMzoEJroS5cYXi911GdQB6S6oiKB",
  "key43": "6LBwTPXnQRjbHC5Tiy5GFxFqZ3R8U248vDb1UnV8YPb7D3CYugjGtUumPj1Hp11bdsV96AwqC3Tw7pBdAkhwAGj",
  "key44": "8odhvdcJPSZ55iaCETwf9hEoXXnWmRhEogKKcScwTbXodzUCyay8eiaiwsSCeri56qMTb8W9GHxGGAMK7vgbBSH",
  "key45": "3hpQcHKRbhE5P9TfuBNFons5p2vLodhb8XJyKgrYuHzHnBxvZH1C5xWk9QNDP5yzZ2uZNS3vzGKzoL2V7vBnYEH"
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
