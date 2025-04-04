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
    "542YWfCn5XZbC8E5KgUmNXWcDbZ5XAYjDBiHuzSA8oNKSnJAMztj1W7MTiwyEVbjtDr4fiecnwuyVgGG2CbM9x3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FqLufz3w7BoPCdFXUe83tZEGsQPaRtUyu9mygde6yHKHza7RqxLzw858YxvqBHYrm2HqdfD3BJnx89EGzwQyUyF",
  "key1": "2rWYCTny2NDi8B5yU9FuZt7qjA5T4YNcCaBUaDkQTLZzbpDLThKSsZW2r7iCTnN76GkhbChtiJMcTpQdu57zhPfc",
  "key2": "4CP8G3N8f94peLKcuxU1sctzjY6tydmpxtnyvqc5A1ibv2R8AhHHD4aGaiw5MXnXnxeQzeo8HKhJWKpSYUhVDFYA",
  "key3": "4zLQccqhyti3pukbi5jrRiEWmfV9vG79gNH84zG6caiK1em3zLhBubYksJJmfuQKVzipCiT6dy1VSvXPNxTPCqEu",
  "key4": "35hNcY1kXyAyoHX3tD58aWRP2oDVpdHxhs7Xv53AxVurcP4dMptnH4jt4NYdS7NB7bMcKQCLgdmQfwQRimPWTS2J",
  "key5": "4aDQr7GMpRL5jfqTNr16aaRa5PD3SHWQYT6DKt8VzyA1u5TXXjfYjwUaakPGUo2masWiVGg5pq9Yqkt31JHmdTZS",
  "key6": "2wYZ2SDbDRs1tHNbgsR22UwL5gokJsq8ZMzAXeCsZe6qc5T3Q7Ls5cSTjFSaZ4J9peDbn7n2B4ivcHzBDBHAx4hY",
  "key7": "3qnzrSr7fpsdwJ6savqeovDGDB3qK1rzVjvHHfyqyNAKoH1stWyKiDmhPpmaHSD18yqJpgE5mfXxtxvQAa8jEe6B",
  "key8": "2meoSJ5fu56p6R7gCV73VLG1K8HUYm5tjDgYV7fgpRXBQwdA7fPEvATnbnKj42jaMwSCqWBbCwPi6LCsLkYp2vh4",
  "key9": "54g8bzK8pVuyevByYMaWbJRVyc5ksySCEhmZKzPJDY46AqAZT7EyDknZMzcw2uD5raryPi4kPRoQ9UowdKNDmUst",
  "key10": "5H2R43GDUVdxHviSwdSJswuDtyJXENDvzP7A3FEnk3acRnz5Q79Q3hhV36Qu7P5QFmMFiFNjbeGTwTuQd2YzfXfS",
  "key11": "2fWH1Q3myuyNtYFuTLVVy4Ukrdi1X3hRL1NMqstb7DazBtJXjRgGJKc4C1zRmwqny83rzaVeumAXKDLdYMvKKraF",
  "key12": "3eUbnwgwBpRPneihqaK6Fda9XVVpygSCrBT5QTZBYZwUnKtygN7uWk4P9Ldw2XCVd2AA3fzoCxCot6bdUTXugUQz",
  "key13": "suvJF4fP1zgtJTni3yamzkCWJCyvASMYp2Ej43VJqgkuw6XEBFGPXgZ9CaMez1sTYp8qVi5Q5jhRLuoUkRjznAj",
  "key14": "4GT4nQoqFFUFmUVoEdFRoWa4d7YhPVi2RxrDNxCY53gyAuSivmrebYBHj5SXwfCHnDafqytWbgjKqRrDxQXjwVTm",
  "key15": "3xrzkDwZNjRhdpjdFcU4bcyQoivvcSbd2NGVkjLsuoU4G1JGUHhCDh78uo8tUZdjFKoWshrpdXJ8MmWUWx7ExBdN",
  "key16": "2PimQefUy3rTV8ZGuXA5vp6x4YwRYVD15EJsFNGM8d92HpJsEiUJZQYLki56R9NSYrUAh6TYKbpiwncgUdKH1cWr",
  "key17": "4ntjjqnuMQnh2m9U64smtPch8bFs7usvK5wLs7XMfA6TBRB562tmWq1qJKPpD94t3KPsfyPfDDTDk97eS2pTBUmw",
  "key18": "orBwyuHwxt6QgXEuutxJDhxXppePRkSmSD8PDDcoYBze3csGg3Y7Z2TYYxhGHpL17BpEsdbEYrJQte51k1xVnp5",
  "key19": "3HWZd3hU1BH1aXYGWbhBqNj9SARc7pkTnzFNgs9onxQNkYEfcjgmAVXSg6vWhVJ5PbHXZggcdYaNdYhZ4qYB1DMb",
  "key20": "2CAZpV6Nv3wxtj7XJytFnsDeuTnr5qD8ikvPKoJbPRq9ogwJnWb7xEnG1HetTQcndCwVB5pKDqYVekT9QXz964q1",
  "key21": "5ooira6L2M3RcUhNUnDgS8zzFN5Lz9XzSiRbvVbtVztppguTiD7UT7KTBFHAY75jrdbzVMs5hZsY1CFAVuNpjE8e",
  "key22": "3GerSUFeGaCX3mywWvk4SFooErcEuHmNUapfujWnwttdkCP1qbk65d5TVskMceAUQDwxyHXrJLPusriqtDcCJFS8",
  "key23": "M3rUjRssqN93neTY4eFqwfptvLZFjpXZFmzFyiiup6gkv97DHUtwogfsSwpNMtuPJQ3UTnjv3bT1a25YdhJYFp2",
  "key24": "3SSufzCU7i8uFXLMLzKQRdrmxaC6ywQwEtDucoFUUhxRGZtUQSdK8HmWkQH3PUuzvqnprYBLu6RLnEeNEzrr9ck9",
  "key25": "4XwRrrrXWJa3vB14KVVuZGSJM97zXVYjic3aQxAC2yFk4M6xWpPSM76oX55wFtDwAfeV5zvV66TFRfSQ9rP46Rb8",
  "key26": "5MzRTPCoK2HkLHFYrFrK9jmu2D4mnHDxU9RpwC3YoJB77QFfesy8PKqNqhYmvqUUkrV5SCHYTr5zA2kHtMNY3Pm4",
  "key27": "4LFTTkrGnxJtiELLkW21nWvgBBybGARdK6UCbG7GgaE3TuTuZX12q2NKuCTyjKsxeTQqmuimRXWLrGnaZ5Nrp7Xu",
  "key28": "2CbGzhFhNHLzdeX5JncZY4cwcEq1ZixPHXM4qQa1amUBDk8dtaRrThxthyDStZWfRM6Mo6YYLMPgYbk6RmyMUELU",
  "key29": "3YY5kKr7D8RdBKWZruHtGZWCWrCZwNQWyFWE3nihXaEWdPAgMNNtaUNhZMqD7kGSg2R1NNV7J9baJeogV9P8Z55T",
  "key30": "4zh9zdKqLFVHCquSTkR6CX1VH7PfLGKXharT3qUL9n39SDvgyofHQrnf7pZbyJEg7MJaHVpvBxhENVkJGQmYtm74",
  "key31": "2mSYHQybr7wEcsXnmNCMsS6TRMAfzKtQpQEaTn3Reg4sFrbdY1n6VUiA3yPqARFsNJERj1V8q9m4F4wpKp4REir7",
  "key32": "CrMtcNwX3Aa951ds5aEim8NVtr5oRMViP5gdDzh6aWtwAfo9uDg4hfiwrVuwx5aDAaMAz1ohnr8j7UG7CQ1vCPv",
  "key33": "M5XTRKvf2atRyNSkfbN8pnVQBwnE1x8FkdD9qXx7Uv3Q2zZ5tSzQwYFZjpCpVZaf1o7ooNxVDDFzxMNDEyyiM8Q",
  "key34": "3F9KxAmocV6idApkVPM9V16KxP4g8k827DuhrwpvnHe9K11TSu6kL8jCtpv7fRxaDAqu5599wtMAyyyovkpNh2md",
  "key35": "BDmmeMR4cLawEv1aCsUJNgE3dRVwtqmhDYHEDdecNqZbvCtvQwr2WnHMgZaWs5iDZdmP6Kauawrgp12Nr3kohk1",
  "key36": "5ZfZb27VevvfmL3n55kw4bSB91AFBxsmqpZC2uZUPYKpVYtx86gNjx3vJc342pYE3461GCt7u9eTEqZ2AuHRcdoE",
  "key37": "jzx9af67QdF8tqAjLjr8mQBk5ArA5bq6MDnFAxnc2Usvh5FrBHXYPQtLY5aLkgmAs9w9uMb4ub4CeiVs27opc4N",
  "key38": "5iretzcHVj53LaaZBEjqLDfbDPoxxBU8CwGygvEJ3encVfsbjS5hTJ4XAjCeQeAxyakDDAiPkiNNCsfZHKzpqnw2",
  "key39": "51umao7bpUsaKunCR18s86dqBDcq3rgQhWAMnVJ8qnQsfL73TE7W1D6PtPUzm3rwMSiwVWqiT4R5cGCY28tdeRZN"
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
