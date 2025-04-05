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
    "5kS1YLp7M3Y2F2tWx7w1C2Z7kUuHhpLhof9fiJe5iKRw6CmudRCJLV1jmrPsoXGwgSDVTjR94aMBc2Ymgtqjwzat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fn6zPxyUzjfhV2xdKpN7JtkjgpqWiWQz2eYZTsE7sW7aNTgzZ4TCVkRkZNv9ub8fNCijE1rbaojpbwjvhKgFSsZ",
  "key1": "3EPfsUMYo3We7PsuwvdTVJFQka93qGSoN9cc4yKv4qWm4Ra7UB48YmfgPQ6W6hXHgiQwSWsaK2Q8NVKPMkHGfXAE",
  "key2": "4P45MQWAKyCbGz2zSMHokwS474Y6d3UsUzh9KCKZft8pqb3jrBRKK1KsDNm2PmdoaqdKfpYcdhPBLqidAgYCCcr9",
  "key3": "4Y3kXsePuiM1JwbHQJkxivLcMoifbUAwbENVB8A4DvPbhHsuxTq2aR7VQCnEwLgPGwuZRkkhR3feUU6RoYLQeETj",
  "key4": "5Rrtcb4U3nQWJAkSaBAkpMMSyf5kAGnYj7KiDpScZD9TK1wTUv9tYQy1uyezrHkQVWYDoHD3CgbuFs9zCEETrn37",
  "key5": "2mh4CdsfZoFpwQnBpSF3dbSA3XavZxDEFfWWLBAzJjDfxnr4U2xFyoTCi6UaxpMz4nbwDwEyJDCrmFVDGAAbwRgN",
  "key6": "32Pgg97Udq56qRMTfxWyjEqdQYQxNKWmJDey7fBMBbKLq4n1h6Aa1Mmzb7t8J1dkcXQifd8v8DEZZmRgj1ikzBzE",
  "key7": "2XSw8eBh876ubAEZS86mFeXQewFYzWi8qsrMYwCobREHydZoTCHWmdHcBPgZzBPZxNr5R6QGw4EFrBFBhWRCmwwJ",
  "key8": "xv1Di7omkrsApVCnNuB11bEaWruNxNMunVWySHXXPkHbVwZBGJKikfhpCNDtcVNhxhrnLokofjwykNuXkC63tmE",
  "key9": "4S2Sd1JJoztp2gQZA9Dar6fREV2UUP6LgHhT4axBGrnKaWGdwqG2Znmmxeo7Gc8N6bdpseJmXF7Eu5coW3kASsA9",
  "key10": "2eQbpqHWPMmkk2wNvYmn8ggpidbhm3zFZN67tNK7baDjwHypH5P5n991Hj6iS6x83sKGiY9RsLTpWzxBNp4quVgA",
  "key11": "3thSnCVJPEH426uMgzdRpsHL6B6uzttegfdqD9ERpGVoT82EADL9ZbnEr6dfzz7igRKyawzsmDufuRoDLeBmZCkT",
  "key12": "2db98rMiqMCpv7VEJeKYoqaQqtbfTgAjGKdeqfnJQT5XpkHqFoyhdzv2aWx4HmyeZgbZdThLsQztT1J8S8ioof29",
  "key13": "3RSw73jhq82LyTZBu122Ep8Ytk7FYDrhYWZYdFZcAmzNnYds81rWye1Q6f6AuzEK6H3TZpgnHvGKvQU9XRPWdGqi",
  "key14": "4KHho1kz5tQpwsaMRritkH1rc4pevcaVQfCyEHo357PAhbUQb2gbhZ9Jf5GYmrSAaaUb8KkQCAKxyLVV9KBeioHb",
  "key15": "5hiKhwBbKnWuHgRx8VUERnJxDPXxNPf3JPZFrgkQzcKV383npXk6979vZBD3AXgc9j8QG1gJmohx89xC9AYDRJ4B",
  "key16": "sCqx6zSwBJr8zxuYVz5tMxz1FshJRKbubAeNoNWnWc63GMqTaPsWrSBZMFEoerbbx5QCDuHRFQrQ1KNbepvvVxy",
  "key17": "4iP36qGxhQxvH46puKTXr7wsvgN4fv62UiSPy9mKj7KWuJxst3TR3LcR1V1UPgtY1eoxdQhUWNXtnftaXUeXaFpL",
  "key18": "5ejXBi9Jf89c5kRAfDgV6BZ95bM43HEN3gykReRp1p7VetPXeXCKPdnA7zhoLzZubBNpJY3GKRjvaEUmgfuHt7Uk",
  "key19": "2QqrsneRxdzCE8LaXMpF8KtEqK9qNDRGmLzVX4NWPHdRmYU8iWMAj9vcqpREKb7CKmSTxgq1YEpTCJEQ2hStSZ8o",
  "key20": "3WxrZsUr3R6K6ebymG7UTemM2EqkQeycrp1VE7CVqGMXWdcBpGrCsdeE3H8DhNEFGh8Zt1YBVoYAY37DY8KaeRVA",
  "key21": "14nH9qt5ByaTZqprPjH6YuxRK9hgCgCvXXgpucNN41i3D7tXuYCbj4p4dEkHYoFHajEj87JmS2n9UAhPoRZtLN5",
  "key22": "UPQtZBHFKBYeBdkAMLXeoSdVZu82e1ELNcHtDKXcbRWRjkAaSXRbz6k7LkF8rgW3UwjajBi1owzeXd4E4tykVJn",
  "key23": "5VmJnYvMZaiUhXgqCjikk2eKc3RuUTqVEnArKp9hK86ZeL31W3zt16jTeCU2db4s733qHzGJ3BzVVftXHaAyAHy8",
  "key24": "K82jArWjCyPYjMpcV37Xckfp9H5a7uT32Zv9bTejzML7rBn5rTeZfdpCMmJdKCGN4gXAfb9v1pqxs3fR28v8CVN",
  "key25": "4jutbdMpgHm5ZADgohX1s9S49KVbFqL3rsjfvZm2oP184X4u6etWyDFXv58nTK4XdSx96dDvoFXE58rVqhWxS3v5",
  "key26": "22D1qJs9jQCNVKk1eM9VzHouTufDfMumUgf7ohSfUefwbCT1xBDPYUaiuWDxWfUMVsQ1B6pMXc1m7tdtXAmznzPm",
  "key27": "5tnFBUcgbhzHEVFqnCUXomeFwT9a6me3j1wivQT3yXYxD7FjtvdAgxgHV3poaNotKet39mesxGXLaoW1ZzDiPUJ3",
  "key28": "4vAxckZykZCp5qXCWAEd81tmHCHHDyzZayAVtY9tfWney9WF99qxUsiRqgU8h9C7DJ9bTCv68RMRwNQ1GMeJ5sLF",
  "key29": "2zWKtT5Khde5fYn2S3dgbtH3BcitPJMchh58nqRsmGeKrNzyDW2gdFiynzFkS2CUNNUKkxqG8itaChDcNsC5fte8",
  "key30": "2TNowJEfgb9ULwXCVTvLwaqyyAHToK29GWrx1wEPKhav6LcFtusEyxBLCPcm2RWGaRSxWBAKDnCiMT21B4Xyeb4o",
  "key31": "2S5HPaDHX23bhh3jZwQvxZKGeBqxtDAdx1FCUaXP3uSpj1KNGYR7nkT9tW2bnCr9NVxwzKoE1EsBt6kqUAXLArda",
  "key32": "frTSLZudjtQzpuZXLybCk8NJqBmo9Wu6jRcjNZg84au5fKBzaQ2HZtmPEnqcmejWqAXRvkUKHoSBSL9fdoe2Bx4",
  "key33": "2ujg2iMSvo2YFomTyzWwZZEuGmGypiKexKxzhwiAAnQfpMgfvUD4pUALjhLgoFFxefYUtXeDuT6R35sUdenDJCGr",
  "key34": "4VkraarsVc6vzP4T4u5Fu3aYfTHdSyjt5VRNi1KLtTZg5SjuPtGNE9JWfhVHPMb6shZCwdfbtFXaPp9M7xqEHcCD",
  "key35": "8XSoV9SBRLZaEf8yUC74sKztkRmidPruWoWUrVzke91WYUUCzP43nkhwL8cm94oyhtBGZpE9tSq1pgzyjtXtH5z",
  "key36": "ghoFyKy5Nh5E9AoiqNYzWDrG7KcXnoJwYUdeMHJX94zEbqPF5offTGyz7mTbwycDuyg3uHH7ERRDPGokqDpLcSf",
  "key37": "5XsqD2XR1T8EgdDACpXHcUpWkxx4ks7K9VJ9pRKjERbXYewrDqFS2nXkoedS64F9RSF6fsWiEbncdEdyrNNKjd6A",
  "key38": "FvrSKq227rywvMCjJvbpvat8yb5q8K1LQfYmZ5ZLVjCe1Cuqg3Ty5Hc9mBdw8Xt8CPixtNypZig1aCGJdzLrGJt",
  "key39": "5kXtKgEBhKfryQ9cMyqkQpJoqG2UorSsRm4Uh1QFzF7mH3AJxu75qsHHKocWcaYHqNxybnSdWph2M7DF8NN1NjGP",
  "key40": "5kVjC1iYQzAJZL54GzuaSztU5ZPU1MYcNBi8ZyocuUfoGJ2p7st4spx2iKyx5ZsDGeeYZM1X9MhywehkazQ1fExh",
  "key41": "2RN61qLWWxhyFcbFoyfDfw2CYXXQy6PjajasLP4LasyvDTUuLpm2PaMwUKdA2eANrJafHgznhw4CaJ1KrK41NQhV",
  "key42": "QWCEcGLPg4jVrGAHNZQLkcKQZvXMYMf9Bxf816nqqRhKnoxKXq3wdxtSYDxx46k5RcBcUVuakxors2nLZ7j4HGb",
  "key43": "3xmBUL2bBXtToZWndACA42bWQaHAWAzMfGhyRC2qgdmXjaV7GzWahG8tVPrgMZHscWHFWPTEoJRfnCVkWhqELikK",
  "key44": "PYnVHsTUHRBj6dvsw1n6HLxSdSJwyepFCYtLS6WMxvoALJMuXb9Mka5nzBV1aK9Wn3WBEf6KcEA74g2qyhCpiK7",
  "key45": "36NKfgetk9LLLK5wk2mfdG7mSMmL22VVk4azcrHBySz4FtLmEWGvf5eVqgUC1dJjp7JDGVKL4FmmtAwBwBXWNquj",
  "key46": "2aoK2fHydToaS3iEX6towdpqMqk1EkirwMrJwYjYzW49QMnM59vCHmeVFWmRm4UWMRdZKDyRvBdLMTHznVJuqDNT",
  "key47": "3HPywWMSrN2u1B9BhgBCCsxHXcSQENj6XzdEx1ixwM77wStpz5pa3u8jUH3GoWuME6h4YCdaoG5LGEHieCddAaBn",
  "key48": "w3HGXREouJaBa9cEqroezRdGhaKKS9k8xLSkSnWTFXsQVFQHyuwNVQ6osDyosp2tVj6JjMvqh6ZvW23HfHQKaGF",
  "key49": "634MtM8f3RGcQijCdFv8hhGnHN3Rn4jcBwAX6xgk4r5Q5VArGmtu9xTk9ePEAMprN31S5R8cdw7pYza4GYBz8PBe"
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
