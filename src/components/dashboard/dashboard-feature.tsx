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
    "5YiK19rVgHCDaMEFyDUtGWLfCY6FQshU5dUJhenyDZ2h8NQxjM2dVBawpsPH8aH7JFMDDMejwG4tiHuABcmCN47N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36yA4HkgWj4hT6nxZKDVikMuvbFwK6v7nHC43gx588KDwcbF7ALc4CBZTHkBLsG9usykYqpGxxeQaJL7dGcWyGp8",
  "key1": "3VSv17GkCvZRq5zTQWbSSwzNcVcHyfc5WhDZS3eg28XsbH4cmGWFUCHzBMzqPsgWDxgi4xK2m31k3hv4bhEH7Hgh",
  "key2": "54eBsS214sgLYdS7kb2fzfbozMHjns3gm48aFUimspLZs2HBmwmutkNfbUE7WB3Xiu5phn1dekv9Uxkvm9UQYYxx",
  "key3": "4JcfkeKGmuxJvtusk8qgnrzJdjKMz3uDytuedP4Su9P7y5wN94Pvq9RUQt4ZCGaHjHBkAZz5wdRo62kZDmUhiMBR",
  "key4": "fN8NTQf3LJp7jn9eTmDaQyMWKG53FkbPdfmE92LBPYK6MBom4isNWzPRwq6itpyYYfRFVMYA1fLRGhoZRDKe1T3",
  "key5": "64pyKrErZVG1cnt3RQiyvkz47ncnRTuiDm9g4pDEwkQXkvRBaCDHDKX5dYG1LpBCTV4xCisWcpjPaAuoiT95LpwM",
  "key6": "5ttzCFN9RBSAhfC1FvNY6qrnjzM6oj6Miz763zxQRuitmwmnKUUxaDCRBVhY3Wxh1pNHtFqC46cXiwxoML4CgNE5",
  "key7": "5Ju3dYTrkeGruakwFy3Q9knZ8tj9JcWpAExwAwKDP9PDrPgAZSY6pmQLkFvPDcV54xXF8qgS6eySLgzcavfyqu9S",
  "key8": "NMeeYqqagHBAEpQbRzx2hx3Xp8gep5ZbzN6dQBM1RUkByRVQSu5LtguFVNkLvca4hETgLUs5LarFTNVY9fpyD1E",
  "key9": "53A5jDhn3hNtNkYCmwYaEz5Xo9SbuDkHqEgA5BmkAP25WyuEv5ru9u3EQ9oYG8JWiS288KPH8NxNVGRg1hyEWtjw",
  "key10": "5MbA7SWbWky8kiaQncpj5DStDN25Dn1WioAmSfnMFq91bvwuEtr2qQiu74VYUqxeTbfLTdw1TUbHmLJpEYB3EW4Z",
  "key11": "2sUxAws81BXj4EGs9Zao3NeWDnVqe1NZGy6S7T9a9qdgHmk9WsZMgwFhU5FmDFv1wAvaB5FL4aE3UeZMCDubYibE",
  "key12": "2tN2r25yfC3c4MmGvhhcUd554BJ4xfKbY6S3y45SGvrUThz1TpsjJ4o9n1iFbi6yZCs17sudSD6RoUHTvPuEqUtV",
  "key13": "aUjgCY6ogswmPBt8vmd2Hn7f4qJ9Fyi88ewk5uZWS8rm6B8mZDS2QUJrEHyKdtT2UY1n2UtCuAHArwcS3sZ9JBa",
  "key14": "nKzdRhn4hXX9AWapWDeQi3jr6TvFgc9cvzfFmM93FusxgN25b8HCwrAYC6CPuY9MVt9LKa8KansH67ocjFccpdD",
  "key15": "2MaTTeiJo8nRejqBfDrHgCg7d7FrBgnMapHB2FTwojtQbwxJJsxQWSjqWFhTkRXJs2sKinQ4CbWt5Z3JMBRPijDv",
  "key16": "5PTVSRXZDVdwXEQj6nQHhuQu7fyBUzAxPehKU4TYntcDaTEx3X75KwPMbsi196x1Qn7Jmf99jw1RQCqm8Uo4GivR",
  "key17": "3Yh1dLp8iticKYX17EafTuqXBQ9grnyLNknxRWP6aNerw7ZGMDwgiBxLQg7UGcTAKxpj6ZMtUXxtn7VH3ExSC417",
  "key18": "2sG67KsUyHHHfFxA9apBeZq77SJZ6TneHMtCUu4Xwvqjx7CZX2QkuGMCE8juhvvMZE4sWsECMKAVjqXfSSiEvt82",
  "key19": "44tE6MbGRLkvpTMgsAAuPHXeeryTcu5LacriLB6ng4f2RGz8Wq8TP6SVijkSWbWkiFWcjhUgqSz8DNSEA2RY8gvN",
  "key20": "5rjfd1EBQYnMZyJr5xUdor1W48uyKFFbQmNzP6uTEQgrjTtQZQVWVuDiqAi2CLQhPA7ahg34q36VFQQnAiZM5h75",
  "key21": "3kimb5aYmCqHTDsho68GcvBtvK1cwCGR7RYc1hGt2xKiAs1amQYMP4Thhur4DGAmieciRpVKTdfd7qLtZ7VJUxaz",
  "key22": "3FkkbKddid6RbPRXm9spEEw4hF2PhyM4zeAx9QMCvpE3bHF1tC1ShTN5a2y8vpfMsihCcm7dc4XHwfG1MgjZuLwu",
  "key23": "51CUtft3ckfskhNrB6CF8cBqDU4eLvPKq7QKsUpwNuaYJ7TWNSH8y1CdEEdfYPktc3PNsydzb6sE1KpgztU4x69V",
  "key24": "5o6WSerpb9qXeTscn9camrDmuowN3sJhNbX4sBJJZxo1wUVQtMuwAZxqhKbyvxC1XsSJDhVVXiB8vmV67gQxPs8n",
  "key25": "Cf1NiREhxJtPvkpg3fSS4Uvh2CPSHc6GU9LPGgYBnLnSFUQPDKH4T6vQmXfeMoe86vUcREdt9Jhm76pCJUYiFCz",
  "key26": "5mb7TFPHR1S4bYhguYZtWJhr4jD5gHanVZ1MHWHYZ1RZQoZA17k19wyyU8AHv9TyKYDtZ1vGreJ9wKM1nQr5Vhbz",
  "key27": "32CVaaJ8LNSWb7Kz1nVdo8EtxSeBugSCg5uvXaES2wNF37gSYXGFRuoGJVs4yD3Hzpns1hN27zWR6bUw1h9XSo2m",
  "key28": "584bs73eUw2xWQQQzkqB9B7PcxBxd6D4SyNfoVXZ54ZMQ6eEJKPKH6pkM2iJHxwt7xuHeVMWQGhJBGJGoNdeYfRy",
  "key29": "3sN2Kxb8dC2aQYhcqBesfiq7FDShNwkzMydpSSQhPgXqArhpBokAdT7F5smofFxHtY1d6XZiKXysPXAhmf3HFNGE",
  "key30": "5geutpQ87phbEYZT6gRg8jW7dWNvVkm3nJuubBAiGNrx9gyeRSRhaq8TrPCvjR2UPDjhvg8CZnM1K5tdWW4PR4oX",
  "key31": "4ZVQh8uguKNnDKWxDdrw87VbUzsgCM8ANHLnA2VuHxjmyTtnrF4QGWZKwu5odRkgjA1ShypADKtPXDFL7FcNJ6Lo",
  "key32": "5RnCMAZFLhtYAmYuhaEZyFSzsjcdBBYaVbs1J2SbsHLNkd3pLKGcxVpXBgLkskbzNpn7oFn4zq2jefadPa8TkuT5",
  "key33": "VGGR429thAEyTfREVBZK5meBg5do9y14hRpsKbb3NrKz1QySXcghXzL3rMUWDR1feA2pwiA84P6MyKVBxDc64eP",
  "key34": "2JxELmNmKQD5isc65iCk87h1DrJgnBybgUVpjaVrL9tJoJP3nwxiK3dHVze7TzG7aaRq59gn4ZbDHBPExakUptwZ",
  "key35": "en6BxEJETVxftqRrPGvLcdY564UvjXnj366XM6cAPU33pp9sLvifCFUj8nTzGYSkwyy3ZTPxM43jzhNp3XUQrmR",
  "key36": "2zg5tYjRHdhLWMh9Kymf1zzStu8kV4afFFw5Jki3jxbakFKhcdZh92Lu4vnrngL7LzL4soKaT28M2xuW4QxR7aeY",
  "key37": "2nxcaAjH682qE9g6G8GfrDve7gZ6GtLAME4CmjTSQKq3DHX2G27LKGPTKKakoTXdJnpfo1PLQ4NqARBBi9obeQ4d"
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
