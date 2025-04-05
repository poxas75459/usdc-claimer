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
    "3VnqcDCYpfFpm3p8WWxumKriTF9xyT2J8vE44GsJzr9YJdQGofeMAEzy8TDqNrouFPD32W2qXj7jPJqn32ZPmdjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BUXCXzkKLaBLyfKPw3Ud5hevQvNX4nNywohirSooouEapumPUaFPnzyte2GVWyv94EvDqXJLcvZCwUie5H3LGz4",
  "key1": "LKsyU1ubkCuTphvk2t1rG7R7cecjLBzGkU7jXzdrjWE9MVZLpNokmTZxSL6kA8uFTYW8tCy1S1HGT3P5YNH4Mjx",
  "key2": "4CMawTs2iiCno8MBYmdvFFv3SzGJkVsCpTAcipBWrsrxVw4chwFYpqZPiSF852DuHWVCgnyzyPs8X28P7P9hbcXi",
  "key3": "3Aak11jnmsfTkAQWnLMu1HfUgBGSch9712RsrUm4s1QEDYWdR4ux6SvBGfZhjVNu5XpCxyaknFmeaR42DZcAuk3P",
  "key4": "4iCFKZ7kJt4Y6TCEj65s3EBokrB4E2y9hHYUdNUSZ8uAeV6hQij9o3rYkYcuokw7s15bh1xXCY2hessB2dit5m8m",
  "key5": "3nfexG261NERZxi4drnBCv5sDWrA35vrQXvf8FwtwtdNjoUPvAmH77tY4y7LMJZy8kDXXHEt97kmtjrH7K8EmAgV",
  "key6": "3rvThggYY6VJUyxE6F7r2EETmPgNqcPwPrsAykJLKnqBid9HkLtEFGkRh755dA2ghQLXVv7x53TftvhUi9BueWma",
  "key7": "5SsCpbmcHK9U3ajWZuXiFgGswMJs7G8JqEYDX4v4YqV3UqvCQVKRf7NBVDcFTK9VTEgYKffMr42ECzaCf98sdHVu",
  "key8": "3PbkQoY53cXYEPCZQwZuHKc7f6opEBaaA6PV8vjUcTxYuWfiaXReVeyJZDM6pTm5s7ionhVhqYKx6LdBxAaWhMYV",
  "key9": "47jE4HNp4J3cHTC7YmjMFd86ccb1BWS55XK1AiVXyvHa3MwrGPRSZw9Gu2Twctc5o3rANe5UKpngGUPqFqekzdqr",
  "key10": "S8NKttTqeqgKitWx4WGpfb5gJfKZjK8KMp76VcXaff3MX6niVcGBigfLaRVdRSs3iveCSeaEcbaXtAhXRzfXo9j",
  "key11": "2NPzLJCPLHKHG2gTySGnkfghD72ZGsZcbEDLia937rA3BhXey8xwtcNLQnoGtypvtTMKtt2vDKeJEvM9aW7uf3K7",
  "key12": "3AUKZpYxmwNviFQvVxyioLWcipPDkSZNtktjCWgnPSi7WsX9ikASDMjqtmWevECEdngqCjHhHXT8B4gw6ja8R32d",
  "key13": "5xddZtBH39hDjicXaraGLA9JyqSE4Hav9r965AeuAT6gSVnhRGFEy7aHHvw8wWWEF84J2hsUvDbxTR4KFe95k3nU",
  "key14": "4Ugp1qUWJrzKJZdgjyfgD1BasPWbXvCyoMTafQhkGoPQqFzMGUUG3gmoTNNGcyHqrmFobpX4qvcYsnQ4UAYZymnh",
  "key15": "5abB3Z86yDAkz6zMi23be8N2mU2U51LEnZ1gA5xgwsUHKnRNtAHF8Fq6UKJuAVk9Sf3BDXvPFuVdQ9tDjd9aB63M",
  "key16": "PxdFFZaFBmbnyFzf4q7NM4vWbq2nyfU9zh7bfXAJkj8SGsrYk6jJ3vdFnXUqZTnbw6VPmMgYnx6dFHmB3RxJ7af",
  "key17": "3wNbCV2rf76a7SqnVS7nr85Mb4TXk2afGbd13TBrZ6yFm1McNDJGVP5ZLD4qrAueMD2vCRAYLQnC1wZU4fLEHCX2",
  "key18": "2dE9ED56o8EBvgqRwR487kxDAGPXBWvY7iWmwRJQCWKP191476paE8nf1CcAvtBxWwwvFVzvEFk7p8itX5fXAiWM",
  "key19": "c7LSoni5P14M8qhcxFJHo7biWvW7TNmphSazj3vfzZzh3drMR1xNQzB11ahgwPJDPy6PuXvxFh47n4BsdA7Cmbq",
  "key20": "47myJ2aYMySYVHB6mQAMeUa27eo79HA1xDibAmJ4uV3CDM8Tz1kr2vh8hdB9Li56QSxiiGXpoa7p4EemaVeL6hP6",
  "key21": "655rU6CjgyUkNMxqL3x3tWChZW4hjfpvNbypYmwHrAa6XJxNtX77RVrSV7TdfoTgcytRjGQHAD3WDXkZRZzZgrG6",
  "key22": "49TtX2GmdPu8byMo2nwPQmm7JqzgHN4zQh8wBKUP3qK1huHFxqXCmCWJCH1osK4SvGZoU9ckNQCGEx7jH8NRxbdw",
  "key23": "5Z9iemi5CLG7ZCAKvaHFUnXj6LGhse9yaAPqSyLSkGHsu1YafjxHCGLZMhSf9X9zxjeYUkvwKtuFcvg9LJ5cCbNp",
  "key24": "4kbPvQm8RSK1PH2WTvzCTCgx9mYPAmeodiq1tMVuf6MZBp27pRSNw6huUJZQRKq4TUXpkRh3A8KKZGRNeXRY7fto",
  "key25": "4dEE7FrzY9bVG62LLTkin2CZZDzQSm9AaTmX46Smkd7LbWGswBoCBvr4upEgg1E8Xb2uSDrDFJF5tRRyAvu1czru",
  "key26": "227qwBdaGwYM2WBsgkdoH27hiLv5PNEgjJvezB12WgWtBCTSMMBDA9nb4ayhjGRk1yU43srebXnoJX2iu7pMGmrM",
  "key27": "65ZKfukkc2jfvr6o2f88nRieX8NoKkT2xcGN91N27D2KHTtvPkBN7ir6vBCShvEY7RSeuHExYL9jnzmV3ynEst5L",
  "key28": "252Bb1PfFnyGfgvzd2oe33cARo4kWCZrf32gRZsGEux7phi1jbLwn5jWKx6wJDzTx5jTVXqWd4W8SugPaMZ1mn4Q",
  "key29": "d3BPDQ6B7Uy11PzAku8M4w19KH7DrKGWiAURTfq7DYkUyHjxxNpghqzpgr3vFskEP3dhsLC6JrY2Gx1PMqM4APu",
  "key30": "4ZMaA6vNByBVvWdBZ2JfJ3aN6XEmnvxNHokXJryCJBVtqUQxihG6Z92rjH8yMRjP4kMJM1aCaQAzEZAqGEbuh6uA",
  "key31": "b7Mfz9gMHAV39LJwfSMME4n1BSMusJzuBFhbUX5WHJqRNeji5nA41NehqpyK7coTBaAdXtM5sefa9hNC8vnpapH",
  "key32": "53yiq2wZGZGfVuvvQd9uJdM3JEg24wozvjn6gugid5iF3hXN4nvKKpxXUZRsN86Cs4e877My1XzaBtmVNtw7pAFo",
  "key33": "55HiL9zcJXDYr2QcLnJYAc3qqQbpNwiShTjV56ZeL7zH2JJWN1cg1LqTDhEi1FzZrkquS5q5SyBRwdo6iPumbENy",
  "key34": "4UXWwnEQXh7p19jN6bkjykWsJRaZcY2nPwhR5y7cCTofv9ucUCQ6eNFnF7LZjavE8TQ7vTJmgn2RFQm4ZqfEVshW",
  "key35": "5k5Gd9H3M8v9CdmcV3nhqpwRMWdLrxtJrcaQvmofpq6MZCWFNTxk8HAtpmRxGCHNcU5yAhNqb79SeQisRj8HAeui",
  "key36": "FzGL8twacFgDxq2zBi7MftC6U4WECafDUHd3vdeUwh6rFRtKvV1SXg4ToZgBLeCGJ79D3jWBvtcRMhBWVVvd7jn",
  "key37": "5PbFX1Esav7hF9zoNn9iDYKrohWHbcEeEHH74yRksw4XzhBN3gREEKSshTAXvWDarcmXeGWze5gDYDF7pTdeyApK",
  "key38": "5zDyriNzJDk6NcZxMoXF5V9GToUKfz7VLrfVeuq2pKJu2Wa9C6XJtb2cD61XuKRNZHz23exY9rBWtwCxSPBs2R8g",
  "key39": "3bDUU2RZmSTEZhCqABkociVktB5SMu7oZPQVUYT8SKjvfYfDK2UEeoQ8zPDwvJ3b1GBcRgK7tLuLRkA6ekUFFq35",
  "key40": "3EZBpYJALfxtPWBEhiTek8UWx1qdyqk1E7N2MPEgbZyEPHx5LuVJLQUYpgwpYKnpRXnqjSBgPDie6tkgkn1Dc77U",
  "key41": "4H5UF9x1FvasEhBZFYXRkRcLCUkcduiWnveaYqoyNNpF5ePM8azGTQ8znpr57f2A2AHykfsY5aoNmxvBM1His8Hb",
  "key42": "q1zx9vQiLbN8BPzwgZNTMLpRTnbYVksYK4z6aFWuFAayQR9gUzPR13SPwpvGKZeBFZdbuctCBczNfpkP43yPk2j",
  "key43": "gfHp8ocuq75K2anofr5nEJe6Y5BqT32g7YspFaHt7FrphL7CXJtTQCJx1hVZN9TYbfWMBcJotemdAxtNYxsx9Pq",
  "key44": "5L8gCCNL8nAApiMZ4NR4SeK4vi8vKxswne86U773AcjEoMfxPMKv2EB1AEjnrJ4PXiSfdTPQxRcm1VSHz3ukczcB",
  "key45": "5k6NiJkaQ7pMUR6STjB1PbWcqWDxKdoydxjggdhwF2im3H749NYhdKFpLCF89KrYp32yp8r1yuk192XD2fbdf6eK"
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
