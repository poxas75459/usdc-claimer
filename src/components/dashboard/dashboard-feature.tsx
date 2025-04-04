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
    "55nLTH1bjfQa36wowJUuvJJFjQzLNBCXgsGv9eGfNoit1EY1ALuiv7YnDjTb4MGSDdrfa21TxyPrq7oqMFPe2ybq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b3QDyNmniFPQHXr7nkZEBgQE2K3sBk5gzRjqBoue3HxTWUPP935B1ejYrAijnBbKPK76oZrfvMaxp8uGewny9eB",
  "key1": "34bbiu9ayqDh7MDv5dShxk4ikBvxyNnNpHWm2433WxtXg3GX1zaFXSa8MRff1EES3n2MGF5pRiFR6LXGj1EUcbdy",
  "key2": "3cMBsyn4oogWFAt8Hv4dDndS1Y4hZvj4EXG8VNvmy7FcwC4cBjMPhfDgt9xa9fFFKNzsj9ifRJcTDj6RaRgJahvA",
  "key3": "2PUcwUacwUdRfoDxETewvGnsySmqbU2Ch6nADExNssHkBX221ykth6pLrEFioBMDubKJvVFgfLyUEGhKRq2NZSsD",
  "key4": "2T7cgyqL5F4vn9sih6WHzhicX87HdgwRTHmg81YCjsv5nqxmMBYBrorMdod1zdQztPJchPabCNrHSUVB6VLVKNUr",
  "key5": "5myiBQGidp8iuHcDKvY38jW2WRpwAGugMiQYFryj3sUb5RiTa5mzxk5qSb6J1Zzh8c5mAuZmffSqqLRdMAAYay5L",
  "key6": "2hBzL9AxPkPEuHLvbejpREdkppaeFXy6xDG2TfzhPWW5fPZv4b6fUMaVNHeYepdc6FwicdcBrKwBVwHkuqUZ5E85",
  "key7": "BV5AKP1LCqAtV9J8MoQvzEV1Pi5XUCKZUpKKgV9vMoVFdtQW7o8UC7YdfmaTzBTJQcAQJCnWvURjLgS9LmrueUM",
  "key8": "zxhtz8umDvHqm5UxBK5vRPNHsx4YWVdsD96633by5NuNmvymj2iq9wY6Vw1sHUHQRgjcXCsqrN7e8V9QvNqYrxS",
  "key9": "61u5hCADmxg4bsshkUogBkLkzeGb9ZBpQWopKN29nz4HFNdH1hGtrqumxeMbps8BsgG7r75r8Dc3T4Y7CXAGjkPC",
  "key10": "XNAKjSSXpBs9iVDRjyC7aegrSEDTcpHbxV82of35unsdBLLqwnmmPK5mXdjGmWeL5E6zyF1xrCoWBxrq9i8FQNs",
  "key11": "5cYCVopzjtfrAqkXz4ZkzUQaxVvtnVHXVGUz6aRVDe5ZvMimzeuCrawQFmcrPMBWRsEdDJn6Vy444QPmdsD5Z57o",
  "key12": "3jatd1bPGAyg2SFKptfwMSnBeWKqQVTHJK6Rca9xnvyf4vLEuxkkBsLmrjvtatgtDkrDKAVqk82hRgQfeuTsBDSP",
  "key13": "4s1qZWdA9oz2b1wftKpv4pokwgvKLcFTF7hrV46ungk6oUMCiDE2x5vboXwFSSw9LpTiMw72YgrPqUABimAj8dZC",
  "key14": "2cX2onVL5nzEdctaZYbaQNjZZ9AGqYjDGRGxTBXgq58PyLh3Tt99uLpjBCVpkUZuArzqSK18VVWNgxeCADbuGyyo",
  "key15": "3UFjFsfmbMLTyVmWpTDAi8K6nb8k7oEMp9Xt9Vd4wuSDecR8uDKAgv7PaFCnh7TLfEyBfupbfwQnynuZ4fmoezMU",
  "key16": "54QVjyxXWam1DhfVG2awTbabuPhq4Pp2TKKuyzyX3CobgeBRXZaJtD4uTkmBcusapRPp2Tt1ADSQRe3bn3ZPc6M7",
  "key17": "3y9yaWU81EJMEZqZEjpTMx674vcaRtz8rEWPEiYK48MyBDKJtU5omkandFfCMF3gG8WKgamyUPZXzFcPEWLrN96r",
  "key18": "4mcq7EC3F3hWpa1RyZzWQVFrVLhrfd3VBw3mhGZYb5uauozfhLW1NYMLTwFG63dBcrpM1bGiMzyQcDpMn1NCPPkZ",
  "key19": "2a4TUsGTSNEwRpstPwxC8SBNRFbaUzp5SX7WK5EgZnk3imkW3RLwBdr22SaFbPi6tbHwUf1cqe1u8jfj1vX5ogzZ",
  "key20": "471ywhJKk1WjXFXQwXqo15aLdx6ZXEMmjuotgHEipsr4xSn9HaqzJvMB9xZsUKgcPDTmCXAz53at7ZovovUiWjtP",
  "key21": "2B7c5p6iwK5SmNFt3HoDGJXFCjocYzax47DS3S9dCGZEfoudQBZAJLh5vBm9GtwddjzffNXSkDSgM34E5zzrsfBx",
  "key22": "5WSdKuV64FWfiCnh4FmEB2BetTXnjByY6xgLzcatKyxNXGE4yPX8ecuJq4kqZHeQ5eEaBxysJiJ75G4oaQFz9bdZ",
  "key23": "3krjgngs13j533pwVURbMstUhFndZYX4AG5wzeGvGUCFr36eC3FPxLmLFfMRngmUMyiUjdfsHHuXEBLXDdLLrGjW",
  "key24": "Rf6gmpup5ZAmkfixcuTb3oM5fEubnPLwqyYFR5LmWUTwhB3XmeZDJ5TyABSUo6w4sAuubRxvTyggRg7ft6rKBih",
  "key25": "2WadC5MtGndXt4T8tmcgGNcycrbpM6Y4C3WnGdEsTTszfGQDbmCjkW4yRtVFYnjNehHiLGQym79vRcVs4E2xjrcc",
  "key26": "2CUPyQn8hV2dza66LLkc5mayYQNgji6DqsaTGNuNYjyVyofDf4nhWpUvUJ7ep6qcjxNyAbVfuJZcRMng2d9XUpr6",
  "key27": "iyCnQDcaSVBWWDXYuQSB9Upk7EdQFiLgitKMMquE97sAWPRAxpFL1JPZzaXCwdUne5UWmyLRm3pQPGQVhiGvRXB",
  "key28": "3iUzyZHrzp4gmGEF9exqzGTm5VRjrsKTLaXbZbkSTb3zo7hLfYwYezPLMsGXM4q5sFZ9coxMGdV7AW9YDuMGPYZk",
  "key29": "2uU9RMwvQsYsadYVwYttKhZXnBmgr462LoG5v6gDZs4FML62H9rAMHF7e69FbaR13uPL6UcWLup3xVYwocJVMuja",
  "key30": "23NgTDDRqbaNeFzbmRbHizECcH1C3L3ApfLjvq41wQXykDEbujuQMBUzzzLp6CYtti73YkrqrTj8srfzmrtDxPDU",
  "key31": "4xPHWpMHwi9Cvaq5r43yXS1mXXz1uPFYPmtc7H2hqU7a6zVWRgUFDVutN81x2fYvjJnZRfDhoFwVaxw3gpRw4Ud9"
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
