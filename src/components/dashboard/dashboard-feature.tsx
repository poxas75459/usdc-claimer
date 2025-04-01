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
    "viJnFNjwt1bskTmCAbv9NBnU5bBKKZohXvqjPRYgocvSLQ6hdaNjGLb3MRHrRQqcrbu7sLqEWKnPQx2L6Y2wXof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XoiCcDJ84rm9vBN9CgWwa7ZPBSFZUqaaxSBGNYPDgK45K6btGSDqn2ELowxQjPTc17hJ38cj6znhn8oxqMfjqmR",
  "key1": "Mh4SoyShcedc1XuocCxm8kyZuF7AjMYm7hQd37waj8o9reW4zEhLz3mVR9qW4hYFvuEbCGpvZZYMqmdcnCVcHgy",
  "key2": "2ZjQkmY8wbrLQ2jJ4561SuZ33wsmoW9Kf7s3t5kk2Yk4miPLx9FBzn9ipvXhEXj4JrRNHukGWjueBpwUjEMJAvUz",
  "key3": "4CUac3n19xx1PGXnuzUEEcFNLP7eXSdEzFqrCUGqnnztemuBT3n3UoB1zfKqcYY2uJkVusNKa5Ei8Rd7a1QLBEwi",
  "key4": "4tdAxiG6espqAfTp335yUmCP6wB6PCnEd73LscMJR2ygvw74T4JpAcurvgjh1eAFZxYm64Fo1VQmFApvMpL5rYnP",
  "key5": "zdN8R4SkresST2a3wQquGo7UiFZrbQBHpUHVoLGbA3ww5uQ8RrYaS1eRGvVxS5BfT96wjCL7zops2YV4HwaMHAV",
  "key6": "Ek61y3kvoT6FEzgqLSnQs3yoyTg3coH8X4U8QjYgNZuXhpHV85FA1XUjq6Cn5CDsR46wEyruMYSReKc8ama68wD",
  "key7": "4ruhVVsFRucM4LHuN57KJzR23p2RupqWqQnbW5CkY666RXJw3u3Xs17TU3vcSjWEbYxHXar57SpYUV6Up4eYRyba",
  "key8": "4uYmSvqEaXqKGVkTbvgpsgncQWgPrVa9Gx1HcZitAg3Cx7BYcrfGsQwG58ikW9FEpMunix2tQK9LU6GNuSgZXcSx",
  "key9": "Duk9DKshnQ5VvBRpv45fGerRqTQ9Z1o5w72TkSu13ARSQbztM9ozV1E1jx3SmRNEMvUcSPDy1UiM1e7hUrxWHYM",
  "key10": "628M6nXjXRnjSitwQx4kUirBb5T3VaaLBt7Rh25hdNvSxWzADRgmTuzhnUA4wxcS11f7GMKvN8uS2YDiX431PHxe",
  "key11": "3MpXa2tGF8uiQ8zhVabn3GMQ1hRtrnmKS22GZYEQEsoedjtbZuWsuDYapCc2furKVVHnbrrW4JMg4DZdqBp1yX73",
  "key12": "5goPMGM4HLftqz2Got9xh4CXwvKXtLPaYpiVFXTDp3sTRSVaVcJqHKHyX1R2RNEgsm79G2abcXLXbDFueDapUPZa",
  "key13": "2MGZCGsBQu5WwGNjHy5JxhysgPnFwBrrMqtKvowrKBgbzqSZbUX356qiMY3m6ipxvkGCAySAjENPvxUTqqfF1MT6",
  "key14": "5jc3hmAuFEh3EmPitujxZZLG862ShgcwUtzbkYSkxVX8TAfPuw5ErTxct8S6915dgArDdw6QiZFPdq8QqWXRAfNw",
  "key15": "3wdg2TNTK4DLpgKiVDTw1ikcSW4gEvrgywHjauT3ygFaiLRzwzjtWqha2bGQxzf4CNgpgLaUruKeLWFrUTQeTQfU",
  "key16": "rYvR4wFds5wNDZL5tpA5NESYrfJ2dzzq8cGBJ4WjiFUJniq9WRXeNEaohyk7xnBhqfUxTp8fqDxVsCj5r69xG5H",
  "key17": "5Y3oojQ4aiL23yBVwQUsrXg9vfNazB2FS5CFx6A7NvwGw9Ggjkc6NKJxMFNt1RAw49Tnozfn4J6Q48vE9JPmswY8",
  "key18": "E9SfGWD5B6dE4uB3A9FUcWGFc6NmLJvj6Bta5dZM2JSk22cxUkt4uSYeS1nP2GzrJ9dZBff9Zr2HXSNDUNjaDyu",
  "key19": "KQFMsM6i3vcqqTzUFk59RfvjPjScq2uvXpJ7TXgyLeXugatChzRokHke3FRM3f3ou9p9qH3grGJZX3LGx7q9wnR",
  "key20": "rx1hNU3X6uo15zyJSikUGR6nL9Ei7isJvR9MbFwCtn3Jxd1xLCQuJbHBT48nosqPNcEWvg9zphbXGtYSoyxzgKs",
  "key21": "4Nf1xCndHhXG835gqeBMJqGntw4Rupq8q8VCeS9MSjG7n5SYyFmUXn9JqA1GmuWWBf8ESqxLD73ptr1W8e6XyoWj",
  "key22": "4rmWDmRecD2BubWB7GFYL1zjwQqeKX6sY5TBEXsL6RQRf85PbmFEVJmvAXyuHBV6Pf3CXahjnZZCR48RpfDS8f3n",
  "key23": "Tv8jiKfGhmRtyDThj7ZqjgnuaZFMgcSgG4abuQNxJ4X4TnNXaa1KpTHsA1ki6CkdWx2fiAMjzeGRfp8oirzoTJA",
  "key24": "5j7uWmiXoXAyarwUV5DkrKrSb9u6XB6jXh75TX5jUMxUUKvA35L7xiPiewUcEV3rnQHvdETYU2f6SuxeZ4C9eMGY",
  "key25": "4mU4uxJ1pBMfnrSjnzeKcfF8xE7JHS37NFnAAJC6zdsTMDeoCTzDo8Js3mZ1fag7CuX8QQvBJ1mfFc2wMMmGumDY",
  "key26": "csKYhgRj95euhkZYYeehoRmVbWYcyTG2sw9TpPZjU6X3WqKhSdWLDkfMEgk3JyWC2TX9bEQnShetQs4LZ74xVTy",
  "key27": "5Ui94qoKC6vt7LrJfPCsh6PQtTHx1xpthUKqTRNH8a7qY4zFUcbPNwdw7q6hDbzWovMV6RzSVvfg8kDJUxhqkTuu",
  "key28": "3f8Hi8NU1NCjiC38cr9joRH5EgnvC6TAPUC4XeLSdhXzFPDdRV4hZCFAXcVnJRxZ9xQ5Y14PaSvf4BWmgLEhHrk3",
  "key29": "34yTNJ9BhkRi5CAHDPxzcBdAbMCHTnK1LRhq7oY2aTbQ7gtWx2p195Hmx1KzVRFNhJifFFKiuwLvRffxYje1AtAq",
  "key30": "4V5wrzydyCQy6ePTnEw6pTecWcLKQw4nWsVrEnvTBPRNTmHUa6EwJKXfUX1jdEDyN4zEqvmZbdzrC9wPMcMCzL1u",
  "key31": "5GccN2SLZxUTNSeJ2tkSNqRBh38rHmpWRSCZC6wH4f1ePNm8RAJfCmyNTgtGFtMdbPiDcreZMV24eie92CftBe7S",
  "key32": "2m99b3ypfG99xvyxUosVq5ff7N5LmHkjFWAmXJxACXq72YgQiTAnAfDp26SL2ZESABA7X3zE4S4sA1J5KPH9hCSP",
  "key33": "2ahR1KciKmrnAWZbu7LmCZvT1FZwad7EeL4vzxbz46mmvuirbT95MqMbVhGmZGVTW9ave1ZXun9VH2EftkRYNVq6",
  "key34": "2JQt8kTBXoVn2E8rSUr84jm2HgeJVTdbU1WPwFW9dHfWfW37z6y5joJHihRRZLeXC7dZWFWybgNVJru5chKWWfoo",
  "key35": "2yFz9JQByjmSGS81KWHdBU28QHw5mbd2oqiTo7KJRLQZ17FrS2gYbZRc1C634b1yLR1jgWFFo4Ffh2sPeBhs9qph",
  "key36": "WzB7NrxXCEKgTgLZbyKLNgUbrLPedf5mBiPZ38Brnc7jZ51fN4Bqh3HHmVBvkbJ7TmCNwXVCeRRHvzbK82UUXRV",
  "key37": "9pmqpS6ZHNwJazD4rmq1hQx1L8HfC3f81ALSMcNPXzweG2nUu1aw2EgPe7aVArnUSBixfEQvBSeLFrFL1Eh5WyM",
  "key38": "54MsRy7L5dWQJozPS9k6Ua14aG4kh7SbjrXJQs9MrCmtDo6jusXKv7HK6h6stVYsSRd7kcHVHyUDSWtCKp9oNi75",
  "key39": "2V8hh6Xv1eRQjunRJpvH78ejk5HroH6NTzdFemrEDcek6Lt8VYcYfyj8iuePiVgQaw3x4UQKXRVCkkqeSYMzQPkf",
  "key40": "2xz6Ba5Rv6R1QUjNn95ozThFe1fJHwRw5D8fDLruizEwytc7n1o7V66ovrFumUJX2qUQ7zwrZXZc9QEqBXdCNZRz",
  "key41": "5gk2vMV4ZXDiRk56tSm9tSE2yJHsQxhwHhsCCdLdnKktg9gdm38NgWNB8GVYyQHxsouP6TmriaZX4HSZ7bk24H1m",
  "key42": "L8UMp4yQc8fpLCXsPhGFoK2YhMjYQwaXFxqK76F45aLsbYjAE22Cwsmxbk1G7iVnA61K1mEbs1tG8RuWogx3sMa",
  "key43": "4bxoY8Drrov18WqdLD4SCb2L8sT1QEoFvskq7RQydssH5PXag2uYPikyySZc8tRsN2PzArDoXEVTDcgRwZoaVqg3",
  "key44": "ph8fMG5kBwxTLbui6CXKMPe93WZxGtbgLZJMjwJdjqjeHYicxdoYW9YEToY9kpRDNzHXFyiDh7UN6y8skkcubu7",
  "key45": "3yqVa6GuKGWZFoC2qV1V9QuwR4usjoGnfSNiEE368kQKybtPmMDPh7fUe15NBTGdC7xCobg3xQbhpd8Xk6VmMa32"
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
