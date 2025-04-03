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
    "5xLDt1ZXCBDuBTQN1o6iX2gnjQoPzfSXCbnskuMhRoC8SGFiWxVzZt7NiNKWDU8FQ4JUyZavCqFmLWSN3CVxWp5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UwYumPoD8RaobgEAtS7ApMmQb3kUy53y7pYZ169FJLQwKckPtFMW9jqPhJVsJkjBE5PnUyWncV8JrW1Z6U9Ysq8",
  "key1": "4Lw5qaKcCcArVW3CpKD1cr8iGyKuC9n3em3fYuwgbdjZziHuZpNydwdCFD8ANpkhT3EZKS15q95ikvkovUDsAYRV",
  "key2": "55gcs92PSq6KTc6mQFiksDZjJrYK9DxKwXpxw3MvoUFqdw5whv8Cv65U5WU48RZS4KFPbC5xaNyGaEFAHxB3B8NS",
  "key3": "3dHVAhuszRGLcPFMwQAr9DP1R4kPH4HnkQP6CmoHcwxHdjxU1tfCna8KeKNiDbJZ5JFPxN8sC12LUneya9YizLBC",
  "key4": "XNzuXZjGGdj6x21Z8ty1joj2t97QYVtFRfvUEFV3kCJo2q3UwYsM9wKXNbCppsYYRevvxMjKyjTc8tddeMcq887",
  "key5": "2wyYXAHGfXeosFfvdDLkNBSd4tPa1yDW2KXcM5uQsby8qF3VtkeXsUFP4mRHX2FBzBq8ex5SLP4P8YzS6GgJiAAA",
  "key6": "2BborWhRPUiqXw7tSWApay98ckdP93jmtHWUdcA6vmjuPrzAyyTdD7DzN8jZxwW1hpsceW9SPJK3bVk6KZ1KjkyX",
  "key7": "2gVjmGfjy3CU1v1dnYz8Hiva4BFtGC3ohPHXrYcrC9MnjmeBgK9E69ZTcrUYn3ddnrXH7Ea6PxTygfA2BZ2N6f6K",
  "key8": "1FJx3nwzsMXMk3ShN9kWrw9VKUoy1GFg5fUaD5Pv7RTfZM6dL2HZ2nro2HM7Go2nb2onXc2GfDbxn5KPJzTKnbk",
  "key9": "HBvbmcK3guUBUP5ehNMe1EUcKThDdeXSF5jbp2w5oLiqokoLb4PLFp5NM5SMFXCtvz3cKjLcKjEvTyvwmmS91Qk",
  "key10": "2NQkjcKNA4QeenoR1pTprgBTq9M3dnhVe8qg3tqqqBbfx2NkbTFisSbMYokFuRvBCdTCYVDa1tMPBfqgykgEhV5R",
  "key11": "5SzTybSr7to4DgxwPumwHQvTmNYJnsFoFRGaomyiLgewwMvzfNVDhQW9NVPMCc1JD8pSR3t8ewTawHj1MRZyPWgW",
  "key12": "4pW8fsten9A6ABkm2GwYS8ZrE2t2krWAekSyrtN8MoUxxVZ4LcqvTy2L4SJ62R8wep5y7XcxCiEKdx75hAPfmKMv",
  "key13": "DQHexF9KgkEoBgbaWHuoFcYdM9GrTkWzcBX3hG9ooScvPF5gS8G9DymxSA7DLaUyzuf3XiTQgmiEt7naQiFNKpF",
  "key14": "4b1tCayaaFsVKibeZPdKQPVc8VGXD1sXGSd1LnHfoe46TxYCwSEbjAZUmGmQEMcj8KnNgqJWta1zNp7DSpqpPt5N",
  "key15": "xTxMrgodm1eFqvcmLWoDFLDyKPXFRTWbJAMMkYuxeAEJy7a7msVyN8KckqL6i8aVJvS5A49QTzmcQW5Abhotryf",
  "key16": "i2fGhFPp1gh6dsXGio8tguPoQ2B3KXQASYnNWTZWrMU8jcjikox2Koe1wGqGtQeXzVutngPLTaP2pD9pH4vThGN",
  "key17": "cQyLw6kpfXhkrPc4mBLMSGqNyyFQhkfegjSH5Rumw79ybNvDbhAkcjeZFyn6us4PpB7VyXab2wDNCuypXezGmYB",
  "key18": "3NoPzptbbtbYEVs1uxAocVnRQKHpK9qZoyQ4LmtDCQoRPc76gN7BTWN9ptEnVoQWwiqiUaUsHKpVck3vWWfBMCfm",
  "key19": "B5aXvn4rv6UcvMXZo4qHiNkKHv5wpL1UxRzgWprgiDeNXaMoh3pQZvkfis6bxNhmpE4DLvJvCcBWYjMfrFZ94rW",
  "key20": "5pLa4DsCbEWEjkfkLcmazSbeE8mSXjtgDtoVw1ouU9G1hCr1sY1GopesMXP95eVVPpfco5j5ZW55Da7p2gVZDfAi",
  "key21": "5afnXf9Rd9ccc7KZpFUmQ21AYP9wbCpwUjsr33GeMtnNThchZYaEfJCJykb8gmNzu3v449kpwNjDZ8XYBZ7rykVP",
  "key22": "3vzjbhb9GiXrwAiPP2cNnZSwJGTH6fKxoRcHn1ohgfZxexUw9QhS62Mi6Bj4Nstx8NL7tVjZy76j8iMHd1WNvEP9",
  "key23": "kN6kmUXU3Z5yTC2fCTathaxsHunEj88BHnGGKvzzEvWRxrrqNy9SFJepzr7U3SiPT3tq2oPKLvQPbEYKmWjXSc4",
  "key24": "2pLpAsihaTrWupbDrBh2G7zR4JBKgzKyszseqsNodz3UubjYzZfDTciSvCmwYLhJDh1rvLghX5qAyxw2Zvkb3j5F",
  "key25": "28ZNhs7mBrfE8Ze5x89zVnZMcBsP8Bc1CCYcyVb3fv8ohvnGSWzqb5he8kN7ciS5Fm23X4Wp4j84FycCxyGWcbEA",
  "key26": "4nc3Bx2gLzD47jvBdsYUPXm2QHcK7zerDQiHW9z1XHwpCm5j3rNzshCHEDVB9gks1Zi7txytsxXxRkffHJvYGNND",
  "key27": "5a7BmLywqBFF7eB6bptR1uYqZPDcgEDDiU8ERDZjR812BU9r6n1UQgWX6qJy1MR8sLH89EGYTd3YGXfcrUqocxtM",
  "key28": "4m9QeJHUejhicevNJVaia7oc6H53HmqzcLR6fjv9QSgNbkpzk32thiHgGYtz5PHo3vtgLNFSku5eYdoPv5o8MuFr",
  "key29": "2J9ohWgLt3osqsdjohc4FZpvMJgyzc6F3XyK1Sf8s6tigPoh9XVSUFEHnTXgxMdqQiQmrjRigyeUR2ec64yvBpMt",
  "key30": "2id14BgQwdzbgjvm94dDKFAhcjJEXEQyr8NRPTRAJWJH8ZY8ctdormJo1XU7HwLHuBdK1m2VTYWaS6eVosns7Ric",
  "key31": "U6j8pSNB6zJmXtgRXVHbig3n7PYA59Q8uYzxLjSwE3Tnq38a4giKwzF9cg1LaQCeasLMPwMczwj7FQ257EXxppk",
  "key32": "5vWhsZjzT8BRpUnrkpTtQYGoyfa8kmFFyvEfRYkDF8ZH5SyrqCx6M8r9jjKse6Ag7EqYzt8wrCaNJCdWLt2ECWFm",
  "key33": "5cvXc9QBG6wCT6ZKJLVbPeZ3fBEPMzd6jeX8KEfGGGVx2p62TFctxjpTegpBpPhHGq23kN7pNxsf6jsb2eXPGUvr",
  "key34": "pUQh4dYDTwKXuCFHcGhMQjwTupVu6oP8spSK3Zthijj52jMzU9QKdENepHgwPV6jwNzmhEGVAGyAEw4UCQsPVqS"
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
