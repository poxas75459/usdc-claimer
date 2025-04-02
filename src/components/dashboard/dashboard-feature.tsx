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
    "NMkgwryFgdiyiVHFsX2WxjHQJFzFmkefnEyyCPZN8AsUmT6g4PT3kSqQpe7AYH2wHpcmetJn4haroTveHWfLrU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UMvd3Kk3yxBiGwJWq4mfBifZShngshABL57SxHTfEyjmvnssUa3uwHkAyptSqkuWUnnKb7uhFjmkZwro5pPPJbx",
  "key1": "3d24Yat48srF3wyyXyD8cSUZEtPZp9twwpcZfeWGpQMK4uFouvD6SUbqAErk9qemZFFVBaePv8u68eCc7JLJy5t7",
  "key2": "2Kvbjry3zWdnDivfBCMLET5opiwYBmswtaE9GqvUT3526n4x3ZnP41ZFyeMtsFQ3aqQnWtzRxV97x2vnkudqmbct",
  "key3": "dnguVB7Twa89H5NhPpEvfX7rL9gbQbApdNMZUXoHVqRtX7eYpHa8QBXJ5jAExkFemVv84dwwrN8wtm8B7QHMWwb",
  "key4": "pvbv2zrerWwF7882R8yQEW12ZgGTdYrDX4dcxJK58RzjECp97ZeG6FXkJXwBAe4TmiaWdKtf1XkhqAJqp2NS54s",
  "key5": "316Lhw6zXQiNJR6yBrXENcUst1ddV2aW8HpQXTgxdQUCM9rRAGZKnYk7Lpsiy9MVHTQa2dqZcUZuyejosnyode9c",
  "key6": "X2qzisZ2FwmS6PSD68w4LtuKtzeLwax1nF3bQUzgtLzU3SjRwfhQjCuQziJ2HpcxVCiS3DvLNd5xz2WSPFWeMGk",
  "key7": "4aEZxfm4Wj6sMRVpm2ZHdXiQzin7W43ummnrEUWtuEM6XbbVBU6mVREberU5aKhrntXmb7PdGpXmxWzsdwyoXfE6",
  "key8": "2EnzXoHZgm6d7zM65TE46rKNM7Kf1DB1oyvAGu4VNzGJahTx5o5AS8RyY8oEmwNooxkfrwFdUP1Q8WB1iB7E96XF",
  "key9": "2xSjMpRCPDixNorjhcd5QZzGB8vGWk26x6dqUeqt6wRrMk3WB22Ws5SteTy7FpNrEt7RbTNZw4Ci7MmhH9Ryh8pS",
  "key10": "4LMA5JStZH6aL7s5vxTxbjZFL4rDgovHmvr7G3fiX8oXnPGg8DAM8ng8yZHrvM3AcasGMv5B4C8kg5AMhjgf3ErX",
  "key11": "4Bz6fX8oNWPKVQxgdwH2K2RkTkPyb1PQubegEGjU4HiMwPQbM4bwr4n2ptiH32KTpduGQJU8Je7GU3sowaxENDtX",
  "key12": "3kF5zjDKiJF1wzfVmWaBMM6e3Cbmrue4Gv3hHJk2w3GHF6VUFXjN2efUp6CrgX1uRf31HmxGQJ6UwoVnpv8ebfnM",
  "key13": "2MX5SUBkauXyPdFo27Tdwuxiu1FVAxF9QuuHRATQxhDiSrq3jZw5in9oSLi8Ljee5kfJBkbZXezdHY5ZikRgM7Wm",
  "key14": "3cgbr6pWY6d7qWtWQyqY7zDmChfaic1qmmTKy7dEd3PZPAGBqj6th6W5SDUM5Lmr2GBkzgqQ25ArhHny9AX3C3y7",
  "key15": "4rksSYBCieA1PtxRar2y9uwDzfX2HhBoEQpGSzYfo3vkRZxPVNpmS19Xu3EmSzthK5NjWBTR57ZsrQ5E8sG5VkYZ",
  "key16": "veW6U5pEtE4cXLJxw1TADnKiEorHor6kMUxZpbbX65bqiG6U2SaQVnYBHHaRDxZdF3kjS72G4dpHfgozqsVt8JR",
  "key17": "LrmdyRPeWwvXFbNAVYU8QMm3QNgQjfq2tYDeMXtzZVRboWGiGWXPa5PEu5er3yenycUebMAK8sk5aUp6Lx7FN68",
  "key18": "5WdsQZ5fUoY9oCSwETKzWj9bXWLEhC17nG3LecH2sx3DjHH3iVqLcyMGpmoMrnMGJuXFfpwSJmCZHHxxoP2KAwDf",
  "key19": "3ocUzJNuM8g9oekctZ3bfSRsAfmFs2BA4Zdwg8g3UKeH5KwgVR4vpPRNKeUPjaNQqkPxK9AL87QGPhjgsuhtKMrX",
  "key20": "3CLmVUhqE2uCvuFRL5caHe2xUjYaxDfLGwGR8DE1x2Xijq65f5a7ExXH2qN3QDhxQf95rQBpd4UTg1i6z148VT9V",
  "key21": "5YiDxAHjNgnFZLeGmvhErtLNPVjyJQdRkwsvbEBwSpZ5fFLcQCWkLPBesRtbEyFe5o4h27pE7G4tpV1w1GWBFLaR",
  "key22": "46qRfe7Sm1VLuKZoJdR8J2Ucj4ko24pJEML45eU8P1sN2dKPAaesKKgxjKkJxBPu2z2hvEfwHZA28mFLq2JmCdAG",
  "key23": "58RPJeLxzGeRRZ7GnZJES92cTcZP7Zh3BeJQSzRcNgivdzthiBh5sXhR2tKmAQZim4b2DYULCiJRubg8jWxWPeYu",
  "key24": "23KLVbUBdt9w3rQ56aErAZdXLh5oG3kTwRg33a1PH5tRzEDsxsq156UwNFWLUwnVWeEAck1PwK1hiVu3dPzbMkqK",
  "key25": "4dVKogciCYFchpqw9jS7QqfWDMwGJQTEcR3kbAJo21DtdpGyoawvbkx5xaJXuks6zFZPGBQvEjomLRVVNw72hiN6",
  "key26": "5YszNy9giwb3Qv2Dum2utZb57AzrMK8aBRGWQNLtZguioTo7XkheQrYYfDWjUWwyu2gZabGtgayQLgFadHDYdsqS",
  "key27": "4er6HpVzPkaYzxKhGA24psqUx8RPzembwLF9gZDLtVy4g9gaovNvaqgyA9bE6kuV39kRCqFkHoeCfwHp7z7Q415x",
  "key28": "5yAfaGmKHAv7bicky523yWgZDmrmmqcq3UWhEFKMv3ta1BZeL4M3YyJbBhXDHFtuKVQLmoKy6EV2qDt6FeYMeuXs",
  "key29": "49N6iFVHNGtQ6kGkMjgJkDPK71BJ29a83QFVcutYJJ4xgv8rfisNu1RAv4PonuVP1DTURkoXpxiiRnLuBZFVaYe6",
  "key30": "76vVzYJRgtCifebFcN25Vz93dkTyCckWmptRZCCdFq5ckZxn668JCUhbhtQppcg6qkG97e6qnaFJas1Mb9T4rdi",
  "key31": "2CdtJtrjEg76jCpeq2NBJHq7tjR6bfntvXAqHm2qzoy2jyRtEv8S4ty8YDPhTKR5TgbVtnQNM6xH4rRjZL944p5v",
  "key32": "65rWfrZkjREKSCmTrmJuKNPYFc95NXxvGkXYEebBqcQiqEBKTK6aWWkB6BbLKnPtYKf1wMGJu99bDjcNJdY538BJ",
  "key33": "64qC4ZYWwVsF6jPECeBQikPfY6Fc2ANnfwZFKiJfQCQuZfHrajeXKfKjUETDPQis2nE2cJsQoRSXqF6WosSymGpx",
  "key34": "31C8nZRaVx7QSX7s9UgSUKtzyAGWZJge47CHDxaVPdnk5FWVTpK9Hh2Zp1xoWgwuuWWUEuANMHab8a2ajQrX2VqD",
  "key35": "65qHuHDj2o24DZvY1gN1hsYkRxH5yG3KY38kdndPKFDTP1zqRC5yW1C6dWqxU9t3C7bREqBot1kfXYuA1tUNnnpE"
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
