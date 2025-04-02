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
    "5A7KbjHzRvhB4N2N5vGdzjVJYsGG5AvRLm9G22Hu7HJs1ppnXoQUw6zRQLLFAotgyhJn4Goy9PUPghCz5n85wu3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63tv7tLAk7kb3BgtfaXttRGXqFv2AKYDY8dujnonv1gC4v2TZjm7MAf8VATY4Ypa8PSf1tekfszn4QsMA1F53W2i",
  "key1": "3GeR3tzh8jKtdiTqTkojFfSF4dvpW4bqSWFK7BeBeFvhnEwP1ea7QNDLh2qxo61kmTEd7hA6zS7CMEwoUUFyWjjv",
  "key2": "5SzsYo8igCYUUqk43eapB6b3Tx5T2XBPWuTQqHo7UxBkwTs14V8LmgWcdmCKevCHwykBabA5DpAMCjnGKJoM8BXD",
  "key3": "sXSmaQtP3b7x25iRgWvLfSTndGfTZGrhWdazWCqUiYTKSMgdvvHcvm6aCngyhPfR5tRgnyxsJbD9pzsX9bsESov",
  "key4": "39sRKVEbPyz46so4KtPxKHAiiuSB42m2u4DspuBpNdTKTPLH2SESTCX4URL2LNt4hoiVJkc67yEY6tVYvdSJagf5",
  "key5": "42BBTUeVksBRNpHoLeuWzRuSNKP5CyuBzHA4dexrr18bXxvAXB21qjVZABqLrE6UV4s9hL2KBwJiENQmMzMMyKpX",
  "key6": "5A5vBGtmxhFuBc8hQHbBFEWh4ktAXftG3xu2jkY94X5f425WEPpQuwm3ecDfoSrD1iaQxrTWMa5umv5uuN56eNwE",
  "key7": "25xAfFmbDuu7FLkz8hPHJa6BufbfnsczpiniAH5JM7v6GKncLS2nm35rMRJ4dw9XxJryBBeL8yyYKnp4tNesEeEY",
  "key8": "VuVJvVEp1nG6y7MmTZebndJtAz4sduXdJLJNxfB1NTUKKq6pdie4kqbWR6UsK7sHTkzDmqSkvK5xAmT3zpcNzbC",
  "key9": "4eLvYigKZ6xq2GBpEqxFGQMXTJ4hc5CF1T2KigAdSM2MHma2zZwC3G8mhDoxpS7RJVVNXWQqT6nfxVP3iaHeQDRp",
  "key10": "5uVLFLftE5UqppXd1FLo9zEzpSNa3cR7kJeRwu2uCUnbaqqE33wtVxYApk2ckFau36EVEdzyBcYfVB2icpE7MFJ5",
  "key11": "3GoNuCuevs92yd11WdYwZSjkQEmpurbodVpMBtzdfyHjUZ7CNipBc5F2ytz6yXnf9TudmHEWToFXRpSYBuUiafU4",
  "key12": "tfWqiRF38AY6J18LfDBfjLKDLqQLGt8MqoBWypyD7UGTmX1Ai2bC3ihLXYW6wvBPjxTpHhLpp4SCA32VKvCdw5T",
  "key13": "28EXtszEbwRCSvunEpN2mBUmJTtxhKXZqcXYgRg28GWJ7uAxxYQcLjZuNweWc8EH9SxJYG8aqXVSrPVp6n3gKt5c",
  "key14": "5Fqi7ePomPJUrkfsWUZEAhCuGMHhqDNf9G33V2WLtdiwZ5eQA7tuhN8pwZTCAnmZSboDAsSrguKr1cg31kt1fWF7",
  "key15": "55bkxmvdRMubhVjDCq5NgCeymQjPuDFnfXvcpC7dFD2ndW7EvNp2zBqs8cfHoRUKAh9FERh7ShzoZiZ7eoyKLK9",
  "key16": "2DX9h6AeFnyUifeq1MDyTosoXs8ztDR5UTPZRsshbsLGUktHjbinLTTdu2RpZCxzEP9LPzepnFkbhYb9ANFAsvZ4",
  "key17": "2iSqxEDhBDjubajL8Yo5J5ECANFcgqYdkxZcUa7ycqx54N9nPmPmsC2dcBqNFiBTDdXYRKnvDciEhjyiGHM94HyA",
  "key18": "24azKL4uxTWdpzCUNDMA1AXDYaE6PyoVks36NixsajHdZHDeapxRMxvRHCMf5pX1qom3B5QGF5L5vMeKwGWMrhBm",
  "key19": "5pHZMm8auoWHeWHS4gQ9FCzRNCqTRyjUqqySueApR7bpyndMTDhxyDbtZvkUsrwiihBLzJjiGx1vHS7D3AA16h7E",
  "key20": "3UuS6EMdGJAZ46LwHwgUkHHG6VQcYXfBTQQC6fLGmHZttgUmL96RtJBEV5mMYtULvemmd4HczsNhQmzKizG53EC3",
  "key21": "3GZwyV2rAa65aMYuBXwRRuk8aT2CcevDpY52Mc7SXGYZ8oV5Zko8XKJuL2f3z1k8DvKosb7MZqJZFWSxVxAMVkmY",
  "key22": "4GGWni4HiA4GYSfu9SSCiNehCVAS2ts2aLsiudmNqKPCFWoRzJTGYrmakZb6mLd1izZzBfRruG3WWU6vQn6HazfE",
  "key23": "sS6WeDpgu1bAHpx1yok4fVe31mpt2xVhg1BxosjWBiU5T3D3cFfNXNKuxrYQdbUuMfgCbp2d4SvkzTU6FDMNqCy",
  "key24": "2Q52oQzYCCHXjghbp4HGweSAwisPRiDhxRGdDgcXvJfvZBo39uY8AXkVuF97RZBofYSXoniR1BTqwxoVGpLhwzkA",
  "key25": "5SLPj6EjDE7GJnoZYYG7oPsiNEwHYB5zTb6E7KS78CBwYM3eugCJuX3a8SvPM2m2bnrr6k3oyDdDb7DrF7BATkgX",
  "key26": "4agTUQ89HiEzgvSQ2PeimPrrWLSVy8jAzqCZYH62gqkd4B5AnEjHuprBU6bCic8ZiP1FUPomrg99vR3ufB9SDniD",
  "key27": "5QAJWw6vNG6R5rrcBCPywbhySH2aGwHJAMvzBzCv7o3FcKCVqgsYtLrhYRykFaJ1NV5gB9saveTfQzWNCYrgBKe9",
  "key28": "5BK8vhCD4cYq8ULLYLaoZSGvJuPvdtbxByHDcwCY1zk1RKNuYpQeG63XuTk59NqQ1r8SnKN7piDKanaQDdsUijLg",
  "key29": "3xx3xC7nYRnHGoz1c6cBpeEfXdG31EuxR8pQPyKbyY8ydngoEC42x8TMmngsjTBHxpU12Vy57vVapBk2kCN6yRaQ",
  "key30": "45hXEccynLqWNkK3gu24zBHPvwrk9i8hNkj35GSg1bNGnz3fpA2z3aJ5sGgm35Pke5M2oMfcnjHKuZHWWTESyGkq",
  "key31": "3tNmuqCFtATXjaraPJEkAsmtmuFtVRYoHRE9SRYAvfMrqf9pDgJ3nD6yzxLTLeSzz1PP9ScvemtiJqBj2eYtuRi1",
  "key32": "4fSioAPkbCY6a6i66SypVdRBuQrnwzivZE7bbP2icAj18t9xafyec1HMvrzFyZcRMzySx2DEfgmrEkxt2irq5eac",
  "key33": "3F1dpnvMgefeoLLWLuiFWBK4LurUVFvrNRCrfd9z23u6GhJTib3Zfsmjp5jxT2VVssjv5G8YWu6Q6S4mTafopmBm",
  "key34": "5VG1Sy8UcML51gyU96RVj9H3gjRCBdyBtQGBD7EPTw474mgbb9oT2Uh5Uoop3SirdUGVfHtEwQZyiATrN4k4Yb1b",
  "key35": "3tcxQNrXH4qmLTRYV2rEbLWt9VfU4kxsdgW1h8ZhnPnEct5PxnAVbVkUUxD36X9aYKRozqmqkAFzJrtnegwVpmUk",
  "key36": "22XMHdsG13Vv3apiRbiwBUFotnHcVsTtwCKxUCnEMZNyBpsRq545TGzxw1ighzZgZZiwETbaW2hGvVof96JuCryH",
  "key37": "5kgwGdr4GbmKXKv2sTqLDVdfD21LekW2mMrs4manAnKX2Kf8rQQmMQkbWeD8a6EkTyFkKrD6LGaNVHgR1hQsvmrU",
  "key38": "imd6ocqhM9jnMNHyx1CVXEnYrb87szpsvr5Xq9Us547ESUkGBKomwVdt7HaTk2YR6p6CzT33x6TyeiT5F2eSH55",
  "key39": "34s3X1TY6Mut9EKquv1a51ivdwocH9PYrmNtwg64yKAv7KwDX41rEheshiu43LZPPETJUc4NckabN4WvRatdh6uR",
  "key40": "CgUPDgdxBPaq6cH1zYRixzXXZRY6h42HuPqC8eR1ZBYBdTEK1BSed8sm7UVd78aGHQiMu96G2jcxTTh1sPq98nR",
  "key41": "5X2S1C6zKNaJQMxM7usXBzFTYwAK91n9yMTEbsPFPQ6YcSkR1HV38a9qhH85FfUFWDasGTSQFP8eyrpNgs6eZChG",
  "key42": "44sjshafjGJRUPp6xKWqydqcEnPDsW5yUPhtz97UG8RTQkdkUXFUJw34ShFNZPRgwCTQNtKqjScFD4SSBgkE7ZwX"
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
