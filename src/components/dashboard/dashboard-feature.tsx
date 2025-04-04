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
    "2PwNa9itWUZYWC7RVuqWGYubFzuvPbmsQ9h5PQmwqJ3wHypFUy8Ba4WUWXupmpPox8QRWb18jra1Vrj6zuXQ2ZSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5beT1mJoWNhxHEDKxpcCbF2rtDoQwEAd59rMvKiNg6TJ4LJVMKNBV3mL2hPR75fu6s81H5apf2PYbdPtZCnsvWME",
  "key1": "2C24cLwDApmzez1oYzaY5VeQcVtKeogWDeLvEsTozFZ3LwveLNynEQNrBPNS1Ku9mDz4EMqdVKJp7Zk2Ha8iYgHC",
  "key2": "4ZtVsZPH9vPXxsTJLj7nywMEUc7Zt34Na2QaK43LX7zDhKBFXxRQdtoJUvBA3qmERDR1FW2SRz1tvRcYgunE7uZ7",
  "key3": "4mzM6QchUheL9zr1wVXYNk73Wzb9QySSZnLY4qaeLshzJp5xRQGCbkVanQzAN1s5H7uWMdsJFdycLpeDNCYf4Cmr",
  "key4": "59XpE5mzZSY4bsFDR7FQZJtu8gKLvptYTF4WxKK5Nx5bczwzJ8aG74DvUyLmhJcd7kvaLA8vT6p6vGNmv8nnqLQy",
  "key5": "547ebT6CWDy2xXa1T9Rn5cU7TxefyZhZFYNwPjNzQpfa7t7op4EJCjzpXnh3MiCBQPy8qsKuXwWbtFeDzqYnjasj",
  "key6": "2L1nnYEPMgVp3uZZW3ofiVVNbhzfJBfvf4Fhsi2TgCEYiqRrTt55vBN64JCm3zTRbHqM9wnWyZruhid7ULCRUYWT",
  "key7": "5mopomhkH2bnKEyTXKzmSYFt13v7haeTggD5Lu3XireourFVvHk2Am4YYjhaNEzKJMHvS8YttmwUhMSvgvQeuFP5",
  "key8": "eVgcAVnhvnxJz89s6ft1AQY19TyyuD6dNcSMVe3tEUdwRsbLjRwTkMu4Kpjti8XXYmfN3QkAQ9YLJMfYdai3xCp",
  "key9": "2umtd2oBUiBAKKd9mD8oD2pDY7Ak58ZQQgoYEFWqjd2j93Nsp1RYrQpso71QgWCFA3m86nhHcQbiijkVtSYexF2R",
  "key10": "5bU6nLWuxuAGktpaQpoyCDfXrTcvRCSiVHGhrmmYAmsTZr9yb4nPfHAyMoCjhmQWBLJZkurKJEA2YJBc8Gfrc4Kx",
  "key11": "rjbZvacCzuDXgFC9v5RkVvSQomY8gQ9MddCvhLeMCMqr2mwb8tWTTW9HTZN2cYgbwZJcqYTy4nkjrBZopyJUNRJ",
  "key12": "5GAp1ZT5gLetthnCgooZ7TtApL7A57b61NStPWtckyMVbo2EUB9UPKw6GATktpdjt19J6xmJbt16t3P6UctDpx5w",
  "key13": "2yrLBuXRHmfUkXE9d5dybCbj4Lhf3fpgk4rpV7bvuh4Nf2yW4FBxKvbKeAeWgnhQx73yocpv2XzdT68pVtXg2nfY",
  "key14": "26mheEjRbkMrKHRqjMG4gnQaphZmofVpXj5wdxjaVdMy7uuRqkAddVDL1sSyFV8aCaNDe7RZ3FFghginWV6998wG",
  "key15": "4TBXnNBUKLuA9Z8asbb2P9yxQUTik3dUiTZhYcic846UdKTiYT31ZxY3zDh3RJp6SednxSBJN1c8Z8MzXposc2Vh",
  "key16": "5kiAiCDxX1M4DVoWvD2ViJz25NKAtByQHgt2GWdNz2yE4oWD92HfgBtP2RYBSQutMpEbxXrYYAfqcK82g9KykvCj",
  "key17": "4vvK3gLaS9fVuiokw318SnkaJkkL2bbV91y8UYxkY9Rg9utvFadai4vydeJCq61dDw6JW5Pntp86Me6mLVCm8kF5",
  "key18": "3uyboavpktBtyefcVe1U1dXfQoTg8v82WBzk8Cy8b6CMeYCYdd5VXUtK64EvahMavoGTvPU9ezzPZfuVJF9Q1euE",
  "key19": "4GnNNHgoFQApiqEyNPFy1Tsp5oXLPMc9KQqqCDJNmy5DVuWPgdaYFgWZyFNEjZ5nowseoe6nRHxWQt7cWo2SJwSB",
  "key20": "67Qq54zYCDcaQSjgT7HZsrBLe95p1UL4p9QKPRJ3bZ1sihbenvTLgQY9m71VanrdvhJBmYJ7Qh61f2yCvBskGy2L",
  "key21": "3LGHdCUf61tH46bQn89rCRSuP4pPWMc5nxR4TiiAjyhLS9MrxhSZDBPxioYHMcaAULT6tD4G46PfyfwyN8csQ5fC",
  "key22": "49kJa8t1WZAAuucKwJjG3FkmetyakwyLbiG6us8kaJkFsdjx4nHsULAVKur4F364aejBwNNcP3WpvFG1iAxZHkMw",
  "key23": "LEbXG5HgU46DaotRb7ByQKhD1qcBHrXA9FQqSW47gGtBgeteZz32tRrjMfVLQAsHXVnKZ88yguqtvbF3DtcRyd6",
  "key24": "5KwWdFVaJZLnGt9jDVf4bkHKbQDFHHm6hvPNx4x3yWNtvtiTUJExPgru6bzmPfGiVvpMdTvhxk9PArUxxiR6viph",
  "key25": "ZnBmNehvcwan2tGrh7HVHRV2pwt3vjJmyF69dAYrYX9P4oX5DLW5tFFhvkeV3UXg2pczH5ViASMYAxZa5Au8ZsW",
  "key26": "4EyEjCtEzfGFcE4tKn3LQZLex8fGMGYQ2wJ3D38sTPQGxMiaxA1sTz3aBLvL4X2iAHSw2uCheqZfW1J5gjQQq1PD",
  "key27": "4uiwzn8ekCgANGUD7VVj7KJ7K269k7xzCXBid8F8c7LskzsmQz7gaEA7VgmHebpqwSTjFj7tkiu7Y1CeeQsde9JR",
  "key28": "25TZnAvFk7KHnjyzNXE7fKLvy2mUjRCgQBZaEJd3EikkyU9ieDSjJCDBygSEjd9Hw8pgKsJFBebDEorAZdvFbLz6",
  "key29": "AQ5ugH3w7WsWp1F8z4r9XejDK445pXHJLTnERc4ru7PTU5vgxLrNSinXR8tSvGayvaZwzADCB5jKs4Xn6SwnBHa",
  "key30": "3ZqzrPA9thyk7Yem2RscEi4nWoepV3SF1Tz4SNvH3uiPHavYGik2Uv4CeDQ2G6MV2zYVy13xJvTBuEqjyiGV43Mz",
  "key31": "64eWTCZRKen4qUDRmt1NMisVsTzJjm4TiEka3hxtc4MB2iF3AXPVuRy2vb1ucUpTZZYiTNTS4Ryja2f5wFt5Dcvx",
  "key32": "4Xtoj1iFS9PNenpw3Hypoi4Viqh3VavCtLRUkSMWMoMu92BsY7zC9hkErPYd1E4zWmoYcJWt9vwXkEoESUW5HTSh",
  "key33": "3qThvPe3QfCxBHxedi3nLoebXdqbyxhXtdQauahgtGtSV3eqJar9vBt5e6VEopCWUApAk7WSCL4zqvA15gc5Cj96",
  "key34": "4fKxYYws1CvEPRU2tmHwsS7bP2wGgshBanvVdisVWRnJ8DfTqM3zZc6LDJ2KGoK4FUxeSuunn4xBNNgKoucLNCJA",
  "key35": "5iYvy31RYBPLKgwowQSYqsy5w2M3f31SxuMMFtcciABgu4pM95wqYDte27pfT6PjthYdsHot7MbEHspQszG5khGw",
  "key36": "4W6j6TFJp4D8DCz5MEPuRtb36nnNmBkgrFK2usNc2gfLsyKHAhNmjm5tpW2pknK2EBaQwVKvDunvZQgPLUfg6pbj",
  "key37": "38nwBpFa2UmoMWocio1FEsQSojGQzyXa4uy7xEAD3vRLa79iYLPBEDHJd7tsn3Zz3rLMGQAnqvM7BnYA78LwrzZa",
  "key38": "4E7VfVR1B9nNPpgp22AAkdCVGxWURmAmyvDKj96CLM4Rdt344Z9NyJxhRRk5McPErRyumetHDcfVHE351byR6W5L",
  "key39": "2LDkHbzGNrWnKwYfbb5N2LxCqmNMPVtKP2XdjGxzXqU4vmDZVEoVbmzwEJYP4RxdDh1yCHNKjXe1EWKJ17ri6kSD",
  "key40": "SkcH7EzQgmkScJoQTe8hTYG32e5hWb2xR7kMfu6ExTwp18X6xFpwbnDx4DWNLDNRDLJN9hLcHMdiZDSwXKJFbFM",
  "key41": "1E35JtrALFhowfgPtWcunSf7mg9H5cng8wqwm5bRjQwT9sEb9kQ1GcqGfCsoz5Z2m1Lwkk4GMTju7NhGQGmx9fx",
  "key42": "LfysBnBaTumNySqzQcZMnCSY8RNoweVezLUcjtCKQFXbWF8LRLGe6X73q1VrRvVzfHoPpagg2smj8H6gUA82FkF",
  "key43": "5nDPUddh37pHmPs8n3z995iKfth3YY6tXMWzVbieeeto4ozzdsyAAKssTpYcm9L1U8mU3uFRyapY4J3K5pY9wU78",
  "key44": "3KjrTQNBjt4hrih7fQApn2Be4XuZqXfcsqcdEYE1BZqct77FbsqQmQJNevTfL1BD1Y2MPx8u3bMACixudTfvgDNF"
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
