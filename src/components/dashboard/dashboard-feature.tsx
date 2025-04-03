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
    "51WT4pCdgDWKW6FGp71xvLuwvD9tLDqjULukakqtQzwC1mgEBuTYnrWS3tcsZgpwcmz8gx827b1wnDB9PhoYAgZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h4Wp5N5mUEGVQ7X2gw6jScG6EdNstCBDiiccY3Xy5S88PguWRdeE6GpRKogtjfu1M7pup1CWkR76DyW6MZEpfFu",
  "key1": "5wbtMLzgkobzCFrTiTYDRNvYja2V2b4vbknE2gs6ej5a3SEZ8edfCFZBpcX59pDVDB91CheFzDbjwKi9risYX9sy",
  "key2": "Xark3qScpoyGhqydeYFqGVQmPgtTJndUx2pyNeB55WxpkJEt2qZZSTD6Y9phEFBTppsR1QFrZuCbmKEjJLXYaCH",
  "key3": "2LVSsHvUecAX72QuBmWhF9CBLAbk6iGnnvq3XHNrg4N3cAUWx4WzbUTP2kHCePAcQWVz98P1LEcmB36UMTsoVTtj",
  "key4": "657TJo7EZCrehuYEEcD8znSq3n7wutj8a5AtJ4GbTvzVLVk44XybFr2qiv5AtEU8Xqq5CRrKKNBkF24c1ksLr2UK",
  "key5": "4ipccwL7qTj5QcFk3EXtkz72rcswhzFWBWMBpoZYMgSW7VcCD3pw8CcRkvt6MmPfmhA7koYouqSruNvbkbgESKrg",
  "key6": "5wtvZjNp38RYifiLPuHufJBF6JS52KvxoDxBzL9wpUELpNT8Mqx5WjR1MBZvQyPgidDVTDeuqEZRYecHtinwzxb1",
  "key7": "64udKBNseuoUtGaePp1qW6PE7t27UHDxbj3hEBuuuSpzydCQDxvVgDR2GmNHRDcJU6Gdj29cNaHzPmFk73CiahH7",
  "key8": "2c9Hz8kZ352RXmN8hW3oH318dvZB8LfRQCgQv4ZvkH6xjMP86CTJKPJrQzA7W9gsehG3ZTGFsBKQK9K7bq7PEaJj",
  "key9": "5F3HmALexJZjMqKYWNYCmP4KHtoR9hKubnsDBDHh3MGBXFeqYEsDs1TdkqyzutcpRHNTFMRLjXC7C6GV3T4XeAJu",
  "key10": "4r5dsPmM4nsq69VT373hgD8dTBTnnZE7rLuTxyMV7NWe44ytfkr56t3k5QT3WaGyeLbcHeagWmwDZNtUrjfW5LpW",
  "key11": "3Toyh1or8SXXxuo4BSYnPmaWDkFYe8U6TRnM2d5dkMS55vTBifce89zmenTwzKWMEroNBRYksfTmrqZamBFRP7zS",
  "key12": "hQyLdGVY6m7vJoHChMJXQrHnJCaCC7gY3Bvyz1ZR5ELQwArsgug5VpmJP3R6bUdV65wpvAuhFVHsWup14tEzirF",
  "key13": "27ihjdDBbYxEdEMygdpoSTGAJWW7ca3wiBHHyaerXkpiUBNd3ot6CdLENASUmAWva7rJM2iV85iM2xWMUoUWaZ8W",
  "key14": "4ZZmpQuZAJ9CdryxYG2Cdt43bKqekhCNvkmj7gCyP145a3puTEnczY6FMybSdgRFvo7bU25kHcqviAzrdJiJBjLy",
  "key15": "gqbPN6gu6HX8h1HVBTf9itrtZ1XPsiWtK2B5g7BSKMv11F3Mqrzhiv9grT4TraozV1SB9F7KCS9ABWkq8Z2KWe6",
  "key16": "3V8bryhzPmNLouKRkEgLUjo4iiYZLPJdGtSx1RYy8eAx3sFnRd4qajF5Rg5fZGJML721VZ6odCJdAMEHsAGMwqdP",
  "key17": "4fj7BbnkxXtKsFYU6f4Z6cp6HgqiwkFutPiKB8xUYeukfW4Dbqp2Exx3PrMurPx9X2tUYbJ23zV9VaahWqzuAruY",
  "key18": "2NTXYHr22kWFQa8Ni7Liwfhp6bPfcpfuq6ALNDnmVoLSBbRZWqAapqPMAKvRKLwuMdKzQNhJiw5S5mx2y7Rp5rb3",
  "key19": "2uaTGP2vsgWrbdi6pUXNi9ho8UXq1JNVYFqGnzubCU85HW1b8Eq7drkJXPERcmTNxSf8DQ7QuGbU2ninSDE95QPf",
  "key20": "nAucpB3BtWNPjygRUERykAemVTZFXbjXDFVNsaAH4ExDW9q8CcgugetjDzdapb58KW1quqhaVmmgVHHLn1uM1uu",
  "key21": "3mLTTS6bFoVr6Mwv7tKr7goKtF3dsQ7LhrLJ6oVKqmSfguwf8aNB2FR8A6KAkHAQc6KVDYia475HFbRsSu353iUc",
  "key22": "56sA3MMyHvMAYnuoCvgJWuvCHxjZi2wYGrbmJppUSmJLqw8YvUvJApzHNNA1h7pocvdoriekuho7Hsou8nJeCUBk",
  "key23": "2r7SvKAWqBjnGNMFfi8rxAFyXGDsBEAuWUWWe4geFfEhxFwJzoQVkuDmTDMZ9oDbk85DJ7G8CvyeNWoLJmJdVxky",
  "key24": "3B9UBQ27tZJwSkcjR4MR55JQKz5G6cY5mCRrFkBYe4yXdQVqT6zxowoxbuzHgkANAFDec6ro77XcHQjYaG8eRKK",
  "key25": "54ycNkFTxp9f2fxinWw3DFrUjWYeJUnHqGSNvrSESSXZ3Be57LAPAvYRhdVd3SJcVVVyeFhgvCBxxjB6YhkvbPYQ",
  "key26": "23yGnj4XbsZRiXV3W6FVmnrJBzVZ71eNtxjUtTyZ1jmfMUVm9ZD62Wi2iu9mzyMQgtucEY8AcoZi7vv9SqdvaNjp",
  "key27": "5un9H7Cm7pMzAHL2hATF5gjXWYnnRnayPSayVXhqpLU3er8eMiWUGJ4PQpJi9riegn7be8RDiVKZNWW6jYWrCARW",
  "key28": "56Uxksv19K7WXRRXvkjsWhxsXJLn7vvWPvJkfbKjz5a5ZJUcwZQnA83TKwfgrPwB4nNx9fQpS8ctXAEKNQSSccAw",
  "key29": "48BrD4aofuh7rLpbdU9chjj9HMYVtyuE1W7fPdEgspACL7DgxbVkJRx3Xdv6QpzbhtpgvQy2U8BVMAGGyJEa5LXM",
  "key30": "2howxA4heQ6bnyGE9wGqyLuGtbX3AfVWCTFWcSnpyqy2br71UPqPDta7YmZeLZFTAqWgfYBpDFh3763RSiEsi6Qi",
  "key31": "3ykd6fF9aG1xZKQARjrAUhsgshCJSzNAZ6wwo1FwATMYHf1BSyjmWuia2tMwjYwKCPHYwFazzaUXJgHd3nu7t96B",
  "key32": "4qy9TjnsNhDCqzTGYky1nbXjX3g7ZWM6kxYXWcrWhK8Z98HTLAHnLBmbM56EU1hfP3XzYTCSDa4UTGuLW5VEYFCg",
  "key33": "RZcY4umHmpmsVuyCw3Lqj6e771Am2TH6DcoDyGMMsuUDbsHKchEeG2Q8BpXkdFEb8YPzqZpj99tMK29ZKeq84Hc",
  "key34": "4aiQf76ntzR2Jash2NZJLXAEXRpjBB9qRg99gVKPVPQNwApdNcFhypRovc3bJ64veDaXzQDiAR9RbkFRmAoHx4ST",
  "key35": "4HydTK2KDdMUHu6AjiF1y6YzkPbFKtam75PzsRH3wFixg5xDSF4na4n95wdrVFh4G6CnRvqjaPVktyDhhAHoj2UW",
  "key36": "GpimZAD5cPGMPyFn68WtbTkyNtuNCsiAi6VzDJmycGv6PUdhAH7jHKVpnff2vNyYBqBVNymqPiEKYRXZegsvFCk",
  "key37": "Am5z4LGYE9bkYCmcCqvGhTJmrQJNvijxuq319MbFuThrQpH7v9Bj3bNsMh4ZWWfb4MtmEirjoFBjvghZwLNv6Lf",
  "key38": "F6PDNATHQC864ppBsjRkt9beEnaAGkiwXfmpTNYBFMYBxRCbth7TGWRsW2rVFqK1ZHe8LscKNYFRdMetkNn4yu6",
  "key39": "4sSMWiHrQzUQmiAqvseSxV19rWdiF2vfb5wFbNueVBzuFb12kQ31FM8wGYhmrT8uiYx1DQKeJcGDGSBXoek7qiFn",
  "key40": "2D6D67djtfkCkbk2C2vT9BRyPsiLPF9mb3qfQ1G7zaEURa4rSQVupxek8XR6ri5WRmR77TWadoGbTJzcT4zqasLZ",
  "key41": "29EMPyHPRYz1a4oDud9FxDbgG55pymakDzqB8XGMFVY6GTJ13N5RVbJHi158ihjbz7Nnyfk3pnqaHv62iXPnErhu",
  "key42": "2b51zHf9rFpqaSKhjGtkWwXBxWZeoCqETdKEQeb8iPPV3suMiF6Z6yudNRJVrAzp3iZQGAwesvcj73DPnWzox6R2",
  "key43": "27zZajCWzZcTKYSvw9oF2Gk1uSmMkofh4EFewZC81LhqUvtXP3586WQ4ft26kjLCTk5XZfi1ELbpVdZ5SQBAHGPC",
  "key44": "2nJhSM7QsBzo44zdChoHwM398FRScN5578FxcEfbnY5NTtUz1ricjf3Xhz3AqxiujiAH9RRgU2Vz6NgtxfKbGb6"
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
