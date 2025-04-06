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
    "3jfN28etMcVT56oj2yjvPY6mWGdprgyjbpHuvx1bFAPoYG6LK7Cj1EMcRJJy39XcSPGZTwLWrbizeFqXVfeAE79Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GjJn2U9LvNMJEWcqZetfQW6o4p7sVA8P5vffeQwegzG9F9we7GChfQjGhgQy1uFExLcdUFY84RpnEmQvJ3MC4Ue",
  "key1": "32DjJoCdEvUUY3FNeyyyBNb8YgSs9ERGNNy9tbubk9e9kodXAFafCpTmtmi5ojWnDUBTdHmv9QSm7cm241kMqcr7",
  "key2": "3ams2GGkJCCEaMdmJ86gXykx4LHh66ugr645RwpgFnMAJsJHAWQWTJwLMpMZPsS6JqtC6b7cWb8pWbn43qojrTVM",
  "key3": "3rHUKYJFMP78f5vtkyyFiWu7HkFZoXoiod412Fs4jzFe86LMBanV8wQ1GyLw5ffKv3KXmZvgLTMCBKp3frtMejMz",
  "key4": "4bzuA7o57D7TmAnCGqT8JhZ78MsHwvEaGDWMRE1fqVz4ux4HDbuHSJ6YWYiadoya915PHWozFN9wEWB4jWW6k7sL",
  "key5": "3qvJ2c5HJMD96LDn3k3vaH4EJkQ6ufq3iVC6HwY5PapEBoAEHk9SBpziwhVdm5T6W24cavutJhWjm9dyrzNrVpY7",
  "key6": "3fBLLwfF93fmf6Um6JuamyduaBnoaJ9ad2fbwZJghBaHVdPbfNGvBxCYGMF3VvDLiN6CqiJbzfmbeJnRjqPjGEA6",
  "key7": "4VDgD9Mh4dMaTSusudSymZgAe9fsfAE1rGtToQQbfQa3nbk3mhnDZ1ES5mnsSHaAnr9VeVpPnp8d6cmfLn8HRaRs",
  "key8": "x6QHoyuf4Nwz55q5ef5xwkxC2p3nMCbpLT5kt54E71em96hFuAfX1ecbs624PrjUaBySSb14jUES2hsNxCyS68m",
  "key9": "5C4ErLWUWCtDw8B1GN6wRBYpZ6UoNPz2hXUyJnmQAfuiEc9XguJq5KdJ8pkUBT84Qx67VPx1cQXhJs5Q8dv9sJZG",
  "key10": "3tA8252JfcJZPJFHhc4zB7NRRojninD2v8Coyr6UWyrxzNopT3viiMFv8zNY2AajB82KzXkW2yDWKNG7BzKGJ7jk",
  "key11": "QwEcSmMozzhic5YHg9ZaNyb6Vmzonr3F54ULk4Ry2YPNbh9CscJ85Ny8Hkkujtz7L5PDxGHycKRoPW6CoRF7tSA",
  "key12": "g16DpMhJdLDfJzZgcDtxqu62u1AQWqswkHMy6Cz1L3sJxWsTP2aCoBziMdTQWegyYQWNjN1KEKvBsvCSHoAjvKK",
  "key13": "ys6vPCnYtggZ8MWHt15mrs234j73gMjpDGntNxWkcHAFrh4uwxFzXoRtMtwo3MWYvPghky4qbbBUP3SeZ8MQyv4",
  "key14": "2EiZW8GQzBt9EfRt94K4HLwSRJPfLopVzQnNHhPMwUiiyJTRHAuf57qntJM5tZR8U4yqEX72PVD8c2tzE8NDknic",
  "key15": "5Rdx2VfhsauqigPcnro6Px5f8KeUFNgiS3wciWtvtD3mL1VRRwMvJSg4VUWX8HoZ6GmPgTbE32XU4HkkRsjp3qHG",
  "key16": "4HtiQUt1VJ1HhMUYdjzBrKxUjr7m9Qbink4VufA8Zg2ZbUvVbuu1ZubCwBWbcDjzEW3vRnRWSvvgqrGdWiaHHMB5",
  "key17": "64YWutMDncfjfjo9Ykddip7zDdSL6TERZqabS2Q36aaRazvfnn7m3bbZiMCdsam9CbfPo4uER2KdUSvPnskGN2xT",
  "key18": "5kZdTE3oA5Cpb6d1B5GV8LZzS6PsTRbRgnSEsACRzwdEjkq4Jhpqb8XuoAfbd4tZfkdL1xkYYMwFVxuJ8Y9sGxMD",
  "key19": "4Vr2E7fXSDAfLMkCizFbKqrygCXkpu1PXsemGrpoqCimRdZ8JKrGuXqRrrxW5xyJTk3VWAmpgPTPJhV6u3HMckmA",
  "key20": "4JK4W4heAn8xWW96UAD4sAq8ReMqtgZu9uGNb3aZfsD68yFhw2CNWJMK4eebNv8Yr7LVH3bt78gb1gbhozRzmJNF",
  "key21": "z3LqWaf2tfi7ZUkwq52HP822Rmfxi4TbWoxUhbnj2gTkfgbVoPW1qmp2QLrMkoKegiv5ngoAXYFme5wjHLJzm2q",
  "key22": "5nRP8MjQ75PjdATxkjMTfwvvgXzDgXCUA5QatdaZgJmmdoJYNxHYeW6SKYsorVezpaMn4t3kGXMVP5fmsJe2WgqL",
  "key23": "635QcL5Cv42mbyVzHEHybiyG3q1BHwJTRQU5untRoQ5A4MwQpjK4z4RsLyKE9ZCQiQUbhUTzjMWuH4pUNC3MHbMQ",
  "key24": "2TqT7UdRWj1NPeyusgfX6qmmWYLViyZRujM8jvR1CRo1TZg9bRafHkmW6Pm4zkG1gAasUjDezrmnwEAPobB6QqKG",
  "key25": "3HmXBG9pKpRHiz639P2TThtGGW3Q1gFeEoJsfVnaFPZDKvJ2DBtLHk1Zb9QWtbG3QjUNoX3bngAv4w8jLGsj4W3B"
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
