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
    "APmtGb38cKXbaKQnE7FiJthBVr6CECrVTERzm2duSdxNij66SYnrTfrkF68fvqjKMBSV4Ky6zeQ3pvT2G4b7XJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GDWeYnWnAiEz8WaMSEQxtqSUqs8nHfqFwsTuqbN9B3nTQMDivqdod5xY6pVeK3yV3ME7Mz2guHdJutiT4NswMqR",
  "key1": "2H4RmKZbUtfhdgdxEg84xoeNxK4W6gZSCZFCUknBEeUjvUJPCffAcxWqPGmx12pLVYRTLRmrpW3Uk1iSZ4jB6gYn",
  "key2": "3BMkgGXTWW4FAJ9CSSZU2Es8AiUDAxL9iV6dziR17F8qNvUSo6WMQZY88oNuPn5MboNMNQKurVNHX4CR6FsJKcBH",
  "key3": "trE8nWG1R5st7BDvRPg75C5MyNmpGLhbx7H7G94cKDW4FbjR18zPTvbZfyTKwGzUkLtBw8HWshwTBiDDfYaky5u",
  "key4": "3sQHSjDTe2694teXPM4YXG1R1r188yvVLwcjKvuXp7fwq4rHd6294svPKKArDocUHeNkJ9qYXDvKK8xK9TPGugmd",
  "key5": "4R8BxySEK6yqzZoQfwxAX8ynsTHwg1oiyEG878rt6TUV1VrMEwGP4Eq5zMXPSSnTXDhnViC3UyvDy67odf5Xr1Nn",
  "key6": "MN4nF6Y1kxSs4UaTsYwWL9KceofH7YnRSG3AZZaMrd1RJnHPYdKeeG9LAPoPd1cGQyo5twaC6gJbihdSEUyf2wa",
  "key7": "5QqTLEnUb5aRRtKv3CNf4vMazZ1tHz1phLU166K1yhnS1NVsdRMyjnMnaj8uSpxENMXQuk3CJqHEL8HG5ug8B7bJ",
  "key8": "65pR2KHS6fkKF5pUiKQUuXmbSk1igbYJgwe2Bh1RuguJgcTJf7NA1Si1oQ6PbLS7JxVHen1KQmKF9Ru95dAEUVhU",
  "key9": "3rEEYGwSXEZ841Q57xbayvnceiLRoXQWPF5JeDRzQ6L7HtnzqNM5jb2CcQDmHdckuuE5agufUYJLPBtPz9fBVHaZ",
  "key10": "4ijbP8B11TPYB3Rq2mu4bkXURdo2JDsAxYG6TtrBu6VNNyZaBeJk2CY3YxzoVdApSS4hJbThm9ayjaKet83mpBEQ",
  "key11": "2VURqBbMwBJcows6phJy6Lu9iaL7wkCumyqPnrYmENezL1aNmhuN7yfJhLgFzAPKVsCcKbcHtPxEnd9j2FgHHm8M",
  "key12": "5SPs4MDJF22NrTj2N8V1YHc2FpPzVFppR9hBEgy7NMDqpFiSkPAHidPjtbzzidmstNw5DFrx6PJ5seinwXWUVniA",
  "key13": "5CAxuEQcFBGA2KxAjCZQAiier3Q6aVh6aaDDcNvi6Gxb64uqKMvgpQxYXchspzs9EUdaj1bVuiTwXQu6QL3wBoyx",
  "key14": "29VfPRvQC1XPFTPcYfgfaC9GeJYriRMYHdPi9a36cmQvEGa5w3c7jbWJfKJLBAQP4HCSETD9PY1eoNjGUg3aWR8h",
  "key15": "4DSQ42w1tPjJ3wusHCVbXT5Zhi8vd12SacRfR7PxtmJyYcKZsSsBQMQGWruPWCBJ1wYAUL2y9QE9AsPXcqQoLwtP",
  "key16": "JrNX9L34M5za3bUoHXJEUHWKjd3fzUXXFehWCBq5q4CeT5fL6SD4BbiNi4KHtrrNGx1oUJY9efyBWp4P46oFR9b",
  "key17": "2bJDY4mUhfhUDiRW6L626VaoGEDhaLzWMDFnLSrAdr4d1wshkGhdF6yAuMnxB8yTSYeFpbfFFvbdZ3UCJ8TS8jEb",
  "key18": "FYb8opePSN6nNYydSUhHZ74YTQJCTfxPmKcdVMLaNukwosc32JjaehQNW5oA1xCcRDBkSxW9JcjLjj28RJtHShv",
  "key19": "YLoRncaaxq6ojSwfMcYCtasUdKVZzKgHMa7GHmc4uxqCY2ogZubqbkRMVjcDg6MTZCDydtakc4R9coiGaVS7K3i",
  "key20": "t3xQp14DkNACK42BfunT5rbocEZ2i2brLU37ivUu7WViuTR1s7UZWNVLY227CKruGTSzRDevdXGngv6HAJ75wy5",
  "key21": "63kGnPFqfvEJ6ibYi5wm2L8Bu2BP9Q1vmtz6iWzCGUBKHxL5ELhbtSRthszie3bNJvW87YFMYwXLfuPwTTrkAu9C",
  "key22": "2xJavM7YnfuqzZPrPtxfsq8EKJApbUXwPzvfjT3RqxQ2vgBkuydRxCymGnrR76TdJkoAKrfMEy8bKcq94ENXrNce",
  "key23": "42WxJDCLaLcEsAQKZdaorgFoZkBr4psw5Fi1u8CbgjdfXxn7NUbh9BAwezomk5rQvJmx6jhJFAZ9tziuYzVsBKJV",
  "key24": "2QYaH7GoozWDj9CKfkwC5W1sjNvKy2cUysE1LL94B9iS92hnQjSwz5uBfbCyGZfoLe8Kfo1GiR36pounNPKcegFR",
  "key25": "3DS4fWaiFzCeWUFp5mPTtkuB6V7rxGKSQ7ynUSVM2ex7UvQGZgEfo37ktE8EhEHXj36QiJsqobrqDjBr53qfF5un",
  "key26": "4NWvABXBLVg3MZSaPwxiabYnX22DgCZDn8h5RxPGLccuEqi3WFqxBtKWLbSzTGmcWmq5Pr6wBhkKuAzeMUZHU5CX",
  "key27": "3sApCd9rDuY7bk9aFiL6JxfmGe76FFNzqHLqceddKHsuiEpiWZSdB4P4Zn2YEa4xE2ezx7unwcVjmakVqdkmaGj",
  "key28": "54PnPFGHA54KfEjszHK8hCHBvWne1nKqHJCrGFb2wMUcUcJfc6YZFuMFQvfV5re7tYGriaMXUarAeE4MtNwFXmLw",
  "key29": "3Pm138HDtHf2R6NjAeBUqMnXE3CDShkiX4P12z3R1E5re2K93Uni3ESjtGxk4sW8ptkkeRrUyLtF7hA6wJXxHqvp"
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
