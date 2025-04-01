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
    "5QVxeYhd4WHwEHVseYe2NLjanw9vjMsSnugQsxqRugjWHkDuL3sDaNuoY1WAToXencvL88Ut1yivwUWxkri7DuvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8N1HHv9fsLeuWaaRhCeuZnjXqdizDEyg3h2fuWLnBNrd8vskA5pQHcWYN48hACC35gPTT3bG7Yo2PECztVdiStF",
  "key1": "2Tx4NUQPnH3rRJiSBVngkEEnfrBQgC81UeXZ1Dpx3Ysvf5gnGecGKjEPRhGqu8jyKCZgqbHxWQujpRt4JkwBExEM",
  "key2": "YruNMy1dHWoFZ6Ni2FrzZFMkkSi6jadeBEo6J1ta7bv4sjTyTbFhrDeZAC4JYRXGgiK7X9Tw55oNfPdv2FHNohu",
  "key3": "EBVmAMAPPzyFuXEFPjBBbYBnPRS8ERESG9SdFyVpig2TdmU4h3qnLrrrrTLYvHWow1EmxAHwAnzfskDxtjR2cTW",
  "key4": "5rs8zX8BE25drgZcFMBKHEFd94czjBYxCfDSojqvwXtGu7zFXdv7sc5kQPWe9fip3QXsGEN1RamvjZcUfk6mb6p5",
  "key5": "3iAYWzUcxQ1bcRZgB3VsSUjvtRkajgbMjZvpjnYsHNGegEL1ZTWu97mRJykCmasGL29uExfpEBcJN4FFwjjttjH3",
  "key6": "4CiwPat5VLaUqDvZ6rJJcBDQ5isTfG6M5LpyiQBZMJnA1HQM5XxYn8g1vsH1wmqdnzBjSVFU9vsdRFqNk3qbdPVJ",
  "key7": "63mH5zmRocr62Hz9kAfUR695rBfvTtRejBjonHeko936gFEdo7LZHpszRMcELo8sPsk2dNgmNNzbbADxZP4TZkLg",
  "key8": "5yuo3t5JPzJV4QLXxEPJ38ucesBJVqjKwhVkYQsMiHnDxsJyJaNFTujFDY8dELk4ah67wpLmcfB1PSJafrVMwJbb",
  "key9": "5YTtpDnudsFqt2S3JTeai1EcqeUMKaFpRhmyVXFdAoVH85UnRWDsV7pRoKp9wTZPj1XuWkyG7ddiGR5m1Htg1GX8",
  "key10": "4mZtheyZuKzNGdW1y2oxQY9zZBcRmRw53APUk9DkKuF37SYtQXheELKtDGP7cQQNznLdY8sdTUyKbgv4DavRJm61",
  "key11": "5deGU75c24wKyrAHWvCfDtSuR9hYpyFzeaJs5X7HjwL5xgD5aNXeUTZiSiMuHUhLWHPjPsjzZTULrU4BjBYmKWNu",
  "key12": "4rPJp4WjgsUfcLvNkQZf76wSmGchT6K1GzZSdnHC7Z2fq41eiYshrj3FywNBQuMVRVc8VTBy8iBR4PtNZDcHoPXj",
  "key13": "4w9bJkFTh2eZQddif3FM2HaE2oQPeun779wauTYqhXFmmpy4ph9CR1Pyt5JVLmfBaWADGke8FDr94VYXoMaR98W",
  "key14": "4pdjNK3gtgfe1Ydvnbks1SPLFHQUnPV9Po4hMJThtKNFejLRJB9TPeRsVUisPKSJGNAPXGJq2WZpzYtc4pJDmN2M",
  "key15": "2ZgD4z81uyT17GdRUftE4U51oGd8jmmyZea2rXcEoF7xnfmEejVxKPw9SNt125TrwUnQUUFz7JsDt77oa2H48QTF",
  "key16": "2vrQQwECo8VZjuYLnzYePHP5ePpYfvvVhMwBxRmcgtxbfRuuPj1aespjuf72cUogzhwWLUi9Y9YJDPuZ6NZy3WRw",
  "key17": "2bTTB255vjr2iAwcBkpKtveY6hvr3mT6EmPAfEhWeacRvtihNwdaAPrtJZpH4M6GLsewYu36r9ApwzV2pEU166h7",
  "key18": "5viWJSyYq1djUurzEvmw2X7YAXf6HkiE33zwnJkhwuQQ6GXRE1wWCHzfaDoU1GednDGaYQB6ErXogj7eBu1N1ot3",
  "key19": "4w58dPoPaXkGr67RhPBXhh9RX4aur5N1rKqPXgk4QVAFHLtTmtgwUB23CAMDraUVwnqD5Qoob8dMgou3pDzhjzNj",
  "key20": "A2tXVszYP6UFhM7uUF1yLVp489SViX8ykFapQJbJLT6e9H9ihfTfrqGxSWsvmZL5pvttrhVn3sDka4PAHKcXCvM",
  "key21": "4hPTdwdSsFqSRJfH2xZcbupxhRWyTFb6uQGggeSFYDgRWDMnQ6YSJ29eqsaJuhSevJeGgbSwAWnZYa8rsvhmSW1e",
  "key22": "2VRKiSdBpaJMwPDhHySqS85NHXX7oGepL8e7rhZgHLD9Y8gB8Vj2542jatZtm1LWb5YZoNVdteJ8jCQpgbDsJ1dV",
  "key23": "5SbdWNTtTw9HyC9yX5x9GeR8c1jK9bCGYfFqiLUSaSLF8chP7MKhDMNMv83MrsVS7bgpZrbHoiRCEkvdgMoDmCBE",
  "key24": "5v7YD4bzf7gHEfTpFCZic6yGssrcmuVjHKW2Vk3b3A9UHZubN9sRZnVzDy2GhP1iq8aakU7JFjev7q2VW5513ch8",
  "key25": "2mTUGCQNXoPaR7tHPGjoQi9M9ejQ8c6gwGpG6C8BrscdonbPSRW5j5hFKofrTQpq29tPYpK1jDGf6rGQ9GB5zAhk",
  "key26": "5aQRhYY2CNsbvcWasFGTjJov9oMVLTjirFgqFRTiyjeLq13gvSD958kuZTZNzzFMjxoCUoavKBEBe3kP2iwT9XCN",
  "key27": "3xbvQ3LQHV7Gkwk5qHhmijtnzgbW43ZU7EukvDMUDZywQwEw4WrymBntQ2Hmg6E48Uuz73vYVmcjVJTEsYbjCJhC"
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
