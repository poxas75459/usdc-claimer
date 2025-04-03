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
    "4qkWewgLQdscRLi6fwNqNTuCkVLceHgw4DMfwJPG6TbXrKUanVWcmM8UpqoP1xUvaFkhDP8PLgTxyF7AMR1UR6H9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4axKLmnbTeBMcqvjU5LLfPNRpJGJnY32Lb4dHoJHNkHFY5zcjCXe36u1xCYURt7GvoBAivJGTowLVoB5rHmYDiQh",
  "key1": "51YyF1G85tBa5iuwsyJdVEych8761sFZu7VS48pu95eFEEzHPajF9CXcc9SeqrbJAKcbUrEVUdSFvnDm2HkuEUiC",
  "key2": "RekeyCS7diHooViAtmY2U7ZnXde2BDQtik4yCUbYgZKw5cxNTcf4nae4bgBjjVrdU1Zd52sbDezYo9GaZvjBVgu",
  "key3": "3kQRvRAZ2uXcCqb7cA3ixyHB4REwJa5Wcg4Sh3bQjinZ4EcK7qSzAcjaEm8GzEd9R5AKv8FZYF6paH9nB7mZvBWv",
  "key4": "41ZpUdVhKf1JJy3Pqzmx4zuzVdLicGfpJTMdDk5XdKiT2aVJEMCeQaXu5BmwRv5whMeucfpB4Fy6djfKsDzgMd7y",
  "key5": "5ySisvaBkrLChLez6azuGnfeSZEd3MV4J3HcEiQKTPkNg8Ctxsm3B9oQnqFdyAs2aNt26igR8kG9JGnRiPPpCgK9",
  "key6": "2Hj31CJreuqYtz8FrUS7cXH3jLKsGM3dE2ZTrybE8fvPunt6TnKxZysgqsBkuG4GeoGqgEL3kzqti7wGuKCM1Yqf",
  "key7": "sJ7t4xz7XNSsXRYjtqi7MDeMHF5ZtmwokatiE9nYp9snk7Ew2G5YackSFoAknFshXtLK8G9F21H5NurhdxhiTne",
  "key8": "5HNWTVJBEGNky7wzBtsaKodhWTvJ3jFD578RnBheohJNJToGRM1YytXmcVBw9YdDVAKGmJ3wd2cfkeTeEkZoK38F",
  "key9": "2bbT9LTxHbmmfmUWqNWXk6HLCiSh63d3adTRzUMVNtv6Pe4H9sJ8TRpUi3M1GGBAt3uAti3wCsbsrRYnwDnfeWep",
  "key10": "2CyRGVLxjS2HSYukMJktYEdeP2B7AR4LbAprGi5HcMHjoz2BfQVpWmVVt6UTiGiD8crBjPVSkEgxN2kWcXHyBa54",
  "key11": "2ALjFEdseV6Rp4ozjDd168wfeCF3EizeMTRQp5mGs28twjk7sG9LFy6ZAcMkQHxtFVEJfdap5nPN2B8NckMsGucQ",
  "key12": "4r8gyGgmRhKqTnkYdXxQ9dJn3NY6EwuyFgv2qHLg3QWbLTcUrG8chyTyXBwmawDBNuCzQsbrwPSnhDZdkyDCpzF6",
  "key13": "4tXzpwyusjhvAJA7hBk746ytdV9P9bXK9S1LBwwR9mLgYmT5gvBFzqe8NqkzaSVQpCMNBgdMNioYWfsikterNynh",
  "key14": "4gHQnagaRoMuAgtHRtN14LXYUyrTeoM4HKYhmMuUcxjiCj4FgdNKJ7gXJduYZ9jMBNp9N5Uq7SysrZ9hLpcohsT7",
  "key15": "3MaZmdBh2kwdx7Upm78oQXYYgNbfqiWX7geYWi8u7hveCc2CbqUE8tzvFCxxPNB6iKaeBrFTVkLuwyonJxRkLTVy",
  "key16": "5S6r46GMkM5Czrb9ZCVoHMB6WATcWag1JtixnmzA9A2EPpxenJ82F9p9BiTwJ2WWG6LaeJ4eF9wxjieZurzoL91x",
  "key17": "5zQYucSQSGuc3kPdkTPDGkt3tDDX6YC4UiejEcRN52bzLX8DVXp7wQgRNYE4LSHcK89KnUmweYEDCtHwVvxWQinV",
  "key18": "3xYDoAsm7erL9Ca2fUPchyqixQkbXN1eKNUacmMepeDwm6STMqVkQ28R54268BKXY9Zx8XogNTFzB11XkUXTUc1Q",
  "key19": "7HmSgoy2UTZGjVVsUen3wdDUUTvJf8rKf5Q3aAGnNCcDrfxNPq7HhP3q6QjhpndxPSUiwRJN8p3RCVJqVREaKiZ",
  "key20": "5Z8E8j7LSxPtKBHpcGPZmneyADUfkscrtYnkkRNh5vUXxfbiCdRA4EA79HvhuUUCCNBSngCprQGpy8pKupV5sYki",
  "key21": "54PPrSKs4cE4oE6Ftx3DwH765cePUec9awBhrBJkRh2nT2FZ1FuEwibSrPmGRgsdQim8vrF784xQCa6Lak6UhVDj",
  "key22": "5DBv2Lte9vR5eTTfy5fYUPqtXi1b31Fvs2S272mowg4AegytzVJFLPNXTQgDrXZMH3KBVvE9ZrPjcsMTTZzsm63Q",
  "key23": "27GN4Yz94C1wfFfPyJk1MBsWtSKUf2C8VpUxcAvxeYXJenV3JxDrGzyEaZjKWZUtoUPQPEciqg2BoWNQSuGcMdCr",
  "key24": "2GZwX8hF94PasGntBb869zaJf8FkbCHVWUyvu8sRedhbzXs3U7cQEkQ2hPgMkyM9G2jAY4FUvxBAYHnAK4UwAfeo",
  "key25": "3F9eUJFZTfobDdQ1BG7dtRFGn3HQ2tMZz4SU5rsDYGPR9Ef4nRaYE3WwaFdmpZM74XAW6K9z3RF4zhwRbfxu1Ncx",
  "key26": "2Mg4HvwLW66Fgn1fZJ8YSnm4HkQ3DDFA3VFVwAsqgcdTj35TMUgMW6j5EkX5Z2zE1RZHHFiU5LExVzZ5omrTqy5B",
  "key27": "CZ4Y86PMVpqKkwqe4hcyEEr3TDF5YHvYNYWEMAWn6M5t1w67PmnEKtWffSzDyo6UJ7BVNobfMzPwS3uEt416pqW",
  "key28": "32sQSuJapjqqGt4bxe8DmYwKqbH3rGV3X97aKUM7pHnYvrv8uc1EH33UkspJDrgak2KK6uwsnLsfduzDYYXd2fg",
  "key29": "3UxxuPiKFnfkWUMvb1HYHSZLBHzqr2tsGVBj2WayCS373AxoPbGzk7KSp7CX6G87sBjppURwYvwSfB6o3ZDy4hFp",
  "key30": "2hHfkdvRoc2qRxJ2oF1CFndmgGwnSwbkURtyVcsSbL6LCWz1NfBvcRt7aCNiTeezSqBPR2RxxnoCfvARnvXUvwmN",
  "key31": "5oEdnniTYziJrn371oEC75vUbhHqfpkziXzTXbhFdMgS7mD4YDBriq5znuxB7SmVWxSAsR3GdjDp9rYa67fLTtw4",
  "key32": "3WABJeESRYi2ahLBWhSWRGQRhWx66p6BBRxe1KNryMr6wCbuwkL9HbjoY5RE4wwnAPe19ea8qrSA7BBYMXGZNEWw",
  "key33": "LDHz9UhkLecVVWw7XJX3661Nw5c88GfbSVNwTQhYq5qzzkzywu1eccKXdPphgXTk5HpagY4T2RcNKh7R5CKp7mr",
  "key34": "sSed3dJ5bCXXegsvBU88ufvgQZR4z5fdfjgQh4H2qZ2FxSNdG1hn5YEVbcnbEaxcSt3j1djuv59SmGHTbxjifga",
  "key35": "38Gg5t4LfYJDaT6JWtUcivDa4DNvnyHfkuR1vgKYrx4VKNngj6pxmrM6AsYw9Ye2KfL3FzJ81c72fqfiFXrLMd7k",
  "key36": "TudQ43t7akexaCNkZhcb8gtRkftptJhDPs9mEHpgqvLT6vCJTbLHstesUAA5QyY6q23NLFyaDet95SXCwf7gyPK",
  "key37": "2xtpYpEb4ytA8ZH9trcb3vc2rguDW9ZH6UVdqZ8TM3ngB5zDB1y1qtbHjVkrzZE9NzgR6EKCUeh9b1BVhkQKjz4M",
  "key38": "3pmJZEqTiNvBSZumZNeEeKhSui7rx4GB87cPRHyk6tBjdN6pwALZz1RnjhxXRhpTAn32Rcuqaud82MQRKmYokd9k",
  "key39": "4wtzk1ARnXCSr7HGm8MP173eZvkRBdMhnKGFpAESeiuNHao4Z9drrp59ALA4VVpShhCMPqAajqmvtsePnjyHnad8",
  "key40": "4u6xCRWKJQ64G5Cp6GhzkWoMWd7ujkiTx8GYKKXjRBcvqLp8w6ziU4XEdHm7GaKMuv2VcSPrj9NjEVpSn4scx7nD",
  "key41": "5bYpe1yH1tycwxVnrNgPVx9zrPfYJnrLZ8a8DwAbDkDszzyKhgFT6FmTWG13rmemWQ5RPsvbuCff7ZiEmEYnJHuz",
  "key42": "67aSypgh96VzzUDRzXorKYSQPMm8agoxzKKviCibdm2m8XnGpJYqmbmowcrdnCMLQw9yozMTQvjsnCC4oqFMyfzi",
  "key43": "4Xfcn3kzk5rJmQD4qRb8wZGT9wpZpXRMK4mPoLCf8gHJvTxH6GUrzjh8d9jniFkkpC2Nz2m9aNfoYZeAk1hAS3sw",
  "key44": "1JAD7PCyWyRKfkDtavNSfzmHXoDHFcit8Xk7uEA8bqX4VwTnPtaW7veyveFeGxqYkTFme12ukCPcex6mGs2WLDt"
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
