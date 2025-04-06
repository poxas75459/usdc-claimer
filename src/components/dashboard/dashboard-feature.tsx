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
    "nZLaPaDx9UoNUM2ZKAgmCMYSThzriffiGArYqzMDBj4aHCmzTRSqfGerQUBZJaVZCWZgFFkymbk6zjEwAaDVPFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yh1iaL3cUPC53GGnGWyAKqmQcyLnNSLzuqL3nR3criUXYkXypiEqwEYvbENBvru1JdBtVKm2LS6bXirWYYFv1RV",
  "key1": "u44rnBmUPj1L5gFhVBRyFxxkBgADwvvtgUbJntsAvDyqyiyp2jmz2FXEzGV7rV3nNjd9FUt3az55GVsP4XDYzmC",
  "key2": "2ud3AUwV6LnK1onZ94zkk14x9NQopemto1Tb9fU4ntVE9AAJAYAFsgQUTPsR5jpXb1uyziYEXby2RU4o1g5h8JrC",
  "key3": "3Tkp47MahaASfo9XTVm9ZQn93CSbicCTMyhPSJLYtCaXLgjgTxQeaozZ4WgoYVWWTqeSrrUjWf3RALw486mDQWSX",
  "key4": "3Hwt46k7UHJzPJUucRJdfjLAtGLfc4z5HdPEqfjP13dyVymenE2bK1Q7Uceh1aKwgdH3yM83WuSUK2Hvd2bVFgVN",
  "key5": "3jBeby8qtkciNp6CzrrigAdgMJEij4h4ovtpecLDPcUAG2F5VSQBpYr3QCJhugAvk4ShmjPky4wCJbD35UfNMMJ2",
  "key6": "2YvA3jmWLe4eTAAYdAxAQ1QBg8KGZ6ReoXy6B7TitYNYX1YX9BHqE76KnpaMTr2toHedxQAc5R7KTQNcL2BxXdft",
  "key7": "3xVQXppWG3ZHzGh85LoeH2m5G4fMq3Bs4TiQqnxr5CmcSWpNmK6PULcwDc47B5RFxGvZDAAUaFwrhctomMejG24a",
  "key8": "2S8NHbTx53JDxmPwzmLGg2MkS2mjQxJrCJtzuceaGxwbH3mdhSypFGNM7PNDYNUz7DBPU3WGvqt4WUAYZiNxqhtJ",
  "key9": "6RGsU4m1YrFkhUJzjKQQCv9Bw6nA7CwzbmDB5Fu2o9PKMP3KEXMkEtYYABiuMiaB5zwpjNsfexmxT2HTJGogsue",
  "key10": "342W9qXxJJsVbdx6tANjqnAv5r2pdxJVHmbmFKfqHYewUV4WfbiJTEDxWisyYTuUkhJ9Xnp85g4pHkE3WGywESVw",
  "key11": "2ztnMFDnKGM6mbHDA7rU6xXKmZ1Bt1AhUXTxQhdQVSuDFbB3M6ajTC9pJsKKM1NbrPCdVpS9mYoV8psLSfJkv4go",
  "key12": "3Vjrr7F4wTEf919xfArV7yM5AU5mCUDBR9bKpYokj9aGLHCGgr23NNtvRkFXS2KhPtmyq7DLo22hhVMNGb3Nvjqv",
  "key13": "rkCcF42JD1KrfRmWwNPMiAs1y4RbH67jK6kurfVXC43myDnAKW5C9jsA79sALZYRm66ieNUJjTQjpQLvUq1oFhp",
  "key14": "2AJGZtc3bubhkJvviNHDvcF76QE5rHbYUpm8zeXXU39C1kowi7Sq35chqcY5YmpTBYtPMKGcc3U2Sh47gNzYQb1p",
  "key15": "26JFRLxQe6pLAkVNz28T1CiqG8Kmbtb5ZZpS6UTTFEin4EdnoQiNgxZDFZnqTBBDWRiPYqtRuQEjh381WwZ35vwr",
  "key16": "4BF82Jn99aa1xZDFkRqDrxvnYBRt2bbYVXEdzc6ZNwt9t2sMkQNUXJjQ8KrsBsuvQaDuuGhcMq4GpNWJu429TjjX",
  "key17": "3T6wuApFBsVa9aakBszvv4DLgRhfALGxtcH4rXGtamQGkD3g7D5LWMuf9MaHJ8qschUh5EopWpfPzYBUfLWHLjz4",
  "key18": "67598SAYhN8pPSPX5sog1nuqUHaLLp7HNG4m8VW4WCE6JjFnn2woC8tsKdSX9qTgx4Ds9WcVnSTokqkRBEHXMuaT",
  "key19": "3kTNk2sq8irccEG8qaEdRQz6RRYm678wBffRqj7bect6wwK3PBHqYUw67dxY5TvyXnuHXfuNf6hqSK3SLqqozQGN",
  "key20": "3jkxMUVodNFhgfm1RbLtK2LDSYuQCzAyAnNWnPNDbGAMZVkNBjmV4TKRDVf5jPpsBLQspoJuqT4AKdfx4YecNNfn",
  "key21": "TCVs8JT1Tiid3hvrW3G6k3B9H2KmWVLAkKBgxqqu4qWUB2u6G4R9QQ1K6orzfFffx8pGXCFK8MAnXScbMn9m9Sv",
  "key22": "4ZXtxPBddTGQu2wDUpik4d2JQd7ymoBDWyBRfips9Kp2vv1TzN55VLs6bbTe9ojr6Pzqj3KJsypQSuwARgMrXja6",
  "key23": "4RiS5yCCdbZ8YL68URjAwzdjVGbmehiFJhmfMLq9bzhP2ez27neAGLH8yJdLtnRLUD4gYkyrAFaiFjb6bKrTzMHd",
  "key24": "3j5httgPJArpgN15wvLwqebq7nwGt4zMjttJxD9JL9iFvVoeQMMBVX6DzzU3S8N4369tAFN5KtazZNe4vG4oe6tQ",
  "key25": "xEMdW9qjJwpPAJjdGg6XSsxYHRJQd8Mt6xHQjCvb5zdgj3WRNz1yyfU6N9cYJX8xh44YgP9sos77K6dis42Zkxs",
  "key26": "47NBoQdupyGuCvmPqHvF7DveP8neVRQLeQpZWYwKP27bZZ2AfpfcDVW4pqubou5pwDsx3b9M126EhSVMCeQZftaF"
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
