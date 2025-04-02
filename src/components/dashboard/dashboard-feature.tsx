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
    "jjR658b1GU4TZVajh4xX9m3chVLEURcoDiMZmx67F7anKvrGykvJuBbG7pSbsAwxjozJNhaEPW83CMMMz85Dwmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QqUqeFEk6pFsCbGkGziLCdctLxYsaw3UgbHj26A4i4zMnobRmFjHgF2TZW1VEmtAXaKekanjeN8yKVkKhUYVKU1",
  "key1": "4bHufb7A4bpgiwvAbXQhG1wE7aCAZcZVHhMy1EDs5wNHUT2YrMxY341BZhvogimnUXBCjDJT9mJQ8yaCZAQ4ajxc",
  "key2": "3U47nvYMG566i6LXomtGGfbbVjHmehhscrw7jwigKcCT3QGCxQB6k9HQWvAKBVbYt8xPZ7ErEFaG53fvSqMYZRnG",
  "key3": "5V82tZNrFPa3sEg1XWBSHJhWaLtXM5kSt3WbEBcX2XeCN3rXgeBTAF4ZAn9eCAvL3YyKhkNEaJvTQP9dW1UYszUq",
  "key4": "5kM4dfHQ9kub9x3xDVxuFPZWz828yodzMtureXPS8g9Sk4wDKSxHm8A9PDy3XHG4YJkTSCS3i1kAReSWo23WQUM4",
  "key5": "11EgDv6xTeniUJRKm6PJWgr4h1QFVft1Uxbw4b72QQPcVA3cvibg66fZDWToStGUMbupCUxt35suMJgJahXCSCR",
  "key6": "3mL5Cn4q36AGt8rSdTFhiNZJHHFMVvrK5a1zajKCbrdyEmC8ZheVUg5cqiiZyyTJH5LzXJ9bqWebv5RSZZYzCbhe",
  "key7": "JACbcjeN1hoWmi8w19ccdBCmQwwqfpAGh6SigU6h3kV45kkvYXRkUcXeqbRRA9kinaVbsBmFjvfKk4iJjRWpVYs",
  "key8": "58y4uXw3aQsxpRxjbRuorkKRPRuk9wJSVxpMTqVTANVDkfqjZywckFcJ3DnbhpWDDMhxUytcjPGVPvdrwBdzmyiT",
  "key9": "4qxfPg1t6Ancbo6bTSXneg58nVhXqidcAY95deyCutjxTZEMR2AS8xoga22H8ANwUGFNGwfYQME9aDEbNcz9B2nz",
  "key10": "89rb8mrPFgPm9rv2WxiiyUsyDdxbRU4k5QKjdUdXHWttY8hF9TarbQFNZ1adZWNVbQq7CykZ2zadMVy8CDMUeEX",
  "key11": "BUM9uBJbr2aiB44KAuhFbXWeWmyuzcH9r9RHHurA3GzXLky1JRUGoMmmMQ77ss1rTFetWtcQjHcVoxFU8kQCPLZ",
  "key12": "3n6Y8jEHoKDLBUTC9QoP7F5C4yo9517AdxpZUEotxTv5jVGnLYfpYuqUtsXE8w4xcxGDEmELohbrSaPjbA9P8ijq",
  "key13": "vziMSZbQn2rj6bySvLFLT3jaecMhxvMof4bd3o65x3dDWva4SbhGzpfyLJ4HXtzxnTWzrxxaCArwNNGCvtmgXJ5",
  "key14": "45R65RenjKyhGcbgduLBH3SJwtDuGL9rWE7s2XLwwhVtm5oXav6tmM6u8vjy36yuuye1DsGHDogjwwHyD8697RWR",
  "key15": "5ecPEzJ3UWuQs9yBfgrckucW9qekiaYjAqZ8CZeF9h3ECcfhhbh7wNw5bmakWCrxjBtgzFHQbeo4jcm2gDdUXd98",
  "key16": "47nq93PqGM83hGJegRmirWYcfsssgTLWtrQi5oKtQvUATy4JHVagUAy66BCQeX1S8VBZkbk1fgvtQRAWiF6fTwnn",
  "key17": "zAwTk2kN7X5mwsWkicYzKBKcb9pna4Kssf8btQe2Nf2Z1uWKq6VMoYa2rBVLAuqdZhV1KGqtgTAFemunjfj3D89",
  "key18": "3YExh5BZ7WrGDsM5dDfhVboZdVCFi5iDCDY9gzhYioT2VyioutEmbWEiS2N8Zmk3LjWdsnbem9ecDRWcHDkSZJQD",
  "key19": "uS1mqCYnS1eYAJ5kpPnKz6AeBNRKCtSijHKQxCfrH5U8x6L4CwUxayJbGBHHhkVhf1AXtUgewxQynZ6bLXxyE96",
  "key20": "2BjzvUUF7WBWYHL6xEJMA9XXCCjcM8sGPVYCPsre8oXYzCecLn2mj23bTvkDKmySivaTQEv5b5uZHVqu1eGJD81t",
  "key21": "2o5aaFJwoaYGF12FKsDJHjmaf67f2MVSSUpjWGgiDmTMCRDKNy8mBjvK9JD4X6fCePq4DkiA6s15xguzvpksnEDm",
  "key22": "2WeT3weLbgCGvPABGhLNKviH7QMitGe6QWQ4wL51nj2jdC3RADBRFr8HvXufdg7zpYfxo4uwHqu6DxSrKWtuTeXM",
  "key23": "YarvvcagFDHWeBmcXVA8TWnR3AZcEhinADZnMDaEDT25abVK68ZZXmASCwkcUB3KBAVXPtqTJjzUeQDPtio18ar",
  "key24": "mqC6MhBcubQrocUAmLHWoxg3nsj5xZdUVmtkdNpdoxDgHs6Y8yyR2Dux3jXBr1vwpTKWK53xUUzEN3wMFXUJJA8",
  "key25": "3uTmrDsrE1NU5NtUpcwH9SRnVBqeDtQonVURMqtudq3hqSzSGZ6cS2QoShFnknfFL9PjMG2aqvVsvsoMGjzkYNye",
  "key26": "5DhaRtriNGzNYak7BseA52KGAPvfARjW5S3GvDR92WymqKkmvXYxt7in9zMgDDqyCxF8Eo4eicaFG6dxvcCp5zcB"
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
