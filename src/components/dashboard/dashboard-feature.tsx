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
    "2ChTSAFCTPMjgjVa3iCAMd19zneWE4wSkpiEojBrrkyJUkuDNGBHivEQcXm7aNCGKdjnQdpGPuVwfDMegsirJ1oE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HEbbZNNqUBoBRzkwvBxFTJknd4hn6oZm7waeemV2RFcmpm5LujxRo6T72W9RvTTJyLbeMjiwp3doHeL6vvgRugm",
  "key1": "TYcXEx3ofwPKj7edh4cgnu8iH2DxWXaDfbuyX4dtq35p2tko6mMEVp2tE3U7riNUYTSWXwchHd6JAP5Vgdz85Ae",
  "key2": "byiHxjXT5wxz9WFETmpjyKsh9xuXY3RJ5hmyb2JK9A3hhYrVEGA7nENGbdeVywedN3R3FQRjwyMPzfbSfhwnem4",
  "key3": "5wirzam9StnhSVBckR51GVKTvDVKykMvz4fXv7BWgBGFw7hVm6fkuVw9XnzUqLToTfmdMkhgdkw8Fppc97VJhCxs",
  "key4": "5GtkuwBsVeozW5iRL4cQa54Ru1eV4QD7FPPkvvWdphdu9tyJPqU8CU61NbKTGQtTUhg4iNou6DYi1RWREt53uY8J",
  "key5": "q3FKnykF6af9x8DNgFhGjtzhzGTe7mrnLaPnY5uwiCNwk7Yjvnu3U3yYVQ9qJ1byRmTyt6xwgUyy8EhfcikBy9C",
  "key6": "45MTuwFCtm4NXDaNM3uE3QKiKAvsKx7v8Wu8xhQys9nTqT628y47dwngBBzpaLDojjCTVqTRx4nex4TXAJa3akKh",
  "key7": "5TpzUSXM4VVGXXo5BPMe5mahi9Kbzaj5uf1TP1mZr2GVzjgrMniATjpdqZt58VVMST8NebM3iTD6zZB4fk2Ye9mi",
  "key8": "3YBogJYAx8b42q2m9n2FmhxEvYr3YQt8ycqeaKTYgNRHxB7VMstprpZnE4xGvuW759oFMnzkGXMNVSrvHjc4B2E7",
  "key9": "nFDZjnE8dC5KvM29vwGYoWLM6MffkmHiz9AH31ht1MzwQUq29Xoid1AWhnhRXskGR3BoXPMqftA8UkkKWfwMuQd",
  "key10": "3XZ33Lw8rpKXyNaX48DGyN6urXNzgjdQEWpCQx4pfjhDYv4z9nNJb18MNdDNzNx2UJMZYBhjR11LoR322iYKmVeS",
  "key11": "2etsKqjJVqP3JK61ECn3xxP9EjFTN3qZm3CsTyv4Mzo8ziBRzF2TVPQasz8Ex7vKuUQRfiFNE1KrF2YvNjKY2MPZ",
  "key12": "4JBSWdKqh9GEPEjLGJbwjpqd65jWna3tQR7afg6nVrKMx4nTX9imJevL76fj8qZ5YiyL7Q6JgAZE7V4UPDuwXHN5",
  "key13": "48ScVqb9tY4Szs82c1MWtEvKXSYLEfSXpb5UnE6UbYWLmnFLjznQuuRuMxQurqajpNLtLkJJCoPeZfE4KP7d2qXY",
  "key14": "2UvXthyWMoAKZYF7Vh43SJRDXqndADxeWkQpwMLsgjZSa4Bg464coWy2LAFvCCRk7fKw5MX6uhRU8mHTxN4QPWwa",
  "key15": "2W99vk27tMY9b5iFH71kvPXUHeNeUwPe4ocuZLMtL5tZtpSivp1WZESUcsxq6dwngTJziAkNhn8W5WcqNi4yCE7Z",
  "key16": "2VWYW8Aae9L14GcacvHa3hb6qqq5LzkzCA5nbKD7YoVeBUSia8XYX1kfVW8Geh9EoD1mAFnygynp2oJCvqPphSU",
  "key17": "5o27CiQHBrmQEvTA2bWWvd52m97sFjh6zAAjGtEqzvb8MrCfdcMdfQ8Xh7YKX8MoRiEJXa6LkkAaNJTRuctyF4BZ",
  "key18": "5dA5v82a74k2rxFA4RpVkebgb9MuMkpU9k8nSX9TdsddbURjF3m6DRwx5b9PqC2GWdzKsbCotkaHiYbk6erD6pWL",
  "key19": "2VDdaH4cFnjoY5x6HXkBHVW5Q1hWTtgFDpbUhf88Es6Gc87UDuEdGzLVVqGKyCQXCig46wHos44z6pZoGH175Fvq",
  "key20": "u333buVG2jJDtH9mqvRYuCVxfDvHGhjvwv763knYZesbtzLA1zyU89Rseht87oeqUXqFBc7UJm7cmhRjHHQo9BM",
  "key21": "2UDXhCsmSHjhNZKtoA4z1DmhjvEvs4tP328WJYeevhEWwwBbsznWoexLdf2aSbBQvJM6yagxBL5PfP2t5jywtC1s",
  "key22": "4JzogKsFpzCVaf2LpzibgPepsV2eeqfQYu3eojcGcpQ4QULCuaibk9ReEcUH9JPutBxRpUCy1LUtb7qeyFbwXgY4",
  "key23": "3mV63i35sCE8dsVkrXafqwpEJNR5d8rgAsF8hXeVc64hk7g5rpvfg8uNNUS5U6H3GDqFb9dtEKgtnPGvwGk3j5XN",
  "key24": "2jp5nUcALSKUAxCRbpuyRKfJxEeFw1xV7b1wAtxx7jijeufrLo3gaVzeQoGuU7wpkoZGYNFwtEXkZEyCUgS8qx6S",
  "key25": "5PcnGNXMEaei8XV3xJ25RGqrkEypXMLi9mepFGHAQcG2WTT3aWiazopWGSd9HA342GiiLrHTQUsXnEr49zWvMPis",
  "key26": "5A8S4pqpcgibzhVtyeQTTqm2yutjSwLGMeTNyhFcSD7QLtonnj1tFgj4YHT1zRC4GJ8xojqse2oLw1paa75AKrrm",
  "key27": "32c9h1oPxR2iocamykgebFPu7z5CUsE6kYUVaAMhygWakYi3d7L7UXnWsxwWRJcGC6qDb7rbcK2b7m4SVu3i1XiE",
  "key28": "65iX31wwr3pqZVkNzPnioXNNnqh5JA6t5HcNmGRXAqA4ctQngZxqn31JSHcd4Gy9cAvtX6KvydXgKR8QzdRUBB99",
  "key29": "4a7JMkRyw7ooUKyNZAdsbMcRQZgez9aNKhT8NcJqUnfJsWQC5oFbTk7cokX1yvd2hWg8WA5hE581L5aS8ww4TkCt",
  "key30": "3XBYAeDt4KYuz4y4mnSy9rqHHEaJknEtj4wmRpfksc3PTPHrEY2zW4EMrgrahGdgB6eaGh1kfTch2pgN66LeXxxf",
  "key31": "3cAXih6SQe9fTdj69z7fEqL8eJPT3B8Rz95qJ1q4TWB7YiLDxATnWvvks4ftkZ4xgU28zbgbFhaNny3tMS39Sd5u",
  "key32": "2pQXdgxnDbBwe7oqa4e7kXEwrKC2DizXVnMVJ6szCsgHUhkcKGwkyYmiRSnGdh3Y4QA36mBKj3zR8xd8PgCwaThU",
  "key33": "3Zsvw5TSPAcHDtyNEp7ipd3KBDQrWV1ELPqsBxt8obrrUYnw2kWK6HhrKGbtCJXP9Q2r4WujcZbtVDc8hdiss6YD",
  "key34": "2SAqqXi6QKqk4CTsFJsXVPS8cMhDGcQT22JniJrhVoNEDtbh2LHZA5BC8iB6NCvus6ujR8CczUsUPTJfL6xFy9iG",
  "key35": "2pF6x1Mr1oKZoZxHtHCNLMkGYu53pXLbcTAVwcbhKQLDrFDgFRwEuVrZb2Bsjo8fNGRpjJGkgqGr5CgnVPN7LxaC",
  "key36": "4ZcJTxgPdJQsrPF7MYR2sCdDNJaPRQiZY5HNUjCkPviS6EuTU1dndXWSxUtgM7XUPphTeggCNjTRmXv6rt9Can6x",
  "key37": "3SyAYQDLjrSL16GjW3VvEMVf79LcXmP1QstULJtnBpca8g4dQKt5RdT5huToyp3oBKQKd9SkG6psFNWzgXrAeuwh",
  "key38": "3nWEz4H9X5t14Ga9W8xjLPE2RdVrSFxgSSDqDxd8YDZXByVBspiiNEuPzWY3v9jKLbGRekR7uFogv754wKo1gAUu",
  "key39": "3gfWmE2C8CtrtU6NnpySPQYMGTHeEJB48APpkKwkgB3xiCgEvDbBaPeRbLjSzasbMum75NvDk5Zj6zhjd3FhZFVV",
  "key40": "3hZH4tZG4pjQEuCDTr1VvHxE3o4GXUiFfMbZnk1GiuSDzPq2AtxdobPvjbmDtG9nxUAWqrSXpW1Po6vq4XpMc8hm",
  "key41": "3T2wv9LDQYnDWDBftFZAVtp4upMGLaEmjiQbbTht5TWLv1u87xzE7TQy3H9MXZETqR5SyTvmT41sznfCaKhTjTtx",
  "key42": "2ysWCCKKXb4vRw2jcBL6g4eZt5TmZ2rbaP5aZSK8bwCu3uYNVkaTJkah2z3zWcN4Ttsrq9ZTFXLEWrK5dwffiegr",
  "key43": "4M7XXbZSgnY9UbjZ4fMVbbtNxu6RPtUtyiYuX8ZYxU8zfSpPrTFi6opHT4LnPd5EDQGqm3RdKyjuPQRpi5nutc1D",
  "key44": "3DwymZzihqbjKwuX3Fn8L2uTxmUofVMfdvnxmJnEN8JctyNpvhLrUu4i37yKguqScaMbxzRZ4JsS7tgmNAA4514N",
  "key45": "43hRkQsDjCUFPcptaKfgKkVhtSbUojQ5yYhvyxPcMTNZP8yZPxo6aPTZczEGh2FHAVtwrhPiZJPEBePyWfCoZ94V",
  "key46": "AtdTTFcYUiy2xag74mnLEAf5uY3BcJpuD81BfwMfj2NuSMT4vggd6anecA1ZYxrEBWLPPogEFNfKqMjdqm88aHX",
  "key47": "QrLvA5kNtxBFPuJPiU5efA8kV295bA5Z71nqHB49djJ1171mi4wZ3cjYe3KNMCfRrREyFayhZtiYmkPVk5ZxkmS",
  "key48": "BPjDgiwwkjZwVnDPdtXTair4E29cMHfrdER8Gd49YRwRuXTbvaKgmVVwzDHteMSmH7C3dNag5EX2hT5QB3rLRGC",
  "key49": "2J95BY6rHbftiqnzNfV4w2nu7dFQyWjic3fTXBAkBcMHJc5yBTeyzczVYQ4GpuUkePPJELr3yTMcJb7QEt2Xj99m"
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
