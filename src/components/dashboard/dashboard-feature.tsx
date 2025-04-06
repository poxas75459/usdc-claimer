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
    "5ZcwVg1hXKs1UBrdzshDgvsSmNtPeyMwgVP4EqQgsbKqVnwU8soehmRNVzYeyjbeGvzRg6qasyUii45xBTQ1VmLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WL76wqzRkbooGXc7ipiVxCtA7WWqapsrJTcLkR4U83D1gtn8v7ymfiUZtsNojoFyonXL7TzCLMNQB1wYJo25bSH",
  "key1": "5GVrPenSmUtkki3PGDXfkgs6LDqsyoz74G9N1B4d5Yj7dEAMBC9Y6PFDw6zQBDdtJqshQ3TM4yTqcUvMfRRxaqM1",
  "key2": "NJ4RNrhgtviLtoiD9PUcLcAUtXK4sXaCp3YdrC1pq7DEfDoPoyi3UnBFeSFN2javqHt2FzvgzsoEMB2coCXVHxp",
  "key3": "5orCByYTkcHmbiaM7Mbbhpd7CsiikaHGA7qDeJ14Wa7jc5WVQHeKQcsftTKbMMMHtZVVSFES7DRTpcveTsBax34P",
  "key4": "4EnH1qM53yB2VHGdwaXd9tUXpuAMpuujerPGcuyP1zFeeUPhWwNQYvPNNUM6SE9f7C6JR8L2maBsyS9ovdQXkwu6",
  "key5": "dqv2mvYxnh6v6xEZBAybTFD3S7pwdUWNao2tt24v41DpiQUAqJUxecxp7cE1uXdQykHQGhBcUwtuKj7qiMrQaGf",
  "key6": "q4iXWWKoS5APDVcHDtEwGgneKwPbaLjvZEhzVkiPo4ZisNFs7qWPruya8miCV8jkZfCX1ciYsfoMbMC86yMi3YZ",
  "key7": "3w9JSsz8YpmgQUSA45uUeFH79b9w3513rf5vkeBz6NXaDDy9cjDnm7gByx5oue2u9GzXrUVvJqRXNrXx59XyJ7gu",
  "key8": "n1uKzFZmaHBTNMeHzXQfkfiVY8r8TxmgkXr5V4QgAA312PRJFi68j6taLvBqcZGrsLzJPpJ1iHuxc2usBBhPcvt",
  "key9": "2u7YxC6pXvo2GKkfkPZzR2XPkNzj7EJJzBnb5pz7pHTkSVDAF4ob6Xxnc1gm8QVWXEHBUnkVPW8a6u7tKVrGfLKh",
  "key10": "4ink2FTSyntbACbsvHmpmFMmC7JZih1Yb6MrJuQTsqHRq9achoJvZoC6xMjxXR42tkc5swhmMnsUkK3n498PPTye",
  "key11": "5oeu5JfNwb5TXbXrx8wUuRouCQgDHf8HVtA7vA6jPShbgc7nwmPVb7yLNBnbWxiTzUKCohGngJ2HyokJnqRGXx9C",
  "key12": "3RXKrofgSKkpwtMmHccpPDeHq6TEQmLPTMBtWn6q77TtsQmi2eiqvpseJyM5QyAzQAsxyirKbgSvuBBWhKGch6au",
  "key13": "sx4dK5qP7hxsh64PMU1MrDHSE6H3YJYhUMG87XUReRqByv9ciFnnWh1JnbFZUC5U6AJ1NipkmwhRo5zMTEJRen5",
  "key14": "4U2TkLr8egWxSokNtLzUxDzZvLRmFxxDS7r4FEGKXAikWoX5LW1NDLP5gb698n3o7ZtHsCVPX7nx49M4cFgD3TRk",
  "key15": "2FUkxyQZCyfVVDDgDwkRNkpMWUqRWYMcUMGFQc8Unxoewp836bK424DmnooGcoLW6P1Sb2veFq6ryAK4fWKh7Kfr",
  "key16": "2ftzh3G7y1W34K15QPonDUwCMiEbxzqD4RguG73BEkHwd7BimfQCCi55V3FZ6YoTAEZcWFBpcB1sinSJnfekzkqt",
  "key17": "5y3xiMJV3KypCfWBvxS15412gy61TevYupmEhDpdGC1W3wVHVgoUyQMBSStGUCsG4F7ADnjfzXhyHd1MX8xg4ZhL",
  "key18": "3CY7VhYJh3BLDRz2ZBDvQ5bw6nE1952fiUVN2PnyPgb5GxSXnWGXTZfLe7oNj7TRkzAA7sj54PEwGJvKPeELG8uM",
  "key19": "5cP83wQ73WjepXP7Mc8YpwCpJ85pZS6JFcyi6ziVSbDsJhDC44akQ6Lq49oKfpSAJyftXRpcmhyLLYbnU5K9VVjY",
  "key20": "2swVDfn76xDYD7xmVVFSUXENd2xTRgQ11ySFia47MibR4qvwwKsS3qMJUgbDnN56w59K32D3ZyyhRQcYMG79Pxjf",
  "key21": "5XSaTVT5UUvbmK68PSQFiqLmM7aq1LmBCrUtPBYMKTbiw15BFTjZJRGZyvbk7hWf9Dqyg4DZRpsFnPt39voD12NQ",
  "key22": "5gYv3qJapzELjM27qGwc3S7BB6zZtpfZzLKjCu3ZARYxNsDKmjZaMfB6y4bJaxjfrmo1ePWhVJkNucwgozub5THg",
  "key23": "3NvSehMe6tdmgkELf3Zpwak9hMswRxq8G9aY2Xf4C69BEZ5RTG3ph2wantFNzZQM1aTdLkseNGYUG7L3ZCgmhWGN",
  "key24": "2RbQxW2t4mGmjKRkR6j7ZFMhBtYka89GUDmURHM8nLSbwDaVhpcah661jnVBmG6Z8GctJsWEACGhGJkfiX3sQX3M",
  "key25": "nAE6qaydypeTEvmktQyBKAm6pXDFYhPkrHv8TDRKt4H4skKmsZmp1mQjnkiLYpTzdvdvefMfBHRjdTZ6TKbKMxf",
  "key26": "2mfuUcUmbM77GpwTDnz9uy9RaUiagFuFNfVAvEwQE6n87KYDaDR6ioa3BnqupRVxfnhjEyyVHq6mQw8ovTg3qfHd",
  "key27": "5wpqZR1j1ESyAh6f5tKzW8KvZwRW1pJEzj4ooSqQqk5GdBBsUNck8JQ4mKZnADdt6QmXchAzukg9yUWLop3ZwojT",
  "key28": "4YvSA9voAiG5JYqYCaWMGd5gDBmSpNsjHQcuoQ7nCpZb2AuvCpVUMEKh3GQRMAhFYsAPBE9QoftewyzMhAwxSt7t",
  "key29": "xyE1MgoxjXiu1uvob6LsbzEvKMaMDDzXX754hEUyX6fbW2AEnwRdywqKyKkZ4jtA56VEkbpmirNRihi6KugmqnP",
  "key30": "42MDgwi74S7D5bDWE3NU5dHfc8bGs9SuRnNBXMsLivWjcXZzVGaZ6opNrvjoGXKJRGj7FmyohShygxSKCwpCwGK7",
  "key31": "5a1qJQ9WvpdwKZAmpHbkfAvjd7jowUirWY8ysddnUaKXqXnEcnVgBdSendL1KVt5zCmWWUJthfMZWi9ifr1hY35u",
  "key32": "5eherxfM41bsb3b9S69bQn4oEYTvfiDREP2ko9z3UPMUwgjSK5qYM2X2PmKYiTYPZzjcAs3UKtwUC1H4YcYCevHa",
  "key33": "2C1Pqro2p2EH9Z9SRiHEaQ5AczNXqouxNdbz9YcEpSmGHyZ62Ce3GTdHhCV5w61fyFrj4PkuQ9HL35pau1qRSHX2",
  "key34": "4CFCV86m3JzDCoqj3dd7tgoanbxhHKw49fozvysTq5jiMSMiERB298LpK26yFuK5QdgQSZdThDeHuwNtZg2wdKPb",
  "key35": "2rMUwbkSVgE3aRpbZKXqE8fZaxzWtukMaHprJxjFnk5LiMBCCxMaRSxaSHtNV6tPjue55BZj4fjDqQ3DU1oVw32f",
  "key36": "4HKWmn4v34aiPYN7AaLFKcP2CfHmGUrRPiv9qxsLS7S7ZPivoppbzcwGnZAsSoWhgK43QGuxYrR3ZJmVg4uPBtaU",
  "key37": "4VDuiNvipPsdXPeJAbTuDPRG3JDLsswuAhYkQH2GFV5wAXN7JfSYbLyDYGhTAXdzG8qYVV6zQXnTcRz5F3BhMmji",
  "key38": "25Pwx64zZ1FSBs6zAMARmfJwjFPdkSRDMBNABmXWar7gAkdk37hNEWhP5WMBDyCn6WHs4FZtavdembeXThiXoQVf",
  "key39": "2rV478D2ETw565Wh39dtTA9rJmis5YRYfGQGNRo9ie142yq56Ft3H4vPpZ2ZkkX4AGndNRXDBj2DuJnPthKareRb",
  "key40": "124cjbuHJkifr3X7bYLEQemVgcEYModaNVYkrhqoYbDtfE4jPmUCPgZoVBgKDyrqYRQbvsQW7J4suR8wM5aQjzQm",
  "key41": "27P17zMb3TSZZzs5PTRWsg1PsMry1GVZjwPiFru7QN2aneRYtZXTT6DGYwyoRMjorK2vye9tfNXT5VSQq9GgZkGA",
  "key42": "3UQfwXZS3jCnCcZadEDNa8RSWF9WUUh4T2C7LmBpJvDnj6ZvguHL77yMRA3yvewhbZh6637h9zYoE32npiKs24rk",
  "key43": "5gmXpyc5agnG9t93dAbnDty1LuNp6kaCiE8D1JhahHR6mRUJSpsgYEDaXQCMB7F8pCbGtWzg7Mx1uMtFT6PdSL2K",
  "key44": "HNQApoJt2FVjCxKCagsDDMTsmPxevuRYoS7LPqCbfveyiwyPCuFTgbbGFaQfaeG1aAtJZritGcNMAoGjvajQRjf",
  "key45": "2p5V8HCY72SQMcuhFGrHHWmuv5i8oPQ6GQHASsFqeuPEU9uPdZ76my3nqkEJuvj5mmYi86VLLBCG9zTK4u9MF6u1"
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
