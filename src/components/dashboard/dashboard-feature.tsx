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
    "WtgSh8GNCZ1XqSyaPTVak3WTpygbQ3HKvYaK5MaLUPYj2QrPD2GkXwABG3wQauQiQTMj5GeAahmhzShwH92MtcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zuAq4Y2fvmGUdyJBmYQM8RfLjwDhiijxwZEvvHy18deRKPfuVbxHQft15pNE1LfgoHoSXHPP6QBfUujtXwcBBBJ",
  "key1": "4ugRDcoWvQKiPapBrACQqtvh8TEkhBGgHgHKy6XZ7Z9LYriECyVCdQm1L8ddS1pn4RpCRhXvSnCZEsmJpAyWZxV8",
  "key2": "5FUKRVKDRL6Rspt4HVUWT8FQFo3aHxLCbMa9NF2KdQZwmTCcmvBYRJrcHot1ccRjMpKn7A8zo44R2k2aX8JFJski",
  "key3": "3gFQHHpHZ3cAEz7qeawAHnzpNc3xHB81Jtpcga2QMdjFKYt6yLwBsWdNMcqqNuntZ3Mtbu9th8WFULw1cUDqtFH8",
  "key4": "2qRgA71o6waq4q1gotMg7wTrfKyfJxCwpkujetFAmDeB4JB3TjJDpDLjPwWkWib1NjtnELAA1XkKJ2idoCVF2dF",
  "key5": "479oxvu2SEn8uVTqQh5ZQ2tfc1Gc49SKZ5k6DyDUzGrQerDKCGjZmo4rVH9vuSw6bua9z4p54DwNy2CMQCCBtRRL",
  "key6": "3yZUEvhaCQMK8LYc9FLFrC7EmySAxMGewnT2YM1tfd66Ewq6tU9WNWWjc9sihUAZ78N8iTAmG9Pic72ajxMhqJWB",
  "key7": "4xaPGG8mBsZpikjS8ojXiaPMxxooXQnpiktpdkmTvUorGKKjy1zMUBHn1oXRUfmpEar5TmjzE9WhvkUqa4SL6YPx",
  "key8": "2PXd5tiogx7tEeHKb4g7cXKCXhG2yqvvmXxZg88jfhpkU92pSP9nqrST5RMdyobBaNsARSHUMXADY1hNCetJLQd5",
  "key9": "LPGQDhfDHjQPd9QTFvJfHtwbM5iDuhqcekZshG8d4Wv97Yz6MjCNEoWtjqziyPnKKQHkjRhyKeW9cnRP8kXszkf",
  "key10": "3ZteuZMxNvi7tVUhfGcY6fBX2aApXdX7tS4PyF3JSzsieRFV8fkeWtuAA2Tc7tv8t9p5pmsucpnGv9H9zaBksHUG",
  "key11": "4zADe5mnQMBKEhNDcjeow3Fisyqzi3RTDgu3sifWrTtNaSMtLp9WGYgTcLh3PzHMYZtUkFpeG7Jhso8PX5T9giXU",
  "key12": "2QvVLn4tErfTVyZ2jZu3UfdvmXQtknjSLHTEwyp3toNKyeDSEpcfb4YxuG9AppLbby7kqMo7Jdx1pa1ybQm2C64F",
  "key13": "3nm1bb2VDvgZ2Gv6sTgqHqbAyrFYmJWSshSq41dTEo6PSFcNyB4hfYiEc1gmghCjpBiYqLt65vhLN1d3vd5Smya8",
  "key14": "3e8a4HSmQo8AY9mjYNaAWnPkjUufuogBGRgnBf3rY7Wnj9yXoWwEhCRE7DrpR7pcSfzpwLqwLsmfKoFAXmaP5CaT",
  "key15": "N89z3YJk4bqfSo6w9kjEzRZbN1LBoHLFzJpkiv8yPBxbsM2dkJDCgxQMLw1cQbXJs2pneT8pQXoFRiURGLYfAe3",
  "key16": "2whAi1FvKgrmzZGumBoZgdd1gAV4QKhHWcUqP3ASYxYtYsh3JUkdusMZnvPhwqN8zAxjtNB6wMNa7v2L8hKwVnE5",
  "key17": "4xE89jmvPuiQNzY5YTenGbAYtwXvFmF6QYRrJF6KYZ7BGKzC4sj8JG98bZ3mKj6PjVnPAUnoScMXVWXTrFZHuRe6",
  "key18": "4Ux3EYWPutVSPeQDwJGv9QeMs317v3uuw3pKJibxCm4DV8EqkeC7ExTPMRxXB7idSU8dzoz8frUwaMhV4CKGwryh",
  "key19": "663ZmZTYBwqP6M1yVAXJEDD46K6a8m5uyYZdyzyQpVVmPSU2Paq3RLdiUzkhj64DWoL14JPTvAzbxbwmU6Djfnu4",
  "key20": "Zyyhyq2vewXgA5mCHW9xSzeKWrFaAKgJZ5JUWC8HZJdJ7Ax1ciu8t79SbCFQbz5SPo3bRan3NfG7TiNb7RPK6W6",
  "key21": "4ppfyzCEaVDwXZ2ByqbRxyaGUKJ4ABvksSRSe6j75uXiHr7KWc5vxhZtd7jJmTpaJGPYBPjrVkdrWyVscVkX8eF5",
  "key22": "3GHGmVff9gnNHL6BiUBfXzq3S3eh2B7HL49jLx5cFrDFneEznmq1uppZX7ZLvPNEhJtCVcP81hN2dMfc9a1shutm",
  "key23": "4tJ3fLCFjMFznTBJH2MbqzTo2tr6J2acdWZQJiVCGruDFfdHCgWYhBE9bAqNos4m1f6PivfMUtxiu1223f4PsPrA",
  "key24": "5uveV9p4rhzp5G9VbjKb9dGsxpqRFeYikXtUCN3XkKsRdopogzbFAe9Jie6HDiKqDYfFKpGR71wYbBJF1hdY2EQu",
  "key25": "3jATdf4Jg7dbDY9Fz1xoQ792AaKA3WKSS2JGemHo3KnAVdD5s1E3cHYpgaFWUpmw4xCxnLW6dBEjm6t3nmEPZjYX",
  "key26": "24LrPo4iKvfyCToAWamfW5SazUkwWVGgMGW6ceywHfP8gtPDtNRaz8tmjVj9zde9bnLgiTzMtfK4JApMqrTHDGW7",
  "key27": "4WV2WHTUkJtNSvxkGLb6UYMeCu5k8bMz1G115TiubP5HQYnY64WUveXUrdh4BeoFEwcWarmMpwgzzNmJ99YVrk9V",
  "key28": "5w61BYijigSgEHwEnnNgXBdHnZnMYDp5HgwVLRAMFWPuBMc4wydgsPaVTMUHc2HLRYBf8iCVCNCNUST1ScwN23Rz",
  "key29": "2ztyvSt3EMXJnpTwQGnSWDoU2U8KaiaeXCEa3b3SpE2rLiw79v2zcrUwYGEnbYxjFP7j1EyU7938EJ9HEnZyJQvp",
  "key30": "57Ph97CWCvSJuGfsyBvdhKTumrJWesri8ez3JqmXgTxrbfNMXPLcKP97kWCRyV28xknNMPeDYWLWAimZaKcukeKu",
  "key31": "41FAWgU4c9tXRTNNigwJZh1oTtdg9z7UtwMt4ySDkdE7S4P1ZdzNuebnk48RnvSuNNerNxPKLjMPn2CwhHyVkSfD",
  "key32": "26vRzNpe3rR3cd6XVwdxayRijPqMDgx3EnBtRE1MdMVfPyXanyj9Jj6KFTDgdYvBm42xTB7qW4JAS1tL4Z2BiKKo",
  "key33": "4AsqeVMi8kfLhvQd4WN1nNGCF9Gt2yxSey18kppwCXwQ6f2sksPRaavsnaLsXC2dpC8Cf5LUhKPYhsAnYSSX6vyt",
  "key34": "4QE9r7unenSd3UtsyKThg6VgDi7dhyYTBk8sS69bnH8jTCtars2N4kYsmUiGuYPt9GWqahheFcnAkESQC5k3tJB",
  "key35": "2as9pyLuydrrazA3uSWzbVhoeMRmSMUQu3a9wBwAehs9yW9B81nznSghN5wZy2KGB9Y6k9gyFYo1tvrV6F1DoZ4D",
  "key36": "oYRxCHLohbZpFhRNe6M5Mk6kSmmM8RrHWdPAGRgFdu1pfJCUebSwVwSV4Abyu3AB38ixLBrFoe8XxumjrPpi52H",
  "key37": "QFJm5tDKG8kUWWHP6p6dqQo7YHis9iMNzqnWx8G65sw88VrTMGS49QRJNnxcwzRh1osxL9pUnbszRptjWDuzCL5",
  "key38": "XRZXABmRN4biUvf6WHm5G8Ederc1NwtqhJZbikg74bvooukr9Egxv52EAGkU97vkrpMoYeZNv27jAJxkJEADfqP",
  "key39": "4eQaBaE8dnfEL2vZKgeDHTAgsninkTM7P5JUmwrBid9DvjRpvK8zbXy2uHftXfzGrHQwqHFjGps9N2jFB592CpJG",
  "key40": "4jPuND684LeFoFHFMPE4MJav4XVuCeL8NN3v7CatiEoTgRGz7MaUtrT3pweXnLUFwBiU6o7FQNbuWPQ2N3ba9jRT",
  "key41": "4aHsMAh9TFY5UxHqwAH6ivcAn5RaFV9mF3VHSs5JcoJUnGe5rMwPJbrfXhqZdL2GUxvnFaPEQ1NPmaGemSi5zZKj",
  "key42": "5BVBwJptrx3jXP6BFgWfzwnaaiKc83RL83rLXzZsY2FZBYTwfD5QFugcwjVBKSLBAR3qamehaopzYf4qdsEC5H9L",
  "key43": "Zm74az23tBimYp8AzyYZ2imFXAazrcUUkzRdP9Qr14jaUhS8xS269YVjdtfSEM1KCyTo6odXhxwdLEehEhLz9Aa",
  "key44": "eyKNmAERNV8ecRgFJfQVhKn13FaEDnYxDfmm78U77NmKoAvMdzN7zHX6nmfdHtcsZVcU5BPddhrx6MpRE7U5UVh",
  "key45": "5gQhHzvLucheQGUF5DzyoMTXF1xEfbdaadiFvZ9gqrfonPvmvymwKe8Bdo9NEjK51mMgJGudiCJAhEmVGyMNdQSU",
  "key46": "5GpBiiy45MDCa53T3qBgfaHo7SvS1k9PzryBK72t4gdJVPQoumnp2K9gs79u8pwoVYmbhWAPVJP7o83MG9kquLPo",
  "key47": "2BGtfzRGxTLPsSEN7fSQv6rznPX2ufxBkRsmgXofgHDjDiD4Hz7VwXhFaqmc32dp3zBwPwnQ4r2SGjutkh913kEx",
  "key48": "2v8TtveX7zaZLdr2URWo3yh96UESAje91xzDWwchGVLjziYHUKeaRpVU17mo28SzvbEYcsqj5UpqtffKWbRo4Uuj",
  "key49": "arCzBE7Am8zKeXndYcjYBXoaLfrQXhRcRzZJvVrm9zage3ns9Pc7ZCgJMrKs67T4LMequi2RjsvjZSbREqkLHBj"
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
