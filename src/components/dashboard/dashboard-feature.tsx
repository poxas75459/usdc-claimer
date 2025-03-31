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
    "3pvEJpFQKBHzBKb5X1wBPt1Hp8vCFSS7LnyD4Gih5BCpcXeEdJqpUf6hnZhyDexJkKfZWaZMGzhSX9V2fNJiu5az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gQYkDmqHsLzTZLxeRPvGepfA9nemvJ2M2QoGUk2jtpnj2svkUdycsgwhCem4CWApjfGK3cL5Zaxr6nwmxc5jhpk",
  "key1": "4eCsdqEwjaA37TGqhkjcYxUt5nLNTkjQ6EnEYZXxTciDVr56i5UGWrS7AkjdGytsaWFQcDu8ZxGAWVwiomQvqRza",
  "key2": "5Pa5d9jbyH6nf4DeJ8zAmGmnTPcU1183J8krHuaKkcjSkUA3PD1T1FxRQ3VybmUUCuBWQnDYqG92zHaCREtCJMXp",
  "key3": "3CuubXVPckuqHpGBeywiGe9endXrnhyuQLVxmibdsjdEG2uBx3oFEPgyC1qbffq8TigXzxVeQ6oHhuYDDXQbMLLF",
  "key4": "6gjMKTmsV6QSDiYqAV5sREZfKaej8UfySD6df6jHUK2RVK67ruEz9VCQg2XbVrqGSF4fNFPu7kKu9iuUmjTPaV6",
  "key5": "2i3uDBCUicYtJkEn6SB6fDbbSPu6J7DisTq1NwpaJQeHACcBrKUp6cV7B8uRcFLo8cRBNPQCcVgZsDCgBWPYwyF8",
  "key6": "4bGcMpF8JxmtVDQxHroEQVVq1REErpUkmyssKMsueLqv7FeyPHUS66ELXfXNkXG14ne2Yig9LoQ8CGreptvS8EDw",
  "key7": "2QuGRJCXRkd3htv5TcviW18xWbULezwAKzqRUMj1KRbyi5nTVCYZxWz83BHmzCEk6xkEZD26SJ4RgiNENFYpzJPQ",
  "key8": "4ffqkF7uVnnKoSGytCTfJoWPBkJVVoPYgov3jvGa9TikimfceKEz6ANZu1YcvHfXczZwK3K2niK63PHrSQdwZDFD",
  "key9": "sGAiHWJYR2YyVit2Y17cU5a1EijGczGQsv8YaU4Aq4qnco2RP3XdFV7TKotM8kKEG99FD9oWR3KH4wDuaHyziJA",
  "key10": "2BqxqUixWkgaGcm47f7Jj2eK9E7Fm99LdzCroRAcQ8UkVdBYfnmM8Awsr4hJRAHK3R5kHuxvvJLu81TW9WbP719P",
  "key11": "s2rxd7gpFAYyFMr6LkVQzUHVFtNwdcM8jaAuG7nh1PnokbxerXuG1se4pxDXz3jgoDEAqZQxFDLHUAJpUHpKrVi",
  "key12": "5XmRpvek67og2ipcSWx8FGaXf1yxUt7qC5a5zF3LCnKkMREUKqFUw3gUYzU76hT6xfokxmZD1e7DH9T4hYr7fTmB",
  "key13": "5Enb6ZvFZKPnWrp2Ye51fJj7EaGgaFumbnmfJfbWHaucNxxKrrVrnPcXvH8cU4VjMBKekcihiWE4vX8ueDZFoqYL",
  "key14": "5NmggG5rtcypd3Jo2kkVttynBYr76hizChGPEFxzuAAnQ4aPaFP1VZn46U5PzThKVLavRntRup7wxE1ru7KvshEk",
  "key15": "2mdFnLNCMwFH4S2je9sLEcWg1HRWCTGann4AuTMAbMYjSSnEf9xhLGLuAfxLq8KtangxQDTJT8PcmPFFoYXaDk4E",
  "key16": "3dc1AHmTF7dMxUfBpMFz9U2n86gB7yKunt1YHziKpFmP5V9H953W68Q8r5dqyBSaiFevAstBQs8PmcU6g3dTMNyx",
  "key17": "4Mj1fbZ6cbXprVxFki3Mo3K37fRudgnefZrbfHESPJDeWCTPcZuW2nUZtRQmEoZCix2H1gBhfmaBDFEpfQBSjK8u",
  "key18": "ZvXTyEm7xJhKDap8VwdFiBiMZLr4G7bDYPsjMn1rvp5KQ4BBqxkLFRqvpg8229ExidmCycXHPmsqydHpUtxX9aX",
  "key19": "3f4doZYk3pZb5dVeNpZMx7PdYmx72rN3so5LZFjte88zWitwSdWXLpyuF5Xm4tdd6sxm5tcF2iGLDzbN1Y7ToVkn",
  "key20": "63EK51Zz6vno52tfY2NAmDNitC2aoq3hZJfHc3VGtz33ZJ2DrumSd4jfVZ3QLt9jDMW5s2zWhXNh6RdvXVQ6TiPK",
  "key21": "3VLWWdSQpzQqEhqEyp7xS8SYn4K6jn4QFrKQEfvSGAoZQgiJ82dDPYAZDAfLRVttYfkuqKqa9TY12xNwmahxBKfw",
  "key22": "4pKtHevoU59HrnThgxF8MLzDiD2wSnEMestcFAvLDc4vJPWzFA7J1qwDMvBbtc1thE1ZVP1Prrxxeh6U94hxjvHM",
  "key23": "r9vsDiAwUR3xVWj9niqGgsbwzVQMNApx2LKsDXRnbdFDbnaMfjFZsmfHZHQvxg1iAGXN57t6b1MHyibZSFY5H63",
  "key24": "2vkN149FdvKQurfF9EN3CxpgiteK8gNKvbEcUNz9HJz4qEAeM8uQRCdwYZMKBdt7sWuWoVqFxaFyuj7mWEUHN6RY",
  "key25": "2omLkc3ANtWhkQhP9uHQYSfYjmLbuWH5tF1uCkt1f5p33ZJnmibDh1hywn9bMVasZmM9aJbkJoqm77PrUk2WW5VM",
  "key26": "5g5iiEL4zR3qKyJ22qAu6kQvWWeLcsKgUDFJ3kfLNio2R5WfXQfCcaPQpo2RjctpK4n28qNDjg8niQDL33PqqjmW",
  "key27": "57CRA3m6vC8PttZMHM2tcAiS5CoTHZ4ado3puMjx4VXpUyHcGZYi8RsdGQijhaMPJxN4Dywr2Yr9vGkr8hH8HgwJ",
  "key28": "3geFjukvCJcQQdBT6AuHzEvBwJQRVKFqGpJPFiSGcpPgh6mj4a8t8gUHxPj5RvgC6LJtJJHiKefrBZJPkZ6Lv62E",
  "key29": "5o6N2JwAw4K2RW2X2As83TWwyGemHF6yGgk3HtZbfeVMaeH192PVrq2st1BthdLd27qgtumrYyxcWHT2VtgRrU5b",
  "key30": "4F6Bd9PVrh8Ht2VApoGmFFQCdKxdPcuzgrRgEU5QRDbehwahdGPaidLTrySoorbfDRBursSEz7VUUGxGndQBYdAv",
  "key31": "5sw3bFG9uafTLV95eJTgUbBNUBdpJeFbN4KW6zVtnvx3udxKN36BapZUocXiQZgDASrrTszA5VeH1DHFGLoFpGc6",
  "key32": "5pXbyEqqcASnY6DFaffS5e6TWiorSacZ9GFHf1Z2W8LSBWeKHXdNUgnX3KW6kNUfaYQCNY9NUCQv7Z7t9DVphSkG",
  "key33": "2FCBN2yFtyYgUQCwsNtQQAyC2ADYLnvf7q42rEriitMEoaaZZm2hnTSw2vTn4aZkGGsUD7nAc5G5TRyLKTQhFhLR",
  "key34": "4y8kRpoYNdTyqmBCE3eGRJZQMKzMcTmDDDzqVX4woV71xsapxpthNkbQWbZbebtVaLSmm1VsiXkFjPbKhywvD6we",
  "key35": "4DVLNdVGoXdvxZSuqtuTmtCfjN7XgDAurFaGWaKTfGUz1U3jJK7FnrezzH3jPaoDh6gjms3ogYdQcVP8aNySLana",
  "key36": "5htQhVKp3Rz4NXeyhh9iEqKeg6e5LQw1EYiYbrigf9HMt9LxVznrJWNaLwRLwcviikoVNZxRQG8mxnpBntgpxt8D",
  "key37": "2iqNdQb2Xcphv4GVRadRFn2S8wnjdrrjSiByM9xkuZ3TAun6xZh3yZFr5xVgyEMMPyWzMpwU9dTMLqxfTtws3qjV",
  "key38": "4M8Gd8sVNuMGVv7ZiphrRbTbiVqt5Xvaq3hUw8cGgdq6mwyZwkX1dSp2pMVecxWoVL4DyTk1grKWLfBgMvgNzFJC",
  "key39": "4cs36fh3kHdKWCbEPJ8U3S5EFWWXJAuB7gTqoRLg3BwnQdXCBPFndFwNNhU53YPrMy3zoSgyQt9HQYXxf5uut2Jv",
  "key40": "2YNjcehVSWGxPZxT25jNPU2gjmmAjeihe1LUo94orfjjznX7BAMkqNwZAmgBmyBoLCXAHLK2R3Xn4a3wJ8i5jm79",
  "key41": "33w53bf4vgPiw63668qJg2sEj6TogbMsuKRcDtYpaFXM7FGsrTqTAeS9zdJscyX7rHXJQ2cBzksLEjsvLkzZsYSR",
  "key42": "RRcHKptibEYFG4MkxhE2tfNHJknrgRrDNp8LdC6t2Co3MXCCjujPfwSKubSZQNXpTbaCTj2BtnSo3QoCEvLp1As"
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
