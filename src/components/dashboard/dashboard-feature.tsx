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
    "5dvqRT4wNMbpdbRqniEKm2r3xGsbh5agkoUZc7jxd7QJzvn1MbBXznNvhpJvUvcM1eMe4hrNqPW5FMA6oRbaABwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bKcvj4QSNa8NCXWzF7AihueNKu5412d1q76TMCUqqnPLPrUYJofbMh1FeXc43s7mFtSXkJ7GzE9YxWYwu6nE8c4",
  "key1": "5waMrDFPuhyw9fzJkBXyP7wDGksrKXNr4ZTsLdckRosrXmmsQWv625UsDrWMEG4cWjK5tRXgDQv8Z6KqdowcrsNt",
  "key2": "5r4SL69kdvndvDp6MqY4JyPSmHCzEBpka1xFgm67Qm3euEPa22bVB7xvPYpjdmAzhyAAc9mfeCwRHn8gP5uzpaxb",
  "key3": "2Y9xTt1soAbXs1t52pK4FxxG4sZL24xziXd5uepxy8NNk2Ux9Ue52uSXAhAwigRDK8Hb31mnKmDjboz1G1TVRRnn",
  "key4": "2Afvysr6APxX8hqZM5baXd3gDJ3iqWU8rpHetJwqQ23CzFeeybJJhhDuJNVHngELCNhBUq1pSbBFSmLwGjNcqQLt",
  "key5": "2WsPwSNNbgvXDjM6jGA5Boi6MT2QoUWYjUVW2iDfi2vSYStNq9PwCNBnfcB6ReH1Koen2haEmjifLwA9hxjJRFT5",
  "key6": "4ypwAiuZY4m12SUVgBwwGti6abxVJMX9bXvJ7ZLaixrjhvU3o6W6F12eKULKuknJbM6JhcaRUgrZ5ekW6xiXMzAG",
  "key7": "4vndBFR4wtzDn9EiWCncuP2jRixGHCvCf5CBBakVuckdN9S2sahjEesVJjzJGcxDtgYnD7Ugn6hSqSwkJGi4ZBiW",
  "key8": "2XhWWkrc5my29i3Ldkh2dMbTegKwKgi5r9YWahXKfGGk86RdUcuxUZajtYi8nYADSwXiQVfXx3omivGcm2dfvVVZ",
  "key9": "4LK5pHizvHRGCLUt2T6x77SuCz6ErG6b7JD7qPjCPHhTidHe2bHmMme55vyjpHiBopkwhbrpeyWtJanKAS9wAqYQ",
  "key10": "2wT7YuFCbdot1m3aSyEHhvgLoZNNRvcYppshKYm5FvsssW6E1LcU61zvNCWunfVPbRH1Evor5VxjcksWkbBTsUdF",
  "key11": "5frtSghkSAEymL7hJ6TD2hLn5TcTAkd7zy5GDzYeo3UGgB3Qnv3xgVNjxLKAD5So7hXFLVmzEEpwgtU53VXnCcoh",
  "key12": "5Hn433MkH1dgE9C8tizEkvWNvbRapTo7L9XZAdS31zeZ9MQEUjDnkfEH28D5oZE2svz7H9CymaU5ekViCweTp55D",
  "key13": "jvo7efXvmediZTB1pGpMMSZD8bfQkSJTGGRR2QjLQj2ruUMqJYSuffeRRE3ABQwFA3R1xAje3LLwSAMasQwjKSY",
  "key14": "48CQQtHB3ytLofVXmVaxPiLBWepXcPMLH51zLhiDzkugEmC7V1kY3qAvbYqKULQoDkBegNdJYnBZgYdxzhNhyAdP",
  "key15": "x1STEBFSyNJSwbRg8PRgmGLRTnvBZPn8oYKPEYoZiwz9UpGZEUer2dMTEEsbY1YWfpJHpvkNXax9LAGZ8y4N6ui",
  "key16": "3KwPQrkRDrufy2qAc7iCN1JZrtFaWcMsV8RDEobQt1FXMZSWz9hmeJoL52RXA5U1LVmWou4wpo5e2d9dLzvbuFsh",
  "key17": "2oUmfGDXAiC3mPWimhBzuBwbgMofeUqD5rqcHewoPiPrhkzwDsumUCabpua45qhio2iyLDcNgLfB1b9DosDKXRgH",
  "key18": "2NFxAPfKezwHvgj7u3n95UiVXp3VCrDg7JnBw4C4akVNDmKhFTBNL3bvTQMWTLZ4YTk7J4SBRw7PQVHEMj2AebP9",
  "key19": "3AvzCfagvZkNkxmXkCdDzkQExHQrbU94vwMsuGnVJGavHuyqHxrrfLp6NmN6hADqhHa5afaTfWZfxkKCJCLoUQDT",
  "key20": "5UAeg5svokzwaS98zC4TMKvKbw7CafK5CzVaRWnishWM8us3uMm71v9P1FNVmK2SdKzTMYSCCf9UGQzBSAYWQnUJ",
  "key21": "4gAkrEKk8xAnPbX2JSBFBnNWjV42QAmMtZUs4AxfY8G6iYBGLrdNnA8eFFLaoknCdAcWVAFMEU8Yn4TxkBNWdKdf",
  "key22": "3hXNnMvBvsvcor3bRzaq2gMe563buEkNR94gcoVcfN4Y9Wb7AobUW2ZswoG34h51Enf9W2JTx7xPXimZB1S7rCXV",
  "key23": "5g9CkrCBSyoXqqRydPuyLGPkxsJQNy8g6Ag4xRDVW5X71fWQiCbLLME6P67gV2ZgxgfXfWZjTTv7qNHH5iM7DoL8",
  "key24": "2uzkg8JoAVifeuk2Q6iyjcdK4jWA9V7Seku1tXtR71xomTWTkhP5hBv7eTryCefHtFwfwnrTQyToKZvsWYmyoLe8",
  "key25": "59JgfDnms7UEiFZXA49B9BxVR1vUy3X8AU1UFZN1hBjApZkh2zRAf392wTSXp6WEtfyHy52oFGsRgb9t7zZQvJqY",
  "key26": "3r1jTiT1XNbjjhVMJM2ht7chRkQeSPjJJhCivgVnqMXsU5umfXDD6N9ZtteLfj5V7rJ8gLcMyWpV7kFvyqahZchh",
  "key27": "Hj9zb2YxpujhBsML4tp1ptcZAoE2Jdag3z4mF9zRC3xuc1a39xwdM8shBbEUwANAeqdeur9rVnZ6HW7gh5enZuS",
  "key28": "4ykuSzDkaQsjvFxk43BBhCC8aZ79p5tPDve8VkBqR9AUrux6CtJEPHC5zVWnVymT4PWQQMCBvAPmKf3DVsrHHXqe",
  "key29": "XWvKtbBfkNFu98Hmnm8wd7FY1eiNURzewVuxNa8Z6uehb7VFv6Ff3FFghjS9p4rCzurMSpc2fFpEnrvLCWw2jnm",
  "key30": "4eQBB9nYJocvTfvVG3SMaK3iE2xVYQqm2MC1cY4YUdxWGQg18c1qCoChhDMX7yqC7uu3PSj39UHQys4WVg9pE75d",
  "key31": "47WgRvvVJfZTuoxqDnVBM1LfmmtM35TLapYkXmZtGxz6PiGojKgCEek9PvuLY1m2hvPLRkTBN1hQtvXbdkMH1kVD",
  "key32": "3BbRc4EXXdFmyXLZM2NWq7TVTkm4h4hvrqoU98BRErR4Qgy2q544DCKWgJEzXZZ5d6mAJ4r6RG7TRSo5f8j9Ynx7",
  "key33": "26YjfPyqwxmm6C8o3BLvu8iScnWJEPjnZdWTjbWvHhGjuE9bK42xntybHQw2rSwKzJDfEicNJKeC8E1eQe659a7D",
  "key34": "5fDjnya2QvM4nmMUd53JAfxoiDkqWuDojqvuRTuVdPf1QL5qa6jaGyi5uBJQwG3MfhdhpS7unUSUAB1iUqBtjMx8",
  "key35": "5bnTiEEL8p5rx1dr57wJ2L9owcP1akrfMwC37Dv2aTcsYfdE7XAFiJJBVuvKDaVztzkG8bXUiQbDipLCgm5Y81bN",
  "key36": "oXZDBkFxTY5BoqyVCrxR6KvYf5C9j8meypAvDZSJYmjBXY2uopkXUzwQGALL5ZEBafa1NQLWX9Sh1sGfSYrL8VJ",
  "key37": "9uHGR4ChTyeXnZwi8t1NhfCaSdsS1avLFANesg1CVD6qwCYb6rAwSdjEwdSgQiPsJUxV7gPkfFXq9bk4y63NqoJ",
  "key38": "3ja7ZWGTYVzBoZ11qrTUVdM3Gf9DM2Jbx6Q1GMqm1rb9CtttiDFmh2qWcTBsyWdGZn75yrc85AUuLDznA9BA4MDL",
  "key39": "4b2eN5WVzT3zb2xYN3p8F3vzssEU4dzHaZdPFrrZkiuMBCUyMcMUzysWzdu8pCXL5zyHjunQ1rVmsHKpTWS42xts",
  "key40": "21cyT9FTZxxxbu1XdfNnwBwiM24YfAfmCkKxzfTiWgPeUeEEPSQbtVab5TYUiPfywqbrRU27pPywB6ok4LZxM3HT",
  "key41": "3KZ3YkPvDKZSAbbA5rBvJnCDW73yfoyBcp1xN3swg4Ybd2qASTnAdTLSdEajEwqswebkgtwF7w2AD97BQPXDnCct",
  "key42": "2MnXyY8b7PkhiQNQ7cFLU9MsuWEQaQKWm8rN9F3CdEB29XNH5kzZGHwJdJuQiveBG3oEP1FcJhrxoicswow5p7zz",
  "key43": "5wzoNKrEuqvHcYC3chtjkLDPDiqdbw3TEsPvWdP7j9JuxJ8e3oNHj8wJUZZcpcDnqrzYSmZWEmuET6L3bgjPFFYZ",
  "key44": "4vKzdC9rtcJZHdhgVdc7HdHSKxPb7o25Md1bgMtKWPCV8uyymaU71dhKfmizYk2mb5rZLD7beWxKGwD4ify4UyKE",
  "key45": "4tvDBosyyXvKsHDJSLtN9LitCB5bcru8evx2DwbEihtjuG8vBL8hrnb6xi3ayguRZrMKa3Zc6p4FZT7zgJ7p9wzv",
  "key46": "2nuwjdWRrV6tikxG6Md2J4foRgVKpRcnS1ps9mZiZXoNDZM1zM9wYj67XR6GF5sxu9v9n4S6Znwv8SJMgbvo9rAB",
  "key47": "62N2hsdBxYrq1LWv3EgYBWgvzQcbrk87u6gZPtNLFVJmGzBDJLMMitdEjgfqCNjWAdgCKBcBQ33yKShaWLEkyvC2"
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
