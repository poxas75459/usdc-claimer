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
    "4ZSS2L3L31pEy1g3VJbM5W63mLuX9RHtqxDM7GRCD9Ztu9g52PiGYvZKaZGWXPfenTbUc8G23mPVqqxLLp3crv1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K82MBFxnyyj8JbtZnFzGDR4iz3EbBhnHhBqFYywz5vtvAtgwxDbsuEFaoNFWUYPXJezpxNUAvHoMEzsQFbjWzp",
  "key1": "TnJmiHarnRcnkSNLZKNe1TL7HBBYjb3yMwwAMfVSLh3vnqxsJJnAaXhiQ21JhRmH6cB5pD4KWW3WsxTzjyFjSoT",
  "key2": "2ymDi8bLMit8kXHem2ohahmWjLxJVZaafTP7oKxsypn2ufggQoQjHombVd7amDNz2CQ3ccfK2ecpWZeiXTNEbm3U",
  "key3": "DXb8tM5Musv3aVzHcVnQN3iG7bZ9v9Bmy9kCwHAmSrw4vudLTetgEQtFNV4yLWuhWHSpUBm6NQkCAXvLMPR31Vq",
  "key4": "4YxeNK27TBCg4PMMJKBSpEgp62E6KPgEzer3rU9ETNJfcbyuWDDTKLfcn89uwWUU8s2ZAeSdABCWbkFWqz76QHiw",
  "key5": "4DLaZByaKXnStSC5ATYtMqM14kdqBAJUbAX4kTbCgq6RsifVoSqAZNTXpuTTterXBSuo1bv7s8uYxEwajED7tzo",
  "key6": "4y19AZCg6rmrSc14t86mXTBLLmzxWCFd6okeD3mHFQzR3tkUvZMkssrFRSz8e71R2GxAiR1uiqJvv4Ehy8S7AckZ",
  "key7": "3w5mujSU1hJmpX1ShKZgEgc5QPQbiiqP5ewsvJGULyRvxxw3Y3h3A7dTfmq7EAgeBb1wvdRMmsuheJEtsiHWWh6u",
  "key8": "3t7ntfGu1b7ZzYNs1MbRULBAU79Qy8GQtq59JskqCvvN3YVpbX1GKg2q1uuQi4HYoVB5KzGvG8B4Muw7hXwzUGiZ",
  "key9": "4DTTdqLr8Vfv1iiBzbWwaQ6UiBdUUodMweLHcwJ8NYxeqdDb2QgFwePK3rtYSWUo7VUYthut3mJVoTLaAC1SkPCw",
  "key10": "4ftENM6YTvzSvPEXXBLAxsu32BsbNLfdbFyidMc6uxhSh3TuwFRdqExG9gJKWj6fJpyjQRvs1jVeiT2UQAJVoMoc",
  "key11": "35bBXsDp3DVafsRZTaKvZfAyy3dJQ3PWuKLHuMVrdP7e7GGkvwbTVXtzjPGSNX3VHHrGgbVRdPXSJHQAbPAFvizT",
  "key12": "5N1P6G1AYeZDsu1VkDe5su7oHfx7Wtp7pnPzkeSxKnaPbNNC6nep2nsuzMXG8mcALQYWXjsTt3FCDomGmy8f99nZ",
  "key13": "2frJEbrcwitTG3kysEM1TEjW9eQscdGEn1XdLvfySyNJGcYHrdHA1zfR6BrbrCcCE3jFsLk4PpaG9g74mejeZPm2",
  "key14": "4TWRpq2dxmDgnTjc1G7Zdocz4c6FrcMeVKpajQaEbmeiAVzodn5sF54WDa4YFLxkh7YZVCqPyHhFuAFv8wxCbtcc",
  "key15": "5Xj8ArGDSd1cs7vHFodL4xLfgv1Xr7yCJwtUHjmQcsXSHXAYySzMnoVdT9rPZc19WikVLPT96ga8LhvUsEWBnmpk",
  "key16": "5SBY2bqFDKnTpCKaA6nU6DCYcuFWJc3HS9mEmr2gARMBDwN7ek4hWzsLPjGeyWYWvNQGPdZzsPAa6t7FomViW4Mt",
  "key17": "4pMcPRwUZV3cqiHG7XspsDAfh3qo8ZtY5fHuatzLhHHipvYEzEAv5c91Tf7SS8cXGUEk8GEkYnAkEb3JxNUA2AGi",
  "key18": "3u5keHSu4XGQVmUUZZ5JJA5ykkzivTxMUFSwgEJcWGCVEQHRqbcCtARi6c3Ye7CXuZSVmrpcfKDnrotzFpEWv5M6",
  "key19": "5ez3bynfaTZBxTLvatWrrsh9VyM1Vd5qKeGdphjunS2w5hoJt3y91K7HL4AS3zSMEPQV1bvZMfcHFF5MRPCE8de8",
  "key20": "3XgJPvcNeuRrFYdfnTiHKvrZxsJvDnCz9aSf83DwkM8SrM4cHAcnxdLHTYQVWR6DxUCwuXszc2aaEHfRb4eiH1gJ",
  "key21": "3Y7FKHfDg2NaBtz5JRtho5KkGTvT9sYNVEswtoFBzF8TTnQid4BUVrRatgNyy28EeyZ9YYRvT8T9o2dnaKALuuon",
  "key22": "3FTd9Ex5Yctyhgdgg5eqyESosToXdWmsDdP84JRv29tZymn3H1nVvM4ReTjMPbscACM9vBtM9fsYWnRQk5j3xGSz",
  "key23": "2DmYjJY1vPxbkWRXCRSSi8T4z61DjtmtsAM5ybjAZscFb78JKSiwPodn6sPqmmjFFA91FDEY8FCtf3AMrzeb4mEP",
  "key24": "2xNpuFMXPFZGFvHtV9F9zUDquSJosix3kjAXhNjnznoKGzHkpyuaZY3DTD4u2kExf2S2bm6afpYF1qfPxa6wzhfo",
  "key25": "7BGzdsixyH93Yohe2SknZ1CJXw2DLsMZ4DzL4CZChKPVkWRpy4Gfjw1fGjeFNEzgLXpJcUPdhWnkkgRVv9KSBz1",
  "key26": "44ojgQjPQ4je8WpxnMxmXUZm4FN9y6nHzd6DZCMQoYsamGsy7yQiXeetp58ziaWt84Qz162jKThQhANdiWzFnaSb",
  "key27": "3Zh74BWfY9RBHPy62i88dKewioNUhDQsJsjPv2qUSZDh5tanJoaaMFbeseo9euGLhaEkc1t48BeDbUJA7sywarLm",
  "key28": "4DRWMomPrDnzgmpcEgd33EEbT3TCQQKvjw1WRu8tCmLCsDmiq2WjXYgCwS16SKGnz1DrdmnersWpw9mDDCVQi4go",
  "key29": "vopoHuFYxwyg67Ev1PVVdGN3eSTTbaaX3dzXAWsCzN34pw9zVeGWBCHiW33BprDiWfELFpSNqq4FFRi5qGAohrH",
  "key30": "2SYdENX5amN93mcUe6iaXFJbvxApvPCR86SZgR1qRfm7k2qzsnBcpKAhgeH1m7rxKzdZ1Qh1kJysza3DtaS9X9mG",
  "key31": "4Ln412joK7MJfoAmX1untXKfe8BmF1ydkSMEqVmreHqkysomJ23K6FAKnjo7zwxL25RGe74GzNaNRvU9jgBzwNYP",
  "key32": "2baSJq63ZV25gnhYFs1QthSFS6ZHoNiD6vkJDAtbJpudpGj52em35jfdoM7zTRsTUqRt5nrNsWoVcWy3K8ntT4Dq",
  "key33": "PdCi7qJGAWjtLXZ1sMiQq2mfszSYv2ohAtDVb1eqFZGBktXK44he7nkDXoeysBFE7RvcHueUZsJyqekkhUmhLQL",
  "key34": "3hAqHi2J1CoJJkLFTfXNQ4t6TQBA2vo9pfQq3hCgg7mfLzQJnTGo4c56QWS2n6xXueZRcwdiHjSDGovaTmC38ATv",
  "key35": "Rgv8YzoYmYKeCSKxdudumtD9GFKY5jGEP1tVyPP151H3mWYjW8kEzwYVoM7xWAKvkazoAsX257xtpfm3eSCd1D4",
  "key36": "2nvuTjq531YXMvF6HZfunTrV244B3yup6LEipeYC8YoxyJByvNryxDsDRdgdZcfxZLo2TUFU7SDQzB2BbG9jVyHJ",
  "key37": "GCpq2cJZawMWABrZK2KsehpsKxJMcMmytV4x7XPEZus4CryZqwkYbrqrUYmNtd3n6BdZkTxTZprGE7tGbEhaHTB"
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
