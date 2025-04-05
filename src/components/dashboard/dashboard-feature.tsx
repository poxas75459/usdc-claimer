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
    "2aea1gWHTbzjdcXZ2Nk5SnJeCsh1sdQzvxJjh2pqtzWa3pGTYsTAovnftMLaowmwr9CA9TPfqADDu39VLQ6pXbEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q6PBxujXgENtasEtNdyMt5NBq8USikJxYcdFN4KDsiXbCLpWazGdVMkgUVrHjCebppcWwX3GDTHURuieN6Ji8PR",
  "key1": "5y992qRVch2yNDK9HZuoWtFvmnu8i8qZeALYsQTddpMSpPAN8FtjyY96bF5ZJgYcGEgdj1KHt6vM6kYtMsXMpfCP",
  "key2": "7MygirCrvwovpB5o5aD7NHHL3d3ciBC84ApowgDhfqov3eGFBvuqYgscGauiijiKD4ntcZEvy6EBtysLKBnaaoo",
  "key3": "4vyY5ii8pM2pM75pAgffQABp9tH18Lp3g1B1xMgeXkRGCP6j1o8P5pBm4AtQv8REqpdNSGkWaTS62iipE4psraU1",
  "key4": "5y1TJ6WxkT9AxyxubhmhPyuPMkLPwbRvavEoRFaky3HNonHVQR1AFxqU2KNeUxmtx1hQbwtPPxm8A9sSeYQdHhD3",
  "key5": "jTMaXcqEUmHspooZqzgAyK7wuzAkB1Gm2psMRN4XdtdpxPazDrg7xhztYBvTTHQai9Xera7Af9x2HmgjiByybZf",
  "key6": "3kPyvT9r7zws2EecngyVv5fsfTnzM4TUjR1AZozDHcsBtKEJeToYv5V6rHLvdYfMGy5qCQQ4CC4iu9ysvtPFpAYg",
  "key7": "4tB89rhqrS8CbtaELTCfwyoE3Pt4hNLPLvM5h3SPDk5geXGDnuzxEWpJSFwXbZqBsN4ek7WvtMp1efmtSGyiFQhg",
  "key8": "3WcWAUL1UUprMNmsy116jJbAhG3S5aEadpE2AMPUaqbQ6rk8wfXAWV2Wky2QXb7zCy9WDddJs4xGQpkdw12ySeej",
  "key9": "4mGV9xVWrHCknMGtqbLSCAYJHUhn5XSu38ib1de6RqDGkL5x5cADAzhAPDYUEEnq8GxrVRDiQgQy8neRfQE8DKuB",
  "key10": "3PHf9u4eajNVQzbJgEnTE8563uzeDjPY3iTZRnzyDSj8YFZEvMTf3qP38jMDVNTx43zNxy6bN1VHQtaqkV8bfgx6",
  "key11": "3eGz4QzjMB8Dedcn1Y5nFUxYVvSmcYS9FaV8gMy6j3tQEBMz2GZsPcd56F24MKjmDqFP3PUM83UoxKy7gZc3uVmz",
  "key12": "8NMLXrLgTkKX7mdoxT13hb55db4PdnxRLXjuPNLifvVmBb4NBu1WveroWVm23v7QrGgXTgzqySvhep1eidojxz1",
  "key13": "4DLk5BsLbEWcqr1GX7HwxsAUtZkmAbc9f8iUVqoi6eRUKaZ6M58L1q8Dy72yLR1Vq4emwLtrNtGf2yXkp38QC9rD",
  "key14": "4SVts8bNXkrZ688XhHH5Ds5zvaKqrcaGL7VgQGJ5XUGVTE8NfYC2xiqQbcBpH3W6cydre8K82cyZUXkhL3MCe5of",
  "key15": "2phgnvtTL7iQ7hYHYZEPQv6xuQTZpqxn3B4eSfHJBQdpXGn7DDMvrvgRS95CzMYAFJrNuajFm6De5KQVRnpa6t4Z",
  "key16": "6SZUaWRvWa27CwSY59VjwS5RGpZZXwfYTdELpexJrLUQCwnGBCtK1P7qDGeGw6jJ847BvpPgRFa7Yb9eLzvWEDs",
  "key17": "5HF5S3n9eXVGmWahJPc2vnptVy5Lxqqf4r5VcxrP12KarzTD74h9kTefbRpudsywb1hKixMAncWxGvD6gSzY6AKT",
  "key18": "5oURjyEhN4LNccoBBBAg1YcZqbavKekq2cq6Nn3JshK9yx2Kg63cAaYMRhoAQZPzBqxTVkvPRpq61jk76CZU4iJ2",
  "key19": "4cvGvtCmMYs4GniXwdPuosfxqnXrq5U1FXkTBR2U1gfEDcVQkimkLTkv8XWUXPk5eAHUpmKeG4xGZwmhMxficHhe",
  "key20": "2t8Kb4abQTgmXNErPkL6T23UETAhMciP6cWBFK8UNn2tBfujFptoS6t9NiRSknNJV36UZpYUR6Lj9kS2nQVEdVvH",
  "key21": "4BcE16uw2coxq2D5grCprETA81ZfLNKWLzPQDP4ZiajV87UHLYrkAD7aiWW3hibrePpVAfqHjtozL3k87roW9JZi",
  "key22": "Vjw8aPYojjpG4ChbjNYGXTPhgcYGrdLfVyhDHisy4ZEzePXHYQYWuNMXVVoB8xEkvAqgxvWydXDgPVvJVLcmfJ2",
  "key23": "ABNmvrfgwJRmgTFYKJS4gz2rrC67ri4eSZpseYNr94ukXzwCggoECRqEuo3B9rJb5EWBsbZ53pygdH55Dt1APzN",
  "key24": "3AppdTHxZKiY36XRibFLSJ2hJu97Ah8J9rY8XJz6GtUrv87yNzmW7QDFeGfbLQj6u6hghBNNQ2AYG6GxaYZMjGUq",
  "key25": "4bd9obto1ia2nubcLx2k7H4DtJMatG15rknD3JaEGdTrr9ZtjemRdwVDASQhEhMd1KGfAHxyC6XDj7wnLsRYSwSB",
  "key26": "2yjW7aM9DdN4rzncKfpfsME2GwnAwKYmbxYQ6Z1XQzmd8K1a6ZSnCyTu2GiARaLLVxVVCCnX9VpJWFd69MAkG5dE",
  "key27": "5KjdwDJf24WAnpcKHq1LPwQE59684MgcW6uVZxoyiEg4vqCLTZaByoXJ1uQsm2MK8BgaoZoXnSuEzDA6K8qDyCjt",
  "key28": "4HEMHpDWthjyjM83QqWSGGfz1YbKVzWQmaqmUSS8kEZE7huAnH4CQeQw6Yq72wCXTXtAXBXQiw21d7aeNpEQNchm",
  "key29": "3cfAjvZZw9xAjRvUcFeQKUQ2XmR1Vi8DYBtVnGjZtL2GXGT4iJ4tbBL7S5s1dA5tnaR1nr41hePKbBcymzh2iGse",
  "key30": "2BCMheY4M2SawGNcTgZ5TUqeXugPZAxrxA81nh83jEm2KK8yTw6PTH38craQEVy3Z7VUzz3EAanrmkLUuLzjy5bg",
  "key31": "3C5YuXzcrV8Ji17CHkgZpNpwUwbFuZmBGnC1iCwknTRk4w3XnkVeZ75s9G6uWVMSg9a8ycPeTyV45Jf4UgESb3FH",
  "key32": "66We9j8syywYhzsto5mamrnWNgiMe4uj7kyymhoprJM7fZ2Z1uH2R8huSc9ZQ7Sk5SMCTcz9WKHD2ayqZDq6SHcW",
  "key33": "5PKVs3vXYX6a4dKtv5YeENSDybwYEFePUPwHNpNwrBUpkzwXkFaj81Wx6rvEWpbZMVvmg8j4WX6o7rNwhrHptQ4M",
  "key34": "5wEHdcuBpeMfcxqtW3RUEHf3xm4gcyuT7mX2qtE1VfZCYZRAZas2qE4S2FyEkUKagrC38XdUJmmBXG7VWDM9qRFm",
  "key35": "2uYGvNaFeHz2BVuEDt8Pb3kRR5Z1hHi8KKL8CAsxfADSNz3mvZPv5DzLWxJXtdZwFk7B7pZdoE4VSEDfYiUxNWsz",
  "key36": "3zVp5m5guujCwMmTT1KpKyUaoZ7goF7RVXmafLNJoULHk7qw8e9R6qVSa1c5V1SHmu2WDquW9keHAQJUrZ2e9cLX",
  "key37": "3qghUA9kopJUBrXFGGMNNMXW1A1j95vR95H986JsmyM6fzDWzQCZd7uzpUnW5iJoUeTPe7aEZhuqxgcpL4UF9E4h",
  "key38": "2BRG5upfNfig8uN6S4e6YSr3pgxT1xPvCANKTWcdJ8hdF3J6xfYZFVdNXieMDp4pSG1FPXKC2NH3AguMvtoG817y",
  "key39": "4CBRUahwbPAdncJMftZihDtKqL7wvYpPZSJqBZehwGnzziDa3qDKfqnh17uZ7U55BzDgXDTqfK1gHGuo4VbTD19q",
  "key40": "5gQvNJSj3fCcqqeRMjpbjMXHoSTcczDA65QMn4qdKjTtHp67XWxGAoQPdXvS7RQA6h2TViENs7XR8ynzfMT6WB7q",
  "key41": "auntWKqMAt4n5js5YsXLzhMgGuvabLdGSwzyTrHZvAzUwq3Spr9N9jgGT3saDqGdiBa47dGzQK7YZ6f9jNNEwyf",
  "key42": "t8x6ddrZkcJoriDgzQnqrxZLLnExxt2NZdutK1efmYqqhzADjzdBBPhNAMLhMQtHBx2nEWMnR4LA2aFnKjEwCm9",
  "key43": "2EofCVYEgu7FHR5AJAeiyabdrWM1FR597EqaVgRAVCze7rBwXs1pF2jn9chjBu4RiTDiLrdNatGZMoCivKXpoQ8A",
  "key44": "rmw7kyYEzuinkmSWqsWdccjAwr9xwYpmGiFeNYUa4GCZnzp3jgNGgXMo95Gj1JpoV9MPZzhgMUDoXpTC51LCSzK",
  "key45": "3PRtbSE2hcaYuTkF5hJVCven99hy8QZ6RJLyUP2gbc29hmGSQiFKUYsGEwxd1DUGrvxofc1DAHmbY4gekXUmteQP",
  "key46": "1N9MvgD7Kgz4PYPYpjtzzhGWv8Upv2bxxDww1LfTh3rM42HKg4p7pUdVpdCbPgHB47yVQLYuPNX5AABhD4hWsjg"
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
