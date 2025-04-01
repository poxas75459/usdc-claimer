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
    "3aZFH7p7dYm6mqMd77N7yY3w88BTzvUzhMhCFcYNF5UoTcrbyRkvPnxGUrkQR1YzmXoEQfGVujiuU5pbVqLEJs7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HK3Cg86b4skaSQjy11ShUB7XRHJYFU7KowqPyNdznPZhsTyJYF1VyfeBUC4gfspdNzLunVB5ekSP9yzZybyvpcS",
  "key1": "4AdhfBbTwAYQmWSed8GzfPBk9E8QL8WFS2HLk6x219VyZ8tjZVrvxEnnvVKv1VSaTcNyQCQ9wD451meRWfxGAJqC",
  "key2": "YuR7ir4FXz4PdYzUhwQcXBtvMSp3QFuEBxKtLbanmoRxhQNMJh9sj2iVfqMWxGtutLG52j8seisHGok4yhD2LaQ",
  "key3": "4KMhNUcD5QWMZpQE2sWVuXdGdE8xHsHMyprdGtYJWpY27wpSWEbZyijhqjtfLQjLQG4a2Ez1YQRzUEscYHiuRaPC",
  "key4": "64hsDpi2EZvJ5maVBuXMoZSQt8yUeCDWRx3ucuHYWADt3Av32VdbK1QY1vBmuTu4p5QGw9ScV5wBpHc4X4DYBSmK",
  "key5": "3ok5dWZKGjEumEVg5bfamGRS8tBNvLfzPngaCnU43MK1oDp4fVmBRvW2FKj7wQTz3DR9yDEfze7YAQSLvqgwj6r9",
  "key6": "3sd6MAJVCL6G7JXJrGivQVEAehJcJ4tyDdmf5K7tRENvVECRjpZ1fTUjhJYJda84cMNZL8xP9E5bTATg2H8rnDj4",
  "key7": "4nViMS24jV7tBL4zj7fjPwTZjA6av1fGH8r39hww46SwGFxWpGhaKHWamBd1kXRFHmcTV5b815ch9DRUEeERUoTA",
  "key8": "x8xaCzh85hq5qt6d6hhE3AAYpa36SnDhCxauCKB3T3piA5HaLW9xfF217RH11CEZRi3gvttNAV7145TtGNoVbQM",
  "key9": "5gj77pkbhoZrKxVk3ikHae1WPBmxYVZib5Noc99NkizVxLhyTfuYpz8bNJGAzxeVty1NwHjYpV91Ew1fKd6i1J2v",
  "key10": "3CUzd8nwgFzDb3qtmWEpU6amJxqyFLK6caoQjtjAy2EETMiRg8HueSuC1rE7AC6XZJ71pAj5RmRgHGNUCVUbQbmZ",
  "key11": "52977iix8FQLaSTHDRW9fkqX9rxA6Ni8AzYhKGdnJe2nh9P6fCYrwW3xT8Y86kFFi8SMQKTXoLNHSEB2jiupJymS",
  "key12": "5BkLBw3LRBy6ihCRoXMMrBKYs8UwNh7QFWjLfXH3aZ7MhD8ZAQ9ofdPXVE5xMS4gkUj4g4gjF1ZHHSLXmZXHhXPR",
  "key13": "3kXQyj5VRF3kbFbivWrySYyjvxsbuyhkBuo3EPhr1EU3xb2YNwyPkGmP6262mY12bL18rBjSrbMqLyCZBeXR2E7x",
  "key14": "3wyyBts327j1ZcCwcyeniiUEBKzqbwM4HLWNo2Joxrwb6f3CnaSaQppgJ8WbfNBRSPBmNaYLBzreNwSVGhgR1J1E",
  "key15": "3efcJN1ag1WLWyAmLzFWHQATcBboYrGS3LjFLwwazQiZbcRyDmYLF6eYF1LJRnp5RyvrtsHzyES8gEoKwMhyz9WP",
  "key16": "3QQgUqjzgGZK5q8StcAR1NXzZfKE5Pr7sdk9gUrieRU9aDSyKJskfvJ2wLihALg5GN4igGYgd6BL8GePj9QVBL3j",
  "key17": "3B6QpmLRsBw7Feo67FmcECzwJDhBLcDrFDyWiDRfLcnSj2ZrF6QZA47txEhvFqJUveipVu4gy3kMjp4egWoJD48f",
  "key18": "3F6bCFxKhwueTFfTwj11BwDa5B1qrqmd2fAVea594E7qap89jcgYoURWYh6x85vtfkvfXXoef5VjTuFPo9146GLU",
  "key19": "bMh3XDC63iAW6UJfVnbQ8HbwAVtFVTvZLYGQd7orAWihC97hsBfUjt33XcuqFg57XM5RmfdjZ1pusC7AaaG37BJ",
  "key20": "5nKzfMFVn7kcc3n5Z2pWhByewSgMoVrtHaK23xWnS16qmYfiYkjXhMibHFw4wJKxtG8FJ3XqAitoNHtf4E5GgYkm",
  "key21": "2hi4nXZ4jSnwrNQ1FbvMxQSgLT5zg7W7S88WsQ3cAZ5XZYXPBM2NX3Tw5DVCSXGx1BpvQHxk91ZjUsTXqJ2XMEAC",
  "key22": "3xkV7C84j3AZVrmdD1QEARkhXsMAjPryTGinhDtRR83a3ymQFaPar3T7QoZNVPiAGUpWgXQz8F2PZHhqBRui7tGv",
  "key23": "2Zb5KnuBRS8wxJz6MxGnoAuH2iNEv1AGjuuc9aSKCbjzK4HKuZ8nPhXNqR8ghgCGeGcxwNYu9DCFk18Zr18ptnDV",
  "key24": "67BdF3JWSFrmwDfoGNCjfvt3SMAc4uCaV9iSvFJs7k78edY1p4hVpxEXY6GRKwRGoYNb3pcvmznhbQPBL2S5LG2P",
  "key25": "F1egmTskqyPmy8R8fee61bJyavZuTb1SzP4qXcwd2WbjaA7t9HRRhicEEha1HZ6Vc9mcxtKiMVZuATLhWDGoZ5n",
  "key26": "65YSvRrzvQhbEhiSBWqb6pPd3fXxtnDEiA8vPvvsrjXNVX1v1afbXBTbdU3zpr2D1FVxESkQLMXiiGBuq3P7AgrJ",
  "key27": "4Q6wRzXQfPw3ZRTnGe1J2cgkmYpXSYM3wn18CCwYk4TkJwhSYLA4AFpHMDPe2jWNe2xGLMy8yeUrzBjHqqdVJnr8",
  "key28": "4LbZAg8Yt8ShBQZar7fHwTLEQbXZ8W3uJQKxKi4pdL5KNCtnAyvBQvi2KRCRZrddMw7wiKSYsFdUJ3KYdTyGw2Bq",
  "key29": "5LMjmsxA2x95iYxoJUDNwSLeNs4xPTM74nxrSg9v4ntUanUL48ev9zvaZ91iXhTqQvSAyQEpoaSGyN8DdjEGRT7A",
  "key30": "W4AjRQua6CW4X4XETV14VMcTKkbeV6TEa6xNCBCdgaCV5Y1nCQai7FH38SzM5154mirBbgHBh9sfbdC9E8m13rj",
  "key31": "5o6BsCcsrVhzr1xpMMxDo5ygLPS3uvRgPPBX3vpUuTRCtqnHt6Y59wK77W4y9318i7WJr97o6PxMnxdPkAVRyJYH",
  "key32": "2M9RU8k1j8dJdzKwE4CfnMYgnXfk4ZgJmFzUCgW1UofYn9jUS9TNBwv5gwu8PN7dCAPskqfwsMs4eguVLrvELw1R",
  "key33": "4PSmGKca3E7tuz1kPqCXTxnhpKm8yZTrhsLbT6BJiV9aRUpLWwyuwGLXBA4RZwdjPxfr4zj3LnF3b7xEC7xaWG28",
  "key34": "2FGv1khugNmvaMEadGMBw8Tw818QHSc4XrRDChzS1NJhWccneytWWH8PFsQbp4sjiQv12pX2d4Pga5nAkqdqodMC",
  "key35": "62xFPceLvcZGG1dFJS5odmQ5B4a272uiMN56UhiK9oDcTg8ywVCGTJBU2Q9sGUM6Wzms25CGHPHqbQLRFLZwaetT",
  "key36": "4LrNLfhBZ5oZ4ssDd36Ef9uSenfHNR2Ugny8Ftc9chVfgcrvxyrXrWT3gZwUYZNLD2G6crC8xKmy6VyMnw1PNLj9",
  "key37": "2eUbss7Q17ydPaTyA5yCMRmiUQwuHKn4EsvMk1p63ZwjmXQtMTcQAiCG9voEnDPBYr8crwiwhBt2uJ1We8mbbFwT",
  "key38": "45eXLuwc7bZvxLQEfBm4KoVkEiS9uxLGJMGr12MQUkd7gz6XQzwTyY1pR3kVmbp9RLAN6w4Hv8WwWmHEqVtN7Esx",
  "key39": "5QorNvne5x3mN69bDGn3o8jGFEuLUHnzaJrxNGPJwVTVkkRAU3EHTPN9kuuhFwZBoBKadt5EYBVEZoWAQFKD2YpT",
  "key40": "5r66H4Bzc9TB6uSCnKHq7yJnhWtT3kehteJhAhYJVTN8beTzkN5ypQY7ykHXJEudownn9CwZK25N2SQtbnaH5A6S",
  "key41": "5tmFqaVjF8FfaBnXPmyNJvRAzcgAqcf7NfFE527ei23MLZepPDmh37GdoaofJNLaSCfYZic7zoH6SWZ1qJwXKo6x",
  "key42": "23Gn5ozbPqhbQyhkhFFF3NRthNaFM6nR9iZaxpiE9KWPwTWneQMvc3EQa2nxq9XwWGo7FYKfMnxRf91QoaepDQUE",
  "key43": "4AXgx49hM15u6r2CLU3sS69fMiaGf5GtGkRyTM7grnKgjCVnwtvmna4QFcb1MDqGnX31nnYKxLWQXW6yrVJuLjPs"
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
