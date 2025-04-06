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
    "2gzumcxsP835NR2nwpHaR6681xAavV9xcZyYMt3Lv1XYzo7n54ga2jaFPQDToqZHZ7BiAoTDuCSuysGs84hner8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45HWB1gDVLvKAHbzGiK5hpcKaVgdKN4syFvebwyJ3xYx6nWywLU7kXGb12wuDjyQqVYoPERWt1JoQLREtRvdY7rh",
  "key1": "5qroebLhk8v5uCyKKFQUsbZofJsd32867enWQ3cbWAMsF1itN2bUzWLh6iSMRhT9Ewzs5sRbHtJnkrYuyM6nCJ53",
  "key2": "3apygdqhUTuEZ9csavRfNkMQegnyf84M9YX39MGbi8QY8TkcF7UNNRUagaKLvwdzmRYimKAXHuc4Y99r7UmihpRY",
  "key3": "D7TnKAh88p2s8mK8TMzHRegsXcnTTaU2uQaoSM5T7cHFShYd5XxXoav6grBLaB8QWRnF2AAn1FE8rN9uNy3tCFT",
  "key4": "437BSGSD77qpNUZrZTbh2gZjcfhSE23xaeD7iLDbmVVxMKWjeekB3m4ZRpW1evh919yiCC1oHRwTBay71Lx48big",
  "key5": "2nPL1hCEekafk1H5Ubrt7U26AbJEQWrnRZhNfbzsMTsvdpr5LAen3qxaZHwj9MMKuRZc4XnwXcq29gd4YdeSH9v2",
  "key6": "53DAAi6vbKNiaHW2guXLgxsceUCJuZ3tC65AVifQt4yhVFGKKi4V5Y7nLiN4zaRy3b7qkabHmgXaFAp921gJtykV",
  "key7": "38yCwQKPrKy6DzVmWjmzk3EymzQYmnVjCxnqqo3BXEsvW46tyxptK4FGrNqoWcaSn42aLqZTqnZWppJfy4pZtnhi",
  "key8": "64DKi2BGbSzQRvtatT1Ddu6CpHSwu4WSUVQN9v1CXUphaBf4JATCjVCdB5zzctwCUgFvvNYcvCEBzLtRwpbi9pCV",
  "key9": "3H4vJpirSR7i3JYYo1Gxk7vM6abt21ZfPRW9DLNtQi6yL4hopYhfuGahgu9pru99CYp3QKpXa4pPnBm9eYkhmnos",
  "key10": "4brAtCZ7dWkUa2fjfJsp4eYis8Kq2gvokUQM8JaAEp12cVzMqkB93Z1KkRRNgBhvzvUonkanTDXjJStEX2DH8Moq",
  "key11": "2CSpJLAeDZC5XZi1vp5vbs9enTU26rX9mT6iQceSyeHEUv43NXQvt4uzRChN5V85gFx641zeKuDsZ49Hbf6SPHcb",
  "key12": "64LWy4tctqKSXanCaMzmpcr1MD8srSApGPKNZYM2HMuDCnBYzccfqrFiJbUNp9pLW2byLNK6Rf79jzzHc8GmdnFX",
  "key13": "2V382BdESn8EFPVgVsLBowdwfJ6ZodcJjSnjZQXY9uBtc6KgxrsRPCmbQc1vWHqAjNee34UQfH617W5nYHUzXAbz",
  "key14": "2ACnkdhqxPDFdrCXCExu5sNRZanr77mCiAorW8XCgAknj56e81km1jEqVYjPmfb3x1V5owiveZdyu8HLtnBXPQL6",
  "key15": "5Cs6BngG2NqY1MBkYrj9ujWY2qLGaUd2w9xvbZfDygk14MN61Qn3dRszWnaAsYUxSABqBqVRLo3jMCyEVPWHrDpC",
  "key16": "5wvG6AJF9z1Y8cJVr93a9YhQtURKCsbjbSH4eLLZQKWT6Mqxjc4rzhsuuNwHvH7jHnAmsUVVqmiAC7LokoCxZm18",
  "key17": "2zaoma2sbvSbv6tD5xiqvcdQLe77pS4ETTbuJHaPHCii7SxBxrp3b9QRj9QeoxXQKqx422n3MwKxfWq2Mn3JZT4d",
  "key18": "55HWXYW8sVVMJcnBfFnSxzdYQeFBadxb9Ecov8vZNhtq7Zj1QaxEztMTQtQGy15SwDj7QPhYRfEq2VgaqNw4WkMs",
  "key19": "269U36dBJLnWp4oG4h6V4gCzMzqaMg33GRtfVVx3c9Euw4XsdaJ8dLCZ7dLuB1tTz8uKBeupi41kH4237fhibjgy",
  "key20": "57dv1AaMssrXd5SMuP4XDxmevn3iqsuujteHfWEf5bHPdrDSHtAhQsy5zSjax3V51b2pQZCqpXhQMff9pcVXcNRh",
  "key21": "4yRPBmHQ1uqTTMeYKu4JJEw9TiiEvqf89HEMHjAgjq5d2a6bQc9sQT8KnZ9xrEKxwGwN7H1sgmGb9EaDW8zbtmwD",
  "key22": "38hjcV1ZcgEGxXjqb725DksuVtTytj1oTqoKoLjH1th3xqKuPg1HEC5LFcPBqb8cWMcLLQuE4aQLecCLY3kMDtyo",
  "key23": "2GjKM3csMAoXiyseXNKDpH13hXQubnb4mYXSehVcwV7NuFaery9UY7YMAeycybfAc7NsvN2DZ5ayDKYX7R2TuLoj",
  "key24": "5HvkXgWTNr2DugEQVf6P69PUD8o9tA9nceFrxgSyeNJzDP1p6zKiAxoYF5XZmiAbuzRUHHn9uRywpcouBW1eC5iK",
  "key25": "38bGkdNAUd2B4ZBXhrYfQFERLtxAtpp3Cx19aKDf2rmDPpBwBZv2V3F2UkrqEKpezDgmK3vqtmm3AEYG7G9QRWUP",
  "key26": "2e8fotRmQoFFUoLwdwebaRALZwFrSZfvMZGZ7HAXHvC793AeC589WB35ETKK6G4gnCzp4xm7YcyzunJUnTTejUWp",
  "key27": "3YKb1rtFswQ2VoLz5veb6yCBQA4UTJnriDQ6Xu6udn53SecYmWk6VAit7U44KBM7TFQn3ykKLPApqPx369BdMKak",
  "key28": "5t4BvEyA1tzG5qPWNyYmEiTXHrwaFkePSzswAWEia1u7wZoPwzd1NhcNddYKNtbaX2CDnAsYToVigSS55mYxiv2a",
  "key29": "3BCLRYKbSCaXtNJsRiuJSQ1f5RrfaoEQYWyBtQ8Y7QgRUnGE7NEHHKCCBAoMm9p2X9PDcoF1ze4u9WFwYB8rHGSN",
  "key30": "5DE21pxWHpMcgZim46mU6xMuGpDV94STX61EBmZrgxxjVnXzkbbQk2XznKPYxyU6WxQg9ZT22vQ6z3mpUZMMXG6W",
  "key31": "4Fjcrr1r78cnRoQeFvNDWyi4xPUisq5PeMTFg5bq9pujsENZ5vJUGPwgAMh9rMX41ZVV26oKmPiJeVoBzQMALSTo",
  "key32": "5mRiftgP7Vm2NJCt8sxjc9izDeHgcQkoCPeT4QpgfBqJjet9AoED5env7wmiHBWXy1SYzrPxLu2W1oTaztTAhYnY",
  "key33": "3WovmHkFbEkdmNfetfa9Q5qpeBnY28S1UBjxvwdNt9ZrUhtt72TNg1ouEG2G5UBFS115WhgfoEDg6Jdoxhbfqofj",
  "key34": "3z3ghdcekqx2HQNdvABmaCCvF5y7Q2K6puRGtgCogDm1eBaUn5MY4ZcUVCNbR6sK813n4TD5LTmCkhdAKmAMiX2U",
  "key35": "3w9et8898YpD6fYWsZgnbhKpHaEg3ZL8vKWcVKYTx6BcaTDL6Q8c2hyZr84bEFuVAaNAGMgmRyD3tTQXEUDBwDzH",
  "key36": "27cRAyUKj6JJBiuoQY4EfASYNR4xy8yNkVPcdzR4iPKoqFPE3KeKnEz85t98oRxDnQDv9XFma2zTUh2rENeSvRib",
  "key37": "3626iT35h8mmFEh9sjybk1QoYv5xv2CEd2awap69YMq4nf868puUBkPaNodmToBMcJhUr7yD6yc1sbp64EpkPYp5",
  "key38": "44CoXWUtC3MEjMEnsVfbZBssScEUUz6THiprhXroHQWKDduoBt5ck9XdLsDb1X3t8MQhWVh2KbGM1ZVtC6mjBsFC",
  "key39": "5FwaDE6h8wmHekY1JiJ8ec9NKmDfvhz8PtCFEqmGoiYUxpWx9x3xkJ3ttrULFuriL4QZtsCE7yqRYUJwNDmbEoFo",
  "key40": "5UrFaLtsA5wUfWmj5jiQyuAwPzKg19XMrWwj8YaY85AjePKjooYz5J5Axs8aJSCuGw7hEK3nk5KjqDbVsKDZF1RA",
  "key41": "yDgYtmuCe1Sbmj1TLJQR5fkd4jXadpvcM3Ptnye58CwvSvLuYsJEYXMMrNEkfR6bUfeFsQiMz5Z7EFgRXQn1ES8",
  "key42": "477gbJo1Nvme7zDZTK2nuAs3imFFVTkPRUUe3HEYfPNgcHC5G9hRp8o46KLKNV66GKwia2pskJmLsZ2CEuBZWzfq"
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
