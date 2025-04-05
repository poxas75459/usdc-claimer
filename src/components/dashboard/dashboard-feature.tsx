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
    "DorfUijsfcRBgHUg3nHZLyrzinxemPVtRWtWqUKFzKA8nXs5YiP8D7XXmD8Km8uCLm8rcygoezGPrw6xR3rULnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rEbwT4LKrPmksbhhHppUMCz8riJGx8qk9LjrZEoFCfpc6Gn1Zrn3oRjCPzsURmc7E3ijrtTGrYMmRv437qCzJ3v",
  "key1": "3i9Ra3hLPdh7so5qo8tbULxnryEMdkgCoYPyTvF6dGuCk19UrobD12q48VQrN7DqgnGwLavX7Aaodcs8RMhYs3nt",
  "key2": "8ZNPP618pcziHMdFh5C6ojcBAxaCxFJD7gpkuhdKkvTmtaKx1U4iLD3WPvpbN9gd5QBBnmLVXMSy7nTUXH5znVD",
  "key3": "3rMpwgSDAJVWoiKZ7r8DH8yu3ZCUaKSZ5iv2bSfUQnfToB1QAg6MZrtHprFRkHnrUyMLMpEWjpEnjtkZMaLYeRsk",
  "key4": "1CoDun7c7tpCfX6xTKtzsFEZC4nto53dvAxZgpwSRYiv1GDatCZqeBK5YSAoAKamhvMVEvJBtzvjJNVWdk4Tanc",
  "key5": "4onHDmwUWi9ThvVtm438r97KLukvsmDE7W8yTCiym5Bd27tzySJT9nWxHYEscvhP4YaYpDReF8QwGhRPPEVSzvqs",
  "key6": "5zYAaJx7VSSFMoV7DbWrvoDYcvVEmc2HyUZwijjCPGGqY3uSRLeNJViN7ELXJ6pXMiQnh8cCfUPx1DpkneqYPgMc",
  "key7": "3EkbQ6FJRsLEafZGt4vtUxogLVfusomWowyrkkfcdGZMuHt8mF3CQquGrPdopJu8mACaW7ZQW8r6iyat8dcJmrmj",
  "key8": "2em9haRqiGCnLqohv57cpFrDRzL729puwpibPGXdYy4DkUb6b9dJ9s5nDqLkn17Zi5cKC4G8fjz4fAhYMdeiZxES",
  "key9": "3oZjAvatzJ63aeTDdjD4uEKL9nuva9KbrxEtSHkGTnvJczD7Pmv13atLW4DHXHoARcYk6yRuAYqSrsvRbEQ8gDfD",
  "key10": "29t5MNBcEC3J53EAmTgnhiPb3oUqAwQ9DgnyLbvLKJdc71j1QG4t7no1wMdc76VQydJDoL1Ww3a3grxfRtt2K6Ja",
  "key11": "4zxrSCaYeyKfiyXaxkMgWGGAQmmDbkkRjyQc1WCCTnbs7zcGiZuuUxYxJA7UvpWczw2Bfdmi5YuoFjiC3rivcZLa",
  "key12": "4t3ggt9FLDyau48AyeoJXKgrmczpyvLEpZRDATAX5R9vRPJM2PYTfEWsJSDrZHFvqMZSSKpdtxpnMidAVe1ZRzNN",
  "key13": "39kQ75DKWtszL2p8T2Lh7L3BsVAEn5Gvd8tPbHqTEaPAPv6pVpBnoRwZXue17EpVSXaSartwHgZZMePbaPtczXqk",
  "key14": "d1Kcu1btDucH24HktMtTGPmkvYagSyLEyc5AmmUd7VmVp4s5SVGb6B4xhujZCZdRYzdiU4hLCLWFmhgYtuU4Z5g",
  "key15": "3XRauazuoRYaCx9f7EyWMVqwgg4Vr7Jr8vniBmV1Cnv6EgazCbHhdVmz5e6DTzz3JSm7T4HbrUXGzx2X8bkepaeF",
  "key16": "yowDx9fw2yxtpmHMQLrkg9wuyWJ9UcKq92gWC2Y6iVYHVQWja7agcWFbjaW9ReGxPWjDcpZwhkonbdsRd2Xnnpj",
  "key17": "5b96kgYchWR84qyH5ih7axhD5sTg5qdgge6VtWMBon6JYcRKE2t1vvB9VrzdDC1C1QSLFkT3AvUmeY2YHruGwCHf",
  "key18": "31ZQEwRWrWwekdbaAzPe8G5SDLLPbVsN89ntgaSQT5wyHgzwFaVfCKhpmeJjLvjmpnn5tNXR3nknzHEoV62dPFwV",
  "key19": "akWNreBRYgT8mdGigGjtCoEs7XDCFX98k7deic1DnzmUxkaNYw4649tZg2JzKR8kZPoBjg37Eo19b1cBgcEQtj9",
  "key20": "2JNZ3tTUcKMt7wBBXw94cGHYYqUj4WJL4h571sTGGnX5ybMMhpnva7xrMjySfA3o5nFo9sXwTnGbyAniioDXfLia",
  "key21": "GqmdhUDYGKX7VRvhxSgJjitnbKsooDbqQbxjBMsqdVFcMMVMhzHKAHo7w9y4FdDKqam8JQFmprBmEKbeF93ehgF",
  "key22": "4ear8VwnAXC4fLPZbLGsSag8MZS2qwQksGMDX1d6qKzdpBD4c1zR74TB2xAdCTnS6ka2td9AdEfoa32BUGT5k91a",
  "key23": "29zUXokUKFvogoE949WUV6NcyQZQqQ9jSN91soZGXipfUuNX4QZeA1inycYsT4dfqZRgDWBRQ1B6gRWL7LYnGFFF",
  "key24": "4TNuz2QjXYMWiXvkkM2EM6qZu6xFqXVcTSd5tNn1ou2669XBH5RS6GQ57HvmiKMfUPH5VAiVzXswwQ2a4LK2Qsmo",
  "key25": "5rRk8QVjjbggQ4J93NLUtgRV7bL96m9Vhen85Tpa4ks5J8GfLyGx3UvdySP4KZWdqSmh3QRGCxKgcuPFLjtv4tLu",
  "key26": "4gtnX3A1RAXrvVRxNSyzAUyMdRCoU1KkLJk62BrpcWFcEvPqX4rJYN4eQZDcCv3Q1nEZLibMs7ptu8aadUfZb9o3",
  "key27": "4HNSL3N144YHuSxJcDMG7nQHHK292NhqZUhjm6qiUZt4SfkhAK76S1kYUfEfKpgybpbFoL6YF5dM16sxuxDNp266",
  "key28": "2mfzMWvnx2jjeEZWh9WxUk4XdqGn5YJhWk7kq47L9SYanpvHjyV9BQUp3egDSgyZhEpQCMMZ11i8UrYG2sp2U6y2",
  "key29": "1F8FcDSUNn6i1GJXMPYPcmB9aE1my8xNDm9qEjNnAQ67Js7e89XyJ8pDwvHGvmJ1m2fk4otr4JqWZtmz3hUzNwD",
  "key30": "3sjg75ghp8XqFLeGxH1M5tTFSN8Td7hGyE4NRkDZRPKT2Tb2vLSbKx654iVGV9KGUQb2dFbMaHy6gcbkFfSAoTmG",
  "key31": "29M1bGGEoFKnUaphKQoy9oZZxMaiLgjypJX6zdBQGejrDnqYgqVujyVrb5SFwgzNAyQ9rnP3aUvTRdRb4uoYXeAm",
  "key32": "Wmh6vjLjvMzSesyo1RFQcHSjfAnEqZv8Sm4Wfy93EpprvSDpkSnTgahzhqpPp6ui3feY7hgx6SXe4BJwntBm5yn",
  "key33": "5Z8p6hGNgJ3iP8cVz62HVy7hY77Q97adtJHkRSZDBbueymEu78zGKAZ7korTK2wHMHW5aa3gGcPvC2gWCCwT22nT",
  "key34": "5q24Pvy1YMyhyq8Uo6yWQgXjhZ3TVDSmEhAANbtcKf35eVaBrRoX7sFH3mz66eXh2mBVqwMCkNgvPGtENv71xwXB"
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
