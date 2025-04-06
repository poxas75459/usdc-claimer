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
    "21qrj6bMrLXGWAb4N2mNPzzvT9cq3RoAyyRLoJa1Xmsq4cEk5XeRVhzKNbbeETBp8f2jG6nUbKci8waa2ky16Voz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vnuv9L7DsBfzE7kXU1QBZNvUGsWFv8BZMg7QhCy8AdsyA51HVjnVQYhy9WqJM2mD5fR22BKtyTGtGz91T8nghPg",
  "key1": "oK3TJtXGHv7DpZ77uHuNitP1V36rar3Fz3hAFJZ1YagtSytsj3vWBzUTfxt1KZpwYhACZwU6QPB9jzfdgHTjyUa",
  "key2": "2dk1usNpYuu2kU2xCJxcb2uVMDdsSJnnaEBoZNk88UHQmozSgNVWWsL7JJ9rcE9X8v4EfBTS1LJoeUpeJtQKu1Lf",
  "key3": "B7YF262KF8dCfjuPbV5CCYCjV8DowUeNgTWNSYVXUmpZnMww8BU5nsywF92f7aWUReJEkXSNARxQymUzKrMWhrj",
  "key4": "25RYV1ngHY6BKby4UwNhD1NobZZvaNhbJNm4rGZZyynwAajtn7nQx3twNFRHojWf9q1g7oSHkqJqwcRdGzzjHxtr",
  "key5": "3Ajn4FkYgo33SNE3W5NQYnoU3ackAvQpZbziY3J3WZ3QUV7JNgZmkBjkFfxBBYCyARbsMFvFnpPsvsqxyQFobC5C",
  "key6": "4hwU3DE9dTB9Nhg684ukifReDXHp4ub7LbSv2v6qsjrUwoy5cFcu43Zkxn6mkDzd4DseCnahLf6HWsZFasE4t86L",
  "key7": "3fyXManE5rNNPyoUCbJ6Uz3ejCsNEe38CMibUhpXdzze6Fs4eH6b6NoMLSDTj37whEK2Mm7mJ3WWWdnwyzvu8Frb",
  "key8": "4ooMNni3NVZDrWSgPXg5fy1XSDwjg6Bw8An77oNYVMAGpG5wMELeEkdPosfpy9aprXSM5Mc9ftWKXY36CaechkZT",
  "key9": "3SH5TrvYjSA726VEBAZyMKuGN85DZTg8daWxjL7mRdJZ2fmichRFhXYYGmXnj6omWWhGch7H5oQgmdSTtyaE9CHv",
  "key10": "5epeJ8XtXqr27EMwSFpu6ZGhAXubhmfRA7i4GE8ErPFmXaaoWkQHjc29pxDsRDAJwxAwzY3mz7RvV61LaxeYxtx4",
  "key11": "3DAevVfHGya5V17r1p3ob1T2c8k375gT2ytkS6jtY7QC69VB4NnBVK4uLLcNpivfEDjXmdSUarvbDkJV2qG734Ka",
  "key12": "3nBeGVxN2Sk73rnykNFhV86EsoervQu8N8pF5dqCPWfFrzp4g8xgoS9UhaQfNA3KifErc8XqvEhoK9wjGzZ6my8N",
  "key13": "5xUWWaF3Y5qMq6pWgzNo3eRGawpZu2jAn17zMiiCXxfV1Fjf5ttw9esKHFApp6Am3k9ey16TmF7yvvrLHwTNBioa",
  "key14": "3GsgynMVCraMvzb6Dc4R7i32UNzftfj5hivmbgWkxSGkhUgEYSSzrj2W6NU8Qn3U2pzdX1dzq52JhNWZcosA5CNY",
  "key15": "48nUacerQ1CFb5akwEtZaxDfj1TjjTAVoDdBv1BsSnyJxmgqPAax9xEZ7d6CzHkJjej4cRRdurGEYXbMLHy7rRkZ",
  "key16": "RNRjQYdWaN6i7PJtDxq2WAtmPdgGdPaBa7CnFC5icHM1q156Q36TEYoBXxfhekDysRWuVfQaTsyCzLXr4g1h3eC",
  "key17": "5s5w5DfraLCdJs3nngJ7R5kXCXy61v8y2ct2HpupYKPkEaYCSpU2T6f4qDK518KtJceF2zdm3b3MVsng3R4kDF37",
  "key18": "sPoeLZY5X6GD6jnmAmnXA3Kyy4TTvpukt81KN7GkUJHxS4daPyd26YjxfQ8dWhcopHLHSMYjRhsxAMmxnmY9rk5",
  "key19": "57xNbz2Z88eijj8mcn6eN6WuYwhfDNxt9VdV5SNgmFrgwuiMxANrEC2K2zzT5AsVrFZCLdX8cyLe1RUQ7wDxYe4B",
  "key20": "32T7BeCPLvD4zfDuexkdgNKySwBPozHdoDBpMgaLgaXWVQBRrdLTCjpx473cADvKwehvaTJPMVq9UwfVFYVQzPMF",
  "key21": "5VvCqoJUCL1nFpSbVJnYpioKw1fRoMVDWvASosjzuiKj6x3yfdtPFnFNpRcgrvVTxo3mm9ZQoF2eHMbXoQFkPtPS",
  "key22": "5s3UsqkpmyyDC6hCL7DAWbn22nMGvkAGYgW5C39eqTE9aHgJy55skh9xekCLowNfmbsRnsUn95GbtfScxVZJsQJ7",
  "key23": "36K9FjQ6R5vDUPyUKSz7sxAAgTtyhMiwCzseMfYiKoS3pKbpvY1yqoAsXrohTzt3WgAQSGXhTzn73M7uX4CTcTaR",
  "key24": "4iYdFPgLUWG71FvnuWKDqFvmpwnhpmz26qWzkXaMrS3RM4UBmHmm1o9B123shYvVeNnycHH3yjsEcVqkQ16WJpUP",
  "key25": "tLoLPuthSumyk7ZGcACJkQBoKrTGvu5UPFq7apxEEeN4KJestmBm9h2XZhr6WDUMjoaPX1HM2V3AZekRyqq4MJa",
  "key26": "3QSC9pPpLkASNE6FhibnQBjamGE2Xt2Lfg93MZTMYib1EUs2PHzjR6pFWcZDMJBBF5Q28Qfzrvi8SmeuG46Z2vgJ",
  "key27": "2kJrpeFsZTahMjkDYT85weaiwWSj3dtTgVSWeqcCx57yeLcZgfWEaknVfm857CySdVCm76doW5ZBBgc9Y4WUH8Lj",
  "key28": "HBheWdzDASEb7RnA96xWpRuazgREqFrf5LWXqTmKvnBqM9qDQNqUDj1pAJuRthLccioH7nKY87cop62Dj94qA4g",
  "key29": "5THQpmwaks5QxQYzgpLht73iv68ZF7qBW9XBtVuttzeb3jgYv6cED43kNFGzfmqDqa2umbsya26iRqjsoQDFLwJQ",
  "key30": "2jyqccp6kKMbY2WArg8TxptcCZUGee3H3jzVZRvdZXgxZSwdK6unfDwfkpgEmeFFCHnTPF6664Aszn5282mLDypk",
  "key31": "1t2UdSED5egrqeoCge7csDjRk547DpXYwo8KHwcPf1VhNT67HVe1feffiJQ2cYXdPQZjb1S6i9gg5zZ7BkUeMZv",
  "key32": "uav5r6moNptV65vamDxw3JW9DXbmckyVkm2Dkg9K5YsSHi6o7Gv8g2cWivjoNwHXPUQVbfwTNcc2iiDybzRWhpg",
  "key33": "5m5W9SbptoUKpqCjG53y21ZpvicEP5wjVq5oWqpdtSoE1tuQPF7d79B62CCbpHaPyrwzUASCabpqvLyKo1dKw6LK",
  "key34": "4tr9HEGJa8xFQUwe5hEjwg281pAxC2vP3U52PdQjksYsRQhKSRC3D276XQR8WaXEcboKVz92VZne2suL5jRLrpX2",
  "key35": "3jctypzZ2JxqQMNbpL2gzYjBGjQr2y5HZrwyLhL5E72eNBjCqPWfERYYhzJ6grXZujvp12rEMy4YCDDe5iNK2Y1E",
  "key36": "3U6TzoVbf6g8LD25zBNe3zRbhyQs2JYZxpJjUcr7aDFavJMTEprC3dVRfRNJCdLutoJDKL7CaCKCtwVc1HgC4kdr",
  "key37": "kJc7mrp9pQs5vkNm43B3tF6YNWPc8toGCzWaJBBKn81TZVVoW71Cc9Wn6xmjnwwi6u8igSB1RCoqMe3uxB3jbpz",
  "key38": "2VkykaEMiRbi5uzYQTB9WR87GjukahtYSH8vqayyhph7HbozeubB9LJoFYRBkZwdZybNnoGkHzB3qo5DW9ZvKubE",
  "key39": "4mu2QJqk3ZTWooh7pBqZ1AgSR5sDDJs2htaAXu2H8jEHqcdboYruYGxdQTc83MQCnQmJHyK2p6uuU94mtmECH4tE",
  "key40": "4W3T5MHYPcAAnnx6aCtkVsgiZw3MVYD9U4TP5LCBMd2zTz1muxAmenhLhnZVeaPmrmkypuEnCDNrXq5mN3rVRno",
  "key41": "56y6GSFq6aZ8hzs3FSnc9sMM3i9SdWE6b2d4cdrVWLaERRNverLGj9TjqkjdyWHnfnrrsSvnYpaoLHkY3U3SJiQH",
  "key42": "jkANCTFwxRU2XdHCBhV5NNS7JSaiikiFutzfQNgdWPEJqTMmFX4XqyQQNj7ema8DvdMAwRrB3aupLfjsUBqwvGL",
  "key43": "8fEauD83oXaJPPMxQiJhXwxmsDBmUevyXRui9c9NEwXboj75d1vTtQ1t1E7F8ip13tmGwx76dZQYTSZs1uNuoWM",
  "key44": "2fseitErewtjxcgiEM6YXVXxo8pDHddZZmw6JVfBzrrMgUPJptUpRUixhATz3fgKsdTBrVogexUipwtpaQq1fQZ",
  "key45": "5cm1jYzHjcG2d51ZVd6hc3kKHgPNTjq4P4DrkH1co2F3XihzahbMjA7GDSQXyfCeC8kbVLeGMugqKWT5ZJ1nntmw",
  "key46": "5yzw4HiHaEYiCL55JTZyHG3MTYYN1FM7tmwckDoFCE6N9adAtBicf2w95WrzdRYepm3wiSPACKjFwSpFCmNdkEZp",
  "key47": "4iRe4PTosXVDc5XmgjQBhW38XBFPSkmMjVj5wnpg3w5rHdZZQFHCtc1cMbkHeFmVKwwLD1eLTXVskWTDp6pDUBU8"
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
